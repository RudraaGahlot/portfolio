
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize image lazy loading
    const lazyLoadImages = () => {
      const blurDivs = document.querySelectorAll<HTMLElement>('.blur-load');
      
      blurDivs.forEach((div) => {
        const img = div.querySelector('img');
        
        if (img) {
          // When the image is loaded, add the loaded class
          img.onload = () => {
            div.classList.add('loaded');
          };
          
          // If the image is already cached, add the loaded class immediately
          if (img.complete) {
            div.classList.add('loaded');
          }
        }
      });
    };
    
    lazyLoadImages();
    
    // Re-run the function when the route changes
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Index;
