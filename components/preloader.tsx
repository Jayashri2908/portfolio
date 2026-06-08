"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    const tick = () => {
      current = Math.min(100, current + Math.random() * 12 + 4);
      setProgress(current);
      if (current < 100) {
        raf = requestAnimationFrame(() => setTimeout(tick, 60));
      } else {
        setTimeout(() => setDone(true), 400);
      }
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={(def) => def === "0" && document.body && (document.body.style.overflow = "")}
      className={`pointer-events-${done ? "none" : "auto"} fixed inset-0 z-[200] flex items-center justify-center bg-background`}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display text-2xl font-medium tracking-tight"
        >
          jayashri<span className="text-primary">.</span>
        </motion.div>

        <div className="relative h-px w-48 overflow-hidden bg-white/5">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="font-mono text-[10px] text-muted-foreground">
          {Math.round(progress).toString().padStart(3, "0")}%
        </div>
      </div>
    </motion.div>
  );
}
