"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { LANGUAGES } from "@/lib/translations";
import { IconChevronDown } from "./Icons";

// Circular flag shown only on the option rows (never on the trigger).
function Flag({ src }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt=""
      width={20}
      height={20}
      className="h-5 w-5 rounded-full object-cover"
    />
  );
}

export default function LanguageSwitcher({ variant = "desktop", onSelect }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close on Escape (both variants).
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Outside-click close — desktop only (mobile lives inside the drawer).
  useEffect(() => {
    if (!open || variant !== "desktop") return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open, variant]);

  const choose = (code) => {
    setLanguage(code);
    setOpen(false);
    onSelect?.();
  };

  const Trigger = (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-label={t.langSwitcher.aria}
      aria-haspopup="listbox"
      aria-expanded={open}
      className={
        variant === "desktop"
          ? "flex items-center gap-1.5 font-sans text-[0.78rem] font-medium uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-gold"
          : "flex w-full items-center gap-1.5 rounded-lg px-3 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white/85 transition-colors hover:text-gold"
      }
    >
      <span>{current.abbr}</span>
      <IconChevronDown
        className={`h-4 w-4 transition-transform duration-200 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>
  );

  // ---- Mobile: inline accordion, no floating card ------------------------
  if (variant === "mobile") {
    return (
      <div>
        {Trigger}
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              role="listbox"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              {LANGUAGES.map((l) => {
                const active = l.code === language;
                return (
                  <li key={l.code} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onClick={() => choose(l.code)}
                      className={`flex w-full items-center gap-3 px-3 py-3 font-sans text-sm uppercase tracking-[0.2em] transition-colors ${
                        active ? "text-gold" : "text-white/85 hover:text-gold"
                      }`}
                    >
                      <Flag src={l.flag} />
                      <span>{l.label}</span>
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ---- Desktop: floating card dropdown -----------------------------------
  return (
    <div ref={wrapRef} className="relative">
      {Trigger}
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-3 min-w-[9.5rem] overflow-hidden rounded-xl border border-black/10 bg-cream-soft py-1.5 shadow-[0_18px_40px_-18px_rgba(4,48,27,0.5)]"
          >
            {LANGUAGES.map((l) => {
              const active = l.code === language;
              return (
                <li key={l.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => choose(l.code)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-sans text-sm transition-colors hover:bg-black/[0.04] ${
                      active
                        ? "font-semibold text-gold underline underline-offset-4"
                        : "text-forest"
                    }`}
                  >
                    <Flag src={l.flag} />
                    <span>{l.label}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
