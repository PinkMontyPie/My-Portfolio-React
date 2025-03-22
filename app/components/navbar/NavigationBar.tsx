/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const nav = [
    {
      label: "About",
      url: "/#about",
    },
    {
      label: "Experience",
      url: "/#experience",
    },
    {
      label: "Skills",
      url: "/#skills",
    },
    {
      label: "Works",
      url: "/#works",
    },
    {
      label: "Contact",
      url: "/#contact",
    },
  ];

  return (
    <nav className="font-line-Regular text-white animate-class">
      <div className="lg:bg-opacity-60 backdrop-blur-lg h-[80px] lg:h-[90px] bg-[#DFF0FE] lg:bg-slate-100 z-0 ">
        <div className="container h-full flex items-center justify-between">
          <Link href="/">
            <div className="relative w-auto h-9">
              <Image
                src="/icon/Portpai.png"
                alt="logo"
                width={500}
                height={500}
                className="w-auto h-9"
                priority
              />
            </div>
          </Link>
          <div className="drawer-content lg:hidden">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button">
              <FontAwesomeIcon
                icon={faBars}
                className="text-[#2d2d2d] text-2xl cursor-pointer drawer-button"
              />
            </label>
          </div>
          <div className="hidden lg:flex gap-3 items-center">
            {nav.map((option, index) => (
              <Link href={option.url} key={index}>
                <div className="btn text-base text-[#2d2d2d] hover:bg-white hover:bg-opacity-30 bg-transparent border-none shadow-none rounded-full">
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
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-8 w-full min-h-full bg-slate-200 text-[#2d2d2d] font-line-bold">
            <div className="flex justify-between items-center">
              <div className="relative w-auto h-9">
                <Image
                  src="/icon/logo.png"
                  alt="logo"
                  width={100}
                  height={36}
                  className="w-auto h-9"
                  priority
                />
              </div>
              <div>
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-[#2d2d2d] text-2xl cursor-pointer drawer-button"
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
