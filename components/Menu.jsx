"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { MENU } from "@/lib/site";

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

// Specific dish photo shown when a row is hovered or clicked. Items not listed
// fall back to the active category's default image.
const ITEM_IMG = {
  // Breakfast
  "Chicken Sandwich": "/assets/food/gallery-chicken-rice.jpg",
  "Roast Beef Sandwich": "/assets/food/special-ribeye.jpg",
  "Mozzarella Sandwich": "/assets/food/about-feta-salad.jpg",
  "Egg Sandwich": "/assets/food/gallery-omelette.jpg",
  "Fried Eggs": "/assets/food/gallery-omelette.jpg",
  Omelette: "/assets/food/gallery-omelette.jpg",
  "Eggs with Steak": "/assets/food/special-ribeye.jpg",
  "Eggs with Marinated Trout": "/assets/food/special-tuna.jpg",
  "Eggs with Chicken": "/assets/food/gallery-chicken-rice.jpg",
  // Starters
  "Beef Carpaccio": "/assets/food/gallery-carpaccio.jpg",
  "Red Trout Carpaccio": "/assets/food/about-carpaccio-board.jpg",
  "Cheese Selection": "/assets/food/about-feta-salad.jpg",
  // Salads
  "Chicken Salad": "/assets/food/gallery-salad-seeds.jpg",
  "Tuna Salad": "/assets/food/why-tuna-salad.jpg",
  "Rib Eye Salad": "/assets/food/special-ribeye.jpg",
  "Feta Cheese & Walnut Salad": "/assets/food/about-feta-salad.jpg",
  "Salad with Seeds": "/assets/food/gallery-salad-seeds.jpg",
  // Main Dishes
  "Rib Eye Steak": "/assets/food/special-ribeye.jpg",
  "Tuna Filet": "/assets/food/special-tuna.jpg",
  "Chicken Filet": "/assets/food/gallery-chicken-rice.jpg",
  "Slow-Roasted Veal Shoulder": "/assets/food/special-veal-shank.jpg",
  // Pasta
  "Truffle Pasta": "/assets/food/special-truffle-pasta.jpg",
  "Chicken Pasta": "/assets/food/gallery-chicken-pasta.jpg",
  "Rib Eye Pasta": "/assets/food/hero-pasta.jpg",
  "Pasta with Seeds": "/assets/food/gallery-pasta-seeds.jpg",
  "Mozzarella Pasta": "/assets/food/hero-risotto.jpg",
};

export default function Menu() {
  const [active, setActive] = useState(MENU[0].id);
  const [displayImg, setDisplayImg] = useState(CAT_IMG[MENU[0].id]);
  const panel = MENU.find((m) => m.id === active);

  const selectTab = (id) => {
    setActive(id);
    setDisplayImg(CAT_IMG[id]);
  };

  // Drinks tabs and any unmapped item fall back to the category default image.
  const showItem = (name) => setDisplayImg(ITEM_IMG[name] || CAT_IMG[active]);

  return (
    <section id="menu" className="relative bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-32">
        <Reveal as="h2" className="display text-center text-[clamp(2.5rem,6vw,4.5rem)] text-forest">
          Our Menu
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
                  {cat.label}
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
                    alt={`${panel.label} at Bistro Grappa`}
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
                    key={item.name}
                    onMouseEnter={() => showItem(item.name)}
                    onClick={() => showItem(item.name)}
                    className="flex cursor-pointer items-center justify-between rounded-md border-b border-black/[0.08] px-2 py-3.5 transition-colors duration-200 hover:bg-[rgba(4,48,27,0.05)]"
                  >
                    <span className="font-serif text-base text-forest">{item.name}</span>
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
