export type RevenueItem = {
  kasanName: string;
  unitPerDay: string;
  monthlyRevenue: string;
  frequency: string;
  difficulty: "低" | "中" | "高" | "―";
  difficultyNote?: string;
};

const difficultyConfig: Record<string, { bg: string; text: string; label: string }> = {
  "低": { bg: "bg-emerald-50", text: "text-emerald-700", label: "低" },
  "中": { bg: "bg-amber-50", text: "text-amber-700", label: "中" },
  "高": { bg: "bg-red-50", text: "text-red-700", label: "高" },
  "―": { bg: "bg-gray-50", text: "text-gray-400", label: "―" },
};

export default function RevenueTable({ items, note }: { items: RevenueItem[]; note?: string }) {
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const diff = difficultyConfig[item.difficulty];
        return (
          <div
            key={item.kasanName}
            className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-sm text-gray-900 truncate">{item.kasanName}</h4>
                  <span className={`shrink-0 inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${diff.bg} ${diff.text}`}>
                    難易度{diff.label}
                  </span>
                </div>
                {item.difficultyNote && (
                  <p className="text-xs text-gray-400 mb-2">{item.difficultyNote}</p>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span>{item.frequency}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-blue-700 font-mono font-bold text-sm">{item.unitPerDay}</div>
                <div className="text-gray-900 font-bold text-base mt-0.5">{item.monthlyRevenue}</div>
              </div>
            </div>
          </div>
        );
      })}
      <p className="text-[10px] text-gray-400 mt-2">
        {note || "※ 月額目安は定員20人・月22日稼働・地域単価10円で試算。実際は定員・稼働日数・地域区分により異なります。"}
      </p>
    </div>
  );
}
