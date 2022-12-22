import { TextureLoader } from "three";
import textureMap from '../assets/textures/Laptop/laptop.jpg'
import normalMap from '../assets/textures/Laptop/Lowpoly_Laptop_Nor_2.jpg'

export default function setupModel(data) {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(
        textureMap,
    );
    console.log(data.scene)
    const model = data.scene.children[0]
    model.map = texture
    console.log(model.map)

    return model
}