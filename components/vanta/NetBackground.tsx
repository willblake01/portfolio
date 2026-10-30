'use client'

import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface NetPointsProps {
  count?: number
  maxLinkDistance?: number
  maxNeighbors?: number
  color?: string
  rotationSpeed?: number
  // Half-extent (as a multiple of viewport.height) the field reaches
  // above center. Independent of bottomScale — change this without
  // affecting where the bottom edge sits.
  topScale?: number
  // Half-extent (as a multiple of viewport.height) the field reaches
  // below center. Shrink this on its own to pull the bottom edge up
  // (e.g. off-screen) while the top stays exactly where it is.
  bottomScale?: number
  // Independent of radius — controls how much depth (Z) variation the
  // disc has. Keep this small/fixed while increasing radius for width,
  // so widening doesn't also increase the perspective-driven apparent
  // vertical spread that comes from points sitting at very different
  // distances from the camera.
  depthScale?: number
  // How quickly a connection fades in/out as points rotate in and out of
  // range, in fade-units per second (1 = fades fully over ~1 second).
  // Lower = slower, smoother fade; higher = snappier.
  fadeSpeed?: number
  // Amount of independent vertical drift each point bobs up/down by, on
  // top of the shared rotation. Bounded oscillation (not a random walk),
  // so points never wander away — each just settles into its own gentle
  // back-and-forth around its base height.
  bobAmount?: number
  // How strongly moving the cursor influences rotation (per pixel of
  // actual movement, not screen position) — no click needed. Moving
  // right pushes toward counterclockwise; moving left adds on top of
  // the ambient clockwise rotation, spinning faster than default.
  dragSensitivity?: number
  // How quickly the extra speed ramps up/down toward its target as the
  // cursor moves, in units/second. Lower = more gradual "flyover" build
  // up; higher = more immediate response.
  rampSpeed?: number
  // How long (in seconds) movement is held before it affects rotation
  // — a genuine timestamped delay, not just softened easing. Higher =
  // the net visibly trails further behind the cursor's actual movement.
  inputDelay?: number
  // Pure vertical translation of the whole net — shifts everything up
  // or down without changing its shape/height (unlike topScale/
  // bottomScale, which would also alter proportions) or touching the
  // camera at all. Negative moves it down.
  verticalOffset?: number
}

// Shared by both CameraFlyover and NetPoints' pointermove handlers.
// Ignores movement over the AppBar entirely, and over a central portion
// of the avatar's canvas (not its whole rectangle, since that's much
// taller/wider than the character actually rendered inside it) — so net
// interaction still works over the empty space around the avatar.
function isOverExcludedArea(event: PointerEvent): boolean {
  const target = event.target as HTMLElement | null
  if (target?.closest('[data-appbar]')) return true

  const avatarEl = target?.closest('[data-avatar-scene]') as HTMLElement | null
  if (avatarEl) {
    const rect = avatarEl.getBoundingClientRect()
    const insetX = rect.width * 0.2
    const insetY = rect.height * 0.1
    const withinAvatarBounds =
      event.clientX > rect.left + insetX &&
      event.clientX < rect.right - insetX &&
      event.clientY > rect.top + insetY &&
      event.clientY < rect.bottom - insetY
    if (withinAvatarBounds) return true
  }

  return false
}

interface CameraFlyoverProps {
  archHeight?: number
  spread?: number
  baseDistance?: number
  // How close the camera gets (in Z) at the peak of its sweep — lower
  // than baseDistance, since moving closer while also rising is what
  // creates the "passing over the top" feel rather than just sliding
  // sideways at a constant distance away.
  overDistance?: number
  // Height the camera sits at even at rest (sweep = 0) — this is what
  // gives the default, idle view its own slight downward-looking angle
  // over the net, rather than a dead-level straight-on view. The sweep's
  // rise during movement builds further on top of this baseline, up to
  // archHeight at full sweep.
  defaultElevation?: number
  // How strongly vertical cursor movement tilts the view up/down (per
  // pixel of actual movement) — moving up tilts the view up, moving
  // down tilts it down, layered on top of the horizontal sweep.
  tiltSensitivity?: number
  // How strongly cursor movement builds up the camera's sweep away from
  // its default position (per pixel of actual movement) — same
  // direction convention as the net's own rotation: moving right sweeps
  // toward the counterclockwise side, moving left toward the clockwise
  // side.
  sweepSensitivity?: number
  // How quickly the camera eases back to its default position (x: 0,
  // arch: 0 — i.e. exactly the original static viewpoint) once the
  // cursor stops moving or leaves the page, in units/second.
  returnSpeed?: number
}

