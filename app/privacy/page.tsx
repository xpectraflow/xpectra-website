import { PrivacyPage } from '@/components/privacy-page';

export const metadata = {
  title: 'Privacy Policy | Xpectra',
  description: 'Understand how we handle and protect your telemetry data.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function Privacy() {
  return <PrivacyPage />;
}
