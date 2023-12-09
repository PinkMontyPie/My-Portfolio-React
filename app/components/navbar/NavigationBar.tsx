"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const NavigationBar = () => {
  const nav = [
    {
      label: "About",
      url: "/account/course-progress",
    },
    {
      label: "Skills",
      url: "/account/course-progress",
    },
    {
      label: "Works",
      url: "/account/course-progress",
    },
  ];

  return (
    <nav className="w-full h-[100px] flex items-center">
      <div className="w-full bg-slate-100 rounded-lg flex justify-between items-center py-3 px-8">
        <img src="icon/logo.png" alt="logo" className="w-auto h-9" />
        <div className="flex font-Cloud-Bold">
          {nav.map((option, index) => (
            <Link href={option.url} key={index}>
              <div className="flex justify-start items-center px-5 py-2 w-full gap-5 hover:bg-slate-200 hover:text-black transition-all rounded-md">
                <div className="text-base text-[#212A3E]">{option.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
