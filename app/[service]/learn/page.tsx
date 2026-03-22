import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, isValidService } from "@/data/services";

type Params = Promise<{ service: string }>;

export default async function LearnOverview({ params }: { params: Params }) {
  const { service: serviceId } = await params;
  if (!isValidService(serviceId)) notFound();

  const svc = getService(serviceId)!;

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">学習コンテンツ</h1>
      <p className="text-gray-600 mb-8">
        {svc.name}の加算を5つのテーマで学びます。上から順に読み進めると、体系的に理解できます。
      </p>

      <div className="space-y-4">
        {svc.topics.map((topic, i) => (
          <Link
            key={topic.id}
            href={`/${serviceId}/learn/${topic.id}`}
            className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-blue-500 font-bold text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl">{topic.icon}</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">{topic.label}</h2>
              <p className="text-sm text-gray-600 mt-1">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
