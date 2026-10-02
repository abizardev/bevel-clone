"use strict";
(self.rspackChunk = self.rspackChunk || []).push([
    [270], {
        967() {
            window.tram = function(e) {
                function t(e, t) {
                    return (new F.Bare).init(e, t)
                }

                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function r(e, t, n) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, n) {
                    if (void 0 !== t && (n = t), void 0 === e) return n;
                    var r = n;
                    return q.test(e) || !K.test(e) ? r = parseInt(e, 10) : K.test(e) && (r = 1e3 * parseFloat(e)), 0 > r && (r = 0), r == r ? r : n
                }

                function s(e) {
                    z.debug && window && window.console.warn(e)
                }
                var a, l, u, c = function(e, t) {
                        function n(e) {
                            return "object" == typeof e
                        }

                        function r(e) {
                            return "function" == typeof e
                        }

                        function i() {}
                        return function o(s, a) {
                            function l() {
                                var e = new u;
                                return r(e.init) && e.init.apply(e, arguments), e
                            }

                            function u() {}
                            void 0 === a && (a = s, s = Object), l.Bare = u;
                            var c, d = i[e] = s[e],
                                f = u[e] = l[e] = new i;
                            return f.constructor = l, l.mixin = function(t) {
                                return u[e] = l[e] = o(l, t)[e], l
                            }, l.open = function(e) {
                                if (c = {}, r(e) ? c = e.call(l, f, d, l, s) : n(e) && (c = e), n(c))
                                    for (var i in c) t.call(c, i) && (f[i] = c[i]);
                                return r(f.init) || (f.init = s), l
                            }, l.open(a)
                        }
                    }("prototype", {}.hasOwnProperty),
                    d = {
                        ease: ["ease", function(e, t, n, r) {
                            var i = (e /= r) * e,
                                o = i * e;
                            return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, n, r) {
                            var i = (e /= r) * e,
                                o = i * e;
                            return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, n, r) {
                            var i = (e /= r) * e,
                                o = i * e;
                            return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, n, r) {
                            var i = (e /= r) * e,
                                o = i * e;
                            return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, n, r) {
                            return n * e / r + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, r) {
                            return n * (e /= r) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, r) {
                            return -n * (e /= r) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, r) {
                            return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, r) {
                            return n * (e /= r) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, r) {
                            return n * ((e = e / r - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, r) {
                            return (e /= r / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, r) {
                            return n * (e /= r) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, r) {
                            return -n * ((e = e / r - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, r) {
                            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, r) {
                            return n * (e /= r) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, r) {
                            return n * ((e = e / r - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, r) {
                            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, r) {
                            return -n * Math.cos(e / r * (Math.PI / 2)) + n + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, r) {
                            return n * Math.sin(e / r * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, r) {
                            return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, r) {
                            return 0 === e ? t : n * Math.pow(2, 10 * (e / r - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, r) {
                            return e === r ? t + n : n * (-Math.pow(2, -10 * e / r) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, r) {
                            return 0 === e ? t : e === r ? t + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, r) {
                            return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, r) {
                            return n * Math.sqrt(1 - (e = e / r - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, r) {
                            return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * (e /= r) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, r, i) {
                            return void 0 === i && (i = 1.70158), (e /= r / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    h = window,
                    p = "bkwld-tram",
                    g = /[\-\.0-9]/g,
                    m = /[A-Z]/,
                    v = "number",
                    y = /^(rgb|#)/,
                    b = /(em|cm|mm|in|pt|pc|px)$/,
                    w = /(em|cm|mm|in|pt|pc|px|%)$/,
                    T = /(deg|rad|turn)$/,
                    E = "unitless",
                    S = /(all|none) 0s ease 0s/,
                    C = /^(width|height)$/,
                    I = document.createElement("a"),
                    M = ["Webkit", "Moz", "O", "ms"],
                    O = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    A = function(e) {
                        if (e in I.style) return {
                            dom: e,
                            css: e
                        };
                        var t, n, r = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) r += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < M.length; t++)
                            if ((n = M[t] + r) in I.style) return {
                                dom: n,
                                css: O[t] + e
                            }
                    },
                    R = t.support = {
                        bind: Function.prototype.bind,
                        transform: A("transform"),
                        transition: A("transition"),
                        backface: A("backface-visibility"),
                        timing: A("transition-timing-function")
                    };
                if (R.transition) {
                    var x = R.timing.dom;
                    if (I.style[x] = d["ease-in-back"][0], !I.style[x])
                        for (var _ in f) d[_][0] = f[_]
                }
                var k = t.frame = (a = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame) && R.bind ? a.bind(h) : function(e) {
                        h.setTimeout(e, 16)
                    },
                    N = t.now = (u = (l = h.performance) && (l.now || l.webkitNow || l.msNow || l.mozNow)) && R.bind ? u.bind(l) : Date.now || function() {
                        return +new Date
                    },
                    P = c(function(t) {
                        function n(e, t) {
                            var n = function(e) {
                                    for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                                        var i = e[t];
                                        i && r.push(i)
                                    }
                                    return r
                                }(("" + e).split(" ")),
                                r = n[0];
                            t = t || {};
                            var i = X[r];
                            if (!i) return s("Unsupported property: " + r);
                            if (!t.weak || !this.props[r]) {
                                var o = i[0],
                                    a = this.props[r];
                                return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, t), a
                            }
                        }

                        function r(e, t, r) {
                            if (e) {
                                var s = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == s && t) return this.timer = new U({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == s && t) {
                                    switch (e) {
                                        case "hide":
                                            l.call(this);
                                            break;
                                        case "stop":
                                            a.call(this);
                                            break;
                                        case "redraw":
                                            u.call(this);
                                            break;
                                        default:
                                            n.call(this, e, r && r[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == s) return void e.call(this, this);
                                if ("object" == s) {
                                    var f = 0;
                                    d.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), c.call(this), f > 0 && (this.timer = new U({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var h = this,
                                        p = !1,
                                        g = {};
                                    k(function() {
                                        d.call(h, e, function(e) {
                                            e.active && (p = !0, g[e.name] = e.nextStyle)
                                        }), p && h.$el.css(g)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                r.call(this, e.options, !0, e.args)
                            }
                        }

                        function a(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, d.call(this, t, f), c.call(this)
                        }

                        function l() {
                            a.call(this), this.el.style.display = "none"
                        }

                        function u() {
                            this.el.offsetHeight
                        }

                        function c() {
                            var e, t, n = [];
                            for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                            n = n.join(","), this.style !== n && (this.style = n, this.el.style[R.transition.dom] = n)
                        }

                        function d(e, t, r) {
                            var i, o, s, a, l = t !== f,
                                u = {};
                            for (i in e) s = e[i], i in Y ? (u.transform || (u.transform = {}), u.transform[i] = s) : (m.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in X ? u[i] = s : (a || (a = {}), a[i] = s));
                            for (i in u) {
                                if (s = u[i], !(o = this.props[i])) {
                                    if (!l) continue;
                                    o = n.call(this, i)
                                }
                                t.call(this, o, s)
                            }
                            r && a && r.call(this, a)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function h(e, t) {
                            e.set(t)
                        }

                        function g(e) {
                            this.$el.css(e)
                        }

                        function v(e, n) {
                            t[e] = function() {
                                return this.children ? y.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                            }
                        }

                        function y(e, t) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) e.apply(this.children[n], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, z.keepInherited && !z.fallback) {
                                var n = W(this.el, "transition");
                                n && !S.test(n) && (this.upstream = n)
                            }
                            R.backface && z.hideBackface && H(this.el, R.backface.css, "hidden")
                        }, v("add", n), v("start", r), v("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new U({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), v("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : s("No active transition timer. Use start() or wait() before then().")
                        }), v("next", i), v("stop", a), v("set", function(e) {
                            a.call(this, e), d.call(this, e, h, g)
                        }), v("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), v("hide", l), v("redraw", u), v("destroy", function() {
                            a.call(this), e.removeData(this.el, p), this.$el = this.el = null
                        })
                    }),
                    F = c(P, function(t) {
                        function n(t, n) {
                            var r = e.data(t, p) || e.data(t, p, new P.Bare);
                            return r.el || r.init(t), n ? r.start(n) : r
                        }
                        t.init = function(t, r) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return n(i[0], r);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(n(t, r))
                            }), this.children = o, this
                        }
                    }),
                    L = c(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, n, r) {
                            this.$el = e, this.el = e[0];
                            var i, s, a, l = t[0];
                            n[2] && (l = n[2]), G[l] && (l = G[l]), this.name = l, this.type = n[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], s = this.ease, a = "ease", void 0 !== s && (a = s), i in d ? i : a), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = C.test(this.name), this.unit = r.unit || this.unit || z.defaultUnit, this.angle = r.angle || this.angle || z.defaultAngle, z.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + d[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new B({
                                from: n,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return W(this.el, this.name)
                        }, e.update = function(e) {
                            H(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var n, i, o = "number" == typeof e,
                                a = "string" == typeof e;
                            switch (t) {
                                case v:
                                    if (o) return e;
                                    if (a && "" === e.replace(g, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case y:
                                    if (a) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? r(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case b:
                                    if (o) return e + this.unit;
                                    if (a && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case w:
                                    if (o) return e + this.unit;
                                    if (a && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case T:
                                    if (o) return e + this.angle;
                                    if (a && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case E:
                                    if (o || a && w.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return s("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    D = c(L, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                        }
                    }),
                    j = c(L, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    $ = c(L, function(e, t) {
                        function n(e, t) {
                            var n, r, i, o, s;
                            for (n in e) i = (o = Y[n])[0], r = o[1] || n, s = this.convert(e[n], i), t.call(this, r, s, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, Y.perspective && z.perspective && (this.current.perspective = z.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            n.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), H(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new V({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n, r = {};
                            for (n in this.current) r[n] = n in t ? t[n] : this.current[n];
                            this.active = !0, this.nextStyle = this.style(r)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new V({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            H(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, n = "";
                            for (t in e) n += t + "(" + e[t] + ") ";
                            return n
                        }, e.values = function(e) {
                            var t, r = {};
                            return n.call(this, e, function(e, n, i) {
                                r[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), r
                        }
                    }),
                    B = c(function(t) {
                        function o() {
                            var e, t, n, r = l.length;
                            if (r)
                                for (k(o), t = N(), e = r; e--;)(n = l[e]) && n.render(t)
                        }
                        var a = {
                            ease: d.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || a.ease;
                            d[t] && (t = d[t][1]), "function" != typeof t && (t = a.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var n = e.from,
                                r = e.to;
                            void 0 === n && (n = a.from), void 0 === r && (r = a.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n), this.value = this.begin + this.unit, this.start = N(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = N()), this.active = !0, 1 === l.push(this) && k(o))
                        }, t.stop = function() {
                            var t, n;
                            this.active && (this.active = !1, (n = e.inArray(this, l)) >= 0 && (t = l.slice(n + 1), l.length = n, t.length && (l = l.concat(t))))
                        }, t.render = function(e) {
                            var t, n = e - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay
                            }
                            if (n < this.duration) {
                                var i, o, s = this.ease(n, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, r(i[0] + s * (o[0] - i[0]), i[1] + s * (o[1] - i[1]), i[2] + s * (o[2] - i[2]))) : Math.round((this.begin + s * this.change) * u) / u, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var r = t.replace(g, "");
                                r !== e.replace(g, "") && s("Units do not match [tween]: " + t + ", " + e), this.unit = r
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var l = [],
                            u = 1e3
                    }),
                    U = c(B, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    V = c(B, function(e, t) {
                        e.init = function(e) {
                            var t, n;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new B({
                                name: t,
                                from: this.current[t],
                                to: n,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, n, r = this.tweens.length,
                                i = !1;
                            for (t = r; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    z = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !R.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!R.transition) return z.fallback = !0;
                    z.agentTests.push("(" + e + ")");
                    var t = RegExp(z.agentTests.join("|"), "i");
                    z.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new B(e)
                }, t.delay = function(e, t, n) {
                    return new U({
                        complete: t,
                        duration: e,
                        context: n
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var H = e.style,
                    W = e.css,
                    G = {
                        transform: R.transform && R.transform.css
                    },
                    X = {
                        color: [D, y],
                        background: [D, y, "background-color"],
                        "outline-color": [D, y],
                        "border-color": [D, y],
                        "border-top-color": [D, y],
                        "border-right-color": [D, y],
                        "border-bottom-color": [D, y],
                        "border-left-color": [D, y],
                        "border-width": [L, b],
                        "border-top-width": [L, b],
                        "border-right-width": [L, b],
                        "border-bottom-width": [L, b],
                        "border-left-width": [L, b],
                        "border-spacing": [L, b],
                        "letter-spacing": [L, b],
                        margin: [L, b],
                        "margin-top": [L, b],
                        "margin-right": [L, b],
                        "margin-bottom": [L, b],
                        "margin-left": [L, b],
                        padding: [L, b],
                        "padding-top": [L, b],
                        "padding-right": [L, b],
                        "padding-bottom": [L, b],
                        "padding-left": [L, b],
                        "outline-width": [L, b],
                        opacity: [L, v],
                        top: [L, w],
                        right: [L, w],
                        bottom: [L, w],
                        left: [L, w],
                        "font-size": [L, w],
                        "text-indent": [L, w],
                        "word-spacing": [L, w],
                        width: [L, w],
                        "min-width": [L, w],
                        "max-width": [L, w],
                        height: [L, w],
                        "min-height": [L, w],
                        "max-height": [L, w],
                        "line-height": [L, E],
                        "scroll-top": [j, v, "scrollTop"],
                        "scroll-left": [j, v, "scrollLeft"]
                    },
                    Y = {};
                R.transform && (X.transform = [$], Y = {
                    x: [w, "translateX"],
                    y: [w, "translateY"],
                    rotate: [T],
                    rotateX: [T],
                    rotateY: [T],
                    scale: [v],
                    scaleX: [v],
                    scaleY: [v],
                    skew: [T],
                    skewX: [T],
                    skewY: [T]
                }), R.transform && R.backface && (Y.z = [w, "translateZ"], Y.rotateZ = [T], Y.scaleZ = [v], Y.perspective = [b]);
                var q = /ms/,
                    K = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        8520(e, t, n) {
            var r, i, o, s, a, l, u, c, d, f, h, p, g, m, v, y, b, w, T, E, S = window.$,
                C = n(967) && S.tram;
            (r = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, s = Object.prototype, a = Function.prototype, o.push, l = o.slice, o.concat, s.toString, u = s.hasOwnProperty, c = o.forEach, d = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, h = o.some, p = o.indexOf, o.lastIndexOf, g = Object.keys, a.bind, m = r.each = r.forEach = function(e, t, n) {
                if (null == e) return e;
                if (c && e.forEach === c) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var o = 0, s = e.length; o < s; o++)
                        if (t.call(n, e[o], o, e) === i) return
                } else
                    for (var a = r.keys(e), o = 0, s = a.length; o < s; o++)
                        if (t.call(n, e[a[o]], a[o], e) === i) return;
                return e
            }, r.map = r.collect = function(e, t, n) {
                var r = [];
                return null == e ? r : d && e.map === d ? e.map(t, n) : (m(e, function(e, i, o) {
                    r.push(t.call(n, e, i, o))
                }), r)
            }, r.find = r.detect = function(e, t, n) {
                var r;
                return v(e, function(e, i, o) {
                    if (t.call(n, e, i, o)) return r = e, !0
                }), r
            }, r.filter = r.select = function(e, t, n) {
                var r = [];
                return null == e ? r : f && e.filter === f ? e.filter(t, n) : (m(e, function(e, i, o) {
                    t.call(n, e, i, o) && r.push(e)
                }), r)
            }, v = r.some = r.any = function(e, t, n) {
                t || (t = r.identity);
                var o = !1;
                return null == e ? o : h && e.some === h ? e.some(t, n) : (m(e, function(e, r, s) {
                    if (o || (o = t.call(n, e, r, s))) return i
                }), !!o)
            }, r.contains = r.include = function(e, t) {
                return null != e && (p && e.indexOf === p ? -1 != e.indexOf(t) : v(e, function(e) {
                    return e === t
                }))
            }, r.delay = function(e, t) {
                var n = l.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, r.defer = function(e) {
                return r.delay.apply(r, [e, 1].concat(l.call(arguments, 1)))
            }, r.throttle = function(e) {
                var t, n, r;
                return function() {
                    t || (t = !0, n = arguments, r = this, C.frame(function() {
                        t = !1, e.apply(r, n)
                    }))
                }
            }, r.debounce = function(e, t, n) {
                var i, o, s, a, l, u = function() {
                    var c = r.now() - a;
                    c < t ? i = setTimeout(u, t - c) : (i = null, n || (l = e.apply(s, o), s = o = null))
                };
                return function() {
                    s = this, o = arguments, a = r.now();
                    var c = n && !i;
                    return i || (i = setTimeout(u, t)), c && (l = e.apply(s, o), s = o = null), l
                }
            }, r.defaults = function(e) {
                if (!r.isObject(e)) return e;
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, r.keys = function(e) {
                if (!r.isObject(e)) return [];
                if (g) return g(e);
                var t = [];
                for (var n in e) r.has(e, n) && t.push(n);
                return t
            }, r.has = function(e, t) {
                return u.call(e, t)
            }, r.isObject = function(e) {
                return e === Object(e)
            }, r.now = Date.now || function() {
                return new Date().getTime()
            }, r.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, y = /(.)^/, b = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, w = /\\|'|\r|\n|\u2028|\u2029/g, T = function(e) {
                return "\\" + b[e]
            }, E = /^\s*(\w|\$)+\s*$/, r.template = function(e, t, n) {
                !t && n && (t = n);
                var i, o = RegExp([((t = r.defaults({}, t, r.templateSettings)).escape || y).source, (t.interpolate || y).source, (t.evaluate || y).source].join("|") + "|$", "g"),
                    s = 0,
                    a = "__p+='";
                e.replace(o, function(t, n, r, i, o) {
                    return a += e.slice(s, o).replace(w, T), s = o + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
                }), a += "';\n";
                var l = t.variable;
                if (l) {
                    if (!E.test(l)) throw Error("variable is not a bare identifier: " + l)
                } else a = "with(obj||{}){\n" + a + "}\n", l = "obj";
                a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", a)
                } catch (e) {
                    throw e.source = a, e
                }
                var u = function(e) {
                    return i.call(this, e, r)
                };
                return u.source = "function(" + l + "){\n" + a + "}", u
            }, e.exports = r
        },
        5843(e, t, n) {
            var r = n(3656);
            r.define("analytics", e.exports = function(e) {
                var t = e(document.documentElement);
                return {
                    ready: () => {
                        r.analytics = {
                            optOut: function(e) {
                                let {
                                    reload: n = !0
                                } = e || {};
                                if ("function" == typeof wf ? .denyUserTracking) return void wf.denyUserTracking({
                                    reload: n
                                });
                                let r = t.attr("data-wf-intellimize-customer-id");
                                if (r) {
                                    let e = `intellimize_opt_out_${r}`;
                                    if (localStorage.getItem(e)) return;
                                    localStorage.setItem(`intellimize_opt_out_${r}`, !0), n && location.reload()
                                }
                            },
                            optIn: function(e) {
                                let {
                                    reload: n = !0
                                } = e || {};
                                if ("function" == typeof wf ? .allowUserTracking) return void wf.allowUserTracking({
                                    reload: n
                                });
                                let r = t.attr("data-wf-intellimize-customer-id");
                                if (r) {
                                    let e = `intellimize_opt_out_${r}`;
                                    if (!localStorage.getItem(e)) return;
                                    localStorage.removeItem(`intellimize_opt_out_${r}`), n && location.reload()
                                }
                            },
                            getIsOptedOut: function() {
                                if ("function" == typeof wf ? .getUserTrackingChoice) {
                                    let e = wf.getUserTrackingChoice();
                                    return "none" === e ? void 0 : "deny" === e
                                }
                                let e = t.attr("data-wf-intellimize-customer-id");
                                return localStorage.getItem(`intellimize_opt_out_${e}`)
                            }
                        }
                    }
                }
            })
        },
        6442(e, t, n) {
            var r = n(3656);
            r.define("brand", e.exports = function(e) {
                var t, n = {},
                    i = document,
                    o = e("html"),
                    s = e("body"),
                    a = window.location,
                    l = /PhantomJS/i.test(navigator.userAgent),
                    u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function c() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }

                function d() {
                    var e = s.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        i = r.env("editor");
                    if (n) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), i || s.append(t)
                }
                return n.ready = function() {
                    var n, r, s, f = o.attr("data-wf-status"),
                        h = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(h) && a.hostname !== h && (f = !0), f && !l && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), s = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(r, s), n[0]), d(), setTimeout(d, 500), e(i).off(u, c).on(u, c))
                }, n
            })
        },
        2391(e, t, n) {
            var r = n(3656);
            r.define("edit", e.exports = function(e, t, n) {
                if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    s = e(document.documentElement),
                    a = document.location,
                    l = "hashchange",
                    u = n.load || function() {
                        var t, n, r;
                        i = !0, window.WebflowEditor = !0, o.off(l, d), t = function(t) {
                            var n;
                            e.ajax({
                                url: h("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: s.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (n = t, function(t) {
                                    var r, i, o;
                                    t ? (t.thirdPartyCookiesSupported = n, i = (r = t.scriptPath).indexOf("//") >= 0 ? r : h("https://editor-api.webflow.com" + r), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, f)) : console.error("Could not load editor data")
                                })
                            })
                        }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", r = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (p(n, r), t(!1)) : "WF_third_party_cookies_supported" === e.data && (p(n, r), t(!0))
                        }, n.onerror = function() {
                            p(n, r), t(!1)
                        }, window.addEventListener("message", r, !1), window.document.body.appendChild(n)
                    },
                    c = !1;
                try {
                    c = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function d() {
                    !i && /\?edit/.test(a.hash) && u()
                }

                function f(e, t, n) {
                    throw console.error("Could not load editor script: " + t), n
                }

                function h(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function p(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return /[?&](update)(?:[=&?]|$)/.test(a.search) || /\?update$/.test(a.href) ? function() {
                    var e = document.documentElement,
                        t = e.getAttribute("data-wf-site"),
                        n = e.getAttribute("data-wf-page"),
                        r = e.getAttribute("data-wf-item-slug"),
                        i = e.getAttribute("data-wf-collection"),
                        o = e.getAttribute("data-wf-domain");
                    if (t && n) {
                        var s = "pageId=" + n;
                        s += "&utm_source=legacy_editor", r && i && o && (s += "&domain=" + encodeURIComponent(o) + "&itemSlug=" + encodeURIComponent(r) + "&collectionId=" + i), window.location.href = "https://webflow.com/external/designer/" + t + "?" + s
                    }
                }() : c ? u() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && u() : o.on(l, d).triggerHandler(l), {}
            })
        },
        8548(e, t, n) {
            n(3656).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("u" > typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    r = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function s(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function a() {
                                    t = !1
                                }

                                function l() {
                                    document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
                                }

                                function u(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u))
                                }
                                document.addEventListener("keydown", function(n) {
                                    n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && s(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", a, !0), document.addEventListener("pointerdown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), l())
                                }, !0), l(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var n, r, a;
                                        (t || (r = (n = e.target).type, "INPUT" === (a = n.tagName) && i[r] && !n.readOnly || "TEXTAREA" === a && !n.readOnly || n.isContentEditable || 0)) && s(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        n = !0, window.clearTimeout(r), r = window.setTimeout(function() {
                                            n = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        7587(e, t, n) {
            var r = n(3656);
            r.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function n(n) {
                    t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
                }

                function i(n) {
                    var r, i;
                    i = (r = n.target).tagName, (/^a$/i.test(i) && null != r.href || /^(button|textarea)$/i.test(i) && !0 !== r.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(r.type) && !r.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(r.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === r.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, n.target.focus(); e.length > 0;) {
                            var r = e.pop();
                            r.target.dispatchEvent(new MouseEvent(r.type, r))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "u" > typeof document && document.body.hasAttribute("data-wf-focus-within") && r.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        },
        3656(e, t, n) {
            var r, i, o = {},
                s = {},
                a = [],
                l = window.Webflow || [],
                u = window.jQuery,
                c = u(window),
                d = u(document),
                f = u.isFunction,
                h = o._ = n(8520),
                p = o.tram = n(967) && u.tram,
                g = !1,
                m = !1;

            function v(e) {
                var t;
                o.env() && (f(e.design) && c.on("__wf_design", e.design), f(e.preview) && c.on("__wf_preview", e.preview)), f(e.destroy) && c.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, g ? t.ready() : h.contains(a, t.ready) || a.push(t.ready))
            }

            function y(e) {
                var t;
                f(e.design) && c.off("__wf_design", e.design), f(e.preview) && c.off("__wf_preview", e.preview), f(e.destroy) && c.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, a = h.filter(a, function(e) {
                    return e !== t.ready
                }))
            }
            p.config.hideBackface = !1, p.config.keepInherited = !0, o.define = function(e, t, n) {
                s[e] && y(s[e]);
                var r = s[e] = t(u, h, n) || {};
                return v(r), r
            }, o.require = function(e) {
                return s[e]
            }, o.push = function(e) {
                if (g) {
                    f(e) && e();
                    return
                }
                l.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    n = void 0 !== t;
                return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
            };
            var b = navigator.userAgent.toLowerCase(),
                w = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                T = o.env.chrome = /chrome/.test(b) && /Google/.test(navigator.vendor) && parseInt(b.match(/chrome\/(\d+)\./)[1], 10),
                E = o.env.ios = /(ipod|iphone|ipad)/.test(b);
            o.env.safari = /safari/.test(b) && !T && !E, w && d.on("touchstart mousedown", function(e) {
                r = e.target
            }), o.validClick = w ? function(e) {
                return e === r || u.contains(e, r)
            } : function() {
                return !0
            };
            var S = "resize.webflow orientationchange.webflow load.webflow",
                C = "scroll.webflow " + S;

            function I(e, t) {
                var n = [],
                    r = {};
                return r.up = h.throttle(function(e) {
                    h.each(n, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, r.up), r.on = function(e) {
                    "function" != typeof e || h.contains(n, e) || n.push(e)
                }, r.off = function(e) {
                    if (!arguments.length) {
                        n = [];
                        return
                    }
                    n = h.filter(n, function(t) {
                        return t !== e
                    })
                }, r
            }

            function M(e) {
                f(e) && e()
            }

            function O() {
                i && (i.reject(), c.off("load", i.resolve)), i = new u.Deferred, c.on("load", i.resolve)
            }
            o.resize = I(c, S), o.scroll = I(c, C), o.redraw = I(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                g = !0, m ? (m = !1, h.each(s, v)) : h.each(a, M), h.each(l, M), o.resize.up()
            }, o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, m = !0, c.triggerHandler("__wf_destroy"), null != e.domready && (g = e.domready), h.each(s, y), o.resize.off(), o.scroll.off(), o.redraw.off(), a = [], l = [], "pending" === i.state() && O()
            }, u(o.ready), O(), e.exports = window.Webflow = o
        },
        6990(e, t, n) {
            var r = n(3656);
            r.define("links", e.exports = function(e, t) {
                var n, i, o, s = {},
                    a = e(window),
                    l = r.env(),
                    u = window.location,
                    c = document.createElement("a"),
                    d = "w--current",
                    f = /index\.(html|php)$/,
                    h = /\/$/;

                function p() {
                    var e = a.scrollTop(),
                        n = a.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var r = t.link,
                                i = t.sec,
                                o = i.offset().top,
                                s = i.outerHeight(),
                                a = .5 * n,
                                l = i.is(":visible") && o + s - a >= e && o + a <= e + n;
                            t.active !== l && (t.active = l, g(r, d, l))
                        }
                    })
                }

                function g(e, t, n) {
                    var r = e.hasClass(t);
                    n && r || (n || r) && (n ? e.addClass(t) : e.removeClass(t))
                }
                return s.ready = s.design = s.preview = function() {
                    n = l && r.env("design"), o = r.env("slug") || u.pathname || "", r.scroll.off(p), i = [];
                    for (var t = document.links, s = 0; s < t.length; ++s) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var r = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (c.href = r, !(r.indexOf(":") >= 0)) {
                                var s = e(t);
                                if (c.hash.length > 1 && c.host + c.pathname === u.host + u.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(c.hash)) return;
                                    var a = e(c.hash);
                                    a.length && i.push({
                                        link: s,
                                        sec: a,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== r && "" !== r && g(s, d, !l && c.href === u.href || r === o || f.test(r) && h.test(o))
                            }
                        }
                    }(t[s]);
                    i.length && (r.scroll.on(p), p())
                }, s
            })
        },
        3366(e, t, n) {
            var r = n(3656);
            r.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    s = e(document),
                    a = e(document.body),
                    l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    u = r.env("editor") ? ".w-editor-body" : "body",
                    c = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                    d = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
                    h = document.createElement("style");
                h.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var p = /^#[a-zA-Z0-9][\w:.-]*$/;
                let g = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function m(e, t) {
                    var n;
                    switch (t) {
                        case "add":
                            (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function v(t) {
                    var s = t.currentTarget;
                    if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(s.className))) {
                        var u = p.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? s.hash : "";
                        if ("" !== u) {
                            var d, f = e(u);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), d = u, n.hash !== d && i && i.pushState && !(r.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== d && i.pushState({
                                hash: d
                            }, "", d), window.setTimeout(function() {
                                ! function(t, n) {
                                    var r = o.scrollTop(),
                                        i = function(t) {
                                            var n = e(c),
                                                r = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                i = t.offset().top - r;
                                            if ("mid" === t.data("scroll")) {
                                                var s = o.height() - r,
                                                    a = t.outerHeight();
                                                a < s && (i -= Math.round((s - a) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (r !== i) {
                                        var s = function(e, t, n) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || g.matches) return 0;
                                                var r = 1;
                                                return a.add(e).each(function(e, t) {
                                                    var n = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(n) && n >= 0 && (r = n)
                                                }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * r
                                            }(t, r, i),
                                            u = Date.now(),
                                            d = function() {
                                                var e, t, o, a, c, f = Date.now() - u;
                                                window.scroll(0, (e = r, t = i, (o = f) > (a = s) ? t : e + (t - e) * ((c = o / a) < .5 ? 4 * c * c * c : (c - 1) * (2 * c - 2) * (2 * c - 2) + 1))), f <= s ? l(d) : "function" == typeof n && n()
                                            };
                                        l(d)
                                    }
                                }(f, function() {
                                    m(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), m(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: n
                        } = t;
                        s.on(n, f, v), s.on(e, d, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(h, document.head.firstChild)
                    }
                }
            })
        },
        9984(e, t, n) {
            n(3656).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function r(t) {
                    var r, i, o = !1,
                        s = !1,
                        a = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function l(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (s = !0, r = t[0].clientX) : r = e.clientX, i = r)
                    }

                    function u(t) {
                        if (o) {
                            if (s && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var r, l, u, c, f = t.touches,
                                h = f ? f[0].clientX : t.clientX,
                                p = h - i;
                            i = h, Math.abs(p) > a && n && "" === String(n()) && (r = "swipe", l = t, u = {
                                direction: p > 0 ? "right" : "left"
                            }, c = e.Event(r, {
                                originalEvent: l
                            }), e(l.target).trigger(c, u), d())
                        }
                    }

                    function c(e) {
                        if (o && (o = !1, s && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), s = !1;
                            return
                        }
                    }

                    function d() {
                        o = !1
                    }
                    t.addEventListener("touchstart", l, !1), t.addEventListener("touchmove", u, !1), t.addEventListener("touchend", c, !1), t.addEventListener("touchcancel", d, !1), t.addEventListener("mousedown", l, !1), t.addEventListener("mousemove", u, !1), t.addEventListener("mouseup", c, !1), t.addEventListener("mouseout", d, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", l, !1), t.removeEventListener("touchmove", u, !1), t.removeEventListener("touchend", c, !1), t.removeEventListener("touchcancel", d, !1), t.removeEventListener("mousedown", l, !1), t.removeEventListener("mousemove", u, !1), t.removeEventListener("mouseup", c, !1), t.removeEventListener("mouseout", d, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new r(t) : null
                }, t.instance = t.init(document), t
            })
        },
        8346(e, t, n) {
            Object.defineProperty(t, "plugin", {
                enumerable: !0,
                get: function() {
                    return r.plugin
                }
            });
            let r = n(8099)
        },
        983(e, t, n) {
            Object.defineProperty(t, "build", {
                enumerable: !0,
                get: function() {
                    return p
                }
            });
            let r = n(1865),
                i = n(1549),
                o = n(8541);

            function s(e, t) {
                return null != t && "string" == typeof e && e.startsWith("var(") ? (0, r.resolveToString)(e, t) ? ? e : e
            }
            let a = new Set(["opacity", "autoAlpha"]),
                l = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
                u = new Set(["xPercent", "yPercent"]),
                c = new Set(["width", "height"]);

            function d(e) {
                return e.startsWith("+=") || e.startsWith("-=") || e.startsWith("random(")
            }

            function f(e) {
                return (0, o.isRandomValue)(e) || (0, o.isAdditiveValue)(e) || (0, o.isRandomArrayValue)(e)
            }

            function h(e, t) {
                let n = a.has(e) ? 100 : 1,
                    r = 1 !== n || u.has(e),
                    i = e => ({
                        type: "ix3-random",
                        min: e.min / n,
                        max: e.max / n,
                        step: null != e.step ? e.step / n : void 0
                    });
                if ((0, o.isRandomArrayValue)(t)) {
                    let e = r ? {
                        type: "ix3-random-array",
                        values: t.values.map(e => "number" == typeof e ? e / n : e)
                    } : t;
                    return (0, o.makeRandomArrayPicker)(e)
                }
                if ((0, o.isRandomValue)(t)) return (0, o.makeRandomPicker)(r ? i(t) : t);
                if (r) {
                    let e = (0, o.isRandomValue)(t.value) ? i(t.value) : t.value / n;
                    return (0, o.applyAdditive)({
                        type: "ix3-additive",
                        value: e
                    })
                }
                return (0, o.applyAdditive)(t)
            }

            function p(e) {
                (0, i.buildMouseFollowAction)(e), e.addAction("class", {
                    createCustomTween: (e, t, n, r, i, o) => {
                        let s = n.class,
                            a = s ? .selectors || [],
                            l = s ? .operation,
                            u = a ? i.map(e => ({
                                element: e,
                                classList: [...e.classList]
                            })) : [],
                            c = () => {
                                if (l && a)
                                    for (let e of i) "addClass" === l ? a.forEach(t => e.classList.add(t)) : "removeClass" === l ? a.forEach(t => e.classList.remove(t)) : "toggleClass" === l && a.forEach(t => e.classList.toggle(t))
                            };
                        return e.to({}, {
                            duration: .001,
                            onComplete: c,
                            onReverseComplete: c
                        }, o && 0 !== o ? o : .001), () => {
                            if (a) {
                                for (let e of u)
                                    if (e.element && (e.element instanceof HTMLElement && (e.element.className = ""), e.element.classList))
                                        for (let t of e.classList) e.element.classList.add(t)
                            }
                        }
                    }
                }).addAction("style", {
                    createTweenConfig: (e, t) => {
                        let n = {
                                to: {},
                                from: {}
                            },
                            r = t ? .[0];
                        for (let t in e) {
                            let i = e[t],
                                a = Array.isArray(i) ? i[1] : i,
                                l = Array.isArray(i) ? i[0] : void 0,
                                u = f(a) ? h(t, a) : s(a, r),
                                d = f(l) ? h(t, l) : void 0 !== l ? s(l, r) : void 0;
                            null != u && (n.to[t] = u), null == d || (0, o.isAdditiveValue)(a) || (n.from[t] = d), c.has(t) && (f(a) || f(l)) && (n.modifiers || (n.modifiers = {}), n.modifiers[t] = (0, o.makeClamp)(0, Number.MAX_VALUE))
                        }
                        return n
                    }
                }).addAction("transform", {
                    createTweenConfig: (e, t) => {
                        let n = {
                                to: {},
                                from: {}
                            },
                            i = t ? .[0];
                        for (let t in e) {
                            let s = e[t],
                                u = Array.isArray(s) ? s[1] : s,
                                f = Array.isArray(s) ? s[0] : void 0,
                                p = (0, o.isAdditiveValue)(u),
                                g = (0, o.isRandomValue)(u) || (0, o.isRandomArrayValue)(u) || p,
                                m = (0, o.isRandomValue)(f) || (0, o.isRandomArrayValue)(f) || (0, o.isAdditiveValue)(f);
                            if (g || m) {
                                let e = a.has(t) ? (0, o.makeClamp)(0, 1) : l.has(t) || c.has(t) ? (0, o.makeClamp)(0, Number.MAX_VALUE) : void 0;
                                e && (n.modifiers || (n.modifiers = {}), n.modifiers[t] = e, "autoAlpha" === t && (n.modifiers.opacity = e), "scale" === t && (n.modifiers.scaleX = e, n.modifiers.scaleY = e)), g && (u = h(t, u)), m && (f = h(t, f))
                            }
                            switch (t) {
                                case "autoAlpha":
                                case "opacity":
                                    if (null != u && "string" == typeof u && !d(u)) {
                                        let e = i ? (0, r.resolveToNumber)(u, i) : parseFloat(u);
                                        u = void 0 !== e ? e / 100 : u
                                    }
                                    if (null != f && "string" == typeof f && !d(f)) {
                                        let e = i ? (0, r.resolveToNumber)(f, i) : parseFloat(f);
                                        f = void 0 !== e ? e / 100 : f
                                    }
                                    break;
                                case "transformOrigin":
                                    "string" == typeof s ? f = u = u || s : "string" == typeof f ? u = f : "string" == typeof u && (f = u);
                                    break;
                                case "xPercent":
                                case "yPercent":
                                    if (null != u && "string" == typeof u && !d(u)) {
                                        let e = i ? (0, r.resolveToNumber)(u, i) : parseFloat(u);
                                        u = void 0 !== e ? e : u
                                    }
                                    if (null != f && "string" == typeof f && !d(f)) {
                                        let e = i ? (0, r.resolveToNumber)(f, i) : parseFloat(f);
                                        f = void 0 !== e ? e : f
                                    }
                            }
                            null != u && (n.to[t] = u), null == f || p || (n.from[t] = f)
                        }
                        return n
                    }
                })
            }
        },
        9800(e, t, n) {
            Object.defineProperty(t, "buildLottieAction", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(1865);

            function i(e) {
                e.addAction("lottie", {
                    createCustomTween: (e, t, n, r, i, a) => {
                        let l = n.lottie;
                        if (!l || !i.length || !window.Webflow) return;
                        let u = window.Webflow.require ? .("lottie");
                        if (!u) return;
                        let c = [],
                            d = !1;
                        for (let t of i) {
                            let n = s(l.from, t, o.FROM),
                                i = s(l.to, t, o.TO),
                                f = u.createInstance(t);
                            if (!f) continue;
                            c.push(f);
                            let h = () => {
                                if (d) return;
                                let t = f.frames,
                                    o = Math.round(n * t),
                                    s = Math.round(i * t);
                                null === f.gsapFrame && (f.gsapFrame = o);
                                let l = r;
                                l.ease || (l = { ...l,
                                    ease: "none"
                                }), e.fromTo(f, {
                                    gsapFrame: o
                                }, {
                                    gsapFrame: s,
                                    ...l
                                }, a || 0)
                            };
                            f.isLoaded ? h() : f.onDataReady(h)
                        }
                        return () => {
                            for (let e of (d = !0, c)) e.goToFrameAndStop(0), e.gsapFrame = null
                        }
                    }
                })
            }
            let o = {
                FROM: 0,
                TO: 1
            };

            function s(e, t, n) {
                if ("number" == typeof e) return e;
                let i = (0, r.resolveToNumber)(e, t);
                return void 0 !== i ? i / 100 : n
            }
        },
        1549(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                buildMouseFollowAction: function() {
                    return h
                },
                forTestSuite: function() {
                    return f
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(2319),
                s = n(5966);

            function a(e, t, n) {
                if (e <= 1) return [0];
                if ("number" == typeof t) {
                    let n = Math.max(0, Math.min(e - 1, Math.floor(t))),
                        r = [n];
                    for (let t = 1; r.length < e; t++) n + t < e && r.push(n + t), n - t >= 0 && r.push(n - t);
                    return r
                }
                switch (t) {
                    case "start":
                        return Array.from({
                            length: e
                        }, (e, t) => t);
                    case "center":
                        {
                            let t = [],
                                n = Math.floor((e - 1) / 2);t.push(n);
                            for (let r = 1; t.length < e; r++) n + r < e && t.push(n + r),
                            n - r >= 0 && t.push(n - r);
                            return t
                        }
                    case "random":
                        {
                            let t, r = null != n && "" !== n ? (t = function(e) {
                                    let t = 0x811c9dc5;
                                    for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 0x1000193);
                                    return t >>> 0
                                }(n) >>> 0, () => {
                                    let e = Math.imul((t = t + 0x6d2b79f5 | 0) ^ t >>> 15, 1 | t);
                                    return (((e ^= e + Math.imul(e ^ e >>> 7, 61 | e)) ^ e >>> 14) >>> 0) / 0x100000000
                                }) : Math.random,
                                i = Array.from({
                                    length: e
                                }, (e, t) => t);
                            for (let t = e - 1; t > 0; t--) {
                                let e = Math.floor(r() * (t + 1));
                                [i[t], i[e]] = [i[e], i[t]]
                            }
                            return i
                        }
                    case "edges":
                        {
                            let t = [],
                                n = 0,
                                r = e - 1;
                            for (; n <= r;) t.push(n),
                            n !== r && t.push(r),
                            n++,
                            r--;
                            return t
                        }
                    default:
                        return Array.from({
                            length: e
                        }, (t, n) => e - 1 - n)
                }
            }

            function l(e) {
                if (null == e) return 50;
                let t = "number" == typeof e ? 1e3 * e : parseFloat(e);
                return Number.isFinite(t) && t >= 0 ? t : 50
            }
            let u = e => {
                    if ("string" != typeof e) return .5;
                    let t = /^(-?\d+(?:\.\d+)?)%$/.exec(e.trim());
                    if (t) return Math.max(0, Math.min(1, parseFloat(t[1]) / 100));
                    let n = e.trim().toLowerCase();
                    return "left" === n || "top" === n ? 0 : "right" === n || "bottom" === n ? 1 : .5
                },
                c = (e, t) => {
                    if (e ? .amount != null) {
                        let n = l(e.amount);
                        return Math.max(1, t > 1 ? n / (t - 1) : 50)
                    }
                    return e ? .each != null ? Math.max(1, l(e.each)) : 1
                },
                d = e => {
                    if (!e) return {
                        x: .5,
                        y: .5
                    };
                    if ("string" == typeof e) {
                        let [t, n] = e.trim().split(/\s+/);
                        return {
                            x: u(t ? ? "50%"),
                            y: u(n ? ? "50%")
                        }
                    }
                    return {
                        x: u(e.x),
                        y: u(e.y)
                    }
                },
                f = {
                    DEFAULT_STAGGER_MS: 50,
                    computeMouseFollowSmoothingMs: c,
                    getChainOrder: a,
                    parseAnchor: d,
                    parseAnchorAxis: u,
                    staggerEachToMs: l
                };

            function h(e) {
                e.addAction("mouse-follow", {
                    requiresTriggerElementContext: !0,
                    createCustomTween: (e, t, n, r, i, l, u) => (function(e, t, n, r) {
                        if (!n.length) return;
                        let i = r ? .animation;
                        if (!i ? .hasGsap()) return;
                        let l = "u" > typeof window && "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                            u = t ? .leaveBehavior ? ? "return",
                            f = t ? .onEnter ? ? "animate",
                            h = r ? .timelineRole,
                            p = "mouseX" === h ? "x" : "mouseY" === h ? "y" : t ? .axis ? ? "x",
                            g = t ? .followMode;
                        if (null != g && "full" !== g && g !== (0, o.getSingleAxisMouseFollowMode)(p)) return;
                        let m = d(t ? .anchor),
                            v = "x" === p ? m.x : m.y,
                            y = n.map(e => i.getProperty(e, p)),
                            b = n.map(e => i.quickSetter(e, p, "px"));
                        if (b.some(e => null == e)) return;
                        let w = (0, s.initScrollCache)(),
                            T = n.map(e => {
                                let t = e.getBoundingClientRect();
                                return "x" === p ? t.left + t.width * v : t.top + t.height * v + (0, s.getScrollY)()
                            }),
                            E = e.timing ? .stagger,
                            S = n.length,
                            C = c(E, S),
                            I = E ? .from,
                            M = a(S, "number" == typeof I || "start" === I || "center" === I || "edges" === I || "end" === I || "random" === I ? I : "end", t ? .groupId ? ? t ? .syncedActionId);
                        if (0 === M.length) return;
                        let O = new Float64Array(S),
                            A = M[0],
                            R = {
                                value: T[A] ? ? 0
                            },
                            x = null,
                            _ = !1,
                            k = 0,
                            N = null,
                            P = !1,
                            F = null,
                            L = performance.now(),
                            D = 0,
                            j = () => {
                                let e = performance.now(),
                                    t = Math.min(e - L, 100);
                                L = e;
                                let n = 1 - Math.exp(-t / C),
                                    r = !1;
                                for (let e = 0; e < M.length; e++) {
                                    let t, i = M[e];
                                    if (0 === e) t = R.value;
                                    else {
                                        let n = M[e - 1];
                                        t = T[n] + O[n]
                                    }
                                    let o = t - T[i],
                                        s = o - O[i];
                                    Math.abs(s) > .5 ? (O[i] = O[i] + s * n, b[i](O[i]), r = !0) : 0 !== s && (O[i] = o, b[i](O[i]))
                                }
                                x ? .isActive() && (r = !0), r || $()
                            },
                            $ = () => {
                                P && (F ? .(), F = null, P = !1)
                            },
                            B = e => {
                                x ? .kill(), x = null, D = 0, R.value = e;
                                for (let t = 0; t < M.length; t++) {
                                    let n = M[t],
                                        r = e - T[n];
                                    O[n] = r, b[n](r)
                                }
                                $()
                            },
                            U = () => {
                                P || (L = performance.now(), F = i.addTicker(j), P = !0)
                            },
                            V = r ? .subscribeChannel ? .(o.MOUSE_MOVE_CHANNELS.POSITION, e => {
                                var t, n;
                                N || (t = e.triggerEl, n = e.isViewport, N = t, k = n ? "x" === p ? window.innerWidth : window.innerHeight : "x" === p ? t.offsetWidth : t.offsetHeight);
                                let r = "x" === p ? e.x : e.y + (0, s.getScrollY)();
                                if (l) {
                                    _ = !0, B(r);
                                    return
                                }
                                if (_)
                                    if (x) {
                                        let e = Math.max(D - performance.now(), 50);
                                        x.kill();
                                        let t = i.to(R, {
                                            value: r,
                                            duration: e / 1e3,
                                            ease: "power2.out",
                                            onUpdate: U,
                                            onComplete: () => {
                                                x === t && (x = null, D = 0)
                                            }
                                        });
                                        if (!t) {
                                            R.value = r, U();
                                            return
                                        }
                                        x = t
                                    } else R.value = r;
                                else {
                                    if (_ = !0, "snap" === f) return void B(r);
                                    let e = .1 + .5 * Math.min(Math.abs(r - R.value) / (k || 1), 1);
                                    D = performance.now() + 1e3 * e, x ? .kill();
                                    let t = i.to(R, {
                                        value: r,
                                        duration: e,
                                        ease: "power2.out",
                                        onUpdate: U,
                                        onComplete: () => {
                                            x === t && (x = null, D = 0)
                                        }
                                    });
                                    if (!t) {
                                        R.value = r, U();
                                        return
                                    }
                                    x = t
                                }
                                U()
                            }),
                            z = r ? .subscribeChannel ? .(o.MOUSE_MOVE_CHANNELS.LEAVE, () => {
                                if (_ = !1, "stay" === u) return void U();
                                if (l) return void(() => {
                                    x ? .kill(), x = null, D = 0, R.value = T[A] ? ? 0;
                                    for (let e = 0; e < M.length; e++) {
                                        let t = M[e];
                                        O[t] = 0, b[t](0)
                                    }
                                    $()
                                })();
                                let e = T[A] ? ? 0,
                                    t = Math.min(Math.abs(R.value - e) / (k || 1), 1);
                                x ? .kill();
                                let n = i.to(R, {
                                    value: e,
                                    duration: .1 + .5 * t,
                                    ease: "power2.out",
                                    onUpdate: U,
                                    onComplete: () => {
                                        x === n && (x = null)
                                    }
                                });
                                if (!n) {
                                    R.value = e, U();
                                    return
                                }
                                x = n
                            }),
                            H = new AbortController,
                            {
                                signal: W
                            } = H,
                            G = 0;
                        return window.addEventListener("resize", () => {
                            clearTimeout(G), G = window.setTimeout(() => {
                                N && (k = "x" === p ? N.offsetWidth : N.offsetHeight);
                                for (let e = 0; e < n.length; e++) {
                                    let t = n[e],
                                        r = i.getProperty(t, p),
                                        o = "number" == typeof r ? r : parseFloat(String(r)),
                                        a = Number.isFinite(o) ? o : 0,
                                        l = t.getBoundingClientRect(),
                                        u = "x" === p ? l.left + l.width * v : l.top + l.height * v;
                                    T[e] = "x" === p ? u - a : u - a + (0, s.getScrollY)(), O[e] = a
                                }
                                if (!_) {
                                    let e = T[A];
                                    void 0 !== e && (x ? .isActive() && (x.kill(), x = null), R.value = e)
                                }
                            }, 250)
                        }, {
                            signal: W
                        }), () => {
                            x ? .kill(), $(), clearTimeout(G), H.abort(), V ? .(), z ? .(), w();
                            for (let e = 0; e < n.length; e++) i.set(n[e], {
                                [p]: y[e]
                            })
                        }
                    })(t, n, i, u)
                })
            }
        },
        8541(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                applyAdditive: function() {
                    return h
                },
                formatRandom: function() {
                    return a
                },
                formatRandomArray: function() {
                    return l
                },
                isAdditiveValue: function() {
                    return o
                },
                isRandomArrayValue: function() {
                    return s
                },
                isRandomValue: function() {
                    return i
                },
                makeClamp: function() {
                    return p
                },
                makeRandomArrayPicker: function() {
                    return f
                },
                makeRandomPicker: function() {
                    return d
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });

            function i(e) {
                return "object" == typeof e && null !== e && "ix3-random" === e.type && "number" == typeof e.min && "number" == typeof e.max && (void 0 === e.step || "number" == typeof e.step) && (void 0 === e.unit || "string" == typeof e.unit)
            }

            function o(e) {
                return "object" == typeof e && null !== e && "ix3-additive" === e.type && ("number" == typeof e.value || i(e.value)) && (void 0 === e.unit || "string" == typeof e.unit)
            }

            function s(e) {
                return "object" == typeof e && null !== e && "ix3-random-array" === e.type && Array.isArray(e.values) && e.values.every(e => "number" == typeof e || "string" == typeof e) && (void 0 === e.unit || "string" == typeof e.unit)
            }

            function a(e, t) {
                let n = e.unit ? ? t ? ? "",
                    r = null != e.step ? `, ${e.step}` : "";
                return `random(${e.min}, ${e.max}${r})${n}`
            }

            function l(e, t) {
                let n = e.unit ? ? t ? ? "";
                return `random([${e.values.join(", ")}])${n}`
            }

            function u(e) {
                let [t = "", n] = String(e).split("e"), r = (t.split(".")[1] || "").length;
                return void 0 === n ? r : Math.max(0, r - Number(n))
            }

            function c(e, t, n) {
                let r = new WeakMap,
                    i = (n, i) => {
                        let o = function(e, t) {
                            if (e <= 1) return 0;
                            if (void 0 === t) return Math.floor(Math.random() * e);
                            let n = Math.floor(Math.random() * (e - 1));
                            return n < t ? n : n + 1
                        }(e, r.get(i));
                        return r.set(i, o), t(o)
                    };
                return i.legacyExpression = n, i
            }

            function d(e) {
                let t = e.unit ? ? "",
                    n = e => t ? `${e}${t}` : e,
                    r = a(e);
                if (!e.step) {
                    let {
                        min: t,
                        max: i
                    } = e, o = (e, r) => n(t + Math.random() * (i - t));
                    return o.legacyExpression = r, o
                }
                let i = Math.abs(e.step),
                    o = Math.min(e.min, e.max),
                    s = Math.max(e.min, e.max),
                    l = Math.round((s - o) / i),
                    d = Math.max(u(o), u(i)),
                    f = 10 ** d;
                return c(l + 1, e => {
                    let t = o + e * i;
                    return n(Math.min(s, Math.max(o, d ? Math.round(t * f) / f : t)))
                }, r)
            }

            function f(e) {
                let t = e.unit ? ? "",
                    n = [...new Set(e.values)];
                return c(n.length, e => {
                    let r = n[e] ? ? 0;
                    return "number" == typeof r && t ? `${r}${t}` : r
                }, l(e))
            }

            function h(e, t) {
                let n = e.unit ? ? t ? ? "";
                return i(e.value) ? `+=${a(e.value,n)}` : `+=${e.value}${n}`
            }

            function p(e, t) {
                let n = n => n < e ? e : n > t ? t : n;
                return e => {
                    if ("number" == typeof e) return n(e);
                    let t = parseFloat(e);
                    if (Number.isNaN(t)) return e;
                    let r = n(t);
                    return r === t ? e : `${r}${e.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i,"")}`
                }
            }
        },
        1865(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                resolveToNumber: function() {
                    return i
                },
                resolveToString: function() {
                    return o
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });

            function i(e, t) {
                if ("number" == typeof e) return e;
                if ("string" == typeof e) {
                    let n = e;
                    if (n.startsWith("var(")) {
                        let e = n.slice(4, -1).split(",")[0] ? .trim() ? ? "";
                        if (!e || !(n = getComputedStyle(t).getPropertyValue(e).trim())) return
                    }
                    let r = parseFloat(n);
                    return isNaN(r) ? void 0 : r
                }
            }

            function o(e, t) {
                if ("string" == typeof e) {
                    if (e.startsWith("var(")) {
                        let n = e.slice(4, -1).split(",")[0] ? .trim() ? ? "";
                        if (!n) return;
                        return getComputedStyle(t).getPropertyValue(n).trim() || void 0
                    }
                    return e
                }
            }
        },
        6512(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                interpolateAARRGGBB: function() {
                    return l
                },
                setupAnimateTimeline: function() {
                    return u
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(2411),
                s = n(9424),
                a = n(1865);

            function l(e, t, n) {
                let r = e >>> 24 & 255,
                    i = e >>> 16 & 255,
                    o = e >>> 8 & 255,
                    s = 255 & e;
                return (Math.round(r + ((t >>> 24 & 255) - r) * n) << 24 | Math.round(i + ((t >>> 16 & 255) - i) * n) << 16 | Math.round(o + ((t >>> 8 & 255) - o) * n) << 8 | Math.round(s + ((255 & t) - s) * n)) >>> 0
            }

            function u(e, t, n, r, i, u) {
                if (0 === n.length) return;
                let c = t.riveInstance.viewModelInstance;
                if (c)
                    for (let d of n) {
                        let n;
                        if (null === d.value || void 0 === d.value || !(0, o.getVmiProperty)(c, d.propertyType, d.propertyName)) continue;
                        let f = d.value;
                        if ("string" == typeof f && f.startsWith("var(")) {
                            if ("number" === d.propertyType ? n = (0, a.resolveToNumber)(f, u) : "color" === d.propertyType && (n = (0, a.resolveToString)(f, u)), void 0 === n) continue
                        } else n = f;
                        "number" === d.propertyType ? function(e, t, n, r, i, o) {
                            let s = e.riveInstance.viewModelInstance;
                            if (!s) return;
                            let a = s.number(n);
                            if (!a) return;
                            let l = "number" == typeof r ? r : parseFloat(String(r));
                            if (isNaN(l)) return;
                            let u = {
                                v: a.value
                            };
                            t.to(u, { ...i,
                                v: l,
                                onStart() {
                                    let t = e.currentValues[`number:${n}`];
                                    u.v = "number" == typeof t ? t : a.value, this.invalidate()
                                },
                                onUpdate: () => {
                                    a.value = u.v
                                }
                            }, o ? ? 0)
                        }(t, e, d.propertyName, n, r, i) : "color" === d.propertyType && function(e, t, n, r, i, o) {
                            let a = e.riveInstance.viewModelInstance;
                            if (!a) return;
                            let u = a.color(n);
                            if (!u) return;
                            let c = "number" == typeof r ? r : (0, s.parseColorToAARRGGBB)(String(r));
                            if (null == c) return;
                            let d = {
                                    fromPacked: u.value
                                },
                                f = {
                                    t: 0
                                };
                            t.fromTo(f, {
                                t: 0
                            }, { ...i,
                                t: 1,
                                onStart() {
                                    let t = e.currentValues[`color:${n}`];
                                    d.fromPacked = "number" == typeof t ? t : u.value, this.invalidate()
                                },
                                onUpdate: () => {
                                    u.value = l(d.fromPacked, c, f.t)
                                }
                            }, o ? ? 0)
                        }(t, e, d.propertyName, n, r, i)
                    }
            }
        },
        8776(e, t, n) {
            Object.defineProperty(t, "setVmiValue", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(7720),
                i = n(2411),
                o = n(9424);

            function s(e, t, n, s, a, l) {
                let u = e.riveInstance.viewModelInstance;
                if ("trigger" === t) {
                    if (l) return;
                    let e = u ? .trigger ? .(n);
                    e ? .fire ? .();
                    return
                }
                if (!u) return;
                let c = (0, i.getVmiProperty)(u, t, n);
                if (!c) return;
                let d = a ? .viewModelProperties[(0, r.vmKey)(e.name, n, t)],
                    f = l && null != d ? d : s,
                    h = `${t}:${n}`;
                switch (t) {
                    case "number":
                        "number" == typeof f && (c.value = f, e.currentValues[h] = f);
                        return;
                    case "boolean":
                        "boolean" == typeof f && (c.value = f, e.currentValues[h] = f);
                        return;
                    case "string":
                    case "enum":
                        "string" == typeof f && (c.value = f, e.currentValues[h] = f);
                        return;
                    case "color":
                        {
                            let t = "number" == typeof f ? f : "string" == typeof f ? (0, o.parseColorToAARRGGBB)(f) : null;null != t && (c.value = t, e.currentValues[h] = t);
                            return
                        }
                    default:
                        return
                }
            }
        },
        613(e, t) {
            Object.defineProperty(t, "RIVE_CONSTANTS", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                MINIMUM_TIME: .001,
                MAX_BYTE_VALUE: 255
            }
        },
        8089(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                resolveSurfaceArea: function() {
                    return h
                },
                setupAnimateAnimation: function() {
                    return m
                },
                setupAnimation: function() {
                    return g
                },
                setupTimeline: function() {
                    return p
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(613),
                s = n(3044),
                a = n(2411),
                l = n(312),
                u = n(8776),
                c = n(6512),
                d = n(7720),
                f = n(1865);

            function h(e, t) {
                if (!t) return null;
                let n = `${t.name}:${t.instanceName??""}`,
                    r = s.surfaceCache.get(e) ? .get(n);
                if (r) return r;
                let i = e.viewModelByName ? .(t.name) ? ? void 0,
                    o = i ? .instanceByName ? .(t.instanceName ? ? "") ? ? null;
                e.bindViewModelInstance ? .(o);
                let a = {
                        name: t.name,
                        riveInstance: e,
                        currentValues: {}
                    },
                    l = s.surfaceCache.get(e);
                return l || (l = new Map, s.surfaceCache.set(e, l)), l.set(n, a), a
            }

            function p(e, t, n, r, i, s) {
                if (0 === n.length) return;
                for (let e of n) {
                    let n;
                    if ("trigger" === e.propertyType || "artboard" === e.propertyType || null === e.value || void 0 === e.value) continue;
                    let r = e.value;
                    void 0 !== (n = "string" == typeof r && r.startsWith("var(") ? "number" === e.propertyType ? (0, f.resolveToNumber)(r, s) : "color" === e.propertyType ? (0, f.resolveToString)(r, s) : void 0 : r) && (t.currentValues[`${e.propertyType}:${e.propertyName}`] = n)
                }
                let a = e => {
                    for (let i of n) {
                        let n;
                        if ("trigger" !== i.propertyType && null === i.value || void 0 === i.value) continue;
                        let o = i.value;
                        if ("string" == typeof o && o.startsWith("var(")) {
                            if ("number" === i.propertyType ? n = (0, f.resolveToNumber)(o, s) : "color" === i.propertyType && (n = (0, f.resolveToString)(o, s)), void 0 === n) continue
                        } else n = o;
                        ! function(e, t, n, r, i, o) {
                            if ("artboard" === n) {
                                if ("string" != typeof r) return;
                                let s = e.riveInstance.viewModelInstance ? .artboard ? .(t);
                                if (!s) return;
                                if (o) {
                                    let r = (0, d.vmKey)(e.name, t, n),
                                        o = i ? .viewModelProperties[r];
                                    if ("string" == typeof o) {
                                        let t = e.riveInstance.getArtboard ? .(o);
                                        t && (s.value = t)
                                    }
                                    return
                                }
                                let a = e.riveInstance.getArtboard ? .(r);
                                if (!a) return;
                                s.value = a;
                                return
                            }(0, u.setVmiValue)(e, n, t, r, i, o)
                        }(t, i.propertyName, i.propertyType, n, r, e)
                    }
                };
                e.to({
                    int: 0
                }, {
                    int: 1,
                    duration: o.RIVE_CONSTANTS.MINIMUM_TIME,
                    onStart: () => {
                        a(!1)
                    },
                    onReverseComplete: () => {
                        a(!0)
                    }
                }, i ? ? o.RIVE_CONSTANTS.MINIMUM_TIME)
            }

            function g(e, t, n, r, i) {
                let o = t.animationSource,
                    s = h(e, o);
                if (!s) return;
                let u = Object.values(t.addedProperties ? ? {}),
                    c = (0, a.storeOriginalValues)(u, s);
                return p(n, s, u, c, r, i), (0, l.createCleanupFunction)(e, o, c)
            }

            function m(e, t, n, r, i, o) {
                let s = t.animationSource,
                    u = h(e, s);
                if (!u) return;
                let d = Object.values(t.addedProperties ? ? {}),
                    f = (0, a.storeOriginalValues)(d, u);
                return (0, c.setupAnimateTimeline)(n, u, d, r, i, o), (0, l.createCleanupFunction)(e, s, f)
            }
        },
        4480(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                buildAnimateRiveAction: function() {
                    return d
                },
                buildRiveAction: function() {
                    return c
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(8089);

            function s(e) {
                return "object" == typeof e && null !== e && "loaded" in e && "boolean" == typeof e.loaded
            }

            function a(e) {
                !e.isPlaying && e.play && e.play()
            }

            function l(e, t, n) {
                let r = [];
                for (let i of e) {
                    let e = function(e, t, n) {
                        let r, i = t.getInstance(e),
                            o = i ? .rive,
                            l = s(o) ? o : null;
                        if (l ? .loaded) return a(l), n(l, e);
                        let u = !1,
                            c = () => {
                                if (u || !e.isConnected) return;
                                let i = t.getInstance(e),
                                    o = i ? .rive,
                                    l = s(o) ? o : null;
                                l ? .loaded && (a(l), r = n(l, e)), e.removeEventListener("w-rive-load", c)
                            };
                        return e.addEventListener("w-rive-load", c), () => {
                            u = !0, e.removeEventListener("w-rive-load", c), r ? .()
                        }
                    }(i, t, n);
                    e && r.push(e)
                }
                if (0 !== r.length) return () => {
                    for (let e of r) e()
                }
            }

            function u() {
                return window.Webflow ? window.Webflow.require ? .("rive") ? ? null : null
            }

            function c(e) {
                e.addAction("rive", {
                    createCustomTween: (e, t, n, r, i, s) => {
                        let a = n.rive;
                        if (!a || !i.length) return;
                        let c = u();
                        if (c) return l(i, c, (t, n) => (0, o.setupAnimation)(t, a, e, s, n))
                    }
                })
            }

            function d(e) {
                e.addAction("animate-rive", {
                    createCustomTween: (e, t, n, r, i, s) => {
                        let a = n.rive;
                        if (!a || !i.length) return;
                        let c = u();
                        if (c) return l(i, c, (t, n) => (0, o.setupAnimateAnimation)(t, a, e, r, s, n))
                    }
                })
            }
        },
        312(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                createCleanupFunction: function() {
                    return u
                },
                restoreViewModelProperties: function() {
                    return l
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(7720),
                s = n(8776),
                a = n(3044);

            function l(e, t, n) {
                let r = e.viewModelInstance ? ? null;
                if (r)
                    for (let [i, a] of Object.entries(n.viewModelProperties)) {
                        let n = (0, o.parseVmKey)(i);
                        if (!n || n.vmName !== t) continue;
                        let l = {
                            name: t,
                            riveInstance: e,
                            currentValues: {}
                        };
                        if ("artboard" === n.propType) {
                            if ("string" != typeof a) continue;
                            let t = r.artboard ? .(n.propName),
                                i = e.getArtboard ? .(a);
                            t && i && (t.value = i);
                            continue
                        }(0, s.setVmiValue)(l, n.propType, n.propName, a)
                    }
            }

            function u(e, t, n) {
                return () => {
                    t && e && (l(e, t.name, n), (0, a.clearSurfaceCache)(e, t))
                }
            }
        },
        2411(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                getVmiProperty: function() {
                    return a
                },
                storeOriginalValues: function() {
                    return s
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(7720);

            function s(e, t) {
                let n = {
                    viewModelProperties: {}
                };
                for (let r of e) ! function(e, t, n, r) {
                    let i = (0, o.vmKey)(e.name, t, n);
                    if (!(i in r.viewModelProperties)) {
                        if ("artboard" === n) {
                            let n = e.riveInstance.viewModelInstance ? .artboard ? .(t) ? .name;
                            null != n && (r.viewModelProperties[i] = n);
                            return
                        }
                        let o = e.riveInstance.viewModelInstance ? function(e, t, n) {
                            let r = a(e, t, n);
                            return r ? r.value : void 0
                        }(e.riveInstance.viewModelInstance, n, t) : null;
                        null != o && (r.viewModelProperties[i] = o)
                    }
                }(t, r.propertyName, r.propertyType, n);
                return n
            }

            function a(e, t, n) {
                switch (t) {
                    case "number":
                        return e.number(n);
                    case "boolean":
                        return e.boolean(n);
                    case "string":
                        return e.string(n);
                    case "color":
                        return e.color(n);
                    case "enum":
                        return e.enum(n);
                    default:
                        return null
                }
            }
        },
        3044(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearSurfaceCache: function() {
                    return o
                },
                surfaceCache: function() {
                    return i
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            let i = new WeakMap;

            function o(e, t) {
                if (!t) return;
                let n = `${t.name}:${t.instanceName??""}`,
                    r = i.get(e);
                r && (r.delete(n), 0 === r.size && i.delete(e))
            }
        },
        9424(e, t, n) {
            Object.defineProperty(t, "parseColorToAARRGGBB", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(613);

            function i(e) {
                let t = e.trim();
                if (!t) return null;
                try {
                    let {
                        red: e,
                        green: n,
                        blue: i,
                        alpha: a
                    } = function(e) {
                        let t, n, r, i = 1,
                            a = e.replace(/\s/g, "").toLowerCase(),
                            l = a;
                        if (!l.startsWith("#") && !l.startsWith("rgb") && !l.startsWith("hsl")) {
                            let e = function(e) {
                                if (!o) {
                                    let e = document.createElement("canvas");
                                    if (e.width = 1, e.height = 1, !(o = e.getContext("2d"))) return null
                                }
                                return (o.fillStyle = "#000000", o.fillStyle = e, "#000000" === o.fillStyle && "black" !== e.toLowerCase()) ? null : o.fillStyle
                            }(a);
                            e && (l = e)
                        }
                        if (l.startsWith("#")) {
                            let e = l.substring(1);
                            3 === e.length || 4 === e.length ? (t = parseInt(e.charAt(0) + e.charAt(0), 16), n = parseInt(e.charAt(1) + e.charAt(1), 16), r = parseInt(e.charAt(2) + e.charAt(2), 16), 4 === e.length && (i = parseInt(e.charAt(3) + e.charAt(3), 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), r = parseInt(e.substring(4, 6), 16), 8 === e.length && (i = parseInt(e.substring(6, 8), 16) / 255))
                        } else if (l.startsWith("rgba")) {
                            let e = l.match(/rgba\(([^)]+)\)/) ? .[1] ? .split(",");
                            t = parseInt(e ? .[0] ? ? "", 10), n = parseInt(e ? .[1] ? ? "", 10), r = parseInt(e ? .[2] ? ? "", 10), i = parseFloat(e ? .[3] ? ? "")
                        } else if (l.startsWith("rgb")) {
                            let e = l.match(/rgb\(([^)]+)\)/) ? .[1] ? .split(",");
                            t = parseInt(e ? .[0] ? ? "", 10), n = parseInt(e ? .[1] ? ? "", 10), r = parseInt(e ? .[2] ? ? "", 10)
                        } else if (l.startsWith("hsla")) {
                            let e = l.match(/hsla\(([^)]+)\)/) ? .[1] ? .split(","),
                                o = parseFloat(e ? .[0] ? ? ""),
                                a = parseFloat(e ? .[1] ? .replace("%", "") ? ? "") / 100,
                                u = parseFloat(e ? .[2] ? .replace("%", "") ? ? "") / 100;
                            i = parseFloat(e ? .[3] ? ? ""), {
                                red: t,
                                green: n,
                                blue: r
                            } = s(o, a, u)
                        } else if (l.startsWith("hsl")) {
                            let e = l.match(/hsl\(([^)]+)\)/) ? .[1] ? .split(","),
                                i = parseFloat(e ? .[0] ? ? ""),
                                o = parseFloat(e ? .[1] ? .replace("%", "") ? ? "") / 100,
                                a = parseFloat(e ? .[2] ? .replace("%", "") ? ? "") / 100;
                            ({
                                red: t,
                                green: n,
                                blue: r
                            } = s(i, o, a))
                        }
                        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r) || Number.isNaN(i)) throw Error(`Invalid color value: '${e}'`);
                        return {
                            red: t,
                            green: n,
                            blue: r,
                            alpha: i
                        }
                    }(t);
                    if (void 0 === e || void 0 === n || void 0 === i) return null;
                    return (Math.round(a * r.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24 | e << 16 | n << 8 | i) >>> 0
                } catch {
                    return null
                }
            }
            let o = null;

            function s(e, t, n) {
                let r, i, o, s = (1 - Math.abs(2 * n - 1)) * t,
                    a = s * (1 - Math.abs(e / 60 % 2 - 1)),
                    l = n - s / 2;
                return e >= 0 && e < 60 ? (r = s, i = a, o = 0) : e >= 60 && e < 120 ? (r = a, i = s, o = 0) : e >= 120 && e < 180 ? (r = 0, i = s, o = a) : e >= 180 && e < 240 ? (r = 0, i = a, o = s) : e >= 240 && e < 300 ? (r = a, i = 0, o = s) : (r = s, i = 0, o = a), {
                    red: Math.round((r + l) * 255),
                    green: Math.round((i + l) * 255),
                    blue: Math.round((o + l) * 255)
                }
            }
        },
        7720(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                parseVmKey: function() {
                    return s
                },
                vmKey: function() {
                    return i
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });

            function i(e, t, n) {
                return `vm:${e}:${t}:${n}`
            }
            let o = new Set(["string", "number", "boolean", "color", "enum", "trigger", "artboard"]);

            function s(e) {
                if (!e.startsWith("vm:")) return null;
                let t = e.lastIndexOf(":"),
                    n = e.slice(t + 1);
                if (!o.has(n)) return null;
                let r = e.slice(3, t),
                    i = r.indexOf(":");
                return -1 === i ? null : {
                    vmName: r.slice(0, i),
                    propName: r.slice(i + 1),
                    propType: n
                }
            }
        },
        5253(e, t, n) {
            Object.defineProperty(t, "fadeObject", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(7812),
                i = n(9569),
                o = (e, t, n, i, o, s) => {
                    if (!e.visible) return;
                    let a = e.type;
                    if ("color" === a || "depth" === a || "outline" === a) i.fromTo(e, {
                        alpha: t
                    }, { ...o,
                        alpha: n
                    }, s);
                    else if ("transmission" === a) {
                        let a, l;
                        a = e.ior ? ? r.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR, l = e.thickness ? ? r.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS, i.fromTo(e, {
                            alpha: t,
                            ior: a,
                            thickness: l
                        }, { ...o,
                            alpha: 1 - n,
                            ior: window.gsap.utils.interpolate(a, 1, 1 - n),
                            thickness: window.gsap.utils.interpolate(l, 0, 1 - n),
                            onUpdate: () => {
                                e.visible = e.alpha > r.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD
                            }
                        }, s)
                    } else "light" === a && void 0 !== e.alphaOverride && i.fromTo(e, {
                        alphaOverride: t
                    }, { ...o,
                        alphaOverride: n
                    }, s)
                },
                s = (e, t, n, s, a, l) => {
                    if (!e) return;
                    let u = e.material,
                        c = u ? .layers;
                    if (c)
                        for (let d of (u.transparent = !0, (0, i.hasRenderOrder)(e) && (e.renderOrder = r.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER), c)) {
                            let e = "light" === d.type ? d.alphaOverride ? ? 1 : d.alpha ? ? 1;
                            o(d, void 0 !== t.from && (0, i.checkTt)(s, "from") ? t.from : e, void 0 !== t.to && (0, i.checkTt)(s, "to") ? t.to : e, n, a, l)
                        }
                }
        },
        8295(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                animateColor: function() {
                    return c
                },
                animateIntensity: function() {
                    return l
                },
                animateZoom: function() {
                    return u
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(856),
                s = n(5439),
                a = n(9569),
                l = (e, t, n, r, i, o) => {
                    let s = t.intensity;
                    if (!s || "object" != typeof s) return;
                    let l = e.intensity ? ? 0,
                        u = s.from && (0, a.checkTt)(r, "from") ? s.from : l,
                        c = s.to && (0, a.checkTt)(r, "to") ? s.to : l,
                        d = {
                            v: u
                        };
                    n.fromTo(d, {
                        v: u
                    }, { ...i,
                        v: c,
                        onUpdate: () => {
                            (0, a.hasIntensity)(e) && (e.intensity = d.v)
                        }
                    }, o || 0)
                },
                u = (e, t, n, r, i, s) => {
                    let l = t.zoom;
                    if (!l || "object" != typeof l || "function" != typeof e.spline ? .setZoom) return;
                    let u = (0, o.getAppZoom)(e.spline),
                        c = l.from && (0, a.checkTt)(r, "from") ? l.from : u,
                        d = l.to && (0, a.checkTt)(r, "to") ? l.to : u,
                        f = {
                            v: c
                        };
                    n.fromTo(f, {
                        v: c
                    }, { ...i,
                        v: d,
                        onUpdate: () => {
                            (0, o.setAppZoom)(e.spline, f.v)
                        }
                    }, s || 0)
                },
                c = (e, t, n, r, i, o, l, u) => {
                    let c = t.color;
                    if (!c || "object" != typeof c || !c.from && !c.to) return;
                    let d = l.spline._scene.entityByUuid[u] ? .color,
                        f = (0, s.colorDataToCss)(d ? ? {
                            r: 255,
                            g: 255,
                            b: 255
                        }),
                        h = c.from && (0, a.checkTt)(r, "from") ? c.from : f,
                        p = c.to && (0, a.checkTt)(r, "to") ? c.to : f,
                        g = window.gsap.utils.interpolate(h, p),
                        m = {
                            t: 0
                        };
                    n.fromTo(m, {
                        t: 0
                    }, { ...i,
                        t: 1,
                        onUpdate: function() {
                            e.color = g(m.t)
                        }
                    }, o || 0)
                }
        },
        9755(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                createPropertyObject: function() {
                    return i
                },
                createTransformTargets: function() {
                    return o
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            let i = (e, t, n) => {
                    let r = {},
                        i = n[t];
                    return ["X", "Y", "Z"].forEach(n => {
                        let o = e[`${t}${n}`],
                            s = n.toLowerCase(),
                            a = i[s];
                        o && "object" == typeof o && (r[s] = {
                            from: o.from ? ? a,
                            to: o.to ? ? a
                        })
                    }), {
                        props: r
                    }
                },
                o = (e, t) => {
                    let n = [];
                    return ["position", "rotation", "scale"].forEach(r => {
                        let {
                            props: o
                        } = i(t, r, e);
                        Object.keys(o).length > 0 && n.push({
                            object: e[r],
                            props: o
                        })
                    }), n
                }
        },
        3436(e, t, n) {
            Object.defineProperty(t, "animateStateTransitions", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(7812),
                i = n(6313),
                o = n(9569),
                s = (e, t, n, s, a, l, u, c, d, f) => {
                    let h = [];
                    e.forEach(e => {
                        if (!e.transition) return void h.push(null);
                        let n = d.duration ? ? r.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
                            i = e.transition({
                                from: t.stateName ? .from && (0, o.checkTt)(c, "from") ? t.stateName.from : void 0,
                                to: t.stateName ? .to && (0, o.checkTt)(c, "to") ? t.stateName.to : null,
                                autoPlay: !1,
                                duration: n,
                                delay: 0
                            });
                        h.push(i);
                        let s = {
                            time: 0
                        };
                        u.fromTo(s, {
                            time: 0
                        }, { ...d,
                            time: n - r.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
                            onUpdate: () => {
                                i.seek(s.time)
                            }
                        }, f || 0)
                    });
                    let p = e.map((e, t) => (0, i.createCleanupFunction)(e, n, s[t], a, l, h[t]));
                    return () => p.forEach(e => e ? .())
                }
        },
        7812(e, t) {
            Object.defineProperty(t, "SPLINE_CONSTANTS", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                OPACITY_RENDER_ORDER: 999,
                TRANSITION_END_OFFSET: .001,
                DEFAULT_TRANSITION_DURATION: .5,
                OPACITY_TRANSPARENCY_THRESHOLD: .01,
                DEFAULT_TRANSMISSION_IOR: 1.3,
                DEFAULT_TRANSMISSION_THICKNESS: 10,
                MIN_ZOOM_VALUE: 1e-4
            }
        },
        3394(e, t, n) {
            Object.defineProperty(t, "setupAnimation", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let r = n(7905),
                i = n(6313),
                o = n(856),
                s = n(20),
                a = n(3436),
                l = n(8295),
                u = n(9755),
                c = n(5253),
                d = n(9569),
                f = n(7812),
                h = (e, t, n, h, p, g) => {
                    n.ease || (n = { ...n,
                        ease: "none"
                    });
                    let {
                        force3D: m,
                        ...v
                    } = n;
                    if (n = { ...v
                        }, !e.spline ? .findObjectById) return;
                    let y = t.spline,
                        b = (t.objectId || "").split(",").filter(Boolean);
                    if (0 === b.length) return void(0, s.warnNoObjectId)();
                    let w = b.flatMap(t => {
                        let n = e.spline.findObjectById ? .(t);
                        return n || ((0, s.warnObjectNotFound)(t), [])
                    });
                    if (0 === w.length) return void(0, s.warnNoObjectsFound)(b);
                    let T = w.map(t => (0, r.storeOriginalState)(t, e, b[0] ? ? "")),
                        E = (0, o.getAppZoom)(e.spline);
                    if (t.animatingState && y ? .stateName && (y.stateName.from || y.stateName.to)) return (0, a.animateStateTransitions)(w, y, e, T, t, E, h, p, n, g);
                    if (!y) return;
                    let S = Object.keys(y);
                    if (0 === S.length || 1 === S.length && "stateName" === S[0]) return;
                    w.forEach(t => {
                        (0, l.animateIntensity)(t, y, h, p, n, g), (0, l.animateZoom)(e, y, h, p, n, g), (0, l.animateColor)(t, y, h, p, n, g, e, b[0] ? ? "");
                        let r = y.opacity && "object" == typeof y.opacity ? y.opacity : void 0;
                        if (void 0 !== r) {
                            let e = {
                                    from: void 0 !== r.from ? r.from / 100 : void 0,
                                    to: void 0 !== r.to ? r.to / 100 : void 0
                                },
                                i = !1 !== n.immediateRender && void 0 !== e.from && (0, d.checkTt)(p, "from") ? e.from : void 0;
                            if ((0, c.fadeObject)(t, e, h, p, n, g), void 0 !== i) {
                                let e = t.material;
                                for (let t of Array.isArray(e) ? e : e ? [e] : []) t.transparent = !0, t.depthWrite = i > f.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
                                (0, d.hasRenderOrder)(t) && (t.renderOrder = f.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER)
                            }
                        }(0, u.createTransformTargets)(t, y).forEach(({
                            object: e,
                            props: t
                        }) => {
                            if (0 === Object.keys(t).length) return;
                            let r = {},
                                i = {};
                            Object.keys(t).forEach(n => {
                                let o = t[n];
                                o && "object" == typeof o && (r[n] = (0, d.checkTt)(p, "from") && o.from ? o.from : e[n] ? ? 0, i[n] = (0, d.checkTt)(p, "to") && o.to ? o.to : e[n] ? ? 0)
                            }), (0 !== Object.keys(r).length || 0 !== Object.keys(i).length) && h.fromTo(e, r, { ...n,
                                ...i
                            }, g || 0)
                        })
                    });
                    let C = w.map((n, r) => (0, i.createCleanupFunction)(n, e, T[r], t, E));
                    return () => C.forEach(e => e ? .())
                }
        },
        3309(e, t, n) {
            Object.defineProperty(t, "buildSplineAction", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(3394),
                i = n(1865),
                o = new Set(["color", "stateName"]),
                s = new Set(["rotationX", "rotationY", "rotationZ"]),
                a = Math.PI / 180;

            function l(e) {
                e.addAction("spline", {
                    createCustomTween: (e, t, n, l, u, c) => {
                        let d = t.tt ? ? 0;
                        if (!u.length || !window.Webflow || !n.objectId) return;
                        let f = window.Webflow.require ? .("spline");
                        if (!f) return;
                        let h = [];
                        for (let t of u) {
                            let u = function(e, t) {
                                    if (!e.spline) return e;
                                    let n = e.spline,
                                        r = {},
                                        l = !1;
                                    for (let [e, u] of Object.entries(n)) {
                                        if (!u || "object" != typeof u) {
                                            r[e] = u;
                                            continue
                                        }
                                        if (o.has(e)) {
                                            let n = void 0 !== u.from ? (0, i.resolveToString)(u.from, t) : void 0,
                                                o = void 0 !== u.to ? (0, i.resolveToString)(u.to, t) : void 0;
                                            (n !== u.from || o !== u.to) && (l = !0), r[e] = {
                                                from: n,
                                                to: o
                                            }
                                        } else {
                                            let n = void 0 !== u.from ? (0, i.resolveToNumber)(u.from, t) : void 0,
                                                o = void 0 !== u.to ? (0, i.resolveToNumber)(u.to, t) : void 0,
                                                c = n !== u.from,
                                                d = o !== u.to;
                                            (c || d) && (l = !0), s.has(e) ? r[e] = {
                                                from: void 0 !== n && c ? n * a : n,
                                                to: void 0 !== o && d ? o * a : o
                                            } : r[e] = {
                                                from: n,
                                                to: o
                                            }
                                        }
                                    }
                                    return l ? { ...e,
                                        spline: r
                                    } : e
                                }(n, t),
                                p = function(e, t, n, i, o, s, a) {
                                    let l, u = t.getInstance(e);
                                    if (u) return (0, r.setupAnimation)(u, n, i, o, s, a);
                                    let c = () => {
                                        let u = t.getInstance(e);
                                        u && (l = (0, r.setupAnimation)(u, n, i, o, s, a)), e.removeEventListener("w-spline-load", c)
                                    };
                                    return e.addEventListener("w-spline-load", c), () => {
                                        e.removeEventListener("w-spline-load", c), l ? .()
                                    }
                                }(t, f, u, l, e, d, c);
                            p && h.push(p)
                        }
                        if (0 !== h.length) return () => {
                            for (let e of h) e ? .()
                        }
                    }
                })
            }
        },
        6313(e, t, n) {
            Object.defineProperty(t, "createCleanupFunction", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(856),
                i = n(9569),
                o = (e, t, n, o, s, a) => () => {
                    if (e && n) {
                        if (a && (e.state = void 0), Object.assign(e.position, n.position), Object.assign(e.rotation, {
                                x: n.rotation.x,
                                y: n.rotation.y,
                                z: n.rotation.z
                            }), Object.assign(e.scale, n.scale), n.color && (e.color = n.color), o.spline ? .intensity && "object" == typeof o.spline.intensity && void 0 !== n.intensity && (0, i.hasIntensity)(e) && (e.intensity = n.intensity), o.spline ? .zoom && "object" == typeof o.spline.zoom) {
                            let e = t.spline;
                            "function" == typeof e ? .setZoom && (0, r.setAppZoom)(e, s ? ? 1)
                        }
                        if (n.materials) {
                            let t = e.material,
                                r = Array.isArray(t) ? t : t ? [t] : [];
                            (0, i.hasRenderOrder)(e) && (e.renderOrder = n.renderOrder ? ? 0);
                            let o = Math.min(r.length, n.materials.length);
                            for (let e = 0; e < o; e++) {
                                let t = r[e],
                                    i = n.materials[e];
                                if (!t || !i) continue;
                                t.transparent = i.transparent, t.depthWrite = i.depthWrite, void 0 !== i.alpha && (t.alpha = i.alpha);
                                let o = t.layers ? ? [];
                                for (let e = 0; e < o.length; e++) {
                                    let t = o[e],
                                        n = i.layers[e];
                                    t && n && (t.visible = n.visible, void 0 !== n.alpha && (t.alpha = n.alpha), void 0 !== n.alphaOverride && (t.alphaOverride = n.alphaOverride), void 0 !== n.ior && (t.ior = n.ior), void 0 !== n.thickness && (t.thickness = n.thickness))
                                }
                            }
                        }(0, i.hasMatrixUpdate)(e) && (e.updateMatrix(), e.updateMatrixWorld(!0)), (0, i.hasBBoxUpdate)(e) && (e.singleBBoxNeedsUpdate = !0, e.recursiveBBoxNeedsUpdate = !0), t.spline.requestRender()
                    }
                }
        },
        7905(e, t, n) {
            Object.defineProperty(t, "storeOriginalState", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(9569),
                i = n(5439),
                o = (e, t, n) => {
                    let o = e.material,
                        s = Array.isArray(o) ? o : o ? [o] : [],
                        a = t.spline._scene.entityByUuid[n] ? .color,
                        l = a ? (0, i.colorDataToCss)(a) : void 0,
                        u = e.rotation;
                    return {
                        position: { ...e.position
                        },
                        rotation: {
                            x: u._x ? ? 0,
                            y: u._y ? ? 0,
                            z: u._z ? ? 0
                        },
                        scale: { ...e.scale
                        },
                        ...l ? {
                            color: l
                        } : {},
                        ...{
                            intensity: e.intensity
                        },
                        renderOrder: (0, r.hasRenderOrder)(e) ? e.renderOrder : void 0,
                        materials: s ? .map(e => ({
                            transparent: e.transparent,
                            depthWrite: e.depthWrite,
                            alpha: e.alpha,
                            layers: (e.layers ? ? []).map(e => ({
                                visible: e.visible,
                                alpha: e.alpha,
                                alphaOverride: e.alphaOverride,
                                ior: e.ior,
                                thickness: e.thickness
                            }))
                        }))
                    }
                }
        },
        856(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                getAppZoom: function() {
                    return s
                },
                setAppZoom: function() {
                    return a
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(7812),
                s = e => {
                    let t = e._camera;
                    return "OrthographicCamera" === t._cameraType ? t.orthoCamera.zoom : t.perspCamera.zoom
                },
                a = (e, t) => {
                    let n = t > 0 ? t : o.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
                    e.setZoom ? .(n)
                }
        },
        5439(e, t) {
            Object.defineProperty(t, "colorDataToCss", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = ({
                r: e,
                g: t,
                b: n,
                a: r
            }) => {
                let i = e => Math.round(255 * Math.min(1, Math.max(0, e))),
                    o = i(e),
                    s = i(t),
                    a = i(n);
                if (void 0 === r || r >= 1) return `rgba(${o}, ${s}, ${a}, 1)`;
                let l = Math.min(1, Math.max(0, r));
                return `rgba(${o}, ${s}, ${a}, ${l})`
            }
        },
        9569(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                checkTt: function() {
                    return c
                },
                hasBBoxUpdate: function() {
                    return l
                },
                hasIntensity: function() {
                    return s
                },
                hasMatrixUpdate: function() {
                    return u
                },
                hasRenderOrder: function() {
                    return a
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(3428),
                s = e => "intensity" in e,
                a = e => "renderOrder" in e,
                l = e => "singleBBoxNeedsUpdate" in e && "recursiveBBoxNeedsUpdate" in e,
                u = e => "updateMatrix" in e && "updateMatrixWorld" in e,
                c = (e, t) => "from" === t ? e === o.TweenType.From || e === o.TweenType.FromTo : e === o.TweenType.To || e === o.TweenType.FromTo
        },
        20(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                warnNoObjectId: function() {
                    return i
                },
                warnNoObjectsFound: function() {
                    return s
                },
                warnObjectNotFound: function() {
                    return o
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            let i = () => {},
                o = e => {},
                s = e => {}
        },
        8851(e, t, n) {
            Object.defineProperty(t, "buildVariableAction", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(3428);

            function i(e) {
                e.addAction("variable", {
                    createCustomTween: (e, t, n, i, s, u) => {
                        let c = n.variable;
                        if (!c) return;
                        let d = Object.keys(c),
                            f = d.length;
                        if (0 === f) return;
                        let h = (t.targets ? .length ? ? 0) > 0;
                        if (h && 0 === s.length) return;
                        let p = h ? Array.from(new Set(s)) : function(e) {
                                let t = [document.documentElement];
                                if (0 === e.length) return t;
                                let n = function(e) {
                                    let t = new Set([document.documentElement]),
                                        n = [],
                                        r = new Map;
                                    try {
                                        let i = document.styleSheets;
                                        for (let o = 0; o < i.length; o++) ! function e(t, n, r, i, o) {
                                            for (let s = 0; s < t.length; s++) {
                                                let a = t[s];
                                                if (a instanceof CSSMediaRule) {
                                                    let t = a.conditionText,
                                                        s = o.get(t);
                                                    void 0 === s && (s = matchMedia(t).matches, o.set(t, s)), s && e(a.cssRules, n, r, i, o);
                                                    continue
                                                }
                                                if (!(a instanceof CSSStyleRule)) continue;
                                                let l = a.style;
                                                for (let e = 0; e < n.length; e++)
                                                    if (l.getPropertyValue(n[e])) {
                                                        try {
                                                            let e = document.querySelectorAll(a.selectorText);
                                                            for (let t = 0; t < e.length; t++) {
                                                                let n = e[t];
                                                                i.has(n) || (i.add(n), r.push(n))
                                                            }
                                                        } catch {}
                                                        break
                                                    }
                                            }
                                        }(i[o].cssRules, e, n, t, r);
                                        return n
                                    } catch {
                                        return null
                                    }
                                }(e) ? ? function(e) {
                                    let t, n = document.documentElement,
                                        r = document.body,
                                        i = [],
                                        o = e.length,
                                        s = [],
                                        u = [];
                                    a(n, e, o, s, u), l(r, e, o, i, s, u);
                                    let c = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT);
                                    for (; t = c.nextNode();) l(t, e, o, i, s, u);
                                    for (let t = 0; t < s.length; t++) {
                                        let n = s[t].style,
                                            r = u[t];
                                        for (let t = 0; t < o; t++) {
                                            let i = r[t];
                                            i ? n.setProperty(e[t], i) : n.removeProperty(e[t])
                                        }
                                    }
                                    return i
                                }(e);
                                for (let e = 0; e < n.length; e++) t.push(n[e]);
                                return t
                            }(d),
                            g = p.length,
                            m = Array(g),
                            v = Array(g);
                        for (let e = 0; e < g; e++) {
                            let t = p[e].style;
                            m[e] = t;
                            let n = Array(f);
                            for (let e = 0; e < f; e++) {
                                let r = d[e];
                                n[e] = t.getPropertyValue(r), t.removeProperty(r)
                            }
                            v[e] = n
                        }
                        let y = t.tt ? ? r.TweenType.To,
                            b = u || 0,
                            {
                                force3D: w,
                                ...T
                            } = i,
                            E = d.some(e => c[e].startsWith("var(")),
                            S = e => {
                                let t = {};
                                for (let n = 0; n < f; n++) {
                                    let r = d[n],
                                        i = c[r];
                                    t[r] = e && i.startsWith("var(") && e.getPropertyValue(i.slice(4, -1)).trim() || i
                                }
                                return t
                            };
                        if (h)
                            for (let t = 0; t < g; t++) {
                                let n = p[t],
                                    r = S(E ? getComputedStyle(n) : null);
                                o(e, y, n, { ...r,
                                    ...T
                                }, b)
                            } else {
                                let t = { ...S(E ? getComputedStyle(document.documentElement) : null),
                                    ...T
                                };
                                for (let n = 0; n < g; n++) o(e, y, p[n], t, b)
                            }
                        return () => {
                            for (let e = 0; e < g; e++) {
                                let t = m[e],
                                    n = v[e];
                                for (let e = 0; e < f; e++) {
                                    let r = n[e];
                                    r ? t.setProperty(d[e], r) : t.removeProperty(d[e])
                                }
                            }
                        }
                    }
                })
            }

            function o(e, t, n, i, o) {
                t === r.TweenType.From ? e.from(n, i, o) : t === r.TweenType.Set ? e.set(n, i, o) : e.to(n, i, o)
            }
            let s = "__ix3__";

            function a(e, t, n, r, i) {
                let o = e.style,
                    a = Array(n);
                for (let e = 0; e < n; e++) {
                    let n = t[e];
                    a[e] = o.getPropertyValue(n), o.setProperty(n, s)
                }
                r.push(e), i.push(a)
            }

            function l(e, t, n, r, i, o) {
                let l = getComputedStyle(e);
                for (let u = 0; u < n; u++)
                    if (l.getPropertyValue(t[u]) !== s) {
                        r.push(e), a(e, t, n, i, o);
                        return
                    }
            }
        },
        3715(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                elementTargetSelector: function() {
                    return d
                },
                safeClosest: function() {
                    return u
                },
                safeGetElementById: function() {
                    return s
                },
                safeMatches: function() {
                    return c
                },
                safeQuerySelector: function() {
                    return l
                },
                safeQuerySelectorAll: function() {
                    return a
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(7119),
                s = e => {
                    try {
                        let t = document.getElementById(e);
                        return t && !(0, o.isTransientIX3Clone)(t) ? t : null
                    } catch {
                        return null
                    }
                },
                a = (e, t) => {
                    try {
                        let n = t.querySelectorAll(e);
                        if (0 === n.length) return [];
                        let r = [];
                        for (let e of n)(0, o.isTransientIX3Clone)(e) || r.push(e);
                        return r
                    } catch {
                        return null
                    }
                },
                l = (e, t) => {
                    try {
                        let n = t.querySelector(e);
                        if (!n) return null;
                        if (!(0, o.isTransientIX3Clone)(n)) return n;
                        for (let n of t.querySelectorAll(e))
                            if (!(0, o.isTransientIX3Clone)(n)) return n;
                        return null
                    } catch {
                        return null
                    }
                },
                u = (e, t) => {
                    try {
                        return e.closest(t)
                    } catch {
                        return null
                    }
                },
                c = (e, t) => {
                    try {
                        return e.matches(t)
                    } catch {
                        return null
                    }
                },
                d = e => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(e)}`)}"]`
        },
        8099(e, t, n) {
            Object.defineProperty(t, "plugin", {
                enumerable: !0,
                get: function() {
                    return h
                }
            });
            let r = n(4669),
                i = n(983),
                o = n(9800),
                s = n(4480),
                a = n(3309),
                l = n(8851),
                u = n(9050),
                c = n(3428),
                d = n(2319),
                f = new c.RuntimeBuilder(d.CORE_PLUGIN_INFO);
            (0, r.build)(f), (0, i.build)(f), (0, o.buildLottieAction)(f), (0, s.buildRiveAction)(f), (0, s.buildAnimateRiveAction)(f), (0, a.buildSplineAction)(f), (0, l.buildVariableAction)(f), (0, u.build)(f);
            let h = f.buildRuntime()
        },
        4147(e, t, n) {
            Object.defineProperty(t, "applyScope", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(2319),
                i = n(3715),
                o = n(7119),
                s = e => e.filter(e => !(0, o.isTransientIX3Clone)(e)),
                a = (e, t) => {
                    let n = s(e);
                    if (!t) return n;
                    if (Array.isArray(t)) {
                        let [e, o] = t, a = [];
                        switch (e) {
                            case r.TargetScope.FIRST_ANCESTOR:
                                for (let e of n) {
                                    let t = o ? (0, i.safeClosest)(e, o) : null;
                                    t && a.push(t)
                                }
                                return s(a);
                            case r.TargetScope.FIRST_DESCENDANT:
                                for (let e of n) {
                                    let t = o ? (0, i.safeQuerySelector)(o, e) : e.firstElementChild;
                                    t && a.push(t)
                                }
                                return s(a);
                            case r.TargetScope.DESCENDANTS:
                                for (let e of n) a.push(...(0, i.safeQuerySelectorAll)(o, e) || []);
                                return s(a);
                            case r.TargetScope.ANCESTORS:
                                for (let e of n) {
                                    let t = e.parentElement;
                                    for (; t;)(!o || (0, i.safeMatches)(t, o)) && a.push(t), t = t.parentElement
                                }
                                return s(a)
                        }
                    }
                    switch (t) {
                        case r.TargetScope.CHILDREN:
                            return s(n.flatMap(e => [...e.children]));
                        case r.TargetScope.PARENT:
                            return s(n.map(e => e.parentElement).filter(Boolean));
                        case r.TargetScope.SIBLINGS:
                            return s(n.flatMap(e => e.parentElement ? [...e.parentElement.children].filter(t => t !== e) : []));
                        case r.TargetScope.NEXT:
                            return s(n.flatMap(e => e.nextElementSibling || []));
                        case r.TargetScope.PREVIOUS:
                            return s(n.flatMap(e => e.previousElementSibling || []));
                        default:
                            return n
                    }
                }
        },
        9050(e, t, n) {
            Object.defineProperty(t, "build", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(2658),
                i = n(3715),
                o = n(4147);

            function s(e) {
                let t = [];
                e.addTargetResolver("id", {
                    resolve: ([, e]) => {
                        let [n, r] = Array.isArray(e) ? e : [e], s = n ? (0, i.safeGetElementById)(n) : null;
                        return s ? (0, o.applyScope)([s], r) : t
                    }
                }).addTargetResolver("trigger-only", {
                    resolve: ([, e], {
                        triggerElement: n
                    }) => n ? (0, o.applyScope)([n], Array.isArray(e) ? e[1] : void 0) : t,
                    isDynamic: !0
                }).addTargetResolver("trigger-only-parent", {
                    resolve: ([, e], {
                        triggerElement: n
                    }) => {
                        if (!n) return t;
                        let r = n.parentElement;
                        return r instanceof HTMLElement ? (0, o.applyScope)([r], Array.isArray(e) ? e[1] : void 0) : t
                    },
                    isDynamic: !0
                }).addTargetResolver("inst", {
                    resolve: ([, e], {
                        triggerElement: n
                    }) => {
                        if (!Array.isArray(e)) return t;
                        let [s, a] = e, l = Array.isArray(s), u = l ? (0, r.pair)(s[0], s[1]) : (0, r.pair)(s, a), c = (0, i.safeQuerySelectorAll)((0, i.elementTargetSelector)(u), document);
                        if (!c ? .length) return t;
                        let d = [...c];
                        if (!n) return (0, o.applyScope)(d, l ? a : void 0);
                        let f = n.dataset.wfTarget;
                        if (!f) return d;
                        try {
                            let e = JSON.parse(f),
                                n = (0, r.getFirst)(u),
                                i = e.find(e => (0, r.getFirst)((0, r.getFirst)(e)) === n);
                            if (!i) return t;
                            return (0, o.applyScope)(d.filter(e => (e.dataset.wfTarget || "").includes(`${JSON.stringify((0,r.getSecond)(i))}]`)), l ? a : void 0)
                        } catch {
                            return t
                        }
                    },
                    isDynamic: !0
                }).addTargetResolver("class", {
                    resolve: ([, e]) => {
                        let [n, r] = Array.isArray(e) ? e : [e], s = n ? (0, i.safeQuerySelectorAll)(`.${n}`, document) : null;
                        return s ? (0, o.applyScope)([...s], r) : t
                    }
                }).addTargetResolver("selector", {
                    resolve: ([, e]) => {
                        let [n, r] = Array.isArray(e) ? e : [e], s = n ? (0, i.safeQuerySelectorAll)(n, document) : null;
                        return s ? (0, o.applyScope)([...s], r) : t
                    }
                }).addTargetResolver("body", {
                    resolve: () => [document.body]
                }).addTargetResolver("attribute", {
                    resolve: ([, e]) => {
                        let [n, r] = Array.isArray(e) ? e : [e], s = n ? (0, i.safeQuerySelectorAll)(n, document) : null;
                        return s ? (0, o.applyScope)([...s], r) : t
                    }
                }).addTargetResolver("any-element", {
                    resolve: () => t
                }).addTargetResolver("viewport", {
                    resolve: () => [document.documentElement]
                })
            }
        },
        7119(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                TRANSIENT_IX3_CLONE_ATTR: function() {
                    return o.TRANSIENT_IX3_CLONE_ATTR
                },
                isTransientIX3Clone: function() {
                    return o.isTransientIX3Clone
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(2319)
        },
        6748(e, t, n) {
            Object.defineProperty(t, "IntervalController", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(2319);
            class i {
                config;
                accum;
                lastX;
                lastY;
                initialized;
                cycleIndex;
                destroyed;
                constructor(e) {
                    this.config = e, this.accum = 0, this.lastX = 0, this.lastY = 0, this.initialized = !1, this.cycleIndex = 0, this.destroyed = !1, document.addEventListener("visibilitychange", () => {
                        "visible" === document.visibilityState && this.reset()
                    }, {
                        signal: this.config.signal
                    })
                }
                get isActive() {
                    return this.config.distance > 0
                }
                update(e) {
                    if (this.destroyed || !this.isActive) return;
                    let {
                        x: t,
                        y: n,
                        velocityFactor: i,
                        dirX: o,
                        dirY: s
                    } = e;
                    if (!this.initialized) {
                        this.lastX = t, this.lastY = n, this.initialized = !0;
                        return
                    }
                    let a = t - this.lastX,
                        l = n - this.lastY;
                    this.lastX = t, this.lastY = n;
                    let {
                        axes: u,
                        distance: c
                    } = this.config;
                    u.x && u.y ? this.accum += Math.hypot(a, l) : u.x ? this.accum += Math.abs(a) : u.y && (this.accum += Math.abs(l));
                    let d = 0;
                    for (; this.accum >= c && d < 16;) {
                        this.accum -= c;
                        let e = {
                            cursorPos: {
                                x: t,
                                y: n
                            },
                            velocityFactor: i,
                            dirX: o,
                            dirY: s
                        };
                        this.config.channelManager.fireInterval ? .(r.TIMELINE_ROLE_NAMES.INTERVAL, {
                            targetIndex: this.cycleIndex++,
                            element: this.config.element,
                            pluginPayload: e
                        }), d++
                    }
                    this.accum >= c && (this.accum %= c)
                }
                reset() {
                    this.accum = 0, this.initialized = !1, this.cycleIndex = 0
                }
                destroy() {
                    this.destroyed = !0, this.reset()
                }
            }
        },
        1734(e, t, n) {
            Object.defineProperty(t, "TouchScrollGuard", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(5966);
            class i {
                isScrolling = !1;
                toleranceDeg;
                refX = 0;
                refY = 0;
                lastY = 0;
                locked = null;
                effectFromBoundary = !1;
                scroller = null;
                maxScroll = 0;
                constructor(e, t, n) {
                    this.toleranceDeg = n ? .tolerance ? ? 18;
                    let i = (0, r.initScrollCache)();
                    t.addEventListener("abort", i);
                    let o = t => {
                            let n = t.touches[0];
                            n && (this.refX = n.clientX, this.refY = n.clientY, this.lastY = n.clientY, this.locked = null, this.effectFromBoundary = !1, this.isScrolling = !1, this.scroller = function(e) {
                                let t = e;
                                for (; t && t !== document.body && t !== document.documentElement;) {
                                    if (t instanceof HTMLElement) {
                                        let e = getComputedStyle(t).overflowY;
                                        if (("auto" === e || "scroll" === e || "overlay" === e) && t.scrollHeight > t.clientHeight) return t
                                    }
                                    t = t.parentElement
                                }
                                return null
                            }(t.target ? ? e), this.maxScroll = this.scroller ? this.scroller.scrollHeight - this.scroller.clientHeight : document.documentElement.scrollHeight - window.innerHeight)
                        },
                        s = e => {
                            let t = e.touches[0];
                            if (!t) return;
                            let n = t.clientY,
                                i = t.clientX - this.refX,
                                o = n - this.refY,
                                s = n > this.lastY,
                                a = n < this.lastY,
                                l = this.scroller ? this.scroller.scrollTop : (0, r.getScrollY)(),
                                u = this.maxScroll,
                                c = l <= 1 && s,
                                d = u > 0 && l >= u - 1 && a;
                            null === this.locked && this.decide(i, o, c || d), "scroll" === this.locked && (c || d) && (this.refX = t.clientX, this.refY = n, this.locked = "effect", this.effectFromBoundary = !0), "effect" === this.locked && this.effectFromBoundary && !(c || d) && (this.refX = t.clientX, this.refY = n, this.locked = null, this.effectFromBoundary = !1), this.lastY = n, this.isScrolling = "scroll" === this.locked || null === this.locked || "effect" === this.locked && !e.cancelable && !(c || d), "effect" === this.locked && e.cancelable && e.preventDefault()
                        },
                        a = () => {
                            this.locked = null, this.isScrolling = !1
                        };
                    e.addEventListener("touchstart", o, {
                        passive: !0,
                        signal: t
                    }), e.addEventListener("touchmove", s, {
                        passive: !1,
                        signal: t
                    }), e.addEventListener("touchend", a, {
                        passive: !0,
                        signal: t
                    }), e.addEventListener("touchcancel", a, {
                        passive: !0,
                        signal: t
                    })
                }
                decide(e, t, n) {
                    10 > Math.abs(e) && 10 > Math.abs(t) || (180 / Math.PI * Math.atan2(Math.abs(e), Math.abs(t)) > this.toleranceDeg ? (this.locked = "effect", this.effectFromBoundary = !1) : n ? (this.locked = "effect", this.effectFromBoundary = !0) : this.locked = "scroll")
                }
            }
        },
        4378(e, t) {
            Object.defineProperty(t, "VelocityController", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = {
                adaptiveMax: 2800,
                adaptAlpha: .05,
                adaptDecay: .99,
                hardMin: 600,
                hardMax: 4e3
            };
            class r {
                config;
                velState;
                lastDirX;
                lastDirY;
                lastNormVelocity;
                get dirX() {
                    return this.lastDirX
                }
                get dirY() {
                    return this.lastDirY
                }
                constructor(e) {
                    this.config = e, this.velState = { ...n
                    }, this.lastDirX = 0, this.lastDirY = 0, this.lastNormVelocity = 0
                }
                update(e, t) {
                    var n, r;
                    let i, o, s, a, l, u, {
                        n: c,
                        dirX: d,
                        dirY: f
                    } = (n = this.velState, r = this.config.axes, i = Math.hypot(e, t), o = Math.max(n.hardMin, Math.min(n.hardMax, i)), n.adaptiveMax = Math.max(o, n.adaptiveMax * n.adaptDecay), n.adaptiveMax += (o - n.adaptiveMax) * n.adaptAlpha, n.adaptiveMax = Math.max(n.hardMin, Math.min(n.hardMax, n.adaptiveMax)), a = (s = Math.min(1, i / Math.max(1, n.adaptiveMax))) * s, l = 0, u = 0, r.x && r.y ? i > 0 && (l = e / i, u = t / i) : r.x ? 0 !== e && (l = Math.sign(e)) : r.y && 0 !== t && (u = Math.sign(t)), {
                        n: a,
                        dirX: l,
                        dirY: u
                    });
                    this.lastNormVelocity = c, this.lastDirX = d, this.lastDirY = f
                }
                reset() {
                    this.lastDirX = 0, this.lastDirY = 0, this.lastNormVelocity = 0
                }
                destroy() {
                    this.reset()
                }
            }
        },
        4669(e, t, n) {
            Object.defineProperty(t, "build", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(2319),
                i = n(5966),
                o = n(8036);

            function s(e) {
                var t, n;
                let s, l;
                t = e, s = new WeakMap, t.addTrigger("click", (e, t, n, r) => {
                    let [, i] = e, o = n.addEventListener(t, "click", n => {
                        let o = i.pluginConfig ? .click,
                            a = s.get(t) || new WeakMap;
                        s.set(t, a);
                        let l = (a.get(e) || 0) + 1;
                        switch (a.set(e, l), o) {
                            case "each":
                            default:
                                r(n);
                                break;
                            case "first":
                                1 === l && r(n);
                                break;
                            case "second":
                                2 === l && r(n);
                                break;
                            case "odd":
                                l % 2 == 1 && r(n);
                                break;
                            case "even":
                                l % 2 == 0 && r(n);
                                break;
                            case "custom":
                                {
                                    let e = i.pluginConfig ? .custom;e && l === e && r(n)
                                }
                        }
                    }, {
                        delegate: !0
                    });
                    return () => {
                        o(), s.delete(t)
                    }
                }), n = e, l = new WeakMap, n.addTrigger("hover", (e, t, n, i) => {
                    let [, o] = e, s = [], a = o.pluginConfig ? .multiTimeline, u = o.pluginConfig ? .eventMode, c = "leave" !== u, d = "enter" !== u;
                    if (!0 === a) return c && s.push(n.addEventListener(t, "mouseenter", () => i({
                        type: "timeline-role",
                        role: r.TIMELINE_ROLE_NAMES.MOUSE_ENTER
                    }))), d && s.push(n.addEventListener(t, "mouseleave", () => i({
                        type: "timeline-role",
                        role: r.TIMELINE_ROLE_NAMES.MOUSE_LEAVE
                    }))), () => {
                        s.forEach(e => e()), s.length = 0
                    };
                    if (!1 === a) {
                        if (void 0 === o.control || "togglePlayReverse" === o.control || "togglePlayReverseFlipEase" === o.control) {
                            let e = "togglePlayReverseFlipEase" === o.control ? "reverseFlipEase" : "reverse";
                            if (c && s.push(n.addEventListener(t, "mouseenter", () => i({
                                    type: "playback-control",
                                    control: "play"
                                }))), d) {
                                let r = c ? e : "play";
                                s.push(n.addEventListener(t, "mouseleave", () => i({
                                    type: "playback-control",
                                    control: r
                                })))
                            }
                        } else c && s.push(n.addEventListener(t, "mouseenter", e => i(e))), d && s.push(n.addEventListener(t, "mouseleave", e => i(e)));
                        return () => {
                            s.forEach(e => e()), s.length = 0
                        }
                    }
                    let f = (e, n) => {
                        if ((o.pluginConfig ? .type ? ? "mouseenter") !== n) return;
                        let r = o.pluginConfig ? .hover || "each",
                            s = l.get(t) || new Map;
                        l.set(t, s);
                        let a = (s.get(n) || 0) + 1;
                        switch (s.set(n, a), r) {
                            case "each":
                            default:
                                i(e);
                                break;
                            case "first":
                                1 === a && i(e);
                                break;
                            case "second":
                                2 === a && i(e);
                                break;
                            case "odd":
                                a % 2 == 1 && i(e);
                                break;
                            case "even":
                                a % 2 == 0 && i(e);
                                break;
                            case "custom":
                                {
                                    let t = o.pluginConfig ? .custom;t && a === t && i(e)
                                }
                        }
                    };
                    return s.push(n.addEventListener(t, "mouseenter", e => {
                        f(e, "mouseenter")
                    })), s.push(n.addEventListener(t, "mouseover", e => {
                        f(e, "mouseover")
                    })), s.push(n.addEventListener(t, "mouseleave", e => {
                        f(e, "mouseleave")
                    })), () => {
                        s.forEach(e => e()), s.length = 0, l.delete(t)
                    }
                }), (0, o.buildMouseMove)(e), a(e, "navbar"), a(e, "dropdown"), e.addTrigger("load", (e, t, n, r) => {
                    let o = e[1],
                        s = !1,
                        a = () => {
                            s || (s = !0, r({
                                target: t
                            }))
                        };
                    switch (o.pluginConfig ? .triggerPoint) {
                        case "immediate":
                            return a(), i.noop;
                        case "fullyLoaded":
                            if ("complete" === document.readyState) return a(), i.noop;
                            return n.addEventListener(window, "load", a);
                        default:
                            if ("complete" === document.readyState || "interactive" === document.readyState) return a(), i.noop;
                            return n.addEventListener(document, "DOMContentLoaded", a)
                    }
                }), e.addTrigger("focus", (e, t, n, r) => {
                    let i = e[1];
                    return n.addEventListener(t, i.pluginConfig ? .useFocusWithin ? "focusin" : "focus", r, {
                        delegate: !i.pluginConfig ? .useFocusWithin
                    })
                }), e.addTrigger("blur", (e, t, n, r) => {
                    let i = e[1];
                    return n.addEventListener(t, i.pluginConfig ? .useFocusWithin ? "focusout" : "blur", r, {
                        delegate: !i.pluginConfig ? .useFocusWithin
                    })
                }), e.addTrigger("scroll", (e, t, n, r) => (r({
                    target: t
                }), i.noop)), e.addTrigger("custom", (e, t, n, r) => {
                    let o = e[1],
                        s = o.pluginConfig ? .eventName;
                    return s ? n.addEventListener(t, s, r, {
                        delegate: !1,
                        kind: "custom"
                    }) : i.noop
                }), e.addTrigger("change", (e, t, n, r) => n.addEventListener(t, "change", r))
            }

            function a(e, t) {
                e.addTrigger(t, (e, n, r, i) => {
                    let o = e[1].pluginConfig ? .event;
                    return r.addEventListener(n, "IX3_COMPONENT_STATE_CHANGE", e => {
                        let n = e.detail;
                        if (!n || "object" != typeof n) return;
                        let {
                            component: r,
                            state: s
                        } = n;
                        r !== t || !s || o && s !== o || i({
                            type: "timeline-role",
                            role: s
                        })
                    })
                })
            }
        },
        5515(e, t, n) {
            Object.defineProperty(t, "fireMouseMoveInterval", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });
            let r = n(2319),
                i = n(7119),
                o = new Set(["x", "y"]),
                s = new Set(["scale", "scaleX", "scaleY"]),
                a = new WeakMap,
                l = new WeakMap;

            function u(e) {
                if (e)
                    for (let t in e) {
                        if (!o.has(t)) continue;
                        let n = e[t];
                        "string" == typeof n && (n.startsWith("+=") || n.startsWith("-=")) || ("number" == typeof n || "string" == typeof n) && (e[t] = `+=${n}`)
                    }
            }
            let c = /^random\((.*)\)([a-z%]*)$/i,
                d = /^-?\d*\.?\d+$/;

            function f(e, t, n, r) {
                if (e)
                    for (let i in e) {
                        let a, l, u, f = e[i];
                        if ("number" != typeof f && "string" != typeof f) continue;
                        let h = !1,
                            p = "string" == typeof f ? f : "";
                        if ("string" == typeof f && (f.startsWith("+=") || f.startsWith("-=")) && (h = !0, p = (f.startsWith("-=") ? "-" : "") + f.slice(2)), o.has(i)) {
                            let e = "y" === i ? r : n;
                            a = n => n * t * e, l = !0
                        } else if ("rotation" === i) {
                            let e = Math.abs(n) >= Math.abs(r) ? n : -r;
                            a = n => n * t * e, l = h
                        } else a = s.has(i) ? h ? e => e * t : e => 1 + (e - 1) * t : e => e * t, l = h;
                        if ("string" == typeof f && p.startsWith("random(")) {
                            let t = function(e, t) {
                                let n = c.exec(e);
                                if (!n) return null;
                                let r = n[1] ? ? "",
                                    i = n[2] ? ? "",
                                    o = r.startsWith("[") && r.endsWith("]"),
                                    s = (o ? r.slice(1, -1) : r).split(",").map(e => e.trim());
                                if (!s.every(e => d.test(e))) return null;
                                let a = s.map((e, n) => {
                                    let r = Number(e);
                                    return !o && n >= 2 ? Math.abs(t(r) - t(0)) : t(r)
                                }).join(", ");
                                return `random(${o?`[${a}]`:a})${i}`
                            }(p, a);
                            if (null == t) continue;
                            e[i] = l ? `+=${t}` : t;
                            continue
                        }
                        let g = "";
                        if ("number" == typeof f) u = f;
                        else {
                            if (isNaN(u = parseFloat(p))) continue;
                            g = p.replace(/^-?[\d.]+/, "")
                        }
                        let m = a(u);
                        e[i] = l ? `+=${m}${g}` : m
                    }
            }

            function h(e) {
                if (e)
                    for (let t in e) {
                        let n = e[t];
                        "function" == typeof n && "legacyExpression" in n && (e[t] = n.legacyExpression)
                    }
            }

            function p(e) {
                for (let t of e) t();
                e.clear()
            }

            function g(e, t, n) {
                e.activeIntervalEls.get(t) ? .delete(n), e.intervalClones.has(n) && (n.isConnected && n.remove(), e.intervalClones.delete(n))
            }
            let m = ({
                coordinator: e,
                timelineId: t,
                element: n,
                options: s,
                animation: c
            }) => {
                var d, m;
                let v, y;
                if (!c.hasGsap()) return;
                let b = s.targetIndex;
                if (null == b) return;
                let w = function(e, t) {
                    let n = e.getOneShotTimelineContext(t),
                        r = n ? .timelineDef;
                    if (!n || !r ? .actions ? .length) return null;
                    let i = r.triggerMetadata,
                        o = i ? .pluginConfig ? .type === "mouseMove" ? i.pluginConfig : void 0;
                    return i ? .role === "interval" || o ? {
                        oneShot: n,
                        mouseMoveMeta: o ? ? {
                            type: "mouseMove"
                        },
                        axes: i ? .axes
                    } : null
                }(e, t);
                if (!w) return;
                let {
                    oneShot: T,
                    mouseMoveMeta: E,
                    axes: S
                } = w, C = ((v = a.get(e)) || (v = {
                    activeIntervalEls: new Map,
                    intervalClones: new Set,
                    baselineValues: new Map
                }, a.set(e, v)), v), I = T.getFirstActionTargets(n).filter(e => !(0, i.isTransientIX3Clone)(e));
                if (!I.length) return;
                let M = [I[b % I.length]],
                    O = M,
                    A = M[0],
                    R = C.activeIntervalEls.get(t);
                if (R || (R = new Set, C.activeIntervalEls.set(t, R)), R.has(A)) {
                    let e, n;
                    O = [(d = R, (e = A.cloneNode(!0)).removeAttribute("style"), e.removeAttribute("id"), e.removeAttribute("data-w-id"), e.setAttribute(i.TRANSIENT_IX3_CLONE_ATTR, "true"), e.style.position = "absolute", e.style.margin = "0", e.style.pointerEvents = "none", A.insertAdjacentElement("beforebegin", e), (n = C.baselineValues.get(t) ? .get(A)) && c.set(e, { ...n
                    }), C.intervalClones.add(e), d.add(e), e)]
                } else ! function(e, t, n, r, i) {
                    let {
                        clearProps: s,
                        baselineProps: a
                    } = function(e, t) {
                        let n = [],
                            r = new Set;
                        for (let i of e.timelineDef.actions)
                            for (let s in i.properties) {
                                let a = e.getActionTweenConfig(i, s, [t]);
                                if (a) {
                                    for (let e of [a.to, a.from])
                                        if (e)
                                            for (let t of Object.keys(e)) o.has(t) ? n.push(t) : r.add(t)
                                }
                            }
                        return {
                            clearProps: n,
                            baselineProps: r
                        }
                    }(e, n);
                    if (a.size > 0) {
                        let e = {};
                        for (let r of a) e[r] = t.getProperty(n, r);
                        let o = r.baselineValues.get(i);
                        o || (o = new WeakMap, r.baselineValues.set(i, o)), o.set(n, e)
                    }
                    0 !== s.length && t.set(n, {
                        clearProps: s.join(",")
                    })
                }(T, c, A, C, t), R.add(A);
                let x = O[0],
                    _ = S ? .x === !1 && S ? .y === !1,
                    k = _ || (S ? .x ? ? E ? .setMouseX ? ? !0),
                    N = _ || (S ? .y ? ? E ? .setMouseY ? ? !0),
                    P = (0, r.narrowMouseMoveIntervalPayload)(s.pluginPayload),
                    F = P.cursorPos,
                    L = P.velocityFactor,
                    D = P.dirX ? ? 0,
                    j = P.dirY ? ? 0,
                    $ = new Set,
                    B = T.buildActionTimeline({
                        targets: O,
                        cleanupBucket: $,
                        varsTransform: (e, t, n) => {
                            h(n.to), h(n.from), t.pluginConfig ? .type === "mouseMove" && t.pluginConfig.velocityInfluence ? null != L && (f(n.to, L, D, j), n.from && f(n.from, L, D, j)) : (u(n.to), n.from && u(n.from))
                        },
                        beforeTweens: e => {
                            ! function(e, t, n, r, i, o, s, a) {
                                let [l] = n;
                                if (l && (e.set(l, {
                                        zIndex: r + 1 + i
                                    }, 0), o && (s || a)))
                                    for (let r of n) {
                                        let n = r.getBoundingClientRect(),
                                            i = {};
                                        if (s) {
                                            let e = Number(t.getProperty(r, "x")) || 0;
                                            i.x = o.x - (n.left + n.width / 2 - e)
                                        }
                                        if (a) {
                                            let e = Number(t.getProperty(r, "y")) || 0;
                                            i.y = o.y - (n.top + n.height / 2 - e)
                                        }
                                        e.set(r, i, 0)
                                    }
                            }(e, c, O, I.length, b, F, k, N)
                        }
                    });
                if (!B) {
                    p($), g(C, t, x);
                    return
                }
                let U = null,
                    V = !1,
                    z = e => {
                        V || (V = !0, U ? .(), e && B.kill(), p($), g(C, t, x))
                    };
                U = T.registerCleanup(() => z(!0)), B.eventCallback("onComplete", () => {
                    z(!1)
                }), m = T.registerCleanup, (y = l.get(e)) || (y = new Set, l.set(e, y)), y.has(t) || (y.add(t), m(() => {
                    let e = C.activeIntervalEls.get(t);
                    if (e)
                        for (let t of e) C.intervalClones.has(t) && (t.isConnected && t.remove(), C.intervalClones.delete(t));
                    C.activeIntervalEls.delete(t), C.baselineValues.delete(t), y.delete(t)
                }))
            }
        },
        8036(e, t, n) {
            Object.defineProperty(t, "buildMouseMove", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let r = n(2319),
                i = n(5966),
                o = n(1734),
                s = n(4378),
                a = n(6748),
                l = n(5515),
                u = null,
                c = 0,
                d = 0,
                f = 0,
                h = null,
                p = e => Math.max(0, Math.min(1, e));

            function g(e, t, n) {
                let r = e.tween;
                e.tween = null, e.takeoverTarget = null, e.proxy.value = t, e.lastValue = t, e.channel ? .setProgress(t), n && r ? .kill()
            }

            function m(e, t) {
                if (e.tween) return e.proxy.value === t ? void g(e, t, !0) : (e.tweenTarget - e.proxy.value) * (t - e.proxy.value) < 0 ? void g(e, t, !0) : void(e.takeoverTarget = t);
                e.proxy.value = t, e.lastValue = t, e.channel ? .setProgress(t)
            }

            function v(e) {
                let t = e.tween;
                e.tween = null, e.takeoverTarget = null, t ? .kill()
            }

            function y(e, t, n, r) {
                v(t), t.lastValue = t.proxy.value, t.tweenTarget = n;
                let i = e.to(t.proxy, {
                    value: n,
                    duration: r,
                    ease: "power2.out",
                    onUpdate: () => {
                        var e;
                        let n = t.proxy.value,
                            r = t.takeoverTarget;
                        null != r && (e = t.lastValue, n === r || e === r || e < r && n > r || e > r && n < r) ? g(t, r, !0) : (t.lastValue = n, t.channel ? .setImmediate(n))
                    },
                    onComplete: () => {
                        let e = t.takeoverTarget;
                        t.tween = null, t.takeoverTarget = null, null != e && g(t, e, !1)
                    }
                });
                i ? t.tween = i : g(t, n, !1)
            }

            function b(e) {
                e.addTrigger("mouse-move", (e, t, n, g) => {
                    let b = e[1].pluginConfig,
                        w = e[2] ? .[0] === r.IX3_WF_EXTENSION_KEYS.VIEWPORT;
                    return g({
                        type: "continuous",
                        setup: e => {
                            let n, g, {
                                animation: T
                            } = e;
                            if (!T.hasGsap() || !T.hasObserver()) return i.noop;
                            let E = w ? (f += 1, h || ((h = () => {
                                c = window.innerWidth, d = window.innerHeight
                            })(), window.addEventListener("resize", h)), g = !1, () => {
                                !g && (g = !0, 0 === (f = Math.max(0, f - 1)) && h && (window.removeEventListener("resize", h), h = null))
                            }) : i.noop;
                            e.registerIntervalHandler(r.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE, l.fireMouseMoveInterval);
                            let S = b ? .smoothness ? ? 50,
                                C = (b ? .restingState ? .x ? ? 50) / 100,
                                I = (b ? .restingState ? .y ? ? 50) / 100,
                                M = e.registerChannel({
                                    role: r.TIMELINE_ROLE_NAMES.MOUSE_X,
                                    initialValue: C,
                                    element: t,
                                    smoothing: S
                                }),
                                O = e.registerChannel({
                                    role: r.TIMELINE_ROLE_NAMES.MOUSE_Y,
                                    initialValue: I,
                                    element: t,
                                    smoothing: S
                                }),
                                A = new AbortController,
                                {
                                    signal: R
                                } = A,
                                x = e.getMetadata(r.TIMELINE_ROLE_NAMES.INTERVAL),
                                _ = {
                                    x: x ? .axes ? .x !== !1 || x ? .axes ? .y === !1,
                                    y: x ? .axes ? .y !== !1 || x ? .axes ? .x === !1
                                },
                                k = x ? new a.IntervalController({
                                    distance: x.distance ? ? r.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                                    axes: _,
                                    channelManager: e,
                                    element: t,
                                    signal: R
                                }) : null,
                                N = k ? new s.VelocityController({
                                    axes: _
                                }) : null,
                                P = {
                                    proxy: {
                                        value: C
                                    },
                                    channel: M,
                                    tween: null,
                                    takeoverTarget: null,
                                    lastValue: C,
                                    tweenTarget: C
                                },
                                F = {
                                    proxy: {
                                        value: I
                                    },
                                    channel: O,
                                    tween: null,
                                    takeoverTarget: null,
                                    lastValue: I,
                                    tweenTarget: I
                                },
                                L = !1,
                                D = (e, t) => {
                                    var n;
                                    let r = (n = P.proxy.value, .1 + .5 * Math.min(Math.max(Math.abs(e - n), Math.abs(t - F.proxy.value)) / .5, 1));
                                    y(T, P, e, r), y(T, F, t, r)
                                },
                                j = (null === u && (u = "ontouchstart" in window || navigator.maxTouchPoints > 0), u),
                                $ = w ? document.documentElement : t,
                                B = null;
                            j && (B = new o.TouchScrollGuard($, R));
                            let U = null,
                                V = () => {
                                    U = null
                                };
                            if (!w) {
                                let e = new ResizeObserver(V);
                                e.observe(t), R.addEventListener("abort", () => e.disconnect()), window.addEventListener("scroll", V, {
                                    passive: !0,
                                    capture: !0,
                                    signal: R
                                }), window.visualViewport && window.visualViewport.addEventListener("resize", V, {
                                    signal: R
                                })
                            }
                            try {
                                if (!(n = T.createObserver({
                                        target: $,
                                        type: j ? "pointer,touch" : "pointer",
                                        tolerance: 0,
                                        onMove: n => {
                                            let i, o;
                                            if (B ? .isScrolling || !e.isPreviewEnabled()) return;
                                            let s = n.x ? ? 0,
                                                a = n.y ? ? 0;
                                            if (w) i = p(s / Math.max(1, c)), o = p(a / Math.max(1, d));
                                            else {
                                                let e = (U || (U = t.getBoundingClientRect()), U);
                                                i = p((s - e.left) / Math.max(1, e.width)), o = p((a - e.top) / Math.max(1, e.height))
                                            }
                                            L ? (m(P, i), m(F, o)) : (L = !0, D(i, o)), e.publishChannel(r.MOUSE_MOVE_CHANNELS.POSITION, {
                                                x: s,
                                                y: a,
                                                triggerEl: t,
                                                isViewport: w
                                            }, t), N && (N.update(n.velocityX, n.velocityY), k.update({
                                                x: s,
                                                y: a,
                                                velocityFactor: N.lastNormVelocity,
                                                dirX: N.dirX,
                                                dirY: N.dirY
                                            }))
                                        }
                                    }))) return k ? .destroy(), N ? .destroy(), A.abort(), E(), i.noop
                            } catch (e) {
                                return k ? .destroy(), N ? .destroy(), A.abort(), E(), i.noop
                            }
                            let z = () => {
                                e.isPreviewEnabled() && (L = !1, D(C, I), N ? .reset(), e.publishChannel(r.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t), k ? .reset())
                            };
                            return w ? ($.addEventListener("mouseleave", z, {
                                signal: R
                            }), window.addEventListener("blur", z, {
                                signal: R
                            })) : t.addEventListener("mouseleave", z, {
                                signal: R
                            }), $.addEventListener("touchend", z, {
                                signal: R,
                                passive: !0
                            }), $.addEventListener("touchcancel", z, {
                                signal: R,
                                passive: !0
                            }), () => {
                                n.kill(), A.abort(), v(P), v(F), k ? .destroy(), N ? .destroy(), E()
                            }
                        }
                    }), i.noop
                })
            }
        },
        5966(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                getScrollY: function() {
                    return u
                },
                initScrollCache: function() {
                    return l
                },
                noop: function() {
                    return i
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            let i = () => {},
                o = 0,
                s = 0,
                a = null;

            function l() {
                s += 1, a || (a = () => {
                    o = window.scrollY
                }, o = window.scrollY, window.addEventListener("scroll", a, {
                    passive: !0
                }));
                let e = !1;
                return () => {
                    !e && (e = !0, 0 === (s = Math.max(0, s - 1)) && a && (window.removeEventListener("scroll", a), a = null))
                }
            }

            function u() {
                return o
            }
        },
        2319(e, t, n) {
            function r(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "CORE_PLUGIN_INFO", {
                enumerable: !0,
                get: function() {
                    return i
                }
            }), r(n(4262), t), r(n(2938), t), r(n(9688), t);
            let i = {
                namespace: "wf",
                pluginId: "core",
                version: "1.0.0"
            }
        },
        2938(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                createLoadedMouseFollowActionNormalizer: function() {
                    return v
                },
                forTestSuite: function() {
                    return y
                },
                getGroupedMouseFollowConfig: function() {
                    return a
                },
                getUnpairedMouseFollowAction: function() {
                    return f
                },
                getUnpairedMouseFollowConfig: function() {
                    return l
                },
                remapMouseFollowActionGroupsInTimelines: function() {
                    return m
                },
                setGroupedMouseFollowActionConfig: function() {
                    return d
                },
                setMouseFollowActionConfig: function() {
                    return c
                },
                stripMouseFollowActionInstanceIds: function() {
                    return h
                },
                stripMouseFollowConfigInstanceIds: function() {
                    return s
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(4262);

            function s(e) {
                let {
                    groupId: t,
                    syncedActionId: n,
                    ...r
                } = e;
                return r
            }

            function a(e, t, n) {
                let r = { ...s(e),
                    groupId: t
                };
                return n ? .axis !== void 0 && (r.axis = n.axis), n ? .followMode !== void 0 && (r.followMode = n.followMode), r
            }

            function l(e, t = e.axis) {
                let {
                    syncedActionId: n,
                    ...r
                } = e, i = "full" === r.followMode && t ? (0, o.getSingleAxisMouseFollowMode)(t) : r.followMode;
                return { ...r,
                    ...void 0 !== i ? {
                        followMode: i
                    } : {}
                }
            }

            function u(e, t) {
                let n = (0, o.getMouseFollowConfig)(e);
                if (!n) return e;
                let r = t(n);
                return r === n ? e : { ...e,
                    properties: { ...e.properties,
                        [o.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r
                    }
                }
            }

            function c(e, t) {
                return { ...e,
                    properties: { ...e.properties,
                        [o.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: t
                    }
                }
            }

            function d(e, t, n, r) {
                return c(e, a(t, n, r))
            }

            function f(e, t) {
                return u(e, e => l(e, t))
            }

            function h(e) {
                return u(e, s)
            }

            function p(e, t) {
                let n = {};
                return (r, i = r.id) => u(r, r => {
                    var o;
                    let s = r.groupId ? ? (r.syncedActionId ? t[o = r.syncedActionId] ? [i, o].sort().join(":") : `single:${i}` : `single:${i}`),
                        l = n[s] ? ? e(s);
                    return n[s] = l, a(r, l)
                })
            }

            function g(e, t, n) {
                let r = p(() => t(), n ? ? Object.fromEntries(e.map(e => [e.id, e.id])));
                return (e, t) => r(e, t ? ? e.id)
            }

            function m(e, {
                generateGroupId: t,
                actionIdMap: n,
                mapAction: r = e => e
            }) {
                let i = g(e.flatMap(e => e.actions ? ? []), t, n);
                return e.map(e => {
                    let t = !1,
                        n = e.actions ? .map(e => {
                            let n = e.id,
                                o = i(r(e), n);
                            return t = t || o !== e, o
                        });
                    return t && n ? { ...e,
                        actions: n
                    } : e
                })
            }

            function v(e) {
                let t = p(e => e, Object.fromEntries(e.map(e => [e.id, e.id])));
                return (e, n) => {
                    let r = t(e);
                    return n ? u(r, e => e.axis ? e : { ...e,
                        axis: n
                    }) : r
                }
            }
            let y = {
                createMouseFollowActionGroupRemapper: g
            }
        },
        9688(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                TRANSIENT_IX3_CLONE_ATTR: function() {
                    return i
                },
                isTransientIX3Clone: function() {
                    return o
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            let i = "data-ix3-clone",
                o = e => !!e.closest ? .(`[${i}]`)
        },
        4262(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, r, i, o, s = {
                COMPONENT_TIMELINE_ROLES: function() {
                    return M
                },
                DEFAULT_MOUSE_FOLLOW_ANCHOR: function() {
                    return d
                },
                DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function() {
                    return f
                },
                HOVER_TIMELINE_ROLES: function() {
                    return O
                },
                IX3_WF_EXTENSION_KEYS: function() {
                    return n
                },
                MOUSE_MOVE_CHANNELS: function() {
                    return C
                },
                MOUSE_MOVE_TIMELINE_ROLES: function() {
                    return g
                },
                TIMELINE_ROLE_NAMES: function() {
                    return h
                },
                TargetScope: function() {
                    return r
                },
                VELOCITY_CAPABLE_PROPS: function() {
                    return m
                },
                canUseVelocityInfluenceProperty: function() {
                    return y
                },
                getEffectiveFollowMode: function() {
                    return u
                },
                getMouseFollowConfig: function() {
                    return l
                },
                getMouseMoveTimelineContext: function() {
                    return p
                },
                getOppositeMouseFollowAxis: function() {
                    return T
                },
                getSingleAxisMouseFollowMode: function() {
                    return c
                },
                isMouseMoveIntervalRole: function() {
                    return b
                },
                isVelocityInfluenceEnabled: function() {
                    return v
                },
                mouseFollowAxisToRole: function() {
                    return E
                },
                mouseFollowRoleToAxis: function() {
                    return w
                },
                mouseFollowRoleToSiblingRole: function() {
                    return S
                },
                narrowMouseMoveIntervalPayload: function() {
                    return I
                }
            };
            for (var a in s) Object.defineProperty(t, a, {
                enumerable: !0,
                get: s[a]
            });

            function l(e) {
                let t = e ? .properties ? .["wf:mouse-follow"];
                if (!("object" != typeof t || null === t || Array.isArray(t))) return t
            }

            function u(e) {
                return e ? .followMode ? ? "full"
            }

            function c(e) {
                return "x" === e ? "x-only" : "y-only"
            }(i = n || (n = {})).CLASS = "wf:class", i.BODY = "wf:body", i.ID = "wf:id", i.TRIGGER_ONLY = "wf:trigger-only", i.TRIGGER_ONLY_PARENT = "wf:trigger-only-parent", i.SELECTOR = "wf:selector", i.ATTRIBUTE = "wf:attribute", i.INST = "wf:inst", i.ANY_ELEMENT = "wf:any-element", i.VIEWPORT = "wf:viewport", i.STYLE = "wf:style", i.TRANSFORM = "wf:transform", i.LOTTIE = "wf:lottie", i.SPLINE = "wf:spline", i.VARIABLE = "wf:variable", i.RIVE = "wf:rive", i.ANIMATE_RIVE = "wf:animate-rive", i.MOUSE_FOLLOW = "wf:mouse-follow", i.CLICK = "wf:click", i.HOVER = "wf:hover", i.LOAD = "wf:load", i.FOCUS = "wf:focus", i.BLUR = "wf:blur", i.SCROLL = "wf:scroll", i.CUSTOM = "wf:custom", i.CHANGE = "wf:change", i.MOUSE_MOVE = "wf:mouse-move", i.NAVBAR = "wf:navbar", i.DROPDOWN = "wf:dropdown", i.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion", i.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints", i.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery", i.COLOR_SCHEME = "wf:colorScheme", i.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute", i.CURRENT_TIME = "wf:currentTime", i.ELEMENT_STATE = "wf:elementState", (o = r || (r = {})).ALL = "all", o.PARENT = "parent", o.CHILDREN = "children", o.SIBLINGS = "siblings", o.NEXT = "next", o.PREVIOUS = "previous", o.FIRST_ANCESTOR = "first-ancestor", o.FIRST_DESCENDANT = "first-descendant", o.DESCENDANTS = "descendants", o.ANCESTORS = "ancestors";
            let d = "50% 50%",
                f = 100,
                h = {
                    MOUSE_X: "mouseX",
                    MOUSE_Y: "mouseY",
                    INTERVAL: "interval",
                    OPEN: "open",
                    CLOSE: "close",
                    MOUSE_ENTER: "mouseEnter",
                    MOUSE_LEAVE: "mouseLeave"
                };

            function p(e) {
                return e === h.MOUSE_X ? {
                    kind: "mouse-x",
                    role: e,
                    axis: "x",
                    siblingRole: h.MOUSE_Y
                } : e === h.MOUSE_Y ? {
                    kind: "mouse-y",
                    role: e,
                    axis: "y",
                    siblingRole: h.MOUSE_X
                } : e === h.INTERVAL ? {
                    kind: "interval",
                    role: e
                } : {
                    kind: "other",
                    role: e ? ? void 0
                }
            }
            let g = {
                    MOUSE_X: {
                        role: h.MOUSE_X,
                        label: "Mouse X",
                        usePercentCanvas: !0
                    },
                    MOUSE_Y: {
                        role: h.MOUSE_Y,
                        label: "Mouse Y",
                        usePercentCanvas: !0
                    },
                    INTERVAL: {
                        role: h.INTERVAL,
                        label: "Interval"
                    }
                },
                m = new Set(["x", "y", "scale", "scaleX", "scaleY", "rotation", "skewX", "skewY", "opacity"]);

            function v(e) {
                return e ? .pluginConfig ? .type === "mouseMove" && !!e.pluginConfig.velocityInfluence
            }

            function y(e) {
                return m.has(e)
            }

            function b(e) {
                return "interval" === p(e).kind
            }

            function w(e) {
                let t = p(e);
                return "mouse-x" === t.kind || "mouse-y" === t.kind ? t.axis : null
            }

            function T(e) {
                return "x" === e ? "y" : "x"
            }

            function E(e) {
                return "x" === e ? h.MOUSE_X : h.MOUSE_Y
            }

            function S(e) {
                let t = p(e);
                return "mouse-x" === t.kind || "mouse-y" === t.kind ? t.siblingRole : null
            }
            let C = {
                POSITION: "wf:mouse-move:position",
                LEAVE: "wf:mouse-move:leave"
            };

            function I(e) {
                if ("object" != typeof e || null === e) return {};
                let t = {},
                    n = e.cursorPos;
                return "object" == typeof n && null !== n && "number" == typeof n.x && "number" == typeof n.y && (t.cursorPos = {
                    x: n.x,
                    y: n.y
                }), "number" == typeof e.velocityFactor && (t.velocityFactor = e.velocityFactor), "number" == typeof e.dirX && (t.dirX = e.dirX), "number" == typeof e.dirY && (t.dirY = e.dirY), t
            }
            let M = {
                    OPEN: {
                        role: h.OPEN,
                        label: "Open",
                        allowedControls: ["play", "restart"],
                        defaultControl: "play"
                    },
                    CLOSE: {
                        role: h.CLOSE,
                        label: "Close",
                        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
                        allowedControlsWhenReusing: ["reverse", "reverseFlipEase"],
                        defaultControl: "play",
                        defaultControlWhenReusing: "reverseFlipEase",
                        autoReusesRole: h.OPEN
                    }
                },
                O = {
                    MOUSE_ENTER: {
                        role: h.MOUSE_ENTER,
                        label: "Hover in actions",
                        allowedControls: ["play", "restart"],
                        defaultControl: "play"
                    },
                    MOUSE_LEAVE: {
                        role: h.MOUSE_LEAVE,
                        label: "Hover out actions",
                        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
                        defaultControl: "play"
                    }
                }
        },
        3428(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                CORE_OPERATORS: function() {
                    return o.CORE_OPERATORS
                },
                DEFAULTS: function() {
                    return o.DEFAULTS
                },
                DEFAULT_CUSTOM_EASE: function() {
                    return o.DEFAULT_CUSTOM_EASE
                },
                EASE_DEFAULTS: function() {
                    return o.EASE_DEFAULTS
                },
                PERCENT_CANVAS_DURATION_S: function() {
                    return o.PERCENT_CANVAS_DURATION_S
                },
                RELATIONSHIP_TYPES: function() {
                    return o.RELATIONSHIP_TYPES
                },
                STANDARD_TRIGGER_ALLOWED_CONTROLS: function() {
                    return o.STANDARD_TRIGGER_ALLOWED_CONTROLS
                },
                TimelineControlType: function() {
                    return o.TimelineControlType
                },
                TweenType: function() {
                    return o.TweenType
                },
                isValidControlType: function() {
                    return o.isValidControlType
                },
                tweenTypeFromName: function() {
                    return o.tweenTypeFromName
                },
                tweenTypeToName: function() {
                    return o.tweenTypeToName
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(764);

            function s(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }
            s(n(4210), t), s(n(8932), t), s(n(1010), t), s(n(861), t)
        },
        861(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        8932(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ConditionCategoryBuilder: function() {
                    return l
                },
                DesignBuilder: function() {
                    return u
                },
                TargetCategoryBuilder: function() {
                    return s
                },
                TriggerCategoryBuilder: function() {
                    return a
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            class i {
                categoryBuilder;
                groupConfig;
                properties;
                constructor(e, t) {
                    this.categoryBuilder = e, this.groupConfig = t, this.properties = []
                }
                addProperty(e, t, n) {
                    return this.properties.push({
                        id: e,
                        schema: { ...t,
                            description: n ? .description || t.description
                        }
                    }), this
                }
                addGroup(e) {
                    return this.categoryBuilder.finalizeGroup({ ...this.groupConfig,
                        properties: this.properties
                    }), this.categoryBuilder.clearCurrentGroupBuilder(), this.categoryBuilder.addGroup(e)
                }
                getGroupData() {
                    return { ...this.groupConfig,
                        properties: this.properties
                    }
                }
            }
            class o {
                categoryId;
                config;
                displayGroups;
                currentGroupBuilder;
                constructor(e, t) {
                    this.categoryId = e, this.config = t, this.displayGroups = [], this.currentGroupBuilder = null
                }
                addGroup(e) {
                    return this.currentGroupBuilder && this.finalizeGroup(this.currentGroupBuilder.getGroupData()), this.currentGroupBuilder = new i(this, e), this.currentGroupBuilder
                }
                finalizeGroup(e) {
                    this.displayGroups.push(e)
                }
                clearCurrentGroupBuilder() {
                    this.currentGroupBuilder = null
                }
                getDefinition() {
                    this.currentGroupBuilder && (this.finalizeGroup(this.currentGroupBuilder.getGroupData()), this.currentGroupBuilder = null);
                    let e = this.displayGroups.flatMap(e => e.properties);
                    return {
                        id: this.categoryId,
                        properties: e,
                        propertyType: this.config.propertyType || "tween",
                        displayGroups: this.displayGroups
                    }
                }
            }
            class s {
                categoryId;
                config;
                targets;
                constructor(e, t) {
                    this.categoryId = e, this.config = t, this.targets = []
                }
                addTargetSchema(e, t) {
                    return this.targets.push({
                        id: e,
                        schema: t
                    }), this
                }
                getDefinition() {
                    return {
                        id: this.categoryId,
                        label: this.config.label,
                        order: this.config.order,
                        targets: this.targets
                    }
                }
            }
            class a {
                categoryId;
                config;
                triggers;
                constructor(e, t) {
                    this.categoryId = e, this.config = t, this.triggers = []
                }
                addTriggerSchema(e, t) {
                    return this.triggers.push({
                        id: e,
                        schema: t
                    }), this
                }
                getDefinition() {
                    return {
                        id: this.categoryId,
                        label: this.config.label,
                        order: this.config.order,
                        triggers: this.triggers
                    }
                }
            }
            class l {
                categoryId;
                config;
                conditions;
                constructor(e, t) {
                    this.categoryId = e, this.config = t, this.conditions = []
                }
                addConditionSchema(e, t) {
                    return this.conditions.push({
                        id: e,
                        schema: t
                    }), this
                }
                getDefinition() {
                    return {
                        id: this.categoryId,
                        label: this.config.label,
                        order: this.config.order,
                        conditions: this.conditions
                    }
                }
            }
            class u {
                baseInfo;
                categories = new Map;
                targetCategories = new Map;
                triggerCategories = new Map;
                conditionCategories = new Map;
                actionPresets = new Map;
                reducerHooks = [];
                constructor(e) {
                    this.baseInfo = e
                }
                addCategory(e, t = {}) {
                    let n = new o(e, t);
                    return this.categories.set(e, n), n
                }
                addTargetCategory(e, t) {
                    let n = new s(e, t);
                    return this.targetCategories.set(e, n), n
                }
                addTriggerCategory(e, t) {
                    let n = new a(e, t);
                    return this.triggerCategories.set(e, n), n
                }
                addConditionCategory(e, t) {
                    let n = new l(e, t);
                    return this.conditionCategories.set(e, n), n
                }
                addActionPreset(e, t) {
                    let n = `${this.baseInfo.namespace}:${e}`;
                    return this.actionPresets.set(n, {
                        id: n,
                        name: t.name,
                        description: t.description,
                        icon: t.icon,
                        timelineIcon: t.timelineIcon,
                        type: "plugin",
                        categoryId: t.categoryId,
                        action: t.action,
                        customEditor: t.customEditor,
                        targetFilter: t.targetFilter,
                        designerTargetFilter: t.designerTargetFilter,
                        customTargetComponent: t.customTargetComponent
                    }), this
                }
                addReducerHooks(e) {
                    return this.reducerHooks.push(e), this
                }
                buildDesign() {
                    let e = [];
                    for (let [, t] of this.categories) e.push(t.getDefinition());
                    let t = [];
                    for (let [, e] of this.targetCategories) t.push(e.getDefinition());
                    let n = [];
                    for (let [, e] of this.triggerCategories) n.push(e.getDefinition());
                    let r = [];
                    for (let [, e] of this.conditionCategories) r.push(e.getDefinition());
                    let i = [];
                    for (let [, e] of this.actionPresets) i.push(e);
                    return {
                        namespace: this.baseInfo.namespace,
                        pluginId: this.baseInfo.pluginId,
                        version: this.baseInfo.version,
                        displayName: this.baseInfo.displayName,
                        description: this.baseInfo.description,
                        categories: e.length > 0 ? e : void 0,
                        targetCategories: t.length > 0 ? t : void 0,
                        triggerCategories: n.length > 0 ? n : void 0,
                        conditionCategories: r.length > 0 ? r : void 0,
                        actionPresets: i.length > 0 ? i : void 0,
                        reducerHooks: this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0
                    }
                }
            }
        },
        4210(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RuntimeBuilder", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                baseInfo;
                extensions = [];
                lifecycle = {};
                constructor(e) {
                    this.baseInfo = e
                }
                addTrigger(e, t) {
                    let n = `${this.baseInfo.namespace}:${e}`;
                    return this.extensions.push({
                        extensionPoint: "trigger",
                        id: n,
                        triggerType: n,
                        implementation: t
                    }), this
                }
                addAction(e, t) {
                    let n = `${this.baseInfo.namespace}:${e}`;
                    return this.extensions.push({
                        extensionPoint: "action",
                        id: n,
                        actionType: n,
                        implementation: t
                    }), this
                }
                addTargetResolver(e, t) {
                    let n = `${this.baseInfo.namespace}:${e}`;
                    return this.extensions.push({
                        extensionPoint: "targetResolver",
                        id: n,
                        resolverType: n,
                        implementation: t
                    }), this
                }
                addCondition(e, t) {
                    let n = `${this.baseInfo.namespace}:${e}`;
                    return this.extensions.push({
                        extensionPoint: "condition",
                        id: n,
                        conditionType: n,
                        implementation: t
                    }), this
                }
                onInitialize(e) {
                    return this.lifecycle.initialize = e, this
                }
                onActivate(e) {
                    return this.lifecycle.activate = e, this
                }
                onDeactivate(e) {
                    return this.lifecycle.deactivate = e, this
                }
                onDispose(e) {
                    return this.lifecycle.dispose = e, this
                }
                createManifest() {
                    let e = this.extensions.map(e => `${e.extensionPoint}:${e.id}`);
                    return {
                        id: [this.baseInfo.namespace, this.baseInfo.pluginId],
                        version: this.baseInfo.version,
                        name: this.baseInfo.displayName || this.baseInfo.pluginId,
                        description: this.baseInfo.description || "",
                        dependencies: this.baseInfo.dependencies,
                        features: e
                    }
                }
                buildRuntime() {
                    return {
                        manifest: this.createManifest(),
                        extensions: this.extensions,
                        ...this.lifecycle
                    }
                }
            }
        },
        1010(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "TransformBuilder", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                baseInfo;
                triggerTransforms = new Map;
                targetTransforms = new Map;
                conditionTransforms = new Map;
                actionTransforms = new Map;
                constructor(e) {
                    this.baseInfo = e
                }
                addTargetTransform(e, t) {
                    return this.targetTransforms.set(this.createExtensionKey(e), function(e, n, r) {
                        return t(e, n, r)
                    }), this
                }
                addTriggerTransform(e, t) {
                    return this.triggerTransforms.set(this.createExtensionKey(e), function(e, n, r) {
                        return t(e, n, r)
                    }), this
                }
                addConditionTransform(e, t) {
                    return this.conditionTransforms.set(this.createExtensionKey(e), function(e, n, r) {
                        return t(e, n, r)
                    }), this
                }
                addActionTransform(e, t) {
                    return this.actionTransforms.set(this.createExtensionKey(e), function(e, n, r) {
                        return t(e, n, r)
                    }), this
                }
                createExtensionKey(e) {
                    return `${this.baseInfo.namespace}:${e}`
                }
                buildTransform() {
                    return {
                        namespace: this.baseInfo.namespace,
                        pluginId: this.baseInfo.pluginId,
                        version: this.baseInfo.version,
                        displayName: this.baseInfo.displayName,
                        description: this.baseInfo.description,
                        triggerTransforms: this.triggerTransforms,
                        targetTransforms: this.targetTransforms,
                        conditionTransforms: this.conditionTransforms,
                        actionTransforms: this.actionTransforms
                    }
                }
            }
        },
        764(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, r, i, o, s, a, l, u, c, d, f = {
                CORE_OPERATORS: function() {
                    return i
                },
                DEFAULTS: function() {
                    return o
                },
                DEFAULT_CUSTOM_EASE: function() {
                    return b
                },
                EASE_DEFAULTS: function() {
                    return y
                },
                PERCENT_CANVAS_DURATION_S: function() {
                    return v
                },
                RELATIONSHIP_TYPES: function() {
                    return s
                },
                STANDARD_TRIGGER_ALLOWED_CONTROLS: function() {
                    return w
                },
                TimelineControlType: function() {
                    return n
                },
                TweenType: function() {
                    return r
                },
                isValidControlType: function() {
                    return p
                },
                tweenTypeFromName: function() {
                    return g
                },
                tweenTypeToName: function() {
                    return m
                }
            };
            for (var h in f) Object.defineProperty(t, h, {
                enumerable: !0,
                get: f[h]
            });

            function p(e) {
                return "standard" === e || "scroll" === e || "load" === e || "continuous" === e
            }

            function g(e) {
                switch (e) {
                    case "to":
                        return 0;
                    case "from":
                        return 1;
                    case "both":
                        return 2;
                    case "set":
                        return 3
                }
            }

            function m(e) {
                switch (e) {
                    case 0:
                        return "to";
                    case 1:
                        return "from";
                    case 2:
                        return "both";
                    case 3:
                        return "set";
                    default:
                        return null
                }
            }(a = n || (n = {})).STANDARD = "standard", a.SCROLL = "scroll", a.LOAD = "load", a.CONTINUOUS = "continuous", (l = r || (r = {}))[l.To = 0] = "To", l[l.From = 1] = "From", l[l.FromTo = 2] = "FromTo", l[l.Set = 3] = "Set", (u = i || (i = {})).AND = "wf:and", u.OR = "wf:or", (c = o || (o = {}))[c.DURATION = .5] = "DURATION";
            let v = 1;
            (d = s || (s = {})).NONE = "none", d.WITHIN = "within", d.DIRECT_CHILD_OF = "direct-child-of", d.CONTAINS = "contains", d.DIRECT_PARENT_OF = "direct-parent-of", d.NEXT_TO = "next-to", d.NEXT_SIBLING_OF = "next-sibling-of", d.PREV_SIBLING_OF = "prev-sibling-of";
            let y = {
                    back: {
                        type: "back",
                        curve: "out",
                        power: 1.7
                    },
                    elastic: {
                        type: "elastic",
                        curve: "out",
                        amplitude: 1,
                        period: .3
                    },
                    steps: {
                        type: "steps",
                        stepCount: 6
                    },
                    rough: {
                        type: "rough",
                        templateCurve: "none.inOut",
                        points: 20,
                        strength: 1,
                        taper: "none",
                        randomizePoints: !0,
                        clampPoints: !1
                    },
                    slowMo: {
                        type: "slowMo",
                        linearRatio: .7,
                        power: .7,
                        yoyoMode: !1
                    },
                    expoScale: {
                        type: "expoScale",
                        startingScale: .05,
                        endingScale: 1,
                        templateCurve: "none.inOut"
                    },
                    customWiggle: {
                        type: "customWiggle",
                        wiggles: 10,
                        wiggleType: "easeOut"
                    },
                    customBounce: {
                        type: "customBounce",
                        strength: .7,
                        squash: 1,
                        endAtStart: !1
                    },
                    customEase: {
                        type: "customEase",
                        bezierCurve: "M0,160 C40,160 24,96 80,96 136,96 120,0 160,0"
                    }
                },
                b = y.back,
                w = ["restart", "play", "reverse", "reverseFlipEase", "pause", "resume", "togglePlayReverse", "togglePlayReverseFlipEase", "stop", "none"]
        },
        8281(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                EASING_NAMES: function() {
                    return s.EASING_NAMES
                },
                IX3: function() {
                    return o.IX3
                },
                convertEaseConfigToGSAP: function() {
                    return a.convertEaseConfigToGSAP
                },
                convertEaseConfigToLinear: function() {
                    return a.convertEaseConfigToLinear
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(440),
                s = n(7745),
                a = n(8638)
        },
        8434(e, t, n) {
            Object.defineProperty(t, "AnimationCoordinator", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(3428),
                i = n(7745),
                o = n(8638),
                s = n(3944),
                a = n(6856);
            class l {
                timelineDefs;
                getHandler;
                getTargetResolver;
                resolveFn;
                getInteractionForTimeline;
                env;
                subs;
                dynamicFlags;
                cleanupFns;
                scrollTriggers;
                aliases;
                flipEaseBySource;
                pluginRuntimeBridge;
                animation;
                sharedGroups;
                static MAX_ALIAS_DEPTH = 10;
                resolveAlias(e, t = 0) {
                    if (t > l.MAX_ALIAS_DEPTH) return console.warn(`IX3: Timeline alias chain exceeded max depth for "${e}". Possible circular reference.`), e;
                    let n = this.aliases.get(e);
                    return n ? this.resolveAlias(n, t + 1) : e
                }
                shouldFlipEaseForTimeline(e) {
                    let t = this.resolveSourceTimelineId(e),
                        n = [t];
                    for (let [e] of this.timelineDefs) e !== t && this.resolveSourceTimelineId(e) === t && n.push(e);
                    let r = new Set(n),
                        i = !1,
                        o = e => {
                            if ("reverseFlipEase" === e || "togglePlayReverseFlipEase" === e) i = !0;
                            else if ("reverse" === e || "togglePlayReverse" === e) return !0;
                            return !1
                        },
                        s = new Map;
                    for (let e of n) {
                        let t = this.getInteractionForTimeline(e);
                        t && s.set(t.id, t)
                    }
                    for (let e of s.values()) {
                        let t = e.timelineIds ? ? [];
                        for (let [, n] of e.triggers) {
                            let e, i = n ? .assignedGroupId;
                            if (null === i) continue;
                            let s = n ? .assignedTimelineRole,
                                a = null != s ? t.filter(e => this.timelineDefs.get(e) ? .triggerMetadata ? .role === s) : null;
                            if (null != i) {
                                let n = t.filter(e => this.timelineDefs.get(e) ? .groupId === i);
                                if (n.length > 0) e = n;
                                else {
                                    if (!t.some(e => this.timelineDefs.get(e) ? .triggerMetadata != null)) continue;
                                    e = a
                                }
                            } else e = a;
                            let l = n => (null != n ? [n] : t).filter(t => (null == e || e.includes(t)) && r.has(t)),
                                u = n ? .conditionalLogic;
                            if (u) {
                                for (let e of [u.ifTrue, u.ifFalse])
                                    if (e && l(e.targetTimelineId ? ? void 0).length > 0 && o(e.control)) return !1
                            } else
                                for (let e of l()) {
                                    let t = this.timelineDefs.get(e);
                                    if (o(t ? .triggerMetadata ? t.settings ? .control : n ? .control)) return !1
                                }
                        }
                    }
                    return i
                }
                recomputeFlipEaseForSource(e) {
                    let t = this.resolveSourceTimelineId(e),
                        n = this.subs.get(t);
                    if (!n) return;
                    let r = this.shouldFlipEaseForTimeline(t);
                    if (r !== this.flipEaseBySource.get(t))
                        for (let e of (this.flipEaseBySource.set(t, r), n.values())) this.scheduleRebuild(e)
                }
                resolveSourceTimelineId(e) {
                    let t = e;
                    for (let e = 0; e <= l.MAX_ALIAS_DEPTH; e++) {
                        let e = this.timelineDefs.get(t),
                            n = e ? .reuse ? .sourceTimelineId;
                        if (!n) return t;
                        t = n
                    }
                    return console.warn(`IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`), t
                }
                globalSplitRegistry;
                timelineTargetsCache;
                constructor(e, t, n, r, l, u) {
                    this.timelineDefs = e, this.getHandler = t, this.getTargetResolver = n, this.resolveFn = r, this.getInteractionForTimeline = l, this.env = u, this.subs = new Map, this.dynamicFlags = new Map, this.cleanupFns = new Map, this.scrollTriggers = new Map, this.aliases = new Map, this.flipEaseBySource = new Map, this.pluginRuntimeBridge = new s.PluginRuntimeBridge, this.sharedGroups = new Map, this.globalSplitRegistry = new Map, this.timelineTargetsCache = new WeakMap, this.getStaggerConfig = (e, t) => {
                        if (!e) return;
                        let {
                            ease: n,
                            amount: r,
                            from: s,
                            grid: a,
                            axis: l,
                            each: u
                        } = e, c = {};
                        if (null != r && (c.amount = (0, i.toSeconds)(r)), null != u && (c.each = (0, i.toSeconds)(u)), null != s && (c.from = s), null != a && (c.grid = a), null != l && (c.axis = l), null != n) {
                            let e = (0, o.convertEaseConfigToGSAP)(n, void 0, t);
                            null != e && (c.ease = e)
                        }
                        return c
                    }, this.animation = new a.RuntimeMotionDriver(u)
                }
                registerSharedGroup(e, t) {
                    if (t.length < 2) return;
                    let n = [e, e];
                    for (let r of t) this.sharedGroups.set(r, n), r !== e && this.aliases.set(r, e)
                }
                createTimeline(e, t) {
                    let n = this.timelineDefs.get(e);
                    if (this.aliases.has(e)) return;
                    let r = this.sharedGroups.get(e);
                    if (this.destroy(e), !n) return;
                    if (r && this.sharedGroups.set(e, r), n.reuse ? .sourceTimelineId) {
                        this.aliases.set(e, n.reuse.sourceTimelineId), this.recomputeFlipEaseForSource(n.reuse.sourceTimelineId);
                        return
                    }
                    let o = this.isDynamicTimeline(n, t);
                    this.dynamicFlags.set(e, o);
                    let s = new Set,
                        a = new Set;
                    for (let [, e, n] of t.triggers) {
                        if (n)
                            for (let e of this.resolveFn(n, {}, t)) a.add(e);
                        let r = e ? .controlType;
                        r && (0, i.isValidControlType)(r) && s.add(r)
                    }
                    if (!a.size || !o) {
                        let t = this.buildSubTimeline(e, null, s);
                        t && this.ensureSubs(e).set(null, t)
                    }
                    if (a.size) {
                        let t = this.ensureSubs(e);
                        for (let n of a)
                            if (!t.has(n)) {
                                let r = o ? this.buildSubTimeline(e, n, s) : this.getSub(e, null);
                                o && r && t.set(n, r)
                            }
                    }
                    this.flipEaseBySource.set(e, this.shouldFlipEaseForTimeline(e))
                }
                getTimeline(e, t) {
                    return this.prepareIfShared(e, t), this.getSub(e, t) ? .timeline
                }
                prepareIfShared(e, t) {
                    let n = this.sharedGroups.get(e);
                    if (!n || n[1] === e) return;
                    let r = this.timelineDefs.get(e);
                    if (!r) return;
                    let i = this.getSub(n[0], t);
                    if (!i) return;
                    let o = i.timelineId;
                    for (let e of i.cleanupFns ? ? []) e();
                    i.cleanupFns ? .clear();
                    let s = this.cleanupFns.get(o);
                    if (s) {
                        for (let e of s) e();
                        s.clear()
                    }
                    let a = i.timeline;
                    a.clear(), a.progress(0);
                    let l = this.convertToGsapDefaults(r.settings || {}, e);
                    if (a.repeat("number" == typeof l.repeat ? l.repeat : 0), a.repeatDelay("number" == typeof l.repeatDelay ? l.repeatDelay : 0), a.yoyo(!0 === l.yoyo), a.delay("number" == typeof l.delay ? l.delay : 0), a.reversed(!!r.playInReverse), a.timeScale("number" == typeof r.settings ? .speed ? r.settings.speed : 1), i.timelineDef = { ...r,
                            actions: r.actions || []
                        }, i.timelineId = e, this.timelineTargetsCache.delete(i), this.env.win.SplitText && r.actions ? .length)
                        for (let [n, {
                                types: o,
                                masks: s
                            }] of this.analyzeSplitRequirements(r.actions, t, e)) this.doSplitText({
                            type: this.getSplitTypeString(o),
                            mask: this.getMaskString(s)
                        }, [n], i, this.env.win.SplitText);
                    this.buildTimeline(i), n[1] = e
                }
                getAllTimelines(e) {
                    let t = this.resolveAlias(e),
                        n = this.subs.get(t);
                    if (!n) return [];
                    for (let t of n.keys()) this.prepareIfShared(e, t);
                    return Array.from(n.values()).map(e => e.timeline)
                }
                invalidateVolatileFromStart(e, t) {
                    let n = null != t ? 0 === t : 0 === e.timeline.progress();
                    e.hasVolatileValues && n && e.timeline.invalidate()
                }
                play(e, t, n) {
                    this.prepareIfShared(e, t);
                    let r = this.getSub(e, t);
                    r && (this.invalidateVolatileFromStart(r, n), r.timeline.play(n ? ? void 0))
                }
                pause(e, t, n) {
                    this.prepareIfShared(e, t);
                    let r = this.getSubOrNull(e, t);
                    r && (void 0 !== n ? r.timeline.pause(n) : r.timeline.pause())
                }
                resume(e, t, n) {
                    this.prepareIfShared(e, t);
                    let r = this.getSubOrNull(e, t);
                    r && (this.invalidateVolatileFromStart(r, n), r.timeline.resume(n))
                }
                reverse(e, t, n) {
                    this.prepareIfShared(e, t), this.getSub(e, t) ? .timeline.reverse(n)
                }
                restart(e, t) {
                    this.prepareIfShared(e, t);
                    let n = this.getSub(e, t);
                    n && (n.hasVolatileValues && n.timeline.invalidate(), n.timeline.restart())
                }
                getTriggerMetadata(e) {
                    return this.timelineDefs.get(e) ? .triggerMetadata ? ? null
                }
                fireInterval(e, t, n = {}) {
                    this.pluginRuntimeBridge.fireInterval({
                        coordinator: this,
                        timelineId: e,
                        element: t,
                        options: n,
                        animation: this.animation
                    })
                }
                registerIntervalHandler(e, t) {
                    this.pluginRuntimeBridge.registerIntervalHandler(e, t)
                }
                getOneShotTimelineContext(e) {
                    let t = this.getTimelineDef(e);
                    return t ? {
                        timelineId: e,
                        timelineDef: t,
                        getFirstActionTargets: t => this.getFirstActionTargets(e, t),
                        getActionTweenConfig: (e, t, n) => this.getActionTweenConfig(e, t, n),
                        buildActionTimeline: t => this.buildOneShotActionTimeline(e, t),
                        registerCleanup: t => this.registerCleanup(e, t)
                    } : null
                }
                getTimelineDef(e) {
                    return this.timelineDefs.get(this.resolveAlias(e))
                }
                getFirstActionTargets(e, t) {
                    let n = this.getTimelineDef(e),
                        r = n ? .actions ? .[0];
                    return r ? this.collectTargets(r, t, e) : []
                }
                getActionTweenConfig(e, t, n) {
                    let r = this.getHandler(t);
                    if (!r ? .createTweenConfig) return null;
                    let i = e.properties[t] || {};
                    return r.createTweenConfig(i, n)
                }
                registerCleanup(e, t) {
                    let n = this.cleanupFns.get(e) ? ? new Set;
                    return this.cleanupFns.set(e, n), n.add(t), () => {
                        n.delete(t)
                    }
                }
                publishChannel(e, t, n) {
                    this.pluginRuntimeBridge.publish(e, t, n)
                }
                subscribeChannel(e, t, n, r) {
                    return this.pluginRuntimeBridge.subscribe(e, t, n, r)
                }
                buildOneShotActionTimeline(e, t) {
                    let n = this.getTimelineDef(e);
                    if (!n ? .actions ? .length) return null;
                    let r = this.animation.timeline();
                    if (!r) return null;
                    for (let i of (t.beforeTweens ? .(r), n.actions)) this.buildTweensForAction(i, t.targets, r, e, !1, t.varsTransform, void 0, void 0, void 0, t.cleanupBucket);
                    return r
                }
                togglePlayReverse(e, t) {
                    this.prepareIfShared(e, t);
                    let n = this.getSub(e, t);
                    if (!n) return;
                    let r = n.timeline,
                        i = r.progress();
                    this.invalidateVolatileFromStart(n), 0 === i ? r.play() : 1 === i ? r.reverse() : r.reversed() ? r.play() : r.reverse()
                }
                seek(e, t, n) {
                    this.getSubOrNull(e, n) ? .timeline.seek(t)
                }
                setTimeScale(e, t, n) {
                    this.prepareIfShared(e, n), this.getSubOrNull(e, n) ? .timeline.timeScale(t)
                }
                setTotalProgress(e, t, n) {
                    this.getSubOrNull(e, n) ? .timeline.totalProgress(t)
                }
                setContinuousProgress(e, t, n) {
                    this.getSub(e, n) ? .timeline.progress(Math.max(0, Math.min(1, t)))
                }
                isPlaying(e, t) {
                    return !!this.getSubOrNull(e, t) ? .timeline.isActive()
                }
                isPaused(e, t) {
                    return !!this.getSubOrNull(e, t) ? .timeline.paused()
                }
                destroy(e) {
                    this.aliases.delete(e), this.pluginRuntimeBridge.destroyTimeline(e);
                    let t = this.subs.get(e),
                        n = new Set;
                    if (t) {
                        for (let [, r] of t) {
                            if (r.timelineId !== e && n.add(r.timelineId), r.rebuildState = "init", r.timeline && (r.timeline.revert(), r.timeline.kill()), r.scrollTriggerIds) {
                                for (let e of r.scrollTriggerIds) this.cleanupScrollTrigger(e);
                                r.scrollTriggerIds.clear()
                            }
                            for (let e of (r.scrollTriggerConfigs && r.scrollTriggerConfigs.clear(), r.cleanupFns ? ? [])) e();
                            r.cleanupFns ? .clear(), this.timelineTargetsCache.delete(r)
                        }
                        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
                        this.globalSplitRegistry.clear()
                    }
                    for (let t of this.cleanupFns.get(e) ? ? []) t();
                    for (let e of n) {
                        for (let t of this.cleanupFns.get(e) ? ? []) t();
                        this.cleanupFns.delete(e)
                    }
                    this.cleanupFns.delete(e), this.subs.delete(e), this.dynamicFlags.delete(e), this.flipEaseBySource.delete(e), this.sharedGroups.delete(e)
                }
                isDynamicTimeline(e, t) {
                    let n = t.triggers.some(([, e]) => e ? .controlType !== r.TimelineControlType.LOAD);
                    if (t.scope ? .type === "component" && n) return !0;
                    let i = e.actions;
                    if (!i ? .length) return !1;
                    for (let e of i) {
                        for (let t of e.targets ? ? []) {
                            if (this.getTargetResolver(t) ? .isDynamic) return !0;
                            if (3 === t.length && t[2]) {
                                let e = t[2];
                                if (e.filterBy && "none" !== e.relationship) {
                                    let t = this.getTargetResolver(e.filterBy);
                                    if (t ? .isDynamic) return !0
                                }
                            }
                        }
                        if (n)
                            for (let t in e.properties) {
                                let e = this.getHandler(t);
                                if (e ? .requiresTriggerElementContext) return !0
                            }
                    }
                    return !1
                }
                ensureSubs(e) {
                    return this.subs.has(e) || this.subs.set(e, new Map), this.subs.get(e)
                }
                getSub(e, t) {
                    let n = this.resolveAlias(e),
                        r = this.ensureSubs(n),
                        i = this.dynamicFlags.get(n),
                        o = r.get(i ? t : null);
                    return !o && (o = this.buildSubTimeline(n, t)) && r.set(i ? t : null, o), o
                }
                getSubOrNull(e, t) {
                    let n = this.resolveAlias(e),
                        r = this.dynamicFlags.get(n);
                    return this.subs.get(n) ? .get(r ? t ? ? null : null)
                }
                convertToGsapDefaults(e, t) {
                    let n = {},
                        r = t ? (0, i.buildEaseContextId)(t, "defaults") : void 0,
                        s = t ? (0, i.buildEaseContextId)(t, "defaults-stagger") : void 0;
                    if (null != e.duration && (n.duration = (0, i.toSeconds)(e.duration)), null != e.ease) {
                        let t = (0, o.convertEaseConfigToGSAP)(e.ease, void 0, r);
                        null != t && (n.ease = t)
                    }
                    if (null != e.delay && (n.delay = "number" == typeof e.delay ? e.delay : (0, i.toSeconds)(e.delay)), null != e.repeat && (n.repeat = e.repeat), null != e.repeatDelay && (n.repeatDelay = (0, i.toSeconds)(e.repeatDelay)), null != e.stagger) {
                        let t = this.getStaggerConfig(e.stagger, s);
                        t && (n.stagger = t)
                    }
                    return null != e.yoyo && (n.yoyo = e.yoyo), n
                }
                buildSubTimeline(e, t, n) {
                    let r = this.timelineDefs.get(e),
                        i = r ? .actions,
                        o = r ? .settings,
                        s = this.env.win.gsap;
                    if (!s) return;
                    let a = s.timeline({ ...this.convertToGsapDefaults(o || {}, e),
                            paused: !0,
                            reversed: !!r ? .playInReverse,
                            data: {
                                id: e,
                                triggerEl: t || void 0
                            }
                        }),
                        l = r ? { ...r,
                            actions: i || []
                        } : {
                            id: e,
                            pageId: "",
                            deleted: !1,
                            actions: []
                        },
                        u = {
                            timeline: a,
                            timelineId: e,
                            elementContext: t,
                            timelineDef: l,
                            rebuildState: "init",
                            controlTypes: n
                        };
                    if (!i ? .length) return u;
                    if (this.env.win.SplitText)
                        for (let [n, {
                                types: r,
                                masks: o
                            }] of this.analyzeSplitRequirements(i, t, e)) {
                            let e = this.getSplitTypeString(r),
                                t = this.getMaskString(o);
                            this.doSplitText({
                                type: e,
                                mask: t
                            }, [n], u, this.env.win.SplitText)
                        }
                    return this.buildTimeline(u), this.padTimelineToCanvas(u), u
                }
                padTimelineToCanvas(e) {
                    let {
                        canvasDuration: t
                    } = e.timelineDef;
                    if (null == t) return;
                    let n = e.timeline;
                    n.duration() < t && n.to({}, {
                        duration: 0
                    }, t)
                }
                buildTimeline(e) {
                    let t = e.timelineDef,
                        n = e.elementContext,
                        r = e.timeline,
                        i = e.timelineId,
                        o = new Map;
                    for (let s = 0; s < t.actions.length; s++) {
                        let a = t.actions[s];
                        if (!a) continue;
                        let l = JSON.stringify(a.targets),
                            c = !0,
                            d = u(a),
                            f = "none" === d ? l : `${l}_split_${d}`,
                            h = (a.tt ? ? 0) !== 0;
                        for (let e of Object.values(a.properties ? ? {})) {
                            let t = o.get(f) || new Set;
                            for (let n of (o.set(f, t), Object.keys(e || {}))) t.has(n) ? h && (c = !1) : t.add(n)
                        }
                        let p = this.collectTargets(a, n, i);
                        if (!p.length) {
                            let e = !1;
                            for (let t in a.properties)
                                if (this.getHandler(t) ? .createCustomTween) {
                                    e = !0;
                                    break
                                }
                            if (!e) continue
                        }
                        let g = p;
                        "none" !== d && p.length > 0 && this.env.win.SplitText && 0 === (g = this.getSplitElements(p, d)).length || this.buildTweensForAction(a, g, r, i, c, void 0, n, t.triggerMetadata ? .role, e)
                    }
                }
                collectTargets(e, t, n) {
                    if (!e.targets) return [];
                    let r = [],
                        i = this.getInteractionForTimeline(n);
                    for (let n of e.targets ? ? []) {
                        let e = this.resolveFn(n, t ? {
                            triggerElement: t
                        } : {}, i);
                        r.push(...e)
                    }
                    return r
                }
                buildTweensForAction(e, t, n, s, a, l, u, c, d, f) {
                    let h = this.shouldFlipEaseForTimeline(s),
                        p = d ? .timelineDef.canvasDuration != null;
                    for (let g in e.properties) {
                        let m = this.getHandler(g);
                        if (!m) continue;
                        let v = e.properties[g] || {};
                        try {
                            let y = e.timing ? .position;
                            y = "string" == typeof y && y.endsWith("ms") ? (0, i.toSeconds)(y) : y ? ? 0;
                            let b = e.timing ? .duration ? ? r.DEFAULTS.DURATION,
                                w = this.getStaggerConfig(e.timing ? .stagger, (0, i.buildEaseContextId)(e.id, "stagger"));
                            w && 0 === b && (b = .001);
                            let T = {
                                    id: e.id,
                                    presetId: e.presetId,
                                    color: e.color
                                },
                                E = {
                                    force3D: !0,
                                    ...!a && {
                                        immediateRender: a
                                    },
                                    data: T,
                                    ...3 !== e.tt && {
                                        duration: (0, i.toSeconds)(b)
                                    },
                                    ...e.timing ? .repeat != null && {
                                        repeat: p && e.timing.repeat < 0 ? 0 : e.timing.repeat
                                    },
                                    ...e.timing ? .repeatDelay != null && {
                                        repeatDelay: (0, i.toSeconds)(e.timing.repeatDelay)
                                    },
                                    ...e.timing ? .yoyo != null && {
                                        yoyo: e.timing.yoyo
                                    },
                                    ...w && {
                                        stagger: w
                                    }
                                };
                            if (e.timing ? .ease != null) {
                                let t = (0, o.convertEaseConfigToGSAP)(e.timing.ease, void 0, (0, i.buildEaseContextId)(e.id, "timing"));
                                null != t && (E.ease = t)
                            }
                            if (h && (E.easeReverse = !0), m.createTweenConfig) {
                                let r = m.createTweenConfig(v, t);
                                l ? .(g, e, r), r.modifiers && (E.modifiers = { ...E.modifiers,
                                    ...r.modifiers
                                }), d && !d.hasVolatileValues && function(e) {
                                    for (let n of [e.to, e.from])
                                        if (n)
                                            for (let e in n) {
                                                var t;
                                                if ("function" == typeof(t = n[e]) || "string" == typeof t && (t.startsWith("+=") || t.startsWith("-=") || t.startsWith("random("))) return !0
                                            }
                                    return !1
                                }(r) && (d.hasVolatileValues = !0);
                                let i = Object.keys(r.from || {}).length > 0,
                                    o = Object.keys(r.to || {}).length > 0,
                                    s = e.tt ? ? 0;
                                if (0 === s && !o) continue;
                                if (1 === s && !i) continue;
                                if (2 === s && !i && !o) continue;
                                else if (3 === s && !o) continue;
                                1 === s ? n.from(t, { ...E,
                                    ...r.from
                                }, y) : 2 === s ? n.fromTo(t, { ...r.from
                                }, { ...E,
                                    ...r.to
                                }, y) : 3 === s ? n.set(t, { ...E,
                                    ...r.to
                                }, y) : n.to(t, { ...E,
                                    ...r.to
                                }, y)
                            } else if (m.createCustomTween) {
                                let r = m.createCustomTween(n, e, v, E, t, y || 0, {
                                    triggerElement: u ? ? null,
                                    timelineRole: c,
                                    subscribeChannel: (e, t) => this.subscribeChannel(s, e, u ? ? null, t),
                                    animation: this.animation
                                });
                                if (r)
                                    if (null != f) f.add(r);
                                    else if (null != d) {
                                    let e = d.cleanupFns ? ? new Set;
                                    d.cleanupFns = e, e.add(r)
                                } else {
                                    let e = this.cleanupFns.get(s) ? ? new Set;
                                    this.cleanupFns.set(s, e), e.add(r)
                                }
                            }
                        } catch (e) {
                            console.error("Error building tween:", e)
                        }
                    }
                }
                analyzeSplitRequirements(e, t, n) {
                    let r = new Map;
                    for (let i of e) {
                        let e = u(i);
                        if ("none" === e) continue;
                        let o = "object" == typeof i.splitText ? i.splitText.mask : void 0;
                        for (let s of this.collectTargets(i, t, n)) {
                            if (s === document.body) continue;
                            let t = r.get(s) || {
                                types: new Set,
                                masks: new Set
                            };
                            r.set(s, t), t.types.add(e), o && t.masks.add(o)
                        }
                    }
                    return r
                }
                getSplitTypeString(e) {
                    return e.has("chars") && !e.has("words") && (e = new Set([...e, "words"])), ["lines", "words", "chars"].filter(t => e.has(t)).join(", ")
                }
                getMaskString(e) {
                    if (0 !== e.size) {
                        if (e.has("lines")) return "lines";
                        if (e.has("words")) return "words";
                        if (e.has("chars")) return "chars"
                    }
                }
                doSplitText(e, t, n, r) {
                    try {
                        let o = c(e.type);
                        for (let s of t) {
                            let t = this.globalSplitRegistry.get(s);
                            if (t) {
                                let n = new Set(c(t.splitTextConfig.type));
                                if (o.every(e => n.has(e))) continue;
                                t.splitInstance.revert(), this.globalSplitRegistry.delete(s), e = {
                                    type: [...new Set([...n, ...o])].join(", "),
                                    mask: e.mask || t.splitTextConfig.mask
                                }
                            }
                            let a = {
                                    type: e.type,
                                    tag: "span"
                                },
                                l = c(e.type),
                                {
                                    mask: u
                                } = e;
                            l.includes("lines") && (n.timeline.data.splitLines = !0, a.linesClass = (0, i.defaultSplitClass)("line"), a.autoSplit = !0, a.onSplit = e => {
                                this.applySplitElementStyles(e, u), "init" !== n.rebuildState ? this.scheduleRebuildForElement(s) : n.rebuildState = "idle"
                            }), l.includes("words") && (a.wordsClass = (0, i.defaultSplitClass)("word")), l.includes("chars") && (a.charsClass = (0, i.defaultSplitClass)("letter")), u && (a.mask = u);
                            let d = new r([s], a);
                            this.applySplitElementStyles(d, u), this.globalSplitRegistry.set(s, {
                                splitInstance: d,
                                splitTextConfig: e
                            }), t && this.scheduleRebuildForElement(s)
                        }
                    } catch (e) {
                        console.error("Error splitting text:", e)
                    }
                }
                applySplitElementStyles(e, t) {
                    let n = [
                        [e.lines, "block"],
                        [e.words, "inline-block"],
                        [e.chars, "inline-block"]
                    ];
                    for (let [r, i] of (t && n.push([e.masks, "lines" === t ? "block" : "inline-block"]), n))
                        for (let e of r) {
                            let {
                                style: t
                            } = e;
                            t.position = "relative", t.display = i
                        }
                }
                scheduleRebuild(e) {
                    if ("building" === e.rebuildState || "rebuild_pending" === e.rebuildState) {
                        e.rebuildState = "rebuild_pending";
                        return
                    }
                    e.rebuildState = "building", this.timelineTargetsCache.delete(e), this.rebuildTimelineOnTheFly(e)
                }
                rebuildTimelineOnTheFly(e) {
                    let t = e.timeline.progress(),
                        n = e.controlTypes ? .has(r.TimelineControlType.LOAD) && 1 !== t,
                        i = e.timeline.isActive() || n;
                    for (let t of (e.timeline.pause(), e.timeline.revert(), e.timeline.clear(), e.cleanupFns ? ? [])) t();
                    if (e.cleanupFns ? .clear(), this.buildTimeline(e), this.padTimelineToCanvas(e), e.timeline.progress(t), e.scrollTriggerIds && e.scrollTriggerConfigs)
                        for (let t of e.scrollTriggerIds) {
                            let n = this.scrollTriggers.get(t),
                                r = e.scrollTriggerConfigs.get(t);
                            if (n && r) {
                                let i = { ...r,
                                    animation: e.timeline
                                };
                                if (n.kill(), this.env.win.ScrollTrigger) {
                                    let e = this.env.win.ScrollTrigger.create(i);
                                    this.scrollTriggers.set(t, e)
                                }
                            }
                        } else i && e.timeline.play();
                    "rebuild_pending" === e.rebuildState ? (e.rebuildState = "building", this.rebuildTimelineOnTheFly(e)) : e.rebuildState = "idle"
                }
                getStaggerConfig;
                getSplitElements(e, t) {
                    let n = [];
                    for (let r of e) {
                        let e = this.globalSplitRegistry.get(r);
                        if (e && c(e.splitTextConfig.type).includes(t)) {
                            let r = e.splitInstance[t];
                            r ? .length && n.push(...r)
                        }
                    }
                    return n.length > 0 ? n : e
                }
                setupScrollControl(e, t, n, r) {
                    if (void 0 === this.env.win.ScrollTrigger) return void console.warn("ScrollTrigger plugin is not available.");
                    let i = `st_${e}_${t}_${r.id||window.crypto.randomUUID().slice(0,8)}`;
                    this.cleanupScrollTrigger(i);
                    let o = this.getTimeline(e, r);
                    if (!o) return void console.warn(`Timeline ${e} not found`);
                    let s = function(e, t, n, r, i, o = !1) {
                        let s = function(e, t, n) {
                                let r = {},
                                    i = e => e && (e.parentElement === document.body || e === document.body);
                                if (void 0 !== e.pin)
                                    if ("boolean" == typeof e.pin) e.pin && !i(t) && (r.pin = e.pin);
                                    else {
                                        let o = n(e.pin, {
                                            triggerElement: t
                                        });
                                        o.length > 0 && !i(o[0]) && (r.pin = o[0])
                                    }
                                if (e.endTrigger) {
                                    let i = n(e.endTrigger, {
                                        triggerElement: t
                                    });
                                    i.length > 0 && (r.endTrigger = i[0])
                                }
                                if (e.scroller) {
                                    let i = n(e.scroller, {
                                        triggerElement: t
                                    });
                                    i.length > 0 ? r.scroller = i[0] : r.scroller = window
                                }
                                return r
                            }(e, t, i),
                            a = [e.enter || "none", e.leave || "none", e.enterBack || "none", e.leaveBack || "none"],
                            l = {
                                trigger: t,
                                markers: e.showMarkers ? ? !1,
                                start: e.clamp ? `clamp(${e.start})` : e.start || "top bottom",
                                end: e.clamp ? `clamp(${e.end})` : e.end || "bottom top",
                                scrub: e.scrub ? ? !1,
                                horizontal: e.horizontal || !1,
                                toggleActions: a.join(" "),
                                id: n,
                                ...s
                            };
                        return !1 !== l.scrub ? l.animation = r : Object.assign(l, function(e, t, n = !1) {
                            let [r, i, o, s] = e, a = e => () => {
                                if (void 0 !== e) switch (e) {
                                    case "play":
                                        n && 0 === t.progress() && t.invalidate(), t.play();
                                        break;
                                    case "pause":
                                        t.pause();
                                        break;
                                    case "resume":
                                        n && 0 === t.progress() && t.invalidate(), t.resume();
                                        break;
                                    case "reverse":
                                        t.reverse();
                                        break;
                                    case "restart":
                                        n && t.invalidate(), t.restart();
                                        break;
                                    case "reset":
                                        t.pause(0);
                                        break;
                                    case "complete":
                                        n && 0 === t.progress() && t.invalidate(), t.progress(1)
                                }
                            }, l = {};
                            return "none" !== r && (l.onEnter = a(r)), "none" !== i && (l.onLeave = a(i)), "none" !== o && (l.onEnterBack = a(o)), "none" !== s && (l.onLeaveBack = a(s)), l
                        }(a, r, o)), l
                    }(n, r, i, o, this.resolveFn, this.getSubOrNull(e, r) ? .hasVolatileValues ? ? !1);
                    try {
                        let t = this.env.win.ScrollTrigger.create(s);
                        this.scrollTriggers.set(i, t);
                        let n = this.getSub(e, r);
                        n.scrollTriggerIds || (n.scrollTriggerIds = new Set), n.scrollTriggerConfigs || (n.scrollTriggerConfigs = new Map), n.scrollTriggerIds.add(i), n.scrollTriggerConfigs.set(i, s)
                    } catch (e) {
                        console.error("Failed to create ScrollTrigger:", e)
                    }
                }
                cleanupScrollTrigger(e) {
                    let t = this.scrollTriggers.get(e);
                    t && (t.kill(), this.scrollTriggers.delete(e))
                }
                getScrollTriggers() {
                    return this.scrollTriggers
                }
                getTimelineTargets(e) {
                    let t = this.timelineTargetsCache.get(e);
                    if (t) return t;
                    for (let n of (t = new WeakSet, e.timelineDef.actions ? ? []))
                        for (let r of this.collectTargets(n, e.elementContext, e.timelineId)) t.add(r);
                    return this.timelineTargetsCache.set(e, t), t
                }
                scheduleRebuildForElement(e) {
                    for (let [, t] of this.subs)
                        for (let [, n] of t) this.getTimelineTargets(n).has(e) && this.scheduleRebuild(n)
                }
            }

            function u(e) {
                return e.splitText ? "string" == typeof e.splitText ? e.splitText : e.splitText.type : "none"
            }

            function c(e) {
                return e.split(", ")
            }
        },
        4060(e, t, n) {
            Object.defineProperty(t, "ConditionEvaluator", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(3428);
            class i {
                getConditionEvaluator;
                sharedObservers = new Map;
                conditionCache = new Map;
                CACHE_TTL = 100;
                constructor(e) {
                    this.getConditionEvaluator = e
                }
                evaluateConditionsForTrigger = async (e, t) => {
                    if (!e ? .length) return !0;
                    let n = e.some(([e]) => e === r.CORE_OPERATORS.OR);
                    return this.evaluateCondition([n ? r.CORE_OPERATORS.OR : r.CORE_OPERATORS.AND, {
                        conditions: e
                    }], t)
                };
                observeConditionsForTrigger = (e, t) => {
                    if (!e ? .length) return () => {};
                    let n = [],
                        r = [];
                    for (let t of e) {
                        let e = this.getConditionEvaluator(t);
                        e ? .isReactive ? n.push(t) : r.push(t[0])
                    }
                    if (0 === n.length) return () => {};
                    let i = n.map(e => this.getOrCreateSharedObserver(e, t));
                    return () => {
                        for (let e of i) e()
                    }
                };
                disposeSharedObservers = () => {
                    for (let [e, t] of this.sharedObservers) try {
                        t.cleanup()
                    } catch (t) {
                        console.error("Error disposing shared observer: %s", e, t)
                    }
                    this.sharedObservers.clear(), this.conditionCache.clear()
                };
                observeCondition = (e, t) => {
                    let n = this.getEvaluator(e);
                    if (n ? .observe) try {
                        return n.observe(e, t)
                    } catch (e) {
                        console.error("Error setting up condition observer:", e)
                    }
                };
                getEvaluator = e => {
                    let [t] = e;
                    return t === r.CORE_OPERATORS.AND || t === r.CORE_OPERATORS.OR ? this.getLogicalEvaluator(t) : this.getConditionEvaluator(e)
                };
                getLogicalEvaluator = e => ({
                    evaluate: async (t, n) => {
                        let [, i, o] = t, {
                            conditions: s
                        } = i || {};
                        if (!Array.isArray(s)) return !1;
                        if (!s.length) return !0;
                        let a = e === r.CORE_OPERATORS.OR,
                            l = 1 === o;
                        for (let e of s) {
                            let t = await this.evaluateCondition(e, n);
                            if (a ? t : !t) return a ? !l : !!l
                        }
                        return a ? !!l : !l
                    },
                    observe: (e, t) => {
                        let [, n] = e, {
                            conditions: r
                        } = n || {};
                        if (!Array.isArray(r)) return () => {};
                        let i = r.map(n => this.observeCondition(n, async () => t(await this.evaluateCondition(e))));
                        return () => i.forEach(e => e && e())
                    }
                });
                evaluateCondition = async (e, t) => {
                    let n = this.generateConditionCacheKey(e, t),
                        r = Date.now(),
                        i = this.conditionCache.get(n);
                    if (i && r - i.timestamp < this.CACHE_TTL) return i.result;
                    let o = this.getEvaluator(e);
                    if (!o) return console.warn(`No evaluator found for condition type '${e[0]}'`), !1;
                    try {
                        let i = await o.evaluate(e, t);
                        return this.conditionCache.set(n, {
                            result: i,
                            timestamp: r
                        }), i
                    } catch (e) {
                        return console.error("Error evaluating condition:", e), !1
                    }
                };
                generateConditionCacheKey = (e, t) => {
                    let [n, r, i] = e, o = r ? JSON.stringify(r) : "", s = t ? `:ctx:${t.id}` : "";
                    return `${n}:${o}${i?":negate":""}${s}`
                };
                invalidateConditionCache = e => {
                    let [t] = e, n = [];
                    for (let e of this.conditionCache.keys()) e.startsWith(`${t}:`) && n.push(e);
                    n.forEach(e => this.conditionCache.delete(e))
                };
                generateObserverKey = e => {
                    let [t, n, r] = e, i = n ? JSON.stringify(n) : "";
                    return `${t}:${i}${r?":negate":""}`
                };
                getOrCreateSharedObserver = (e, t) => {
                    let n = this.generateObserverKey(e),
                        r = this.sharedObservers.get(n);
                    if (!r) {
                        let t = this.getEvaluator(e);
                        if (!t ? .observe) return () => {};
                        let i = new Set,
                            o = t.observe(e, async () => {
                                this.invalidateConditionCache(e);
                                let t = Array.from(i, async e => {
                                    try {
                                        await e()
                                    } catch (e) {
                                        console.error("Error in shared observer callback:", e)
                                    }
                                });
                                await Promise.allSettled(t)
                            });
                        if (!o) return () => {};
                        r = {
                            cleanup: o,
                            refCount: 0,
                            callbacks: i
                        }, this.sharedObservers.set(n, r)
                    }
                    return r.callbacks.add(t), r.refCount++, () => this.releaseSharedObserver(n, t)
                };
                releaseSharedObserver = (e, t) => {
                    let n = this.sharedObservers.get(e);
                    if (n && n.callbacks.delete(t) && (n.refCount = Math.max(0, n.refCount - 1), n.refCount <= 0 && 0 === n.callbacks.size)) {
                        try {
                            n.cleanup()
                        } catch (e) {
                            console.error("Error cleaning up shared observer:", e)
                        }
                        this.sharedObservers.delete(e)
                    }
                }
            }
        },
        8894(e, t, n) {
            Object.defineProperty(t, "ConditionalPlaybackManager", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(3428);
            class i {
                matchMediaInstances = new Map;
                setupConditionalContext = (e, t, n) => {
                    let {
                        conditionalPlayback: i,
                        triggers: o,
                        id: s
                    } = e;
                    if (!i || 0 === i.length) return void t(null);
                    this.cleanup(s);
                    let a = window.gsap ? .matchMedia();
                    if (!a) return void t(null);
                    this.matchMediaInstances.set(s, a);
                    let l = !0,
                        u = o.some(([, {
                            controlType: e
                        }]) => e === r.TimelineControlType.LOAD);
                    a.add(this.buildConditionsObject(i), e => {
                        if (u && !l) return !1;
                        l = !1;
                        let r = this.evaluateConditions(e.conditions || {}, i);
                        return r && "skip-to-end" !== r.behavior || t(r), n
                    })
                };
                cleanup = e => {
                    let t = this.matchMediaInstances.get(e);
                    t && (t.revert(), this.matchMediaInstances.delete(e))
                };
                destroy = () => {
                    for (let [e] of this.matchMediaInstances) this.cleanup(e);
                    this.matchMediaInstances.clear()
                };
                buildConditionsObject = e => {
                    let t = {};
                    for (let n of e) switch (n.type) {
                        case "prefers-reduced-motion":
                            t.prefersReduced = "(prefers-reduced-motion: reduce)";
                            break;
                        case "breakpoint":
                            (n.breakpoints || []).forEach(e => {
                                let n = o[e];
                                n && (t[`breakpoint_${e}`] = n)
                            })
                    }
                    return t.fallback = "(min-width: 0px)", t
                };
                evaluateConditions(e, t) {
                    let n = [];
                    for (let r of t) "prefers-reduced-motion" === r.type && e.prefersReduced && n.push({
                        condition: r,
                        type: "prefers-reduced-motion"
                    }), "breakpoint" === r.type && (r.breakpoints || []).some(t => e[`breakpoint_${t}`]) && n.push({
                        condition: r,
                        type: "breakpoint"
                    });
                    if (0 === n.length) return null;
                    let r = n.find(({
                        condition: e
                    }) => "dont-animate" === e.behavior);
                    if (r) return {
                        behavior: "dont-animate",
                        matchedConditions: {
                            prefersReduced: "prefers-reduced-motion" === r.type,
                            breakpointMatched: "breakpoint" === r.type
                        }
                    };
                    let i = n[0];
                    return {
                        behavior: i.condition.behavior,
                        matchedConditions: {
                            prefersReduced: "prefers-reduced-motion" === i.type,
                            breakpointMatched: "breakpoint" === i.type
                        }
                    }
                }
            }
            let o = {
                tiny: "(max-width: 479px) and (min-width: 0px)",
                small: "(max-width: 767px) and (min-width: 480px)",
                medium: "(max-width: 991px) and (min-width: 768px)",
                main: "(min-width: 992px)"
            }
        },
        6051(e, t) {
            Object.defineProperty(t, "ContinuousChannelManager", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                coordinator;
                resolveRole;
                channels;
                animation;
                constructor(e, t) {
                    this.coordinator = e, this.resolveRole = t, this.channels = new Map, this.animation = e.animation
                }
                isPreviewEnabled() {
                    return !(window.__wf_ix3 && !1 === window.__wf_ix3_continuous_preview)
                }
                registerChannel(e) {
                    let t = this.resolveRole(e.role);
                    if (!t) return console.warn(`IX3 Continuous: Failed to resolve role '${e.role}' to timeline ID. Channel registration skipped.`), null;
                    let n = new r({
                        timelineId: t,
                        initialValue: e.initialValue,
                        element: e.element,
                        smoothing: e.smoothing,
                        animation: this.animation,
                        isPreviewEnabled: () => this.isPreviewEnabled()
                    }, this.coordinator);
                    return this.channels.set(t, n), n
                }
                fireInterval(e, t) {
                    let n = this.resolveRole(e);
                    n && this.coordinator.fireInterval(n, t.element ? ? null, {
                        targetIndex: t.targetIndex,
                        pluginPayload: t.pluginPayload
                    })
                }
                registerIntervalHandler(e, t) {
                    this.coordinator.registerIntervalHandler(e, t)
                }
                getMetadata(e) {
                    let t = this.resolveRole(e);
                    return t ? this.coordinator.getTriggerMetadata(t) : null
                }
                publishChannel(e, t, n) {
                    this.coordinator.publishChannel(e, t, n)
                }
                cleanup() {
                    for (let e of this.channels.values()) e.destroy();
                    this.channels.clear()
                }
            }
            class r {
                coordinator;
                proxy;
                setter;
                timelineId;
                element;
                isPreviewEnabled;
                constructor(e, t) {
                    this.coordinator = t, this.proxy = {
                        p: e.initialValue
                    }, this.timelineId = e.timelineId, this.element = e.element ? ? null, this.isPreviewEnabled = e.isPreviewEnabled;
                    let n = (e.smoothing ? ? 0) / 1e3;
                    this.setter = n > 0 ? e.animation.quickTo(this.proxy, "p", {
                        duration: n,
                        ease: "power2.out",
                        onUpdate: () => this.updateTimeline(this.proxy.p)
                    }) : null, this.updateTimeline(e.initialValue)
                }
                setProgress(e) {
                    this.setter ? this.setter(e) : (this.proxy.p = e, this.updateTimeline(e))
                }
                setImmediate(e) {
                    this.setter ? this.setter(e, e) : (this.proxy.p = e, this.updateTimeline(e))
                }
                destroy() {
                    this.setter ? .tween.kill()
                }
                updateTimeline(e) {
                    this.isPreviewEnabled() && this.coordinator.setContinuousProgress(this.timelineId, e, this.element)
                }
            }
        },
        3761(e, t, n) {
            Object.defineProperty(t, "EventManager", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(7745);
            class i {
                static instance;
                elementHandlers = new WeakMap;
                eventTypeHandlers = new Map;
                customEventTypes = new Map;
                delegatedHandlers = new Map;
                batchedEvents = new Map;
                batchFrameId = null;
                defaultMaxBatchSize = 10;
                defaultMaxBatchAge = 100;
                defaultErrorHandler = (e, t) => console.error("[EventManager] Error handling event:", e, t);
                static getInstance() {
                    return i.instance || (i.instance = new i), i.instance
                }
                addEventListener(e, t, n, r) {
                    try {
                        var i;
                        let s = r ? .kind === "custom",
                            a = { ...s ? {
                                    delegate: !1,
                                    passive: !0,
                                    batch: !1
                                } : o[t] || {},
                                ...r,
                                errorHandler: r ? .errorHandler || this.defaultErrorHandler
                            };
                        if (!s && "load" === t && "complete" in e && e.complete) return setTimeout(() => {
                            try {
                                n(new Event("load"), e)
                            } catch (e) {
                                a.errorHandler ? .(e, new Event("load"))
                            }
                        }, 0), () => {};
                        if (!e || !e.addEventListener) throw Error("Invalid element provided to addEventListener");
                        let l = this.createWrappedHandler(n, a, e),
                            u = this.registerHandler(e, t, n, l.handler, a, s, l.cleanup);
                        if (s) return () => {
                            this.removeHandler(e, t, n, !0), u.cleanup ? .()
                        };
                        let c = new AbortController;
                        return this.ensureDelegatedHandler(t), a.delegate || (i = a, ("window" === i.target ? window : "document" === i.target ? document : null) || e).addEventListener(t, u.wrappedHandler, {
                            passive: a.passive,
                            signal: c.signal
                        }), () => {
                            c.abort(), this.removeHandler(e, t, n, !1)
                        }
                    } catch (e) {
                        return r ? .errorHandler ? .(e, new Event(t)), () => {}
                    }
                }
                emit(e, t, n, r) {
                    try {
                        let i = this.customEventTypes.get(e);
                        if (!i ? .size) return;
                        let o = new CustomEvent(e, {
                            detail: t,
                            bubbles: r ? .bubbles ? ? !0,
                            cancelable: !0
                        });
                        for (let t of i)
                            if (!n || n === t.element || t.element.contains(n)) try {
                                t.wrappedHandler(o)
                            } catch (t) {
                                console.error(`[EventManager] Error emitting ${e}:`, t)
                            }
                    } catch (t) {
                        console.error(`[EventManager] Error emitting custom event ${e}:`, t)
                    }
                }
                dispose() {
                    for (let [, e] of (null !== this.batchFrameId && (cancelAnimationFrame(this.batchFrameId), this.batchFrameId = null, this.batchedEvents.clear()), this.delegatedHandlers)) e.controller.abort();
                    for (let [, e] of this.eventTypeHandlers)
                        for (let t of e) t.cleanup ? .();
                    for (let [, e] of this.customEventTypes)
                        for (let t of e) t.cleanup ? .();
                    this.delegatedHandlers.clear(), this.elementHandlers = new WeakMap, this.eventTypeHandlers.clear(), this.customEventTypes.clear()
                }
                createWrappedHandler(e, t, n) {
                    let i = r => {
                        try {
                            let i = "window" === t.target ? window : "document" === t.target ? document : n;
                            e(r, i)
                        } catch (e) {
                            (t.errorHandler || this.defaultErrorHandler)(e, r)
                        }
                    };
                    if (t.batch) {
                        let e = e => {
                            let t = e.type || "unknown";
                            this.batchedEvents.has(t) || this.batchedEvents.set(t, []), this.batchedEvents.get(t).push({
                                event: e,
                                target: n,
                                timestamp: e.timeStamp || performance.now()
                            }), null == this.batchFrameId && (this.batchFrameId = requestAnimationFrame(() => this.processBatchedEvents()))
                        };
                        return t.throttleMs && t.throttleMs > 0 ? {
                            handler: e,
                            cleanup: (0, r.throttle)(i, t.throttleMs).cancel
                        } : t.debounceMs && t.debounceMs > 0 ? {
                            handler: e,
                            cleanup: (0, r.debounce)(i, t.debounceMs).cancel
                        } : {
                            handler: e
                        }
                    }
                    if (t.throttleMs && t.throttleMs > 0) {
                        let e = (0, r.throttle)(i, t.throttleMs);
                        if (t.debounceMs && t.debounceMs > 0) {
                            let n = (0, r.debounce)(e, t.debounceMs);
                            return {
                                handler: n,
                                cleanup: () => {
                                    n.cancel ? .(), e.cancel ? .()
                                }
                            }
                        }
                        return {
                            handler: e,
                            cleanup: e.cancel
                        }
                    }
                    if (t.debounceMs && t.debounceMs > 0) {
                        let e = (0, r.debounce)(i, t.debounceMs);
                        return {
                            handler: e,
                            cleanup: e.cancel
                        }
                    }
                    return {
                        handler: i
                    }
                }
                processBatchedEvents() {
                    if (null === this.batchFrameId) return;
                    this.batchFrameId = null;
                    let e = performance.now();
                    for (let [t, n] of this.batchedEvents) {
                        let r = this.eventTypeHandlers.get(t);
                        if (!r ? .size) continue;
                        let i = n.filter(t => e - t.timestamp < this.defaultMaxBatchAge);
                        if (!i.length) continue;
                        i.sort((e, t) => e.timestamp - t.timestamp);
                        let o = i.length <= this.defaultMaxBatchSize ? i : i.slice(-this.defaultMaxBatchSize);
                        for (let {
                                event: t,
                                target: n
                            } of o)
                            for (let i of (t.batchTimestamp = e, t.batchSize = o.length, r)) try {
                                i.config.delegate ? i.wrappedHandler(t) : ("window" === i.config.target || "document" === i.config.target || n === t.target || n.contains(t.target)) && i.wrappedHandler(t)
                            } catch (e) {
                                (i.config.errorHandler || this.defaultErrorHandler)(e, t)
                            }
                    }
                    this.batchedEvents.clear()
                }
                ensureDelegatedHandler(e) {
                    if (this.delegatedHandlers.has(e)) return;
                    let t = new AbortController,
                        n = t => {
                            let n = this.eventTypeHandlers.get(e);
                            if (n ? .size) {
                                for (let r of t.composedPath ? t.composedPath() : t.target ? [t.target] : [])
                                    if (r instanceof Element) {
                                        for (let i of n)
                                            if (i.config.delegate && (i.element === r || i.element.contains(r))) try {
                                                i.wrappedHandler(t)
                                            } catch (t) {
                                                console.error(`[EventDelegator] Error for ${e}:`, t)
                                            }
                                        if (!t.bubbles) break
                                    }
                            }
                        },
                        r = ["focus", "blur", "focusin", "focusout", "mouseenter", "mouseleave"].includes(e);
                    document.addEventListener(e, n, {
                        passive: !1,
                        capture: r,
                        signal: t.signal
                    }), this.delegatedHandlers.set(e, {
                        handler: n,
                        controller: t
                    })
                }
                registerHandler(e, t, n, r, i, o, s) {
                    let a = {
                        element: e,
                        originalHandler: n,
                        wrappedHandler: r,
                        config: i,
                        cleanup: s
                    };
                    if (o) {
                        let e = this.customEventTypes.get(t) || new Set;
                        e.add(a), this.customEventTypes.set(t, e)
                    } else {
                        let n = this.elementHandlers.get(e) || new Set;
                        n.add(a), this.elementHandlers.set(e, n);
                        let r = this.eventTypeHandlers.get(t) || new Set;
                        r.add(a), this.eventTypeHandlers.set(t, r)
                    }
                    return a
                }
                removeHandler(e, t, n, r) {
                    if (r) {
                        let r = this.customEventTypes.get(t);
                        if (r ? .size) {
                            for (let i of r)
                                if (i.element === e && i.originalHandler === n) {
                                    r.delete(i), r.size || this.customEventTypes.delete(t), i.cleanup ? .();
                                    break
                                }
                        }
                    } else {
                        let r, i = this.eventTypeHandlers.get(t);
                        if (!i ? .size) return;
                        let o = this.elementHandlers.get(e);
                        if (!o ? .size) return;
                        for (let e of o)
                            if (e.originalHandler === n) {
                                r = e;
                                break
                            }
                        if (r) {
                            if (o.delete(r), i.delete(r), !i.size) {
                                this.eventTypeHandlers.delete(t);
                                let e = this.delegatedHandlers.get(t);
                                e && (e.controller.abort(), this.delegatedHandlers.delete(t))
                            }
                            r.cleanup ? .()
                        }
                    }
                }
            }
            let o = {
                load: {
                    delegate: !1,
                    passive: !0
                },
                DOMContentLoaded: {
                    target: "document",
                    passive: !0
                },
                readystatechange: {
                    target: "document",
                    passive: !0
                },
                beforeunload: {
                    target: "window",
                    passive: !1
                },
                unload: {
                    target: "window",
                    passive: !1
                },
                pageshow: {
                    target: "window",
                    passive: !0
                },
                pagehide: {
                    target: "window",
                    passive: !0
                },
                click: {
                    delegate: !0,
                    passive: !1
                },
                dblclick: {
                    delegate: !0,
                    passive: !0
                },
                mousedown: {
                    delegate: !0,
                    passive: !0
                },
                mouseup: {
                    delegate: !0,
                    passive: !0
                },
                mousemove: {
                    delegate: !0,
                    batch: !0,
                    passive: !0
                },
                mouseenter: {
                    delegate: !1,
                    passive: !0
                },
                mouseleave: {
                    delegate: !1,
                    passive: !0
                },
                mouseout: {
                    delegate: !0,
                    passive: !0
                },
                contextmenu: {
                    delegate: !0,
                    passive: !1
                },
                wheel: {
                    delegate: !0,
                    throttleMs: 16,
                    passive: !0,
                    batch: !0
                },
                touchstart: {
                    delegate: !0,
                    passive: !0
                },
                touchend: {
                    delegate: !0,
                    passive: !1
                },
                touchmove: {
                    delegate: !0,
                    batch: !0,
                    passive: !0
                },
                touchcancel: {
                    delegate: !0,
                    passive: !0
                },
                pointerdown: {
                    delegate: !0,
                    passive: !0
                },
                pointerup: {
                    delegate: !0,
                    passive: !0
                },
                pointermove: {
                    delegate: !0,
                    batch: !0,
                    passive: !0
                },
                pointerenter: {
                    delegate: !1,
                    passive: !0
                },
                pointerleave: {
                    delegate: !1,
                    passive: !0
                },
                pointercancel: {
                    delegate: !0,
                    passive: !0
                },
                keydown: {
                    delegate: !0,
                    passive: !1
                },
                keyup: {
                    delegate: !0,
                    passive: !1
                },
                keypress: {
                    delegate: !0,
                    passive: !1
                },
                input: {
                    delegate: !0,
                    passive: !1
                },
                change: {
                    delegate: !0,
                    passive: !1
                },
                focus: {
                    delegate: !1,
                    passive: !0
                },
                blur: {
                    delegate: !1,
                    passive: !0
                },
                focusin: {
                    delegate: !0,
                    passive: !0
                },
                focusout: {
                    delegate: !0,
                    passive: !0
                },
                submit: {
                    delegate: !0,
                    passive: !1
                },
                reset: {
                    delegate: !0,
                    passive: !1
                },
                select: {
                    delegate: !0,
                    passive: !0
                },
                selectionchange: {
                    target: "document",
                    passive: !0
                },
                dragstart: {
                    delegate: !0,
                    passive: !1
                },
                drag: {
                    delegate: !0,
                    passive: !0
                },
                dragenter: {
                    delegate: !0,
                    passive: !1
                },
                dragleave: {
                    delegate: !0,
                    passive: !0
                },
                dragover: {
                    delegate: !0,
                    passive: !1
                },
                drop: {
                    delegate: !0,
                    passive: !1
                },
                dragend: {
                    delegate: !0,
                    passive: !0
                },
                play: {
                    delegate: !0,
                    passive: !0
                },
                pause: {
                    delegate: !0,
                    passive: !0
                },
                ended: {
                    delegate: !0,
                    passive: !0
                },
                timeupdate: {
                    delegate: !0,
                    batch: !0,
                    passive: !0
                },
                canplay: {
                    delegate: !0,
                    passive: !0
                },
                canplaythrough: {
                    delegate: !0,
                    passive: !0
                },
                loadeddata: {
                    delegate: !0,
                    passive: !0
                },
                animationstart: {
                    delegate: !0,
                    passive: !0
                },
                animationend: {
                    delegate: !0,
                    passive: !0
                },
                animationiteration: {
                    delegate: !0,
                    passive: !0
                },
                transitionstart: {
                    delegate: !0,
                    passive: !0
                },
                transitionend: {
                    delegate: !0,
                    passive: !0
                },
                transitionrun: {
                    delegate: !0,
                    passive: !0
                },
                transitioncancel: {
                    delegate: !0,
                    passive: !0
                },
                scroll: {
                    delegate: !1,
                    throttleMs: 16,
                    passive: !0
                },
                resize: {
                    target: "window",
                    throttleMs: 16,
                    passive: !0
                },
                intersection: {
                    delegate: !1,
                    passive: !0
                },
                orientationchange: {
                    target: "window",
                    passive: !0
                },
                visibilitychange: {
                    target: "document",
                    passive: !0
                },
                storage: {
                    target: "window",
                    passive: !0
                },
                online: {
                    target: "window",
                    passive: !0
                },
                offline: {
                    target: "window",
                    passive: !0
                },
                hashchange: {
                    target: "window",
                    passive: !0
                },
                popstate: {
                    target: "window",
                    passive: !0
                },
                copy: {
                    delegate: !0,
                    passive: !1
                },
                cut: {
                    delegate: !0,
                    passive: !1
                },
                paste: {
                    delegate: !0,
                    passive: !1
                },
                compositionstart: {
                    delegate: !0,
                    passive: !1
                },
                compositionupdate: {
                    delegate: !0,
                    passive: !1
                },
                compositionend: {
                    delegate: !0,
                    passive: !1
                },
                beforeinput: {
                    delegate: !0,
                    passive: !1
                }
            }
        },
        440(e, t, n) {
            Object.defineProperty(t, "IX3", {
                enumerable: !0,
                get: function() {
                    return g
                }
            });
            let r = n(3428),
                i = n(3761),
                o = n(8434),
                s = n(3114),
                a = n(4060),
                l = n(8894),
                u = n(4330),
                c = n(7745),
                d = n(1906),
                f = n(8397),
                h = n(286),
                p = n(9944);
            class g {
                env;
                static instance;
                pluginReg;
                timelineDefs;
                interactions;
                triggeredElements;
                triggerCleanupFunctions;
                continuousCleanups;
                conditionalPlaybackManager;
                triggerStrategies;
                windowSize;
                prevWindowSize;
                windowResizeSubscribers;
                debouncedWindowResize;
                bodyResizeObserver;
                triggerObservers;
                timelineRefCounts;
                interactionTimelineRefs;
                timelineToInteractionId;
                reactiveCallbackQueues;
                debouncedReactiveCallback;
                pendingReactiveUpdates;
                reactiveExecutionContext;
                componentScopeSelectors;
                eventMgr;
                loadInteractions;
                coordinator;
                conditionEval;
                constructor(e) {
                    this.env = e, this.pluginReg = new u.PluginRegistry, this.timelineDefs = new Map, this.interactions = new Map, this.triggeredElements = new Map, this.triggerCleanupFunctions = new Map, this.continuousCleanups = new Map, this.windowSize = {
                        w: 0,
                        h: 0
                    }, this.prevWindowSize = {
                        w: 0,
                        h: 0
                    }, this.windowResizeSubscribers = new Set, this.debouncedWindowResize = (0, c.debounce)(() => {
                        for (let e of this.windowResizeSubscribers) e()
                    }, 200), this.bodyResizeObserver = null, this.triggerObservers = new Map, this.timelineRefCounts = new Map, this.interactionTimelineRefs = new Map, this.timelineToInteractionId = new Map, this.reactiveCallbackQueues = new Map, this.pendingReactiveUpdates = new Map, this.reactiveExecutionContext = new Set, this.componentScopeSelectors = new Map, this.eventMgr = i.EventManager.getInstance(), this.loadInteractions = [], this.addEventListener = this.eventMgr.addEventListener.bind(this.eventMgr), this.emit = this.eventMgr.emit.bind(this.eventMgr), this.resolveTargets = (e, t, n) => {
                        let r = n ? .scope ? .type === "component" ? n.scope : null,
                            i = r ? .componentId ? this.getComponentScopeSelector(r.componentId) : null,
                            o = r ? .variants ? .length ? r.variants : null,
                            s = this.resolveTargetsImpl(e, t, n, i),
                            a = i && t.triggerElement ? this.filterByInstance(s, i, t.triggerElement) : s;
                        return o && i ? this.filterByVariant(a, i, o) : a
                    }, this.isTargetDynamic = e => !!this.pluginReg.getTargetResolver(e) ? .isDynamic, this.getInteractionForTimeline = e => {
                        let t = this.timelineToInteractionId.get(e);
                        if (t) return this.interactions.get(t)
                    }, window.addEventListener("resize", this.debouncedWindowResize), this.coordinator = new o.AnimationCoordinator(this.timelineDefs, this.pluginReg.getActionHandler.bind(this.pluginReg), this.pluginReg.getTargetResolver.bind(this.pluginReg), this.resolveTargets, this.getInteractionForTimeline, e), this.conditionEval = new a.ConditionEvaluator(this.pluginReg.getConditionEvaluator.bind(this.pluginReg)), this.conditionalPlaybackManager = new l.ConditionalPlaybackManager, this.triggerStrategies = new Map([
                        [r.TimelineControlType.STANDARD, new d.StandardTriggerStrategy(this.runTrigger.bind(this), this.runTimelineAction.bind(this), this.skipToEndState.bind(this), this.getTimelineIdsForRole.bind(this), this.resolveAssignedTimelineIds.bind(this))],
                        [r.TimelineControlType.LOAD, new f.LoadTriggerStrategy(this.runTrigger.bind(this), this.runTimelineAction.bind(this), this.skipToEndState.bind(this), this.loadInteractions, this.coordinator.getTimeline.bind(this.coordinator))],
                        [r.TimelineControlType.SCROLL, new h.ScrollTriggerStrategy(this.runTrigger.bind(this), this.runTimelineAction.bind(this), this.skipToEndState.bind(this), this.coordinator.setupScrollControl.bind(this.coordinator))],
                        [r.TimelineControlType.CONTINUOUS, new p.ContinuousTriggerStrategy(this.runTrigger.bind(this), this.runTimelineAction.bind(this), this.skipToEndState.bind(this), this.continuousCleanups, this.triggerCleanupFunctions, this.coordinator, this.getTimelineIdForRole.bind(this))]
                    ]), this.debouncedReactiveCallback = (0, c.debounce)(() => this.processPendingReactiveUpdates(), 16, {
                        leading: !1,
                        trailing: !0,
                        maxWait: 100
                    })
                }
                getCoordinator() {
                    return this.coordinator
                }
                addEventListener;
                emit;
                static async init(e) {
                    return this.instance = new g(e), this.instance
                }
                async registerPlugin(e) {
                    await this.pluginReg.registerPlugin(e)
                }
                register(e, t) {
                    if (t ? .length)
                        for (let e of t) this.timelineDefs.set(e.id, e);
                    if (e ? .length) {
                        for (let t of e) {
                            if (this.interactions.has(t.id)) {
                                console.warn(`Interaction with ID ${t.id} already exists. Use update() to modify it.`);
                                continue
                            }
                            this.interactions.set(t.id, t);
                            let e = new Set;
                            this.interactionTimelineRefs.set(t.id, e), this.conditionalPlaybackManager.setupConditionalContext(t, n => {
                                for (let n of t.timelineIds ? ? []) e.add(n), this.incrementTimelineRefCount(n), this.timelineToInteractionId.set(n, t.id);
                                for (let e of (0, s.analyzeSharedTimelineGroups)(t, this.timelineDefs, this.resolveTargets, this.pluginReg.getActionHandler.bind(this.pluginReg), this.coordinator.isDynamicTimeline.bind(this.coordinator))) this.coordinator.registerSharedGroup(e.primary, e.members);
                                for (let e of t.timelineIds ? ? []) this.coordinator.createTimeline(e, t);
                                for (let e of t.triggers ? ? []) this.bindTrigger(e, t, n)
                            }, () => {
                                this.cleanupInteractionAnimations(t.id)
                            })
                        }
                        for (let e of this.loadInteractions) e();
                        if (this.loadInteractions.length = 0, this.coordinator.getScrollTriggers().size > 0) {
                            this.windowResizeSubscribers.add(() => {
                                this.windowSize.h = window.innerHeight, this.windowSize.w = window.innerWidth
                            });
                            let e = (0, c.debounce)(() => {
                                    this.prevWindowSize.h = this.windowSize.h, this.prevWindowSize.w = this.windowSize.w
                                }, 210, {
                                    leading: !0,
                                    trailing: !1
                                }),
                                t = (0, c.debounce)(() => {
                                    if (this.windowSize.h === this.prevWindowSize.h && this.windowSize.w === this.prevWindowSize.w)
                                        for (let e of this.coordinator.getScrollTriggers().values()) e.refresh()
                                }, 210);
                            this.bodyResizeObserver = new ResizeObserver(n => {
                                for (let r of n) r.target === document.body && (e(), t())
                            }), document.body && this.bodyResizeObserver.observe(document.body)
                        }
                    }
                    return this
                }
                remove(e) {
                    for (let t of Array.isArray(e) ? e : [e]) {
                        if (!this.interactions.has(t)) {
                            console.warn(`Interaction with ID ${t} not found, skipping removal.`);
                            continue
                        }
                        this.cleanupTriggerObservers(t), this.unbindAllTriggers(t), this.cleanupContinuousControlsForInteraction(t);
                        let e = this.decrementTimelineReferences(t);
                        this.cleanupUnusedTimelines(e), this.interactions.delete(t), this.triggeredElements.delete(t), this.interactionTimelineRefs.delete(t), this.conditionalPlaybackManager.cleanup(t)
                    }
                    return this
                }
                update(e, t) {
                    let n = Array.isArray(e) ? e : [e],
                        r = t ? Array.isArray(t) ? t : [t] : [];
                    for (let e of (r.length && this.register([], r), n)) {
                        let {
                            id: t
                        } = e;
                        if (!this.interactions.has(t)) {
                            console.warn(`Interaction with ID ${t} not found, registering as new.`), this.register([e], []);
                            continue
                        }
                        this.remove(t), this.register([e], [])
                    }
                    return this
                }
                destroyTimelineInstance(e) {
                    this.coordinator.destroy(e);
                    let t = `st_${e}_`;
                    for (let [e, n] of this.coordinator.getScrollTriggers().entries()) e.startsWith(t) && (n.kill(), this.coordinator.getScrollTriggers().delete(e))
                }
                cleanupUnusedTimelines(e) {
                    let t = new Set;
                    for (let n of e) {
                        let e = this.timelineDefs.get(n);
                        e ? .reuse ? .sourceTimelineId && t.add(this.coordinator.resolveSourceTimelineId(n))
                    }
                    for (let t of e) this.destroyTimelineInstance(t), this.timelineDefs.delete(t);
                    for (let n of t) e.has(n) || this.coordinator.recomputeFlipEaseForSource(n)
                }
                destroy() {
                    let e = Array.from(this.interactions.keys());
                    this.remove(e), this.loadInteractions.length = 0, this.env.win.ScrollTrigger && (this.env.win.ScrollTrigger.getAll().forEach(e => e.kill()), this.bodyResizeObserver ? .disconnect(), this.bodyResizeObserver = null), window.removeEventListener("resize", this.debouncedWindowResize), this.cleanupAllContinuousControls();
                    try {
                        this.debouncedReactiveCallback.cancel()
                    } catch (e) {
                        console.error("Error canceling debounced callback during destroy:", e)
                    }
                    this.pendingReactiveUpdates.clear(), this.reactiveCallbackQueues.clear(), this.reactiveExecutionContext.clear(), this.conditionEval.disposeSharedObservers(), this.conditionalPlaybackManager.destroy(), this.windowResizeSubscribers.clear(), this.timelineDefs.clear(), this.interactions.clear(), this.triggeredElements.clear(), this.triggerCleanupFunctions.clear(), this.triggerObservers.clear(), this.interactionTimelineRefs.clear(), this.timelineToInteractionId.clear(), this.componentScopeSelectors.clear()
                }
                bindTrigger(e, t, n) {
                    let i = t.id,
                        o = this.pluginReg.getTriggerHandler(e),
                        s = e[1];
                    if (!o) return void console.warn("No trigger handler:", e[0]);
                    let a = this.triggerCleanupFunctions.get(i) || new Map;
                    this.triggerCleanupFunctions.set(i, a);
                    let {
                        delay: l = 0,
                        controlType: u
                    } = s, d = (0, c.toSeconds)(l), f = this.eventMgr, h = e[2], p = [];
                    h && (p = this.resolveTargets(h, {}, t));
                    let g = u && (0, c.isValidControlType)(u) ? u : r.TimelineControlType.STANDARD,
                        m = this.triggerStrategies.get(g);
                    m ? m.bind(e, t, {
                        interactionId: i,
                        elements: p,
                        triggerHandler: o,
                        eventManager: f,
                        conditionalContext: n,
                        cleanupMap: a,
                        delay: d || 0
                    }) : console.warn("No strategy found for control type:", u), s.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t)
                }
                setupTriggerReactiveMonitoring(e, t) {
                    let {
                        conditionalLogic: n
                    } = e[1];
                    if (!n) return;
                    let r = `${t.id}:${t.triggers.indexOf(e)}`;
                    try {
                        let i = this.conditionEval.observeConditionsForTrigger(n.conditions, async () => {
                                await this.executeReactiveCallbackSafely(t.id, r, async () => {
                                    let r = await this.conditionEval.evaluateConditionsForTrigger(n.conditions, t) ? n.ifTrue : n.ifFalse;
                                    if (r) {
                                        let n = this.triggeredElements.get(t.id);
                                        if (!n) return;
                                        let i = this.resolveAssignedTimelineIds(e, t);
                                        if (i ? .length === 0) return;
                                        let o = i ? ? t.timelineIds ? ? [],
                                            s = [];
                                        for (let e of n)
                                            for (let t of o) s.push({
                                                timelineId: t,
                                                element: e,
                                                action: "pause-reset"
                                            });
                                        await this.executeTimelineOperationsAsync(s), n.forEach(e => {
                                            this.executeConditionalOutcome(r, e, t, i)
                                        })
                                    }
                                })
                            }),
                            o = this.triggerObservers.get(t.id);
                        o || (o = new Map, this.triggerObservers.set(t.id, o)), o.set(r, i)
                    } catch (e) {
                        console.error("Error setting up trigger reactive monitoring:", e)
                    }
                }
                async executeReactiveCallbackSafely(e, t, n) {
                    this.reactiveExecutionContext.has(t) || (this.pendingReactiveUpdates.set(t, n), this.debouncedReactiveCallback())
                }
                async processPendingReactiveUpdates() {
                    if (0 === this.pendingReactiveUpdates.size) return;
                    let e = new Map(this.pendingReactiveUpdates);
                    this.pendingReactiveUpdates.clear();
                    let t = new Map;
                    for (let [n, r] of e) {
                        let e = n.split(":")[0];
                        t.has(e) || t.set(e, []), t.get(e).push({
                            triggerKey: n,
                            callback: r
                        })
                    }
                    for (let [e, n] of t) await this.processInteractionReactiveUpdates(e, n)
                }
                async processInteractionReactiveUpdates(e, t) {
                    let n = this.reactiveCallbackQueues.get(e);
                    if (n) try {
                        await n
                    } catch (e) {
                        console.error("Error waiting for pending reactive callback:", e)
                    }
                    let r = this.executeInteractionUpdates(t);
                    this.reactiveCallbackQueues.set(e, r);
                    try {
                        await r
                    } finally {
                        this.reactiveCallbackQueues.get(e) === r && this.reactiveCallbackQueues.delete(e)
                    }
                }
                async executeInteractionUpdates(e) {
                    for (let {
                            triggerKey: t,
                            callback: n
                        } of e) {
                        this.reactiveExecutionContext.add(t);
                        try {
                            await n()
                        } catch (e) {
                            console.error("Error in reactive callback for %s:", t, e)
                        } finally {
                            this.reactiveExecutionContext.delete(t)
                        }
                    }
                }
                async executeTimelineOperationsAsync(e) {
                    if (e.length) return new Promise(t => {
                        Promise.resolve().then(() => {
                            e.forEach(({
                                timelineId: e,
                                element: t,
                                action: n
                            }) => {
                                try {
                                    if (!this.timelineDefs.has(e)) return void console.warn(`Timeline ${e} not found, skipping operation`);
                                    if (!t.isConnected) return void console.warn("Element no longer in DOM, skipping timeline operation");
                                    "pause-reset" === n ? this.coordinator.pause(e, t, 0) : console.warn(`Unknown timeline action: ${n}`)
                                } catch (t) {
                                    console.error("Error executing timeline operation: %s, %s", n, e, t)
                                }
                            }), t()
                        })
                    })
                }
                getTimelineIdsForRole(e, t) {
                    let n = e.timelineIds ? ? [],
                        r = n.filter(e => {
                            let n = this.timelineDefs.get(e);
                            return n ? .triggerMetadata ? .role === t
                        });
                    if (0 === r.length && n.length > 0) {
                        let r = n.map(e => this.timelineDefs.get(e) ? .triggerMetadata ? .role || "none").join(", ");
                        console.warn(`IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${r}]`)
                    }
                    return r
                }
                getTimelineIdForRole(e, t) {
                    return this.getTimelineIdsForRole(e, t)[0]
                }
                getTimelineIdsForGroup(e, t) {
                    return (e.timelineIds ? ? []).filter(e => {
                        let n = this.timelineDefs.get(e);
                        return n ? .groupId === t
                    })
                }
                resolveAssignedTimelineIds(e, t) {
                    let n = e[1];
                    return null === n.assignedGroupId ? [] : n.assignedGroupId ? this.getTimelineIdsForGroup(t, n.assignedGroupId) : n.assignedTimelineRole ? this.getTimelineIdsForRole(t, n.assignedTimelineRole) : void 0
                }
                async runTrigger(e, t, n, r, i) {
                    if (window.__wf_ix3) return;
                    let o = e[1],
                        s = this.triggeredElements.get(n);
                    s || this.triggeredElements.set(n, s = new Set), s.add(t);
                    let a = this.interactions.get(n);
                    if (!a || !a.triggers.includes(e)) return;
                    let l = r ? ? a.timelineIds ? ? [];
                    if (o.conditionalLogic) try {
                        let e = await this.conditionEval.evaluateConditionsForTrigger(o.conditionalLogic.conditions, a) ? o.conditionalLogic.ifTrue : o.conditionalLogic.ifFalse;
                        e && this.executeConditionalOutcome(e, t, a, l)
                    } catch (e) {
                        console.error("Error evaluating trigger conditional logic:", e), l.forEach(e => this.runTimelineAction(e, o, t, i))
                    } else l.forEach(e => this.runTimelineAction(e, o, t, i))
                }
                skipToEndState(e, t, n, r, i) {
                    (r ? ? e.timelineIds ? ? []).forEach(e => {
                        let r, o = this.coordinator.getTimeline(e, t);
                        if (!o) return;
                        let s = i ? ? (n ? this.getEffectivePlaybackConfig(e, n).control : void 0);
                        if ("pause" !== s && "stop" !== s && "none" !== s) {
                            switch (s) {
                                case "reverse":
                                case "reverseFlipEase":
                                    r = 0;
                                    break;
                                case "togglePlayReverse":
                                case "togglePlayReverseFlipEase":
                                    r = Math.round(1 - o.totalProgress());
                                    break;
                                case "resume":
                                    r = +!o.reversed();
                                    break;
                                default:
                                    r = 1
                            }
                            this.coordinator.setTotalProgress(e, r, t ? ? null)
                        }
                    })
                }
                executeConditionalOutcome(e, t, n, r) {
                    let i, {
                            control: o,
                            targetTimelineId: s,
                            speed: a,
                            jump: l,
                            delay: u = 0
                        } = e,
                        d = (0, c.toSeconds)(u);
                    if ("none" === o) return;
                    let f = n.timelineIds ? ? [];
                    if (s) {
                        if (!f.includes(s)) return void console.warn(`Target timeline '${s}' not found in interaction '${n.id}'. Available timelines: ${f.join(", ")}`);
                        i = [s]
                    } else i = f;
                    if (r) {
                        let e = new Set(r);
                        i = i.filter(t => e.has(t))
                    }
                    if (0 === i.length) return;
                    let h = () => {
                        i.forEach(e => {
                            void 0 !== a && this.coordinator.setTimeScale(e, a, t);
                            let n = (0, c.toSeconds)(l);
                            switch (o) {
                                case "play":
                                    this.coordinator.play(e, t, n);
                                    break;
                                case "pause":
                                case "stop":
                                    this.coordinator.pause(e, t, n);
                                    break;
                                case "resume":
                                    this.coordinator.resume(e, t, n);
                                    break;
                                case "reverse":
                                case "reverseFlipEase":
                                    this.coordinator.reverse(e, t, n);
                                    break;
                                case "restart":
                                default:
                                    this.coordinator.restart(e, t);
                                    break;
                                case "togglePlayReverse":
                                case "togglePlayReverseFlipEase":
                                    this.coordinator.togglePlayReverse(e, t)
                            }
                        })
                    };
                    d ? setTimeout(() => {
                        h()
                    }, 1e3 * d) : h()
                }
                getEffectivePlaybackConfig(e, t) {
                    let n = this.timelineDefs.get(e);
                    if (n ? .triggerMetadata) {
                        let e = n.settings;
                        return {
                            control: e ? .control,
                            delay: e ? .delay,
                            jump: e ? .jump,
                            speed: e ? .speed
                        }
                    }
                    let i = t.controlType && (0, c.isValidControlType)(t.controlType) ? t.controlType : r.TimelineControlType.STANDARD;
                    if (n ? .groupId && i === r.TimelineControlType.STANDARD) {
                        let e = n.settings;
                        return {
                            control: t.control,
                            delay: void 0,
                            jump: e ? .jump,
                            speed: e ? .speed
                        }
                    }
                    return {
                        control: t.control,
                        delay: void 0,
                        jump: t.jump,
                        speed: t.speed
                    }
                }
                runTimelineAction(e, t, n, r) {
                    let {
                        control: i,
                        delay: o,
                        jump: s,
                        speed: a
                    } = this.getEffectivePlaybackConfig(e, t), l = r ? ? i, u = this.timelineDefs.get(e);
                    if (u ? .reuse) {
                        let t = u.reuse.sourceTimelineId;
                        if (!this.timelineDefs.has(t)) return void console.warn(`Timeline reuse: source '${t}' not found for '${e}'`);
                        e = t
                    }
                    let d = () => {
                            this.coordinator.setTimeScale(e, a ? ? 1, n);
                            let t = (0, c.toSeconds)(s);
                            switch (l) {
                                case "play":
                                    this.coordinator.play(e, n, t);
                                    break;
                                case "pause":
                                case "stop":
                                    this.coordinator.pause(e, n, t);
                                    break;
                                case "resume":
                                    this.coordinator.resume(e, n, t);
                                    break;
                                case "reverse":
                                case "reverseFlipEase":
                                    this.coordinator.reverse(e, n, t);
                                    break;
                                case "restart":
                                case void 0:
                                default:
                                    this.coordinator.restart(e, n);
                                    break;
                                case "togglePlayReverse":
                                case "togglePlayReverseFlipEase":
                                    this.coordinator.togglePlayReverse(e, n);
                                case "none":
                            }
                        },
                        f = (0, c.toSeconds)(o);
                    f && f > 0 ? setTimeout(d, 1e3 * f) : d()
                }
                resolveTargets;
                isTargetDynamic;
                getComponentScopeSelector(e) {
                    let t = this.componentScopeSelectors.get(e);
                    return t || (t = `[data-wf-component-id="${CSS.escape(e)}"]`, this.componentScopeSelectors.set(e, t)), t
                }
                resolveTargetsImpl(e, t, n, r) {
                    let [i, o, s] = e;
                    if ("*" === o && s && s.filterBy) {
                        let e = this.resolveUniversalSelectorOptimized(s, t, n, r);
                        if (e) return e
                    }
                    let a = this.pluginReg.getTargetResolver([i, o]);
                    if (!a) return [];
                    let l = a.resolve([i, o], t),
                        u = r ? this.filterByScope(l, r) : l;
                    return u.length && s && "none" !== s.relationship && s.filterBy ? this.applyRelationshipFilter(u, s.relationship, this.resolveTargetsImpl(s.filterBy, t, n, r), s.firstMatchOnly) : u
                }
                resolveUniversalSelectorOptimized(e, t, n, r) {
                    if (!e.filterBy) return null;
                    let i = this.resolveTargetsImpl(e.filterBy, t, n, r),
                        o = i.length;
                    if (!o) return [];
                    let s = !!e.firstMatchOnly;
                    switch (e.relationship) {
                        case "direct-child-of":
                            {
                                let e = [];
                                for (let t = 0; t < o; t++) {
                                    let n = i[t];
                                    if (!n) continue;
                                    let r = n.children;
                                    for (let t = 0; t < r.length; t++)
                                        if (e.push(r[t]), s) return e
                                }
                                return e
                            }
                        case "within":
                            {
                                let e = [];
                                for (let t = 0; t < o; t++) {
                                    let n = i[t];
                                    if (!n) continue;
                                    let r = n.querySelectorAll("*");
                                    for (let t = 0; t < r.length; t++)
                                        if (e.push(r[t]), s) return e
                                }
                                return e
                            }
                        case "direct-parent-of":
                            {
                                let e = new Set,
                                    t = [];
                                for (let n = 0; n < o; n++) {
                                    let r = i[n];
                                    if (!r) continue;
                                    let o = r.parentElement;
                                    if (o && !e.has(o) && (e.add(o), t.push(o), s)) break
                                }
                                return r ? this.filterByScope(t, r) : t
                            }
                        case "next-sibling-of":
                            {
                                let e = [];
                                for (let t = 0; t < o; t++) {
                                    let n = i[t];
                                    if (!n) continue;
                                    let r = n.nextElementSibling;
                                    if (r && (e.push(r), s)) break
                                }
                                return r ? this.filterByScope(e, r) : e
                            }
                        case "prev-sibling-of":
                            {
                                let e = [];
                                for (let t = 0; t < o; t++) {
                                    let n = i[t];
                                    if (!n) continue;
                                    let r = n.previousElementSibling;
                                    if (r && (e.push(r), s)) break
                                }
                                return r ? this.filterByScope(e, r) : e
                            }
                        case "next-to":
                            {
                                let e = new Set,
                                    t = [];
                                for (let n = 0; n < o; n++) {
                                    let r = i[n];
                                    if (!r) continue;
                                    let o = r.parentElement;
                                    if (o) {
                                        let n = o.children;
                                        for (let i = 0; i < n.length; i++) {
                                            let o = n[i];
                                            if (o !== r && !e.has(o) && (e.add(o), t.push(o), s)) break
                                        }
                                        if (s && t.length) break
                                    }
                                }
                                return r ? this.filterByScope(t, r) : t
                            }
                        case "contains":
                            {
                                let e = new Set,
                                    t = [];
                                for (let n = 0; n < o; n++) {
                                    let r = i[n];
                                    if (!r) continue;
                                    let o = r.parentElement;
                                    for (; o && !e.has(o) && (e.add(o), t.push(o), !s);) {;
                                        o = o.parentElement
                                    }
                                    if (s && t.length) break
                                }
                                return r ? this.filterByScope(t, r) : t
                            }
                        default:
                            return null
                    }
                }
                applyRelationshipFilter(e, t, n, r) {
                    if (!e.length || !n.length) return [];
                    if ("none" === t) return e;
                    let i = [],
                        o = new Set;
                    switch (t) {
                        case "direct-child-of":
                            {
                                let t = new Set(n);
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if (!o.has(s) && s.parentElement && t.has(s.parentElement) && (o.add(s), i.push(s), r)) break
                                }
                                return i
                            }
                        case "direct-parent-of":
                            {
                                let t = new Set;
                                for (let e = 0; e < n.length; e++) {
                                    let r = n[e].parentElement;
                                    r && t.add(r)
                                }
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if (!o.has(s) && t.has(s) && (o.add(s), i.push(s), r)) break
                                }
                                return i
                            }
                        case "next-sibling-of":
                            {
                                let t = new Set(n);
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if (o.has(s)) continue;
                                    let a = s.previousElementSibling;
                                    if (a && t.has(a) && (o.add(s), i.push(s), r)) break
                                }
                                return i
                            }
                        case "prev-sibling-of":
                            {
                                let t = new Set(n);
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if (o.has(s)) continue;
                                    let a = s.nextElementSibling;
                                    if (a && t.has(a) && (o.add(s), i.push(s), r)) break
                                }
                                return i
                            }
                        case "next-to":
                            {
                                let t = new Set(n),
                                    s = new Map;
                                for (let e = 0; e < n.length; e++) {
                                    let t = n[e].parentElement;
                                    t && s.set(t, (s.get(t) ? ? 0) + 1)
                                }
                                for (let n = 0; n < e.length; n++) {
                                    let a = e[n];
                                    if (o.has(a) || !a.parentElement) continue;
                                    let l = s.get(a.parentElement);
                                    if (l && (!t.has(a) || !(l <= 1)) && (o.add(a), i.push(a), r)) break
                                }
                                return i
                            }
                        case "within":
                            {
                                let t = new Set(n);
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if (o.has(s)) continue;
                                    let a = s.parentElement;
                                    for (; a;) {
                                        if (t.has(a)) {
                                            if (o.add(s), i.push(s), r) return i;
                                            break
                                        }
                                        a = a.parentElement
                                    }
                                }
                                return i
                            }
                        case "contains":
                            {
                                let t = new Set;
                                for (let e = 0; e < n.length; e++) {
                                    let r = n[e].parentElement;
                                    for (; r && !t.has(r);) t.add(r), r = r.parentElement
                                }
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if (!o.has(s) && t.has(s) && (o.add(s), i.push(s), r)) break
                                }
                                return i
                            }
                        default:
                            return []
                    }
                }
                filterByInstance(e, t, n) {
                    if (!e.length) return e;
                    let r = n.closest(t);
                    if (!r) return e;
                    let i = -1;
                    for (let n = 0; n < e.length; n++)
                        if (e[n] ? .closest(t) !== r) {
                            i = n;
                            break
                        }
                    if (-1 === i) return e;
                    let o = e.slice(0, i);
                    for (let n = i + 1; n < e.length; n++) {
                        let i = e[n];
                        i ? .closest(t) === r && o.push(i)
                    }
                    return o
                }
                filterByScope(e, t) {
                    if (!e.length) return e;
                    let n = -1;
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r];
                        if (!i ? .closest(t)) {
                            n = r;
                            break
                        }
                    }
                    if (-1 === n) return e;
                    let r = e.slice(0, n);
                    for (let i = n + 1; i < e.length; i++) {
                        let n = e[i];
                        n ? .closest(t) && r.push(n)
                    }
                    return r
                }
                filterByVariant(e, t, n) {
                    if (!e.length) return e;
                    let r = e => {
                            let r = e.closest(t);
                            if (!r) return !1;
                            let i = r.getAttribute("data-wf-variant-state");
                            return null != i && n.includes(i)
                        },
                        i = -1;
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        if (!n || !r(n)) {
                            i = t;
                            break
                        }
                    }
                    if (-1 === i) return e;
                    let o = e.slice(0, i);
                    for (let t = i + 1; t < e.length; t++) {
                        let n = e[t];
                        n && r(n) && o.push(n)
                    }
                    return o
                }
                getInteractionForTimeline;
                incrementTimelineRefCount(e) {
                    let t = this.timelineRefCounts.get(e) || 0;
                    this.timelineRefCounts.set(e, t + 1)
                }
                decrementTimelineRefCount(e) {
                    let t = Math.max(0, (this.timelineRefCounts.get(e) || 0) - 1);
                    return this.timelineRefCounts.set(e, t), t
                }
                decrementTimelineReferences(e) {
                    let t = new Set,
                        n = this.interactionTimelineRefs.get(e);
                    if (!n) return t;
                    for (let e of n) 0 === this.decrementTimelineRefCount(e) && t.add(e);
                    return t
                }
                unbindAllTriggers(e) {
                    let t = this.triggerCleanupFunctions.get(e);
                    if (t) {
                        for (let [, e] of t)
                            for (let t of e) try {
                                t()
                            } catch (e) {
                                console.error("Error during trigger cleanup:", e)
                            }
                        this.triggerCleanupFunctions.delete(e)
                    }
                }
                cleanupTriggerObservers(e) {
                    let t = this.triggerObservers.get(e);
                    if (t) {
                        for (let [e, n] of t) {
                            try {
                                n()
                            } catch (e) {
                                console.error("Error during trigger observer cleanup:", e)
                            }
                            this.pendingReactiveUpdates.delete(e), this.reactiveExecutionContext.delete(e)
                        }
                        this.reactiveCallbackQueues.delete(e), this.triggerObservers.delete(e)
                    }
                }
                cleanupContinuousControlsForInteraction(e) {
                    let t = this.continuousCleanups.get(e);
                    if (t) {
                        for (let [, e] of t) try {
                            e()
                        } catch (e) {
                            console.error("Error during continuous control cleanup:", e)
                        }
                        this.continuousCleanups.delete(e)
                    }
                }
                cleanupAllContinuousControls() {
                    for (let [, e] of this.continuousCleanups)
                        for (let [, t] of e) try {
                            t()
                        } catch (e) {
                            console.error("Error during continuous control cleanup:", e)
                        }
                    this.continuousCleanups.clear()
                }
                cleanupInteractionAnimations(e) {
                    this.unbindAllTriggers(e), this.cleanupContinuousControlsForInteraction(e);
                    let t = this.interactionTimelineRefs.get(e);
                    if (t)
                        for (let e of t) 0 === this.decrementTimelineRefCount(e) && this.destroyTimelineInstance(e);
                    this.triggeredElements.delete(e)
                }
            }
        },
        4330(e, t) {
            Object.defineProperty(t, "PluginRegistry", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                plugins = new Map;
                extensionsByPoint = new Map;
                activePlugins = new Set;
                pluginStorage = new Map;
                constructor() {
                    ["trigger", "action", "targetResolver", "condition"].forEach(e => this.extensionsByPoint.set(e, new Map))
                }
                async registerPlugin(e) {
                    let t = r(e.manifest.id);
                    if (this.plugins.has(t)) throw Error(`Plugin ${t} is already registered`);
                    let n = Object.entries(e.manifest.dependencies ? ? {});
                    for (let [e] of n)
                        if (!this.plugins.has(e)) throw Error(`Missing dependency: ${e} required by ${t}`);
                    for (let n of (this.plugins.set(t, e), e.initialize && await e.initialize(), e.extensions)) this.registerExtension(n);
                    n.length || await this.activatePlugin(t)
                }
                registerExtension(e) {
                    this.extensionsByPoint.has(e.extensionPoint) || this.extensionsByPoint.set(e.extensionPoint, new Map);
                    let t = this.extensionsByPoint.get(e.extensionPoint),
                        n = e.id;
                    if (t.has(n)) throw Error(`Extension ${n} is already registered for point ${e.extensionPoint}`);
                    t.set(n, e)
                }
                async activatePlugin(e) {
                    if (this.activePlugins.has(e)) return;
                    let t = this.plugins.get(e);
                    if (!t) throw Error(`Cannot activate unknown plugin: ${e}`);
                    for (let e of Object.keys(t.manifest.dependencies ? ? {})) await this.activatePlugin(e);
                    t.activate && await t.activate(), this.activePlugins.add(e)
                }
                async deactivatePlugin(e) {
                    if (!this.activePlugins.has(e)) return;
                    let t = this.plugins.get(e);
                    if (!t) throw Error(`Cannot deactivate unknown plugin: ${e}`);
                    t.deactivate && await t.deactivate(), this.activePlugins.delete(e)
                }
                async unregisterPlugin(e, t) {
                    let n = r([e, t]),
                        i = this.plugins.get(n);
                    if (i) {
                        for (let e of (this.activePlugins.has(n) && await this.deactivatePlugin(n), i.extensions)) "condition" === e.extensionPoint && e.implementation.dispose && await e.implementation.dispose(), this.extensionsByPoint.get(e.extensionPoint) ? .delete(`${n}:${e.id}`);
                        i.dispose && await i.dispose(), this.plugins.delete(n), this.pluginStorage.delete(n)
                    }
                }
                getExtensions(e) {
                    return this.extensionsByPoint.get(e) || new Map
                }
                getExtensionImpl(e, t) {
                    return this.getExtensions(t).get(e) ? .implementation
                }
                getTriggerHandler([e]) {
                    return this.getExtensionImpl(e, "trigger")
                }
                getActionHandler(e) {
                    return this.getExtensionImpl(e, "action")
                }
                getTargetResolver([e]) {
                    return this.getExtensionImpl(e, "targetResolver")
                }
                getConditionEvaluator([e]) {
                    return this.getExtensionImpl(e, "condition")
                }
                getAllPlugins() {
                    return this.plugins.values()
                }
            }

            function r(e) {
                return `${e[0]}:${e[1]}`
            }
        },
        3944(e, t) {
            Object.defineProperty(t, "PluginRuntimeBridge", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                intervalHandlers = new Map;
                channelSubscribers = new Map;
                registerIntervalHandler(e, t) {
                    let n = this.intervalHandlers.get(e);
                    n !== t && (void 0 !== n && console.warn("IX3: registerIntervalHandler called twice. The previous handler is being replaced; verify the plugin is registered exactly once (or use a unique pluginKey per concurrent handler).", {
                        pluginKey: e
                    }), this.intervalHandlers.set(e, t))
                }
                fireInterval(e) {
                    for (let [t, n] of this.intervalHandlers) try {
                        n(e)
                    } catch (e) {
                        console.error("IX3: interval handler threw. Continuing with the remaining handlers. Investigate the plugin to prevent silent data drift.", {
                            pluginKey: t
                        }, e)
                    }
                }
                publish(e, t, n) {
                    let r = this.channelSubscribers.get(e);
                    if (r) {
                        for (let i of r.values())
                            for (let r of i.slice())
                                if (!r.element || !n || r.element === n) try {
                                    r.cb(t)
                                } catch (t) {
                                    console.error("IX3: channel subscriber threw. Continuing with remaining subscribers.", {
                                        channel: e
                                    }, t)
                                }
                    }
                }
                subscribe(e, t, n, r) {
                    let i = this.channelSubscribers.get(t);
                    i || (i = new Map, this.channelSubscribers.set(t, i));
                    let o = i.get(e) ? ? [],
                        s = {
                            element: n,
                            cb: r
                        };
                    return o.push(s), i.set(e, o), () => {
                        let n = this.channelSubscribers.get(t) ? .get(e);
                        if (!n) return;
                        let r = n.indexOf(s); - 1 !== r && n.splice(r, 1), 0 === n.length && (this.channelSubscribers.get(t) ? .delete(e), this.channelSubscribers.get(t) ? .size === 0 && this.channelSubscribers.delete(t))
                    }
                }
                destroyTimeline(e) {
                    for (let [t, n] of this.channelSubscribers) n.delete(e), 0 === n.size && this.channelSubscribers.delete(t)
                }
            }
        },
        6856(e, t) {
            Object.defineProperty(t, "RuntimeMotionDriver", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                env;
                constructor(e) {
                    this.env = e
                }
                hasGsap() {
                    return null != this.env.win.gsap
                }
                hasObserver() {
                    return null != this.env.win.Observer
                }
                timeline() {
                    return this.env.win.gsap ? .timeline() ? ? null
                }
                to(...e) {
                    return this.env.win.gsap ? .to(...e) ? ? null
                }
                set(...e) {
                    this.env.win.gsap ? .set(...e)
                }
                getProperty(...e) {
                    return this.env.win.gsap ? .getProperty(...e) ? ? 0
                }
                quickSetter(...e) {
                    return this.env.win.gsap ? .quickSetter(...e) ? ? null
                }
                quickTo(...e) {
                    return this.env.win.gsap ? .quickTo(...e) ? ? null
                }
                addTicker(e) {
                    let t = this.env.win.gsap;
                    if (t ? .ticker) return t.ticker.add(e), () => {
                        try {
                            t.ticker ? .remove(e)
                        } catch {}
                    };
                    let n = this.env.win,
                        r = 0,
                        i = !0,
                        o = () => {
                            i && (e(), i && (r = n.requestAnimationFrame(o)))
                        };
                    return r = n.requestAnimationFrame(o), () => {
                        i = !1, n.cancelAnimationFrame(r)
                    }
                }
                createObserver(...e) {
                    return this.env.win.Observer ? .create(...e) ? ? null
                }
            }
        },
        8638(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                convertEaseConfigToGSAP: function() {
                    return a
                },
                convertEaseConfigToLinear: function() {
                    return l
                },
                isAdvancedEase: function() {
                    return u
                },
                isBasicEase: function() {
                    return c
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(7745);

            function s() {
                return {
                    gsap: window.gsap,
                    CustomEase: window.CustomEase,
                    CustomWiggle: window.CustomWiggle,
                    CustomBounce: window.CustomBounce
                }
            }

            function a(e, t = s(), n) {
                return null == e ? "none" : "number" == typeof e ? o.EASING_NAMES[e] || "none" : function(e, t, n) {
                    switch (e.type) {
                        case "back":
                            return `back.${e.curve}(${e.power})`;
                        case "elastic":
                            return `elastic.${e.curve}(${e.amplitude}, ${e.period})`;
                        case "steps":
                            return `steps(${e.stepCount})`;
                        case "rough":
                            {
                                let {
                                    templateCurve: t,
                                    points: n,
                                    strength: r,
                                    taper: i,
                                    randomizePoints: o,
                                    clampPoints: s
                                } = e;
                                return `rough({ template: ${t}, strength: ${r}, points: ${n}, taper: ${i}, randomize: ${o}, clamp: ${s} })`
                            }
                        case "slowMo":
                            return `slow(${e.linearRatio}, ${e.power}, ${e.yoyoMode})`;
                        case "expoScale":
                            return `expoScale(${e.startingScale}, ${e.endingScale}, ${e.templateCurve})`;
                        case "customWiggle":
                            {
                                let {
                                    CustomWiggle: r
                                } = t;
                                if (!r) return null;
                                return r.create((0, o.buildCustomEaseId)("customIX3Wiggle", n), {
                                    wiggles: e.wiggles,
                                    type: e.wiggleType
                                })
                            }
                        case "customBounce":
                            {
                                let {
                                    CustomBounce: r
                                } = t;
                                if (!r) return null;
                                return r.create((0, o.buildCustomEaseId)("customIX3Bounce", n), {
                                    strength: e.strength,
                                    endAtStart: e.endAtStart,
                                    squash: e.squash,
                                    squashID: (0, o.buildCustomEaseId)("customIX3Squash", n)
                                })
                            }
                        case "customEase":
                            {
                                let {
                                    CustomEase: r
                                } = t;
                                if (!r) return null;
                                return r.create((0, o.buildCustomEaseId)("customIX3Ease", n), e.bezierCurve)
                            }
                        default:
                            return "none"
                    }
                }(e, t, n)
            }

            function l(e, t = s(), n = 20) {
                if (null == e) return "linear";
                let r = a(e, t);
                if (null === r) return "linear";
                if ("object" == typeof e && "steps" === e.type) return `steps(${e.stepCount})`;
                let {
                    gsap: i
                } = t;
                if (!i) return "linear";
                let o = i.parseEase(r);
                if ("function" != typeof o) return "linear";
                let u = [];
                for (let e = 0; e <= n; e++) {
                    let t = e / n,
                        r = o(t);
                    u.push({
                        t: Number(t.toFixed(4)),
                        value: Number(r.toFixed(4))
                    })
                }
                return "linear(" + u.map(e => `${e.value} ${Math.round(100*e.t)}%`).join(", ") + ")"
            }

            function u(e) {
                return "object" == typeof e && null !== e
            }

            function c(e) {
                return "number" == typeof e
            }
        },
        3114(e, t, n) {
            Object.defineProperty(t, "analyzeSharedTimelineGroups", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(3428);

            function i(e, t, n, i, s) {
                let a = e.timelineIds ? ? [];
                if (a.length < 2) return [];
                for (let [, t] of e.triggers)
                    if (t ? .controlType === r.TimelineControlType.CONTINUOUS || function(e) {
                            var t;
                            return !e || void 0 !== e.controlType && e.controlType !== r.TimelineControlType.STANDARD || !(void 0 !== e.assignedGroupId || e.assignedTimelineRole || "object" == typeof(t = e.pluginConfig) && null !== t && !0 === t.multiTimeline)
                        }(t)) return [];
                if (function(e, t, n) {
                        let r = [];
                        for (let [, i, o] of e) {
                            let e = function(e) {
                                let t = "string" == typeof e ? .assignedGroupId ? e.assignedGroupId : void 0;
                                return void 0 !== t ? `group:${t}` : e ? .assignedTimelineRole ? `role:${e.assignedTimelineRole}` : void 0
                            }(i);
                            void 0 !== e && r.push({
                                route: e,
                                eventMode: function(e) {
                                    let t = e ? .pluginConfig;
                                    if ("object" == typeof t && null !== t) {
                                        let e = t.eventMode;
                                        return "enter" === e || "leave" === e ? e : void 0
                                    }
                                }(i),
                                elements: o ? new Set(t(o, {}, n)) : new Set
                            })
                        }
                        for (let e = 0; e < r.length; e++)
                            for (let t = e + 1; t < r.length; t++) {
                                if (r[e].route === r[t].route) continue;
                                let n = r[e].eventMode,
                                    i = r[t].eventMode,
                                    s = o(r[e].elements, r[t].elements),
                                    a = void 0 !== n && void 0 !== i;
                                if (s) {
                                    if (!(a && n !== i)) return !0
                                } else if (a || function(e, t) {
                                        for (let n of e)
                                            for (let e of t)
                                                if (n !== e && (n.contains(e) || e.contains(n))) return !0;
                                        return !1
                                    }(r[e].elements, r[t].elements)) return !0
                            }
                        return !1
                    }(e.triggers, n, e)) return [];
                let l = [];
                for (let r of a) {
                    let o = t.get(r);
                    if (!o || o.reuse || !o.actions ? .length || function(e, t) {
                            for (let n of e.actions ? ? [])
                                for (let e in n.properties)
                                    if (t(e) ? .createCustomTween) return !0;
                            return !1
                        }(o, i) || s ? .(o, e)) continue;
                    let a = new Set;
                    for (let t of o.actions)
                        if (t.targets)
                            for (let r of t.targets)
                                for (let t of n(r, {}, e)) a.add(t);
                    l.push({
                        id: r,
                        targets: a
                    })
                }
                let u = [],
                    c = new Set;
                for (let e = 0; e < l.length; e++) {
                    if (c.has(e)) continue;
                    let n = [l[e].id],
                        r = new Set(l[e].targets);
                    c.add(e);
                    let s = !0;
                    for (; s;) {
                        s = !1;
                        for (let t = e + 1; t < l.length; t++)
                            if (!c.has(t) && o(r, l[t].targets)) {
                                for (let e of (n.push(l[t].id), l[t].targets)) r.add(e);
                                c.add(t), s = !0
                            }
                    }
                    if (n.length >= 2) {
                        let e = n.findIndex(e => (function(e, t) {
                            if (!e ? .actions) return !1;
                            let n = new Map;
                            for (let r of e.actions) {
                                if (!r) continue;
                                let e = r.tt ? ? 0,
                                    i = r.splitText ? "string" == typeof r.splitText ? r.splitText : r.splitText.type : "none",
                                    o = "none" === i ? JSON.stringify(r.targets) : `${JSON.stringify(r.targets)}_split_${i}`,
                                    s = n.get(o) ? ? new Set;
                                n.set(o, s);
                                let a = !1;
                                for (let e of Object.values(r.properties ? ? {}))
                                    for (let t of Object.keys(e || {})) s.has(t) ? a = !0 : s.add(t);
                                if ((1 === e || 2 === e) && !a && function(e, t) {
                                        for (let n in e.properties) {
                                            let r = t(n),
                                                i = e.properties[n];
                                            if (r ? .createTweenConfig && i) try {
                                                let e = r.createTweenConfig(i);
                                                if (Object.keys(e.from ? ? {}).length > 0) return !0
                                            } catch {}
                                        }
                                        return !1
                                    }(r, t)) return !0
                            }
                            return !1
                        })(t.get(e), i));
                        if (e > 0) {
                            let [t] = n.splice(e, 1);
                            n.unshift(t)
                        }
                        u.push({
                            primary: n[0],
                            members: n
                        })
                    }
                }
                return u
            }

            function o(e, t) {
                let [n, r] = e.size <= t.size ? [e, t] : [t, e];
                for (let e of n)
                    if (r.has(e)) return !0;
                return !1
            }
        },
        9944(e, t, n) {
            Object.defineProperty(t, "ContinuousTriggerStrategy", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(1970),
                i = n(6051);
            class o extends r.BaseTriggerStrategy {
                continuousCleanups;
                triggerCleanupFunctions;
                coordinator;
                getTimelineIdForRole;
                constructor(e, t, n, r, i, o, s) {
                    super(e, t, n), this.continuousCleanups = r, this.triggerCleanupFunctions = i, this.coordinator = o, this.getTimelineIdForRole = s
                }
                bind(e, t, n) {
                    let {
                        interactionId: r,
                        elements: o,
                        triggerHandler: s,
                        conditionalContext: a
                    } = n;
                    for (let l of o) {
                        if (!l) continue;
                        if (null !== a) {
                            "skip-to-end" === a.behavior && this.skipToEndState(t, l);
                            continue
                        }
                        let o = e => this.getTimelineIdForRole(t, e),
                            u = new i.ContinuousChannelManager(this.coordinator, o),
                            c = s(e, l, n.eventManager, e => {
                                if (null != e && "type" in e && "continuous" === e.type) {
                                    let t = e.setup(u),
                                        n = this.continuousCleanups.get(r);
                                    n || (n = new Map, this.continuousCleanups.set(r, n)), n.set(l, () => {
                                        t(), u.cleanup()
                                    })
                                }
                            });
                        if (c) {
                            let e = this.triggerCleanupFunctions.get(r);
                            e || (e = new Map, this.triggerCleanupFunctions.set(r, e));
                            let t = e.get(l);
                            t || (t = new Set, e.set(l, t)), t.add(c)
                        }
                    }
                }
            }
        },
        8397(e, t, n) {
            Object.defineProperty(t, "LoadTriggerStrategy", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(1970);
            class i extends r.BaseTriggerStrategy {
                loadInteractions;
                getTimeline;
                constructor(e, t, n, r, i) {
                    super(e, t, n), this.loadInteractions = r, this.getTimeline = i
                }
                bind(e, t, n) {
                    if (window.__wf_ix3) return;
                    let {
                        conditionalContext: r,
                        delay: i
                    } = n, o = e[1];
                    this.loadInteractions.push(() => {
                        if (null !== r) {
                            "skip-to-end" === r.behavior && this.skipToEndState(t, null);
                            return
                        }
                        let e = () => {
                            for (let e of t.timelineIds ? ? []) {
                                let t = this.getTimeline(e, null);
                                t && (t.data.splitLines ? document.fonts.ready.then(() => {
                                    this.runTimelineAction(e, o, null)
                                }) : this.runTimelineAction(e, o, null))
                            }
                        };
                        i ? setTimeout(e, 1e3 * i) : e()
                    })
                }
            }
        },
        286(e, t, n) {
            Object.defineProperty(t, "ScrollTriggerStrategy", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(1970);
            class i extends r.BaseTriggerStrategy {
                setupScrollControl;
                constructor(e, t, n, r) {
                    super(e, t, n), this.setupScrollControl = r
                }
                bind(e, t, n) {
                    let {
                        interactionId: r,
                        elements: i,
                        conditionalContext: o
                    } = n, s = e[1].scrollTriggerConfig;
                    if (s) {
                        for (let e of i)
                            if (e) {
                                if (null !== o) {
                                    "skip-to-end" === o.behavior && this.skipToEndState(t, e);
                                    continue
                                }
                                for (let n of t.timelineIds ? ? []) this.setupScrollControl(n, r, s, e)
                            }
                    }
                }
            }
        },
        1906(e, t, n) {
            Object.defineProperty(t, "StandardTriggerStrategy", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(1970);
            class i extends r.BaseTriggerStrategy {
                getTimelineIdsForRole;
                resolveAssignedTimelineIds;
                constructor(e, t, n, r, i) {
                    super(e, t, n), this.getTimelineIdsForRole = r, this.resolveAssignedTimelineIds = i
                }
                bind(e, t, n) {
                    let {
                        interactionId: r,
                        elements: i,
                        triggerHandler: o,
                        eventManager: s,
                        conditionalContext: a,
                        cleanupMap: l,
                        delay: u
                    } = n, c = e[1];
                    for (let n of i) {
                        let i;
                        if (!n) continue;
                        let d = l.get(n);
                        d || (d = new Set, l.set(n, d));
                        let f = null,
                            h = o(e, n, s, o => {
                                let s, l = o && "object" == typeof o && "playback-control" === o.type && "string" == typeof o.control ? o.control : void 0;
                                if (s = (o && "object" == typeof o ? "timeline-role" !== o.type || "string" != typeof o.role : 1) ? this.resolveAssignedTimelineIds(e, t) : this.getTimelineIdsForRole(t, o.role), s ? .length === 0) return;
                                if (null !== a) {
                                    "skip-to-end" === a.behavior && this.skipToEndState(t, null, c, s, l);
                                    return
                                }
                                let d = () => {
                                    this.runTrigger(e, n, r, s, l).catch(e => console.error("Error in trigger execution:", e))
                                };
                                c.conditionalLogic || !u ? d() : (null == f || l !== i) && (null != f && clearTimeout(f), i = l, f = setTimeout(() => {
                                    f = null, d()
                                }, 1e3 * u))
                            });
                        h && d.add(h), d.add(() => {
                            null != f && (clearTimeout(f), f = null)
                        })
                    }
                }
            }
        },
        1970(e, t) {
            Object.defineProperty(t, "BaseTriggerStrategy", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            class n {
                runTrigger;
                runTimelineAction;
                skipToEndState;
                constructor(e, t, n) {
                    this.runTrigger = e, this.runTimelineAction = t, this.skipToEndState = n
                }
            }
        },
        7745(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                EASING_NAMES: function() {
                    return h
                },
                buildCustomEaseId: function() {
                    return f
                },
                buildEaseContextId: function() {
                    return d
                },
                debounce: function() {
                    return u
                },
                defaultSplitClass: function() {
                    return l
                },
                isValidControlType: function() {
                    return s
                },
                throttle: function() {
                    return c
                },
                toSeconds: function() {
                    return a
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let o = n(3428);

            function s(e) {
                return e === o.TimelineControlType.STANDARD || e === o.TimelineControlType.SCROLL || e === o.TimelineControlType.LOAD || e === o.TimelineControlType.CONTINUOUS
            }

            function a(e) {
                return "string" == typeof e ? parseFloat(e) / 1e3 : e
            }

            function l(e) {
                return `gsap_split_${e}++`
            }
            let u = (e, t = 0, {
                    leading: n = !1,
                    trailing: r = !0,
                    maxWait: i
                } = {}) => {
                    let o, s, a, l = 0,
                        u = () => {
                            l = 0, o = void 0, r && e.apply(s, a)
                        };

                    function c(...r) {
                        s = this, a = r, !l && (l = performance.now(), n && e.apply(s, a));
                        let d = performance.now() - l;
                        if (i && d >= i) {
                            clearTimeout(o), u();
                            return
                        }
                        clearTimeout(o), o = setTimeout(u, t)
                    }
                    return c.cancel = () => {
                        clearTimeout(o), o = void 0, l = 0
                    }, c
                },
                c = (e, t = 0, {
                    leading: n = !0,
                    trailing: r = !0,
                    maxWait: i
                } = {}) => {
                    let o, s, a, l = 0,
                        u = t => {
                            l = t, o = void 0, e.apply(s, a)
                        };

                    function c(...e) {
                        let d = performance.now();
                        l || n || (l = d);
                        let f = t - (d - l);
                        s = this, a = e, f <= 0 || i && d - l >= i ? (o && (clearTimeout(o), o = void 0), u(d)) : r && !o && (o = setTimeout(() => u(performance.now()), f))
                    }
                    return c.cancel = () => {
                        clearTimeout(o), o = void 0, l = 0
                    }, c
                };

            function d(e, t) {
                return `${e}-${t}`
            }

            function f(e, t) {
                return t ? `${e}-${t}` : e
            }
            let h = ["none", "power1.in", "power1.out", "power1.inOut", "power2.in", "power2.out", "power2.inOut", "power3.in", "power3.out", "power3.inOut", "power4.in", "power4.out", "power4.inOut", "back.in", "back.out", "back.inOut", "bounce.in", "bounce.out", "bounce.inOut", "circ.in", "circ.out", "circ.inOut", "elastic.in", "elastic.out", "elastic.inOut", "expo.in", "expo.out", "expo.inOut", "sine.in", "sine.out", "sine.inOut"]
        },
        7160(e, t, n) {
            let r = n(8281),
                i = n(8346),
                o = n(3656),
                s = {
                    doc: document,
                    win: window
                };
            class a {
                getInstance = () => this.instance;
                emit = (e, t, n, r) => {
                    this.instance && this.instance.emit(e, t, n, r)
                };
                destroy = () => {
                    this.instance && (this.instance.destroy(), this.instance = null)
                };
                ready = async () => {
                    if (!this.instance) try {
                        this.instance = await r.IX3.init(s), await this.instance.registerPlugin(i.plugin)
                    } catch (e) {
                        throw console.error("Error initializing IX3:", e), e
                    }
                }
            }
            o.define("ix3", () => new a)
        },
        2658(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                getFirst: function() {
                    return i
                },
                getSecond: function() {
                    return o
                },
                pair: function() {
                    return s
                }
            };
            for (var r in n) Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
            let i = e => e[0],
                o = e => e[1],
                s = (e, t) => [e, t]
        }
    }
]);