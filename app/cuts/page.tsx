import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, AtSign } from "lucide-react";
import Image from "next/image";
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
  alternates: {
    canonical: "/cuts",
  },
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
                  "relative min-h-[500px] overflow-hidden rounded-3xl bg-surface-elevated",
                  "sm:min-h-[620px] lg:min-h-[680px]",
                  index % 2 === 1 ? "lg:order-2" : "",
                ].join(" ")}
              >
                {cut.image && cut.imageAlt ? (
                  <Image
                    src={cut.image}
                    alt={cut.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_25%,rgb(214_106_89_/_25%),transparent_30%),linear-gradient(145deg,#2c312d_0%,#151816_55%,#080908_100%)] p-10 text-[#f5f2ec]">
                    <div className="max-w-md text-center">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-[#f08a78] uppercase">
                        Start somewhere new
                      </span>

                      <p className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                        No fixed template.
                      </p>

                      <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/65">
                        A restyle starts with a conversation about your hair, routine and the
                        direction you want to take it.
                      </p>
                    </div>
                  </div>
                )}

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
                  aria-hidden="true"
                />

                <span className="absolute top-6 right-6 rounded-full border border-white/15 bg-black/50 px-3 py-2 font-mono text-xs text-white/80 shadow-lg backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/55 px-5 py-4 text-white shadow-xl backdrop-blur-md">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] text-[#f08a78] uppercase">
                      Barber Farr
                    </span>

                    <p className="mt-1 font-serif text-xl">{cut.name}</p>
                  </div>

                  <ArrowUpRight className="size-5 shrink-0 text-white/75" aria-hidden="true" />
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
                  {...externalLinkProps}
                >
                  Book {cut.name}
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
