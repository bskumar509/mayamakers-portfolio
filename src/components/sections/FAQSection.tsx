import { SectionHeader } from '@/components/ui/section-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Can you adapt this for my SaaS?',
    a: 'Absolutely. The sections are modular and can be tailored to your product copy and metrics.'
  },
  {
    q: 'Do you support integrations?',
    a: 'Yes. Popular tools like Supabase, Stripe, and OpenAI are supported out of the box.'
  },
  {
    q: 'Is the design system customizable?',
    a: 'Yes. Tokens and components are themeable and built with accessibility in mind.'
  },
  {
    q: 'What about performance?',
    a: 'We optimize for Core Web Vitals and use progressive enhancement for 3D elements.'
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers to common questions." />
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
