import { AnimatedRole } from '@/components/ui/animated-role';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowDown, Mail, Play } from 'lucide-react';
export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        <div className="animate-fade-in space-y-6">
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Expert
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              <AnimatedRole />
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driving growth through strategic digital marketing, data-driven campaigns, and authentic brand storytelling that converts
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8 pb-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Campaigns Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">300%</div>
              <div className="text-sm text-muted-foreground mt-1">Average ROI Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">2+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <GradientButton 
              onClick={scrollToContact}
              className="px-8 py-3 text-base font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start Your Campaign
            </GradientButton>
            
            <button 
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 px-8 py-3 text-foreground border border-border rounded-lg hover:bg-accent transition-all duration-300"
            >
              <Play className="h-5 w-5" />
              View Case Studies
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce pt-12">
            <ArrowDown className="h-5 w-5 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
