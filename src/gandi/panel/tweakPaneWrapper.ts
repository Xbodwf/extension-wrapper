import { Pane, BindingApi } from 'tweakpane';
import { ColorUtils, RGB } from './Color';

export class TweakpaneManager {
    public pane: Pane;

    constructor(title: string = 'Parameters') {
        this.pane = new Pane({ title });
        this.injectStyles();
    }

    /**
     * 模仿原混淆代码中的样式注入逻辑
     */
    private injectStyles(): void {
        const STYLE_ID = 'scratch-tweakpane-style';
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        // 提取自 index.js 末尾混淆的 CSS 字符串
        style.textContent = `
            /**
 * Tweakpane Extension Custom Theme
 * 提取自原 index.js 混淆字符串
 */

:root {
    --bs-br: 4px;       /* Border Radius */
    --cnt-vp: 8px;      /* Content Vertical Padding */
    --tp-base-font: 'Helvetica', 'Arial', sans-serif;
}

/* 核心容器圆角处理 */
.tp-rotv {
    border-radius: var(--bs-br);
    overflow: hidden;
}

.tp-rotv_c > .tp-fldv.tp-v-lst > .tp-fldv_c {
    border-bottom-left-radius: var(--bs-br);
    border-bottom-right-radius: var(--bs-br);
}

.tp-rotv_c > .tp-fldv.tp-v-lst > .tp-fldv_i {
    border-bottom-left-radius: var(--bs-br);
}

/* 文件夹折叠状态下的样式 */
.tp-rotv_c > .tp-fldv.tp-v-lst:not(.tp-fldv-expanded) > .tp-fldv_b {
    border-bottom-left-radius: var(--bs-br);
    border-bottom-right-radius: var(--bs-br);
}

.tp-rotv_c > .tp-fldv.tp-v-lst.tp-fldv-expanded > .tp-fldv_b {
    transition-delay: 0s;
    transition-duration: 0s;
}

.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded) > .tp-fldv_b {
    border-bottom-right-radius: var(--bs-br);
}

/* 顶部第一个元素的边距补偿 */
.tp-rotv.tp-rotv-not .tp-rotv_c > .tp-fldv.tp-v-fst {
    margin-top: calc(-1 * var(--cnt-vp));
}

.tp-rotv.tp-rotv-not .tp-rotv_c > .tp-fldv.tp-v-fst > .tp-fldv_b {
    border-top-left-radius: var(--bs-br);
    border-top-right-radius: var(--bs-br);
}

/* 选项卡 (Tab) 样式 */
.tp-rotv_c > .tp-tabv.tp-v-lst > .tp-tabv_c {
    border-bottom-left-radius: var(--bs-br);
    border-bottom-right-radius: var(--bs-br);
}

.tp-rotv_c > .tp-tabv.tp-v-fst > .tp-tabv_b {
    border-top-left-radius: var(--bs-br);
    border-top-right-radius: var(--bs-br);
}

        `;
        document.head.appendChild(style);
    }

    /**
     * 这是一个典型的 Scratch 数据绑定封装
     * 使用 Scratch.Cast 确保输入值符合 Scratch 规范
     */
    addBindingWithCast(target: Record<string, unknown>, key: string, label: string): BindingApi<unknown, unknown> {
        return this.pane.addBinding(target, key, { label }).on('change', (ev) => {
            // 确保写回的数据经过 Scratch 类型转换
            target[key] = Scratch.Cast.toString(ev.value);
        });
    }

    /**
     * 颜色绑定处理
     */
    addColorBinding(target: Record<string, unknown>, key: string, label: string): void {
        this.pane.addBinding(target, key, {
            label,
            view: 'color'
        }).on('change', (ev) => {
            const rgb = ev.value as RGB;
            // 转换为 Scratch 可能需要的十六进制或十进制
            target[key] = ColorUtils.decimalToHex((rgb.r << 16) | (rgb.g << 8) | rgb.b);
        });
    }
}
