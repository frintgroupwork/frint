import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Assessing Adaptability and Problem-Solving Questions 8"
        main_question="What would you do if you were assigned a task that you didn’t know how to complete?"
        des="They want to see how you handle challenges. Explain how you’d research, ask for help, and learn to get the job done."
        progress={5.88 * 10}
        tip1="Problem-solving"
        tip2="Research"
        tip3="Learning"
        example=" “I’d start by researching online and reviewing documentation to gather insights. If needed, I’d consult colleagues or mentors for guidance. Once I understood the task, I’d create a plan to complete it efficiently.”"
        navigationPath="/problem-solving/step-2"
        backPath="/evaluating-skills/step-4"
      />
    </>
  );
}
