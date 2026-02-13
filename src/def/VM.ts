import { Renderer } from "./layerManager";

interface VirtualMachine extends VM {
    renderer: Renderer;
    exportProject?: () => Promise<any>;
    getFormatMessage?: (fm: any) => (i: any) => string;
    toJSON: () => any;
    saveProjectSb3: (options?: any) => Promise<any>;
    ccwPolyfill?: {
        convert: () => any;
        save: (options?: any) => Promise<any>;
    };
    _blockInfo?: any;
    targets?: any;
}

// 扩展 Runtime 接口以包含缺失的属性
declare global {
    namespace VM {
        interface Runtime {
            getFormatMessage?: (fm: any) => (i: any) => string;
            ccwAPI?: any;
            _monitorState?: any;
            extensionManager?: {
                _loadedExtensions: Map<string, any>;
            };
            runtimeOptions?: {
                version?: string;
            };
        }
    }
}

export { VirtualMachine };