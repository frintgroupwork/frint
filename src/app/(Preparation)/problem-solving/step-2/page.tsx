import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Assessing Adaptability and Problem-Solving Questions 9"
        main_question="Tell me about a time you failed or made a mistake. What did you learn from the experience?"
        des="This is about growth and accountability. Share what went wrong, what you learned, and how you improved moving forward."
        progress={5.88 * 11}
        tip1="Mistake"
        tip2="Lesson learned"
        tip3="Improvement"
        example="  “In one project, I underestimated the time needed to test a feature, which caused a delay. Since then, I’ve adopted better time management practices, including allocating buffer time for unexpected challenges.”"
        navigationPath="/problem-solving/step-3"
        backPath="/problem-solving/step-1"
      />
    </>
  );
}
