import React from "react";

import { FaArrowRight } from "react-icons/fa";

const NextSteps = () => {
  return (
    <div>
      <div className="p-16 pt-18">
        <div className="">
          <div className="text-center text-5xl text-black/80 font-semibold pb-6 flex flex-col gap-x-3.5">
            <p className="mb-2"> Ready to boost sales ? </p>
            <p>Start your 7-day free trial</p>
          </div>
          <div className="text-center text-xl p-1 gap-1 text-slate-500 font-bold">
            <p>Ditch the clunky checkouts. Create custom sales pages that</p>
            <p>convert and keep more of what you earn.</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-10">
          <a
            href="/Login"
            className=" bg-[#509ee3]  p-4 text-xl rounded-2xl text-white flex justify-between items-center gap-3"
          >
            Start your 7 Days free trial <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
