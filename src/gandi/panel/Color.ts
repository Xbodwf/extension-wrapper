export interface RGB {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export interface HSV {
    h: number;
    s: number;
    v: number;
}

export class ColorUtils {
    /**
     * 预定义颜色常量
     */
    static get RGB_BLACK(): RGB {
        return { r: 0, g: 0, b: 0 };
    }

    static get RGB_WHITE(): RGB {
        return { r: 255, g: 255, b: 255 };
    }

    static decimalToHex(decimal: number): string {
        let d = decimal;
        if (d < 0) d += 0xFFFFFF + 1;
        const hex = Number(d).toString(16);
        return `#${'000000'.substring(0, 6 - hex.length)}${hex}`;
    }

    static decimalToRgb(decimal: number): RGB {
        return {
            r: (decimal >> 16) & 255,
            g: (decimal >> 8) & 255,
            b: decimal & 255,
            a: (decimal >> 24 & 255) || 255
        };
    }

    static hexToRgb(hex: string): RGB | null {
        const fullHex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, 
            (_, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    static hsvToRgb({ h, s, v }: HSV): RGB {
        const _h = (h % 360 + 360) % 360;
        const i = Math.floor(_h / 60);
        const f = _h / 60 - i;
        const p = v * (1 - s);
        const q = v * (1 - s * f);
        const t = v * (1 - s * (1 - f));
        let r = 0, g = 0, b = 0;
        switch (i) {
            case 0: [r, g, b] = [v, t, p]; break;
            case 1: [r, g, b] = [q, v, p]; break;
            case 2: [r, g, b] = [p, v, t]; break;
            case 3: [r, g, b] = [p, q, v]; break;
            case 4: [r, g, b] = [t, p, v]; break;
            default: [r, g, b] = [v, p, q];
        }
        return { r: Math.floor(r * 255), g: Math.floor(g * 255), b: Math.floor(b * 255) };
    }

    /**
     * RGB 转 HSV
     */
    static rgbToHsv({ r, g, b }: RGB): HSV {
        const _r = r / 255;
        const _g = g / 255;
        const _b = b / 255;
        
        const max = Math.max(_r, _g, _b);
        const min = Math.min(_r, _g, _b);
        const delta = max - min;
        
        let h = 0;
        let s = 0;
        const v = max;
        
        if (delta !== 0) {
            s = delta / max;
            
            if (_r === max) {
                h = (_g - _b) / delta;
            } else if (_g === max) {
                h = 2 + (_b - _r) / delta;
            } else {
                h = 4 + (_r - _g) / delta;
            }
            
            h *= 60;
            if (h < 0) h += 360;
        }
        
        return { h, s, v };
    }

    /**
     * RGB 转十六进制
     */
    static rgbToHex({ r, g, b }: RGB): string {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }
}
