import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（加算の基本・スコア方式）6問 ===
  {
    id: "kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "就労継続支援A型の基本報酬はどのような方式で決まりますか？",
    options: [
      "スコア方式（7つの評価項目の合計点）",
      "平均工賃月額による段階方式",
      "利用者数のみによる定額方式",
      "事業所の売上高による比例方式",
    ],
    correctAnswer: "スコア方式（7つの評価項目の合計点）",
    explanation:
      "就労継続支援A型の基本報酬は、7つの評価項目の合計点（200点満点）によって決まるスコア方式を採用しています。B型の平均工賃月額方式とは異なります。",
    tags: ["スコア方式"],
  },
  {
    id: "kb-2",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "就労継続支援A型と就労継続支援B型の最大の違いはどれですか？",
    options: [
      "A型は雇用契約を締結し、利用者は労働者となる",
      "A型は利用者に工賃を支払わない",
      "A型は定員制限がない",
      "A型は職業指導員が不要である",
    ],
    correctAnswer: "A型は雇用契約を締結し、利用者は労働者となる",
    explanation:
      "A型の最大の特徴は雇用契約を締結することです。利用者は労働基準法・最低賃金法の適用を受ける労働者となります。",
    tags: ["雇用契約"],
  },
  {
    id: "kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "スコア方式の評価項目は全部でいくつありますか？",
    options: ["7項目", "5項目", "6項目", "10項目"],
    correctAnswer: "7項目",
    explanation:
      "令和6年度改定後のスコア方式は7項目です。労働時間、生産活動、多様な働き方、支援力向上、地域連携活動、経営改善、利用者の知識及び能力の向上で構成されています。",
    tags: ["スコア方式"],
  },
  {
    id: "kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "スコア方式の評価点は何点満点ですか？",
    options: ["200点", "100点", "150点", "300点"],
    correctAnswer: "200点",
    explanation:
      "スコア方式の評価点は200点満点で算定されます。7つの評価項目の合計点に基づいて7段階（170点以上〜60点未満）に区分されます。",
    tags: ["スコア方式"],
  },
  {
    id: "kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "新規指定を受けたA型事業所の初年度のスコア評価はどのように算定されますか？",
    options: [
      "80点以上105点未満のみなし算定",
      "170点以上の最高区分で算定",
      "0点として算定",
      "都道府県が個別に評価点を決定",
    ],
    correctAnswer: "80点以上105点未満のみなし算定",
    explanation:
      "新規指定の事業所は初年度はスコアを算出できないため、80点以上105点未満の評価点でみなし算定されます。",
    tags: ["基本報酬"],
  },
  {
    id: "kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "スコア評価結果の公表を怠った場合、どのようなペナルティがありますか？",
    options: [
      "所定単位数の15%減算",
      "所定単位数の5%減算",
      "特にペナルティはない",
      "加算の算定が停止される",
    ],
    correctAnswer: "所定単位数の15%減算",
    explanation:
      "スコア方式による評価結果は毎年度4月中にインターネット等で公表しなければなりません。未公表の場合は所定単位数の85%算定（15%減算）となります。",
    tags: ["減算"],
  },

  // === staffing（人員配置に関する加算）6問 ===
  {
    id: "st-1",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労継続支援A型サービス費(I)の人員配置基準（利用者：職員）はどれですか？",
    options: ["7.5:1", "6:1", "10:1", "5:1"],
    correctAnswer: "7.5:1",
    explanation:
      "サービス費(I)は職業指導員と生活支援員の常勤換算合計が利用者7.5人に対し1人以上の配置です。10:1はサービス費(II)です。",
    tags: ["人員配置"],
  },
  {
    id: "st-2",
    type: "multiple_choice",
    category: "staffing",
    question:
      "賃金向上達成指導員配置加算の算定に必要な要件に含まれないものはどれですか？",
    options: [
      "社会福祉士の資格保有",
      "賃金向上計画の作成",
      "キャリアアップの仕組みの導入",
      "専任指導員の常勤換算1名以上の配置",
    ],
    correctAnswer: "社会福祉士の資格保有",
    explanation:
      "賃金向上達成指導員配置加算は、賃金向上計画の作成、キャリアアップの仕組みの導入、専任指導員の配置が要件です。社会福祉士の資格は求められていません。",
    tags: ["賃金向上"],
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
      "賃金向上達成指導員について正しい記述はどれですか？",
    options: [
      "他の職種との同時並行的な兼務はできない",
      "非常勤でもよい",
      "施設外就労先に配置してもよい",
      "管理者が兼任することが推奨される",
    ],
    correctAnswer: "他の職種との同時並行的な兼務はできない",
    explanation:
      "賃金向上達成指導員は職業指導員や生活支援員などの他の職種との同時並行的な兼務は認められません。また施設外就労時は本体施設に配置する必要があります。",
    tags: ["賃金向上"],
  },
  {
    id: "st-5",
    type: "multiple_choice",
    category: "staffing",
    question:
      "就労継続支援A型で福祉専門職員配置等加算の対象となる資格に含まれるものはどれですか？",
    options: [
      "作業療法士",
      "保育士",
      "栄養士",
      "理学療法士",
    ],
    correctAnswer: "作業療法士",
    explanation:
      "就労系サービス（就労移行支援、就労継続支援A型・B型）では、社会福祉士・介護福祉士・精神保健福祉士・公認心理師に加えて作業療法士も対象資格に含まれます。",
    tags: ["専門職"],
  },
  {
    id: "st-6",
    type: "multiple_choice",
    category: "staffing",
    question:
      "賃金向上達成指導員配置加算において、「キャリアアップの仕組み」とは何を指しますか？",
    options: [
      "昇格・昇進・昇給の仕組みを就業規則に記載すること",
      "利用者に資格取得を義務付けること",
      "外部の研修に年3回以上参加させること",
      "利用者の勤務評価を毎月行うこと",
    ],
    correctAnswer: "昇格・昇進・昇給の仕組みを就業規則に記載すること",
    explanation:
      "キャリアアップの仕組みとは、将来の職務上の地位や賃金の改善を図るため、昇格・昇進・昇給といった仕組みが就業規則に記載されていることを指します。",
    tags: ["賃金向上"],
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
    id: "ss-4",
    type: "multiple_choice",
    category: "support-system",
    question: "令和6年度に新設された支援体制加算はどれですか？",
    options: [
      "高次脳機能障害者支援体制加算",
      "医療連携体制加算(V)",
      "重度者支援体制加算(III)",
      "知的障害者支援体制加算",
    ],
    correctAnswer: "高次脳機能障害者支援体制加算",
    explanation:
      "高次脳機能障害者支援体制加算は令和6年度に新設されました。高次脳機能障害者が30%以上で、養成研修修了者を50:1以上配置した場合に算定できます。",
    tags: ["高次脳機能障害"],
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
      "視覚・聴覚言語障害者支援体制加算で必要な専門職員の配置割合はどれですか？",
    options: [
      "利用者50人に1人以上",
      "利用者10人に1人以上",
      "利用者100人に1人以上",
      "利用者30人に1人以上",
    ],
    correctAnswer: "利用者50人に1人以上",
    explanation:
      "視覚・聴覚言語障害者支援体制加算では、意思疎通に専門対応できる職員を利用者の数を50で除した数以上配置する必要があります。",
    tags: ["障害特性"],
  },

  // === performance（実績・スコアに関する加算）6問 ===
  {
    id: "pf-1",
    type: "multiple_choice",
    category: "performance",
    question:
      "スコア方式の評価項目「経営改善」で、経営改善計画を提出期限までに未提出の場合の減点は何点ですか？",
    options: ["-50点", "-30点", "-10点", "-100点"],
    correctAnswer: "-50点",
    explanation:
      "令和6年度改定で、経営改善計画を提出期限までに未提出の場合は-50点の大幅減点となります。200点満点中の-50点はインパクトが非常に大きいです。",
    tags: ["スコア方式"],
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
    question:
      "スコア方式の「生産活動」の評価で、令和6年度改定後に追加された仕組みはどれですか？",
    options: [
      "生産活動収支が賃金総額を下回った場合に減点",
      "利用者全員の労働時間を均一にする要件",
      "生産活動収支の公表義務",
      "外部監査の受入義務",
    ],
    correctAnswer: "生産活動収支が賃金総額を下回った場合に減点",
    explanation:
      "令和6年度改定で、生産活動収支が賃金総額を上回る場合は加点、下回る場合は減点される仕組みに変更されました。",
    tags: ["スコア方式"],
  },
  {
    id: "pf-4",
    type: "multiple_choice",
    category: "performance",
    question: "集中的支援加算の単位数と期間はどれですか？",
    options: [
      "500単位/日、3か月以内",
      "100単位/日、6か月以内",
      "300単位/日、1か月以内",
      "1000単位/日、2週間以内",
    ],
    correctAnswer: "500単位/日、3か月以内",
    explanation:
      "集中的支援加算は、集中的な支援が必要な利用者を他事業所から受け入れ、3か月以内の期間について500単位/日を算定できます。",
    tags: ["集中支援"],
  },
  {
    id: "pf-5",
    type: "multiple_choice",
    category: "performance",
    question:
      "令和6年度に新設されたスコア評価項目「利用者の知識及び能力の向上」の要件はどれですか？",
    options: [
      "スキルアップ支援の実施と報告書の作成・公表",
      "利用者全員に資格を取得させること",
      "外部講師による月1回以上の研修の実施",
      "利用者の学歴向上のための教育プログラムの提供",
    ],
    correctAnswer: "スキルアップ支援の実施と報告書の作成・公表",
    explanation:
      "「利用者の知識及び能力の向上」は、一般就労に向けたスキルアップ支援を実施し、その具体的内容を記載した報告書を作成・インターネット等で公表することが要件です。",
    tags: ["スコア方式"],
  },
  {
    id: "pf-6",
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

  // === daily-support（生活支援・その他の加算）6問 ===
  {
    id: "ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "送迎加算の算定要件として、1回の送迎で必要な平均利用者数はどれですか？（定員20人以上の場合）",
    options: [
      "平均10人以上",
      "平均5人以上",
      "平均20人以上",
      "人数要件はない",
    ],
    correctAnswer: "平均10人以上",
    explanation:
      "送迎加算は、1回の送迎につき平均10人以上の利用者が利用していることが要件です。ただし定員20人未満の事業所は定員の50%以上です。",
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
      "利用者の賃金",
      "研修費用",
    ],
    correctAnswer: "職員の賃金改善",
    explanation:
      "処遇改善加算の加算額は、福祉・介護職員の賃金改善に直接充当する必要があります。事業所の利益にすることはできません。",
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
      "初期加算は新規利用開始日から30日以内の期間について算定できます。A型では雇用開始時の職場適応支援を評価する加算です。",
    tags: ["その他"],
  },
  {
    id: "ds-5",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "令和6年度からA型の処遇改善加算はどのように算定されますか？",
    options: [
      "加減算後の総報酬単位数に加算率を乗じる",
      "基本報酬のみに加算率を乗じる",
      "利用者数に固定の単位数を乗じる",
      "事業所の売上に応じた定額",
    ],
    correctAnswer: "加減算後の総報酬単位数に加算率を乗じる",
    explanation:
      "令和6年度からの処遇改善加算は、加減算後の総報酬単位数に加算率を乗じる方式で算定されます。基本報酬だけでなく加算・減算後の総額が基準となります。",
    tags: ["処遇改善"],
  },
  {
    id: "ds-6",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "訪問支援特別加算が算定できるのは、連続何日以上利用がない場合ですか？",
    options: ["5日以上", "3日以上", "7日以上", "10日以上"],
    correctAnswer: "5日以上",
    explanation:
      "訪問支援特別加算は、連続して5日間以上利用がない利用者に対し居宅を訪問して支援を行った場合に算定できます。A型では雇用契約の維持の観点からも重要な対応です。",
    tags: ["その他"],
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "comprehensive") {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}
