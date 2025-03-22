"use client";
import React, { useEffect } from "react";
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

interface WorkPageProps {
  params: {
    slug: string;
  };
}

export default function WorkPage({ params }: WorkPageProps) {
  const typedWorkslist = workslist as Work[];
  const work = typedWorkslist.find((w) => w.slug === params.slug);

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

  if (!work) {
    return (
      <>
        <main className="font-line-bold text-black min-h-screen bg-white">
          <div className="container p-10 pt-[100px]">
            <div className="flex flex-col justify-center items-center gap-3 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-9.5a3.625 3.625 0 0 0-3.625 3.625a1 1 0 1 0 2 0a1.625 1.625 0 1 1 2.23 1.51c-.676.27-1.605.962-1.605 2.115V14a1 1 0 1 0 2 0c0-.244.05-.366.261-.47l.087-.04A3.626 3.626 0 0 0 12 6.5"
                  />
                </g>
              </svg>
              <h1 className="text-2xl font-bold mb-4">Work not found</h1>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                ← Back to Works
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="font-line-bold text-black h-auto bg-white">
        <div className="container mx-auto p-10 pt-[150px]">
          <div className="max-w-4xl mx-auto">
            <article className="overflow-hidden">
              <h1 className="text-4xl font-bold mb-4 animate-class">
                {work.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6 animate-class delay-100">
                {work.type.map((type, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="relative h-auto w-full animate-class delay-200">
                <Image
                  src={`/${work.image}`}
                  alt={work.title}
                  width={1000}
                  height={1000}
                  className="object-cover h-auto w-full rounded-xl"
                  priority
                />
              </div>

              <div className="py-10">
                <div className="flex flex-col gap-2 animate-class delay-300">
                  <h2 className="text-lg font-bold mb-2">Role</h2>
                  <div className="flex flex-wrap gap-2">
                    {work.role.map((role, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose max-w-none py-10 animate-class delay-400">
                  <p className="text-lg text-gray-700">
                    {work.maindescription}
                  </p>
                </div>

                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#3C99D4] text-white rounded-lg hover:bg-[#3C99D4]/80 hover:scale-[0.99] animate-class transition-all"
                  >
                    View Project
                  </a>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
