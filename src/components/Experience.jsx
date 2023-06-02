import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"
import { Overlay } from "./Overlay"

export const Experience = () => {
    
    return (
        <>
            <pointLight position={[5, 15, 10]} intensity={0.6}  />
            <pointLight position={[-10, 15, -10]} intensity={0.6}  />
            
            <OrbitControls  enableZoom={false} enablePan={false} enableRotate={false}  />
            <ScrollControls pages={4} damping={0.1} >
              <Overlay  />
              <Office  />
            </ScrollControls>
            
        </>
    )
}