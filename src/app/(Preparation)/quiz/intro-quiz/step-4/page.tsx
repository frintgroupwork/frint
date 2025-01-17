import QuizSection from "@/components/QuizSection";
import React from "react";

function page() {
  return (
    <>
      <QuizSection
        answersData={[
          { answer: "It helps to fill time during the interview." },
          {
            answer:
              "It proves that you can handle unrelated tasks.",
          },
          { answer: "It shows your ability to talk about yourself." },
          { answer: "It demonstrates how your background aligns with the role." },
        ]}
        correctAnswerId={4}
        questionNumber={4}
        totalQuestions={6}
        question={`When answering "Tell me about yourself," why is it important to include relevant experience?`}
        nextPath="/quiz/intro-quiz/step-5"
      />
    </>
  );
}

export default page;
