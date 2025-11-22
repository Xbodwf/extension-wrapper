/*! For license information please see gandi_ccw_mmo.b37ceb24.js.LICENSE.txt */
"use strict";
(self.webpackChunkscratch_extensions = self.webpackChunkscratch_extensions || []).push([[5825], {
    4995: (e, t, o) => {
        function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            a(e)
        }
        function r(e, t) {
            return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        function n(e, t) {
            if (t && ("object" === a(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            s(e)
        }
        o.r(t),
        o.d(t, {
            default: () => u
        });
        var i = o(41396)
          , c = i.Schema
          , M = i.type
          , l = o(76838)
          , d = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && r(e, t)
            }(M, e);
            var t, o, a, c = (o = M,
            a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = s(o);
                if (a) {
                    var r = s(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return n(this, e)
            }
            );
            function M() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, M),
                (e = c.call(this)).players = new i.MapSchema,
                e
            }
            return t = M,
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }(c);
        M("number")(d.prototype, "onlineCount"),
        M("string")(d.prototype, "extra"),
        M({
            map: l
        })(d.prototype, "players");
        const u = d
    }
    ,
    76838: (e, t, o) => {
        function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            a(e)
        }
        function r(e, t) {
            return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            r(e, t)
        }
        function n(e, t) {
            if (t && ("object" === a(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            s(e)
        }
        o.r(t),
        o.d(t, {
            default: () => d
        });
        var i = o(41396)
          , c = i.Schema
          , M = i.type
          , l = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && r(e, t)
            }(c, e);
            var t, o, a, i = (o = c,
            a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = s(o);
                if (a) {
                    var r = s(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return n(this, e)
            }
            );
            function c() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c),
                i.call(this)
            }
            return t = c,
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }(c);
        M("string")(l.prototype, "name"),
        M("number")(l.prototype, "x"),
        M("number")(l.prototype, "y"),
        M("string")(l.prototype, "sessionId"),
        M("string")(l.prototype, "uuid"),
        M("string")(l.prototype, "extra");
        const d = l
    }
    ,
    49898: (e, t, o) => {
        o.r(t),
        o.d(t, {
            default: () => W
        });
        var a = o(7767)
          , r = o(80673)
          , n = o.n(r)
          , s = o(29122)
          , i = o.n(s)
          , c = o(83392)
          , M = o.n(c)
          , l = o(48611)
          , d = o(111);
        function u(e) {
            return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            u(e)
        }
        function C(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(o), !0).forEach((function(t) {
                    m(e, t, o[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : C(Object(o)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                }
                ))
            }
            return e
        }
        function m(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        function O(e) {
            return function(e) {
                if (Array.isArray(e))
                    return f(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return f(e, t);
                    var o = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === o && e.constructor && (o = e.constructor.name),
                    "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? f(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var o = 0, a = new Array(t); o < t; o++)
                a[o] = e[o];
            return a
        }
        function g() {
            g = function() {
                return e
            }
            ;
            var e = {}
              , t = Object.prototype
              , o = t.hasOwnProperty
              , a = Object.defineProperty || function(e, t, o) {
                e[t] = o.value
            }
              , r = "function" == typeof Symbol ? Symbol : {}
              , n = r.iterator || "@@iterator"
              , s = r.asyncIterator || "@@asyncIterator"
              , i = r.toStringTag || "@@toStringTag";
            function c(e, t, o) {
                return Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                c({}, "")
            } catch (e) {
                c = function(e, t, o) {
                    return e[t] = o
                }
            }
            function M(e, t, o, r) {
                var n = t && t.prototype instanceof C ? t : C
                  , s = Object.create(n.prototype)
                  , i = new _(r || []);
                return a(s, "_invoke", {
                    value: R(e, o, i)
                }),
                s
            }
            function l(e, t, o) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, o)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = M;
            var d = {};
            function C() {}
            function h() {}
            function m() {}
            var O = {};
            c(O, n, (function() {
                return this
            }
            ));
            var f = Object.getPrototypeOf
              , y = f && f(f(b([])));
            y && y !== t && o.call(y, n) && (O = y);
            var p = m.prototype = C.prototype = Object.create(O);
            function I(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    c(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function W(e, t) {
                function r(a, n, s, i) {
                    var c = l(e[a], e, n);
                    if ("throw" !== c.type) {
                        var M = c.arg
                          , d = M.value;
                        return d && "object" == u(d) && o.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            r("next", e, s, i)
                        }
                        ), (function(e) {
                            r("throw", e, s, i)
                        }
                        )) : t.resolve(d).then((function(e) {
                            M.value = e,
                            s(M)
                        }
                        ), (function(e) {
                            return r("throw", e, s, i)
                        }
                        ))
                    }
                    i(c.arg)
                }
                var n;
                a(this, "_invoke", {
                    value: function(e, o) {
                        function a() {
                            return new t((function(t, a) {
                                r(e, o, t, a)
                            }
                            ))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                })
            }
            function R(e, t, o) {
                var a = "suspendedStart";
                return function(r, n) {
                    if ("executing" === a)
                        throw new Error("Generator is already running");
                    if ("completed" === a) {
                        if ("throw" === r)
                            throw n;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (o.method = r,
                    o.arg = n; ; ) {
                        var s = o.delegate;
                        if (s) {
                            var i = v(s, o);
                            if (i) {
                                if (i === d)
                                    continue;
                                return i
                            }
                        }
                        if ("next" === o.method)
                            o.sent = o._sent = o.arg;
                        else if ("throw" === o.method) {
                            if ("suspendedStart" === a)
                                throw a = "completed",
                                o.arg;
                            o.dispatchException(o.arg)
                        } else
                            "return" === o.method && o.abrupt("return", o.arg);
                        a = "executing";
                        var c = l(e, t, o);
                        if ("normal" === c.type) {
                            if (a = o.done ? "completed" : "suspendedYield",
                            c.arg === d)
                                continue;
                            return {
                                value: c.arg,
                                done: o.done
                            }
                        }
                        "throw" === c.type && (a = "completed",
                        o.method = "throw",
                        o.arg = c.arg)
                    }
                }
            }
            function v(e, t) {
                var o = e.iterator[t.method];
                if (void 0 === o) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = void 0,
                        v(e, t),
                        "throw" === t.method))
                            return d;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var a = l(o, e.iterator, t.arg);
                if ("throw" === a.type)
                    return t.method = "throw",
                    t.arg = a.arg,
                    t.delegate = null,
                    d;
                var r = a.arg;
                return r ? r.done ? (t[e.resultName] = r.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                d) : r : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                d)
            }
            function N(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function E(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function _(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(N, this),
                this.reset(!0)
            }
            function b(e) {
                if (e) {
                    var t = e[n];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var a = -1
                          , r = function t() {
                            for (; ++a < e.length; )
                                if (o.call(e, a))
                                    return t.value = e[a],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: S
                }
            }
            function S() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = m,
            a(p, "constructor", {
                value: m,
                configurable: !0
            }),
            a(m, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = c(m, i, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
                c(e, i, "GeneratorFunction")),
                e.prototype = Object.create(p),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            I(W.prototype),
            c(W.prototype, s, (function() {
                return this
            }
            )),
            e.AsyncIterator = W,
            e.async = function(t, o, a, r, n) {
                void 0 === n && (n = Promise);
                var s = new W(M(t, o, a, r),n);
                return e.isGeneratorFunction(o) ? s : s.next().then((function(e) {
                    return e.done ? e.value : s.next()
                }
                ))
            }
            ,
            I(p),
            c(p, i, "Generator"),
            c(p, n, (function() {
                return this
            }
            )),
            c(p, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(e) {
                var t = Object(e)
                  , o = [];
                for (var a in t)
                    o.push(a);
                return o.reverse(),
                function e() {
                    for (; o.length; ) {
                        var a = o.pop();
                        if (a in t)
                            return e.value = a,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            e.values = b,
            _.prototype = {
                constructor: _,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(E),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function a(o, a) {
                        return s.type = "throw",
                        s.arg = e,
                        t.next = o,
                        a && (t.method = "next",
                        t.arg = void 0),
                        !!a
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var n = this.tryEntries[r]
                          , s = n.completion;
                        if ("root" === n.tryLoc)
                            return a("end");
                        if (n.tryLoc <= this.prev) {
                            var i = o.call(n, "catchLoc")
                              , c = o.call(n, "finallyLoc");
                            if (i && c) {
                                if (this.prev < n.catchLoc)
                                    return a(n.catchLoc, !0);
                                if (this.prev < n.finallyLoc)
                                    return a(n.finallyLoc)
                            } else if (i) {
                                if (this.prev < n.catchLoc)
                                    return a(n.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < n.finallyLoc)
                                    return a(n.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var r = this.tryEntries[a];
                        if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var n = r;
                            break
                        }
                    }
                    n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                    var s = n ? n.completion : {};
                    return s.type = e,
                    s.arg = t,
                    n ? (this.method = "next",
                    this.next = n.finallyLoc,
                    d) : this.complete(s)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    d
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var o = this.tryEntries[t];
                        if (o.finallyLoc === e)
                            return this.complete(o.completion, o.afterLoc),
                            E(o),
                            d
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var o = this.tryEntries[t];
                        if (o.tryLoc === e) {
                            var a = o.completion;
                            if ("throw" === a.type) {
                                var r = a.arg;
                                E(o)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, o) {
                    return this.delegate = {
                        iterator: b(e),
                        resultName: t,
                        nextLoc: o
                    },
                    "next" === this.method && (this.arg = void 0),
                    d
                }
            },
            e
        }
        function y(e, t, o, a, r, n, s) {
            try {
                var i = e[n](s)
                  , c = i.value
            } catch (e) {
                return void o(e)
            }
            i.done ? t(c) : Promise.resolve(c).then(a, r)
        }
        function p(e) {
            return function() {
                var t = this
                  , o = arguments;
                return new Promise((function(a, r) {
                    var n = e.apply(t, o);
                    function s(e) {
                        y(n, a, r, s, i, "next", e)
                    }
                    function i(e) {
                        y(n, a, r, s, i, "throw", e)
                    }
                    s(void 0)
                }
                ))
            }
        }
        function I(e, t) {
            for (var o = 0; o < t.length; o++) {
                var a = t[o];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        o(4995);
        const W = function() {
            function e(t) {
                var o = this;
                if (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.runtime = t,
                t.ccwAPI && t.ccwAPI.getOnlineExtensionsConfig) {
                    var r = t.ccwAPI.getOnlineExtensionsConfig().hosts;
                    r && r.mmoHost && (this.host = r.mmoHost)
                }
                this.host || error("CCW MMO: host is not provided, stop init"),
                this.client = new a.KU(this.host),
                this.isJoining = !1,
                this.currentRoom = void 0,
                this.currentRoomType = void 0,
                this.currentRoomMultiJoinState = void 0,
                this.currentPlayer = {},
                this.currentPlayerToSync = {},
                this.incrementalUpdateStateWithThrottle = (0,
                d.Z)((function() {
                    o.currentRoom && (o.currentRoom.send("syscmd:set_state", o.currentPlayerToSync),
                    o.currentPlayerToSync = {})
                }
                ), 20, {
                    leading: !1,
                    trailing: !0
                }),
                this.allRooms = [],
                this.msgs = new Array,
                this.currentMsg = void 0,
                this.newMsg = !1,
                this.ccwUserNickname = "guest",
                this.ccwUserUUID = "not_found",
                this.ccwProjectUUID = "public",
                this.lag = -1,
                this._lastNewPlayerInfo = void 0,
                this._lastLeftPlayerInfo = void 0,
                this._lastStateChangedPlayerInfo = void 0,
                this.showV1Blocks = !!localStorage && "true" === localStorage.getItem("CCWMMO_showV1Blocks");
                var n = function() {
                    void 0 === o.runtime.ccwAPI || void 0 === o.runtime.ccwAPI.getUserInfo ? o.runtime.logSystem.warn("CCW API: not login return guest") : (o.runtime.ccwAPI.getUserInfo().then((function(e) {
                        e ? (o.ccwUserUUID = e.userId,
                        o.ccwUserNickname = e.userName) : o.runtime.logSystem.warn("CCW API: user not found, return unknown")
                    }
                    )),
                    o.ccwProjectUUID = o.runtime.ccwAPI.getProjectUUID(),
                    o.ccwProjectUUID || console.error("CCW API: getProjectUUID return null", o.ccwProjectUUID))
                };
                this.runtime.on("CCWAPI_CHANGED", n),
                n(),
                this.runtime.on("PROJECT_STOP_ALL", (function() {
                    o.currentRoom && (o.disconnectRoomAndWait(),
                    o.msgs = new Array,
                    o.currentMsg = void 0),
                    o.isJoining = !1
                }
                )),
                this.formatMessage = t.getFormatMessage({
                    "zh-cn": {
                        "CCWMMO.test": "运行测试",
                        "CCWMMO.broadcast": "广播",
                        "CCWMMO.lobby": "游戏大厅",
                        "CCWMMO.matchRoom": "游戏室",
                        "CCWMMO.joinOrCreate": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的 [ROOM] 房间",
                        "CCWMMO.joinOrCreateAndWait": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的 [ROOM] 房间，并等待连接成功",
                        "CCWMMO.disconnectRoom": "断开",
                        "CCWMMO.reconnectRoom": "重连",
                        "CCWMMO.join_method.joinOrCreate": "加入或创建",
                        "CCWMMO.join_method.create": "创建",
                        "CCWMMO.roomLag": "延迟(毫秒)",
                        "CCWMMO.setRoomExtra": "设置当前房间的额外数据为: [EXTRA]",
                        "CCWMMO.dispatchRoomStateChanged": "（♻_V1.0）当房间额外数据变化时",
                        "CCWMMO.roomExtra": "当前房间的额外数据",
                        "CCWMMO.getRoomInfo": "我的 [TYPE]",
                        "CCWMMO.roomId": "房间 ID",
                        "CCWMMO.roomName": "房间类型",
                        "CCWMMO.roomSessionId": "会话 ID",
                        "CCWMMO.broadcastMsg": "广播消息类型 [TYPE] 并附带内容 [CONTENT]",
                        "CCWMMO.dispatchNewMessage": "（♻_V1.0）当新消息收到时",
                        "CCWMMO.getMessage": "（♻_V1.0）获取最新消息，并且 [ACTION]",
                        "CCWMMO.msgActionDelete": "删除",
                        "CCWMMO.msgActionKeep": "保留",
                        "CCWMMO.getLastMessageContent": "（♻_V1.0）当前消息的 [ACTION]",
                        "CCWMMO.msgInfoType": "类型",
                        "CCWMMO.msgInfoSender.SessionId": "发送者的会话 ID",
                        "CCWMMO.msgInfoSender.Name": "发送者的昵称",
                        "CCWMMO.msgInfoMessageContent": "消息内容",
                        "CCWMMO.getMsgCount": "（♻_V1.0）未处理消息数量",
                        "CCWMMO.getClientList": "当前在线的玩家列表，格式 [FORMAT]",
                        "CCWMMO.clientListFormat.default": "默认",
                        "CCWMMO.clientListFormat.JSON": "JSON",
                        "CCWMMO.getPlayerCount": "当前房间的玩家数量",
                        "CCWMMO.dispatchNewMessageWithParams": "当新消息收到时, 发送者的会话 Id = [sender] UUID = [senderUID] 名字 = [name] 消息类型 = [type] 消息内容 = [content]",
                        "CCWMMO.getPlayerInfo": "玩家[SESSION_ID]的[PLAYER_INFO]",
                        "CCWMMO.playerInfoSessionId": "会话 ID",
                        "CCWMMO.playerInfoName": "名字",
                        "CCWMMO.playerInfoX": "X",
                        "CCWMMO.playerInfoY": "Y",
                        "CCWMMO.playerInfoScale": "缩放",
                        "CCWMMO.playerInfoDirection": "方向",
                        "CCWMMO.playerInfoConnected": "在线?",
                        "CCWMMO.playerInfoUUID": "CCW UUID",
                        "CCWMMO.playerInfoShortID": "CCW ID(短)",
                        "CCWMMO.playerInfoExtra": "额外数据",
                        "CCWMMO.playerInfoJSON": "所有 JSON 数据",
                        "CCWMMO.setPlayerState": "设置 [PLAYER_INFO] 为 [VALUE]",
                        "CCWMMO.setPlayerStateXY": "设置 x:[X] y:[Y]",
                        "CCWMMO.dispatchNewPlayer": "(♻_V1.0）当新玩家连入时",
                        "CCWMMO.dispatchNewPlayerWithParams": "当新玩家连入时, 玩家会话 ID = [sessionId], 名字 = [name], 数据 = [data]",
                        "CCWMMO.dispatchPlayerLeave": "(♻_V1.0）当玩家离开时",
                        "CCWMMO.dispatchPlayerLeaveWithParams": "当玩家离开时, 玩家会话 ID = [sessionId], 名字 = [name], 数据 = [data]",
                        "CCWMMO.dispatchPlayerLeaveAbnormal": "当我连接被异常断开时",
                        "CCWMMO.getNewPlayerInfo": "最新进入房间的玩家的 [PLAYER_INFO]",
                        "CCWMMO.getLastLeftPlayerInfo": "最近离开房间的玩家的 [PLAYER_INFO]",
                        "CCWMMO.getLastStateChangedPlayerInfo": "最近改变状态的玩家的 [PLAYER_INFO]",
                        "CCWMMO.getPlayerInfoFromIndex": "第[INDEX]个玩家的[PLAYER_INFO]",
                        "CCWMMO.dispatchPlayerChanged": "（♻_V1.0）当玩家状态变化时",
                        "CCWMMO.dispatchPlayerChangedWithParams": "当玩家状态变化时, 玩家会话 ID = [sessionId], 名字 = [name], 数据 = [data]",
                        "CCWMMO.getThisClonePlayerInfo": "当前克隆体的玩家数据 [PLAYER_INFO]",
                        "CCWMMO.createCloneWithLastPlayerState": "以会话 ID [SESSION_ID] 为数据源克隆自己",
                        "CCWMMO.isThisAClone": "是克隆体?",
                        "CCWMMO.dispatchRoomEnter": "当我进入房间时",
                        "CCWMMO.thisCloneIsMe": "（❌ 过时的方法）当前克隆体是我自己?",
                        "CCWMMO.thisCloneIsMeOrNot": "当前克隆体[AMI]我自己?",
                        "CCWMMO.isMe.true": "是",
                        "CCWMMO.isMe.false": "不是",
                        "CCWMMO.isCloneSessionIdEqualTo": "当前克隆体的玩家会话 ID = [SESSION_ID]?",
                        "CCWMMO.dispatchLobbyRoomChanged": "（♻_V1.0）当大厅的房间发生变化时",
                        "CCWMMO.dispatchLobbyRoomChangedWithParams": "当大厅的房间 [TYPE]时, 变化的房间 = [rooms]",
                        "CCWMMO.lobbyChangedType.any": "发生任何变化",
                        "CCWMMO.lobbyChangedType.create": "有新游戏室被创建",
                        "CCWMMO.lobbyChangedType.removed": "有游戏室被移出",
                        "CCWMMO.joinMatchmaking": "以额外数据 [NAME] 加入游戏室，房间号 [ROOM_ID] 服务器 id 为 [GAME_ID]",
                        "CCWMMO.joinMatchmakingAndWait": "以额外数据 [NAME] 加入游戏室，房间号 [ROOM_ID] 服务器 id 为 [GAME_ID]，并等待连接成功",
                        "CCWMMO.setMatchRoomSize": "设置游戏室最大人数为 [SIZE]",
                        "CCWMMO.lockRoom": "锁定游戏室 [LOCK]",
                        "CCWMMO.dispatchMessageListChanged": "（♻_V1.0）当消息列表改变时",
                        "CCWMMO.fillMessageToList": "（♻_V1.0）填充消息的 [MESSAGE_INFO] 到列表 [LIST]",
                        "CCWMMO.deleteMessageAt": "（♻_V1.0）删除第 [INDEX] 条消息 (0 代表第一条)",
                        "CCWMMO.getLobbyRoomInfoAt": "得到大厅中第 [INDEX] 个游戏室的 [ROOM_INFO]",
                        "CCWMMO.getLobbyRoomCount": "大厅游戏室数量",
                        "CCWMMO.setMatchRoomToList": "填充游戏室的 [ROOM_INFO] 到列表 [LIST]",
                        "CCWMMO.getMatchRooms": "得到[CONDITION]的游戏室",
                        "CCWMMO.getMatchRoom.condition.all": "所有",
                        "CCWMMO.getMatchRoom.condition.locked": "锁定",
                        "CCWMMO.getMatchRoom.condition.unlocked": "未锁定",
                        "CCWMMO.roomClients": "玩家数",
                        "CCWMMO.roomMaxClients": "最大玩家数",
                        "CCWMMO.roomCreatedAt": "创建于",
                        "CCWMMO.roomMetadata": "元数据",
                        "CCWMMO.roomMetadataLocked": "锁了?",
                        "CCWMMO.roomMetadataExtra": "额外数据",
                        "CCWMMO.roomMetadataJSON": "所有 JSON 数据",
                        "CCWMMO.lock": "锁定",
                        "CCWMMO.unlock": "解锁",
                        "CCWMMO.enable": "允许",
                        "CCWMMO.disable": "不允许",
                        "CCWMMO.open": "打开",
                        "CCWMMO.close": "关闭",
                        "CCWMMO.enableMultiLogin": "[MULTI_LOGIN] 一号多登 ",
                        "CCWMMO.joinOrCreateMatch": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的游戏室，最大人数为 [MAX_CLIENTS]",
                        "CCWMMO.joinOrCreateMatchAndWait": "以 [NAME] 为额外数据，[METHOD] 服务器 id 为 [GAME_ID] 的游戏室，最大人数为 [MAX_CLIENTS]，并等待连接成功",
                        "CCWMMO.div.Basic": "🚥 服务器连接和基础操作",
                        "CCWMMO.div.Lobby": "🗺 游戏大厅 (Lobby)",
                        "CCWMMO.div.Match": "🎾 游戏室 (Match Game)",
                        "CCWMMO.div.Message": "✉️ 消息相关",
                        "CCWMMO.div.Player": "😽 玩家相关",
                        "CCWMMO.div.PlayerEvent": "🙀 玩家事件相关",
                        "CCWMMO.div.Utils": "🛠 其他辅助工具",
                        "CCWMMO.roomStateChangeField.any": "任何",
                        "CCWMMO.roomStateChangeField.extra": "额外数据",
                        "CCWMMO.roomStateChangeField.onlineCount": "在线人数",
                        "CCWMMO.dispatchRoomStateChangedWithParams": "当房间的 [FIELD] 状态改变时, 会话 ID = [sessionId], 房间状态数据 = [roomState], 变化 = [changes]",
                        "CCWMMO.div.V1": "♻MMO_V1.0 - 更复杂",
                        "CCWMMO.showV1Blocks": "显示 v1 块",
                        "CCWMMO.hideV1Blocks": "隐藏 v1 块"
                    },
                    en: {
                        "CCWMMO.test": "Run test",
                        "CCWMMO.broadcast": "Broadcast",
                        "CCWMMO.joinOrCreate": "[METHOD] [ROOM] with server id [GAME_ID] and extra data [NAME]",
                        "CCWMMO.joinOrCreateAndWait": "[METHOD] [ROOM] with server id [GAME_ID] and extra data [NAME] and wait",
                        "CCWMMO.disconnectRoom": "Disconnect",
                        "CCWMMO.reconnectRoom": "Reconnect",
                        "CCWMMO.join_method.joinOrCreate": "Join or create",
                        "CCWMMO.join_method.create": "Create",
                        "CCWMMO.roomLag": "lag(in ms)",
                        "CCWMMO.setRoomExtra": "set extra data of current room to [EXTRA]",
                        "CCWMMO.dispatchRoomStateChanged": "(♻_V1.0) when room state changed",
                        "CCWMMO.roomExtra": "extra data of current room",
                        "CCWMMO.getRoomInfo": "my [TYPE]",
                        "CCWMMO.roomId": "room ID",
                        "CCWMMO.roomName": "room type",
                        "CCWMMO.roomSessionId": "session ID",
                        "CCWMMO.broadcastMsg": "broadcast [TYPE] with content [CONTENT]",
                        "CCWMMO.dispatchNewMessage": "(♻_V1.0) When new message received",
                        "CCWMMO.dispatchNewMessageWithParams": "When new message received, sender session Id = [sender] UUID = [senderUID] name = [name] msg type = [type] content = [content]",
                        "CCWMMO.getMessage": "(♻_V1.0) last message and [ACTION]",
                        "CCWMMO.msgActionDelete": "delete",
                        "CCWMMO.msgActionKeep": "keep",
                        "CCWMMO.getLastMessageContent": "(♻_V1.0) current messange's [ACTION]",
                        "CCWMMO.msgInfoType": "type",
                        "CCWMMO.msgInfoSender.SessionId": "sender's Session ID",
                        "CCWMMO.msgInfoSender.Name": "sender's name",
                        "CCWMMO.msgInfoMessageContent": "content",
                        "CCWMMO.getMsgCount": "(♻_V1.0) message count",
                        "CCWMMO.getClientList": "list of online players in format [FORMAT]",
                        "CCWMMO.clientListFormat.default": "default",
                        "CCWMMO.clientListFormat.JSON": "JSON",
                        "CCWMMO.getPlayerCount": "online player count",
                        "CCWMMO.getPlayerInfo": "[PLAYER_INFO] of [SESSION_ID]",
                        "CCWMMO.playerInfoSessionId": "Session ID",
                        "CCWMMO.playerInfoName": "Name",
                        "CCWMMO.playerInfoX": "X",
                        "CCWMMO.playerInfoY": "Y",
                        "CCWMMO.playerInfoScale": "Scale",
                        "CCWMMO.playerInfoDirection": "Direction",
                        "CCWMMO.playerInfoConnected": "connected?",
                        "CCWMMO.playerInfoUUID": "CCW UUID",
                        "CCWMMO.playerInfoShortID": "CCW ID(short)",
                        "CCWMMO.playerInfoExtra": "Extra Data",
                        "CCWMMO.playerInfoJSON": "All data in JSON",
                        "CCWMMO.setPlayerState": "set [PLAYER_INFO] to [VALUE]",
                        "CCWMMO.setPlayerStateXY": "set x:[X] y:[Y]",
                        "CCWMMO.dispatchNewPlayer": "(♻_V1.0) when new player connected",
                        "CCWMMO.dispatchNewPlayerWithParams": "When new player connected, sessionId = [sessionId], name = [name], data = [data]",
                        "CCWMMO.dispatchPlayerLeave": "(♻_V1.0) when player disconnected",
                        "CCWMMO.dispatchPlayerLeaveWithParams": "When player disconnected, sessionId = [sessionId], name = [name], data = [data]",
                        "CCWMMO.dispatchPlayerLeaveAbnormal": "when I disconnected abnormally",
                        "CCWMMO.getNewPlayerInfo": "[PLAYER_INFO] of the last connected player",
                        "CCWMMO.getLastLeftPlayerInfo": "[PLAYER_INFO] of the last disconnected player",
                        "CCWMMO.getLastStateChangedPlayerInfo": "[PLAYER_INFO] of the last state changed player",
                        "CCWMMO.getPlayerInfoFromIndex": "[PLAYER_INFO] from [INDEX] of players",
                        "CCWMMO.dispatchPlayerChanged": "(♻_V1.0) when player state changed",
                        "CCWMMO.dispatchPlayerChangedWithParams": "When player state changed, sessionId = [sessionId], name = [name], data = [data]",
                        "CCWMMO.createCloneWithLastPlayerState": "clone this sprite with state of session ID:[SESSION_ID]",
                        "CCWMMO.getThisClonePlayerInfo": "player's [PLAYER_INFO] of this clone",
                        "CCWMMO.isThisAClone": "is a clone?",
                        "CCWMMO.dispatchRoomEnter": "When I connected to a room",
                        "CCWMMO.thisCloneIsMe": "(❌ DEPRECATED) am I this clone?",
                        "CCWMMO.thisCloneIsMeOrNot": "[AMI] this clone?",
                        "CCWMMO.isMe.true": "am I",
                        "CCWMMO.isMe.false": "am I not",
                        "CCWMMO.isCloneSessionIdEqualTo": "is clone's session ID = [SESSION_ID]?",
                        "CCWMMO.dispatchLobbyRoomChanged": "(♻_V1.0) When rooms in lobby changed",
                        "CCWMMO.dispatchLobbyRoomChangedWithParams": "when rooms in lobby [TYPE], changed room = [rooms]",
                        "CCWMMO.lobbyChangedType.any": "any changes",
                        "CCWMMO.lobbyChangedType.create": "created",
                        "CCWMMO.lobbyChangedType.removed": "removed",
                        "CCWMMO.joinMatchmaking": "Join a match room id [ROOM_ID] with server id [GAME_ID] and extra data [NAME]",
                        "CCWMMO.joinMatchmakingAndWait": "Join a match room id [ROOM_ID] with server id [GAME_ID] and extra data [NAME] and wait",
                        "CCWMMO.setMatchRoomSize": "Set match room max players to [SIZE]",
                        "CCWMMO.lockRoom": "Lock match room [LOCK]",
                        "CCWMMO.dispatchMessageListChanged": "(♻_V1.0) when message list changed",
                        "CCWMMO.fillMessageToList": "(♻_V1.0) fill [MESSAGE_INFO] of message into list [LIST]",
                        "CCWMMO.deleteMessageAt": "(♻_V1.0) delete message at [INDEX] (start from 0)",
                        "CCWMMO.getLobbyRoomInfoAt": "get [ROOM_INFO] from [INDEX] of rooms in lobby",
                        "CCWMMO.getLobbyRoomCount": "rooms in lobby",
                        "CCWMMO.setMatchRoomToList": "fill [ROOM_INFO] match rooms into list [LIST]",
                        "CCWMMO.getMatchRooms": "get [CONDITION] match rooms",
                        "CCWMMO.getMatchRoom.condition.all": "all",
                        "CCWMMO.getMatchRoom.condition.locked": "locked",
                        "CCWMMO.getMatchRoom.condition.unlocked": "unlocked",
                        "CCWMMO.lobby": "lobby",
                        "CCWMMO.matchRoom": "match room",
                        "CCWMMO.roomClients": "clients",
                        "CCWMMO.roomMaxClients": "max clients",
                        "CCWMMO.roomCreatedAt": "created at",
                        "CCWMMO.roomMetadata": "metadata",
                        "CCWMMO.roomMetadataLocked": "locked?",
                        "CCWMMO.roomMetadataExtra": "extra data",
                        "CCWMMO.roomMetadataJSON": "all data in JSON",
                        "CCWMMO.lock": "Lock",
                        "CCWMMO.unlock": "Unlock",
                        "CCWMMO.enable": "Enable",
                        "CCWMMO.disable": "Disable",
                        "CCWMMO.open": "Open",
                        "CCWMMO.close": "Close",
                        "CCWMMO.enableMultiLogin": "accept multi-ids for one user [MULTI_LOGIN]",
                        "CCWMMO.switchDebugLog": "[OPEN] debug log",
                        "CCWMMO.joinOrCreateMatch": "[METHOD] match room with server id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME]",
                        "CCWMMO.joinOrCreateMatchAndWait": "[METHOD] match room with server id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME] and wait",
                        "CCWMMO.div.Basic": "🚥 Connection and Basic Info",
                        "CCWMMO.div.Lobby": "🗺 Game Lobby",
                        "CCWMMO.div.Match": "🎾 Match Game",
                        "CCWMMO.div.Message": "✉️ Message",
                        "CCWMMO.div.Player": "😽 Player",
                        "CCWMMO.div.PlayerEvent": "🙀 Player Event",
                        "CCWMMO.div.Utils": "🛠 Utils",
                        "CCWMMO.roomStateChangeField.any": "any",
                        "CCWMMO.roomStateChangeField.extra": "extra data",
                        "CCWMMO.roomStateChangeField.onlineCount": "online count",
                        "CCWMMO.dispatchRoomStateChangedWithParams": "when room state [FIELD] changed, session Id = [sessionId], state = [roomState], changes = [changes]",
                        "CCWMMO.div.V1": "♻MMO_V1.0 - more complex",
                        "CCWMMO.showV1Blocks": "show v1 blocks",
                        "CCWMMO.hideV1Blocks": "hide v1 blocks"
                    }
                }),
                this.debugLog.bind(this)
            }
            var t, o, r, s, c, u, C;
            return t = e,
            o = [{
                key: "getHats",
                value: function() {
                    return {
                        CCWMMO_dispatchNewPlayer: {},
                        CCWMMO_dispatchNewMessage: {},
                        CCWMMO_dispatchMessageListChanged: {},
                        CCWMMO_dispatchPlayerLeave: {},
                        CCWMMO_dispatchPlayerChanged: {},
                        CCWMMO_dispatchRoomEnter: {},
                        CCWMMO_dispatchPlayerLeaveAbnormal: {},
                        CCWMMO_dispatchLobbyRoomChanged: {},
                        CCWMMO_dispatchRoomStateChanged: {},
                        CCWMMO_dispatchRoomStateChangedWithParams: {},
                        CCWMMO_dispatchLobbyRoomChangedWithParams: {},
                        CCWMMO_dispatchNewMessageWithParams: {},
                        CCWMMO_dispatchNewPlayerWithParams: {},
                        CCWMMO_dispatchPlayerLeaveWithParams: {},
                        CCWMMO_dispatchPlayerChangedWithParams: {}
                    }
                }
            }, {
                key: "debugLog",
                value: function() {
                    var e;
                    this.debug && this.runtime && this.runtime.logSystem && (e = this.runtime.logSystem).log.apply(e, arguments)
                }
            }, {
                key: "getInfo",
                value: function() {
                    var e = this
                      , t = {
                        opcode: "joinOrCreate",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreate",
                            default: "[METHOD] [ROOM] with game id [GAME_ID] and extra data [NAME]",
                            description: "Join or create a room"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            ROOM: {
                                type: n().STRING,
                                menu: "ROOM_NAME",
                                defaultValue: "broadcast"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , o = {
                        opcode: "joinOrCreateAndWait",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreateAndWait",
                            default: "[METHOD] [ROOM] with game id [GAME_ID] and extra data [NAME] and wait",
                            description: "Join or create a room"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            ROOM: {
                                type: n().STRING,
                                menu: "ROOM_NAME",
                                defaultValue: "broadcast"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , a = {
                        opcode: "joinOrCreateMatch",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreateMatch",
                            default: "[METHOD] match room with id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME]"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            MAX_CLIENTS: {
                                type: n().NUMBER,
                                defaultValue: 5
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , r = {
                        opcode: "joinOrCreateMatchAndWait",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinOrCreateMatchAndWait",
                            default: "[METHOD] match room with id [GAME_ID], max players [MAX_CLIENTS] and extra data [NAME] and wait"
                        }),
                        arguments: {
                            METHOD: {
                                type: n().STRING,
                                defaultValue: "joinOrCreate",
                                menu: "JOIN_METHOD"
                            },
                            MAX_CLIENTS: {
                                type: n().NUMBER,
                                defaultValue: 5
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , s = {
                        opcode: "joinMatchmaking",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinMatchmaking",
                            default: "Join a match room [ROOM_ID] with game id [GAME_ID] and extra data [NAME]"
                        }),
                        arguments: {
                            ROOM_ID: {
                                type: n().STRING,
                                defaultValue: "-"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , c = {
                        opcode: "joinMatchmakingAndWait",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.joinMatchmakingAndWait",
                            default: "Join a match room [ROOM_ID] with game id [GAME_ID] and extra data [NAME] and wait"
                        }),
                        arguments: {
                            ROOM_ID: {
                                type: n().STRING,
                                defaultValue: "-"
                            },
                            GAME_ID: {
                                type: n().STRING,
                                defaultValue: "serverId"
                            },
                            NAME: {
                                type: n().STRING,
                                defaultValue: "data"
                            }
                        }
                    }
                      , M = (i().COMMAND,
                    this.formatMessage({
                        id: "CCWMMO.setMatchRoomSize",
                        default: "Set match room max players to [SIZE]"
                    }),
                    n().NUMBER,
                    {
                        opcode: "lockRoom",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.lockRoom",
                            default: "Lock match room [LOCK]"
                        }),
                        arguments: {
                            LOCK: {
                                menu: "LOCK_MENU",
                                type: n().NUMBER,
                                defaultValue: 1
                            }
                        }
                    })
                      , d = {
                        opcode: "disconnectRoom",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.disconnectRoom",
                            default: "Disconnect",
                            description: "Disconnect room"
                        }),
                        arguments: {}
                    }
                      , u = {
                        opcode: "roomLag",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.roomLag",
                            default: "lag"
                        })
                    }
                      , C = {
                        opcode: "reconnectRoom",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.reconnectRoom",
                            default: "Reconnect",
                            description: "Reconnect room"
                        }),
                        arguments: {}
                    }
                      , h = {
                        opcode: "getRoomInfo",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getRoomInfo",
                            default: "room [TYPE]",
                            description: "Get room infomation"
                        }),
                        arguments: {
                            TYPE: {
                                type: n().STRING,
                                default: "sessionId",
                                menu: "ROOM_INFO"
                            }
                        }
                    }
                      , m = {
                        opcode: "broadcastMsg",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.broadcastMsg",
                            default: "broadcast [TYPE] with content [CONTENT]",
                            description: "Broadcast msg"
                        }),
                        arguments: {
                            TYPE: {
                                type: n().STRING,
                                defaultValue: "message"
                            },
                            CONTENT: {
                                type: n().STRING,
                                defaultValue: "hello"
                            }
                        }
                    }
                      , O = {
                        opcode: "dispatchNewMessage",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewMessage",
                            default: "when new message received",
                            description: "When new message received"
                        }),
                        arguments: {}
                    }
                      , f = {
                        opcode: "dispatchMessageListChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchMessageListChanged",
                            default: "when message list changed",
                            description: "When message list changed"
                        }),
                        arguments: {}
                    }
                      , g = {
                        opcode: "dispatchNewMessageWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewMessageWithParams",
                            default: "When new message received, sender session Id = [sender] UUID = [senderUID] name = [name] msg type = [type] content = [content]",
                            description: "When new message received"
                        }),
                        arguments: {
                            sender: {
                                type: "ccw_hat_parameter"
                            },
                            senderUID: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            type: {
                                type: "ccw_hat_parameter"
                            },
                            content: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , y = {
                        opcode: "getMessage",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.getMessage",
                            default: "get last message and [ACTION]",
                            description: "get last message"
                        }),
                        arguments: {
                            ACTION: {
                                type: n().STRING,
                                menu: "GET_MESSAGE_ACTION"
                            }
                        }
                    }
                      , p = {
                        opcode: "getLastMessageContent",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getLastMessageContent",
                            default: "current messange [ACTION]",
                            description: "Get message infomation"
                        }),
                        arguments: {
                            ACTION: {
                                type: n().STRING,
                                menu: "MESSAGE_INFO"
                            }
                        }
                    }
                      , I = {
                        opcode: "getMsgCount",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getMsgCount",
                            default: "message count",
                            description: "Get message count"
                        }),
                        arguments: {}
                    }
                      , W = {
                        opcode: "fillMessageToList",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.fillMessageToList",
                            default: "fill [MESSAGE_INFO] of message into list [LIST]"
                        }),
                        arguments: {
                            MESSAGE_INFO: {
                                type: n().STRING,
                                menu: "MESSAGE_INFO"
                            },
                            LIST: {
                                type: n().STRING,
                                menu: "LIST_MENU"
                            }
                        }
                    }
                      , R = {
                        opcode: "deleteMessageAt",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.deleteMessageAt",
                            default: "delete message at [INDEX] (start from 0)"
                        }),
                        arguments: {
                            INDEX: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , v = {
                        opcode: "getClientList",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getClientList",
                            default: "list of online players in format [FORMAT]"
                        }),
                        arguments: {
                            FORMAT: {
                                type: n().STRING,
                                defaultValue: "default",
                                menu: "CLIENT_LIST_FORMAT"
                            }
                        }
                    }
                      , N = {
                        opcode: "getPlayerCount",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getPlayerCount",
                            default: "online player count"
                        }),
                        arguments: {}
                    }
                      , E = {
                        opcode: "getPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getPlayerInfo",
                            default: "get [PLAYER_INFO] from [SESSION_ID]",
                            description: "Get message count"
                        }),
                        arguments: {
                            SESSION_ID: {
                                type: n().STRING,
                                defaultValue: "sessionId"
                            },
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , _ = {
                        opcode: "setRoomExtra",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setRoomExtra",
                            default: "set extra data of current room to [EXTRA]"
                        }),
                        arguments: {
                            EXTRA: {
                                type: n().STRING,
                                defaultValue: "{}"
                            }
                        }
                    }
                      , b = {
                        opcode: "dispatchRoomStateChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        shouldRestartExistingThreads: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchRoomStateChanged",
                            default: "when room state changed",
                            description: "When room state changed"
                        }),
                        arguments: {}
                    }
                      , S = {
                        opcode: "dispatchRoomStateChangedWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        shouldRestartExistingThreads: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchRoomStateChangedWithParams",
                            default: "when room state [FIELD] changed, session Id = [sessionId], state = [roomState], changes = [changes]"
                        }),
                        arguments: {
                            FIELD: {
                                type: n().STRING,
                                defaultValue: "*",
                                menu: "ROOM_STATE_CHANGE_FIELD"
                            },
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            roomState: {
                                type: "ccw_hat_parameter"
                            },
                            changes: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , P = {
                        opcode: "roomExtra",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.roomExtra",
                            default: "extra data of current room",
                            description: "Get room extra data"
                        }),
                        arguments: {}
                    }
                      , T = {
                        opcode: "setPlayerState",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setPlayerState",
                            default: "set [PLAYER_INFO] to [VALUE]",
                            description: "set player state"
                        }),
                        arguments: {
                            VALUE: {
                                type: n().STRING,
                                defaultValue: "0"
                            },
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO_WRITEBLE"
                            }
                        }
                    }
                      , A = {
                        opcode: "setPlayerStateXY",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setPlayerStateXY",
                            default: "set x:[X] y:[Y]",
                            description: "set player x and y state"
                        }),
                        arguments: {
                            X: {
                                type: n().NUMBER,
                                defaultValue: 0
                            },
                            Y: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , L = {
                        opcode: "dispatchRoomEnter",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchRoomEnter",
                            default: "when I connected"
                        }),
                        arguments: {}
                    }
                      , w = {
                        opcode: "dispatchNewPlayer",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewPlayer",
                            default: "when new player connected",
                            description: "When new player connected"
                        }),
                        arguments: {}
                    }
                      , x = {
                        opcode: "dispatchNewPlayerWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchNewPlayerWithParams",
                            default: "when new player connected, sessionId = [sessionId], name = [name], data = [data]"
                        }),
                        arguments: {
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            data: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , k = {
                        opcode: "getNewPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getNewPlayerInfo",
                            default: "get [PLAYER_INFO] from the last connected player"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , D = {
                        opcode: "dispatchPlayerLeave",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerLeave",
                            default: "when player disconnected"
                        }),
                        arguments: {}
                    }
                      , F = {
                        opcode: "dispatchPlayerLeaveWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerLeaveWithParams",
                            default: "When player disconnected, sessionId = [sessionId], name = [name], data = [data]"
                        }),
                        arguments: {
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            data: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , G = {
                        opcode: "dispatchPlayerLeaveAbnormal",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerLeaveAbnormal",
                            default: "when I disconnected abnormally"
                        }),
                        arguments: {}
                    }
                      , j = {
                        opcode: "getLastLeftPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getLastLeftPlayerInfo",
                            default: "get [PLAYER_INFO] from the last disconnected player",
                            description: "Get message count"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , U = {
                        opcode: "dispatchPlayerChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerChanged",
                            default: "when player state changed"
                        }),
                        arguments: {}
                    }
                      , Y = {
                        opcode: "dispatchPlayerChangedWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        shouldRestartExistingThreads: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchPlayerChangedWithParams",
                            default: "When player state changed, sessionId = [sessionId], name = [name], data = [data]"
                        }),
                        arguments: {
                            sessionId: {
                                type: "ccw_hat_parameter"
                            },
                            name: {
                                type: "ccw_hat_parameter"
                            },
                            data: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , V = {
                        opcode: "getLastStateChangedPlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getLastStateChangedPlayerInfo",
                            default: "get [PLAYER_INFO] from the last state changed player",
                            description: "Get message count"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , J = {
                        opcode: "getPlayerInfoFromIndex",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getPlayerInfoFromIndex",
                            default: "[PLAYER_INFO] from [INDEX] of players",
                            description: "Get message count"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            },
                            INDEX: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , H = {
                        opcode: "createCloneWithLastPlayerState",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.createCloneWithLastPlayerState",
                            default: "clone this sprite with state of session ID:[SESSION_ID]"
                        }),
                        arguments: {
                            SESSION_ID: {
                                type: n().STRING,
                                defaultValue: "sessionId"
                            }
                        }
                    }
                      , B = {
                        opcode: "getThisClonePlayerInfo",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getThisClonePlayerInfo",
                            default: "get [PLAYER_INFO] from this clone"
                        }),
                        arguments: {
                            PLAYER_INFO: {
                                type: n().STRING,
                                menu: "PLAYER_INFO"
                            }
                        }
                    }
                      , X = {
                        opcode: "isThisAClone",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.isThisAClone",
                            default: "is a clone?"
                        })
                    }
                      , K = {
                        opcode: "thisCloneIsMe",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.thisCloneIsMe",
                            default: "[AMI] this clone?"
                        })
                    }
                      , z = {
                        opcode: "thisCloneIsMeOrNot",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.thisCloneIsMeOrNot",
                            default: "[AMI] this clone?"
                        }),
                        arguments: {
                            AMI: {
                                type: n().STRING,
                                defaultValue: "is",
                                menu: "IS_ME_MENU"
                            }
                        }
                    }
                      , q = {
                        opcode: "isCloneSessionIdEqualTo",
                        blockType: i().BOOLEAN,
                        text: this.formatMessage({
                            id: "CCWMMO.isCloneSessionIdEqualTo",
                            default: "is this clone's session ID = [SESSION_ID]?"
                        }),
                        arguments: {
                            SESSION_ID: {
                                type: n().STRING,
                                defaultValue: "sessionId"
                            }
                        }
                    }
                      , Z = {
                        opcode: "dispatchLobbyRoomChanged",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchLobbyRoomChanged",
                            default: "when rooms in lobby changed"
                        }),
                        arguments: {}
                    }
                      , $ = {
                        opcode: "dispatchLobbyRoomChangedWithParams",
                        blockType: i().HAT,
                        isEdgeActivated: !1,
                        text: this.formatMessage({
                            id: "CCWMMO.dispatchLobbyRoomChangedWithParams",
                            default: "when rooms in lobby [TYPE], changed room = [rooms]"
                        }),
                        arguments: {
                            TYPE: {
                                type: n().STRING,
                                menu: "LOBBY_CHANGED_TYPE",
                                defaultValue: "*"
                            },
                            rooms: {
                                type: "ccw_hat_parameter"
                            }
                        }
                    }
                      , Q = {
                        opcode: "getLobbyRoomInfoAt",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getLobbyRoomInfoAt",
                            default: "get [ROOM_INFO] from [INDEX] of rooms in lobby"
                        }),
                        arguments: {
                            ROOM_INFO: {
                                type: n().STRING,
                                menu: "ROOM_EXT_INFO"
                            },
                            INDEX: {
                                type: n().NUMBER,
                                defaultValue: 0
                            }
                        }
                    }
                      , ee = {
                        opcode: "getLobbyRoomCount",
                        blockType: i().REPORTER,
                        text: this.formatMessage({
                            id: "CCWMMO.getLobbyRoomCount",
                            default: "rooms in lobby"
                        }),
                        arguments: {}
                    }
                      , te = {
                        opcode: "setMatchRoomToList",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.setMatchRoomToList",
                            default: "fill [ROOM_INFO] match rooms into list [LIST]"
                        }),
                        arguments: {
                            ROOM_INFO: {
                                type: n().STRING,
                                menu: "ROOM_EXT_INFO"
                            },
                            LIST: {
                                type: n().STRING,
                                menu: "LIST_MENU"
                            }
                        }
                    }
                      , oe = {
                        opcode: "getMatchRooms",
                        blockType: i().REPORTER,
                        disableMonitor: !0,
                        text: this.formatMessage({
                            id: "CCWMMO.getMatchRooms",
                            default: "[CONDITION] match rooms"
                        }),
                        arguments: {
                            CONDITION: {
                                type: n().STRING,
                                menu: "CONDITION_MENU",
                                defaultValue: "all"
                            }
                        }
                    }
                      , ae = {
                        opcode: "enableMultiLogin",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.enableMultiLogin",
                            default: "accept multi-ids for one user [MULTI_LOGIN]"
                        }),
                        arguments: {
                            MULTI_LOGIN: {
                                type: n().NUMBER,
                                menu: "MULTI_LOGIN",
                                defaultValue: 1
                            }
                        }
                    }
                      , re = {
                        opcode: "switchDebugLog",
                        blockType: i().COMMAND,
                        text: this.formatMessage({
                            id: "CCWMMO.switchDebugLog",
                            default: "[OPEN] debug log"
                        }),
                        arguments: {
                            OPEN: {
                                type: n().NUMBER,
                                menu: "DEBUG_LOG_MENU",
                                defaultValue: 0
                            }
                        }
                    }
                      , ne = [Z, O, y, p, I, f, W, R, w, D, U];
                    ne.forEach((function(t) {
                        t.color1 = "#568ff2",
                        t.hideFromPalette = !e.showV1Blocks
                    }
                    )),
                    [K].forEach((function(e) {
                        e.hideFromPalette = !0
                    }
                    ));
                    var se = {
                        opcode: "showV1Blocks",
                        blockType: i().BUTTON,
                        text: this.showV1Blocks ? this.formatMessage({
                            id: "CCWMMO.hideV1Blocks",
                            default: "hide v1 blocks"
                        }) : this.formatMessage({
                            id: "CCWMMO.showV1Blocks",
                            default: "show v1 blocks"
                        }),
                        onClick: function() {
                            var t;
                            e.showV1Blocks = !e.showV1Blocks,
                            null === (t = localStorage) || void 0 === t || t.setItem("CCWMMO_showV1Blocks", e.showV1Blocks),
                            e.runtime.emit("TOOLBOX_EXTENSIONS_NEED_UPDATE")
                        }
                    };
                    return {
                        id: "CCWMMO",
                        name: "MMO",
                        color1: "#56CCF2",
                        menuIconURI: l.Z,
                        blockIconURI: l.Z,
                        blocks: ["---" + this.formatMessage({
                            id: "CCWMMO.div.Basic",
                            default: "🚥 Connection and Basic Info"
                        }), t, o, d, u, h, _, b, S, P, ae, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Lobby",
                            default: "🗺 Game Lobby"
                        }), $, Q, ee, te, oe, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Match",
                            default: "🎾 Match Game"
                        }), a, r, s, c, M, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Message",
                            default: "✉️ Message"
                        }), m, g, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Player",
                            default: "😽 Player"
                        }), v, N, E, T, A, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.PlayerEvent",
                            default: "🙀 Player Event"
                        }), L, x, k, F, C, G, j, Y, V, J, H, B, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.Utils",
                            default: "🛠 Utils"
                        }), X, K, z, q, re, "---", "---" + this.formatMessage({
                            id: "CCWMMO.div.V1",
                            default: "⏰ v1 blocks"
                        }), se].concat(ne),
                        menus: {
                            JOIN_METHOD: [{
                                text: this.formatMessage("CCWMMO.join_method.joinOrCreate"),
                                value: "joinOrCreate"
                            }, {
                                text: this.formatMessage("CCWMMO.join_method.create"),
                                value: "create"
                            }],
                            LOCK_MENU: {
                                acceptReporters: !0,
                                items: [{
                                    text: this.formatMessage("CCWMMO.lock"),
                                    value: 1
                                }, {
                                    text: this.formatMessage("CCWMMO.unlock"),
                                    value: 0
                                }]
                            },
                            DEBUG_LOG_MENU: [{
                                text: this.formatMessage("CCWMMO.open"),
                                value: 1
                            }, {
                                text: this.formatMessage("CCWMMO.close"),
                                value: 0
                            }],
                            MULTI_LOGIN: [{
                                text: this.formatMessage("CCWMMO.enable"),
                                value: 1
                            }, {
                                text: this.formatMessage("CCWMMO.disable"),
                                value: 0
                            }],
                            ROOM_NAME: [{
                                text: this.formatMessage("CCWMMO.lobby"),
                                value: "lobby"
                            }, {
                                text: this.formatMessage("CCWMMO.matchRoom"),
                                value: "match"
                            }, {
                                text: this.formatMessage("CCWMMO.broadcast"),
                                value: "broadcast"
                            }],
                            ROOM_INFO: [{
                                text: this.formatMessage("CCWMMO.roomSessionId"),
                                value: "sessionId"
                            }, {
                                text: this.formatMessage("CCWMMO.roomId"),
                                value: "id"
                            }, {
                                text: this.formatMessage("CCWMMO.roomName"),
                                value: "name"
                            }],
                            ROOM_EXT_INFO: [{
                                text: this.formatMessage("CCWMMO.roomId"),
                                value: "roomId"
                            }, {
                                text: this.formatMessage("CCWMMO.roomName"),
                                value: "name"
                            }, {
                                text: this.formatMessage("CCWMMO.roomClients"),
                                value: "clients"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMaxClients"),
                                value: "maxClients"
                            }, {
                                text: this.formatMessage("CCWMMO.roomCreatedAt"),
                                value: "createdAt"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadata"),
                                value: "metadata"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadataExtra"),
                                value: "metadata.extra"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadataLocked"),
                                value: "metadata.locked"
                            }, {
                                text: this.formatMessage("CCWMMO.roomMetadataJSON"),
                                value: "JSON"
                            }],
                            LIST_MENU: {
                                acceptReporters: !0,
                                items: "findAllList"
                            },
                            GET_MESSAGE_ACTION: [{
                                text: this.formatMessage("CCWMMO.msgActionDelete"),
                                value: "delete"
                            }, {
                                text: this.formatMessage("CCWMMO.msgActionKeep"),
                                value: "keep"
                            }],
                            MESSAGE_INFO: [{
                                text: this.formatMessage("CCWMMO.msgInfoType"),
                                value: "type"
                            }, {
                                text: this.formatMessage("CCWMMO.msgInfoSender.SessionId"),
                                value: "senderSessionId"
                            }, {
                                text: this.formatMessage("CCWMMO.msgInfoSender.Name"),
                                value: "senderName"
                            }, {
                                text: this.formatMessage("CCWMMO.msgInfoMessageContent"),
                                value: "content"
                            }],
                            PLAYER_INFO: [{
                                text: this.formatMessage("CCWMMO.playerInfoSessionId"),
                                value: "sessionId"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoName"),
                                value: "name"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoX"),
                                value: "x"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoY"),
                                value: "y"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoScale"),
                                value: "scale"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoDirection"),
                                value: "direction"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoUUID"),
                                value: "uuid"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoConnected"),
                                value: "connected"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoExtra"),
                                value: "extra"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoJSON"),
                                value: "JSON"
                            }],
                            PLAYER_INFO_WRITEBLE: [{
                                text: this.formatMessage("CCWMMO.playerInfoName"),
                                value: "name"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoX"),
                                value: "x"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoY"),
                                value: "y"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoScale"),
                                value: "scale"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoDirection"),
                                value: "direction"
                            }, {
                                text: this.formatMessage("CCWMMO.playerInfoExtra"),
                                value: "extra"
                            }],
                            ROOM_STATE_CHANGE_FIELD: [{
                                text: this.formatMessage("CCWMMO.roomStateChangeField.any"),
                                value: "*"
                            }, {
                                text: this.formatMessage("CCWMMO.roomStateChangeField.extra"),
                                value: "extra"
                            }, {
                                text: this.formatMessage("CCWMMO.roomStateChangeField.onlineCount"),
                                value: "onlineCount"
                            }],
                            LOBBY_CHANGED_TYPE: [{
                                text: this.formatMessage("CCWMMO.lobbyChangedType.any"),
                                value: "*"
                            }, {
                                text: this.formatMessage("CCWMMO.lobbyChangedType.create"),
                                value: "+"
                            }, {
                                text: this.formatMessage("CCWMMO.lobbyChangedType.removed"),
                                value: "-"
                            }],
                            CONDITION_MENU: [{
                                text: this.formatMessage("CCWMMO.getMatchRoom.condition.all"),
                                value: "all"
                            }, {
                                text: this.formatMessage("CCWMMO.getMatchRoom.condition.locked"),
                                value: "locked"
                            }, {
                                text: this.formatMessage("CCWMMO.getMatchRoom.condition.unlocked"),
                                value: "unlocked"
                            }],
                            CLIENT_LIST_FORMAT: [{
                                text: this.formatMessage("CCWMMO.clientListFormat.default"),
                                value: "default"
                            }, {
                                text: this.formatMessage("CCWMMO.clientListFormat.JSON"),
                                value: "JSON"
                            }],
                            IS_ME_MENU: [{
                                text: this.formatMessage("CCWMMO.isMe.true"),
                                value: "is"
                            }, {
                                text: this.formatMessage("CCWMMO.isMe.false"),
                                value: "isNot"
                            }]
                        }
                    }
                }
            }, {
                key: "dispatchRoomEnter",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchNewPlayer",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchNewPlayerWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchNewMessage",
                value: function(e) {
                    var t = this.newMsg;
                    return this.newMsg = !1,
                    t
                }
            }, {
                key: "dispatchNewMessageWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerLeave",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerLeaveWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerChangedWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchPlayerLeaveAbnormal",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchLobbyRoomChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchMessageListChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchRoomStateChanged",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchRoomStateChangedWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "dispatchLobbyRoomChangedWithParams",
                value: function(e, t) {
                    return !0
                }
            }, {
                key: "findAllList",
                value: function() {
                    var e = []
                      , t = this.runtime._stageTarget.variables;
                    Object.keys(t).forEach((function(o) {
                        "list" === t[o].type && e.push({
                            text: "".concat(t[o].name),
                            value: t[o].id
                        })
                    }
                    ));
                    try {
                        t = this.runtime._editingTarget.variables
                    } catch (e) {
                        t = "e"
                    }
                    return "e" !== t && this.runtime._editingTarget !== this.runtime._stageTarget && Object.keys(t).forEach((function(o) {
                        "list" === t[o].type && e.push({
                            text: "[PRIVATE]".concat(t[o].name),
                            value: t[o].id
                        })
                    }
                    )),
                    0 === e.length && e.push({
                        text: "-",
                        value: "empty"
                    }),
                    e
                }
            }, {
                key: "_bindPingPong",
                value: function() {
                    var e = this;
                    if (void 0 === this._pingPongTimer && (this._pingPongTimer = setInterval((function() {
                        e._bindPingPong()
                    }
                    ), 5e3)),
                    void 0 === this.currentRoom)
                        return clearInterval(this._pingPongTimer),
                        this._pingPongTimer = void 0,
                        void this.runtime.logSystem.warn("CCW MMO:[_bindPingPong] current room is undefined, you are disconnected, stop PingPong until next room connected");
                    this._pingNow = Date.now(),
                    this._pongNowArr = [],
                    this.currentRoom.send("syscmd:ping", {
                        id: 1
                    }),
                    this.currentRoom.send("syscmd:ping", {
                        id: 2
                    }),
                    this.currentRoom.send("syscmd:ping", {
                        id: 3
                    })
                }
            }, {
                key: "bindRoom",
                value: function(e, t) {
                    var o = this;
                    if (e.state,
                    this.lag = 15,
                    e.onMessage("syscmd:pong", (function(e) {
                        if (o._pongNowArr && (o._pongNowArr.push(Date.now()),
                        o._pongNowArr.length >= 3)) {
                            var t = (o._pongNowArr[0] + o._pongNowArr[1] + o._pongNowArr[2]) / 3 - o._pingNow;
                            o.lag = t,
                            o._pongNowArr = []
                        }
                    }
                    )),
                    e.onMessage("syscmd:newPlayerAdded", (function(a) {
                        var r = a.player;
                        o._lastNewPlayerInfo = r,
                        t.startHats("CCWMMO_dispatchNewPlayer", {}),
                        t.startHatsWithParams("CCWMMO_dispatchNewPlayerWithParams", {
                            parameters: {
                                sessionId: r.sessionId,
                                name: r.name,
                                data: JSON.stringify(r)
                            }
                        }),
                        r.sessionId === e.sessionId && t.startHats("CCWMMO_dispatchRoomEnter", {})
                    }
                    )),
                    e.onMessage("syscmd:playerRemoved", (function(e) {
                        var a = e.player;
                        o._lastLeftPlayerInfo = a,
                        t.startHats("CCWMMO_dispatchPlayerLeave", {}),
                        t.startHatsWithParams("CCWMMO_dispatchPlayerLeaveWithParams", {
                            parameters: {
                                sessionId: a.sessionId,
                                name: a.name,
                                data: JSON.stringify(a)
                            }
                        })
                    }
                    )),
                    e.onMessage("*", (function(e, a) {
                        if ("lobby" === o.currentRoomType) {
                            var r = "[]";
                            if ("rooms" === e && (o.allRooms = a,
                            r = JSON.stringify(a)),
                            "+" === e) {
                                var n = o.allRooms.findIndex((function(e) {
                                    return e.roomId === a[0]
                                }
                                ));
                                -1 !== n ? o.allRooms[n] = a[1] : o.allRooms.push(a[1]),
                                r = JSON.stringify([a[1]])
                            }
                            if ("-" === e) {
                                var s = o.allRooms.filter((function(e) {
                                    return e.roomId === a
                                }
                                ));
                                s.length > 0 && (r = JSON.stringify(s)),
                                o.allRooms = o.allRooms.filter((function(e) {
                                    return e.roomId !== a
                                }
                                ))
                            }
                            return t.startHats("CCWMMO_dispatchLobbyRoomChanged", {}),
                            t.startHatsWithParams("CCWMMO_dispatchLobbyRoomChangedWithParams", {
                                parameters: {
                                    rooms: r
                                },
                                fields: {
                                    TYPE: e
                                }
                            }),
                            void t.startHatsWithParams("CCWMMO_dispatchLobbyRoomChangedWithParams", {
                                parameters: {
                                    rooms: r
                                },
                                fields: {
                                    TYPE: "*"
                                }
                            })
                        }
                        0 != e.indexOf("syscmd:") && (o.msgs.push({
                            type: e,
                            msg: a
                        }),
                        t.startHats("CCWMMO_dispatchNewMessage", {}),
                        t.startHats("CCWMMO_dispatchMessageListChanged", {}),
                        a.who && t.startHatsWithParams("CCWMMO_dispatchNewMessageWithParams", {
                            parameters: {
                                sender: a.who.sessionId,
                                name: a.who.extra.name,
                                senderUID: a.who.extra.uuid,
                                type: e,
                                content: a.msg
                            }
                        }))
                    }
                    )),
                    e.onLeave((function(e) {
                        o.runtime.logSystem.info("CCW MMO: room onLeave", e, !!o.currentRoom),
                        o.currentRoom && o.currentRoom.state && (o._lastLeftPlayerInfo = o.currentRoom.state.players.get(o.currentRoom.sessionId)),
                        e >= 1001 && e <= 1015 || 4001 == e ? t.startHats("CCWMMO_dispatchPlayerLeaveAbnormal", {}) : t.startHats("CCWMMO_dispatchPlayerLeave", {})
                    }
                    )),
                    void 0 !== e && void 0 !== e.state && null !== e.state) {
                        e.state.onChange = function(o) {
                            var a = JSON.stringify(o)
                              , r = JSON.stringify(e.state);
                            o.forEach((function(o) {
                                "extra" == o.field && t.startHats("CCWMMO_dispatchRoomStateChanged", {});
                                var a = JSON.stringify(o);
                                t.startHatsWithParams("CCWMMO_dispatchRoomStateChangedWithParams", {
                                    parameters: {
                                        sessionId: e.sessionId,
                                        roomState: r,
                                        changes: a
                                    },
                                    fields: {
                                        FIELD: o.field
                                    }
                                })
                            }
                            )),
                            t.startHatsWithParams("CCWMMO_dispatchRoomStateChangedWithParams", {
                                parameters: {
                                    sessionId: e.sessionId,
                                    roomState: r,
                                    changes: a
                                },
                                fields: {
                                    FIELD: "*"
                                }
                            })
                        }
                        ,
                        e.state.players && (e.state.players.onChange = function(e, a) {
                            o._lastStateChangedPlayerInfo = e,
                            t.startHats("CCWMMO_dispatchPlayerChanged", {}),
                            t.startHatsWithParams("CCWMMO_dispatchPlayerChangedWithParams", {
                                parameters: {
                                    sessionId: e.sessionId,
                                    name: e.name,
                                    data: JSON.stringify(e)
                                }
                            })
                        }
                        ),
                        this._bindPingPong();
                        try {
                            this.runtime.ccwAPI.sendPlayEventCode([8590983174, 1], {
                                code: "2",
                                data: ""
                            })
                        } catch (e) {
                            this.runtime.logSystem.warn("CCW MMO: sendPlayEventCode error", e)
                        }
                    }
                }
            }, {
                key: "disconnectRoomAndWait",
                value: (C = p(g().mark((function e() {
                    return g().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this.runtime.logSystem.warn("CCW MMO: disconnect room and wait ".concat(!!this.currentRoom, " ...")),
                                !this.currentRoom) {
                                    e.next = 12;
                                    break
                                }
                                return e.prev = 2,
                                e.next = 5,
                                this.currentRoom.leave(!1);
                            case 5:
                                this.debugLog("CCW MMO: disconnect room - success"),
                                this.afterDisconnectedRoom(),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(2),
                                this.runtime.logSystem.error("CCW MMO: disconnect room - error", e.t0);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[2, 9]])
                }
                ))),
                function() {
                    return C.apply(this, arguments)
                }
                )
            }, {
                key: "afterDisconnectedRoom",
                value: function() {
                    var e;
                    null === (e = this.currentRoom) || void 0 === e || e.removeAllListeners(),
                    this.currentRoom = void 0,
                    clearInterval(this._pingPongTimer),
                    this._pingPongTimer = void 0,
                    this.currentRoomType = void 0,
                    this.msgs = new Array,
                    this.currentMsg = void 0,
                    "lobby" === this.currentRoomType && (this.allRooms = []),
                    this.debugLog("CCW MMO: afterDisconnectedRoom - reset current room")
                }
            }, {
                key: "reconnectRoom",
                value: function(e, t) {
                    var o = this;
                    this.currentRoom && this.currentRoom.sessionId && this.currentRoom.id && this.client && this.client.reconnect(this.currentRoom.id, this.currentRoom.sessionId).then((function(e) {
                        o.currentRoom.removeAllListeners(),
                        o.currentRoom = e,
                        o.bindRoom(e, t)
                    }
                    )).catch((function(e) {
                        o.runtime.logSystem.error("CCW MMO: reconnect error", e)
                    }
                    ))
                }
            }, {
                key: "getRoomInfo",
                value: function(e) {
                    return void 0 === this.currentRoom ? NaN : "id" === e.TYPE ? this.currentRoom.id : "name" === e.TYPE ? this.currentRoom.name : "sessionId" === e.TYPE ? this.currentRoom.sessionId : NaN
                }
            }, {
                key: "setRoomExtra",
                value: function(e, t) {
                    if (void 0 === this.currentRoom)
                        return this.runtime.logSystem.warn("CCW MMO:[setRoomExtra] current room is undefined", e),
                        NaN;
                    this.currentRoom.send("syscmd:set_room_state", {
                        extra: M().toString(e.EXTRA)
                    })
                }
            }, {
                key: "roomExtra",
                value: function(e, t) {
                    return this.currentRoom && this.currentRoom.state ? this.currentRoom.state.extra : NaN
                }
            }, {
                key: "broadcastMsg",
                value: function(e) {
                    void 0 !== this.currentRoom ? this.currentRoom.send(M().toString(e.TYPE), e.CONTENT) : this.runtime.logSystem.warn("CCW MMO: [broadcastMsg] currentRoom is not connected")
                }
            }, {
                key: "getMessage",
                value: function(e, t) {
                    "delete" === e.ACTION ? (this.currentMsg = this.msgs.shift(),
                    t.startHats("CCWMMO_dispatchMessageListChanged", {})) : this.currentMsg = this.msgs[0],
                    this.currentMsg
                }
            }, {
                key: "getLastMessageContent",
                value: function(e) {
                    return void 0 === this.currentMsg && (this.currentMsg = this.msgs[0]),
                    void 0 === this.currentMsg ? (this.runtime.logSystem.warn("CCW MMO: [getLastMessageContent] no message to process"),
                    NaN) : (this.currentMsg,
                    "type" === e.ACTION ? this.currentMsg.type : "content" === e.ACTION ? this.currentMsg.msg.msg : "senderSessionId" === e.ACTION ? this.currentMsg.msg.who.sessionId : "senderName" === e.ACTION ? this.currentMsg.msg.who.name : NaN)
                }
            }, {
                key: "getMsgCount",
                value: function(e) {
                    return void 0 === this.msgs ? 0 : this.msgs.length
                }
            }, {
                key: "fillMessageToList",
                value: function(e, t) {
                    if ("empty" !== e.LIST) {
                        var o = t.target.lookupVariableById(e.LIST);
                        if (void 0 === o && (o = t.target.lookupVariableByNameAndType(e.LIST, "list")),
                        void 0 === o)
                            return;
                        e.LIST;
                        for (var a = [], r = 0; r < this.msgs.length; r++) {
                            var n = void 0;
                            "type" === e.MESSAGE_INFO ? n = this.msgs[r].type : "content" === e.MESSAGE_INFO ? n = this.msgs[r].msg.msg : "senderSessionId" === e.MESSAGE_INFO ? n = this.msgs[r].msg.who.sessionId : "senderName" === e.MESSAGE_INFO && (n = this.msgs[r].msg.who.name),
                            a.push(n)
                        }
                        o.value = a
                    }
                }
            }, {
                key: "deleteMessageAt",
                value: function(e, t) {
                    void 0 !== this.msgs && (e.INDEX >= this.msgs.length || (this.msgs.splice(e.INDEX, 1),
                    t.startHats("CCWMMO_dispatchMessageListChanged", {})))
                }
            }, {
                key: "getClientList",
                value: function(e) {
                    var t = "";
                    return void 0 === this.currentRoom || void 0 === this.currentRoom.state || void 0 === this.currentRoom.state.players ? "JSON" === e.FORMAT ? "[]" : t : ("JSON" === e.FORMAT ? t = JSON.stringify(O(this.currentRoom.state.players.values())) : this.currentRoom.state.players.forEach((function(e) {
                        t += "".concat(e.sessionId, ",").concat(e.uuid, ",").concat(e.name, ";")
                    }
                    )),
                    t)
                }
            }, {
                key: "getPlayerCount",
                value: function(e) {
                    return void 0 === this.currentRoom || void 0 === this.currentRoom.state || null === this.currentRoom.state || void 0 === this.currentRoom.state.players ? 0 : this.currentRoom.state.players.size
                }
            }, {
                key: "getPlayerInfo",
                value: function(e) {
                    if (void 0 === this.currentRoom || void 0 === this.currentRoom.state || null === this.currentRoom.state)
                        return "";
                    var t = this.currentRoom.state.players.get(e.SESSION_ID);
                    return t ? "JSON" === e.PLAYER_INFO ? JSON.stringify(t) : t[e.PLAYER_INFO] : ""
                }
            }, {
                key: "_incrementalUpdateStateWithThrottle",
                value: function(e) {
                    return this.currentPlayer = Object.assign(this.currentPlayer, e),
                    this.currentPlayerToSync = Object.assign(this.currentPlayerToSync, e),
                    this.incrementalUpdateStateWithThrottle()
                }
            }, {
                key: "setPlayerState",
                value: function(e) {
                    if (void 0 !== this.currentRoom && void 0 !== this.currentRoom.state) {
                        var t = e.VALUE;
                        t = "x" === e.PLAYER_INFO || "y" === e.PLAYER_INFO || "scale" === e.PLAYER_INFO || "direction" === e.PLAYER_INFO ? +M().toNumber(t).toFixed(2) || 0 : M().toString(t) || "";
                        var o = {};
                        o[e.PLAYER_INFO] = t,
                        this.currentPlayer[e.PLAYER_INFO] !== t && this._incrementalUpdateStateWithThrottle(o)
                    }
                }
            }, {
                key: "setPlayerStateXY",
                value: function(e) {
                    if (void 0 !== this.currentRoom && void 0 !== this.currentRoom.state) {
                        var t = +M().toNumber(e.X).toFixed(2) || 0
                          , o = +M().toNumber(e.Y).toFixed(2) || 0
                          , a = {};
                        a.x = t,
                        a.y = o,
                        this.currentPlayer.x === t && this.currentPlayer.y === o || this._incrementalUpdateStateWithThrottle(a)
                    }
                }
            }, {
                key: "getNewPlayerInfo",
                value: function(e) {
                    return void 0 === this._lastNewPlayerInfo ? "" : "JSON" === e.PLAYER_INFO ? JSON.stringify(this._lastNewPlayerInfo) : this._lastNewPlayerInfo[e.PLAYER_INFO]
                }
            }, {
                key: "getLastLeftPlayerInfo",
                value: function(e) {
                    return void 0 === this._lastLeftPlayerInfo ? "" : "JSON" === e.PLAYER_INFO ? JSON.stringify(this._lastLeftPlayerInfo) : this._lastLeftPlayerInfo[e.PLAYER_INFO]
                }
            }, {
                key: "getLastStateChangedPlayerInfo",
                value: function(e) {
                    return void 0 === this._lastStateChangedPlayerInfo ? "" : "JSON" === e.PLAYER_INFO ? JSON.stringify(this._lastStateChangedPlayerInfo) : this._lastStateChangedPlayerInfo[e.PLAYER_INFO]
                }
            }, {
                key: "getPlayerInfoFromIndex",
                value: function(e) {
                    if (void 0 === this.currentRoom || void 0 === this.currentRoom.state || null === this.currentRoom.state || void 0 === this.currentRoom.state.players)
                        return "";
                    if (e.INDEX >= this.currentRoom.state.players.size)
                        return "";
                    var t = O(this.currentRoom.state.players.keys())
                      , o = this.currentRoom.state.players.get(t[e.INDEX]);
                    return o ? "JSON" === e.PLAYER_INFO ? JSON.stringify(o) : o[e.PLAYER_INFO] : ""
                }
            }, {
                key: "createCloneWithLastPlayerState",
                value: (u = p(g().mark((function e(t, o) {
                    var a, r, n, s, i, c, l = this;
                    return g().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (a = o.thread,
                                (r = M().toString(t.SESSION_ID)) && "" !== r) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                if (void 0 !== this.currentRoom && void 0 !== this.currentRoom.state && void 0 !== this.currentRoom.state.players) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return");
                            case 7:
                                return n = function() {
                                    return new Promise((function(e, t) {
                                        var o = 20
                                          , a = setInterval((function() {
                                            l.currentRoom.state.players.get(r) && (clearInterval(a),
                                            e(h({}, l.currentRoom.state.players.get(r)))),
                                            --o <= 0 && (l.runtime.logSystem.warn("clone failed, cannot get player state"),
                                            clearInterval(a),
                                            t(!1))
                                        }
                                        ), 500)
                                    }
                                    ))
                                }
                                ,
                                s = o.target,
                                e.next = 11,
                                n();
                            case 11:
                                if (!1 !== (i = e.sent)) {
                                    e.next = 14;
                                    break
                                }
                                return e.abrupt("return");
                            case 14:
                                (c = s.makeClone()) && (c.MMOPlayerInfo = i,
                                c.MMOPlayerSessionId = r,
                                this.runtime.addTarget(c, a),
                                c.goBehindOther(s)),
                                r && void 0 === i.sessionId && setTimeout((function() {
                                    c.MMOPlayerInfo = h({}, l.currentRoom.state.players.get(r))
                                }
                                ), 5e3);
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "getThisClonePlayerInfo",
                value: function(e, t) {
                    if (void 0 === t.target.MMOPlayerInfo || void 0 === this.currentRoom || void 0 === this.currentRoom.state || void 0 === this.currentRoom.state.players)
                        return "";
                    var o = t.target.MMOPlayerInfo.sessionId;
                    return o || (o = t.target.MMOPlayerSessionId),
                    void 0 === this.currentRoom.state.players.get(o) ? (this.runtime.logSystem.warn("getThisClonePlayerInfo: playerState is undefined!!!"),
                    "JSON" === e.PLAYER_INFO ? JSON.stringify(t.target.MMOPlayerInfo) || "" : t.target.MMOPlayerInfo[e.PLAYER_INFO] || "") : "JSON" === e.PLAYER_INFO ? JSON.stringify(this.currentRoom.state.players.get(o)) : this.currentRoom.state.players.get(o)[e.PLAYER_INFO] || ""
                }
            }, {
                key: "isThisAClone",
                value: function(e, t) {
                    return !t.target.isOriginal
                }
            }, {
                key: "_cloneIsMe",
                value: function(e) {
                    return !e.target.isOriginal && void 0 !== e.target.MMOPlayerInfo && void 0 !== this.currentRoom && void 0 !== this.currentRoom.state && void 0 !== this.currentRoom.state.players && (e.target.MMOPlayerInfo.sessionId === this.currentRoom.sessionId || e.target.MMOPlayerSessionId === this.currentRoom.sessionId)
                }
            }, {
                key: "thisCloneIsMe",
                value: function(e, t) {
                    return this._cloneIsMe(t)
                }
            }, {
                key: "thisCloneIsMeOrNot",
                value: function(e, t) {
                    return "isNot" === e.AMI ? !this._cloneIsMe(t) : this._cloneIsMe(t)
                }
            }, {
                key: "isCloneSessionIdEqualTo",
                value: function(e, t) {
                    return !t.target.isOriginal && void 0 !== t.target.MMOPlayerInfo && t.target.MMOPlayerInfo.sessionId === e.SESSION_ID
                }
            }, {
                key: "getLobbyRoomCount",
                value: function(e, t) {
                    return this.allRooms.length
                }
            }, {
                key: "getLobbyRoomInfoAt",
                value: function(e, t) {
                    if (this.allRooms,
                    e.INDEX >= 0 && e.INDEX < this.allRooms.length) {
                        if ("JSON" === e.ROOM_INFO)
                            return JSON.stringify(this.allRooms[e.INDEX]);
                        if (0 === e.ROOM_INFO.indexOf("metadata.")) {
                            var o = e.ROOM_INFO.substr(9);
                            return this.allRooms[e.INDEX].metadata[o]
                        }
                        return "metadata" === e.ROOM_INFO ? JSON.stringify(this.allRooms[e.INDEX][e.ROOM_INFO]) : this.allRooms[e.INDEX][e.ROOM_INFO]
                    }
                    return NaN
                }
            }, {
                key: "getMatchRooms",
                value: function(e, t) {
                    if (void 0 === this.allRooms)
                        return "[]";
                    var o;
                    return o = e.CONDITION.indexOf("locked") >= 0 ? this.allRooms.filter((function(t) {
                        return t.metadata.locked === ("locked" === e.CONDITION)
                    }
                    )) : this.allRooms,
                    JSON.stringify(o)
                }
            }, {
                key: "setMatchRoomToList",
                value: function(e, t) {
                    if ("empty" !== e.LIST) {
                        var o = t.target.lookupVariableById(e.LIST);
                        if (void 0 === o && (o = t.target.lookupVariableByNameAndType(e.LIST, "list")),
                        void 0 === o)
                            return;
                        e.LIST;
                        for (var a = [], r = 0; r < this.allRooms.length; r++)
                            if (0 === e.ROOM_INFO.indexOf("metadata.")) {
                                var n = e.ROOM_INFO.substr(9);
                                a.push(this.allRooms[r].metadata[n])
                            } else
                                "metadata" === e.ROOM_INFO ? a.push(JSON.stringify(this.allRooms[r][e.ROOM_INFO])) : "JSON" === e.ROOM_INFO ? a.push(JSON.stringify(this.allRooms[r])) : a.push(this.allRooms[r][e.ROOM_INFO]);
                        o.value = a
                    }
                }
            }, {
                key: "joinOrCreate",
                value: function(e, t) {
                    this.runtime.logSystem.info("CCW MMO: joinOrCreate room ".concat(e.GAME_ID, "...")),
                    this.joinOrCreateAndWait(e, t).then((function() {}
                    )).catch((function(e) {
                        error("CCW MMO: joinOrCreate error", e)
                    }
                    ))
                }
            }, {
                key: "joinOrCreateAndWait",
                value: (c = p(g().mark((function e(t, o) {
                    var a = this;
                    return g().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.isJoining) {
                                    e.next = 3;
                                    break
                                }
                                return this.runtime.logSystem.warn("CCW MMO: is joining, ignore this request"),
                                e.abrupt("return");
                            case 3:
                                if (this.isJoining = !0,
                                this.runtime.logSystem.info("CCW MMO: joinOrCreateAndWait room ".concat(t.GAME_ID, "...")),
                                !this.currentRoom) {
                                    e.next = 8;
                                    break
                                }
                                return this.runtime.logSystem.warn("CCW MMO: alreay in a room"),
                                e.abrupt("return");
                            case 8:
                                return "joinOrCreate" !== t.METHOD && "create" !== t.METHOD && (t.METHOD = "joinOrCreate"),
                                e.next = 11,
                                this.client[t.METHOD](t.ROOM, {
                                    name: this.ccwUserNickname,
                                    uuid: this.ccwUserUUID,
                                    gid: "".concat(this.ccwProjectUUID, "-").concat(t.GAME_ID),
                                    matchId: "match" === t.ROOM ? "".concat(Math.random()) : void 0,
                                    extra: t.NAME,
                                    max: t.MAX_CLIENTS,
                                    filter: {
                                        name: "match",
                                        metadata: "lobby" === t.ROOM ? {
                                            gid: "".concat(this.ccwProjectUUID, "-").concat(t.GAME_ID)
                                        } : void 0
                                    }
                                }).then((function(e) {
                                    a.debugLog("CCW MMO: joined a ".concat(t.ROOM, " room")),
                                    a.currentRoom = e,
                                    a.currentRoomType = t.ROOM,
                                    e.sessionId,
                                    e.name,
                                    a.bindRoom(e, o)
                                }
                                )).finally((function() {
                                    a.isJoining = !1
                                }
                                ));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "enableMultiLogin",
                value: function(e, t) {
                    var o = "1" === e.MULTI_LOGIN || 1 === e.MULTI_LOGIN;
                    this.currentRoom && this.currentRoomMultiJoinState !== o && (this.currentRoom.send("syscmd:enableMultiJoin", e.MULTI_LOGIN),
                    this.currentRoomMultiJoinState = o)
                }
            }, {
                key: "disconnectRoom",
                value: function(e) {
                    return this.disconnectRoomAndWait().then((function() {}
                    )).catch((function(e) {
                        error("CCW MMO: disconnectRoom err", e)
                    }
                    ))
                }
            }, {
                key: "roomLag",
                value: function(e) {
                    return this.currentRoom ? this.lag : -1
                }
            }, {
                key: "joinOrCreateMatch",
                value: function(e, t) {
                    this.runtime.logSystem.info("CCW MMO: joinOrCreateMatch ".concat(e.GAME_ID, "...")),
                    e.ROOM = "match",
                    this.joinOrCreate(e, t)
                }
            }, {
                key: "joinOrCreateMatchAndWait",
                value: (s = p(g().mark((function e(t, o) {
                    return g().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return this.runtime.logSystem.info("CCW MMO: joinOrCreateMatchAndWait ".concat(t.GAME_ID, "...")),
                                t.ROOM = "match",
                                e.next = 4,
                                this.joinOrCreateAndWait(t, o);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e, t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "joinMatchmaking",
                value: function(e, t) {
                    this.runtime.logSystem.info("CCW MMO: joinMatchmaking ".concat(e.ROOM_ID, "...")),
                    this.joinMatchmakingAndWait(e, t).then((function() {}
                    )).catch((function(e) {
                        error("CCW MMO: joinMatchmaking err", e)
                    }
                    ))
                }
            }, {
                key: "joinMatchmakingAndWait",
                value: (r = p(g().mark((function e(t, o) {
                    var a = this;
                    return g().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!this.isJoining) {
                                    e.next = 3;
                                    break
                                }
                                return this.runtime.logSystem.warn("CCW MMO: is joining, ignore this request"),
                                e.abrupt("return");
                            case 3:
                                return this.isJoining = !0,
                                this.runtime.logSystem.info("CCW MMO: joinMatchmakingAndWait ".concat(t.ROOM_ID, "...")),
                                e.prev = 5,
                                e.next = 8,
                                this.disconnectRoomAndWait();
                            case 8:
                                return e.next = 11,
                                this.client.joinById(t.ROOM_ID, {
                                    name: this.ccwUserNickname,
                                    uuid: this.ccwUserUUID,
                                    gid: "".concat(this.ccwProjectUUID, "-").concat(t.GAME_ID),
                                    extra: t.NAME
                                }).then((function(e) {
                                    a.debugLog("CCW MMO: joined a match room"),
                                    a.currentRoom = e,
                                    a.currentRoomType = "match",
                                    e.sessionId,
                                    e.name,
                                    a.bindRoom(e, o),
                                    e.state,
                                    o.startHats("CCWMMO_dispatchRoomEnter", {})
                                }
                                )).catch((function(e) {
                                    error("JOIN ERROR", e)
                                }
                                ));
                            case 11:
                                return e.prev = 11,
                                this.isJoining = !1,
                                e.finish(11);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this, [[5, , 11, 14]])
                }
                ))),
                function(e, t) {
                    return r.apply(this, arguments)
                }
                )
            }, {
                key: "setMatchRoomSize",
                value: function(e, t) {
                    void 0 !== this.currentRoom ? this.currentRoom.send("syscmd:maxClients", e.SIZE) : this.runtime.logSystem.warn("setMatchRoomSize", "currentRoom is undefined")
                }
            }, {
                key: "lockRoom",
                value: function(e, t) {
                    void 0 !== this.currentRoom && this.currentRoom.send("syscmd:lock", e.LOCK > 0)
                }
            }, {
                key: "switchDebugLog",
                value: function(e) {
                    this.debug = Number(e.OPEN) > 0,
                    this.debug ? this.runtime.logSystem.log("CCW MMO: show debug log") : this.runtime.logSystem.log("CCW MMO: close debug log")
                }
            }],
            o && I(t.prototype, o),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    }
}]);
