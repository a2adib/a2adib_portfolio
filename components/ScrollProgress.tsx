"use client";

import { useEffect, useState } from "react";

/** Hairline bar across the top of the viewport tracking scroll depth. */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once so a mid-page reload shows the right width.
    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[2px] bg-accent transition-[width] duration-[120ms] ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
}
