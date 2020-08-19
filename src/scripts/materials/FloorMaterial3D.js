import { Material3D } from "./Material3D";

export class FloorMaterial3D extends Material3D {
    constructor(parameters, textureMapPack, scene) {
        super(parameters, textureMapPack, scene, true);
        // this.metalness = 1.0;
        this.normalScale.set(-10, -10);
    }
}