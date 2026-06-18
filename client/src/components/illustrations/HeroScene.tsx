import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface HeroSceneProps {
  reduceMotion?: boolean
}

export function HeroScene({ reduceMotion: reduceMotionProp }: HeroSceneProps) {
  const prefersReduced = usePrefersReducedMotion()
  const reduceMotion = reduceMotionProp ?? prefersReduced

  return (
    <div className="relative mx-auto w-full max-w-[36rem] px-2 sm:px-0">
      {/* Ambient glow */}
      <div
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary-400/30 via-accent-400/20 to-violet-500/25 blur-3xl animate-aurora"
        aria-hidden="true"
      />

      <motion.div
        animate={reduceMotion ? false : { y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="glass-premium relative overflow-hidden rounded-[1.75rem] p-1 shadow-premium">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-50 via-white to-primary-50/50">
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
              aria-hidden="true"
            />

            <svg
              viewBox="0 0 480 360"
              className="relative w-full"
              role="img"
              aria-label="Abstract EdTech workshop dashboard illustration"
            >
              <defs>
                <linearGradient id="hero-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
                <linearGradient id="hero-grad-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
                <linearGradient id="hero-grad-card" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f8fafc" />
                </linearGradient>
                <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#4f46e5" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Main dashboard card */}
              <rect x="48" y="40" width="384" height="280" rx="20" fill="url(#hero-grad-card)" filter="url(#hero-shadow)" />
              <rect x="48" y="40" width="384" height="48" rx="20" fill="url(#hero-grad-primary)" opacity="0.95" />
              <rect x="48" y="68" width="384" height="20" fill="url(#hero-grad-primary)" opacity="0.95" />

              {/* Window dots */}
              <circle cx="72" cy="64" r="5" fill="white" opacity="0.9" />
              <circle cx="92" cy="64" r="5" fill="white" opacity="0.5" />
              <circle cx="112" cy="64" r="5" fill="white" opacity="0.5" />

              {/* Chart bars */}
              {[0, 1, 2, 3, 4].map((i) => (
                <rect
                  key={i}
                  x={80 + i * 36}
                  y={200 - (i % 3) * 20 - 40}
                  width="24"
                  height={60 + (i % 3) * 25}
                  rx="6"
                  fill="url(#hero-grad-primary)"
                  opacity={0.2 + i * 0.12}
                />
              ))}

              {/* Progress ring */}
              <circle cx="360" cy="200" r="48" fill="none" stroke="#e2e8f0" strokeWidth="8" />
              <circle
                cx="360"
                cy="200"
                r="48"
                fill="none"
                stroke="url(#hero-grad-accent)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="220 300"
                transform="rotate(-90 360 200)"
              />
              <text x="360" y="206" textAnchor="middle" fill="#4f46e5" fontSize="18" fontWeight="700" fontFamily="system-ui">
                94%
              </text>

              {/* Lesson cards */}
              <rect x="72" y="120" width="140" height="56" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="84" y="132" width="48" height="8" rx="4" fill="#c7d2fe" />
              <rect x="84" y="148" width="96" height="6" rx="3" fill="#e2e8f0" />
              <rect x="84" y="160" width="72" height="6" rx="3" fill="#e2e8f0" />

              <rect x="72" y="188" width="140" height="56" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1" />
              <rect x="84" y="200" width="64" height="8" rx="4" fill="#fbcfe8" />
              <rect x="84" y="216" width="88" height="6" rx="3" fill="#e2e8f0" />

              {/* Floating book icon */}
              <g transform="translate(200, 130)">
                <rect x="0" y="0" width="56" height="56" rx="14" fill="url(#hero-grad-primary)" />
                <path d="M16 20h24v4H16zm0 10h20v4H16zm0 10h16v4H16z" fill="white" opacity="0.9" />
              </g>

              {/* Sparkle accents */}
              <circle cx="420" cy="100" r="4" fill="#ec4899" opacity="0.8" />
              <circle cx="60" cy="300" r="3" fill="#6366f1" opacity="0.6" />
            </svg>

            {/* Animated floating elements */}
            {!reduceMotion && (
              <>
                <motion.div
                  className="absolute left-4 top-16 rounded-2xl border border-white/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm sm:left-6"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-[0.625rem] font-bold uppercase tracking-wider text-text-subtle">Live</p>
                  <p className="font-heading text-sm font-bold text-primary-700">Workshop</p>
                </motion.div>

                <motion.div
                  className="absolute bottom-20 right-4 rounded-2xl border border-white/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm sm:right-6"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <p className="text-[0.625rem] font-bold uppercase tracking-wider text-text-subtle">Engagement</p>
                  <p className="font-heading text-sm font-bold text-accent-600">+3.2×</p>
                </motion.div>

                <motion.div
                  className="absolute right-12 top-24 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-glow-accent"
                  animate={{ rotate: [0, 8, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09Z" />
                  </svg>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
