import { ExtensionLoader } from "src/extensionLoader";

interface ScratchExtensions {
  register: (id: string, descripter: any, functions: any) => void;
  getStatus: (id: string) => any;
}

type _BlockType = {
    "BOOLEAN": "Boolean",
    "BUTTON": "button",
    "LABEL": "label",
    "COMMAND": "command",
    "CONDITIONAL": "conditional",
    "EVENT": "event",
    "HAT": "hat",
    "LOOP": "loop",
    "REPORTER": "reporter",
    "XML": "xml"
}

enum BlockType {
    BOOLEAN = "Boolean",
    BUTTON = "button",
    LABEL = "label",
    COMMAND = "command",
    CONDITIONAL = "conditional",
    EVENT = "event",
    HAT = "hat",
    LOOP = "loop",
    REPORTER = "reporter",
    XML = "xml"
}


declare global {
  interface Window {
    webpackChunkscratch_extensions: ExtensionLoader;
    ScratchExtensions: ScratchExtensions;
    tempExt: {
      Extension: Scratch.Extension;
      info?: {
        name?: string;
        insetIconURL?: string;
        extensionId?: string;
        iconURL?: string;
        disabled?: boolean;
        featured?: boolean;
        description?: string;
        collaborator?: string;

      },
      l10n?: {
        [key: string]: {
          [key: string]: string;
        }
      }
    }
  }
}


export { BlockType,_BlockType }