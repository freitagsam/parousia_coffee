'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }

    const enter = () => el.classList.add('hover')
    const leave = () => el.classList.remove('hover')

    document.addEventListener('mousemove', move)

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }

    addListeners()
    const obs = new MutationObserver(addListeners)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      obs.disconnect()
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden />
}
