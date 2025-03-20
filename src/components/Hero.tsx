
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Add staggered animation to the title
    const titleElement = titleRef.current;
    if (titleElement) {
      const words = titleElement.innerText.split(' ');
      titleElement.innerHTML = words
        .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block animate-text-reveal animate-fill-both">${word}</span></span>`)
        .join(' ');
      
      // Add staggered delay to each word
      const spans = titleElement.querySelectorAll('span > span');
      spans.forEach((span, i) => {
        (span as HTMLElement).style.animationDelay = `${i * 120}ms`;
      });
    }
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none animate-fade-in">
              Software Developer
            </div>
            
            <h1 
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              I'm Rudra Gahlot, a developer based in India
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto md:mx-0 animate-fade-in animate-delay-2">
              My interest lies around Gen AI & web development. Specialized in building full-stack applications. I'm passionate about solving real-world problems with code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 animate-fade-in animate-delay-3">
              <Button onClick={scrollToProjects} size="lg" className="group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
              </Button>
              
              <Button onClick={downloadResume} variant="outline" size="lg" className="group">
                <FileText className="mr-2 h-4 w-4" />
                Download CV
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
              </Button>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a 
                  href="mailto:rudragahlot11@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  rudragahlot11@gmail.com
                </a>
                <span>•</span>
                <a 
                  href="https://linkedin.com/in/rudragahlot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a 
                  href="https://github.com/RudraaGahlot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
