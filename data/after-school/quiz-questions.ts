import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（加算の基本）6問 ===
  {
    id: "as-kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "放課後等デイサービスの対象年齢は何歳から何歳ですか？",
    options: [
      "6歳〜18歳（就学児）",
      "0歳〜6歳（未就学児）",
      "3歳〜15歳（中学生まで）",
      "6歳〜20歳（20歳まで延長可）",
    ],
    correctAnswer: "6歳〜18歳（就学児）",
    explanation:
      "放課後等デイサービスは、学校に就学している障害のあるこども（6歳〜18歳）を対象とした障害児通所支援サービスです。",
    tags: ["基本概念"],
  },
  {
    id: "as-kb-2",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "令和6年度改定で導入された時間区分のうち、放課後等デイサービスで「学校休業日のみ」算定可能なのはどれですか？",
    options: [
      "時間区分3（3時間超5時間以下）",
      "時間区分1（30分以上1時間30分以下）",
      "時間区分2（1時間30分超3時間以下）",
      "すべての時間区分が常に算定可能",
    ],
    correctAnswer: "時間区分3（3時間超5時間以下）",
    explanation:
      "放課後等デイサービスでは、時間区分3（3時間超5時間以下）は学校休業日のみ算定可能です。通常の放課後は時間区分1または2で算定します。",
    tags: ["時間区分", "基本報酬"],
  },
  {
    id: "as-kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "令和6年度改定で義務化された「5領域」に含まれないものはどれですか？",
    options: [
      "就労・経済活動",
      "健康・生活",
      "運動・感覚",
      "言語・コミュニケーション",
    ],
    correctAnswer: "就労・経済活動",
    explanation:
      "5領域は「健康・生活」「運動・感覚」「認知・行動」「言語・コミュニケーション」「人間関係・社会性」です。「就労・経済活動」は含まれません。",
    tags: ["5領域"],
  },
  {
    id: "as-kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "支援プログラムの公表が未実施の場合の減算は、所定単位数の何%ですか？",
    options: ["85%を算定（15%減算）", "90%を算定（10%減算）", "95%を算定（5%減算）", "80%を算定（20%減算）"],
    correctAnswer: "85%を算定（15%減算）",
    explanation:
      "支援プログラム未公表減算は、所定単位数の85%を算定します（実質15%の減算）。令和7年4月1日から適用されます。",
    tags: ["減算", "支援プログラム"],
  },
  {
    id: "as-kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "放課後等デイサービスの基本報酬が高くなるのはどちらの区分ですか？",
    options: [
      "区分1（手厚い人員配置の事業所）",
      "区分2（基準どおりの配置の事業所）",
      "区分1と区分2は同じ報酬",
      "区分は事業所の立地で決まる",
    ],
    correctAnswer: "区分1（手厚い人員配置の事業所）",
    explanation:
      "区分1は人員配置基準を上回る手厚い体制の事業所で、区分2より基本報酬が高く設定されています。",
    tags: ["基本報酬", "区分"],
  },
  {
    id: "as-kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "個別支援計画の作成・管理を行う責任者の正式名称は何ですか？",
    options: [
      "児童発達支援管理責任者",
      "サービス管理責任者",
      "管理者",
      "主任児童指導員",
    ],
    correctAnswer: "児童発達支援管理責任者",
    explanation:
      "放課後等デイサービスでは「児童発達支援管理責任者（児発管）」が個別支援計画の作成やサービス提供プロセスの管理を行います。成人サービスの「サービス管理責任者」とは異なります。",
    tags: ["人員配置", "児発管"],
  },

  // === staffing（人員配置）6問 ===
  {
    id: "as-st-1",
    type: "multiple_choice",
    category: "staffing",
    question:
      "令和6年度改定後の児童指導員等加配加算で、最も高い単位が算定されるのはどの区分ですか？",
    options: [
      "常勤専従・経験5年以上",
      "常勤専従・経験5年未満",
      "常勤換算・経験5年以上",
      "常勤換算・経験5年未満",
    ],
    correctAnswer: "常勤専従・経験5年以上",
    explanation:
      "児童指導員等加配加算は4区分に再編され、常勤専従で経験5年以上の場合が最も高い単位（75〜187単位/日）となります。",
    tags: ["児童指導員等加配加算"],
  },
  {
    id: "as-st-2",
    type: "multiple_choice",
    category: "staffing",
    question:
      "専門的支援体制加算の単位数は何単位/日ですか？",
    options: ["123単位/日", "150単位/日", "100単位/日", "200単位/日"],
    correctAnswer: "123単位/日",
    explanation:
      "専門的支援体制加算は123単位/日です。なお、専門的支援「実施」加算は150単位/日で、両者は併算定が可能です。",
    tags: ["専門的支援"],
  },
  {
    id: "as-st-3",
    type: "multiple_choice",
    category: "staffing",
    question:
      "専門的支援実施加算の算定上限は原則月何回ですか？",
    options: [
      "原則月4回（最大6回）",
      "月2回",
      "回数制限なし",
      "月8回",
    ],
    correctAnswer: "原則月4回（最大6回）",
    explanation:
      "専門的支援実施加算は150単位/日で、原則月4回が上限ですが、利用日数等に応じて最大6回まで算定できます。",
    tags: ["専門的支援"],
  },
  {
    id: "as-st-4",
    type: "multiple_choice",
    category: "staffing",
    question:
      "児童指導員等加配加算の「経験年数」に含まれないものはどれですか？",
    options: [
      "一般企業での事務職経験",
      "幼稚園での教育経験",
      "特別支援学校での教育経験",
      "児童福祉法に規定された事業での経験",
    ],
    correctAnswer: "一般企業での事務職経験",
    explanation:
      "児童指導員等加配加算の経験年数には、児童福祉法に規定された事業のほか、幼稚園・特別支援学校・特別支援学級等での教育経験が含まれますが、一般企業の事務職経験は含まれません。",
    tags: ["児童指導員等加配加算"],
  },
  {
    id: "as-st-5",
    type: "multiple_choice",
    category: "staffing",
    question:
      "福祉専門職員配置等加算(I)の算定要件は、常勤の直接処遇職員のうち有資格者が何%以上ですか？",
    options: ["35%以上", "25%以上", "50%以上", "75%以上"],
    correctAnswer: "35%以上",
    explanation:
      "福祉専門職員配置等加算(I)は、常勤の直接処遇職員のうち社会福祉士・介護福祉士・精神保健福祉士・公認心理師の有資格者が35%以上の場合に算定できます。",
    tags: ["福祉専門職員配置等加算"],
  },
  {
    id: "as-st-6",
    type: "multiple_choice",
    category: "staffing",
    question:
      "専門的支援実施加算の対象となる「5年以上の実務経験がある」職種はどれですか？",
    options: [
      "保育士および児童指導員",
      "管理者のみ",
      "すべての職種",
      "看護師のみ",
    ],
    correctAnswer: "保育士および児童指導員",
    explanation:
      "専門的支援実施加算の対象職種には、PT・OT・ST・心理専門職等に加え、5年以上の実務経験がある保育士と児童指導員も含まれます。",
    tags: ["専門的支援"],
  },

  // === support-system（支援体制）6問 ===
  {
    id: "as-ss-1",
    type: "multiple_choice",
    category: "support-system",
    question:
      "令和6年度改定で医療連携体制加算(VII)の単位数はいくらに引き上げられましたか？",
    options: ["250単位/日", "200単位/日", "300単位/日", "150単位/日"],
    correctAnswer: "250単位/日",
    explanation:
      "医療連携体制加算(VII)は、認定特定行為業務従事者が喀痰吸引等を実施した場合の加算で、令和6年度改定で従来の200単位から250単位/日に引き上げられました。",
    tags: ["医療連携体制加算"],
  },
  {
    id: "as-ss-2",
    type: "multiple_choice",
    category: "support-system",
    question:
      "看護職員加配加算(I)の算定要件として、医療的ケアスコアの合算が何点以上必要ですか？",
    options: ["40点以上", "20点以上", "72点以上", "100点以上"],
    correctAnswer: "40点以上",
    explanation:
      "看護職員加配加算(I)は、通所するこどもの医療的ケアスコアの合算が40点以上であることが要件です。(II)は72点以上が要件です。",
    tags: ["看護職員加配加算"],
  },
  {
    id: "as-ss-3",
    type: "multiple_choice",
    category: "support-system",
    question:
      "中核機能強化加算(I)の1日あたりの単位数の範囲は？",
    options: [
      "55〜155単位/日",
      "22〜62単位/日",
      "100〜200単位/日",
      "44〜124単位/日",
    ],
    correctAnswer: "55〜155単位/日",
    explanation:
      "中核機能強化加算(I)は55〜155単位/日です。(II)は44〜124単位/日、(III)は22〜62単位/日で、要件の充足度に応じた3段階です。",
    tags: ["中核機能強化加算"],
  },
  {
    id: "as-ss-4",
    type: "multiple_choice",
    category: "support-system",
    question:
      "医療連携体制加算(I)〜(V)を算定できない場合はどれですか？",
    options: [
      "医療的ケア区分の基本報酬を算定している場合",
      "送迎加算を算定している場合",
      "処遇改善加算を算定している場合",
      "欠席時対応加算を算定している場合",
    ],
    correctAnswer: "医療的ケア区分の基本報酬を算定している場合",
    explanation:
      "医療連携体制加算(I)〜(V)は、医療的ケア区分の基本報酬を算定している場合や、看護職員加配加算を算定している場合は算定できません。",
    tags: ["医療連携体制加算", "併算定"],
  },
  {
    id: "as-ss-5",
    type: "multiple_choice",
    category: "support-system",
    question:
      "中核機能強化加算を算定するために必要な前提条件はどれですか？",
    options: [
      "市町村が地域の障害児支援の中核拠点として位置付けていること",
      "定員が30人以上であること",
      "開設から5年以上経過していること",
      "法人全体で3事業所以上運営していること",
    ],
    correctAnswer: "市町村が地域の障害児支援の中核拠点として位置付けていること",
    explanation:
      "中核機能強化加算は、市町村が地域の障害児支援の中核的役割を担うと位置付ける事業所が対象です。事業所の規模や運営年数ではなく、行政による位置付けが前提です。",
    tags: ["中核機能強化加算"],
  },
  {
    id: "as-ss-6",
    type: "multiple_choice",
    category: "support-system",
    question:
      "看護職員加配加算(I)と(II)の関係について正しいのはどれですか？",
    options: [
      "(I)と(II)は併算定できない",
      "(I)と(II)は併算定できる",
      "(I)を算定していれば(II)は自動的に算定される",
      "(II)は(I)の上位互換で、要件を満たせば自動的に切り替わる",
    ],
    correctAnswer: "(I)と(II)は併算定できない",
    explanation:
      "看護職員加配加算(I)と(II)は併算定できません。(II)はスコア合算72点以上・看護師2名以上加配とより厳しい要件ですが、(I)と同時には算定できません。",
    tags: ["看護職員加配加算", "併算定"],
  },

  // === performance（実績・家庭支援）6問 ===
  {
    id: "as-pf-1",
    type: "multiple_choice",
    category: "performance",
    question:
      "家族支援加算(I)で、居宅を訪問して1時間以上の相談支援を行った場合の単位数は？",
    options: ["300単位/回", "200単位/回", "100単位/回", "150単位/回"],
    correctAnswer: "300単位/回",
    explanation:
      "家族支援加算(I)で居宅を訪問し1時間以上の相談支援を行った場合は300単位/回です。1時間未満は200単位、対面は100単位、オンラインは80単位です。",
    tags: ["家族支援加算"],
  },
  {
    id: "as-pf-2",
    type: "multiple_choice",
    category: "performance",
    question:
      "事業所間連携加算(I)のコア連携事業所の単位数は何単位/回ですか？",
    options: ["500単位/回", "150単位/回", "300単位/回", "100単位/回"],
    correctAnswer: "500単位/回",
    explanation:
      "事業所間連携加算(I)は、市町村からの依頼を受けたコア連携事業所が算定する加算で、500単位/回（月1回限度）です。(II)のその他の事業所は150単位/回です。",
    tags: ["事業所間連携加算"],
  },
  {
    id: "as-pf-3",
    type: "multiple_choice",
    category: "performance",
    question: "自立サポート加算の対象となるのはどの学年のこどもですか？",
    options: [
      "高校2年生・3年生",
      "中学3年生・高校1年生",
      "すべての高校生",
      "小学6年生・中学1年生",
    ],
    correctAnswer: "高校2年生・3年生",
    explanation:
      "自立サポート加算は、進路選択の時期にある高校2年生・3年生を対象に、学校卒業後の生活を見据えた支援を計画的に行った場合に算定できます。",
    tags: ["自立サポート加算"],
  },
  {
    id: "as-pf-4",
    type: "multiple_choice",
    category: "performance",
    question:
      "事業所間連携加算の対象となるこどもの条件はどれですか？",
    options: [
      "セルフプランかつ複数事業所を併用",
      "すべての利用児童",
      "相談支援事業所を利用している児童",
      "1つの事業所のみを利用している児童",
    ],
    correctAnswer: "セルフプランかつ複数事業所を併用",
    explanation:
      "事業所間連携加算は、相談支援事業所を利用しない「セルフプラン」で、かつ複数の事業所を併用している児童が対象です。",
    tags: ["事業所間連携加算"],
  },
  {
    id: "as-pf-5",
    type: "multiple_choice",
    category: "performance",
    question:
      "個別サポート加算(II)で評価されるのはどのような児童への支援ですか？",
    options: [
      "要保護児童・要支援児童への支援",
      "すべての利用児童への個別支援",
      "医療的ケア児への支援",
      "強度行動障害児への支援",
    ],
    correctAnswer: "要保護児童・要支援児童への支援",
    explanation:
      "個別サポート加算(II)は、要保護児童・要支援児童に対し、児童相談所やこども家庭センター等と連携して支援を行った場合に150単位/日が算定できます。令和6年度改定で新設されました。",
    tags: ["個別サポート加算"],
  },
  {
    id: "as-pf-6",
    type: "multiple_choice",
    category: "performance",
    question:
      "家族支援加算の月あたりの算定上限は何回ですか？",
    options: ["月4回", "月2回", "月6回", "制限なし"],
    correctAnswer: "月4回",
    explanation:
      "家族支援加算は(I)(II)ともに月4回が算定上限です。訪問・対面・オンラインのいずれの方法でも、合わせて月4回が限度です。",
    tags: ["家族支援加算"],
  },

  // === daily-support（生活支援・日常）6問 ===
  {
    id: "as-ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question: "送迎加算の基本単位数は往復で何単位ですか？",
    options: ["108単位", "54単位", "150単位", "200単位"],
    correctAnswer: "108単位",
    explanation:
      "送迎加算は片道54単位、往復で108単位です。医療的ケア児や重症心身障害児の場合は片道40単位が追加されます。",
    tags: ["送迎加算"],
  },
  {
    id: "as-ds-2",
    type: "multiple_choice",
    category: "daily-support",
    question: "欠席時対応加算の算定要件として、欠席の連絡はいつまでに受ける必要がありますか？",
    options: [
      "前々日から当日まで",
      "1週間前まで",
      "前日まで",
      "当日のみ",
    ],
    correctAnswer: "前々日から当日まで",
    explanation:
      "欠席時対応加算は、前々日から当日までに欠席の連絡を受けていることが要件です。それ以前の連絡は対象外です。",
    tags: ["欠席時対応加算"],
  },
  {
    id: "as-ds-3",
    type: "multiple_choice",
    category: "daily-support",
    question: "集中的支援加算の単位数は何単位/回ですか？",
    options: ["1,000単位/回", "500単位/回", "200単位/回", "150単位/回"],
    correctAnswer: "1,000単位/回",
    explanation:
      "集中的支援加算は1,000単位/回で、強度行動障害の状態が悪化した場合に広域的支援人材が訪問して集中的支援を行った場合に算定できます。3か月以内に月4回が限度です。",
    tags: ["集中的支援加算"],
  },
  {
    id: "as-ds-4",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "令和6年度改定で処遇改善加算はどのように変わりましたか？",
    options: [
      "3つの加算が一本化された",
      "新たに3つの加算が追加された",
      "処遇改善加算は廃止された",
      "単位数が2倍に引き上げられた",
    ],
    correctAnswer: "3つの加算が一本化された",
    explanation:
      "令和6年度改定で、従来の「処遇改善加算」「特定処遇改善加算」「ベースアップ等支援加算」の3つが「福祉・介護職員等処遇改善加算」として一本化されました。",
    tags: ["処遇改善加算"],
  },
  {
    id: "as-ds-5",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "医療的ケア児の送迎で追加される加算の要件として、運転手に加えて同乗が必要なのは？",
    options: ["看護職員", "児童指導員", "管理者", "児発管"],
    correctAnswer: "看護職員",
    explanation:
      "医療的ケア児の送迎では、運転手に加えて看護職員が同乗することが要件です。なお、重症心身障害児の場合は直接支援業務に従事する職員の同乗が必要です。",
    tags: ["送迎加算"],
  },
  {
    id: "as-ds-6",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "欠席時対応加算の単位数と月の算定上限は？",
    options: [
      "94単位/回、月4回まで",
      "100単位/回、月2回まで",
      "150単位/回、月4回まで",
      "94単位/回、月6回まで",
    ],
    correctAnswer: "94単位/回、月4回まで",
    explanation:
      "欠席時対応加算は94単位/回で、月4回が上限です。こどもや保護者に連絡し相談援助等を行った場合に算定でき、内容の記録が必要です。",
    tags: ["欠席時対応加算"],
  },
];

export function getQuestionsByCategory(
  category: QuizQuestion["category"]
): QuizQuestion[] {
  return quizQuestions.filter((q) => q.category === category);
}
