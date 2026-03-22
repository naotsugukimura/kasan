import { ContentSection, TermDefinition, RequirementItem } from "@/lib/types";
import { PracticeItem } from "@/components/learn/PracticeGuide";
import { PhilosophyItem } from "@/components/learn/PhilosophyBlock";
import { RevenueItem } from "@/components/learn/RevenueTable";
import { ComparisonData } from "@/components/learn/KasanComparisonCard";
import { SimulationData } from "@/components/learn/RevenueSimulator";
import { StaffingMapData } from "@/components/learn/StaffingMap";

// ===== 思想・背景 =====

export const staffingPhilosophy: {
  heading: string;
  lead: string;
  items: PhilosophyItem[];
} = {
  heading: "人員配置加算の設計思想",
  lead: "人員に関する加算は「支援の質は人で決まる」という考え方に基づいています。基準配置（7.5:1）は最低ライン。そこからどれだけ手厚く・専門的に配置するかを段階的に評価する設計です。",
  items: [
    {
      title: "サービス費の配置区分：6:1配置は基本報酬で評価",
      content:
        "B型には独立した「人員配置体制加算(I)」は存在しません。6:1配置の手厚さは、サービス費(I)またはサービス費(IV)という基本報酬区分として評価されます。7.5:1配置のサービス費(II)(III)より高い単位数が設定されており、「手厚い配置は基本報酬に織り込む」という設計です。",
      icon: "users",
    },
    {
      title: "福祉専門職員配置等加算：質の評価 ー 「誰が支援するか」が大事",
      content:
        "量だけでなく質も見るのがこの加算です。社会福祉士・介護福祉士等の有資格者が多い事業所は、アセスメントの精度、個別支援計画の質、リスク管理の水準が高い傾向にあります。(III)で「常勤率75%以上」や「勤続3年以上30%」を評価するのは、定着率の高い安定した組織を評価する意図です。",
      icon: "graduation-cap",
    },
    {
      title: "目標工賃達成指導員配置加算：成果を出すための専門人材",
      content:
        "B型の存在意義である「工賃の向上」に直結する加算です。工賃を上げるには、営業・受注開拓・原価管理・品質管理など福祉以外のビジネススキルが必要。専任の指導員を置くことで、現場の支援と工賃向上の経営的な取り組みを両立させる狙いがあります。サービス費(I)/(IV)（6:1配置）のみ対象で、職指+生支が6:1以上かつ合計5:1以上の配置が要件です。",
      icon: "bar-chart",
    },
  ],
};

// ===== 学習コンテンツ =====

export const staffingSections: ContentSection[] = [
  {
    title: "サービス費の配置区分（6:1 / 7.5:1 / 10:1）",
    content:
      "就労継続支援B型の基本報酬は、職業指導員と生活支援員の配置比率によって大きく異なります。サービス費(I)(IV)は6:1配置、サービス費(II)(III)は7.5:1配置です。また、10:1配置という最低基準もあり、これを下回ると基準違反となります。6:1配置は独立した加算ではなく、基本報酬の区分として評価される点が重要です。たとえば定員21〜40人・工賃1.5〜2万円の場合、6:1配置（サービス費I）は649単位/日、7.5:1配置（サービス費II）は618単位/日と、日額31単位の差があります。",
  },
  {
    title: "福祉専門職員配置等加算",
    content:
      "福祉専門職員配置等加算は、社会福祉士・介護福祉士・精神保健福祉士・公認心理師などの有資格者を一定割合以上配置している場合に算定できる加算です。(I)は常勤の生活支援員等のうち有資格者が35%以上で15単位/日、(II)は25%以上で10単位/日、(III)は常勤職員が75%以上または勤続3年以上が30%以上の場合に6単位/日です。",
  },
  {
    title: "目標工賃達成指導員配置加算",
    content:
      "目標工賃達成指導員配置加算は、工賃向上のために専任の指導員を配置している事業所を評価する加算です。令和6年度改定後の単位数は、定員20人以下で45単位/日、21〜40人で40単位/日、41〜60人で38単位/日、61〜80人で37単位/日、81人以上で36単位/日です。サービス費(I)または(IV)（6:1配置）のみ算定可能で、職業指導員+生活支援員が6:1以上、かつ両者の合計が5:1以上であることが要件です。",
  },
  {
    title: "職業指導員等配置の考え方",
    content:
      "就労継続支援B型の人員基準として、職業指導員と生活支援員を合わせて利用者7.5人に対し1人以上の配置が必要です（10:1が最低基準）。このうち1人以上は常勤でなければなりません。サービス管理責任者は利用者60人以下で1人以上の配置が必要です。6:1配置にするとサービス費(I)(IV)の高い基本報酬が適用され、さらに目標工賃達成指導員配置加算の算定も可能になります。",
  },
];

