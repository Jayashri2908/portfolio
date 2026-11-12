"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import SectionHeading from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/data";

const socials = [
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    handle: "/in/jayashri29",
    Icon: Linkedin,
  },
  {
    href: siteConfig.social.github,
    label: "GitHub",
    handle: "github/Jayashri2908",
    Icon: Github,
  },
  {
    href: siteConfig.social.leetcode,
    label: "LeetCode",
    handle: "leetcode/Jayashri29",
    Icon: Code2,
  },
];

const inputClass =
  "w-full border border-tron-line bg-black/50 px-3.5 py-3 font-mono text-xs text-tron-text placeholder:text-tron-dim/60 transition-colors focus:border-tron-cyan/60 focus:outline-none focus:ring-1 focus:ring-tron-cyan/25";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [opening, setOpening] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry — ${form.name.trim() || "New message"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setOpening(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <SectionHeading
            number="06"
            title="Contact"
            meta="// INITIATE CONNECTION"
            accent="orange"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <Panel className="h-full p-6 md:p-8" grid>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-tron-dim">
                $ ./initiate_contact.sh
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide neon-orange md:text-3xl">
                Let&apos;s build something.
              </h3>
              <p className="mt-3 max-w-lg font-mono text-[12px] leading-relaxed text-tron-text/60">
                Project, internship, or research — my inbox is always open.
                <span className="mt-1 block text-tron-dim">
                  This form opens your mail app. Nothing is stored on this site.
                </span>
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-tron-dim">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                      placeholder="> your name"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-tron-dim">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                      placeholder="> you@domain.com"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-tron-dim">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    placeholder="> tell me what you're building"
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 border border-tron-cyan/70 bg-tron-cyan/[0.04] px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-tron-cyan transition-all duration-200 hover:bg-tron-cyan hover:text-black hover:shadow-glow-cyan-lg"
                >
                  <Send className="h-3.5 w-3.5" />
                  Transmit message
                </button>

                {opening ? (
                  <p
                    aria-live="polite"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-tron-cyan/70"
                  >
                    ▸ Opening your mail app…
                  </p>
                ) : null}
              </form>
            </Panel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Panel accent="orange" className="flex h-full flex-col p-6 md:p-7">
              <div className="flex items-center justify-between border-b border-tron-line pb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                <span>DIRECT_CHANNELS</span>
                <span className="text-tron-orange">OPEN</span>
              </div>

              <div className="mt-4 border border-tron-line/70 bg-black/30 p-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-tron-dim">
                  Email
                </div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all font-mono text-[12px] text-tron-text/80 transition-colors hover:text-tron-cyan"
                  >
                    {siteConfig.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="shrink-0 border border-tron-line p-1.5 text-tron-text/50 transition-colors hover:border-tron-cyan/50 hover:text-tron-cyan"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-tron-cyan" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                {copied ? (
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-tron-cyan">
                    Copied to clipboard
                  </div>
                ) : null}
              </div>

              <div className="mt-3 space-y-2">
                {socials.map(({ href, label, handle, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border border-tron-line/70 bg-black/30 px-3 py-2.5 transition-colors hover:border-tron-cyan/40"
                  >
                    <Icon className="h-3.5 w-3.5 text-tron-text/50 transition-colors group-hover:text-tron-cyan" />
                    <span className="flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-tron-text/70">
                        {label}
                      </span>
                      <span className="block font-mono text-[9px] text-tron-dim">
                        {handle}
                      </span>
                    </span>
                    <ArrowUpRight className="h-3 w-3 text-tron-dim transition-colors group-hover:text-tron-cyan" />
                  </a>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-tron-dim">
                <MapPin className="h-3.5 w-3.5 text-tron-orange" />
                {siteConfig.location} · IST (UTC+5:30)
              </div>

              <div className="mt-auto pt-6">
                <a
                  href={siteConfig.resume}
                  download
                  className="flex items-center justify-center gap-2 border border-tron-orange/60 bg-tron-orange/[0.04] px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-tron-orange transition-colors hover:bg-tron-orange hover:text-black"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Download CV
                </a>
                <div className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-tron-dim">
                  <Mail className="mr-1 inline h-3 w-3" />
                  Open to internships, research, and full-stack work
                </div>
              </div>
            </Panel>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
