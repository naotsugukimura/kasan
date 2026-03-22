import { ContentSection, TermDefinition, RequirementItem } from "@/lib/types";
import { PracticeItem } from "@/components/learn/PracticeGuide";
import { PhilosophyItem } from "@/components/learn/PhilosophyBlock";
import { RevenueItem } from "@/components/learn/RevenueTable";
import { ComparisonData } from "@/components/learn/KasanComparisonCard";

// ===== 思想・背景 =====

export const supportSystemPhilosophy: {
  heading: string;
  lead: string;
  items: PhilosophyItem[];
} = {
  heading: "支援体制加算の設計思想",
  lead: "支援体制に関する加算は「どんな障害があっても排除されない」という障害福祉の根本理念を報酬で裏付けるものです。重度者や医療的ケアが必要な方を受け入れるにはコストがかかる。そのコストを加算で補い、受け入れのハードルを下げる設計です。",
  items: [
    {
      title: "医療連携体制加算：福祉と医療の橋渡し",
      content:
        "B型事業所は医療機関ではありませんが、利用者の中には医療的ケアが必要な方もいます。かつては「うちでは対応できない」と断られるケースが多かった。この加算は看護職員との連携体制を報酬で支え、「医療的ケアが必要でも通える場所」を増やすことが目的です。(I)〜(IV)の段階は、必要な医療の重さに応じた報酬設計です。",
      icon: "🏥",
    },
    {
      title: "重度者支援体制加算：「重い人を断らない」事業所を守る",
      content:
        "障害支援区分4以上の利用者は、支援に手間とコストがかかります。何の手当もなければ、事業所は経営合理性から軽度の利用者を優先し、重度者は行き場を失う。この加算は重度者を積極的に受け入れる事業所の経営を支え、サービスへのアクセスの公平性を担保する仕組みです。",
      icon: "🤝",
    },
    {
      title: "視覚・聴覚言語障害者支援体制加算：コミュニケーション保障",
      content:
        "視覚・聴覚・言語障害のある方への支援には、手話通訳・点字・筆談など専門的なコミュニケーション手段が不可欠です。これらのスキルを持つ職員の配置にはコストがかかる。加算でそのコストを補い、障害種別によるサービス利用の格差をなくすことが狙いです。",
      icon: "🤟",
    },
    {
      title: "ピアサポート実施加算：「当事者の力」を制度化",
      content:
        "障害当事者が支援者として参画することの価値を、報酬として認めた画期的な加算です。「同じ経験を持つ人からの言葉が一番響く」という実践知を制度に取り込みました。当事者の雇用促進と、支援の質向上の両方を狙った設計です。",
      icon: "💪",
    },
  ],
};

// ===== 学習コンテンツ =====

export const supportSystemSections: ContentSection[] = [
  {
    title: "医療連携体制加算",
    content:
      "医療連携体制加算は、看護職員の確保や医療機関との連携体制を評価する加算です。(I)は看護職員が利用者の健康管理を行った場合、(II)は看護職員が利用者に対して看護を行った場合、(III)は喀痰吸引等の医療的ケアが必要な利用者に対応した場合、(IV)は医療的ケアの判定スコアが高い利用者に対応した場合に算定できます。",
  },
  {
    title: "重度者支援体制加算",
    content:
      "重度者支援体制加算は、障害支援区分4以上の利用者が一定割合以上いる事業所を評価する加算です。(I)は利用者の50%以上が区分4以上の場合、(II)は25%以上の場合に算定できます。重度の障害のある方を積極的に受け入れている事業所の体制を評価する重要な加算です。",
  },
  {
    title: "視覚・聴覚言語障害者支援体制加算",
    content:
      "視覚・聴覚言語障害者支援体制加算は、視覚障害・聴覚障害・言語機能障害のある利用者が全体の30%以上を占め、かつ意思疎通に専門的な対応ができる職員を配置している場合に算定できます。手話通訳や点字対応など、コミュニケーション支援の体制を評価する加算です。",
  },
  {
    title: "ピアサポート実施加算",
    content:
      "ピアサポート実施加算は、障害当事者（ピアサポーター）が支援に参画する体制を評価する加算です。ピアサポートの専門研修を修了した障害当事者である職員を配置し、利用者にピアサポートを実施した場合に算定できます。当事者の経験を活かした支援は、利用者の安心感やモチベーション向上に効果的です。",
  },
];

