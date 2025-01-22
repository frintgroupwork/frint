import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Technical and Hard Skill Questions 4"
        main_question="Can you walk us through a project you’ve worked on that you’re proud of?"
        des="They want to see how you solve problems and deliver results. Choose a project where you made a real impact, and explain your role and its outcomes."
        progress={5.88 * 7}
        tip1="Problem-solving"
        tip2="Role and tools"
        tip3="Outcomes"
        example="I worked on a portfolio website project for a local artist. They needed an online presence to showcase their work. I used React and Tailwind CSS to create a responsive and visually appealing design, and incorporated a dynamic gallery feature. The site increased their reach and helped them secure new clients."
        navigationPath="/evaluating-skills/step-2"
        backPath="/evaluating-skills/step-1"
      />
    </>
  );
}
