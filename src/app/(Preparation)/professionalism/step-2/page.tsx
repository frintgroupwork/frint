import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Professionalism and First Impressions 13"
        main_question="Where do you see yourself in five years?"
        des="They want to know your career vision. Share realistic goals that align with the company’s growth and opportunities"
        progress={90}
        tip1="Growth"
        tip2="Alignment"
        tip3="Ambition"
        example="I bring a combination of technical skills and a proactive attitude. My experience in building responsive web applications, along with my eagerness to contribute to innovative projects, makes me a great fit for this role."
        navigationPath="/professionalism/step-3"
        backPath="/professionalism/step-1"
      />
    </>
  );
}
