import { Metadata } from 'next';
import XpectraWebsite from '@/components/xpectra-website';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return <XpectraWebsite />;
}
