"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { IconInstagram, IconArrow, IconPlay, IconEye, IconHeart } from "./Icons";
import { CONTACT, INSTAGRAM_POSTS } from "@/lib/site";

// Static, decorative engagement numbers — different per reel.
const STATS = [
  { views: "12.4K", likes: "342" },
  { views: "8.2K", likes: "521" },
  { views: "21K", likes: "894" },
  { views: "5.1K", likes: "276" },
];

const REELS = INSTAGRAM_POSTS.slice(0, 4).map((p, i) => ({ ...p, ...STATS[i] }));

function Reel({ reel, index }) {
  const [err, setErr] = useState(false);
  return (
    <motion.a
      href={CONTACT.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${reel.alt} — open Bistro Grappa on Instagram`}
      className="group relative block cursor-pointer overflow-hidden rounded-2xl"
      style={{ aspectRatio: "9 / 16" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 4) * 0.1 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {err ? (
        <div className="flex h-full w-full items-center justify-center bg-gold">
          <IconInstagram className="h-8 w-8 text-forest" />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={reel.src}
          alt={reel.alt}
          loading="lazy"
          decoding="async"
          onError={() => setErr(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* always-visible bottom overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 p-3 pt-12"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
      >
        <IconPlay className="h-5 w-5 text-white/95" />
        <div className="flex items-center gap-2.5 font-sans text-xs text-white">
          <span className="flex items-center gap-1">
            <IconEye className="h-4 w-4" /> {reel.views}
          </span>
          <span className="opacity-50">·</span>
          <span className="flex items-center gap-1">
            <IconHeart className="h-3.5 w-3.5" /> {reel.likes}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function InstagramSection() {
  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32">
        <div className="text-center">
          <Reveal as="h2" className="display text-[clamp(2.5rem,6vw,4.5rem)] text-forest">
            Follow Our Story
          </Reveal>
          <Reveal as="p" delay={0.05} className="mt-3 font-serif text-lg italic text-forest/65">
            {CONTACT.instagramHandle} on Instagram
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {REELS.map((reel, i) => (
            <Reel key={reel.src} reel={reel} index={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            View More on Instagram
            <IconArrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
