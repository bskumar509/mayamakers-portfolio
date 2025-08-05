import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'Cultural Bridges Inc',
    content: 'Their understanding of cultural nuances in social media marketing is exceptional. Our Lunar New Year campaign achieved a 300% increase in engagement while maintaining complete cultural authenticity.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Ahmed Hassan',
    role: 'Brand Manager',
    company: 'Unity Digital',
    content: 'The AI-integrated frontend solutions they developed transformed our user experience. The multimodal capabilities and seamless React implementation exceeded all expectations.',
    rating: 5,
    avatar: 'AH'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Creative Director',
    company: 'Festival Media Group',
    content: 'Outstanding post designs that perfectly capture the essence of cultural celebrations. Their work on our Día de los Muertos campaign was both visually stunning and culturally respectful.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'David Park',
    role: 'Tech Lead',
    company: 'Innovation Labs',
    content: 'Their technical expertise in React and AI integration is top-notch. They delivered a scalable, performant application with clean code and excellent documentation.',
    rating: 5,
    avatar: 'DP'
  },
  {
    name: 'Priya Sharma',
    role: 'Social Media Manager',
    company: 'Global Connect',
    content: 'Working with them on our Diwali campaign was incredible. They understood the cultural significance and created content that resonated deeply with our diverse audience.',
    rating: 5,
    avatar: 'PS'
  },
  {
    name: 'Alex Thompson',
    role: 'Startup Founder',
    company: 'NextGen Apps',
    content: 'They single-handedly built our entire frontend with AI capabilities. The attention to detail, performance optimization, and user experience is phenomenal.',
    rating: 5,
    avatar: 'AT'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Client Testimonials"
          subtitle="Trusted by brands and startups worldwide for delivering exceptional results with cultural sensitivity and technical excellence"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary mb-4 opacity-60" />
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};