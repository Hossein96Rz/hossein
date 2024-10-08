import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import { Language } from "@/src/types/language";
import { unstable_setRequestLocale } from "next-intl/server";
interface PageProps {
  params: {
    locale: Language;
  };
}
function page({ params }: PageProps) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <main
      id="main"
      className="relative scroll-smooth xl:top-0 xl:w-[calc(100%-320px)] ltr:ml-auto rtl:mr-auto dark:[&>*:nth-child(even)]:bg-[#111319] [&>*:nth-child(odd)]:bg-[#F5F8FC] dark:[&>*:nth-child(odd)]:bg-[#191C26]"
    >
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default page;
