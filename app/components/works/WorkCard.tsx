import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface Work {
  image: string;
  imageFit?: "cover" | "contain";
  type: string[];
  title: string;
  description: string;
  maindescription: string;
  role: string[];
  url: string;
  slug: string;
}

export const FilterButton: React.FC<{
  type: string;
  onClick: (type: string | null) => void;
  active: boolean;
}> = ({ type, onClick, active }) => {
  return (
    <button
      className={`${active ? "cozy-btn-primary" : "cozy-btn text-[var(--ink-soft)]"} shrink-0 whitespace-nowrap px-4 py-2 mb-1 text-xs lg:text-sm`}
      onClick={() => onClick(type === "All" ? null : type)}
    >
      {type}
    </button>
  );
};

export const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
  return (
    <Link
      href={`/blog/${work.slug}`}
      className="group card-soft card-soft-hover overflow-hidden flex flex-col h-full"
    >
      <figure className="overflow-hidden m-2 mb-0 rounded-[18px] border-2 border-[var(--edge-soft)] bg-[var(--cream)]">
        <div
          className={`relative h-[180px] sm:h-[200px] w-full transition-transform duration-500 group-hover:scale-105 ${
            work.imageFit === "contain" ? "bg-[var(--cream)]" : ""
          }`}
        >
          <Image
            src={`/${work.image}`}
            alt={work.title}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            className={
              work.imageFit === "contain" ? "object-contain p-8" : "object-cover object-top"
            }
          />
        </div>
      </figure>
      <div className="flex flex-col gap-2 p-5 sm:p-6 flex-1">
        <div className="flex flex-wrap gap-2">
          {work.type.map((type, index) => (
            <span
              key={index}
              className="cozy-chip"
            >
              {type}
            </span>
          ))}
        </div>
        <h3 className="font-line-bold text-lg leading-snug pt-1">{work.title}</h3>
        <p className="font-line-Regular text-[var(--ink-muted)] text-sm leading-relaxed flex-1">
          {work.description}
        </p>
        <div className="flex items-center justify-between gap-3 pt-3 border-t-2 border-dashed border-[var(--edge-soft)]">
          <span className="flex flex-wrap gap-x-2 min-w-0 text-xs font-line-Regular text-[var(--ink-soft)]">
            {work.role.map((role, index) => (
              <span key={index}>
                {index > 0 && "· "}
                {role}
              </span>
            ))}
          </span>
          <span className="shrink-0 font-line-bold text-[var(--accent-deep)] transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};
