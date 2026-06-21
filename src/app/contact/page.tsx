import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Zeen Zheng",
  description:
    "Get in touch with Zeen Zheng — email, GitHub, LinkedIn.",
};

export default function ContactPage() {
  return <ContactSection />;
}
