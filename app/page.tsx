import { ArrowUpRight, AtSign, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { cuts, type Cut } from "./data/cuts";
import {
  bookingUrl,
  directionsUrl,
  externalLinkProps,
  googleReviewsUrl,
  instagramUrl,
} from "./data/links";
import { currentLocation } from "./data/location";
import { reviews, reviewSummary } from "./data/reviews";
import { serviceGroups } from "./data/services";

const sectionClasses = "border-t border-border px-6 py-24 sm:px-10 lg:px-[7vw] lg:py-40";

const sectionIndexClasses = "m-0 font-mono text-[11px] tracking-[0.14em] text-brand uppercase";

const headingClasses =
  "m-0 text-5xl leading-[0.9] font-semibold tracking-[-0.065em] " +
  "sm:text-6xl lg:text-[clamp(4rem,6vw,5.75rem)]";

const buttonClasses =
  "inline-flex min-h-13 w-max items-center justify-center gap-4 rounded-full " +
  "bg-brand px-6 text-sm font-semibold text-brand-contrast transition " +
  "hover:-translate-y-0.5 hover:bg-brand-hover";

const textLinkClasses =
  "inline-flex w-max items-center gap-2 text-sm text-muted-foreground " +
  "transition-colors hover:text-foreground";

type CutWithImage = Cut & {
  image: string;
  imageAlt: string;
};

const hasImage = (cut: Cut): cut is CutWithImage => {
  return Boolean(cut.image && cut.imageAlt);
};

const Home = () => {
  const featuredCuts = cuts.filter(hasImage).slice(0, 3);

  const serviceGroupDescriptions: Record<string, string> = {
    "cuts-and-fades":
      "Traditional cuts, skin fades, taper fades, scissor work, restyles, and pixie cuts.",
    "cut-and-beard": "Combined appointments for a complete haircut and beard refresh.",
    maintenance: "Quick, focused appointments for grades, beard trims, and undercuts.",
    "age-specific": "Dedicated services for younger clients and gentlemen over 65.",
  };

  const getStartingPrice = (prices: string[]) => {
    const numericPrices = prices.map((price) => Number.parseFloat(price.replace("£", "")));

    return Math.min(...numericPrices);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="grid min-h-svh lg:grid-cols-[1.08fr_0.92fr]" id="top">
        <div className="flex min-h-[650px] flex-col justify-center px-6 pt-36 pb-20 sm:px-10 lg:px-[7vw]">
          <p className="mb-8 flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            <span className="h-px w-8 bg-brand" />
            Independent barber · Tetbury
          </p>

          <h1 className="m-0 text-[clamp(4rem,8vw,8rem)] leading-[0.81] font-semibold tracking-[-0.075em]">
            Good hair.
            <br />
            <em className="font-serif font-normal text-brand">No fuss.</em>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Sharp, considered cuts by Barber Farr - currently working from Moli Barbers in the heart
            of Tetbury.
          </p>

          <div className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
            <a className={buttonClasses} href={bookingUrl} {...externalLinkProps}>
              Book with Farr
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <a className={textLinkClasses} href={instagramUrl} {...externalLinkProps}>
              <AtSign className="size-4" aria-hidden="true" />
              barberfarr
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden bg-[#151816] text-[#f5f2ec] lg:min-h-[720px]">
          <Image
            src="/images/hero.jpg"
            alt="Charlie Farr of Barber Farr"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover object-center"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20"
            aria-hidden="true"
          />

          <span className="absolute top-28 right-[9%] font-mono text-xs text-white/50">01</span>

          <div className="absolute bottom-[18%] left-[7%] w-[min(86%,28rem)] rounded-3xl border border-white/15 bg-black/55 p-6 shadow-2xl backdrop-blur-md sm:p-8">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#f08a78] uppercase">
              Barber Farr
            </span>

            <p className="mt-3 max-w-sm font-serif text-[clamp(2rem,3vw,3.25rem)] leading-[0.95] text-white">
              Five years behind the chair.
            </p>
          </div>

          <div className="absolute right-[7%] bottom-[5%] flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-5 py-3 backdrop-blur-xl">
            <MapPin className="size-4.5 text-[#f08a78]" aria-hidden="true" />

            <span className="text-[11px] leading-snug text-white/70">
              Currently at
              <br />
              <strong className="font-medium text-white">Moli Barbers, Tetbury</strong>
            </span>
          </div>
        </div>
      </section>

      <section
        className={`${sectionClasses} grid gap-14 lg:grid-cols-[1fr_2.1fr] lg:gap-[8vw]`}
        id="about"
      >
        <p className={sectionIndexClasses}>01 / Approach</p>

        <div className="max-w-4xl">
          <h2 className={headingClasses}>
            A proper cut.
            <br />
            <em className="font-serif font-normal text-brand">Made personal.</em>
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:ml-auto lg:text-2xl">
            Barbering for over five years, Charlie brings experience, attention to detail and an
            individual approach to every cut. From traditional trims to technical fades, and with a
            particular soft spot for a proper mullet, each appointment is shaped around the person
            in the chair.
          </p>
        </div>
      </section>

      <section className={`${sectionClasses} bg-surface`} id="services">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-[8vw]">
          <div>
            <p className={sectionIndexClasses}>02 / Services</p>
            <h2 className={`${headingClasses} mt-7`}>In the chair</h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              From a quick tidy-up to a complete restyle, find the time and service that suits you.
            </p>

            <Link className={`${textLinkClasses} mt-7`} href="/services">
              View all services and prices
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid border-t border-l border-border sm:grid-cols-2 lg:mt-24">
          {serviceGroups.map((group, index) => {
            const startingPrice = getStartingPrice(group.services.map((service) => service.price));

            return (
              <Link
                className="group relative min-h-72 border-r border-b border-border p-7 transition-colors hover:bg-surface-elevated sm:p-9 lg:min-h-80"
                href={`/services#${group.id}`}
                key={group.id}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {serviceGroupDescriptions[group.id]}
                  </p>
                </div>

                <div className="absolute right-7 bottom-7 left-7 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground sm:right-9 sm:bottom-9 sm:left-9">
                  <span>
                    {group.services.length} {group.services.length === 1 ? "service" : "services"}
                  </span>

                  <span>
                    From <strong className="font-semibold text-foreground">£{startingPrice}</strong>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section
        className={`${sectionClasses} grid gap-16 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[7vw]`}
        id="work"
      >
        <div className="flex flex-col items-start">
          <p className={sectionIndexClasses}>03 / Cuts</p>

          <h2 className={`${headingClasses} mt-7`}>
            Find your
            <br />
            next cut.
          </h2>

          <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
            Explore the differences between popular cuts before choosing your appointment.
          </p>

          <Link className={`${textLinkClasses} mt-10 lg:mt-auto`} href="/cuts">
            View all cuts
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featuredCuts.map((cut, index) => (
            <Link
              className={[
                "group relative isolate min-h-[420px] overflow-hidden rounded-3xl bg-surface-elevated",
                index === 0 ? "sm:row-span-2 sm:min-h-[856px]" : "",
              ].join(" ")}
              href={`/cuts#${cut.id}`}
              key={cut.id}
            >
              <Image
                src={cut.image}
                alt={cut.imageAlt}
                fill
                sizes={
                  index === 0 ? "(max-width: 640px) 100vw, 45vw" : "(max-width: 640px) 100vw, 30vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/15"
                aria-hidden="true"
              />

              <span className="absolute top-6 right-6 z-10 rounded-full border border-white/15 bg-black/45 px-3 py-2 font-mono text-xs text-white/75 backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute right-5 bottom-5 left-5 z-10 rounded-2xl border border-white/15 bg-black/55 p-5 text-white shadow-xl backdrop-blur-md sm:right-7 sm:bottom-7 sm:left-7">
                <p className="font-serif text-3xl leading-none">{cut.name}</p>

                <div className="mt-3 flex items-end justify-between gap-5">
                  <small className="block max-w-[15rem] text-xs leading-relaxed text-white/70">
                    {cut.maintenance}
                  </small>

                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${sectionClasses} bg-surface-elevated`} id="reviews">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className={sectionIndexClasses}>04 / Word of mouth</p>

            <h2 className={`${headingClasses} mt-7`}>
              Proof is in
              <br />
              <em className="font-serif font-normal text-brand">the people.</em>
            </h2>
          </div>

          <div className="lg:text-right">
            <div
              className="flex gap-1 lg:justify-end"
              role="img"
              aria-label={`${reviewSummary.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star className="size-4 fill-brand text-brand" aria-hidden="true" key={index} />
              ))}
            </div>

            <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              {reviewSummary.rating.toFixed(1)}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {reviewSummary.count} Google reviews
            </p>

            <p className="mt-1 text-xs text-muted-foreground">For {reviewSummary.business}</p>
          </div>
        </div>

        <div className="mt-16 grid border-t border-l border-border lg:mt-24 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              className="relative flex min-h-72 flex-col border-r border-b border-border p-7 sm:p-9"
              key={review.quote}
            >
              <span className="font-serif text-6xl leading-none text-brand" aria-hidden="true">
                “
              </span>

              <blockquote className="mt-5 font-serif text-2xl leading-snug">
                {review.quote}
              </blockquote>

              <div className="mt-auto flex items-end justify-between gap-5 pt-10">
                <cite className="text-xs leading-relaxed text-muted-foreground not-italic">
                  {review.attribution}
                </cite>

                <span className="font-mono text-[10px] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            These reviews relate to Barber Farr’s current workplace, Moli Barbers. Rating last
            checked {reviewSummary.lastVerified}.
          </p>

          <a className={textLinkClasses} href={googleReviewsUrl} {...externalLinkProps}>
            View all Google reviews
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className={`${sectionClasses} bg-surface`} id="location">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-[10vw]">
          <div>
            <p className={sectionIndexClasses}>05 / Find me</p>

            <h2 className={`${headingClasses} mt-7`}>
              Currently at
              <br />
              <em className="font-serif font-normal text-brand">Moli.</em>
            </h2>

            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
              Barber Farr is an independent personal brand, currently working from Moli Barbers in
              Tetbury.
            </p>

            <a className={`${textLinkClasses} mt-8`} href={directionsUrl} {...externalLinkProps}>
              Get directions
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] text-brand uppercase">
                Address
              </p>

              <address className="mt-6 text-xl leading-relaxed not-italic sm:text-2xl">
                {currentLocation.address.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] text-brand uppercase">
                Opening hours
              </p>

              <dl className="mt-6 border-t border-border">
                {currentLocation.hours.map((entry) => (
                  <div
                    className="flex items-center justify-between border-b border-border py-4 text-sm"
                    key={entry.days}
                  >
                    <dt className="text-muted-foreground">{entry.days}</dt>
                    <dd className="font-medium">{entry.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {currentLocation.bookingNotes.map((note, index) => (
            <div className="flex gap-4" key={note}>
              <span className="font-mono text-[10px] text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid items-end gap-14 bg-brand px-6 py-24 text-brand-contrast sm:px-10 lg:grid-cols-[0.5fr_1.6fr_0.7fr] lg:gap-[6vw] lg:px-[7vw] lg:py-40">
        <p className="self-start font-mono text-[11px] tracking-[0.14em] text-brand-contrast uppercase">
          06 / Book
        </p>

        <div>
          <p className="mb-4 text-brand-contrast">Ready when you are.</p>
          <h2 className={`${headingClasses} font-serif font-normal`}>Take a seat.</h2>

          <a
            className="mt-10 inline-flex min-h-13 w-max items-center gap-4 rounded-full bg-brand-contrast px-6 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-white"
            href={bookingUrl}
            {...externalLinkProps}
          >
            Book with Farr
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-3 lg:pb-3">
          <MapPin className="size-5" aria-hidden="true" />

          <span className="text-xs leading-relaxed text-brand-contrast">
            Currently cutting at
            <br />
            <strong className="font-semibold">Moli Barbers · Tetbury</strong>
          </span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
};

export default Home;
