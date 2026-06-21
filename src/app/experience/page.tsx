import type { Metadata } from "next";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience — Zeen Zheng",
  description:
    "Work experience at SkyDrop, Husky Coding Project, Montana State University (NSF REU), and MIT Beaver Works Summer Institute.",
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
