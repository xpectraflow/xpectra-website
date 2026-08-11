import { BlogPost } from "@/components/blog-post";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const BLOG_POSTS = {
  "xpectra-vs-ni-systemlink": {
    title: "Xpectra vs. NI SystemLink: Choosing the Right Data Infrastructure for Agile Hardware",
    description: "An objective breakdown of the architectural differences between NI SystemLink and Xpectra, outlining where each platform shines and helping you choose the right data infrastructure for your specific engineering goals.",
    date: "May 25, 2026",
    author: "Arush Kumar Singh",
    readTime: "6 min read",
    slug: "xpectra-vs-ni-systemlink",
    category: "Engineering",
    tags: ["SystemLink", "NI", "Telemetry", "Infrastructure", "Comparison"]
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
