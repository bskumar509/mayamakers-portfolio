import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { IntegrationsSection } from '@/components/sections/IntegrationsSection';
import { PostDesignSection } from '@/components/sections/PostDesignSection';
import { FrontendProjectsSection } from '@/components/sections/FrontendProjectsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about" className="bg-gradient-subtle">
          <AboutSection />
        </section>
        
        <section id="skills" className="bg-gradient-subtle">
          <SkillsSection />
        </section>

        <section id="features" className="bg-gradient-subtle">
          <FeaturesSection />
        </section>

        <section id="integrations" className="bg-gradient-subtle">
          <IntegrationsSection />
        </section>
        
        <section id="design" className="bg-gradient-subtle">
          <PostDesignSection />
        </section>
        
        <section id="projects" className="bg-gradient-subtle">
          <FrontendProjectsSection />
        </section>

        <section id="pricing" className="bg-gradient-subtle">
          <PricingSection />
        </section>
        
        
        <section id="testimonials" className="bg-gradient-subtle">
          <TestimonialsSection />
        </section>
        
        <section id="faq" className="bg-gradient-subtle">
          <FAQSection />
        </section>
        
        <section id="contact" className="bg-gradient-subtle">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-accent text-primary-foreground py-8 px-6 text-center">
        <p className="text-sm">
          © 2025 MayaMakers Portfolio. Crafted with passion and precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
