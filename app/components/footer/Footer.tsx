/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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

  const Social = [
    {
      label: faGithub,
      url: "https://github.com/PinkMontyPie",
    },
    {
      label: faLinkedin,
      url: "https://www.linkedin.com/in/pinkmontypie/",
    },
    {
      label: faFacebook,
      url: "https://www.facebook.com/profile.php?id=100009782250843",
    },
  ];

  return (
    <footer>
      <div className="w-full h-auto bg-slate-200">
        <div className="container flex flex-col">
          <div className="flex justify-between items-center pt-10">
            <div>
              <div className="relative w-auto h-7 lg:h-9">
                <Image
                  src="/icon/logo.png"
                  alt="logo"
                  width={100}
                  height={36}
                  className="w-auto h-7 lg:h-9"
                  priority
                />
              </div>
              <div className="pt-1 lg:pt-2 flex gap-3">
                {Social.map((option, index) => (
                  <Link href={option.url} key={index}>
                    <h1 className="text-xl cursor-pointer">
                      <FontAwesomeIcon
                        icon={option.label}
                        style={{ color: "#293144" }}
                      />
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col md:flex-row gap-3">
                {nav.map((option, index) => (
                  <Link href={option.url} key={index}>
                    <h1 className="text-xs lg:text-base text-[#293144] cursor-pointer hover:underline">
                      {option.label}
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="pb-8">
            <h1 className="text-xs lg:text-base">
              © 2024 PortPai. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
