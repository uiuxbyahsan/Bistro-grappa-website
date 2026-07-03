"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * White-frame photo card: bg-white + padding makes the frame (no CSS border
 * stroke), rounded-2xl outer / rounded-xl inner image, shadow-xl deepening on
 * hover. Sizing/positioning comes from the caller via `className`.
 */
export default function FramePhoto({ src, alt, rotate = 0, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      className={`rounded-2xl bg-white p-2 shadow-xl transition-shadow hover:shadow-2xl sm:p-2.5 ${className}`}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.95, rotate: 0 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay }}
      whileHover={{ scale: 1.04, transition: { duration: 0.3, ease: "easeOut" } }}
      whileTap={{ scale: 1.06, rotate: rotate + 1, transition: { type: "spring", stiffness: 300, damping: 12 } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full rounded-xl object-cover"
      />
    </motion.figure>
  );
}
