"use client";
import React from "react";
import JobComponent from "./JobComponent";
import ResourceTitle from "./ResourceTitle";

export default function ResourcePage() {
  const ResourcePath = [
    { path: "/resource/qa", label: "Quality Assurance" },
    { path: "/resource/web-development", label: "Web Devlopment" },
    { path: "/resource/mobile", label: "Mobile" },
    { path: "/resource/cyber-security", label: "Cyber Security" },
    { path: "/resource/ds-da", label: "Data Science & Analytics" },
    { path: "/resource/devops", label: "DevOps" },
  ];
  return (
    <>
      <ResourceTitle />
    
      <div className="w-[80%] flex mx-auto gap-4 justify-center flex-wrap h-full m-4">

        {ResourcePath.map((item, index) => (
          <JobComponent key={index} navigate={item.path} major={item.label} />
        ))}
      </div>
      {/* <RolenSkills jobTitle="" role=""/> */}
    </>
  );
}
