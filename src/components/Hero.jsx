"use client";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import hero from "public/content/hero.webp";
import { ReactTyped } from "react-typed";
import linkedinIcon from "public/icons/linkedin.svg";
import instagramIcon from "public/icons/instagram.svg";
import classNames from "classnames";
function Hero({ dictionary }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex min-h-dvh items-center justify-center text-center">
      <div className="px-5 py-24 text-center">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex h-full items-center justify-center"
        >
          <Image
            src={hero}
            alt="hero image"
            width={245}
            height={245}
            className="rounded-full"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-xl font-medium text-[#666666] dark:text-white"
        >
          {dictionary.heroMainText}
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-5 text-5xl font-bold text-[#1A1A1A] dark:text-white"
        >
          <ReactTyped
            strings={[dictionary.frontendDevelopr]}
            typeSpeed={80}
            startDelay={300}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="mt-5">
          <p
            dir="rtl"
            className="mx-auto max-w-lg text-center text-lg font-light text-[#7E7E7E] dark:text-[#a9afc3]"
          >
            {dictionary.description}
          </p>
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
                    "border-r-[1px]": index < contactList.length - 1,
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
        <div data-aos="fade-up" data-aos-delay="600">
          <button className="mt-6 rounded-full border-2 border-[#7e7e7e] px-9 py-2 text-lg font-medium text-[#1a1a1a] transition-all duration-200 ease-linear hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white dark:border-[#a9afc3] dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black">
            {dictionary.downloadCv}
          </button>
        </div>
        {/* <div data-aos="fade-up" data-aos-delay="300" className="h-full">
          c
        </div>
        <div data-aos="fade-up" data-aos-delay="500" className="h-full">
          c
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="h-full">
          c
        </div> */}
      </div>
    </div>
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
];
