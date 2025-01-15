import React from "react";

export default function AnswerContent({answer, variant}:{answer: string, variant: "default" | "correct" | "incorrect"}) {

  
  const variantColorScheme = (colors: string) => {
    switch(colors){
      case "default":
        return "text-[#153899] bg-[#1d4ed8]/20";
      case "correct":
        return "text-[#16A34A] bg-[#16A34A]/20";
      case "incorrect":
        return "text-[#BE123C] bg-[#BE123C]/20"
      default:
        return "text-[#153899] bg-[#1d4ed8]/20";
    }
  }

  const variantColorStyle = variantColorScheme(variant);

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className={`text-base w-[80%] ${variantColorStyle} text-center cursor-pointer backdrop:blur-md font-medium border-4 border-white/30 px-6 py-2 rounded-3xl`}>
          {answer}
        </div>
      </div>
    </>
  );
}
