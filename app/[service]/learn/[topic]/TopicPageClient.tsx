"use client";

import { useEffect, useState } from "react";
import SectionBlock from "@/components/learn/SectionBlock";
import TermGrid from "@/components/learn/TermGrid";
import RequirementTable from "@/components/learn/RequirementTable";
import PhilosophyBlock from "@/components/learn/PhilosophyBlock";
import PracticeGuide from "@/components/learn/PracticeGuide";
import RevenueTable from "@/components/learn/RevenueTable";
import KasanComparisonCard from "@/components/learn/KasanComparisonCard";
import DailyTimeline from "@/components/learn/DailyTimeline";
import RevenueSimulator from "@/components/learn/RevenueSimulator";
import { getTopicContent, TopicContent } from "@/data/content-loader";
import { getService } from "@/data/services";
import { getServiceColors } from "@/lib/service-colors";

type Props = {
  serviceId: string;
  topicId: string;
  topicLabel: string;
};

export default function TopicPageClient({ serviceId, topicId, topicLabel }: Props) {
  const [content, setContent] = useState<TopicContent | null>(null);
  const [loading, setLoading] = useState(true);

  const svc = getService(serviceId);
  const colors = getServiceColors(svc?.color || "blue");

  useEffect(() => {
    getTopicContent(serviceId, topicId).then((c) => {
      setContent(c);
      setLoading(false);
    });
  }, [serviceId, topicId]);

  if (loading) {
    return (
      <div className="space-y-4 py-12">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="h-48 bg-gray-100 rounded-xl animate-pulse" />
        <div className="h-32 bg-gray-100 rounded-xl animate-pulse" />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">このコンテンツは準備中です。</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{topicLabel}</h1>

      <PhilosophyBlock
        heading={content.philosophy.heading}
        lead={content.philosophy.lead}
        items={content.philosophy.items}
        colors={colors}
      />

      {/* ビジュアル: タイムライン（あれば思想の直後に表示） */}
      {content.timeline && <DailyTimeline data={content.timeline} />}

      {content.sections.map((section) => (
        <SectionBlock key={section.title} title={section.title} colors={colors}>
          <p>{section.content}</p>
        </SectionBlock>
      ))}

      {/* ビジュアル: 段階比較カード */}
      {content.comparisons && content.comparisons.map((comp) => (
        <KasanComparisonCard key={comp.heading} data={comp} />
      ))}

      {/* ビジュアル: 収益シミュレーション */}
      {content.simulation && <RevenueSimulator data={content.simulation} />}

      {content.revenue && content.revenue.length > 0 && (
        <SectionBlock title="収益インパクトと取得難易度" colors={colors}>
          <RevenueTable items={content.revenue} />
        </SectionBlock>
      )}

      {content.requirements && content.requirements.length > 0 && (
        <SectionBlock title="算定要件まとめ" colors={colors}>
          <RequirementTable items={content.requirements} />
        </SectionBlock>
      )}

      {content.practice && content.practice.length > 0 && (
        <SectionBlock title="条件・記録・支援の実践ガイド" colors={colors}>
          <p className="text-sm text-gray-600 mb-4">
            加算を「取る」だけでなく「維持する」ために、日々の記録と支援をセットで押さえましょう。
          </p>
          <PracticeGuide items={content.practice} />
        </SectionBlock>
      )}

      <SectionBlock title="主要用語" colors={colors}>
        <TermGrid terms={content.terms} colors={colors} />
      </SectionBlock>
    </>
  );
}
