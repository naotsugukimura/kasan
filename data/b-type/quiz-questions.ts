import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（加算の基本）6問 ===
  {
    id: "kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "加算とは何ですか？",
    options: [
      "基本報酬に上乗せされる追加報酬",
      "利用者が支払う自己負担額",
      "事業所の固定費補助",
      "国保連が支払う手数料",
    ],
    correctAnswer: "基本報酬に上乗せされる追加報酬",
    explanation:
      "加算とは、一定の体制や取り組みを行っている事業所に対して、基本報酬に上乗せして算定できる追加の報酬です。",
    tags: ["基本概念"],
  },
  {
    id: "kb-2",
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
    id: "kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "就労継続支援B型の基本報酬の算定において、最も重要な指標はどれですか？",
    options: [
      "平均工賃月額",
      "利用者数",
      "職員数",
      "事業所の延床面積",
    ],
    correctAnswer: "平均工賃月額",
    explanation:
      "就労継続支援B型の基本報酬は、平均工賃月額に応じた報酬体系が基本です。工賃が高いほど基本報酬が高くなります。",
    tags: ["基本報酬"],
  },
  {
    id: "kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "基準を満たさない場合に基本報酬から差し引かれるものを何といいますか？",
    options: ["減算", "控除", "罰則", "返納"],
    correctAnswer: "減算",
    explanation:
      "基準を満たさない場合や違反がある場合に、基本報酬から差し引かれるものを「減算」といいます。",
    tags: ["基本概念"],
  },
  {
    id: "kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "体制届を提出した後、加算の算定が可能になるのはいつからですか？",
    options: [
      "届出が受理された翌月（または届出月）から",
      "届出日の翌日から",
      "届出月の翌々月から",
      "年度の始めから",
    ],
    correctAnswer: "届出が受理された翌月（または届出月）から",
    explanation:
      "体制届が受理されると、翌月（または届出月）から加算の算定が可能になります。",
    tags: ["届出"],
  },
  {
    id: "kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "事業所を指定し、体制届を受理する行政機関を何といいますか？",
    options: [
      "指定権者",
      "国保連",
      "厚生労働省",
      "市町村長",
    ],
    correctAnswer: "指定権者",
    explanation:
      "指定権者とは事業所を指定し体制届を受理する行政機関で、都道府県または政令市・中核市が担当します。",
    tags: ["基本概念"],
  },

  // === staffing（人員配置に関する加算）6問 ===
  {
    id: "st-1",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労継続支援B型の基準の人員配置比率（利用者：職員）はどれですか？",
    options: ["7.5:1", "6:1", "10:1", "5:1"],
    correctAnswer: "7.5:1",
    explanation:
      "就労継続支援B型の基準の人員配置は、利用者7.5人に対して職業指導員・生活支援員1人以上です。",
    tags: ["人員配置"],
  },
  {
    id: "st-2",
    type: "multiple_choice",
    category: "staffing",
    question:
      "人員配置体制加算(I)を算定するために必要な配置比率はどれですか？",
    options: ["6:1以上", "5:1以上", "7.5:1以上", "10:1以上"],
    correctAnswer: "6:1以上",
    explanation:
      "人員配置体制加算(I)は、基準の7.5:1を超えて6:1以上の職員配置を行っている場合に算定できます。",
    tags: ["人員配置"],
  },
  {
    id: "st-3",
    type: "multiple_choice",
    category: "staffing",
    question:
      "福祉専門職員配置等加算(I)で必要な有資格者の割合はどれですか？",
    options: ["35%以上", "25%以上", "50%以上", "75%以上"],
    correctAnswer: "35%以上",
    explanation:
      "福祉専門職員配置等加算(I)は、常勤の直接処遇職員のうち社会福祉士等の有資格者が35%以上の場合に算定できます。",
    tags: ["専門職"],
  },
  {
    id: "st-4",
    type: "multiple_choice",
    category: "staffing",
    question:
      "福祉専門職員配置等加算の対象となる資格に含まれないものはどれですか？",
    options: [
      "保育士",
      "社会福祉士",
      "介護福祉士",
      "精神保健福祉士",
    ],
    correctAnswer: "保育士",
    explanation:
      "福祉専門職員配置等加算の対象資格は社会福祉士・介護福祉士・精神保健福祉士・公認心理師です。保育士は含まれません。",
    tags: ["専門職"],
  },
  {
    id: "st-5",
    type: "multiple_choice",
    category: "staffing",
    question: "目標工賃達成指導員配置加算の算定に必要なものはどれですか？",
    options: [
      "専任の指導員配置と工賃向上計画の策定",
      "社会福祉士の配置",
      "利用者の工賃が月額3万円以上",
      "看護職員の配置",
    ],
    correctAnswer: "専任の指導員配置と工賃向上計画の策定",
    explanation:
      "目標工賃達成指導員配置加算は、専任の目標工賃達成指導員を配置し、工賃向上計画を策定・実行している場合に算定できます。",
    tags: ["工賃"],
  },
  {
    id: "st-6",
    type: "multiple_choice",
    category: "staffing",
    question:
      "サービス管理責任者の配置基準で、利用者60人以下の場合に必要な人数は？",
    options: ["1人以上", "2人以上", "3人以上", "配置不要"],
    correctAnswer: "1人以上",
    explanation:
      "サービス管理責任者は利用者60人以下で1人以上の配置が必要です。",
    tags: ["人員配置"],
  },

  // === support-system（支援体制に関する加算）6問 ===
  {
    id: "ss-1",
    type: "multiple_choice",
    category: "support-system",
    question:
      "重度者支援体制加算(I)で必要な障害支援区分4以上の利用者の割合はどれですか？",
    options: ["50%以上", "25%以上", "30%以上", "70%以上"],
    correctAnswer: "50%以上",
    explanation:
      "重度者支援体制加算(I)は、前年度の利用者のうち障害支援区分4以上が50%以上の場合に算定できます。",
    tags: ["重度者支援"],
  },
  {
    id: "ss-2",
    type: "multiple_choice",
    category: "support-system",
    question: "医療連携体制加算(I)で必要な体制はどれですか？",
    options: [
      "看護職員が訪問し健康管理を実施",
      "医師が常駐すること",
      "利用者全員の通院介助",
      "医療機器の設置",
    ],
    correctAnswer: "看護職員が訪問し健康管理を実施",
    explanation:
      "医療連携体制加算(I)は、看護職員が事業所を訪問し利用者の健康管理を実施する体制を評価する加算です。",
    tags: ["医療連携"],
  },
  {
    id: "ss-3",
    type: "multiple_choice",
    category: "support-system",
    question:
      "視覚・聴覚言語障害者支援体制加算で必要な該当利用者の割合は？",
    options: ["30%以上", "20%以上", "50%以上", "10%以上"],
    correctAnswer: "30%以上",
    explanation:
      "視覚・聴覚言語障害者支援体制加算は、該当する利用者が全体の30%以上を占める場合に算定できます。",
    tags: ["障害特性"],
  },
  {
    id: "ss-4",
    type: "multiple_choice",
    category: "support-system",
    question: "ピアサポート実施加算で必要な職員の要件はどれですか？",
    options: [
      "専門研修を修了した障害当事者の職員",
      "10年以上の福祉経験者",
      "看護師資格保有者",
      "社会福祉士資格保有者",
    ],
    correctAnswer: "専門研修を修了した障害当事者の職員",
    explanation:
      "ピアサポート実施加算は、ピアサポートの専門研修を修了した障害当事者の職員を配置し支援を実施する場合に算定できます。",
    tags: ["ピアサポート"],
  },
  {
    id: "ss-5",
    type: "multiple_choice",
    category: "support-system",
    question: "障害支援区分は何段階で分類されますか？",
    options: ["6段階", "3段階", "5段階", "10段階"],
    correctAnswer: "6段階",
    explanation:
      "障害支援区分は区分1（最軽度）から区分6（最重度）までの6段階で分類されます。",
    tags: ["重度者支援"],
  },
  {
    id: "ss-6",
    type: "multiple_choice",
    category: "support-system",
    question:
      "医療連携体制加算の種類として、最もレベルの高い医療的ケアに対応するのはどれですか？",
    options: [
      "医療連携体制加算(IV)",
      "医療連携体制加算(I)",
      "医療連携体制加算(II)",
      "医療連携体制加算(III)",
    ],
    correctAnswer: "医療連携体制加算(IV)",
    explanation:
      "医療連携体制加算は(I)〜(IV)の4段階があり、(IV)は医療的ケアの判定スコアが高い利用者への対応を評価します。",
    tags: ["医療連携"],
  },

  // === performance（実績・工賃に関する加算）6問 ===
  {
    id: "pf-1",
    type: "multiple_choice",
    category: "performance",
    question:
      "目標工賃達成加算(I)の算定要件に含まれないものはどれですか？",
    options: [
      "職員の賃金改善を実施していること",
      "工賃向上計画を策定・届出していること",
      "前年度の平均工賃月額が目標工賃を達成",
      "前々年度の平均工賃月額を上回っていること",
    ],
    correctAnswer: "職員の賃金改善を実施していること",
    explanation:
      "目標工賃達成加算(I)は工賃向上計画の策定・目標達成・前々年度超えが要件です。職員の賃金改善は処遇改善加算の要件です。",
    tags: ["工賃"],
  },
  {
    id: "pf-2",
    type: "multiple_choice",
    category: "performance",
    question:
      "就労移行支援体制加算で評価される「定着」の期間はどれですか？",
    options: [
      "6か月以上",
      "3か月以上",
      "1年以上",
      "1か月以上",
    ],
    correctAnswer: "6か月以上",
    explanation:
      "就労移行支援体制加算は、一般企業等に就労した利用者が6か月以上継続勤務した実績を評価します。",
    tags: ["就労移行"],
  },
  {
    id: "pf-3",
    type: "multiple_choice",
    category: "performance",
    question: "地域協働加算で評価される取り組みはどれですか？",
    options: [
      "地域の企業・団体と協働した活動機会の創出",
      "他の事業所との合同研修",
      "保護者向けの説明会開催",
      "行政への報告書提出",
    ],
    correctAnswer: "地域の企業・団体と協働した活動機会の創出",
    explanation:
      "地域協働加算は、地域の企業・団体と協働して利用者の就労・活動機会を創出する取り組みを評価します。",
    tags: ["地域連携"],
  },
  {
    id: "pf-4",
    type: "multiple_choice",
    category: "performance",
    question: "施設外就労加算の要件に含まれるものはどれですか？",
    options: [
      "職員が施設外就労先で支援を実施",
      "利用者が単独で企業に通勤",
      "事業所内での作業訓練",
      "利用者の自宅での内職作業",
    ],
    correctAnswer: "職員が施設外就労先で支援を実施",
    explanation:
      "施設外就労加算は、利用者が事業所外の企業等で就労し、職業指導員等が同行して支援を行うことが要件です。",
    tags: ["施設外"],
  },
  {
    id: "pf-5",
    type: "multiple_choice",
    category: "performance",
    question:
      "複数の事業所が協力して企業からの発注を受けることを何といいますか？",
    options: [
      "共同受注",
      "協同組合",
      "業務委託",
      "下請け",
    ],
    correctAnswer: "共同受注",
    explanation:
      "共同受注とは、複数の事業所や地域の団体が協力して企業等からの発注を共同で受けることです。地域協働加算の取り組み例です。",
    tags: ["地域連携"],
  },
  {
    id: "pf-6",
    type: "multiple_choice",
    category: "performance",
    question:
      "施設外就労加算と施設外支援加算の違いとして正しいものはどれですか？",
    options: [
      "施設外就労は企業での就労、施設外支援は企業実習等での支援",
      "同じ加算の別名称",
      "施設外就労は日額、施設外支援は月額",
      "施設外支援の方が単位数が高い",
    ],
    correctAnswer: "施設外就労は企業での就労、施設外支援は企業実習等での支援",
    explanation:
      "施設外就労加算は企業等での就労を評価し、施設外支援加算は企業実習等の際の連絡調整・支援を評価する別の加算です。",
    tags: ["施設外"],
  },

  // === daily-support（生活支援・その他の加算）6問 ===
  {
    id: "ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "送迎加算(I)の算定要件として、送迎実施に加えて必要な条件はどれですか？",
    options: [
      "平均利用者数が定員の70%以上",
      "送迎車両が3台以上",
      "運転手が正社員であること",
      "1日の送迎回数が10回以上",
    ],
    correctAnswer: "平均利用者数が定員の70%以上",
    explanation:
      "送迎加算(I)は送迎を実施し、かつ前年度の平均利用者数が定員の70%以上の場合に算定できます。",
    tags: ["送迎"],
  },
  {
    id: "ds-2",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "処遇改善加算の加算額は何に充当する必要がありますか？",
    options: [
      "職員の賃金改善",
      "事業所の設備投資",
      "利用者の工賃",
      "研修費用",
    ],
    correctAnswer: "職員の賃金改善",
    explanation:
      "処遇改善加算の加算額は、福祉・介護職員の賃金改善に直接充当する必要があります。",
    tags: ["処遇改善"],
  },
  {
    id: "ds-3",
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
    id: "ds-4",
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
      "初期加算は新規利用開始日から30日以内の期間について算定できます。利用開始時の手厚い支援を評価する加算です。",
    tags: ["その他"],
  },
  {
    id: "ds-5",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "訪問支援特別加算が算定できるのは、連続何日以上利用がない場合ですか？",
    options: ["5日以上", "3日以上", "7日以上", "10日以上"],
    correctAnswer: "5日以上",
    explanation:
      "訪問支援特別加算は、連続して5日間以上利用がない利用者に対し居宅を訪問して支援を行った場合に算定できます。",
    tags: ["その他"],
  },
  {
    id: "ds-6",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "利用者負担上限額管理加算の算定に必要な書類はどれですか？",
    options: [
      "上限額管理結果票",
      "個別支援計画",
      "工賃向上計画",
      "体制届",
    ],
    correctAnswer: "上限額管理結果票",
    explanation:
      "利用者負担上限額管理加算の算定には、上限額管理結果票を作成し他の事業所と利用者負担額の調整を行う必要があります。",
    tags: ["負担管理"],
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "comprehensive") {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}
