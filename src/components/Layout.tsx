import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

