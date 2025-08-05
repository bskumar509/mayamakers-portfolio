import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { Users, Palette, Code, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Cultural Sensitivity',
    description: 'Crafting campaigns that resonate across diverse communities and cultures'
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Developing visually stunning posts that capture attention and drive engagement'
  },
  {
    icon: Code,
    title: 'Technical Innovation',
    description: 'Building scalable React applications with cutting-edge AI integrations'
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Delivering measurable growth through strategic marketing and design excellence'
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="About Me"
          subtitle="Passionate about creating meaningful digital experiences that bridge creativity and technology"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed">
              As a multidisciplinary creative professional, I specialize in the intersection of social media marketing, 
              visual design, and frontend development. My approach combines data-driven strategies with artistic intuition 
              to create campaigns and applications that not only look stunning but deliver exceptional results.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a deep understanding of cultural nuances and emerging technologies, I help brands connect authentically 
              with their audiences while building robust, scalable digital solutions that stand the test of time.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                50+ Successful Campaigns
              </span>
              <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                AI Integration Expert
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