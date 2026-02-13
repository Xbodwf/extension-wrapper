import { IfRenderer } from "scratch-vm";
import { LayerManager } from "../layerManager";


interface Renderer extends IfRenderer<RenderWebGL, undefined> {
    layerManager: LayerManager;
}

export { Renderer };