import Image from "next/image";
import hero from "public/content/hero.jpeg";
import githubIcon from "public/icons/github-mark.svg";
import linkedinIcon from "public/icons/linkedin.svg";
import instagramIcon from "public/icons/instagram.svg";
import classNames from "classnames";
import ReactTypedWraped from "./ReactTypedWraped";
import DownloadCvButton from "./DownloadCvButton";
import { getTranslations } from "next-intl/server";

async function Hero() {
  const t = await getTranslations("Hero");
  return (
    <section
      id="home"
      className="flex min-h-dvh items-center justify-center text-center"
    >
      <div className="px-5 py-24 text-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto flex h-52 w-52 items-center justify-center md:h-64 md:w-64"
        >
          <Image
            src={hero}
            placeholder="blur"
            alt="hero image"
            className="mx-auto rounded-full"
          />
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-xl font-medium text-[#666666] dark:text-white"
        >
          {t("heroMainText")}
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-custom-text-dark mt-5 text-3xl font-bold sm:text-5xl dark:text-white"
        >
          <ReactTypedWraped text={t("frontendDeveloper")} />
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="mt-5">
          <h3 className="text-custom-text-light dark:text-custom-text-light-dark mx-auto max-w-lg text-center text-base font-light sm:text-lg">
            {t("description")}
          </h3>
        </div>

        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="mx-auto flex items-center justify-center"
        >
          {contactList.map((item, index) => {
            return (
              <li
                key={item.url}
                className={classNames(
                  "relative mt-8 flex w-14 items-center justify-center border-[#e5e7eb] transition-all dark:border-slate-700 hover:[&>a]:-translate-y-[2px] hover:[&>a]:scale-110",
                  {
                    "ltr:border-r-[1px] rtl:border-l-[1px]":
                      index < contactList.length - 1,
                  },
                )}
              >
                <a
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition-all"
                >
                  <Image
                    src={item.icon}
                    alt="logo of social network"
                    width={22}
                    height={22}
                    className="invert-[.5] dark:invert-[.7]"
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div data-aos="fade-up" data-aos-offset="-30" data-aos-delay="600">
          <DownloadCvButton />
        </div>
      </div>
    </section>
  );
}

export default Hero;

const contactList = [
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/hossein-rezaei-596049233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwDwFetY0SDWTqaId2MhjFQ%3D%3D",
  },
  {
    icon: instagramIcon,
    url: "https://www.instagram.com/hosseinrz96/",
  },
  { icon: githubIcon, url: "https://github.com/Hossein96Rz" },
];
