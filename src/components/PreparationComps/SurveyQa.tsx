"use client";
import React, { useState } from "react";
import BackgroundTemplate from "./BackgroundTemplate";
import Section from "./Section";
import ButtonQa from "./ButtonQa";
import { Button, Progress, Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FileText, Menu } from "lucide-react";

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
  currentQuestionIndex?: number;
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const sections = [
    {
      title: "Introduction Questions",
      questions: [
        { text: "Tell me about yourself", path: "/introduction/step-1" },
        { text: "Why do you want to work with us?", path: "/introduction/step-2" },
        { text: "What do you know about our company?", path: "/introduction/step-3" }
      ]
    },
    {
      title: "Technical and Hard Skill Questions",
      questions: [
        { text: "Can you walk us through a project you've worked on that you're proud of?", path: "/evaluating-skills/step-1" },
        { text: "How do you stay updated with the latest trends and technologies in your field?", path: "/evaluating-skills/step-2" },
        { text: "Tell me about a time you worked in a team. What role did you play, and what was the outcome?", path: "/evaluating-skills/step-3" },
        { text: "Describe a time you faced a conflict at work or school. How did you resolve it?", path: "/evaluating-skills/step-4" }
      ]
    },
    {
      title: "Assessing Adaptability and Problem-Solving",
      questions: [
        { text: "What would you do if you were assigned a task that you didn't know how to complete?", path: "/problem-solving/step-1" },
        { text: "Tell me about a time you failed or made a mistake. What did you learn from the experience?", path: "/problem-solving/step-2" },
        { text: "If we asked you a question that you don't know the answer to, how would you respond?", path: "/problem-solving/step-3" },
        { text: "How do you handle stressful situations or tight deadlines?", path: "/problem-solving/step-4" }
      ]
    },
    {
      title: "Professionalism and First Impressions",
      questions: [
        { text: "Why should we hire you over other candidates?", path: "/professionalism/step-1" },
        { text: "Where do you see yourself in five years?", path: "/professionalism/step-2" },
        { text: "Do you have any questions for us?", path: "/professionalism/step-3" },
      ]
    }
  ];

  const handleSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      if (onContinue) {
        onContinue(selectedAnswer);
      }
      if (nextPath) {
        router.push(nextPath);
      }
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
    if (backPath) {
      router.push(backPath);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <BackgroundTemplate>
      <div className="flex flex-row gap-4 w-[80%] mx-auto pt-10 max-sm:flex-col">
        {/* Sidebar for larger screens */}
        <div className="w-[30%] h-[calc(100vh-100px)] overflow-y-auto border rounded-lg bg-white shadow-sm max-sm:hidden ">
          <div className="flex flex-col gap-6 p-4">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col gap-2">
                <h3 className="text-neutral-400 text-sm font-medium pl-2">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {section.questions.map((question, qIndex) => {
                    const isCurrentQuestion = question.path === pathname;
                    return (
                      <Link
                        key={qIndex}
                        href={question.path}
                        className={`flex items-start gap-2 p-2 rounded-lg transition-all duration-200 group
                          ${isCurrentQuestion 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-neutral-800 hover:bg-neutral-50'}`}
                      >
                        <FileText 
                          className={`w-5 h-5 mt-0.5 ${
                            isCurrentQuestion 
                              ? 'text-blue-600' 
                              : 'text-neutral-700 group-hover:text-blue-600'
                          }`} 
                        />
                        <span className={`text-sm leading-tight ${
                          isCurrentQuestion 
                            ? 'text-blue-600' 
                            : 'group-hover:text-blue-600'
                        }`}>
                          {question.text}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dropdown button for small screens */}
        <div className="sm:hidden w-full" >
          <Button
            className="w-full mb-4"
            onClick={toggleDropdown}
            startContent={<Menu className="w-5 h-5" />}
            color="primary"
          >
            Questions
          </Button>
        </div>

        {/* Main content */}
        <Section className="w-[70%] max-sm:w-full flex flex-col gap-2 md:gap-4">
          <div>
            <Progress 
              className="mx-auto max-sm:hidden" 
              value={progress} 
              label="Survey Questions"
            />
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
      </div>

      {/* Dropdown modal for small screens */}
      <Modal isOpen={isDropdownOpen} onClose={toggleDropdown} size="full">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Questions</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-6 p-4">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-2">
                  <h3 className="text-neutral-400 text-sm font-medium pl-2">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {section.questions.map((question, qIndex) => {
                      const isCurrentQuestion = question.path === pathname;
                      return (
                        <Link
                          key={qIndex}
                          href={question.path}
                          className={`flex items-start gap-2 p-2 rounded-lg transition-all duration-200 group
                            ${isCurrentQuestion 
                              ? 'bg-blue-50 text-blue-600' 
                              : 'text-neutral-800 hover:bg-neutral-50'}`}
                          onClick={toggleDropdown}
                        >
                          <FileText 
                            className={`w-5 h-5 mt-0.5 ${
                              isCurrentQuestion 
                                ? 'text-blue-600' 
                                : 'text-neutral-700 group-hover:text-blue-600'
                            }`} 
                          />
                          <span className={`text-sm leading-tight ${
                            isCurrentQuestion 
                              ? 'text-blue-600' 
                              : 'group-hover:text-blue-600'
                          }`}>
                            {question.text}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </BackgroundTemplate>
  );
};

export default SurveyQa;