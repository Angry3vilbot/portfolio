import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import laptopModel from '../assets/models/ASUSLaptop.glb'
import setupModel from './setupModel.js'

export default async function loadModel() {
    const loader = new GLTFLoader()

    const [laptopData] = await Promise.all([
        loader.loadAsync(laptopModel)
    ])
    console.log(laptopData)
    const laptop = setupModel(laptopData)
    laptop.position.set(0, 0, 0);
    laptop.rotation.y = 180
    
    return{ laptop }
}