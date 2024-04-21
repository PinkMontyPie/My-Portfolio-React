/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const nav = [
    {
      label: "About",
      url: "#about",
    },
    {
      label: "Skills",
      url: "#skills",
    },
    {
      label: "Works",
      url: "#works",
    },
    {
      label: "Contact",
      url: "#contact",
    },
  ];


  return (
    <nav className="font-line-Regular text-white">
      <div className="bg-opacity-60 backdrop-blur-lg h-[80px] lg:h-[90px] bg-slate-200 z-0 ">
        <div className="container h-full flex items-center justify-between">
          <img src="icon/logo.png" alt="logo" className="w-auto h-9" />
          <div className="drawer-content lg:hidden">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#293144] text-2xl cursor-pointer drawer-button"
              /></label>
          </div>
          <div className="hidden lg:flex gap-3 items-center">
            {nav.map((option, index) => (
              <Link href={option.url} key={index}>
                <div className="btn text-base text-[#293144] hover:bg-white hover:bg-opacity-30 bg-transparent border-none shadow-none rounded-md">
                  {option.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-8 w-full min-h-full bg-slate-200 text-[#293144] font-line-bold">
            <div className="flex justify-between items-center">
              <img src="icon/logo.png" alt="logo" className="w-auto h-9" />
              <div>
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[#293144] text-2xl cursor-pointer drawer-button"
                  />
                </label>
              </div>
            </div>
            <div className="divider"></div>
            <div className="">
              {nav.map((option, index) => (
                <li key={index}>
                  <a href={option.url} className="py-3 px-5 text-xl">
                    <label htmlFor="my-drawer-4" className="drawer-button">
                      {option.label}
                    </label>
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
