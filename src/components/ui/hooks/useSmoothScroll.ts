import { animate } from "framer-motion";
import { useCallback } from "react";

// Lightweight Framer Motion smooth scroll.
// Uses the imperative animate() to drive window.scrollTo with a calm
// expo-out curve — zero virtual DOM overhead, no layout changes needed.
const NAVBAR_HEIGHT = 80; // sticky nav (h-16 = 64px) + breathing room

export function useSmoothScroll() {
  const scrollTo = useCallback((href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    const offsetTop =
      (target as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT;

    // Update hash without triggering a native jump scroll
    history.pushState(null, "", href);

    animate(window.scrollY, offsetTop, {
      duration: 0.85,
      // Expo-out curve: quick start → calm, buttery deceleration
      ease: [0.32, 0.72, 0, 1],
      onUpdate: (v) => window.scrollTo(0, v),
    });
  }, []);

  return scrollTo;
}
