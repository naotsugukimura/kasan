"use client";

import { AnswerResult } from "@/lib/types";
import { getRank } from "@/lib/quiz-utils";

export default function ResultAnalysis({
  results,
  onRetry,
  onBack,
}: {
  results: AnswerResult[];
  onRetry: () => void;
  onBack: () => void;
}) {
  const correct = results.filter((r) => r.isCorrect).length;
  const total = results.length;
  const percentage = Math.round((correct / total) * 100);
  const rank = getRank(percentage);

  const tagStats: Record<string, { correct: number; total: number }> = {};
  results.forEach((r) => {
    const tags = r.question.tags || ["その他"];
    tags.forEach((tag) => {
      if (!tagStats[tag]) tagStats[tag] = { correct: 0, total: 0 };
      tagStats[tag].total++;
      if (r.isCorrect) tagStats[tag].correct++;
    });
  });

  const rankColorMap: Record<string, string> = {
    yellow: "from-yellow-400 to-amber-500",
    green: "from-green-400 to-emerald-500",
    blue: "from-blue-400 to-cyan-500",
    orange: "from-orange-400 to-amber-500",
    red: "from-red-400 to-rose-500",
  };

  return (
    <div className="space-y-6">
      <div
        className={`bg-gradient-to-br ${rankColorMap[rank.color]} text-white rounded-2xl p-8 text-center shadow-lg`}
      >
        <div className="text-6xl font-black mb-2">{rank.label}</div>
        <div className="text-xl font-bold mb-1">{rank.message}</div>
        <div className="text-lg opacity-90">
          {correct} / {total} 問正解（{percentage}%）
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>正解率</span>
          <span>{percentage}%</span>
        </div>
        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-500 rounded-full h-3 transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <h3 className="font-bold mb-3">分野別スコア</h3>
        <div className="space-y-2">
          {Object.entries(tagStats).map(([tag, stat]) => {
            const pct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div key={tag} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-28 shrink-0">
                  {tag}
                </span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${pct >= 70 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-400"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-16 text-right">
                  {stat.correct}/{stat.total}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold">回答一覧</h3>
        {results.map((r, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 border ${r.isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
          >
            <div className="flex items-start gap-2">
              <span
                className={`text-lg ${r.isCorrect ? "text-green-600" : "text-red-500"}`}
              >
                {r.isCorrect ? "○" : "×"}
              </span>
              <div className="flex-1">
                <p className="font-medium text-sm mb-1">
                  Q{i + 1}. {r.question.question}
                </p>
                {!r.isCorrect && (
                  <p className="text-xs text-red-600 mb-1">
                    あなたの回答: {r.selectedAnswer}
                  </p>
                )}
                <p className="text-xs text-green-700">
                  正解: {r.question.correctAnswer}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {r.question.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          もう一度
        </button>
        <button
          onClick={onBack}
          className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-colors"
        >
          他のカテゴリ
        </button>
      </div>
    </div>
  );
}
