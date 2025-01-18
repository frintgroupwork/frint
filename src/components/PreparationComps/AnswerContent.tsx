import React from "react";

export default function AnswerContent({
  answer,
  variant = "default",
  onClick
}: {
  answer: string,
  variant?: "default" | "correct" | "incorrect",
  onClick?: () => void
}) {
  const variantColorScheme = (colors: string) => {
    switch(colors) {
      case "default":
        return "text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30";
      case "correct":
        return "text-[#16A34A] bg-[#16A34A]/20 border-[#16A34A]/50";
      case "incorrect":
        return "text-[#BE123C] bg-[#BE123C]/20 border-[#BE123C]/50";
      default:
        return "text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30";
    }
  }

  const variantColorStyle = variantColorScheme(variant);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div 
        onClick={onClick}
        className={`
          text-base w-[80%] 
          ${variantColorStyle} 
          max-sm:text-sm 
          text-center 
          cursor-pointer 
          backdrop:blur-md 
          font-medium 
          border-4 
          border-white/30 
          px-6 
          py-2 
          rounded-3xl
          transition-all 
          duration-200 
          ease-in-out
          hover:scale-[1.02]
          active:scale-[0.98]
        `}
      >
        {answer}
        {variant === "correct" && (
          <span className="ml-2">✓</span>
        )}
        {variant === "incorrect" && (
          <span className="ml-2">✗</span>
        )}
      </div>
    </div>
  );
}