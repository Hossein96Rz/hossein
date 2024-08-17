import { getTranslations } from "next-intl/server";
import Section from "./Section";
import ServiceCard from "./ServiceCard";

async function Services() {
  const t = await getTranslations("Services");
  return (
    <Section id="services" title={t("whatido")}>
      <p className="mt-6 max-w-xl">{t("summary")}</p>
      <div className="pt-14">
        <ul className="flex flex-wrap md:-ml-8">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </ul>
      </div>
    </Section>
  );
}

export default Services;
