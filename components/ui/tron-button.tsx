import { cn } from "@/lib/utils";

type TronButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "cyan" | "orange" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function TronButton({
  href,
  children,
  variant = "cyan",
  external = false,
  download = false,
  className,
  onClick,
}: TronButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download ? { download: "" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 border px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-200",
        variant === "cyan" &&
          "border-tron-cyan/70 bg-tron-cyan/[0.04] text-tron-cyan hover:bg-tron-cyan hover:text-black hover:shadow-glow-cyan-lg",
        variant === "orange" &&
          "border-tron-orange/70 bg-tron-orange/[0.04] text-tron-orange hover:bg-tron-orange hover:text-black hover:shadow-glow-orange",
        variant === "ghost" &&
          "border-tron-line text-tron-text/70 hover:border-tron-cyan/50 hover:text-tron-cyan",
        className
      )}
    >
      {children}
    </a>
  );
}
