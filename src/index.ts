/**
 * CCW Extension Polyfill
 * Author: Xbodwf(https://github.com/xbodwf)
 * Refactored into modular structure
 */

// Import components

/// <reference path="./def/self.ts" />

import { BlockType } from './def/self';
import { ExtensionLoader } from './extensionLoader';
import { VMToJSON } from './vmToJson';
import { showConfirm } from './ui';
import { setupVM, createVMProxy } from './vmSetup';
import { register as PanelReg} from './gandi/panel/index';
import { t } from './l10n';
import { VirtualMachine } from './def/VM';

; (function (sc) {
  if (sc.extensions.unsandboxed === false) {
    throw new Error('This extension must run unsandboxed');
  }

  /**
   * CCW Polyfill Extension
   * Provides compatibility with CCW extensions in Scratch
   */
  class CCWPolyfill implements Scratch.Extension {
    public extensionLoader: ExtensionLoader;
    private vmToJSON: VMToJSON;
    private vm: VirtualMachine;

    constructor(vm: VirtualMachine) {
      this.vm = vm;
      this.extensionLoader = new ExtensionLoader();
      this.vmToJSON = new VMToJSON();

      // Setup VM with CCW polyfill features
      setupVM(this.vm, this.vmToJSON);
      this.setTempext(this);
      // Setup extension loader
      if (typeof window.webpackChunkscratch_extensions === "undefined") {
        window.webpackChunkscratch_extensions = this.extensionLoader;
      }
      PanelReg();
    }

    getInfo() {
      return {
        id: 'extensionWrapper',
        name: 'Wrapper',
        color1: "#4285F4",
        color2: "#2855C1",
        blocks: [
          {
            opcode: 'extensionKeeper',
            blockType: sc.BlockType.COMMAND,
            text: t('ccwpolyfill.extensionKeeper')
          }
        ]
      };
    }

    extensionKeeper() {
      return undefined;
    }

    setTempext(thisObj) {

      // Define window.tempExt for extension registration
      if (typeof window.tempExt == "undefined") {
        let _tempExtValue: any = {};
        Object.defineProperty(window, "tempExt", {
          get() {
            return _tempExtValue;
          },
          set(newValue) {
            if (typeof newValue != "undefined" && typeof newValue.Extension == "function") {
              _tempExtValue = newValue;
              let target: any, info: any;
              try {
                const vmProxy = createVMProxy(thisObj.vm);
                target = new newValue.Extension(vmProxy);
                const proxiedTarget = thisObj.extensionLoader.createProxiedFunctions(target);
                info = target.getInfo();
                proxiedTarget.getInfo = () => {
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
                Scratch.extensions.register(proxiedTarget); //must use Scratch instead of sc
                this.vm.runtime[`ext_${info.id}`] = target;
              } catch (e) {
                console.warn("[CCW Polyfill] First Method failed...", e);
                try {
                  const processed = thisObj.extensionLoader.convertBlocks(info.blocks);
                  target._______ccw_polyfill__temp = () => "__ccw_polyfill";
                  const proxiedTarget = thisObj.extensionLoader.createProxiedFunctions(target);
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
                  self.ScratchExtensions.register(info.name || info.id, { blocks: processed }, proxiedTarget);
                  thisObj.vm.runtime[`ext_${info.id}`] = target;
                } catch (e) {
                  console.warn("[CCW Polyfill] Failed to register extensions.", e);
                }
              }
            } else {
              return;
            }
          },
          enumerable: false,
          configurable: true,
        });
      }
    }
  }




  sc.extensions.register(new CCWPolyfill(sc.vm as VirtualMachine));
})(Scratch);
