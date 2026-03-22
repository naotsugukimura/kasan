export type ComparisonGroup = {
  title: string;
  items: {
    label: string;
    value: number;
    unit: string;
    note?: string;
    highlight?: boolean;
  }[];
};

export type ComparisonData = {
  heading: string;
  groups: ComparisonGroup[];
};

export default function KasanComparisonCard({ data }: { data: ComparisonData }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-900">{data.heading}</h3>
      </div>
      <div className="p-5 space-y-5">
        {data.groups.map((group) => {
          const maxValue = Math.max(...group.items.map((i) => i.value), 1);
          return (
            <div key={group.title}>
              <div className="text-xs font-bold text-gray-500 mb-2">{group.title}</div>
              <div className="space-y-2">
                {group.items.map((item) => {
                  const pct = Math.round((item.value / maxValue) * 100);
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-28 sm:w-36 shrink-0">
                        <div className={`text-xs font-medium ${item.highlight ? "text-blue-700" : "text-gray-700"}`}>
                          {item.label}
                        </div>
                        {item.note && (
                          <div className="text-[10px] text-gray-400">{item.note}</div>
                        )}
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              item.highlight
                                ? "bg-blue-500"
                                : item.value === 0
                                ? "bg-gray-300"
                                : "bg-blue-300"
                            }`}
                            style={{ width: `${Math.max(pct, 2)}%` }}
                          />
                        </div>
                        <span className={`text-xs font-bold w-16 text-right shrink-0 ${
                          item.highlight ? "text-blue-700" : "text-gray-600"
                        }`}>
                          {item.value}{item.unit}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
