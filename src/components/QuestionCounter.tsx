"use client";

import React from 'react';

interface Props {
  questionNumber: number;
  totalQuestions: number;
  className?: string
}

const QuestionCounter: React.FC<Props> = ({ questionNumber, totalQuestions, className}) => {
  return (
   
      <div className={`text-base text-white backdrop:blur-md bg-white/10 border-4 border-white/30 px-6 py-2 rounded-3xl ${className}`}>
        {`Questions ${questionNumber} of ${totalQuestions}`}
      </div>
  );
};

export default QuestionCounter;