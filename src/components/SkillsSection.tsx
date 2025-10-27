import { useState } from 'react'

function SkillsSection() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }

  const skillCategories = [
    { 
      name: 'Frontend', 
      icon: '💻',
      skills: [
        { name: 'React', level: 90, color: '#61DAFB', icon: '⚛️' },
        { name: 'TypeScript', level: 85, color: '#3178C6', icon: '📘' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E', icon: '🟡' },
        { name: 'Next.js', level: 85, color: '#000000', icon: '▲' },
        { name: 'HTML5', level: 95, color: '#E34F26', icon: '🔖' },
        { name: 'CSS3', level: 90, color: '#1572B6', icon: '🎨' },
        { name: 'Tailwind CSS', level: 90, color: '#38BDF8', icon: '💨' },
      ]
    },
    { 
      name: 'Backend', 
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88, color: '#339933', icon: '🟢' },
        { name: 'Express', level: 82, color: '#000000', icon: '🚂' },
        { name: 'MongoDB', level: 80, color: '#47A248', icon: '🍃' },
        { name: 'PostgreSQL', level: 75, color: '#336791', icon: '🐘' },
        { name: 'REST API', level: 85, color: '#0066CC', icon: '🔗' },
        { name: 'GraphQL', level: 70, color: '#E10098', icon: '📊' },
      ]
    },
    { 
      name: 'DevOps', 
      icon: '☁️',
      skills: [
        { name: 'Docker', level: 70, color: '#2496ED', icon: '🐳' },
        { name: 'CI/CD', level: 75, color: '#2088FF', icon: '🔄' },
        { name: 'AWS', level: 65, color: '#FF9900', icon: '☁️' },
        { name: 'Git/GitHub', level: 95, color: '#F05032', icon: '🔧' },
        { name: 'Linux', level: 72, color: '#FCC624', icon: '🐧' },
      ]
    },
  ]

  return (
    <section className="w-full" aria-labelledby="skills-heading">
      <div className="card animate-fade-in">
        <h2 id="skills-heading" className="text-3xl font-bold text-white mb-8 text-left">
          Technical Skills
        </h2>
        
        <div className="space-y-4">
          {skillCategories.map((category, catIndex) => {
            const isExpanded = expandedSections.has(category.name)
            
            return (
              <div key={catIndex} className="overflow-hidden">
                <button
                  onClick={() => toggleSection(category.name)}
                  className="w-full glass-card p-4 flex items-center justify-between hover:scale-[1.02] transition-all duration-200 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                    <span className="text-muted text-sm">({category.skills.length} skills)</span>
                  </div>
                  <span className="text-secondary text-2xl transition-transform duration-300" style={{ 
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' 
                  }}>
                    ▼
                  </span>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isExpanded ? '1000px' : '0',
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{skill.icon}</span>
                            <span className="text-primary font-semibold">{skill.name}</span>
                          </div>
                          <span className="text-muted">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-surface rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                            style={{ 
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}80 100%)`,
                              boxShadow: `0 0 10px ${skill.color}40`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
