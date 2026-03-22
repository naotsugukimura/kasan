export type TimelineSlot = {
  time: string;
  label: string;
  color: string;
  additions?: string[];
};

export type TimelineData = {
  heading: string;
  description?: string;
  slots: TimelineSlot[];
  alwaysActive?: string[];
};

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700" },
  green: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700" },
  gray: { bg: "bg-gray-50", border: "border-gray-300", text: "text-gray-600" },
  rose: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-700" },
  violet: { bg: "bg-violet-50", border: "border-violet-300", text: "text-violet-700" },
};

export default function DailyTimeline({ data }: { data: TimelineData }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-900">{data.heading}</h3>
        {data.description && (
          <p className="text-[10px] text-gray-500 mt-0.5">{data.description}</p>
        )}
      </div>
      <div className="p-5">
        {/* タイムライン */}
        <div className="relative">
          {/* 横線 */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />

          <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(${data.slots.length}, 1fr)` }}>
            {data.slots.map((slot, i) => {
              const colors = colorMap[slot.color] || colorMap.gray;
              return (
                <div key={i} className="relative flex flex-col items-center">
                  {/* 時刻 */}
                  <div className="text-[10px] font-mono text-gray-400 mb-1">{slot.time}</div>
                  {/* ドット */}
                  <div className={`w-3 h-3 rounded-full ${colors.border} border-2 bg-white z-10`} />
                  {/* ラベル */}
                  <div className={`mt-2 ${colors.bg} ${colors.border} border rounded-lg px-2 py-1.5 text-center w-full mx-0.5`}>
                    <div className={`text-[10px] font-bold ${colors.text}`}>{slot.label}</div>
                  </div>
                  {/* 加算タグ */}
                  {slot.additions && slot.additions.length > 0 && (
                    <div className="mt-1.5 space-y-1 w-full px-0.5">
                      {slot.additions.map((add, j) => (
                        <div
                          key={j}
                          className="text-[9px] bg-blue-50 text-blue-600 rounded px-1.5 py-0.5 text-center font-medium border border-blue-100"
                        >
                          {add}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 常時発生する加算 */}
        {data.alwaysActive && data.alwaysActive.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="text-[10px] font-bold text-gray-500 mb-1.5">常時・月単位で発生する加算</div>
            <div className="flex flex-wrap gap-1.5">
              {data.alwaysActive.map((item) => (
                <span
                  key={item}
                  className="text-[10px] bg-violet-50 text-violet-600 rounded-full px-2.5 py-0.5 font-medium border border-violet-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
