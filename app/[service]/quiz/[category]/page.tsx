"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { QuizQuestion, AnswerResult } from "@/lib/types";
import { shuffleQuestions, saveQuizResult } from "@/lib/quiz-utils";
import { getQuizQuestions } from "@/data/content-loader";
import { getService } from "@/data/services";
import ResultAnalysis from "@/components/quiz/ResultAnalysis";

export default function QuizSession() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.service as string;
  const category = params.category as string;
  const svc = getService(serviceId);

  const topicLabel = svc?.topics.find((t) => t.id === category)?.label
    || (category === "comprehensive" ? "総合問題" : category);

  const [allQuestions, setAllQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [sessionKey, setSessionKey] = useState(0);

  useEffect(() => {
    getQuizQuestions(serviceId).then((data) => {
      if (data) {
        setAllQuestions(data.questions);
      }
      setLoading(false);
    });
  }, [serviceId]);

  const questions = useMemo(() => {
    if (allQuestions.length === 0) return [];
    const filtered = category === "comprehensive"
      ? allQuestions
      : allQuestions.filter((q) => q.category === category);
    const limit = category === "comprehensive" ? 10 : 6;
    return shuffleQuestions(filtered, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allQuestions, category, sessionKey]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [finished, setFinished] = useState(false);

  const currentQuestion: QuizQuestion | undefined = questions[currentIndex];

  const handleAnswer = useCallback(() => {
    if (!selectedOption || !currentQuestion) return;
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setResults((prev) => [
      ...prev,
      { question: currentQuestion, selectedAnswer: selectedOption, isCorrect },
    ]);
    setShowResult(true);
  }, [selectedOption, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      saveQuizResult(
        category,
        results.filter((r) => r.isCorrect).length,
        questions.length,
        serviceId
      );
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [currentIndex, questions.length, results, category, serviceId]);

  const handleRetry = useCallback(() => {
    setSessionKey((k) => k + 1);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setResults([]);
    setFinished(false);
  }, []);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="animate-pulse text-gray-400">読み込み中...</div>
      </div>
    );
  }

  if (!currentQuestion && !finished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600">このカテゴリの問題が見つかりません。</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">{topicLabel} - 結果</h1>
        <ResultAnalysis
          results={results}
          onRetry={handleRetry}
          onBack={() => router.push(`/${serviceId}/quiz`)}
        />
      </div>
    );
  }

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-blue-700">{topicLabel}</h1>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-500 rounded-full h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-4">
        <p className="font-bold text-lg mb-6">
          Q{currentIndex + 1}. {currentQuestion!.question}
        </p>

        <div className="space-y-3">
          {currentQuestion!.options.map((option, i) => {
            let style = "border-gray-200 hover:border-blue-300 cursor-pointer";
            if (showResult) {
              if (option === currentQuestion!.correctAnswer) {
                style = "border-green-500 bg-green-50";
              } else if (
                option === selectedOption &&
                option !== currentQuestion!.correctAnswer
              ) {
                style = "border-red-500 bg-red-50";
              } else {
                style = "border-gray-200 opacity-50";
              }
            } else if (option === selectedOption) {
              style = "border-blue-500 bg-blue-50";
            }

            return (
              <button
                key={i}
                onClick={() => !showResult && setSelectedOption(option)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-xl border-2 transition-colors ${style}`}
              >
                <span className="text-sm">{option}</span>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="text-sm font-bold text-blue-700 mb-1">解説</p>
            <p className="text-sm text-blue-800">
              {currentQuestion!.explanation}
            </p>
          </div>
        )}
      </div>

      {!showResult ? (
        <button
          onClick={handleAnswer}
          disabled={!selectedOption}
          className={`w-full py-3 rounded-xl font-bold transition-colors ${
            selectedOption
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          回答する
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          {currentIndex + 1 >= questions.length ? "結果を見る" : "次の問題"}
        </button>
      )}
    </div>
  );
}
