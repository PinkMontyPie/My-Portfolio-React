import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
        <p className="font-line-Regular">Hey there, everyone! I&apos;m Soravith Puvekit, but you can just call me Pai. I&apos;m a Computer Science student at Bangkok University <br />and a proud Microsoft Learn Student Ambassador. My passion? Becoming a skilled full-stack developer! Let&apos;s dive into the world of coding together!</p>
        <div className="flex gap-5 items-start pt-5">
          <h1 className="text-xl w-28">Role</h1>
          <div>
            <p className="font-line-Regular">Front-end development</p>
            <p className="font-line-Regular">UX/UI design</p>
          </div>
        </div>

        <div className="flex gap-5 items-start pb-5">
          <h1 className="text-xl w-28">Awards</h1>
          <div>
            <p className="font-line-Regular">Microsoft Learn Student Ambassador</p>
          </div>
        </div>


        <div className="flex gap-3">
          {Social.map((option, index) => (
            <Link href={option.url} key={index}>
              <h1 className="text-xl cursor-pointer hover:scale-105 transition-all">
                <FontAwesomeIcon icon={option.label} style={{ color: "#293144", }} />
              </h1>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-10 pt-5">
          <img src="images/img1.jpg" alt="" className="rounded-xl w-full h-[500px] object-cover object-center" />
          <img src="images/1677465294777.jpg" alt="" className="rounded-xl w-full h-[500px] object-cover object-center" />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;