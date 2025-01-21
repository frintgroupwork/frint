import React from "react";

interface SkillsProps {
  items: string[];  // Changed to string array instead of optional string
}

export default function Skills({ items }: SkillsProps) {
  return (
    <>
      <div className="w-[90%] mx-auto bg-[#1d4ed8] rounded-xl py-2 px-4 shadow-md m-4">
        <p className="font-medium text-xl text-white pt-4">Skills</p>
        <div className="w-[95%] mx-auto flex flex-wrap pt-4 gap-2 pb-4">
          {items.map((item, index) => (
            <p 
              key={index} 
              className="border-1 border-white text-white px-4 py-2 rounded-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}