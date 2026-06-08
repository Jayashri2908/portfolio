"use client";

import { motion } from "framer-motion";

export default function FdpViz() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 30% 20%, rgba(56,189,248,0.2), transparent 50%), radial-gradient(circle at 70% 80%, rgba(99,102,241,0.2), transparent 50%)`,
      }} />

      <div className="absolute left-6 right-6 top-6 space-y-3">
        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
          <div className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="font-mono text-xs text-slate-300">FDP Dashboard</span>
        </div>

        {[
          { name: "Dr. Sharma", status: "approved", color: "bg-emerald-400" },
          { name: "Prof. Mehta", status: "pending", color: "bg-amber-400" },
          { name: "Dr. Iyer", status: "approved", color: "bg-emerald-400" },
          { name: "Dr. Khan", status: "review", color: "bg-sky-400" },
        ].map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            className="flex items-center justify-between rounded border border-white/5 bg-white/[0.03] px-3 py-1.5"
          >
            <span className="font-mono text-[11px] text-slate-300">{row.name}</span>
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${row.color}`} />
              <span className="font-mono text-[10px] text-slate-500">{row.status}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-4 grid grid-cols-2 gap-2"
        >
          <div className="rounded border border-white/5 bg-white/[0.03] p-2 text-center">
            <div className="font-display text-lg font-bold text-sky-300">42</div>
            <div className="font-mono text-[9px] text-slate-500">faculty</div>
          </div>
          <div className="rounded border border-white/5 bg-white/[0.03] p-2 text-center">
            <div className="font-display text-lg font-bold text-indigo-300">12</div>
            <div className="font-mono text-[9px] text-slate-500">events</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-3 right-3 font-mono text-[9px] text-slate-600">
        React · Firebase
      </div>
    </div>
  );
}
