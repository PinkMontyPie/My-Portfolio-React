/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import workslist from "../../../public/workslist.json";

interface Work {
  image: string;
  type: string[];
  title: string;
  description: string;
  maindescription: string;
  role: string[];
  url: string;
  slug: string;
}

const FilterButton: React.FC<{
  type: string;
  onClick: (type: string | null) => void;
  active: boolean;
}> = ({ type, onClick, active }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-xs lg:text-base focus:scale-95 transition-all ${
        active
          ? "bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d]"
          : "bg-white text-gray-700"
      }`}
      onClick={() => onClick(type === "All" ? null : type)}
    >
      {type}
    </button>
  );
};

const WorksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const typedWorkslist = workslist as Work[];

  const filteredWorks = activeFilter
    ? typedWorkslist.filter((work) => work.type.includes(activeFilter))
    : typedWorkslist;

  return (
    <main className="font-line-bold text-black h-auto bg-slate-100 pt-[150px]">
      <div className="container animate-class">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d] rounded-full px-5 py-2 font-line-bold text-[20px] animate-class delay-300">
            My Works 💡
          </div>
          <div className="font-line-bold text-[30px] lg:text-[40px] text-center">
            These are my work
            <br /> that I obtained in the past three years.
          </div>
          <div className="flex flex-col gap-5 justify-center items-center pb-20">
            <div className="flex flex-wrap gap-4 my-4 ">
              <FilterButton
                type="All"
                onClick={(type) => setActiveFilter(type)}
                active={!activeFilter}
              />
              {Array.from(new Set(typedWorkslist.flatMap((work) => work.type))).map(
                (type) => (
                  <FilterButton
                    key={type}
                    type={type}
                    onClick={setActiveFilter}
                    active={activeFilter === type}
                  />
                )
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              {filteredWorks.map((work) => (
                <Link
                  key={work.slug}
                  href={`/blog/${work.slug}`}
                  className="card w-auto h-full bg-white cursor-pointer hover:scale-105 transition-all"
                >
                  <figure>
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={`/${work.image}`}
                        alt={work.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </figure>
                  <div className="card-body">
                    <div className="flex card-actions">
                      {work.type.map((type, index) => (
                        <div
                          key={index}
                          className="badge rounded-md bg-gray-200 border-none text-[#293144]"
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                    <h2 className="card-title">{work.title}</h2>
                    <p className="text-gray-600 py-3">{work.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.role.map((role, index) => (
                        <span key={index} className="text-sm text-gray-500">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link
                href="/blog"
                className="px-8 py-3 bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d] rounded-full font-line-bold text-lg hover:scale-105 transition-all"
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
