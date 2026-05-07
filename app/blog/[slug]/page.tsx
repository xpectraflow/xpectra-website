import { BlogPost } from "@/components/blog-post";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const BLOG_POSTS = {
  "spacex-data-infrastructure-lessons": {
    title: "From Petabytes to Prototypes: How SpaceX Uses Data Infrastructure to Shrink Time-to-Insight",
    description: "Reverse-engineering how modern aerospace leaders handle mission-critical sensor data to shrink time-to-insight using Agile Aerospace and HIL testing.",
    date: "May 5, 2026",
    author: "Arush Kumar Singh",
    readTime: "6 min read",
    slug: "spacex-data-infrastructure-lessons",
    category: "Case Study",
    tags: ["SpaceX", "Telemetry", "Infrastructure", "Engineering"]
  },
  "cost-of-unknown-unknowns": {
    title: "The Cost of \"Unknown-Unknowns\" in Aerospace Engineering",
    description: "Reverse-engineering why standard tools fail at hardware anomaly detection and how unifying metric spikes with logs can reduce MTTR from weeks to minutes.",
    date: "May 6, 2026",
    author: "Arush Kumar Singh",
    readTime: "7 min read",
    slug: "cost-of-unknown-unknowns",
    category: "Engineering",
    tags: ["Aerospace", "Telemetry", "Anomaly Detection", "Observability"]
  },
  "bridging-the-sim-to-real-gap": {
    title: "The Sim-to-Real Gap: Why Hardware Iteration Requires More Than Just Simulation",
    description: "Exploring why simulations fall short and how high-velocity physical testing - powered by world-class telemetry data infrastructure - is the only way to uncover ground truth.",
    date: "May 8, 2026",
    author: "Arush Kumar Singh",
    readTime: "8 min read",
    slug: "bridging-the-sim-to-real-gap",
    category: "Engineering",
    tags: ["Simulation", "HIL", "Robotics", "Aerospace", "Telemetry"]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];
  if (!post) return { title: "Post Not Found" };

  const url = `https://xpectraflow.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Xpectra Blog`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: "/og-image.png", // Fallback to main OG image or post-specific one
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug as keyof typeof BLOG_POSTS];
  
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://xpectraflow.com/team"
    },
    "datePublished": new Date(post.date).toISOString(),
    "image": "https://xpectraflow.com/og-image.png",
    "publisher": {
      "@type": "Organization",
      "name": "Xpectraflow",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xpectraflow.com/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://xpectraflow.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost post={post} />
    </>
  );
}
