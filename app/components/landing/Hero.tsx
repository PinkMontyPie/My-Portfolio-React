"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="font-line-Regular text-[#212A3E]">
      <div className="w-full h-[500px] flex justify-between bg-slate-100 rounded-lg">
        <div className="p-8">
          <div className="font-line-bold text-8xl">
            <h1>สวัสดี</h1>
            <h1>I'm Pai</h1>
          </div>
          <h1 className="text-lg font-line-Regular">A Front-End Developer</h1>
        </div>
        <img src="images/DSC07934.png" alt="me"/>
      </div>
    </main>
  );
};

export default Hero;
