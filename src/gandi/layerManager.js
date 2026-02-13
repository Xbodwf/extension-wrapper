(self.webpackChunkscratch_extensions = self.webpackChunkscratch_extensions || []).push([[5777], {
    80673: e => {
        e.exports = {
            ANGLE: "angle",
            BOOLEAN: "Boolean",
            COLOR: "color",
            NUMBER: "number",
            STRING: "string",
            MATRIX: "matrix",
            NOTE: "note",
            IMAGE: "image"
        }
    }
    ,
    29122: e => {
        e.exports = {
            BOOLEAN: "Boolean",
            BUTTON: "button",
            COMMAND: "command",
            CONDITIONAL: "conditional",
            EVENT: "event",
            HAT: "hat",
            LOOP: "loop",
            REPORTER: "reporter"
        }
    }
    ,
    83392: (e, t, r) => {
        const a = r(29734);
        class n {
            static toNumber(e) {
                if ("number" == typeof e)
                    return Number.isNaN(e) ? 0 : e;
                const t = Number(e);
                return Number.isNaN(t) ? 0 : t
            }
            static toBoolean(e) {
                return "boolean" == typeof e ? e : "string" == typeof e ? "" !== e && "0" !== e && "false" !== e.toLowerCase() : Boolean(e)
            }
            static toString(e) {
                return String(e)
            }
            static toRgbColorList(e) {
                const t = n.toRgbColorObject(e);
                return [t.r, t.g, t.b]
            }
            static toRgbColorObject(e) {
                let t;
                return "string" == typeof e && "#" === e.substring(0, 1) ? (t = a.hexToRgb(e),
                t || (t = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                })) : t = a.decimalToRgb(n.toNumber(e)),
                t
            }
            static isWhiteSpace(e) {
                return null === e || "string" == typeof e && 0 === e.trim().length
            }
            static compare(e, t) {
                let r = Number(e)
                  , a = Number(t);
                if (0 === r && n.isWhiteSpace(e) ? r = NaN : 0 === a && n.isWhiteSpace(t) && (a = NaN),
                isNaN(r) || isNaN(a)) {
                    const r = String(e).toLowerCase()
                      , a = String(t).toLowerCase();
                    return r < a ? -1 : r > a ? 1 : 0
                }
                return r === 1 / 0 && a === 1 / 0 || r === -1 / 0 && a === -1 / 0 ? 0 : r - a
            }
            static isInt(e) {
                return "number" == typeof e ? !!isNaN(e) || e === parseInt(e, 10) : "boolean" == typeof e || "string" == typeof e && e.indexOf(".") < 0
            }
            static get LIST_INVALID() {
                return "INVALID"
            }
            static get LIST_ALL() {
                return "ALL"
            }
            static toListIndex(e, t, r) {
                if ("number" != typeof e) {
                    if ("all" === e)
                        return r ? n.LIST_ALL : n.LIST_INVALID;
                    if ("last" === e)
                        return t > 0 ? t : n.LIST_INVALID;
                    if ("random" === e || "any" === e)
                        return t > 0 ? 1 + Math.floor(Math.random() * t) : n.LIST_INVALID
                }
                return (e = Math.floor(n.toNumber(e))) < 1 || e > t ? n.LIST_INVALID : e
            }
        }
        e.exports = n
    }
    ,
    29734: e => {
        class t {
            static get RGB_BLACK() {
                return {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }
            static get RGB_WHITE() {
                return {
                    r: 255,
                    g: 255,
                    b: 255
                }
            }
            static decimalToHex(e) {
                e < 0 && (e += 16777216);
                let t = Number(e).toString(16);
                return t = `#${"000000".substr(0, 6 - t.length)}${t}`,
                t
            }
            static decimalToRgb(e) {
                const t = e >> 24 & 255;
                return {
                    r: e >> 16 & 255,
                    g: e >> 8 & 255,
                    b: 255 & e,
                    a: t > 0 ? t : 255
                }
            }
            static hexToRgb(e) {
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, ( (e, t, r, a) => t + t + r + r + a + a));
                const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16)
                } : null
            }
            static rgbToHex(e) {
                return t.decimalToHex(t.rgbToDecimal(e))
            }
            static rgbToDecimal(e) {
                return (e.r << 16) + (e.g << 8) + e.b
            }
            static hexToDecimal(e) {
                return t.rgbToDecimal(t.hexToRgb(e))
            }
            static hsvToRgb(e) {
                let t = e.h % 360;
                t < 0 && (t += 360);
                const r = Math.max(0, Math.min(e.s, 1))
                  , a = Math.max(0, Math.min(e.v, 1))
                  , n = Math.floor(t / 60)
                  , o = t / 60 - n
                  , i = a * (1 - r)
                  , s = a * (1 - r * o)
                  , l = a * (1 - r * (1 - o));
                let c, u, d;
                switch (n) {
                default:
                case 0:
                    c = a,
                    u = l,
                    d = i;
                    break;
                case 1:
                    c = s,
                    u = a,
                    d = i;
                    break;
                case 2:
                    c = i,
                    u = a,
                    d = l;
                    break;
                case 3:
                    c = i,
                    u = s,
                    d = a;
                    break;
                case 4:
                    c = l,
                    u = i,
                    d = a;
                    break;
                case 5:
                    c = a,
                    u = i,
                    d = s
                }
                return {
                    r: Math.floor(255 * c),
                    g: Math.floor(255 * u),
                    b: Math.floor(255 * d)
                }
            }
            static rgbToHsv(e) {
                const t = e.r / 255
                  , r = e.g / 255
                  , a = e.b / 255
                  , n = Math.min(Math.min(t, r), a)
                  , o = Math.max(Math.max(t, r), a);
                let i = 0
                  , s = 0;
                return n !== o && (i = 60 * ((t === n ? 3 : r === n ? 5 : 1) - (t === n ? r - a : r === n ? a - t : t - r) / (o - n)) % 360,
                s = (o - n) / o),
                {
                    h: i,
                    s,
                    v: o
                }
            }
            static mixRgb(e, t, r) {
                if (r <= 0)
                    return e;
                if (r >= 1)
                    return t;
                const a = 1 - r;
                return {
                    r: a * e.r + r * t.r,
                    g: a * e.g + r * t.g,
                    b: a * e.b + r * t.b
                }
            }
        }
        e.exports = t
    }
    ,
    8713: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => v
        });
        var a = r(80673)
          , n = r.n(a)
          , o = r(29122)
          , i = r.n(o)
          , s = r(83392)
          , l = r.n(s)
          , c = r(68460);
        function u(e) {
            return function(e) {
                if (Array.isArray(e))
                    return g(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || y(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function d(e) {
            return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            d(e)
        }
        function f(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var a, n, o = [], i = !0, s = !1;
                    try {
                        for (r = r.call(e); !(i = (a = r.next()).done) && (o.push(a.value),
                        !t || o.length !== t); i = !0)
                            ;
                    } catch (e) {
                        s = !0,
                        n = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s)
                                throw n
                        }
                    }
                    return o
                }
            }(e, t) || y(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return g(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? g(e, t) : void 0
            }
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, a = new Array(t); r < t; r++)
                a[r] = e[r];
            return a
        }
        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        var m = "layerManager";
        const v = function() {
            function e(t) {
                var r = this;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.runtime = t,
                this.renderer = this.runtime.renderer,
                this.layerManager = this.renderer.layerManager,
                this.rootFolder = this.layerManager.rootFolder;
                var a = setInterval((function() {
                    r.runtime.targets.length > 0 && (clearInterval(a),
                    r.hackScratchFunctions())
                }
                ), 1e3);
                this.initFormatMessage({
                    extensionName: ["图层管理", "Layer Management"],
                    div1: ["🏗️ 图层层级", "🏗️ Layer Hierarchy"],
                    div2: ["🔄 层级内顺序", "🔄 Sprite Order in Layer"],
                    div3: ["✨ 特效分层（配合雷神扩展）", "✨ Post Effect for Layer (with Quake)"],
                    docsURI: ["https://learn.ccw.site/article/ed40913d-60d6-4f81-95dc-bf05237aafeb", "https://getgandi.com/extensions/layers"],
                    setLayerManager: ["[OP]图层管理器", "[OP] the layer manager"],
                    setSortOrder: ["设置图层排序方式为[ORDER]", "set layer sorting order to [ORDER]"],
                    checkLayerLevelsButton: ["查看图层层级结构", "Display layer hierarchy"],
                    checkLayerLevels: ["在控制台打印图层层级结构", "print layer hierarchy in terminal"],
                    infoHeader: ["图层层级结构", "Layer Hierarchy"],
                    noFolder: ["(还没有建立图层层级)", " (Layer hierarchy not defined)"],
                    defineLayerLevels: ["定义图层层级(由高到低)[LEVELS]，并以[LEVEL]作为默认层级", "define layer hierarchy (above to below)[LEVELS], and set [LEVEL] as the default layer"],
                    defaultLevels: ["UI层,默认层,背景层", "UI,Default,Background"],
                    defaultLevel: ["默认层", "Default"],
                    levelUndefined: ["还未定义层级，请先定义", "layer hierarchy not defined yet"],
                    moveSpritesInFolderToLevel: ["将文件夹[FOLDER]中的[TYPE]移到层级[LEVEL]", "move [TYPE] in the folder[FOLDER]to the layer[LEVEL]"],
                    onlySprites: ["仅角色", "only sprites"],
                    spritesAndClones: ["角色和克隆体", "sprites and clones"],
                    setTargetLayerLevel: ["将[TARGET]移到层级[LEVEL]", "move [TARGET] to the layer [LEVEL]"],
                    setTargetLayerPriority: ["将[TARGET]的层级内排序值设为[PRIORITY]", "set [TARGET] z-index in layer to[PRIORITY]"],
                    setCanvasLayerLevel: ["🖼️设置[TARGET]的高级画笔的层级[LEVEL]", "🖼️set [TARGET] canvas's layer to [LEVEL]"],
                    setCanvasLayerPriority: ["🖼️将[TARGET]的高级画笔的图层排序值设为[PRIORITY]", "🖼️set [TARGET] canvas's z-index in layer to[PRIORITY]"],
                    getTargetLayerInfo: ["[TARGET]的[INFO]", "[TARGET][INFO]"],
                    my: ["我", "my"],
                    myself: ["我", "myself"],
                    setMinUnshadedIndex: ["使层级[LEVEL]中排序值[INDEX]及上方图层不受雷神特效影响", "excludes layer with z-index [INDEX] and layers above in hierarchy [LEVEL] from post effects"],
                    setMinUnshadedTarget: ["使角色[TARGET]及其上方图层不受雷神特效影响", "exclude sprite [TARGET] and layers above from post effects"],
                    setMinUnshadedLevel: ["使层级[LEVEL]及其上方图层不受雷神特效影响", "exclude layer [LEVEL] and above from post effects"],
                    allSprites: ["全体角色", "all sprites"],
                    inFrontOf: ["前面", "in front of"],
                    behind: ["后面", "behind"],
                    ascending: ["升序", "ascending"],
                    descending: ["降序", "descending"],
                    activate: ["启动", "activate"],
                    deactivate: ["关闭", "deactivate"],
                    affected: ["受", "affected"],
                    unaffected: ["不受", "unaffected"],
                    level: ["图层层级", "layer"],
                    myPriority: ["层级内排序值", "z-index in layer"],
                    myLayer: ["图层序号", "layer's index"]
                })
            }
            var t, r;
            return t = e,
            r = [{
                key: "initFormatMessage",
                value: function(e) {
                    var t = {
                        "zh-cn": {},
                        en: {}
                    };
                    Object.entries(e).forEach((function(e) {
                        var r = f(e, 2)
                          , a = r[0]
                          , n = r[1]
                          , o = "".concat(m, ".").concat(a)
                          , i = f(n, 2);
                        t["zh-cn"][o] = i[0],
                        t.en[o] = i[1]
                    }
                    ));
                    var r = this.runtime.getFormatMessage(t);
                    this.formatMessage = function(e) {
                        var t = "".concat(m, ".").concat(e);
                        return r({
                            ID: t,
                            default: t,
                            description: t
                        })
                    }
                }
            }, {
                key: "getInfo",
                value: function() {
                    var e = this;
                    return this.canvasExtensionDetected = this.runtime._blockInfo.find((function(e) {
                        return "CCWCanvasV2" === e.id
                    }
                    )),
                    {
                        id: m,
                        name: this.formatMessage("extensionName"),
                        docsURI: this.formatMessage("docsURI"),
                        color1: "#9A4BB3",
                        menuIconURI: c.Z,
                        blockIconURI: c.Z,
                        blocks: [{
                            opcode: "setLayerManager",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setLayerManager"),
                            arguments: {
                                OP: {
                                    type: n().STRING,
                                    menu: "ON_OR_OFF"
                                }
                            }
                        }, {
                            opcode: "setSortOrder",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setSortOrder"),
                            arguments: {
                                ORDER: {
                                    type: n().STRING,
                                    menu: "SORTING_ORDER"
                                }
                            }
                        }, "---".concat(this.formatMessage("div1")), {
                            opcode: "checkLayerLevelsButton",
                            blockType: i().BUTTON,
                            text: this.formatMessage("checkLayerLevelsButton"),
                            onClick: function() {
                                e._terminalShowed = 1,
                                e._terminalShowed ? (e.runtime.logSystem.show(),
                                e.runtime.logSystem.clear(),
                                e.runtime.logSystem.info("----------------".concat(e.formatMessage("infoHeader"), "----------------")),
                                e.__printFolderInGandiTerminal(e.rootFolder)) : e.runtime.logSystem.hide()
                            }
                        }, {
                            opcode: "defineLayerLevels",
                            blockType: i().COMMAND,
                            text: this.formatMessage("defineLayerLevels"),
                            arguments: {
                                LEVELS: {
                                    type: n().STRING,
                                    defaultValue: this.formatMessage("defaultLevels")
                                },
                                LEVEL: {
                                    type: n().STRING,
                                    defaultValue: this.formatMessage("defaultLevel")
                                }
                            }
                        }, {
                            opcode: "moveSpritesInFolderToLevel",
                            blockType: i().COMMAND,
                            text: this.formatMessage("moveSpritesInFolderToLevel"),
                            arguments: {
                                FOLDER: {
                                    type: n().STRING,
                                    menu: "FOLDERS"
                                },
                                LEVEL: {
                                    type: n().STRING,
                                    menu: "LEVELS",
                                    defaultValue: "-"
                                },
                                TYPE: {
                                    type: n().STRING,
                                    menu: "IF_ONLY_SPRITE"
                                }
                            }
                        }, "---".concat(this.formatMessage("div2")), {
                            opcode: "setTargetLayerLevel",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setTargetLayerLevel"),
                            arguments: {
                                TARGET: {
                                    type: n().STRING,
                                    menu: "SPRITES"
                                },
                                LEVEL: {
                                    type: n().STRING,
                                    menu: "LEVELS",
                                    defaultValue: "-"
                                }
                            }
                        }, {
                            opcode: "setTargetLayerPriority",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setTargetLayerPriority"),
                            arguments: {
                                TARGET: {
                                    type: n().STRING,
                                    menu: "SPRITES_WITH_MY"
                                },
                                PRIORITY: {
                                    type: n().NUMBER,
                                    defaultValue: 1
                                }
                            }
                        }, {
                            opcode: "getTargetLayerInfo",
                            blockType: i().REPORTER,
                            disableMonitor: !0,
                            text: this.formatMessage("getTargetLayerInfo"),
                            arguments: {
                                TARGET: {
                                    type: n().STRING,
                                    menu: "SPRITES_WITH_MY"
                                },
                                INFO: {
                                    type: n().STRING,
                                    menu: "LAYER_INFO"
                                }
                            }
                        }, "---", {
                            opcode: "setCanvasLayerLevel",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setCanvasLayerLevel"),
                            hideFromPalette: !this.canvasExtensionDetected,
                            arguments: {
                                TARGET: {
                                    type: n().STRING,
                                    menu: "SPRITES_WITH_MY"
                                },
                                LEVEL: {
                                    type: n().STRING,
                                    menu: "LEVELS",
                                    defaultValue: "-"
                                }
                            }
                        }, {
                            opcode: "setCanvasLayerPriority",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setCanvasLayerPriority"),
                            hideFromPalette: !this.canvasExtensionDetected,
                            arguments: {
                                TARGET: {
                                    type: n().STRING,
                                    menu: "SPRITES_WITH_MY"
                                },
                                PRIORITY: {
                                    type: n().NUMBER,
                                    defaultValue: 1
                                }
                            }
                        }, "---".concat(this.formatMessage("div3")), {
                            opcode: "setMinUnshadedLevel",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setMinUnshadedLevel"),
                            arguments: {
                                LEVEL: {
                                    type: n().STRING,
                                    menu: "LEVELS",
                                    defaultValue: "-"
                                }
                            }
                        }, {
                            opcode: "setMinUnshadedIndex",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setMinUnshadedIndex"),
                            arguments: {
                                INDEX: {
                                    type: n().NUMBER,
                                    defaultValue: 5
                                },
                                LEVEL: {
                                    type: n().STRING,
                                    menu: "LEVELS",
                                    defaultValue: "-"
                                }
                            }
                        }, {
                            opcode: "setMinUnshadedTarget",
                            blockType: i().COMMAND,
                            text: this.formatMessage("setMinUnshadedTarget"),
                            arguments: {
                                TARGET: {
                                    type: n().STRING,
                                    menu: "SPRITES"
                                }
                            }
                        }],
                        menus: {
                            IF_ONLY_SPRITE: [{
                                text: this.formatMessage("spritesAndClones"),
                                value: "spriteAndClone"
                            }, {
                                text: this.formatMessage("onlySprites"),
                                value: "sprite"
                            }],
                            SORTING_ORDER: [{
                                text: this.formatMessage("descending"),
                                value: "desc"
                            }, {
                                text: this.formatMessage("ascending"),
                                value: "asc"
                            }],
                            ON_OR_OFF: [{
                                text: this.formatMessage("activate"),
                                value: "on"
                            }, {
                                text: this.formatMessage("deactivate"),
                                value: "off"
                            }],
                            FOLDERS: {
                                acceptReporters: !0,
                                items: "__getSpriteFolders"
                            },
                            LEVELS: {
                                acceptReporters: !0,
                                items: "__getLayerLevelsMenu"
                            },
                            SPRITES: {
                                acceptReporters: !0,
                                items: "__spriteListWithMe"
                            },
                            SPRITES_WITH_MY: {
                                acceptReporters: !0,
                                items: "__spriteListWithMy"
                            },
                            FRONT_OR_BEHIND: {
                                items: [{
                                    text: this.formatMessage("inFrontOf"),
                                    value: "front"
                                }, {
                                    text: this.formatMessage("behind"),
                                    value: "behind"
                                }]
                            },
                            AFFECTABLE: [{
                                text: this.formatMessage("unaffected"),
                                value: "no"
                            }, {
                                text: this.formatMessage("affected"),
                                value: "yes"
                            }],
                            LAYER_INFO: [{
                                text: this.formatMessage("level"),
                                value: "level"
                            }, {
                                text: this.formatMessage("myPriority"),
                                value: "myPri"
                            }, {
                                text: this.formatMessage("myLayer"),
                                value: "layer"
                            }]
                        }
                    }
                }
            }, {
                key: "__getSpriteFolders",
                value: function() {
                    var e = this
                      , t = this.runtime.targets
                      , r = new Set;
                    t.forEach((function(t) {
                        var a = e.getFolderAndSpriteName(t.getName());
                        a.isSingleSprite || r.add(a.folderName)
                    }
                    ));
                    var a = [];
                    return a.push({
                        text: this.formatMessage("allSprites"),
                        value: "__all__"
                    }),
                    r.forEach((function(e) {
                        a.push({
                            text: e,
                            value: e
                        })
                    }
                    )),
                    0 === a.length && a.push({
                        text: "-",
                        value: ""
                    }),
                    a
                }
            }, {
                key: "__getLayerLevelsMenu",
                value: function() {
                    var e = this.rootFolder.items.filter((function(e) {
                        return "object" === d(e)
                    }
                    )).map((function(e) {
                        return e.name
                    }
                    )).reverse();
                    return 0 === e.length && e.push({
                        text: this.formatMessage("levelUndefined"),
                        value: ""
                    }),
                    e
                }
            }, {
                key: "__spriteListWithMy",
                value: function() {
                    return this.__spriteListWithMe("", "my")
                }
            }, {
                key: "__spriteListWithMe",
                value: function(e) {
                    var t = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "myself"
                      , a = [];
                    return a.push({
                        text: this.formatMessage(r),
                        value: "__myself__"
                    }),
                    this.runtime.targets.forEach((function(e) {
                        e.isOriginal && !e.isStage && e !== t.runtime._editingTarget && a.push({
                            text: e.sprite.name,
                            value: e.sprite.name
                        })
                    }
                    )),
                    0 === a.length && a.push({
                        text: "-",
                        value: ""
                    }),
                    a
                }
            }, {
                key: "tryHackedFunction",
                value: function(e, t, r) {
                    e["".concat(m, "_origFun")] || (e["".concat(m, "_origFun")] = {});
                    var a = e["".concat(m, "_origFun")];
                    if (e["".concat(m, "_extIns")] = this,
                    !a[t]) {
                        a[t] = !0;
                        var n = e[t];
                        e[t] = function() {
                            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                                t[a] = arguments[a];
                            return r.call.apply(r, [this, n].concat(t))
                        }
                    }
                }
            }, {
                key: "getFolderAndSpriteName",
                value: function(e) {
                    var t = /^([^/]+)\/\/(.*)$/.exec(e);
                    return t ? {
                        isSingleSprite: !1,
                        folderName: t[1],
                        spriteName: t[2]
                    } : {
                        isSingleSprite: !0,
                        spriteName: e
                    }
                }
            }, {
                key: "hackScratchFunctions",
                value: function() {
                    var e = this.layerManager
                      , t = this.renderer;
                    this.tryHackedFunction(this.runtime.ext_scratch3_looks, "_positionBubble", (function(r, a) {
                        var n = this._getBubbleState(a).drawableId;
                        if (n) {
                            t.getDrawableLayerFolder(a.drawableID).add(n);
                            var o = t.getDrawableLayerIndex(a.drawableID) + .001 * e.order;
                            t.setDrawableLayerIndex(n, o)
                        }
                        r.call(this, a)
                    }
                    ));
                    var r = Object.getPrototypeOf(this.runtime.targets[0]);
                    this.tryHackedFunction(r, "makeClone", (function(r) {
                        var a = r.call(this);
                        if (a) {
                            var n = this.drawableID
                              , o = a.drawableID;
                            t.getDrawableLayerFolder(n).add(o);
                            var i = t.getDrawableLayerIndex(n) - .01 * e.order;
                            t.setDrawableLayerIndex(o, i)
                        }
                        return a
                    }
                    )),
                    this.tryHackedFunction(r, "goBehindOther", (function(e, r) {
                        var a = t.getDrawableLayerIndex(this.drawableID)
                          , n = t.getDrawableLayerIndex(r.drawableID);
                        e.call(this, r),
                        t.setDrawableLayerIndex(this.drawableID, a),
                        t.setDrawableLayerIndex(r.drawableID, n)
                    }
                    ))
                }
            }, {
                key: "__printFolderInGandiTerminal",
                value: function(e) {
                    var t = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                      , n = this.runtime.logSystem
                      , o = function(e) {
                        return parseFloat(e.toFixed(2))
                    }
                      , i = function(e) {
                        return "[0;97m(".concat(o(e), ")[0;92m")
                    }
                      , s = u(e.items).reverse().map((function(e) {
                        return "object" === d(e) ? e : t.runtime.getTargetByDrawableId(e)
                    }
                    )).filter((function(e) {
                        return e && !1 !== e.isOriginal
                    }
                    ));
                    s.forEach((function(e, o) {
                        var l = a + r + (o === s.length - 1 ? "└" : "├");
                        if (!0 !== e.isOriginal)
                            n.info("".concat(l, "[0;93m📁  ").concat(e.name, "[0m")),
                            t.__printFolderInGandiTerminal(e, "".concat(r, " "), o === s.length - 1 ? " " : "│");
                        else {
                            var c = e.sprite.name
                              , u = t.renderer.getDrawableLayerIndex(e.drawableID);
                            n.info("".concat(l).concat(i(u)).concat(c))
                        }
                    }
                    ))
                }
            }, {
                key: "setLayerManager",
                value: function(e) {
                    var t = e.OP;
                    this.layerManager.enableLayerSorting("on" === t)
                }
            }, {
                key: "setSortOrder",
                value: function(e) {
                    var t = 1 - ("asc" === e.ORDER);
                    (t ? 1 : -1) !== this.layerManager.order && Object.values(this.rootFolder.nameToSubFolder).forEach((function(e) {
                        return e.layerIndex *= -1
                    }
                    )),
                    this.layerManager.setSortInAscendingOrder(t)
                }
            }, {
                key: "defineLayerLevels",
                value: function(e) {
                    var t = e.LEVELS
                      , r = e.LEVEL
                      , a = l().toString(t);
                    if ("" !== a) {
                        var n = a.split(",").map((function(e) {
                            return e.trim()
                        }
                        ));
                        this.__generateLayerLevelsFromList(n, l().toString(r))
                    }
                }
            }, {
                key: "__removeFolder1AndMoveItemsToFolder2",
                value: function(e, t) {
                    if (e && t && e !== t) {
                        for (; e.items.length > 0; )
                            t.add(e.items[0]);
                        e.parent && e.parent.remove(e)
                    }
                }
            }, {
                key: "__generateLayerLevelsFromList",
                value: function(e, t) {
                    var r = this
                      , a = Array.from(new Set(e)).reverse();
                    if (0 !== a.length) {
                        var n = a.indexOf(t);
                        -1 === n && (n = Math.min(a.length - 1, 1));
                        var o = a.map((function(e) {
                            var t = r.layerManager.createLayerFolder(e);
                            return r.rootFolder.changeDrawableOrder(t, r.layerManager.order, 1 / 0),
                            t
                        }
                        ))
                          , i = o[n];
                        this.layerManager.defaultFolderDrawableAddTo = i;
                        for (var s = 0; s < this.rootFolder.items.length; ) {
                            var l = this.rootFolder.items[s];
                            "object" === d(l) ? o.includes(l) ? s++ : this.__removeFolder1AndMoveItemsToFolder2(l, i) : i.add(l)
                        }
                    }
                }
            }, {
                key: "moveSpritesInFolderToLevel",
                value: function(e) {
                    var t = this
                      , r = e.FOLDER
                      , a = e.LEVEL
                      , n = e.TYPE
                      , o = l().toString(r)
                      , i = "__all__" === o
                      , s = "sprite" === n
                      , c = this.rootFolder.nameToSubFolder[a];
                    c || (c = this.layerManager.createLayerFolder(a)),
                    this.runtime.targets.forEach((function(e) {
                        if (!e.isStage && (e.isOriginal || !s)) {
                            var r = t.getFolderAndSpriteName(e.getName());
                            (i || !r.isSingleSprite && r.folderName === o) && c.add(e.drawableID)
                        }
                    }
                    ))
                }
            }, {
                key: "getLayerIndexForItem",
                value: function(e) {
                    return "object" === d(e) ? e.layerIndex : this.renderer.getDrawableLayerIndex(e)
                }
            }, {
                key: "__printFolderInConsole",
                value: function(e) {
                    var t = this
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , a = function(e) {
                        return parseFloat(e.toFixed(2))
                    };
                    console.group("".concat(r).concat(a(e.layerIndex), "=folder:").concat(e.name)),
                    e.items.forEach((function(e) {
                        if ("object" === d(e))
                            t.__printFolderInConsole(e);
                        else {
                            var r = t.renderer.getDrawableLayerIndex(e);
                            console.log("  ".concat(a(r), "=draw").concat(e))
                        }
                    }
                    )),
                    console.groupEnd()
                }
            }, {
                key: "test",
                value: function() {
                    this.__printFolderInConsole(this.rootFolder)
                }
            }, {
                key: "__getTargetByIdOrName",
                value: function(e, t) {
                    if ("__myself__" === e)
                        return t.target;
                    var r = this.runtime.getSpriteTargetByName(e);
                    return r || (r = this.runtime.getTargetById(e)) ? r : null
                }
            }, {
                key: "setTargetLayerLevel",
                value: function(e, t) {
                    var r = e.TARGET
                      , a = e.LEVEL
                      , n = this.__getTargetByIdOrName(l().toString(r), t);
                    if (n && !n.isStage) {
                        var o = this.rootFolder.nameToSubFolder[a];
                        o || (o = this.layerManager.createLayerFolder(a)),
                        o.add(n.drawableID)
                    }
                }
            }, {
                key: "setCanvasLayerLevel",
                value: function(e, t) {
                    var r = e.TARGET
                      , a = e.LEVEL
                      , n = this.__getTargetByIdOrName(l().toString(r), t);
                    if (n && !n.isStage && this.runtime.ext_CCWCanvasV2) {
                        var o = n.getCustomState("CCW.CanvasV2");
                        if (null != o && o.drawableID) {
                            var i = this.rootFolder.nameToSubFolder[a];
                            i || (i = this.layerManager.createLayerFolder(a)),
                            i.add(o.drawableID)
                        }
                    }
                }
            }, {
                key: "setCanvasLayerPriority",
                value: function(e, t) {
                    var r = e.TARGET
                      , a = e.PRIORITY
                      , n = this.__getTargetByIdOrName(l().toString(r), t);
                    if (n && !n.isStage && this.runtime.ext_CCWCanvasV2) {
                        var o = n.getCustomState("CCW.CanvasV2");
                        null != o && o.drawableID && this.renderer.setDrawableLayerIndex(o.drawableID, l().toNumber(a))
                    }
                }
            }, {
                key: "setTargetLayerPriority",
                value: function(e, t) {
                    var r = e.TARGET
                      , a = e.PRIORITY
                      , n = this.__getTargetByIdOrName(l().toString(r), t);
                    n && !n.isStage && this.renderer.setDrawableLayerIndex(n.drawableID, l().toNumber(a))
                }
            }, {
                key: "setMinUnshadedIndex",
                value: function(e) {
                    var t = e.INDEX
                      , r = e.LEVEL
                      , a = this.rootFolder.nameToSubFolder[r];
                    if (a) {
                        var n = "" === t ? 1 / 0 : l().toNumber(t);
                        this.layerManager.setMinUnshadedInfo(2, [n, a])
                    }
                }
            }, {
                key: "setMinUnshadedTarget",
                value: function(e, t) {
                    var r = e.TARGET
                      , a = this.__getTargetByIdOrName(l().toString(r), t);
                    a && !a.isStage && this.layerManager.setMinUnshadedInfo(1, a.drawableID)
                }
            }, {
                key: "setMinUnshadedLevel",
                value: function(e) {
                    var t = e.LEVEL;
                    this.setMinUnshadedIndex({
                        INDEX: -1 / 0 * this.layerManager.order,
                        LEVEL: t
                    })
                }
            }, {
                key: "getTargetLayerInfo",
                value: function(e, t) {
                    var r = e.TARGET
                      , a = e.INFO
                      , n = this.__getTargetByIdOrName(l().toString(r), t);
                    if (!n)
                        return "";
                    var o = this.renderer.getDrawableLayerFolder(n.drawableID);
                    switch (a) {
                    case "level":
                        return o && o !== this.rootFolder ? o.name : "";
                    case "myPri":
                        return this.renderer.getDrawableLayerIndex(n.drawableID);
                    case "layer":
                        return this.runtime.renderer.getDrawableOrder(n.drawableID);
                    default:
                        return ""
                    }
                }
            }],
            r && h(t.prototype, r),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    }
}]);
