type Answer = {
    id?: number;
    answer: string;
  };
  
  type QuizSectionProps = {
    answersData: Answer[];
    correctAnswerId: number;
    questionNumber: number;
    totalQuestions: number;
    question: string;
    nextPath: string;
  };
  