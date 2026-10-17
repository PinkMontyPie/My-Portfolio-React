"use client";
import React, { useEffect } from "react";
import BackButton from "../../components/BackButton";
import Image from "next/image";
import workslist from "../../../public/workslist.json";

interface Work {
  image: string;
  imageFit?: "cover" | "contain";
  type: string[];
  title: string;
  description: string;
  maindescription: string;
  gallery?: { src: string; caption: string; w: number; h: number; tall?: boolean; group?: string }[];
  role: string[];
  url: string;
  slug: string;
}

interface WorkDetailProps {
  slug: string;
}

export default function WorkDetail({ slug }: WorkDetailProps) {
  const typedWorkslist = workslist as Work[];
  const work = typedWorkslist.find((w) => w.slug === slug);

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
        <main className="font-line-bold text-[var(--ink)] min-h-screen">
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
              <BackButton href="/blog" label="All works" />
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="font-line-bold text-[var(--ink)] h-auto">
        <div className="container pt-[110px] lg:pt-[140px] pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-5">
              <BackButton href="/blog" label="All works" />
            </div>
            <article className="card-soft overflow-hidden p-6 sm:p-10 active:![scale:1]">
              <h1 className="text-3xl lg:text-4xl font-line-bold leading-tight mb-4 animate-class">
                {work.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6 animate-class delay-100">
                {work.type.map((type, i) => (
                  <span
                    key={i}
                    className="cozy-chip text-sm px-3"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div
                className={`relative h-auto w-full animate-class delay-200 ${
                  work.imageFit === "contain"
                    ? "cozy-inset flex justify-center py-10"
                    : ""
                }`}
              >
                <Image
                  src={`/${work.image}`}
                  alt={work.title}
                  width={1000}
                  height={1000}
                  className={
                    work.imageFit === "contain"
                      ? "h-[180px] w-auto rounded-[40px]"
                      : "object-cover h-auto w-full rounded-2xl"
                  }
                  priority
                />
              </div>

              <div className="pt-8">
                <div className="flex flex-col gap-2 animate-class delay-300">
                  <h2 className="text-lg font-bold mb-2">Role</h2>
                  <div className="flex flex-wrap gap-2">
                    {work.role.map((role, i) => (
                      <span
                        key={i}
                        className="cozy-chip text-sm px-3"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose max-w-none py-10 animate-class delay-400">
                  <p className="font-line-Regular text-base lg:text-lg leading-loose text-[var(--ink-muted)] whitespace-pre-line">
                    {work.maindescription}
                  </p>
                </div>

                {work.gallery && work.gallery.length > 0 && (
                  <section className="pb-10 flex flex-col gap-10">
                    <h2 className="text-lg font-bold -mb-6">Screenshots</h2>

                    {work.gallery.some((shot) => shot.tall) && (
                      <div className="flex flex-col gap-3">
                        <h3 className="font-line-bold text-[var(--ink-soft)]">On iPhone</h3>
                        <div className="grid grid-cols-3 gap-3 sm:gap-6">
                          {work.gallery
                            .filter((shot) => shot.tall)
                            .map((shot) => (
                              <figure key={shot.src} className="flex flex-col gap-2">
                                <a href={`/${shot.src}`} target="_blank" rel="noopener noreferrer" className="press block">
                                  <Image
                                    src={`/${shot.src}`}
                                    alt={`${work.title}: ${shot.caption}`}
                                    width={shot.w}
                                    height={shot.h}
                                    className="w-full h-auto rounded-[18px] sm:rounded-[28px] border-2 border-[var(--edge)] shadow-[0_4px_0_var(--ledge)]"
                                  />
                                </a>
                                <figcaption className="font-line-Regular text-xs sm:text-sm text-[var(--ink-soft)] text-center">
                                  {shot.caption}
                                </figcaption>
                              </figure>
                            ))}
                        </div>
                      </div>
                    )}

                    {Array.from(
                      new Set(work.gallery.filter((shot) => !shot.tall).map((shot) => shot.group ?? ""))
                    ).map((group) => {
                      const shots = work.gallery!.filter((shot) => !shot.tall && (shot.group ?? "") === group);
                      return (
                        <div key={group} className="flex flex-col gap-3">
                          {group && <h3 className="font-line-bold text-[var(--ink-soft)]">{group}</h3>}
                          <div className={`grid grid-cols-1 gap-4 sm:gap-6 ${shots.length > 1 ? "sm:grid-cols-2" : ""}`}>
                            {shots.map((shot) => (
                              <figure key={shot.src} className="flex flex-col gap-2">
                                <a href={`/${shot.src}`} target="_blank" rel="noopener noreferrer" className="press block">
                                  <Image
                                    src={`/${shot.src}`}
                                    alt={`${work.title}: ${shot.caption}`}
                                    width={shot.w}
                                    height={shot.h}
                                    className="w-full h-auto rounded-2xl border-2 border-[var(--edge)] shadow-[0_4px_0_var(--ledge)]"
                                  />
                                </a>
                                <figcaption className="font-line-Regular text-sm text-[var(--ink-soft)] leading-relaxed">
                                  {shot.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </section>
                )}

                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cozy-btn-primary inline-flex items-center px-8 py-3"
                  >
                    View project ↗
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
