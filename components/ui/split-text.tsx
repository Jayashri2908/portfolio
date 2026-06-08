"use client";

import { motion, type Variants } from "framer-motion";
import { type ElementType, type ReactNode } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  as?: ElementType;
};

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerChildren: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.staggerChildren,
      delayChildren: custom.delay,
    },
  }),
};

const charVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SplitText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.025,
  as: Tag = "span",
}: SplitTextProps) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={{ staggerChildren, delay }}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {Array.from(word).map((char, ci) => (
            <span
              key={`${char}-${ci}`}
              style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
            >
              <motion.span
                variants={charVariants}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            </span>
          ))}
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
