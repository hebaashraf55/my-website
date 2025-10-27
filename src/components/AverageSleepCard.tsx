function AverageSleepCard() {
  return (
    <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '520px' }}>
      <h3 className="text-primary font-semibold mb-4 text-[18px]">Average Sleep</h3>
      <div className="flex items-end gap-3">
        <div 
          className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl"
          style={{ backgroundColor: '#5676FF20' }}
          role="img"
          aria-label="Sleep icon"
        >
          😴
        </div>
        <div>
          <p className="text-2xl font-bold text-primary mb-1">5-6 Hours</p>
          <p className="text-sm text-muted">↑ Increase from the previous 5 check-ins</p>
        </div>
      </div>
    </div>
  )
}

export default AverageSleepCard


