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
      { name: 'Facebook Ads', hasLogo: false },
      { name: 'Instagram Marketing', hasLogo: false },
      { name: 'LinkedIn Campaigns', hasLogo: false },
      { name: 'TikTok Advertising', hasLogo: false },
      { name: 'Community Management', hasLogo: false },
      { name: 'Influencer Partnerships', hasLogo: false }
    ]
  },
  {
    title: 'Content Creation',
    skills: [
      { name: 'Figma', hasLogo: true },
      { name: 'Copywriting', hasLogo: false },
      { name: 'Visual Storytelling', hasLogo: false },
      { name: 'Video Content', hasLogo: false },
      { name: 'Brand Voice', hasLogo: false },
      { name: 'Cultural Content', hasLogo: false },
      { name: 'Graphic Design', hasLogo: false },
      { name: 'Motion Graphics', hasLogo: false }
    ]
  },
  {
    title: 'Analytics & Optimization',
    skills: [
      { name: 'Google Analytics', hasLogo: false },
      { name: 'Facebook Insights', hasLogo: false },
      { name: 'Performance Tracking', hasLogo: false },
      { name: 'A/B Testing', hasLogo: false },
      { name: 'Conversion Optimization', hasLogo: false },
      { name: 'ROI Analysis', hasLogo: false },
      { name: 'Data Visualization', hasLogo: false },
      { name: 'Campaign Reporting', hasLogo: false }
    ]
  },
  {
    title: 'Marketing Tools',
    skills: [
      { name: 'Slack', hasLogo: true },
      { name: 'Notion', hasLogo: true },
      { name: 'Hootsuite', hasLogo: false },
      { name: 'Buffer', hasLogo: false },
      { name: 'Canva', hasLogo: false },
      { name: 'Mailchimp', hasLogo: false },
      { name: 'HubSpot', hasLogo: false },
      { name: 'SEMrush', hasLogo: false }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Skills & Expertise"
          subtitle="Comprehensive digital marketing skills to drive growth and engagement across all platforms"
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