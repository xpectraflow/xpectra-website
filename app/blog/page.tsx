import { BlogList } from "@/components/blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog | Xpectra Insights",
  description: "Deep dives into telemetry infrastructure, sensor validation, and the future of hardware engineering from the Xpectra team.",
  alternates: {
    canonical: "https://xpectraflow.com/blog",
  },
  openGraph: {
    title: "Engineering Blog | Xpectra Insights",
    description: "Deep dives into telemetry infrastructure, sensor validation, and the future of hardware engineering.",
    url: "https://xpectraflow.com/blog",
    siteName: "Xpectraflow",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return <BlogList />;
}
