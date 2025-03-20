
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'contact'];
      const sectionElements = sections.map(id => 
        document.getElementById(id)
      );
      
      // Find the current active section
      const currentActive = sectionElements.findIndex(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      
      if (currentActive !== -1) {
        setActiveSection(sections[currentActive]);
      } else if (scrollPosition < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', path: '/#projects', id: 'projects' },
    { name: 'Skills', path: '/#skills', id: 'skills' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const handleResumeClick = () => {
    // Link to the resume file
    window.open('/resume.pdf', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out backdrop-blur-md',
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tighter hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rudra Gahlot
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 cursor-pointer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.id)}
                className={cn(
                  "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                  activeSection === link.id
                    ? "text-primary after:w-full"
                    : "hover:text-primary after:w-0 hover:after:w-full"
                )}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="text-sm font-medium transition-colors flex items-center gap-1.5 hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              Resume
            </button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 animate-slide-in">
          <nav className="flex flex-col space-y-4 container mx-auto px-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.path}
                className={cn(
                  "text-sm font-medium p-2 transition-all animate-slide-in animate-fill-both",
                  activeSection === link.id
                    ? "text-primary"
                    : "hover:text-primary"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="text-sm font-medium p-2 transition-all animate-slide-in animate-fill-both flex items-center gap-1.5 hover:text-primary"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              <FileText className="h-4 w-4" />
              Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
