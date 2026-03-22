import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（基本報酬の仕組み）6問 ===
  {
    id: "pc-kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "計画相談支援の基本報酬のうち、新規にサービス等利用計画を作成した場合に算定する報酬は何ですか？",
    options: [
      "サービス利用支援費",
      "継続サービス利用支援費",
      "初回加算",
      "機能強化型サービス利用支援費",
    ],
    correctAnswer: "サービス利用支援費",
    explanation:
      "サービス利用支援費は、新規のサービス等利用計画を作成した場合に算定する基本報酬です。継続サービス利用支援費はモニタリング時に算定します。",
    tags: ["基本報酬"],
  },
  {
    id: "pc-kb-2",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "サービス利用支援費(I)の単位数（取扱件数40未満の場合）はどれですか？",
    options: [
      "1,572単位/月",
      "1,308単位/月",
      "732単位/月",
      "1,864単位/月",
    ],
    correctAnswer: "1,572単位/月",
    explanation:
      "サービス利用支援費(I)は取扱件数40未満の場合1,572単位/月です。(II)は40件以上で732単位/月と大幅に下がります。",
    tags: ["基本報酬"],
  },
  {
    id: "pc-kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "相談支援専門員1人あたりの取扱件数が何件を超えると基本報酬が大幅に下がりますか？",
    options: [
      "40件",
      "30件",
      "50件",
      "35件",
    ],
    correctAnswer: "40件",
    explanation:
      "取扱件数が40件を超えると、サービス利用支援費・継続サービス利用支援費ともに(II)の低い報酬が適用されます。質の担保のため件数を抑制する設計です。",
    tags: ["基本報酬"],
  },
  {
    id: "pc-kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "セルフプランとはどのような計画ですか？",
    options: [
      "利用者本人や家族が自ら作成するサービス等利用計画",
      "相談支援専門員が作成する簡易版の計画",
      "市町村が作成する暫定的な計画",
      "事業所が独自に作成する内部計画",
    ],
    correctAnswer: "利用者本人や家族が自ら作成するサービス等利用計画",
    explanation:
      "セルフプランは、相談支援事業所を利用せず利用者本人や家族が自ら作成する計画です。相談支援専門員の不足によりやむを得ず選択されるケースが多くあります。",
    tags: ["基本概念"],
  },
  {
    id: "pc-kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "計画相談支援の基本報酬の算定方式として正しいものはどれですか？",
    options: [
      "月額（計画1件あたり）",
      "日額（利用日ごと）",
      "年額（年間一括）",
      "時間額（面談時間ごと）",
    ],
    correctAnswer: "月額（計画1件あたり）",
    explanation:
      "計画相談支援の基本報酬は月額で、計画1件あたりの報酬です。通所サービスのような日額制とは異なります。",
    tags: ["基本報酬"],
  },
  {
    id: "pc-kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question: "機能強化型サービス利用支援費(I)の単位数はどれですか？",
    options: [
      "1,864単位/月",
      "1,572単位/月",
      "1,672単位/月",
      "2,000単位/月",
    ],
    correctAnswer: "1,864単位/月",
    explanation:
      "機能強化型サービス利用支援費(I)は1,864単位/月で、質の高い相談支援体制を整えた事業所が算定できる最上位の基本報酬です。",
    tags: ["基本報酬"],
  },

  // === staffing（人員配置）6問 ===
  {
    id: "pc-st-1",
    type: "multiple_choice",
    category: "staffing",
    question: "主任相談支援専門員配置加算(I)の単位数はどれですか？",
    options: [
      "300単位/月",
      "100単位/月",
      "200単位/月",
      "500単位/月",
    ],
    correctAnswer: "300単位/月",
    explanation:
      "主任相談支援専門員配置加算(I)は300単位/月です。地域の中核的役割を担い、他事業所への指導・助言も行う場合に算定します。(II)は100単位/月です。",
    tags: ["主任相談支援専門員"],
  },
  {
    id: "pc-st-2",
    type: "multiple_choice",
    category: "staffing",
    question: "主任相談支援専門員になるために必要な実務経験年数はどれですか？",
    options: [
      "5年以上",
      "3年以上",
      "10年以上",
      "7年以上",
    ],
    correctAnswer: "5年以上",
    explanation:
      "主任相談支援専門員になるには、相談支援専門員として5年以上の実務経験と主任相談支援専門員研修の修了が必要です。",
    tags: ["主任相談支援専門員"],
  },
  {
    id: "pc-st-3",
    type: "multiple_choice",
    category: "staffing",
    question: "ピアサポート体制加算の算定要件として正しいものはどれですか？",
    options: [
      "障害者ピアサポート研修修了の当事者職員と協働者を各0.5以上配置",
      "障害当事者を1名以上配置すればよい",
      "ピアサポーター養成講座の受講のみで算定可能",
      "当事者職員を常勤で2名以上配置",
    ],
    correctAnswer: "障害者ピアサポート研修修了の当事者職員と協働者を各0.5以上配置",
    explanation:
      "ピアサポート体制加算は、障害者ピアサポート研修（基礎+専門）を修了した当事者職員と協働者をそれぞれ常勤換算0.5以上配置することが要件です。",
    tags: ["ピアサポート"],
  },
  {
    id: "pc-st-4",
    type: "multiple_choice",
    category: "staffing",
    question: "機能強化型サービス利用支援費(I)で必要な常勤専従の相談支援専門員の配置人数は？",
    options: [
      "3名以上",
      "2名以上",
      "1名以上",
      "5名以上",
    ],
    correctAnswer: "3名以上",
    explanation:
      "機能強化型(I)では常勤専従の相談支援専門員を3名以上配置し、うち1名以上が主任相談支援専門員であることが必要です。",
    tags: ["機能強化型"],
  },
  {
    id: "pc-st-5",
    type: "multiple_choice",
    category: "staffing",
    question: "令和6年度改定で新設された「相談支援員」として配置できる資格は何ですか？",
    options: [
      "社会福祉士または精神保健福祉士",
      "介護福祉士",
      "保育士",
      "看護師",
    ],
    correctAnswer: "社会福祉士または精神保健福祉士",
    explanation:
      "令和6年度改定で、機能強化型事業所では主任相談支援専門員の指導助言のもと、常勤専従の社会福祉士または精神保健福祉士を「相談支援員」として配置できるようになりました。",
    tags: ["機能強化型"],
  },
  {
    id: "pc-st-6",
    type: "multiple_choice",
    category: "staffing",
    question: "相談支援専門員の資格更新に必要な研修の受講間隔はどれですか？",
    options: [
      "5年ごと",
      "3年ごと",
      "毎年",
      "10年ごと",
    ],
    correctAnswer: "5年ごと",
    explanation:
      "相談支援専門員は5年ごとに現任研修を修了し、資格を更新する必要があります。更新しないと相談支援専門員として従事できません。",
    tags: ["相談支援専門員"],
  },

  // === support-system（支援体制）6問 ===
  {
    id: "pc-ss-1",
    type: "multiple_choice",
    category: "support-system",
    question: "行動障害支援体制加算(I)の単位数はどれですか？",
    options: [
      "60単位/月",
      "30単位/月",
      "100単位/月",
      "300単位/月",
    ],
    correctAnswer: "60単位/月",
    explanation:
      "行動障害支援体制加算(I)は60単位/月で、行動関連項目10点以上の利用者に実際に計画相談を行っている場合に算定できます。(II)は体制のみで30単位/月です。",
    tags: ["行動障害"],
  },
  {
    id: "pc-ss-2",
    type: "multiple_choice",
    category: "support-system",
    question: "要医療児者支援体制加算の算定に必要な研修はどれですか？",
    options: [
      "医療的ケア児等コーディネーター研修",
      "強度行動障害支援者養成研修",
      "相談支援従事者初任者研修",
      "精神障害者支援専門研修",
    ],
    correctAnswer: "医療的ケア児等コーディネーター研修",
    explanation:
      "要医療児者支援体制加算は、医療的ケア児等コーディネーター研修を修了した常勤の相談支援専門員を配置していることが要件です。",
    tags: ["要医療児者"],
  },
  {
    id: "pc-ss-3",
    type: "multiple_choice",
    category: "support-system",
    question: "高次脳機能障害支援体制加算はいつ新設されましたか？",
    options: [
      "令和6年度",
      "令和3年度",
      "平成30年度",
      "令和9年度",
    ],
    correctAnswer: "令和6年度",
    explanation:
      "高次脳機能障害支援体制加算は令和6年度改定で新設されました。高次脳機能障害支援者養成研修修了の相談支援専門員を配置した事業所を評価します。",
    tags: ["高次脳機能障害"],
  },
  {
    id: "pc-ss-4",
    type: "multiple_choice",
    category: "support-system",
    question: "精神障害者支援体制加算(II)の算定要件として正しいものはどれですか？",
    options: [
      "専門研修修了の相談支援専門員を配置し、その旨を公表していること",
      "精神障害者に実際に計画相談を行っていること",
      "精神科病院と連携協定を結んでいること",
      "精神保健福祉士を常勤で配置していること",
    ],
    correctAnswer: "専門研修修了の相談支援専門員を配置し、その旨を公表していること",
    explanation:
      "精神障害者支援体制加算(II)は、専門研修修了の常勤相談支援専門員を配置し、その旨を公表していれば算定できます。(I)は実際に精神障害者に計画相談を行っている場合に算定します。",
    tags: ["精神障害者支援"],
  },
  {
    id: "pc-ss-5",
    type: "multiple_choice",
    category: "support-system",
    question: "令和6年度改定で支援体制加算(行動障害・要医療児者・精神障害者)はどのように見直されましたか？",
    options: [
      "対象者ありの(I)が新設され、従来の内容は(II)に整理された",
      "すべての加算が統合された",
      "単位数が2倍に引き上げられた",
      "算定要件が廃止された",
    ],
    correctAnswer: "対象者ありの(I)が新設され、従来の内容は(II)に整理された",
    explanation:
      "令和6年度改定で、実際に対象者を支援している場合の(I)（60単位）が新設され、体制整備のみの従来の加算は(II)（30単位）に整理されました。",
    tags: ["支援体制"],
  },
  {
    id: "pc-ss-6",
    type: "multiple_choice",
    category: "support-system",
    question: "高次脳機能障害の原因として最も一般的なものはどれですか？",
    options: [
      "交通事故や脳卒中の後遺症",
      "先天性の障害",
      "薬の副作用",
      "加齢による認知機能低下",
    ],
    correctAnswer: "交通事故や脳卒中の後遺症",
    explanation:
      "高次脳機能障害は、交通事故や脳卒中などによる脳損傷の後遺症として生じます。記憶障害、注意障害、遂行機能障害などの症状があり、外見からは分かりにくい「見えない障害」です。",
    tags: ["高次脳機能障害"],
  },

  // === performance（実績）6問 ===
  {
    id: "pc-pf-1",
    type: "multiple_choice",
    category: "performance",
    question: "初回加算の単位数はどれですか？",
    options: [
      "300単位/月",
      "100単位/月",
      "500単位/月",
      "150単位/月",
    ],
    correctAnswer: "300単位/月",
    explanation:
      "初回加算は300単位/月です。新規に計画相談支援の利用を開始した利用者に対して算定できます。",
    tags: ["初回加算"],
  },
  {
    id: "pc-pf-2",
    type: "multiple_choice",
    category: "performance",
    question: "サービス担当者会議実施加算を算定するために必要なことはどれですか？",
    options: [
      "関係するサービス担当者を招集して会議を開催",
      "利用者に電話で状況を確認",
      "サービス事業所に書面で照会",
      "市町村に報告書を提出",
    ],
    correctAnswer: "関係するサービス担当者を招集して会議を開催",
    explanation:
      "サービス担当者会議実施加算は、モニタリング時に関係する福祉サービスの担当者を招集して会議を開催した場合に100単位/月が算定できます。",
    tags: ["サービス担当者会議"],
  },
  {
    id: "pc-pf-3",
    type: "multiple_choice",
    category: "performance",
    question: "サービス提供時モニタリング加算で、相談支援専門員1人あたり算定可能な利用者の上限は？",
    options: [
      "39人",
      "35人",
      "40人",
      "制限なし",
    ],
    correctAnswer: "39人",
    explanation:
      "サービス提供時モニタリング加算は、相談支援専門員1人あたりの利用者数が39人を超える場合、39人を超える分については算定できません。",
    tags: ["モニタリング"],
  },
  {
    id: "pc-pf-4",
    type: "multiple_choice",
    category: "performance",
    question: "入院時情報連携加算(I)の算定要件として、情報提供の期限はいつまでですか？",
    options: [
      "入院後3日以内",
      "入院後7日以内",
      "入院後1か月以内",
      "入院当日のみ",
    ],
    correctAnswer: "入院後3日以内",
    explanation:
      "入院時情報連携加算(I)は入院後3日以内に医療機関へ情報提供した場合に300単位/月が算定できます。(II)は7日以内で150単位/月です。",
    tags: ["入院時情報連携"],
  },
  {
    id: "pc-pf-5",
    type: "multiple_choice",
    category: "performance",
    question: "初回加算で計画案交付まで3か月を超えた場合の追加加算の上限月数は？",
    options: [
      "3か月",
      "6か月",
      "1か月",
      "制限なし",
    ],
    correctAnswer: "3か月",
    explanation:
      "初回加算で計画案交付まで3か月を超える場合、追加の訪問面接に対して300単位に面接月数（3を限度）を乗じた単位数が加算されます。",
    tags: ["初回加算"],
  },
  {
    id: "pc-pf-6",
    type: "multiple_choice",
    category: "performance",
    question: "サービス提供時モニタリング加算で相談支援専門員が行うことはどれですか？",
    options: [
      "障害福祉サービスの提供現場を訪問し、提供状況を確認・記録",
      "利用者の自宅を訪問し面接する",
      "サービス事業所に書面で照会する",
      "市町村にモニタリング結果を報告する",
    ],
    correctAnswer: "障害福祉サービスの提供現場を訪問し、提供状況を確認・記録",
    explanation:
      "サービス提供時モニタリング加算は、利用者が利用する障害福祉サービスの提供現場を訪問し、サービスの提供状況を直接確認して記録した場合に算定できます。",
    tags: ["モニタリング"],
  },

  // === daily-support（その他）6問 ===
  {
    id: "pc-ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question: "地域体制強化共同支援加算の単位数はどれですか？",
    options: [
      "2,000単位/月",
      "1,000単位/月",
      "300単位/月",
      "500単位/月",
    ],
    correctAnswer: "2,000単位/月",
    explanation:
      "地域体制強化共同支援加算は2,000単位/月です。地域生活支援拠点等の事業所が支援困難事例に共同対応し、協議会に報告した場合に算定できます。",
    tags: ["地域連携"],
  },
  {
    id: "pc-ds-2",
    type: "multiple_choice",
    category: "daily-support",
    question: "居宅介護支援事業所等連携加算はどのような場面で算定できますか？",
    options: [
      "利用者が介護保険サービスに移行する際にケアマネジャーと連携した場合",
      "利用者が入院した際に医療機関と連携した場合",
      "利用者が転居する際に転居先の事業所と連携した場合",
      "利用者が就労する際にハローワークと連携した場合",
    ],
    correctAnswer: "利用者が介護保険サービスに移行する際にケアマネジャーと連携した場合",
    explanation:
      "居宅介護支援事業所等連携加算は、障害のある方が65歳前後で介護保険に移行する際に、居宅介護支援事業所（ケアマネジャー）と連携して情報共有を行った場合に算定できます。",
    tags: ["介護保険連携"],
  },
  {
    id: "pc-ds-3",
    type: "multiple_choice",
    category: "daily-support",
    question: "集中支援加算はどのような月に算定できますか？",
    options: [
      "基本報酬を算定しない月",
      "モニタリング実施月",
      "計画作成月",
      "毎月算定可能",
    ],
    correctAnswer: "基本報酬を算定しない月",
    explanation:
      "集中支援加算は、基本報酬（サービス利用支援費・継続サービス利用支援費）を算定しない月に、居宅訪問や担当者会議等を行った場合に算定できます。",
    tags: ["集中支援"],
  },
  {
    id: "pc-ds-4",
    type: "multiple_choice",
    category: "daily-support",
    question: "処遇改善加算の加算額は何に充当する必要がありますか？",
    options: [
      "職員の賃金改善",
      "事業所の設備投資",
      "利用者への還元",
      "研修費用",
    ],
    correctAnswer: "職員の賃金改善",
    explanation:
      "処遇改善加算の加算額は、福祉・介護職員の賃金改善に全額充当する必要があります。事業所の利益にすることはできません。",
    tags: ["処遇改善"],
  },
  {
    id: "pc-ds-5",
    type: "multiple_choice",
    category: "daily-support",
    question: "令和6年度改定で集中支援加算に新設された区分はどれですか？",
    options: [
      "通院同行と情報提供",
      "居宅訪問と電話相談",
      "研修参加と報告書作成",
      "就労支援と生活支援",
    ],
    correctAnswer: "通院同行と情報提供",
    explanation:
      "令和6年度改定で、集中支援加算に通院同行（300単位/回）と情報提供（150単位/月）の区分が新設されました。",
    tags: ["集中支援"],
  },
  {
    id: "pc-ds-6",
    type: "multiple_choice",
    category: "daily-support",
    question: "介護保険優先原則により、障害者が65歳以上になった場合にどうなりますか？",
    options: [
      "同等の介護保険サービスがある場合、介護保険を優先して利用する",
      "障害福祉サービスが自動的に停止される",
      "利用者が自由に選択できる",
      "すべて介護保険サービスに切り替わる",
    ],
    correctAnswer: "同等の介護保険サービスがある場合、介護保険を優先して利用する",
    explanation:
      "介護保険優先原則では、同等の介護保険サービスがある場合は介護保険を優先しますが、障害福祉固有のサービスや上乗せ・横出しの部分は引き続き障害福祉で対応できます。",
    tags: ["介護保険連携"],
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "comprehensive") {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}
