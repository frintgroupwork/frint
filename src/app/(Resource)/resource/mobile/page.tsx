import ResourceTitle from "@/components/ResourceComps/ResourceTitle";
import RolenSkills from "@/components/ResourceComps/RolenSkills";
import Skills from "@/components/ResourceComps/Skills";
import Link from "next/link";
import React from "react";

export default function page() {
  const role = [
    "QA Analyst / Tester",
    "QA Engineer",
    "Test Automation Engineer",
    "QA Manager",
    "Performance Tester",
  ];
  const items = [
    "Testing Methodologies (Manual, Automation, Performance)",
    "Test Case Design & Execution",
    "Tools: Selenium, JIRA, Postman, Appium",
    "Bug Tracking and Reporting",
    "Basic Programming (e.g., Java, Python)",
    "Knowledge of SDLC & STLC",
    "Communication & Collaboration",
    "Strong Analytical Skills",
    "API Testing & Tools",
  ];

  return (
    <>
      <ResourceTitle />
      <div className="w-[80%] flex justify-end pt-6">
      <Link href={"/resource"}>
        <svg
          width="42"
          height="42"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="62" height="62" rx="31" fill="#1D4ED8" />
          <path
            d="M20.3334 25.6673L19.6263 26.3744L18.9192 25.6673L19.6263 24.9602L20.3334 25.6673ZM27 41.334C26.4478 41.334 26 40.8863 26 40.334C26 39.7817 26.4478 39.334 27 39.334L27 41.334ZM26.2929 33.0411L19.6263 26.3744L21.0405 24.9602L27.7071 31.6269L26.2929 33.0411ZM19.6263 24.9602L26.2929 18.2935L27.7071 19.7078L21.0405 26.3744L19.6263 24.9602ZM20.3334 24.6673L34.3334 24.6673L34.3334 26.6673L20.3334 26.6673L20.3334 24.6673ZM34.3334 41.334L27 41.334L27 39.334L34.3334 39.334L34.3334 41.334ZM42.6667 33.0006C42.6667 37.603 38.9357 41.334 34.3334 41.334L34.3334 39.334C37.8312 39.334 40.6667 36.4985 40.6667 33.0006L42.6667 33.0006ZM34.3334 24.6673C38.9357 24.6673 42.6667 28.3983 42.6667 33.0006L40.6667 33.0006C40.6667 29.5028 37.8312 26.6673 34.3334 26.6673L34.3334 24.6673Z"
            fill="white"
          />
        </svg>
      </Link>
      </div>
      <RolenSkills jobTitle="Qualative Assurance" role={role} />
      <Skills items={items} />
    </>
  );
}
