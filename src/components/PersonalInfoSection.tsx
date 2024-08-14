import { Dictionary } from "../types/dictionary";
import DownloadCvButton from "./DownloadCvButton";
import InformationRow from "./InformationRow";

interface PersonalInfoSectionProps {
  dictionary: Dictionary;
}

function PersonalInfoSection({ dictionary }: PersonalInfoSectionProps) {
  const personalInfo = [
    { id: 1, key: [dictionary.firstName], value: [dictionary.name] },
    { id: 2, key: [dictionary.lastName], value: [dictionary.rezaei] },
    { id: 3, key: [dictionary.age], value: "28 " + [dictionary.year] },
    { id: 4, key: [dictionary.nationality], value: [dictionary.persian] },
    { id: 5, key: [dictionary.email], value: "hossein96rz@gmail.com" },
    {
      id: 6,
      key: [dictionary.language],
      value: [dictionary.farsi] + ", " + [dictionary.english],
    },
  ];
  return (
    <div className="lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2">
      <InformationRow title={dictionary.personalInfo}>
        <ul className="sm:flex sm:flex-wrap">
          {personalInfo.map((item) => (
            <li
              className="flex-shrink-0 flex-grow-0 basis-full pb-5 sm:basis-1/2"
              key={item.id}
            >
              <span className="pb-5 text-base font-normal text-[#7e7e7e] dark:text-[#a9afc3;]">
                {item.key + ": "}
              </span>
              <span className="font-medium text-[#34495e] dark:text-white">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
        <DownloadCvButton className="mt-0" dictionary={dictionary} />
      </InformationRow>
    </div>
  );
}

export default PersonalInfoSection;
