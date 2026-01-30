'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface IntroSequenceProps {
  onComplete: () => void
  onTransitionStart?: () => void
}

export default function IntroSequence({ onComplete, onTransitionStart }: IntroSequenceProps) {
  const [stage, setStage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleEnter = () => {
    setIsTransitioning(true)
    if (onTransitionStart) {
      onTransitionStart()
    }
    setTimeout(() => {
      onComplete()
    }, 800)
  }

  useEffect(() => {
    const timings = [
      1000,  // Initial delay
      800,   // Line 1: A MARKET SIGNAL
      800,   // Line 2: FEBRUARY 16TH
      800,   // Line 3: A shift in financial narrative begins
      1200,  // Coin reveal
      1500,  // Narrative bridge
      2000   // Auto-advance to main site
    ]

    const timer = setTimeout(() => {
      if (stage < 6) {
        setStage(stage + 1)
      } else {
        // Auto-advance to main site
        handleEnter()
      }
    }, timings[stage])

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
      isTransitioning ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950">
        {/* Grain texture */}
        <div className="grain-overlay absolute inset-0 opacity-40" />
        
        {/* Subtle gold bloom from center */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full transition-opacity duration-[2000ms] ${
            stage >= 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Opening Copy Sequence */}
        <div className="space-y-6 min-h-[200px] flex flex-col items-center justify-center">
          {/* Line 1: A MARKET SIGNAL */}
          <div
            className={`transition-all duration-1000 ${
              stage >= 1
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-gold-400 text-sm md:text-base font-mono font-semibold uppercase tracking-[0.3em]">
              A Market Signal
            </p>
          </div>

          {/* Line 2: FEBRUARY 16TH */}
          <div
            className={`transition-all duration-1000 ${
              stage >= 2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight">
              February 16th
            </h1>
          </div>

          {/* Line 3: Subtitle */}
          <div
            className={`transition-all duration-1000 ${
              stage >= 3
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              A shift in financial narrative begins.
            </p>
          </div>
        </div>

        {/* USRR Coin Reveal */}
        <div
          className={`transition-all duration-[1500ms] ${
            stage >= 4
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          } ${
            isTransitioning ? 'scale-90 translate-y-[-10vh]' : ''
          }`}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" id="intro-coin">
            <Image
              src="/coin.png"
              alt="USRR"
              width={320}
              height={320}
              className="drop-shadow-2xl"
              priority
            />
            {/* Metallic highlight sweep */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent transition-all duration-[2000ms] ${
                stage >= 4 ? 'translate-x-full opacity-0' : '-translate-x-full opacity-100'
              }`}
              style={{ mixBlendMode: 'overlay' }}
            />
            {/* Subtle glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(234, 179, 8, 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.2)'
              }}
            />
          </div>
        </div>

        {/* Narrative Bridge */}
        <div
          className={`transition-all duration-1000 max-w-2xl ${
            stage >= 5
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            United States Ripple Reserve (USRR) reflects market anticipation around the convergence of U.S. financial infrastructure and blockchain settlement layers.
          </p>
        </div>

        {/* Loading indicator */}
        <div
          className={`transition-all duration-1000 pt-8 ${
            stage >= 5
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" style={{ animationDelay: '200ms' }} />
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
