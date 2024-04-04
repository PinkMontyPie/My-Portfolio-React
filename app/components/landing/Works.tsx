/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Work {
  image: string;
  type: string[];
  title: string;
  description: string;
  role: string[];
  url: string;
}

const FilterButton: React.FC<{ type: string; onClick: (type: string | null) => void; active: boolean }> = ({ type, onClick, active }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md focus:scale-95 transition-all ${active ? "bg-blue-500 text-white" : "bg-white text-gray-700"
        }`}
      onClick={() => onClick(type === "All" ? null : type)}
    >
      {type}
    </button>
  );
};

const WorksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const Works: Work[] = [
    {
      image: "images/Work/CFM.png",
      type: ["Web Development"],
      title: "Coding for Metaverse",
      description: "Coding for metaverse is a online E-learning platform by CoSI lab and Depa collaboration.",
      role: ["Font-end developer", "UI/UX Design"],
      url: "https://codingformetaverse.com/",
    },
    {
      image: "images/Work/MLSA.png",
      type: ["Microsoft", "Student Ambassador"],
      title: "Microsoft Learn Student Ambassador",
      description: "MLSA is a program by Microsoft to help student to learn and grow in technology field.",
      role: ["Student", "Student Ambassador"],
      url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/f7f6c0fc-bffc-417e-808a-4f97e00313c5",
    },
    {
      image: "images/Work/pypathway.jpg",
      type: ["Event", "Workshop"],
      title: "Python Developer Pathway Be Inspired session workshop by MLSA ",
      description: "If a dog chews shoes whose shoes does he choose?",
      role: ["Speaker"],
      url: "https://codingformetaverse.com/",
    },
    {
      image: "images/Work/Workta.jpg",
      type: ["Event", "Workshop"],
      title: "Python Developer Pathway (The First Chapter : Be Inspired)",
      description: "If a dog chews shoes whose shoes does he choose?",
      role: ["Teaching Assistant"],
      url: "https://codingformetaverse.com/",
    },
    {
      image: "images/Work/Kit.jpg",
      type: ["Student exchange"],
      title: "BUxKAIT 2024",
      description: "If a dog chews shoes whose shoes does he choose?",
      role: ["Student Assistant", "Buddy"],
      url: "https://codingformetaverse.com/",
    },
  ];

  const filteredWorks = activeFilter
    ? Works.filter((work) => work.type.includes(activeFilter))
    : Works;

  return (
    <main className="font-line-bold text-black h-auto bg-slate-200">
      <div className="container py-20 flex flex-col gap-5">
        <h1 className="text-4xl">Work</h1>
        <p className="font-line-Regular">This is my Work that I obtained in the past three years.</p>
        <div className="flex flex-wrap gap-4 my-4 ">
          <FilterButton
            type="All"
            onClick={(type) => setActiveFilter(type)}
            active={!activeFilter}
          />
          {Array.from(new Set(Works.flatMap((work) => work.type))).map((type) => (
            <FilterButton
              key={type}
              type={type}
              onClick={setActiveFilter}
              active={activeFilter === type}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {filteredWorks.map((option, index) => (
            <div key={index} onClick={() => (document.getElementById(`my_modal_${index}`) as HTMLDialogElement)?.showModal?.()} className="card w-auto h-full bg-white cursor-pointer hover:scale-105 transition-all">
              <figure><img className="w-full h-[200px] object-cover object-top" src={option.image} alt="Shoes" /></figure>
              <div className="card-body">
                <div className="flex card-actions">
                  {option.type.map((type, index) => (
                    <div key={index} className="badge rounded-md bg-gray-200 border-none text-[#293144]">{type}</div>
                  ))}
                </div>
                <h2 className="card-title">
                  {option.title}
                </h2>
                <div className="pb-5 pt-2 flex flex-grow justify-end">
                  <p className="font-line-Regular">{option.description}</p>
                </div>
                <div className="flex gap-3">
                  <h1>Role</h1>
                  <div className="flex flex-wrap card-actions gap-3">
                    {option.role.map((role, index) => (
                      <div key={index} className="badge badge-outline">{role}</div>
                    ))}
                  </div>
                </div>
              </div>
              <dialog id={`my_modal_${index}`} className="modal cursor-default">
                <div className="modal-box lg:w-11/12 lg:max-w-7xl text-[#293144] bg-slate-300">
                  <figure className="w-full bg-white rounded-xl"><img className="w-h-[500px] h-[500px] object-cover object-top" src={option.image} alt="Modal Image" /></figure>
                  <div className="card-body">
                    <div className="flex card-actions">
                      {option.type.map((type, index) => (
                        <div key={index} className="badge rounded-md bg-gray-200 border-none text-[#293144]">{type}</div>
                      ))}
                    </div>
                    <h2 className="text-3xl">
                      {option.title}
                    </h2>
                    <div className="pb-5 pt-2 flex flex-col flex-grow justify-end gap-5">
                      <p className="font-line-Regular">{option.description}</p>
                      <div className="flex gap-3">
                        <h1>Role</h1>
                        <div className="flex flex-col card-actions gap-3">
                          {option.role.map((role, index) => (
                            <div key={index} className=" font-line-Regular">{role}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Link href={option.url}>
                      <p className="font-line-Regular btn bg-white text-gray-700 hover:bg-slate-100  border-none">More information</p>
                    </Link>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorksPage;
