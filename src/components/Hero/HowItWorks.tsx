import React from "react";
import Section from "../PreparationComps/Section";
import Image from "next/image";

function HowItWorks() {
  return (
    <>
      <Section className="py-4 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-lg text-neutral-600 font-medium max-lg:text-sm whitespace-normal">
            How it works
          </p>
          <p className="text-3xl font-medium text-neutral-800 max-lg:text-2xl whitespace-normal">
            PREPARATION IN <span className="text-[#1d4ed8]">3 EASY STEP</span>
          </p>
          <p className="text-lg text-neutral-600 max-lg:text-sm whitespace-normal">
            for your streamline interview.
          </p>
        </div>
        <Image
          src={"HowItWorks.svg"}
          alt="HowItWorks"
          width={1450}
          height={811}
        ></Image>
      </Section>
    </>
  );
}

export default HowItWorks;
