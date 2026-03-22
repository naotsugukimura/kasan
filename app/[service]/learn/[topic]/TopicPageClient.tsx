"use client";

import { useEffect, useState } from "react";
import SectionBlock from "@/components/learn/SectionBlock";
import CollapsibleSection from "@/components/learn/CollapsibleSection";
import TermGrid from "@/components/learn/TermGrid";
import RequirementTable from "@/components/learn/RequirementTable";
import PhilosophyBlock from "@/components/learn/PhilosophyBlock";
import PracticeGuide from "@/components/learn/PracticeGuide";
import RevenueTable from "@/components/learn/RevenueTable";
import TopicSummaryBar from "@/components/learn/TopicSummaryBar";
import KasanComparisonCard from "@/components/learn/KasanComparisonCard";
import DailyTimeline from "@/components/learn/DailyTimeline";
import RevenueSimulator from "@/components/learn/RevenueSimulator";
import KasanCalendar from "@/components/learn/KasanCalendar";
import StaffingMap from "@/components/learn/StaffingMap";
import DocumentFlow from "@/components/learn/DocumentFlow";
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
        <div className="h-24 bg-gray-100 rounded-xl animate-pulse" />
        <div className="h-48 bg-gray-100 rounded-xl animate-pulse" />
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

  const hasVisuals = content.timeline || (content.comparisons && content.comparisons.length > 0) || content.simulation || content.calendar || content.staffingMap || content.documentFlow;

  return (
    <>
      {/* 1. タイトル */}
      <h1 className="text-2xl font-bold mb-4">{topicLabel}</h1>

      {/* 2. サマリーバー（KPI的な全体指標を最初に） */}
      <TopicSummaryBar revenue={content.revenue} colors={colors} />

      {/* 3. 思想（コンパクト・折りたたみ式） */}
      <PhilosophyBlock
        heading={content.philosophy.heading}
        lead={content.philosophy.lead}
        items={content.philosophy.items}
        colors={colors}
      />

      {/* 4. ビジュアル（タイムライン→比較→シミュレーション） */}
      {hasVisuals && (
        <div className="mb-6">
          {content.timeline && <DailyTimeline data={content.timeline} />}
          {content.comparisons && content.comparisons.map((comp) => (
            <KasanComparisonCard key={comp.heading} data={comp} />
          ))}
          {content.simulation && <RevenueSimulator data={content.simulation} />}
          {content.calendar && <KasanCalendar data={content.calendar} />}
          {content.staffingMap && <StaffingMap data={content.staffingMap} />}
          {content.documentFlow && <DocumentFlow data={content.documentFlow} />}
        </div>
      )}

      {/* 5. 収益テーブル */}
      {content.revenue && content.revenue.length > 0 && (
        <SectionBlock title="収益インパクトと取得難易度" colors={colors}>
          <RevenueTable items={content.revenue} />
        </SectionBlock>
      )}

      {/* 6. 算定要件（2カラム） */}
      {content.requirements && content.requirements.length > 0 && (
        <SectionBlock title="算定要件まとめ" colors={colors}>
          <RequirementTable items={content.requirements} />
        </SectionBlock>
      )}

      {/* 7. 実践ガイド */}
      {content.practice && content.practice.length > 0 && (
        <SectionBlock title="条件・記録・支援の実践ガイド" colors={colors}>
          <PracticeGuide items={content.practice} />
        </SectionBlock>
      )}

      {/* 8. 詳細解説（折りたたみ） */}
      {content.sections.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-500 mb-2">詳細解説</h2>
          {content.sections.map((section, i) => (
            <CollapsibleSection
              key={section.title}
              title={section.title}
              colors={colors}
              defaultOpen={i === 0}
            >
              <p>{section.content}</p>
            </CollapsibleSection>
          ))}
        </div>
      )}

      {/* 9. 用語集 */}
      <SectionBlock title="主要用語" colors={colors}>
        <TermGrid terms={content.terms} colors={colors} />
      </SectionBlock>
    </>
  );
}
