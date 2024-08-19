import { getTranslations } from "next-intl/server";
import Section from "./Section";
import Image from "next/image";
import emailIcon from "public/icons/email.webp";
import ContactForm from "./ContactForm";

async function Contact() {
  const t = await getTranslations("Contact");
  return (
    <Section title={t("contact")} id="contact">
      <p className="mt-6 max-w-xl">{t("summary")}</p>
      <div className="pb-7 pt-14">
        <div
          data-aos="fade-right"
          className="mb-14 flex rounded-md bg-[#F5F8FC] p-5 md:w-max dark:bg-[#191C26]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#34495e]">
            <Image
              src={emailIcon}
              className="invert"
              alt="email icon"
              width={25}
              height={25}
            />
          </div>
          <div className="grow pl-4">
            <h3 className="mb-1 text-xl font-medium text-[#1a1a1a] dark:text-white">
              {t("email")}
            </h3>
            <address>
              <a href="mailto:hossein96rz@gmail.com">hossein96rz@gmail.com</a>
            </address>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;
