"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  { p: " ", c: "text-slate-500" },
  { p: " ", c: "text-slate-500" },
  { p: "const", c: "text-pink-400" },
  { p: "  ", c: "text-slate-500" },
  { p: "developer", c: "text-blue-300" },
  { p: " = {", c: "text-slate-300" },
  { p: "    name", c: "text-blue-300" },
  { p: ": ", c: "text-slate-500" },
  { p: "\"Jayashri Utrankar\"", c: "text-emerald-300" },
  { p: ",", c: "text-slate-300" },
  { p: "    role", c: "text-blue-300" },
  { p: ": ", c: "text-slate-500" },
  { p: "\"ML Engineer & Full-Stack Dev\"", c: "text-emerald-300" },
  { p: ",", c: "text-slate-300" },
  { p: "    cgpa", c: "text-blue-300" },
  { p: ": ", c: "text-slate-500" },
  { p: "8.55", c: "text-amber-300" },
  { p: ",", c: "text-slate-300" },
  { p: "    building", c: "text-blue-300" },
  { p: ": ", c: "text-slate-500" },
  { p: "[", c: "text-slate-300" },
  { p: "\"3D pump dashboard\"", c: "text-emerald-300" },
  { p: ", ", c: "text-slate-500" },
  { p: "\"AI upscaler\"", c: "text-emerald-300" },
  { p: "],", c: "text-slate-300" },
  { p: "    focus", c: "text-blue-300" },
  { p: ": ", c: "text-slate-500" },
  { p: "[", c: "text-slate-300" },
  { p: "\"computer vision\"", c: "text-emerald-300" },
  { p: ", ", c: "text-slate-500" },
  { p: "\"3D web\"", c: "text-emerald-300" },
  { p: "],", c: "text-slate-300" },
  { p: "    available", c: "text-blue-300" },
  { p: ": ", c: "text-slate-500" },
  { p: "true", c: "text-amber-300" },
  { p: ",", c: "text-slate-300" },
  { p: "  }", c: "text-slate-300" },
];

export default function CodeBlock() {
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line >= lines.length) return;
    const token = lines[line];
    if (char < token.p.length) {
      const timeout = setTimeout(() => setChar(char + 1), 18 + Math.random() * 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLine(line + 1);
        setChar(0);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [line, char]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur"
      data-cursor="text"
    >
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-slate-500">~/jayashri.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          {lines.slice(0, line).map((token, i) => (
            <span key={i} className={token.c}>
              {token.p}
            </span>
          ))}
          {line < lines.length && (
            <span className={lines[line].c}>
              {lines[line].p.slice(0, char)}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="ml-px inline-block h-3.5 w-1.5 -mb-0.5 bg-slate-300"
              />
            </span>
          )}
        </code>
      </pre>
    </motion.div>
  );
}
