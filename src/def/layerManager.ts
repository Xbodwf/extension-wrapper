import { Renderer } from "./Renderer";




interface LayerManager {
  rootFolder: rootFolder;
  _renderer: Renderer;
}

interface rootFolder {
    _renderer: Renderer;
}


export { LayerManager, rootFolder, Renderer };