"use strict";
(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[5892], {
    652877: function(n, t, r) {
        function u(n) {
            var t = e(n);
            return function(n) {
                return function(r) {
                    return t(r, n)
                }
            }
        }
        function e(n) {
            return function(t, r) {
                return n.chain(t, (function(t) {
                    return n.map(r(t), (function() {
                        return t
                    }
                    ))
                }
                ))
            }
        }
        r.d(t, {
            Mi: function() {
                return e
            },
            W6: function() {
                return u
            }
        })
    },
    215529: function(n, t, r) {
        r.d(t, {
            Zn: function() {
                return j
            },
            WW: function() {
                return M
            },
            rz: function() {
                return _
            },
            wu: function() {
                return w
            },
            cy: function() {
                return on
            },
            oR: function() {
                return Q
            },
            gP: function() {
                return fn
            },
            t2: function() {
                return en
            },
            Pm: function() {
                return Z
            },
            qI: function() {
                return l
            },
            AU: function() {
                return z
            },
            vq: function() {
                return V
            },
            k$: function() {
                return nn
            },
            sV: function() {
                return x
            },
            aN: function() {
                return G
            },
            WL: function() {
                return $
            },
            ak: function() {
                return W
            },
            OC: function() {
                return X
            },
            FG: function() {
                return Y
            },
            kb: function() {
                return f
            },
            Tj: function() {
                return O
            },
            qE: function() {
                return D
            },
            Fz: function() {
                return B
            },
            Ol: function() {
                return cn
            },
            pG: function() {
                return a
            },
            wg: function() {
                return H
            },
            Mi: function() {
                return K
            },
            iT: function() {
                return un
            },
            v2: function() {
                return rn
            },
            TX: function() {
                return tn
            }
        });
        var u = r(652877);
        if (9549 == r.j)
            var e = r(934903);
        var o = r(737326)
          , i = r(735611)
          , c = r(59771)
          , f = c.kb
          , a = c.pG
          , l = (0,
        o.XY)(2, (function(n, t) {
            return X(n) ? n : t(n.right)
        }
        ))
          , p = function(n, t) {
            return (0,
            o.Fs)(n, O(t))
        }
          , s = function(n, t) {
            return (0,
            o.Fs)(n, E(t))
        }
          , g = function(n, t, r) {
            return (0,
            o.Fs)(n, A(t, r))
        }
          , m = function(n) {
            return function(t, r) {
                var u = F(n);
                return (0,
                o.Fs)(t, u(r))
            }
        }
          , v = function(n, t, r) {
            return (0,
            o.Fs)(n, I(t, r))
        }
          , h = function(n) {
            var t = C(n);
            return function(n, r) {
                return (0,
                o.Fs)(n, t(r))
            }
        }
          , d = function(n, t, r) {
            return (0,
            o.Fs)(n, w(t, r))
        }
          , y = function(n, t) {
            return (0,
            o.Fs)(n, D(t))
        }
          , S = function(n, t) {
            return (0,
            o.Fs)(n, k(t))
        }
          , q = function(n, t) {
            return (0,
            o.Fs)(n, T(t))
        }
          , b = function(n, t) {
            return function(n, t) {
                for (var r = t(n); "Left" === r._tag; )
                    r = t(r.left);
                return r.right
            }(t(n), (function(n) {
                return X(n) ? a(f(n.left)) : X(n.right) ? f(t(n.right.left)) : a(a(n.right.right))
            }
            ))
        }
          , _ = "Either"
          , O = function(n) {
            return function(t) {
                return X(t) ? t : a(n(t.right))
            }
        }
          , M = {
            URI: _,
            map: p
        }
          , R = ((0,
        o.XY)(2, (0,
        i.as)(M)),
        (0,
        i.Pg)(M),
        a)
          , E = function(n) {
            return function(t) {
                return X(t) ? t : X(n) ? n : a(t.right(n.right))
            }
        }
          , j = {
            URI: _,
            map: p,
            ap: s
        }
          , N = {
            URI: _,
            map: p,
            ap: s,
            chain: l
        }
          , A = function(n, t) {
            return function(r) {
                return X(r) ? n : t(n, r.right)
            }
        }
          , F = function(n) {
            return function(t) {
                return function(r) {
                    return X(r) ? n.empty : t(r.right)
                }
            }
        }
          , I = function(n, t) {
            return function(r) {
                return X(r) ? n : t(r.right, n)
            }
        }
          , C = function(n) {
            return function(t) {
                return function(r) {
                    return X(r) ? n.of(f(r.left)) : n.map(t(r.right), a)
                }
            }
        }
          , P = function(n) {
            return function(t) {
                return X(t) ? n.of(f(t.left)) : n.map(t.right, a)
            }
        }
          , w = function(n, t) {
            return function(r) {
                return X(r) ? f(n(r.left)) : a(t(r.right))
            }
        }
          , D = function(n) {
            return function(t) {
                return X(t) ? f(n(t.left)) : t
            }
        }
          , k = function(n) {
            return function(t) {
                return X(t) ? n() : t
            }
        }
          , T = function(n) {
            return function(t) {
                return X(t) ? t : a(n(t))
            }
        }
          , U = f
          , L = {
            URI: _,
            fromEither: o.D_
        }
          , G = 9549 == r.j ? (0,
        e.aN)(L) : null
          , x = 9549 == r.j ? (0,
        e.sV)(L) : null
          , X = c.OC
          , Y = c.FG
          , J = function(n, t) {
            return function(r) {
                return X(r) ? n(r.left) : t(r.right)
            }
        }
          , V = 9549 == r.j ? J : null
          , B = 9549 == r.j ? J : null
          , z = 9549 == r.j ? B : null
          , W = function(n) {
            return function(t) {
                return X(t) ? n(t.left) : t.right
            }
        }
          , $ = W
          , K = (0,
        o.XY)(2, u.Mi(N))
          , Q = 9549 == r.j ? (0,
        e.oR)(L, N) : null
          , Z = 9549 == r.j ? (0,
        e.Pm)(L, N) : null
          , H = function(n) {
            return X(n) ? a(n.left) : f(n.right)
        }
          , nn = function(n) {
            return function(t) {
                return null == t ? f(n) : a(t)
            }
        }
          , tn = function(n, t) {
            try {
                return a(n())
            } catch (n) {
                return f(t(n))
            }
        }
          , rn = 9549 == r.j ? V(o.D_, o.D_) : null;
        function un(n) {
            try {
                return n instanceof Error ? n : new Error(String(n))
            } catch (n) {
                return new Error
            }
        }
        var en = function(n) {
            return function(t) {
                return !X(t) && n(t.right)
            }
        }
          , on = (c.FR,
        c.rb,
        l);
        function cn(n, t) {
            return tn((function() {
                return JSON.parse(n)
            }
            ), t)
        }
        var fn = {
            URI: _,
            map: p,
            of: R,
            ap: s,
            chain: l,
            reduce: g,
            foldMap: m,
            reduceRight: v,
            traverse: h,
            sequence: P,
            bimap: d,
            mapLeft: y,
            alt: S,
            extend: q,
            chainRec: b,
            throwError: U
        }
    },
    934903: function(n, t, r) {
        r.d(t, {
            Pm: function() {
                return l
            },
            aN: function() {
                return c
            },
            j_: function() {
                return p
            },
            oR: function() {
                return f
            },
            sV: function() {
                return i
            }
        });
        var u = r(652877)
          , e = r(737326);
        if (9549 == r.j)
            var o = r(59771);
        function i(n) {
            return function(t) {
                return function(r) {
                    return n.fromEither(o.$I(r) ? o.kb(t()) : o.pG(r.value))
                }
            }
        }
        function c(n) {
            return function(t, r) {
                return function(u) {
                    return n.fromEither(t(u) ? o.pG(u) : o.kb(r(u)))
                }
            }
        }
        function f(n, t) {
            var r = function(n) {
                var t = i(n);
                return function(n) {
                    var r = t(n);
                    return function(n) {
                        return (0,
                        e.L3)(n, r)
                    }
                }
            }(n);
            return function(n) {
                var u = r(n);
                return function(n) {
                    return function(r) {
                        return t.chain(r, u(n))
                    }
                }
            }
        }
        function a(n) {
            return function(t) {
                return (0,
                e.L3)(t, n.fromEither)
            }
        }
        function l(n, t) {
            return function(r, u) {
                return function(e) {
                    return t.chain(e, (function(t) {
                        return n.fromEither(r(t) ? o.pG(t) : o.kb(u(t)))
                    }
                    ))
                }
            }
        }
        function p(n, t) {
            var r = a(n)
              , e = (0,
            u.Mi)(t);
            return function(n, t) {
                return e(n, r(t))
            }
        }
    },
    735611: function(n, t, r) {
        function u(n, t) {
            return function(r) {
                return function(u) {
                    return n.map(u, (function(n) {
                        return t.map(n, r)
                    }
                    ))
                }
            }
        }
        function e(n) {
            return function(t) {
                return function(r) {
                    return n.map(r, (function(n) {
                        var r;
                        return (r = {})[t] = n,
                        r
                    }
                    ))
                }
            }
        }
        function o(n) {
            return function(t, r) {
                return n.map(t, (function() {
                    return r
                }
                ))
            }
        }
        function i(n) {
            var t = o(n);
            return function(n) {
                return t(n, void 0)
            }
        }
        r.d(t, {
            Jr: function() {
                return e
            },
            Pg: function() {
                return i
            },
            Tj: function() {
                return u
            },
            as: function() {
                return o
            }
        })
    },
    737326: function(n, t, r) {
        r.d(t, {
            AU: function() {
                return S
            },
            D_: function() {
                return o
            },
            Fs: function() {
                return d
            },
            GQ: function() {
                return v
            },
            JI: function() {
                return e
            },
            L3: function() {
                return g
            },
            MN: function() {
                return p
            },
            Mi: function() {
                return i
            },
            PV: function() {
                return m
            },
            SK: function() {
                return y
            },
            XR: function() {
                return l
            },
            XY: function() {
                return q
            },
            Yi: function() {
                return s
            },
            dY: function() {
                return c
            },
            f4: function() {
                return a
            },
            ue: function() {
                return f
            },
            xX: function() {
                return h
            }
        });
        var u = function(n, t, r) {
            if (r || 2 === arguments.length)
                for (var u, e = 0, o = t.length; e < o; e++)
                    !u && e in t || (u || (u = Array.prototype.slice.call(t, 0, e)),
                    u[e] = t[e]);
            return n.concat(u || Array.prototype.slice.call(t))
        }
          , e = function(n) {
            var t, r = (t = n,
            function() {
                return {
                    concat: function(n, r) {
                        return function(u) {
                            return t.concat(n(u), r(u))
                        }
                    }
                }
            }
            );
            return function() {
                return {
                    concat: r().concat,
                    empty: function() {
                        return n.empty
                    }
                }
            }
        };
        function o(n) {
            return n
        }
        var i = 9549 == r.j ? o : null;
        function c(n) {
            return function() {
                return n
            }
        }
        var f = c(!0)
          , a = 9549 == r.j ? c(!1) : null
          , l = c(null)
          , p = 9549 == r.j ? c(void 0) : null
          , s = 9549 == r.j ? p : null;
        function g(n, t, r, u, e, o, i, c, f) {
            switch (arguments.length) {
            case 1:
                return n;
            case 2:
                return function() {
                    return t(n.apply(this, arguments))
                }
                ;
            case 3:
                return function() {
                    return r(t(n.apply(this, arguments)))
                }
                ;
            case 4:
                return function() {
                    return u(r(t(n.apply(this, arguments))))
                }
                ;
            case 5:
                return function() {
                    return e(u(r(t(n.apply(this, arguments)))))
                }
                ;
            case 6:
                return function() {
                    return o(e(u(r(t(n.apply(this, arguments))))))
                }
                ;
            case 7:
                return function() {
                    return i(o(e(u(r(t(n.apply(this, arguments)))))))
                }
                ;
            case 8:
                return function() {
                    return c(i(o(e(u(r(t(n.apply(this, arguments))))))))
                }
                ;
            case 9:
                return function() {
                    return f(c(i(o(e(u(r(t(n.apply(this, arguments)))))))))
                }
            }
        }
        function m() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return n
        }
        function v(n) {
            throw new Error("Called `absurd` function which should be uncallable")
        }
        function h(n) {
            return function(t) {
                return n.apply(void 0, t)
            }
        }
        function d(n, t, r, u, e, o, i, c, f) {
            switch (arguments.length) {
            case 1:
                return n;
            case 2:
                return t(n);
            case 3:
                return r(t(n));
            case 4:
                return u(r(t(n)));
            case 5:
                return e(u(r(t(n))));
            case 6:
                return o(e(u(r(t(n)))));
            case 7:
                return i(o(e(u(r(t(n))))));
            case 8:
                return c(i(o(e(u(r(t(n)))))));
            case 9:
                return f(c(i(o(e(u(r(t(n))))))));
            default:
                for (var a = arguments[0], l = 1; l < arguments.length; l++)
                    a = arguments[l](a);
                return a
            }
        }
        var y = function(n, t) {
            return t
        };
        function S(n) {
            return function(t) {
                return !n(t)
            }
        }
        var q = function(n, t) {
            var r = "number" == typeof n ? function(t) {
                return t.length >= n
            }
            : n;
            return function() {
                var n = Array.from(arguments);
                return r(arguments) ? t.apply(this, n) : function(r) {
                    return t.apply(void 0, u([r], n, !1))
                }
            }
        }
    },
    59771: function(n, t, r) {
        if (r.d(t, {
            $I: function() {
                return o
            },
            FG: function() {
                return l
            },
            FR: function() {
                return y
            },
            GS: function() {
                return _
            },
            Gr: function() {
                return g
            },
            J_: function() {
                return m
            },
            OC: function() {
                return a
            },
            RT: function() {
                return h
            },
            Ru: function() {
                return i
            },
            aO: function() {
                return q
            },
            d5: function() {
                return v
            },
            dv: function() {
                return c
            },
            h8: function() {
                return b
            },
            kb: function() {
                return p
            },
            pG: function() {
                return s
            },
            rb: function() {
                return d
            },
            zN: function() {
                return f
            },
            zy: function() {
                return S
            }
        }),
        9549 == r.j)
            var u = r(737326);
        var e = function(n, t, r) {
            if (r || 2 === arguments.length)
                for (var u, e = 0, o = t.length; e < o; e++)
                    !u && e in t || (u || (u = Array.prototype.slice.call(t, 0, e)),
                    u[e] = t[e]);
            return n.concat(u || Array.prototype.slice.call(t))
        }
          , o = function(n) {
            return "None" === n._tag
        }
          , i = function(n) {
            return "Some" === n._tag
        }
          , c = {
            _tag: "None"
        }
          , f = function(n) {
            return {
                _tag: "Some",
                value: n
            }
        }
          , a = function(n) {
            return "Left" === n._tag
        }
          , l = function(n) {
            return "Right" === n._tag
        }
          , p = function(n) {
            return {
                _tag: "Left",
                left: n
            }
        }
          , s = function(n) {
            return {
                _tag: "Right",
                right: n
            }
        }
          , g = function(n) {
            return [n]
        }
          , m = function(n) {
            return n.length > 0
        }
          , v = function(n) {
            return n[0]
        }
          , h = function(n) {
            return n.slice(1)
        }
          , d = []
          , y = {}
          , S = Object.prototype.hasOwnProperty
          , q = function(n) {
            return e([n[0]], n.slice(1), !0)
        }
          , b = function(n, t) {
            return (0,
            u.XY)(2, (function(r, u) {
                return t.flatMap(r, (function(t) {
                    return n.fromEither(u(t))
                }
                ))
            }
            ))
        }
          , _ = function(n, t) {
            return (0,
            u.XY)(2, (function(r, u) {
                return t.flatMap(r, (function(t) {
                    return n.fromIO(u(t))
                }
                ))
            }
            ))
        }
    },
    232139: function(n, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.eqDate = t.eqNumber = t.eqString = t.eqBoolean = t.eq = t.strictEqual = t.getStructEq = t.getTupleEq = t.Contravariant = t.getMonoid = t.getSemigroup = t.eqStrict = t.URI = t.contramap = t.tuple = t.struct = t.fromEquals = void 0;
        var u = r(331425);
        t.fromEquals = function(n) {
            return {
                equals: function(t, r) {
                    return t === r || n(t, r)
                }
            }
        }
        ;
        t.struct = function(n) {
            return (0,
            t.fromEquals)((function(t, r) {
                for (var u in n)
                    if (!n[u].equals(t[u], r[u]))
                        return !1;
                return !0
            }
            ))
        }
        ;
        t.tuple = function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return (0,
            t.fromEquals)((function(t, r) {
                return n.every((function(n, u) {
                    return n.equals(t[u], r[u])
                }
                ))
            }
            ))
        }
        ;
        t.contramap = function(n) {
            return function(r) {
                return (0,
                t.fromEquals)((function(t, u) {
                    return r.equals(n(t), n(u))
                }
                ))
            }
        }
        ,
        t.URI = "Eq",
        t.eqStrict = {
            equals: function(n, t) {
                return n === t
            }
        };
        var e = {
            equals: function() {
                return !0
            }
        };
        t.getSemigroup = function() {
            return {
                concat: function(n, r) {
                    return (0,
                    t.fromEquals)((function(t, u) {
                        return n.equals(t, u) && r.equals(t, u)
                    }
                    ))
                }
            }
        }
        ;
        t.getMonoid = function() {
            return {
                concat: (0,
                t.getSemigroup)().concat,
                empty: e
            }
        }
        ,
        t.Contravariant = {
            URI: t.URI,
            contramap: function(n, r) {
                return (0,
                u.pipe)(n, (0,
                t.contramap)(r))
            }
        },
        t.getTupleEq = t.tuple,
        t.getStructEq = t.struct,
        t.strictEqual = t.eqStrict.equals,
        t.eq = t.Contravariant,
        t.eqBoolean = t.eqStrict,
        t.eqString = t.eqStrict,
        t.eqNumber = t.eqStrict,
        t.eqDate = {
            equals: function(n, t) {
                return n.valueOf() === t.valueOf()
            }
        }
    },
    897908: function(n, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.concatAll = t.endo = t.filterSecond = t.filterFirst = t.reverse = void 0;
        t.reverse = function(n) {
            return {
                concat: function(t, r) {
                    return n.concat(r, t)
                }
            }
        }
        ;
        t.filterFirst = function(n) {
            return function(t) {
                return {
                    concat: function(r, u) {
                        return n(r) ? t.concat(r, u) : u
                    }
                }
            }
        }
        ;
        t.filterSecond = function(n) {
            return function(t) {
                return {
                    concat: function(r, u) {
                        return n(u) ? t.concat(r, u) : r
                    }
                }
            }
        }
        ;
        t.endo = function(n) {
            return function(t) {
                return {
                    concat: function(r, u) {
                        return t.concat(n(r), n(u))
                    }
                }
            }
        }
        ;
        t.concatAll = function(n) {
            return function(t) {
                return function(r) {
                    return r.reduce((function(t, r) {
                        return n.concat(t, r)
                    }
                    ), t)
                }
            }
        }
    },
    943410: function(n, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ordDate = t.ordNumber = t.ordString = t.ordBoolean = t.ord = t.getDualOrd = t.getTupleOrd = t.between = t.clamp = t.max = t.min = t.geq = t.leq = t.gt = t.lt = t.equals = t.trivial = t.Contravariant = t.getMonoid = t.getSemigroup = t.URI = t.contramap = t.reverse = t.tuple = t.fromCompare = t.equalsDefault = void 0;
        var u = r(232139)
          , e = r(331425);
        t.equalsDefault = function(n) {
            return function(t, r) {
                return t === r || 0 === n(t, r)
            }
        }
        ;
        t.fromCompare = function(n) {
            return {
                equals: (0,
                t.equalsDefault)(n),
                compare: function(t, r) {
                    return t === r ? 0 : n(t, r)
                }
            }
        }
        ;
        t.tuple = function() {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return (0,
            t.fromCompare)((function(t, r) {
                for (var u = 0; u < n.length - 1; u++) {
                    var e = n[u].compare(t[u], r[u]);
                    if (0 !== e)
                        return e
                }
                return n[u].compare(t[u], r[u])
            }
            ))
        }
        ;
        t.reverse = function(n) {
            return (0,
            t.fromCompare)((function(t, r) {
                return n.compare(r, t)
            }
            ))
        }
        ;
        t.contramap = function(n) {
            return function(r) {
                return (0,
                t.fromCompare)((function(t, u) {
                    return r.compare(n(t), n(u))
                }
                ))
            }
        }
        ,
        t.URI = "Ord";
        t.getSemigroup = function() {
            return {
                concat: function(n, r) {
                    return (0,
                    t.fromCompare)((function(t, u) {
                        var e = n.compare(t, u);
                        return 0 !== e ? e : r.compare(t, u)
                    }
                    ))
                }
            }
        }
        ;
        t.getMonoid = function() {
            return {
                concat: (0,
                t.getSemigroup)().concat,
                empty: (0,
                t.fromCompare)((function() {
                    return 0
                }
                ))
            }
        }
        ,
        t.Contravariant = {
            URI: t.URI,
            contramap: function(n, r) {
                return (0,
                e.pipe)(n, (0,
                t.contramap)(r))
            }
        },
        t.trivial = {
            equals: e.constTrue,
            compare: (0,
            e.constant)(0)
        };
        t.equals = function(n) {
            return function(t) {
                return function(r) {
                    return r === t || 0 === n.compare(r, t)
                }
            }
        }
        ;
        t.lt = function(n) {
            return function(t, r) {
                return -1 === n.compare(t, r)
            }
        }
        ;
        t.gt = function(n) {
            return function(t, r) {
                return 1 === n.compare(t, r)
            }
        }
        ;
        t.leq = function(n) {
            return function(t, r) {
                return 1 !== n.compare(t, r)
            }
        }
        ;
        t.geq = function(n) {
            return function(t, r) {
                return -1 !== n.compare(t, r)
            }
        }
        ;
        t.min = function(n) {
            return function(t, r) {
                return t === r || n.compare(t, r) < 1 ? t : r
            }
        }
        ;
        t.max = function(n) {
            return function(t, r) {
                return t === r || n.compare(t, r) > -1 ? t : r
            }
        }
        ;
        t.clamp = function(n) {
            var r = (0,
            t.min)(n)
              , u = (0,
            t.max)(n);
            return function(n, t) {
                return function(e) {
                    return u(r(e, t), n)
                }
            }
        }
        ;
        t.between = function(n) {
            var r = (0,
            t.lt)(n)
              , u = (0,
            t.gt)(n);
            return function(n, t) {
                return function(e) {
                    return !r(e, n) && !u(e, t)
                }
            }
        }
        ,
        t.getTupleOrd = t.tuple,
        t.getDualOrd = t.reverse,
        t.ord = t.Contravariant;
        var o = {
            equals: u.eqStrict.equals,
            compare: function(n, t) {
                return n < t ? -1 : n > t ? 1 : 0
            }
        };
        t.ordBoolean = o,
        t.ordString = o,
        t.ordNumber = o,
        t.ordDate = (0,
        e.pipe)(t.ordNumber, (0,
        t.contramap)((function(n) {
            return n.valueOf()
        }
        )))
    },
    905020: function(n, t, r) {
        var u = this && this.__createBinding || (Object.create ? function(n, t, r, u) {
            void 0 === u && (u = r);
            var e = Object.getOwnPropertyDescriptor(t, r);
            e && !("get"in e ? !t.__esModule : e.writable || e.configurable) || (e = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(n, u, e)
        }
        : function(n, t, r, u) {
            void 0 === u && (u = r),
            n[u] = t[r]
        }
        )
          , e = this && this.__setModuleDefault || (Object.create ? function(n, t) {
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(n, t) {
            n.default = t
        }
        )
          , o = this && this.__importStar || function(n) {
            if (n && n.__esModule)
                return n;
            var t = {};
            if (null != n)
                for (var r in n)
                    "default" !== r && Object.prototype.hasOwnProperty.call(n, r) && u(t, n, r);
            return e(t, n),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.semigroupProduct = t.semigroupSum = t.semigroupString = t.getFunctionSemigroup = t.semigroupAny = t.semigroupAll = t.getIntercalateSemigroup = t.getMeetSemigroup = t.getJoinSemigroup = t.getDualSemigroup = t.getStructSemigroup = t.getTupleSemigroup = t.getFirstSemigroup = t.getLastSemigroup = t.getObjectSemigroup = t.semigroupVoid = t.concatAll = t.last = t.first = t.intercalate = t.tuple = t.struct = t.reverse = t.constant = t.max = t.min = void 0,
        t.fold = function(n) {
            var r = (0,
            t.concatAll)(n);
            return function(n, t) {
                return void 0 === t ? r(n) : r(n)(t)
            }
        }
        ;
        var i = r(331425)
          , c = o(r(832020))
          , f = o(r(897908))
          , a = o(r(943410));
        t.min = function(n) {
            return {
                concat: a.min(n)
            }
        }
        ;
        t.max = function(n) {
            return {
                concat: a.max(n)
            }
        }
        ;
        t.constant = function(n) {
            return {
                concat: function() {
                    return n
                }
            }
        }
        ,
        t.reverse = f.reverse;
        t.struct = function(n) {
            return {
                concat: function(t, r) {
                    var u = {};
                    for (var e in n)
                        c.has.call(n, e) && (u[e] = n[e].concat(t[e], r[e]));
                    return u
                }
            }
        }
        ;
        t.tuple = function() {
            for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
            return {
                concat: function(t, r) {
                    return n.map((function(n, u) {
                        return n.concat(t[u], r[u])
                    }
                    ))
                }
            }
        }
        ;
        t.intercalate = function(n) {
            return function(t) {
                return {
                    concat: function(r, u) {
                        return t.concat(r, t.concat(n, u))
                    }
                }
            }
        }
        ;
        t.first = function() {
            return {
                concat: i.identity
            }
        }
        ;
        t.last = function() {
            return {
                concat: function(n, t) {
                    return t
                }
            }
        }
        ,
        t.concatAll = f.concatAll,
        t.semigroupVoid = (0,
        t.constant)(void 0);
        t.getObjectSemigroup = function() {
            return {
                concat: function(n, t) {
                    return Object.assign({}, n, t)
                }
            }
        }
        ,
        t.getLastSemigroup = t.last,
        t.getFirstSemigroup = t.first,
        t.getTupleSemigroup = t.tuple,
        t.getStructSemigroup = t.struct,
        t.getDualSemigroup = t.reverse,
        t.getJoinSemigroup = t.max,
        t.getMeetSemigroup = t.min,
        t.getIntercalateSemigroup = t.intercalate,
        t.semigroupAll = {
            concat: function(n, t) {
                return n && t
            }
        },
        t.semigroupAny = {
            concat: function(n, t) {
                return n || t
            }
        },
        t.getFunctionSemigroup = i.getSemigroup,
        t.semigroupString = {
            concat: function(n, t) {
                return n + t
            }
        },
        t.semigroupSum = {
            concat: function(n, t) {
                return n + t
            }
        },
        t.semigroupProduct = {
            concat: function(n, t) {
                return n * t
            }
        }
    },
    832020: function(n, t, r) {
        var u = this && this.__spreadArray || function(n, t, r) {
            if (r || 2 === arguments.length)
                for (var u, e = 0, o = t.length; e < o; e++)
                    !u && e in t || (u || (u = Array.prototype.slice.call(t, 0, e)),
                    u[e] = t[e]);
            return n.concat(u || Array.prototype.slice.call(t))
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.flatMapReader = t.flatMapTask = t.flatMapIO = t.flatMapEither = t.flatMapOption = t.flatMapNullable = t.liftOption = t.liftNullable = t.fromReadonlyNonEmptyArray = t.has = t.emptyRecord = t.emptyReadonlyArray = t.tail = t.head = t.isNonEmpty = t.singleton = t.right = t.left = t.isRight = t.isLeft = t.some = t.none = t.isSome = t.isNone = void 0;
        var e = r(331425);
        t.isNone = function(n) {
            return "None" === n._tag
        }
        ;
        t.isSome = function(n) {
            return "Some" === n._tag
        }
        ,
        t.none = {
            _tag: "None"
        };
        t.some = function(n) {
            return {
                _tag: "Some",
                value: n
            }
        }
        ;
        t.isLeft = function(n) {
            return "Left" === n._tag
        }
        ;
        t.isRight = function(n) {
            return "Right" === n._tag
        }
        ;
        t.left = function(n) {
            return {
                _tag: "Left",
                left: n
            }
        }
        ;
        t.right = function(n) {
            return {
                _tag: "Right",
                right: n
            }
        }
        ;
        t.singleton = function(n) {
            return [n]
        }
        ;
        t.isNonEmpty = function(n) {
            return n.length > 0
        }
        ;
        t.head = function(n) {
            return n[0]
        }
        ;
        t.tail = function(n) {
            return n.slice(1)
        }
        ,
        t.emptyReadonlyArray = [],
        t.emptyRecord = {},
        t.has = Object.prototype.hasOwnProperty;
        t.fromReadonlyNonEmptyArray = function(n) {
            return u([n[0]], n.slice(1), !0)
        }
        ;
        t.liftNullable = function(n) {
            return function(r, u) {
                return function() {
                    for (var e = [], o = 0; o < arguments.length; o++)
                        e[o] = arguments[o];
                    var i = r.apply(void 0, e);
                    return n.fromEither(null == i ? (0,
                    t.left)(u.apply(void 0, e)) : (0,
                    t.right)(i))
                }
            }
        }
        ;
        t.liftOption = function(n) {
            return function(r, u) {
                return function() {
                    for (var e = [], o = 0; o < arguments.length; o++)
                        e[o] = arguments[o];
                    var i = r.apply(void 0, e);
                    return n.fromEither((0,
                    t.isNone)(i) ? (0,
                    t.left)(u.apply(void 0, e)) : (0,
                    t.right)(i.value))
                }
            }
        }
        ;
        t.flatMapNullable = function(n, r) {
            return (0,
            e.dual)(3, (function(u, e, o) {
                return r.flatMap(u, (0,
                t.liftNullable)(n)(e, o))
            }
            ))
        }
        ;
        t.flatMapOption = function(n, r) {
            return (0,
            e.dual)(3, (function(u, e, o) {
                return r.flatMap(u, (0,
                t.liftOption)(n)(e, o))
            }
            ))
        }
        ;
        t.flatMapEither = function(n, t) {
            return (0,
            e.dual)(2, (function(r, u) {
                return t.flatMap(r, (function(t) {
                    return n.fromEither(u(t))
                }
                ))
            }
            ))
        }
        ;
        t.flatMapIO = function(n, t) {
            return (0,
            e.dual)(2, (function(r, u) {
                return t.flatMap(r, (function(t) {
                    return n.fromIO(u(t))
                }
                ))
            }
            ))
        }
        ;
        t.flatMapTask = function(n, t) {
            return (0,
            e.dual)(2, (function(r, u) {
                return t.flatMap(r, (function(t) {
                    return n.fromTask(u(t))
                }
                ))
            }
            ))
        }
        ;
        t.flatMapReader = function(n, t) {
            return (0,
            e.dual)(2, (function(r, u) {
                return t.flatMap(r, (function(t) {
                    return n.fromReader(u(t))
                }
                ))
            }
            ))
        }
    }
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/5892.d098d6b9dcf8a29b13c3.chunk.js.map
