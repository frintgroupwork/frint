import QuizSection from "@/components/QuizSection";
import React from "react";

function page() {
  return (
    <>
      <QuizSection
        answersData={[
          { answer: "To make a good impression and connect the role to your career aspirations." },
          {
            answer:
              "To know what salary to negotiate for.",
          },
          { answer: "To find out if the company has free coffee." },
          { answer: "To memorize the company’s employee names." },
        ]}
        correctAnswerId={1}
        questionNumber={2}
        totalQuestions={6}
        question={`Why is it important to research the company before answering "Why are you interested in this role"?`}
        nextPath="/quiz/intro-quiz/step-3"
      />
    </>
  );
}

export default page;