// Camera stays at its plain default position (looking straight at the
// net, no rise, no offset) until cursor movement is detected. Movement
// then builds up a sweep away from center — right builds toward the
// counterclockwise side, left toward the clockwise side, matching the
// net's own rotation direction — with the camera both rising *and*
// moving closer (reducing Z toward overDistance) the further it sweeps,
// so it reads as arcing up and over the net rather than sliding away
// from it at a constant distance. Vertical movement adds a slight
// additional tilt up/down on top of that. The moment the cursor stops
// (or leaves the page), everything eases back down to the default
// position rather than continuing an independent ambient animation.
function CameraFlyover({
  archHeight = 5,
  spread = 3,
  baseDistance = 5,
  overDistance = 1.8,
  defaultElevation = 3,
  tiltSensitivity = 0.003,
  sweepSensitivity = 0.002,
  returnSpeed = 1.5,
}: CameraFlyoverProps) {
  const { camera } = useThree()
  const lookTarget = useMemo(() => new THREE.Vector3(0, 0, 0), [])

  // Normalized -1..1 position within the sweep range. 0 is the default,
  // no-flyover viewpoint (camera exactly at [0, 0, baseDistance]).
  const sweep = useRef(0)
  const dragAccum = useRef(0)
  // Same idea, vertically — a small additional tilt layered on top of
  // the horizontal sweep, driven by vertical cursor movement.
  const tilt = useRef(0)
  const tiltAccum = useRef(0)
  // Tracks whether the cursor has actually left the browser viewport
  // (via the mouseleave listener below) rather than simply paused —
  // resting on the page keeps sweep/tilt/climb exactly where they are;
  // only actually leaving triggers the ease back to default. Starts
  // true so the page opens at the default angle before any real cursor
  // movement has occurred, same as if the cursor had "left."
  const hasLeftPage = useRef(true)
  // Absolute cursor position (-1 at left edge, +1 at right edge) — a
  // direct positional value, not accumulated movement. Drives climb
  // below so elevation responds to *where* the cursor currently is,
  // not how it got there.
  const mouseXNormalized = useRef(0)
  // How "climbed" elevation/distance should currently be — eased toward
  // its position-based target only while actively moving; on idle, it
  // eases back to the default angle (0) regardless of where the cursor
  // happens to be resting.
  const climb = useRef(0)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      // Over the AppBar or avatar — treat the same as the cursor having
      // left the page: ease back to default, rather than just freezing
      // wherever sweep/tilt/climb last were.
      if (isOverExcludedArea(event)) {
        hasLeftPage.current = true
        return
      }
      hasLeftPage.current = false

      // Same sign convention as the net's own rotation: moving right
      // (positive movementX) pushes toward counterclockwise (negative
      // sweep); moving left pushes toward clockwise (positive sweep).
      dragAccum.current += -event.movementX * sweepSensitivity
      // Moving up (negative movementY, since screen Y grows downward)
      // tilts the view up (positive tilt); moving down tilts it down.
      tiltAccum.current += -event.movementY * tiltSensitivity
      mouseXNormalized.current = (event.clientX / window.innerWidth) * 2 - 1
    }
    const handleMouseLeave = () => {
      hasLeftPage.current = true
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [sweepSensitivity, tiltSensitivity])

  useFrame((state, delta) => {
    // Sweep (horizontal position, and the x it drives) persists — it
    // represents where the camera sits relative to the net's ongoing
    // rotation, so it doesn't snap back on its own.
    sweep.current = THREE.MathUtils.clamp(
      sweep.current + dragAccum.current,
      -1,
      1,
    )

    // Resting on the page (no movement, but cursor still present) keeps
    // sweep/tilt/climb exactly where they are — only actually leaving
    // the viewport (hasLeftPage) triggers the ease back to default.
    if (hasLeftPage.current) {
      tilt.current += (0 - tilt.current) * Math.min(returnSpeed * delta, 1)
      // Elevation/distance ease back to the default angle too, once the
      // cursor has actually left — not just paused on the page.
      climb.current += (0 - climb.current) * Math.min(returnSpeed * delta, 1)
    } else {
      tilt.current = THREE.MathUtils.clamp(
        tilt.current + tiltAccum.current,
        -1,
        1,
      )
      // Climb is driven by where the cursor actually *is*, not
      // accumulated movement — 1 (fully climbed, near overhead) at page
      // center, 0 (resting default) at the outer edges. Only chased
      // while actively moving.
      const climbTarget = 1 - Math.abs(mouseXNormalized.current)
      climb.current +=
        (climbTarget - climb.current) * Math.min(returnSpeed * delta, 1)
    }
    dragAccum.current = 0
    tiltAccum.current = 0

    const x = sweep.current * spread
    // Starts at defaultElevation when climb = 0 (idle, or cursor at the
    // outer edges), rising toward archHeight as climb approaches 1
    // (cursor near page center, while actively moving) — this is what
    // gives the "low at the sides, high looking down at center" feel.
    // tilt then adds a small additional offset on top, driven
    // independently by vertical cursor movement.
    const arch =
      defaultElevation +
      Math.sin(climb.current * (Math.PI / 2)) *
        (archHeight - defaultElevation) +
      tilt.current * 1.5
    // Moves closer (toward overDistance) as it climbs, rather than
    // staying at a constant distance — this is what makes it read as
    // passing over the top instead of sliding away sideways.
    const z = THREE.MathUtils.lerp(baseDistance, overDistance, climb.current)

    camera.position.set(x, arch, z)
    camera.lookAt(lookTarget)
  })

  return null
}

