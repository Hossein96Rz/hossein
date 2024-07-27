import Header from "@/src/views/Header";
import Sidebar from "@/src/views/Sidebar";
import { getDictionary } from "@/src/dictionaries";
import LangProvider from "@/src/components/LangProvider";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return {
    title: dic.title,
    description: dic.description,
  };
}

async function layout({ children, params }) {
  const { lang } = params;
  const dic = await getDictionary(lang);
  return (
    <>
      <LangProvider lang={lang} />
      <Header dictionary={dic} />
      <Sidebar dictionary={dic} />
      {children}
    </>
  );
}

export default layout;
