function About() {
  const skills = [
    { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'], icon: '💻' },
    { category: 'Backend', techs: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'MongoDB', 'PostgreSQL'], icon: '⚙️' },
    { category: 'DevOps', techs: ['Docker', 'CI/CD', 'AWS', 'Git & GitHub', 'Deployment', 'Linux'], icon: '☁️' },
  ]

  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 max-w-6xl">
      <div className="animate-fade-in">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* About Me Section */}
          <section className="card" aria-labelledby="about-heading">
            <h1 id="about-heading" className="text-3xl font-bold text-white mb-8">
              <span className="text-accent text-4xl animate-pulse mr-6">👋</span>About Me
            </h1>
            <p className="text-base text-primary/90 mb-6 leading-relaxed text-left">
              I'm <span className="text-accent font-semibold">Heba Ashraf</span>, a Full Stack Developer specialized in complete web application development. 
              I continuously work on improving my skills and learning from the latest technologies in the programming field.
            </p>
            
            <div className="bg-gradient-to-r from-secondary/20 to-secondary/5 rounded-xl p-6 mb-6 border-l-4 border-secondary">
              <h3 className="text-white font-semibold text-lg mb-3 text-left flex items-center gap-2">
                <span>🎯</span> My Passion for Development
              </h3>
              <p className="text-primary/80 leading-relaxed text-left">
                I love building modern and reliable web applications from scratch. I enjoy working on complete projects 
                from start to deployment, with a focus on performance, user experience, and clean code.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl p-6 border-l-4 border-accent">
              <h3 className="text-white font-semibold text-lg mb-3 text-left flex items-center gap-2">
                <span>🚀</span> Continuous Growth
              </h3>
              <p className="text-primary/80 leading-relaxed text-left">
                I'm always learning new technologies and improving my skills. Check out my GitHub for various projects 
                spanning different tech stacks and solutions.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="card">
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-accent text-3xl mr-6">🛠️</span>Technologies I Work With
            </h2>
            
            <div className="space-y-6">
              {skills.map((skillSet, index) => (
                <div key={index} className="glass-card p-5">
                  <h3 className="text-secondary font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">{skillSet.icon}</span>
                    {skillSet.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillSet.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5 text-white font-medium text-sm backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GitHub Section */}
          <section className="card">
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="text-accent text-3xl mr-6">💻</span>My GitHub Projects
            </h2>
            
            <p className="text-primary/80 mb-6 leading-relaxed text-left">
              I have numerous open-source projects on GitHub including various Full Stack applications. 
              You can explore my code and see how I build applications.
            </p>
            
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Explore GitHub Profile
            </a>
          </section>

          {/* Contact Section */}
          <section className="card" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-2xl font-bold text-white mb-6">
              <span className="text-accent text-3xl mr-6">📞</span>Contact Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-200">
                <div className="text-5xl mb-4" role="img" aria-label="Email">📧</div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:hebaashraf81@gmail.com"
                  className="text-muted hover:text-accent transition-colors text-sm"
                >
                  hebaashraf81@gmail.com
                </a>
              </div>

              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-200">
                <div className="text-5xl mb-4" role="img" aria-label="Phone">📱</div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a 
                  href="tel:01062043130"
                  className="text-muted hover:text-accent transition-colors text-sm"
                >
                  01062043130
                </a>
              </div>

              <div className="glass-card text-center p-6 hover:scale-105 transition-transform duration-200">
                <div className="text-5xl mb-4" role="img" aria-label="Location">📍</div>
                <h3 className="text-white font-semibold mb-2">Location</h3>
                <p className="text-muted text-sm">Cairo, Egypt</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://github.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hebaashraf81@gmail.com" className="btn-primary">
                Send Message
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
