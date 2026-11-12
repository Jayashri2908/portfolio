import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  GraduationCap,
  Languages,
  Trophy,
} from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";
import {
  achievements,
  certifications,
  education,
  siteConfig,
  skillGroups,
} from "@/lib/data";

function SubHeading({
  icon: Icon,
  label,
  accent = "cyan",
}: {
  icon: React.ElementType;
  label: string;
  accent?: "cyan" | "orange";
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <Icon
        className={`h-4 w-4 ${
          accent === "cyan" ? "text-tron-cyan" : "text-tron-orange"
        }`}
      />
      <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-tron-text/70">
        // {label}
      </h3>
      <div className="h-px flex-1 bg-tron-line" />
    </div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <SectionHeading
            number="05"
            title="Capabilities"
            meta="// TOOLKIT & CREDENTIALS"
            accent="cyan"
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.05}>
              <Panel
                accent={group.accent}
                className="flex h-full flex-col p-5"
              >
                <div className="flex items-center justify-between border-b border-tron-line/70 pb-2">
                  <h3
                    className={`font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${
                      group.accent === "cyan"
                        ? "text-tron-cyan"
                        : "text-tron-orange"
                    }`}
                  >
                    // {group.label}
                  </h3>
                  <span className="font-mono text-[9px] text-tron-dim">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Tag key={skill} accent={group.accent}>
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Panel>
            </FadeIn>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <Panel className="flex h-full items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-tron-cyan/30 bg-tron-cyan/[0.05]">
                <Code2 className="h-5 w-5 text-tron-cyan" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                  CODING PROFILE
                </div>
                <div className="mt-1 font-mono text-sm text-tron-text/80">
                  <span className="text-tron-cyan">300+</span> LeetCode problems
                  — DSA, OS, OOP, computer architecture
                </div>
              </div>
              <a
                href={siteConfig.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LeetCode profile"
                className="shrink-0 border border-tron-line p-2 text-tron-text/50 transition-colors hover:border-tron-cyan/50 hover:text-tron-cyan"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Panel>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Panel accent="orange" className="flex h-full items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-tron-orange/30 bg-tron-orange/[0.05]">
                <Languages className="h-5 w-5 text-tron-orange" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-tron-dim">
                  SPOKEN LANGUAGES
                </div>
                <div className="mt-1 font-mono text-sm text-tron-text/80">
                  English · Hindi · Marathi
                </div>
              </div>
            </Panel>
          </FadeIn>
        </div>

        <FadeIn className="mt-14">
          <SubHeading icon={GraduationCap} label="EDUCATION" accent="cyan" />
        </FadeIn>

        <FadeIn>
          <Panel className="overflow-hidden p-0">
            {education.map((item, index) => (
              <div
                key={item.qualification}
                className={`grid gap-2 px-5 py-5 sm:grid-cols-[130px_1fr_auto] sm:items-center sm:gap-5 md:px-6 ${
                  index < education.length - 1
                    ? "border-b border-tron-line/70"
                    : ""
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-tron-cyan/80">
                  [{item.period}]
                </div>
                <div>
                  <div className="font-mono text-sm text-tron-text/85">
                    {item.qualification}
                  </div>
                  <div className="mt-0.5 font-mono text-[11px] text-tron-text/50">
                    {item.institution}
                  </div>
                </div>
                <div className="font-display text-base font-bold text-tron-orange sm:text-lg">
                  {item.score}
                </div>
              </div>
            ))}
          </Panel>
        </FadeIn>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FadeIn>
            <Panel className="h-full p-5 md:p-6">
              <SubHeading
                icon={BadgeCheck}
                label="CERTIFICATIONS"
                accent="cyan"
              />
              <ul className="space-y-3">
                {certifications.map((certification) => (
                  <li
                    key={certification}
                    className="flex items-center gap-3 border border-tron-line/60 bg-black/30 px-3 py-2.5 font-mono text-[11px] text-tron-text/70"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-tron-cyan" />
                    {certification}
                  </li>
                ))}
              </ul>
            </Panel>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Panel accent="orange" className="h-full p-5 md:p-6">
              <SubHeading
                icon={Trophy}
                label="HACKATHON PODIUMS"
                accent="orange"
              />
              <ul className="space-y-3">
                {achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-center gap-3 border border-tron-line/60 bg-black/30 px-3 py-2.5 font-mono text-[11px] text-tron-text/70"
                  >
                    <Trophy className="h-3.5 w-3.5 shrink-0 text-tron-orange" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </Panel>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
