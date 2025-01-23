import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Professionalism and First Impressions 12"
        main_question="Why should we hire you over other candidates?"
        des="This is your chance to stand out. Highlight your unique strengths, enthusiasm, and how you can bring value to the team."
        progress={80}
        tip1="Unique strengths"
        tip2="Enthusiasm"
        tip3="Value"
        example="I bring a combination of technical skills and a proactive attitude. My experience in building responsive web applications, along with my eagerness to contribute to innovative projects, makes me a great fit for this role."
        navigationPath="/professionalism/step-2"
        backPath="/problem-solving/step-4"
      />
    </>
  );
}
