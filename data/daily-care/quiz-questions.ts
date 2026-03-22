import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（加算の基本）6問 ===
  {
    id: "dc-kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "生活介護の基本報酬を決定する主な要素として正しい組み合わせはどれですか？",
    options: [
      "障害支援区分・利用定員・サービス提供時間",
      "平均工賃月額・利用定員・職員数",
      "障害支援区分・利用者の年齢・事業所の所在地",
      "利用者数・サービス提供時間・職員の資格",
    ],
    correctAnswer: "障害支援区分・利用定員・サービス提供時間",
    explanation:
      "生活介護の基本報酬は、利用者の障害支援区分、事業所の利用定員、そして令和6年度改定で追加されたサービス提供時間の3要素で決定されます。",
    tags: ["基本報酬"],
  },
  {
    id: "dc-kb-2",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "生活介護の対象となる障害支援区分は原則として何以上ですか？",
    options: [
      "区分3以上",
      "区分1以上",
      "区分4以上",
      "区分5以上",
    ],
    correctAnswer: "区分3以上",
    explanation:
      "生活介護の対象は原則として障害支援区分3以上の方です。ただし50歳以上の方は区分2以上で利用可能です。",
    tags: ["基本概念"],
  },
  {
    id: "dc-kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "令和6年度改定で生活介護の利用定員区分はどのように変更されましたか？",
    options: [
      "20人刻みから10人刻みに細分化された",
      "10人刻みから5人刻みに細分化された",
      "定員区分が廃止された",
      "50人刻みから20人刻みに細分化された",
    ],
    correctAnswer: "20人刻みから10人刻みに細分化された",
    explanation:
      "令和6年度改定で、利用定員区分が従来の20人刻みから10人刻みに細分化され、小規模事業所も運営しやすくなりました。",
    tags: ["報酬改定"],
  },
  {
    id: "dc-kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "加算を算定するために指定権者に提出する書類は何ですか？",
    options: ["体制届", "加算申請書", "報酬請求書", "事業計画書"],
    correctAnswer: "体制届",
    explanation:
      "加算を算定するには、算定要件を満たした上で指定権者に「体制届」を提出する必要があります。",
    tags: ["届出"],
  },
  {
    id: "dc-kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "令和6年度改定で生活介護の基本報酬に新たに導入された区分は何ですか？",
    options: [
      "サービス提供時間",
      "利用者の年齢",
      "事業所の設置年数",
      "職員の平均勤続年数",
    ],
    correctAnswer: "サービス提供時間",
    explanation:
      "令和6年度改定により、従来の障害支援区分・利用定員に加えて、サービス提供時間に応じた基本報酬が導入されました。",
    tags: ["報酬改定"],
  },
  {
    id: "dc-kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "障害支援区分で最も重度を示すのはどれですか？",
    options: [
      "区分6",
      "区分1",
      "区分3",
      "区分10",
    ],
    correctAnswer: "区分6",
    explanation:
      "障害支援区分は区分1（最軽度）から区分6（最重度）までの6段階で分類されます。生活介護では区分6の基本報酬が最も高くなります。",
    tags: ["基本概念"],
  },

  // === staffing（人員配置に関する加算）6問 ===
  {
    id: "dc-st-1",
    type: "multiple_choice",
    category: "staffing",
    question: "令和6年度改定で新設された人員配置体制加算(I)の配置基準はどれですか？",
    options: ["1.5:1", "1.7:1", "2:1", "1:1"],
    correctAnswer: "1.5:1",
    explanation:
      "令和6年度改定で人員配置体制加算(I)が新設され、従業者を常勤換算方法で1.5:1以上配置する最も手厚い区分が追加されました。",
    tags: ["人員配置"],
  },
  {
    id: "dc-st-2",
    type: "multiple_choice",
    category: "staffing",
    question: "人員配置体制加算(I)と(II)で、区分5・6の利用者が必要な割合はどれですか？",
    options: ["6割以上", "5割以上", "7割以上", "割合要件なし"],
    correctAnswer: "6割以上",
    explanation:
      "人員配置体制加算(I)と(II)は、手厚い配置に加えて区分5または区分6の利用者が全体の6割以上であることが要件です。",
    tags: ["人員配置"],
  },
  {
    id: "dc-st-3",
    type: "multiple_choice",
    category: "staffing",
    question: "常勤看護職員等配置加算の令和6年度改定後の算定方式はどれですか？",
    options: [
      "定員に応じた所定単位数×看護職員の常勤換算数",
      "看護職員1人につき固定の単位数",
      "利用者数×看護職員の配置比率",
      "看護時間に応じた時間単価",
    ],
    correctAnswer: "定員に応じた所定単位数×看護職員の常勤換算数",
    explanation:
      "令和6年度改定で、従来のI〜III型区分から、利用定員に応じた所定単位数に常勤換算での看護職員数を乗じて算定する方式に変更されました。",
    tags: ["看護"],
  },
  {
    id: "dc-st-4",
    type: "multiple_choice",
    category: "staffing",
    question: "生活介護の基準の人員配置比率（利用者：生活支援員等）はどれですか？",
    options: ["6:1", "7.5:1", "3:1", "10:1"],
    correctAnswer: "6:1",
    explanation:
      "生活介護の基準の人員配置は、利用者6人に対して生活支援員等1人以上です。B型の7.5:1より手厚い基準が設定されています。",
    tags: ["人員配置"],
  },
  {
    id: "dc-st-5",
    type: "multiple_choice",
    category: "staffing",
    question: "福祉専門職員配置等加算(I)で必要な有資格者の割合はどれですか？",
    options: ["35%以上", "25%以上", "50%以上", "75%以上"],
    correctAnswer: "35%以上",
    explanation:
      "福祉専門職員配置等加算(I)は、常勤の直接処遇職員のうち社会福祉士等の有資格者が35%以上の場合に算定できます。",
    tags: ["専門職"],
  },
  {
    id: "dc-st-6",
    type: "multiple_choice",
    category: "staffing",
    question: "常勤看護職員等配置加算の対象となる職種に含まれないものはどれですか？",
    options: [
      "介護福祉士",
      "保健師",
      "看護師",
      "准看護師",
    ],
    correctAnswer: "介護福祉士",
    explanation:
      "常勤看護職員等配置加算の対象は保健師、看護師、准看護師の看護職員です。介護福祉士は含まれません。",
    tags: ["看護"],
  },

  // === support-system（支援体制に関する加算）6問 ===
  {
    id: "dc-ss-1",
    type: "multiple_choice",
    category: "support-system",
    question: "リハビリテーション加算(I)の単位数はどれですか？",
    options: ["48単位/日", "20単位/日", "100単位/日", "32単位/日"],
    correctAnswer: "48単位/日",
    explanation:
      "リハビリテーション加算(I)は、PT・OT・STが直接リハビリを実施した場合に48単位/日で算定できます。(II)は指導の下での実施で20単位/日です。",
    tags: ["リハビリ"],
  },
  {
    id: "dc-ss-2",
    type: "multiple_choice",
    category: "support-system",
    question: "令和6年度改定でリハビリテーション実施計画の作成期間はどう変わりましたか？",
    options: [
      "3か月ごとから6か月ごとに変更",
      "6か月ごとから3か月ごとに変更",
      "1年ごとから6か月ごとに変更",
      "変更なし",
    ],
    correctAnswer: "3か月ごとから6か月ごとに変更",
    explanation:
      "令和6年度改定で、リハビリテーション実施計画の作成期間が3か月ごとから6か月ごとに変更され、事務負担が軽減されました。",
    tags: ["リハビリ"],
  },
  {
    id: "dc-ss-3",
    type: "multiple_choice",
    category: "support-system",
    question: "重度障害者支援加算(II)の単位数はどれですか？",
    options: ["360単位/日", "50単位/日", "180単位/日", "500単位/日"],
    correctAnswer: "360単位/日",
    explanation:
      "重度障害者支援加算(II)は360単位/日で、中核的人材を配置し行動関連項目18点以上の利用者を支援した場合に算定できます。高単位ですが要件も厳しい加算です。",
    tags: ["重度者支援"],
  },
  {
    id: "dc-ss-4",
    type: "multiple_choice",
    category: "support-system",
    question: "令和6年度改定で新設された支援体制加算はどれですか？",
    options: [
      "高次脳機能障害者支援体制加算",
      "リハビリテーション加算",
      "医療連携体制加算",
      "重度障害者支援加算",
    ],
    correctAnswer: "高次脳機能障害者支援体制加算",
    explanation:
      "令和6年度改定で高次脳機能障害者支援体制加算が新設されました。高次脳機能障害支援者養成研修修了職員の配置と利用者の30%以上が高次脳機能障害者であることが要件です。",
    tags: ["新設加算"],
  },
  {
    id: "dc-ss-5",
    type: "multiple_choice",
    category: "support-system",
    question: "医療連携体制加算(III)はどのような場合に算定できますか？",
    options: [
      "喀痰吸引等の医療的ケアが必要な利用者に看護を提供した場合",
      "看護職員が利用者の健康管理を行った場合",
      "医師が事業所を訪問した場合",
      "看護職員が24時間体制で勤務した場合",
    ],
    correctAnswer: "喀痰吸引等の医療的ケアが必要な利用者に看護を提供した場合",
    explanation:
      "医療連携体制加算(III)は125単位/日で、喀痰吸引等の医療的ケアが必要な利用者に看護を提供した場合に算定できます。",
    tags: ["医療連携"],
  },
  {
    id: "dc-ss-6",
    type: "multiple_choice",
    category: "support-system",
    question: "重度障害者支援加算の算定開始から何日以内に上乗せがありますか？",
    options: ["180日以内", "90日以内", "365日以内", "30日以内"],
    correctAnswer: "180日以内",
    explanation:
      "重度障害者支援加算は、算定を開始した日から起算して180日以内は追加の単位数（最大+500単位）が上乗せされます。",
    tags: ["重度者支援"],
  },

  // === performance（事業運営・活動に関する加算）6問 ===
  {
    id: "dc-pf-1",
    type: "multiple_choice",
    category: "performance",
    question: "延長支援加算で9時間以上10時間未満の支援を行った場合の単位数はどれですか？",
    options: ["100単位/日", "61単位/日", "200単位/日", "50単位/日"],
    correctAnswer: "100単位/日",
    explanation:
      "延長支援加算は9時間以上10時間未満で100単位/日です。10〜11時間で200単位、11〜12時間で300単位、12時間以上で400単位と段階的に設定されています。",
    tags: ["延長支援"],
  },
  {
    id: "dc-pf-2",
    type: "multiple_choice",
    category: "performance",
    question: "延長支援加算の算定対象外となるのは誰ですか？",
    options: [
      "施設入所者",
      "区分3の利用者",
      "65歳以上の利用者",
      "医療的ケア対象者",
    ],
    correctAnswer: "施設入所者",
    explanation:
      "延長支援加算は施設入所者については算定できません。在宅から通所する利用者が対象です。",
    tags: ["延長支援"],
  },
  {
    id: "dc-pf-3",
    type: "multiple_choice",
    category: "performance",
    question: "延長支援加算の算定要件として、延長時間帯に必要なものは何ですか？",
    options: [
      "直接支援職員を1名以上配置",
      "看護職員の配置",
      "管理者の常駐",
      "医師の指示書",
    ],
    correctAnswer: "直接支援職員を1名以上配置",
    explanation:
      "延長支援加算の算定には、延長された時間帯にサービス基準の規定により置くべき直接支援業務に従事する職員を1名以上配置することが必要です。",
    tags: ["延長支援"],
  },
  {
    id: "dc-pf-4",
    type: "multiple_choice",
    category: "performance",
    question: "喀痰吸引等実施加算の単位数はどれですか？",
    options: ["30単位/日", "50単位/日", "100単位/日", "20単位/日"],
    correctAnswer: "30単位/日",
    explanation:
      "喀痰吸引等実施加算は令和6年度改定で新設され、認定特定行為業務従事者が医師の指示の下で喀痰吸引や経管栄養を実施した場合に30単位/日で算定できます。",
    tags: ["新設加算"],
  },
  {
    id: "dc-pf-5",
    type: "multiple_choice",
    category: "performance",
    question: "地域協働加算の算定要件に含まれるものはどれですか？",
    options: [
      "活動内容を個別支援計画に位置付け",
      "利用者の工賃が月額1万円以上",
      "保護者の同意書の取得",
      "行政への事前申請",
    ],
    correctAnswer: "活動内容を個別支援計画に位置付け",
    explanation:
      "地域協働加算は、地域の企業・団体と協働した活動を行い、その内容を個別支援計画に位置付けることが要件です。",
    tags: ["地域連携"],
  },
  {
    id: "dc-pf-6",
    type: "multiple_choice",
    category: "performance",
    question: "ピアサポート実施加算の単位数はどれですか？",
    options: ["100単位/月", "50単位/月", "100単位/日", "30単位/日"],
    correctAnswer: "100単位/月",
    explanation:
      "ピアサポート実施加算は100単位/月で、障害当事者であるピアサポーターが専門研修を修了し利用者にピアサポートを実施した場合に算定できます。",
    tags: ["ピアサポート"],
  },

  // === daily-support（生活支援・その他の加算）6問 ===
  {
    id: "dc-ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question: "送迎加算(I)の算定要件として、送迎実施に加えて必要な条件はどれですか？",
    options: [
      "平均利用者数が定員の70%以上",
      "送迎車両が3台以上",
      "運転手が正社員であること",
      "1日の送迎回数が10回以上",
    ],
    correctAnswer: "平均利用者数が定員の70%以上",
    explanation:
      "送迎加算(I)は送迎を実施し、かつ前年度の平均利用者数が定員の70%以上の場合に21単位/回で算定できます。",
    tags: ["送迎"],
  },
  {
    id: "dc-ds-2",
    type: "multiple_choice",
    category: "daily-support",
    question: "入浴支援加算の対象となる利用者はどの方ですか？",
    options: [
      "医療的ケアが必要な方または重症心身障害者",
      "すべての利用者",
      "区分6の利用者のみ",
      "65歳以上の利用者",
    ],
    correctAnswer: "医療的ケアが必要な方または重症心身障害者",
    explanation:
      "入浴支援加算は令和6年度改定で新設され、医療的ケアが必要な方または重症心身障害者に対して入浴支援を提供した場合に算定できます。",
    tags: ["入浴"],
  },
  {
    id: "dc-ds-3",
    type: "multiple_choice",
    category: "daily-support",
    question: "処遇改善加算の加算額は何に充当する必要がありますか？",
    options: [
      "職員の賃金改善",
      "事業所の設備投資",
      "利用者へのサービス充実",
      "研修費用",
    ],
    correctAnswer: "職員の賃金改善",
    explanation:
      "処遇改善加算の加算額は、福祉・介護職員の賃金改善に直接充当する必要があり、事業所の利益にはできません。",
    tags: ["処遇改善"],
  },
  {
    id: "dc-ds-4",
    type: "multiple_choice",
    category: "daily-support",
    question: "欠席時対応加算が算定できるのは月に最大何回までですか？",
    options: ["4回", "2回", "6回", "回数制限なし"],
    correctAnswer: "4回",
    explanation:
      "欠席時対応加算は、利用予定日に急な欠席があった場合の連絡・相談援助について月4回まで算定できます。",
    tags: ["その他"],
  },
  {
    id: "dc-ds-5",
    type: "multiple_choice",
    category: "daily-support",
    question: "初期加算が算定できる期間はどれですか？",
    options: [
      "利用開始から30日以内",
      "利用開始から60日以内",
      "利用開始から7日以内",
      "利用開始から90日以内",
    ],
    correctAnswer: "利用開始から30日以内",
    explanation:
      "初期加算は新規利用開始日から30日以内の期間について30単位/日で算定できます。利用開始時の手厚い支援を評価する加算です。",
    tags: ["その他"],
  },
  {
    id: "dc-ds-6",
    type: "multiple_choice",
    category: "daily-support",
    question: "令和6年度改定で生活介護に新設された加算はどれですか？",
    options: [
      "入浴支援加算",
      "送迎加算",
      "食事提供体制加算",
      "欠席時対応加算",
    ],
    correctAnswer: "入浴支援加算",
    explanation:
      "入浴支援加算は令和6年度改定で生活介護に新設された加算です。医療的ケアが必要な方や重症心身障害者への入浴支援を評価します。",
    tags: ["新設加算"],
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "comprehensive") {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}
