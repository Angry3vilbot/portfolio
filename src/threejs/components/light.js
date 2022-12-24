import { DirectionalLight, HemisphereLight } from 'three';
export default function createLights(){
    const light = new DirectionalLight('white', 5);
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 2)
    light.position.set(0.5, 0, 0.866);
    return {light, ambientLight};
}