import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  number: string;
  title: string;
  accent?: "cyan" | "orange";
  meta?: string;
  className?: string;
};

export default function SectionHeading({
  number,
  title,
  accent = "cyan",
  meta,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "h-8 w-1.5 shrink-0",
              accent === "cyan"
                ? "bg-tron-cyan shadow-glow-cyan"
                : "bg-tron-orange shadow-glow-orange"
            )}
          />
          <h2 className="font-display text-2xl font-bold uppercase leading-none tracking-wide md:text-4xl">
            <span className="mr-2 align-top font-mono text-xs tracking-[0.2em] text-tron-dim md:mr-3 md:text-sm">
              {number}
            </span>
            <span className={accent === "cyan" ? "neon-cyan" : "neon-orange"}>
              //
            </span>{" "}
            {title}
          </h2>
        </div>
        {meta ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-tron-dim">
            {meta}
          </span>
        ) : null}
      </div>
      <div
        className={cn(
          "mt-5 tron-divider",
          accent === "orange" && "tron-divider-orange"
        )}
      />
    </div>
  );
}
