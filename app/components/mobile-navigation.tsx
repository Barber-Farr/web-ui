"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { bookingUrl, externalLinkProps } from "../data/links";

type MobileNavigationProps = {
  page?: "home" | "cuts" | "services";
};

export const MobileNavigation = ({ page = "home" }: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const onHomePage = page === "home";

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className="grid size-11 cursor-pointer place-items-center rounded-full border border-border bg-surface/80 text-foreground lg:hidden"
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-background text-foreground lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-5 py-6 sm:px-8">
            <Link
              className="inline-flex flex-col text-[13px] leading-[0.82] tracking-[0.15em]"
              href="/"
              onClick={closeMenu}
              aria-label="Barber Farr home"
            >
              <span>BARBER</span>
              <strong className="text-xl tracking-[0.04em]">FARR</strong>
            </Link>

            <button
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-border"
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex h-[calc(100%-180px)] flex-col justify-center px-6 sm:px-10"
            aria-label="Mobile navigation"
          >
            <Link
              className="border-b border-border py-5 text-4xl font-medium tracking-[-0.05em]"
              href={onHomePage ? "#about" : "/#about"}
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              className="border-b border-border py-5 text-4xl font-medium tracking-[-0.05em]"
              href="/services"
              onClick={closeMenu}
              aria-current={page === "services" ? "page" : undefined}
            >
              Services
            </Link>

            <Link
              className="border-b border-border py-5 text-4xl font-medium tracking-[-0.05em]"
              href="/cuts"
              onClick={closeMenu}
              aria-current={page === "cuts" ? "page" : undefined}
            >
              Cuts
            </Link>

            <Link
              className="border-b border-border py-5 text-4xl font-medium tracking-[-0.05em]"
              href={onHomePage ? "#reviews" : "/#reviews"}
              onClick={closeMenu}
            >
              Reviews
            </Link>

            <a
              className="mt-10 inline-flex min-h-13 w-max items-center gap-4 rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast"
              href={bookingUrl}
              {...externalLinkProps}
            >
              Book a cut
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
