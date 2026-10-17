"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ContactPage = () => {

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

  const Social = [
    {
      label: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/pinkmontypie/",
    },
    {
      label: "GitHub",
      icon: faGithub,
      url: "https://github.com/PinkMontyPie",
    },
  ];

  return ( 
    <main className="font-line-bold text-[var(--ink)] h-auto section pb-16 sm:pb-24 lg:pb-24">
      <div className="container">
        <div className="cozy-card relative overflow-hidden sm:!rounded-[36px] px-5 sm:px-6 py-12 sm:py-16 lg:py-20 flex justify-center items-center animate-class">
          <div className="hidden lg:block absolute left-4 xl:left-10 bottom-0 w-[260px] h-[260px]">
            <Image
              src="/images/3d/Saly-1.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden lg:block absolute right-4 xl:right-10 bottom-0 w-[260px] h-[260px]">
            <Image
              src="/images/3d/Saly-35.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="relative flex flex-col items-center gap-6 max-w-[520px] text-center">
            <div className="section-pill mb-0 lg:mb-0 -mb-1">Contact</div>
            <h2 className="section-title">Let&apos;s build something together</h2>
            <p className="font-line-Regular text-[var(--ink-muted)] -mt-2">
              Always open to collaboration, new ideas and opportunities to grow.
              The fastest way to reach me is LinkedIn.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Social.map((option, index) => (
                <Link
                  href={option.url}
                  key={option.label}
                  target="_blank"
                  className={`${index === 0 ? "cozy-btn-primary" : "cozy-btn !bg-[var(--cream)]"} flex gap-2 items-center px-6 py-3`}
                >
                  <FontAwesomeIcon icon={option.icon} />
                  {option.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-line-Regular text-sm text-[var(--ink-soft)] pt-2">
              <span className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                Bangkok, Thailand
              </span>
              <a href="tel:+66953616514" className="flex gap-2 items-center hover:text-[var(--ink)]">
                <FontAwesomeIcon icon={faPhone} />
                095 361 6514
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
