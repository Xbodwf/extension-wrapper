/**
 * Scratch VM Runtime to project.json Converter
 * TypeScript class to convert Scratch VM runtime state to project.json format
 */

import { VirtualMachine } from './def/VM';

export class VMToJSON {
  /**
   * Convert Scratch VM runtime to project.json format
   * @param vm - The Scratch VM instance
   * @returns project.json compatible object
   */
  convert(vm: VirtualMachine): any {
    const targets = vm.runtime.targets || [];
    const projectTargets = targets.map((target: any) => this.#convertTarget(target));

    const project = {
      targets: projectTargets,
      monitors: this.#convertMonitors(vm.runtime._monitorState),
      extensions: Array.from(vm.runtime.extensionManager._loadedExtensions.keys()),
      meta: {
        semver: "3.0.0",
        vm: vm.runtime.runtimeOptions?.version || "0.2.0",
        agent: "Mozilla/5.0 (Scratch 3.0)",
        platform: {
          name: "CCW Polyfill Generator",
        },
      },
    };

    return project;
  }

  /**
   * Save project as SB3 file
   * @param vm - The Scratch VM instance
   * @param _options - Save options
   * @returns Promise with the SB3 file data
   */
  async saveProjectSb3(vm: VirtualMachine, _options: any = {}): Promise<any> {
    const projectJson = this.convert(vm);
    const fileHandle = await (window as any).showSaveFilePicker({
      suggestedName: "project.sb3",
      types: [
        {
          description: "Scratch 3 Project",
          accept: {
            "application/x.scratch.sb3": [".sb3"],
          },
        },
      ],
    });
    
    const writable = await fileHandle.createWritable();
    await writable.write(JSON.stringify(projectJson));
    await writable.close();
    
    return projectJson;
  }

  // Private helper methods
  #convertTarget(target: any): any {
    return {
      isStage: target.isStage,
      name: target.sprite.name,
      variables: this.#convertVariables(target.variables),
      lists: this.#convertLists(target.lists),
      broadcasts: this.#convertBroadcasts(target.broadcasts),
      blocks: this.#convertBlocks(target.blocks),
      comments: this.#convertComments(target.comments),
      currentCostume: target.currentCostume,
      costumes: this.#convertCostumes(target.sprite.costumes),
      sounds: this.#convertSounds(target.sprite.sounds),
      volume: target.volume,
      layerOrder: target.layerOrder,
      tempo: target.tempo,
      videoTransparency: target.videoTransparency,
      videoState: target.videoState,
      textToSpeechLanguage: target.textToSpeechLanguage,
      visible: target.visible,
      x: target.x,
      y: target.y,
      size: target.size,
      direction: target.direction,
      draggable: target.draggable,
      rotationStyle: target.rotationStyle,
    };
  }

  #convertVariables(variables: any): any {
    const result: any = {};
    for (const [id, variable] of Object.entries(variables)) {
      result[id] = [
        (variable as any).name,
        (variable as any).value,
      ];
    }
    return result;
  }

  #convertLists(lists: any): any {
    const result: any = {};
    for (const [id, list] of Object.entries(lists)) {
      result[id] = [
        (list as any).name,
        [...(list as any).value],
      ];
    }
    return result;
  }

  #convertBroadcasts(broadcasts: any): any {
    const result: any = {};
    for (const [id, broadcast] of Object.entries(broadcasts)) {
      result[id] = broadcast;
    }
    return result;
  }

  #convertBlocks(blocks: any): any {
    const result: any = {};
    for (const [id, block] of Object.entries(blocks)) {
      if (!block) continue;
      
      result[id] = {
        opcode: (block as any).opcode,
        next: (block as any).next,
        parent: (block as any).parent,
        inputs: this.#convertInputs((block as any).inputs),
        fields: this.#convertFields((block as any).fields),
        shadow: (block as any).shadow,
        topLevel: (block as any).topLevel,
        x: (block as any).x,
        y: (block as any).y,
      };
    }
    return result;
  }

  #convertInputs(inputs: any): any {
    const result: any = {};
    for (const [name, input] of Object.entries(inputs)) {
      result[name] = [...(input as any)];
    }
    return result;
  }

  #convertFields(fields: any): any {
    const result: any = {};
    for (const [name, field] of Object.entries(fields)) {
      result[name] = [...(field as any)];
    }
    return result;
  }

  #convertComments(comments: any): any {
    const result: any = {};
    for (const [id, comment] of Object.entries(comments)) {
      if (!comment) continue;
      
      result[id] = {
        blockId: (comment as any).blockId,
        x: (comment as any).x,
        y: (comment as any).y,
        width: (comment as any).width,
        height: (comment as any).height,
        minimized: (comment as any).minimized,
        text: (comment as any).text,
      };
    }
    return result;
  }

  #convertCostumes(costumes: any): any[] {
    return costumes.map((costume: any) => ({
      assetId: costume.assetId,
      name: costume.name,
      bitmapResolution: costume.bitmapResolution,
      md5ext: costume.md5,
      dataFormat: costume.dataFormat,
      rotationCenterX: costume.rotationCenterX,
      rotationCenterY: costume.rotationCenterY,
    }));
  }

  #convertSounds(sounds: any): any[] {
    return sounds.map((sound: any) => ({
      assetId: sound.assetId,
      name: sound.name,
      dataFormat: sound.dataFormat,
      format: sound.format,
      rate: sound.rate,
      sampleCount: sound.sampleCount,
      md5ext: sound.md5,
    }));
  }

  #convertMonitors(monitors: any): any[] {
    return monitors.map((monitor: any) => ({
      id: monitor.id,
      mode: monitor.mode,
      opcode: monitor.opcode,
      params: monitor.params,
      spriteName: monitor.spriteName,
      value: monitor.value,
      width: monitor.width,
      height: monitor.height,
      x: monitor.x,
      y: monitor.y,
      visible: monitor.visible,
      sliderMin: monitor.sliderMin,
      sliderMax: monitor.sliderMax,
      isDiscrete: monitor.isDiscrete,
    }));
  }
}