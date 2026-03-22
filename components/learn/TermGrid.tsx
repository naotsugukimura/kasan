import { TermDefinition } from "@/lib/types";
import { ServiceColorSet } from "@/lib/service-colors";
import TermCard from "./TermCard";

export default function TermGrid({ terms, colors }: { terms: TermDefinition[]; colors?: ServiceColorSet }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {terms.map((term) => (
        <TermCard key={term.term} term={term} colors={colors} />
      ))}
    </div>
  );
}
