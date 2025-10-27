function DeveloperHero() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      <div className="card animate-fade-in hover:shadow-glow transition-shadow duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12">
          <div className="flex-shrink-0 relative">
            <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-gradient-to-br from-secondary to-accent p-1 flex items-center justify-center relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/40 to-accent/40 blur-xl animate-pulse group-hover:blur-2xl transition-all duration-300" />
              <div className="w-full h-full rounded-full bg-gradient-to-br from-dark-bg to-dark-surface flex items-center justify-center overflow-hidden z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Heba Ashraf - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-left space-y-4">
            <p className="text-accent text-lg font-medium flex items-center gap-3">
              <span className="animate-pulse">✨</span>
              Continuously Learning & Growing
            </p>
            <h1 className="text-white font-bold text-4xl md:text-5xl" id="hero-heading">
              Heba Ashraf
            </h1>
            <p className="text-secondary text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Full Stack Developer
            </p>
            <p className="text-primary/90 max-w-2xl leading-relaxed">
              I'm a passionate <span className="text-accent font-semibold">Full Stack Developer</span> specializing in complete web application development. 
              I continuously work on improving my skills and learning from the latest technologies. I have numerous projects on 
              <span className="text-secondary font-semibold"> GitHub</span> and can work with a wide range of technologies.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://github.com" className="btn-primary inline-block" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
              <a href="#projects" className="btn-ghost inline-block">
                Explore Projects
              </a>
              <a href="#contact" className="btn-ghost inline-block">
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">React</span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">MongoDB</span>
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">+ More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeveloperHero
