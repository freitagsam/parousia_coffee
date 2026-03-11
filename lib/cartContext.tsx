'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type CartItem = {
  name: string
  roast: string
  roastType: 'light' | 'medium' | 'dark'
  bg: string
  price: number
  process: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'qty'>) => void
  removeItem: (name: string) => void
  updateQty: (name: string, qty: number) => void
  count: number
  subtotal: number
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('parousia-cart')
      if (saved) setItems(JSON.parse(saved))
    } catch {}
  }, [])

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem('parousia-cart', JSON.stringify(items))
  }, [items])

  function addItem(item: Omit<CartItem, 'qty'>) {
    setItems(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function removeItem(name: string) {
    setItems(prev => prev.filter(i => i.name !== name))
  }

  function updateQty(name: string, qty: number) {
    if (qty < 1) { removeItem(name); return }
    setItems(prev => prev.map(i => i.name === name ? { ...i, qty } : i))
  }

  function clear() {
    setItems([])
  }

  const count = items.reduce((s, i) => s + i.qty, 0)
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, count, subtotal, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
