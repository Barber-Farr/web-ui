import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, AtSign } from "lucide-react";
import Link from "next/link";

import { SectionNavigator } from "../components/section-navigator";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { cuts } from "../data/cuts";
import { bookingUrl, externalLinkProps, instagramUrl } from "../data/links";
import { serviceGroups } from "../data/services";

export const metadata: Metadata = {
  title: "Cuts & Styles | Barber Farr",
  description: "Explore popular haircuts and styles available from Barber Farr in Tetbury.",
};

const services = serviceGroups.flatMap((group) => group.services);

const getCutBookingUrl = (bookingService: string) => {
  const matchingService = services.find((service) => service.name === bookingService);

  return matchingService?.bookingUrl ?? bookingUrl;
};

const CutsPage = () => {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader page="cuts" />

      <section className="px-6 pt-36 pb-20 sm:px-10 lg:px-[7vw] lg:pt-44 lg:pb-28">
        <Link
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          href="/"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back home
        </Link>

        <p className="mt-16 flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <span className="h-px w-8 bg-brand" />
          Cuts & styles
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <h1 className="m-0 text-[clamp(4rem,8vw,8rem)] leading-[0.81] font-semibold tracking-[-0.075em]">
            Find your
            <br />
            <em className="font-serif font-normal text-brand">next cut.</em>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            A straightforward guide to some of the cuts available from Barber Farr. Explore the
            differences, then book the service that suits you.
          </p>
        </div>
      </section>

      <SectionNavigator
        label="Cuts"
        items={cuts.map((cut) => ({
          id: cut.id,
          label: cut.name,
          meta: cut.maintenance.replace("Usually refreshed ", ""),
        }))}
      />

      <nav
        className="sticky top-0 z-10 hidden gap-2 overflow-x-auto border-y border-border bg-background/90 px-6 py-4 backdrop-blur-xl sm:px-10 md:flex lg:px-[7vw]"
        aria-label="Jump to a haircut"
      >
        {cuts.map((cut, index) => (
          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-brand hover:text-foreground"
            href={`#${cut.id}`}
            key={cut.id}
          >
            <span className="font-mono text-[10px] text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>

            {cut.name}
          </a>
        ))}
      </nav>

      <section
        className="border-b border-border px-6 py-20 sm:px-10 lg:px-[7vw] lg:py-32"
        aria-label="Available cuts and styles"
      >
        <div className="mx-auto max-w-7xl space-y-28 lg:space-y-40">
          {cuts.map((cut, index) => (
            <article
              className="grid scroll-mt-28 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-[8vw]"
              id={cut.id}
              key={cut.id}
            >
              <div
                className={[
                  "relative min-h-[500px] overflow-hidden text-[#f5f2ec]",
                  "bg-[radial-gradient(circle_at_70%_25%,rgb(158_63_50_/_28%),transparent_30%),linear-gradient(145deg,#2c312d_0%,#151816_55%,#080908_100%)]",
                  index % 2 === 1 ? "lg:order-2" : "",
                ].join(" ")}
              >
                <span className="absolute top-7 right-7 font-mono text-xs opacity-40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-8 left-8">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-[#d66a59] uppercase">
                    Barber Farr
                  </span>

                  <p className="mt-3 font-serif text-3xl leading-tight">
                    Photography
                    <br />
                    coming soon.
                  </p>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-mono text-[11px] tracking-[0.14em] text-brand uppercase">
                  {String(index + 1).padStart(2, "0")} / Cut
                </p>

                <h2 className="mt-6 text-5xl leading-[0.9] font-semibold tracking-[-0.06em] sm:text-6xl">
                  {cut.name}
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {cut.summary}
                </p>

                <dl className="mt-10 grid gap-6 border-y border-border py-7 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      Maintenance
                    </dt>

                    <dd className="mt-2 text-sm">{cut.maintenance}</dd>
                  </div>

                  <div>
                    <dt className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      Book as
                    </dt>

                    <dd className="mt-2 text-sm">{cut.bookingService}</dd>
                  </div>
                </dl>

                <a
                  className="mt-10 inline-flex min-h-13 w-max items-center gap-4 rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast transition hover:-translate-y-0.5 hover:bg-brand-hover"
                  href={getCutBookingUrl(cut.bookingService)}
                  aria-label={`Book ${cut.bookingService}`}
                  {...externalLinkProps}
                >
                  Book this cut
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-12 bg-surface-elevated px-6 py-24 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-[7vw] lg:py-32">
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-brand uppercase">
            Still deciding?
          </p>

          <h2 className="mt-6 text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl">
            Start with a
            <br />
            conversation.
          </h2>
        </div>

        <a
          className="inline-flex w-max items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          href={instagramUrl}
          {...externalLinkProps}
        >
          <AtSign className="size-4" aria-hidden="true" />
          Message barberfarr
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
    </main>
  );
};

export default CutsPage;
