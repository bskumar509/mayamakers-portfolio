import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';

const plans = [
  {
    name: 'Starter',
    price: '5000₹',
    period: '/mo',
    highlight: 'For personal sites and prototypes',
    features: ['2 posts/week ','monthly analises report','2 vid/m']
  },
  {
    name: 'Intermedia ',
    price: '8800₹',
    period: '/mo',
    highlight: 'Best for creators & startups',
    features: ['4 posts/week ','weekly analises report','5 vid/m','Special posts any']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: 'Tailored for your business needs',
    features: ['All Starter features', 'Unlimited projects', 'Priority support', 'Advanced sections']
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Transparent Pricing" subtitle="Simple plans that grow with you." />
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
