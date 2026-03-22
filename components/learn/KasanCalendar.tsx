export type CalendarEvent = {
  timing: string;
  label: string;
  additions: string[];
  color: string;
};

export type CalendarData = {
  heading: string;
  description?: string;
  events: CalendarEvent[];
};

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", dot: "bg-blue-500" },
  green: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", dot: "bg-rose-500" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", dot: "bg-violet-500" },
  gray: { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-600", dot: "bg-gray-400" },
};

export default function KasanCalendar({ data }: { data: CalendarData }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-900">{data.heading}</h3>
        {data.description && (
          <p className="text-[10px] text-gray-500 mt-0.5">{data.description}</p>
        )}
      </div>
      <div className="p-5">
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-4">
            {data.events.map((event, i) => {
              const colors = colorMap[event.color] || colorMap.gray;
              return (
                <div key={i} className="relative flex gap-4">
                  {/* ドット */}
                  <div className={`relative z-10 w-6 h-6 rounded-full ${colors.dot} flex items-center justify-center shrink-0 mt-0.5`}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-1">
                    <div className={`text-[10px] font-bold ${colors.text} mb-0.5`}>{event.timing}</div>
                    <div className="text-xs font-bold text-gray-900 mb-1">{event.label}</div>
                    <div className="flex flex-wrap gap-1">
                      {event.additions.map((add, j) => (
                        <span
                          key={j}
                          className={`text-[9px] ${colors.bg} ${colors.text} rounded px-1.5 py-0.5 font-medium border ${colors.border}`}
                        >
                          {add}
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
    </div>
  );
}
