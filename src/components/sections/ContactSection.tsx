import { useState } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.projectType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Email, project type, and message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        email: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at mayamakers@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleCall = () => {
    toast({
      title: "Opening calendar...",
      description: "Redirecting to scheduling page"
    });
    // In a real app, this would open a calendar booking system
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Contact Me"
          subtitle="Ready to elevate your brand with culturally or AI  mrketing and cutting-edge development"
          className="text-white [&>h2]:text-white [&>p]:text-gray-200"
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-glow">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Project Type
                </label>
                <ToggleGroup
                  type="single"
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, projectType: value }))
                  }
                  variant="outline"
                  size="sm"
                  className="justify-start flex-wrap gap-2 animate-fade-in"
                  aria-label="Select project type"
                >
                  <ToggleGroupItem value="Social-media" className="hover-scale">
                    Social Media Marketing
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Design" className="hover-scale">
                    Post Design
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Frontend" className="hover-scale">
                    Frontend Development
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Ai-integration" className="hover-scale">
                    AI Integration
                  </ToggleGroupItem>
                  <ToggleGroupItem value="Full-package" className="hover-scale">
                    Complete Package
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Project Details
                </label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[120px]"
                  placeholder="Tell me about your project, timeline, and specific requirements..."
                  required
                />
              </div>
              
              <GradientButton type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </GradientButton>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-200">mayamakers@gmail.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-200">+91 7093100179 , +91 7093832950</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-200">Available In TG / AP </p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Availability */}
            <Card className="p-8 bg-white/10 backdrop-blur-lg border border-white/20">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-white mr-3" />
                <h4 className="font-semibold text-white text-lg">Availability</h4>
              </div>
              
              <div className="space-y-3 text-gray-200">
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="text-white font-medium">Within 12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Start</span>
                  <span className="text-white font-medium">Within 1 week</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Zone</span>
                  <span className="text-white font-medium">IST +5:30 </span>
                </div>
              </div>
              
              <GradientButton 
                variant="outline" 
                size="lg" 
                onClick={scheduleCall}
                className="w-full mt-6 text-white border-white hover:bg-white hover:text-black"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </GradientButton>
            </Card>
            
            {/* Social Proof */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 text-center">
              <h4 className="font-semibold text-white mb-4">Let's Connect</h4>
              <p className="text-gray-200 text-sm mb-4">
                Join 25+ satisfied clients who trust me with their digital presence
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-xs text-gray-300">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-xs text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5.0</div>
                  <div className="text-xs text-gray-300">Client Rating</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
