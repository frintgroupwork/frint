import InterviewSession from "@/components/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Introduction Questions 1 of 3"
        main_question="Tell me about yourself."
        des="They want to understand your professional background and career goals, so prepare a clear summary of your relevant experience, education, and aspirations."
        progress={10}
        tip1="Professional background"
        tip2="Relevant experience"
        tip3="Career goals"
        example="I recently graduated with a degree in Computer Science, where I focused on front-end development. During my studies, I completed a full-stack project using Next.js and MongoDB, which improved my problem-solving and teamwork skills. I’m passionate about building user-friendly web applications and am excited about opportunities to grow in this field."
        navigationPath="/introduction/step-2"
      />
    </>
  );
}
