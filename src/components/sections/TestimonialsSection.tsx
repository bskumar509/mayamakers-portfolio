import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { ScrollingCarousel } from '@/components/ui/scrolling-carousel';

const testimonials = [
  {
    name: 'Kayan redddy',
    role: 'Managing Director',
    company: 'Sri Venkata Sai Durga Enterprises',
    content: 'Their understanding of cultural nuances in social media marketing is exceptional and making the audiance atract through the posts and videos were excellent and good. ',
    avatar: 'SC'
  },
  {
    name: 'Dr. M.Lakshmi Lavanya',
    role: 'Hospital Owner',
    company: 'Aswini Psychotherapy',
    content: 'The posts and videos you’ve created for us feels so thoughtful and calming—they really reflect the heart of what we do.It’s not just design; it’s meaningful. We’re genuinely happy with how everything is coming together.',
    rating: 5,
    avatar: 'AH'
  },
  {
    name: 'Siva Karthik',
    role: 'Managing Director',
    company: 'KSK Constructions',
    content: 'We’re really impressed with how our Instagram is shaping up. The posts and videos you’ve created for KSK Constructions are clean, professional, and well thought out',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Uday',
    role: 'Proprietor ',
    company: 'Varahi Boutique',
    content: 'The posts and videos are beautifully designed and perfectly reflect our brand. It’s clear that a lot of thought and creativity goes into each one, and we’re really happy with how everything is being maintained.',
    rating: 5,
    avatar: 'DP'
  },
  {
    name: 'Ashok ',
    role: 'Proprietor',
    company: 'RR BOOKS & Stationery',
    content: 'Working with them on our Business was incredible. They understood the significance and created content that resonated deeply with our diverse audience.',
    rating: 5,
    avatar: 'PS'
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Client Testimonials"
          subtitle="Trusted by Clints and startups for delivering exceptional results with cultural Marketing and technical excellence"
        />
        <div className="mt-4">
          <ScrollingCarousel direction="left" speed="slow" className="py-4">
            <div className="flex gap-8 items-center">
              {[...integrations].reverse().map((name) => (
                <div key={`reverse-${name}`} className="flex items-center gap-3 px-6 py-3 bg-background/40 backdrop-blur rounded-lg border whitespace-nowrap">
                  <TechLogo name={name} size="sm" />
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </ScrollingCarousel>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
            className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group motion-safe:animate-rotate-in-right motion-reduce:animate-none"
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
        <div className="mt-4">
          <ScrollingCarousel direction="left" speed="slow" className="py-4">
            <div className="flex gap-8 items-center">
              {[...integrations].reverse().map((name) => (
                <div key={`reverse-${name}`} className="flex items-center gap-3 px-6 py-3 bg-background/40 backdrop-blur rounded-lg border whitespace-nowrap">
                  <TechLogo name={name} size="sm" />
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </ScrollingCarousel>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center motion-safe:animate-rotate-in-right motion-reduce:animate-none">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.8</div>
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
