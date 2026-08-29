import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { bookingUrl, externalLinkProps } from "../data/links";
import { BrandLogo } from "./brand-logo";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = {
  page?: "home" | "cuts" | "services";
};

const navigationLinkClasses =
  "inline-flex min-h-10 items-center justify-center rounded-full border border-border/70 " +
  "bg-surface/90 px-4 text-sm font-medium text-foreground shadow-sm backdrop-blur-xl " +
  "transition hover:-translate-y-0.5 hover:border-brand/40 hover:bg-surface-elevated " +
  "aria-[current=page]:border-brand aria-[current=page]:bg-brand " +
  "aria-[current=page]:text-brand-contrast";

export const SiteHeader = ({ page = "home" }: SiteHeaderProps) => {
  const onHomePage = page === "home";

  return (
    <header className="absolute top-0 left-0 z-20 grid w-full grid-cols-[1fr_auto] items-center px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-16">
      <Link className="w-max" href={onHomePage ? "#top" : "/"} aria-label="Barber Farr home">
        <BrandLogo className="h-20 w-24 sm:h-24 sm:w-28" priority />
      </Link>

      <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
        <Link className={navigationLinkClasses} href={onHomePage ? "#about" : "/#about"}>
          About
        </Link>

        <Link
          className={navigationLinkClasses}
          href="/services"
          aria-current={page === "services" ? "page" : undefined}
        >
          Services
        </Link>

        <Link
          className={navigationLinkClasses}
          href="/cuts"
          aria-current={page === "cuts" ? "page" : undefined}
        >
          Cuts
        </Link>

        <Link className={navigationLinkClasses} href={onHomePage ? "#reviews" : "/#reviews"}>
          Reviews
        </Link>
      </nav>

      <div className="flex items-center justify-end gap-2.5">
        <ThemeToggle />
        <MobileNavigation page={page} />

        <a
          className="hidden min-h-11 items-center justify-center gap-3 rounded-full bg-brand px-5 text-sm font-semibold text-brand-contrast transition hover:-translate-y-0.5 hover:bg-brand-hover sm:inline-flex"
          href={bookingUrl}
          {...externalLinkProps}
        >
          Book a cut
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};
