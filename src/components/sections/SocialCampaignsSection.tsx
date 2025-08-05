import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';
import { ExternalLink, TrendingUp, Users, Heart } from 'lucide-react';
import socialCampaignsImage from '@/assets/social-campaigns.jpg';

const campaigns = [
  {
    title: 'Diwali Festival Campaign',
    description: 'A culturally sensitive celebration campaign that increased engagement by 340% across diverse communities.',
    metrics: [
      { label: 'Engagement Rate', value: '+340%' },
      { label: 'Reach', value: '2.5M' },
      { label: 'Cultural Accuracy', value: '98%' }
    ],
    tags: ['Cultural Sensitivity', 'Festival Marketing', 'Community Engagement']
  },
  {
    title: 'Ramadan Unity Campaign',
    description: 'Cross-platform campaign promoting unity and understanding during Ramadan, featuring diverse voices.',
    metrics: [
      { label: 'Shares', value: '+520%' },
      { label: 'Positive Sentiment', value: '96%' },
      { label: 'Community Growth', value: '+45%' }
    ],
    tags: ['Interfaith Dialogue', 'Community Building', 'Authentic Storytelling']
  },
  {
    title: 'Lunar New Year Series',
    description: 'Multi-generational campaign celebrating traditions while embracing modern perspectives.',
    metrics: [
      { label: 'Video Views', value: '1.8M' },
      { label: 'Save Rate', value: '+280%' },
      { label: 'Cross-Generation Appeal', value: '92%' }
    ],
    tags: ['Tradition Meets Modern', 'Video Content', 'Generational Bridge']
  }
];

export const SocialCampaignsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Social Media Campaigns"
          subtitle="Culturally conscious campaigns that drive authentic engagement and meaningful connections"
        />
        
        {/* Featured Image */}
        <div className="mb-16 relative rounded-xl overflow-hidden shadow-elegant">
          <img 
            src={socialCampaignsImage} 
            alt="Social Media Campaigns Showcase"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Festival Campaign Portfolio</h3>
            <p className="text-lg opacity-90">Celebrating diversity through thoughtful design</p>
          </div>
        </div>
        
        {/* Campaigns Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {campaigns.map((campaign, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {campaign.title}
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {campaign.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {campaign.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {campaign.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <GradientButton variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                View Campaign Details
              </GradientButton>
            </Card>
          ))}
        </div>
        
        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center animate-scale-in">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">150%</div>
            <div className="text-sm text-muted-foreground">Average Engagement Increase</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Successful Campaigns</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">95%</div>
            <div className="text-sm text-muted-foreground">Cultural Sensitivity Score</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <ExternalLink className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">12M+</div>
            <div className="text-sm text-muted-foreground">Total Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};