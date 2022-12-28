import createCamera from "./components/camera.js";
import createScene from "./components/scene.js";
import createLights from "./components/light.js";
import createOrbitControls from "./systems/controls.js";
import createRenderer from "./systems/renderer.js";
import Resizer from "./systems/Resizer.js";
import Loop from "./systems/loop.js";
import loadModel from './components/loader.js'

let camera
let controls
let scene
let renderer
let loop

export default class World {
    constructor(container){
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene(0x242424);
        scene.position.set(0, 0, 0);
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        controls = createOrbitControls(camera, renderer.domElement);
        
        const { ambientLight } = createLights();
        loop.updatables.push(controls);
        scene.add(ambientLight);
        
        const resizer = new Resizer(container, camera, renderer)
    }
    async init(){
        const  { laptop } = await loadModel()
        controls.target.copy(laptop.position);
        loop.updatables.push(laptop);
        scene.add(laptop)
    }
    render() {
        renderer.render(scene, camera);
    }
    start() {
        loop.start()
    }
    stop() {
        loop.stop()
    }
}
