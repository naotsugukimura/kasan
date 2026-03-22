"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getService } from "@/data/services";

const bgColorMap: Record<string, string> = {
  blue: "bg-blue-600",
  indigo: "bg-indigo-600",
  emerald: "bg-emerald-600",
  rose: "bg-rose-600",
  amber: "bg-amber-600",
  teal: "bg-teal-600",
  violet: "bg-violet-600",
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const serviceId = params?.service as string | undefined;
  const svc = serviceId ? getService(serviceId) : undefined;
  const bgColor = svc ? (bgColorMap[svc.color] || "bg-blue-600") : "bg-blue-600";

  return (
    <header className={`${bgColor} text-white shadow-md sticky top-0 z-50 transition-colors`}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold hover:opacity-90">
          加算 学習サイト
        </Link>

        {svc && (
          <span className="hidden sm:inline text-sm opacity-80">
            {svc.icon} {svc.shortName}
          </span>
        )}

        <nav className="hidden sm:flex gap-4">
          <Link
            href="/"
            className="px-3 py-1 rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            サービス選択
          </Link>
        </nav>

        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="sm:hidden border-t border-white/20 px-4 pb-3">
          <Link
            href="/"
            className="block py-2 hover:bg-white/10 px-3 rounded-lg text-sm"
            onClick={() => setIsOpen(false)}
          >
            サービス選択
          </Link>
        </nav>
      )}
    </header>
  );
}
