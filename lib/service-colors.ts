export type ServiceColorSet = {
  primary: string;       // text-blue-600
  primaryBg: string;     // bg-blue-600
  light: string;         // bg-blue-50
  lightBorder: string;   // border-blue-200
  gradientFrom: string;  // from-blue-50
  gradientTo: string;    // to-indigo-50
  heading: string;       // text-blue-800
  subheading: string;    // text-blue-700
  accent: string;        // text-blue-400
  badge: string;         // bg-blue-100 text-blue-700
  hoverBorder: string;   // hover:border-blue-300
  exampleBg: string;     // bg-blue-50
  exampleText: string;   // text-blue-700
  sectionBorder: string; // border-blue-300
  tabActive: string;     // bg-blue-500
};

const colorSets: Record<string, ServiceColorSet> = {
  blue: {
    primary: "text-blue-600", primaryBg: "bg-blue-600",
    light: "bg-blue-50", lightBorder: "border-blue-200",
    gradientFrom: "from-blue-50", gradientTo: "to-indigo-50",
    heading: "text-blue-800", subheading: "text-blue-700",
    accent: "text-blue-400", badge: "bg-blue-100 text-blue-700",
    hoverBorder: "hover:border-blue-300", exampleBg: "bg-blue-50",
    exampleText: "text-blue-700", sectionBorder: "border-blue-300",
    tabActive: "bg-blue-500",
  },
  indigo: {
    primary: "text-indigo-600", primaryBg: "bg-indigo-600",
    light: "bg-indigo-50", lightBorder: "border-indigo-200",
    gradientFrom: "from-indigo-50", gradientTo: "to-purple-50",
    heading: "text-indigo-800", subheading: "text-indigo-700",
    accent: "text-indigo-400", badge: "bg-indigo-100 text-indigo-700",
    hoverBorder: "hover:border-indigo-300", exampleBg: "bg-indigo-50",
    exampleText: "text-indigo-700", sectionBorder: "border-indigo-300",
    tabActive: "bg-indigo-500",
  },
  emerald: {
    primary: "text-emerald-600", primaryBg: "bg-emerald-600",
    light: "bg-emerald-50", lightBorder: "border-emerald-200",
    gradientFrom: "from-emerald-50", gradientTo: "to-teal-50",
    heading: "text-emerald-800", subheading: "text-emerald-700",
    accent: "text-emerald-400", badge: "bg-emerald-100 text-emerald-700",
    hoverBorder: "hover:border-emerald-300", exampleBg: "bg-emerald-50",
    exampleText: "text-emerald-700", sectionBorder: "border-emerald-300",
    tabActive: "bg-emerald-500",
  },
  rose: {
    primary: "text-rose-600", primaryBg: "bg-rose-600",
    light: "bg-rose-50", lightBorder: "border-rose-200",
    gradientFrom: "from-rose-50", gradientTo: "to-pink-50",
    heading: "text-rose-800", subheading: "text-rose-700",
    accent: "text-rose-400", badge: "bg-rose-100 text-rose-700",
    hoverBorder: "hover:border-rose-300", exampleBg: "bg-rose-50",
    exampleText: "text-rose-700", sectionBorder: "border-rose-300",
    tabActive: "bg-rose-500",
  },
  amber: {
    primary: "text-amber-600", primaryBg: "bg-amber-600",
    light: "bg-amber-50", lightBorder: "border-amber-200",
    gradientFrom: "from-amber-50", gradientTo: "to-yellow-50",
    heading: "text-amber-800", subheading: "text-amber-700",
    accent: "text-amber-400", badge: "bg-amber-100 text-amber-700",
    hoverBorder: "hover:border-amber-300", exampleBg: "bg-amber-50",
    exampleText: "text-amber-700", sectionBorder: "border-amber-300",
    tabActive: "bg-amber-500",
  },
  teal: {
    primary: "text-teal-600", primaryBg: "bg-teal-600",
    light: "bg-teal-50", lightBorder: "border-teal-200",
    gradientFrom: "from-teal-50", gradientTo: "to-cyan-50",
    heading: "text-teal-800", subheading: "text-teal-700",
    accent: "text-teal-400", badge: "bg-teal-100 text-teal-700",
    hoverBorder: "hover:border-teal-300", exampleBg: "bg-teal-50",
    exampleText: "text-teal-700", sectionBorder: "border-teal-300",
    tabActive: "bg-teal-500",
  },
  violet: {
    primary: "text-violet-600", primaryBg: "bg-violet-600",
    light: "bg-violet-50", lightBorder: "border-violet-200",
    gradientFrom: "from-violet-50", gradientTo: "to-purple-50",
    heading: "text-violet-800", subheading: "text-violet-700",
    accent: "text-violet-400", badge: "bg-violet-100 text-violet-700",
    hoverBorder: "hover:border-violet-300", exampleBg: "bg-violet-50",
    exampleText: "text-violet-700", sectionBorder: "border-violet-300",
    tabActive: "bg-violet-500",
  },
};

export function getServiceColors(colorName: string): ServiceColorSet {
  return colorSets[colorName] || colorSets.blue;
}
