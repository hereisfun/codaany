(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[5288], {
	675288: function(e) {
			window,
			e.exports = function(e) {
					var n = {};
					function t(r) {
							if (n[r])
									return n[r].exports;
							var o = n[r] = {
									i: r,
									l: !1,
									exports: {}
							};
							return e[r].call(o.exports, o, o.exports, t),
							o.l = !0,
							o.exports
					}
					return t.m = e,
					t.c = n,
					t.d = function(e, n, r) {
							t.o(e, n) || Object.defineProperty(e, n, {
									enumerable: !0,
									get: r
							})
					}
					,
					t.r = function(e) {
							"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
									value: "Module"
							}),
							Object.defineProperty(e, "__esModule", {
									value: !0
							})
					}
					,
					t.t = function(e, n) {
							if (1 & n && (e = t(e)),
							8 & n)
									return e;
							if (4 & n && "object" == typeof e && e && e.__esModule)
									return e;
							var r = Object.create(null);
							if (t.r(r),
							Object.defineProperty(r, "default", {
									enumerable: !0,
									value: e
							}),
							2 & n && "string" != typeof e)
									for (var o in e)
											t.d(r, o, function(n) {
													return e[n]
											}
											.bind(null, o));
							return r
					}
					,
					t.n = function(e) {
							var n = e && e.__esModule ? function() {
									return e.default
							}
							: function() {
									return e
							}
							;
							return t.d(n, "a", n),
							n
					}
					,
					t.o = function(e, n) {
							return Object.prototype.hasOwnProperty.call(e, n)
					}
					,
					t.p = "",
					t(t.s = 19)
			}([function(e, n, t) {
					"use strict";
					var r = this && this.__spreadArray || function(e, n, t) {
							if (t || 2 === arguments.length)
									for (var r, o = 0, i = n.length; o < i; o++)
											!r && o in n || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
							return e.concat(r || Array.prototype.slice.call(n))
					}
					;
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.sendMessageEventToChild = n.waitForMessageQueue = n.sendMessageToParent = n.uninitializeCommunication = n.initializeCommunication = n.Communication = void 0;
					var o = t(4)
						, i = t(7)
						, a = t(3)
						, s = function() {};
					n.Communication = s;
					var l = function() {
							function e() {}
							return e.parentMessageQueue = [],
							e.childMessageQueue = [],
							e.nextMessageId = 0,
							e.callbacks = {},
							e
					}();
					function u(e, n, t) {
							var r;
							n instanceof Function ? t = n : n instanceof Array && (r = n),
							n = s.parentWindow,
							e = y(e, r),
							i.GlobalVars.isFramelessWindow ? s.currentWindow && s.currentWindow.nativeInterface && s.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(e)) : (r = h(n),
							n && r ? n.postMessage(e, r) : C(n).push(e)),
							t && (l.callbacks[e.id] = t)
					}
					function d(e) {
							var n, t;
							e && e.data && "object" == typeof e.data && c(n = e.source || e.originalEvent && e.originalEvent.source, t = e.origin || e.originalEvent && e.originalEvent.origin) && (g(n, t),
							n === s.parentWindow ? m(e) : n === s.childWindow && f(e))
					}
					function c(e, n) {
							return (!s.currentWindow || e !== s.currentWindow) && (s.currentWindow && s.currentWindow.location && n && n === s.currentWindow.location.origin || !!(o.validOriginRegExp.test(n.toLowerCase()) || i.GlobalVars.additionalValidOriginsRegexp && i.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))
					}
					function g(e, n) {
							i.GlobalVars.isFramelessWindow || s.parentWindow && !s.parentWindow.closed && e !== s.parentWindow ? s.childWindow && !s.childWindow.closed && e !== s.childWindow || (s.childWindow = e,
							s.childOrigin = n) : (s.parentWindow = e,
							s.parentOrigin = n),
							s.parentWindow && s.parentWindow.closed && (s.parentWindow = null,
							s.parentOrigin = null),
							s.childWindow && s.childWindow.closed && (s.childWindow = null,
							s.childOrigin = null),
							b(s.parentWindow),
							b(s.childWindow)
					}
					function m(e) {
							var n, t;
							"id"in e.data && "number" == typeof e.data.id ? (t = e.data,
							(n = l.callbacks[t.id]) && (n.apply(null, r(r([], t.args, !0), [t.isPartialResponse], !1)),
							p(e) || delete l.callbacks[t.id])) : "func"in e.data && "string" == typeof e.data.func && (t = e.data,
							(0,
							a.callHandler)(t.func, t.args))
					}
					function p(e) {
							return !0 === e.data.isPartialResponse
					}
					function f(e) {
							var n, t;
							"id"in e.data && "func"in e.data && (n = e.data,
							e = (t = (0,
							a.callHandler)(n.func, n.args))[0],
							t = t[1],
							e && void 0 !== t ? v(n.id, Array.isArray(t) ? t : [t]) : u(n.func, n.args, (function() {
									for (var e, t = [], r = 0; r < arguments.length; r++)
											t[r] = arguments[r];
									s.childWindow && (e = t.pop(),
									v(n.id, t, e))
							}
							)))
					}
					function C(e) {
							return e === s.parentWindow ? l.parentMessageQueue : e === s.childWindow ? l.childMessageQueue : []
					}
					function h(e) {
							return e === s.parentWindow ? s.parentOrigin : e === s.childWindow ? s.childOrigin : null
					}
					function b(e) {
							for (var n = h(e), t = C(e); e && n && 0 < t.length; )
									e.postMessage(t.shift(), n)
					}
					function v(e, n, t) {
							var r = s.childWindow;
							n = P(e, n, t),
							t = h(r),
							r && t && r.postMessage(n, t)
					}
					function y(e, n) {
							return {
									id: l.nextMessageId++,
									func: e,
									timestamp: Date.now(),
									args: n || []
							}
					}
					function P(e, n, t) {
							return {
									id: e,
									args: n || [],
									isPartialResponse: t
							}
					}
					function T(e, n) {
							return {
									func: e,
									args: n || []
							}
					}
					n.initializeCommunication = function(e, n) {
							l.messageListener = function(e) {
									return d(e)
							}
							,
							s.currentWindow = s.currentWindow || window,
							s.parentWindow = s.currentWindow.parent !== s.currentWindow.self ? s.currentWindow.parent : s.currentWindow.opener,
							(s.parentWindow || n) && s.currentWindow.addEventListener("message", l.messageListener, !1),
							s.parentWindow || (i.GlobalVars.isFramelessWindow = !0,
							window.onNativeMessage = m);
							try {
									s.parentOrigin = "*",
									u("initialize", [o.version], e)
							} finally {
									s.parentOrigin = null
							}
					}
					,
					n.uninitializeCommunication = function() {
							s.currentWindow.removeEventListener("message", l.messageListener, !1),
							s.parentWindow = null,
							s.parentOrigin = null,
							s.childWindow = null,
							s.childOrigin = null,
							l.parentMessageQueue = [],
							l.childMessageQueue = [],
							l.nextMessageId = 0,
							l.callbacks = {}
					}
					,
					n.sendMessageToParent = u,
					n.waitForMessageQueue = function(e, n) {
							var t = s.currentWindow.setInterval((function() {
									0 === C(e).length && (clearInterval(t),
									n())
							}
							), 100)
					}
					,
					n.sendMessageEventToChild = function(e, n) {
							var t = s.childWindow;
							e = T(e, n),
							n = h(t),
							t && n ? t.postMessage(e, n) : C(t).push(e)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.processAdditionalValidOrigins = n.isApiSupportedOnMobile = n.isHostClientMobile = n.isAPISupportedByPlatform = n.ensureInitialized = void 0;
					var r = t(2)
						, o = t(6)
						, i = t(4)
						, a = t(7)
						, s = t(5);
					function l(e) {
							return void 0 === e && (e = i.defaultSDKVersionForCompatCheck),
							e = (0,
							s.compareSDKVersions)(a.GlobalVars.clientSupportedSDKVersion, e),
							!isNaN(e) && 0 <= e
					}
					function u() {
							return a.GlobalVars.hostClientType == r.HostClientType.android || a.GlobalVars.hostClientType == r.HostClientType.ios
					}
					n.ensureInitialized = function() {
							for (var e = [], n = 0; n < arguments.length; n++)
									e[n] = arguments[n];
							if (!a.GlobalVars.initializeCalled)
									throw new Error("The library has not yet been initialized");
							if (a.GlobalVars.frameContext && e && 0 < e.length) {
									for (var t = !1, r = 0; r < e.length; r++)
											if (e[r] === a.GlobalVars.frameContext) {
													t = !0;
													break
											}
									if (!t)
											throw new Error("This call is not allowed in the '" + a.GlobalVars.frameContext + "' context")
							}
					}
					,
					n.isAPISupportedByPlatform = l,
					n.isHostClientMobile = u,
					n.isApiSupportedOnMobile = function(e) {
							return void 0 === e && (e = i.defaultSDKVersionForCompatCheck),
							u() ? l(e) ? null : {
									errorCode: o.ErrorCode.OLD_PLATFORM
							} : {
									errorCode: o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM
							}
					}
					,
					n.processAdditionalValidOrigins = function(e) {
							e = a.GlobalVars.additionalValidOrigins.concat(e.filter((function(e) {
									return "string" == typeof e && i.userOriginUrlValidationRegExp.test(e)
							}
							)));
							var n = {};
							e = e.filter((function(e) {
									return !n[e] && (n[e] = !0)
							}
							)),
							a.GlobalVars.additionalValidOrigins = e,
							0 < a.GlobalVars.additionalValidOrigins.length ? a.GlobalVars.additionalValidOriginsRegexp = (0,
							s.generateRegExpFromUrls)(a.GlobalVars.additionalValidOrigins) : a.GlobalVars.additionalValidOriginsRegexp = null
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.ChannelType = n.TaskModuleDimension = n.UserTeamRole = n.TeamType = n.FrameContexts = n.HostClientType = void 0,
					function(e) {
							e.desktop = "desktop",
							e.web = "web",
							e.android = "android",
							e.ios = "ios",
							e.ipados = "ipados",
							e.rigel = "rigel",
							e.surfaceHub = "surfaceHub",
							e.teamsRoomsWindows = "teamsRoomsWindows",
							e.teamsRoomsAndroid = "teamsRoomsAndroid",
							e.teamsPhones = "teamsPhones",
							e.teamsDisplays = "teamsDisplays"
					}(n.HostClientType || (n.HostClientType = {})),
					function(e) {
							e.settings = "settings",
							e.content = "content",
							e.authentication = "authentication",
							e.remove = "remove",
							e.task = "task",
							e.sidePanel = "sidePanel",
							e.stage = "stage",
							e.meetingStage = "meetingStage"
					}(n.FrameContexts || (n.FrameContexts = {})),
					function(e) {
							e[e.Standard = 0] = "Standard",
							e[e.Edu = 1] = "Edu",
							e[e.Class = 2] = "Class",
							e[e.Plc = 3] = "Plc",
							e[e.Staff = 4] = "Staff"
					}(n.TeamType || (n.TeamType = {})),
					function(e) {
							e[e.Admin = 0] = "Admin",
							e[e.User = 1] = "User",
							e[e.Guest = 2] = "Guest"
					}(n.UserTeamRole || (n.UserTeamRole = {})),
					function(e) {
							e.Large = "large",
							e.Medium = "medium",
							e.Small = "small"
					}(n.TaskModuleDimension || (n.TaskModuleDimension = {})),
					function(e) {
							e.Regular = "Regular",
							e.Private = "Private",
							e.Shared = "Shared"
					}(n.ChannelType || (n.ChannelType = {}))
			}
			, function(e, n, t) {
					"use strict";
					var r = this && this.__spreadArray || function(e, n, t) {
							if (t || 2 === arguments.length)
									for (var r, o = 0, i = n.length; o < i; o++)
											!r && o in n || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
							return e.concat(r || Array.prototype.slice.call(n))
					}
					;
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.registerBeforeUnloadHandler = n.registerOnLoadHandler = n.registerFocusEnterHandler = n.registerBackButtonHandler = n.handleThemeChange = n.registerOnThemeChangeHandler = n.removeHandler = n.registerHandler = n.callHandler = n.initializeHandlers = void 0;
					var o = t(8)
						, i = t(0)
						, a = function() {
							function e() {}
							return e.handlers = {},
							e
					}();
					function s(e) {
							a.themeChangeHandler && a.themeChangeHandler(e),
							i.Communication.childWindow && (0,
							i.sendMessageEventToChild)("themeChange", [e])
					}
					function l() {
							a.backButtonPressHandler && a.backButtonPressHandler() || (0,
							o.navigateBack)()
					}
					function u(e) {
							a.focusEnterHandler && a.focusEnterHandler(e)
					}
					function d(e) {
							a.loadHandler && a.loadHandler(e),
							i.Communication.childWindow && (0,
							i.sendMessageEventToChild)("load", [e])
					}
					function c() {
							function e() {
									(0,
									i.sendMessageToParent)("readyToUnload", [])
							}
							a.beforeUnloadHandler && a.beforeUnloadHandler(e) || e()
					}
					n.initializeHandlers = function() {
							a.handlers.themeChange = s,
							a.handlers.backButtonPress = l,
							a.handlers.load = d,
							a.handlers.beforeUnload = c,
							a.handlers.focusEnter = u
					}
					,
					n.callHandler = function(e, n) {
							return (e = a.handlers[e]) ? [!0, e.apply(this, n)] : [!1, void 0]
					}
					,
					n.registerHandler = function(e, n, t, o) {
							void 0 === t && (t = !0),
							void 0 === o && (o = []),
							n ? (a.handlers[e] = n,
							t && (0,
							i.sendMessageToParent)("registerHandler", r([e], o, !0))) : delete a.handlers[e]
					}
					,
					n.removeHandler = function(e) {
							delete a.handlers[e]
					}
					,
					n.registerOnThemeChangeHandler = function(e) {
							(a.themeChangeHandler = e) && (0,
							i.sendMessageToParent)("registerHandler", ["themeChange"])
					}
					,
					n.handleThemeChange = s,
					n.registerBackButtonHandler = function(e) {
							(a.backButtonPressHandler = e) && (0,
							i.sendMessageToParent)("registerHandler", ["backButton"])
					}
					,
					n.registerFocusEnterHandler = function(e) {
							(a.focusEnterHandler = e) && (0,
							i.sendMessageToParent)("registerHandler", ["focusEnter"])
					}
					,
					n.registerOnLoadHandler = function(e) {
							(a.loadHandler = e) && (0,
							i.sendMessageToParent)("registerHandler", ["load"])
					}
					,
					n.registerBeforeUnloadHandler = function(e) {
							(a.beforeUnloadHandler = e) && (0,
							i.sendMessageToParent)("registerHandler", ["beforeUnload"])
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.userOriginUrlValidationRegExp = n.validOriginRegExp = n.validOrigins = n.scanBarCodeAPIMobileSupportVersion = n.getMediaCallbackSupportVersion = n.mediaAPISupportVersion = n.captureImageMobileSupportVersion = n.peoplePickerRequiredVersion = n.locationAPIsRequiredVersion = n.getUserJoinedTeamsSupportedAndroidClientVersion = n.imageOutputFormatsAPISupportVersion = n.nonFullScreenVideoModeAPISupportVersion = n.videoAndImageMediaAPISupportVersion = n.defaultSDKVersionForCompatCheck = n.version = void 0,
					t = t(5),
					n.version = "1.13.1",
					n.defaultSDKVersionForCompatCheck = "2.0.1",
					n.videoAndImageMediaAPISupportVersion = "2.0.2",
					n.nonFullScreenVideoModeAPISupportVersion = "2.0.3",
					n.imageOutputFormatsAPISupportVersion = "2.0.4",
					n.getUserJoinedTeamsSupportedAndroidClientVersion = "2.0.1",
					n.locationAPIsRequiredVersion = "1.9.0",
					n.peoplePickerRequiredVersion = "2.0.0",
					n.captureImageMobileSupportVersion = "1.7.0",
					n.mediaAPISupportVersion = "1.8.0",
					n.getMediaCallbackSupportVersion = "2.0.0",
					n.scanBarCodeAPIMobileSupportVersion = "1.9.0",
					n.validOrigins = ["https://teams.microsoft.com", "https://teams.microsoft.us", "https://gov.teams.microsoft.us", "https://dod.teams.microsoft.us", "https://int.teams.microsoft.com", "https://teams.live.com", "https://devspaces.skype.com", "https://ssauth.skype.com", "https://local.teams.live.com", "https://local.teams.live.com:8080", "https://local.teams.office.com", "https://local.teams.office.com:8080", "https://outlook.office.com", "https://outlook-sdf.office.com", "https://*.teams.microsoft.com", "https://www.office.com", "https://word.office.com", "https://excel.office.com", "https://powerpoint.office.com", "https://www.officeppe.com", "https://*.www.office.com"],
					n.validOriginRegExp = (0,
					t.generateRegExpFromUrls)(n.validOrigins),
					n.userOriginUrlValidationRegExp = /^https\:\/\//
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.generateGUID = n.compareSDKVersions = n.getGenericOnCompleteHandler = n.generateRegExpFromUrls = void 0;
					var r = t(22);
					function o(e) {
							for (var n = "^", t = e.split("."), r = 0; r < t.length; r++)
									n += (0 < r ? "[.]" : "") + t[r].replace("*", "[^/^.]+");
							return n + "$"
					}
					n.generateRegExpFromUrls = function(e) {
							for (var n = "", t = 0; t < e.length; t++)
									n += (0 === t ? "" : "|") + o(e[t]);
							return new RegExp(n)
					}
					,
					n.getGenericOnCompleteHandler = function(e) {
							return function(n, t) {
									if (!n)
											throw new Error(e || t)
							}
					}
					,
					n.compareSDKVersions = function(e, n) {
							if ("string" != typeof e || "string" != typeof n)
									return NaN;
							var t = e.split(".")
								, r = n.split(".");
							function o(e) {
									return /^\d+$/.test(e)
							}
							if (!t.every(o) || !r.every(o))
									return NaN;
							for (; t.length < r.length; )
									t.push("0");
							for (; r.length < t.length; )
									r.push("0");
							for (var i = 0; i < t.length; ++i)
									if (Number(t[i]) != Number(r[i]))
											return Number(t[i]) > Number(r[i]) ? 1 : -1;
							return 0
					}
					,
					n.generateGUID = function() {
							return r.v4()
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.ErrorCode = n.FileOpenPreference = void 0,
					function(e) {
							e.Inline = "inline",
							e.Desktop = "desktop",
							e.Web = "web"
					}(n.FileOpenPreference || (n.FileOpenPreference = {})),
					function(e) {
							e[e.NOT_SUPPORTED_ON_PLATFORM = 100] = "NOT_SUPPORTED_ON_PLATFORM",
							e[e.INTERNAL_ERROR = 500] = "INTERNAL_ERROR",
							e[e.NOT_SUPPORTED_IN_CURRENT_CONTEXT = 501] = "NOT_SUPPORTED_IN_CURRENT_CONTEXT",
							e[e.PERMISSION_DENIED = 1e3] = "PERMISSION_DENIED",
							e[e.NETWORK_ERROR = 2e3] = "NETWORK_ERROR",
							e[e.NO_HW_SUPPORT = 3e3] = "NO_HW_SUPPORT",
							e[e.INVALID_ARGUMENTS = 4e3] = "INVALID_ARGUMENTS",
							e[e.UNAUTHORIZED_USER_OPERATION = 5e3] = "UNAUTHORIZED_USER_OPERATION",
							e[e.INSUFFICIENT_RESOURCES = 6e3] = "INSUFFICIENT_RESOURCES",
							e[e.THROTTLE = 7e3] = "THROTTLE",
							e[e.USER_ABORT = 8e3] = "USER_ABORT",
							e[e.OPERATION_TIMED_OUT = 8001] = "OPERATION_TIMED_OUT",
							e[e.OLD_PLATFORM = 9e3] = "OLD_PLATFORM",
							e[e.FILE_NOT_FOUND = 404] = "FILE_NOT_FOUND",
							e[e.SIZE_EXCEEDED = 1e4] = "SIZE_EXCEEDED"
					}(n.ErrorCode || (n.ErrorCode = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.GlobalVars = void 0;
					var r = function() {
							function e() {}
							return e.initializeCalled = !1,
							e.initializeCompleted = !1,
							e.additionalValidOrigins = [],
							e.additionalValidOriginsRegexp = null,
							e.initializeCallbacks = [],
							e.isFramelessWindow = !1,
							e.printCapabilityEnabled = !1,
							e
					}();
					n.GlobalVars = r
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.stageView = n.sharing = n.video = n.people = n.monetization = n.meeting = n.location = n.media = n.menus = n.ParentAppWindow = n.ChildAppWindow = n.tasks = n.settings = n.navigateToTab = n.navigateCrossDomain = n.navigateBack = n.returnFocus = n.shareDeepLink = n.setFrameContext = n.registerAppButtonHoverLeaveHandler = n.registerAppButtonHoverEnterHandler = n.registerAppButtonClickHandler = n.registerOnThemeChangeHandler = n.registerOnLoadHandler = n.registerFullScreenHandler = n.registerChangeSettingsHandler = n.registerFocusEnterHandler = n.registerBeforeUnloadHandler = n.registerBackButtonHandler = n.print = n.initializeWithFrameContext = n.initialize = n.getTabInstances = n.getMruTabInstances = n.getContext = n.executeDeepLink = n.enablePrintCapability = n.FileOpenPreference = n.ErrorCode = n.ChannelType = n.UserTeamRole = n.TeamType = n.TaskModuleDimension = n.HostClientType = n.FrameContexts = n.authentication = n.appInitialization = void 0;
					var r = t(25);
					Object.defineProperty(n, "appInitialization", {
							enumerable: !0,
							get: function() {
									return r.appInitialization
							}
					});
					var o = t(11);
					Object.defineProperty(n, "authentication", {
							enumerable: !0,
							get: function() {
									return o.authentication
							}
					});
					var i = t(2);
					Object.defineProperty(n, "FrameContexts", {
							enumerable: !0,
							get: function() {
									return i.FrameContexts
							}
					}),
					Object.defineProperty(n, "HostClientType", {
							enumerable: !0,
							get: function() {
									return i.HostClientType
							}
					}),
					Object.defineProperty(n, "TaskModuleDimension", {
							enumerable: !0,
							get: function() {
									return i.TaskModuleDimension
							}
					}),
					Object.defineProperty(n, "TeamType", {
							enumerable: !0,
							get: function() {
									return i.TeamType
							}
					}),
					Object.defineProperty(n, "UserTeamRole", {
							enumerable: !0,
							get: function() {
									return i.UserTeamRole
							}
					}),
					Object.defineProperty(n, "ChannelType", {
							enumerable: !0,
							get: function() {
									return i.ChannelType
							}
					});
					var a = t(6);
					Object.defineProperty(n, "ErrorCode", {
							enumerable: !0,
							get: function() {
									return a.ErrorCode
							}
					}),
					Object.defineProperty(n, "FileOpenPreference", {
							enumerable: !0,
							get: function() {
									return a.FileOpenPreference
							}
					});
					var s = t(26);
					Object.defineProperty(n, "enablePrintCapability", {
							enumerable: !0,
							get: function() {
									return s.enablePrintCapability
							}
					}),
					Object.defineProperty(n, "executeDeepLink", {
							enumerable: !0,
							get: function() {
									return s.executeDeepLink
							}
					}),
					Object.defineProperty(n, "getContext", {
							enumerable: !0,
							get: function() {
									return s.getContext
							}
					}),
					Object.defineProperty(n, "getMruTabInstances", {
							enumerable: !0,
							get: function() {
									return s.getMruTabInstances
							}
					}),
					Object.defineProperty(n, "getTabInstances", {
							enumerable: !0,
							get: function() {
									return s.getTabInstances
							}
					}),
					Object.defineProperty(n, "initialize", {
							enumerable: !0,
							get: function() {
									return s.initialize
							}
					}),
					Object.defineProperty(n, "initializeWithFrameContext", {
							enumerable: !0,
							get: function() {
									return s.initializeWithFrameContext
							}
					}),
					Object.defineProperty(n, "print", {
							enumerable: !0,
							get: function() {
									return s.print
							}
					}),
					Object.defineProperty(n, "registerBackButtonHandler", {
							enumerable: !0,
							get: function() {
									return s.registerBackButtonHandler
							}
					}),
					Object.defineProperty(n, "registerBeforeUnloadHandler", {
							enumerable: !0,
							get: function() {
									return s.registerBeforeUnloadHandler
							}
					}),
					Object.defineProperty(n, "registerFocusEnterHandler", {
							enumerable: !0,
							get: function() {
									return s.registerFocusEnterHandler
							}
					}),
					Object.defineProperty(n, "registerChangeSettingsHandler", {
							enumerable: !0,
							get: function() {
									return s.registerChangeSettingsHandler
							}
					}),
					Object.defineProperty(n, "registerFullScreenHandler", {
							enumerable: !0,
							get: function() {
									return s.registerFullScreenHandler
							}
					}),
					Object.defineProperty(n, "registerOnLoadHandler", {
							enumerable: !0,
							get: function() {
									return s.registerOnLoadHandler
							}
					}),
					Object.defineProperty(n, "registerOnThemeChangeHandler", {
							enumerable: !0,
							get: function() {
									return s.registerOnThemeChangeHandler
							}
					}),
					Object.defineProperty(n, "registerAppButtonClickHandler", {
							enumerable: !0,
							get: function() {
									return s.registerAppButtonClickHandler
							}
					}),
					Object.defineProperty(n, "registerAppButtonHoverEnterHandler", {
							enumerable: !0,
							get: function() {
									return s.registerAppButtonHoverEnterHandler
							}
					}),
					Object.defineProperty(n, "registerAppButtonHoverLeaveHandler", {
							enumerable: !0,
							get: function() {
									return s.registerAppButtonHoverLeaveHandler
							}
					}),
					Object.defineProperty(n, "setFrameContext", {
							enumerable: !0,
							get: function() {
									return s.setFrameContext
							}
					}),
					Object.defineProperty(n, "shareDeepLink", {
							enumerable: !0,
							get: function() {
									return s.shareDeepLink
							}
					});
					var l = t(27);
					Object.defineProperty(n, "returnFocus", {
							enumerable: !0,
							get: function() {
									return l.returnFocus
							}
					}),
					Object.defineProperty(n, "navigateBack", {
							enumerable: !0,
							get: function() {
									return l.navigateBack
							}
					}),
					Object.defineProperty(n, "navigateCrossDomain", {
							enumerable: !0,
							get: function() {
									return l.navigateCrossDomain
							}
					}),
					Object.defineProperty(n, "navigateToTab", {
							enumerable: !0,
							get: function() {
									return l.navigateToTab
							}
					});
					var u = t(12);
					Object.defineProperty(n, "settings", {
							enumerable: !0,
							get: function() {
									return u.settings
							}
					});
					var d = t(28);
					Object.defineProperty(n, "tasks", {
							enumerable: !0,
							get: function() {
									return d.tasks
							}
					});
					var c = t(16);
					Object.defineProperty(n, "ChildAppWindow", {
							enumerable: !0,
							get: function() {
									return c.ChildAppWindow
							}
					}),
					Object.defineProperty(n, "ParentAppWindow", {
							enumerable: !0,
							get: function() {
									return c.ParentAppWindow
							}
					});
					var g = t(15);
					Object.defineProperty(n, "menus", {
							enumerable: !0,
							get: function() {
									return g.menus
							}
					});
					var m = t(17);
					Object.defineProperty(n, "media", {
							enumerable: !0,
							get: function() {
									return m.media
							}
					});
					var p = t(29);
					Object.defineProperty(n, "location", {
							enumerable: !0,
							get: function() {
									return p.location
							}
					});
					var f = t(30);
					Object.defineProperty(n, "meeting", {
							enumerable: !0,
							get: function() {
									return f.meeting
							}
					});
					var C = t(31);
					Object.defineProperty(n, "monetization", {
							enumerable: !0,
							get: function() {
									return C.monetization
							}
					});
					var h = t(32);
					Object.defineProperty(n, "people", {
							enumerable: !0,
							get: function() {
									return h.people
							}
					});
					var b = t(33);
					Object.defineProperty(n, "video", {
							enumerable: !0,
							get: function() {
									return b.video
							}
					});
					var v = t(34);
					Object.defineProperty(n, "sharing", {
							enumerable: !0,
							get: function() {
									return v.sharing
							}
					});
					var y = t(35);
					Object.defineProperty(n, "stageView", {
							enumerable: !0,
							get: function() {
									return y.stageView
							}
					})
			}
			, function(e, n) {
					var t, r, o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
					o ? (t = new Uint8Array(16),
					e.exports = function() {
							return o(t),
							t
					}
					) : (r = new Array(16),
					e.exports = function() {
							for (var e, n = 0; n < 16; n++)
									!(3 & n) && (e = 4294967296 * Math.random()),
									r[n] = e >>> ((3 & n) << 3) & 255;
							return r
					}
					)
			}
			, function(e, n) {
					for (var t = [], r = 0; r < 256; ++r)
							t[r] = (r + 256).toString(16).substr(1);
					e.exports = function(e, n) {
							var r = n || 0;
							return [(n = t)[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[+r]]].join("")
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.authentication = void 0;
					var r = t(1)
						, o = t(7)
						, i = t(2)
						, a = t(0)
						, s = t(3);
					!function(e) {
							var n, t;
							function l() {
									d();
									try {
											a.Communication.childWindow && a.Communication.childWindow.close()
									} finally {
											a.Communication.childWindow = null,
											a.Communication.childOrigin = null
									}
							}
							function u(e) {
									n = e,
									l();
									var t = n.width || 600
										, r = n.height || 400
										, o = (t = Math.min(t, a.Communication.currentWindow.outerWidth - 400),
									r = Math.min(r, a.Communication.currentWindow.outerHeight - 200),
									document.createElement("a"));
									o.href = n.url.replace("{oauthRedirectMethod}", "web");
									var i = void 0 !== a.Communication.currentWindow.screenLeft ? a.Communication.currentWindow.screenLeft : a.Communication.currentWindow.screenX;
									e = void 0 !== a.Communication.currentWindow.screenTop ? a.Communication.currentWindow.screenTop : a.Communication.currentWindow.screenY,
									i += a.Communication.currentWindow.outerWidth / 2 - t / 2,
									e += a.Communication.currentWindow.outerHeight / 2 - r / 2,
									a.Communication.childWindow = a.Communication.currentWindow.open(o.href, "_blank", "toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top=" + e + ", left=" + i + ", width=" + t + ", height=" + r),
									a.Communication.childWindow ? c() : m("FailedToOpenWindow")
							}
							function d() {
									t && (clearInterval(t),
									t = 0),
									(0,
									s.removeHandler)("initialize"),
									(0,
									s.removeHandler)("navigateCrossDomain")
							}
							function c() {
									d(),
									t = a.Communication.currentWindow.setInterval((function() {
											if (!a.Communication.childWindow || a.Communication.childWindow.closed)
													m("CancelledByUser");
											else {
													var e = a.Communication.childOrigin;
													try {
															a.Communication.childOrigin = "*",
															(0,
															a.sendMessageEventToChild)("ping")
													} finally {
															a.Communication.childOrigin = e
													}
											}
									}
									), 100),
									(0,
									s.registerHandler)("initialize", (function() {
											return [i.FrameContexts.authentication, o.GlobalVars.hostClientType]
									}
									)),
									(0,
									s.registerHandler)("navigateCrossDomain", (function() {
											return !1
									}
									))
							}
							function g(e) {
									try {
											n && n.successCallback && n.successCallback(e)
									} finally {
											n = null,
											l()
									}
							}
							function m(e) {
									try {
											n && n.failureCallback && n.failureCallback(e)
									} finally {
											n = null,
											l()
									}
							}
							function p(e, n, t) {
									var r;
									e && ((r = document.createElement("a")).href = decodeURIComponent(e),
									r.host && r.host !== window.location.host && "outlook.office.com" === r.host && -1 < r.search.indexOf("client_type=Win32_Outlook") && (n && "result" === n && (t && (r.href = f(r.href, "result", t)),
									a.Communication.currentWindow.location.assign(f(r.href, "authSuccess", ""))),
									n && "reason" === n && (t && (r.href = f(r.href, "reason", t)),
									a.Communication.currentWindow.location.assign(f(r.href, "authFailure", "")))))
							}
							function f(e, n, t) {
									var r = e.indexOf("#")
										, o = (o = -1 === r ? "#" : e.substr(r)) + "&" + n + ("" !== t ? "=" + t : "");
									return (e = -1 === r ? e : e.substr(0, r)) + o
							}
							e.initialize = function() {
									(0,
									s.registerHandler)("authentication.authenticate.success", g, !1),
									(0,
									s.registerHandler)("authentication.authenticate.failure", m, !1)
							}
							,
							e.registerAuthenticationHandlers = function(e) {
									n = e
							}
							,
							e.authenticate = function(e) {
									var t = void 0 !== e ? e : n;
									(0,
									r.ensureInitialized)(i.FrameContexts.content, i.FrameContexts.sidePanel, i.FrameContexts.settings, i.FrameContexts.remove, i.FrameContexts.task, i.FrameContexts.stage, i.FrameContexts.meetingStage),
									o.GlobalVars.hostClientType === i.HostClientType.desktop || o.GlobalVars.hostClientType === i.HostClientType.android || o.GlobalVars.hostClientType === i.HostClientType.ios || o.GlobalVars.hostClientType === i.HostClientType.rigel || o.GlobalVars.hostClientType === i.HostClientType.teamsRoomsWindows || o.GlobalVars.hostClientType === i.HostClientType.teamsRoomsAndroid || o.GlobalVars.hostClientType === i.HostClientType.teamsPhones || o.GlobalVars.hostClientType === i.HostClientType.teamsDisplays ? ((e = document.createElement("a")).href = t.url,
									(0,
									a.sendMessageToParent)("authentication.authenticate", [e.href, t.width, t.height, t.isExternal], (function(e, n) {
											e ? t.successCallback(n) : t.failureCallback(n)
									}
									))) : u(t)
							}
							,
							e.getAuthToken = function(e) {
									(0,
									r.ensureInitialized)(),
									(0,
									a.sendMessageToParent)("authentication.getAuthToken", [e.resources, e.claims, e.silent], (function(n, t) {
											n ? e.successCallback(t) : e.failureCallback(t)
									}
									))
							}
							,
							e.getUser = function(e) {
									(0,
									r.ensureInitialized)(),
									(0,
									a.sendMessageToParent)("authentication.getUser", (function(n, t) {
											n ? e.successCallback(t) : e.failureCallback(t)
									}
									))
							}
							,
							e.notifySuccess = function(e, n) {
									p(n, "result", e),
									(0,
									r.ensureInitialized)(i.FrameContexts.authentication),
									(0,
									a.sendMessageToParent)("authentication.authenticate.success", [e]),
									(0,
									a.waitForMessageQueue)(a.Communication.parentWindow, (function() {
											return setTimeout((function() {
													return a.Communication.currentWindow.close()
											}
											), 200)
									}
									))
							}
							,
							e.notifyFailure = function(e, n) {
									p(n, "reason", e),
									(0,
									r.ensureInitialized)(i.FrameContexts.authentication),
									(0,
									a.sendMessageToParent)("authentication.authenticate.failure", [e]),
									(0,
									a.waitForMessageQueue)(a.Communication.parentWindow, (function() {
											return setTimeout((function() {
													return a.Communication.currentWindow.close()
											}
											), 200)
									}
									))
							}
					}(n.authentication || (n.authentication = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.settings = void 0;
					var r = t(1)
						, o = t(2)
						, i = t(5)
						, a = t(0)
						, s = t(3);
					!function(e) {
							var n, t;
							function l(e) {
									e = new u(e),
									n ? n(e) : e.notifySuccess()
							}
							e.initialize = function() {
									(0,
									s.registerHandler)("settings.save", l, !1),
									(0,
									s.registerHandler)("settings.remove", d, !1)
							}
							,
							e.setValidityState = function(e) {
									(0,
									r.ensureInitialized)(o.FrameContexts.settings, o.FrameContexts.remove),
									(0,
									a.sendMessageToParent)("settings.setValidityState", [e])
							}
							,
							e.getSettings = function(e) {
									(0,
									r.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.settings, o.FrameContexts.remove, o.FrameContexts.sidePanel),
									(0,
									a.sendMessageToParent)("settings.getSettings", e)
							}
							,
							e.setSettings = function(e, n) {
									(0,
									r.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.settings, o.FrameContexts.sidePanel),
									(0,
									a.sendMessageToParent)("settings.setSettings", [e], n || (0,
									i.getGenericOnCompleteHandler)())
							}
							,
							e.registerOnSaveHandler = function(e) {
									(0,
									r.ensureInitialized)(o.FrameContexts.settings),
									(n = e) && (0,
									a.sendMessageToParent)("registerHandler", ["save"])
							}
							,
							e.registerOnRemoveHandler = function(e) {
									(0,
									r.ensureInitialized)(o.FrameContexts.remove, o.FrameContexts.settings),
									(t = e) && (0,
									a.sendMessageToParent)("registerHandler", ["remove"])
							}
							;
							var u = function() {
									function e(e) {
											this.notified = !1,
											this.result = e || {}
									}
									return e.prototype.notifySuccess = function() {
											this.ensureNotNotified(),
											(0,
											a.sendMessageToParent)("settings.save.success"),
											this.notified = !0
									}
									,
									e.prototype.notifyFailure = function(e) {
											this.ensureNotNotified(),
											(0,
											a.sendMessageToParent)("settings.save.failure", [e]),
											this.notified = !0
									}
									,
									e.prototype.ensureNotNotified = function() {
											if (this.notified)
													throw new Error("The SaveEvent may only notify success or failure once.")
									}
									,
									e
							}();
							function d() {
									var e = new c;
									t ? t(e) : e.notifySuccess()
							}
							var c = function() {
									function e() {
											this.notified = !1
									}
									return e.prototype.notifySuccess = function() {
											this.ensureNotNotified(),
											(0,
											a.sendMessageToParent)("settings.remove.success"),
											this.notified = !0
									}
									,
									e.prototype.notifyFailure = function(e) {
											this.ensureNotNotified(),
											(0,
											a.sendMessageToParent)("settings.remove.failure", [e]),
											this.notified = !0
									}
									,
									e.prototype.ensureNotNotified = function() {
											if (this.notified)
													throw new Error("The removeEvent may only notify success or failure once.")
									}
									,
									e
							}()
					}(n.settings || (n.settings = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.logs = void 0;
					var r = t(1)
						, o = t(0)
						, i = t(3);
					(n.logs || (n.logs = {})).registerGetLogHandler = function(e) {
							(0,
							r.ensureInitialized)(),
							e ? (0,
							i.registerHandler)("log.request", (function() {
									var n = e();
									(0,
									o.sendMessageToParent)("log.receive", [n])
							}
							)) : (0,
							i.removeHandler)("log.request")
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.registerUserSettingsChangeHandler = n.getConfigSetting = n.getChatMembers = n.registerCustomHandler = n.sendCustomEvent = n.sendCustomMessage = n.uploadCustomApp = n.showNotification = n.openFilePreview = n.exitFullscreen = n.enterFullscreen = n.getUserJoinedTeams = n.initializePrivateApis = void 0;
					var r = t(1)
						, o = t(2)
						, i = t(5)
						, a = t(0)
						, s = t(3)
						, l = t(7)
						, u = t(6)
						, d = t(4);
					n.initializePrivateApis = function() {}
					,
					n.getUserJoinedTeams = function(e, n) {
							if ((0,
							r.ensureInitialized)(),
							(l.GlobalVars.hostClientType === o.HostClientType.android || l.GlobalVars.hostClientType === o.HostClientType.teamsRoomsAndroid || l.GlobalVars.hostClientType === o.HostClientType.teamsPhones || l.GlobalVars.hostClientType === o.HostClientType.teamsDisplays) && !(0,
							r.isAPISupportedByPlatform)(d.getUserJoinedTeamsSupportedAndroidClientVersion)) {
									var t = {
											errorCode: u.ErrorCode.OLD_PLATFORM
									};
									throw new Error(JSON.stringify(t))
							}
							(0,
							a.sendMessageToParent)("getUserJoinedTeams", [n], e)
					}
					,
					n.enterFullscreen = function() {
							(0,
							r.ensureInitialized)(o.FrameContexts.content),
							(0,
							a.sendMessageToParent)("enterFullscreen", [])
					}
					,
					n.exitFullscreen = function() {
							(0,
							r.ensureInitialized)(o.FrameContexts.content),
							(0,
							a.sendMessageToParent)("exitFullscreen", [])
					}
					,
					n.openFilePreview = function(e) {
							(0,
							r.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.task),
							e = [e.entityId, e.title, e.description, e.type, e.objectUrl, e.downloadUrl, e.webPreviewUrl, e.webEditUrl, e.baseUrl, e.editFile, e.subEntityId, e.viewerAction, e.fileOpenPreference, e.conversationId],
							(0,
							a.sendMessageToParent)("openFilePreview", e)
					}
					,
					n.showNotification = function(e) {
							(0,
							r.ensureInitialized)(o.FrameContexts.content),
							e = [e.message, e.notificationType],
							(0,
							a.sendMessageToParent)("showNotification", e)
					}
					,
					n.uploadCustomApp = function(e, n) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)("uploadCustomApp", [e], n || (0,
							i.getGenericOnCompleteHandler)())
					}
					,
					n.sendCustomMessage = function(e, n, t) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)(e, n, t)
					}
					,
					n.sendCustomEvent = function(e, n) {
							if ((0,
							r.ensureInitialized)(),
							!a.Communication.childWindow)
									throw new Error("The child window has not yet been initialized or is not present");
							(0,
							a.sendMessageEventToChild)(e, n)
					}
					,
					n.registerCustomHandler = function(e, n) {
							var t = this;
							(0,
							r.ensureInitialized)(),
							(0,
							s.registerHandler)(e, (function() {
									for (var e = [], r = 0; r < arguments.length; r++)
											e[r] = arguments[r];
									return n.apply(t, e)
							}
							))
					}
					,
					n.getChatMembers = function(e) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)("getChatMembers", e)
					}
					,
					n.getConfigSetting = function(e, n) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)("getConfigSetting", [n], e)
					}
					,
					n.registerUserSettingsChangeHandler = function(e, n) {
							(0,
							r.ensureInitialized)(),
							(0,
							s.registerHandler)("userSettingsChange", n, !0, [e])
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.menus = void 0;
					var r = t(1)
						, o = t(0)
						, i = t(3);
					!function(e) {
							!function(e) {
									e[e.ifRoom = 0] = "ifRoom",
									e[e.overflowOnly = 1] = "overflowOnly"
							}(e.DisplayMode || (e.DisplayMode = {}));
							var n, t, a, s = function() {
									this.enabled = !0,
									this.selected = !1
							};
							function l(e) {
									a && a(e) || ((0,
									r.ensureInitialized)(),
									(0,
									o.sendMessageToParent)("viewConfigItemPress", [e]))
							}
							function u(e) {
									n && n(e) || ((0,
									r.ensureInitialized)(),
									(0,
									o.sendMessageToParent)("handleNavBarMenuItemPress", [e]))
							}
							function d(e) {
									t && t(e) || ((0,
									r.ensureInitialized)(),
									(0,
									o.sendMessageToParent)("handleActionMenuItemPress", [e]))
							}
							e.MenuItem = s,
							function(e) {
									e.dropDown = "dropDown",
									e.popOver = "popOver"
							}(e.MenuListType || (e.MenuListType = {})),
							e.initialize = function() {
									(0,
									i.registerHandler)("navBarMenuItemPress", u, !1),
									(0,
									i.registerHandler)("actionMenuItemPress", d, !1),
									(0,
									i.registerHandler)("setModuleView", l, !1)
							}
							,
							e.setUpViews = function(e, n) {
									(0,
									r.ensureInitialized)(),
									a = n,
									(0,
									o.sendMessageToParent)("setUpViews", [e])
							}
							,
							e.setNavBarMenu = function(e, t) {
									(0,
									r.ensureInitialized)(),
									n = t,
									(0,
									o.sendMessageToParent)("setNavBarMenu", [e])
							}
							,
							e.showActionMenu = function(e, n) {
									(0,
									r.ensureInitialized)(),
									t = n,
									(0,
									o.sendMessageToParent)("showActionMenu", [e])
							}
					}(n.menus || (n.menus = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.ParentAppWindow = n.ChildAppWindow = void 0;
					var r = t(1)
						, o = t(2)
						, i = t(5)
						, a = t(0)
						, s = t(3);
					t = function() {
							function e() {}
							return e.prototype.postMessage = function(e, n) {
									(0,
									r.ensureInitialized)(),
									(0,
									a.sendMessageToParent)("messageForChild", [e], n || (0,
									i.getGenericOnCompleteHandler)())
							}
							,
							e.prototype.addEventListener = function(e, n) {
									"message" === e && (0,
									s.registerHandler)("messageForParent", n)
							}
							,
							e
					}(),
					n.ChildAppWindow = t,
					t = function() {
							function e() {}
							return Object.defineProperty(e, "Instance", {
									get: function() {
											return this._instance || (this._instance = new this)
									},
									enumerable: !1,
									configurable: !0
							}),
							e.prototype.postMessage = function(e, n) {
									(0,
									r.ensureInitialized)(o.FrameContexts.task),
									(0,
									a.sendMessageToParent)("messageForParent", [e], n || (0,
									i.getGenericOnCompleteHandler)())
							}
							,
							e.prototype.addEventListener = function(e, n) {
									"message" === e && (0,
									s.registerHandler)("messageForChild", n)
							}
							,
							e
					}(),
					n.ParentAppWindow = t
			}
			, function(e, n, t) {
					"use strict";
					var r, o = this && this.__extends || (r = function(e, n) {
							return (r = Object.setPrototypeOf || {
									__proto__: []
							}instanceof Array && function(e, n) {
									e.__proto__ = n
							}
							|| function(e, n) {
									for (var t in n)
											Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
							}
							)(e, n)
					}
					,
					function(e, n) {
							if ("function" != typeof n && null !== n)
									throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
							function t() {
									this.constructor = e
							}
							r(e, n),
							e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype,
							new t)
					}
					);
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.media = void 0;
					var i = t(7)
						, a = t(6)
						, s = t(1)
						, l = t(2)
						, u = t(5)
						, d = t(18)
						, c = t(0)
						, g = t(3)
						, m = t(4);
					!function(e) {
							!function(e) {
									e.Base64 = "base64",
									e.ID = "id"
							}(e.FileFormat || (e.FileFormat = {}));
							var n = function() {};
							e.File = n,
							e.captureImage = function(e) {
									if (!e)
											throw new Error("[captureImage] Callback cannot be null");
									(0,
									s.ensureInitialized)(l.FrameContexts.content, l.FrameContexts.task),
									i.GlobalVars.isFramelessWindow ? (0,
									s.isAPISupportedByPlatform)(m.captureImageMobileSupportVersion) ? (0,
									c.sendMessageToParent)("captureImage", e) : e({
											errorCode: a.ErrorCode.OLD_PLATFORM
									}, void 0) : e({
											errorCode: a.ErrorCode.NOT_SUPPORTED_ON_PLATFORM
									}, void 0)
							}
							;
							var t, r, p = function(e) {
									function n(n) {
											void 0 === n && (n = null);
											var t = e.call(this) || this;
											return n && (t.content = n.content,
											t.format = n.format,
											t.mimeType = n.mimeType,
											t.name = n.name,
											t.preview = n.preview,
											t.size = n.size),
											t
									}
									return o(n, e),
									n.prototype.getMedia = function(e) {
											if (!e)
													throw new Error("[get Media] Callback cannot be null");
											(0,
											s.ensureInitialized)(l.FrameContexts.content, l.FrameContexts.task),
											(0,
											s.isAPISupportedByPlatform)(m.mediaAPISupportVersion) ? (0,
											d.validateGetMediaInputs)(this.mimeType, this.format, this.content) ? (0,
											s.isAPISupportedByPlatform)(m.getMediaCallbackSupportVersion) ? this.getMediaViaCallback(e) : this.getMediaViaHandler(e) : e({
													errorCode: a.ErrorCode.INVALID_ARGUMENTS
											}, null) : e({
													errorCode: a.ErrorCode.OLD_PLATFORM
											}, null)
									}
									,
									n.prototype.getMediaViaCallback = function(e) {
											var n = {
													mediaMimeType: this.mimeType,
													assembleAttachment: []
											}
												, t = [this.content];
											(0,
											c.sendMessageToParent)("getMedia", t, (function(t) {
													var r;
													e && (t && t.error ? e(t.error, null) : t && t.mediaChunk ? t.mediaChunk.chunkSequence <= 0 ? (r = (0,
													d.createFile)(n.assembleAttachment, n.mediaMimeType),
													e(t.error, r)) : (t = (0,
													d.decodeAttachment)(t.mediaChunk, n.mediaMimeType),
													n.assembleAttachment.push(t)) : e({
															errorCode: a.ErrorCode.INTERNAL_ERROR,
															message: "data received is null"
													}, null))
											}
											))
									}
									,
									n.prototype.getMediaViaHandler = function(e) {
											var n = (0,
											u.generateGUID)()
												, t = {
													mediaMimeType: this.mimeType,
													assembleAttachment: []
											}
												, r = [n, this.content];
											this.content && e && (0,
											c.sendMessageToParent)("getMedia", r),
											(0,
											g.registerHandler)("getMedia" + n, (function(r) {
													var o;
													e && ((o = JSON.parse(r)).error ? (e(o.error, null),
													(0,
													g.removeHandler)("getMedia" + n)) : o.mediaChunk ? o.mediaChunk.chunkSequence <= 0 ? (r = (0,
													d.createFile)(t.assembleAttachment, t.mediaMimeType),
													e(o.error, r),
													(0,
													g.removeHandler)("getMedia" + n)) : (o = (0,
													d.decodeAttachment)(o.mediaChunk, t.mediaMimeType),
													t.assembleAttachment.push(o)) : (e({
															errorCode: a.ErrorCode.INTERNAL_ERROR,
															message: "data received is null"
													}, null),
													(0,
													g.removeHandler)("getMedia" + n)))
											}
											))
									}
									,
									n
							}(n);
							e.Media = p,
							n = function(e) {
									function n() {
											return null !== e && e.apply(this, arguments) || this
									}
									return o(n, e),
									n.prototype.getMediaType = function() {
											return r.Video
									}
									,
									n.prototype.notifyEventToApp = function(e) {
											if (this.controllerCallback)
													switch (e) {
													case t.StartRecording:
															if (this.controllerCallback.onRecordingStarted) {
																	this.controllerCallback.onRecordingStarted();
																	break
															}
													}
									}
									,
									n
							}(function() {
									function e(e) {
											this.controllerCallback = e
									}
									return e.prototype.notifyEventToHost = function(e, n) {
											(0,
											s.ensureInitialized)(l.FrameContexts.content, l.FrameContexts.task);
											var t = (0,
											s.isApiSupportedOnMobile)(m.nonFullScreenVideoModeAPISupportVersion);
											t ? n && n(t) : (e = {
													mediaType: this.getMediaType(),
													mediaControllerEvent: e
											},
											(0,
											c.sendMessageToParent)("media.controller", [e], (function(e) {
													n && n(e)
											}
											)))
									}
									,
									e.prototype.stop = function(e) {
											this.notifyEventToHost(t.StopRecording, e)
									}
									,
									e
							}()),
							e.VideoController = n,
							function(e) {
									e[e.StartRecording = 1] = "StartRecording",
									e[e.StopRecording = 2] = "StopRecording"
							}(t = t || {}),
							function(e) {
									e[e.Photo = 1] = "Photo",
									e[e.Document = 2] = "Document",
									e[e.Whiteboard = 3] = "Whiteboard",
									e[e.BusinessCard = 4] = "BusinessCard"
							}(e.CameraStartMode || (e.CameraStartMode = {})),
							function(e) {
									e[e.Camera = 1] = "Camera",
									e[e.Gallery = 2] = "Gallery"
							}(e.Source || (e.Source = {})),
							function(e) {
									e[e.Image = 1] = "Image",
									e[e.Video = 2] = "Video",
									e[e.VideoAndImage = 3] = "VideoAndImage",
									e[e.Audio = 4] = "Audio"
							}(r = e.MediaType || (e.MediaType = {})),
							function(e) {
									e[e.ID = 1] = "ID",
									e[e.URL = 2] = "URL"
							}(e.ImageUriType || (e.ImageUriType = {})),
							function(e) {
									e[e.IMAGE = 1] = "IMAGE",
									e[e.PDF = 2] = "PDF"
							}(e.ImageOutputFormats || (e.ImageOutputFormats = {})),
							e.selectMedia = function(e, n) {
									if (!n)
											throw new Error("[select Media] Callback cannot be null");
									var t, r;
									(0,
									s.ensureInitialized)(l.FrameContexts.content, l.FrameContexts.task),
									(0,
									s.isAPISupportedByPlatform)(m.mediaAPISupportVersion) ? (t = (0,
									d.isMediaCallSupportedOnMobile)(e)) ? n(t, null) : (0,
									d.validateSelectMediaInputs)(e) ? (0,
									c.sendMessageToParent)("selectMedia", [e], (function(t, r, o) {
											if (o)
													(0,
													d.isVideoControllerRegistered)(e) && e.videoProps.videoController.notifyEventToApp(o);
											else if (r) {
													for (var i = [], a = 0, s = r; a < s.length; a++) {
															var l = s[a];
															i.push(new p(l))
													}
													n(t, i)
											} else
													n(t, null)
									}
									)) : (r = {
											errorCode: a.ErrorCode.INVALID_ARGUMENTS
									},
									n(r, null)) : (r = {
											errorCode: a.ErrorCode.OLD_PLATFORM
									},
									n(r, null))
							}
							,
							e.viewImages = function(e, n) {
									if (!n)
											throw new Error("[view images] Callback cannot be null");
									(0,
									s.ensureInitialized)(l.FrameContexts.content, l.FrameContexts.task),
									(0,
									s.isAPISupportedByPlatform)(m.mediaAPISupportVersion) ? (0,
									d.validateViewImagesInput)(e) ? (0,
									c.sendMessageToParent)("viewImages", [e], n) : n({
											errorCode: a.ErrorCode.INVALID_ARGUMENTS
									}) : n({
											errorCode: a.ErrorCode.OLD_PLATFORM
									})
							}
							,
							e.scanBarCode = function(e, n) {
									if (!e)
											throw new Error("[media.scanBarCode] Callback cannot be null");
									(0,
									s.ensureInitialized)(l.FrameContexts.content, l.FrameContexts.task),
									i.GlobalVars.hostClientType !== l.HostClientType.desktop && i.GlobalVars.hostClientType !== l.HostClientType.web && i.GlobalVars.hostClientType !== l.HostClientType.rigel && i.GlobalVars.hostClientType !== l.HostClientType.teamsRoomsWindows && i.GlobalVars.hostClientType !== l.HostClientType.teamsRoomsAndroid && i.GlobalVars.hostClientType !== l.HostClientType.teamsPhones && i.GlobalVars.hostClientType !== l.HostClientType.teamsDisplays ? (0,
									s.isAPISupportedByPlatform)(m.scanBarCodeAPIMobileSupportVersion) ? (0,
									d.validateScanBarCodeInput)(n) ? (0,
									c.sendMessageToParent)("media.scanBarCode", [n], e) : e({
											errorCode: a.ErrorCode.INVALID_ARGUMENTS
									}, null) : e({
											errorCode: a.ErrorCode.OLD_PLATFORM
									}, null) : e({
											errorCode: a.ErrorCode.NOT_SUPPORTED_ON_PLATFORM
									}, null)
							}
					}(n.media || (n.media = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.validatePeoplePickerInput = n.validateScanBarCodeInput = n.validateViewImagesInput = n.validateGetMediaInputs = n.isMediaCallForNonFullScreenVideoMode = n.isMediaCallForVideoAndImageInputs = n.isMediaCallForImageOutputFormats = n.validateSelectMediaInputs = n.isVideoControllerRegistered = n.isMediaCallSupportedOnMobile = n.decodeAttachment = n.createFile = void 0;
					var r = t(17)
						, o = t(4)
						, i = t(1);
					function a(e) {
							var n;
							return !((null == e ? void 0 : e.mediaType) != r.media.MediaType.Image || null === (n = null == e ? void 0 : e.imageProps) || void 0 === n || !n.imageOutputFormats)
					}
					function s(e) {
							return !(!e || e.mediaType != r.media.MediaType.VideoAndImage && !e.videoAndImageProps)
					}
					function l(e) {
							return !(!e || e.mediaType != r.media.MediaType.Video || !e.videoProps || e.videoProps.isFullScreenMode)
					}
					n.createFile = function(e, n) {
							if (null == e || null == n || e.length <= 0)
									return null;
							var t, r = 1;
							return e.sort((function(e, n) {
									return e.sequence > n.sequence ? 1 : -1
							}
							)),
							e.forEach((function(e) {
									e.sequence == r && (t = t ? new Blob([t, e.file],{
											type: n
									}) : new Blob([e.file],{
											type: n
									}),
									r++)
							}
							)),
							t
					}
					,
					n.decodeAttachment = function(e, n) {
							if (null == e || null == n)
									return null;
							for (var t = atob(e.chunk), r = new Array(t.length), o = 0; o < t.length; o++)
									r[o] = t.charCodeAt(o);
							var i = new Uint8Array(r);
							return n = new Blob([i],{
									type: n
							}),
							{
									sequence: e.chunkSequence,
									file: n
							}
					}
					,
					n.isMediaCallSupportedOnMobile = function(e) {
							return s(e) ? (0,
							i.isApiSupportedOnMobile)(o.videoAndImageMediaAPISupportVersion) : l(e) ? (0,
							i.isApiSupportedOnMobile)(o.nonFullScreenVideoModeAPISupportVersion) : a(e) ? (0,
							i.isApiSupportedOnMobile)(o.imageOutputFormatsAPISupportVersion) : null
					}
					,
					n.isVideoControllerRegistered = function(e) {
							return !(e.mediaType != r.media.MediaType.Video || !e.videoProps || !e.videoProps.videoController)
					}
					,
					n.validateSelectMediaInputs = function(e) {
							return !(null == e || 10 < e.maxMediaCount)
					}
					,
					n.isMediaCallForImageOutputFormats = a,
					n.isMediaCallForVideoAndImageInputs = s,
					n.isMediaCallForNonFullScreenVideoMode = l,
					n.validateGetMediaInputs = function(e, n, t) {
							return null != e && null != n && n == r.media.FileFormat.ID && null != t
					}
					,
					n.validateViewImagesInput = function(e) {
							return !(null == e || e.length <= 0 || 10 < e.length)
					}
					,
					n.validateScanBarCodeInput = function(e) {
							return !e || !(null === e.timeOutIntervalInSec || e.timeOutIntervalInSec <= 0 || 60 < e.timeOutIntervalInSec)
					}
					,
					n.validatePeoplePickerInput = function(e) {
							if (e) {
									if (e.title && "string" != typeof e.title)
											return !1;
									if (e.setSelected && "object" != typeof e.setSelected)
											return !1;
									if (e.openOrgWideSearchInChatOrChannel && "boolean" != typeof e.openOrgWideSearchInChatOrChannel)
											return !1;
									if (e.singleSelect && "boolean" != typeof e.singleSelect)
											return !1
							}
							return !0
					}
			}
			, function(e, n, t) {
					"use strict";
					var r = this && this.__createBinding || (Object.create ? function(e, n, t, r) {
							void 0 === r && (r = t),
							Object.defineProperty(e, r, {
									enumerable: !0,
									get: function() {
											return n[t]
									}
							})
					}
					: function(e, n, t, r) {
							e[r = void 0 === r ? t : r] = n[t]
					}
					)
						, o = this && this.__exportStar || function(e, n) {
							for (var t in e)
									"default" === t || Object.prototype.hasOwnProperty.call(n, t) || r(n, e, t)
					}
					;
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					o(t(20), n),
					o(t(8), n)
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.teams = n.appEntity = n.files = n.remoteCamera = n.meetingRoom = n.conversations = n.registerUserSettingsChangeHandler = n.uploadCustomApp = n.registerCustomHandler = n.sendCustomEvent = n.showNotification = n.sendCustomMessage = n.openFilePreview = n.getUserJoinedTeams = n.getConfigSetting = n.getChatMembers = n.exitFullscreen = n.enterFullscreen = n.UserSettingTypes = n.ViewerActionTypes = n.NotificationTypes = n.logs = n.bot = void 0;
					var r = t(21);
					Object.defineProperty(n, "bot", {
							enumerable: !0,
							get: function() {
									return r.bot
							}
					});
					var o = t(13);
					Object.defineProperty(n, "logs", {
							enumerable: !0,
							get: function() {
									return o.logs
							}
					});
					var i = t(36);
					Object.defineProperty(n, "NotificationTypes", {
							enumerable: !0,
							get: function() {
									return i.NotificationTypes
							}
					}),
					Object.defineProperty(n, "ViewerActionTypes", {
							enumerable: !0,
							get: function() {
									return i.ViewerActionTypes
							}
					}),
					Object.defineProperty(n, "UserSettingTypes", {
							enumerable: !0,
							get: function() {
									return i.UserSettingTypes
							}
					});
					var a = t(14);
					Object.defineProperty(n, "enterFullscreen", {
							enumerable: !0,
							get: function() {
									return a.enterFullscreen
							}
					}),
					Object.defineProperty(n, "exitFullscreen", {
							enumerable: !0,
							get: function() {
									return a.exitFullscreen
							}
					}),
					Object.defineProperty(n, "getChatMembers", {
							enumerable: !0,
							get: function() {
									return a.getChatMembers
							}
					}),
					Object.defineProperty(n, "getConfigSetting", {
							enumerable: !0,
							get: function() {
									return a.getConfigSetting
							}
					}),
					Object.defineProperty(n, "getUserJoinedTeams", {
							enumerable: !0,
							get: function() {
									return a.getUserJoinedTeams
							}
					}),
					Object.defineProperty(n, "openFilePreview", {
							enumerable: !0,
							get: function() {
									return a.openFilePreview
							}
					}),
					Object.defineProperty(n, "sendCustomMessage", {
							enumerable: !0,
							get: function() {
									return a.sendCustomMessage
							}
					}),
					Object.defineProperty(n, "showNotification", {
							enumerable: !0,
							get: function() {
									return a.showNotification
							}
					}),
					Object.defineProperty(n, "sendCustomEvent", {
							enumerable: !0,
							get: function() {
									return a.sendCustomEvent
							}
					}),
					Object.defineProperty(n, "registerCustomHandler", {
							enumerable: !0,
							get: function() {
									return a.registerCustomHandler
							}
					}),
					Object.defineProperty(n, "uploadCustomApp", {
							enumerable: !0,
							get: function() {
									return a.uploadCustomApp
							}
					}),
					Object.defineProperty(n, "registerUserSettingsChangeHandler", {
							enumerable: !0,
							get: function() {
									return a.registerUserSettingsChangeHandler
							}
					});
					var s = t(37);
					Object.defineProperty(n, "conversations", {
							enumerable: !0,
							get: function() {
									return s.conversations
							}
					});
					var l = t(38);
					Object.defineProperty(n, "meetingRoom", {
							enumerable: !0,
							get: function() {
									return l.meetingRoom
							}
					});
					var u = t(39);
					Object.defineProperty(n, "remoteCamera", {
							enumerable: !0,
							get: function() {
									return u.remoteCamera
							}
					});
					var d = t(40);
					Object.defineProperty(n, "files", {
							enumerable: !0,
							get: function() {
									return d.files
							}
					});
					var c = t(41);
					Object.defineProperty(n, "appEntity", {
							enumerable: !0,
							get: function() {
									return c.appEntity
							}
					});
					var g = t(42);
					Object.defineProperty(n, "teams", {
							enumerable: !0,
							get: function() {
									return g.teams
							}
					})
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.bot = void 0;
					var r = t(0)
						, o = t(1);
					!function(e) {
							e.sendQuery = function(e, n, t) {
									(0,
									o.ensureInitialized)(),
									(0,
									r.sendMessageToParent)("bot.executeQuery", [e], (function(e, r) {
											(e ? n : t)(r)
									}
									))
							}
							,
							e.getSupportedCommands = function(e, n) {
									(0,
									o.ensureInitialized)(),
									(0,
									r.sendMessageToParent)("bot.getSupportedCommands", (function(t, r) {
											(t ? e : n)(r)
									}
									))
							}
							,
							e.authenticate = function(e, n, t) {
									(0,
									o.ensureInitialized)(),
									(0,
									r.sendMessageToParent)("bot.authenticate", [e], (function(e, r) {
											(e ? n : t)(r)
									}
									))
							}
							,
							function(e) {
									e.Results = "Results",
									e.Auth = "Auth"
							}(e.ResponseType || (e.ResponseType = {}))
					}(n.bot || (n.bot = {}))
			}
			, function(e, n, t) {
					var r = t(23)
						, o = t(24);
					(t = o).v1 = r,
					t.v4 = o,
					e.exports = t
			}
			, function(e, n, t) {
					var r, o, i = t(9), a = t(10), s = 0, l = 0;
					e.exports = function(e, n, t) {
							var u = n && t || 0
								, d = n || []
								, c = (e = e || {}).node || r
								, g = void 0 !== e.clockseq ? e.clockseq : o;
							null != c && null != g || (p = i(),
							null == c && (c = r = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
							null == g && (g = o = 16383 & (p[6] << 8 | p[7])));
							var m = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
								, p = (t = void 0 !== e.nsecs ? e.nsecs : l + 1,
							m - s + (t - l) / 1e4);
							if (p < 0 && void 0 === e.clockseq && (g = g + 1 & 16383),
							1e4 <= (t = (p < 0 || s < m) && void 0 === e.nsecs ? 0 : t))
									throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
							s = m,
							o = g,
							t = (1e4 * (268435455 & (m += 122192928e5)) + (l = t)) % 4294967296,
							d[u++] = t >>> 24 & 255,
							d[u++] = t >>> 16 & 255,
							d[u++] = t >>> 8 & 255,
							d[u++] = 255 & t,
							m = m / 4294967296 * 1e4 & 268435455,
							d[u++] = m >>> 8 & 255,
							d[u++] = 255 & m,
							d[u++] = m >>> 24 & 15 | 16,
							d[u++] = m >>> 16 & 255,
							d[u++] = g >>> 8 | 128,
							d[u++] = 255 & g;
							for (var f = 0; f < 6; ++f)
									d[u + f] = c[f];
							return n || a(d)
					}
			}
			, function(e, n, t) {
					var r = t(9)
						, o = t(10);
					e.exports = function(e, n, t) {
							var i = n && t || 0;
							"string" == typeof e && (n = "binary" === e ? new Array(16) : null,
							e = null);
							var a = (e = e || {}).random || (e.rng || r)();
							if (a[6] = 15 & a[6] | 64,
							a[8] = 63 & a[8] | 128,
							n)
									for (var s = 0; s < 16; ++s)
											n[i + s] = a[s];
							return n || o(a)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.appInitialization = void 0;
					var r = t(1)
						, o = t(4)
						, i = t(0);
					!function(e) {
							e.Messages = {
									AppLoaded: "appInitialization.appLoaded",
									Success: "appInitialization.success",
									Failure: "appInitialization.failure",
									ExpectedFailure: "appInitialization.expectedFailure"
							},
							function(e) {
									e.AuthFailed = "AuthFailed",
									e.Timeout = "Timeout",
									e.Other = "Other"
							}(e.FailedReason || (e.FailedReason = {})),
							function(e) {
									e.PermissionError = "PermissionError",
									e.NotFound = "NotFound",
									e.Throttling = "Throttling",
									e.Offline = "Offline",
									e.Other = "Other"
							}(e.ExpectedFailureReason || (e.ExpectedFailureReason = {})),
							e.notifyAppLoaded = function() {
									(0,
									r.ensureInitialized)(),
									(0,
									i.sendMessageToParent)(e.Messages.AppLoaded, [o.version])
							}
							,
							e.notifySuccess = function() {
									(0,
									r.ensureInitialized)(),
									(0,
									i.sendMessageToParent)(e.Messages.Success, [o.version])
							}
							,
							e.notifyFailure = function(n) {
									(0,
									r.ensureInitialized)(),
									(0,
									i.sendMessageToParent)(e.Messages.Failure, [n.reason, n.message])
							}
							,
							e.notifyExpectedFailure = function(n) {
									(0,
									r.ensureInitialized)(),
									(0,
									i.sendMessageToParent)(e.Messages.ExpectedFailure, [n.reason, n.message])
							}
					}(n.appInitialization || (n.appInitialization = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.initializeWithFrameContext = n.setFrameContext = n.executeDeepLink = n.shareDeepLink = n.getMruTabInstances = n.getTabInstances = n.registerChangeSettingsHandler = n.registerFocusEnterHandler = n.registerBeforeUnloadHandler = n.registerOnLoadHandler = n.registerBackButtonHandler = n.registerAppButtonHoverLeaveHandler = n.registerAppButtonHoverEnterHandler = n.registerAppButtonClickHandler = n.registerFullScreenHandler = n.registerOnThemeChangeHandler = n.getContext = n.print = n.enablePrintCapability = n._uninitialize = n._initialize = n.initialize = void 0;
					var r = t(1)
						, o = t(7)
						, i = t(4)
						, a = t(12)
						, s = t(5)
						, l = t(13)
						, u = t(2)
						, d = t(0)
						, c = t(11)
						, g = t(14)
						, m = t(15)
						, p = t(3);
					function f(e, n) {
							o.GlobalVars.initializeCalled || (o.GlobalVars.initializeCalled = !0,
							p.initializeHandlers(),
							(0,
							d.initializeCommunication)((function(e, n, t) {
									void 0 === t && (t = i.defaultSDKVersionForCompatCheck),
									o.GlobalVars.frameContext = e,
									o.GlobalVars.hostClientType = n,
									o.GlobalVars.clientSupportedSDKVersion = t,
									o.GlobalVars.initializeCallbacks.forEach((function(e) {
											return e()
									}
									)),
									o.GlobalVars.initializeCallbacks = [],
									o.GlobalVars.initializeCompleted = !0
							}
							), n),
							c.authentication.initialize(),
							a.settings.initialize(),
							m.menus.initialize(),
							(0,
							g.initializePrivateApis)()),
							Array.isArray(n) && (0,
							r.processAdditionalValidOrigins)(n),
							e && (o.GlobalVars.initializeCompleted ? e() : o.GlobalVars.initializeCallbacks.push(e))
					}
					function C() {
							window.print()
					}
					function h(e) {
							(0,
							r.ensureInitialized)(),
							p.registerOnThemeChangeHandler(e)
					}
					function b(e) {
							(0,
							r.ensureInitialized)(),
							p.registerHandler("fullScreenChange", e)
					}
					function v(e) {
							(0,
							r.ensureInitialized)(),
							p.registerBackButtonHandler(e)
					}
					function y(e) {
							(0,
							r.ensureInitialized)(),
							p.registerOnLoadHandler(e)
					}
					function P(e) {
							(0,
							r.ensureInitialized)(),
							p.registerBeforeUnloadHandler(e)
					}
					function T(e) {
							(0,
							r.ensureInitialized)(),
							p.registerFocusEnterHandler(e)
					}
					function w(e) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content),
							(0,
							d.sendMessageToParent)("setFrameContext", [e])
					}
					n.initialize = f,
					n._initialize = function(e) {
							d.Communication.currentWindow = e
					}
					,
					n._uninitialize = function() {
							o.GlobalVars.initializeCalled && (o.GlobalVars.frameContext && (h(null),
							b(null),
							v(null),
							P(null),
							T(null),
							y(null),
							l.logs.registerGetLogHandler(null)),
							o.GlobalVars.frameContext === u.FrameContexts.settings && a.settings.registerOnSaveHandler(null),
							o.GlobalVars.frameContext === u.FrameContexts.remove && a.settings.registerOnRemoveHandler(null),
							o.GlobalVars.initializeCalled = !1,
							o.GlobalVars.initializeCompleted = !1,
							o.GlobalVars.initializeCallbacks = [],
							o.GlobalVars.additionalValidOrigins = [],
							o.GlobalVars.frameContext = null,
							o.GlobalVars.hostClientType = null,
							(o.GlobalVars.isFramelessWindow = !1,
							d.uninitializeCommunication)())
					}
					,
					n.enablePrintCapability = function() {
							o.GlobalVars.printCapabilityEnabled || (o.GlobalVars.printCapabilityEnabled = !0,
							(0,
							r.ensureInitialized)(),
							document.addEventListener("keydown", (function(e) {
									(e.ctrlKey || e.metaKey) && 80 === e.keyCode && (C(),
									e.cancelBubble = !0,
									e.preventDefault(),
									e.stopImmediatePropagation())
							}
							)))
					}
					,
					n.print = C,
					n.getContext = function(e) {
							(0,
							r.ensureInitialized)(),
							(0,
							d.sendMessageToParent)("getContext", (function(n) {
									n.frameContext || (n.frameContext = o.GlobalVars.frameContext),
									e(n)
							}
							))
					}
					,
					n.registerOnThemeChangeHandler = h,
					n.registerFullScreenHandler = b,
					n.registerAppButtonClickHandler = function(e) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content),
							p.registerHandler("appButtonClick", e)
					}
					,
					n.registerAppButtonHoverEnterHandler = function(e) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content),
							p.registerHandler("appButtonHoverEnter", e)
					}
					,
					n.registerAppButtonHoverLeaveHandler = function(e) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content),
							p.registerHandler("appButtonHoverLeave", e)
					}
					,
					n.registerBackButtonHandler = v,
					n.registerOnLoadHandler = y,
					n.registerBeforeUnloadHandler = P,
					n.registerFocusEnterHandler = T,
					n.registerChangeSettingsHandler = function(e) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content),
							p.registerHandler("changeSettings", e)
					}
					,
					n.getTabInstances = function(e, n) {
							(0,
							r.ensureInitialized)(),
							(0,
							d.sendMessageToParent)("getTabInstances", [n], e)
					}
					,
					n.getMruTabInstances = function(e, n) {
							(0,
							r.ensureInitialized)(),
							(0,
							d.sendMessageToParent)("getMruTabInstances", [n], e)
					}
					,
					n.shareDeepLink = function(e) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content, u.FrameContexts.sidePanel, u.FrameContexts.meetingStage),
							(0,
							d.sendMessageToParent)("shareDeepLink", [e.subEntityId, e.subEntityLabel, e.subEntityWebUrl])
					}
					,
					n.executeDeepLink = function(e, n) {
							(0,
							r.ensureInitialized)(u.FrameContexts.content, u.FrameContexts.sidePanel, u.FrameContexts.settings, u.FrameContexts.task, u.FrameContexts.stage, u.FrameContexts.meetingStage),
							(0,
							d.sendMessageToParent)("executeDeepLink", [e], n || (0,
							s.getGenericOnCompleteHandler)())
					}
					,
					n.setFrameContext = w,
					n.initializeWithFrameContext = function(e, n, t) {
							f(n, t),
							w(e)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.navigateBack = n.navigateCrossDomain = n.navigateToTab = n.returnFocus = void 0;
					var r = t(1)
						, o = t(5)
						, i = t(2)
						, a = t(0);
					n.returnFocus = function(e) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)("returnFocus", [e])
					}
					,
					n.navigateToTab = function(e, n) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)("navigateToTab", [e], n || (0,
							o.getGenericOnCompleteHandler)("Invalid internalTabInstanceId and/or channelId were/was provided"))
					}
					,
					n.navigateCrossDomain = function(e, n) {
							(0,
							r.ensureInitialized)(i.FrameContexts.content, i.FrameContexts.sidePanel, i.FrameContexts.settings, i.FrameContexts.remove, i.FrameContexts.task, i.FrameContexts.stage, i.FrameContexts.meetingStage),
							(0,
							a.sendMessageToParent)("navigateCrossDomain", [e], n || (0,
							o.getGenericOnCompleteHandler)("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest."))
					}
					,
					n.navigateBack = function(e) {
							(0,
							r.ensureInitialized)(),
							(0,
							a.sendMessageToParent)("navigateBack", [], e || (0,
							o.getGenericOnCompleteHandler)("Back navigation is not supported in the current client or context."))
					}
			}
			, function(e, n, t) {
					"use strict";
					var r = this && this.__rest || function(e, n) {
							var t = {};
							for (o in e)
									Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
							if (null != e && "function" == typeof Object.getOwnPropertySymbols)
									for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
											n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]]);
							return t
					}
					;
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.tasks = void 0;
					var o = t(2)
						, i = t(16)
						, a = t(0)
						, s = t(1);
					!function(e) {
							e.startTask = function(e, n) {
									return (0,
									s.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.sidePanel, o.FrameContexts.meetingStage),
									(0,
									a.sendMessageToParent)("tasks.startTask", [e], n),
									new i.ChildAppWindow
							}
							,
							e.updateTask = function(e) {
									(0,
									s.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.sidePanel, o.FrameContexts.task, o.FrameContexts.meetingStage),
									e.width,
									e.height;
									var n = r(e, ["width", "height"]);
									if (Object.keys(n).length)
											throw new Error("updateTask requires a taskInfo argument containing only width and height");
									(0,
									a.sendMessageToParent)("tasks.updateTask", [e])
							}
							,
							e.submitTask = function(e, n) {
									(0,
									s.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.sidePanel, o.FrameContexts.task, o.FrameContexts.meetingStage),
									(0,
									a.sendMessageToParent)("tasks.completeTask", [e, Array.isArray(n) ? n : [n]])
							}
					}(n.tasks || (n.tasks = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.location = void 0;
					var r = t(6)
						, o = t(1)
						, i = t(2)
						, a = t(0)
						, s = t(4);
					!function(e) {
							e.getLocation = function(e, n) {
									if (!n)
											throw new Error("[location.getLocation] Callback cannot be null");
									(0,
									o.ensureInitialized)(i.FrameContexts.content, i.FrameContexts.task),
									(0,
									o.isAPISupportedByPlatform)(s.locationAPIsRequiredVersion) ? e ? (0,
									a.sendMessageToParent)("location.getLocation", [e], n) : n({
											errorCode: r.ErrorCode.INVALID_ARGUMENTS
									}, void 0) : n({
											errorCode: r.ErrorCode.OLD_PLATFORM
									}, void 0)
							}
							,
							e.showLocation = function(e, n) {
									if (!n)
											throw new Error("[location.showLocation] Callback cannot be null");
									(0,
									o.ensureInitialized)(i.FrameContexts.content, i.FrameContexts.task),
									(0,
									o.isAPISupportedByPlatform)(s.locationAPIsRequiredVersion) ? e ? (0,
									a.sendMessageToParent)("location.showLocation", [e], n) : n({
											errorCode: r.ErrorCode.INVALID_ARGUMENTS
									}, void 0) : n({
											errorCode: r.ErrorCode.OLD_PLATFORM
									}, void 0)
							}
					}(n.location || (n.location = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.meeting = void 0;
					var r = t(0)
						, o = t(3)
						, i = t(1)
						, a = t(2);
					!function(e) {
							!function(e) {
									e.Unknown = "Unknown",
									e.Adhoc = "Adhoc",
									e.Scheduled = "Scheduled",
									e.Recurring = "Recurring",
									e.Broadcast = "Broadcast",
									e.MeetNow = "MeetNow"
							}(e.MeetingType || (e.MeetingType = {})),
							function(e) {
									e.OneOnOneCall = "oneOnOneCall",
									e.GroupCall = "groupCall"
							}(e.CallType || (e.CallType = {})),
							e.getIncomingClientAudioState = function(e) {
									if (!e)
											throw new Error("[get incoming client audio state] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("getIncomingClientAudioState", e)
							}
							,
							e.toggleIncomingClientAudio = function(e) {
									if (!e)
											throw new Error("[toggle incoming client audio] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("toggleIncomingClientAudio", e)
							}
							,
							e.getMeetingDetails = function(e) {
									if (!e)
											throw new Error("[get meeting details] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage, a.FrameContexts.settings, a.FrameContexts.content),
									(0,
									r.sendMessageToParent)("meeting.getMeetingDetails", e)
							}
							,
							e.getAuthenticationTokenForAnonymousUser = function(e) {
									if (!e)
											throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("meeting.getAuthenticationTokenForAnonymousUser", e)
							}
							,
							e.getLiveStreamState = function(e) {
									if (!e)
											throw new Error("[get live stream state] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel),
									(0,
									r.sendMessageToParent)("meeting.getLiveStreamState", e)
							}
							,
							e.requestStartLiveStreaming = function(e, n, t) {
									if (!e)
											throw new Error("[request start live streaming] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel),
									(0,
									r.sendMessageToParent)("meeting.requestStartLiveStreaming", [n, t], e)
							}
							,
							e.requestStopLiveStreaming = function(e) {
									if (!e)
											throw new Error("[request stop live streaming] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel),
									(0,
									r.sendMessageToParent)("meeting.requestStopLiveStreaming", e)
							}
							,
							e.registerLiveStreamChangedHandler = function(e) {
									if (!e)
											throw new Error("[register live stream changed handler] Handler cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel),
									(0,
									o.registerHandler)("meeting.liveStreamChanged", e)
							}
							,
							e.shareAppContentToStage = function(e, n) {
									if (!e)
											throw new Error("[share app content to stage] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("meeting.shareAppContentToStage", [n], e)
							}
							,
							e.getAppContentStageSharingCapabilities = function(e) {
									if (!e)
											throw new Error("[get app content stage sharing capabilities] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("meeting.getAppContentStageSharingCapabilities", e)
							}
							,
							e.stopSharingAppContentToStage = function(e) {
									if (!e)
											throw new Error("[stop sharing app content to stage] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("meeting.stopSharingAppContentToStage", e)
							}
							,
							e.getAppContentStageSharingState = function(e) {
									if (!e)
											throw new Error("[get app content stage sharing state] Callback cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									r.sendMessageToParent)("meeting.getAppContentStageSharingState", e)
							}
							,
							e.registerSpeakingStateChangeHandler = function(e) {
									if (!e)
											throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");
									(0,
									i.ensureInitialized)(a.FrameContexts.sidePanel, a.FrameContexts.meetingStage),
									(0,
									o.registerHandler)("meeting.speakingStateChanged", e)
							}
					}(n.meeting || (n.meeting = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.monetization = void 0;
					var r = t(0)
						, o = t(1)
						, i = t(2);
					(n.monetization || (n.monetization = {})).openPurchaseExperience = function(e, n) {
							if (!e)
									throw new Error("[open purchase experience] Callback cannot be null");
							(0,
							o.ensureInitialized)(i.FrameContexts.content),
							(0,
							r.sendMessageToParent)("monetization.openPurchaseExperience", [n], e)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.people = void 0;
					var r = t(1)
						, o = t(2)
						, i = t(6)
						, a = t(18)
						, s = t(0)
						, l = t(4);
					(n.people || (n.people = {})).selectPeople = function(e, n) {
							if (!e)
									throw new Error("[people picker] Callback cannot be null");
							(0,
							r.ensureInitialized)(o.FrameContexts.content, o.FrameContexts.task, o.FrameContexts.settings),
							(0,
							r.isAPISupportedByPlatform)(l.peoplePickerRequiredVersion) ? (0,
							a.validatePeoplePickerInput)(n) ? (0,
							s.sendMessageToParent)("people.selectPeople", [n], e) : e({
									errorCode: i.ErrorCode.INVALID_ARGUMENTS
							}, null) : e({
									errorCode: i.ErrorCode.OLD_PLATFORM
							}, void 0)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.video = void 0;
					var r = t(0)
						, o = t(1)
						, i = t(2)
						, a = t(3);
					!function(e) {
							function n() {
									(0,
									r.sendMessageToParent)("video.videoFrameProcessed")
							}
							function t(e) {
									(0,
									r.sendMessageToParent)("video.notifyError", [e])
							}
							!function(e) {
									e[e.NV12 = 0] = "NV12"
							}(e.VideoFrameFormat || (e.VideoFrameFormat = {})),
							function(e) {
									e[e.EffectChanged = 0] = "EffectChanged",
									e[e.EffectDisabled = 1] = "EffectDisabled"
							}(e.EffectChangeType || (e.EffectChangeType = {})),
							e.registerForVideoFrame = function(e, s) {
									(0,
									o.ensureInitialized)(i.FrameContexts.sidePanel),
									(0,
									a.registerHandler)("video.newVideoFrame", (function(r) {
											void 0 !== r && e(r, n, t)
									}
									)),
									(0,
									r.sendMessageToParent)("video.registerForVideoFrame", [s])
							}
							,
							e.notifySelectedVideoEffectChanged = function(e, n) {
									(0,
									o.ensureInitialized)(i.FrameContexts.sidePanel),
									(0,
									r.sendMessageToParent)("video.videoEffectChanged", [e, n])
							}
							,
							e.registerForVideoEffect = function(e) {
									(0,
									o.ensureInitialized)(i.FrameContexts.sidePanel),
									(0,
									a.registerHandler)("video.effectParameterChange", e)
							}
					}(n.video || (n.video = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.sharing = void 0;
					var r = t(1)
						, o = t(0)
						, i = t(6)
						, a = t(2);
					!function(e) {
							function n(e, n) {
									if (e && e.content && e.content.length)
											return 1;
									n && n({
											errorCode: i.ErrorCode.INVALID_ARGUMENTS,
											message: "Shared content is missing"
									})
							}
							function t(e, n) {
									if (e.content.some((function(e) {
											return !e.type
									}
									)))
											n && n({
													errorCode: i.ErrorCode.INVALID_ARGUMENTS,
													message: "Shared content type cannot be undefined"
											});
									else {
											if (!e.content.some((function(n) {
													return n.type !== e.content[0].type
											}
											)))
													return 1;
											n && n({
													errorCode: i.ErrorCode.INVALID_ARGUMENTS,
													message: "Shared content must be of the same type"
											})
									}
							}
							function s(e, n) {
									if ("URL" === e.content[0].type) {
											if (!e.content.some((function(e) {
													return !e.url
											}
											)))
													return 1;
											n && n({
													errorCode: i.ErrorCode.INVALID_ARGUMENTS,
													message: "URLs are required for URL content types"
											})
									} else
											n && n({
													errorCode: i.ErrorCode.INVALID_ARGUMENTS,
													message: "Content type is unsupported"
											})
							}
							e.SharingAPIMessages = {
									shareWebContent: "sharing.shareWebContent"
							},
							e.shareWebContent = function(i, l) {
									n(i, l) && t(i, l) && s(i, l) && ((0,
									r.ensureInitialized)(a.FrameContexts.content, a.FrameContexts.sidePanel, a.FrameContexts.task, a.FrameContexts.stage, a.FrameContexts.meetingStage),
									(0,
									o.sendMessageToParent)(e.SharingAPIMessages.shareWebContent, [i], l))
							}
					}(n.sharing || (n.sharing = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.stageView = void 0;
					var r = t(0)
						, o = t(1)
						, i = t(2);
					(n.stageView || (n.stageView = {})).open = function(e, n) {
							if ((0,
							o.ensureInitialized)(i.FrameContexts.content),
							!e)
									throw new Error("[stageView.open] Stage view params cannot be null");
							(0,
							r.sendMessageToParent)("stageView.open", [e], n)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.UserSettingTypes = n.ViewerActionTypes = n.NotificationTypes = void 0,
					function(e) {
							e.fileDownloadStart = "fileDownloadStart",
							e.fileDownloadComplete = "fileDownloadComplete"
					}(n.NotificationTypes || (n.NotificationTypes = {})),
					function(e) {
							e.view = "view",
							e.edit = "edit",
							e.editNew = "editNew"
					}(n.ViewerActionTypes || (n.ViewerActionTypes = {})),
					function(e) {
							e.fileOpenPreference = "fileOpenPreference",
							e.theme = "theme"
					}(n.UserSettingTypes || (n.UserSettingTypes = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.conversations = void 0;
					var r = t(1)
						, o = t(2)
						, i = t(0)
						, a = t(3);
					!function(e) {
							e.openConversation = function(e) {
									(0,
									r.ensureInitialized)(o.FrameContexts.content),
									(0,
									i.sendMessageToParent)("conversations.openConversation", [{
											title: e.title,
											subEntityId: e.subEntityId,
											conversationId: e.conversationId,
											channelId: e.channelId,
											entityId: e.entityId
									}], (function(e, n) {
											if (!e)
													throw new Error(n)
									}
									)),
									e.onStartConversation && (0,
									a.registerHandler)("startConversation", (function(n, t, r, o) {
											return e.onStartConversation({
													subEntityId: n,
													conversationId: t,
													channelId: r,
													entityId: o
											})
									}
									)),
									e.onCloseConversation && (0,
									a.registerHandler)("closeConversation", (function(n, t, r, o) {
											return e.onCloseConversation({
													subEntityId: n,
													conversationId: t,
													channelId: r,
													entityId: o
											})
									}
									))
							}
							,
							e.closeConversation = function() {
									(0,
									r.ensureInitialized)(o.FrameContexts.content),
									(0,
									i.sendMessageToParent)("conversations.closeConversation"),
									(0,
									a.removeHandler)("startConversation"),
									(0,
									a.removeHandler)("closeConversation")
							}
					}(n.conversations || (n.conversations = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.meetingRoom = void 0;
					var r = t(1)
						, o = t(0)
						, i = t(3);
					!function(e) {
							!function(e) {
									e.toggleMute = "toggleMute",
									e.toggleCamera = "toggleCamera",
									e.toggleCaptions = "toggleCaptions",
									e.volume = "volume",
									e.showVideoGallery = "showVideoGallery",
									e.showContent = "showContent",
									e.showVideoGalleryAndContent = "showVideoGalleryAndContent",
									e.showLargeGallery = "showLargeGallery",
									e.showTogether = "showTogether",
									e.leaveMeeting = "leaveMeeting"
							}(e.Capability || (e.Capability = {})),
							e.getPairedMeetingRoomInfo = function(e) {
									(0,
									r.ensureInitialized)(),
									(0,
									o.sendMessageToParent)("meetingRoom.getPairedMeetingRoomInfo", e)
							}
							,
							e.sendCommandToPairedMeetingRoom = function(e, n) {
									if (!e || 0 == e.length)
											throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");
									if (!n)
											throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");
									(0,
									r.ensureInitialized)(),
									(0,
									o.sendMessageToParent)("meetingRoom.sendCommandToPairedMeetingRoom", [e], n)
							}
							,
							e.registerMeetingRoomCapabilitiesUpdateHandler = function(e) {
									if (!e)
											throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");
									(0,
									r.ensureInitialized)(),
									(0,
									i.registerHandler)("meetingRoom.meetingRoomCapabilitiesUpdate", (function(n) {
											(0,
											r.ensureInitialized)(),
											e(n)
									}
									))
							}
							,
							e.registerMeetingRoomStatesUpdateHandler = function(e) {
									if (!e)
											throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");
									(0,
									r.ensureInitialized)(),
									(0,
									i.registerHandler)("meetingRoom.meetingRoomStatesUpdate", (function(n) {
											(0,
											r.ensureInitialized)(),
											e(n)
									}
									))
							}
					}(n.meetingRoom || (n.meetingRoom = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.remoteCamera = void 0;
					var r = t(1)
						, o = t(2)
						, i = t(0)
						, a = t(3);
					!function(e) {
							!function(e) {
									e.Reset = "Reset",
									e.ZoomIn = "ZoomIn",
									e.ZoomOut = "ZoomOut",
									e.PanLeft = "PanLeft",
									e.PanRight = "PanRight",
									e.TiltUp = "TiltUp",
									e.TiltDown = "TiltDown"
							}(e.ControlCommand || (e.ControlCommand = {})),
							function(e) {
									e[e.CommandResetError = 0] = "CommandResetError",
									e[e.CommandZoomInError = 1] = "CommandZoomInError",
									e[e.CommandZoomOutError = 2] = "CommandZoomOutError",
									e[e.CommandPanLeftError = 3] = "CommandPanLeftError",
									e[e.CommandPanRightError = 4] = "CommandPanRightError",
									e[e.CommandTiltUpError = 5] = "CommandTiltUpError",
									e[e.CommandTiltDownError = 6] = "CommandTiltDownError",
									e[e.SendDataError = 7] = "SendDataError"
							}(e.ErrorReason || (e.ErrorReason = {})),
							function(e) {
									e[e.None = 0] = "None",
									e[e.ControlDenied = 1] = "ControlDenied",
									e[e.ControlNoResponse = 2] = "ControlNoResponse",
									e[e.ControlBusy = 3] = "ControlBusy",
									e[e.AckTimeout = 4] = "AckTimeout",
									e[e.ControlTerminated = 5] = "ControlTerminated",
									e[e.ControllerTerminated = 6] = "ControllerTerminated",
									e[e.DataChannelError = 7] = "DataChannelError",
									e[e.ControllerCancelled = 8] = "ControllerCancelled",
									e[e.ControlDisabled = 9] = "ControlDisabled",
									e[e.ControlTerminatedToAllowOtherController = 10] = "ControlTerminatedToAllowOtherController"
							}(e.SessionTerminatedReason || (e.SessionTerminatedReason = {})),
							e.getCapableParticipants = function(e) {
									if (!e)
											throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									i.sendMessageToParent)("remoteCamera.getCapableParticipants", e)
							}
							,
							e.requestControl = function(e, n) {
									if (!e)
											throw new Error("[remoteCamera.requestControl] Participant cannot be null");
									if (!n)
											throw new Error("[remoteCamera.requestControl] Callback cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									i.sendMessageToParent)("remoteCamera.requestControl", [e], n)
							}
							,
							e.sendControlCommand = function(e, n) {
									if (!e)
											throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");
									if (!n)
											throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									i.sendMessageToParent)("remoteCamera.sendControlCommand", [e], n)
							}
							,
							e.terminateSession = function(e) {
									if (!e)
											throw new Error("[remoteCamera.terminateSession] Callback cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									i.sendMessageToParent)("remoteCamera.terminateSession", e)
							}
							,
							e.registerOnCapableParticipantsChangeHandler = function(e) {
									if (!e)
											throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									a.registerHandler)("remoteCamera.capableParticipantsChange", e)
							}
							,
							e.registerOnErrorHandler = function(e) {
									if (!e)
											throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									a.registerHandler)("remoteCamera.handlerError", e)
							}
							,
							e.registerOnDeviceStateChangeHandler = function(e) {
									if (!e)
											throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									a.registerHandler)("remoteCamera.deviceStateChange", e)
							}
							,
							e.registerOnSessionStatusChangeHandler = function(e) {
									if (!e)
											throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");
									(0,
									r.ensureInitialized)(o.FrameContexts.sidePanel),
									(0,
									a.registerHandler)("remoteCamera.sessionStatusChange", e)
							}
					}(n.remoteCamera || (n.remoteCamera = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.files = void 0;
					var r = t(0)
						, o = t(1)
						, i = t(8);
					!function(e) {
							!function(e) {
									e.Dropbox = "DROPBOX",
									e.Box = "BOX",
									e.Sharefile = "SHAREFILE",
									e.GoogleDrive = "GOOGLEDRIVE",
									e.Egnyte = "EGNYTE",
									e.SharePoint = "SharePoint"
							}(e.CloudStorageProvider || (e.CloudStorageProvider = {})),
							function(e) {
									e[e.Sharepoint = 0] = "Sharepoint",
									e[e.WopiIntegration = 1] = "WopiIntegration",
									e[e.Google = 2] = "Google",
									e[e.OneDrive = 3] = "OneDrive",
									e[e.Recent = 4] = "Recent",
									e[e.Aggregate = 5] = "Aggregate",
									e[e.FileSystem = 6] = "FileSystem",
									e[e.Search = 7] = "Search",
									e[e.AllFiles = 8] = "AllFiles",
									e[e.SharedWithMe = 9] = "SharedWithMe"
							}(e.CloudStorageProviderType || (e.CloudStorageProviderType = {})),
							(e.SpecialDocumentLibraryType || (e.SpecialDocumentLibraryType = {})).ClassMaterials = "classMaterials",
							(e.DocumentLibraryAccessType || (e.DocumentLibraryAccessType = {})).Readonly = "readonly",
							function(e) {
									e.Downloaded = "Downloaded",
									e.Downloading = "Downloading",
									e.Failed = "Failed"
							}(e.FileDownloadStatus || (e.FileDownloadStatus = {})),
							e.getCloudStorageFolders = function(e, n) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e || 0 === e.length)
											throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");
									if (!n)
											throw new Error("[files.getCloudStorageFolders] Callback cannot be null");
									(0,
									r.sendMessageToParent)("files.getCloudStorageFolders", [e], n)
							}
							,
							e.addCloudStorageFolder = function(e, n) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e || 0 === e.length)
											throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");
									if (!n)
											throw new Error("[files.addCloudStorageFolder] Callback cannot be null");
									(0,
									r.sendMessageToParent)("files.addCloudStorageFolder", [e], n)
							}
							,
							e.deleteCloudStorageFolder = function(e, n, t) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e)
											throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");
									if (!n)
											throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");
									if (!t)
											throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");
									(0,
									r.sendMessageToParent)("files.deleteCloudStorageFolder", [e, n], t)
							}
							,
							e.getCloudStorageFolderContents = function(e, n, t) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e || !n)
											throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");
									if (!t)
											throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");
									if ("isSubdirectory"in e && !e.isSubdirectory)
											throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");
									(0,
									r.sendMessageToParent)("files.getCloudStorageFolderContents", [e, n], t)
							}
							,
							e.openCloudStorageFile = function(e, n, t) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e || !n)
											throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");
									if (e.isSubdirectory)
											throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");
									(0,
									r.sendMessageToParent)("files.openCloudStorageFile", [e, n, t])
							}
							,
							e.getExternalProviders = function(e, n) {
									if (void 0 === e && (e = !1),
									(0,
									o.ensureInitialized)(i.FrameContexts.content),
									!n)
											throw new Error("[files.getExternalProviders] Callback cannot be null");
									(0,
									r.sendMessageToParent)("files.getExternalProviders", [e], n)
							}
							,
							e.copyMoveFiles = function(e, n, t, a, s, l) {
									if (void 0 === s && (s = !1),
									(0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e || 0 === e.length)
											throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");
									if (!n)
											throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");
									if (!t)
											throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");
									if (!a)
											throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");
									if (!l)
											throw new Error("[files.copyMoveFiles] callback cannot be null");
									(0,
									r.sendMessageToParent)("files.copyMoveFiles", [e, n, t, a, s], l)
							}
							,
							e.getFileDownloads = function(e) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e)
											throw new Error("[files.getFileDownloads] Callback cannot be null");
									(0,
									r.sendMessageToParent)("files.getFileDownloads", [], e)
							}
							,
							e.openDownloadFolder = function(e, n) {
									if (void 0 === e && (e = void 0),
									(0,
									o.ensureInitialized)(i.FrameContexts.content),
									!n)
											throw new Error("[files.openDownloadFolder] Callback cannot be null");
									(0,
									r.sendMessageToParent)("files.openDownloadFolder", [e], n)
							}
					}(n.files || (n.files = {}))
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.appEntity = void 0;
					var r = t(0)
						, o = t(1)
						, i = t(8);
					(n.appEntity || (n.appEntity = {})).selectAppEntity = function(e, n, t, a) {
							if ((0,
							o.ensureInitialized)(i.FrameContexts.content),
							!e || 0 == e.length)
									throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");
							if (!a)
									throw new Error("[appEntity.selectAppEntity] Callback cannot be null");
							(0,
							r.sendMessageToParent)("appEntity.selectAppEntity", [e, n, t], a)
					}
			}
			, function(e, n, t) {
					"use strict";
					Object.defineProperty(n, "__esModule", {
							value: !0
					}),
					n.teams = void 0;
					var r = t(0)
						, o = t(1)
						, i = t(8);
					!function(e) {
							!function(e) {
									e[e.Regular = 0] = "Regular",
									e[e.Private = 1] = "Private",
									e[e.Shared = 2] = "Shared"
							}(e.ChannelType || (e.ChannelType = {})),
							e.getTeamChannels = function(e, n) {
									if ((0,
									o.ensureInitialized)(i.FrameContexts.content),
									!e)
											throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");
									if (!n)
											throw new Error("[teams.getTeamChannels] Callback cannot be null");
									(0,
									r.sendMessageToParent)("teams.getTeamChannels", [e], n)
							}
							,
							e.refreshSiteUrl = function(e, n) {
									if ((0,
									o.ensureInitialized)(),
									!e)
											throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");
									if (!n)
											throw new Error("[teams.refreshSiteUrl] Callback cannot be null");
									(0,
									r.sendMessageToParent)("teams.refreshSiteUrl", [e], n)
							}
					}(n.teams || (n.teams = {}))
			}
			])
	}
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/5288.cdd62b6b9190f8aa2288.chunk.js.map
