import type { Metadata } from "next";
import CertificationsDisplay from "@/components/sections/CertificationsDisplay";

export const metadata: Metadata = {
  title: "Certifications — Zeen Zheng",
  description: "Cisco Certified Network Associate (CCNA 200-301).",
};

export default function CertificationsPage() {
  return <CertificationsDisplay />;
}
