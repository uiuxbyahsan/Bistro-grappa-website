"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Clean rounded photo card (16px) with a slight rotation, a spring entrance and
 * a hover lift. Used for the about / taste / order collages. Extra props that
 * older call sites still pass (variant, paper) are accepted and ignored.
 */
export default function CollagePhoto({
  src,
  alt,
  rotate = 0,
  delay = 0,
  className = "",
  round = false,
  hoverLift = true,
  border = "none",
  shadow = "0 6px 24px rgba(0, 0, 0, 0.12)",
}) {
  const reduce = useReducedMotion();
  const radius = round ? "9999px" : "16px";

  return (
    <motion.figure
      className={`overflow-hidden bg-white ${className}`}
      style={{
        borderRadius: radius,
        border,
        boxShadow: shadow,
      }}
      initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: 0, y: 22 }}
      whileInView={reduce ? {} : { opacity: 1, scale: 1, rotate, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 85, damping: 14, delay }}
      whileHover={
        hoverLift && !reduce
          ? {
              scale: 1.035,
              rotate: rotate * 0.4,
              zIndex: 30,
              transition: { type: "spring", stiffness: 220, damping: 18 },
            }
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
