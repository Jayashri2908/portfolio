"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 200, damping: 25, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 200, damping: 25, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setHidden(false);

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='hover']")) {
        setVariant("hover");
      } else if (target.closest("[data-cursor='text']")) {
        setVariant("text");
      } else {
        setVariant("default");
      }
    };

    const handleLeave = () => setHidden(true);
    const handleEnter = () => setHidden(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [dotX, dotY]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference md:block"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          animate={{
            scale: variant === "hover" ? 0 : variant === "text" ? 0.5 : 1,
          }}
          className="h-1.5 w-1.5 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            scale: variant === "hover" ? 2.4 : variant === "text" ? 0.5 : 1,
            opacity: variant === "text" ? 0.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/0"
        >
          {variant === "hover" && (
            <span className="text-[10px] font-medium text-white">↗</span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
