import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  // === kasan-basics（加算の基本）6問 ===
  {
    id: "gh-kb-1",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "令和6年度改定後、共同生活援助（介護サービス包括型）の世話人配置基準はどれですか？",
    options: ["6:1", "4:1", "5:1", "7.5:1"],
    correctAnswer: "6:1",
    explanation:
      "令和6年度改定で世話人配置基準は6:1に一本化されました。従来の4:1・5:1は人員配置体制加算で評価されます。",
    tags: ["基本報酬"],
  },
  {
    id: "gh-kb-2",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "共同生活援助の3つの類型に含まれないものはどれですか？",
    options: [
      "就労支援型",
      "介護サービス包括型",
      "外部サービス利用型",
      "日中サービス支援型",
    ],
    correctAnswer: "就労支援型",
    explanation:
      "共同生活援助の3類型は、介護サービス包括型、外部サービス利用型、日中サービス支援型です。就労支援型は存在しません。",
    tags: ["基本概念"],
  },
  {
    id: "gh-kb-3",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "介護サービス包括型で障害支援区分6の場合の基本報酬（令和6年度）はどれですか？",
    options: ["600単位/日", "667単位/日", "456単位/日", "700単位/日"],
    correctAnswer: "600単位/日",
    explanation:
      "令和6年度改定後の介護サービス包括型の基本報酬は、障害支援区分6で600単位/日です。世話人6:1配置の単位数です。",
    tags: ["基本報酬"],
  },
  {
    id: "gh-kb-4",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "大規模住居等減算で、入居定員8人以上20人以下の場合の減算割合はどれですか？",
    options: ["5%減算", "3%減算", "7%減算", "10%減算"],
    correctAnswer: "5%減算",
    explanation:
      "大規模住居等減算は入居定員8〜20人で5%減算、21人以上で7%減算です。家庭的環境の維持を促す仕組みです。",
    tags: ["減算"],
  },
  {
    id: "gh-kb-5",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "日中サービス支援型グループホームの特徴として正しいものはどれですか？",
    options: [
      "昼夜を通じた24時間体制の支援を行う",
      "日中の活動プログラムのみ提供する",
      "介護サービスを外部委託する",
      "就労支援を行う",
    ],
    correctAnswer: "昼夜を通じた24時間体制の支援を行う",
    explanation:
      "日中サービス支援型は重度者や高齢化した利用者向けに、昼夜を通じた24時間体制の支援を行う類型です。",
    tags: ["基本概念"],
  },
  {
    id: "gh-kb-6",
    type: "multiple_choice",
    category: "kasan-basics",
    question:
      "共同生活住居の入居定員として原則的に定められている上限は何人ですか？",
    options: ["10人", "7人", "20人", "15人"],
    correctAnswer: "10人",
    explanation:
      "共同生活住居の入居定員は原則2人以上10人以下と定められています。ただし既存建物を活用する場合等の特例があります。",
    tags: ["基本概念"],
  },

  // === staffing（人員配置に関する加算）6問 ===
  {
    id: "gh-st-1",
    type: "multiple_choice",
    category: "staffing",
    question:
      "人員配置体制加算(I)で障害支援区分4以上の利用者に算定される単位数はどれですか？",
    options: ["83単位/日", "77単位/日", "55単位/日", "36単位/日"],
    correctAnswer: "83単位/日",
    explanation:
      "人員配置体制加算(I)は区分4以上で83単位/日、区分3以下で77単位/日です。旧4:1配置相当の手厚い配置を評価しています。",
    tags: ["人員配置"],
  },
  {
    id: "gh-st-2",
    type: "multiple_choice",
    category: "staffing",
    question:
      "夜間支援等体制加算(I)で評価される勤務形態はどれですか？",
    options: ["夜勤", "宿直", "日勤", "オンコール"],
    correctAnswer: "夜勤",
    explanation:
      "夜間支援等体制加算(I)は夜勤配置を評価します。(II)が宿直配置、(III)が連絡体制確保です。",
    tags: ["夜間支援"],
  },
  {
    id: "gh-st-3",
    type: "multiple_choice",
    category: "staffing",
    question:
      "夜間支援等体制加算(III)の単位数はどれですか？",
    options: [
      "10単位/日（利用者数に関わらず一定）",
      "90単位/日",
      "224単位/日",
      "50単位/日",
    ],
    correctAnswer: "10単位/日（利用者数に関わらず一定）",
    explanation:
      "夜間支援等体制加算(III)は防災・連絡体制の確保を評価し、利用者数に関わらず10単位/日です。",
    tags: ["夜間支援"],
  },
  {
    id: "gh-st-4",
    type: "multiple_choice",
    category: "staffing",
    question:
      "夜間支援等体制加算(II)を算定するために労働基準監督署から取得が必要な許可はどれですか？",
    options: ["宿直許可", "夜勤許可", "深夜労働許可", "時間外労働許可"],
    correctAnswer: "宿直許可",
    explanation:
      "夜間支援等体制加算(II)は宿直配置を評価するため、所轄労働基準監督署の宿直許可が必要です。",
    tags: ["夜間支援"],
  },
  {
    id: "gh-st-5",
    type: "multiple_choice",
    category: "staffing",
    question:
      "1人の夜間支援従事者が複数の共同生活住居で支援できる利用者の上限は何人ですか？",
    options: ["20人", "30人", "10人", "15人"],
    correctAnswer: "20人",
    explanation:
      "1人の夜間支援従事者が支援できる上限は、複数住居の場合20人、1住居の場合30人です。",
    tags: ["夜間支援"],
  },
  {
    id: "gh-st-6",
    type: "multiple_choice",
    category: "staffing",
    question:
      "福祉専門職員配置等加算(I)のグループホームにおける単位数はどれですか？",
    options: ["10単位/日", "15単位/日", "7単位/日", "4単位/日"],
    correctAnswer: "10単位/日",
    explanation:
      "グループホームの福祉専門職員配置等加算(I)は10単位/日です。有資格者35%以上が要件です。",
    tags: ["専門職"],
  },

  // === support-system（支援体制に関する加算）6問 ===
  {
    id: "gh-ss-1",
    type: "multiple_choice",
    category: "support-system",
    question:
      "重度障害者支援加算(I)の単位数はどれですか？",
    options: ["360単位/日", "180単位/日", "300単位/日", "120単位/日"],
    correctAnswer: "360単位/日",
    explanation:
      "重度障害者支援加算(I)は360単位/日です。グループホームの加算の中でも最高水準の単位数です。",
    tags: ["重度者支援"],
  },
  {
    id: "gh-ss-2",
    type: "multiple_choice",
    category: "support-system",
    question:
      "重度障害者支援加算の算定に必要な専門研修修了者の割合はどれですか？",
    options: [
      "生活支援員の20%以上",
      "全職員の30%以上",
      "世話人の50%以上",
      "生活支援員の10%以上",
    ],
    correctAnswer: "生活支援員の20%以上",
    explanation:
      "重度障害者支援加算は、生活支援員の20%以上が重度訪問介護・喀痰吸引等・強度行動障害支援者養成の専門研修を修了していることが要件です。",
    tags: ["重度者支援"],
  },
  {
    id: "gh-ss-3",
    type: "multiple_choice",
    category: "support-system",
    question:
      "看護職員配置加算の単位数はどれですか？",
    options: ["70単位/日", "39単位/日", "120単位/日", "100単位/日"],
    correctAnswer: "70単位/日",
    explanation:
      "看護職員配置加算は70単位/日で、常勤換算1人以上の看護職員を専従配置した場合に利用者全員に算定できます。",
    tags: ["医療連携"],
  },
  {
    id: "gh-ss-4",
    type: "multiple_choice",
    category: "support-system",
    question:
      "強度行動障害者体験利用加算の単位数はどれですか？",
    options: ["400単位/日", "300単位/日", "500単位/日", "200単位/日"],
    correctAnswer: "400単位/日",
    explanation:
      "強度行動障害者体験利用加算は400単位/日です。強度行動障害支援者養成研修修了職員の配置が要件です。",
    tags: ["強度行動障害"],
  },
  {
    id: "gh-ss-5",
    type: "multiple_choice",
    category: "support-system",
    question:
      "医療的ケア対応支援加算と併算定できないものはどれですか？",
    options: [
      "重度障害者支援加算(I)と医療連携体制加算",
      "夜間支援等体制加算(I)",
      "人員配置体制加算(I)",
      "福祉専門職員配置等加算(I)",
    ],
    correctAnswer: "重度障害者支援加算(I)と医療連携体制加算",
    explanation:
      "医療的ケア対応支援加算（120単位/日）は、重度障害者支援加算(I)および医療連携体制加算との併算定ができません。",
    tags: ["医療連携"],
  },
  {
    id: "gh-ss-6",
    type: "multiple_choice",
    category: "support-system",
    question:
      "看護職員配置加算で、看護師1人あたりの利用者数の上限はどれですか？",
    options: ["20人", "30人", "10人", "15人"],
    correctAnswer: "20人",
    explanation:
      "看護職員配置加算は利用者20人に対して常勤換算1人以上の看護職員配置が要件です。",
    tags: ["医療連携"],
  },

  // === performance（実績・移行に関する加算）6問 ===
  {
    id: "gh-pf-1",
    type: "multiple_choice",
    category: "performance",
    question:
      "精神障害者地域移行特別加算の算定期間はどれですか？",
    options: [
      "退院後1年以内",
      "退院後6か月以内",
      "退院後2年以内",
      "退院後3か月以内",
    ],
    correctAnswer: "退院後1年以内",
    explanation:
      "精神障害者地域移行特別加算は、精神科病院に1年以上入院していた方の退院後1年以内の期間に300単位/日が算定できます。",
    tags: ["地域移行"],
  },
  {
    id: "gh-pf-2",
    type: "multiple_choice",
    category: "performance",
    question:
      "自立生活支援加算(II)の単位数はどれですか？",
    options: [
      "1,000単位/月",
      "500単位/回",
      "2,000単位/月",
      "100単位/月",
    ],
    correctAnswer: "1,000単位/月",
    explanation:
      "自立生活支援加算(II)は1,000単位/月で、日中サービス支援型が対象です。一人暮らしに向けた集中的な支援を評価しています。",
    tags: ["自立支援"],
  },
  {
    id: "gh-pf-3",
    type: "multiple_choice",
    category: "performance",
    question:
      "帰宅時支援加算で外泊期間が7日以上の場合の単位数はどれですか？",
    options: ["374単位", "187単位", "561単位", "500単位"],
    correctAnswer: "374単位",
    explanation:
      "帰宅時支援加算は外泊期間3〜7日未満で187単位、7日以上で374単位です。",
    tags: ["帰宅支援"],
  },
  {
    id: "gh-pf-4",
    type: "multiple_choice",
    category: "performance",
    question:
      "退居後共同生活援助サービス費が算定できる期間はどれですか？",
    options: [
      "退居日の属する月から3か月間",
      "退居日から6か月間",
      "退居日から1年間",
      "退居日から1か月間",
    ],
    correctAnswer: "退居日の属する月から3か月間",
    explanation:
      "退居後共同生活援助サービス費は、退居日の属する月から3か月を限度に2,000単位/月を算定できます。令和6年度新設。",
    tags: ["自立支援"],
  },
  {
    id: "gh-pf-5",
    type: "multiple_choice",
    category: "performance",
    question:
      "精神障害者地域移行特別加算の算定に必要な専門職はどれですか？",
    options: [
      "社会福祉士または精神保健福祉士",
      "看護師",
      "介護福祉士",
      "作業療法士",
    ],
    correctAnswer: "社会福祉士または精神保健福祉士",
    explanation:
      "精神障害者地域移行特別加算は、社会福祉士または精神保健福祉士等が相談援助を実施することが算定要件です。",
    tags: ["地域移行"],
  },
  {
    id: "gh-pf-6",
    type: "multiple_choice",
    category: "performance",
    question:
      "ピアサポート実施加算の単位数と算定方法の正しい組み合わせはどれですか？",
    options: [
      "100単位/月で利用者ごとに算定",
      "100単位/日で利用者ごとに算定",
      "50単位/月で事業所ごとに算定",
      "200単位/月で利用者ごとに算定",
    ],
    correctAnswer: "100単位/月で利用者ごとに算定",
    explanation:
      "ピアサポート実施加算は100単位/月で、利用者ごとに算定します。ピアサポートの専門研修を修了した障害当事者の職員配置が要件です。",
    tags: ["ピアサポート"],
  },

  // === daily-support（生活支援・その他の加算）6問 ===
  {
    id: "gh-ds-1",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "入院時支援特別加算で入院期間7日以上の場合の単位数はどれですか？",
    options: ["1,122単位/回", "561単位/回", "374単位/回", "1,000単位/回"],
    correctAnswer: "1,122単位/回",
    explanation:
      "入院時支援特別加算は入院期間3〜7日未満で561単位/回、7日以上で1,122単位/回です。月1回を限度に算定。",
    tags: ["入院時支援"],
  },
  {
    id: "gh-ds-2",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "長期入院時支援特別加算の介護サービス包括型における単位数はどれですか？",
    options: ["122単位/日", "150単位/日", "76単位/日", "100単位/日"],
    correctAnswer: "122単位/日",
    explanation:
      "長期入院時支援特別加算は、介護サービス包括型122単位/日、日中サービス支援型150単位/日、外部サービス利用型76単位/日です。",
    tags: ["入院時支援"],
  },
  {
    id: "gh-ds-3",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "処遇改善加算の加算額を充当する対象として正しいものはどれですか？",
    options: [
      "職員の賃金改善",
      "事業所の設備投資",
      "利用者の食費",
      "家賃の補填",
    ],
    correctAnswer: "職員の賃金改善",
    explanation:
      "処遇改善加算の加算額は全額、福祉・介護職員の賃金改善に直接充当する必要があります。",
    tags: ["処遇改善"],
  },
  {
    id: "gh-ds-4",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "業務継続計画未策定減算の減算割合はどれですか？",
    options: ["3%減算", "5%減算", "10%減算", "1%減算"],
    correctAnswer: "3%減算",
    explanation:
      "業務継続計画（BCP）を策定していない場合、基本報酬の3%が減算されます。感染症・自然災害のBCP策定が必要です。",
    tags: ["減算"],
  },
  {
    id: "gh-ds-5",
    type: "multiple_choice",
    category: "daily-support",
    question:
      "情報公表未報告減算で、WAM NETへの未報告による減算割合はどれですか？",
    options: ["10%減算", "5%減算", "3%減算", "7%減算"],
    correctAnswer: "10%減算",
    explanation:
      "WAM NETへの情報公表が未報告の場合、基本報酬の10%が減算されます。令和6年度から適用。",
    tags: ["減算"],
  },
  {
    id: "gh-ds-6",
    type: "multiple_choice",
    category: "daily-support",
    question: "初期加算が算定できる期間はどれですか？",
    options: [
      "入居開始から30日以内",
      "入居開始から60日以内",
      "入居開始から7日以内",
      "入居開始から90日以内",
    ],
    correctAnswer: "入居開始から30日以内",
    explanation:
      "初期加算は新規入居開始日から30日以内の期間について30単位/日が算定できます。入居直後の手厚い支援を評価する加算です。",
    tags: ["その他"],
  },
];

export function getQuestionsByCategory(category: string): QuizQuestion[] {
  if (category === "comprehensive") {
    return quizQuestions;
  }
  return quizQuestions.filter((q) => q.category === category);
}
