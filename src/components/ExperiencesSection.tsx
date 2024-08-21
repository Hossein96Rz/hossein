import { useLocale, useTranslations } from "next-intl";
import InformationRow from "./InformationRow";
import Timeline from "./Timeline";

interface Experiences {
  en: Object[];
  fa: Object[];
}

function ExperiencesSection() {
  const t = useTranslations("About");
  const lang = useLocale() as keyof Experiences;
  const relatedExperiences = {
    en: [
      {
        id: "1",
        dateFrom: "2023",
        dateTo: "Present",
        location: "Arman ITMD",
        desc: "Dynamic web applications development in the field of banking",
        title: "Frontend Developer",
      },
      {
        id: "2",
        dateFrom: "2022",
        dateTo: "2023",
        title: "Frontend Developer",
        location: "Freelance",
        desc: "Research and learn front-end programming alongside the previous job in a self-taught way with small but complex projects to experience the challenges",
      },
    ],
    fa: [
      {
        id: "1",
        dateFrom: "1402",
        dateTo: "حال",
        location: "مدیریت و توسعه فناوری اطلاعات آرمان",
        desc: "توسعه نرم افزارهای تحت وب پویا در زمینه بانکداری (بانک توسعه صادرات)",
        title: "توسعه دهنده فرانت اند",
      },
      {
        id: "2",
        dateFrom: "1401",
        dateTo: "1402",
        title: "توسعه دهنده فرانت اند",
        location: "آزاد",
        desc: "پژوهش و یادگیری توسعه فرانت‌اند به صورت خودآموز در کنار شغل قبلی با انجام پروژه‌های کوچک اما پیچیده برای یادگیری و تجربه چالش‌ها",
      },
    ],
  };
  const unrelatedExperiences = {
    en: [
      {
        id: "1",
        dateFrom: "2018",
        dateTo: "2024",
        location: "Golrang industrial group",
        desc: "",
        title: "Warehouse Employee",
      },
    ],
    fa: [
      {
        id: "1",
        dateFrom: "1397",
        dateTo: "1402",
        location: "گروه صنعتی گلرنگ",
        desc: "",
        title: "کارمند انبار",
      },
    ],
  };
  return (
    <div>
      <InformationRow title={t("relatedExperiences")}>
        <ul>
          {relatedExperiences[lang].map((item) => (
            <Timeline key={item.id} {...item} />
          ))}
        </ul>
      </InformationRow>
      <InformationRow title={t("unrelatedExperiences")} className="pb-4">
        <ul>
          {unrelatedExperiences[lang].map((item) => (
            <Timeline key={item.id} {...item} />
          ))}
        </ul>
      </InformationRow>
    </div>
  );
}

export default ExperiencesSection;
