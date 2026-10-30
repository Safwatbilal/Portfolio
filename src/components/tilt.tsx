"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// 3D tilt for [data-tilt3d] elements (value = max angle in degrees). With a mouse they lean
// toward the pointer; on phones, elements that also carry data-tilt3d-phone follow the phone's
// tilt (Android only: iOS asks for a permission prompt, which isn't worth it for decoration).
// Writes --rx / --ry (angles) and --mx / --my (glare position) and toggles .is-tilt.
export function Tilt() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll<HTMLElement>("[data-tilt3d]")];
    if (!els.length) return;

    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    // x, y in -1..1 from the element's centre
    const set = (el: HTMLElement, x: number, y: number) => {
      const max = Number(el.dataset.tilt3d) || 8;
      el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${((x + 1) * 50).toFixed(1)}%`);
      el.style.setProperty("--my", `${((y + 1) * 50).toFixed(1)}%`);
      el.classList.add("is-tilt");
    };
    const reset = (el: HTMLElement) => {
      el.classList.remove("is-tilt");
      for (const p of ["--rx", "--ry", "--mx", "--my"]) el.style.removeProperty(p);
    };

    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const offs = els.map((el) => {
        let raf = 0;
        const move = (e: PointerEvent) => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            const r = el.getBoundingClientRect();
            set(el, clamp(((e.clientX - r.left) / r.width) * 2 - 1), clamp(((e.clientY - r.top) / r.height) * 2 - 1));
          });
        };
        const leave = () => {
          cancelAnimationFrame(raf);
          reset(el);
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return () => {
          leave();
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        };
      });
      return () => offs.forEach((off) => off());
    }

    const phone = els.filter((el) => el.hasAttribute("data-tilt3d-phone"));
    if (!phone.length || typeof DeviceOrientationEvent === "undefined" || "requestPermission" in DeviceOrientationEvent) return;
    let base: [number, number] | null = null;
    let raf = 0;
    const orient = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;
      // the angle the phone is held at when the page opens counts as "flat"
      base ??= [e.beta, e.gamma];
      const x = clamp((e.gamma - base[1]) / 18);
      const y = clamp((e.beta - base[0]) / 18);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => phone.forEach((el) => set(el, x, y)));
    };
    addEventListener("deviceorientation", orient);
    return () => {
      removeEventListener("deviceorientation", orient);
      cancelAnimationFrame(raf);
      phone.forEach(reset);
    };
  }, [pathname]);

  return null;
}
