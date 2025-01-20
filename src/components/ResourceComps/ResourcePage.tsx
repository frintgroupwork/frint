import React from "react";
import JobComponent from "./JobComponent";
import ResourceTitle from "./ResourceTitle";

export default function ResourcePage() {
  const ResourcesData = [{}];
  return (
    <>
      <ResourceTitle />
      <div className="w-[80%] flex mx-auto gap-4 justify-center flex-wrap h-full m-4">
        <JobComponent navigate="/#" major="Quality Assurance" />
        <JobComponent navigate="/#" major="Web Devlopment" />
        <JobComponent navigate="/#" major="Mobile" />
        <JobComponent navigate="/#" major="Cyber Security" />
        <JobComponent navigate="/#" major="Data Science & Analytics" />
        <JobComponent navigate="/#" major="DevOps" />
      </div>
      {/* <RolenSkills jobTitle="" role=""/> */}
    </>
  );
}
