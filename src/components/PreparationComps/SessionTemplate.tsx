import React from "react";
import Image from "next/image";

const SessionTemplate = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <div className="template relative w-full h-full">
        <div className="absolute top-0 left-0 max-sm:-top-14">
          <Image
            alt="top-left"
            src={"/prepare/top-left.svg"}
            height={150}
            width={200}
          />
        </div>
        <div className="absolute top-0 right-0 max-sm:-top-14">
          <Image
            alt="top-right"
            src={"/prepare/top-right.svg"}
            height={200}
            width={150}
          />{" "}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-screen z-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default SessionTemplate;
