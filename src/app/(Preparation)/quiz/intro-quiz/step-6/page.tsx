import QuizSection from "@/components/PreparationComps/QuizSection";
import React from "react";

function page() {
  return (
    <>
      <QuizSection
        answersData={[
          {
            answer:
              "By mentioning the company’s recent projects or innovations.",
          },
          {
            answer: "By asking about salaries early in the interview.",
          },
          { answer: "By talking about personal unrelated goals." },
          {
            answer: "By focusing on other companies you’re interviewing with.",
          },
        ]}
        correctAnswerId={1}
        questionNumber={6}
        totalQuestions={6}
        question={`How can you effectively demonstrate your interest in a company during an interview?`}
        nextPath="/quiz/intro-quiz/final-step"
      />
    </>
  );
}

export default page;
