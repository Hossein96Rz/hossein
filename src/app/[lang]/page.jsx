import Link from "next/link";
import { getDictionary } from "../../dictionaries";

async function page({ params: { lang } }) {
  const dic = await getDictionary(lang);
  return (
    <main className="relative top-20 h-[calc(100dvh-80px)] overflow-auto xl:top-0 xl:h-dvh xl:w-[calc(100%-320px)] dark:[&>*:nth-child(even)]:bg-[#111319] [&>*:nth-child(odd)]:bg-[#F5F8FC] dark:[&>*:nth-child(odd)]:bg-[#191C26]">
      <section className="h-[100dvh]">s</section>
      <section className="">s</section>
      <section className="">s</section>
      <section className="">s</section>
    </main>
  );
}

export default page;
