import React from "react";

function ButtonQa({ children }: { children: string }) {
  return (
    <div className="px-12 py-6 bg-[#F1F1F1] rounded-lg border-[8.19px] border-solid border-gray-50  backdrop-blur-md font-medium text-medium text-blue-800 max-sm:px-8 max-sm:py-4 hover:opacity-80 cursor-pointer text-center">
      {children}
    </div>
  );
}

export default ButtonQa;
