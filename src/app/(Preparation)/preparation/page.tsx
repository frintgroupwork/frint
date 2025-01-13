import BackgroundTemplate from "@/components/BackgroundTemplate";
import SurveyQa from "@/components/SurveyQa";
import { Progress } from "@nextui-org/react";
import React from "react";

export default function page() {
  return (
    <>
      {/* <BackgroundTemplate>
        <Progress aria-label="Loading..." className="max-w-md" value={60} />
        page
      </BackgroundTemplate> */}
      <SurveyQa
        ButtonQas1="Computer Science"
        ButtonQas2="Software Engineering"
        ButtonQas3="Information Technology"
        ButtonQas4="Other"
        Question="What is your field of study?"
        progress={10}
      />
    </>
  );
}
