export type SimulationItem = {
  name: string;
  unitPerDay: number;
  monthlyAmount: number;
  color: string;
};

export type SimulationData = {
  heading: string;
  assumptions: string;
  items: SimulationItem[];
};

const barColors: Record<string, string> = {
  blue: "bg-blue-400",
  indigo: "bg-indigo-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  rose: "bg-rose-400",
  violet: "bg-violet-400",
  teal: "bg-teal-400",
  cyan: "bg-cyan-400",
};

export default function RevenueSimulator({ data }: { data: SimulationData }) {
  const maxAmount = Math.max(...data.items.map((i) => i.monthlyAmount), 1);
  const totalAmount = data.items.reduce((sum, i) => sum + i.monthlyAmount, 0);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-900">{data.heading}</h3>
        <p className="text-[10px] text-gray-500 mt-0.5">{data.assumptions}</p>
      </div>
      <div className="p-5">
        <div className="space-y-3">
          {data.items.map((item) => {
            const pct = Math.round((item.monthlyAmount / maxAmount) * 100);
            const barColor = barColors[item.color] || barColors.blue;
            return (
              <div key={item.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-700">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">{item.unitPerDay}単位/日</span>
                    <span className="text-xs font-bold text-gray-900">
                      {item.monthlyAmount.toFixed(1)}万円
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColor} transition-all duration-700`}
                    style={{ width: `${Math.max(pct, 3)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 合計 */}
        <div className="mt-4 pt-3 border-t-2 border-gray-200 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">加算合計</span>
          <div className="text-right">
            <span className="text-xl font-bold text-blue-700">
              +{totalAmount.toFixed(1)}万円
            </span>
            <span className="text-xs text-gray-500 ml-1">/月</span>
          </div>
        </div>
        <div className="mt-1 text-right">
          <span className="text-xs text-gray-400">
            年間 約{(totalAmount * 12).toFixed(0)}万円の加算収入
          </span>
        </div>
      </div>
    </div>
  );
}
