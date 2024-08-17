import About from "@/src/components/About";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";

function page() {
  return (
    <main
      id="main"
      className="relative scroll-smooth xl:top-0 xl:w-[calc(100%-320px)] ltr:ml-auto rtl:mr-auto dark:[&>*:nth-child(even)]:bg-[#111319] [&>*:nth-child(odd)]:bg-[#F5F8FC] dark:[&>*:nth-child(odd)]:bg-[#191C26]"
    >
      <Hero />
      <About />
      {/* <Services /> */}
    </main>
  );
}

export default page;
