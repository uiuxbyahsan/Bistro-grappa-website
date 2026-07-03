import FramePhoto from "./FramePhoto";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-32 lg:grid-cols-[55fr_45fr] lg:gap-16">
        {/* left: torn-edge collage — the only torn treatment on the site */}
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            <FramePhoto
              src="/assets/food/about-carpaccio-board.jpg"
              alt="Carpaccio on slate beside a cheese and walnut board"
              rotate={-6}
              className="absolute left-0 top-0 z-10 h-[66%] w-[62%]"
            />
            <FramePhoto
              src="/assets/food/about-interior.jpg"
              alt="The bright dining room at Bistro Grappa"
              rotate={2}
              delay={0.12}
              className="absolute right-0 top-[14%] z-20 h-[46%] w-[44%]"
            />
            <FramePhoto
              src="/assets/food/about-feta-salad.jpg"
              alt="Feta salad with seeds and cherry tomatoes"
              rotate={8}
              delay={0.22}
              className="absolute bottom-0 left-[20%] z-30 h-[44%] w-[52%]"
            />
          </div>
        </div>

        {/* right: text block */}
        <Reveal className="order-1 lg:order-2">
          <h2 className="display text-[clamp(3rem,7vw,4rem)] text-forest">ABOUT</h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-[1.7] text-forest/90">
            Grappa is inspired by the warmth of Sarajevo — honest ingredients,
            bold flavors, attentive service, and food made fresh every single
            day.
          </p>
          <p className="mt-4 max-w-xl font-sans text-base leading-[1.7] text-forest/90">
            From slow-roasted veal to handmade pasta and fresh trout, every dish
            is crafted with fresh ingredients, riverside atmosphere, and
            unforgettable flavor.
          </p>
          <a href="#taste" className="btn btn-gold mt-8">
            Explore The Difference
          </a>
        </Reveal>
      </div>
    </section>
  );
}
