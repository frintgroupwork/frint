"use client";
import React, { useState, useEffect } from "react";
import Section from "./Section";
import Image from "next/image";
import QuestionCounter from "./QuestionCounter";
import QuestionContent from "./QuestionContent";
import AnswerContent from "./AnswerContent";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const QuizSection: React.FC<QuizSectionProps> = ({
  answersData,
  correctAnswerId,
  questionNumber,
  totalQuestions,
  question,
  nextPath,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const router = useRouter();

  const enhancedAnswersData = answersData.map((item, index) => ({
    id: item.id ?? index + 1, // Auto-increment IDs if not provided
    answer: item.answer,
  }));

  // Load saved answer from localStorage on component mount
  useEffect(() => {
    const savedAnswer = localStorage.getItem("selectedAnswer");
    if (savedAnswer) {
      const parsedAnswer = JSON.parse(savedAnswer);
      setSelectedAnswer(parsedAnswer);
      setIsCorrect(parsedAnswer === correctAnswerId);
    }
  }, [correctAnswerId]);

  const handleAnswerClick = (id: number) => {
    setSelectedAnswer(id);
    setIsCorrect(id === correctAnswerId);
    localStorage.setItem("selectedAnswer", JSON.stringify(id));
  };

  const getAnswerVariant = (id: number) => {
    if (selectedAnswer === null) return "default";
    if (selectedAnswer === id) {
      return id === correctAnswerId ? "correct" : "incorrect";
    }
    return "default";
  };

  const handleNext = () => {
    if (isCorrect) {
      localStorage.removeItem("selectedAnswer"); // Clear the stored answer
      router.push(nextPath); // Navigate to the next page
    }
  };

  return (
    <Section className="flex flex-row justify-between w-full h-screen">
      <div className="w-1/2 bg-[#1d4de8] relative h-full max-sm:hidden rounded-2xl">
        <Image
          alt="top-left"
          src={"/quizbg/top-left.svg"}
          width={100}
          height={80}
          className="absolute top-0 left-0"
        />
        <Image
          alt="top-left"
          src={"/quizbg/buttom-left.svg"}
          width={200}
          height={100}
          className="absolute bottom-0 left-0"
        />
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="absolute top-10">
            <QuestionCounter
              questionNumber={questionNumber}
              totalQuestions={totalQuestions}
            />
          </div>
          <div className="w-[80%] mx-auto">
            <QuestionContent question={question} />
          </div>
        </div>
      </div>
      <div className="w-1/2 max-sm:hidden">
        <Image
          alt="top-left"
          src={"/quizbg/top-right.svg"}
          width={200}
          height={100}
          className="absolute top-0 right-0"
        />
        <Image
          alt="top-left"
          src={"/quizbg/buttom-right.svg"}
          width={200}
          height={100}
          className="absolute bottom-0 right-0"
        />
        <div className="flex flex-col justify-center items-center h-screen">
          <p className="absolute top-12 outline-dashed px-2 py-2 rounded-md outline-[#1d4ed8] text-[#1d4ed8] text-xs">
            Multiple Choice Question
          </p>
          <div className="flex flex-col gap-4">
            {enhancedAnswersData.map((item) => (
              <div key={item.id} onClick={() => handleAnswerClick(item.id!)}>
                <AnswerContent
                  answer={item.answer}
                  variant={getAnswerVariant(item.id!)}
                />
              </div>
            ))}
          </div>
          <Button
            color="primary"
            className="absolute bottom-14 right-14"
            isDisabled={!isCorrect}
            onPress={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
      <div className="block sm:hidden w-full h-screen">
        <Image
          alt="top-left"
          src={"/quizbg/top-left.svg"}
          width={60}
          height={80}
          className="absolute top-0 left-0 z-30"
        />
        <Image
          alt="top-left"
          src={"/quizbg/buttom-right.svg"}
          width={200}
          height={100}
          className="absolute bottom-0 right-0"
        />
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div className="bg-[#1d4ed8] absolute top-0 h-1/3 w-full flex justify-center items-center rounded-full rounded-t-none ">
            <div className="w-[80%]">
              <QuestionContent question={question} />
            </div>
          </div>
          <div className="w-[90%] pt-32 flex flex-col gap-2">
            {enhancedAnswersData.map((item) => (
              <div key={item.id} onClick={() => handleAnswerClick(item.id!)}>
                <AnswerContent
                  answer={item.answer}
                  variant={getAnswerVariant(item.id!)}
                />
              </div>
            ))}
            <Button
              color="primary"
              className="absolute max-sm:bottom-12 max-sm:right-14"
              isDisabled={!isCorrect}
              onPress={handleNext} // Trigger the handleNext function
            >
              Next Question
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default QuizSection;
