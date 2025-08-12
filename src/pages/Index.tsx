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
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="integrations">
          <IntegrationsSection />
        </section>
        
        <section id="design">
          <PostDesignSection />
        </section>
        
        <section id="projects">
          <FrontendProjectsSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>
        
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6 text-center">
        <p className="text-sm">
          © 2025 MayaMakers Portfolio. Crafted with passion and precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
