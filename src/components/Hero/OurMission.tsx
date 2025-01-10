import React from "react";
import Section from "../Section";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

const OurMission = () => {
  return (
    <>
      <Section className="bg-white shadow-sm grid grid-rows-3 justify-center items-center px-5 py-5 ">
        <div>
          <p className="text-base text-[#1d4ed8] font-semibold max-lg:text-sm text-center">
            Our mission
          </p>
          <p className="text-3xl font-medium text-neutral-800 max-lg:text-2xl text-center">
            We'll help IT students
          </p>
          <p className="text-lg text-neutral-600 max-lg:text-sm text-center">
            Prepare for the interview, gain their confidence, and utilize tips
            to excel.
          </p>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 justify-center items-center gap-2 pb-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-[64px] text-[#0F172A] font-medium">47.83%</p>
            <p className="text-sm text-neutral-600 whitespace-normal text-center">
              Base on our survey & interview we find that 11 out of 23 people
              fail their first interviews.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[64px] text-[#0F172A] font-medium">62%</p>
            <p className="text-sm text-neutral-600 whitespace-normal text-center">
              Find it difficult to find websites or platforms to help prepare
              for interviews
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[64px] text-[#0F172A] font-medium">90%</p>
            <p className="text-sm text-neutral-600 whitespace-normal text-center">
              People who are well-prepared are more likely to pass their
              interviews.
            </p>
          </div>
        </div>

        <div className="">
          <Card className="flex flex-row justify-between items-center gap-2 bg-[#1d4ed8] max-sm:flex-col py-4 mt-4 lg:py-8">
            <CardBody className="flex gap-2 mx-auto px-6">
              <p className="text-white font-thin text-base opacity-80">TRY IT NOW</p>
              <div className="">
                <p className="text-white font-medium text-2xl">Ready to level up your confidence during interviews.</p>
                <p className="text-white font-thin text-sm max-lg:text-xs opacity-80">
                  Explore and being well prepare of your interview to secure
                  your job
                </p>
              </div>
            </CardBody>
            <CardBody className="flex flex-row justify-end gap-4 pr-6 max-sm:flex-col">
                <Button className="bg-white text-[#1d4ed8] font-medium">Get Start Now</Button>
                <Button variant="bordered" className="border-bg-white text-white font-medium px-4 hover:opacity-85">
                    Learn More
                    <Image src={"learnmore.svg"}width={20} height={20} alt="link"/>
                </Button>
            </CardBody>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default OurMission;
