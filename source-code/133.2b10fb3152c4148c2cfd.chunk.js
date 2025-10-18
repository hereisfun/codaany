"use strict";
(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[133], {
    753258: function(e, n, t) {
        t.d(n, {
            $: function() {
                return l
            }
        });
        var o = t(617421)
          , a = t(218521)
          , i = t(623182);
        const r = (0,
        a.createContext)({
            logs: [],
            pushLog: () => {}
            ,
            downloadLogs: () => {}
        });
        (0,
        i.ng)("BrainLogContextProvider", (function({children: e}) {
            const [n,t] = (0,
            a.useState)([])
              , i = (0,
            a.useCallback)((e => {
                t((n => [...n, e]))
            }
            ), [])
              , s = (0,
            a.useCallback)(( () => {
                if (!window.confirm("This will download a text file containing all the logs from the Brain interaction. The results may include metadata and contents of your private documents."))
                    return;
                !function(e, n) {
                    const t = new Blob([e],{
                        type: "text/plain"
                    })
                      , o = window.URL.createObjectURL(t)
                      , a = document.createElement("a");
                    a.href = o,
                    a.download = n,
                    document.body.appendChild(a),
                    a.click(),
                    document.body.removeChild(a),
                    window.URL.revokeObjectURL(o)
                }(n.join("\n"), "brain-logs.txt")
            }
            ), [n])
              , l = (0,
            a.useMemo)(( () => ({
                logs: n,
                pushLog: i,
                downloadLogs: s
            })), [n, i, s]);
            return (0,
            o.jsx)(r.Provider, {
                value: l,
                children: e
            })
        }
        ));
        var s = t(473795);
        function l() {
            const {pushLog: e} = (0,
            a.useContext)(r);
            return {
                chatDebugLog: (0,
                a.useCallback)(( (n, t) => {
                    (0,
                    s.i)(n, t),
                    e(`logMessage: ${n}\n metadata: ${JSON.stringify(t)}`)
                }
                ), [e])
            }
        }
    },
    642543: function(e, n, t) {
        t.d(n, {
            v_: function() {
                return A
            },
            xm: function() {
                return w
            },
            Ow: function() {
                return S
            }
        });
        var o = t(318225)
          , a = t(384794)
          , i = t(554976)
          , r = t(406184)
          , s = t(608547)
          , l = t(939344)
          , c = t(720102)
          , u = t(247226)
          , d = t(38469)
          , p = t(620790)
          , g = t(671136);
        var m = t(43308)
          , f = t(283130);
        if (9549 == t.j)
            var h = t(675004)
              , y = t.n(h);
        var j = t(575503);
        const I = "/signin"
          , k = "/internalAppApi/account/userAccountInfo";
        let b = !1;
        async function w(e, {isGrammarly: n=!1, onSignedOut: t, onAbort: o, redirectToHome: i=!0}={}) {
            const s = await r.Om.getUncommittedStats();
            Object.keys(s).length ? e(a.jO, {
                isGrammarly: n,
                redirectToHome: i,
                uncommittedStats: s,
                onAbort: o,
                onSignedOut: t
            }) : (await S({
                isGrammarly: n,
                redirectToHome: i
            }),
            t?.())
        }
        function A(e, {forceLeaveWithoutConfirmation: n, isAiEditor: t, continueTo: a}={}) {
            if (b)
                return;
            if (n && (window.onbeforeunload = null),
            t)
                return void (window.location.href = o.z91);
            const i = {};
            e && (i.errorMessage = e),
            a && (i.continueTo = a),
            (0,
            f.Nn)(window.location).assign(function(e="", n={}) {
                if (!n.continueTo) {
                    const e = function() {
                        const e = window.location;
                        if (!e.pathname && !e.hash)
                            return "";
                        return `${e.pathname || "/"}${e.hash || ""}`
                    }();
                    e && (n.continueTo = e)
                }
                const t = y().stringify(n, {
                    addQueryPrefix: !0
                });
                if (t)
                    return e + t;
                return e
            }(I, i))
        }
        async function S({isGrammarly: e, redirectToHome: n=!0, userCouldBeDeleted: t}={}) {
            t || await i.Qq.getInstance().get(k),
            b = !0,
            await async function() {
                (0,
                g.Vq)(g.Wo.ClearLocalState, {});
                const e = c.E.getInstance();
                window.localStorage.clear(),
                window.sessionStorage.clear(),
                await p.i.deleteDatabases(),
                await d.P.deleteDatabases(),
                await u.O.deleteDatabases(),
                await r.Om.deleteDatabases(e.EnableIdbOpLogLogging?.enabled)
            }(),
            function() {
                try {
                    s.l.getInstance().endSession()
                } catch (e) {}
            }(),
            await async function({isGrammarly: e, redirectToHome: n}) {
                const t = async () => {
                    if (window.onbeforeunload = null,
                    e)
                        return async function() {
                            const e = (0,
                            f.Nn)(l.get(o.eTV.CsrfTokenGrammarly), "Missing grammarlyCsrfToken")
                              , n = (0,
                            f.Nn)(m.$W.grammarlyEndpoints);
                            return await fetch(`${n.authBaseUrl}/v3/logout`, {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "X-Csrf-Token": e
                                },
                                credentials: "include"
                            }),
                            m.$W.grammarlyLinks.docListUrl
                        }();
                    const {redirectUrl: n} = await i.Qq.getInstance().post(o._yB);
                    return n
                }
                ;
                return (0,
                j.ib)((async e => {
                    const n = await e.startLogout();
                    await t(),
                    n()
                }
                ), {
                    fallback: async () => {
                        const e = await t();
                        e ? (0,
                        f.Nn)(window.location).assign(e) : n && (0,
                        f.Nn)(window.location).assign("/")
                    }
                })
            }({
                isGrammarly: e,
                redirectToHome: n
            })
        }
    },
    720568: function(e, n, t) {
        t.d(n, {
            I: function() {
                return s
            }
        });
        var o = t(682342)
          , a = t(782405)
          , i = t(396828)
          , r = t(218521);
        function s({hasSeenCategory: e}) {
            const n = a.Dv.maybeGetInstance()
              , t = (0,
            r.useCallback)(( () => {
                if (!n)
                    return {};
                return (n.get(o.eq.HasSeen) ?? {})[e] ?? {}
            }
            ), [e, n])
              , [s,l] = (0,
            r.useState)(t())
              , c = (0,
            r.useCallback)((r => {
                if (!n)
                    return;
                const s = t()
                  , c = s[r] ?? {
                    countSeen: 0,
                    lastSeenTimestamp: 0
                };
                c.countSeen = c.countSeen + 1,
                c.lastSeenTimestamp = i.tB();
                const u = {
                    ...s,
                    [r]: c
                };
                n.set(o.eq.HasSeen, {
                    ...a.Dv.getInstance().get(o.eq.HasSeen),
                    [e]: u
                }),
                l(u)
            }
            ), [t, e, n])
              , u = (0,
            r.useCallback)((e => (s[e]?.countSeen ?? 0) > 0), [s]);
            return {
                hasSeenState: s,
                markItemSeen: c,
                hasItemBeenSeen: u
            }
        }
    },
    711718: function(e, n, t) {
        t.d(n, {
            H: function() {
                return d
            },
            createGrammarlyFelog: function() {
                return g
            }
        });
        var o = t(318225)
          , a = t(297310)
          , i = t(334577)
          , r = t(68339)
          , s = t(977703)
          , l = t(331425)
          , c = t(748256)
          , u = t(190899);
        const d = "aiEditorRootLogger";
        class p {
            constructor(e, n, t, p, g) {
                this._appInstanceId = window.appInstanceId || u.vt(),
                this._logLevelMap = {
                    [i.$.Fatal]: a.y7.$.FATAL,
                    [i.$.Error]: a.y7.$.ERROR,
                    [i.$.Warn]: a.y7.$.WARN,
                    [i.$.Info]: a.y7.$.INFO,
                    [i.$.Debug]: a.y7.$.DEBUG,
                    [i.$.Trace]: a.y7.$.TRACE,
                    [i.$.None]: a.y7.$.OFF
                };
                const m = r.j.detect()
                  , f = {
                    browser: m.browser,
                    os: m.os,
                    version: String(m.version),
                    type: m.type,
                    raw: window.navigator.userAgent
                }
                  , h = new a.Uz;
                h.add({
                    docId: g,
                    sessionId: e.id,
                    appInstanceId: this._appInstanceId,
                    buildHash: n.VERSION_HASH,
                    codaUserId: this._getUserId(e) ?? o.Ckz,
                    userAgent: f
                });
                const y = c.fj(p.felogUrl, "logv2")
                  , j = new Set(p.filteredLoggers.map((e => `${t}.${e}`)))
                  , I = (0,
                l.pipe)(a.y_.felogLogger({
                    url: y,
                    appName: t,
                    appVersion: n.VERSION_HASH,
                    env: p.env,
                    fetch,
                    wrapExtra: !1
                }), a.y_.withCountingV2(), a.y_.withRateLimitingV2(), a.y_.filtered((e => !j.has(e.logger))), a.y_.withLevelLazy(( () => this._mapCodaLogLevelToGrammarly(p.logTransportLevel))))
                  , k = a.y_.consoleLogger
                  , b = (0,
                l.pipe)(a.y_.consoleLogger, a.y_.withLevelLazy(( () => this._mapCodaLogLevelToGrammarly(p.consoleLogLevel))), a.y_.filtered((e => e.logger !== d)))
                  , w = (0,
                s.concatAll)(a.y_.getLoggerMonoid(k))([b, I]);
                a.GU._U.configure(a.y_.toLazyLevelLegacyLogger(t, ( () => a.y7.$.TRACE), h)(w)),
                this._aiEditorRootLogger = a.Bx.Logging.getLogger(d)
            }
            appendLoggerContext(e) {
                a.GU._U.getRootLogger().context.add(a.D6.fromAny(e))
            }
            sendLog(e, n) {
                try {
                    this._getLogMethod(this._aiEditorRootLogger, e)(n)
                } catch (e) {
                    console.warn("Failed to send log to felog:", e)
                }
            }
            _getUserId(e) {
                return e.getRealUser()?.userId
            }
            _mapCodaLogLevelToGrammarly(e) {
                return this._logLevelMap[e] ?? a.y7.$.OFF
            }
            _getLogMethod(e, n) {
                switch (n) {
                case i.$.Fatal:
                    return n => e.fatal(n);
                case i.$.Error:
                    return n => e.error(n);
                case i.$.Warn:
                    return n => e.warn(n);
                case i.$.Info:
                    return n => e.info(n);
                case i.$.Debug:
                    return n => e.debug(n);
                case i.$.Trace:
                    return n => e.trace(n);
                case i.$.None:
                default:
                    return () => {}
                }
            }
        }
        function g(e, n, t, o, a) {
            return new p(e,n,t,o,a)
        }
    },
    765424: function(e, n, t) {
        t.d(n, {
            jO: function() {
                return Ue
            },
            G_: function() {
                return ze
            },
            gv: function() {
                return Pe
            },
            sb: function() {
                return Re
            }
        });
        var o = t(617421)
          , a = t(384794)
          , i = t(405435)
          , r = t(761517)
          , s = t(616661)
          , l = t(422191)
          , c = t(139089)
          , u = t(951004)
          , d = t(547e3)
          , p = t(445418)
          , g = t(28104)
          , m = t(671136)
          , f = t(548578)
          , h = t(654122)
          , y = t(318225)
          , j = t(250725)
          , I = t(831721)
          , k = t(59251)
          , b = t(287051)
          , w = "EFiPHXff"
          , A = "UYxaOFxy"
          , S = "miRTfW2j"
          , C = "ORSoJhOc"
          , v = "uFy3iNy_"
          , Y = "w96GDjRz"
          , x = "EXG5DXjV"
          , L = "zINHoUQu"
          , N = "xfB4qAHX"
          , T = "VISh7dTt"
          , O = "pv0X5HXj"
          , _ = "HWEJaWWk"
          , M = "lyw7b8GA"
          , E = "kchGUqzG"
          , P = t(313526)
          , z = t(623182)
          , D = t(622636)
          , R = t(296237)
          , U = t(256263)
          , $ = t(267298)
          , W = t(435810)
          , B = t(642543)
          , G = t(390143)
          , F = t(279860)
          , H = t(466053)
          , V = t(759285)
          , q = t(218521)
          , K = t(138307)
          , X = t(852660)
          , J = t(222133)
          , Q = t(430256);
        var Z = t(740347)
          , ee = t(60869)
          , ne = t(575503);
        const te = G.Gx(2)
          , oe = {
            [i.d.Auto]: "Use system setting",
            [i.d.Off]: "Light",
            [i.d.On]: "Dark"
        }
          , ae = {
            [i.d.Auto]: l.FI.MODE_SYSTEM,
            [i.d.Off]: l.FI.MODE_LIGHT,
            [i.d.On]: l.FI.MODE_DARK
        }
          , ie = {
            mode: d.f.Inline
        };
        function re(e, n) {
            if (!n?.active || n.type === j.Ed.SalesLed)
                return;
            const t = (0,
            $.ap)({
                finalHourText: "1 hour",
                trialEndTimestamp: n.scheduledEndTimestamp,
                trialDaysLeftThreshold: 7
            });
            return t ? n.type === j.Ed.ZoomEssentialApps ? `${t} left on your free year of ${e}` : `${t} left on your ${e} trial` : void 0
        }
        const se = (0,
        z.ng)("AccountPanel", (function(e) {
            const {activeSubscriptionTrial: n, className: t, docId: j, documentType: z, featureSetId: $, hideMakerProfileItem: G, isAiEditor: se, isMicrosoftTeams: le, onClose: ce, openAccountSettingsInNewTab: ue, openAdminSettings: de, realUser: pe, topContent: ge} = e
              , {isMobile: me} = (0,
            q.useContext)(f.o)
              , {openDialog: fe} = (0,
            q.useContext)(r.M)
              , {darkModeState: he, setDarkModeOn: ye, setDarkModeOff: je, setDarkModeAuto: Ie} = function() {
                const e = (0,
                q.useRef)((0,
                J.yN)())
                  , [n,t] = (0,
                q.useState)(X.x4())
                  , o = (0,
                q.useCallback)(( () => {
                    t(X.x4())
                }
                ), [t])
                  , a = (0,
                q.useCallback)(( () => {
                    (0,
                    m.Vq)(m.Wo.MobileAppearanceChanged, {
                        appearance: m.hO.Dark
                    }),
                    X.HB(i.d.On)
                }
                ), [])
                  , r = (0,
                q.useCallback)(( () => {
                    (0,
                    m.Vq)(m.Wo.MobileAppearanceChanged, {
                        appearance: m.hO.Light
                    }),
                    X.HB(i.d.Off)
                }
                ), [])
                  , s = (0,
                q.useCallback)(( () => {
                    (0,
                    m.Vq)(m.Wo.MobileAppearanceChanged, {
                        appearance: m.hO.SystemSetting
                    }),
                    X.HB(i.d.Auto)
                }
                ), []);
                return (0,
                Q.Bb)(e.current, K.UR, o),
                {
                    darkModeState: n,
                    setDarkModeOn: a,
                    setDarkModeOff: r,
                    setDarkModeAuto: s
                }
            }()
              , [ke,be] = (0,
            q.useState)()
              , [we,Ae] = (0,
            q.useState)(( () => re($, n)))
              , [Se,Ce] = (0,
            ee.U)()
              , ve = (0,
            Z.y)()
              , Ye = (0,
            q.useRef)()
              , xe = (0,
            q.useCallback)(( () => {
                const e = re($, n);
                e && Ae(e)
            }
            ), [$, n])
              , Le = (0,
            q.useCallback)(( () => {
                Ye.current = I.C.getInstance().setInterval(xe, te)
            }
            ), [xe])
              , Ne = (0,
            q.useCallback)(( () => {
                Ye.current && (I.C.getInstance().clearInterval(Ye.current),
                Ye.current = void 0)
            }
            ), []);
            (0,
            q.useEffect)(( () => {
                const e = u.a.maybeGetInstance();
                if (!e || se)
                    return;
                return (async () => {
                    try {
                        const n = await ve.load(e.getMakerProfile());
                        n && be(n.makerProfile)
                    } catch (e) {}
                }
                )(),
                Le(),
                () => {
                    Ne()
                }
            }
            ), [se, ve, Le, Ne]),
            (0,
            Q.Bb)(b.iG, b.KT.RealUserInfoChanged, Ce);
            const Te = (0,
            q.useCallback)((async () => {
                ce(),
                await (de?.({
                    refreshPage: !0
                }))
            }
            ), [ce, de])
              , Oe = Boolean(j)
              , _e = !Oe
              , Me = (0,
            q.useCallback)(( () => {
                ce();
                const e = (0,
                D.kb)({
                    isAiEditor: se
                });
                Oe || ue ? (0,
                W.US)(window.navigator.userAgent) || me ? window.location.href = e : (0,
                H.Wm)(e, {
                    target: "_blank",
                    features: ["noopener"]
                }) : window.location.href = e
            }
            ), [ce, se, Oe, ue, me])
              , Ee = (0,
            q.useCallback)(( () => {
                if (!ke)
                    return;
                const e = (0,
                U.QO)(ke.slug);
                (0,
                ne.ib)((n => {
                    window.location.href = e
                }
                ), {
                    fallback: () => {
                        (0,
                        H.Wm)(e, {
                            target: "_blank",
                            features: ["noopener"]
                        })
                    }
                }),
                ce()
            }
            ), [ke, ce])
              , Pe = (0,
            q.useCallback)(( () => {
                (0,
                m.Vq)(m.Wo.MyStatsEntrypointClicked, {
                    location: m.iC.AccountMenu
                });
                const e = (0,
                R.it)();
                (0,
                ne.ib)((n => {
                    window.location.href = e
                }
                ), {
                    fallback: () => {
                        (0,
                        H.Wm)(e, {
                            target: "_blank",
                            features: ["noopener"]
                        })
                    }
                }),
                ce()
            }
            ), [ce])
              , ze = (0,
            q.useCallback)(( () => {
                (0,
                m.Vq)(m.Wo.SignOutButtonClicked, {}),
                (0,
                B.xm)(fe, {
                    isGrammarly: se,
                    onSignedOut: ce
                }),
                ce()
            }
            ), [se, fe, ce])
              , De = (0,
            q.useCallback)(( () => {
                fe(a.HB, {})
            }
            ), [fe])
              , Re = () => {
                if (!me && !se && de)
                    return (0,
                    o.jsx)(g.D, {
                        icon: l.FI.PERSON_ADMIN,
                        onClick: Te,
                        children: "Admin settings"
                    }, "admin-settings")
            }
              , Ue = () => {
                if (!me)
                    return se ? (0,
                    o.jsxs)(g.D, {
                        icon: l.FI.PERSON_SETTINGS,
                        href: (0,
                        D.kb)({
                            isAiEditor: se
                        }),
                        hrefTarget: "_blank",
                        children: ["Account settings ", (0,
                        o.jsx)(s.In, {
                            className: E,
                            name: l.FI.OPEN_IN_NEW,
                            size: s.lK.Small
                        })]
                    }, "account-settings") : (0,
                    o.jsx)(g.D, {
                        icon: l.FI.PERSON_SETTINGS,
                        onClick: Me,
                        children: "Account settings"
                    }, "account-settings")
            }
              , $e = () => {
                if (G || se)
                    return;
                const e = ke ? Ee : De;
                return (0,
                o.jsx)(g.D, {
                    icon: l.FI.PERSON_CIRCLE,
                    onClick: e,
                    children: "My profile"
                }, ke ? "maker-profile" : "create-maker-profile")
            }
              , We = () => {
                if (!se)
                    return (0,
                    o.jsx)(g.D, {
                        icon: l.FI.CLIPBOARD_STATS,
                        onClick: Pe,
                        children: "My stats"
                    }, "my-statistics")
            }
              , Be = () => {
                if (!se)
                    return (0,
                    o.jsx)(g.D, {
                        icon: l.FI.GLOBE_LINES,
                        subMenu: (0,
                        o.jsx)(d.W, {
                            children: [$e(), We()]
                        }),
                        children: "Publishing"
                    }, "publishing")
            }
              , Ge = () => {
                if (!me || _e)
                    return (0,
                    o.jsx)(g.D, {
                        icon: l.FI.PERSON_LOG_OUT,
                        onClick: ze,
                        children: "Sign out"
                    }, "sign-out")
            }
              , Fe = (e, n, t) => (0,
            o.jsx)(g.D, {
                icon: ae[e],
                isActive: n === e,
                onClick: t,
                children: oe[e]
            }, e)
              , He = (0,
            q.useCallback)(( () => {
                Ie(),
                ce()
            }
            ), [Ie, ce])
              , Ve = (0,
            q.useCallback)(( () => {
                je(),
                ce()
            }
            ), [je, ce])
              , qe = (0,
            q.useCallback)(( () => {
                ye(),
                ce()
            }
            ), [ye, ce])
              , Ke = () => {
                if (z && !(0,
                V.e)(z) || le)
                    return;
                const e = (0,
                o.jsx)(d.W, {
                    children: [Fe(i.d.Auto, he, He), Fe(i.d.Off, he, Ve), Fe(i.d.On, he, qe)]
                })
                  , n = se ? "Dark mode" : "Appearance";
                return (0,
                o.jsx)(g.D, {
                    icon: l.FI.THEME,
                    subMenu: e,
                    children: n
                }, "appearance-settings")
            }
            ;
            return (0,
            o.jsx)(h.P, {
                direction: y.cIV.Vertical,
                children: (0,
                o.jsxs)("div", {
                    className: (0,
                    P.A)(w, t),
                    children: [ge, (0,
                    o.jsxs)(o.Fragment, {
                        children: [(0,
                        o.jsxs)("div", {
                            className: A,
                            children: [(0,
                            o.jsxs)("div", {
                                className: C,
                                "data-hj-suppress": !0,
                                children: [(0,
                                o.jsxs)("div", {
                                    className: S,
                                    children: [(0,
                                    o.jsx)(k.w, {
                                        className: x,
                                        noFade: !0,
                                        user: pe
                                    }), (0,
                                    o.jsx)("div", {
                                        className: L,
                                        children: (0,
                                        o.jsxs)("div", {
                                            className: N,
                                            children: [(0,
                                            o.jsx)("p", {
                                                className: T,
                                                title: pe.name,
                                                children: pe.name
                                            }), (0,
                                            o.jsx)("p", {
                                                className: O,
                                                title: pe.loginId ?? "",
                                                children: pe.loginId
                                            })]
                                        })
                                    })]
                                }), e.grammarlyProUphook]
                            }), we && (0,
                            o.jsx)("div", {
                                className: M,
                                children: we
                            }), ( () => {
                                if (me)
                                    return;
                                const e = [(0,
                                o.jsx)(p.N, {}, "divider-0"), Re(), Ue(), Ke(), (0,
                                o.jsx)(p.N, {}, "divider-1"), Be(), (0,
                                o.jsx)(p.N, {}, "divider-2"), Ge()].filter((e => !F.gD(e)));
                                return 0 !== e.length ? (0,
                                o.jsx)(d.W, {
                                    renderMode: ie,
                                    className: _,
                                    children: e
                                }) : void 0
                            }
                            )()]
                        }), me && !se && (0,
                        o.jsx)("div", {
                            className: v,
                            children: (0,
                            o.jsxs)(c.N, {
                                className: Y,
                                href: "/invite",
                                onClick: ce,
                                children: ["Invite friends, earn credit towards Coda", " ", (0,
                                o.jsx)("span", {
                                    role: "img",
                                    "aria-label": "celebrate",
                                    children: "🎉"
                                })]
                            })
                        })]
                    })]
                })
            })
        }
        ));
        var le = t(605e3)
          , ce = t(321033)
          , ue = t(44269)
          , de = t(445397)
          , pe = t(976500)
          , ge = t(421930)
          , me = t(220795)
          , fe = t(761751)
          , he = t(577963)
          , ye = t(554901)
          , je = t(736505)
          , Ie = t(831263)
          , ke = "uD8Cb5cB"
          , be = "inXN1ddB"
          , we = "BgrJx5hK"
          , Ae = "oZpN1UO4"
          , Se = "wBseXXaD"
          , Ce = "uSdW6hL6"
          , ve = "sJf1ept9"
          , Ye = "Vi6fyjPn"
          , xe = "UgSAgLiW"
          , Le = "bAptXBsp"
          , Ne = "IcgCaP3d"
          , Te = "TC6yexKb"
          , Oe = "JG4389PN"
          , _e = t(369007)
          , Me = t(283130)
          , Ee = t(749206)
          , Pe = (e => (e.Visible = "Visible",
        e.Anonymize = "Anonymize",
        e.AnonymizeNoWarning = "AnonymizeNoWarning",
        e.WarnNonAnonymous = "WarnNonAnonymous",
        e.Pseudonymize = "Pseudonymize",
        e))(Pe || {})
          , ze = (e => (e.Default = "Default",
        e.RightSidebar = "RightSidebar",
        e.PageListFooter = "PageListFooter",
        e))(ze || {});
        const De = {
            Default: {
                popoverPlacement: fe.mz.BottomRight,
                hideMakerProfileItem: !1,
                openAccountSettingsInNewTab: !1,
                showArrowAtPopoverAnchor: !0
            },
            RightSidebar: {
                popoverPlacement: fe.mz.LeftBottom,
                hideMakerProfileItem: !0,
                openAccountSettingsInNewTab: !0,
                showArrowAtPopoverAnchor: !1
            },
            PageListFooter: {
                popoverPlacement: fe.mz.TopRight,
                hideMakerProfileItem: !1,
                openAccountSettingsInNewTab: !1,
                showArrowAtPopoverAnchor: !1
            }
        };
        function Re() {
            return {
                realUser: (0,
                b.YT)() ?? je.K.AnonymousUser,
                effectiveUser: (0,
                b.wz)() ?? je.K.AnonymousUser
            }
        }
        const Ue = (0,
        z.ng)("AccountMenu", (function(e) {
            const {anonymityMode: n, docId: t, documentType: i, isMicrosoftTeams: s, isAiEditor: l, onConnectToDoc: c, realUser: u, effectiveUser: d, featureSetId: p, activeSubscriptionTrial: g, accountMenuDisplayMode: m=(l ? "RightSidebar" : "Default"), children: h} = e
              , {hideMakerProfileItem: y, openAccountSettingsInNewTab: j, popoverPlacement: b, showArrowAtPopoverAnchor: w} = De[m]
              , {isMobile: A} = (0,
            q.useContext)(f.o)
              , {openDialog: S} = (0,
            q.useContext)(r.M)
              , {openAdminSettings: C, loadAdminSettingVisiblity: v} = function() {
                const [e,n] = (0,
                q.useState)(!1)
                  , {organizations: t, enableLoad: o} = (0,
                q.useContext)(le.b)
                  , {adminWorkspacesGroupedByOrg: a, openAdminSettings: i} = (0,
                Ee.$)({
                    skipLoad: !e
                });
                return {
                    openAdminSettings: t?.length || a?.length ? i : void 0,
                    loadAdminSettingVisiblity: (0,
                    q.useCallback)(( () => {
                        o(),
                        n(!0)
                    }
                    ), [o])
                }
            }()
              , Y = (0,
            q.useRef)(null)
              , x = (0,
            q.useRef)(null)
              , [L,N] = (0,
            q.useState)("WarnNonAnonymous" === n)
              , T = ["Anonymize", "AnonymizeNoWarning"].includes(n)
              , O = "PageListFooter" === m;
            (0,
            q.useEffect)(( () => {
                if ("Anonymize" === n) {
                    const e = I.C.getInstance().setTimeout(( () => {
                        Y.current?.activatePopover()
                    }
                    ), 500);
                    return () => I.C.getInstance().clearTimeout(e)
                }
            }
            ), [n]);
            const _ = (0,
            q.useCallback)(( () => {
                (0,
                Me.Nn)(Y.current).deactivatePopover()
            }
            ), [Y])
              , M = () => {
                if (d.isPseudonymous && "Pseudonymize" === n) {
                    const e = (0,
                    o.jsxs)("span", {
                        children: ["You're currently logged in as ", u.name, " but are editing anonymously as", " ", (0,
                        o.jsx)("span", {
                            className: xe,
                            children: d.name
                        }), "."]
                    });
                    return (0,
                    o.jsx)(me.S, {
                        title: "Editing anonymously",
                        message: e,
                        hideShadow: !0,
                        children: (0,
                        o.jsxs)(ue._, {
                            className: (0,
                            P.A)(Ie.A.primary, Ye),
                            onClick: () => c?.(!1),
                            codaLoggingId: (0,
                            _e.HE)(ye.wL.PseudonymousEditAccountMenu, "edit-asUser"),
                            children: ["Edit as ", u.name]
                        })
                    })
                }
            }
              , E = () => {
                let n;
                if (!T)
                    return n = (0,
                    o.jsx)(se, {
                        className: (0,
                        P.A)(Ce, ve),
                        docId: t,
                        documentType: i,
                        isMicrosoftTeams: s,
                        isAiEditor: l,
                        realUser: u,
                        onClose: _,
                        topContent: M(),
                        featureSetId: p,
                        activeSubscriptionTrial: g,
                        hideMakerProfileItem: y,
                        openAccountSettingsInNewTab: j,
                        openAdminSettings: C,
                        grammarlyProUphook: e.grammarlyProUphook
                    }),
                    (0,
                    o.jsx)("div", {
                        className: (0,
                        P.A)(Ae, {
                            [be]: "Default" === m,
                            [Se]: "RightSidebar" === m
                        }),
                        children: n
                    });
                {
                    const e = u;
                    n = (0,
                    o.jsx)(me.S, {
                        title: "Viewing anonymously",
                        message: (0,
                        o.jsxs)(o.Fragment, {
                            children: ["Open this doc as ", e.name, " (", e.loginId, ") to let others mention you in comments and add your name to tables."]
                        }),
                        children: (0,
                        o.jsxs)(ue._, {
                            className: (0,
                            P.A)(Ie.A.primary, Ye),
                            onClick: () => c?.(!0),
                            codaLoggingId: (0,
                            _e.HE)(ye.wL.AnonymousEditWarning, "edit-asUser"),
                            children: ["Open as ", e.name]
                        })
                    })
                }
            }
              , z = (0,
            q.useCallback)((e => {
                e.preventDefault(),
                S(a.Gn, {})
            }
            ), [S]);
            let D;
            D = T ? je.K.AnonymousUser : "Pseudonymize" === n ? d || je.K.AnonymousUser : u || je.K.AnonymousUser;
            const R = () => (0,
            o.jsx)("div", {
                className: (0,
                P.A)({
                    [we]: "Default" === m,
                    [Le]: "RightSidebar" === m,
                    [Ne]: O
                }),
                ...(0,
                H.mP)({
                    codaUiId: pe.R.AccountMenu
                }),
                "data-hj-suppress": !0,
                "aria-label": "Account and mentions menu",
                ref: x,
                children: (0,
                o.jsx)(k.w, {
                    noFade: !0,
                    user: D
                })
            })
              , U = (0,
            q.useCallback)(( () => x.current?.getBoundingClientRect() ?? null), [])
              , $ = (0,
            q.useCallback)((e => {
                const {isPseudonymous: n, name: t} = d
                  , a = n ? "You're editing this doc anonymously" : "You're visible in this doc."
                  , i = n ? `You'll appear as ${t} to other users of this doc.` : "Your name, email, and avatar are easily visible to other users of this doc."
                  , r = (0,
                o.jsx)(me.S, {
                    title: a,
                    message: i,
                    children: (0,
                    o.jsx)(ue._, {
                        className: (0,
                        P.A)(Ie.A.primary, Ye),
                        onClick: () => N(!1),
                        children: "Got it"
                    })
                });
                return (0,
                o.jsx)(ce.W, {
                    placement: fe.mz.BottomRight,
                    popoverContent: (0,
                    o.jsx)("div", {
                        className: Ae,
                        children: r
                    }),
                    children: e
                })
            }
            ), [d]);
            let W;
            const B = (0,
            P.A)(ke, e.className, Ie.A.naked, {
                [be]: "Default" === m,
                [Te]: O
            });
            return W = A && !T ? (0,
            o.jsx)(ue._, {
                className: B,
                onClick: z,
                codaLoggingId: ye.wL.AccountMenuButton,
                children: R()
            }) : (0,
            o.jsxs)(de.E, {
                className: B,
                escapeMode: de.J.ToParent,
                getAnchorRect: O ? void 0 : U,
                placement: b,
                popoverContent: E,
                ref: Y,
                shouldAnimateMount: O,
                onShow: v,
                onMouseEnter: v,
                style: O ? ge.T.Tertiary : void 0,
                showArrowAtAnchor: w,
                codaLoggingId: ye.wL.AccountMenuButton,
                children: [R(), O && (0,
                o.jsx)(he.zI, {
                    tooltip: D.name,
                    className: Oe,
                    children: D.name
                }), h]
            }),
            L ? $(W) : W
        }
        ))
    },
    220795: function(e, n, t) {
        t.d(n, {
            S: function() {
                return h
            }
        });
        var o = t(617421)
          , a = t(44269)
          , i = t(616661)
          , r = t(422191)
          , s = t(831263)
          , l = "iL8LlHam"
          , c = "f930k3YP"
          , u = "YnDwcSTL"
          , d = "if_66uLd"
          , p = "F_Wbbp1k"
          , g = t(313526)
          , m = t(623182)
          , f = t(812693);
        const h = (0,
        m.TF)("DocumentAlert", (function({hideShadow: e, message: n, title: t, children: m, className: h, onClose: y, stopPropagationOnClick: j}, I) {
            return (0,
            o.jsxs)("div", {
                className: (0,
                g.A)(l, h, {
                    [p]: e
                }),
                ref: I,
                onClick: j ? f.d : void 0,
                children: ["" === t.trim() ? null : (0,
                o.jsx)("div", {
                    className: c,
                    children: (0,
                    o.jsx)("div", {
                        className: u,
                        children: t
                    })
                }), y ? (0,
                o.jsx)(a._, {
                    className: (0,
                    g.A)(s.A.naked, d),
                    onClick: y,
                    children: (0,
                    o.jsx)(i.In, {
                        name: r.FI.CLOSE
                    })
                }) : null, n, m]
            })
        }
        ))
    },
    749206: function(e, n, t) {
        t.d(n, {
            $: function() {
                return I
            }
        });
        var o = t(384794)
          , a = t(623211)
          , i = t(3163)
          , r = t(605e3)
          , s = t(761517)
          , l = t(814532);
        if (9549 == t.j)
            var c = t(283130);
        var u = t(210837)
          , d = t(694490)
          , p = t(466053)
          , g = t(907258)
          , m = t(218521)
          , f = t(289548)
          , h = t(162357)
          , y = t(364112);
        if (9549 == t.j)
            var j = t(785451);
        function I({skipLoad: e}={}) {
            const n = (0,
            f.H)(( () => l.s2.maybeGetInstance()))
              , t = (0,
            j.Zp)()
              , [I,k] = (0,
            m.useState)()
              , {organizations: b} = (0,
            m.useContext)(r.b)
              , {openDialog: w} = (0,
            m.useContext)(s.M)
              , A = (0,
            h.D)()
              , [S,C] = (0,
            m.useState)()
              , v = (0,
            y.r)((async t => {
                if (!A && !e && n)
                    try {
                        const {workspaces: e} = await t(n.listAdminWorkspaces());
                        k(e)
                    } catch (e) {
                        if ((0,
                        d.wm)(e))
                            return;
                        C(e)
                    }
            }
            ), [A, e, n])
              , Y = (0,
            m.useCallback)((e => {
                switch (e.type) {
                case a.z1.Organization:
                    return;
                case a.z1.NonAdminOrganization:
                    return e.workspaces[0].workspaceId;
                case a.z1.Workspace:
                    return e.workspace.workspaceId
                }
            }
            ), [])
              , x = (0,
            m.useCallback)((async ({refreshPage: e, selectedWorkspaceId: n}={}) => {
                if (!b || !I)
                    return;
                const r = (0,
                g.mW)(I, b);
                let s;
                if (n && (s = r.find((e => {
                    const {type: t} = e;
                    switch (t) {
                    case a.z1.Organization:
                    case a.z1.NonAdminOrganization:
                        return e.workspaces?.find((e => e.workspaceId === n));
                    case a.z1.Workspace:
                        return e.workspace.workspaceId === n;
                    default:
                        return (0,
                        c.pL)(t)
                    }
                }
                ))),
                s || 1 === r.length) {
                    const o = s ?? r[0]
                      , l = (0,
                    u.CW)({
                        page: i.ir.About,
                        organizationId: o.type === a.z1.Organization ? o.organization.organizationId : void 0,
                        workspaceId: s ? n : Y(o)
                    });
                    e ? (0,
                    p.Wm)(l, {
                        target: "_blank",
                        features: ["noopener"]
                    }) : t(l)
                } else
                    w(o.I6, {
                        refreshPage: e
                    })
            }
            ), [I, Y, t, w, b]);
            return (0,
            m.useEffect)(( () => {
                v()
            }
            ), [v]),
            {
                adminWorkspacesGroupedByOrg: I,
                loadAdminWorkspaces: v,
                openAdminSettings: x,
                error: S
            }
        }
    },
    124842: function(e, n, t) {
        t.d(n, {
            i: function() {
                return i
            }
        });
        var o = t(218521);
        const a = Object.freeze({
            activeCanvas: void 0,
            statistics: {
                documentStatistic: void 0,
                activeCanvasStatistic: void 0,
                selectionStatistic: void 0
            },
            subscribe: () => {}
            ,
            unsubscribe: () => {}
        })
          , i = (0,
        o.createContext)(a)
    },
    296237: function(e, n, t) {
        t.d(n, {
            cg: function() {
                return r
            },
            it: function() {
                return a
            },
            nI: function() {
                return i
            }
        });
        var o = t(43308);
        t(920167),
        t(748256);
        function a(e) {
            return s("/mystats", e)
        }
        function i(e, n, t) {
            return s(`/mystats/pack/${function(e) {
                return `${e}`
            }(String(e))}`, t)
        }
        function r(e, n, t) {
            return s(`/mystats/doc/${function(e) {
                return `_d${e}`
            }(e)}`, t)
        }
        function s(e, n) {
            return n?.absoluteUrl ? function(e) {
                return `${o.$W.host}${e}`
            }(e) : e
        }
    },
    296092: function(e, n, t) {
        t.d(n, {
            En: function() {
                return S
            },
            b7: function() {
                return g
            }
        });
        var o = t(603634);
        const a = o.Ik({
            dateString: o.Yj().optional(),
            timezone: o.Yj().optional()
        }).passthrough()
          , i = o.Ik({
            name: o.Yj(),
            value: o.Yj()
        })
          , r = o.KC([o.Ik({
            pname: o.Yj(),
            alias: o.Vx(),
            args: i.array().optional()
        }), o.Ik({
            pname: o.Vx(),
            alias: o.Yj(),
            args: i.array().optional()
        })])
          , s = o.k5(["UNKNOWN", "G2_ASSISTANT_CONVERSATION_MODEL_V2"])
          , l = (o.Ik({
            toolName: o.Yj(),
            toolCallId: o.Yj(),
            result: o.L5()
        }),
        o.Ik({
            clientType: o.Yj().optional(),
            domain: o.Yj().optional(),
            domainCategory: o.Yj().optional(),
            app: o.Yj().optional(),
            appCategory: o.Yj().optional(),
            clientFeatures: s.array().optional()
        }))
          , c = o.Ik({
            userType: o.Yj().optional(),
            isAnonymous: o.zM().optional(),
            isInternal: o.zM().optional(),
            isTest: o.zM().optional(),
            dialect: o.bz().optional(),
            userName: o.Yj().optional(),
            codaUserId: o.Yj()
        })
          , u = o.Ik({
            sessionText: o.Yj().optional(),
            highlightedText: o.Yj().optional(),
            selectionRange: o.Ik({
                start: o.ai(),
                end: o.ai()
            }).optional(),
            unicodeSelectionRange: o.bz().optional(),
            writingType: o.Yj().optional(),
            intendedOutcome: o.Yj().optional(),
            detectedLanguage: o.Yj().optional()
        })
          , d = o.Ik({
            entrypoint: o.Yj().optional(),
            encryptedStateBlob: o.Yj().optional(),
            experiments: o.YO(o.Yj()).optional(),
            additionalContext: o.g1(o.bz()).optional(),
            clientInfo: l.optional(),
            userInfo: c.optional(),
            stateBlob: o.Yj().optional(),
            textInfo: u.optional(),
            timezone: o.Yj().optional()
        })
          , p = o.Ik({
            skillPrompts: o.g1(o.Yj(), o.Yj()).optional(),
            prompt: o.Yj().optional(),
            promptTemplateVariables: o.g1(o.Yj(), o.Yj()).optional(),
            model: o.Yj().optional(),
            dateString: o.Yj().optional(),
            timezone: o.Yj().optional(),
            includeEvalDebugMessages: o.zM().optional(),
            toolSchemaVariantPackIds: o.YO(o.Yj()).optional(),
            debugOverrideInfo: a.optional()
        })
          , g = o.Ik({
            trackingId: o.Yj().optional(),
            action: r.optional(),
            context: d.optional(),
            llmProxyConfig: o.bz().optional(),
            metadata: o.bz().optional(),
            agentInstanceId: o.Yj().optional(),
            overrides: p.optional()
        })
          , m = (o.Ik({
            v2: o.Ik({
                llmChat: o.Ik({
                    conversationHistory: o.YO(o.bz()),
                    conversationId: o.ai().optional()
                })
            })
        }),
        o.Ik({
            unencryptedRequestStateBlob: o.Yj().optional(),
            unencryptedResponseStateBlob: o.Yj().optional()
        }))
          , f = o.Ik({
            finalResult: o.Ik({
                result: o.Ik({
                    objectValue: o.Ik({
                        json: o.Yj(),
                        kind: o.KC([o.eu("prompt_output"), o.eu("ai_editor_output")])
                    }),
                    actionPname: o.Yj(),
                    metadata: o.Ik({
                        json: o.Yj()
                    })
                }),
                stateBlob: o.Yj().optional(),
                dataCollectionHelpers: m.optional()
            })
        })
          , h = o.Ik({
            error: o.Ik({
                code: o.ai(),
                message: o.Yj(),
                details: o.Ik({
                    errorType: o.Yj(),
                    errorMessage: o.Yj(),
                    errorString: o.Yj(),
                    errorStack: o.Yj().optional()
                }).passthrough()
            })
        })
          , y = (o.KC([f, h]),
        o.Ik({
            partialResult: o.Ik({
                result: o.Ik({
                    objectValue: o.Ik({
                        json: o.Yj(),
                        kind: o.KC([o.eu("prompt_output"), o.eu("ai_editor_output")])
                    }),
                    actionPname: o.Yj()
                })
            })
        }),
        o.Ik({
            id: o.Yj(),
            name: o.Yj(),
            short_example: o.Yj().optional()
        }))
          , j = o.gM("pname", [o.Ik({
            pname: o.eu("AgentRuntime/Suggestion/Rewrite"),
            explanation: o.Yj(),
            rewrite: o.Yj(),
            begin: o.ai(),
            end: o.ai(),
            contentId: o.Yj()
        }), o.Ik({
            pname: o.eu("AgentRuntime/Suggestion/Guide/Plagiarism"),
            explanation: o.Yj(),
            title: o.Yj(),
            rewrite: o.Yj(),
            begin: o.ai(),
            end: o.ai(),
            contentId: o.Yj(),
            extra_properties: o.Ik({
                source_similarity: o.ai()
            })
        }), o.Ik({
            pname: o.eu("AgentRuntime/Suggestion/Guide"),
            explanation: o.Yj(),
            title: o.Yj(),
            rewrite: o.Yj(),
            begin: o.ai(),
            end: o.ai(),
            contentId: o.Yj()
        })])
          , I = o.Ik({
            title: o.Yj()
        })
          , k = o.Ik({
            index: o.ai(),
            title: o.Yj(),
            url: o.Yj(),
            iconUrl: o.Yj().optional(),
            searchRequestId: o.Yj(),
            recordId: o.Yj()
        })
          , b = o.Ik({
            toolName: o.Yj(),
            toolCallId: o.Yj(),
            args: o.g1(o.Yj(), o.L5())
        })
          , w = o.Ik({
            requestId: o.Yj(),
            timezone: o.Yj(),
            userInput: o.Yj(),
            highlightedText: o.Yj().optional(),
            editorContent: o.Yj().optional(),
            appContexts: o.bz().optional(),
            userInfo: c.optional(),
            clientInfo: l.optional(),
            experiments: o.YO(o.Yj()).optional(),
            isDeepResearch: o.zM().optional()
        })
          , A = o.Ik({
            log: o.Yj(),
            metadata: o.bz().optional()
        })
          , S = o.Ik({
            context: w,
            messages: o.YO(A)
        })
          , C = o.Ik({
            title: o.Yj(),
            mainContent: o.Yj(),
            additionalContent: o.Yj().nullable().optional()
        });
        o.Ik({
            historyTitle: o.Yj().optional(),
            sources: o.YO(k).optional(),
            responseText: o.Yj().optional(),
            responseText1: o.Yj().optional(),
            responseText2: o.Yj().optional(),
            writing_style: y.optional(),
            ideation_approaches: o.YO(o.Yj()).optional(),
            available_writing_styles: o.YO(y).optional(),
            currentSessionRewrites: o.YO(j).optional(),
            currentSessionMessages: o.YO(o.bz()).optional(),
            evalDebugMessages: o.YO(o.bz()).optional(),
            planning: o.YO(I).optional(),
            clientSideToolCalls: o.YO(b).optional(),
            debugging: S.optional(),
            tabResponses: o.YO(C).optional()
        })
    },
    104251: function(e, n) {
        n.A = {
            root: "M8Xgui21",
            nav: "XobPLOej",
            panelContent: "wkjpT2sj",
            stale: "vaX4NeSS"
        }
    }
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/133.2b10fb3152c4148c2cfd.chunk.js.map
