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
        location: "Arman ITMD (Banking Applications & Financial Service Provider)",
        desc: "Building web banking applications (mobile bank application, customer services platform, management panels). Contributed to the end-to-end research, development, and delivery of a secure Mobile Banking PWA. Implemented robust security measures, including continuous encryption of client-server data exchange, to enhance data protection and application reliability.",
        title: "Frontend Developer",
      },
      {
        id: "2",
        dateFrom: "Feb 2025",
        dateTo: "Feb 2026",
        location: "Taraz Pouyesh Co (Digital Solutions Provider)",
        desc: "Maintained legacy React applications and built a multiplatform workflow platform for ERP administrators. Built a warehouse Data Collector PWA using IndexedDB for offline data storage and synchronization, optimized for PDA devices. Migrated ERP platform from React 16.7 to React 19, refactored class components to functional components using Hooks, and replaced Redux with Zustand to improve maintainability and performance.",
        title: "Frontend Developer (Part-time)",
      },
      {
        id: "3",
        dateFrom: "2024",
        dateTo: "2025",
        location: "Jumpo (Active Gaming & Entertainment Company)",
        desc: "Developed a reservation registration website using Next.js for a gaming platform, with various animations to enhance UX. Developed the back-office web application using React 19 to support business management.",
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
        desc: "Developing the front-end of a local food delivery platform, integrating map functionalities and building front-office and back-office panels. Rebuilt the legacy back-office system using React and MUI with role-based access control. Enhanced website responsiveness and implemented BEM methodology with Sass.",
        title: "Frontend Developer",
      },
    ],
    fa: [
      {
        id: "1",
        dateFrom: "دی 1402",
        dateTo: "حال",
        location: "آرمان ITMD (اپلیکیشن‌های بانکی و ارائه دهنده خدمات مالی)",
        desc: "ساخت اپلیکیشن‌های بانکداری تحت وب (اپلیکیشن موبایل بانک، پلتفرم خدمات مشتریان، پنل‌های مدیریتی). مشارکت در تحقیق، توسعه و تحویل یک اپلیکیشن بانکداری موبایل امن. پیاده‌سازی اقدامات امنیتی قوی شامل رمزگذاری مداوم تبادل داده سرور-کلاینت برای افزایش حفاظت از داده‌ها و قابلیت اطمینان اپلیکیشن.",
        title: "توسعه دهنده فرانت اند",
      },
      {
        id: "2",
        dateFrom: "بهمن 1403",
        dateTo: "بهمن 1404",
        location: "تراز پویش (ارائه دهنده راهکارهای دیجیتال)",
        desc: "نگهداری اپلیکیشن‌های React قدیمی و ساخت یک پلتفرم چند پلتفرمی برای مدیران ERP. ساخت یک اپلیکیشن جمع‌آوری داده انبارداری با استفاده از IndexedDB برای ذخیره‌سازی آفلاین و همگام‌سازی، بهینه‌سازی شده برای دستگاه‌های PDA. مهاجرت پلتفرم ERP از React 16.7 به React 19، بازنویسی کامپوننت‌های کلاسی به تابعی با Hooks و جایگزینی Redux با Zustand.",
        title: "توسعه دهنده فرانت اند (پاره‌وقت)",
      },
      {
        id: "3",
        dateFrom: "1403",
        dateTo: "1404",
        location: "جامپو (شرکت بازی و سرگرمی)",
        desc: "توسعه وبسایت ثبت رزرو با Next.js برای یک پلتفرم بازی با انیمیشن‌های متنوع برای بهبود تجربه کاربری. توسعه اپلیکیشن بک‌آفیس با React 19 برای پشتیبانی از مدیریت کسب‌وکار.",
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
        desc: "توسعه فرانت اند یک پلتفرم محلی سفارش آنلاین غذا، یکپارچه‌سازی قابلیت‌های نقشه و ساخت پنل‌های فرانت‌آفیس و بک‌آفیس. بازسازی سیستم بک‌آفیس با React و MUI و کنترل دسترسی مبتنی بر نقش. بهبود ریسپانسیو بودن سایت با متدولوژی BEM و Sass.",
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
