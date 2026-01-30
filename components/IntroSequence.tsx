'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface IntroSequenceProps {
  onComplete: () => void
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timings = [
      1000,  // Initial delay
      800,   // Line 1: A MARKET SIGNAL
      800,   // Line 2: FEBRUARY 16TH
      800,   // Line 3: A shift in financial narrative begins
      1200,  // Coin reveal
      1000,  // Narrative bridge
      0      // Button reveal
    ]

    const timer = setTimeout(() => {
      if (stage < 6) {
        setStage(stage + 1)
      }
    }, timings[stage])

    return () => clearTimeout(timer)
  }, [stage])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
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
            <p className="text-gold-400 text-sm md:text-base font-semibold uppercase tracking-[0.3em] letter-spacing">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
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
          }`}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
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

        {/* Enter Button */}
        <div
          className={`transition-all duration-1000 pt-4 ${
            stage >= 6
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={onComplete}
            className="group relative px-12 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50"
          >
            {/* Button shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">Enter USRR</span>
          </button>
        </div>
      </div>
    </div>
  )
}
