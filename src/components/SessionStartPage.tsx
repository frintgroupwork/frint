"use client"
import React from "react";
import BackgroundTemplate from "./BackgroundTemplate";
import Section from "./Section";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SessionStartPage = () => {
  const router = useRouter()

  const handleNext = () =>{
    router.push('/preparation/step-1')
  }
  return (
    <BackgroundTemplate>
      <Section className="flex flex-row justify-between items-center ">
        <div className="flex flex-col justify-start gap-2 ">
          <p className="text-sm text-neutral-400">Before we start the party </p>
          <p className="text-2xl w-[90%] max-sm:w-full text-neutral-800 font-medium">
            Let's get to know each other first!
          </p>
          <Button color="primary" className="w-1/3 font-medium" onClick={handleNext}>
            Start Now
          </Button>
        </div>
        <div className="hidden sm:block ">
          <Image alt="hero1" src={"/QaHeo.svg"} width={250} height={150} />
        </div>
      </Section>
    </BackgroundTemplate>
  );
};

export default SessionStartPage;
