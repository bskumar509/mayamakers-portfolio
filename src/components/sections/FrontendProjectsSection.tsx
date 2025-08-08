import { SectionHeader } from '@/components/ui/section-header';
import { Card } from '@/components/ui/card';
import { GradientButton } from '@/components/ui/gradient-button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cpu, Zap, Globe } from 'lucide-react';
import frontendProjectsImage from '@/assets/frontend-projects.jpg';

const HERO_REPO_URL = 'https://github.com/bskumar509'; // TODO: replace with your repo URL
const HERO_LIVE_URL = 'https://lovable.dev/projects/97b1f49c-e129-4572-bdb7-62782ae8792d'; // TODO: replace with your live demo URL

const projects = [
  {
    title: 'AI Content Generator',
    description: 'Multimodal AI platform that generates social media content with GPT-4 and DALL-E integration.',
    tech: ['React', 'TypeScript', 'OpenAI API', 'TailwindCSS', 'Supabase'],
    features: ['Voice to Text', 'Image Generation', 'Content Optimization', 'Multi-language Support'],
    status: 'Live Production',
    type: 'AI Integration',
    repoUrl: 'https://github.com/your-username/ai-content-generator',
    liveUrl: 'https://your-demo.com/ai-content-generator'
  },
  {
    title: 'Cultural Events Platform',
    description: 'Responsive web app for discovering and managing cultural events with real-time updates.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    features: ['Event Discovery', 'Cultural Filters', 'Real-time Chat', 'Mobile-first Design'],
    status: 'In Development',
    type: 'Full Stack',
    repoUrl: 'https://github.com/your-username/cultural-events-platform',
    liveUrl: 'https://your-demo.com/cultural-events'
  },
  {
    title: 'Design System Library',
    description: 'Comprehensive React component library with accessibility and cultural design patterns.',
    tech: ['React', 'Storybook', 'TailwindCSS', 'TypeScript', 'Rollup'],
    features: ['Accessibility First', 'Cultural Themes', 'Dark Mode', 'Animation System'],
    status: 'Open Source',
    type: 'Design System',
    repoUrl: 'https://github.com/your-username/design-system-library',
    liveUrl: 'https://your-demo.com/design-system'
  }
];

const technologies = [
  { name: 'React.js', level: 85 },
  { name: 'TypeScript', level: 90 },
  { name: 'TailwindCSS', level: 95 },
  { name: 'AI Integration', level: 95 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 80 }
];

export const FrontendProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="AI-Integrated Frontend Projects"
          subtitle="Building scalable AI applications with cutting-edge AI capabilities and modern development practices"
        />
        
        {/* Featured Project Display */}
        <div className="mb-16 relative rounded-xl overflow-hidden shadow-elegant group">
          <img 
            src={frontendProjectsImage} 
            alt="Frontend Development Setup"
            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="text-white p-8 max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Modern Development Stack</h3>
              <p className="text-lg opacity-90 mb-6">
                Leveraging React, TypeScript, and AI APIs to create intelligent, 
                responsive applications that scale effortlessly.
              </p>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {project.type}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-card-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-card-foreground">Key Features</h4>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Zap className="h-3 w-3 text-primary mr-2" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Status & Actions */}
              <div className="flex justify-between items-center">
                <Badge 
                  variant={project.status === 'Live Production' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {project.status}
                </Badge>
                <div className="flex gap-2">
                  {project.repoUrl && (
                    <GradientButton asChild variant="ghost" size="sm">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} repository`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </GradientButton>
                  )}
                  {project.liveUrl && (
                    <GradientButton asChild variant="ghost" size="sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </GradientButton>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Technology Proficiency */}
        <div className="bg-gradient-card rounded-xl p-8 shadow-elegant animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Technology Proficiency</h3>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-card-foreground">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div 
                        className="bg-gradient-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-accent rounded-lg">
                <Cpu className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold text-accent-foreground">AI Integration Specialist</h4>
                  <p className="text-sm text-muted-foreground">OpenAI, Claude, Multimodal APIs</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-accent rounded-lg">
                <Globe className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold text-accent-foreground">Scalable Architecture</h4>
                  <p className="text-sm text-muted-foreground">Microservices, CDN, Performance</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-accent rounded-lg">
                <Zap className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h4 className="font-semibold text-accent-foreground">Performance Optimization</h4>
                  <p className="text-sm text-muted-foreground">Code Splitting, Lazy Loading, Caching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
