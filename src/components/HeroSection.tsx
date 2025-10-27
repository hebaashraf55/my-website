function HeroSection() {
  return (
    <section className="w-full" aria-labelledby="hero-heading">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main Hero Card */}
        <div className="lg:col-span-2 card animate-fade-in">
          <div className="flex flex-col items-center text-center py-8">
            <div 
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] rounded-2xl flex items-center justify-center text-4xl sm:text-5xl md:text-6xl mb-6"
              style={{ backgroundColor: '#FFD166' }}
              role="img"
              aria-label="Very happy emoji"
            >
              😊
            </div>
            
            <p className="text-muted mb-2">Hello, Lisa!</p>
            <h1 className="text-primary font-bold text-[28px] mb-2" id="hero-heading">
              How are you feeling today?
            </h1>
            <p className="text-muted mb-6">Wednesday, April 16th, 2025</p>
            
            <div className="bg-secondary/10 rounded-2xl px-6 py-4 mb-4">
              <p className="text-sm text-muted mb-1">I'm feeling</p>
              <p className="text-xl font-bold text-primary">Very Happy</p>
            </div>
            
            <p className="text-muted italic text-sm" style={{ maxWidth: '400px' }}>
              "When your heart is full, share your light with the world."
            </p>
          </div>
        </div>

        {/* Side Cards */}
        <div className="flex flex-col gap-5">
          <div className="card animate-fade-in" style={{ animationDelay: '50ms' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary/10">
                <span className="text-2xl">😴</span>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Sleep</p>
                <p className="text-lg font-bold text-primary">6 hours</p>
              </div>
            </div>
          </div>

          <div className="card animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/20">
                <span className="text-2xl">💭</span>
              </div>
              <div>
                <p className="text-sm text-muted mb-1">Reflection</p>
                <p className="text-lg font-bold text-primary">Feeling great today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

