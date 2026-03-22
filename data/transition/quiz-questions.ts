import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（加算の基本）6問 ===
  {
    id: "kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "就労移行支援の基本報酬の算定において、最も重要な指標はどれですか？",
    options: [
      "就労定着率",
      "平均工賃月額",
      "利用者数",
      "職員数",
    ],
    correctAnswer: "就労定着率",
    explanation:
      "就労移行支援の基本報酬は、就労定着率（一般就労後6か月以上定着した者の割合）に応じて段階的に設定されています。B型の平均工賃月額連動とは異なる評価軸です。",
    tags: ["基本報酬"],
  },
  {
    id: "kb-2",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "就労定着率の算出に使用する期間はどれですか？",
    options: [
      "前年度と前々年度の2年間",
      "過去3年間",
      "前年度の1年間のみ",
      "過去5年間",
    ],
    correctAnswer: "前年度と前々年度の2年間",
    explanation:
      "就労定着率は、前年度と前々年度の2年間における就労定着者の合計を、同期間の利用定員合計で割って算出します。",
    tags: ["基本報酬"],
  },
  {
    id: "kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "就労移行支援の原則的な利用期間はどれですか？",
    options: [
      "2年間",
      "1年間",
      "3年間",
      "期間制限なし",
    ],
    correctAnswer: "2年間",
    explanation:
      "就労移行支援の標準利用期間は原則2年間です。市町村の審査会の個別判断により最大1年間の延長が認められる場合があります。",
    tags: ["基本概念"],
  },
  {
    id: "kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "新規に指定を受けた就労移行支援事業所は、最初の2年度間はどの就労定着率区分とみなされますか？",
    options: [
      "3割以上4割未満",
      "0",
      "5割以上",
      "1割以上2割未満",
    ],
    correctAnswer: "3割以上4割未満",
    explanation:
      "新規指定の事業所は実績がないため、最初の2年度間は「3割以上4割未満」の区分とみなされます。定員20人以下で879単位/日が適用されます。",
    tags: ["基本報酬"],
  },
  {
    id: "kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "就労移行支援の定員20人以下で就労定着率5割以上の場合の基本報酬は？",
    options: [
      "1,044単位/日",
      "879単位/日",
      "1,004単位/日",
      "702単位/日",
    ],
    correctAnswer: "1,044単位/日",
    explanation:
      "令和6年度報酬改定後、定員20人以下で就労定着率5割以上の基本報酬は1,044単位/日です。定着率が高いほど報酬が高い成果連動型です。",
    tags: ["基本報酬"],
  },
  {
    id: "kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "令和6年度報酬改定で、就労移行支援の定員下限はどのように変更されましたか？",
    options: [
      "20人から10人に引き下げ",
      "20人のまま変更なし",
      "30人から20人に引き下げ",
      "15人から10人に引き下げ",
    ],
    correctAnswer: "20人から10人に引き下げ",
    explanation:
      "令和6年度改定で、就労移行支援の利用定員の下限が20人から10人に引き下げられ、小規模でも開設しやすくなりました。",
    tags: ["報酬改定"],
  },

  // === staffing（人員配置に関する加算）6問 ===
  {
    id: "st-1",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労移行支援の基準の人員配置比率（利用者：職員）はどれですか？",
    options: ["6:1", "7.5:1", "10:1", "5:1"],
    correctAnswer: "6:1",
    explanation:
      "就労移行支援の基準配置は利用者6人に対し、就労支援員・職業指導員・生活支援員の合計1人以上（6:1）です。B型の7.5:1より手厚い設定です。",
    tags: ["人員配置"],
  },
  {
    id: "st-2",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労移行支援に固有の職種で、利用者15人に対し1人以上の配置が必要な職種はどれですか？",
    options: [
      "就労支援員",
      "職業指導員",
      "生活支援員",
      "管理者",
    ],
    correctAnswer: "就労支援員",
    explanation:
      "就労支援員は就労移行支援に固有の職種で、利用者15人に対し1人以上の配置が必要です。求職活動の支援や職場実習のあっせんなどを行います。",
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
      "福祉専門職員配置等加算(I)は、常勤の直接支援職員のうち有資格者が35%以上の場合に15単位/日で算定できます。",
    tags: ["専門職"],
  },
  {
    id: "st-4",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労支援関係研修修了加算の算定に必要な条件に含まれないものはどれですか？",
    options: [
      "社会福祉士の資格を有すること",
      "就労支援に関する専門研修を修了していること",
      "1年以上の実務経験があること",
      "前年度の就労定着実績が1人以上あること",
    ],
    correctAnswer: "社会福祉士の資格を有すること",
    explanation:
      "就労支援関係研修修了加算は、専門研修の修了・実務経験1年以上・前年度定着実績1人以上が要件です。社会福祉士の資格は不要です。",
    tags: ["研修"],
  },
  {
    id: "st-5",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労移行支援で福祉専門職員配置等加算の対象となる資格に含まれるのはどれですか？",
    options: [
      "作業療法士",
      "保育士",
      "言語聴覚士",
      "理学療法士",
    ],
    correctAnswer: "作業療法士",
    explanation:
      "就労移行支援の福祉専門職員配置等加算では、社会福祉士・介護福祉士・精神保健福祉士・公認心理師に加え、作業療法士も対象資格に含まれます。",
    tags: ["専門職"],
  },
  {
    id: "st-6",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労支援関係研修修了加算の単位数はどれですか？",
    options: ["6単位/日", "15単位/日", "10単位/日", "30単位/日"],
    correctAnswer: "6単位/日",
    explanation:
      "就労支援関係研修修了加算は6単位/日です。就労支援員が地域障害者職業センター等の研修を修了している場合に算定できます。",
    tags: ["研修"],
  },

  // === support-system（支援体制に関する加算）6問 ===
  {
    id: "ss-1",
    type: "multiple_choice",
    category: "support-system",
    question:
      "移行準備支援体制加算(II)の算定に必要な条件はどれですか？",
    options: [
      "前年度の施設外支援実施率が定員の50%超",
      "前年度に1人以上の施設外支援を実施",
      "施設外支援を週3回以上実施",
      "施設外支援を10人以上に実施",
    ],
    correctAnswer: "前年度の施設外支援実施率が定員の50%超",
    explanation:
      "移行準備支援体制加算(II)は100単位/日で、前年度に施設外支援を実施した利用者数が利用定員の50%を超えていた事業所が算定できます。",
    tags: ["施設外支援"],
  },
  {
    id: "ss-2",
    type: "multiple_choice",
    category: "support-system",
    question:
      "移行準備支援体制加算(I)の単位数はどれですか？",
    options: [
      "41単位/日",
      "100単位/日",
      "30単位/日",
      "21単位/日",
    ],
    correctAnswer: "41単位/日",
    explanation:
      "移行準備支援体制加算(I)は41単位/日で、施設外支援（企業での職場実習等）を実施した日に算定できます。(II)は100単位/日です。",
    tags: ["施設外支援"],
  },
  {
    id: "ss-3",
    type: "multiple_choice",
    category: "support-system",
    question:
      "通勤訓練加算の主な対象者はどのような利用者ですか？",
    options: [
      "視覚障害のある利用者",
      "知的障害のある利用者",
      "精神障害のある利用者",
      "肢体不自由のある利用者",
    ],
    correctAnswer: "視覚障害のある利用者",
    explanation:
      "通勤訓練加算は、主に視覚障害のある利用者に対して、外部の専門職員を招いて白杖による通勤訓練を実施した場合に算定できます。",
    tags: ["通勤訓練"],
  },
  {
    id: "ss-4",
    type: "multiple_choice",
    category: "support-system",
    question:
      "医療連携体制加算(I)で、対象利用者が1人の場合の単位数はどれですか？",
    options: [
      "500単位/日",
      "100単位/日",
      "250単位/日",
      "32単位/日",
    ],
    correctAnswer: "500単位/日",
    explanation:
      "医療連携体制加算(I)は、看護職員が訪問して健康管理を行った場合に算定でき、対象利用者が1人の場合は500単位/日です。",
    tags: ["医療連携"],
  },
  {
    id: "ss-5",
    type: "multiple_choice",
    category: "support-system",
    question:
      "令和6年度改定で支援計画会議実施加算はどのように見直されましたか？",
    options: [
      "サビ管以外の出席でも条件付きで加算対象に",
      "加算単位数が2倍に増加",
      "月1回の開催が義務化",
      "新規に創設された加算",
    ],
    correctAnswer: "サビ管以外の出席でも条件付きで加算対象に",
    explanation:
      "令和6年度改定で、サービス管理責任者以外の職員が出席する場合も、前後にサビ管と情報共有することで加算対象となるよう要件が緩和されました。",
    tags: ["支援計画"],
  },
  {
    id: "ss-6",
    type: "multiple_choice",
    category: "support-system",
    question:
      "施設外支援で利用者が行う「職場実習」の主な目的はどれですか？",
    options: [
      "利用者の適性把握と企業とのマッチング",
      "工賃の向上",
      "基本報酬の算定に必要な条件充足",
      "地域貢献活動の実施",
    ],
    correctAnswer: "利用者の適性把握と企業とのマッチング",
    explanation:
      "職場実習は、利用者が実際の職場環境で働く体験をすることで自分に合った仕事を見つけ、企業側も受入れの可否を判断する機会です。",
    tags: ["施設外支援"],
  },

  // === performance（実績に関する加算）6問 ===
  {
    id: "pf-1",
    type: "multiple_choice",
    category: "performance",
    question:
      "就労定着支援体制加算で評価される「定着」の基準期間はどれですか？",
    options: [
      "6か月以上",
      "3か月以上",
      "1年以上",
      "1か月以上",
    ],
    correctAnswer: "6か月以上",
    explanation:
      "就労定着支援体制加算は、一般就労した利用者が6か月以上継続して働いている実績を評価します。基本報酬の就労定着率も同じ基準です。",
    tags: ["定着実績"],
  },
  {
    id: "pf-2",
    type: "multiple_choice",
    category: "performance",
    question:
      "社会生活支援特別加算の単位数はどれですか？",
    options: [
      "480単位/日",
      "300単位/日",
      "100単位/日",
      "30単位/日",
    ],
    correctAnswer: "480単位/日",
    explanation:
      "社会生活支援特別加算は480単位/日と高い単位数が設定されており、就労の前提となる社会生活スキルの獲得支援を評価します。",
    tags: ["社会生活支援"],
  },
  {
    id: "pf-3",
    type: "multiple_choice",
    category: "performance",
    question:
      "在宅時生活支援サービス加算の単位数はどれですか？",
    options: [
      "300単位/日",
      "480単位/日",
      "100単位/日",
      "150単位/日",
    ],
    correctAnswer: "300単位/日",
    explanation:
      "在宅時生活支援サービス加算は300単位/日で、在宅での就労移行支援について通所時と同等の支援を提供した場合に算定できます。",
    tags: ["在宅支援"],
  },
  {
    id: "pf-4",
    type: "multiple_choice",
    category: "performance",
    question:
      "就労移行支援事業所の利用者が就職後、事業所が定着確認のフォローアップを行うべき期間はどれですか？",
    options: [
      "6か月間",
      "3か月間",
      "1年間",
      "1か月間",
    ],
    correctAnswer: "6か月間",
    explanation:
      "就労移行支援事業所は、利用者の就職後6か月間はフォローアップ（定着確認）を行うことが求められています。この期間の定着が基本報酬の算定にも影響します。",
    tags: ["定着支援"],
  },
  {
    id: "pf-5",
    type: "multiple_choice",
    category: "performance",
    question:
      "社会生活支援特別加算の支援者の要件として正しいものはどれですか？",
    options: [
      "福祉専門職員または3年以上の実務経験者",
      "看護師資格保有者",
      "5年以上の実務経験者のみ",
      "特に資格要件なし",
    ],
    correctAnswer: "福祉専門職員または3年以上の実務経験者",
    explanation:
      "社会生活支援特別加算は、福祉専門職員（社会福祉士等）または3年以上の実務経験者が支援を行うことが要件です。",
    tags: ["社会生活支援"],
  },
  {
    id: "pf-6",
    type: "multiple_choice",
    category: "performance",
    question:
      "就労定着支援と就労移行支援の関係について正しいものはどれですか？",
    options: [
      "就労定着支援は就職後6か月経過後から利用できる別のサービス",
      "就労定着支援は就労移行支援の一部として提供される",
      "就労定着支援は就職直後から利用できる",
      "就労定着支援は就労移行支援の利用中に並行して利用する",
    ],
    correctAnswer: "就労定着支援は就職後6か月経過後から利用できる別のサービス",
    explanation:
      "就労定着支援は就労移行支援とは別のサービスで、就職後6か月経過後から最大3年間利用できます。最初の6か月は移行支援事業所がフォローします。",
    tags: ["定着支援"],
  },

  // === daily-support（生活支援・その他の加算）6問 ===
  {
    id: "ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "送迎加算(I)の算定要件に含まれるものはどれですか？",
    options: [
      "1回の送迎につき平均10人以上利用かつ週3回以上実施",
      "送迎車両が3台以上",
      "運転手が正社員であること",
      "全利用者を送迎すること",
    ],
    correctAnswer: "1回の送迎につき平均10人以上利用かつ週3回以上実施",
    explanation:
      "送迎加算(I)は21単位/回で、1回の送迎につき平均10人以上が利用し（定員20人未満は定員の50%以上）、週3回以上の送迎実施が要件です。",
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
      "利用者への支援費",
      "研修費用",
    ],
    correctAnswer: "職員の賃金改善",
    explanation:
      "処遇改善加算の加算額は、福祉・介護職員の賃金改善に直接充当する必要があります。事業所の利益にはできません。",
    tags: ["処遇改善"],
  },
  {
    id: "ds-3",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "欠席時対応加算が算定できるのは月に最大何回までですか？",
    options: ["4回", "2回", "6回", "回数制限なし"],
    correctAnswer: "4回",
    explanation:
      "欠席時対応加算は94単位/日で、利用予定日に急な欠席があった場合の連絡・相談援助について月4回まで算定できます。",
    tags: ["その他"],
  },
  {
    id: "ds-4",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "初期加算が算定できる期間はどれですか？",
    options: [
      "利用開始から30日以内",
      "利用開始から60日以内",
      "利用開始から7日以内",
      "利用開始から90日以内",
    ],
    correctAnswer: "利用開始から30日以内",
    explanation:
      "初期加算は30単位/日で、新規利用開始日から30日以内の期間について算定できます。利用開始時の手厚い支援を評価する加算です。",
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
      "食事提供体制加算の単位数はどれですか？",
    options: [
      "30単位/日",
      "21単位/日",
      "50単位/日",
      "10単位/日",
    ],
    correctAnswer: "30単位/日",
    explanation:
      "食事提供体制加算は30単位/日で、低所得者等の利用者に食事を提供する体制を整えている場合に算定できます。利用者からは食材料費のみの実費徴収です。",
    tags: ["食事"],
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "comprehensive") {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}
