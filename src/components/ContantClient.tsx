"use client";

import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function ContactClient() {
  return (
    <div className="flex flex-col lg:flex-row">
      <ContactForm />
      <Map />
    </div>
  );
}
