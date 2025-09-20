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
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Expert
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <AnimatedRole />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Driving growth through strategic digital marketing, data-driven campaigns, and authentic brand storytelling
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <GradientButton 
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start Your Campaign
            </GradientButton>
            
            <button 
              onClick={() => window.open('#portfolio', '_self')}
              className="flex items-center gap-2 px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              View Portfolio
            </button>
          </div>
          
          <div className="animate-bounce mt-12">
            <ArrowDown className="h-6 w-6 text-white/70 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
