
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Skills: React.FC = () => {
  const skillCategories = [
    { 
      id: 'languages',
      name: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C/C++', 'HTML', 'CSS', 'Golang', 'SQL']
    },
    { 
      id: 'frameworks',
      name: 'Frameworks',
      skills: ['React.js', 'Node.js', 'Next.js', 'Django', 'Express.js']
    },
    { 
      id: 'tools',
      name: 'Developer Tools',
      skills: ['Git', 'Docker', 'GCP', 'AWS', 'Azure', 'VS Code', 'Insomnia', 'Intellij IDEA']
    },
    { 
      id: 'libraries',
      name: 'Libraries',
      skills: ['Nextauth.js', 'React-bootstrap', 'Redux']
    }
  ];

  const extraActivities = [
    {
      title: 'Tech-O-Fun - Technical Fest of my College',
      description: 'Organized the Tech-O-Fun technical fest at my college, managing events like Blind Coding and LAN gaming. I was responsible for setting up 40+ desktops connected via a server to ensure a smooth and lag-free gaming experience for over 150 students.'
    },
    {
      title: 'Electronic Arts - Software Engineering Virtual Experience Program on Forage',
      description: 'Completed the Electronic Arts Software Engineering Virtual Experience Program on Forage, where I proposed new features for EA Sports College/Products, created flow diagrams, and implemented code solutions for PC objects. Additionally, I optimized the codebase by introducing improved data structures and fixing bugs.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 scroll-animate opacity-0">
            Skills & Activities
          </h2>
          <p className="text-muted-foreground text-lg scroll-animate opacity-0">
            A comprehensive overview of my technical skills and extracurricular activities.
          </p>
        </div>

        <Tabs defaultValue="languages" className="max-w-4xl mx-auto scroll-animate opacity-0">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <Card key={skill} className="border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="font-medium text-center">{skill}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 scroll-animate opacity-0">
            Extracurricular Activities & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {extraActivities.map((activity, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm scroll-animate opacity-0">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{activity.title}</h4>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
