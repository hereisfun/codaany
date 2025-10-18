"use strict";
(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[3371], {
    866230: function(e, t, n) {
        n.d(t, {
            A: function() {
                return b
            },
            C: function() {
                return O
            },
            D: function() {
                return o
            },
            E: function() {
                return E
            },
            F: function() {
                return M
            },
            I: function() {
                return c
            },
            M: function() {
                return I
            },
            P: function() {
                return $
            },
            R: function() {
                return jo
            },
            S: function() {
                return a
            },
            T: function() {
                return U
            },
            a: function() {
                return Q
            },
            b: function() {
                return d
            },
            c: function() {
                return N
            },
            d: function() {
                return Ds
            },
            e: function() {
                return B
            },
            f: function() {
                return es
            },
            g: function() {
                return X
            },
            h: function() {
                return he
            },
            i: function() {
                return ue
            },
            j: function() {
                return _
            },
            k: function() {
                return z
            },
            l: function() {
                return k
            },
            m: function() {
                return S
            },
            n: function() {
                return L
            },
            o: function() {
                return x
            },
            p: function() {
                return q
            },
            q: function() {
                return G
            },
            r: function() {
                return l
            },
            s: function() {
                return W
            },
            t: function() {
                return Os
            },
            u: function() {
                return Ue
            },
            v: function() {
                return g
            },
            w: function() {
                return Ps
            },
            x: function() {
                return da
            },
            y: function() {
                return pa
            },
            z: function() {
                return ha
            }
        });
        var r = Object.defineProperty
          , i = (e, t, n) => (( (e, t, n) => {
            t in e ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
        )(e, "symbol" != typeof t ? t + "" : t, n),
        n)
          , o = (e => (e.Closed = "close.click",
        e.Complete = "survey.completed",
        e.FeedbackClosed = "feedback.closed",
        e.PageChange = "page.change",
        e.API = "api",
        e.Override = "override",
        e))(o || {})
          , s = (e => (e.Feedback = "feedbackButton",
        e.IPS = "inProductSurvey",
        e))(s || {})
          , a = (e => (e.ReplayCapture = "replay.capture",
        e.SDKReady = "sdk.ready",
        e.SurveyAppeared = "survey.appeared",
        e.SurveyClosed = "survey.closed",
        e.SurveyDimensions = "survey.dimensions",
        e.SurveyFadingOut = "survey.fadingOut",
        e.SurveyHeight = "survey.height",
        e.SurveyPresented = "survey.presented",
        e.SurveyLifeCycle = "survey.lifeCycle",
        e.SurveyWidth = "survey.width",
        e.SurveyWillClose = "survey.willClose",
        e.SurveyWillPresent = "survey.will.present",
        e.CloseSurveyOnOverlayClick = "close.survey.overlayClick",
        e.VisitorIDUpdated = "visitor.id.updated",
        e.QuestionAnswered = "question.answered",
        e))(a || {})
          , l = (e => (e.SurveyId = "survey.id",
        e))(l || {});
        const u = {
            SDK_READY: "sdk.ready",
            SURVEY_APPEARED: "survey.appeared",
            SURVEY_CLOSED: "survey.closed",
            SURVEY_DIMENSIONS: "survey.dimensions",
            SURVEY_FADING_OUT: "survey.fadingOut",
            SURVEY_HEIGHT: "survey.height",
            SURVEY_WIDTH: "survey.width",
            SURVEY_PRESENTED: "survey.presented",
            SURVEY_LIFE_CYCLE: "survey.lifeCycle",
            SURVEY_WILL_CLOSE: "survey.willClose",
            SURVEY_WILL_PRESENT: "survey.will.present",
            QUESTION_ANSWERED: "question.answered",
            REPLAY_CAPTURE: "replay.capture",
            CLOSE_SURVEY_ON_OVERLAY_CLICK: "close.survey.overlayClick",
            VISITOR_ID_UPDATED: "visitor.id.updated",
            DATA: {
                DISMISS_REASONS: {
                    API: "api",
                    CLOSED: "close.click",
                    COMPLETE: "survey.completed",
                    PAGE_CHANGE: "page.change",
                    OVERRIDE: "override"
                },
                SURVEY_ID: "survey.id"
            }
        };
        var c = (e => (e.VerifyViewVersion = "verify.view.version",
        e.CurrentQuestion = "survey.question",
        e.ViewPrototypeClick = "question.prototype.click",
        e.ViewAgreementClick = "question.agreement.click",
        e.RecordedTaskStart = "recorded.task.start",
        e.RecordedTaskPermissionScreen = "recorded.task.permission.screen",
        e.SurveyComplete = "survey.complete",
        e))(c || {})
          , d = (e => (e.ViewVersion = "view.version",
        e.QuestionId = "qid",
        e.Props = "props",
        e))(d || {});
        let p;
        const h = new Uint8Array(16);
        function f() {
            if (!p && (p = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !p))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return p(h)
        }
        const y = [];
        for (let e = 0; e < 256; ++e)
            y.push((e + 256).toString(16).slice(1));
        const m = {
            randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        function g(e, t, n) {
            if (m.randomUUID && !t && !e)
                return m.randomUUID();
            const r = (e = e || {}).random || (e.rng || f)();
            if (r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128,
            t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e)
                    t[n + e] = r[e];
                return t
            }
            return function(e, t=0) {
                return y[e[t + 0]] + y[e[t + 1]] + y[e[t + 2]] + y[e[t + 3]] + "-" + y[e[t + 4]] + y[e[t + 5]] + "-" + y[e[t + 6]] + y[e[t + 7]] + "-" + y[e[t + 8]] + y[e[t + 9]] + "-" + y[e[t + 10]] + y[e[t + 11]] + y[e[t + 12]] + y[e[t + 13]] + y[e[t + 14]] + y[e[t + 15]]
            }(r)
        }
        var w = (e => (e.Ready = "ready",
        e.NoSurvey = "no survey",
        e))(w || {})
          , v = (e => (e.Preview = "sprigPreviewKey",
        e))(v || {});
        const b = "ul-app";
        var _ = (e => (e.Caption = "ul-caption",
        e.CardContainer = "ul-card__container",
        e.CardMainContent = "ul-card-main-content",
        e.Choice = "choice",
        e.ChoiceCheckbox = "select-checkbox",
        e.ChoiceGroup = "ul-card__choices",
        e.ChoiceLabel = "select-label",
        e.ChoiceLabelContainer = "choice-label-container",
        e.ChoiceRadio = "select-radio",
        e.ChoiceTextEntryContainer = "choice-text-entry-container",
        e.ChoiceTextInput = "choice-text-input",
        e.CloseButton = "close-btn",
        e.CloseContainer = "close-container",
        e.ConsentLegalNameInput = "ul-consent-legal__name-input",
        e.CustomStyle = "ul-custom-style",
        e.DesktopSuffix = "--desktop",
        e.FadeInTransition = "fade-in-transition",
        e.Footer = "footer",
        e.LikertNumber = "likert-number",
        e.LikertSmiley = "likert-smiley",
        e.LikertStar = "likert-star",
        e.LoadingSpinner = "ul-loading-spinner",
        e.LoadingSpinnerContainer = "ul-loading-spinner-container",
        e.LoadingSpinnerFirst = "first",
        e.LoadingSpinnerFourth = "fourth",
        e.LoadingSpinnerSecond = "second",
        e.LoadingSpinnerThird = "third",
        e.MobileSuffix = "--mobile",
        e.NPSNumber = "nps-number",
        e.OpenTextInput = "ul-card-text__input",
        e.QuestionHeader = "ul-question",
        e.QuestionHeaderContainer = "question-header-container",
        e.VideoCard = "ul-card--video",
        e.CheckmarkButton = "ul-button-checkmark",
        e.InactiveButton = "ul-button-inactive",
        e.LeftAlignButton = "ul-button-left-align",
        e.ButtonDisabled = "sprig-button-disabled",
        e.SkipButton = "ul-card-skip__button",
        e.FeedbackButton = "sprig-feedback-button",
        e.FeedbackContainer = "sprig-feedback-container",
        e.FeedbackErrorContainer = "sprig-feedback-error-container",
        e.FeedbackLoadingAnimation = "sprig-feedback-loading-animation",
        e.FeedbackLoadingContainer = "sprig-feedback-loading-container",
        e))(_ || {});
        const S = "#e6e6e6"
          , k = "#bd282a"
          , E = 1030;
        var I = (e => (e.Video = "video",
        e.Audio = "audio",
        e.Screen = "screen",
        e))(I || {})
          , L = (e => (e.PermissionStatus = "permission.status",
        e.AvPermission = "av.permission",
        e.ScreenPermission = "screen.permission",
        e.BeginRecording = "begin.recording",
        e.StartTask = "start.task",
        e.FinishTask = "finish.task",
        e))(L || {})
          , U = (e => (e.Abandoned = "abandoned",
        e.GivenUp = "given.up",
        e.Completed = "completed",
        e))(U || {})
          , x = (e => (e.ScreenPermissionRequested = "screen.permission.requested",
        e.PermissionDescriptors = "permission.descriptors",
        e.PermissionStatusCallback = "permission.status.callback",
        e.StreamReadyCallback = "stream.ready.callback",
        e.StreamCanceledCallback = "stream.canceled.callback",
        e.TaskCompleteCallback = "task.complete.callback",
        e.TaskResponse = "task.response",
        e.TaskStatus = "task.status",
        e.RecordingMediaTypes = "recording.media.types",
        e.StartRecordingCallback = "start.recording.callback",
        e.PassthroughData = "passthrough.data",
        e.CurrentIndex = "current.index",
        e.UploadCallback = "upload.callback",
        e.ProgressCallback = "progress.callback",
        e.BeginCallback = "begin.callback",
        e))(x || {})
          , C = (e => (e.Preview = "sprig.previewKey",
        e.Credentials = "userleap.ids",
        e.PageViews = "userleap.pageviews",
        e))(C || {});
        const A = () => {
            try {
                return window.parent.Intercom
            } catch {
                return null
            }
        }
          , P = Object.freeze(Object.defineProperty({
            __proto__: null,
            disable: () => {
                const e = A();
                e && (e.ul_wasVisible = !!document.querySelector("iframe.intercom-launcher-frame"),
                e.ul_wasVisible && e("update", {
                    hide_default_launcher: !0
                }))
            }
            ,
            enable: () => {
                const e = A();
                e && (e.ul_wasVisible && e("update", {
                    hide_default_launcher: !1
                }),
                delete e.ul_wasVisible)
            }
        }, Symbol.toStringTag, {
            value: "Module"
        }))
          , D = [P];
        class O {
            static disable() {
                D.forEach((e => e.disable()))
            }
            static enable() {
                D.forEach((e => e.enable()))
            }
        }
        var R = class extends Error {
            constructor(e, t, n) {
                super(`Possible EventEmitter memory leak detected. ${n} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),
                this.emitter = e,
                this.type = t,
                this.count = n,
                this.name = "MaxListenersExceededWarning"
            }
        }
          , T = class {
            static listenerCount(e, t) {
                return e.listenerCount(t)
            }
            constructor() {
                this.events = new Map,
                this.maxListeners = T.defaultMaxListeners,
                this.hasWarnedAboutPotentialMemoryLeak = !1
            }
            _emitInternalEvent(e, t, n) {
                this.emit(e, t, n)
            }
            _getListeners(e) {
                return Array.prototype.concat.apply([], this.events.get(e)) || []
            }
            _removeListener(e, t) {
                const n = e.indexOf(t);
                return n > -1 && e.splice(n, 1),
                []
            }
            _wrapOnceListener(e, t) {
                const n = (...r) => (this.removeListener(e, n),
                t.apply(this, r));
                return Object.defineProperty(n, "name", {
                    value: t.name
                }),
                n
            }
            setMaxListeners(e) {
                return this.maxListeners = e,
                this
            }
            getMaxListeners() {
                return this.maxListeners
            }
            eventNames() {
                return Array.from(this.events.keys())
            }
            emit(e, ...t) {
                const n = this._getListeners(e);
                return n.forEach((e => {
                    e.apply(this, t)
                }
                )),
                n.length > 0
            }
            addListener(e, t) {
                this._emitInternalEvent("newListener", e, t);
                const n = this._getListeners(e).concat(t);
                if (this.events.set(e, n),
                this.maxListeners > 0 && this.listenerCount(e) > this.maxListeners && !this.hasWarnedAboutPotentialMemoryLeak) {
                    this.hasWarnedAboutPotentialMemoryLeak = !0;
                    const t = new R(this,e,this.listenerCount(e));
                    console.warn(t)
                }
                return this
            }
            on(e, t) {
                return this.addListener(e, t)
            }
            once(e, t) {
                return this.addListener(e, this._wrapOnceListener(e, t))
            }
            prependListener(e, t) {
                const n = this._getListeners(e);
                if (n.length > 0) {
                    const r = [t].concat(n);
                    this.events.set(e, r)
                } else
                    this.events.set(e, n.concat(t));
                return this
            }
            prependOnceListener(e, t) {
                return this.prependListener(e, this._wrapOnceListener(e, t))
            }
            removeListener(e, t) {
                const n = this._getListeners(e);
                return n.length > 0 && (this._removeListener(n, t),
                this.events.set(e, n),
                this._emitInternalEvent("removeListener", e, t)),
                this
            }
            off(e, t) {
                return this.removeListener(e, t)
            }
            removeAllListeners(e) {
                return e ? this.events.delete(e) : this.events.clear(),
                this
            }
            listeners(e) {
                return Array.from(this._getListeners(e))
            }
            listenerCount(e) {
                return this._getListeners(e).length
            }
            rawListeners(e) {
                return this.listeners(e)
            }
        }
          , j = T;
        j.defaultMaxListeners = 10;
        const B = new j;
        var M = (e => (e.BottomLeft = "bottomLeft",
        e.BottomRight = "bottomRight",
        e.Center = "center",
        e.TopLeft = "topLeft",
        e.TopRight = "topRight",
        e))(M || {})
          , F = (e => (e.Error = "x-ul-error",
        e.EnvironmentID = "x-ul-environment-id",
        e.InstallationMethod = "x-ul-installation-method",
        e.PartnerAnonymousId = "x-ul-anonymous-id",
        e.Platform = "userleap-platform",
        e.PreviewMode = "x-ul-preview-mode",
        e.UserID = "x-ul-user-id",
        e.VisitorID = "x-ul-visitor-id",
        e))(F || {})
          , $ = (e => (e.Email = "email",
        e.Link = "link",
        e.Web = "web",
        e))($ || {})
          , N = (e => (e.Npm = "web-npm",
        e.NpmBundled = "web-npm-bundled",
        e.Gtm = "web-gtm",
        e.Segment = "web-segment",
        e.SegmentAndroid = "android-segment",
        e.SegmentReactNative = "react-native-segment",
        e.SegmentIOS = "ios-segment",
        e.Snippet = "web-snippet",
        e))(N || {})
          , K = (e => (e.CenterLeft = "center-left",
        e.CenterRight = "center-right",
        e.BottomLeft = "bottom-left",
        e.BottomRight = "bottom-right",
        e))(K || {})
          , q = (e => (e.CenterModal = "center-modal",
        e.Slider = "slider",
        e))(q || {});
        const V = e => new Promise((t => {
            setTimeout(( () => {
                t()
            }
            ), e)
        }
        ))
          , W = ({"userleap-platform": e}) => e !== $.Web
          , z = (e, t) => [e + (t ? _.MobileSuffix : _.DesktopSuffix), e]
          , G = (e, t) => [e, `${e}__${t}`];
        class H {
            constructor(e) {
                i(this, "storage"),
                i(this, "tempStorage", {}),
                i(this, "isStorageAvailable"),
                this.storage = window[e],
                this.isStorageAvailable = this.checkIfStorageAvailable()
            }
            checkIfStorageAvailable() {
                try {
                    const e = "__storage_test__";
                    return this.storage.setItem(e, e),
                    this.storage.removeItem(e),
                    !0
                } catch {
                    return !1
                }
            }
            setItem(e, t) {
                this.isStorageAvailable ? this.storage.setItem(e, t) : this.tempStorage[e] = t
            }
            getItem(e) {
                return this.isStorageAvailable ? this.storage.getItem(e) : this.tempStorage[e]
            }
            removeItem(e) {
                this.isStorageAvailable ? this.storage.removeItem(e) : delete this.tempStorage[e]
            }
            clear() {
                this.isStorageAvailable ? this.storage.clear() : this.tempStorage = {}
            }
        }
        const Y = new H("sessionStorage")
          , J = new H("localStorage");
        typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" && self;
        function Q(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        function X(e) {
            if (e.__esModule)
                return e;
            var t = e.default;
            if ("function" == typeof t) {
                var n = function e() {
                    return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
                };
                n.prototype = t.prototype
            } else
                n = {};
            return Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.keys(e).forEach((function(t) {
                var r = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(n, t, r.get ? r : {
                    enumerable: !0,
                    get: function() {
                        return e[t]
                    }
                })
            }
            )),
            n
        }
        var Z = {
            exports: {}
        };
        Z.exports = function() {
            var e = function(e, r) {
                if (r = r || {},
                "function" != typeof e)
                    throw new n("fetch must be a function");
                if ("object" != typeof r)
                    throw new n("defaults must be an object");
                if (void 0 !== r.retries && !t(r.retries))
                    throw new n("retries must be a positive integer");
                if (void 0 !== r.retryDelay && !t(r.retryDelay) && "function" != typeof r.retryDelay)
                    throw new n("retryDelay must be a positive integer or a function returning a positive integer");
                if (void 0 !== r.retryOn && !Array.isArray(r.retryOn) && "function" != typeof r.retryOn)
                    throw new n("retryOn property expects an array or function");
                var i = {
                    retries: 3,
                    retryDelay: 1e3,
                    retryOn: []
                };
                return r = Object.assign(i, r),
                function(i, o) {
                    var s = r.retries
                      , a = r.retryDelay
                      , l = r.retryOn;
                    if (o && void 0 !== o.retries) {
                        if (!t(o.retries))
                            throw new n("retries must be a positive integer");
                        s = o.retries
                    }
                    if (o && void 0 !== o.retryDelay) {
                        if (!t(o.retryDelay) && "function" != typeof o.retryDelay)
                            throw new n("retryDelay must be a positive integer or a function returning a positive integer");
                        a = o.retryDelay
                    }
                    if (o && o.retryOn) {
                        if (!Array.isArray(o.retryOn) && "function" != typeof o.retryOn)
                            throw new n("retryOn property expects an array or function");
                        l = o.retryOn
                    }
                    return new Promise((function(t, n) {
                        var r = function(r) {
                            var a = typeof Request < "u" && i instanceof Request ? i.clone() : i;
                            e(a, o).then((function(e) {
                                if (Array.isArray(l) && -1 === l.indexOf(e.status))
                                    t(e);
                                else if ("function" == typeof l)
                                    try {
                                        return Promise.resolve(l(r, null, e)).then((function(n) {
                                            n ? u(r, null, e) : t(e)
                                        }
                                        )).catch(n)
                                    } catch (e) {
                                        n(e)
                                    }
                                else
                                    r < s ? u(r, null, e) : t(e)
                            }
                            )).catch((function(e) {
                                if ("function" == typeof l)
                                    try {
                                        Promise.resolve(l(r, e, null)).then((function(t) {
                                            t ? u(r, e, null) : n(e)
                                        }
                                        )).catch((function(e) {
                                            n(e)
                                        }
                                        ))
                                    } catch (e) {
                                        n(e)
                                    }
                                else
                                    r < s ? u(r, e, null) : n(e)
                            }
                            ))
                        };
                        function u(e, t, n) {
                            var i = "function" == typeof a ? a(e, t, n) : a;
                            setTimeout((function() {
                                r(++e)
                            }
                            ), i)
                        }
                        r(0)
                    }
                    ))
                }
            };
            function t(e) {
                return Number.isInteger(e) && e >= 0
            }
            function n(e) {
                this.name = "ArgumentError",
                this.message = e
            }
            return e
        }();
        const ee = Q(Z.exports)
          , te = ee(fetch)
          , ne = {
            Error: 1,
            Warn: 2,
            Info: 3,
            Debug: 4
        };
        let re = 1e3
          , ie = ne.Debug
          , oe = [];
        const se = (e, t) => `${(e => e.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            fractionalSecondDigits: 3
        }))(t)}:${e}`
          , ae = (e, t) => {
            e > ie || (oe.push({
                level: e,
                line: se(t, new Date)
            }),
            oe.length > re && oe.shift())
        }
          , le = e => {
            ae(ne.Debug, e)
        }
          , ue = e => {
            ae(ne.Info, e)
        }
          , ce = e => {
            ae(ne.Warn, e)
        }
          , de = e => {
            ae(ne.Error, e)
        }
          , pe = () => (new TextEncoder).encode(oe.map((e => e.line)).join("\n"))
          , he = async e => {
            if (!e)
                return;
            const t = pe();
            return te(e, {
                body: t,
                method: "PUT",
                retries: 3,
                retryDelay: e => 1e3 * Math.pow(2, e)
            })
        }
          , fe = (e, t) => {
            void 0 !== e && (re = e),
            void 0 !== t && (ie = t),
            le(`Initializing logger with limit of ${re} lines and ${(e => {
                const t = Object.entries(ne).find((t => t[1] === e));
                return (null == t ? void 0 : t[0]) ?? ""
            }
            )(ie)} level`),
            oe = oe.filter((e => e.level <= ie))
        }
        ;
        class ye {
            constructor(e) {
                i(this, "payload"),
                i(this, "promise"),
                i(this, "reject", ( () => {}
                )),
                i(this, "resolve", ( () => {}
                )),
                this.payload = e,
                this.promise = new Promise(( (e, t) => {
                    this.reject = t,
                    this.resolve = e
                }
                ))
            }
            resolveRequest(e) {
                this.resolve(e)
            }
        }
        const me = 10;
        let ge = !1
          , we = ""
          , ve = !1
          , be = !1
          , _e = [];
        const Se = e => e._config && e._config.installationMethod ? e._config.installationMethod : e._gtm ? N.Gtm : e._segment ? N.Segment : N.Snippet
          , ke = e => {
            var t;
            null != (t = null == e ? void 0 : e.blockedURI) && t.includes(window.UserLeap._API_URL) && (be = !0,
            console.warn(`[Sprig] ${e.blockedURI} is blocked by Content-Security-Policy`),
            document.removeEventListener("securitypolicyviolation", ke))
        }
          , Ee = (e="") => {
            ge = !0,
            we = e
        }
        ;
        function Ie(e={}) {
            const t = {
                "Content-Type": "application/json",
                "userleap-platform": $.Web,
                "x-ul-sdk-version": "2.27.0",
                [F.InstallationMethod]: Se(e)
            };
            if (e.envId && (t[F.EnvironmentID] = e.envId),
            e.token && (t.Authorization = "Bearer " + e.token),
            e.userId && (t[F.UserID] = e.userId),
            e.visitorId && (t[F.VisitorID] = e.visitorId),
            e.partnerAnonymousId && (t[F.PartnerAnonymousId] = e.partnerAnonymousId),
            e.mobileHeadersJSON) {
                const n = JSON.parse(e.mobileHeadersJSON);
                Object.assign(t, n)
            }
            return e.locale && (t["accept-language"] = e.locale),
            window.previewMode && (t[F.PreviewMode] = "1"),
            t
        }
        const Le = async (e, t, n) => {
            if (e)
                return {
                    status: 429
                };
            {
                const e = new ye(n);
                return _e.push(e),
                e.promise
            }
        }
          , Ue = async (e, t, n=0, r=!1, i=!1) => {
            const o = {
                url: e,
                options: t,
                attempt: n,
                shouldDropOnRateLimit: r
            };
            if (ve && !i)
                return Le(r, 0, o);
            const s = {
                ok: !1,
                reportError: !1
            };
            if (ge)
                return console.info(`UserLeap - ${we}`),
                s;
            try {
                t.headers = Object.assign(Ie(), t.headers);
                const n = await fetch(e, t);
                if (429 === n.status) {
                    if (!ve && !r || i) {
                        ve = !0;
                        const i = n.headers.has("ratelimit-reset") ? Number(n.headers.get("ratelimit-reset")) : me;
                        return await V(1e3 * i),
                        Ue(e, t, 0, r, !0)
                    }
                    return Le(r, 0, o)
                }
                if (ve = !1,
                _e.length && (_e.map((e => {
                    const {url: t, options: n, attempt: r, shouldDropOnRateLimit: i} = e.payload;
                    Ue(t, n, r, i).then((t => {
                        e.resolveRequest(t)
                    }
                    ))
                }
                )),
                _e = []),
                n.ok) {
                    if (249 === n.status)
                        return Ee(),
                        s;
                    const t = await n.text();
                    try {
                        return t && "OK" !== t && (n.json = JSON.parse(t)),
                        n
                    } catch {
                        return {
                            ok: !1,
                            reportError: !1,
                            error: new Error(`failed parsing response json for ${e} - ${t}`)
                        }
                    }
                }
                return n
            } catch (r) {
                const i = n + 1;
                return i > 5 || be ? {
                    ok: !1,
                    reportError: !1,
                    error: r
                } : (await V(1e3 * Math.pow(2, n)),
                Ue(e, t, i))
            }
        }
        ;
        const xe = new class Ce {
            constructor(e) {
                i(this, "awaitingResolvers", []),
                i(this, "activeCount", 0),
                this.capacity = e
            }
            async acquire() {
                if (!(this.activeCount < this.capacity))
                    return new Promise((e => {
                        this.awaitingResolvers.push(e)
                    }
                    ));
                this.activeCount++
            }
            release() {
                const e = this.awaitingResolvers.shift();
                e && this.activeCount <= this.capacity ? e() : this.activeCount--
            }
            async execute(e) {
                try {
                    return await this.acquire(),
                    await e()
                } finally {
                    this.release()
                }
            }
            setLimit(e) {
                this.capacity = e
            }
        }
        (2)
          , Ae = ee(fetch)
          , Pe = async ({apiUrl: e, surveyId: t, uploadId: n, etags: r, headers: i, responseGroupUuid: o, replayDuration: s, eventDigest: a}, l=!1) => {
            var u;
            if (l || n || r)
                return ue(`Marking upload complete for survey: ${t}`),
                await Ue(`${e}/sdk/1/completeSessionReplay`, {
                    method: "POST",
                    body: JSON.stringify({
                        etags: r,
                        uploadId: n,
                        responseGroupUuid: o,
                        surveyId: t,
                        replayDuration: s,
                        eventDigest: a,
                        userAgent: null == (u = null == window ? void 0 : window.navigator) ? void 0 : u.userAgent
                    }),
                    headers: i
                }, 0, !1, !0);
            ue(`Cannot mark upload complete: isMobile: ${l} / uploadId: ${n} / etags: ${r}`)
        }
          , De = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
          , Oe = Object.keys
          , Re = Array.isArray;
        function Te(e, t) {
            return "object" != typeof t || Oe(t).forEach((function(n) {
                e[n] = t[n]
            }
            )),
            e
        }
        typeof Promise > "u" || De.Promise || (De.Promise = Promise);
        const je = Object.getPrototypeOf
          , Be = {}.hasOwnProperty;
        function Me(e, t) {
            return Be.call(e, t)
        }
        function Fe(e, t) {
            "function" == typeof t && (t = t(je(e))),
            (typeof Reflect > "u" ? Oe : Reflect.ownKeys)(t).forEach((n => {
                Ne(e, n, t[n])
            }
            ))
        }
        const $e = Object.defineProperty;
        function Ne(e, t, n, r) {
            $e(e, t, Te(n && Me(n, "get") && "function" == typeof n.get ? {
                get: n.get,
                set: n.set,
                configurable: !0
            } : {
                value: n,
                configurable: !0,
                writable: !0
            }, r))
        }
        function Ke(e) {
            return {
                from: function(t) {
                    return e.prototype = Object.create(t.prototype),
                    Ne(e.prototype, "constructor", e),
                    {
                        extend: Fe.bind(null, e.prototype)
                    }
                }
            }
        }
        const qe = Object.getOwnPropertyDescriptor;
        function Ve(e, t) {
            let n;
            return qe(e, t) || (n = je(e)) && Ve(n, t)
        }
        const We = [].slice;
        function ze(e, t, n) {
            return We.call(e, t, n)
        }
        function Ge(e, t) {
            return t(e)
        }
        function He(e) {
            if (!e)
                throw new Error("Assertion Failed")
        }
        function Ye(e) {
            De.setImmediate ? setImmediate(e) : setTimeout(e, 0)
        }
        function Je(e, t) {
            return e.reduce(( (e, n, r) => {
                var i = t(n, r);
                return i && (e[i[0]] = i[1]),
                e
            }
            ), {})
        }
        function Qe(e, t) {
            if ("string" == typeof t && Me(e, t))
                return e[t];
            if (!t)
                return e;
            if ("string" != typeof t) {
                for (var n = [], r = 0, i = t.length; r < i; ++r) {
                    var o = Qe(e, t[r]);
                    n.push(o)
                }
                return n
            }
            var s = t.indexOf(".");
            if (-1 !== s) {
                var a = e[t.substr(0, s)];
                return null == a ? void 0 : Qe(a, t.substr(s + 1))
            }
        }
        function Xe(e, t, n) {
            if (e && void 0 !== t && (!("isFrozen"in Object) || !Object.isFrozen(e)))
                if ("string" != typeof t && "length"in t) {
                    He("string" != typeof n && "length"in n);
                    for (var r = 0, i = t.length; r < i; ++r)
                        Xe(e, t[r], n[r])
                } else {
                    var o = t.indexOf(".");
                    if (-1 !== o) {
                        var s = t.substr(0, o)
                          , a = t.substr(o + 1);
                        if ("" === a)
                            void 0 === n ? Re(e) && !isNaN(parseInt(s)) ? e.splice(s, 1) : delete e[s] : e[s] = n;
                        else {
                            var l = e[s];
                            l && Me(e, s) || (l = e[s] = {}),
                            Xe(l, a, n)
                        }
                    } else
                        void 0 === n ? Re(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n
                }
        }
        function Ze(e) {
            var t = {};
            for (var n in e)
                Me(e, n) && (t[n] = e[n]);
            return t
        }
        const et = [].concat;
        function tt(e) {
            return et.apply([], e)
        }
        const nt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(tt([8, 16, 32, 64].map((e => ["Int", "Uint", "Float"].map((t => t + e + "Array")))))).filter((e => De[e]))
          , rt = nt.map((e => De[e]));
        Je(nt, (e => [e, !0]));
        let it = null;
        function ot(e) {
            it = typeof WeakMap < "u" && new WeakMap;
            const t = st(e);
            return it = null,
            t
        }
        function st(e) {
            if (!e || "object" != typeof e)
                return e;
            let t = it && it.get(e);
            if (t)
                return t;
            if (Re(e)) {
                t = [],
                it && it.set(e, t);
                for (var n = 0, r = e.length; n < r; ++n)
                    t.push(st(e[n]))
            } else if (rt.indexOf(e.constructor) >= 0)
                t = e;
            else {
                const n = je(e);
                for (var i in t = n === Object.prototype ? {} : Object.create(n),
                it && it.set(e, t),
                e)
                    Me(e, i) && (t[i] = st(e[i]))
            }
            return t
        }
        const {toString: at} = {};
        function lt(e) {
            return at.call(e).slice(8, -1)
        }
        const ut = typeof Symbol < "u" ? Symbol.iterator : "@@iterator"
          , ct = "symbol" == typeof ut ? function(e) {
            var t;
            return null != e && (t = e[ut]) && t.apply(e)
        }
        : function() {
            return null
        }
          , dt = {};
        function pt(e) {
            var t, n, r, i;
            if (1 === arguments.length) {
                if (Re(e))
                    return e.slice();
                if (this === dt && "string" == typeof e)
                    return [e];
                if (i = ct(e)) {
                    for (n = []; !(r = i.next()).done; )
                        n.push(r.value);
                    return n
                }
                if (null == e)
                    return [e];
                if ("number" == typeof (t = e.length)) {
                    for (n = new Array(t); t--; )
                        n[t] = e[t];
                    return n
                }
                return [e]
            }
            for (t = arguments.length,
            n = new Array(t); t--; )
                n[t] = arguments[t];
            return n
        }
        const ht = typeof Symbol < "u" ? e => "AsyncFunction" === e[Symbol.toStringTag] : () => !1;
        var ft = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function yt(e, t) {
            ft = e,
            mt = t
        }
        var mt = () => !0;
        const gt = !new Error("").stack;
        function wt() {
            if (gt)
                try {
                    throw wt.arguments,
                    new Error
                } catch (e) {
                    return e
                }
            return new Error
        }
        function vt(e, t) {
            var n = e.stack;
            return n ? (t = t || 0,
            0 === n.indexOf(e.name) && (t += (e.name + e.message).split("\n").length),
            n.split("\n").slice(t).filter(mt).map((e => "\n" + e)).join("")) : ""
        }
        var bt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"]
          , _t = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(bt)
          , St = {
            VersionChanged: "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
            MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
        function kt(e, t) {
            this._e = wt(),
            this.name = e,
            this.message = t
        }
        function Et(e, t) {
            return e + ". Errors: " + Object.keys(t).map((e => t[e].toString())).filter(( (e, t, n) => n.indexOf(e) === t)).join("\n")
        }
        function It(e, t, n, r) {
            this._e = wt(),
            this.failures = t,
            this.failedKeys = r,
            this.successCount = n,
            this.message = Et(e, t)
        }
        function Lt(e, t) {
            this._e = wt(),
            this.name = "BulkError",
            this.failures = Object.keys(t).map((e => t[e])),
            this.failuresByPos = t,
            this.message = Et(e, t)
        }
        Ke(kt).from(Error).extend({
            stack: {
                get: function() {
                    return this._stack || (this._stack = this.name + ": " + this.message + vt(this._e, 2))
                }
            },
            toString: function() {
                return this.name + ": " + this.message
            }
        }),
        Ke(It).from(kt),
        Ke(Lt).from(kt);
        var Ut = _t.reduce(( (e, t) => (e[t] = t + "Error",
        e)), {});
        const xt = kt;
        var Ct = _t.reduce(( (e, t) => {
            var n = t + "Error";
            function r(e, r) {
                this._e = wt(),
                this.name = n,
                e ? "string" == typeof e ? (this.message = `${e}${r ? "\n " + r : ""}`,
                this.inner = r || null) : "object" == typeof e && (this.message = `${e.name} ${e.message}`,
                this.inner = e) : (this.message = St[t] || n,
                this.inner = null)
            }
            return Ke(r).from(xt),
            e[t] = r,
            e
        }
        ), {});
        Ct.Syntax = SyntaxError,
        Ct.Type = TypeError,
        Ct.Range = RangeError;
        var At = bt.reduce(( (e, t) => (e[t + "Error"] = Ct[t],
        e)), {})
          , Pt = _t.reduce(( (e, t) => (-1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = Ct[t]),
        e)), {});
        function Dt() {}
        function Ot(e) {
            return e
        }
        function Rt(e, t) {
            return null == e || e === Ot ? t : function(n) {
                return t(e(n))
            }
        }
        function Tt(e, t) {
            return function() {
                e.apply(this, arguments),
                t.apply(this, arguments)
            }
        }
        function jt(e, t) {
            return e === Dt ? t : function() {
                var n = e.apply(this, arguments);
                void 0 !== n && (arguments[0] = n);
                var r = this.onsuccess
                  , i = this.onerror;
                this.onsuccess = null,
                this.onerror = null;
                var o = t.apply(this, arguments);
                return r && (this.onsuccess = this.onsuccess ? Tt(r, this.onsuccess) : r),
                i && (this.onerror = this.onerror ? Tt(i, this.onerror) : i),
                void 0 !== o ? o : n
            }
        }
        function Bt(e, t) {
            return e === Dt ? t : function() {
                e.apply(this, arguments);
                var n = this.onsuccess
                  , r = this.onerror;
                this.onsuccess = this.onerror = null,
                t.apply(this, arguments),
                n && (this.onsuccess = this.onsuccess ? Tt(n, this.onsuccess) : n),
                r && (this.onerror = this.onerror ? Tt(r, this.onerror) : r)
            }
        }
        function Mt(e, t) {
            return e === Dt ? t : function(n) {
                var r = e.apply(this, arguments);
                Te(n, r);
                var i = this.onsuccess
                  , o = this.onerror;
                this.onsuccess = null,
                this.onerror = null;
                var s = t.apply(this, arguments);
                return i && (this.onsuccess = this.onsuccess ? Tt(i, this.onsuccess) : i),
                o && (this.onerror = this.onerror ? Tt(o, this.onerror) : o),
                void 0 === r ? void 0 === s ? void 0 : s : Te(r, s)
            }
        }
        function Ft(e, t) {
            return e === Dt ? t : function() {
                return !1 !== t.apply(this, arguments) && e.apply(this, arguments)
            }
        }
        function $t(e, t) {
            return e === Dt ? t : function() {
                var n = e.apply(this, arguments);
                if (n && "function" == typeof n.then) {
                    for (var r = this, i = arguments.length, o = new Array(i); i--; )
                        o[i] = arguments[i];
                    return n.then((function() {
                        return t.apply(r, o)
                    }
                    ))
                }
                return t.apply(this, arguments)
            }
        }
        Pt.ModifyError = It,
        Pt.DexieError = kt,
        Pt.BulkError = Lt;
        var Nt = {};
        const [Kt,qt,Vt] = typeof Promise > "u" ? [] : ( () => {
            let e = Promise.resolve();
            if (typeof crypto > "u" || !crypto.subtle)
                return [e, je(e), e];
            const t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
            return [t, je(t), e]
        }
        )()
          , Wt = qt && qt.then
          , zt = Kt && Kt.constructor
          , Gt = !!Vt;
        var Ht = !1
          , Yt = Vt ? () => {
            Vt.then(vn)
        }
        : De.setImmediate ? setImmediate.bind(null, vn) : De.MutationObserver ? () => {
            var e = document.createElement("div");
            new MutationObserver(( () => {
                vn(),
                e = null
            }
            )).observe(e, {
                attributes: !0
            }),
            e.setAttribute("i", "1")
        }
        : () => {
            setTimeout(vn, 0)
        }
          , Jt = function(e, t) {
            sn.push([e, t]),
            Xt && (Yt(),
            Xt = !1)
        }
          , Qt = !0
          , Xt = !0
          , Zt = []
          , en = []
          , tn = null
          , nn = Ot
          , rn = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: Vn,
            pgp: !1,
            env: {},
            finalize: function() {
                this.unhandleds.forEach((e => {
                    try {
                        Vn(e[0], e[1])
                    } catch {}
                }
                ))
            }
        }
          , on = rn
          , sn = []
          , an = 0
          , ln = [];
        function un(e) {
            if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
            this._listeners = [],
            this.onuncatched = Dt,
            this._lib = !1;
            var t = this._PSD = on;
            if (ft && (this._stackHolder = wt(),
            this._prev = null,
            this._numPrev = 0),
            "function" != typeof e) {
                if (e !== Nt)
                    throw new TypeError("Not a function");
                return this._state = arguments[1],
                this._value = arguments[2],
                void (!1 === this._state && hn(this, this._value))
            }
            this._state = null,
            this._value = null,
            ++t.ref,
            pn(this, e)
        }
        const cn = {
            get: function() {
                var e = on
                  , t = Cn;
                function n(n, r) {
                    var i = !e.global && (e !== on || t !== Cn);
                    const o = i && !On();
                    var s = new un(( (t, s) => {
                        yn(this, new dn(Nn(n, e, i, o),Nn(r, e, i, o),t,s,e))
                    }
                    ));
                    return ft && wn(s, this),
                    s
                }
                return n.prototype = Nt,
                n
            },
            set: function(e) {
                Ne(this, "then", e && e.prototype === Nt ? cn : {
                    get: function() {
                        return e
                    },
                    set: cn.set
                })
            }
        };
        function dn(e, t, n, r, i) {
            this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.resolve = n,
            this.reject = r,
            this.psd = i
        }
        function pn(e, t) {
            try {
                t((t => {
                    if (null === e._state) {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        var n = e._lib && bn();
                        t && "function" == typeof t.then ? pn(e, ( (e, n) => {
                            t instanceof un ? t._then(e, n) : t.then(e, n)
                        }
                        )) : (e._state = !0,
                        e._value = t,
                        fn(e)),
                        n && _n()
                    }
                }
                ), hn.bind(null, e))
            } catch (t) {
                hn(e, t)
            }
        }
        function hn(e, t) {
            if (en.push(t),
            null === e._state) {
                var n = e._lib && bn();
                t = nn(t),
                e._state = !1,
                e._value = t,
                ft && null !== t && "object" == typeof t && !t._promise && function() {
                    try {
                        ( () => {
                            var n = Ve(t, "stack");
                            t._promise = e,
                            Ne(t, "stack", {
                                get: () => Ht ? n && (n.get ? n.get.apply(t) : n.value) : e.stack
                            })
                        }
                        ).apply(null, void 0)
                    } catch (e) {}
                }(),
                r = e,
                Zt.some((e => e._value === r._value)) || Zt.push(r),
                fn(e),
                n && _n()
            }
            var r
        }
        function fn(e) {
            var t = e._listeners;
            e._listeners = [];
            for (var n = 0, r = t.length; n < r; ++n)
                yn(e, t[n]);
            var i = e._PSD;
            --i.ref || i.finalize(),
            0 === an && (++an,
            Jt(( () => {
                0 == --an && Sn()
            }
            ), []))
        }
        function yn(e, t) {
            if (null !== e._state) {
                var n = e._state ? t.onFulfilled : t.onRejected;
                if (null === n)
                    return (e._state ? t.resolve : t.reject)(e._value);
                ++t.psd.ref,
                ++an,
                Jt(mn, [n, e, t])
            } else
                e._listeners.push(t)
        }
        function mn(e, t, n) {
            try {
                tn = t;
                var r, i = t._value;
                t._state ? r = e(i) : (en.length && (en = []),
                r = e(i),
                -1 === en.indexOf(i) && function(e) {
                    for (var t = Zt.length; t; )
                        if (Zt[--t]._value === e._value)
                            return void Zt.splice(t, 1)
                }(t)),
                n.resolve(r)
            } catch (e) {
                n.reject(e)
            } finally {
                tn = null,
                0 == --an && Sn(),
                --n.psd.ref || n.psd.finalize()
            }
        }
        function gn(e, t, n) {
            if (t.length === n)
                return t;
            var r = "";
            if (!1 === e._state) {
                var i, o, s = e._value;
                null != s ? (i = s.name || "Error",
                o = s.message || s,
                r = vt(s, 0)) : (i = s,
                o = ""),
                t.push(i + (o ? ": " + o : "") + r)
            }
            return ft && ((r = vt(e._stackHolder, 2)) && -1 === t.indexOf(r) && t.push(r),
            e._prev && gn(e._prev, t, n)),
            t
        }
        function wn(e, t) {
            var n = t ? t._numPrev + 1 : 0;
            n < 100 && (e._prev = t,
            e._numPrev = n)
        }
        function vn() {
            bn() && _n()
        }
        function bn() {
            var e = Qt;
            return Qt = !1,
            Xt = !1,
            e
        }
        function _n() {
            var e, t, n;
            do {
                for (; sn.length > 0; )
                    for (e = sn,
                    sn = [],
                    n = e.length,
                    t = 0; t < n; ++t) {
                        var r = e[t];
                        r[0].apply(null, r[1])
                    }
            } while (sn.length > 0);
            Qt = !0,
            Xt = !0
        }
        function Sn() {
            var e = Zt;
            Zt = [],
            e.forEach((e => {
                e._PSD.onunhandled.call(null, e._value, e)
            }
            ));
            for (var t = ln.slice(0), n = t.length; n; )
                t[--n]()
        }
        function kn(e) {
            return new un(Nt,!1,e)
        }
        function En(e, t) {
            var n = on;
            return function() {
                var r = bn()
                  , i = on;
                try {
                    return Bn(n, !0),
                    e.apply(this, arguments)
                } catch (e) {
                    t && t(e)
                } finally {
                    Bn(i, !1),
                    r && _n()
                }
            }
        }
        Fe(un.prototype, {
            then: cn,
            _then: function(e, t) {
                yn(this, new dn(null,null,e,t,on))
            },
            catch: function(e) {
                if (1 === arguments.length)
                    return this.then(null, e);
                var t = arguments[0]
                  , n = arguments[1];
                return "function" == typeof t ? this.then(null, (e => e instanceof t ? n(e) : kn(e))) : this.then(null, (e => e && e.name === t ? n(e) : kn(e)))
            },
            finally: function(e) {
                return this.then((t => (e(),
                t)), (t => (e(),
                kn(t))))
            },
            stack: {
                get: function() {
                    if (this._stack)
                        return this._stack;
                    try {
                        Ht = !0;
                        var e = gn(this, [], 20).join("\nFrom previous: ");
                        return null !== this._state && (this._stack = e),
                        e
                    } finally {
                        Ht = !1
                    }
                }
            },
            timeout: function(e, t) {
                return e < 1 / 0 ? new un(( (n, r) => {
                    var i = setTimeout(( () => r(new Ct.Timeout(t))), e);
                    this.then(n, r).finally(clearTimeout.bind(null, i))
                }
                )) : this
            }
        }),
        typeof Symbol < "u" && Symbol.toStringTag && Ne(un.prototype, Symbol.toStringTag, "Dexie.Promise"),
        rn.env = Mn(),
        Fe(un, {
            all: function() {
                var e = pt.apply(null, arguments).map(Rn);
                return new un((function(t, n) {
                    0 === e.length && t([]);
                    var r = e.length;
                    e.forEach(( (i, o) => un.resolve(i).then((n => {
                        e[o] = n,
                        --r || t(e)
                    }
                    ), n)))
                }
                ))
            },
            resolve: e => {
                if (e instanceof un)
                    return e;
                if (e && "function" == typeof e.then)
                    return new un(( (t, n) => {
                        e.then(t, n)
                    }
                    ));
                var t = new un(Nt,!0,e);
                return wn(t, tn),
                t
            }
            ,
            reject: kn,
            race: function() {
                var e = pt.apply(null, arguments).map(Rn);
                return new un(( (t, n) => {
                    e.map((e => un.resolve(e).then(t, n)))
                }
                ))
            },
            PSD: {
                get: () => on,
                set: e => on = e
            },
            totalEchoes: {
                get: () => Cn
            },
            newPSD: Pn,
            usePSD: Fn,
            scheduler: {
                get: () => Jt,
                set: e => {
                    Jt = e
                }
            },
            rejectionMapper: {
                get: () => nn,
                set: e => {
                    nn = e
                }
            },
            follow: (e, t) => new un(( (n, r) => Pn(( (t, n) => {
                var r = on;
                r.unhandleds = [],
                r.onunhandled = n,
                r.finalize = Tt((function() {
                    var e;
                    e = () => {
                        0 === this.unhandleds.length ? t() : n(this.unhandleds[0])
                    }
                    ,
                    ln.push((function t() {
                        e(),
                        ln.splice(ln.indexOf(t), 1)
                    }
                    )),
                    ++an,
                    Jt(( () => {
                        0 == --an && Sn()
                    }
                    ), [])
                }
                ), r.finalize),
                e()
            }
            ), t, n, r)))
        }),
        zt && (zt.allSettled && Ne(un, "allSettled", (function() {
            const e = pt.apply(null, arguments).map(Rn);
            return new un((t => {
                0 === e.length && t([]);
                let n = e.length;
                const r = new Array(n);
                e.forEach(( (e, i) => un.resolve(e).then((e => r[i] = {
                    status: "fulfilled",
                    value: e
                }), (e => r[i] = {
                    status: "rejected",
                    reason: e
                })).then(( () => --n || t(r)))))
            }
            ))
        }
        )),
        zt.any && typeof AggregateError < "u" && Ne(un, "any", (function() {
            const e = pt.apply(null, arguments).map(Rn);
            return new un(( (t, n) => {
                0 === e.length && n(new AggregateError([]));
                let r = e.length;
                const i = new Array(r);
                e.forEach(( (e, o) => un.resolve(e).then((e => t(e)), (e => {
                    i[o] = e,
                    --r || n(new AggregateError(i))
                }
                ))))
            }
            ))
        }
        )));
        const In = {
            awaits: 0,
            echoes: 0,
            id: 0
        };
        var Ln = 0
          , Un = []
          , xn = 0
          , Cn = 0
          , An = 0;
        function Pn(e, t, n, r) {
            var i = on
              , o = Object.create(i);
            o.parent = i,
            o.ref = 0,
            o.global = !1,
            o.id = ++An;
            var s = rn.env;
            o.env = Gt ? {
                Promise: un,
                PromiseProp: {
                    value: un,
                    configurable: !0,
                    writable: !0
                },
                all: un.all,
                race: un.race,
                allSettled: un.allSettled,
                any: un.any,
                resolve: un.resolve,
                reject: un.reject,
                nthen: Kn(s.nthen, o),
                gthen: Kn(s.gthen, o)
            } : {},
            t && Te(o, t),
            ++i.ref,
            o.finalize = function() {
                --this.parent.ref || this.parent.finalize()
            }
            ;
            var a = Fn(o, e, n, r);
            return 0 === o.ref && o.finalize(),
            a
        }
        function Dn() {
            return In.id || (In.id = ++Ln),
            ++In.awaits,
            In.echoes += 100,
            In.id
        }
        function On() {
            return !!In.awaits && (0 == --In.awaits && (In.id = 0),
            In.echoes = 100 * In.awaits,
            !0)
        }
        function Rn(e) {
            return In.echoes && e && e.constructor === zt ? (Dn(),
            e.then((e => (On(),
            e)), (e => (On(),
            Wn(e))))) : e
        }
        function Tn(e) {
            ++Cn,
            In.echoes && 0 != --In.echoes || (In.echoes = In.id = 0),
            Un.push(on),
            Bn(e, !0)
        }
        function jn() {
            var e = Un[Un.length - 1];
            Un.pop(),
            Bn(e, !1)
        }
        function Bn(e, t) {
            var n = on;
            if ((t ? !In.echoes || xn++ && e === on : !xn || --xn && e === on) || $n(t ? Tn.bind(null, e) : jn),
            e !== on && (on = e,
            n === rn && (rn.env = Mn()),
            Gt)) {
                var r = rn.env.Promise
                  , i = e.env;
                qt.then = i.nthen,
                r.prototype.then = i.gthen,
                (n.global || e.global) && (Object.defineProperty(De, "Promise", i.PromiseProp),
                r.all = i.all,
                r.race = i.race,
                r.resolve = i.resolve,
                r.reject = i.reject,
                i.allSettled && (r.allSettled = i.allSettled),
                i.any && (r.any = i.any))
            }
        }
        function Mn() {
            var e = De.Promise;
            return Gt ? {
                Promise: e,
                PromiseProp: Object.getOwnPropertyDescriptor(De, "Promise"),
                all: e.all,
                race: e.race,
                allSettled: e.allSettled,
                any: e.any,
                resolve: e.resolve,
                reject: e.reject,
                nthen: qt.then,
                gthen: e.prototype.then
            } : {}
        }
        function Fn(e, t, n, r, i) {
            var o = on;
            try {
                return Bn(e, !0),
                t(n, r, i)
            } finally {
                Bn(o, !1)
            }
        }
        function $n(e) {
            Wt.call(Kt, e)
        }
        function Nn(e, t, n, r) {
            return "function" != typeof e ? e : function() {
                var i = on;
                n && Dn(),
                Bn(t, !0);
                try {
                    return e.apply(this, arguments)
                } finally {
                    Bn(i, !1),
                    r && $n(On)
                }
            }
        }
        function Kn(e, t) {
            return function(n, r) {
                return e.call(this, Nn(n, t), Nn(r, t))
            }
        }
        -1 === ("" + Wt).indexOf("[native code]") && (Dn = On = Dt);
        const qn = "unhandledrejection";
        function Vn(e, t) {
            var n;
            try {
                n = t.onuncatched(e)
            } catch {}
            if (!1 !== n)
                try {
                    var r, i = {
                        promise: t,
                        reason: e
                    };
                    if (De.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent(qn, !0, !0),
                    Te(r, i)) : De.CustomEvent && Te(r = new CustomEvent(qn,{
                        detail: i
                    }), i),
                    r && De.dispatchEvent && (dispatchEvent(r),
                    !De.PromiseRejectionEvent && De.onunhandledrejection))
                        try {
                            De.onunhandledrejection(r)
                        } catch {}
                    ft && r && !r.defaultPrevented && console.warn(`Unhandled rejection: ${e.stack || e}`)
                } catch {}
        }
        var Wn = un.reject;
        function zn(e, t, n, r) {
            if (e.idbdb && (e._state.openComplete || on.letThrough || e._vip)) {
                var i = e._createTransaction(t, n, e._dbSchema);
                try {
                    i.create(),
                    e._state.PR1398_maxLoop = 3
                } catch (i) {
                    return i.name === Ut.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"),
                    e._close(),
                    e.open().then(( () => zn(e, t, n, r)))) : Wn(i)
                }
                return i._promise(t, ( (e, t) => Pn(( () => (on.trans = i,
                r(e, t, i)))))).then((e => i._completion.then(( () => e))))
            }
            if (e._state.openComplete)
                return Wn(new Ct.DatabaseClosed(e._state.dbOpenError));
            if (!e._state.isBeingOpened) {
                if (!e._options.autoOpen)
                    return Wn(new Ct.DatabaseClosed);
                e.open().catch(Dt)
            }
            return e._state.dbReadyPromise.then(( () => zn(e, t, n, r)))
        }
        const Gn = "3.2.7"
          , Hn = "￿"
          , Yn = -1 / 0
          , Jn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>."
          , Qn = "String expected."
          , Xn = []
          , Zn = typeof navigator < "u" && /(MSIE|Trident|Edge)/.test(navigator.userAgent)
          , er = Zn
          , tr = Zn
          , nr = e => !/(dexie\.js|dexie\.min\.js)/.test(e)
          , rr = "__dbnames"
          , ir = "readonly"
          , or = "readwrite";
        function sr(e, t) {
            return e ? t ? function() {
                return e.apply(this, arguments) && t.apply(this, arguments)
            }
            : e : t
        }
        const ar = {
            type: 3,
            lower: -1 / 0,
            lowerOpen: !1,
            upper: [[]],
            upperOpen: !1
        };
        function lr(e) {
            return "string" != typeof e || /\./.test(e) ? e => e : t => (void 0 === t[e] && e in t && delete (t = ot(t))[e],
            t)
        }
        class ur {
            _trans(e, t, n) {
                const r = this._tx || on.trans
                  , i = this.name;
                function o(e, n, r) {
                    if (!r.schema[i])
                        throw new Ct.NotFound("Table " + i + " not part of transaction");
                    return t(r.idbtrans, r)
                }
                const s = bn();
                try {
                    return r && r.db === this.db ? r === on.trans ? r._promise(e, o, n) : Pn(( () => r._promise(e, o, n)), {
                        trans: r,
                        transless: on.transless || on
                    }) : zn(this.db, e, [this.name], o)
                } finally {
                    s && _n()
                }
            }
            get(e, t) {
                return e && e.constructor === Object ? this.where(e).first(t) : this._trans("readonly", (t => this.core.get({
                    trans: t,
                    key: e
                }).then((e => this.hook.reading.fire(e))))).then(t)
            }
            where(e) {
                if ("string" == typeof e)
                    return new this.db.WhereClause(this,e);
                if (Re(e))
                    return new this.db.WhereClause(this,`[${e.join("+")}]`);
                const t = Oe(e);
                if (1 === t.length)
                    return this.where(t[0]).equals(e[t[0]]);
                const n = this.schema.indexes.concat(this.schema.primKey).filter((e => {
                    if (e.compound && t.every((t => e.keyPath.indexOf(t) >= 0))) {
                        for (let n = 0; n < t.length; ++n)
                            if (-1 === t.indexOf(e.keyPath[n]))
                                return !1;
                        return !0
                    }
                    return !1
                }
                )).sort(( (e, t) => e.keyPath.length - t.keyPath.length))[0];
                if (n && this.db._maxKey !== Hn) {
                    const r = n.keyPath.slice(0, t.length);
                    return this.where(r).equals(r.map((t => e[t])))
                }
                !n && ft && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${t.join("+")}]`);
                const {idxByName: r} = this.schema
                  , i = this.db._deps.indexedDB;
                function o(e, t) {
                    try {
                        return 0 === i.cmp(e, t)
                    } catch {
                        return !1
                    }
                }
                const [s,a] = t.reduce(( ([t,n], i) => {
                    const s = r[i]
                      , a = e[i];
                    return [t || s, t || !s ? sr(n, s && s.multi ? e => {
                        const t = Qe(e, i);
                        return Re(t) && t.some((e => o(a, e)))
                    }
                    : e => o(a, Qe(e, i))) : n]
                }
                ), [null, null]);
                return s ? this.where(s.name).equals(e[s.keyPath]).filter(a) : n ? this.filter(a) : this.where(t).equals("")
            }
            filter(e) {
                return this.toCollection().and(e)
            }
            count(e) {
                return this.toCollection().count(e)
            }
            offset(e) {
                return this.toCollection().offset(e)
            }
            limit(e) {
                return this.toCollection().limit(e)
            }
            each(e) {
                return this.toCollection().each(e)
            }
            toArray(e) {
                return this.toCollection().toArray(e)
            }
            toCollection() {
                return new this.db.Collection(new this.db.WhereClause(this))
            }
            orderBy(e) {
                return new this.db.Collection(new this.db.WhereClause(this,Re(e) ? `[${e.join("+")}]` : e))
            }
            reverse() {
                return this.toCollection().reverse()
            }
            mapToClass(e) {
                this.schema.mappedClass = e;
                const t = t => {
                    if (!t)
                        return t;
                    const n = Object.create(e.prototype);
                    for (var r in t)
                        if (Me(t, r))
                            try {
                                n[r] = t[r]
                            } catch {}
                    return n
                }
                ;
                return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
                this.schema.readHook = t,
                this.hook("reading", t),
                e
            }
            defineClass() {
                return this.mapToClass((function(e) {
                    Te(this, e)
                }
                ))
            }
            add(e, t) {
                const {auto: n, keyPath: r} = this.schema.primKey;
                let i = e;
                return r && n && (i = lr(r)(e)),
                this._trans("readwrite", (e => this.core.mutate({
                    trans: e,
                    type: "add",
                    keys: null != t ? [t] : null,
                    values: [i]
                }))).then((e => e.numFailures ? un.reject(e.failures[0]) : e.lastResult)).then((t => {
                    if (r)
                        try {
                            Xe(e, r, t)
                        } catch {}
                    return t
                }
                ))
            }
            update(e, t) {
                if ("object" != typeof e || Re(e))
                    return this.where(":id").equals(e).modify(t);
                {
                    const n = Qe(e, this.schema.primKey.keyPath);
                    if (void 0 === n)
                        return Wn(new Ct.InvalidArgument("Given object does not contain its primary key"));
                    try {
                        "function" != typeof t ? Oe(t).forEach((n => {
                            Xe(e, n, t[n])
                        }
                        )) : t(e, {
                            value: e,
                            primKey: n
                        })
                    } catch {}
                    return this.where(":id").equals(n).modify(t)
                }
            }
            put(e, t) {
                const {auto: n, keyPath: r} = this.schema.primKey;
                let i = e;
                return r && n && (i = lr(r)(e)),
                this._trans("readwrite", (e => this.core.mutate({
                    trans: e,
                    type: "put",
                    values: [i],
                    keys: null != t ? [t] : null
                }))).then((e => e.numFailures ? un.reject(e.failures[0]) : e.lastResult)).then((t => {
                    if (r)
                        try {
                            Xe(e, r, t)
                        } catch {}
                    return t
                }
                ))
            }
            delete(e) {
                return this._trans("readwrite", (t => this.core.mutate({
                    trans: t,
                    type: "delete",
                    keys: [e]
                }))).then((e => e.numFailures ? un.reject(e.failures[0]) : void 0))
            }
            clear() {
                return this._trans("readwrite", (e => this.core.mutate({
                    trans: e,
                    type: "deleteRange",
                    range: ar
                }))).then((e => e.numFailures ? un.reject(e.failures[0]) : void 0))
            }
            bulkGet(e) {
                return this._trans("readonly", (t => this.core.getMany({
                    keys: e,
                    trans: t
                }).then((e => e.map((e => this.hook.reading.fire(e)))))))
            }
            bulkAdd(e, t, n) {
                const r = Array.isArray(t) ? t : void 0
                  , i = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
                return this._trans("readwrite", (t => {
                    const {auto: n, keyPath: o} = this.schema.primKey;
                    if (o && r)
                        throw new Ct.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                    if (r && r.length !== e.length)
                        throw new Ct.InvalidArgument("Arguments objects and keys must have the same length");
                    const s = e.length;
                    let a = o && n ? e.map(lr(o)) : e;
                    return this.core.mutate({
                        trans: t,
                        type: "add",
                        keys: r,
                        values: a,
                        wantResults: i
                    }).then(( ({numFailures: e, results: t, lastResult: n, failures: r}) => {
                        if (0 === e)
                            return i ? t : n;
                        throw new Lt(`${this.name}.bulkAdd(): ${e} of ${s} operations failed`,r)
                    }
                    ))
                }
                ))
            }
            bulkPut(e, t, n) {
                const r = Array.isArray(t) ? t : void 0
                  , i = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
                return this._trans("readwrite", (t => {
                    const {auto: n, keyPath: o} = this.schema.primKey;
                    if (o && r)
                        throw new Ct.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                    if (r && r.length !== e.length)
                        throw new Ct.InvalidArgument("Arguments objects and keys must have the same length");
                    const s = e.length;
                    let a = o && n ? e.map(lr(o)) : e;
                    return this.core.mutate({
                        trans: t,
                        type: "put",
                        keys: r,
                        values: a,
                        wantResults: i
                    }).then(( ({numFailures: e, results: t, lastResult: n, failures: r}) => {
                        if (0 === e)
                            return i ? t : n;
                        throw new Lt(`${this.name}.bulkPut(): ${e} of ${s} operations failed`,r)
                    }
                    ))
                }
                ))
            }
            bulkDelete(e) {
                const t = e.length;
                return this._trans("readwrite", (t => this.core.mutate({
                    trans: t,
                    type: "delete",
                    keys: e
                }))).then(( ({numFailures: e, lastResult: n, failures: r}) => {
                    if (0 === e)
                        return n;
                    throw new Lt(`${this.name}.bulkDelete(): ${e} of ${t} operations failed`,r)
                }
                ))
            }
        }
        function cr(e) {
            var t = {}
              , n = function(n, r) {
                if (r) {
                    for (var i = arguments.length, o = new Array(i - 1); --i; )
                        o[i - 1] = arguments[i];
                    return t[n].subscribe.apply(null, o),
                    e
                }
                if ("string" == typeof n)
                    return t[n]
            };
            n.addEventType = o;
            for (var r = 1, i = arguments.length; r < i; ++r)
                o(arguments[r]);
            return n;
            function o(e, r, i) {
                if ("object" != typeof e) {
                    var s;
                    r || (r = Ft),
                    i || (i = Dt);
                    var a = {
                        subscribers: [],
                        fire: i,
                        subscribe: function(e) {
                            -1 === a.subscribers.indexOf(e) && (a.subscribers.push(e),
                            a.fire = r(a.fire, e))
                        },
                        unsubscribe: function(e) {
                            a.subscribers = a.subscribers.filter((function(t) {
                                return t !== e
                            }
                            )),
                            a.fire = a.subscribers.reduce(r, i)
                        }
                    };
                    return t[e] = n[e] = a,
                    a
                }
                Oe(s = e).forEach((function(e) {
                    var t = s[e];
                    if (Re(t))
                        o(e, s[e][0], s[e][1]);
                    else {
                        if ("asap" !== t)
                            throw new Ct.InvalidArgument("Invalid event config");
                        var n = o(e, Ot, (function() {
                            for (var e = arguments.length, t = new Array(e); e--; )
                                t[e] = arguments[e];
                            n.subscribers.forEach((function(e) {
                                Ye((function() {
                                    e.apply(null, t)
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                }
                ))
            }
        }
        function dr(e, t) {
            return Ke(t).from({
                prototype: e
            }),
            t
        }
        function pr(e, t) {
            return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter)
        }
        function hr(e, t) {
            e.filter = sr(e.filter, t)
        }
        function fr(e, t, n) {
            var r = e.replayFilter;
            e.replayFilter = r ? () => sr(r(), t()) : t,
            e.justLimit = n && !r
        }
        function yr(e, t) {
            if (e.isPrimKey)
                return t.primaryKey;
            const n = t.getIndexByKeyPath(e.index);
            if (!n)
                throw new Ct.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
            return n
        }
        function mr(e, t, n) {
            const r = yr(e, t.schema);
            return t.openCursor({
                trans: n,
                values: !e.keysOnly,
                reverse: "prev" === e.dir,
                unique: !!e.unique,
                query: {
                    index: r,
                    range: e.range
                }
            })
        }
        function gr(e, t, n, r) {
            const i = e.replayFilter ? sr(e.filter, e.replayFilter()) : e.filter;
            if (e.or) {
                const o = {}
                  , s = (e, n, r) => {
                    if (!i || i(n, r, (e => n.stop(e)), (e => n.fail(e)))) {
                        var s = n.primaryKey
                          , a = "" + s;
                        "[object ArrayBuffer]" === a && (a = "" + new Uint8Array(s)),
                        Me(o, a) || (o[a] = !0,
                        t(e, n, r))
                    }
                }
                ;
                return Promise.all([e.or._iterate(s, n), wr(mr(e, r, n), e.algorithm, s, !e.keysOnly && e.valueMapper)])
            }
            return wr(mr(e, r, n), sr(e.algorithm, i), t, !e.keysOnly && e.valueMapper)
        }
        function wr(e, t, n, r) {
            var i = En(r ? (e, t, i) => n(r(e), t, i) : n);
            return e.then((e => {
                if (e)
                    return e.start(( () => {
                        var n = () => e.continue();
                        t && !t(e, (e => n = e), (t => {
                            e.stop(t),
                            n = Dt
                        }
                        ), (t => {
                            e.fail(t),
                            n = Dt
                        }
                        )) || i(e.value, e, (e => n = e)),
                        n()
                    }
                    ))
            }
            ))
        }
        function vr(e, t) {
            try {
                const n = br(e)
                  , r = br(t);
                if (n !== r)
                    return "Array" === n ? 1 : "Array" === r ? -1 : "binary" === n ? 1 : "binary" === r ? -1 : "string" === n ? 1 : "string" === r ? -1 : "Date" === n ? 1 : "Date" !== r ? NaN : -1;
                switch (n) {
                case "number":
                case "Date":
                case "string":
                    return e > t ? 1 : e < t ? -1 : 0;
                case "binary":
                    return function(e, t) {
                        const n = e.length
                          , r = t.length
                          , i = n < r ? n : r;
                        for (let n = 0; n < i; ++n)
                            if (e[n] !== t[n])
                                return e[n] < t[n] ? -1 : 1;
                        return n === r ? 0 : n < r ? -1 : 1
                    }(_r(e), _r(t));
                case "Array":
                    return function(e, t) {
                        const n = e.length
                          , r = t.length
                          , i = n < r ? n : r;
                        for (let n = 0; n < i; ++n) {
                            const r = vr(e[n], t[n]);
                            if (0 !== r)
                                return r
                        }
                        return n === r ? 0 : n < r ? -1 : 1
                    }(e, t)
                }
            } catch {}
            return NaN
        }
        function br(e) {
            const t = typeof e;
            if ("object" !== t)
                return t;
            if (ArrayBuffer.isView(e))
                return "binary";
            const n = lt(e);
            return "ArrayBuffer" === n ? "binary" : n
        }
        function _r(e) {
            return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : new Uint8Array(e)
        }
        class Sr {
            _read(e, t) {
                var n = this._ctx;
                return n.error ? n.table._trans(null, Wn.bind(null, n.error)) : n.table._trans("readonly", e).then(t)
            }
            _write(e) {
                var t = this._ctx;
                return t.error ? t.table._trans(null, Wn.bind(null, t.error)) : t.table._trans("readwrite", e, "locked")
            }
            _addAlgorithm(e) {
                var t = this._ctx;
                t.algorithm = sr(t.algorithm, e)
            }
            _iterate(e, t) {
                return gr(this._ctx, e, t, this._ctx.table.core)
            }
            clone(e) {
                var t = Object.create(this.constructor.prototype)
                  , n = Object.create(this._ctx);
                return e && Te(n, e),
                t._ctx = n,
                t
            }
            raw() {
                return this._ctx.valueMapper = null,
                this
            }
            each(e) {
                var t = this._ctx;
                return this._read((n => gr(t, e, n, t.table.core)))
            }
            count(e) {
                return this._read((e => {
                    const t = this._ctx
                      , n = t.table.core;
                    if (pr(t, !0))
                        return n.count({
                            trans: e,
                            query: {
                                index: yr(t, n.schema),
                                range: t.range
                            }
                        }).then((e => Math.min(e, t.limit)));
                    var r = 0;
                    return gr(t, ( () => (++r,
                    !1)), e, n).then(( () => r))
                }
                )).then(e)
            }
            sortBy(e, t) {
                const n = e.split(".").reverse()
                  , r = n[0]
                  , i = n.length - 1;
                function o(e, t) {
                    return t ? o(e[n[t]], t - 1) : e[r]
                }
                var s = "next" === this._ctx.dir ? 1 : -1;
                function a(e, t) {
                    var n = o(e, i)
                      , r = o(t, i);
                    return n < r ? -s : n > r ? s : 0
                }
                return this.toArray((function(e) {
                    return e.sort(a)
                }
                )).then(t)
            }
            toArray(e) {
                return this._read((e => {
                    var t = this._ctx;
                    if ("next" === t.dir && pr(t, !0) && t.limit > 0) {
                        const {valueMapper: n} = t
                          , r = yr(t, t.table.core.schema);
                        return t.table.core.query({
                            trans: e,
                            limit: t.limit,
                            values: !0,
                            query: {
                                index: r,
                                range: t.range
                            }
                        }).then(( ({result: e}) => n ? e.map(n) : e))
                    }
                    {
                        const n = [];
                        return gr(t, (e => n.push(e)), e, t.table.core).then(( () => n))
                    }
                }
                ), e)
            }
            offset(e) {
                var t = this._ctx;
                return e <= 0 || (t.offset += e,
                pr(t) ? fr(t, ( () => {
                    var t = e;
                    return (e, n) => 0 === t || (1 === t ? (--t,
                    !1) : (n(( () => {
                        e.advance(t),
                        t = 0
                    }
                    )),
                    !1))
                }
                )) : fr(t, ( () => {
                    var t = e;
                    return () => --t < 0
                }
                ))),
                this
            }
            limit(e) {
                return this._ctx.limit = Math.min(this._ctx.limit, e),
                fr(this._ctx, ( () => {
                    var t = e;
                    return function(e, n, r) {
                        return --t <= 0 && n(r),
                        t >= 0
                    }
                }
                ), !0),
                this
            }
            until(e, t) {
                return hr(this._ctx, (function(n, r, i) {
                    return !e(n.value) || (r(i),
                    t)
                }
                )),
                this
            }
            first(e) {
                return this.limit(1).toArray((function(e) {
                    return e[0]
                }
                )).then(e)
            }
            last(e) {
                return this.reverse().first(e)
            }
            filter(e) {
                var t, n;
                return hr(this._ctx, (function(t) {
                    return e(t.value)
                }
                )),
                t = this._ctx,
                n = e,
                t.isMatch = sr(t.isMatch, n),
                this
            }
            and(e) {
                return this.filter(e)
            }
            or(e) {
                return new this.db.WhereClause(this._ctx.table,e,this)
            }
            reverse() {
                return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev",
                this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
                this
            }
            desc() {
                return this.reverse()
            }
            eachKey(e) {
                var t = this._ctx;
                return t.keysOnly = !t.isMatch,
                this.each((function(t, n) {
                    e(n.key, n)
                }
                ))
            }
            eachUniqueKey(e) {
                return this._ctx.unique = "unique",
                this.eachKey(e)
            }
            eachPrimaryKey(e) {
                var t = this._ctx;
                return t.keysOnly = !t.isMatch,
                this.each((function(t, n) {
                    e(n.primaryKey, n)
                }
                ))
            }
            keys(e) {
                var t = this._ctx;
                t.keysOnly = !t.isMatch;
                var n = [];
                return this.each((function(e, t) {
                    n.push(t.key)
                }
                )).then((function() {
                    return n
                }
                )).then(e)
            }
            primaryKeys(e) {
                var t = this._ctx;
                if ("next" === t.dir && pr(t, !0) && t.limit > 0)
                    return this._read((e => {
                        var n = yr(t, t.table.core.schema);
                        return t.table.core.query({
                            trans: e,
                            values: !1,
                            limit: t.limit,
                            query: {
                                index: n,
                                range: t.range
                            }
                        })
                    }
                    )).then(( ({result: e}) => e)).then(e);
                t.keysOnly = !t.isMatch;
                var n = [];
                return this.each((function(e, t) {
                    n.push(t.primaryKey)
                }
                )).then((function() {
                    return n
                }
                )).then(e)
            }
            uniqueKeys(e) {
                return this._ctx.unique = "unique",
                this.keys(e)
            }
            firstKey(e) {
                return this.limit(1).keys((function(e) {
                    return e[0]
                }
                )).then(e)
            }
            lastKey(e) {
                return this.reverse().firstKey(e)
            }
            distinct() {
                var e = this._ctx
                  , t = e.index && e.table.schema.idxByName[e.index];
                if (!t || !t.multi)
                    return this;
                var n = {};
                return hr(this._ctx, (function(e) {
                    var t = e.primaryKey.toString()
                      , r = Me(n, t);
                    return n[t] = !0,
                    !r
                }
                )),
                this
            }
            modify(e) {
                var t = this._ctx;
                return this._write((n => {
                    var r;
                    if ("function" == typeof e)
                        r = e;
                    else {
                        var i = Oe(e)
                          , o = i.length;
                        r = function(t) {
                            for (var n = !1, r = 0; r < o; ++r) {
                                var s = i[r]
                                  , a = e[s];
                                Qe(t, s) !== a && (Xe(t, s, a),
                                n = !0)
                            }
                            return n
                        }
                    }
                    const s = t.table.core
                      , {outbound: a, extractKey: l} = s.schema.primaryKey
                      , u = this.db._options.modifyChunkSize || 200
                      , c = [];
                    let d = 0;
                    const p = []
                      , h = (e, t) => {
                        const {failures: n, numFailures: r} = t;
                        d += e - r;
                        for (let e of Oe(n))
                            c.push(n[e])
                    }
                    ;
                    return this.clone().primaryKeys().then((i => {
                        const o = c => {
                            const d = Math.min(u, i.length - c);
                            return s.getMany({
                                trans: n,
                                keys: i.slice(c, c + d),
                                cache: "immutable"
                            }).then((p => {
                                const f = []
                                  , y = []
                                  , m = a ? [] : null
                                  , g = [];
                                for (let e = 0; e < d; ++e) {
                                    const t = p[e]
                                      , n = {
                                        value: ot(t),
                                        primKey: i[c + e]
                                    };
                                    !1 !== r.call(n, n.value, n) && (null == n.value ? g.push(i[c + e]) : a || 0 === vr(l(t), l(n.value)) ? (y.push(n.value),
                                    a && m.push(i[c + e])) : (g.push(i[c + e]),
                                    f.push(n.value)))
                                }
                                const w = pr(t) && t.limit === 1 / 0 && ("function" != typeof e || e === kr) && {
                                    index: t.index,
                                    range: t.range
                                };
                                return Promise.resolve(f.length > 0 && s.mutate({
                                    trans: n,
                                    type: "add",
                                    values: f
                                }).then((e => {
                                    for (let t in e.failures)
                                        g.splice(parseInt(t), 1);
                                    h(f.length, e)
                                }
                                ))).then(( () => (y.length > 0 || w && "object" == typeof e) && s.mutate({
                                    trans: n,
                                    type: "put",
                                    keys: m,
                                    values: y,
                                    criteria: w,
                                    changeSpec: "function" != typeof e && e
                                }).then((e => h(y.length, e))))).then(( () => (g.length > 0 || w && e === kr) && s.mutate({
                                    trans: n,
                                    type: "delete",
                                    keys: g,
                                    criteria: w
                                }).then((e => h(g.length, e))))).then(( () => i.length > c + d && o(c + u)))
                            }
                            ))
                        }
                        ;
                        return o(0).then(( () => {
                            if (c.length > 0)
                                throw new It("Error modifying one or more objects",c,d,p);
                            return i.length
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            delete() {
                var e = this._ctx
                  , t = e.range;
                return pr(e) && (e.isPrimKey && !tr || 3 === t.type) ? this._write((n => {
                    const {primaryKey: r} = e.table.core.schema
                      , i = t;
                    return e.table.core.count({
                        trans: n,
                        query: {
                            index: r,
                            range: i
                        }
                    }).then((t => e.table.core.mutate({
                        trans: n,
                        type: "deleteRange",
                        range: i
                    }).then(( ({failures: e, lastResult: n, results: r, numFailures: i}) => {
                        if (i)
                            throw new It("Could not delete some values",Object.keys(e).map((t => e[t])),t - i);
                        return t - i
                    }
                    ))))
                }
                )) : this.modify(kr)
            }
        }
        const kr = (e, t) => t.value = null;
        function Er(e, t) {
            return e < t ? -1 : e === t ? 0 : 1
        }
        function Ir(e, t) {
            return e > t ? -1 : e === t ? 0 : 1
        }
        function Lr(e, t, n) {
            var r = e instanceof Dr ? new e.Collection(e) : e;
            return r._ctx.error = n ? new n(t) : new TypeError(t),
            r
        }
        function Ur(e) {
            return new e.Collection(e,( () => Pr(""))).limit(0)
        }
        function xr(e, t, n, r, i, o) {
            for (var s = Math.min(e.length, r.length), a = -1, l = 0; l < s; ++l) {
                var u = t[l];
                if (u !== r[l])
                    return i(e[l], n[l]) < 0 ? e.substr(0, l) + n[l] + n.substr(l + 1) : i(e[l], r[l]) < 0 ? e.substr(0, l) + r[l] + n.substr(l + 1) : a >= 0 ? e.substr(0, a) + t[a] + n.substr(a + 1) : null;
                i(e[l], u) < 0 && (a = l)
            }
            return s < r.length && "next" === o ? e + n.substr(e.length) : s < e.length && "prev" === o ? e.substr(0, n.length) : a < 0 ? null : e.substr(0, a) + r[a] + n.substr(a + 1)
        }
        function Cr(e, t, n, r) {
            var i, o, s, a, l, u, c, d = n.length;
            if (!n.every((e => "string" == typeof e)))
                return Lr(e, Qn);
            function p(e) {
                i = function(e) {
                    return "next" === e ? e => e.toUpperCase() : e => e.toLowerCase()
                }(e),
                o = function(e) {
                    return "next" === e ? e => e.toLowerCase() : e => e.toUpperCase()
                }(e),
                s = "next" === e ? Er : Ir;
                var t = n.map((function(e) {
                    return {
                        lower: o(e),
                        upper: i(e)
                    }
                }
                )).sort((function(e, t) {
                    return s(e.lower, t.lower)
                }
                ));
                a = t.map((function(e) {
                    return e.upper
                }
                )),
                l = t.map((function(e) {
                    return e.lower
                }
                )),
                u = e,
                c = "next" === e ? "" : r
            }
            p("next");
            var h = new e.Collection(e,( () => Ar(a[0], l[d - 1] + r)));
            h._ondirectionchange = function(e) {
                p(e)
            }
            ;
            var f = 0;
            return h._addAlgorithm((function(e, n, r) {
                var i = e.key;
                if ("string" != typeof i)
                    return !1;
                var p = o(i);
                if (t(p, l, f))
                    return !0;
                for (var h = null, y = f; y < d; ++y) {
                    var m = xr(i, p, a[y], l[y], s, u);
                    null === m && null === h ? f = y + 1 : (null === h || s(h, m) > 0) && (h = m)
                }
                return n(null !== h ? function() {
                    e.continue(h + c)
                }
                : r),
                !1
            }
            )),
            h
        }
        function Ar(e, t, n, r) {
            return {
                type: 2,
                lower: e,
                upper: t,
                lowerOpen: n,
                upperOpen: r
            }
        }
        function Pr(e) {
            return {
                type: 1,
                lower: e,
                upper: e
            }
        }
        class Dr {
            get Collection() {
                return this._ctx.table.db.Collection
            }
            between(e, t, n, r) {
                n = !1 !== n,
                r = !0 === r;
                try {
                    return this._cmp(e, t) > 0 || 0 === this._cmp(e, t) && (n || r) && (!n || !r) ? Ur(this) : new this.Collection(this,( () => Ar(e, t, !n, !r)))
                } catch {
                    return Lr(this, Jn)
                }
            }
            equals(e) {
                return null == e ? Lr(this, Jn) : new this.Collection(this,( () => Pr(e)))
            }
            above(e) {
                return null == e ? Lr(this, Jn) : new this.Collection(this,( () => Ar(e, void 0, !0)))
            }
            aboveOrEqual(e) {
                return null == e ? Lr(this, Jn) : new this.Collection(this,( () => Ar(e, void 0, !1)))
            }
            below(e) {
                return null == e ? Lr(this, Jn) : new this.Collection(this,( () => Ar(void 0, e, !1, !0)))
            }
            belowOrEqual(e) {
                return null == e ? Lr(this, Jn) : new this.Collection(this,( () => Ar(void 0, e)))
            }
            startsWith(e) {
                return "string" != typeof e ? Lr(this, Qn) : this.between(e, e + Hn, !0, !0)
            }
            startsWithIgnoreCase(e) {
                return "" === e ? this.startsWith(e) : Cr(this, ( (e, t) => 0 === e.indexOf(t[0])), [e], Hn)
            }
            equalsIgnoreCase(e) {
                return Cr(this, ( (e, t) => e === t[0]), [e], "")
            }
            anyOfIgnoreCase() {
                var e = pt.apply(dt, arguments);
                return 0 === e.length ? Ur(this) : Cr(this, ( (e, t) => -1 !== t.indexOf(e)), e, "")
            }
            startsWithAnyOfIgnoreCase() {
                var e = pt.apply(dt, arguments);
                return 0 === e.length ? Ur(this) : Cr(this, ( (e, t) => t.some((t => 0 === e.indexOf(t)))), e, Hn)
            }
            anyOf() {
                const e = pt.apply(dt, arguments);
                let t = this._cmp;
                try {
                    e.sort(t)
                } catch {
                    return Lr(this, Jn)
                }
                if (0 === e.length)
                    return Ur(this);
                const n = new this.Collection(this,( () => Ar(e[0], e[e.length - 1])));
                n._ondirectionchange = n => {
                    t = "next" === n ? this._ascending : this._descending,
                    e.sort(t)
                }
                ;
                let r = 0;
                return n._addAlgorithm(( (n, i, o) => {
                    const s = n.key;
                    for (; t(s, e[r]) > 0; )
                        if (++r,
                        r === e.length)
                            return i(o),
                            !1;
                    return 0 === t(s, e[r]) || (i(( () => {
                        n.continue(e[r])
                    }
                    )),
                    !1)
                }
                )),
                n
            }
            notEqual(e) {
                return this.inAnyRange([[Yn, e], [e, this.db._maxKey]], {
                    includeLowers: !1,
                    includeUppers: !1
                })
            }
            noneOf() {
                const e = pt.apply(dt, arguments);
                if (0 === e.length)
                    return new this.Collection(this);
                try {
                    e.sort(this._ascending)
                } catch {
                    return Lr(this, Jn)
                }
                const t = e.reduce(( (e, t) => e ? e.concat([[e[e.length - 1][1], t]]) : [[Yn, t]]), null);
                return t.push([e[e.length - 1], this.db._maxKey]),
                this.inAnyRange(t, {
                    includeLowers: !1,
                    includeUppers: !1
                })
            }
            inAnyRange(e, t) {
                const n = this._cmp
                  , r = this._ascending
                  , i = this._descending
                  , o = this._min
                  , s = this._max;
                if (0 === e.length)
                    return Ur(this);
                if (!e.every((e => void 0 !== e[0] && void 0 !== e[1] && r(e[0], e[1]) <= 0)))
                    return Lr(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Ct.InvalidArgument);
                const a = !t || !1 !== t.includeLowers
                  , l = t && !0 === t.includeUppers;
                let u, c = r;
                function d(e, t) {
                    return c(e[0], t[0])
                }
                try {
                    u = e.reduce((function(e, t) {
                        let r = 0
                          , i = e.length;
                        for (; r < i; ++r) {
                            const i = e[r];
                            if (n(t[0], i[1]) < 0 && n(t[1], i[0]) > 0) {
                                i[0] = o(i[0], t[0]),
                                i[1] = s(i[1], t[1]);
                                break
                            }
                        }
                        return r === i && e.push(t),
                        e
                    }
                    ), []),
                    u.sort(d)
                } catch {
                    return Lr(this, Jn)
                }
                let p = 0;
                const h = l ? e => r(e, u[p][1]) > 0 : e => r(e, u[p][1]) >= 0
                  , f = a ? e => i(e, u[p][0]) > 0 : e => i(e, u[p][0]) >= 0;
                let y = h;
                const m = new this.Collection(this,( () => Ar(u[0][0], u[u.length - 1][1], !a, !l)));
                return m._ondirectionchange = e => {
                    "next" === e ? (y = h,
                    c = r) : (y = f,
                    c = i),
                    u.sort(d)
                }
                ,
                m._addAlgorithm(( (e, t, n) => {
                    for (var i = e.key; y(i); )
                        if (++p,
                        p === u.length)
                            return t(n),
                            !1;
                    return !(o = i,
                    (h(o) || f(o)) && (0 === this._cmp(i, u[p][1]) || 0 === this._cmp(i, u[p][0]) || t(( () => {
                        c === r ? e.continue(u[p][0]) : e.continue(u[p][1])
                    }
                    )),
                    1));
                    var o
                }
                )),
                m
            }
            startsWithAnyOf() {
                const e = pt.apply(dt, arguments);
                return e.every((e => "string" == typeof e)) ? 0 === e.length ? Ur(this) : this.inAnyRange(e.map((e => [e, e + Hn]))) : Lr(this, "startsWithAnyOf() only works with strings")
            }
        }
        function Or(e) {
            return En((function(t) {
                return Rr(t),
                e(t.target.error),
                !1
            }
            ))
        }
        function Rr(e) {
            e.stopPropagation && e.stopPropagation(),
            e.preventDefault && e.preventDefault()
        }
        const Tr = "storagemutated"
          , jr = "x-storagemutated-1"
          , Br = cr(null, Tr);
        class Mr {
            _lock() {
                return He(!on.global),
                ++this._reculock,
                1 !== this._reculock || on.global || (on.lockOwnerFor = this),
                this
            }
            _unlock() {
                if (He(!on.global),
                0 == --this._reculock)
                    for (on.global || (on.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
                        var e = this._blockedFuncs.shift();
                        try {
                            Fn(e[1], e[0])
                        } catch {}
                    }
                return this
            }
            _locked() {
                return this._reculock && on.lockOwnerFor !== this
            }
            create(e) {
                if (!this.mode)
                    return this;
                const t = this.db.idbdb
                  , n = this.db._state.dbOpenError;
                if (He(!this.idbtrans),
                !e && !t)
                    switch (n && n.name) {
                    case "DatabaseClosedError":
                        throw new Ct.DatabaseClosed(n);
                    case "MissingAPIError":
                        throw new Ct.MissingAPI(n.message,n);
                    default:
                        throw new Ct.OpenFailed(n)
                    }
                if (!this.active)
                    throw new Ct.TransactionInactive;
                return He(null === this._completion._state),
                (e = this.idbtrans = e || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
                    durability: this.chromeTransactionDurability
                }) : t.transaction(this.storeNames, this.mode, {
                    durability: this.chromeTransactionDurability
                }))).onerror = En((t => {
                    Rr(t),
                    this._reject(e.error)
                }
                )),
                e.onabort = En((t => {
                    Rr(t),
                    this.active && this._reject(new Ct.Abort(e.error)),
                    this.active = !1,
                    this.on("abort").fire(t)
                }
                )),
                e.oncomplete = En(( () => {
                    this.active = !1,
                    this._resolve(),
                    "mutatedParts"in e && Br.storagemutated.fire(e.mutatedParts)
                }
                )),
                this
            }
            _promise(e, t, n) {
                if ("readwrite" === e && "readwrite" !== this.mode)
                    return Wn(new Ct.ReadOnly("Transaction is readonly"));
                if (!this.active)
                    return Wn(new Ct.TransactionInactive);
                if (this._locked())
                    return new un(( (r, i) => {
                        this._blockedFuncs.push([ () => {
                            this._promise(e, t, n).then(r, i)
                        }
                        , on])
                    }
                    ));
                if (n)
                    return Pn(( () => {
                        var e = new un(( (e, n) => {
                            this._lock();
                            const r = t(e, n, this);
                            r && r.then && r.then(e, n)
                        }
                        ));
                        return e.finally(( () => this._unlock())),
                        e._lib = !0,
                        e
                    }
                    ));
                var r = new un(( (e, n) => {
                    var r = t(e, n, this);
                    r && r.then && r.then(e, n)
                }
                ));
                return r._lib = !0,
                r
            }
            _root() {
                return this.parent ? this.parent._root() : this
            }
            waitFor(e) {
                var t = this._root();
                const n = un.resolve(e);
                if (t._waitingFor)
                    t._waitingFor = t._waitingFor.then(( () => n));
                else {
                    t._waitingFor = n,
                    t._waitingQueue = [];
                    var r = t.idbtrans.objectStore(t.storeNames[0]);
                    !function e() {
                        for (++t._spinCount; t._waitingQueue.length; )
                            t._waitingQueue.shift()();
                        t._waitingFor && (r.get(-1 / 0).onsuccess = e)
                    }()
                }
                var i = t._waitingFor;
                return new un(( (e, r) => {
                    n.then((n => t._waitingQueue.push(En(e.bind(null, n)))), (e => t._waitingQueue.push(En(r.bind(null, e))))).finally(( () => {
                        t._waitingFor === i && (t._waitingFor = null)
                    }
                    ))
                }
                ))
            }
            abort() {
                this.active && (this.active = !1,
                this.idbtrans && this.idbtrans.abort(),
                this._reject(new Ct.Abort))
            }
            table(e) {
                const t = this._memoizedTables || (this._memoizedTables = {});
                if (Me(t, e))
                    return t[e];
                const n = this.schema[e];
                if (!n)
                    throw new Ct.NotFound("Table " + e + " not part of transaction");
                const r = new this.db.Table(e,n,this);
                return r.core = this.db.core.table(e),
                t[e] = r,
                r
            }
        }
        function Fr(e, t, n, r, i, o, s) {
            return {
                name: e,
                keyPath: t,
                unique: n,
                multi: r,
                auto: i,
                compound: o,
                src: (n && !s ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + $r(t)
            }
        }
        function $r(e) {
            return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : ""
        }
        function Nr(e, t, n) {
            return {
                name: e,
                primKey: t,
                indexes: n,
                mappedClass: null,
                idxByName: Je(n, (e => [e.name, e]))
            }
        }
        let Kr = e => {
            try {
                return e.only([[]]),
                Kr = () => [[]],
                [[]]
            } catch {
                return Kr = () => Hn,
                Hn
            }
        }
        ;
        function qr(e) {
            return null == e ? () => {}
            : "string" == typeof e ? 1 === (t = e).split(".").length ? e => e[t] : e => Qe(e, t) : t => Qe(t, e);
            var t
        }
        function Vr(e) {
            return [].slice.call(e)
        }
        let Wr = 0;
        function zr(e) {
            return null == e ? ":id" : "string" == typeof e ? e : `[${e.join("+")}]`
        }
        function Gr(e, t, n) {
            function r(e) {
                if (3 === e.type)
                    return null;
                if (4 === e.type)
                    throw new Error("Cannot convert never type to IDBKeyRange");
                const {lower: n, upper: r, lowerOpen: i, upperOpen: o} = e;
                return void 0 === n ? void 0 === r ? null : t.upperBound(r, !!o) : void 0 === r ? t.lowerBound(n, !!i) : t.bound(n, r, !!i, !!o)
            }
            const {schema: i, hasGetAll: o} = function(e, t) {
                const n = Vr(e.objectStoreNames);
                return {
                    schema: {
                        name: e.name,
                        tables: n.map((e => t.objectStore(e))).map((e => {
                            const {keyPath: t, autoIncrement: n} = e
                              , r = Re(t)
                              , i = null == t
                              , o = {}
                              , s = {
                                name: e.name,
                                primaryKey: {
                                    name: null,
                                    isPrimaryKey: !0,
                                    outbound: i,
                                    compound: r,
                                    keyPath: t,
                                    autoIncrement: n,
                                    unique: !0,
                                    extractKey: qr(t)
                                },
                                indexes: Vr(e.indexNames).map((t => e.index(t))).map((e => {
                                    const {name: t, unique: n, multiEntry: r, keyPath: i} = e
                                      , s = {
                                        name: t,
                                        compound: Re(i),
                                        keyPath: i,
                                        unique: n,
                                        multiEntry: r,
                                        extractKey: qr(i)
                                    };
                                    return o[zr(i)] = s,
                                    s
                                }
                                )),
                                getIndexByKeyPath: e => o[zr(e)]
                            };
                            return o[":id"] = s.primaryKey,
                            null != t && (o[zr(t)] = s.primaryKey),
                            s
                        }
                        ))
                    },
                    hasGetAll: n.length > 0 && "getAll"in t.objectStore(n[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
                }
            }(e, n)
              , s = i.tables.map((e => function(e) {
                const t = e.name;
                return {
                    name: t,
                    schema: e,
                    mutate: function({trans: e, type: n, keys: i, values: o, range: s}) {
                        return new Promise(( (a, l) => {
                            a = En(a);
                            const u = e.objectStore(t)
                              , c = null == u.keyPath
                              , d = "put" === n || "add" === n;
                            if (!d && "delete" !== n && "deleteRange" !== n)
                                throw new Error("Invalid operation type: " + n);
                            const {length: p} = i || o || {
                                length: 1
                            };
                            if (i && o && i.length !== o.length)
                                throw new Error("Given keys array must have same length as given values array.");
                            if (0 === p)
                                return a({
                                    numFailures: 0,
                                    failures: {},
                                    results: [],
                                    lastResult: void 0
                                });
                            let h;
                            const f = []
                              , y = [];
                            let m = 0;
                            const g = e => {
                                ++m,
                                Rr(e)
                            }
                            ;
                            if ("deleteRange" === n) {
                                if (4 === s.type)
                                    return a({
                                        numFailures: m,
                                        failures: y,
                                        results: [],
                                        lastResult: void 0
                                    });
                                3 === s.type ? f.push(h = u.clear()) : f.push(h = u.delete(r(s)))
                            } else {
                                const [e,t] = d ? c ? [o, i] : [o, null] : [i, null];
                                if (d)
                                    for (let r = 0; r < p; ++r)
                                        f.push(h = t && void 0 !== t[r] ? u[n](e[r], t[r]) : u[n](e[r])),
                                        h.onerror = g;
                                else
                                    for (let t = 0; t < p; ++t)
                                        f.push(h = u[n](e[t])),
                                        h.onerror = g
                            }
                            const w = e => {
                                const t = e.target.result;
                                f.forEach(( (e, t) => null != e.error && (y[t] = e.error))),
                                a({
                                    numFailures: m,
                                    failures: y,
                                    results: "delete" === n ? i : f.map((e => e.result)),
                                    lastResult: t
                                })
                            }
                            ;
                            h.onerror = e => {
                                g(e),
                                w(e)
                            }
                            ,
                            h.onsuccess = w
                        }
                        ))
                    },
                    getMany: ({trans: e, keys: n}) => new Promise(( (r, i) => {
                        r = En(r);
                        const o = e.objectStore(t)
                          , s = n.length
                          , a = new Array(s);
                        let l, u = 0, c = 0;
                        const d = e => {
                            const t = e.target;
                            a[t._pos] = t.result,
                            ++c === u && r(a)
                        }
                          , p = Or(i);
                        for (let e = 0; e < s; ++e)
                            null != n[e] && (l = o.get(n[e]),
                            l._pos = e,
                            l.onsuccess = d,
                            l.onerror = p,
                            ++u);
                        0 === u && r(a)
                    }
                    )),
                    get: ({trans: e, key: n}) => new Promise(( (r, i) => {
                        r = En(r);
                        const o = e.objectStore(t).get(n);
                        o.onsuccess = e => r(e.target.result),
                        o.onerror = Or(i)
                    }
                    )),
                    query: function(e) {
                        return n => new Promise(( (i, o) => {
                            i = En(i);
                            const {trans: s, values: a, limit: l, query: u} = n
                              , c = l === 1 / 0 ? void 0 : l
                              , {index: d, range: p} = u
                              , h = s.objectStore(t)
                              , f = d.isPrimaryKey ? h : h.index(d.name)
                              , y = r(p);
                            if (0 === l)
                                return i({
                                    result: []
                                });
                            if (e) {
                                const e = a ? f.getAll(y, c) : f.getAllKeys(y, c);
                                e.onsuccess = e => i({
                                    result: e.target.result
                                }),
                                e.onerror = Or(o)
                            } else {
                                let e = 0;
                                const t = a || !("openKeyCursor"in f) ? f.openCursor(y) : f.openKeyCursor(y)
                                  , n = [];
                                t.onsuccess = r => {
                                    const o = t.result;
                                    return o ? (n.push(a ? o.value : o.primaryKey),
                                    ++e === l ? i({
                                        result: n
                                    }) : void o.continue()) : i({
                                        result: n
                                    })
                                }
                                ,
                                t.onerror = Or(o)
                            }
                        }
                        ))
                    }(o),
                    openCursor: function({trans: e, values: n, query: i, reverse: o, unique: s}) {
                        return new Promise(( (a, l) => {
                            a = En(a);
                            const {index: u, range: c} = i
                              , d = e.objectStore(t)
                              , p = u.isPrimaryKey ? d : d.index(u.name)
                              , h = o ? s ? "prevunique" : "prev" : s ? "nextunique" : "next"
                              , f = n || !("openKeyCursor"in p) ? p.openCursor(r(c), h) : p.openKeyCursor(r(c), h);
                            f.onerror = Or(l),
                            f.onsuccess = En((t => {
                                const n = f.result;
                                if (!n)
                                    return void a(null);
                                n.___id = ++Wr,
                                n.done = !1;
                                const r = n.continue.bind(n);
                                let i = n.continuePrimaryKey;
                                i && (i = i.bind(n));
                                const o = n.advance.bind(n)
                                  , s = () => {
                                    throw new Error("Cursor not stopped")
                                }
                                ;
                                n.trans = e,
                                n.stop = n.continue = n.continuePrimaryKey = n.advance = () => {
                                    throw new Error("Cursor not started")
                                }
                                ,
                                n.fail = En(l),
                                n.next = function() {
                                    let e = 1;
                                    return this.start(( () => e-- ? this.continue() : this.stop())).then(( () => this))
                                }
                                ,
                                n.start = e => {
                                    const t = new Promise(( (e, t) => {
                                        e = En(e),
                                        f.onerror = Or(t),
                                        n.fail = t,
                                        n.stop = t => {
                                            n.stop = n.continue = n.continuePrimaryKey = n.advance = s,
                                            e(t)
                                        }
                                    }
                                    ))
                                      , a = () => {
                                        if (f.result)
                                            try {
                                                e()
                                            } catch (e) {
                                                n.fail(e)
                                            }
                                        else
                                            n.done = !0,
                                            n.start = () => {
                                                throw new Error("Cursor behind last entry")
                                            }
                                            ,
                                            n.stop()
                                    }
                                    ;
                                    return f.onsuccess = En((e => {
                                        f.onsuccess = a,
                                        a()
                                    }
                                    )),
                                    n.continue = r,
                                    n.continuePrimaryKey = i,
                                    n.advance = o,
                                    a(),
                                    t
                                }
                                ,
                                a(n)
                            }
                            ), l)
                        }
                        ))
                    },
                    count({query: e, trans: n}) {
                        const {index: i, range: o} = e;
                        return new Promise(( (e, s) => {
                            const a = n.objectStore(t)
                              , l = i.isPrimaryKey ? a : a.index(i.name)
                              , u = r(o)
                              , c = u ? l.count(u) : l.count();
                            c.onsuccess = En((t => e(t.target.result))),
                            c.onerror = Or(s)
                        }
                        ))
                    }
                }
            }(e)))
              , a = {};
            return s.forEach((e => a[e.name] = e)),
            {
                stack: "dbcore",
                transaction: e.transaction.bind(e),
                table(e) {
                    if (!a[e])
                        throw new Error(`Table '${e}' not found`);
                    return a[e]
                },
                MIN_KEY: -1 / 0,
                MAX_KEY: Kr(t),
                schema: i
            }
        }
        function Hr({_novip: e}, t) {
            const n = t.db
              , r = function(e, t, {IDBKeyRange: n, indexedDB: r}, i) {
                return {
                    dbcore: (o = Gr(t, n, i),
                    s = e.dbcore,
                    s.reduce(( (e, {create: t}) => ({
                        ...e,
                        ...t(e)
                    })), o))
                };
                var o, s
            }(e._middlewares, n, e._deps, t);
            e.core = r.dbcore,
            e.tables.forEach((t => {
                const n = t.name;
                e.core.schema.tables.some((e => e.name === n)) && (t.core = e.core.table(n),
                e[n]instanceof e.Table && (e[n].core = t.core))
            }
            ))
        }
        function Yr({_novip: e}, t, n, r) {
            n.forEach((n => {
                const i = r[n];
                t.forEach((t => {
                    const r = Ve(t, n);
                    (!r || "value"in r && void 0 === r.value) && (t === e.Transaction.prototype || t instanceof e.Transaction ? Ne(t, n, {
                        get() {
                            return this.table(n)
                        },
                        set(e) {
                            $e(this, n, {
                                value: e,
                                writable: !0,
                                configurable: !0,
                                enumerable: !0
                            })
                        }
                    }) : t[n] = new e.Table(n,i))
                }
                ))
            }
            ))
        }
        function Jr({_novip: e}, t) {
            t.forEach((t => {
                for (let n in t)
                    t[n]instanceof e.Table && delete t[n]
            }
            ))
        }
        function Qr(e, t) {
            return e._cfg.version - t._cfg.version
        }
        function Xr(e, t) {
            const n = {
                del: [],
                add: [],
                change: []
            };
            let r;
            for (r in e)
                t[r] || n.del.push(r);
            for (r in t) {
                const i = e[r]
                  , o = t[r];
                if (i) {
                    const e = {
                        name: r,
                        def: o,
                        recreate: !1,
                        del: [],
                        add: [],
                        change: []
                    };
                    if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto && !Zn)
                        e.recreate = !0,
                        n.change.push(e);
                    else {
                        const t = i.idxByName
                          , r = o.idxByName;
                        let s;
                        for (s in t)
                            r[s] || e.del.push(s);
                        for (s in r) {
                            const n = t[s]
                              , i = r[s];
                            n ? n.src !== i.src && e.change.push(i) : e.add.push(i)
                        }
                        (e.del.length > 0 || e.add.length > 0 || e.change.length > 0) && n.change.push(e)
                    }
                } else
                    n.add.push([r, o])
            }
            return n
        }
        function Zr(e, t, n, r) {
            const i = e.db.createObjectStore(t, n.keyPath ? {
                keyPath: n.keyPath,
                autoIncrement: n.auto
            } : {
                autoIncrement: n.auto
            });
            return r.forEach((e => ei(i, e))),
            i
        }
        function ei(e, t) {
            e.createIndex(t.name, t.keyPath, {
                unique: t.unique,
                multiEntry: t.multi
            })
        }
        function ti(e, t, n) {
            const r = {};
            return ze(t.objectStoreNames, 0).forEach((e => {
                const t = n.objectStore(e);
                let i = t.keyPath;
                const o = Fr($r(i), i || "", !1, !1, !!t.autoIncrement, i && "string" != typeof i, !0)
                  , s = [];
                for (let e = 0; e < t.indexNames.length; ++e) {
                    const n = t.index(t.indexNames[e]);
                    i = n.keyPath;
                    var a = Fr(n.name, i, !!n.unique, !!n.multiEntry, !1, i && "string" != typeof i, !1);
                    s.push(a)
                }
                r[e] = Nr(e, o, s)
            }
            )),
            r
        }
        function ni({_novip: e}, t, n) {
            const r = n.db.objectStoreNames;
            for (let i = 0; i < r.length; ++i) {
                const o = r[i]
                  , s = n.objectStore(o);
                e._hasGetAll = "getAll"in s;
                for (let e = 0; e < s.indexNames.length; ++e) {
                    const n = s.indexNames[e]
                      , r = s.index(n).keyPath
                      , i = "string" == typeof r ? r : "[" + ze(r).join("+") + "]";
                    if (t[o]) {
                        const e = t[o].idxByName[i];
                        e && (e.name = n,
                        delete t[o].idxByName[i],
                        t[o].idxByName[n] = e)
                    }
                }
            }
            typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && De.WorkerGlobalScope && De instanceof De.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1)
        }
        class ri {
            _parseStoresSpec(e, t) {
                Oe(e).forEach((n => {
                    if (null !== e[n]) {
                        var r = e[n].split(",").map(( (e, t) => {
                            const n = (e = e.trim()).replace(/([&*]|\+\+)/g, "")
                              , r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                            return Fr(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), Re(r), 0 === t)
                        }
                        ))
                          , i = r.shift();
                        if (i.multi)
                            throw new Ct.Schema("Primary key cannot be multi-valued");
                        r.forEach((e => {
                            if (e.auto)
                                throw new Ct.Schema("Only primary key can be marked as autoIncrement (++)");
                            if (!e.keyPath)
                                throw new Ct.Schema("Index must have a name and cannot be an empty string")
                        }
                        )),
                        t[n] = Nr(n, i, r)
                    }
                }
                ))
            }
            stores(e) {
                const t = this.db;
                this._cfg.storesSource = this._cfg.storesSource ? Te(this._cfg.storesSource, e) : e;
                const n = t._versions
                  , r = {};
                let i = {};
                return n.forEach((e => {
                    Te(r, e._cfg.storesSource),
                    i = e._cfg.dbschema = {},
                    e._parseStoresSpec(r, i)
                }
                )),
                t._dbSchema = i,
                Jr(t, [t._allTables, t, t.Transaction.prototype]),
                Yr(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], Oe(i), i),
                t._storeNames = Oe(i),
                this
            }
            upgrade(e) {
                return this._cfg.contentUpgrade = $t(this._cfg.contentUpgrade || Dt, e),
                this
            }
        }
        function ii(e, t) {
            let n = e._dbNamesDB;
            return n || (n = e._dbNamesDB = new Li(rr,{
                addons: [],
                indexedDB: e,
                IDBKeyRange: t
            }),
            n.version(1).stores({
                dbnames: "name"
            })),
            n.table("dbnames")
        }
        function oi(e) {
            return e && "function" == typeof e.databases
        }
        function si(e) {
            return Pn((function() {
                return on.letThrough = !0,
                e()
            }
            ))
        }
        function ai() {
            var e;
            return !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise((function(t) {
                var n = function() {
                    return indexedDB.databases().finally(t)
                };
                e = setInterval(n, 100),
                n()
            }
            )).finally((function() {
                return clearInterval(e)
            }
            )) : Promise.resolve()
        }
        function li(e) {
            const t = e._state
              , {indexedDB: n} = e._deps;
            if (t.isBeingOpened || e.idbdb)
                return t.dbReadyPromise.then(( () => t.dbOpenError ? Wn(t.dbOpenError) : e));
            ft && (t.openCanceller._stackHolder = wt()),
            t.isBeingOpened = !0,
            t.dbOpenError = null,
            t.openComplete = !1;
            const r = t.openCanceller;
            function i() {
                if (t.openCanceller !== r)
                    throw new Ct.DatabaseClosed("db.open() was cancelled")
            }
            let o = t.dbReadyResolve
              , s = null
              , a = !1;
            const l = () => new un(( (r, o) => {
                if (i(),
                !n)
                    throw new Ct.MissingAPI;
                const l = e.name
                  , u = t.autoSchema ? n.open(l) : n.open(l, Math.round(10 * e.verno));
                if (!u)
                    throw new Ct.MissingAPI;
                u.onerror = Or(o),
                u.onblocked = En(e._fireOnBlocked),
                u.onupgradeneeded = En((r => {
                    if (s = u.transaction,
                    t.autoSchema && !e._options.allowEmptyDB) {
                        u.onerror = Rr,
                        s.abort(),
                        u.result.close();
                        const e = n.deleteDatabase(l);
                        e.onsuccess = e.onerror = En(( () => {
                            o(new Ct.NoSuchDatabase(`Database ${l} doesnt exist`))
                        }
                        ))
                    } else {
                        s.onerror = Or(o);
                        var i = r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion;
                        a = i < 1,
                        e._novip.idbdb = u.result,
                        function(e, t, n, r) {
                            const i = e._dbSchema
                              , o = e._createTransaction("readwrite", e._storeNames, i);
                            o.create(n),
                            o._completion.catch(r);
                            const s = o._reject.bind(o)
                              , a = on.transless || on;
                            Pn(( () => {
                                on.trans = o,
                                on.transless = a,
                                0 === t ? (Oe(i).forEach((e => {
                                    Zr(n, e, i[e].primKey, i[e].indexes)
                                }
                                )),
                                Hr(e, n),
                                un.follow(( () => e.on.populate.fire(o))).catch(s)) : function({_novip: e}, t, n, r) {
                                    const i = []
                                      , o = e._versions;
                                    let s = e._dbSchema = ti(0, e.idbdb, r)
                                      , a = !1;
                                    return o.filter((e => e._cfg.version >= t)).forEach((o => {
                                        i.push(( () => {
                                            const i = s
                                              , l = o._cfg.dbschema;
                                            ni(e, i, r),
                                            ni(e, l, r),
                                            s = e._dbSchema = l;
                                            const u = Xr(i, l);
                                            u.add.forEach((e => {
                                                Zr(r, e[0], e[1].primKey, e[1].indexes)
                                            }
                                            )),
                                            u.change.forEach((e => {
                                                if (e.recreate)
                                                    throw new Ct.Upgrade("Not yet support for changing primary key");
                                                {
                                                    const t = r.objectStore(e.name);
                                                    e.add.forEach((e => ei(t, e))),
                                                    e.change.forEach((e => {
                                                        t.deleteIndex(e.name),
                                                        ei(t, e)
                                                    }
                                                    )),
                                                    e.del.forEach((e => t.deleteIndex(e)))
                                                }
                                            }
                                            ));
                                            const c = o._cfg.contentUpgrade;
                                            if (c && o._cfg.version > t) {
                                                Hr(e, r),
                                                n._memoizedTables = {},
                                                a = !0;
                                                let t = Ze(l);
                                                u.del.forEach((e => {
                                                    t[e] = i[e]
                                                }
                                                )),
                                                Jr(e, [e.Transaction.prototype]),
                                                Yr(e, [e.Transaction.prototype], Oe(t), t),
                                                n.schema = t;
                                                const o = ht(c);
                                                let s;
                                                o && Dn();
                                                const d = un.follow(( () => {
                                                    if (s = c(n),
                                                    s && o) {
                                                        var e = On.bind(null, null);
                                                        s.then(e, e)
                                                    }
                                                }
                                                ));
                                                return s && "function" == typeof s.then ? un.resolve(s) : d.then(( () => s))
                                            }
                                        }
                                        )),
                                        i.push((t => {
                                            var r, i;
                                            (!a || !er) && (r = o._cfg.dbschema,
                                            i = t,
                                            [].slice.call(i.db.objectStoreNames).forEach((e => null == r[e] && i.db.deleteObjectStore(e)))),
                                            Jr(e, [e.Transaction.prototype]),
                                            Yr(e, [e.Transaction.prototype], e._storeNames, e._dbSchema),
                                            n.schema = e._dbSchema
                                        }
                                        ))
                                    }
                                    )),
                                    function e() {
                                        return i.length ? un.resolve(i.shift()(n.idbtrans)).then(e) : un.resolve()
                                    }().then(( () => {
                                        var e, t;
                                        t = r,
                                        Oe(e = s).forEach((n => {
                                            t.db.objectStoreNames.contains(n) || Zr(t, n, e[n].primKey, e[n].indexes)
                                        }
                                        ))
                                    }
                                    ))
                                }(e, t, o, n).catch(s)
                            }
                            ))
                        }(e, i / 10, s, o)
                    }
                }
                ), o),
                u.onsuccess = En(( () => {
                    s = null;
                    const n = e._novip.idbdb = u.result
                      , i = ze(n.objectStoreNames);
                    if (i.length > 0)
                        try {
                            const r = n.transaction(1 === (o = i).length ? o[0] : o, "readonly");
                            t.autoSchema ? function({_novip: e}, t, n) {
                                e.verno = t.version / 10;
                                const r = e._dbSchema = ti(0, t, n);
                                e._storeNames = ze(t.objectStoreNames, 0),
                                Yr(e, [e._allTables], Oe(r), r)
                            }(e, n, r) : (ni(e, e._dbSchema, r),
                            function(e, t) {
                                const n = Xr(ti(0, e.idbdb, t), e._dbSchema);
                                return !(n.add.length || n.change.some((e => e.add.length || e.change.length)))
                            }(e, r) || console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),
                            Hr(e, r)
                        } catch {}
                    var o;
                    Xn.push(e),
                    n.onversionchange = En((n => {
                        t.vcFired = !0,
                        e.on("versionchange").fire(n)
                    }
                    )),
                    n.onclose = En((t => {
                        e.on("close").fire(t)
                    }
                    )),
                    a && function({indexedDB: e, IDBKeyRange: t}, n) {
                        !oi(e) && n !== rr && ii(e, t).put({
                            name: n
                        }).catch(Dt)
                    }(e._deps, l),
                    r()
                }
                ), o)
            }
            )).catch((e => e && "UnknownError" === e.name && t.PR1398_maxLoop > 0 ? (t.PR1398_maxLoop--,
            console.warn("Dexie: Workaround for Chrome UnknownError on open()"),
            l()) : un.reject(e)));
            return un.race([r, (typeof navigator > "u" ? un.resolve() : ai()).then(l)]).then(( () => (i(),
            t.onReadyBeingFired = [],
            un.resolve(si(( () => e.on.ready.fire(e.vip)))).then((function n() {
                if (t.onReadyBeingFired.length > 0) {
                    let r = t.onReadyBeingFired.reduce($t, Dt);
                    return t.onReadyBeingFired = [],
                    un.resolve(si(( () => r(e.vip)))).then(n)
                }
            }
            ))))).finally(( () => {
                t.onReadyBeingFired = null,
                t.isBeingOpened = !1
            }
            )).then(( () => e)).catch((n => {
                t.dbOpenError = n;
                try {
                    s && s.abort()
                } catch {}
                return r === t.openCanceller && e._close(),
                Wn(n)
            }
            )).finally(( () => {
                t.openComplete = !0,
                o()
            }
            ))
        }
        function ui(e) {
            var t = t => e.next(t)
              , n = i(t)
              , r = i((t => e.throw(t)));
            function i(e) {
                return t => {
                    var i = e(t)
                      , o = i.value;
                    return i.done ? o : o && "function" == typeof o.then ? o.then(n, r) : Re(o) ? Promise.all(o).then(n, r) : n(o)
                }
            }
            return i(t)()
        }
        function ci(e, t, n) {
            var r = arguments.length;
            if (r < 2)
                throw new Ct.InvalidArgument("Too few arguments");
            for (var i = new Array(r - 1); --r; )
                i[r - 1] = arguments[r];
            return n = i.pop(),
            [e, tt(i), n]
        }
        function di(e, t, n, r, i) {
            return un.resolve().then(( () => {
                const o = on.transless || on
                  , s = e._createTransaction(t, n, e._dbSchema, r)
                  , a = {
                    trans: s,
                    transless: o
                };
                if (r)
                    s.idbtrans = r.idbtrans;
                else
                    try {
                        s.create(),
                        e._state.PR1398_maxLoop = 3
                    } catch (r) {
                        return r.name === Ut.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"),
                        e._close(),
                        e.open().then(( () => di(e, t, n, null, i)))) : Wn(r)
                    }
                const l = ht(i);
                let u;
                l && Dn();
                const c = un.follow(( () => {
                    if (u = i.call(s, s),
                    u)
                        if (l) {
                            var e = On.bind(null, null);
                            u.then(e, e)
                        } else
                            "function" == typeof u.next && "function" == typeof u.throw && (u = ui(u))
                }
                ), a);
                return (u && "function" == typeof u.then ? un.resolve(u).then((e => s.active ? e : Wn(new Ct.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")))) : c.then(( () => u))).then((e => (r && s._resolve(),
                s._completion.then(( () => e))))).catch((e => (s._reject(e),
                Wn(e))))
            }
            ))
        }
        function pi(e, t, n) {
            const r = Re(e) ? e.slice() : [e];
            for (let e = 0; e < n; ++e)
                r.push(t);
            return r
        }
        const hi = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function(e) {
                return {
                    ...e,
                    table(t) {
                        const n = e.table(t)
                          , {schema: r} = n
                          , i = {}
                          , o = [];
                        function s(e, t, n) {
                            const r = zr(e)
                              , a = i[r] = i[r] || []
                              , l = null == e ? 0 : "string" == typeof e ? 1 : e.length
                              , u = t > 0
                              , c = {
                                ...n,
                                isVirtual: u,
                                keyTail: t,
                                keyLength: l,
                                extractKey: qr(e),
                                unique: !u && n.unique
                            };
                            return a.push(c),
                            c.isPrimaryKey || o.push(c),
                            l > 1 && s(2 === l ? e[0] : e.slice(0, l - 1), t + 1, n),
                            a.sort(( (e, t) => e.keyTail - t.keyTail)),
                            c
                        }
                        const a = s(r.primaryKey.keyPath, 0, r.primaryKey);
                        i[":id"] = [a];
                        for (const e of r.indexes)
                            s(e.keyPath, 0, e);
                        function l(t) {
                            const n = t.query.index;
                            return n.isVirtual ? {
                                ...t,
                                query: {
                                    index: n,
                                    range: (r = t.query.range,
                                    i = n.keyTail,
                                    {
                                        type: 1 === r.type ? 2 : r.type,
                                        lower: pi(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, i),
                                        lowerOpen: !0,
                                        upper: pi(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, i),
                                        upperOpen: !0
                                    })
                                }
                            } : t;
                            var r, i
                        }
                        return {
                            ...n,
                            schema: {
                                ...r,
                                primaryKey: a,
                                indexes: o,
                                getIndexByKeyPath: function(e) {
                                    const t = i[zr(e)];
                                    return t && t[0]
                                }
                            },
                            count: e => n.count(l(e)),
                            query: e => n.query(l(e)),
                            openCursor(t) {
                                const {keyTail: r, isVirtual: i, keyLength: o} = t.query.index;
                                return i ? n.openCursor(l(t)).then((n => {
                                    return n && (i = n,
                                    Object.create(i, {
                                        continue: {
                                            value: function(n) {
                                                null != n ? i.continue(pi(n, t.reverse ? e.MAX_KEY : e.MIN_KEY, r)) : t.unique ? i.continue(i.key.slice(0, o).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, r)) : i.continue()
                                            }
                                        },
                                        continuePrimaryKey: {
                                            value(t, n) {
                                                i.continuePrimaryKey(pi(t, e.MAX_KEY, r), n)
                                            }
                                        },
                                        primaryKey: {
                                            get: () => i.primaryKey
                                        },
                                        key: {
                                            get() {
                                                const e = i.key;
                                                return 1 === o ? e[0] : e.slice(0, o)
                                            }
                                        },
                                        value: {
                                            get: () => i.value
                                        }
                                    }));
                                    var i
                                }
                                )) : n.openCursor(t)
                            }
                        }
                    }
                }
            }
        };
        function fi(e, t, n, r) {
            return n = n || {},
            r = r || "",
            Oe(e).forEach((i => {
                if (Me(t, i)) {
                    var o = e[i]
                      , s = t[i];
                    if ("object" == typeof o && "object" == typeof s && o && s) {
                        const e = lt(o);
                        e !== lt(s) ? n[r + i] = t[i] : "Object" === e ? fi(o, s, n, r + i + ".") : o !== s && (n[r + i] = t[i])
                    } else
                        o !== s && (n[r + i] = t[i])
                } else
                    n[r + i] = void 0
            }
            )),
            Oe(t).forEach((i => {
                Me(e, i) || (n[r + i] = t[i])
            }
            )),
            n
        }
        const yi = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: e => ({
                ...e,
                table(t) {
                    const n = e.table(t)
                      , {primaryKey: r} = n.schema;
                    return {
                        ...n,
                        mutate(e) {
                            const i = on.trans
                              , {deleting: o, creating: s, updating: a} = i.table(t).hook;
                            switch (e.type) {
                            case "add":
                                if (s.fire === Dt)
                                    break;
                                return i._promise("readwrite", ( () => l(e)), !0);
                            case "put":
                                if (s.fire === Dt && a.fire === Dt)
                                    break;
                                return i._promise("readwrite", ( () => l(e)), !0);
                            case "delete":
                                if (o.fire === Dt)
                                    break;
                                return i._promise("readwrite", ( () => l(e)), !0);
                            case "deleteRange":
                                if (o.fire === Dt)
                                    break;
                                return i._promise("readwrite", ( () => {
                                    return u((t = e).trans, t.range, 1e4);
                                    var t
                                }
                                ), !0)
                            }
                            return n.mutate(e);
                            function l(e) {
                                const t = on.trans
                                  , i = e.keys || (l = r,
                                "delete" === (u = e).type ? u.keys : u.keys || u.values.map(l.extractKey));
                                var l, u;
                                if (!i)
                                    throw new Error("Keys missing");
                                return "delete" !== (e = "add" === e.type || "put" === e.type ? {
                                    ...e,
                                    keys: i
                                } : {
                                    ...e
                                }).type && (e.values = [...e.values]),
                                e.keys && (e.keys = [...e.keys]),
                                function(e, t, n) {
                                    return "add" === t.type ? Promise.resolve([]) : e.getMany({
                                        trans: t.trans,
                                        keys: n,
                                        cache: "immutable"
                                    })
                                }(n, e, i).then((l => {
                                    const u = i.map(( (n, i) => {
                                        const u = l[i]
                                          , c = {
                                            onerror: null,
                                            onsuccess: null
                                        };
                                        if ("delete" === e.type)
                                            o.fire.call(c, n, u, t);
                                        else if ("add" === e.type || void 0 === u) {
                                            const o = s.fire.call(c, n, e.values[i], t);
                                            null == n && null != o && (n = o,
                                            e.keys[i] = n,
                                            r.outbound || Xe(e.values[i], r.keyPath, n))
                                        } else {
                                            const r = fi(u, e.values[i])
                                              , o = a.fire.call(c, r, n, u, t);
                                            if (o) {
                                                const t = e.values[i];
                                                Object.keys(o).forEach((e => {
                                                    Me(t, e) ? t[e] = o[e] : Xe(t, e, o[e])
                                                }
                                                ))
                                            }
                                        }
                                        return c
                                    }
                                    ));
                                    return n.mutate(e).then(( ({failures: t, results: n, numFailures: r, lastResult: o}) => {
                                        for (let r = 0; r < i.length; ++r) {
                                            const o = n ? n[r] : i[r]
                                              , s = u[r];
                                            null == o ? s.onerror && s.onerror(t[r]) : s.onsuccess && s.onsuccess("put" === e.type && l[r] ? e.values[r] : o)
                                        }
                                        return {
                                            failures: t,
                                            results: n,
                                            numFailures: r,
                                            lastResult: o
                                        }
                                    }
                                    )).catch((e => (u.forEach((t => t.onerror && t.onerror(e))),
                                    Promise.reject(e))))
                                }
                                ))
                            }
                            function u(e, t, i) {
                                return n.query({
                                    trans: e,
                                    values: !1,
                                    query: {
                                        index: r,
                                        range: t
                                    },
                                    limit: i
                                }).then(( ({result: n}) => l({
                                    type: "delete",
                                    keys: n,
                                    trans: e
                                }).then((r => r.numFailures > 0 ? Promise.reject(r.failures[0]) : n.length < i ? {
                                    failures: [],
                                    numFailures: 0,
                                    lastResult: void 0
                                } : u(e, {
                                    ...t,
                                    lower: n[n.length - 1],
                                    lowerOpen: !0
                                }, i)))))
                            }
                        }
                    }
                }
            })
        };
        function mi(e, t, n) {
            try {
                if (!t || t.keys.length < e.length)
                    return null;
                const r = [];
                for (let i = 0, o = 0; i < t.keys.length && o < e.length; ++i)
                    0 === vr(t.keys[i], e[o]) && (r.push(n ? ot(t.values[i]) : t.values[i]),
                    ++o);
                return r.length === e.length ? r : null
            } catch {
                return null
            }
        }
        const gi = {
            stack: "dbcore",
            level: -1,
            create: e => ({
                table: t => {
                    const n = e.table(t);
                    return {
                        ...n,
                        getMany: e => {
                            if (!e.cache)
                                return n.getMany(e);
                            const t = mi(e.keys, e.trans._cache, "clone" === e.cache);
                            return t ? un.resolve(t) : n.getMany(e).then((t => (e.trans._cache = {
                                keys: e.keys,
                                values: "clone" === e.cache ? ot(t) : t
                            },
                            t)))
                        }
                        ,
                        mutate: e => ("add" !== e.type && (e.trans._cache = null),
                        n.mutate(e))
                    }
                }
            })
        };
        function wi(e) {
            return !("from"in e)
        }
        const vi = function(e, t) {
            if (!this) {
                const t = new vi;
                return e && "d"in e && Te(t, e),
                t
            }
            Te(this, arguments.length ? {
                d: 1,
                from: e,
                to: arguments.length > 1 ? t : e
            } : {
                d: 0
            })
        };
        function bi(e, t, n) {
            const r = vr(t, n);
            if (isNaN(r))
                return;
            if (r > 0)
                throw RangeError();
            if (wi(e))
                return Te(e, {
                    from: t,
                    to: n,
                    d: 1
                });
            const i = e.l
              , o = e.r;
            if (vr(n, e.from) < 0)
                return i ? bi(i, t, n) : e.l = {
                    from: t,
                    to: n,
                    d: 1,
                    l: null,
                    r: null
                },
                ki(e);
            if (vr(t, e.to) > 0)
                return o ? bi(o, t, n) : e.r = {
                    from: t,
                    to: n,
                    d: 1,
                    l: null,
                    r: null
                },
                ki(e);
            vr(t, e.from) < 0 && (e.from = t,
            e.l = null,
            e.d = o ? o.d + 1 : 1),
            vr(n, e.to) > 0 && (e.to = n,
            e.r = null,
            e.d = e.l ? e.l.d + 1 : 1);
            const s = !e.r;
            i && !e.l && _i(e, i),
            o && s && _i(e, o)
        }
        function _i(e, t) {
            wi(t) || function e(t, {from: n, to: r, l: i, r: o}) {
                bi(t, n, r),
                i && e(t, i),
                o && e(t, o)
            }(e, t)
        }
        function Si(e) {
            let t = wi(e) ? null : {
                s: 0,
                n: e
            };
            return {
                next(e) {
                    const n = arguments.length > 0;
                    for (; t; )
                        switch (t.s) {
                        case 0:
                            if (t.s = 1,
                            n)
                                for (; t.n.l && vr(e, t.n.from) < 0; )
                                    t = {
                                        up: t,
                                        n: t.n.l,
                                        s: 1
                                    };
                            else
                                for (; t.n.l; )
                                    t = {
                                        up: t,
                                        n: t.n.l,
                                        s: 1
                                    };
                        case 1:
                            if (t.s = 2,
                            !n || vr(e, t.n.to) <= 0)
                                return {
                                    value: t.n,
                                    done: !1
                                };
                        case 2:
                            if (t.n.r) {
                                t.s = 3,
                                t = {
                                    up: t,
                                    n: t.n.r,
                                    s: 0
                                };
                                continue
                            }
                        case 3:
                            t = t.up
                        }
                    return {
                        done: !0
                    }
                }
            }
        }
        function ki(e) {
            var t, n;
            const r = ((null === (t = e.r) || void 0 === t ? void 0 : t.d) || 0) - ((null === (n = e.l) || void 0 === n ? void 0 : n.d) || 0)
              , i = r > 1 ? "r" : r < -1 ? "l" : "";
            if (i) {
                const t = "r" === i ? "l" : "r"
                  , n = {
                    ...e
                }
                  , r = e[i];
                e.from = r.from,
                e.to = r.to,
                e[i] = r[i],
                n[i] = r[t],
                e[t] = n,
                n.d = Ei(n)
            }
            e.d = Ei(e)
        }
        function Ei({r: e, l: t}) {
            return (e ? t ? Math.max(e.d, t.d) : e.d : t ? t.d : 0) + 1
        }
        Fe(vi.prototype, {
            add(e) {
                return _i(this, e),
                this
            },
            addKey(e) {
                return bi(this, e, e),
                this
            },
            addKeys(e) {
                return e.forEach((e => bi(this, e, e))),
                this
            },
            [ut]() {
                return Si(this)
            }
        });
        const Ii = {
            stack: "dbcore",
            level: 0,
            create: e => {
                const t = e.schema.name
                  , n = new vi(e.MIN_KEY,e.MAX_KEY);
                return {
                    ...e,
                    table: r => {
                        const i = e.table(r)
                          , {schema: o} = i
                          , {primaryKey: s} = o
                          , {extractKey: a, outbound: l} = s
                          , u = {
                            ...i,
                            mutate: e => {
                                const s = e.trans
                                  , a = s.mutatedParts || (s.mutatedParts = {})
                                  , l = e => {
                                    const n = `idb://${t}/${r}/${e}`;
                                    return a[n] || (a[n] = new vi)
                                }
                                  , u = l("")
                                  , c = l(":dels")
                                  , {type: d} = e;
                                let[p,h] = "deleteRange" === e.type ? [e.range] : "delete" === e.type ? [e.keys] : e.values.length < 50 ? [[], e.values] : [];
                                const f = e.trans._cache;
                                return i.mutate(e).then((e => {
                                    if (Re(p)) {
                                        "delete" !== d && (p = e.results),
                                        u.addKeys(p);
                                        const n = mi(p, f);
                                        n || "add" === d || c.addKeys(p),
                                        (n || h) && (t = l,
                                        r = n,
                                        i = h,
                                        o.indexes.forEach((function(e) {
                                            const n = t(e.name || "");
                                            function o(t) {
                                                return null != t ? e.extractKey(t) : null
                                            }
                                            const s = t => e.multiEntry && Re(t) ? t.forEach((e => n.addKey(e))) : n.addKey(t);
                                            (r || i).forEach(( (e, t) => {
                                                const n = r && o(r[t])
                                                  , a = i && o(i[t]);
                                                0 !== vr(n, a) && (null != n && s(n),
                                                null != a && s(a))
                                            }
                                            ))
                                        }
                                        )))
                                    } else if (p) {
                                        const e = {
                                            from: p.lower,
                                            to: p.upper
                                        };
                                        c.add(e),
                                        u.add(e)
                                    } else
                                        u.add(n),
                                        c.add(n),
                                        o.indexes.forEach((e => l(e.name).add(n)));
                                    var t, r, i;
                                    return e
                                }
                                ))
                            }
                        }
                          , c = ({query: {index: t, range: n}}) => {
                            var r, i;
                            return [t, new vi(null !== (r = n.lower) && void 0 !== r ? r : e.MIN_KEY,null !== (i = n.upper) && void 0 !== i ? i : e.MAX_KEY)]
                        }
                          , d = {
                            get: e => [s, new vi(e.key)],
                            getMany: e => [s, (new vi).addKeys(e.keys)],
                            count: c,
                            query: c,
                            openCursor: c
                        };
                        return Oe(d).forEach((e => {
                            u[e] = function(o) {
                                const {subscr: s} = on;
                                if (s) {
                                    const u = e => {
                                        const n = `idb://${t}/${r}/${e}`;
                                        return s[n] || (s[n] = new vi)
                                    }
                                      , c = u("")
                                      , p = u(":dels")
                                      , [h,f] = d[e](o);
                                    if (u(h.name || "").add(f),
                                    !h.isPrimaryKey) {
                                        if ("count" !== e) {
                                            const t = "query" === e && l && o.values && i.query({
                                                ...o,
                                                values: !1
                                            });
                                            return i[e].apply(this, arguments).then((n => {
                                                if ("query" === e) {
                                                    if (l && o.values)
                                                        return t.then(( ({result: e}) => (c.addKeys(e),
                                                        n)));
                                                    const e = o.values ? n.result.map(a) : n.result;
                                                    o.values ? c.addKeys(e) : p.addKeys(e)
                                                } else if ("openCursor" === e) {
                                                    const e = n
                                                      , t = o.values;
                                                    return e && Object.create(e, {
                                                        key: {
                                                            get: () => (p.addKey(e.primaryKey),
                                                            e.key)
                                                        },
                                                        primaryKey: {
                                                            get() {
                                                                const t = e.primaryKey;
                                                                return p.addKey(t),
                                                                t
                                                            }
                                                        },
                                                        value: {
                                                            get: () => (t && c.addKey(e.primaryKey),
                                                            e.value)
                                                        }
                                                    })
                                                }
                                                return n
                                            }
                                            ))
                                        }
                                        p.add(n)
                                    }
                                }
                                return i[e].apply(this, arguments)
                            }
                        }
                        )),
                        u
                    }
                }
            }
        };
        class Li {
            constructor(e, t) {
                this._middlewares = {},
                this.verno = 0;
                const n = Li.dependencies;
                this._options = t = {
                    addons: Li.addons,
                    autoOpen: !0,
                    indexedDB: n.indexedDB,
                    IDBKeyRange: n.IDBKeyRange,
                    ...t
                },
                this._deps = {
                    indexedDB: t.indexedDB,
                    IDBKeyRange: t.IDBKeyRange
                };
                const {addons: r} = t;
                this._dbSchema = {},
                this._versions = [],
                this._storeNames = [],
                this._allTables = {},
                this.idbdb = null,
                this._novip = this;
                const i = {
                    dbOpenError: null,
                    isBeingOpened: !1,
                    onReadyBeingFired: null,
                    openComplete: !1,
                    dbReadyResolve: Dt,
                    dbReadyPromise: null,
                    cancelOpen: Dt,
                    openCanceller: null,
                    autoSchema: !0,
                    PR1398_maxLoop: 3
                };
                var o, s;
                i.dbReadyPromise = new un((e => {
                    i.dbReadyResolve = e
                }
                )),
                i.openCanceller = new un(( (e, t) => {
                    i.cancelOpen = t
                }
                )),
                this._state = i,
                this.name = e,
                this.on = cr(this, "populate", "blocked", "versionchange", "close", {
                    ready: [$t, Dt]
                }),
                this.on.ready.subscribe = Ge(this.on.ready.subscribe, (e => (t, n) => {
                    Li.vip(( () => {
                        const r = this._state;
                        if (r.openComplete)
                            r.dbOpenError || un.resolve().then(t),
                            n && e(t);
                        else if (r.onReadyBeingFired)
                            r.onReadyBeingFired.push(t),
                            n && e(t);
                        else {
                            e(t);
                            const r = this;
                            n || e((function e() {
                                r.on.ready.unsubscribe(t),
                                r.on.ready.unsubscribe(e)
                            }
                            ))
                        }
                    }
                    ))
                }
                )),
                this.Collection = (o = this,
                dr(Sr.prototype, (function(e, t) {
                    this.db = o;
                    let n = ar
                      , r = null;
                    if (t)
                        try {
                            n = t()
                        } catch (e) {
                            r = e
                        }
                    const i = e._ctx
                      , s = i.table
                      , a = s.hook.reading.fire;
                    this._ctx = {
                        table: s,
                        index: i.index,
                        isPrimKey: !i.index || s.schema.primKey.keyPath && i.index === s.schema.primKey.name,
                        range: n,
                        keysOnly: !1,
                        dir: "next",
                        unique: "",
                        algorithm: null,
                        filter: null,
                        replayFilter: null,
                        justLimit: !0,
                        isMatch: null,
                        offset: 0,
                        limit: 1 / 0,
                        error: r,
                        or: i.or,
                        valueMapper: a !== Ot ? a : null
                    }
                }
                ))),
                this.Table = (s = this,
                dr(ur.prototype, (function(e, t, n) {
                    this.db = s,
                    this._tx = n,
                    this.name = e,
                    this.schema = t,
                    this.hook = s._allTables[e] ? s._allTables[e].hook : cr(null, {
                        creating: [jt, Dt],
                        reading: [Rt, Ot],
                        updating: [Mt, Dt],
                        deleting: [Bt, Dt]
                    })
                }
                ))),
                this.Transaction = function(e) {
                    return dr(Mr.prototype, (function(t, n, r, i, o) {
                        this.db = e,
                        this.mode = t,
                        this.storeNames = n,
                        this.schema = r,
                        this.chromeTransactionDurability = i,
                        this.idbtrans = null,
                        this.on = cr(this, "complete", "error", "abort"),
                        this.parent = o || null,
                        this.active = !0,
                        this._reculock = 0,
                        this._blockedFuncs = [],
                        this._resolve = null,
                        this._reject = null,
                        this._waitingFor = null,
                        this._waitingQueue = null,
                        this._spinCount = 0,
                        this._completion = new un(( (e, t) => {
                            this._resolve = e,
                            this._reject = t
                        }
                        )),
                        this._completion.then(( () => {
                            this.active = !1,
                            this.on.complete.fire()
                        }
                        ), (e => {
                            var t = this.active;
                            return this.active = !1,
                            this.on.error.fire(e),
                            this.parent ? this.parent._reject(e) : t && this.idbtrans && this.idbtrans.abort(),
                            Wn(e)
                        }
                        ))
                    }
                    ))
                }(this),
                this.Version = function(e) {
                    return dr(ri.prototype, (function(t) {
                        this.db = e,
                        this._cfg = {
                            version: t,
                            storesSource: null,
                            dbschema: {},
                            tables: {},
                            contentUpgrade: null
                        }
                    }
                    ))
                }(this),
                this.WhereClause = function(e) {
                    return dr(Dr.prototype, (function(t, n, r) {
                        this.db = e,
                        this._ctx = {
                            table: t,
                            index: ":id" === n ? null : n,
                            or: r
                        };
                        const i = e._deps.indexedDB;
                        if (!i)
                            throw new Ct.MissingAPI;
                        this._cmp = this._ascending = i.cmp.bind(i),
                        this._descending = (e, t) => i.cmp(t, e),
                        this._max = (e, t) => i.cmp(e, t) > 0 ? e : t,
                        this._min = (e, t) => i.cmp(e, t) < 0 ? e : t,
                        this._IDBKeyRange = e._deps.IDBKeyRange
                    }
                    ))
                }(this),
                this.on("versionchange", (e => {
                    e.newVersion > 0 ? console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),
                    this.close()
                }
                )),
                this.on("blocked", (e => {
                    !e.newVersion || e.newVersion < e.oldVersion ? console.warn(`Dexie.delete('${this.name}') was blocked`) : console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${e.oldVersion / 10}`)
                }
                )),
                this._maxKey = Kr(t.IDBKeyRange),
                this._createTransaction = (e, t, n, r) => new this.Transaction(e,t,n,this._options.chromeTransactionDurability,r),
                this._fireOnBlocked = e => {
                    this.on("blocked").fire(e),
                    Xn.filter((e => e.name === this.name && e !== this && !e._state.vcFired)).map((t => t.on("versionchange").fire(e)))
                }
                ,
                this.use(hi),
                this.use(yi),
                this.use(Ii),
                this.use(gi),
                this.vip = Object.create(this, {
                    _vip: {
                        value: !0
                    }
                }),
                r.forEach((e => e(this)))
            }
            version(e) {
                if (isNaN(e) || e < .1)
                    throw new Ct.Type("Given version is not a positive number");
                if (e = Math.round(10 * e) / 10,
                this.idbdb || this._state.isBeingOpened)
                    throw new Ct.Schema("Cannot add version when database is open");
                this.verno = Math.max(this.verno, e);
                const t = this._versions;
                var n = t.filter((t => t._cfg.version === e))[0];
                return n || (n = new this.Version(e),
                t.push(n),
                t.sort(Qr),
                n.stores({}),
                this._state.autoSchema = !1,
                n)
            }
            _whenReady(e) {
                return this.idbdb && (this._state.openComplete || on.letThrough || this._vip) ? e() : new un(( (e, t) => {
                    if (this._state.openComplete)
                        return t(new Ct.DatabaseClosed(this._state.dbOpenError));
                    if (!this._state.isBeingOpened) {
                        if (!this._options.autoOpen)
                            return void t(new Ct.DatabaseClosed);
                        this.open().catch(Dt)
                    }
                    this._state.dbReadyPromise.then(e, t)
                }
                )).then(e)
            }
            use({stack: e, create: t, level: n, name: r}) {
                r && this.unuse({
                    stack: e,
                    name: r
                });
                const i = this._middlewares[e] || (this._middlewares[e] = []);
                return i.push({
                    stack: e,
                    create: t,
                    level: n ?? 10,
                    name: r
                }),
                i.sort(( (e, t) => e.level - t.level)),
                this
            }
            unuse({stack: e, name: t, create: n}) {
                return e && this._middlewares[e] && (this._middlewares[e] = this._middlewares[e].filter((e => n ? e.create !== n : !!t && e.name !== t))),
                this
            }
            open() {
                return li(this)
            }
            _close() {
                const e = this._state
                  , t = Xn.indexOf(this);
                if (t >= 0 && Xn.splice(t, 1),
                this.idbdb) {
                    try {
                        this.idbdb.close()
                    } catch {}
                    this._novip.idbdb = null
                }
                e.dbReadyPromise = new un((t => {
                    e.dbReadyResolve = t
                }
                )),
                e.openCanceller = new un(( (t, n) => {
                    e.cancelOpen = n
                }
                ))
            }
            close() {
                this._close();
                const e = this._state;
                this._options.autoOpen = !1,
                e.dbOpenError = new Ct.DatabaseClosed,
                e.isBeingOpened && e.cancelOpen(e.dbOpenError)
            }
            delete() {
                const e = arguments.length > 0
                  , t = this._state;
                return new un(( (n, r) => {
                    const i = () => {
                        this.close();
                        var e = this._deps.indexedDB.deleteDatabase(this.name);
                        e.onsuccess = En(( () => {
                            (function({indexedDB: e, IDBKeyRange: t}, n) {
                                !oi(e) && n !== rr && ii(e, t).delete(n).catch(Dt)
                            }
                            )(this._deps, this.name),
                            n()
                        }
                        )),
                        e.onerror = Or(r),
                        e.onblocked = this._fireOnBlocked
                    }
                    ;
                    if (e)
                        throw new Ct.InvalidArgument("Arguments not allowed in db.delete()");
                    t.isBeingOpened ? t.dbReadyPromise.then(i) : i()
                }
                ))
            }
            backendDB() {
                return this.idbdb
            }
            isOpen() {
                return null !== this.idbdb
            }
            hasBeenClosed() {
                const e = this._state.dbOpenError;
                return e && "DatabaseClosed" === e.name
            }
            hasFailed() {
                return null !== this._state.dbOpenError
            }
            dynamicallyOpened() {
                return this._state.autoSchema
            }
            get tables() {
                return Oe(this._allTables).map((e => this._allTables[e]))
            }
            transaction() {
                const e = ci.apply(this, arguments);
                return this._transaction.apply(this, e)
            }
            _transaction(e, t, n) {
                let r = on.trans;
                r && r.db === this && -1 === e.indexOf("!") || (r = null);
                const i = -1 !== e.indexOf("?");
                let o, s;
                e = e.replace("!", "").replace("?", "");
                try {
                    if (s = t.map((e => {
                        var t = e instanceof this.Table ? e.name : e;
                        if ("string" != typeof t)
                            throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                        return t
                    }
                    )),
                    "r" == e || e === ir)
                        o = ir;
                    else {
                        if ("rw" != e && e != or)
                            throw new Ct.InvalidArgument("Invalid transaction mode: " + e);
                        o = or
                    }
                    if (r) {
                        if (r.mode === ir && o === or) {
                            if (!i)
                                throw new Ct.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                            r = null
                        }
                        r && s.forEach((e => {
                            if (r && -1 === r.storeNames.indexOf(e)) {
                                if (!i)
                                    throw new Ct.SubTransaction("Table " + e + " not included in parent transaction.");
                                r = null
                            }
                        }
                        )),
                        i && r && !r.active && (r = null)
                    }
                } catch (e) {
                    return r ? r._promise(null, ( (t, n) => {
                        n(e)
                    }
                    )) : Wn(e)
                }
                const a = di.bind(null, this, o, s, r, n);
                return r ? r._promise(o, a, "lock") : on.trans ? Fn(on.transless, ( () => this._whenReady(a))) : this._whenReady(a)
            }
            table(e) {
                if (!Me(this._allTables, e))
                    throw new Ct.InvalidTable(`Table ${e} does not exist`);
                return this._allTables[e]
            }
        }
        const Ui = typeof Symbol < "u" && "observable"in Symbol ? Symbol.observable : "@@observable";
        class xi {
            constructor(e) {
                this._subscribe = e
            }
            subscribe(e, t, n) {
                return this._subscribe(e && "function" != typeof e ? e : {
                    next: e,
                    error: t,
                    complete: n
                })
            }
            [Ui]() {
                return this
            }
        }
        function Ci(e, t) {
            return Oe(t).forEach((n => {
                _i(e[n] || (e[n] = new vi), t[n])
            }
            )),
            e
        }
        let Ai;
        try {
            Ai = {
                indexedDB: De.indexedDB || De.mozIndexedDB || De.webkitIndexedDB || De.msIndexedDB,
                IDBKeyRange: De.IDBKeyRange || De.webkitIDBKeyRange
            }
        } catch {
            Ai = {
                indexedDB: null,
                IDBKeyRange: null
            }
        }
        const Pi = Li;
        function Di(e) {
            let t = Oi;
            try {
                Oi = !0,
                Br.storagemutated.fire(e)
            } finally {
                Oi = t
            }
        }
        Fe(Pi, {
            ...Pt,
            delete: e => new Pi(e,{
                addons: []
            }).delete(),
            exists: e => new Pi(e,{
                addons: []
            }).open().then((e => (e.close(),
            !0))).catch("NoSuchDatabaseError", ( () => !1)),
            getDatabaseNames(e) {
                try {
                    return function({indexedDB: e, IDBKeyRange: t}) {
                        return oi(e) ? Promise.resolve(e.databases()).then((e => e.map((e => e.name)).filter((e => e !== rr)))) : ii(e, t).toCollection().primaryKeys()
                    }(Pi.dependencies).then(e)
                } catch {
                    return Wn(new Ct.MissingAPI)
                }
            },
            defineClass: () => function(e) {
                Te(this, e)
            }
            ,
            ignoreTransaction: e => on.trans ? Fn(on.transless, e) : e(),
            vip: si,
            async: function(e) {
                return function() {
                    try {
                        var t = ui(e.apply(this, arguments));
                        return t && "function" == typeof t.then ? t : un.resolve(t)
                    } catch (e) {
                        return Wn(e)
                    }
                }
            },
            spawn: function(e, t, n) {
                try {
                    var r = ui(e.apply(n, t || []));
                    return r && "function" == typeof r.then ? r : un.resolve(r)
                } catch (e) {
                    return Wn(e)
                }
            },
            currentTransaction: {
                get: () => on.trans || null
            },
            waitFor: function(e, t) {
                const n = un.resolve("function" == typeof e ? Pi.ignoreTransaction(e) : e).timeout(t || 6e4);
                return on.trans ? on.trans.waitFor(n) : n
            },
            Promise: un,
            debug: {
                get: () => ft,
                set: e => {
                    yt(e, "dexie" === e ? () => !0 : nr)
                }
            },
            derive: Ke,
            extend: Te,
            props: Fe,
            override: Ge,
            Events: cr,
            on: Br,
            liveQuery: function(e) {
                let t, n = !1;
                const r = new xi((r => {
                    const i = ht(e);
                    let o = !1
                      , s = {}
                      , a = {};
                    const l = {
                        get closed() {
                            return o
                        },
                        unsubscribe: () => {
                            o = !0,
                            Br.storagemutated.unsubscribe(p)
                        }
                    };
                    r.start && r.start(l);
                    let u = !1
                      , c = !1;
                    function d() {
                        return Oe(a).some((e => s[e] && function(e, t) {
                            const n = Si(t);
                            let r = n.next();
                            if (r.done)
                                return !1;
                            let i = r.value;
                            const o = Si(e);
                            let s = o.next(i.from)
                              , a = s.value;
                            for (; !r.done && !s.done; ) {
                                if (vr(a.from, i.to) <= 0 && vr(a.to, i.from) >= 0)
                                    return !0;
                                vr(i.from, a.from) < 0 ? i = (r = n.next(a.from)).value : a = (s = o.next(i.from)).value
                            }
                            return !1
                        }(s[e], a[e])))
                    }
                    const p = e => {
                        Ci(s, e),
                        d() && h()
                    }
                      , h = () => {
                        if (u || o)
                            return;
                        s = {};
                        const f = {}
                          , y = function(t) {
                            i && Dn();
                            const n = () => Pn(e, {
                                subscr: t,
                                trans: null
                            })
                              , r = on.trans ? Fn(on.transless, n) : n();
                            return i && r.then(On, On),
                            r
                        }(f);
                        c || (Br(Tr, p),
                        c = !0),
                        u = !0,
                        Promise.resolve(y).then((e => {
                            n = !0,
                            t = e,
                            u = !1,
                            o || (d() ? h() : (s = {},
                            a = f,
                            r.next && r.next(e)))
                        }
                        ), (e => {
                            u = !1,
                            n = !1,
                            r.error && r.error(e),
                            l.unsubscribe()
                        }
                        ))
                    }
                    ;
                    return h(),
                    l
                }
                ));
                return r.hasValue = () => n,
                r.getValue = () => t,
                r
            },
            extendObservabilitySet: Ci,
            getByKeyPath: Qe,
            setByKeyPath: Xe,
            delByKeyPath: function(e, t) {
                "string" == typeof t ? Xe(e, t, void 0) : "length"in t && [].map.call(t, (function(t) {
                    Xe(e, t, void 0)
                }
                ))
            },
            shallowClone: Ze,
            deepClone: ot,
            getObjectDiff: fi,
            cmp: vr,
            asap: Ye,
            minKey: Yn,
            addons: [],
            connections: Xn,
            errnames: Ut,
            dependencies: Ai,
            semVer: Gn,
            version: Gn.split(".").map((e => parseInt(e))).reduce(( (e, t, n) => e + t / Math.pow(10, 2 * n)))
        }),
        Pi.maxKey = Kr(Pi.dependencies.IDBKeyRange),
        typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Br(Tr, (e => {
            if (!Oi) {
                let t;
                Zn ? (t = document.createEvent("CustomEvent"),
                t.initCustomEvent(jr, !0, !0, e)) : t = new CustomEvent(jr,{
                    detail: e
                }),
                Oi = !0,
                dispatchEvent(t),
                Oi = !1
            }
        }
        )),
        addEventListener(jr, ( ({detail: e}) => {
            Oi || Di(e)
        }
        )));
        let Oi = !1;
        if (typeof BroadcastChannel < "u") {
            const e = new BroadcastChannel(jr);
            "function" == typeof e.unref && e.unref(),
            Br(Tr, (t => {
                Oi || e.postMessage(t)
            }
            )),
            e.onmessage = e => {
                e.data && Di(e.data)
            }
        } else if (typeof self < "u" && typeof navigator < "u") {
            Br(Tr, (e => {
                try {
                    Oi || (typeof localStorage < "u" && localStorage.setItem(jr, JSON.stringify({
                        trig: Math.random(),
                        changedParts: e
                    })),
                    "object" == typeof self.clients && [...self.clients.matchAll({
                        includeUncontrolled: !0
                    })].forEach((t => t.postMessage({
                        type: jr,
                        changedParts: e
                    }))))
                } catch {}
            }
            )),
            typeof addEventListener < "u" && addEventListener("storage", (e => {
                if (e.key === jr) {
                    const t = JSON.parse(e.newValue);
                    t && Di(t.changedParts)
                }
            }
            ));
            const e = self.document && navigator.serviceWorker;
            e && e.addEventListener("message", (function({data: e}) {
                e && e.type === jr && Di(e.changedParts)
            }
            ))
        }
        un.rejectionMapper = function(e, t) {
            if (!e || e instanceof kt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !At[e.name])
                return e;
            var n = new At[e.name](t || e.message,e);
            return "stack"in e && Ne(n, "stack", {
                get: function() {
                    return this.inner.stack
                }
            }),
            n
        }
        ,
        yt(ft, nr);
        var Ri = (e => (e.ReadyForUpload = "ReadyForUpload",
        e.UploadComplete = "UploadComplete",
        e))(Ri || {})
          , Ti = (e => (e.After = "after",
        e.Before = "before",
        e.BeforeAndAfter = "beforeAndAfter",
        e))(Ti || {});
        let ji = !0
          , Bi = !1;
        var Mi = (e => (e.EventQueueLatency = "sdk_event_queue_latency_seconds",
        e.ReplayAddEventBatch = "sdk_replay_add_event_batch_seconds",
        e.ReplayCleanup = "sdk_replay_cleanup_seconds",
        e.ReplayCompression = "sdk_replay_compression_seconds",
        e.ReplayGetEventsBetween = "sdk_replay_get_events_between_seconds",
        e.ReplayFullSnapshot = "sdk_replay_snapshot_seconds",
        e))(Mi || {});
        const Fi = ["sdk_event_queue_latency_seconds", "sdk_replay_add_event_batch_seconds", "sdk_replay_cleanup_seconds", "sdk_replay_compression_seconds", "sdk_replay_get_events_between_seconds", "sdk_replay_snapshot_seconds"];
        let $i, Ni = {};
        class Ki {
            constructor(e) {
                i(this, "_values", []),
                i(this, "_isWebMetric"),
                this.name = e,
                this._isWebMetric = Fi.includes(this.name)
            }
            report(e) {
                if (ji && this._values.push({
                    time: Date.now(),
                    value: e
                }),
                Bi || !this._isWebMetric)
                    return;
                const t = this.findExceededThreshold(e);
                t && $i && $i(e, t)
            }
            collect() {
                const e = this._values;
                return this._values = [],
                e
            }
            findExceededThreshold(e) {
                const t = Ni[this.name];
                if (t)
                    return t.find((t => this.valueExceedsThreshold(e, t)))
            }
            valueExceedsThreshold(e, t) {
                return "max" === t.type ? e > t.value : "min" === t.type && e < t.value
            }
        }
        const qi = {}
          , Vi = e => {
            const t = new Ki(e);
            return qi[e] = t,
            t
        }
          , Wi = (e, t) => {
            let n = qi[e];
            return n || (n = Vi(e)),
            n.report(t)
        }
          , zi = ({reportingIntervalSeconds: e, postMetrics: t}) => {
            e ? setInterval(( () => {
                (async e => {
                    const t = Object.values(qi).map((e => ({
                        name: e.name,
                        values: e.collect()
                    })));
                    if (t.some((e => e.values.length)))
                        try {
                            await e(JSON.stringify(t))
                        } catch (e) {
                            ce(`Error posting metrics: ${e}`)
                        }
                }
                )(t)
            }
            ), 1e3 * e) : ji = !1
        }
          , Gi = async (e, t) => {
            const n = performance.now();
            try {
                await e()
            } finally {
                const e = performance.now() - n;
                let r = qi[t];
                r || (r = Vi(t)),
                r.report(e / 1e3)
            }
        }
          , Hi = (e, t) => {
            const n = performance.now();
            try {
                e()
            } finally {
                const e = performance.now() - n;
                let r = qi[t];
                r || (r = Vi(t)),
                r.report(e / 1e3)
            }
        }
          , Yi = "sprig.sessionId"
          , Ji = "sprig.disableReplayRecording"
          , Qi = () => {
            Y.setItem(Ji, "disabled")
        }
          , Xi = () => !!Y.getItem(Ji)
          , Zi = ["did not allow mutations", "called in an invalid security context"]
          , eo = (e, t, {reportError: n=!0, extraInfo: r}) => {
            Xi() || t instanceof Error && (Qi(),
            (e => {
                if (!e)
                    return !0;
                for (const t of Zi)
                    if (e.toLowerCase().includes(t))
                        return !1;
                return !0
            }
            )(null == t ? void 0 : t.message) && (n && window.UserLeap.reportError(e, t, r),
            no()))
        }
          , to = ( () => {
            const e = Y.getItem(Yi);
            if (e)
                return ue(`Found saved session id: ${e}`),
                Y.removeItem(Yi),
                e;
            const t = g();
            return ue(`Generating new uuid: ${t}`),
            t
        }
        )();
        window.addEventListener("beforeunload", ( () => {
            ue(`Before page unload saving session id: ${to}`),
            Y.setItem(Yi, to)
        }
        ));
        const no = async () => {
            try {
                await Promise.allSettled([io.events.clear(), io.chunkUploads.clear(), io.pendingCaptures.clear()])
            } catch {}
        }
          , ro = (e, t, n= () => !0) => io.table(t).where("timestamp").below(e).and(n).delete();
        const io = new class oo extends Li {
            constructor() {
                super("replayStorage", {
                    autoOpen: !1
                }),
                i(this, "events"),
                i(this, "chunkUploads"),
                i(this, "pendingCaptures")
            }
        }
        ;
        io.version(1).stores({
            events: "uuid, timestamp, [sessionId+timestamp]",
            chunkUploads: "uuid, timestamp, [sessionId+status], [uploadId+status], [sessionId+status+uploadId]",
            pendingCaptures: "uuid, timestamp, [sessionId+targetTimestamp]"
        }),
        io.open().catch((e => {
            de(`Error opening replay storage: ${JSON.stringify(e)}`),
            Qi()
        }
        ));
        let so = 1
          , ao = 5e3
          , lo = 6e4;
        const uo = "sprig.pendingCount";
        let co, po = 0, ho = Date.now(), fo = !1;
        var yo = (e => (e.Left = "left_click",
        e.Right = "right_click",
        e))(yo || {});
        const mo = async (e, t, n, r=2, i) => {
            try {
                if (Xi())
                    return void ue("Not initializing replay because recording is disabled");
                if (!t)
                    return void ue("Not initializing replay because config didn't specify maxReplayDurationSeconds");
                if (null != i && i.minAvailableGb && (so = i.minAvailableGb),
                !await (async e => {
                    var t;
                    if (null != (t = window.navigator.storage) && t.estimate) {
                        const {quota: t, usage: n} = await window.navigator.storage.estimate();
                        if (t && n && (t - n) / 1073741824 < e)
                            return !1
                    }
                    return !0
                }
                )(so))
                    return void ce("Minimum storage not available");
                ue("Initializing replay"),
                null != i && i.minDuration && (ao = i.minDuration),
                null != i && i.batchDuration && (lo = i.batchDuration),
                (e => {
                    xe.setLimit(e)
                }
                )(r),
                Lo(),
                _o(t + 35, 1800, t + 35),
                So(),
                window.rrwebRecord || (ue("Loading recording script"),
                await (async (e, t, n) => new Promise(( (r, i) => {
                    const o = e.createElement("script");
                    o.src = t,
                    o.onload = r,
                    o.onerror = i,
                    n && (o.nonce = n),
                    e.head.appendChild(o)
                }
                )))(e, "https://cdn.sprig.com/dependencies/record-2.0.0-alpha.6.min.js", n),
                ue("Recording script finished loading"));
                const o = window.rrwebRecord;
                if (!o)
                    return void ce("Record script failed to set global function");
                let s = !0
                  , a = 0;
                co = o({
                    checkoutEveryNms: 3e4,
                    sampling: {
                        input: "last",
                        scroll: 250,
                        media: 800
                    },
                    emit: (e, t) => {
                        if (Xi())
                            return;
                        if (ho = Date.now(),
                        t && 4 === e.type)
                            a = performance.now();
                        else if (t && a && 2 === e.type) {
                            const e = performance.now() - a;
                            Wi(Mi.ReplayFullSnapshot, e / 1e3)
                        }
                        const n = s || !!t;
                        s = !1,
                        vo({
                            uuid: g(),
                            event: JSON.stringify(e),
                            isValidStart: n,
                            timestamp: Date.now()
                        })
                    }
                    ,
                    ...i
                }),
                fo = !0,
                po || (po = window.setInterval(( () => {
                    Date.now() - ho > 1e3 && Ro("Sprig_Noop", {})
                }
                ), 1e3))
            } catch (e) {
                return Bo("Error initializing replay", e)
            }
        }
        ;
        let go = !1
          , wo = [];
        const vo = e => {
            wo.push(e),
            go || bo()
        }
          , bo = () => {
            go = !0,
            setTimeout((async () => {
                if (Xi())
                    return;
                const e = wo;
                wo = [],
                go = !1,
                Hi((async () => {
                    try {
                        await (e => {
                            const t = e.map((e => ({
                                ...e,
                                sessionId: e.sessionId ?? to
                            })));
                            return io.events.bulkAdd(t)
                        }
                        )(e)
                    } catch (e) {
                        Bo("Error storing replay events", e)
                    }
                }
                ), Mi.ReplayAddEventBatch)
            }
            ), 500)
        }
          , _o = (e=360, t=1800, n=240) => {
            const r = setInterval(( () => {
                const i = Date.now();
                Xi() || (le(`Performing periodic replay data cleanup / Event Seconds ${e} / Chunk Seconds ${t} / Pending Capture Seconds ${n}`),
                Gi(( () => io.transaction("rw!", io.events, io.chunkUploads, io.pendingCaptures, ( () => {
                    ro(i - 1e3 * e, "events", (t => void 0 === t.expiredAt || t.expiredAt < i - 1e3 * e)),
                    ro(i - 1e3 * t, "chunkUploads"),
                    ro(i - 1e3 * n, "pendingCaptures", (e => void 0 === e.canUpload || !1 === e.canUpload))
                }
                )).catch((e => {
                    clearInterval(r),
                    Bo("Error deleting table rows", e)
                }
                ))), Mi.ReplayCleanup),
                ue("Cleanup complete"))
            }
            ), 3e4)
        }
          , So = (e=5) => {
            setInterval(Oo, 1e3 * e)
        }
          , ko = async (e, t, n, r, i) => {
            try {
                const o = Math.min(e + i, n)
                  , s = `from: ${new Date(e).toLocaleTimeString()} to ${new Date(o).toLocaleTimeString()}`;
                ue(`Getting event batch ${s}`);
                const a = await (async (e, t) => {
                    let n = [];
                    return await Gi((async () => {
                        n = await io.events.where("[sessionId+timestamp]").between([to, e], [to, t]).toArray()
                    }
                    ), Mi.ReplayGetEventsBetween),
                    n
                }
                )(e, o);
                if (null == a || !a.length)
                    return ue(`No events found ${s}`),
                    [r, []];
                if (!r) {
                    ue(`Searching for valid start in ${a.length} events ${s}`);
                    let e = -1;
                    if (null == a || a.forEach(( (n, r) => {
                        if (!n.isValidStart)
                            return;
                        const i = n.timestamp <= t;
                        (e < 0 || i) && (e = r)
                    }
                    )),
                    e < 0)
                        return ue(`No valid start found in ${a.length} events ${s}`),
                        [];
                    const n = a[e].timestamp;
                    return ue(`Found valid start at: ${new Date(n).toLocaleTimeString()} in events ${s}`),
                    [!0, null == a ? void 0 : a.slice(e)]
                }
                return [r, a]
            } catch (e) {
                Bo("Error getting events batch", e)
            }
        }
          , Eo = e => Promise.all(e.map((async e => {
            const t = await (async (e, t=3) => xe.execute((async () => {
                ue(`Beginning upload of chunk ${e.chunkIndex} for survey: ${e.surveyId}`);
                const n = await Ae(e.uploadUrl, {
                    body: e.data,
                    method: "PUT",
                    retries: t,
                    retryDelay: e => 1e3 * Math.pow(2, e)
                });
                ue(`Completed upload of chunk ${e.chunkIndex} for survey: ${e.surveyId}`);
                const r = n.headers.get("ETag");
                if (!r)
                    throw new Error(`Upload response did not include etag for upload ${e.uploadId}, part ${e.chunkIndex}`);
                return r
            }
            )))(e);
            return await ( (e, t) => io.chunkUploads.update(e, {
                data: null,
                etag: t,
                status: Ri.UploadComplete
            }))(e.uuid, t),
            e.uploadId
        }
        )))
          , Io = async e => {
            ue(`Marking upload complete if finished: ${e}`);
            const t = await (e => io.chunkUploads.where({
                uploadId: e,
                status: Ri.UploadComplete
            }).toArray())(e);
            if (null == t || !t.length)
                return void ue(`No finished chunks found for upload: ${e}`);
            const n = t.reduce(( (e, t) => (e.find((e => e.chunkIndex === t.chunkIndex)) || e.push(t),
            e)), []);
            n.sort(( (e, t) => e.chunkIndex - t.chunkIndex));
            const r = n.map((e => ({
                ETag: e.etag,
                PartNumber: e.chunkIndex
            }))).filter((e => null !== e.ETag))
              , i = n[0];
            await Pe({
                apiUrl: i.apiUrl,
                surveyId: i.surveyId,
                uploadId: e,
                responseGroupUuid: i.responseGroupId,
                etags: r,
                headers: i.completeUploadHeaders,
                replayDuration: i.replayDuration
            }),
            ue(`Cleaning up chunks for ${e}`),
            await (e => io.chunkUploads.where({
                uploadId: e,
                status: Ri.UploadComplete
            }).delete())(e),
            ue(`Done cleaning up chunks for ${e}`)
        }
          , Lo = async () => {
            try {
                let e = [];
                if (await io.transaction("rw", io.chunkUploads, (async () => {
                    e = await ( ({status: e, uploadId: t}) => t ? io.chunkUploads.where({
                        uploadId: t,
                        status: e
                    }).toArray() : io.chunkUploads.where({
                        sessionId: to,
                        status: e
                    }).toArray())({
                        status: Ri.ReadyForUpload
                    }).catch((e => {
                        Bo("chunkUploads transaction error", e)
                    }
                    ))
                }
                )),
                null == e || !e.length)
                    return;
                const t = await Eo(e);
                ue(`Finished uploading unfinished chunks for ${t}`),
                null != t && t.length && await Promise.all(t.map((async e => {
                    e && await Io(e)
                }
                )))
            } catch (e) {
                Bo("Error getting chunk upload uuids", e)
            }
        }
          , Uo = async (e, t, n) => {
            const r = new TextEncoder;
            let i = null
              , o = null
              , s = null
              , a = !1
              , l = !1
              , [u,c] = [0, 0];
            const d = e - 35e3
              , p = [];
            let h = [];
            ue(`Getting events between ${new Date(e).toLocaleTimeString()} and ${new Date(t).toLocaleTimeString()}`),
            ue(`Using batch duration: ${lo}ms`);
            for (let i = d; i < t; i += lo) {
                if ([l,h] = await ko(i, e, t, l, lo),
                null == h || !h.length) {
                    ue("No events found");
                    continue
                }
                0 === u && (u = h[0].timestamp),
                c = h[h.length - 1].timestamp,
                ue(`Last event time in batch: ${new Date(c).toLocaleTimeString()}`);
                const d = `${a ? "," : "["}${h.map((e => e.event)).join(",")}`
                  , f = r.encode(d);
                n && null === o && (le("Attempting compression"),
                s = new window.CompressionStream("gzip"),
                o = s.writable.getWriter()),
                Hi(( () => {
                    n && o ? o.write(f) : p.push(f)
                }
                ), Mi.ReplayCompression),
                a = !0
            }
            if (c - u < ao)
                return ue(`Replay duration is shorter than minimum of ${ao}ms / Start:${u} / End:${c}`),
                null;
            const f = r.encode("]");
            return le("Writing final close brace"),
            o && s ? (o.write(f),
            o.close(),
            i = new Uint8Array(await new Response(s.readable).arrayBuffer())) : (p.push(f),
            i = (e => {
                let t = 0;
                e.forEach((e => {
                    t += e.length
                }
                ));
                const n = new Uint8Array(t);
                let r = 0;
                return e.forEach((e => {
                    n.set(e, r),
                    r += e.length
                }
                )),
                n
            }
            )(p)),
            ue("Finished generating file data"),
            i
        }
          , xo = async e => {
            const {surveyId: t, responseGroupId: n, visitorId: r, apiUrl: i, completeUploadHeaders: o, replayParams: s, triggerTimestamp: a} = e
              , l = await (async (e, t) => {
                const n = void 0 !== window.CompressionStream;
                let r = null;
                const i = t ?? Date.now()
                  , o = i - e;
                try {
                    r = await Uo(o, i, n)
                } catch (e) {
                    if (e instanceof Error && window.UserLeap.reportError("Error compressing replay", e),
                    n)
                        try {
                            r = await Uo(o, i, !1)
                        } catch (e) {
                            Bo("fileData fallback failed", e)
                        }
                }
                return r
            }
            )(1e3 * s.replayDurationSeconds, a);
            if (null == l || !l.length)
                return void ue(`File data is empty for survey: ${t}`);
            ue(`Found file data for survey: ${t}`);
            const u = ( (e, t, n) => {
                const r = e.length
                  , i = 1024 * t * 1024
                  , o = Math.ceil(r / n)
                  , s = Math.max(i, o);
                ue(`Total file bytes: ${r} / target chunk size: ${s}`);
                const a = [];
                let l = 0;
                for (; l < r; )
                    a.push(e.slice(l, l + s)),
                    l += s;
                return a
            }
            )(l, s.minimumChunkSizeMb, s.signedUrls.length);
            ue(`Got ${u.length} chunks for survey: ${t}`);
            const c = await Promise.all(u.map((async (e, l) => {
                const c = g()
                  , d = {
                    apiUrl: i,
                    chunkIndex: l + 1,
                    completeUploadHeaders: o,
                    etag: null,
                    responseGroupId: n,
                    status: Ri.ReadyForUpload,
                    surveyId: t,
                    timestamp: a,
                    totalChunks: u.length,
                    data: e,
                    uploadId: s.uploadId,
                    uploadUrl: s.signedUrls[l].url,
                    uuid: c,
                    visitorId: r
                };
                return ue(`Recording chunk upload: ${JSON.stringify({
                    index: d.chunkIndex,
                    surveyId: d.surveyId,
                    uploadId: d.uploadId,
                    size: e.length,
                    id: c
                }, null, 2)}`),
                await (e => io.chunkUploads.add({
                    ...e,
                    sessionId: e.sessionId ?? to
                }))(d),
                ue(`Done creating chunk upload: ${c}`),
                d
            }
            )));
            ue(`All chunk records created. Beginning upload for survey: ${t}`),
            await (async (e, t) => {
                await Eo(t),
                ue(`Done uploading chunks for uploads: ${e.join(",")}`),
                await Promise.all(e.map((e => Io(e))))
            }
            )([s.uploadId], c)
        }
          , Co = async (e, t) => {
            try {
                if (ue(`Attempting replay capture: ${JSON.stringify({
                    isStandalone: e.isStandalone,
                    duration: e.replayParams.replayDurationSeconds,
                    type: e.replayParams.replayDurationType,
                    responseGroupId: e.responseGroupId,
                    surveyId: e.surveyId,
                    triggerTimestamp: e.triggerTimestamp,
                    visitorId: e.visitorId
                }, null, 2)}`),
                Xi())
                    return void ue(`Replay recording is disabled: ${e.surveyId}`);
                ue(`Replay recording enabled: ${e.surveyId}`);
                const {isStandalone: n, replayParams: r, triggerTimestamp: i, responseGroupId: o} = e
                  , s = async () => {
                    setTimeout(( () => B.removeListener(a.QuestionAnswered, s)), 0),
                    r.replayDurationType === Ti.Before ? await xo(e) : await (e => io.pendingCaptures.where("sessionId").equals(to).and((t => t.captureParams.responseGroupId === e)).modify({
                        canUpload: !0
                    }))(o)
                }
                ;
                if (r.replayDurationType === Ti.After || r.replayDurationType === Ti.BeforeAndAfter)
                    return n || (ue("Attaching QuestionAnswered listener for non-standalone replay"),
                    B.on(a.QuestionAnswered, s)),
                    ue(`Scheduling capture for replay of type: ${r.replayDurationType}`),
                    void await Do(e);
                if (n || t)
                    ue(`Proceeding to capture replay for survey: ${e.surveyId} / standalone? ${n} / canUpload? ${t}`),
                    await xo(e);
                else {
                    const e = i - 1e3 * (35 + r.replayDurationSeconds)
                      , t = i;
                    ue(`Setting expiry minutes to ${r.expirationTimeLimitMinutes} for events from ${new Date(e).toLocaleTimeString()} to ${new Date(t).toLocaleTimeString()}`),
                    await ( (e, t, n) => {
                        const r = new Date
                          , i = r.setMinutes(r.getMinutes() + (n ?? 30));
                        return io.events.where("[sessionId+timestamp]").between([to, e], [to, t]).modify({
                            expiredAt: i
                        })
                    }
                    )(e, t, r.expirationTimeLimitMinutes),
                    ue("Attaching QuestionAnswered listener"),
                    B.on(a.QuestionAnswered, s)
                }
            } catch (e) {
                Bo("Error scheduling or capturing replay", e)
            }
        }
          , Ao = () => {
            if (Xi())
                le("Not clearing user data, replay is disabled");
            else
                try {
                    io.events.where("sessionId").equals(to).delete(),
                    io.pendingCaptures.where("sessionId").equals(to).delete()
                } catch (e) {
                    Bo("Error clearing session event data", e)
                }
        }
        ;
        let Po = Y.getItem(uo);
        const Do = async e => {
            ue(`Scheduling replay capture: ${JSON.stringify(e)}`);
            const {surveyId: t} = e
              , n = await io.pendingCaptures.where("sessionId").equals(to).toArray()
              , r = null == n ? void 0 : n.filter((e => e.captureParams.surveyId === t));
            if (null != r && r.length)
                return void ue(`Pending capture exists for survey: ${t}`);
            const i = {
                ...e,
                replayParams: {
                    ...e.replayParams
                }
            };
            e.replayParams.replayDurationType === Ti.BeforeAndAfter && (i.replayParams.replayDurationSeconds *= 2),
            i.replayParams.replayDurationType = Ti.Before;
            const o = e.triggerTimestamp + 1e3 * e.replayParams.replayDurationSeconds;
            return i.triggerTimestamp = o,
            Po = Po ? (parseInt(Po) + 1).toString() : "1",
            Y.setItem(uo, Po),
            (e => io.pendingCaptures.add({
                ...e,
                sessionId: e.sessionId ?? to,
                canUpload: !1
            }))({
                uuid: g(),
                targetTimestamp: o,
                timestamp: Date.now(),
                captureParams: i
            })
        }
          , Oo = async () => {
            try {
                if (Po && parseInt(Po) > 0) {
                    const e = await io.pendingCaptures.where("sessionId").equals(to).and((e => e.targetTimestamp < Date.now())).toArray();
                    e.length && await Promise.all(e.map((async e => {
                        await io.pendingCaptures.delete(e.uuid),
                        await Co(e.captureParams, e.canUpload)
                    }
                    ))),
                    Po = (parseInt(Po) - e.length).toString(),
                    Y.setItem(uo, Po)
                }
            } catch (e) {
                Bo("Error initiating pending captures", e)
            }
        }
          , Ro = (e, t) => {
            var n, r;
            if (fo)
                try {
                    null == (r = null == (n = window.rrwebRecord) ? void 0 : n.addCustomEvent) || r.call(n, e, t)
                } catch (e) {
                    Bo("Error recording custom event", e)
                }
        }
          , To = e => {
            e.description && (e.description = Fo(e.description)),
            Ro("Sprig_PageView", e)
        }
          , jo = e => {
            Ro("Sprig_SubmitSurvey", e)
        }
          , Bo = (e, t, {reportError: n}={
            reportError: !0
        }) => (co && (co(),
        co = void 0),
        fo = !1,
        de(`${e} - ${JSON.stringify(t)}`),
        (async (e, t, {reportError: n}={
            reportError: !0
        }) => {
            var r;
            let i;
            try {
                if (n && null != (r = window.navigator.storage) && r.estimate) {
                    const {quota: e, usage: t} = await window.navigator.storage.estimate();
                    i = {
                        availableSpaceInMB: e && t ? (e - t) / 1048576 : void 0,
                        quota: e,
                        usage: t
                    }
                }
            } catch (e) {
                window.UserLeap.reportError("Error getting storage estimate", e)
            }
            eo(e, t, {
                reportError: n,
                extraInfo: i
            })
        }
        )(e, t, {
            reportError: n
        }))
          , Mo = () => fo
          , Fo = e => e && e.trim().substring(0, 500).replace(/\s\s+/g, " ").replace(/\r?\n|\r/g, " ").substring(0, 250)
          , $o = "ul-view-sdk-script"
          , No = ["ios", "android"]
          , Ko = "visitors"
          , qo = "environments"
          , Vo = Object.freeze({
            contains: (e, t) => t.includes(e),
            notContains: (e, t) => !t.includes(e),
            exactly: (e, t) => t === e,
            notExactly: (e, t) => t !== e,
            startsWith: (e, t) => t.startsWith(e),
            endsWith: (e, t) => t.endsWith(e),
            regex: (e, t) => new RegExp(e).test(t),
            legacy: (e, t) => new RegExp(e,"i").test(t)
        });
        function Wo(e, t) {
            const {matchType: n, pattern: r} = e
              , i = n ? Vo[n] : Vo.legacy;
            let o = !1;
            try {
                o = i(r, t)
            } catch (t) {
                const n = `[Sprig] (ERR-445) Failed to check url match with pattern ${r}`;
                t instanceof Error && (console.warn(n, t),
                t.stack = JSON.stringify(e),
                window.UserLeap.reportError(n, t))
            }
            return o
        }
        async function zo(e, t, n=0, r=!1) {
            var i, o, s;
            t.headers = Object.assign(Ie(window.UserLeap), t.headers);
            const l = await Ue(e, t, n, r);
            if (l.ok) {
                const e = null == (i = l.headers) ? void 0 : i.get("Authorization")
                  , t = e ? e.split(" ") : void 0
                  , n = t && 2 === t.length ? t[1] : void 0
                  , r = null == (o = l.headers) ? void 0 : o.get(F.VisitorID);
                n && r && (r !== window.UserLeap.visitorId || window.UserLeap.token !== n) && (Go("token", n),
                Go("vid", r),
                B.emit(a.VisitorIDUpdated, {
                    visitorId: r
                }),
                window.UserLeap.token = n,
                window.UserLeap.visitorId = r)
            }
            return null != (s = l.json) && s.logMessage && console.warn(`[Sprig] ${l.json.logMessage}`),
            l
        }
        function Go(e, t) {
            const n = J.getItem(C.Credentials);
            let r = {};
            if (n)
                try {
                    r = JSON.parse(n)
                } catch (e) {
                    e instanceof Error && (e.stack = n,
                    window.UserLeap.reportError("Failed to parse local storage credentials", e)),
                    console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", e)
                }
            let i = r[window.UserLeap.envId];
            i ? i[e] = t : i = {
                [e]: t
            },
            r[window.UserLeap.envId] = i;
            try {
                J.setItem(C.Credentials, JSON.stringify(r))
            } catch (e) {
                e instanceof Error && console.warn(`[Sprig] (ERR-426) Unable to write to Local Storage:: ${e.message}`)
            }
        }
        function Ho() {
            return window.previewMode ? "0" : window.UserLeap.visitorId ?? ""
        }
        function Yo(e, t, n) {
            const r = [window.UserLeap._API_URL, "sdk", e];
            return t && t.forEach((e => {
                r.push(e),
                e === qo ? r.push(window.UserLeap.envId) : e === Ko && r.push(Ho())
            }
            )),
            n && r.push(n),
            r.join("/")
        }
        const Jo = async e => {
            var t, r;
            const {context: i, forceBrandedLogo: o, endCard: s, isFeedback: p=!1, locale: h, productConfig: f, questions: y, responseGroupUid: m, surveyId: v, uuid: b, vid: _, sessionReplay: S, studyType: k} = e
              , E = Ie(window.UserLeap)
              , L = Xo(E)
              , U = Qo(E);
            if (ue(`Attempting to display survey: ${v}`),
            S)
                if (ue("Survey has replay attached"),
                L) {
                    const e = {
                        mediaRecordingUid: g(),
                        mediaType: I.Screen,
                        questionId: 1,
                        responseGroupUid: m,
                        surveyId: v,
                        updatedAt: (new Date).toISOString(),
                        visitorId: window.UserLeap.visitorId,
                        isReplay: !0
                    };
                    B.emit(a.ReplayCapture, {
                        responseGroupUid: m,
                        hasQuestions: !(null == y || !y.length),
                        surveyId: v,
                        uploadId: S.uploadId,
                        replayType: S.replayDurationType ?? Ti.Before,
                        seconds: S.replayDurationSeconds,
                        generateVideoUploadUrlPayload: e
                    })
                } else
                    Co({
                        responseGroupId: m,
                        surveyId: v,
                        visitorId: _,
                        replayParams: S,
                        completeUploadHeaders: E,
                        apiUrl: window.UserLeap._API_URL,
                        triggerTimestamp: Date.now(),
                        isStandalone: 0 === y.length
                    });
            if (null == _ || null == y || !y.length)
                return ue(`Not displaying survey: vid: ${_} / questions: ${y}`),
                {
                    success: !1,
                    message: "[Sprig] no survey found",
                    surveyState: w.NoSurvey
                };
            if (window.UserLeap.container) {
                ue("Already displaying a survey");
                const e = "[Sprig] (ERR-409) Found an existing Survey container, aborting rendering of this survey";
                return console.warn(e),
                {
                    success: !1,
                    message: e,
                    surveyState: w.NoSurvey
                }
            }
            if (_ !== window.UserLeap.visitorId && b !== window.UserLeap.visitorId && !window.previewMode) {
                const e = "Attempted to display survey to a different visitor";
                return ue(e),
                window.UserLeap.reportError("DisplaySurvey", new Error(e)),
                {
                    success: !1,
                    message: e,
                    surveyState: w.NoSurvey
                }
            }
            ue(`Showing survey: ${v}`),
            (e => {
                Ro("Sprig_ShowSurvey", e)
            }
            )({
                id: v,
                userAgent: window.navigator.userAgent
            }),
            O.disable(),
            B.emit(a.SurveyWillPresent, {
                name: a.SurveyWillPresent,
                [l.SurveyId]: v
            });
            let x, A, P, D, R = document.createElement("div");
            const T = e => {
                const {[d.ViewVersion]: t} = e;
                t !== E["x-ul-sdk-version"] && rs(),
                B.removeListener(c.VerifyViewVersion, T)
            }
            ;
            B.on(c.VerifyViewVersion, T),
            window.UserLeap.useMobileStyling = U,
            W(E) ? (x = "ul-direct-embeded-frame",
            A = document.head,
            P = window,
            D = !1,
            L && (ns(),
            R.id = x,
            window.UserLeap.container.appendChild(R),
            is(),
            B.emit(a.SurveyLifeCycle, {
                state: "presented"
            }),
            B.emit(a.SurveyPresented, {
                name: a.SurveyPresented,
                [l.SurveyId]: v
            }))) : ({frameId: x, contentWinDocHead: A, contentWindow: P, hasOverlay: D, iframe: R} = ss({
                productConfig: f,
                useMobileStyling: U,
                surveyId: v,
                isFeedback: p
            })),
            window.UserLeap.frameId = x;
            const j = {
                apiURL: window.UserLeap._API_URL,
                cards: y,
                configureExitOnOverlayClick: e => {
                    B.on(a.CloseSurveyOnOverlayClick, e)
                }
                ,
                context: i,
                endCard: s,
                envId: window.UserLeap.envId,
                eventEmitFn: B.emit.bind(B),
                fontFamily: window.UserLeap.fontFamily,
                fontFamilyURL: window.UserLeap.fontFamilyURL,
                forceBrandedLogo: o,
                frame: R,
                headers: E,
                locale: h,
                mobileSDKVersion: window.UserLeap.mobileSDKVersion,
                previewKey: J.getItem(C.Preview),
                productConfig: {
                    framePosition: null == f ? void 0 : f.framePosition,
                    desktopDisplay: null == f ? void 0 : f.desktopDisplay,
                    placement: null == f ? void 0 : f.placement
                },
                responseGroupUid: m,
                startingQuestionIdx: null == (t = window.UserLeap.config) ? void 0 : t.startingQuestionIdx,
                studyType: k,
                styleNonce: window.UserLeap.styleNonce,
                surveyId: v,
                tabTitle: document.title,
                ulEvents: u,
                useMobileStyling: U,
                userId: b,
                viewDocument: null == P ? void 0 : P.document,
                viewWindow: P,
                visitorAttributes: {
                    externalUserId: window.UserLeap.userId,
                    email: window.UserLeap.email
                },
                ...window.UserLeap._config
            };
            null != (r = window.UserLeap._config) && r.startingQuestionIdx && (window.UserLeap._config = {
                ...window.UserLeap._config,
                startingQuestionIdx: null
            }),
            window.UserLeap.customStyles && (j.customStyles = window.UserLeap.customStyles),
            P && (P.__cfg = j);
            const M = window.UserLeap.viewSDKURL ? window.UserLeap.viewSDKURL : j.path
              , F = document.getElementById($o);
            F && F.remove();
            const $ = function() {
                const e = document.createElement("script");
                return window.UserLeap.nonce && e.setAttribute("nonce", window.UserLeap.nonce),
                e.id = $o,
                e
            }()
              , K = () => {
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                    display: "flex"
                })
            }
            ;
            if (j.installationMethod === N.Npm || j.installationMethod === N.NpmBundled) {
                const {default: e} = await n.e(3337).then(n.bind(n, 623337));
                e.configure(j),
                D && window.UserLeap.container && K()
            } else
                M && ($.src = M,
                D && $.addEventListener("load", ( () => {
                    window.UserLeap.container && K()
                }
                )),
                null == P || P.addEventListener("error", (e => {
                    e.target instanceof HTMLScriptElement && e.target.src === M && window.UserLeap.reportError("loadFrameScript", new Error("Frame script failed to load"))
                }
                ), {
                    capture: !0,
                    once: !0
                }));
            return null == A || A.appendChild($),
            {
                success: !0,
                surveyState: w.Ready,
                surveyId: v,
                responseGroupUid: m
            }
        }
        ;
        function Qo(e) {
            var t;
            if (void 0 !== window.UserLeap.useMobileStyling)
                return window.UserLeap.useMobileStyling;
            const n = (null == (t = window.UserLeap.windowDimensions) ? void 0 : t.width) ?? document.body.clientWidth;
            return Xo(e) || n > 10 && n < 500
        }
        function Xo(e) {
            return No.includes(e[F.Platform])
        }
        const Zo = "ul-frame";
        window.UserLeap && window.Sprig && (window.Sprig._gtm ? window.Sprig = window.UserLeap : window.UserLeap = window.Sprig),
        window.UserLeap || (window.UserLeap = window.Sprig),
        window.Sprig || (window.Sprig = window.UserLeap);
        const es = "360px"
          , ts = "0px"
          , ns = e => {
            window.UserLeap.container = document.createElement("div"),
            window.UserLeap.container.className = "ul-container";
            const t = cs();
            e && t && !window.UserLeap.useMobileStyling ? t.appendChild(window.UserLeap.container) : document.body.appendChild(window.UserLeap.container)
        }
          , rs = (e, t) => {
            us();
            const n = window.UserLeap.container;
            if (n && n.parentNode)
                try {
                    n.parentNode.removeChild(n),
                    window.UserLeap.container = null,
                    Go("trackStartUrl", null),
                    B.emit(a.SurveyLifeCycle, {
                        state: "dismissed"
                    }),
                    B.emit(a.SurveyClosed, {
                        name: a.SurveyClosed,
                        initiator: e,
                        studyType: t
                    })
                } catch (t) {
                    console.warn(`[Sprig] (ERR-412) Error removing UserLeap container by ${e} ` + n),
                    t instanceof Error && window.UserLeap.reportError("dismissActiveSurvey", t)
                }
        }
          , is = () => {
            B.on(a.SurveyWillClose, ( ({initiator: e, studyType: t}) => {
                rs(e, t)
            }
            ))
        }
          , os = (e, t, n, r) => {
            var i, o;
            const s = {
                position: "fixed",
                bottom: "0px",
                right: ts,
                border: 0,
                backgroundColor: "rgba(0,0,0,0)",
                zIndex: 2147483646,
                transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
                maxWidth: "100%"
            }
              , a = Object.assign({}, t, window.UserLeap)
              , {desktopDisplay: l} = t || {}
              , u = l === q.CenterModal;
            u && (a.framePosition = M.Center);
            let c, d = !1;
            if (n)
                null != (i = window.UserLeap.windowDimensions) && i.width ? s.width = `${window.UserLeap.windowDimensions.width}px` : s.width = "100%",
                null != (o = window.UserLeap.windowDimensions) && o.height ? s.maxHeight = window.UserLeap.windowDimensions.height - 20 + "px" : window.UserLeap.maxHeight ? s.maxHeight = window.UserLeap.maxHeight : s.maxHeight = document.body.clientHeight - 20 + "px",
                ["light", "dark"].includes(a.overlayStyleMobile) && (d = !0);
            else {
                s.width = es,
                s.maxHeight = window.UserLeap.maxHeight || "66vh";
                const e = () => {
                    d = !0,
                    c = {
                        margin: "auto",
                        position: "static"
                    },
                    s.maxHeight = null
                }
                ;
                if (r)
                    u ? e() : c = {
                        position: "relative"
                    };
                else
                    switch (a.framePosition) {
                    case M.BottomLeft:
                        c = {
                            left: ts
                        };
                        break;
                    case M.TopLeft:
                        c = {
                            left: ts,
                            top: 0
                        };
                        break;
                    case M.TopRight:
                        c = {
                            top: 0
                        };
                        break;
                    case M.Center:
                        e()
                    }
            }
            return d && ( (e, t) => {
                const n = {
                    position: "fixed",
                    overflow: "auto",
                    top: "0px",
                    left: "0px",
                    display: "none",
                    height: "100%",
                    width: "100%",
                    transition: "background-color 0.3s ease-out",
                    zIndex: 2147483646
                }
                  , r = t ? e.overlayStyleMobile : e.overlayStyle;
                n["background-color"] = "light" === r ? "rgba(255,255,255, 0.95)" : "rgba(0,0,0,0.9)",
                t || (n.margin = "auto"),
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, n)
            }
            )(a, n),
            Object.assign(e.style, s, c),
            d
        }
          , ss = ({productConfig: e, useMobileStyling: t, surveyId: n, isFeedback: r}) => {
            var i, o;
            const s = Zo
              , u = r && e.desktopDisplay === q.Slider;
            ns(u),
            ls();
            const c = document.createElement("iframe");
            c.id = s,
            c.setAttribute("title", "Sprig User Feedback Dialog");
            const d = os(c, e, t, r);
            is(),
            c.setHeight = e => {
                parseInt(c.style.height) != e && (c.style.height = `${e}px`,
                B.emit(a.SurveyHeight, {
                    name: a.SurveyHeight,
                    contentFrameHeight: e
                }))
            }
            ;
            let p = !1;
            c.setWidth = e => {
                (parseInt(c.style.width) != e || !p) && (p = !0,
                c.style.width = `${e}px`,
                B.emit(a.SurveyWidth, {
                    name: a.SurveyWidth,
                    contentFrameWidth: e
                }))
            }
            ,
            null == (i = window.UserLeap.container) || i.appendChild(c),
            e && (t ? e.exitOnOverlayClickMobile : e.exitOnOverlayClick) && window.UserLeap.container && (window.UserLeap.container.onclick = () => {
                B.emit(a.CloseSurveyOnOverlayClick)
            }
            ),
            B.emit(a.SurveyLifeCycle, {
                state: "presented"
            }),
            B.emit(a.SurveyPresented, {
                name: a.SurveyPresented,
                [l.SurveyId]: n
            });
            const h = null == (o = c.contentWindow) ? void 0 : o.document;
            if (h && (h.open("text/html", "replace"),
            h.write("<!doctype html><head></head><body></body></html>"),
            h.close(),
            !t)) {
                const e = h.body;
                e.style.display = "flex",
                e.style.alignItems = "center"
            }
            return {
                frameId: s,
                contentWinDocHead: null == h ? void 0 : h.head,
                contentWindow: c.contentWindow,
                hasOverlay: d,
                iframe: c
            }
        }
          , as = {
            [a.SurveyFadingOut]: () => {
                window.UserLeap.container && Object.assign(window.UserLeap.container.style, {
                    "background-color": "rgba(0,0,0,0)"
                })
            }
        }
          , ls = () => {
            Object.entries(as).forEach(( ([e,t]) => {
                B.on(e, t)
            }
            ))
        }
          , us = () => {
            Object.entries(as).forEach(( ([e,t]) => {
                B.off(e, t)
            }
            ))
        }
          , cs = () => ys
          , ds = () => document.getElementById(_.FeedbackContainer)
          , ps = `\n  <div\n    aria-busy="true"\n    aria-label="Processing..."\n    aria-live="polite"\n    class=${_.LoadingSpinnerContainer}\n    id=${_.FeedbackLoadingAnimation}\n    role="progressbar"\n  >\n    <div class=${_.LoadingSpinner}>\n      <div class=${_.LoadingSpinnerFirst}></div>\n      <div class=${_.LoadingSpinnerSecond}></div>\n      <div class=${_.LoadingSpinnerThird}></div>\n      <div class=${_.LoadingSpinnerFourth}></div>\n    </div>\n  </div>`
          , hs = () => !!document.getElementById(Zo);
        let fs = !1
          , ys = null
          , ms = null
          , gs = !1
          , ws = null;
        const vs = () => {
            var e;
            const t = window.UserLeap.container;
            return (null == (e = null == t ? void 0 : t.parentElement) ? void 0 : e.id) === _.FeedbackLoadingContainer
        }
          , bs = () => !(!vs() || !ys) && (ys.style.minWidth = "0px",
        ys.style.width = "0px",
        ys.style.minHeight = "300px",
        ys.style.border = "unset",
        !0)
          , _s = () => {
            if (ys && ms) {
                const e = document.getElementById(_.FeedbackLoadingAnimation);
                e && e.remove(),
                ys.style.border = "unset",
                ys.style.minHeight = "0",
                ys.style.backgroundColor = "transparent",
                ms.disabled = !1,
                gs = !1
            }
        }
          , Ss = () => {
            const {_config: {border: e}} = window.UserLeap;
            ys && ms && (ys.style.minHeight = "300px",
            ys.style.minWidth = "360px",
            ys.style.border = `2px solid ${e}`,
            ys.style.backgroundColor = "white",
            ys.innerHTML = ps,
            ms.disabled = !0,
            gs = !0)
        }
          , ks = async (e, t) => {
            const {buttonTheme: n, eventId: r, placement: i, desktopDisplay: l, feedbackLabel: c, surveyUuid: d} = e
              , p = () => {
                bs()
            }
            ;
            let h = ds();
            if (h) {
                if (!t && r === ws)
                    return;
                h.remove(),
                B.off(u.SURVEY_FADING_OUT, p)
            }
            if (ws = r,
            !document.getElementById("sprig-feedback-style")) {
                const {head: e} = document
                  , t = document.createElement("style");
                t.id = "sprig-feedback-style",
                t.textContent = '.ul-loading-spinner-container{font-size:1.8rem;flex-grow:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.ul-loading-spinner{display:inline-block;position:relative;width:6rem;height:6rem}.ul-loading-spinner div{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:5px;border:5px solid #152e3e;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#152e3e transparent transparent transparent}.ul-loading-spinner .first{animation-delay:-.45s}.ul-loading-spinner .second{animation-delay:-.3s}.ul-loading-spinner .third{animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fade-in-transition{animation:fadeIn .4s ease-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#sprig-feedback-button{border-left:0;border-radius:0 var(--feedback-br) var(--feedback-br) 0;display:grid;padding:8px;text-align:center;transition:all ease-in-out 1s}#sprig-feedback-button:hover{cursor:pointer}.sprig-feedback-button-label{writing-mode:vertical-lr;text-orientation:sideways}.sprig-feedback-button-right{transform:rotate(180deg)}.sprig-feedback-button-bottom{align-self:flex-end;margin-bottom:20px}.sprig-feedback-button-light{background:#efefee;color:#000;border:1px solid #e2e3e1}.sprig-feedback-button-dark{background:#000;color:#fff;border:1px solid #000000}#sprig-feedback-container{display:flex;align-items:center;position:fixed;transition:all ease-in-out 1s;z-index:2147483646}.sprig-feedback-container-left{left:0;flex-flow:row-reverse}.sprig-feedback-container-right{right:0}.sprig-feedback-container-center{top:50%;transform:translateY(-50%)}.sprig-feedback-container-bottom{bottom:0%;margin-bottom:15px}#sprig-feedback-loading-container{align-items:center;background-color:#fff;border-radius:6px;display:flex;max-width:90vw;min-width:0px;transition:all ease-in-out .3s}#sprig-feedback-error-container{text-align:center;width:300px;margin:auto}.sprig-feedback-error-text{font-weight:400;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}.ul-container{display:flex}',
                t.nonce = window.UserLeap.styleNonce,
                e.appendChild(t)
            }
            fs = l === q.CenterModal;
            const [f,y] = i.split("-");
            (e => {
                if (ds() || !Object.values(K).includes(e))
                    return;
                const [t,n] = e.split("-")
                  , r = document.createElement("div");
                r.style.setProperty("--feedback-br", "8px"),
                r.id = "sprig-feedback-container",
                r.classList.add(`${_.FeedbackContainer}-${n}`, `${_.FeedbackContainer}-${t}`),
                document.body.appendChild(r)
            }
            )(i),
            h = ds(),
            ms = document.createElement("button");
            const m = document.createElement("div");
            m.className = "sprig-feedback-button-label",
            m.innerText = c,
            ms.appendChild(m),
            ms.id = _.FeedbackButton,
            ms.classList.add(`${_.FeedbackButton}-${y}`, `${_.FeedbackButton}-${f}`, `${_.FeedbackButton}-${n}`, `${_.FadeInTransition}`),
            B.on(u.SURVEY_FADING_OUT, p),
            ms.addEventListener("click", (async () => {
                const e = document.getElementById(_.FeedbackErrorContainer);
                if (hs() || e)
                    bs() && setTimeout(( () => {
                        if (B.emit(a.SurveyWillClose, {
                            name: a.SurveyWillClose,
                            initiator: o.FeedbackClosed,
                            studyType: s.Feedback
                        }),
                        e) {
                            const e = ds();
                            e && (e.remove(),
                            ws = null,
                            ys = null)
                        }
                    }
                    ), 300);
                else {
                    if (!Qo(Ie(window.UserLeap)) && ys && !gs && Ss(),
                    t)
                        setTimeout((async () => {
                            await Jo(t),
                            _s()
                        }
                        ), 300);
                    else {
                        const e = await (async e => {
                            const t = await zo(Yo("1", [Ko], "startFeedbackStudy"), {
                                body: JSON.stringify({
                                    surveyUuid: e
                                }),
                                method: "POST"
                            });
                            return t.ok ? t.json : null
                        }
                        )(d);
                        if (e)
                            await Jo(e),
                            _s();
                        else {
                            const e = Es();
                            null == ys || ys.appendChild(e)
                        }
                    }
                }
            }
            )),
            null == h || h.appendChild(ms);
            const {useMobileStyling: g} = window.UserLeap;
            if (!fs && !g) {
                const e = document.createElement("div");
                e.id = _.FeedbackLoadingContainer,
                null == h || h.appendChild(e),
                ys = e
            }
            window.UserLeap._config.isOnQuestionsTab && t && !vs() && ys && (Ss(),
            await Jo(t),
            _s())
        }
          , Es = () => {
            const e = document.createElement("div");
            e.id = _.FeedbackErrorContainer,
            e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">\n  <circle cx="20" cy="20" r="14.5" stroke="#B0B5B7" stroke-width="3"/>\n  <path d="M20 12L20 21.6" stroke="#B0B5B7" stroke-width="3" stroke-linecap="round"/>\n  <circle cx="19.9984" cy="27.6" r="1.6" fill="#B0B5B7"/>\n  </svg>';
            const t = document.createElement("h3");
            return t.className = "sprig-feedback-error-text",
            t.innerText = "There was an error while loading the survey",
            e.appendChild(t),
            e
        }
        ;
        const Is = new class Ls {
            constructor() {
                i(this, "_ldData", {})
            }
            getAllLaunchDarklyVariations() {
                return this._ldData
            }
            setLDFlagsVariations(e) {
                try {
                    return !(!e || "object" != typeof e || Array.isArray(e)) && (Object.keys(this._ldData).forEach((e => {
                        delete this._ldData[e]
                    }
                    )),
                    Object.keys(e).forEach((t => this._ldData[`!launch_darkly_${t}`] = (e[t] ?? 0) + 1)),
                    !0)
                } catch (e) {
                    return e instanceof Error && window.UserLeap.reportError("setAllLDFlagsVariations", e),
                    console.warn("[Sprig] An issue had occured when setting LaunchDarkly flags and variations."),
                    !1
                }
            }
        }
        ;
        Object.freeze(Is);
        const Us = new class xs {
            constructor() {
                i(this, "_optimizelyData", {})
            }
            setOptimizelyExperiment(e, t=!0) {
                if (!e || "object" != typeof e)
                    return !1;
                const {experiments: n} = e;
                try {
                    return t && Object.keys(this._optimizelyData).map((e => {
                        delete this._optimizelyData[e]
                    }
                    )),
                    n && n.map((e => {
                        const {id: t, variation: n} = e
                          , r = this.transformExperimentId(t);
                        n && "string" == typeof n && (this._optimizelyData[r] = n)
                    }
                    )),
                    !0
                } catch (e) {
                    return e instanceof Error && window.UserLeap.reportError("setOptimizelyExperiment", e),
                    !1
                }
            }
            getAllOptimizelyExperiments() {
                return this._optimizelyData
            }
            getOptimizelyVariationName(e) {
                return this._optimizelyData[this.transformExperimentId(e)]
            }
            transformExperimentId(e) {
                return "!optimizely_experiments_" + e
            }
            getAndSetWebOptimizelyExperiments() {
                var e;
                try {
                    if (window && window.optimizely && "function" == typeof window.optimizely.get) {
                        const t = null == (e = window.optimizely.get("state")) ? void 0 : e.getExperimentStates({
                            isActive: !0
                        });
                        if (t) {
                            const e = Object.keys(t).map((e => {
                                var n, r;
                                return null != (n = t[e].variation) && n.name ? {
                                    id: e,
                                    variation: null == (r = t[e].variation) ? void 0 : r.name
                                } : {
                                    id: e,
                                    variation: "Original"
                                }
                            }
                            ));
                            return this.setOptimizelyExperiment({
                                experiments: e
                            }, !1),
                            !0
                        }
                        return !1
                    }
                    return !1
                } catch (e) {
                    return e instanceof Error && window.UserLeap.reportError("getAndSetWebOptimizely", e),
                    !1
                }
            }
        }
        ;
        Object.freeze(Us);
        class Cs {
            constructor(e, t) {
                i(this, "paused"),
                i(this, "queue"),
                i(this, "ul"),
                this.ul = e,
                this.paused = !1,
                this.queue = [],
                this.flush(t)
            }
            flush(e) {
                const t = e.length;
                if (t)
                    for (let n = 0; n < t; n++)
                        this.push(e[n])
            }
            isPaused() {
                return this.paused
            }
            pause() {
                this.paused = !0
            }
            unpause() {
                this.paused = !1;
                const e = this.queue.slice();
                this.empty(),
                this.flush(e)
            }
            push(e) {
                if (this.paused)
                    this.queue.push(e);
                else if (e instanceof Function)
                    e();
                else {
                    const t = Array.prototype.slice.call(e, 1)
                      , n = e[0]
                      , r = this.ul[n];
                    r instanceof Function ? r.apply(this.ul, t) : n && console.warn("[Sprig] (ERR-100) No valid UserLeap action called", n)
                }
            }
            perform(e) {
                if (this.paused) {
                    let t = () => {}
                    ;
                    const n = new Promise((function(n) {
                        t = function() {
                            n(e())
                        }
                    }
                    ));
                    return this.queue.push(t),
                    n
                }
                return e()
            }
            empty() {
                this.queue.length = 0
            }
        }
        const As = e => e instanceof HTMLElement || e instanceof SVGElement
          , Ps = (e, t, n) => {
            const r = e.createElement("style");
            n && (r.nonce = n),
            r.textContent = t,
            r.id = _.CustomStyle,
            e.head.appendChild(r)
        }
          , Ds = e => {
            const t = e.querySelector(`.${_.CardContainer}`);
            let n = 600
              , r = 360;
            if (t) {
                n = t.scrollHeight;
                const e = getComputedStyle(t);
                n += parseFloat(e.marginTop) + parseFloat(e.marginBottom) + (parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth));
                const i = t.querySelector(".ul-card--matrix_grid");
                r = i ? i.scrollWidth : t.scrollWidth;
                const o = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
                r += parseFloat(e.marginLeft) + parseFloat(e.marginRight) + (parseFloat(e.borderLeftWidth) + parseFloat(e.borderRightWidth)) + o
            }
            return [n + 1, r]
        }
          , Os = e => {
            const t = e.querySelector(`.${_.CardContainer}`);
            t && (t.scrollTop = 0)
        }
          , Rs = (e, t) => {
            const n = performance.now();
            document.hidden ? setTimeout(( () => Rs(e, t)), e) : setTimeout(( () => {
                const r = performance.now() - n;
                t.report(r / 1e3),
                setTimeout(( () => Rs(e, t)), e)
            }
            ), 0)
        }
          , Ts = ({webMetricsEnabled: e, reportingIntervalSeconds: t, thresholds: n, postMetrics: r}) => {
            ( (e, t) => {
                Ni = {},
                Bi = !1,
                null == e || e.forEach((e => {
                    var t;
                    e.metric in Ni || (Ni[e.metric] = []),
                    null == (t = Ni[e.metric]) || t.push(e)
                }
                )),
                $i = t
            }
            )(n, ( (e, t) => {
                if (Mo()) {
                    const n = `Value: ${e} on ${t.metric} violated threshold of ${t.type} ${t.value}`;
                    Bo("Threshold violated", new Error(n), {
                        reportError: !1
                    }),
                    Bi = !0
                }
            }
            )),
            zi({
                reportingIntervalSeconds: t,
                postMetrics: r
            }),
            e && ( (e=1e3) => {
                const t = Vi(Mi.EventQueueLatency);
                Rs(e, t)
            }
            )()
        }
          , js = {
            capture: !0
        }
          , Bs = ["a", "button", "input", "option", "li", "link"]
          , Ms = ["Escape", "Enter", "Backspace", "F5", "Tab"]
          , Fs = ["label", "type", "role", "title", "placeholder", "errormessage", "valuetext", "href"]
          , $s = "aria-"
          , Ns = e => {
            var t;
            if ("html" === (null == (t = e.tagName) ? void 0 : t.toLowerCase()))
                return {
                    element: "html"
                };
            const n = e.textContent
              , r = n ? {
                text: n
            } : {};
            r.element = (e => {
                if (!e.tagName)
                    return "No tagName";
                const t = e.getAttribute("type");
                return t ? `${t} ${e.tagName.toLowerCase()}` : e.tagName.toLowerCase()
            }
            )(e);
            for (const t of e.attributes) {
                let e = t.name;
                const n = t.value;
                e.startsWith($s) && (e = e.substring(5)),
                Fs.includes(e) && (r[e] = n)
            }
            return r
        }
          , Ks = e => {
            var t;
            if (!e)
                return {};
            const n = {
                ...Ns(e)
            }
              , r = e.parentElement;
            if (r && Bs.includes(null == (t = r.tagName) ? void 0 : t.toLowerCase())) {
                const e = Ns(r);
                Object.assign(n, e)
            }
            return n
        }
          , qs = (e, t) => {
            (e => {
                var t;
                null != (t = null == e ? void 0 : e.elementAttributes) && t.text && (e.elementAttributes.text = Fo(e.elementAttributes.text)),
                Ro("Sprig_Click", e)
            }
            )({
                x: t.x,
                y: t.y,
                type: e,
                elementAttributes: Ks(t.target)
            })
        }
          , Vs = e => {
            Ms.includes(e.key) && (e => {
                Ro("Sprig_Keystroke", e)
            }
            )({
                key: e.key
            })
        }
          , Ws = () => {
            window.performance.getEntriesByType("navigation").map((e => e.type)).includes("reload") && (e => {
                Ro("Sprig_Refresh", e)
            }
            )({
                url: window.location.href,
                currentPageTitle: document.title
            })
        }
          , zs = () => {
            window.performance.getEntriesByType("navigation").map((e => e.type)).includes("back_forward") && (e => {
                e.currentPageTitle && (e.currentPageTitle = Fo(e.currentPageTitle)),
                Ro("Sprig_BackForward", e)
            }
            )({
                curUrl: window.location.href,
                fromUrl: document.referrer,
                currentPageTitle: document.title
            })
        }
          , Gs = () => {
            window.addEventListener("click", (e => t => qs(e, t))(yo.Left), js),
            window.addEventListener("mousedown", (e => {
                2 === e.button && qs(yo.Right, e)
            }
            ), js),
            window.addEventListener("keydown", Vs, js),
            Ws(),
            zs()
        }
          , Hs = "test"
          , Ys = ["popState", "pushState", "replaceState"]
          , Js = "!email"
          , Qs = "pageUrl";
        function Xs(e) {
            const {pageUrlEvents: t, interactiveEvents: n, dismissOnPageChange: r, platform: i} = window.UserLeap._config;
            if (i && i !== $.Web)
                return;
            const s = na("trackStartUrl")
              , a = s ? String(s) : null;
            t && ia(window.location.href),
            n && (ta(),
            ea()),
            cs() && (e => {
                if (vs())
                    return;
                const t = ds();
                if (!t)
                    return;
                const {pageUrlEvents: n} = window.UserLeap._config
                  , r = null == n ? void 0 : n.find((e => e.id === ws));
                r && (Wo(r, e) || (t.remove(),
                ws = null,
                ys = null))
            }
            )(window.location.href),
            !vs() && r && a && a !== window.location.href && e && Ys.includes(e.type) && window.UserLeap("dismissActiveSurvey", o.PageChange)
        }
        const Zs = {
            capture: !0
        }
          , ea = () => {
            const e = window.UserLeap._config.interactiveEvents.filter((e => Wo(e, window.location.href))).map((e => {
                const {name: t, properties: n} = e
                  , {selector: r, innerText: i} = n;
                return r ? e => {
                    if (As(e.target))
                        try {
                            e.target.closest(r) && window.UserLeap("track", t)
                        } catch {}
                    return !1
                }
                : e => (As(e.target) && e.target.innerText === i && window.UserLeap("track", t),
                !1)
            }
            ))
              , t = t => e.forEach((e => e(t)));
            window.UserLeap._config.interactiveEventsHandler = t,
            window.addEventListener("click", t, Zs)
        }
          , ta = () => {
            window.UserLeap._config.interactiveEventsHandler && window.removeEventListener("click", window.UserLeap._config.interactiveEventsHandler, Zs),
            delete window.UserLeap._config.interactiveEventsHandler
        }
        ;
        function na(e) {
            const t = J.getItem(C.Credentials);
            if (t)
                try {
                    const n = JSON.parse(t)[window.UserLeap.envId];
                    return n && n[e] || null
                } catch (e) {
                    e instanceof Error && (e.stack = t,
                    window.UserLeap.reportError("Failed to parse local storage credentials", e)),
                    console.warn("[Sprig] (ERR-427) Failed to lookup saved ids", e)
                }
            return null
        }
        function ra() {
            window.previewMode || (window.UserLeap.visitorId = g(),
            ue(`Generating new vid: ${window.UserLeap.visitorId}`),
            Go("vid", window.UserLeap.visitorId),
            B.emit(a.VisitorIDUpdated, {
                visitorId: window.UserLeap.visitorId
            }))
        }
        function ia(e, t, n) {
            var r;
            if (e.endsWith("mock_snippet.html"))
                return;
            ue(`Tracking page view: ${e}`);
            const i = window.UserLeap._config.pageUrlEvents;
            let o = !1;
            if (i && i.length)
                for (let t = 0; t < i.length && (o = Wo(i[t], e),
                !o); t++)
                    ;
            if (!o)
                return;
            window.UserLeap.debugMode && console.info("[DEBUG] Sprig trackPageView", e);
            let s = [];
            const a = {
                viewedAt: Date.now(),
                location: e
            }
              , l = J.getItem(C.PageViews);
            try {
                if (s = l ? JSON.parse(l) : [],
                Array.isArray(s) || (s = []),
                s.length > 0) {
                    const i = s[s.length - 1]
                      , o = (Date.now() - i.viewedAt) / 1e3;
                    if (i.location != e && o > 1) {
                        const t = null == (r = null == document ? void 0 : document.querySelector('meta[name="description"]')) ? void 0 : r.getAttribute("content");
                        To({
                            ...t && {
                                description: t
                            },
                            url: e,
                            referrer: document.referrer,
                            pageTitle: document.title
                        })
                    }
                    (i.location != e && o > 1 || o > 10) && (window.UserLeap._queue.push(["track", Qs, t, {
                        url: e
                    }, n]),
                    s.push(a))
                } else
                    window.UserLeap._queue.push(["track", Qs, t, {
                        url: e
                    }, n]),
                    s.push(a),
                    To({
                        url: e
                    });
                s.length > 5 && s.splice(0, s.length - 5),
                J.setItem(C.PageViews, JSON.stringify(s))
            } catch (e) {
                e instanceof Error && window.UserLeap.reportError("trackPageView", e, {
                    pageViewsStorage: l
                }),
                console.warn("[Sprig] (ERR-425) Failed to update page views in local storage")
            }
        }
        function oa() {
            const e = "Backbone"in window && window.Backbone && window.Backbone.history ? window.Backbone.history : window.history;
            "pushState"in e && (e.pushState = (e => function(...t) {
                const n = e.apply(this, t)
                  , r = new Event("pushState");
                return window.dispatchEvent(r),
                Xs(r),
                n
            }
            )(e.pushState)),
            "replaceState"in e && (e.replaceState = (e => function(...t) {
                const n = e.apply(this, t)
                  , r = new Event("replaceState");
                return window.dispatchEvent(r),
                Xs(r),
                n
            }
            )(e.replaceState)),
            ["hashchange", "popstate"].forEach((e => window.addEventListener(e, Xs, !0)))
        }
        async function sa(e, t) {
            const n = Ho();
            e && !t && (window.UserLeap._config.mode = Hs);
            const r = Qo(Ie(window.UserLeap))
              , i = await zo(function(e, t) {
                let n = Yo("1", [qo], "questions?");
                return null != e && (n += `&vid=${e}`),
                t && (t.surveyId && (n += `&surveyid=${t.surveyId}`),
                t.surveyTemplateId && (n += `&surveytemplateid=${t.surveyTemplateId}`),
                t.previewLanguage && (n += `&previewLanguage=${encodeURIComponent(t.previewLanguage)}`),
                t.useMobileStyling && (n += `&isMobile=${t.useMobileStyling}`)),
                n
            }(n, {
                ...e,
                previewLanguage: window.UserLeap._config.previewLanguage,
                useMobileStyling: r
            }), {}, 0, !0);
            if (!i.ok)
                return i.reportError && i.error && (console.warn("[Sprig] (ERR-414) Failed to request questions from the server", i.error),
                window.UserLeap.reportError("getQuestions", i.error)),
                {
                    success: !1,
                    surveyState: w.NoSurvey
                };
            if (i.json.delay && await V(i.json.delay),
            !i.json.isFeedback)
                return Jo(i.json);
            {
                const {feedbackLabel: e, productConfig: t, surveyUuid: n} = i.json
                  , {buttonTheme: r, placement: o, desktopDisplay: s} = t;
                ks({
                    buttonTheme: r,
                    desktopDisplay: s,
                    eventId: 0,
                    feedbackLabel: e,
                    placement: o,
                    surveyUuid: n
                }, i.json)
            }
        }
        function aa(e) {
            if (!e)
                return;
            window.UserLeap._config = e,
            e.mute && window.UserLeap._queue.pause();
            const {interactiveEvents: t, pageUrlEvents: n, dismissOnPageChange: r} = e;
            t && function(e) {
                let t = e.length;
                for (; t; ) {
                    const n = Math.floor(Math.random() * t);
                    t -= 1;
                    const r = e[t];
                    e[t] = e[n],
                    e[n] = r
                }
            }(t),
            (t || n || r) && (oa(),
            Xs())
        }
        const la = function(e) {
            if (!window.UserLeap)
                return;
            const t = async (t={}) => {
                var n, r, i, o;
                const {userId: s, anonymousId: a, metadata: l={}, properties: u, showSurveyCallback: c} = t;
                let {eventName: d} = t;
                if (window.UserLeap.debugMode && d !== Qs && console.info("[DEBUG] Sprig track", t),
                "test" === e.mode)
                    return;
                const p = J.getItem(C.Preview) ?? void 0;
                if (e.requireUserIdForTracking && !window.UserLeap.userId && !s) {
                    const e = "[Sprig] - Skipping tracking without userId";
                    return console.warn(e),
                    {
                        success: !1,
                        message: e,
                        surveyState: w.NoSurvey
                    }
                }
                if (!d || 0 === d.trim().length) {
                    d = d ? String(d) : "";
                    const e = "[Sprig] - Invalid event name " + d;
                    return console.warn(e),
                    {
                        success: !1,
                        message: e,
                        surveyState: w.NoSurvey
                    }
                }
                const h = window.location.href;
                if (l.url || (l.url = h),
                Go("trackStartUrl", h),
                null != (r = null == (n = window.UserLeap) ? void 0 : n._config) && r.optimizelyEnabled) {
                    Xo(Ie(window.UserLeap)) || Us.getAndSetWebOptimizelyExperiments(),
                    l.optimizelyExperiments = Object.assign({}, Us.getAllOptimizelyExperiments())
                }
                null != (o = null == (i = window.UserLeap) ? void 0 : i._config) && o.launchDarklyEnabled && (l.launchDarklyFlags = Is.getAllLaunchDarklyVariations()),
                s && (window.UserLeap.userId = s),
                a && (window.UserLeap.partnerAnonymousId = a),
                u && (l.eventProperties = u),
                (e => {
                    Ro("Sprig_TrackEvent", e)
                }
                )({
                    name: d,
                    url: l.url
                }),
                ue(`Tracking event: ${d}`);
                const f = window.UserLeap.delayingSurvey || hs() ? await zo(Yo("1", [Ko], "events/batch"), {
                    body: JSON.stringify({
                        events: [{
                            event: d,
                            metadata: l
                        }],
                        previewKey: p
                    }),
                    method: "POST"
                }, 0, !0) : await zo(Yo("1", [Ko], "events"), {
                    body: JSON.stringify({
                        event: d,
                        metadata: l,
                        previewKey: p
                    }),
                    method: "POST"
                }, 0, !0);
                if (!f.ok) {
                    const e = "[Sprig] (ERR-421) Failed to track event";
                    return f.reportError && (console.warn(e, f.error),
                    f.error && window.UserLeap.reportError("track", f.error)),
                    {
                        success: !1,
                        message: e,
                        error: f.error,
                        surveyState: w.NoSurvey
                    }
                }
                s && Go("uid", s),
                a && Go("aid", a);
                const y = f.json;
                return y.invalidPreviewKey && J.removeItem(C.Preview),
                !(null == y || !y.feedbackButton) && ks(y.feedbackButton),
                await async function(e, t) {
                    var n, r;
                    let i = !0;
                    return !(t && null != (n = null == e ? void 0 : e.json) && n.surveyId && (window.UserLeap.delayingSurvey = !0,
                    i = await t(e.json.surveyId),
                    window.UserLeap.delayingSurvey = !1,
                    !i)) && (null != (r = null == e ? void 0 : e.json) && r.delay && (window.UserLeap.delayingSurvey = !0,
                    await V(e.json.delay),
                    window.UserLeap.delayingSurvey = !1),
                    i)
                }(f, c) ? function(e, t) {
                    const {pageUrlEvents: n, interactiveEvents: r, dismissOnPageChange: i} = window.UserLeap._config;
                    if (!i)
                        return !0;
                    const o = [];
                    n && n.length && o.push(...n),
                    r && r.length && o.push(...r);
                    const s = e && o.find((t => t.id === e));
                    return s ? Wo(s, window.location.href) : t === window.location.href
                }(y.eventId, h) ? Jo(y) : {
                    success: !1,
                    message: "Study should not be displayed after page navigation",
                    surveyState: w.NoSurvey
                } : {
                    success: !1,
                    message: "[Sprig] Callback returned false, aborting rendering of survey",
                    surveyState: w.NoSurvey
                }
            }
              , n = {
                displaySurvey: async e => (console.warn("[Sprig] displaySurvey should only be used to debug your studies; not intended for production usage."),
                window.UserLeap("dismissActiveSurvey", o.Override),
                sa({
                    surveyId: e
                }, !0)),
                _previewSurvey(e) {
                    window.UserLeap("dismissActiveSurvey", o.Override),
                    sa({
                        surveyTemplateId: e
                    }, !1)
                },
                _reviewSurvey(e) {
                    window.UserLeap("dismissActiveSurvey", o.Override),
                    sa({
                        surveyId: e
                    }, !1)
                },
                previewSurvey(e) {
                    n._previewSurvey(e)
                },
                reviewSurvey(e) {
                    n._reviewSurvey(e)
                },
                mute() {
                    window.UserLeap._queue.pause()
                },
                unmute() {
                    window.UserLeap._queue.unpause()
                },
                setVisitorToken() {
                    console.warn("[Sprig] setVisitorToken is deprecated.")
                },
                dismissActiveSurvey(e=o.API) {
                    B.emit(a.SurveyWillClose, {
                        name: a.SurveyWillClose,
                        initiator: e
                    })
                },
                async setAttribute(e, t) {
                    if (!e || !t && 0 !== t && !1 !== t) {
                        const e = "[Sprig] - Disregarding empty attribute / value provided";
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    return this.setAttributes({
                        [e]: t
                    })
                },
                async setAttributes(e) {
                    if (null == e || 0 === Object.keys(e).length) {
                        const e = "[Sprig] - Disregarding empty attributes provided";
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    return this.identifyAndSetAttributes({
                        attributes: e
                    })
                },
                async identifyAndSetAttributes(t) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig identifyAndSetAttributes", t),
                    "test" === e.mode)
                        return;
                    if (null === t || "object" != typeof t || !(t.userId || t.anonymousId || t.attributes)) {
                        const e = "[Sprig] - Disregarding empty payload provided";
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    const {userId: n, anonymousId: r, attributes: i} = t;
                    if (e.requireUserIdForTracking && !window.UserLeap.userId && !n) {
                        const e = "[Sprig] - Skipping tracking without userId";
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    if (!(i || n && window.UserLeap.userId !== n || r && window.UserLeap.partnerAnonymousId !== r))
                        return {
                            success: !0
                        };
                    const o = {};
                    let s;
                    return n && (o.userId = window.UserLeap.userId = n),
                    r && (o.partnerAnonymousId = window.UserLeap.partnerAnonymousId = r),
                    i ? (i.email && !Object.prototype.hasOwnProperty.call(i, Js) && (i[Js] = i.email,
                    delete i.email),
                    ue(`Setting attributes: ${JSON.stringify(i)}`),
                    s = await zo(Yo("1", [qo, Ko], "attributes"), {
                        body: JSON.stringify(i),
                        method: "PUT"
                    }),
                    !s.ok && s.reportError && (console.warn("[Sprig] (ERR-432) identifyAndSetAttributes failed", s.error),
                    s.error && window.UserLeap.reportError("identifyAndSetAttributes", s.error))) : s = await zo(Yo("1", [qo, Ko]), {
                        body: JSON.stringify(o),
                        method: "PUT"
                    }),
                    i && i[Js] && (window.UserLeap.email = i[Js]),
                    s.ok && (n && Go("uid", n),
                    r && Go("aid", r)),
                    {
                        success: !!s.ok
                    }
                },
                async removeAttributes(t) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig removeAttributes", t),
                    "test" === e.mode)
                        return;
                    if (null == t || 0 === t.length) {
                        const e = "[Sprig] - Disregarding empty attributes provided";
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    if (e.requireUserIdForTracking && !window.UserLeap.userId) {
                        const e = "[Sprig] - Skipping tracking without userId";
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    const n = await zo(Yo("1", [qo, Ko], "attributes"), {
                        body: JSON.stringify({
                            delete: t
                        }),
                        method: "DELETE"
                    });
                    return !n.ok && n.reportError && (console.warn("[Sprig] (ERR-433) Remove attributes failed", n.error),
                    n.error && window.UserLeap.reportError("removeAttributes", n.error)),
                    {
                        success: !!n.ok
                    }
                },
                async addSurveyListener(e) {
                    B.on(a.SurveyLifeCycle, e)
                },
                async removeSurveyListener(e) {
                    B.removeListener(a.SurveyLifeCycle, e)
                },
                async addListener(e, t) {
                    B.on(e, t)
                },
                async removeListener(e, t) {
                    B.removeListener(e, t)
                },
                async removeAllListeners() {
                    B.removeAllListeners()
                },
                setPreviewKey(e) {
                    !e || "string" != typeof e || J.isStorageAvailable && e && J.setItem(C.Preview, e)
                },
                async setUserId(t) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setUserId", t),
                    null == t) {
                        const e = `[Sprig] - Invalid userId ${t}`;
                        return console.warn(e),
                        {
                            success: !1,
                            message: e
                        }
                    }
                    if ("test" === e.mode || t === window.UserLeap.userId)
                        return;
                    window.UserLeap.userId = t;
                    const n = window.UserLeap.visitorId
                      , r = await zo(Yo("1", [qo, Ko]), {
                        body: JSON.stringify({
                            userId: t
                        }),
                        method: "PUT"
                    });
                    r.ok ? (n !== window.UserLeap.visitorId && Ao(),
                    Go("uid", t)) : r.reportError && (console.warn("[Sprig] (ERR-420) Failed to set user id", r.error),
                    r.error && window.UserLeap.reportError("setUserId", r.error))
                },
                async setPartnerAnonymousId(e) {
                    if (window.UserLeap.debugMode && console.info("[DEBUG] Sprig setPartnerAnonymousId", e),
                    null == e) {
                        const t = `[Sprig] - Invalid partnerAnonymousId ${e}`;
                        return console.warn(t),
                        {
                            success: !1,
                            message: t
                        }
                    }
                    return window.UserLeap.partnerAnonymousId = e,
                    Go("aid", e),
                    {
                        success: !0
                    }
                },
                track: async (e, n, r={}, i=void 0) => t({
                    eventName: e,
                    properties: n,
                    metadata: r,
                    showSurveyCallback: i
                }),
                identifyAndTrack: async e => await t(e),
                trackPageView(e, t=void 0, n=void 0) {
                    ia(e, t, n)
                },
                applyStyles(e) {
                    if (window.UserLeap.customStyles = e,
                    window.UserLeap.container) {
                        const t = window.UserLeap.container.children[0].contentDocument;
                        if (t) {
                            const n = t.getElementById(_.CustomStyle);
                            n ? n.textContent = e : Ps(t, e, window.UserLeap.styleNonce)
                        }
                    }
                },
                setWindowDimensions(e, t) {
                    var n, r;
                    const i = "string" == typeof e ? parseInt(e, 10) : e
                      , o = "string" == typeof t ? parseInt(t, 10) : t;
                    if (!isNaN(i) && !isNaN(o) && (window.UserLeap.windowDimensions = {
                        width: i,
                        height: o
                    }),
                    !window.UserLeap.frameId)
                        return;
                    const s = document.getElementById(window.UserLeap.frameId);
                    s && (window.UserLeap.useMobileStyling && (null != (n = window.UserLeap.windowDimensions) && n.width && (s.style.width = `${window.UserLeap.windowDimensions.width}px`),
                    null != (r = window.UserLeap.windowDimensions) && r.height && (s.style.maxHeight = window.UserLeap.windowDimensions.height - 20 + "px"),
                    s.contentDocument && (s.style.height = String(Ds(s.contentDocument)[0]) + "px")),
                    B.emit(a.SurveyDimensions, {
                        name: a.SurveyDimensions,
                        contentFrameWidth: s.clientWidth,
                        contentFrameHeight: s.clientHeight
                    }))
                },
                logoutUser() {
                    window.UserLeap.debugMode && console.info("[DEBUG] Sprig logout"),
                    ue(`Logging out user: ${window.UserLeap.userId} / vid: ${window.UserLeap.visitorId}`),
                    window.UserLeap.visitorId = null,
                    window.UserLeap.userId = null,
                    window.UserLeap.partnerAnonymousId = null,
                    window.UserLeap.token = null,
                    window.UserLeap.email = null,
                    J.removeItem(C.Credentials),
                    J.removeItem(C.PageViews),
                    window.UserLeap._queue.isPaused() && window.UserLeap._queue.empty(),
                    ra(),
                    Ao(),
                    window.UserLeap._queue.unpause()
                },
                teardown() {
                    ["hashchange", "popstate"].forEach((e => window.removeEventListener(e, Xs, !0))),
                    window.UserLeap._config.interactiveEvents && ta(),
                    window.UserLeap("dismissActiveSurvey", o.API),
                    delete window.UserLeap,
                    delete window.Sprig,
                    delete window._Sprig
                },
                integrateOptimizely(e, t=!0) {
                    var n, r;
                    if (null != (r = null == (n = window.UserLeap) ? void 0 : n._config) && r.optimizelyEnabled)
                        try {
                            const n = "string" == typeof e ? JSON.parse(e) : e;
                            Us.setOptimizelyExperiment(n, t)
                        } catch (e) {
                            console.warn("[Sprig] Error with integrating Optimizely data"),
                            e instanceof Error && window.UserLeap.reportError("integrateOptimizely", e)
                        }
                    else
                        console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.")
                },
                integrateOptimizelyClient(e) {
                    var t, n;
                    if (null == (n = null == (t = window.UserLeap) ? void 0 : t._config) || !n.optimizelyEnabled)
                        return void console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
                    e.notificationCenter.addNotificationListener("ACTIVATE:experiment, user_id,attributes, variation, event", ( ({experiment: e, variation: t}) => {
                        const n = {
                            experiments: [{
                                id: e.id,
                                variation: t.key
                            }]
                        };
                        window.UserLeap("integrateOptimizely", n, !1)
                    }
                    ))
                },
                importLaunchDarklyData(e) {
                    var t, n;
                    null != (n = null == (t = window.UserLeap) ? void 0 : t._config) && n.launchDarklyEnabled ? Is.setLDFlagsVariations(e) : console.warn("[SPRIG] LaunchDarkly integration is currently not enabled for your product.")
                },
                setVisitorAttribute: (e, t) => (console.warn("[Sprig] setVisitorAttribute is deprecated. Please use setAttribute"),
                n.setAttribute(e, t)),
                setEmail: async e => n.setAttribute(Js, e),
                setVisitorEmail: async e => (console.warn("[Sprig] setVisitorEmail is deprecated. Please use setEmail"),
                n.setEmail(e)),
                _generateVideoUploadUrl: async e => async function(e) {
                    var t;
                    if (!e)
                        return;
                    const n = `${window.UserLeap._API_URL}/2/environments/integrations/upload`;
                    try {
                        const r = await fetch(n, {
                            method: "POST",
                            cache: "no-cache",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(e)
                        });
                        if (r.ok) {
                            const e = await r.json();
                            return null == (t = null == e ? void 0 : e.upload) ? void 0 : t.url
                        }
                        return null
                    } catch (e) {
                        console.warn("[Sprig] Error with generating video upload url"),
                        e instanceof Error && window.UserLeap.reportError("generateVideoUploadUrl", e)
                    }
                }(e),
                _reportMetric(e, t) {
                    Wi(e, t)
                },
                async _completeSessionReplay({surveyId: e, responseGroupUuid: t, eventDigest: n}) {
                    if (!e || !t)
                        return !1;
                    const r = window.UserLeap._API_URL;
                    try {
                        const i = await Pe({
                            surveyId: e,
                            responseGroupUuid: t,
                            eventDigest: n,
                            apiUrl: r,
                            headers: Ie(window.UserLeap)
                        }, !0);
                        return !(null != i && i.error)
                    } catch (e) {
                        return console.warn("[Sprig] Error with completing session replay"),
                        e instanceof Error && window.UserLeap.reportError("completeSessionReplay", e),
                        !1
                    }
                }
            };
            Object.assign(window.UserLeap, n)
        };
        async function ua(e, t, n={}) {
            var r, i;
            const o = window.__cfg && window.__cfg.mode
              , s = Ho()
              , a = window.UserLeap.envId
              , l = window.document.documentElement
              , u = (e => "object" == typeof e && e && "inner"in e && !!e.inner && "object" == typeof e.inner)(t) ? {
                inner: {
                    message: null == (r = t.inner) ? void 0 : r.message,
                    stack: null == (i = t.inner) ? void 0 : i.stack
                }
            } : {}
              , c = {
                mode: o,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
                clientWidth: l.clientWidth,
                clientHeight: l.clientHeight,
                location: window.location.href,
                language: window.navigator.language,
                ...n,
                ...u
            }
              , d = {
                action: e,
                err: {
                    message: t.message,
                    stack: t.stack
                },
                meta: c,
                vid: s,
                envId: a
            }
              , p = await zo(Yo("1", null, "errors"), {
                method: "POST",
                headers: {
                    [F.Error]: window.btoa(`userleap-${Date.now()}-error`)
                },
                body: JSON.stringify(d)
            }, 0, !0);
            if (p.ok) {
                const {presignedUrl: e} = p.json;
                he(e)
            } else
                console.warn("[Sprig] (ERR-444) Failed to report error to API", t)
        }
        function ca(e={}) {
            const t = new URLSearchParams(window.location.search).get(v.Preview) ?? "";
            async function n() {
                if (window.UserLeap.loaded)
                    return;
                if (ue("Loading sprig on page load"),
                window.UserLeap.reportError = ua,
                window.UserLeap.loaded = !0,
                window.UserLeap._config = Object.assign({}, e, window.UserLeap.config),
                window.UserLeap.delayingSurvey = !1,
                window.UserLeap._config && "object" == typeof window.UserLeap._config)
                    for (const e in window.UserLeap._config)
                        window.UserLeap[e] = window.UserLeap._config[e];
                if (!window.UserLeap.envId) {
                    if (!window.UserLeap.appId)
                        throw new Error("Missing Environment id");
                    window.UserLeap.envId = window.UserLeap.appId
                }
                window.UserLeap.debugMode && console.info("[DEBUG] Sprig debug mode enabled");
                const t = window.UserLeap.sampleRate;
                if (t) {
                    let e = na("sampled");
                    if (null === e && (e = Math.random() < t,
                    Go("sampled", e)),
                    !e)
                        return
                } else
                    null !== na("sampled") && Go("sampled", null);
                window.UserLeap._API_URL || (window.UserLeap._API_URL = "https://api.sprig.com");
                const n = [...window.UserLeap._queue];
                window.UserLeap._queue = new Cs(window.UserLeap,[]),
                window.UserLeap._queue.pause();
                for (let e = 0; e < n.length; e++)
                    window.UserLeap._queue.push(n[e]);
                const r = na("token");
                r ? (window.UserLeap.token = r,
                window.UserLeap.visitorId = na("vid"),
                window.UserLeap.userId = na("uid"),
                window.UserLeap.partnerAnonymousId = na("aid")) : (J.removeItem(C.Credentials),
                ra());
                const i = await async function(e) {
                    const t = Ie(window.UserLeap);
                    document.addEventListener("securitypolicyviolation", ke);
                    const n = await Ue(Yo("1", [qo], "config"), {
                        headers: t
                    });
                    if (window.UserLeap.error = n.error,
                    !n.ok && n.error && "TypeError" === n.error.name ? (window.UserLeap._API_URL = "https://api.sprig.com",
                    window.UserLeap.reportError("sprigDomainRequest", n.error)) : document.removeEventListener("securitypolicyviolation", ke),
                    !n.ok)
                        return n.reportError && (console.warn("[Sprig] (ERR-422) Failed to load configuration", n.error),
                        n.error && window.UserLeap.reportError("applyRemoteConfig", n.error)),
                        Ee("Disabled: failed to fetch configuration"),
                        e;
                    const r = n.json;
                    return null != r && r.disabled ? (Ee(`Disabled: ${r.disabled}`),
                    {
                        disabled: r.disabled
                    }) : Object.assign({}, r, e)
                }(e);
                Ts({
                    webMetricsEnabled: i.metricsReportingEnabled,
                    reportingIntervalSeconds: i.metricsReportingEnabled || i.mobileMetricsReportingEnabled ? i.metricsReportingIntervalSeconds : 0,
                    thresholds: i.metricThresholds,
                    postMetrics: async e => {
                        await zo(Yo("1", [qo], "metrics"), {
                            body: e,
                            method: "POST",
                            headers: {
                                "x-ul-replay-enabled": `${Mo()}`
                            }
                        }, 0, !0)
                    }
                }),
                mo(window.document, i.maxReplayDurationSeconds, window.UserLeap.replayNonce, window.UserLeap.maxInflightReplayRequests, i.replaySettings).then(( () => {
                    Gs()
                }
                )),
                fe(i.logBufferLimit, i.logLevel),
                la(i),
                await aa(i),
                window.UserLeap._queue.unpause(),
                B.emit(a.SDKReady, {
                    mobileMetricsReportingEnabled: !!i.mobileMetricsReportingEnabled,
                    metricsReportingInterval: i.metricsReportingIntervalSeconds || 0,
                    metricsThresholds: i.metricThresholds || [],
                    maxMobileReplayDurationSeconds: i.maxMobileReplayDurationSeconds,
                    mobileReplaySettings: i.mobileReplaySettings
                }),
                B.emit(a.VisitorIDUpdated, {
                    visitorId: window.UserLeap.visitorId
                })
            }
            window.UserLeap.UPDATES = u,
            window.UserLeap("setPreviewKey", t),
            "complete" === document.readyState ? n() : window.attachEvent ? window.attachEvent("onload", n) : window.addEventListener("load", ( () => {
                n()
            }
            ), !1)
        }
        class da {
            constructor() {
                i(this, "UPDATES", u)
            }
            displaySurvey(e) {
                window.Sprig("displaySurvey", e)
            }
            mute() {
                window.Sprig("mute")
            }
            unmute() {
                window.Sprig("unmute")
            }
            dismissActiveSurvey() {
                window.Sprig("dismissActiveSurvey")
            }
            setAttribute(e, t) {
                window.Sprig("setAttribute", e, t)
            }
            setAttributes(e) {
                window.Sprig("setAttributes", e)
            }
            identifyAndSetAttributes(e) {
                window.Sprig("identifyAndSetAttributes", e)
            }
            removeAttributes(e) {
                window.Sprig("removeAttributes", e)
            }
            addListener(e, t) {
                window.Sprig("addListener", e, t)
            }
            removeListener(e, t) {
                window.Sprig("removeListener", e, t)
            }
            removeAllListeners() {
                window.Sprig("removeAllListeners")
            }
            setEmail(e) {
                window.Sprig("setAttribute", "!email", e)
            }
            setUserId(e) {
                window.Sprig("setUserId", e)
            }
            setPartnerAnonymousId(e) {
                window.Sprig("setPartnerAnonymousId", e)
            }
            track(e, t={}, n={}) {
                window.Sprig("track", e, t, n)
            }
            identifyAndTrack(e) {
                window.Sprig("identifyAndTrack", e)
            }
            trackPageView(e, t, n) {
                window.Sprig("trackPageView", e, t, n)
            }
            applyStyles(e) {
                window.Sprig("applyStyles", e)
            }
            setWindowDimensions(e, t) {
                window.Sprig("setWindowDimensions", e, t)
            }
            logoutUser() {
                window.Sprig("logoutUser")
            }
            teardown() {
                window.Sprig("teardown")
            }
        }
        const pa = {
            configure: e => {
                if (!e.envId && !e.environmentId)
                    throw new Error("Initialization Error: Sprig configure requires an environmentId");
                if (e.envId || (e.envId = e.environmentId || ""),
                e.installationMethod = "web-npm",
                window.Sprig)
                    return window.Sprig;
                window.Sprig = function() {
                    window.Sprig._queue.push(arguments)
                }
                ,
                Object.getOwnPropertyNames(da.prototype).map((e => {
                    "constructor" !== e && (window.Sprig[e] = da.prototype[e])
                }
                ));
                const t = window.Sprig;
                return t.appId = e.envId,
                t._queue = [],
                window.UserLeap = t,
                ca(e),
                window.Sprig
            }
        }
          , ha = {
            sprig: pa,
            SprigAPI: da,
            configure: pa.configure
        }
    },
    853371: function(e, t, n) {
        n.r(t),
        n.d(t, {
            DismissReason: function() {
                return r.D
            },
            SprigAPI: function() {
                return r.x
            },
            SprigEvent: function() {
                return r.S
            },
            default: function() {
                return r.z
            },
            sprig: function() {
                return r.y
            }
        });
        var r = n(866230)
    }
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/3371.2b85063554064155f31a.chunk.js.map
