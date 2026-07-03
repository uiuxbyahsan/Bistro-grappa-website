"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Clean rounded food photo (16px radius) with a spring entrance and hover lift.
 * Used for the gallery and Instagram grids.
 */
export default function RoundedPhoto({
  src,
  alt,
  delay = 0,
  className = "",
  radius = 16,
  hoverLift = true,
}) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      className={`overflow-hidden ${className}`}
      style={{
        borderRadius: radius,
        boxShadow: "0 6px 24px rgba(0, 0, 0, 0.12)",
      }}
      initial={reduce ? false : { opacity: 0, y: 22, scale: 0.96 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 90, damping: 15, delay }}
      whileHover={
        hoverLift && !reduce
          ? { scale: 1.03, zIndex: 20, transition: { type: "spring", stiffness: 220, damping: 18 } }
          : undefined
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full object-cover"
        style={{ borderRadius: radius }}
      />
    </motion.figure>
  );
}
