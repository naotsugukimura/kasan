import { TermDefinition } from "@/lib/types";
import { ServiceColorSet } from "@/lib/service-colors";

export default function TermCard({ term, colors }: { term: TermDefinition; colors?: ServiceColorSet }) {
  const primaryColor = colors?.primary || "text-blue-600";
  const hoverBorder = colors?.hoverBorder || "hover:border-blue-300";
  const exBg = colors?.exampleBg || "bg-blue-50";
  const exText = colors?.exampleText || "text-blue-700";

  return (
    <div className={`bg-white rounded-lg p-4 border border-gray-100 shadow-sm ${hoverBorder} transition-colors`}>
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className={`${primaryColor} font-bold text-sm`}>{term.term}</span>
        {term.reading && (
          <span className="text-gray-400 text-[10px]">({term.reading})</span>
        )}
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{term.definition}</p>
      {term.example && (
        <div className={`mt-2 text-[10px] font-medium ${exText} ${exBg} rounded px-2.5 py-1`}>
          {term.example}
        </div>
      )}
    </div>
  );
}
