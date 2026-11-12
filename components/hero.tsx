import { ArrowDown } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import TechTicker from "@/components/ui/tech-ticker";
import TronButton from "@/components/ui/tron-button";
import { heroStats, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-0 pt-24 md:pt-28"
    >
      <div className="container flex flex-1 flex-col">
        <FadeIn y={-10} duration={0.5}>
          <div className="inline-flex items-center gap-3 border border-tron-cyan/40 bg-tron-cyan/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-tron-cyan shadow-glow-cyan" />
            <span className="text-tron-cyan">// SYSTEM ONLINE</span>
            <span className="text-tron-dim">·</span>
            <span className="text-tron-text/55">2026</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30} className="mt-7">
          <h1 className="font-display font-black uppercase leading-[0.85] tracking-tight">
            <span className="block text-[clamp(3.1rem,12vw,8.75rem)] neon-cyan">
              {siteConfig.firstName}
            </span>
            <span className="mt-1 flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <span className="text-[clamp(1.7rem,5.6vw,4rem)] text-tron-text/80">
                Utrankar
              </span>
              <span className="font-mono text-[10px] font-normal uppercase tracking-[0.24em] text-tron-dim md:text-xs">
                // B.Tech CSE &apos;27
              </span>
            </span>
          </h1>
        </FadeIn>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.35fr_1fr]">
          <FadeIn delay={0.2} y={20}>
            <p className="max-w-2xl font-mono text-sm leading-relaxed text-tron-text/80 md:text-base">
              <span className="mr-2 text-tron-orange">▸</span>
              ML Engineer.{" "}
              <span className="mr-2 text-tron-orange">▸</span>
              Full-Stack Developer.{" "}
              <span className="mr-2 text-tron-orange">▸</span>
              ML Intern @ Wilo.
              <span className="mt-2 block text-tron-text/55">
                Building at the edge of{" "}
                <span className="text-tron-cyan">artificial intelligence</span>{" "}
                and the <span className="text-tron-cyan">modern web</span>.
              </span>
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <TronButton href="#projects" variant="cyan">
                View work
              </TronButton>
              <TronButton href="#contact" variant="orange">
                Initiate contact
              </TronButton>
              <TronButton href={siteConfig.resume} variant="ghost" download>
                Download CV
              </TronButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <Panel className="p-5" grid>
              <div className="flex items-center justify-between border-b border-tron-line pb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                <span>SYSTEM_PROFILE</span>
                <span className="text-tron-cyan">READY</span>
              </div>
              <dl className="mt-3 space-y-2.5 font-mono text-[11px]">
                <div className="flex items-start justify-between gap-4">
                  <dt className="tracking-[0.14em] text-tron-dim">CURRENT</dt>
                  <dd className="text-right text-tron-text/80">
                    ML + Full-Stack Intern @ Wilo
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="tracking-[0.14em] text-tron-dim">LOCATION</dt>
                  <dd className="text-right text-tron-text/80">
                    {siteConfig.shortLocation}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="tracking-[0.14em] text-tron-dim">FOCUS</dt>
                  <dd className="text-right text-tron-text/80">
                    Applied ML · Full-stack
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="tracking-[0.14em] text-tron-dim">STATUS</dt>
                  <dd className="text-right text-tron-cyan">B.Tech CSE &apos;27</dd>
                </div>
              </dl>
            </Panel>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} y={20} className="mt-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {heroStats.map((stat, index) => (
              <Panel
                key={stat.label}
                accent={stat.accent}
                className="px-4 py-4 md:px-5 md:py-5"
              >
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                  <span>{stat.label}</span>
                  <span>0{index + 1}</span>
                </div>
                <div
                  className={cn(
                    "mt-2 font-display text-2xl font-bold tracking-wide md:text-3xl",
                    stat.accent === "cyan" ? "text-tron-cyan" : "text-tron-orange"
                  )}
                >
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-tron-dim">
                  {stat.note}
                </div>
              </Panel>
            ))}
          </div>
        </FadeIn>

        <div className="mt-auto hidden items-center gap-3 pt-10 md:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-tron-dim">
            Scroll to explore
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-tron-cyan/60 to-transparent" />
          <ArrowDown className="h-3 w-3 animate-bounce text-tron-cyan/70" />
          <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
            [ 06 sections ]
          </span>
        </div>
      </div>

      <div className="mt-6 md:mt-12">
        <TechTicker />
      </div>
    </section>
  );
}
