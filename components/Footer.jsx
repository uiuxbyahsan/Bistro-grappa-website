import { Reveal } from "./Reveal";
import { IconInstagram, IconFacebook } from "./Icons";
import { CONTACT, NAV_LINKS } from "@/lib/site";

const FOOTER_LINKS = NAV_LINKS.slice(0, 4); // About | Menu | Gallery | Visit Us

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <Reveal className="mx-auto max-w-5xl px-5 pb-10 pt-16 text-center sm:pt-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/Logo.png"
          alt="Bistro Grappa"
          width={472}
          height={296}
          className="mx-auto h-16 w-auto"
        />

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center justify-center gap-5">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bistro Grappa on Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-forest"
          >
            <IconInstagram className="h-5 w-5" />
          </a>
          <a
            href={CONTACT.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bistro Grappa on Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:border-gold hover:bg-gold hover:text-forest"
          >
            <IconFacebook className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-8 font-sans text-xs tracking-wide text-white/60">
          2025 Bistro Grappa · {CONTACT.street}, {CONTACT.city}
        </p>
      </Reveal>
    </footer>
  );
}
