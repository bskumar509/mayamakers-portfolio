import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';

const plans = [
  {
    name: 'Starter',
    price: '15,000₹',
    period: '/mo',
    highlight: 'Perfect for small businesses',
    features: [
      '15 posts per month',
      '2 platforms management',
      'Monthly analytics report',
      'Basic content calendar',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '25,000₹',
    period: '/mo',
    highlight: 'Most popular choice',
    features: [
      '30 posts per month',
      '4 platforms management',
      'Weekly analytics reports',
      'Advanced content strategy',
      'Video content (5/month)',
      'Paid ads management',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: 'For growing businesses',
    features: [
      'Unlimited posts',
      'Multi-platform campaigns',
      'Daily performance tracking',
      'Custom content creation',
      'Influencer partnerships',
      'Dedicated account manager',
      '24/7 support'
    ]
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Marketing Services" subtitle="Comprehensive digital marketing packages designed to drive growth." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-6 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50 motion-safe:animate-rotate-in-right">
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.highlight}</p>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <GradientButton className="w-full">Get Started</GradientButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
