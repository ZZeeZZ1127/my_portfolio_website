import type { Metadata } from "next";
import ResumeSection from "@/components/sections/ResumeSection";

export const metadata: Metadata = {
  title: "Resume — Zeen Zheng",
  description:
    "University of Washington, B.S. Computer Science, expected June 2027. Download resume PDF.",
};

export default function ResumePage() {
  return <ResumeSection />;
}
