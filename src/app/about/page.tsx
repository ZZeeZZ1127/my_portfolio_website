import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Zeen Zheng",
  description:
    "Computer Science student at the University of Washington. Skills in Python, TypeScript, Java, C, GCP, AWS, ROS 2, and more.",
};

export default function AboutPage() {
  return <AboutSection />;
}
