"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || window.sessionStorage.getItem("ju-boot") === "1") {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";
    let current = 0;
    let finishTimer = 0;

    const interval = window.setInterval(() => {
      current = Math.min(100, current + 10 + Math.random() * 16);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(interval);
        window.sessionStorage.setItem("ju-boot", "1");
        setFading(true);
        finishTimer = window.setTimeout(() => {
          document.body.style.overflow = "";
          setVisible(false);
        }, 420);
      }
    }, 55);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      aria-hidden={fading}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black transition-opacity duration-300 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="tron-grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="tron-vignette pointer-events-none absolute inset-0" />

      <div className="relative w-[min(340px,82vw)]">
        <div className="corner-frame border border-tron-cyan/30 bg-black/70 p-6">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-tron-dim">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-tron-cyan" />
            INITIALIZING INTERFACE
          </div>

          <div className="mt-4 font-display text-lg font-bold tracking-[0.16em] text-tron-text">
            JAYASHRI
            <span className="text-tron-cyan">.</span>
          </div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
            PORTFOLIO // 2026
          </div>

          <div className="mt-5 h-px w-full overflow-hidden bg-tron-line">
            <div
              className="h-full bg-tron-cyan shadow-glow-cyan transition-[width] duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em]">
            <span className="text-tron-dim">
              {progress >= 100 ? "SYSTEM READY" : "LOADING"}
            </span>
            <span className="text-tron-cyan">
              {Math.round(progress).toString().padStart(3, "0")}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
