import Image from "next/image";
import aboutImage from "public/content/about.jpeg";
import SkillBar from "./SkillBar";
import SeeMore from "./SeeMore";
import { getTranslations } from "next-intl/server";
import Section from "./Section";

async function About() {
  const t = await getTranslations("About");
  return (
    <Section id="about" title={t("aboutMe")}>
      <div className="mt-16 flex-row-reverse lg:flex">
        <div
          data-aos="fade-left"
          className="pb-20 lg:w-1/2 ltr:lg:pl-28 ltr:2xl:pl-48 rtl:lg:pr-28 rtl:2xl:pr-48"
        >
          <div className="relative">
            <Image
              src={aboutImage}
              placeholder="blur"
              alt="a photo of myself"
              className="h-[500px] w-full rounded-2xl object-cover object-left md:h-[600px]"
            />
            <div className="bg-custom-dark absolute mx-4 flex h-36 w-36 -translate-y-[60%] flex-col items-center justify-center rounded-full text-sm font-medium text-white md:mx-11 md:h-64 md:w-64 md:-translate-y-[80%] md:text-lg ltr:lg:-translate-x-20 rtl:lg:translate-x-20">
              <span className="text-xl font-bold md:text-4xl">
                {t("years")}
              </span>
              {t("ofExp")}
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="lg:w-1/2">
          <div className="mb-14">
            <h3 className="text-custom-text-dark mb-4 text-xl font-semibold dark:text-white">
              {t("myInfoTitle")}
            </h3>
            <p className="text-custom-text-light dark:text-custom-text-light-dark text-lg leading-8">
              {t("bio")}
            </p>
          </div>
          <div className="mb-14">
            <h3 className="text-custom-text-dark mb-4 text-xl font-semibold dark:text-white">
              {t("whatIsMySkillLevelTitle")}
            </h3>
            <p className="text-custom-text-light dark:text-custom-text-light-dark text-lg leading-8">
              {t("whatIsMySkillLevel")}
            </p>
            <div className="pt-10 sm:-mx-5 sm:flex sm:flex-wrap">
              <SkillBar amount={100} title="JavaScript" />
              <SkillBar amount={100} title="ReactJs" />
              <SkillBar amount={95} title="NextJs" />
              <SkillBar amount={100} title="HTML" />
              <SkillBar amount={100} title="CSS" />
              <SkillBar amount={90} title="GIT" />
            </div>
            <div>
              <SeeMore />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
