import { WebGLRenderer, sRGBEncoding } from "three";

export default function createRenderer(){
    const renderer = new WebGLRenderer({ antialias:true })
    renderer.physicallyCorrectLights = false;
    renderer.gammaFactor = 2.2;
    renderer.outputEncoding = sRGBEncoding;
    renderer.powerPreference = "high-performance"
    return renderer
}