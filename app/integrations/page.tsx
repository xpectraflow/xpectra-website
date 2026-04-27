import IntegrationsPage from '@/components/integrations-page';

export const metadata = {
  title: 'Integrations | Xpectra',
  description: 'Connect your sensors and DAQ systems to Xpectra natively.',
  alternates: {
    canonical: '/integrations',
  },
};

export default function Integrations() {
  return <IntegrationsPage />;
}
