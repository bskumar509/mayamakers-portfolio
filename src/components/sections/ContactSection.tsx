import { useState } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { GradientButton } from '@/components/ui/gradient-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectType: '',
      message: ''
    });
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
          title="Let's Create Something Amazing"
          subtitle="Ready to elevate your brand with culturally conscious marketing and cutting-edge development?"
          className="text-white [&>h2]:text-white [&>p]:text-gray-200"
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-glow">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    First Name
                  </label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Last Name
                  </label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
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
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Project Type
                </label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                >
                  <option value="">Select a service</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="design">Post Design</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="ai-integration">AI Integration</option>
                  <option value="full-package">Complete Package</option>
                </select>
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
              
              <GradientButton type="submit" size="lg" className="w-full group">
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Send Message
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
                    <p className="text-gray-200">hello@yourportfolio.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-200">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 group hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-white mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-200">Available Worldwide</p>
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
                  <span className="text-white font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Start</span>
                  <span className="text-white font-medium">Within 1 week</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Zone</span>
                  <span className="text-white font-medium">UTC-5 to UTC+8</span>
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
                Join 500+ satisfied clients who trust me with their digital presence
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-xs text-gray-300">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
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