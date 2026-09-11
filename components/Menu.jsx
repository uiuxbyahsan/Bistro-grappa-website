"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { MENU } from "@/lib/site";
import { useLanguage } from "@/lib/LanguageContext";

// Best-fit photo per category (default when a tab is selected).
const CAT_IMG = {
  breakfast: "/assets/food/gallery-omelette.jpg",
  starters: "/assets/food/about-carpaccio-board.jpg",
  salads: "/assets/food/gallery-salad-seeds.jpg",
  main: "/assets/food/special-ribeye.jpg",
  pasta: "/assets/food/hero-pasta.jpg",
  beer: "/assets/food/why-cocktail.jpg",
  cider: "/assets/food/why-cocktail.jpg",
  "white-wines": "/assets/food/about-interior.jpg",
  "red-wines": "/assets/food/about-interior.jpg",
};

// Specific dish photo shown when a row is hovered or clicked, keyed by the
// item's stable id. Items not listed fall back to the category default image.
const ITEM_IMG = {
  // Breakfast
  "chicken-sandwich": "/assets/food/gallery-chicken-rice.jpg",
  "roast-beef-sandwich": "/assets/food/special-ribeye.jpg",
  "mozzarella-sandwich": "/assets/food/about-feta-salad.jpg",
  "egg-sandwich": "/assets/food/gallery-omelette.jpg",
  "fried-eggs": "/assets/food/gallery-omelette.jpg",
  omelette: "/assets/food/gallery-omelette.jpg",
  "eggs-steak": "/assets/food/special-ribeye.jpg",
  "eggs-trout": "/assets/food/special-tuna.jpg",
  "eggs-chicken": "/assets/food/gallery-chicken-rice.jpg",
  // Starters
  "beef-carpaccio": "/assets/food/gallery-carpaccio.jpg",
  "trout-carpaccio": "/assets/food/about-carpaccio-board.jpg",
  "cheese-selection": "/assets/food/about-feta-salad.jpg",
  // Salads
  "chicken-salad": "/assets/food/gallery-salad-seeds.jpg",
  "tuna-salad": "/assets/food/why-tuna-salad.jpg",
  "ribeye-salad": "/assets/food/special-ribeye.jpg",
  "feta-walnut-salad": "/assets/food/about-feta-salad.jpg",
  "seed-salad": "/assets/food/gallery-salad-seeds.jpg",
  // Main Dishes
  "ribeye-steak": "/assets/food/special-ribeye.jpg",
  "tuna-filet": "/assets/food/special-tuna.jpg",
  "chicken-filet": "/assets/food/gallery-chicken-rice.jpg",
  "veal-shoulder": "/assets/food/special-veal-shank.jpg",
  // Pasta
  "truffle-pasta": "/assets/food/special-truffle-pasta.jpg",
  "chicken-pasta": "/assets/food/gallery-chicken-pasta.jpg",
  "ribeye-pasta": "/assets/food/hero-pasta.jpg",
  "seed-pasta": "/assets/food/gallery-pasta-seeds.jpg",
  "mozzarella-pasta": "/assets/food/hero-risotto.jpg",
};

export default function Menu() {
  const { t } = useLanguage();
  const [active, setActive] = useState(MENU[0].id);
  const [displayImg, setDisplayImg] = useState(CAT_IMG[MENU[0].id]);
  const panel = MENU.find((m) => m.id === active);

  const selectTab = (id) => {
    setActive(id);
    setDisplayImg(CAT_IMG[id]);
  };

  // Drinks tabs and any unmapped item fall back to the category default image.
  const showItem = (id) => setDisplayImg(ITEM_IMG[id] || CAT_IMG[active]);

  return (
    <section id="menu" className="relative bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-32">
        <Reveal as="h2" className="display text-center text-[clamp(2.5rem,6vw,4.5rem)] text-forest">
          {t.menu.heading}
        </Reveal>

        {/* slash-separated text tabs */}
        <Reveal delay={0.05} className="mt-8 flex flex-wrap items-center justify-center gap-y-2">
          {MENU.map((cat, i) => {
            const isActive = cat.id === active;
            return (
              <Fragment key={cat.id}>
                {i > 0 && <span className="px-2 text-forest/30">/</span>}
                <button
                  type="button"
                  onClick={() => selectTab(cat.id)}
                  className={`font-sans text-base transition-colors ${
                    isActive
                      ? "font-bold text-forest underline underline-offset-4"
                      : "font-normal text-[#999] hover:text-forest"
                  }`}
                >
                  {t.menu.categories[cat.id]}
                </button>
              </Fragment>
            );
          })}
        </Reveal>

        {/* two-column content */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[40fr_60fr] lg:gap-14">
          {/* left: polaroid photo card (crossfades on tab + row hover) */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="w-full max-w-[340px] rounded-2xl bg-white p-2 shadow-xl transition-shadow hover:shadow-2xl sm:p-2.5"
              style={{ transform: "rotate(-3deg)" }}
            >
              <div className="relative overflow-hidden" style={{ borderRadius: 12, aspectRatio: "3 / 4" }}>
                <AnimatePresence>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    key={displayImg}
                    src={displayImg}
                    alt={`${t.menu.categories[panel.id]} — Bistro Grappa`}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* right: menu list */}
          <div className="min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.ul
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {panel.items.map((item) => (
                  <li
                    key={item.id || item.name}
                    onMouseEnter={() => showItem(item.id)}
                    onClick={() => showItem(item.id)}
                    className="flex cursor-pointer items-center justify-between rounded-md border-b border-black/[0.08] px-2 py-3.5 transition-colors duration-200 hover:bg-[rgba(4,48,27,0.05)]"
                  >
                    <span className="font-serif text-base text-forest">
                      {(item.id && t.menu.items[item.id]) || item.name}
                    </span>
                    {item.price ? (
                      <span className="whitespace-nowrap font-sans text-[15px] font-bold text-forest">
                        {item.price} KM
                      </span>
                    ) : null}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
