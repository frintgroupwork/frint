import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Technical and Hard Skill Questions 11"
        main_question="How do you handle stressful situations or tight deadlines?"
        des="They’re looking for your approach to pressure. Mention strategies you use to stay organized and composed while meeting deadlines."
        progress={5.88 * 13}
        tip1="Prioritization"
        tip2="Time management"
        tip3="Composure"
        example="I prioritize tasks by urgency and importance, break them into smaller steps, and focus on one task at a time. Staying calm and communicating proactively with the team helps me manage stress effectively"
        navigationPath="/professionalism/step-1"
        backPath="/problem-solving/step-3"
      />
    </>
  );
}
