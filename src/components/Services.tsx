import { getTranslations } from "next-intl/server";

async function Services() {
  const t = await getTranslations("Services");
  return <div>{t("whatido")}</div>;
}

export default Services;
