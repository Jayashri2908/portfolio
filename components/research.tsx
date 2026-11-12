import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";
import { publications } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="relative py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <SectionHeading
            number="04"
            title="Research"
            meta="// PUBLICATIONS & IP"
            accent="orange"
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {publications.map((publication, index) => (
            <FadeIn key={publication.title} delay={index * 0.08}>
              <Panel
                accent={index === 0 ? "cyan" : "orange"}
                className="flex h-full flex-col p-6 md:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Tag accent={index === 0 ? "cyan" : "orange"}>
                    {publication.type}
                  </Tag>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-tron-dim">
                    {publication.year}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-tron-text md:text-xl">
                  {publication.title}
                </h3>

                <p className="mt-3 font-mono text-[11px] leading-relaxed text-tron-text/55">
                  {publication.authors}
                  <br />
                  <span className="text-tron-text/70">{publication.venue}</span>
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-tron-line/70 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-tron-cyan/80">
                      {publication.identifier}
                    </span>
                    <a
                      href={publication.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-tron-text/60 transition-colors hover:text-tron-cyan"
                    >
                      {index === 0 ? "Open DOI" : "View platform"}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Panel>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
