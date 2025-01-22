import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Confidence and Handling Pressure Questions 10"
        main_question="If we asked you a question that you don’t know the answer to, how would you respond?"
        des="They value honesty and adaptability. Show how you’d stay calm, admit it, and explain how you’d find the right answer."
        progress={5.88 * 12}
        tip1="Honesty"
        tip2="Calmness"
        tip3="Research"
        example="“I’d admit that I don’t know the exact answer but would share how I’d approach finding it. For example, I’d research the topic or ask for clarification to ensure I provide the right solution.”"
        navigationPath="/problem-solving/step-4"
        backPath="/problem-solving/step-2"
      />
    </>
  );
}
