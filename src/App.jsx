import { Canvas } from '@react-three/fiber'
import './App.css'

function App () {
  const WIDTH = 500
  const HEIGHT = 500

  /*  const mesh = new THREE.Mesh()
  mesh.geometry = new THREE.BoxGeometry()
  mesh.material = new THREE.MeshStandardMaterial()

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer() */

  /*  scene.add(mesh) */
  /*
  renderer.setSize(WIDTH, HEIGHT)
  new THREE.BoxGeometry(2, 2, 2)

  function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate() */

  return (
    <div id='canvas-container'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='green' position={[0, 0, 10]} />
        <mesh>
          <boxGeometry args={[20, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
