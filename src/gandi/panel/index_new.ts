import { TweakpaneManager } from './tweakPaneWrapper';

/**
 * 对应 chunk 中的 8392 入口
 * 直接注册webpack chunk到全局
 */
export function register(): void {
    (self.webpackChunkscratch_extensions = self.webpackChunkscratch_extensions || []).push([
        [8392],
        {
            // 83392: Cast 模块
            83392: (t: any, e: any, n: any) => {
                const i = n(29734);
                class r {
                    static toNumber(t: any) {
                        if ("number" == typeof t) return Number.isNaN(t) ? 0 : t;
                        const e = Number(t);
                        return Number.isNaN(e) ? 0 : e;
                    }
                    static toBoolean(t: any) {
                        return "boolean" == typeof t ? t : "string" == typeof t ? "" !== t && "0" !== t && "false" !== t.toLowerCase() : Boolean(t);
                    }
                    static toString(t: any) {
                        return String(t);
                    }
                    static toRgbColorList(t: any) {
                        const e = r.toRgbColorObject(t);
                        return [e.r, e.g, e.b];
                    }
                    static toRgbColorObject(t: any) {
                        let e;
                        return "string" == typeof t && "#" === t.substring(0, 1) ? (e = i.hexToRgb(t), e || (e = { r: 0, g: 0, b: 0, a: 255 })) : e = i.decimalToRgb(r.toNumber(t)), e;
                    }
                    static isWhiteSpace(t: any) {
                        return null === t || "string" == typeof t && 0 === t.trim().length;
                    }
                    static compare(t: any, e: any) {
                        let n = Number(t), s = Number(e);
                        if (0 === n && r.isWhiteSpace(t) ? n = NaN : 0 === s && r.isWhiteSpace(e) && (s = NaN), isNaN(n) || isNaN(s)) {
                            const n = String(t).toLowerCase(), s = String(e).toLowerCase();
                            return n < s ? -1 : n > s ? 1 : 0;
                        }
                        return n === 1 / 0 && s === 1 / 0 || n === -1 / 0 && s === -1 / 0 ? 0 : n - s;
                    }
                    static isInt(t: any) {
                        return "number" == typeof t ? !!isNaN(t) || t === parseInt(t, 10) : "boolean" == typeof t || "string" == typeof t && t.indexOf(".") < 0;
                    }
                    static get LIST_INVALID() {
                        return "INVALID";
                    }
                    static get LIST_ALL() {
                        return "ALL";
                    }
                    static toListIndex(t: any, e: any, n: any) {
                        if ("number" != typeof t) {
                            if ("all" === t) return n ? r.LIST_ALL : r.LIST_INVALID;
                            if ("last" === t) return e > 0 ? e : r.LIST_INVALID;
                            if ("random" === t || "any" === t) return e > 0 ? 1 + Math.floor(Math.random() * e) : r.LIST_INVALID;
                        }
                        return (t = Math.floor(r.toNumber(t))) < 1 || t > e ? r.LIST_INVALID : t;
                    }
                }
                t.exports = r;
            },
            // 29734: ColorUtils 模块
            29734: (t: any) => {
                class e {
                    static get RGB_BLACK() {
                        return { r: 0, g: 0, b: 0 };
                    }
                    static get RGB_WHITE() {
                        return { r: 255, g: 255, b: 255 };
                    }
                    static decimalToHex(t: any) {
                        t < 0 && (t += 16777216);
                        let e = Number(t).toString(16);
                        return "#" + "000000".substring(0, 6 - e.length) + e;
                    }
                    static decimalToRgb(t: any) {
                        return { r: (t >> 16) & 255, g: (t >> 8) & 255, b: 255 & t, a: (t >> 24 & 255) || 255 };
                    }
                    static hexToRgb(t: any) {
                        const e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (t: any, e: any, n: any, i: any) => e + e + n + n + i + i);
                        const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                        return n ? { r: parseInt(n[1], 16), g: parseInt(n[2], 16), b: parseInt(n[3], 16) } : null;
                    }
                    static hsvToRgb(t: any) {
                        const e = (t.h % 360 + 360) % 360,
                            n = Math.floor(e / 60),
                            i = e / 60 - n,
                            r = t.v * (1 - t.s),
                            s = t.v * (1 - t.s * i),
                            o = t.v * (1 - t.s * (1 - i));
                        let a = 0, h = 0, c = 0;
                        switch (n) {
                            case 0:
                                a = t.v, h = o, c = r;
                                break;
                            case 1:
                                a = s, h = t.v, c = r;
                                break;
                            case 2:
                                a = r, h = t.v, c = o;
                                break;
                            case 3:
                                a = r, h = s, c = t.v;
                                break;
                            case 4:
                                a = o, h = r, c = t.v;
                                break;
                            default:
                                a = t.v, h = r, c = s;
                        }
                        return { r: Math.floor(255 * a), g: Math.floor(255 * h), b: Math.floor(255 * c) };
                    }
                    static rgbToHsv(t: any) {
                        const e = t.r / 255, n = t.g / 255, i = t.b / 255,
                            r = Math.max(e, n, i),
                            s = Math.min(e, n, i),
                            o = r - s;
                        let a = 0, h = 0;
                        if (o !== 0) {
                            h = o / r;
                            switch (r) {
                                case e:
                                    a = ((n - i) / o) * 60;
                                    break;
                                case n:
                                    a = (2 + (i - e) / o) * 60;
                                    break;
                                case i:
                                    a = (4 + (e - n) / o) * 60;
                            }
                            a < 0 && (a += 360);
                        }
                        return { h: a, s: h, v: r };
                    }
                    static rgbToHex(t: any) {
                        return "#" + ((1 << 24) + (t.r << 16) + (t.g << 8) + t.b).toString(16).slice(1);
                    }
                }
                t.exports = e;
            },
            // 62264: TweakpaneManager 模块
            62264: (t: any) => {
                t.exports = {default: TweakpaneManager};
            }
        }
    ]);
}
