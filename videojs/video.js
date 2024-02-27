/**
 * @license
 * Video.js 8.6.1 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/main/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).videojs = t()
}(this, function () {
    "use strict";
    var M = "8.6.1";
    const U = {}, B = function (e, t) {
        return U[e] = U[e] || [], t && (U[e] = U[e].concat(t)), U[e]
    };

    function F(e, t) {
        return !((t = B(e).indexOf(t)) <= -1 || (U[e] = U[e].slice(), U[e].splice(t, 1), 0))
    }

    const j = {prefixed: !0};
    var q = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]],
        H = q[0];
    let V;
    for (let e = 0; e < q.length; e++) if (q[e][1] in document) {
        V = q[e];
        break
    }
    if (V) {
        for (let e = 0; e < V.length; e++) j[H[e]] = V[e];
        j.prefixed = V[0] !== H[0]
    }
    let u = [];

    function z(e) {
        return K(e) ? Object.keys(e) : []
    }

    const l = function s(r, n = ":", a = "") {
        let t = "info", i;

        function o(...e) {
            i("log", t, e)
        }

        var l, d, h;
        return i = (l = r, d = o, h = a, (t, i, s) => {
            var e, i = d.levels[i], r = new RegExp(`^(${i})$`);
            let n = l;
            if ("log" !== t && s.unshift(t.toUpperCase() + ":"), h && (n = "%c" + l, s.unshift(h)), s.unshift(n + ":"), u && (u.push([].concat(s)), e = u.length - 1e3, u.splice(0, 0 < e ? e : 0)), window.console) {
                let e = window.console[t];
                (e = e || "debug" !== t ? e : window.console.info || window.console.log) && i && r.test(t) && e[Array.isArray(s) ? "apply" : "call"](window.console, s)
            }
        }), o.createLogger = (e, t, i) => s(r + ` ${t = void 0 !== t ? t : n} ` + e, t, void 0 !== i ? i : a), o.createNewLogger = (e, t, i) => s(e, t, i), o.levels = {
            all: "debug|log|warn|error",
            off: "",
            debug: "debug|log|warn|error",
            info: "log|warn|error",
            warn: "warn|error",
            error: "error",
            DEFAULT: t
        }, o.level = e => {
            if ("string" == typeof e) {
                if (!o.levels.hasOwnProperty(e)) throw new Error(`"${e}" in not a valid log level`);
                t = e
            }
            return t
        }, o.history = () => u ? [].concat(u) : [], o.history.filter = t => (u || []).filter(e => new RegExp(`.*${t}.*`).test(e[0])), o.history.clear = () => {
            u && (u.length = 0)
        }, o.history.disable = () => {
            null !== u && (u.length = 0, u = null)
        }, o.history.enable = () => {
            null === u && (u = [])
        }, o.error = (...e) => i("error", t, e), o.warn = (...e) => i("warn", t, e), o.debug = (...e) => i("debug", t, e), o
    }("VIDEOJS"), $ = l.createLogger, W = Object.prototype.toString;

    function G(t, i) {
        z(t).forEach(e => i(t[e], e))
    }

    function X(i, s, e = 0) {
        return z(i).reduce((e, t) => s(e, i[t], t), e)
    }

    function K(e) {
        return !!e && "object" == typeof e
    }

    function Y(e) {
        return K(e) && "[object Object]" === W.call(e) && e.constructor === Object
    }

    function d(...e) {
        const i = {};
        return e.forEach(e => {
            e && G(e, (e, t) => {
                Y(e) ? (Y(i[t]) || (i[t] = {}), i[t] = d(i[t], e)) : i[t] = e
            })
        }), i
    }

    function Q(e = {}) {
        var t, i = [];
        for (const s in e) e.hasOwnProperty(s) && (t = e[s], i.push(t));
        return i
    }

    function J(t, i, s, e = !0) {
        const r = e => Object.defineProperty(t, i, {value: e, enumerable: !0, writable: !0});
        var n = {
            configurable: !0, enumerable: !0, get() {
                var e = s();
                return r(e), e
            }
        };
        return e && (n.set = r), Object.defineProperty(t, i, n)
    }

    var Z = Object.freeze({
        __proto__: null,
        each: G,
        reduce: X,
        isObject: K,
        isPlain: Y,
        merge: d,
        values: Q,
        defineLazyProperty: J
    });
    let ee = !1, te = null, ie = !1, se, re = !1, ne = !1, ae = !1, oe = !1, le = null, de = null, he = null, ue = !1,
        ce = !1, pe = !1, me = !1;
    const ge = Boolean(ve() && ("ontouchstart" in window || window.navigator.maxTouchPoints || window.DocumentTouch && window.document instanceof window.DocumentTouch));
    var fe, e = window.navigator && window.navigator.userAgentData;
    if (e && (ie = "Android" === e.platform, ne = Boolean(e.brands.find(e => "Microsoft Edge" === e.brand)), ae = Boolean(e.brands.find(e => "Chromium" === e.brand)), oe = !ne && ae, le = de = (e.brands.find(e => "Chromium" === e.brand) || {}).version || null, ce = "Windows" === e.platform), !ae) {
        const R = window.navigator && window.navigator.userAgent || "";
        ee = /iPod/i.test(R), te = (e = R.match(/OS (\d+)_/i)) && e[1] ? e[1] : null, ie = /Android/i.test(R), se = (e = R.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)) ? (ft = e[1] && parseFloat(e[1]), fe = e[2] && parseFloat(e[2]), ft && fe ? parseFloat(e[1] + "." + e[2]) : ft || null) : null, re = /Firefox/i.test(R), ne = /Edg/i.test(R), ae = /Chrome/i.test(R) || /CriOS/i.test(R), oe = !ne && ae, le = de = (fe = R.match(/(Chrome|CriOS)\/(\d+)/)) && fe[2] ? parseFloat(fe[2]) : null, he = function () {
            var e = /MSIE\s(\d+)\.\d/.exec(R);
            let t = e && parseFloat(e[1]);
            return t = !t && /Trident\/7.0/i.test(R) && /rv:11.0/.test(R) ? 11 : t
        }(), ue = /Safari/i.test(R) && !oe && !ie && !ne, ce = /Windows/i.test(R), pe = /iPad/i.test(R) || ue && ge && !/iPhone/i.test(R), me = /iPhone/i.test(R) && !pe
    }
    const c = me || pe || ee, ye = (ue || c) && !oe;
    e = Object.freeze({
        __proto__: null, get IS_IPOD() {
            return ee
        }, get IOS_VERSION() {
            return te
        }, get IS_ANDROID() {
            return ie
        }, get ANDROID_VERSION() {
            return se
        }, get IS_FIREFOX() {
            return re
        }, get IS_EDGE() {
            return ne
        }, get IS_CHROMIUM() {
            return ae
        }, get IS_CHROME() {
            return oe
        }, get CHROMIUM_VERSION() {
            return le
        }, get CHROME_VERSION() {
            return de
        }, get IE_VERSION() {
            return he
        }, get IS_SAFARI() {
            return ue
        }, get IS_WINDOWS() {
            return ce
        }, get IS_IPAD() {
            return pe
        }, get IS_IPHONE() {
            return me
        }, TOUCH_ENABLED: ge, IS_IOS: c, IS_ANY_SAFARI: ye
    });

    function _e(e) {
        return "string" == typeof e && Boolean(e.trim())
    }

    function ve() {
        return document === window.document
    }

    function be(e) {
        return K(e) && 1 === e.nodeType
    }

    function Te() {
        try {
            return window.parent !== window.self
        } catch (e) {
            return !0
        }
    }

    function we(i) {
        return function (e, t) {
            return _e(e) ? (t = be(t = _e(t) ? document.querySelector(t) : t) ? t : document)[i] && t[i](e) : document[i](null)
        }
    }

    function o(e = "div", i = {}, t = {}, s) {
        const r = document.createElement(e);
        return Object.getOwnPropertyNames(i).forEach(function (e) {
            var t = i[e];
            "textContent" === e ? Se(r, t) : r[e] === t && "tabIndex" !== e || (r[e] = t)
        }), Object.getOwnPropertyNames(t).forEach(function (e) {
            r.setAttribute(e, t[e])
        }), s && He(r, s), r
    }

    function Se(e, t) {
        return "undefined" == typeof e.textContent ? e.innerText = t : e.textContent = t, e
    }

    function Ee(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }

    function ke(e, t) {
        if (0 <= t.indexOf(" ")) throw new Error("class has illegal whitespace characters");
        return e.classList.contains(t)
    }

    function Ce(e, ...t) {
        return e.classList.add(...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])), e
    }

    function xe(e, ...t) {
        return e ? (e.classList.remove(...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])), e) : (l.warn("removeClass was called with an element that doesn't exist"), null)
    }

    function Ie(t, e, i) {
        return "boolean" != typeof (i = "function" == typeof i ? i(t, e) : i) && (i = void 0), e.split(/\s+/).forEach(e => t.classList.toggle(e, i)), t
    }

    function Ae(i, s) {
        Object.getOwnPropertyNames(s).forEach(function (e) {
            var t = s[e];
            null === t || "undefined" == typeof t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
        })
    }

    function De(e) {
        var i = {}, s = ["autoplay", "controls", "playsinline", "loop", "muted", "default", "defaultMuted"];
        if (e && e.attributes && 0 < e.attributes.length) {
            var r = e.attributes;
            for (let t = r.length - 1; 0 <= t; t--) {
                var n = r[t].name;
                let e = r[t].value;
                s.includes(n) && (e = null !== e), i[n] = e
            }
        }
        return i
    }

    function Le(e, t) {
        return e.getAttribute(t)
    }

    function Pe(e, t, i) {
        e.setAttribute(t, i)
    }

    function Oe(e, t) {
        e.removeAttribute(t)
    }

    function Ne() {
        document.body.focus(), document.onselectstart = function () {
            return !1
        }
    }

    function Re() {
        document.onselectstart = function () {
            return !0
        }
    }

    function Me(e) {
        if (e && e.getBoundingClientRect && e.parentNode) {
            const t = e.getBoundingClientRect(), i = {};
            return ["bottom", "height", "left", "right", "top", "width"].forEach(e => {
                void 0 !== t[e] && (i[e] = t[e])
            }), i.height || (i.height = parseFloat(Ge(e, "height"))), i.width || (i.width = parseFloat(Ge(e, "width"))), i
        }
    }

    function Ue(e) {
        if (!e || !e.offsetParent) return {left: 0, top: 0, width: 0, height: 0};
        var t = e.offsetWidth, i = e.offsetHeight;
        let s = 0, r = 0;
        for (; e.offsetParent && e !== document[j.fullscreenElement];) s += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;
        return {left: s, top: r, width: t, height: i}
    }

    function Be(t, e) {
        var i = {x: 0, y: 0};
        if (c) {
            let e = t;
            for (; e && "html" !== e.nodeName.toLowerCase();) {
                var s, r = Ge(e, "transform");
                /^matrix/.test(r) ? (s = r.slice(7, -1).split(/,\s/).map(Number), i.x += s[4], i.y += s[5]) : /^matrix3d/.test(r) && (s = r.slice(9, -1).split(/,\s/).map(Number), i.x += s[12], i.y += s[13]), e = e.parentNode
            }
        }
        var n = {}, a = Ue(e.target), t = Ue(t), o = t.width, l = t.height;
        let d = e.offsetY - (t.top - a.top), h = e.offsetX - (t.left - a.left);
        return e.changedTouches && (h = e.changedTouches[0].pageX - t.left, d = e.changedTouches[0].pageY + t.top, c) && (h -= i.x, d -= i.y), n.y = 1 - Math.max(0, Math.min(1, d / l)), n.x = Math.max(0, Math.min(1, h / o)), n
    }

    function Fe(e) {
        return K(e) && 3 === e.nodeType
    }

    function je(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild);
        return e
    }

    function qe(e) {
        return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(e => be(e = "function" == typeof e ? e() : e) || Fe(e) ? e : "string" == typeof e && /\S/.test(e) ? document.createTextNode(e) : void 0).filter(e => e)
    }

    function He(t, e) {
        return qe(e).forEach(e => t.appendChild(e)), t
    }

    function Ve(e, t) {
        return He(je(e), t)
    }

    function ze(e) {
        return void 0 === e.button && void 0 === e.buttons || 0 === e.button && void 0 === e.buttons || "mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons
    }

    const $e = we("querySelector"), We = we("querySelectorAll");

    function Ge(t, i) {
        if (!t || !i) return "";
        if ("function" != typeof window.getComputedStyle) return "";
        {
            let e;
            try {
                e = window.getComputedStyle(t)
            } catch (e) {
                return ""
            }
            return e ? e.getPropertyValue(i) || e[i] : ""
        }
    }

    function Xe(s) {
        [...document.styleSheets].forEach(t => {
            try {
                var i = [...t.cssRules].map(e => e.cssText).join(""), e = document.createElement("style");
                e.textContent = i, s.document.head.appendChild(e)
            } catch (e) {
                i = document.createElement("link");
                i.rel = "stylesheet", i.type = t.type, i.media = t.media.mediaText, i.href = t.href, s.document.head.appendChild(i)
            }
        })
    }

    var Ke = Object.freeze({
        __proto__: null,
        isReal: ve,
        isEl: be,
        isInFrame: Te,
        createEl: o,
        textContent: Se,
        prependTo: Ee,
        hasClass: ke,
        addClass: Ce,
        removeClass: xe,
        toggleClass: Ie,
        setAttributes: Ae,
        getAttributes: De,
        getAttribute: Le,
        setAttribute: Pe,
        removeAttribute: Oe,
        blockTextSelection: Ne,
        unblockTextSelection: Re,
        getBoundingClientRect: Me,
        findPosition: Ue,
        getPointerPosition: Be,
        isTextNode: Fe,
        emptyEl: je,
        normalizeContent: qe,
        appendContent: He,
        insertContent: Ve,
        isSingleLeftClick: ze,
        $: $e,
        $$: We,
        computedStyle: Ge,
        copyStyleSheetsToWindow: Xe
    });
    let Ye = !1, Qe;

    function Je() {
        if (!1 !== Qe.options.autoSetup) {
            var e = Array.prototype.slice.call(document.getElementsByTagName("video")),
                t = Array.prototype.slice.call(document.getElementsByTagName("audio")),
                i = Array.prototype.slice.call(document.getElementsByTagName("video-js")), s = e.concat(t, i);
            if (s && 0 < s.length) for (let e = 0, t = s.length; e < t; e++) {
                var r = s[e];
                if (!r || !r.getAttribute) {
                    Ze(1);
                    break
                }
                void 0 === r.player && null !== r.getAttribute("data-setup") && Qe(r)
            } else Ye || Ze(1)
        }
    }

    function Ze(e, t) {
        ve() && (t && (Qe = t), window.setTimeout(Je, e))
    }

    function et() {
        Ye = !0, window.removeEventListener("load", et)
    }

    ve() && ("complete" === document.readyState ? et() : window.addEventListener("load", et));

    function tt(e) {
        var t = document.createElement("style");
        return t.className = e, t
    }

    function it(e, t) {
        e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
    }

    var h = new WeakMap;
    let st = 3;

    function rt(e, t) {
        var i;
        h.has(e) && (0 === (i = h.get(e)).handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length) && h.delete(e)
    }

    function nt(t, i, e, s) {
        e.forEach(function (e) {
            t(i, e, s)
        })
    }

    function at(e) {
        if (!e.fixed_) {
            if (!e || !e.isPropagationStopped || !e.isImmediatePropagationStopped) {
                const n = e || window.event;
                e = {};
                for (const a in n) "layerX" === a || "layerY" === a || "keyLocation" === a || "webkitMovementX" === a || "webkitMovementY" === a || "path" === a || "returnValue" === a && n.preventDefault || (e[a] = n[a]);
                var t, i;
                e.target || (e.target = e.srcElement || document), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () {
                    n.preventDefault && n.preventDefault(), e.returnValue = !1, n.returnValue = !1, e.defaultPrevented = !0
                }, e.defaultPrevented = !1, e.stopPropagation = function () {
                    n.stopPropagation && n.stopPropagation(), e.cancelBubble = !0, n.cancelBubble = !0, e.isPropagationStopped = s
                }, e.isPropagationStopped = r, e.stopImmediatePropagation = function () {
                    n.stopImmediatePropagation && n.stopImmediatePropagation(), e.isImmediatePropagationStopped = s, e.stopPropagation()
                }, e.isImmediatePropagationStopped = r, null !== e.clientX && void 0 !== e.clientX && (t = document.documentElement, i = document.body, e.pageX = e.clientX + (t && t.scrollLeft || i && i.scrollLeft || 0) - (t && t.clientLeft || i && i.clientLeft || 0), e.pageY = e.clientY + (t && t.scrollTop || i && i.scrollTop || 0) - (t && t.clientTop || i && i.clientTop || 0)), e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
            }
            e.fixed_ = !0
        }
        return e;

        function s() {
            return !0
        }

        function r() {
            return !1
        }
    }

    let ot;
    const lt = ["touchstart", "touchmove"];

    function dt(n, t, e) {
        if (Array.isArray(t)) return nt(dt, n, t, e);
        h.has(n) || h.set(n, {});
        const a = h.get(n);
        if (a.handlers || (a.handlers = {}), a.handlers[t] || (a.handlers[t] = []), e.guid || (e.guid = st++), a.handlers[t].push(e), a.dispatcher || (a.disabled = !1, a.dispatcher = function (i, s) {
            if (!a.disabled) {
                i = at(i);
                var e = a.handlers[i.type];
                if (e) {
                    var r = e.slice(0);
                    for (let e = 0, t = r.length; e < t && !i.isImmediatePropagationStopped(); e++) try {
                        r[e].call(n, i, s)
                    } catch (e) {
                        l.error(e)
                    }
                }
            }
        }), 1 === a.handlers[t].length) if (n.addEventListener) {
            let e = !1;
            (function () {
                if ("boolean" != typeof ot) {
                    ot = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get() {
                                ot = !0
                            }
                        });
                        window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                    } catch (e) {
                    }
                }
                return ot
            })() && -1 < lt.indexOf(t) && (e = {passive: !0}), n.addEventListener(t, a.dispatcher, e)
        } else n.attachEvent && n.attachEvent("on" + t, a.dispatcher)
    }

    function p(e, t, i) {
        if (h.has(e)) {
            const n = h.get(e);
            if (n.handlers) {
                if (Array.isArray(t)) return nt(p, e, t, i);
                var s = function (e, t) {
                    n.handlers[t] = [], rt(e, t)
                };
                if (void 0 === t) for (const a in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, a) && s(e, a); else {
                    var r = n.handlers[t];
                    if (r) if (i) {
                        if (i.guid) for (let e = 0; e < r.length; e++) r[e].guid === i.guid && r.splice(e--, 1);
                        rt(e, t)
                    } else s(e, t)
                }
            }
        }
    }

    function ht(e, t, i) {
        var s = h.has(e) ? h.get(e) : {}, r = e.parentNode || e.ownerDocument;
        return "string" == typeof t ? t = {
            type: t,
            target: e
        } : t.target || (t.target = e), t = at(t), s.dispatcher && s.dispatcher.call(e, t, i), r && !t.isPropagationStopped() && !0 === t.bubbles ? ht.call(null, r, t, i) : !r && !t.defaultPrevented && t.target && t.target[t.type] && (h.has(t.target) || h.set(t.target, {}), s = h.get(t.target), t.target[t.type]) && (s.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), s.disabled = !1), !t.defaultPrevented
    }

    function ut(e, t, i) {
        if (Array.isArray(t)) return nt(ut, e, t, i);

        function s() {
            p(e, t, s), i.apply(this, arguments)
        }

        s.guid = i.guid = i.guid || st++, dt(e, t, s)
    }

    function ct(e, t, i) {
        function s() {
            p(e, t, s), i.apply(this, arguments)
        }

        s.guid = i.guid = i.guid || st++, dt(e, t, s)
    }

    var pt = Object.freeze({__proto__: null, fixEvent: at, on: dt, off: p, trigger: ht, one: ut, any: ct});

    function m(e, t, i) {
        return t.guid || (t.guid = st++), (e = t.bind(e)).guid = i ? i + "_" + t.guid : t.guid, e
    }

    function mt(i, s) {
        let r = window.performance.now();
        return function (...e) {
            var t = window.performance.now();
            t - r >= s && (i(...e), r = t)
        }
    }

    function gt(s, r, n, a = window) {
        let o;

        function e() {
            const e = this, t = arguments;
            let i = function () {
                o = null, i = null, n || s.apply(e, t)
            };
            !o && n && s.apply(e, t), a.clearTimeout(o), o = a.setTimeout(i, r)
        }

        return e.cancel = () => {
            a.clearTimeout(o), o = null
        }, e
    }

    var ft = Object.freeze({__proto__: null, UPDATE_REFRESH_INTERVAL: 30, bind_: m, throttle: mt, debounce: gt});
    let yt;

    class _t {
        on(e, t) {
            var i = this.addEventListener;
            this.addEventListener = () => {
            }, dt(this, e, t), this.addEventListener = i
        }

        off(e, t) {
            p(this, e, t)
        }

        one(e, t) {
            var i = this.addEventListener;
            this.addEventListener = () => {
            }, ut(this, e, t), this.addEventListener = i
        }

        any(e, t) {
            var i = this.addEventListener;
            this.addEventListener = () => {
            }, ct(this, e, t), this.addEventListener = i
        }

        trigger(e) {
            var t = e.type || e;
            e = at(e = "string" == typeof e ? {type: t} : e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), ht(this, e)
        }

        queueTrigger(e) {
            yt = yt || new Map;
            const t = e.type || e;
            let i = yt.get(this);
            i || (i = new Map, yt.set(this, i));
            var s = i.get(t), s = (i.delete(t), window.clearTimeout(s), window.setTimeout(() => {
                i.delete(t), 0 === i.size && (i = null, yt.delete(this)), this.trigger(e)
            }, 0));
            i.set(t, s)
        }
    }

    _t.prototype.allowedEvents_ = {}, _t.prototype.addEventListener = _t.prototype.on, _t.prototype.removeEventListener = _t.prototype.off, _t.prototype.dispatchEvent = _t.prototype.trigger;
    const vt = e => "function" == typeof e.name ? e.name() : "string" == typeof e.name ? e.name : e.name_ || (e.constructor && e.constructor.name ? e.constructor.name : typeof e),
        bt = t => t instanceof _t || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(e => "function" == typeof t[e]),
        Tt = e => "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length, wt = (e, t, i) => {
            if (!e || !e.nodeName && !bt(e)) throw new Error(`Invalid target for ${vt(t)}#${i}; must be a DOM node or evented object.`)
        }, St = (e, t, i) => {
            if (!Tt(e)) throw new Error(`Invalid event type for ${vt(t)}#${i}; must be a non-empty string or array.`)
        }, Et = (e, t, i) => {
            if ("function" != typeof e) throw new Error(`Invalid listener for ${vt(t)}#${i}; must be a function.`)
        }, kt = (e, t, i) => {
            var s = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
            let r, n, a;
            return s ? (r = e.eventBusEl_, 3 <= t.length && t.shift(), [n, a] = t) : [r, n, a] = t, wt(r, e, i), St(n, e, i), Et(a, e, i), a = m(e, a), {
                isTargetingSelf: s,
                target: r,
                type: n,
                listener: a
            }
        }, Ct = (e, t, i, s) => {
            wt(e, e, t), e.nodeName ? pt[t](e, i, s) : e[t](i, s)
        }, xt = {
            on(...e) {
                const {isTargetingSelf: t, target: i, type: s, listener: r} = kt(this, e, "on");
                if (Ct(i, "on", s, r), !t) {
                    const n = () => this.off(i, s, r);
                    n.guid = r.guid;
                    e = () => this.off("dispose", n);
                    e.guid = r.guid, Ct(this, "on", "dispose", n), Ct(i, "on", "dispose", e)
                }
            }, one(...e) {
                const {isTargetingSelf: t, target: i, type: s, listener: r} = kt(this, e, "one");
                if (t) Ct(i, "one", s, r); else {
                    const n = (...e) => {
                        this.off(i, s, n), r.apply(null, e)
                    };
                    n.guid = r.guid, Ct(i, "one", s, n)
                }
            }, any(...e) {
                const {isTargetingSelf: t, target: i, type: s, listener: r} = kt(this, e, "any");
                if (t) Ct(i, "any", s, r); else {
                    const n = (...e) => {
                        this.off(i, s, n), r.apply(null, e)
                    };
                    n.guid = r.guid, Ct(i, "any", s, n)
                }
            }, off(e, t, i) {
                !e || Tt(e) ? p(this.eventBusEl_, e, t) : (e = e, t = t, wt(e, this, "off"), St(t, this, "off"), Et(i, this, "off"), i = m(this, i), this.off("dispose", i), e.nodeName ? (p(e, t, i), p(e, "dispose", i)) : bt(e) && (e.off(t, i), e.off("dispose", i)))
            }, trigger(e, t) {
                wt(this.eventBusEl_, this, "trigger");
                var i = e && "string" != typeof e ? e.type : e;
                if (Tt(i)) return ht(this.eventBusEl_, e, t);
                throw new Error(`Invalid event type for ${vt(this)}#trigger; ` + "must be a non-empty string or object with a type key that has a non-empty value.")
            }
        };

    function It(e, t = {}) {
        t = t.eventBusKey;
        if (t) {
            if (!e[t].nodeName) throw new Error(`The eventBusKey "${t}" does not refer to an element.`);
            e.eventBusEl_ = e[t]
        } else e.eventBusEl_ = o("span", {className: "vjs-event-bus"});
        Object.assign(e, xt), e.eventedCallbacks && e.eventedCallbacks.forEach(e => {
            e()
        }), e.on("dispose", () => {
            e.off(), [e, e.el_, e.eventBusEl_].forEach(function (e) {
                e && h.has(e) && h.delete(e)
            }), window.setTimeout(() => {
                e.eventBusEl_ = null
            }, 0)
        })
    }

    const At = {
        state: {}, setState(e) {
            "function" == typeof e && (e = e());
            let i;
            return G(e, (e, t) => {
                this.state[t] !== e && ((i = i || {})[t] = {from: this.state[t], to: e}), this.state[t] = e
            }), i && bt(this) && this.trigger({changes: i, type: "statechanged"}), i
        }
    };

    function Dt(e, t) {
        Object.assign(e, At), e.state = Object.assign({}, e.state, t), "function" == typeof e.handleStateChanged && bt(e) && e.on("statechanged", e.handleStateChanged)
    }

    function Lt(e) {
        return "string" != typeof e ? e : e.replace(/./, e => e.toLowerCase())
    }

    function g(e) {
        return "string" != typeof e ? e : e.replace(/./, e => e.toUpperCase())
    }

    function Pt(e, t) {
        return g(e) === g(t)
    }

    var Ot = Object.freeze({__proto__: null, toLowerCase: Lt, toTitleCase: g, titleCaseEquals: Pt}),
        Nt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function Rt(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var r = Rt(function (e, t) {
        function i(e) {
            var t;
            return "number" == typeof (e = e && "object" == typeof e && (t = e.which || e.keyCode || e.charCode) ? t : e) ? o[e] : (t = String(e), s[t.toLowerCase()] || r[t.toLowerCase()] || (1 === t.length ? t.charCodeAt(0) : void 0))
        }

        i.isEventKey = function (e, t) {
            if (e && "object" == typeof e) {
                e = e.which || e.keyCode || e.charCode;
                if (null != e) if ("string" == typeof t) {
                    var i = s[t.toLowerCase()];
                    if (i) return i === e;
                    if (i = r[t.toLowerCase()]) return i === e
                } else if ("number" == typeof t) return t === e;
                return !1
            }
        };
        for (var s = (t = e.exports = i).code = t.codes = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            "pause/break": 19,
            "caps lock": 20,
            esc: 27,
            space: 32,
            "page up": 33,
            "page down": 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            delete: 46,
            command: 91,
            "left command": 91,
            "right command": 93,
            "numpad *": 106,
            "numpad +": 107,
            "numpad -": 109,
            "numpad .": 110,
            "numpad /": 111,
            "num lock": 144,
            "scroll lock": 145,
            "my computer": 182,
            "my calculator": 183,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        }, r = t.aliases = {
            windows: 91,
            "â‡§": 16,
            "âŒ¥": 18,
            "âŒƒ": 17,
            "âŒ˜": 91,
            ctl: 17,
            control: 17,
            option: 18,
            pause: 19,
            break: 19,
            caps: 20,
            return: 13,
            escape: 27,
            spc: 32,
            spacebar: 32,
            pgup: 33,
            pgdn: 34,
            ins: 45,
            del: 46,
            cmd: 91
        }, n = 97; n < 123; n++) s[String.fromCharCode(n)] = n - 32;
        for (var n = 48; n < 58; n++) s[n - 48] = n;
        for (n = 1; n < 13; n++) s["f" + n] = n + 111;
        for (n = 0; n < 10; n++) s["numpad " + n] = n + 96;
        var a, o = t.names = t.title = {};
        for (n in s) o[s[n]] = n;
        for (a in r) s[a] = r[a]
    });
    r.code, r.codes, r.aliases, r.names, r.title;

    class f {
        constructor(e, t, i) {
            !e && this.play ? this.player_ = e = this : this.player_ = e, this.isDisposed_ = !1, this.parentComponent_ = null, this.options_ = d({}, this.options_), t = this.options_ = d(this.options_, t), this.id_ = t.id || t.el && t.el.id, this.id_ || (e = e && e.id && e.id() || "no_player", this.id_ = e + "_component_" + st++), this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), t.className && this.el_ && t.className.split(" ").forEach(e => this.addClass(e)), ["on", "off", "one", "any", "trigger"].forEach(e => {
                this[e] = void 0
            }), !1 !== t.evented && (It(this, {eventBusKey: this.el_ ? "el_" : null}), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange)), Dt(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.setTimeoutIds_ = new Set, this.setIntervalIds_ = new Set, this.rafIds_ = new Set, this.namedRafs_ = new Map, (this.clearingTimersOnDispose_ = !1) !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
        }

        on(e, t) {
        }

        off(e, t) {
        }

        one(e, t) {
        }

        any(e, t) {
        }

        trigger(e, t) {
        }

        dispose(e = {}) {
            if (!this.isDisposed_) {
                if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.isDisposed_ = !0, this.children_) for (let e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
                this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && (e.restoreEl ? this.el_.parentNode.replaceChild(e.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), this.el_ = null), this.player_ = null
            }
        }

        isDisposed() {
            return Boolean(this.isDisposed_)
        }

        player() {
            return this.player_
        }

        options(e) {
            return e && (this.options_ = d(this.options_, e)), this.options_
        }

        el() {
            return this.el_
        }

        createEl(e, t, i) {
            return o(e, t, i)
        }

        localize(e, s, t = e) {
            var i = this.player_.language && this.player_.language(),
                r = this.player_.languages && this.player_.languages(), n = r && r[i], i = i && i.split("-")[0],
                r = r && r[i];
            let a = t;
            return n && n[e] ? a = n[e] : r && r[e] && (a = r[e]), a = s ? a.replace(/\{(\d+)\}/g, function (e, t) {
                t = s[t - 1];
                let i = "undefined" == typeof t ? e : t;
                return i
            }) : a
        }

        handleLanguagechange() {
        }

        contentEl() {
            return this.contentEl_ || this.el_
        }

        id() {
            return this.id_
        }

        name() {
            return this.name_
        }

        children() {
            return this.children_
        }

        getChildById(e) {
            return this.childIndex_[e]
        }

        getChild(e) {
            if (e) return this.childNameIndex_[e]
        }

        getDescendant(...t) {
            t = t.reduce((e, t) => e.concat(t), []);
            let i = this;
            for (let e = 0; e < t.length; e++) if (!(i = i.getChild(t[e])) || !i.getChild) return;
            return i
        }

        setIcon(e, t = this.el()) {
            var i, s, r;
            if (this.player_.options_.experimentalSvgIcons) return r = "http://www.w3.org/2000/svg", i = o("span", {className: "vjs-icon-placeholder vjs-svg-icon"}, {"aria-hidden": "true"}), (s = document.createElementNS(r, "svg")).setAttributeNS(null, "viewBox", "0 0 512 512"), r = document.createElementNS(r, "use"), s.appendChild(r), r.setAttributeNS(null, "href", "#vjs-icon-" + e), i.appendChild(s), this.iconIsSet_ ? t.replaceChild(i, t.querySelector(".vjs-icon-placeholder")) : t.appendChild(i), this.iconIsSet_ = !0, i
        }

        addChild(e, t = {}, i = this.children_.length) {
            let s, r;
            if ("string" == typeof e) {
                r = g(e);
                var n = t.componentClass || r, a = (t.name = r, f.getComponent(n));
                if (!a) throw new Error(`Component ${n} does not exist`);
                if ("function" != typeof a) return null;
                s = new a(this.player_ || this, t)
            } else s = e;
            if (s.parentComponent_ && s.parentComponent_.removeChild(s), this.children_.splice(i, 0, s), s.parentComponent_ = this, "function" == typeof s.id && (this.childIndex_[s.id()] = s), (r = r || s.name && g(s.name())) && (this.childNameIndex_[r] = s, this.childNameIndex_[Lt(r)] = s), "function" == typeof s.el && s.el()) {
                let e = null;
                this.children_[i + 1] && (this.children_[i + 1].el_ ? e = this.children_[i + 1].el_ : be(this.children_[i + 1]) && (e = this.children_[i + 1])), this.contentEl().insertBefore(s.el(), e)
            }
            return s
        }

        removeChild(i) {
            if ((i = "string" == typeof i ? this.getChild(i) : i) && this.children_) {
                let t = !1;
                for (let e = this.children_.length - 1; 0 <= e; e--) if (this.children_[e] === i) {
                    t = !0, this.children_.splice(e, 1);
                    break
                }
                var e;
                t && (i.parentComponent_ = null, this.childIndex_[i.id()] = null, this.childNameIndex_[g(i.name())] = null, this.childNameIndex_[Lt(i.name())] = null, e = i.el()) && e.parentNode === this.contentEl() && this.contentEl().removeChild(i.el())
            }
        }

        initChildren() {
            const s = this.options_.children;
            if (s) {
                const r = this.options_;
                let e;
                const t = f.getComponent("Tech");
                (e = Array.isArray(s) ? s : Object.keys(s)).concat(Object.keys(this.options_).filter(function (t) {
                    return !e.some(function (e) {
                        return "string" == typeof e ? t === e : t === e.name
                    })
                })).map(e => {
                    let t, i;
                    return i = "string" == typeof e ? (t = e, s[t] || this.options_[t] || {}) : (t = e.name, e), {
                        name: t,
                        opts: i
                    }
                }).filter(e => {
                    e = f.getComponent(e.opts.componentClass || g(e.name));
                    return e && !t.isTech(e)
                }).forEach(e => {
                    var t = e.name;
                    let i = e.opts;
                    !1 !== (i = void 0 !== r[t] ? r[t] : i) && ((i = !0 === i ? {} : i).playerOptions = this.options_.playerOptions, e = this.addChild(t, i)) && (this[t] = e)
                })
            }
        }

        buildCSSClass() {
            return ""
        }

        ready(e, t = !1) {
            e && (this.isReady_ ? t ? e.call(this) : this.setTimeout(e, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(e)))
        }

        triggerReady() {
            this.isReady_ = !0, this.setTimeout(function () {
                var e = this.readyQueue_;
                this.readyQueue_ = [], e && 0 < e.length && e.forEach(function (e) {
                    e.call(this)
                }, this), this.trigger("ready")
            }, 1)
        }

        $(e, t) {
            return $e(e, t || this.contentEl())
        }

        $$(e, t) {
            return We(e, t || this.contentEl())
        }

        hasClass(e) {
            return ke(this.el_, e)
        }

        addClass(...e) {
            Ce(this.el_, ...e)
        }

        removeClass(...e) {
            xe(this.el_, ...e)
        }

        toggleClass(e, t) {
            Ie(this.el_, e, t)
        }

        show() {
            this.removeClass("vjs-hidden")
        }

        hide() {
            this.addClass("vjs-hidden")
        }

        lockShowing() {
            this.addClass("vjs-lock-showing")
        }

        unlockShowing() {
            this.removeClass("vjs-lock-showing")
        }

        getAttribute(e) {
            return Le(this.el_, e)
        }

        setAttribute(e, t) {
            Pe(this.el_, e, t)
        }

        removeAttribute(e) {
            Oe(this.el_, e)
        }

        width(e, t) {
            return this.dimension("width", e, t)
        }

        height(e, t) {
            return this.dimension("height", e, t)
        }

        dimensions(e, t) {
            this.width(e, !0), this.height(t)
        }

        dimension(e, t, i) {
            var s, r;
            if (void 0 === t) return this.el_ ? -1 !== (r = (s = this.el_.style[e]).indexOf("px")) ? parseInt(s.slice(0, r), 10) : parseInt(this.el_["offset" + g(e)], 10) : 0;
            -1 !== ("" + (t = null !== t && t == t ? t : 0)).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", i || this.trigger("componentresize")
        }

        currentDimension(e) {
            let t = 0;
            if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
            return t = Ge(this.el_, e), 0 !== (t = parseFloat(t)) && !isNaN(t) || (e = "offset" + g(e), t = this.el_[e]), t
        }

        currentDimensions() {
            return {width: this.currentDimension("width"), height: this.currentDimension("height")}
        }

        currentWidth() {
            return this.currentDimension("width")
        }

        currentHeight() {
            return this.currentDimension("height")
        }

        focus() {
            this.el_.focus()
        }

        blur() {
            this.el_.blur()
        }

        handleKeyDown(e) {
            this.player_ && (r.isEventKey(e, "Tab") || e.stopPropagation(), this.player_.handleKeyDown(e))
        }

        handleKeyPress(e) {
            this.handleKeyDown(e)
        }

        emitTapEvents() {
            let t = 0, i = null;
            let s;
            this.on("touchstart", function (e) {
                1 === e.touches.length && (i = {
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                }, t = window.performance.now(), s = !0)
            }), this.on("touchmove", function (e) {
                var t;
                (1 < e.touches.length || i && (t = e.touches[0].pageX - i.pageX, e = e.touches[0].pageY - i.pageY, 10 < Math.sqrt(t * t + e * e))) && (s = !1)
            });

            function e() {
                s = !1
            }

            this.on("touchleave", e), this.on("touchcancel", e), this.on("touchend", function (e) {
                !(i = null) === s && window.performance.now() - t < 200 && (e.preventDefault(), this.trigger("tap"))
            })
        }

        enableTouchActivity() {
            if (this.player() && this.player().reportUserActivity) {
                const i = m(this.player(), this.player().reportUserActivity);
                let t;
                this.on("touchstart", function () {
                    i(), this.clearInterval(t), t = this.setInterval(i, 250)
                });
                var e = function (e) {
                    i(), this.clearInterval(t)
                };
                this.on("touchmove", i), this.on("touchend", e), this.on("touchcancel", e)
            }
        }

        setTimeout(e, t) {
            var i;
            return e = m(this, e), this.clearTimersOnDispose_(), i = window.setTimeout(() => {
                this.setTimeoutIds_.has(i) && this.setTimeoutIds_.delete(i), e()
            }, t), this.setTimeoutIds_.add(i), i
        }

        clearTimeout(e) {
            return this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.delete(e), window.clearTimeout(e)), e
        }

        setInterval(e, t) {
            e = m(this, e), this.clearTimersOnDispose_();
            e = window.setInterval(e, t);
            return this.setIntervalIds_.add(e), e
        }

        clearInterval(e) {
            return this.setIntervalIds_.has(e) && (this.setIntervalIds_.delete(e), window.clearInterval(e)), e
        }

        requestAnimationFrame(e) {
            var t;
            return this.clearTimersOnDispose_(), e = m(this, e), t = window.requestAnimationFrame(() => {
                this.rafIds_.has(t) && this.rafIds_.delete(t), e()
            }), this.rafIds_.add(t), t
        }

        requestNamedAnimationFrame(e, t) {
            var i;
            if (!this.namedRafs_.has(e)) return this.clearTimersOnDispose_(), t = m(this, t), i = this.requestAnimationFrame(() => {
                t(), this.namedRafs_.has(e) && this.namedRafs_.delete(e)
            }), this.namedRafs_.set(e, i), e
        }

        cancelNamedAnimationFrame(e) {
            this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.delete(e))
        }

        cancelAnimationFrame(e) {
            return this.rafIds_.has(e) && (this.rafIds_.delete(e), window.cancelAnimationFrame(e)), e
        }

        clearTimersOnDispose_() {
            this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", () => {
                [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(([e, i]) => {
                    this[e].forEach((e, t) => this[i](t))
                }), this.clearingTimersOnDispose_ = !1
            }))
        }

        static registerComponent(t, e) {
            if ("string" != typeof t || !t) throw new Error(`Illegal component name, "${t}"; must be a non-empty string.`);
            var i = f.getComponent("Tech"), i = i && i.isTech(e), s = f === e || f.prototype.isPrototypeOf(e.prototype);
            if (i || !s) {
                let e;
                throw e = i ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error(`Illegal component, "${t}"; ${e}.`)
            }
            t = g(t), f.components_ || (f.components_ = {});
            s = f.getComponent("Player");
            if ("Player" === t && s && s.players) {
                const r = s.players;
                i = Object.keys(r);
                if (r && 0 < i.length && i.map(e => r[e]).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
            }
            return f.components_[t] = e, f.components_[Lt(t)] = e
        }

        static getComponent(e) {
            if (e && f.components_) return f.components_[e]
        }
    }

    function Mt(e, t, i, s) {
        var r = s, n = i.length - 1;
        if ("number" != typeof r || r < 0 || n < r) throw new Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${r}) is non-numeric or out of bounds (0-${n}).`);
        return i[s][t]
    }

    function Ut(e) {
        let t;
        return t = void 0 === e || 0 === e.length ? {
            length: 0, start() {
                throw new Error("This TimeRanges object is empty")
            }, end() {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: e.length,
            start: Mt.bind(null, "start", 0, e),
            end: Mt.bind(null, "end", 1, e)
        }, window.Symbol && window.Symbol.iterator && (t[window.Symbol.iterator] = () => (e || []).values()), t
    }

    function Bt(e, t) {
        return Array.isArray(e) ? Ut(e) : void 0 === e || void 0 === t ? Ut() : Ut([[e, t]])
    }

    f.registerComponent("Component", f);

    function Ft(e, t) {
        e = e < 0 ? 0 : e;
        let i = Math.floor(e % 60), s = Math.floor(e / 60 % 60), r = Math.floor(e / 3600);
        var n = Math.floor(t / 60 % 60), t = Math.floor(t / 3600);
        return r = 0 < (r = !isNaN(e) && e !== 1 / 0 ? r : s = i = "-") || 0 < t ? r + ":" : "", s = ((r || 10 <= n) && s < 10 ? "0" + s : s) + ":", i = i < 10 ? "0" + i : i, r + s + i
    }

    let jt = Ft;

    function qt(e) {
        jt = e
    }

    function Ht() {
        jt = Ft
    }

    function Vt(e, t = e) {
        return jt(e, t)
    }

    var zt = Object.freeze({
        __proto__: null,
        createTimeRanges: Bt,
        createTimeRange: Bt,
        setFormatTime: qt,
        resetFormatTime: Ht,
        formatTime: Vt
    });

    function $t(t, i) {
        let s = 0;
        var r;
        let n;
        if (!i) return 0;
        t && t.length || (t = Bt(0, 0));
        for (let e = 0; e < t.length; e++) r = t.start(e), (n = t.end(e)) > i && (n = i), s += n - r;
        return s / i
    }

    function i(e) {
        if (e instanceof i) return e;
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : K(e) && ("number" == typeof e.code && (this.code = e.code), Object.assign(this, e)), this.message || (this.message = i.defaultMessages[this.code] || "")
    }

    i.prototype.code = 0, i.prototype.message = "", i.prototype.status = null, i.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], i.defaultMessages = {
        1: "You aborted the media playback",
        2: "A network error caused the media download to fail part-way.",
        3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
        4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The media is encrypted and we do not have the keys to decrypt it."
    };
    for (let e = 0; e < i.errorTypes.length; e++) i[i.errorTypes[e]] = e, i.prototype[i.errorTypes[e]] = e;
    var Wt = function (e, t) {
        var i, s = null;
        try {
            i = JSON.parse(e, t)
        } catch (e) {
            s = e
        }
        return [s, i]
    };

    function Gt(e) {
        return null != e && "function" == typeof e.then
    }

    function Xt(e) {
        Gt(e) && e.then(null, e => {
        })
    }

    function Kt(s) {
        return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((e, t, i) => (s[t] && (e[t] = s[t]), e), {
            cues: s.cues && Array.prototype.map.call(s.cues, function (e) {
                return {startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id}
            })
        })
    }

    var Yt = function (e) {
        var t = e.$$("track");
        const i = Array.prototype.map.call(t, e => e.track);
        return Array.prototype.map.call(t, function (e) {
            var t = Kt(e.track);
            return e.src && (t.src = e.src), t
        }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
            return -1 === i.indexOf(e)
        }).map(Kt))
    }, Qt = function (e, i) {
        return e.forEach(function (e) {
            const t = i.addRemoteTextTrack(e).track;
            !e.src && e.cues && e.cues.forEach(e => t.addCue(e))
        }), i.textTracks()
    };
    Kt;
    const Jt = "vjs-modal-dialog";

    class Zt extends f {
        constructor(e, t) {
            super(e, t), this.handleKeyDown_ = e => this.handleKeyDown(e), this.close_ = e => this.close(e), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = o("div", {className: Jt + "-content"}, {role: "document"}), this.descEl_ = o("p", {
                className: Jt + "-description vjs-control-text",
                id: this.el().getAttribute("aria-describedby")
            }), Se(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_)
        }

        createEl() {
            return super.createEl("div", {
                className: this.buildCSSClass(),
                tabIndex: -1
            }, {
                "aria-describedby": this.id() + "_description",
                "aria-hidden": "true",
                "aria-label": this.label(),
                role: "dialog"
            })
        }

        dispose() {
            this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, super.dispose()
        }

        buildCSSClass() {
            return Jt + " vjs-hidden " + super.buildCSSClass()
        }

        label() {
            return this.localize(this.options_.label || "Modal Window")
        }

        description() {
            let e = this.options_.description || this.localize("This is a modal window.");
            return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
        }

        open() {
            var e;
            this.opened_ || (e = this.player(), this.trigger("beforemodalopen"), this.opened_ = !0, !this.options_.fillAlways && (this.hasBeenOpened_ || this.hasBeenFilled_) || this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0)
        }

        opened(e) {
            return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
        }

        close() {
            var e;
            this.opened_ && (e = this.player(), this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary) && this.dispose()
        }

        closeable(t) {
            if ("boolean" == typeof t) {
                var i, t = this.closeable_ = !!t;
                let e = this.getChild("closeButton");
                t && !e && (i = this.contentEl_, this.contentEl_ = this.el_, e = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = i, this.on(e, "close", this.close_)), !t && e && (this.off(e, "close", this.close_), this.removeChild(e), e.dispose())
            }
            return this.closeable_
        }

        fill() {
            this.fillWith(this.content())
        }

        fillWith(e) {
            var t = this.contentEl(), i = t.parentNode, s = t.nextSibling,
                e = (this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), Ve(t, e), this.trigger("modalfill"), s ? i.insertBefore(t, s) : i.appendChild(t), this.getChild("closeButton"));
            e && i.appendChild(e.el_)
        }

        empty() {
            this.trigger("beforemodalempty"), je(this.contentEl()), this.trigger("modalempty")
        }

        content(e) {
            return "undefined" != typeof e && (this.content_ = e), this.content_
        }

        conditionalFocus_() {
            var e = document.activeElement, t = this.player_.el_;
            this.previouslyActiveEl_ = null, !t.contains(e) && t !== e || (this.previouslyActiveEl_ = e, this.focus())
        }

        conditionalBlur_() {
            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null)
        }

        handleKeyDown(e) {
            if (e.stopPropagation(), r.isEventKey(e, "Escape") && this.closeable()) e.preventDefault(), this.close(); else if (r.isEventKey(e, "Tab")) {
                var i = this.focusableEls_(), s = this.el_.querySelector(":focus");
                let t;
                for (let e = 0; e < i.length; e++) if (s === i[e]) {
                    t = e;
                    break
                }
                document.activeElement === this.el_ && (t = 0), e.shiftKey && 0 === t ? (i[i.length - 1].focus(), e.preventDefault()) : e.shiftKey || t !== i.length - 1 || (i[0].focus(), e.preventDefault())
            }
        }

        focusableEls_() {
            var e = this.el_.querySelectorAll("*");
            return Array.prototype.filter.call(e, e => (e instanceof window.HTMLAnchorElement || e instanceof window.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof window.HTMLInputElement || e instanceof window.HTMLSelectElement || e instanceof window.HTMLTextAreaElement || e instanceof window.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof window.HTMLIFrameElement || e instanceof window.HTMLObjectElement || e instanceof window.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable"))
        }
    }

    Zt.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, f.registerComponent("ModalDialog", Zt);

    class ei extends _t {
        constructor(t = []) {
            super(), this.tracks_ = [], Object.defineProperty(this, "length", {
                get() {
                    return this.tracks_.length
                }
            });
            for (let e = 0; e < t.length; e++) this.addTrack(t[e])
        }

        addTrack(e) {
            const t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get() {
                    return this.tracks_[t]
                }
            }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
                track: e,
                type: "addtrack",
                target: this
            })), e.labelchange_ = () => {
                this.trigger({track: e, type: "labelchange", target: this})
            }, bt(e) && e.addEventListener("labelchange", e.labelchange_)
        }

        removeTrack(i) {
            let s;
            for (let e = 0, t = this.length; e < t; e++) if (this[e] === i) {
                (s = this[e]).off && s.off(), this.tracks_.splice(e, 1);
                break
            }
            s && this.trigger({track: s, type: "removetrack", target: this})
        }

        getTrackById(i) {
            let s = null;
            for (let e = 0, t = this.length; e < t; e++) {
                var r = this[e];
                if (r.id === i) {
                    s = r;
                    break
                }
            }
            return s
        }
    }

    for (const Ku in ei.prototype.allowedEvents_ = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack",
        labelchange: "labelchange"
    }) ei.prototype["on" + Ku] = null;

    function ti(t, i) {
        for (let e = 0; e < t.length; e++) Object.keys(t[e]).length && i.id !== t[e].id && (t[e].enabled = !1)
    }

    function ii(t, i) {
        for (let e = 0; e < t.length; e++) Object.keys(t[e]).length && i.id !== t[e].id && (t[e].selected = !1)
    }

    class si extends ei {
        addTrack(e) {
            super.addTrack(e), this.queueChange_ || (this.queueChange_ = () => this.queueTrigger("change")), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = () => this.trigger("selectedlanguagechange")), e.addEventListener("modechange", this.queueChange_);
            -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_)
        }

        removeTrack(e) {
            super.removeTrack(e), e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_) && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_)
        }
    }

    class ri {
        constructor(e) {
            ri.prototype.setCues_.call(this, e), Object.defineProperty(this, "length", {
                get() {
                    return this.length_
                }
            })
        }

        setCues_(e) {
            var t = this.length || 0;
            let i = 0;

            function s(e) {
                "" + e in this || Object.defineProperty(this, "" + e, {
                    get() {
                        return this.cues_[e]
                    }
                })
            }

            var r = e.length;
            this.cues_ = e, this.length_ = e.length;
            if (t < r) for (i = t; i < r; i++) s.call(this, i)
        }

        getCueById(i) {
            let s = null;
            for (let e = 0, t = this.length; e < t; e++) {
                var r = this[e];
                if (r.id === i) {
                    s = r;
                    break
                }
            }
            return s
        }
    }

    const ni = {
        alternative: "alternative",
        captions: "captions",
        main: "main",
        sign: "sign",
        subtitles: "subtitles",
        commentary: "commentary"
    }, ai = {
        alternative: "alternative",
        descriptions: "descriptions",
        main: "main",
        "main-desc": "main-desc",
        translation: "translation",
        commentary: "commentary"
    }, oi = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    }, li = {disabled: "disabled", hidden: "hidden", showing: "showing"};

    class di extends _t {
        constructor(e = {}) {
            super();
            const t = {id: e.id || "vjs_track_" + st++, kind: e.kind || "", language: e.language || ""};
            let i = e.label || "";
            for (const s in t) Object.defineProperty(this, s, {
                get() {
                    return t[s]
                }, set() {
                }
            });
            Object.defineProperty(this, "label", {
                get() {
                    return i
                }, set(e) {
                    e !== i && (i = e, this.trigger("labelchange"))
                }
            })
        }
    }

    function hi(e) {
        var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i = document.createElement("a"),
            s = (i.href = e, {});
        for (let e = 0; e < t.length; e++) s[t[e]] = i[t[e]];
        return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), s.protocol || (s.protocol = window.location.protocol), s.host || (s.host = window.location.host), s
    }

    function ui(e) {
        var t;
        return e.match(/^https?:\/\//) || ((t = document.createElement("a")).href = e, e = t.href), e
    }

    function ci(e, t = window.location) {
        return (":" === (e = hi(e)).protocol ? t : e).protocol + e.host !== t.protocol + t.host
    }

    const pi = function (e) {
        if ("string" == typeof e) {
            e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e);
            if (e) return e.pop().toLowerCase()
        }
        return ""
    };
    var mi = Object.freeze({
            __proto__: null,
            parseUrl: hi,
            getAbsoluteURL: ui,
            getFileExtension: pi,
            isCrossOrigin: ci
        }),
        gi = "undefined" != typeof window ? window : "undefined" != typeof Nt ? Nt : "undefined" != typeof self ? self : {},
        fi = gi, yi = Rt(function (e) {
            function t() {
                return e.exports = t = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i, s = arguments[t];
                        for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments)
            }

            e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
        }), _i = (gi = yi) && gi.__esModule && Object.prototype.hasOwnProperty.call(gi, "default") ? gi.default : gi,
        vi = function (e) {
            var t;
            return !!e && ("[object Function]" === (t = bi.call(e)) || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt))
        }, bi = Object.prototype.toString;
    xi.httpHandler = function (s, r) {
        return void 0 === r && (r = !1), function (e, t, i) {
            if (e) s(e); else if (400 <= t.statusCode && t.statusCode <= 599) {
                e = i;
                if (r) if (fi.TextDecoder) {
                    t = function (e) {
                        void 0 === e && (e = "");
                        return e.toLowerCase().split(";").reduce(function (e, t) {
                            var t = t.split("="), i = t[0], t = t[1];
                            return "charset" === i.trim() ? t.trim() : e
                        }, "utf-8")
                    }(t.headers && t.headers["content-type"]);
                    try {
                        e = new TextDecoder(t).decode(i)
                    } catch (e) {
                    }
                } else e = String.fromCharCode.apply(null, new Uint8Array(i));
                s({cause: e})
            } else s(null, i)
        }
    };
    for (var Ti = function (e) {
        var s = {};
        return e && e.trim().split("\n").forEach(function (e) {
            var t = e.indexOf(":"), i = e.slice(0, t).trim().toLowerCase(), e = e.slice(t + 1).trim();
            "undefined" == typeof s[i] ? s[i] = e : Array.isArray(s[i]) ? s[i].push(e) : s[i] = [s[i], e]
        }), s
    }, wi = xi, gi = xi, Si = (xi.XMLHttpRequest = fi.XMLHttpRequest || function () {
    }, xi.XDomainRequest = "withCredentials" in new xi.XMLHttpRequest ? xi.XMLHttpRequest : fi.XDomainRequest, ["get", "put", "post", "patch", "head", "delete"]), Ei = function (s) {
        xi["delete" === s ? "del" : s] = function (e, t, i) {
            return (t = Ci(e, t, i)).method = s.toUpperCase(), Ii(t)
        }
    }, ki = 0; ki < Si.length; ki++) Ei(Si[ki]);

    function Ci(e, t, i) {
        var s = e;
        return vi(t) ? (i = t, "string" == typeof e && (s = {uri: e})) : s = yi({}, t, {uri: e}), s.callback = i, s
    }

    function xi(e, t, i) {
        return Ii(t = Ci(e, t, i))
    }

    function Ii(s) {
        if ("undefined" == typeof s.callback) throw new Error("callback argument missing");
        var r = !1, n = function (e, t, i) {
            r || (r = !0, s.callback(e, t, i))
        };

        function a() {
            var e = void 0, e = d.response || d.responseText || function (e) {
                try {
                    if ("document" === e.responseType) return e.responseXML;
                    var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                    if ("" === e.responseType && !t) return e.responseXML
                } catch (e) {
                }
                return null
            }(d);
            if (g) try {
                e = JSON.parse(e)
            } catch (e) {
            }
            return e
        }

        function t(e) {
            return clearTimeout(l), (e = e instanceof Error ? e : new Error("" + (e || "Unknown XMLHttpRequest Error"))).statusCode = 0, n(e, f)
        }

        function e() {
            var e, t, i;
            if (!o) return clearTimeout(l), e = s.useXDR && void 0 === d.status ? 200 : 1223 === d.status ? 204 : d.status, t = f, i = null, 0 !== e ? (t = {
                body: a(),
                statusCode: e,
                method: u,
                headers: {},
                url: h,
                rawRequest: d
            }, d.getAllResponseHeaders && (t.headers = Ti(d.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), n(i, t, t.body)
        }

        var i, o, l, d = s.xhr || null,
            h = (d = d || new (s.cors || s.useXDR ? xi.XDomainRequest : xi.XMLHttpRequest)).url = s.uri || s.url,
            u = d.method = s.method || "GET", c = s.body || s.data, p = d.headers = s.headers || {}, m = !!s.sync,
            g = !1, f = {body: void 0, headers: {}, statusCode: 0, method: u, url: h, rawRequest: d};
        if ("json" in s && !1 !== s.json && (g = !0, p.accept || p.Accept || (p.Accept = "application/json"), "GET" !== u) && "HEAD" !== u && (p["content-type"] || p["Content-Type"] || (p["Content-Type"] = "application/json"), c = JSON.stringify(!0 === s.json ? c : s.json)), d.onreadystatechange = function () {
            4 === d.readyState && setTimeout(e, 0)
        }, d.onload = e, d.onerror = t, d.onprogress = function () {
        }, d.onabort = function () {
            o = !0
        }, d.ontimeout = t, d.open(u, h, !m, s.username, s.password), m || (d.withCredentials = !!s.withCredentials), !m && 0 < s.timeout && (l = setTimeout(function () {
            var e;
            o || (o = !0, d.abort("timeout"), (e = new Error("XMLHttpRequest timeout")).code = "ETIMEDOUT", t(e))
        }, s.timeout)), d.setRequestHeader) for (i in p) p.hasOwnProperty(i) && d.setRequestHeader(i, p[i]); else if (s.headers && !function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return;
            return 1
        }(s.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in s && (d.responseType = s.responseType), "beforeSend" in s && "function" == typeof s.beforeSend && s.beforeSend(d), d.send(c || null), d
    }

    wi.default = gi;

    function Ai(e, t) {
        var i = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
        const s = [];
        i.oncue = function (e) {
            t.addCue(e)
        }, i.onparsingerror = function (e) {
            s.push(e)
        }, i.onflush = function () {
            t.trigger({type: "loadeddata", target: t})
        }, i.parse(e), 0 < s.length && (window.console && window.console.groupCollapsed && window.console.groupCollapsed("Text Track parsing errors for " + t.src), s.forEach(e => l.error(e)), window.console) && window.console.groupEnd && window.console.groupEnd(), i.flush()
    }

    function Di(e, s) {
        var t = {uri: e};
        (e = ci(e)) && (t.cors = e), (e = "use-credentials" === s.tech_.crossOrigin()) && (t.withCredentials = e), wi(t, m(this, function (e, t, i) {
            if (e) return l.error(e, t);
            s.loaded_ = !0, "function" != typeof window.WebVTT ? s.tech_ && s.tech_.any(["vttjsloaded", "vttjserror"], e => {
                if ("vttjserror" !== e.type) return Ai(i, s);
                l.error("vttjs failed to load, stopping trying to process " + s.src)
            }) : Ai(i, s)
        }))
    }

    class Li extends di {
        constructor(e = {}) {
            if (!e.tech) throw new Error("A tech was not provided.");
            e = d(e, {kind: oi[e.kind] || "subtitles", language: e.language || e.srclang || ""});
            let t = li[e.mode] || "disabled";
            const i = e.default,
                s = ("metadata" !== e.kind && "chapters" !== e.kind || (t = "hidden"), super(e), this.tech_ = e.tech, this.cues_ = [], this.activeCues_ = [], this.preload_ = !1 !== this.tech_.preloadTextTracks, new ri(this.cues_)),
                n = new ri(this.activeCues_);
            let a = !1;
            this.timeupdateHandler = m(this, function (e = {}) {
                this.tech_.isDisposed() || (this.tech_.isReady_ && (this.activeCues = this.activeCues, a) && (this.trigger("cuechange"), a = !1), "timeupdate" !== e.type && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler)))
            });
            this.tech_.one("dispose", () => {
                this.stopTracking()
            }), "disabled" !== t && this.startTracking(), Object.defineProperties(this, {
                default: {
                    get() {
                        return i
                    }, set() {
                    }
                }, mode: {
                    get() {
                        return t
                    }, set(e) {
                        li[e] && t !== e && (t = e, this.preload_ || "disabled" === t || 0 !== this.cues.length || Di(this.src, this), this.stopTracking(), "disabled" !== t && this.startTracking(), this.trigger("modechange"))
                    }
                }, cues: {
                    get() {
                        return this.loaded_ ? s : null
                    }, set() {
                    }
                }, activeCues: {
                    get() {
                        if (!this.loaded_) return null;
                        if (0 !== this.cues.length) {
                            var i = this.tech_.currentTime(), s = [];
                            for (let e = 0, t = this.cues.length; e < t; e++) {
                                var r = this.cues[e];
                                r.startTime <= i && r.endTime >= i && s.push(r)
                            }
                            if (a = !1, s.length !== this.activeCues_.length) a = !0; else for (let e = 0; e < s.length; e++) -1 === this.activeCues_.indexOf(s[e]) && (a = !0);
                            this.activeCues_ = s, n.setCues_(this.activeCues_)
                        }
                        return n
                    }, set() {
                    }
                }
            }), e.src ? (this.src = e.src, this.preload_ || (this.loaded_ = !0), (this.preload_ || "subtitles" !== e.kind && "captions" !== e.kind) && Di(this.src, this)) : this.loaded_ = !0
        }

        startTracking() {
            this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler), this.tech_.on("timeupdate", this.timeupdateHandler)
        }

        stopTracking() {
            this.rvf_ && (this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_ = void 0), this.tech_.off("timeupdate", this.timeupdateHandler)
        }

        addCue(e) {
            let t = e;
            if (!("getCueAsHTML" in t)) {
                t = new window.vttjs.VTTCue(e.startTime, e.endTime, e.text);
                for (const s in e) s in t || (t[s] = e[s]);
                t.id = e.id, t.originalCue_ = e
            }
            var i = this.tech_.textTracks();
            for (let e = 0; e < i.length; e++) i[e] !== this && i[e].removeCue(t);
            this.cues_.push(t), this.cues.setCues_(this.cues_)
        }

        removeCue(e) {
            let t = this.cues_.length;
            for (; t--;) {
                var i = this.cues_[t];
                if (i === e || i.originalCue_ && i.originalCue_ === e) {
                    this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                    break
                }
            }
        }
    }

    Li.prototype.allowedEvents_ = {cuechange: "cuechange"};

    class Pi extends di {
        constructor(e = {}) {
            e = d(e, {kind: ai[e.kind] || ""});
            super(e);
            let t = !1;
            Object.defineProperty(this, "enabled", {
                get() {
                    return t
                }, set(e) {
                    "boolean" == typeof e && e !== t && (t = e, this.trigger("enabledchange"))
                }
            }), e.enabled && (this.enabled = e.enabled), this.loaded_ = !0
        }
    }

    class Oi extends di {
        constructor(e = {}) {
            e = d(e, {kind: ni[e.kind] || ""});
            super(e);
            let t = !1;
            Object.defineProperty(this, "selected", {
                get() {
                    return t
                }, set(e) {
                    "boolean" == typeof e && e !== t && (t = e, this.trigger("selectedchange"))
                }
            }), e.selected && (this.selected = e.selected)
        }
    }

    class Ni extends _t {
        constructor(e = {}) {
            super();
            let t;
            const i = new Li(e);
            this.kind = i.kind, this.src = i.src, this.srclang = i.language, this.label = i.label, this.default = i.default, Object.defineProperties(this, {
                readyState: {
                    get() {
                        return t
                    }
                }, track: {
                    get() {
                        return i
                    }
                }
            }), t = Ni.NONE, i.addEventListener("loadeddata", () => {
                t = Ni.LOADED, this.trigger({type: "load", target: this})
            })
        }
    }

    Ni.prototype.allowedEvents_ = {load: "load"}, Ni.NONE = 0, Ni.LOADING = 1, Ni.LOADED = 2, Ni.ERROR = 3;
    const Ri = {
        audio: {
            ListClass: class extends ei {
                constructor(t = []) {
                    for (let e = t.length - 1; 0 <= e; e--) if (t[e].enabled) {
                        ti(t, t[e]);
                        break
                    }
                    super(t), this.changing_ = !1
                }

                addTrack(e) {
                    e.enabled && ti(this, e), super.addTrack(e), e.addEventListener && (e.enabledChange_ = () => {
                        this.changing_ || (this.changing_ = !0, ti(this, e), this.changing_ = !1, this.trigger("change"))
                    }, e.addEventListener("enabledchange", e.enabledChange_))
                }

                removeTrack(e) {
                    super.removeTrack(e), e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null)
                }
            }, TrackClass: Pi, capitalName: "Audio"
        }, video: {
            ListClass: class extends ei {
                constructor(t = []) {
                    for (let e = t.length - 1; 0 <= e; e--) if (t[e].selected) {
                        ii(t, t[e]);
                        break
                    }
                    super(t), this.changing_ = !1, Object.defineProperty(this, "selectedIndex", {
                        get() {
                            for (let e = 0; e < this.length; e++) if (this[e].selected) return e;
                            return -1
                        }, set() {
                        }
                    })
                }

                addTrack(e) {
                    e.selected && ii(this, e), super.addTrack(e), e.addEventListener && (e.selectedChange_ = () => {
                        this.changing_ || (this.changing_ = !0, ii(this, e), this.changing_ = !1, this.trigger("change"))
                    }, e.addEventListener("selectedchange", e.selectedChange_))
                }

                removeTrack(e) {
                    super.removeTrack(e), e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null)
                }
            }, TrackClass: Oi, capitalName: "Video"
        }, text: {ListClass: si, TrackClass: Li, capitalName: "Text"}
    }, Mi = (Object.keys(Ri).forEach(function (e) {
        Ri[e].getterName = e + "Tracks", Ri[e].privateName = e + "Tracks_"
    }), {
        remoteText: {
            ListClass: si,
            TrackClass: Li,
            capitalName: "RemoteText",
            getterName: "remoteTextTracks",
            privateName: "remoteTextTracks_"
        }, remoteTextEl: {
            ListClass: class {
                constructor(i = []) {
                    this.trackElements_ = [], Object.defineProperty(this, "length", {
                        get() {
                            return this.trackElements_.length
                        }
                    });
                    for (let e = 0, t = i.length; e < t; e++) this.addTrackElement_(i[e])
                }

                addTrackElement_(e) {
                    const t = this.trackElements_.length;
                    "" + t in this || Object.defineProperty(this, t, {
                        get() {
                            return this.trackElements_[t]
                        }
                    }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
                }

                getTrackElementByTrack_(i) {
                    let s;
                    for (let e = 0, t = this.trackElements_.length; e < t; e++) if (i === this.trackElements_[e].track) {
                        s = this.trackElements_[e];
                        break
                    }
                    return s
                }

                removeTrackElement_(i) {
                    for (let e = 0, t = this.trackElements_.length; e < t; e++) if (i === this.trackElements_[e]) {
                        this.trackElements_[e].track && "function" == typeof this.trackElements_[e].track.off && this.trackElements_[e].track.off(), "function" == typeof this.trackElements_[e].off && this.trackElements_[e].off(), this.trackElements_.splice(e, 1);
                        break
                    }
                }
            },
            TrackClass: Ni,
            capitalName: "RemoteTextTrackEls",
            getterName: "remoteTextTrackEls",
            privateName: "remoteTextTrackEls_"
        }
    }), a = Object.assign({}, Ri, Mi);
    Mi.names = Object.keys(Mi), Ri.names = Object.keys(Ri), a.names = [].concat(Mi.names).concat(Ri.names);
    var gi = "undefined" != typeof Nt ? Nt : "undefined" != typeof window ? window : {},
        Ui = "undefined" != typeof document ? document : (Ui = gi["__GLOBAL_DOCUMENT_CACHE@4"]) || (gi["__GLOBAL_DOCUMENT_CACHE@4"] = {}),
        Nt = Ui, Bi = Object.create || function (e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return Fi.prototype = e, new Fi
        };

    function Fi() {
    }

    function ji(e, t) {
        this.name = "ParsingError", this.code = e.code, this.message = t || e.message
    }

    function qi(e) {
        function t(e, t, i, s) {
            return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | s) / 1e3
        }

        e = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
        return e ? e[3] ? t(e[1], e[2], e[3].replace(":", ""), e[4]) : 59 < e[1] ? t(e[1], e[2], 0, e[4]) : t(0, e[1], e[2], e[4]) : null
    }

    function Hi() {
        this.values = Bi(null)
    }

    function Vi(e, t, i, s) {
        var r, n, a = s ? e.split(s) : [e];
        for (r in a) "string" == typeof a[r] && 2 === (n = a[r].split(i)).length && t(n[0].trim(), n[1].trim())
    }

    ((ji.prototype = Bi(Error.prototype)).constructor = ji).Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
    }, Hi.prototype = {
        set: function (e, t) {
            this.get(e) || "" === t || (this.values[e] = t)
        }, get: function (e, t, i) {
            return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
        }, has: function (e) {
            return e in this.values
        }, alt: function (e, t, i) {
            for (var s = 0; s < i.length; ++s) if (t === i[s]) {
                this.set(e, t);
                break
            }
        }, integer: function (e, t) {
            /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
        }, percent: function (e, t) {
            return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0)
        }
    };
    var zi = Nt.createElement && Nt.createElement("textarea"),
        $i = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"}, Wi = {
            white: "rgba(255,255,255,1)",
            lime: "rgba(0,255,0,1)",
            cyan: "rgba(0,255,255,1)",
            red: "rgba(255,0,0,1)",
            yellow: "rgba(255,255,0,1)",
            magenta: "rgba(255,0,255,1)",
            blue: "rgba(0,0,255,1)",
            black: "rgba(0,0,0,1)"
        }, Gi = {v: "title", lang: "lang"}, Xi = {rt: "ruby"};

    function Ki(e, t) {
        for (var i, s, r, n, a, o, l = e.document.createElement("div"), d = l, h = []; null !== (o = void 0, o = t ? (o = (o = t.match(/^([^<]*)(<[^>]*>?)?/))[1] || o[2], t = t.substr(o.length), o) : null);) "<" === o[0] ? "/" === o[1] ? h.length && h[h.length - 1] === o.substr(2).replace(">", "") && (h.pop(), d = d.parentNode) : (s = qi(o.substr(1, o.length - 2))) ? (i = e.document.createProcessingInstruction("timestamp", s), d.appendChild(i)) : (s = o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)) && (r = s[1], n = s[3], a = void 0, a = $i[r], i = a ? (a = e.document.createElement(a), (r = Gi[r]) && n && (a[r] = n.trim()), a) : null) && (r = d, Xi[(n = i).localName] && Xi[n.localName] !== r.localName || (s[2] && ((a = s[2].split(".")).forEach(function (e) {
            var t = /^bg_/.test(e), e = t ? e.slice(3) : e;
            Wi.hasOwnProperty(e) && (e = Wi[e], i.style[t ? "background-color" : "color"] = e)
        }), i.className = a.join(" ")), h.push(s[1]), d.appendChild(i), d = i)) : d.appendChild(e.document.createTextNode((n = o, zi.innerHTML = n, n = zi.textContent, zi.textContent = "", n)));
        return l
    }

    var Yi = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];

    function Qi(e) {
        var t = [], i = "";
        if (e && e.childNodes) for (n(t, e); i = function e(t) {
            var i, s, r;
            return t && t.length ? (s = (i = t.pop()).textContent || i.innerText) ? (r = s.match(/^.*(\n|\r)/)) ? r[t.length = 0] : s : "ruby" === i.tagName ? e(t) : i.childNodes ? (n(t, i), e(t)) : void 0 : null
        }(t);) for (var s = 0; s < i.length; s++) if (function (e) {
            for (var t = 0; t < Yi.length; t++) {
                var i = Yi[t];
                if (e >= i[0] && e <= i[1]) return 1
            }
        }(i.charCodeAt(s))) return "rtl";
        return "ltr";

        function n(e, t) {
            for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i])
        }
    }

    function Ji() {
    }

    function Zi(e, t, i) {
        Ji.call(this), this.cue = t, this.cueDiv = Ki(e, t.text);
        var s = {
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline",
            writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext"
        }, r = (this.applyStyles(s, this.cueDiv), this.div = e.document.createElement("div"), s = {
            direction: Qi(this.cueDiv),
            writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
            unicodeBidi: "plaintext",
            textAlign: "middle" === t.align ? "center" : t.align,
            font: i.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, this.applyStyles(s), this.div.appendChild(this.cueDiv), 0);
        switch (t.positionAlign) {
            case"start":
            case"line-left":
                r = t.position;
                break;
            case"center":
                r = t.position - t.size / 2;
                break;
            case"end":
            case"line-right":
                r = t.position - t.size
        }
        "" === t.vertical ? this.applyStyles({
            left: this.formatStyle(r, "%"),
            width: this.formatStyle(t.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(r, "%"),
            height: this.formatStyle(t.size, "%")
        }), this.move = function (e) {
            this.applyStyles({
                top: this.formatStyle(e.top, "px"),
                bottom: this.formatStyle(e.bottom, "px"),
                left: this.formatStyle(e.left, "px"),
                right: this.formatStyle(e.right, "px"),
                height: this.formatStyle(e.height, "px"),
                width: this.formatStyle(e.width, "px")
            })
        }
    }

    function y(e) {
        var t, i, s, r;
        e.div && (t = e.div.offsetHeight, i = e.div.offsetWidth, s = e.div.offsetTop, r = (r = (r = e.div.childNodes) && r[0]) && r.getClientRects && r.getClientRects(), e = e.div.getBoundingClientRect(), r = r ? Math.max(r[0] && r[0].height || 0, e.height / r.length) : 0), this.left = e.left, this.right = e.right, this.top = e.top || s, this.height = e.height || t, this.bottom = e.bottom || s + (e.height || t), this.width = e.width || i, this.lineHeight = void 0 !== r ? r : e.lineHeight
    }

    function es(e, t, o, l) {
        var i, s = new y(t), r = t.cue, n = function (e) {
            if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line;
            if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
            for (var t = e.track, i = t.textTrackList, s = 0, r = 0; r < i.length && i[r] !== t; r++) "showing" === i[r].mode && s++;
            return -1 * ++s
        }(r), a = [];
        if (r.snapToLines) {
            switch (r.vertical) {
                case"":
                    a = ["+y", "-y"], i = "height";
                    break;
                case"rl":
                    a = ["+x", "-x"], i = "width";
                    break;
                case"lr":
                    a = ["-x", "+x"], i = "width"
            }
            var d = s.lineHeight, h = d * Math.round(n), u = o[i] + d, c = a[0];
            Math.abs(h) > u && (h = h < 0 ? -1 : 1, h *= Math.ceil(u / d) * d), n < 0 && (h += "" === r.vertical ? o.height : o.width, a = a.reverse()), s.move(c, h)
        } else {
            var p = s.lineHeight / o.height * 100;
            switch (r.lineAlign) {
                case"center":
                    n -= p / 2;
                    break;
                case"end":
                    n -= p
            }
            switch (r.vertical) {
                case"":
                    t.applyStyles({top: t.formatStyle(n, "%")});
                    break;
                case"rl":
                    t.applyStyles({left: t.formatStyle(n, "%")});
                    break;
                case"lr":
                    t.applyStyles({right: t.formatStyle(n, "%")})
            }
            a = ["+y", "-x", "+x", "-y"], s = new y(t)
        }
        u = function (e, t) {
            for (var i, s = new y(e), r = 1, n = 0; n < t.length; n++) {
                for (; e.overlapsOppositeAxis(o, t[n]) || e.within(o) && e.overlapsAny(l);) e.move(t[n]);
                if (e.within(o)) return e;
                var a = e.intersectPercentage(o);
                a < r && (i = new y(e), r = a), e = new y(s)
            }
            return i || s
        }(s, a);
        t.move(u.toCSSCompatValues(o))
    }

    function ts() {
    }

    Ji.prototype.applyStyles = function (e, t) {
        for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i])
    }, Ji.prototype.formatStyle = function (e, t) {
        return 0 === e ? 0 : e + t
    }, (Zi.prototype = Bi(Ji.prototype)).constructor = Zi, y.prototype.move = function (e, t) {
        switch (t = void 0 !== t ? t : this.lineHeight, e) {
            case"+x":
                this.left += t, this.right += t;
                break;
            case"-x":
                this.left -= t, this.right -= t;
                break;
            case"+y":
                this.top += t, this.bottom += t;
                break;
            case"-y":
                this.top -= t, this.bottom -= t
        }
    }, y.prototype.overlaps = function (e) {
        return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
    }, y.prototype.overlapsAny = function (e) {
        for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
        return !1
    }, y.prototype.within = function (e) {
        return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
    }, y.prototype.overlapsOppositeAxis = function (e, t) {
        switch (t) {
            case"+x":
                return this.left < e.left;
            case"-x":
                return this.right > e.right;
            case"+y":
                return this.top < e.top;
            case"-y":
                return this.bottom > e.bottom
        }
    }, y.prototype.intersectPercentage = function (e) {
        return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
    }, y.prototype.toCSSCompatValues = function (e) {
        return {
            top: this.top - e.top,
            bottom: e.bottom - this.bottom,
            left: this.left - e.left,
            right: e.right - this.right,
            height: this.height,
            width: this.width
        }
    }, y.getSimpleBoxPosition = function (e) {
        var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
            i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
            s = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
        return {
            left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
            right: e.right,
            top: e.top || s,
            height: e.height || t,
            bottom: e.bottom || s + (e.height || t),
            width: e.width || i
        }
    }, ts.StringDecoder = function () {
        return {
            decode: function (e) {
                if (!e) return "";
                if ("string" != typeof e) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(e))
            }
        }
    }, ts.convertCueToDOMTree = function (e, t) {
        return e && t ? Ki(e, t) : null
    };
    ts.processCues = function (e, t, i) {
        if (!e || !t || !i) return null;
        for (; i.firstChild;) i.removeChild(i.firstChild);
        var s = e.document.createElement("div");
        if (s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.margin = "1.5%", i.appendChild(s), function (e) {
            for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return 1
        }(t)) for (var r, n, a = [], o = y.getSimpleBoxPosition(s), l = {font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"}, d = 0; d < t.length; d++) n = t[d], r = new Zi(e, n, l), s.appendChild(r.div), es(0, r, o, a), n.displayState = r.div, a.push(y.getSimpleBoxPosition(r)); else for (var h = 0; h < t.length; h++) s.appendChild(t[h].displayState)
    }, (ts.Parser = function (e, t, i) {
        i || (i = t, t = {}), t = t || {}, this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
    }).prototype = {
        reportOrThrowError: function (e) {
            if (!(e instanceof ji)) throw e;
            this.onparsingerror && this.onparsingerror(e)
        }, parse: function (e) {
            var s = this;

            function t() {
                for (var e = s.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                var i = e.substr(0, t);
                return "\r" === e[t] && ++t, "\n" === e[t] && ++t, s.buffer = e.substr(t), i
            }

            function i(e) {
                e.match(/X-TIMESTAMP-MAP/) ? Vi(e, function (e, t) {
                    var i;
                    "X-TIMESTAMP-MAP" === e && (e = t, i = new Hi, Vi(e, function (e, t) {
                        switch (e) {
                            case"MPEGT":
                                i.integer(e + "S", t);
                                break;
                            case"LOCA":
                                i.set(e + "L", qi(t))
                        }
                    }, /[^\d]:/, /,/), s.ontimestampmap) && s.ontimestampmap({
                        MPEGTS: i.get("MPEGTS"),
                        LOCAL: i.get("LOCAL")
                    })
                }, /=/) : Vi(e, function (e, t) {
                    var r;
                    "Region" === e && (e = t, r = new Hi, Vi(e, function (e, t) {
                        switch (e) {
                            case"id":
                                r.set(e, t);
                                break;
                            case"width":
                                r.percent(e, t);
                                break;
                            case"lines":
                                r.integer(e, t);
                                break;
                            case"regionanchor":
                            case"viewportanchor":
                                var i, s = t.split(",");
                                2 === s.length && ((i = new Hi).percent("x", s[0]), i.percent("y", s[1]), i.has("x") && i.has("y")) && (r.set(e + "X", i.get("x")), r.set(e + "Y", i.get("y")));
                                break;
                            case"scroll":
                                r.alt(e, t, ["up"])
                        }
                    }, /=/, /\s/), r.has("id")) && ((e = new (s.vttjs.VTTRegion || s.window.VTTRegion)).width = r.get("width", 100), e.lines = r.get("lines", 3), e.regionAnchorX = r.get("regionanchorX", 0), e.regionAnchorY = r.get("regionanchorY", 100), e.viewportAnchorX = r.get("viewportanchorX", 0), e.viewportAnchorY = r.get("viewportanchorY", 100), e.scroll = r.get("scroll", ""), s.onregion && s.onregion(e), s.regionList.push({
                        id: r.get("id"),
                        region: e
                    }))
                }, /:/)
            }

            e && (s.buffer += s.decoder.decode(e, {stream: !0}));
            try {
                if ("INITIAL" === s.state) {
                    if (!/\r\n|\n/.test(s.buffer)) return this;
                    var r, n = (r = t()).match(/^WEBVTT([ \t].*)?$/);
                    if (!n || !n[0]) throw new ji(ji.Errors.BadSignature);
                    s.state = "HEADER"
                }
                for (var a = !1; s.buffer;) {
                    if (!/\r\n|\n/.test(s.buffer)) return this;
                    switch (a ? a = !1 : r = t(), s.state) {
                        case"HEADER":
                            /:/.test(r) ? i(r) : r || (s.state = "ID");
                            continue;
                        case"NOTE":
                            r || (s.state = "ID");
                            continue;
                        case"ID":
                            if (/^NOTE($|[ \t])/.test(r)) {
                                s.state = "NOTE";
                                break
                            }
                            if (!r) continue;
                            s.cue = new (s.vttjs.VTTCue || s.window.VTTCue)(0, 0, "");
                            try {
                                s.cue.align = "center"
                            } catch (e) {
                                s.cue.align = "middle"
                            }
                            if (s.state = "CUE", -1 === r.indexOf("--\x3e")) {
                                s.cue.id = r;
                                continue
                            }
                        case"CUE":
                            try {
                                !function (t, i, n) {
                                    var s = t;

                                    function e() {
                                        var e = qi(t);
                                        if (null === e) throw new ji(ji.Errors.BadTimeStamp, "Malformed timestamp: " + s);
                                        return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                                    }

                                    function r() {
                                        t = t.replace(/^\s+/, "")
                                    }

                                    if (r(), i.startTime = e(), r(), "--\x3e" !== t.substr(0, 3)) throw new ji(ji.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + s);
                                    t = t.substr(3), r(), i.endTime = e(), r();
                                    var a = t, o = new Hi;
                                    Vi(a, function (e, t) {
                                        switch (e) {
                                            case"region":
                                                for (var i = n.length - 1; 0 <= i; i--) if (n[i].id === t) {
                                                    o.set(e, n[i].region);
                                                    break
                                                }
                                                break;
                                            case"vertical":
                                                o.alt(e, t, ["rl", "lr"]);
                                                break;
                                            case"line":
                                                var s = t.split(","), r = s[0];
                                                o.integer(e, r), o.percent(e, r) && o.set("snapToLines", !1), o.alt(e, r, ["auto"]), 2 === s.length && o.alt("lineAlign", s[1], ["start", "center", "end"]);
                                                break;
                                            case"position":
                                                s = t.split(","), o.percent(e, s[0]), 2 === s.length && o.alt("positionAlign", s[1], ["start", "center", "end"]);
                                                break;
                                            case"size":
                                                o.percent(e, t);
                                                break;
                                            case"align":
                                                o.alt(e, t, ["start", "center", "end", "left", "right"])
                                        }
                                    }, /:/, /\s/), i.region = o.get("region", null), i.vertical = o.get("vertical", "");
                                    try {
                                        i.line = o.get("line", "auto")
                                    } catch (e) {
                                    }
                                    i.lineAlign = o.get("lineAlign", "start"), i.snapToLines = o.get("snapToLines", !0), i.size = o.get("size", 100);
                                    try {
                                        i.align = o.get("align", "center")
                                    } catch (e) {
                                        i.align = o.get("align", "middle")
                                    }
                                    try {
                                        i.position = o.get("position", "auto")
                                    } catch (e) {
                                        i.position = o.get("position", {
                                            start: 0,
                                            left: 0,
                                            center: 50,
                                            middle: 50,
                                            end: 100,
                                            right: 100
                                        }, i.align)
                                    }
                                    i.positionAlign = o.get("positionAlign", {
                                        start: "start",
                                        left: "start",
                                        center: "center",
                                        middle: "center",
                                        end: "end",
                                        right: "end"
                                    }, i.align)
                                }(r, s.cue, s.regionList)
                            } catch (e) {
                                s.reportOrThrowError(e), s.cue = null, s.state = "BADCUE";
                                continue
                            }
                            s.state = "CUETEXT";
                            continue;
                        case"CUETEXT":
                            var o = -1 !== r.indexOf("--\x3e");
                            if (!r || o && (a = !0)) {
                                s.oncue && s.oncue(s.cue), s.cue = null, s.state = "ID";
                                continue
                            }
                            s.cue.text && (s.cue.text += "\n"), s.cue.text += r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
                            continue;
                        case"BADCUE":
                            r || (s.state = "ID");
                            continue
                    }
                }
            } catch (e) {
                s.reportOrThrowError(e), "CUETEXT" === s.state && s.cue && s.oncue && s.oncue(s.cue), s.cue = null, s.state = "INITIAL" === s.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        }, flush: function () {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), !t.cue && "HEADER" !== t.state || (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new ji(ji.Errors.BadSignature)
            } catch (e) {
                t.reportOrThrowError(e)
            }
            return t.onflush && t.onflush(), this
        }
    };
    var is = ts, ss = {"": 1, lr: 1, rl: 1},
        rs = {start: 1, center: 1, end: 1, left: 1, right: 1, auto: 1, "line-left": 1, "line-right": 1};

    function ns(e) {
        return "string" == typeof e && !!rs[e.toLowerCase()] && e.toLowerCase()
    }

    function as(e, t, i) {
        this.hasBeenReset = !1;
        var s = "", r = !1, n = e, a = t, o = i, l = null, d = "", h = !0, u = "auto", c = "start", p = "auto",
            m = "auto", g = 100, f = "center";
        Object.defineProperties(this, {
            id: {
                enumerable: !0, get: function () {
                    return s
                }, set: function (e) {
                    s = "" + e
                }
            }, pauseOnExit: {
                enumerable: !0, get: function () {
                    return r
                }, set: function (e) {
                    r = !!e
                }
            }, startTime: {
                enumerable: !0, get: function () {
                    return n
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                    n = e, this.hasBeenReset = !0
                }
            }, endTime: {
                enumerable: !0, get: function () {
                    return a
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                    a = e, this.hasBeenReset = !0
                }
            }, text: {
                enumerable: !0, get: function () {
                    return o
                }, set: function (e) {
                    o = "" + e, this.hasBeenReset = !0
                }
            }, region: {
                enumerable: !0, get: function () {
                    return l
                }, set: function (e) {
                    l = e, this.hasBeenReset = !0
                }
            }, vertical: {
                enumerable: !0, get: function () {
                    return d
                }, set: function (e) {
                    e = "string" == typeof (e = e) && !!ss[e.toLowerCase()] && e.toLowerCase();
                    if (!1 === e) throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                    d = e, this.hasBeenReset = !0
                }
            }, snapToLines: {
                enumerable: !0, get: function () {
                    return h
                }, set: function (e) {
                    h = !!e, this.hasBeenReset = !0
                }
            }, line: {
                enumerable: !0, get: function () {
                    return u
                }, set: function (e) {
                    if ("number" != typeof e && "auto" !== e) throw new SyntaxError("Line: an invalid number or illegal string was specified.");
                    u = e, this.hasBeenReset = !0
                }
            }, lineAlign: {
                enumerable: !0, get: function () {
                    return c
                }, set: function (e) {
                    e = ns(e);
                    e && (c = e, this.hasBeenReset = !0)
                }
            }, position: {
                enumerable: !0, get: function () {
                    return p
                }, set: function (e) {
                    if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
                    p = e, this.hasBeenReset = !0
                }
            }, positionAlign: {
                enumerable: !0, get: function () {
                    return m
                }, set: function (e) {
                    e = ns(e);
                    e && (m = e, this.hasBeenReset = !0)
                }
            }, size: {
                enumerable: !0, get: function () {
                    return g
                }, set: function (e) {
                    if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
                    g = e, this.hasBeenReset = !0
                }
            }, align: {
                enumerable: !0, get: function () {
                    return f
                }, set: function (e) {
                    e = ns(e);
                    if (!e) throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
                    f = e, this.hasBeenReset = !0
                }
            }
        }), this.displayState = void 0
    }

    as.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    };
    var os = as, ls = {"": !0, up: !0};

    function ds(e) {
        return "number" == typeof e && 0 <= e && e <= 100
    }

    function hs() {
        var t = 100, i = 3, s = 0, r = 100, n = 0, a = 100, o = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0, get: function () {
                    return t
                }, set: function (e) {
                    if (!ds(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            }, lines: {
                enumerable: !0, get: function () {
                    return i
                }, set: function (e) {
                    if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                    i = e
                }
            }, regionAnchorY: {
                enumerable: !0, get: function () {
                    return r
                }, set: function (e) {
                    if (!ds(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    r = e
                }
            }, regionAnchorX: {
                enumerable: !0, get: function () {
                    return s
                }, set: function (e) {
                    if (!ds(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    s = e
                }
            }, viewportAnchorY: {
                enumerable: !0, get: function () {
                    return a
                }, set: function (e) {
                    if (!ds(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = e
                }
            }, viewportAnchorX: {
                enumerable: !0, get: function () {
                    return n
                }, set: function (e) {
                    if (!ds(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    n = e
                }
            }, scroll: {
                enumerable: !0, get: function () {
                    return o
                }, set: function (e) {
                    e = "string" == typeof (e = e) && !!ls[e.toLowerCase()] && e.toLowerCase();
                    !1 !== e && (o = e)
                }
            }
        })
    }

    var us = Rt(function (e) {
        var e = e.exports = {WebVTT: is, VTTCue: os, VTTRegion: hs}, t = (fi.vttjs = e, fi.WebVTT = e.WebVTT, e.VTTCue),
            i = e.VTTRegion, s = fi.VTTCue, r = fi.VTTRegion;
        e.shim = function () {
            fi.VTTCue = t, fi.VTTRegion = i
        }, e.restore = function () {
            fi.VTTCue = s, fi.VTTRegion = r
        }, fi.VTTCue || e.shim()
    });
    us.WebVTT, us.VTTCue, us.VTTRegion;

    class _ extends f {
        constructor(t = {}, e = function () {
        }) {
            t.reportTouchActivity = !1, super(null, t, e), this.onDurationChange_ = e => this.onDurationChange(e), this.trackProgress_ = e => this.trackProgress(e), this.trackCurrentTime_ = e => this.trackCurrentTime(e), this.stopTrackingCurrentTime_ = e => this.stopTrackingCurrentTime(e), this.disposeSourceHandler_ = e => this.disposeSourceHandler(e), this.queuedHanders_ = new Set, this.hasStarted_ = !1, this.on("playing", function () {
                this.hasStarted_ = !0
            }), this.on("loadstart", function () {
                this.hasStarted_ = !1
            }), a.names.forEach(e => {
                e = a[e];
                t && t[e.getterName] && (this[e.privateName] = t[e.getterName])
            }), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(e => {
                !1 === t[`native${e}Tracks`] && (this[`featuresNative${e}Tracks`] = !1)
            }), !1 === t.nativeCaptions || !1 === t.nativeTextTracks ? this.featuresNativeTextTracks = !1 : !0 !== t.nativeCaptions && !0 !== t.nativeTextTracks || (this.featuresNativeTextTracks = !0), this.featuresNativeTextTracks || this.emulateTextTracks(), this.preloadTextTracks = !1 !== t.preloadTextTracks, this.autoRemoteTextTracks_ = new a.text.ListClass, this.initTrackListeners(), t.nativeControlsForTouch || this.emitTapEvents(), this.constructor && (this.name_ = this.constructor.name || "Unknown Tech")
        }

        triggerSourceset(e) {
            this.isReady_ || this.one("ready", () => this.setTimeout(() => this.triggerSourceset(e), 1)), this.trigger({
                src: e,
                type: "sourceset"
            })
        }

        manualProgressOn() {
            this.on("durationchange", this.onDurationChange_), this.manualProgress = !0, this.one("ready", this.trackProgress_)
        }

        manualProgressOff() {
            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange_)
        }

        trackProgress(e) {
            this.stopTrackingProgress(), this.progressInterval = this.setInterval(m(this, function () {
                var e = this.bufferedPercent();
                this.bufferedPercent_ !== e && this.trigger("progress"), 1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
            }), 500)
        }

        onDurationChange(e) {
            this.duration_ = this.duration()
        }

        buffered() {
            return Bt(0, 0)
        }

        bufferedPercent() {
            return $t(this.buffered(), this.duration_)
        }

        stopTrackingProgress() {
            this.clearInterval(this.progressInterval)
        }

        manualTimeUpdatesOn() {
            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime_), this.on("pause", this.stopTrackingCurrentTime_)
        }

        manualTimeUpdatesOff() {
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime_), this.off("pause", this.stopTrackingCurrentTime_)
        }

        trackCurrentTime() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
                this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
            }, 250)
        }

        stopTrackingCurrentTime() {
            this.clearInterval(this.currentTimeInterval), this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }

        dispose() {
            this.clearTracks(Ri.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), super.dispose()
        }

        clearTracks(e) {
            (e = [].concat(e)).forEach(e => {
                var t = this[e + "Tracks"]() || [];
                let i = t.length;
                for (; i--;) {
                    var s = t[i];
                    "text" === e && this.removeRemoteTextTrack(s), t.removeTrack(s)
                }
            })
        }

        cleanupAutoTextTracks() {
            var e = this.autoRemoteTextTracks_ || [];
            let t = e.length;
            for (; t--;) {
                var i = e[t];
                this.removeRemoteTextTrack(i)
            }
        }

        reset() {
        }

        crossOrigin() {
        }

        setCrossOrigin() {
        }

        error(e) {
            return void 0 !== e && (this.error_ = new i(e), this.trigger("error")), this.error_
        }

        played() {
            return this.hasStarted_ ? Bt(0, 0) : Bt()
        }

        play() {
        }

        setScrubbing(e) {
        }

        scrubbing() {
        }

        setCurrentTime(e) {
            this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
        }

        initTrackListeners() {
            Ri.names.forEach(e => {
                var t = Ri[e];
                const i = () => {
                    this.trigger(e + "trackchange")
                }, s = this[t.getterName]();
                s.addEventListener("removetrack", i), s.addEventListener("addtrack", i), this.on("dispose", () => {
                    s.removeEventListener("removetrack", i), s.removeEventListener("addtrack", i)
                })
            })
        }

        addWebVttScript_() {
            if (!window.WebVTT) if (document.body.contains(this.el())) if (!this.options_["vtt.js"] && Y(us) && 0 < Object.keys(us).length) this.trigger("vttjsloaded"); else {
                const e = document.createElement("script");
                e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", e.onload = () => {
                    this.trigger("vttjsloaded")
                }, e.onerror = () => {
                    this.trigger("vttjserror")
                }, this.on("dispose", () => {
                    e.onload = null, e.onerror = null
                }), window.WebVTT = !0, this.el().parentNode.appendChild(e)
            } else this.ready(this.addWebVttScript_)
        }

        emulateTextTracks() {
            const i = this.textTracks(), e = this.remoteTextTracks(), t = e => i.addTrack(e.track),
                s = e => i.removeTrack(e.track),
                r = (e.on("addtrack", t), e.on("removetrack", s), this.addWebVttScript_(), () => this.trigger("texttrackchange")),
                n = () => {
                    r();
                    for (let e = 0; e < i.length; e++) {
                        var t = i[e];
                        t.removeEventListener("cuechange", r), "showing" === t.mode && t.addEventListener("cuechange", r)
                    }
                };
            n(), i.addEventListener("change", n), i.addEventListener("addtrack", n), i.addEventListener("removetrack", n), this.on("dispose", function () {
                e.off("addtrack", t), e.off("removetrack", s), i.removeEventListener("change", n), i.removeEventListener("addtrack", n), i.removeEventListener("removetrack", n);
                for (let e = 0; e < i.length; e++) i[e].removeEventListener("cuechange", r)
            })
        }

        addTextTrack(e, t, i) {
            if (e) return e = e, t = t, i = i, r = {}, n = (s = this).textTracks(), r.kind = e, t && (r.label = t), i && (r.language = i), r.tech = s, e = new a.text.TrackClass(r), n.addTrack(e), e;
            throw new Error("TextTrack kind is required but was not provided");
            var s, r, n
        }

        createRemoteTextTrack(e) {
            e = d(e, {tech: this});
            return new Mi.remoteTextEl.TrackClass(e)
        }

        addRemoteTextTrack(e = {}, t) {
            const i = this.createRemoteTextTrack(e);
            return "boolean" != typeof t && (t = !1), this.remoteTextTrackEls().addTrackElement_(i), this.remoteTextTracks().addTrack(i.track), !1 === t && this.ready(() => this.autoRemoteTextTracks_.addTrack(i.track)), i
        }

        removeRemoteTextTrack(e) {
            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
            this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
        }

        getVideoPlaybackQuality() {
            return {}
        }

        requestPictureInPicture() {
            return Promise.reject()
        }

        disablePictureInPicture() {
            return !0
        }

        setDisablePictureInPicture() {
        }

        requestVideoFrameCallback(e) {
            const t = st++;
            return !this.isReady_ || this.paused() ? (this.queuedHanders_.add(t), this.one("playing", () => {
                this.queuedHanders_.has(t) && (this.queuedHanders_.delete(t), e())
            })) : this.requestNamedAnimationFrame(t, e), t
        }

        cancelVideoFrameCallback(e) {
            this.queuedHanders_.has(e) ? this.queuedHanders_.delete(e) : this.cancelNamedAnimationFrame(e)
        }

        setPoster() {
        }

        playsinline() {
        }

        setPlaysinline() {
        }

        overrideNativeAudioTracks(e) {
        }

        overrideNativeVideoTracks(e) {
        }

        canPlayType(e) {
            return ""
        }

        static canPlayType(e) {
            return ""
        }

        static canPlaySource(e, t) {
            return _.canPlayType(e.type)
        }

        static isTech(e) {
            return e.prototype instanceof _ || e instanceof _ || e === _
        }

        static registerTech(e, t) {
            if (_.techs_ || (_.techs_ = {}), !_.isTech(t)) throw new Error(`Tech ${e} must be a Tech`);
            if (!_.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
            if (_.canPlaySource) return e = g(e), _.techs_[e] = t, _.techs_[Lt(e)] = t, "Tech" !== e && _.defaultTechOrder_.push(e), t;
            throw new Error("Techs must have a static canPlaySource method on them")
        }

        static getTech(e) {
            if (e) return _.techs_ && _.techs_[e] ? _.techs_[e] : (e = g(e), window && window.videojs && window.videojs[e] ? (l.warn(`The ${e} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`), window.videojs[e]) : void 0)
        }
    }

    a.names.forEach(function (e) {
        const t = a[e];
        _.prototype[t.getterName] = function () {
            return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
        }
    }), _.prototype.featuresVolumeControl = !0, _.prototype.featuresMuteControl = !0, _.prototype.featuresFullscreenResize = !1, _.prototype.featuresPlaybackRate = !1, _.prototype.featuresProgressEvents = !1, _.prototype.featuresSourceset = !1, _.prototype.featuresTimeupdateEvents = !1, _.prototype.featuresNativeTextTracks = !1, _.prototype.featuresVideoFrameCallback = !1, _.withSourceHandlers = function (r) {
        r.registerSourceHandler = function (e, t) {
            let i = r.sourceHandlers;
            i = i || (r.sourceHandlers = []), void 0 === t && (t = i.length), i.splice(t, 0, e)
        }, r.canPlayType = function (t) {
            var i, s = r.sourceHandlers || [];
            for (let e = 0; e < s.length; e++) if (i = s[e].canPlayType(t)) return i;
            return ""
        }, r.selectSourceHandler = function (t, i) {
            var s = r.sourceHandlers || [];
            for (let e = 0; e < s.length; e++) if (s[e].canHandleSource(t, i)) return s[e];
            return null
        }, r.canPlaySource = function (e, t) {
            var i = r.selectSourceHandler(e, t);
            return i ? i.canHandleSource(e, t) : ""
        };
        ["seekable", "seeking", "duration"].forEach(function (e) {
            const t = this[e];
            "function" == typeof t && (this[e] = function () {
                return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
            })
        }, r.prototype), r.prototype.setSource = function (e) {
            let t = r.selectSourceHandler(e, this.options_);
            t || (r.nativeSourceHandler ? t = r.nativeSourceHandler : l.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler_), t !== r.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = t.handleSource(e, this, this.options_), this.one("dispose", this.disposeSourceHandler_)
        }, r.prototype.disposeSourceHandler = function () {
            this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
        }
    }, f.registerComponent("Tech", _), _.registerTech("Tech", _), _.defaultTechOrder_ = [];
    const cs = {}, ps = {}, ms = {};

    function gs(e, t, i) {
        e.setTimeout(() => function i(s = {}, e = [], r, n, a = [], o = !1) {
            const [t, ...l] = e;
            if ("string" == typeof t) i(s, cs[t], r, n, a, o); else if (t) {
                const d = Ts(n, t);
                if (!d.setSource) return a.push(d), i(s, l, r, n, a, o);
                d.setSource(Object.assign({}, s), function (e, t) {
                    if (e) return i(s, l, r, n, a, o);
                    a.push(d), i(t, s.type === t.type ? l : cs[t.type], r, n, a, o)
                })
            } else l.length ? i(s, l, r, n, a, o) : o ? r(s, a) : i(s, cs["*"], r, n, a, !0)
        }(t, cs[t.type], i, e), 1)
    }

    function fs(e, t, i, s = null) {
        var r = "call" + g(i), r = e.reduce(bs(r), s), s = r === ms, t = s ? null : t[i](r), n = e, a = i, o = t, l = s;
        for (let e = n.length - 1; 0 <= e; e--) {
            var d = n[e];
            d[a] && d[a](l, o)
        }
        return t
    }

    const ys = {
        buffered: 1,
        currentTime: 1,
        duration: 1,
        muted: 1,
        played: 1,
        paused: 1,
        seekable: 1,
        volume: 1,
        ended: 1
    }, _s = {setCurrentTime: 1, setMuted: 1, setVolume: 1}, vs = {play: 1, pause: 1};

    function bs(i) {
        return (e, t) => e === ms ? ms : t[i] ? t[i](e) : e
    }

    function Ts(e, t) {
        var i = ps[e.id()];
        let s = null;
        if (null == i) s = t(e), ps[e.id()] = [[t, s]]; else {
            for (let e = 0; e < i.length; e++) {
                var [r, n] = i[e];
                r === t && (s = n)
            }
            null === s && (s = t(e), i.push([t, s]))
        }
        return s
    }

    function ws(e) {
        if (Array.isArray(e)) {
            let t = [];
            e.forEach(function (e) {
                e = ws(e), Array.isArray(e) ? t = t.concat(e) : K(e) && t.push(e)
            }), e = t
        } else e = "string" == typeof e && e.trim() ? [ks({src: e})] : K(e) && "string" == typeof e.src && e.src && e.src.trim() ? [ks(e)] : [];
        return e
    }

    const Ss = {
        opus: "video/ogg",
        ogv: "video/ogg",
        mp4: "video/mp4",
        mov: "video/mp4",
        m4v: "video/mp4",
        mkv: "video/x-matroska",
        m4a: "audio/mp4",
        mp3: "audio/mpeg",
        aac: "audio/aac",
        caf: "audio/x-caf",
        flac: "audio/flac",
        oga: "audio/ogg",
        wav: "audio/wav",
        m3u8: "application/x-mpegURL",
        mpd: "application/dash+xml",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        png: "image/png",
        svg: "image/svg+xml",
        webp: "image/webp"
    }, Es = function (e = "") {
        e = pi(e);
        return Ss[e.toLowerCase()] || ""
    };

    function ks(e) {
        var t;
        return e.type || (t = Es(e.src)) && (e.type = t), e
    }

    class Cs extends f {
        constructor(s, e, t) {
            if (super(s, d({createEl: !1}, e), t), e.playerOptions.sources && 0 !== e.playerOptions.sources.length) s.src(e.playerOptions.sources); else for (let t = 0, i = e.playerOptions.techOrder; t < i.length; t++) {
                var r = g(i[t]);
                let e = _.getTech(r);
                if ((e = r ? e : f.getComponent(r)) && e.isSupported()) {
                    s.loadTech_(r);
                    break
                }
            }
        }
    }

    f.registerComponent("MediaLoader", Cs);

    class xs extends f {
        constructor(e, t) {
            super(e, t), this.options_.controlText && this.controlText(this.options_.controlText), this.handleMouseOver_ = e => this.handleMouseOver(e), this.handleMouseOut_ = e => this.handleMouseOut(e), this.handleClick_ = e => this.handleClick(e), this.handleKeyDown_ = e => this.handleKeyDown(e), this.emitTapEvents(), this.enable()
        }

        createEl(e = "div", t = {}, i = {}) {
            t = Object.assign({
                className: this.buildCSSClass(),
                tabIndex: 0
            }, t), "button" === e && l.error(`Creating a ClickableComponent with an HTML element of ${e} is not supported; use a Button instead.`), i = Object.assign({role: "button"}, i), this.tabIndex_ = t.tabIndex;
            e = o(e, t, i);
            return this.player_.options_.experimentalSvgIcons || e.appendChild(o("span", {className: "vjs-icon-placeholder"}, {"aria-hidden": !0})), this.createControlTextEl(e), e
        }

        dispose() {
            this.controlTextEl_ = null, super.dispose()
        }

        createControlTextEl(e) {
            return this.controlTextEl_ = o("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
        }

        controlText(e, t = this.el()) {
            if (void 0 === e) return this.controlText_ || "Need Text";
            var i = this.localize(e);
            this.controlText_ = e, Se(this.controlTextEl_, i), this.nonIconControl || this.player_.options_.noUITitleAttributes || t.setAttribute("title", i)
        }

        buildCSSClass() {
            return "vjs-control vjs-button " + super.buildCSSClass()
        }

        enable() {
            this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_))
        }

        disable() {
            this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off("mouseover", this.handleMouseOver_), this.off("mouseout", this.handleMouseOut_), this.off(["tap", "click"], this.handleClick_), this.off("keydown", this.handleKeyDown_)
        }

        handleLanguagechange() {
            this.controlText(this.controlText_)
        }

        handleClick(e) {
            this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
        }

        handleKeyDown(e) {
            r.isEventKey(e, "Space") || r.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e)
        }
    }

    f.registerComponent("ClickableComponent", xs);

    class Is extends xs {
        constructor(e, t) {
            super(e, t), this.update(), this.update_ = e => this.update(e), e.on("posterchange", this.update_)
        }

        dispose() {
            this.player().off("posterchange", this.update_), super.dispose()
        }

        createEl() {
            return o("div", {className: "vjs-poster"})
        }

        crossOrigin(e) {
            if ("undefined" == typeof e) return this.$("img") ? this.$("img").crossOrigin : this.player_.tech_ && this.player_.tech_.isReady_ ? this.player_.crossOrigin() : this.player_.options_.crossOrigin || this.player_.options_.crossorigin || null;
            null !== e && "anonymous" !== e && "use-credentials" !== e ? this.player_.log.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`) : this.$("img") && (this.$("img").crossOrigin = e)
        }

        update(e) {
            var t = this.player().poster();
            this.setSrc(t), t ? this.show() : this.hide()
        }

        setSrc(e) {
            e ? (this.$("img") || this.el_.appendChild(o("picture", {
                className: "vjs-poster",
                tabIndex: -1
            }, {}, o("img", {
                loading: "lazy",
                crossOrigin: this.crossOrigin()
            }, {alt: ""}))), this.$("img").src = e) : this.el_.textContent = ""
        }

        handleClick(e) {
            this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(), this.player_.paused() ? Xt(this.player_.play()) : this.player_.pause())
        }
    }

    Is.prototype.crossorigin = Is.prototype.crossOrigin, f.registerComponent("PosterImage", Is);
    const As = {
        monospace: "monospace",
        sansSerif: "sans-serif",
        serif: "serif",
        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
        monospaceSerif: '"Courier New", monospace',
        proportionalSansSerif: "sans-serif",
        proportionalSerif: "serif",
        casual: '"Comic Sans MS", Impact, fantasy',
        script: '"Monotype Corsiva", cursive',
        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };

    function Ds(e, t) {
        let i;
        if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]; else {
            if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
            i = e.slice(1)
        }
        return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")"
    }

    function Ls(e, t, i) {
        try {
            e.style[t] = i
        } catch (e) {
        }
    }

    function Ps(e) {
        return e ? e + "px" : ""
    }

    class Os extends f {
        constructor(s, e, t) {
            super(s, e, t);
            const r = e => {
                this.updateDisplayOverlay(), this.updateDisplay(e)
            };
            s.on("loadstart", e => this.toggleDisplay(e)), s.on("texttrackchange", e => this.updateDisplay(e)), s.on("loadedmetadata", e => {
                this.updateDisplayOverlay(), this.preselectTrack(e)
            }), s.ready(m(this, function () {
                if (s.tech_ && s.tech_.featuresNativeTextTracks) this.hide(); else {
                    s.on("fullscreenchange", r), s.on("playerresize", r);
                    const e = window.screen.orientation || window,
                        i = window.screen.orientation ? "change" : "orientationchange";
                    e.addEventListener(i, r), s.on("dispose", () => e.removeEventListener(i, r));
                    var t = this.options_.playerOptions.tracks || [];
                    for (let e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
                    this.preselectTrack()
                }
            }))
        }

        preselectTrack() {
            var t = {captions: 1, subtitles: 1}, i = this.player_.textTracks(),
                s = this.player_.cache_.selectedLanguage;
            let r, n, a;
            for (let e = 0; e < i.length; e++) {
                var o = i[e];
                s && s.enabled && s.language && s.language === o.language && o.kind in t ? a = o.kind !== s.kind && a || o : s && !s.enabled ? (a = null, r = null, n = null) : o.default && ("descriptions" !== o.kind || r ? o.kind in t && !n && (n = o) : r = o)
            }
            a ? a.mode = "showing" : n ? n.mode = "showing" : r && (r.mode = "showing")
        }

        toggleDisplay() {
            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
        }

        createEl() {
            return super.createEl("div", {className: "vjs-text-track-display"}, {
                translate: "yes",
                "aria-live": "off",
                "aria-atomic": "true"
            })
        }

        clearDisplay() {
            "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.el_)
        }

        updateDisplay() {
            var s = this.player_.textTracks(), e = this.options_.allowMultipleShowingTracks;
            if (this.clearDisplay(), e) {
                var t = [];
                for (let e = 0; e < s.length; ++e) {
                    var i = s[e];
                    "showing" === i.mode && t.push(i)
                }
                this.updateForTrack(t)
            } else {
                let e = null, t = null, i = s.length;
                for (; i--;) {
                    var r = s[i];
                    "showing" === r.mode && ("descriptions" === r.kind ? e = r : t = r)
                }
                t ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(t)) : e && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(e))
            }
        }

        updateDisplayOverlay() {
            if (this.player_.videoHeight() && window.CSS.supports("inset-inline: 10px")) {
                var i = this.player_.currentWidth(), s = this.player_.currentHeight(), r = i / s,
                    n = this.player_.videoWidth() / this.player_.videoHeight();
                let e = 0, t = 0;
                .1 < Math.abs(r - n) && (n < r ? e = Math.round((i - s * n) / 2) : t = Math.round((s - i / n) / 2)), Ls(this.el_, "insetInline", Ps(e)), Ls(this.el_, "insetBlock", Ps(t))
            }
        }

        updateDisplayState(e) {
            var t = this.player_.textTrackSettings.getValues(), i = e.activeCues;
            let s = i.length;
            for (; s--;) {
                var r, n = i[s];
                n && (n = n.displayState, t.color && (n.firstChild.style.color = t.color), t.textOpacity && Ls(n.firstChild, "color", Ds(t.color || "#fff", t.textOpacity)), t.backgroundColor && (n.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && Ls(n.firstChild, "backgroundColor", Ds(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? Ls(n, "backgroundColor", Ds(t.windowColor, t.windowOpacity)) : n.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? n.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === t.edgeStyle ? n.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === t.edgeStyle ? n.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === t.edgeStyle && (n.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), t.fontPercent && 1 !== t.fontPercent && (r = window.parseFloat(n.style.fontSize), n.style.fontSize = r * t.fontPercent + "px", n.style.height = "auto", n.style.top = "auto"), t.fontFamily) && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? n.firstChild.style.fontVariant = "small-caps" : n.firstChild.style.fontFamily = As[t.fontFamily])
            }
        }

        updateForTrack(i) {
            if (Array.isArray(i) || (i = [i]), "function" == typeof window.WebVTT && !i.every(e => !e.activeCues)) {
                var t = [];
                for (let e = 0; e < i.length; ++e) {
                    var s = i[e];
                    for (let e = 0; e < s.activeCues.length; ++e) t.push(s.activeCues[e])
                }
                window.WebVTT.processCues(window, t, this.el_);
                for (let t = 0; t < i.length; ++t) {
                    var r = i[t];
                    for (let e = 0; e < r.activeCues.length; ++e) {
                        var n = r.activeCues[e].displayState;
                        Ce(n, "vjs-text-track-cue", "vjs-text-track-cue-" + (r.language || t)), r.language && Pe(n, "lang", r.language)
                    }
                    this.player_.textTrackSettings && this.updateDisplayState(r)
                }
            }
        }
    }

    f.registerComponent("TextTrackDisplay", Os);

    class Ns extends f {
        createEl() {
            var e = this.player_.isAudio(), e = this.localize(e ? "Audio Player" : "Video Player"),
                e = o("span", {className: "vjs-control-text", textContent: this.localize("{1} is loading.", [e])}),
                t = super.createEl("div", {className: "vjs-loading-spinner", dir: "ltr"});
            return t.appendChild(e), t
        }

        handleLanguagechange() {
            this.$(".vjs-control-text").textContent = this.localize("{1} is loading.", [this.player_.isAudio() ? "Audio Player" : "Video Player"])
        }
    }

    f.registerComponent("LoadingSpinner", Ns);

    class s extends xs {
        createEl(e, t = {}, i = {}) {
            t = o("button", t = Object.assign({className: this.buildCSSClass()}, t), i = Object.assign({type: "button"}, i));
            return this.player_.options_.experimentalSvgIcons || t.appendChild(o("span", {className: "vjs-icon-placeholder"}, {"aria-hidden": !0})), this.createControlTextEl(t), t
        }

        addChild(e, t = {}) {
            var i = this.constructor.name;
            return l.warn(`Adding an actionable (user controllable) child to a Button (${i}) is not supported; use a ClickableComponent instead.`), f.prototype.addChild.call(this, e, t)
        }

        enable() {
            super.enable(), this.el_.removeAttribute("disabled")
        }

        disable() {
            super.disable(), this.el_.setAttribute("disabled", "disabled")
        }

        handleKeyDown(e) {
            r.isEventKey(e, "Space") || r.isEventKey(e, "Enter") ? e.stopPropagation() : super.handleKeyDown(e)
        }
    }

    f.registerComponent("Button", s);

    class Rs extends s {
        constructor(e, t) {
            super(e, t), this.mouseused_ = !1, this.setIcon("play"), this.on("mousedown", e => this.handleMouseDown(e))
        }

        buildCSSClass() {
            return "vjs-big-play-button"
        }

        handleClick(e) {
            var t = this.player_.play();
            if (this.mouseused_ && "clientX" in e && "clientY" in e) Xt(t), this.player_.tech(!0) && this.player_.tech(!0).focus(); else {
                var e = this.player_.getChild("controlBar");
                const i = e && e.getChild("playToggle");
                i ? (e = () => i.focus(), Gt(t) ? t.then(e, () => {
                }) : this.setTimeout(e, 1)) : this.player_.tech(!0).focus()
            }
        }

        handleKeyDown(e) {
            this.mouseused_ = !1, super.handleKeyDown(e)
        }

        handleMouseDown(e) {
            this.mouseused_ = !0
        }
    }

    Rs.prototype.controlText_ = "Play Video", f.registerComponent("BigPlayButton", Rs);
    s;
    f.registerComponent("CloseButton", class extends s {
        constructor(e, t) {
            super(e, t), this.setIcon("cancel"), this.controlText(t && t.controlText || this.localize("Close"))
        }

        buildCSSClass() {
            return "vjs-close-button " + super.buildCSSClass()
        }

        handleClick(e) {
            this.trigger({type: "close", bubbles: !1})
        }

        handleKeyDown(e) {
            r.isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e)
        }
    });

    class Ms extends s {
        constructor(e, t = {}) {
            super(e, t), t.replay = void 0 === t.replay || t.replay, this.setIcon("play"), this.on(e, "play", e => this.handlePlay(e)), this.on(e, "pause", e => this.handlePause(e)), t.replay && this.on(e, "ended", e => this.handleEnded(e))
        }

        buildCSSClass() {
            return "vjs-play-control " + super.buildCSSClass()
        }

        handleClick(e) {
            this.player_.paused() ? Xt(this.player_.play()) : this.player_.pause()
        }

        handleSeeked(e) {
            this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
        }

        handlePlay(e) {
            this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.setIcon("pause"), this.controlText("Pause")
        }

        handlePause(e) {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.setIcon("play"), this.controlText("Play")
        }

        handleEnded(e) {
            this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.setIcon("replay"), this.controlText("Replay"), this.one(this.player_, "seeked", e => this.handleSeeked(e))
        }
    }

    Ms.prototype.controlText_ = "Play", f.registerComponent("PlayToggle", Ms);

    class Us extends f {
        constructor(e, t) {
            super(e, t), this.on(e, ["timeupdate", "ended"], e => this.updateContent(e)), this.updateTextNode_()
        }

        createEl() {
            var e = this.buildCSSClass(), t = super.createEl("div", {className: e + " vjs-time-control vjs-control"}),
                i = o("span", {
                    className: "vjs-control-text",
                    textContent: this.localize(this.labelText_) + "Â "
                }, {role: "presentation"});
            return t.appendChild(i), this.contentEl_ = o("span", {className: e + "-display"}, {role: "presentation"}), t.appendChild(this.contentEl_), t
        }

        dispose() {
            this.contentEl_ = null, this.textNode_ = null, super.dispose()
        }

        updateTextNode_(e = 0) {
            e = Vt(e), this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
                if (this.contentEl_) {
                    let e = this.textNode_;
                    e && this.contentEl_.firstChild !== e && (e = null, l.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")), this.textNode_ = document.createTextNode(this.formattedTime_), this.textNode_ && (e ? this.contentEl_.replaceChild(this.textNode_, e) : this.contentEl_.appendChild(this.textNode_))
                }
            }))
        }

        updateContent(e) {
        }
    }

    Us.prototype.labelText_ = "Time", Us.prototype.controlText_ = "Time", f.registerComponent("TimeDisplay", Us);

    class Bs extends Us {
        buildCSSClass() {
            return "vjs-current-time"
        }

        updateContent(e) {
            let t;
            t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), this.updateTextNode_(t)
        }
    }

    Bs.prototype.labelText_ = "Current Time", Bs.prototype.controlText_ = "Current Time", f.registerComponent("CurrentTimeDisplay", Bs);

    class Fs extends Us {
        constructor(e, t) {
            super(e, t);
            t = e => this.updateContent(e);
            this.on(e, "durationchange", t), this.on(e, "loadstart", t), this.on(e, "loadedmetadata", t)
        }

        buildCSSClass() {
            return "vjs-duration"
        }

        updateContent(e) {
            var t = this.player_.duration();
            this.updateTextNode_(t)
        }
    }

    Fs.prototype.labelText_ = "Duration", Fs.prototype.controlText_ = "Duration", f.registerComponent("DurationDisplay", Fs);

    class js extends f {
        createEl() {
            var e = super.createEl("div", {className: "vjs-time-control vjs-time-divider"}, {"aria-hidden": !0}),
                t = super.createEl("div"), i = super.createEl("span", {textContent: "/"});
            return t.appendChild(i), e.appendChild(t), e
        }
    }

    f.registerComponent("TimeDivider", js);

    class qs extends Us {
        constructor(e, t) {
            super(e, t), this.on(e, "durationchange", e => this.updateContent(e))
        }

        buildCSSClass() {
            return "vjs-remaining-time"
        }

        createEl() {
            var e = super.createEl();
            return !1 !== this.options_.displayNegative && e.insertBefore(o("span", {}, {"aria-hidden": !0}, "-"), this.contentEl_), e
        }

        updateContent(e) {
            if ("number" == typeof this.player_.duration()) {
                let e;
                e = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime(), this.updateTextNode_(e)
            }
        }
    }

    qs.prototype.labelText_ = "Remaining Time", qs.prototype.controlText_ = "Remaining Time", f.registerComponent("RemainingTimeDisplay", qs);

    class Hs extends f {
        constructor(e, t) {
            super(e, t), this.updateShowing(), this.on(this.player(), "durationchange", e => this.updateShowing(e))
        }

        createEl() {
            var e = super.createEl("div", {className: "vjs-live-control vjs-control"});
            return this.contentEl_ = o("div", {className: "vjs-live-display"}, {"aria-live": "off"}), this.contentEl_.appendChild(o("span", {
                className: "vjs-control-text",
                textContent: this.localize("Stream Type") + "Â "
            })), this.contentEl_.appendChild(document.createTextNode(this.localize("LIVE"))), e.appendChild(this.contentEl_), e
        }

        dispose() {
            this.contentEl_ = null, super.dispose()
        }

        updateShowing(e) {
            this.player().duration() === 1 / 0 ? this.show() : this.hide()
        }
    }

    f.registerComponent("LiveDisplay", Hs);

    class Vs extends s {
        constructor(e, t) {
            super(e, t), this.updateLiveEdgeStatus(), this.player_.liveTracker && (this.updateLiveEdgeStatusHandler_ = e => this.updateLiveEdgeStatus(e), this.on(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_))
        }

        createEl() {
            var e = super.createEl("button", {className: "vjs-seek-to-live-control vjs-control"});
            return this.setIcon("circle", e), this.textEl_ = o("span", {
                className: "vjs-seek-to-live-text",
                textContent: this.localize("LIVE")
            }, {"aria-hidden": "true"}), e.appendChild(this.textEl_), e
        }

        updateLiveEdgeStatus() {
            !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
        }

        handleClick() {
            this.player_.liveTracker.seekToLiveEdge()
        }

        dispose() {
            this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_), this.textEl_ = null, super.dispose()
        }
    }

    function zs(e, t, i) {
        return e = Number(e), Math.min(i, Math.max(t, isNaN(e) ? t : e))
    }

    Vs.prototype.controlText_ = "Seek to live, currently playing live", f.registerComponent("SeekToLive", Vs);
    gi = Object.freeze({__proto__: null, clamp: zs});

    class $s extends f {
        constructor(e, t) {
            super(e, t), this.handleMouseDown_ = e => this.handleMouseDown(e), this.handleMouseUp_ = e => this.handleMouseUp(e), this.handleKeyDown_ = e => this.handleKeyDown(e), this.handleClick_ = e => this.handleClick(e), this.handleMouseMove_ = e => this.handleMouseMove(e), this.update_ = e => this.update(e), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.enable()
        }

        enabled() {
            return this.enabled_
        }

        enable() {
            this.enabled() || (this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
        }

        disable() {
            var e;
            this.enabled() && (e = this.bar.el_.ownerDocument, this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1)
        }

        createEl(e, t = {}, i = {}) {
            return t.className = t.className + " vjs-slider", t = Object.assign({tabIndex: 0}, t), i = Object.assign({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100
            }, i), super.createEl(e, t, i)
        }

        handleMouseDown(e) {
            var t = this.bar.el_.ownerDocument;
            "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || oe || e.preventDefault(), Ne(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove_), this.on(t, "mouseup", this.handleMouseUp_), this.on(t, "touchmove", this.handleMouseMove_), this.on(t, "touchend", this.handleMouseUp_), this.handleMouseMove(e, !0)
        }

        handleMouseMove(e) {
        }

        handleMouseUp(e) {
            var t = this.bar.el_.ownerDocument;
            Re(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove_), this.off(t, "mouseup", this.handleMouseUp_), this.off(t, "touchmove", this.handleMouseMove_), this.off(t, "touchend", this.handleMouseUp_), this.update()
        }

        update() {
            if (this.el_ && this.bar) {
                const t = this.getProgress();
                return t !== this.progress_ && (this.progress_ = t, this.requestNamedAnimationFrame("Slider#update", () => {
                    var e = this.vertical() ? "height" : "width";
                    this.bar.el().style[e] = (100 * t).toFixed(2) + "%"
                })), t
            }
        }

        getProgress() {
            return Number(zs(this.getPercent(), 0, 1).toFixed(4))
        }

        calculateDistance(e) {
            e = Be(this.el_, e);
            return this.vertical() ? e.y : e.x
        }

        handleKeyDown(e) {
            r.isEventKey(e, "Left") || r.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : r.isEventKey(e, "Right") || r.isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : super.handleKeyDown(e)
        }

        handleClick(e) {
            e.stopPropagation(), e.preventDefault()
        }

        vertical(e) {
            if (void 0 === e) return this.vertical_ || !1;
            this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
        }
    }

    f.registerComponent("Slider", $s);
    const Ws = (e, t) => zs(e / t * 100, 0, 100).toFixed(2) + "%";

    class Gs extends f {
        constructor(e, t) {
            super(e, t), this.partEls_ = [], this.on(e, "progress", e => this.update(e))
        }

        createEl() {
            var e = super.createEl("div", {className: "vjs-load-progress"}),
                t = o("span", {className: "vjs-control-text"}), i = o("span", {textContent: this.localize("Loaded")}),
                s = document.createTextNode(": ");
            return this.percentageEl_ = o("span", {
                className: "vjs-control-text-loaded-percentage",
                textContent: "0%"
            }), e.appendChild(t), t.appendChild(i), t.appendChild(s), t.appendChild(this.percentageEl_), e
        }

        dispose() {
            this.partEls_ = null, this.percentageEl_ = null, super.dispose()
        }

        update(e) {
            this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
                var e = this.player_.liveTracker, i = this.player_.buffered(),
                    e = e && e.isLive() ? e.seekableEnd() : this.player_.duration(), s = this.player_.bufferedEnd(),
                    r = this.partEls_, e = Ws(s, e);
                this.percent_ !== e && (this.el_.style.width = e, Se(this.percentageEl_, e), this.percent_ = e);
                for (let t = 0; t < i.length; t++) {
                    var n = i.start(t), a = i.end(t);
                    let e = r[t];
                    e || (e = this.el_.appendChild(o()), r[t] = e), e.dataset.start === n && e.dataset.end === a || (e.dataset.start = n, e.dataset.end = a, e.style.left = Ws(n, s), e.style.width = Ws(a - n, s))
                }
                for (let e = r.length; e > i.length; e--) this.el_.removeChild(r[e - 1]);
                r.length = i.length
            })
        }
    }

    f.registerComponent("LoadProgressBar", Gs);

    class Xs extends f {
        constructor(e, t) {
            super(e, t), this.update = mt(m(this, this.update), 30)
        }

        createEl() {
            return super.createEl("div", {className: "vjs-time-tooltip"}, {"aria-hidden": "true"})
        }

        update(t, i, s) {
            var r = Ue(this.el_), n = Me(this.player_.el()), i = t.width * i;
            if (n && r) {
                var a = t.left - n.left + i, i = t.width - i + (n.right - t.right);
                let e = r.width / 2;
                a < e ? e += e - a : i < e && (e = i), e < 0 ? e = 0 : e > r.width && (e = r.width), e = Math.round(e), this.el_.style.right = `-${e}px`, this.write(s)
            }
        }

        write(e) {
            Se(this.el_, e)
        }

        updateTime(r, n, a, o) {
            this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
                let e;
                var t, i, s = this.player_.duration();
                e = this.player_.liveTracker && this.player_.liveTracker.isLive() ? ((i = (t = this.player_.liveTracker.liveWindow()) - n * t) < 1 ? "" : "-") + Vt(i, t) : Vt(a, s), this.update(r, n, e), o && o()
            })
        }
    }

    f.registerComponent("TimeTooltip", Xs);

    class Ks extends f {
        constructor(e, t) {
            super(e, t), this.setIcon("circle"), this.update = mt(m(this, this.update), 30)
        }

        createEl() {
            return super.createEl("div", {className: "vjs-play-progress vjs-slider-bar"}, {"aria-hidden": "true"})
        }

        update(e, t) {
            var i, s = this.getChild("timeTooltip");
            s && (i = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), s.updateTime(e, t, i))
        }
    }

    Ks.prototype.options_ = {children: []}, c || ie || Ks.prototype.options_.children.push("timeTooltip"), f.registerComponent("PlayProgressBar", Ks);

    class Ys extends f {
        constructor(e, t) {
            super(e, t), this.update = mt(m(this, this.update), 30)
        }

        createEl() {
            return super.createEl("div", {className: "vjs-mouse-display"})
        }

        update(e, t) {
            var i = t * this.player_.duration();
            this.getChild("timeTooltip").updateTime(e, t, i, () => {
                this.el_.style.left = e.width * t + "px"
            })
        }
    }

    Ys.prototype.options_ = {children: ["timeTooltip"]}, f.registerComponent("MouseTimeDisplay", Ys);

    class Qs extends $s {
        constructor(e, t) {
            super(e, t), this.setEventHandlers_()
        }

        setEventHandlers_() {
            this.update_ = m(this, this.update), this.update = mt(this.update_, 30), this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.enableIntervalHandler_ = e => this.enableInterval_(e), this.disableIntervalHandler_ = e => this.disableInterval_(e), this.on(this.player_, ["playing"], this.enableIntervalHandler_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in document && "visibilityState" in document && this.on(document, "visibilitychange", this.toggleVisibility_)
        }

        toggleVisibility_(e) {
            "hidden" === document.visibilityState ? (this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e)) : (this.player_.ended() || this.player_.paused() || this.enableInterval_(), this.update())
        }

        enableInterval_() {
            this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30))
        }

        disableInterval_(e) {
            this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null)
        }

        createEl() {
            return super.createEl("div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
        }

        update(e) {
            if ("hidden" !== document.visibilityState) {
                const s = super.update();
                return this.requestNamedAnimationFrame("SeekBar#update", () => {
                    var e = this.player_.ended() ? this.player_.duration() : this.getCurrentTime_(),
                        t = this.player_.liveTracker;
                    let i = this.player_.duration();
                    t && t.isLive() && (i = this.player_.liveTracker.liveCurrentTime()), this.percent_ !== s && (this.el_.setAttribute("aria-valuenow", (100 * s).toFixed(2)), this.percent_ = s), this.currentTime_ === e && this.duration_ === i || (this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Vt(e, i), Vt(i, i)], "{1} of {2}")), this.currentTime_ = e, this.duration_ = i), this.bar && this.bar.update(Me(this.el()), this.getProgress())
                }), s
            }
        }

        userSeek_(e) {
            this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(), this.player_.currentTime(e)
        }

        getCurrentTime_() {
            return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
        }

        getPercent() {
            var e = this.getCurrentTime_();
            let t;
            var i = this.player_.liveTracker;
            return i && i.isLive() ? (t = (e - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (t = 1)) : t = e / this.player_.duration(), t
        }

        handleMouseDown(e) {
            ze(e) && (e.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), super.handleMouseDown(e))
        }

        handleMouseMove(t, i = !1) {
            if (ze(t) && !isNaN(this.player_.duration())) {
                i || this.player_.scrubbing() || this.player_.scrubbing(!0);
                let e;
                i = this.calculateDistance(t), t = this.player_.liveTracker;
                if (t && t.isLive()) {
                    if (.99 <= i) return void t.seekToLiveEdge();
                    var s = t.seekableStart(), r = t.liveCurrentTime();
                    if ((e = (e = (e = s + i * t.liveWindow()) >= r ? r : e) <= s ? s + .1 : e) === 1 / 0) return
                } else (e = i * this.player_.duration()) === this.player_.duration() && (e -= .1);
                this.userSeek_(e)
            }
        }

        enable() {
            super.enable();
            var e = this.getChild("mouseTimeDisplay");
            e && e.show()
        }

        disable() {
            super.disable();
            var e = this.getChild("mouseTimeDisplay");
            e && e.hide()
        }

        handleMouseUp(e) {
            super.handleMouseUp(e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            }), this.videoWasPlaying ? Xt(this.player_.play()) : this.update_()
        }

        stepForward() {
            this.userSeek_(this.player_.currentTime() + 5)
        }

        stepBack() {
            this.userSeek_(this.player_.currentTime() - 5)
        }

        handleAction(e) {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }

        handleKeyDown(e) {
            var t, i = this.player_.liveTracker;
            r.isEventKey(e, "Space") || r.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.handleAction(e)) : r.isEventKey(e, "Home") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(0)) : r.isEventKey(e, "End") ? (e.preventDefault(), e.stopPropagation(), i && i.isLive() ? this.userSeek_(i.liveCurrentTime()) : this.userSeek_(this.player_.duration())) : /^[0-9]$/.test(r(e)) ? (e.preventDefault(), e.stopPropagation(), t = 10 * (r.codes[r(e)] - r.codes[0]) / 100, i && i.isLive() ? this.userSeek_(i.seekableStart() + i.liveWindow() * t) : this.userSeek_(this.player_.duration() * t)) : r.isEventKey(e, "PgDn") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() - 60)) : r.isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() + 60)) : super.handleKeyDown(e)
        }

        dispose() {
            this.disableInterval_(), this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update), this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update), this.off(this.player_, ["playing"], this.enableIntervalHandler_), this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_), "hidden" in document && "visibilityState" in document && this.off(document, "visibilitychange", this.toggleVisibility_), super.dispose()
        }
    }

    Qs.prototype.options_ = {
        children: ["loadProgressBar", "playProgressBar"],
        barName: "playProgressBar"
    }, c || ie || Qs.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), f.registerComponent("SeekBar", Qs);

    class Js extends f {
        constructor(e, t) {
            super(e, t), this.handleMouseMove = mt(m(this, this.handleMouseMove), 30), this.throttledHandleMouseSeek = mt(m(this, this.handleMouseSeek), 30), this.handleMouseUpHandler_ = e => this.handleMouseUp(e), this.handleMouseDownHandler_ = e => this.handleMouseDown(e), this.enable()
        }

        createEl() {
            return super.createEl("div", {className: "vjs-progress-control vjs-control"})
        }

        handleMouseMove(e) {
            var t, i, s, r, n = this.getChild("seekBar");
            n && (t = n.getChild("playProgressBar"), i = n.getChild("mouseTimeDisplay"), t || i) && (s = Ue(r = n.el()), r = zs(r = Be(r, e).x, 0, 1), i && i.update(s, r), t) && t.update(s, n.getProgress())
        }

        handleMouseSeek(e) {
            var t = this.getChild("seekBar");
            t && t.handleMouseMove(e)
        }

        enabled() {
            return this.enabled_
        }

        disable() {
            var e;
            this.children().forEach(e => e.disable && e.disable()), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_ = !1, this.player_.scrubbing()) && (e = this.getChild("seekBar"), this.player_.scrubbing(!1), e.videoWasPlaying) && Xt(this.player_.play())
        }

        enable() {
            this.children().forEach(e => e.enable && e.enable()), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
        }

        removeListenersAddedOnMousedownAndTouchstart() {
            var e = this.el_.ownerDocument;
            this.off(e, "mousemove", this.throttledHandleMouseSeek), this.off(e, "touchmove", this.throttledHandleMouseSeek), this.off(e, "mouseup", this.handleMouseUpHandler_), this.off(e, "touchend", this.handleMouseUpHandler_)
        }

        handleMouseDown(e) {
            var t = this.el_.ownerDocument, i = this.getChild("seekBar");
            i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_)
        }

        handleMouseUp(e) {
            var t = this.getChild("seekBar");
            t && t.handleMouseUp(e), this.removeListenersAddedOnMousedownAndTouchstart()
        }
    }

    Js.prototype.options_ = {children: ["seekBar"]}, f.registerComponent("ProgressControl", Js);

    class Zs extends s {
        constructor(e, t) {
            super(e, t), this.setIcon("picture-in-picture-enter"), this.on(e, ["enterpictureinpicture", "leavepictureinpicture"], e => this.handlePictureInPictureChange(e)), this.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], e => this.handlePictureInPictureEnabledChange(e)), this.on(e, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], () => this.handlePictureInPictureAudioModeChange()), this.disable()
        }

        buildCSSClass() {
            return "vjs-picture-in-picture-control vjs-hidden " + super.buildCSSClass()
        }

        handlePictureInPictureAudioModeChange() {
            "audio" === this.player_.currentType().substring(0, 5) || this.player_.audioPosterMode() || this.player_.audioOnlyMode() ? (this.player_.isInPictureInPicture() && this.player_.exitPictureInPicture(), this.hide()) : this.show()
        }

        handlePictureInPictureEnabledChange() {
            document.pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture() || this.player_.options_.enableDocumentPictureInPicture && "documentPictureInPicture" in window ? this.enable() : this.disable()
        }

        handlePictureInPictureChange(e) {
            this.player_.isInPictureInPicture() ? (this.setIcon("picture-in-picture-exit"), this.controlText("Exit Picture-in-Picture")) : (this.setIcon("picture-in-picture-enter"), this.controlText("Picture-in-Picture")), this.handlePictureInPictureEnabledChange()
        }

        handleClick(e) {
            this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
        }

        show() {
            "function" == typeof document.exitPictureInPicture && super.show()
        }
    }

    Zs.prototype.controlText_ = "Picture-in-Picture", f.registerComponent("PictureInPictureToggle", Zs);

    class er extends s {
        constructor(e, t) {
            super(e, t), this.setIcon("fullscreen-enter"), this.on(e, "fullscreenchange", e => this.handleFullscreenChange(e)), !1 === document[e.fsApi_.fullscreenEnabled] && this.disable()
        }

        buildCSSClass() {
            return "vjs-fullscreen-control " + super.buildCSSClass()
        }

        handleFullscreenChange(e) {
            this.player_.isFullscreen() ? (this.controlText("Exit Fullscreen"), this.setIcon("fullscreen-exit")) : (this.controlText("Fullscreen"), this.setIcon("fullscreen-enter"))
        }

        handleClick(e) {
            this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
        }
    }

    er.prototype.controlText_ = "Fullscreen", f.registerComponent("FullscreenToggle", er);

    class tr extends f {
        createEl() {
            var e = super.createEl("div", {className: "vjs-volume-level"});
            return this.setIcon("circle", e), e.appendChild(super.createEl("span", {className: "vjs-control-text"})), e
        }
    }

    f.registerComponent("VolumeLevel", tr);

    class ir extends f {
        constructor(e, t) {
            super(e, t), this.update = mt(m(this, this.update), 30)
        }

        createEl() {
            return super.createEl("div", {className: "vjs-volume-tooltip"}, {"aria-hidden": "true"})
        }

        update(t, i, s, e) {
            if (!s) {
                var s = Me(this.el_), r = Me(this.player_.el()), i = t.width * i;
                if (!r || !s) return;
                var n = t.left - r.left + i, i = t.width - i + (r.right - t.right);
                let e = s.width / 2;
                n < e ? e += e - n : i < e && (e = i), e < 0 ? e = 0 : e > s.width && (e = s.width), this.el_.style.right = `-${e}px`
            }
            this.write(e + "%")
        }

        write(e) {
            Se(this.el_, e)
        }

        updateVolume(e, t, i, s, r) {
            this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
                this.update(e, t, i, s.toFixed(0)), r && r()
            })
        }
    }

    f.registerComponent("VolumeLevelTooltip", ir);

    class sr extends f {
        constructor(e, t) {
            super(e, t), this.update = mt(m(this, this.update), 30)
        }

        createEl() {
            return super.createEl("div", {className: "vjs-mouse-display"})
        }

        update(e, t, i) {
            var s = 100 * t;
            this.getChild("volumeLevelTooltip").updateVolume(e, t, i, s, () => {
                i ? this.el_.style.bottom = e.height * t + "px" : this.el_.style.left = e.width * t + "px"
            })
        }
    }

    sr.prototype.options_ = {children: ["volumeLevelTooltip"]}, f.registerComponent("MouseVolumeLevelDisplay", sr);

    class rr extends $s {
        constructor(e, t) {
            super(e, t), this.on("slideractive", e => this.updateLastVolume_(e)), this.on(e, "volumechange", e => this.updateARIAAttributes(e)), e.ready(() => this.updateARIAAttributes())
        }

        createEl() {
            return super.createEl("div", {className: "vjs-volume-bar vjs-slider-bar"}, {
                "aria-label": this.localize("Volume Level"),
                "aria-live": "polite"
            })
        }

        handleMouseDown(e) {
            ze(e) && super.handleMouseDown(e)
        }

        handleMouseMove(e) {
            var t, i, s, r = this.getChild("mouseVolumeLevelDisplay");
            r && (t = Me(s = this.el()), i = this.vertical(), s = Be(s, e), s = zs(s = i ? s.y : s.x, 0, 1), r.update(t, s, i)), ze(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
        }

        checkMuted() {
            this.player_.muted() && this.player_.muted(!1)
        }

        getPercent() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }

        stepForward() {
            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
        }

        stepBack() {
            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
        }

        updateARIAAttributes(e) {
            var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
            this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
        }

        volumeAsPercentage_() {
            return Math.round(100 * this.player_.volume())
        }

        updateLastVolume_() {
            const e = this.player_.volume();
            this.one("sliderinactive", () => {
                0 === this.player_.volume() && this.player_.lastVolume_(e)
            })
        }
    }

    rr.prototype.options_ = {
        children: ["volumeLevel"],
        barName: "volumeLevel"
    }, c || ie || rr.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay"), rr.prototype.playerEvent = "volumechange", f.registerComponent("VolumeBar", rr);

    class nr extends f {
        constructor(e, t = {}) {
            var i, s;
            t.vertical = t.vertical || !1, "undefined" != typeof t.volumeBar && !Y(t.volumeBar) || (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical), super(e, t), i = this, (s = e).tech_ && !s.tech_.featuresVolumeControl && i.addClass("vjs-hidden"), i.on(s, "loadstart", function () {
                s.tech_.featuresVolumeControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden")
            }), this.throttledHandleMouseMove = mt(m(this, this.handleMouseMove), 30), this.handleMouseUpHandler_ = e => this.handleMouseUp(e), this.on("mousedown", e => this.handleMouseDown(e)), this.on("touchstart", e => this.handleMouseDown(e)), this.on("mousemove", e => this.handleMouseMove(e)), this.on(this.volumeBar, ["focus", "slideractive"], () => {
                this.volumeBar.addClass("vjs-slider-active"), this.addClass("vjs-slider-active"), this.trigger("slideractive")
            }), this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
                this.volumeBar.removeClass("vjs-slider-active"), this.removeClass("vjs-slider-active"), this.trigger("sliderinactive")
            })
        }

        createEl() {
            let e = "vjs-volume-horizontal";
            return this.options_.vertical && (e = "vjs-volume-vertical"), super.createEl("div", {className: "vjs-volume-control vjs-control " + e})
        }

        handleMouseDown(e) {
            var t = this.el_.ownerDocument;
            this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUpHandler_), this.on(t, "touchend", this.handleMouseUpHandler_)
        }

        handleMouseUp(e) {
            var t = this.el_.ownerDocument;
            this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUpHandler_), this.off(t, "touchend", this.handleMouseUpHandler_)
        }

        handleMouseMove(e) {
            this.volumeBar.handleMouseMove(e)
        }
    }

    nr.prototype.options_ = {children: ["volumeBar"]}, f.registerComponent("VolumeControl", nr);

    class ar extends s {
        constructor(e, t) {
            var i, s;
            super(e, t), i = this, (s = e).tech_ && !s.tech_.featuresMuteControl && i.addClass("vjs-hidden"), i.on(s, "loadstart", function () {
                s.tech_.featuresMuteControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden")
            }), this.on(e, ["loadstart", "volumechange"], e => this.update(e))
        }

        buildCSSClass() {
            return "vjs-mute-control " + super.buildCSSClass()
        }

        handleClick(e) {
            var t = this.player_.volume(), i = this.player_.lastVolume_();
            0 === t ? (this.player_.volume(i < .1 ? .1 : i), this.player_.muted(!1)) : this.player_.muted(!this.player_.muted())
        }

        update(e) {
            this.updateIcon_(), this.updateControlText_()
        }

        updateIcon_() {
            var e = this.player_.volume();
            let t = 3;
            this.setIcon("volume-high"), c && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? (this.setIcon("volume-mute"), t = 0) : e < .33 ? (this.setIcon("volume-low"), t = 1) : e < .67 && (this.setIcon("volume-medium"), t = 2), xe(this.el_, [0, 1, 2, 3].reduce((e, t) => e + `${t ? " " : ""}vjs-vol-` + t, "")), Ce(this.el_, "vjs-vol-" + t)
        }

        updateControlText_() {
            var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
            this.controlText() !== e && this.controlText(e)
        }
    }

    ar.prototype.controlText_ = "Mute", f.registerComponent("MuteToggle", ar);

    class or extends f {
        constructor(e, t = {}) {
            "undefined" != typeof t.inline ? t.inline = t.inline : t.inline = !0, "undefined" != typeof t.volumeControl && !Y(t.volumeControl) || (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline), super(e, t), this.handleKeyPressHandler_ = e => this.handleKeyPress(e), this.on(e, ["loadstart"], e => this.volumePanelState_(e)), this.on(this.muteToggle, "keyup", e => this.handleKeyPress(e)), this.on(this.volumeControl, "keyup", e => this.handleVolumeControlKeyUp(e)), this.on("keydown", e => this.handleKeyPress(e)), this.on("mouseover", e => this.handleMouseOver(e)), this.on("mouseout", e => this.handleMouseOut(e)), this.on(this.volumeControl, ["slideractive"], this.sliderActive_), this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_)
        }

        sliderActive_() {
            this.addClass("vjs-slider-active")
        }

        sliderInactive_() {
            this.removeClass("vjs-slider-active")
        }

        volumePanelState_() {
            this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
        }

        createEl() {
            let e = "vjs-volume-panel-horizontal";
            return this.options_.inline || (e = "vjs-volume-panel-vertical"), super.createEl("div", {className: "vjs-volume-panel vjs-control " + e})
        }

        dispose() {
            this.handleMouseOut(), super.dispose()
        }

        handleVolumeControlKeyUp(e) {
            r.isEventKey(e, "Esc") && this.muteToggle.focus()
        }

        handleMouseOver(e) {
            this.addClass("vjs-hover"), dt(document, "keyup", this.handleKeyPressHandler_)
        }

        handleMouseOut(e) {
            this.removeClass("vjs-hover"), p(document, "keyup", this.handleKeyPressHandler_)
        }

        handleKeyPress(e) {
            r.isEventKey(e, "Esc") && this.handleMouseOut()
        }
    }

    or.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, f.registerComponent("VolumePanel", or);
    s;
    f.registerComponent("SkipForward", class extends s {
        constructor(e, t) {
            super(e, t), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipForwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon("forward-" + this.skipTime), this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime])), this.show()) : this.hide()
        }

        getSkipForwardTime() {
            var e = this.options_.playerOptions;
            return e.controlBar && e.controlBar.skipButtons && e.controlBar.skipButtons.forward
        }

        buildCSSClass() {
            return `vjs-skip-forward-${this.getSkipForwardTime()} ` + super.buildCSSClass()
        }

        handleClick(e) {
            if (!isNaN(this.player_.duration())) {
                var t = this.player_.currentTime(), i = this.player_.liveTracker,
                    i = i && i.isLive() ? i.seekableEnd() : this.player_.duration();
                let e;
                e = t + this.skipTime <= i ? t + this.skipTime : i, this.player_.currentTime(e)
            }
        }

        handleLanguagechange() {
            this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime]))
        }
    });

    class lr extends s {
        constructor(e, t) {
            super(e, t), this.validOptions = [5, 10, 30], this.skipTime = this.getSkipBackwardTime(), this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon("replay-" + this.skipTime), this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime])), this.show()) : this.hide()
        }

        getSkipBackwardTime() {
            var e = this.options_.playerOptions;
            return e.controlBar && e.controlBar.skipButtons && e.controlBar.skipButtons.backward
        }

        buildCSSClass() {
            return `vjs-skip-backward-${this.getSkipBackwardTime()} ` + super.buildCSSClass()
        }

        handleClick(e) {
            var t = this.player_.currentTime(), i = this.player_.liveTracker, i = i && i.isLive() && i.seekableStart();
            let s;
            s = i && t - this.skipTime <= i ? i : t >= this.skipTime ? t - this.skipTime : 0, this.player_.currentTime(s)
        }

        handleLanguagechange() {
            this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime]))
        }
    }

    lr.prototype.controlText_ = "Skip Backward", f.registerComponent("SkipBackward", lr);

    class dr extends f {
        constructor(e, t) {
            super(e, t), t && (this.menuButton_ = t.menuButton), this.focusedChild_ = -1, this.on("keydown", e => this.handleKeyDown(e)), this.boundHandleBlur_ = e => this.handleBlur(e), this.boundHandleTapClick_ = e => this.handleTapClick(e)
        }

        addEventListenerForItem(e) {
            e instanceof f && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
        }

        removeEventListenerForItem(e) {
            e instanceof f && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
        }

        removeChild(e) {
            "string" == typeof e && (e = this.getChild(e)), this.removeEventListenerForItem(e), super.removeChild(e)
        }

        addItem(e) {
            e = this.addChild(e);
            e && this.addEventListenerForItem(e)
        }

        createEl() {
            var e = this.options_.contentElType || "ul",
                e = (this.contentEl_ = o(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu"), super.createEl("div", {
                    append: this.contentEl_,
                    className: "vjs-menu"
                }));
            return e.appendChild(this.contentEl_), dt(e, "click", function (e) {
                e.preventDefault(), e.stopImmediatePropagation()
            }), e
        }

        dispose() {
            this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, super.dispose()
        }

        handleBlur(e) {
            const t = e.relatedTarget || document.activeElement;
            this.children().some(e => e.el() === t) || (e = this.menuButton_) && e.buttonPressed_ && t !== e.el().firstChild && e.unpressButton()
        }

        handleTapClick(t) {
            var e;
            this.menuButton_ && (this.menuButton_.unpressButton(), e = this.children(), Array.isArray(e)) && (e = e.filter(e => e.el() === t.target)[0]) && "CaptionSettingsMenuItem" !== e.name() && this.menuButton_.focus()
        }

        handleKeyDown(e) {
            r.isEventKey(e, "Left") || r.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (r.isEventKey(e, "Right") || r.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
        }

        stepForward() {
            let e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
        }

        stepBack() {
            let e = 0;
            void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
        }

        focus(e = 0) {
            var t = this.children().slice();
            t.length && t[0].hasClass("vjs-menu-title") && t.shift(), 0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus())
        }
    }

    f.registerComponent("Menu", dr);

    class hr extends f {
        constructor(e, t = {}) {
            super(e, t), this.menuButton_ = new s(e, t), this.menuButton_.controlText(this.controlText_), this.menuButton_.el_.setAttribute("aria-haspopup", "true");
            e = s.prototype.buildCSSClass(), this.menuButton_.el_.className = this.buildCSSClass() + " " + e, this.menuButton_.removeClass("vjs-control"), this.addChild(this.menuButton_), this.update(), this.enabled_ = !0, t = e => this.handleClick(e);
            this.handleMenuKeyUp_ = e => this.handleMenuKeyUp(e), this.on(this.menuButton_, "tap", t), this.on(this.menuButton_, "click", t), this.on(this.menuButton_, "keydown", e => this.handleKeyDown(e)), this.on(this.menuButton_, "mouseenter", () => {
                this.addClass("vjs-hover"), this.menu.show(), dt(document, "keyup", this.handleMenuKeyUp_)
            }), this.on("mouseleave", e => this.handleMouseLeave(e)), this.on("keydown", e => this.handleSubmenuKeyDown(e))
        }

        update() {
            var e = this.createMenu();
            this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute("role")) : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"))
        }

        createMenu() {
            var e, t = new dr(this.player_, {menuButton: this});
            if (this.hideThreshold_ = 0, this.options_.title && (e = o("li", {
                className: "vjs-menu-title",
                textContent: g(this.options_.title),
                tabIndex: -1
            }), e = new f(this.player_, {el: e}), t.addItem(e)), this.items = this.createItems(), this.items) for (let e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
            return t
        }

        createItems() {
        }

        createEl() {
            return super.createEl("div", {className: this.buildWrapperCSSClass()}, {})
        }

        setIcon(e) {
            super.setIcon(e, this.menuButton_.el_)
        }

        buildWrapperCSSClass() {
            let e = "vjs-menu-button";
            !0 === this.options_.inline ? e += "-inline" : e += "-popup";
            var t = s.prototype.buildCSSClass();
            return `vjs-menu-button ${e} ${t} ` + super.buildCSSClass()
        }

        buildCSSClass() {
            let e = "vjs-menu-button";
            return !0 === this.options_.inline ? e += "-inline" : e += "-popup", `vjs-menu-button ${e} ` + super.buildCSSClass()
        }

        controlText(e, t = this.menuButton_.el()) {
            return this.menuButton_.controlText(e, t)
        }

        dispose() {
            this.handleMouseLeave(), super.dispose()
        }

        handleClick(e) {
            this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }

        handleMouseLeave(e) {
            this.removeClass("vjs-hover"), p(document, "keyup", this.handleMenuKeyUp_)
        }

        focus() {
            this.menuButton_.focus()
        }

        blur() {
            this.menuButton_.blur()
        }

        handleKeyDown(e) {
            r.isEventKey(e, "Esc") || r.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), r.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : !r.isEventKey(e, "Up") && !r.isEventKey(e, "Down") || this.buttonPressed_ || (e.preventDefault(), this.pressButton())
        }

        handleMenuKeyUp(e) {
            (r.isEventKey(e, "Esc") || r.isEventKey(e, "Tab")) && this.removeClass("vjs-hover")
        }

        handleSubmenuKeyPress(e) {
            this.handleSubmenuKeyDown(e)
        }

        handleSubmenuKeyDown(e) {
            (r.isEventKey(e, "Esc") || r.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), r.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
        }

        pressButton() {
            this.enabled_ && (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), c && Te() || this.menu.focus())
        }

        unpressButton() {
            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
        }

        disable() {
            this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
        }

        enable() {
            this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
        }
    }

    f.registerComponent("MenuButton", hr);

    class ur extends hr {
        constructor(e, t) {
            const i = t.tracks;
            if (super(e, t), this.items.length <= 1 && this.hide(), i) {
                const s = m(this, this.update);
                i.addEventListener("removetrack", s), i.addEventListener("addtrack", s), i.addEventListener("labelchange", s), this.player_.on("ready", s), this.player_.on("dispose", function () {
                    i.removeEventListener("removetrack", s), i.removeEventListener("addtrack", s), i.removeEventListener("labelchange", s)
                })
            }
        }
    }

    f.registerComponent("TrackButton", ur);
    const cr = ["Tab", "Esc", "Up", "Down", "Right", "Left"];

    class pr extends xs {
        constructor(e, t) {
            super(e, t), this.selectable = t.selectable, this.isSelected_ = t.selected || !1, this.multiSelectable = t.multiSelectable, this.selected(this.isSelected_), this.selectable ? this.multiSelectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitemradio") : this.el_.setAttribute("role", "menuitem")
        }

        createEl(e, t, i) {
            this.nonIconControl = !0;
            t = super.createEl("li", Object.assign({
                className: "vjs-menu-item",
                tabIndex: -1
            }, t), i), i = o("span", {
                className: "vjs-menu-item-text",
                textContent: this.localize(this.options_.label)
            });
            return this.player_.options_.experimentalSvgIcons ? t.appendChild(i) : t.replaceChild(i, t.querySelector(".vjs-icon-placeholder")), t
        }

        handleKeyDown(t) {
            cr.some(e => r.isEventKey(t, e)) || super.handleKeyDown(t)
        }

        handleClick(e) {
            this.selected(!0)
        }

        selected(e) {
            this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
        }
    }

    f.registerComponent("MenuItem", pr);

    class mr extends pr {
        constructor(e, t) {
            var i = t.track;
            const s = e.textTracks(),
                r = (t.label = i.label || i.language || "Unknown", t.selected = "showing" === i.mode, super(e, t), this.track = i, this.kinds = (t.kinds || [t.kind || this.track.kind]).filter(Boolean), (...e) => {
                    this.handleTracksChange.apply(this, e)
                }), n = (...e) => {
                    this.handleSelectedLanguageChange.apply(this, e)
                };
            if (e.on(["loadstart", "texttrackchange"], r), s.addEventListener("change", r), s.addEventListener("selectedlanguagechange", n), this.on("dispose", function () {
                e.off(["loadstart", "texttrackchange"], r), s.removeEventListener("change", r), s.removeEventListener("selectedlanguagechange", n)
            }), void 0 === s.onchange) {
                let e;
                this.on(["tap", "click"], function () {
                    if ("object" != typeof window.Event) try {
                        e = new window.Event("change")
                    } catch (e) {
                    }
                    e || (e = document.createEvent("Event")).initEvent("change", !0, !0), s.dispatchEvent(e)
                })
            }
            this.handleTracksChange()
        }

        handleClick(e) {
            var t = this.track, i = this.player_.textTracks();
            if (super.handleClick(e), i) for (let e = 0; e < i.length; e++) {
                var s = i[e];
                -1 !== this.kinds.indexOf(s.kind) && (s === t ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled"))
            }
        }

        handleTracksChange(e) {
            var t = "showing" === this.track.mode;
            t !== this.isSelected_ && this.selected(t)
        }

        handleSelectedLanguageChange(e) {
            var t;
            "showing" !== this.track.mode || (t = this.player_.cache_.selectedLanguage) && t.enabled && t.language === this.track.language && t.kind !== this.track.kind || (this.player_.cache_.selectedLanguage = {
                enabled: !0,
                language: this.track.language,
                kind: this.track.kind
            })
        }

        dispose() {
            this.track = null, super.dispose()
        }
    }

    f.registerComponent("TextTrackMenuItem", mr);

    class gr extends mr {
        constructor(e, t) {
            t.track = {
                player: e,
                kind: t.kind,
                kinds: t.kinds,
                default: !1,
                mode: "disabled"
            }, t.kinds || (t.kinds = [t.kind]), t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off", t.selectable = !0, t.multiSelectable = !1, super(e, t)
        }

        handleTracksChange(e) {
            var i = this.player().textTracks();
            let s = !0;
            for (let e = 0, t = i.length; e < t; e++) {
                var r = i[e];
                if (-1 < this.options_.kinds.indexOf(r.kind) && "showing" === r.mode) {
                    s = !1;
                    break
                }
            }
            s !== this.isSelected_ && this.selected(s)
        }

        handleSelectedLanguageChange(e) {
            var i = this.player().textTracks();
            let s = !0;
            for (let e = 0, t = i.length; e < t; e++) {
                var r = i[e];
                if (-1 < ["captions", "descriptions", "subtitles"].indexOf(r.kind) && "showing" === r.mode) {
                    s = !1;
                    break
                }
            }
            s && (this.player_.cache_.selectedLanguage = {enabled: !1})
        }

        handleLanguagechange() {
            this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.label), super.handleLanguagechange()
        }
    }

    f.registerComponent("OffTextTrackMenuItem", gr);

    class fr extends ur {
        constructor(e, t = {}) {
            t.tracks = e.textTracks(), super(e, t)
        }

        createItems(t = [], i = mr) {
            let e;
            this.label_ && (e = this.label_ + " off"), t.push(new gr(this.player_, {
                kinds: this.kinds_,
                kind: this.kind_,
                label: e
            })), this.hideThreshold_ += 1;
            var s = this.player_.textTracks();
            Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
            for (let e = 0; e < s.length; e++) {
                var r, n = s[e];
                -1 < this.kinds_.indexOf(n.kind) && ((r = new i(this.player_, {
                    track: n,
                    kinds: this.kinds_,
                    kind: this.kind_,
                    selectable: !0,
                    multiSelectable: !1
                })).addClass(`vjs-${n.kind}-menu-item`), t.push(r))
            }
            return t
        }
    }

    f.registerComponent("TextTrackButton", fr);

    class yr extends pr {
        constructor(e, t) {
            var i = t.track, s = t.cue, r = e.currentTime();
            t.selectable = !0, t.multiSelectable = !1, t.label = s.text, t.selected = s.startTime <= r && r < s.endTime, super(e, t), this.track = i, this.cue = s
        }

        handleClick(e) {
            super.handleClick(), this.player_.currentTime(this.cue.startTime)
        }
    }

    f.registerComponent("ChaptersTrackMenuItem", yr);

    class _r extends fr {
        constructor(e, t, i) {
            super(e, t, i), this.setIcon("chapters"), this.selectCurrentItem_ = () => {
                this.items.forEach(e => {
                    e.selected(this.track_.activeCues[0] === e.cue)
                })
            }
        }

        buildCSSClass() {
            return "vjs-chapters-button " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-chapters-button " + super.buildWrapperCSSClass()
        }

        update(e) {
            e && e.track && "chapters" !== e.track.kind || ((e = this.findChaptersTrack()) !== this.track_ ? (this.setTrack(e), super.update()) : (!this.items || e && e.cues && e.cues.length !== this.items.length) && super.update())
        }

        setTrack(e) {
            var t;
            this.track_ !== e && (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_ && ((t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)) && t.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_ = null), this.track_ = e, this.track_) && (this.track_.mode = "hidden", (t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)) && t.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_))
        }

        findChaptersTrack() {
            var t = this.player_.textTracks() || [];
            for (let e = t.length - 1; 0 <= e; e--) {
                var i = t[e];
                if (i.kind === this.kind_) return i
            }
        }

        getMenuCaption() {
            return this.track_ && this.track_.label ? this.track_.label : this.localize(g(this.kind_))
        }

        createMenu() {
            return this.options_.title = this.getMenuCaption(), super.createMenu()
        }

        createItems() {
            var i = [];
            if (this.track_) {
                var s = this.track_.cues;
                if (s) for (let e = 0, t = s.length; e < t; e++) {
                    var r = s[e], r = new yr(this.player_, {track: this.track_, cue: r});
                    i.push(r)
                }
            }
            return i
        }
    }

    _r.prototype.kind_ = "chapters", _r.prototype.controlText_ = "Chapters", f.registerComponent("ChaptersButton", _r);

    class vr extends fr {
        constructor(e, t, i) {
            super(e, t, i), this.setIcon("audio-description");
            const s = e.textTracks(), r = m(this, this.handleTracksChange);
            s.addEventListener("change", r), this.on("dispose", function () {
                s.removeEventListener("change", r)
            })
        }

        handleTracksChange(e) {
            var i = this.player().textTracks();
            let s = !1;
            for (let e = 0, t = i.length; e < t; e++) {
                var r = i[e];
                if (r.kind !== this.kind_ && "showing" === r.mode) {
                    s = !0;
                    break
                }
            }
            s ? this.disable() : this.enable()
        }

        buildCSSClass() {
            return "vjs-descriptions-button " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-descriptions-button " + super.buildWrapperCSSClass()
        }
    }

    vr.prototype.kind_ = "descriptions", vr.prototype.controlText_ = "Descriptions", f.registerComponent("DescriptionsButton", vr);

    class br extends fr {
        constructor(e, t, i) {
            super(e, t, i), this.setIcon("subtitles")
        }

        buildCSSClass() {
            return "vjs-subtitles-button " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-subtitles-button " + super.buildWrapperCSSClass()
        }
    }

    br.prototype.kind_ = "subtitles", br.prototype.controlText_ = "Subtitles", f.registerComponent("SubtitlesButton", br);

    class Tr extends mr {
        constructor(e, t) {
            t.track = {
                player: e,
                kind: t.kind,
                label: t.kind + " settings",
                selectable: !1,
                default: !1,
                mode: "disabled"
            }, t.selectable = !1, t.name = "CaptionSettingsMenuItem", super(e, t), this.addClass("vjs-texttrack-settings"), this.controlText(", opens " + t.kind + " settings dialog")
        }

        handleClick(e) {
            this.player().getChild("textTrackSettings").open()
        }

        handleLanguagechange() {
            this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.kind + " settings"), super.handleLanguagechange()
        }
    }

    f.registerComponent("CaptionSettingsMenuItem", Tr);

    class wr extends fr {
        constructor(e, t, i) {
            super(e, t, i), this.setIcon("captions")
        }

        buildCSSClass() {
            return "vjs-captions-button " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-captions-button " + super.buildWrapperCSSClass()
        }

        createItems() {
            var e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new Tr(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), super.createItems(e)
        }
    }

    wr.prototype.kind_ = "captions", wr.prototype.controlText_ = "Captions", f.registerComponent("CaptionsButton", wr);

    class Sr extends mr {
        createEl(e, t, i) {
            e = super.createEl(e, t, i), t = e.querySelector(".vjs-menu-item-text");
            return "captions" === this.options_.track.kind && (this.player_.options_.experimentalSvgIcons ? this.setIcon("captions", e) : t.appendChild(o("span", {className: "vjs-icon-placeholder"}, {"aria-hidden": !0})), t.appendChild(o("span", {
                className: "vjs-control-text",
                textContent: " " + this.localize("Captions")
            }))), e
        }
    }

    f.registerComponent("SubsCapsMenuItem", Sr);

    class Er extends fr {
        constructor(e, t = {}) {
            super(e, t), this.label_ = "subtitles", this.setIcon("subtitles"), -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) && (this.label_ = "captions", this.setIcon("captions")), this.menuButton_.controlText(g(this.label_))
        }

        buildCSSClass() {
            return "vjs-subs-caps-button " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-subs-caps-button " + super.buildWrapperCSSClass()
        }

        createItems() {
            let e = [];
            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new Tr(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), e = super.createItems(e, Sr)
        }
    }

    Er.prototype.kinds_ = ["captions", "subtitles"], Er.prototype.controlText_ = "Subtitles", f.registerComponent("SubsCapsButton", Er);

    class kr extends pr {
        constructor(e, t) {
            var i = t.track;
            const s = e.audioTracks(),
                r = (t.label = i.label || i.language || "Unknown", t.selected = i.enabled, super(e, t), this.track = i, this.addClass(`vjs-${i.kind}-menu-item`), (...e) => {
                    this.handleTracksChange.apply(this, e)
                });
            s.addEventListener("change", r), this.on("dispose", () => {
                s.removeEventListener("change", r)
            })
        }

        createEl(e, t, i) {
            e = super.createEl(e, t, i), t = e.querySelector(".vjs-menu-item-text");
            return 0 <= ["main-desc", "description"].indexOf(this.options_.track.kind) && (t.appendChild(o("span", {className: "vjs-icon-placeholder"}, {"aria-hidden": !0})), t.appendChild(o("span", {
                className: "vjs-control-text",
                textContent: " " + this.localize("Descriptions")
            }))), e
        }

        handleClick(e) {
            if (super.handleClick(e), this.track.enabled = !0, this.player_.tech_.featuresNativeAudioTracks) {
                var t = this.player_.audioTracks();
                for (let e = 0; e < t.length; e++) {
                    var i = t[e];
                    i !== this.track && (i.enabled = i === this.track)
                }
            }
        }

        handleTracksChange(e) {
            this.selected(this.track.enabled)
        }
    }

    f.registerComponent("AudioTrackMenuItem", kr);

    class Cr extends ur {
        constructor(e, t = {}) {
            t.tracks = e.audioTracks(), super(e, t), this.setIcon("audio")
        }

        buildCSSClass() {
            return "vjs-audio-button " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-audio-button " + super.buildWrapperCSSClass()
        }

        createItems(t = []) {
            this.hideThreshold_ = 1;
            var i = this.player_.audioTracks();
            for (let e = 0; e < i.length; e++) {
                var s = i[e];
                t.push(new kr(this.player_, {track: s, selectable: !0, multiSelectable: !1}))
            }
            return t
        }
    }

    Cr.prototype.controlText_ = "Audio Track", f.registerComponent("AudioTrackButton", Cr);

    class xr extends pr {
        constructor(e, t) {
            var i = t.rate, s = parseFloat(i, 10);
            t.label = i, t.selected = s === e.playbackRate(), t.selectable = !0, t.multiSelectable = !1, super(e, t), this.label = i, this.rate = s, this.on(e, "ratechange", e => this.update(e))
        }

        handleClick(e) {
            super.handleClick(), this.player().playbackRate(this.rate)
        }

        update(e) {
            this.selected(this.player().playbackRate() === this.rate)
        }
    }

    xr.prototype.contentElType = "button", f.registerComponent("PlaybackRateMenuItem", xr);

    class Ir extends hr {
        constructor(e, t) {
            super(e, t), this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_), this.updateVisibility(), this.updateLabel(), this.on(e, "loadstart", e => this.updateVisibility(e)), this.on(e, "ratechange", e => this.updateLabel(e)), this.on(e, "playbackrateschange", e => this.handlePlaybackRateschange(e))
        }

        createEl() {
            var e = super.createEl();
            return this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_, this.labelEl_ = o("div", {
                className: "vjs-playback-rate-value",
                id: this.labelElId_,
                textContent: "1x"
            }), e.appendChild(this.labelEl_), e
        }

        dispose() {
            this.labelEl_ = null, super.dispose()
        }

        buildCSSClass() {
            return "vjs-playback-rate " + super.buildCSSClass()
        }

        buildWrapperCSSClass() {
            return "vjs-playback-rate " + super.buildWrapperCSSClass()
        }

        createItems() {
            var t = this.playbackRates(), i = [];
            for (let e = t.length - 1; 0 <= e; e--) i.push(new xr(this.player(), {rate: t[e] + "x"}));
            return i
        }

        handlePlaybackRateschange(e) {
            this.update()
        }

        playbackRates() {
            var e = this.player();
            return e.playbackRates && e.playbackRates() || []
        }

        playbackRateSupported() {
            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length
        }

        updateVisibility(e) {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }

        updateLabel(e) {
            this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + "x")
        }
    }

    Ir.prototype.controlText_ = "Playback Rate", f.registerComponent("PlaybackRateMenuButton", Ir);

    class Ar extends f {
        buildCSSClass() {
            return "vjs-spacer " + super.buildCSSClass()
        }

        createEl(e = "div", t = {}, i = {}) {
            return t.className || (t.className = this.buildCSSClass()), super.createEl(e, t, i)
        }
    }

    f.registerComponent("Spacer", Ar);
    f.registerComponent("CustomControlSpacer", class extends Ar {
        buildCSSClass() {
            return "vjs-custom-control-spacer " + super.buildCSSClass()
        }

        createEl() {
            return super.createEl("div", {className: this.buildCSSClass(), textContent: "Â "})
        }
    });

    class Dr extends f {
        createEl() {
            return super.createEl("div", {className: "vjs-control-bar", dir: "ltr"})
        }
    }

    Dr.prototype.options_ = {children: ["playToggle", "skipBackward", "skipForward", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]}, f.registerComponent("ControlBar", Dr);

    class Lr extends Zt {
        constructor(e, t) {
            super(e, t), this.on(e, "error", e => this.open(e))
        }

        buildCSSClass() {
            return "vjs-error-display " + super.buildCSSClass()
        }

        content() {
            var e = this.player().error();
            return e ? this.localize(e.message) : ""
        }
    }

    Lr.prototype.options_ = Object.assign({}, Zt.prototype.options_, {
        pauseOnOpen: !1,
        fillAlways: !0,
        temporary: !1,
        uncloseable: !0
    }), f.registerComponent("ErrorDisplay", Lr);
    const Pr = "vjs-text-track-settings";
    var Ui = ["#000", "Black"], Nt = ["#00F", "Blue"], Or = ["#0FF", "Cyan"], Nr = ["#0F0", "Green"],
        t = ["#F0F", "Magenta"], Rr = ["#F00", "Red"], Mr = ["#FFF", "White"], n = ["#FF0", "Yellow"],
        Ur = ["1", "Opaque"], Br = ["0.5", "Semi-Transparent"], Fr = ["0", "Transparent"];
    const jr = {
        backgroundColor: {
            selector: ".vjs-bg-color > select",
            id: "captions-background-color-%s",
            label: "Color",
            options: [Ui, Mr, Rr, Nr, Nt, n, t, Or]
        },
        backgroundOpacity: {
            selector: ".vjs-bg-opacity > select",
            id: "captions-background-opacity-%s",
            label: "Opacity",
            options: [Ur, Br, Fr]
        },
        color: {
            selector: ".vjs-text-color > select",
            id: "captions-foreground-color-%s",
            label: "Color",
            options: [Mr, Ui, Rr, Nr, Nt, n, t, Or]
        },
        edgeStyle: {
            selector: ".vjs-edge-style > select",
            id: "%s",
            label: "Text Edge Style",
            options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Drop shadow"]]
        },
        fontFamily: {
            selector: ".vjs-font-family > select",
            id: "captions-font-family-%s",
            label: "Font Family",
            options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
        },
        fontPercent: {
            selector: ".vjs-font-percent > select",
            id: "captions-font-size-%s",
            label: "Font Size",
            options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
            default: 2,
            parser: e => "1.00" === e ? null : Number(e)
        },
        textOpacity: {
            selector: ".vjs-text-opacity > select",
            id: "captions-foreground-opacity-%s",
            label: "Opacity",
            options: [Ur, Br]
        },
        windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
        windowOpacity: {
            selector: ".vjs-window-opacity > select",
            id: "captions-window-opacity-%s",
            label: "Opacity",
            options: [Fr, Br, Ur]
        }
    };

    function qr(e, t) {
        if ((e = t ? t(e) : e) && "none" !== e) return e
    }

    jr.windowColor.options = jr.backgroundColor.options;

    class Hr extends Zt {
        constructor(e, t) {
            t.temporary = !1, super(e, t), this.updateDisplay = this.updateDisplay.bind(this), this.fill(), this.hasBeenOpened_ = this.hasBeenFilled_ = !0, this.endDialog = o("p", {
                className: "vjs-control-text",
                textContent: this.localize("End of dialog window.")
            }), this.el().appendChild(this.endDialog), this.setDefaults(), void 0 === t.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), this.on(this.$(".vjs-done-button"), "click", () => {
                this.saveSettings(), this.close()
            }), this.on(this.$(".vjs-default-button"), "click", () => {
                this.setDefaults(), this.updateDisplay()
            }), G(jr, e => {
                this.on(this.$(e.selector), "change", this.updateDisplay)
            }), this.options_.persistTextTrackSettings && this.restoreSettings()
        }

        dispose() {
            this.endDialog = null, super.dispose()
        }

        createElSelect_(e, t = "", i = "label") {
            e = jr[e];
            const s = e.id.replace("%s", this.id_), r = [t, s].join(" ").trim();
            return [`<${i} id="${s}" class="${"label" === i ? "vjs-label" : ""}">`, this.localize(e.label), `</${i}>`, `<select aria-labelledby="${r}">`].concat(e.options.map(e => {
                var t = s + "-" + e[1].replace(/\W+/g, "");
                return [`<option id="${t}" value="${e[0]}" `, `aria-labelledby="${r} ${t}">`, this.localize(e[1]), "</option>"].join("")
            })).concat("</select>").join("")
        }

        createElFgColor_() {
            var e = "captions-text-legend-" + this.id_;
            return ['<fieldset class="vjs-fg vjs-track-setting">', `<legend id="${e}">`, this.localize("Text"), "</legend>", '<span class="vjs-text-color">', this.createElSelect_("color", e), "</span>", '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
        }

        createElBgColor_() {
            var e = "captions-background-" + this.id_;
            return ['<fieldset class="vjs-bg vjs-track-setting">', `<legend id="${e}">`, this.localize("Text Background"), "</legend>", '<span class="vjs-bg-color">', this.createElSelect_("backgroundColor", e), "</span>", '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
        }

        createElWinColor_() {
            var e = "captions-window-" + this.id_;
            return ['<fieldset class="vjs-window vjs-track-setting">', `<legend id="${e}">`, this.localize("Caption Area Background"), "</legend>", '<span class="vjs-window-color">', this.createElSelect_("windowColor", e), "</span>", '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
        }

        createElColors_() {
            return o("div", {
                className: "vjs-track-settings-colors",
                innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
            })
        }

        createElFont_() {
            return o("div", {
                className: "vjs-track-settings-font",
                innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
            })
        }

        createElControls_() {
            var e = this.localize("restore all settings to the default values");
            return o("div", {
                className: "vjs-track-settings-controls",
                innerHTML: [`<button type="button" class="vjs-default-button" title="${e}">`, this.localize("Reset"), `<span class="vjs-control-text"> ${e}</span>`, "</button>", `<button type="button" class="vjs-done-button">${this.localize("Done")}</button>`].join("")
            })
        }

        content() {
            return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
        }

        label() {
            return this.localize("Caption Settings Dialog")
        }

        description() {
            return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
        }

        buildCSSClass() {
            return super.buildCSSClass() + " vjs-text-track-settings"
        }

        getValues() {
            return X(jr, (e, t, i) => {
                s = this.$(t.selector), t = t.parser;
                var s = qr(s.options[s.options.selectedIndex].value, t);
                return void 0 !== s && (e[i] = s), e
            }, {})
        }

        setValues(n) {
            G(jr, (e, t) => {
                var i = this.$(e.selector), s = n[t], r = e.parser;
                if (s) for (let e = 0; e < i.options.length; e++) if (qr(i.options[e].value, r) === s) {
                    i.selectedIndex = e;
                    break
                }
            })
        }

        setDefaults() {
            G(jr, e => {
                var t = e.hasOwnProperty("default") ? e.default : 0;
                this.$(e.selector).selectedIndex = t
            })
        }

        restoreSettings() {
            let e;
            try {
                e = JSON.parse(window.localStorage.getItem(Pr))
            } catch (e) {
                l.warn(e)
            }
            e && this.setValues(e)
        }

        saveSettings() {
            if (this.options_.persistTextTrackSettings) {
                var e = this.getValues();
                try {
                    Object.keys(e).length ? window.localStorage.setItem(Pr, JSON.stringify(e)) : window.localStorage.removeItem(Pr)
                } catch (e) {
                    l.warn(e)
                }
            }
        }

        updateDisplay() {
            var e = this.player_.getChild("textTrackDisplay");
            e && e.updateDisplay()
        }

        conditionalBlur_() {
            this.previouslyActiveEl_ = null;
            var e = this.player_.controlBar, t = e && e.subsCapsButton, e = e && e.captionsButton;
            t ? t.focus() : e && e.focus()
        }

        handleLanguagechange() {
            this.fill()
        }
    }

    f.registerComponent("TextTrackSettings", Hr);

    class Vr extends f {
        constructor(e, t) {
            let i = t.ResizeObserver || window.ResizeObserver;
            super(e, d({
                createEl: !(i = null === t.ResizeObserver ? !1 : i),
                reportTouchActivity: !1
            }, t)), this.ResizeObserver = t.ResizeObserver || window.ResizeObserver, this.loadListener_ = null, this.resizeObserver_ = null, this.debouncedHandler_ = gt(() => {
                this.resizeHandler()
            }, 100, !1, this), i ? (this.resizeObserver_ = new this.ResizeObserver(this.debouncedHandler_), this.resizeObserver_.observe(e.el())) : (this.loadListener_ = () => {
                if (this.el_ && this.el_.contentWindow) {
                    const t = this.debouncedHandler_;
                    let e = this.unloadListener_ = function () {
                        p(this, "resize", t), p(this, "unload", e), e = null
                    };
                    dt(this.el_.contentWindow, "unload", e), dt(this.el_.contentWindow, "resize", t)
                }
            }, this.one("load", this.loadListener_))
        }

        createEl() {
            return super.createEl("iframe", {
                className: "vjs-resize-manager",
                tabIndex: -1,
                title: this.localize("No content")
            }, {"aria-hidden": "true"})
        }

        resizeHandler() {
            this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
        }

        dispose() {
            this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, super.dispose()
        }
    }

    f.registerComponent("ResizeManager", Vr);
    const zr = {trackingThreshold: 20, liveTolerance: 15};

    class $r extends f {
        constructor(e, t) {
            super(e, d(zr, t, {createEl: !1})), this.trackLiveHandler_ = () => this.trackLive_(), this.handlePlay_ = e => this.handlePlay(e), this.handleFirstTimeupdate_ = e => this.handleFirstTimeupdate(e), this.handleSeeked_ = e => this.handleSeeked(e), this.seekToLiveEdge_ = e => this.seekToLiveEdge(e), this.reset_(), this.on(this.player_, "durationchange", e => this.handleDurationchange(e)), this.on(this.player_, "canplay", () => this.toggleTracking())
        }

        trackLive_() {
            var t = this.player_.seekable();
            if (t && t.length) {
                var t = Number(window.performance.now().toFixed(4)),
                    i = -1 === this.lastTime_ ? 0 : (t - this.lastTime_) / 1e3,
                    t = (this.lastTime_ = t, this.pastSeekEnd_ = this.pastSeekEnd() + i, this.liveCurrentTime()),
                    i = this.player_.currentTime();
                let e = this.player_.paused() || this.seekedBehindLive_ || Math.abs(t - i) > this.options_.liveTolerance;
                (e = this.timeupdateSeen_ && t !== 1 / 0 ? e : !1) !== this.behindLiveEdge_ && (this.behindLiveEdge_ = e, this.trigger("liveedgechange"))
            }
        }

        handleDurationchange() {
            this.toggleTracking()
        }

        toggleTracking() {
            this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking())
        }

        startTracking() {
            this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, 30), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)))
        }

        handleFirstTimeupdate() {
            this.timeupdateSeen_ = !0, this.on(this.player_, "seeked", this.handleSeeked_)
        }

        handleSeeked() {
            var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
            this.seekedBehindLive_ = this.nextSeekedFromUser_ && 2 < e, this.nextSeekedFromUser_ = !1, this.trackLive_()
        }

        handlePlay() {
            this.one(this.player_, "timeupdate", this.seekToLiveEdge_)
        }

        reset_() {
            this.lastTime_ = -1, this.pastSeekEnd_ = 0, this.lastSeekEnd_ = -1, this.behindLiveEdge_ = !0, this.timeupdateSeen_ = !1, this.seekedBehindLive_ = !1, this.nextSeekedFromUser_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.off(this.player_, ["play", "pause"], this.trackLiveHandler_), this.off(this.player_, "seeked", this.handleSeeked_), this.off(this.player_, "play", this.handlePlay_), this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_), this.off(this.player_, "timeupdate", this.seekToLiveEdge_)
        }

        nextSeekedFromUser() {
            this.nextSeekedFromUser_ = !0
        }

        stopTracking() {
            this.isTracking() && (this.reset_(), this.trigger("liveedgechange"))
        }

        seekableEnd() {
            var e = this.player_.seekable(), t = [];
            let i = e ? e.length : 0;
            for (; i--;) t.push(e.end(i));
            return t.length ? t.sort()[t.length - 1] : 1 / 0
        }

        seekableStart() {
            var e = this.player_.seekable(), t = [];
            let i = e ? e.length : 0;
            for (; i--;) t.push(e.start(i));
            return t.length ? t.sort()[0] : 0
        }

        liveWindow() {
            var e = this.liveCurrentTime();
            return e === 1 / 0 ? 0 : e - this.seekableStart()
        }

        isLive() {
            return this.isTracking()
        }

        atLiveEdge() {
            return !this.behindLiveEdge()
        }

        liveCurrentTime() {
            return this.pastSeekEnd() + this.seekableEnd()
        }

        pastSeekEnd() {
            var e = this.seekableEnd();
            return -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0), this.lastSeekEnd_ = e, this.pastSeekEnd_
        }

        behindLiveEdge() {
            return this.behindLiveEdge_
        }

        isTracking() {
            return "number" == typeof this.trackingInterval_
        }

        seekToLiveEdge() {
            this.seekedBehindLive_ = !1, this.atLiveEdge() || (this.nextSeekedFromUser_ = !1, this.player_.currentTime(this.liveCurrentTime()))
        }

        dispose() {
            this.stopTracking(), super.dispose()
        }
    }

    f.registerComponent("LiveTracker", $r);

    class Wr extends f {
        constructor(e, t) {
            super(e, t), this.on("statechanged", e => this.updateDom_()), this.updateDom_()
        }

        createEl() {
            return this.els = {
                title: o("div", {className: "vjs-title-bar-title", id: "vjs-title-bar-title-" + st++}),
                description: o("div", {className: "vjs-title-bar-description", id: "vjs-title-bar-description-" + st++})
            }, o("div", {className: "vjs-title-bar"}, {}, Q(this.els))
        }

        updateDom_() {
            var e = this.player_.tech_;
            const s = e && e.el_, r = {title: "aria-labelledby", description: "aria-describedby"};
            ["title", "description"].forEach(e => {
                var t = this.state[e], i = this.els[e], e = r[e];
                je(i), t && Se(i, t), s && (s.removeAttribute(e), t) && s.setAttribute(e, i.id)
            }), this.state.title || this.state.description ? this.show() : this.hide()
        }

        update(e) {
            this.setState(e)
        }

        dispose() {
            var e = this.player_.tech_, e = e && e.el_;
            e && (e.removeAttribute("aria-labelledby"), e.removeAttribute("aria-describedby")), super.dispose(), this.els = null
        }
    }

    f.registerComponent("TitleBar", Wr);

    function Gr(i) {
        const s = i.el();
        if (!s.resetSourceWatch_) {
            const t = {}, e = Jr(i), r = t => (...e) => {
                e = t.apply(s, e);
                return Kr(i), e
            };
            ["append", "appendChild", "insertAdjacentHTML"].forEach(e => {
                s[e] && (t[e] = s[e], s[e] = r(t[e]))
            }), Object.defineProperty(s, "innerHTML", d(e, {set: r(e.set)})), s.resetSourceWatch_ = () => {
                s.resetSourceWatch_ = null, Object.keys(t).forEach(e => {
                    s[e] = t[e]
                }), Object.defineProperty(s, "innerHTML", e)
            }, i.one("sourceset", s.resetSourceWatch_)
        }
    }

    function Xr(i) {
        if (i.featuresSourceset) {
            const s = i.el();
            if (!s.resetSourceset_) {
                e = i;
                const t = Qr([e.el(), window.HTMLMediaElement.prototype, Zr], "src");
                var e;
                const r = s.setAttribute, n = s.load;
                Object.defineProperty(s, "src", d(t, {
                    set: e => {
                        e = t.set.call(s, e);
                        return i.triggerSourceset(s.src), e
                    }
                })), s.setAttribute = (e, t) => {
                    t = r.call(s, e, t);
                    return /src/i.test(e) && i.triggerSourceset(s.src), t
                }, s.load = () => {
                    var e = n.call(s);
                    return Kr(i) || (i.triggerSourceset(""), Gr(i)), e
                }, s.currentSrc ? i.triggerSourceset(s.currentSrc) : Kr(i) || Gr(i), s.resetSourceset_ = () => {
                    s.resetSourceset_ = null, s.load = n, s.setAttribute = r, Object.defineProperty(s, "src", t), s.resetSourceWatch_ && s.resetSourceWatch_()
                }
            }
        }
    }

    const Kr = t => {
            var e = t.el();
            if (e.hasAttribute("src")) t.triggerSourceset(e.src); else {
                var i = t.$$("source"), s = [];
                let e = "";
                if (!i.length) return !1;
                for (let e = 0; e < i.length; e++) {
                    var r = i[e].src;
                    r && -1 === s.indexOf(r) && s.push(r)
                }
                if (!s.length) return !1;
                1 === s.length && (e = s[0]), t.triggerSourceset(e)
            }
            return !0
        }, Yr = Object.defineProperty({}, "innerHTML", {
            get() {
                return this.cloneNode(!0).innerHTML
            }, set(e) {
                for (var t = document.createElement(this.nodeName.toLowerCase()), i = (t.innerHTML = e, document.createDocumentFragment()); t.childNodes.length;) i.appendChild(t.childNodes[0]);
                return this.innerText = "", window.Element.prototype.appendChild.call(this, i), this.innerHTML
            }
        }), Qr = (t, i) => {
            let s = {};
            for (let e = 0; e < t.length && !((s = Object.getOwnPropertyDescriptor(t[e], i)) && s.set && s.get); e++) ;
            return s.enumerable = !0, s.configurable = !0, s
        }, Jr = e => Qr([e.el(), window.HTMLMediaElement.prototype, window.Element.prototype, Yr], "innerHTML"),
        Zr = Object.defineProperty({}, "src", {
            get() {
                return this.hasAttribute("src") ? ui(window.Element.prototype.getAttribute.call(this, "src")) : ""
            }, set(e) {
                return window.Element.prototype.setAttribute.call(this, "src", e), e
            }
        });

    class v extends _ {
        constructor(e, t) {
            super(e, t);
            t = e.source;
            let i = !1;
            if (this.featuresVideoFrameCallback = this.featuresVideoFrameCallback && "VIDEO" === this.el_.tagName, t && (this.el_.currentSrc !== t.src || e.tag && 3 === e.tag.initNetworkState_) ? this.setSource(t) : this.handleLateInit_(this.el_), e.enableSourceset && this.setupSourcesetHandling_(), this.isScrubbing_ = !1, this.el_.hasChildNodes()) {
                var s = this.el_.childNodes;
                let e = s.length;
                for (var r = []; e--;) {
                    var n = s[e];
                    "track" === n.nodeName.toLowerCase() && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), this.textTracks().addTrack(n.track), i || this.el_.hasAttribute("crossorigin") || !ci(n.src) || (i = !0)) : r.push(n))
                }
                for (let e = 0; e < r.length; e++) this.el_.removeChild(r[e])
            }
            this.proxyNativeTracks_(), this.featuresNativeTextTracks && i && l.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading."), this.restoreMetadataTracksInIOSNativePlayer_(), (ge || me) && !0 === e.nativeControlsForTouch && this.setControls(!0), this.proxyWebkitFullscreen_(), this.triggerReady()
        }

        dispose() {
            this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), v.disposeMediaElement(this.el_), this.options_ = null, super.dispose()
        }

        setupSourcesetHandling_() {
            Xr(this)
        }

        restoreMetadataTracksInIOSNativePlayer_() {
            const i = this.textTracks();
            let s;
            const e = () => {
                    s = [];
                    for (let e = 0; e < i.length; e++) {
                        var t = i[e];
                        "metadata" === t.kind && s.push({track: t, storedMode: t.mode})
                    }
                },
                r = (e(), i.addEventListener("change", e), this.on("dispose", () => i.removeEventListener("change", e)), () => {
                    for (let e = 0; e < s.length; e++) {
                        var t = s[e];
                        "disabled" === t.track.mode && t.track.mode !== t.storedMode && (t.track.mode = t.storedMode)
                    }
                    i.removeEventListener("change", r)
                });
            this.on("webkitbeginfullscreen", () => {
                i.removeEventListener("change", e), i.removeEventListener("change", r), i.addEventListener("change", r)
            }), this.on("webkitendfullscreen", () => {
                i.removeEventListener("change", e), i.addEventListener("change", e), i.removeEventListener("change", r)
            })
        }

        overrideNative_(e, t) {
            if (t === this[`featuresNative${e}Tracks`]) {
                const i = e.toLowerCase();
                this[i + "TracksListeners_"] && Object.keys(this[i + "TracksListeners_"]).forEach(e => {
                    this.el()[i + "Tracks"].removeEventListener(e, this[i + "TracksListeners_"][e])
                }), this[`featuresNative${e}Tracks`] = !t, this[i + "TracksListeners_"] = null, this.proxyNativeTracksForType_(i)
            }
        }

        overrideNativeAudioTracks(e) {
            this.overrideNative_("Audio", e)
        }

        overrideNativeVideoTracks(e) {
            this.overrideNative_("Video", e)
        }

        proxyNativeTracksForType_(i) {
            var e = Ri[i];
            const s = this.el()[e.getterName], r = this[e.getterName]();
            if (this[`featuresNative${e.capitalName}Tracks`] && s && s.addEventListener) {
                const n = {
                    change: e => {
                        var t = {type: "change", target: r, currentTarget: r, srcElement: r};
                        r.trigger(t), "text" === i && this[Mi.remoteText.getterName]().trigger(t)
                    }, addtrack(e) {
                        r.addTrack(e.track)
                    }, removetrack(e) {
                        r.removeTrack(e.track)
                    }
                }, t = function () {
                    var e = [];
                    for (let i = 0; i < r.length; i++) {
                        let t = !1;
                        for (let e = 0; e < s.length; e++) if (s[e] === r[i]) {
                            t = !0;
                            break
                        }
                        t || e.push(r[i])
                    }
                    for (; e.length;) r.removeTrack(e.shift())
                };
                this[e.getterName + "Listeners_"] = n, Object.keys(n).forEach(t => {
                    const i = n[t];
                    s.addEventListener(t, i), this.on("dispose", e => s.removeEventListener(t, i))
                }), this.on("loadstart", t), this.on("dispose", e => this.off("loadstart", t))
            }
        }

        proxyNativeTracks_() {
            Ri.names.forEach(e => {
                this.proxyNativeTracksForType_(e)
            })
        }

        createEl() {
            let t = this.options_.tag;
            t && (this.options_.playerElIngest || this.movingMediaElementInDOM) || (t ? (e = t.cloneNode(!0), t.parentNode && t.parentNode.insertBefore(e, t), v.disposeMediaElement(t), t = e) : (t = document.createElement("video"), e = d({}, this.options_.tag && De(this.options_.tag)), ge && !0 === this.options_.nativeControlsForTouch || delete e.controls, Ae(t, Object.assign(e, {
                id: this.options_.techId,
                class: "vjs-tech"
            }))), t.playerId = this.options_.playerId), "undefined" != typeof this.options_.preload && Pe(t, "preload", this.options_.preload), void 0 !== this.options_.disablePictureInPicture && (t.disablePictureInPicture = this.options_.disablePictureInPicture);
            var e, i = ["loop", "muted", "playsinline", "autoplay"];
            for (let e = 0; e < i.length; e++) {
                var s = i[e], r = this.options_[s];
                "undefined" != typeof r && (r ? Pe(t, s, s) : Oe(t, s), t[s] = r)
            }
            return t
        }

        handleLateInit_(e) {
            if (0 !== e.networkState && 3 !== e.networkState) if (0 === e.readyState) {
                let e = !1;
                const t = function () {
                    e = !0
                }, i = (this.on("loadstart", t), function () {
                    e || this.trigger("loadstart")
                });
                this.on("loadedmetadata", i), void this.ready(function () {
                    this.off("loadstart", t), this.off("loadedmetadata", i), e || this.trigger("loadstart")
                })
            } else {
                const s = ["loadstart"];
                s.push("loadedmetadata"), 2 <= e.readyState && s.push("loadeddata"), 3 <= e.readyState && s.push("canplay"), 4 <= e.readyState && s.push("canplaythrough"), this.ready(function () {
                    s.forEach(function (e) {
                        this.trigger(e)
                    }, this)
                })
            }
        }

        setScrubbing(e) {
            this.isScrubbing_ = e
        }

        scrubbing() {
            return this.isScrubbing_
        }

        setCurrentTime(e) {
            try {
                this.isScrubbing_ && this.el_.fastSeek && ye ? this.el_.fastSeek(e) : this.el_.currentTime = e
            } catch (e) {
                l(e, "Video is not ready. (Video.js)")
            }
        }

        duration() {
            if (this.el_.duration === 1 / 0 && ie && oe && 0 === this.el_.currentTime) {
                const e = () => {
                    0 < this.el_.currentTime && (this.el_.duration === 1 / 0 && this.trigger("durationchange"), this.off("timeupdate", e))
                };
                return this.on("timeupdate", e), NaN
            }
            return this.el_.duration || NaN
        }

        width() {
            return this.el_.offsetWidth
        }

        height() {
            return this.el_.offsetHeight
        }

        proxyWebkitFullscreen_() {
            if ("webkitDisplayingFullscreen" in this.el_) {
                const e = function () {
                    this.trigger("fullscreenchange", {isFullscreen: !1}), this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = !1)
                }, t = function () {
                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
                        isFullscreen: !0,
                        nativeIOSFullscreen: !0
                    }))
                };
                this.on("webkitbeginfullscreen", t), this.on("dispose", () => {
                    this.off("webkitbeginfullscreen", t), this.off("webkitendfullscreen", e)
                })
            }
        }

        supportsFullScreen() {
            return "function" == typeof this.el_.webkitEnterFullScreen
        }

        enterFullScreen() {
            const e = this.el_;
            if (e.paused && e.networkState <= e.HAVE_METADATA) Xt(this.el_.play()), this.setTimeout(function () {
                e.pause();
                try {
                    e.webkitEnterFullScreen()
                } catch (e) {
                    this.trigger("fullscreenerror", e)
                }
            }, 0); else try {
                e.webkitEnterFullScreen()
            } catch (e) {
                this.trigger("fullscreenerror", e)
            }
        }

        exitFullScreen() {
            this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", new Error("The video is not fullscreen"))
        }

        requestPictureInPicture() {
            return this.el_.requestPictureInPicture()
        }

        requestVideoFrameCallback(e) {
            return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(e) : super.requestVideoFrameCallback(e)
        }

        cancelVideoFrameCallback(e) {
            this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(e) : super.cancelVideoFrameCallback(e)
        }

        src(e) {
            if (void 0 === e) return this.el_.src;
            this.setSrc(e)
        }

        reset() {
            v.resetMediaElement(this.el_)
        }

        currentSrc() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
        }

        setControls(e) {
            this.el_.controls = !!e
        }

        addTextTrack(e, t, i) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : super.addTextTrack(e, t, i)
        }

        createRemoteTextTrack(e) {
            var t;
            return this.featuresNativeTextTracks ? (t = document.createElement("track"), e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t) : super.createRemoteTextTrack(e)
        }

        addRemoteTextTrack(e, t) {
            e = super.addRemoteTextTrack(e, t);
            return this.featuresNativeTextTracks && this.el().appendChild(e), e
        }

        removeRemoteTextTrack(t) {
            if (super.removeRemoteTextTrack(t), this.featuresNativeTextTracks) {
                var i = this.$$("track");
                let e = i.length;
                for (; e--;) t !== i[e] && t !== i[e].track || this.el().removeChild(i[e])
            }
        }

        getVideoPlaybackQuality() {
            var e;
            return "function" == typeof this.el().getVideoPlaybackQuality ? this.el().getVideoPlaybackQuality() : (e = {}, "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" != typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), window.performance && (e.creationTime = window.performance.now()), e)
        }
    }

    J(v, "TEST_VID", function () {
        var e, t;
        if (ve()) return e = document.createElement("video"), (t = document.createElement("track")).kind = "captions", t.srclang = "en", t.label = "English", e.appendChild(t), e
    }), v.isSupported = function () {
        try {
            v.TEST_VID.volume = .5
        } catch (e) {
            return !1
        }
        return !(!v.TEST_VID || !v.TEST_VID.canPlayType)
    }, v.canPlayType = function (e) {
        return v.TEST_VID.canPlayType(e)
    }, v.canPlaySource = function (e, t) {
        return v.canPlayType(e.type)
    }, v.canControlVolume = function () {
        try {
            const t = v.TEST_VID.volume;
            v.TEST_VID.volume = t / 2 + .1;
            var e = t !== v.TEST_VID.volume;
            return e && c ? (window.setTimeout(() => {
                v && v.prototype && (v.prototype.featuresVolumeControl = t !== v.TEST_VID.volume)
            }), !1) : e
        } catch (e) {
            return !1
        }
    }, v.canMuteVolume = function () {
        try {
            var e = v.TEST_VID.muted;
            return v.TEST_VID.muted = !e, v.TEST_VID.muted ? Pe(v.TEST_VID, "muted", "muted") : Oe(v.TEST_VID, "muted"), e !== v.TEST_VID.muted
        } catch (e) {
            return !1
        }
    }, v.canControlPlaybackRate = function () {
        if (ie && oe && de < 58) return !1;
        try {
            var e = v.TEST_VID.playbackRate;
            return v.TEST_VID.playbackRate = e / 2 + .1, e !== v.TEST_VID.playbackRate
        } catch (e) {
            return !1
        }
    }, v.canOverrideAttributes = function () {
        try {
            var e = () => {
            };
            Object.defineProperty(document.createElement("video"), "src", {
                get: e,
                set: e
            }), Object.defineProperty(document.createElement("audio"), "src", {
                get: e,
                set: e
            }), Object.defineProperty(document.createElement("video"), "innerHTML", {
                get: e,
                set: e
            }), Object.defineProperty(document.createElement("audio"), "innerHTML", {get: e, set: e})
        } catch (e) {
            return !1
        }
        return !0
    }, v.supportsNativeTextTracks = function () {
        return ye || c && oe
    }, v.supportsNativeVideoTracks = function () {
        return !(!v.TEST_VID || !v.TEST_VID.videoTracks)
    }, v.supportsNativeAudioTracks = function () {
        return !(!v.TEST_VID || !v.TEST_VID.audioTracks)
    }, v.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], [["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function ([e, t]) {
        J(v.prototype, e, () => v[t](), !0)
    }), v.prototype.featuresVolumeControl = v.canControlVolume(), v.prototype.movingMediaElementInDOM = !c, v.prototype.featuresFullscreenResize = !0, v.prototype.featuresProgressEvents = !0, v.prototype.featuresTimeupdateEvents = !0, v.prototype.featuresVideoFrameCallback = !(!v.TEST_VID || !v.TEST_VID.requestVideoFrameCallback), v.disposeMediaElement = function (e) {
        if (e) {
            for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
            if (e.removeAttribute("src"), "function" == typeof e.load) try {
                e.load()
            } catch (e) {
            }
        }
    }, v.resetMediaElement = function (t) {
        if (t) {
            var i = t.querySelectorAll("source");
            let e = i.length;
            for (; e--;) t.removeChild(i[e]);
            if (t.removeAttribute("src"), "function" == typeof t.load) try {
                t.load()
            } catch (e) {
            }
        }
    }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) {
        v.prototype[e] = function () {
            return this.el_[e] || this.el_.hasAttribute(e)
        }
    }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) {
        v.prototype["set" + g(t)] = function (e) {
            (this.el_[t] = e) ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
        }
    }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function (e) {
        v.prototype[e] = function () {
            return this.el_[e]
        }
    }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function (t) {
        v.prototype["set" + g(t)] = function (e) {
            this.el_[t] = e
        }
    }), ["pause", "load", "play"].forEach(function (e) {
        v.prototype[e] = function () {
            return this.el_[e]()
        }
    }), _.withSourceHandlers(v), v.nativeSourceHandler = {}, v.nativeSourceHandler.canPlayType = function (e) {
        try {
            return v.TEST_VID.canPlayType(e)
        } catch (e) {
            return ""
        }
    }, v.nativeSourceHandler.canHandleSource = function (e, t) {
        return e.type ? v.nativeSourceHandler.canPlayType(e.type) : e.src ? (e = pi(e.src), v.nativeSourceHandler.canPlayType("video/" + e)) : ""
    }, v.nativeSourceHandler.handleSource = function (e, t, i) {
        t.setSrc(e.src)
    }, v.nativeSourceHandler.dispose = function () {
    }, v.registerSourceHandler(v.nativeSourceHandler), _.registerTech("Html5", v);
    const en = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
        tn = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
        sn = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"], rn = {}, nn = (sn.forEach(e => {
            var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
            rn[e] = "vjs-layout-" + t
        }), {tiny: 210, xsmall: 320, small: 425, medium: 768, large: 1440, xlarge: 2560, huge: 1 / 0});

    class b extends f {
        constructor(e, t, i) {
            if (e.id = e.id || t.id || "vjs_video_" + st++, (t = Object.assign(b.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, t.language || (s = e.closest("[lang]")) && (t.language = s.getAttribute("lang")), super(null, t, i), this.boundDocumentFullscreenChange_ = e => this.documentFullscreenChange_(e), this.boundFullWindowOnEscKey_ = e => this.fullWindowOnEscKey(e), this.boundUpdateStyleEl_ = e => this.updateStyleEl_(e), this.boundApplyInitTime_ = e => this.applyInitTime_(e), this.boundUpdateCurrentBreakpoint_ = e => this.updateCurrentBreakpoint_(e), this.boundHandleTechClick_ = e => this.handleTechClick_(e), this.boundHandleTechDoubleClick_ = e => this.handleTechDoubleClick_(e), this.boundHandleTechTouchStart_ = e => this.handleTechTouchStart_(e), this.boundHandleTechTouchMove_ = e => this.handleTechTouchMove_(e), this.boundHandleTechTouchEnd_ = e => this.handleTechTouchEnd_(e), this.boundHandleTechTap_ = e => this.handleTechTap_(e), this.isFullscreen_ = !1, this.log = $(this.id_), this.fsApi_ = j, this.isPosterFromTech_ = !1, this.queuedCallbacks_ = [], this.isReady_ = !1, this.hasStarted_ = !1, this.userActive_ = !1, this.debugEnabled_ = !1, this.audioOnlyMode_ = !1, this.audioPosterMode_ = !1, this.audioOnlyCache_ = {
                playerHeight: null,
                hiddenChildren: []
            }, !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
            if (this.tag = e, this.tagAttributes = e && De(e), this.language(this.options_.language), t.languages) {
                const r = {};
                Object.getOwnPropertyNames(t.languages).forEach(function (e) {
                    r[e.toLowerCase()] = t.languages[e]
                }), this.languages_ = r
            } else this.languages_ = b.prototype.options_.languages;
            this.resetCache_(), this.poster_ = t.poster || "", this.controls_ = !!t.controls, e.controls = !1, e.removeAttribute("controls"), this.changingSrc_ = !1, this.playCallbacks_ = [], this.playTerminatedQueue_ = [], e.hasAttribute("autoplay") ? this.autoplay(!0) : this.autoplay(this.options_.autoplay), t.plugins && Object.keys(t.plugins).forEach(e => {
                if ("function" != typeof this[e]) throw new Error(`plugin "${e}" does not exist`)
            }), this.scrubbing_ = !1, this.el_ = this.createEl(), It(this, {eventBusKey: "el_"}), this.fsApi_.requestFullscreen && (dt(document, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.on(this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_)), this.fluid_ && this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
            var s = d(this.options_), i = (t.plugins && Object.keys(t.plugins).forEach(e => {
                this[e](t.plugins[e])
            }), t.debug && this.debug(!0), this.options_.playerOptions = s, this.middleware_ = [], this.playbackRates(t.playbackRates), t.experimentalSvgIcons && ((i = (new window.DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play">\n      <path d="M16 10v28l22-14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-pause">\n      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-audio">\n      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-captions">\n      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-subtitles">\n      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-enter">\n      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-exit">\n      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play-circle">\n      <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-mute">\n      <path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13a17.94 17.94 0 0 0 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-low">\n      <path d="M14 18v12h8l10 10V8L22 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-medium">\n      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-high">\n      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-spinner">\n      <path d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"></path>\n    </symbol>\n    <symbol viewBox="0 0 24 24" id="vjs-icon-hd">\n      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-chapters">\n      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 40 40" id="vjs-icon-downloading">\n      <path d="M18.208 36.875q-3.208-.292-5.979-1.729-2.771-1.438-4.812-3.729-2.042-2.292-3.188-5.229-1.146-2.938-1.146-6.23 0-6.583 4.334-11.416 4.333-4.834 10.833-5.5v3.166q-5.167.75-8.583 4.646Q6.25 14.75 6.25 19.958q0 5.209 3.396 9.104 3.396 3.896 8.562 4.646zM20 28.417L11.542 20l2.083-2.083 4.917 4.916v-11.25h2.916v11.25l4.875-4.916L28.417 20zm1.792 8.458v-3.167q1.833-.25 3.541-.958 1.709-.708 3.167-1.875l2.333 2.292q-1.958 1.583-4.25 2.541-2.291.959-4.791 1.167zm6.791-27.792q-1.541-1.125-3.25-1.854-1.708-.729-3.541-1.021V3.042q2.5.25 4.77 1.208 2.271.958 4.271 2.5zm4.584 21.584l-2.25-2.25q1.166-1.5 1.854-3.209.687-1.708.937-3.541h3.209q-.292 2.5-1.229 4.791-.938 2.292-2.521 4.209zm.541-12.417q-.291-1.833-.958-3.562-.667-1.73-1.833-3.188l2.375-2.208q1.541 1.916 2.458 4.208.917 2.292 1.167 4.75z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download">\n      <path d="M10.8 40.55q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h26.35v-7.7h3.4v7.7q0 1.4-1 2.4t-2.4 1zM24 32.1L13.9 22.05l2.45-2.45 5.95 5.95V7.15h3.4v18.4l5.95-5.95 2.45 2.45z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-done">\n      <path d="M9.8 40.5v-3.45h28.4v3.45zm9.2-9.05L7.4 19.85l2.45-2.35L19 26.65l19.2-19.2 2.4 2.4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-off">\n      <path d="M4.9 4.75L43.25 43.1 41 45.3l-4.75-4.75q-.05.05-.075.025-.025-.025-.075-.025H10.8q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h22.05l-7-7-1.85 1.8L13.9 21.9l1.85-1.85L2.7 7zm26.75 14.7l2.45 2.45-3.75 3.8-2.45-2.5zM25.7 7.15V21.1l-3.4-3.45V7.15z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-share">\n      <path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1 0 36 32.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cog">\n      <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-square">\n      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle">\n      <circle cx="24" cy="24" r="20"></circle>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-outline">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-inner-circle">\n      <path d="M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cancel">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-replay">\n      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-repeat">\n      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-5">\n      <path d="M17.689 98l-8.697 8.696 8.697 8.697 2.486-2.485-4.32-4.319h1.302c4.93 0 9.071 1.722 12.424 5.165 3.352 3.443 5.029 7.638 5.029 12.584h3.55c0-2.958-.553-5.73-1.658-8.313-1.104-2.583-2.622-4.841-4.555-6.774-1.932-1.932-4.19-3.45-6.773-4.555-2.584-1.104-5.355-1.657-8.313-1.657H15.5l4.615-4.615zm-8.08 21.659v13.861h11.357v5.008H9.609V143h12.7c.834 0 1.55-.298 2.146-.894.596-.597.895-1.31.895-2.145v-7.781c0-.835-.299-1.55-.895-2.147a2.929 2.929 0 0 0-2.147-.894h-8.227v-5.096H25.35v-4.384z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-10">\n      <path d="M42.315 125.63c0-4.997-1.694-9.235-5.08-12.713-3.388-3.479-7.571-5.218-12.552-5.218h-1.315l4.363 4.363-2.51 2.51-8.787-8.786L25.221 97l2.45 2.45-4.662 4.663h1.375c2.988 0 5.788.557 8.397 1.673 2.61 1.116 4.892 2.65 6.844 4.602 1.953 1.953 3.487 4.234 4.602 6.844 1.116 2.61 1.674 5.41 1.674 8.398zM8.183 142v-19.657H3.176V117.8h9.643V142zm13.63 0c-1.156 0-2.127-.393-2.912-1.178-.778-.778-1.168-1.746-1.168-2.902v-16.04c0-1.156.393-2.127 1.178-2.912.779-.779 1.746-1.168 2.902-1.168h7.696c1.156 0 2.126.392 2.911 1.177.779.78 1.168 1.747 1.168 2.903v16.04c0 1.156-.392 2.127-1.177 2.912-.779.779-1.746 1.168-2.902 1.168zm.556-4.636h6.583v-15.02H22.37z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-30">\n      <path d="M26.047 97l-8.733 8.732 8.733 8.733 2.496-2.494-4.336-4.338h1.307c4.95 0 9.108 1.73 12.474 5.187 3.367 3.458 5.051 7.668 5.051 12.635h3.565c0-2.97-.556-5.751-1.665-8.346-1.109-2.594-2.633-4.862-4.574-6.802-1.94-1.941-4.208-3.466-6.803-4.575-2.594-1.109-5.375-1.664-8.345-1.664H23.85l4.634-4.634zM2.555 117.531v4.688h10.297v5.25H5.873v4.687h6.979v5.156H2.555V142H13.36c1.061 0 1.95-.395 2.668-1.186.718-.79 1.076-1.772 1.076-2.94v-16.218c0-1.168-.358-2.149-1.076-2.94-.717-.79-1.607-1.185-2.668-1.185zm22.482.14c-1.149 0-2.11.39-2.885 1.165-.78.78-1.172 1.744-1.172 2.893v15.943c0 1.149.388 2.11 1.163 2.885.78.78 1.745 1.172 2.894 1.172h7.649c1.148 0 2.11-.388 2.884-1.163.78-.78 1.17-1.745 1.17-2.894v-15.943c0-1.15-.386-2.111-1.16-2.885-.78-.78-1.746-1.172-2.894-1.172zm.553 4.518h6.545v14.93H25.59z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-5">\n      <path d="M29.508 97l-2.431 2.43 4.625 4.625h-1.364c-2.965 0-5.742.554-8.332 1.66-2.589 1.107-4.851 2.629-6.788 4.566-1.937 1.937-3.458 4.2-4.565 6.788-1.107 2.59-1.66 5.367-1.66 8.331h3.557c0-4.957 1.68-9.16 5.04-12.611 3.36-3.45 7.51-5.177 12.451-5.177h1.304l-4.326 4.33 2.49 2.49 8.715-8.716zm-9.783 21.61v13.89h11.382v5.018H19.725V142h12.727a2.93 2.93 0 0 0 2.15-.896 2.93 2.93 0 0 0 .896-2.15v-7.798c0-.837-.299-1.554-.896-2.152a2.93 2.93 0 0 0-2.15-.896h-8.245V123h11.29v-4.392z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-10">\n      <path d="M23.119 97l-2.386 2.383 4.538 4.538h-1.339c-2.908 0-5.633.543-8.173 1.63-2.54 1.085-4.76 2.577-6.66 4.478-1.9 1.9-3.392 4.12-4.478 6.66-1.085 2.54-1.629 5.264-1.629 8.172h3.49c0-4.863 1.648-8.986 4.944-12.372 3.297-3.385 7.368-5.078 12.216-5.078h1.279l-4.245 4.247 2.443 2.442 8.55-8.55zm-9.52 21.45v4.42h4.871V142h4.513v-23.55zm18.136 0c-1.125 0-2.066.377-2.824 1.135-.764.764-1.148 1.709-1.148 2.834v15.612c0 1.124.38 2.066 1.139 2.824.764.764 1.708 1.145 2.833 1.145h7.489c1.125 0 2.066-.378 2.824-1.136.764-.764 1.145-1.709 1.145-2.833v-15.612c0-1.125-.378-2.067-1.136-2.825-.764-.764-1.708-1.145-2.833-1.145zm.54 4.42h6.408v14.617h-6.407z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-30">\n      <path d="M25.549 97l-2.437 2.434 4.634 4.635H26.38c-2.97 0-5.753.555-8.347 1.664-2.594 1.109-4.861 2.633-6.802 4.574-1.94 1.94-3.465 4.207-4.574 6.802-1.109 2.594-1.664 5.377-1.664 8.347h3.565c0-4.967 1.683-9.178 5.05-12.636 3.366-3.458 7.525-5.187 12.475-5.187h1.307l-4.335 4.338 2.495 2.494 8.732-8.732zm-11.553 20.53v4.689h10.297v5.249h-6.978v4.688h6.978v5.156H13.996V142h10.808c1.06 0 1.948-.395 2.666-1.186.718-.79 1.077-1.771 1.077-2.94v-16.217c0-1.169-.36-2.15-1.077-2.94-.718-.79-1.605-1.186-2.666-1.186zm21.174.168c-1.149 0-2.11.389-2.884 1.163-.78.78-1.172 1.745-1.172 2.894v15.942c0 1.15.388 2.11 1.162 2.885.78.78 1.745 1.17 2.894 1.17h7.649c1.149 0 2.11-.386 2.885-1.16.78-.78 1.17-1.746 1.17-2.895v-15.942c0-1.15-.387-2.11-1.161-2.885-.78-.78-1.745-1.172-2.894-1.172zm.552 4.516h6.542v14.931h-6.542z"></path>\n    </symbol>\n    <symbol viewBox="0 0 512 512" id="vjs-icon-audio-description">\n      <g fill-rule="evenodd"><path d="M227.29 381.351V162.993c50.38-1.017 89.108-3.028 117.631 17.126 27.374 19.342 48.734 56.965 44.89 105.325-4.067 51.155-41.335 94.139-89.776 98.475-24.085 2.155-71.972 0-71.972 0s-.84-1.352-.773-2.568m48.755-54.804c31.43 1.26 53.208-16.633 56.495-45.386 4.403-38.51-21.188-63.552-58.041-60.796v103.612c-.036 1.466.575 2.22 1.546 2.57"></path><path d="M383.78 381.328c13.336 3.71 17.387-11.06 23.215-21.408 12.722-22.571 22.294-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.226 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M425.154 381.328c13.336 3.71 17.384-11.061 23.215-21.408 12.721-22.571 22.291-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.511c-.586 3.874 2.226 7.315 3.866 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M466.26 381.328c13.337 3.71 17.385-11.061 23.216-21.408 12.722-22.571 22.292-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.225 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894M4.477 383.005H72.58l18.573-28.484 64.169-.135s.065 19.413.065 28.62h48.756V160.307h-58.816c-5.653 9.537-140.85 222.697-140.85 222.697zm152.667-145.282v71.158l-40.453-.27 40.453-70.888z"></path></g>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-next-item">\n      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-previous-item">\n      <path d="M12 12h4v24h-4zm7 12l17 12V12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-shuffle">\n      <path d="M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cast">\n      <path d="M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-picture-in-picture-enter">\n      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 22 18" id="vjs-icon-picture-in-picture-exit">\n      <path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z"></path>\n      <path fill="none" d="M-1-3h24v24H-1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-facebook">\n      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-linkedin">\n      <path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-twitter">\n      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5T1369.5 1125 1185 1335.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5T285 1033q33 5 61 5 43 0 85-11-112-23-185.5-111.5T172 710v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5T884 653q-8-38-8-74 0-134 94.5-228.5T1199 256q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-tumblr">\n      <path d="M1328 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T787 1564t-95-106-55.5-120-16.5-118V676H452V461q72-26 129-69.5t91-90 58-102 34-99T779 12q1-5 4.5-8.5T791 0h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-pinterest">\n      <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>\n    </symbol>\n  </defs>\n</svg>', "image/svg+xml")).querySelector("parsererror") ? (l.warn("Failed to load SVG Icons. Falling back to Font Icons."), this.options_.experimentalSvgIcons = null) : ((s = i.documentElement).style.display = "none", this.el_.appendChild(s), this.addClass("vjs-svg-icons-enabled"))), this.initChildren(), this.isAudio("audio" === e.nodeName.toLowerCase()), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.el_.setAttribute("role", "region"), this.isAudio() ? this.el_.setAttribute("aria-label", this.localize("Audio Player")) : this.el_.setAttribute("aria-label", this.localize("Video Player")), this.isAudio() && this.addClass("vjs-audio"), ge && this.addClass("vjs-touch-enabled"), c || this.addClass("vjs-workinghover"), b.players[this.id_] = this, M.split(".")[0]);
            this.addClass("vjs-v" + i), this.userActive(!0), this.reportUserActivity(), this.one("play", e => this.listenForUserActivity_(e)), this.on("keydown", e => this.handleKeyDown(e)), this.on("languagechange", e => this.handleLanguagechange(e)), this.breakpoints(this.options_.breakpoints), this.responsive(this.options_.responsive), this.on("ready", () => {
                this.audioPosterMode(this.options_.audioPosterMode), this.audioOnlyMode(this.options_.audioOnlyMode)
            })
        }

        dispose() {
            var e;
            this.trigger("dispose"), this.off("dispose"), p(document, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), p(document, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), b.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), e = this, ps[e.id()] = null, a.names.forEach(e => {
                e = this[a[e].getterName]();
                e && e.off && e.off()
            }), super.dispose({restoreEl: this.options_.restoreEl})
        }

        createEl() {
            let t = this.tag, i,
                e = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player");
            const s = "video-js" === this.tag.tagName.toLowerCase(),
                r = (e ? i = this.el_ = t.parentNode : s || (i = this.el_ = super.createEl("div")), De(t));
            if (s) {
                for (i = this.el_ = t, t = this.tag = document.createElement("video"); i.children.length;) t.appendChild(i.firstChild);
                ke(i, "video-js") || Ce(i, "video-js"), i.appendChild(t), e = this.playerElIngest_ = i, Object.keys(i).forEach(e => {
                    try {
                        t[e] = i[e]
                    } catch (e) {
                    }
                })
            }
            t.setAttribute("tabindex", "-1"), r.tabindex = "-1", oe && ce && (t.setAttribute("role", "application"), r.role = "application"), t.removeAttribute("width"), t.removeAttribute("height"), "width" in r && delete r.width, "height" in r && delete r.height, Object.getOwnPropertyNames(r).forEach(function (e) {
                s && "class" === e || i.setAttribute(e, r[e]), s && t.setAttribute(e, r[e])
            }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", (t.player = i.player = this).addClass("vjs-paused"), !0 !== window.VIDEOJS_NO_DYNAMIC_STYLE && (this.styleEl_ = tt("vjs-styles-dimensions"), n = $e(".vjs-styles-defaults"), (a = $e("head")).insertBefore(this.styleEl_, n ? n.nextSibling : a.firstChild)), this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio), this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
            var n, a, o = t.getElementsByTagName("a");
            for (let e = 0; e < o.length; e++) {
                var l = o.item(e);
                Ce(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
            }
            return t.initNetworkState_ = t.networkState, t.parentNode && !e && t.parentNode.insertBefore(i, t), Ee(t, i), this.children_.unshift(t), this.el_.setAttribute("lang", this.language_), this.el_.setAttribute("translate", "no"), this.el_ = i
        }

        crossOrigin(e) {
            if ("undefined" == typeof e) return this.techGet_("crossOrigin");
            null !== e && "anonymous" !== e && "use-credentials" !== e ? l.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`) : (this.techCall_("setCrossOrigin", e), this.posterImage && this.posterImage.crossOrigin(e))
        }

        width(e) {
            return this.dimension("width", e)
        }

        height(e) {
            return this.dimension("height", e)
        }

        dimension(e, t) {
            var i, s = e + "_";
            if (void 0 === t) return this[s] || 0;
            "" === t || "auto" === t ? (this[s] = void 0, this.updateStyleEl_()) : (i = parseFloat(t), isNaN(i) ? l.error(`Improper value "${t}" supplied for for ` + e) : (this[s] = i, this.updateStyleEl_()))
        }

        fluid(e) {
            if (void 0 === e) return !!this.fluid_;
            var t;
            this.fluid_ = !!e, bt(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_), e ? (this.addClass("vjs-fluid"), this.fill(!1), e = this, t = () => {
                this.on(["playerreset", "resize"], this.boundUpdateStyleEl_)
            }, bt(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t))) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
        }

        fill(e) {
            if (void 0 === e) return !!this.fill_;
            this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
        }

        aspectRatio(e) {
            if (void 0 === e) return this.aspectRatio_;
            if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
            this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
        }

        updateStyleEl_() {
            if (!0 === window.VIDEOJS_NO_DYNAMIC_STYLE) {
                const e = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                    t = "number" == typeof this.height_ ? this.height_ : this.options_.height;
                var r = this.tech_ && this.tech_.el();
                void (r && (0 <= e && (r.width = e), 0 <= t) && (r.height = t))
            } else {
                let e, t, i, s;
                r = (i = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"), r = r[1] / r[0];
                e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / r : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * r, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s), it(this.styleEl_, `
      .${s} {
        width: ${e}px;
        height: ${t}px;
      }

      .${s}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${100 * r}%;
      }
    `)
            }
        }

        loadTech_(e, t) {
            this.tech_ && this.unloadTech_();
            var i = g(e), s = e.charAt(0).toLowerCase() + e.slice(1);
            "Html5" !== i && this.tag && (_.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = i, this.isReady_ = !1;
            let r = this.autoplay();
            const n = {
                source: t,
                autoplay: r = "string" == typeof this.autoplay() || !0 === this.autoplay() && this.options_.normalizeAutoplay ? !1 : r,
                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                playerId: this.id(),
                techId: this.id() + `_${s}_api`,
                playsinline: this.options_.playsinline,
                preload: this.options_.preload,
                loop: this.options_.loop,
                disablePictureInPicture: this.options_.disablePictureInPicture,
                muted: this.options_.muted,
                poster: this.poster(),
                language: this.language(),
                playerElIngest: this.playerElIngest_ || !1,
                "vtt.js": this.options_["vtt.js"],
                canOverridePoster: !!this.options_.techCanOverridePoster,
                enableSourceset: this.options_.enableSourceset
            };
            a.names.forEach(e => {
                e = a[e];
                n[e.getterName] = this[e.privateName]
            }), Object.assign(n, this.options_[i]), Object.assign(n, this.options_[s]), Object.assign(n, this.options_[e.toLowerCase()]), this.tag && (n.tag = this.tag), t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (n.startTime = this.cache_.currentTime);
            s = _.getTech(e);
            if (!s) throw new Error(`No Tech named '${i}' exists! '${i}' should be registered using videojs.registerTech()'`);
            this.tech_ = new s(n), this.tech_.ready(m(this, this.handleTechReady_), !0), Qt(this.textTracksJson_ || [], this.tech_), en.forEach(t => {
                this.on(this.tech_, t, e => this[`handleTech${g(t)}_`](e))
            }), Object.keys(tn).forEach(t => {
                this.on(this.tech_, t, e => {
                    0 === this.tech_.playbackRate() && this.tech_.seeking() ? this.queuedCallbacks_.push({
                        callback: this[`handleTech${tn[t]}_`].bind(this),
                        event: e
                    }) : this[`handleTech${tn[t]}_`](e)
                })
            }), this.on(this.tech_, "loadstart", e => this.handleTechLoadStart_(e)), this.on(this.tech_, "sourceset", e => this.handleTechSourceset_(e)), this.on(this.tech_, "waiting", e => this.handleTechWaiting_(e)), this.on(this.tech_, "ended", e => this.handleTechEnded_(e)), this.on(this.tech_, "seeking", e => this.handleTechSeeking_(e)), this.on(this.tech_, "play", e => this.handleTechPlay_(e)), this.on(this.tech_, "pause", e => this.handleTechPause_(e)), this.on(this.tech_, "durationchange", e => this.handleTechDurationChange_(e)), this.on(this.tech_, "fullscreenchange", (e, t) => this.handleTechFullscreenChange_(e, t)), this.on(this.tech_, "fullscreenerror", (e, t) => this.handleTechFullscreenError_(e, t)), this.on(this.tech_, "enterpictureinpicture", e => this.handleTechEnterPictureInPicture_(e)), this.on(this.tech_, "leavepictureinpicture", e => this.handleTechLeavePictureInPicture_(e)), this.on(this.tech_, "error", e => this.handleTechError_(e)), this.on(this.tech_, "posterchange", e => this.handleTechPosterChange_(e)), this.on(this.tech_, "textdata", e => this.handleTechTextData_(e)), this.on(this.tech_, "ratechange", e => this.handleTechRateChange_(e)), this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === i && this.tag || Ee(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
        }

        unloadTech_() {
            a.names.forEach(e => {
                e = a[e];
                this[e.privateName] = this[e.getterName]()
            }), this.textTracksJson_ = Yt(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
        }

        tech(e) {
            return void 0 === e && l.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n"), this.tech_
        }

        addTechControlsListeners_() {
            this.removeTechControlsListeners_(), this.on(this.tech_, "click", this.boundHandleTechClick_), this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_), this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.on(this.tech_, "tap", this.boundHandleTechTap_)
        }

        removeTechControlsListeners_() {
            this.off(this.tech_, "tap", this.boundHandleTechTap_), this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_), this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_), this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_), this.off(this.tech_, "click", this.boundHandleTechClick_), this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_)
        }

        handleTechReady_() {
            this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
        }

        handleTechLoadStart_() {
            this.removeClass("vjs-ended", "vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() && this.hasStarted(!1), this.trigger("loadstart"), this.manualAutoplay_(!0 === this.autoplay() && this.options_.normalizeAutoplay ? "play" : this.autoplay())
        }

        manualAutoplay_(t) {
            if (this.tech_ && "string" == typeof t) {
                var i = () => {
                    const e = this.muted(), t = (this.muted(!0), () => {
                        this.muted(e)
                    });
                    this.playTerminatedQueue_.push(t);
                    var i = this.play();
                    if (Gt(i)) return i.catch(e => {
                        throw t(), new Error("Rejection at manualAutoplay. Restoring muted value. " + (e || ""))
                    })
                };
                let e;
                if ("any" !== t || this.muted() ? e = "muted" !== t || this.muted() ? this.play() : i() : Gt(e = this.play()) && (e = e.catch(i)), Gt(e)) return e.then(() => {
                    this.trigger({type: "autoplay-success", autoplay: t})
                }).catch(() => {
                    this.trigger({type: "autoplay-failure", autoplay: t})
                })
            }
        }

        updateSourceCaches_(e = "") {
            let t = e, i = "";
            "string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = ((e, t) => {
                if (!t) return "";
                if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                var i = e.cache_.sources.filter(e => e.src === t);
                if (i.length) return i[0].type;
                var s = e.$$("source");
                for (let e = 0; e < s.length; e++) {
                    var r = s[e];
                    if (r.type && r.src && r.src === t) return r.type
                }
                return Es(t)
            })(this, t)), this.cache_.source = d({}, e, {src: t, type: i});
            var e = this.cache_.sources.filter(e => e.src && e.src === t), s = [], r = this.$$("source"), n = [];
            for (let e = 0; e < r.length; e++) {
                var a = De(r[e]);
                s.push(a), a.src && a.src === t && n.push(a.src)
            }
            n.length && !e.length ? this.cache_.sources = s : e.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
        }

        handleTechSourceset_(t) {
            if (!this.changingSrc_) {
                let e = e => this.updateSourceCaches_(e);
                var i = this.currentSource().src, s = t.src;
                (e = !i || /^blob:/.test(i) || !/^blob:/.test(s) || this.lastSource_ && (this.lastSource_.tech === s || this.lastSource_.player === i) ? e : () => {
                })(s), t.src || this.tech_.any(["sourceset", "loadstart"], e => {
                    "sourceset" !== e.type && (e = this.techGet_("currentSrc"), this.lastSource_.tech = e, this.updateSourceCaches_(e))
                })
            }
            this.lastSource_ = {player: this.currentSource().src, tech: t.src}, this.trigger({
                src: t.src,
                type: "sourceset"
            })
        }

        hasStarted(e) {
            if (void 0 === e) return this.hasStarted_;
            e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? this.addClass("vjs-has-started") : this.removeClass("vjs-has-started"))
        }

        handleTechPlay_() {
            this.removeClass("vjs-ended", "vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
        }

        handleTechRateChange_() {
            0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(e => e.callback(e.event)), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
        }

        handleTechWaiting_() {
            this.addClass("vjs-waiting"), this.trigger("waiting");
            const e = this.currentTime(), t = () => {
                e !== this.currentTime() && (this.removeClass("vjs-waiting"), this.off("timeupdate", t))
            };
            this.on("timeupdate", t)
        }

        handleTechCanPlay_() {
            this.removeClass("vjs-waiting"), this.trigger("canplay")
        }

        handleTechCanPlayThrough_() {
            this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
        }

        handleTechPlaying_() {
            this.removeClass("vjs-waiting"), this.trigger("playing")
        }

        handleTechSeeking_() {
            this.addClass("vjs-seeking"), this.trigger("seeking")
        }

        handleTechSeeked_() {
            this.removeClass("vjs-seeking", "vjs-ended"), this.trigger("seeked")
        }

        handleTechPause_() {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
        }

        handleTechEnded_() {
            this.addClass("vjs-ended"), this.removeClass("vjs-waiting"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
        }

        handleTechDurationChange_() {
            this.duration(this.techGet_("duration"))
        }

        handleTechClick_(e) {
            !this.controls_ || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.click && !1 === this.options_.userActions.click || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.click ? this.options_.userActions.click.call(this, e) : this.paused() ? Xt(this.play()) : this.pause())
        }

        handleTechDoubleClick_(t) {
            !this.controls_ || Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), e => e.contains(t.target)) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, t) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen())
        }

        handleTechTap_() {
            this.userActive(!this.userActive())
        }

        handleTechTouchStart_() {
            this.userWasActive = this.userActive()
        }

        handleTechTouchMove_() {
            this.userWasActive && this.reportUserActivity()
        }

        handleTechTouchEnd_(e) {
            e.cancelable && e.preventDefault()
        }

        toggleFullscreenClass_() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
        }

        documentFullscreenChange_(t) {
            t = t.target.player;
            if (!t || t === this) {
                t = this.el();
                let e = document[this.fsApi_.fullscreenElement] === t;
                !e && t.matches && (e = t.matches(":" + this.fsApi_.fullscreen)), this.isFullscreen(e)
            }
        }

        handleTechFullscreenChange_(e, t) {
            t && (t.nativeIOSFullscreen && (this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", () => {
                this.removeClass("vjs-ios-native-fs")
            })), this.isFullscreen(t.isFullscreen))
        }

        handleTechFullscreenError_(e, t) {
            this.trigger("fullscreenerror", t)
        }

        togglePictureInPictureClass_() {
            this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
        }

        handleTechEnterPictureInPicture_(e) {
            this.isInPictureInPicture(!0)
        }

        handleTechLeavePictureInPicture_(e) {
            this.isInPictureInPicture(!1)
        }

        handleTechError_() {
            var e = this.tech_.error();
            e && this.error(e)
        }

        handleTechTextData_() {
            let e = 1 < arguments.length ? arguments[1] : null;
            this.trigger("textdata", e)
        }

        getCache() {
            return this.cache_
        }

        resetCache_() {
            this.cache_ = {
                currentTime: 0,
                initTime: 0,
                inactivityTimeout: this.options_.inactivityTimeout,
                duration: NaN,
                lastVolume: 1,
                lastPlaybackRate: this.defaultPlaybackRate(),
                media: null,
                src: "",
                source: {},
                sources: [],
                playbackRates: [],
                volume: 1
            }
        }

        techCall_(t, i) {
            this.ready(function () {
                if (t in _s) return e = this.middleware_, this.tech_[t](e.reduce(bs(t), i));
                if (t in vs) return fs(this.middleware_, this.tech_, t, i);
                var e;
                try {
                    this.tech_ && this.tech_[t](i)
                } catch (e) {
                    throw l(e), e
                }
            }, !0)
        }

        techGet_(t) {
            if (this.tech_ && this.tech_.isReady_) {
                if (t in ys) return e = this.middleware_, i = this.tech_, e.reduceRight(bs(t), i[t]());
                if (t in vs) return fs(this.middleware_, this.tech_, t);
                var e, i;
                try {
                    return this.tech_[t]()
                } catch (e) {
                    throw void 0 === this.tech_[t] ? l(`Video.js: ${t} method not defined for ${this.techName_} playback technology.`, e) : "TypeError" === e.name ? (l(`Video.js: ${t} unavailable on ${this.techName_} playback technology element.`, e), this.tech_.isReady_ = !1) : l(e), e
                }
            }
        }

        play() {
            return new Promise(e => {
                this.play_(e)
            })
        }

        play_(e = Xt) {
            this.playCallbacks_.push(e);
            var t, e = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc())), i = Boolean(ye || c);
            this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), this.isReady_ && e ? (t = this.techGet_("play"), i && this.hasClass("vjs-ended") && this.resetProgressBar_(), null === t ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(t)) : (this.waitToPlay_ = e => {
                this.play_()
            }, this.one(["ready", "loadstart"], this.waitToPlay_), !e && i && this.load())
        }

        runPlayTerminatedQueue_() {
            var e = this.playTerminatedQueue_.slice(0);
            this.playTerminatedQueue_ = [], e.forEach(function (e) {
                e()
            })
        }

        runPlayCallbacks_(t) {
            var e = this.playCallbacks_.slice(0);
            this.playCallbacks_ = [], this.playTerminatedQueue_ = [], e.forEach(function (e) {
                e(t)
            })
        }

        pause() {
            this.techCall_("pause")
        }

        paused() {
            return !1 !== this.techGet_("paused")
        }

        played() {
            return this.techGet_("played") || Bt(0, 0)
        }

        scrubbing(e) {
            if ("undefined" == typeof e) return this.scrubbing_;
            this.scrubbing_ = !!e, this.techCall_("setScrubbing", this.scrubbing_), e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
        }

        currentTime(e) {
            if (void 0 === e) return this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime;
            e < 0 && (e = 0), this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", e), this.cache_.initTime = 0, isFinite(e) && (this.cache_.currentTime = Number(e))) : (this.cache_.initTime = e, this.off("canplay", this.boundApplyInitTime_), this.one("canplay", this.boundApplyInitTime_))
        }

        applyInitTime_() {
            this.currentTime(this.cache_.initTime)
        }

        duration(e) {
            if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
            (e = (e = parseFloat(e)) < 0 ? 1 / 0 : e) !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"))
        }

        remainingTime() {
            return this.duration() - this.currentTime()
        }

        remainingTimeDisplay() {
            return Math.floor(this.duration()) - Math.floor(this.currentTime())
        }

        buffered() {
            let e = this.techGet_("buffered");
            return e = e && e.length ? e : Bt(0, 0)
        }

        bufferedPercent() {
            return $t(this.buffered(), this.duration())
        }

        bufferedEnd() {
            var e = this.buffered(), t = this.duration();
            let i = e.end(e.length - 1);
            return i = i > t ? t : i
        }

        volume(e) {
            let t;
            if (void 0 === e) return t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t;
            t = Math.max(0, Math.min(1, e)), this.cache_.volume = t, this.techCall_("setVolume", t), 0 < t && this.lastVolume_(t)
        }

        muted(e) {
            if (void 0 === e) return this.techGet_("muted") || !1;
            this.techCall_("setMuted", e)
        }

        defaultMuted(e) {
            return void 0 !== e && this.techCall_("setDefaultMuted", e), this.techGet_("defaultMuted") || !1
        }

        lastVolume_(e) {
            if (void 0 === e || 0 === e) return this.cache_.lastVolume;
            this.cache_.lastVolume = e
        }

        supportsFullScreen() {
            return this.techGet_("supportsFullScreen") || !1
        }

        isFullscreen(e) {
            var t;
            if (void 0 === e) return this.isFullscreen_;
            t = this.isFullscreen_, this.isFullscreen_ = Boolean(e), this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange"), this.toggleFullscreenClass_()
        }

        requestFullscreen(a) {
            this.isInPictureInPicture() && this.exitPictureInPicture();
            const o = this;
            return new Promise((e, i) => {
                function s() {
                    o.off("fullscreenerror", r), o.off("fullscreenchange", t)
                }

                function t() {
                    s(), e()
                }

                function r(e, t) {
                    s(), i(t)
                }

                o.one("fullscreenchange", t), o.one("fullscreenerror", r);
                var n = o.requestFullscreenHelper_(a);
                n && (n.then(s, s), n.then(e, i))
            })
        }

        requestFullscreenHelper_(e) {
            let t;
            if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 !== e && (t = e)), this.fsApi_.requestFullscreen) return (e = this.el_[this.fsApi_.requestFullscreen](t)) && e.then(() => this.isFullscreen(!0), () => this.isFullscreen(!1)), e;
            this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow()
        }

        exitFullscreen() {
            const a = this;
            return new Promise((e, i) => {
                function s() {
                    a.off("fullscreenerror", r), a.off("fullscreenchange", t)
                }

                function t() {
                    s(), e()
                }

                function r(e, t) {
                    s(), i(t)
                }

                a.one("fullscreenchange", t), a.one("fullscreenerror", r);
                var n = a.exitFullscreenHelper_();
                n && (n.then(s, s), n.then(e, i))
            })
        }

        exitFullscreenHelper_() {
            var e;
            if (this.fsApi_.requestFullscreen) return (e = document[this.fsApi_.exitFullscreen]()) && Xt(e.then(() => this.isFullscreen(!1))), e;
            this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow()
        }

        enterFullWindow() {
            this.isFullscreen(!0), this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, dt(document, "keydown", this.boundFullWindowOnEscKey_), document.documentElement.style.overflow = "hidden", Ce(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
        }

        fullWindowOnEscKey(e) {
            r.isEventKey(e, "Esc") && !0 === this.isFullscreen() && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen())
        }

        exitFullWindow() {
            this.isFullscreen(!1), this.isFullWindow = !1, p(document, "keydown", this.boundFullWindowOnEscKey_), document.documentElement.style.overflow = this.docOrigOverflow, xe(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
        }

        disablePictureInPicture(e) {
            if (void 0 === e) return this.techGet_("disablePictureInPicture");
            this.techCall_("setDisablePictureInPicture", e), this.options_.disablePictureInPicture = e, this.trigger("disablepictureinpicturechanged")
        }

        isInPictureInPicture(e) {
            if (void 0 === e) return !!this.isInPictureInPicture_;
            this.isInPictureInPicture_ = !!e, this.togglePictureInPictureClass_()
        }

        requestPictureInPicture() {
            if (this.options_.enableDocumentPictureInPicture && window.documentPictureInPicture) {
                const t = document.createElement(this.el().tagName);
                return t.classList = this.el().classList, t.classList.add("vjs-pip-container"), this.posterImage && t.appendChild(this.posterImage.el().cloneNode(!0)), this.titleBar && t.appendChild(this.titleBar.el().cloneNode(!0)), t.appendChild(o("p", {className: "vjs-pip-text"}, {}, this.localize("Playing in picture-in-picture"))), window.documentPictureInPicture.requestWindow({
                    width: this.videoWidth(),
                    height: this.videoHeight()
                }).then(e => (Xe(e), this.el_.parentNode.insertBefore(t, this.el_), e.document.body.appendChild(this.el_), e.document.body.classList.add("vjs-pip-window"), this.player_.isInPictureInPicture(!0), this.player_.trigger("enterpictureinpicture"), e.addEventListener("pagehide", e => {
                    e = e.target.querySelector(".video-js");
                    t.parentNode.replaceChild(e, t), this.player_.isInPictureInPicture(!1), this.player_.trigger("leavepictureinpicture")
                }), e))
            }
            return "pictureInPictureEnabled" in document && !1 === this.disablePictureInPicture() ? this.techGet_("requestPictureInPicture") : Promise.reject("No PiP mode is available")
        }

        exitPictureInPicture() {
            return window.documentPictureInPicture && window.documentPictureInPicture.window ? (window.documentPictureInPicture.window.close(), Promise.resolve()) : "pictureInPictureEnabled" in document ? document.exitPictureInPicture() : void 0
        }

        handleKeyDown(e) {
            var t, i, s = this.options_["userActions"];
            s && s.hotkeys && (t = this.el_.ownerDocument.activeElement, i = t.tagName.toLowerCase(), t.isContentEditable || ("input" === i ? -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(t.type) : -1 !== ["textarea"].indexOf(i)) || ("function" == typeof s.hotkeys ? s.hotkeys.call(this, e) : this.handleHotkeys(e)))
        }

        handleHotkeys(e) {
            var {
                fullscreenKey: t = e => r.isEventKey(e, "f"),
                muteKey: i = e => r.isEventKey(e, "m"),
                playPauseKey: s = e => r.isEventKey(e, "k") || r.isEventKey(e, "Space")
            } = this.options_.userActions ? this.options_.userActions.hotkeys : {};
            t.call(this, e) ? (e.preventDefault(), e.stopPropagation(), t = f.getComponent("FullscreenToggle"), !1 !== document[this.fsApi_.fullscreenEnabled] && t.prototype.handleClick.call(this, e)) : i.call(this, e) ? (e.preventDefault(), e.stopPropagation(), f.getComponent("MuteToggle").prototype.handleClick.call(this, e)) : s.call(this, e) && (e.preventDefault(), e.stopPropagation(), f.getComponent("PlayToggle").prototype.handleClick.call(this, e))
        }

        canPlayType(s) {
            var r;
            for (let t = 0, i = this.options_.techOrder; t < i.length; t++) {
                var n = i[t];
                let e = _.getTech(n);
                if (e = e || f.getComponent(n)) {
                    if (e.isSupported() && (r = e.canPlayType(s))) return r
                } else l.error(`The "${n}" tech is undefined. Skipped browser support check for that tech.`)
            }
            return ""
        }

        selectSource(e) {
            function t(e, i, s) {
                let r;
                return e.some(t => i.some(e => {
                    if (r = s(t, e)) return !0
                })), r
            }

            var i = this.options_.techOrder.map(e => [e, _.getTech(e)]).filter(([e, t]) => t ? t.isSupported() : (l.error(`The "${e}" tech is undefined. Skipped browser support check for that tech.`), !1));
            let s;
            var r, n = ([e, t], i) => {
                if (t.canPlaySource(i, this.options_[e.toLowerCase()])) return {source: i, tech: e}
            };
            return (s = this.options_.sourceOrder ? t(e, i, (r = n, (e, t) => r(t, e))) : t(i, e, n)) || !1
        }

        handleSrc_(e, s) {
            if ("undefined" == typeof e) return this.cache_.src || "";
            this.resetRetryOnError_ && this.resetRetryOnError_();
            const r = ws(e);
            if (r.length) {
                if (this.changingSrc_ = !0, s || (this.cache_.sources = r), this.updateSourceCaches_(r[0]), gs(this, r[0], (e, t) => {
                    var i;
                    if (this.middleware_ = t, s || (this.cache_.sources = r), this.updateSourceCaches_(e), this.src_(e)) return 1 < r.length ? this.handleSrc_(r.slice(1)) : (this.changingSrc_ = !1, this.setTimeout(function () {
                        this.error({code: 4, message: this.options_.notSupportedMessage})
                    }, 0), void this.triggerReady());
                    i = this.tech_, t.forEach(e => e.setTech && e.setTech(i))
                }), 1 < r.length) {
                    const t = () => {
                        this.error(null), this.handleSrc_(r.slice(1), !0)
                    }, i = () => {
                        this.off("error", t)
                    };
                    this.one("error", t), this.one("playing", i), this.resetRetryOnError_ = () => {
                        this.off("error", t), this.off("playing", i)
                    }
                }
            } else this.setTimeout(function () {
                this.error({code: 4, message: this.options_.notSupportedMessage})
            }, 0)
        }

        src(e) {
            return this.handleSrc_(e, !1)
        }

        src_(e) {
            var t = this.selectSource([e]);
            return !t || (Pt(t.tech, this.techName_) ? this.ready(function () {
                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
            }, !0) : (this.changingSrc_ = !0, this.loadTech_(t.tech, t.source), this.tech_.ready(() => {
                this.changingSrc_ = !1
            })), !1)
        }

        load() {
            this.tech_ && this.tech_.vhs ? this.src(this.currentSource()) : this.techCall_("load")
        }

        reset() {
            this.paused() ? this.doReset_() : Xt(this.play().then(() => this.doReset_()))
        }

        doReset_() {
            this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), bt(this) && this.trigger("playerreset")
        }

        resetControlBarUI_() {
            this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
        }

        resetProgressBar_() {
            this.currentTime(0);
            var {
                currentTimeDisplay: e,
                durationDisplay: t,
                progressControl: i,
                remainingTimeDisplay: s
            } = this.controlBar || {}, i = (i || {})["seekBar"];
            e && e.updateContent(), t && t.updateContent(), s && s.updateContent(), i && (i.update(), i.loadProgressBar) && i.loadProgressBar.update()
        }

        resetPlaybackRate_() {
            this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
        }

        resetVolumeBar_() {
            this.volume(1), this.trigger("volumechange")
        }

        currentSources() {
            var e = this.currentSource(), t = [];
            return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
        }

        currentSource() {
            return this.cache_.source || {}
        }

        currentSrc() {
            return this.currentSource() && this.currentSource().src || ""
        }

        currentType() {
            return this.currentSource() && this.currentSource().type || ""
        }

        preload(e) {
            if (void 0 === e) return this.techGet_("preload");
            this.techCall_("setPreload", e), this.options_.preload = e
        }

        autoplay(e) {
            if (void 0 === e) return this.options_.autoplay || !1;
            let t;
            "string" == typeof e && /(any|play|muted)/.test(e) || !0 === e && this.options_.normalizeAutoplay ? (this.options_.autoplay = e, this.manualAutoplay_("string" == typeof e ? e : "play"), t = !1) : this.options_.autoplay = !!e, t = "undefined" == typeof t ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t)
        }

        playsinline(e) {
            return void 0 !== e && (this.techCall_("setPlaysinline", e), this.options_.playsinline = e), this.techGet_("playsinline")
        }

        loop(e) {
            if (void 0 === e) return this.techGet_("loop");
            this.techCall_("setLoop", e), this.options_.loop = e
        }

        poster(e) {
            if (void 0 === e) return this.poster_;
            (e = e || "") !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
        }

        handleTechPosterChange_() {
            var e;
            (!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster && (e = this.tech_.poster() || "") !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
        }

        controls(e) {
            if (void 0 === e) return !!this.controls_;
            this.controls_ !== (e = !!e) && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
        }

        usingNativeControls(e) {
            if (void 0 === e) return !!this.usingNativeControls_;
            this.usingNativeControls_ !== (e = !!e) && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
        }

        error(t) {
            if (void 0 === t) return this.error_ || null;
            if (B("beforeerror").forEach(e => {
                e = e(this, t);
                K(e) && !Array.isArray(e) || "string" == typeof e || "number" == typeof e || null === e ? t = e : this.log.error("please return a value that MediaError expects in beforeerror hooks")
            }), this.options_.suppressNotSupportedError && t && 4 === t.code) {
                const e = function () {
                    this.error(t)
                };
                this.options_.suppressNotSupportedError = !1, this.any(["click", "touchstart"], e), void this.one("loadstart", function () {
                    this.off(["click", "touchstart"], e)
                })
            } else null === t ? (this.error_ = null, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close()) : (this.error_ = new i(t), this.addClass("vjs-error"), l.error(`(CODE:${this.error_.code} ${i.errorTypes[this.error_.code]})`, this.error_.message, this.error_), this.trigger("error"), B("error").forEach(e => e(this, this.error_)))
        }

        reportUserActivity(e) {
            this.userActivity_ = !0
        }

        userActive(e) {
            if (void 0 === e) return this.userActive_;
            (e = !!e) !== this.userActive_ && (this.userActive_ = e, this.userActive_ ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.tech_ && this.tech_.one("mousemove", function (e) {
                e.stopPropagation(), e.preventDefault()
            }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")))
        }

        listenForUserActivity_() {
            let t, i, s;
            const r = m(this, this.reportUserActivity);

            function e(e) {
                r(), this.clearInterval(t)
            }

            this.on("mousedown", function () {
                r(), this.clearInterval(t), t = this.setInterval(r, 250)
            }), this.on("mousemove", function (e) {
                e.screenX === i && e.screenY === s || (i = e.screenX, s = e.screenY, r())
            }), this.on("mouseup", e), this.on("mouseleave", e);
            var n = this.getChild("controlBar");
            !n || c || ie || (n.on("mouseenter", function (e) {
                0 !== this.player().options_.inactivityTimeout && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout), this.player().options_.inactivityTimeout = 0
            }), n.on("mouseleave", function (e) {
                this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
            })), this.on("keydown", r), this.on("keyup", r);
            let a;
            this.setInterval(function () {
                var e;
                this.userActivity_ && (this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a), (e = this.options_.inactivityTimeout) <= 0 || (a = this.setTimeout(function () {
                    this.userActivity_ || this.userActive(!1)
                }, e)))
            }, 250)
        }

        playbackRate(e) {
            if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
            this.techCall_("setPlaybackRate", e)
        }

        defaultPlaybackRate(e) {
            return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
        }

        isAudio(e) {
            if (void 0 === e) return !!this.isAudio_;
            this.isAudio_ = !!e
        }

        enableAudioOnlyUI_() {
            this.addClass("vjs-audio-only-mode");
            var e = this.children();
            const t = this.getChild("ControlBar");
            var i = t && t.currentHeight();
            e.forEach(e => {
                e !== t && e.el_ && !e.hasClass("vjs-hidden") && (e.hide(), this.audioOnlyCache_.hiddenChildren.push(e))
            }), this.audioOnlyCache_.playerHeight = this.currentHeight(), this.height(i), this.trigger("audioonlymodechange")
        }

        disableAudioOnlyUI_() {
            this.removeClass("vjs-audio-only-mode"), this.audioOnlyCache_.hiddenChildren.forEach(e => e.show()), this.height(this.audioOnlyCache_.playerHeight), this.trigger("audioonlymodechange")
        }

        audioOnlyMode(e) {
            return "boolean" != typeof e || e === this.audioOnlyMode_ ? this.audioOnlyMode_ : (this.audioOnlyMode_ = e) ? (e = [], this.isInPictureInPicture() && e.push(this.exitPictureInPicture()), this.isFullscreen() && e.push(this.exitFullscreen()), this.audioPosterMode() && e.push(this.audioPosterMode(!1)), Promise.all(e).then(() => this.enableAudioOnlyUI_())) : Promise.resolve().then(() => this.disableAudioOnlyUI_())
        }

        enablePosterModeUI_() {
            (this.tech_ && this.tech_).hide(), this.addClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange")
        }

        disablePosterModeUI_() {
            (this.tech_ && this.tech_).show(), this.removeClass("vjs-audio-poster-mode"), this.trigger("audiopostermodechange")
        }

        audioPosterMode(e) {
            return "boolean" != typeof e || e === this.audioPosterMode_ ? this.audioPosterMode_ : (this.audioPosterMode_ = e) ? (this.audioOnlyMode() ? this.audioOnlyMode(!1) : Promise.resolve()).then(() => {
                this.enablePosterModeUI_()
            }) : Promise.resolve().then(() => {
                this.disablePosterModeUI_()
            })
        }

        addTextTrack(e, t, i) {
            if (this.tech_) return this.tech_.addTextTrack(e, t, i)
        }

        addRemoteTextTrack(e, t) {
            if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
        }

        removeRemoteTextTrack(e = {}) {
            let t = e["track"];
            if (t = t || e, this.tech_) return this.tech_.removeRemoteTextTrack(t)
        }

        getVideoPlaybackQuality() {
            return this.techGet_("getVideoPlaybackQuality")
        }

        videoWidth() {
            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
        }

        videoHeight() {
            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
        }

        language(e) {
            if (void 0 === e) return this.language_;
            this.language_ !== String(e).toLowerCase() && (this.language_ = String(e).toLowerCase(), bt(this)) && this.trigger("languagechange")
        }

        languages() {
            return d(b.prototype.options_.languages, this.languages_)
        }

        toJSON() {
            var t = d(this.options_), i = t.tracks;
            t.tracks = [];
            for (let e = 0; e < i.length; e++) {
                var s = i[e];
                (s = d(s)).player = void 0, t.tracks[e] = s
            }
            return t
        }

        createModal(e, t) {
            (t = t || {}).content = e || "";
            const i = new Zt(this, t);
            return this.addChild(i), i.on("dispose", () => {
                this.removeChild(i)
            }), i.open(), i
        }

        updateCurrentBreakpoint_() {
            if (this.responsive()) {
                var t = this.currentBreakpoint(), i = this.currentWidth();
                for (let e = 0; e < sn.length; e++) {
                    var s = sn[e];
                    if (i <= this.breakpoints_[s]) {
                        if (t === s) return;
                        t && this.removeClass(rn[t]), this.addClass(rn[s]), this.breakpoint_ = s;
                        break
                    }
                }
            }
        }

        removeCurrentBreakpoint_() {
            var e = this.currentBreakpointClass();
            this.breakpoint_ = "", e && this.removeClass(e)
        }

        breakpoints(e) {
            return void 0 !== e && (this.breakpoint_ = "", this.breakpoints_ = Object.assign({}, nn, e), this.updateCurrentBreakpoint_()), Object.assign(this.breakpoints_)
        }

        responsive(e) {
            return void 0 === e ? this.responsive_ : (e = Boolean(e)) !== this.responsive_ ? ((this.responsive_ = e) ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0
        }

        currentBreakpoint() {
            return this.breakpoint_
        }

        currentBreakpointClass() {
            return rn[this.breakpoint_] || ""
        }

        loadMedia(e, t) {
            var i, s, r, n, a, o, l;
            e && "object" == typeof e && (i = this.crossOrigin(), {
                artist: e,
                artwork: s,
                description: r,
                poster: n,
                src: a,
                textTracks: o,
                title: l
            } = (this.reset(), this.cache_.media = d(e), this.cache_.media), !s && n && (this.cache_.media.artwork = [{
                src: n,
                type: Es(n)
            }]), i && this.crossOrigin(i), a && this.src(a), n && this.poster(n), Array.isArray(o) && o.forEach(e => this.addRemoteTextTrack(e, !1)), this.titleBar && this.titleBar.update({
                title: l,
                description: r || e || ""
            }), this.ready(t))
        }

        getMedia() {
            var e, t;
            return this.cache_.media ? d(this.cache_.media) : (e = this.poster(), t = {
                src: this.currentSources(),
                textTracks: Array.prototype.map.call(this.remoteTextTracks(), e => ({
                    kind: e.kind,
                    label: e.label,
                    language: e.language,
                    src: e.src
                }))
            }, e && (t.poster = e, t.artwork = [{src: t.poster, type: Es(t.poster)}]), t)
        }

        static getTagSettings(e) {
            var t, i = {sources: [], tracks: []}, s = De(e), r = s["data-setup"];
            if (ke(e, "vjs-fill") && (s.fill = !0), ke(e, "vjs-fluid") && (s.fluid = !0), null !== r && ([r, t] = Wt(r || "{}"), r && l.error(r), Object.assign(s, t)), Object.assign(i, s), e.hasChildNodes()) {
                var n = e.childNodes;
                for (let e = 0, t = n.length; e < t; e++) {
                    var a = n[e], o = a.nodeName.toLowerCase();
                    "source" === o ? i.sources.push(De(a)) : "track" === o && i.tracks.push(De(a))
                }
            }
            return i
        }

        debug(e) {
            if (void 0 === e) return this.debugEnabled_;
            e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = !0) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = !1)
        }

        playbackRates(e) {
            if (void 0 === e) return this.cache_.playbackRates;
            Array.isArray(e) && e.every(e => "number" == typeof e) && (this.cache_.playbackRates = e, this.trigger("playbackrateschange"))
        }
    }

    a.names.forEach(function (e) {
        const t = a[e];
        b.prototype[t.getterName] = function () {
            return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
        }
    }), b.prototype.crossorigin = b.prototype.crossOrigin, b.players = {};
    Mr = window.navigator;
    b.prototype.options_ = {
        techOrder: _.defaultTechOrder_,
        html5: {},
        enableSourceset: !0,
        inactivityTimeout: 2e3,
        playbackRates: [],
        liveui: !1,
        children: ["mediaLoader", "posterImage", "titleBar", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
        language: Mr && (Mr.languages && Mr.languages[0] || Mr.userLanguage || Mr.language) || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this media.",
        normalizeAutoplay: !1,
        fullscreen: {options: {navigationUI: "hide"}},
        breakpoints: {},
        responsive: !1,
        audioOnlyMode: !1,
        audioPosterMode: !1
    }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (e) {
        b.prototype[e] = function () {
            return this.techGet_(e)
        }
    }), en.forEach(function (e) {
        b.prototype[`handleTech${g(e)}_`] = function () {
            return this.trigger(e)
        }
    }), f.registerComponent("Player", b);

    function an(t, i) {
        function s() {
            pn(this, {name: t, plugin: i, instance: null}, !0);
            var e = i.apply(this, arguments);
            return cn(this, t), pn(this, {name: t, plugin: i, instance: e}), e
        }

        return Object.keys(i).forEach(function (e) {
            s[e] = i[e]
        }), s
    }

    const on = "plugin", ln = "activePlugins_", dn = {}, hn = e => dn.hasOwnProperty(e),
        un = e => hn(e) ? dn[e] : void 0, cn = (e, t) => {
            e[ln] = e[ln] || {}, e[ln][t] = !0
        }, pn = (e, t, i) => {
            i = (i ? "before" : "") + "pluginsetup";
            e.trigger(i, t), e.trigger(i + ":" + t.name, t)
        }, mn = (i, s) => (s.prototype.name = i, function (...e) {
            pn(this, {name: i, plugin: s, instance: null}, !0);
            const t = new s(this, ...e);
            return this[i] = () => t, pn(this, t.getEventHash()), t
        });

    class gn {
        constructor(e) {
            if (this.constructor === gn) throw new Error("Plugin must be sub-classed; not directly instantiated.");
            this.player = e, this.log || (this.log = this.player.log.createLogger(this.name)), It(this), delete this.trigger, Dt(this, this.constructor.defaultState), cn(e, this.name), this.dispose = this.dispose.bind(this), e.on("dispose", this.dispose)
        }

        version() {
            return this.constructor.VERSION
        }

        getEventHash(e = {}) {
            return e.name = this.name, e.plugin = this.constructor, e.instance = this, e
        }

        trigger(e, t = {}) {
            return ht(this.eventBusEl_, e, this.getEventHash(t))
        }

        handleStateChanged(e) {
        }

        dispose() {
            var {name: e, player: t} = this;
            this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[ln][e] = !1, this.player = this.state = null, t[e] = mn(e, dn[e])
        }

        static isBasic(e) {
            e = "string" == typeof e ? un(e) : e;
            return "function" == typeof e && !gn.prototype.isPrototypeOf(e.prototype)
        }

        static registerPlugin(e, t) {
            if ("string" != typeof e) throw new Error(`Illegal plugin name, "${e}", must be a string, was ${typeof e}.`);
            if (hn(e)) l.warn(`A plugin named "${e}" already exists. You may want to avoid re-registering plugins!`); else if (b.prototype.hasOwnProperty(e)) throw new Error(`Illegal plugin name, "${e}", cannot share a name with an existing player method!`);
            if ("function" != typeof t) throw new Error(`Illegal plugin for "${e}", must be a function, was ${typeof t}.`);
            return dn[e] = t, e !== on && (gn.isBasic(t) ? b.prototype[e] = an(e, t) : b.prototype[e] = mn(e, t)), t
        }

        static deregisterPlugin(e) {
            if (e === on) throw new Error("Cannot de-register base plugin.");
            hn(e) && (delete dn[e], delete b.prototype[e])
        }

        static getPlugins(e = Object.keys(dn)) {
            let i;
            return e.forEach(e => {
                var t = un(e);
                t && ((i = i || {})[e] = t)
            }), i
        }

        static getPluginVersion(e) {
            e = un(e);
            return e && e.VERSION || ""
        }
    }

    function fn(e, i, s, r) {
        {
            var n = i + ` is deprecated and will be removed in ${e}.0; please use ${s} instead.`, a = r;
            let t = !1;
            return function (...e) {
                return t || l.warn(n), t = !0, a.apply(this, e)
            }
        }
    }

    gn.getPlugin = un, gn.BASE_PLUGIN_NAME = on, gn.registerPlugin(on, gn), b.prototype.usingPlugin = function (e) {
        return !!this[ln] && !0 === this[ln][e]
    }, b.prototype.hasPlugin = function (e) {
        return !!hn(e)
    };
    const yn = e => 0 === e.indexOf("#") ? e.slice(1) : e;

    function T(e, t, i) {
        let s = T.getPlayer(e);
        if (s) t && l.warn(`Player "${e}" is already initialised. Options will not be applied.`), i && s.ready(i); else {
            const r = "string" == typeof e ? $e("#" + yn(e)) : e;
            if (!be(r)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
            e = "getRootNode" in r && r.getRootNode() instanceof window.ShadowRoot ? r.getRootNode() : r.ownerDocument.body, e = (r.ownerDocument.defaultView && e.contains(r) || l.warn("The element supplied is not included in the DOM"), !0 === (t = t || {}).restoreEl && (t.restoreEl = (r.parentNode && r.parentNode.hasAttribute("data-vjs-player") ? r.parentNode : r).cloneNode(!0)), B("beforesetup").forEach(e => {
                e = e(r, d(t));
                !K(e) || Array.isArray(e) ? l.error("please return an object in beforesetup hooks") : t = d(t, e)
            }), f.getComponent("Player"));
            s = new e(r, t, i), B("setup").forEach(e => e(s))
        }
        return s
    }

    T.hooks_ = U, T.hooks = B, T.hook = function (e, t) {
        B(e, t)
    }, T.hookOnce = function (s, e) {
        B(s, [].concat(e).map(t => {
            const i = (...e) => (F(s, i), t(...e));
            return i
        }))
    }, T.removeHook = F, !0 !== window.VIDEOJS_NO_DYNAMIC_STYLE && ve() && !(Ui = $e(".vjs-styles-defaults")) && (Ui = tt("vjs-styles-defaults"), (Rr = $e("head")) && Rr.insertBefore(Ui, Rr.firstChild), it(Ui, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `)), Ze(1, T), T.VERSION = M, T.options = b.prototype.options_, T.getPlayers = () => b.players, T.getPlayer = e => {
        var t = b.players;
        let i;
        if ("string" == typeof e) {
            var s = yn(e), r = t[s];
            if (r) return r;
            i = $e("#" + s)
        } else i = e;
        if (be(i)) {
            var {player: r, playerId: s} = i;
            if (r || t[s]) return r || t[s]
        }
    }, T.getAllPlayers = () => Object.keys(b.players).map(e => b.players[e]).filter(Boolean), T.players = b.players, T.getComponent = f.getComponent, T.registerComponent = (e, t) => (_.isTech(t) && l.warn(`The ${e} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`), f.registerComponent.call(f, e, t)), T.getTech = _.getTech, T.registerTech = _.registerTech, T.use = function (e, t) {
        cs[e] = cs[e] || [], cs[e].push(t)
    }, Object.defineProperty(T, "middleware", {
        value: {},
        writeable: !1,
        enumerable: !0
    }), Object.defineProperty(T.middleware, "TERMINATOR", {
        value: ms,
        writeable: !1,
        enumerable: !0
    }), T.browser = e, T.obj = Z, T.mergeOptions = fn(9, "videojs.mergeOptions", "videojs.obj.merge", d), T.defineLazyProperty = fn(9, "videojs.defineLazyProperty", "videojs.obj.defineLazyProperty", J), T.bind = fn(9, "videojs.bind", "native Function.prototype.bind", m), T.registerPlugin = gn.registerPlugin, T.deregisterPlugin = gn.deregisterPlugin, T.plugin = (e, t) => (l.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), gn.registerPlugin(e, t)), T.getPlugins = gn.getPlugins, T.getPlugin = gn.getPlugin, T.getPluginVersion = gn.getPluginVersion, T.addLanguage = function (e, t) {
        return e = ("" + e).toLowerCase(), T.options.languages = d(T.options.languages, {[e]: t}), T.options.languages[e]
    }, T.log = l, T.createLogger = $, T.time = zt, T.createTimeRange = fn(9, "videojs.createTimeRange", "videojs.time.createTimeRanges", Bt), T.createTimeRanges = fn(9, "videojs.createTimeRanges", "videojs.time.createTimeRanges", Bt), T.formatTime = fn(9, "videojs.formatTime", "videojs.time.formatTime", Vt), T.setFormatTime = fn(9, "videojs.setFormatTime", "videojs.time.setFormatTime", qt), T.resetFormatTime = fn(9, "videojs.resetFormatTime", "videojs.time.resetFormatTime", Ht), T.parseUrl = fn(9, "videojs.parseUrl", "videojs.url.parseUrl", hi), T.isCrossOrigin = fn(9, "videojs.isCrossOrigin", "videojs.url.isCrossOrigin", ci), T.EventTarget = _t, T.any = ct, T.on = dt, T.one = ut, T.off = p, T.trigger = ht, T.xhr = wi, T.TextTrack = Li, T.AudioTrack = Pi, T.VideoTrack = Oi, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(e => {
        T[e] = function () {
            return l.warn(`videojs.${e}() is deprecated; use videojs.dom.${e}() instead`), Ke[e].apply(null, arguments)
        }
    }), T.computedStyle = fn(9, "videojs.computedStyle", "videojs.dom.computedStyle", Ge), T.dom = Ke, T.fn = ft, T.num = gi, T.str = Ot, T.url = mi, Rt(function (e, t) {
        /*! @name videojs-contrib-quality-levels @version 4.0.0 @license Apache-2.0 */
        e.exports = function (e) {
            function t(e) {
                return e && typeof e === "object" && "default" in e ? e : {default: e}
            }

            var i = t(e);

            class s {
                constructor(e) {
                    let t = this;
                    t.id = e.id;
                    t.label = t.id;
                    t.width = e.width;
                    t.height = e.height;
                    t.bitrate = e.bandwidth;
                    t.frameRate = e.frameRate;
                    t.enabled_ = e.enabled;
                    Object.defineProperty(t, "enabled", {
                        get() {
                            return t.enabled_()
                        }, set(e) {
                            t.enabled_(e)
                        }
                    });
                    return t
                }
            }

            class n extends i["default"].EventTarget {
                constructor() {
                    super();
                    let e = this;
                    e.levels_ = [];
                    e.selectedIndex_ = -1;
                    Object.defineProperty(e, "selectedIndex", {
                        get() {
                            return e.selectedIndex_
                        }
                    });
                    Object.defineProperty(e, "length", {
                        get() {
                            return e.levels_.length
                        }
                    });
                    e[Symbol.iterator] = () => e.levels_.values();
                    return e
                }

                addQualityLevel(e) {
                    let t = this.getQualityLevelById(e.id);
                    if (t) return t;
                    const i = this.levels_.length;
                    t = new s(e);
                    if (!("" + i in this)) Object.defineProperty(this, i, {
                        get() {
                            return this.levels_[i]
                        }
                    });
                    this.levels_.push(t);
                    this.trigger({qualityLevel: t, type: "addqualitylevel"});
                    return t
                }

                removeQualityLevel(i) {
                    let s = null;
                    for (let e = 0, t = this.length; e < t; e++) if (this[e] === i) {
                        s = this.levels_.splice(e, 1)[0];
                        if (this.selectedIndex_ === e) this.selectedIndex_ = -1; else if (this.selectedIndex_ > e) this.selectedIndex_--;
                        break
                    }
                    if (s) this.trigger({qualityLevel: i, type: "removequalitylevel"});
                    return s
                }

                getQualityLevelById(i) {
                    for (let e = 0, t = this.length; e < t; e++) {
                        const s = this[e];
                        if (s.id === i) return s
                    }
                    return null
                }

                dispose() {
                    this.selectedIndex_ = -1;
                    this.levels_.length = 0
                }
            }

            n.prototype.allowedEvents_ = {
                change: "change",
                addqualitylevel: "addqualitylevel",
                removequalitylevel: "removequalitylevel"
            };
            for (const l in n.prototype.allowedEvents_) n.prototype["on" + l] = null;
            var a = "4.0.0";
            const r = function (e, t) {
                const i = e.qualityLevels;
                const s = new n;
                const r = function () {
                    s.dispose();
                    e.qualityLevels = i;
                    e.off("dispose", r)
                };
                e.on("dispose", r);
                e.qualityLevels = () => s;
                e.qualityLevels.VERSION = a;
                return s
            }, o = function (e) {
                return r(this, i["default"].obj.merge({}, e))
            };
            return i["default"].registerPlugin("qualityLevels", o), o.VERSION = a, o
        }(T)
    });
    var _n = Rt(function (e, t) {
        var i, n, s, r, a;
        i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, n = /^(?=([^\/?#]*))\1([^]*)$/, s = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, a = {
            buildAbsoluteURL: function (e, t, i) {
                if (i = i || {}, e = e.trim(), !(t = t.trim())) {
                    if (!i.alwaysNormalize) return e;
                    var s = a.parseURL(e);
                    if (s) return s.path = a.normalizePath(s.path), a.buildURLFromParts(s);
                    throw new Error("Error trying to parse base URL.")
                }
                s = a.parseURL(t);
                if (!s) throw new Error("Error trying to parse relative URL.");
                if (s.scheme) return i.alwaysNormalize ? (s.path = a.normalizePath(s.path), a.buildURLFromParts(s)) : t;
                t = a.parseURL(e);
                if (!t) throw new Error("Error trying to parse base URL.");
                !t.netLoc && t.path && "/" !== t.path[0] && (e = n.exec(t.path), t.netLoc = e[1], t.path = e[2]), t.netLoc && !t.path && (t.path = "/");
                var r, e = {
                    scheme: t.scheme,
                    netLoc: s.netLoc,
                    path: null,
                    params: s.params,
                    query: s.query,
                    fragment: s.fragment
                };
                return s.netLoc || (e.netLoc = t.netLoc, "/" !== s.path[0] && (s.path ? (r = (r = t.path).substring(0, r.lastIndexOf("/") + 1) + s.path, e.path = a.normalizePath(r)) : (e.path = t.path, s.params || (e.params = t.params, s.query) || (e.query = t.query)))), null === e.path && (e.path = i.alwaysNormalize ? a.normalizePath(s.path) : s.path), a.buildURLFromParts(e)
            }, parseURL: function (e) {
                e = i.exec(e);
                return e ? {
                    scheme: e[1] || "",
                    netLoc: e[2] || "",
                    path: e[3] || "",
                    params: e[4] || "",
                    query: e[5] || "",
                    fragment: e[6] || ""
                } : null
            }, normalizePath: function (e) {
                for (e = e.split("").reverse().join("").replace(s, ""); e.length !== (e = e.replace(r, "")).length;) ;
                return e.split("").reverse().join("")
            }, buildURLFromParts: function (e) {
                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            }
        }, e.exports = a
    }), vn = "http://example.com", Nr = function () {
        function e() {
            this.listeners = {}
        }

        var t = e.prototype;
        return t.on = function (e, t) {
            this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
        }, t.off = function (e, t) {
            return !!this.listeners[e] && (t = this.listeners[e].indexOf(t), this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(t, 1), -1 < t)
        }, t.trigger = function (e) {
            var t = this.listeners[e];
            if (t) if (2 === arguments.length) for (var i = t.length, s = 0; s < i; ++s) t[s].call(this, arguments[1]); else for (var r = Array.prototype.slice.call(arguments, 1), n = t.length, a = 0; a < n; ++a) t[a].apply(this, r)
        }, t.dispose = function () {
            this.listeners = {}
        }, t.pipe = function (t) {
            this.on("data", function (e) {
                t.push(e)
            })
        }, e
    }();

    function bn(e) {
        e = e;
        for (var t = window.atob ? window.atob(e) : Buffer.from(e, "base64").toString("binary"), i = new Uint8Array(t.length), s = 0; s < t.length; s++) i[s] = t.charCodeAt(s);
        return i
    }

    /*! @name m3u8-parser @version 7.1.0 @license Apache-2.0 */
    class Tn extends Nr {
        constructor() {
            super(), this.buffer = ""
        }

        push(e) {
            let t;
            for (this.buffer += e, t = this.buffer.indexOf("\n"); -1 < t; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
        }
    }

    function wn(e) {
        var e = /([0-9.]*)?@?([0-9.]*)?/.exec(e || ""), t = {};
        return e[1] && (t.length = parseInt(e[1], 10)), e[2] && (t.offset = parseInt(e[2], 10)), t
    }

    function Sn(t) {
        var i = {};
        if (t) {
            var s, r = t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'));
            let e = r.length;
            for (; e--;) "" !== r[e] && ((s = /([^=]*)=(.*)/.exec(r[e]).slice(1))[0] = s[0].replace(/^\s+|\s+$/g, ""), s[1] = s[1].replace(/^\s+|\s+$/g, ""), s[1] = s[1].replace(/^['"](.*)['"]$/g, "$1"), i[s[0]] = s[1])
        }
        return i
    }

    const En = String.fromCharCode(9);

    class kn extends Nr {
        constructor() {
            super(), this.customParsers = [], this.tagMappers = []
        }

        push(i) {
            let o, l;
            0 !== (i = i.trim()).length && ("#" !== i[0] ? this.trigger("data", {
                type: "uri",
                uri: i
            }) : this.tagMappers.reduce((e, t) => {
                t = t(i);
                return t === i ? e : e.concat([t])
            }, [i]).forEach(t => {
                for (let e = 0; e < this.customParsers.length; e++) if (this.customParsers[e].call(this, t)) return;
                var e, i;
                if (0 !== t.indexOf("#EXT")) this.trigger("data", {
                    type: "comment",
                    text: t.slice(1)
                }); else if (t = t.replace("\r", ""), o = /^#EXTM3U/.exec(t)) this.trigger("data", {
                    type: "tag",
                    tagType: "m3u"
                }); else if (o = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(t)) l = {
                    type: "tag",
                    tagType: "inf"
                }, o[1] && (l.duration = parseFloat(o[1])), o[2] && (l.title = o[2]), this.trigger("data", l); else if (o = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(t)) l = {
                    type: "tag",
                    tagType: "targetduration"
                }, o[1] && (l.duration = parseInt(o[1], 10)), this.trigger("data", l); else if (o = /^#EXT-X-VERSION:([0-9.]*)?/.exec(t)) l = {
                    type: "tag",
                    tagType: "version"
                }, o[1] && (l.version = parseInt(o[1], 10)), this.trigger("data", l); else if (o = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(t)) l = {
                    type: "tag",
                    tagType: "media-sequence"
                }, o[1] && (l.number = parseInt(o[1], 10)), this.trigger("data", l); else if (o = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(t)) l = {
                    type: "tag",
                    tagType: "discontinuity-sequence"
                }, o[1] && (l.number = parseInt(o[1], 10)), this.trigger("data", l); else if (o = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(t)) l = {
                    type: "tag",
                    tagType: "playlist-type"
                }, o[1] && (l.playlistType = o[1]), this.trigger("data", l); else if (o = /^#EXT-X-BYTERANGE:(.*)?$/.exec(t)) l = _i(wn(o[1]), {
                    type: "tag",
                    tagType: "byterange"
                }), this.trigger("data", l); else if (o = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(t)) l = {
                    type: "tag",
                    tagType: "allow-cache"
                }, o[1] && (l.allowed = !/NO/.test(o[1])), this.trigger("data", l); else if (o = /^#EXT-X-MAP:(.*)$/.exec(t)) l = {
                    type: "tag",
                    tagType: "map"
                }, o[1] && ((i = Sn(o[1])).URI && (l.uri = i.URI), i.BYTERANGE) && (l.byterange = wn(i.BYTERANGE)), this.trigger("data", l); else if (o = /^#EXT-X-STREAM-INF:(.*)$/.exec(t)) l = {
                    type: "tag",
                    tagType: "stream-inf"
                }, o[1] && (l.attributes = Sn(o[1]), l.attributes.RESOLUTION && (i = {}, (e = l.attributes.RESOLUTION.split("x"))[0] && (i.width = parseInt(e[0], 10)), e[1] && (i.height = parseInt(e[1], 10)), l.attributes.RESOLUTION = i), l.attributes.BANDWIDTH && (l.attributes.BANDWIDTH = parseInt(l.attributes.BANDWIDTH, 10)), l.attributes["FRAME-RATE"] && (l.attributes["FRAME-RATE"] = parseFloat(l.attributes["FRAME-RATE"])), l.attributes["PROGRAM-ID"]) && (l.attributes["PROGRAM-ID"] = parseInt(l.attributes["PROGRAM-ID"], 10)), this.trigger("data", l); else if (o = /^#EXT-X-MEDIA:(.*)$/.exec(t)) l = {
                    type: "tag",
                    tagType: "media"
                }, o[1] && (l.attributes = Sn(o[1])), this.trigger("data", l); else if (o = /^#EXT-X-ENDLIST/.exec(t)) this.trigger("data", {
                    type: "tag",
                    tagType: "endlist"
                }); else if (o = /^#EXT-X-DISCONTINUITY/.exec(t)) this.trigger("data", {
                    type: "tag",
                    tagType: "discontinuity"
                }); else if (o = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(t)) l = {
                    type: "tag",
                    tagType: "program-date-time"
                }, o[1] && (l.dateTimeString = o[1], l.dateTimeObject = new Date(o[1])), this.trigger("data", l); else if (o = /^#EXT-X-KEY:(.*)$/.exec(t)) l = {
                    type: "tag",
                    tagType: "key"
                }, o[1] && (l.attributes = Sn(o[1]), l.attributes.IV) && ("0x" === l.attributes.IV.substring(0, 2).toLowerCase() && (l.attributes.IV = l.attributes.IV.substring(2)), l.attributes.IV = l.attributes.IV.match(/.{8}/g), l.attributes.IV[0] = parseInt(l.attributes.IV[0], 16), l.attributes.IV[1] = parseInt(l.attributes.IV[1], 16), l.attributes.IV[2] = parseInt(l.attributes.IV[2], 16), l.attributes.IV[3] = parseInt(l.attributes.IV[3], 16), l.attributes.IV = new Uint32Array(l.attributes.IV)), this.trigger("data", l); else if (o = /^#EXT-X-START:(.*)$/.exec(t)) l = {
                    type: "tag",
                    tagType: "start"
                }, o[1] && (l.attributes = Sn(o[1]), l.attributes["TIME-OFFSET"] = parseFloat(l.attributes["TIME-OFFSET"]), l.attributes.PRECISE = /YES/.test(l.attributes.PRECISE)), this.trigger("data", l); else if (o = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(t)) l = {
                    type: "tag",
                    tagType: "cue-out-cont"
                }, o[1] ? l.data = o[1] : l.data = "", this.trigger("data", l); else if (o = /^#EXT-X-CUE-OUT:(.*)?$/.exec(t)) l = {
                    type: "tag",
                    tagType: "cue-out"
                }, o[1] ? l.data = o[1] : l.data = "", this.trigger("data", l); else if (o = /^#EXT-X-CUE-IN:(.*)?$/.exec(t)) l = {
                    type: "tag",
                    tagType: "cue-in"
                }, o[1] ? l.data = o[1] : l.data = "", this.trigger("data", l); else if ((o = /^#EXT-X-SKIP:(.*)$/.exec(t)) && o[1]) (l = {
                    type: "tag",
                    tagType: "skip"
                }).attributes = Sn(o[1]), l.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (l.attributes["SKIPPED-SEGMENTS"] = parseInt(l.attributes["SKIPPED-SEGMENTS"], 10)), l.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (l.attributes["RECENTLY-REMOVED-DATERANGES"] = l.attributes["RECENTLY-REMOVED-DATERANGES"].split(En)), this.trigger("data", l); else if ((o = /^#EXT-X-PART:(.*)$/.exec(t)) && o[1]) (l = {
                    type: "tag",
                    tagType: "part"
                }).attributes = Sn(o[1]), ["DURATION"].forEach(function (e) {
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = parseFloat(l.attributes[e]))
                }), ["INDEPENDENT", "GAP"].forEach(function (e) {
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = /YES/.test(l.attributes[e]))
                }), l.attributes.hasOwnProperty("BYTERANGE") && (l.attributes.byterange = wn(l.attributes.BYTERANGE)), this.trigger("data", l); else if ((o = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(t)) && o[1]) (l = {
                    type: "tag",
                    tagType: "server-control"
                }).attributes = Sn(o[1]), ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (e) {
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = parseFloat(l.attributes[e]))
                }), ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (e) {
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = /YES/.test(l.attributes[e]))
                }), this.trigger("data", l); else if ((o = /^#EXT-X-PART-INF:(.*)$/.exec(t)) && o[1]) (l = {
                    type: "tag",
                    tagType: "part-inf"
                }).attributes = Sn(o[1]), ["PART-TARGET"].forEach(function (e) {
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = parseFloat(l.attributes[e]))
                }), this.trigger("data", l); else if ((o = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(t)) && o[1]) (l = {
                    type: "tag",
                    tagType: "preload-hint"
                }).attributes = Sn(o[1]), ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (e) {
                    var t;
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = parseInt(l.attributes[e], 10), t = "BYTERANGE-LENGTH" === e ? "length" : "offset", l.attributes.byterange = l.attributes.byterange || {}, l.attributes.byterange[t] = l.attributes[e], delete l.attributes[e])
                }), this.trigger("data", l); else if ((o = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(t)) && o[1]) (l = {
                    type: "tag",
                    tagType: "rendition-report"
                }).attributes = Sn(o[1]), ["LAST-MSN", "LAST-PART"].forEach(function (e) {
                    l.attributes.hasOwnProperty(e) && (l.attributes[e] = parseInt(l.attributes[e], 10))
                }), this.trigger("data", l); else if ((o = /^#EXT-X-DATERANGE:(.*)$/.exec(t)) && o[1]) {
                    (l = {
                        type: "tag",
                        tagType: "daterange"
                    }).attributes = Sn(o[1]), ["ID", "CLASS"].forEach(function (e) {
                        l.attributes.hasOwnProperty(e) && (l.attributes[e] = String(l.attributes[e]))
                    }), ["START-DATE", "END-DATE"].forEach(function (e) {
                        l.attributes.hasOwnProperty(e) && (l.attributes[e] = new Date(l.attributes[e]))
                    }), ["DURATION", "PLANNED-DURATION"].forEach(function (e) {
                        l.attributes.hasOwnProperty(e) && (l.attributes[e] = parseFloat(l.attributes[e]))
                    }), ["END-ON-NEXT"].forEach(function (e) {
                        l.attributes.hasOwnProperty(e) && (l.attributes[e] = /YES/i.test(l.attributes[e]))
                    }), ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (e) {
                        l.attributes.hasOwnProperty(e) && (l.attributes[e] = l.attributes[e].toString(16))
                    });
                    var s, r, n = /^X-([A-Z]+-)+[A-Z]+$/;
                    for (const a in l.attributes) n.test(a) && (s = /[0-9A-Fa-f]{6}/g.test(l.attributes[a]), r = /^\d+(\.\d+)?$/.test(l.attributes[a]), l.attributes[a] = s ? l.attributes[a].toString(16) : (r ? parseFloat : String)(l.attributes[a]));
                    this.trigger("data", l)
                } else (o = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(t)) ? this.trigger("data", {
                    type: "tag",
                    tagType: "independent-segments"
                }) : (o = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(t)) ? ((l = {
                    type: "tag",
                    tagType: "content-steering"
                }).attributes = Sn(o[1]), this.trigger("data", l)) : this.trigger("data", {
                    type: "tag",
                    data: t.slice(4)
                })
            }))
        }

        addParser({expression: t, customType: i, dataParser: s, segment: r}) {
            "function" != typeof s && (s = e => e), this.customParsers.push(e => {
                if (t.exec(e)) return this.trigger("data", {type: "custom", data: s(e), customType: i, segment: r}), !0
            })
        }

        addTagMapper({expression: t, map: i}) {
            this.tagMappers.push(e => t.test(e) ? i(e) : e)
        }
    }

    function Cn(t) {
        const i = {};
        return Object.keys(t).forEach(function (e) {
            i[e.toLowerCase().replace(/-(\w)/g, e => e[1].toUpperCase())] = t[e]
        }), i
    }

    function xn(e) {
        var t, i, s, r, n, {serverControl: e, targetDuration: a, partTargetDuration: o} = e;
        e && (t = "#EXT-X-SERVER-CONTROL", i = "holdBack", s = "partHoldBack", r = a && 3 * a, n = o && 2 * o, a && !e.hasOwnProperty(i) && (e[i] = r, this.trigger("info", {message: t + ` defaulting HOLD-BACK to targetDuration * 3 (${r}).`})), r && e[i] < r && (this.trigger("warn", {message: t + ` clamping HOLD-BACK (${e[i]}) to targetDuration * 3 (${r})`}), e[i] = r), o && !e.hasOwnProperty(s) && (e[s] = 3 * o, this.trigger("info", {message: t + ` defaulting PART-HOLD-BACK to partTargetDuration * 3 (${e[s]}).`})), o) && e[s] < n && (this.trigger("warn", {message: t + ` clamping PART-HOLD-BACK (${e[s]}) to partTargetDuration * 2 (${n}).`}), e[s] = n)
    }

    class In extends Nr {
        constructor() {
            super(), this.lineStream = new Tn, this.parseStream = new kn, this.lineStream.pipe(this.parseStream), this.lastProgramDateTime = null;
            const e = this, s = [];
            let a = {}, r, o, l = !1;
            const d = {AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {}};
            let h = 0, u = (this.manifest = {allowCache: !0, discontinuityStarts: [], dateRanges: [], segments: []}, 0),
                c = 0;
            const p = {};
            this.on("end", () => {
                a.uri || !a.parts && !a.preloadHints || (!a.map && r && (a.map = r), !a.key && o && (a.key = o), a.timeline || "number" != typeof h || (a.timeline = h), this.manifest.preloadSegment = a)
            }), this.parseStream.on("data", function (n) {
                let t, i;
                ({
                    tag() {
                        ({
                            version() {
                                n.version && (this.manifest.version = n.version)
                            }, "allow-cache"() {
                                this.manifest.allowCache = n.allowed, "allowed" in n || (this.trigger("info", {message: "defaulting allowCache to YES"}), this.manifest.allowCache = !0)
                            }, byterange() {
                                var e = {};
                                "length" in n && ((a.byterange = e).length = n.length, "offset" in n || (n.offset = u)), "offset" in n && ((a.byterange = e).offset = n.offset), u = e.offset + e.length
                            }, endlist() {
                                this.manifest.endList = !0
                            }, inf() {
                                "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {message: "defaulting media sequence to zero"})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {message: "defaulting discontinuity sequence to zero"})), n.title && (a.title = n.title), 0 < n.duration && (a.duration = n.duration), 0 === n.duration && (a.duration = .01, this.trigger("info", {message: "updating zero segment duration to a small value"})), this.manifest.segments = s
                            }, key() {
                                if (n.attributes) if ("NONE" === n.attributes.METHOD) o = null; else if (n.attributes.URI) if ("com.apple.streamingkeydelivery" === n.attributes.KEYFORMAT) this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.apple.fps.1_0"] = {attributes: n.attributes}; else if ("com.microsoft.playready" === n.attributes.KEYFORMAT) this.manifest.contentProtection = this.manifest.contentProtection || {}, this.manifest.contentProtection["com.microsoft.playready"] = {uri: n.attributes.URI}; else {
                                    if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === n.attributes.KEYFORMAT) return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(n.attributes.METHOD) ? void this.trigger("warn", {message: "invalid key method provided for Widevine"}) : ("SAMPLE-AES-CENC" === n.attributes.METHOD && this.trigger("warn", {message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"}), "data:text/plain;base64," !== n.attributes.URI.substring(0, 23) ? void this.trigger("warn", {message: "invalid key URI provided for Widevine"}) : n.attributes.KEYID && "0x" === n.attributes.KEYID.substring(0, 2) ? (this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.widevine.alpha"] = {
                                        attributes: {
                                            schemeIdUri: n.attributes.KEYFORMAT,
                                            keyId: n.attributes.KEYID.substring(2)
                                        }, pssh: bn(n.attributes.URI.split(",")[1])
                                    })) : void this.trigger("warn", {message: "invalid key ID provided for Widevine"}));
                                    n.attributes.METHOD || this.trigger("warn", {message: "defaulting key method to AES-128"}), o = {
                                        method: n.attributes.METHOD || "AES-128",
                                        uri: n.attributes.URI
                                    }, "undefined" != typeof n.attributes.IV && (o.iv = n.attributes.IV)
                                } else this.trigger("warn", {message: "ignoring key declaration without URI"}); else this.trigger("warn", {message: "ignoring key declaration without attribute list"})
                            }, "media-sequence"() {
                                isFinite(n.number) ? this.manifest.mediaSequence = n.number : this.trigger("warn", {message: "ignoring invalid media sequence: " + n.number})
                            }, "discontinuity-sequence"() {
                                isFinite(n.number) ? (this.manifest.discontinuitySequence = n.number, h = n.number) : this.trigger("warn", {message: "ignoring invalid discontinuity sequence: " + n.number})
                            }, "playlist-type"() {
                                /VOD|EVENT/.test(n.playlistType) ? this.manifest.playlistType = n.playlistType : this.trigger("warn", {message: "ignoring unknown playlist type: " + n.playlist})
                            }, map() {
                                r = {}, n.uri && (r.uri = n.uri), n.byterange && (r.byterange = n.byterange), o && (r.key = o)
                            }, "stream-inf"() {
                                this.manifest.playlists = s, this.manifest.mediaGroups = this.manifest.mediaGroups || d, n.attributes ? (a.attributes || (a.attributes = {}), _i(a.attributes, n.attributes)) : this.trigger("warn", {message: "ignoring empty stream-inf attributes"})
                            }, media() {
                                var e;
                                this.manifest.mediaGroups = this.manifest.mediaGroups || d, n.attributes && n.attributes.TYPE && n.attributes["GROUP-ID"] && n.attributes.NAME ? ((e = this.manifest.mediaGroups[n.attributes.TYPE])[n.attributes["GROUP-ID"]] = e[n.attributes["GROUP-ID"]] || {}, t = e[n.attributes["GROUP-ID"]], (i = {default: /yes/i.test(n.attributes.DEFAULT)}).default ? i.autoselect = !0 : i.autoselect = /yes/i.test(n.attributes.AUTOSELECT), n.attributes.LANGUAGE && (i.language = n.attributes.LANGUAGE), n.attributes.URI && (i.uri = n.attributes.URI), n.attributes["INSTREAM-ID"] && (i.instreamId = n.attributes["INSTREAM-ID"]), n.attributes.CHARACTERISTICS && (i.characteristics = n.attributes.CHARACTERISTICS), n.attributes.FORCED && (i.forced = /yes/i.test(n.attributes.FORCED)), t[n.attributes.NAME] = i) : this.trigger("warn", {message: "ignoring incomplete or missing media group"})
                            }, discontinuity() {
                                h += 1, a.discontinuity = !0, this.manifest.discontinuityStarts.push(s.length)
                            }, "program-date-time"() {
                                "undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = n.dateTimeString, this.manifest.dateTimeObject = n.dateTimeObject), a.dateTimeString = n.dateTimeString, a.dateTimeObject = n.dateTimeObject;
                                var e = this["lastProgramDateTime"];
                                this.lastProgramDateTime = new Date(n.dateTimeString).getTime(), null === e && this.manifest.segments.reduceRight((e, t) => (t.programDateTime = e - 1e3 * t.duration, t.programDateTime), this.lastProgramDateTime)
                            }, targetduration() {
                                !isFinite(n.duration) || n.duration < 0 ? this.trigger("warn", {message: "ignoring invalid target duration: " + n.duration}) : (this.manifest.targetDuration = n.duration, xn.call(this, this.manifest))
                            }, start() {
                                !n.attributes || isNaN(n.attributes["TIME-OFFSET"]) ? this.trigger("warn", {message: "ignoring start declaration without appropriate attribute list"}) : this.manifest.start = {
                                    timeOffset: n.attributes["TIME-OFFSET"],
                                    precise: n.attributes.PRECISE
                                }
                            }, "cue-out"() {
                                a.cueOut = n.data
                            }, "cue-out-cont"() {
                                a.cueOutCont = n.data
                            }, "cue-in"() {
                                a.cueIn = n.data
                            }, skip() {
                                this.manifest.skip = Cn(n.attributes), this.warnOnMissingAttributes_("#EXT-X-SKIP", n.attributes, ["SKIPPED-SEGMENTS"])
                            }, part() {
                                l = !0;
                                var e = this.manifest.segments.length, t = Cn(n.attributes),
                                    t = (a.parts = a.parts || [], a.parts.push(t), t.byterange && (t.byterange.hasOwnProperty("offset") || (t.byterange.offset = c), c = t.byterange.offset + t.byterange.length), a.parts.length - 1);
                                this.warnOnMissingAttributes_(`#EXT-X-PART #${t} for segment #` + e, n.attributes, ["URI", "DURATION"]), this.manifest.renditionReports && this.manifest.renditionReports.forEach((e, t) => {
                                    e.hasOwnProperty("lastPart") || this.trigger("warn", {message: `#EXT-X-RENDITION-REPORT #${t} lacks required attribute(s): LAST-PART`})
                                })
                            }, "server-control"() {
                                var e = this.manifest.serverControl = Cn(n.attributes);
                                e.hasOwnProperty("canBlockReload") || (e.canBlockReload = !1, this.trigger("info", {message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"})), xn.call(this, this.manifest), e.canSkipDateranges && !e.hasOwnProperty("canSkipUntil") && this.trigger("warn", {message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"})
                            }, "preload-hint"() {
                                var t = this.manifest.segments.length, i = Cn(n.attributes),
                                    e = i.type && "PART" === i.type,
                                    s = (a.preloadHints = a.preloadHints || [], a.preloadHints.push(i), !i.byterange || i.byterange.hasOwnProperty("offset") || (i.byterange.offset = e ? c : 0, e && (c = i.byterange.offset + i.byterange.length)), a.preloadHints.length - 1);
                                if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${s} for segment #` + t, n.attributes, ["TYPE", "URI"]), i.type) for (let e = 0; e < a.preloadHints.length - 1; e++) {
                                    var r = a.preloadHints[e];
                                    r.type && r.type === i.type && this.trigger("warn", {message: `#EXT-X-PRELOAD-HINT #${s} for segment #${t} has the same TYPE ${i.type} as preload hint #` + e})
                                }
                            }, "rendition-report"() {
                                var e = Cn(n.attributes),
                                    e = (this.manifest.renditionReports = this.manifest.renditionReports || [], this.manifest.renditionReports.push(e), this.manifest.renditionReports.length - 1),
                                    t = ["LAST-MSN", "URI"];
                                l && t.push("LAST-PART"), this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #" + e, n.attributes, t)
                            }, "part-inf"() {
                                this.manifest.partInf = Cn(n.attributes), this.warnOnMissingAttributes_("#EXT-X-PART-INF", n.attributes, ["PART-TARGET"]), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), xn.call(this, this.manifest)
                            }, daterange() {
                                this.manifest.dateRanges.push(Cn(n.attributes));
                                var e = this.manifest.dateRanges.length - 1;
                                this.warnOnMissingAttributes_("#EXT-X-DATERANGE #" + e, n.attributes, ["ID", "START-DATE"]);
                                const t = this.manifest.dateRanges[e];
                                t.endDate && t.startDate && new Date(t.endDate) < new Date(t.startDate) && this.trigger("warn", {message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"}), t.duration && t.duration < 0 && this.trigger("warn", {message: "EXT-X-DATERANGE DURATION must not be negative"}), t.plannedDuration && t.plannedDuration < 0 && this.trigger("warn", {message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative"});
                                var i = !!t.endOnNext;
                                if (i && !t.class && this.trigger("warn", {message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"}), i && (t.duration || t.endDate) && this.trigger("warn", {message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"}), t.duration && t.endDate && (i = t.startDate.getTime() + 1e3 * t.duration, this.manifest.dateRanges[e].endDate = new Date(i)), p[t.id]) {
                                    for (const s in p[t.id]) if (t[s] && JSON.stringify(p[t.id][s]) !== JSON.stringify(t[s])) {
                                        this.trigger("warn", {message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"});
                                        break
                                    }
                                    e = this.manifest.dateRanges.findIndex(e => e.id === t.id);
                                    this.manifest.dateRanges[e] = _i(this.manifest.dateRanges[e], t), p[t.id] = _i(p[t.id], t), this.manifest.dateRanges.pop()
                                } else p[t.id] = t
                            }, "independent-segments"() {
                                this.manifest.independentSegments = !0
                            }, "content-steering"() {
                                this.manifest.contentSteering = Cn(n.attributes), this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", n.attributes, ["SERVER-URI"])
                            }
                        }[n.tagType] || function () {
                        }).call(e)
                    }, uri() {
                        a.uri = n.uri, s.push(a), !this.manifest.targetDuration || "duration" in a || (this.trigger("warn", {message: "defaulting segment duration to the target duration"}), a.duration = this.manifest.targetDuration), o && (a.key = o), a.timeline = h, r && (a.map = r), c = 0, null !== this.lastProgramDateTime && (a.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += 1e3 * a.duration), a = {}
                    }, comment() {
                    }, custom() {
                        n.segment ? (a.custom = a.custom || {}, a.custom[n.customType] = n.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[n.customType] = n.data)
                    }
                })[n.type].call(e)
            })
        }

        warnOnMissingAttributes_(e, t, i) {
            const s = [];
            i.forEach(function (e) {
                t.hasOwnProperty(e) || s.push(e)
            }), s.length && this.trigger("warn", {message: e + " lacks required attribute(s): " + s.join(", ")})
        }

        push(e) {
            this.lineStream.push(e)
        }

        end() {
            this.lineStream.push("\n"), this.manifest.dateRanges.length && null === this.lastProgramDateTime && this.trigger("warn", {message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"}), this.lastProgramDateTime = null, this.trigger("end")
        }

        addParser(e) {
            this.parseStream.addParser(e)
        }

        addTagMapper(e) {
            this.parseStream.addTagMapper(e)
        }
    }

    function An(e) {
        return Mn.audio.test((e = void 0 === e ? "" : e).trim().toLowerCase())
    }

    function Dn(e) {
        return void 0 === e && (e = ""), window.MediaSource && window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported(qn(e)) || !1
    }

    function Ln(e) {
        return (e = void 0 === e ? "" : e).toLowerCase().split(",").every(function (e) {
            e = e.trim();
            for (var t = 0; t < Bn.length; t++) {
                var i = Bn[t];
                if (Mn["muxer" + i].test(e)) return !0
            }
            return !1
        })
    }

    function Pn(e) {
        return Vn.test(e) ? "hls" : zn.test(e) ? "dash" : "application/vnd.videojs.vhs+json" === e ? "vhs-json" : null
    }

    function On(e, t) {
        for (var i = void 0 !== (t = (void 0 === t ? {} : t).le) && t, s = (e = S(e = "bigint" != typeof e && "number" != typeof e || "number" == typeof e && e != e ? 0 : e), t = e, Math.ceil(t.toString(2).length / 8)), r = new Uint8Array(new ArrayBuffer(s)), n = 0; n < s; n++) {
            var a = i ? n : Math.abs(n + 1 - r.length);
            r[a] = Number(e / Wn[n] & S(255)), e < 0 && (r[a] = Math.abs(~r[a]), r[a] -= 0 === n ? 1 : 2)
        }
        return r
    }

    function Nn(e, t) {
        if ("string" != typeof (e = "string" != typeof e && e && "function" == typeof e.toString ? e.toString() : e)) return new Uint8Array;
        t || (e = unescape(encodeURIComponent(e)));
        for (var i = new Uint8Array(e.length), s = 0; s < e.length; s++) i[s] = e.charCodeAt(s);
        return i
    }

    function Rn(e, t) {
        if (/^[a-z]+:/i.test(t)) return t;
        /^data:/.test(e) && (e = window.location && window.location.href || "");
        var i = "function" == typeof window.URL, s = /^\/\//.test(e), r = !window.location && !/\/\//i.test(e);
        return i ? e = new window.URL(e, window.location || Xn) : /\/\//i.test(e) || (e = _n.buildAbsoluteURL(window.location && window.location.href || "", e)), i ? (i = new URL(t, e), r ? i.href.slice(Xn.length) : s ? i.href.slice(i.protocol.length) : i.href) : _n.buildAbsoluteURL(e, t)
    }

    var Mn = {
            mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
            webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
            ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
            video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
            audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
            text: /^(stpp.ttml.im1t)/,
            muxerVideo: /^(avc0?1)/,
            muxerAudio: /^(mp4a)/,
            muxerText: /a^/
        }, Un = ["video", "audio", "text"], Bn = ["Video", "Audio", "Text"], Fn = function (e) {
            return e && e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
                return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
            })
        }, jn = function (e) {
            var e = (e = void 0 === e ? "" : e).split(","), n = [];
            return e.forEach(function (s) {
                var r;
                s = s.trim(), Un.forEach(function (e) {
                    var t, i = Mn[e].exec(s.toLowerCase());
                    !i || i.length <= 1 || (r = e, i = s.substring(0, i[1].length), t = s.replace(i, ""), n.push({
                        type: i,
                        details: t,
                        mediaType: e
                    }))
                }), r || n.push({type: s, details: "", mediaType: "unknown"})
            }), n
        }, qn = function (e) {
            var t, i, s;
            if (e && "string" == typeof e) return i = "video", 1 === (t = e.toLowerCase().split(",").map(function (e) {
                return Fn(e.trim())
            })).length && An(t[0]) ? i = "audio" : 1 === t.length && (s = t[0], Mn.text.test((s = void 0 === s ? "" : s).trim().toLowerCase())) && (i = "application"), s = "mp4", t.every(function (e) {
                return Mn.mp4.test(e)
            }) ? s = "mp4" : t.every(function (e) {
                return Mn.webm.test(e)
            }) ? s = "webm" : t.every(function (e) {
                return Mn.ogg.test(e)
            }) && (s = "ogg"), i + "/" + s + ';codecs="' + e + '"'
        }, Hn = "mp4a.40.2", Vn = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i, zn = /^application\/dash\+xml/i,
        $n = function (e) {
            return "function" === ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
        }, w = function (e) {
            return e instanceof Uint8Array ? e : (Array.isArray(e) || $n(e) || e instanceof ArrayBuffer || (e = "number" != typeof e || "number" == typeof e && e != e ? 0 : [e]), new Uint8Array(e && e.buffer || e, e && e.byteOffset || 0, e && e.byteLength || 0))
        }, S = window.BigInt || Number,
        Wn = [S("0x1"), S("0x100"), S("0x10000"), S("0x1000000"), S("0x100000000"), S("0x10000000000"), S("0x1000000000000"), S("0x100000000000000"), S("0x10000000000000000")],
        Gn = (Nt = new Uint16Array([65484]), 255 !== (Nt = new Uint8Array(Nt.buffer, Nt.byteOffset, Nt.byteLength))[0] && Nt[0], function (s, e) {
            var e = void 0 === e ? {} : e, t = e.signed, t = void 0 !== t && t, e = e.le, r = void 0 !== e && e,
                e = (s = w(s), r ? "reduce" : "reduceRight"),
                e = (s[e] || Array.prototype[e]).call(s, function (e, t, i) {
                    i = r ? i : Math.abs(i + 1 - s.length);
                    return e + S(t) * Wn[i]
                }, S(0));
            return t && (t = Wn[s.length] / S(2) - S(1)) < (e = S(e)) && (e = (e = e - t - t) - S(2)), Number(e)
        }), E = function (i, e, t) {
            var t = void 0 === t ? {} : t, s = t.offset, r = void 0 === s ? 0 : s, s = t.mask, n = void 0 === s ? [] : s,
                t = (i = w(i), (e = w(e)).every || Array.prototype.every);
            return e.length && i.length - r >= e.length && t.call(e, function (e, t) {
                return e === (n[t] ? n[t] & i[r + t] : i[r + t])
            })
        }, Xn = "http://example.com";

    function Kn(e) {
        e = e;
        for (var t = window.atob ? window.atob(e) : Buffer.from(e, "base64").toString("binary"), i = new Uint8Array(t.length), s = 0; s < t.length; s++) i[s] = t.charCodeAt(s);
        return i
    }

    function Yn(e, t) {
        return (t = void 0 === t ? Object : t) && "function" == typeof t.freeze ? t.freeze(e) : e
    }

    var Qn = Yn({
        HTML: "text/html",
        isHTML: function (e) {
            return e === Qn.HTML
        },
        XML_APPLICATION: "application/xml",
        XML_TEXT: "text/xml",
        XML_XHTML_APPLICATION: "application/xhtml+xml",
        XML_SVG_IMAGE: "image/svg+xml"
    }), Jn = Yn({
        HTML: "http://www.w3.org/1999/xhtml",
        isHTML: function (e) {
            return e === Jn.HTML
        },
        SVG: "http://www.w3.org/2000/svg",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
    }), Zn = {
        assign: function (e, t) {
            if (null === e || "object" != typeof e) throw new TypeError("target is not an object");
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, find: function (e, t, i) {
            if (void 0 === i && (i = Array.prototype), e && "function" == typeof i.find) return i.find.call(e, t);
            for (var s = 0; s < e.length; s++) if (Object.prototype.hasOwnProperty.call(e, s)) {
                var r = e[s];
                if (t.call(void 0, r, s, e)) return r
            }
        }, freeze: Yn, MIME_TYPE: Qn, NAMESPACE: Jn
    }, ea = Zn.find, ta = Zn.NAMESPACE;

    function ia(e) {
        return "" !== e
    }

    function sa(e, t) {
        return e.hasOwnProperty(t) || (e[t] = !0), e
    }

    function ra(e) {
        return e ? (e = (e = e) ? e.split(/[\t\n\f\r ]+/).filter(ia) : [], Object.keys(e.reduce(sa, {}))) : []
    }

    function na(e, t) {
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
    }

    function aa(e, t) {
        var i = e.prototype;

        function s() {
        }

        i instanceof t || (s.prototype = t.prototype, na(i, s = new s), e.prototype = i = s), i.constructor != e && (i.constructor = e)
    }

    var n = {},
        t = (n.ELEMENT_NODE = 1, n.ATTRIBUTE_NODE = 2, n.TEXT_NODE = 3, n.CDATA_SECTION_NODE = 4, n.ENTITY_REFERENCE_NODE = 5, n.ENTITY_NODE = 6, n.PROCESSING_INSTRUCTION_NODE = 7, n.COMMENT_NODE = 8, n.DOCUMENT_NODE = 9, n.DOCUMENT_TYPE_NODE = 10, n.DOCUMENT_FRAGMENT_NODE = 11, n.NOTATION_NODE = 12, {}),
        k = {},
        oa = (t.INDEX_SIZE_ERR = (k[1] = "Index size error", 1), t.DOMSTRING_SIZE_ERR = (k[2] = "DOMString size error", 2), t.HIERARCHY_REQUEST_ERR = (k[3] = "Hierarchy request error", 3)),
        la = (t.WRONG_DOCUMENT_ERR = (k[4] = "Wrong document", 4), t.INVALID_CHARACTER_ERR = (k[5] = "Invalid character", 5), t.NO_DATA_ALLOWED_ERR = (k[6] = "No data allowed", 6), t.NO_MODIFICATION_ALLOWED_ERR = (k[7] = "No modification allowed", 7), t.NOT_FOUND_ERR = (k[8] = "Not found", 8));
    t.NOT_SUPPORTED_ERR = (k[9] = "Not supported", 9), t.INUSE_ATTRIBUTE_ERR = (k[10] = "Attribute in use", 10);

    function C(e, t) {
        var i;
        return t instanceof Error ? i = t : (i = this, Error.call(this, k[e]), this.message = k[e], Error.captureStackTrace && Error.captureStackTrace(this, C)), i.code = e, t && (this.message = this.message + ": " + t), i
    }

    function da() {
    }

    function ha(e, t) {
        this._node = e, this._refresh = t, ua(this)
    }

    function ua(e) {
        var t = e._node._inc || e._node.ownerDocument._inc;
        if (e._inc !== t) {
            var i = e._refresh(e._node);
            if (Ka(e, "length", i.length), !e.$$length || i.length < e.$$length) for (var s = i.length; s in e; s++) Object.prototype.hasOwnProperty.call(e, s) && delete e[s];
            na(i, e), e._inc = t
        }
    }

    function ca() {
    }

    function pa(e, t) {
        for (var i = e.length; i--;) if (e[i] === t) return i
    }

    function ma(e, t, i, s) {
        s ? t[pa(t, s)] = i : t[t.length++] = i, e && (t = (i.ownerElement = e).ownerDocument) && (s && ba(t, e, s), s = e, e = i, (i = t) && i._inc++, e.namespaceURI === ta.XMLNS) && (s._nsMap[e.prefix ? e.localName : ""] = e.value)
    }

    function ga(e, t, i) {
        var s = pa(t, i);
        if (!(0 <= s)) throw new C(la, new Error(e.tagName + "@" + i));
        for (var r, n = t.length - 1; s < n;) t[s] = t[++s];
        t.length = n, e && (r = e.ownerDocument) && (ba(r, e, i), i.ownerElement = null)
    }

    function fa() {
    }

    function x() {
    }

    function ya(e) {
        return ("<" == e ? "&lt;" : ">" == e && "&gt;") || ("&" == e ? "&amp;" : '"' == e && "&quot;") || "&#" + e.charCodeAt() + ";"
    }

    function _a(e, t) {
        if (t(e)) return 1;
        if (e = e.firstChild) do {
            if (_a(e, t)) return 1
        } while (e = e.nextSibling)
    }

    function va() {
        this.ownerDocument = this
    }

    function ba(e, t, i) {
        e && e._inc++, i.namespaceURI === ta.XMLNS && delete t._nsMap[i.prefix ? i.localName : ""]
    }

    function Ta(e, t, i) {
        if (e && e._inc) {
            e._inc++;
            var s = t.childNodes;
            if (i) s[s.length++] = i; else {
                for (var r = t.firstChild, n = 0; r;) r = (s[n++] = r).nextSibling;
                s.length = n, delete s[s.length]
            }
        }
    }

    function wa(e, t) {
        var i = t.previousSibling, s = t.nextSibling;
        return i ? i.nextSibling = s : e.firstChild = s, s ? s.previousSibling = i : e.lastChild = i, t.parentNode = null, t.previousSibling = null, t.nextSibling = null, Ta(e.ownerDocument, e), t
    }

    function Sa(e) {
        return e && e.nodeType === x.DOCUMENT_TYPE_NODE
    }

    function Ea(e) {
        return e && e.nodeType === x.ELEMENT_NODE
    }

    function ka(e) {
        return e && e.nodeType === x.TEXT_NODE
    }

    function Ca(e, t) {
        var i, e = e.childNodes || [];
        if (!ea(e, Ea) && !Sa(t)) return i = ea(e, Sa), !(t && i && e.indexOf(i) > e.indexOf(t))
    }

    function xa(e, t) {
        var i, e = e.childNodes || [];
        if (!ea(e, function (e) {
            return Ea(e) && e !== t
        })) return i = ea(e, Sa), !(t && i && e.indexOf(i) > e.indexOf(t))
    }

    function Ia(e, t, i) {
        if (!(s = e) || s.nodeType !== x.DOCUMENT_NODE && s.nodeType !== x.DOCUMENT_FRAGMENT_NODE && s.nodeType !== x.ELEMENT_NODE) throw new C(oa, "Unexpected parent node type " + e.nodeType);
        var s;
        if (i && i.parentNode !== e) throw new C(la, "child not in parent");
        if (!(s = t) || !(Ea(s) || ka(s) || Sa(s) || s.nodeType === x.DOCUMENT_FRAGMENT_NODE || s.nodeType === x.COMMENT_NODE || s.nodeType === x.PROCESSING_INSTRUCTION_NODE) || Sa(t) && e.nodeType !== x.DOCUMENT_NODE) throw new C(oa, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType)
    }

    function Aa(e, t, i) {
        var s = e.childNodes || [], r = t.childNodes || [];
        if (t.nodeType === x.DOCUMENT_FRAGMENT_NODE) {
            var n = r.filter(Ea);
            if (1 < n.length || ea(r, ka)) throw new C(oa, "More than one element or text in fragment");
            if (1 === n.length && !Ca(e, i)) throw new C(oa, "Element in fragment can not be inserted before doctype")
        }
        if (Ea(t) && !Ca(e, i)) throw new C(oa, "Only one element can be added and only after doctype");
        if (Sa(t)) {
            if (ea(s, Sa)) throw new C(oa, "Only one doctype is allowed");
            r = ea(s, Ea);
            if (i && s.indexOf(r) < s.indexOf(i)) throw new C(oa, "Doctype can only be inserted before an element");
            if (!i && r) throw new C(oa, "Doctype can not be appended since element is present")
        }
    }

    function Da(e, t, i) {
        var s = e.childNodes || [], r = t.childNodes || [];
        if (t.nodeType === x.DOCUMENT_FRAGMENT_NODE) {
            var n = r.filter(Ea);
            if (1 < n.length || ea(r, ka)) throw new C(oa, "More than one element or text in fragment");
            if (1 === n.length && !xa(e, i)) throw new C(oa, "Element in fragment can not be inserted before doctype")
        }
        if (Ea(t) && !xa(e, i)) throw new C(oa, "Only one element can be added and only after doctype");
        if (Sa(t)) {
            if (ea(s, function (e) {
                return Sa(e) && e !== i
            })) throw new C(oa, "Only one doctype is allowed");
            r = ea(s, Ea);
            if (i && s.indexOf(r) < s.indexOf(i)) throw new C(oa, "Doctype can only be inserted before an element")
        }
    }

    function La(e, t, i, s) {
        Ia(e, t, i), e.nodeType === x.DOCUMENT_NODE && (s || Aa)(e, t, i);
        s = t.parentNode;
        if (s && s.removeChild(t), 11 === t.nodeType) {
            var r = t.firstChild;
            if (null == r) return t;
            var n = t.lastChild
        } else r = n = t;
        s = i ? i.previousSibling : e.lastChild;
        for (r.previousSibling = s, n.nextSibling = i, s ? s.nextSibling = r : e.firstChild = r, null == i ? e.lastChild = n : i.previousSibling = n; r.parentNode = e, r !== n && (r = r.nextSibling);) ;
        return Ta(e.ownerDocument || e, e), 11 == t.nodeType && (t.firstChild = t.lastChild = null), t
    }

    function Pa() {
        this._nsMap = {}
    }

    function Oa() {
    }

    function Na() {
    }

    function Ra() {
    }

    function Ma() {
    }

    function Ua() {
    }

    function Ba() {
    }

    function Fa() {
    }

    function ja() {
    }

    function qa() {
    }

    function Ha() {
    }

    function Va() {
    }

    function za() {
    }

    function $a(e, t) {
        var i, s = [], r = 9 == this.nodeType && this.documentElement || this, n = r.prefix, a = r.namespaceURI;
        return Xa(this, s, e, t, i = a && null == n && null == r.lookupPrefix(a) ? [{
            namespace: a,
            prefix: null
        }] : i), s.join("")
    }

    function Wa(e, t, i) {
        var s = e.prefix || "", r = e.namespaceURI;
        if (r && ("xml" !== s || r !== ta.XML) && r !== ta.XMLNS) {
            for (var n = i.length; n--;) {
                var a = i[n];
                if (a.prefix === s) return a.namespace !== r
            }
            return 1
        }
    }

    function Ga(e, t, i) {
        e.push(" ", t, '="', i.replace(/[<>&"\t\n\r]/g, ya), '"')
    }

    function Xa(e, t, i, s, r) {
        if (r = r || [], s) {
            if (!(e = s(e))) return;
            if ("string" == typeof e) return void t.push(e)
        }
        switch (e.nodeType) {
            case 1:
                var n = e.attributes, a = n.length, o = e.firstChild, l = e.tagName, d = l;
                if (!(i = ta.isHTML(e.namespaceURI) || i) && !e.prefix && e.namespaceURI) {
                    for (var h, u = 0; u < n.length; u++) if ("xmlns" === n.item(u).name) {
                        h = n.item(u).value;
                        break
                    }
                    if (!h) for (var c = r.length - 1; 0 <= c; c--) if ("" === (p = r[c]).prefix && p.namespace === e.namespaceURI) {
                        h = p.namespace;
                        break
                    }
                    if (h !== e.namespaceURI) for (var p, c = r.length - 1; 0 <= c; c--) if ((p = r[c]).namespace === e.namespaceURI) {
                        p.prefix && (d = p.prefix + ":" + l);
                        break
                    }
                }
                t.push("<", d);
                for (var m = 0; m < a; m++) "xmlns" == (g = n.item(m)).prefix ? r.push({
                    prefix: g.localName,
                    namespace: g.value
                }) : "xmlns" == g.nodeName && r.push({prefix: "", namespace: g.value});
                for (var g, f, y, m = 0; m < a; m++) Wa(g = n.item(m), 0, r) && (Ga(t, (f = g.prefix || "") ? "xmlns:" + f : "xmlns", y = g.namespaceURI), r.push({
                    prefix: f,
                    namespace: y
                })), Xa(g, t, i, s, r);
                if (l === d && Wa(e, 0, r) && (Ga(t, (f = e.prefix || "") ? "xmlns:" + f : "xmlns", y = e.namespaceURI), r.push({
                    prefix: f,
                    namespace: y
                })), o || i && !/^(?:meta|link|img|br|hr|input)$/i.test(l)) {
                    if (t.push(">"), i && /^script$/i.test(l)) for (; o;) o.data ? t.push(o.data) : Xa(o, t, i, s, r.slice()), o = o.nextSibling; else for (; o;) Xa(o, t, i, s, r.slice()), o = o.nextSibling;
                    t.push("</", d, ">")
                } else t.push("/>");
                return;
            case 9:
            case 11:
                for (o = e.firstChild; o;) Xa(o, t, i, s, r.slice()), o = o.nextSibling;
                return;
            case 2:
                return Ga(t, e.name, e.value);
            case 3:
                return t.push(e.data.replace(/[<&>]/g, ya));
            case 4:
                return t.push("<![CDATA[", e.data, "]]>");
            case 8:
                return t.push("\x3c!--", e.data, "--\x3e");
            case 10:
                var _ = e.publicId, v = e.systemId;
                return t.push("<!DOCTYPE ", e.name), void (_ ? (t.push(" PUBLIC ", _), v && "." != v && t.push(" ", v), t.push(">")) : v && "." != v ? t.push(" SYSTEM ", v, ">") : ((_ = e.internalSubset) && t.push(" [", _, "]"), t.push(">")));
            case 7:
                return t.push("<?", e.target, " ", e.data, "?>");
            case 5:
                return t.push("&", e.nodeName, ";");
            default:
                t.push("??", e.nodeName)
        }
    }

    function Ka(e, t, i) {
        e[t] = i
    }

    t.INVALID_STATE_ERR = (k[11] = "Invalid state", 11), t.SYNTAX_ERR = (k[12] = "Syntax error", 12), t.INVALID_MODIFICATION_ERR = (k[13] = "Invalid modification", 13), t.NAMESPACE_ERR = (k[14] = "Invalid namespace", 14), t.INVALID_ACCESS_ERR = (k[15] = "Invalid access", 15), C.prototype = Error.prototype, na(t, C), da.prototype = {
        length: 0,
        item: function (e) {
            return 0 <= e && e < this.length ? this[e] : null
        },
        toString: function (e, t) {
            for (var i = [], s = 0; s < this.length; s++) Xa(this[s], i, e, t);
            return i.join("")
        },
        filter: function (e) {
            return Array.prototype.filter.call(this, e)
        },
        indexOf: function (e) {
            return Array.prototype.indexOf.call(this, e)
        }
    }, ha.prototype.item = function (e) {
        return ua(this), this[e] || null
    }, aa(ha, da), ca.prototype = {
        length: 0, item: da.prototype.item, getNamedItem: function (e) {
            for (var t = this.length; t--;) {
                var i = this[t];
                if (i.nodeName == e) return i
            }
        }, setNamedItem: function (e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new C(10);
            t = this.getNamedItem(e.nodeName);
            return ma(this._ownerElement, this, e, t), t
        }, setNamedItemNS: function (e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new C(10);
            return t = this.getNamedItemNS(e.namespaceURI, e.localName), ma(this._ownerElement, this, e, t), t
        }, removeNamedItem: function (e) {
            e = this.getNamedItem(e);
            return ga(this._ownerElement, this, e), e
        }, removeNamedItemNS: function (e, t) {
            e = this.getNamedItemNS(e, t);
            return ga(this._ownerElement, this, e), e
        }, getNamedItemNS: function (e, t) {
            for (var i = this.length; i--;) {
                var s = this[i];
                if (s.localName == t && s.namespaceURI == e) return s
            }
            return null
        }
    }, fa.prototype = {
        hasFeature: function (e, t) {
            return !0
        }, createDocument: function (e, t, i) {
            var s = new va;
            return s.implementation = this, s.childNodes = new da, s.doctype = i || null, i && s.appendChild(i), t && (i = s.createElementNS(e, t), s.appendChild(i)), s
        }, createDocumentType: function (e, t, i) {
            var s = new Ba;
            return s.name = e, s.nodeName = e, s.publicId = t || "", s.systemId = i || "", s
        }
    }, x.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function (e, t) {
            return La(this, e, t)
        },
        replaceChild: function (e, t) {
            La(this, e, t, Da), t && this.removeChild(t)
        },
        removeChild: function (e) {
            return wa(this, e)
        },
        appendChild: function (e) {
            return this.insertBefore(e, null)
        },
        hasChildNodes: function () {
            return null != this.firstChild
        },
        cloneNode: function (e) {
            return function e(t, i, s) {
                var r = new i.constructor;
                for (var n in i) {
                    var a;
                    Object.prototype.hasOwnProperty.call(i, n) && "object" != typeof (a = i[n]) && a != r[n] && (r[n] = a)
                }
                i.childNodes && (r.childNodes = new da);
                r.ownerDocument = t;
                switch (r.nodeType) {
                    case 1:
                        var o = i.attributes, l = r.attributes = new ca, d = o.length;
                        l._ownerElement = r;
                        for (var h = 0; h < d; h++) r.setAttributeNode(e(t, o.item(h), !0));
                        break;
                    case 2:
                        s = !0
                }
                if (s) for (var u = i.firstChild; u;) r.appendChild(e(t, u, s)), u = u.nextSibling;
                return r
            }(this.ownerDocument || this, this, e)
        },
        normalize: function () {
            for (var e = this.firstChild; e;) {
                var t = e.nextSibling;
                t && 3 == t.nodeType && 3 == e.nodeType ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
            }
        },
        isSupported: function (e, t) {
            return this.ownerDocument.implementation.hasFeature(e, t)
        },
        hasAttributes: function () {
            return 0 < this.attributes.length
        },
        lookupPrefix: function (e) {
            for (var t = this; t;) {
                var i = t._nsMap;
                if (i) for (var s in i) if (Object.prototype.hasOwnProperty.call(i, s) && i[s] === e) return s;
                t = 2 == t.nodeType ? t.ownerDocument : t.parentNode
            }
            return null
        },
        lookupNamespaceURI: function (e) {
            for (var t = this; t;) {
                var i = t._nsMap;
                if (i && Object.prototype.hasOwnProperty.call(i, e)) return i[e];
                t = 2 == t.nodeType ? t.ownerDocument : t.parentNode
            }
            return null
        },
        isDefaultNamespace: function (e) {
            return null == this.lookupPrefix(e)
        }
    }, na(n, x), na(n, x.prototype), va.prototype = {
        nodeName: "#document",
        nodeType: 9,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function (e, t) {
            if (11 == e.nodeType) for (var i = e.firstChild; i;) {
                var s = i.nextSibling;
                this.insertBefore(i, t), i = s
            } else La(this, e, t), null === (e.ownerDocument = this).documentElement && 1 === e.nodeType && (this.documentElement = e);
            return e
        },
        removeChild: function (e) {
            return this.documentElement == e && (this.documentElement = null), wa(this, e)
        },
        replaceChild: function (e, t) {
            La(this, e, t, Da), e.ownerDocument = this, t && this.removeChild(t), Ea(e) && (this.documentElement = e)
        },
        importNode: function (e, t) {
            return function e(t, i, s) {
                var r;
                switch (i.nodeType) {
                    case 1:
                        (r = i.cloneNode(!1)).ownerDocument = t;
                    case 11:
                        break;
                    case 2:
                        s = !0
                }
                r = r || i.cloneNode(!1);
                r.ownerDocument = t;
                r.parentNode = null;
                if (s) for (var n = i.firstChild; n;) r.appendChild(e(t, n, s)), n = n.nextSibling;
                return r
            }(this, e, t)
        },
        getElementById: function (t) {
            var i = null;
            return _a(this.documentElement, function (e) {
                if (1 == e.nodeType && e.getAttribute("id") == t) return i = e, !0
            }), i
        },
        getElementsByClassName: function (a) {
            var o = ra(a);
            return new ha(this, function (r) {
                var n = [];
                return 0 < o.length && _a(r.documentElement, function (e) {
                    var t, i, s;
                    e !== r && 1 === e.nodeType && (t = e.getAttribute("class")) && ((i = a === t) || (t = ra(t), i = o.every((s = t, function (e) {
                        return s && -1 !== s.indexOf(e)
                    }))), i) && n.push(e)
                }), n
            })
        },
        createElement: function (e) {
            var t = new Pa;
            return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new da, (t.attributes = new ca)._ownerElement = t
        },
        createDocumentFragment: function () {
            var e = new Ha;
            return e.ownerDocument = this, e.childNodes = new da, e
        },
        createTextNode: function (e) {
            var t = new Ra;
            return t.ownerDocument = this, t.appendData(e), t
        },
        createComment: function (e) {
            var t = new Ma;
            return t.ownerDocument = this, t.appendData(e), t
        },
        createCDATASection: function (e) {
            var t = new Ua;
            return t.ownerDocument = this, t.appendData(e), t
        },
        createProcessingInstruction: function (e, t) {
            var i = new Va;
            return i.ownerDocument = this, i.tagName = i.nodeName = i.target = e, i.nodeValue = i.data = t, i
        },
        createAttribute: function (e) {
            var t = new Oa;
            return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t
        },
        createEntityReference: function (e) {
            var t = new qa;
            return t.ownerDocument = this, t.nodeName = e, t
        },
        createElementNS: function (e, t) {
            var i = new Pa, s = t.split(":"), r = i.attributes = new ca;
            return i.childNodes = new da, i.ownerDocument = this, i.nodeName = t, i.tagName = t, i.namespaceURI = e, 2 == s.length ? (i.prefix = s[0], i.localName = s[1]) : i.localName = t, r._ownerElement = i
        },
        createAttributeNS: function (e, t) {
            var i = new Oa, s = t.split(":");
            return i.ownerDocument = this, i.nodeName = t, i.name = t, i.namespaceURI = e, i.specified = !0, 2 == s.length ? (i.prefix = s[0], i.localName = s[1]) : i.localName = t, i
        }
    }, aa(va, x), va.prototype.getElementsByTagName = (Pa.prototype = {
        nodeType: 1, hasAttribute: function (e) {
            return null != this.getAttributeNode(e)
        }, getAttribute: function (e) {
            e = this.getAttributeNode(e);
            return e && e.value || ""
        }, getAttributeNode: function (e) {
            return this.attributes.getNamedItem(e)
        }, setAttribute: function (e, t) {
            e = this.ownerDocument.createAttribute(e);
            e.value = e.nodeValue = "" + t, this.setAttributeNode(e)
        }, removeAttribute: function (e) {
            e = this.getAttributeNode(e);
            e && this.removeAttributeNode(e)
        }, appendChild: function (e) {
            return 11 === e.nodeType ? this.insertBefore(e, null) : (t = this, (e = e).parentNode && e.parentNode.removeChild(e), e.parentNode = t, e.previousSibling = t.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : t.firstChild = e, t.lastChild = e, Ta(t.ownerDocument, t, e), e);
            var t
        }, setAttributeNode: function (e) {
            return this.attributes.setNamedItem(e)
        }, setAttributeNodeNS: function (e) {
            return this.attributes.setNamedItemNS(e)
        }, removeAttributeNode: function (e) {
            return this.attributes.removeNamedItem(e.nodeName)
        }, removeAttributeNS: function (e, t) {
            e = this.getAttributeNodeNS(e, t);
            e && this.removeAttributeNode(e)
        }, hasAttributeNS: function (e, t) {
            return null != this.getAttributeNodeNS(e, t)
        }, getAttributeNS: function (e, t) {
            e = this.getAttributeNodeNS(e, t);
            return e && e.value || ""
        }, setAttributeNS: function (e, t, i) {
            e = this.ownerDocument.createAttributeNS(e, t);
            e.value = e.nodeValue = "" + i, this.setAttributeNode(e)
        }, getAttributeNodeNS: function (e, t) {
            return this.attributes.getNamedItemNS(e, t)
        }, getElementsByTagName: function (s) {
            return new ha(this, function (t) {
                var i = [];
                return _a(t, function (e) {
                    e === t || 1 != e.nodeType || "*" !== s && e.tagName != s || i.push(e)
                }), i
            })
        }, getElementsByTagNameNS: function (s, r) {
            return new ha(this, function (t) {
                var i = [];
                return _a(t, function (e) {
                    e === t || 1 !== e.nodeType || "*" !== s && e.namespaceURI !== s || "*" !== r && e.localName != r || i.push(e)
                }), i
            })
        }
    }).getElementsByTagName, va.prototype.getElementsByTagNameNS = Pa.prototype.getElementsByTagNameNS, aa(Pa, x), Oa.prototype.nodeType = 2, aa(Oa, x), Na.prototype = {
        data: "",
        substringData: function (e, t) {
            return this.data.substring(e, e + t)
        },
        appendData: function (e) {
            e = this.data + e, this.nodeValue = this.data = e, this.length = e.length
        },
        insertData: function (e, t) {
            this.replaceData(e, 0, t)
        },
        appendChild: function (e) {
            throw new Error(k[oa])
        },
        deleteData: function (e, t) {
            this.replaceData(e, t, "")
        },
        replaceData: function (e, t, i) {
            var s = this.data.substring(0, e), e = this.data.substring(e + t);
            this.nodeValue = this.data = i = s + i + e, this.length = i.length
        }
    }, aa(Na, x), Ra.prototype = {
        nodeName: "#text", nodeType: 3, splitText: function (e) {
            var t = (i = this.data).substring(e), i = i.substring(0, e),
                e = (this.data = this.nodeValue = i, this.length = i.length, this.ownerDocument.createTextNode(t));
            return this.parentNode && this.parentNode.insertBefore(e, this.nextSibling), e
        }
    }, aa(Ra, Na), Ma.prototype = {
        nodeName: "#comment",
        nodeType: 8
    }, aa(Ma, Na), Ua.prototype = {
        nodeName: "#cdata-section",
        nodeType: 4
    }, aa(Ua, Na), Ba.prototype.nodeType = 10, aa(Ba, x), Fa.prototype.nodeType = 12, aa(Fa, x), ja.prototype.nodeType = 6, aa(ja, x), qa.prototype.nodeType = 5, aa(qa, x), Ha.prototype.nodeName = "#document-fragment", Ha.prototype.nodeType = 11, aa(Ha, x), Va.prototype.nodeType = 7, aa(Va, x), za.prototype.serializeToString = function (e, t, i) {
        return $a.call(e, t, i)
    }, x.prototype.toString = $a;
    try {
        Object.defineProperty && (Object.defineProperty(ha.prototype, "length", {
            get: function () {
                return ua(this), this.$$length
            }
        }), Object.defineProperty(x.prototype, "textContent", {
            get: function () {
                return function e(t) {
                    switch (t.nodeType) {
                        case 1:
                        case 11:
                            var i = [];
                            for (t = t.firstChild; t;) 7 !== t.nodeType && 8 !== t.nodeType && i.push(e(t)), t = t.nextSibling;
                            return i.join("");
                        default:
                            return t.nodeValue
                    }
                }(this)
            }, set: function (e) {
                switch (this.nodeType) {
                    case 1:
                    case 11:
                        for (; this.firstChild;) this.removeChild(this.firstChild);
                        (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                        break;
                    default:
                        this.data = e, this.value = e, this.nodeValue = e
                }
            }
        }), Ka = function (e, t, i) {
            e["$$" + t] = i
        })
    } catch (e) {
    }
    var Or = {
            DocumentType: Ba,
            DOMException: C,
            DOMImplementation: fa,
            Element: Pa,
            Node: x,
            NodeList: da,
            XMLSerializer: za
        }, Ya = Rt(function (e, t) {
            var i = Zn.freeze;
            t.XML_ENTITIES = i({amp: "&", apos: "'", gt: ">", lt: "<", quot: '"'}), t.HTML_ENTITIES = i({
                Aacute: "Ã",
                aacute: "Ã¡",
                Abreve: "Ä‚",
                abreve: "Äƒ",
                ac: "âˆ¾",
                acd: "âˆ¿",
                acE: "âˆ¾Ì³",
                Acirc: "Ã‚",
                acirc: "Ã¢",
                acute: "Â´",
                Acy: "Ð",
                acy: "Ð°",
                AElig: "Ã†",
                aelig: "Ã¦",
                af: "â¡",
                Afr: "ð”„",
                afr: "ð”ž",
                Agrave: "Ã€",
                agrave: "Ã ",
                alefsym: "â„µ",
                aleph: "â„µ",
                Alpha: "Î‘",
                alpha: "Î±",
                Amacr: "Ä€",
                amacr: "Ä",
                amalg: "â¨¿",
                AMP: "&",
                amp: "&",
                And: "â©“",
                and: "âˆ§",
                andand: "â©•",
                andd: "â©œ",
                andslope: "â©˜",
                andv: "â©š",
                ang: "âˆ ",
                ange: "â¦¤",
                angle: "âˆ ",
                angmsd: "âˆ¡",
                angmsdaa: "â¦¨",
                angmsdab: "â¦©",
                angmsdac: "â¦ª",
                angmsdad: "â¦«",
                angmsdae: "â¦¬",
                angmsdaf: "â¦­",
                angmsdag: "â¦®",
                angmsdah: "â¦¯",
                angrt: "âˆŸ",
                angrtvb: "âŠ¾",
                angrtvbd: "â¦",
                angsph: "âˆ¢",
                angst: "Ã…",
                angzarr: "â¼",
                Aogon: "Ä„",
                aogon: "Ä…",
                Aopf: "ð”¸",
                aopf: "ð•’",
                ap: "â‰ˆ",
                apacir: "â©¯",
                apE: "â©°",
                ape: "â‰Š",
                apid: "â‰‹",
                apos: "'",
                ApplyFunction: "â¡",
                approx: "â‰ˆ",
                approxeq: "â‰Š",
                Aring: "Ã…",
                aring: "Ã¥",
                Ascr: "ð’œ",
                ascr: "ð’¶",
                Assign: "â‰”",
                ast: "*",
                asymp: "â‰ˆ",
                asympeq: "â‰",
                Atilde: "Ãƒ",
                atilde: "Ã£",
                Auml: "Ã„",
                auml: "Ã¤",
                awconint: "âˆ³",
                awint: "â¨‘",
                backcong: "â‰Œ",
                backepsilon: "Ï¶",
                backprime: "â€µ",
                backsim: "âˆ½",
                backsimeq: "â‹",
                Backslash: "âˆ–",
                Barv: "â«§",
                barvee: "âŠ½",
                Barwed: "âŒ†",
                barwed: "âŒ…",
                barwedge: "âŒ…",
                bbrk: "âŽµ",
                bbrktbrk: "âŽ¶",
                bcong: "â‰Œ",
                Bcy: "Ð‘",
                bcy: "Ð±",
                bdquo: "â€ž",
                becaus: "âˆµ",
                Because: "âˆµ",
                because: "âˆµ",
                bemptyv: "â¦°",
                bepsi: "Ï¶",
                bernou: "â„¬",
                Bernoullis: "â„¬",
                Beta: "Î’",
                beta: "Î²",
                beth: "â„¶",
                between: "â‰¬",
                Bfr: "ð”…",
                bfr: "ð”Ÿ",
                bigcap: "â‹‚",
                bigcirc: "â—¯",
                bigcup: "â‹ƒ",
                bigodot: "â¨€",
                bigoplus: "â¨",
                bigotimes: "â¨‚",
                bigsqcup: "â¨†",
                bigstar: "â˜…",
                bigtriangledown: "â–½",
                bigtriangleup: "â–³",
                biguplus: "â¨„",
                bigvee: "â‹",
                bigwedge: "â‹€",
                bkarow: "â¤",
                blacklozenge: "â§«",
                blacksquare: "â–ª",
                blacktriangle: "â–´",
                blacktriangledown: "â–¾",
                blacktriangleleft: "â—‚",
                blacktriangleright: "â–¸",
                blank: "â£",
                blk12: "â–’",
                blk14: "â–‘",
                blk34: "â–“",
                block: "â–ˆ",
                bne: "=âƒ¥",
                bnequiv: "â‰¡âƒ¥",
                bNot: "â«­",
                bnot: "âŒ",
                Bopf: "ð”¹",
                bopf: "ð•“",
                bot: "âŠ¥",
                bottom: "âŠ¥",
                bowtie: "â‹ˆ",
                boxbox: "â§‰",
                boxDL: "â•—",
                boxDl: "â•–",
                boxdL: "â••",
                boxdl: "â”",
                boxDR: "â•”",
                boxDr: "â•“",
                boxdR: "â•’",
                boxdr: "â”Œ",
                boxH: "â•",
                boxh: "â”€",
                boxHD: "â•¦",
                boxHd: "â•¤",
                boxhD: "â•¥",
                boxhd: "â”¬",
                boxHU: "â•©",
                boxHu: "â•§",
                boxhU: "â•¨",
                boxhu: "â”´",
                boxminus: "âŠŸ",
                boxplus: "âŠž",
                boxtimes: "âŠ ",
                boxUL: "â•",
                boxUl: "â•œ",
                boxuL: "â•›",
                boxul: "â”˜",
                boxUR: "â•š",
                boxUr: "â•™",
                boxuR: "â•˜",
                boxur: "â””",
                boxV: "â•‘",
                boxv: "â”‚",
                boxVH: "â•¬",
                boxVh: "â•«",
                boxvH: "â•ª",
                boxvh: "â”¼",
                boxVL: "â•£",
                boxVl: "â•¢",
                boxvL: "â•¡",
                boxvl: "â”¤",
                boxVR: "â• ",
                boxVr: "â•Ÿ",
                boxvR: "â•ž",
                boxvr: "â”œ",
                bprime: "â€µ",
                Breve: "Ë˜",
                breve: "Ë˜",
                brvbar: "Â¦",
                Bscr: "â„¬",
                bscr: "ð’·",
                bsemi: "â",
                bsim: "âˆ½",
                bsime: "â‹",
                bsol: "\\",
                bsolb: "â§…",
                bsolhsub: "âŸˆ",
                bull: "â€¢",
                bullet: "â€¢",
                bump: "â‰Ž",
                bumpE: "âª®",
                bumpe: "â‰",
                Bumpeq: "â‰Ž",
                bumpeq: "â‰",
                Cacute: "Ä†",
                cacute: "Ä‡",
                Cap: "â‹’",
                cap: "âˆ©",
                capand: "â©„",
                capbrcup: "â©‰",
                capcap: "â©‹",
                capcup: "â©‡",
                capdot: "â©€",
                CapitalDifferentialD: "â……",
                caps: "âˆ©ï¸€",
                caret: "â",
                caron: "Ë‡",
                Cayleys: "â„­",
                ccaps: "â©",
                Ccaron: "ÄŒ",
                ccaron: "Ä",
                Ccedil: "Ã‡",
                ccedil: "Ã§",
                Ccirc: "Äˆ",
                ccirc: "Ä‰",
                Cconint: "âˆ°",
                ccups: "â©Œ",
                ccupssm: "â©",
                Cdot: "ÄŠ",
                cdot: "Ä‹",
                cedil: "Â¸",
                Cedilla: "Â¸",
                cemptyv: "â¦²",
                cent: "Â¢",
                CenterDot: "Â·",
                centerdot: "Â·",
                Cfr: "â„­",
                cfr: "ð” ",
                CHcy: "Ð§",
                chcy: "Ñ‡",
                check: "âœ“",
                checkmark: "âœ“",
                Chi: "Î§",
                chi: "Ï‡",
                cir: "â—‹",
                circ: "Ë†",
                circeq: "â‰—",
                circlearrowleft: "â†º",
                circlearrowright: "â†»",
                circledast: "âŠ›",
                circledcirc: "âŠš",
                circleddash: "âŠ",
                CircleDot: "âŠ™",
                circledR: "Â®",
                circledS: "â“ˆ",
                CircleMinus: "âŠ–",
                CirclePlus: "âŠ•",
                CircleTimes: "âŠ—",
                cirE: "â§ƒ",
                cire: "â‰—",
                cirfnint: "â¨",
                cirmid: "â«¯",
                cirscir: "â§‚",
                ClockwiseContourIntegral: "âˆ²",
                CloseCurlyDoubleQuote: "â€",
                CloseCurlyQuote: "â€™",
                clubs: "â™£",
                clubsuit: "â™£",
                Colon: "âˆ·",
                colon: ":",
                Colone: "â©´",
                colone: "â‰”",
                coloneq: "â‰”",
                comma: ",",
                commat: "@",
                comp: "âˆ",
                compfn: "âˆ˜",
                complement: "âˆ",
                complexes: "â„‚",
                cong: "â‰…",
                congdot: "â©­",
                Congruent: "â‰¡",
                Conint: "âˆ¯",
                conint: "âˆ®",
                ContourIntegral: "âˆ®",
                Copf: "â„‚",
                copf: "ð•”",
                coprod: "âˆ",
                Coproduct: "âˆ",
                COPY: "Â©",
                copy: "Â©",
                copysr: "â„—",
                CounterClockwiseContourIntegral: "âˆ³",
                crarr: "â†µ",
                Cross: "â¨¯",
                cross: "âœ—",
                Cscr: "ð’ž",
                cscr: "ð’¸",
                csub: "â«",
                csube: "â«‘",
                csup: "â«",
                csupe: "â«’",
                ctdot: "â‹¯",
                cudarrl: "â¤¸",
                cudarrr: "â¤µ",
                cuepr: "â‹ž",
                cuesc: "â‹Ÿ",
                cularr: "â†¶",
                cularrp: "â¤½",
                Cup: "â‹“",
                cup: "âˆª",
                cupbrcap: "â©ˆ",
                CupCap: "â‰",
                cupcap: "â©†",
                cupcup: "â©Š",
                cupdot: "âŠ",
                cupor: "â©…",
                cups: "âˆªï¸€",
                curarr: "â†·",
                curarrm: "â¤¼",
                curlyeqprec: "â‹ž",
                curlyeqsucc: "â‹Ÿ",
                curlyvee: "â‹Ž",
                curlywedge: "â‹",
                curren: "Â¤",
                curvearrowleft: "â†¶",
                curvearrowright: "â†·",
                cuvee: "â‹Ž",
                cuwed: "â‹",
                cwconint: "âˆ²",
                cwint: "âˆ±",
                cylcty: "âŒ­",
                Dagger: "â€¡",
                dagger: "â€ ",
                daleth: "â„¸",
                Darr: "â†¡",
                dArr: "â‡“",
                darr: "â†“",
                dash: "â€",
                Dashv: "â«¤",
                dashv: "âŠ£",
                dbkarow: "â¤",
                dblac: "Ë",
                Dcaron: "ÄŽ",
                dcaron: "Ä",
                Dcy: "Ð”",
                dcy: "Ð´",
                DD: "â……",
                dd: "â…†",
                ddagger: "â€¡",
                ddarr: "â‡Š",
                DDotrahd: "â¤‘",
                ddotseq: "â©·",
                deg: "Â°",
                Del: "âˆ‡",
                Delta: "Î”",
                delta: "Î´",
                demptyv: "â¦±",
                dfisht: "â¥¿",
                Dfr: "ð”‡",
                dfr: "ð”¡",
                dHar: "â¥¥",
                dharl: "â‡ƒ",
                dharr: "â‡‚",
                DiacriticalAcute: "Â´",
                DiacriticalDot: "Ë™",
                DiacriticalDoubleAcute: "Ë",
                DiacriticalGrave: "`",
                DiacriticalTilde: "Ëœ",
                diam: "â‹„",
                Diamond: "â‹„",
                diamond: "â‹„",
                diamondsuit: "â™¦",
                diams: "â™¦",
                die: "Â¨",
                DifferentialD: "â…†",
                digamma: "Ï",
                disin: "â‹²",
                div: "Ã·",
                divide: "Ã·",
                divideontimes: "â‹‡",
                divonx: "â‹‡",
                DJcy: "Ð‚",
                djcy: "Ñ’",
                dlcorn: "âŒž",
                dlcrop: "âŒ",
                dollar: "$",
                Dopf: "ð”»",
                dopf: "ð••",
                Dot: "Â¨",
                dot: "Ë™",
                DotDot: "âƒœ",
                doteq: "â‰",
                doteqdot: "â‰‘",
                DotEqual: "â‰",
                dotminus: "âˆ¸",
                dotplus: "âˆ”",
                dotsquare: "âŠ¡",
                doublebarwedge: "âŒ†",
                DoubleContourIntegral: "âˆ¯",
                DoubleDot: "Â¨",
                DoubleDownArrow: "â‡“",
                DoubleLeftArrow: "â‡",
                DoubleLeftRightArrow: "â‡”",
                DoubleLeftTee: "â«¤",
                DoubleLongLeftArrow: "âŸ¸",
                DoubleLongLeftRightArrow: "âŸº",
                DoubleLongRightArrow: "âŸ¹",
                DoubleRightArrow: "â‡’",
                DoubleRightTee: "âŠ¨",
                DoubleUpArrow: "â‡‘",
                DoubleUpDownArrow: "â‡•",
                DoubleVerticalBar: "âˆ¥",
                DownArrow: "â†“",
                Downarrow: "â‡“",
                downarrow: "â†“",
                DownArrowBar: "â¤“",
                DownArrowUpArrow: "â‡µ",
                DownBreve: "Ì‘",
                downdownarrows: "â‡Š",
                downharpoonleft: "â‡ƒ",
                downharpoonright: "â‡‚",
                DownLeftRightVector: "â¥",
                DownLeftTeeVector: "â¥ž",
                DownLeftVector: "â†½",
                DownLeftVectorBar: "â¥–",
                DownRightTeeVector: "â¥Ÿ",
                DownRightVector: "â‡",
                DownRightVectorBar: "â¥—",
                DownTee: "âŠ¤",
                DownTeeArrow: "â†§",
                drbkarow: "â¤",
                drcorn: "âŒŸ",
                drcrop: "âŒŒ",
                Dscr: "ð’Ÿ",
                dscr: "ð’¹",
                DScy: "Ð…",
                dscy: "Ñ•",
                dsol: "â§¶",
                Dstrok: "Ä",
                dstrok: "Ä‘",
                dtdot: "â‹±",
                dtri: "â–¿",
                dtrif: "â–¾",
                duarr: "â‡µ",
                duhar: "â¥¯",
                dwangle: "â¦¦",
                DZcy: "Ð",
                dzcy: "ÑŸ",
                dzigrarr: "âŸ¿",
                Eacute: "Ã‰",
                eacute: "Ã©",
                easter: "â©®",
                Ecaron: "Äš",
                ecaron: "Ä›",
                ecir: "â‰–",
                Ecirc: "ÃŠ",
                ecirc: "Ãª",
                ecolon: "â‰•",
                Ecy: "Ð­",
                ecy: "Ñ",
                eDDot: "â©·",
                Edot: "Ä–",
                eDot: "â‰‘",
                edot: "Ä—",
                ee: "â…‡",
                efDot: "â‰’",
                Efr: "ð”ˆ",
                efr: "ð”¢",
                eg: "âªš",
                Egrave: "Ãˆ",
                egrave: "Ã¨",
                egs: "âª–",
                egsdot: "âª˜",
                el: "âª™",
                Element: "âˆˆ",
                elinters: "â§",
                ell: "â„“",
                els: "âª•",
                elsdot: "âª—",
                Emacr: "Ä’",
                emacr: "Ä“",
                empty: "âˆ…",
                emptyset: "âˆ…",
                EmptySmallSquare: "â—»",
                emptyv: "âˆ…",
                EmptyVerySmallSquare: "â–«",
                emsp: "â€ƒ",
                emsp13: "â€„",
                emsp14: "â€…",
                ENG: "ÅŠ",
                eng: "Å‹",
                ensp: "â€‚",
                Eogon: "Ä˜",
                eogon: "Ä™",
                Eopf: "ð”¼",
                eopf: "ð•–",
                epar: "â‹•",
                eparsl: "â§£",
                eplus: "â©±",
                epsi: "Îµ",
                Epsilon: "Î•",
                epsilon: "Îµ",
                epsiv: "Ïµ",
                eqcirc: "â‰–",
                eqcolon: "â‰•",
                eqsim: "â‰‚",
                eqslantgtr: "âª–",
                eqslantless: "âª•",
                Equal: "â©µ",
                equals: "=",
                EqualTilde: "â‰‚",
                equest: "â‰Ÿ",
                Equilibrium: "â‡Œ",
                equiv: "â‰¡",
                equivDD: "â©¸",
                eqvparsl: "â§¥",
                erarr: "â¥±",
                erDot: "â‰“",
                Escr: "â„°",
                escr: "â„¯",
                esdot: "â‰",
                Esim: "â©³",
                esim: "â‰‚",
                Eta: "Î—",
                eta: "Î·",
                ETH: "Ã",
                eth: "Ã°",
                Euml: "Ã‹",
                euml: "Ã«",
                euro: "â‚¬",
                excl: "!",
                exist: "âˆƒ",
                Exists: "âˆƒ",
                expectation: "â„°",
                ExponentialE: "â…‡",
                exponentiale: "â…‡",
                fallingdotseq: "â‰’",
                Fcy: "Ð¤",
                fcy: "Ñ„",
                female: "â™€",
                ffilig: "ï¬ƒ",
                fflig: "ï¬€",
                ffllig: "ï¬„",
                Ffr: "ð”‰",
                ffr: "ð”£",
                filig: "ï¬",
                FilledSmallSquare: "â—¼",
                FilledVerySmallSquare: "â–ª",
                fjlig: "fj",
                flat: "â™­",
                fllig: "ï¬‚",
                fltns: "â–±",
                fnof: "Æ’",
                Fopf: "ð”½",
                fopf: "ð•—",
                ForAll: "âˆ€",
                forall: "âˆ€",
                fork: "â‹”",
                forkv: "â«™",
                Fouriertrf: "â„±",
                fpartint: "â¨",
                frac12: "Â½",
                frac13: "â…“",
                frac14: "Â¼",
                frac15: "â…•",
                frac16: "â…™",
                frac18: "â…›",
                frac23: "â…”",
                frac25: "â…–",
                frac34: "Â¾",
                frac35: "â…—",
                frac38: "â…œ",
                frac45: "â…˜",
                frac56: "â…š",
                frac58: "â…",
                frac78: "â…ž",
                frasl: "â„",
                frown: "âŒ¢",
                Fscr: "â„±",
                fscr: "ð’»",
                gacute: "Çµ",
                Gamma: "Î“",
                gamma: "Î³",
                Gammad: "Ïœ",
                gammad: "Ï",
                gap: "âª†",
                Gbreve: "Äž",
                gbreve: "ÄŸ",
                Gcedil: "Ä¢",
                Gcirc: "Äœ",
                gcirc: "Ä",
                Gcy: "Ð“",
                gcy: "Ð³",
                Gdot: "Ä ",
                gdot: "Ä¡",
                gE: "â‰§",
                ge: "â‰¥",
                gEl: "âªŒ",
                gel: "â‹›",
                geq: "â‰¥",
                geqq: "â‰§",
                geqslant: "â©¾",
                ges: "â©¾",
                gescc: "âª©",
                gesdot: "âª€",
                gesdoto: "âª‚",
                gesdotol: "âª„",
                gesl: "â‹›ï¸€",
                gesles: "âª”",
                Gfr: "ð”Š",
                gfr: "ð”¤",
                Gg: "â‹™",
                gg: "â‰«",
                ggg: "â‹™",
                gimel: "â„·",
                GJcy: "Ðƒ",
                gjcy: "Ñ“",
                gl: "â‰·",
                gla: "âª¥",
                glE: "âª’",
                glj: "âª¤",
                gnap: "âªŠ",
                gnapprox: "âªŠ",
                gnE: "â‰©",
                gne: "âªˆ",
                gneq: "âªˆ",
                gneqq: "â‰©",
                gnsim: "â‹§",
                Gopf: "ð”¾",
                gopf: "ð•˜",
                grave: "`",
                GreaterEqual: "â‰¥",
                GreaterEqualLess: "â‹›",
                GreaterFullEqual: "â‰§",
                GreaterGreater: "âª¢",
                GreaterLess: "â‰·",
                GreaterSlantEqual: "â©¾",
                GreaterTilde: "â‰³",
                Gscr: "ð’¢",
                gscr: "â„Š",
                gsim: "â‰³",
                gsime: "âªŽ",
                gsiml: "âª",
                Gt: "â‰«",
                GT: ">",
                gt: ">",
                gtcc: "âª§",
                gtcir: "â©º",
                gtdot: "â‹—",
                gtlPar: "â¦•",
                gtquest: "â©¼",
                gtrapprox: "âª†",
                gtrarr: "â¥¸",
                gtrdot: "â‹—",
                gtreqless: "â‹›",
                gtreqqless: "âªŒ",
                gtrless: "â‰·",
                gtrsim: "â‰³",
                gvertneqq: "â‰©ï¸€",
                gvnE: "â‰©ï¸€",
                Hacek: "Ë‡",
                hairsp: "â€Š",
                half: "Â½",
                hamilt: "â„‹",
                HARDcy: "Ðª",
                hardcy: "ÑŠ",
                hArr: "â‡”",
                harr: "â†”",
                harrcir: "â¥ˆ",
                harrw: "â†­",
                Hat: "^",
                hbar: "â„",
                Hcirc: "Ä¤",
                hcirc: "Ä¥",
                hearts: "â™¥",
                heartsuit: "â™¥",
                hellip: "â€¦",
                hercon: "âŠ¹",
                Hfr: "â„Œ",
                hfr: "ð”¥",
                HilbertSpace: "â„‹",
                hksearow: "â¤¥",
                hkswarow: "â¤¦",
                hoarr: "â‡¿",
                homtht: "âˆ»",
                hookleftarrow: "â†©",
                hookrightarrow: "â†ª",
                Hopf: "â„",
                hopf: "ð•™",
                horbar: "â€•",
                HorizontalLine: "â”€",
                Hscr: "â„‹",
                hscr: "ð’½",
                hslash: "â„",
                Hstrok: "Ä¦",
                hstrok: "Ä§",
                HumpDownHump: "â‰Ž",
                HumpEqual: "â‰",
                hybull: "âƒ",
                hyphen: "â€",
                Iacute: "Ã",
                iacute: "Ã­",
                ic: "â£",
                Icirc: "ÃŽ",
                icirc: "Ã®",
                Icy: "Ð˜",
                icy: "Ð¸",
                Idot: "Ä°",
                IEcy: "Ð•",
                iecy: "Ðµ",
                iexcl: "Â¡",
                iff: "â‡”",
                Ifr: "â„‘",
                ifr: "ð”¦",
                Igrave: "ÃŒ",
                igrave: "Ã¬",
                ii: "â…ˆ",
                iiiint: "â¨Œ",
                iiint: "âˆ­",
                iinfin: "â§œ",
                iiota: "â„©",
                IJlig: "Ä²",
                ijlig: "Ä³",
                Im: "â„‘",
                Imacr: "Äª",
                imacr: "Ä«",
                image: "â„‘",
                ImaginaryI: "â…ˆ",
                imagline: "â„",
                imagpart: "â„‘",
                imath: "Ä±",
                imof: "âŠ·",
                imped: "Æµ",
                Implies: "â‡’",
                in: "âˆˆ",
                incare: "â„…",
                infin: "âˆž",
                infintie: "â§",
                inodot: "Ä±",
                Int: "âˆ¬",
                int: "âˆ«",
                intcal: "âŠº",
                integers: "â„¤",
                Integral: "âˆ«",
                intercal: "âŠº",
                Intersection: "â‹‚",
                intlarhk: "â¨—",
                intprod: "â¨¼",
                InvisibleComma: "â£",
                InvisibleTimes: "â¢",
                IOcy: "Ð",
                iocy: "Ñ‘",
                Iogon: "Ä®",
                iogon: "Ä¯",
                Iopf: "ð•€",
                iopf: "ð•š",
                Iota: "Î™",
                iota: "Î¹",
                iprod: "â¨¼",
                iquest: "Â¿",
                Iscr: "â„",
                iscr: "ð’¾",
                isin: "âˆˆ",
                isindot: "â‹µ",
                isinE: "â‹¹",
                isins: "â‹´",
                isinsv: "â‹³",
                isinv: "âˆˆ",
                it: "â¢",
                Itilde: "Ä¨",
                itilde: "Ä©",
                Iukcy: "Ð†",
                iukcy: "Ñ–",
                Iuml: "Ã",
                iuml: "Ã¯",
                Jcirc: "Ä´",
                jcirc: "Äµ",
                Jcy: "Ð™",
                jcy: "Ð¹",
                Jfr: "ð”",
                jfr: "ð”§",
                jmath: "È·",
                Jopf: "ð•",
                jopf: "ð•›",
                Jscr: "ð’¥",
                jscr: "ð’¿",
                Jsercy: "Ðˆ",
                jsercy: "Ñ˜",
                Jukcy: "Ð„",
                jukcy: "Ñ”",
                Kappa: "Îš",
                kappa: "Îº",
                kappav: "Ï°",
                Kcedil: "Ä¶",
                kcedil: "Ä·",
                Kcy: "Ðš",
                kcy: "Ðº",
                Kfr: "ð”Ž",
                kfr: "ð”¨",
                kgreen: "Ä¸",
                KHcy: "Ð¥",
                khcy: "Ñ…",
                KJcy: "ÐŒ",
                kjcy: "Ñœ",
                Kopf: "ð•‚",
                kopf: "ð•œ",
                Kscr: "ð’¦",
                kscr: "ð“€",
                lAarr: "â‡š",
                Lacute: "Ä¹",
                lacute: "Äº",
                laemptyv: "â¦´",
                lagran: "â„’",
                Lambda: "Î›",
                lambda: "Î»",
                Lang: "âŸª",
                lang: "âŸ¨",
                langd: "â¦‘",
                langle: "âŸ¨",
                lap: "âª…",
                Laplacetrf: "â„’",
                laquo: "Â«",
                Larr: "â†ž",
                lArr: "â‡",
                larr: "â†",
                larrb: "â‡¤",
                larrbfs: "â¤Ÿ",
                larrfs: "â¤",
                larrhk: "â†©",
                larrlp: "â†«",
                larrpl: "â¤¹",
                larrsim: "â¥³",
                larrtl: "â†¢",
                lat: "âª«",
                lAtail: "â¤›",
                latail: "â¤™",
                late: "âª­",
                lates: "âª­ï¸€",
                lBarr: "â¤Ž",
                lbarr: "â¤Œ",
                lbbrk: "â²",
                lbrace: "{",
                lbrack: "[",
                lbrke: "â¦‹",
                lbrksld: "â¦",
                lbrkslu: "â¦",
                Lcaron: "Ä½",
                lcaron: "Ä¾",
                Lcedil: "Ä»",
                lcedil: "Ä¼",
                lceil: "âŒˆ",
                lcub: "{",
                Lcy: "Ð›",
                lcy: "Ð»",
                ldca: "â¤¶",
                ldquo: "â€œ",
                ldquor: "â€ž",
                ldrdhar: "â¥§",
                ldrushar: "â¥‹",
                ldsh: "â†²",
                lE: "â‰¦",
                le: "â‰¤",
                LeftAngleBracket: "âŸ¨",
                LeftArrow: "â†",
                Leftarrow: "â‡",
                leftarrow: "â†",
                LeftArrowBar: "â‡¤",
                LeftArrowRightArrow: "â‡†",
                leftarrowtail: "â†¢",
                LeftCeiling: "âŒˆ",
                LeftDoubleBracket: "âŸ¦",
                LeftDownTeeVector: "â¥¡",
                LeftDownVector: "â‡ƒ",
                LeftDownVectorBar: "â¥™",
                LeftFloor: "âŒŠ",
                leftharpoondown: "â†½",
                leftharpoonup: "â†¼",
                leftleftarrows: "â‡‡",
                LeftRightArrow: "â†”",
                Leftrightarrow: "â‡”",
                leftrightarrow: "â†”",
                leftrightarrows: "â‡†",
                leftrightharpoons: "â‡‹",
                leftrightsquigarrow: "â†­",
                LeftRightVector: "â¥Ž",
                LeftTee: "âŠ£",
                LeftTeeArrow: "â†¤",
                LeftTeeVector: "â¥š",
                leftthreetimes: "â‹‹",
                LeftTriangle: "âŠ²",
                LeftTriangleBar: "â§",
                LeftTriangleEqual: "âŠ´",
                LeftUpDownVector: "â¥‘",
                LeftUpTeeVector: "â¥ ",
                LeftUpVector: "â†¿",
                LeftUpVectorBar: "â¥˜",
                LeftVector: "â†¼",
                LeftVectorBar: "â¥’",
                lEg: "âª‹",
                leg: "â‹š",
                leq: "â‰¤",
                leqq: "â‰¦",
                leqslant: "â©½",
                les: "â©½",
                lescc: "âª¨",
                lesdot: "â©¿",
                lesdoto: "âª",
                lesdotor: "âªƒ",
                lesg: "â‹šï¸€",
                lesges: "âª“",
                lessapprox: "âª…",
                lessdot: "â‹–",
                lesseqgtr: "â‹š",
                lesseqqgtr: "âª‹",
                LessEqualGreater: "â‹š",
                LessFullEqual: "â‰¦",
                LessGreater: "â‰¶",
                lessgtr: "â‰¶",
                LessLess: "âª¡",
                lesssim: "â‰²",
                LessSlantEqual: "â©½",
                LessTilde: "â‰²",
                lfisht: "â¥¼",
                lfloor: "âŒŠ",
                Lfr: "ð”",
                lfr: "ð”©",
                lg: "â‰¶",
                lgE: "âª‘",
                lHar: "â¥¢",
                lhard: "â†½",
                lharu: "â†¼",
                lharul: "â¥ª",
                lhblk: "â–„",
                LJcy: "Ð‰",
                ljcy: "Ñ™",
                Ll: "â‹˜",
                ll: "â‰ª",
                llarr: "â‡‡",
                llcorner: "âŒž",
                Lleftarrow: "â‡š",
                llhard: "â¥«",
                lltri: "â—º",
                Lmidot: "Ä¿",
                lmidot: "Å€",
                lmoust: "âŽ°",
                lmoustache: "âŽ°",
                lnap: "âª‰",
                lnapprox: "âª‰",
                lnE: "â‰¨",
                lne: "âª‡",
                lneq: "âª‡",
                lneqq: "â‰¨",
                lnsim: "â‹¦",
                loang: "âŸ¬",
                loarr: "â‡½",
                lobrk: "âŸ¦",
                LongLeftArrow: "âŸµ",
                Longleftarrow: "âŸ¸",
                longleftarrow: "âŸµ",
                LongLeftRightArrow: "âŸ·",
                Longleftrightarrow: "âŸº",
                longleftrightarrow: "âŸ·",
                longmapsto: "âŸ¼",
                LongRightArrow: "âŸ¶",
                Longrightarrow: "âŸ¹",
                longrightarrow: "âŸ¶",
                looparrowleft: "â†«",
                looparrowright: "â†¬",
                lopar: "â¦…",
                Lopf: "ð•ƒ",
                lopf: "ð•",
                loplus: "â¨­",
                lotimes: "â¨´",
                lowast: "âˆ—",
                lowbar: "_",
                LowerLeftArrow: "â†™",
                LowerRightArrow: "â†˜",
                loz: "â—Š",
                lozenge: "â—Š",
                lozf: "â§«",
                lpar: "(",
                lparlt: "â¦“",
                lrarr: "â‡†",
                lrcorner: "âŒŸ",
                lrhar: "â‡‹",
                lrhard: "â¥­",
                lrm: "â€Ž",
                lrtri: "âŠ¿",
                lsaquo: "â€¹",
                Lscr: "â„’",
                lscr: "ð“",
                Lsh: "â†°",
                lsh: "â†°",
                lsim: "â‰²",
                lsime: "âª",
                lsimg: "âª",
                lsqb: "[",
                lsquo: "â€˜",
                lsquor: "â€š",
                Lstrok: "Å",
                lstrok: "Å‚",
                Lt: "â‰ª",
                LT: "<",
                lt: "<",
                ltcc: "âª¦",
                ltcir: "â©¹",
                ltdot: "â‹–",
                lthree: "â‹‹",
                ltimes: "â‹‰",
                ltlarr: "â¥¶",
                ltquest: "â©»",
                ltri: "â—ƒ",
                ltrie: "âŠ´",
                ltrif: "â—‚",
                ltrPar: "â¦–",
                lurdshar: "â¥Š",
                luruhar: "â¥¦",
                lvertneqq: "â‰¨ï¸€",
                lvnE: "â‰¨ï¸€",
                macr: "Â¯",
                male: "â™‚",
                malt: "âœ ",
                maltese: "âœ ",
                Map: "â¤…",
                map: "â†¦",
                mapsto: "â†¦",
                mapstodown: "â†§",
                mapstoleft: "â†¤",
                mapstoup: "â†¥",
                marker: "â–®",
                mcomma: "â¨©",
                Mcy: "Ðœ",
                mcy: "Ð¼",
                mdash: "â€”",
                mDDot: "âˆº",
                measuredangle: "âˆ¡",
                MediumSpace: "âŸ",
                Mellintrf: "â„³",
                Mfr: "ð”",
                mfr: "ð”ª",
                mho: "â„§",
                micro: "Âµ",
                mid: "âˆ£",
                midast: "*",
                midcir: "â«°",
                middot: "Â·",
                minus: "âˆ’",
                minusb: "âŠŸ",
                minusd: "âˆ¸",
                minusdu: "â¨ª",
                MinusPlus: "âˆ“",
                mlcp: "â«›",
                mldr: "â€¦",
                mnplus: "âˆ“",
                models: "âŠ§",
                Mopf: "ð•„",
                mopf: "ð•ž",
                mp: "âˆ“",
                Mscr: "â„³",
                mscr: "ð“‚",
                mstpos: "âˆ¾",
                Mu: "Îœ",
                mu: "Î¼",
                multimap: "âŠ¸",
                mumap: "âŠ¸",
                nabla: "âˆ‡",
                Nacute: "Åƒ",
                nacute: "Å„",
                nang: "âˆ âƒ’",
                nap: "â‰‰",
                napE: "â©°Ì¸",
                napid: "â‰‹Ì¸",
                napos: "Å‰",
                napprox: "â‰‰",
                natur: "â™®",
                natural: "â™®",
                naturals: "â„•",
                nbsp: "Â ",
                nbump: "â‰ŽÌ¸",
                nbumpe: "â‰Ì¸",
                ncap: "â©ƒ",
                Ncaron: "Å‡",
                ncaron: "Åˆ",
                Ncedil: "Å…",
                ncedil: "Å†",
                ncong: "â‰‡",
                ncongdot: "â©­Ì¸",
                ncup: "â©‚",
                Ncy: "Ð",
                ncy: "Ð½",
                ndash: "â€“",
                ne: "â‰ ",
                nearhk: "â¤¤",
                neArr: "â‡—",
                nearr: "â†—",
                nearrow: "â†—",
                nedot: "â‰Ì¸",
                NegativeMediumSpace: "â€‹",
                NegativeThickSpace: "â€‹",
                NegativeThinSpace: "â€‹",
                NegativeVeryThinSpace: "â€‹",
                nequiv: "â‰¢",
                nesear: "â¤¨",
                nesim: "â‰‚Ì¸",
                NestedGreaterGreater: "â‰«",
                NestedLessLess: "â‰ª",
                NewLine: "\n",
                nexist: "âˆ„",
                nexists: "âˆ„",
                Nfr: "ð”‘",
                nfr: "ð”«",
                ngE: "â‰§Ì¸",
                nge: "â‰±",
                ngeq: "â‰±",
                ngeqq: "â‰§Ì¸",
                ngeqslant: "â©¾Ì¸",
                nges: "â©¾Ì¸",
                nGg: "â‹™Ì¸",
                ngsim: "â‰µ",
                nGt: "â‰«âƒ’",
                ngt: "â‰¯",
                ngtr: "â‰¯",
                nGtv: "â‰«Ì¸",
                nhArr: "â‡Ž",
                nharr: "â†®",
                nhpar: "â«²",
                ni: "âˆ‹",
                nis: "â‹¼",
                nisd: "â‹º",
                niv: "âˆ‹",
                NJcy: "ÐŠ",
                njcy: "Ñš",
                nlArr: "â‡",
                nlarr: "â†š",
                nldr: "â€¥",
                nlE: "â‰¦Ì¸",
                nle: "â‰°",
                nLeftarrow: "â‡",
                nleftarrow: "â†š",
                nLeftrightarrow: "â‡Ž",
                nleftrightarrow: "â†®",
                nleq: "â‰°",
                nleqq: "â‰¦Ì¸",
                nleqslant: "â©½Ì¸",
                nles: "â©½Ì¸",
                nless: "â‰®",
                nLl: "â‹˜Ì¸",
                nlsim: "â‰´",
                nLt: "â‰ªâƒ’",
                nlt: "â‰®",
                nltri: "â‹ª",
                nltrie: "â‹¬",
                nLtv: "â‰ªÌ¸",
                nmid: "âˆ¤",
                NoBreak: "â ",
                NonBreakingSpace: "Â ",
                Nopf: "â„•",
                nopf: "ð•Ÿ",
                Not: "â«¬",
                not: "Â¬",
                NotCongruent: "â‰¢",
                NotCupCap: "â‰­",
                NotDoubleVerticalBar: "âˆ¦",
                NotElement: "âˆ‰",
                NotEqual: "â‰ ",
                NotEqualTilde: "â‰‚Ì¸",
                NotExists: "âˆ„",
                NotGreater: "â‰¯",
                NotGreaterEqual: "â‰±",
                NotGreaterFullEqual: "â‰§Ì¸",
                NotGreaterGreater: "â‰«Ì¸",
                NotGreaterLess: "â‰¹",
                NotGreaterSlantEqual: "â©¾Ì¸",
                NotGreaterTilde: "â‰µ",
                NotHumpDownHump: "â‰ŽÌ¸",
                NotHumpEqual: "â‰Ì¸",
                notin: "âˆ‰",
                notindot: "â‹µÌ¸",
                notinE: "â‹¹Ì¸",
                notinva: "âˆ‰",
                notinvb: "â‹·",
                notinvc: "â‹¶",
                NotLeftTriangle: "â‹ª",
                NotLeftTriangleBar: "â§Ì¸",
                NotLeftTriangleEqual: "â‹¬",
                NotLess: "â‰®",
                NotLessEqual: "â‰°",
                NotLessGreater: "â‰¸",
                NotLessLess: "â‰ªÌ¸",
                NotLessSlantEqual: "â©½Ì¸",
                NotLessTilde: "â‰´",
                NotNestedGreaterGreater: "âª¢Ì¸",
                NotNestedLessLess: "âª¡Ì¸",
                notni: "âˆŒ",
                notniva: "âˆŒ",
                notnivb: "â‹¾",
                notnivc: "â‹½",
                NotPrecedes: "âŠ€",
                NotPrecedesEqual: "âª¯Ì¸",
                NotPrecedesSlantEqual: "â‹ ",
                NotReverseElement: "âˆŒ",
                NotRightTriangle: "â‹«",
                NotRightTriangleBar: "â§Ì¸",
                NotRightTriangleEqual: "â‹­",
                NotSquareSubset: "âŠÌ¸",
                NotSquareSubsetEqual: "â‹¢",
                NotSquareSuperset: "âŠÌ¸",
                NotSquareSupersetEqual: "â‹£",
                NotSubset: "âŠ‚âƒ’",
                NotSubsetEqual: "âŠˆ",
                NotSucceeds: "âŠ",
                NotSucceedsEqual: "âª°Ì¸",
                NotSucceedsSlantEqual: "â‹¡",
                NotSucceedsTilde: "â‰¿Ì¸",
                NotSuperset: "âŠƒâƒ’",
                NotSupersetEqual: "âŠ‰",
                NotTilde: "â‰",
                NotTildeEqual: "â‰„",
                NotTildeFullEqual: "â‰‡",
                NotTildeTilde: "â‰‰",
                NotVerticalBar: "âˆ¤",
                npar: "âˆ¦",
                nparallel: "âˆ¦",
                nparsl: "â«½âƒ¥",
                npart: "âˆ‚Ì¸",
                npolint: "â¨”",
                npr: "âŠ€",
                nprcue: "â‹ ",
                npre: "âª¯Ì¸",
                nprec: "âŠ€",
                npreceq: "âª¯Ì¸",
                nrArr: "â‡",
                nrarr: "â†›",
                nrarrc: "â¤³Ì¸",
                nrarrw: "â†Ì¸",
                nRightarrow: "â‡",
                nrightarrow: "â†›",
                nrtri: "â‹«",
                nrtrie: "â‹­",
                nsc: "âŠ",
                nsccue: "â‹¡",
                nsce: "âª°Ì¸",
                Nscr: "ð’©",
                nscr: "ð“ƒ",
                nshortmid: "âˆ¤",
                nshortparallel: "âˆ¦",
                nsim: "â‰",
                nsime: "â‰„",
                nsimeq: "â‰„",
                nsmid: "âˆ¤",
                nspar: "âˆ¦",
                nsqsube: "â‹¢",
                nsqsupe: "â‹£",
                nsub: "âŠ„",
                nsubE: "â«…Ì¸",
                nsube: "âŠˆ",
                nsubset: "âŠ‚âƒ’",
                nsubseteq: "âŠˆ",
                nsubseteqq: "â«…Ì¸",
                nsucc: "âŠ",
                nsucceq: "âª°Ì¸",
                nsup: "âŠ…",
                nsupE: "â«†Ì¸",
                nsupe: "âŠ‰",
                nsupset: "âŠƒâƒ’",
                nsupseteq: "âŠ‰",
                nsupseteqq: "â«†Ì¸",
                ntgl: "â‰¹",
                Ntilde: "Ã‘",
                ntilde: "Ã±",
                ntlg: "â‰¸",
                ntriangleleft: "â‹ª",
                ntrianglelefteq: "â‹¬",
                ntriangleright: "â‹«",
                ntrianglerighteq: "â‹­",
                Nu: "Î",
                nu: "Î½",
                num: "#",
                numero: "â„–",
                numsp: "â€‡",
                nvap: "â‰âƒ’",
                nVDash: "âŠ¯",
                nVdash: "âŠ®",
                nvDash: "âŠ­",
                nvdash: "âŠ¬",
                nvge: "â‰¥âƒ’",
                nvgt: ">âƒ’",
                nvHarr: "â¤„",
                nvinfin: "â§ž",
                nvlArr: "â¤‚",
                nvle: "â‰¤âƒ’",
                nvlt: "<âƒ’",
                nvltrie: "âŠ´âƒ’",
                nvrArr: "â¤ƒ",
                nvrtrie: "âŠµâƒ’",
                nvsim: "âˆ¼âƒ’",
                nwarhk: "â¤£",
                nwArr: "â‡–",
                nwarr: "â†–",
                nwarrow: "â†–",
                nwnear: "â¤§",
                Oacute: "Ã“",
                oacute: "Ã³",
                oast: "âŠ›",
                ocir: "âŠš",
                Ocirc: "Ã”",
                ocirc: "Ã´",
                Ocy: "Ðž",
                ocy: "Ð¾",
                odash: "âŠ",
                Odblac: "Å",
                odblac: "Å‘",
                odiv: "â¨¸",
                odot: "âŠ™",
                odsold: "â¦¼",
                OElig: "Å’",
                oelig: "Å“",
                ofcir: "â¦¿",
                Ofr: "ð”’",
                ofr: "ð”¬",
                ogon: "Ë›",
                Ograve: "Ã’",
                ograve: "Ã²",
                ogt: "â§",
                ohbar: "â¦µ",
                ohm: "Î©",
                oint: "âˆ®",
                olarr: "â†º",
                olcir: "â¦¾",
                olcross: "â¦»",
                oline: "â€¾",
                olt: "â§€",
                Omacr: "ÅŒ",
                omacr: "Å",
                Omega: "Î©",
                omega: "Ï‰",
                Omicron: "ÎŸ",
                omicron: "Î¿",
                omid: "â¦¶",
                ominus: "âŠ–",
                Oopf: "ð•†",
                oopf: "ð• ",
                opar: "â¦·",
                OpenCurlyDoubleQuote: "â€œ",
                OpenCurlyQuote: "â€˜",
                operp: "â¦¹",
                oplus: "âŠ•",
                Or: "â©”",
                or: "âˆ¨",
                orarr: "â†»",
                ord: "â©",
                order: "â„´",
                orderof: "â„´",
                ordf: "Âª",
                ordm: "Âº",
                origof: "âŠ¶",
                oror: "â©–",
                orslope: "â©—",
                orv: "â©›",
                oS: "â“ˆ",
                Oscr: "ð’ª",
                oscr: "â„´",
                Oslash: "Ã˜",
                oslash: "Ã¸",
                osol: "âŠ˜",
                Otilde: "Ã•",
                otilde: "Ãµ",
                Otimes: "â¨·",
                otimes: "âŠ—",
                otimesas: "â¨¶",
                Ouml: "Ã–",
                ouml: "Ã¶",
                ovbar: "âŒ½",
                OverBar: "â€¾",
                OverBrace: "âž",
                OverBracket: "âŽ´",
                OverParenthesis: "âœ",
                par: "âˆ¥",
                para: "Â¶",
                parallel: "âˆ¥",
                parsim: "â«³",
                parsl: "â«½",
                part: "âˆ‚",
                PartialD: "âˆ‚",
                Pcy: "ÐŸ",
                pcy: "Ð¿",
                percnt: "%",
                period: ".",
                permil: "â€°",
                perp: "âŠ¥",
                pertenk: "â€±",
                Pfr: "ð”“",
                pfr: "ð”­",
                Phi: "Î¦",
                phi: "Ï†",
                phiv: "Ï•",
                phmmat: "â„³",
                phone: "â˜Ž",
                Pi: "Î ",
                pi: "Ï€",
                pitchfork: "â‹”",
                piv: "Ï–",
                planck: "â„",
                planckh: "â„Ž",
                plankv: "â„",
                plus: "+",
                plusacir: "â¨£",
                plusb: "âŠž",
                pluscir: "â¨¢",
                plusdo: "âˆ”",
                plusdu: "â¨¥",
                pluse: "â©²",
                PlusMinus: "Â±",
                plusmn: "Â±",
                plussim: "â¨¦",
                plustwo: "â¨§",
                pm: "Â±",
                Poincareplane: "â„Œ",
                pointint: "â¨•",
                Popf: "â„™",
                popf: "ð•¡",
                pound: "Â£",
                Pr: "âª»",
                pr: "â‰º",
                prap: "âª·",
                prcue: "â‰¼",
                prE: "âª³",
                pre: "âª¯",
                prec: "â‰º",
                precapprox: "âª·",
                preccurlyeq: "â‰¼",
                Precedes: "â‰º",
                PrecedesEqual: "âª¯",
                PrecedesSlantEqual: "â‰¼",
                PrecedesTilde: "â‰¾",
                preceq: "âª¯",
                precnapprox: "âª¹",
                precneqq: "âªµ",
                precnsim: "â‹¨",
                precsim: "â‰¾",
                Prime: "â€³",
                prime: "â€²",
                primes: "â„™",
                prnap: "âª¹",
                prnE: "âªµ",
                prnsim: "â‹¨",
                prod: "âˆ",
                Product: "âˆ",
                profalar: "âŒ®",
                profline: "âŒ’",
                profsurf: "âŒ“",
                prop: "âˆ",
                Proportion: "âˆ·",
                Proportional: "âˆ",
                propto: "âˆ",
                prsim: "â‰¾",
                prurel: "âŠ°",
                Pscr: "ð’«",
                pscr: "ð“…",
                Psi: "Î¨",
                psi: "Ïˆ",
                puncsp: "â€ˆ",
                Qfr: "ð””",
                qfr: "ð”®",
                qint: "â¨Œ",
                Qopf: "â„š",
                qopf: "ð•¢",
                qprime: "â—",
                Qscr: "ð’¬",
                qscr: "ð“†",
                quaternions: "â„",
                quatint: "â¨–",
                quest: "?",
                questeq: "â‰Ÿ",
                QUOT: '"',
                quot: '"',
                rAarr: "â‡›",
                race: "âˆ½Ì±",
                Racute: "Å”",
                racute: "Å•",
                radic: "âˆš",
                raemptyv: "â¦³",
                Rang: "âŸ«",
                rang: "âŸ©",
                rangd: "â¦’",
                range: "â¦¥",
                rangle: "âŸ©",
                raquo: "Â»",
                Rarr: "â† ",
                rArr: "â‡’",
                rarr: "â†’",
                rarrap: "â¥µ",
                rarrb: "â‡¥",
                rarrbfs: "â¤ ",
                rarrc: "â¤³",
                rarrfs: "â¤ž",
                rarrhk: "â†ª",
                rarrlp: "â†¬",
                rarrpl: "â¥…",
                rarrsim: "â¥´",
                Rarrtl: "â¤–",
                rarrtl: "â†£",
                rarrw: "â†",
                rAtail: "â¤œ",
                ratail: "â¤š",
                ratio: "âˆ¶",
                rationals: "â„š",
                RBarr: "â¤",
                rBarr: "â¤",
                rbarr: "â¤",
                rbbrk: "â³",
                rbrace: "}",
                rbrack: "]",
                rbrke: "â¦Œ",
                rbrksld: "â¦Ž",
                rbrkslu: "â¦",
                Rcaron: "Å˜",
                rcaron: "Å™",
                Rcedil: "Å–",
                rcedil: "Å—",
                rceil: "âŒ‰",
                rcub: "}",
                Rcy: "Ð ",
                rcy: "Ñ€",
                rdca: "â¤·",
                rdldhar: "â¥©",
                rdquo: "â€",
                rdquor: "â€",
                rdsh: "â†³",
                Re: "â„œ",
                real: "â„œ",
                realine: "â„›",
                realpart: "â„œ",
                reals: "â„",
                rect: "â–­",
                REG: "Â®",
                reg: "Â®",
                ReverseElement: "âˆ‹",
                ReverseEquilibrium: "â‡‹",
                ReverseUpEquilibrium: "â¥¯",
                rfisht: "â¥½",
                rfloor: "âŒ‹",
                Rfr: "â„œ",
                rfr: "ð”¯",
                rHar: "â¥¤",
                rhard: "â‡",
                rharu: "â‡€",
                rharul: "â¥¬",
                Rho: "Î¡",
                rho: "Ï",
                rhov: "Ï±",
                RightAngleBracket: "âŸ©",
                RightArrow: "â†’",
                Rightarrow: "â‡’",
                rightarrow: "â†’",
                RightArrowBar: "â‡¥",
                RightArrowLeftArrow: "â‡„",
                rightarrowtail: "â†£",
                RightCeiling: "âŒ‰",
                RightDoubleBracket: "âŸ§",
                RightDownTeeVector: "â¥",
                RightDownVector: "â‡‚",
                RightDownVectorBar: "â¥•",
                RightFloor: "âŒ‹",
                rightharpoondown: "â‡",
                rightharpoonup: "â‡€",
                rightleftarrows: "â‡„",
                rightleftharpoons: "â‡Œ",
                rightrightarrows: "â‡‰",
                rightsquigarrow: "â†",
                RightTee: "âŠ¢",
                RightTeeArrow: "â†¦",
                RightTeeVector: "â¥›",
                rightthreetimes: "â‹Œ",
                RightTriangle: "âŠ³",
                RightTriangleBar: "â§",
                RightTriangleEqual: "âŠµ",
                RightUpDownVector: "â¥",
                RightUpTeeVector: "â¥œ",
                RightUpVector: "â†¾",
                RightUpVectorBar: "â¥”",
                RightVector: "â‡€",
                RightVectorBar: "â¥“",
                ring: "Ëš",
                risingdotseq: "â‰“",
                rlarr: "â‡„",
                rlhar: "â‡Œ",
                rlm: "â€",
                rmoust: "âŽ±",
                rmoustache: "âŽ±",
                rnmid: "â«®",
                roang: "âŸ­",
                roarr: "â‡¾",
                robrk: "âŸ§",
                ropar: "â¦†",
                Ropf: "â„",
                ropf: "ð•£",
                roplus: "â¨®",
                rotimes: "â¨µ",
                RoundImplies: "â¥°",
                rpar: ")",
                rpargt: "â¦”",
                rppolint: "â¨’",
                rrarr: "â‡‰",
                Rrightarrow: "â‡›",
                rsaquo: "â€º",
                Rscr: "â„›",
                rscr: "ð“‡",
                Rsh: "â†±",
                rsh: "â†±",
                rsqb: "]",
                rsquo: "â€™",
                rsquor: "â€™",
                rthree: "â‹Œ",
                rtimes: "â‹Š",
                rtri: "â–¹",
                rtrie: "âŠµ",
                rtrif: "â–¸",
                rtriltri: "â§Ž",
                RuleDelayed: "â§´",
                ruluhar: "â¥¨",
                rx: "â„ž",
                Sacute: "Åš",
                sacute: "Å›",
                sbquo: "â€š",
                Sc: "âª¼",
                sc: "â‰»",
                scap: "âª¸",
                Scaron: "Å ",
                scaron: "Å¡",
                sccue: "â‰½",
                scE: "âª´",
                sce: "âª°",
                Scedil: "Åž",
                scedil: "ÅŸ",
                Scirc: "Åœ",
                scirc: "Å",
                scnap: "âªº",
                scnE: "âª¶",
                scnsim: "â‹©",
                scpolint: "â¨“",
                scsim: "â‰¿",
                Scy: "Ð¡",
                scy: "Ñ",
                sdot: "â‹…",
                sdotb: "âŠ¡",
                sdote: "â©¦",
                searhk: "â¤¥",
                seArr: "â‡˜",
                searr: "â†˜",
                searrow: "â†˜",
                sect: "Â§",
                semi: ";",
                seswar: "â¤©",
                setminus: "âˆ–",
                setmn: "âˆ–",
                sext: "âœ¶",
                Sfr: "ð”–",
                sfr: "ð”°",
                sfrown: "âŒ¢",
                sharp: "â™¯",
                SHCHcy: "Ð©",
                shchcy: "Ñ‰",
                SHcy: "Ð¨",
                shcy: "Ñˆ",
                ShortDownArrow: "â†“",
                ShortLeftArrow: "â†",
                shortmid: "âˆ£",
                shortparallel: "âˆ¥",
                ShortRightArrow: "â†’",
                ShortUpArrow: "â†‘",
                shy: "Â­",
                Sigma: "Î£",
                sigma: "Ïƒ",
                sigmaf: "Ï‚",
                sigmav: "Ï‚",
                sim: "âˆ¼",
                simdot: "â©ª",
                sime: "â‰ƒ",
                simeq: "â‰ƒ",
                simg: "âªž",
                simgE: "âª ",
                siml: "âª",
                simlE: "âªŸ",
                simne: "â‰†",
                simplus: "â¨¤",
                simrarr: "â¥²",
                slarr: "â†",
                SmallCircle: "âˆ˜",
                smallsetminus: "âˆ–",
                smashp: "â¨³",
                smeparsl: "â§¤",
                smid: "âˆ£",
                smile: "âŒ£",
                smt: "âªª",
                smte: "âª¬",
                smtes: "âª¬ï¸€",
                SOFTcy: "Ð¬",
                softcy: "ÑŒ",
                sol: "/",
                solb: "â§„",
                solbar: "âŒ¿",
                Sopf: "ð•Š",
                sopf: "ð•¤",
                spades: "â™ ",
                spadesuit: "â™ ",
                spar: "âˆ¥",
                sqcap: "âŠ“",
                sqcaps: "âŠ“ï¸€",
                sqcup: "âŠ”",
                sqcups: "âŠ”ï¸€",
                Sqrt: "âˆš",
                sqsub: "âŠ",
                sqsube: "âŠ‘",
                sqsubset: "âŠ",
                sqsubseteq: "âŠ‘",
                sqsup: "âŠ",
                sqsupe: "âŠ’",
                sqsupset: "âŠ",
                sqsupseteq: "âŠ’",
                squ: "â–¡",
                Square: "â–¡",
                square: "â–¡",
                SquareIntersection: "âŠ“",
                SquareSubset: "âŠ",
                SquareSubsetEqual: "âŠ‘",
                SquareSuperset: "âŠ",
                SquareSupersetEqual: "âŠ’",
                SquareUnion: "âŠ”",
                squarf: "â–ª",
                squf: "â–ª",
                srarr: "â†’",
                Sscr: "ð’®",
                sscr: "ð“ˆ",
                ssetmn: "âˆ–",
                ssmile: "âŒ£",
                sstarf: "â‹†",
                Star: "â‹†",
                star: "â˜†",
                starf: "â˜…",
                straightepsilon: "Ïµ",
                straightphi: "Ï•",
                strns: "Â¯",
                Sub: "â‹",
                sub: "âŠ‚",
                subdot: "âª½",
                subE: "â«…",
                sube: "âŠ†",
                subedot: "â«ƒ",
                submult: "â«",
                subnE: "â«‹",
                subne: "âŠŠ",
                subplus: "âª¿",
                subrarr: "â¥¹",
                Subset: "â‹",
                subset: "âŠ‚",
                subseteq: "âŠ†",
                subseteqq: "â«…",
                SubsetEqual: "âŠ†",
                subsetneq: "âŠŠ",
                subsetneqq: "â«‹",
                subsim: "â«‡",
                subsub: "â«•",
                subsup: "â«“",
                succ: "â‰»",
                succapprox: "âª¸",
                succcurlyeq: "â‰½",
                Succeeds: "â‰»",
                SucceedsEqual: "âª°",
                SucceedsSlantEqual: "â‰½",
                SucceedsTilde: "â‰¿",
                succeq: "âª°",
                succnapprox: "âªº",
                succneqq: "âª¶",
                succnsim: "â‹©",
                succsim: "â‰¿",
                SuchThat: "âˆ‹",
                Sum: "âˆ‘",
                sum: "âˆ‘",
                sung: "â™ª",
                Sup: "â‹‘",
                sup: "âŠƒ",
                sup1: "Â¹",
                sup2: "Â²",
                sup3: "Â³",
                supdot: "âª¾",
                supdsub: "â«˜",
                supE: "â«†",
                supe: "âŠ‡",
                supedot: "â«„",
                Superset: "âŠƒ",
                SupersetEqual: "âŠ‡",
                suphsol: "âŸ‰",
                suphsub: "â«—",
                suplarr: "â¥»",
                supmult: "â«‚",
                supnE: "â«Œ",
                supne: "âŠ‹",
                supplus: "â«€",
                Supset: "â‹‘",
                supset: "âŠƒ",
                supseteq: "âŠ‡",
                supseteqq: "â«†",
                supsetneq: "âŠ‹",
                supsetneqq: "â«Œ",
                supsim: "â«ˆ",
                supsub: "â«”",
                supsup: "â«–",
                swarhk: "â¤¦",
                swArr: "â‡™",
                swarr: "â†™",
                swarrow: "â†™",
                swnwar: "â¤ª",
                szlig: "ÃŸ",
                Tab: "\t",
                target: "âŒ–",
                Tau: "Î¤",
                tau: "Ï„",
                tbrk: "âŽ´",
                Tcaron: "Å¤",
                tcaron: "Å¥",
                Tcedil: "Å¢",
                tcedil: "Å£",
                Tcy: "Ð¢",
                tcy: "Ñ‚",
                tdot: "âƒ›",
                telrec: "âŒ•",
                Tfr: "ð”—",
                tfr: "ð”±",
                there4: "âˆ´",
                Therefore: "âˆ´",
                therefore: "âˆ´",
                Theta: "Î˜",
                theta: "Î¸",
                thetasym: "Ï‘",
                thetav: "Ï‘",
                thickapprox: "â‰ˆ",
                thicksim: "âˆ¼",
                ThickSpace: "âŸâ€Š",
                thinsp: "â€‰",
                ThinSpace: "â€‰",
                thkap: "â‰ˆ",
                thksim: "âˆ¼",
                THORN: "Ãž",
                thorn: "Ã¾",
                Tilde: "âˆ¼",
                tilde: "Ëœ",
                TildeEqual: "â‰ƒ",
                TildeFullEqual: "â‰…",
                TildeTilde: "â‰ˆ",
                times: "Ã—",
                timesb: "âŠ ",
                timesbar: "â¨±",
                timesd: "â¨°",
                tint: "âˆ­",
                toea: "â¤¨",
                top: "âŠ¤",
                topbot: "âŒ¶",
                topcir: "â«±",
                Topf: "ð•‹",
                topf: "ð•¥",
                topfork: "â«š",
                tosa: "â¤©",
                tprime: "â€´",
                TRADE: "â„¢",
                trade: "â„¢",
                triangle: "â–µ",
                triangledown: "â–¿",
                triangleleft: "â—ƒ",
                trianglelefteq: "âŠ´",
                triangleq: "â‰œ",
                triangleright: "â–¹",
                trianglerighteq: "âŠµ",
                tridot: "â—¬",
                trie: "â‰œ",
                triminus: "â¨º",
                TripleDot: "âƒ›",
                triplus: "â¨¹",
                trisb: "â§",
                tritime: "â¨»",
                trpezium: "â¢",
                Tscr: "ð’¯",
                tscr: "ð“‰",
                TScy: "Ð¦",
                tscy: "Ñ†",
                TSHcy: "Ð‹",
                tshcy: "Ñ›",
                Tstrok: "Å¦",
                tstrok: "Å§",
                twixt: "â‰¬",
                twoheadleftarrow: "â†ž",
                twoheadrightarrow: "â† ",
                Uacute: "Ãš",
                uacute: "Ãº",
                Uarr: "â†Ÿ",
                uArr: "â‡‘",
                uarr: "â†‘",
                Uarrocir: "â¥‰",
                Ubrcy: "ÐŽ",
                ubrcy: "Ñž",
                Ubreve: "Å¬",
                ubreve: "Å­",
                Ucirc: "Ã›",
                ucirc: "Ã»",
                Ucy: "Ð£",
                ucy: "Ñƒ",
                udarr: "â‡…",
                Udblac: "Å°",
                udblac: "Å±",
                udhar: "â¥®",
                ufisht: "â¥¾",
                Ufr: "ð”˜",
                ufr: "ð”²",
                Ugrave: "Ã™",
                ugrave: "Ã¹",
                uHar: "â¥£",
                uharl: "â†¿",
                uharr: "â†¾",
                uhblk: "â–€",
                ulcorn: "âŒœ",
                ulcorner: "âŒœ",
                ulcrop: "âŒ",
                ultri: "â—¸",
                Umacr: "Åª",
                umacr: "Å«",
                uml: "Â¨",
                UnderBar: "_",
                UnderBrace: "âŸ",
                UnderBracket: "âŽµ",
                UnderParenthesis: "â",
                Union: "â‹ƒ",
                UnionPlus: "âŠŽ",
                Uogon: "Å²",
                uogon: "Å³",
                Uopf: "ð•Œ",
                uopf: "ð•¦",
                UpArrow: "â†‘",
                Uparrow: "â‡‘",
                uparrow: "â†‘",
                UpArrowBar: "â¤’",
                UpArrowDownArrow: "â‡…",
                UpDownArrow: "â†•",
                Updownarrow: "â‡•",
                updownarrow: "â†•",
                UpEquilibrium: "â¥®",
                upharpoonleft: "â†¿",
                upharpoonright: "â†¾",
                uplus: "âŠŽ",
                UpperLeftArrow: "â†–",
                UpperRightArrow: "â†—",
                Upsi: "Ï’",
                upsi: "Ï…",
                upsih: "Ï’",
                Upsilon: "Î¥",
                upsilon: "Ï…",
                UpTee: "âŠ¥",
                UpTeeArrow: "â†¥",
                upuparrows: "â‡ˆ",
                urcorn: "âŒ",
                urcorner: "âŒ",
                urcrop: "âŒŽ",
                Uring: "Å®",
                uring: "Å¯",
                urtri: "â—¹",
                Uscr: "ð’°",
                uscr: "ð“Š",
                utdot: "â‹°",
                Utilde: "Å¨",
                utilde: "Å©",
                utri: "â–µ",
                utrif: "â–´",
                uuarr: "â‡ˆ",
                Uuml: "Ãœ",
                uuml: "Ã¼",
                uwangle: "â¦§",
                vangrt: "â¦œ",
                varepsilon: "Ïµ",
                varkappa: "Ï°",
                varnothing: "âˆ…",
                varphi: "Ï•",
                varpi: "Ï–",
                varpropto: "âˆ",
                vArr: "â‡•",
                varr: "â†•",
                varrho: "Ï±",
                varsigma: "Ï‚",
                varsubsetneq: "âŠŠï¸€",
                varsubsetneqq: "â«‹ï¸€",
                varsupsetneq: "âŠ‹ï¸€",
                varsupsetneqq: "â«Œï¸€",
                vartheta: "Ï‘",
                vartriangleleft: "âŠ²",
                vartriangleright: "âŠ³",
                Vbar: "â««",
                vBar: "â«¨",
                vBarv: "â«©",
                Vcy: "Ð’",
                vcy: "Ð²",
                VDash: "âŠ«",
                Vdash: "âŠ©",
                vDash: "âŠ¨",
                vdash: "âŠ¢",
                Vdashl: "â«¦",
                Vee: "â‹",
                vee: "âˆ¨",
                veebar: "âŠ»",
                veeeq: "â‰š",
                vellip: "â‹®",
                Verbar: "â€–",
                verbar: "|",
                Vert: "â€–",
                vert: "|",
                VerticalBar: "âˆ£",
                VerticalLine: "|",
                VerticalSeparator: "â˜",
                VerticalTilde: "â‰€",
                VeryThinSpace: "â€Š",
                Vfr: "ð”™",
                vfr: "ð”³",
                vltri: "âŠ²",
                vnsub: "âŠ‚âƒ’",
                vnsup: "âŠƒâƒ’",
                Vopf: "ð•",
                vopf: "ð•§",
                vprop: "âˆ",
                vrtri: "âŠ³",
                Vscr: "ð’±",
                vscr: "ð“‹",
                vsubnE: "â«‹ï¸€",
                vsubne: "âŠŠï¸€",
                vsupnE: "â«Œï¸€",
                vsupne: "âŠ‹ï¸€",
                Vvdash: "âŠª",
                vzigzag: "â¦š",
                Wcirc: "Å´",
                wcirc: "Åµ",
                wedbar: "â©Ÿ",
                Wedge: "â‹€",
                wedge: "âˆ§",
                wedgeq: "â‰™",
                weierp: "â„˜",
                Wfr: "ð”š",
                wfr: "ð”´",
                Wopf: "ð•Ž",
                wopf: "ð•¨",
                wp: "â„˜",
                wr: "â‰€",
                wreath: "â‰€",
                Wscr: "ð’²",
                wscr: "ð“Œ",
                xcap: "â‹‚",
                xcirc: "â—¯",
                xcup: "â‹ƒ",
                xdtri: "â–½",
                Xfr: "ð”›",
                xfr: "ð”µ",
                xhArr: "âŸº",
                xharr: "âŸ·",
                Xi: "Îž",
                xi: "Î¾",
                xlArr: "âŸ¸",
                xlarr: "âŸµ",
                xmap: "âŸ¼",
                xnis: "â‹»",
                xodot: "â¨€",
                Xopf: "ð•",
                xopf: "ð•©",
                xoplus: "â¨",
                xotime: "â¨‚",
                xrArr: "âŸ¹",
                xrarr: "âŸ¶",
                Xscr: "ð’³",
                xscr: "ð“",
                xsqcup: "â¨†",
                xuplus: "â¨„",
                xutri: "â–³",
                xvee: "â‹",
                xwedge: "â‹€",
                Yacute: "Ã",
                yacute: "Ã½",
                YAcy: "Ð¯",
                yacy: "Ñ",
                Ycirc: "Å¶",
                ycirc: "Å·",
                Ycy: "Ð«",
                ycy: "Ñ‹",
                yen: "Â¥",
                Yfr: "ð”œ",
                yfr: "ð”¶",
                YIcy: "Ð‡",
                yicy: "Ñ—",
                Yopf: "ð•",
                yopf: "ð•ª",
                Yscr: "ð’´",
                yscr: "ð“Ž",
                YUcy: "Ð®",
                yucy: "ÑŽ",
                Yuml: "Å¸",
                yuml: "Ã¿",
                Zacute: "Å¹",
                zacute: "Åº",
                Zcaron: "Å½",
                zcaron: "Å¾",
                Zcy: "Ð—",
                zcy: "Ð·",
                Zdot: "Å»",
                zdot: "Å¼",
                zeetrf: "â„¨",
                ZeroWidthSpace: "â€‹",
                Zeta: "Î–",
                zeta: "Î¶",
                Zfr: "â„¨",
                zfr: "ð”·",
                ZHcy: "Ð–",
                zhcy: "Ð¶",
                zigrarr: "â‡",
                Zopf: "â„¤",
                zopf: "ð•«",
                Zscr: "ð’µ",
                zscr: "ð“",
                zwj: "â€",
                zwnj: "â€Œ"
            }), t.entityMap = t.HTML_ENTITIES
        }), Qa = (Ya.XML_ENTITIES, Ya.HTML_ENTITIES, Ya.entityMap, Zn.NAMESPACE),
        Fr = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        Br = new RegExp("[\\-\\.0-9" + Fr.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
        Ja = new RegExp("^" + Fr.source + Br.source + "*(?::" + Fr.source + Br.source + "*)?$"), Za = 0, eo = 1, to = 2,
        io = 3, so = 4, ro = 5, no = 6, ao = 7;

    function oo(e, t) {
        this.message = e, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, oo)
    }

    function lo() {
    }

    function ho(e, t) {
        return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t
    }

    function uo(e, t, i) {
        for (var s = e.tagName, r = null, n = e.length; n--;) {
            var a = e[n], o = a.qName, l = a.value,
                o = 0 < (h = o.indexOf(":")) ? (d = a.prefix = o.slice(0, h), u = o.slice(h + 1), "xmlns" === d && u) : (d = null, "xmlns" === (u = o) && "");
            a.localName = u, !1 !== o && (null == r && (r = {}, co(i, i = {})), i[o] = r[o] = l, a.uri = Qa.XMLNS, t.startPrefixMapping(o, l))
        }
        for (var d, n = e.length; n--;) (d = (a = e[n]).prefix) && ("xml" === d && (a.uri = Qa.XML), "xmlns" !== d) && (a.uri = i[d || ""]);
        var h,
            u = 0 < (h = s.indexOf(":")) ? (d = e.prefix = s.slice(0, h), e.localName = s.slice(h + 1)) : (d = null, e.localName = s),
            c = e.uri = i[d || ""];
        if (t.startElement(c, u, s, e), !e.closed) return e.currentNSMap = i, e.localNSMap = r, 1;
        if (t.endElement(c, u, s), r) for (d in r) Object.prototype.hasOwnProperty.call(r, d) && t.endPrefixMapping(d)
    }

    function co(e, t) {
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
    }

    function po() {
        this.attributeNames = {}
    }

    (oo.prototype = new Error).name = oo.name, lo.prototype = {
        parse: function (e, t, i) {
            var s = this.domBuilder;
            s.startDocument(), co(t, t = {}), function (i, e, s, r, n) {
                function a(e) {
                    var t = e.slice(1, -1);
                    return Object.hasOwnProperty.call(s, t) ? s[t] : "#" === t.charAt(0) ? 65535 < (t = parseInt(t.substr(1).replace("x", "0x"))) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : String.fromCharCode(t) : (n.error("entity not found:" + e), e)
                }

                function t(e) {
                    var t;
                    m < e && (t = i.substring(m, e).replace(/&#?\w+;/g, a), u && o(m), r.characters(t, 0, e - m), m = e)
                }

                function o(e, t) {
                    for (; d <= e && (t = h.exec(i));) l = t.index, d = l + t[0].length, u.lineNumber++;
                    u.columnNumber = e - l + 1
                }

                var l = 0, d = 0, h = /.*(?:\r\n?|\n)|.*$/g, u = r.locator, c = [{currentNSMap: e}], p = {}, m = 0;
                for (; ;) {
                    try {
                        var g, f, y = i.indexOf("<", m);
                        if (y < 0) return i.substr(m).match(/^\s*$/) || (g = r.doc, f = g.createTextNode(i.substr(m)), g.appendChild(f), r.currentElement = f);
                        switch (m < y && t(y), i.charAt(y + 1)) {
                            case"/":
                                var _ = i.indexOf(">", y + 3), v = i.substring(y + 2, _).replace(/[ \t\n\r]+$/g, ""),
                                    b = c.pop(),
                                    T = (_ < 0 ? (v = i.substring(y + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + v + " is not complete:" + b.tagName), _ = y + 1 + v.length) : v.match(/\s</) && (v = v.replace(/[\s<].*/, ""), n.error("end tag name: " + v + " maybe not complete"), _ = y + 1 + v.length), b.localNSMap),
                                    w = b.tagName == v;
                                if (w || b.tagName && b.tagName.toLowerCase() == v.toLowerCase()) {
                                    if (r.endElement(b.uri, b.localName, v), T) for (var S in T) Object.prototype.hasOwnProperty.call(T, S) && r.endPrefixMapping(S);
                                    w || n.fatalError("end tag name: " + v + " is not match the current start tagName:" + b.tagName)
                                } else c.push(b);
                                _++;
                                break;
                            case"?":
                                u && o(y), _ = function (e, t, i) {
                                    var s = e.indexOf("?>", t);
                                    if (s) {
                                        e = e.substring(t, s).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                                        if (e) return e[0].length, i.processingInstruction(e[1], e[2]), s + 2
                                    }
                                    return -1
                                }(i, y, r);
                                break;
                            case"!":
                                u && o(y), _ = function (e, t, i, s) {
                                    {
                                        if ("-" === e.charAt(t + 2)) return "-" === e.charAt(t + 3) ? (n = e.indexOf("--\x3e", t + 4), t < n ? (i.comment(e, t + 4, n - t - 4), n + 3) : (s.error("Unclosed comment"), -1)) : -1;
                                        if ("CDATA[" == e.substr(t + 3, 6)) return n = e.indexOf("]]>", t + 9), i.startCDATA(), i.characters(e, t + 9, n - t - 9), i.endCDATA(), n + 3;
                                        var r, s = function (e, t) {
                                            var i, s = [], r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                                            r.lastIndex = t, r.exec(e);
                                            for (; i = r.exec(e);) if (s.push(i), i[1]) return s
                                        }(e, t), n = s.length;
                                        if (1 < n && /!doctype/i.test(s[0][0])) return e = s[1][0], r = t = !1, 3 < n && (/^public$/i.test(s[2][0]) ? (t = s[3][0], r = 4 < n && s[4][0]) : /^system$/i.test(s[2][0]) && (r = s[3][0])), s = s[n - 1], i.startDTD(e, t, r), i.endDTD(), s.index + s[0].length
                                    }
                                    return -1
                                }(i, y, r, n);
                                break;
                            default:
                                u && o(y);
                                var E = new po, k = c[c.length - 1].currentNSMap, _ = function (e, t, s, i, r, n) {
                                    function a(e, t, i) {
                                        s.attributeNames.hasOwnProperty(e) && n.fatalError("Attribute " + e + " redefined"), s.addValue(e, t.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r), i)
                                    }

                                    var o, l = ++t, d = Za;
                                    for (; ;) {
                                        var h = e.charAt(l);
                                        switch (h) {
                                            case"=":
                                                if (d === eo) o = e.slice(t, l); else if (d !== to) throw new Error("attribute equal must after attrName");
                                                d = io;
                                                break;
                                            case"'":
                                            case'"':
                                                if (d === io || d === eo) {
                                                    if (d === eo && (n.warning('attribute value must after "="'), o = e.slice(t, l)), t = l + 1, !(0 < (l = e.indexOf(h, t)))) throw new Error("attribute value no end '" + h + "' match");
                                                    u = e.slice(t, l), a(o, u, t - 1)
                                                } else {
                                                    if (d != so) throw new Error('attribute value must after "="');
                                                    u = e.slice(t, l), a(o, u, t), n.warning('attribute "' + o + '" missed start quot(' + h + ")!!"), t = l + 1
                                                }
                                                d = ro;
                                                break;
                                            case"/":
                                                switch (d) {
                                                    case Za:
                                                        s.setTagName(e.slice(t, l));
                                                    case ro:
                                                    case no:
                                                    case ao:
                                                        d = ao, s.closed = !0;
                                                    case so:
                                                    case eo:
                                                        break;
                                                    case to:
                                                        s.closed = !0;
                                                        break;
                                                    default:
                                                        throw new Error("attribute invalid close char('/')")
                                                }
                                                break;
                                            case"":
                                                return n.error("unexpected end of input"), d == Za && s.setTagName(e.slice(t, l)), l;
                                            case">":
                                                switch (d) {
                                                    case Za:
                                                        s.setTagName(e.slice(t, l));
                                                    case ro:
                                                    case no:
                                                    case ao:
                                                        break;
                                                    case so:
                                                    case eo:
                                                        "/" === (u = e.slice(t, l)).slice(-1) && (s.closed = !0, u = u.slice(0, -1));
                                                    case to:
                                                        d === to && (u = o), d == so ? (n.warning('attribute "' + u + '" missed quot(")!'), a(o, u, t)) : (Qa.isHTML(i[""]) && u.match(/^(?:disabled|checked|selected)$/i) || n.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'), a(u, u, t));
                                                        break;
                                                    case io:
                                                        throw new Error("attribute value missed!!")
                                                }
                                                return l;
                                            case"Â€":
                                                h = " ";
                                            default:
                                                if (h <= " ") switch (d) {
                                                    case Za:
                                                        s.setTagName(e.slice(t, l)), d = no;
                                                        break;
                                                    case eo:
                                                        o = e.slice(t, l), d = to;
                                                        break;
                                                    case so:
                                                        var u = e.slice(t, l);
                                                        n.warning('attribute "' + u + '" missed quot(")!!'), a(o, u, t);
                                                    case ro:
                                                        d = no
                                                } else switch (d) {
                                                    case to:
                                                        s.tagName, Qa.isHTML(i[""]) && o.match(/^(?:disabled|checked|selected)$/i) || n.warning('attribute "' + o + '" missed value!! "' + o + '" instead2!!'), a(o, o, t), t = l, d = eo;
                                                        break;
                                                    case ro:
                                                        n.warning('attribute space is required"' + o + '"!!');
                                                    case no:
                                                        d = eo, t = l;
                                                        break;
                                                    case io:
                                                        d = so, t = l;
                                                        break;
                                                    case ao:
                                                        throw new Error("elements closed character '/' and '>' must be connected to")
                                                }
                                        }
                                        l++
                                    }
                                }(i, y, E, k, a, n), C = E.length;
                                if (!E.closed && function (e, t, i, s) {
                                    var r = s[i];
                                    null == r && ((r = e.lastIndexOf("</" + i + ">")) < t && (r = e.lastIndexOf("</" + i)), s[i] = r);
                                    return r < t
                                }(i, _, E.tagName, p) && (E.closed = !0, s.nbsp || n.warning("unclosed xml attribute")), u && C) {
                                    for (var x = ho(u, {}), I = 0; I < C; I++) {
                                        var A = E[I];
                                        o(A.offset), A.locator = ho(u, {})
                                    }
                                    r.locator = x, uo(E, r, k) && c.push(E), r.locator = u
                                } else uo(E, r, k) && c.push(E);
                                Qa.isHTML(E.uri) && !E.closed ? _ = function (e, t, i, s, r) {
                                    if (/^(?:script|textarea)$/i.test(i)) {
                                        var n = e.indexOf("</" + i + ">", t), e = e.substring(t + 1, n);
                                        if (/[&<]/.test(e)) return /^script$/i.test(i) ? r.characters(e, 0, e.length) : (e = e.replace(/&#?\w+;/g, s), r.characters(e, 0, e.length)), n
                                    }
                                    return t + 1
                                }(i, _, E.tagName, a, r) : _++
                        }
                    } catch (e) {
                        if (e instanceof oo) throw e;
                        n.error("element parse error: " + e), _ = -1
                    }
                    m < _ ? m = _ : t(Math.max(y, m) + 1)
                }
            }(e, t, i, s, this.errorHandler), s.endDocument()
        }
    }, po.prototype = {
        setTagName: function (e) {
            if (!Ja.test(e)) throw new Error("invalid tagName:" + e);
            this.tagName = e
        }, addValue: function (e, t, i) {
            if (!Ja.test(e)) throw new Error("invalid attribute:" + e);
            this.attributeNames[e] = this.length, this[this.length++] = {qName: e, value: t, offset: i}
        }, length: 0, getLocalName: function (e) {
            return this[e].localName
        }, getLocator: function (e) {
            return this[e].locator
        }, getQName: function (e) {
            return this[e].qName
        }, getURI: function (e) {
            return this[e].uri
        }, getValue: function (e) {
            return this[e].value
        }
    };
    var Ur = {XMLReader: lo, ParseError: oo}, mo = Or.DOMImplementation, go = Zn.NAMESPACE, fo = Ur.ParseError,
        yo = Ur.XMLReader;

    function _o(e) {
        return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n")
    }

    function vo(e) {
        this.options = e || {locator: {}}
    }

    function bo() {
        this.cdata = !1
    }

    function To(e, t) {
        t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber
    }

    function wo(e) {
        if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
    }

    function So(e, t, i) {
        return "string" == typeof e ? e.substr(t, i) : e.length >= t + i || t ? new java.lang.String(e, t, i) + "" : e
    }

    function Eo(e, t) {
        (e.currentElement || e.doc).appendChild(t)
    }

    vo.prototype.parseFromString = function (e, t) {
        var i = this.options, s = new yo, r = i.domBuilder || new bo, n = i.errorHandler, a = i.locator,
            o = i.xmlns || {}, t = /\/x?html?$/.test(t), l = t ? Ya.HTML_ENTITIES : Ya.XML_ENTITIES,
            n = (a && r.setDocumentLocator(a), s.errorHandler = function (s, e, r) {
                if (!s) {
                    if (e instanceof bo) return e;
                    s = e
                }
                var n = {}, a = s instanceof Function;

                function t(t) {
                    var i = s[t];
                    !i && a && (i = 2 == s.length ? function (e) {
                        s(t, e)
                    } : s), n[t] = i ? function (e) {
                        i("[xmldom " + t + "]\t" + e + wo(r))
                    } : function () {
                    }
                }

                return r = r || {}, t("warning"), t("error"), t("fatalError"), n
            }(n, r, a), s.domBuilder = i.domBuilder || r, t && (o[""] = go.HTML), o.xml = o.xml || go.XML, i.normalizeLineEndings || _o);
        return e && "string" == typeof e ? s.parse(n(e), o, l) : s.errorHandler.error("invalid doc source"), r.doc
    }, bo.prototype = {
        startDocument: function () {
            this.doc = (new mo).createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
        }, startElement: function (e, t, i, s) {
            var r = this.doc, n = r.createElementNS(e, i || t), a = s.length;
            Eo(this, n), this.currentElement = n, this.locator && To(this.locator, n);
            for (var o = 0; o < a; o++) {
                var e = s.getURI(o), l = s.getValue(o), i = s.getQName(o), d = r.createAttributeNS(e, i);
                this.locator && To(s.getLocator(o), d), d.value = d.nodeValue = l, n.setAttributeNode(d)
            }
        }, endElement: function (e, t, i) {
            var s = this.currentElement;
            s.tagName, this.currentElement = s.parentNode
        }, startPrefixMapping: function (e, t) {
        }, endPrefixMapping: function (e) {
        }, processingInstruction: function (e, t) {
            e = this.doc.createProcessingInstruction(e, t);
            this.locator && To(this.locator, e), Eo(this, e)
        }, ignorableWhitespace: function (e, t, i) {
        }, characters: function (e, t, i) {
            var s;
            (e = So.apply(this, arguments)) && (s = this.cdata ? this.doc.createCDATASection(e) : this.doc.createTextNode(e), this.currentElement ? this.currentElement.appendChild(s) : /^\s*$/.test(e) && this.doc.appendChild(s), this.locator) && To(this.locator, s)
        }, skippedEntity: function (e) {
        }, endDocument: function () {
            this.doc.normalize()
        }, setDocumentLocator: function (e) {
            (this.locator = e) && (e.lineNumber = 0)
        }, comment: function (e, t, i) {
            e = So.apply(this, arguments);
            e = this.doc.createComment(e);
            this.locator && To(this.locator, e), Eo(this, e)
        }, startCDATA: function () {
            this.cdata = !0
        }, endCDATA: function () {
            this.cdata = !1
        }, startDTD: function (e, t, i) {
            var s = this.doc.implementation;
            s && s.createDocumentType && (s = s.createDocumentType(e, t, i), this.locator && To(this.locator, s), Eo(this, s), this.doc.doctype = s)
        }, warning: function (e) {
        }, error: function (e) {
        }, fatalError: function (e) {
            throw new fo(e, this.locator)
        }
    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
        bo.prototype[e] = function () {
            return null
        }
    });
    var ko = {__DOMHandler: bo, normalizeLineEndings: _o, DOMParser: vo}.DOMParser;
    /*! @name mpd-parser @version 1.2.2 @license Apache-2.0 */
    const Co = e => !!e && "object" == typeof e,
        I = (...e) => e.reduce((t, i) => ("object" == typeof i && Object.keys(i).forEach(e => {
            Array.isArray(t[e]) && Array.isArray(i[e]) ? t[e] = t[e].concat(i[e]) : Co(t[e]) && Co(i[e]) ? t[e] = I(t[e], i[e]) : t[e] = i[e]
        }), t), {}), xo = t => Object.keys(t).map(e => t[e]), Io = e => e.reduce((e, t) => e.concat(t), []), Ao = t => {
            if (!t.length) return [];
            var i = [];
            for (let e = 0; e < t.length; e++) i.push(t[e]);
            return i
        };
    var Do = {
        INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
        INVALID_NUMBER_OF_CONTENT_STEERING: "INVALID_NUMBER_OF_CONTENT_STEERING",
        DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
        DASH_INVALID_XML: "DASH_INVALID_XML",
        NO_BASE_URL: "NO_BASE_URL",
        MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
        SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
        UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME"
    };
    const Lo = ({baseUrl: s = "", source: r = "", range: n = "", indexRange: a = ""}) => {
            s = {uri: r, resolvedUri: Rn(s || "", r)};
            if (n || a) {
                r = (n || a).split("-");
                let e = window.BigInt ? window.BigInt(r[0]) : parseInt(r[0], 10),
                    t = window.BigInt ? window.BigInt(r[1]) : parseInt(r[1], 10);
                e < Number.MAX_SAFE_INTEGER && "bigint" == typeof e && (e = Number(e)), t < Number.MAX_SAFE_INTEGER && "bigint" == typeof t && (t = Number(t));
                let i;
                "bigint" == typeof (i = "bigint" == typeof t || "bigint" == typeof e ? window.BigInt(t) - window.BigInt(e) + window.BigInt(1) : t - e + 1) && i < Number.MAX_SAFE_INTEGER && (i = Number(i)), s.byterange = {
                    length: i,
                    offset: e
                }
            }
            return s
        }, Po = e => (e && "number" != typeof e && (e = parseInt(e, 10)), isNaN(e) ? null : e), Oo = {
            static(e) {
                var {duration: t, timescale: i = 1, sourceDuration: s, periodDuration: r} = e, e = Po(e.endNumber),
                    t = t / i;
                return "number" == typeof e ? {start: 0, end: e} : "number" == typeof r ? {
                    start: 0,
                    end: r / t
                } : {start: 0, end: s / t}
            }, dynamic(e) {
                var {
                        NOW: t,
                        clientOffset: i,
                        availabilityStartTime: s,
                        timescale: r = 1,
                        duration: n,
                        periodStart: a = 0,
                        minimumUpdatePeriod: o = 0,
                        timeShiftBufferDepth: l = 1 / 0
                    } = e, e = Po(e.endNumber), t = (t + i) / 1e3, i = s + a, s = Math.ceil((t + o - i) * r / n),
                    a = Math.floor((t - i - l) * r / n), o = Math.floor((t - i) * r / n);
                return {start: Math.max(0, a), end: "number" == typeof e ? e : Math.min(s, o)}
            }
        }, No = e => {
            var n, {type: t, duration: i, timescale: s = 1, periodDuration: r, sourceDuration: a} = e, {
                start: o,
                end: l
            } = Oo[t](e), o = ((t, i) => {
                var s = [];
                for (let e = t; e < i; e++) s.push(e);
                return s
            })(o, l).map((n = e, e => {
                var {duration: t, timescale: i = 1, periodStart: s, startNumber: r = 1} = n;
                return {number: r + e, duration: t / i, timeline: s, time: e * t}
            }));
            return "static" === t && (o[l = o.length - 1].duration = ("number" == typeof r ? r : a) - i / s * l), o
        }, Ro = e => {
            var {
                baseUrl: t,
                initialization: i = {},
                sourceDuration: s,
                indexRange: r = "",
                periodStart: n,
                presentationTime: a,
                number: o = 0,
                duration: l
            } = e;
            if (t) return i = Lo({baseUrl: t, source: i.sourceURL, range: i.range}), (t = Lo({
                baseUrl: t,
                source: t,
                indexRange: r
            })).map = i, l ? (r = No(e)).length && (t.duration = r[0].duration, t.timeline = r[0].timeline) : s && (t.duration = s, t.timeline = n), t.presentationTime = a || n, t.number = o, [t];
            throw new Error(Do.NO_BASE_URL)
        }, Mo = (e, i, s) => {
            var r = e.sidx.map || null, n = e.sidx.duration, a = e.timeline || 0, t = e.sidx.byterange,
                t = t.offset + t.length, o = i.timescale, l = i.references.filter(e => 1 !== e.referenceType), d = [],
                h = e.endList ? "static" : "dynamic", u = e.sidx.timeline;
            let c = u, p = e.mediaSequence || 0, m;
            m = "bigint" == typeof i.firstOffset ? window.BigInt(t) + i.firstOffset : t + i.firstOffset;
            for (let t = 0; t < l.length; t++) {
                var g = i.references[t], f = g.referencedSize, g = g.subsegmentDuration;
                let e;
                e = "bigint" == typeof m ? m + window.BigInt(f) - window.BigInt(1) : m + f - 1;
                var y = m + "-" + e, y = {
                    baseUrl: s,
                    timescale: o,
                    timeline: a,
                    periodStart: u,
                    presentationTime: c,
                    number: p,
                    duration: g,
                    sourceDuration: n,
                    indexRange: y,
                    type: h
                }, y = Ro(y)[0];
                r && (y.map = r), d.push(y), "bigint" == typeof m ? m += window.BigInt(f) : m += f, c += g / o, p++
            }
            return e.segments = d, e
        }, Uo = ["AUDIO", "SUBTITLES"], Bo = e => {
            return e = e, i = ({timeline: e}) => e, xo(e.reduce((t, e) => (e.forEach(e => {
                t[i(e)] = e
            }), t), {})).sort((e, t) => e.timeline > t.timeline ? 1 : -1);
            var i
        }, Fo = e => {
            let r = [];
            var n, a;
            return n = e, e = Uo, a = (e, t, i, s) => {
                r = r.concat(e.playlists || [])
            }, e.forEach(function (e) {
                for (var t in n.mediaGroups[e]) for (var i in n.mediaGroups[e][t]) {
                    var s = n.mediaGroups[e][t][i];
                    a(s, e, t, i)
                }
            }), r
        }, jo = ({playlist: i, mediaSequence: e}) => {
            i.mediaSequence = e, i.segments.forEach((e, t) => {
                e.number = i.mediaSequence + t
            })
        }, qo = ({oldManifest: e, newManifest: t}) => {
            var r, n, i = e.playlists.concat(Fo(e)), s = t.playlists.concat(Fo(t));
            return t.timelineStarts = Bo([e.timelineStarts, t.timelineStarts]), {
                oldPlaylists: r,
                newPlaylists: e,
                timelineStarts: n
            } = [{oldPlaylists: i, newPlaylists: s, timelineStarts: t.timelineStarts}][0], e.forEach(t => {
                t.discontinuitySequence = n.findIndex(function ({timeline: e}) {
                    return e === t.timeline
                });
                var e = ((t, i) => {
                    for (let e = 0; e < t.length; e++) if (t[e].attributes.NAME === i) return t[e];
                    return null
                })(r, t.attributes.NAME);
                if (e && !t.sidx) {
                    const s = t.segments[0];
                    var i = e.segments.findIndex(function (e) {
                        return Math.abs(e.presentationTime - s.presentationTime) < 1 / 60
                    });
                    -1 === i ? (jo({
                        playlist: t,
                        mediaSequence: e.mediaSequence + e.segments.length
                    }), t.segments[0].discontinuity = !0, t.discontinuityStarts.unshift(0), (!e.segments.length && t.timeline > e.timeline || e.segments.length && t.timeline > e.segments[e.segments.length - 1].timeline) && t.discontinuitySequence--) : (e.segments[i].discontinuity && !s.discontinuity && (s.discontinuity = !0, t.discontinuityStarts.unshift(0), t.discontinuitySequence--), jo({
                        playlist: t,
                        mediaSequence: e.segments[i].number
                    }))
                }
            }), t
        }, Ho = e => e && e.uri + "-" + (e => {
            let t;
            return t = "bigint" == typeof e.offset || "bigint" == typeof e.length ? window.BigInt(e.offset) + window.BigInt(e.length) - window.BigInt(1) : e.offset + e.length - 1, e.offset + "-" + t
        })(e.byterange), Vo = e => {
            e = e.reduce(function (e, t) {
                return e[t.attributes.baseUrl] || (e[t.attributes.baseUrl] = []), e[t.attributes.baseUrl].push(t), e
            }, {});
            let t = [];
            return Object.values(e).forEach(e => {
                e = xo(e.reduce((e, t) => {
                    var i = t.attributes.id + (t.attributes.lang || "");
                    return e[i] ? (t.segments && (t.segments[0] && (t.segments[0].discontinuity = !0), e[i].segments.push(...t.segments)), t.attributes.contentProtection && (e[i].attributes.contentProtection = t.attributes.contentProtection)) : (e[i] = t, e[i].attributes.timelineStarts = []), e[i].attributes.timelineStarts.push({
                        start: t.attributes.periodStart,
                        timeline: t.attributes.periodStart
                    }), e
                }, {}));
                t = t.concat(e)
            }), t.map(e => {
                var t, s;
                return e.discontinuityStarts = (t = e.segments || [], s = "discontinuity", t.reduce((e, t, i) => (t[s] && e.push(i), e), [])), e
            })
        }, zo = (e, t) => {
            var i = Ho(e.sidx), t = i && t[i] && t[i].sidx;
            return t && Mo(e, t, e.sidx.resolvedUri), e
        }, $o = (e, o = {}) => e.reduce((e, t) => {
            var i, s, r, n, a = t.attributes.label || t.attributes.lang || "text";
            return e[a] || (e[a] = {
                language: a,
                default: !1,
                autoselect: !1,
                playlists: [],
                uri: ""
            }), e[a].playlists.push(zo(({
                attributes: a,
                segments: t,
                mediaSequence: i,
                discontinuityStarts: s,
                discontinuitySequence: r
            } = [t][0], "undefined" == typeof t && (t = [{
                uri: a.baseUrl,
                timeline: a.periodStart,
                resolvedUri: a.baseUrl || "",
                duration: a.sourceDuration,
                number: 0
            }], a.duration = a.sourceDuration), n = {
                NAME: a.id,
                BANDWIDTH: a.bandwidth,
                "PROGRAM-ID": 1
            }, a.codecs && (n.CODECS = a.codecs), n = {
                attributes: n,
                uri: "",
                endList: "static" === a.type,
                timeline: a.periodStart,
                resolvedUri: a.baseUrl || "",
                targetDuration: a.duration,
                timelineStarts: a.timelineStarts,
                discontinuityStarts: s,
                discontinuitySequence: r,
                mediaSequence: i,
                segments: t
            }, a.serviceLocation && (n.attributes.serviceLocation = a.serviceLocation), n), o)), e
        }, {}), Wo = ({attributes: e, segments: t, sidx: i, discontinuityStarts: s}) => {
            s = {
                attributes: {
                    NAME: e.id,
                    AUDIO: "audio",
                    SUBTITLES: "subs",
                    RESOLUTION: {width: e.width, height: e.height},
                    CODECS: e.codecs,
                    BANDWIDTH: e.bandwidth,
                    "PROGRAM-ID": 1
                },
                uri: "",
                endList: "static" === e.type,
                timeline: e.periodStart,
                resolvedUri: e.baseUrl || "",
                targetDuration: e.duration,
                discontinuityStarts: s,
                timelineStarts: e.timelineStarts,
                segments: t
            };
            return e.frameRate && (s.attributes["FRAME-RATE"] = e.frameRate), e.contentProtection && (s.contentProtection = e.contentProtection), e.serviceLocation && (s.attributes.serviceLocation = e.serviceLocation), i && (s.sidx = i), s
        }, Go = ({attributes: e}) => "video/mp4" === e.mimeType || "video/webm" === e.mimeType || "video" === e.contentType,
        Xo = ({attributes: e}) => "audio/mp4" === e.mimeType || "audio/webm" === e.mimeType || "audio" === e.contentType,
        Ko = ({attributes: e}) => "text/vtt" === e.mimeType || "text" === e.contentType,
        Yo = i => i ? Object.keys(i).reduce((e, t) => {
            t = i[t];
            return e.concat(t.playlists)
        }, []) : [], Qo = ({
                               dashPlaylists: e,
                               locations: t,
                               contentSteering: i,
                               sidxMapping: s = {},
                               previousManifest: r,
                               eventStream: n
                           }) => {
            var a, o, l, d, h, u, c, p;
            return e.length ? ({
                sourceDuration: d,
                type: u,
                suggestedPresentationDelay: c,
                minimumUpdatePeriod: h
            } = e[0].attributes, a = Vo(e.filter(Go)).map(Wo), o = Vo(e.filter(Xo)), l = Vo(e.filter(Ko)), e = e.map(e => e.attributes.captionServices).filter(Boolean), d = {
                allowCache: !0,
                discontinuityStarts: [],
                segments: [],
                endList: !0,
                mediaGroups: {AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {}},
                uri: "",
                duration: d,
                playlists: ((e, t = {}) => {
                    if (Object.keys(t).length) for (const i in e) e[i] = zo(e[i], t);
                    return e
                })(a, s)
            }, 0 <= h && (d.minimumUpdatePeriod = 1e3 * h), t && (d.locations = t), i && (d.contentSteering = i), "dynamic" === u && (d.suggestedPresentationDelay = c), n && 0 < n.length && (d.eventStream = n), h = 0 === d.playlists.length, t = o.length ? ((e, n = {}, a) => {
                let o;
                e = e.reduce((e, t) => {
                    var i = t.attributes.role && t.attributes.role.value || "", s = t.attributes.lang || "";
                    let r = t.attributes.label || "main";
                    e[r = s && !t.attributes.label ? t.attributes.lang + (i ? ` (${i})` : "") : r] || (e[r] = {
                        language: s,
                        autoselect: !0,
                        default: "main" === i,
                        playlists: [],
                        uri: ""
                    });
                    s = zo((({
                                 attributes: e,
                                 segments: t,
                                 sidx: i,
                                 mediaSequence: s,
                                 discontinuitySequence: r,
                                 discontinuityStarts: n
                             }, a) => {
                        r = {
                            attributes: {NAME: e.id, BANDWIDTH: e.bandwidth, CODECS: e.codecs, "PROGRAM-ID": 1},
                            uri: "",
                            endList: "static" === e.type,
                            timeline: e.periodStart,
                            resolvedUri: e.baseUrl || "",
                            targetDuration: e.duration,
                            discontinuitySequence: r,
                            discontinuityStarts: n,
                            timelineStarts: e.timelineStarts,
                            mediaSequence: s,
                            segments: t
                        };
                        return e.contentProtection && (r.contentProtection = e.contentProtection), e.serviceLocation && (r.attributes.serviceLocation = e.serviceLocation), i && (r.sidx = i), a && (r.attributes.AUDIO = "audio", r.attributes.SUBTITLES = "subs"), r
                    })(t, a), n);
                    return e[r].playlists.push(s), "undefined" == typeof o && "main" === i && ((o = t).default = !0), e
                }, {});
                return o || (e[Object.keys(e)[0]].default = !0), e
            })(o, s, h) : null, i = l.length ? $o(l, s) : null, c = (u = a.concat(Yo(t), Yo(i))).map(({timelineStarts: e}) => e), d.timelineStarts = Bo(c), p = d.timelineStarts, u.forEach(t => {
                t.mediaSequence = 0, t.discontinuitySequence = p.findIndex(function ({timeline: e}) {
                    return e === t.timeline
                }), t.segments && t.segments.forEach((e, t) => {
                    e.number = t
                })
            }), t && (d.mediaGroups.AUDIO.audio = t), i && (d.mediaGroups.SUBTITLES.subs = i), e.length && (d.mediaGroups["CLOSED-CAPTIONS"].cc = e.reduce((s, e) => (e && e.forEach(e => {
                var {channel: t, language: i} = e;
                s[i] = {
                    autoselect: !1,
                    default: !1,
                    instreamId: t,
                    language: i
                }, e.hasOwnProperty("aspectRatio") && (s[i].aspectRatio = e.aspectRatio), e.hasOwnProperty("easyReader") && (s[i].easyReader = e.easyReader), e.hasOwnProperty("3D") && (s[i]["3D"] = e["3D"])
            }), s), {})), r ? qo({oldManifest: r, newManifest: d}) : d) : {}
        }, Jo = (s, r) => {
            var {
                type: n,
                minimumUpdatePeriod: a = 0,
                media: o = "",
                sourceDuration: l,
                timescale: d = 1,
                startNumber: h = 1,
                periodStart: u
            } = s, c = [];
            let p = -1;
            for (let i = 0; i < r.length; i++) {
                var m = r[i], g = m.d, f = m.r || 0, m = m.t || 0;
                p < 0 && (p = m), m && m > p && (p = m);
                let e;
                e = f < 0 ? (m = i + 1) === r.length ? "dynamic" === n && 0 < a && 0 < o.indexOf("$Number$") ? ((e, t, i) => {
                    var {
                        NOW: e,
                        clientOffset: s,
                        availabilityStartTime: r,
                        timescale: n = 1,
                        periodStart: a = 0,
                        minimumUpdatePeriod: o = 0
                    } = e;
                    return Math.ceil((((e + s) / 1e3 + o - (r + a)) * n - t) / i)
                })(s, p, g) : (l * d - p) / g : (r[m].t - p) / g : f + 1;
                var y = h + c.length + e;
                let t = h + c.length;
                for (; t < y;) c.push({number: t, duration: g / d, time: p, timeline: u}), p += g, t++
            }
            return c
        }, Zo = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, el = (e, t) => {
            return e.replace(Zo, (r = t, (e, t, i, s) => {
                return "$$" === e ? "$" : "undefined" == typeof r[t] ? e : (e = "" + r[t], "RepresentationID" === t || (s = i ? parseInt(s, 10) : 1) <= e.length ? e : new Array(s - e.length + 1).join("0") + e)
            }));
            var r
        }, tl = (r, e) => {
            const n = {RepresentationID: r.id, Bandwidth: r.bandwidth || 0};
            var {initialization: t = {sourceURL: "", range: ""}} = r;
            const a = Lo({baseUrl: r.baseUrl, source: el(t.sourceURL, n), range: t.range});
            return t = e, ((e = r).duration || t ? e.duration ? No(e) : Jo(e, t) : [{
                number: e.startNumber || 1,
                duration: e.sourceDuration,
                time: 0,
                timeline: e.periodStart
            }]).map(e => {
                n.Number = e.number, n.Time = e.time;
                var t = el(r.media || "", n), i = r.timescale || 1, s = r.presentationTimeOffset || 0,
                    s = r.periodStart + (e.time - s) / i;
                return {
                    uri: t,
                    timeline: e.timeline,
                    duration: e.duration,
                    resolvedUri: Rn(r.baseUrl || "", t),
                    map: a,
                    number: e.number,
                    presentationTime: s
                }
            })
        }, il = (r, e) => {
            const {duration: t, segmentUrls: i = [], periodStart: n} = r;
            if (!t && !e || t && e) throw new Error(Do.SEGMENT_TIME_UNSPECIFIED);
            const a = i.map(e => {
                var {baseUrl: t, initialization: i = {}} = t = r, i = Lo({baseUrl: t, source: i.sourceURL, range: i.range});
                return (t = Lo({baseUrl: t, source: e.media, range: e.mediaRange})).map = i, t
            });
            let s;
            return t && (s = No(r)), (s = e ? Jo(r, e) : s).map((e, t) => {
                var i, s;
                if (a[t]) return t = a[t], i = r.timescale || 1, s = r.presentationTimeOffset || 0, t.timeline = e.timeline, t.duration = e.duration, t.number = e.number, t.presentationTime = n + (e.time - s) / i, t
            }).filter(e => e)
        }, sl = ({attributes: e, segmentInfo: t}) => {
            let i, s;
            t.template ? (s = tl, i = I(e, t.template)) : t.base ? (s = Ro, i = I(e, t.base)) : t.list && (s = il, i = I(e, t.list));
            var r, n, a, e = {attributes: e};
            return s && (r = s(i, t.segmentTimeline), i.duration ? ({
                duration: n,
                timescale: a = 1
            } = i, i.duration = n / a) : r.length ? i.duration = r.reduce((e, t) => Math.max(e, Math.ceil(t.duration)), 0) : i.duration = 0, e.attributes = i, e.segments = r, t.base) && i.indexRange && (e.sidx = r[0], e.segments = []), e
        }, rl = e => e.map(sl), A = (e, t) => Ao(e.childNodes).filter(({tagName: e}) => e === t),
        nl = e => e.textContent.trim(), al = e => {
            var t, i, s, r, n, e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
            return e ? ([e, t, i, s, r, n] = e.slice(1), 31536e3 * parseFloat(e || 0) + 2592e3 * parseFloat(t || 0) + 86400 * parseFloat(i || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(r || 0) + parseFloat(n || 0)) : 0
        }, ol = {
            mediaPresentationDuration(e) {
                return al(e)
            }, availabilityStartTime(e) {
                return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e = e) && (e += "Z"), Date.parse(e) / 1e3
            }, minimumUpdatePeriod(e) {
                return al(e)
            }, suggestedPresentationDelay(e) {
                return al(e)
            }, type(e) {
                return e
            }, timeShiftBufferDepth(e) {
                return al(e)
            }, start(e) {
                return al(e)
            }, width(e) {
                return parseInt(e, 10)
            }, height(e) {
                return parseInt(e, 10)
            }, bandwidth(e) {
                return parseInt(e, 10)
            }, frameRate(e) {
                return parseFloat(e.split("/").reduce((e, t) => e / t))
            }, startNumber(e) {
                return parseInt(e, 10)
            }, timescale(e) {
                return parseInt(e, 10)
            }, presentationTimeOffset(e) {
                return parseInt(e, 10)
            }, duration(e) {
                var t = parseInt(e, 10);
                return isNaN(t) ? al(e) : t
            }, d(e) {
                return parseInt(e, 10)
            }, t(e) {
                return parseInt(e, 10)
            }, r(e) {
                return parseInt(e, 10)
            }, presentationTime(e) {
                return parseInt(e, 10)
            }, DEFAULT(e) {
                return e
            }
        }, D = e => e && e.attributes ? Ao(e.attributes).reduce((e, t) => {
            var i = ol[t.name] || ol.DEFAULT;
            return e[t.name] = i(t.value), e
        }, {}) : {}, ll = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
        }, dl = (e, t) => t.length ? Io(e.map(function (s) {
            return t.map(function (e) {
                var t = nl(e), i = Rn(s.baseUrl, t), e = I(D(e), {baseUrl: i});
                return i !== t && !e.serviceLocation && s.serviceLocation && (e.serviceLocation = s.serviceLocation), e
            })
        })) : e, hl = e => {
            var t = A(e, "SegmentTemplate")[0], i = A(e, "SegmentList")[0],
                s = i && A(i, "SegmentURL").map(e => I({tag: "SegmentURL"}, D(e))), e = A(e, "SegmentBase")[0], r = i || t,
                r = r && A(r, "SegmentTimeline")[0], n = i || e || t, n = n && A(n, "Initialization")[0], t = t && D(t);
            t && n ? t.initialization = n && D(n) : t && t.initialization && (t.initialization = {sourceURL: t.initialization});
            const a = {
                template: t,
                segmentTimeline: r && A(r, "S").map(e => D(e)),
                list: i && I(D(i), {segmentUrls: s, initialization: D(n)}),
                base: e && I(D(e), {initialization: D(n)})
            };
            return Object.keys(a).forEach(e => {
                a[e] || delete a[e]
            }), a
        }, ul = o => Io(A(o.node, "EventStream").map(e => {
            const n = D(e), a = n.schemeIdUri;
            return A(e, "Event").map(e => {
                var t = D(e), i = t.presentationTime || 0, s = n.timescale || 1, r = t.duration || 0,
                    i = i / s + o.attributes.start;
                return {
                    schemeIdUri: a,
                    value: n.value,
                    id: t.id,
                    start: i,
                    end: i + r / s,
                    messageData: nl(e) || t.messageData,
                    contentEncoding: n.contentEncoding,
                    presentationTimeOffset: n.presentationTimeOffset || 0
                }
            })
        })), cl = (l, d, h) => e => {
            var t = D(e), i = dl(d, A(e, "BaseURL")), s = A(e, "Role")[0], s = {role: D(s)};
            let r = I(l, t, s);
            var n, a, o, t = A(e, "Accessibility")[0],
                t = "urn:scte:dash:cc:cea-608:2015" === (s = D(t)).schemeIdUri ? ("string" != typeof s.value ? [] : s.value.split(";")).map(e => {
                    let t, i;
                    return i = e, /^CC\d=/.test(e) ? [t, i] = e.split("=") : /^CC\d$/.test(e) && (t = e), {
                        channel: t,
                        language: i
                    }
                }) : "urn:scte:dash:cc:cea-708:2015" === s.schemeIdUri ? ("string" != typeof s.value ? [] : s.value.split(";")).map(e => {
                    const i = {channel: void 0, language: void 0, aspectRatio: 1, easyReader: 0, "3D": 0};
                    var t, s;
                    return /=/.test(e) ? ([t, s = ""] = e.split("="), i.channel = t, i.language = e, s.split(",").forEach(e => {
                        var [e, t] = e.split(":");
                        "lang" === e ? i.language = t : "er" === e ? i.easyReader = Number(t) : "war" === e ? i.aspectRatio = Number(t) : "3D" === e && (i["3D"] = Number(t))
                    })) : i.language = e, i.channel && (i.channel = "SERVICE" + i.channel), i
                }) : void 0, s = (t && (r = I(r, {captionServices: t})), A(e, "Label")[0]),
                s = (s && s.childNodes.length && (t = s.childNodes[0].nodeValue.trim(), r = I(r, {label: t})), A(e, "ContentProtection").reduce((e, t) => {
                    var i = D(t), s = (i.schemeIdUri && (i.schemeIdUri = i.schemeIdUri.toLowerCase()), ll[i.schemeIdUri]);
                    return s && (e[s] = {attributes: i}, i = A(t, "cenc:pssh")[0]) && (t = nl(i), e[s].pssh = t && Kn(t)), e
                }, {})), t = (Object.keys(s).length && (r = I(r, {contentProtection: s})), hl(e)),
                s = A(e, "Representation"), e = I(h, t);
            return Io(s.map((n = r, a = i, o = e, e => {
                var t = A(e, "BaseURL"), t = dl(a, t);
                const i = I(n, D(e)), s = hl(e);
                return t.map(e => ({segmentInfo: I(o, s), attributes: I(i, e)}))
            })))
        }, pl = (e, t = {}) => {
            var {
                manifestUri: t = "", NOW: i = Date.now(), clientOffset: s = 0, eventHandler: r = function () {
                }
            } = t, n = A(e, "Period");
            if (!n.length) throw new Error(Do.INVALID_NUMBER_OF_PERIOD);
            var a = A(e, "Location");
            const o = D(e);
            var l, d, t = dl([{baseUrl: t}], A(e, "BaseURL")), e = A(e, "ContentSteering");
            o.type = o.type || "static", o.sourceDuration = o.mediaPresentationDuration || 0, o.NOW = i, o.clientOffset = s, a.length && (o.locations = a.map(nl));
            const h = [];
            return n.forEach((e, t) => {
                var i, s, r = D(e), t = h[t - 1];
                r.start = ({attributes: t, priorPeriodAttributes: i, mpdType: s} = [{
                    attributes: r,
                    priorPeriodAttributes: t ? t.attributes : null,
                    mpdType: o.type
                }][0], "number" == typeof t.start ? t.start : i && "number" == typeof i.start && "number" == typeof i.duration ? i.start + i.duration : i || "static" !== s ? null : 0), h.push({
                    node: e,
                    attributes: r
                })
            }), {
                locations: o.locations,
                contentSteeringInfo: (i = r, 1 < (s = e).length && i({
                    type: "warn",
                    message: "The MPD manifest should contain no more than one ContentSteering tag"
                }), s.length ? ((i = I({serverURL: nl(s[0])}, D(s[0]))).queryBeforeStart = "true" === i.queryBeforeStart, i) : null),
                representationInfo: Io(h.map((l = o, d = t, (e, t) => {
                    var i = dl(d, A(e.node, "BaseURL")), s = I(l, {periodStart: e.attributes.start}),
                        r = ("number" == typeof e.attributes.duration && (s.periodDuration = e.attributes.duration), A(e.node, "AdaptationSet")),
                        e = hl(e.node);
                    return Io(r.map(cl(s, i, e)))
                }))),
                eventStream: Io(h.map(ul))
            }
        }, ml = e => {
            if ("" === e) throw new Error(Do.DASH_EMPTY_MANIFEST);
            var t, i = new ko;
            let s;
            try {
                t = i.parseFromString(e, "application/xml"), s = t && "MPD" === t.documentElement.tagName ? t.documentElement : null
            } catch (e) {
            }
            if (!s || s && 0 < s.getElementsByTagName("parsererror").length) throw new Error(Do.DASH_INVALID_XML);
            return s
        }, gl = e => {
            e = ml(e);
            if (!(e = A(e, "UTCTiming")[0])) return null;
            var t = D(e);
            switch (t.schemeIdUri) {
                case"urn:mpeg:dash:utc:http-head:2014":
                case"urn:mpeg:dash:utc:http-head:2012":
                    t.method = "HEAD";
                    break;
                case"urn:mpeg:dash:utc:http-xsdate:2014":
                case"urn:mpeg:dash:utc:http-iso:2014":
                case"urn:mpeg:dash:utc:http-xsdate:2012":
                case"urn:mpeg:dash:utc:http-iso:2012":
                    t.method = "GET";
                    break;
                case"urn:mpeg:dash:utc:direct:2014":
                case"urn:mpeg:dash:utc:direct:2012":
                    t.method = "DIRECT", t.value = Date.parse(t.value);
                    break;
                default:
                    throw new Error(Do.UNSUPPORTED_UTC_TIMING_SCHEME)
            }
            return t
        };

    function fl(e, t) {
        var i, s, r;
        return void 0 === t && (t = 0), (e = w(e)).length - t < 10 || !E(e, Cl, {offset: t}) ? t : (t += (void 0 === (s = t) && (s = 0), r = (i = w(i = e))[s + 5], i = i[s + 6] << 21 | i[s + 7] << 14 | i[s + 8] << 7 | i[s + 9], (16 & r) >> 4 ? 20 + i : 10 + i), fl(e, t))
    }

    function yl(e) {
        return "string" == typeof e ? Nn(e) : e
    }

    function _l(e, t, i) {
        void 0 === i && (i = !1), s = t, t = Array.isArray(s) ? s.map(yl) : [yl(s)], e = w(e);
        var s, r = [];
        if (t.length) for (var n = 0; n < e.length;) {
            var a = (e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]) >>> 0, o = e.subarray(n + 4, n + 8);
            if (0 == a) break;
            a = n + a;
            if (a > e.length) {
                if (i) break;
                a = e.length
            }
            var l = e.subarray(n + 8, a);
            E(o, t[0]) && (1 === t.length ? r.push(l) : r.push.apply(r, _l(l, t.slice(1), i))), n = a
        }
        return r
    }

    function vl(e, t, i) {
        var s;
        return i >= t.length ? t.length : (s = Dl(t, i, !1), E(e.bytes, s.bytes) ? i : vl(e, t, i + (e = Dl(t, i + s.length)).length + e.value + s.length))
    }

    function bl(e, t) {
        i = t, t = Array.isArray(i) ? i.map(function (e) {
            return Ll(e)
        }) : [Ll(i)], e = w(e);
        var i, s = [];
        if (t.length) for (var r = 0; r < e.length;) {
            var n = Dl(e, r, !1), a = Dl(e, r + n.length), o = r + n.length + a.length,
                l = (127 === a.value && (a.value = vl(n, e, o), a.value !== e.length) && (a.value -= o), o + a.value > e.length ? e.length : o + a.value),
                o = e.subarray(o, l);
            E(t[0], n.bytes) && (1 === t.length ? s.push(o) : s = s.concat(bl(o, t.slice(1)))), r += n.length + a.length + o.length
        }
        return s
    }

    function Tl(e, t, i, s) {
        void 0 === s && (s = 1 / 0), e = w(e), i = [].concat(i);
        for (var r, n = 0, a = 0; n < e.length && (a < s || r);) {
            var o = void 0;
            if (E(e.subarray(n), Pl) ? o = 4 : E(e.subarray(n), Ol) && (o = 3), o) {
                if (a++, r) return Rl(e.subarray(r, n));
                var l = void 0;
                "h264" === t ? l = 31 & e[n + o] : "h265" === t && (l = e[n + o] >> 1 & 63), -1 !== i.indexOf(l) && (r = n + o), n += o + ("h264" === t ? 1 : 2)
            } else n++
        }
        return e.subarray(0, 0)
    }

    function wl(e) {
        e = w(e);
        for (var t = 0; t < Ul.length; t++) {
            var i = Ul[t];
            if (Bl[i](e)) return i
        }
        return ""
    }

    var Sl = Math.pow(2, 32), El = function (e) {
        var t, e = new DataView(e.buffer, e.byteOffset, e.byteLength);
        return e.getBigUint64 ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t) : t : e.getUint32(0) * Sl + e.getUint32(4)
    }, kl = function (e) {
        var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = {
                version: e[0],
                flags: new Uint8Array(e.subarray(1, 4)),
                references: [],
                referenceId: t.getUint32(4),
                timescale: t.getUint32(8)
            }, s = 12,
            r = (0 === i.version ? (i.earliestPresentationTime = t.getUint32(s), i.firstOffset = t.getUint32(s + 4), s += 8) : (i.earliestPresentationTime = El(e.subarray(s)), i.firstOffset = El(e.subarray(s + 8)), s += 16), t.getUint16(s += 2));
        for (s += 2; 0 < r; s += 12, r--) i.references.push({
            referenceType: (128 & e[s]) >>> 7,
            referencedSize: 2147483647 & t.getUint32(s),
            subsegmentDuration: t.getUint32(s + 4),
            startsWithSap: !!(128 & e[s + 8]),
            sapType: (112 & e[s + 8]) >>> 4,
            sapDeltaTime: 268435455 & t.getUint32(s + 8)
        });
        return i
    }, Cl = w([73, 68, 51]), xl = {
        EBML: w([26, 69, 223, 163]),
        DocType: w([66, 130]),
        Segment: w([24, 83, 128, 103]),
        SegmentInfo: w([21, 73, 169, 102]),
        Tracks: w([22, 84, 174, 107]),
        Track: w([174]),
        TrackNumber: w([215]),
        DefaultDuration: w([35, 227, 131]),
        TrackEntry: w([174]),
        TrackType: w([131]),
        FlagDefault: w([136]),
        CodecID: w([134]),
        CodecPrivate: w([99, 162]),
        VideoTrack: w([224]),
        AudioTrack: w([225]),
        Cluster: w([31, 67, 182, 117]),
        Timestamp: w([231]),
        TimestampScale: w([42, 215, 177]),
        BlockGroup: w([160]),
        BlockDuration: w([155]),
        Block: w([161]),
        SimpleBlock: w([163])
    }, Il = [128, 64, 32, 16, 8, 4, 2, 1], Al = function (e) {
        for (var t = 1, i = 0; i < Il.length && !(e & Il[i]); i++) t++;
        return t
    }, Dl = function (e, t, i, s) {
        void 0 === i && (i = !0), void 0 === s && (s = !1);
        var r = Al(e[t]), n = e.subarray(t, t + r);
        return i && ((n = Array.prototype.slice.call(e, t, t + r))[0] ^= Il[r - 1]), {
            length: r,
            value: Gn(n, {signed: s}),
            bytes: n
        }
    }, Ll = function e(t) {
        return "string" == typeof t ? t.match(/.{1,2}/g).map(e) : "number" == typeof t ? On(t) : t
    }, Pl = w([0, 0, 0, 1]), Ol = w([0, 0, 1]), Nl = w([0, 0, 3]), Rl = function (e) {
        for (var t = [], i = 1; i < e.length - 2;) E(e.subarray(i, i + 3), Nl) && (t.push(i + 2), i++), i++;
        if (0 === t.length) return e;
        for (var s = e.length - t.length, r = new Uint8Array(s), n = 0, i = 0; i < s; n++, i++) n === t[0] && (n++, t.shift()), r[i] = e[n];
        return r
    }, L = {
        webm: w([119, 101, 98, 109]),
        matroska: w([109, 97, 116, 114, 111, 115, 107, 97]),
        flac: w([102, 76, 97, 67]),
        ogg: w([79, 103, 103, 83]),
        ac3: w([11, 119]),
        riff: w([82, 73, 70, 70]),
        avi: w([65, 86, 73]),
        wav: w([87, 65, 86, 69]),
        "3gp": w([102, 116, 121, 112, 51, 103]),
        mp4: w([102, 116, 121, 112]),
        fmp4: w([115, 116, 121, 112]),
        mov: w([102, 116, 121, 112, 113, 116]),
        moov: w([109, 111, 111, 118]),
        moof: w([109, 111, 111, 102])
    }, Ml = {
        aac: function (e) {
            var t = fl(e);
            return E(e, [255, 16], {offset: t, mask: [255, 22]})
        }, mp3: function (e) {
            var t = fl(e);
            return E(e, [255, 2], {offset: t, mask: [255, 6]})
        }, webm: function (e) {
            e = bl(e, [xl.EBML, xl.DocType])[0];
            return E(e, L.webm)
        }, mkv: function (e) {
            e = bl(e, [xl.EBML, xl.DocType])[0];
            return E(e, L.matroska)
        }, mp4: function (e) {
            return !Ml["3gp"](e) && !Ml.mov(e) && (!!(E(e, L.mp4, {offset: 4}) || E(e, L.fmp4, {offset: 4}) || E(e, L.moof, {offset: 4}) || E(e, L.moov, {offset: 4})) || void 0)
        }, mov: function (e) {
            return E(e, L.mov, {offset: 4})
        }, "3gp": function (e) {
            return E(e, L["3gp"], {offset: 4})
        }, ac3: function (e) {
            var t = fl(e);
            return E(e, L.ac3, {offset: t})
        }, ts: function (e) {
            if (e.length < 189 && 1 <= e.length) return 71 === e[0];
            for (var t = 0; t + 188 < e.length && t < 188;) {
                if (71 === e[t] && 71 === e[t + 188]) return !0;
                t += 1
            }
            return !1
        }, flac: function (e) {
            var t = fl(e);
            return E(e, L.flac, {offset: t})
        }, ogg: function (e) {
            return E(e, L.ogg)
        }, avi: function (e) {
            return E(e, L.riff) && E(e, L.avi, {offset: 8})
        }, wav: function (e) {
            return E(e, L.riff) && E(e, L.wav, {offset: 8})
        }, h264: function (e) {
            return Tl(e, "h264", 7, 3).length
        }, h265: function (e) {
            return Tl(e, "h265", [32, 33], 3).length
        }
    }, Ul = Object.keys(Ml).filter(function (e) {
        return "ts" !== e && "h264" !== e && "h265" !== e
    }).concat(["ts", "h264", "h265"]), Bl = (Ul.forEach(function (e) {
        var t = Ml[e];
        Ml[e] = function (e) {
            return t(w(e))
        }
    }), Ml), Fl = 9e4;
    /*! @name @videojs/http-streaming @version 3.7.0 @license Apache-2.0 */
    const jl = function (e, t) {
            if (/^[a-z]+:/i.test(t)) return t;
            /^data:/.test(e) && (e = window.location && window.location.href || "");
            var i = "function" == typeof window.URL, s = /^\/\//.test(e), r = !window.location && !/\/\//i.test(e);
            return i ? e = new window.URL(e, window.location || vn) : /\/\//i.test(e) || (e = _n.buildAbsoluteURL(window.location && window.location.href || "", e)), i ? (i = new URL(t, e), r ? i.href.slice(vn.length) : s ? i.href.slice(i.protocol.length) : i.href) : _n.buildAbsoluteURL(e, t)
        }, ql = (e, t) => t && t.responseURL && e !== t.responseURL ? t.responseURL : e,
        Hl = e => T.log.debug ? T.log.debug.bind(T, "VHS:", e + " >") : function () {
        };

    function P(...e) {
        var t = T.obj || T;
        return (t.merge || t.mergeOptions).apply(t, e)
    }

    function Vl(...e) {
        var t = T.time || T;
        return (t.createTimeRanges || t.createTimeRanges).apply(t, e)
    }

    function zl(e, i) {
        return Jl(e, function (e, t) {
            return e - Ql <= i && t + Ql >= i
        })
    }

    function $l(e, t) {
        return Jl(e, function (e) {
            return e - Yl >= t
        })
    }

    function Wl(e) {
        if (e && e.length && e.end) return e.end(e.length - 1)
    }

    function Gl(t, i) {
        let s = 0;
        if (t && t.length) for (let e = 0; e < t.length; e++) {
            var r = t.start(e), n = t.end(e);
            n < i || (s += r < i && i <= n ? n - i : n - r)
        }
        return s
    }

    function Xl({defaultDuration: t, durationList: i, startIndex: s, endIndex: r}) {
        let n = 0;
        if (r < s && ([s, r] = [r, s]), s < 0) {
            for (let e = s; e < Math.min(0, r); e++) n += t;
            s = 0
        }
        for (let e = s; e < r; e++) n += i[e].duration;
        return n
    }

    function Kl(e, t, i, s) {
        if (!e || !e.segments) return null;
        if (e.endList) return dd(e);
        if (null === t) return null;
        t = t || 0;
        let r = ld(e, e.mediaSequence + e.segments.length, t);
        return i && (s = "number" == typeof s ? s : nd(null, e), r -= s), Math.max(0, r)
    }

    const Yl = 1 / 30, Ql = 3 * Yl, Jl = function (e, t) {
        var i = [];
        let s;
        if (e && e.length) for (s = 0; s < e.length; s++) t(e.start(s), e.end(s)) && i.push([e.start(s), e.end(s)]);
        return Vl(i)
    }, Zl = t => {
        var i = [];
        if (!t || !t.length) return "";
        for (let e = 0; e < t.length; e++) i.push(t.start(e) + " => " + t.end(e));
        return i.join(", ")
    }, ed = t => {
        var i = [];
        for (let e = 0; e < t.length; e++) i.push({start: t.start(e), end: t.end(e)});
        return i
    }, td = (t, e) => {
        if (!e.preload) return e.duration;
        let i = 0;
        return (e.parts || []).forEach(function (e) {
            i += e.duration
        }), (e.preloadHints || []).forEach(function (e) {
            "PART" === e.type && (i += t.partTargetDuration)
        }), i
    }, id = e => (e.segments || []).reduce((i, s, r) => (s.parts ? s.parts.forEach(function (e, t) {
        i.push({duration: e.duration, segmentIndex: r, partIndex: t, part: e, segment: s})
    }) : i.push({duration: s.duration, segmentIndex: r, partIndex: null, segment: s, part: null}), i), []), sd = e => {
        e = e.segments && e.segments.length && e.segments[e.segments.length - 1];
        return e && e.parts || []
    }, rd = ({preloadSegment: e}) => {
        var t;
        if (e) return {
            parts: e,
            preloadHints: t
        } = e, (t || []).reduce((e, t) => e + ("PART" === t.type ? 1 : 0), 0) + (e && e.length ? e.length : 0)
    }, nd = (e, t) => {
        return t.endList ? 0 : e && e.suggestedPresentationDelay ? e.suggestedPresentationDelay : (e = 0 < sd(t).length) && t.serverControl && t.serverControl.partHoldBack ? t.serverControl.partHoldBack : e && t.partTargetDuration ? 3 * t.partTargetDuration : t.serverControl && t.serverControl.holdBack ? t.serverControl.holdBack : t.targetDuration ? 3 * t.targetDuration : 0
    }, ad = function (e, t) {
        let i = 0, s = t - e.mediaSequence, r = e.segments[s];
        if (r) {
            if ("undefined" != typeof r.start) return {result: r.start, precise: !0};
            if ("undefined" != typeof r.end) return {result: r.end - r.duration, precise: !0}
        }
        for (; s--;) {
            if ("undefined" != typeof (r = e.segments[s]).end) return {result: i + r.end, precise: !0};
            if (i += td(e, r), "undefined" != typeof r.start) return {result: i + r.start, precise: !0}
        }
        return {result: i, precise: !1}
    }, od = function (e, t) {
        let i = 0;
        var s;
        let r = t - e.mediaSequence;
        for (; r < e.segments.length; r++) {
            if ("undefined" != typeof (s = e.segments[r]).start) return {result: s.start - i, precise: !0};
            if (i += td(e, s), "undefined" != typeof s.end) return {result: s.end - i, precise: !0}
        }
        return {result: -1, precise: !1}
    }, ld = function (e, t, i) {
        var s;
        return (t = "undefined" == typeof t ? e.mediaSequence + e.segments.length : t) < e.mediaSequence ? 0 : (s = ad(e, t)).precise ? s.result : (e = od(e, t)).precise ? e.result : s.result + i
    }, dd = function (e, t, i) {
        if (!e) return 0;
        if ("number" != typeof i && (i = 0), "undefined" == typeof t) {
            if (e.totalDuration) return e.totalDuration;
            if (!e.endList) return window.Infinity
        }
        return ld(e, t, i)
    };

    function hd(e) {
        return e.excludeUntil && e.excludeUntil > Date.now()
    }

    function ud(e) {
        return e.excludeUntil && e.excludeUntil === 1 / 0
    }

    function cd(e) {
        var t = hd(e);
        return !e.disabled && !t
    }

    function pd(e, t) {
        return t.attributes && t.attributes[e]
    }

    function md(e, t) {
        var i = e && e.mediaGroups && e.mediaGroups.AUDIO || {};
        let s = !1;
        for (const r in i) {
            for (const n in i[r]) if (s = t(i[r][n])) break;
            if (s) break
        }
        return !!s
    }

    const gd = (e, t) => {
            if (1 === e.playlists.length) return !0;
            const i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
            return 0 === e.playlists.filter(e => !!cd(e) && (e.attributes.BANDWIDTH || 0) < i).length
        },
        fd = (e, t) => !(!e && !t || !e && t || e && !t || e !== t && (!e.id || !t.id || e.id !== t.id) && (!e.resolvedUri || !t.resolvedUri || e.resolvedUri !== t.resolvedUri) && (!e.uri || !t.uri || e.uri !== t.uri)),
        yd = t => {
            if (!t || !t.playlists || !t.playlists.length) return md(t, e => e.playlists && e.playlists.length || e.uri);
            for (let e = 0; e < t.playlists.length; e++) {
                const s = t.playlists[e];
                var i = s.attributes && s.attributes.CODECS;
                if (!i || !i.split(",").every(e => An(e))) {
                    i = md(t, e => fd(s, e));
                    if (!i) return !1
                }
            }
            return !0
        };
    var _d = {
        liveEdgeDelay: nd,
        duration: dd,
        seekable: function (e, t, i) {
            var s = t || 0;
            let r = Kl(e, t, !0, i);
            return null === r ? Vl() : Vl(s, r = r < s ? s : r)
        },
        getMediaInfoForTime: function ({
                                           playlist: t,
                                           currentTime: i,
                                           startingSegmentIndex: s,
                                           startingPartIndex: r,
                                           startTime: n,
                                           exactManifestTimings: a
                                       }) {
            let o = i - n;
            var l = id(t);
            let d = 0;
            for (let e = 0; e < l.length; e++) {
                var h = l[e];
                if (s === h.segmentIndex && ("number" != typeof r || "number" != typeof h.partIndex || r === h.partIndex)) {
                    d = e;
                    break
                }
            }
            if (o < 0) {
                if (0 < d) for (let e = d - 1; 0 <= e; e--) {
                    var u = l[e];
                    if (o += u.duration, a) {
                        if (o < 0) continue
                    } else if (o + Yl <= 0) continue;
                    return {
                        partIndex: u.partIndex,
                        segmentIndex: u.segmentIndex,
                        startTime: n - Xl({
                            defaultDuration: t.targetDuration,
                            durationList: l,
                            startIndex: d,
                            endIndex: e
                        })
                    }
                }
                return {
                    partIndex: l[0] && l[0].partIndex || null,
                    segmentIndex: l[0] && l[0].segmentIndex || 0,
                    startTime: i
                }
            }
            if (d < 0) {
                for (let e = d; e < 0; e++) if ((o -= t.targetDuration) < 0) return {
                    partIndex: l[0] && l[0].partIndex || null,
                    segmentIndex: l[0] && l[0].segmentIndex || 0,
                    startTime: i
                };
                d = 0
            }
            for (let e = d; e < l.length; e++) {
                var c = l[e];
                if (o -= c.duration, a) {
                    if (0 < o) continue
                } else if (0 <= o - Yl) continue;
                return {
                    partIndex: c.partIndex,
                    segmentIndex: c.segmentIndex,
                    startTime: n + Xl({defaultDuration: t.targetDuration, durationList: l, startIndex: d, endIndex: e})
                }
            }
            return {segmentIndex: l[l.length - 1].segmentIndex, partIndex: l[l.length - 1].partIndex, startTime: i}
        },
        isEnabled: cd,
        isDisabled: function (e) {
            return e.disabled
        },
        isExcluded: hd,
        isIncompatible: ud,
        playlistEnd: Kl,
        isAes: function (t) {
            for (let e = 0; e < t.segments.length; e++) if (t.segments[e].key) return !0;
            return !1
        },
        hasAttribute: pd,
        estimateSegmentRequestTime: function (e, t, i, s = 0) {
            return pd("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * s) / t : NaN
        },
        isLowestEnabledRendition: gd,
        isAudioOnly: yd,
        playlistMatch: fd,
        segmentDurationWithParts: td
    };
    const vd = T["log"], bd = (e, t) => e + "-" + t, Td = (r, n) => {
        r.mediaGroups && ["AUDIO", "SUBTITLES"].forEach(e => {
            if (r.mediaGroups[e]) for (const i in r.mediaGroups[e]) for (const s in r.mediaGroups[e][i]) {
                var t = r.mediaGroups[e][i][s];
                n(t, e, i, s)
            }
        })
    }, wd = ({playlist: e, uri: t, id: i}) => {
        e.id = i, e.playlistErrors_ = 0, t && (e.uri = t), e.attributes = e.attributes || {}
    }, Sd = (o, e, l = (e, t, i) => `placeholder-uri-${e}-${t}-` + i) => {
        o.uri = e;
        for (let e = 0; e < o.playlists.length; e++) {
            var t;
            o.playlists[e].uri || (t = "placeholder-uri-" + e, o.playlists[e].uri = t)
        }
        const i = yd(o);
        Td(o, (e, r, n, a) => {
            if (!e.playlists || !e.playlists.length) {
                if (i && "AUDIO" === r && !e.uri) for (let e = 0; e < o.playlists.length; e++) {
                    var t = o.playlists[e];
                    if (t.attributes && t.attributes.AUDIO && t.attributes.AUDIO === n) return
                }
                e.playlists = [_i({}, e)]
            }
            e.playlists.forEach(function (e, t) {
                var i = l(r, n, a, e), s = bd(t, i);
                e.uri ? e.resolvedUri = e.resolvedUri || jl(o.uri, e.uri) : (e.uri = 0 === t ? i : s, e.resolvedUri = e.uri), e.id = e.id || s, e.attributes = e.attributes || {}, o.playlists[e.id] = e, o.playlists[e.uri] = e
            })
        });
        {
            var s = o;
            let e = s.playlists.length;
            for (; e--;) {
                var r = s.playlists[e];
                wd({
                    playlist: r,
                    id: bd(e, r.uri)
                }), r.resolvedUri = jl(s.uri, r.uri), s.playlists[r.id] = r, (s.playlists[r.uri] = r).attributes.BANDWIDTH || vd.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")
            }
        }
        var n;
        n = o, Td(n, e => {
            e.uri && (e.resolvedUri = jl(n.uri, e.uri))
        })
    };

    class Ed {
        constructor() {
            this.offset_ = null, this.pendingDateRanges_ = new Map, this.processedDateRanges_ = new Map
        }

        setOffset(e = []) {
            null === this.offset_ && e.length && ([e] = e, void 0 !== e.programDateTime) && (this.offset_ = e.programDateTime / 1e3)
        }

        setPendingDateRanges(e = []) {
            var t;
            e.length && ([t] = e, t = t.startDate.getTime(), this.trimProcessedDateRanges_(t), this.pendingDateRanges_ = e.reduce((e, t) => (e.set(t.id, t), e), new Map))
        }

        processDateRange(e) {
            this.pendingDateRanges_.delete(e.id), this.processedDateRanges_.set(e.id, e)
        }

        getDateRangesToProcess() {
            if (null === this.offset_) return [];
            const i = {}, s = [];
            this.pendingDateRanges_.forEach((e, t) => {
                this.processedDateRanges_.has(t) || (e.startTime = e.startDate.getTime() / 1e3 - this.offset_, e.processDateRange = () => this.processDateRange(e), s.push(e), e.class && (i[e.class] ? (t = i[e.class].push(e), e.classListIndex = t - 1) : (i[e.class] = [e], e.classListIndex = 0)))
            });
            for (const t of s) {
                var e = i[t.class] || [];
                t.endDate ? t.endTime = t.endDate.getTime() / 1e3 - this.offset_ : t.endOnNext && e[t.classListIndex + 1] ? t.endTime = e[t.classListIndex + 1].startTime : t.duration ? t.endTime = t.startTime + t.duration : t.plannedDuration ? t.endTime = t.startTime + t.plannedDuration : t.endTime = t.startTime
            }
            return s
        }

        trimProcessedDateRanges_(i) {
            new Map(this.processedDateRanges_).forEach((e, t) => {
                e.startDate.getTime() < i && this.processedDateRanges_.delete(t)
            })
        }
    }

    Mr = T.EventTarget;

    function kd(e) {
        var t = e.segments || [], i = e.preloadSegment;
        if (i && i.parts && i.parts.length) {
            if (i.preloadHints) for (let e = 0; e < i.preloadHints.length; e++) if ("MAP" === i.preloadHints[e].type) return t;
            i.duration = e.targetDuration, i.preload = !0, t.push(i)
        }
        return t
    }

    const Cd = (t, i) => {
            if (!t) return i;
            var s = P(t, i);
            if (t.preloadHints && !i.preloadHints && delete s.preloadHints, t.parts && !i.parts) delete s.parts; else if (t.parts && i.parts) for (let e = 0; e < i.parts.length; e++) t.parts && t.parts[e] && (s.parts[e] = P(t.parts[e], i.parts[e]));
            return !t.skipped && i.skipped && (s.skipped = !1), t.preload && !i.preload && (s.preload = !1), s
        }, xd = (e, t) => {
            !e.resolvedUri && e.uri && (e.resolvedUri = jl(t, e.uri)), e.key && !e.key.resolvedUri && (e.key.resolvedUri = jl(t, e.key.uri)), e.map && !e.map.resolvedUri && (e.map.resolvedUri = jl(t, e.map.uri)), e.map && e.map.key && !e.map.key.resolvedUri && (e.map.key.resolvedUri = jl(t, e.map.key.uri)), e.parts && e.parts.length && e.parts.forEach(e => {
                e.resolvedUri || (e.resolvedUri = jl(t, e.uri))
            }), e.preloadHints && e.preloadHints.length && e.preloadHints.forEach(e => {
                e.resolvedUri || (e.resolvedUri = jl(t, e.uri))
            })
        },
        Id = (e, t) => e === t || e.segments && t.segments && e.segments.length === t.segments.length && e.endList === t.endList && e.mediaSequence === t.mediaSequence && e.preloadSegment === t.preloadSegment,
        Ad = (e, r, t = Id) => {
            var i = P(e, {}), s = i.playlists[r.id];
            if (!s) return null;
            if (t(s, r)) return null;
            r.segments = kd(r);
            const n = P(s, r);
            if (n.preloadSegment && !r.preloadSegment && delete n.preloadSegment, s.segments) {
                if (r.skip) {
                    r.segments = r.segments || [];
                    for (let e = 0; e < r.skip.skippedSegments; e++) r.segments.unshift({skipped: !0})
                }
                n.segments = ((e, t, i) => {
                    var s = e.slice(), r = t.slice(), n = (i = i || 0, []);
                    let a;
                    for (let e = 0; e < r.length; e++) {
                        var o = s[e + i], l = r[e];
                        o ? (a = o.map || a, n.push(Cd(o, l))) : (a && !l.map && (l.map = a), n.push(l))
                    }
                    return n
                })(s.segments, r.segments, r.mediaSequence - s.mediaSequence)
            }
            n.segments.forEach(e => {
                xd(e, n.resolvedUri)
            });
            for (let e = 0; e < i.playlists.length; e++) i.playlists[e].id === r.id && (i.playlists[e] = n);
            return i.playlists[r.id] = n, i.playlists[r.uri] = n, Td(e, (t, e, i, s) => {
                if (t.playlists) for (let e = 0; e < t.playlists.length; e++) r.id === t.playlists[e].id && (t.playlists[e] = n)
            }), i
        }, Dd = (e, t) => {
            var i = e.segments || [], i = i[i.length - 1], s = i && i.parts && i.parts[i.parts.length - 1],
                s = s && s.duration || i && i.duration;
            return t && s ? 1e3 * s : 500 * (e.partTargetDuration || e.targetDuration || 10)
        };

    class Ld extends Mr {
        constructor(e, t, i = {}) {
            if (super(), !e) throw new Error("A non-empty playlist URL or object is required");
            this.logger_ = Hl("PlaylistLoader");
            var {withCredentials: s = !1} = i,
                e = (this.src = e, this.vhs_ = t, this.withCredentials = s, this.addDateRangesToTextTrack_ = i.addDateRangesToTextTrack, t.options_);
            this.customTagParsers = e && e.customTagParsers || [], this.customTagMappers = e && e.customTagMappers || [], this.llhls = e && e.llhls, this.dateRangesStorage_ = new Ed, this.state = "HAVE_NOTHING", this.handleMediaupdatetimeout_ = this.handleMediaupdatetimeout_.bind(this), this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_), this.on("loadedplaylist", this.handleLoadedPlaylist_.bind(this))
        }

        handleLoadedPlaylist_() {
            var e = this.media();
            e && (this.dateRangesStorage_.setOffset(e.segments), this.dateRangesStorage_.setPendingDateRanges(e.dateRanges), (e = this.dateRangesStorage_.getDateRangesToProcess()).length) && this.addDateRangesToTextTrack_ && this.addDateRangesToTextTrack_(e)
        }

        handleMediaupdatetimeout_() {
            if ("HAVE_METADATA" === this.state) {
                var t = this.media();
                let e = jl(this.main.uri, t.uri);
                this.llhls && (e = ((e, t) => {
                    if (!t.endList && t.serverControl) {
                        const r = {};
                        if (t.serverControl.canBlockReload) {
                            var i, s = t["preloadSegment"];
                            let e = t.mediaSequence + t.segments.length;
                            s && (s = s.parts || [], -1 < (i = rd(t) - 1) && i != s.length - 1 && (r._HLS_part = i), -1 < i || s.length) && e--, r._HLS_msn = e
                        }
                        if (t.serverControl && t.serverControl.canSkipUntil && (r._HLS_skip = t.serverControl.canSkipDateranges ? "v2" : "YES"), Object.keys(r).length) {
                            const n = new window.URL(e);
                            ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function (e) {
                                r.hasOwnProperty(e) && n.searchParams.set(e, r[e])
                            }), e = n.toString()
                        }
                    }
                    return e
                })(e, t)), this.state = "HAVE_CURRENT_METADATA", this.request = this.vhs_.xhr({
                    uri: e,
                    withCredentials: this.withCredentials
                }, (e, t) => {
                    if (this.request) return e ? this.playlistRequestError(this.request, this.media(), "HAVE_METADATA") : void this.haveMetadata({
                        playlistString: this.request.responseText,
                        url: this.media().uri,
                        id: this.media().id
                    })
                })
            }
        }

        playlistRequestError(e, t, i) {
            var {uri: t, id: s} = t;
            this.request = null, i && (this.state = i), this.error = {
                playlist: this.main.playlists[s],
                status: e.status,
                message: `HLS playlist request error at URL: ${t}.`,
                responseText: e.responseText,
                code: 500 <= e.status ? 4 : 2
            }, this.trigger("error")
        }

        parseManifest_({url: t, manifestString: i}) {
            {
                var [{
                    onwarn: i,
                    oninfo: e,
                    manifestString: s,
                    customTagParsers: r = [],
                    customTagMappers: n = [],
                    llhls: a
                }] = [{
                    onwarn: ({message: e}) => this.logger_(`m3u8-parser warn for ${t}: ` + e),
                    oninfo: ({message: e}) => this.logger_(`m3u8-parser info for ${t}: ` + e),
                    manifestString: i,
                    customTagParsers: this.customTagParsers,
                    customTagMappers: this.customTagMappers,
                    llhls: this.llhls
                }];
                const o = new In,
                    l = (i && o.on("warn", i), e && o.on("info", e), r.forEach(e => o.addParser(e)), n.forEach(e => o.addTagMapper(e)), o.push(s), o.end(), o.manifest);
                if (a || (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function (e) {
                    l.hasOwnProperty(e) && delete l[e]
                }), l.segments && l.segments.forEach(function (t) {
                    ["parts", "preloadHints"].forEach(function (e) {
                        t.hasOwnProperty(e) && delete t[e]
                    })
                })), !l.targetDuration) {
                    let e = 10;
                    l.segments && l.segments.length && (e = l.segments.reduce((e, t) => Math.max(e, t.duration), 0)), i && i("manifest has no targetDuration defaulting to " + e), l.targetDuration = e
                }
                return (e = sd(l)).length && !l.partTargetDuration && (r = e.reduce((e, t) => Math.max(e, t.duration), 0), i && (i("manifest has no partTargetDuration defaulting to " + r), vd.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")), l.partTargetDuration = r), l
            }
        }

        haveMetadata({playlistString: e, playlistObject: t, url: i, id: s}) {
            this.request = null, this.state = "HAVE_METADATA";
            t = t || this.parseManifest_({url: i, manifestString: e}), t.lastRequest = Date.now(), wd({
                playlist: t,
                uri: i,
                id: s
            }), e = Ad(this.main, t);
            this.targetDuration = t.partTargetDuration || t.targetDuration, this.pendingMedia_ = null, e ? (this.main = e, this.media_ = this.main.playlists[s]) : this.trigger("playlistunchanged"), this.updateMediaUpdateTimeout_(Dd(this.media(), !!e)), this.trigger("loadedplaylist")
        }

        dispose() {
            this.trigger("dispose"), this.stopRequest(), window.clearTimeout(this.mediaUpdateTimeout), window.clearTimeout(this.finalRenditionTimeout), this.dateRangesStorage_ = new Ed, this.off()
        }

        stopRequest() {
            var e;
            this.request && (e = this.request, this.request = null, e.onreadystatechange = null, e.abort())
        }

        media(i, e) {
            if (!i) return this.media_;
            if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
            if ("string" == typeof i) {
                if (!this.main.playlists[i]) throw new Error("Unknown playlist URI: " + i);
                i = this.main.playlists[i]
            }
            if (window.clearTimeout(this.finalRenditionTimeout), e) e = (i.partTargetDuration || i.targetDuration) / 2 * 1e3 || 5e3, this.finalRenditionTimeout = window.setTimeout(this.media.bind(this, i, !1), e); else {
                const s = this.state;
                var e = !this.media_ || i.id !== this.media_.id, t = this.main.playlists[i.id];
                if (t && t.endList || i.endList && i.segments.length) this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = i, e && (this.trigger("mediachanging"), "HAVE_MAIN_MANIFEST" === s ? this.trigger("loadedmetadata") : this.trigger("mediachange")); else if (this.updateMediaUpdateTimeout_(Dd(i, !0)), e) {
                    if (this.state = "SWITCHING_MEDIA", this.request) {
                        if (i.resolvedUri === this.request.url) return;
                        this.request.onreadystatechange = null, this.request.abort(), this.request = null
                    }
                    this.media_ && this.trigger("mediachanging"), this.pendingMedia_ = i, this.request = this.vhs_.xhr({
                        uri: i.resolvedUri,
                        withCredentials: this.withCredentials
                    }, (e, t) => {
                        if (this.request) {
                            if (i.lastRequest = Date.now(), i.resolvedUri = ql(i.resolvedUri, t), e) return this.playlistRequestError(this.request, i, s);
                            this.haveMetadata({
                                playlistString: t.responseText,
                                url: i.uri,
                                id: i.id
                            }), "HAVE_MAIN_MANIFEST" === s ? this.trigger("loadedmetadata") : this.trigger("mediachange")
                        }
                    })
                }
            }
        }

        pause() {
            this.mediaUpdateTimeout && (window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.stopRequest(), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MAIN_MANIFEST" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
        }

        load(e) {
            this.mediaUpdateTimeout && (window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
            var t = this.media();
            e ? (e = t ? (t.partTargetDuration || t.targetDuration) / 2 * 1e3 : 5e3, this.mediaUpdateTimeout = window.setTimeout(() => {
                this.mediaUpdateTimeout = null, this.load()
            }, e)) : this.started ? t && !t.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
        }

        updateMediaUpdateTimeout_(e) {
            this.mediaUpdateTimeout && (window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null), this.media() && !this.media().endList && (this.mediaUpdateTimeout = window.setTimeout(() => {
                this.mediaUpdateTimeout = null, this.trigger("mediaupdatetimeout"), this.updateMediaUpdateTimeout_(e)
            }, e))
        }

        start() {
            this.started = !0, "object" == typeof this.src ? (this.src.uri || (this.src.uri = window.location.href), this.src.resolvedUri = this.src.uri, setTimeout(() => {
                this.setupInitialPlaylist(this.src)
            }, 0)) : this.request = this.vhs_.xhr({uri: this.src, withCredentials: this.withCredentials}, (e, t) => {
                if (this.request) {
                    if (this.request = null, e) return this.error = {
                        status: t.status,
                        message: `HLS playlist request error at URL: ${this.src}.`,
                        responseText: t.responseText,
                        code: 2
                    }, "HAVE_NOTHING" === this.state && (this.started = !1), this.trigger("error");
                    this.src = ql(this.src, t);
                    e = this.parseManifest_({manifestString: t.responseText, url: this.src});
                    this.setupInitialPlaylist(e)
                }
            })
        }

        srcUri() {
            return "string" == typeof this.src ? this.src : this.src.uri
        }

        setupInitialPlaylist(e) {
            var t, i, s, r;
            this.state = "HAVE_MAIN_MANIFEST", e.playlists ? (this.main = e, Sd(this.main, this.srcUri()), e.playlists.forEach(t => {
                t.segments = kd(t), t.segments.forEach(e => {
                    xd(e, t.resolvedUri)
                })
            }), this.trigger("loadedplaylist"), this.request || this.media(this.main.playlists[0])) : (t = this.srcUri() || window.location.href, this.main = (i = t, s = bd(0, i), (r = {
                mediaGroups: {
                    AUDIO: {},
                    VIDEO: {},
                    "CLOSED-CAPTIONS": {},
                    SUBTITLES: {}
                },
                uri: window.location.href,
                resolvedUri: window.location.href,
                playlists: [{uri: i, id: s, resolvedUri: i, attributes: {}}]
            }).playlists[s] = r.playlists[0], r.playlists[i] = r.playlists[0], r), this.haveMetadata({
                playlistObject: e,
                url: t,
                id: this.main.playlists[0].id
            }), this.trigger("loadedmetadata"))
        }
    }

    function Pd(e, t, i, s) {
        var r = "arraybuffer" === e.responseType ? e.response : e.responseText;
        !t && r && (e.responseTime = Date.now(), e.roundTripTime = e.responseTime - e.requestTime, e.bytesReceived = r.byteLength || r.length, e.bandwidth || (e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8 * 1e3))), i.headers && (e.responseHeaders = i.headers), t && "ETIMEDOUT" === t.code && (e.timedout = !0), s(t = t || e.aborted || 200 === i.statusCode || 206 === i.statusCode || 0 === i.statusCode ? t : new Error("XHR Failed with a response of: " + (e && (r || e.responseText))), e)
    }

    function Od() {
        function d(e, a) {
            e = P({timeout: 45e3}, e);
            var t = d.beforeRequest || T.Vhs.xhr.beforeRequest,
                i = d._requestCallbackSet || T.Vhs.xhr._requestCallbackSet || new Set;
            const o = d._responseCallbackSet || T.Vhs.xhr._responseCallbackSet;
            t && "function" == typeof t && (T.log.warn("beforeRequest is deprecated, use onRequest instead."), i.add(t));
            var s = !0 === T.Vhs.xhr.original ? jd : T.Vhs.xhr, r = ((e, i) => {
                if (e && e.size) {
                    let t = i;
                    return e.forEach(e => {
                        t = e(t)
                    }), t
                }
            })(i, e);
            i.delete(t);
            const l = s(r || e, function (e, t) {
                var i, s, r, n;
                return i = o, s = l, r = e, n = t, i && i.size && i.forEach(e => {
                    e(s, r, n)
                }), Pd(l, e, t, a)
            }), n = l.abort;
            return l.abort = function () {
                return l.aborted = !0, n.apply(l, arguments)
            }, l.uri = e.uri, l.requestTime = Date.now(), l
        }

        return d.original = !0, d
    }

    function Nd(e) {
        var t = {};
        return e.byterange && (t.Range = function (e) {
            let t;
            return "bytes=" + e.offset + "-" + (t = "bigint" == typeof e.offset || "bigint" == typeof e.length ? window.BigInt(e.offset) + window.BigInt(e.length) - window.BigInt(1) : e.offset + e.length - 1)
        }(e.byterange)), t
    }

    function Rd(e, t) {
        return e = e.toString(16), "00".substring(0, 2 - e.length) + e + (t % 2 ? " " : "")
    }

    function Md(e) {
        return 32 <= e && e < 126 ? String.fromCharCode(e) : "."
    }

    function Ud(i) {
        const s = {};
        return Object.keys(i).forEach(e => {
            var t = i[e];
            $n(t) ? s[e] = {bytes: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength} : s[e] = t
        }), s
    }

    function Bd(e) {
        var t = e.byterange || {length: 1 / 0, offset: 0};
        return [t.length, t.offset, e.resolvedUri].join(",")
    }

    function Fd(e) {
        return e.resolvedUri
    }

    const jd = T["xhr"], qd = e => {
        var t, i, s = Array.prototype.slice.call(e);
        let r = "";
        for (let e = 0; e < s.length / 16; e++) t = s.slice(16 * e, 16 * e + 16).map(Rd).join(""), i = s.slice(16 * e, 16 * e + 16).map(Md).join(""), r += t + " " + i + "\n";
        return r
    };
    Rr = Object.freeze({
        __proto__: null,
        createTransferableMessage: Ud,
        initSegmentId: Bd,
        segmentKeyId: Fd,
        hexDump: qd,
        tagDump: ({bytes: e}) => qd(e),
        textRanges: e => {
            let t = "", i;
            for (i = 0; i < e.length; i++) t += (s = e, r = i, s.start(r) + "-" + s.end(r) + " ");
            var s, r;
            return t
        }
    });
    const Hd = .25,
        Vd = e => e.transmuxedPresentationEnd - e.transmuxedPresentationStart - e.transmuxerPrependedSeconds,
        zd = ({playlist: e, time: t = void 0, callback: i}) => {
            var s, r;
            if (i) return e && void 0 !== t ? (e = ((t, i) => {
                if (!i || !i.segments || 0 === i.segments.length) return null;
                let s = 0, r;
                for (let e = 0; e < i.segments.length && (r = i.segments[e], !(t <= (s = r.videoTimingInfo ? r.videoTimingInfo.transmuxedPresentationEnd : s + r.duration))); e++) ;
                var e = i.segments[i.segments.length - 1];
                if (e.videoTimingInfo && e.videoTimingInfo.transmuxedPresentationEnd < t) return null;
                if (t > s) {
                    if (t > s + e.duration * Hd) return null;
                    r = e
                }
                return {
                    segment: r,
                    estimatedStart: r.videoTimingInfo ? r.videoTimingInfo.transmuxedPresentationStart : s - r.duration,
                    type: r.videoTimingInfo ? "accurate" : "estimate"
                }
            })(t, e)) ? "estimate" === e.type ? i({
                message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
                seekTime: e.estimatedStart
            }) : (s = {mediaSeconds: t}, t = t, (r = (e = e.segment).dateTimeObject ? (r = e.videoTimingInfo.transmuxerPrependedSeconds, t = t - (e.videoTimingInfo.transmuxedPresentationStart + r), new Date(e.dateTimeObject.getTime() + 1e3 * t)) : null) && (s.programDateTime = r.toISOString()), i(null, s)) : i({message: "valid programTime was not found"}) : i({message: "getProgramTime: playlist and time must be provided"});
            throw new Error("getProgramTime: callback must be provided")
        }, $d = ({
                     programTime: e,
                     playlist: t,
                     retryCount: i = 2,
                     seekTo: s,
                     pauseAfterSeek: r = !0,
                     tech: n,
                     callback: a
                 }) => {
            var o, l, d;
            if (a) return "undefined" != typeof e && t && s ? t.endList || n.hasStarted_ ? (t => {
                if (!t.segments || 0 === t.segments.length) return !1;
                for (let e = 0; e < t.segments.length; e++) if (!t.segments[e].dateTimeObject) return !1;
                return !0
            })(t) ? (d = ((e, t) => {
                let i;
                try {
                    i = new Date(e)
                } catch (e) {
                    return null
                }
                if (!t || !t.segments || 0 === t.segments.length) return null;
                let s = t.segments[0];
                if (i < new Date(s.dateTimeObject)) return null;
                for (let e = 0; e < t.segments.length - 1; e++) {
                    s = t.segments[e];
                    var r = new Date(t.segments[e + 1].dateTimeObject);
                    if (i < r) break
                }
                var e = t.segments[t.segments.length - 1], n = e.dateTimeObject,
                    a = e.videoTimingInfo ? Vd(e.videoTimingInfo) : e.duration + e.duration * Hd,
                    a = new Date(n.getTime() + 1e3 * a);
                return i > a ? null : {
                    segment: s = i > new Date(n) ? e : s,
                    estimatedStart: s.videoTimingInfo ? s.videoTimingInfo.transmuxedPresentationStart : _d.duration(t, t.mediaSequence + t.segments.indexOf(s)),
                    type: s.videoTimingInfo ? "accurate" : "estimate"
                }
            })(e, t)) ? (l = ((e, t) => {
                let i, s;
                try {
                    i = new Date(e), s = new Date(t)
                } catch (e) {
                }
                e = i.getTime();
                return (s.getTime() - e) / 1e3
            })((o = d.segment).dateTimeObject, e), "estimate" === d.type ? 0 === i ? a({message: e + " is not buffered yet. Try again"}) : (s(d.estimatedStart + l), void n.one("seeked", () => {
                $d({programTime: e, playlist: t, retryCount: i - 1, seekTo: s, pauseAfterSeek: r, tech: n, callback: a})
            })) : (d = o.start + l, n.one("seeked", () => a(null, n.currentTime())), r && n.pause(), void s(d))) : a({message: e + " was not found in the stream"}) : a({message: "programDateTime tags must be provided in the manifest " + t.resolvedUri}) : a({message: "player must be playing a live stream to start buffering"}) : a({message: "seekToProgramTime: programTime, seekTo and playlist must be provided"});
            throw new Error("seekToProgramTime: callback must be provided")
        }, Wd = (e, t) => {
            if (4 === e.readyState) return t()
        }, Gd = (e, t, r) => {
            let s = [], n, a = !1;

            function o(e, t, i, s) {
                return t.abort(), a = !0, r(e, t, i, s)
            }

            function i(e, t) {
                var i;
                if (!a) return e ? o(e, t, "", s) : (i = t.responseText.substring(s && s.byteLength || 0, t.responseText.length), s = function () {
                    for (var e, t, i, s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                    return (r = r.filter(function (e) {
                        return e && (e.byteLength || e.length) && "string" != typeof e
                    })).length <= 1 ? w(r[0]) : (e = r.reduce(function (e, t, i) {
                        return e + (t.byteLength || t.length)
                    }, 0), t = new Uint8Array(e), i = 0, r.forEach(function (e) {
                        e = w(e), t.set(e, i), i += e.byteLength
                    }), t)
                }(s, Nn(i, !0)), n = n || fl(s), s.length < 10 || n && s.length < n + 2 || "ts" === (i = wl(s)) && s.length < 188 || !i && s.length < 376 ? Wd(t, () => o(e, t, "", s)) : o(null, t, i, s))
            }

            const l = t({
                uri: e, beforeSend(e) {
                    e.overrideMimeType("text/plain; charset=x-user-defined"), e.addEventListener("progress", function ({}) {
                        return Pd(e, null, {statusCode: e.status}, i)
                    })
                }
            }, function (e, t) {
                return Pd(l, e, t, i)
            });
            return l
        };
    Ui = T.EventTarget;

    function Xd(t, i) {
        if (!Id(t, i)) return !1;
        if (t.sidx && i.sidx && (t.sidx.offset !== i.sidx.offset || t.sidx.length !== i.sidx.length)) return !1;
        if (!t.sidx && i.sidx || t.sidx && !i.sidx) return !1;
        if (t.segments && !i.segments || !t.segments && i.segments) return !1;
        if (t.segments || i.segments) for (let e = 0; e < t.segments.length; e++) {
            var s = t.segments[e], r = i.segments[e];
            if (s.uri !== r.uri) return !1;
            if (s.byterange || r.byterange) {
                s = s.byterange, r = r.byterange;
                if (s && !r || !s && r) return !1;
                if (s.offset !== r.offset || s.length !== r.length) return !1
            }
        }
        return !0
    }

    const Kd = (e, t, i, s) => {
        return `placeholder-uri-${e}-${t}-` + (s.attributes.NAME || i)
    }, Yd = ({mainXml: e, srcUrl: t, clientOffset: i, sidxMapping: s, previousManifest: r}) => {
        e = e, i = {
            manifestUri: t,
            clientOffset: i,
            sidxMapping: s,
            previousManifest: r
        }, e = pl(ml(e), i), s = rl(e.representationInfo);
        r = Qo({
            dashPlaylists: s,
            locations: e.locations,
            contentSteering: e.contentSteeringInfo,
            sidxMapping: i.sidxMapping,
            previousManifest: i.previousManifest,
            eventStream: e.eventStream
        });
        return Sd(r, t, Kd), r
    }, Qd = (e, t, i) => {
        let a = !0, o = P(e, {
            duration: t.duration,
            minimumUpdatePeriod: t.minimumUpdatePeriod,
            timelineStarts: t.timelineStarts
        });
        for (let e = 0; e < t.playlists.length; e++) {
            var s = t.playlists[e],
                r = (s.sidx && (r = Ho(s.sidx), i) && i[r] && i[r].sidx && Mo(s, i[r].sidx, s.sidx.resolvedUri), Ad(o, s, Xd));
            r && (o = r, a = !1)
        }
        var n, l;
        return Td(t, (e, t, i, s) => {
            var r, n;
            e.playlists && e.playlists.length && (r = e.playlists[0].id, n = Ad(o, e.playlists[0], Xd)) && (s in (o = n).mediaGroups[t][i] || (o.mediaGroups[t][i][s] = e), o.mediaGroups[t][i][s].playlists[0] = o.playlists[r], a = !1)
        }), n = o, l = t, Td(n, (e, t, i, s) => {
            s in l.mediaGroups[t][i] || delete n.mediaGroups[t][i][s]
        }), (a = t.minimumUpdatePeriod === e.minimumUpdatePeriod && a) ? null : o
    }, Jd = (e, t) => {
        return (Boolean(!e.map && !t.map) || Boolean(e.map && t.map && e.map.byterange.offset === t.map.byterange.offset && e.map.byterange.length === t.map.byterange.length)) && e.uri === t.uri && e.byterange.offset === t.byterange.offset && e.byterange.length === t.byterange.length
    }, Zd = (e, t) => {
        var i = {};
        for (const a in e) {
            var s = e[a].sidx;
            if (s) {
                var r = Ho(s);
                if (!t[r]) break;
                var n = t[r].sidxInfo;
                Jd(n, s) && (i[r] = t[r])
            }
        }
        return i
    };

    class eh extends Ui {
        constructor(e, t, i = {}, s) {
            super(), this.mainPlaylistLoader_ = s || this, s || (this.isMain_ = !0);
            var {withCredentials: s = !1} = i;
            if (this.vhs_ = t, this.withCredentials = s, this.addMetadataToTextTrack = i.addMetadataToTextTrack, !e) throw new Error("A non-empty playlist URL or object is required");
            this.on("minimumUpdatePeriod", () => {
                this.refreshXml_()
            }), this.on("mediaupdatetimeout", () => {
                this.media().attributes.serviceLocation || this.refreshMedia_(this.media().id)
            }), this.state = "HAVE_NOTHING", this.loadedPlaylists_ = {}, this.logger_ = Hl("DashPlaylistLoader"), this.isMain_ ? (this.mainPlaylistLoader_.srcUrl = e, this.mainPlaylistLoader_.sidxMapping_ = {}) : this.childPlaylist_ = e
        }

        requestErrored_(e, t, i) {
            return !this.request || (this.request = null, e ? (this.error = "object" != typeof e || e instanceof Error ? {
                status: t.status,
                message: "DASH request error at URL: " + t.uri,
                response: t.response,
                code: 2
            } : e, i && (this.state = i), this.trigger("error"), !0) : void 0)
        }

        addSidxSegments_(a, s, r) {
            const n = a.sidx && Ho(a.sidx);
            if (a.sidx && n && !this.mainPlaylistLoader_.sidxMapping_[n]) {
                const o = ql(a.sidx.resolvedUri), l = (t, i) => {
                    if (!this.requestErrored_(t, i, s)) {
                        t = this.mainPlaylistLoader_.sidxMapping_;
                        let e;
                        try {
                            e = kl(w(i.response).subarray(8))
                        } catch (e) {
                            return void this.requestErrored_(e, i, s)
                        }
                        return t[n] = {sidxInfo: a.sidx, sidx: e}, Mo(a, e, a.sidx.resolvedUri), r(!0)
                    }
                };
                this.request = Gd(o, this.vhs_.xhr, (e, t, i, s) => {
                    var r, n;
                    return e ? l(e, t) : i && "mp4" === i ? ({
                        offset: r,
                        length: n
                    } = a.sidx.byterange, s.length >= n + r ? l(e, {
                        response: s.subarray(r, r + n),
                        status: t.status,
                        uri: t.uri
                    }) : void (this.request = this.vhs_.xhr({
                        uri: o,
                        responseType: "arraybuffer",
                        headers: Nd({byterange: a.sidx.byterange})
                    }, l))) : l({
                        status: t.status,
                        message: `Unsupported ${i || "unknown"} container type for sidx segment at URL: ` + o,
                        response: "",
                        playlist: a,
                        internal: !0,
                        playlistExclusionDuration: 1 / 0,
                        code: 2
                    }, t)
                })
            } else this.mediaRequest_ = window.setTimeout(() => r(!1), 0)
        }

        dispose() {
            this.trigger("dispose"), this.stopRequest(), this.loadedPlaylists_ = {}, window.clearTimeout(this.minimumUpdatePeriodTimeout_), window.clearTimeout(this.mediaRequest_), window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.mediaRequest_ = null, this.minimumUpdatePeriodTimeout_ = null, this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.off()
        }

        hasPendingRequest() {
            return this.request || this.mediaRequest_
        }

        stopRequest() {
            var e;
            this.request && (e = this.request, this.request = null, e.onreadystatechange = null, e.abort())
        }

        media(t) {
            if (!t) return this.media_;
            if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
            const i = this.state;
            if ("string" == typeof t) {
                if (!this.mainPlaylistLoader_.main.playlists[t]) throw new Error("Unknown playlist URI: " + t);
                t = this.mainPlaylistLoader_.main.playlists[t]
            }
            var e = !this.media_ || t.id !== this.media_.id;
            e && this.loadedPlaylists_[t.id] && this.loadedPlaylists_[t.id].endList ? (this.state = "HAVE_METADATA", this.media_ = t, e && (this.trigger("mediachanging"), this.trigger("mediachange"))) : e && (this.media_ && this.trigger("mediachanging"), this.addSidxSegments_(t, i, e => {
                this.haveMetadata({startingState: i, playlist: t})
            }))
        }

        haveMetadata({startingState: e, playlist: t}) {
            this.state = "HAVE_METADATA", this.loadedPlaylists_[t.id] = t, this.mediaRequest_ = null, this.refreshMedia_(t.id), "HAVE_MAIN_MANIFEST" === e ? this.trigger("loadedmetadata") : this.trigger("mediachange")
        }

        pause() {
            this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null), this.stopRequest(), window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null, this.isMain_ && (window.clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_), this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null), "HAVE_NOTHING" === this.state && (this.started = !1)
        }

        load(e) {
            window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null;
            var t = this.media();
            e ? (e = t ? t.targetDuration / 2 * 1e3 : 5e3, this.mediaUpdateTimeout = window.setTimeout(() => this.load(), e)) : this.started ? t && !t.endList ? (this.isMain_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist") : this.start()
        }

        start() {
            this.started = !0, this.isMain_ ? this.requestMain_((e, t) => {
                this.haveMain_(), this.hasPendingRequest() || this.media_ || this.media(this.mainPlaylistLoader_.main.playlists[0])
            }) : this.mediaRequest_ = window.setTimeout(() => this.haveMain_(), 0)
        }

        requestMain_(s) {
            this.request = this.vhs_.xhr({
                uri: this.mainPlaylistLoader_.srcUrl,
                withCredentials: this.withCredentials
            }, (e, t) => {
                if (this.requestErrored_(e, t)) "HAVE_NOTHING" === this.state && (this.started = !1); else {
                    const i = t.responseText !== this.mainPlaylistLoader_.mainXml_;
                    if (this.mainPlaylistLoader_.mainXml_ = t.responseText, t.responseHeaders && t.responseHeaders.date ? this.mainLoaded_ = Date.parse(t.responseHeaders.date) : this.mainLoaded_ = Date.now(), this.mainPlaylistLoader_.srcUrl = ql(this.mainPlaylistLoader_.srcUrl, t), !i) return s(t, i);
                    this.handleMain_(), this.syncClientServerClock_(() => s(t, i))
                }
            })
        }

        syncClientServerClock_(s) {
            const r = gl(this.mainPlaylistLoader_.mainXml_);
            return null === r ? (this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), s()) : "DIRECT" === r.method ? (this.mainPlaylistLoader_.clientOffset_ = r.value - Date.now(), s()) : void (this.request = this.vhs_.xhr({
                uri: jl(this.mainPlaylistLoader_.srcUrl, r.value),
                method: r.method,
                withCredentials: this.withCredentials
            }, (t, i) => {
                if (this.request) {
                    if (t) return this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), s();
                    let e;
                    e = "HEAD" === r.method ? i.responseHeaders && i.responseHeaders.date ? Date.parse(i.responseHeaders.date) : this.mainLoaded_ : Date.parse(i.responseText), this.mainPlaylistLoader_.clientOffset_ = e - Date.now(), s()
                }
            }))
        }

        haveMain_() {
            this.state = "HAVE_MAIN_MANIFEST", this.isMain_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_)
        }

        handleMain_() {
            this.mediaRequest_ = null;
            var e = this.mainPlaylistLoader_.main;
            let t = Yd({
                mainXml: this.mainPlaylistLoader_.mainXml_,
                srcUrl: this.mainPlaylistLoader_.srcUrl,
                clientOffset: this.mainPlaylistLoader_.clientOffset_,
                sidxMapping: this.mainPlaylistLoader_.sidxMapping_,
                previousManifest: e
            });
            e && (t = Qd(e, t, this.mainPlaylistLoader_.sidxMapping_)), this.mainPlaylistLoader_.main = t || e;
            var i = this.mainPlaylistLoader_.main.locations && this.mainPlaylistLoader_.main.locations[0];
            return i && i !== this.mainPlaylistLoader_.srcUrl && (this.mainPlaylistLoader_.srcUrl = i), (!e || t && t.minimumUpdatePeriod !== e.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(), this.addEventStreamToMetadataTrack_(t), Boolean(t)
        }

        updateMinimumUpdatePeriodTimeout_() {
            var e = this.mainPlaylistLoader_;
            e.createMupOnMedia_ && (e.off("loadedmetadata", e.createMupOnMedia_), e.createMupOnMedia_ = null), e.minimumUpdatePeriodTimeout_ && (window.clearTimeout(e.minimumUpdatePeriodTimeout_), e.minimumUpdatePeriodTimeout_ = null);
            let t = e.main && e.main.minimumUpdatePeriod;
            0 === t && (e.media() ? t = 1e3 * e.media().targetDuration : (e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_, e.one("loadedmetadata", e.createMupOnMedia_))), "number" != typeof t || t <= 0 ? t < 0 && this.logger_(`found invalid minimumUpdatePeriod of ${t}, not setting a timeout`) : this.createMUPTimeout_(t)
        }

        createMUPTimeout_(e) {
            const t = this.mainPlaylistLoader_;
            t.minimumUpdatePeriodTimeout_ = window.setTimeout(() => {
                t.minimumUpdatePeriodTimeout_ = null, t.trigger("minimumUpdatePeriod"), t.createMUPTimeout_(e)
            }, e)
        }

        refreshXml_() {
            this.requestMain_((e, t) => {
                t && (this.media_ && (this.media_ = this.mainPlaylistLoader_.main.playlists[this.media_.id]), this.mainPlaylistLoader_.sidxMapping_ = ((e, r) => {
                    let n = Zd(e.playlists, r);
                    return Td(e, (e, t, i, s) => {
                        e.playlists && e.playlists.length && (e = e.playlists, n = P(n, Zd(e, r)))
                    }), n
                })(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.sidxMapping_), this.addSidxSegments_(this.media(), this.state, e => {
                    this.refreshMedia_(this.media().id)
                }))
            })
        }

        refreshMedia_(e) {
            if (!e) throw new Error("refreshMedia_ must take a media id");
            this.media_ && this.isMain_ && this.handleMain_();
            var t = this.mainPlaylistLoader_.main.playlists;
            const i = !this.media_ || this.media_ !== t[e];
            if (i ? this.media_ = t[e] : this.trigger("playlistunchanged"), !this.mediaUpdateTimeout) {
                const s = () => {
                    this.media().endList || (this.mediaUpdateTimeout = window.setTimeout(() => {
                        this.trigger("mediaupdatetimeout"), s()
                    }, Dd(this.media(), Boolean(i))))
                };
                s()
            }
            this.trigger("loadedplaylist")
        }

        addEventStreamToMetadataTrack_(e) {
            e && this.mainPlaylistLoader_.main.eventStream && (e = this.mainPlaylistLoader_.main.eventStream.map(e => ({
                cueTime: e.start,
                frames: [{data: e.messageData}]
            })), this.addMetadataToTextTrack("EventStream", e, this.mainPlaylistLoader_.main.duration))
        }
    }

    var O = {
        GOAL_BUFFER_LENGTH: 30,
        MAX_GOAL_BUFFER_LENGTH: 60,
        BACK_BUFFER_LENGTH: 30,
        GOAL_BUFFER_LENGTH_RATE: 1,
        INITIAL_BANDWIDTH: 4194304,
        BANDWIDTH_VARIANCE: 1.2,
        BUFFER_LOW_WATER_LINE: 0,
        MAX_BUFFER_LOW_WATER_LINE: 30,
        EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
        BUFFER_LOW_WATER_LINE_RATE: 1,
        BUFFER_HIGH_WATER_LINE: 30
    };

    function th(e) {
        return e.on = e.addEventListener, e.off = e.removeEventListener, e
    }

    const ih = t => {
        var i = new Uint8Array(new ArrayBuffer(t.length));
        for (let e = 0; e < t.length; e++) i[e] = t.charCodeAt(e);
        return i.buffer
    };

    function sh(s) {
        return function () {
            const e = function (t) {
                try {
                    return URL.createObjectURL(new Blob([t], {type: "application/javascript"}))
                } catch (e) {
                    var i = new BlobBuilder;
                    return i.append(t), URL.createObjectURL(i.getBlob())
                }
            }(s);
            var t = th(new Worker(e));
            t.objURL = e;
            const i = t.terminate;
            return t.on = t.addEventListener, t.off = t.removeEventListener, t.terminate = function () {
                return URL.revokeObjectURL(e), i.call(this)
            }, t
        }
    }

    function rh(e) {
        return `var browserWorkerPolyFill = ${th.toString()};
` + "browserWorkerPolyFill(self);\n" + e
    }

    function nh(e) {
        return e.toString().replace(/^function.+?{/, "").slice(0, -1)
    }

    var ah = sh(rh(nh(function () {
        function e() {
            this.init = function () {
                var n = {};
                this.on = function (e, t) {
                    n[e] || (n[e] = []), n[e] = n[e].concat(t)
                }, this.off = function (e, t) {
                    return !!n[e] && (t = n[e].indexOf(t), n[e] = n[e].slice(), n[e].splice(t, 1), -1 < t)
                }, this.trigger = function (e) {
                    var t, i, s, r = n[e];
                    if (r) if (2 === arguments.length) for (i = r.length, t = 0; t < i; ++t) r[t].call(this, arguments[1]); else {
                        for (s = [], t = arguments.length, t = 1; t < arguments.length; ++t) s.push(arguments[t]);
                        for (i = r.length, t = 0; t < i; ++t) r[t].apply(this, s)
                    }
                }, this.dispose = function () {
                    n = {}
                }
            }
        }

        var l, M, U, B, F, j, q, H, V, z, $, W, G, X, K, Y, Q, J, Z, ee, d, te, ie, se, re, ne, ae, oe, t, le, de, he,
            ue, ce, pe, me, ge,
            fe = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            i = (e.prototype.pipe = function (t) {
                return this.on("data", function (e) {
                    t.push(e)
                }), this.on("done", function (e) {
                    t.flush(e)
                }), this.on("partialdone", function (e) {
                    t.partialFlush(e)
                }), this.on("endedtimeline", function (e) {
                    t.endTimeline(e)
                }), this.on("reset", function (e) {
                    t.reset(e)
                }), t
            }, e.prototype.push = function (e) {
                this.trigger("data", e)
            }, e.prototype.flush = function (e) {
                this.trigger("done", e)
            }, e.prototype.partialFlush = function (e) {
                this.trigger("partialdone", e)
            }, e.prototype.endTimeline = function (e) {
                this.trigger("endedtimeline", e)
            }, e.prototype.reset = function (e) {
                this.trigger("reset", e)
            }, e), ye = Math.pow(2, 32), s = {
                getUint64: function (e) {
                    var t, e = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    return e.getBigUint64 ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t) : t : e.getUint32(0) * ye + e.getUint32(4)
                }, MAX_UINT32: ye
            }, _e = s.MAX_UINT32;
        if (d = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            smhd: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            styp: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: []
        }, "undefined" != typeof Uint8Array) {
            for (var r in d) d.hasOwnProperty(r) && (d[r] = [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3)]);
            te = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), se = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), ie = new Uint8Array([0, 0, 0, 1]), Ce = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), Ie = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), re = {
                video: Ce,
                audio: Ie
            }, oe = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), ae = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), le = t, de = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), he = t, ne = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
        l = function (e) {
            for (var t, i = [], s = 0, r = 1; r < arguments.length; r++) i.push(arguments[r]);
            for (r = i.length; r--;) s += i[r].byteLength;
            for (t = new Uint8Array(s + 8), new DataView(t.buffer, t.byteOffset, t.byteLength).setUint32(0, t.byteLength), t.set(e, 4), r = 0, s = 8; r < i.length; r++) t.set(i[r], s), s += i[r].byteLength;
            return t
        }, M = function () {
            return l(d.dinf, l(d.dref, oe))
        }, U = function (e) {
            return l(d.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
        }, X = function (e) {
            return l(d.hdlr, re[e])
        }, G = function (e) {
            var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
            return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), l(d.mdhd, t)
        }, W = function (e) {
            return l(d.mdia, G(e), X(e.type), j(e))
        }, F = function (e) {
            return l(d.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
        }, j = function (e) {
            return l(d.minf, "video" === e.type ? l(d.vmhd, ne) : l(d.smhd, ae), M(), Y(e))
        }, H = function (e) {
            for (var t = e.length, i = []; t--;) i[t] = Z(e[t]);
            return l.apply(null, [d.mvex].concat(i))
        }, V = function (e) {
            e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return l(d.mvhd, e)
        }, K = function (e) {
            for (var t, i = e.samples || [], s = new Uint8Array(4 + i.length), r = 0; r < i.length; r++) t = i[r].flags, s[r + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
            return l(d.sdtp, s)
        }, Y = function (e) {
            return l(d.stbl, Q(e), l(d.stts, he), l(d.stsc, le), l(d.stsz, de), l(d.stco, t))
        }, Q = function (e) {
            return l(d.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), ("video" === e.type ? ue : ce)(e))
        }, ue = function (e) {
            for (var t, i, s = e.sps || [], r = e.pps || [], n = [], a = [], o = 0; o < s.length; o++) n.push((65280 & s[o].byteLength) >>> 8), n.push(255 & s[o].byteLength), n = n.concat(Array.prototype.slice.call(s[o]));
            for (o = 0; o < r.length; o++) a.push((65280 & r[o].byteLength) >>> 8), a.push(255 & r[o].byteLength), a = a.concat(Array.prototype.slice.call(r[o]));
            return t = [d.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), l(d.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([s.length], n, [r.length], a))), l(d.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))], e.sarRatio && (i = e.sarRatio[0], e = e.sarRatio[1], t.push(l(d.pasp, new Uint8Array([(4278190080 & i) >> 24, (16711680 & i) >> 16, (65280 & i) >> 8, 255 & i, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e])))), l.apply(null, t)
        }, ce = function (e) {
            return l(d.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), U(e))
        }, $ = function (e) {
            e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
            return l(d.tkhd, e)
        }, J = function (e) {
            var t,
                i = l(d.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                s = Math.floor(e.baseMediaDecodeTime / _e), r = Math.floor(e.baseMediaDecodeTime % _e),
                s = l(d.tfdt, new Uint8Array([1, 0, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r]));
            return "audio" === e.type ? (t = ee(e, 92), l(d.traf, i, s, t)) : (r = K(e), t = ee(e, r.length + 92), l(d.traf, i, s, t, r))
        }, z = function (e) {
            return e.duration = e.duration || 4294967295, l(d.trak, $(e), W(e))
        }, Z = function (e) {
            var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
            return "video" !== e.type && (t[t.length - 1] = 0), l(d.trex, t)
        }, pe = function (e, t) {
            var i = 0, s = 0, r = 0, n = 0;
            return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (s = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset) && (n = 8), [0, 0, i | s | r | n, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
        }, me = function (e, t) {
            var i, s, r, n, a = e.samples || [];
            for (t += 20 + 16 * a.length, e = pe(a, t), (s = new Uint8Array(e.length + 16 * a.length)).set(e), i = e.length, n = 0; n < a.length; n++) r = a[n], s[i++] = (4278190080 & r.duration) >>> 24, s[i++] = (16711680 & r.duration) >>> 16, s[i++] = (65280 & r.duration) >>> 8, s[i++] = 255 & r.duration, s[i++] = (4278190080 & r.size) >>> 24, s[i++] = (16711680 & r.size) >>> 16, s[i++] = (65280 & r.size) >>> 8, s[i++] = 255 & r.size, s[i++] = r.flags.isLeading << 2 | r.flags.dependsOn, s[i++] = r.flags.isDependedOn << 6 | r.flags.hasRedundancy << 4 | r.flags.paddingValue << 1 | r.flags.isNonSyncSample, s[i++] = 61440 & r.flags.degradationPriority, s[i++] = 15 & r.flags.degradationPriority, s[i++] = (4278190080 & r.compositionTimeOffset) >>> 24, s[i++] = (16711680 & r.compositionTimeOffset) >>> 16, s[i++] = (65280 & r.compositionTimeOffset) >>> 8, s[i++] = 255 & r.compositionTimeOffset;
            return l(d.trun, s)
        }, ge = function (e, t) {
            var i, s, r, n, a = e.samples || [];
            for (t += 20 + 8 * a.length, e = pe(a, t), (i = new Uint8Array(e.length + 8 * a.length)).set(e), s = e.length, n = 0; n < a.length; n++) r = a[n], i[s++] = (4278190080 & r.duration) >>> 24, i[s++] = (16711680 & r.duration) >>> 16, i[s++] = (65280 & r.duration) >>> 8, i[s++] = 255 & r.duration, i[s++] = (4278190080 & r.size) >>> 24, i[s++] = (16711680 & r.size) >>> 16, i[s++] = (65280 & r.size) >>> 8, i[s++] = 255 & r.size;
            return l(d.trun, i)
        }, ee = function (e, t) {
            return ("audio" === e.type ? ge : me)(e, t)
        };

        function ve(e, t) {
            var i = xe();
            return i.dataOffset = t, i.compositionTimeOffset = e.pts - e.dts, i.duration = e.duration, i.size = 4 * e.length, i.size += e.byteLength, e.keyFrame && (i.flags.dependsOn = 2, i.flags.isNonSyncSample = 0), i
        }

        function n(e) {
            for (var t = []; e--;) t.push(0);
            return t
        }

        function a(e) {
            e = e || {}, a.prototype.init.call(this), this.parse708captions_ = "boolean" != typeof e.parse708captions || e.parse708captions, this.captionPackets_ = [], this.ccStreams_ = [new g(0, 0), new g(0, 1), new g(1, 0), new g(1, 1)], this.parse708captions_ && (this.cc708Stream_ = new m({captionServices: e.captionServices})), this.reset(), this.ccStreams_.forEach(function (e) {
                e.on("data", this.trigger.bind(this, "data")), e.on("partialdone", this.trigger.bind(this, "partialdone")), e.on("done", this.trigger.bind(this, "done"))
            }, this), this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")))
        }

        function be(e) {
            return 32 <= e && e <= 127 || 160 <= e && e <= 255
        }

        function o(e) {
            this.windowNum = e, this.reset()
        }

        function Te(e, t, i) {
            this.serviceNum = e, this.text = "", this.currentWindow = new o(-1), this.windows = [], this.stream = i, "string" == typeof t && this.createTextDecoder(t)
        }

        function we(e) {
            return null === e ? "" : (e = Fe[e] || e, String.fromCharCode(e))
        }

        function h() {
            for (var e = [], t = je + 1; t--;) e.push({text: "", indent: 0, offset: 0});
            return e
        }

        function Se(e, t) {
            var i = 1;
            for (t < e && (i = -1); Math.abs(t - e) > $e;) e += i * ze;
            return e
        }

        function Ee(e) {
            var t, i;
            Ee.prototype.init.call(this), this.type_ = e || "shared", this.push = function (e) {
                "shared" !== this.type_ && e.type !== this.type_ || (void 0 === i && (i = e.dts), e.dts = Se(e.dts, i), e.pts = Se(e.pts, i), t = e.dts, this.trigger("data", e))
            }, this.flush = function () {
                i = t, this.trigger("done")
            }, this.endTimeline = function () {
                this.flush(), this.trigger("endedtimeline")
            }, this.discontinuity = function () {
                t = i = void 0
            }, this.reset = function () {
                this.discontinuity(), this.trigger("reset")
            }
        }

        var ke, Ce = {
                ftyp: B = function () {
                    return l(d.ftyp, te, ie, te, se)
                }, mdat: function (e) {
                    return l(d.mdat, e)
                }, moof: function (e, t) {
                    for (var i = [], s = t.length; s--;) i[s] = J(t[s]);
                    return l.apply(null, [d.moof, F(e)].concat(i))
                }, moov: q = function (e) {
                    for (var t = e.length, i = []; t--;) i[t] = z(e[t]);
                    return l.apply(null, [d.moov, V(4294967295)].concat(i).concat(H(e)))
                }, initSegment: function (e) {
                    var t = B(), e = q(e), i = new Uint8Array(t.byteLength + e.byteLength);
                    return i.set(t), i.set(e, t.byteLength), i
                }
            }, xe = function () {
                return {
                    size: 0,
                    flags: {
                        isLeading: 0,
                        dependsOn: 1,
                        isDependedOn: 0,
                        hasRedundancy: 0,
                        degradationPriority: 0,
                        isNonSyncSample: 1
                    }
                }
            }, Ie = {
                groupNalsIntoFrames: function (e) {
                    var t, i, s = [], r = [];
                    for (r.byteLength = 0, r.nalCount = 0, t = s.byteLength = r.duration = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (s.length && (s.duration = i.dts - s.dts, r.byteLength += s.byteLength, r.nalCount += s.length, r.duration += s.duration, r.push(s)), (s = [i]).byteLength = i.data.byteLength, s.pts = i.pts, s.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (s.keyFrame = !0), s.duration = i.dts - s.dts, s.byteLength += i.data.byteLength, s.push(i));
                    return r.length && (!s.duration || s.duration <= 0) && (s.duration = r[r.length - 1].duration), r.byteLength += s.byteLength, r.nalCount += s.length, r.duration += s.duration, r.push(s), r
                }, groupFramesIntoGops: function (e) {
                    var t, i, s = [], r = [];
                    for (s.byteLength = 0, s.nalCount = 0, s.duration = 0, s.pts = e[0].pts, s.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++) (i = e[t]).keyFrame ? (s.length && (r.push(s), r.byteLength += s.byteLength, r.nalCount += s.nalCount, r.duration += s.duration), (s = [i]).nalCount = i.length, s.byteLength = i.byteLength, s.pts = i.pts, s.dts = i.dts, s.duration = i.duration) : (s.duration += i.duration, s.nalCount += i.length, s.byteLength += i.byteLength, s.push(i));
                    return r.length && s.duration <= 0 && (s.duration = r[r.length - 1].duration), r.byteLength += s.byteLength, r.nalCount += s.nalCount, r.duration += s.duration, r.push(s), r
                }, extendFirstKeyFrame: function (e) {
                    var t;
                    return !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
                }, generateSampleTable: function (e, t) {
                    for (var i, s, r, n = t || 0, a = [], o = 0; o < e.length; o++) for (s = e[o], i = 0; i < s.length; i++) r = s[i], n += (r = ve(r, n)).size, a.push(r);
                    return a
                }, concatenateNalData: function (e) {
                    for (var t, i, s, r, n, a = 0, o = e.byteLength, l = e.nalCount, d = new Uint8Array(o + 4 * l), h = new DataView(d.buffer), u = 0; u < e.length; u++) for (s = e[u], t = 0; t < s.length; t++) for (r = s[t], i = 0; i < r.length; i++) n = r[i], h.setUint32(a, n.data.byteLength), d.set(n.data, a += 4), a += n.data.byteLength;
                    return d
                }, generateSampleTableForFrame: function (e, t) {
                    var i = [], e = ve(e, t || 0);
                    return i.push(e), i
                }, concatenateNalDataForFrame: function (e) {
                    for (var t, i = 0, s = e.byteLength, r = e.length, n = new Uint8Array(s + 4 * r), a = new DataView(n.buffer), o = 0; o < e.length; o++) t = e[o], a.setUint32(i, t.data.byteLength), n.set(t.data, i += 4), i += t.data.byteLength;
                    return n
                }
            }, u = [33, 16, 5, 32, 164, 27], Ae = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252],
            De = function (e) {
                return 9e4 * e
            }, Le = function (e, t) {
                return e * t
            }, Pe = function (e) {
                return e / 9e4
            }, Oe = function (e, t) {
                return e / t
            }, c = {
                ONE_SECOND_IN_TS: 9e4,
                secondsToVideoTs: De,
                secondsToAudioTs: Le,
                videoTsToSeconds: Pe,
                audioTsToSeconds: Oe,
                audioTsToVideoTs: function (e, t) {
                    return e / t * 9e4
                },
                videoTsToAudioTs: function (e, t) {
                    return e / 9e4 * t
                },
                metadataTsToSeconds: function (e, t, i) {
                    return Pe(i ? e : e - t)
                }
            }, Ne = function () {
                var e, i;
                return ke || (e = {
                    96e3: [u, [227, 64], n(154), [56]],
                    88200: [u, [231], n(170), [56]],
                    64e3: [u, [248, 192], n(240), [56]],
                    48e3: [u, [255, 192], n(268), [55, 148, 128], n(54), [112]],
                    44100: [u, [255, 192], n(268), [55, 163, 128], n(84), [112]],
                    32e3: [u, [255, 192], n(268), [55, 234], n(226), [112]],
                    24e3: [u, [255, 192], n(268), [55, 255, 128], n(268), [111, 112], n(126), [224]],
                    16e3: [u, [255, 192], n(268), [55, 255, 128], n(268), [111, 255], n(269), [223, 108], n(195), [1, 192]],
                    12e3: [Ae, n(268), [3, 127, 248], n(268), [6, 255, 240], n(268), [13, 255, 224], n(268), [27, 253, 128], n(259), [56]],
                    11025: [Ae, n(268), [3, 127, 248], n(268), [6, 255, 240], n(268), [13, 255, 224], n(268), [27, 255, 192], n(268), [55, 175, 128], n(108), [112]],
                    8e3: [Ae, n(268), [3, 121, 16], n(47), [7]]
                }, i = e, ke = Object.keys(i).reduce(function (e, t) {
                    return e[t] = new Uint8Array(i[t].reduce(function (e, t) {
                        return e.concat(t)
                    }, [])), e
                }, {})), ke
            }, Re = c, De = {
                prefixWithSilence: function (e, t, i, s) {
                    var r, n, a, o, l, d = 0, h = 0;
                    if (t.length && (n = Re.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), r = Math.ceil(Re.ONE_SECOND_IN_TS / (e.samplerate / 1024)), i && s && (n = n - Math.max(i, s), h = (d = Math.floor(n / r)) * r), !(d < 1 || h > Re.ONE_SECOND_IN_TS / 2))) {
                        for (a = (a = Ne()[e.samplerate]) || t[0].data, o = 0; o < d; o++) l = t[0], t.splice(0, 0, {
                            data: a,
                            dts: l.dts - r,
                            pts: l.pts - r
                        });
                        return e.baseMediaDecodeTime -= Math.floor(Re.videoTsToAudioTs(h, e.samplerate)), h
                    }
                }, trimAdtsFramesByEarliestDts: function (e, t, i) {
                    return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0, e.filter(function (e) {
                        return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0)
                    }))
                }, generateSampleTable: function (e) {
                    for (var t, i = [], s = 0; s < e.length; s++) t = e[s], i.push({
                        size: t.data.byteLength,
                        duration: 1024
                    });
                    return i
                }, concatenateFrameData: function (e) {
                    for (var t, i = 0, s = new Uint8Array(function (e) {
                        for (var t = 0, i = 0; i < e.length; i++) t += e[i].data.byteLength;
                        return t
                    }(e)), r = 0; r < e.length; r++) t = e[r], s.set(t.data, i), i += t.data.byteLength;
                    return s
                }
            }, Me = c.ONE_SECOND_IN_TS, Le = {
                clearDtsInfo: function (e) {
                    delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
                }, calculateTrackBaseMediaDecodeTime: function (e, t) {
                    var i = e.minSegmentDts;
                    return t || (i -= e.timelineStartInfo.dts), t = e.timelineStartInfo.baseMediaDecodeTime, t += i, t = Math.max(0, t), "audio" === e.type && (t *= e.samplerate / Me, t = Math.floor(t)), t
                }, collectDtsInfo: function (e, t) {
                    "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
                }
            }, Oe = {
                parseSei: function (e) {
                    for (var t = 0, i = {
                        payloadType: -1,
                        payloadSize: 0
                    }, s = 0, r = 0; t < e.byteLength && 128 !== e[t];) {
                        for (; 255 === e[t];) s += 255, t++;
                        for (s += e[t++]; 255 === e[t];) r += 255, t++;
                        if (r += e[t++], !i.payload && 4 === s) {
                            if ("GA94" === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
                                i.payloadType = s, i.payloadSize = r, i.payload = e.subarray(t, t + r);
                                break
                            }
                            i.payload = void 0
                        }
                        t += r, r = s = 0
                    }
                    return i
                }, parseUserData: function (e) {
                    return 181 !== e.payload[0] || 49 != (e.payload[1] << 8 | e.payload[2]) || "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) || 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1)
                }, parseCaptionPackets: function (e, t) {
                    var i, s, r, n, a = [];
                    if (64 & t[0]) for (s = 31 & t[0], i = 0; i < s; i++) n = {
                        type: 3 & t[2 + (r = 3 * i)],
                        pts: e
                    }, 4 & t[2 + r] && (n.ccData = t[3 + r] << 8 | t[4 + r], a.push(n));
                    return a
                }, discardEmulationPreventionBytes: function (e) {
                    for (var t = e.byteLength, i = [], s = 1; s < t - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (i.push(s + 2), s += 2) : s++;
                    if (0 === i.length) return e;
                    for (var r = t - i.length, n = new Uint8Array(r), a = 0, s = 0; s < r; a++, s++) a === i[0] && (a++, i.shift()), n[s] = e[a];
                    return n
                }, USER_DATA_REGISTERED_ITU_T_T35: 4
            }, p = i, Ue = Oe, Be = ((a.prototype = new p).push = function (e) {
                var t;
                "sei_rbsp" === e.nalUnitType && (t = Ue.parseSei(e.escapedRBSP)).payload && t.payloadType === Ue.USER_DATA_REGISTERED_ITU_T_T35 && (t = Ue.parseUserData(t)) && (e.dts < this.latestDts_ ? this.ignoreNextEqualDts_ = !0 : e.dts === this.latestDts_ && this.ignoreNextEqualDts_ ? (this.numSameDts_--, this.numSameDts_ || (this.ignoreNextEqualDts_ = !1)) : (t = Ue.parseCaptionPackets(e.pts, t), this.captionPackets_ = this.captionPackets_.concat(t), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts))
            }, a.prototype.flushCCStreams = function (t) {
                this.ccStreams_.forEach(function (e) {
                    return "flush" === t ? e.flush() : e.partialFlush()
                }, this)
            }, a.prototype.flushStream = function (e) {
                this.captionPackets_.length && (this.captionPackets_.forEach(function (e, t) {
                    e.presortIndex = t
                }), this.captionPackets_.sort(function (e, t) {
                    return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
                }), this.captionPackets_.forEach(function (e) {
                    e.type < 2 ? this.dispatchCea608Packet(e) : this.dispatchCea708Packet(e)
                }, this), this.captionPackets_.length = 0), this.flushCCStreams(e)
            }, a.prototype.flush = function () {
                return this.flushStream("flush")
            }, a.prototype.partialFlush = function () {
                return this.flushStream("partialFlush")
            }, a.prototype.reset = function () {
                this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (e) {
                    e.reset()
                })
            }, a.prototype.dispatchCea608Packet = function (e) {
                this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
            }, a.prototype.setsChannel1Active = function (e) {
                return 4096 == (30720 & e.ccData)
            }, a.prototype.setsChannel2Active = function (e) {
                return 6144 == (30720 & e.ccData)
            }, a.prototype.setsTextOrXDSActive = function (e) {
                return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData)
            }, a.prototype.dispatchCea708Packet = function (e) {
                this.parse708captions_ && this.cc708Stream_.push(e)
            }, {
                127: 9834,
                4128: 32,
                4129: 160,
                4133: 8230,
                4138: 352,
                4140: 338,
                4144: 9608,
                4145: 8216,
                4146: 8217,
                4147: 8220,
                4148: 8221,
                4149: 8226,
                4153: 8482,
                4154: 353,
                4156: 339,
                4157: 8480,
                4159: 376,
                4214: 8539,
                4215: 8540,
                4216: 8541,
                4217: 8542,
                4218: 9168,
                4219: 9124,
                4220: 9123,
                4221: 9135,
                4222: 9126,
                4223: 9121,
                4256: 12600
            }), m = (o.prototype.reset = function () {
                this.clearText(), this.pendingNewLine = !1, this.winAttr = {}, this.penAttr = {}, this.penLoc = {}, this.penColor = {}, this.visible = 0, this.rowLock = 0, this.columnLock = 0, this.priority = 0, this.relativePositioning = 0, this.anchorVertical = 0, this.anchorHorizontal = 0, this.anchorPoint = 0, this.rowCount = 1, this.virtualRowCount = this.rowCount + 1, this.columnCount = 41, this.windowStyle = 0, this.penStyle = 0
            }, o.prototype.getText = function () {
                return this.rows.join("\n")
            }, o.prototype.clearText = function () {
                this.rows = [""], this.rowIdx = 0
            }, o.prototype.newLine = function (e) {
                for (this.rows.length >= this.virtualRowCount && "function" == typeof this.beforeRowOverflow && this.beforeRowOverflow(e), 0 < this.rows.length && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount;) this.rows.shift(), this.rowIdx--
            }, o.prototype.isEmpty = function () {
                return 0 === this.rows.length || 1 === this.rows.length && "" === this.rows[0]
            }, o.prototype.addText = function (e) {
                this.rows[this.rowIdx] += e
            }, o.prototype.backspace = function () {
                var e;
                this.isEmpty() || (e = this.rows[this.rowIdx], this.rows[this.rowIdx] = e.substr(0, e.length - 1))
            }, Te.prototype.init = function (e, t) {
                this.startPts = e;
                for (var i = 0; i < 8; i++) this.windows[i] = new o(i), "function" == typeof t && (this.windows[i].beforeRowOverflow = t)
            }, Te.prototype.setCurrentWindow = function (e) {
                this.currentWindow = this.windows[e]
            }, Te.prototype.createTextDecoder = function (t) {
                if ("undefined" == typeof TextDecoder) this.stream.trigger("log", {
                    level: "warn",
                    message: "The `encoding` option is unsupported without TextDecoder support"
                }); else try {
                    this.textDecoder_ = new TextDecoder(t)
                } catch (e) {
                    this.stream.trigger("log", {
                        level: "warn",
                        message: "TextDecoder could not be created with " + t + " encoding. " + e
                    })
                }
            }, function (e) {
                e = e || {}, m.prototype.init.call(this);
                var t, i = this, s = e.captionServices || {}, r = {};
                Object.keys(s).forEach(e => {
                    t = s[e], /^SERVICE/.test(e) && (r[e] = t.encoding)
                }), this.serviceEncodings = r, this.current708Packet = null, this.services = {}, this.push = function (e) {
                    (3 === e.type || null === i.current708Packet) && i.new708Packet(), i.add708Bytes(e)
                }
            }), Fe = (m.prototype = new p, m.prototype.new708Packet = function () {
                null !== this.current708Packet && this.push708Packet(), this.current708Packet = {data: [], ptsVals: []}
            }, m.prototype.add708Bytes = function (e) {
                var t = e.ccData, i = t >>> 8, t = 255 & t;
                this.current708Packet.ptsVals.push(e.pts), this.current708Packet.data.push(i), this.current708Packet.data.push(t)
            }, m.prototype.push708Packet = function () {
                var e, t = this.current708Packet, i = t.data, s = null, r = 0, n = i[r++];
                for (t.seq = n >> 6, t.sizeCode = 63 & n; r < i.length; r++) e = 31 & (n = i[r++]), 7 === (s = n >> 5) && 0 < e && (s = i[r++]), this.pushServiceBlock(s, r, e), 0 < e && (r += e - 1)
            }, m.prototype.pushServiceBlock = function (e, t, i) {
                for (var s, r = t, n = this.current708Packet.data, a = (a = this.services[e]) || this.initService(e, r); r < t + i && r < n.length; r++) s = n[r], be(s) ? r = this.handleText(r, a) : 24 === s ? r = this.multiByteCharacter(r, a) : 16 === s ? r = this.extendedCommands(r, a) : 128 <= s && s <= 135 ? r = this.setCurrentWindow(r, a) : 152 <= s && s <= 159 ? r = this.defineWindow(r, a) : 136 === s ? r = this.clearWindows(r, a) : 140 === s ? r = this.deleteWindows(r, a) : 137 === s ? r = this.displayWindows(r, a) : 138 === s ? r = this.hideWindows(r, a) : 139 === s ? r = this.toggleWindows(r, a) : 151 === s ? r = this.setWindowAttributes(r, a) : 144 === s ? r = this.setPenAttributes(r, a) : 145 === s ? r = this.setPenColor(r, a) : 146 === s ? r = this.setPenLocation(r, a) : 143 === s ? a = this.reset(r, a) : 8 === s ? a.currentWindow.backspace() : 12 === s ? a.currentWindow.clearText() : 13 === s ? a.currentWindow.pendingNewLine = !0 : 14 === s ? a.currentWindow.clearText() : 141 === s && r++
            }, m.prototype.extendedCommands = function (e, t) {
                var i = this.current708Packet.data[++e];
                return e = be(i) ? this.handleText(e, t, {isExtended: !0}) : e
            }, m.prototype.getPts = function (e) {
                return this.current708Packet.ptsVals[Math.floor(e / 2)]
            }, m.prototype.initService = function (t, e) {
                var i, s = "SERVICE" + t, r = this;
                return s in this.serviceEncodings && (i = this.serviceEncodings[s]), this.services[t] = new Te(t, i, r), this.services[t].init(this.getPts(e), function (e) {
                    r.flushDisplayed(e, r.services[t])
                }), this.services[t]
            }, m.prototype.handleText = function (e, t, i) {
                var s, r = i && i.isExtended, i = i && i.isMultiByte, n = this.current708Packet.data, a = r ? 4096 : 0,
                    o = n[e], n = n[e + 1], l = t.currentWindow;
                return i ? (s = [o, n], e++) : s = [o], i = t.textDecoder_ && !r ? t.textDecoder_.decode(new Uint8Array(s)) : i ? (n = s.map(e => ("0" + (255 & e).toString(16)).slice(-2)).join(""), String.fromCharCode(parseInt(n, 16))) : (t = Be[r = a | o] || r, 4096 & r && r === t ? "" : String.fromCharCode(t)), l.pendingNewLine && !l.isEmpty() && l.newLine(this.getPts(e)), l.pendingNewLine = !1, l.addText(i), e
            }, m.prototype.multiByteCharacter = function (e, t) {
                var i = this.current708Packet.data, s = i[e + 1], i = i[e + 2];
                return e = be(s) && be(i) ? this.handleText(++e, t, {isMultiByte: !0}) : e
            }, m.prototype.setCurrentWindow = function (e, t) {
                var i = this.current708Packet.data[e];
                return t.setCurrentWindow(7 & i), e
            }, m.prototype.defineWindow = function (e, t) {
                var i = this.current708Packet.data, s = i[e], t = (t.setCurrentWindow(7 & s), t.currentWindow), s = i[++e];
                return t.visible = (32 & s) >> 5, t.rowLock = (16 & s) >> 4, t.columnLock = (8 & s) >> 3, t.priority = 7 & s, s = i[++e], t.relativePositioning = (128 & s) >> 7, t.anchorVertical = 127 & s, s = i[++e], t.anchorHorizontal = s, s = i[++e], t.anchorPoint = (240 & s) >> 4, t.rowCount = 15 & s, s = i[++e], t.columnCount = 63 & s, s = i[++e], t.windowStyle = (56 & s) >> 3, t.penStyle = 7 & s, t.virtualRowCount = t.rowCount + 1, e
            }, m.prototype.setWindowAttributes = function (e, t) {
                var i = this.current708Packet.data, t = (i[e], t.currentWindow.winAttr), s = i[++e];
                return t.fillOpacity = (192 & s) >> 6, t.fillRed = (48 & s) >> 4, t.fillGreen = (12 & s) >> 2, t.fillBlue = 3 & s, s = i[++e], t.borderType = (192 & s) >> 6, t.borderRed = (48 & s) >> 4, t.borderGreen = (12 & s) >> 2, t.borderBlue = 3 & s, s = i[++e], t.borderType += (128 & s) >> 5, t.wordWrap = (64 & s) >> 6, t.printDirection = (48 & s) >> 4, t.scrollDirection = (12 & s) >> 2, t.justify = 3 & s, s = i[++e], t.effectSpeed = (240 & s) >> 4, t.effectDirection = (12 & s) >> 2, t.displayEffect = 3 & s, e
            }, m.prototype.flushDisplayed = function (e, t) {
                for (var i = [], s = 0; s < 8; s++) t.windows[s].visible && !t.windows[s].isEmpty() && i.push(t.windows[s].getText());
                t.endPts = e, t.text = i.join("\n\n"), this.pushCaption(t), t.startPts = e
            }, m.prototype.pushCaption = function (e) {
                "" !== e.text && (this.trigger("data", {
                    startPts: e.startPts,
                    endPts: e.endPts,
                    text: e.text,
                    stream: "cc708_" + e.serviceNum
                }), e.text = "", e.startPts = e.endPts)
            }, m.prototype.displayWindows = function (e, t) {
                var i = this.current708Packet.data[++e], s = this.getPts(e);
                this.flushDisplayed(s, t);
                for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible = 1);
                return e
            }, m.prototype.hideWindows = function (e, t) {
                var i = this.current708Packet.data[++e], s = this.getPts(e);
                this.flushDisplayed(s, t);
                for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible = 0);
                return e
            }, m.prototype.toggleWindows = function (e, t) {
                var i = this.current708Packet.data[++e], s = this.getPts(e);
                this.flushDisplayed(s, t);
                for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible ^= 1);
                return e
            }, m.prototype.clearWindows = function (e, t) {
                var i = this.current708Packet.data[++e], s = this.getPts(e);
                this.flushDisplayed(s, t);
                for (var r = 0; r < 8; r++) i & 1 << r && t.windows[r].clearText();
                return e
            }, m.prototype.deleteWindows = function (e, t) {
                var i = this.current708Packet.data[++e], s = this.getPts(e);
                this.flushDisplayed(s, t);
                for (var r = 0; r < 8; r++) i & 1 << r && t.windows[r].reset();
                return e
            }, m.prototype.setPenAttributes = function (e, t) {
                var i = this.current708Packet.data, t = (i[e], t.currentWindow.penAttr), s = i[++e];
                return t.textTag = (240 & s) >> 4, t.offset = (12 & s) >> 2, t.penSize = 3 & s, s = i[++e], t.italics = (128 & s) >> 7, t.underline = (64 & s) >> 6, t.edgeType = (56 & s) >> 3, t.fontStyle = 7 & s, e
            }, m.prototype.setPenColor = function (e, t) {
                var i = this.current708Packet.data, t = (i[e], t.currentWindow.penColor), s = i[++e];
                return t.fgOpacity = (192 & s) >> 6, t.fgRed = (48 & s) >> 4, t.fgGreen = (12 & s) >> 2, t.fgBlue = 3 & s, s = i[++e], t.bgOpacity = (192 & s) >> 6, t.bgRed = (48 & s) >> 4, t.bgGreen = (12 & s) >> 2, t.bgBlue = 3 & s, s = i[++e], t.edgeRed = (48 & s) >> 4, t.edgeGreen = (12 & s) >> 2, t.edgeBlue = 3 & s, e
            }, m.prototype.setPenLocation = function (e, t) {
                var i = this.current708Packet.data, s = (i[e], t.currentWindow.penLoc);
                return t.currentWindow.pendingNewLine = !0, t = i[++e], s.row = 15 & t, t = i[++e], s.column = 63 & t, e
            }, m.prototype.reset = function (e, t) {
                var i = this.getPts(e);
                return this.flushDisplayed(i, t), this.initService(t.serviceNum, e)
            }, {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                304: 174,
                305: 176,
                306: 189,
                307: 191,
                308: 8482,
                309: 162,
                310: 163,
                311: 9834,
                312: 224,
                313: 160,
                314: 232,
                315: 226,
                316: 234,
                317: 238,
                318: 244,
                319: 251,
                544: 193,
                545: 201,
                546: 211,
                547: 218,
                548: 220,
                549: 252,
                550: 8216,
                551: 161,
                552: 42,
                553: 39,
                554: 8212,
                555: 169,
                556: 8480,
                557: 8226,
                558: 8220,
                559: 8221,
                560: 192,
                561: 194,
                562: 199,
                563: 200,
                564: 202,
                565: 203,
                566: 235,
                567: 206,
                568: 207,
                569: 239,
                570: 212,
                571: 217,
                572: 249,
                573: 219,
                574: 171,
                575: 187,
                800: 195,
                801: 227,
                802: 205,
                803: 204,
                804: 236,
                805: 210,
                806: 242,
                807: 213,
                808: 245,
                809: 123,
                810: 125,
                811: 92,
                812: 94,
                813: 95,
                814: 124,
                815: 126,
                816: 196,
                817: 228,
                818: 214,
                819: 246,
                820: 223,
                821: 165,
                822: 164,
                823: 9474,
                824: 197,
                825: 229,
                826: 216,
                827: 248,
                828: 9484,
                829: 9488,
                830: 9492,
                831: 9496
            }), je = 14, qe = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
            g = function (e, t) {
                g.prototype.init.call(this), this.field_ = e || 0, this.dataChannel_ = t || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (e) {
                    var t, i, s, r, n = 32639 & e.ccData;
                    n === this.lastControlCode_ ? this.lastControlCode_ = null : (4096 == (61440 & n) ? this.lastControlCode_ = n : n !== this.PADDING_ && (this.lastControlCode_ = null), t = n >>> 8, i = 255 & n, n !== this.PADDING_ && (n === this.RESUME_CAPTION_LOADING_ ? this.mode_ = "popOn" : n === this.END_OF_CAPTION_ ? (this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), r = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = r, this.startPts_ = e.pts) : n === this.ROLL_UP_2_ROWS_ ? (this.rollUpRows_ = 2, this.setRollUp(e.pts)) : n === this.ROLL_UP_3_ROWS_ ? (this.rollUpRows_ = 3, this.setRollUp(e.pts)) : n === this.ROLL_UP_4_ROWS_ ? (this.rollUpRows_ = 4, this.setRollUp(e.pts)) : n === this.CARRIAGE_RETURN_ ? (this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts) : n === this.BACKSPACE_ ? "popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1) : n === this.ERASE_DISPLAYED_MEMORY_ ? (this.flushDisplayed(e.pts), this.displayed_ = h()) : n === this.ERASE_NON_DISPLAYED_MEMORY_ ? this.nonDisplayed_ = h() : n === this.RESUME_DIRECT_CAPTIONING_ ? ("paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = h()), this.mode_ = "paintOn", this.startPts_ = e.pts) : this.isSpecialCharacter(t, i) ? (s = we((t = (3 & t) << 8) | i), this[this.mode_](e.pts, s), this.column_++) : this.isExtCharacter(t, i) ? ("popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1), s = we((t = (3 & t) << 8) | i), this[this.mode_](e.pts, s), this.column_++) : this.isMidRowCode(t, i) ? (this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & i) && this.addFormatting(e.pts, ["i"]), 1 == (1 & i) && this.addFormatting(e.pts, ["u"])) : this.isOffsetControlCode(t, i) ? (this.nonDisplayed_[this.row_].offset = r = 3 & i, this.column_ += r) : this.isPAC(t, i) ? (r = qe.indexOf(7968 & n), "rollUp" === this.mode_ && (r - this.rollUpRows_ + 1 < 0 && (r = this.rollUpRows_ - 1), this.setRollUp(e.pts, r)), r !== this.row_ && (this.clearFormatting(e.pts), this.row_ = r), 1 & i && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & n) && (this.column_ = 4 * (r = (14 & n) >> 1), this.nonDisplayed_[this.row_].indent += r), this.isColorPAC(i) && 14 == (14 & i) && this.addFormatting(e.pts, ["i"])) : this.isNormalChar(t) && (0 === i && (i = null), s = we(t), s += we(i), this[this.mode_](e.pts, s), this.column_ += s.length)))
                }
            }, p = (g.prototype = new p, g.prototype.flushDisplayed = function (e) {
                const i = e => {
                    this.trigger("log", {level: "warn", message: "Skipping a malformed 608 caption at index " + e + "."})
                }, s = [];
                this.displayed_.forEach((e, t) => {
                    if (e && e.text && e.text.length) {
                        try {
                            e.text = e.text.trim()
                        } catch (e) {
                            i(t)
                        }
                        e.text.length && s.push({
                            text: e.text,
                            line: t + 1,
                            position: 10 + Math.min(70, 10 * e.indent) + 2.5 * e.offset
                        })
                    } else null == e && i(t)
                }), s.length && this.trigger("data", {startPts: this.startPts_, endPts: e, content: s, stream: this.name_})
            }, g.prototype.reset = function () {
                this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = h(), this.nonDisplayed_ = h(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = je, this.rollUpRows_ = 2, this.formatting_ = []
            }, g.prototype.setConstants = function () {
                0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
            }, g.prototype.isSpecialCharacter = function (e, t) {
                return e === this.EXT_ && 48 <= t && t <= 63
            }, g.prototype.isExtCharacter = function (e, t) {
                return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
            }, g.prototype.isMidRowCode = function (e, t) {
                return e === this.EXT_ && 32 <= t && t <= 47
            }, g.prototype.isOffsetControlCode = function (e, t) {
                return e === this.OFFSET_ && 33 <= t && t <= 35
            }, g.prototype.isPAC = function (e, t) {
                return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
            }, g.prototype.isColorPAC = function (e) {
                return 64 <= e && e <= 79 || 96 <= e && e <= 127
            }, g.prototype.isNormalChar = function (e) {
                return 32 <= e && e <= 127
            }, g.prototype.setRollUp = function (e, t) {
                if ("rollUp" !== this.mode_ && (this.row_ = je, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = h(), this.displayed_ = h()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++) this.displayed_[t - i] = this.displayed_[this.row_ - i], this.displayed_[this.row_ - i] = {
                    text: "",
                    indent: 0,
                    offset: 0
                };
                void 0 === t && (t = this.row_), this.topRow_ = t - this.rollUpRows_ + 1
            }, g.prototype.addFormatting = function (e, t) {
                this.formatting_ = this.formatting_.concat(t);
                t = t.reduce(function (e, t) {
                    return e + "<" + t + ">"
                }, "");
                this[this.mode_](e, t)
            }, g.prototype.clearFormatting = function (e) {
                var t;
                this.formatting_.length && (t = this.formatting_.reverse().reduce(function (e, t) {
                    return e + "</" + t + ">"
                }, ""), this.formatting_ = [], this[this.mode_](e, t))
            }, g.prototype.popOn = function (e, t) {
                var i = this.nonDisplayed_[this.row_].text;
                this.nonDisplayed_[this.row_].text = i += t
            }, g.prototype.rollUp = function (e, t) {
                var i = this.displayed_[this.row_].text;
                this.displayed_[this.row_].text = i += t
            }, g.prototype.shiftRowsUp_ = function () {
                for (var e = 0; e < this.topRow_; e++) this.displayed_[e] = {text: "", indent: 0, offset: 0};
                for (e = this.row_ + 1; e < je + 1; e++) this.displayed_[e] = {text: "", indent: 0, offset: 0};
                for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
                this.displayed_[this.row_] = {text: "", indent: 0, offset: 0}
            }, g.prototype.paintOn = function (e, t) {
                var i = this.displayed_[this.row_].text;
                this.displayed_[this.row_].text = i += t
            }, {CaptionStream: a, Cea608Stream: g, Cea708Stream: m}),
            He = {H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21}, Ve = i, ze = 8589934592,
            $e = 4294967296;
        Ee.prototype = new Ve;

        function We(e, t, i) {
            for (var s = "", r = t; r < i; r++) s += "%" + ("00" + e[r].toString(16)).slice(-2);
            return s
        }

        function f(e, t, i) {
            return decodeURIComponent(We(e, t, i))
        }

        function y(e, t, i) {
            return unescape(We(e, t, i))
        }

        function _(e) {
            return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
        }

        var Ge, Xe, Ke, Ve = Ee, Ye = Se, Qe = (e, t, i) => {
            if (e) for (var s = i; s < e.length; s++) if (e[s] === t) return s;
            return -1
        }, Je = 3, v = {
            APIC: function (e) {
                var t, i = 1;
                e.data[0] !== Je || (t = Qe(e.data, 0, 1)) < 0 || (e.mimeType = y(e.data, 1, t), e.pictureType = e.data[i = t + 1], (t = Qe(e.data, 0, ++i)) < 0) || (e.description = f(e.data, i, t), i = t + 1, "--\x3e" === e.mimeType ? e.url = y(e.data, i, e.data.length) : e.pictureData = e.data.subarray(i, e.data.length))
            }, "T*": function (e) {
                e.data[0] === Je && (e.value = f(e.data, 1, e.data.length).replace(/\0*$/, ""), e.values = e.value.split("\0"))
            }, TXXX: function (e) {
                var t;
                e.data[0] === Je && -1 !== (t = Qe(e.data, 0, 1)) && (e.description = f(e.data, 1, t), e.value = f(e.data, t + 1, e.data.length).replace(/\0*$/, ""), e.data = e.value)
            }, "W*": function (e) {
                e.url = y(e.data, 0, e.data.length).replace(/\0.*$/, "")
            }, WXXX: function (e) {
                var t;
                e.data[0] === Je && -1 !== (t = Qe(e.data, 0, 1)) && (e.description = f(e.data, 1, t), e.url = y(e.data, t + 1, e.data.length).replace(/\0.*$/, ""))
            }, PRIV: function (e) {
                for (var t = 0; t < e.data.length; t++) if (0 === e.data[t]) {
                    e.owner = y(e.data, 0, t);
                    break
                }
                e.privateData = e.data.subarray(t + 1), e.data = e.privateData
            }
        }, Ze = {
            parseId3Frames: function (e) {
                var t, i = 10, s = 0, r = [];
                if (!(e.length < 10 || e[0] !== "I".charCodeAt(0) || e[1] !== "D".charCodeAt(0) || e[2] !== "3".charCodeAt(0))) {
                    s = _(e.subarray(6, 10));
                    s += 10, 64 & e[5] && (i = (i += 4) + _(e.subarray(10, 14)), s -= _(e.subarray(16, 20)));
                    do {
                        if ((t = _(e.subarray(i + 4, i + 8))) < 1) break;
                        var n = {
                            id: String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3]),
                            data: e.subarray(i + 10, i + t + 10)
                        }
                    } while (n.key = n.id, v[n.id] ? v[n.id](n) : "T" === n.id[0] ? v["T*"](n) : "W" === n.id[0] && v["W*"](n), r.push(n), (i = i + 10 + t) < s);
                    return r
                }
            }, parseSyncSafeInteger: _, frameParsers: v
        }, b = i, et = He, T = Ze, tt = function (e) {
            var t, i = {descriptor: e && e.descriptor}, l = 0, d = [], h = 0;
            if (tt.prototype.init.call(this), this.dispatchType = et.METADATA_STREAM_TYPE.toString(16), i.descriptor) for (t = 0; t < i.descriptor.length; t++) this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
            this.push = function (e) {
                var t, i, s, r, n, a, o;
                if ("timed-metadata" === e.type) if (e.dataAlignmentIndicator && (h = 0, d.length = 0), 0 === d.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) this.trigger("log", {
                    level: "warn",
                    message: "Skipping unrecognized metadata packet"
                }); else if (d.push(e), h += e.data.byteLength, 1 === d.length && (l = T.parseSyncSafeInteger(e.data.subarray(6, 10)), l += 10), !(h < l)) {
                    for (t = {
                        data: new Uint8Array(l),
                        frames: [],
                        pts: d[0].pts,
                        dts: d[0].dts
                    }, r = 0; r < l;) t.data.set(d[0].data.subarray(0, l - r), r), r += d[0].data.byteLength, h -= d[0].data.byteLength, d.shift();
                    i = 10, 64 & t.data[5] && (i = (i += 4) + T.parseSyncSafeInteger(t.data.subarray(10, 14)), l -= T.parseSyncSafeInteger(t.data.subarray(16, 20)));
                    do {
                        if ((s = T.parseSyncSafeInteger(t.data.subarray(i + 4, i + 8))) < 1) {
                            this.trigger("log", {
                                level: "warn",
                                message: "Malformed ID3 frame encountered. Skipping remaining metadata parsing."
                            });
                            break
                        }
                    } while ((o = {
                        id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                        data: t.data.subarray(i + 10, i + s + 10)
                    }).key = o.id, T.frameParsers[o.id] ? T.frameParsers[o.id](o) : "T" === o.id[0] ? T.frameParsers["T*"](o) : "W" === o.id[0] && T.frameParsers["W*"](o), "com.apple.streaming.transportStreamTimestamp" === o.owner && (a = (1 & (n = o.data)[3]) << 30 | n[4] << 22 | n[5] << 14 | n[6] << 6 | n[7] >>> 2, a = (a *= 4) + (3 & n[7]), o.timeStamp = a, void 0 === t.pts && void 0 === t.dts && (t.pts = o.timeStamp, t.dts = o.timeStamp), this.trigger("timestamp", o)), t.frames.push(o), (i = i + 10 + s) < l);
                    this.trigger("data", t)
                }
            }
        }, b = (tt.prototype = new b, tt), w = i, it = p, S = He, st = function () {
            var r = new Uint8Array(188), n = 0;
            st.prototype.init.call(this), this.push = function (e) {
                var t, i = 0, s = 188;
                for (n ? ((t = new Uint8Array(e.byteLength + n)).set(r.subarray(0, n)), t.set(e, n), n = 0) : t = e; s < t.byteLength;) 71 === t[i] && 71 === t[s] ? (this.trigger("data", t.subarray(i, s)), i += 188, s += 188) : (i++, s++);
                i < t.byteLength && (r.set(t.subarray(i), 0), n = t.byteLength - i)
            }, this.flush = function () {
                188 === n && 71 === r[0] && (this.trigger("data", r), n = 0), this.trigger("done")
            }, this.endTimeline = function () {
                this.flush(), this.trigger("endedtimeline")
            }, this.reset = function () {
                n = 0, this.trigger("reset")
            }
        }, rt = (st.prototype = new w, (Ge = function () {
            var s, r, n, a;
            Ge.prototype.init.call(this), (a = this).packetsWaitingForPmt = [], this.programMapTable = void 0, s = function (e, t) {
                var i = 0;
                t.payloadUnitStartIndicator && (i += e[i] + 1), ("pat" === t.type ? r : n)(e.subarray(i), t)
            }, r = function (e, t) {
                t.section_number = e[7], t.last_section_number = e[8], a.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = a.pmtPid
            }, n = function (e, t) {
                var i, s;
                if (1 & e[5]) {
                    for (a.programMapTable = {
                        video: null,
                        audio: null,
                        "timed-metadata": {}
                    }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, s = 12 + ((15 & e[10]) << 8 | e[11]); s < i;) {
                        var r = e[s], n = (31 & e[s + 1]) << 8 | e[s + 2];
                        r === S.H264_STREAM_TYPE && null === a.programMapTable.video ? a.programMapTable.video = n : r === S.ADTS_STREAM_TYPE && null === a.programMapTable.audio ? a.programMapTable.audio = n : r === S.METADATA_STREAM_TYPE && (a.programMapTable["timed-metadata"][n] = r), s += 5 + ((15 & e[s + 3]) << 8 | e[s + 4])
                    }
                    t.programMapTable = a.programMapTable
                }
            }, this.push = function (e) {
                var t = {}, i = 4;
                if (t.payloadUnitStartIndicator = !!(64 & e[1]), t.pid = 31 & e[1], t.pid <<= 8, t.pid |= e[2], 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid) t.type = "pat", s(e.subarray(i), t), this.trigger("data", t); else if (t.pid === this.pmtPid) for (t.type = "pmt", s(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t)
            }, this.processPes_ = function (e, t, i) {
                i.pid === this.programMapTable.video ? i.streamType = S.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = S.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
            }
        }).prototype = new w, Ge.STREAM_TYPES = {h264: 27, adts: 15}, (Xe = function () {
            function s(e, t, i) {
                var s, r = new Uint8Array(e.size), n = {type: t}, a = 0, o = 0;
                if (e.data.length && !(e.size < 9)) {
                    for (n.trackId = e.data[0].pid, a = 0; a < e.data.length; a++) s = e.data[a], r.set(s.data, o), o += s.data.byteLength;
                    d(r, n), t = "video" === t || n.packetLength <= e.size, (i || t) && (e.size = 0, e.data.length = 0), t && l.trigger("data", n)
                }
            }

            var t, l = this, r = !1, n = {data: [], size: 0}, a = {data: [], size: 0}, o = {data: [], size: 0},
                d = function (e, t) {
                    var i = e[0] << 16 | e[1] << 8 | e[2];
                    t.data = new Uint8Array, 1 == i && (t.packetLength = 6 + (e[4] << 8 | e[5]), t.dataAlignmentIndicator = 0 != (4 & e[6]), 192 & (i = e[7]) && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i) && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, t.dts *= 4, t.dts += (6 & e[18]) >>> 1), t.data = e.subarray(9 + e[8]))
                };
            Xe.prototype.init.call(this), this.push = function (i) {
                ({
                    pat: function () {
                    }, pes: function () {
                        var e, t;
                        switch (i.streamType) {
                            case S.H264_STREAM_TYPE:
                                e = n, t = "video";
                                break;
                            case S.ADTS_STREAM_TYPE:
                                e = a, t = "audio";
                                break;
                            case S.METADATA_STREAM_TYPE:
                                e = o, t = "timed-metadata";
                                break;
                            default:
                                return
                        }
                        i.payloadUnitStartIndicator && s(e, t, !0), e.data.push(i), e.size += i.data.byteLength
                    }, pmt: function () {
                        var e = {type: "metadata", tracks: []};
                        null !== (t = i.programMapTable).video && e.tracks.push({
                            timelineStartInfo: {baseMediaDecodeTime: 0},
                            id: +t.video,
                            codec: "avc",
                            type: "video"
                        }), null !== t.audio && e.tracks.push({
                            timelineStartInfo: {baseMediaDecodeTime: 0},
                            id: +t.audio,
                            codec: "adts",
                            type: "audio"
                        }), r = !0, l.trigger("data", e)
                    }
                })[i.type]()
            }, this.reset = function () {
                n.size = 0, n.data.length = 0, a.size = 0, a.data.length = 0, this.trigger("reset")
            }, this.flushStreams_ = function () {
                s(n, "video"), s(a, "audio"), s(o, "timed-metadata")
            }, this.flush = function () {
                var e;
                !r && t && (e = {
                    type: "metadata",
                    tracks: []
                }, null !== t.video && e.tracks.push({
                    timelineStartInfo: {baseMediaDecodeTime: 0},
                    id: +t.video,
                    codec: "avc",
                    type: "video"
                }), null !== t.audio && e.tracks.push({
                    timelineStartInfo: {baseMediaDecodeTime: 0},
                    id: +t.audio,
                    codec: "adts",
                    type: "audio"
                }), l.trigger("data", e)), r = !1, this.flushStreams_(), this.trigger("done")
            }
        }).prototype = new w, {
            PAT_PID: 0,
            MP2T_PACKET_LENGTH: 188,
            TransportPacketStream: st,
            TransportParseStream: Ge,
            ElementaryStream: Xe,
            TimestampRolloverStream: Ve,
            CaptionStream: it.CaptionStream,
            Cea608Stream: it.Cea608Stream,
            Cea708Stream: it.Cea708Stream,
            MetadataStream: b
        });
        for (Ke in S) S.hasOwnProperty(Ke) && (rt[Ke] = S[Ke]);
        var nt, at, w = rt, Ve = i, ot = c.ONE_SECOND_IN_TS,
            lt = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], dt = function (l) {
                var d, h = 0;
                dt.prototype.init.call(this), this.skipWarn_ = function (e, t) {
                    this.trigger("log", {
                        level: "warn",
                        message: `adts skiping bytes ${e} to ${t} in frame ${h} outside syncword`
                    })
                }, this.push = function (e) {
                    var t, i, s, r, n, a, o = 0;
                    if (l || (h = 0), "audio" === e.type) {
                        for (d && d.length ? (s = d, (d = new Uint8Array(s.byteLength + e.data.byteLength)).set(s), d.set(e.data, s.byteLength)) : d = e.data; o + 7 < d.length;) if (255 !== d[o] || 240 != (246 & d[o + 1])) "number" != typeof a && (a = o), o++; else {
                            if ("number" == typeof a && (this.skipWarn_(a, o), a = null), i = 2 * (1 & ~d[o + 1]), t = (3 & d[o + 3]) << 11 | d[o + 4] << 3 | (224 & d[o + 5]) >> 5, n = (r = 1024 * (1 + (3 & d[o + 6]))) * ot / lt[(60 & d[o + 2]) >>> 2], d.byteLength - o < t) break;
                            this.trigger("data", {
                                pts: e.pts + h * n,
                                dts: e.dts + h * n,
                                sampleCount: r,
                                audioobjecttype: 1 + (d[o + 2] >>> 6 & 3),
                                channelcount: (1 & d[o + 2]) << 2 | (192 & d[o + 3]) >>> 6,
                                samplerate: lt[(60 & d[o + 2]) >>> 2],
                                samplingfrequencyindex: (60 & d[o + 2]) >>> 2,
                                samplesize: 16,
                                data: d.subarray(o + 7 + i, o + t)
                            }), h++, o += t
                        }
                        "number" == typeof a && (this.skipWarn_(a, o), a = null), d = d.subarray(o)
                    }
                }, this.flush = function () {
                    h = 0, this.trigger("done")
                }, this.reset = function () {
                    d = void 0, this.trigger("reset")
                }, this.endTimeline = function () {
                    d = void 0, this.trigger("endedtimeline")
                }
            }, it = (dt.prototype = new Ve, dt), b = i, ht = function (s) {
                var r = s.byteLength, n = 0, a = 0;
                this.length = function () {
                    return 8 * r
                }, this.bitsAvailable = function () {
                    return 8 * r + a
                }, this.loadWord = function () {
                    var e = s.byteLength - r, t = new Uint8Array(4), i = Math.min(4, r);
                    if (0 === i) throw new Error("no bytes available");
                    t.set(s.subarray(e, e + i)), n = new DataView(t.buffer).getUint32(0), a = 8 * i, r -= i
                }, this.skipBits = function (e) {
                    var t;
                    e < a || (e = (e -= a) - 8 * (t = Math.floor(e / 8)), r -= t, this.loadWord()), n <<= e, a -= e
                }, this.readBits = function (e) {
                    var t = Math.min(a, e), i = n >>> 32 - t;
                    return 0 < (a -= t) ? n <<= t : 0 < r && this.loadWord(), 0 < (t = e - t) ? i << t | this.readBits(t) : i
                }, this.skipLeadingZeros = function () {
                    for (var e = 0; e < a; ++e) if (0 != (n & 2147483648 >>> e)) return n <<= e, a -= e, e;
                    return this.loadWord(), e + this.skipLeadingZeros()
                }, this.skipUnsignedExpGolomb = function () {
                    this.skipBits(1 + this.skipLeadingZeros())
                }, this.skipExpGolomb = function () {
                    this.skipBits(1 + this.skipLeadingZeros())
                }, this.readUnsignedExpGolomb = function () {
                    var e = this.skipLeadingZeros();
                    return this.readBits(e + 1) - 1
                }, this.readExpGolomb = function () {
                    var e = this.readUnsignedExpGolomb();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }, this.readBoolean = function () {
                    return 1 === this.readBits(1)
                }, this.readUnsignedByte = function () {
                    return this.readBits(8)
                }, this.loadWord()
            }, ut = function () {
                var s, r, n = 0;
                ut.prototype.init.call(this), this.push = function (e) {
                    for (var t, i = (r = r ? ((t = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), t.set(e.data, r.byteLength), t) : e.data).byteLength; n < i - 3; n++) if (1 === r[n + 2]) {
                        s = n + 5;
                        break
                    }
                    for (; s < i;) switch (r[s]) {
                        case 0:
                            if (0 !== r[s - 1]) s += 2; else if (0 !== r[s - 2]) s++; else {
                                for (n + 3 !== s - 2 && this.trigger("data", r.subarray(n + 3, s - 2)); 1 !== r[++s] && s < i;) ;
                                n = s - 2, s += 3
                            }
                            break;
                        case 1:
                            0 !== r[s - 1] || 0 !== r[s - 2] ? s += 3 : (this.trigger("data", r.subarray(n + 3, s - 2)), n = s - 2, s += 3);
                            break;
                        default:
                            s += 3
                    }
                    r = r.subarray(n), s -= n, n = 0
                }, this.reset = function () {
                    r = null, n = 0, this.trigger("reset")
                }, this.flush = function () {
                    r && 3 < r.byteLength && this.trigger("data", r.subarray(n + 3)), r = null, n = 0, this.trigger("done")
                }, this.endTimeline = function () {
                    this.flush(), this.trigger("endedtimeline")
                }
            };
        ut.prototype = new b, at = {
            100: !0,
            110: !0,
            122: !0,
            244: !0,
            44: !0,
            83: !0,
            86: !0,
            118: !0,
            128: !0,
            138: !0,
            139: !0,
            134: !0
        }, (nt = function () {
            var i, s, r, n, a, o, g, t = new ut;
            nt.prototype.init.call(this), (i = this).push = function (e) {
                "video" === e.type && (s = e.trackId, r = e.pts, n = e.dts, t.push(e))
            }, t.on("data", function (e) {
                var t = {trackId: s, pts: r, dts: n, data: e, nalUnitTypeCode: 31 & e[0]};
                switch (t.nalUnitTypeCode) {
                    case 5:
                        t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                        break;
                    case 6:
                        t.nalUnitType = "sei_rbsp", t.escapedRBSP = a(e.subarray(1));
                        break;
                    case 7:
                        t.nalUnitType = "seq_parameter_set_rbsp", t.escapedRBSP = a(e.subarray(1)), t.config = o(t.escapedRBSP);
                        break;
                    case 8:
                        t.nalUnitType = "pic_parameter_set_rbsp";
                        break;
                    case 9:
                        t.nalUnitType = "access_unit_delimiter_rbsp"
                }
                i.trigger("data", t)
            }), t.on("done", function () {
                i.trigger("done")
            }), t.on("partialdone", function () {
                i.trigger("partialdone")
            }), t.on("reset", function () {
                i.trigger("reset")
            }), t.on("endedtimeline", function () {
                i.trigger("endedtimeline")
            }), this.flush = function () {
                t.flush()
            }, this.partialFlush = function () {
                t.partialFlush()
            }, this.reset = function () {
                t.reset()
            }, this.endTimeline = function () {
                t.endTimeline()
            }, g = function (e, t) {
                for (var i = 8, s = 8, r = 0; r < e; r++) i = 0 === (s = 0 !== s ? (i + t.readExpGolomb() + 256) % 256 : s) ? i : s
            }, a = function (e) {
                for (var t = e.byteLength, i = [], s = 1; s < t - 2;) 0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (i.push(s + 2), s += 2) : s++;
                if (0 === i.length) return e;
                for (var r = t - i.length, n = new Uint8Array(r), a = 0, s = 0; s < r; a++, s++) a === i[0] && (a++, i.shift()), n[s] = e[a];
                return n
            }, o = function (e) {
                var t, i, s, r, n, a, o = 0, l = 0, d = 0, h = 0, u = [1, 1], c = new ht(e), e = c.readUnsignedByte(),
                    p = c.readUnsignedByte(), m = c.readUnsignedByte();
                if (c.skipUnsignedExpGolomb(), at[e] && (3 === (i = c.readUnsignedExpGolomb()) && c.skipBits(1), c.skipUnsignedExpGolomb(), c.skipUnsignedExpGolomb(), c.skipBits(1), c.readBoolean())) for (n = 3 !== i ? 8 : 12, a = 0; a < n; a++) c.readBoolean() && g(a < 6 ? 16 : 64, c);
                if (c.skipUnsignedExpGolomb(), 0 === (i = c.readUnsignedExpGolomb())) c.readUnsignedExpGolomb(); else if (1 === i) for (c.skipBits(1), c.skipExpGolomb(), c.skipExpGolomb(), t = c.readUnsignedExpGolomb(), a = 0; a < t; a++) c.skipExpGolomb();
                if (c.skipUnsignedExpGolomb(), c.skipBits(1), i = c.readUnsignedExpGolomb(), s = c.readUnsignedExpGolomb(), 0 === (r = c.readBits(1)) && c.skipBits(1), c.skipBits(1), c.readBoolean() && (o = c.readUnsignedExpGolomb(), l = c.readUnsignedExpGolomb(), d = c.readUnsignedExpGolomb(), h = c.readUnsignedExpGolomb()), c.readBoolean() && c.readBoolean()) {
                    switch (c.readUnsignedByte()) {
                        case 1:
                            u = [1, 1];
                            break;
                        case 2:
                            u = [12, 11];
                            break;
                        case 3:
                            u = [10, 11];
                            break;
                        case 4:
                            u = [16, 11];
                            break;
                        case 5:
                            u = [40, 33];
                            break;
                        case 6:
                            u = [24, 11];
                            break;
                        case 7:
                            u = [20, 11];
                            break;
                        case 8:
                            u = [32, 11];
                            break;
                        case 9:
                            u = [80, 33];
                            break;
                        case 10:
                            u = [18, 11];
                            break;
                        case 11:
                            u = [15, 11];
                            break;
                        case 12:
                            u = [64, 33];
                            break;
                        case 13:
                            u = [160, 99];
                            break;
                        case 14:
                            u = [4, 3];
                            break;
                        case 15:
                            u = [3, 2];
                            break;
                        case 16:
                            u = [2, 1];
                            break;
                        case 255:
                            u = [c.readUnsignedByte() << 8 | c.readUnsignedByte(), c.readUnsignedByte() << 8 | c.readUnsignedByte()]
                    }
                    u && (u[0], u[1])
                }
                return {
                    profileIdc: e,
                    levelIdc: m,
                    profileCompatibility: p,
                    width: 16 * (i + 1) - 2 * o - 2 * l,
                    height: (2 - r) * (s + 1) * 16 - 2 * d - 2 * h,
                    sarRatio: u
                }
            }
        }).prototype = new b;

        function ct(e) {
            return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
        }

        var Ve = nt, pt = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350],
            mt = function (e, t) {
                var i = 0 <= (i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9]) ? i : 0;
                return (16 & e[t + 5]) >> 4 ? 20 + i : 10 + i
            }, gt = function (e, t) {
                return e.length - t < 10 || e[t] !== "I".charCodeAt(0) || e[t + 1] !== "D".charCodeAt(0) || e[t + 2] !== "3".charCodeAt(0) ? t : (t += mt(e, t), gt(e, t))
            }, ft = function (e, t, i) {
                for (var s = "", r = t; r < i; r++) s += "%" + ("00" + e[r].toString(16)).slice(-2);
                return s
            }, b = {
                isLikelyAacData: function (e) {
                    var t = gt(e, 0);
                    return e.length >= t + 2 && 255 == (255 & e[t]) && 240 == (240 & e[t + 1]) && 16 == (22 & e[t + 1])
                }, parseId3TagSize: mt, parseAdtsSize: function (e, t) {
                    var i = (224 & e[t + 5]) >> 5, s = e[t + 4] << 3;
                    return 6144 & e[t + 3] | s | i
                }, parseType: function (e, t) {
                    return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null
                }, parseSampleRate: function (e) {
                    for (var t = 0; t + 5 < e.length;) {
                        if (255 === e[t] && 240 == (246 & e[t + 1])) return pt[(60 & e[t + 2]) >>> 2];
                        t++
                    }
                    return null
                }, parseAacTimestamp: function (e) {
                    var t, i = 10;
                    64 & e[5] && (i = (i += 4) + ct(e.subarray(10, 14)));
                    do {
                        if ((t = ct(e.subarray(i + 4, i + 8))) < 1) return null;
                        if ("PRIV" === String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3])) for (var s, r, n = e.subarray(i + 10, i + t + 10), a = 0; a < n.byteLength; a++) if (0 === n[a]) {
                            if ("com.apple.streaming.transportStreamTimestamp" === unescape(ft(n, 0, a))) return r = (1 & (s = n.subarray(a + 1))[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2, (r *= 4) + (3 & s[7]);
                            break
                        }
                    } while ((i = i + 10 + t) < e.byteLength);
                    return null
                }
            }, E = i, yt = b, _t = function () {
                var n = new Uint8Array, a = 0;
                _t.prototype.init.call(this), this.setTimestamp = function (e) {
                    a = e
                }, this.push = function (e) {
                    var t, i, s = 0, r = 0;
                    for (n.length ? (i = n.length, (n = new Uint8Array(e.byteLength + i)).set(n.subarray(0, i)), n.set(e, i)) : n = e; 3 <= n.length - r;) if (n[r] === "I".charCodeAt(0) && n[r + 1] === "D".charCodeAt(0) && n[r + 2] === "3".charCodeAt(0)) {
                        if (n.length - r < 10) break;
                        if (r + (s = yt.parseId3TagSize(n, r)) > n.length) break;
                        t = {type: "timed-metadata", data: n.subarray(r, r + s)}, this.trigger("data", t), r += s
                    } else if (255 == (255 & n[r]) && 240 == (240 & n[r + 1])) {
                        if (n.length - r < 7) break;
                        if (r + (s = yt.parseAdtsSize(n, r)) > n.length) break;
                        t = {type: "audio", data: n.subarray(r, r + s), pts: a, dts: a}, this.trigger("data", t), r += s
                    } else r++;
                    i = n.length - r, n = 0 < i ? n.subarray(r) : new Uint8Array
                }, this.reset = function () {
                    n = new Uint8Array, this.trigger("reset")
                }, this.endTimeline = function () {
                    n = new Uint8Array, this.trigger("endedtimeline")
                }
            };
        _t.prototype = new E;

        function vt(e, t) {
            for (var i = Object.keys(t), s = 0; s < i.length; s++) {
                var r = i[s];
                "headOfPipeline" !== r && t[r].on && t[r].on("log", Ot.bind(e, r))
            }
        }

        function bt(e, t) {
            var i;
            if (e.length === t.length) {
                for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return;
                return 1
            }
        }

        function Tt(e, t, i, s, r, n) {
            return {
                start: {dts: e, pts: e + (i - t)},
                end: {dts: e + (s - t), pts: e + (r - i)},
                prependedContentDuration: n,
                baseMediaDecodeTime: e
            }
        }

        var wt, St, k, E = i, C = Ce, x = Ie, Et = De, I = Le, A = w, kt = c, Ct = it, xt = Ve, It = _t,
            At = b.isLikelyAacData, Dt = c.ONE_SECOND_IN_TS,
            Lt = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
            Pt = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"],
            Ot = function (e, t) {
                t.stream = e, this.trigger("log", t)
            }, Nt = function (n, a) {
                var o = [], l = 0, d = 0, h = 1 / 0, u = (a = a || {}).firstSequenceNumber || 0;
                Nt.prototype.init.call(this), this.push = function (t) {
                    I.collectDtsInfo(n, t), n && Lt.forEach(function (e) {
                        n[e] = t[e]
                    }), o.push(t)
                }, this.setEarliestDts = function (e) {
                    l = e
                }, this.setVideoBaseMediaDecodeTime = function (e) {
                    h = e
                }, this.setAudioAppendStart = function (e) {
                    d = e
                }, this.flush = function () {
                    var e, t, i, s, r;
                    0 !== o.length && (e = Et.trimAdtsFramesByEarliestDts(o, n, l), n.baseMediaDecodeTime = I.calculateTrackBaseMediaDecodeTime(n, a.keepOriginalTimestamps), r = Et.prefixWithSilence(n, e, d, h), n.samples = Et.generateSampleTable(e), i = C.mdat(Et.concatenateFrameData(e)), o = [], s = C.moof(u, [n]), t = new Uint8Array(s.byteLength + i.byteLength), u++, t.set(s), t.set(i, s.byteLength), I.clearDtsInfo(n), i = Math.ceil(1024 * Dt / n.samplerate), e.length && (s = e.length * i, this.trigger("segmentTimingInfo", Tt(kt.audioTsToVideoTs(n.baseMediaDecodeTime, n.samplerate), e[0].dts, e[0].pts, e[0].dts + s, e[0].pts + s, r || 0)), this.trigger("timingInfo", {
                        start: e[0].pts,
                        end: e[0].pts + s
                    })), this.trigger("data", {track: n, boxes: t})), this.trigger("done", "AudioSegmentStream")
                }, this.reset = function () {
                    I.clearDtsInfo(n), o = [], this.trigger("reset")
                }
            };
        Nt.prototype = new E, (wt = function (a, n) {
            var t, i, o = [], d = [], l = (n = n || {}).firstSequenceNumber || 0;
            wt.prototype.init.call(this), delete a.minPTS, this.gopCache_ = [], this.push = function (e) {
                I.collectDtsInfo(a, e), "seq_parameter_set_rbsp" !== e.nalUnitType || t || (t = e.config, a.sps = [e.data], Pt.forEach(function (e) {
                    a[e] = t[e]
                }, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.data, a.pps = [e.data]), o.push(e)
            }, this.flush = function () {
                for (var e, t, i, s = 0; o.length && "access_unit_delimiter_rbsp" !== o[0].nalUnitType;) o.shift();
                if (0 !== o.length) {
                    if (e = x.groupNalsIntoFrames(o), (e = x.groupFramesIntoGops(e))[0][0].keyFrame || ((r = this.getGopForFusion_(o[0], a)) ? (s = r.duration, e.unshift(r), e.byteLength += r.byteLength, e.nalCount += r.nalCount, e.pts = r.pts, e.dts = r.dts, e.duration += r.duration) : e = x.extendFirstKeyFrame(e)), d.length) {
                        var r = n.alignGopsAtEnd ? this.alignGopsAtEnd_(e) : this.alignGopsAtStart_(e);
                        if (!r) return this.gopCache_.unshift({
                            gop: e.pop(),
                            pps: a.pps,
                            sps: a.sps
                        }), this.gopCache_.length = Math.min(6, this.gopCache_.length), o = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
                        I.clearDtsInfo(a), e = r
                    }
                    I.collectDtsInfo(a, e), a.samples = x.generateSampleTable(e), r = C.mdat(x.concatenateNalData(e)), a.baseMediaDecodeTime = I.calculateTrackBaseMediaDecodeTime(a, n.keepOriginalTimestamps), this.trigger("processedGopsInfo", e.map(function (e) {
                        return {pts: e.pts, dts: e.dts, byteLength: e.byteLength}
                    })), t = e[0], i = e[e.length - 1], this.trigger("segmentTimingInfo", Tt(a.baseMediaDecodeTime, t.dts, t.pts, i.dts + i.duration, i.pts + i.duration, s)), this.trigger("timingInfo", {
                        start: e[0].pts,
                        end: e[e.length - 1].pts + e[e.length - 1].duration
                    }), this.gopCache_.unshift({
                        gop: e.pop(),
                        pps: a.pps,
                        sps: a.sps
                    }), this.gopCache_.length = Math.min(6, this.gopCache_.length), o = [], this.trigger("baseMediaDecodeTime", a.baseMediaDecodeTime), this.trigger("timelineStartInfo", a.timelineStartInfo), t = C.moof(l, [a]), i = new Uint8Array(t.byteLength + r.byteLength), l++, i.set(t), i.set(r, t.byteLength), this.trigger("data", {
                        track: a,
                        boxes: i
                    })
                }
                this.resetStream_(), this.trigger("done", "VideoSegmentStream")
            }, this.reset = function () {
                this.resetStream_(), o = [], this.gopCache_.length = 0, d.length = 0, this.trigger("reset")
            }, this.resetStream_ = function () {
                I.clearDtsInfo(a), i = t = void 0
            }, this.getGopForFusion_ = function (e) {
                for (var t, i, s, r = 1 / 0, n = 0; n < this.gopCache_.length; n++) i = (s = this.gopCache_[n]).gop, a.pps && bt(a.pps[0], s.pps[0]) && a.sps && bt(a.sps[0], s.sps[0]) && (i.dts < a.timelineStartInfo.dts || -1e4 <= (i = e.dts - i.dts - i.duration) && i <= 45e3 && (!t || i < r) && (t = s, r = i));
                return t ? t.gop : null
            }, this.alignGopsAtStart_ = function (e) {
                for (var t, i, s, r, n = e.byteLength, a = e.nalCount, o = e.duration, l = t = 0; l < d.length && t < e.length && (i = d[l], s = e[t], i.pts !== s.pts);) s.pts > i.pts ? l++ : (t++, n -= s.byteLength, a -= s.nalCount, o -= s.duration);
                return 0 === t ? e : t === e.length ? null : ((r = e.slice(t)).byteLength = n, r.duration = o, r.nalCount = a, r.pts = r[0].pts, r.dts = r[0].dts, r)
            }, this.alignGopsAtEnd_ = function (e) {
                for (var t, i, s, r, n = d.length - 1, a = e.length - 1, o = null, l = !1; 0 <= n && 0 <= a;) {
                    if (t = d[n], i = e[a], t.pts === i.pts) {
                        l = !0;
                        break
                    }
                    t.pts > i.pts ? n-- : (n === d.length - 1 && (o = a), a--)
                }
                return l || null !== o ? 0 === (s = l ? a : o) ? e : (r = (s = e.slice(s)).reduce(function (e, t) {
                    return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
                }, {
                    byteLength: 0,
                    duration: 0,
                    nalCount: 0
                }), s.byteLength = r.byteLength, s.duration = r.duration, s.nalCount = r.nalCount, s.pts = s[0].pts, s.dts = s[0].dts, s) : null
            }, this.alignGopsWith = function (e) {
                d = e
            }
        }).prototype = new E, ((k = function (e, t) {
            this.numberOfTracks = 0, this.metadataStream = t, "undefined" != typeof (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, "boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps : this.keepOriginalTimestamps = !1, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, k.prototype.init.call(this), this.push = function (e) {
                return e.content || e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, this.pendingBoxes.push(e.boxes)), void ("audio" === e.track.type && (this.audioTrack = e.track, this.pendingBoxes.unshift(e.boxes))))
            }
        }).prototype = new E).flush = function (e) {
            var t, i, s, r = 0, n = {captions: [], captionStreams: {}, metadata: [], info: {}}, a = 0;
            if (this.pendingTracks.length < this.numberOfTracks) {
                if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
                if (this.remuxTracks) return;
                if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
            }
            if (this.videoTrack ? (a = this.videoTrack.timelineStartInfo.pts, Pt.forEach(function (e) {
                n.info[e] = this.videoTrack[e]
            }, this)) : this.audioTrack && (a = this.audioTrack.timelineStartInfo.pts, Lt.forEach(function (e) {
                n.info[e] = this.audioTrack[e]
            }, this)), this.videoTrack || this.audioTrack) {
                for (1 === this.pendingTracks.length ? n.type = this.pendingTracks[0].type : n.type = "combined", this.emittedTracks += this.pendingTracks.length, e = C.initSegment(this.pendingTracks), n.initSegment = new Uint8Array(e.byteLength), n.initSegment.set(e), n.data = new Uint8Array(this.pendingBytes), s = 0; s < this.pendingBoxes.length; s++) n.data.set(this.pendingBoxes[s], r), r += this.pendingBoxes[s].byteLength;
                for (s = 0; s < this.pendingCaptions.length; s++) (t = this.pendingCaptions[s]).startTime = kt.metadataTsToSeconds(t.startPts, a, this.keepOriginalTimestamps), t.endTime = kt.metadataTsToSeconds(t.endPts, a, this.keepOriginalTimestamps), n.captionStreams[t.stream] = !0, n.captions.push(t);
                for (s = 0; s < this.pendingMetadata.length; s++) (i = this.pendingMetadata[s]).cueTime = kt.metadataTsToSeconds(i.pts, a, this.keepOriginalTimestamps), n.metadata.push(i);
                for (n.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", n), s = 0; s < n.captions.length; s++) t = n.captions[s], this.trigger("caption", t);
                for (s = 0; s < n.metadata.length; s++) i = n.metadata[s], this.trigger("id3Frame", i)
            }
            this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
        }, k.prototype.setRemux = function (e) {
            this.remuxTracks = e
        }, (St = function (s) {
            var r, n, a = this, i = !0;
            St.prototype.init.call(this), s = s || {}, this.baseMediaDecodeTime = s.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
                var t = {};
                (this.transmuxPipeline_ = t).type = "aac", t.metadataStream = new A.MetadataStream, t.aacStream = new It, t.audioTimestampRolloverStream = new A.TimestampRolloverStream("audio"), t.timedMetadataTimestampRolloverStream = new A.TimestampRolloverStream("timed-metadata"), t.adtsStream = new Ct, t.coalesceStream = new k(s, t.metadataStream), t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream), t.metadataStream.on("timestamp", function (e) {
                    t.aacStream.setTimestamp(e.timeStamp)
                }), t.aacStream.on("data", function (e) {
                    "timed-metadata" !== e.type && "audio" !== e.type || t.audioSegmentStream || (n = n || {
                        timelineStartInfo: {baseMediaDecodeTime: a.baseMediaDecodeTime},
                        codec: "adts",
                        type: "audio"
                    }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new Nt(n, s), t.audioSegmentStream.on("log", a.getLogTrigger_("audioSegmentStream")), t.audioSegmentStream.on("timingInfo", a.trigger.bind(a, "audioTimingInfo")), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream), a.trigger("trackinfo", {
                        hasAudio: !!n,
                        hasVideo: !!r
                    }))
                }), t.coalesceStream.on("data", this.trigger.bind(this, "data")), t.coalesceStream.on("done", this.trigger.bind(this, "done")), vt(this, t)
            }, this.setupTsPipeline = function () {
                var i = {};
                (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new A.MetadataStream, i.packetStream = new A.TransportPacketStream, i.parseStream = new A.TransportParseStream, i.elementaryStream = new A.ElementaryStream, i.timestampRolloverStream = new A.TimestampRolloverStream, i.adtsStream = new Ct, i.h264Stream = new xt, i.captionStream = new A.CaptionStream(s), i.coalesceStream = new k(s, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream).pipe(i.timestampRolloverStream), i.timestampRolloverStream.pipe(i.h264Stream), i.timestampRolloverStream.pipe(i.adtsStream), i.timestampRolloverStream.pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function (e) {
                    var t;
                    if ("metadata" === e.type) {
                        for (t = e.tracks.length; t--;) r || "video" !== e.tracks[t].type ? n || "audio" !== e.tracks[t].type || ((n = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = a.baseMediaDecodeTime) : (r = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = a.baseMediaDecodeTime;
                        r && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new wt(r, s), i.videoSegmentStream.on("log", a.getLogTrigger_("videoSegmentStream")), i.videoSegmentStream.on("timelineStartInfo", function (e) {
                            n && !s.keepOriginalTimestamps && (n.timelineStartInfo = e, i.audioSegmentStream.setEarliestDts(e.dts - a.baseMediaDecodeTime))
                        }), i.videoSegmentStream.on("processedGopsInfo", a.trigger.bind(a, "gopInfo")), i.videoSegmentStream.on("segmentTimingInfo", a.trigger.bind(a, "videoSegmentTimingInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function (e) {
                            n && i.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
                        }), i.videoSegmentStream.on("timingInfo", a.trigger.bind(a, "videoTimingInfo")), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), n && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new Nt(n, s), i.audioSegmentStream.on("log", a.getLogTrigger_("audioSegmentStream")), i.audioSegmentStream.on("timingInfo", a.trigger.bind(a, "audioTimingInfo")), i.audioSegmentStream.on("segmentTimingInfo", a.trigger.bind(a, "audioSegmentTimingInfo")), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream)), a.trigger("trackinfo", {
                            hasAudio: !!n,
                            hasVideo: !!r
                        })
                    }
                }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("id3Frame", function (e) {
                    e.dispatchType = i.metadataStream.dispatchType, a.trigger("id3Frame", e)
                }), i.coalesceStream.on("caption", this.trigger.bind(this, "caption")), i.coalesceStream.on("done", this.trigger.bind(this, "done")), vt(this, i)
            }, this.setBaseMediaDecodeTime = function (e) {
                var t = this.transmuxPipeline_;
                s.keepOriginalTimestamps || (this.baseMediaDecodeTime = e), n && (n.timelineStartInfo.dts = void 0, n.timelineStartInfo.pts = void 0, I.clearDtsInfo(n), t.audioTimestampRolloverStream) && t.audioTimestampRolloverStream.discontinuity(), r && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = []), r.timelineStartInfo.dts = void 0, r.timelineStartInfo.pts = void 0, I.clearDtsInfo(r), t.captionStream.reset()), t.timestampRolloverStream && t.timestampRolloverStream.discontinuity()
            }, this.setAudioAppendStart = function (e) {
                n && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
            }, this.setRemux = function (e) {
                var t = this.transmuxPipeline_;
                s.remux = e, t && t.coalesceStream && t.coalesceStream.setRemux(e)
            }, this.alignGopsWith = function (e) {
                r && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
            }, this.getLogTrigger_ = function (t) {
                var i = this;
                return function (e) {
                    e.stream = t, i.trigger("log", e)
                }
            }, this.push = function (e) {
                var t;
                i && ((t = At(e)) && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1), this.transmuxPipeline_.headOfPipeline.push(e)
            }, this.flush = function () {
                i = !0, this.transmuxPipeline_.headOfPipeline.flush()
            }, this.endTimeline = function () {
                this.transmuxPipeline_.headOfPipeline.endTimeline()
            }, this.reset = function () {
                this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
            }, this.resetCaptions = function () {
                this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
            }
        }).prototype = new E;

        function Rt(e) {
            var t = "";
            return (t += String.fromCharCode(e[0])) + String.fromCharCode(e[1]) + String.fromCharCode(e[2]) + String.fromCharCode(e[3])
        }

        function Mt(e, t) {
            var i, s, r, n = [];
            if (!t.length) return null;
            for (i = 0; i < e.byteLength;) s = $t(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), r = Wt(e.subarray(i + 4, i + 8)), s = 1 < s ? i + s : e.byteLength, r === t[0] && (1 === t.length ? n.push(e.subarray(i + 8, s)) : (r = Mt(e.subarray(i + 8, s), t.slice(1))).length && (n = n.concat(r))), i = s;
            return n
        }

        function Ut(e) {
            var t = {version: e[0], flags: new Uint8Array(e.subarray(1, 4))};
            return t.baseMediaDecodeTime = 1 === t.version ? Xt(e.subarray(4)) : Gt(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), t
        }

        function Bt(e) {
            var t, i = {version: e[0], flags: new Uint8Array(e.subarray(1, 4)), samples: []},
                s = new DataView(e.buffer, e.byteOffset, e.byteLength), r = 1 & i.flags[2], n = 4 & i.flags[2],
                a = 1 & i.flags[1], o = 2 & i.flags[1], l = 4 & i.flags[1], d = 8 & i.flags[1], h = s.getUint32(4),
                u = 8;
            for (r && (i.dataOffset = s.getInt32(u), u += 4), n && h && (t = {flags: Kt(e.subarray(u, u + 4))}, u += 4, a && (t.duration = s.getUint32(u), u += 4), o && (t.size = s.getUint32(u), u += 4), d && (t.compositionTimeOffset = 1 === i.version ? s.getInt32(u) : s.getUint32(u), u += 4), i.samples.push(t), h--); h--;) t = {}, a && (t.duration = s.getUint32(u), u += 4), o && (t.size = s.getUint32(u), u += 4), l && (t.flags = Kt(e.subarray(u, u + 4)), u += 4), d && (t.compositionTimeOffset = 1 === i.version ? s.getInt32(u) : s.getUint32(u), u += 4), i.samples.push(t);
            return i
        }

        function Ft(e) {
            var t = new DataView(e.buffer, e.byteOffset, e.byteLength), i = 1 & (e = {
                    version: e[0],
                    flags: new Uint8Array(e.subarray(1, 4)),
                    trackId: t.getUint32(4)
                }).flags[2], s = 2 & e.flags[2], r = 8 & e.flags[2], n = 16 & e.flags[2], a = 32 & e.flags[2],
                o = 65536 & e.flags[0], l = 131072 & e.flags[0], d = 8;
            return i && (d += 4, e.baseDataOffset = t.getUint32(12), d += 4), s && (e.sampleDescriptionIndex = t.getUint32(d), d += 4), r && (e.defaultSampleDuration = t.getUint32(d), d += 4), n && (e.defaultSampleSize = t.getUint32(d), d += 4), a && (e.defaultSampleFlags = t.getUint32(d)), o && (e.durationIsEmpty = !0), !i && l && (e.baseDataOffsetIsMoof = !0), e
        }

        function jt(e) {
            var t = 31 & e[1];
            return t << 8 | e[2]
        }

        function qt(e) {
            return !!(64 & e[1])
        }

        function Ht(e) {
            var t = 0;
            return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1), t
        }

        function Vt(e) {
            switch (e) {
                case 5:
                    return "slice_layer_without_partitioning_rbsp_idr";
                case 6:
                    return "sei_rbsp";
                case 7:
                    return "seq_parameter_set_rbsp";
                case 8:
                    return "pic_parameter_set_rbsp";
                case 9:
                    return "access_unit_delimiter_rbsp";
                default:
                    return null
            }
        }

        var zt = St, i = function (e) {
                return e >>> 0
            }, De = function (e) {
                return ("00" + e.toString(16)).slice(-2)
            }, $t = i, Wt = Rt, Gt = i, Xt = s.getUint64, Kt = function (e) {
                return {
                    isLeading: (12 & e[0]) >>> 2,
                    dependsOn: 3 & e[0],
                    isDependedOn: (192 & e[1]) >>> 6,
                    hasRedundancy: (48 & e[1]) >>> 4,
                    paddingValue: (14 & e[1]) >>> 1,
                    isNonSyncSample: 1 & e[1],
                    degradationPriority: e[2] << 8 | e[3]
                }
            },
            Le = "undefined" != typeof window ? window : "undefined" != typeof fe ? fe : "undefined" != typeof self ? self : {},
            w = Le, Yt = Oe.discardEmulationPreventionBytes, Qt = p.CaptionStream, D = Mt, Jt = Ut, Zt = Bt, ei = Ft,
            ti = w, ii = function (e, h) {
                var i = D(e, ["moof", "traf"]), e = D(e, ["mdat"]), u = {}, s = [];
                return e.forEach(function (e, t) {
                    t = i[t];
                    s.push({mdat: e, traf: t})
                }), s.forEach(function (e) {
                    var t, i, s, r, n, a = e.mdat, e = e.traf, o = D(e, ["tfhd"]), o = ei(o[0]), l = o.trackId,
                        d = D(e, ["tfdt"]), d = 0 < d.length ? Jt(d[0]).baseMediaDecodeTime : 0, e = D(e, ["trun"]);
                    h === l && 0 < e.length && (t = d, i = o.defaultSampleDuration || 0, s = o.defaultSampleSize || 0, r = o.trackId, n = [], e.forEach(function (e) {
                        e = Zt(e).samples;
                        e.forEach(function (e) {
                            void 0 === e.duration && (e.duration = i), void 0 === e.size && (e.size = s), e.trackId = r, e.dts = t, void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0), "bigint" == typeof t ? (e.pts = t + ti.BigInt(e.compositionTimeOffset), t += ti.BigInt(e.duration)) : (e.pts = t + e.compositionTimeOffset, t += e.duration)
                        }), n = n.concat(e)
                    }), d = function (e, t, i) {
                        for (var s, r, n = new DataView(e.buffer, e.byteOffset, e.byteLength), a = {
                            logs: [],
                            seiNals: []
                        }, o = 0; o + 4 < e.length; o += s) if (s = n.getUint32(o), o += 4, !(s <= 0)) switch (31 & e[o]) {
                            case 6:
                                var l = e.subarray(o + 1, o + 1 + s), d = function (e, t) {
                                    for (var i = e, s = 0; s < t.length; s++) {
                                        var r = t[s];
                                        if (i < r.size) return r;
                                        i -= r.size
                                    }
                                    return null
                                }(o, t), l = {nalUnitType: "sei_rbsp", size: s, data: l, escapedRBSP: Yt(l), trackId: i};
                                if (d) l.pts = d.pts, l.dts = d.dts, r = d; else {
                                    if (!r) {
                                        a.logs.push({
                                            level: "warn",
                                            message: "We've encountered a nal unit without data at " + o + " for trackId " + i + ". See mux.js#223."
                                        });
                                        break
                                    }
                                    l.pts = r.pts, l.dts = r.dts
                                }
                                a.seiNals.push(l)
                        }
                        return a
                    }(a, n, l), u[l] || (u[l] = {
                        seiNals: [],
                        logs: []
                    }), u[l].seiNals = u[l].seiNals.concat(d.seiNals), u[l].logs = u[l].logs.concat(d.logs))
                }), u
            }, si = function () {
                var t, a, o, l, d, i, s = !1;
                this.isInitialized = function () {
                    return s
                }, this.init = function (e) {
                    t = new Qt, s = !0, i = !!e && e.isPartial, t.on("data", function (e) {
                        e.startTime = e.startPts / l, e.endTime = e.endPts / l, d.captions.push(e), d.captionStreams[e.stream] = !0
                    }), t.on("log", function (e) {
                        d.logs.push(e)
                    })
                }, this.isNewInit = function (e, t) {
                    return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length || o === e[0] && l === t[o])
                }, this.parse = function (e, t, i) {
                    var s, r;
                    if (!this.isInitialized()) return null;
                    if (!t || !i) return null;
                    if (this.isNewInit(t, i)) o = t[0], l = i[o]; else if (null === o || !l) return a.push(e), null;
                    for (; 0 < a.length;) {
                        var n = a.shift();
                        this.parse(n, t, i)
                    }
                    return e = e, r = l, (s = null === (s = o) ? null : {
                        seiNals: (e = ii(e, s)[s] || {}).seiNals,
                        logs: e.logs,
                        timescale: r
                    }) && s.logs && (d.logs = d.logs.concat(s.logs)), null !== s && s.seiNals ? (this.pushNals(s.seiNals), this.flushStream(), d) : d.logs.length ? {
                        logs: d.logs,
                        captions: [],
                        captionStreams: []
                    } : null
                }, this.pushNals = function (e) {
                    if (!this.isInitialized() || !e || 0 === e.length) return null;
                    e.forEach(function (e) {
                        t.push(e)
                    })
                }, this.flushStream = function () {
                    if (!this.isInitialized()) return null;
                    i ? t.partialFlush() : t.flush()
                }, this.clearParsedCaptions = function () {
                    d.captions = [], d.captionStreams = {}, d.logs = []
                }, this.resetCaptionStream = function () {
                    if (!this.isInitialized()) return null;
                    t.reset()
                }, this.clearAllCaptions = function () {
                    this.clearParsedCaptions(), this.resetCaptionStream()
                }, this.reset = function () {
                    a = [], l = o = null, d ? this.clearParsedCaptions() : d = {
                        captions: [],
                        captionStreams: {},
                        logs: []
                    }, this.resetCaptionStream()
                }, this.reset()
            }, ri = function (e) {
                for (var t = 0, i = String.fromCharCode(e[t]), s = ""; "\0" !== i;) s += i, t++, i = String.fromCharCode(e[t]);
                return s += i
            }, ni = s.getUint64, ai = function (e) {
                return void 0 !== e || null !== e
            }, oi = i, L = De, P = Mt, li = Rt, di = {
                parseEmsgBox: function (e) {
                    var t, i, s, r, n, a, o, l = 4, d = e[0],
                        h = (0 === d ? (l = (l += (r = ri(e.subarray(l))).length) + (n = ri(e.subarray(l))).length, s = (h = new DataView(e.buffer)).getUint32(l), o = h.getUint32(l += 4), t = h.getUint32(l += 4), i = h.getUint32(l += 4), l += 4) : 1 === d && (s = (h = new DataView(e.buffer)).getUint32(l), a = ni(e.subarray(l += 4)), t = h.getUint32(l += 8), i = h.getUint32(l += 4), l = (l = (l += 4) + (r = ri(e.subarray(l))).length) + (n = ri(e.subarray(l))).length), {
                            scheme_id_uri: r,
                            value: n,
                            timescale: s || 1,
                            presentation_time: a,
                            presentation_time_delta: o,
                            event_duration: t,
                            id: i,
                            message_data: new Uint8Array(e.subarray(l, e.byteLength))
                        });
                    return n = "\0" !== (r = h).scheme_id_uri, a = 0 === (s = d) && ai(r.presentation_time_delta) && n, o = 1 === s && ai(r.presentation_time) && n, !(1 < s) && a || o ? h : void 0
                }, scaleTime: function (e, t, i, s) {
                    return e || 0 === e ? e / t : s + i / t
                }
            }, hi = s.getUint64, ui = w, ci = Ze.parseId3Frames, pi = function (e) {
                var t = 0 === e[0] ? 12 : 20;
                return oi(e[t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t])
            }, mi = function (n, e) {
                e = P(e, ["moof", "traf"]).reduce(function (e, t) {
                    var i = P(t, ["tfhd"])[0], i = oi(i[4] << 24 | i[5] << 16 | i[6] << 8 | i[7]), i = n[i] || 9e4,
                        t = P(t, ["tfdt"])[0], s = new DataView(t.buffer, t.byteOffset, t.byteLength),
                        t = 1 === t[0] ? hi(t.subarray(4, 12)) : s.getUint32(4);
                    let r;
                    return "bigint" == typeof t ? r = t / ui.BigInt(i) : "number" != typeof t || isNaN(t) || (r = t / i), e = (r = r < Number.MAX_SAFE_INTEGER ? Number(r) : r) < e ? r : e
                }, 1 / 0);
                return "bigint" == typeof e || isFinite(e) ? e : 0
            }, gi = function (e) {
                var e = P(e, ["moov", "trak"]), n = [];
                return e.forEach(function (e) {
                    var t, i = {}, s = P(e, ["tkhd"])[0],
                        r = (s && (r = (s = new DataView(s.buffer, s.byteOffset, s.byteLength)).getUint8(0), i.id = 0 === r ? s.getUint32(12) : s.getUint32(20)), P(e, ["mdia", "hdlr"])[0]),
                        r = (r && (s = li(r.subarray(8, 12)), i.type = "vide" === s ? "video" : "soun" === s ? "audio" : s), P(e, ["mdia", "minf", "stbl", "stsd"])[0]),
                        s = (r && (s = r.subarray(8), i.codec = li(s.subarray(4, 8)), r = P(s, [i.codec])[0]) && (/^[asm]vc[1-9]$/i.test(i.codec) ? (t = r.subarray(78), "avcC" === li(t.subarray(4, 8)) && 11 < t.length ? (i.codec += ".", i.codec += L(t[9]), i.codec += L(t[10]), i.codec += L(t[11])) : i.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(i.codec) ? (t = r.subarray(28), "esds" === li(t.subarray(4, 8)) && 20 < t.length && 0 !== t[19] ? (i.codec += "." + L(t[19]), i.codec += "." + L(t[20] >>> 2 & 63).replace(/^0/, "")) : i.codec = "mp4a.40.2") : i.codec = i.codec.toLowerCase()), P(e, ["mdia", "mdhd"])[0]);
                    s && (i.timescale = pi(s)), n.push(i)
                }), n
            }, fi = function (e, i = 0) {
                return P(e, ["emsg"]).map(e => {
                    var e = di.parseEmsgBox(new Uint8Array(e)), t = ci(e.message_data);
                    return {
                        cueTime: di.scaleTime(e.presentation_time, e.timescale, e.presentation_time_delta, i),
                        duration: di.scaleTime(e.event_duration, e.timescale),
                        frames: t
                    }
                })
            }, yi = He, _i = He, O = Ye, N = {}, R = (N.ts = {
                parseType: function (e, t) {
                    e = jt(e);
                    return 0 === e ? "pat" : e === t ? "pmt" : t ? "pes" : null
                }, parsePat: function (e) {
                    var t = qt(e), i = 4 + Ht(e);
                    return t && (i += e[i] + 1), (31 & e[i + 10]) << 8 | e[i + 11]
                }, parsePmt: function (e) {
                    var t = {}, i = qt(e), s = 4 + Ht(e);
                    if (i && (s += e[s] + 1), 1 & e[s + 5]) {
                        for (var r = 3 + ((15 & e[s + 1]) << 8 | e[s + 2]) - 4, n = 12 + ((15 & e[s + 10]) << 8 | e[s + 11]); n < r;) {
                            var a = s + n;
                            t[(31 & e[a + 1]) << 8 | e[a + 2]] = e[a], n += 5 + ((15 & e[a + 3]) << 8 | e[a + 4])
                        }
                        return t
                    }
                }, parsePayloadUnitStartIndicator: qt, parsePesType: function (e, t) {
                    switch (t[jt(e)]) {
                        case yi.H264_STREAM_TYPE:
                            return "video";
                        case yi.ADTS_STREAM_TYPE:
                            return "audio";
                        case yi.METADATA_STREAM_TYPE:
                            return "timed-metadata";
                        default:
                            return null
                    }
                }, parsePesTime: function (e) {
                    var t, i, s;
                    return !qt(e) || (t = 4 + Ht(e)) >= e.byteLength ? null : (i = null, 192 & (s = e[t + 7]) && ((i = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, i.pts *= 4, i.pts += (6 & e[t + 13]) >>> 1, i.dts = i.pts, 64 & s) && (i.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, i.dts *= 4, i.dts += (6 & e[t + 18]) >>> 1), i)
                }, videoPacketContainsKeyFrame: function (e) {
                    for (var t = 4 + Ht(e), i = e.subarray(t), s = 0, r = 0, n = !1; r < i.byteLength - 3; r++) if (1 === i[r + 2]) {
                        s = r + 5;
                        break
                    }
                    for (; s < i.byteLength;) switch (i[s]) {
                        case 0:
                            if (0 !== i[s - 1]) s += 2; else if (0 !== i[s - 2]) s++; else {
                                for (r + 3 !== s - 2 && "slice_layer_without_partitioning_rbsp_idr" === Vt(31 & i[r + 3]) && (n = !0); 1 !== i[++s] && s < i.length;) ;
                                r = s - 2, s += 3
                            }
                            break;
                        case 1:
                            0 !== i[s - 1] || 0 !== i[s - 2] ? s += 3 : ("slice_layer_without_partitioning_rbsp_idr" === Vt(31 & i[r + 3]) && (n = !0), r = s - 2, s += 3);
                            break;
                        default:
                            s += 3
                    }
                    return i = i.subarray(r), s -= r, r = 0, n = i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === Vt(31 & i[r + 3]) ? !0 : n
                }
            }, N.aac = b, c.ONE_SECOND_IN_TS), vi = function (e, t) {
                for (var i, s = 0, r = 188; r < e.byteLength;) if (71 === e[s] && 71 === e[r]) {
                    switch (i = e.subarray(s, r), N.ts.parseType(i, t.pid)) {
                        case"pat":
                            t.pid = N.ts.parsePat(i);
                            break;
                        case"pmt":
                            var n = N.ts.parsePmt(i);
                            t.table = t.table || {}, Object.keys(n).forEach(function (e) {
                                t.table[e] = n[e]
                            })
                    }
                    s += 188, r += 188
                } else s++, r++
            }, bi = function (e, t, i) {
                for (var s, r, n, a, o = 0, l = 188, d = !1; l <= e.byteLength;) if (71 !== e[o] || 71 !== e[l] && l !== e.byteLength) o++, l++; else {
                    if (s = e.subarray(o, l), "pes" === N.ts.parseType(s, t.pid) && (r = N.ts.parsePesType(s, t.table), n = N.ts.parsePayloadUnitStartIndicator(s), "audio" === r) && n && (a = N.ts.parsePesTime(s)) && (a.type = "audio", i.audio.push(a), d = !0), d) break;
                    o += 188, l += 188
                }
                for (o = (l = e.byteLength) - 188, d = !1; 0 <= o;) if (71 !== e[o] || 71 !== e[l] && l !== e.byteLength) o--, l--; else {
                    if (s = e.subarray(o, l), "pes" === N.ts.parseType(s, t.pid) && (r = N.ts.parsePesType(s, t.table), n = N.ts.parsePayloadUnitStartIndicator(s), "audio" === r) && n && (a = N.ts.parsePesTime(s)) && (a.type = "audio", i.audio.push(a), d = !0), d) break;
                    o -= 188, l -= 188
                }
            }, Ti = function (e, t, i) {
                for (var s, r, n, a, o, l, d, h, u = 0, c = 188, p = !1, m = {
                    data: [],
                    size: 0
                }; c < e.byteLength;) if (71 === e[u] && 71 === e[c]) {
                    if (s = e.subarray(u, c), "pes" === N.ts.parseType(s, t.pid)) if (r = N.ts.parsePesType(s, t.table), n = N.ts.parsePayloadUnitStartIndicator(s), "video" === r && (n && !p && (a = N.ts.parsePesTime(s)) && (a.type = "video", i.video.push(a), p = !0), !i.firstKeyFrame)) {
                        if (n && 0 !== m.size) {
                            for (o = new Uint8Array(m.size), l = 0; m.data.length;) d = m.data.shift(), o.set(d, l), l += d.byteLength;
                            N.ts.videoPacketContainsKeyFrame(o) && (h = N.ts.parsePesTime(o)) && (i.firstKeyFrame = h, i.firstKeyFrame.type = "video"), m.size = 0
                        }
                        m.data.push(s), m.size += s.byteLength
                    }
                    if (p && i.firstKeyFrame) break;
                    u += 188, c += 188
                } else u++, c++;
                for (u = (c = e.byteLength) - 188, p = !1; 0 <= u;) if (71 === e[u] && 71 === e[c]) {
                    if (s = e.subarray(u, c), "pes" === N.ts.parseType(s, t.pid) && (r = N.ts.parsePesType(s, t.table), n = N.ts.parsePayloadUnitStartIndicator(s), "video" === r) && n && (a = N.ts.parsePesTime(s)) && (a.type = "video", i.video.push(a), p = !0), p) break;
                    u -= 188, c -= 188
                } else u--, c--
            }, wi = function (e, t) {
                var i, s, r, e = (N.aac.isLikelyAacData(e) ? function (e) {
                    for (var t, i, s = !1, r = 0, n = null, a = null, o = 0, l = 0; 3 <= e.length - l;) {
                        switch (N.aac.parseType(e, l)) {
                            case"timed-metadata":
                                e.length - l < 10 ? s = !0 : (o = N.aac.parseId3TagSize(e, l)) > e.length ? s = !0 : (null === a && (t = e.subarray(l, l + o), a = N.aac.parseAacTimestamp(t)), l += o);
                                break;
                            case"audio":
                                e.length - l < 7 ? s = !0 : (o = N.aac.parseAdtsSize(e, l)) > e.length ? s = !0 : (null === n && (t = e.subarray(l, l + o), n = N.aac.parseSampleRate(t)), r++, l += o);
                                break;
                            default:
                                l++
                        }
                        if (s) return null
                    }
                    return null === n || null === a ? null : {
                        audio: [{type: "audio", dts: a, pts: a}, {
                            type: "audio",
                            dts: a + 1024 * r * (i = R / n),
                            pts: a + 1024 * r * i
                        }]
                    }
                } : function (e) {
                    var t, i = {pid: null, table: null}, s = {};
                    for (t in vi(e, i), i.table) if (i.table.hasOwnProperty(t)) switch (i.table[t]) {
                        case _i.H264_STREAM_TYPE:
                            s.video = [], Ti(e, i, s), 0 === s.video.length && delete s.video;
                            break;
                        case _i.ADTS_STREAM_TYPE:
                            s.audio = [], bi(e, i, s), 0 === s.audio.length && delete s.audio
                    }
                    return s
                })(e);
                return e && (e.audio || e.video) ? (t = t, (i = e).audio && i.audio.length && ("undefined" != typeof (s = t) && !isNaN(s) || (s = i.audio[0].dts), i.audio.forEach(function (e) {
                    e.dts = O(e.dts, s), e.pts = O(e.pts, s), e.dtsTime = e.dts / R, e.ptsTime = e.pts / R
                })), i.video && i.video.length && ("undefined" != typeof (r = t) && !isNaN(r) || (r = i.video[0].dts), i.video.forEach(function (e) {
                    e.dts = O(e.dts, r), e.pts = O(e.pts, r), e.dtsTime = e.dts / R, e.ptsTime = e.pts / R
                }), i.firstKeyFrame) && ((t = i.firstKeyFrame).dts = O(t.dts, r), t.pts = O(t.pts, r), t.dtsTime = t.dts / R, t.ptsTime = t.pts / R), e) : null
            };

        class Si {
            constructor(e, t) {
                this.options = t || {}, this.self = e, this.init()
            }

            init() {
                var i, e;
                this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new zt(this.options), i = this.self, (e = this.transmuxer).on("data", function (e) {
                    var t = e.initSegment, t = (e.initSegment = {
                        data: t.buffer,
                        byteOffset: t.byteOffset,
                        byteLength: t.byteLength
                    }, e.data);
                    e.data = t.buffer, i.postMessage({
                        action: "data",
                        segment: e,
                        byteOffset: t.byteOffset,
                        byteLength: t.byteLength
                    }, [e.data])
                }), e.on("done", function (e) {
                    i.postMessage({action: "done"})
                }), e.on("gopInfo", function (e) {
                    i.postMessage({action: "gopInfo", gopInfo: e})
                }), e.on("videoSegmentTimingInfo", function (e) {
                    var t = {
                        start: {
                            decode: c.videoTsToSeconds(e.start.dts),
                            presentation: c.videoTsToSeconds(e.start.pts)
                        },
                        end: {decode: c.videoTsToSeconds(e.end.dts), presentation: c.videoTsToSeconds(e.end.pts)},
                        baseMediaDecodeTime: c.videoTsToSeconds(e.baseMediaDecodeTime)
                    };
                    e.prependedContentDuration && (t.prependedContentDuration = c.videoTsToSeconds(e.prependedContentDuration)), i.postMessage({
                        action: "videoSegmentTimingInfo",
                        videoSegmentTimingInfo: t
                    })
                }), e.on("audioSegmentTimingInfo", function (e) {
                    var t = {
                        start: {
                            decode: c.videoTsToSeconds(e.start.dts),
                            presentation: c.videoTsToSeconds(e.start.pts)
                        },
                        end: {decode: c.videoTsToSeconds(e.end.dts), presentation: c.videoTsToSeconds(e.end.pts)},
                        baseMediaDecodeTime: c.videoTsToSeconds(e.baseMediaDecodeTime)
                    };
                    e.prependedContentDuration && (t.prependedContentDuration = c.videoTsToSeconds(e.prependedContentDuration)), i.postMessage({
                        action: "audioSegmentTimingInfo",
                        audioSegmentTimingInfo: t
                    })
                }), e.on("id3Frame", function (e) {
                    i.postMessage({action: "id3Frame", id3Frame: e})
                }), e.on("caption", function (e) {
                    i.postMessage({action: "caption", caption: e})
                }), e.on("trackinfo", function (e) {
                    i.postMessage({action: "trackinfo", trackInfo: e})
                }), e.on("audioTimingInfo", function (e) {
                    i.postMessage({
                        action: "audioTimingInfo",
                        audioTimingInfo: {start: c.videoTsToSeconds(e.start), end: c.videoTsToSeconds(e.end)}
                    })
                }), e.on("videoTimingInfo", function (e) {
                    i.postMessage({
                        action: "videoTimingInfo",
                        videoTimingInfo: {start: c.videoTsToSeconds(e.start), end: c.videoTsToSeconds(e.end)}
                    })
                }), e.on("log", function (e) {
                    i.postMessage({action: "log", log: e})
                })
            }

            pushMp4Captions(e) {
                this.captionParser || (this.captionParser = new si, this.captionParser.init());
                var t = new Uint8Array(e.data, e.byteOffset, e.byteLength),
                    e = this.captionParser.parse(t, e.trackIds, e.timescales);
                this.self.postMessage({
                    action: "mp4Captions",
                    captions: e && e.captions || [],
                    logs: e && e.logs || [],
                    data: t.buffer
                }, [t.buffer])
            }

            probeMp4StartTime({timescales: e, data: t}) {
                e = mi(e, t);
                this.self.postMessage({action: "probeMp4StartTime", startTime: e, data: t}, [t.buffer])
            }

            probeMp4Tracks({data: e}) {
                var t = gi(e);
                this.self.postMessage({action: "probeMp4Tracks", tracks: t, data: e}, [e.buffer])
            }

            probeEmsgID3({data: e, offset: t}) {
                t = fi(e, t);
                this.self.postMessage({action: "probeEmsgID3", id3Frames: t, emsgData: e}, [e.buffer])
            }

            probeTs({data: e, baseStartTime: t}) {
                t = "number" != typeof t || isNaN(t) ? void 0 : t * c.ONE_SECOND_IN_TS, t = wi(e, t);
                let i = null;
                t && ((i = {
                    hasVideo: t.video && 2 === t.video.length || !1,
                    hasAudio: t.audio && 2 === t.audio.length || !1
                }).hasVideo && (i.videoStart = t.video[0].ptsTime), i.hasAudio) && (i.audioStart = t.audio[0].ptsTime), this.self.postMessage({
                    action: "probeTs",
                    result: i,
                    data: e
                }, [e.buffer])
            }

            clearAllMp4Captions() {
                this.captionParser && this.captionParser.clearAllCaptions()
            }

            clearParsedMp4Captions() {
                this.captionParser && this.captionParser.clearParsedCaptions()
            }

            push(e) {
                e = new Uint8Array(e.data, e.byteOffset, e.byteLength);
                this.transmuxer.push(e)
            }

            reset() {
                this.transmuxer.reset()
            }

            setTimestampOffset(e) {
                e = e.timestampOffset || 0;
                this.transmuxer.setBaseMediaDecodeTime(Math.round(c.secondsToVideoTs(e)))
            }

            setAudioAppendStart(e) {
                this.transmuxer.setAudioAppendStart(Math.ceil(c.secondsToVideoTs(e.appendStart)))
            }

            setRemux(e) {
                this.transmuxer.setRemux(e.remux)
            }

            flush(e) {
                this.transmuxer.flush(), self.postMessage({action: "done", type: "transmuxed"})
            }

            endTimeline() {
                this.transmuxer.endTimeline(), self.postMessage({action: "endedtimeline", type: "transmuxed"})
            }

            alignGopsWith(e) {
                this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
            }
        }

        self.onmessage = function (e) {
            "init" === e.data.action && e.data.options ? this.messageHandlers = new Si(self, e.data.options) : (this.messageHandlers || (this.messageHandlers = new Si(self)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
        }
    })));
    const oh = (e, t, i) => {
        var {
            type: s,
            initSegment: r,
            captions: n,
            captionStreams: a,
            metadata: o,
            videoFrameDtsTime: l,
            videoFramePtsTime: d
        } = e.data.segment, t = (t.buffer.push({
            captions: n,
            captionStreams: a,
            metadata: o
        }), e.data.segment.boxes || {data: e.data.segment.data}), n = {
            type: s,
            data: new Uint8Array(t.data, t.data.byteOffset, t.data.byteLength),
            initSegment: new Uint8Array(r.data, r.byteOffset, r.byteLength)
        };
        "undefined" != typeof l && (n.videoFrameDtsTime = l), "undefined" != typeof d && (n.videoFramePtsTime = d), i(n)
    }, lh = ({transmuxedData: e, callback: t}) => {
        e.buffer = [], t(e)
    }, dh = (e, t) => {
        t.gopInfo = e.data.gopInfo
    }, hh = t => {
        const {
            transmuxer: i,
            bytes: e,
            audioAppendStart: s,
            gopsToAlignWith: r,
            remux: n,
            onData: a,
            onTrackInfo: o,
            onAudioTimingInfo: l,
            onVideoTimingInfo: d,
            onVideoSegmentTimingInfo: h,
            onAudioSegmentTimingInfo: u,
            onId3: c,
            onCaptions: p,
            onDone: m,
            onEndedTimeline: g,
            onTransmuxerLog: f,
            isEndOfTimeline: y
        } = t, _ = {buffer: []};
        let v = y;
        var b, T;
        i.onmessage = e => {
            i.currentTransmux !== t || ("data" === e.data.action && oh(e, _, a), "trackinfo" === e.data.action && o(e.data.trackInfo), "gopInfo" === e.data.action && dh(e, _), "audioTimingInfo" === e.data.action && l(e.data.audioTimingInfo), "videoTimingInfo" === e.data.action && d(e.data.videoTimingInfo), "videoSegmentTimingInfo" === e.data.action && h(e.data.videoSegmentTimingInfo), "audioSegmentTimingInfo" === e.data.action && u(e.data.audioSegmentTimingInfo), "id3Frame" === e.data.action && c([e.data.id3Frame], e.data.id3Frame.dispatchType), "caption" === e.data.action && p(e.data.caption), "endedtimeline" === e.data.action && (v = !1, g()), "log" === e.data.action && f(e.data.log), "transmuxed" !== e.data.type) || v || (i.onmessage = null, lh({
                transmuxedData: _,
                callback: m
            }), uh(i))
        }, s && i.postMessage({
            action: "setAudioAppendStart",
            appendStart: s
        }), Array.isArray(r) && i.postMessage({
            action: "alignGopsWith",
            gopsToAlignWith: r
        }), "undefined" != typeof n && i.postMessage({
            action: "setRemux",
            remux: n
        }), e.byteLength && (b = e instanceof ArrayBuffer ? e : e.buffer, T = e instanceof ArrayBuffer ? 0 : e.byteOffset, i.postMessage({
            action: "push",
            data: b,
            byteOffset: T,
            byteLength: e.byteLength
        }, [b])), y && i.postMessage({action: "endTimeline"}), i.postMessage({action: "flush"})
    }, uh = e => {
        e.currentTransmux = null, e.transmuxQueue.length && (e.currentTransmux = e.transmuxQueue.shift(), "function" == typeof e.currentTransmux ? e.currentTransmux() : hh(e.currentTransmux))
    }, ch = (e, t) => {
        e.postMessage({action: t}), uh(e)
    }, ph = (e, t) => {
        t.currentTransmux ? t.transmuxQueue.push(ch.bind(null, t, e)) : (t.currentTransmux = e, ch(t, e))
    };
    const mh = e => {
        e.transmuxer.currentTransmux ? e.transmuxer.transmuxQueue.push(e) : (e.transmuxer.currentTransmux = e, hh(e))
    };
    var gh = e => {
        ph("reset", e)
    }, fh = (mh, e => {
        const t = new ah, i = (t.currentTransmux = null, t.transmuxQueue = [], t.terminate);
        return t.terminate = () => (t.currentTransmux = null, t.transmuxQueue.length = 0, i.call(t)), t.postMessage({
            action: "init",
            options: e
        }), t
    });

    function yh(t) {
        const i = t.transmuxer, s = t.endAction || t.action, r = t.callback;
        var e, n = _i({}, t, {endAction: null, transmuxer: null, callback: null});
        const a = e => {
            e.data.action === s && (i.removeEventListener("message", a), e.data.data && (e.data.data = new Uint8Array(e.data.data, t.byteOffset || 0, t.byteLength || e.data.data.byteLength), t.data) && (t.data = e.data.data), r(e.data))
        };
        i.addEventListener("message", a), t.data ? (e = t.data instanceof ArrayBuffer, n.byteOffset = e ? 0 : t.data.byteOffset, n.byteLength = t.data.byteLength, e = [e ? t.data : t.data.buffer], i.postMessage(n, e)) : i.postMessage(n)
    }

    function _h(e) {
        let t = 0;
        return e.audio && t++, e.video && t++, t
    }

    function vh(e, t) {
        var i = t.attributes || {}, s = Mh(function (e) {
            e = e.attributes || {};
            if (e.CODECS) return jn(e.CODECS)
        }(t) || []);
        return !Rh(e, t) || s.audio || ((e, t) => {
            if (!Rh(e, t)) return !0;
            var t = t.attributes || {}, i = e.mediaGroups.AUDIO[t.AUDIO];
            for (const s in i) if (!i[s].uri && !i[s].playlists) return !0;
            return !1
        })(e, t) || (t = Mh(function (e, t) {
            if (e.mediaGroups.AUDIO && t) {
                var i = e.mediaGroups.AUDIO[t];
                if (i) for (var s in i) {
                    s = i[s];
                    if (s.default && s.playlists) return jn(s.playlists[0].attributes.CODECS)
                }
            }
            return null
        }(e, i.AUDIO) || [])).audio && (s.audio = t.audio), s
    }

    function bh(e, t) {
        return (e = e && window.getComputedStyle(e)) ? e[t] : ""
    }

    function Th(e, t) {
        let i, s;
        return i = (i = e.attributes.BANDWIDTH ? e.attributes.BANDWIDTH : i) || window.Number.MAX_VALUE, s = (s = t.attributes.BANDWIDTH ? t.attributes.BANDWIDTH : s) || window.Number.MAX_VALUE, i - s
    }

    const wh = {FAILURE: 2, TIMEOUT: -101, ABORTED: -102}, Sh = e => {
            e.forEach(e => {
                e.abort()
            })
        }, Eh = e => ({bandwidth: e.bandwidth, bytesReceived: e.bytesReceived || 0, roundTripTime: e.roundTripTime || 0}),
        kh = e => {
            var t = e.target, t = {bandwidth: 1 / 0, bytesReceived: 0, roundTripTime: Date.now() - t.requestTime || 0};
            return t.bytesReceived = e.loaded, t.bandwidth = Math.floor(t.bytesReceived / t.roundTripTime * 8 * 1e3), t
        }, Ch = (e, t) => t.timedout ? {
            status: t.status,
            message: "HLS request timed-out at URL: " + t.uri,
            code: wh.TIMEOUT,
            xhr: t
        } : t.aborted ? {
            status: t.status,
            message: "HLS request aborted at URL: " + t.uri,
            code: wh.ABORTED,
            xhr: t
        } : e ? {
            status: t.status,
            message: "HLS request errored at URL: " + t.uri,
            code: wh.FAILURE,
            xhr: t
        } : "arraybuffer" === t.responseType && 0 === t.response.byteLength ? {
            status: t.status,
            message: "Empty HLS response at URL: " + t.uri,
            code: wh.FAILURE,
            xhr: t
        } : null, xh = (r, n, a) => (e, t) => {
            var i = t.response, e = Ch(e, t);
            if (e) return a(e, r);
            if (16 !== i.byteLength) return a({
                status: t.status,
                message: "Invalid HLS key at URL: " + t.uri,
                code: wh.FAILURE,
                xhr: t
            }, r);
            var e = new DataView(i), s = new Uint32Array([e.getUint32(0), e.getUint32(4), e.getUint32(8), e.getUint32(12)]);
            for (let e = 0; e < n.length; e++) n[e].bytes = s;
            return a(null, r)
        }, Ih = (i, s) => {
            var e, t = wl(i.map.bytes);
            if ("mp4" !== t) return e = i.map.resolvedUri || i.map.uri, s({
                internal: !0,
                message: `Found unsupported ${t || "unknown"} container for initialization segment at URL: ` + e,
                code: wh.FAILURE
            });
            yh({
                action: "probeMp4Tracks",
                data: i.map.bytes,
                transmuxer: i.transmuxer,
                callback: ({tracks: e, data: t}) => (i.map.bytes = t, e.forEach(function (e) {
                    i.map.tracks = i.map.tracks || {}, i.map.tracks[e.type] || "number" == typeof (i.map.tracks[e.type] = e).id && e.timescale && (i.map.timescales = i.map.timescales || {}, i.map.timescales[e.id] = e.timescale)
                }), s(null))
            })
        }, Ah = ({
                     segment: i,
                     bytes: t,
                     trackInfoFn: s,
                     timingInfoFn: e,
                     videoSegmentTimingInfoFn: r,
                     audioSegmentTimingInfoFn: n,
                     id3Fn: a,
                     captionsFn: o,
                     isEndOfTimeline: l,
                     endedTimelineFn: d,
                     dataFn: h,
                     doneFn: u,
                     onTransmuxerLog: c
                 }) => {
            var p = i.map && i.map.tracks || {};
            const m = Boolean(p.audio && p.video);
            let g = e.bind(null, i, "audio", "start");
            const f = e.bind(null, i, "audio", "end");
            let y = e.bind(null, i, "video", "start");
            const _ = e.bind(null, i, "video", "end");
            yh({
                action: "probeTs", transmuxer: i.transmuxer, data: t, baseStartTime: i.baseStartTime, callback: e => {
                    i.bytes = t = e.data;
                    e = e.result;
                    e && (s(i, {hasAudio: e.hasAudio, hasVideo: e.hasVideo, isMuxed: m}), s = null), mh({
                        bytes: t,
                        transmuxer: i.transmuxer,
                        audioAppendStart: i.audioAppendStart,
                        gopsToAlignWith: i.gopsToAlignWith,
                        remux: m,
                        onData: e => {
                            e.type = "combined" === e.type ? "video" : e.type, h(i, e)
                        },
                        onTrackInfo: e => {
                            s && (m && (e.isMuxed = !0), s(i, e))
                        },
                        onAudioTimingInfo: e => {
                            g && "undefined" != typeof e.start && (g(e.start), g = null), f && "undefined" != typeof e.end && f(e.end)
                        },
                        onVideoTimingInfo: e => {
                            y && "undefined" != typeof e.start && (y(e.start), y = null), _ && "undefined" != typeof e.end && _(e.end)
                        },
                        onVideoSegmentTimingInfo: e => {
                            r(e)
                        },
                        onAudioSegmentTimingInfo: e => {
                            n(e)
                        },
                        onId3: (e, t) => {
                            a(i, e, t)
                        },
                        onCaptions: e => {
                            o(i, [e])
                        },
                        isEndOfTimeline: l,
                        onEndedTimeline: () => {
                            d()
                        },
                        onTransmuxerLog: c,
                        onDone: e => {
                            u && (e.type = "combined" === e.type ? "video" : e.type, u(null, i, e))
                        }
                    })
                }
            })
        }, Dh = ({
                     segment: i,
                     bytes: s,
                     trackInfoFn: e,
                     timingInfoFn: r,
                     videoSegmentTimingInfoFn: t,
                     audioSegmentTimingInfoFn: n,
                     id3Fn: a,
                     captionsFn: o,
                     isEndOfTimeline: l,
                     endedTimelineFn: d,
                     dataFn: h,
                     doneFn: u,
                     onTransmuxerLog: c
                 }) => {
            let p = new Uint8Array(s);
            if (m = p, 0 < _l(m, ["moof"]).length) {
                i.isFmp4 = !0;
                const g = i.map["tracks"], f = {isFmp4: !0, hasVideo: !!g.video, hasAudio: !!g.audio},
                    y = (g.audio && g.audio.codec && "enca" !== g.audio.codec && (f.audioCodec = g.audio.codec), g.video && g.video.codec && "encv" !== g.video.codec && (f.videoCodec = g.video.codec), g.video && g.audio && (f.isMuxed = !0), e(i, f), (e, t) => {
                        h(i, {
                            data: p,
                            type: f.hasAudio && !f.isMuxed ? "audio" : "video"
                        }), t && t.length && a(i, t), e && e.length && o(i, e), u(null, i, {})
                    });
                void yh({
                    action: "probeMp4StartTime",
                    timescales: i.map.timescales,
                    data: p,
                    transmuxer: i.transmuxer,
                    callback: ({data: e, startTime: t}) => {
                        s = e.buffer, i.bytes = p = e, f.hasAudio && !f.isMuxed && r(i, "audio", "start", t), f.hasVideo && r(i, "video", "start", t), yh({
                            action: "probeEmsgID3",
                            data: p,
                            transmuxer: i.transmuxer,
                            offset: t,
                            callback: ({emsgData: e, id3Frames: t}) => {
                                s = e.buffer, i.bytes = p = e, g.video && e.byteLength && i.transmuxer ? yh({
                                    action: "pushMp4Captions",
                                    endAction: "mp4Captions",
                                    transmuxer: i.transmuxer,
                                    data: p,
                                    timescales: i.map.timescales,
                                    trackIds: [g.video.id],
                                    callback: e => {
                                        s = e.data.buffer, i.bytes = p = e.data, e.logs.forEach(function (e) {
                                            c(P(e, {stream: "mp4CaptionParser"}))
                                        }), y(e.captions, t)
                                    }
                                }) : y(void 0, t)
                            }
                        })
                    }
                })
            } else {
                var m;
                i.transmuxer ? ("undefined" == typeof i.container && (i.container = wl(p)), "ts" !== i.container && "aac" !== i.container ? (e(i, {
                    hasAudio: !1,
                    hasVideo: !1
                }), u(null, i, {})) : Ah({
                    segment: i,
                    bytes: s,
                    trackInfoFn: e,
                    timingInfoFn: r,
                    videoSegmentTimingInfoFn: t,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: d,
                    dataFn: h,
                    doneFn: u,
                    onTransmuxerLog: c
                })) : u(null, i, {})
            }
        }, Lh = function ({id: t, key: e, encryptedBytes: i, decryptionWorker: s}, r) {
            const n = e => {
                e.data.source === t && (s.removeEventListener("message", n), e = e.data.decrypted, r(new Uint8Array(e.bytes, e.byteOffset, e.byteLength)))
            };
            s.addEventListener("message", n);
            let a;
            a = e.bytes.slice ? e.bytes.slice() : new Uint32Array(Array.prototype.slice.call(e.bytes)), s.postMessage(Ud({
                source: t,
                encrypted: i,
                key: a,
                iv: e.iv
            }), [i.buffer, a.buffer])
        }, Ph = ({
                     decryptionWorker: e,
                     segment: t,
                     trackInfoFn: i,
                     timingInfoFn: s,
                     videoSegmentTimingInfoFn: r,
                     audioSegmentTimingInfoFn: n,
                     id3Fn: a,
                     captionsFn: o,
                     isEndOfTimeline: l,
                     endedTimelineFn: d,
                     dataFn: h,
                     doneFn: u,
                     onTransmuxerLog: c
                 }) => {
            Lh({id: t.requestId, key: t.key, encryptedBytes: t.encryptedBytes, decryptionWorker: e}, e => {
                t.bytes = e, Dh({
                    segment: t,
                    bytes: t.bytes,
                    trackInfoFn: i,
                    timingInfoFn: s,
                    videoSegmentTimingInfoFn: r,
                    audioSegmentTimingInfoFn: n,
                    id3Fn: a,
                    captionsFn: o,
                    isEndOfTimeline: l,
                    endedTimelineFn: d,
                    dataFn: h,
                    doneFn: u,
                    onTransmuxerLog: c
                })
            })
        }, Oh = ({
                     xhr: e,
                     xhrOptions: t,
                     decryptionWorker: i,
                     segment: s,
                     abortFn: r,
                     progressFn: n,
                     trackInfoFn: a,
                     timingInfoFn: o,
                     videoSegmentTimingInfoFn: l,
                     audioSegmentTimingInfoFn: d,
                     id3Fn: h,
                     captionsFn: u,
                     isEndOfTimeline: c,
                     endedTimelineFn: p,
                     dataFn: m,
                     doneFn: g,
                     onTransmuxerLog: f
                 }) => {
            const y = [];
            var _, v, i = (({
                                activeXhrs: s,
                                decryptionWorker: r,
                                trackInfoFn: n,
                                timingInfoFn: a,
                                videoSegmentTimingInfoFn: o,
                                audioSegmentTimingInfoFn: l,
                                id3Fn: d,
                                captionsFn: h,
                                isEndOfTimeline: u,
                                endedTimelineFn: c,
                                dataFn: p,
                                doneFn: m,
                                onTransmuxerLog: g
                            }) => {
                    let f = 0, y = !1;
                    return (e, t) => {
                        if (!y) {
                            if (e) return y = !0, Sh(s), m(e, t);
                            if ((f += 1) === s.length) {
                                const i = function () {
                                    if (t.encryptedBytes) return Ph({
                                        decryptionWorker: r,
                                        segment: t,
                                        trackInfoFn: n,
                                        timingInfoFn: a,
                                        videoSegmentTimingInfoFn: o,
                                        audioSegmentTimingInfoFn: l,
                                        id3Fn: d,
                                        captionsFn: h,
                                        isEndOfTimeline: u,
                                        endedTimelineFn: c,
                                        dataFn: p,
                                        doneFn: m,
                                        onTransmuxerLog: g
                                    });
                                    Dh({
                                        segment: t,
                                        bytes: t.bytes,
                                        trackInfoFn: n,
                                        timingInfoFn: a,
                                        videoSegmentTimingInfoFn: o,
                                        audioSegmentTimingInfoFn: l,
                                        id3Fn: d,
                                        captionsFn: h,
                                        isEndOfTimeline: u,
                                        endedTimelineFn: c,
                                        dataFn: p,
                                        doneFn: m,
                                        onTransmuxerLog: g
                                    })
                                };
                                if (t.endOfAllRequests = Date.now(), t.map && t.map.encryptedBytes && !t.map.bytes) return Lh({
                                    decryptionWorker: r,
                                    id: t.requestId + "-init",
                                    encryptedBytes: t.map.encryptedBytes,
                                    key: t.map.key
                                }, e => {
                                    t.map.bytes = e, Ih(t, e => {
                                        if (e) return Sh(s), m(e, t);
                                        i()
                                    })
                                });
                                i()
                            }
                        }
                    }
                })({
                    activeXhrs: y,
                    decryptionWorker: i,
                    trackInfoFn: a,
                    timingInfoFn: o,
                    videoSegmentTimingInfoFn: l,
                    audioSegmentTimingInfoFn: d,
                    id3Fn: h,
                    captionsFn: u,
                    isEndOfTimeline: c,
                    endedTimelineFn: p,
                    dataFn: m,
                    doneFn: g,
                    onTransmuxerLog: f
                }),
                u = (s.key && !s.key.bytes && (a = [s.key], s.map && !s.map.bytes && s.map.key && s.map.key.resolvedUri === s.key.resolvedUri && a.push(s.map.key), o = e(P(t, {
                    uri: s.key.resolvedUri,
                    responseType: "arraybuffer"
                }), xh(s, a, i)), y.push(o)), s.map && !s.map.bytes && (!s.map.key || s.key && s.key.resolvedUri === s.map.key.resolvedUri || (l = e(P(t, {
                    uri: s.map.key.resolvedUri,
                    responseType: "arraybuffer"
                }), xh(s, [s.map.key], i)), y.push(l)), d = P(t, {
                    uri: s.map.resolvedUri,
                    responseType: "arraybuffer",
                    headers: Nd(s.map)
                }), {segment: _, finishProcessingFn: v} = [{segment: s, finishProcessingFn: i}][0], h = e(d, (e, t) => {
                    var e = Ch(e, t);
                    return e ? v(e, _) : (e = new Uint8Array(t.response), _.map.key ? (_.map.encryptedBytes = e, v(null, _)) : (_.map.bytes = e, void Ih(_, function (e) {
                        if (e) return e.xhr = t, e.status = t.status, v(e, _);
                        v(null, _)
                    })))
                }), y.push(h)), P(t, {
                    uri: s.part && s.part.resolvedUri || s.resolvedUri,
                    responseType: "arraybuffer",
                    headers: Nd(s)
                }));
            ({segment: b, finishProcessingFn: T, responseType: w} = {
                segment: s,
                finishProcessingFn: i,
                responseType: u.responseType
            });
            var b, T, w, S, E, c = e(u, (e, t) => {
                var e = Ch(e, t);
                return e ? T(e, b) : (e = "arraybuffer" !== w && t.responseText ? ih(t.responseText.substring(b.lastReachedChar || 0)) : t.response, b.stats = Eh(t), b.key ? b.encryptedBytes = new Uint8Array(e) : b.bytes = new Uint8Array(e), T(null, b))
            });
            c.addEventListener("progress", ({segment: S, progressFn: E} = [{segment: s, progressFn: n}][0], e => {
                var t = e.target;
                if (!t.aborted) return S.stats = P(S.stats, kh(e)), !S.stats.firstBytesReceivedAt && S.stats.bytesReceived && (S.stats.firstBytesReceivedAt = Date.now()), E(e, S)
            })), y.push(c);
            const k = {};
            return y.forEach(e => {
                var t, i;
                e.addEventListener("loadend", ({loadendState: t, abortFn: i} = [{loadendState: k, abortFn: r}][0], e => {
                    e.target.aborted && i && !t.calledAbortFn && (i(), t.calledAbortFn = !0)
                }))
            }), () => Sh(y)
        }, Nh = Hl("CodecUtils"), Rh = (e, t) => {
            t = t.attributes || {};
            return e && e.mediaGroups && e.mediaGroups.AUDIO && t.AUDIO && e.mediaGroups.AUDIO[t.AUDIO]
        }, Mh = function (e) {
            const s = {};
            return e.forEach(({mediaType: e, type: t, details: i}) => {
                s[e] = s[e] || [], s[e].push(Fn("" + t + i))
            }), Object.keys(s).forEach(function (e) {
                1 < s[e].length ? (Nh(`multiple ${e} codecs found as attributes: ${s[e].join(", ")}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`), s[e] = null) : s[e] = s[e][0]
            }), s
        }, Uh = Hl("PlaylistSelector"), Bh = function (e) {
            var t;
            if (e && e.playlist) return t = e.playlist, JSON.stringify({
                id: t.id,
                bandwidth: e.bandwidth,
                width: e.width,
                height: e.height,
                codecs: t.attributes && t.attributes.CODECS || ""
            })
        }, Fh = function (e, s) {
            const r = e.slice();
            e.sort(function (e, t) {
                var i = s(e, t);
                return 0 === i ? r.indexOf(e) - r.indexOf(t) : i
            })
        };

    function jh(o, t, l, d, h, u) {
        if (o) {
            var c = {bandwidth: t, width: l, height: d, limitRenditionByPlayerDimensions: h};
            let e = o.playlists,
                r = (_d.isAudioOnly(o) && (e = u.getAudioTrackPlaylists_(), c.audioOnly = !0), e.map(e => {
                    var t = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.width,
                        i = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.height,
                        s = e.attributes && e.attributes.BANDWIDTH;
                    return {bandwidth: s || window.Number.MAX_VALUE, width: t, height: i, playlist: e}
                })),
                n = (Fh(r, (e, t) => e.bandwidth - t.bandwidth), (r = r.filter(e => !_d.isIncompatible(e.playlist))).filter(e => _d.isEnabled(e.playlist)));
            o = (n = n.length ? n : r.filter(e => !_d.isDisabled(e.playlist))).filter(e => e.bandwidth * O.BANDWIDTH_VARIANCE < t);
            let a = o[o.length - 1];
            var p = o.filter(e => e.bandwidth === a.bandwidth)[0];
            if (!1 === h) {
                const g = p || n[0] || r[0];
                if (g && g.playlist) {
                    let e = p ? "bandwidthBestRep" : "sortedPlaylistReps";
                    return n[0] && (e = "enabledPlaylistReps"), Uh(`choosing ${Bh(g)} using ${e} with options`, c), g.playlist
                }
            } else {
                var m, h = o.filter(e => e.width && e.height),
                    o = (Fh(h, (e, t) => e.width - t.width), h.filter(e => e.width === l && e.height === d)),
                    o = (a = o[o.length - 1], o.filter(e => e.bandwidth === a.bandwidth)[0]);
                let t, i;
                o || (m = (t = h.filter(e => e.width > l || e.height > d)).filter(e => e.width === t[0].width && e.height === t[0].height), a = m[m.length - 1], i = m.filter(e => e.bandwidth === a.bandwidth)[0]);
                let s;
                u.leastPixelDiffSelector && (m = h.map(e => (e.pixelDiff = Math.abs(e.width - l) + Math.abs(e.height - d), e)), Fh(m, (e, t) => e.pixelDiff === t.pixelDiff ? t.bandwidth - e.bandwidth : e.pixelDiff - t.pixelDiff), s = m[0]);
                const g = s || i || o || p || n[0] || r[0];
                if (g && g.playlist) {
                    let e = "sortedPlaylistReps";
                    return s ? e = "leastPixelDiffRep" : i ? e = "resolutionPlusOneRep" : o ? e = "resolutionBestRep" : p ? e = "bandwidthBestRep" : n[0] && (e = "enabledPlaylistReps"), Uh(`choosing ${Bh(g)} using ${e} with options`, c), g.playlist
                }
            }
            return Uh("could not choose a playlist with options", c), null
        }
    }

    function qh() {
        var e = this.useDevicePixelRatio && window.devicePixelRatio || 1;
        return jh(this.playlists.main, this.systemBandwidth, parseInt(bh(this.tech_.el(), "width"), 10) * e, parseInt(bh(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions, this.playlistController_)
    }

    function Hh(e, t, i) {
        let s;
        var r;
        if (i && i.cues) for (s = i.cues.length; s--;) (r = i.cues[s]).startTime >= e && r.endTime <= t && i.removeCue(r)
    }

    const Vh = ({inbandTextTracks: e, metadataArray: t, timestampOffset: i, videoDuration: r}) => {
            if (t) {
                const a = window.WebKitDataCue || window.VTTCue, o = e.metadataTrack_;
                if (o && (t.forEach(e => {
                    const s = e.cueTime + i;
                    !("number" != typeof s || window.isNaN(s) || s < 0) && s < 1 / 0 && e.frames && e.frames.length && e.frames.forEach(e => {
                        var t, i = new a(s, s, e.value || e.url || e.data || "");
                        i.frame = e, i.value = e, t = i, Object.defineProperties(t.frame, {
                            id: {
                                get() {
                                    return T.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
                                }
                            }, value: {
                                get() {
                                    return T.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
                                }
                            }, privateData: {
                                get() {
                                    return T.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
                                }
                            }
                        }), o.addCue(i)
                    })
                }), o.cues) && o.cues.length) {
                    var s = o.cues, n = [];
                    for (let e = 0; e < s.length; e++) s[e] && n.push(s[e]);
                    const l = n.reduce((e, t) => {
                        var i = e[t.startTime] || [];
                        return i.push(t), e[t.startTime] = i, e
                    }, {}), d = Object.keys(l).sort((e, t) => Number(e) - Number(t));
                    d.forEach((e, t) => {
                        var e = l[e], i = isFinite(r) ? r : 0;
                        const s = Number(d[t + 1]) || i;
                        e.forEach(e => {
                            e.endTime = s
                        })
                    })
                }
            }
        }, zh = {
            id: "ID",
            class: "CLASS",
            startDate: "START-DATE",
            duration: "DURATION",
            endDate: "END-DATE",
            endOnNext: "END-ON-NEXT",
            plannedDuration: "PLANNED-DURATION",
            scte35Out: "SCTE35-OUT",
            scte35In: "SCTE35-IN"
        },
        $h = new Set(["id", "class", "startDate", "duration", "endDate", "endOnNext", "startTime", "endTime", "processDateRange"]),
        Wh = (e, t, i) => {
            e.metadataTrack_ || (e.metadataTrack_ = i.addRemoteTextTrack({
                kind: "metadata",
                label: "Timed Metadata"
            }, !1).track, T.browser.IS_ANY_SAFARI) || (e.metadataTrack_.inBandMetadataTrackDispatchType = t)
        }, Gh = e => "number" == typeof e && isFinite(e), Xh = e => {
            var {
                startOfSegment: t,
                duration: i,
                segment: s,
                part: r,
                playlist: {mediaSequence: n, id: a, segments: o = []},
                mediaIndex: l,
                partIndex: d,
                timeline: h
            } = e, o = o.length - 1;
            let u = "mediaIndex/partIndex increment";
            e.getMediaInfoForTime ? u = `getMediaInfoForTime (${e.getMediaInfoForTime})` : e.isSyncRequest && (u = "getSyncSegmentCandidate (isSyncRequest)"), e.independent && (u += " with independent " + e.independent);
            var c = "number" == typeof d, e = e.segment.uri ? "segment" : "pre-segment",
                p = c ? rd({preloadSegment: s}) - 1 : 0;
            return e + ` [${n + l}/${n + o}]` + (c ? ` part [${d}/${p}]` : "") + ` segment start/end [${s.start} => ${s.end}]` + (c ? ` part start/end [${r.start} => ${r.end}]` : "") + ` startOfSegment [${t}]` + ` duration [${i}]` + ` timeline [${h}]` + ` selected by [${u}]` + ` playlist [${a}]`
        }, Kh = e => e + "TimingInfo", Yh = (e, t) => e.length ? e.end(e.length - 1) : t, Qh = ({
                                                                                                    timelineChangeController: e,
                                                                                                    currentTimeline: t,
                                                                                                    segmentTimeline: i,
                                                                                                    loaderType: s,
                                                                                                    audioDisabled: r
                                                                                                }) => {
            return !(t === i || ("audio" === s ? (t = e.lastTimelineChange({type: "main"})) && t.to === i : "main" !== s || !r || (t = e.pendingTimelineChange({type: "audio"})) && t.to === i))
        }, Jh = ({segmentDuration: e, maxDuration: t}) => !!e && Math.round(e) > t + Yl, Zh = (e, t) => {
            var i, s, r;
            return "hls" === t && (t = (e => {
                let s = 0;
                return ["video", "audio"].forEach(function (t) {
                    t = e[t + "TimingInfo"];
                    if (t) {
                        var {start: t, end: i} = t;
                        let e;
                        "bigint" == typeof t || "bigint" == typeof i ? e = window.BigInt(i) - window.BigInt(t) : "number" == typeof t && "number" == typeof i && (e = i - t), "undefined" != typeof e && e > s && (s = e)
                    }
                }), s = "bigint" == typeof s && s < Number.MAX_SAFE_INTEGER ? Number(s) : s
            })({
                audioTimingInfo: e.audioTimingInfo,
                videoTimingInfo: e.videoTimingInfo
            })) && (i = e.playlist.targetDuration, s = Jh({
                segmentDuration: t,
                maxDuration: 2 * i
            }), r = Jh({
                segmentDuration: t,
                maxDuration: i
            }), t = `Segment with index ${e.mediaIndex} ` + `from playlist ${e.playlist.id} ` + `has a duration of ${t} ` + `when the reported duration is ${e.duration} ` + `and the target duration is ${i}. ` + "For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1", s || r) ? {
                severity: s ? "warn" : "info",
                message: t
            } : null
        };

    class eu extends T.EventTarget {
        constructor(e, t = 0) {
            if (super(), !e) throw new TypeError("Initialization settings are required");
            if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified");
            if (!e.mediaSource) throw new TypeError("No MediaSource specified");
            this.bandwidth = e.bandwidth, this.throughput = {
                rate: 0,
                count: 0
            }, this.roundTrip = NaN, this.resetStats_(), this.mediaIndex = null, this.partIndex = null, this.hasPlayed_ = e.hasPlayed, this.currentTime_ = e.currentTime, this.seekable_ = e.seekable, this.seeking_ = e.seeking, this.duration_ = e.duration, this.mediaSource_ = e.mediaSource, this.vhs_ = e.vhs, this.loaderType_ = e.loaderType, this.currentMediaInfo_ = void 0, this.startingMediaInfo_ = void 0, this.segmentMetadataTrack_ = e.segmentMetadataTrack, this.goalBufferLength_ = e.goalBufferLength, this.sourceType_ = e.sourceType, this.sourceUpdater_ = e.sourceUpdater, this.inbandTextTracks_ = e.inbandTextTracks, this.state_ = "INIT", this.timelineChangeController_ = e.timelineChangeController, this.shouldSaveSegmentTimingInfo_ = !0, this.parse708captions_ = e.parse708captions, this.useDtsForTimestampOffset_ = e.useDtsForTimestampOffset, this.calculateTimestampOffsetForEachSegment_ = e.calculateTimestampOffsetForEachSegment, this.captionServices_ = e.captionServices, this.exactManifestTimings = e.exactManifestTimings, this.addMetadataToTextTrack = e.addMetadataToTextTrack, this.checkBufferTimeout_ = null, this.error_ = void 0, this.currentTimeline_ = -1, this.pendingSegment_ = null, this.xhrOptions_ = null, this.pendingSegments_ = [], this.audioDisabled_ = !1, this.isPendingTimestampOffset_ = !1, this.gopBuffer_ = [], this.timeMapping_ = 0, this.safeAppend_ = !1, this.appendInitSegment_ = {
                audio: !0,
                video: !0
            }, this.playlistOfLastInitSegment_ = {
                audio: null,
                video: null
            }, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_ = {
                id3: [],
                caption: []
            }, this.waitingOnRemove_ = !1, this.quotaExceededErrorRetryTimeout_ = null, this.activeInitSegmentId_ = null, this.initSegments_ = {}, this.cacheEncryptionKeys_ = e.cacheEncryptionKeys, this.keyCache_ = {}, this.decrypter_ = e.decrypter, this.syncController_ = e.syncController, this.syncPoint_ = {
                segmentIndex: 0,
                time: 0
            }, this.transmuxer_ = this.createTransmuxer_(), this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate"), this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_), this.mediaSource_.addEventListener("sourceopen", () => {
                this.isEndOfStream_() || (this.ended_ = !1)
            }), this.fetchAtBuffer_ = !1, this.replaceSegmentsUntil_ = -1, this.logger_ = Hl(`SegmentLoader[${this.loaderType_}]`), Object.defineProperty(this, "state", {
                get() {
                    return this.state_
                }, set(e) {
                    e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e, this.trigger("statechange"))
                }
            }), this.sourceUpdater_.on("ready", () => {
                this.hasEnoughInfoToAppend_() && this.processCallQueue_()
            }), "main" === this.loaderType_ && this.timelineChangeController_.on("pendingtimelinechange", () => {
                this.hasEnoughInfoToAppend_() && this.processCallQueue_()
            }), "audio" === this.loaderType_ && this.timelineChangeController_.on("timelinechange", () => {
                this.hasEnoughInfoToLoad_() && this.processLoadQueue_(), this.hasEnoughInfoToAppend_() && this.processCallQueue_()
            })
        }

        createTransmuxer_() {
            return fh({
                remux: !1,
                alignGopsAtEnd: this.safeAppend_,
                keepOriginalTimestamps: !0,
                parse708captions: this.parse708captions_,
                captionServices: this.captionServices_
            })
        }

        resetStats_() {
            this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0, this.mediaAppends = 0
        }

        dispose() {
            this.trigger("dispose"), this.state = "DISPOSED", this.pause(), this.abort_(), this.transmuxer_ && this.transmuxer_.terminate(), this.resetStats_(), this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_), this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_), this.off()
        }

        setAudio(e) {
            this.audioDisabled_ = !e, e ? this.appendInitSegment_.audio = !0 : this.sourceUpdater_.removeAudio(0, this.duration_())
        }

        abort() {
            "WAITING" !== this.state ? this.pendingSegment_ && (this.pendingSegment_ = null) : (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_())
        }

        abort_() {
            this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_), this.waitingOnRemove_ = !1, window.clearTimeout(this.quotaExceededErrorRetryTimeout_), this.quotaExceededErrorRetryTimeout_ = null
        }

        checkForAbort_(e) {
            return "APPENDING" !== this.state || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e : (this.state = "READY", !0)
        }

        error(e) {
            return "undefined" != typeof e && (this.logger_("error occurred:", e), this.error_ = e), this.pendingSegment_ = null, this.error_
        }

        endOfStream() {
            this.ended_ = !0, this.transmuxer_ && gh(this.transmuxer_), this.gopBuffer_.length = 0, this.pause(), this.trigger("ended")
        }

        buffered_() {
            var e = this.getMediaInfo_();
            if (!this.sourceUpdater_ || !e) return Vl();
            if ("main" === this.loaderType_) {
                var {hasAudio: e, hasVideo: t, isMuxed: i} = e;
                if (t && e && !this.audioDisabled_ && !i) return this.sourceUpdater_.buffered();
                if (t) return this.sourceUpdater_.videoBuffered()
            }
            return this.sourceUpdater_.audioBuffered()
        }

        initSegmentForMap(e, t = !1) {
            if (!e) return null;
            var i = Bd(e);
            let s = this.initSegments_[i];
            return t && !s && e.bytes && (this.initSegments_[i] = s = {
                resolvedUri: e.resolvedUri,
                byterange: e.byterange,
                bytes: e.bytes,
                tracks: e.tracks,
                timescales: e.timescales
            }), s || e
        }

        segmentKey(e, t = !1) {
            if (!e) return null;
            var i = Fd(e);
            let s = this.keyCache_[i];
            this.cacheEncryptionKeys_ && t && !s && e.bytes && (this.keyCache_[i] = s = {
                resolvedUri: e.resolvedUri,
                bytes: e.bytes
            });
            t = {resolvedUri: (s || e).resolvedUri};
            return s && (t.bytes = s.bytes), t
        }

        couldBeginLoading_() {
            return this.playlist_ && !this.paused()
        }

        load() {
            if (this.monitorBuffer_(), this.playlist_) return "INIT" === this.state && this.couldBeginLoading_() ? this.init_() : void (!this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY"))
        }

        init_() {
            return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
        }

        playlist(t, i = {}) {
            if (t) {
                var s, r = this.playlist_, n = this.pendingSegment_;
                this.playlist_ = t, this.xhrOptions_ = i, "INIT" === this.state && (t.syncInfo = {
                    mediaSequence: t.mediaSequence,
                    time: 0
                }, "main" === this.loaderType_) && this.syncController_.setDateTimeMappingForStart(t);
                let e = null;
                if (r && (r.id ? e = r.id : r.uri && (e = r.uri)), this.logger_(`playlist update [${e} => ${t.id || t.uri}]`), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
                r && r.uri === t.uri ? (i = t.mediaSequence - r.mediaSequence, this.logger_(`live window shift [${i}]`), null !== this.mediaIndex && (this.mediaIndex -= i, this.mediaIndex < 0 ? (this.mediaIndex = null, this.partIndex = null) : (s = this.playlist_.segments[this.mediaIndex], !this.partIndex || s.parts && s.parts.length && s.parts[this.partIndex] || (s = this.mediaIndex, this.logger_(`currently processing part (index ${this.partIndex}) no longer exists.`), this.resetLoader(), this.mediaIndex = s))), n && (n.mediaIndex -= i, n.mediaIndex < 0 ? (n.mediaIndex = null, n.partIndex = null) : (0 <= n.mediaIndex && (n.segment = t.segments[n.mediaIndex]), 0 <= n.partIndex && n.segment.parts && (n.part = n.segment.parts[n.partIndex]))), this.syncController_.saveExpiredSegmentInfo(r, t)) : (null !== this.mediaIndex && (!t.endList && "number" == typeof t.partTargetDuration ? this.resetLoader() : this.resyncLoader()), this.currentMediaInfo_ = void 0, this.trigger("playlistupdate"))
            }
        }

        pause() {
            this.checkBufferTimeout_ && (window.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
        }

        paused() {
            return null === this.checkBufferTimeout_
        }

        resetLoaderProperties() {
            this.ended_ = !1, this.activeInitSegmentId_ = null, this.appendInitSegment_ = {audio: !0, video: !0}
        }

        resetEverything(e) {
            this.resetLoaderProperties(), this.resetLoader(), this.remove(0, 1 / 0, e), this.transmuxer_ && (this.transmuxer_.postMessage({action: "clearAllMp4Captions"}), this.transmuxer_.postMessage({action: "reset"}))
        }

        resetLoader() {
            this.fetchAtBuffer_ = !1, this.resyncLoader()
        }

        resyncLoader() {
            this.transmuxer_ && gh(this.transmuxer_), this.mediaIndex = null, this.partIndex = null, this.syncPoint_ = null, this.isPendingTimestampOffset_ = !1, this.callQueue_ = [], this.loadQueue_ = [], this.metadataQueue_.id3 = [], this.metadataQueue_.caption = [], this.abort(), this.transmuxer_ && this.transmuxer_.postMessage({action: "clearParsedMp4Captions"})
        }

        remove(t, i, s = () => {
        }, r = !1) {
            if ((i = i === 1 / 0 ? this.duration_() : i) <= t) this.logger_("skipping remove because end ${end} is <= start ${start}"); else if (this.sourceUpdater_ && this.getMediaInfo_()) {
                let e = 1;
                var n = () => {
                    0 === --e && s()
                };
                !r && this.audioDisabled_ || (e++, this.sourceUpdater_.removeAudio(t, i, n)), !r && "main" !== this.loaderType_ || (this.gopBuffer_ = ((t, i, e, s) => {
                    var r = Math.ceil((i - s) * Fl), n = Math.ceil((e - s) * Fl), i = t.slice();
                    let a = t.length;
                    for (; a-- && !(t[a].pts <= n);) ;
                    if (-1 !== a) {
                        let e = a + 1;
                        for (; e-- && !(t[e].pts <= r);) ;
                        e = Math.max(e, 0), i.splice(e, a - e + 1)
                    }
                    return i
                })(this.gopBuffer_, t, i, this.timeMapping_), e++, this.sourceUpdater_.removeVideo(t, i, n));
                for (const a in this.inbandTextTracks_) Hh(t, i, this.inbandTextTracks_[a]);
                Hh(t, i, this.segmentMetadataTrack_), n()
            } else this.logger_("skipping remove because no source updater or starting media info")
        }

        monitorBuffer_() {
            this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = window.setTimeout(this.monitorBufferTick_.bind(this), 1)
        }

        monitorBufferTick_() {
            "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = window.setTimeout(this.monitorBufferTick_.bind(this), 500)
        }

        fillBuffer_() {
            var e;
            this.sourceUpdater_.updating() || (e = this.chooseNextRequest_()) && ("number" == typeof e.timestampOffset && (this.isPendingTimestampOffset_ = !1, this.timelineChangeController_.pendingTimelineChange({
                type: this.loaderType_,
                from: this.currentTimeline_,
                to: e.timeline
            })), this.loadSegment_(e))
        }

        isEndOfStream_(e = this.mediaIndex, t = this.playlist_, i = this.partIndex) {
            var s;
            return !(!t || !this.mediaSource_) && (s = "number" == typeof e && t.segments[e], e = e + 1 === t.segments.length, i = !s || !s.parts || i + 1 === s.parts.length, t.endList) && "open" === this.mediaSource_.readyState && e && i
        }

        chooseNextRequest_() {
            var e = this.buffered_(), t = Wl(e) || 0, e = Gl(e, this.currentTime_()), i = !this.hasPlayed_() && 1 <= e,
                s = e >= this.goalBufferLength_(), r = this.playlist_.segments;
            if (!r.length || i || s) return null;
            this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_());
            i = {
                partIndex: null,
                mediaIndex: null,
                startOfSegment: null,
                playlist: this.playlist_,
                isSyncRequest: Boolean(!this.syncPoint_)
            }, i.isSyncRequest ? i.mediaIndex = function (t, i, s) {
                i = i || [];
                var r = [];
                let n = 0;
                for (let e = 0; e < i.length; e++) {
                    var a = i[e];
                    if (t === a.timeline && (r.push(e), (n += a.duration) > s)) return e
                }
                return 0 === r.length ? 0 : r[r.length - 1]
            }(this.currentTimeline_, r, t) : null !== this.mediaIndex ? (s = r[this.mediaIndex], a = "number" == typeof this.partIndex ? this.partIndex : -1, i.startOfSegment = s.end || t, s.parts && s.parts[a + 1] ? (i.mediaIndex = this.mediaIndex, i.partIndex = a + 1) : i.mediaIndex = this.mediaIndex + 1) : ({
                segmentIndex: s,
                startTime: a,
                partIndex: o
            } = _d.getMediaInfoForTime({
                exactManifestTimings: this.exactManifestTimings,
                playlist: this.playlist_,
                currentTime: this.fetchAtBuffer_ ? t : this.currentTime_(),
                startingPartIndex: this.syncPoint_.partIndex,
                startingSegmentIndex: this.syncPoint_.segmentIndex,
                startTime: this.syncPoint_.time
            }), i.getMediaInfoForTime = this.fetchAtBuffer_ ? "bufferedEnd " + t : "currentTime " + this.currentTime_(), i.mediaIndex = s, i.startOfSegment = a, i.partIndex = o), t = r[i.mediaIndex];
            let n = t && "number" == typeof i.partIndex && t.parts && t.parts[i.partIndex];
            if (!t || "number" == typeof i.partIndex && !n) return null;
            "number" != typeof i.partIndex && t.parts && (i.partIndex = 0, n = t.parts[0]);
            var a, o,
                s = this.vhs_.playlists && this.vhs_.playlists.main && this.vhs_.playlists.main.independentSegments || this.playlist_.independentSegments,
                e = (e || !n || s || n.independent || (0 === i.partIndex ? (o = (a = r[i.mediaIndex - 1]).parts && a.parts.length && a.parts[a.parts.length - 1]) && o.independent && (--i.mediaIndex, i.partIndex = a.parts.length - 1, i.independent = "previous segment") : t.parts[i.partIndex - 1].independent && (--i.partIndex, i.independent = "previous part")), this.mediaSource_ && "ended" === this.mediaSource_.readyState);
            return i.mediaIndex >= r.length - 1 && e && !this.seeking_() ? null : this.generateSegmentInfo_(i)
        }

        generateSegmentInfo_(e) {
            var {
                    independent: e,
                    playlist: t,
                    mediaIndex: i,
                    startOfSegment: s,
                    isSyncRequest: r,
                    partIndex: n,
                    forceTimestampOffset: a,
                    getMediaInfoForTime: o
                } = e, l = t.segments[i], d = "number" == typeof n && l.parts[n], i = {
                    requestId: "segment-loader-" + Math.random(),
                    uri: d && d.resolvedUri || l.resolvedUri,
                    mediaIndex: i,
                    partIndex: d ? n : null,
                    isSyncRequest: r,
                    startOfSegment: s,
                    playlist: t,
                    bytes: null,
                    encryptedBytes: null,
                    timestampOffset: null,
                    timeline: l.timeline,
                    duration: d && d.duration || l.duration,
                    segment: l,
                    part: d,
                    byteLength: 0,
                    transmuxer: this.transmuxer_,
                    getMediaInfoForTime: o,
                    independent: e
                }, n = "undefined" != typeof a ? a : this.isPendingTimestampOffset_,
                r = (i.timestampOffset = this.timestampOffsetForSegment_({
                    segmentTimeline: l.timeline,
                    currentTimeline: this.currentTimeline_,
                    startOfSegment: s,
                    buffered: this.buffered_(),
                    calculateTimestampOffsetForEachSegment: this.calculateTimestampOffsetForEachSegment_,
                    overrideCheck: n
                }), Wl(this.sourceUpdater_.audioBuffered()));
            return "number" == typeof r && (i.audioAppendStart = r - this.sourceUpdater_.audioTimestampOffset()), this.sourceUpdater_.videoBuffered().length && (i.gopsToAlignWith = ((e, t, i) => {
                if ("undefined" == typeof t || null === t || !e.length) return [];
                var s = Math.ceil((t - i + 3) * Fl);
                let r;
                for (r = 0; r < e.length && !(e[r].pts > s); r++) ;
                return e.slice(r)
            })(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)), i
        }

        timestampOffsetForSegment_(e) {
            return {
                segmentTimeline: e,
                currentTimeline: t,
                startOfSegment: i,
                buffered: s,
                calculateTimestampOffsetForEachSegment: r,
                overrideCheck: n
            } = [e][0], r ? Yh(s, i) : n || e !== t ? e < t ? i : Yh(s, i) : null;
            var t, i, s, r, n
        }

        earlyAbortWhenNeeded_(t) {
            if (!this.vhs_.tech_.paused() && this.xhrOptions_.timeout && this.playlist_.attributes.BANDWIDTH && !(Date.now() - (t.firstBytesReceivedAt || Date.now()) < 1e3)) {
                var e = this.currentTime_(), i = t.bandwidth, s = this.pendingSegment_.duration,
                    t = _d.estimateSegmentRequestTime(s, i, this.playlist_, t.bytesReceived),
                    r = ([r, n, a = 1] = [this.buffered_(), e, this.vhs_.tech_.playbackRate()], ((r.length ? r.end(r.length - 1) : 0) - n) / a - 1);
                if (!(t <= r)) {
                    var n = function (e) {
                        const {
                            main: t,
                            currentTime: i,
                            bandwidth: s,
                            duration: r,
                            segmentDuration: n,
                            timeUntilRebuffer: a,
                            currentTimeline: o,
                            syncController: l
                        } = e;
                        e = t.playlists.filter(e => !_d.isIncompatible(e));
                        let d = e.filter(_d.isEnabled);
                        var e = (d = d.length ? d : e.filter(e => !_d.isDisabled(e))).filter(_d.hasAttribute.bind(null, "BANDWIDTH")).map(e => {
                            var t = l.getSyncPoint(e, r, o, i) ? 1 : 2;
                            return {playlist: e, rebufferingImpact: _d.estimateSegmentRequestTime(n, s, e) * t - a}
                        }), h = e.filter(e => e.rebufferingImpact <= 0);
                        return Fh(h, (e, t) => Th(t.playlist, e.playlist)), h.length ? h[0] : (Fh(e, (e, t) => e.rebufferingImpact - t.rebufferingImpact), e[0] || null)
                    }({
                        main: this.vhs_.playlists.main,
                        currentTime: e,
                        bandwidth: i,
                        duration: this.duration_(),
                        segmentDuration: s,
                        timeUntilRebuffer: r,
                        currentTimeline: this.currentTimeline_,
                        syncController: this.syncController_
                    });
                    if (n) {
                        var a = t - r - n.rebufferingImpact;
                        let e = .5;
                        r <= Yl && (e = 1), !n.playlist || n.playlist.uri === this.playlist_.uri || a < e || (this.bandwidth = n.playlist.attributes.BANDWIDTH * O.BANDWIDTH_VARIANCE + 1, this.trigger("earlyabort"))
                    }
                }
            }
        }

        handleAbort_(e) {
            this.logger_("Aborting " + Xh(e)), this.mediaRequestsAborted += 1
        }

        handleProgress_(e, t) {
            this.earlyAbortWhenNeeded_(t.stats), this.checkForAbort_(t.requestId) || this.trigger("progress")
        }

        handleTrackInfo_(e, t) {
            this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId) || this.checkForIllegalMediaSwitch(t) || (function (t, i) {
                if (!t && !i || !t && i || t && !i) return !1;
                if (t !== i) {
                    var s = Object.keys(t).sort(), r = Object.keys(i).sort();
                    if (s.length !== r.length) return !1;
                    for (let e = 0; e < s.length; e++) {
                        var n = s[e];
                        if (n !== r[e]) return !1;
                        if (t[n] !== i[n]) return !1
                    }
                }
                return !0
            }(this.currentMediaInfo_, t = t || {}) || (this.appendInitSegment_ = {
                audio: !0,
                video: !0
            }, this.startingMediaInfo_ = t, this.currentMediaInfo_ = t, this.logger_("trackinfo update", t), this.trigger("trackinfo")), this.checkForAbort_(e.requestId)) || (this.pendingSegment_.trackInfo = t, this.hasEnoughInfoToAppend_() && this.processCallQueue_())
        }

        handleTimingInfo_(e, t, i, s) {
            var r;
            this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId) || ((e = this.pendingSegment_)[r = Kh(t)] = e[r] || {}, e[r][i] = s, this.logger_(`timinginfo: ${t} - ${i} - ` + s), this.hasEnoughInfoToAppend_() && this.processCallQueue_())
        }

        handleCaptions_(e, t) {
            if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) if (0 === t.length) this.logger_("SegmentLoader received no captions from a caption event"); else if (this.pendingSegment_.hasAppendedData_) {
                const c = null === this.sourceUpdater_.videoTimestampOffset() ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset(),
                    p = {};
                t.forEach(e => {
                    p[e.stream] = p[e.stream] || {startTime: 1 / 0, captions: [], endTime: 0};
                    var t = p[e.stream];
                    t.startTime = Math.min(t.startTime, e.startTime + c), t.endTime = Math.max(t.endTime, e.endTime + c), t.captions.push(e)
                }), Object.keys(p).forEach(e => {
                    var {startTime: t, endTime: i, captions: s} = p[e], r = this.inbandTextTracks_,
                        n = (this.logger_(`adding cues from ${t} -> ${i} for ` + e), r), a = this.vhs_.tech_, o = e;
                    if (!n[o]) {
                        a.trigger({type: "usage", name: "vhs-608"});
                        let s = o;
                        /^cc708_/.test(o) && (s = "SERVICE" + o.split("_")[1]);
                        var l = a.textTracks().getTrackById(s);
                        if (l) n[o] = l; else {
                            let e = o, t = o, i = !1;
                            l = (a.options_.vhs && a.options_.vhs.captionServices || {})[s];
                            l && (e = l.label, t = l.language, i = l.default), n[o] = a.addRemoteTextTrack({
                                kind: "captions",
                                id: s,
                                default: i,
                                label: e,
                                language: t
                            }, !1).track
                        }
                    }
                    Hh(t, i, r[e]);
                    var {inbandTextTracks: d, captionArray: l, timestampOffset: h} = {
                        captionArray: s,
                        inbandTextTracks: r,
                        timestampOffset: c
                    };
                    if (l) {
                        const u = window.WebKitDataCue || window.VTTCue;
                        l.forEach(i => {
                            const s = i.stream;
                            i.content ? i.content.forEach(e => {
                                var t = new u(i.startTime + h, i.endTime + h, e.text);
                                t.line = e.line, t.align = "left", t.position = e.position, t.positionAlign = "line-left", d[s].addCue(t)
                            }) : d[s].addCue(new u(i.startTime + h, i.endTime + h, i.text))
                        })
                    }
                }), this.transmuxer_ && this.transmuxer_.postMessage({action: "clearParsedMp4Captions"})
            } else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t))
        }

        handleId3_(e, t, i) {
            this.earlyAbortWhenNeeded_(e.stats), this.checkForAbort_(e.requestId) || (this.pendingSegment_.hasAppendedData_ ? this.addMetadataToTextTrack(i, t, this.duration_()) : this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i)))
        }

        processMetadataQueue_() {
            this.metadataQueue_.id3.forEach(e => e()), this.metadataQueue_.caption.forEach(e => e()), this.metadataQueue_.id3 = [], this.metadataQueue_.caption = []
        }

        processCallQueue_() {
            var e = this.callQueue_;
            this.callQueue_ = [], e.forEach(e => e())
        }

        processLoadQueue_() {
            var e = this.loadQueue_;
            this.loadQueue_ = [], e.forEach(e => e())
        }

        hasEnoughInfoToLoad_() {
            var e;
            return "audio" !== this.loaderType_ || !(!(e = this.pendingSegment_) || this.getCurrentMediaInfo_() && Qh({
                timelineChangeController: this.timelineChangeController_,
                currentTimeline: this.currentTimeline_,
                segmentTimeline: e.timeline,
                loaderType: this.loaderType_,
                audioDisabled: this.audioDisabled_
            }))
        }

        getCurrentMediaInfo_(e = this.pendingSegment_) {
            return e && e.trackInfo || this.currentMediaInfo_
        }

        getMediaInfo_(e = this.pendingSegment_) {
            return this.getCurrentMediaInfo_(e) || this.startingMediaInfo_
        }

        getPendingSegmentPlaylist() {
            return this.pendingSegment_ ? this.pendingSegment_.playlist : null
        }

        hasEnoughInfoToAppend_() {
            var e, t, i, s;
            return !!this.sourceUpdater_.ready() && !(this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_ || (e = this.pendingSegment_, t = this.getCurrentMediaInfo_(), !e) || !t || ({
                hasAudio: t,
                hasVideo: i,
                isMuxed: s
            } = t, i && !e.videoTimingInfo) || t && !this.audioDisabled_ && !s && !e.audioTimingInfo || Qh({
                timelineChangeController: this.timelineChangeController_,
                currentTimeline: this.currentTimeline_,
                segmentTimeline: e.timeline,
                loaderType: this.loaderType_,
                audioDisabled: this.audioDisabled_
            }))
        }

        handleData_(t, e) {
            if (this.earlyAbortWhenNeeded_(t.stats), !this.checkForAbort_(t.requestId)) if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) this.callQueue_.push(this.handleData_.bind(this, t, e)); else {
                var i = this.pendingSegment_;
                if (this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.part || i.segment), "closed" !== this.mediaSource_.readyState) {
                    if (t.map && (t.map = this.initSegmentForMap(t.map, !0), i.segment.map = t.map), t.key && this.segmentKey(t.key, !0), i.isFmp4 = t.isFmp4, i.timingInfo = i.timingInfo || {}, i.isFmp4) this.trigger("fmp4"), i.timingInfo.start = i[Kh(e.type)].start; else {
                        t = this.getCurrentMediaInfo_(), t = "main" === this.loaderType_ && t && t.hasVideo;
                        let e;
                        t && (e = i.videoTimingInfo.start), i.timingInfo.start = this.trueSegmentStart_({
                            currentStart: i.timingInfo.start,
                            playlist: i.playlist,
                            mediaIndex: i.mediaIndex,
                            currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                            useVideoTimingInfo: t,
                            firstVideoFrameTimeForData: e,
                            videoTimingInfo: i.videoTimingInfo,
                            audioTimingInfo: i.audioTimingInfo
                        })
                    }
                    if (this.updateAppendInitSegmentStatus(i, e.type), this.updateSourceBufferTimestampOffset_(i), i.isSyncRequest) {
                        this.updateTimingInfoEnd_(i), this.syncController_.saveSegmentTimingInfo({
                            segmentInfo: i,
                            shouldSaveTimelineMapping: "main" === this.loaderType_
                        });
                        t = this.chooseNextRequest_();
                        if (t.mediaIndex !== i.mediaIndex || t.partIndex !== i.partIndex) return void this.logger_("sync segment was incorrect, not appending");
                        this.logger_("sync segment was correct, appending")
                    }
                    i.hasAppendedData_ = !0, this.processMetadataQueue_(), this.appendData_(i, e)
                }
            }
        }

        updateAppendInitSegmentStatus(e, t) {
            "main" !== this.loaderType_ || "number" != typeof e.timestampOffset || e.changedTimestampOffset || (this.appendInitSegment_ = {
                audio: !0,
                video: !0
            }), this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0)
        }

        getInitSegmentAndUpdateState_({type: e, initSegment: t, map: i, playlist: s}) {
            if (i) {
                var r = Bd(i);
                if (this.activeInitSegmentId_ === r) return null;
                t = this.initSegmentForMap(i, !0).bytes, this.activeInitSegmentId_ = r
            }
            return t && this.appendInitSegment_[e] ? (this.playlistOfLastInitSegment_[e] = s, this.appendInitSegment_[e] = !1, this.activeInitSegmentId_ = null, t) : null
        }

        handleQuotaExceededError_({segmentInfo: e, type: t, bytes: i}, s) {
            var r = this.sourceUpdater_.audioBuffered(), n = this.sourceUpdater_.videoBuffered(),
                a = (1 < r.length && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + ed(r).join(", ")), 1 < n.length && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + ed(n).join(", ")), r.length ? r.start(0) : 0),
                o = r.length ? r.end(r.length - 1) : 0, l = n.length ? n.start(0) : 0,
                d = n.length ? n.end(n.length - 1) : 0;
            o - a <= 1 && d - l <= 1 ? (this.logger_("On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. " + `Appended byte length: ${i.byteLength}, ` + `audio buffer: ${ed(r).join(", ")}, ` + `video buffer: ${ed(n).join(", ")}, `), this.error({
                message: "Quota exceeded error with append of a single segment of content",
                excludeUntil: 1 / 0
            }), this.trigger("error")) : (this.waitingOnRemove_ = !0, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, {
                segmentInfo: e,
                type: t,
                bytes: i
            })), o = this.currentTime_() - 1, this.logger_("On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to " + o), this.remove(0, o, () => {
                this.logger_("On QUOTA_EXCEEDED_ERR, retrying append in 1s"), this.waitingOnRemove_ = !1, this.quotaExceededErrorRetryTimeout_ = window.setTimeout(() => {
                    this.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"), this.quotaExceededErrorRetryTimeout_ = null, this.processCallQueue_()
                }, 1e3)
            }, !0))
        }

        handleAppendError_({segmentInfo: e, type: t, bytes: i}, s) {
            s && (22 === s.code ? this.handleQuotaExceededError_({
                segmentInfo: e,
                type: t,
                bytes: i
            }) : (this.logger_("Received non QUOTA_EXCEEDED_ERR on append", s), this.error(`${t} append of ${i.length}b failed for segment ` + `#${e.mediaIndex} in playlist ` + e.playlist.id), this.trigger("appenderror")))
        }

        appendToSourceBuffer_({segmentInfo: e, type: t, initSegment: i, data: s, bytes: r}) {
            if (!r) {
                var n = [s];
                let e = s.byteLength;
                i && (n.unshift(i), e += i.byteLength), r = (e => {
                    let t = 0, i;
                    return e.bytes && (i = new Uint8Array(e.bytes), e.segments.forEach(e => {
                        i.set(e, t), t += e.byteLength
                    })), i
                })({bytes: e, segments: n})
            }
            this.sourceUpdater_.appendBuffer({
                segmentInfo: e,
                type: t,
                bytes: r
            }, this.handleAppendError_.bind(this, {segmentInfo: e, type: t, bytes: r}))
        }

        handleSegmentTimingInfo_(e, t, i) {
            this.pendingSegment_ && t === this.pendingSegment_.requestId && ((t = this.pendingSegment_.segment)[e = e + "TimingInfo"] || (t[e] = {}), t[e].transmuxerPrependedSeconds = i.prependedContentDuration || 0, t[e].transmuxedPresentationStart = i.start.presentation, t[e].transmuxedDecodeStart = i.start.decode, t[e].transmuxedPresentationEnd = i.end.presentation, t[e].transmuxedDecodeEnd = i.end.decode, t[e].baseMediaDecodeTime = i.baseMediaDecodeTime)
        }

        appendData_(e, t) {
            var {type: i, data: s} = t;
            s && s.byteLength && ("audio" === i && this.audioDisabled_ || (t = this.getInitSegmentAndUpdateState_({
                type: i,
                initSegment: t.initSegment,
                playlist: e.playlist,
                map: e.isFmp4 ? e.segment.map : null
            }), this.appendToSourceBuffer_({segmentInfo: e, type: i, initSegment: t, data: s})))
        }

        loadSegment_(t) {
            this.state = "WAITING", this.pendingSegment_ = t, this.trimBackBuffer_(t), "number" == typeof t.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({action: "clearAllMp4Captions"}), this.hasEnoughInfoToLoad_() ? this.updateTransmuxerAndRequestSegment_(t) : this.loadQueue_.push(() => {
                var e = _i({}, t, {forceTimestampOffset: !0});
                _i(t, this.generateSegmentInfo_(e)), this.isPendingTimestampOffset_ = !1, this.updateTransmuxerAndRequestSegment_(t)
            })
        }

        updateTransmuxerAndRequestSegment_(s) {
            this.shouldUpdateTransmuxerTimestampOffset_(s.timestampOffset) && (this.gopBuffer_.length = 0, s.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({action: "reset"}), this.transmuxer_.postMessage({
                action: "setTimestampOffset",
                timestampOffset: s.timestampOffset
            }));
            var e = this.createSimplifiedSegmentObj_(s), t = this.isEndOfStream_(s.mediaIndex, s.playlist, s.partIndex),
                i = null !== this.mediaIndex, r = s.timeline !== this.currentTimeline_ && 0 < s.timeline,
                t = t || i && r;
            this.logger_("Requesting " + Xh(s)), e.map && !e.map.bytes && (this.logger_("going to request init segment."), this.appendInitSegment_ = {
                video: !0,
                audio: !0
            }), s.abortRequests = Oh({
                xhr: this.vhs_.xhr,
                xhrOptions: this.xhrOptions_,
                decryptionWorker: this.decrypter_,
                segment: e,
                abortFn: this.handleAbort_.bind(this, s),
                progressFn: this.handleProgress_.bind(this),
                trackInfoFn: this.handleTrackInfo_.bind(this),
                timingInfoFn: this.handleTimingInfo_.bind(this),
                videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", s.requestId),
                audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", s.requestId),
                captionsFn: this.handleCaptions_.bind(this),
                isEndOfTimeline: t,
                endedTimelineFn: () => {
                    this.logger_("received endedtimeline callback")
                },
                id3Fn: this.handleId3_.bind(this),
                dataFn: this.handleData_.bind(this),
                doneFn: this.segmentRequestFinished_.bind(this),
                onTransmuxerLog: ({message: e, level: t, stream: i}) => {
                    this.logger_(Xh(s) + ` logged from transmuxer stream ${i} as a ${t}: ` + e)
                }
            })
        }

        trimBackBuffer_(e) {
            var t = ((e, t, i) => {
                let s = t - O.BACK_BUFFER_LENGTH;
                return e.length && (s = Math.max(s, e.start(0))), Math.min(t - i, s)
            })(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
            0 < t && this.remove(0, t)
        }

        createSimplifiedSegmentObj_(e) {
            var t = e.segment, i = e.part, i = {
                resolvedUri: (i || t).resolvedUri,
                byterange: (i || t).byterange,
                requestId: e.requestId,
                transmuxer: e.transmuxer,
                audioAppendStart: e.audioAppendStart,
                gopsToAlignWith: e.gopsToAlignWith,
                part: e.part
            }, s = e.playlist.segments[e.mediaIndex - 1];
            return s && s.timeline === t.timeline && (s.videoTimingInfo ? i.baseStartTime = s.videoTimingInfo.transmuxedDecodeEnd : s.audioTimingInfo && (i.baseStartTime = s.audioTimingInfo.transmuxedDecodeEnd)), t.key && (s = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]), i.key = this.segmentKey(t.key), i.key.iv = s), t.map && (i.map = this.initSegmentForMap(t.map)), i
        }

        saveTransferStats_(e) {
            this.mediaRequests += 1, e && (this.mediaBytesTransferred += e.bytesReceived, this.mediaTransferDuration += e.roundTripTime)
        }

        saveBandwidthRelatedStats_(e, t) {
            this.pendingSegment_.byteLength = t.bytesReceived, e < 1 / 60 ? this.logger_("Ignoring segment's bandwidth because its duration of " + e + " is less than the min to record " + 1 / 60) : (this.bandwidth = t.bandwidth, this.roundTrip = t.roundTripTime)
        }

        handleTimeout_() {
            this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, this.trigger("bandwidthupdate"), this.trigger("timeout")
        }

        segmentRequestFinished_(e, t, i) {
            if (this.callQueue_.length) this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i)); else if (this.saveTransferStats_(t.stats), this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId) {
                if (e) return this.pendingSegment_ = null, this.state = "READY", e.code === wh.ABORTED ? void 0 : (this.pause(), e.code === wh.TIMEOUT ? void this.handleTimeout_() : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error")));
                e = this.pendingSegment_;
                this.saveBandwidthRelatedStats_(e.duration, t.stats), e.endOfAllRequests = t.endOfAllRequests, i.gopInfo && (this.gopBuffer_ = ((e, t, i) => {
                    if (!t.length) return e;
                    if (i) return t.slice();
                    var s = t[0].pts;
                    let r = 0;
                    for (r; r < e.length && !(e[r].pts >= s); r++) ;
                    return e.slice(0, r).concat(t)
                })(this.gopBuffer_, i.gopInfo, this.safeAppend_)), this.state = "APPENDING", this.trigger("appending"), this.waitForAppendsToComplete_(e)
            }
        }

        setTimeMapping_(e) {
            e = this.syncController_.mappingForTimeline(e);
            null !== e && (this.timeMapping_ = e)
        }

        updateMediaSecondsLoaded_(e) {
            "number" == typeof e.start && "number" == typeof e.end ? this.mediaSecondsLoaded += e.end - e.start : this.mediaSecondsLoaded += e.duration
        }

        shouldUpdateTransmuxerTimestampOffset_(e) {
            return null !== e && ("main" === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset())
        }

        trueSegmentStart_({
                              currentStart: e,
                              playlist: t,
                              mediaIndex: i,
                              firstVideoFrameTimeForData: s,
                              currentVideoTimestampOffset: r,
                              useVideoTimingInfo: n,
                              videoTimingInfo: a,
                              audioTimingInfo: o
                          }) {
            return "undefined" != typeof e ? e : n ? (e = t.segments[i - 1], 0 !== i && e && "undefined" != typeof e.start && e.end === s + r ? a.start : s) : o.start
        }

        waitForAppendsToComplete_(e) {
            var t, i, s = this.getCurrentMediaInfo_(e);
            s ? ({
                hasAudio: s,
                hasVideo: i,
                isMuxed: t
            } = s, i = "main" === this.loaderType_ && i, s = !this.audioDisabled_ && s && !t, e.waitingOnAppends = 0, e.hasAppendedData_ ? (i && e.waitingOnAppends++, s && e.waitingOnAppends++, i && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), s && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))) : (e.timingInfo || "number" != typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0), e.timingInfo = {start: 0}, e.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()), this.checkAppendsDone_(e))) : (this.error({
                message: "No starting media returned, likely due to an unsupported media format.",
                playlistExclusionDuration: 1 / 0
            }), this.trigger("error"))
        }

        checkAppendsDone_(e) {
            this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_())
        }

        checkForIllegalMediaSwitch(e) {
            i = this.loaderType_, t = this.getCurrentMediaInfo_(), e = e;
            var t,
                i = "main" === i && t && e ? e.hasAudio || e.hasVideo ? t.hasVideo && !e.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.hasVideo && e.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null;
            return !!i && (this.error({message: i, playlistExclusionDuration: 1 / 0}), this.trigger("error"), !0)
        }

        updateSourceBufferTimestampOffset_(t) {
            if (null !== t.timestampOffset && "number" == typeof t.timingInfo.start && !t.changedTimestampOffset && "main" === this.loaderType_) {
                let e = !1;
                t.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({
                    videoTimingInfo: t.segment.videoTimingInfo,
                    audioTimingInfo: t.segment.audioTimingInfo,
                    timingInfo: t.timingInfo
                }), t.changedTimestampOffset = !0, t.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(t.timestampOffset), e = !0), t.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(t.timestampOffset), e = !0), e && this.trigger("timestampoffset")
            }
        }

        getSegmentStartTimeForTimestampOffsetCalculation_({videoTimingInfo: e, audioTimingInfo: t, timingInfo: i}) {
            return this.useDtsForTimestampOffset_ ? e && "number" == typeof e.transmuxedDecodeStart ? e.transmuxedDecodeStart : t && "number" == typeof t.transmuxedDecodeStart ? t.transmuxedDecodeStart : i.start : i.start
        }

        updateTimingInfoEnd_(e) {
            e.timingInfo = e.timingInfo || {};
            var t = this.getMediaInfo_(),
                t = "main" === this.loaderType_ && t && t.hasVideo && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
            t && (e.timingInfo.end = "number" == typeof t.end ? t.end : t.start + e.duration)
        }

        handleAppendsDone_() {
            var e, t, i;
            this.pendingSegment_ && this.trigger("appendsdone"), this.pendingSegment_ ? (e = this.pendingSegment_, this.updateTimingInfoEnd_(e), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({
                segmentInfo: e,
                shouldSaveTimelineMapping: "main" === this.loaderType_
            }), (t = Zh(e, this.sourceType_)) && ("warn" === t.severity ? T.log.warn(t.message) : this.logger_(t.message)), this.recordThroughput_(e), this.pendingSegment_ = null, this.state = "READY", e.isSyncRequest && (this.trigger("syncinfoupdate"), !e.hasAppendedData_) ? this.logger_("Throwing away un-appended sync request " + Xh(e)) : (this.logger_("Appended " + Xh(e)), this.addSegmentMetadataCue_(e), this.currentTime_() >= this.replaceSegmentsUntil_ && (this.replaceSegmentsUntil_ = -1, this.fetchAtBuffer_ = !0), this.currentTimeline_ !== e.timeline && (this.timelineChangeController_.lastTimelineChange({
                type: this.loaderType_,
                from: this.currentTimeline_,
                to: e.timeline
            }), "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({
                type: "audio",
                from: this.currentTimeline_,
                to: e.timeline
            })), this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate"), t = e.segment, i = e.part, t = t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration, i = i && i.end && this.currentTime_() - i.end > 3 * e.playlist.partTargetDuration, t || i ? (this.logger_(`bad ${t ? "segment" : "part"} ` + Xh(e)), this.resetEverything()) : (null !== this.mediaIndex && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e.mediaIndex, this.partIndex = e.partIndex, this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) && this.endOfStream(), this.trigger("appended"), e.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_()))) : (this.state = "READY", this.paused() || this.monitorBuffer_())
        }

        recordThroughput_(e) {
            var t, i;
            e.duration < 1 / 60 ? this.logger_("Ignoring segment's throughput because its duration of " + e.duration + " is less than the min to record " + 1 / 60) : (t = this.throughput.rate, i = Date.now() - e.endOfAllRequests + 1, e = Math.floor(e.byteLength / i * 8 * 1e3), this.throughput.rate += (e - t) / ++this.throughput.count)
        }

        addSegmentMetadataCue_(e) {
            var t, i, s, r;
            this.segmentMetadataTrack_ && (t = (r = e.segment).start, i = r.end, Gh(t)) && Gh(i) && (Hh(t, i, this.segmentMetadataTrack_), s = window.WebKitDataCue || window.VTTCue, r = {
                custom: r.custom,
                dateTimeObject: r.dateTimeObject,
                dateTimeString: r.dateTimeString,
                programDateTime: r.programDateTime,
                bandwidth: e.playlist.attributes.BANDWIDTH,
                resolution: e.playlist.attributes.RESOLUTION,
                codecs: e.playlist.attributes.CODECS,
                byteLength: e.byteLength,
                uri: e.uri,
                timeline: e.timeline,
                playlist: e.playlist.id,
                start: t,
                end: i
            }, (e = new s(t, i, JSON.stringify(r))).value = r, this.segmentMetadataTrack_.addCue(e))
        }

        set replaceSegmentsUntil(e) {
            this.logger_("Replacing currently buffered segments until " + e), this.replaceSegmentsUntil_ = e
        }
    }

    function tu() {
    }

    function iu(e) {
        return "string" != typeof e ? e : e.replace(/./, e => e.toUpperCase())
    }

    const su = ["video", "audio"], ru = (e, t) => {
        var i = t[e + "Buffer"];
        return i && i.updating || t.queuePending[e]
    }, nu = (i, s) => {
        if (0 !== s.queue.length) {
            let e = 0, t = s.queue[e];
            if ("mediaSource" === t.type) s.updating() || "closed" === s.mediaSource.readyState || (s.queue.shift(), t.action(s), t.doneFn && t.doneFn(), nu("audio", s), nu("video", s)); else if ("mediaSource" !== i && s.ready() && "closed" !== s.mediaSource.readyState && !ru(i, s)) {
                if (t.type !== i) {
                    if (null === (e = ((t, i) => {
                        for (let e = 0; e < i.length; e++) {
                            var s = i[e];
                            if ("mediaSource" === s.type) return null;
                            if (s.type === t) return e
                        }
                        return null
                    })(i, s.queue))) return;
                    t = s.queue[e]
                }
                s.queue.splice(e, 1), (s.queuePending[i] = t).action(i, s), t.doneFn || (s.queuePending[i] = null, nu(i, s))
            }
        }
    }, au = (e, t) => {
        var i = t[e + "Buffer"], s = iu(e);
        i && (i.removeEventListener("updateend", t[`on${s}UpdateEnd_`]), i.removeEventListener("error", t[`on${s}Error_`]), t.codecs[e] = null, t[e + "Buffer"] = null)
    }, ou = (e, t) => e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t), lu = {
        appendBuffer: (s, r, n) => (t, i) => {
            var e = i[t + "Buffer"];
            if (ou(i.mediaSource, e)) {
                i.logger_(`Appending segment ${r.mediaIndex}'s ${s.length} bytes to ${t}Buffer`);
                try {
                    e.appendBuffer(s)
                } catch (e) {
                    i.logger_(`Error with code ${e.code} ` + (22 === e.code ? "(QUOTA_EXCEEDED_ERR) " : "") + `when appending segment ${r.mediaIndex} to ${t}Buffer`), i.queuePending[t] = null, n(e)
                }
            }
        }, remove: (s, r) => (t, i) => {
            var e = i[t + "Buffer"];
            if (ou(i.mediaSource, e)) {
                i.logger_(`Removing ${s} to ${r} from ${t}Buffer`);
                try {
                    e.remove(s, r)
                } catch (e) {
                    i.logger_(`Remove ${s} to ${r} from ${t}Buffer failed`)
                }
            }
        }, timestampOffset: s => (e, t) => {
            var i = t[e + "Buffer"];
            ou(t.mediaSource, i) && (t.logger_(`Setting ${e}timestampOffset to ` + s), i.timestampOffset = s)
        }, callback: i => (e, t) => {
            i()
        }, endOfStream: t => e => {
            if ("open" === e.mediaSource.readyState) {
                e.logger_(`Calling mediaSource endOfStream(${t || ""})`);
                try {
                    e.mediaSource.endOfStream(t)
                } catch (e) {
                    T.log.warn("Failed to call media source endOfStream", e)
                }
            }
        }, duration: t => e => {
            e.logger_("Setting mediaSource duration to " + t);
            try {
                e.mediaSource.duration = t
            } catch (e) {
                T.log.warn("Failed to set media source duration", e)
            }
        }, abort: () => (t, e) => {
            if ("open" === e.mediaSource.readyState) {
                var i = e[t + "Buffer"];
                if (ou(e.mediaSource, i)) {
                    e.logger_(`calling abort on ${t}Buffer`);
                    try {
                        i.abort()
                    } catch (e) {
                        T.log.warn(`Failed to abort on ${t}Buffer`, e)
                    }
                }
            }
        }, addSourceBuffer: (s, r) => e => {
            var t = iu(s), i = qn(r),
                i = (e.logger_(`Adding ${s}Buffer with codec ${r} to mediaSource`), e.mediaSource.addSourceBuffer(i));
            i.addEventListener("updateend", e[`on${t}UpdateEnd_`]), i.addEventListener("error", e[`on${t}Error_`]), e.codecs[s] = r, e[s + "Buffer"] = i
        }, removeSourceBuffer: i => e => {
            var t = e[i + "Buffer"];
            if (au(i, e), ou(e.mediaSource, t)) {
                e.logger_(`Removing ${i}Buffer with codec ${e.codecs[i]} from mediaSource`);
                try {
                    e.mediaSource.removeSourceBuffer(t)
                } catch (e) {
                    T.log.warn(`Failed to removeSourceBuffer ${i}Buffer`, e)
                }
            }
        }, changeType: r => (e, t) => {
            var i = t[e + "Buffer"], s = qn(r);
            ou(t.mediaSource, i) && t.codecs[e] !== r && (t.logger_(`changing ${e}Buffer codec from ${t.codecs[e]} to ` + r), i.changeType(s), t.codecs[e] = r)
        }
    }, du = ({type: e, sourceUpdater: t, action: i, doneFn: s, name: r}) => {
        t.queue.push({type: e, action: i, doneFn: s, name: r}), nu(e, t)
    }, hu = (i, s) => e => {
        var t = function (t) {
            let i = "";
            for (let e = 0; e < t.length; e++) {
                var s = t.start(e), r = t.end(e);
                i.length && (i += "\n"), i += `[${r - s}](${s} -> ${r})`
            }
            return i || "empty"
        }(s[i + "Buffered"]());
        s.logger_(i + ` source buffer update end. Buffered: 
`, t), s.queuePending[i] && (t = s.queuePending[i].doneFn, s.queuePending[i] = null, t) && t(s[i + "Error_"]), nu(i, s)
    };

    class uu extends T.EventTarget {
        constructor(e) {
            super(), this.mediaSource = e, this.sourceopenListener_ = () => nu("mediaSource", this), this.mediaSource.addEventListener("sourceopen", this.sourceopenListener_), this.logger_ = Hl("SourceUpdater"), this.audioTimestampOffset_ = 0, this.videoTimestampOffset_ = 0, this.queue = [], this.queuePending = {
                audio: null,
                video: null
            }, this.delayedAudioAppendQueue_ = [], this.videoAppendQueued_ = !1, this.codecs = {}, this.onVideoUpdateEnd_ = hu("video", this), this.onAudioUpdateEnd_ = hu("audio", this), this.onVideoError_ = e => {
                this.videoError_ = e
            }, this.onAudioError_ = e => {
                this.audioError_ = e
            }, this.createdSourceBuffers_ = !1, this.initializedEme_ = !1, this.triggeredReady_ = !1
        }

        initializedEme() {
            this.initializedEme_ = !0, this.triggerReady()
        }

        hasCreatedSourceBuffers() {
            return this.createdSourceBuffers_
        }

        hasInitializedAnyEme() {
            return this.initializedEme_
        }

        ready() {
            return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme()
        }

        createSourceBuffers(e) {
            this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e), this.createdSourceBuffers_ = !0, this.trigger("createdsourcebuffers"), this.triggerReady())
        }

        triggerReady() {
            this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = !0, this.trigger("ready"))
        }

        addSourceBuffer(e, t) {
            du({type: "mediaSource", sourceUpdater: this, action: lu.addSourceBuffer(e, t), name: "addSourceBuffer"})
        }

        abort(e) {
            du({type: e, sourceUpdater: this, action: lu.abort(e), name: "abort"})
        }

        removeSourceBuffer(e) {
            this.canRemoveSourceBuffer() ? du({
                type: "mediaSource",
                sourceUpdater: this,
                action: lu.removeSourceBuffer(e),
                name: "removeSourceBuffer"
            }) : T.log.error("removeSourceBuffer is not supported!")
        }

        canRemoveSourceBuffer() {
            return !T.browser.IS_FIREFOX && window.MediaSource && window.MediaSource.prototype && "function" == typeof window.MediaSource.prototype.removeSourceBuffer
        }

        static canChangeType() {
            return window.SourceBuffer && window.SourceBuffer.prototype && "function" == typeof window.SourceBuffer.prototype.changeType
        }

        canChangeType() {
            return this.constructor.canChangeType()
        }

        changeType(e, t) {
            this.canChangeType() ? du({
                type: e,
                sourceUpdater: this,
                action: lu.changeType(t),
                name: "changeType"
            }) : T.log.error("changeType is not supported!")
        }

        addOrChangeSourceBuffers(i) {
            if (!i || "object" != typeof i || 0 === Object.keys(i).length) throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
            Object.keys(i).forEach(e => {
                var t = i[e];
                if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(e, t);
                this.canChangeType() && this.changeType(e, t)
            })
        }

        appendBuffer(e, t) {
            var {segmentInfo: i, type: s, bytes: r} = e;
            this.processedAppend_ = !0, "audio" === s && this.videoBuffer && !this.videoAppendQueued_ ? (this.delayedAudioAppendQueue_.push([e, t]), this.logger_(`delayed audio append of ${r.length} until video append`)) : (e = t, du({
                type: s,
                sourceUpdater: this,
                action: lu.appendBuffer(r, i || {mediaIndex: -1}, e),
                doneFn: t,
                name: "appendBuffer"
            }), "video" === s && (this.videoAppendQueued_ = !0, this.delayedAudioAppendQueue_.length) && (r = this.delayedAudioAppendQueue_.slice(), this.logger_(`queuing delayed audio ${r.length} appendBuffers`), this.delayedAudioAppendQueue_.length = 0, r.forEach(e => {
                this.appendBuffer.apply(this, e)
            })))
        }

        audioBuffered() {
            return ou(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered || Vl()
        }

        videoBuffered() {
            return ou(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered || Vl()
        }

        buffered() {
            var e = ou(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null,
                t = ou(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
            if (t && !e) return this.audioBuffered();
            if (e && !t) return this.videoBuffered();
            {
                var r = this.audioBuffered();
                var n = this.videoBuffered();
                let e = null, t = null, i = 0;
                var a = [], o = [];
                if (!(r && r.length && n && n.length)) return Vl();
                let s = r.length;
                for (; s--;) a.push({time: r.start(s), type: "start"}), a.push({time: r.end(s), type: "end"});
                for (s = n.length; s--;) a.push({time: n.start(s), type: "start"}), a.push({
                    time: n.end(s),
                    type: "end"
                });
                for (a.sort(function (e, t) {
                    return e.time - t.time
                }), s = 0; s < a.length; s++) "start" === a[s].type ? 2 === ++i && (e = a[s].time) : "end" === a[s].type && 1 === --i && (t = a[s].time), null !== e && null !== t && (o.push([e, t]), e = null, t = null);
                return Vl(o);
                return
            }
        }

        setDuration(e, t = tu) {
            du({type: "mediaSource", sourceUpdater: this, action: lu.duration(e), name: "duration", doneFn: t})
        }

        endOfStream(e = null, t = tu) {
            "string" != typeof e && (e = void 0), du({
                type: "mediaSource",
                sourceUpdater: this,
                action: lu.endOfStream(e),
                name: "endOfStream",
                doneFn: t
            })
        }

        removeAudio(e, t, i = tu) {
            this.audioBuffered().length && 0 !== this.audioBuffered().end(0) ? du({
                type: "audio",
                sourceUpdater: this,
                action: lu.remove(e, t),
                doneFn: i,
                name: "remove"
            }) : i()
        }

        removeVideo(e, t, i = tu) {
            this.videoBuffered().length && 0 !== this.videoBuffered().end(0) ? du({
                type: "video",
                sourceUpdater: this,
                action: lu.remove(e, t),
                doneFn: i,
                name: "remove"
            }) : i()
        }

        updating() {
            return !(!ru("audio", this) && !ru("video", this))
        }

        audioTimestampOffset(e) {
            return "undefined" != typeof e && this.audioBuffer && this.audioTimestampOffset_ !== e && (du({
                type: "audio",
                sourceUpdater: this,
                action: lu.timestampOffset(e),
                name: "timestampOffset"
            }), this.audioTimestampOffset_ = e), this.audioTimestampOffset_
        }

        videoTimestampOffset(e) {
            return "undefined" != typeof e && this.videoBuffer && this.videoTimestampOffset !== e && (du({
                type: "video",
                sourceUpdater: this,
                action: lu.timestampOffset(e),
                name: "timestampOffset"
            }), this.videoTimestampOffset_ = e), this.videoTimestampOffset_
        }

        audioQueueCallback(e) {
            this.audioBuffer && du({type: "audio", sourceUpdater: this, action: lu.callback(e), name: "callback"})
        }

        videoQueueCallback(e) {
            this.videoBuffer && du({type: "video", sourceUpdater: this, action: lu.callback(e), name: "callback"})
        }

        dispose() {
            this.trigger("dispose"), su.forEach(e => {
                this.abort(e), this.canRemoveSourceBuffer() ? this.removeSourceBuffer(e) : this[e + "QueueCallback"](() => au(e, this))
            }), this.videoAppendQueued_ = !1, this.delayedAudioAppendQueue_.length = 0, this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_), this.off()
        }
    }

    const cu = e => decodeURIComponent(escape(String.fromCharCode.apply(null, e))),
        pu = new Uint8Array("\n\n".split("").map(e => e.charCodeAt(0)));

    class mu extends Error {
        constructor() {
            super("Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.")
        }
    }

    class gu extends eu {
        constructor(e, t = {}) {
            super(e, t), this.mediaSource_ = null, this.subtitlesTrack_ = null, this.loaderType_ = "subtitle", this.featuresNativeTextTracks_ = e.featuresNativeTextTracks, this.loadVttJs = e.loadVttJs, this.shouldSaveSegmentTimingInfo_ = !1
        }

        createTransmuxer_() {
            return null
        }

        buffered_() {
            var e;
            return this.subtitlesTrack_ && this.subtitlesTrack_.cues && this.subtitlesTrack_.cues.length ? Vl([[(e = this.subtitlesTrack_.cues)[0].startTime, e[e.length - 1].startTime]]) : Vl()
        }

        initSegmentForMap(e, t = !1) {
            if (!e) return null;
            var i = Bd(e);
            let s = this.initSegments_[i];
            return t && !s && e.bytes && (t = pu.byteLength + e.bytes.byteLength, (t = new Uint8Array(t)).set(e.bytes), t.set(pu, e.bytes.byteLength), this.initSegments_[i] = s = {
                resolvedUri: e.resolvedUri,
                byterange: e.byterange,
                bytes: t
            }), s || e
        }

        couldBeginLoading_() {
            return this.playlist_ && this.subtitlesTrack_ && !this.paused()
        }

        init_() {
            return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
        }

        track(e) {
            return "undefined" != typeof e && (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_()) && this.init_(), this.subtitlesTrack_
        }

        remove(e, t) {
            Hh(e, t, this.subtitlesTrack_)
        }

        fillBuffer_() {
            var e = this.chooseNextRequest_();
            e && (null === this.syncController_.timestampOffsetForTimeline(e.timeline) ? (this.syncController_.one("timestampoffset", () => {
                this.state = "READY", this.paused() || this.monitorBuffer_()
            }), this.state = "WAITING_ON_TIMELINE") : this.loadSegment_(e))
        }

        timestampOffsetForSegment_() {
            return null
        }

        chooseNextRequest_() {
            return this.skipEmptySegments_(super.chooseNextRequest_())
        }

        skipEmptySegments_(e) {
            for (; e && e.segment.empty;) {
                if (e.mediaIndex + 1 >= e.playlist.segments.length) {
                    e = null;
                    break
                }
                e = this.generateSegmentInfo_({
                    playlist: e.playlist,
                    mediaIndex: e.mediaIndex + 1,
                    startOfSegment: e.startOfSegment + e.duration,
                    isSyncRequest: e.isSyncRequest
                })
            }
            return e
        }

        stopForError(e) {
            this.error(e), this.state = "READY", this.pause(), this.trigger("error")
        }

        segmentRequestFinished_(e, t, i) {
            if (this.subtitlesTrack_) if (this.saveTransferStats_(t.stats), this.pendingSegment_) if (e) e.code === wh.TIMEOUT && this.handleTimeout_(), e.code === wh.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1, this.stopForError(e); else {
                var s = this.pendingSegment_,
                    r = (this.saveBandwidthRelatedStats_(s.duration, t.stats), t.key && this.segmentKey(t.key, !0), this.state = "APPENDING", this.trigger("appending"), s.segment);
                if (r.map && (r.map.bytes = t.map.bytes), s.bytes = t.bytes, "function" != typeof window.WebVTT && "function" == typeof this.loadVttJs) this.state = "WAITING_ON_VTTJS", this.loadVttJs().then(() => this.segmentRequestFinished_(e, t, i), () => this.stopForError({message: "Error loading vtt.js"})); else {
                    r.requested = !0;
                    try {
                        this.parseVTTCues_(s)
                    } catch (e) {
                        return void this.stopForError({message: e.message})
                    }
                    if (this.updateTimeMapping_(s, this.syncController_.timelines[s.timeline], this.playlist_), s.cues.length ? s.timingInfo = {
                        start: s.cues[0].startTime,
                        end: s.cues[s.cues.length - 1].endTime
                    } : s.timingInfo = {
                        start: s.startOfSegment,
                        end: s.startOfSegment + s.duration
                    }, s.isSyncRequest) this.trigger("syncinfoupdate"), this.pendingSegment_ = null, this.state = "READY"; else {
                        s.byteLength = s.bytes.byteLength, this.mediaSecondsLoaded += r.duration, s.cues.forEach(e => {
                            this.subtitlesTrack_.addCue(this.featuresNativeTextTracks_ ? new window.VTTCue(e.startTime, e.endTime, e.text) : e)
                        });
                        var n = this.subtitlesTrack_, a = n.cues;
                        if (a) {
                            var o = {};
                            for (let e = a.length - 1; 0 <= e; e--) {
                                var l = a[e], d = `${l.startTime}-${l.endTime}-` + l.text;
                                o[d] ? n.removeCue(l) : o[d] = l
                            }
                        }
                        this.handleAppendsDone_()
                    }
                }
            } else this.state = "READY", this.mediaRequestsAborted += 1; else this.state = "READY"
        }

        handleData_() {
        }

        updateTimingInfoEnd_() {
        }

        parseVTTCues_(t) {
            let e, i = !1;
            if ("function" != typeof window.WebVTT) throw new mu;
            "function" == typeof window.TextDecoder ? e = new window.TextDecoder("utf8") : (e = window.WebVTT.StringDecoder(), i = !0);
            var s = new window.WebVTT.Parser(window, window.vttjs, e);
            if (t.cues = [], t.timestampmap = {
                MPEGTS: 0,
                LOCAL: 0
            }, s.oncue = t.cues.push.bind(t.cues), s.ontimestampmap = e => {
                t.timestampmap = e
            }, s.onparsingerror = e => {
                T.log.warn("Error encountered when parsing cues: " + e.message)
            }, t.segment.map) {
                let e = t.segment.map.bytes;
                i && (e = cu(e)), s.parse(e)
            }
            let r = t.bytes;
            i && (r = cu(r)), s.parse(r), s.flush()
        }

        updateTimeMapping_(e, t, i) {
            var s = e.segment;
            if (t) if (e.cues.length) {
                var r = e.timestampmap;
                const n = r.MPEGTS / Fl - r.LOCAL + t.mapping;
                e.cues.forEach(e => {
                    e.startTime += n, e.endTime += n
                }), i.syncInfo || (r = e.cues[0].startTime, t = e.cues[e.cues.length - 1].startTime, i.syncInfo = {
                    mediaSequence: i.mediaSequence + e.mediaIndex,
                    time: Math.min(r, t - s.duration)
                })
            } else s.empty = !0
        }
    }

    const fu = [{
        name: "VOD", run: (e, t, i, s, r) => {
            return i !== 1 / 0 ? {time: 0, segmentIndex: 0, partIndex: null} : null
        }
    }, {
        name: "ProgramDateTime", run: (t, i, e, s, r) => {
            if (!Object.keys(t.timelineToDatetimeMappings).length) return null;
            let n = null, a = null;
            var o = id(i);
            r = r || 0;
            for (let e = 0; e < o.length; e++) {
                var l = o[i.endList || 0 === r ? e : o.length - (e + 1)], d = l.segment,
                    h = t.timelineToDatetimeMappings[d.timeline];
                if (h && d.dateTimeObject) {
                    let t = d.dateTimeObject.getTime() / 1e3 + h;
                    if (d.parts && "number" == typeof l.partIndex) for (let e = 0; e < l.partIndex; e++) t += d.parts[e].duration;
                    h = Math.abs(r - t);
                    if (null !== a && (0 === h || a < h)) break;
                    a = h, n = {time: t, segmentIndex: l.segmentIndex, partIndex: l.partIndex}
                }
            }
            return n
        }
    }, {
        name: "Segment", run: (e, t, i, s, r) => {
            let n = null, a = null;
            r = r || 0;
            var o = id(t);
            for (let e = 0; e < o.length; e++) {
                var l = o[t.endList || 0 === r ? e : o.length - (e + 1)], d = l.segment,
                    h = l.part && l.part.start || d && d.start;
                if (d.timeline === s && "undefined" != typeof h) {
                    d = Math.abs(r - h);
                    if (null !== a && a < d) break;
                    (!n || null === a || a >= d) && (a = d, n = {
                        time: h,
                        segmentIndex: l.segmentIndex,
                        partIndex: l.partIndex
                    })
                }
            }
            return n
        }
    }, {
        name: "Discontinuity", run: (i, s, e, t, r) => {
            let n = null;
            if (r = r || 0, s.discontinuityStarts && s.discontinuityStarts.length) {
                let t = null;
                for (let e = 0; e < s.discontinuityStarts.length; e++) {
                    var a = s.discontinuityStarts[e], o = s.discontinuitySequence + e + 1, o = i.discontinuities[o];
                    if (o) {
                        var l = Math.abs(r - o.time);
                        if (null !== t && t < l) break;
                        (!n || null === t || t >= l) && (t = l, n = {time: o.time, segmentIndex: a, partIndex: null})
                    }
                }
            }
            return n
        }
    }, {
        name: "Playlist", run: (e, t, i, s, r) => {
            return t.syncInfo ? {
                time: t.syncInfo.time,
                segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence,
                partIndex: null
            } : null
        }
    }];

    class yu extends T.EventTarget {
        constructor(e = 0) {
            super(), this.timelines = [], this.discontinuities = [], this.timelineToDatetimeMappings = {}, this.logger_ = Hl("SyncController")
        }

        getSyncPoint(e, t, i, s) {
            e = this.runStrategies_(e, t, i, s);
            return e.length ? this.selectSyncPoint_(e, {key: "time", value: s}) : null
        }

        getExpiredTime(e, t) {
            return e && e.segments && (t = this.runStrategies_(e, t, e.discontinuitySequence, 0)).length ? (0 < (t = this.selectSyncPoint_(t, {
                key: "segmentIndex",
                value: 0
            })).segmentIndex && (t.time *= -1), Math.abs(t.time + Xl({
                defaultDuration: e.targetDuration,
                durationList: e.segments,
                startIndex: t.segmentIndex,
                endIndex: 0
            }))) : null
        }

        runStrategies_(t, i, s, r) {
            var n = [];
            for (let e = 0; e < fu.length; e++) {
                var a = fu[e], o = a.run(this, t, i, s, r);
                o && (o.strategy = a.name, n.push({strategy: a.name, syncPoint: o}))
            }
            return n
        }

        selectSyncPoint_(t, i) {
            let s = t[0].syncPoint, r = Math.abs(t[0].syncPoint[i.key] - i.value), n = t[0].strategy;
            for (let e = 1; e < t.length; e++) {
                var a = Math.abs(t[e].syncPoint[i.key] - i.value);
                a < r && (r = a, s = t[e].syncPoint, n = t[e].strategy)
            }
            return this.logger_(`syncPoint for [${i.key}: ${i.value}] chosen with strategy` + ` [${n}]: [time:${s.time},` + " segmentIndex:" + s.segmentIndex + ("number" == typeof s.partIndex ? ",partIndex:" + s.partIndex : "") + "]"), s
        }

        saveExpiredSegmentInfo(t, i) {
            var s = i.mediaSequence - t.mediaSequence;
            if (86400 < s) T.log.warn(`Not saving expired segment info. Media sequence gap ${s} is too large.`); else for (let e = s - 1; 0 <= e; e--) {
                var r = t.segments[e];
                if (r && "undefined" != typeof r.start) {
                    i.syncInfo = {
                        mediaSequence: t.mediaSequence + e,
                        time: r.start
                    }, this.logger_(`playlist refresh sync: [time:${i.syncInfo.time},` + ` mediaSequence: ${i.syncInfo.mediaSequence}]`), this.trigger("syncinfoupdate");
                    break
                }
            }
        }

        setDateTimeMappingForStart(e) {
            var t;
            this.timelineToDatetimeMappings = {}, e.segments && e.segments.length && e.segments[0].dateTimeObject && (t = (e = e.segments[0]).dateTimeObject.getTime() / 1e3, this.timelineToDatetimeMappings[e.timeline] = -t)
        }

        saveSegmentTimingInfo({segmentInfo: e, shouldSaveTimelineMapping: t}) {
            var i = this.calculateSegmentTimeMapping_(e, e.timingInfo, t), s = e.segment,
                i = (i && (this.saveDiscontinuitySyncInfo_(e), e.playlist.syncInfo || (e.playlist.syncInfo = {
                    mediaSequence: e.playlist.mediaSequence + e.mediaIndex,
                    time: s.start
                })), s.dateTimeObject);
            s.discontinuity && t && i && (this.timelineToDatetimeMappings[s.timeline] = -i.getTime() / 1e3)
        }

        timestampOffsetForTimeline(e) {
            return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].time
        }

        mappingForTimeline(e) {
            return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].mapping
        }

        calculateSegmentTimeMapping_(e, t, i) {
            var s = e.segment, r = e.part;
            let n = this.timelines[e.timeline], a, o;
            if ("number" == typeof e.timestampOffset) n = {
                time: e.startOfSegment,
                mapping: e.startOfSegment - t.start
            }, i && (this.timelines[e.timeline] = n, this.trigger("timestampoffset"), this.logger_(`time mapping for timeline ${e.timeline}: ` + `[time: ${n.time}] [mapping: ${n.mapping}]`)), a = e.startOfSegment; else {
                if (!n) return !1;
                a = t.start + n.mapping
            }
            return o = t.end + n.mapping, r && (r.start = a, r.end = o), (!s.start || a < s.start) && (s.start = a), s.end = o, !0
        }

        saveDiscontinuitySyncInfo_(t) {
            var i = t.playlist, s = t.segment;
            if (s.discontinuity) this.discontinuities[s.timeline] = {
                time: s.start,
                accuracy: 0
            }; else if (i.discontinuityStarts && i.discontinuityStarts.length) for (let e = 0; e < i.discontinuityStarts.length; e++) {
                var r = i.discontinuityStarts[e], n = i.discontinuitySequence + e + 1, a = r - t.mediaIndex,
                    o = Math.abs(a);
                if (!this.discontinuities[n] || this.discontinuities[n].accuracy > o) {
                    let e;
                    e = a < 0 ? s.start - Xl({
                        defaultDuration: i.targetDuration,
                        durationList: i.segments,
                        startIndex: t.mediaIndex,
                        endIndex: r
                    }) : s.end + Xl({
                        defaultDuration: i.targetDuration,
                        durationList: i.segments,
                        startIndex: t.mediaIndex + 1,
                        endIndex: r
                    }), this.discontinuities[n] = {time: e, accuracy: o}
                }
            }
        }

        dispose() {
            this.trigger("dispose"), this.off()
        }
    }

    class _u extends T.EventTarget {
        constructor() {
            super(), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}
        }

        clearPendingTimelineChange(e) {
            this.pendingTimelineChanges_[e] = null, this.trigger("pendingtimelinechange")
        }

        pendingTimelineChange({type: e, from: t, to: i}) {
            return "number" == typeof t && "number" == typeof i && (this.pendingTimelineChanges_[e] = {
                type: e,
                from: t,
                to: i
            }, this.trigger("pendingtimelinechange")), this.pendingTimelineChanges_[e]
        }

        lastTimelineChange({type: e, from: t, to: i}) {
            return "number" == typeof t && "number" == typeof i && (this.lastTimelineChanges_[e] = {
                type: e,
                from: t,
                to: i
            }, delete this.pendingTimelineChanges_[e], this.trigger("timelinechange")), this.lastTimelineChanges_[e]
        }

        dispose() {
            this.trigger("dispose"), this.pendingTimelineChanges_ = {}, this.lastTimelineChanges_ = {}, this.off()
        }
    }

    var vu = sh(rh(nh(function () {
        var e = function () {
            function e() {
                this.listeners = {}
            }

            var t = e.prototype;
            return t.on = function (e, t) {
                this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
            }, t.off = function (e, t) {
                return !!this.listeners[e] && (t = this.listeners[e].indexOf(t), this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(t, 1), -1 < t)
            }, t.trigger = function (e) {
                var t = this.listeners[e];
                if (t) if (2 === arguments.length) for (var i = t.length, s = 0; s < i; ++s) t[s].call(this, arguments[1]); else for (var r = Array.prototype.slice.call(arguments, 1), n = t.length, a = 0; a < n; ++a) t[a].apply(this, r)
            }, t.dispose = function () {
                this.listeners = {}
            }, t.pipe = function (t) {
                this.on("data", function (e) {
                    t.push(e)
                })
            }, e
        }();
        /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */
        let h = null;

        class g {
            constructor(e) {
                h = h || function () {
                    var e = [[[], [], [], [], []], [[], [], [], [], []]], t = e[0], i = e[1], s = t[4], r = i[4];
                    let n, a, o;
                    var l, d, h, u, c = [], p = [];
                    let m, g;
                    for (n = 0; n < 256; n++) p[(c[n] = n << 1 ^ 283 * (n >> 7)) ^ n] = n;
                    for (a = o = 0; !s[a]; a ^= l || 1, o = p[o] || 1) for (u = (u = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & u ^ 99, h = c[d = c[l = c[r[s[a] = u] = a]]], g = 16843009 * h ^ 65537 * d ^ 257 * l ^ 16843008 * a, m = 257 * c[u] ^ 16843008 * u, n = 0; n < 4; n++) t[n][a] = m = m << 24 ^ m >>> 8, i[n][u] = g = g << 24 ^ g >>> 8;
                    for (n = 0; n < 5; n++) t[n] = t[n].slice(0), i[n] = i[n].slice(0);
                    return e
                }(), this._tables = [[h[0][0].slice(), h[0][1].slice(), h[0][2].slice(), h[0][3].slice(), h[0][4].slice()], [h[1][0].slice(), h[1][1].slice(), h[1][2].slice(), h[1][3].slice(), h[1][4].slice()]];
                let t, i, s;
                var r = this._tables[0][4], n = this._tables[1], a = e.length;
                let o = 1;
                if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size");
                var l = e.slice(0), d = [];
                for (this._key = [l, d], t = a; t < 4 * a + 28; t++) s = l[t - 1], (t % a == 0 || 8 === a && t % a == 4) && (s = r[s >>> 24] << 24 ^ r[s >> 16 & 255] << 16 ^ r[s >> 8 & 255] << 8 ^ r[255 & s], t % a == 0) && (s = s << 8 ^ s >>> 24 ^ o << 24, o = o << 1 ^ 283 * (o >> 7)), l[t] = l[t - a] ^ s;
                for (i = 0; t; i++, t--) s = l[3 & i ? t : t - 4], t <= 4 || i < 4 ? d[i] = s : d[i] = n[0][r[s >>> 24]] ^ n[1][r[s >> 16 & 255]] ^ n[2][r[s >> 8 & 255]] ^ n[3][r[255 & s]]
            }

            decrypt(e, t, i, s, r, n) {
                var a, o, l = this._key[1];
                let d = e ^ l[0], h = s ^ l[1], u = i ^ l[2], c = t ^ l[3], p;
                var m = l.length / 4 - 2;
                let g, f = 4;
                var e = this._tables[1], y = e[0], _ = e[1], v = e[2], b = e[3], T = e[4];
                for (g = 0; g < m; g++) p = y[d >>> 24] ^ _[h >> 16 & 255] ^ v[u >> 8 & 255] ^ b[255 & c] ^ l[f], a = y[h >>> 24] ^ _[u >> 16 & 255] ^ v[c >> 8 & 255] ^ b[255 & d] ^ l[f + 1], o = y[u >>> 24] ^ _[c >> 16 & 255] ^ v[d >> 8 & 255] ^ b[255 & h] ^ l[f + 2], c = y[c >>> 24] ^ _[d >> 16 & 255] ^ v[h >> 8 & 255] ^ b[255 & u] ^ l[f + 3], f += 4, d = p, h = a, u = o;
                for (g = 0; g < 4; g++) r[(3 & -g) + n] = T[d >>> 24] << 24 ^ T[h >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & c] ^ l[f++], p = d, d = h, h = u, u = c, c = p
            }
        }

        class l extends e {
            constructor() {
                super(e), this.jobs = [], this.delay = 1, this.timeout_ = null
            }

            processJob_() {
                this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
            }

            push(e) {
                this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
            }
        }

        function f(e) {
            return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
        }

        class d {
            constructor(e, t, i, s) {
                var r = d.STEP, n = new Int32Array(e.buffer);
                const a = new Uint8Array(e.byteLength);
                let o = 0;
                for (this.asyncStream_ = new l, this.asyncStream_.push(this.decryptChunk_(n.subarray(o, o + r), t, i, a)), o = r; o < n.length; o += r) i = new Uint32Array([f(n[o - 4]), f(n[o - 3]), f(n[o - 2]), f(n[o - 1])]), this.asyncStream_.push(this.decryptChunk_(n.subarray(o, o + r), t, i, a));
                this.asyncStream_.push(function () {
                    var e;
                    /*! @name aes-decrypter @version 4.0.1 @license Apache-2.0 */
                    s(null, (e = a).subarray(0, e.byteLength - e[e.byteLength - 1]))
                })
            }

            static get STEP() {
                return 32e3
            }

            decryptChunk_(t, i, s, r) {
                return function () {
                    var e = function (e, t, i) {
                        var s, r, n, a, o = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                            l = new g(Array.prototype.slice.call(t)), t = new Uint8Array(e.byteLength),
                            d = new Int32Array(t.buffer);
                        let h, u, c, p, m;
                        for (h = i[0], u = i[1], c = i[2], p = i[3], m = 0; m < o.length; m += 4) s = f(o[m]), r = f(o[m + 1]), n = f(o[m + 2]), a = f(o[m + 3]), l.decrypt(s, r, n, a, d, m), d[m] = f(d[m] ^ h), d[m + 1] = f(d[m + 1] ^ u), d[m + 2] = f(d[m + 2] ^ c), d[m + 3] = f(d[m + 3] ^ p), h = s, u = r, c = n, p = a;
                        return t
                    }(t, i, s);
                    r.set(e, t.byteOffset)
                }
            }
        }

        var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {},
            t = t.BigInt || Number;
        t("0x1"), t("0x100"), t("0x10000"), t("0x1000000"), t("0x100000000"), t("0x10000000000"), t("0x1000000000000"), t("0x100000000000000"), t("0x10000000000000000"), t = new Uint16Array([65484]), 255 !== (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))[0] && t[0];

        function r(s) {
            const r = {};
            return Object.keys(s).forEach(e => {
                var t, i = s[e];
                t = i, ("function" === ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer) ? r[e] = {
                    bytes: i.buffer,
                    byteOffset: i.byteOffset,
                    byteLength: i.byteLength
                } : r[e] = i
            }), r
        }

        self.onmessage = function (e) {
            const i = e.data;
            var e = new Uint8Array(i.encrypted.bytes, i.encrypted.byteOffset, i.encrypted.byteLength),
                t = new Uint32Array(i.key.bytes, i.key.byteOffset, i.key.byteLength / 4),
                s = new Uint32Array(i.iv.bytes, i.iv.byteOffset, i.iv.byteLength / 4);
            new d(e, t, s, function (e, t) {
                self.postMessage(r({source: i.source, decrypted: t}), [t.buffer])
            })
        }
    })));
    const bu = (e, t) => {
        e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
    }, Tu = (e, t) => {
        (t.activePlaylistLoader = e).load()
    }, wu = {
        AUDIO: (a, o) => () => {
            var {mediaTypes: {[a]: e}, excludePlaylist: t} = o, i = e.activeTrack(), s = e.activeGroup(),
                s = (s.filter(e => e.default)[0] || s[0]).id, r = e.tracks[s];
            if (i === r) t({error: {message: "Problem encountered loading the default audio track."}}); else {
                T.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
                for (const n in e.tracks) e.tracks[n].enabled = e.tracks[n] === r;
                e.onTrackChanged()
            }
        }, SUBTITLES: (i, s) => () => {
            var {[i]: e} = s["mediaTypes"],
                t = (T.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), e.activeTrack());
            t && (t.mode = "disabled"), e.onTrackChanged()
        }
    }, Su = {
        AUDIO: (e, t, i) => {
            if (!t) return;
            const {tech: s, requestOptions: r, segmentLoaders: {[e]: n}} = i;
            t.on("loadedmetadata", () => {
                var e = t.media();
                n.playlist(e, r), (!s.paused() || e.endList && "none" !== s.preload()) && n.load()
            }), t.on("loadedplaylist", () => {
                n.playlist(t.media(), r), s.paused() || n.load()
            }), t.on("error", wu[e](e, i))
        }, SUBTITLES: (e, t, i) => {
            const {tech: s, requestOptions: r, segmentLoaders: {[e]: n}, mediaTypes: {[e]: a}} = i;
            t.on("loadedmetadata", () => {
                var e = t.media();
                n.playlist(e, r), n.track(a.activeTrack()), (!s.paused() || e.endList && "none" !== s.preload()) && n.load()
            }), t.on("loadedplaylist", () => {
                n.playlist(t.media(), r), s.paused() || n.load()
            }), t.on("error", wu[e](e, i))
        }
    }, Eu = {
        AUDIO: (i, s) => {
            var r, {
                vhs: n,
                sourceType: a,
                segmentLoaders: {[i]: e},
                requestOptions: o,
                main: {mediaGroups: l},
                mediaTypes: {[i]: {groups: d, tracks: h, logger_: u}},
                mainPlaylistLoader: c
            } = s, p = yd(c.main);
            l[i] && 0 !== Object.keys(l[i]).length || (l[i] = {main: {default: {default: !0}}}, p && (l[i].main.default.playlists = c.main.playlists));
            for (const m in l[i]) {
                d[m] || (d[m] = []);
                for (const g in l[i][m]) {
                    let e = l[i][m][g], t;
                    t = p ? (u(`AUDIO group '${m}' label '${g}' is a main playlist`), e.isMainPlaylist = !0, null) : "vhs-json" === a && e.playlists ? new Ld(e.playlists[0], n, o) : e.resolvedUri ? new Ld(e.resolvedUri, n, o) : e.playlists && "dash" === a ? new eh(e.playlists[0], n, o, c) : null, e = P({
                        id: g,
                        playlistLoader: t
                    }, e), Su[i](i, e.playlistLoader, s), d[m].push(e), "undefined" == typeof h[g] && (r = new T.AudioTrack({
                        id: g,
                        kind: (e => {
                            let t = e.default ? "main" : "alternative";
                            return t = e.characteristics && 0 <= e.characteristics.indexOf("public.accessibility.describes-video") ? "main-desc" : t
                        })(e),
                        enabled: !1,
                        language: e.language,
                        default: e.default,
                        label: g
                    }), h[g] = r)
                }
            }
            e.on("error", wu[i](i, s))
        }, SUBTITLES: (i, s) => {
            var r, {
                tech: n,
                vhs: a,
                sourceType: o,
                segmentLoaders: {[i]: e},
                requestOptions: l,
                main: {mediaGroups: d},
                mediaTypes: {[i]: {groups: h, tracks: u}},
                mainPlaylistLoader: c
            } = s;
            for (const p in d[i]) {
                h[p] || (h[p] = []);
                for (const m in d[i][p]) if (a.options_.useForcedSubtitles || !d[i][p][m].forced) {
                    let e = d[i][p][m], t;
                    if ("hls" === o) t = new Ld(e.resolvedUri, a, l); else if ("dash" === o) {
                        if (!e.playlists.filter(e => e.excludeUntil !== 1 / 0).length) return;
                        t = new eh(e.playlists[0], a, l, c)
                    } else "vhs-json" === o && (t = new Ld(e.playlists ? e.playlists[0] : e.resolvedUri, a, l));
                    e = P({
                        id: m,
                        playlistLoader: t
                    }, e), Su[i](i, e.playlistLoader, s), h[p].push(e), "undefined" == typeof u[m] && (r = n.addRemoteTextTrack({
                        id: m,
                        kind: "subtitles",
                        default: e.default && e.autoselect,
                        language: e.language,
                        label: m
                    }, !1).track, u[m] = r)
                }
            }
            e.on("error", wu[i](i, s))
        }, "CLOSED-CAPTIONS": (e, t) => {
            var {tech: i, main: {mediaGroups: s}, mediaTypes: {[e]: {groups: r, tracks: n}}} = t;
            for (const l in s[e]) {
                r[l] || (r[l] = []);
                for (const d in s[e][l]) {
                    var a = s[e][l][d];
                    if (/^(?:CC|SERVICE)/.test(a.instreamId)) {
                        var o = i.options_.vhs && i.options_.vhs.captionServices || {};
                        let e = {
                            label: d,
                            language: a.language,
                            instreamId: a.instreamId,
                            default: a.default && a.autoselect
                        };
                        void 0 === (e = o[e.instreamId] ? P(e, o[e.instreamId]) : e).default && delete e.default, r[l].push(P({id: d}, a)), "undefined" == typeof n[d] && (o = i.addRemoteTextTrack({
                            id: e.instreamId,
                            kind: "captions",
                            default: e.default,
                            language: e.language,
                            label: e.label
                        }, !1).track, n[d] = o)
                    }
                }
            }
        }
    }, ku = (t, i) => {
        for (let e = 0; e < t.length; e++) {
            if (fd(i, t[e])) return !0;
            if (t[e].playlists && ku(t[e].playlists, i)) return !0
        }
        return !1
    }, Cu = {
        AUDIO: (i, s) => () => {
            var {[i]: {tracks: e}} = s["mediaTypes"];
            for (const t in e) if (e[t].enabled) return e[t];
            return null
        }, SUBTITLES: (i, s) => () => {
            var {[i]: {tracks: e}} = s["mediaTypes"];
            for (const t in e) if ("showing" === e[t].mode || "hidden" === e[t].mode) return e[t];
            return null
        }
    }, xu = n => {
        ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
            Eu[e](e, n)
        });
        const {mediaTypes: a, mainPlaylistLoader: e, tech: t, vhs: i, segmentLoaders: {AUDIO: s, main: r}} = n;
        ["AUDIO", "SUBTITLES"].forEach(e => {
            var o, l, d, h, i, s, u, c, t, r;
            a[e].activeGroup = (o = e, l = n, t => {
                var {mainPlaylistLoader: e, mediaTypes: {[o]: {groups: i}}} = l, s = e.media();
                if (!s) return null;
                let r = null;
                s.attributes[o] && (r = i[s.attributes[o]]);
                var n = Object.keys(i);
                if (!r) if ("AUDIO" === o && 1 < n.length && yd(l.main)) for (let e = 0; e < n.length; e++) {
                    var a = i[n[e]];
                    if (ku(a, s)) {
                        r = a;
                        break
                    }
                } else i.main ? r = i.main : 1 === n.length && (r = i[n[0]]);
                return "undefined" == typeof t ? r : null !== t && r && r.filter(e => e.id === t.id)[0] || null
            }), a[e].activeTrack = Cu[e](e, n), a[e].onGroupChanged = (d = e, h = n, () => {
                var {segmentLoaders: {[d]: e, main: t}, mediaTypes: {[d]: i}} = h, s = i.activeTrack(),
                    r = i.getActiveGroup(), n = i.activePlaylistLoader, a = i.lastGroup_;
                r && a && r.id === a.id || (i.lastGroup_ = r, i.lastTrack_ = s, bu(e, i), r && !r.isMainPlaylist && (r.playlistLoader ? (e.resyncLoader(), Tu(r.playlistLoader, i)) : n && t.resetEverything()))
            }), a[e].onGroupChanging = (i = e, s = n, () => {
                var {segmentLoaders: {[i]: e}, mediaTypes: {[i]: t}} = s;
                t.lastGroup_ = null, e.abort(), e.pause()
            }), a[e].onTrackChanged = (u = e, c = n, () => {
                var e, t, {mainPlaylistLoader: i, segmentLoaders: {[u]: s, main: r}, mediaTypes: {[u]: n}} = c,
                    a = n.activeTrack(), o = n.getActiveGroup(), l = n.activePlaylistLoader, d = n.lastTrack_;
                if ((!d || !a || d.id !== a.id) && (n.lastGroup_ = o, n.lastTrack_ = a, bu(s, n), o)) {
                    if (o.isMainPlaylist) return !a || !d || a.id === d.id || (t = (e = c.vhs.playlistController_).selectPlaylist(), e.media() === t) ? void 0 : (n.logger_(`track change. Switching main audio from ${d.id} to ` + a.id), i.pause(), r.resetEverything(), void e.fastQualityChange_(t));
                    if ("AUDIO" === u) {
                        if (!o.playlistLoader) return r.setAudio(!0), void r.resetEverything();
                        s.setAudio(!0), r.setAudio(!1)
                    }
                    l === o.playlistLoader || (s.track && s.track(a), s.resetEverything()), Tu(o.playlistLoader, n)
                }
            }), a[e].getActiveGroup = ([t, r] = [e, n["mediaTypes"]], () => {
                var e = r[t].activeTrack();
                return e ? r[t].activeGroup(e) : null
            })
        });
        var o = a.AUDIO.activeGroup();
        o && (o = (o.filter(e => e.default)[0] || o[0]).id, a.AUDIO.tracks[o].enabled = !0, a.AUDIO.onGroupChanged(), a.AUDIO.onTrackChanged(), (a.AUDIO.getActiveGroup().playlistLoader ? (r.setAudio(!1), s) : r).setAudio(!0)), e.on("mediachange", () => {
            ["AUDIO", "SUBTITLES"].forEach(e => a[e].onGroupChanged())
        }), e.on("mediachanging", () => {
            ["AUDIO", "SUBTITLES"].forEach(e => a[e].onGroupChanging())
        });
        const l = () => {
            a.AUDIO.onTrackChanged(), t.trigger({type: "usage", name: "vhs-audio-change"})
        };
        t.audioTracks().addEventListener("change", l), t.remoteTextTracks().addEventListener("change", a.SUBTITLES.onTrackChanged), i.on("dispose", () => {
            t.audioTracks().removeEventListener("change", l), t.remoteTextTracks().removeEventListener("change", a.SUBTITLES.onTrackChanged)
        }), t.clearTracks("audio");
        for (const d in a.AUDIO.tracks) t.audioTracks().addTrack(a.AUDIO.tracks[d])
    };

    class Iu {
        constructor() {
            this.priority_ = []
        }

        set version(e) {
            1 === e && (this.version_ = e)
        }

        set ttl(e) {
            this.ttl_ = e || 300
        }

        set reloadUri(e) {
            e && (this.reloadUri_ = jl(this.reloadUri_, e))
        }

        set priority(e) {
            e && e.length && (this.priority_ = e)
        }

        get version() {
            return this.version_
        }

        get ttl() {
            return this.ttl_
        }

        get reloadUri() {
            return this.reloadUri_
        }

        get priority() {
            return this.priority_
        }
    }

    class Au extends T.EventTarget {
        constructor(e, t) {
            super(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = null, this.availablePathways_ = new Set, this.excludedPathways_ = new Set, this.steeringManifest = new Iu, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.excludedSteeringManifestURLs = new Set, this.logger_ = Hl("Content Steering"), this.xhr_ = e, this.getBandwidth_ = t
        }

        assignTagProperties(e, t) {
            this.manifestType_ = t.serverUri ? "HLS" : "DASH";
            var i = t.serverUri || t.serverURL;
            i ? i.startsWith("data:") ? this.decodeDataUriManifest_(i.substring(i.indexOf(",") + 1)) : (this.steeringManifest.reloadUri = this.queryBeforeStart ? i : jl(e, i), this.defaultPathway = t.pathwayId || t.defaultServiceLocation, this.queryBeforeStart = t.queryBeforeStart || !1, this.proxyServerUrl_ = t.proxyServerURL || null, this.defaultPathway && !this.queryBeforeStart && this.trigger("content-steering"), this.queryBeforeStart && this.requestSteeringManifest(this.steeringManifest.reloadUri)) : (this.logger_(`steering manifest URL is ${i}, cannot request steering manifest.`), this.trigger("error"))
        }

        requestSteeringManifest(e) {
            var t = this.steeringManifest.reloadUri;
            if (e || t) {
                const i = e || this.getRequestURI(t);
                i ? this.request_ = this.xhr_({uri: i}, (e, t) => {
                    if (e) return 410 === t.status ? (this.logger_(`manifest request 410 ${e}.`), this.logger_(`There will be no more content steering requests to ${i} this session.`), void this.excludedSteeringManifestURLs.add(i)) : 429 === t.status ? (t = t.responseHeaders["retry-after"], this.logger_(`manifest request 429 ${e}.`), this.logger_(`content steering will retry in ${t} seconds.`), void this.startTTLTimeout_(parseInt(t, 10))) : (this.logger_(`manifest failed to load ${e}.`), void this.startTTLTimeout_());
                    t = JSON.parse(this.request_.responseText);
                    this.startTTLTimeout_(), this.assignSteeringProperties_(t)
                }) : (this.logger_("No valid content steering manifest URIs. Stopping content steering."), this.trigger("error"), this.dispose())
            }
        }

        setProxyServerUrl_(e) {
            var e = new window.URL(e), t = new window.URL(this.proxyServerUrl_);
            return t.searchParams.set("url", encodeURI(e.toString())), this.setSteeringParams_(t.toString())
        }

        decodeDataUriManifest_(e) {
            e = JSON.parse(window.atob(e));
            this.assignSteeringProperties_(e)
        }

        setSteeringParams_(e) {
            var t, e = new window.URL(e), i = this.getPathway(), s = this.getBandwidth_();
            return i && (t = `_${this.manifestType_}_pathway`, e.searchParams.set(t, i)), s && (t = `_${this.manifestType_}_throughput`, e.searchParams.set(t, s)), e.toString()
        }

        assignSteeringProperties_(e) {
            var t;
            this.steeringManifest.version = e.VERSION, this.steeringManifest.version ? (this.steeringManifest.ttl = e.TTL, this.steeringManifest.reloadUri = e["RELOAD-URI"], this.steeringManifest.priority = e["PATHWAY-PRIORITY"] || e["SERVICE-LOCATION-PRIORITY"], this.availablePathways_.size || (this.logger_("There are no available pathways for content steering. Ending content steering."), this.trigger("error"), this.dispose()), t = (e => {
                for (const t of e) if (this.availablePathways_.has(t)) return t;
                return [...this.availablePathways_][0]
            })(this.steeringManifest.priority), this.currentPathway !== t && (this.currentPathway = t, this.trigger("content-steering"))) : (this.logger_(`manifest version is ${e.VERSION}, which is not supported.`), this.trigger("error"))
        }

        getPathway() {
            return this.currentPathway || this.defaultPathway
        }

        getRequestURI(e) {
            if (!e) return null;
            var t = e => this.excludedSteeringManifestURLs.has(e);
            if (this.proxyServerUrl_) {
                var i = this.setProxyServerUrl_(e);
                if (!t(i)) return i
            }
            i = this.setSteeringParams_(e);
            return t(i) ? null : i
        }

        startTTLTimeout_(e = this.steeringManifest.ttl) {
            this.ttlTimeout_ = window.setTimeout(() => {
                this.requestSteeringManifest()
            }, 1e3 * e)
        }

        clearTTLTimeout_() {
            window.clearTimeout(this.ttlTimeout_), this.ttlTimeout_ = null
        }

        abort() {
            this.request_ && this.request_.abort(), this.request_ = null
        }

        dispose() {
            this.off("content-steering"), this.off("error"), this.abort(), this.clearTTLTimeout_(), this.currentPathway = null, this.defaultPathway = null, this.queryBeforeStart = null, this.proxyServerUrl_ = null, this.manifestType_ = null, this.ttlTimeout_ = null, this.request_ = null, this.excludedSteeringManifestURLs = new Set, this.availablePathways_ = new Set, this.excludedPathways_ = new Set, this.steeringManifest = new Iu
        }

        addAvailablePathway(e) {
            e && this.availablePathways_.add(e)
        }

        clearAvailablePathways() {
            this.availablePathways_.clear()
        }

        excludePathway(e) {
            return this.availablePathways_.delete(e)
        }
    }

    let Du;
    const Lu = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"];

    class Pu extends T.EventTarget {
        constructor(e) {
            super();
            const {
                src: t,
                withCredentials: i,
                tech: r,
                bandwidth: s,
                externVhs: n,
                useCueTags: a,
                playlistExclusionDuration: o,
                enableLowInitialPlaylist: l,
                sourceType: d,
                cacheEncryptionKeys: h,
                bufferBasedABR: u,
                leastPixelDiffSelector: c,
                captionServices: p
            } = e;
            if (!t) throw new Error("A non-empty playlist URL or JSON manifest string is required");
            let m = e["maxPlaylistRetries"];
            null !== m && "undefined" != typeof m || (m = 1 / 0), Du = n, this.bufferBasedABR = Boolean(u), this.leastPixelDiffSelector = Boolean(c), this.withCredentials = i, this.tech_ = r, this.vhs_ = r.vhs, this.sourceType_ = d, this.useCueTags_ = a, this.playlistExclusionDuration = o, this.maxPlaylistRetries = m, this.enableLowInitialPlaylist = l, this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), this.requestOptions_ = {
                withCredentials: i,
                maxPlaylistRetries: m,
                timeout: null
            }, this.on("error", this.pauseLoading), this.mediaTypes_ = (() => {
                const t = {};
                return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
                    t[e] = {
                        groups: {},
                        tracks: {},
                        activePlaylistLoader: null,
                        activeGroup: tu,
                        activeTrack: tu,
                        getActiveGroup: tu,
                        onGroupChanged: tu,
                        onTrackChanged: tu,
                        lastTrack_: null,
                        logger_: Hl(`MediaGroups[${e}]`)
                    }
                }), t
            })(), this.mediaSource = new window.MediaSource, this.handleDurationChange_ = this.handleDurationChange_.bind(this), this.handleSourceOpen_ = this.handleSourceOpen_.bind(this), this.handleSourceEnded_ = this.handleSourceEnded_.bind(this), this.mediaSource.addEventListener("durationchange", this.handleDurationChange_), this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.addEventListener("sourceended", this.handleSourceEnded_), this.seekable_ = Vl(), this.hasPlayed_ = !1, this.syncController_ = new yu(e), this.segmentMetadataTrack_ = r.addRemoteTextTrack({
                kind: "metadata",
                label: "segment-metadata"
            }, !1).track, this.decrypter_ = new vu, this.sourceUpdater_ = new uu(this.mediaSource), this.inbandTextTracks_ = {}, this.timelineChangeController_ = new _u;
            var g = {
                    vhs: this.vhs_,
                    parse708captions: e.parse708captions,
                    useDtsForTimestampOffset: e.useDtsForTimestampOffset,
                    calculateTimestampOffsetForEachSegment: e.calculateTimestampOffsetForEachSegment,
                    captionServices: p,
                    mediaSource: this.mediaSource,
                    currentTime: this.tech_.currentTime.bind(this.tech_),
                    seekable: () => this.seekable(),
                    seeking: () => this.tech_.seeking(),
                    duration: () => this.duration(),
                    hasPlayed: () => this.hasPlayed_,
                    goalBufferLength: () => this.goalBufferLength(),
                    bandwidth: s,
                    syncController: this.syncController_,
                    decrypter: this.decrypter_,
                    sourceType: this.sourceType_,
                    inbandTextTracks: this.inbandTextTracks_,
                    cacheEncryptionKeys: h,
                    sourceUpdater: this.sourceUpdater_,
                    timelineChangeController: this.timelineChangeController_,
                    exactManifestTimings: e.exactManifestTimings,
                    addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this)
                },
                g = (this.mainPlaylistLoader_ = "dash" === this.sourceType_ ? new eh(t, this.vhs_, P(this.requestOptions_, {addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this)})) : new Ld(t, this.vhs_, P(this.requestOptions_, {addDateRangesToTextTrack: this.addDateRangesToTextTrack_.bind(this)})), this.setupMainPlaylistLoaderListeners_(), this.mainSegmentLoader_ = new eu(P(g, {
                    segmentMetadataTrack: this.segmentMetadataTrack_,
                    loaderType: "main"
                }), e), this.audioSegmentLoader_ = new eu(P(g, {loaderType: "audio"}), e), this.subtitleSegmentLoader_ = new gu(P(g, {
                    loaderType: "vtt",
                    featuresNativeTextTracks: this.tech_.featuresNativeTextTracks,
                    loadVttJs: () => new Promise((e, t) => {
                        function i() {
                            r.off("vttjserror", s), e()
                        }

                        function s() {
                            r.off("vttjsloaded", i), t()
                        }

                        r.one("vttjsloaded", i), r.one("vttjserror", s), r.addWebVttScript_()
                    })
                }), e), this.contentSteeringController_ = new Au(this.vhs_.xhr, () => this.mainSegmentLoader_.bandwidth), this.setupSegmentLoaderListeners_(), this.bufferBasedABR && (this.mainPlaylistLoader_.one("loadedplaylist", () => this.startABRTimer_()), this.tech_.on("pause", () => this.stopABRTimer_()), this.tech_.on("play", () => this.startABRTimer_())), Lu.forEach(e => {
                    this[e + "_"] = function (e) {
                        return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
                    }.bind(this, e)
                }), this.logger_ = Hl("pc"), this.triggeredFmp4Usage = !1, "none" === this.tech_.preload() ? (this.loadOnPlay_ = () => {
                    this.loadOnPlay_ = null, this.mainPlaylistLoader_.load()
                }, this.tech_.one("play", this.loadOnPlay_)) : this.mainPlaylistLoader_.load(), this.timeToLoadedData__ = -1, this.mainAppendsToLoadedData__ = -1, this.audioAppendsToLoadedData__ = -1, "none" === this.tech_.preload() ? "play" : "loadstart");
            this.tech_.one(g, () => {
                const e = Date.now();
                this.tech_.one("loadeddata", () => {
                    this.timeToLoadedData__ = Date.now() - e, this.mainAppendsToLoadedData__ = this.mainSegmentLoader_.mediaAppends, this.audioAppendsToLoadedData__ = this.audioSegmentLoader_.mediaAppends
                })
            })
        }

        mainAppendsToLoadedData_() {
            return this.mainAppendsToLoadedData__
        }

        audioAppendsToLoadedData_() {
            return this.audioAppendsToLoadedData__
        }

        appendsToLoadedData_() {
            var e = this.mainAppendsToLoadedData_(), t = this.audioAppendsToLoadedData_();
            return -1 === e || -1 === t ? -1 : e + t
        }

        timeToLoadedData_() {
            return this.timeToLoadedData__
        }

        checkABR_(e = "abr") {
            var t = this.selectPlaylist();
            t && this.shouldSwitchToMedia_(t) && this.switchMedia_(t, e)
        }

        switchMedia_(e, t, i) {
            var s = this.media(), s = s && (s.id || s.uri), r = e.id || e.uri;
            s && s !== r && (this.logger_(`switch media ${s} -> ${r} from ` + t), this.tech_.trigger({
                type: "usage",
                name: "vhs-rendition-change-" + t
            })), this.mainPlaylistLoader_.media(e, i)
        }

        switchMediaForDASHContentSteering_() {
            ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
                var t = this.mediaTypes_[e], t = t ? t.activeGroup() : null;
                const i = this.contentSteeringController_.getPathway();
                t && i && (t = (t.length ? t[0] : t).playlists.filter(e => e.attributes.serviceLocation === i)).length && this.mediaTypes_[e].activePlaylistLoader.media(t[0])
            })
        }

        startABRTimer_() {
            this.stopABRTimer_(), this.abrTimer_ = window.setInterval(() => this.checkABR_(), 250)
        }

        stopABRTimer_() {
            this.tech_.scrubbing && this.tech_.scrubbing() || (window.clearInterval(this.abrTimer_), this.abrTimer_ = null)
        }

        getAudioTrackPlaylists_() {
            var t = this.main(), e = t && t.playlists || [];
            if (!t || !t.mediaGroups || !t.mediaGroups.AUDIO) return e;
            var i = t.mediaGroups.AUDIO, s = Object.keys(i);
            let r;
            if (Object.keys(this.mediaTypes_.AUDIO.groups).length) r = this.mediaTypes_.AUDIO.activeTrack(); else {
                var n = i.main || s.length && i[s[0]];
                for (const d in n) if (n[d].default) {
                    r = {label: d};
                    break
                }
            }
            if (!r) return e;
            var a = [];
            for (const h in i) if (i[h][r.label]) {
                var o = i[h][r.label];
                if (o.playlists && o.playlists.length) a.push.apply(a, o.playlists); else if (o.uri) a.push(o); else if (t.playlists.length) for (let e = 0; e < t.playlists.length; e++) {
                    var l = t.playlists[e];
                    l.attributes && l.attributes.AUDIO && l.attributes.AUDIO === h && a.push(l)
                }
            }
            return a.length ? a : e
        }

        setupMainPlaylistLoaderListeners_() {
            this.mainPlaylistLoader_.on("loadedmetadata", () => {
                var e = this.mainPlaylistLoader_.media(), t = 1.5 * e.targetDuration * 1e3;
                gd(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t, e.endList && "none" !== this.tech_.preload() && (this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.mainSegmentLoader_.load()), xu({
                    sourceType: this.sourceType_,
                    segmentLoaders: {
                        AUDIO: this.audioSegmentLoader_,
                        SUBTITLES: this.subtitleSegmentLoader_,
                        main: this.mainSegmentLoader_
                    },
                    tech: this.tech_,
                    requestOptions: this.requestOptions_,
                    mainPlaylistLoader: this.mainPlaylistLoader_,
                    vhs: this.vhs_,
                    main: this.main(),
                    mediaTypes: this.mediaTypes_,
                    excludePlaylist: this.excludePlaylist.bind(this)
                }), this.triggerPresenceUsage_(this.main(), e), this.setupFirstPlay(), !this.mediaTypes_.AUDIO.activePlaylistLoader || this.mediaTypes_.AUDIO.activePlaylistLoader.media() ? this.trigger("selectedinitialmedia") : this.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", () => {
                    this.trigger("selectedinitialmedia")
                })
            }), this.mainPlaylistLoader_.on("loadedplaylist", () => {
                this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
                let t = this.mainPlaylistLoader_.media();
                if (!t) {
                    this.initContentSteeringController_(), this.excludeUnsupportedVariants_();
                    let e;
                    if (!(e = (e = this.enableLowInitialPlaylist ? this.selectInitialPlaylist() : e) || this.selectPlaylist()) || !this.shouldSwitchToMedia_(e)) return;
                    if (this.initialMedia_ = e, this.switchMedia_(this.initialMedia_, "initial"), !("vhs-json" === this.sourceType_ && this.initialMedia_.segments)) return;
                    t = this.initialMedia_
                }
                this.handleUpdatedMediaPlaylist(t)
            }), this.mainPlaylistLoader_.on("error", () => {
                var e = this.mainPlaylistLoader_.error;
                this.excludePlaylist({playlistToExclude: e.playlist, error: e})
            }), this.mainPlaylistLoader_.on("mediachanging", () => {
                this.mainSegmentLoader_.abort(), this.mainSegmentLoader_.pause()
            }), this.mainPlaylistLoader_.on("mediachange", () => {
                var e = this.mainPlaylistLoader_.media(), t = 1.5 * e.targetDuration * 1e3;
                gd(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t, this.mainPlaylistLoader_.load(), this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.mainSegmentLoader_.load(), this.tech_.trigger({
                    type: "mediachange",
                    bubbles: !0
                })
            }), this.mainPlaylistLoader_.on("playlistunchanged", () => {
                var e = this.mainPlaylistLoader_.media();
                "playlist-unchanged" !== e.lastExcludeReason_ && this.stuckAtPlaylistEnd_(e) && (this.excludePlaylist({
                    error: {
                        message: "Playlist no longer updating.",
                        reason: "playlist-unchanged"
                    }
                }), this.tech_.trigger("playliststuck"))
            }), this.mainPlaylistLoader_.on("renditiondisabled", () => {
                this.tech_.trigger({type: "usage", name: "vhs-rendition-disabled"})
            }), this.mainPlaylistLoader_.on("renditionenabled", () => {
                this.tech_.trigger({type: "usage", name: "vhs-rendition-enabled"})
            })
        }

        handleUpdatedMediaPlaylist(e) {
            this.useCueTags_ && this.updateAdCues_(e), this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.updateDuration(!e.endList), this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load())
        }

        triggerPresenceUsage_(e, t) {
            var i = e.mediaGroups || {};
            let s = !0;
            e = Object.keys(i.AUDIO);
            for (const r in i.AUDIO) for (const n in i.AUDIO[r]) i.AUDIO[r][n].uri || (s = !1);
            s && this.tech_.trigger({
                type: "usage",
                name: "vhs-demuxed"
            }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
                type: "usage",
                name: "vhs-webvtt"
            }), Du.Playlist.isAes(t) && this.tech_.trigger({
                type: "usage",
                name: "vhs-aes"
            }), e.length && 1 < Object.keys(i.AUDIO[e[0]]).length && this.tech_.trigger({
                type: "usage",
                name: "vhs-alternate-audio"
            }), this.useCueTags_ && this.tech_.trigger({type: "usage", name: "vhs-playlist-cue-tags"})
        }

        shouldSwitchToMedia_(t) {
            var e = this.mainPlaylistLoader_.media() || this.mainPlaylistLoader_.pendingMedia_,
                i = this.tech_.currentTime(), s = this.bufferLowWaterLine(), r = this.bufferHighWaterLine(), {
                    currentPlaylist: i,
                    buffered: e,
                    currentTime: t,
                    nextPlaylist: s,
                    bufferLowWaterLine: r,
                    bufferHighWaterLine: n,
                    duration: a,
                    bufferBasedABR: o,
                    log: l
                } = [{
                    buffered: this.tech_.buffered(),
                    currentTime: i,
                    currentPlaylist: e,
                    nextPlaylist: t,
                    bufferLowWaterLine: s,
                    bufferHighWaterLine: r,
                    duration: this.duration(),
                    bufferBasedABR: this.bufferBasedABR,
                    log: this.logger_
                }][0];
            if (s) {
                var d = `allowing switch ${i && i.id || "null"} -> ` + s.id;
                if (!i) return l(d + " as current playlist is not set"), !0;
                if (s.id !== i.id) {
                    var h = Boolean(zl(e, t).length);
                    if (!i.endList) return h || "number" != typeof i.partTargetDuration ? (l(d + " as current playlist is live"), !0) : (l(`not ${d} as current playlist is live llhls, but currentTime isn't in buffered.`), !1);
                    h = Gl(e, t), e = o ? O.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : O.MAX_BUFFER_LOW_WATER_LINE;
                    if (a < e) return l(d + ` as duration < max low water line (${a} < ${e})`), !0;
                    t = s.attributes.BANDWIDTH, a = i.attributes.BANDWIDTH;
                    if (t < a && (!o || h < n)) {
                        let e = d + ` as next bandwidth < current bandwidth (${t} < ${a})`;
                        return o && (e += ` and forwardBuffer < bufferHighWaterLine (${h} < ${n})`), l(e), !0
                    }
                    if ((!o || a < t) && r <= h) {
                        let e = d + ` as forwardBuffer >= bufferLowWaterLine (${h} >= ${r})`;
                        return o && (e += ` and next bandwidth > current bandwidth (${t} > ${a})`), l(e), !0
                    }
                    l(`not ${d} as no switching criteria met`)
                }
            } else T.log.warn("We received no playlist to switch to. Please check your stream.");
            return !1
        }

        setupSegmentLoaderListeners_() {
            this.mainSegmentLoader_.on("bandwidthupdate", () => {
                this.checkABR_("bandwidthupdate"), this.tech_.trigger("bandwidthupdate")
            }), this.mainSegmentLoader_.on("timeout", () => {
                this.bufferBasedABR && this.mainSegmentLoader_.load()
            }), this.bufferBasedABR || this.mainSegmentLoader_.on("progress", () => {
                this.trigger("progress")
            }), this.mainSegmentLoader_.on("error", () => {
                var e = this.mainSegmentLoader_.error();
                this.excludePlaylist({playlistToExclude: e.playlist, error: e})
            }), this.mainSegmentLoader_.on("appenderror", () => {
                this.error = this.mainSegmentLoader_.error_, this.trigger("error")
            }), this.mainSegmentLoader_.on("syncinfoupdate", () => {
                this.onSyncInfoUpdate_()
            }), this.mainSegmentLoader_.on("timestampoffset", () => {
                this.tech_.trigger({type: "usage", name: "vhs-timestamp-offset"})
            }), this.audioSegmentLoader_.on("syncinfoupdate", () => {
                this.onSyncInfoUpdate_()
            }), this.audioSegmentLoader_.on("appenderror", () => {
                this.error = this.audioSegmentLoader_.error_, this.trigger("error")
            }), this.mainSegmentLoader_.on("ended", () => {
                this.logger_("main segment loader ended"), this.onEndOfStream()
            }), this.mainSegmentLoader_.on("earlyabort", e => {
                this.bufferBasedABR || (this.delegateLoaders_("all", ["abort"]), this.excludePlaylist({
                    error: {message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},
                    playlistExclusionDuration: 10
                }))
            });
            var e = () => {
                if (!this.sourceUpdater_.hasCreatedSourceBuffers()) return this.tryToCreateSourceBuffers_();
                var e = this.getCodecsOrExclude_();
                e && this.sourceUpdater_.addOrChangeSourceBuffers(e)
            };
            this.mainSegmentLoader_.on("trackinfo", e), this.audioSegmentLoader_.on("trackinfo", e), this.mainSegmentLoader_.on("fmp4", () => {
                this.triggeredFmp4Usage || (this.tech_.trigger({
                    type: "usage",
                    name: "vhs-fmp4"
                }), this.triggeredFmp4Usage = !0)
            }), this.audioSegmentLoader_.on("fmp4", () => {
                this.triggeredFmp4Usage || (this.tech_.trigger({
                    type: "usage",
                    name: "vhs-fmp4"
                }), this.triggeredFmp4Usage = !0)
            }), this.audioSegmentLoader_.on("ended", () => {
                this.logger_("audioSegmentLoader ended"), this.onEndOfStream()
            })
        }

        mediaSecondsLoaded_() {
            return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
        }

        load() {
            this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
        }

        fastQualityChange_(e = this.selectPlaylist()) {
            e === this.mainPlaylistLoader_.media() ? this.logger_("skipping fastQualityChange because new media is same as old") : (this.switchMedia_(e, "fast-quality"), this.resetMainLoaderReplaceSegments())
        }

        resetMainLoaderReplaceSegments() {
            var e = this.tech_.buffered(), e = e.end(e.length - 1);
            this.mainSegmentLoader_.replaceSegmentsUntil = e, this.mainSegmentLoader_.resetLoaderProperties(), this.mainSegmentLoader_.resetLoader()
        }

        play() {
            var e;
            if (!this.setupFirstPlay()) return this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_ && this.load(), e = this.tech_.seekable(), this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0
        }

        setupFirstPlay() {
            var t = this.mainPlaylistLoader_.media();
            if (!t || this.tech_.paused() || this.hasPlayed_) return !1;
            if (!t.endList || t.start) {
                var i = this.seekable();
                if (!i.length) return !1;
                var s = i.end(0);
                let e = s;
                t.start && (t = t.start.timeOffset, e = t < 0 ? Math.max(s + t, i.start(0)) : Math.min(s, t)), this.trigger("firstplay"), this.tech_.setCurrentTime(e)
            }
            return this.hasPlayed_ = !0, this.load(), !0
        }

        handleSourceOpen_() {
            var e;
            this.tryToCreateSourceBuffers_(), this.tech_.autoplay() && "undefined" != typeof (e = this.tech_.play()) && "function" == typeof e.then && e.then(null, e => {
            }), this.trigger("sourceopen")
        }

        handleSourceEnded_() {
            var e, t;
            this.inbandTextTracks_.metadataTrack_ && (e = this.inbandTextTracks_.metadataTrack_.cues) && e.length && (t = this.duration(), e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t)
        }

        handleDurationChange_() {
            this.tech_.trigger("durationchange")
        }

        onEndOfStream() {
            let e = this.mainSegmentLoader_.ended_;
            var t;
            this.mediaTypes_.AUDIO.activePlaylistLoader && (t = this.mainSegmentLoader_.getCurrentMediaInfo_(), e = (t && !t.hasVideo || e) && this.audioSegmentLoader_.ended_), e && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream())
        }

        stuckAtPlaylistEnd_(e) {
            var t, i;
            return !!this.seekable().length && null !== (t = this.syncController_.getExpiredTime(e, this.duration())) && (e = Du.Playlist.playlistEnd(e, t), t = this.tech_.currentTime(), (i = this.tech_.buffered()).length ? (i = i.end(i.length - 1)) - t <= Ql && e - i <= Ql : e - t <= Ql)
        }

        excludePlaylist({
                            playlistToExclude: s = this.mainPlaylistLoader_.media(),
                            error: t = {},
                            playlistExclusionDuration: i
                        }) {
            if (s = s || this.mainPlaylistLoader_.media(), i = i || t.playlistExclusionDuration || this.playlistExclusionDuration, s) {
                s.playlistErrors_++;
                var r = this.mainPlaylistLoader_.main.playlists, n = r.filter(cd), n = 1 === n.length && n[0] === s;
                if (1 === r.length && i !== 1 / 0) return T.log.warn(`Problem encountered with playlist ${s.id}. ` + "Trying again since it is the only playlist."), this.tech_.trigger("retryplaylist"), this.mainPlaylistLoader_.load(n);
                if (n) {
                    if (this.main().contentSteering) {
                        const o = this.pathwayAttribute_(s);
                        var a = 1e3 * this.contentSteeringController_.steeringManifest.ttl;
                        return this.contentSteeringController_.excludePathway(o), this.excludeThenChangePathway_(), void setTimeout(() => {
                            this.contentSteeringController_.addAvailablePathway(o)
                        }, a)
                    }
                    let i = !1;
                    r.forEach(e => {
                        var t;
                        e !== s && "undefined" != typeof (t = e.excludeUntil) && t !== 1 / 0 && (i = !0, delete e.excludeUntil)
                    }), i && (T.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"))
                }
                let e;
                e = s.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + 1e3 * i, s.excludeUntil = e, t.reason && (s.lastExcludeReason_ = t.reason), this.tech_.trigger("excludeplaylist"), this.tech_.trigger({
                    type: "usage",
                    name: "vhs-rendition-excluded"
                });
                a = this.selectPlaylist();
                if (a) return r = t.internal ? this.logger_ : T.log.warn, i = t.message ? " " + t.message : "", r(`${t.internal ? "Internal problem" : "Problem"} encountered with playlist ${s.id}.` + i + ` Switching to playlist ${a.id}.`), a.attributes.AUDIO !== s.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]), a.attributes.SUBTITLES !== s.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]), this.delegateLoaders_("main", ["abort", "pause"]), r = a.targetDuration / 2 * 1e3 || 5e3, i = "number" == typeof a.lastRequest && Date.now() - a.lastRequest <= r, this.switchMedia_(a, "exclude", n || i);
                this.error = "Playback cannot continue. No available working or supported playlists.", this.trigger("error")
            } else this.error = t, "open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network")
        }

        pauseLoading() {
            this.delegateLoaders_("all", ["abort", "pause"]), this.stopABRTimer_()
        }

        delegateLoaders_(i, e) {
            const s = [];
            var t = "all" === i, r = (!t && "main" !== i || s.push(this.mainPlaylistLoader_), []);
            !t && "audio" !== i || r.push("AUDIO"), !t && "subtitle" !== i || (r.push("CLOSED-CAPTIONS"), r.push("SUBTITLES")), r.forEach(e => {
                e = this.mediaTypes_[e] && this.mediaTypes_[e].activePlaylistLoader;
                e && s.push(e)
            }), ["main", "audio", "subtitle"].forEach(e => {
                var t = this[e + "SegmentLoader_"];
                !t || i !== e && "all" !== i || s.push(t)
            }), s.forEach(t => e.forEach(e => {
                "function" == typeof t[e] && t[e]()
            }))
        }

        setCurrentTime(e) {
            var t = zl(this.tech_.buffered(), e);
            return this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media() && this.mainPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.resetEverything(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.resetEverything(), void this.load()) : 0
        }

        duration() {
            var e;
            return this.mainPlaylistLoader_ && (e = this.mainPlaylistLoader_.media()) ? e.endList ? this.mediaSource ? this.mediaSource.duration : Du.Playlist.duration(e) : 1 / 0 : 0
        }

        seekable() {
            return this.seekable_
        }

        onSyncInfoUpdate_() {
            let i;
            if (this.mainPlaylistLoader_) {
                var s = this.mainPlaylistLoader_.media();
                if (s) {
                    var r = this.syncController_.getExpiredTime(s, this.duration());
                    if (null !== r) {
                        var n = this.mainPlaylistLoader_.main,
                            a = Du.Playlist.seekable(s, r, Du.Playlist.liveEdgeDelay(n, s));
                        if (0 !== a.length) {
                            if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                                if (s = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (r = this.syncController_.getExpiredTime(s, this.duration()))) return;
                                if (0 === (i = Du.Playlist.seekable(s, r, Du.Playlist.liveEdgeDelay(n, s))).length) return
                            }
                            let e, t;
                            this.seekable_ && this.seekable_.length && (e = this.seekable_.end(0), t = this.seekable_.start(0)), !i || i.start(0) > a.end(0) || a.start(0) > i.end(0) ? this.seekable_ = a : this.seekable_ = Vl([[(i.start(0) > a.start(0) ? i : a).start(0), (i.end(0) < a.end(0) ? i : a).end(0)]]), this.seekable_ && this.seekable_.length && this.seekable_.end(0) === e && this.seekable_.start(0) === t || (this.logger_(`seekable updated [${Zl(this.seekable_)}]`), this.tech_.trigger("seekablechanged"))
                        }
                    }
                }
            }
        }

        updateDuration(t) {
            if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), "open" !== this.mediaSource.readyState) this.updateDuration_ = this.updateDuration.bind(this, t), this.mediaSource.addEventListener("sourceopen", this.updateDuration_); else {
                if (t) return (t = this.seekable()).length ? void ((isNaN(this.mediaSource.duration) || this.mediaSource.duration < t.end(t.length - 1)) && this.sourceUpdater_.setDuration(t.end(t.length - 1))) : void 0;
                t = this.tech_.buffered();
                let e = Du.Playlist.duration(this.mainPlaylistLoader_.media());
                0 < t.length && (e = Math.max(e, t.end(t.length - 1))), this.mediaSource.duration !== e && this.sourceUpdater_.setDuration(e)
            }
        }

        dispose() {
            this.trigger("dispose"), this.decrypter_.terminate(), this.mainPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), this.contentSteeringController_.dispose(), this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_), ["AUDIO", "SUBTITLES"].forEach(e => {
                var t = this.mediaTypes_[e].groups;
                for (const i in t) t[i].forEach(e => {
                    e.playlistLoader && e.playlistLoader.dispose()
                })
            }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose(), this.sourceUpdater_.dispose(), this.timelineChangeController_.dispose(), this.stopABRTimer_(), this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_), this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_), this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_), this.off()
        }

        main() {
            return this.mainPlaylistLoader_.main
        }

        media() {
            return this.mainPlaylistLoader_.media() || this.initialMedia_
        }

        areMediaTypesKnown_() {
            var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader, t = !!this.mainSegmentLoader_.getCurrentMediaInfo_(),
                e = !e || !!this.audioSegmentLoader_.getCurrentMediaInfo_();
            return t && e
        }

        getCodecsOrExclude_() {
            const r = {
                main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {},
                audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {}
            }, t = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
            r.video = r.main;
            var e = vh(this.main(), t);
            const n = {};
            var i = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
            if (r.main.hasVideo && (n.video = e.video || r.main.videoCodec || "avc1.4d400d"), r.main.isMuxed && (n.video += "," + (e.audio || r.main.audioCodec || Hn)), (r.main.hasAudio && !r.main.isMuxed || r.audio.hasAudio || i) && (n.audio = e.audio || r.main.audioCodec || r.audio.audioCodec || Hn, r.audio.isFmp4 = (r.main.hasAudio && !r.main.isMuxed ? r.main : r.audio).isFmp4), n.audio || n.video) {
                const a = {};
                let s;
                if (["video", "audio"].forEach(function (e) {
                    var t, i;
                    n.hasOwnProperty(e) && (t = r[e].isFmp4, i = n[e], !(t ? Dn : Ln)(i)) && (t = r[e].isFmp4 ? "browser" : "muxer", a[t] = a[t] || [], a[t].push(n[e]), "audio" === e && (s = t))
                }), i && s && t.attributes.AUDIO) {
                    const o = t.attributes.AUDIO;
                    this.main().playlists.forEach(e => {
                        (e.attributes && e.attributes.AUDIO) === o && e !== t && (e.excludeUntil = 1 / 0)
                    }), this.logger_(`excluding audio group ${o} as ${s} does not support codec(s): "${n.audio}"`)
                }
                if (!Object.keys(a).length) {
                    if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
                        const l = [];
                        if (["video", "audio"].forEach(e => {
                            var t = (jn(this.sourceUpdater_.codecs[e] || "")[0] || {}).type,
                                i = (jn(n[e] || "")[0] || {}).type;
                            t && i && t.toLowerCase() !== i.toLowerCase() && l.push(`"${this.sourceUpdater_.codecs[e]}" -> "${n[e]}"`)
                        }), l.length) return void this.excludePlaylist({
                            playlistToExclude: t,
                            error: {message: `Codec switching not supported: ${l.join(", ")}.`, internal: !0},
                            playlistExclusionDuration: 1 / 0
                        })
                    }
                    return n
                }
                e = Object.keys(a).reduce((e, t) => (e && (e += ", "), e += `${t} does not support codec(s): "${a[t].join(",")}"`), "") + ".", this.excludePlaylist({
                    playlistToExclude: t,
                    error: {internal: !0, message: e},
                    playlistExclusionDuration: 1 / 0
                })
            } else this.excludePlaylist({
                playlistToExclude: t,
                error: {message: "Could not determine codecs for playlist."},
                playlistExclusionDuration: 1 / 0
            })
        }

        tryToCreateSourceBuffers_() {
            var e;
            "open" !== this.mediaSource.readyState || this.sourceUpdater_.hasCreatedSourceBuffers() || this.areMediaTypesKnown_() && (e = this.getCodecsOrExclude_()) && (this.sourceUpdater_.createSourceBuffers(e), e = [e.video, e.audio].filter(Boolean).join(","), this.excludeIncompatibleVariants_(e))
        }

        excludeUnsupportedVariants_() {
            const s = this.main().playlists, r = [];
            Object.keys(s).forEach(e => {
                var t, i, e = s[e];
                -1 === r.indexOf(e.id) && (r.push(e.id), i = [], !(t = vh(this.main, e)).audio || Ln(t.audio) || Dn(t.audio) || i.push("audio codec " + t.audio), !t.video || Ln(t.video) || Dn(t.video) || i.push("video codec " + t.video), t.text && "stpp.ttml.im1t" === t.text && i.push("text codec " + t.text), i.length) && (e.excludeUntil = 1 / 0, this.logger_(`excluding ${e.id} for unsupported: ` + i.join(", ")))
            })
        }

        excludeIncompatibleVariants_(e) {
            const r = [], n = this.main().playlists;
            e = Mh(jn(e));
            const a = _h(e), o = e.video && jn(e.video)[0] || null, l = e.audio && jn(e.audio)[0] || null;
            Object.keys(n).forEach(e => {
                var t, i, s, e = n[e];
                -1 === r.indexOf(e.id) && e.excludeUntil !== 1 / 0 && (r.push(e.id), t = [], s = vh(this.mainPlaylistLoader_.main, e), i = _h(s), s.audio || s.video) && (i !== a && t.push(`codec count "${i}" !== "${a}"`), this.sourceUpdater_.canChangeType() || (i = s.video && jn(s.video)[0] || null, s = s.audio && jn(s.audio)[0] || null, i && o && i.type.toLowerCase() !== o.type.toLowerCase() && t.push(`video codec "${i.type}" !== "${o.type}"`), s && l && s.type.toLowerCase() !== l.type.toLowerCase() && t.push(`audio codec "${s.type}" !== "${l.type}"`)), t.length) && (e.excludeUntil = 1 / 0, this.logger_(`excluding ${e.id}: ` + t.join(" && ")))
            })
        }

        updateAdCues_(e) {
            let t = 0;
            var s = this.seekable(), [r, n, s = 0] = (s.length && (t = s.start(0)), [e, this.cueTagsTrack_, t]);
            if (r.segments) {
                let t = s, i;
                for (let e = 0; e < r.segments.length; e++) {
                    var a, o, l = r.segments[e];
                    if (i = i || function (e, t) {
                        var i = e.cues;
                        for (let e = 0; e < i.length; e++) {
                            var s = i[e];
                            if (t >= s.adStartTime && t <= s.adEndTime) return s
                        }
                        return null
                    }(n, t + l.duration / 2)) {
                        if ("cueIn" in l) {
                            i.endTime = t, i.adEndTime = t, t += l.duration, i = null;
                            continue
                        }
                        if (t < i.endTime) {
                            t += l.duration;
                            continue
                        }
                        i.endTime += l.duration
                    } else "cueOut" in l && ((i = new window.VTTCue(t, t + l.duration, l.cueOut)).adStartTime = t, i.adEndTime = t + parseFloat(l.cueOut), n.addCue(i)), "cueOutCont" in l && ([a, o] = l.cueOutCont.split("/").map(parseFloat), (i = new window.VTTCue(t, t + l.duration, "")).adStartTime = t - a, i.adEndTime = i.adStartTime + o, n.addCue(i));
                    t += l.duration
                }
            }
        }

        goalBufferLength() {
            var e = this.tech_.currentTime(), t = O.GOAL_BUFFER_LENGTH, i = O.GOAL_BUFFER_LENGTH_RATE,
                s = Math.max(t, O.MAX_GOAL_BUFFER_LENGTH);
            return Math.min(t + e * i, s)
        }

        bufferLowWaterLine() {
            var e = this.tech_.currentTime(), t = O.BUFFER_LOW_WATER_LINE, i = O.BUFFER_LOW_WATER_LINE_RATE,
                s = Math.max(t, O.MAX_BUFFER_LOW_WATER_LINE), r = Math.max(t, O.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
            return Math.min(t + e * i, this.bufferBasedABR ? r : s)
        }

        bufferHighWaterLine() {
            return O.BUFFER_HIGH_WATER_LINE
        }

        addDateRangesToTextTrack_(e) {
            Wh(this.inbandTextTracks_, "com.apple.streaming", this.tech_);
            {
                var {inbandTextTracks: e, dateRanges: t} = {inbandTextTracks: this.inbandTextTracks_, dateRanges: e};
                const s = e.metadataTrack_;
                if (s) {
                    const r = window.WebKitDataCue || window.VTTCue;
                    t.forEach(e => {
                        for (const i of Object.keys(e)) {
                            var t;
                            $h.has(i) || ((t = new r(e.startTime, e.endTime, "")).id = e.id, t.type = "com.apple.quicktime.HLS", t.value = {
                                key: zh[i],
                                data: e[i]
                            }, "scte35Out" !== i && "scte35In" !== i || (t.value.data = new Uint8Array(t.value.data.match(/[\da-f]{2}/gi)).buffer), s.addCue(t))
                        }
                        e.processDateRange()
                    })
                }
            }
        }

        addMetadataToTextTrack(e, t, i) {
            var s = this.sourceUpdater_.videoBuffer ? this.sourceUpdater_.videoTimestampOffset() : this.sourceUpdater_.audioTimestampOffset();
            Wh(this.inbandTextTracks_, e, this.tech_), Vh({
                inbandTextTracks: this.inbandTextTracks_,
                metadataArray: t,
                timestampOffset: s,
                videoDuration: i
            })
        }

        pathwayAttribute_(e) {
            return e.attributes["PATHWAY-ID"] || e.attributes.serviceLocation
        }

        initContentSteeringController_() {
            var e = this.main();
            if (e.contentSteering) {
                const t = e => {
                    for (const t of e.playlists) this.contentSteeringController_.addAvailablePathway(this.pathwayAttribute_(t));
                    this.contentSteeringController_.assignTagProperties(e.uri, e.contentSteering)
                };
                t(e), this.contentSteeringController_.on("content-steering", this.excludeThenChangePathway_.bind(this)), "dash" === this.sourceType_ && this.mainPlaylistLoader_.on("mediaupdatetimeout", () => {
                    this.mainPlaylistLoader_.refreshMedia_(this.mainPlaylistLoader_.media().id), this.contentSteeringController_.abort(), this.contentSteeringController_.clearTTLTimeout_(), this.contentSteeringController_.clearAvailablePathways(), t(this.main())
                }), this.contentSteeringController_.queryBeforeStart || this.tech_.one("canplay", () => {
                    this.contentSteeringController_.requestSteeringManifest()
                })
            }
        }

        excludeThenChangePathway_() {
            const r = this.contentSteeringController_.getPathway();
            if (r) {
                const n = this.main().playlists, a = new Set;
                let s = !1;
                Object.keys(n).forEach(e => {
                    var e = n[e], t = this.pathwayAttribute_(e), t = t && r !== t,
                        i = (e.excludeUntil === 1 / 0 && "content-steering" === e.lastExcludeReason_ && !t && (delete e.excludeUntil, delete e.lastExcludeReason_, s = !0), !e.excludeUntil && e.excludeUntil !== 1 / 0);
                    !a.has(e.id) && t && i && (a.add(e.id), e.excludeUntil = 1 / 0, e.lastExcludeReason_ = "content-steering", this.logger_(`excluding ${e.id} for ` + e.lastExcludeReason_))
                }), "DASH" === this.contentSteeringController_.manifestType_ && Object.keys(this.mediaTypes_).forEach(e => {
                    var e = this.mediaTypes_[e];
                    e.activePlaylistLoader && (e = e.activePlaylistLoader.media_) && e.attributes.serviceLocation !== r && (s = !0)
                }), s && this.changeSegmentPathway_()
            }
        }

        changeSegmentPathway_() {
            var e = this.selectPlaylist();
            this.pauseLoading(), "DASH" === this.contentSteeringController_.manifestType_ && this.switchMediaForDASHContentSteering_(), this.switchMedia_(e, "content-steering")
        }
    }

    class Ou {
        constructor(e, t, i) {
            var s, r, n, a, o = e["playlistController_"], l = o.fastQualityChange_.bind(o);
            t.attributes && (s = t.attributes.RESOLUTION, this.width = s && s.width, this.height = s && s.height, this.bandwidth = t.attributes.BANDWIDTH, this.frameRate = t.attributes["FRAME-RATE"]), this.codecs = vh(o.main(), t), this.playlist = t, this.id = i, this.enabled = (r = e.playlists, n = t.id, a = l, e => {
                var t = r.main.playlists[n], i = ud(t), s = cd(t);
                return "undefined" == typeof e ? s : (e ? delete t.disabled : t.disabled = !0, e === s || i || (a(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e)
            })
        }
    }

    const Nu = ["seeking", "seeked", "pause", "playing", "error"];

    class Ru {
        constructor(e) {
            this.playlistController_ = e.playlistController, this.tech_ = e.tech, this.seekable = e.seekable, this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow, this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta, this.media = e.media, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = Hl("PlaybackWatcher"), this.logger_("initialize");
            const t = () => this.monitorCurrentTime_(), i = () => this.monitorCurrentTime_(),
                s = () => this.techWaiting_(), r = () => this.resetTimeUpdate_(), n = this.playlistController_,
                a = ["main", "subtitle", "audio"], o = {}, l = (a.forEach(e => {
                    o[e] = {
                        reset: () => this.resetSegmentDownloads_(e),
                        updateend: () => this.checkSegmentDownloads_(e)
                    }, n[e + "SegmentLoader_"].on("appendsdone", o[e].updateend), n[e + "SegmentLoader_"].on("playlistupdate", o[e].reset), this.tech_.on(["seeked", "seeking"], o[e].reset)
                }), t => {
                    ["main", "audio"].forEach(e => {
                        n[e + "SegmentLoader_"][t]("appended", this.seekingAppendCheck_)
                    })
                });
            this.seekingAppendCheck_ = () => {
                this.fixesBadSeeks_() && (this.consecutiveUpdates = 0, this.lastRecordedTime = this.tech_.currentTime(), l("off"))
            }, this.clearSeekingAppendCheck_ = () => l("off"), this.watchForBadSeeking_ = () => {
                this.clearSeekingAppendCheck_(), l("on")
            }, this.tech_.on("seeked", this.clearSeekingAppendCheck_), this.tech_.on("seeking", this.watchForBadSeeking_), this.tech_.on("waiting", s), this.tech_.on(Nu, r), this.tech_.on("canplay", i), this.tech_.one("play", t), this.dispose = () => {
                this.clearSeekingAppendCheck_(), this.logger_("dispose"), this.tech_.off("waiting", s), this.tech_.off(Nu, r), this.tech_.off("canplay", i), this.tech_.off("play", t), this.tech_.off("seeking", this.watchForBadSeeking_), this.tech_.off("seeked", this.clearSeekingAppendCheck_), a.forEach(e => {
                    n[e + "SegmentLoader_"].off("appendsdone", o[e].updateend), n[e + "SegmentLoader_"].off("playlistupdate", o[e].reset), this.tech_.off(["seeked", "seeking"], o[e].reset)
                }), this.checkCurrentTimeTimeout_ && window.clearTimeout(this.checkCurrentTimeTimeout_), this.resetTimeUpdate_()
            }
        }

        monitorCurrentTime_() {
            this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && window.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = window.setTimeout(this.monitorCurrentTime_.bind(this), 250)
        }

        resetSegmentDownloads_(e) {
            var t = this.playlistController_[e + "SegmentLoader_"];
            0 < this[e + "StalledDownloads_"] && this.logger_(`resetting possible stalled download count for ${e} loader`), this[e + "StalledDownloads_"] = 0, this[e + "Buffered_"] = t.buffered_()
        }

        checkSegmentDownloads_(e) {
            var t = this.playlistController_, i = t[e + "SegmentLoader_"], s = i.buffered_(), r = function (t, i) {
                if (t !== i) {
                    if (!t && i || !i && t) return !0;
                    if (t.length !== i.length) return !0;
                    for (let e = 0; e < t.length; e++) if (t.start(e) !== i.start(e) || t.end(e) !== i.end(e)) return !0
                }
                return !1
            }(this[e + "Buffered_"], s);
            this[e + "Buffered_"] = s, r ? this.resetSegmentDownloads_(e) : (this[e + "StalledDownloads_"]++, this.logger_(`found #${this[e + "StalledDownloads_"]} ${e} appends that did not increase buffer (possible stalled download)`, {
                playlistId: i.playlist_ && i.playlist_.id,
                buffered: ed(s)
            }), this[e + "StalledDownloads_"] < 10 || (this.logger_(e + " loader stalled download exclusion"), this.resetSegmentDownloads_(e), this.tech_.trigger({
                type: "usage",
                name: `vhs-${e}-download-exclusion`
            }), "subtitle" !== e && t.excludePlaylist({
                error: {message: `Excessive ${e} segment downloading detected.`},
                playlistExclusionDuration: 1 / 0
            })))
        }

        checkCurrentTime_() {
            var e, t;
            if (!this.tech_.paused() && !this.tech_.seeking()) return e = this.tech_.currentTime(), t = this.tech_.buffered(), this.lastRecordedTime === e && (!t.length || e + Ql >= t.end(t.length - 1)) ? this.techWaiting_() : void (5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e))
        }

        resetTimeUpdate_() {
            this.consecutiveUpdates = 0
        }

        fixesBadSeeks_() {
            if (!this.tech_.seeking()) return !1;
            var e = this.seekable(), t = this.tech_.currentTime();
            let i;
            if (this.afterSeekableWindow_(e, t, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (s = e.end(e.length - 1), i = s), this.beforeSeekableWindow_(e, t) && (s = e.start(0), i = s + (s === e.end(0) ? 0 : Ql)), "undefined" != typeof i) this.logger_(`Trying to seek outside of seekable at time ${t} with ` + `seekable range ${Zl(e)}. Seeking to ` + i + "."); else {
                var s = this.playlistController_.sourceUpdater_, e = this.tech_.buffered(),
                    r = s.audioBuffer ? s.audioBuffered() : null, s = s.videoBuffer ? s.videoBuffered() : null,
                    n = this.media(), a = n.partTargetDuration || 2 * (n.targetDuration - Yl), o = [r, s];
                for (let e = 0; e < o.length; e++) if (o[e]) if (Gl(o[e], t) < a) return !1;
                if (0 === (n = $l(e, t)).length) return !1;
                i = n.start(0) + Ql, this.logger_(`Buffered region starts (${n.start(0)}) ` + ` just beyond seek point (${t}). Seeking to ${i}.`)
            }
            return this.tech_.setCurrentTime(i), !0
        }

        waiting_() {
            var e, t;
            this.techWaiting_() || (e = this.tech_.currentTime(), t = this.tech_.buffered(), (t = zl(t, e)).length && e + 3 <= t.end(0) && (this.resetTimeUpdate_(), this.tech_.setCurrentTime(e), this.logger_(`Stopped at ${e} while inside a buffered region ` + `[${t.start(0)} -> ${t.end(0)}]. Attempting to resume ` + "playback by seeking to the current time."), this.tech_.trigger({
                type: "usage",
                name: "vhs-unknown-waiting"
            })))
        }

        techWaiting_() {
            var e, t = this.seekable(), i = this.tech_.currentTime();
            return !!this.tech_.seeking() || (this.beforeSeekableWindow_(t, i) ? (t = t.end(t.length - 1), this.logger_(`Fell out of live window at time ${i}. Seeking to ` + "live point (seekable end) " + t), this.resetTimeUpdate_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
                type: "usage",
                name: "vhs-live-resync"
            }), !0) : (t = this.tech_.vhs.playlistController_.sourceUpdater_, e = this.tech_.buffered(), this.videoUnderflow_({
                audioBuffered: t.audioBuffered(),
                videoBuffered: t.videoBuffered(),
                currentTime: i
            }) ? (this.resetTimeUpdate_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
                type: "usage",
                name: "vhs-video-underflow"
            }), !0) : 0 < (t = $l(e, i)).length && (this.logger_(`Stopped at ${i} and seeking to ` + t.start(0)), this.resetTimeUpdate_(), this.skipTheGap_(i), !0)))
        }

        afterSeekableWindow_(e, t, i, s = !1) {
            if (!e.length) return !1;
            let r = e.end(e.length - 1) + Ql;
            var n = !i.endList, a = "number" == typeof i.partTargetDuration;
            return t > (r = n && (a || s) ? e.end(e.length - 1) + 3 * i.targetDuration : r)
        }

        beforeSeekableWindow_(e, t) {
            return !!(e.length && 0 < e.start(0) && t < e.start(0) - this.liveRangeSafeTimeDelta)
        }

        videoUnderflow_({videoBuffered: t, audioBuffered: i, currentTime: s}) {
            if (t) {
                let e;
                var r, n;
                return t.length && i.length ? (r = zl(t, s - 3), n = zl(t, s), (i = zl(i, s)).length && !n.length && r.length && (e = {
                    start: r.end(0),
                    end: i.end(0)
                })) : $l(t, s).length || (e = this.gapFromVideoUnderflow_(t, s)), !!e && (this.logger_(`Encountered a gap in video from ${e.start} to ${e.end}. ` + "Seeking to current time " + s), !0)
            }
        }

        skipTheGap_(e) {
            var t = this.tech_.buffered(), i = this.tech_.currentTime(), t = $l(t, i);
            this.resetTimeUpdate_(), 0 !== t.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", t.start(0)), this.tech_.setCurrentTime(t.start(0) + Yl), this.tech_.trigger({
                type: "usage",
                name: "vhs-gap-skip"
            }))
        }

        gapFromVideoUnderflow_(e, t) {
            var i = function (t) {
                if (t.length < 2) return Vl();
                var i = [];
                for (let e = 1; e < t.length; e++) {
                    var s = t.end(e - 1), r = t.start(e);
                    i.push([s, r])
                }
                return Vl(i)
            }(e);
            for (let e = 0; e < i.length; e++) {
                var s = i.start(e), r = i.end(e);
                if (t - s < 4 && 2 < t - s) return {start: s, end: r}
            }
            return null
        }
    }

    const Mu = {
        errorInterval: 30, getSource(e) {
            return e(this.tech({IWillNotUseThisInPlugins: !0}).currentSource_ || this.currentSource())
        }
    }, Uu = function (t, e) {
        let i = 0, s = 0;

        function r(e) {
            null != e && (s = t.duration() !== 1 / 0 && t.currentTime() || 0, t.one("loadedmetadata", l), t.src(e), t.trigger({
                type: "usage",
                name: "vhs-error-reload"
            }), t.play())
        }

        function n() {
            if (Date.now() - i < 1e3 * o.errorInterval) t.trigger({
                type: "usage",
                name: "vhs-error-reload-canceled"
            }); else {
                if (o.getSource && "function" == typeof o.getSource) return i = Date.now(), o.getSource.call(t, r);
                T.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
            }
        }

        function a() {
            t.off("loadedmetadata", l), t.off("error", n), t.off("dispose", a)
        }

        const o = P(Mu, e), l = (t.ready(() => {
            t.trigger({type: "usage", name: "vhs-error-reload-initialized"})
        }), function () {
            s && t.currentTime(s)
        });
        t.on("error", n), t.on("dispose", a), t.reloadSourceOnError = function (e) {
            a(), Uu(t, e)
        }
    };

    function Bu(t, e) {
        var i = e.media();
        let s = -1;
        for (let e = 0; e < t.length; e++) if (t[e].id === i.id) {
            s = e;
            break
        }
        t.selectedIndex_ = s, t.trigger({selectedIndex: s, type: "change"})
    }

    const N = {
        PlaylistLoader: Ld,
        Playlist: _d,
        utils: Rr,
        STANDARD_PLAYLIST_SELECTOR: qh,
        INITIAL_PLAYLIST_SELECTOR: function () {
            var e = this.playlists.main.playlists.filter(_d.isEnabled),
                e = (Fh(e, (e, t) => Th(e, t)), e.filter(e => !!vh(this.playlists.main, e).video));
            return e[0] || null
        },
        lastBandwidthSelector: qh,
        movingAverageBandwidthSelector: function (t) {
            let i = -1, s = -1;
            if (t < 0 || 1 < t) throw new Error("Moving average bandwidth decay must be between 0 and 1.");
            return function () {
                var e = this.useDevicePixelRatio && window.devicePixelRatio || 1;
                return i < 0 && (i = this.systemBandwidth, s = this.systemBandwidth), 0 < this.systemBandwidth && this.systemBandwidth !== s && (i = t * this.systemBandwidth + (1 - t) * i, s = this.systemBandwidth), jh(this.playlists.main, i, parseInt(bh(this.tech_.el(), "width"), 10) * e, parseInt(bh(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions, this.playlistController_)
            }
        },
        comparePlaylistBandwidth: Th,
        comparePlaylistResolution: function (e, t) {
            let i, s;
            return i = (i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width ? e.attributes.RESOLUTION.width : i) || window.Number.MAX_VALUE, s = (s = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width ? t.attributes.RESOLUTION.width : s) || window.Number.MAX_VALUE, i === s && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - s
        },
        xhr: Od()
    }, Fu = (Object.keys(O).forEach(t => {
        Object.defineProperty(N, t, {
            get() {
                return T.log.warn(`using Vhs.${t} is UNSAFE be sure you know what you are doing`), O[t]
            }, set(e) {
                T.log.warn(`using Vhs.${t} is UNSAFE be sure you know what you are doing`), "number" != typeof e || e < 0 ? T.log.warn(`value of Vhs.${t} must be greater than or equal to 0`) : O[t] = e
            }
        })
    }), "videojs-vhs"), ju = (N.canPlaySource = function () {
        return T.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.")
    }, ({player: s, sourceKeySystems: e, audioMedia: t, mainPlaylists: i}) => {
        if (!s.eme.initializeMediaKeys) return Promise.resolve();
        var r, t = t ? i.concat([t]) : i, t = (i = t, r = Object.keys(e), i.reduce((e, s) => {
            var t;
            return s.contentProtection && (t = r.reduce((e, t) => {
                var i = s.contentProtection[t];
                return i && i.pssh && (e[t] = {pssh: i.pssh}), e
            }, {}), Object.keys(t).length) && e.push(t), e
        }, []));
        const n = [], a = [];
        return t.forEach(e => {
            a.push(new Promise((e, t) => {
                s.tech_.one("keysessioncreated", e)
            })), n.push(new Promise((t, i) => {
                s.eme.initializeMediaKeys({keySystems: e}, e => {
                    e ? i(e) : t()
                })
            }))
        }), Promise.race([Promise.all(n), Promise.race(a)])
    }), qu = ({player: e, sourceKeySystems: t, media: i, audioMedia: s}) => {
        t = ((e, t, i) => {
            if (!e) return e;
            let s = {};
            t && t.attributes && t.attributes.CODECS && (s = Mh(jn(t.attributes.CODECS))), i && i.attributes && i.attributes.CODECS && (s.audio = i.attributes.CODECS);
            var r = qn(s.video), n = qn(s.audio), a = {};
            for (const o in e) a[o] = {}, n && (a[o].audioContentType = n), r && (a[o].videoContentType = r), t.contentProtection && t.contentProtection[o] && t.contentProtection[o].pssh && (a[o].pssh = t.contentProtection[o].pssh), "string" == typeof e[o] && (a[o].url = e[o]);
            return P(e, a)
        })(t, i, s);
        return !(!t || (e.currentSource().keySystems = t) && !e.eme && (T.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), 1))
    }, Hu = () => {
        if (!window.localStorage) return null;
        var e = window.localStorage.getItem(Fu);
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch (e) {
            return null
        }
    }, Vu = (e, t) => {
        e._requestCallbackSet || (e._requestCallbackSet = new Set), e._requestCallbackSet.add(t)
    }, zu = (e, t) => {
        e._responseCallbackSet || (e._responseCallbackSet = new Set), e._responseCallbackSet.add(t)
    }, $u = (e, t) => {
        e._requestCallbackSet && (e._requestCallbackSet.delete(t), e._requestCallbackSet.size || delete e._requestCallbackSet)
    }, Wu = (e, t) => {
        e._responseCallbackSet && (e._responseCallbackSet.delete(t), e._responseCallbackSet.size || delete e._responseCallbackSet)
    };
    N.supportsNativeHls = function () {
        if (!document || !document.createElement) return !1;
        const t = document.createElement("video");
        return !!T.getTech("Html5").isSupported() && ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (e) {
            return /maybe|probably/i.test(t.canPlayType(e))
        })
    }(), N.supportsNativeDash = !!(document && document.createElement && T.getTech("Html5").isSupported()) && /maybe|probably/i.test(document.createElement("video").canPlayType("application/dash+xml")), N.supportsTypeNatively = e => "hls" === e ? N.supportsNativeHls : "dash" === e && N.supportsNativeDash, N.isSupported = function () {
        return T.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.")
    }, N.xhr.onRequest = function (e) {
        Vu(N.xhr, e)
    }, N.xhr.onResponse = function (e) {
        zu(N.xhr, e)
    }, N.xhr.offRequest = function (e) {
        $u(N.xhr, e)
    }, N.xhr.offResponse = function (e) {
        Wu(N.xhr, e)
    };

    class Gu extends T.getComponent("Component") {
        constructor(e, t, i) {
            if (super(t, i.vhs), "number" == typeof i.initialBandwidth && (this.options_.bandwidth = i.initialBandwidth), this.logger_ = Hl("VhsHandler"), t.options_ && t.options_.playerId && (i = T.getPlayer(t.options_.playerId), this.player_ = i), this.tech_ = t, this.source_ = e, this.stats = {}, this.ignoreNextSeekingEvent_ = !1, this.setOptions_(), this.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks) t.overrideNativeAudioTracks(!0), t.overrideNativeVideoTracks(!0); else if (this.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native VHS requires emulated tracks. See https://git.io/vMpjB");
            this.on(document, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], e => {
                var t = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                t && t.contains(this.tech_.el()) ? this.playlistController_.fastQualityChange_() : this.playlistController_.checkABR_()
            }), this.on(this.tech_, "seeking", function () {
                this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
            }), this.on(this.tech_, "error", function () {
                this.tech_.error() && this.playlistController_ && this.playlistController_.pauseLoading()
            }), this.on(this.tech_, "play", this.play)
        }

        setOptions_() {
            var e;
            this.options_.withCredentials = this.options_.withCredentials || !1, this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions, this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1, this.options_.useBandwidthFromLocalStorage = "undefined" != typeof this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1, this.options_.useForcedSubtitles = this.options_.useForcedSubtitles || !1, this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || !1, this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || !1, this.options_.calculateTimestampOffsetForEachSegment = this.options_.calculateTimestampOffsetForEachSegment || !1, this.options_.customTagParsers = this.options_.customTagParsers || [], this.options_.customTagMappers = this.options_.customTagMappers || [], this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1, this.options_.llhls = !1 !== this.options_.llhls, this.options_.bufferBasedABR = this.options_.bufferBasedABR || !1, "number" != typeof this.options_.playlistExclusionDuration && (this.options_.playlistExclusionDuration = 60), "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage && ((e = Hu()) && e.bandwidth && (this.options_.bandwidth = e.bandwidth, this.tech_.trigger({
                type: "usage",
                name: "vhs-bandwidth-from-local-storage"
            })), e) && e.throughput && (this.options_.throughput = e.throughput, this.tech_.trigger({
                type: "usage",
                name: "vhs-throughput-from-local-storage"
            })), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = O.INITIAL_BANDWIDTH), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === O.INITIAL_BANDWIDTH, ["withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "customTagParsers", "customTagMappers", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "bufferBasedABR", "liveRangeSafeTimeDelta", "llhls", "useForcedSubtitles", "useNetworkInformationApi", "useDtsForTimestampOffset", "calculateTimestampOffsetForEachSegment", "exactManifestTimings", "leastPixelDiffSelector"].forEach(e => {
                "undefined" != typeof this.source_[e] && (this.options_[e] = this.source_[e])
            }), this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions, this.useDevicePixelRatio = this.options_.useDevicePixelRatio
        }

        src(e, t) {
            e && (this.setOptions_(), this.options_.src = 0 === (e = this.source_.src).toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(e.substring(e.indexOf(",") + 1)) : e, this.options_.tech = this.tech_, this.options_.externVhs = N, this.options_.sourceType = Pn(t), this.options_.seekTo = e => {
                this.tech_.setCurrentTime(e)
            }, this.playlistController_ = new Pu(this.options_), e = P({liveRangeSafeTimeDelta: Ql}, this.options_, {
                seekable: () => this.seekable(),
                media: () => this.playlistController_.media(),
                playlistController: this.playlistController_
            }), this.playbackWatcher_ = new Ru(e), this.playlistController_.on("error", () => {
                var e = T.players[this.tech_.options_.playerId];
                let t = this.playlistController_.error;
                "object" != typeof t || t.code ? "string" == typeof t && (t = {
                    message: t,
                    code: 3
                }) : t.code = 3, e.error(t)
            }), t = this.options_.bufferBasedABR ? N.movingAverageBandwidthSelector(.55) : N.STANDARD_PLAYLIST_SELECTOR, this.playlistController_.selectPlaylist = (this.selectPlaylist || t).bind(this), this.playlistController_.selectInitialPlaylist = N.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.playlistController_.mainPlaylistLoader_, this.mediaSource = this.playlistController_.mediaSource, Object.defineProperties(this, {
                selectPlaylist: {
                    get() {
                        return this.playlistController_.selectPlaylist
                    }, set(e) {
                        this.playlistController_.selectPlaylist = e.bind(this)
                    }
                }, throughput: {
                    get() {
                        return this.playlistController_.mainSegmentLoader_.throughput.rate
                    }, set(e) {
                        this.playlistController_.mainSegmentLoader_.throughput.rate = e, this.playlistController_.mainSegmentLoader_.throughput.count = 1
                    }
                }, bandwidth: {
                    get() {
                        let e = this.playlistController_.mainSegmentLoader_.bandwidth;
                        var t = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
                        return this.options_.useNetworkInformationApi && t && (t = 1e3 * t.downlink * 1e3, e = 1e7 <= t && 1e7 <= e ? Math.max(e, t) : t), e
                    }, set(e) {
                        this.playlistController_.mainSegmentLoader_.bandwidth = e, this.playlistController_.mainSegmentLoader_.throughput = {
                            rate: 0,
                            count: 0
                        }
                    }
                }, systemBandwidth: {
                    get() {
                        var e = 1 / (this.bandwidth || 1);
                        let t;
                        return t = 0 < this.throughput ? 1 / this.throughput : 0, Math.floor(1 / (e + t))
                    }, set() {
                        T.log.error('The "systemBandwidth" property is read-only')
                    }
                }
            }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
                bandwidth: {get: () => this.bandwidth || 0, enumerable: !0},
                mediaRequests: {get: () => this.playlistController_.mediaRequests_() || 0, enumerable: !0},
                mediaRequestsAborted: {
                    get: () => this.playlistController_.mediaRequestsAborted_() || 0,
                    enumerable: !0
                },
                mediaRequestsTimedout: {
                    get: () => this.playlistController_.mediaRequestsTimedout_() || 0,
                    enumerable: !0
                },
                mediaRequestsErrored: {
                    get: () => this.playlistController_.mediaRequestsErrored_() || 0,
                    enumerable: !0
                },
                mediaTransferDuration: {
                    get: () => this.playlistController_.mediaTransferDuration_() || 0,
                    enumerable: !0
                },
                mediaBytesTransferred: {
                    get: () => this.playlistController_.mediaBytesTransferred_() || 0,
                    enumerable: !0
                },
                mediaSecondsLoaded: {get: () => this.playlistController_.mediaSecondsLoaded_() || 0, enumerable: !0},
                mediaAppends: {get: () => this.playlistController_.mediaAppends_() || 0, enumerable: !0},
                mainAppendsToLoadedData: {
                    get: () => this.playlistController_.mainAppendsToLoadedData_() || 0,
                    enumerable: !0
                },
                audioAppendsToLoadedData: {
                    get: () => this.playlistController_.audioAppendsToLoadedData_() || 0,
                    enumerable: !0
                },
                appendsToLoadedData: {get: () => this.playlistController_.appendsToLoadedData_() || 0, enumerable: !0},
                timeToLoadedData: {get: () => this.playlistController_.timeToLoadedData_() || 0, enumerable: !0},
                buffered: {get: () => ed(this.tech_.buffered()), enumerable: !0},
                currentTime: {get: () => this.tech_.currentTime(), enumerable: !0},
                currentSource: {get: () => this.tech_.currentSource_, enumerable: !0},
                currentTech: {get: () => this.tech_.name_, enumerable: !0},
                duration: {get: () => this.tech_.duration(), enumerable: !0},
                main: {get: () => this.playlists.main, enumerable: !0},
                playerDimensions: {get: () => this.tech_.currentDimensions(), enumerable: !0},
                seekable: {get: () => ed(this.tech_.seekable()), enumerable: !0},
                timestamp: {get: () => Date.now(), enumerable: !0},
                videoPlaybackQuality: {get: () => this.tech_.getVideoPlaybackQuality(), enumerable: !0}
            }), this.tech_.one("canplay", this.playlistController_.setupFirstPlay.bind(this.playlistController_)), this.tech_.on("bandwidthupdate", () => {
                if (this.options_.useBandwidthFromLocalStorage) {
                    var e = {bandwidth: this.bandwidth, throughput: Math.round(this.throughput)};
                    if (window.localStorage) {
                        var t = (t = Hu()) ? P(t, e) : e;
                        try {
                            window.localStorage.setItem(Fu, JSON.stringify(t))
                        } catch (e) {
                            return
                        }
                    }
                }
            }), this.playlistController_.on("selectedinitialmedia", () => {
                var i;
                (i = this).representations = () => {
                    var e = i.playlistController_.main(),
                        e = yd(e) ? i.playlistController_.getAudioTrackPlaylists_() : e.playlists;
                    return e ? e.filter(e => !ud(e)).map((e, t) => new Ou(i, e, e.id)) : []
                }
            }), this.playlistController_.sourceUpdater_.on("createdsourcebuffers", () => {
                this.setupEme_()
            }), this.on(this.playlistController_, "progress", function () {
                this.tech_.trigger("progress")
            }), this.on(this.playlistController_, "firstplay", function () {
                this.ignoreNextSeekingEvent_ = !0
            }), this.setupQualityLevels_(), this.tech_.el()) && (this.mediaSourceUrl_ = window.URL.createObjectURL(this.playlistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_))
        }

        createKeySessions_() {
            var e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
            this.logger_("waiting for EME key session creation"), ju({
                player: this.player_,
                sourceKeySystems: this.source_.keySystems,
                audioMedia: e && e.media(),
                mainPlaylists: this.playlists.main.playlists
            }).then(() => {
                this.logger_("created EME key session"), this.playlistController_.sourceUpdater_.initializedEme()
            }).catch(e => {
                this.logger_("error while creating EME key session", e), this.player_.error({
                    message: "Failed to initialize media keys for EME",
                    code: 3
                })
            })
        }

        handleWaitingForKey_() {
            this.logger_("waitingforkey fired, attempting to create any new key sessions"), this.createKeySessions_()
        }

        setupEme_() {
            var e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader, e = qu({
                player: this.player_,
                sourceKeySystems: this.source_.keySystems,
                media: this.playlists.media(),
                audioMedia: e && e.media()
            });
            this.player_.tech_.on("keystatuschange", e => {
                if ("output-restricted" === e.status) {
                    e = this.playlistController_.main();
                    if (e && e.playlists) {
                        const t = [];
                        e.playlists.forEach(e => {
                            e && e.attributes && e.attributes.RESOLUTION && 720 <= e.attributes.RESOLUTION.height && (!e.excludeUntil || e.excludeUntil < 1 / 0) && (e.excludeUntil = 1 / 0, t.push(e))
                        }), t.length && (T.log.warn('DRM keystatus changed to "output-restricted." Removing the following HD playlists that will most likely fail to play and clearing the buffer. This may be due to HDCP restrictions on the stream and the capabilities of the current device.', ...t), this.playlistController_.mainSegmentLoader_.resetEverything(), this.playlistController_.fastQualityChange_())
                    }
                }
            }), this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this), this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_), e ? this.createKeySessions_() : this.playlistController_.sourceUpdater_.initializedEme()
        }

        setupQualityLevels_() {
            var e = T.players[this.tech_.options_.playerId];
            e && e.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = e.qualityLevels(), this.playlistController_.on("selectedinitialmedia", () => {
                var t, e;
                t = this.qualityLevels_, (e = this).representations().forEach(e => {
                    t.addQualityLevel(e)
                }), Bu(t, e.playlists)
            }), this.playlists.on("mediachange", () => {
                Bu(this.qualityLevels_, this.playlists)
            }))
        }

        static version() {
            return {
                "@videojs/http-streaming": "3.7.0",
                "mux.js": "7.0.1",
                "mpd-parser": "1.2.2",
                "m3u8-parser": "7.1.0",
                "aes-decrypter": "4.0.1"
            }
        }

        version() {
            return this.constructor.version()
        }

        canChangeType() {
            return uu.canChangeType()
        }

        play() {
            this.playlistController_.play()
        }

        setCurrentTime(e) {
            this.playlistController_.setCurrentTime(e)
        }

        duration() {
            return this.playlistController_.duration()
        }

        seekable() {
            return this.playlistController_.seekable()
        }

        dispose() {
            this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.playlistController_ && this.playlistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), this.tech_ && this.tech_.vhs && delete this.tech_.vhs, this.mediaSourceUrl_ && window.URL.revokeObjectURL && (window.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null), this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_), super.dispose()
        }

        convertToProgramTime(e, t) {
            return zd({playlist: this.playlistController_.media(), time: e, callback: t})
        }

        seekToProgramTime(e, t, i = !0, s = 2) {
            return $d({
                programTime: e,
                playlist: this.playlistController_.media(),
                retryCount: s,
                pauseAfterSeek: i,
                seekTo: this.options_.seekTo,
                tech: this.options_.tech,
                callback: t
            })
        }

        setupXhrHooks_() {
            this.xhr.onRequest = e => {
                Vu(this.xhr, e)
            }, this.xhr.onResponse = e => {
                zu(this.xhr, e)
            }, this.xhr.offRequest = e => {
                $u(this.xhr, e)
            }, this.xhr.offResponse = e => {
                Wu(this.xhr, e)
            }, this.player_.trigger("xhr-hooks-ready")
        }
    }

    const Xu = {
        name: "videojs-http-streaming", VERSION: "3.7.0", canHandleSource(e, t = {}) {
            t = P(T.options, t);
            return Xu.canPlayType(e.type, t)
        }, handleSource(e, t, i = {}) {
            i = P(T.options, i);
            return t.vhs = new Gu(e, t, i), t.vhs.xhr = Od(), t.vhs.setupXhrHooks_(), t.vhs.src(e.src, e.type), t.vhs
        }, canPlayType(e, t) {
            e = Pn(e);
            return e && (t = Xu.getOverrideNative(t), !N.supportsTypeNatively(e) || t) ? "maybe" : ""
        }, getOverrideNative(e = {}) {
            var {vhs: e = {}} = e, t = !(T.browser.IS_ANY_SAFARI || T.browser.IS_IOS), {overrideNative: e = t} = e;
            return e
        }
    };
    return Dn("avc1.4d400d,mp4a.40.2") && T.getTech("Html5").registerSourceHandler(Xu, 0), T.VhsHandler = Gu, T.VhsSourceHandler = Xu, T.Vhs = N, T.use || T.registerComponent("Vhs", N), T.options.vhs = T.options.vhs || {}, T.getPlugin && T.getPlugin("reloadSourceOnError") || T.registerPlugin("reloadSourceOnError", function (e) {
        Uu(this, e)
    }), T
});
