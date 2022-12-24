import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import laptopModel from '../assets/models/ASUSLaptop.glb'
import setupModel from './setupModel.js'

export default async function loadModel() {
    const loader = new GLTFLoader()

    const [laptopData] = await Promise.all([
        loader.loadAsync(laptopModel)
    ])
    console.log(laptopData)
    const laptop = await setupModel(laptopData)
    laptop.position.set(0, 0, 0);
    laptop.rotation.y = 0
    laptop.tick = function(){
        laptop.rotation.y+=0.005
    }
    
    return{ laptop }
}