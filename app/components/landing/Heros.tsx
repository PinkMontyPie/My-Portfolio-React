/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroPage = () => {
  return (
    <main className="font-line-bold text-black bg-slate-200 ">
      <div className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-col h-auto md:px-16 custom-bg-image container rounded-[50px]">
          <div className="lg:flex justify-center items-center hidden py-20">
            <img
              src="/images/3d/Saly-18.png"
              alt="hero"
              className="w-[500px] h-auto"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden py-20">
            <img
              src="/icon/Portpai.png"
              alt="hero"
              className="w-[600px] h-auto"
            />
          </div>
          <div className="lg:flex justify-center items-center hidden py-20">
            <img
              src="/images/3d/Saly-43.png"
              alt="hero"
              className="w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
