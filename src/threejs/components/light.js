import { DirectionalLight, HemisphereLight } from 'three';
export default function createLights(){
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 1)
    return { ambientLight};
}