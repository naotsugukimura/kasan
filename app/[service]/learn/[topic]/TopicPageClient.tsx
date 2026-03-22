"use client";

import { useEffect, useState } from "react";
import SectionBlock from "@/components/learn/SectionBlock";
import CollapsibleSection from "@/components/learn/CollapsibleSection";
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

  const hasVisuals = content.timeline || (content.comparisons && content.comparisons.length > 0) || content.simulation;

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{topicLabel}</h1>

      {/* 1. 思想（コンパクトに） */}
      <PhilosophyBlock
        heading={content.philosophy.heading}
        lead={content.philosophy.lead}
        items={content.philosophy.items}
        colors={colors}
      />

      {/* 2. ビジュアルセクション（最初にイメージを掴ませる） */}
      {hasVisuals && (
        <div className="mb-8">
          {content.timeline && <DailyTimeline data={content.timeline} />}
          {content.comparisons && content.comparisons.map((comp) => (
            <KasanComparisonCard key={comp.heading} data={comp} />
          ))}
          {content.simulation && <RevenueSimulator data={content.simulation} />}
        </div>
      )}

      {/* 3. 収益テーブル（ビジュアルの直後に実務情報） */}
      {content.revenue && content.revenue.length > 0 && (
        <SectionBlock title="収益インパクトと取得難易度" colors={colors}>
          <RevenueTable items={content.revenue} />
        </SectionBlock>
      )}

      {/* 4. 算定要件（2カラムグリッドで見やすく） */}
      {content.requirements && content.requirements.length > 0 && (
        <SectionBlock title="算定要件まとめ" colors={colors}>
          <RequirementTable items={content.requirements} />
        </SectionBlock>
      )}

      {/* 5. 実践ガイド */}
      {content.practice && content.practice.length > 0 && (
        <SectionBlock title="条件・記録・支援の実践ガイド" colors={colors}>
          <p className="text-sm text-gray-600 mb-4">
            加算を「取る」だけでなく「維持する」ために、日々の記録と支援をセットで押さえましょう。
          </p>
          <PracticeGuide items={content.practice} />
        </SectionBlock>
      )}

      {/* 6. 詳細解説（折りたたみ式で長文を隠す） */}
      {content.sections.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-3">詳細解説</h2>
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

      {/* 7. 用語集（最後に参照用） */}
      <SectionBlock title="主要用語" colors={colors}>
        <TermGrid terms={content.terms} colors={colors} />
      </SectionBlock>
    </>
  );
}
