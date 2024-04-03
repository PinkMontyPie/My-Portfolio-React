import React from "react";
import Link from "next/link";

const SkillPage = () => {

  return (
    <main className="font-line-bold text-black h-auto py-10 bg-white">
      <div className="container py-20 flex flex-col gap-3 ">
        <h1 className="text-4xl">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-10 w-full ">
          <div className="w-auto h-[100px] bg-blue-700 flex justify-center items-center rounded-lg">
            1
          </div>
          <div className="w-auto h-[100px] bg-blue-700 flex justify-center items-center rounded-lg">
            2
          </div>
          <div className="w-auto h-[100px] bg-blue-700 flex justify-center items-center rounded-lg">
            3
          </div>
          <div className="w-auto h-[100px] bg-blue-700 flex justify-center items-center rounded-lg">
            4
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkillPage; 