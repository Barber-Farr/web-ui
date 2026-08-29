"use client";

import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextThemeIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("barber-farr-theme", nextThemeIsDark ? "dark" : "light");
  };

  return (
    <button
      className="grid size-11 cursor-pointer place-items-center rounded-full border border-border bg-surface/80 text-foreground transition duration-150 hover:rotate-6 hover:bg-surface focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
    >
      <Moon className="theme-icon--moon size-4.5" aria-hidden="true" />
      <Sun className="theme-icon--sun size-4.5" aria-hidden="true" />
    </button>
  );
};
