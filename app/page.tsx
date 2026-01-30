'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, ExternalLink, Send, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import IntroSequence from '@/components/IntroSequence'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [copied, setCopied] = useState(false)
  const contractAddress = 'XXXX...XXXX' // Placeholder

  // Check if user has already seen intro in this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('usrr_intro_complete')
    if (hasSeenIntro === 'true') {
      setShowIntro(false)
      setIntroComplete(true)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('usrr_intro_complete', 'true')
    setShowIntro(false)
    // Small delay for smooth transition
    setTimeout(() => setIntroComplete(true), 300)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Intro Sequence */}
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}

      {/* Main Site - Fade in after intro */}
      <main 
        className={`min-h-screen bg-black text-white overflow-x-hidden transition-opacity duration-700 ${
          introComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
      {/* Background Design */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-radial from-gold-900/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-red-900/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-navy-900/5 via-transparent to-transparent blur-3xl" />
        <div className="grain-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in">
            {/* USRR Seal - Primary Brand Mark */}
            <div className="flex justify-center mb-8">
              <div className="relative w-72 h-72 md:w-96 md:h-96 animate-glow">
                <Image
                  src="/coin.png"
                  alt="USRR Seal"
                  width={384}
                  height={384}
                  className="drop-shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 to-transparent blur-xl -z-10" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                United States Ripple Reserve
              </h1>
              <div className="inline-block px-6 py-2 border border-gold-600/30 bg-gold-900/10 rounded-full">
                <span className="text-2xl md:text-3xl font-semibold text-gold-400 tracking-wider">
                  USRR
                </span>
              </div>
            </div>

            {/* Subheading */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                A narrative-driven asset reflecting market anticipation of XRP integration into U.S. financial infrastructure.
              </p>
              <p className="text-lg md:text-xl text-gold-400 font-medium">
                Market Signal: February 16th
              </p>
            </div>

            {/* CTA Buttons - Triangle Layout */}
            <div className="pt-8 flex flex-col items-center gap-4">
              {/* Top Button - Telegram */}
              <a
                href="https://t.me/YOUR_TELEGRAM_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                <Send size={20} />
                Join Telegram
              </a>
              
              {/* Bottom Row - Two Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#how-to-buy"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-semibold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/50 hover:scale-105"
                >
                  <ShoppingCart size={20} />
                  How to Buy
                </a>
                
                <a
                  href="#contract"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contract')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold-600 text-gold-400 font-semibold rounded-lg hover:bg-gold-600 hover:text-black transition-all duration-300 shadow-lg hover:shadow-gold-500/50 hover:scale-105"
                >
                  View Contract
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* February 16th - Market Signal Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-red-950/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold-400">
                February 16th
              </h2>
              <p className="text-2xl md:text-3xl font-light text-gray-200">
                Market Signal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Handshake Image - Institutional Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative border border-gold-600/20 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm p-2">
                  <Image
                    src="/handshake.jpeg"
                    alt="Institutional Convergence"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded grayscale-[30%] opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Signal Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  Convergence Point
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Market participants are tracking February 16th as a potential inflection point in the institutional integration of blockchain settlement infrastructure.
                  </p>
                  <p>
                    Regulatory clarity, banking partnerships, and cross-border payment modernization signals have converged around this timeline.
                  </p>
                  <p className="text-gold-400 font-medium">
                    USRR exists as a cultural and speculative marker of this narrative — not a guarantee, but a reflection of market sentiment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Narrative Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Narrative Content */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                  The Narrative
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    USRR represents the market's anticipation of a new era in U.S. financial infrastructure. With growing signals around institutional adoption and increasing discussion of XRP integration into traditional banking and settlement systems, USRR captures the narrative of a Ripple-aligned reserve asset.
                  </p>
                  <p>
                    Built for institutional adoption, liquidity efficiency, and on-chain transparency, USRR is positioned at the intersection of crypto and legacy finance.
                  </p>
                  <p className="text-gold-400 font-medium">
                    This is not financial advice. This is a narrative token — a cultural artifact reflecting market speculation.
                  </p>
                </div>
              </div>

              {/* Coin Close-Up Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/30 to-gold-800/30 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <div className="relative border border-gold-600/30 rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm p-8">
                  <Image
                    src="/coin.png"
                    alt="USRR Token Detail"
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Information */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Token Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-gray-700 bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 text-center space-y-4">
                <div className="text-gold-400 text-sm font-semibold uppercase tracking-wider">
                  Blockchain
                </div>
                <div className="text-3xl font-bold">
                  Solana
                </div>
                <div className="text-gray-400 text-sm">
                  High-speed, low-cost settlement
                </div>
              </div>

              <div className="border border-gold-600/30 bg-gold-900/10 backdrop-blur-sm rounded-lg p-8 text-center space-y-4">
                <div className="text-gold-400 text-sm font-semibold uppercase tracking-wider">
                  Symbol
                </div>
                <div className="text-3xl font-bold text-gold-400">
                  USRR
                </div>
                <div className="text-gray-400 text-sm">
                  United States Ripple Reserve
                </div>
              </div>

              <div className="border border-gray-700 bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 text-center space-y-4">
                <div className="text-gold-400 text-sm font-semibold uppercase tracking-wider">
                  Supply
                </div>
                <div className="text-3xl font-bold">
                  TBD
                </div>
                <div className="text-gray-400 text-sm">
                  Fair launch distribution
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-red-600/20 bg-red-950/10 rounded-lg">
              <p className="text-center text-gray-300 leading-relaxed">
                <span className="font-semibold text-red-400">Disclaimer:</span> USRR is a speculative narrative token with no intrinsic value, no roadmap, and no promises. This is not financial advice. Do not invest more than you can afford to lose.
              </p>
            </div>
          </div>
        </section>

        {/* Contract Address */}
        <section id="contract" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Contract Address
            </h2>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-600/20 to-gold-800/20 rounded-lg blur-xl" />
              <div className="relative border-2 border-gold-600/40 bg-gray-900/80 backdrop-blur-sm rounded-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1 w-full">
                    <div className="text-sm text-gold-400 font-semibold mb-2 uppercase tracking-wider">
                      Solana Contract
                    </div>
                    <code className="text-xl md:text-2xl font-mono text-white break-all">
                      {contractAddress}
                    </code>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-6 py-3 bg-gold-600 hover:bg-gold-500 text-black font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check size={20} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={20} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 mt-6 text-sm">
              Always verify the contract address on official channels
            </p>
          </div>
        </section>

        {/* How to Buy */}
        <section id="how-to-buy" className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              How to Buy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-4 h-full">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Get a Solana Wallet
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Download Phantom, Solflare, or another Solana-compatible wallet. Set it up securely.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-4 h-full">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Fund with SOL
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Transfer Solana (SOL) to your wallet from an exchange like Coinbase, Binance, or Kraken.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-4 h-full">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Swap for USRR
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Use a Solana DEX like Jupiter or Raydium to swap SOL for USRR using the contract address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DexScreener Section */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Live Market Data
            </h2>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-red-600/10 rounded-lg blur-2xl" />
              <div className="relative border border-gray-700 bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden">
                {/* Deck-style header */}
                <div className="border-b border-gray-700 bg-gray-900/80 px-8 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      DexScreener Chart
                    </span>
                  </div>
                  <ExternalLink size={18} className="text-gray-400" />
                </div>
                
                {/* Placeholder content */}
                <div className="aspect-video flex items-center justify-center p-12">
                  <div className="text-center space-y-4">
                    <div className="text-6xl text-gray-700">📊</div>
                    <p className="text-gray-400 text-lg">
                      DexScreener embed will appear here upon contract deployment
                    </p>
                    <a
                      href="https://dexscreener.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 border border-gray-600 hover:border-gold-600 text-gray-300 hover:text-gold-400 rounded transition-colors"
                    >
                      Visit DexScreener
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Official Bio Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              About USRR
            </h2>
            
            <div className="border border-gold-600/20 bg-gray-900/40 backdrop-blur-sm rounded-lg p-12">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                USRR is a narrative-driven digital asset reflecting market sentiment around the convergence of U.S. financial infrastructure and blockchain settlement layers. Built on Solana for speed and liquidity, USRR exists as a cultural signal — not a promise. It carries no roadmap, no utility, and no guaranteed outcome. This token represents speculation, sentiment, and storytelling in the evolving landscape where traditional finance meets distributed ledger technology.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="text-2xl font-bold text-gold-400">
                USRR
              </div>
              <div className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
                USRR is a speculative narrative token. This project makes no promises, offers no guarantees, and provides no financial advice. Cryptocurrency investments carry significant risk. Only participate with capital you can afford to lose entirely.
              </div>
              <div className="text-xs text-gray-600">
                © 2026 USRR. All rights reserved. Not affiliated with Ripple Labs or any financial institution.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
    </>
  )
}
