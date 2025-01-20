import React from "react";
import Section from "../PreparationComps/Section";
import Roles from "./Roles";

export default function RolenSkills({jobTitle, role} : {jobTitle: string, role: string}) {
  return (
    <Section>
      <div className="flex flex-wrap justify-evenly items-center mx-auto  max-sm:w-[80%] max-sm:mx-auto gap-6">
        <div className="w-[250px] max-sm:w-[180px] max-sm:h-[180px] h-[250px] cursor-pointer  backdrop:blur-md sm:mt-10 text-center font-semibold border-[8.19px] border-white/30  text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30  rounded-full  flex items-center justify-center">
          {jobTitle}
        </div>
        <div className="flex flex-wrap h-1/2 justify-start items-start gap-1">
          <Roles roles={role}/>
        </div>
      </div>
      {/* <Skills s1="hello"/> */}
    </Section>
  );
}
