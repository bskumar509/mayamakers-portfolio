import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GradientButton } from '@/components/ui/gradient-button';

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Features', href: '#features' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Design', href: '#design' },
  { name: 'Projects', href: '#projects' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-elegant' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-bold text-xl">
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                MayaMakers
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                item.name === 'Contact' ? (
                  <GradientButton
                    key={item.name}
                    size="sm"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </GradientButton>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`font-medium transition-colors duration-300 hover:scale-105 transform ${
                      isScrolled 
                        ? 'text-foreground hover:text-primary' 
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className={`absolute top-16 left-0 right-0 bg-white shadow-elegant transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-6 py-8 space-y-4">
            {navigationItems.map((item) => (
              item.name === 'Contact' ? (
                <GradientButton
                  key={item.name}
                  size="lg"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full"
                >
                  {item.name}
                </GradientButton>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
