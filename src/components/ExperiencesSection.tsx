import { Dictionary } from "../types/dictionary";
import InformationRow from "./InformationRow";
import Timeline from "./Timeline";

interface ExperiencesSectionProps {
  dictionary: Dictionary;
}

function ExperiencesSection({ dictionary }: ExperiencesSectionProps) {
  const experiences = {
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
        desc: "توسعه نرم افزارهای تحت وب پویا در زمینه بانکداری",
        title: "توسعه دهنده فرانت اند",
      },
      {
        id: "2",
        dateFrom: "1401",
        dateTo: "1402",
        title: "توسعه دهنده فرانت اند",
        location: "آزاد",
        desc: "پژوهش و یادگیری برنامه‌نویسی فرانت‌اند به صورت خودآموز در کنار شغل قبلی با انجام پروژه‌های کوچک اما پیچیده برای تجربه چالش‌ها",
      },
    ],
  };

  return (
    <InformationRow title={dictionary.experiences}>
      <ul>
        {experiences[dictionary.lang].map((item) => (
          <Timeline key={item.id} {...item} />
        ))}
        {/* <Timeline
          dateFrom="2023"
          dateTo={dictionary.present}
          location="Arman ITMD"
          desc="Dynamic web applications development in the field of banking"
          title="Frontend Developer"
        />
        <Timeline
          dateFrom="2022"
          dateTo="2023"
          title="Intern Frontend Developer"
          location="Freelance"
          desc="Research and learn front-end programming alongside the previous job in a self-taught way with small but complex projects to experience the challenges"
        /> */}
      </ul>
    </InformationRow>
  );
}

export default ExperiencesSection;
