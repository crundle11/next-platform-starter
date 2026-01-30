'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, ExternalLink, Send, ShoppingCart, Zap, Shield, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import IntroSequence from '@/components/IntroSequence'
import FloatingParticles from '@/components/FloatingParticles'
import LivePriceSimulator from '@/components/LivePriceSimulator'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)
  const [copied, setCopied] = useState(false)
  const contractAddress = 'BAxDvA2EXe1WTuceGjK1PdsPtPPG9G2XzXvCZ2g1mjg7'

  // Intro shows every time - no session storage check

  const handleIntroTransitionStart = () => {
    // Start showing main page with coin already visible
    setTimeout(() => setIntroComplete(true), 100)
  }

  const handleIntroComplete = () => {
    setTimeout(() => {
      setShowIntro(false)
    }, 500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Intro Sequence */}
      {showIntro && (
        <IntroSequence 
          onComplete={handleIntroComplete}
          onTransitionStart={handleIntroTransitionStart}
        />
      )}

      {/* Main Site - Fade in after intro */}
      <main 
        className={`min-h-screen bg-black text-white overflow-x-hidden transition-opacity duration-700 ${
          introComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Background Design */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-950/20 via-transparent to-red-950/10 animate-gradient opacity-50" />
        
        {/* Multiple light sources */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-radial from-gold-900/15 via-gold-950/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-red-900/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-radial from-gold-800/10 via-transparent to-transparent blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-900/5 via-transparent to-transparent blur-3xl" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(234, 179, 8, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
        
        {/* Grain texture */}
        <div className="grain-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-12 animate-fade-in">
            {/* USRR Seal - Primary Brand Mark */}
            <div className="flex justify-center mb-8">
              <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float group">
                <div className="absolute inset-0 animate-pulse-glow rounded-full" />
                <Image
                  src="/coin.png"
                  alt="USRR Seal"
                  width={384}
                  height={384}
                  className="drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 relative z-10"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-radial from-gold-500/20 to-transparent blur-xl" />
                <div className="absolute inset-0 bg-gradient-radial from-gold-400/30 via-transparent to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                United States Ripple Reserve
              </h1>
              <div className="inline-block px-6 py-2 border border-gold-600/30 bg-gold-900/10 rounded-full backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-mono font-semibold text-gold-400 tracking-wider">
                  USRR
                </span>
              </div>
            </div>

            {/* Live Price Simulator */}
            <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <LivePriceSimulator />
            </div>

            {/* Subheading */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                A narrative-driven asset reflecting market anticipation of XRP integration into U.S. financial infrastructure.
              </p>
              <p className="text-lg md:text-xl text-gold-400 font-mono font-medium tracking-wide">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-mono font-semibold rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 border border-blue-400/20"
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
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-mono font-semibold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/50 hover:scale-105 border border-gold-400/30"
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
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold-600 text-gold-400 font-mono font-semibold rounded-lg hover:bg-gold-600 hover:text-black transition-all duration-300 shadow-lg hover:shadow-gold-500/50 hover:scale-105 backdrop-blur-sm"
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
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
                February 16th
              </h2>
              <p className="text-2xl md:text-3xl font-mono font-light text-gray-200 tracking-wide">
                Market Signal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Handshake Image - Institutional Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative border border-gold-600/20 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm p-2 group-hover:border-gold-500/30 transition-all duration-500">
                  <Image
                    src="/handshake.jpeg"
                    alt="Institutional Convergence"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded grayscale-[30%] opacity-90 group-hover:grayscale-[20%] group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Signal Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-gray-100">
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

        {/* Stats Bar */}
        <section className="py-12 px-6 border-y border-gray-800/50 bg-gray-950/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2 group cursor-pointer">
                <div className="flex justify-center mb-2">
                  <Zap className="text-gold-400 group-hover:text-gold-300 transition-colors" size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                  <span className="font-mono">24/7</span>
                </div>
                <div className="text-sm text-gray-400">
                  Trading Active
                </div>
              </div>

              <div className="space-y-2 group cursor-pointer">
                <div className="flex justify-center mb-2">
                  <Shield className="text-gold-400 group-hover:text-gold-300 transition-colors" size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                  <span className="font-mono">100%</span>
                </div>
                <div className="text-sm text-gray-400">
                  Community Driven
                </div>
              </div>

              <div className="space-y-2 group cursor-pointer">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="text-gold-400 group-hover:text-gold-300 transition-colors" size={24} />
                </div>
                <div className="text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                  <span className="font-mono">∞</span>
                </div>
                <div className="text-sm text-gray-400">
                  Market Potential
                </div>
              </div>

              <div className="space-y-2 group cursor-pointer">
                <div className="flex justify-center mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 animate-pulse" />
                </div>
                <div className="text-3xl font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                  <span className="font-mono">LIVE</span>
                </div>
                <div className="text-sm text-gray-400">
                  On Solana
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
                <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  The Narrative
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    USRR represents the market&apos;s anticipation of a new era in U.S. financial infrastructure. With growing signals around institutional adoption and increasing discussion of XRP integration into traditional banking and settlement systems, USRR captures the narrative of a Ripple-aligned reserve asset.
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
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/30 to-gold-800/30 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative border border-gold-600/30 rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm p-8 group-hover:border-gold-500/50 transition-all duration-500">
                  <Image
                    src="/coin.png"
                    alt="USRR Token Detail"
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Information */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Token Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group border border-gray-700 bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 text-center space-y-4 hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300">
                <div className="text-gold-400 text-sm font-mono font-semibold uppercase tracking-wider">
                  Blockchain
                </div>
                <div className="text-3xl font-display font-bold group-hover:text-gold-400 transition-colors duration-300">
                  Solana
                </div>
                <div className="text-gray-400 text-sm">
                  High-speed, low-cost settlement
                </div>
              </div>

              <div className="group relative border border-gold-600/30 bg-gold-900/10 backdrop-blur-sm rounded-lg p-8 text-center space-y-4 hover:border-gold-500/50 hover:bg-gold-900/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-gold-400 text-sm font-mono font-semibold uppercase tracking-wider">
                    Symbol
                  </div>
                  <div className="text-3xl font-display font-bold text-gold-400 group-hover:scale-110 transition-transform duration-300">
                    USRR
                  </div>
                  <div className="text-gray-400 text-sm">
                    United States Ripple Reserve
                  </div>
                </div>
              </div>

              <div className="group border border-gray-700 bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 text-center space-y-4 hover:border-gray-600 hover:bg-gray-900/50 transition-all duration-300">
                <div className="text-gold-400 text-sm font-mono font-semibold uppercase tracking-wider">
                  Supply
                </div>
                <div className="text-3xl font-display font-bold group-hover:text-gold-400 transition-colors duration-300">
                  TBD
                </div>
                <div className="text-gray-400 text-sm">
                  Fair launch distribution
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-red-600/20 bg-red-950/10 rounded-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <p className="text-center text-gray-300 leading-relaxed relative z-10">
                <span className="font-semibold text-red-400">Disclaimer:</span> USRR is a speculative narrative token with no intrinsic value, no roadmap, and no promises. This is not financial advice. Do not invest more than you can afford to lose.
              </p>
            </div>
          </div>
        </section>

        {/* Contract Address */}
        <section id="contract" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
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
                    className="flex items-center gap-2 px-6 py-3 bg-gold-600 hover:bg-gold-500 text-black font-mono font-semibold rounded-lg transition-all duration-300 whitespace-nowrap hover:scale-105 shadow-lg hover:shadow-gold-500/50"
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              How to Buy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-4 h-full hover:border-gold-600/30 hover:bg-gray-900/70 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 font-mono font-bold text-xl group-hover:scale-110 group-hover:bg-gold-600/30 transition-all duration-300">
                    1
                  </div>
                  <h3 className="text-2xl font-display font-semibold">
                    Get a Solana Wallet
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Download Phantom, Solflare, or another Solana-compatible wallet. Set it up securely.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-4 h-full hover:border-gold-600/30 hover:bg-gray-900/70 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 font-mono font-bold text-xl group-hover:scale-110 group-hover:bg-gold-600/30 transition-all duration-300">
                    2
                  </div>
                  <h3 className="text-2xl font-display font-semibold">
                    Fund with SOL
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Transfer Solana (SOL) to your wallet from an exchange like Coinbase, Binance, or Kraken.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-600/10 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 space-y-4 h-full hover:border-gold-600/30 hover:bg-gray-900/70 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 font-mono font-bold text-xl group-hover:scale-110 group-hover:bg-gold-600/30 transition-all duration-300">
                    3
                  </div>
                  <h3 className="text-2xl font-display font-semibold">
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
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
                
                {/* DexScreener Embed */}
                <div className="aspect-video">
                  <iframe
                    src={`https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark&trades=0&info=0`}
                    className="w-full h-full rounded"
                    title="DexScreener Trading Chart"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Official Bio Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
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
              <div className="text-2xl font-mono font-bold text-gold-400">
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
