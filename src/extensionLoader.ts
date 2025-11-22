/**
 * Extension Loader for CCW Extension Polyfill
 * Handles loading and registering of Scratch extensions
 */

import { BlockType } from "./def/self";
//import { JSDecompiler, decompile } from "./module";

export class ExtensionLoader extends Array<any> {
  installedChunks: Record<string, any> = {};
  moduleRegistry?: Record<string, any>;
  /*decompile = (code: string) => decompile(code, {
    unpack: true,
    deobfuscate: true,
    beautify: true
  });
  decompileWithOptions = decompile*/


  // 硬编码的chunkIDs和moduleIds映射
  chunkToModuleMap: Record<number, number> = {
    9445: 47156,
    5777: 8713,
    3814: 20210,
    1868: 60214,
    3977: 32845,
    6767: 11298,
    1743: 94165,
    4991: 52214,
    2606: 80893,
    9244: 20184,
    1169: 35340,
    8450: 93034,
    3347: 63969,
    2259: 18018,
    3854: 68005,
    3632: 73632,
    2226: 8338,
    8635: 83787,
    7372: 69219,
    1417: 54398,
    6552: 93614,
    9986: 21002,
    155: 50780,
    7490: 15679,
    9468: 93150,
    321: 69434,
    1561: 51509,
    7119: 48656,
    6127: 48859,
    1431: 46798,
    2730: 3276,
    9139: 13740,
    2581: 66493,
    1081: 40862,
    4071: 92413,
    1138: 15698,
    8364: 33824,
    4279: 23542,
    5437: 49014,
    9583: 40721,
    5537: 44418,
    1179: 94954,
    7384: 49684,
    4732: 64345,
    9051: 91803,
    1825: 36679,
    388: 63960,
    4451: 92409,
    1757: 87533
  };

  constructor() {
    super();

    const originalPush = Array.prototype.push.bind(this);

    this.push = function push(chunkData: any) {
      // Call original push to maintain array behavior
      originalPush(chunkData);

      const [chunkIds, modules, runtime] = chunkData;

      let moduleId: string | number;
      let chunkId: number;

      // Mark chunks as loaded
      for (let i = 0; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (this.installedChunks[chunkId]) {
          this.installedChunks[chunkId][0]();
        }
        this.installedChunks[chunkId] = 0;
      }

      for (moduleId in modules) {
        if (Object.prototype.hasOwnProperty.call(modules, moduleId)) {
          // Store module for later require
          if (!this.moduleRegistry) {
            this.moduleRegistry = {};
          }
          this.moduleRegistry[moduleId] = modules[moduleId];
        }
      }

      if (runtime) runtime(this.requireFn || this.require.bind(this));

      this.loadExtensionFromModules(modules);

      return chunkData;
    };
  }

  loadExtensionFromModules(modules: Record<string, any>) {
    const results: any[] = [];
    const detectedLoaderChunks = new Set<number>();

    const candidateFns = Object.values(modules).filter((fn) => typeof fn === "function");

    candidateFns.forEach((fn) => {
      if (typeof fn === "function") {
        const fnStr = fn.toString();
        if (fnStr.includes("return N.e(")) {
          // 这是一个扩展加载器，提取chunkId
          const match = fnStr.match(/return N\.e\((\d+)\)\.then\(N\.bind\(N,\s*(\d+)\)\)/);
          if (match) {
            const chunkId = parseInt(match[1]);
            const moduleId = parseInt(match[2]);
            detectedLoaderChunks.add(chunkId);
            console.log(`[CCW Polyfill] Executing extension loader checked \n chunkId=${chunkId}, moduleId=${moduleId}`);
          }
        }
      }
    });

    const regularCandidateFns = candidateFns.filter((fn) => fn.length === 3);
    regularCandidateFns.forEach((moduleFn) => {
      try {
        const moduleResult = this.requireN(undefined, moduleFn, modules);
        results.push(moduleResult);
      } catch (e) {
        console.warn("[CCW Polyfill] Failed to load module:", e);
      }
    });

    // 尝试从硬编码的chunkId加载扩展
    for (const [chunkId, moduleId] of Object.entries(this.chunkToModuleMap)) {
      if (detectedLoaderChunks.has(parseInt(chunkId))) {
        try {
          if (this.moduleRegistry && this.moduleRegistry[moduleId]) {
            const moduleResult = this.requireN(moduleId);
            if (moduleResult) {
              results.push(moduleResult);
              console.log(`[CCW Polyfill] Loaded chunkId=${chunkId} moduleId=${moduleId}`);
            }
          }
        } catch (e) {
          console.warn(`[CCW Polyfill] Failed to load chunkId=${chunkId} moduleId=${moduleId}:`, e);
        }
      }
    }

    let target: any;
    let info: any;

    if (results.length > 0) {
      try {
        let moduleExports = results[0];

        if (moduleExports.__esModule === true) {
          target = new moduleExports.default(Scratch.vm);
        } else {
          target = new moduleExports(Scratch.vm);
        }

        info = target.getInfo();

        target.getInfo = () => {
          const blocks = info.blocks;
          if (typeof blocks === "object" && blocks !== null) {
            for (const [key, block] of Object.entries(blocks)) {
              if (typeof block === "string" && block.startsWith("---") && block.length !== 3) {
                blocks[key] = {
                  blockType: BlockType.LABEL,
                  text: block.substring(3),
                };
              }
            }
          }
          if (!/^[a-z0-9]+$/i.test(info.id)) {
            info.id = info.id.replace(/[^a-zA-Z0-9]/g, '');
          }
          return info;
        };

        Scratch.extensions.register(target);
        Scratch.vm.runtime[`ext_${info.id}`] = target;
        console.log("[CCW Polyfill] Successfully registered extension:", info.id);
      } catch (e) {
        console.warn("[CCW Polyfill] First Method failed...", e);
        try {
          const processed = this.convertBlocks(info.blocks);
          target._______ccw_polyfill__temp = () => "__ccw_polyfill";
          const proxiedTarget = this.createProxiedFunctions(target);
          proxiedTarget.getInfo = function () {
            const info = target.getInfo.call(this);
            const blocks = info.blocks;
            if (typeof blocks === "object" && blocks !== null) {
              for (const [key, block] of Object.entries(blocks)) {
                if (typeof block === "string" && block.startsWith("---") && block.length !== 3) {
                  blocks[key] = {
                    blockType: BlockType.LABEL,
                    text: block.substring(3),
                  };
                }
              }
            }
            if (!/^[a-z0-9]+$/i.test(info.id)) {
              info.id = info.id.replace(/[^a-zA-Z0-9]/g, '');
            }
            return info;
          };
          window.ScratchExtensions.register(info.name || info.id, { blocks: processed }, proxiedTarget);
          Scratch.vm.runtime[`ext_${info.id}`] = target;
        } catch (e) {
          console.warn("[CCW Polyfill] Failed to register extensions.", e);
        }
      }
    }
  }

