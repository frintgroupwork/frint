import React from "react";

interface ButtonQaProps {
  children: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function ButtonQa({ children, isSelected = false, onClick }: ButtonQaProps) {
  return (
    <button
      className={`px-12 py-6 ${
        isSelected
          ? "opacity-[20%] hover:opacity-20 bg-[#F1F1F1] border-gray-50"
          : "bg-[#F1F1F1] border-gray-100 shadow-md hover:shadow-lg"
      } rounded-lg border-[8.19px] border-solid duration-200 backdrop-blur-md font-medium text-medium text-blue-800 max-sm:px-8 max-sm:py-4 hover:opacity-80 cursor-pointer text-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonQa;
