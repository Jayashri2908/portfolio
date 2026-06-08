"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { aboutStats } from "@/lib/data";
import Counter from "@/components/ui/counter";
import CodeBlock from "@/components/visuals/code-block";

export default function About() {
  return (
    <section id="about" className="py-24 xl:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-gradient font-display text-sm font-semibold tracking-tighter">
            ⟶ About
          </span>
          <h2 className="font-display mt-3 text-3xl font-light leading-[1.1] tracking-tighter text-foreground xl:text-[40px]">
            B.Tech Computer Science at{" "}
            <a
              href="https://www.vupune.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-display font-semibold"
            >
              Vishwakarma University
            </a>{" "}
            with a focus on machine learning, computer vision, and modern web
            engineering.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            I&apos;ve shipped microservices for AI image upscaling, full-stack
            platforms with React + Firebase, and 3D visualization dashboards
            for industrial applications — all while publishing research on AI
            in healthcare and contributing to open-source projects.
          </p>

          <a
            href="/Jayashri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary">
              Read full resume
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <CodeBlock />
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-20 xl:grid-cols-3">
        {aboutStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden border-t border-white/10 pt-6"
          >
            <div className="absolute inset-x-0 top-0 h-px w-12 origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
            <span className="text-gradient font-display block text-5xl font-semibold tracking-tight xl:text-6xl">
              {stat.value === 3 ? (
                <span>2 + 1</span>
              ) : (
                <Counter to={stat.value} suffix={stat.suffix} />
              )}
            </span>
            <span className="mt-2 block text-sm tracking-tight text-muted-foreground xl:text-base">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
