function ContactSection() {
  const contacts = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hebaashraf81@gmail.com',
      link: 'mailto:hebaashraf81@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '01062043130',
      link: 'tel:01062043130',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Cairo, Egypt',
      link: null,
    },
  ]

  return (
    <section id="contact" className="w-full" aria-labelledby="contact-heading">
      <div className="card animate-fade-in">
        <h2 id="contact-heading" className="text-3xl font-bold text-white mb-8">
          <span className="text-secondary text-4xl mr-6">📧</span>Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className="text-4xl mb-4" role="img" aria-label={contact.label}>
                {contact.icon}
              </div>
              <h3 className="text-white font-semibold mb-2 text-left">{contact.label}</h3>
              {contact.link ? (
                <a 
                  href={contact.link}
                  className="text-muted hover:text-accent transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-muted">{contact.value}</p>
              )}
            </div>
          ))}
        </div>

            <div className="flex flex-wrap gap-4">
          <a href="mailto:hebaashraf81@gmail.com" className="btn-primary">
            Send Message
          </a>
          <a href="https://github.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
