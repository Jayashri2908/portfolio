import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  accent?: "cyan" | "orange";
  className?: string;
};

export default function Tag({ children, accent = "cyan", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em]",
        accent === "cyan"
          ? "border-tron-cyan/35 bg-tron-cyan/5 text-tron-cyan/90"
          : "border-tron-orange/35 bg-tron-orange/5 text-tron-orange/90",
        className
      )}
    >
      {children}
    </span>
  );
}
