"use client";

import Image from "next/image";
import aboutImage from "public/content/about.jpg";
import SkillBar from "./SkillBar";
import SeeMore from "./SeeMore";
import { useTranslations } from "next-intl";
import Section from "./Section";
import { useState, useEffect } from "react";

function About() {
  const t = useTranslations("About");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const aos = (animation: string, delay?: number) =>
    ready
      ? {
          "data-aos": animation,
          ...(delay != null ? { "data-aos-delay": String(delay) } : {}),
        }
      : {};

  return (
    <Section id="about" title={t("aboutMe")}>
      <div className="mt-16 flex-row-reverse lg:flex">
        <div
          {...aos("fade-left")}
          className="pb-20 lg:w-1/2 ltr:lg:pl-28 ltr:2xl:pl-48 rtl:lg:pr-28 rtl:2xl:pr-48"
        >
          <div className="relative">
            <Image
              src={aboutImage}
              placeholder="blur"
              alt="a photo of myself"
              className="h-[500px] w-full rounded-2xl object-cover object-left md:h-[600px]"
            />
            <div className="absolute mx-4 flex h-36 w-36 -translate-y-[60%] flex-col items-center justify-center rounded-full bg-custom-dark text-sm font-medium text-white md:mx-11 md:h-64 md:w-64 md:-translate-y-[80%] md:text-lg ltr:lg:-translate-x-20 rtl:lg:translate-x-20">
              <span className="text-xl font-bold md:text-4xl">
                {t("years")}
              </span>
              {t("ofExp")}
            </div>
          </div>
        </div>
        <div {...aos("fade-right")} className="lg:w-1/2">
          <div className="mb-14">
            <h3 className="mb-4 text-xl font-semibold text-custom-text-dark dark:text-white">
              {t("myInfoTitle")}
            </h3>
            <p className="text-lg leading-8 text-custom-text-light dark:text-custom-text-light-dark">
              {t("bio")}
            </p>
          </div>
          <div className="mb-14">
            <h3 className="mb-4 text-xl font-semibold text-custom-text-dark dark:text-white">
              {t("whatIsMySkillLevelTitle")}
            </h3>
            <p className="text-lg leading-8 text-custom-text-light dark:text-custom-text-light-dark">
              {t("whatIsMySkillLevel")}
            </p>
            <div className="grid grid-cols-2 gap-4 py-10 text-xl text-custom-text-dark dark:text-white">
              <span>JavaScript / TypeScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git</span>
            </div>
          </div>
          <div>
            <SeeMore />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
