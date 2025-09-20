import { AnimatedRole } from '@/components/ui/animated-role';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowDown, Download, Mail, Play, Star, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/hero-bg-new.jpg';
export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background with advanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-float hidden sm:block" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float hidden md:block" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/50 rounded-full animate-float hidden sm:block" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-primary-foreground/30 rounded-full animate-float hidden lg:block" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white/90 text-sm font-medium">Digital Marketing Expert</span>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Expert
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <AnimatedRole />
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Driving growth through strategic digital marketing, data-driven campaigns, and authentic brand storytelling that converts
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 py-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Campaigns Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">300%</div>
              <div className="text-xs sm:text-sm text-gray-300">Average ROI Growth</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">2+</div>
              <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <GradientButton 
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold shadow-glow"
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
              className="flex items-center gap-2 px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/50"
            >
              <Play className="h-5 w-5" />
              <span className="hidden sm:inline">View Case Studies</span>
              <span className="sm:hidden">Portfolio</span>
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce mt-16">
            <ArrowDown className="h-6 w-6 text-white/70 mx-auto" />
            <p className="text-white/60 text-sm mt-2">Discover My Work</p>
          </div>
        </div>
      </div>
    </section>
  );
};
