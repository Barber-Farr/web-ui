import Link from "next/link";

import { bookingUrl, externalLinkProps, instagramUrl } from "../data/links";

export const SiteFooter = () => {
  return (
    <footer className="grid gap-9 bg-[#0c0d0c] px-6 py-13 text-[#f5f2ec] sm:grid-cols-2 sm:items-end lg:grid-cols-[1fr_auto_1fr] lg:px-[7vw]">
      <Link
        className="inline-flex w-max flex-col text-[13px] leading-[0.82] tracking-[0.15em] transition-colors hover:text-[#d66a59]"
        href="/"
        aria-label="Barber Farr home"
      >
        <span>BARBER</span>
        <strong className="text-xl tracking-[0.04em]">FARR</strong>
      </Link>

      <p className="hidden text-xs text-[#f5f2ec]/55 lg:block">Independent barber · Tetbury</p>

      <div className="flex gap-6 text-sm sm:justify-end">
        <a
          className="transition-colors hover:text-[#d66a59]"
          href={instagramUrl}
          {...externalLinkProps}
        >
          Instagram
        </a>

        <a
          className="transition-colors hover:text-[#d66a59]"
          href={bookingUrl}
          {...externalLinkProps}
        >
          Book now
        </a>
      </div>
    </footer>
  );
};
