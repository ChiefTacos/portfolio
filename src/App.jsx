import './App.css';
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

function App() {
  
  return (
    <>
    <Canvas 
      // camera={{
      // fov:54,
      // position: [2.3, 1.5, 2.3]}}
    
       orthographic camera={{  position: [17, 11, 13], left: -200, right: 200,top: 200, bottom: -200, zoom: 450 }}
    >
      <Suspense fallback={null}> <Experience /> </Suspense>
     
    </Canvas>
    <Loader />
    </>
  )
}

export default App;