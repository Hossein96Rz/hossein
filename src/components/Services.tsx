import { getTranslations } from "next-intl/server";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import dynamicIcon from "public/icons/dynamic.svg";
import scaleableIcon from "public/icons/scaleable.svg";
import responsiveIcon from "public/icons/responsive.svg";
import bestPracticeIcon from "public/icons/best.svg";
import DynamicServiceContent from "./DynamicServiceContent";
import dynamicImage from "public/content/services/dynamic.jpg";
import testImage from "public/content/services/testing.jpg";
import responsiveImage from "public/content/services/responsive.jpg";
import bestPracticeImage from "public/content/services/bestPractices.jpg";
async function Services() {
  const t = await getTranslations("Services");
  return (
    <Section id="services" title={t("whatido")}>
      <p className="mt-6 max-w-xl">{t("summary")}</p>
      <div className="pt-14">
        <ul className="flex flex-wrap md:-ml-8">
          <ServiceCard icon={dynamicIcon} title={t("dynamicWebApp")}>
            <DynamicServiceContent
              title={t("dynamicWebApp")}
              image={dynamicImage}
              text={t("dynamicWebAppDesc")}
            />
          </ServiceCard>

          <ServiceCard
            fadeInDelay={200}
            icon={scaleableIcon}
            title={t("scaleableAndMaintainable")}
          >
            <DynamicServiceContent
              title={t("scaleableAndMaintainable")}
              image={testImage}
              text={t("scaleableAndMaintainableDesc")}
            ></DynamicServiceContent>
          </ServiceCard>

          <ServiceCard
            fadeInDelay={400}
            icon={responsiveIcon}
            title={t("responsiveWebDesign")}
          >
            <DynamicServiceContent
              title={t("responsiveWebDesign")}
              image={responsiveImage}
              text={t("responsiveWebDesignDesc")}
            ></DynamicServiceContent>
          </ServiceCard>

          <ServiceCard
            fadeInDelay={600}
            icon={bestPracticeIcon}
            title={t("bestPracticeDesign")}
          >
            <DynamicServiceContent
              title={t("bestPracticeDesign")}
              image={bestPracticeImage}
              text={t("bestPracticeDesignDesc")}
            ></DynamicServiceContent>
          </ServiceCard>
        </ul>
      </div>
    </Section>
  );
}

export default Services;
