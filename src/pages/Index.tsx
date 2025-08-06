import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { PostDesignSection } from '@/components/sections/PostDesignSection';
import { FrontendProjectsSection } from '@/components/sections/FrontendProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
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
        
        <section id="design">
          <PostDesignSection />
        </section>
        
        <section id="projects">
          <FrontendProjectsSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6 text-center">
        <p className="text-sm">
          © 2024 Portfolio. Crafted with passion and precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
