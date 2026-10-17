"use client";
import React, { useState } from "react";
import Link from "next/link";
import workslist from "../../../public/workslist.json";
import { FilterButton, Work, WorkCard } from "../works/WorkCard";

const WorksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const typedWorkslist = workslist as Work[];

  const filteredWorks = activeFilter
    ? typedWorkslist.filter((work) => work.type.includes(activeFilter))
    : typedWorkslist;

  return (
    <main className="font-line-bold text-[var(--ink)] h-auto section">
      <div className="container animate-class">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="section-pill">Works</div>
          <h2 className="section-title">Things I&apos;ve built and done</h2>
          <p className="section-subtitle">
            Products, designs, workshops and community events from the past few
            years.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center w-full">
            <div className="no-scrollbar flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 lg:gap-3 overflow-x-auto sm:overflow-visible w-[calc(100%+2.5rem)] sm:w-auto -mx-5 sm:mx-0 px-5 sm:px-0 pb-1 mb-2 sm:mb-4">
              <FilterButton
                type="All"
                onClick={(type) => setActiveFilter(type)}
                active={!activeFilter}
              />
              {Array.from(
                new Set(typedWorkslist.flatMap((work) => work.type))
              ).map((type) => (
                <FilterButton
                  key={type}
                  type={type}
                  onClick={setActiveFilter}
                  active={activeFilter === type}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
              {filteredWorks.slice(0, 6).map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>

            <div className="flex justify-center mt-4 sm:mt-8">
              <Link
                href="/blog"
                className="cozy-btn-primary px-8 py-3"
              >
                See all my work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
