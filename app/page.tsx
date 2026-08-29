import { ArrowUpRight, AtSign, MapPin } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { cuts } from "./data/cuts";
import { bookingUrl, externalLinkProps, googleReviewsUrl, instagramUrl } from "./data/links";
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

const Home = () => {
  const featuredCuts = cuts.slice(0, 3);

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
            Sharp, considered cuts by Barber Farr—currently working from Moli Barbers in the heart
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

        <div
          className="relative min-h-[560px] overflow-hidden bg-[radial-gradient(circle_at_68%_25%,rgb(214_106_89_/_28%),transparent_31%),linear-gradient(145deg,#2c312d_0%,#151816_55%,#080908_100%)] text-[#f5f2ec] lg:min-h-[720px]"
          aria-label="Barber Farr photography coming soon"
        >
          <span className="absolute top-28 right-[9%] font-mono text-xs text-[#f5f2ec]/30">01</span>

          <div className="absolute bottom-[18%] left-[10%] flex flex-col gap-3">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#d66a59] uppercase">
              Barber Farr
            </span>

            <strong className="font-serif text-[clamp(2.5rem,4vw,4.25rem)] leading-[0.95] font-normal">
              Photography
              <br />
              coming soon.
            </strong>
          </div>

          <div className="absolute right-[7%] bottom-[5%] flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-5 py-3 backdrop-blur-xl">
            <MapPin className="size-4.5 text-[#d66a59]" aria-hidden="true" />

            <span className="text-[11px] leading-snug text-[#f5f2ec]/60">
              Currently at
              <br />
              <strong className="font-medium text-[#f5f2ec]">Moli Barbers, Tetbury</strong>
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
            Barber Farr is an independent barber based in Tetbury, focused on considered cuts that
            look sharp on day one and grow out well.
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
                "group relative min-h-[420px] overflow-hidden bg-[#1c201d] text-[#f5f2ec]",
                "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_25%,rgb(158_63_50_/_28%),transparent_30%)]",
                index === 0 ? "sm:row-span-2 sm:min-h-[856px]" : "",
                index === 1 ? "bg-brand" : "",
                index === 2 ? "bg-[#343a34]" : "",
              ].join(" ")}
              href={`/cuts#${cut.id}`}
              key={cut.id}
            >
              <span className="absolute top-6 right-6 z-10 font-mono text-xs opacity-50">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute bottom-7 left-7 z-10">
                <p className="font-serif text-3xl leading-none">{cut.name}</p>
                <small className="mt-3 block text-xs text-[#f5f2ec]/60">{cut.maintenance}</small>

                <ArrowUpRight
                  className="mt-5 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className={`${sectionClasses} grid items-center gap-16 bg-surface-elevated lg:grid-cols-2 lg:gap-[10vw]`}
        id="reviews"
      >
        <div>
          <p className={sectionIndexClasses}>04 / Word of mouth</p>

          <h2 className={`${headingClasses} mt-7`}>
            Proof is in
            <br />
            <em className="font-serif font-normal text-brand">the people.</em>
          </h2>
        </div>

        <div className="border-t border-border pt-14 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-[7vw]">
          <div className="font-serif text-8xl leading-[0.5] text-brand" aria-hidden="true">
            “
          </div>

          <p className="my-8 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
            Selected reviews from clients at Moli Barbers will appear here once approved.
          </p>

          <span className="mb-10 block text-sm text-muted-foreground">
            Reviews will be attributed to the current shop.
          </span>

          <a className={textLinkClasses} href={googleReviewsUrl} {...externalLinkProps}>
            View Moli Barbers on Google
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="grid items-end gap-14 bg-brand px-6 py-24 text-brand-contrast sm:px-10 lg:grid-cols-[0.5fr_1.6fr_0.7fr] lg:gap-[6vw] lg:px-[7vw] lg:py-40">
        <p className="self-start font-mono text-[11px] tracking-[0.14em] uppercase opacity-65">
          05 / Book
        </p>

        <div>
          <p className="mb-4 opacity-70">Ready when you are.</p>
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

          <span className="text-xs leading-relaxed opacity-75">
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
