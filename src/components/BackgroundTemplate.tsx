import Image from "next/image";
import React from "react";

const BackgroundTemplate = ({children}:{children: React.ReactNode}) => {
  return (
      <div className="template relative w-full h-full">
        <div className="absolute top-0 left-0 ">
          <Image
            alt="top-left"
            src={"/prepare/top-left.svg"}
            height={150}
            width={200}
          />
        </div>
        <div className="absolute top-0 right-0">
          <Image
            alt="top-right"
            src={"/prepare/top-right.svg"}
            height={200}
            width={150}
          />{" "}
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            alt="buttom-left"
            src={"/prepare/bottom-left.svg"}
            height={250}
            width={300}
          />{" "}
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            alt="buttom-right"
            src={"/prepare/bottom-right.svg"}
            height={100}
            width={80}
          />{" "}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-screen z-10">
          {children}
        </div>
      </div>
  );
};

export default BackgroundTemplate;
