import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Sector not found",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center px-6 py-24">
      <div className="corner-frame w-full max-w-xl border border-tron-cyan/25 bg-tron-panel/80 p-8 backdrop-blur-sm">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-tron-dim">
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-tron-orange" />
          Error // Signal lost
        </div>

        <p className="mt-6 font-display text-[clamp(4rem,16vw,7rem)] font-black leading-none text-tron-cyan neon-cyan">
          404
        </p>
        <h1 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-tron-text md:text-2xl">
          Sector not found
        </h1>
        <p className="mt-3 max-w-md font-mono text-[12px] leading-relaxed text-tron-text/60">
          This node does not exist on the grid. The requested page may have
          been moved, renamed, or never rendered.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 border border-tron-cyan/70 bg-tron-cyan/[0.04] px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-tron-cyan transition-colors hover:bg-tron-cyan hover:text-black"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Return to grid
        </Link>

        <div className="mt-8 border-t border-tron-line/70 pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-tron-dim">
          Jayashri Utrankar · Portfolio // 2026
        </div>
      </div>
    </main>
  );
}