function NetPoints({
  count = 180,
  maxLinkDistance = 3.0,
  maxNeighbors = 4.0,
  color = '#ff3f81',
  rotationSpeed = 0.15,
  topScale = 0.1,
  bottomScale = 0.5,
  depthScale = 1.0,
  fadeSpeed = 2.5,
  bobAmount = 0.45,
  dragSensitivity = 0.05,
  rampSpeed = 2.0,
  inputDelay = 0.7,
  verticalOffset = -1.0,
}: NetPointsProps) {
  const { viewport } = useThree()
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  // Frozen at first render (before CameraFlyover's useFrame has ever run,
  // so this reflects Canvas's initial static camera position) rather
  // than read live — R3F's viewport is recalculated from the camera's
  // *current* distance, so reading it live meant every baseDistance/
  // sweep change from CameraFlyover was inadvertently resizing and
  // respacing the whole net too. This keeps the net's actual structure
  // (radius, vertical spread) fixed regardless of where the camera is
  // or moves to; only the camera's framing changes, as intended.
  const structureViewport = useRef({
    width: viewport.width,
    height: viewport.height,
  }).current

  const radius = structureViewport.width * 0.55

  // Each point gets a fixed orbital radius/angle/height — motion comes
  // from advancing a single shared angle each frame (global rotation),
  // not from independent per-point velocities. That's what makes the
  // whole field move as one coherent system rather than scattering
  // outward.
  const layout = useMemo(() => {
    const topBound = structureViewport.height * topScale
    const bottomBound = -structureViewport.height * bottomScale
    const data = []
    for (let i = 0; i < count; i++) {
      data.push({
        r: radius * (0.25 + Math.random() * 0.75),
        angle: Math.random() * Math.PI * 2,
        y: bottomBound + Math.random() * (topBound - bottomBound),
        bobPhase: Math.random() * Math.PI * 2,
        bobSpeed: 0.3 + Math.random() * 0.1,
      })
    }
    return data
  }, [count, radius, structureViewport.height, topScale, bottomScale])

  const positions = useMemo(() => new Float32Array(count * 3), [count])

  const maxSegments = count * maxNeighbors
  const linePositions = useMemo(
    () => new Float32Array(maxSegments * 2 * 3),
    [maxSegments],
  )
  const lineColors = useMemo(
    () => new Float32Array(maxSegments * 2 * 4),
    [maxSegments],
  )

  const rotation = useRef(0)
  const mouseWorld = useRef(new THREE.Vector3(9999, 9999, 0))

  // Genuine timestamped delay buffer — each frame's movement contribution
  // is queued with when it happened, and only applied once inputDelay
  // seconds have actually passed. This is what produces real "net
  // follows behind the cursor" lag; smoothing an already-instantaneous
  // per-frame value (an earlier approach) just blends noise, it doesn't
  // create true temporal playback.
  const moveQueue = useRef<{ t: number; val: number }[]>([])
  const currentExtraSpeed = useRef(0)

  // Tracks every connection's fade progress (0 = invisible, 1 = fully
  // visible) across frames, keyed by point-pair. Persisted in a ref so it
  // survives between frames rather than being rebuilt from scratch each
  // time — that's what lets a connection ease in/out instead of snapping.
  const connectionState = useRef(new Map<string, number>())

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (isOverExcludedArea(event)) return

      // Live viewport here (not structureViewport) — this is mapping
      // the cursor into the *current* view for the repulsion effect,
      // which should track wherever the camera actually is right now.
      const ndcX = (event.clientX / window.innerWidth) * 2 - 1
      const ndcY = -(event.clientY / window.innerHeight) * 2 + 1
      mouseWorld.current.set(
        (ndcX * viewport.width) / 2,
        (ndcY * viewport.height) / 2,
        0,
      )

      // Moving right (positive movementX) subtracts, pushing toward
      // counterclockwise; moving left (negative movementX) adds on top
      // of the ambient clockwise rotation. Based on actual movement
      // direction, not which side of the screen the cursor is on.
      // Queued with a timestamp rather than applied immediately — see
      // moveQueue in the frame loop for why.
      moveQueue.current.push({
        t: performance.now(),
        val: -event.movementX * dragSensitivity,
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [viewport.width, viewport.height, dragSensitivity])

  const circleTexture = useMemo(() => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  useFrame((frameState, delta) => {
    // Dequeue every entry that's now old enough (inputDelay seconds have
    // actually passed since it was recorded) and sum them into this
    // frame's target — this is what makes rotation genuinely react to
    // where the cursor *was* a moment ago, not just a softened version
    // of where it is right now.
    const now = performance.now()
    const delayMs = inputDelay * 1000
    let frameTarget = 0
    const queue = moveQueue.current
    while (queue.length > 0 && now - queue[0].t >= delayMs) {
      frameTarget += queue.shift()!.val
    }

    // Still eased (not snapped) so the delayed contributions themselves
    // arrive smoothly rather than as abrupt steps — continues in
    // whatever direction/speed it was last at, gradually settling back
    // to just the ambient rotationSpeed once the queue runs dry.
    currentExtraSpeed.current +=
      (frameTarget - currentExtraSpeed.current) * Math.min(rampSpeed * delta, 1)

    rotation.current +=
      rotationSpeed * delta + currentExtraSpeed.current * delta

    for (let i = 0; i < count; i++) {
      const p = layout[i]
      const angle = p.angle + rotation.current
      const ix = i * 3
      positions[ix] = Math.cos(angle) * p.r
      positions[ix + 1] =
        p.y +
        Math.sin(frameState.clock.elapsedTime * p.bobSpeed + p.bobPhase) *
          bobAmount
      positions[ix + 2] = Math.sin(angle) * p.r * depthScale

      const dx = mouseWorld.current.x - positions[ix]
      const dy = mouseWorld.current.y - positions[ix + 1]
      const dist = Math.hypot(dx, dy)
      if (dist < 1.0 && dist > 0.001) {
        const push = ((1.0 - dist) / 1.0) * 0.03
        positions[ix] -= (dx / dist) * push
        positions[ix + 1] -= (dy / dist) * push
      }
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }

    // Nearest-neighbor connections: each point links only to its closest
    // maxNeighbors within maxLinkDistance, rather than every pair within
    // range — this is what keeps the result looking like a sparse
    // constellation instead of a dense, fully-connected mesh.
    const activeKeys = new Set<string>()
    const drawn = new Set<string>()
    for (let i = 0; i < count; i++) {
      const ai = i * 3
      const candidates: { j: number; dist: number }[] = []
      for (let j = 0; j < count; j++) {
        if (i === j) continue
        const bi = j * 3
        const dx = positions[ai] - positions[bi]
        const dy = positions[ai + 1] - positions[bi + 1]
        const dz = positions[ai + 2] - positions[bi + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < maxLinkDistance) candidates.push({ j, dist })
      }
      candidates.sort((a, b) => a.dist - b.dist)
      for (let k = 0; k < Math.min(maxNeighbors, candidates.length); k++) {
        const j = candidates[k].j
        const key = i < j ? `${i}-${j}` : `${j}-${i}`
        if (drawn.has(key)) continue
        drawn.add(key)
        activeKeys.add(key)
      }
    }

    // Advance every tracked connection's fade value toward its target
    // (1 if it should currently be connected, 0 if not) — new connections
    // start at 0 and ease up; dropped ones ease down and get removed once
    // fully faded, rather than disappearing the instant they're out of range.
    const fadeState = connectionState.current
    for (const key of activeKeys) {
      if (!fadeState.has(key)) fadeState.set(key, 0)
    }
    for (const [key, alpha] of fadeState) {
      const target = activeKeys.has(key) ? 1 : 0
      const next = alpha + (target - alpha) * Math.min(fadeSpeed * delta, 1)
      if (target === 0 && next < 0.01) {
        fadeState.delete(key)
      } else {
        fadeState.set(key, next)
      }
    }

    let segIndex = 0
    for (const [key, alpha] of connectionState.current) {
      const [iStr, jStr] = key.split('-')
      const i = parseInt(iStr, 10)
      const j = parseInt(jStr, 10)
      const ai = i * 3
      const bi = j * 3
      const li = segIndex * 6
      linePositions[li] = positions[ai]
      linePositions[li + 1] = positions[ai + 1]
      linePositions[li + 2] = positions[ai + 2]
      linePositions[li + 3] = positions[bi]
      linePositions[li + 4] = positions[bi + 1]
      linePositions[li + 5] = positions[bi + 2]
      const ci = segIndex * 8
      lineColors[ci] = 1
      lineColors[ci + 1] = 1
      lineColors[ci + 2] = 1
      lineColors[ci + 3] = alpha
      lineColors[ci + 4] = 1
      lineColors[ci + 5] = 1
      lineColors[ci + 6] = 1
      lineColors[ci + 7] = alpha
      segIndex++
      if (segIndex >= maxSegments) break
    }

    if (linesRef.current) {
      const geom = linesRef.current.geometry
      geom.setDrawRange(0, segIndex * 2)
      geom.attributes.position.needsUpdate = true
      geom.attributes.color.needsUpdate = true
    }
  })

  return (
    <group position={[0, verticalOffset, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={0.06}
          sizeAttenuation
          map={circleTexture}
          transparent
          alphaTest={0.5}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[lineColors, 4]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.75}
          vertexColors
        />
      </lineSegments>
    </group>
  )
}

export interface NetBackgroundProps {
  count?: number
  maxLinkDistance?: number
  maxNeighbors?: number
  color?: string
  rotationSpeed?: number
  topScale?: number
  bottomScale?: number
  depthScale?: number
  fadeSpeed?: number
  bobAmount?: number
  dragSensitivity?: number
  rampSpeed?: number
  inputDelay?: number
  verticalOffset?: number
  // CameraFlyover controls — how fast the sweep builds up while moving,
  // and how fast it eases back to default once movement stops.
  sweepSensitivity?: number
  returnSpeed?: number
}

const NetBackground = ({
  sweepSensitivity,
  returnSpeed,
  ...netPointsProps
}: NetBackgroundProps) => (
  <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <CameraFlyover
        sweepSensitivity={sweepSensitivity}
        returnSpeed={returnSpeed}
      />
      <NetPoints {...netPointsProps} />
    </Canvas>
  </div>
)

export default NetBackground
