export type ServiceType = "b-type" | "a-type" | "transition" | "daily-care" | "after-school" | "group-home" | "plan-consultation";

export type ServiceInfo = {
  id: ServiceType;
  name: string;
  shortName: string;
  color: string;
  bgColor: string;
  icon: string;
  description: string;
  topics: TopicInfo[];
};

export type TopicInfo = {
  id: string;
  label: string;
  icon: string;
  description: string;
};

const commonTopics: TopicInfo[] = [
  { id: "kasan-basics", label: "加算の基本", icon: "📋", description: "基礎報酬の仕組み・加算の全体像・届出の流れ" },
  { id: "staffing", label: "人員配置", icon: "👥", description: "人員配置体制加算・専門職配置に関する加算" },
  { id: "support-system", label: "支援体制", icon: "🏥", description: "医療連携・重度者支援など体制面の加算" },
  { id: "performance", label: "実績", icon: "📈", description: "目標達成・定着率など実績に関する加算" },
  { id: "daily-support", label: "生活支援等", icon: "🚌", description: "送迎・食事・処遇改善などの加算" },
];

export const services: Record<ServiceType, ServiceInfo> = {
  "b-type": {
    id: "b-type",
    name: "就労継続支援B型",
    shortName: "B型",
    color: "blue",
    bgColor: "bg-blue-600",
    icon: "🔨",
    description: "工賃を得ながら生産活動を行う。工賃月額に応じた報酬体系が特徴",
    topics: [
      { ...commonTopics[0], description: "基礎報酬の仕組み・工賃連動・届出の流れ" },
      { ...commonTopics[1], description: "人員配置体制加算・福祉専門職員配置等加算・目標工賃達成指導員配置加算" },
      { ...commonTopics[2], description: "医療連携体制加算・重度者支援体制加算・ピアサポート実施加算" },
      { ...commonTopics[3], description: "目標工賃達成加算・就労移行支援体制加算・地域協働加算・施設外就労加算" },
      { ...commonTopics[4], description: "送迎加算・食事提供体制加算・処遇改善加算・その他" },
    ],
  },
  "a-type": {
    id: "a-type",
    name: "就労継続支援A型",
    shortName: "A型",
    color: "indigo",
    bgColor: "bg-indigo-600",
    icon: "💼",
    description: "雇用契約を結び最低賃金以上の賃金を支払う。スコア方式の報酬体系が特徴",
    topics: [
      { ...commonTopics[0], description: "スコア方式（7項目評価）・定員区分・報酬体系" },
      { ...commonTopics[1], description: "人員配置体制加算・福祉専門職員配置等加算・賃金向上達成指導員配置加算" },
      { ...commonTopics[2], description: "医療連携体制加算・重度者支援体制加算・ピアサポート実施加算" },
      { ...commonTopics[3], description: "スコア評価項目の実績・賃金向上達成加算" },
      { ...commonTopics[4], description: "送迎加算・食事提供体制加算・処遇改善加算・その他" },
    ],
  },
  "transition": {
    id: "transition",
    name: "就労移行支援",
    shortName: "移行",
    color: "emerald",
    bgColor: "bg-emerald-600",
    icon: "🎯",
    description: "一般企業への就職を目指す訓練を提供。就職実績・定着率に連動した報酬体系",
    topics: [
      { ...commonTopics[0], description: "就労定着率連動の報酬体系・定員区分・基礎報酬の仕組み" },
      { ...commonTopics[1], description: "人員配置体制加算・福祉専門職員配置等加算・就労支援関係研修修了加算" },
      { ...commonTopics[2], description: "医療連携体制加算・通勤訓練加算・移行準備支援体制加算" },
      { ...commonTopics[3], description: "就労定着支援体制加算・一般就労移行加算" },
      { ...commonTopics[4], description: "送迎加算・食事提供体制加算・処遇改善加算・その他" },
    ],
  },
  "daily-care": {
    id: "daily-care",
    name: "生活介護",
    shortName: "生介",
    color: "rose",
    bgColor: "bg-rose-600",
    icon: "🤝",
    description: "常時介護が必要な方に日中活動の場を提供。障害支援区分に連動した報酬体系",
    topics: [
      { ...commonTopics[0], description: "障害支援区分連動の報酬体系・定員区分・人員基準" },
      { ...commonTopics[1], description: "人員配置体制加算・常勤看護職員等配置加算・福祉専門職員配置等加算" },
      { ...commonTopics[2], description: "医療連携体制加算・重度者支援体制加算・リハビリテーション加算" },
      { ...commonTopics[3], description: "地域協働加算・延長支援加算" },
      { ...commonTopics[4], description: "送迎加算・食事提供体制加算・処遇改善加算・入浴支援加算・その他" },
    ],
  },
  "after-school": {
    id: "after-school",
    name: "放課後等デイサービス",
    shortName: "放デイ",
    color: "amber",
    bgColor: "bg-amber-600",
    icon: "🌈",
    description: "就学中の障害児に放課後や休日の活動を提供。基本・特定プログラムの区分が特徴",
    topics: [
      { ...commonTopics[0], description: "基本報酬の仕組み・区分1/区分2・医療的ケア児の判定" },
      { ...commonTopics[1], description: "児童指導員等加配加算・専門的支援加算" },
      { ...commonTopics[2], description: "医療連携体制加算・看護職員加配加算・関係機関連携加算" },
      { ...commonTopics[3], description: "家庭連携加算・事業所間連携加算・保育所等訪問支援" },
      { ...commonTopics[4], description: "送迎加算・処遇改善加算・欠席時対応加算・その他" },
    ],
  },
  "group-home": {
    id: "group-home",
    name: "共同生活援助（グループホーム）",
    shortName: "GH",
    color: "teal",
    bgColor: "bg-teal-600",
    icon: "🏠",
    description: "障害者が共同生活を営む住居で日常生活の支援を提供。世話人配置・区分に連動した報酬体系",
    topics: [
      { ...commonTopics[0], description: "基礎報酬の仕組み・介護サービス包括型/外部サービス利用型/日中サービス支援型" },
      { ...commonTopics[1], description: "人員配置体制加算・福祉専門職員配置等加算・夜間支援等体制加算" },
      { ...commonTopics[2], description: "医療連携体制加算・重度障害者支援加算・強度行動障害者体験利用加算" },
      { ...commonTopics[3], description: "地域移行加算・自立生活支援加算・帰宅時支援加算" },
      { ...commonTopics[4], description: "入院時支援加算・処遇改善加算・大規模住居等減算・その他" },
    ],
  },
  "plan-consultation": {
    id: "plan-consultation",
    name: "特定相談支援（計画相談）",
    shortName: "計画",
    color: "violet",
    bgColor: "bg-violet-600",
    icon: "📝",
    description: "サービス等利用計画の作成・モニタリングを行う。計画作成件数・質に応じた報酬体系",
    topics: [
      { ...commonTopics[0], description: "基本報酬の仕組み・計画相談支援費(I)(II)・モニタリング報酬" },
      { ...commonTopics[1], description: "相談支援専門員配置・主任相談支援専門員配置加算" },
      { ...commonTopics[2], description: "機関相談支援加算・行動障害支援体制加算・要医療児者支援体制加算" },
      { ...commonTopics[3], description: "初回加算・サービス担当者会議実施加算・サービス提供時モニタリング加算" },
      { ...commonTopics[4], description: "処遇改善加算・居宅介護支援事業所連携加算・その他" },
    ],
  },
};

export const serviceList: ServiceInfo[] = Object.values(services);

export function getService(serviceId: string): ServiceInfo | undefined {
  return services[serviceId as ServiceType];
}

export function isValidService(serviceId: string): serviceId is ServiceType {
  return serviceId in services;
}
