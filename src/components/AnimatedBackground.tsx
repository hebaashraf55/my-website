import { useEffect, useRef } from 'react'

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Node class for network nodes
    class Node {
      x: number
      y: number
      targetX: number
      targetY: number
      speed: number
      radius: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.targetX = this.x
        this.targetY = this.y
        this.speed = Math.random() * 0.3 + 0.1
        this.radius = Math.random() * 2 + 1
      }

      update() {
        // Move towards target position
        this.x += (this.targetX - this.x) * 0.02
        this.y += (this.targetY - this.y) * 0.02

        // Occasional random movement
        if (Math.random() < 0.005) {
          this.targetX = Math.random() * canvas.width
          this.targetY = Math.random() * canvas.height
        }

        // Mouse interaction - nodes are repelled by mouse with stronger effect
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 250) {
          const force = (250 - distance) / 250
          this.x -= dx * force * 0.2
          this.y -= dy * force * 0.2
        }

        // Keep nodes in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        // Draw node with gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2)
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)')
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw small center dot
        ctx.fillStyle = 'rgba(139, 92, 246, 1)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create nodes - intensified
    const nodes: Node[] = []
    const nodeCount = Math.floor((canvas.width * canvas.height) / 8000)
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node())
    }

      // Draw connections between nearby nodes
    const drawConnections = () => {
      ctx.lineWidth = 1.5

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Draw line if nodes are close - increased visibility and intensity
          if (distance < 250) {
            const opacity = (250 - distance) / 250 * 0.5
            
            // Create gradient for line - enhanced visibility
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            )
            const enhancedOpacity = opacity * 1.5
            gradient.addColorStop(0, `rgba(139, 92, 246, ${enhancedOpacity})`)
            gradient.addColorStop(0.5, `rgba(139, 92, 246, ${enhancedOpacity * 0.7})`)
            gradient.addColorStop(1, `rgba(139, 92, 246, ${enhancedOpacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animated circles in background
    class Circle {
      x: number
      y: number
      radius: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 200 + 100
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.color = Math.random() > 0.5 ? '#8B5CF6' : '#F97316'
        this.opacity = Math.random() * 0.05 + 0.02
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width + this.radius) this.x = -this.radius
        if (this.x < -this.radius) this.x = canvas.width + this.radius
        if (this.y > canvas.height + this.radius) this.y = -this.radius
        if (this.y < -this.radius) this.y = canvas.height + this.radius
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, `rgba(${this.color === '#8B5CF6' ? '139, 92, 246' : '249, 115, 22'}, ${this.opacity})`)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const circles: Circle[] = []
    for (let i = 0; i < 6; i++) {
      circles.push(new Circle())
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background circles
      circles.forEach(circle => {
        circle.update()
        circle.draw()
      })

      // Update nodes
      nodes.forEach(node => node.update())

      // Draw connections
      drawConnections()

      // Draw nodes on top
      nodes.forEach(node => node.draw())

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'linear-gradient(135deg, #0f0c29 0%, #1a0a2e 50%, #16213e 100%)',
      }}
    />
  )
}

export default AnimatedBackground