export const supportSystemTerms: TermDefinition[] = [
  {
    term: "医療連携体制加算",
    definition:
      "看護職員の確保や医療的ケアの提供体制を評価する加算。(I)〜(IV)の4段階があり、対応する医療的ケアのレベルで区分される。",
    example: "(I)32単位/日、(II)63単位/日 等",
  },
  {
    term: "重度者支援体制加算",
    definition:
      "障害支援区分4以上の利用者を一定割合以上受け入れている場合の加算。(I)50%以上、(II)25%以上で算定。",
  },
  {
    term: "視覚・聴覚言語障害者支援体制加算",
    definition:
      "視覚・聴覚・言語障害者が30%以上で、専門対応可能な職員を配置している場合の加算。",
  },
  {
    term: "ピアサポート実施加算",
    definition:
      "障害当事者（ピアサポーター）が専門研修を修了し、利用者にピアサポートを実施する場合の加算。",
    example: "100単位/月",
  },
  {
    term: "障害支援区分",
    reading: "しょうがいしえんくぶん",
    definition:
      "障害の多様な特性や心身の状態に応じて必要とされる標準的な支援の度合いを示す6段階の区分。区分1が最も軽度、区分6が最も重度。",
  },
  {
    term: "医療的ケア",
    reading: "いりょうてきけあ",
    definition:
      "喀痰吸引・経管栄養・導尿など、日常生活に必要な医療行為。一定の研修を受けた職員が実施できる。",
  },
  {
    term: "ピアサポーター",
    definition:
      "障害の当事者として自らの経験を活かし、同じ障害のある人を支援する専門的な支援者。専門研修の修了が要件。",
  },
];

export const supportSystemRequirements: RequirementItem[] = [
  {
    category: "医療連携体制加算(I)",
    items: [
      "看護職員が事業所を訪問し利用者の健康管理を実施",
      "医療機関との連携体制を確保",
    ],
    color: "border-red-400",
  },
  {
    category: "医療連携体制加算(II)",
    items: [
      "看護職員が事業所を訪問し利用者に看護を提供",
    ],
    color: "border-red-300",
  },
  {
    category: "重度者支援体制加算(I)",
    items: [
      "前年度の利用者のうち障害支援区分4以上が50%以上",
    ],
    color: "border-orange-400",
  },
  {
    category: "重度者支援体制加算(II)",
    items: [
      "前年度の利用者のうち障害支援区分4以上が25%以上",
    ],
    color: "border-orange-300",
  },
  {
    category: "視覚・聴覚言語障害者支援体制加算",
    items: [
      "視覚・聴覚・言語障害のある利用者が全体の30%以上",
      "意思疎通に専門対応できる職員を配置",
    ],
    color: "border-cyan-400",
  },
  {
    category: "ピアサポート実施加算",
    items: [
      "ピアサポートの専門研修を修了した障害当事者の職員を配置",
      "利用者に対してピアサポートを実施",
    ],
    color: "border-green-400",
  },
];

// ===== 収益インパクト・取得難易度 =====

export const supportSystemRevenue: RevenueItem[] = [
  {
    kasanName: "医療連携体制加算(I)",
    unitPerDay: "32単位/日",
    monthlyRevenue: "約14.1万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "中",
    difficultyNote: "看護師の確保が必要。訪問看護STとの契約で対応可",
  },
  {
    kasanName: "医療連携体制加算(II)",
    unitPerDay: "63単位/日",
    monthlyRevenue: "約27.7万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "高",
    difficultyNote: "看護の実施が必要。医療的ケア対象者がいることが前提",
  },
  {
    kasanName: "医療連携体制加算(III)",
    unitPerDay: "125単位/日",
    monthlyRevenue: "約55.0万円/月",
    frequency: "日額（対象者のみ）",
    difficulty: "高",
    difficultyNote: "喀痰吸引等の対象者が必要。看護師+研修修了職員",
  },
  {
    kasanName: "重度者支援体制加算(I)",
    unitPerDay: "36単位/日",
    monthlyRevenue: "約15.8万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "高",
    difficultyNote: "区分4以上が50%以上。利用者構成に依存",
  },
  {
    kasanName: "重度者支援体制加算(II)",
    unitPerDay: "26単位/日",
    monthlyRevenue: "約11.4万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "中",
    difficultyNote: "区分4以上が25%以上。(I)より取得しやすい",
  },
  {
    kasanName: "視覚・聴覚言語障害者支援体制加算",
    unitPerDay: "41単位/日",
    monthlyRevenue: "約18.0万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "高",
    difficultyNote: "該当利用者30%以上+専門職員。特化型事業所向け",
  },
  {
    kasanName: "ピアサポート実施加算",
    unitPerDay: "100単位/月",
    monthlyRevenue: "約2.0万円/月",
    frequency: "月額（利用者ごと）",
    difficulty: "中",
    difficultyNote: "当事者職員の採用+専門研修修了が必要",
  },
];

