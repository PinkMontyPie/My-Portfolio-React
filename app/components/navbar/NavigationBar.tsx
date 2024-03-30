/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="font-line-Regular text-white">
      <div className="container h-[100px] bg-slate-200 flex items-center justify-between">
        <img src="icon/logo.png" alt="logo" className="w-auto h-9" />
        <div className="flex gap-3 items-center">
          {nav.map((option, index) => (
            <Link href={option.url} key={index}>
              <div className="btn text-base text-[#293144] hover:bg-slate-300 bg-slate-200 border-none shadow-none rounded-md">
                {option.label}
              </div>
            </Link>
          ))}
          <Link href="/" >
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="btn text-base text-[#293144] hover:bg-slate-300 bg-slate-200 border-none shadow-none rounded-md">
                Project<FontAwesomeIcon icon={faCaretDown} style={{color: "#00c7fd",}} /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-300 rounded-box w-52 mt-1 text-[#293144]">
                <li><a>Coding for Metaverse</a></li>
                <li><a>More</a></li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
