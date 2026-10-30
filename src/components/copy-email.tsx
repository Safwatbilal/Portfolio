"use client";

import { useState } from "react";
import { Icon } from "./icons";

export function CopyEmail({ email, label, done }: { email: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <button type="button" onClick={copy} className={`copy${copied ? " done" : ""}`}>
      <Icon name={copied ? "check" : "copy"} className="ico" />
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}
