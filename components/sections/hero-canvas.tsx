"use client"

import { useEffect, useRef } from "react"

// ── Ambient Config ──────────────────────────────────
const AMBIENT_COUNT = 780
const BASE_DOT_SIZE = 1.2
const SIZE_VARIATION = 0.08
const CONNECTION_DISTANCE_2D = 65
const CONNECTION_DEPTH_THRESHOLD = 0.15
const MAX_CONNECTIONS_PER_NODE = 4
const LINE_OPACITY = 0.03
const SIGNAL_CHANCE = 0.004
const FOV = 600
const CAMERA_Z = -400
const WORLD_DEPTH = 800

// ── Robot Config ────────────────────────────────────
const ROBOT_COUNT = 16
const ORANGE_ROBOT_COUNT = 93
const GRID_SPACING = 80
const ROBOT_STOP_DISTANCE = 28
const ROBOT_PAUSE_RANGE: [number, number] = [45, 110]
const ROBOT_TURN_CHANCE = 0.55
const ROBOT_DOT_SIZE = 1.6
const DEADLOCK_FRAMES = 30

// ── Colors ──────────────────────────────────────────
const BASE_COLOR = { r: 160, g: 200, b: 255 }
const ORANGE = { r: 255, g: 160, b: 40 }

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}
function randRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}
function randInt(min: number, max: number) {
  return Math.floor(randRange(min, max + 1))
}

function project(x3d: number, y3d: number, z3d: number, cx: number, cy: number) {
  const dz = z3d - CAMERA_Z
  if (dz <= 0) return null
  const scale = FOV / dz
  return { x: cx + x3d * scale, y: cy + y3d * scale, scale }
}

const DIR = [
  { dx: 1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: -1 },
]

const OPPOSITE_DIR: Record<number, number> = { 0: 2, 1: 3, 2: 0, 3: 1 }

function perpDirs(dir: number): number[] {
  if (dir === 0 || dir === 2) return [1, 3]
  return [0, 2]
}

interface RobotType {
  x: number
  y: number
  dir: number
  speed: number
  size: number
  isOrange: boolean
  paused: boolean
  pauseTimer: number
  pauseDuration: number
  trail: { x: number; y: number }[]
  maxTrail: number
  waitingForClear: boolean
  waitFrames: number
}

