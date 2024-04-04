/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

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

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="font-line-Regular text-white">
      <div className="h-[90px] bg-slate-200">
        <div className="container h-full flex items-center justify-between">
          <img src="icon/logo.png" alt="logo" className="w-auto h-9" />
          <div className="lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="text-[#293144] text-2xl cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div className={`lg:flex gap-3 items-center ${showMenu ? "block" : "hidden"}`}>
            {nav.map((option, index) => (
              <Link href={option.url} key={index}>
                <div className="btn text-base text-[#293144] hover:bg-slate-300 bg-slate-200 border-none shadow-none rounded-md">
                  {option.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
