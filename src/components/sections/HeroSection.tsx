import { AnimatedRole } from '@/components/ui/animated-role';
import { GradientButton } from '@/components/ui/gradient-button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg-new.jpg';
import { HeroCanvas } from '@/components/3d/HeroCanvas';
export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Creative
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-white">
              <AnimatedRole />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up">
            Social media marketing, stunning post designs, and AI-powered frontend development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <GradientButton size="lg" onClick={scrollToContact} className="group">
              <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Get In Touch
            </GradientButton>
            <GradientButton variant="outline" size="lg" className="group text-white border-white hover:bg-white hover:text-black">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download CV
            </GradientButton>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};