  require = this.requireN.bind(this);
  requireN(moduleId?: string | number, moduleFunc?: Function, modules: Record<string, any> = {}) {
    const module = {
      exports: {},
    };

    const requireFn = (id: string | number) => {
      return this.require(id, undefined, modules);
    };

    requireFn.r = (exports: any) => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
    requireFn.d = (exports: any, definition: any, getters?: any) => {
      for (const key in definition) {
        if (!Object.prototype.hasOwnProperty.call(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: typeof definition[key] === "function" && getters
              ? function getModuleExports() {
                return definition[key].call(this);
              }
              : definition[key],
          });
        }
      }
    };
    requireFn.o = (object: any, property: string) =>
      Object.prototype.hasOwnProperty.call(object, property);
    requireFn.n = (module: any) => {
      const getter =
        module && module.__esModule
          ? function getDefault() {
            return module["default"];
          }
          : function getModuleExports() {
            return module;
          };
      requireFn.d(getter, { a: getter });
      return getter;
    };
    requireFn.s = null;
    requireFn.c = this.moduleRegistry || {};
    requireFn.m = modules;
    requireFn.p = "";
    requireFn.i = (x: any) => x;
    requireFn.e = (chunkId: number) => {
      if (this.installedChunks[chunkId] === 0) {
        return Promise.resolve();
      }

      if (!this.installedChunks[chunkId]) {
        this.installedChunks[chunkId] = [
          (resolve: Function) => {
            this.installedChunks[chunkId] = 0;
            resolve();
          }
        ];
      }

      return new Promise((resolve, reject) => {
        this.installedChunks[chunkId].push(resolve);
      });
    };
    requireFn.t = (value: any, mode: number) => {
      if (mode & 1) value = requireFn(value);
      if (mode & 8) return value;
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      const ns = Object.create(null);
      requireFn.r(ns);
      Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      if (mode & 2 && typeof value != 'string') {
        for (const key in value) requireFn.d(ns, key, function (key: string) { return value[key]; }.bind(null, key));
      }
      return ns;
    };
    requireFn.h = "";
    requireFn.w = {};
    requireFn.oe = (err: Error) => { throw err; };
    requireFn.nc = undefined;

    const func = typeof moduleId == "undefined" ? moduleFunc : this.moduleRegistry[moduleId];
    if (typeof func == "function") func(module, module.exports, requireFn);
    return module.exports;
  }

  uuidv4(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  convertBlocks(blocks: any[]): any[] {
    return blocks.map((block) => [
      this.stringifyScratchXBlockType(block),
      block.text == undefined ? "" : block.text,
      block.opcode == undefined ? "_______ccw_polyfill__temp" : block.opcode,
      block.arguments == undefined ? {} : block.arguments,
      block.defaultValue == undefined ? "" : block.defaultValue,
    ]);
  }

  stringifyScratchXBlockType(blockInfo: any): string {
    const { blockType, async = false } = blockInfo;

    if (blockType === Scratch.BlockType.COMMAND) {
      return async ? "w" : "";
    }

    if (blockType === Scratch.BlockType.REPORTER) {
      return async ? "R" : "r";
    }

    if (blockType === Scratch.BlockType.BOOLEAN) {
      return "b";
    }

    if (blockType === Scratch.BlockType.HAT) {
      return "h";
    }

    return async ? "R" : "r";
  }

  getAllFunctions(target: any): Map<string, Function> {
    const functions = new Map<string, Function>();
    let currentObj = target;

    while (currentObj && currentObj !== Object.prototype) {
      const props = Object.getOwnPropertyNames(currentObj);
      for (const prop of props) {
        if (prop !== "constructor" && typeof currentObj[prop] === "function") {
          if (!functions.has(prop)) {
            functions.set(prop, currentObj[prop]);
          }
        }
      }
      currentObj = Object.getPrototypeOf(currentObj);
    }

    return functions;
  }

  createProxiedFunctions(target: any): any {
    const proxiedObj: Record<string, Function> = {};
    const allFunctions = this.getAllFunctions(target);

    allFunctions.forEach((func, prop) => {
      proxiedObj[prop] = (...args: any[]) => func.call(target, ...args);
    });

    return proxiedObj;
  }
}