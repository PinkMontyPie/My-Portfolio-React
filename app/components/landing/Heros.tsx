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
    <main className="font-line-bold text-black bg-[#DFF0FE] lg:bg-slate-100 relative">
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

      <div className="h-auto w-full flex justify-center items-start lg:container pt-[80px] lg:pt-[100px]">
        <div className="bg-gradient-to-b from-[#dff1ff] to-[#FCEBEF] lg:rounded-[50px] h-auto w-full p-5 lg:p-0 flex flex-col justify-center items-center gap-8 lg:gap-3 py-20 lg:py-60 animate-class delay-1">
          <div className="bg-[#ffffff] rounded-full px-5 py-2 font-line-bold text-[20px] animate-class delay-2">
            Hi I&apos;m Pai👋
          </div>
          <h1 className="text-center font-line-bold text-2xl lg:text-6xl leading-normal lg:leading-loose animate-class delay-3">
            I design and build website <br /> that look good
          </h1>
          <div className="flex flex-row gap-5 lg:pt-8 animate-class delay-4">
            <a
              href="#works"
              className="px-8 py-3 bg-[#2d2d2d] font-line-Regular text-white rounded-full transition-all hover:scale-95 inline-block align-middle"
            >
              My work
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-[#2d2d2d] border-2 font-line-Regular text-[#2d2d2d] rounded-full hover:bg-[#2d2d2d] hover:scale-95 hover:text-white transition-all"
            >
              About me
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
              className="px-8 py-4 bg-[#2d2d2d] font-line-Regular text-white rounded-full transition-all hover:scale-95 animate-class"
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
              className="px-8 py-4 bg-[#2d2d2d] font-line-Regular text-white rounded-full transition-all hover:scale-95 animate-class"
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
