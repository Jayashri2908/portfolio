"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { Github, Linkedin, Code2, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3"
        >
          <div>
            <div className="font-display text-2xl font-medium tracking-tight">
              jayashri<span className="text-primary">.</span>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Building at the intersection of AI, 3D, and the modern web.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Elsewhere
            </div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
                <ArrowUp className="h-3 w-3 -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
                <ArrowUp className="h-3 w-3 -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={siteConfig.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <Code2 className="h-3.5 w-3.5" />
                LeetCode
                <ArrowUp className="h-3 w-3 -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5" />
                {siteConfig.email}
                <ArrowUp className="h-3 w-3 -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Local time
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div>
                <div className="font-display text-2xl font-medium tracking-tight tabular-nums">
                  {time}
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {date} · {siteConfig.location}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/5 pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {siteConfig.name}</div>
          <div>
            Built with Next.js · Designed in Figma · Made with ☕ in {siteConfig.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
