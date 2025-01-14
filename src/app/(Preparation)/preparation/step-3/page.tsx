import SurveyQa from "@/components/SurveyQa";
import React from "react";

export default function page() {
  return (
    <SurveyQa
      progress={90}
      Question="How did you hear about FRINT?"
      ButtonQas1="Friend/Family"
      ButtonQas2="Social Media"
      ButtonQas3="Google Search"
      ButtonQas4="News/blog"
      nextPath="/preparation/"
      backPath="/preparation/2"
    />
  );
}
