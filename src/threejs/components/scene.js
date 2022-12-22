import { Color, Scene } from "three";

export default function createScene(color) {
    const scene = new Scene()

    scene.background = new Color(color)

    return scene
}