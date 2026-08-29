import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SectionNavigator } from "../components/section-navigator";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { bookingUrl, externalLinkProps } from "../data/links";
import { serviceGroups } from "../data/services";

export const metadata: Metadata = {
  title: "Services & Prices | Barber Farr",
  description:
    "Explore haircut, fade, beard, maintenance, and age-specific services available from Barber Farr in Tetbury.",
  alternates: {
    canonical: "/services",
  },
};

const ServicesPage = () => {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader page="services" />

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
          Services & prices
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <h1 className="m-0 text-[clamp(4rem,8vw,8rem)] leading-[0.81] font-semibold tracking-[-0.075em]">
            In the
            <br />
            <em className="font-serif font-normal text-brand">chair.</em>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Straightforward services with time set aside to do the job properly. Choose your
            service, then book directly through Moli Barbers.
          </p>
        </div>
      </section>

      <SectionNavigator
        label="Services"
        items={serviceGroups.map((group) => ({
          id: group.id,
          label: group.title,
          meta: `${group.services.length} ${group.services.length === 1 ? "service" : "services"}`,
        }))}
      />

      <nav
        className="sticky top-0 z-10 hidden gap-2 overflow-x-auto border-y border-border bg-background/90 px-6 py-4 backdrop-blur-xl sm:px-10 md:flex lg:px-[7vw]"
        aria-label="Service categories"
      >
        {serviceGroups.map((group) => (
          <a
            className="shrink-0 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-brand hover:text-foreground"
            href={`#${group.id}`}
            key={group.id}
          >
            {group.title}
          </a>
        ))}
      </nav>

      <section
        className="border-b border-border px-6 py-20 sm:px-10 lg:px-[7vw] lg:py-32"
        aria-label="Barber Farr services"
      >
        <div className="mx-auto max-w-6xl space-y-24">
          {serviceGroups.map((group, groupIndex) => (
            <section className="scroll-mt-28" id={group.id} key={group.id}>
              <div className="grid gap-5 border-b border-border pb-7 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-brand uppercase">
                    {String(groupIndex + 1).padStart(2, "0")} / Category
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                    {group.title}
                  </h2>
                </div>

                <span className="font-mono text-xs text-muted-foreground">
                  {String(group.services.length).padStart(2, "0")} services
                </span>
              </div>

              <div>
                {group.services.map((service) => (
                  <article
                    className="grid gap-5 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-center lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-12"
                    key={service.name}
                  >
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                        {service.name}
                      </h3>

                      {service.note && (
                        <p className="mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground">
                          {service.note}
                        </p>
                      )}
                    </div>

                    <dl className="flex gap-10">
                      <div className="min-w-20">
                        <dt className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                          Time
                        </dt>

                        <dd className="mt-1 text-sm">{service.duration}</dd>
                      </div>

                      <div className="min-w-14">
                        <dt className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                          Price
                        </dt>

                        <dd className="mt-1 text-sm font-semibold">{service.price}</dd>
                      </div>
                    </dl>

                    <a
                      className="inline-flex min-h-11 w-max items-center gap-3 rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast transition hover:-translate-y-0.5 hover:bg-brand-hover sm:justify-self-end"
                      href={service.bookingUrl ?? bookingUrl}
                      aria-label={`Book ${service.name}`}
                      {...externalLinkProps}
                    >
                      Book
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="grid gap-12 bg-brand px-6 py-24 text-brand-contrast sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-[7vw] lg:py-32">
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase">Need some guidance?</p>

          <h2 className="mt-6 text-5xl leading-[0.9] font-semibold tracking-[-0.065em] sm:text-6xl">
            Not sure what
            <br />
            to book?
          </h2>
        </div>

        <Link
          className="inline-flex min-h-13 w-max items-center gap-4 rounded-full bg-brand-contrast px-6 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-white"
          href="/cuts"
        >
          Explore the cuts
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
};

export default ServicesPage;
