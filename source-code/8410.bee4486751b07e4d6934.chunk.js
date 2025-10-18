/*! For license information please see 8410.bee4486751b07e4d6934.chunk.js.LICENSE.txt */
(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[8410], {
	167874: function() {
			Prism.languages.json = {
					property: {
							pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
							lookbehind: !0,
							greedy: !0
					},
					string: {
							pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
							lookbehind: !0,
							greedy: !0
					},
					comment: {
							pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
							greedy: !0
					},
					number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
					punctuation: /[{}[\],]/,
					operator: /:/,
					boolean: /\b(?:false|true)\b/,
					null: {
							pattern: /\bnull\b/,
							alias: "keyword"
					}
			},
			Prism.languages.webmanifest = Prism.languages.json
	},
	76931: function() {
			!function(e) {
					e.languages.typescript = e.languages.extend("javascript", {
							"class-name": {
									pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
									lookbehind: !0,
									greedy: !0,
									inside: null
							},
							builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
					}),
					e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/),
					delete e.languages.typescript.parameter,
					delete e.languages.typescript["literal-property"];
					var t = e.languages.extend("typescript", {});
					delete t["class-name"],
					e.languages.typescript["class-name"].inside = t,
					e.languages.insertBefore("typescript", "function", {
							decorator: {
									pattern: /@[$\w\xA0-\uFFFF]+/,
									inside: {
											at: {
													pattern: /^@/,
													alias: "operator"
											},
											function: /^[\s\S]+/
									}
							},
							"generic-function": {
									pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
									greedy: !0,
									inside: {
											function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
											generic: {
													pattern: /<[\s\S]+/,
													alias: "class-name",
													inside: t
											}
									}
							}
					}),
					e.languages.ts = e.languages.typescript
			}(Prism)
	},
	65904: function(e, t, n) {
			var r = function(e) {
					var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i
						, n = 0
						, r = {}
						, i = {
							manual: e.Prism && e.Prism.manual,
							disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
							util: {
									encode: function e(t) {
											return t instanceof a ? new a(t.type,e(t.content),t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
									},
									type: function(e) {
											return Object.prototype.toString.call(e).slice(8, -1)
									},
									objId: function(e) {
											return e.__id || Object.defineProperty(e, "__id", {
													value: ++n
											}),
											e.__id
									},
									clone: function e(t, n) {
											var r, a;
											switch (n = n || {},
											i.util.type(t)) {
											case "Object":
													if (a = i.util.objId(t),
													n[a])
															return n[a];
													for (var s in r = {},
													n[a] = r,
													t)
															t.hasOwnProperty(s) && (r[s] = e(t[s], n));
													return r;
											case "Array":
													return a = i.util.objId(t),
													n[a] ? n[a] : (r = [],
													n[a] = r,
													t.forEach((function(t, i) {
															r[i] = e(t, n)
													}
													)),
													r);
											default:
													return t
											}
									},
									getLanguage: function(e) {
											for (; e; ) {
													var n = t.exec(e.className);
													if (n)
															return n[1].toLowerCase();
													e = e.parentElement
											}
											return "none"
									},
									setLanguage: function(e, n) {
											e.className = e.className.replace(RegExp(t, "gi"), ""),
											e.classList.add("language-" + n)
									},
									currentScript: function() {
											if ("undefined" == typeof document)
													return null;
											if (document.currentScript && "SCRIPT" === document.currentScript.tagName)
													return document.currentScript;
											try {
													throw new Error
											} catch (r) {
													var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
													if (e) {
															var t = document.getElementsByTagName("script");
															for (var n in t)
																	if (t[n].src == e)
																			return t[n]
													}
													return null
											}
									},
									isActive: function(e, t, n) {
											for (var r = "no-" + t; e; ) {
													var i = e.classList;
													if (i.contains(t))
															return !0;
													if (i.contains(r))
															return !1;
													e = e.parentElement
											}
											return !!n
									}
							},
							languages: {
									plain: r,
									plaintext: r,
									text: r,
									txt: r,
									extend: function(e, t) {
											var n = i.util.clone(i.languages[e]);
											for (var r in t)
													n[r] = t[r];
											return n
									},
									insertBefore: function(e, t, n, r) {
											var a = (r = r || i.languages)[e]
												, s = {};
											for (var o in a)
													if (a.hasOwnProperty(o)) {
															if (o == t)
																	for (var l in n)
																			n.hasOwnProperty(l) && (s[l] = n[l]);
															n.hasOwnProperty(o) || (s[o] = a[o])
													}
											var u = r[e];
											return r[e] = s,
											i.languages.DFS(i.languages, (function(t, n) {
													n === u && t != e && (this[t] = s)
											}
											)),
											s
									},
									DFS: function e(t, n, r, a) {
											a = a || {};
											var s = i.util.objId;
											for (var o in t)
													if (t.hasOwnProperty(o)) {
															n.call(t, o, t[o], r || o);
															var l = t[o]
																, u = i.util.type(l);
															"Object" !== u || a[s(l)] ? "Array" !== u || a[s(l)] || (a[s(l)] = !0,
															e(l, n, o, a)) : (a[s(l)] = !0,
															e(l, n, null, a))
													}
									}
							},
							plugins: {},
							highlightAll: function(e, t) {
									i.highlightAllUnder(document, e, t)
							},
							highlightAllUnder: function(e, t, n) {
									var r = {
											callback: n,
											container: e,
											selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
									};
									i.hooks.run("before-highlightall", r),
									r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),
									i.hooks.run("before-all-elements-highlight", r);
									for (var a, s = 0; a = r.elements[s++]; )
											i.highlightElement(a, !0 === t, r.callback)
							},
							highlightElement: function(t, n, r) {
									var a = i.util.getLanguage(t)
										, s = i.languages[a];
									i.util.setLanguage(t, a);
									var o = t.parentElement;
									o && "pre" === o.nodeName.toLowerCase() && i.util.setLanguage(o, a);
									var l = {
											element: t,
											language: a,
											grammar: s,
											code: t.textContent
									};
									function u(e) {
											l.highlightedCode = e,
											i.hooks.run("before-insert", l),
											l.element.innerHTML = l.highlightedCode,
											i.hooks.run("after-highlight", l),
											i.hooks.run("complete", l),
											r && r.call(l.element)
									}
									if (i.hooks.run("before-sanity-check", l),
									(o = l.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"),
									!l.code)
											return i.hooks.run("complete", l),
											void (r && r.call(l.element));
									if (i.hooks.run("before-highlight", l),
									l.grammar)
											if (n && e.Worker) {
													var c = new Worker(i.filename);
													c.onmessage = function(e) {
															u(e.data)
													}
													,
													c.postMessage(JSON.stringify({
															language: l.language,
															code: l.code,
															immediateClose: !0
													}))
											} else
													u(i.highlight(l.code, l.grammar, l.language));
									else
											u(i.util.encode(l.code))
							},
							highlight: function(e, t, n) {
									var r = {
											code: e,
											grammar: t,
											language: n
									};
									if (i.hooks.run("before-tokenize", r),
									!r.grammar)
											throw new Error('The language "' + r.language + '" has no grammar.');
									return r.tokens = i.tokenize(r.code, r.grammar),
									i.hooks.run("after-tokenize", r),
									a.stringify(i.util.encode(r.tokens), r.language)
							},
							tokenize: function(e, t) {
									var n = t.rest;
									if (n) {
											for (var r in n)
													t[r] = n[r];
											delete t.rest
									}
									var i = new l;
									return u(i, i.head, e),
									o(e, i, t, i.head, 0),
									function(e) {
											var t = []
												, n = e.head.next;
											for (; n !== e.tail; )
													t.push(n.value),
													n = n.next;
											return t
									}(i)
							},
							hooks: {
									all: {},
									add: function(e, t) {
											var n = i.hooks.all;
											n[e] = n[e] || [],
											n[e].push(t)
									},
									run: function(e, t) {
											var n = i.hooks.all[e];
											if (n && n.length)
													for (var r, a = 0; r = n[a++]; )
															r(t)
									}
							},
							Token: a
					};
					function a(e, t, n, r) {
							this.type = e,
							this.content = t,
							this.alias = n,
							this.length = 0 | (r || "").length
					}
					function s(e, t, n, r) {
							e.lastIndex = t;
							var i = e.exec(n);
							if (i && r && i[1]) {
									var a = i[1].length;
									i.index += a,
									i[0] = i[0].slice(a)
							}
							return i
					}
					function o(e, t, n, r, l, d) {
							for (var p in n)
									if (n.hasOwnProperty(p) && n[p]) {
											var f = n[p];
											f = Array.isArray(f) ? f : [f];
											for (var g = 0; g < f.length; ++g) {
													if (d && d.cause == p + "," + g)
															return;
													var h = f[g]
														, m = h.inside
														, y = !!h.lookbehind
														, b = !!h.greedy
														, v = h.alias;
													if (b && !h.pattern.global) {
															var k = h.pattern.toString().match(/[imsuy]*$/)[0];
															h.pattern = RegExp(h.pattern.source, k + "g")
													}
													for (var x = h.pattern || h, w = r.next, F = l; w !== t.tail && !(d && F >= d.reach); F += w.value.length,
													w = w.next) {
															var A = w.value;
															if (t.length > e.length)
																	return;
															if (!(A instanceof a)) {
																	var $, j = 1;
																	if (b) {
																			if (!($ = s(x, F, e, y)) || $.index >= e.length)
																					break;
																			var _ = $.index
																				, I = $.index + $[0].length
																				, O = F;
																			for (O += w.value.length; _ >= O; )
																					O += (w = w.next).value.length;
																			if (F = O -= w.value.length,
																			w.value instanceof a)
																					continue;
																			for (var S = w; S !== t.tail && (O < I || "string" == typeof S.value); S = S.next)
																					j++,
																					O += S.value.length;
																			j--,
																			A = e.slice(F, O),
																			$.index -= F
																	} else if (!($ = s(x, 0, A, y)))
																			continue;
																	_ = $.index;
																	var E = $[0]
																		, P = A.slice(0, _)
																		, z = A.slice(_ + E.length)
																		, N = F + A.length;
																	d && N > d.reach && (d.reach = N);
																	var D = w.prev;
																	if (P && (D = u(t, D, P),
																	F += P.length),
																	c(t, D, j),
																	w = u(t, D, new a(p,m ? i.tokenize(E, m) : E,v,E)),
																	z && u(t, w, z),
																	j > 1) {
																			var T = {
																					cause: p + "," + g,
																					reach: N
																			};
																			o(e, t, n, w.prev, F, T),
																			d && T.reach > d.reach && (d.reach = T.reach)
																	}
															}
													}
											}
									}
					}
					function l() {
							var e = {
									value: null,
									prev: null,
									next: null
							}
								, t = {
									value: null,
									prev: e,
									next: null
							};
							e.next = t,
							this.head = e,
							this.tail = t,
							this.length = 0
					}
					function u(e, t, n) {
							var r = t.next
								, i = {
									value: n,
									prev: t,
									next: r
							};
							return t.next = i,
							r.prev = i,
							e.length++,
							i
					}
					function c(e, t, n) {
							for (var r = t.next, i = 0; i < n && r !== e.tail; i++)
									r = r.next;
							t.next = r,
							r.prev = t,
							e.length -= i
					}
					if (e.Prism = i,
					a.stringify = function e(t, n) {
							if ("string" == typeof t)
									return t;
							if (Array.isArray(t)) {
									var r = "";
									return t.forEach((function(t) {
											r += e(t, n)
									}
									)),
									r
							}
							var a = {
									type: t.type,
									content: e(t.content, n),
									tag: "span",
									classes: ["token", t.type],
									attributes: {},
									language: n
							}
								, s = t.alias;
							s && (Array.isArray(s) ? Array.prototype.push.apply(a.classes, s) : a.classes.push(s)),
							i.hooks.run("wrap", a);
							var o = "";
							for (var l in a.attributes)
									o += " " + l + '="' + (a.attributes[l] || "").replace(/"/g, "&quot;") + '"';
							return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + o + ">" + a.content + "</" + a.tag + ">"
					}
					,
					!e.document)
							return e.addEventListener ? (i.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
									var n = JSON.parse(t.data)
										, r = n.language
										, a = n.code
										, s = n.immediateClose;
									e.postMessage(i.highlight(a, i.languages[r], r)),
									s && e.close()
							}
							), !1),
							i) : i;
					var d = i.util.currentScript();
					function p() {
							i.manual || i.highlightAll()
					}
					if (d && (i.filename = d.src,
					d.hasAttribute("data-manual") && (i.manual = !0)),
					!i.manual) {
							var f = document.readyState;
							"loading" === f || "interactive" === f && d && d.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16)
					}
					return i
			}("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
			e.exports && (e.exports = r),
			void 0 !== n.g && (n.g.Prism = r),
			r.languages.markup = {
					comment: {
							pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
							greedy: !0
					},
					prolog: {
							pattern: /<\?[\s\S]+?\?>/,
							greedy: !0
					},
					doctype: {
							pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
							greedy: !0,
							inside: {
									"internal-subset": {
											pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
											lookbehind: !0,
											greedy: !0,
											inside: null
									},
									string: {
											pattern: /"[^"]*"|'[^']*'/,
											greedy: !0
									},
									punctuation: /^<!|>$|[[\]]/,
									"doctype-tag": /^DOCTYPE/i,
									name: /[^\s<>'"]+/
							}
					},
					cdata: {
							pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
							greedy: !0
					},
					tag: {
							pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
							greedy: !0,
							inside: {
									tag: {
											pattern: /^<\/?[^\s>\/]+/,
											inside: {
													punctuation: /^<\/?/,
													namespace: /^[^\s>\/:]+:/
											}
									},
									"special-attr": [],
									"attr-value": {
											pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
											inside: {
													punctuation: [{
															pattern: /^=/,
															alias: "attr-equals"
													}, {
															pattern: /^(\s*)["']|["']$/,
															lookbehind: !0
													}]
											}
									},
									punctuation: /\/?>/,
									"attr-name": {
											pattern: /[^\s>\/]+/,
											inside: {
													namespace: /^[^\s>\/:]+:/
											}
									}
							}
					},
					entity: [{
							pattern: /&[\da-z]{1,8};/i,
							alias: "named-entity"
					}, /&#x?[\da-f]{1,8};/i]
			},
			r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity,
			r.languages.markup.doctype.inside["internal-subset"].inside = r.languages.markup,
			r.hooks.add("wrap", (function(e) {
					"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
			}
			)),
			Object.defineProperty(r.languages.markup.tag, "addInlined", {
					value: function(e, t) {
							var n = {};
							n["language-" + t] = {
									pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
									lookbehind: !0,
									inside: r.languages[t]
							},
							n.cdata = /^<!\[CDATA\[|\]\]>$/i;
							var i = {
									"included-cdata": {
											pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
											inside: n
									}
							};
							i["language-" + t] = {
									pattern: /[\s\S]+/,
									inside: r.languages[t]
							};
							var a = {};
							a[e] = {
									pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
											return e
									}
									)), "i"),
									lookbehind: !0,
									greedy: !0,
									inside: i
							},
							r.languages.insertBefore("markup", "cdata", a)
					}
			}),
			Object.defineProperty(r.languages.markup.tag, "addAttribute", {
					value: function(e, t) {
							r.languages.markup.tag.inside["special-attr"].push({
									pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
									lookbehind: !0,
									inside: {
											"attr-name": /^[^\s=]+/,
											"attr-value": {
													pattern: /=[\s\S]+/,
													inside: {
															value: {
																	pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
																	lookbehind: !0,
																	alias: [t, "language-" + t],
																	inside: r.languages[t]
															},
															punctuation: [{
																	pattern: /^=/,
																	alias: "attr-equals"
															}, /"|'/]
													}
											}
									}
							})
					}
			}),
			r.languages.html = r.languages.markup,
			r.languages.mathml = r.languages.markup,
			r.languages.svg = r.languages.markup,
			r.languages.xml = r.languages.extend("markup", {}),
			r.languages.ssml = r.languages.xml,
			r.languages.atom = r.languages.xml,
			r.languages.rss = r.languages.xml,
			function(e) {
					var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
					e.languages.css = {
							comment: /\/\*[\s\S]*?\*\//,
							atrule: {
									pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
									inside: {
											rule: /^@[\w-]+/,
											"selector-function-argument": {
													pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
													lookbehind: !0,
													alias: "selector"
											},
											keyword: {
													pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
													lookbehind: !0
											}
									}
							},
							url: {
									pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
									greedy: !0,
									inside: {
											function: /^url/i,
											punctuation: /^\(|\)$/,
											string: {
													pattern: RegExp("^" + t.source + "$"),
													alias: "url"
											}
									}
							},
							selector: {
									pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
									lookbehind: !0
							},
							string: {
									pattern: t,
									greedy: !0
							},
							property: {
									pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
									lookbehind: !0
							},
							important: /!important\b/i,
							function: {
									pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
									lookbehind: !0
							},
							punctuation: /[(){};:,]/
					},
					e.languages.css.atrule.inside.rest = e.languages.css;
					var n = e.languages.markup;
					n && (n.tag.addInlined("style", "css"),
					n.tag.addAttribute("style", "css"))
			}(r),
			r.languages.clike = {
					comment: [{
							pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
							lookbehind: !0,
							greedy: !0
					}, {
							pattern: /(^|[^\\:])\/\/.*/,
							lookbehind: !0,
							greedy: !0
					}],
					string: {
							pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
							greedy: !0
					},
					"class-name": {
							pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
							lookbehind: !0,
							inside: {
									punctuation: /[.\\]/
							}
					},
					keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
					boolean: /\b(?:false|true)\b/,
					function: /\b\w+(?=\()/,
					number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
					operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
					punctuation: /[{}[\];(),.:]/
			},
			r.languages.javascript = r.languages.extend("clike", {
					"class-name": [r.languages.clike["class-name"], {
							pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
							lookbehind: !0
					}],
					keyword: [{
							pattern: /((?:^|\})\s*)catch\b/,
							lookbehind: !0
					}, {
							pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
							lookbehind: !0
					}],
					function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
					number: {
							pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
							lookbehind: !0
					},
					operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
			}),
			r.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,
			r.languages.insertBefore("javascript", "keyword", {
					regex: {
							pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
							lookbehind: !0,
							greedy: !0,
							inside: {
									"regex-source": {
											pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
											lookbehind: !0,
											alias: "language-regex",
											inside: r.languages.regex
									},
									"regex-delimiter": /^\/|\/$/,
									"regex-flags": /^[a-z]+$/
							}
					},
					"function-variable": {
							pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
							alias: "function"
					},
					parameter: [{
							pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
							lookbehind: !0,
							inside: r.languages.javascript
					}, {
							pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
							lookbehind: !0,
							inside: r.languages.javascript
					}, {
							pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
							lookbehind: !0,
							inside: r.languages.javascript
					}, {
							pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
							lookbehind: !0,
							inside: r.languages.javascript
					}],
					constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
			}),
			r.languages.insertBefore("javascript", "string", {
					hashbang: {
							pattern: /^#!.*/,
							greedy: !0,
							alias: "comment"
					},
					"template-string": {
							pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
							greedy: !0,
							inside: {
									"template-punctuation": {
											pattern: /^`|`$/,
											alias: "string"
									},
									interpolation: {
											pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
											lookbehind: !0,
											inside: {
													"interpolation-punctuation": {
															pattern: /^\$\{|\}$/,
															alias: "punctuation"
													},
													rest: r.languages.javascript
											}
									},
									string: /[\s\S]+/
							}
					},
					"string-property": {
							pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
							lookbehind: !0,
							greedy: !0,
							alias: "property"
					}
			}),
			r.languages.insertBefore("javascript", "operator", {
					"literal-property": {
							pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
							lookbehind: !0,
							alias: "property"
					}
			}),
			r.languages.markup && (r.languages.markup.tag.addInlined("script", "javascript"),
			r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")),
			r.languages.js = r.languages.javascript,
			function() {
					if (void 0 !== r && "undefined" != typeof document) {
							Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
							var e = {
									js: "javascript",
									py: "python",
									rb: "ruby",
									ps1: "powershell",
									psm1: "powershell",
									sh: "bash",
									bat: "batch",
									h: "c",
									tex: "latex"
							}
								, t = "data-src-status"
								, n = "loading"
								, i = "loaded"
								, a = "pre[data-src]:not([" + t + '="' + i + '"]):not([' + t + '="' + n + '"])';
							r.hooks.add("before-highlightall", (function(e) {
									e.selector += ", " + a
							}
							)),
							r.hooks.add("before-sanity-check", (function(s) {
									var o = s.element;
									if (o.matches(a)) {
											s.code = "",
											o.setAttribute(t, n);
											var l = o.appendChild(document.createElement("CODE"));
											l.textContent = "Loading…";
											var u = o.getAttribute("data-src")
												, c = s.language;
											if ("none" === c) {
													var d = (/\.(\w+)$/.exec(u) || [, "none"])[1];
													c = e[d] || d
											}
											r.util.setLanguage(l, c),
											r.util.setLanguage(o, c);
											var p = r.plugins.autoloader;
											p && p.loadLanguages(c),
											function(e, t, n) {
													var r = new XMLHttpRequest;
													r.open("GET", e, !0),
													r.onreadystatechange = function() {
															4 == r.readyState && (r.status < 400 && r.responseText ? t(r.responseText) : r.status >= 400 ? n("✖ Error " + r.status + " while fetching file: " + r.statusText) : n("✖ Error: File does not exist or is empty"))
													}
													,
													r.send(null)
											}(u, (function(e) {
													o.setAttribute(t, i);
													var n = function(e) {
															var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
															if (t) {
																	var n = Number(t[1])
																		, r = t[2]
																		, i = t[3];
																	return r ? i ? [n, Number(i)] : [n, void 0] : [n, n]
															}
													}(o.getAttribute("data-range"));
													if (n) {
															var a = e.split(/\r\n?|\n/g)
																, s = n[0]
																, u = null == n[1] ? a.length : n[1];
															s < 0 && (s += a.length),
															s = Math.max(0, Math.min(s - 1, a.length)),
															u < 0 && (u += a.length),
															u = Math.max(0, Math.min(u, a.length)),
															e = a.slice(s, u).join("\n"),
															o.hasAttribute("data-start") || o.setAttribute("data-start", String(s + 1))
													}
													l.textContent = e,
													r.highlightElement(l)
											}
											), (function(e) {
													o.setAttribute(t, "failed"),
													l.textContent = e
											}
											))
									}
							}
							)),
							r.plugins.fileHighlight = {
									highlight: function(e) {
											for (var t, n = (e || document).querySelectorAll(a), i = 0; t = n[i++]; )
													r.highlightElement(t)
									}
							};
							var s = !1;
							r.fileHighlight = function() {
									s || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),
									s = !0),
									r.plugins.fileHighlight.highlight.apply(this, arguments)
							}
					}
			}()
	},
	792319: function(e, t, n) {
			"use strict";
			n.d(t, {
					RK: function() {
							return k
					}
			});
			var r = n(617421);
			if (9549 == n.j)
					var i = n(75659);
			var a = n(218521);
			const s = 9549 == n.j ? ["block", "list", "listItem", "marks", "types"] : null
				, o = 9549 == n.j ? ["listItem"] : null
				, l = 9549 == n.j ? ["_key"] : null;
			function u(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							t && (r = r.filter((function(t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable
							}
							))),
							n.push.apply(n, r)
					}
					return n
			}
			function c(e) {
					for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? u(Object(n), !0).forEach((function(t) {
									d(e, t, n[t])
							}
							)) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}
							))
					}
					return e
			}
			function d(e, t, n) {
					return (t = function(e) {
							var t = function(e, t) {
									if ("object" != typeof e || !e)
											return e;
									var n = e[Symbol.toPrimitive];
									if (void 0 !== n) {
											var r = n.call(e, t || "default");
											if ("object" != typeof r)
													return r;
											throw new TypeError("@@toPrimitive must return a primitive value.")
									}
									return ("string" === t ? String : Number)(e)
							}(e, "string");
							return "symbol" == typeof t ? t : t + ""
					}(t))in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
					}) : e[t] = n,
					e
			}
			function p(e, t) {
					if (null == e)
							return {};
					var n, r, i = function(e, t) {
							if (null == e)
									return {};
							var n = {};
							for (var r in e)
									if ({}.hasOwnProperty.call(e, r)) {
											if (t.includes(r))
													continue;
											n[r] = e[r]
									}
							return n
					}(e, t);
					if (Object.getOwnPropertySymbols) {
							var a = Object.getOwnPropertySymbols(e);
							for (r = 0; r < a.length; r++)
									n = a[r],
									t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
			}
			const f = {
					textDecoration: "underline"
			}
				, g = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`
				, h = e => g(`block type "${e}"`, "types");
			function m(e) {
					console.warn(e)
			}
			const y = {
					display: "none"
			}
				, b = {
					types: {},
					block: {
							normal: ({children: e}) => (0,
							r.jsx)("p", {
									children: e
							}),
							blockquote: ({children: e}) => (0,
							r.jsx)("blockquote", {
									children: e
							}),
							h1: ({children: e}) => (0,
							r.jsx)("h1", {
									children: e
							}),
							h2: ({children: e}) => (0,
							r.jsx)("h2", {
									children: e
							}),
							h3: ({children: e}) => (0,
							r.jsx)("h3", {
									children: e
							}),
							h4: ({children: e}) => (0,
							r.jsx)("h4", {
									children: e
							}),
							h5: ({children: e}) => (0,
							r.jsx)("h5", {
									children: e
							}),
							h6: ({children: e}) => (0,
							r.jsx)("h6", {
									children: e
							})
					},
					marks: {
							em: ({children: e}) => (0,
							r.jsx)("em", {
									children: e
							}),
							strong: ({children: e}) => (0,
							r.jsx)("strong", {
									children: e
							}),
							code: ({children: e}) => (0,
							r.jsx)("code", {
									children: e
							}),
							underline: ({children: e}) => (0,
							r.jsx)("span", {
									style: f,
									children: e
							}),
							"strike-through": ({children: e}) => (0,
							r.jsx)("del", {
									children: e
							}),
							link: ({children: e, value: t}) => (0,
							r.jsx)("a", {
									href: t?.href,
									children: e
							})
					},
					list: {
							number: ({children: e}) => (0,
							r.jsx)("ol", {
									children: e
							}),
							bullet: ({children: e}) => (0,
							r.jsx)("ul", {
									children: e
							})
					},
					listItem: ({children: e}) => (0,
					r.jsx)("li", {
							children: e
					}),
					hardBreak: () => (0,
					r.jsx)("br", {}),
					unknownType: ({value: e, isInline: t}) => {
							const n = h(e._type);
							return t ? (0,
							r.jsx)("span", {
									style: y,
									children: n
							}) : (0,
							r.jsx)("div", {
									style: y,
									children: n
							})
					}
					,
					unknownMark: ({markType: e, children: t}) => (0,
					r.jsx)("span", {
							className: `unknown__pt__mark__${e}`,
							children: t
					}),
					unknownList: ({children: e}) => (0,
					r.jsx)("ul", {
							children: e
					}),
					unknownListItem: ({children: e}) => (0,
					r.jsx)("li", {
							children: e
					}),
					unknownBlockStyle: ({children: e}) => (0,
					r.jsx)("p", {
							children: e
					})
			};
			function v(e, t, n) {
					const r = t[n]
						, i = e[n];
					return "function" == typeof r || r && "function" == typeof i ? r : r ? c(c({}, i), r) : i
			}
			function k({value: e, components: t, listNestingMode: n, onMissingComponent: o=m}) {
					const l = o || F
						, u = Array.isArray(e) ? e : [e]
						, d = (0,
					i.iS)(u, n || i.mn)
						, f = (0,
					a.useMemo)(( () => t ? function(e, t) {
							const {block: n, list: r, listItem: i, marks: a, types: o} = t
								, l = p(t, s);
							return c(c({}, e), {}, {
									block: v(e, t, "block"),
									list: v(e, t, "list"),
									listItem: v(e, t, "listItem"),
									marks: v(e, t, "marks"),
									types: v(e, t, "types")
							}, l)
					}(b, t) : b), [t])
						, g = (0,
					a.useMemo)(( () => x(f, l)), [f, l])
						, h = d.map(( (e, t) => g({
							node: e,
							index: t,
							isInline: !1,
							renderNode: g
					})));
					return (0,
					r.jsx)(r.Fragment, {
							children: h
					})
			}
			const x = (e, t) => {
					function n(a) {
							const {node: s, index: u, isInline: d} = a
								, f = s._key || `node-${u}`;
							return (0,
							i.zp)(s) ? function(i, a, s) {
									const o = i.children.map(( (e, t) => n({
											node: e._key ? e : c(c({}, e), {}, {
													_key: `li-${a}-${t}`
											}),
											index: t,
											isInline: !1,
											renderNode: n
									})))
										, l = e.list
										, u = ("function" == typeof l ? l : l[i.listItem]) || e.unknownList;
									if (u === e.unknownList) {
											const e = i.listItem || "bullet";
											t(g(`list style "${e}"`, "list"), {
													nodeType: "listStyle",
													type: e
											})
									}
									return (0,
									r.jsx)(u, {
											value: i,
											index: a,
											isInline: !1,
											renderNode: n,
											children: o
									}, s)
							}(s, u, f) : (0,
							i.n2)(s) ? function(i, a, s) {
									const l = w({
											node: i,
											index: a,
											isInline: !1,
											renderNode: n
									})
										, u = e.listItem
										, c = ("function" == typeof u ? u : u[i.listItem]) || e.unknownListItem;
									if (c === e.unknownListItem) {
											const e = i.listItem || "bullet";
											t(g(`list item style "${e}"`, "listItem"), {
													type: e,
													nodeType: "listItemStyle"
											})
									}
									let d = l.children;
									if (i.style && "normal" !== i.style) {
											const {listItem: e} = i;
											d = n({
													node: p(i, o),
													index: a,
													isInline: !1,
													renderNode: n
											})
									}
									return (0,
									r.jsx)(c, {
											value: i,
											index: a,
											isInline: !1,
											renderNode: n,
											children: d
									}, s)
							}(s, u, f) : (0,
							i.tO)(s) ? function(a, s, o) {
									const {markDef: l, markType: u, markKey: c} = a
										, d = e.marks[u] || e.unknownMark
										, p = a.children.map(( (e, t) => n({
											node: e,
											index: t,
											isInline: !0,
											renderNode: n
									})));
									return d === e.unknownMark && t((e => g(`mark type "${e}"`, "marks"))(u), {
											nodeType: "mark",
											type: u
									}),
									(0,
									r.jsx)(d, {
											text: (0,
											i.fg)(a),
											value: l,
											markType: u,
											markKey: c,
											renderNode: n,
											children: p
									}, o)
							}(s, 0, f) : function(t) {
									return t._type in e.types
							}(s) ? function(t, i, a, s) {
									const o = {
											value: t,
											isInline: s,
											index: i,
											renderNode: n
									}
										, l = e.types[t._type];
									return l ? (0,
									r.jsx)(l, c({}, o), a) : null
							}(s, u, f, d) : (0,
							i.IG)(s) ? function(i, a, s, o) {
									const u = w({
											node: i,
											index: a,
											isInline: o,
											renderNode: n
									})
										, {_key: d} = u
										, f = p(u, l)
										, h = f.node.style || "normal"
										, m = ("function" == typeof e.block ? e.block : e.block[h]) || e.unknownBlockStyle;
									return m === e.unknownBlockStyle && t((y = h,
									g(`block style "${y}"`, "block")), {
											nodeType: "blockStyle",
											type: h
									}),
									(0,
									r.jsx)(m, c(c({}, f), {}, {
											value: f.node,
											renderNode: n
									}), s);
									var y
							}(s, u, f, d) : (0,
							i.YA)(s) ? function(t, n) {
									if ("\n" === t.text) {
											const t = e.hardBreak;
											return t ? (0,
											r.jsx)(t, {}, n) : "\n"
									}
									return t.text
							}(s, f) : function(i, a, s, o) {
									const l = {
											value: i,
											isInline: o,
											index: a,
											renderNode: n
									};
									t(h(i._type), {
											nodeType: "block",
											type: i._type
									});
									const u = e.unknownType;
									return (0,
									r.jsx)(u, c({}, l), s)
							}(s, u, f, d)
					}
					return n
			}
			;
			function w(e) {
					const {node: t, index: n, isInline: r, renderNode: a} = e
						, s = (0,
					i.Pq)(t).map(( (e, t) => a({
							node: e,
							isInline: !0,
							index: t,
							renderNode: a
					})));
					return {
							_key: t._key || `block-${n}`,
							children: s,
							index: n,
							isInline: r,
							node: t
					}
			}
			function F() {}
	},
	75659: function(e, t, n) {
			"use strict";
			function r(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							t && (r = r.filter((function(t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable
							}
							))),
							n.push.apply(n, r)
					}
					return n
			}
			function i(e) {
					for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? r(Object(n), !0).forEach((function(t) {
									a(e, t, n[t])
							}
							)) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}
							))
					}
					return e
			}
			function a(e, t, n) {
					return (t = function(e) {
							var t = function(e, t) {
									if ("object" != typeof e || !e)
											return e;
									var n = e[Symbol.toPrimitive];
									if (void 0 !== n) {
											var r = n.call(e, t || "default");
											if ("object" != typeof r)
													return r;
											throw new TypeError("@@toPrimitive must return a primitive value.")
									}
									return ("string" === t ? String : Number)(e)
							}(e, "string");
							return "symbol" == typeof t ? t : t + ""
					}(t))in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
					}) : e[t] = n,
					e
			}
			function s(e) {
					return "span" === e._type && "text"in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every((e => "string" == typeof e)))
			}
			function o(e) {
					return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs"in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every((e => "string" == typeof e._key))) && "children"in e && Array.isArray(e.children) && e.children.every((e => "object" == typeof e && "_type"in e))
			}
			function l(e) {
					return o(e) && "listItem"in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
			}
			function u(e) {
					return "@list" === e._type
			}
			function c(e) {
					return "@span" === e._type
			}
			function d(e) {
					return "@text" === e._type
			}
			n.d(t, {
					IG: function() {
							return o
					},
					Pq: function() {
							return g
					},
					YA: function() {
							return d
					},
					bo: function() {
							return w
					},
					fg: function() {
							return v
					},
					iS: function() {
							return h
					},
					mn: function() {
							return F
					},
					n2: function() {
							return l
					},
					tO: function() {
							return c
					},
					zp: function() {
							return u
					}
			});
			const p = 9549 == n.j ? ["strong", "em", "code", "underline", "strike-through"] : null;
			function f(e, t, n) {
					if (!s(e) || !e.marks)
							return [];
					if (!e.marks.length)
							return [];
					const r = e.marks.slice()
						, i = {};
					return r.forEach((e => {
							i[e] = 1;
							for (let r = t + 1; r < n.length; r++) {
									const t = n[r];
									if (!(t && s(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)))
											break;
									i[e]++
							}
					}
					)),
					r.sort(( (e, t) => function(e, t, n) {
							const r = e[t]
								, i = e[n];
							if (r !== i)
									return i - r;
							const a = p.indexOf(t)
								, s = p.indexOf(n);
							return a !== s ? a - s : t.localeCompare(n)
					}(i, e, t)))
			}
			function g(e) {
					var t, n;
					const {children: r} = e
						, i = null != (t = e.markDefs) ? t : [];
					if (!r || !r.length)
							return [];
					const a = r.map(f)
						, o = {
							_type: "@span",
							children: [],
							markType: "<unknown>"
					};
					let l = [o];
					for (let e = 0; e < r.length; e++) {
							const t = r[e];
							if (!t)
									continue;
							const o = a[e] || [];
							let u = 1;
							if (l.length > 1)
									for (; u < l.length; u++) {
											const e = (null == (n = l[u]) ? void 0 : n.markKey) || ""
												, t = o.indexOf(e);
											if (-1 === t)
													break;
											o.splice(t, 1)
									}
							l = l.slice(0, u);
							let c = l[l.length - 1];
							if (c) {
									for (const e of o) {
											const n = null == i ? void 0 : i.find((t => t._key === e))
												, r = n ? n._type : e
												, a = {
													_type: "@span",
													_key: t._key,
													children: [],
													markDef: n,
													markType: r,
													markKey: e
											};
											c.children.push(a),
											l.push(a),
											c = a
									}
									if (s(t)) {
											const e = t.text.split("\n");
											for (let t = e.length; t-- > 1; )
													e.splice(t, 0, "\n");
											c.children = c.children.concat(e.map((e => ({
													_type: "@text",
													text: e
											}))))
									} else
											c.children = c.children.concat(t)
							}
					}
					return o.children
			}
			function h(e, t) {
					const n = [];
					let r;
					for (let a = 0; a < e.length; a++) {
							const s = e[a];
							if (s) {
									if (!l(s)) {
											n.push(s),
											r = void 0;
											continue
									}
									if (!r) {
											r = y(s, a, t),
											n.push(r);
											continue
									}
									if (m(s, r)) {
											r.children.push(s);
											continue
									}
									if ((s.level || 1) > r.level) {
											const e = y(s, a, t);
											if ("html" === t) {
													const t = r.children[r.children.length - 1]
														, n = i(i({}, t), {}, {
															children: [...t.children, e]
													});
													r.children[r.children.length - 1] = n
											} else
													r.children.push(e);
											r = e;
											continue
									}
									if ((s.level || 1) < r.level) {
											const e = n[n.length - 1]
												, i = e && b(e, s);
											if (i) {
													r = i,
													r.children.push(s);
													continue
											}
											r = y(s, a, t),
											n.push(r);
											continue
									}
									if (s.listItem !== r.listItem) {
											const e = n[n.length - 1]
												, i = e && b(e, {
													level: s.level || 1
											});
											if (i && i.listItem === s.listItem) {
													r = i,
													r.children.push(s);
													continue
											}
											r = y(s, a, t),
											n.push(r);
											continue
									}
									console.warn("Unknown state encountered for block", s),
									n.push(s)
							}
					}
					return n
			}
			function m(e, t) {
					return (e.level || 1) === t.level && e.listItem === t.listItem
			}
			function y(e, t, n) {
					return {
							_type: "@list",
							_key: `${e._key || `${t}`}-parent`,
							mode: n,
							level: e.level || 1,
							listItem: e.listItem,
							children: [e]
					}
			}
			function b(e, t) {
					const n = t.level || 1
						, r = t.listItem || "normal"
						, i = "string" == typeof t.listItem;
					if (u(e) && (e.level || 1) === n && i && (e.listItem || "normal") === r)
							return e;
					if (!("children"in e))
							return;
					const a = e.children[e.children.length - 1];
					return a && !s(a) ? b(a, t) : void 0
			}
			function v(e) {
					let t = "";
					return e.children.forEach((e => {
							d(e) ? t += e.text : c(e) && (t += v(e))
					}
					)),
					t
			}
			const k = /^\s/
				, x = /\s$/;
			function w(e) {
					const t = Array.isArray(e) ? e : [e];
					let n = "";
					return t.forEach(( (e, r) => {
							if (!o(e))
									return;
							let i = !1;
							e.children.forEach((e => {
									s(e) ? (n += i && n && !x.test(n) && !k.test(e.text) ? " " : "",
									n += e.text,
									i = !1) : i = !0
							}
							)),
							r !== t.length - 1 && (n += "\n\n")
					}
					)),
					n
			}
			const F = "html"
	},
	337812: function(e, t, n) {
			"use strict";
			n.d(t, {
					vX: function() {
							return q
					}
			});
			const r = "https://cdn.sanity.io"
				, i = /^https:\/\/cdn\.sanity\./
				, a = /^https:\/\/cdn\.[^/]+\/(images|files)\/[^/]+\/.*?[a-zA-Z0-9_]{24,40}.*$/
				, s = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+\.[a-z0-9]+$/
				, o = /^file-([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+$/
				, l = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})-\d+x\d+\.[a-z0-9]+$/
				, u = /^(images|files)\/([a-z0-9]+)\/([a-z0-9][-\w]*)\//
				, c = /^(?:image-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+|file-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+)$/
				, d = "sanity.fileAsset"
				, p = {
					projectId: "a",
					dataset: "b"
			}
				, f = "upload-in-progress-placeholder"
				, g = "upload-in-progress"
				, h = "tmp";
			class m extends Error {
					constructor(e, t="Failed to resolve asset ID from source") {
							super(t),
							this.unresolvable = !0,
							this.input = e
					}
			}
			function y(e) {
					return (...t) => {
							try {
									return e(...t)
							} catch (e) {
									if (function(e) {
											const t = e;
											return !(!t.unresolvable || !("input"in t))
									}(e))
											return;
									throw e
							}
					}
			}
			function b(e) {
					return null !== e && !Array.isArray(e) && "object" == typeof e
			}
			function v(e) {
					return b(e) && "string" == typeof e._ref
			}
			function k(e) {
					return b(e) && "string" == typeof e.path
			}
			function x(e) {
					return b(e) && "string" == typeof e.url
			}
			function w(e) {
					return b(e) && "sanity.fileAsset" === e._type
			}
			function F(e) {
					return b(e) && "sanity.imageAsset" === e._type
			}
			function A(e) {
					const t = e;
					return b(t) && !!t.asset && "object" == typeof t.asset
			}
			function $(e) {
					const t = e;
					return b(t) && !!t._upload && !("asset"in t)
			}
			function j(e) {
					return i.test(e) || a.test(e)
			}
			const _ = Object.freeze({
					left: 0,
					top: 0,
					bottom: 0,
					right: 0
			})
				, I = Object.freeze({
					x: .5,
					y: .5,
					height: 1,
					width: 1
			})
				, O = () => ({
					..._
			})
				, S = () => ({
					...I
			});
			function E(e, t) {
					const n = t?.projectId || e.projectId
						, r = t?.dataset || e.dataset;
					if (!n || !r)
							throw new Error("Project details (projectId and dataset) required to resolve path for image");
					const i = "metadata"in e ? e.metadata.dimensions : {
							width: e.width,
							height: e.height
					}
						, a = "originalFilename"in e ? e.originalFilename : void 0
						, {assetId: s, extension: o, vanityFilename: l} = e
						, {width: u, height: c} = i;
					return `images/${n}/${r}/${s}-${u}x${c}.${o}${C(a, l, t)}`
			}
			function P(e, t) {
					const n = t?.projectId || e.projectId
						, r = t?.dataset || e.dataset;
					if (!n || !r)
							throw new Error("Project details (projectId and dataset) required to resolve path for file");
					const i = "originalFilename"in e ? e.originalFilename : void 0
						, {assetId: a, extension: s, vanityFilename: o} = e;
					return `files/${n}/${r}/${a}.${s}${C(i, o, t)}`
			}
			function z(e, t) {
					return `${t?.baseUrl || r}/${P(e, t)}`
			}
			function N(e) {
					if (A(e))
							return N(e.asset);
					if (!v(e)) {
							if ("string" == typeof e)
									return t = e,
									u.test(T(t) || "") ? D(e) : void 0;
							if (k(e))
									return e.path;
							if (x(e))
									return D(e.url)
					}
					var t
			}
			function D(e) {
					if (u.test(e))
							return e;
					if (!j(e))
							throw new m(`Failed to resolve path from URL "${e}"`);
					return new URL(e).pathname.replace(/^\/+/, "")
			}
			const T = y(D);
			y((function(e) {
					const t = (T(e) || e).replace(/^(images|files)\/[a-z0-9]+\/[a-z0-9][-\w]\/*/, "");
					if (!L(t))
							throw new m(`Failed to resolve filename from URL "${e}"`);
					return t
			}
			));
			function L(e) {
					return s.test(e) || l.test(e)
			}
			function C(e, t, n) {
					const r = t || e;
					return !1 !== n?.useVanityName && r ? `/${r}` : ""
			}
			const M = "image-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-2000x3000-jpg";
			function R(e) {
					if (!o.test(e))
							throw new Error(`Malformed file asset ID '${e}'. Expected an id like "file-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-pdf"`);
					const [,t,n] = e.split("-");
					return {
							type: "file",
							assetId: t,
							extension: n
					}
			}
			function Z(e) {
					const [,t,n,r] = e.split("-")
						, [i,a] = (n || "").split("x").map(Number);
					if (!(t && n && r && i > 0 && a > 0))
							throw new Error(`Malformed asset ID '${e}'. Expected an id like "${M}".`);
					return {
							type: "image",
							assetId: t,
							width: i,
							height: a,
							extension: r
					}
			}
			function q(e) {
					if ($(e))
							return {
									width: 0,
									height: 0,
									aspectRatio: 0
							};
					const t = G(e)
						, {width: n, height: r} = Z(t);
					return {
							width: n,
							height: r,
							aspectRatio: n / r
					}
			}
			y(q);
			y((function(e) {
					return $(e) ? h : function(e) {
							const t = K(e);
							return !!t && t.startsWith("file-")
					}(e) ? H(e, p).asset.extension : B(e, p).asset.extension
			}
			));
			function B(e, t) {
					if ($(e))
							return {
									asset: {
											_id: f,
											_type: "sanity.imageAsset",
											assetId: g,
											extension: h,
											url: "",
											path: "",
											metadata: {
													dimensions: {
															width: 1,
															height: 1,
															aspectRatio: 1
													}
											}
									},
									crop: O(),
									hotspot: S()
							};
					const n = e;
					return {
							asset: U(e, t || J(e)),
							crop: n.crop || O(),
							hotspot: n.hotspot || S()
					}
			}
			y(B);
			function U(e, t) {
					const n = {
							...t || X(e),
							useVanityName: !1
					}
						, i = G(e)
						, a = (e.asset || e).metadata || {}
						, {assetId: s, width: o, height: l, extension: u} = Z(i)
						, c = o / l
						, d = {
							...F(e) ? e : {},
							_id: i,
							_type: "sanity.imageAsset",
							assetId: s,
							extension: u,
							metadata: {
									...a,
									dimensions: {
											width: o,
											height: l,
											aspectRatio: c
									}
							},
							url: "",
							path: ""
					};
					return {
							...d,
							path: E(d, n),
							url: (p = d,
							f = n,
							`${f?.baseUrl || r}/${E(p, f)}`)
					};
					var p, f
			}
			y(U);
			function H(e, t) {
					if ($(e))
							return {
									asset: {
											_id: f,
											_type: d,
											assetId: g,
											extension: h,
											url: "",
											path: "",
											metadata: {}
									}
							};
					return {
							asset: W(e, t || J(e))
					}
			}
			y(H);
			function W(e, t) {
					if ($(e))
							return {
									assetId: g,
									_id: f,
									_type: d,
									extension: h,
									metadata: {},
									url: "",
									path: ""
							};
					const n = {
							...t || X(e),
							useVanityName: !1
					}
						, r = G(e)
						, i = e.asset || e
						, {assetId: a, extension: s} = R(r)
						, o = {
							...w(e) ? e : {},
							_id: r,
							_type: "sanity.fileAsset",
							assetId: a,
							extension: s,
							metadata: i.metadata || {},
							url: "",
							path: ""
					};
					return {
							...o,
							path: P(o, n),
							url: z(o, n)
					}
			}
			y(W);
			function G(e) {
					if ($(e))
							return f;
					const t = A(e) ? e.asset : e;
					let n = "";
					if ("string" == typeof t ? n = Y(t) : v(t) ? n = t._ref : b(i = t) && "string" == typeof i._id ? n = t._id : k(t) ? n = V(`${r}/${t.path}`) : x(t) && (n = V(t.url)),
					!n || !c.test(n))
							throw new m(e);
					var i;
					return n
			}
			const K = y(G);
			function Y(e) {
					if (c.test(e))
							return e;
					const t = j(e) ? new URL(e).pathname : e;
					if (0 === t.indexOf("/images") || 0 === t.indexOf("/files"))
							return V(e);
					if (u.test(e))
							return V(`${r}/${e}`);
					if (ee(e))
							return V(`${r}/files/a/b/${e}`);
					if (Q(e))
							return V(`${r}/images/a/b/${e}`);
					throw new m(e)
			}
			y(Y);
			function V(e) {
					const t = D(e)
						, [n,,,r] = t.split("/");
					return `${n.replace(/s$/, "")}-${r.replace(/\./g, "-")}`
			}
			function X(e) {
					const t = N(e);
					if (!t)
							throw new m(e,"Failed to resolve project ID and dataset from source");
					const [,,n,r] = t.match(u) || [];
					if (!n || !r)
							throw new m(e,"Failed to resolve project ID and dataset from source");
					return {
							projectId: n,
							dataset: r
					}
			}
			const J = y(X);
			function Q(e) {
					return l.test(e)
			}
			function ee(e) {
					return s.test(e)
			}
	}
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/8410.bee4486751b07e4d6934.chunk.js.map
