import type { RGB } from './Color';
import { ColorUtils } from './Color';

export class Cast {
    /**
     * 将值转换为数字，处理 NaN 为 0
     */
    static toNumber(val: unknown): number {
        if (typeof val === "number") {
            return Number.isNaN(val) ? 0 : val;
        }
        const n = Number(val);
        return Number.isNaN(n) ? 0 : n;
    }

    /**
     * Scratch 特有的布尔逻辑：
     * 字符串 "0"、"false" 以及空字符串 "" 均为 false
     */
    static toBoolean(val: unknown): boolean {
        if (typeof val === "boolean") return val;
        if (typeof val === "string") {
            const lower = val.toLowerCase();
            return val !== "" && val !== "0" && lower !== "false";
        }
        return Boolean(val);
    }

    static toString(val: unknown): string {
        return String(val);
    }

    /**
     * 将输入转换为 RGB 列表 [r, g, b]
     */
    static toRgbColorList(val: unknown): number[] {
        const rgb = this.toRgbColorObject(val);
        return [rgb.r, rgb.g, rgb.b];
    }

    /**
     * 将输入转换为 RGB 对象
     */
    static toRgbColorObject(val: unknown): RGB {
        if (typeof val === "string" && val.startsWith("#")) {
            return ColorUtils.hexToRgb(val) || { r: 0, g: 0, b: 0, a: 255 };
        }
        return ColorUtils.decimalToRgb(this.toNumber(val));
    }

    /**
     * 检查是否为空白字符
     */
    static isWhiteSpace(val: unknown): boolean {
        return val === null || (typeof val === "string" && val.trim().length === 0);
    }

    /**
     * Scratch 比较逻辑：优先尝试数字比较，失败后转为字符串比较
     */
    static compare(v1: unknown, v2: unknown): number {
        let n1 = Number(v1);
        let n2 = Number(v2);

        if (n1 === 0 && this.isWhiteSpace(v1)) n1 = NaN;
        if (n2 === 0 && this.isWhiteSpace(v2)) n2 = NaN;

        if (isNaN(n1) || isNaN(n2)) {
            const s1 = String(v1).toLowerCase();
            const s2 = String(v2).toLowerCase();
            return s1 < s2 ? -1 : (s1 > s2 ? 1 : 0);
        }
        
        // 处理 Infinity 比较
        if ((n1 === Infinity && n2 === Infinity) || (n1 === -Infinity && n2 === -Infinity)) {
            return 0;
        }
        
        return n1 - n2;
    }

    /**
     * 检查是否为整数
     */
    static isInt(val: unknown): boolean {
        if (typeof val === "number") {
            return !isNaN(val) && val === parseInt(val.toString(), 10);
        }
        if (typeof val === "boolean") return true;
        if (typeof val === "string") {
            return val.indexOf(".") < 0;
        }
        return false;
    }

    /**
     * 列表索引常量
     */
    static get LIST_INVALID() {
        return "INVALID";
    }

    static get LIST_ALL() {
        return "ALL";
    }

    /**
     * 将输入转换为列表索引
     */
    static toListIndex(input: unknown, listLength: number, allowAll: boolean = false): string | number {
        if (typeof input !== "number") {
            const str = String(input).toLowerCase();
            if (str === "all") return allowAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
            if (str === "last") return listLength > 0 ? listLength : Cast.LIST_INVALID;
            if (str === "random" || str === "any") {
                return listLength > 0 ? 1 + Math.floor(Math.random() * listLength) : Cast.LIST_INVALID;
            }
        }
        
        const index = Math.floor(this.toNumber(input));
        return (index < 1 || index > listLength) ? Cast.LIST_INVALID : index;
    }
}
