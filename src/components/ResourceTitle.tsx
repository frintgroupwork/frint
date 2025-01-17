import React from "react";

export default function ResourceTitle() {
  return (
    <div className="flex flex-row justify-between w-[80%] h-screen pt-10">
      <div className="flex flex-col">
        <p className="text-large text-neutral-800 font-medium ">Explore IT roles and skills</p>
        <p className="text-base text-neutral-600 font-thin">
          Discover key IT roles and the skills needed to succeed in the tech
          industry.
        </p>
      </div>
      <div className="flex flex-col items-end gap-4 text-end">
        <p className="text-large text-neutral-800 font-medium pb-6">
          Popularities Tech Job <br /> <span className="text-base text-neutral-600 font-thin">in Cambodia</span>{" "}
        </p>
        <div className="flex flex-row gap-6 items-end">
          <div className="flex flex-col items-center">
            <p className="font-medium text-4xl text-[#1d4ed8]">6</p>
            <p className="text-neutral-500">Job Families</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-4xl text-[#1d4ed8]">30</p>
            <p className="text-neutral-500">Roles</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-4xl text-[#1d4ed8]">53</p>
            <p className="text-neutral-500">Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
}
