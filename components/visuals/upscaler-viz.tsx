"use client";

import { motion } from "framer-motion";

export default function UpscalerViz() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.4), transparent 40%)`,
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }} />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-6">
        <motion.div
          className="relative h-24 w-24 overflow-hidden rounded-lg border border-white/20 bg-slate-800"
          initial={{ filter: "blur(8px) brightness(0.6)" }}
          animate={{ filter: "blur(2px) brightness(0.9)" }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0" style={{
            background: `conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)`,
            filter: "blur(4px)",
          }} />
        </motion.div>

        <div className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-xs text-indigo-300"
          >
            upscale
          </motion.div>
          <div className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                className="h-1 w-1 rounded-full bg-indigo-300"
              />
            ))}
          </div>
          <motion.div
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-xs text-purple-300"
          >
            4× → HD
          </motion.div>
        </div>

        <motion.div
          className="relative h-32 w-32 overflow-hidden rounded-lg border border-white/30 shadow-lg shadow-indigo-500/30"
          initial={{ filter: "blur(0px) brightness(1)" }}
          animate={{ filter: "blur(0.5px) brightness(1.05)" }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0" style={{
            background: `conic-gradient(from 45deg, #6366f1, #a855f7, #ec4899, #6366f1)`,
          }} />
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-white">
            HD
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[10px] text-slate-400">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        Real-ESRGAN · running
      </div>
    </div>
  );
}
