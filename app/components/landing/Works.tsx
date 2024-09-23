/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Work {
  image: string;
  type: string[];
  title: string;
  description: string;
  maindescription: string;
  role: string[];
  url: string;
}

const FilterButton: React.FC<{
  type: string;
  onClick: (type: string | null) => void;
  active: boolean;
}> = ({ type, onClick, active }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-xs lg:text-base focus:scale-95 transition-all ${
        active
          ? "bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d]"
          : "bg-white text-gray-700"
      }`}
      onClick={() => onClick(type === "All" ? null : type)}
    >
      {type}
    </button>
  );
};

const WorksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("/api/workslist.json");
        if (!response.ok) {
          throw new Error("Failed to fetch works list");
        }
        const data: Work[] = await response.json();
        setWorks(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching works list:", error);
      }
    };

    fetchWorks();
  }, []);

  const filteredWorks = activeFilter
    ? works.filter((work) => work.type.includes(activeFilter))
    : works;

  return (
    <main className="font-line-bold text-black h-auto bg-slate-100 pt-[150px]">
      <div className="container animate-class">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="bg-gradient-to-r from-[#dff1ff] to-[#FCEBEF] text-[#2d2d2d] rounded-full px-5 py-2 font-line-bold text-[20px] animate-class delay-300">
            My Works 💡
          </div>
          <div className="font-line-bold text-[30px] lg:text-[40px] text-center">
            These are my work
            <br /> that I obtained in the past three years.
          </div>
          <div className="flex flex-col gap-5 justify-center items-center pb-20">
            <div className="flex flex-wrap gap-4 my-4 ">
              <FilterButton
                type="All"
                onClick={(type) => setActiveFilter(type)}
                active={!activeFilter}
              />
              {Array.from(new Set(works.flatMap((work) => work.type))).map(
                (type) => (
                  <FilterButton
                    key={type}
                    type={type}
                    onClick={setActiveFilter}
                    active={activeFilter === type}
                  />
                )
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              {filteredWorks.map((option, index) => (
                <div
                  key={index}
                  onClick={() =>
                    (
                      document.getElementById(
                        `my_modal_${index}`
                      ) as HTMLDialogElement
                    )?.showModal?.()
                  }
                  className="card w-auto h-full bg-white cursor-pointer hover:scale-105 transition-all"
                >
                  <figure>
                    <img
                      className="w-full h-[200px] object-cover object-top"
                      src={option.image}
                      alt={option.title}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex card-actions">
                      {option.type.map((type, index) => (
                        <div
                          key={index}
                          className="badge rounded-md bg-gray-200 border-none text-[#293144]"
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                    <h2 className="card-title">{option.title}</h2>
                  </div>

                  <dialog
                    id={`my_modal_${index}`}
                    className="modal cursor-default"
                  >
                    <div className="modal-box lg:w-11/12 lg:max-w-7xl text-[#293144] bg-slate-300">
                      <figure className="w-full bg-white rounded-xl">
                        <img
                          className="w-auto lg:h-[500px] object-cover object-top"
                          src={option.image}
                          alt={option.title}
                        />
                      </figure>
                      <div className="card-body">
                        <div className="flex card-actions">
                          {option.type.map((type, index) => (
                            <div
                              key={index}
                              className="badge rounded-md bg-gray-200 border-none text-[#293144]"
                            >
                              {type}
                            </div>
                          ))}
                        </div>
                        <h2 className="text-xl lg:text-3xl">{option.title}</h2>
                        <div className="pb-5 pt-2 flex flex-col flex-grow justify-end gap-5">
                          <p className="font-line-Regular flex flex-col gap-3 text-xs lg:text-base">
                            {option.maindescription}
                            <Link
                              href={option.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              Learn more
                            </Link>
                          </p>
                          <div className="flex gap-3">
                            <h1>Role</h1>
                            <div className="flex flex-col card-actions gap-3">
                              {option.role.map((role, index) => (
                                <div key={index} className="font-line-Regular">
                                  {role}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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
        </div>
        {/* <div className="w-full flex justify-center items-center">
          <Link
            href="/works"
            className="px-8 py-3 bg-[#2d2d2d] font-line-Regular text-white rounded-full transition-all hover:scale-95 inline-block align-middle"
          >
            See all my works
          </Link>
        </div> */}
      </div>
    </main>
  );
};

export default WorksPage;
