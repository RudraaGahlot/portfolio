
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'nirmanai',
    title: 'NirmanAI (SaaS AI Platform)',
    description: 'A full-stack SaaS platform with integrated AI-driven tools for image, video, music, and code generation.',
    fullDescription: 'NirmanAI is a comprehensive SaaS AI platform that integrates various AI-driven tools for content creation. The platform features a subscription-based model with Stripe integration, allowing users to access premium AI features through a user-friendly interface.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Prisma', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1655635643566-3363d66977fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    features: [
      'Built a full-stack SaaS platform with integrated AI-driven tools for image, video, music, and code generation',
      'Implemented authentication with Clerk, allowing user sign-in using email and Google accounts',
      'Integrated Stripe for payment gateway, offering free trials and upgrade plans'
    ],
    technologies: [
      'Next.js, React, TypeScript, Tailwind CSS',
      'MySQL, Prisma, Stripe',
      'Clerk Authentication',
      'OpenAI API, Replicate API'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 'prepnest',
    title: 'PrepNest (AI-Mocker-Interview)',
    description: 'An AI-powered interview preparation platform that helps users prepare for various roles with mock interviews.',
    fullDescription: 'PrepNest is an AI-powered interview preparation platform designed to help users prepare for various professional roles through realistic mock interviews. The platform provides personalized feedback and improvement suggestions based on user performance.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Prisma', 'Stripe', 'Clerk', 'Gen AI'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    features: [
      'Engineered a mock interview system using React to help users prepare for various roles',
      'Implemented feedback mechanisms for improvement based on mock interviews',
      'Integrated Clerk for secure authentication and Stripe for payment processing'
    ],
    technologies: [
      'React, JavaScript, Tailwind CSS',
      'MySQL, Prisma, Stripe',
      'Clerk Authentication',
      'OpenAI API'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 'fintrack',
    title: 'Fintrack (AI-Finances Manager)',
    description: 'An AI-powered financial management platform to track, analyze, and optimize user spending with receipt scanning and financial advice.',
    fullDescription: 'Fintrack is an AI-powered financial management platform that helps users track, analyze, and optimize their spending habits. The application features receipt scanning capabilities and provides actionable financial advice through interactive charts and graphs.',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn-UI', 'Supabase', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    features: [
      'Built an AI-powered financial management platform to track, analyze, and optimize user spending',
      'Integrated AI-powered receipt scanning and provided actionable financial advice through interactive charts and graphs',
      'Implemented Clerk authentication to ensure secure logins'
    ],
    technologies: [
      'Next.js, Tailwind CSS, Shadcn-UI',
      'Supabase, Prisma',
      'Clerk Authentication',
      'Chart.js for data visualization'
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      const foundProject = projectsData.find((p) => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-8 w-40 bg-secondary rounded mb-4"></div>
            <div className="h-24 w-96 bg-secondary/50 rounded"></div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-6">Sorry, the project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in">{project.title}</h1>
                <p className="text-xl text-muted-foreground mt-4 animate-fade-in animate-delay-1">{project.description}</p>
              </div>
              
              <div className="space-y-6 animate-fade-in animate-delay-2">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
                  <p className="text-muted-foreground">{project.fullDescription}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-muted-foreground">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
                  <ul className="space-y-2 list-disc pl-5">
                    {project.technologies.map((tech, index) => (
                      <li key={index} className="text-muted-foreground">{tech}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.githubUrl && (
                    <Button asChild variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-lg animate-fade-in">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Card>
              
              <div className="grid grid-cols-2 gap-4 animate-fade-in animate-delay-2">
                <Card className="overflow-hidden border shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Type</h3>
                    <p className="text-sm text-muted-foreground">Full-Stack Web Application</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Timeline</h3>
                    <p className="text-sm text-muted-foreground">3 months</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border shadow-sm col-span-2">
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">Role</h3>
                    <p className="text-sm text-muted-foreground">Full-Stack Developer, UI/UX Designer, Project Lead</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
