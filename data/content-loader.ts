import type { ContentSection, TermDefinition, RequirementItem } from "@/lib/types";
import type { ComparisonData } from "@/components/learn/KasanComparisonCard";
import type { TimelineData } from "@/components/learn/DailyTimeline";
import type { SimulationData } from "@/components/learn/RevenueSimulator";
import type { CalendarData } from "@/components/learn/KasanCalendar";
import type { StaffingMapData } from "@/components/learn/StaffingMap";
import type { DocumentFlowData } from "@/components/learn/DocumentFlow";

export type PhilosophyData = {
  heading: string;
  lead: string;
  items: { title: string; content: string; icon: string }[];
};

export type RevenueItem = {
  kasanName: string;
  unitPerDay: string;
  monthlyRevenue: string;
  frequency: string;
  difficulty: "低" | "中" | "高" | "―";
  difficultyNote?: string;
};

export type PracticeItem = {
  kasanName: string;
  conditions: string[];
  records: string[];
  practice: string[];
  color: string;
};

export type TopicContent = {
  philosophy: PhilosophyData;
  sections: ContentSection[];
  terms: TermDefinition[];
  requirements?: RequirementItem[];
  revenue?: RevenueItem[];
  practice?: PracticeItem[];
  comparisons?: ComparisonData[];
  timeline?: TimelineData;
  simulation?: SimulationData;
  calendar?: CalendarData;
  staffingMap?: StaffingMapData;
  documentFlow?: DocumentFlowData;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContentModule = Record<string, any>;

const contentCache = new Map<string, TopicContent>();

export async function getTopicContent(service: string, topic: string): Promise<TopicContent | null> {
  const key = `${service}/${topic}`;
  if (contentCache.has(key)) return contentCache.get(key)!;

  try {
    const mod: ContentModule = await import(`@/data/${service}/${topic === "kasan-basics" ? "kasan-basics" : topic}-content`);

    const prefix = topic === "kasan-basics" ? "kasanBasics"
      : topic === "support-system" ? "supportSystem"
      : topic === "daily-support" ? "dailySupport"
      : topic;

    const content: TopicContent = {
      philosophy: mod[`${prefix}Philosophy`] as PhilosophyData,
      sections: mod[`${prefix}Sections`] as ContentSection[],
      terms: mod[`${prefix}Terms`] as TermDefinition[],
      requirements: mod[`${prefix}Requirements`] as RequirementItem[] | undefined,
      revenue: mod[`${prefix}Revenue`] as RevenueItem[] | undefined,
      practice: mod[`${prefix}Practice`] as PracticeItem[] | undefined,
      comparisons: mod[`${prefix}Comparisons`] as ComparisonData[] | undefined,
      timeline: mod[`${prefix}Timeline`] as TimelineData | undefined,
      simulation: mod[`${prefix}Simulation`] as SimulationData | undefined,
      calendar: mod[`${prefix}Calendar`] as CalendarData | undefined,
      staffingMap: mod[`${prefix}StaffingMap`] as StaffingMapData | undefined,
      documentFlow: mod[`${prefix}DocumentFlow`] as DocumentFlowData | undefined,
    };

    contentCache.set(key, content);
    return content;
  } catch {
    return null;
  }
}

export async function getQuizQuestions(service: string) {
  try {
    const mod = await import(`@/data/${service}/quiz-questions`);
    return {
      questions: mod.quizQuestions,
      getByCategory: mod.getQuestionsByCategory,
    };
  } catch {
    return null;
  }
}
