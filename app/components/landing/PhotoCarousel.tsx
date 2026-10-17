/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

const INTERVAL = 6000; // ms each photo stays before the next
const SWIPE = 40; // px of horizontal travel that counts as a swipe

/** Profile photos that crossfade into each other. All photos are stacked and loaded up front, so a change is a
 *  straight crossfade with no blank frame. Autoplay pauses while hovered or focused, off-screen, in a hidden tab,
 *  or with reduced motion; picking a photo (dot, swipe, arrow key) restarts the countdown. */
const PhotoCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const count = images.length;
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const paused = hovered || !visible || tabHidden || reduced;

  // Only play while on screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReduced(mq.matches);
    onVis();
    onMotion();
    document.addEventListener("visibilitychange", onVis);
    mq.addEventListener("change", onMotion);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      mq.removeEventListener("change", onMotion);
    };
  }, []);

  // One timer per photo: changing photo (by hand or by timer) starts a fresh countdown
  useEffect(() => {
    if (paused || count < 2) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, count, go]);

  const onPointerDown = (e: React.PointerEvent) => {
    swipeStart.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    // Mostly sideways: a swipe. Mostly up/down: the page is scrolling, leave it alone.
    if (Math.abs(dx) > SWIPE && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
  };

  return (
    <div
      ref={rootRef}
      className="flex flex-col items-center gap-3 w-full lg:w-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={`${alt}, photo ${index + 1} of ${count}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
        className="relative w-full lg:w-[340px] h-[320px] sm:h-[420px] overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--cream)] border-2 border-[var(--edge)] shadow-[0_4px_0_var(--ledge)] touch-pan-y select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === index ? `${alt} ${i + 1}` : ""}
            aria-hidden={i !== index}
            draggable={false}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-opacity motion-reduce:duration-300 ${
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
            }`}
          />
        ))}
      </div>

      {count > 1 && (
        <div className="flex items-center" role="tablist" aria-label="Choose a photo">
          {images.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show photo ${i + 1}`}
                onClick={() => go(i)}
                className="group grid h-6 place-items-center px-1"
              >
                <span
                  className={`relative block h-1.5 overflow-hidden rounded-full transition-[width,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    active ? "w-6 bg-[var(--track)]" : "w-1.5 bg-[var(--edge-soft)] group-hover:bg-[var(--edge)]"
                  }`}
                >
                  {/* The active pill fills up until the next photo. It restarts with the timer: on every change and
                      when play resumes after a pause, so the bar and the countdown always agree. */}
                  {active && (
                    <span
                      key={`${index}-${paused}`}
                      className="carousel-progress absolute inset-0 origin-left rounded-full bg-[var(--accent)]"
                      style={{
                        animationDuration: `${INTERVAL}ms`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PhotoCarousel;
