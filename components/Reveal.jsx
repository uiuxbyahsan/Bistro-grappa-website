"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Single element that fades + slides up when scrolled into view. */
export function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  amount = 0.3,
  ...rest
}) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Container that staggers the entrance of its <RevealItem> children. */
export function RevealGroup({
  children,
  as = "div",
  className = "",
  stagger = 0.12,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      {...rest}
    >
      {children}
    </M>
  );
}

export function RevealItem({
  children,
  as = "div",
  className = "",
  y = 26,
  spring = false,
  ...rest
}) {
  const reduce = useReducedMotion();
  const M = motion[as] || motion.div;
  const variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: spring
            ? { type: "spring", stiffness: 120, damping: 16 }
            : { duration: 0.6, ease: EASE },
        },
      };
  return (
    <M className={className} variants={variants} {...rest}>
      {children}
    </M>
  );
}
