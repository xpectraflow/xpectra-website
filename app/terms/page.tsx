import { TermsPage } from '@/components/terms-page';

export const metadata = {
  title: 'Terms of Service | Xpectra',
  description: 'Proffessional legal and usage conditions for the Xpectra platform.',
  alternates: {
    canonical: '/terms',
  },
};

export default function Terms() {
  return <TermsPage />;
}
