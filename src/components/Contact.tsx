import { getTranslations } from "next-intl/server";
import Section from "./Section";
import emailIcon from "public/icons/email.webp";
import instagramIcon from "public/icons/instagram.svg";
import linkedInIcon from "public/icons/linkedin.svg";
import ContactForm from "./ContactForm";
import dynamic from "next/dynamic";
import ContactCard from "./ContactCard";

const LazyMap = dynamic(() => import("./Map"), {
  ssr: false,
});

async function Contact() {
  const t = await getTranslations("Contact");

  return (
    <Section title={t("contact")} id="contact">
      <p className="mt-6 max-w-xl">{t("summary")}</p>
      <div className="flex flex-col flex-wrap pb-7 pt-14 md:flex-row ltr:md:-ml-7 rtl:md:-mr-7">
        <ContactCard icon={emailIcon} title={t("email")}>
          <address>
            <a href="mailto:hossein96rz@gmail.com" className="text-base">
              hossein96rz@gmail.com
            </a>
          </address>
        </ContactCard>
        <ContactCard icon={linkedInIcon} title={t("linkedIn")}>
          <a href="https://www.linkedin.com/in/hossein-rezaei-596049233/">
            <address>{t("link")}</address>
          </a>
        </ContactCard>
        <ContactCard icon={instagramIcon} title={t("instagram")}>
          <a href="https://www.instagram.com/hosseinrz96/">
            <address>{t("link")}</address>
          </a>
        </ContactCard>
      </div>
      <div className="flex flex-col lg:flex-row">
        <ContactForm />
        <LazyMap />
      </div>
    </Section>
  );
}

export default Contact;
