import QuizSection from "@/components/PreparationComps/QuizSection";
import React from "react";

function page() {
  return (
    <>
      <QuizSection
        answersData={[
          { answer: "Focus on your hobbies and personal interests." },
          {
            answer:
              "Highlight your education, relevant experience, and career goals.",
          },
          { answer: "Mention your salary expectations." },
          { answer: "Talk about your family background." },
        ]}
        correctAnswerId={2}
        questionNumber={1}
        totalQuestions={6}
        question={`How should you structure your response when asked, "Tell me about yourself"?`}
        nextPath="/quiz/intro-quiz/step-2"
      />
    </>
  );
}

export default page;
