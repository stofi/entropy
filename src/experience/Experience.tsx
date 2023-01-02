import * as THREE from 'three'
import { Suspense, useState } from 'react'

import { PerformanceMonitor } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Debug, Physics } from '@react-three/rapier'

import { Leva } from 'leva'
import { Perf } from 'r3f-perf'

import Scene from './objets/Scene'

export default function Experience(props: { enableDebug?: boolean }) {
  return (
    <>
      <Leva hidden={!props.enableDebug} />
      <Canvas
        flat={false}
        shadows={true}
        dpr={1}
        camera={{
          position: [0, 0, 6],
          fov: 15,
        }}
      >
        {props.enableDebug && (
          <>
            <Perf position='top-left' />
            <PerformanceMonitor />
          </>
        )}
        <Suspense>
          <EffectComposer>
            <Bloom />
          </EffectComposer>
          <Physics>
            {props.enableDebug && <Debug />}
            <Scene />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}
