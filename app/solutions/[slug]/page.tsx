import SolutionDetailPage from '@/components/solution-detail-page';
import { solutionsData } from '@/lib/solutions-data';

export function generateStaticParams() {
  return [
    { slug: 'aerospace' },
    { slug: 'defense' },
    { slug: 'robotics' },
    { slug: 'automotive' },
    { slug: 'energy' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = solutionsData[slug] || solutionsData.aerospace;
  return {
    title: `${data.title} | Xpectra`,
    description: data.tagline,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SolutionDetailPage slug={slug} />;
}
