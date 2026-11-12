import { cn } from "@/lib/utils";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "cyan" | "orange";
  grid?: boolean;
  as?: "div" | "article" | "aside";
};

export default function Panel({
  children,
  className,
  accent = "cyan",
  grid = false,
  as: Tag = "div",
}: PanelProps) {
  return (
    <Tag
      className={cn(
        "corner-frame border bg-tron-panel/80 backdrop-blur-sm",
        accent === "cyan"
          ? "border-tron-cyan/25"
          : "border-tron-orange/25 corner-orange",
        grid && "tron-grid-bg",
        className
      )}
    >
      {children}
    </Tag>
  );
}
