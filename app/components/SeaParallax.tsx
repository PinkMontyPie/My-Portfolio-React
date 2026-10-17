"use client";
import { useEffect, useRef } from "react";

// How fast the sea moves compared with the page, and the height of one ripple tile in --waves
const SPEED = 0.35;
const TILE = 120;

const SeaParallax = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const shift = (window.scrollY * SPEED) % TILE;
      if (ref.current) ref.current.style.transform = `translate3d(0, ${-shift}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} aria-hidden className="sea" />;
};

export default SeaParallax;
