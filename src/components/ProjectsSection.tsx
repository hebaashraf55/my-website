function ProjectsSection() {
  const projects = [
    {
      title: 'Saraah - Polling Application',
      subtitle: 'Full Stack • React • Node.js • MongoDB',
      description: 'A complete web application for creating and conducting opinion polls with detailed statistics and a comprehensive dashboard. The system supports anonymous voting and real-time statistics.',
      thumbnail: 'my-website1.webp',
      alt: 'Saraah - Polling Application',
      link: 'https://github.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    },
    {
      title: 'Social Media App - Social Platform',
      subtitle: 'Full Stack • Next.js • PostgreSQL • Redis',
      description: 'A complete social platform with modern features: post publishing, comments, likes, user profiles, and followers. A fully responsive application that works on all devices.',
      thumbnail: 'my-website2.webp',
      alt: 'Social Media App',
      link: 'https://github.com',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'TypeScript', 'Tailwind'],
    },
  ]

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-3xl font-bold text-white mb-8">
        <span className="text-secondary text-4xl mr-6">🚀</span>Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card animate-fade-in cursor-pointer transition-all duration-300 hover:scale-[1.02] group overflow-hidden hover:shadow-glow"
            style={{ animationDelay: `${index * 50}ms` }}
            role="article"
            aria-label={`Project: ${project.title}`}
          >
            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 via-accent/20 to-secondary/20 relative">
              {project.thumbnail && (
                <img 
                  src={`/${project.thumbnail}`} 
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-primary text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white text-left">{project.title}</h3>
              <p className="text-accent font-semibold text-left">{project.subtitle}</p>
              <p className="text-primary/80 leading-relaxed text-left">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-ghost inline-flex items-center gap-2"
        >
          <span>More Projects</span>
          <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  )
}

export default ProjectsSection
