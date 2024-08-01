import Image from "next/image";
import aboutImage from "public/content/about.jpg";

function About({ dictionary }) {
  return (
    <section className="min-h-dvh px-5 pt-24" id="about">
      <div className="pb-20">
        <h3 className="text-4xl font-bold text-[#1A1A1A] md:text-5xl dark:text-white">
          {dictionary.aboutMe}
        </h3>
        <div data-aos="fade-left" className="relative mt-16">
          <Image
            src={aboutImage}
            height={445}
            width={599}
            alt="a photo of myself"
            className="h-[600px] w-full rounded-2xl object-cover object-top"
          />
          <div className="absolute mx-4 flex h-36 w-36 -translate-y-[60%] flex-col items-center justify-center rounded-full bg-[#34495E] text-sm font-medium text-white md:mx-11 md:h-64 md:w-64 md:-translate-y-[80%]">
            <span className="text-xl font-bold">{dictionary.years}</span>
            {dictionary.ofExp}
          </div>
        </div>
      </div>
      <div className="mb-14">
        <h3 className="mb-4 text-xl font-semibold text-[#1A1A1A]">
          {dictionary.myInfoTitle}
        </h3>
        <p className="text-lg leading-8 text-[#7e7e7e]">{dictionary.bio}</p>
      </div>
      <div className="mb-14">
        <h3></h3>
      </div>
    </section>
  );
}

export default About;
