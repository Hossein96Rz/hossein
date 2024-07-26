import Link from "next/link";
import { getDictionary } from "../../dictionaries";

async function page({ params: { lang } }) {
  const dic = await getDictionary(lang);
  return (
    <div>
      <Link href="/about">{dic.firstParagraph}</Link>
    </div>
  );
}

export default page;
