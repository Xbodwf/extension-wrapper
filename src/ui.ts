/**
 * UI utilities for CCW Extension Polyfill
 */

import { t } from './l10n'; 

/**
 * Shows a confirmation dialog with custom buttons
 * @param message The message to display
 * @param title The title of the dialog (defaults to "Notice")
 * @param cancelText The text for the cancel button (defaults to "Cancel")
 * @param confirmText The text for the confirm button (defaults to "Accept")
 * @param onConfirm Callback function when confirmed
 * @param onCancel Callback function when canceled
 */
export function showConfirm(
  message: string, 
  title: string = t('ccwpolyfill.noticeTitle'), 
  cancelText: string = t('ccwpolyfill.cancelBtn'), 
  confirmText: string = t('ccwpolyfill.confirmBtn'),
  onConfirm?: () => void, 
  onCancel?: () => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const container = document.createElement("div");
  container.className = "modal-container";

  container.innerHTML = `
    <div class="modal-header">
      <h3 class="modal-title">${title}</h3>
    </div>
    <div class="modal-body">
      ${message}
    </div>
    <div class="modal-footer">
      <button class="modal-btn cancel">${cancelText}</button>
      <button class="modal-btn confirm">${confirmText}</button>
    </div>
  `;

  overlay.appendChild(container);
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add("active"), 10);

  const cancelBtn = container.querySelector(".cancel") as HTMLButtonElement;
  cancelBtn.addEventListener("click", () => {
    closeModal(overlay);
    onCancel && onCancel();
  });

  const confirmBtn = container.querySelector(".confirm") as HTMLButtonElement;
  confirmBtn.addEventListener("click", () => {
    closeModal(overlay);
    onConfirm && onConfirm();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal(overlay);
      onCancel && onCancel();
    }
  });

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal(overlay);
      onCancel && onCancel();
      document.removeEventListener("keydown", handleEsc);
    }
  };
  document.addEventListener("keydown", handleEsc);

  function closeModal(overlay: HTMLElement): void {
    overlay.classList.remove("active");
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  }
}

export function addModalStyles() {
    const css = `
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 500px;
    transform: translateY(-20px);
    transition: all 0.3s ease;
}

.modal-overlay.active .modal-container {
    transform: translateY(0);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.modal-title {
    margin: 0;
    font-size: 1.5em;
    color: #333;
}

.modal-body {
    margin-bottom: 20px;
    color: #555;
    line-height: 1.5;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.modal-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.2s ease;
}

.modal-btn.cancel {
    background-color: #ccc;
    color: #333;
}

.modal-btn.cancel:hover {
    background-color: #bbb;
}

.modal-btn.confirm {
    background-color: #007bff;
    color: white;
}

.modal-btn.confirm:hover {
    background-color: #0056b3;
}
    `;
    const styleElement = document.createElement("style");
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}