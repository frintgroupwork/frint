"use client"
import React from "react";
import Section from "./Section";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function QuizStarter() {

  const router = useRouter()

  const handleNext = () =>{
    router.push('/quiz/intro-quiz/step-1')
    }

  return (
  <Section className="flex flex-row justify-between w-full h-screen bg-[#F1F1F1]">
    <div className="w-[55%]  relative h-full max-sm:hidden bg-white rounded-2xl shadow-md">
    <Image
      alt="top-left"
      src={"quizbg/top-left2.svg"}
      width={100}
      height={80}
      className="absolute top-0 left-0"
    />
    <Image
      alt="top-left"
      src={"quizbg/buttom-left2.svg"}
      width={200}
      height={100}
      className="absolute bottom-0 -left-3"
    />
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-start w-[80%] ">
      <p className="text-2xl font-semibold text-neutral-800">
        Quizz Time!
      </p>
      <p className="text-neutral-500">
        Get ready to have fun and test your knowledge—it&apos;s all about
        learning, not measuring!
      </p>
      <Image
        alt="banner-quiz"
        src={"/quizbg/banner1.svg"}
        width={400}
        height={300}
      />
      </div>
    </div>
    </div>
    <div className="w-[40%] max-sm:hidden flex flex-col justify-evenly h-1/2 items-center my-auto">
    <div className="w-[90%] flex flex-col gap-2">
      <p className="text-neutral-500 text-sm font-medium">
      Before moving to the{" "}
      </p>
      <p className="text-2xl font-semibold text-neutral-800">
      Evaluating Skills Interview
      </p>
      <p className="text-neutral-500">
      we have a small piece of quiz for you to make sure you understand
      about the first interview process.
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-1 w-[80%]">
      <InforIcon />
      <p className="text-sm text-neutral-800">
        Pick the answer that makes the most sense to you—don&apos;t worry about
        getting it right or wrong!
      </p>
      </div>
      <div>
      <Button variant="solid" color="primary" className="shadow-md" onClick={handleNext}>
        Let&apos;s go
      </Button>
      </div>
    </div>
    </div>

    <div className="hidden max-sm:block">
    <div className="flex flex-col justify-center items-center h-screen">
    <Image
      alt="top-left"
      src={"quizbg/top-left2.svg"}
      width={100}
      height={80}
      className="absolute top-0 left-0"
    />
    <Image
      alt="top-left"
      src={"quizbg/buttom-left2.svg"}
      width={200}
      height={100}
      className="absolute bottom-0 -left-3"
    />
      <div className="flex flex-col justify-center items-start w-[80%] ">
      <p className="text-2xl font-semibold text-neutral-800">
        Quizz Time!
      </p>
      <p className="text-neutral-500">
        Get ready to have fun and test your knowledge—it&apos;s all about
        learning, not measuring!
      </p>
      </div>
      <div className="flex flex-col gap-2​ w-[80%] mx-auto pt-10">
      <div className="flex flex-row gap-4">
      <InforIcon />
      <p className="text-sm text-neutral-800">
        Pick the answer that makes the most sense to you—don&apos;t worry about
        getting it right or wrong!
      </p>
      </div>
      <div className="pt-4">
      <Button variant="solid" color="primary" className="shadow-md" onClick={handleNext}>
        Let&apos;s go
      </Button>
      </div>
    </div>
    </div>
    </div>
  </Section>
  );
}

export const InforIcon = ({
  size,
  height,
  width,
}: {
  size?: number;
  height?: number;
  width?: number;
}) => {
  return (
  <svg
    fill="none"
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM13 17V11H11V17H13Z"
    fill="#1D4ED8"
    />
  </svg>
  );
};
