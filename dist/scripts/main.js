(function(e) {
    function t(r) {
        function o(e) {
            return e && "object" == typeof e && !_r(e) && nr.call(e, "__wrapped__") ? e : new X(e);
        }
        function q(e) {
            var t = e.length, n = t >= l;
            if (n) for (var r = {}, i = -1; t > ++i; ) {
                var o = u + e[i];
                (r[o] || (r[o] = [])).push(e[i]);
            }
            return function(t) {
                if (n) {
                    var i = u + t;
                    return r[i] && Jt(r[i], t) > -1;
                }
                return Jt(e, t) > -1;
            };
        }
        function R(e) {
            return e.charCodeAt(0);
        }
        function I(e, t) {
            var r = e.index, i = t.index;
            if (e = e.criteria, t = t.criteria, e !== t) {
                if (e > t || e === n) return 1;
                if (t > e || t === n) return -1;
            }
            return i > r ? -1 : 1;
        }
        function F(e, t, n, r) {
            function i() {
                var r = arguments, l = a ? this : t;
                if (o || (e = t[s]), n.length && (r = r.length ? (r = mr.call(r), u ? r.concat(n) : n.concat(r)) : n), 
                this instanceof i) {
                    V.prototype = e.prototype, l = new V(), V.prototype = null;
                    var c = e.apply(l, r);
                    return ft(c) ? c : l;
                }
                return e.apply(l, r);
            }
            var o = ct(e), a = !n, s = t;
            if (a) {
                var u = r;
                n = t;
            } else if (!o) {
                if (!r) throw new Xn();
                t = e;
            }
            return i;
        }
        function B() {
            for (var e, t = {
                shadowedProps: k,
                support: xr,
                arrays: "isArray(iterable)",
                bottom: "",
                init: "iterable",
                loop: "",
                top: "",
                useHas: !0,
                useKeys: !!Er
            }, n = 0; e = arguments[n]; n++) for (var r in e) t[r] = e[r];
            var i = t.args;
            t.firstArg = /^[^,]+/.exec(i)[0];
            var a = In("hasOwnProperty, isArguments, isArray, isString, keys, lodash, objectTypes", "return function(" + i + ") {\n" + wr(t) + "\n}");
            return a(nr, G, _r, mt, Er, o, P);
        }
        function W(e) {
            return "\\" + M[e];
        }
        function z(e) {
            return Ar[e];
        }
        function U(e) {
            return "function" != typeof e.toString && "string" == typeof (e + "");
        }
        function X(e) {
            this.__wrapped__ = e;
        }
        function V() {}
        function J(e) {
            var t = !1;
            if (!e || ar.call(e) != D || !xr.argsClass && G(e)) return t;
            var n = e.constructor;
            return (ct(n) ? n instanceof n : xr.nodeClass || !U(e)) ? xr.ownLast ? (Lr(e, function(e, n, r) {
                return t = nr.call(r, n), !1;
            }), t === !0) : (Lr(e, function(e, n) {
                t = n;
            }), t === !1 || nr.call(e, t)) : t;
        }
        function Y(e, t, r) {
            t || (t = 0), r === n && (r = e ? e.length : 0);
            for (var i = -1, o = r - t || 0, a = $n(0 > o ? 0 : o); o > ++i; ) a[i] = e[t + i];
            return a;
        }
        function Q(e) {
            return jr[e];
        }
        function G(e) {
            return ar.call(e) == _;
        }
        function K(e, t, r, i, a, s) {
            var u = e;
            if ("function" == typeof t && (i = r, r = t, t = !1), "function" == typeof r) {
                if (r = i === n ? r : o.createCallback(r, i, 1), u = r(u), u !== n) return u;
                u = e;
            }
            var l = ft(u);
            if (l) {
                var c = ar.call(u);
                if (!O[c] || !xr.nodeClass && U(u)) return u;
                var f = _r(u);
            }
            if (!l || !t) return l ? f ? Y(u) : Dr({}, u) : u;
            var p = br[c];
            switch (c) {
              case E:
              case S:
                return new p(+u);

              case j:
              case L:
                return new p(u);

              case H:
                return p(u.source, g.exec(u));
            }
            a || (a = []), s || (s = []);
            for (var h = a.length; h--; ) if (a[h] == e) return s[h];
            return u = f ? p(u.length) : {}, f && (nr.call(e, "index") && (u.index = e.index), 
            nr.call(e, "input") && (u.input = e.input)), a.push(e), s.push(u), (f ? At : Or)(e, function(e, i) {
                u[i] = K(e, t, r, n, a, s);
            }), u;
        }
        function Z(e, t, n) {
            return K(e, !0, t, n);
        }
        function et(e, t, r) {
            var i;
            return t = o.createCallback(t, r), Or(e, function(e, r, o) {
                return t(e, r, o) ? (i = r, !1) : n;
            }), i;
        }
        function tt(e) {
            var t = [];
            return Lr(e, function(e, n) {
                ct(e) && t.push(n);
            }), t.sort();
        }
        function nt(e, t) {
            return e ? nr.call(e, t) : !1;
        }
        function rt(e) {
            for (var t = -1, n = Er(e), r = n.length, i = {}; r > ++t; ) {
                var o = n[t];
                i[e[o]] = o;
            }
            return i;
        }
        function it(e) {
            return e === !0 || e === !1 || ar.call(e) == E;
        }
        function ot(e) {
            return e ? "object" == typeof e && ar.call(e) == S : !1;
        }
        function at(e) {
            return e ? 1 === e.nodeType : !1;
        }
        function st(e) {
            var t = !0;
            if (!e) return t;
            var n = ar.call(e), r = e.length;
            return n == N || n == L || (xr.argsClass ? n == _ : G(e)) || n == D && "number" == typeof r && ct(e.splice) ? !r : (Or(e, function() {
                return t = !1;
            }), t);
        }
        function ut(e, t, r, i, a, u) {
            var l = r === s;
            if ("function" == typeof r && !l) {
                r = o.createCallback(r, i, 2);
                var c = r(e, t);
                if (c !== n) return !!c;
            }
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            var f = typeof e, p = typeof t;
            if (e === e && (!e || "function" != f && "object" != f) && (!t || "function" != p && "object" != p)) return !1;
            if (null == e || null == t) return e === t;
            var h = ar.call(e), d = ar.call(t);
            if (h == _ && (h = D), d == _ && (d = D), h != d) return !1;
            switch (h) {
              case E:
              case S:
                return +e == +t;

              case j:
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;

              case H:
              case L:
                return e == Un(t);
            }
            var g = h == N;
            if (!g) {
                if (nr.call(e, "__wrapped__ ") || nr.call(t, "__wrapped__")) return ut(e.__wrapped__ || e, t.__wrapped__ || t, r, i, a, u);
                if (h != D || !xr.nodeClass && (U(e) || U(t))) return !1;
                var m = !xr.argsObject && G(e) ? Wn : e.constructor, v = !xr.argsObject && G(t) ? Wn : t.constructor;
                if (m != v && !(ct(m) && m instanceof m && ct(v) && v instanceof v)) return !1;
            }
            a || (a = []), u || (u = []);
            for (var y = a.length; y--; ) if (a[y] == e) return u[y] == t;
            var b = 0;
            if (c = !0, a.push(e), u.push(t), g) {
                if (y = e.length, b = t.length, c = b == e.length, !c && !l) return c;
                for (;b--; ) {
                    var x = y, w = t[b];
                    if (l) for (;x-- && !(c = ut(e[x], w, r, i, a, u)); ) ; else if (!(c = ut(e[b], w, r, i, a, u))) break;
                }
                return c;
            }
            return Lr(t, function(t, o, s) {
                return nr.call(s, o) ? (b++, c = nr.call(e, o) && ut(e[o], t, r, i, a, u)) : n;
            }), c && !l && Lr(e, function(e, t, r) {
                return nr.call(r, t) ? c = --b > -1 : n;
            }), c;
        }
        function lt(e) {
            return lr(e) && !cr(parseFloat(e));
        }
        function ct(e) {
            return "function" == typeof e;
        }
        function ft(e) {
            return e ? P[typeof e] : !1;
        }
        function pt(e) {
            return dt(e) && e != +e;
        }
        function ht(e) {
            return null === e;
        }
        function dt(e) {
            return "number" == typeof e || ar.call(e) == j;
        }
        function gt(e) {
            return e ? P[typeof e] && ar.call(e) == H : !1;
        }
        function mt(e) {
            return "string" == typeof e || ar.call(e) == L;
        }
        function vt(e) {
            return e === n;
        }
        function yt(e, t, r) {
            var i = arguments, a = 0, u = 2;
            if (!ft(e)) return e;
            if (r === s) var l = i[3], c = i[4], f = i[5]; else c = [], f = [], "number" != typeof r && (u = i.length), 
            u > 3 && "function" == typeof i[u - 2] ? l = o.createCallback(i[--u - 1], i[u--], 2) : u > 2 && "function" == typeof i[u - 1] && (l = i[--u]);
            for (;u > ++a; ) (_r(i[a]) ? At : Or)(i[a], function(t, r) {
                var i, o, a = t, u = e[r];
                if (t && ((o = _r(t)) || Pr(t))) {
                    for (var p = c.length; p--; ) if (i = c[p] == t) {
                        u = f[p];
                        break;
                    }
                    if (!i) {
                        var h;
                        l && (a = l(u, t), (h = a !== n) && (u = a)), h || (u = o ? _r(u) ? u : [] : Pr(u) ? u : {}), 
                        c.push(t), f.push(u), h || (u = yt(u, t, s, l, c, f));
                    }
                } else l && (a = l(u, t), a === n && (a = t)), a !== n && (u = a);
                e[r] = u;
            });
            return e;
        }
        function bt(e, t, n) {
            var r = "function" == typeof t, i = {};
            if (r) t = o.createCallback(t, n); else var a = Zn.apply(Vn, mr.call(arguments, 1));
            return Lr(e, function(e, n, o) {
                (r ? !t(e, n, o) : 0 > Jt(a, n)) && (i[n] = e);
            }), i;
        }
        function xt(e) {
            for (var t = -1, n = Er(e), r = n.length, i = $n(r); r > ++t; ) {
                var o = n[t];
                i[t] = [ o, e[o] ];
            }
            return i;
        }
        function wt(e, t, n) {
            var r = {};
            if ("function" != typeof t) for (var i = -1, a = Zn.apply(Vn, mr.call(arguments, 1)), s = ft(e) ? a.length : 0; s > ++i; ) {
                var u = a[i];
                u in e && (r[u] = e[u]);
            } else t = o.createCallback(t, n), Lr(e, function(e, n, i) {
                t(e, n, i) && (r[n] = e);
            });
            return r;
        }
        function Tt(e) {
            for (var t = -1, n = Er(e), r = n.length, i = $n(r); r > ++t; ) i[t] = e[n[t]];
            return i;
        }
        function kt(e) {
            var t = -1, n = Zn.apply(Vn, mr.call(arguments, 1)), r = n.length, i = $n(r);
            for (xr.unindexedChars && mt(e) && (e = e.split("")); r > ++t; ) i[t] = e[n[t]];
            return i;
        }
        function Ct(e, t, r) {
            var i = -1, o = e ? e.length : 0, a = !1;
            return r = (0 > r ? pr(0, o + r) : r) || 0, "number" == typeof o ? a = (mt(e) ? e.indexOf(t, r) : Jt(e, t, r)) > -1 : Sr(e, function(e) {
                return ++i >= r ? !(a = e === t) : n;
            }), a;
        }
        function _t(e, t, n) {
            var r = {};
            return t = o.createCallback(t, n), At(e, function(e, n, i) {
                n = Un(t(e, n, i)), nr.call(r, n) ? r[n]++ : r[n] = 1;
            }), r;
        }
        function Nt(e, t, n) {
            var r = !0;
            if (t = o.createCallback(t, n), _r(e)) for (var i = -1, a = e.length; a > ++i && (r = !!t(e[i], i, e)); ) ; else Sr(e, function(e, n, i) {
                return r = !!t(e, n, i);
            });
            return r;
        }
        function Et(e, t, n) {
            var r = [];
            if (t = o.createCallback(t, n), _r(e)) for (var i = -1, a = e.length; a > ++i; ) {
                var s = e[i];
                t(s, i, e) && r.push(s);
            } else Sr(e, function(e, n, i) {
                t(e, n, i) && r.push(e);
            });
            return r;
        }
        function St(e, t, r) {
            if (t = o.createCallback(t, r), !_r(e)) {
                var i;
                return Sr(e, function(e, r, o) {
                    return t(e, r, o) ? (i = e, !1) : n;
                }), i;
            }
            for (var a = -1, s = e.length; s > ++a; ) {
                var u = e[a];
                if (t(u, a, e)) return u;
            }
        }
        function At(e, t, r) {
            if (t && r === n && _r(e)) for (var i = -1, o = e.length; o > ++i && t(e[i], i, e) !== !1; ) ; else Sr(e, t, r);
            return e;
        }
        function jt(e, t, n) {
            var r = {};
            return t = o.createCallback(t, n), At(e, function(e, n, i) {
                n = Un(t(e, n, i)), (nr.call(r, n) ? r[n] : r[n] = []).push(e);
            }), r;
        }
        function Dt(e, t) {
            var n = mr.call(arguments, 2), r = -1, i = "function" == typeof t, o = e ? e.length : 0, a = $n("number" == typeof o ? o : 0);
            return At(e, function(e) {
                a[++r] = (i ? t : e[t]).apply(e, n);
            }), a;
        }
        function Ht(e, t, n) {
            var r = -1, i = e ? e.length : 0, a = $n("number" == typeof i ? i : 0);
            if (t = o.createCallback(t, n), _r(e)) for (;i > ++r; ) a[r] = t(e[r], r, e); else Sr(e, function(e, n, i) {
                a[++r] = t(e, n, i);
            });
            return a;
        }
        function Lt(e, t, n) {
            var r = -1/0, i = r;
            if (!t && _r(e)) for (var a = -1, s = e.length; s > ++a; ) {
                var u = e[a];
                u > i && (i = u);
            } else t = !t && mt(e) ? R : o.createCallback(t, n), Sr(e, function(e, n, o) {
                var a = t(e, n, o);
                a > r && (r = a, i = e);
            });
            return i;
        }
        function Ot(e, t, n) {
            var r = 1/0, i = r;
            if (!t && _r(e)) for (var a = -1, s = e.length; s > ++a; ) {
                var u = e[a];
                i > u && (i = u);
            } else t = !t && mt(e) ? R : o.createCallback(t, n), Sr(e, function(e, n, o) {
                var a = t(e, n, o);
                r > a && (r = a, i = e);
            });
            return i;
        }
        function Pt(e, t, n, r) {
            var i = 3 > arguments.length;
            if (t = o.createCallback(t, r, 4), _r(e)) {
                var a = -1, s = e.length;
                for (i && (n = e[++a]); s > ++a; ) n = t(n, e[a], a, e);
            } else Sr(e, function(e, r, o) {
                n = i ? (i = !1, e) : t(n, e, r, o);
            });
            return n;
        }
        function Mt(e, t, n, r) {
            var i = e, a = e ? e.length : 0, s = 3 > arguments.length;
            if ("number" != typeof a) {
                var u = Er(e);
                a = u.length;
            } else xr.unindexedChars && mt(e) && (i = e.split(""));
            return t = o.createCallback(t, r, 4), At(e, function(e, r, o) {
                r = u ? u[--a] : --a, n = s ? (s = !1, i[r]) : t(n, i[r], r, o);
            }), n;
        }
        function $t(e, t, n) {
            return t = o.createCallback(t, n), Et(e, function(e, n, r) {
                return !t(e, n, r);
            });
        }
        function qt(e) {
            var t = -1, n = e ? e.length : 0, r = $n("number" == typeof n ? n : 0);
            return At(e, function(e) {
                var n = er(gr() * (++t + 1));
                r[t] = r[n], r[n] = e;
            }), r;
        }
        function Rt(e) {
            var t = e ? e.length : 0;
            return "number" == typeof t ? t : Er(e).length;
        }
        function It(e, t, n) {
            var r;
            if (t = o.createCallback(t, n), _r(e)) for (var i = -1, a = e.length; a > ++i && !(r = t(e[i], i, e)); ) ; else Sr(e, function(e, n, i) {
                return !(r = t(e, n, i));
            });
            return !!r;
        }
        function Ft(e, t, n) {
            var r = -1, i = e ? e.length : 0, a = $n("number" == typeof i ? i : 0);
            for (t = o.createCallback(t, n), At(e, function(e, n, i) {
                a[++r] = {
                    criteria: t(e, n, i),
                    index: r,
                    value: e
                };
            }), i = a.length, a.sort(I); i--; ) a[i] = a[i].value;
            return a;
        }
        function Bt(e) {
            return e && "number" == typeof e.length ? xr.unindexedChars && mt(e) ? e.split("") : Y(e) : Tt(e);
        }
        function Wt(e) {
            for (var t = -1, n = e ? e.length : 0, r = []; n > ++t; ) {
                var i = e[t];
                i && r.push(i);
            }
            return r;
        }
        function zt(e) {
            for (var t = -1, n = e ? e.length : 0, r = Zn.apply(Vn, mr.call(arguments, 1)), i = q(r), o = []; n > ++t; ) {
                var a = e[t];
                i(a) || o.push(a);
            }
            return o;
        }
        function Ut(e, t, n) {
            var r = -1, i = e ? e.length : 0;
            for (t = o.createCallback(t, n); i > ++r; ) if (t(e[r], r, e)) return r;
            return -1;
        }
        function Xt(e, t, n) {
            if (e) {
                var r = 0, i = e.length;
                if ("number" != typeof t && null != t) {
                    var a = -1;
                    for (t = o.createCallback(t, n); i > ++a && t(e[a], a, e); ) r++;
                } else if (r = t, null == r || n) return e[0];
                return Y(e, 0, hr(pr(0, r), i));
            }
        }
        function Vt(e, t, n, r) {
            var i = -1, a = e ? e.length : 0, s = [];
            for ("boolean" != typeof t && null != t && (r = n, n = t, t = !1), null != n && (n = o.createCallback(n, r)); a > ++i; ) {
                var u = e[i];
                n && (u = n(u, i, e)), _r(u) ? rr.apply(s, t ? u : Vt(u)) : s.push(u);
            }
            return s;
        }
        function Jt(e, t, n) {
            var r = -1, i = e ? e.length : 0;
            if ("number" == typeof n) r = (0 > n ? pr(0, i + n) : n || 0) - 1; else if (n) return r = tn(e, t), 
            e[r] === t ? r : -1;
            for (;i > ++r; ) if (e[r] === t) return r;
            return -1;
        }
        function Yt(e, t, n) {
            if (!e) return [];
            var r = 0, i = e.length;
            if ("number" != typeof t && null != t) {
                var a = i;
                for (t = o.createCallback(t, n); a-- && t(e[a], a, e); ) r++;
            } else r = null == t || n ? 1 : t || r;
            return Y(e, 0, hr(pr(0, i - r), i));
        }
        function Qt(e) {
            var t = arguments, n = t.length, r = {
                "0": {}
            }, i = -1, o = e ? e.length : 0, a = o >= l, s = [], c = s;
            e: for (;o > ++i; ) {
                var f = e[i];
                if (a) var p = u + f, h = r[0][p] ? !(c = r[0][p]) : c = r[0][p] = [];
                if (h || 0 > Jt(c, f)) {
                    a && c.push(f);
                    for (var d = n; --d; ) if (!(r[d] || (r[d] = q(t[d])))(f)) continue e;
                    s.push(f);
                }
            }
            return s;
        }
        function Gt(e, t, n) {
            if (e) {
                var r = 0, i = e.length;
                if ("number" != typeof t && null != t) {
                    var a = i;
                    for (t = o.createCallback(t, n); a-- && t(e[a], a, e); ) r++;
                } else if (r = t, null == r || n) return e[i - 1];
                return Y(e, pr(0, i - r));
            }
        }
        function Kt(e, t, n) {
            var r = e ? e.length : 0;
            for ("number" == typeof n && (r = (0 > n ? pr(0, r + n) : hr(n, r - 1)) + 1); r--; ) if (e[r] === t) return r;
            return -1;
        }
        function Zt(e, t, n) {
            e = +e || 0, n = +n || 1, null == t && (t = e, e = 0);
            for (var r = -1, i = pr(0, Gn((t - e) / n)), o = $n(i); i > ++r; ) o[r] = e, e += n;
            return o;
        }
        function en(e, t, n) {
            if ("number" != typeof t && null != t) {
                var r = 0, i = -1, a = e ? e.length : 0;
                for (t = o.createCallback(t, n); a > ++i && t(e[i], i, e); ) r++;
            } else r = null == t || n ? 1 : pr(0, t);
            return Y(e, r);
        }
        function tn(e, t, n, r) {
            var i = 0, a = e ? e.length : i;
            for (n = n ? o.createCallback(n, r, 1) : _n, t = n(t); a > i; ) {
                var s = i + a >>> 1;
                t > n(e[s]) ? i = s + 1 : a = s;
            }
            return i;
        }
        function nn(e) {
            return _r(e) || (arguments[0] = e ? mr.call(e) : Vn), rn(Zn.apply(Vn, arguments));
        }
        function rn(e, t, n, r) {
            var i = -1, a = e ? e.length : 0, s = [], c = s;
            "boolean" != typeof t && null != t && (r = n, n = t, t = !1);
            var f = !t && a >= l;
            if (f) var p = {};
            for (null != n && (c = [], n = o.createCallback(n, r)); a > ++i; ) {
                var h = e[i], d = n ? n(h, i, e) : h;
                if (f) var g = u + d, m = p[g] ? !(c = p[g]) : c = p[g] = [];
                (t ? !i || c[c.length - 1] !== d : m || 0 > Jt(c, d)) && ((n || f) && c.push(d), 
                s.push(h));
            }
            return s;
        }
        function on(e) {
            for (var t = -1, n = e ? e.length : 0, r = n ? Lt(Mr(e, "length")) : 0, i = $n(r); n > ++t; ) for (var o = -1, a = e[t]; r > ++o; ) (i[o] || (i[o] = $n(n)))[t] = a[o];
            return i;
        }
        function an(e) {
            return zt(e, mr.call(arguments, 1));
        }
        function sn(e) {
            for (var t = -1, n = e ? Lt(Mr(arguments, "length")) : 0, r = $n(n); n > ++t; ) r[t] = Mr(arguments, t);
            return r;
        }
        function un(e, t) {
            for (var n = -1, r = e ? e.length : 0, i = {}; r > ++n; ) {
                var o = e[n];
                t ? i[o] = t[n] : i[o[0]] = o[1];
            }
            return i;
        }
        function ln(e, t) {
            return 1 > e ? t() : function() {
                return 1 > --e ? t.apply(this, arguments) : n;
            };
        }
        function cn(e, t) {
            return xr.fastBind || sr && arguments.length > 2 ? sr.call.apply(sr, arguments) : F(e, t, mr.call(arguments, 2));
        }
        function fn(e) {
            for (var t = arguments.length > 1 ? Zn.apply(Vn, mr.call(arguments, 1)) : tt(e), n = -1, r = t.length; r > ++n; ) {
                var i = t[n];
                e[i] = cn(e[i], e);
            }
            return e;
        }
        function pn(e, t) {
            return F(e, t, mr.call(arguments, 2), s);
        }
        function hn() {
            var e = arguments;
            return function() {
                for (var t = arguments, n = e.length; n--; ) t = [ e[n].apply(this, t) ];
                return t[0];
            };
        }
        function dn(e, t, r) {
            if (null == e) return _n;
            var i = typeof e;
            if ("function" != i) {
                if ("object" != i) return function(t) {
                    return t[e];
                };
                var o = Er(e);
                return function(t) {
                    for (var n = o.length, r = !1; n-- && (r = ut(t[o[n]], e[o[n]], s)); ) ;
                    return r;
                };
            }
            return t !== n ? 1 === r ? function(n) {
                return e.call(t, n);
            } : 2 === r ? function(n, r) {
                return e.call(t, n, r);
            } : 4 === r ? function(n, r, i, o) {
                return e.call(t, n, r, i, o);
            } : function(n, r, i) {
                return e.call(t, n, r, i);
            } : e;
        }
        function gn(e, t, n) {
            function r() {
                o = u = null, l && (a = e.apply(s, i));
            }
            var i, o, a, s, u, l = !0;
            if (n === !0) {
                var c = !0;
                l = !1;
            } else n && P[typeof n] && (c = n.leading, l = "trailing" in n ? n.trailing : l);
            return function() {
                return i = arguments, s = this, Kn(u), !o && c ? (o = !0, a = e.apply(s, i)) : u = or(r, t), 
                a;
            };
        }
        function mn(e) {
            var t = mr.call(arguments, 1);
            return or(function() {
                e.apply(n, t);
            }, 1);
        }
        function vn(e, t) {
            var r = mr.call(arguments, 2);
            return or(function() {
                e.apply(n, r);
            }, t);
        }
        function yn(e, t) {
            var n = {};
            return function() {
                var r = u + (t ? t.apply(this, arguments) : arguments[0]);
                return nr.call(n, r) ? n[r] : n[r] = e.apply(this, arguments);
            };
        }
        function bn(e) {
            var t, n;
            return function() {
                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n);
            };
        }
        function xn(e) {
            return F(e, mr.call(arguments, 1));
        }
        function wn(e) {
            return F(e, mr.call(arguments, 1), null, s);
        }
        function Tn(e, t, n) {
            function r() {
                s = null, c && (u = new Rn(), o = e.apply(a, i));
            }
            var i, o, a, s, u = 0, l = !0, c = !0;
            return n === !1 ? l = !1 : n && P[typeof n] && (l = "leading" in n ? n.leading : l, 
            c = "trailing" in n ? n.trailing : c), function() {
                var n = new Rn();
                s || l || (u = n);
                var c = t - (n - u);
                return i = arguments, a = this, 0 >= c ? (Kn(s), s = null, u = n, o = e.apply(a, i)) : s || (s = or(r, c)), 
                o;
            };
        }
        function kn(e, t) {
            return function() {
                var n = [ e ];
                return rr.apply(n, arguments), t.apply(this, n);
            };
        }
        function Cn(e) {
            return null == e ? "" : Un(e).replace(x, z);
        }
        function _n(e) {
            return e;
        }
        function Nn(e) {
            At(tt(e), function(t) {
                var n = o[t] = e[t];
                o.prototype[t] = function() {
                    var e = this.__wrapped__, t = [ e ];
                    rr.apply(t, arguments);
                    var r = n.apply(o, t);
                    return e && "object" == typeof e && e == r ? this : new X(r);
                };
            });
        }
        function En() {
            return r._ = Yn, this;
        }
        function Sn(e, t) {
            return null == e && null == t && (t = 1), e = +e || 0, null == t && (t = e, e = 0), 
            e + er(gr() * ((+t || 0) - e + 1));
        }
        function An(e, t) {
            var r = e ? e[t] : n;
            return ct(r) ? e[t]() : r;
        }
        function jn(e, t, r) {
            var i = o.templateSettings;
            e || (e = ""), r = wr ? Hr({}, r, i) : i;
            var a, s = wr && Hr({}, r.imports, i.imports), u = wr ? Er(s) : [ "_" ], l = wr ? Tt(s) : [ o ], h = 0, g = r.interpolate || b, v = "__p += '", y = zn((r.escape || b).source + "|" + g.source + "|" + (g === m ? d : b).source + "|" + (r.evaluate || b).source + "|$", "g");
            e.replace(y, function(t, n, r, i, o, s) {
                return r || (r = i), v += e.slice(h, s).replace(w, W), n && (v += "' +\n__e(" + n + ") +\n'"), 
                o && (a = !0, v += "';\n" + o + ";\n__p += '"), r && (v += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), 
                h = s + t.length, t;
            }), v += "';\n";
            var x = r.variable, T = x;
            T || (x = "obj", v = "with (" + x + ") {\n" + v + "\n}\n"), v = (a ? v.replace(c, "") : v).replace(f, "$1").replace(p, "$1;"), 
            v = "function(" + x + ") {\n" + (T ? "" : x + " || (" + x + " = {});\n") + "var __t, __p = '', __e = _.escape" + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + v + "return __p\n}";
            var k = "\n/*\n//@ sourceURL=" + (r.sourceURL || "/lodash/template/source[" + C++ + "]") + "\n*/";
            try {
                var _ = In(u, "return " + v + k).apply(n, l);
            } catch (N) {
                throw N.source = v, N;
            }
            return t ? _(t) : (_.source = v, _);
        }
        function Dn(e, t, n) {
            e = (e = +e) > -1 ? e : 0;
            var r = -1, i = $n(e);
            for (t = o.createCallback(t, n, 1); e > ++r; ) i[r] = t(r);
            return i;
        }
        function Hn(e) {
            return null == e ? "" : Un(e).replace(h, Q);
        }
        function Ln(e) {
            var t = ++a;
            return Un(null == e ? "" : e) + t;
        }
        function On(e, t) {
            return t(e), e;
        }
        function Pn() {
            return Un(this.__wrapped__);
        }
        function Mn() {
            return this.__wrapped__;
        }
        r = r ? $.defaults(e.Object(), r, $.pick(e, T)) : e;
        var $n = r.Array, qn = r.Boolean, Rn = r.Date, In = r.Function, Fn = r.Math, Bn = r.Number, Wn = r.Object, zn = r.RegExp, Un = r.String, Xn = r.TypeError, Vn = $n(), Jn = Wn(), Yn = r._, Qn = zn("^" + Un(Jn.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"), Gn = Fn.ceil, Kn = r.clearTimeout, Zn = Vn.concat, er = Fn.floor, tr = Qn.test(tr = Wn.getPrototypeOf) && tr, nr = Jn.hasOwnProperty, rr = Vn.push, ir = r.setImmediate, or = r.setTimeout, ar = Jn.toString, sr = Qn.test(sr = ar.bind) && sr, ur = Qn.test(ur = $n.isArray) && ur, lr = r.isFinite, cr = r.isNaN, fr = Qn.test(fr = Wn.keys) && fr, pr = Fn.max, hr = Fn.min, dr = r.parseInt, gr = Fn.random, mr = Vn.slice, vr = Qn.test(r.attachEvent), yr = sr && !/\n|true/.test(sr + vr), br = {};
        br[N] = $n, br[E] = qn, br[S] = Rn, br[D] = Wn, br[j] = Bn, br[H] = zn, br[L] = Un;
        var xr = o.support = {};
        (function() {
            var e = function() {
                this.x = 1;
            }, t = {
                "0": 1,
                length: 1
            }, n = [];
            e.prototype = {
                valueOf: 1,
                y: 1
            };
            for (var r in new e()) n.push(r);
            for (r in arguments) ;
            xr.argsObject = arguments.constructor == Wn && !(arguments instanceof $n), xr.argsClass = G(arguments), 
            xr.enumPrototypes = e.propertyIsEnumerable("prototype"), xr.fastBind = sr && !yr, 
            xr.ownLast = "x" != n[0], xr.nonEnumArgs = 0 != r, xr.nonEnumShadows = !/valueOf/.test(n), 
            xr.spliceObjects = (Vn.splice.call(t, 0, 1), !t[0]), xr.unindexedChars = "xx" != "x"[0] + Wn("x")[0];
            try {
                xr.nodeClass = !(ar.call(document) == D && !({
                    toString: 0
                } + ""));
            } catch (i) {
                xr.nodeClass = !0;
            }
        })(1), o.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: m,
            variable: "",
            imports: {
                _: o
            }
        };
        var wr = jn("var index, iterable = <%= firstArg %>, result = <%= init %>;\nif (!iterable) return result;\n<%= top %>;\n<% if (arrays) { %>var length = iterable.length; index = -1;\nif (<%= arrays %>) {  <% if (support.unindexedChars) { %>\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  <% } %>\n  while (++index < length) {\n    <%= loop %>\n  }\n}\nelse {  <%  } else if (support.nonEnumArgs) { %>\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      <%= loop %>\n    }\n  } else {  <% } %>  <% if (support.enumPrototypes) { %>\n  var skipProto = typeof iterable == 'function';\n  <% } %>  <% if (useHas && useKeys) { %>\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? keys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    <% if (support.enumPrototypes) { %>if (!(skipProto && index == 'prototype')) {\n  <% } %>    <%= loop %>\n    <% if (support.enumPrototypes) { %>}\n<% } %>  }  <% } else { %>\n  for (index in iterable) {<%    if (support.enumPrototypes || useHas) { %>\n    if (<%      if (support.enumPrototypes) { %>!(skipProto && index == 'prototype')<% }      if (support.enumPrototypes && useHas) { %> && <% }      if (useHas) { %>hasOwnProperty.call(iterable, index)<% }    %>) {    <% } %>\n    <%= loop %>;    <% if (support.enumPrototypes || useHas) { %>\n    }<% } %>\n  }    <% if (support.nonEnumShadows) { %>\n\n  var ctor = iterable.constructor;\n      <% for (var k = 0; k < 7; k++) { %>\n  index = '<%= shadowedProps[k] %>';\n  if (<%      if (shadowedProps[k] == 'constructor') {        %>!(ctor && ctor.prototype === iterable) && <%      } %>hasOwnProperty.call(iterable, index)) {\n    <%= loop %>\n  }      <% } %>    <% } %>  <% } %>  <% if (arrays || support.nonEnumArgs) { %>\n}<% } %>\n<%= bottom %>;\nreturn result"), Tr = {
            args: "object, source, guard",
            top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
            loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
            bottom: "  }\n}"
        }, kr = {
            args: "collection, callback, thisArg",
            top: "callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg)",
            arrays: "typeof length == 'number'",
            loop: "if (callback(iterable[index], index, collection) === false) return result"
        }, Cr = {
            top: "if (!objectTypes[typeof iterable]) return result;\n" + kr.top,
            arrays: !1
        };
        X.prototype = o.prototype, xr.argsClass || (G = function(e) {
            return e ? nr.call(e, "callee") : !1;
        });
        var _r = ur || function(e) {
            return e ? "object" == typeof e && ar.call(e) == N : !1;
        }, Nr = B({
            args: "object",
            init: "[]",
            top: "if (!(objectTypes[typeof object])) return result",
            loop: "result.push(index)",
            arrays: !1
        }), Er = fr ? function(e) {
            return ft(e) ? xr.enumPrototypes && "function" == typeof e || xr.nonEnumArgs && e.length && G(e) ? Nr(e) : fr(e) : [];
        } : Nr, Sr = B(kr), Ar = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, jr = rt(Ar), Dr = B(Tr, {
            top: Tr.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = lodash.createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
            loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
        }), Hr = B(Tr), Lr = B(kr, Cr, {
            useHas: !1
        }), Or = B(kr, Cr);
        ct(/x/) && (ct = function(e) {
            return "function" == typeof e && ar.call(e) == A;
        });
        var Pr = tr ? function(e) {
            if (!e || ar.call(e) != D || !xr.argsClass && G(e)) return !1;
            var t = e.valueOf, n = "function" == typeof t && (n = tr(t)) && tr(n);
            return n ? e == n || tr(e) == n : J(e);
        } : J, Mr = Ht, $r = Et;
        yr && i && "function" == typeof ir && (mn = cn(ir, r));
        var qr = 8 == dr(v + "08") ? dr : function(e, t) {
            return dr(mt(e) ? e.replace(y, "") : e, t || 0);
        };
        return o.after = ln, o.assign = Dr, o.at = kt, o.bind = cn, o.bindAll = fn, o.bindKey = pn, 
        o.compact = Wt, o.compose = hn, o.countBy = _t, o.createCallback = dn, o.debounce = gn, 
        o.defaults = Hr, o.defer = mn, o.delay = vn, o.difference = zt, o.filter = Et, o.flatten = Vt, 
        o.forEach = At, o.forIn = Lr, o.forOwn = Or, o.functions = tt, o.groupBy = jt, o.initial = Yt, 
        o.intersection = Qt, o.invert = rt, o.invoke = Dt, o.keys = Er, o.map = Ht, o.max = Lt, 
        o.memoize = yn, o.merge = yt, o.min = Ot, o.omit = bt, o.once = bn, o.pairs = xt, 
        o.partial = xn, o.partialRight = wn, o.pick = wt, o.pluck = Mr, o.range = Zt, o.reject = $t, 
        o.rest = en, o.shuffle = qt, o.sortBy = Ft, o.tap = On, o.throttle = Tn, o.times = Dn, 
        o.toArray = Bt, o.union = nn, o.uniq = rn, o.unzip = on, o.values = Tt, o.where = $r, 
        o.without = an, o.wrap = kn, o.zip = sn, o.zipObject = un, o.collect = Ht, o.drop = en, 
        o.each = At, o.extend = Dr, o.methods = tt, o.object = un, o.select = Et, o.tail = en, 
        o.unique = rn, Nn(o), o.clone = K, o.cloneDeep = Z, o.contains = Ct, o.escape = Cn, 
        o.every = Nt, o.find = St, o.findIndex = Ut, o.findKey = et, o.has = nt, o.identity = _n, 
        o.indexOf = Jt, o.isArguments = G, o.isArray = _r, o.isBoolean = it, o.isDate = ot, 
        o.isElement = at, o.isEmpty = st, o.isEqual = ut, o.isFinite = lt, o.isFunction = ct, 
        o.isNaN = pt, o.isNull = ht, o.isNumber = dt, o.isObject = ft, o.isPlainObject = Pr, 
        o.isRegExp = gt, o.isString = mt, o.isUndefined = vt, o.lastIndexOf = Kt, o.mixin = Nn, 
        o.noConflict = En, o.parseInt = qr, o.random = Sn, o.reduce = Pt, o.reduceRight = Mt, 
        o.result = An, o.runInContext = t, o.size = Rt, o.some = It, o.sortedIndex = tn, 
        o.template = jn, o.unescape = Hn, o.uniqueId = Ln, o.all = Nt, o.any = It, o.detect = St, 
        o.foldl = Pt, o.foldr = Mt, o.include = Ct, o.inject = Pt, Or(o, function(e, t) {
            o.prototype[t] || (o.prototype[t] = function() {
                var t = [ this.__wrapped__ ];
                return rr.apply(t, arguments), e.apply(o, t);
            });
        }), o.first = Xt, o.last = Gt, o.take = Xt, o.head = Xt, Or(o, function(e, t) {
            o.prototype[t] || (o.prototype[t] = function(t, n) {
                var r = e(this.__wrapped__, t, n);
                return null == t || n && "function" != typeof t ? r : new X(r);
            });
        }), o.VERSION = "1.2.1", o.prototype.toString = Pn, o.prototype.value = Mn, o.prototype.valueOf = Mn, 
        Sr([ "join", "pop", "shift" ], function(e) {
            var t = Vn[e];
            o.prototype[e] = function() {
                return t.apply(this.__wrapped__, arguments);
            };
        }), Sr([ "push", "reverse", "sort", "unshift" ], function(e) {
            var t = Vn[e];
            o.prototype[e] = function() {
                return t.apply(this.__wrapped__, arguments), this;
            };
        }), Sr([ "concat", "slice", "splice" ], function(e) {
            var t = Vn[e];
            o.prototype[e] = function() {
                return new X(t.apply(this.__wrapped__, arguments));
            };
        }), xr.spliceObjects || Sr([ "pop", "shift", "splice" ], function(e) {
            var t = Vn[e], n = "splice" == e;
            o.prototype[e] = function() {
                var e = this.__wrapped__, r = t.apply(e, arguments);
                return 0 === e.length && delete e[0], n ? new X(r) : r;
            };
        }), o._each = Sr, o._iteratorTemplate = wr, o._shimKeys = Nr, o;
    }
    var n, r = "object" == typeof exports && exports, i = "object" == typeof module && module && module.exports == r && module, o = "object" == typeof global && global;
    (o.global === o || o.window === o) && (e = o);
    var a = 0, s = {}, u = +new Date() + "", l = 200, c = /\b__p \+= '';/g, f = /\b(__p \+=) '' \+/g, p = /(__e\(.*?\)|\b__t\)) \+\n'';/g, h = /&(?:amp|lt|gt|quot|#39);/g, d = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, g = /\w*$/, m = /<%=([\s\S]+?)%>/g, v = " 	\f ﻿\n\r\u2028\u2029 ᠎             　", y = RegExp("^[" + v + "]*0+(?=.$)"), b = /($^)/, x = /[&<>"']/g, w = /['\n\r\t\u2028\u2029\\]/g, T = [ "Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout" ], k = [ "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ], C = 0, _ = "[object Arguments]", N = "[object Array]", E = "[object Boolean]", S = "[object Date]", A = "[object Function]", j = "[object Number]", D = "[object Object]", H = "[object RegExp]", L = "[object String]", O = {};
    O[A] = !1, O[_] = O[N] = O[E] = O[S] = O[j] = O[D] = O[H] = O[L] = !0;
    var P = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, M = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, $ = t();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (e._ = $, 
    define(function() {
        return $;
    })) : r && !r.nodeType ? i ? (i.exports = $)._ = $ : r._ = $ : e._ = $;
})(this), function() {
    var e, t = this, n = t.Backbone, r = [], i = r.push, o = r.slice, a = r.splice;
    e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.0.0";
    var s = t._;
    s || "undefined" == typeof require || (s = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, 
    e.noConflict = function() {
        return t.Backbone = n, this;
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var u = e.Events = {
        on: function(e, t, n) {
            if (!c(this, "on", e, [ t, n ]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this;
        },
        once: function(e, t, n) {
            if (!c(this, "once", e, [ t, n ]) || !t) return this;
            var r = this, i = s.once(function() {
                r.off(e, i), t.apply(this, arguments);
            });
            return i._callback = t, this.on(e, i, n);
        },
        off: function(e, t, n) {
            var r, i, o, a, u, l, f, p;
            if (!this._events || !c(this, "off", e, [ t, n ])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            for (a = e ? [ e ] : s.keys(this._events), u = 0, l = a.length; l > u; u++) if (e = a[u], 
            o = this._events[e]) {
                if (this._events[e] = r = [], t || n) for (f = 0, p = o.length; p > f; f++) i = o[f], 
                (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                r.length || delete this._events[e];
            }
            return this;
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = o.call(arguments, 1);
            if (!c(this, "trigger", e, t)) return this;
            var n = this._events[e], r = this._events.all;
            return n && f(n, t), r && f(r, arguments), this;
        },
        stopListening: function(e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var i = !t && !n;
            "object" == typeof t && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var o in r) r[o].off(t, n, this), i && delete this._listeners[o];
            return this;
        }
    }, l = /\s+/, c = function(e, t, n, r) {
        if (!n) return !0;
        if ("object" == typeof n) {
            for (var i in n) e[t].apply(e, [ i, n[i] ].concat(r));
            return !1;
        }
        if (l.test(n)) {
            for (var o = n.split(l), a = 0, s = o.length; s > a; a++) e[t].apply(e, [ o[a] ].concat(r));
            return !1;
        }
        return !0;
    }, f = function(e, t) {
        var n, r = -1, i = e.length, o = t[0], a = t[1], s = t[2];
        switch (t.length) {
          case 0:
            for (;i > ++r; ) (n = e[r]).callback.call(n.ctx);
            return;

          case 1:
            for (;i > ++r; ) (n = e[r]).callback.call(n.ctx, o);
            return;

          case 2:
            for (;i > ++r; ) (n = e[r]).callback.call(n.ctx, o, a);
            return;

          case 3:
            for (;i > ++r; ) (n = e[r]).callback.call(n.ctx, o, a, s);
            return;

          default:
            for (;i > ++r; ) (n = e[r]).callback.apply(n.ctx, t);
        }
    }, p = {
        listenTo: "on",
        listenToOnce: "once"
    };
    s.each(p, function(e, t) {
        u[t] = function(t, n, r) {
            var i = this._listeners || (this._listeners = {}), o = t._listenerId || (t._listenerId = s.uniqueId("l"));
            return i[o] = t, "object" == typeof n && (r = this), t[e](n, r, this), this;
        };
    }), u.bind = u.on, u.unbind = u.off, s.extend(e, u);
    var h = e.Model = function(e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = s.uniqueId("c"), this.attributes = {}, s.extend(this, s.pick(t, d)), 
        t.parse && (r = this.parse(r, t) || {}), (n = s.result(this, "defaults")) && (r = s.defaults({}, r, n)), 
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments);
    }, d = [ "url", "urlRoot", "collection" ];
    s.extend(h.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return s.clone(this.attributes);
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            return s.escape(this.get(e));
        },
        has: function(e) {
            return null != this.get(e);
        },
        set: function(e, t, n) {
            var r, i, o, a, u, l, c, f;
            if (null == e) return this;
            if ("object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n || (n = {}), !this._validate(i, n)) return !1;
            o = n.unset, u = n.silent, a = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = s.clone(this.attributes), 
            this.changed = {}), f = this.attributes, c = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], s.isEqual(f[r], t) || a.push(r), s.isEqual(c[r], t) ? delete this.changed[r] : this.changed[r] = t, 
            o ? delete f[r] : f[r] = t;
            if (!u) {
                a.length && (this._pending = !0);
                for (var p = 0, h = a.length; h > p; p++) this.trigger("change:" + a[p], this, f[a[p]], n);
            }
            if (l) return this;
            if (!u) for (;this._pending; ) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(e, t) {
            return this.set(e, void 0, s.extend({}, t, {
                unset: !0
            }));
        },
        clear: function(e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, s.extend({}, e, {
                unset: !0
            }));
        },
        hasChanged: function(e) {
            return null == e ? !s.isEmpty(this.changed) : s.has(this.changed, e);
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
            var t, n = !1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) s.isEqual(r[i], t = e[i]) || ((n || (n = {}))[i] = t);
            return n;
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
        },
        previousAttributes: function() {
            return s.clone(this._previousAttributes);
        },
        fetch: function(e) {
            e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = this, n = e.success;
            return e.success = function(r) {
                return t.set(t.parse(r, e), e) ? (n && n(t, r, e), t.trigger("sync", t, r, e), void 0) : !1;
            }, $(this, e), this.sync("read", this, e);
        },
        save: function(e, t, n) {
            var r, i, o, a = this.attributes;
            if (null == e || "object" == typeof e ? (r = e, n = t) : (r = {})[e] = t, !(!r || n && n.wait || this.set(r, n))) return !1;
            if (n = s.extend({
                validate: !0
            }, n), !this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = s.extend({}, a, r)), void 0 === n.parse && (n.parse = !0);
            var u = this, l = n.success;
            return n.success = function(e) {
                u.attributes = a;
                var t = u.parse(e, n);
                return n.wait && (t = s.extend(r || {}, t)), s.isObject(t) && !u.set(t, n) ? !1 : (l && l(u, e, n), 
                u.trigger("sync", u, e, n), void 0);
            }, $(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === i && (n.attrs = r), 
            o = this.sync(i, this, n), r && n.wait && (this.attributes = a), o;
        },
        destroy: function(e) {
            e = e ? s.clone(e) : {};
            var t = this, n = e.success, r = function() {
                t.trigger("destroy", t, t.collection, e);
            };
            if (e.success = function(i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e);
            }, this.isNew()) return e.success(), !1;
            $(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i;
        },
        url: function() {
            var e = s.result(this, "urlRoot") || s.result(this.collection, "url") || M();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id);
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return null == this.id;
        },
        isValid: function(e) {
            return this._validate({}, s.extend(e || {}, {
                validate: !0
            }));
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = s.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, s.extend(t || {}, {
                validationError: n
            })), !1) : !0;
        }
    });
    var g = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    s.each(g, function(e) {
        h.prototype[e] = function() {
            var t = o.call(arguments);
            return t.unshift(this.attributes), s[e].apply(s, t);
        };
    });
    var m = e.Collection = function(e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), 
        this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, s.extend({
            silent: !0
        }, t));
    }, v = {
        add: !0,
        remove: !0,
        merge: !0
    }, y = {
        add: !0,
        merge: !1,
        remove: !1
    };
    s.extend(m.prototype, u, {
        model: h,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        add: function(e, t) {
            return this.set(e, s.defaults(t || {}, y));
        },
        remove: function(e, t) {
            e = s.isArray(e) ? e.slice() : [ e ], t || (t = {});
            var n, r, i, o;
            for (n = 0, r = e.length; r > n; n++) o = this.get(e[n]), o && (delete this._byId[o.id], 
            delete this._byId[o.cid], i = this.indexOf(o), this.models.splice(i, 1), this.length--, 
            t.silent || (t.index = i, o.trigger("remove", o, this, t)), this._removeReference(o));
            return this;
        },
        set: function(e, t) {
            t = s.defaults(t || {}, v), t.parse && (e = this.parse(e, t)), s.isArray(e) || (e = e ? [ e ] : []);
            var n, r, o, u, l, c = t.at, f = this.comparator && null == c && t.sort !== !1, p = s.isString(this.comparator) ? this.comparator : null, h = [], d = [], g = {};
            for (n = 0, r = e.length; r > n; n++) (o = this._prepareModel(e[n], t)) && ((u = this.get(o)) ? (t.remove && (g[u.cid] = !0), 
            t.merge && (u.set(o.attributes, t), f && !l && u.hasChanged(p) && (l = !0))) : t.add && (h.push(o), 
            o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, null != o.id && (this._byId[o.id] = o)));
            if (t.remove) {
                for (n = 0, r = this.length; r > n; ++n) g[(o = this.models[n]).cid] || d.push(o);
                d.length && this.remove(d, t);
            }
            if (h.length && (f && (l = !0), this.length += h.length, null != c ? a.apply(this.models, [ c, 0 ].concat(h)) : i.apply(this.models, h)), 
            l && this.sort({
                silent: !0
            }), t.silent) return this;
            for (n = 0, r = h.length; r > n; n++) (o = h[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this;
        },
        reset: function(e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; r > n; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, s.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this;
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: this.length
            }, t)), e;
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t;
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, s.extend({
                at: 0
            }, t)), e;
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t;
        },
        slice: function(e, t) {
            return this.models.slice(e, t);
        },
        get: function(e) {
            return null == e ? void 0 : this._byId[null != e.id ? e.id : e.cid || e];
        },
        at: function(e) {
            return this.models[e];
        },
        where: function(e, t) {
            return s.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e) if (e[n] !== t.get(n)) return !1;
                return !0;
            });
        },
        findWhere: function(e) {
            return this.where(e, !0);
        },
        sort: function(e) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            return e || (e = {}), s.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(s.bind(this.comparator, this)), 
            e.silent || this.trigger("sort", this, e), this;
        },
        sortedIndex: function(e, t, n) {
            t || (t = this.comparator);
            var r = s.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return s.sortedIndex(this.models, e, r, n);
        },
        pluck: function(e) {
            return s.invoke(this.models, "get", e);
        },
        fetch: function(e) {
            e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success, n = this;
            return e.success = function(r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e);
            }, $(this, e), this.sync("read", this, e);
        },
        create: function(e, t) {
            if (t = t ? s.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this, r = t.success;
            return t.success = function(i) {
                t.wait && n.add(e, t), r && r(e, i, t);
            }, e.save(null, t), e;
        },
        parse: function(e) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(e, t) {
            if (e instanceof h) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1);
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, r) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), 
            t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], 
            null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments));
        }
    });
    var b = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain" ];
    s.each(b, function(e) {
        m.prototype[e] = function() {
            var t = o.call(arguments);
            return t.unshift(this.models), s[e].apply(s, t);
        };
    });
    var x = [ "groupBy", "countBy", "sortBy" ];
    s.each(x, function(e) {
        m.prototype[e] = function(t, n) {
            var r = s.isFunction(t) ? t : function(e) {
                return e.get(t);
            };
            return s[e](this.models, r, n);
        };
    });
    var w = e.View = function(e) {
        this.cid = s.uniqueId("view"), this._configure(e || {}), this._ensureElement(), 
        this.initialize.apply(this, arguments), this.delegateEvents();
    }, T = /^(\S+)\s*(.*)$/, k = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    s.extend(w.prototype, u, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        setElement: function(t, n) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), 
            this.el = this.$el[0], n !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(e) {
            if (!e && !(e = s.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if (s.isFunction(n) || (n = this[e[t]]), n) {
                    var r = t.match(T), i = r[1], o = r[2];
                    n = s.bind(n, this), i += ".delegateEvents" + this.cid, "" === o ? this.$el.on(i, n) : this.$el.on(i, o, n);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this;
        },
        _configure: function(e) {
            this.options && (e = s.extend({}, s.result(this, "options"), e)), s.extend(this, s.pick(e, k)), 
            this.options = e;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(s.result(this, "el"), !1); else {
                var t = s.extend({}, s.result(this, "attributes"));
                this.id && (t.id = s.result(this, "id")), this.className && (t["class"] = s.result(this, "className"));
                var n = e.$("<" + s.result(this, "tagName") + ">").attr(t);
                this.setElement(n, !1);
            }
        }
    }), e.sync = function(t, n, r) {
        var i = C[t];
        s.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var o = {
            type: i,
            dataType: "json"
        };
        if (r.url || (o.url = s.result(n, "url") || M()), null != r.data || !n || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", 
        o.data = JSON.stringify(r.attrs || n.toJSON(r))), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", 
        o.data = o.data ? {
            model: o.data
        } : {}), r.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
            o.type = "POST", r.emulateJSON && (o.data._method = i);
            var a = r.beforeSend;
            r.beforeSend = function(e) {
                return e.setRequestHeader("X-HTTP-Method-Override", i), a ? a.apply(this, arguments) : void 0;
            };
        }
        "GET" === o.type || r.emulateJSON || (o.processData = !1), "PATCH" !== o.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (o.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var u = r.xhr = e.ajax(s.extend(o, r));
        return n.trigger("request", n, u, r), u;
    };
    var C = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments);
    };
    var _ = e.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, N = /\((.*?)\)/g, E = /(\(\?)?:\w+/g, S = /\*\w+/g, A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(_.prototype, u, {
        initialize: function() {},
        route: function(t, n, r) {
            s.isRegExp(t) || (t = this._routeToRegExp(t)), s.isFunction(n) && (r = n, n = ""), 
            r || (r = this[n]);
            var i = this;
            return e.history.route(t, function(o) {
                var a = i._extractParameters(t, o);
                r && r.apply(i, a), i.trigger.apply(i, [ "route:" + n ].concat(a)), i.trigger("route", n, a), 
                e.history.trigger("route", i, n, a);
            }), this;
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = s.result(this, "routes");
                for (var e, t = s.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(A, "\\$&").replace(N, "(?:$1)?").replace(E, function(e, t) {
                return t ? e : "([^/]+)";
            }).replace(S, "(.*?)"), RegExp("^" + e + "$");
        },
        _extractParameters: function(e, t) {
            var n = e.exec(t).slice(1);
            return s.map(n, function(e) {
                return e ? decodeURIComponent(e) : null;
            });
        }
    });
    var j = e.History = function() {
        this.handlers = [], s.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, D = /^[#\/]|\s+$/g, H = /^\/+|\/+$/g, L = /msie [\w.]+/, O = /\/$/;
    j.started = !1, s.extend(j.prototype, u, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getFragment: function(e, t) {
            if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
                e = this.location.pathname;
                var n = this.root.replace(O, "");
                e.indexOf(n) || (e = e.substr(n.length));
            } else e = this.getHash();
            return e.replace(D, "");
        },
        start: function(t) {
            if (j.started) throw Error("Backbone.history has already been started");
            j.started = !0, this.options = s.extend({}, {
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var n = this.getFragment(), r = document.documentMode, i = L.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
            this.root = ("/" + this.root + "/").replace(H, "/"), i && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !i ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = n;
            var o = this.location, a = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0), 
            this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && a && o.hash && (this.fragment = this.getHash().replace(D, ""), 
            this.history.replaceState({}, document.title, this.root + this.fragment + o.search)), 
            this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function() {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), 
            j.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function() {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), 
            e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl() || this.loadUrl(this.getHash()), 
            void 0);
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e), n = s.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0;
            });
            return n;
        },
        navigate: function(e, t) {
            if (!j.started) return !1;
            if (t && t !== !0 || (t = {
                trigger: t
            }), e = this.getFragment(e || ""), this.fragment !== e) {
                this.fragment = e;
                var n = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n); else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, e, t.replace));
                }
                t.trigger && this.loadUrl(e);
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t);
            } else e.hash = "#" + t;
        }
    }), e.history = new j();
    var P = function(e, t) {
        var n, r = this;
        n = e && s.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments);
        }, s.extend(n, r, t);
        var i = function() {
            this.constructor = n;
        };
        return i.prototype = r.prototype, n.prototype = new i(), e && s.extend(n.prototype, e), 
        n.__super__ = r.prototype, n;
    };
    h.extend = m.extend = _.extend = w.extend = j.extend = P;
    var M = function() {
        throw Error('A "url" property or function must be specified');
    }, $ = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n(e, r, t), e.trigger("error", e, r, t);
        };
    };
}.call(this);

