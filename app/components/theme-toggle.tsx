"use client";

import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const ToggleTheme = () => {
    const root = document.documentElement;
    const nextThemeIsDark = !root.classList.contains("dark");

    root.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("barber-farr-theme", nextThemeIsDark ? "dark" : "light");
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={ToggleTheme}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
    >
      <Moon className="theme-icon theme-icon--moon" aria-hidden="true" />
      <Sun className="theme-icon theme-icon--sun" aria-hidden="true" />
    </button>
  );
};
