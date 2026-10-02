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
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-line px-4 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-surface-2"
    >
      <Icon name={copied ? "check" : "copy"} size={18} />
      <span aria-live="polite">{copied ? done : label}</span>
    </button>
  );
}