var reactor = reactor || {};

(function() {
    var e = reactor.UserService = {}, t = "AYSC", n = $.cookie(t);
    n && (n = n.match(/USERID=(\d+)\:/));
    var r = function() {
        return n && n.length >= 2 ? n[0] : null;
    }, i = function() {
        return window.testUser;
    };
    e.getUserId = window.testUser ? i : r, e.setUserId = function(e) {
        $.cookie(t, "USERID=" + e + ":");
    };
})();

var reactor = reactor || {};

(function(e) {
    var e = reactor.ReactionService = {}, t = function(e, t) {
        var n = reactor.hostname || "ft-reactor.herokuapp.com";
        return $.ajax({
            method: "GET",
            timeout: 1e4,
            dataType: "jsonp",
            cache: !0,
            data: t || null,
            url: [ "http:/", n, e ].join("/")
        });
    };
    e.getQuestion = function(e, n) {
        if (reactor.hostname) return t("question", {
            article: e,
            user: n
        }).pipe(function(e) {
            return e.xTicks = parseInt(e.xTicks, 10), e.yTicks = parseInt(e.yTicks, 10), e;
        });
        var r = mockData.question;
        return r.userId = n, r.result = testResult, $.Deferred().resolve(r);
    }, e.getResults = function(e) {
        return reactor.hostname ? t("results", {
            article: e
        }) : (mockData.results.article = e, $.Deferred().resolve(mockData.results));
    }, e.postVote = function(e, n, r) {
        return reactor.hostname ? t("setresult", {
            article: e,
            user: n,
            result: r ? JSON.stringify(r) : ""
        }) : $.Deferred().resolve(!0);
    };
})();

