/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#8B5CF6',
        'accent': '#F97316',
        'muted': '#94A3B8',
        'dark': {
          'bg': '#0A0A0F',
          'surface': '#1A1A2E',
          'card': 'rgba(26, 26, 46, 0.4)',
        },
        'glass': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        'sans': ["'Space Grotesk'", "'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ["'JetBrains Mono'", 'monospace'],
      },
      spacing: {
        'xs': '6px',
        'sm': '12px',
        'md': '20px',
        'lg': '32px',
        'xl': '48px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '20px',
        'pill': '999px',
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(0,0,0,0.3)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
        'modal': '0 14px 40px rgba(0,0,0,0.5)',
        'glow': '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)',
        'glow-orange': '0 0 30px rgba(249, 115, 22, 0.4), 0 0 60px rgba(249, 115, 22, 0.2)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
}

