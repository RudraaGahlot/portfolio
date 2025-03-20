
import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rudra Gahlot. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:rudragahlot11@gmail.com" 
              className={cn(
                "text-sm text-muted-foreground transition-colors",
                "hover:text-primary"
              )}
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/rudragahlot" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-sm text-muted-foreground transition-colors",
                "hover:text-primary"
              )}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/RudraaGahlot" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "text-sm text-muted-foreground transition-colors",
                "hover:text-primary"
              )}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
