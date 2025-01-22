import SurveyQa from "@/components/PreparationComps/SurveyQa";
import React from "react";

export default function page() {
  return (
    <>
      <SurveyQa
        progress={5.88}
        Question="What is your field of study?"
        ButtonQas1="Computer Science"
        ButtonQas2="Software Engineering"
        ButtonQas3="Information Technology"
        ButtonQas4="Other"
        nextPath="/preparation/step-2"
        backPath="/preparation"
      />
    </>
  );
}
