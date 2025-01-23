import SurveyQa from "@/components/PreparationComps/SurveyQa";
import React from "react";

export default function page() {
  return (
    <SurveyQa
      progress={5.88*3}
      Question="How did you hear about FRINT?"
      ButtonQas1="Friend/Family"
      ButtonQas2="Social Media"
      ButtonQas3="Google Search"
      ButtonQas4="News/blog"
      nextPath="/introduction/step-1"
      backPath="/preparation/2"
    />
  );
}
