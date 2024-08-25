"use client";
import { useTranslations } from "next-intl";
import DownloadCvButton from "./DownloadCvButton";
import InformationRow from "./InformationRow";

function PersonalInfoSection() {
  const t = useTranslations("About");

  const personalInfo = [
    { id: 1, key: [t("firstName")], value: [t("name")] },
    { id: 2, key: [t("lastName")], value: [t("rezaei")] },
    { id: 3, key: [t("age")], value: "28 " + [t("year")] },
    { id: 4, key: [t("nationality")], value: [t("persian")] },
    { id: 5, key: [t("email")], value: "hossein96rz@gmail.com" },
    {
      id: 6,
      key: [t("language")],
      value: [t("farsi")] + ", " + [t("english")] + ", " + [t("azerbaijani")],
    },
  ];
  return (
    <div className="lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/2">
      <InformationRow title={t("personalInfo")}>
        <ul className="sm:flex sm:flex-wrap">
          {personalInfo.map((item) => (
            <li
              className="flex-shrink-0 flex-grow-0 basis-full pb-5 sm:basis-1/2"
              key={item.id}
            >
              <span className="text-custom-text-light pb-5 text-base font-normal dark:text-[#a9afc3;]">
                {item.key + ": "}
              </span>
              <span className="text-custom-dark font-medium dark:text-white">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
        <DownloadCvButton className="mt-0" />
      </InformationRow>
    </div>
  );
}

export default PersonalInfoSection;
