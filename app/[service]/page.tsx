import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, isValidService } from "@/data/services";

const colorMap: Record<string, { card: string; badge: string }> = {
  blue: { card: "border-blue-200 hover:border-blue-400", badge: "bg-blue-500" },
  indigo: { card: "border-indigo-200 hover:border-indigo-400", badge: "bg-indigo-500" },
  emerald: { card: "border-emerald-200 hover:border-emerald-400", badge: "bg-emerald-500" },
  rose: { card: "border-rose-200 hover:border-rose-400", badge: "bg-rose-500" },
  amber: { card: "border-amber-200 hover:border-amber-400", badge: "bg-amber-500" },
  teal: { card: "border-teal-200 hover:border-teal-400", badge: "bg-teal-500" },
  violet: { card: "border-violet-200 hover:border-violet-400", badge: "bg-violet-500" },
};

type Params = Promise<{ service: string }>;

export default async function ServiceHome({ params }: { params: Params }) {
  const { service: serviceId } = await params;
  if (!isValidService(serviceId)) notFound();

  const svc = getService(serviceId)!;
  const colors = colorMap[svc.color];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-4">
        <Link href="/" className="text-sm text-gray-500 hover:text-blue-600">
          ← サービス選択に戻る
        </Link>
      </div>

      <div className="text-center mb-10">
        <div className="text-5xl mb-3">{svc.icon}</div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          {svc.name}
          <span className="text-blue-600"> 加算</span>学習
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{svc.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <Link
          href={`/${serviceId}/learn`}
          className={`bg-white rounded-2xl p-8 shadow-sm border-2 ${colors.card} transition-all hover:shadow-md`}
        >
          <div className="text-4xl mb-3">📖</div>
          <h2 className="text-xl font-bold mb-2">学ぶ</h2>
          <p className="text-gray-600 text-sm">
            {svc.name}の加算を5つのカテゴリで体系的に学習
          </p>
        </Link>
        <Link
          href={`/${serviceId}/quiz`}
          className={`bg-white rounded-2xl p-8 shadow-sm border-2 ${colors.card} transition-all hover:shadow-md`}
        >
          <div className="text-4xl mb-3">✏️</div>
          <h2 className="text-xl font-bold mb-2">クイズ</h2>
          <p className="text-gray-600 text-sm">
            5つのカテゴリ+総合問題で知識を確認。ランク判定付き
          </p>
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold mb-4">学習カテゴリ</h2>
        <div className="space-y-3">
          {svc.topics.map((topic, i) => (
            <Link
              key={topic.id}
              href={`/${serviceId}/learn/${topic.id}`}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <span className={`${colors.badge} text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0`}>
                {i + 1}
              </span>
              <div>
                <div className="font-bold">{topic.icon} {topic.label}</div>
                <div className="text-sm text-gray-600">{topic.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
