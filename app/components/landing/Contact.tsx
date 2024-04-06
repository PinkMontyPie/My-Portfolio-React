import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faFacebook, faGithub, faHtml5, faJs, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const ContactPage = () => {

  const Social = [
    {
      label: "Github",
      icon: faGithub,
      url: "https://github.com/PinkMontyPie",
    },
    {
      label: "Linkedin",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/pinkmontypie/",
    },
    {
      label: "Facebook",
      icon: faFacebook,
      url: "https://www.facebook.com/profile.php?id=100009782250843",
    },
  ];

  return (
    <main className="font-line-bold text-black h-auto bg-white flex justify-center container">
      <div className="flex grid-cols-3">
        <div className="md:flex justify-center items-center hidden">
          <img src="/images/3d/Saly-1.png" alt="hero" className="w-[300px] h-auto" />
        </div>
        <div className="py-20 flex flex-col items-center gap-5 ">
          <h1 className="text-4xl">Contact</h1>
          <p className="font-line-Regular">let&apos;s Get in touch!</p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="flex pt-5 gap-10">
              <h1 className="w-auto text-xl">
                Contact
              </h1>
              <h1 className="flex flex-col gap-3 font-line-Regular">
                <span>Soravith Puvekit</span>
                <span>Bangkok, Thailand</span>
                <span>095 361 6514</span>
              </h1>
            </div>
            <div className="flex pt-5 gap-10">
              <h1 className="w-auto text-xl">
                Social
              </h1>
              <h1 className="flex flex-col gap-3 font-line-Regular">
                {Social.map((option, index) => (
                  <Link href={option.url} key={index}>
                    <span className="flex gap-3 items-center"><FontAwesomeIcon icon={option.icon} style={{ color: "#293144", }} />{option.label}</span>
                  </Link>
                ))}
              </h1>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <img src="/images/3d/Saly-35.png" alt="hero" className="w-[300px] h-auto" />
        </div>

      </div>
    </main>
  );
};

export default ContactPage; 