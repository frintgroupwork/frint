import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Introduction Questions 2"
        main_question="Why do you want to work with us?"
        des="Research the company and connect the role to your career aspirations."
        progress={5.88*5}
        tip1="Role alignment"
        tip2="Company research"
        tip3="Enthusiasm"
        example="I admire your company’s commitment to innovation, especially in creating accessible web solutions. As someone who values designing intuitive interfaces, I believe this role aligns perfectly with my skills and career goals."
        navigationPath="/introduction/step-3"
        backPath="/introduction/step-1"
      />
    </>
  );
}
