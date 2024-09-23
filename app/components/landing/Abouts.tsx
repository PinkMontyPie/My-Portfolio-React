/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const AboutPage = () => {
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

  const images: string[] = [
    "/images/IMG_0317.jpeg",
    "/images/1677465294777.jpg",
    "/images/img1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true); // State to manage the fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Trigger fade-in after image change
      }, 500); // Set this to half of the transition duration to ensure a smooth fade
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Optional handler for manually navigating images
  const goToImage = (index: number) => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true); // Trigger fade-in after image change
    }, 500);
  };

  return (
    <main className="font-line-bold text-black h-auto bg-slate-100">
      <div className="container animate-class pt-[120px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d] rounded-full px-5 py-2 font-line-bold text-[20px] animate-class delay-300">
            About me 👀
          </div>
          <div className="font-line-bold text-[30px] lg:text-[40px]">
            let&apos;s Get in touch!
          </div>
          <div className="bg-gradient-to-br from-[#dff1ff] to-[#FCEBEF] p-8 lg:p-10 lg:pl-20 flex flex-col lg:flex-row justify-between items-center gap-20 rounded-3xl w-full animate-class">
            <div className="flex flex-col justify-center items-start animate-class delay-2">
              <h1 className="font-line-bold text-3xl">Hi I&apos;m Pai👋</h1>
              <p className="font-line-Regular text-base pt-3 pb-10 leading-loose">
                i&apos;m a <strong>Front-end developer / UX/UI Designer</strong>{" "}
                living in <strong>Bangkok, Thailand.</strong>
                <br />
                I&apos;m also a{" "}
                <strong>Microsoft Learn Student Ambassador.</strong> <br />
                <strong>My passion?</strong> Becoming a skilled full-stack
                developer!
                <br />
                So please{" "}
                <strong>don&apos;t hesitate to reach out to me!</strong>
              </p>
              <div className="flex gap-3">
                {Social.map((option, index) => (
                  <Link href={option.url} key={index}>
                    <h1 className="text-xl cursor-pointer hover:scale-105 transition-all">
                      <FontAwesomeIcon
                        icon={option.label}
                        style={{ color: "#293144" }}
                      />
                    </h1>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
              <div className="relative">
                <img
                  src={images[currentIndex]}
                  alt={`profile image ${currentIndex + 1}`}
                  className={`w-[400px] h-[500px] object-cover rounded-3xl image-transition ${
                    fade ? "show" : ""
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-row lg:flex-col gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      index === currentIndex ? "bg-black" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
