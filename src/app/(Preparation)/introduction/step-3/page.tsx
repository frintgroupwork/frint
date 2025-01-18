import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Introduction Questions 3 of 3"
        main_question="What do you know about our company?"
        des="This is your chance to show you’ve done your homework. Highlight key facts about their mission, values, or recent projects that resonate with you."
        progress={80}
        tip1="Values"
        tip2="Mission"
        tip3="Recent projects"
        example="I know that your company specializes in e-commerce platforms and recently launched an AI-driven feature for personalized shopping experiences. I’m impressed by your dedication to customer-centric innovation."
        navigationPath="/quiz"
      />
    </>
  );
}
