"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrow } from "./Icons";
import { useLanguage } from "@/lib/LanguageContext";
import { fill } from "@/lib/translations";

const PARTY_SIZES = ["1", "2", "3", "4", "5", "6", "7", "8+"];

export default function ReservationForm() {
  const { t } = useLanguage();

  // Pick the right plural form. Works for English (one/other) and for the
  // Slavic one/few/many rule used by Bosnian across the sizes shown here.
  const guestWord = (size) => {
    const n = parseInt(size, 10) || 0;
    if (n === 1) return t.reservation.guestsOne;
    if (n >= 2 && n <= 4) return t.reservation.guestsFew;
    return t.reservation.guestsMany;
  };

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    date: "",
    party: "2",
    message: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired in: confirm to the guest and hand off to the
    // restaurant's inbox via a pre-filled email so the request isn't lost.
    const subject = encodeURIComponent(
      fill(t.reservation.mailSubject, { name: form.name })
    );
    const body = encodeURIComponent(
      `${t.reservation.mailName}: ${form.name}\n${t.reservation.mailContact}: ${form.contact}\n${t.reservation.mailDate}: ${form.date}\n${t.reservation.mailParty}: ${form.party}\n\n${form.message}`
    );
    if (typeof window !== "undefined") {
      window.location.href = `mailto:info@bistrograppa.ba?subject=${subject}&body=${body}`;
    }
    setSent(true);
  };

  return (
    <div className="relative rounded-3xl bg-cream p-6 shadow-card sm:p-8">
      <h3 className="display text-3xl text-forest">{t.reservation.heading}</h3>
      <p className="mt-2 font-serif text-sm italic text-forest/60">
        {t.reservation.subtitle}
      </p>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-center"
          >
            <p className="font-serif text-lg text-forest">
              {t.reservation.thanksGreeting}, {form.name || t.reservation.friend}.
            </p>
            <p className="mt-2 font-sans text-sm text-forest/70">
              {fill(t.reservation.thanksBody, {
                party: `${form.party} ${guestWord(form.party)}`,
                date: form.date || t.reservation.thanksDateFallback,
              })}
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="btn btn-outline-forest mt-5"
            >
              {t.reservation.makeAnother}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <div>
              <label htmlFor="r-name" className="field-label">
                {t.reservation.name}
              </label>
              <input
                id="r-name"
                className="field"
                placeholder={t.reservation.namePlaceholder}
                required
                value={form.name}
                onChange={update("name")}
              />
            </div>

            <div>
              <label htmlFor="r-contact" className="field-label">
                {t.reservation.contact}
              </label>
              <input
                id="r-contact"
                className="field"
                placeholder={t.reservation.contactPlaceholder}
                required
                value={form.contact}
                onChange={update("contact")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="r-date" className="field-label">
                  {t.reservation.date}
                </label>
                <input
                  id="r-date"
                  type="date"
                  className="field"
                  required
                  value={form.date}
                  onChange={update("date")}
                />
              </div>
              <div>
                <label htmlFor="r-party" className="field-label">
                  {t.reservation.party}
                </label>
                <select
                  id="r-party"
                  className="field"
                  value={form.party}
                  onChange={update("party")}
                >
                  {PARTY_SIZES.map((p) => (
                    <option key={p} value={p}>
                      {p} {guestWord(p)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="r-message" className="field-label">
                {t.reservation.message}
              </label>
              <textarea
                id="r-message"
                rows={3}
                className="field resize-none"
                placeholder={t.reservation.messagePlaceholder}
                value={form.message}
                onChange={update("message")}
              />
            </div>

            <button type="submit" className="btn btn-gold w-full">
              {t.reservation.submit}
              <IconArrow className="h-4 w-4" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
