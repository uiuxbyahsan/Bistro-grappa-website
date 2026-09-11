"use client";

import { Reveal } from "./Reveal";
import ReservationForm from "./ReservationForm";
import { IconPin, IconInstagram, IconFacebook } from "./Icons";
import { CONTACT } from "@/lib/site";
import { useLanguage } from "@/lib/LanguageContext";

export default function Visit() {
  const { t } = useLanguage();
  return (
    <section id="visit" className="relative bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16">
        {/* left: find us */}
        <div>
          <Reveal as="p" className="eyebrow">
            {t.visit.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.05} className="display mt-3 text-[clamp(2.5rem,6vw,4.5rem)]">
            {t.visit.heading}
          </Reveal>

          <Reveal delay={0.1} className="mt-7 space-y-4">
            <p className="flex items-start gap-3 font-sans text-base text-cream/85">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>
                {CONTACT.street}, {CONTACT.city} {CONTACT.postal}
              </span>
            </p>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-sans text-base text-cream/85 transition-colors hover:text-gold"
            >
              <IconInstagram className="h-5 w-5 shrink-0 text-gold" />
              <span>{CONTACT.instagramHandle}</span>
            </a>
            <a
              href={CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-sans text-base text-cream/85 transition-colors hover:text-gold"
            >
              <IconFacebook className="h-5 w-5 shrink-0 text-gold" />
              <span>{CONTACT.facebookLabel}</span>
            </a>
          </Reveal>

          {/* map */}
          <Reveal delay={0.16} className="mt-8">
            <div className="overflow-hidden rounded-3xl border-4 border-white/90 shadow-card">
              <iframe
                title="Map to Bistro Grappa, Obala Kulina bana 10, Sarajevo"
                src={CONTACT.mapsEmbed}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[320px] w-full border-0 grayscale-[0.15]"
              />
            </div>
          </Reveal>
        </div>

        {/* right: reservation form */}
        <Reveal delay={0.1} id="reservations" className="scroll-mt-24 lg:pt-10">
          <ReservationForm />
        </Reveal>
      </div>

    </section>
  );
}
