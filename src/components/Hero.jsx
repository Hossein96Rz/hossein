"use client";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import hero from "public/content/hero.webp";
import mask from "public/content/mask-image.svg";
import { ReactTyped } from "react-typed";
import linkedinIcon from "public/icons/linkedin.svg";
import instagramIcon from "public/icons/instagram.svg";
import Link from "next/link";
import classNames from "classnames";
function Hero({ dictionary }) {
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="px-24 py-5 text-center">
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
          className="mt-4 text-xl font-medium text-[#666666]"
        >
          {dictionary.heroMainText}
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-5 text-5xl font-bold text-[#1A1A1A]"
        >
          <ReactTyped
            strings={[dictionary.frontendDevelopr]}
            typeSpeed={80}
            startDelay={300}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="mt-5">
          <p className="max-w-lg text-lg font-light text-[#7E7E7E]">
            I&apos;m a passionate Frontend web Developer (ReactJs - NextJs) with
            experience in web development and using cutting edge technologies.
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
