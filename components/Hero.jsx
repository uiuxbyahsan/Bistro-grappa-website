"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconArrow } from "./Icons";

const EASE = [0.22, 1, 0.36, 1];

// Five cards fanned in an arc, centre card highest. Real photos from /assets/food.
const CARDS = [
  { src: "/assets/food/special-veal-shank.jpg", alt: "Slow-roasted veal shank with potatoes" },
  { src: "/assets/food/gallery-pasta-seeds.jpg", alt: "Penne in tomato sauce with toasted seeds" },
  { src: "/assets/food/gallery-carpaccio.jpg", alt: "Beef carpaccio drizzled with olive oil" },
  { src: "/assets/food/about-carpaccio-board.jpg", alt: "Carpaccio on slate beside a cheese and walnut board" },
  { src: "/assets/food/why-cocktail.jpg", alt: "A garnished cocktail at the bar" },
];

// Per-card idle float timings — deliberately out of sync.
const FLOAT = [
  { yDur: 3.6, rotDur: 4.1, delay: 0 },
  { yDur: 4.2, rotDur: 3.8, delay: 0.5 },
  { yDur: 3.9, rotDur: 4.5, delay: 1.1 },
  { yDur: 4.5, rotDur: 3.6, delay: 0.3 },
  { yDur: 3.4, rotDur: 4.2, delay: 0.9 },
];

const CARD_W = 220;
const CARD_H = 280;

const up = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.7 + i * 0.1 },
  }),
};

function HeroCard({ card, i }) {
  const [hover, setHover] = useState(false);
  const offset = i - 2;
  const x = offset * 180 - CARD_W / 2;
  const baseY = Math.abs(offset) * 34;
  const rot = offset * 9;
  const z = 30 - Math.abs(offset) * 8;
  const f = FLOAT[i];

  return (
    <div
      className="absolute left-1/2 top-0"
      style={{ transform: `translateX(${x}px) translateY(${baseY}px)`, zIndex: hover ? 50 : z }}
    >
      {/* continuous idle float (independent per card, paused on hover) */}
      <motion.div
        animate={hover ? { y: 0, rotate: 0 } : { y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={
          hover
            ? { duration: 0.3, ease: "easeOut" }
            : {
                y: { duration: f.yDur, repeat: Infinity, ease: "easeInOut", delay: f.delay },
                rotate: { duration: f.rotDur, repeat: Infinity, ease: "easeInOut", delay: f.delay },
              }
        }
      >
        {/* entrance + hover scale; this is the card itself */}
        <motion.div
          className="cursor-pointer rounded-2xl bg-white p-2 shadow-xl transition-shadow hover:shadow-2xl sm:p-2.5"
          style={{ width: CARD_W, height: CARD_H }}
          initial={{ opacity: 0, y: 90, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: rot }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.12 + i * 0.1 }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          whileHover={{ scale: 1.06, transition: { type: "spring", stiffness: 250, damping: 18 } }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.src}
            alt={card.alt}
            className="h-full w-full rounded-xl object-cover"
            draggable={false}
            decoding="async"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-forest pt-[68px] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 16%, rgba(255,180,1,0.16), transparent 70%), radial-gradient(80% 60% at 50% 120%, rgba(0,0,0,0.45), transparent 60%)",
        }}
      />

      {/* single floating tomato cutout, top-right (desktop only, behind text) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 hidden md:block"
        style={{ top: 32, right: 48 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/assets/hero-cutout-2.avif"
            alt=""
            style={{ height: 180, width: "auto", display: "block" }}
            animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
            transition={{
              y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5.0, repeat: Infinity, ease: "easeInOut" },
            }}
            draggable={false}
            decoding="async"
          />
        </motion.div>
      </div>

      {/* second floating cutout, bottom-left (desktop only, behind text) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 hidden md:block"
        style={{ bottom: 40, left: 48 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/assets/hero-cutout-1.avif"
            alt=""
            style={{ height: 150, width: "auto", display: "block" }}
            animate={{ y: [0, -10, 0], rotate: [3, -3, 3] }}
            transition={{
              y: { duration: 3.8, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4.6, delay: 0.5, repeat: Infinity, ease: "easeInOut" },
            }}
            draggable={false}
            decoding="async"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-68px)] max-w-6xl flex-col items-center justify-center px-5 py-16 text-center sm:py-20">
        {/* fanned arc of cards */}
        <div className="relative mb-2 h-[172px] w-full overflow-visible sm:h-[262px] lg:h-[378px]">
          <div className="absolute left-1/2 top-0 origin-top -translate-x-1/2 scale-[0.42] sm:scale-[0.66] lg:scale-100">
            <div className="relative h-[360px] w-[760px]">
              {CARDS.map((card, i) => (
                <HeroCard key={card.src} card={card} i={i} />
              ))}
            </div>
          </div>
        </div>

        {/* text below the fan */}
        <motion.h1
          custom={1}
          variants={up}
          initial="hidden"
          animate="show"
          className="display text-balance text-[clamp(3rem,9vw,6rem)]"
        >
          Where Every Bite
          <br className="hidden sm:block" /> Tells a Story
        </motion.h1>

        <motion.p
          custom={2}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl font-serif text-lg italic text-cream/85 sm:text-xl"
        >
          Bistro dining done right — fresh, bold, soulful.
        </motion.p>

        <motion.div
          custom={3}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#menu" className="btn btn-gold w-full sm:w-auto">
            View Menu
            <IconArrow className="h-4 w-4" />
          </a>
          <a href="#reservations" className="btn btn-outline-light w-full sm:w-auto">
            Make a Reservation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
