"use client"
import React, { useState } from "react";
import BackgroundTemplate from "./BackgroundTemplate";
import Section from "./Section";
import ButtonQa from "./ButtonQa";
import { Button, Progress } from "@nextui-org/react";
import { useRouter } from "next/navigation";

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
          <Progress className="mx-auto max-sm:hidden" value={progress} />
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