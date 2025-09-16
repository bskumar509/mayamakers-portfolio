import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { Users, Target, BarChart3, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Cultural Marketing',
    description: 'Creating authentic campaigns that resonate across diverse communities and cultures'
  },
  {
    icon: Target,
    title: 'Strategic Campaigns',
    description: 'Developing data-driven marketing strategies that maximize ROI and engagement'
  },
  {
    icon: BarChart3,
    title: 'Analytics Expert',
    description: 'Turning complex data insights into actionable marketing strategies for growth'
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description: 'Delivering measurable results through strategic digital marketing excellence'
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="About Me"
          subtitle="Passionate digital marketing strategist specializing in cultural campaigns and data-driven growth"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              As a dedicated digital marketing strategist, I specialize in creating culturally-aware campaigns that drive 
              real business growth. My expertise spans social media marketing, content creation, and performance analytics 
              to deliver campaigns that not only engage audiences but convert them into loyal customers.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep cultural insights and data-driven approach, I help brands authentically connect with diverse 
              audiences through strategic storytelling, targeted advertising, and measurable marketing solutions.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                2+ Years Experience
              </span>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                50+ Campaigns Delivered
              </span>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                300% Average ROI Growth
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group">
                <item.icon className="h-8 w-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-semibold mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
