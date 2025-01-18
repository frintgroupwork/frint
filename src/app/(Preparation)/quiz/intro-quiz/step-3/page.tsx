import QuizSection from "@/components/PreparationComps/QuizSection";
import React from "react";

function page() {
  return (
    <>
      <QuizSection
        answersData={[
          {
            answer:
              "Emphasize how this role aligns with your skills and aspirations.",
          },
          {
            answer:
              "Focus on what the company can do for you, like promotions or perks.",
          },
          { answer: "Avoid mentioning career goals altogether." },
          { answer: "Highlight unrelated ambitions to show versatility." },
        ]}
        correctAnswerId={1}
        questionNumber={3}
        totalQuestions={6}
        question={`When discussing your career goals, you should:`}
        nextPath="/quiz/intro-quiz/step-4"
      />
    </>
  );
}

export default page;
