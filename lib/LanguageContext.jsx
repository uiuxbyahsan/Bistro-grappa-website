"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useAnimationControls } from "framer-motion";
import {
  translations,
  DEFAULT_LANGUAGE,
  STORAGE_KEY,
} from "@/lib/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // Start on the primary language on both server and first client render so the
  // markup matches — never read localStorage in the initial state (that would
  // cause a hydration mismatch). The stored choice is applied in useEffect.
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);
  const controls = useAnimationControls();
  const firstRun = useRef(true);

  // Apply the persisted choice after mount.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && stored !== language && translations[stored]) {
        setLanguageState(stored);
      }
    } catch {
      /* localStorage unavailable — keep the default */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang> in sync and persist every change. A subtle cross-fade
  // plays on change only (not on the initial mount) by animating the SAME
  // wrapper node's opacity — the tree is never remounted, so entrance/scroll
  // animations don't replay.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* ignore write failures (private mode, blocked storage, etc.) */
    }

    controls.set({ opacity: 0.3 });
    controls.start({ opacity: 1, transition: { duration: 0.2, ease: "easeOut" } });
  }, [language, controls]);

  const setLanguage = useCallback((code) => {
    if (translations[code]) setLanguageState(code);
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      <motion.div animate={controls}>{children}</motion.div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return ctx;
}
