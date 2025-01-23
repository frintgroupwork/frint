import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Soft Skill Questions 6"
        main_question="Tell me about a time you worked in a team. What role did you play, and what was the outcome?"
        des="Collaboration matters. Share an example where teamwork led to success and highlight your specific contributions."
        progress={5.88 * 8}
        tip1="Collaboration"
        tip2="Communication"
        tip3="Outcome"
        example="During a group project, I acted as the team lead, organizing tasks and ensuring open communication. When we faced a delay, I helped reassign tasks to meet the deadline. Our efforts resulted in a well-received presentation and an A grade."
        navigationPath="/evaluating-skills/step-4"
        backPath="/evaluating-skills/step-2"
      />
    </>
  );
}
