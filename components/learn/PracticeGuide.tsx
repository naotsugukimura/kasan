export type PracticeItem = {
  kasanName: string;
  conditions: string[];
  records: string[];
  practice: string[];
  color: string;
};

const columns = [
  { key: "conditions" as const, label: "条件", sub: "何を満たすか", badge: "bg-blue-50 text-blue-700", dot: "text-blue-300" },
  { key: "records" as const, label: "記録", sub: "何を残すか", badge: "bg-amber-50 text-amber-700", dot: "text-amber-300" },
  { key: "practice" as const, label: "支援", sub: "何をするか", badge: "bg-emerald-50 text-emerald-700", dot: "text-emerald-300" },
];

export default function PracticeGuide({ items }: { items: PracticeItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.kasanName}
          className={`bg-white rounded-xl border-l-4 ${item.color} border border-gray-100 shadow-sm overflow-hidden`}
        >
          <div className="px-5 py-3 bg-gray-50/70 border-b border-gray-100">
            <h4 className="font-bold text-sm text-gray-900">{item.kasanName}</h4>
          </div>
          <div className="p-4 grid sm:grid-cols-3 gap-4">
            {columns.map((col) => (
              <div key={col.key}>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${col.badge}`}>
                    {col.label}
                  </span>
                  <span className="text-[10px] text-gray-400">{col.sub}</span>
                </div>
                <ul className="space-y-1.5">
                  {item[col.key].map((text, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-600 flex items-start gap-1.5 leading-relaxed"
                    >
                      <span className={`${col.dot} shrink-0 mt-0.5`}>●</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
