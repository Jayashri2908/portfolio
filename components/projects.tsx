"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/lib/data";
import UpscalerViz from "@/components/visuals/upscaler-viz";
import FdpViz from "@/components/visuals/fdp-viz";
import BaldnessViz from "@/components/visuals/baldness-viz";
import PumpViz from "@/components/visuals/pump-viz";

const vizMap: Record<string, React.ComponentType> = {
  upscaler: UpscalerViz,
  fdp: FdpViz,
  baldness: BaldnessViz,
  pump: PumpViz,
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-100, 100], [6, -6]);
  const rotateY = useTransform(sx, [-100, 100], [-6, 6]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="projects" className="py-24 xl:py-32">
      <div className="pointer-events-none absolute inset-x-0 -z-10 -mt-40 overflow-hidden">
        <div
          className="absolute left-1/2 aspect-[1155/678] w-[80rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 via-primary/10 to-secondary/20 opacity-20 blur-3xl"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-gradient font-display text-sm font-semibold tracking-tighter">
          ✨ Selected work
        </span>
        <h2 className="font-display mt-3 text-4xl font-semibold tracking-tighter xl:text-6xl">
          Things I&apos;ve shipped.
        </h2>
        <p className="mt-2 max-w-2xl text-base tracking-tight text-muted-foreground xl:text-lg">
          From ML pipelines to production web apps — a small slice of the last
          year.
        </p>
      </motion.div>

      <div className="mt-12">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {projects.map((project, idx) => {
              const Viz = vizMap[project.visual];
              return (
                <CarouselItem
                  key={project.title}
                  className="md:basis-3/4 lg:basis-1/2"
                >
                  <TiltCard className="h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-background/40 backdrop-blur"
                      data-cursor="hover"
                    >
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          {Viz && <Viz />}
                          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-all group-hover:opacity-100 group-hover:rotate-45">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                          <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-white/60">
                            0{idx + 1} / 0{projects.length}
                          </div>
                        </div>
                      </Link>

                      <div className="border-t border-white/5 bg-background/60 p-6 backdrop-blur">
                        <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </TiltCard>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-between">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {String(current).padStart(2, "0")}
              </span>{" "}
              / {String(count).padStart(2, "0")} projects
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