export const staffingTerms: TermDefinition[] = [
  {
    term: "サービス費の配置区分",
    definition:
      "職業指導員+生活支援員の配置比率による基本報酬区分。6:1配置はサービス費(I)(IV)、7.5:1配置はサービス費(II)(III)。独立した「人員配置体制加算」ではなく基本報酬で評価される。",
    example: "6:1配置のサービス費(I)は7.5:1のサービス費(II)より高単位",
  },
  {
    term: "福祉専門職員配置等加算",
    definition:
      "社会福祉士等の有資格者や常勤職員を一定割合以上配置している場合の加算。(I)(II)(III)の3段階。",
    example: "(I)15単位:35%以上、(II)10単位:25%以上、(III)6単位:常勤75%以上等",
  },
  {
    term: "目標工賃達成指導員配置加算",
    definition:
      "工賃向上のための専任指導員を配置し、工賃向上計画に基づく指導を行う場合の加算。サービス費(I)(IV)のみ対象。定員規模別に45〜36単位/日。",
  },
  {
    term: "職業指導員",
    reading: "しょくぎょうしどういん",
    definition:
      "利用者の生産活動や職業訓練を指導する職員。就労継続支援B型の必置職員の一つ。",
  },
  {
    term: "生活支援員",
    reading: "せいかつしえんいん",
    definition:
      "利用者の日常生活上の相談・助言・支援を行う職員。職業指導員と合わせて7.5:1以上の配置が必要。",
  },
  {
    term: "サービス管理責任者",
    reading: "さーびすかんりせきにんしゃ",
    definition:
      "個別支援計画の作成やサービス提供プロセスの管理を行う責任者。利用者60人以下で1名以上配置。略称「サビ管」。",
  },
  {
    term: "常勤換算",
    reading: "じょうきんかんさん",
    definition:
      "非常勤職員の勤務時間を常勤職員の勤務時間で割って算出する方法。人員基準の充足判定に使用する。",
    example: "週20時間勤務の非常勤は、常勤換算で0.5人",
  },
  {
    term: "工賃向上計画",
    reading: "こうちんこうじょうけいかく",
    definition:
      "利用者の工賃を引き上げるための具体的な計画。目標工賃達成指導員配置加算の算定要件の一つ。",
  },
];

export const staffingRequirements: RequirementItem[] = [
  {
    category: "サービス費(I)(IV)の配置要件（6:1配置）",
    items: [
      "職業指導員+生活支援員が常勤換算で利用者数÷6以上",
      "体制届の提出が必要",
      "前年度の実績で判定（年度途中の変動は月平均）",
    ],
    color: "border-blue-400",
  },
  {
    category: "福祉専門職員配置等加算(I)",
    items: [
      "常勤の直接処遇職員のうち社会福祉士等が35%以上",
      "対象資格：社会福祉士・介護福祉士・精神保健福祉士・公認心理師",
    ],
    color: "border-indigo-400",
  },
  {
    category: "福祉専門職員配置等加算(II)",
    items: [
      "常勤の直接処遇職員のうち社会福祉士等が25%以上",
    ],
    color: "border-indigo-300",
  },
  {
    category: "福祉専門職員配置等加算(III)",
    items: [
      "以下のいずれかを満たすこと",
      "直接処遇職員のうち常勤職員が75%以上",
      "または直接処遇職員のうち勤続3年以上が30%以上",
    ],
    color: "border-indigo-200",
  },
  {
    category: "目標工賃達成指導員配置加算",
    items: [
      "サービス費(I)または(IV)（6:1配置）を算定していること",
      "職業指導員+生活支援員が6:1以上かつ合計5:1以上の配置",
      "目標工賃達成指導員を1名以上常勤で配置",
      "工賃向上計画を策定し指定権者に届出",
    ],
    color: "border-purple-400",
  },
];

// ===== 収益インパクト・取得難易度 =====

