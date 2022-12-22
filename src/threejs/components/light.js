import { DirectionalLight, HemisphereLight } from 'three';
export default function createLights(){
    const light = new DirectionalLight('white', 3);
    const ambientLight = new HemisphereLight('white', 'darkslategray', 5)
    light.position.set(10, 10, 10);
    return {light, ambientLight};
}