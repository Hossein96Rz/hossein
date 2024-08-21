"use client";
import { toast } from "react-toastify";
import Button from "./Button";
import { useTranslations } from "next-intl";
import { validateFormData } from "../utils/utils";
import { useRef } from "react";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("Contact");

  async function submitMessage(formData: FormData) {
    const name = formData.get("name")?.toString() as string;
    const email = formData.get("userEmail")?.toString() as string;
    const message = formData.get("message")?.toString() as string;

    if (!validateFormData({ name, email, message })) {
      toast.error(t("validationError"));

      return;
    }

    try {
      const res = await fetch("/api/contact-submission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        toast.success(t("successMessage"));
        formRef.current?.reset();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || t("errorMessage"));
      }
    } catch (error) {
      toast.error(t("errorMessage"));
    }
  }

  return (
    <div
      className="mb-12 rounded-md bg-[#F5F8FC] px-5 py-12 md:px-11 lg:basis-1/2 ltr:lg:mr-7 rtl:lg:ml-7 dark:bg-[#191C26]"
      data-aos="fade-right"
      data-aos-delay={200}
    >
      <p className="mb-5 text-[20px] font-semibold text-[#1a1a1a] transition-all duration-300 group-hover:text-white dark:text-white">
        {t("contactMessage")}
      </p>
      <form ref={formRef} action={submitMessage}>
        <input
          type="text"
          name="name"
          minLength={3}
          placeholder={t("namePlaceHolder")}
          required
          className="mb-14 h-12 w-full border-b border-[#cbd3d9] bg-[#F5F8FC] p-2 text-[#7e7e7e] outline-none focus:border-black dark:border-[#a9afc37f] dark:bg-[#191C26] dark:focus:border-white"
        />
        <input
          type="email"
          name="userEmail"
          minLength={6}
          placeholder={t("userEmailPlaceHolder")}
          required
          className="mb-14 h-12 w-full border-b border-[#cbd3d9] bg-[#F5F8FC] p-2 text-[#7e7e7e] outline-none focus:border-black dark:border-[#a9afc37f] dark:bg-[#191C26] dark:focus:border-white"
        />
        <textarea
          name="message"
          placeholder={t("messagePlaceHolder")}
          required
          minLength={8}
          className="mb-14 h-12 w-full resize-none border-b border-[#cbd3d9] bg-[#F5F8FC] p-2 text-[#7e7e7e] outline-none focus:border-black dark:border-[#a9afc37f] dark:bg-[#191C26] dark:focus:border-white"
        />
        <Button type="submit">{t("submit")}</Button>
      </form>
    </div>
  );
}

export default ContactForm;
