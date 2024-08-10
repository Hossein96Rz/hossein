import Image from "next/image";
import hero from "public/content/hero.jpg";
import githubIcon from "public/icons/github-mark.svg";
import linkedinIcon from "public/icons/linkedin.svg";
import instagramIcon from "public/icons/instagram.svg";
import classNames from "classnames";
import ReactTypedWraped from "./ReactTypedWraped";
import DownloadCvButton from "./DownloadCvButton";
function Hero({ dictionary }) {
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
            alt="hero image"
            width={"auto"}
            height={"auto"}
            className="mx-auto rounded-full"
          />
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-xl font-medium text-[#666666] dark:text-white"
        >
          {dictionary.heroMainText}
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-5 text-3xl font-bold text-[#1A1A1A] sm:text-5xl dark:text-white"
        >
          <ReactTypedWraped text={dictionary.frontendDevelopr} />
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="mt-5">
          <h3 className="mx-auto max-w-lg text-center text-base font-light text-[#7E7E7E] sm:text-lg dark:text-[#a9afc3]">
            {dictionary.description}
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
          <DownloadCvButton dictionary={dictionary} />
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
