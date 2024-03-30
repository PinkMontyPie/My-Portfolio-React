/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const nav = [
    {
      label: "Home",
      url: "/account/profile",
    },
    {
      label: "About",
      url: "/account/course-progress",
    },
    {
      label: "skills",
      url: "/account/course-progress",
    },
    {
      label: "Work",
      url: "/account/course-progress",
    },
    {
      label: "Contact",
      url: "/account/course-progress",
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
      <div className="container w-full h-auto bg-slate-200 flex flex-col">
        <div className="flex justify-between items-center pt-10">
          <div>
            <img src="icon/logo.png" alt="logo" className="w-auto h-9" />
            <h1>one plus one = two</h1>
            <div className="pt-3 flex gap-3">
              {Social.map((option, index) => (
                <Link href={option.url} key={index}>
                  <h1 className="text-xl cursor-pointer">
                    <FontAwesomeIcon icon={option.label} style={{ color: "#293144", }} />
                  </h1>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-3">
              {nav.map((option, index) => (
                <Link href={option.url} key={index}>
                  <h1 className="text-base text-[#293144] cursor-pointer hover:underline">{option.label}</h1>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="pb-8">
          <h1>© 2024 PortPai. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
