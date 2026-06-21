"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Chat button ─────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-all hover:bg-ink/90 hover:shadow-xl"
        aria-label="Start a chat"
      >
        <MessageCircle size={22} />
      </button>

      {/* ── Chat popup ──────────────────────────────────── */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-80 rounded-2xl border border-border-light bg-paper shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl border-b border-border-light px-5 py-4">
            <span className="font-heading text-sm tracking-wide text-ink">
              Let&rsquo;s Chat!
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center p-0.5 text-warm-gray transition-colors hover:text-ink"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="space-y-4 px-5 py-6">
            <p className="text-sm leading-relaxed text-charcoal">
              Interested in a commission, collaboration, or just want to say
              hello? I&rsquo;d love to hear from you.
            </p>

            <a
              href="mailto:ink-moment@gmail.com"
              className="flex w-full items-center justify-center rounded-full border border-ink bg-transparent px-6 py-2.5 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper"
            >
              Send an Email
            </a>

            <p className="text-center text-[11px] text-warm-gray">
              or reach out on{" "}
              <a
                href="https://instagram.com/inkandmoment"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-ink"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
