"use client"
import React, { useState } from "react";
import SessionTemplate from "./SessionTemplate";
import { Progress, Button, Chip } from "@nextui-org/react";
import Section from "./Section";
import { useRouter } from "next/navigation";

const InterviewSession = ({progress, step, main_question,des,tip1,tip2,tip3,example,navigationPath }:{progress: number, step: string,main_question: string,des: string, tip1: string, tip2: string, tip3:string, example: string, navigationPath: string}) => {
 
  const router = useRouter()

  const handlePath = (path: string) => {
    router.push(path)
  }
  const [showExample, setShowExample] = useState(false);

  return (
    <SessionTemplate>
      <Section className="w-full h-screen flex flex-col justify-evenly max-sm:justify-center gap-2">
        <div className="hidden sm:block">
          <Progress value={progress} className="w-1/2 mx-auto" />
        </div>
        <div className={`${showExample ? "mx-auto w-1/2 flex flex-col items-start gap-2 max-sm:hidden" : "mx-auto w-1/2 flex flex-col items-start gap-2 "}`}>
          <p className="text-sm text-neutral-500">
            {step}
          </p>
          <p className="text-xl font-bold text-neutral-800 md:text-3xl">
            {main_question}
          </p>
          <p className="text-base text-neutral-600">
            {des}
          </p>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2 ">
            <Chip
              startContent={<IdeaIcon size={18} />}
              variant="flat"
              color="warning"
              className="text-amber-500"
            >
              {tip1}
            </Chip>
            <Chip
              startContent={<IdeaIcon size={18} />}
              variant="flat"
              color="warning"
              className="text-amber-500"
            >
              {tip2}
            </Chip>
            <Chip
              startContent={<IdeaIcon size={18} />}
              variant="flat"
              color="warning"
              className="text-amber-500"
            >
              {tip3}
            </Chip>
          </div>
        </div>
        {/* Show Example - Only render when showExample is true */}
        {showExample && (
          <div className="flex flex-col w-1/2 mx-auto justify-start">
            <p className="text-medium font-medium text-neutral-500 md:text-xl">
              Example Response
            </p>
            <p className="text-sm text-neutral-500">
              {example}
            </p>
          </div>
        )}
        <div className="flex flex-row justify-start gap-2 w-1/2 mx-auto max-sm:flex-col max-sm:mt-10">
          <Button 
            className="bg-white shadow-md font-medium text-[#1d4ed8]"
            onClick={() => setShowExample(!showExample)} // Toggle example visibility
          >
            {showExample ? "Hide Question Examples" : "Show Question Examples"}
          </Button>
          <Button color="primary" onClick={() => handlePath(navigationPath)}>Continue</Button>
        </div>
      </Section>
    </SessionTemplate>
  );
};

export default InterviewSession;

export const IdeaIcon = ({
  size,
  height,
  width,
  ...props
}: {
  size?: number;
  height?: number;
  width?: number;
  [key: string]: any;
}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8562 16.1858L14.8562 16.1858C14.8219 16.269 14.7885 16.3525 14.7562 16.4363C12.9685 17.0341 11.0314 17.034 9.24375 16.4362C9.21144 16.3524 9.17811 16.2689 9.14377 16.1858C9.04854 15.9554 9.00093 15.8401 8.91839 15.7337C8.83585 15.6273 8.69186 15.5193 8.40387 15.3033C6.94433 14.2089 6 12.4647 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.4647 17.0557 14.2089 15.5961 15.3033L15.5961 15.3034C15.3081 15.5193 15.1641 15.6273 15.0816 15.7337C14.9991 15.8401 14.9515 15.9554 14.8562 16.1858ZM9.85021 18.6664C9.93686 19.1932 9.98631 19.727 9.99753 20.2639C10.0006 20.4086 10.0817 20.5409 10.2111 20.6056C11.3373 21.1686 12.6627 21.1686 13.7889 20.6056C13.9183 20.5409 13.9994 20.4086 14.0025 20.2639C14.0137 19.727 14.0631 19.1933 14.1498 18.6665C12.7318 18.9573 11.2682 18.9573 9.85021 18.6664Z"
        fill="#EAB308"
      />
    </svg>
  );
};