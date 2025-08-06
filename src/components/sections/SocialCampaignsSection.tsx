import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';
import { ExternalLink, TrendingUp, Users, Heart } from 'lucide-react';
import socialCampaignsImage from '@/assets/social-campaigns.jpg';

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