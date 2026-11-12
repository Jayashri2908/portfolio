import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import SectionHeading from "@/components/ui/section-heading";
import { aboutFacts, aboutParagraphs } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <SectionHeading
            number="01"
            title="About"
            meta="// WHO I AM"
            accent="cyan"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-5">
          <FadeIn delay={0.05} className="lg:col-span-3">
            <Panel className="h-full p-6 md:p-8">
              <div className="mb-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-tron-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-tron-cyan" />
                PROFILE // SUMMARY
              </div>
              <div className="space-y-4 text-[15px] leading-relaxed text-tron-text/75 md:text-base">
                {aboutParagraphs.map((paragraph, index) => (
                  <p key={paragraph}>
                    {index === 0 ? (
                      <span className="float-left mr-3 mt-1 font-display text-4xl font-bold leading-none text-tron-cyan">
                        J
                      </span>
                    ) : null}
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-tron-line/70 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-tron-dim">
                <span>
                  <span className="text-tron-cyan">▸</span> Applied ML
                </span>
                <span>
                  <span className="text-tron-cyan">▸</span> Full-stack
                </span>
                <span>
                  <span className="text-tron-cyan">▸</span> Computer vision
                </span>
                <span>
                  <span className="text-tron-cyan">▸</span> 3D web
                </span>
              </div>
            </Panel>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {aboutFacts.map((fact, index) => (
              <FadeIn key={fact.label} delay={0.1 + index * 0.06}>
                <Panel
                  accent={index % 2 === 0 ? "cyan" : "orange"}
                  className="p-5"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-tron-dim">
                    {fact.label}
                  </div>
                  <div className="mt-1.5 font-mono text-sm text-tron-text/85">
                    {fact.value}
                  </div>
                </Panel>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
