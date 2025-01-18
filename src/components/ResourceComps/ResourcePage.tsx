import React from "react";
import JobComponent from "./JobComponent";


export default function ResourcePage() {
  return (
    <div className="w-[80%] flex mx-auto gap-4 justify-center flex-wrap h-full">
      <JobComponent navigate="/#" major="Quality Assurance" />
      <JobComponent navigate="/#" major="Web Devlopment" />
      <JobComponent navigate="/#" major="Mobile" />
      <JobComponent navigate="/#" major="Cyber Security" />
      <JobComponent navigate="/#" major="Data Science & Analytics" />
      <JobComponent navigate="/#" major="DevOps" />
    </div>
  );
}
