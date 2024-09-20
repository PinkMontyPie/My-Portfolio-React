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
    <main className="font-line-bold text-black bg-slate-200">
      <div className="pt-24 px-8">
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
      </div>
    </main>
  );
};

export default HeroPage;
