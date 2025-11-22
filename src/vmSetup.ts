/**
 * VM Setup for CCW Extension Polyfill
 * Sets up the Scratch VM with CCW polyfill features
 */

import { VMToJSON } from './vmToJson';
import { showConfirm, addModalStyles } from './ui';
import { translate } from './l10n';

/**
 * Sets up the Scratch VM with CCW polyfill features
 * @param vm - The Scratch VM instance
 * @param vmToJSON - The VMToJSON converter instance
 */
export function setupVM(vm: any, vmToJSON: VMToJSON): void {
  // Add CCW polyfill styles
  addModalStyles();
  
  // Add CCW polyfill features to VM
  setupVMFeatures(vm, vmToJSON);
}

/**
 * Adds CCW polyfill styles to the document
 */
function addPolyfillStyles(): void {
  const style = document.createElement('style');
  style.textContent = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .modal-overlay.active {
      opacity: 1;
    }
    
    .modal-container {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      width: 80%;
      max-width: 500px;
    }
    
    .modal-header {
      margin-bottom: 15px;
    }
    
    .modal-title {
      margin: 0;
      font-size: 18px;
    }
    
    .modal-body {
      margin-bottom: 20px;
    }
    
    .modal-footer {
      display: flex;
      justify-content: flex-end;
    }
    
    .modal-btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
    }
    
    .modal-btn.cancel {
      background-color: #e0e0e0;
    }
    
    .modal-btn.confirm {
      background-color: #4CAF50;
      color: white;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Sets up CCW polyfill features on the VM
 * @param vm - The Scratch VM instance
 * @param vmToJSON - The VMToJSON converter instance
 */
function setupVMFeatures(vm: any, vmToJSON: VMToJSON): void {
  // Add project export functionality
  vm.exportProject = async () => {
    try {
      return await vmToJSON.saveProjectSb3(vm);
    } catch (e) {
      console.error('[CCW Polyfill] Failed to export project:', e);
      return null;
    }
  };

  vm.getFormatMessage = (fm: any) => {
    return (i: any) =>
      typeof fm[Scratch.translate.language][i.id] == "undefined" ? i["default"] : fm[Scratch.translate.language][i.id];
  };
  vm.runtime.getFormatMessage = vm.getFormatMessage;
  if (typeof vm.toJSON != "function") vm.toJSON = vmToJSON.convert.bind(vmToJSON, vm);
  if (typeof vm.saveProjectSb3 != "function")
    vm.saveProjectSb3 = vmToJSON.saveProjectSb3.bind(vmToJSON, vm);
  vm.ccwPolyfill = {
    convert: vmToJSON.convert.bind(vmToJSON, vm),
    save: vmToJSON.saveProjectSb3.bind(vmToJSON, vm),
  };
  vm.renderer.layerManager = { rootFolder: "" };
  vm.runtime.ccwAPI = {
    commentWithStageSnapshot() {
      return new Promise((resolve) => {
        resolve(
          showConfirm(
            translate("ccwpolyfill.screenshotCommentMessage"),
            translate("ccwpolyfill.noticeTitle"),
            translate("ccwpolyfill.okMeow"),
            translate("ccwpolyfill.meowQuestion"),
            () => {
              alert(translate("ccwpolyfill.meowAlert"));
            },
          ),
        );
      });
    },
    getCoinCount() {
      return new Promise((resolve) => {
        resolve(0);
      });
    },
    getDeviceType() {
      return new Promise((resolve) => {
        resolve("PC");
      });
    },
    getExtensionURLById(id: string) {
      return new Promise((resolve) => {
        resolve("");
      });
    },
    getOnlineExtensionsConfig() {
      return new Promise((resolve) => {
        resolve({});
      });
    },
    getProjectDonateRanking() {
      return new Promise((resolve) => {
        resolve({
          curUserDonatedRecord: {
            bucks: 0,
            name: "",
            oid: "",
            avatar: "",
          },
          rankingList: undefined,
        });
      });
    },
    getProjectSb3Id() {
      return "";
    },
    getProjectStats() {
      return new Promise((resolve) => {
        resolve({
          commentCount: 0,
          favoriteCount: 0,
          likeCount: 0,
          totalBucks: 0,
        });
      });
    },
    getProjectUUID() {
      return "";
    },
    getUserInfo() {
      return new Promise((resolve) => {
        resolve({
          userId: "",
          userName: "",
          uuid: "",
          oid: "",
          avatar: "",
          constellation: -1,
          following: 0,
          followers: 0,
          liked: 0,
          gender: -1,
          pendant: "",
          reputationScore: {
            rank: "EXCELLENT",
            score: 100,
            studentOid: "",
          },
        });
      });
    },
    getOpenVM() {
      return vm;
    },
    isFavoriteProject() {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
    isFollowed() {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
    isLikedProject() {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
    isMyFans() {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
    preActionInterceptor() { },
    redirect() { },
    requestCoins() { },
    requestFollow() { },
    sendPlayEventCode() { },
    setAvatar() { },
    showShare() { },
    uploadAssetToCloud(M: any, t: any) { },
  };
}