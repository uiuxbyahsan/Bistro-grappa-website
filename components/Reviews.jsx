import { Reveal } from "./Reveal";
import { IconStar } from "./Icons";
import { REVIEWS } from "@/lib/site";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Stars({ rating = 5, className = "" }) {
  return (
    <div className={`flex gap-0.5 text-gold ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <IconStar key={i} filled={i < rating} className="h-4 w-4" />
      ))}
    </div>
  );
}

function Card({ review, index }) {
  return (
    <article
      className="mr-6 flex w-80 shrink-0 flex-col rounded-2xl border border-black/[0.08] bg-white p-6"
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-sans text-sm font-bold text-white"
          style={{ background: index % 2 === 1 ? "#f2b418" : "#04301B" }}
        >
          {initials(review.name)}
        </div>
        <div>
          <p className="font-sans text-[15px] font-bold text-forest">{review.name}</p>
          <p className="font-sans text-[13px] text-[#888]">{review.source}</p>
        </div>
      </div>
      <p className="mt-4 font-serif text-sm leading-[1.6] text-forest">{review.text}</p>
      <div className="mt-5 border-t border-black/[0.06] pt-4">
        <Stars rating={review.rating} />
      </div>
    </article>
  );
}

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="py-20 sm:py-32">
        {/* header row */}
        <Reveal className="mx-auto mb-12 flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="display text-[clamp(2rem,5vw,2.5rem)] leading-[1.05] text-forest">
              Trusted by
            </p>
            <p className="display text-[clamp(2rem,5vw,2.5rem)] leading-[1.05] text-gold">
              500+ guests
            </p>
          </div>
          <div className="hidden items-center gap-3 sm:gap-4 md:flex">
            <span className="display text-[clamp(3rem,8vw,4.5rem)] leading-none text-forest">
              4.9
            </span>
            <Stars rating={5} />
          </div>
        </Reveal>

        {/* auto-scrolling carousel */}
        <div className="marquee-mask">
          <div
            className="marquee-track animate-marquee"
            style={{ animationDuration: "40s" }}
          >
            {REVIEWS.map((r, i) => (
              <Card key={`a-${i}`} review={r} index={i} />
            ))}
            {REVIEWS.map((r, i) => (
              <Card key={`b-${i}`} review={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
