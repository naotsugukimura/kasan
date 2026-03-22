import { ServiceColorSet } from "@/lib/service-colors";
import type { RevenueItem } from "@/components/learn/RevenueTable";

type Props = {
  revenue?: RevenueItem[];
  colors?: ServiceColorSet;
};

export default function TopicSummaryBar({ revenue, colors }: Props) {
  if (!revenue || revenue.length === 0) return null;

  const easyCount = revenue.filter((r) => r.difficulty === "低").length;
  const midCount = revenue.filter((r) => r.difficulty === "中").length;
  const hardCount = revenue.filter((r) => r.difficulty === "高").length;
  const totalCount = revenue.length;

  const bgColor = colors?.light || "bg-blue-50";
  const borderColor = colors?.lightBorder || "border-blue-200";

  return (
    <div className={`${bgColor} ${borderColor} border rounded-xl p-4 mb-6`}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="text-center">
          <div className="text-[10px] text-gray-500 mb-0.5">加算の数</div>
          <div className="text-2xl font-bold text-gray-900">{totalCount}</div>
          <div className="text-[10px] text-gray-400">項目</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-gray-500 mb-0.5">取得しやすい</div>
          <div className="text-2xl font-bold text-emerald-600">{easyCount}</div>
          <div className="text-[10px] text-emerald-500">難易度 低</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-gray-500 mb-0.5">体制次第</div>
          <div className="text-2xl font-bold text-amber-600">{midCount}</div>
          <div className="text-[10px] text-amber-500">難易度 中</div>
        </div>
        <div className="text-center">
          <div className="text-[10px] text-gray-500 mb-0.5">高いハードル</div>
          <div className="text-2xl font-bold text-red-600">{hardCount}</div>
          <div className="text-[10px] text-red-500">難易度 高</div>
        </div>
      </div>
    </div>
  );
}
