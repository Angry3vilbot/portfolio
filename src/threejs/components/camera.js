import { PerspectiveCamera } from "three";

export default function createCamera() {
    const camera = new PerspectiveCamera(35, 1, 0.1, 2000)

    camera.position.set(-10, 5, 5)
    
    return camera
}