import type { Metadata } from "next";
import ProjectShowcase from "@/components/sections/ProjectShowcase";

export const metadata: Metadata = {
  title: "Projects — Zeen Zheng",
  description:
    "EduPath (AI-powered academic planner), Weather-Yield Detection Model, and more.",
};

export default function ProjectsPage() {
  return <ProjectShowcase />;
}
