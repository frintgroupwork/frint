"use client";
import React, { useState } from "react";
import BackgroundTemplate from "./BackgroundTemplate";
import Section from "./Section";
import ButtonQa from "./ButtonQa";
import { Button, Progress } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SurveyQaProps {
  Question: string;
  ButtonQas1: string;
  ButtonQas2: string;
  ButtonQas3: string;
  ButtonQas4: string;
  progress: number;
  onContinue?: (selectedAnswer: string) => void;
  onBack?: () => void;
  nextPath?: string;
  backPath?: string;
}

const SurveyQa: React.FC<SurveyQaProps> = ({
  Question,
  ButtonQas1,
  ButtonQas2,
  ButtonQas3,
  ButtonQas4,
  progress,
  onContinue,
  onBack,
  nextPath,
  backPath,
}) => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      // If onContinue callback is provided, call it with the selected answer
      if (onContinue) {
        onContinue(selectedAnswer);
      }
      // If nextPath is provided, navigate to it
      if (nextPath) {
        router.push(nextPath);
      }
    }
  };

  const handleBack = () => {
    // If onBack callback is provided, call it
    if (onBack) {
      onBack();
    }
    // If backPath is provided, navigate to it
    if (backPath) {
      router.push(backPath);
    }
  };

  return (
    <>
      <BackgroundTemplate>
        <Section className="flex flex-col gap-2 md:gap-4 mt-10">
          <div>
            <Progress className="mx-auto max-sm:hidden" value={progress}  />
            {/* <Link href={}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33325 16L4.62615 15.2929L3.91904 16L4.62615 16.7071L5.33325 16ZM25.3333 17C25.8855 17 26.3333 16.5523 26.3333 16C26.3333 15.4477 25.8855 15 25.3333 15V17ZM12.6261 7.29289L4.62615 15.2929L6.04036 16.7071L14.0404 8.70711L12.6261 7.29289ZM4.62615 16.7071L12.6261 24.7071L14.0404 23.2929L6.04036 15.2929L4.62615 16.7071ZM5.33325 17H25.3333V15H5.33325V17Z"
                  fill="#0F172A"
                />
              </svg>
            </Link> */}
          </div>
          <div className="text-medium font-medium text-neutral-800 md:text-xl">
            {Question}
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
            <ButtonQa
              isSelected={selectedAnswer === ButtonQas1}
              onClick={() => handleSelection(ButtonQas1)}
            >
              {ButtonQas1}
            </ButtonQa>
            <ButtonQa
              isSelected={selectedAnswer === ButtonQas2}
              onClick={() => handleSelection(ButtonQas2)}
            >
              {ButtonQas2}
            </ButtonQa>
            <ButtonQa
              isSelected={selectedAnswer === ButtonQas3}
              onClick={() => handleSelection(ButtonQas3)}
            >
              {ButtonQas3}
            </ButtonQa>
            <ButtonQa
              isSelected={selectedAnswer === ButtonQas4}
              onClick={() => handleSelection(ButtonQas4)}
            >
              {ButtonQas4}
            </ButtonQa>
          </div>
          <div className="flex flex-row justify-between">
            <Button
              className="bg-white shadow-md font-medium text-[#1d4ed8]"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              color="primary"
              isDisabled={!selectedAnswer}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </Section>
      </BackgroundTemplate>
    </>
  );
};

export default SurveyQa;
