import React from "react";
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

  return (
    <main className="font-line-bold text-black h-auto bg-slate-200">
      <div className="container py-20 flex flex-col gap-3 ">
        <h1 className="text-4xl">About me</h1>
        <p className="font-line-Regular">
          Hey there, everyone! I&apos;m Soravith Puvekit, but you can just call
          me Pai. I&apos;m a Computer Science student at Bangkok University{" "}
          <br />
          and a proud Microsoft Learn Student Ambassador. My passion? Becoming a
          skilled full-stack developer! Let&apos;s dive into the world of coding
          together!
        </p>
        <div className="flex gap-5 items-start py-5">
          <div className="w-32 flex flex-shrink-0">
            <h1 className="text-xl">Role</h1>
          </div>
          <div>
            <p className="font-line-Regular">Front-end development</p>
            <p className="font-line-Regular">UX/UI design</p>
          </div>
        </div>

        <div className="flex gap-5 items-start pb-6">
          <div className="w-32 flex flex-shrink-0">
            <h1 className="text-xl">Awards</h1>
          </div>

          <div>
            <p className="font-line-Regular">
              Microsoft Learn Student Ambassador
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-start pb-5">
          <div className="w-32 flex flex-shrink-0">
            <h1 className="text-xl">Experience</h1>
          </div>

          <ul className="steps steps-vertical">
            <li className="step">
              <div className="flex flex-col w-full pl-[20px] pb-5">
                <div className="flex flex-col justify-start items-start gap-[5px] pb-3">
                  <div className="font-bold">Front-End Engineer</div>
                  <div className="font-line-Regular">HDmall</div>
                </div>
                <ul className="list-disc pl-5 font-line-Regular flex flex-col justify-start items-start text-start leading-relaxed">
                  <li>
                    Developed and designed a B2B website,{" "}
                    <strong>acquiring 100+ new customers in 3 months.</strong>
                  </li>
                  <li>
                    Created internal tools that{" "}
                    <strong> boosted marketing productivity by 50%,</strong>{" "}
                    automating HTML page generation for campaigns.
                  </li>
                  <li>
                    <strong>
                      Designed and implemented a new Campaign and Highlights
                      page for HDmall.co.th,
                    </strong>{" "}
                    increasing customer engagement by showcasing ongoing
                    promotions and featured products.
                  </li>
                </ul>
              </div>
            </li>
            <li className="step">
              <div className="flex flex-col w-full pl-[20px] pb-6">
                <div className="flex flex-col justify-start items-start gap-[5px] pb-3">
                  <div className="font-bold">
                    Full-stack Developer / UX-UI Designer
                  </div>
                  <div className="font-line-Regular">
                    Center of Specialty Innovation (CoSI)
                  </div>
                </div>
                <ul className="list-disc pl-5 font-line-Regular flex flex-col justify-start items-start text-start">
                  <li>
                    <strong>Led website development and UI/UX design</strong>{" "}
                    using modern front-end frameworks{" "}
                    <strong>
                      (React, Next.js, etc.), improving user engagement by 25%.
                    </strong>
                  </li>
                  <li>
                    Managed version control and implemented{" "}
                    <strong>CI/CD pipelines</strong>
                    using <strong>GitHub</strong>,
                    <strong> reducing deployment time by 30%.</strong>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
          <img
            src="images/img1.jpg"
            alt=""
            className="rounded-xl w-full h-[500px] object-cover object-center"
          />
          <img
            src="images/1677465294777.jpg"
            alt=""
            className="rounded-xl w-full h-[500px] object-cover object-center"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
