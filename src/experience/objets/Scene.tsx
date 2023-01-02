import { Environment, OrbitControls } from '@react-three/drei'

import { useControls } from 'leva'

import Coin from './Coin'

export default function Scene() {
  const { sphereColor, floorColor } = useControls({
    sphereColor: { value: 'red', label: 'Sphere Color' },
    floorColor: { value: '#5c5c5c', label: 'Floor Color' },
  })

  return (
    <>
      <Environment preset='studio' background={false}></Environment>
      <Coin position-x={0.7} scale={0.8} />
    </>
  )
}
