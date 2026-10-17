"use client";
import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import workslist from "../../public/workslist.json";
import { FilterButton, Work, WorkCard } from "../components/works/WorkCard";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const typedWorkslist = workslist as Work[];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".animate-class");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up observer when component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const filteredWorks = activeFilter
    ? typedWorkslist.filter((work) => work.type.includes(activeFilter))
    : typedWorkslist;

  return (
    <>
      <main className="font-line-bold text-[var(--ink)] min-h-screen">
        <div className="container animate-class pt-[110px] lg:pt-[140px] pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 sm:mb-4">
              <BackButton href="/#works" label="Home" />
            </div>
            <div className="flex flex-col items-center gap-10 mb-10">
              <div className="section-pill">Works</div>
              <h1 className="section-title">All my projects and experiences</h1>
            </div>

            <div className="no-scrollbar flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 lg:gap-3 overflow-x-auto sm:overflow-visible w-[calc(100%+2.5rem)] sm:w-auto -mx-5 sm:mx-0 px-5 sm:px-0 pb-1 mb-8 sm:mb-12">
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

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredWorks.map((work) => (
                <WorkCard key={work.slug} work={work} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
