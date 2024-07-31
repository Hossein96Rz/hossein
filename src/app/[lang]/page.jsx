import About from "@/src/components/About";
import { getDictionary } from "../../dictionaries";
import Hero from "@/src/components/Hero";

async function page({ params: { lang } }) {
  const dic = await getDictionary(lang);
  return (
    <main className="relative h-dvh overflow-auto xl:top-0 xl:w-[calc(100%-320px)] dark:[&>*:nth-child(even)]:bg-[#111319] [&>*:nth-child(odd)]:bg-[#F5F8FC] dark:[&>*:nth-child(odd)]:bg-[#191C26]">
      <Hero dictionary={dic} />
      <About dictionary={dic} />
    </main>
  );
}

export default page;
