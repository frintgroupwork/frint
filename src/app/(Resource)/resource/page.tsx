import ResourcePage from "@/components/ResourceComps/ResourcePage";
import ResourceTitle from "@/components/ResourceComps/ResourceTitle";
import RolenSkills from "@/components/ResourceComps/RolenSkills";
import Section from "@/components/PreparationComps/Section";
import React from "react";

function page() {
  return (
    <>
      <ResourceTitle />
      {/* <ResourcePage/> */}
      <RolenSkills />
    </>
  );
}

export default page;
