import type { ContentSection, TermDefinition, RequirementItem } from "@/lib/types";

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
};

type ContentModule = {
  [key: string]: PhilosophyData | ContentSection[] | TermDefinition[] | RequirementItem[] | RevenueItem[] | PracticeItem[];
};

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
