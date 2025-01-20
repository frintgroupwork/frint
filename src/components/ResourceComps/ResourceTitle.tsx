import { Button } from "@nextui-org/react";
import React from "react";

export default function ResourceTitle() {
  return (
    <>
      <div className="flex flex-row justify-between w-[80%] pt-10">
      <div className="flex flex-col gap-4 w-1/2">
        <div className="pb-10">
          <p className="text-large text-neutral-800 font-medium ">
            Explore IT roles and skills
          </p>
          <p className="text-base text-neutral-600 font-thin">
            Discover key IT roles and the skills needed to succeed in the tech
            industry.
          </p>
        </div>
        <Button
          className="w-1/3 max-sm:w-full"
          color="primary"
          variant="bordered"
        >
          View all roles
        </Button>
      </div>
      <div className="flex flex-col items-end gap-4 text-end">
        <p className="text-medium sm:text-large text-neutral-800 font-medium pb-6">
          Popularities Tech Job <br />{" "}
          <span className="text-base text-neutral-600 font-thin">
            in Cambodia
          </span>{" "}
        </p>
        <div className="flex max-sm:w-1/2 flex-row gap-6 items-end max-sm:flex-col ">
          <div className="flex flex-col sm:items-end md:items-center">
            <p className="font-medium text-3xl sm:text-4x text-[#1d4ed8] ">6</p>
            <p className="text-neutral-500">Job Families</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-3xl sm:text-4x text-[#1d4ed8]">30</p>
            <p className="text-neutral-500">Roles</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-3xl sm:text-4x text-[#1d4ed8]">53</p>
            <p className="text-neutral-500">Skills</p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
