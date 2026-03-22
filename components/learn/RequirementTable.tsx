import { RequirementItem } from "@/lib/types";

export default function RequirementTable({
  items,
}: {
  items: RequirementItem[];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.category}
          className={`bg-white rounded-lg p-4 border-l-4 ${item.color} border border-gray-100 shadow-sm`}
        >
          <h4 className="font-bold text-sm mb-2 text-gray-900">{item.category}</h4>
          <ul className="space-y-1.5">
            {item.items.map((req, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-gray-300 shrink-0 mt-0.5">●</span>
                {req}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
