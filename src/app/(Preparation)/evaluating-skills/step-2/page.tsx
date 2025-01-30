import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
      
        step="Technical and Hard Skill Questions 5"
        main_question="How do you stay updated with the latest trends and technologies in your field?"
        des="This question is about your passion for growth. Mention how you keep learning, whether through courses, blogs, or communities."
        progress={5.88 * 8}
        tip1="Learning resources"
        tip2="Communities"
        tip3="Adaptability"
        example="I regularly follow blogs like Smashing Magazine and attend webinars hosted by industry leaders. I’m also active on GitHub and enjoy exploring open-source projects to learn from others."
        navigationPath="/evaluating-skills/step-3"
        backPath="/evaluating-skills/step-1"
      />
    </>
  );
}
