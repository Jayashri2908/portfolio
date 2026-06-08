"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn, scrollTo } from "@/lib/utils";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      let current = "#home";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= 200) {
          current = `#${section.id}`;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      scrollTo(el);
    }
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary to-secondary"
      />
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/70 backdrop-blur-md shadow-md border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            data-cursor="hover"
            className="font-display text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            jayashri<span className="text-primary">.</span>
          </a>

          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.06 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  data-cursor="hover"
                  className={cn(
                    "nav-link relative px-3 py-2",
                    active === link.href && "nav-active"
                  )}
                >
                  {link.text}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          <a
            href="/Jayashri_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="hidden items-center gap-1.5 font-mono text-sm text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            data-cursor="hover"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-white/5 sm:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            x: isOpen ? "0%" : "100%",
          }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
          className="fixed inset-y-0 right-0 z-40 flex h-screen w-full flex-col justify-between overflow-y-hidden bg-background/98 backdrop-blur-xl sm:hidden"
        >
          <div className="flex h-20 items-center justify-between border-b border-white/5 px-6">
            <span className="font-display text-base font-medium">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-white/5"
            >
              <X size={20} />
            </button>
          </div>
          <ul className="flex flex-col items-start gap-6 px-8 py-12">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="w-full"
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className="font-display block text-2xl font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="px-8 pb-10">
            <a
              href="/Jayashri_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <FileText className="h-3.5 w-3.5" />
              resume
            </a>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
