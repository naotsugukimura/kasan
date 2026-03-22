import { ServiceColorSet } from "@/lib/service-colors";

export default function SectionBlock({
  title,
  children,
  colors,
}: {
  title: string;
  children: React.ReactNode;
  colors?: ServiceColorSet;
}) {
  const borderColor = colors?.sectionBorder || "border-blue-300";

  return (
    <section className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className={`px-5 py-3 border-b-2 ${borderColor} bg-gray-50/50`}>
        <h2 className="text-base font-bold text-gray-900">{title}</h2>
      </div>
      <div className="px-5 py-4 text-gray-700 leading-relaxed text-sm">
        {children}
      </div>
    </section>
  );
}
