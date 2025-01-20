import React from "react";

export default function Skills({
  s1,
//   s2,
//   s3,
//   s4,
//   s5,
//   s6,
//   s7,
//   s8,
//   s9,
}: {
  s1?: string;
//   s2?: string;
//   s3?: string;
//   s4?: string;
//   s5?: string;
//   s6?: string;
//   s7?: string;
//   s8?: string;
//   s9?: string;
}) {
  return (
    <>
      <div className="w-[90%] mx-auto bg-[#1d4ed8] rounded-lg py-2 px-4 shadow-md m-4">
        <p className="font-medium text-xl text-white pt-4">Skills</p>
        <div className="w-[95%] mx-auto flex flex-wrap pt-4 gap-2 pb-4">
          <p className="border-1 border-white text-white px-4 py-2 rounded-lg">
            {s1}
          </p>
          {/* <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s2}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s3}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s4}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s5}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s6}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s7}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s8}
          </p>
          <p className="border-1 border-white text-white px-4 py-2  rounded-lg">
            {s9}
          </p> */}
        </div>
      </div>
    </>
  );
}
