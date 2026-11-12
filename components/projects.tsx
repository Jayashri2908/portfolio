import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import Panel from "@/components/ui/panel";
import SectionHeading from "@/components/ui/section-heading";
import Tag from "@/components/ui/tag";
import TronButton from "@/components/ui/tron-button";
import { ProjectVisual } from "@/components/project-visuals";
import { projects, type Project } from "@/lib/data";

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em]">
      <span className="text-tron-dim">
        {project.number} // {project.category}
      </span>
      {project.status ? (
        <span
          className={
            project.accent === "cyan"
              ? "border border-tron-cyan/40 bg-tron-cyan/[0.05] px-2 py-0.5 text-tron-cyan"
              : "border border-tron-orange/40 bg-tron-orange/[0.05] px-2 py-0.5 text-tron-orange"
          }
        >
          {project.status}
        </span>
      ) : null}
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <ProjectMeta project={project} />
      <h3
        className={`mt-3 font-display font-bold uppercase tracking-wide ${
          project.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        } ${project.accent === "cyan" ? "text-tron-cyan" : "text-tron-text"}`}
      >
        {project.name}
      </h3>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-tron-text/50">
        // {project.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-tron-text/70">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-2.5 font-mono text-[11px] leading-relaxed text-tron-text/65 md:text-[12px]"
          >
            <span
              className={`mt-0.5 shrink-0 ${
                project.accent === "cyan" ? "text-tron-cyan" : "text-tron-orange"
              }`}
            >
              ▸
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <Tag key={tech} accent={index % 2 === 0 ? "cyan" : "orange"}>
            {tech}
          </Tag>
        ))}
      </div>

      <div className="mt-6">
        <TronButton
          href={project.href}
          variant={project.accent === "cyan" ? "cyan" : "orange"}
          external
          className="px-4 py-2.5"
        >
          {project.hrefLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </TronButton>
      </div>
    </>
  );
}

export default function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project !== featured);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <SectionHeading
            number="03"
            title="Projects"
            meta="// SELECTED BUILDS"
            accent="cyan"
          />
        </FadeIn>

        <FadeIn>
          <Panel className="p-5 md:p-7">
            <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr]">
              <div className="order-2 flex flex-col justify-center lg:order-1">
                <ProjectBody project={featured} />
              </div>
              <div className="order-1 lg:order-2">
                <ProjectVisual variant={featured.visual} />
              </div>
            </div>
          </Panel>
        </FadeIn>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <FadeIn key={project.name} delay={0.08 + index * 0.08}>
              <Panel
                accent={project.accent}
                className="flex h-full flex-col p-5 md:p-6"
              >
                <ProjectVisual variant={project.visual} />
                <div className="mt-5 flex flex-1 flex-col">
                  <ProjectBody project={project} />
                </div>
              </Panel>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
