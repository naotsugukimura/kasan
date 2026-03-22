import Link from "next/link";
import { serviceList } from "@/data/services";

const colorMap: Record<string, string> = {
  blue: "border-blue-200 hover:border-blue-400 hover:bg-blue-50",
  indigo: "border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50",
  emerald: "border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50",
  rose: "border-rose-200 hover:border-rose-400 hover:bg-rose-50",
  amber: "border-amber-200 hover:border-amber-400 hover:bg-amber-50",
  teal: "border-teal-200 hover:border-teal-400 hover:bg-teal-50",
  violet: "border-violet-200 hover:border-violet-400 hover:bg-violet-50",
};

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          障害福祉サービス
          <span className="text-blue-600"> 加算</span>
          学習サイト
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          障害福祉サービス事業所の管理者・事務担当の方が、
          各種加算の要件・届出・算定方法を体系的に学べるサイトです。
          サービス種別を選んで学習を始めましょう。
        </p>
      </div>

      <h2 className="text-xl font-bold mb-4 text-gray-800">
        サービス種別を選択
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {serviceList.map((svc) => (
          <Link
            key={svc.id}
            href={`/${svc.id}`}
            className={`bg-white rounded-2xl p-6 shadow-sm border-2 ${colorMap[svc.color]} transition-all hover:shadow-md`}
          >
            <div className="text-4xl mb-3">{svc.icon}</div>
            <h3 className="text-lg font-bold mb-1">{svc.name}</h3>
            <p className="text-sm text-gray-600">{svc.description}</p>
          </Link>
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <h2 className="text-lg font-bold mb-3 text-blue-700">
          各サービスで学べること
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "加算の基本的な仕組みと届出の流れ",
            "サービス種別ごとの基礎報酬体系",
            "人員配置・専門職配置に関する加算の要件",
            "支援体制（医療連携・重度者支援）の加算",
            "実績・目標達成に関する加算の算定方法",
            "送迎・食事・処遇改善などの生活支援加算",
            "各加算の収益インパクトと取得難易度",
            "条件・記録・日々の支援の実践ガイド",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <span className="text-blue-500 shrink-0">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
