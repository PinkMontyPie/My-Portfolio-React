"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroPage = () => {

  return (
    <main className="font-line-bold text-black flex flex-col items-center h-screen">
      <div className="flex flex-col items-center gap-6 flex-grow">
        <div className="flex flex-col w-full gap-5 pt-36">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-6xl">Hello there!!!</h1>
            <h1 className="text-3xl">I&apos;m Soravith Puvekit</h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-auto py-3 px-5 bg-[#00c7fd] rounded-xl">
              <h1 className="text-base">Welcome to my portfolio</h1>

            </div>
          </div>
        </div>
        <div className="flex flex-grow items-end w-[450px] lg:w-[600px] h-auto object-cover object-center">
          <img src="images/yes.png" alt="hero" className="-z-0" />
        </div>
      </div>
    </main>
  );
};

export default HeroPage;

