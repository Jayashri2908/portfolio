import { techTicker } from "@/lib/data";

export default function TechTicker() {
  const items = [...techTicker, ...techTicker];

  return (
    <div className="group relative overflow-hidden border-y border-tron-line/70 py-3 mask-fade-x">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex shrink-0 items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-tron-dim"
          >
            <span className="h-1 w-1 rotate-45 bg-tron-cyan/60" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
