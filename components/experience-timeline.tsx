"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 xl:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-gradient font-display text-sm font-semibold tracking-tighter">
          ⟶ Where I've been
        </span>
        <h2 className="font-display mt-3 text-4xl font-semibold tracking-tighter xl:text-6xl">
          Building across ML, web, and 3D.
        </h2>
      </motion.div>

      <div ref={containerRef} className="relative mt-16 pl-8 md:pl-0">
        <div className="absolute left-8 top-0 h-full w-px bg-white/5 md:left-1/2 md:-translate-x-px" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-8 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:left-1/2 md:-translate-x-px"
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const Icon = exp.type === "work" ? Briefcase : exp.type === "education" ? GraduationCap : Trophy;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className={cn(
                  "relative flex flex-col gap-6 md:grid md:grid-cols-2",
                )}
              >
                <div className="absolute left-0 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-background md:left-1/2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <Icon className="h-3 w-3 text-primary" />
                  </div>
                </div>

                <div className={cn(isLeft ? "md:order-1" : "md:order-2", "md:px-8")}>
                  <div className={cn("rounded-xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur transition-all hover:border-white/10 hover:bg-white/[0.04]", isLeft ? "md:text-right" : "md:text-left")}>
                    <div className={cn("font-mono text-xs text-muted-foreground", isLeft ? "md:text-right" : "md:text-left")}>
                      {exp.period}
                    </div>
                    <h3 className="font-display mt-1.5 text-lg font-medium tracking-tight text-foreground">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-primary/80">
                      {exp.title} · {exp.org}
                    </div>
                    {exp.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    )}
                    {exp.bullets && (
                      <ul className={cn("mt-3 space-y-1.5 text-sm text-muted-foreground", isLeft ? "md:text-right" : "md:text-left")}>
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 md:gap-0">
                            {isLeft ? (
                              <>
                                <span className="md:order-2 md:ml-2">· {b}</span>
                                <span className="md:order-1 hidden h-1 w-1 shrink-0 translate-y-2 rounded-full bg-primary/60 md:block" />
                              </>
                            ) : (
                              <>
                                <span className="h-1 w-1 shrink-0 translate-y-2 rounded-full bg-primary/60" />
                                {b}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.location && (
                      <div className="mt-3 font-mono text-[10px] text-muted-foreground/60">
                        {exp.location}
                      </div>
                    )}
                  </div>
                </div>

                <div className={cn(isLeft ? "md:order-2" : "md:order-1")} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
