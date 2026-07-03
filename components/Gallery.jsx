import { Reveal } from "./Reveal";
import { IconCutlery } from "./Icons";
import { GALLERY } from "@/lib/site";

const PHOTOS = [
  GALLERY[0],
  GALLERY[2],
  GALLERY[7],
  GALLERY[4],
  GALLERY[6],
];

function SpecialCard() {
  return (
    <div
      className="mr-6 flex shrink-0 flex-col justify-center"
      style={{ width: 300, height: 400, borderRadius: 20, background: "#04301B", padding: 32 }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold">
        <IconCutlery className="h-10 w-10 text-white" />
      </div>
      <h3 className="mt-5 font-display text-[22px] font-bold uppercase leading-tight text-white">
        Bistro Grappa
      </h3>
      <p className="font-display text-lg font-bold uppercase text-white">
        Taste Every Moment
      </p>
      <p className="mt-3 font-sans text-sm leading-relaxed text-white/75">
        Join us riverside and discover why Grappa is Sarajevo&apos;s most beloved
        bistro experience.
      </p>
      <a
        href="#visit"
        className="mt-6 inline-flex w-max items-center justify-center rounded-full bg-white px-6 py-2.5 font-sans text-sm font-bold text-forest transition-transform hover:-translate-y-0.5"
      >
        Find Us
      </a>
    </div>
  );
}

function PhotoCard({ img, rot }) {
  return (
    <div
      className="mr-6 shrink-0 rounded-2xl bg-white p-2 shadow-xl transition-shadow hover:shadow-2xl sm:p-2.5"
      style={{ width: 300, height: 400, transform: `rotate(${rot}deg)` }}
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
    </div>
  );
}

function CardSet({ ariaHidden = false }) {
  return (
    <div className="flex shrink-0" aria-hidden={ariaHidden}>
      <SpecialCard />
      {PHOTOS.map((img, i) => (
        <PhotoCard key={img.src} img={img} rot={i % 2 === 0 ? -4 : 4} />
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream">
      <div className="py-20 sm:py-32">
        <div className="px-5 text-center sm:px-8">
          <Reveal as="h2" className="display text-[clamp(2.5rem,6vw,4.5rem)] text-forest">
            Moments at Grappa
          </Reveal>
          <Reveal as="p" delay={0.05} className="mt-3 font-serif text-lg italic text-forest/65">
            A glimpse into the experience.
          </Reveal>
        </div>

        {/* full-width auto-scrolling slider */}
        <div className="marquee-mask mt-12">
          <div className="marquee-track animate-marquee" style={{ animationDuration: "60s" }}>
            <CardSet />
            <CardSet ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