function createRobot(
  w: number,
  h: number,
  linesX: number[],
  linesY: number[],
  isOrange: boolean
): RobotType {
  const horizontal = Math.random() < 0.5
  let x: number, y: number, dir: number
  if (horizontal) {
    y = linesY[randInt(0, linesY.length - 1)]
    x = Math.random() * w
    dir = Math.random() < 0.5 ? 0 : 2
  } else {
    x = linesX[randInt(0, linesX.length - 1)]
    y = Math.random() * h
    dir = Math.random() < 0.5 ? 1 : 3
  }
  const sc = Math.random()
  const speed =
    sc < 0.25
      ? randRange(0.18, 0.3)
      : sc > 0.8
        ? randRange(0.7, 1.1)
        : randRange(0.35, 0.55)

  return {
    x,
    y,
    dir,
    speed,
    size: ROBOT_DOT_SIZE * (1 + (Math.random() - 0.5) * SIZE_VARIATION * 2),
    isOrange,
    paused: false,
    pauseTimer: 0,
    pauseDuration: 0,
    trail: [],
    maxTrail: speed > 0.6 ? 14 : speed < 0.3 ? 5 : 8,
    waitingForClear: false,
    waitFrames: 0,
  }
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number | null>(null)
  const ambientRef = useRef<
    Array<{
      x3d: number
      y3d: number
      z3d: number
      vx: number
      vy: number
      vz: number
      size: number
      phase: number
      breathSpeed: number
      twinkle: number
      twinkleTarget: number
      sx: number
      sy: number
      sScale: number
      visible: boolean
    }>
  >([])
  const robotsRef = useRef<RobotType[]>([])
  const signalsRef = useRef<
    Array<{
      ax: number
      ay: number
      bx: number
      by: number
      progress: number
      speed: number
      size: number
      df: number
    }>
  >([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const timeRef = useRef(0)
  const gridRef = useRef({ linesX: [] as number[], linesY: [] as number[] })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let w: number, h: number

    // Gate the expensive simulation work:
    // - pause when the canvas is offscreen
    // - pause when the tab is hidden
    // - respect `prefers-reduced-motion`
    let isInView = true
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    let prefersReducedMotion = mql.matches
    const shouldRunNow = () =>
      isInView && !prefersReducedMotion && !document.hidden

    const buildGrid = () => {
      const linesX: number[] = []
      const linesY: number[] = []
      const ox = (w % GRID_SPACING) / 2 + GRID_SPACING
      const oy = (h % GRID_SPACING) / 2 + GRID_SPACING
      for (let x = ox; x < w - GRID_SPACING / 2; x += GRID_SPACING) linesX.push(x)
      for (let y = oy; y < h - GRID_SPACING / 2; y += GRID_SPACING) linesY.push(y)
      gridRef.current = { linesX, linesY }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGrid()
    }
    resize()
    window.addEventListener("resize", resize)

    const spread = 900
    ambientRef.current = Array.from({ length: AMBIENT_COUNT }, () => {
      const speedClass = Math.random()
      const speedMult = speedClass < 0.2 ? 0.3 : speedClass > 0.85 ? 1.6 : 1
      return {
        x3d: (Math.random() - 0.5) * spread * 2,
        y3d: (Math.random() - 0.5) * spread * 1.2,
        z3d: Math.random() * WORLD_DEPTH,
        vx: (Math.random() - 0.5) * 0.18 * speedMult,
        vy: (Math.random() - 0.5) * 0.13 * speedMult,
        vz: randRange(-0.12, 0.12) * speedMult,
        size: BASE_DOT_SIZE * (1 + (Math.random() - 0.5) * SIZE_VARIATION * 2),
        phase: Math.random() * Math.PI * 2,
        breathSpeed: randRange(0.005, 0.018),
        twinkle: 0,
        twinkleTarget: 0,
        sx: 0,
        sy: 0,
        sScale: 0,
        visible: false,
      }
    })

    buildGrid()
    const { linesX, linesY } = gridRef.current
    robotsRef.current = Array.from({ length: ROBOT_COUNT }, (_, i) =>
      createRobot(w, h, linesX, linesY, i < ORANGE_ROBOT_COUNT)
    )
    signalsRef.current = []

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }
    canvas.addEventListener("mousemove", handleMouse)
    canvas.addEventListener("mouseleave", handleLeave)

    function nearestIntersection(x: number, y: number) {
      const { linesX, linesY } = gridRef.current
      let bx = linesX[0]
      let by = linesY[0]
      let mdx = Infinity
      let mdy = Infinity
      for (const gx of linesX) {
        if (Math.abs(gx - x) < mdx) { mdx = Math.abs(gx - x); bx = gx }
      }
      for (const gy of linesY) {
        if (Math.abs(gy - y) < mdy) { mdy = Math.abs(gy - y); by = gy }
      }
      return { x: bx, y: by, dist: Math.sqrt(mdx * mdx + mdy * mdy) }
    }

    function resolveDeadlock(robot: RobotType) {
      const { linesX, linesY } = gridRef.current
      const perps = perpDirs(robot.dir)
      const newDir = perps[Math.random() < 0.5 ? 0 : 1]

      if (newDir === 0 || newDir === 2) {
        let bestY = linesY[0]
        let minD = Infinity
        for (const gy of linesY) {
          if (Math.abs(gy - robot.y) < minD) { minD = Math.abs(gy - robot.y); bestY = gy }
        }
        robot.y = bestY
      } else {
        let bestX = linesX[0]
        let minD = Infinity
        for (const gx of linesX) {
          if (Math.abs(gx - robot.x) < minD) { minD = Math.abs(gx - robot.x); bestX = gx }
        }
        robot.x = bestX
      }

      robot.dir = newDir
      robot.waitingForClear = false
      robot.waitFrames = 0
      robot.paused = true
      robot.pauseTimer = 0
      robot.pauseDuration = randInt(10, 25)
    }

    function isHeadOn(a: RobotType, b: RobotType): boolean {
      if (a.dir !== OPPOSITE_DIR[b.dir]) return false
      const da = DIR[a.dir]
      const dx = b.x - a.x
      const dy = b.y - a.y
      const ahead = dx * da.dx + dy * da.dy
      if (ahead <= 0 || ahead > ROBOT_STOP_DISTANCE * 2) return false
      const lateral = Math.abs(dx * da.dy - dy * da.dx)
      return lateral < 12
    }

    const animate = () => {
      if (!shouldRunNow()) {
        animRef.current = null
        return
      }
      timeRef.current += 1
      ctx.clearRect(0, 0, w, h)
      const cx = w / 2
      const cy = h / 2
      const ambient = ambientRef.current
      const robots = robotsRef.current
      const signals = signalsRef.current
      const mouse = mouseRef.current
      const { linesX, linesY } = gridRef.current

      // ── Grid ──
      ctx.strokeStyle = "rgba(140,180,255,0.014)"
      ctx.lineWidth = 0.5
      for (const gx of linesX) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke()
      }
      for (const gy of linesY) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke()
      }

      // ── Update ambient ──
      for (let i = 0; i < ambient.length; i++) {
        const p = ambient[i]
        p.x3d += p.vx + Math.sin(timeRef.current * 0.002 + p.phase) * 0.04
        p.y3d += p.vy + Math.cos(timeRef.current * 0.0015 + p.phase * 1.4) * 0.03
        p.z3d += p.vz

        if (p.z3d > WORLD_DEPTH) {
          p.z3d = 0; p.x3d = (Math.random() - 0.5) * spread * 2; p.y3d = (Math.random() - 0.5) * spread * 1.2
        }
        if (p.z3d < 0) {
          p.z3d = WORLD_DEPTH; p.x3d = (Math.random() - 0.5) * spread * 2; p.y3d = (Math.random() - 0.5) * spread * 1.2
        }
        if (p.x3d > spread * 2) p.x3d = -spread * 2
        if (p.x3d < -spread * 2) p.x3d = spread * 2
        if (p.y3d > spread * 1.5) p.y3d = -spread * 1.5
        if (p.y3d < -spread * 1.5) p.y3d = spread * 1.5

        const proj = project(p.x3d, p.y3d, p.z3d, cx, cy)
        if (proj && proj.x > -50 && proj.x < w + 50 && proj.y > -50 && proj.y < h + 50) {
          p.sx = proj.x; p.sy = proj.y; p.sScale = proj.scale; p.visible = true
        } else {
          p.visible = false
        }

        p.phase += p.breathSpeed
        if (p.visible) {
          const dx = p.sx - mouse.x
          const dy = p.sy - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 110 && dist > 0) {
            const f = ((110 - dist) / 110) * 0.05 * p.sScale
            p.vx += (dx / dist) * f
            p.vy += (dy / dist) * f
          }
        }
        p.vx *= 0.995
        p.vy *= 0.995
        if (Math.random() < 0.0006) p.twinkleTarget = 1
        p.twinkle = lerp(p.twinkle, p.twinkleTarget, 0.035)
        if (p.twinkle > 0.92) p.twinkleTarget = 0
      }

      const sortedIdx = ambient.map((_, i) => i).sort((a, b) => ambient[b].z3d - ambient[a].z3d)

      // ── Connections ──
      const connections: Array<{ i: number; j: number; dist: number; avgScale: number }> = []
      const connCount = new Array(ambient.length).fill(0)
      for (let ii = 0; ii < sortedIdx.length; ii++) {
        const i = sortedIdx[ii]
        const a = ambient[i]
        if (!a.visible || a.sScale < 0.4 || connCount[i] >= MAX_CONNECTIONS_PER_NODE) continue
        for (let jj = ii + 1; jj < sortedIdx.length; jj++) {
          const j = sortedIdx[jj]
          const b = ambient[j]
          if (!b.visible || b.sScale < 0.4 || connCount[j] >= MAX_CONNECTIONS_PER_NODE) continue
          if (Math.abs(a.z3d - b.z3d) / WORLD_DEPTH > CONNECTION_DEPTH_THRESHOLD) continue
          const dx = a.sx - b.sx
          const dy = a.sy - b.sy
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE_2D) {
            connections.push({ i, j, dist, avgScale: (a.sScale + b.sScale) / 2 })
            connCount[i]++; connCount[j]++
            if (connCount[i] >= MAX_CONNECTIONS_PER_NODE) break
          }
        }
      }

      // ── Draw connections ──
      const { r: br, g: bg, b: bb } = BASE_COLOR
      for (const conn of connections) {
        const a = ambient[conn.i]
        const b = ambient[conn.j]
        const t = 1 - conn.dist / CONNECTION_DISTANCE_2D
        const df = Math.min(conn.avgScale * 1.5, 1)
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy)
        ctx.strokeStyle = `rgba(${br},${bg},${bb},${LINE_OPACITY * t * df})`
        ctx.lineWidth = 0.4 * df; ctx.stroke()
      }

      // ── Signals ──
      if (connections.length > 0 && Math.random() < SIGNAL_CHANCE) {
        const c = connections[Math.floor(Math.random() * connections.length)]
        signals.push({
          ax: ambient[c.i].sx, ay: ambient[c.i].sy,
          bx: ambient[c.j].sx, by: ambient[c.j].sy,
          progress: 0, speed: randRange(0.018, 0.04),
          size: randRange(1.2, 2.5) * c.avgScale,
          df: Math.min(c.avgScale * 1.5, 1),
        })
      }
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i]
        s.progress += s.speed
        if (s.progress > 1) { signals.splice(i, 1); continue }
        const sx = lerp(s.ax, s.bx, s.progress)
        const sy = lerp(s.ay, s.by, s.progress)
        const fade = s.progress < 0.15 ? s.progress / 0.15 : s.progress > 0.85 ? (1 - s.progress) / 0.15 : 1
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.size * 5)
        grad.addColorStop(0, `rgba(${br},${bg},${bb},${0.22 * fade * s.df})`)
        grad.addColorStop(1, `rgba(${br},${bg},${bb},0)`)
        ctx.beginPath(); ctx.arc(sx, sy, s.size * 5, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill()
        ctx.beginPath(); ctx.arc(sx, sy, s.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${br},${bg},${bb},${0.5 * fade * s.df})`; ctx.fill()
      }

      // ── Draw ambient particles ──
      for (let ii = 0; ii < sortedIdx.length; ii++) {
        const p = ambient[sortedIdx[ii]]
        if (!p.visible) continue
        const depthNorm = p.z3d / WORLD_DEPTH
        const brightness = 1 - depthNorm * 0.88
        const baseOp = 0.04 + brightness * 0.26 + Math.sin(p.phase) * 0.04 * brightness
        const op = Math.max(baseOp + p.twinkle * 0.4 * brightness, 0)
        const sz = p.size * Math.max(p.sScale * 1.5, 0.3)
        if (sz < 0.25) continue

        if (p.twinkle > 0.12 && sz > 0.5) {
          const gr = sz * (2 + p.twinkle * 3.5)
          const gOp = p.twinkle * 0.08 * brightness
          const grad = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, gr)
          grad.addColorStop(0, `rgba(${br},${bg},${bb},${gOp})`)
          grad.addColorStop(1, `rgba(${br},${bg},${bb},0)`)
          ctx.beginPath(); ctx.arc(p.sx, p.sy, gr, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill()
        }

        ctx.beginPath(); ctx.arc(p.sx, p.sy, Math.max(sz, 0.35), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${br},${bg},${bb},${op})`; ctx.fill()
      }

      // ══════════════════════════════════════════════
      // ROBOTS
      // ══════════════════════════════════════════════
      for (let i = 0; i < robots.length; i++) {
        const r = robots[i]
        const col = r.isOrange ? ORANGE : BASE_COLOR
        const { r: cr, g: cg, b: cb } = col

        if (r.paused) {
          r.pauseTimer++
          if (r.pauseTimer >= r.pauseDuration) {
            r.paused = false
            r.pauseTimer = 0
            if (Math.random() < ROBOT_TURN_CHANCE) {
              if (r.dir === 0 || r.dir === 2) {
                r.dir = Math.random() < 0.5 ? 1 : 3
                let bx = linesX[0]
                let md = Infinity
                for (const gx of linesX) {
                  if (Math.abs(gx - r.x) < md) { md = Math.abs(gx - r.x); bx = gx }
                }
                r.x = bx
              } else {
                r.dir = Math.random() < 0.5 ? 0 : 2
                let by = linesY[0]
                let md = Infinity
                for (const gy of linesY) {
                  if (Math.abs(gy - r.y) < md) { md = Math.abs(gy - r.y); by = gy }
                }
                r.y = by
              }
            }
          }
        } else {
          const d = DIR[r.dir]
          let blocked = false
          let blockerIdx = -1

          for (let j = 0; j < robots.length; j++) {
            if (i === j) continue
            const o = robots[j]
            const dx = o.x - r.x
            const dy = o.y - r.y
            const ahead = dx * d.dx + dy * d.dy
            if (ahead > 0 && ahead < ROBOT_STOP_DISTANCE) {
              if (Math.abs(dx * d.dy - dy * d.dx) < 10) {
                blocked = true
                blockerIdx = j
                break
              }
            }
          }

          if (blocked) {
            r.waitingForClear = true
            r.waitFrames++

            if (r.waitFrames > DEADLOCK_FRAMES && blockerIdx >= 0) {
              const other = robots[blockerIdx]
              if (isHeadOn(r, other)) {
                if (i < blockerIdx) {
                  resolveDeadlock(r)
                }
              } else if (r.waitFrames > DEADLOCK_FRAMES * 2) {
                resolveDeadlock(r)
              }
            }
          } else {
            r.waitingForClear = false
            r.waitFrames = 0
            r.x += d.dx * r.speed
            r.y += d.dy * r.speed
            const inter = nearestIntersection(r.x, r.y)
            if (inter.dist < 2 && Math.random() < 0.018) {
              r.paused = true
              r.pauseDuration = randInt(ROBOT_PAUSE_RANGE[0], ROBOT_PAUSE_RANGE[1])
              r.pauseTimer = 0
            }
          }

          if (r.x > w + 50) r.x = -50
          if (r.x < -50) r.x = w + 50
          if (r.y > h + 50) r.y = -50
          if (r.y < -50) r.y = h + 50
        }

        r.trail.push({ x: r.x, y: r.y })
        if (r.trail.length > r.maxTrail) r.trail.shift()

        for (let t = 0; t < r.trail.length - 1; t++) {
          const tp = r.trail[t]
          const progress = t / r.trail.length
          ctx.beginPath()
          ctx.arc(tp.x, tp.y, r.size * 0.35 * progress, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${progress * (r.isOrange ? 0.12 : 0.06)})`
          ctx.fill()
        }

        const moving = !r.paused && !r.waitingForClear
        const glowR = r.size * (r.isOrange ? 8 : 4)
        const glowOp = r.isOrange ? (moving ? 0.12 : 0.06) : (moving ? 0.04 : 0.02)
        const rGrad = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, glowR)
        rGrad.addColorStop(0, `rgba(${cr},${cg},${cb},${glowOp})`)
        rGrad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)
        ctx.beginPath(); ctx.arc(r.x, r.y, glowR, 0, Math.PI * 2)
        ctx.fillStyle = rGrad; ctx.fill()

        const coreOp = r.isOrange ? (moving ? 0.7 : 0.35) : (moving ? 0.35 : 0.18)
        ctx.beginPath(); ctx.arc(r.x, r.y, r.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${coreOp})`; ctx.fill()

        if (r.waitingForClear && r.isOrange) {
          const pr = r.size * (2.2 + Math.sin(timeRef.current * 0.1) * 0.6)
          ctx.beginPath(); ctx.arc(r.x, r.y, pr, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${0.1 + Math.sin(timeRef.current * 0.1) * 0.05})`
          ctx.lineWidth = 0.5; ctx.stroke()
        }
      }

      if (shouldRunNow()) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        animRef.current = null
      }
    }

    let observer: IntersectionObserver | null = null

    const onVisibilityChange = () => {
      if (!shouldRunNow() && animRef.current) {
        cancelAnimationFrame(animRef.current)
        animRef.current = null
        return
      }

      if (shouldRunNow() && !animRef.current) {
        animRef.current = requestAnimationFrame(animate)
      }
    }

    const onReduceChange = () => {
      prefersReducedMotion = mql.matches
      onVisibilityChange()
    }

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isInView = entry?.isIntersecting ?? true
        onVisibilityChange()
      },
      { threshold: 0.1 },
    )

    observer.observe(canvas)
    mql.addEventListener?.("change", onReduceChange)
    document.addEventListener("visibilitychange", onVisibilityChange)

    if (shouldRunNow()) {
      animRef.current = requestAnimationFrame(animate)
    }

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouse)
      canvas.removeEventListener("mouseleave", handleLeave)
      observer?.disconnect()
      document.removeEventListener("visibilitychange", onVisibilityChange)
      mql.removeEventListener?.("change", onReduceChange)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 35% 30%, #0f1a2e 0%, #0a0e1a 45%, #060810 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 30%, rgba(6,8,16,0.5) 100%),
            linear-gradient(180deg, rgba(6,8,16,0.12) 0%, transparent 20%, transparent 80%, rgba(6,8,16,0.35) 100%)
          `,
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-[2] pointer-events-auto"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[5] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #060810, transparent)",
        }}
      />
    </>
  )
}