// 学習コンテンツ用の型定義

export type TermDefinition = {
  term: string;
  reading?: string;
  definition: string;
  example?: string;
};

export type ContentSection = {
  title: string;
  content: string;
};

export type FlowStep = {
  step: number;
  title: string;
  description: string;
  actors: string[];
  color: string;
};

export type RequirementItem = {
  category: string;
  items: string[];
  color: string;
};

// クイズ用の型定義

export type QuizQuestion = {
  id: string;
  type: "multiple_choice";
  category:
    | "kasan-basics"
    | "staffing"
    | "support-system"
    | "performance"
    | "daily-support"
    | "comprehensive";
  question: string;
  options: string[];
  correctAnswer: string;
  correctIndex?: number;
  explanation: string;
  tags?: string[];
};

export type AnswerResult = {
  question: QuizQuestion;
  selectedAnswer: string;
  isCorrect: boolean;
};

export type QuizStats = {
  [category: string]: {
    attempts: number;
    bestScore: number;
    lastAttempt: string;
  };
};

export type CategoryInfo = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
};
