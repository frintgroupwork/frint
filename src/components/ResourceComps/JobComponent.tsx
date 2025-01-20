import Link from "next/link";
import React from "react";

export default function JobComponent({
  major,
  navigate,
}: {
  major: string;
  navigate: string;
}) {
  return (
    <div className="w-[250px] max-sm:w-[180px] max-sm:h-[180px] h-[250px] cursor-pointer  backdrop:blur-md sm:mt-10 text-center font-semibold border-[8.19px] border-white/30  text-[#153899] bg-[#1d4ed8]/20 hover:bg-[#1d4ed8]/30  rounded-full  flex items-center justify-center">
      <Link href={navigate}>{major}</Link>
    </div>
  );
}
