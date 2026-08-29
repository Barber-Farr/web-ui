"use client";

import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

type SectionNavigatorItem = {
  id: string;
  label: string;
  meta?: string;
};

type SectionNavigatorProps = {
  label: string;
  items: SectionNavigatorItem[];
};

export const SectionNavigator = ({ label, items }: SectionNavigatorProps) => {
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(items[0]?.id ?? "");

  const currentIndex = Math.max(
    items.findIndex((item) => item.id === currentId),
    0,
  );

  const currentItem = items[currentIndex];

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

        const firstVisibleSection = visibleSections[0];

        if (firstVisibleSection) {
          setCurrentId(firstVisibleSection.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [items]);

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

  const navigateToSection = (id: string) => {
    const section = document.getElementById(id);

    setOpen(false);
    setCurrentId(id);

    window.requestAnimationFrame(() => {
      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    });
  };

  if (!currentItem) {
    return null;
  }

  return (
    <>
      <div className="sticky top-0 z-30 border-y border-border bg-background/90 px-5 py-3 backdrop-blur-xl md:hidden">
        <button
          className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 text-left"
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Browse ${label.toLowerCase()}`}
          aria-expanded={open}
        >
          <span className="font-mono text-[10px] tracking-[0.12em] text-brand uppercase">
            {label}
          </span>

          <span className="truncate text-sm font-medium">{currentItem.label}</span>

          <span className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-muted-foreground">
              {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>

            <ChevronDown className="size-4" aria-hidden="true" />
          </span>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/55 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`Browse ${label.toLowerCase()}`}
        >
          <button
            className="absolute inset-0 cursor-default"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close section navigator"
          />

          <div className="relative z-10 max-h-[82svh] w-full overflow-y-auto rounded-t-3xl bg-background px-5 pt-5 pb-8 text-foreground shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.14em] text-brand uppercase">
                  Jump to
                </p>

                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.04em]">{label}</h2>
              </div>

              <button
                className="grid size-11 cursor-pointer place-items-center rounded-full border border-border"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close section navigator"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label={`${label} sections`}>
              {items.map((item, index) => {
                const selected = item.id === currentId;

                return (
                  <button
                    className={[
                      "grid w-full grid-cols-[36px_1fr_auto] items-center gap-3",
                      "border-b border-border py-5 text-left transition-colors",
                      selected ? "text-brand" : "text-foreground",
                    ].join(" ")}
                    type="button"
                    onClick={() => navigateToSection(item.id)}
                    key={item.id}
                    aria-current={selected ? "true" : undefined}
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-lg font-medium tracking-[-0.025em]">{item.label}</span>

                    {item.meta && (
                      <span className="text-xs text-muted-foreground">{item.meta}</span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
