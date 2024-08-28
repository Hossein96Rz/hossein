import { getLocale } from "next-intl/server";

async function Footer() {
  const locale = await getLocale();
  return (
    <>
      {locale === "en" ? (
        <footer className="px-5 py-1 text-sm">
          <p>
            &copy; 2024 UI Inspired by{" "}
            <a
              href="https://edina-next.vercel.app/home-sidebar"
              className="font-bold italic"
              target="_blank"
            >
              Edina Next
            </a>
            , created by Hossein Rezaei.
          </p>
        </footer>
      ) : (
        <footer className="px-5 py-1 text-sm">
          <p>
            &copy; 1403 الهام‌گرفته طرح از{" "}
            <a
              href="https://edina-next.vercel.app/home-sidebar"
              className="font-bold italic"
              target="_blank"
            >
              Edina Next
            </a>
            ، پیاده سازی شده توسط حسین رضائی.
          </p>
        </footer>
      )}
    </>
  );
}

export default Footer;
