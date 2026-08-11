/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // The only breakpoint in the design. Everything else is fluid via clamp().
      screens: {
        nav: '900px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
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
          // dark-section tokens (act 04)
          rule: '#2a2a22',
          body: '#a9a69e',
        },
        rule: {
          DEFAULT: '#e6e2da',
          soft: '#efece6',
          line: '#ddd8ce',
          chip: '#e0dbd2',
        },
        // Swappable in one place — see --accent in app/globals.css.
        accent: 'var(--accent)',
        positive: '#7c9a6b',
      },
      fontSize: {
        // display scale
        h1: ['clamp(46px, 9vw, 132px)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'h2-contact': ['clamp(34px, 6vw, 84px)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'h2-act': ['clamp(32px, 4.6vw, 64px)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'h3-role': ['clamp(22px, 2.4vw, 30px)', { letterSpacing: '-0.02em' }],
        'h3-card': ['26px', { letterSpacing: '-0.02em' }],
        'h3-dark': ['22px', { letterSpacing: '-0.02em' }],
        metric: ['clamp(26px, 3vw, 36px)', { letterSpacing: '-0.03em' }],
        draft: ['clamp(20px, 2.4vw, 30px)', { letterSpacing: '-0.02em' }],
        // body scale
        lead: ['clamp(17px, 1.5vw, 21px)'],
        body: ['17px', { lineHeight: '1.6' }],
        bullet: ['16px'],
        'card-body': ['15.5px'],
        caption: ['14px'],
        // mono scale
        'mono-sm': ['13px'],
        'mono-xs': ['12px'],
        'mono-2xs': ['11px'],
        'mono-3xs': ['10px'],
        code: ['12.5px', { lineHeight: '1.85' }],
      },
      spacing: {
        side: 'clamp(20px, 5vw, 56px)',
        section: 'clamp(60px, 8vw, 120px)',
        'section-contact': 'clamp(60px, 9vw, 140px)',
        'hero-eyebrow': 'clamp(24px, 4vw, 44px)',
        'hero-split': 'clamp(36px, 6vw, 72px)',
        'hero-cue': 'clamp(44px, 7vw, 90px)',
        'act-head': 'clamp(34px, 5vw, 64px)',
        'act-card': 'clamp(24px, 3vw, 38px)',
        'timeline-row': 'clamp(24px, 3vw, 40px)',
        'skills-top': 'clamp(44px, 6vw, 80px)',
        'compose-card': 'clamp(22px, 3vw, 34px)',
        'contact-head': 'clamp(28px, 4vw, 48px)',
        'contact-details': 'clamp(40px, 5vw, 72px)',
        'contact-footer': 'clamp(36px, 5vw, 64px)',
        'header-x': 'clamp(18px, 4vw, 44px)',
      },
      gap: {
        'hero-split': 'clamp(24px, 5vw, 64px)',
        'act-split': 'clamp(28px, 5vw, 80px)',
        'timeline-split': 'clamp(16px, 4vw, 56px)',
        skills: 'clamp(20px, 3vw, 44px)',
        nav: 'clamp(14px, 2.2vw, 30px)',
      },
      maxWidth: {
        page: '1400px',
        contact: '960px',
        h1: '16ch',
        'h2-13': '13ch',
        'h2-14': '14ch',
        'h2-15': '15ch',
        'h2-16': '16ch',
        intro: '46ch',
        prose: '44ch',
        bullets: '70ch',
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
        drift: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'rise-eyebrow': 'riseIn 0.9s cubic-bezier(.16,.84,.32,1) 0.1s both',
        'rise-h1': 'riseIn 1.1s cubic-bezier(.16,.84,.32,1) 0.2s both',
        'rise-intro': 'riseIn 1s cubic-bezier(.16,.84,.32,1) 0.45s both',
        'rise-metrics': 'riseIn 1s cubic-bezier(.16,.84,.32,1) 0.6s both',
        caret: 'caret 1.1s step-end infinite',
        drift: 'drift 1.6s ease-in-out infinite alternate',
      },
      transitionTimingFunction: {
        entrance: 'cubic-bezier(.16,.84,.32,1)',
      },
    },
  },
  plugins: [],
}
