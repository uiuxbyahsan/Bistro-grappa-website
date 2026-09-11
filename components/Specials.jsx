"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

// Priced dishes keyed by their (stable) image id; translated names live in the
// dictionary under specials.items[id]. Everything else is an atmosphere card.
const PRICES = {
  "special-ribeye": "25.00",
  "special-tuna": "26.00",
  "special-truffle-pasta": "13.00",
  "gallery-chicken-rice": "15.00",
  "gallery-platter": "30.00",
  "gallery-carpaccio": "19.00",
  "about-carpaccio-board": "18.00",
  "about-feta-salad": "20.00",
  "gallery-chicken-pasta": "13.00",
  "hero-pasta": "16.00",
  "hero-risotto": "14.00",
  "gallery-omelette": "7.50",
  "gallery-salad-seeds": "14.00",
  "why-tuna-salad": "17.00",
};

const FOOD = [
  "special-ribeye", "special-tuna", "special-truffle-pasta",
  "about-carpaccio-board", "about-feta-salad", "about-interior",
  "gallery-carpaccio", "gallery-chicken-pasta", "gallery-chicken-rice",
  "gallery-omelette", "gallery-platter", "gallery-salad-seeds",
  "gallery-shrimp", "gallery-tuna-bites", "gallery-tuna-medallions",
  "hero-pasta", "hero-risotto", "hero-tuna",
  "why-cocktail", "why-tuna-salad",
];

// Structural card data: id + image + price. Names/labels come from `t`.
const CARDS = FOOD.map((f) => ({
  id: f,
  src: `/assets/food/${f}.jpg`,
  price: PRICES[f] || null,
}));

function SpecialCard({ card, index }) {
  const { t } = useLanguage();
  const name = t.specials.items[card.id] || t.specials.chefSpecial;
  const priceText = card.price ? `${card.price} KM` : t.specials.marketPrice;
  return (
    <motion.div
      className="mr-6 shrink-0 cursor-pointer rounded-2xl bg-white p-2 shadow-xl transition-shadow hover:shadow-2xl sm:p-2.5"
      style={{ width: 260, height: 340, rotate: index % 2 === 0 ? -5 : 5 }}
      whileHover={{ scale: 1.05, zIndex: 20, transition: { type: "spring", stiffness: 220, damping: 18 } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={name}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="rounded-xl"
        style={{ height: 240, width: "100%", objectFit: "cover" }}
      />
      <h3
        className="mt-3 text-center font-display text-[15px] font-bold uppercase text-forest"
        style={{ letterSpacing: "0.05em" }}
      >
        {name}
      </h3>
      <p className="mt-1 text-center font-sans text-[15px] font-bold text-gold">{priceText}</p>
    </motion.div>
  );
}

function CardSet({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0" aria-hidden={ariaHidden}>
      {CARDS.map((card, i) => (
        <SpecialCard key={`${card.src}-${ariaHidden ? "b" : "a"}`} card={card} index={i} />
      ))}
    </div>
  );
}

export default function Specials() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="py-20 sm:py-32">
        <div className="px-5 text-center sm:px-8">
          <Reveal as="p" className="eyebrow">
            {t.specials.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.05} className="display mt-3 text-[clamp(2.5rem,6vw,4.5rem)]">
            {t.specials.heading}
          </Reveal>
        </div>

        {/* full-width infinite auto-scroll strip (no pause on hover) */}
        <div className="mt-14">
          <div className="marquee-track animate-marquee" style={{ animationDuration: "60s" }}>
            <CardSet />
            <CardSet ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
