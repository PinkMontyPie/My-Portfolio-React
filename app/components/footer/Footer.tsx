"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
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

  const Social = [
    {
      name: "GitHub",
      label: faGithub,
      url: "https://github.com/PinkMontyPie",
    },
    {
      name: "LinkedIn",
      label: faLinkedin,
      url: "https://www.linkedin.com/in/pinkmontypie/",
    },
  ];

  return (
    <footer className="container font-line-Regular pb-16">
      <div className="cozy-card flex flex-col gap-4 px-6 py-5 text-[.85rem] text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/icon/logo.png"
            alt="PortPai"
            width={100}
            height={36}
            className="w-auto h-6"
          />
          <p className="m-0">
            © {new Date().getFullYear()} Soravith (Pai) Puvekit. All rights
            reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5">
          {nav.map((option) => (
            <Link
              href={option.url}
              key={option.label}
              className="press inline-flex h-11 items-center rounded-full font-line-bold text-[var(--ink)] hover:text-[var(--accent-deep)]"
            >
              {option.label}
            </Link>
          ))}
          <span className="flex items-center gap-1">
            {Social.map((option) => (
              <Link
                href={option.url}
                key={option.name}
                target="_blank"
                aria-label={option.name}
                className="cozy-btn grid h-10 w-10 place-items-center !bg-[var(--cream)]"
              >
                <FontAwesomeIcon icon={option.label} />
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
