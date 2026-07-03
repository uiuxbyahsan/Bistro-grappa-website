import FramePhoto from "./FramePhoto";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { TASTE_PROPS } from "@/lib/site";

function Prop({ item, side }) {
  const right = side === "right"; // visually anchored to the right column
  return (
    <RevealItem className={right ? "lg:text-right" : ""}>
      <h3 className="font-display text-xl font-bold uppercase tracking-[0.02em] text-white">
        {item.title}
      </h3>
      <p className="mt-1.5 font-sans text-base leading-relaxed text-cream/70">
        {item.text}
      </p>
    </RevealItem>
  );
}

export default function Taste() {
  const [a, b, c, d] = TASTE_PROPS;
  return (
    <section id="taste" className="relative bg-forest text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32">
        <div className="text-center">
          <Reveal as="p" className="eyebrow">
            The Grappa Difference
          </Reveal>
          <Reveal as="h2" delay={0.05} className="display mt-3 text-[clamp(2.5rem,6vw,4.75rem)]">
            Taste the Difference
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-3 font-serif text-lg italic text-cream/80">
            Bistro dining done right.
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-3 lg:gap-10">
          <RevealGroup className="order-2 space-y-8 lg:order-1" stagger={0.12}>
            <Prop item={a} side="right" />
            <Prop item={b} side="right" />
          </RevealGroup>

          <div className="order-1 flex justify-center lg:order-2">
            <FramePhoto
              src="/assets/food/gallery-platter.jpg"
              alt="Guests sharing a generous platter at Bistro Grappa"
              rotate={-1.5}
              className="aspect-[3/4] w-full max-w-[340px]"
            />
          </div>

          <RevealGroup className="order-3 space-y-8" stagger={0.12}>
            <Prop item={c} side="left" />
            <Prop item={d} side="left" />
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <a href="#menu" className="btn btn-gold">
            View Our Menu
          </a>
        </Reveal>
      </div>

    </section>
  );
}
