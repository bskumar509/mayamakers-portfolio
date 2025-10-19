import { AnimatedRole } from '@/components/ui/animated-role';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowRight, Mail, Play, Zap, TrendingUp, Award } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8 animate-fade-in mb-12">
          {/* Main heading with gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight tracking-tight">
              Transform Your Brand with
            </h1>
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              <AnimatedRole />
            </div>
          </div>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Data-driven strategies that deliver measurable results and sustainable growth
          </p>
        </div>

        {/* Card-based stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {/* Card 1 */}
          <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Successful Campaigns</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">300%</div>
                <div className="text-sm text-muted-foreground">Average ROI Growth</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section with cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <GradientButton 
            onClick={scrollToContact}
            className="px-8 py-4 text-base font-semibold group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Start Your Campaign
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </GradientButton>
          
          <button 
            onClick={scrollToPortfolio}
            className="flex items-center gap-2 px-8 py-4 text-foreground bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            View Case Studies
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-4">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-xs font-semibold text-muted-foreground tracking-wider">SOCIAL MEDIA</div>
            <div className="text-xs font-semibold text-muted-foreground tracking-wider">CONTENT STRATEGY</div>
            <div className="text-xs font-semibold text-muted-foreground tracking-wider">CAMPAIGN MANAGEMENT</div>
          </div>
        </div>
      </div>
    </section>
  );
};
