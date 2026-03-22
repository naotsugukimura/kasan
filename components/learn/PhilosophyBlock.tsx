"use client";

import { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);
  const gradFrom = colors?.gradientFrom || "from-blue-50";
  const gradTo = colors?.gradientTo || "to-indigo-50";
  const border = colors?.lightBorder || "border-blue-200";
  const headingColor = colors?.heading || "text-blue-800";
  const subColor = colors?.subheading || "text-blue-700";

  return (
    <div className={`mb-6 bg-gradient-to-br ${gradFrom} ${gradTo} rounded-xl p-5 border ${border}`}>
      <h2 className={`text-base font-bold mb-1.5 ${headingColor}`}>{heading}</h2>
      <p className={`text-xs ${subColor} leading-relaxed`}>{lead}</p>

      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className={`mt-2 text-xs ${subColor} hover:underline font-medium`}
        >
          設計思想の詳細を見る ({items.length}項目) →
        </button>
      ) : (
        <>
          <div className="mt-3 space-y-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="bg-white/70 rounded-lg p-3 border border-white/50"
              >
                <h3 className="font-bold text-xs mb-0.5">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setExpanded(false)}
            className={`mt-2 text-xs ${subColor} hover:underline font-medium`}
          >
            閉じる
          </button>
        </>
      )}
    </div>
  );
}
