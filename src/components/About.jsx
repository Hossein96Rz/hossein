import Image from "next/image";
import aboutImage from "public/content/about.jpg";
import SkillBar from "./SkillBar";

function About({ dictionary }) {
  return (
    <section className="overflow-hidden px-5 pb-36 pt-28" id="about">
      <div className="mx-auto max-w-screen-2xl">
        <h3 className="mb-16 text-4xl font-bold text-[#1A1A1A] md:text-5xl dark:text-white">
          {dictionary.aboutMe}
        </h3>
        <div className="flex-row-reverse lg:flex">
          <div
            data-aos="fade-left"
            className="pb-20 lg:w-1/2 lg:pl-28 2xl:pl-48"
            // data-aos-offset="-230"
          >
            <div className="relative">
              <Image
                src={aboutImage}
                height={445}
                width={599}
                alt="a photo of myself"
                className="h-[600px] w-full rounded-2xl object-cover object-top"
              />
              <div className="absolute mx-4 flex h-36 w-36 -translate-y-[60%] flex-col items-center justify-center rounded-full bg-[#34495E] text-sm font-medium text-white md:mx-11 md:h-64 md:w-64 md:-translate-y-[80%] md:text-lg lg:-translate-x-20">
                <span className="text-xl font-bold md:text-4xl">
                  {dictionary.years}
                </span>
                {dictionary.ofExp}
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            // data-aos-offset="-230"
            className="lg:w-1/2"
          >
            <div className="mb-14">
              <h3 className="mb-4 text-xl font-semibold text-[#1A1A1A] dark:text-white">
                {dictionary.myInfoTitle}
              </h3>
              <p className="text-lg leading-8 text-[#7e7e7e] dark:text-[#A9AFC3]">
                {dictionary.bio}
              </p>
            </div>
            <div className="mb-14">
              <h3 className="mb-4 text-xl font-semibold text-[#1A1A1A] dark:text-white">
                {dictionary.whatIsMySkillLevelTitle}
              </h3>
              <p className="text-lg leading-8 text-[#7e7e7e] dark:text-[#A9AFC3]">
                {dictionary.whatIsMySkillLevel}
              </p>
              <div className="pt-10 sm:-mx-5 sm:flex sm:flex-wrap">
                <SkillBar amount={95} title="JavaScript" />
                <SkillBar amount={80} title="ReactJs" />
                <SkillBar amount={80} title="NextJs" />
                <SkillBar amount={97} title="HTML" />
                <SkillBar amount={68} title="CSS" />
              </div>
              <div>
                <button className="mt-2 rounded-md border-[2px] border-[#000] px-5 py-3 transition-all duration-500 hover:bg-[#000] hover:text-white dark:bg-white dark:hover:border-white">
                  {dictionary.seeMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