var reactor = reactor || {};

reactor.Reaction = Backbone.Model.extend({
    defaults: {
        xTicks: 1,
        yTicks: 1,
        hasVoted: !1
    },
    initialize: function() {
        this.set("hasVoted", !!this.get("result")), this.set("state", !this.get("result") && this.get("userId") ? "vote" : "results");
    },
    getMatix: function() {
        var e = this._allAnswers, t = this.get("xTicks"), n = this.get("yTicks");
        e = this._allAnswers = [];
        for (var r = 0; t > r; r += 1) e.push(Array(n));
        return e;
    },
    canVote: function() {
        var e = this.get("hasVoted"), t = !!this.get("userId");
        return !e && t;
    },
    vote: function(e, t) {
        if (this.canVote()) {
            var n = {
                x: e,
                y: t
            };
            reactor.ReactionService.postVote(this.get("articleId"), this.get("userId"), n).done(_.bind(function() {
                this.set("result", n), this.set("hasVoted", !0), this.set("state", "results");
            }, this));
        }
    }
}), reactor.Reaction.fetchQuestion = function(e, t) {
    return reactor.ReactionService.getQuestion(e, t).pipe(function(e) {
        return new reactor.Reaction(e);
    });
};

var reactor = reactor || {};

(function() {
    var e = function(e, t) {
        return "https://twitter.com/intent/tweet?text=" + escape(e) + "&url=" + escape(t || location.href);
    }, t = function(e) {
        return e.question;
    };
    reactor.AppView = Backbone.View.extend({
        events: {
            "click .reaction": "vote"
        },
        initialize: function() {
            this.listenTo(this.model, "change:state", this.render);
        },
        vote: function(e) {
            var t = $(e.currentTarget), n = t.data("reaction-x"), r = t.data("reaction-y");
            this.model.vote(n, r);
        },
        render: function() {
            console.log("RENDER");
            var n = this.model.getMatix(), r = this.model.toJSON(), i = "", o = [ "reaction-widget", "reaction-state-" + r.state, "reaction-user-" + (r.userId ? "known" : "anonymous") ], a = "";
            r.result && (a = e(t(r)));
            var s = 120, u = 120;
            i += '<div class="' + o.join(" ") + '">', i += '<div class="reaction-kicker">Reader Reactions:</div>', 
            i += '<div class="reaction-question">' + r.question + "</div>", i += '<div class="reaction-controls" style="width:' + s + "px;height:" + u + 'px;">', 
            i += '<div class="reaction-graph" style="width:' + s + "px;height:" + u + 'px;">';
            var l = r.userId ? "Click to react" : "", c = s / r.yTicks, f = Math.max(30, u / r.xTicks);
            i += $.map(n, function(e, t) {
                return '<div class="reaction-axis" style="width:' + s + "px;height:" + f + 'px">' + $.map(e, function(e, n) {
                    return '<div class="reaction usable" style="width:' + c + "px;height:" + f + "px;line-height:" + f + 'px;" data-reaction-x="' + (t + 1) + '" data-reaction-y="' + (n + 1) + '" title="' + l + '"></div>';
                }).join("") + "</div>";
            }).join(""), i += "</div>", i += "</div>", i += '<div class="reaction-info">';
            var p = r.answersCount || 0;
            if (i += '<p class="show-on-anonymous">Login to react!</p>', p > 10 && (i += '<p class="reaction-count">See how you compare to <br/>' + p + " respondants...</p>"), 
            i += '<a href="' + a + '" target="_blank" class="tweet-reaction">Tweet this</a>', 
            i += "</div>", i += "</div>", this.$el.html(i), "results" === r.state) {
                console.log("RENDER resu");
                var h = this.$el.find(".reaction");
                h.removeClass("usable"), reactor.ReactionService.getResults(r.articleId).done(function(e) {
                    r.hasVoted ? r.result.x + "," + r.result.y : null, _.each(e.results, function(e, t) {
                        var r = t.split(",");
                        n[r[0] - 1][r[1] - 1] = e;
                    }), h.each(function(e, t) {
                        var i = $(t), o = i.data("reaction-x"), a = i.data("reaction-y"), s = !!r.result && o === r.result.x && a === r.result.y;
                        val = n[o - 1][a - 1] || 0, className = "reaction-result-" + parseInt(Math.min(10, Math.ceil(val / 10)), 10), 
                        selectedClass = s ? "selected" : "", l = val.toFixed(0) + "% of readers", i.attr("title", l), 
                        i.addClass(className + " " + selectedClass), i.html(s ? "&#10004;" : "&nbsp;");
                    });
                });
            }
        }
    });
})();

var reactor = reactor || {};

(function() {
    "use strict";
    var e = window.testSelector || ".railSection:first", t = window.testArticle || location.pathname, n = reactor.UserService.getUserId(), r = function(e) {
        return $("<div />").prependTo(e)[0];
    };
    reactor.Reaction.fetchQuestion(t, n).done(function(t) {
        $(function() {
            $(e).each(function(e, n) {
                var i = r(n);
                new reactor.AppView({
                    model: t,
                    el: i
                }).render();
            });
        });
    });
})();