export type StaffRole = {
  role: string;
  count: string;
  requirement: string;
  relatedKasan: string[];
  color: string;
};

export type StaffingMapData = {
  heading: string;
  description?: string;
  baseRequirement: string;
  roles: StaffRole[];
};

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700" },
  green: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700" },
  amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700" },
  rose: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-700" },
  violet: { bg: "bg-violet-50", border: "border-violet-300", text: "text-violet-700" },
  gray: { bg: "bg-gray-50", border: "border-gray-300", text: "text-gray-600" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-300", text: "text-indigo-700" },
  cyan: { bg: "bg-cyan-50", border: "border-cyan-300", text: "text-cyan-700" },
};

export default function StaffingMap({ data }: { data: StaffingMapData }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-bold text-gray-900">{data.heading}</h3>
        {data.description && (
          <p className="text-[10px] text-gray-500 mt-0.5">{data.description}</p>
        )}
      </div>
      <div className="p-5">
        {/* 基準配置 */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-[10px] font-bold text-gray-500 mb-1">基準人員配置</div>
          <div className="text-xs text-gray-700">{data.baseRequirement}</div>
        </div>

        {/* 職種マップ */}
        <div className="grid sm:grid-cols-2 gap-3">
          {data.roles.map((role) => {
            const colors = colorMap[role.color] || colorMap.gray;
            return (
              <div
                key={role.role}
                className={`${colors.bg} ${colors.border} border rounded-lg p-3`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold ${colors.text}`}>{role.role}</span>
                  <span className="text-[10px] font-mono font-bold text-gray-700 bg-white px-1.5 py-0.5 rounded">
                    {role.count}
                  </span>
                </div>
                <div className="text-[10px] text-gray-600 mb-2">{role.requirement}</div>
                <div className="flex flex-wrap gap-1">
                  {role.relatedKasan.map((k) => (
                    <span
                      key={k}
                      className="text-[9px] bg-white/80 text-gray-600 rounded px-1.5 py-0.5 border border-gray-200"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
