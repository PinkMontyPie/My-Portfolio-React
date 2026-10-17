"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import PhotoCarousel from "./PhotoCarousel";

const AboutPage = () => {
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

  const Highlights = [
    {
      title: "Product Engineer @ HDmall",
      detail: "Building healthcare products since 2024",
    },
    {
      title: "Founder, CoDev Community",
      detail: "Bringing students together to learn and build",
    },
    {
      title: "Speaker & Host",
      detail: "Global AI Bootcamp, Global Azure, JavaScript Bangkok",
    },
  ];

  const images: string[] = [
    "/images/IMG_0317.jpeg",
    "/images/1677465294777.jpg",
    "/images/img1.jpg",
  ];


  return (
    <main className="font-line-bold text-[var(--ink)] h-auto">
      <div className="container animate-class section">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="section-pill">About</div>
          <h2 className="section-title">Get to know me</h2>
          <div className="cozy-card p-4 sm:p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-6 sm:gap-12 lg:gap-16 w-full animate-class">
            <div className="flex flex-col justify-center items-start gap-5 sm:gap-6 px-1 sm:px-0 animate-class delay-2">
              <div className="flex flex-col gap-2">
                <h1 className="font-line-bold text-3xl lg:text-4xl">
                  Hi I&apos;m Pai👋
                </h1>
                <p className="font-line-Regular text-[var(--ink-soft)]">
                  Product Engineer · Front-end developer · UX/UI Designer
                  <span className="block pt-1">Bangkok, Thailand</span>
                </p>
              </div>
              <p className="font-line-Regular text-base leading-relaxed sm:leading-loose max-w-[560px]">
                I design and build user-focused digital experiences that
                balance aesthetics with performance, turning complex ideas into{" "}
                <strong>intuitive interfaces</strong> and{" "}
                <strong>clean, scalable design systems.</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
                {Highlights.map((item) => (
                  <div
                    key={item.title}
                    className="cozy-inset px-4 py-3 sm:p-4 flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-1"
                  >
                    <span className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-line-bold text-sm">{item.title}</span>
                      <span className="font-line-Regular text-xs text-[var(--ink-soft)] leading-relaxed">
                        {item.detail}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {Social.map((option, index) => (
                  <Link
                    href={option.url}
                    key={index}
                    target="_blank"
                    aria-label={option.name}
                    className="cozy-btn w-11 h-11 flex justify-center items-center text-lg"
                  >
                    <FontAwesomeIcon
                      icon={option.label}
                      style={{ color: "var(--ink)" }}
                    />
                  </Link>
                ))}
                <span className="font-line-Regular text-sm text-[var(--ink-soft)] sm:pl-2 w-full sm:w-auto">
                  Don&apos;t hesitate to reach out to me!
                </span>
              </div>
            </div>
            <div className="order-first lg:order-none flex justify-center">
              <PhotoCarousel images={images} alt="Photo of Pai" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
