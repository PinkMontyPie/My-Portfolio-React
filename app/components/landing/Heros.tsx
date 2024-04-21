/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroPage = () => {

  return (
    <main className="font-line-bold text-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 flex-col h-screen md:px-16 custom-bg-image pt-20">
        <div className="lg:flex justify-center items-center hidden">
          <img src="/images/3d/Saly-18.png" alt="hero" className="w-[500px] h-auto" />
        </div>
        <div className="flex flex-col justify-between items-center gap-24">
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-col items-center text-center gap-5 px-8 pt-20">
              <img src="/icon/Portpai.png" alt="hero" className="w-[600px] h-auto" />
              {/* <h1 className="text-5xl xl:text-6xl">Hello there!!!</h1>
              <h1 className="text-xl xl:text-3xl">I&apos;m Soravith Puvekit</h1> */}
            </div>
            {/* <div className="w-full flex justify-center">
              <div className="w-auto py-3 px-5 bg-blue-500 text-white rounded-lg">
                <h1 className="text-base">Welcome to my portfolio</h1>
              </div>
            </div> */}
          </div>

          <div className="flex flex-grow items-end object-cover object-center">
            <img src="/images/yes.png" alt="hero" className="w-[600px] h-auto" />
          </div>

        </div>
        <div className="lg:flex justify-center items-center hidden">
          <img src="/images/3d/Saly-43.png" alt="hero" className="w-[300px] h-auto" />
        </div>
      </div>

    </main>
  );
};

export default HeroPage;

