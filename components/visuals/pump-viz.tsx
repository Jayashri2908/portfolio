"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PumpViz() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setRotate({ x: dy * -15, y: dx * 15 });
    };
    const handleLeave = () => setRotate({ x: 0, y: 0 });
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(34,211,238,0.3), transparent 50%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.2), transparent 50%)`,
      }} />

      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }} />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg viewBox="0 0 200 200" className="h-44 w-44" style={{ transform: "rotateX(15deg) rotateY(-15deg)" }}>
          <defs>
            <linearGradient id="pump-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="pump-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>

          <ellipse cx="100" cy="170" rx="60" ry="8" fill="rgba(34,211,238,0.2)" />
          <rect x="40" y="155" width="120" height="12" rx="2" fill="url(#pump-grad-2)" />
          <rect x="55" y="80" width="90" height="80" rx="4" fill="url(#pump-grad)" />
          <rect x="60" y="60" width="80" height="25" rx="3" fill="url(#pump-grad-2)" />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "100px 100px" }}
          >
            <circle cx="100" cy="100" r="32" fill="rgba(0,0,0,0.4)" stroke="rgba(34,211,238,0.6)" strokeWidth="1" />
            <path d="M 100 75 Q 115 85 115 100 Q 115 115 100 125 Q 85 115 85 100 Q 85 85 100 75 Z" fill="url(#pump-grad-2)" opacity="0.8" />
            <path d="M 100 100 L 100 70 M 100 100 L 130 100 M 100 100 L 100 130 M 100 100 L 70 100" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          </motion.g>

          <circle cx="100" cy="100" r="6" fill="#22d3ee" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute left-3 top-3 font-mono text-[10px] text-cyan-300/70"
      >
        PUMP-04 · ONLINE
      </motion.div>

      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[9px]">
        <div>
          <div className="text-slate-500">FLOW</div>
          <div className="text-cyan-300">42.3 m³/h</div>
        </div>
        <div className="text-right">
          <div className="text-slate-500">RPM</div>
          <div className="text-cyan-300">2,950</div>
        </div>
      </div>
    </div>
  );
}
