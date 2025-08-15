import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { Badge } from '@/components/ui/badge';
import { TechLogo } from '@/components/ui/tech-logo';
import { CardGrid } from '@/components/ui/card-grid';

const skillCategories = [
  {
    title: 'Social Media Marketing',
    skills: [
      { name: 'Strategy Development', hasLogo: false },
      { name: 'Campaign Management', hasLogo: false },
      { name: 'Analytics & Insights', hasLogo: false },
      { name: 'Content Planning', hasLogo: false },
      { name: 'Community Management', hasLogo: false },
      { name: 'Influencer Partnerships', hasLogo: false },
      { name: 'Cross-Cultural Marketing', hasLogo: false },
      { name: 'Festival Campaigns', hasLogo: false }
    ]
  },
  {
    title: 'Design & Creative',
    skills: [
      { name: 'Figma', hasLogo: true },
      { name: 'Typography', hasLogo: false },
      { name: 'Brand Identity', hasLogo: false },
      { name: 'Visual Storytelling', hasLogo: false },
      { name: 'Motion Graphics', hasLogo: false },
      { name: 'Cultural Aesthetics', hasLogo: false },
      { name: 'Festival Design', hasLogo: false },
      { name: 'UI/UX Principles', hasLogo: false }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', hasLogo: true },
      { name: 'TypeScript', hasLogo: true },
      { name: 'TailwindCSS', hasLogo: true },
      { name: 'Responsive Design', hasLogo: false },
      { name: 'API Integration', hasLogo: false },
      { name: 'Performance Optimization', hasLogo: false },
      { name: 'OpenAI', hasLogo: true },
      { name: 'AI/ML Integration', hasLogo: false }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub', hasLogo: true },
      { name: 'Vercel', hasLogo: true },
      { name: 'Supabase', hasLogo: true },
      { name: 'Stripe', hasLogo: true },
      { name: 'Slack', hasLogo: true },
      { name: 'Notion', hasLogo: true },
      { name: 'Google Analytics', hasLogo: false },
      { name: 'Zapier', hasLogo: false }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Skills & Tools"
          subtitle="A comprehensive toolkit spanning marketing strategy, creative design, and cutting-edge development"
        />
        
        <CardGrid columns={2} gap="lg" className="mt-10">
          {skillCategories.map((category, index) => (
            <AnimatedCard 
              key={category.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 150}
              className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(({ name, hasLogo }) => (
                  <Badge 
                    key={name}
                    variant="secondary"
                    className="px-3 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default flex items-center gap-2"
                  >
                    {hasLogo && <TechLogo name={name} size="sm" className="w-4 h-4" />}
                    {name}
                  </Badge>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </CardGrid>
      </div>
    </section>
  );
};