// ===== 条件・記録・支援の実践ガイド =====

export const supportSystemPractice: PracticeItem[] = [
  {
    kasanName: "医療連携体制加算(I)(II)",
    conditions: [
      "(I) 看護職員が訪問し利用者の健康管理を実施",
      "(II) 看護職員が訪問し看護を提供",
      "医療機関等との連携体制を確保",
    ],
    records: [
      "看護職員の訪問記録（日時・対象者・内容）",
      "医療機関との連携協定書・契約書",
      "利用者ごとの健康管理記録",
      "バイタルチェック記録",
    ],
    practice: [
      "看護師の定期訪問スケジュールを確立",
      "利用者の健康状態を定期的にアセスメント",
      "緊急時の医療機関との連絡体制を整備",
      "服薬管理・体調変化の早期発見",
    ],
    color: "border-red-400",
  },
  {
    kasanName: "重度者支援体制加算(I)(II)",
    conditions: [
      "(I) 障害支援区分4以上の利用者が50%以上",
      "(II) 同25%以上",
      "前年度の実績で判定",
    ],
    records: [
      "利用者の障害支援区分の一覧（受給者証の写し）",
      "前年度の利用者名簿と区分の集計",
      "体制届の控え",
    ],
    practice: [
      "重度者の受け入れを断らない方針の明文化",
      "重度者に適した作業・活動の開発",
      "個別支援計画で障害特性に応じた配慮を記載",
      "介助が必要な場面（移動・食事・排泄）の支援体制確保",
    ],
    color: "border-orange-400",
  },
  {
    kasanName: "ピアサポート実施加算",
    conditions: [
      "ピアサポートの専門研修を修了した障害当事者の職員を配置",
      "利用者に対してピアサポートを実施",
    ],
    records: [
      "ピアサポーターの研修修了証の写し",
      "ピアサポート実施記録（日時・対象者・内容）",
      "個別支援計画へのピアサポートの位置付け",
    ],
    practice: [
      "ピアサポーターが自身の経験を活かした相談・助言を実施",
      "グループ活動でのピアサポートプログラムの実施",
      "職員チームの一員としてケース会議に参加",
      "ピアサポーター自身のセルフケア体制の確保",
    ],
    color: "border-green-400",
  },
];

// ===== ビジュアル: 医療連携体制加算の段階比較 =====

export const supportSystemComparisons: ComparisonData[] = [
  {
    heading: "医療連携体制加算の4段階",
    groups: [
      {
        title: "対応レベルが上がるほど高単位",
        items: [
          { label: "(I) 健康管理", value: 32, unit: "単位/日", note: "看護職員が訪問し健康管理" },
          { label: "(II) 看護提供", value: 63, unit: "単位/日", note: "看護職員が訪問し看護を実施" },
          { label: "(III) 医療的ケア", value: 125, unit: "単位/日", note: "喀痰吸引等の医療的ケア", highlight: true },
          { label: "(IV) 高度な医療的ケア", value: 800, unit: "単位/日", note: "医療的ケア判定スコアが高い方", highlight: true },
        ],
      },
    ],
  },
  {
    heading: "重度者支援体制加算の比較",
    groups: [
      {
        title: "障害支援区分4以上の利用者割合で判定",
        items: [
          { label: "(I) 50%以上", value: 36, unit: "単位/日", highlight: true },
          { label: "(II) 25%以上", value: 26, unit: "単位/日" },
        ],
      },
    ],
  },
];
