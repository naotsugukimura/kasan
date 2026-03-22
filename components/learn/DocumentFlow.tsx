export type FlowStep = {
  step: number;
  title: string;
  description: string;
  documents: string[];
  color: string;
};

export type DocumentFlowData = {
  heading: string;
  description?: string;
  steps: FlowStep[];
};

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700" },
  green: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700" },
  rose: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-700" },
  violet: { bg: "bg-violet-50", border: "border-violet-300", text: "text-violet-700" },
  gray: { bg: "bg-gray-50", border: "border-gray-300", text: "text-gray-600" },
};

export default function DocumentFlow({ data }: { data: DocumentFlowData }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-900">{data.heading}</h3>
        {data.description && (
          <p className="text-[10px] text-gray-500 mt-0.5">{data.description}</p>
        )}
      </div>
      <div className="p-5">
        <div className="space-y-0">
          {data.steps.map((step, i) => {
            const colors = colorMap[step.color] || colorMap.gray;
            const isLast = i === data.steps.length - 1;
            return (
              <div key={step.step} className="flex gap-3">
                {/* ステップ番号 + 縦線 */}
                <div className="flex flex-col items-center">
                  <div className={`w-7 h-7 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center shrink-0`}>
                    <span className={`text-[10px] font-bold ${colors.text}`}>{step.step}</span>
                  </div>
                  {!isLast && <div className="w-0.5 flex-1 bg-gray-200 my-1" />}
                </div>

                {/* コンテンツ */}
                <div className={`flex-1 ${isLast ? "pb-0" : "pb-4"}`}>
                  <div className="text-xs font-bold text-gray-900 mb-0.5">{step.title}</div>
                  <div className="text-[10px] text-gray-600 mb-1.5">{step.description}</div>
                  <div className="flex flex-wrap gap-1">
                    {step.documents.map((doc) => (
                      <span
                        key={doc}
                        className={`text-[9px] ${colors.bg} ${colors.text} rounded px-1.5 py-0.5 font-medium border ${colors.border}`}
                      >
                        📄 {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
