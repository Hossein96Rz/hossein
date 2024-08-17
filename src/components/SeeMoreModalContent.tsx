import ExperiencesSection from "./ExperiencesSection";
import PersonalInfoSection from "./PersonalInfoSection";

function SeeMoreModalContent() {
  return (
    <div className="custom-scrollbar h-full overflow-auto px-5 sm:px-12 lg:flex">
      <PersonalInfoSection />
      <ExperiencesSection />
    </div>
  );
}

export default SeeMoreModalContent;
