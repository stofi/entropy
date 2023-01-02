import './tailwind.css'
import './index.css'

import { useMemo } from 'react'
import ReactDOM from 'react-dom/client'

import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'

import Dom from './dom/Dom'
import Experience from './experience/Experience'
import type { TKeymap } from './keymap'
import Keymap from './keymap'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function App() {
  const map = useMemo<KeyboardControlsEntry<TKeymap>[]>(
    () => [
      { name: Keymap.forward, keys: ['ArrowUp', 'w', 'W'] },
      { name: Keymap.back, keys: ['ArrowDown', 's', 'S'] },
      { name: Keymap.left, keys: ['ArrowLeft', 'a', 'A'] },
      { name: Keymap.right, keys: ['ArrowRight', 'd', 'D'] },
      { name: Keymap.jump, keys: ['Space'] },
    ],
    [],
  )

  return (
    <KeyboardControls map={map}>
      <div className='flex flex-col justify-center w-full h-full'>
        <div className='relative aspect-video'>
          <Experience enableDebug />

          <div className='absolute inset-0'>
            <Dom />
          </div>
        </div>
      </div>
    </KeyboardControls>
  )
}

root.render(<App />)
