"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const nav = [
  {
    label: "About",
    url: "/#about",
  },
  {
    label: "Experience",
    url: "/#experience",
  },
  {
    label: "Skills",
    url: "/#skills",
  },
  {
    label: "Works",
    url: "/#works",
  },
];

const sectionId = (url: string) => url.replace("/#", "");

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);

  useEffect(() => {
    // Becomes a pill after a short scroll, opens back out near the top. Two thresholds, so resting
    // right at the edge never makes it flicker between the two.
    const onScroll = () =>
      setScrolled((was) => (was ? window.scrollY > 8 : window.scrollY > 40));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The section in the middle of the screen is the active one
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((option) => {
      const el = document.getElementById(sectionId(option.url));
      if (el) observer.observe(el);
    });
    // Back above the first section: nothing is active
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  // One pill that slides between links. A CSS transition re-targets from wherever it is right now,
  // so scrolling quickly past several sections never makes it jump or restart.
  useLayoutEffect(() => {
    const measure = () => {
      const link = linksRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
      setIndicator(link ? { x: link.offsetLeft, w: link.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onScroll = () => setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return (
    <nav data-scrolled={scrolled} className="nav-wrap font-line-Regular">
      <div
        data-pill={scrolled || open}
        className="nav-shell relative mx-auto"
      >
        <div className="nav-bar flex h-16 items-center justify-between gap-2 rounded-full">
          {/* Below lg the links pill doesn't fit beside "Let's talk", so the logo stands on its own and the links go in the menu */}
          <Link
            href="/"
            className="cozy-tile press flex h-12 items-center px-3 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/icon/Portpai.png"
              alt="PortPai"
              width={1983}
              height={597}
              className="w-auto h-6 shrink-0"
              priority
            />
          </Link>

          <div
            ref={linksRef}
            className="cozy-card relative hidden lg:flex items-center !rounded-full p-1.5"
          >
            <Link
              href="/"
              aria-label="PortPai, back to top"
              className="press relative z-10 flex h-11 shrink-0 items-center pl-4 pr-3"
            >
              <Image
                src="/icon/Portpai.png"
                alt=""
                width={1983}
                height={597}
                className="w-auto h-6 shrink-0"
                priority
              />
            </Link>
            <span aria-hidden className="mx-1 h-6 w-[2px] rounded-full bg-[var(--edge-soft)]" />
            <span
              aria-hidden
              className="nav-indicator absolute left-0 top-1.5 bottom-1.5 rounded-full bg-[var(--accent)] shadow-[inset_0_-3px_0_var(--accent-deep)] transition-[transform,width,opacity] duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                width: indicator?.w ?? 0,
                transform: `translateX(${indicator?.x ?? 0}px)`,
                opacity: indicator ? 1 : 0,
              }}
            />
            {nav.map((option) => {
              const id = sectionId(option.url);
              const isActive = active === id;
              return (
                <Link
                  href={option.url}
                  key={option.label}
                  data-id={id}
                  aria-current={isActive ? "true" : undefined}
                  className={`press relative z-10 flex h-11 items-center rounded-full px-5 font-line-bold text-[.95rem] whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 justify-self-end">
            <Link
              href="/#contact"
              className="cozy-btn-primary hidden lg:inline-flex h-12 items-center gap-2 px-6 text-[.95rem] whitespace-nowrap"
            >
              Let&apos;s talk
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
              className="cozy-tile press lg:hidden grid h-12 w-12 place-items-center text-[var(--ink)]"
            >
              {/* Two lines that turn into an X: the icon morphs instead of swapping */}
              <span aria-hidden className="relative block h-3 w-[18px]">
                <span
                  className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-[top,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-[top,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    open ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          data-open={open}
          aria-hidden={!open}
          className="popover cozy-card lg:hidden absolute top-[calc(100%+12px)] left-0 right-0 p-3"
        >
          <ul className="grid grid-cols-2 gap-1">
            {nav.map((option) => {
              const isActive = active === sectionId(option.url);
              return (
                <li key={option.label}>
                  <Link
                    href={option.url}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    className={`press flex h-12 items-center rounded-2xl px-4 font-line-bold text-[1rem] ${
                      isActive ? "bg-[var(--accent)] text-white shadow-[inset_0_-3px_0_var(--accent-deep)]" : "text-[var(--ink)] hover:bg-[var(--cream)]"
                    }`}
                  >
                    {option.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/#contact"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="cozy-btn-primary mt-2 flex h-12 items-center justify-center gap-2 text-[.95rem]"
          >
            Let&apos;s talk <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
