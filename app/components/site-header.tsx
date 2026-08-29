import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { bookingUrl, externalLinkProps } from "../data/links";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = {
  page?: "home" | "cuts" | "services";
};

const wordmarkClasses = "inline-flex w-max flex-col text-[13px] leading-[0.82] tracking-[0.15em]";

const navigationLinkClasses =
  "relative text-sm text-muted-foreground transition-colors after:absolute " +
  "after:-bottom-2 after:right-0 after:left-0 after:h-px after:origin-right " +
  "after:scale-x-0 after:bg-brand after:transition-transform hover:text-foreground " +
  "hover:after:origin-left hover:after:scale-x-100";

export const SiteHeader = ({ page = "home" }: SiteHeaderProps) => {
  const onHomePage = page === "home";

  return (
    <header className="absolute top-0 left-0 z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center px-5 py-6 sm:px-8 lg:px-16">
      <Link
        className={wordmarkClasses}
        href={onHomePage ? "#top" : "/"}
        aria-label="Barber Farr home"
      >
        <span>BARBER</span>
        <strong className="text-xl tracking-[0.04em]">FARR</strong>
      </Link>

      <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
        <Link className={navigationLinkClasses} href={onHomePage ? "#about" : "/#about"}>
          About
        </Link>

        <Link
          className={navigationLinkClasses}
          href={"/services"}
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
