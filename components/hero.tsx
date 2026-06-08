"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { scrollTo } from "@/lib/utils";
import { siteConfig, techMarquee } from "@/lib/data";
import SplitText from "@/components/ui/split-text";
import Magnetic from "@/components/ui/magnetic";
import ParticleField from "@/components/canvas/particle-field";
import Marquee from "@/components/ui/marquee";
import TechStackSphere from "@/components/canvas/tech-stack-sphere";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center pt-24 xl:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <ParticleField density={50} color="160, 180, 255" className="absolute inset-0 h-full w-full" />
        <motion.div
          className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[140px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="flex flex-col items-start">
          <h1 className="font-display text-5xl font-light leading-[0.95] tracking-tighter text-foreground md:text-6xl xl:text-7xl 2xl:text-8xl">
            <span className="block">
              <SplitText text="Hello, I'm" delay={1.1} />
            </span>
            <span className="block">
              <SplitText
                text="Jayashri."
                delay={1.3}
                staggerChildren={0.04}
                className="text-gradient font-display font-semibold"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-6 max-w-xl text-base tracking-tight text-muted-foreground md:text-lg xl:text-xl"
          >
            I build production systems at the edge of AI and the 3D web.
            Currently shipping 3D dashboards at{" "}
            <span className="text-foreground">Wilo</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.85 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.25}>
              <Link href={`mailto:${siteConfig.email}`} passHref>
                <Button size="lg" data-cursor="hover">
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button
                variant="outline"
                size="lg"
                data-cursor="hover"
                onClick={() => scrollTo(document.querySelector("#projects"))}
              >
                <Sparkles className="mr-1 h-4 w-4" />
                See my work
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            className="mt-10 font-mono text-xs text-muted-foreground"
          >
            B.Tech CSE &apos;27 · Vishwakarma University, Pune
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[420px] aspect-square lg:max-w-none"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <TechStackSphere className="absolute inset-0 h-full w-full" />
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
            drag to explore
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-10 left-0 right-0 overflow-hidden">
        <Marquee speed={50} className="py-3 opacity-60">
          {techMarquee.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
            >
              ✦ {tech}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
