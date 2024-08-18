import { getTranslations } from "next-intl/server";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import dynamicIcon from "public/icons/dynamic.svg";
import scaleableIcon from "public/icons/scaleable.svg";
import responsiveIcon from "public/icons/responsive.svg";
import bestPracticeIcon from "public/icons/best.svg";
async function Services() {
  const t = await getTranslations("Services");
  return (
    <Section id="services" title={t("whatido")}>
      <p className="mt-6 max-w-xl">{t("summary")}</p>
      <div className="pt-14">
        <ul className="flex flex-wrap md:-ml-8">
          <ServiceCard icon={dynamicIcon} title={t("dynamicWebApp")}>
            <div>adsfdasf</div>
          </ServiceCard>
          <ServiceCard
            fadeInDelay={200}
            icon={scaleableIcon}
            title={t("scaleableAndMaintainable")}
          >
            <div>adsfdasf</div>
          </ServiceCard>
          <ServiceCard
            fadeInDelay={400}
            icon={responsiveIcon}
            title={t("responsiveWebDesign")}
          >
            <div>adsfdasf</div>
          </ServiceCard>
          <ServiceCard
            fadeInDelay={600}
            icon={bestPracticeIcon}
            title={t("bestPracticeDesign")}
          >
            <div>adsfdasf</div>
          </ServiceCard>
        </ul>
      </div>
    </Section>
  );
}

export default Services;
