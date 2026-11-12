import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";
import { experiences, leadership } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <SectionHeading
            number="02"
            title="Experience"
            meta="// WHERE I BUILD"
            accent="orange"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {experiences.map((experience) => (
            <FadeIn key={experience.org} className="lg:col-span-2">
              <Panel accent="orange" className="h-full p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-tron-cyan">
                      [{experience.period}]
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-tron-text md:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-tron-text/65">
                      {experience.org} · {experience.location}
                    </p>
                  </div>
                  <span className="border border-tron-orange/60 bg-tron-orange/[0.05] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-tron-orange">
                    {experience.status}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-tron-text/70 md:text-[15px]">
                  {experience.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 font-mono text-[12px] leading-relaxed text-tron-text/70 md:text-[13px]"
                    >
                      <span className="mt-0.5 shrink-0 text-tron-orange">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-tron-line/70 pt-5">
                  {experience.tech.map((tech, index) => (
                    <Tag
                      key={tech}
                      accent={index % 2 === 0 ? "cyan" : "orange"}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Panel>
            </FadeIn>
          ))}

          <FadeIn delay={0.1}>
            <Panel className="flex h-full flex-col p-6 md:p-7">
              <div className="flex items-center justify-between border-b border-tron-line pb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                <span>LEADERSHIP</span>
                <span className="text-tron-cyan">CORE</span>
              </div>

              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-tron-text">
                {leadership.role}
              </h3>
              <p className="mt-1 text-sm text-tron-text/60">{leadership.org}</p>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-tron-cyan/80">
                [{leadership.period}]
              </div>

              <p className="mt-4 flex-1 font-mono text-[12px] leading-relaxed text-tron-text/65">
                {leadership.summary}
              </p>

              <div className="mt-5 border-t border-tron-line/70 pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                <span className="text-tron-cyan">▸</span> MENTORSHIP
                <br />
                <span className="text-tron-cyan">▸</span> EVENT PLANNING
                <br />
                <span className="text-tron-cyan">▸</span> COMMUNITY
              </div>
            </Panel>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
