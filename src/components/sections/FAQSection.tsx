import { SectionHeader } from '@/components/ui/section-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What platforms do you specialize in?',
    a: 'I focus on Facebook, Instagram, LinkedIn, TikTok, YouTube, and Google Ads with expertise in cross-platform campaign optimization.'
  },
  {
    q: 'How do you measure campaign success?',
    a: 'I track key metrics including engagement rates, conversion rates, ROI, cost per acquisition, and brand awareness using advanced analytics tools.'
  },
  {
    q: 'Do you provide content creation services?',
    a: 'Yes, I offer comprehensive content creation including copywriting, visual design, video content, and brand storytelling across all platforms.'
  },
  {
    q: 'What is your typical campaign timeline?',
    a: 'Campaign setup takes 1-2 weeks, with ongoing optimization and monthly performance reviews. Results typically show within 30-60 days.'
  },
  {
    q: 'Do you work with specific industries?',
    a: 'I have experience across various industries with particular expertise in cultural marketing and helping brands connect authentically with diverse audiences.'
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about my digital marketing services." />
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="motion-safe:animate-rotate-in-right">
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
