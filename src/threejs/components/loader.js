import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import laptopModel from '../assets/models/ASUSLaptop.glb'
import setupModel from './setupModel.js'

export default async function loadModel() {
    const loader = new GLTFLoader()
    const progressBar = document.querySelector("progress");
    const progressBarContainer = document.querySelector(
        "div#progress-bar-container"
    )
    const mainContainer = document.querySelector("#main");
    const [laptopData] = await Promise.all([
        loader.loadAsync(laptopModel, (xhr) => { progressBar.value = xhr.loaded / xhr.total * 100 })
    ])
    progressBarContainer.classList.add('hidden')
    mainContainer.classList.remove('opacity-0')
    console.log(laptopData)
    const laptop = await setupModel(laptopData)
    laptop.position.set(0, 0, -5);
    laptop.rotation.y = 0
    laptop.tick = function (delta) {
        laptop.rotation.y += 0.1 * delta
    }

    return { laptop }
}