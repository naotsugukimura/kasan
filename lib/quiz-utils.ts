import { QuizQuestion, QuizStats } from "./types";

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleQuestions(
  questions: QuizQuestion[],
  limit: number = 10
): QuizQuestion[] {
  const shuffled = shuffleArray(questions).slice(0, limit);
  return shuffled.map((q) => {
    const options = shuffleArray(q.options);
    const correctIndex = options.indexOf(q.correctAnswer);
    return { ...q, options, correctIndex };
  });
}

function getStorageKey(serviceId?: string): string {
  return serviceId
    ? `kasan-learning-quiz-stats-${serviceId}`
    : "kasan-learning-quiz-stats";
}

export function saveQuizResult(
  category: string,
  score: number,
  total: number,
  serviceId?: string
): void {
  if (typeof window === "undefined") return;
  const stats = getQuizStats(serviceId);
  const current = stats[category] || { attempts: 0, bestScore: 0 };
  const percentage = Math.round((score / total) * 100);
  stats[category] = {
    attempts: current.attempts + 1,
    bestScore: Math.max(current.bestScore, percentage),
    lastAttempt: new Date().toISOString(),
  };
  localStorage.setItem(getStorageKey(serviceId), JSON.stringify(stats));
}

export function getQuizStats(serviceId?: string): QuizStats {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(getStorageKey(serviceId)) || "{}");
  } catch {
    return {};
  }
}

export function getRank(percentage: number) {
  if (percentage >= 90)
    return { label: "S", message: "完璧！加算マスター", color: "yellow" };
  if (percentage >= 70)
    return { label: "A", message: "優秀！実務レベル", color: "green" };
  if (percentage >= 50)
    return { label: "B", message: "良好！復習推奨", color: "blue" };
  if (percentage >= 30)
    return { label: "C", message: "もう少し！基礎確認", color: "orange" };
  return { label: "D", message: "基礎固めが必要", color: "red" };
}
