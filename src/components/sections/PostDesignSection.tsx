import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';
import { Eye, Download, Layers } from 'lucide-react';
import postDesignsImage from '@/assets/post-designs.jpg';

const GALLERY_URL = 'https://github.com/bskumar509/Designs'; // TODO: replace with your real gallery URL

const designCategories = [
  {
    title: 'Festival Celebrations ',
    count: '25+ Designs',
    description: 'Culturally authentic designs for Diwali, Eid, Chinese New Year, and more',
    features: ['Traditional Elements', 'Modern Typography', 'Color Psychology']
  },
  {
    title: 'Brand Campaigns & Handles',
    count: '15+ Projects',
    description: 'Sophisticated brand storytelling through visual design excellence',
    features: ['Brand Consistency', 'Visual Hierarchy', 'Conversion Focus']
  },
  {
    title: 'Educational Content',
    count: '10+ Series',
    description: 'Engaging infographics and educational posts that simplify complex topics',
    features: ['Data Visualization', 'Clear Messaging', 'Accessibility']
  }
];

const designPrinciples = [
  'Cultural Authenticity & Respect',
  'Typography & Visual Hierarchy',
  'Color Theory & Psychology',
  'Accessibility & Inclusion',
  'Brand Consistency',
  'Engagement Optimization'
];

export const PostDesignSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Post Design Showcase"
          subtitle="Where aesthetic beauty meets strategic communication to create visually compelling content"
        />
        
        {/* Hero Design Display */}
        <div className="mb-16 relative rounded-xl overflow-hidden shadow-elegant group">
          <img 
            src={postDesignsImage} 
            alt="Post Design Showcase"
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent" />
          <div className="absolute top-8 left-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Design Portfolio</h3>
            <p className="text-lg opacity-90">Crafting visual stories that resonate</p>
          </div>
          <div className="absolute bottom-8 right-8">
            <GradientButton asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <a href={GALLERY_URL} target="_blank" rel="noopener noreferrer" aria-label="View full design gallery">
                <Eye className="mr-2 h-4 w-4" />
                View Git Gallery
              </a>
            </GradientButton>
          </div>
        </div>
        
        {/* Design Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {designCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-card-foreground">
                  {category.title}
                </h3>
                <span className="text-sm text-primary font-medium bg-accent px-3 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <Layers className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Design Principles */}
        <div className="bg-gradient-card rounded-xl p-8 shadow-elegant animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">
            Design Principles I Follow
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {designPrinciples.map((principle, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-primary-foreground" />
                <span className="font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
