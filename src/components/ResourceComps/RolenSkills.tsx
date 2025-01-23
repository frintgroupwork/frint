import React from "react";
import Section from "../PreparationComps/Section";
import Roles from "./Roles";

interface RolenSkillsProps {
  jobTitle: string;
  role: string[];  // Changed to string array
}

export default function RolenSkills({ jobTitle, role }: RolenSkillsProps) {
  return (
    <Section>
      <div className="flex flex-row w-[90%] max-sm:flex-col justify-evenly items-center mx-auto max-sm:w-[80%] max-sm:mx-auto gap-6">
        <div className="px-10 py-16 cursor-pointer backdrop:blur-md sm:mt-10 text-center font-semibold border-[8.19px] border-white/30 text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30 rounded-full flex items-center justify-center">
          {jobTitle}
        </div>
        <div className="flex flex-wrap h-1/2 justify-center items-end gap-1">
          {role.map((roleItem, index) => (
            <Roles key={index} roles={roleItem} />
          ))}
        </div>
      </div>
    </Section>
  );
}