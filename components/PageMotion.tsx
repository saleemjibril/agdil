"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type PageMotionProps = {
  children: ReactNode;
  className?: string;
  initial?: HTMLMotionProps<"div">["initial"];
  animate?: HTMLMotionProps<"div">["animate"];
  transition?: HTMLMotionProps<"div">["transition"];
};

const defaultInitial: NonNullable<HTMLMotionProps<"div">["initial"]> = { opacity: 0, y: 10 };
const defaultAnimate: NonNullable<HTMLMotionProps<"div">["animate"]> = { opacity: 1, y: 0 };
const defaultTransition: NonNullable<HTMLMotionProps<"div">["transition"]> = {
  duration: 0.25,
  ease: "easeOut",
};

export function PageMotion({
  children,
  className,
  initial = defaultInitial,
  animate = defaultAnimate,
  transition = defaultTransition,
}: PageMotionProps) {
  return (
    <motion.div className={className} initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
}
