import type { PasswordStrength } from '../../types/auth.types'

export const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

export function getPasswordStrength(val: string): PasswordStrength | null {
  if (!val) return null
  const score = [
    /[A-Z]/.test(val),
    /[0-9]/.test(val),
    /[^a-zA-Z0-9]/.test(val),
    val.length >= 8,
  ].filter(Boolean).length

  const levels: PasswordStrength[] = [
    { width: '25%', color: '#ff4d4d', label: 'Débil' },
    { width: '50%', color: '#f5a623', label: 'Regular' },
    { width: '75%', color: '#a8d820', label: 'Buena' },
    { width: '100%', color: '#c8f135', label: 'Fuerte' },
  ]
  return levels[Math.max(0, score - 1)]
}

export function launchParticles() {
  const colors = ['#c8f135', '#a8d820', '#4a9eff', '#f5a623', '#ffffff']
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div')
    const size = Math.random() * 7 + 3
    const angle = Math.random() * 360
    const dist = Math.random() * 220 + 80
    const dur = Math.random() * 900 + 600
    Object.assign(p.style, {
      position: 'fixed',
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: colors[Math.floor(Math.random() * colors.length)],
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: '999',
      pointerEvents: 'none',
      transition: `transform ${dur}ms ease-out, opacity ${dur}ms ease-out`,
    })
    document.body.appendChild(p)
    requestAnimationFrame(() => {
      const rad = angle * (Math.PI / 180)
      p.style.transform = `translate(calc(-50% + ${Math.cos(rad) * dist}px), calc(-50% + ${Math.sin(rad) * dist}px))`
      p.style.opacity = '0'
    })
    setTimeout(() => p.remove(), dur + 100)
  }
}

export function initCanvasBlobs(
  canvas: HTMLCanvasElement,
  blobConfig: Array<{ xRatio: number; yRatio: number; r: number; dx: number; dy: number; color: string; alpha: number }>
) {
  const ctx = canvas.getContext('2d')!
  let animId: number

  type Blob = { x: number; y: number; r: number; dx: number; dy: number; color: string; alpha: number }
  let blobs: Blob[] = []

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    blobs = blobConfig.map((b) => ({
      x: b.xRatio * canvas.width,
      y: b.yRatio * canvas.height,
      r: b.r,
      dx: b.dx,
      dy: b.dy,
      color: b.color,
      alpha: b.alpha,
    }))
  }

  function draw() {
    const W = canvas.width
    const H = canvas.height
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, W, H)

    blobs.forEach((b) => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
      g.addColorStop(0, b.color + b.alpha + ')')
      g.addColorStop(1, b.color + '0)')
      ctx.beginPath()
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
      ctx.fillStyle = g
      ctx.fill()
      b.x += b.dx
      b.y += b.dy
      if (b.x < -b.r || b.x > W + b.r) b.dx *= -1
      if (b.y < -b.r || b.y > H + b.r) b.dy *= -1
    })

    animId = requestAnimationFrame(draw)
  }

  resize()
  draw()

  const onResize = () => resize()
  window.addEventListener('resize', onResize)

  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', onResize)
  }
}
