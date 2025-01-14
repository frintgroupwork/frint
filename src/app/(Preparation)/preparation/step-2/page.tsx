import SurveyQa from "@/components/SurveyQa";
import React from "react";

export default function page() {
  return (
    <>
      <SurveyQa
        progress={60}
        Question="How many jobs or internship’s Interview have you attended?"
        ButtonQas1="None"
        ButtonQas2="1-3"
        ButtonQas3="4-6"
        ButtonQas4="More than 6"
        nextPath="/preparation/step-3"
        backPath="/preparation/step-2"
      />
    </>
  );
}
