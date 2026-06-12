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
        dateFrom: "Dec 2023",
        dateTo: "Present",
        location: "Arman ITMD (Banking Applications)",
        desc: "Front-end developer building web banking applications (mobile bank PWA, customer services platform, management panels). Contributed to a secure Mobile Banking PWA with continuous client-server encryption. Built a PDA data collector PWA using IndexedDB for offline storage on warehouse devices.",
        title: "Frontend Developer",
      },
      {
        id: "2",
        dateFrom: "Feb 2025",
        dateTo: "Feb 2026",
        location: "Taraz Pouyesh Co (Digital Solutions Provider)",
        desc: "Maintained legacy React applications and built a multiplatform workflow platform for ERP administrators. Migrated from React 16.7 to React 19, refactored class components to functional components using Hooks, replaced Redux with Zustand, and optimized performance by reducing unnecessary rerenders.",
        title: "Frontend Developer (Part-time)",
      },
      {
        id: "3",
        dateFrom: "2024",
        dateTo: "2025",
        location: "Jumpo (Gaming & Entertainment)",
        desc: "Developed a reservation registration website using Next.js with animations. Built the back-office web application using React 19 to support business management.",
        title: "Frontend Developer",
      },
      {
        id: "4",
        dateFrom: "2023",
        dateTo: "2024",
        location: "Danjeh Seeds (Agricultural Technology)",
        desc: "Built a bilingual cross-platform fertilizer calculation application with React 19, providing nutrient analysis and fertilizer recommendation tools for agricultural professionals.",
        title: "Frontend Developer",
      },
      {
        id: "5",
        dateFrom: "July 2022",
        dateTo: "Dec 2023",
        location: "Zanjan Food (Food Delivery Platform)",
        desc: "Rebuilt the legacy back-office system using React and MUI with role-based access control. Developed front-office and back-office panels with map integration. Enhanced website responsiveness using BEM methodology with Sass.",
        title: "Frontend Developer",
      },
    ],
    fa: [
      {
        id: "1",
        dateFrom: "دی 1402",
        dateTo: "حال",
        location: "آرمان ITMD (اپلیکیشن‌های بانکی)",
        desc: "توسعه دهنده فرانت اند در زمینه ساخت اپلیکیشن‌های بانکداری تحت وب (موبایل بانک PWA، پلتفرم خدمات مشتریان، پنل‌های مدیریتی). مشارکت در توسعه یک اپلیکیشن بانکداری موبایل امن با رمزگذاری مداوم تبادل داده سرور-کلاینت. ساخت یک اپلیکیشن جمع‌آوری داده PDA با استفاده از IndexedDB برای ذخیره‌سازی آفلاین در دستگاه‌های انبارداری.",
        title: "توسعه دهنده فرانت اند",
      },
      {
        id: "2",
        dateFrom: "بهمن 1403",
        dateTo: "بهمن 1404",
        location: "تراز پویش (ارائه دهنده راهکارهای دیجیتال)",
        desc: "نگهداری اپلیکیشن‌های React قدیمی و ساخت یک پلتفرم چند پلتفرمی برای مدیران ERP. مهاجرت از React 16.7 به React 19، بازنویسی کامپوننت‌های کلاسی به کامپوننت‌های تابعی با Hooks، جایگزینی Redux با Zustand و بهینه‌سازی عملکرد.",
        title: "توسعه دهنده فرانت اند (پاره‌وقت)",
      },
      {
        id: "3",
        dateFrom: "1403",
        dateTo: "1404",
        location: "جامپو (بازی و سرگرمی)",
        desc: "توسعه وبسایت ثبت رزرو با Next.js و انیمیشن‌های متنوع. ساخت اپلیکیشن بک‌آفیس با React 19 برای پشتیبانی از مدیریت کسب‌وکار.",
        title: "توسعه دهنده فرانت اند",
      },
      {
        id: "4",
        dateFrom: "1402",
        dateTo: "1403",
        location: "دانه سیدز (فناوری کشاورزی)",
        desc: "ساخت یک اپلیکیشن دوزبانه چند پلتفرمی محاسبه کود با React 19، ارائه ابزارهای تجزیه مواد مغذی و توصیه کود برای متخصصان کشاورزی.",
        title: "توسعه دهنده فرانت اند",
      },
      {
        id: "5",
        dateFrom: "تیر 1401",
        dateTo: "دی 1402",
        location: "زنجان فود (پلتفرم سفارش آنلاین غذا)",
        desc: "بازسازی سیستم بک‌آفیس با React و MUI و کنترل دسترسی مبتنی بر نقش. توسعه پنل‌های فرانت‌آفیس و بک‌آفیس با قابلیت نقشه. بهبود ریسپانسیو بودن سایت با متدولوژی BEM و Sass.",
        title: "توسعه دهنده فرانت اند",
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
