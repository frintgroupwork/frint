import React from "react";
import Image from "next/image";
import Section from "../Section";

const WhyPrepare = () => {
  return (
    <>
      <Section className="mx-auto bg-white shadow-sm">
        <div className="w-[90%] mx-auto">
          <div className="py-5">
            <p className="text-base text-[#1d4ed8] font-semibold max-lg:text-sm whitespace-normal">
              Why prepare?
            </p>
            <p className="text-3xl font-medium text-neutral-800 max-lg:text-2xl whitespace-normal ">
              Gain confidence and get real results{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 justify-center items-center gap-2 py-4">
            <div className="col-span-2 flex flex-col gap-12">
              <div className="flex flex-row items-start gap-2">
                <Image
                  src={"/WhyIcons/KeyIcon.svg"}
                  alt="Key Icon"
                  width={44}
                  height={44}
                />
                <p className="text-start">
                  Preparing thoroughly can greatly improve your chances of
                  success in an interview. practice answering common questions,
                  and make use of helpful resources, you'll feel more confident
                  and perform at your best.
                </p>
              </div>

              <div className="flex flex-row gap-2 items-start">
                <Image
                  src={"/WhyIcons/ConfiIcon.svg"}
                  alt="Key Icon"
                  width={44}
                  height={44}
                />
                <p className="text-start">
                  Nervousness and lack of confidence often hinder performance.
                  Displaying confidence during interviews increases chances of
                  success.
                </p>
              </div>

              <div className="flex flex-row gap-2 items-start">
                <Image
                  src={"/WhyIcons/Resoru.svg"}
                  alt="Key Icon"
                  width={44}
                  height={44}
                />
                <p className="text-start">
                  Candidates face challenges with scattered or insufficient
                  preparation resources, leading to inefficiency in readiness.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src={"WhyPrepare1.svg"}
                alt="Why prepare 1"
                width={440}
                height={400}
              ></Image>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="w-[90%] mx-auto py-5 flex flex-row justify-center items-center gap-2">
          <div className="hidden md:block">
            <Image
              src={"WhyPrepare2.svg"}
              alt="Why prepare 2"
              width={415}
              height={400}
            ></Image>
          </div>
          <div className="flex flex-col gap-12 justify-items-end lg:items-end">
            <div className="flex flex-row items-start gap-2 ">
              <p className="text-end">
                job candidates need a balance of soft skills (communication,
                collaboration) and hard skills (technical expertise,
                problem-solving).
              </p>
              <Image
                src={"/WhyIcons/Import.svg"}
                alt="Key Icon"
                width={44}
                height={44}
              />
            </div>

            <div className="flex flex-row gap-2">
              <p className="text-end">
                Adaptability is vital when dealing with unexpected questions.
                Reflecting on past interview experiences helps candidates
                improve over time.
              </p>
              <Image
                src={"/WhyIcons/Adap.svg"}
                alt="Key Icon"
                width={44}
                height={44}
              />
            </div>

            <div className="flex flex-row gap-2">
              <p className="text-end">
                Professional appearance, punctuality, and respectful behavior
                contribute to positive first impressions and set the tone for
                interview success.
              </p>
              <Image
                src={"/WhyIcons/Pro.svg"}
                alt="Key Icon"
                width={44}
                height={44}
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhyPrepare;
