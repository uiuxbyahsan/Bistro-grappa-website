import { IconDiamond } from "./Icons";

const ITEMS = [
  "Fresh Daily",
  "Made With Love",
  "Open For Lunch",
  "Bistro Vibes",
  "Sarajevo Flavors",
  "Crafted By Chef",
];

function Row({ ariaHidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {ITEMS.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="font-display text-2xl uppercase tracking-wide text-forest sm:text-3xl">
            {item}
          </span>
          <IconDiamond className="mx-6 h-3.5 w-3.5 text-forest/55 sm:mx-8" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Bistro Grappa highlights" className="relative bg-gold">
      <div className="marquee-mask overflow-hidden py-3.5 sm:py-4">
        <div className="marquee-track animate-marquee">
          <Row />
          <Row ariaHidden />
        </div>
      </div>

    </section>
  );
}
