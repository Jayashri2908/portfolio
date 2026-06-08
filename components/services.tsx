"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Box,
  FlaskConical,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import Marquee from "@/components/ui/marquee";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Code2,
  Box,
  FlaskConical,
  Zap,
};

const techCloud = [
  "PyTorch", "TypeScript", "React", "Three.js", "Docker", "OpenCV",
  "LangChain", "Tailwind", "Firebase", "Hugging Face", "FastAPI", "Figma",
  "WebSockets", "Real-ESRGAN", "n8n", "RAG", "Python", "Next.js",
];

export default function Services() {
  return (
    <section id="services" className="py-24 xl:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <div className="flex flex-col py-6 xl:p-6">
          <span className="text-gradient font-display text-sm font-semibold tracking-tighter">
            ⟶ What I do
          </span>
          <h2 className="font-display mt-3 text-4xl font-medium tracking-tight xl:text-5xl">
            How I can
            <br />
            <span className="text-gradient font-display">help out.</span>
          </h2>
          <p className="mt-3 tracking-tighter text-muted-foreground">
            Pick a lane. I&apos;ve shipped all of these in the last twelve
            months.
          </p>
        </div>

        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Code2;
          return (
            <motion.div
              key={service.service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true }}
              data-cursor="hover"
              className="group relative flex flex-col items-start overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <Icon className="relative mb-6 text-primary transition-transform group-hover:scale-110" size={22} />
              <span className="relative text-lg font-medium tracking-tight text-foreground">
                {service.service}
              </span>
              <span className="relative mt-2 text-sm leading-relaxed tracking-tight text-muted-foreground">
                {service.description}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-16 overflow-hidden">
        <Marquee speed={45} className="py-4">
          {techCloud.map((t) => (
            <span
              key={t}
              className="font-mono text-sm uppercase tracking-widest text-muted-foreground/40"
            >
              {t} ·
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
