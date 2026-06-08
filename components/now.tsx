"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen, Coffee } from "lucide-react";
import { now } from "@/lib/data";

const iconMap = { Code2, BookOpen, Coffee } as const;

export default function Now() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 backdrop-blur md:p-10"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400/80">
            Now
          </span>
        </div>
        <h2 className="font-display mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          What I&apos;m up to right now.
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {now.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Code2;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="group flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10 hover:bg-white/[0.05]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                    {item.label}
                  </div>
                  <div className="mt-0.5 truncate text-sm text-foreground/90" title={item.value}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
