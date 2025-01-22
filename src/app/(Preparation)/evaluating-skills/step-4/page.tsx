import InterviewSession from "@/components/PreparationComps/InterviewSession";
import React from "react";

export default function page() {
  return (
    <>
      <InterviewSession
        step="Soft Skill Questions 7"
        main_question="Describe a time you faced a conflict at work or school. How did you resolve it?"
        des="They’re testing your communication and problem-solving skills. Talk about how you handled the conflict and worked toward a positive solution."
        progress={5.88 * 9}
        tip1="Conflict"
        tip2="Resolution"
        tip3="Learning"
        example="“In a group project, a teammate disagreed on the approach for a key feature. I listened to their concerns, explained my perspective, and suggested we prototype both ideas for comparison. This approach led to a better solution and strengthened our collaboration.”"
        navigationPath="/problem-solving/step-1"
        backPath="/evaluating-skills/step-3"
      />
    </>
  );
}
