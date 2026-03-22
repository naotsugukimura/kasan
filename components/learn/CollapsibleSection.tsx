"use client";

import { useState } from "react";
import { ServiceColorSet } from "@/lib/service-colors";

export default function CollapsibleSection({
  title,
  children,
  colors,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  colors?: ServiceColorSet;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const borderColor = colors?.sectionBorder || "border-blue-300";

  return (
    <div className="mb-3 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-5 py-3 flex items-center justify-between border-b-2 ${
          isOpen ? borderColor : "border-transparent"
        } bg-gray-50/50 hover:bg-gray-100/50 transition-colors text-left`}
      >
        <h2 className="text-sm font-bold text-gray-900">{title}</h2>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 py-4 text-gray-700 leading-relaxed text-sm">
          {children}
        </div>
      )}
    </div>
  );
}
