"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const MAX_TILT_DEG = 6;

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(py, [0, 1], [MAX_TILT_DEG, -MAX_TILT_DEG]),
    { stiffness: 300, damping: 30 }
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-MAX_TILT_DEG, MAX_TILT_DEG]),
    { stiffness: 300, damping: 30 }
  );

  const glowX = useTransform(px, [0, 1], [0, 100]);
  const glowY = useTransform(py, [0, 1], [0, 100]);
  const glowBackground = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 70%)`;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
        transformPerspective: 600,
      }}
      className={cn("group relative", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      {children}
    </motion.div>
  );
}
