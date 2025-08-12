import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Gauge, Shield, Layers, BarChart3, Rocket } from 'lucide-react';
import { DecorativeOrbs } from '@/components/3d/DecorativeOrbs';

const features = [
  {
    title: 'AI-Powered Frontend',
    desc: 'Ship interfaces faster with AI-assisted components and patterns.',
    icon: Sparkles,
    badge: 'AI'
  },
  {
    title: 'Design System',
    desc: 'Consistent, accessible UI built with semantic design tokens.',
    icon: Layers,
    badge: 'UI/UX'
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Actionable insights with clean visualizations and reports.',
    icon: BarChart3,
    badge: 'Insights'
  },
  {
    title: 'Blazing Performance',
    desc: 'Optimized for Core Web Vitals and responsive experiences.',
    icon: Gauge,
    badge: 'Speed'
  },
  {
    title: 'Secure & Scalable',
    desc: 'Supabase + best practices to keep data safe and reliable.',
    icon: Shield,
    badge: 'RLS'
  },
  {
    title: 'Launch Ready',
    desc: 'From idea to deploy with CI-friendly builds and previews.',
    icon: Rocket,
    badge: 'DX'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <DecorativeOrbs className="absolute inset-0" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          title="SaaS-Ready Features"
          subtitle="Everything you need to present, validate, and scale your product."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, badge }) => (
            <Card key={title} className="p-6 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50 motion-safe:animate-rotate-in-right">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <Badge variant="secondary">{badge}</Badge>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
