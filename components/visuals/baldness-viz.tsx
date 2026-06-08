"use client";

import { motion } from "framer-motion";

export default function BaldnessViz() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.25), transparent 60%)`,
      }} />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-32 w-32 rounded-full border-2 border-emerald-500/30">
          <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <motion.circle
              cx="50" cy="50" r="46" fill="none"
              stroke="rgb(16,185,129)" strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="289"
              initial={{ strokeDashoffset: 289 }}
              animate={{ strokeDashoffset: 89 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="font-display text-3xl font-bold text-emerald-300"
            >
              69%
            </motion.div>
            <div className="font-mono text-[9px] text-slate-400">probability</div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-slate-500"
      >
        <span>OpenCV · Haar Cascade</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          live
        </span>
      </motion.div>

      <div className="absolute left-4 top-4 font-mono text-[10px] text-slate-500">
        model.confidence
      </div>
    </div>
  );
}
