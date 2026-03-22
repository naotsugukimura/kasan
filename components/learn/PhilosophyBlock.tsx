import { ServiceColorSet } from "@/lib/service-colors";

export type PhilosophyItem = {
  title: string;
  content: string;
  icon: string;
};

export default function PhilosophyBlock({
  heading,
  lead,
  items,
  colors,
}: {
  heading: string;
  lead: string;
  items: PhilosophyItem[];
  colors?: ServiceColorSet;
}) {
  const gradFrom = colors?.gradientFrom || "from-blue-50";
  const gradTo = colors?.gradientTo || "to-indigo-50";
  const border = colors?.lightBorder || "border-blue-200";
  const headingColor = colors?.heading || "text-blue-800";
  const subColor = colors?.subheading || "text-blue-700";

  return (
    <div className={`mb-8 bg-gradient-to-br ${gradFrom} ${gradTo} rounded-2xl p-6 sm:p-8 border ${border}`}>
      <h2 className={`text-xl font-bold mb-2 ${headingColor}`}>{heading}</h2>
      <p className={`text-sm ${subColor} mb-5 leading-relaxed`}>{lead}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white/80 rounded-xl p-4 border border-white/60 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
