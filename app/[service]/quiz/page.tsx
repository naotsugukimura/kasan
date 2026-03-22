"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CategoryInfo, QuizStats } from "@/lib/types";
import { getQuizStats } from "@/lib/quiz-utils";
import { getService } from "@/data/services";

const colorByIndex = [
  "border-blue-200 hover:border-blue-400",
  "border-indigo-200 hover:border-indigo-400",
  "border-cyan-200 hover:border-cyan-400",
  "border-green-200 hover:border-green-400",
  "border-orange-200 hover:border-orange-400",
  "border-yellow-200 hover:border-yellow-400",
];

export default function QuizIndex() {
  const params = useParams();
  const serviceId = params.service as string;
  const svc = getService(serviceId);
  const [stats, setStats] = useState<QuizStats>({});

  useEffect(() => {
    setStats(getQuizStats(serviceId));
  }, [serviceId]);

  if (!svc) return null;

  const categories: CategoryInfo[] = [
    ...svc.topics.map((t, i) => ({
      id: t.id,
      name: t.label,
      description: t.description,
      icon: t.icon,
      color: colorByIndex[i] || colorByIndex[0],
    })),
    {
      id: "comprehensive",
      name: "総合問題",
      description: "全カテゴリからランダム出題",
      icon: "🏆",
      color: colorByIndex[5],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href={`/${serviceId}`} className="text-sm text-gray-500 hover:text-blue-600">
          ← {svc.name}トップ
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">クイズ — {svc.shortName}</h1>
      <p className="text-gray-600 mb-8">
        カテゴリを選んでクイズに挑戦しましょう。各6問（総合は10問）、ランク判定付きです。
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const stat = stats[cat.id];
          return (
            <Link
              key={cat.id}
              href={`/${serviceId}/quiz/${cat.id}`}
              className={`bg-white rounded-2xl p-6 shadow-sm border-2 ${cat.color} transition-all hover:shadow-md`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h2 className="font-bold text-lg mb-1">{cat.name}</h2>
              <p className="text-sm text-gray-600 mb-3">{cat.description}</p>
              {stat && (
                <div className="text-xs text-gray-500 space-y-0.5">
                  <div>最高スコア: {stat.bestScore}%</div>
                  <div>挑戦回数: {stat.attempts}回</div>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
