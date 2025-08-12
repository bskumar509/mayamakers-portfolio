import { SectionHeader } from '@/components/ui/section-header';
import { Badge } from '@/components/ui/badge';

const integrations = [
  'Supabase',
  'Stripe',
  'OpenAI',
  'Vercel',
  'GitHub',
  'Slack',
  'Notion',
  'Google Analytics'
];

export const IntegrationsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Works with your tools"
          subtitle="Easily connect the services you already use."
        />
        <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
          {integrations.map((name) => (
            <Badge
              key={name}
              variant="secondary"
              className="text-sm px-4 py-2 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50"
            >
              {name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
