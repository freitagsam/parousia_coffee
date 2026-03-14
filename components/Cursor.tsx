'use client'

import { useEffect, useRef } from 'react'

function spawnStars(x: number, y: number) {
  const count = 6 + Math.floor(Math.random() * 4)
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span')
    star.textContent = '★'
    star.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      user-select: none;
      font-size: ${10 + Math.random() * 14}px;
      color: #D4AF37;
      text-shadow: 0 0 6px #FFD700;
      z-index: 99999;
      transform: translate(-50%, -50%);
      animation: star-burst 0.7s ease-out forwards;
      --tx: ${(Math.random() - 0.5) * 120}px;
      --ty: ${(Math.random() - 0.5) * 120}px;
      --rot: ${Math.random() * 720 - 360}deg;
    `
    document.body.appendChild(star)
    star.addEventListener('animationend', () => star.remove())
  }
}

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }

    const click = (e: MouseEvent) => spawnStars(e.clientX, e.clientY)

    const enter = () => el.classList.add('hover')
    const leave = () => el.classList.remove('hover')

    document.addEventListener('mousemove', move)
    document.addEventListener('click', click)

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }

    addListeners()
    const obs = new MutationObserver(addListeners)
    obs.observe(document.body, { childList: true, subtree: true })

    // inject keyframes once
    if (!document.getElementById('star-burst-style')) {
      const style = document.createElement('style')
      style.id = 'star-burst-style'
      style.textContent = `
        @keyframes star-burst {
          0%   { opacity: 1; transform: translate(-50%, -50%) translate(0, 0) rotate(0deg) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(0.3); }
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('click', click)
      obs.disconnect()
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden />
}
