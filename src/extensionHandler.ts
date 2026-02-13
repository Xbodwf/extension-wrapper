export function handleVMwithExt(info: any,target: any) {
  Scratch.vm.runtime[`ext_${info.id}`] = info;
  //Scratch.vm.runtime._blockInfo.push(info);
}
