import React from "react";
import BackgroundTemplate from "./BackgroundTemplate";
import Section from "./Section";
import ButtonQa from "./ButtonQa";
import { Button, Progress } from "@nextui-org/react";

const SurveyQa = ({
  Question,
  ButtonQas1,
  ButtonQas2,
  ButtonQas3,
  ButtonQas4,
  progress,
}: {
  Question: string;
  ButtonQas1: string;
  ButtonQas2: string;
  ButtonQas3: string;
  ButtonQas4: string;
  progress: number;
}) => {
  return (
    <>
      <BackgroundTemplate>
        <Section className="flex flex-col gap-2 md:gap-4 mt-10">
          <Progress className="mx-auto max-sm:hidden" value={progress} />
          <div className="text-medium font-medium text-neutral-800 md:text-xl">
            {Question}
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
            <ButtonQa children={ButtonQas1} />
            <ButtonQa children={ButtonQas2} />
            <ButtonQa children={ButtonQas3} />
            <ButtonQa children={ButtonQas4} />
          </div>
          <div className="flex flex-row justify-between">
            <Button className="bg-white shadow-md font-medium text-[#1d4ed8]" >
              Back
            </Button>
            <Button color="primary">Continue</Button>
          </div>
        </Section>
      </BackgroundTemplate>
    </>
  );
};

export default SurveyQa;
