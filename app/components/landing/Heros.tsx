/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroPage = () => {
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

  return (
    <main className="font-line-bold text-[var(--ink)] relative">
      {/* <div className="pt-24 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-col h-auto md:px-16 custom-bg-image container rounded-3xl animate-class">
          <div className="lg:flex justify-center items-center hidden py-20 animate-class">
            <img
              src="/images/3d/Saly-18.png"
              alt="hero"
              className="w-[500px] h-auto"
            />
          </div>
          <div className="lg:flex justify-center items-center py-20 animate-class">
            <img
              src="/icon/Portpai.png"
              alt="hero"
              className="w-[600px] h-auto"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden py-20 animate-class">
            <img
              src="/images/3d/Saly-43.png"
              alt="hero"
              className="w-[300px] h-auto"
            />
          </div>
        </div>
      </div> */}

      <div className="h-auto w-full flex justify-center items-start lg:container">
        <div className="relative h-auto w-full px-5 lg:px-0 flex flex-col justify-center items-center gap-5 sm:gap-6 pt-32 pb-16 sm:pt-36 sm:pb-28 lg:pt-52 lg:pb-0 animate-class delay-1">
          <h1 className="relative text-center font-line-bold text-[40px] sm:text-[52px] lg:text-[72px] leading-[1.05] tracking-[-0.01em] [text-shadow:0_2px_24px_rgba(255,255,255,.6)] animate-class delay-3">
            Hi, I&apos;m Pai👋
            <br />
            <span className="text-[var(--accent)] [text-shadow:0_3px_0_var(--accent-deep)]">
              I design &amp; build
            </span>
            <br className="sm:hidden" />{" "}
            websites
            <br /> that look good.
          </h1>
          <p className="relative text-center font-line-Regular text-[15px] sm:text-base lg:text-lg leading-relaxed text-[var(--ink-muted)] max-w-[560px] px-2 sm:px-0 animate-class delay-3">
            Front-end developer and UX/UI designer in Bangkok, turning complex
            ideas into intuitive, fast and friendly interfaces.
          </p>
          <div className="relative grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 lg:gap-4 pt-2 w-full sm:w-auto max-w-[360px] sm:max-w-none animate-class delay-4">
            <a
              href="#works"
              className="cozy-btn-primary px-5 sm:px-8 py-3 text-center inline-block align-middle"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="cozy-btn px-5 sm:px-8 py-3 text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* <div className="container animate-class pb-10">
        <div className="w-full h-auto flex flex-row justify-between bg-[#dff1ff] rounded-[50px]">
          <div className="flex flex-col pl-16 py-16 justify-between items-start">
            <div className="flex flex-col gap-4 py-20">
              <h1 className="font-line-bold text-sm animate-class">
                UX/UI Design / Front-end devloper
              </h1>
              <div className="font-line-bold text-4xl animate-class">
                Coding for Metaverse
              </div>
            </div>
            <a
              href=""
              className="press px-8 py-4 bg-[#2d2d2d] font-line-Regular text-white rounded-full"
            >
              Visit Website
            </a>
          </div>
          <img
            src="images/752shots_so.png"
            alt=""
            className="rounded-br-[50px] w-[500px] h-auto animate-class"
          />
        </div>
      </div>

      <div className="container animate-class pb-10">
        <div className="w-full h-auto flex flex-row justify-between bg-[#FCEBEF] rounded-[50px]">
          <div className="flex flex-col pl-16 py-16 justify-between items-start">
            <div className="flex flex-col gap-4 py-20">
              <h1 className="font-line-bold text-sm animate-class">
                UX/UI Design / Front-end devloper
              </h1>
              <div className="font-line-bold text-4xl animate-class">
                Coding for Metaverse
              </div>
            </div>
            <a
              href=""
              className="press px-8 py-4 bg-[#2d2d2d] font-line-Regular text-white rounded-full"
            >
              Visit Website
            </a>
          </div>
          <img
            src="images/752shots_so.png"
            alt=""
            className="rounded-br-[50px] w-[500px] h-auto animate-class"
          />
        </div>
      </div> */}
    </main>
  );
};

export default HeroPage;
