"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/LanguageContext";

const IMAGES = [
  { src: "/assets/food/special-tuna.jpg", alt: "Sesame-crusted tuna with herb purée", rot: -4 },
  { src: "/assets/food/hero-pasta.jpg", alt: "Penne in a rich tomato sauce", rot: 0 },
  { src: "/assets/food/gallery-tuna-medallions.jpg", alt: "Sesame tuna medallions over salad", rot: 4 },
];

export default function OrderBold() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16">
        {/* left: stacked headline */}
        <Reveal>
          <h2 className="display text-[clamp(2.75rem,9vw,6rem)] leading-[0.95] text-forest">
            {t.orderBold.words.map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h2>
        </Reveal>

        {/* right: copy + CTAs + collage */}
        <div>
          <Reveal as="p" className="max-w-md font-serif text-lg italic leading-relaxed text-forest">
            {t.orderBold.paragraph}
          </Reveal>

          <Reveal delay={0.08} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#reservations" className="btn btn-gold w-full sm:w-auto">
              {t.orderBold.ctaReserve}
            </a>
            <a href="#menu" className="btn btn-outline-forest w-full sm:w-auto">
              {t.orderBold.ctaMenu}
            </a>
          </Reveal>

          <div className="mt-12 flex items-end justify-center gap-0 -space-x-6 sm:justify-start sm:-space-x-8">
            {IMAGES.map((img, i) => (
              <motion.figure
                key={img.src}
                className="rounded-2xl bg-white p-2 shadow-xl transition-shadow hover:shadow-2xl sm:p-2.5"
                style={{
                  width: "34%",
                  maxWidth: 200,
                  aspectRatio: "4 / 5",
                  zIndex: i === 1 ? 20 : 10,
                }}
                initial={{ opacity: 0, y: 24, rotate: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: i === 1 ? -16 : 0, rotate: img.rot, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 90, damping: 14, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 30, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full rounded-xl object-cover"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
