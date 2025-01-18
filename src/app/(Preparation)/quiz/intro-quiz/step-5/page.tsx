import QuizSection from "@/components/PreparationComps/QuizSection";
import React from "react";

function page() {
  return (
    <>
      <QuizSection
        answersData={[
          {
            answer:
              "I’m looking for a role that pays well and offers great benefits.",
          },
          {
            answer:
              "I admire your company’s commitment to innovation, especially in creating accessible web solutions.",
          },
          { answer: "This role seems easy, so I think I’ll do well in it." },
          {
            answer:
              "I don’t know much about this role, but I’m willing to try.",
          },
        ]}
        correctAnswerId={2}
        questionNumber={5}
        totalQuestions={6}
        question={`Which of the following is a strong example of answering "Why are you interested in this role?"`}
        nextPath="/quiz/intro-quiz/step-6"
      />
    </>
  );
}

export default page;
