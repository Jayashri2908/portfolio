"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Code2 as LeetCodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import Magnetic from "@/components/ui/magnetic";

const socials = [
  { href: siteConfig.social.github, label: "GitHub", Icon: Github },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: siteConfig.social.leetcode, label: "LeetCode", Icon: LeetCodeIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 xl:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/[8%] via-primary/[3%] to-white/[0.02] px-6 py-16 text-center shadow-2xl backdrop-blur md:px-10 xl:py-24"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -left-1/4 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
            style={{ animation: "float-slow 12s ease-in-out infinite" }}
          />
          <div
            className="absolute -right-1/4 bottom-0 h-72 w-72 rounded-full bg-secondary/15 blur-[100px]"
            style={{ animation: "float-slow 16s ease-in-out infinite reverse" }}
          />
        </div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-widest text-emerald-400/80"
        >
          ◦ Let&apos;s talk
        </motion.span>

        <h2 className="font-display mt-4 text-4xl font-medium tracking-tighter md:text-5xl xl:text-7xl">
          Have something
          <br className="hidden md:block" />
          <span className="text-gradient font-display"> in mind?</span>
        </h2>

        <p className="mt-4 max-w-xl text-base tracking-tight text-muted-foreground xl:text-lg">
          I read every email. Usually reply within a day.
        </p>

        <Magnetic strength={0.2} className="mt-10">
          <Link href={`mailto:${siteConfig.email}`} passHref>
            <Button size="lg" data-cursor="hover" className="px-8 text-base">
              {siteConfig.email} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Magnetic>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <Magnetic key={label} strength={0.3}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
