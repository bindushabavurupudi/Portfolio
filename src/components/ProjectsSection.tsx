import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';

const projects = [
  {
    title: 'Time-Track-AI',
    description: 'A web-based time tracking application that allows users to log daily activities and analyze time usage through interactive dashboards',
    tech: ['HTML', 'CSS', 'React', 'Firebase'],
    live: 'https://bindushabavurupudi.github.io/Time-Track-AI/dashboard',
    github: 'https://github.com/bindushabavurupudi/Time-Track-AI',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop boards, and team collaboration features for productive workflows.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    live: '#',
    github: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for tracking social media performance with interactive charts, data visualizations, and automated reporting.',
    tech: ['React', 'Express', 'Redis', 'Chart.js'],
    live: '#',
    github: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A messaging platform with end-to-end encryption, group chats, file sharing capabilities, and real-time presence indicators.',
    tech: ['React', 'Node.js', 'Socket.io', 'Firebase'],
    live: '#',
    github: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading">
              My <span className="text-gradient-neon">Projects</span>
            </h2>
            <p className="section-subheading">Recent work & creations</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <TiltCard>
                <div className="glass-card neon-border p-8 h-full flex flex-col">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-button flex-1 flex items-center justify-center gap-2 !text-sm !px-4 !py-2.5"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm font-heading uppercase tracking-wider
                        px-4 py-2.5 rounded-lg border border-border text-muted-foreground
                        hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--neon)/0.2)]
                        transition-all duration-300"
                    >
                      <Github size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
