import { cookies } from "next/headers";

const getLocale = async () => {
  const store = await cookies();
  const locale = store.get("NEXT_LOCALE")?.value || "en";
  return locale;
};

export default getLocale;
