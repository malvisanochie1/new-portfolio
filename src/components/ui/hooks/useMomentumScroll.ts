"use client";
import { useEffect } from "react";

// Velocity + friction momentum scroll.
// Each wheel event adds to a velocity value; every rAF frame the velocity
// is multiplied by FRICTION (< 1), producing a clear fast-start → calm-stop
// deceleration that mimics real inertia.
// Skips touch-primary devices (phones/tablets) — they already have OS-level
// momentum. Runs on ALL pointer-fine devices (desktop, laptop, trackpad).
export function useMomentumScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Touch-primary devices have native OS momentum — skip JS layer entirely.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // ── Tuning knobs ─────────────────────────────────────────────────────
    // FRICTION : frame-over-frame velocity multiplier.
    //            0.92 → ~1.0 s to stop per notch — calm, premium deceleration.
    //            Lower  = shorter, snappier stop
    //            Higher = longer, dreamier drift
    const FRICTION = 0.92;

    // SPEED : wheel-delta → initial velocity ratio.
    //         0.28 → notch (deltaY ≈ 100) kicks off at 28 px/frame for a fast start.
    const SPEED = 0.28;

    // MAX_VELOCITY : px/frame cap so rapid trackpad flicks don't overshoot.
    const MAX_VELOCITY = 50;
    // ─────────────────────────────────────────────────────────────────────

    let velocity = 0;
    let currentY = window.scrollY; // float tracker for sub-pixel precision
    let rafId = 0;
    let running = false;

    const tick = () => {
      velocity *= FRICTION;

      // Stop when contribution per frame is imperceptible
      if (Math.abs(velocity) < 0.4) {
        velocity = 0;
        running = false;
        return;
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      currentY = Math.max(0, Math.min(currentY + velocity, maxScroll));
      // 'instant' bypasses CSS scroll-behavior: smooth so the JS momentum
      // is the sole driver — no double-smoothing jitter.
      window.scrollTo({ top: currentY, behavior: "instant" as ScrollBehavior });

      rafId = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Normalise deltaMode: pixels(0), lines(1), pages(2)
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 32;
      if (e.deltaMode === 2) delta *= window.innerHeight;

      velocity += delta * SPEED;
      // Clamp so rapid flicks don't send the page flying
      velocity = Math.max(-MAX_VELOCITY, Math.min(velocity, MAX_VELOCITY));

      if (!running) {
        running = true;
        currentY = window.scrollY; // sync float position before animating
        rafId = requestAnimationFrame(tick);
      }
    };

    // Re-sync float tracker whenever external scroll changes position
    // (keyboard, programmatic anchor links) so next wheel gesture
    // starts from the correct baseline.
    const onScroll = () => {
      if (!running) currentY = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
