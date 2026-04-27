import { Metadata } from 'next';
import TeamPage from '@/components/team-page';

export const metadata: Metadata = {
  title: 'Team | Xpectra',
  description: 'Meet the team building Xpectra.',
  alternates: {
    canonical: '/team',
  },
};

export default function Team() {
  return <TeamPage />;
}
