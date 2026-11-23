/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        nav: '900px',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        sans: ['var(--font-sans)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Legacy tokens preserved for /admin and /login routes
        paper: {
          DEFAULT: '#faf9f7',
          tint: '#f4f2ee',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f6f4f0',
        },
        ink: {
          DEFAULT: '#14140f',
          soft: '#3d3b35',
          mute: '#6f6c66',
          faint: '#8a867e',
          ghost: '#a5a199',
          numeral: '#c2beb6',
          nav: '#b9b5ad',
          rule: '#2a2a22',
          body: '#a9a69e',
        },
        rule: {
          DEFAULT: '#e6e2da',
          soft: '#efece6',
          line: '#ddd8ce',
          chip: '#e0dbd2',
        },
        accent: 'var(--accent)',
        positive: '#7c9a6b',

        // GTA VI / Vice City Action Palette
        vice: {
          bg: '#08060e',
          panel: '#120e1e',
          card: '#181228',
          elevated: '#211936',
          pink: '#ff2e93',
          magenta: '#d926a9',
          coral: '#ff6b4a',
          gold: '#ffd166',
          cyan: '#00f0ff',
          purple: '#7b2cbf',
          green: '#38ef7d',
          red: '#ff3b5c',
          text: '#f5f2ff',
          muted: '#a49bb8',
          dim: '#6e6485',
        },
      },
      backgroundImage: {
        'vice-sunset':
          'linear-gradient(135deg, #ff2e93 0%, #ff6b4a 52%, #ffd166 100%)',
        'vice-neon':
          'linear-gradient(90deg, #ff2e93 0%, #7b2cbf 50%, #00f0ff 100%)',
        'vice-horizon':
          'radial-gradient(ellipse 80% 55% at 50% 0%, rgba(255,46,147,0.28) 0%, rgba(255,107,74,0.14) 38%, rgba(8,6,14,0) 75%)',
      },
      boxShadow: {
        'neon-pink': '0 0 24px rgba(255, 46, 147, 0.35)',
        'neon-cyan': '0 0 24px rgba(0, 240, 255, 0.32)',
        'neon-gold': '0 0 28px rgba(255, 209, 102, 0.35)',
        'hud-panel': '0 12px 40px rgba(0, 0, 0, 0.55)',
      },
      borderRadius: {
        panel: '10px',
        card: '12px',
        bar: '4px 4px 0 0',
      },
      keyframes: {
        riseIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        caret: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        pulseStrobe: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(255, 59, 92, 0.8)' },
          '50%': { boxShadow: '0 0 18px rgba(0, 240, 255, 0.8)' },
        },
        radarSweep: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        caret: 'caret 1.1s step-end infinite',
        strobe: 'pulseStrobe 0.9s ease-in-out infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
        scanline: 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
};
