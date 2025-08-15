import { SectionHeader } from '@/components/ui/section-header';
import { TechLogo } from '@/components/ui/tech-logo';
import { ScrollingCarousel } from '@/components/ui/scrolling-carousel';

const integrations = [
  'Supabase',
  'Stripe', 
  'OpenAI',
  'Vercel',
  'GitHub',
  'Slack',
  'Notion',
  'TailwindCSS',
  'React',
  'TypeScript',
  'Figma'
];

export const IntegrationsSection = () => {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Works with your tools"
          subtitle="Seamlessly integrates with the technologies and services you already use."
        />
        
        {/* Scrolling logo carousel */}
        <div className="mt-12">
          <ScrollingCarousel direction="right" speed="normal" className="py-4">
            <div className="flex gap-8 items-center">
              {integrations.map((name) => (
                <div key={name} className="flex items-center gap-3 px-6 py-3 bg-background/60 backdrop-blur rounded-lg border whitespace-nowrap">
                  <TechLogo name={name} size="md" />
                  <span className="font-medium text-foreground">{name}</span>
                </div>
              ))}
            </div>
          </ScrollingCarousel>
        </div>

        {/* Second row scrolling in opposite direction */}
        <div className="mt-4">
          <ScrollingCarousel direction="left" speed="slow" className="py-4">
            <div className="flex gap-8 items-center">
              {[...integrations].reverse().map((name) => (
                <div key={`reverse-${name}`} className="flex items-center gap-3 px-6 py-3 bg-background/40 backdrop-blur rounded-lg border whitespace-nowrap">
                  <TechLogo name={name} size="sm" />
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </ScrollingCarousel>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
