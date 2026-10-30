"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Locale } from "@/i18n/config";

const KEY = "sb-sound";
const HINT_KEY = "sb-sound-hint";

const copy = {
  en: {
    mute: "Mute sound",
    unmute: "Turn sound on",
    hint: "Sound is on. Tap the waves to mute.",
  },
  ar: {
    mute: "كتم الصوت",
    unmute: "تشغيل الصوت",
    hint: "الصوت مفعّل. اضغط على الموجات لإيقافه.",
  },
} as const;

// The on/off choice lives in localStorage; subscribers re-render when it flips.
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => void listeners.delete(cb);
};
const isOn = () => localStorage.getItem(KEY) !== "off";
const setOn = (on: boolean) => {
  localStorage.setItem(KEY, on ? "on" : "off");
  listeners.forEach((cb) => cb());
};

/* ---------- audio: everything is synthesised, the site ships no audio files ---------- */

let ctx: AudioContext | null = null;
let master: GainNode;
let padBus: GainNode;
let padTimer: ReturnType<typeof setInterval> | undefined;
let chordIndex = 0;

function audio() {
  if (!ctx) {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.connect(ctx.destination);

    // Pad chain: warm low-pass that slowly breathes, plus a soft echo for space.
    padBus = ctx.createGain();
    padBus.gain.value = 0;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 900;
    lp.Q.value = 0.4;
    const lfo = ctx.createOscillator();
    const lfoDepth = ctx.createGain();
    lfo.frequency.value = 0.05;
    lfoDepth.gain.value = 350;
    lfo.connect(lfoDepth).connect(lp.frequency);
    lfo.start();
    const delay = ctx.createDelay(2);
    delay.delayTime.value = 0.6;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.35;
    padBus.connect(lp);
    lp.connect(master);
    lp.connect(delay);
    delay.connect(feedback).connect(delay);
    delay.connect(master);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** A short soft "tap" for clicks. */
function tap(pitch = 1) {
  const ac = audio();
  const t = ac.currentTime;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  const f = 620 * pitch;
  osc.type = "triangle";
  osc.frequency.setValueAtTime(f, t);
  osc.frequency.exponentialRampToValueAtTime(f * 0.55, t + 0.09);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.12, t + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.13);
  osc.connect(gain).connect(master);
  osc.start(t);
  osc.stop(t + 0.15);
}

// Am9, Fmaj7, Cmaj7, G6: calm, lo-fi feeling chords (frequencies in Hz).
const CHORDS = [
  [110, 164.81, 196, 261.63, 246.94],
  [87.31, 130.81, 174.61, 220, 329.63],
  [65.41, 130.81, 164.81, 246.94, 293.66],
  [98, 146.83, 196, 246.94, 329.63],
];
const CHORD_LEN = 8; // seconds

function playChord() {
  const ac = audio();
  const t = ac.currentTime;
  const notes = CHORDS[chordIndex++ % CHORDS.length];
  for (const f of notes) {
    for (const [type, detune] of [
      ["sine", -6],
      ["triangle", 6],
    ] as const) {
      const osc = ac.createOscillator();
      const g = ac.createGain();
      osc.type = type;
      osc.frequency.value = f;
      osc.detune.value = detune;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.018, t + 3);
      g.gain.setValueAtTime(0.018, t + CHORD_LEN - 1);
      g.gain.exponentialRampToValueAtTime(0.0001, t + CHORD_LEN + 3);
      osc.connect(g).connect(padBus);
      osc.start(t);
      osc.stop(t + CHORD_LEN + 3.2);
    }
  }
}

function startPad() {
  if (padTimer) return;
  const ac = audio();
  padBus.gain.cancelScheduledValues(ac.currentTime);
  padBus.gain.setTargetAtTime(1, ac.currentTime, 1.2);
  playChord();
  padTimer = setInterval(playChord, CHORD_LEN * 1000);
}

function stopPad() {
  if (!ctx || !padTimer) return;
  clearInterval(padTimer);
  padTimer = undefined;
  padBus.gain.cancelScheduledValues(ctx.currentTime);
  padBus.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
}

const CLICKABLE = 'a, button, summary, label, [role="button"], input, select';

/** Click sounds and a soft ambient loop for the whole site, plus the header waves that mute them. */
export function SoundToggle({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const on = useSyncExternalStore(subscribe, isOn, () => true);
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    let hintTimer: ReturnType<typeof setTimeout> | undefined;
    const onClick = (e: MouseEvent) => {
      if (!isOn()) return;
      const el = e.target instanceof Element ? e.target : null;
      if (el?.closest(".snd")) return;
      tap(el?.closest(CLICKABLE) ? 1.25 : 1);
      // Browsers only allow audio after a gesture, so the loop starts on the first click.
      startPad();
      setPlaying(true);
      // First sound ever: tell the visitor where the mute control is.
      if (!localStorage.getItem(HINT_KEY)) {
        localStorage.setItem(HINT_KEY, "1");
        setHint(true);
        hintTimer = setTimeout(() => setHint(false), 4500);
      }
    };
    // Go quiet while the tab is in the background.
    const onVisibility = () => {
      if (!ctx) return;
      if (document.hidden) void ctx.suspend();
      else if (isOn() && padTimer) void ctx.resume();
    };
    addEventListener("click", onClick, true);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      removeEventListener("click", onClick, true);
      document.removeEventListener("visibilitychange", onVisibility);
      clearTimeout(hintTimer);
    };
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    setHint(false);
    localStorage.setItem(HINT_KEY, "1");
    if (next) {
      tap(1.5);
      startPad();
    } else {
      stopPad();
    }
    setPlaying(next);
  };

  const live = on && playing;

  return (
    <span className="snd">
      <button
        type="button"
        className={`snd-btn${live ? " is-live" : ""}`}
        aria-pressed={!on}
        aria-label={on ? t.mute : t.unmute}
        title={on ? t.mute : t.unmute}
        onClick={toggle}
      >
        <span className="snd-waves" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </button>
      {hint && (
        <span className="snd-hint" role="status" onClick={toggle}>
          {t.hint}
        </span>
      )}
    </span>
  );
}