export const staffingRevenue: RevenueItem[] = [
  {
    kasanName: "サービス費(I) 6:1配置（基本報酬差額）",
    unitPerDay: "+31単位/日",
    monthlyRevenue: "約13.6万円/月",
    frequency: "日額（基本報酬に含まれる）",
    difficulty: "中",
    difficultyNote: "7.5:1→6:1への増員。人件費増とのバランスが鍵",
  },
  {
    kasanName: "福祉専門職員配置等加算(I)",
    unitPerDay: "15単位/日",
    monthlyRevenue: "約6.6万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "高",
    difficultyNote: "有資格者35%以上。採用難易度が高い",
  },
  {
    kasanName: "福祉専門職員配置等加算(II)",
    unitPerDay: "10単位/日",
    monthlyRevenue: "約4.4万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "中",
    difficultyNote: "有資格者25%以上。(I)より現実的",
  },
  {
    kasanName: "福祉専門職員配置等加算(III)",
    unitPerDay: "6単位/日",
    monthlyRevenue: "約2.6万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "低",
    difficultyNote: "常勤率75%以上 or 勤続3年30%以上。取りやすい",
  },
  {
    kasanName: "目標工賃達成指導員配置加算（定員20人以下）",
    unitPerDay: "45単位/日",
    monthlyRevenue: "約19.8万円/月",
    frequency: "日額（利用日ごと）",
    difficulty: "中",
    difficultyNote: "6:1配置+専任指導員1名の人件費が必要",
  },
];

// ===== 条件・記録・支援の実践ガイド =====

export const staffingPractice: PracticeItem[] = [
  {
    kasanName: "サービス費の配置区分（6:1 / 7.5:1）",
    conditions: [
      "6:1配置：職業指導員+生活支援員が常勤換算で利用者数÷6以上",
      "7.5:1配置：同 利用者数÷7.5以上（最低基準は10:1）",
      "前年度の実績で判定（年度途中の変動は月平均）",
    ],
    records: [
      "勤務形態一覧表（常勤換算の根拠）",
      "出勤簿・タイムカード",
      "利用者数の月別実績記録",
      "体制届（変更届含む）の控え",
    ],
    practice: [
      "毎月の常勤換算を確認し、基準割れしないようシフト管理",
      "退職・休職が出た場合の速やかな補充体制を整備",
      "年度替わりの利用者数変動に注意",
    ],
    color: "border-blue-400",
  },
  {
    kasanName: "福祉専門職員配置等加算(I)(II)(III)",
    conditions: [
      "(I) 常勤直接処遇職員の35%以上が有資格者",
      "(II) 同25%以上",
      "(III) 常勤率75%以上 or 勤続3年以上30%以上",
    ],
    records: [
      "資格証の写し（社会福祉士・介護福祉士等）",
      "職員台帳（資格・勤続年数・常勤/非常勤）",
      "常勤換算一覧表",
      "体制届の控え",
    ],
    practice: [
      "採用時に資格保有者を優先的に確保",
      "在職者の資格取得を支援（受験料補助、勉強時間確保）",
      "職員の定着率を上げ、勤続年数を伸ばす取り組み",
    ],
    color: "border-indigo-400",
  },
  {
    kasanName: "目標工賃達成指導員配置加算",
    conditions: [
      "サービス費(I)または(IV)（6:1配置）であること",
      "職指+生支が6:1以上、かつ合計5:1以上の配置",
      "専任の目標工賃達成指導員を常勤で1名以上配置",
      "工賃向上計画を策定し指定権者に届出",
    ],
    records: [
      "工賃向上計画書（目標額・取り組み内容・達成時期）",
      "指導員の業務日誌（営業・受注・原価管理等の活動記録）",
      "工賃支払実績の月次集計",
      "体制届の控え",
    ],
    practice: [
      "指導員が受注開拓・営業活動を日常的に実施",
      "原価管理・作業効率の改善に取り組む",
      "工賃向上計画のPDCAを回す（四半期ごとの振り返り等）",
      "利用者のスキル向上と作業の高付加価値化",
    ],
    color: "border-purple-400",
  },
];

// ===== ビジュアル: 段階比較 =====

