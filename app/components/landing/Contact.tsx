import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {

  return (
    <main className="font-line-bold text-black h-auto bg-white">
      <div className="container py-20 flex flex-col gap-5 ">
        <h1 className="text-4xl">Contact</h1>
        <p className="font-line-Regular">This is my skill that I obtained in the past three years.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full ">
          <div className="w-auto card-body bg-slate-200 rounded-lg">
            <h1 className="text-2xl flex gap-3 items-center">Font-end developer</h1>
            <div className="flex pt-5 gap-10">
              <h1 className="w-auto text-xl">
                Skills
              </h1>
              <h1 className="flex flex-col gap-3 font-line-Regular">
                <span>JavaScript</span>
                <span>Typescript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Next.js</span>
                <span>Tailwind CSS</span>
                <span>HTML</span>
                <span>CSS</span>
              </h1>
            </div>
          </div>
          <div className="w-auto card-body bg-slate-200 rounded-lg">
            <h1 className="text-2xl">UI/UX Design</h1>
            <div className="flex pt-5 gap-10">
              <h1 className="w-auto font-line-bold text-xl">
                Skills
              </h1>
              <h1 className="flex flex-col gap-3 font-line-Regular">
                <span>Figma</span>
                <span>Adobe XD</span>
                <span>Photoshop</span>
              </h1>
            </div>
          </div>
          <div className="w-auto card-body bg-slate-200 rounded-lg">
            <h1 className="text-2xl">Motion Graphic</h1>
            <div className="flex pt-5 gap-10">
              <h1 className="w-auto font-line-bold text-xl">
                Skills
              </h1>
              <h1 className="flex flex-col gap-3 font-line-Regular">
                <span>Adobe After Effects</span>
                <span>Adobe Premiere Pro</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 