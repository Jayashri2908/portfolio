"use client";

import { useEffect, useState } from "react";
import { Code2, FileText, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

const socials = [
  { href: siteConfig.social.github, label: "GitHub", Icon: Github },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.leetcode, label: "LeetCode", Icon: Code2 },
  { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
];

export default function Footer() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: siteConfig.timezone,
        })
      );
      setDate(
        now.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          timeZone: siteConfig.timezone,
        })
      );
    };
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-tron-cyan/15 py-10">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rotate-45 bg-tron-cyan shadow-glow-cyan" />
              <span className="font-display text-sm font-bold tracking-[0.18em] text-tron-text">
                JAYASHRI
              </span>
            </a>
            <p className="mt-3 max-w-xs font-mono text-[10px] leading-relaxed text-tron-dim">
              {siteConfig.role}. B.Tech CSE &apos;27 at Vishwakarma University,
              Pune.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="border border-tron-line p-2 text-tron-text/50 transition-colors hover:border-tron-cyan/50 hover:text-tron-cyan"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-tron-dim">
              // INDEX
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-tron-text/55 transition-colors hover:text-tron-cyan"
                >
                  {link.index}/{link.text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-tron-dim">
              // STATUS
            </div>
            <div className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-tron-text/60">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-tron-cyan" />
              {siteConfig.shortLocation} · {time} IST
            </div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-tron-dim">
              {date}
            </div>
            <a
              href={siteConfig.resume}
              download
              className="mt-4 inline-flex items-center gap-2 border border-tron-cyan/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-tron-cyan/80 transition-colors hover:bg-tron-cyan hover:text-black"
            >
              <FileText className="h-3 w-3" />
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-tron-line/70 pt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-tron-dim sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {siteConfig.fullName}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>Built with Next.js</span>
            <span className="text-tron-line">|</span>
            <span>Static · No trackers</span>
            <span className="text-tron-line">|</span>
            <a href="#home" className="transition-colors hover:text-tron-cyan">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