export const staffingComparisons: ComparisonData[] = [
  {
    heading: "人員配置と報酬の関係",
    groups: [
      {
        title: "配置比率とサービス費区分（定員21〜40人・工賃1.5〜2万円）",
        items: [
          { label: "6:1配置（サービス費I）", value: 649, unit: "単位/日", note: "手厚い配置", highlight: true },
          { label: "7.5:1配置（サービス費II）", value: 618, unit: "単位/日", note: "標準配置" },
          { label: "差額", value: 31, unit: "単位/日", note: "6:1にすることで日額+31単位" },
        ],
      },
      {
        title: "福祉専門職員配置等加算",
        items: [
          { label: "(I) 有資格者35%以上", value: 15, unit: "単位/日", highlight: true },
          { label: "(II) 有資格者25%以上", value: 10, unit: "単位/日" },
          { label: "(III) 常勤率75%以上", value: 6, unit: "単位/日" },
        ],
      },
      {
        title: "目標工賃達成指導員配置加算（R6改定後・定員別）",
        items: [
          { label: "定員20人以下", value: 45, unit: "単位/日", highlight: true },
          { label: "定員21〜40人", value: 40, unit: "単位/日" },
          { label: "定員41〜60人", value: 38, unit: "単位/日" },
          { label: "定員61〜80人", value: 37, unit: "単位/日" },
          { label: "定員81人以上", value: 36, unit: "単位/日" },
        ],
      },
    ],
  },
];

// ===== ビジュアル: 収益シミュレーション =====

export const staffingSimulation: SimulationData = {
  heading: "人員配置関連の月間収益シミュレーション",
  assumptions: "定員20人・月22日稼働・地域単価10円で試算",
  items: [
    { name: "目標工賃達成指導員配置加算", unitPerDay: 45, monthlyAmount: 19.8, color: "violet" },
    { name: "6:1配置の基本報酬差額", unitPerDay: 31, monthlyAmount: 13.6, color: "blue" },
    { name: "福祉専門職員配置等加算(I)", unitPerDay: 15, monthlyAmount: 6.6, color: "indigo" },
    { name: "福祉専門職員配置等加算(III)", unitPerDay: 6, monthlyAmount: 2.6, color: "teal" },
  ],
};

// ===== ビジュアル: 人員配置マップ =====

export const staffingStaffingMap: StaffingMapData = {
  heading: "B型事業所の人員配置と関連加算",
  description: "各職種の配置要件と、その配置から発生する加算の関係を一目で確認",
  baseRequirement: "職業指導員 + 生活支援員 = 利用者7.5人に1人以上（うち1人以上常勤）。サービス管理責任者 = 利用者60人に1人以上",
  roles: [
    {
      role: "職業指導員",
      count: "常勤換算で配置",
      requirement: "生産活動・職業訓練を指導。6:1配置でサービス費(I)(IV)の高い基本報酬",
      relatedKasan: ["サービス費(I)(IV)差額+31単位/日", "福祉専門職員配置等加算"],
      color: "blue",
    },
    {
      role: "生活支援員",
      count: "常勤換算で配置",
      requirement: "日常生活上の支援を担当。職業指導員と合わせて配置基準を満たす",
      relatedKasan: ["サービス費(I)(IV)差額+31単位/日", "福祉専門職員配置等加算"],
      color: "green",
    },
    {
      role: "目標工賃達成指導員",
      count: "常勤1名以上",
      requirement: "工賃向上のための専任指導員。営業・受注・品質管理を担当。6:1配置のサービス費(I)(IV)のみ",
      relatedKasan: ["目標工賃達成指導員配置加算 45単位/日"],
      color: "violet",
    },
    {
      role: "サービス管理責任者",
      count: "利用者60人に1人",
      requirement: "個別支援計画の作成・管理、サービス提供のプロセス管理を担当",
      relatedKasan: ["個別支援計画未作成で減算リスク"],
      color: "amber",
    },
    {
      role: "看護職員（連携）",
      count: "訪問対応可",
      requirement: "常勤配置は不要。医療機関との連携体制を確保し、訪問による健康管理",
      relatedKasan: ["医療連携体制加算(I) 32単位/日"],
      color: "rose",
    },
    {
      role: "ピアサポーター",
      count: "任意配置",
      requirement: "障害当事者で専門研修修了者。利用者への当事者目線の支援",
      relatedKasan: ["ピアサポート実施加算 100単位/月"],
      color: "cyan",
    },
  ],
};
