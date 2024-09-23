/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ExperiencePage = () => {
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
    <main className="font-line-bold text-black bg-slate-100 relative">
      <div className="container p-10 pt-[150px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d] rounded-full px-5 py-2 font-line-bold text-[20px] animate-class delay-1">
            My Experience 🪅
          </div>
          <div className="font-line-bold text-[30px] lg:text-[40px] animate-class delay-2 text-center">
            These are Experinces 💻
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row justify-start items-center bg-white rounded-3xl p-8 gap-8 animate-class delay-3">
              <div className="bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] rounded-xl p-5">
                <img
                  src="images/trans-jib-hdmall-square.svg"
                  alt=""
                  width={100}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-line-bold text-xl">HDmall</h1>
                <h2 className="font-line-Regular">Front-end Developer</h2>
                <ul className="list-disc pl-5 leading-relaxed">
                  <li>
                    Developed and designed a B2B website for HDmall, resulting
                    in an increase of over 100 customers in the past 3 months.
                  </li>
                  <li>
                    Created an internal tool to streamline company operations,
                    boosting marketing team productivity by 50%.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center bg-white rounded-3xl p-8 gap-8 animate-class delay-4">
              <div className="bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] rounded-xl p-5">
                <img src="icon/CoSI_Icon_Dark.png" alt="" width={100} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-line-bold text-xl">
                  Center of Specialty Innovation (CoSI)
                </h1>
                <h2 className="font-line-Regular">
                  Senior Front-end Developer
                </h2>
                <ul className="list-disc pl-5 leading-relaxed">
                  <li>
                    Led website development and UI/UX design using modern
                    front-end frameworks.
                  </li>
                  <li>
                    Managed version control and implemented CI/CD pipelines to
                    streamline the development workflow and ensure timely
                    feature delivery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
