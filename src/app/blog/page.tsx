import type { Metadata } from "next";
import BlogList from "@/components/sections/BlogList";

export const metadata: Metadata = {
  title: "Blog — Zeen Zheng",
  description:
    "Writing about AI, algorithms, systems, and software engineering.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  return <BlogList activeTag={tag ?? null} />;
}
