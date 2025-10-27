import DeveloperHero from '../components/DeveloperHero'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-12 max-w-6xl space-y-12">
      {/* Hero Section */}
      <div className="animate-fade-in">
        <DeveloperHero />
      </div>

      {/* Skills Section */}
      <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <SkillsSection />
      </div>

      {/* Projects Section */}
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <ProjectsSection />
      </div>

      {/* Contact Section */}
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <ContactSection />
      </div>
    </div>
  )
}

export default Home
