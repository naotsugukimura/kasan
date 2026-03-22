"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { getService } from "@/data/services";
import { getServiceColors } from "@/lib/service-colors";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();
  const serviceId = params.service as string;
  const svc = getService(serviceId);

  if (!svc) return <>{children}</>;

  const colors = getServiceColors(svc.color);

  const tabs = [
    { href: `/${serviceId}/learn`, label: "概要" },
    ...svc.topics.map((t) => ({
      href: `/${serviceId}/learn/${t.id}`,
      label: t.label,
    })),
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href={`/${serviceId}`} className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
          ← {svc.name}トップ
        </Link>
      </div>
      <nav className="flex gap-1.5 overflow-x-auto pb-4 mb-6 border-b border-gray-200">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                isActive
                  ? `${colors.tabActive} text-white shadow-sm`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
