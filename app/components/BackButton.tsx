import React from "react";
import Link from "next/link";

const BackButton: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="cozy-btn group inline-flex h-11 items-center gap-2 pl-1.5 pr-4 text-sm"
    >
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-full bg-[var(--accent)] text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </span>
      {label}
    </Link>
  );
};

export default BackButton;
