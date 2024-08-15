import { Dictionary } from "../types/dictionary";
import ExperiencesSection from "./ExperiencesSection";
import PersonalInfoSection from "./PersonalInfoSection";

interface SeeMoreModalContentProps {
  dictionary: Dictionary;
}

function SeeMoreModalContent({ dictionary }: SeeMoreModalContentProps) {
  return (
    <div className="custom-scrollbar h-full overflow-auto px-5 sm:px-12 lg:flex">
      <PersonalInfoSection dictionary={dictionary} />
      <ExperiencesSection dictionary={dictionary} />
    </div>
  );
}

export default SeeMoreModalContent;
