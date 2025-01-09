import React from "react";
import KeyIcon from "../Icons/Hero3/KeyIcon";
import Image from "next/image";
import ConfidenceIcon from "../Icons/Hero3/ConfidenceIcon";

const WhyPrepare = () => {
  return (
    <>
      <div className="px-6 py-4 bg-white">
        <div className="flex flex-col gap-2">
          <p className="text-base text-[#1d4ed8] font-semibold max-lg:text-sm whitespace-normal">
            Why prepare?
          </p>
          <p className="text-3xl font-medium text-neutral-800 max-lg:text-2xl whitespace-normal md:w-1/3">
            Gain confidence and get real results{" "}
          </p>
        </div>
        <div>
          <div className="py-6">
            <div className="flex flex-row gap-2 items-start align-top">
              <KeyIcon />
              <p className="w-1/2">
                Preparing thoroughly can greatly improve your chances of success
                in an interview. practice answering common questions, and make
                use of helpful resources, you'll feel more confident and perform
                at your best.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-start align-top">
              <ConfidenceIcon />
              <p className="w-1/2">
                Nervousness and lack of confidence often hinder performance.
                Displaying confidence during interviews increases chances of
                success.
              </p>
            </div>
            <div className="flex flex-row gap-2 items-start align-top">
              <KeyIcon />
              <p className="w-1/2">
                Preparing thoroughly can greatly improve your chances of success
                in an interview. practice answering common questions, and make
                use of helpful resources, you'll feel more confident and perform
                at your best.
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <Image
              src={"WhyPrepare1.svg"}
              alt="Why prepare 1"
              width={440}
              height={440}
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <div>Image</div>
        <div>Infor</div>
      </div>
    </>
  );
};

export default WhyPrepare;
