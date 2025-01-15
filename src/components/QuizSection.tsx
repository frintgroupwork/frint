import React from "react";
import Section from "./Section";
import Image from "next/image";
import QuestionCounter from "./QuestionCounter";
import QuestionContent from "./QuestionContent";
import AnswerContent from "./AnswerContent";

function QuizSection() {

  // const answersData = [
  //   {
  //     id: 1,
  //     answer: ""
  //   }
  // ]

  return (
    <>
      <Section className="flex flex-row justify-between w-full h-screen">
        <div className="w-1/2 bg-[#1d4de8] relative h-full max-sm:hidden rounded-2xl">
          <Image
            alt="top-left"
            src={"quizbg/top-left.svg"}
            width={100}
            height={80}
            className="absolute top-0 left-0"
          />
          <Image
            alt="top-left"
            src={"quizbg/buttom-left.svg"}
            width={200}
            height={100}
            className="absolute bottom-0 left-0"
          />
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="absolute top-10">
              <QuestionCounter questionNumber={1} totalQuestions={6} />
            </div>
            <div className="w-[80%] mx-auto">
              <QuestionContent
                question={`How should you structure your response when asked, "Tell me about yourself"?`}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 max-sm:hidden">
          <Image
            alt="top-left"
            src={"quizbg/top-right.svg"}
            width={200}
            height={100}
            className="absolute top-0 right-0"
          />
          <Image
            alt="top-left"
            src={"quizbg/buttom-right.svg"}
            width={200}
            height={100}
            className="absolute bottom-0 right-0"
          />
          <div className="flex flex-col justify-center items-center h-screen ">
            <AnswerContent answer="Highlight your education, relevant experience, and career goals." variant="incorrect"/>
          </div>
        </div>
      </Section>
    </>
  );
}

export default QuizSection;
