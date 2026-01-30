'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function LivePriceSimulator() {
  const [price, setPrice] = useState(0.00234)
  const [change, setChange] = useState(0)
  const [isPositive, setIsPositive] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate price changes
      const changePercent = (Math.random() - 0.5) * 5 // -2.5% to +2.5%
      const newPrice = price * (1 + changePercent / 100)
      const priceChange = ((newPrice - price) / price) * 100

      setPrice(newPrice)
      setChange(Math.abs(priceChange))
      setIsPositive(priceChange >= 0)
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [price])

  return (
    <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-lg">
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 font-mono">LIVE PRICE</span>
        <span className="text-2xl font-mono font-bold text-white">
          ${price.toFixed(5)}
        </span>
      </div>
      <div className={`flex items-center gap-1 px-3 py-1 rounded ${
        isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
      }`}>
        {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        <span className="font-mono font-semibold">
          {change.toFixed(2)}%
        </span>
      </div>
    </div>
  )
}
