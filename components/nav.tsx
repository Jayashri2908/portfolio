"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const socials = [
  { href: siteConfig.social.github, label: "GitHub", Icon: Github },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.leetcode, label: "LeetCode", Icon: Code2 },
  { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
      );
      let current = "#home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 160) {
          current = `#${section.id}`;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[75] h-[2px] origin-left bg-tron-cyan shadow-glow-cyan"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          isScrolled
            ? "border-b border-tron-cyan/15 bg-black/85 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Primary"
          className="container flex h-16 items-center justify-between md:h-20"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="h-2.5 w-2.5 rotate-45 bg-tron-cyan shadow-glow-cyan transition-transform duration-300 group-hover:rotate-[135deg]" />
            <span className="font-display text-sm font-bold tracking-[0.18em] text-tron-text md:text-base">
              JAYASHRI
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                      isActive
                        ? "text-tron-cyan"
                        : "text-tron-text/55 hover:text-tron-cyan"
                    )}
                  >
                    <span className="text-tron-dim">[</span>
                    {link.index}/{link.text}
                    <span className="text-tron-dim">]</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resume}
              download
              className="hidden items-center gap-2 border border-tron-cyan/60 px-3.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-tron-cyan transition-colors hover:bg-tron-cyan hover:text-black sm:inline-flex"
            >
              <FileText className="h-3 w-3" />
              CV
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center border border-tron-line text-tron-text transition-colors hover:border-tron-cyan/50 hover:text-tron-cyan lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] flex flex-col bg-black/98 backdrop-blur-xl lg:hidden"
          >
            <div className="tron-grid-bg pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative flex h-16 items-center justify-between border-b border-tron-cyan/15 px-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-tron-dim">
                NAVIGATION
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => closeMenu(true)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-tron-line text-tron-text hover:border-tron-cyan/50 hover:text-tron-cyan"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex flex-1 flex-col justify-between overflow-y-auto px-5 py-8">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between border-b border-tron-line/60 py-4 font-display text-xl font-semibold uppercase tracking-wide text-tron-text/85 transition-colors hover:text-tron-cyan"
                    >
                      <span>
                        <span className="mr-3 font-mono text-[10px] tracking-[0.2em] text-tron-dim">
                          {link.index}
                        </span>
                        {link.text}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-tron-cyan/60" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href={siteConfig.resume}
                  download
                  className="flex items-center justify-center gap-2 border border-tron-cyan/60 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-tron-cyan"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Download CV
                </a>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-2 border border-tron-line px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-tron-text/60 transition-colors hover:border-tron-cyan/40 hover:text-tron-cyan"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
