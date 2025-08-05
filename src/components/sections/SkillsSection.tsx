import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Social Media Marketing',
    skills: [
      'Strategy Development', 'Campaign Management', 'Analytics & Insights',
      'Content Planning', 'Community Management', 'Influencer Partnerships',
      'Cross-Cultural Marketing', 'Festival Campaigns', 'Audience Targeting'
    ]
  },
  {
    title: 'Design & Creative',
    skills: [
      'Adobe Creative Suite', 'Figma', 'Canva Pro', 'Typography',
      'Brand Identity', 'Visual Storytelling', 'Motion Graphics',
      'Cultural Aesthetics', 'Festival Design', 'UI/UX Principles'
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      'React.js', 'TypeScript', 'TailwindCSS', 'Next.js',
      'Responsive Design', 'API Integration', 'Performance Optimization',
      'AI/ML Integration', 'Multimodal AI', 'OpenAI GPT', 'Claude AI'
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Meta Business Suite', 'Google Analytics', 'Hootsuite',
      'Mailchimp', 'Zapier', 'Notion', 'Slack', 'GitHub',
      'Vercel', 'AWS', 'Supabase', 'Stripe'
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Skills & Tools"
          subtitle="A comprehensive toolkit spanning marketing strategy, creative design, and cutting-edge development"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};