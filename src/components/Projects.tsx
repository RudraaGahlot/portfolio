
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projectData: Project[] = [
  {
    id: 'elev-ai',
    title: 'Elev-AI (AI-Driven Career Platform)',
    description: 'A full-stack web platform with integrated AI-driven tools for building resume, cover letter, interview Prep and industry insights.',
    tags: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'PostgresSQL', 'Prisma'],
    image: '/elevAI.png',
    github: 'https://github.com/RudraaGahlot/elev-ai',
    demo: 'https://elev-ai-seven.vercel.app/'
  },
  {
    id: 'prepnest',
    title: 'PrepNest (AI-Mocker-Interview)',
    description: 'An AI-powered interview preparation platform that helps users prepare for various roles with mock interviews.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Prisma', 'Stripe', 'Clerk', 'Gen AI'],
    image: '/prepNest.png',
    github: '',
    demo: 'https://ai-interview-mocker-three-omega.vercel.app/'
  },
  {
    id: 'fintrack',
    title: 'Fintrack (AI-Finances Manager)',
    description: 'An AI-powered financial management platform to track, analyze, and optimize user spending with receipt scanning and financial advice.',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn-UI', 'Supabase', 'Prisma'],
    image: 'fintrack.png',
    github: 'https://github.com/RudraaGahlot/fintrack',
    demo: 'https://fintrack-bjyg.vercel.app/'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website showcasing my projects and skills.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    image: '/portfolio.png',
    
    demo: 'https://portfolio-pi-two-35.vercel.app/'
  },
  // {
  //   id: 'chatapp',
  //   title: 'Real-time Chat Application',
  //   description: 'A real-time chat application with features like group chats, direct messaging, and file sharing.',
  //   tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
  //   image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //   github: 'https://github.com/yourusername/chatapp',
  //   demo: 'https://chatapp-demo.vercel.app'
  // },
  // {
  //   id: 'ecommerce',
  //   title: 'E-commerce Platform',
  //   description: 'A fully-featured e-commerce platform with product listings, cart functionality, and payment processing.',
  //   tags: ['Next.js', 'Redux', 'Stripe', 'MongoDB'],
  //   image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  //   github: 'https://github.com/yourusername/ecommerce',
  //   demo: 'https://ecommerce-demo.vercel.app'
  // }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="block group h-full"
    >
      <a href={project.demo} target="_blank" rel="noopener noreferrer">
      <Card className="overflow-hidden border-0 bg-transparent transition-all duration-300 h-full project-card">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
            <div className="flex gap-3">
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
            <h3 className="font-medium text-lg tracking-tight mt-2">{project.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="font-normal text-xs">
                +{project.tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
      </a>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const displayedProjects = expanded ? projectData : projectData.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 scroll-animate opacity-0">
            Featured Works
          </h2>
          <p className="text-muted-foreground text-lg scroll-animate opacity-0">
            A collection of projects that showcase my skills and experience in building full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center text-primary hover:underline group"
          >
            {expanded ? 'Show Less' : 'View All Projects'}
            <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${expanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
