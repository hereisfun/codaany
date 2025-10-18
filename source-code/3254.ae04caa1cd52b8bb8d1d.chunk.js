(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[3254], {
	653074: function(e, t, o) {
			"use strict";
			o.d(t, {
					De: function() {
							return y
					},
					Fj: function() {
							return g
					},
					VJ: function() {
							return d
					},
					Vi: function() {
							return l
					},
					aQ: function() {
							return i
					},
					db: function() {
							return c
					},
					lU: function() {
							return p
					},
					tQ: function() {
							return m
					},
					zS: function() {
							return u
					}
			});
			var r = o(862648)
				, a = o(76601)
				, n = o(279860)
				, s = o(420713);
			class i {
					constructor(e=[]) {
							this._refs = {};
							for (const t of e)
									this.put(t)
					}
					put(e) {
							const t = e.syncTableRowRef.objectId
								, o = e.syncTableRowRef.identifier;
							this._refs[`${t}:${o}`] = e
					}
					get({gridId: e, rowId: t}) {
							return this._refs[`${e}:${t}`]
					}
					values() {
							return Object.values(this._refs)
					}
			}
			function u(e) {
					return (0,
					s.isObject)(e) && e.codaType === r.z2.Person
			}
			function p(e) {
					return e?.type === r.eV.String && e.codaType === r.z2.ImageAttachment
			}
			function c(e) {
					return e?.type === r.eV.String && e.codaType === r.z2.Attachment
			}
			function l(e) {
					return (0,
					s.isObject)(e) && Boolean(e.identity) && e.codaType === r.z2.Reference
			}
			function d(e) {
					return e?.type === r.eV.String && e?.codaType === r.z2.Html
			}
			function g(e) {
					return e?.type === r.eV.String && e?.codaType === r.z2.Markdown
			}
			function y(e) {
					return e?.type === r.eV.String && e?.codaType === r.z2.CodaInternalRichText
			}
			function m(e) {
					return !!(0,
					n.gD)(e) || ("" === e || !("object" != typeof e || !(0,
					a.Im)(e) || e instanceof Date))
			}
	},
	344406: function(e, t, o) {
			"use strict";
			o.d(t, {
					k: function() {
							return v
					}
			});
			var r = o(920167)
				, a = o(961046)
				, n = o(71419)
				, s = o(653074)
				, i = o(214571)
				, u = o(318225)
				, p = o(862648)
				, c = o(283130)
				, l = o(43308)
				, d = o(408059)
				, g = o(152738)
				, y = o(886188)
				, m = o(528491)
				, f = o(420713)
				, R = o(942725)
				, h = o(425444)
				, F = o(887042)
				, M = o(1153)
				, S = o(353591)
				, I = o(748256);
			class v {
					constructor({document: e, objectSchema: t, packId: o, annotations: r, allowTopLevelReference: a, isSyncFormula: n}) {
							this._document = e;
							const i = (0,
							f.isArray)(t) ? t.items : t
								, u = (0,
							f.isObject)(i) ? i.identity : void 0;
							this._packId = o,
							this._dynamicUrl = u?.dynamicUrl,
							this._protocolAndHost = l.$W.host,
							this._annotations = r,
							this._allowTopLevelReference = a,
							this._packRowRefIdValues = new s.aQ,
							this._isSyncFormula = n
					}
					get packRowRefIdValues() {
							return this._packRowRefIdValues
					}
					async visitArray(e, t, o, r) {
							const a = (0,
							f.isArray)(t) ? t.items : void 0
								, n = (await Promise.all(e.value.map((e => this.visit(e, a, o, r))))).filter((e => !S.Tf(e) || e.url));
							return S.HL(n)
					}
					async visitObject(e, t, o, r) {
							if (!(0,
							f.isObject)(t))
									return e;
							const {value: a} = e;
							for (const e in a)
									a.hasOwnProperty(e) && (a[e] = await this.visit(a[e], t.properties[e], o, r + 1));
							const n = (0,
							F.objectSchemaHelper)(t);
							if (t.codaType === p.z2.Person && n.id && e.value) {
									const o = (0,
									h.kH)(e, t);
									return o && await this._maybeMakePersonRef(o) || e
							}
							if ((r > 0 || this._allowTopLevelReference) && t.codaType === p.z2.Reference) {
									(0,
									c.Nn)(n.id);
									const r = (0,
									c.Nn)(t.identity)
										, a = (0,
									c.Nn)(n.primary)
										, s = S.KE(e.value[a], o)
										, i = this._makeSyncGridAtRef({
											identity: r,
											objectSchema: t,
											value: e,
											name: s,
											context: o
									});
									if (i)
											return i
							}
							return e
					}
					_makeSyncGridAtRef({identity: e, objectSchema: t, value: o, name: s, context: i}) {
							if (t.codaType === p.z2.Reference && e.packId === n.OW.CodaDoc && e.name === a.Uy.Table) {
									const {docId: t, objectId: a} = (0,
									M.Gy)((0,
									c.Nn)(e.dynamicUrl, "Missing dynamic URL"))
										, n = (0,
									c.Nn)(t, "Missing docId")
										, s = (0,
									c.Nn)(a, "Missing table ID");
									if (n === this._document.id) {
											const e = o.value
												, t = e.Url;
											let a;
											S.sP(t) ? a = t.url : ((0,
											c.e4)("string" == typeof t, ( () => `Expected URL to be a string but got ${JSON.stringify(o)}`)),
											a = t);
											const n = new r.l(a)
												, u = (0,
											c.Nn)(n.getParts().row, "Missing row part")
												, p = u.id.startsWith("ui-") ? u.id.substring(1) : u.id;
											return S.Bw(s, p, S.KE(e.Name, i))
									}
							}
							const {id: u} = (0,
							F.objectSchemaHelper)(t)
								, l = o.value[(0,
							c.Nn)(u)];
							if (!l)
									return;
							const d = y.AaP(e)
								, m = S.KE(l, i)
								, f = (0,
							g.t9)(m, {
									packId: e.packId,
									schemaVersion: this._document.schemaVersion,
									typedConfig: this._document.session.runtimeConfig
							})
								, R = this._document.session.resolver.typedGetters.tryGetGrid(d)
								, h = Boolean(R?.rows.exists(f))
								, I = S.Bw(d, f, s, {
									isBroken: !h
							});
							return this._packRowRefIdValues.put({
									syncTableRowRef: I,
									refIdValue: l
							}),
							I
					}
					async _maybeMakePersonRef(e) {
							const t = this._document.peopleGridManager.getPersonReferenceForEmail(e);
							if (t)
									return t;
							const o = this._annotations?.emailsToUserIdsMap[e];
							return o ? this._document.peopleGridManager.getPersonRowReferenceValue(o) : void 0
					}
					_maybeConvertBlobRef(e) {
							return (0,
							m.nR)(this._document.blobManager, e)
					}
					async _maybeConvertUrlValue(e, t, o) {
							if (e.url.startsWith("mailto:"))
									return await this._maybeMakePersonRef(e.url.slice(7)) || e;
							if (!e.url.startsWith(this._protocolAndHost))
									return e;
							const r = d.qP(t)
								, a = d.qP(e.url);
							if (!a.docId || r.docId !== a.docId || r.protocolAndHost !== a.protocolAndHost)
									return e;
							const s = a.tokens.find((e => e.type === u.qtf.Table))
								, i = a.tokens.find((e => e.type === u.qtf.Row));
							if (!s || !i)
									return e;
							const c = {
									packId: n.OW.CodaDoc,
									name: "Table",
									dynamicUrl: d.Nu(a.docId, s.id, "", {
											protocolAndHost: a.protocolAndHost
									})
							}
								, l = (0,
							p.z6)({
									type: p.eV.Object,
									id: "RowUrl",
									properties: {
											RowUrl: {
													type: p.eV.String
											}
									}
							})
								, g = S.Rw({
									RowUrl: d.ZO(a.protocolAndHost, a.docId, s.id, i.id, {
											fullIds: !0
									})
							});
							return this._makeSyncGridAtRef({
									identity: c,
									objectSchema: l,
									value: g,
									name: S.KE(e.name, o),
									context: o
							}) || e
					}
					async visitSlate(e, t) {
							const o = this._dynamicUrl;
							if (this._packId !== n.OW.CodaDoc || !o)
									return e;
							const r = i.ib.createDocument(e.root.children)
								, a = i.ib.filterNodesInDocument(r, i.ib.nodeIsInlineElement);
							for (const [e] of a) {
									if (e.type !== i.i$.InlineStructuredValue)
											continue;
									const {value: r} = e;
									S.sP(r) ? e.value = await this._maybeConvertUrlValue(r, o, t) : S.vU(r) && (e.value = this._maybeConvertBlobRef(r))
							}
							return e
					}
					async tryIngestUrlReference(e) {
							const {name: t, url: o} = e
								, {blobsGridManager: r} = this._document.blobManager
								, a = r.getBlobReferenceForUrl(o);
							if (a)
									return a;
							const n = this._annotations?.urlsToBlobIdsMap[o];
							return n ? r.getBlobRowReferenceValue(n, t ?? void 0) : (R.R.warn("Couldn't find annotation for blob ID for url:", o),
							e)
					}
					async visitImageUrlReference(e, t) {
							const {url: o} = e
								, r = I.ax(o);
							return I.vh(o) || r ? !t || !("codaType"in t) || t.codaType !== p.z2.Attachment && t.codaType !== p.z2.ImageAttachment && t.codaType !== p.z2.CodaInternalRichText ? e : this.tryIngestUrlReference(e) : S.x$("")
					}
					async visit(e, t, o, r=0) {
							return S.D8(e) ? this.visitArray(e, t, o, r) : Array.isArray(e) ? this.visitArray(S.HL(e), t, o, r) : S.Tc(e) ? this.visitObject(e, t, o, r) : S.HQ(e) ? this.visitSlate(e, o) : S.vU(e) && this._packId === n.OW.CodaDoc ? this._maybeConvertBlobRef(e) : S.Tf(e) ? this.visitImageUrlReference(e, t) : e
					}
					async visitAndWritePackRowRefIdValues(e, t, o, r=0) {
							const a = await this.visit(e, t, o, r);
							return this._document.packSyncRefsGridManager?.upsertRefIdValues(this._packRowRefIdValues.values()),
							a
					}
					async visitForGenericSyncUpdateResult(e, t, o, r=0) {
							const a = (0,
							f.isArray)(t) ? t.items : void 0;
							for (const t of e)
									t.outcome === p.oJ.Success && (t.finalValue = await this.visitObject(t.finalValue, a, o, r));
							return e
					}
			}
	},
	413816: function(e, t, o) {
			"use strict";
			o.d(t, {
					p: function() {
							return I
					}
			});
			var r = o(187497)
				, a = o(420713)
				, n = o(71419)
				, s = o(644634)
				, i = o(862648)
				, u = o(175916)
				, p = o(283130)
				, c = o(347728)
				, l = o(642333)
				, d = o(390143)
				, g = o(152738)
				, y = o(162465)
				, m = o(173241)
				, f = o(579008)
				, R = o(420184)
				, h = o(192840)
				, F = o(134371)
				, M = o(653074)
				, S = o(353591);
			class I {
					constructor({packId: e, allowYielding: t, stripBlankValues: o}) {
							this.richValueConverter = new s.hK,
							this._packId = e,
							this._allowYielding = t ?? !1,
							this._stripBlankValues = o ?? !0
					}
					async visitArray(e, t, o) {
							const r = (0,
							a.isArray)(t) ? t.items : void 0
								, n = [];
							for (const t of e)
									n.push(await this.visit(t, r, o)),
									this._allowYielding && await h.h5();
							return S.HL(n)
					}
					visitDate(e, t, o) {
							return S.l9(e, o)
					}
					visitImage(e, t, o) {
							(0,
							p.e4)(t && t.type === i.eV.String && t.codaType && u.mK([i.z2.ImageReference, i.z2.ImageAttachment, i.z2.Attachment], t.codaType));
							const {codaType: r} = t;
							switch (r) {
							case i.z2.ImageAttachment:
							case i.z2.ImageReference:
									const o = !t.imageOutline || t.imageOutline === a.ImageOutline.Solid;
									return S.x$(e, {
											outline: o,
											cornerStyle: t.imageCornerStyle
									});
							case i.z2.Attachment:
									return S.x$(e);
							default:
									return (0,
									p.pL)(r)
							}
					}
					visitNumber(e, t, o) {
							if (t && t.type === i.eV.Number && t.codaType)
									switch (t.codaType) {
									case i.z2.Date:
											{
													const {format: r} = g.Ad(o, t)
														, a = (0,
													c.zq)(d.YA(e));
													if (!(0,
													l.fn)(a))
															return e;
													const n = S.l9(a, o);
													return (0,
													p.Nn)((0,
													F.vd)(n, o, {
															dateFormat: r
													}))
											}
									case i.z2.DateTime:
											{
													const {dateFormat: r, timeFormat: a} = g.Nx(o, t)
														, n = (0,
													c.zq)(d.YA(e));
													if (!(0,
													l.fn)(n))
															return e;
													const s = S.l9(n, o);
													return (0,
													p.Nn)((0,
													F.vd)(s, o, {
															dateFormat: r,
															timeFormat: a
													}))
											}
									case i.z2.Time:
											return S.$m(o, e);
									case i.z2.Percent:
											{
													const {grouping: o, precision: r} = g.q$(t);
													return S.zn(e, r, o || void 0)
											}
									case i.z2.Currency:
											{
													const {code: o, format: r, precision: a} = g.pL(t);
													return S.tw(e, o, r, a)
											}
									case i.z2.Duration:
											{
													const {maxUnit: r, precision: a} = g.CJ(t);
													return S.V3(o, e, a, r)
											}
									case i.z2.Slider:
									case i.z2.ProgressBar:
									case i.z2.Scale:
											return e;
									default:
											return (0,
											p.pL)(t.codaType)
									}
							return e
					}
					visitString(e, t, o) {
							if (t?.type === i.eV.String)
									switch (t.codaType) {
									case i.z2.Html:
									case i.z2.Markdown:
									case i.z2.CodaInternalRichText:
											return e
									}
							if (this._packId === n.OW.CodaDoc && (e = (0,
							s.mN)(e)),
							t && t.type === i.eV.String && t.codaType && "string" == typeof t.codaType) {
									const {codaType: a} = t;
									switch (a) {
									case i.z2.Html:
									case i.z2.Markdown:
									case i.z2.CodaInternalRichText:
											return e;
									case i.z2.Date:
											{
													const {format: r} = g.Ad(o, t)
														, a = (0,
													y._U)(e, o);
													if (a) {
															const e = S.l9(a, o);
															return (0,
															p.Nn)((0,
															F.vd)(e, o, {
																	dateFormat: r
															}))
													}
													return e
											}
									case i.z2.DateTime:
											{
													const {dateFormat: r, timeFormat: a} = g.Nx(o, t)
														, n = (0,
													y._U)(e, o);
													if (n) {
															const e = S.l9(n, o);
															return (0,
															p.Nn)((0,
															F.vd)(e, o, {
																	dateFormat: r,
																	timeFormat: a
															}))
													}
													return e
											}
									case i.z2.Time:
											{
													const t = (0,
													R.pe)(e);
													return t ? S.$m(o, t) : e
											}
									case i.z2.Duration:
											const n = e ? (0,
											m.E9)(o, e) : null;
											return n ? S.EV(o, n.formatted, n) : "";
									case i.z2.ImageReference:
									case i.z2.ImageAttachment:
									case i.z2.Attachment:
											return e ? this.visitImage(e, t, o) : "";
									case i.z2.Email:
									case i.z2.Url:
											return S._3(e);
									case i.z2.Embed:
											return S.PJ(e, {
													renderMethod: t.force ? r.cU.Legacy : void 0
											});
									case i.z2.SelectList:
											return e;
									default:
											return (0,
											p.pL)(a)
									}
							}
							if (t && t.type === i.eV.Number) {
									const {number: r, percent: a} = (0,
									f.$J)(e, o.localeNumberFormat) || {};
									if (a || t.codaType && t.codaType === i.z2.Percent) {
											const e = t.codaType === i.z2.Percent ? t.precision : void 0
												, o = t.codaType === i.z2.Percent ? t.useThousandsSeparator : void 0;
											return S.zn(r, e, o)
									}
							}
							return e
					}
					async visitObject(e, t, o) {
							if ((0,
							s.Pf)(e))
									return this.richValueConverter.visit(o, e);
							const r = {}
								, n = (0,
							a.isObject)(t) ? S.R5(e, t) : void 0
								, i = async s => {
									const i = e[s];
									s !== n && this._stripBlankValues && (0,
									M.tQ)(i) || (r[s] = await this.visit(i, (0,
									a.isObject)(t) ? t.properties[s] : void 0, o))
							}
							;
							n && void 0 !== e[n] && await i(n);
							for (const t in e)
									e.hasOwnProperty(t) && n !== t && (await i(t),
									this._allowYielding && await h.h5());
							return S.Rw(r)
					}
					async visitForGenericSyncUpdateResult(e, t, o) {
							const r = e
								, n = (0,
							a.isArray)(t) ? t.items : void 0;
							for (const t of e) {
									const {outcome: e} = t;
									switch (e) {
									case i.oJ.Success:
											const r = S.Tc(t.finalValue) ? t.finalValue.value : t.finalValue;
											t.finalValue = await this.visitObject(r, n, o);
											break;
									case i.oJ.Error:
											t.error = this._visitError(t.error);
											break;
									default:
											(0,
											p.pL)(e)
									}
							}
							return r
					}
					_visitError(e) {
							if (!e.name || !e.message)
									throw new Error("Pack reported error object is missing name or message properties.");
							return e
					}
					async visit(e, t, o) {
							let r = e;
							return (S.Tc(e) || S.D8(e)) && (r = e.value),
							S.x1(r) ? r : Array.isArray(r) ? this.visitArray(r, t, o) : r instanceof Date ? this.visitDate(r, t, o) : "number" == typeof r ? this.visitNumber(r, t, o) : "string" == typeof r ? this.visitString(r, t, o) : r && "object" == typeof r ? this.visitObject(r, t, o) : r
					}
					static async wrapObject({value: e, schema: t, context: o, packId: r, allowYielding: a, stripBlankValues: n}) {
							return new this({
									packId: r,
									allowYielding: a,
									stripBlankValues: n
							}).visit(e, t, o)
					}
			}
	},
	847428: function(e, t, o) {
			"use strict";
			o.d(t, {
					FG: function() {
							return n
					},
					tQ: function() {
							return a
					},
					wD: function() {
							return r
					}
			});
			const r = new (o(835291).A)({
					html: !0,
					linkify: !0,
					typographer: !0
			})
				, a = /^\[([ xX])?\]\s+/;
			function n(e, t) {
					let o;
					for (const [r,a] of e.attrs || [])
							t === r && (o = a);
					return o
			}
	},
	221643: function(e, t, o) {
			"use strict";
			o.d(t, {
					G: function() {
							return I
					}
			});
			var r = o(847428)
				, a = o(212383)
				, n = o(318225)
				, s = o(489360)
				, i = o(639057)
				, u = o(214571)
				, p = o(914511)
				, c = o(767321)
				, l = o(974394)
				, d = o(657757)
				, g = o(8548)
				, y = o(787662)
				, m = o(353591)
				, f = o(649247);
			const R = {
					em: {
							italic: !0
					},
					s: {
							lineThrough: !0
					},
					code: {
							monospace: !0
					}
			}
				, h = {
					"**": {
							bold: !0
					},
					__: {
							underline: !0
					}
			}
				, F = {
					h1: u.Uj.H1,
					h2: u.Uj.H2,
					h3: u.Uj.H3,
					code: u.Uj.Code,
					blockquote: u.Uj.BlockQuote,
					ol: u.Uj.NumberedList,
					ul: u.Uj.BulletedList
			};
			function M(e) {
					return R[e.tag] || h[e.markup]
			}
			function S(e) {
					return F[e.tag] ?? u.Uj.Paragraph
			}
			class I extends p.d {
					static createSlate(e, t, o) {
							const a = r.wD.parse(t, {});
							return new I(e,o).traverse(a)
					}
					constructor(e, t={}, o) {
							super(),
							this._context = e,
							this._options = t,
							this._logger = o ?? l.A7
					}
					traverse(e) {
							let t = 0;
							for (; t < e.length; )
									({index: t} = this._traverseDown(e, t));
							return this._removeTrailingEmptyLine(),
							this._createSlate()
					}
					traverseParagraph(e, t) {
							return 0 === e[t].level && (this._lineStyles.lineType = S(e[t])),
							this._createNewLine(),
							this._traverseDown(e, t + 1)
					}
					_traverseBlockOpenToken(e, t, o=!1) {
							return this._lineStyles.lineType = S(e[t]),
							o && this._createNewLine(),
							this._traverseDown(e, t + 1)
					}
					_traverseList(e, t) {
							return e[t].level > 0 && this._lineStyles.lineLevel++,
							this._traverseBlockOpenToken(e, t)
					}
					traverseBulletList(e, t) {
							return this._traverseList(e, t)
					}
					traverseOrderedList(e, t) {
							return this._traverseList(e, t)
					}
					traverseBlockquote(e, t) {
							return this._traverseBlockOpenToken(e, t)
					}
					traverseHeading(e, t) {
							return this._traverseBlockOpenToken(e, t, !0)
					}
					_traverseCodeBlock(e) {
							let t;
							e.info && (t = i.W1[e.info]),
							this._withContainer(u.ib.createCodeBlockNode({
									children: [],
									language: t
							}), ( () => {
									this._lineStyles.lineType = u.Uj.Code;
									const t = e.content.endsWith("\n") ? e.content.slice(0, -1) : e.content;
									this._traverseTextContent(t)
							}
							))
					}
					traverseFence(e) {
							this._traverseCodeBlock(e)
					}
					traverseCodeBlock(e) {
							this._traverseCodeBlock(e)
					}
					traverseHr(e) {
							this._appendFragment([u.ib.createDividerLineNode()], {
									onSameLine: !0
							})
					}
					traverseTable(e, t) {
							if (!(this._options.supportsTables && void 0 !== this._options.canvas))
									return this.traverseNesting(e, t);
							const o = [];
							let r = []
								, n = t + 1
								, s = 0
								, i = 0;
							const p = this._stashAppendedFragments();
							for (; n < e.length; ) {
									const t = e[n];
									if ("table_close" === t.type)
											break;
									switch (t.type) {
									case "tr_open":
											r = [];
											break;
									case "tr_close":
											o.push(r),
											i++;
											break;
									case "th_open":
									case "td_open":
											this._blocks = [];
											break;
									case "th_close":
									case "td_close":
											const e = new a.F(this._blocks);
											let n;
											n = (0,
											g.rX)(e) ? (0,
											y.Hd)(e) : u.ib.getTextForDocument(e.root),
											r.push(n),
											s++;
											break;
									case "inline":
											this.traverseInline(t)
									}
									n++
							}
							if (p(),
							0 === o.length)
									return this._logger.warn("Empty table found, skipping table creation", {
											tokenIndex: t
									}),
									{
											index: n + 1
									};
							try {
									const e = this._createGrid(o, this._options.canvas);
									this._appendFragment([u.ib.createTableNode(e)])
							} catch (o) {
									return this._logger.error("Failed to create table, converting to text", {
											rows: i,
											cells: s,
											error: (0,
											f.r)(o)
									}),
									this.traverseNesting(e, t)
							}
							return {
									index: n + 1
							}
					}
					traverseHardbreak(e) {
							this._addSoftBreak()
					}
					traverseSoftbreak(e) {
							this._addSoftBreak()
					}
					traverseText(e) {
							let t = e.content;
							if (this._lineStyles.lineType === u.Uj.BulletedList) {
									let e;
									const o = t.match(r.tQ);
									if (o?.length) {
											e = "x" === o[1] || "X" === o[1] || void 0;
											const a = this._getCurrentBlock();
											if (a && u.ib.nodeIsLine(a)) {
													const t = u.ib.createLineNode(u.Uj.CheckboxList, {
															...a,
															isChecked: e
													});
													this._blocks.pop(),
													this._blocks.push(t)
											} else
													this._logger.warn("Failed to convert list item to checkbox - no current line found", {
															hasCurrentLine: Boolean(a),
															currentLineType: a ? a.type : "none"
													});
											t = t.replace(r.tQ, "")
									}
							}
							this._traverseTextContent(t)
					}
					traverseInline(e) {
							if (!e.children)
									return;
							const t = e.children;
							let o = 0;
							for (; o < t.length; )
									({index: o} = this._traverseDown(t, o))
					}
					traverseImage(e) {
							const t = (0,
							r.FG)(e, "src") || "";
							try {
									const o = m.x$(t, {
											width: 0,
											height: 0,
											altText: e.content
									})
										, r = (0,
									d.ns)(this._context, o);
									this._appendFragment(r)
							} catch (e) {
									throw this._logger.error("Failed to process image, skipping", {
											src: t,
											error: (0,
											f.r)(e)
									}),
									e
							}
					}
					traverseCodeInline(e) {
							const t = M(e);
							try {
									const o = (0,
									d.ns)(this._context, e.content);
									this._applyInlineStylesToFragment(o, {
											...this._spanStyles,
											...t
									}),
									this._appendFragment(o)
							} catch (t) {
									this._logger.error("Failed to process inline code, treating as plain text", {
											error: (0,
											f.r)(t)
									}),
									this._traverseTextContent(e.content)
							}
					}
					traverseLink(e, t) {
							const o = e[t]
								, a = (0,
							r.FG)(o, "href") || ""
								, n = e[t + 1];
							if (n)
									try {
											const e = (0,
											d.ns)(this._context, m._3(a, n.content || ""));
											this._applyInlineStylesToFragment(e, this._spanStyles),
											this._appendFragment(e)
									} catch (e) {
											this._logger.error("Failed to process link, converting to plain text", {
													href: a,
													linkText: n.content,
													error: (0,
													f.r)(e)
											}),
											this._traverseTextContent(n.content || a)
									}
							else
									this._logger.warn("Link token found without content node. Skipping", {
											href: a
									});
							return {
									index: t + (n ? 2 : 1)
							}
					}
					traverseNesting(e, t) {
							const o = M(e[t]);
							return o && Object.assign(this._spanStyles, o),
							this._traverseDown(e, t + 1)
					}
					_traverseDown(e, t) {
							for (; t < e.length; ) {
									const o = e[t];
									if (-1 === o.nesting)
											return {
													index: t + 1
											};
									if (0 === o.nesting) {
											const e = c._.camelCase(`traverse_${o.type}`);
											this[e] ? this._protectStyles(( () => {
													this[e](o)
											}
											)) : this._logger.error(`Unsupported markdown token type, skipping: ${o.type}`, {
													tokenType: o.type,
													hasContent: Boolean(o.content)
											}),
											t++
									} else {
											let r;
											const a = c._.camelCase(`traverse_${o.type.slice(0, -5)}`);
											this[a] ? r = this._protectStyles(( () => this[a](e, t))) : (this._logger.error(`Unsupported markdown nesting token type, using default traversal: ${o.type}`, {
													tokenType: o.type,
													nestingMethod: a
											}),
											r = this._protectStyles(( () => this.traverseNesting(e, t)))),
											t = r.index
									}
							}
							return {
									index: t
							}
					}
					_traverseTextContent(e) {
							if (!e)
									return;
							const t = e.replace(/\xa0/g, " ");
							try {
									const e = (0,
									d.ns)(this._context, t);
									this._applyInlineStylesToFragment(e),
									this._appendFragment(e)
							} catch (e) {
									throw this._logger.error("Failed to create slate blocks from text content", {
											error: (0,
											f.r)(e)
									}),
									new Error(`Failed to process text content: ${(0,
									f.r)(e)}`)
							}
					}
					_createGrid(e, t) {
							if (0 === e.length)
									throw new Error("Cannot create grid with no rows");
							if (0 === Math.max(...e.map((e => e.length))))
									throw new Error("Cannot create grid with no columns");
							const o = t.addPopulatedGrid({
									rows: e,
									inferFormats: !1
							});
							return t.document.session.resolver.typedGetters.getGrid(o).setProperty(n.qCo.GridConfigurationSet, s.l.SimpleTable),
							o
					}
					_stashAppendedFragments() {
							const e = this._blocks;
							return this._blocks = [],
							() => {
									this._blocks = e
							}
					}
			}
	},
	649247: function(e, t, o) {
			"use strict";
			o.d(t, {
					r: function() {
							return a
					}
			});
			var r = o(439983);
			function a(e) {
					return "string" == typeof e ? e : e instanceof Error ? e.message : (0,
					r.inspect)(e)
			}
	},
	218185: function(e, t, o) {
			"use strict";
			o.d(t, {
					Z: function() {
							return i
					}
			});
			var r = o(210876)
				, a = o(143858)
				, n = o(283130);
			const s = 1;
			function i(e) {
					return u((0,
					r.parse)(e, {
							comment: !1,
							blockTextElements: {
									script: !1,
									noscript: !0,
									style: !1
							}
					}))
			}
			function u(e) {
					if (e.nodeType === s) {
							const t = e;
							switch ((t.tagName || "").toUpperCase()) {
							case "A":
									return new d(t);
							case "IMG":
									return new g(t);
							case "IFRAME":
									return new y(t);
							case "TABLE":
									return new m(t);
							case "TR":
									return new R(t);
							case "TD":
							case "TH":
									return new f(t);
							default:
									return new l(t)
							}
					}
					return new p(e)
			}
			class p {
					constructor(e, t) {
							this.ELEMENT_NODE = s,
							this.ATTRIBUTE_NODE = 2,
							this.TEXT_NODE = 3,
							this.CDATA_SECTION_NODE = 4,
							this.PROCESSING_INSTRUCTION_NODE = 7,
							this.COMMENT_NODE = 8,
							this.DOCUMENT_NODE = 9,
							this.DOCUMENT_TYPE_NODE = 10,
							this.DOCUMENT_FRAGMENT_NODE = 11,
							this._node = e,
							this._nodeName = t
					}
					get childNodes() {
							return this._node.childNodes.map(u)
					}
					get firstChild() {
							const e = this._node.childNodes[0];
							return e ? u(e) : null
					}
					removeChild(e) {
							const t = e._node;
							return this._node.childNodes = this._node.childNodes.filter((e => e !== t)),
							e
					}
					get nodeType() {
							return this._node.nodeType
					}
					get parentElement() {
							const e = this._node.parentNode;
							return e instanceof HTMLElement ? e : null
					}
					get nodeName() {
							if (this._nodeName)
									return this._nodeName;
							switch (this._node.nodeType) {
							case this.TEXT_NODE:
									return "#text";
							case this.CDATA_SECTION_NODE:
									return "#cdata-section";
							case this.COMMENT_NODE:
									return "#comment";
							case this.DOCUMENT_NODE:
									return "#document";
							case this.DOCUMENT_FRAGMENT_NODE:
									return "#document-fragment";
							default:
									return "#unknown"
							}
					}
					get textContent() {
							return void 0 === this._decodedTextContent && (this._decodedTextContent = (0,
							a.D4)(this._node.textContent) || ""),
							this._decodedTextContent
					}
			}
			const c = class e extends p {
					constructor(e) {
							const t = (e.tagName || "div").toUpperCase();
							super(e, t),
							this._element = e,
							this._tagName = t
					}
					get style() {
							return {
									visibility: (e._VISIBILITY_MATCHER.exec(this.getAttribute("style") || "") || [])[1]
							}
					}
					get innerHTML() {
							return this._element.innerHTML
					}
					get outerHTML() {
							return this._element.outerHTML
					}
					get children() {
							return this._element.childNodes.filter((e => e.nodeType === s)).map((e => u(e)))
					}
					getElementsByTagName(e) {
							let t = [...this.children];
							const o = [];
							for (; t.length; ) {
									const r = (0,
									n.Nn)(t.shift());
									r.tagName.toUpperCase() === e && o.push(r),
									t = t.concat(...r.children)
							}
							return o
					}
					get className() {
							return this._element.classNames
					}
					get dataset() {
							return {}
					}
					getAttribute(e) {
							return this._element.getAttribute(e) ?? null
					}
					setAttribute(e, t) {
							return this._element.setAttribute(e, t)
					}
					hasAttribute(e) {
							return this._element.hasAttribute(e)
					}
					get tagName() {
							return this._tagName
					}
					get classList() {
							let e = this._element.classNames.split(" ").filter(Boolean);
							return {
									get length() {
											return e.length
									},
									values: () => e.values(),
									contains: t => e.includes(t),
									forEach(t) {
											for (const [o,r] of e.entries())
													t(r, o, e)
									},
									remove(t) {
											e = e.filter((e => e !== t))
									}
							}
					}
					querySelector(t) {
							const o = this._element.querySelector(t);
							if (o)
									return new e(o)
					}
					querySelectorAll(t) {
							return this._element.querySelectorAll(t).map((t => new e(t)))
					}
					closest(t) {
							const o = this._element.closest(t);
							return o instanceof r.HTMLElement ? new e(o) : null
					}
					insertAdjacentHTML(e, t) {
							this._element.insertAdjacentHTML(e, t)
					}
			}
			;
			c._VISIBILITY_MATCHER = /visibility:\W([\w-]+)/i;
			let l = c;
			class d extends l {
					get href() {
							return this.getAttribute("href") || ""
					}
			}
			class g extends l {
					get src() {
							return this.getAttribute("src") || ""
					}
					get width() {
							return h(this.getAttribute("width")?.replace("px", ""))
					}
					get height() {
							return h(this.getAttribute("height")?.replace("px", ""))
					}
					get alt() {
							return this.getAttribute("alt") || ""
					}
			}
			class y extends l {
					get src() {
							return this.getAttribute("src") || ""
					}
					get width() {
							return this.getAttribute("width") || ""
					}
					get height() {
							return this.getAttribute("height") || ""
					}
			}
			class m extends l {
					constructor(e) {
							if (!e.childNodes.some((e => "TBODY" === (e.tagName || "").toUpperCase()))) {
									const t = new r.HTMLElement("tbody",{},"",e.parentNode,[-1, -1])
										, o = e.childNodes.filter((e => "TR" === (e.tagName || "").toUpperCase()));
									for (const t of o)
											e.removeChild(t);
									for (const e of o)
											t.appendChild(e);
									e.appendChild(t)
							}
							super(e)
					}
			}
			class f extends l {
					get rowSpan() {
							return h(this.getAttribute("rowspan"))
					}
					get colSpan() {
							return h(this.getAttribute("colspan"))
					}
			}
			class R extends l {
					get rowIndex() {
							return h(this.getAttribute("rowindex"))
					}
			}
			function h(e) {
					return null == e ? 0 : Number(e)
			}
	},
	933764: function(e, t, o) {
			"use strict";
			var r = o(972037)
				, a = r
				, n = Function("return this")();
			a.exportSymbol("proto.coda.BoolArray", null, n),
			a.exportSymbol("proto.coda.BrainQuery", null, n),
			a.exportSymbol("proto.coda.CalcServiceContextType", null, n),
			a.exportSymbol("proto.coda.CompletionToken", null, n),
			a.exportSymbol("proto.coda.Connection", null, n),
			a.exportSymbol("proto.coda.ConnectionNameMetadataRequest", null, n),
			a.exportSymbol("proto.coda.Context", null, n),
			a.exportSymbol("proto.coda.ContinuationToken", null, n),
			a.exportSymbol("proto.coda.DateArray", null, n),
			a.exportSymbol("proto.coda.DoubleArray", null, n),
			a.exportSymbol("proto.coda.ExecuteGetPermissionsRequest", null, n),
			a.exportSymbol("proto.coda.ExecuteGetPermissionsRequestRow", null, n),
			a.exportSymbol("proto.coda.ExecutionError", null, n),
			a.exportSymbol("proto.coda.ExecutionError.BodyCase", null, n),
			a.exportSymbol("proto.coda.ExecutionErrorType", null, n),
			a.exportSymbol("proto.coda.Formula", null, n),
			a.exportSymbol("proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest", null, n),
			a.exportSymbol("proto.coda.GetDynamicSyncTableNameMetadataRequest", null, n),
			a.exportSymbol("proto.coda.GetIdentifiersForConnectionRequest", null, n),
			a.exportSymbol("proto.coda.GetIdentifiersForConnectionResponse", null, n),
			a.exportSymbol("proto.coda.GetIdentifiersForConnectionResponse.Identifiers", null, n),
			a.exportSymbol("proto.coda.GetIdentifiersForConnectionResponse.ResultCase", null, n),
			a.exportSymbol("proto.coda.GetPermissionsResponse", null, n),
			a.exportSymbol("proto.coda.GetSyncTableSchemaMetadataRequest", null, n),
			a.exportSymbol("proto.coda.ImpersonateInvokeBrainQueryRequest", null, n),
			a.exportSymbol("proto.coda.ImpersonateInvokeFormulaRequest", null, n),
			a.exportSymbol("proto.coda.ImpersonateInvokeMetadataFormulaRequest", null, n),
			a.exportSymbol("proto.coda.ImpersonateInvokeSqlQueryRequest", null, n),
			a.exportSymbol("proto.coda.Int64Array", null, n),
			a.exportSymbol("proto.coda.InvocationSource", null, n),
			a.exportSymbol("proto.coda.InvokeBrainQueryRequest", null, n),
			a.exportSymbol("proto.coda.InvokeExecuteGetPermissionsRequest", null, n),
			a.exportSymbol("proto.coda.InvokeExecuteGetPermissionsResponse", null, n),
			a.exportSymbol("proto.coda.InvokeExecuteGetPermissionsResponse.ResultCase", null, n),
			a.exportSymbol("proto.coda.InvokeFormulaRequest", null, n),
			a.exportSymbol("proto.coda.InvokeFormulaResponse", null, n),
			a.exportSymbol("proto.coda.InvokeFormulaResponse.ResultCase", null, n),
			a.exportSymbol("proto.coda.InvokeMetadataFormulaRequest", null, n),
			a.exportSymbol("proto.coda.InvokeMetadataFormulaRequest.TypeCase", null, n),
			a.exportSymbol("proto.coda.InvokeQueryResponse", null, n),
			a.exportSymbol("proto.coda.InvokeQueryResponse.ResultCase", null, n),
			a.exportSymbol("proto.coda.InvokeSqlQueryRequest", null, n),
			a.exportSymbol("proto.coda.InvokeSyncFormulaRequest", null, n),
			a.exportSymbol("proto.coda.InvokeSyncFormulaResponse", null, n),
			a.exportSymbol("proto.coda.InvokeSyncFormulaResponse.ResultCase", null, n),
			a.exportSymbol("proto.coda.InvokeSyncUpdateFormulaRequest", null, n),
			a.exportSymbol("proto.coda.InvokeSyncUpdateFormulaResponse", null, n),
			a.exportSymbol("proto.coda.InvokeSyncUpdateFormulaResponse.ResultCase", null, n),
			a.exportSymbol("proto.coda.ListSyncTableDynamicUrlsMetadataRequest", null, n),
			a.exportSymbol("proto.coda.MissingOAuthScopesError", null, n),
			a.exportSymbol("proto.coda.ParameterAutocompleteMetadataRequest", null, n),
			a.exportSymbol("proto.coda.ParameterAutocompleteMetadataRequest.FormulaTypeCase", null, n),
			a.exportSymbol("proto.coda.PermissionSyncMode", null, n),
			a.exportSymbol("proto.coda.PermissionsContext", null, n),
			a.exportSymbol("proto.coda.PostAuthSetupMetadataRequest", null, n),
			a.exportSymbol("proto.coda.PropertyOptionsMetadataRequest", null, n),
			a.exportSymbol("proto.coda.PublishMode", null, n),
			a.exportSymbol("proto.coda.QueryCompleteResult", null, n),
			a.exportSymbol("proto.coda.QueryProgressResult", null, n),
			a.exportSymbol("proto.coda.ResponseAnnotations", null, n),
			a.exportSymbol("proto.coda.ResultValue", null, n),
			a.exportSymbol("proto.coda.ResultValue.TypeCase", null, n),
			a.exportSymbol("proto.coda.RowUpdate", null, n),
			a.exportSymbol("proto.coda.SearchSyncTableDynamicUrlsMetadataRequest", null, n),
			a.exportSymbol("proto.coda.SimpleValue", null, n),
			a.exportSymbol("proto.coda.SimpleValue.TypeCase", null, n),
			a.exportSymbol("proto.coda.SimpleValueArray", null, n),
			a.exportSymbol("proto.coda.SqlQuery", null, n),
			a.exportSymbol("proto.coda.SqlQueryColumn", null, n),
			a.exportSymbol("proto.coda.SqlQueryMetadata", null, n),
			a.exportSymbol("proto.coda.StringArray", null, n),
			a.exportSymbol("proto.coda.SyncFormula", null, n),
			a.exportSymbol("proto.coda.ValidateParametersMetadataRequest", null, n),
			a.exportSymbol("proto.coda.ValidateParametersMetadataRequest.FormulaTypeCase", null, n),
			a.exportSymbol("proto.coda.Value", null, n),
			a.exportSymbol("proto.coda.Value.TypeCase", null, n),
			proto.coda.Formula = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.Formula, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.Formula.displayName = "proto.coda.Formula"),
			proto.coda.StringArray = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.StringArray.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.StringArray, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.StringArray.displayName = "proto.coda.StringArray"),
			proto.coda.Int64Array = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.Int64Array.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.Int64Array, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.Int64Array.displayName = "proto.coda.Int64Array"),
			proto.coda.DoubleArray = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.DoubleArray.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.DoubleArray, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.DoubleArray.displayName = "proto.coda.DoubleArray"),
			proto.coda.BoolArray = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.BoolArray.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.BoolArray, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.BoolArray.displayName = "proto.coda.BoolArray"),
			proto.coda.DateArray = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.DateArray.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.DateArray, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.DateArray.displayName = "proto.coda.DateArray"),
			proto.coda.SimpleValue = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.SimpleValue.oneofGroups_)
			}
			,
			a.inherits(proto.coda.SimpleValue, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SimpleValue.displayName = "proto.coda.SimpleValue"),
			proto.coda.SimpleValueArray = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.SimpleValueArray.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.SimpleValueArray, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SimpleValueArray.displayName = "proto.coda.SimpleValueArray"),
			proto.coda.Value = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.Value.oneofGroups_)
			}
			,
			a.inherits(proto.coda.Value, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.Value.displayName = "proto.coda.Value"),
			proto.coda.ResultValue = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.ResultValue.oneofGroups_)
			}
			,
			a.inherits(proto.coda.ResultValue, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ResultValue.displayName = "proto.coda.ResultValue"),
			proto.coda.Connection = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.Connection, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.Connection.displayName = "proto.coda.Connection"),
			proto.coda.Context = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.Context, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.Context.displayName = "proto.coda.Context"),
			proto.coda.InvokeFormulaRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.InvokeFormulaRequest.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.InvokeFormulaRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeFormulaRequest.displayName = "proto.coda.InvokeFormulaRequest"),
			proto.coda.ImpersonateInvokeFormulaRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ImpersonateInvokeFormulaRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ImpersonateInvokeFormulaRequest.displayName = "proto.coda.ImpersonateInvokeFormulaRequest"),
			proto.coda.ConnectionNameMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ConnectionNameMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ConnectionNameMetadataRequest.displayName = "proto.coda.ConnectionNameMetadataRequest"),
			proto.coda.ParameterAutocompleteMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.ParameterAutocompleteMetadataRequest.oneofGroups_)
			}
			,
			a.inherits(proto.coda.ParameterAutocompleteMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ParameterAutocompleteMetadataRequest.displayName = "proto.coda.ParameterAutocompleteMetadataRequest"),
			proto.coda.ValidateParametersMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.ValidateParametersMetadataRequest.oneofGroups_)
			}
			,
			a.inherits(proto.coda.ValidateParametersMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ValidateParametersMetadataRequest.displayName = "proto.coda.ValidateParametersMetadataRequest"),
			proto.coda.PropertyOptionsMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.PropertyOptionsMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.PropertyOptionsMetadataRequest.displayName = "proto.coda.PropertyOptionsMetadataRequest"),
			proto.coda.PostAuthSetupMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.PostAuthSetupMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.PostAuthSetupMetadataRequest.displayName = "proto.coda.PostAuthSetupMetadataRequest"),
			proto.coda.GetSyncTableSchemaMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.GetSyncTableSchemaMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetSyncTableSchemaMetadataRequest.displayName = "proto.coda.GetSyncTableSchemaMetadataRequest"),
			proto.coda.GetDynamicSyncTableNameMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.GetDynamicSyncTableNameMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetDynamicSyncTableNameMetadataRequest.displayName = "proto.coda.GetDynamicSyncTableNameMetadataRequest"),
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.displayName = "proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest"),
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ListSyncTableDynamicUrlsMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ListSyncTableDynamicUrlsMetadataRequest.displayName = "proto.coda.ListSyncTableDynamicUrlsMetadataRequest"),
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.SearchSyncTableDynamicUrlsMetadataRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.displayName = "proto.coda.SearchSyncTableDynamicUrlsMetadataRequest"),
			proto.coda.InvokeMetadataFormulaRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_)
			}
			,
			a.inherits(proto.coda.InvokeMetadataFormulaRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeMetadataFormulaRequest.displayName = "proto.coda.InvokeMetadataFormulaRequest"),
			proto.coda.ImpersonateInvokeMetadataFormulaRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ImpersonateInvokeMetadataFormulaRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ImpersonateInvokeMetadataFormulaRequest.displayName = "proto.coda.ImpersonateInvokeMetadataFormulaRequest"),
			proto.coda.GetIdentifiersForConnectionRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.GetIdentifiersForConnectionRequest.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.GetIdentifiersForConnectionRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetIdentifiersForConnectionRequest.displayName = "proto.coda.GetIdentifiersForConnectionRequest"),
			proto.coda.SyncFormula = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.SyncFormula, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SyncFormula.displayName = "proto.coda.SyncFormula"),
			proto.coda.ContinuationToken = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ContinuationToken, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ContinuationToken.displayName = "proto.coda.ContinuationToken"),
			proto.coda.CompletionToken = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.CompletionToken, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.CompletionToken.displayName = "proto.coda.CompletionToken"),
			proto.coda.ResponseAnnotations = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ResponseAnnotations, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ResponseAnnotations.displayName = "proto.coda.ResponseAnnotations"),
			proto.coda.InvokeSyncFormulaRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.InvokeSyncFormulaRequest.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.InvokeSyncFormulaRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeSyncFormulaRequest.displayName = "proto.coda.InvokeSyncFormulaRequest"),
			proto.coda.RowUpdate = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.RowUpdate.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.RowUpdate, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.RowUpdate.displayName = "proto.coda.RowUpdate"),
			proto.coda.InvokeSyncUpdateFormulaRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.InvokeSyncUpdateFormulaRequest.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.InvokeSyncUpdateFormulaRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeSyncUpdateFormulaRequest.displayName = "proto.coda.InvokeSyncUpdateFormulaRequest"),
			proto.coda.MissingOAuthScopesError = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.MissingOAuthScopesError.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.MissingOAuthScopesError, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.MissingOAuthScopesError.displayName = "proto.coda.MissingOAuthScopesError"),
			proto.coda.ExecutionError = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.ExecutionError.oneofGroups_)
			}
			,
			a.inherits(proto.coda.ExecutionError, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ExecutionError.displayName = "proto.coda.ExecutionError"),
			proto.coda.InvokeFormulaResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.InvokeFormulaResponse.oneofGroups_)
			}
			,
			a.inherits(proto.coda.InvokeFormulaResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeFormulaResponse.displayName = "proto.coda.InvokeFormulaResponse"),
			proto.coda.GetIdentifiersForConnectionResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.GetIdentifiersForConnectionResponse.oneofGroups_)
			}
			,
			a.inherits(proto.coda.GetIdentifiersForConnectionResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetIdentifiersForConnectionResponse.displayName = "proto.coda.GetIdentifiersForConnectionResponse"),
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.GetIdentifiersForConnectionResponse.Identifiers, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetIdentifiersForConnectionResponse.Identifiers.displayName = "proto.coda.GetIdentifiersForConnectionResponse.Identifiers"),
			proto.coda.InvokeSyncFormulaResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.InvokeSyncFormulaResponse.repeatedFields_, proto.coda.InvokeSyncFormulaResponse.oneofGroups_)
			}
			,
			a.inherits(proto.coda.InvokeSyncFormulaResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeSyncFormulaResponse.displayName = "proto.coda.InvokeSyncFormulaResponse"),
			proto.coda.InvokeSyncUpdateFormulaResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.InvokeSyncUpdateFormulaResponse.oneofGroups_)
			}
			,
			a.inherits(proto.coda.InvokeSyncUpdateFormulaResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeSyncUpdateFormulaResponse.displayName = "proto.coda.InvokeSyncUpdateFormulaResponse"),
			proto.coda.SqlQuery = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.SqlQuery.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.SqlQuery, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SqlQuery.displayName = "proto.coda.SqlQuery"),
			proto.coda.InvokeSqlQueryRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.InvokeSqlQueryRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeSqlQueryRequest.displayName = "proto.coda.InvokeSqlQueryRequest"),
			proto.coda.ImpersonateInvokeSqlQueryRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ImpersonateInvokeSqlQueryRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ImpersonateInvokeSqlQueryRequest.displayName = "proto.coda.ImpersonateInvokeSqlQueryRequest"),
			proto.coda.QueryProgressResult = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.QueryProgressResult, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.QueryProgressResult.displayName = "proto.coda.QueryProgressResult"),
			proto.coda.QueryCompleteResult = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.QueryCompleteResult, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.QueryCompleteResult.displayName = "proto.coda.QueryCompleteResult"),
			proto.coda.InvokeQueryResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.InvokeQueryResponse.oneofGroups_)
			}
			,
			a.inherits(proto.coda.InvokeQueryResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeQueryResponse.displayName = "proto.coda.InvokeQueryResponse"),
			proto.coda.SqlQueryColumn = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.SqlQueryColumn, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SqlQueryColumn.displayName = "proto.coda.SqlQueryColumn"),
			proto.coda.SqlQueryMetadata = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.SqlQueryMetadata.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.SqlQueryMetadata, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.SqlQueryMetadata.displayName = "proto.coda.SqlQueryMetadata"),
			proto.coda.BrainQuery = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.BrainQuery, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.BrainQuery.displayName = "proto.coda.BrainQuery"),
			proto.coda.InvokeBrainQueryRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.InvokeBrainQueryRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeBrainQueryRequest.displayName = "proto.coda.InvokeBrainQueryRequest"),
			proto.coda.ImpersonateInvokeBrainQueryRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ImpersonateInvokeBrainQueryRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ImpersonateInvokeBrainQueryRequest.displayName = "proto.coda.ImpersonateInvokeBrainQueryRequest"),
			proto.coda.ExecuteGetPermissionsRequestRow = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.ExecuteGetPermissionsRequestRow, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ExecuteGetPermissionsRequestRow.displayName = "proto.coda.ExecuteGetPermissionsRequestRow"),
			proto.coda.PermissionsContext = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.PermissionsContext, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.PermissionsContext.displayName = "proto.coda.PermissionsContext"),
			proto.coda.ExecuteGetPermissionsRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.ExecuteGetPermissionsRequest.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.ExecuteGetPermissionsRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.ExecuteGetPermissionsRequest.displayName = "proto.coda.ExecuteGetPermissionsRequest"),
			proto.coda.InvokeExecuteGetPermissionsRequest = function(e) {
					r.Message.initialize(this, e, 0, -1, proto.coda.InvokeExecuteGetPermissionsRequest.repeatedFields_, null)
			}
			,
			a.inherits(proto.coda.InvokeExecuteGetPermissionsRequest, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeExecuteGetPermissionsRequest.displayName = "proto.coda.InvokeExecuteGetPermissionsRequest"),
			proto.coda.GetPermissionsResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, null, null)
			}
			,
			a.inherits(proto.coda.GetPermissionsResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.GetPermissionsResponse.displayName = "proto.coda.GetPermissionsResponse"),
			proto.coda.InvokeExecuteGetPermissionsResponse = function(e) {
					r.Message.initialize(this, e, 0, -1, null, proto.coda.InvokeExecuteGetPermissionsResponse.oneofGroups_)
			}
			,
			a.inherits(proto.coda.InvokeExecuteGetPermissionsResponse, r.Message),
			a.DEBUG && !COMPILED && (proto.coda.InvokeExecuteGetPermissionsResponse.displayName = "proto.coda.InvokeExecuteGetPermissionsResponse"),
			r.Message.GENERATE_TO_OBJECT && (proto.coda.Formula.prototype.toObject = function(e) {
					return proto.coda.Formula.toObject(e, this)
			}
			,
			proto.coda.Formula.toObject = function(e, t) {
					var o = {
							packId: r.Message.getFieldWithDefault(t, 1, 0),
							namespace: r.Message.getFieldWithDefault(t, 2, ""),
							name: r.Message.getFieldWithDefault(t, 3, ""),
							packVersion: r.Message.getFieldWithDefault(t, 4, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.Formula.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.Formula;
					return proto.coda.Formula.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.Formula.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readUint32();
									e.setPackId(o);
									break;
							case 2:
									o = t.readString();
									e.setNamespace(o);
									break;
							case 3:
									o = t.readString();
									e.setName(o);
									break;
							case 4:
									o = t.readString();
									e.setPackVersion(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.Formula.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.Formula.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.Formula.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getPackId()) && t.writeUint32(1, o),
					(o = e.getNamespace()).length > 0 && t.writeString(2, o),
					(o = e.getName()).length > 0 && t.writeString(3, o),
					(o = e.getPackVersion()).length > 0 && t.writeString(4, o)
			}
			,
			proto.coda.Formula.prototype.getPackId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.Formula.prototype.setPackId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.Formula.prototype.getNamespace = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.Formula.prototype.setNamespace = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.Formula.prototype.getName = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.Formula.prototype.setName = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.Formula.prototype.getPackVersion = function() {
					return r.Message.getFieldWithDefault(this, 4, "")
			}
			,
			proto.coda.Formula.prototype.setPackVersion = function(e) {
					return r.Message.setProto3StringField(this, 4, e)
			}
			,
			proto.coda.StringArray.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.StringArray.prototype.toObject = function(e) {
					return proto.coda.StringArray.toObject(e, this)
			}
			,
			proto.coda.StringArray.toObject = function(e, t) {
					var o, a = {
							valueList: null == (o = r.Message.getRepeatedField(t, 1)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.StringArray.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.StringArray;
					return proto.coda.StringArray.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.StringArray.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = t.readString();
									e.addValue(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.StringArray.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.StringArray.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.StringArray.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getValueList()).length > 0 && t.writeRepeatedString(1, o)
			}
			,
			proto.coda.StringArray.prototype.getValueList = function() {
					return r.Message.getRepeatedField(this, 1)
			}
			,
			proto.coda.StringArray.prototype.setValueList = function(e) {
					return r.Message.setField(this, 1, e || [])
			}
			,
			proto.coda.StringArray.prototype.addValue = function(e, t) {
					return r.Message.addToRepeatedField(this, 1, e, t)
			}
			,
			proto.coda.StringArray.prototype.clearValueList = function() {
					return this.setValueList([])
			}
			,
			proto.coda.Int64Array.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.Int64Array.prototype.toObject = function(e) {
					return proto.coda.Int64Array.toObject(e, this)
			}
			,
			proto.coda.Int64Array.toObject = function(e, t) {
					var o, a = {
							valueList: null == (o = r.Message.getRepeatedField(t, 1)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.Int64Array.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.Int64Array;
					return proto.coda.Int64Array.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.Int64Array.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber())
									for (var o = t.isDelimited() ? t.readPackedInt64() : [t.readInt64()], r = 0; r < o.length; r++)
											e.addValue(o[r]);
							else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.Int64Array.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.Int64Array.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.Int64Array.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getValueList()).length > 0 && t.writePackedInt64(1, o)
			}
			,
			proto.coda.Int64Array.prototype.getValueList = function() {
					return r.Message.getRepeatedField(this, 1)
			}
			,
			proto.coda.Int64Array.prototype.setValueList = function(e) {
					return r.Message.setField(this, 1, e || [])
			}
			,
			proto.coda.Int64Array.prototype.addValue = function(e, t) {
					return r.Message.addToRepeatedField(this, 1, e, t)
			}
			,
			proto.coda.Int64Array.prototype.clearValueList = function() {
					return this.setValueList([])
			}
			,
			proto.coda.DoubleArray.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.DoubleArray.prototype.toObject = function(e) {
					return proto.coda.DoubleArray.toObject(e, this)
			}
			,
			proto.coda.DoubleArray.toObject = function(e, t) {
					var o, a = {
							valueList: null == (o = r.Message.getRepeatedFloatingPointField(t, 1)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.DoubleArray.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.DoubleArray;
					return proto.coda.DoubleArray.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.DoubleArray.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber())
									for (var o = t.isDelimited() ? t.readPackedDouble() : [t.readDouble()], r = 0; r < o.length; r++)
											e.addValue(o[r]);
							else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.DoubleArray.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.DoubleArray.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.DoubleArray.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getValueList()).length > 0 && t.writePackedDouble(1, o)
			}
			,
			proto.coda.DoubleArray.prototype.getValueList = function() {
					return r.Message.getRepeatedFloatingPointField(this, 1)
			}
			,
			proto.coda.DoubleArray.prototype.setValueList = function(e) {
					return r.Message.setField(this, 1, e || [])
			}
			,
			proto.coda.DoubleArray.prototype.addValue = function(e, t) {
					return r.Message.addToRepeatedField(this, 1, e, t)
			}
			,
			proto.coda.DoubleArray.prototype.clearValueList = function() {
					return this.setValueList([])
			}
			,
			proto.coda.BoolArray.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.BoolArray.prototype.toObject = function(e) {
					return proto.coda.BoolArray.toObject(e, this)
			}
			,
			proto.coda.BoolArray.toObject = function(e, t) {
					var o, a = {
							valueList: null == (o = r.Message.getRepeatedBooleanField(t, 1)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.BoolArray.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.BoolArray;
					return proto.coda.BoolArray.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.BoolArray.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber())
									for (var o = t.isDelimited() ? t.readPackedBool() : [t.readBool()], r = 0; r < o.length; r++)
											e.addValue(o[r]);
							else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.BoolArray.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.BoolArray.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.BoolArray.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getValueList()).length > 0 && t.writePackedBool(1, o)
			}
			,
			proto.coda.BoolArray.prototype.getValueList = function() {
					return r.Message.getRepeatedBooleanField(this, 1)
			}
			,
			proto.coda.BoolArray.prototype.setValueList = function(e) {
					return r.Message.setField(this, 1, e || [])
			}
			,
			proto.coda.BoolArray.prototype.addValue = function(e, t) {
					return r.Message.addToRepeatedField(this, 1, e, t)
			}
			,
			proto.coda.BoolArray.prototype.clearValueList = function() {
					return this.setValueList([])
			}
			,
			proto.coda.DateArray.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.DateArray.prototype.toObject = function(e) {
					return proto.coda.DateArray.toObject(e, this)
			}
			,
			proto.coda.DateArray.toObject = function(e, t) {
					var o, a = {
							valueList: null == (o = r.Message.getRepeatedFloatingPointField(t, 1)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.DateArray.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.DateArray;
					return proto.coda.DateArray.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.DateArray.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber())
									for (var o = t.isDelimited() ? t.readPackedDouble() : [t.readDouble()], r = 0; r < o.length; r++)
											e.addValue(o[r]);
							else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.DateArray.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.DateArray.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.DateArray.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getValueList()).length > 0 && t.writePackedDouble(1, o)
			}
			,
			proto.coda.DateArray.prototype.getValueList = function() {
					return r.Message.getRepeatedFloatingPointField(this, 1)
			}
			,
			proto.coda.DateArray.prototype.setValueList = function(e) {
					return r.Message.setField(this, 1, e || [])
			}
			,
			proto.coda.DateArray.prototype.addValue = function(e, t) {
					return r.Message.addToRepeatedField(this, 1, e, t)
			}
			,
			proto.coda.DateArray.prototype.clearValueList = function() {
					return this.setValueList([])
			}
			,
			proto.coda.SimpleValue.oneofGroups_ = [[1, 2, 3, 4, 5, 6]],
			proto.coda.SimpleValue.TypeCase = {
					TYPE_NOT_SET: 0,
					STRING_VAL: 1,
					INT64_VAL: 2,
					DOUBLE_VAL: 3,
					BOOL_VAL: 4,
					DATE_VAL: 5,
					IS_NULL: 6
			},
			proto.coda.SimpleValue.prototype.getTypeCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.SimpleValue.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SimpleValue.prototype.toObject = function(e) {
					return proto.coda.SimpleValue.toObject(e, this)
			}
			,
			proto.coda.SimpleValue.toObject = function(e, t) {
					var o = {
							stringVal: r.Message.getFieldWithDefault(t, 1, ""),
							int64Val: r.Message.getFieldWithDefault(t, 2, 0),
							doubleVal: r.Message.getFloatingPointFieldWithDefault(t, 3, 0),
							boolVal: r.Message.getBooleanFieldWithDefault(t, 4, !1),
							dateVal: r.Message.getFloatingPointFieldWithDefault(t, 5, 0),
							isNull: r.Message.getBooleanFieldWithDefault(t, 6, !1)
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.SimpleValue.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SimpleValue;
					return proto.coda.SimpleValue.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SimpleValue.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setStringVal(o);
									break;
							case 2:
									o = t.readInt64();
									e.setInt64Val(o);
									break;
							case 3:
									o = t.readDouble();
									e.setDoubleVal(o);
									break;
							case 4:
									o = t.readBool();
									e.setBoolVal(o);
									break;
							case 5:
									o = t.readDouble();
									e.setDateVal(o);
									break;
							case 6:
									o = t.readBool();
									e.setIsNull(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.SimpleValue.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SimpleValue.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SimpleValue.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = r.Message.getField(e, 1)) && t.writeString(1, o),
					null != (o = r.Message.getField(e, 2)) && t.writeInt64(2, o),
					null != (o = r.Message.getField(e, 3)) && t.writeDouble(3, o),
					null != (o = r.Message.getField(e, 4)) && t.writeBool(4, o),
					null != (o = r.Message.getField(e, 5)) && t.writeDouble(5, o),
					null != (o = r.Message.getField(e, 6)) && t.writeBool(6, o)
			}
			,
			proto.coda.SimpleValue.prototype.getStringVal = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.SimpleValue.prototype.setStringVal = function(e) {
					return r.Message.setOneofField(this, 1, proto.coda.SimpleValue.oneofGroups_[0], e)
			}
			,
			proto.coda.SimpleValue.prototype.clearStringVal = function() {
					return r.Message.setOneofField(this, 1, proto.coda.SimpleValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.SimpleValue.prototype.hasStringVal = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.SimpleValue.prototype.getInt64Val = function() {
					return r.Message.getFieldWithDefault(this, 2, 0)
			}
			,
			proto.coda.SimpleValue.prototype.setInt64Val = function(e) {
					return r.Message.setOneofField(this, 2, proto.coda.SimpleValue.oneofGroups_[0], e)
			}
			,
			proto.coda.SimpleValue.prototype.clearInt64Val = function() {
					return r.Message.setOneofField(this, 2, proto.coda.SimpleValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.SimpleValue.prototype.hasInt64Val = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.SimpleValue.prototype.getDoubleVal = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 3, 0)
			}
			,
			proto.coda.SimpleValue.prototype.setDoubleVal = function(e) {
					return r.Message.setOneofField(this, 3, proto.coda.SimpleValue.oneofGroups_[0], e)
			}
			,
			proto.coda.SimpleValue.prototype.clearDoubleVal = function() {
					return r.Message.setOneofField(this, 3, proto.coda.SimpleValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.SimpleValue.prototype.hasDoubleVal = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.SimpleValue.prototype.getBoolVal = function() {
					return r.Message.getBooleanFieldWithDefault(this, 4, !1)
			}
			,
			proto.coda.SimpleValue.prototype.setBoolVal = function(e) {
					return r.Message.setOneofField(this, 4, proto.coda.SimpleValue.oneofGroups_[0], e)
			}
			,
			proto.coda.SimpleValue.prototype.clearBoolVal = function() {
					return r.Message.setOneofField(this, 4, proto.coda.SimpleValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.SimpleValue.prototype.hasBoolVal = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.SimpleValue.prototype.getDateVal = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 5, 0)
			}
			,
			proto.coda.SimpleValue.prototype.setDateVal = function(e) {
					return r.Message.setOneofField(this, 5, proto.coda.SimpleValue.oneofGroups_[0], e)
			}
			,
			proto.coda.SimpleValue.prototype.clearDateVal = function() {
					return r.Message.setOneofField(this, 5, proto.coda.SimpleValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.SimpleValue.prototype.hasDateVal = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.SimpleValue.prototype.getIsNull = function() {
					return r.Message.getBooleanFieldWithDefault(this, 6, !1)
			}
			,
			proto.coda.SimpleValue.prototype.setIsNull = function(e) {
					return r.Message.setOneofField(this, 6, proto.coda.SimpleValue.oneofGroups_[0], e)
			}
			,
			proto.coda.SimpleValue.prototype.clearIsNull = function() {
					return r.Message.setOneofField(this, 6, proto.coda.SimpleValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.SimpleValue.prototype.hasIsNull = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.SimpleValueArray.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SimpleValueArray.prototype.toObject = function(e) {
					return proto.coda.SimpleValueArray.toObject(e, this)
			}
			,
			proto.coda.SimpleValueArray.toObject = function(e, t) {
					var o = {
							valueList: r.Message.toObjectList(t.getValueList(), proto.coda.SimpleValue.toObject, e)
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.SimpleValueArray.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SimpleValueArray;
					return proto.coda.SimpleValueArray.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SimpleValueArray.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = new proto.coda.SimpleValue;
									t.readMessage(o, proto.coda.SimpleValue.deserializeBinaryFromReader),
									e.addValue(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.SimpleValueArray.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SimpleValueArray.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SimpleValueArray.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getValueList()).length > 0 && t.writeRepeatedMessage(1, o, proto.coda.SimpleValue.serializeBinaryToWriter)
			}
			,
			proto.coda.SimpleValueArray.prototype.getValueList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.SimpleValue, 1)
			}
			,
			proto.coda.SimpleValueArray.prototype.setValueList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 1, e)
			}
			,
			proto.coda.SimpleValueArray.prototype.addValue = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 1, e, proto.coda.SimpleValue, t)
			}
			,
			proto.coda.SimpleValueArray.prototype.clearValueList = function() {
					return this.setValueList([])
			}
			,
			proto.coda.Value.oneofGroups_ = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
			proto.coda.Value.TypeCase = {
					TYPE_NOT_SET: 0,
					STRING_VAL: 1,
					INT64_VAL: 2,
					DOUBLE_VAL: 3,
					BOOL_VAL: 4,
					DATE_VAL: 5,
					UNSPECIFIED_OPTIONAL_VAL: 6,
					STRING_ARRAY_VAL: 7,
					INT64_ARRAY_VAL: 8,
					DOUBLE_ARRAY_VAL: 9,
					BOOL_ARRAY_VAL: 10,
					DATE_ARRAY_VAL: 11,
					SIMPLE_ARRAY_VAL: 12
			},
			proto.coda.Value.prototype.getTypeCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.Value.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.Value.prototype.toObject = function(e) {
					return proto.coda.Value.toObject(e, this)
			}
			,
			proto.coda.Value.toObject = function(e, t) {
					var o, a = {
							stringVal: r.Message.getFieldWithDefault(t, 1, ""),
							int64Val: r.Message.getFieldWithDefault(t, 2, 0),
							doubleVal: r.Message.getFloatingPointFieldWithDefault(t, 3, 0),
							boolVal: r.Message.getBooleanFieldWithDefault(t, 4, !1),
							dateVal: r.Message.getFloatingPointFieldWithDefault(t, 5, 0),
							unspecifiedOptionalVal: r.Message.getBooleanFieldWithDefault(t, 6, !1),
							stringArrayVal: (o = t.getStringArrayVal()) && proto.coda.StringArray.toObject(e, o),
							int64ArrayVal: (o = t.getInt64ArrayVal()) && proto.coda.Int64Array.toObject(e, o),
							doubleArrayVal: (o = t.getDoubleArrayVal()) && proto.coda.DoubleArray.toObject(e, o),
							boolArrayVal: (o = t.getBoolArrayVal()) && proto.coda.BoolArray.toObject(e, o),
							dateArrayVal: (o = t.getDateArrayVal()) && proto.coda.DateArray.toObject(e, o),
							simpleArrayVal: (o = t.getSimpleArrayVal()) && proto.coda.SimpleValueArray.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.Value.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.Value;
					return proto.coda.Value.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.Value.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setStringVal(o);
									break;
							case 2:
									o = t.readInt64();
									e.setInt64Val(o);
									break;
							case 3:
									o = t.readDouble();
									e.setDoubleVal(o);
									break;
							case 4:
									o = t.readBool();
									e.setBoolVal(o);
									break;
							case 5:
									o = t.readDouble();
									e.setDateVal(o);
									break;
							case 6:
									o = t.readBool();
									e.setUnspecifiedOptionalVal(o);
									break;
							case 7:
									o = new proto.coda.StringArray;
									t.readMessage(o, proto.coda.StringArray.deserializeBinaryFromReader),
									e.setStringArrayVal(o);
									break;
							case 8:
									o = new proto.coda.Int64Array;
									t.readMessage(o, proto.coda.Int64Array.deserializeBinaryFromReader),
									e.setInt64ArrayVal(o);
									break;
							case 9:
									o = new proto.coda.DoubleArray;
									t.readMessage(o, proto.coda.DoubleArray.deserializeBinaryFromReader),
									e.setDoubleArrayVal(o);
									break;
							case 10:
									o = new proto.coda.BoolArray;
									t.readMessage(o, proto.coda.BoolArray.deserializeBinaryFromReader),
									e.setBoolArrayVal(o);
									break;
							case 11:
									o = new proto.coda.DateArray;
									t.readMessage(o, proto.coda.DateArray.deserializeBinaryFromReader),
									e.setDateArrayVal(o);
									break;
							case 12:
									o = new proto.coda.SimpleValueArray;
									t.readMessage(o, proto.coda.SimpleValueArray.deserializeBinaryFromReader),
									e.setSimpleArrayVal(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.Value.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.Value.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.Value.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = r.Message.getField(e, 1)) && t.writeString(1, o),
					null != (o = r.Message.getField(e, 2)) && t.writeInt64(2, o),
					null != (o = r.Message.getField(e, 3)) && t.writeDouble(3, o),
					null != (o = r.Message.getField(e, 4)) && t.writeBool(4, o),
					null != (o = r.Message.getField(e, 5)) && t.writeDouble(5, o),
					null != (o = r.Message.getField(e, 6)) && t.writeBool(6, o),
					null != (o = e.getStringArrayVal()) && t.writeMessage(7, o, proto.coda.StringArray.serializeBinaryToWriter),
					null != (o = e.getInt64ArrayVal()) && t.writeMessage(8, o, proto.coda.Int64Array.serializeBinaryToWriter),
					null != (o = e.getDoubleArrayVal()) && t.writeMessage(9, o, proto.coda.DoubleArray.serializeBinaryToWriter),
					null != (o = e.getBoolArrayVal()) && t.writeMessage(10, o, proto.coda.BoolArray.serializeBinaryToWriter),
					null != (o = e.getDateArrayVal()) && t.writeMessage(11, o, proto.coda.DateArray.serializeBinaryToWriter),
					null != (o = e.getSimpleArrayVal()) && t.writeMessage(12, o, proto.coda.SimpleValueArray.serializeBinaryToWriter)
			}
			,
			proto.coda.Value.prototype.getStringVal = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.Value.prototype.setStringVal = function(e) {
					return r.Message.setOneofField(this, 1, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearStringVal = function() {
					return r.Message.setOneofField(this, 1, proto.coda.Value.oneofGroups_[0], void 0)
			}
			,
			proto.coda.Value.prototype.hasStringVal = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.Value.prototype.getInt64Val = function() {
					return r.Message.getFieldWithDefault(this, 2, 0)
			}
			,
			proto.coda.Value.prototype.setInt64Val = function(e) {
					return r.Message.setOneofField(this, 2, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearInt64Val = function() {
					return r.Message.setOneofField(this, 2, proto.coda.Value.oneofGroups_[0], void 0)
			}
			,
			proto.coda.Value.prototype.hasInt64Val = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.Value.prototype.getDoubleVal = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 3, 0)
			}
			,
			proto.coda.Value.prototype.setDoubleVal = function(e) {
					return r.Message.setOneofField(this, 3, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearDoubleVal = function() {
					return r.Message.setOneofField(this, 3, proto.coda.Value.oneofGroups_[0], void 0)
			}
			,
			proto.coda.Value.prototype.hasDoubleVal = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.Value.prototype.getBoolVal = function() {
					return r.Message.getBooleanFieldWithDefault(this, 4, !1)
			}
			,
			proto.coda.Value.prototype.setBoolVal = function(e) {
					return r.Message.setOneofField(this, 4, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearBoolVal = function() {
					return r.Message.setOneofField(this, 4, proto.coda.Value.oneofGroups_[0], void 0)
			}
			,
			proto.coda.Value.prototype.hasBoolVal = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.Value.prototype.getDateVal = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 5, 0)
			}
			,
			proto.coda.Value.prototype.setDateVal = function(e) {
					return r.Message.setOneofField(this, 5, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearDateVal = function() {
					return r.Message.setOneofField(this, 5, proto.coda.Value.oneofGroups_[0], void 0)
			}
			,
			proto.coda.Value.prototype.hasDateVal = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.Value.prototype.getUnspecifiedOptionalVal = function() {
					return r.Message.getBooleanFieldWithDefault(this, 6, !1)
			}
			,
			proto.coda.Value.prototype.setUnspecifiedOptionalVal = function(e) {
					return r.Message.setOneofField(this, 6, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearUnspecifiedOptionalVal = function() {
					return r.Message.setOneofField(this, 6, proto.coda.Value.oneofGroups_[0], void 0)
			}
			,
			proto.coda.Value.prototype.hasUnspecifiedOptionalVal = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.Value.prototype.getStringArrayVal = function() {
					return r.Message.getWrapperField(this, proto.coda.StringArray, 7)
			}
			,
			proto.coda.Value.prototype.setStringArrayVal = function(e) {
					return r.Message.setOneofWrapperField(this, 7, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearStringArrayVal = function() {
					return this.setStringArrayVal(void 0)
			}
			,
			proto.coda.Value.prototype.hasStringArrayVal = function() {
					return null != r.Message.getField(this, 7)
			}
			,
			proto.coda.Value.prototype.getInt64ArrayVal = function() {
					return r.Message.getWrapperField(this, proto.coda.Int64Array, 8)
			}
			,
			proto.coda.Value.prototype.setInt64ArrayVal = function(e) {
					return r.Message.setOneofWrapperField(this, 8, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearInt64ArrayVal = function() {
					return this.setInt64ArrayVal(void 0)
			}
			,
			proto.coda.Value.prototype.hasInt64ArrayVal = function() {
					return null != r.Message.getField(this, 8)
			}
			,
			proto.coda.Value.prototype.getDoubleArrayVal = function() {
					return r.Message.getWrapperField(this, proto.coda.DoubleArray, 9)
			}
			,
			proto.coda.Value.prototype.setDoubleArrayVal = function(e) {
					return r.Message.setOneofWrapperField(this, 9, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearDoubleArrayVal = function() {
					return this.setDoubleArrayVal(void 0)
			}
			,
			proto.coda.Value.prototype.hasDoubleArrayVal = function() {
					return null != r.Message.getField(this, 9)
			}
			,
			proto.coda.Value.prototype.getBoolArrayVal = function() {
					return r.Message.getWrapperField(this, proto.coda.BoolArray, 10)
			}
			,
			proto.coda.Value.prototype.setBoolArrayVal = function(e) {
					return r.Message.setOneofWrapperField(this, 10, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearBoolArrayVal = function() {
					return this.setBoolArrayVal(void 0)
			}
			,
			proto.coda.Value.prototype.hasBoolArrayVal = function() {
					return null != r.Message.getField(this, 10)
			}
			,
			proto.coda.Value.prototype.getDateArrayVal = function() {
					return r.Message.getWrapperField(this, proto.coda.DateArray, 11)
			}
			,
			proto.coda.Value.prototype.setDateArrayVal = function(e) {
					return r.Message.setOneofWrapperField(this, 11, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearDateArrayVal = function() {
					return this.setDateArrayVal(void 0)
			}
			,
			proto.coda.Value.prototype.hasDateArrayVal = function() {
					return null != r.Message.getField(this, 11)
			}
			,
			proto.coda.Value.prototype.getSimpleArrayVal = function() {
					return r.Message.getWrapperField(this, proto.coda.SimpleValueArray, 12)
			}
			,
			proto.coda.Value.prototype.setSimpleArrayVal = function(e) {
					return r.Message.setOneofWrapperField(this, 12, proto.coda.Value.oneofGroups_[0], e)
			}
			,
			proto.coda.Value.prototype.clearSimpleArrayVal = function() {
					return this.setSimpleArrayVal(void 0)
			}
			,
			proto.coda.Value.prototype.hasSimpleArrayVal = function() {
					return null != r.Message.getField(this, 12)
			}
			,
			proto.coda.ResultValue.oneofGroups_ = [[1, 2, 3, 4, 5, 6]],
			proto.coda.ResultValue.TypeCase = {
					TYPE_NOT_SET: 0,
					STRING_VAL: 1,
					INT64_VAL: 2,
					DOUBLE_VAL: 3,
					OBJECT_VAL: 4,
					BOOL_VAL: 5,
					DATE_VAL: 6
			},
			proto.coda.ResultValue.prototype.getTypeCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.ResultValue.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ResultValue.prototype.toObject = function(e) {
					return proto.coda.ResultValue.toObject(e, this)
			}
			,
			proto.coda.ResultValue.toObject = function(e, t) {
					var o = {
							stringVal: r.Message.getFieldWithDefault(t, 1, ""),
							int64Val: r.Message.getFieldWithDefault(t, 2, 0),
							doubleVal: r.Message.getFloatingPointFieldWithDefault(t, 3, 0),
							objectVal: r.Message.getFieldWithDefault(t, 4, ""),
							boolVal: r.Message.getBooleanFieldWithDefault(t, 5, !1),
							dateVal: r.Message.getFloatingPointFieldWithDefault(t, 6, 0)
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.ResultValue.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ResultValue;
					return proto.coda.ResultValue.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ResultValue.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setStringVal(o);
									break;
							case 2:
									o = t.readInt64();
									e.setInt64Val(o);
									break;
							case 3:
									o = t.readDouble();
									e.setDoubleVal(o);
									break;
							case 4:
									o = t.readString();
									e.setObjectVal(o);
									break;
							case 5:
									o = t.readBool();
									e.setBoolVal(o);
									break;
							case 6:
									o = t.readDouble();
									e.setDateVal(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ResultValue.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ResultValue.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ResultValue.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = r.Message.getField(e, 1)) && t.writeString(1, o),
					null != (o = r.Message.getField(e, 2)) && t.writeInt64(2, o),
					null != (o = r.Message.getField(e, 3)) && t.writeDouble(3, o),
					null != (o = r.Message.getField(e, 4)) && t.writeString(4, o),
					null != (o = r.Message.getField(e, 5)) && t.writeBool(5, o),
					null != (o = r.Message.getField(e, 6)) && t.writeDouble(6, o)
			}
			,
			proto.coda.ResultValue.prototype.getStringVal = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.ResultValue.prototype.setStringVal = function(e) {
					return r.Message.setOneofField(this, 1, proto.coda.ResultValue.oneofGroups_[0], e)
			}
			,
			proto.coda.ResultValue.prototype.clearStringVal = function() {
					return r.Message.setOneofField(this, 1, proto.coda.ResultValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.ResultValue.prototype.hasStringVal = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.ResultValue.prototype.getInt64Val = function() {
					return r.Message.getFieldWithDefault(this, 2, 0)
			}
			,
			proto.coda.ResultValue.prototype.setInt64Val = function(e) {
					return r.Message.setOneofField(this, 2, proto.coda.ResultValue.oneofGroups_[0], e)
			}
			,
			proto.coda.ResultValue.prototype.clearInt64Val = function() {
					return r.Message.setOneofField(this, 2, proto.coda.ResultValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.ResultValue.prototype.hasInt64Val = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.ResultValue.prototype.getDoubleVal = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 3, 0)
			}
			,
			proto.coda.ResultValue.prototype.setDoubleVal = function(e) {
					return r.Message.setOneofField(this, 3, proto.coda.ResultValue.oneofGroups_[0], e)
			}
			,
			proto.coda.ResultValue.prototype.clearDoubleVal = function() {
					return r.Message.setOneofField(this, 3, proto.coda.ResultValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.ResultValue.prototype.hasDoubleVal = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.ResultValue.prototype.getObjectVal = function() {
					return r.Message.getFieldWithDefault(this, 4, "")
			}
			,
			proto.coda.ResultValue.prototype.setObjectVal = function(e) {
					return r.Message.setOneofField(this, 4, proto.coda.ResultValue.oneofGroups_[0], e)
			}
			,
			proto.coda.ResultValue.prototype.clearObjectVal = function() {
					return r.Message.setOneofField(this, 4, proto.coda.ResultValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.ResultValue.prototype.hasObjectVal = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.ResultValue.prototype.getBoolVal = function() {
					return r.Message.getBooleanFieldWithDefault(this, 5, !1)
			}
			,
			proto.coda.ResultValue.prototype.setBoolVal = function(e) {
					return r.Message.setOneofField(this, 5, proto.coda.ResultValue.oneofGroups_[0], e)
			}
			,
			proto.coda.ResultValue.prototype.clearBoolVal = function() {
					return r.Message.setOneofField(this, 5, proto.coda.ResultValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.ResultValue.prototype.hasBoolVal = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.ResultValue.prototype.getDateVal = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 6, 0)
			}
			,
			proto.coda.ResultValue.prototype.setDateVal = function(e) {
					return r.Message.setOneofField(this, 6, proto.coda.ResultValue.oneofGroups_[0], e)
			}
			,
			proto.coda.ResultValue.prototype.clearDateVal = function() {
					return r.Message.setOneofField(this, 6, proto.coda.ResultValue.oneofGroups_[0], void 0)
			}
			,
			proto.coda.ResultValue.prototype.hasDateVal = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.Connection.prototype.toObject = function(e) {
					return proto.coda.Connection.toObject(e, this)
			}
			,
			proto.coda.Connection.toObject = function(e, t) {
					var o = {
							id: r.Message.getFieldWithDefault(t, 1, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.Connection.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.Connection;
					return proto.coda.Connection.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.Connection.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = t.readString();
									e.setId(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.Connection.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.Connection.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.Connection.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getId()).length > 0 && t.writeString(1, o)
			}
			,
			proto.coda.Connection.prototype.getId = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.Connection.prototype.setId = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.Context.prototype.toObject = function(e) {
					return proto.coda.Context.toObject(e, this)
			}
			,
			proto.coda.Context.toObject = function(e, t) {
					var o = {
							docId: r.Message.getFieldWithDefault(t, 1, ""),
							schemaVersion: r.Message.getFieldWithDefault(t, 2, 0),
							timezone: r.Message.getFieldWithDefault(t, 3, ""),
							objectId: r.Message.getFieldWithDefault(t, 4, ""),
							rowId: r.Message.getFieldWithDefault(t, 5, ""),
							columnId: r.Message.getFieldWithDefault(t, 6, ""),
							manualRefreshTimestampMs: r.Message.getFieldWithDefault(t, 7, 0),
							publishMode: r.Message.getFieldWithDefault(t, 8, 0),
							rootCsbIngestionId: r.Message.getFieldWithDefault(t, 10, ""),
							csbPackConfigurationId: r.Message.getFieldWithDefault(t, 11, ""),
							csbIngestionId: r.Message.getFieldWithDefault(t, 12, ""),
							ingestionExecutionId: r.Message.getFieldWithDefault(t, 13, ""),
							ingestionConfigId: r.Message.getFieldWithDefault(t, 14, ""),
							ingestionParentStage: r.Message.getFieldWithDefault(t, 15, ""),
							ingestionExecutionAttempt: r.Message.getFieldWithDefault(t, 16, 0),
							calcServerAttempt: r.Message.getFieldWithDefault(t, 17, 0),
							packId: r.Message.getFieldWithDefault(t, 18, 0),
							organizationId: r.Message.getFieldWithDefault(t, 19, ""),
							type: r.Message.getFieldWithDefault(t, 20, 0),
							ingestionProcessId: r.Message.getFieldWithDefault(t, 21, ""),
							currentOpVersion: r.Message.getFloatingPointFieldWithDefault(t, 22, 0),
							fullIngestionExecutionId: r.Message.getFieldWithDefault(t, 23, ""),
							ingestionParentItemId: r.Message.getFieldWithDefault(t, 24, ""),
							ingestionChildExecutionIndex: r.Message.getFieldWithDefault(t, 25, 0),
							executingAgentInstanceId: r.Message.getFieldWithDefault(t, 26, ""),
							packAgentInstanceId: r.Message.getFieldWithDefault(t, 27, ""),
							agentSessionId: r.Message.getFieldWithDefault(t, 28, ""),
							agentGrantToken: r.Message.getFieldWithDefault(t, 29, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.Context.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.Context;
					return proto.coda.Context.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.Context.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setDocId(o);
									break;
							case 2:
									o = t.readInt32();
									e.setSchemaVersion(o);
									break;
							case 3:
									o = t.readString();
									e.setTimezone(o);
									break;
							case 4:
									o = t.readString();
									e.setObjectId(o);
									break;
							case 5:
									o = t.readString();
									e.setRowId(o);
									break;
							case 6:
									o = t.readString();
									e.setColumnId(o);
									break;
							case 7:
									o = t.readUint64();
									e.setManualRefreshTimestampMs(o);
									break;
							case 8:
									o = t.readEnum();
									e.setPublishMode(o);
									break;
							case 10:
									o = t.readString();
									e.setRootCsbIngestionId(o);
									break;
							case 11:
									o = t.readString();
									e.setCsbPackConfigurationId(o);
									break;
							case 12:
									o = t.readString();
									e.setCsbIngestionId(o);
									break;
							case 13:
									o = t.readString();
									e.setIngestionExecutionId(o);
									break;
							case 14:
									o = t.readString();
									e.setIngestionConfigId(o);
									break;
							case 15:
									o = t.readString();
									e.setIngestionParentStage(o);
									break;
							case 16:
									o = t.readUint64();
									e.setIngestionExecutionAttempt(o);
									break;
							case 17:
									o = t.readUint64();
									e.setCalcServerAttempt(o);
									break;
							case 18:
									o = t.readUint64();
									e.setPackId(o);
									break;
							case 19:
									o = t.readString();
									e.setOrganizationId(o);
									break;
							case 20:
									o = t.readEnum();
									e.setType(o);
									break;
							case 21:
									o = t.readString();
									e.setIngestionProcessId(o);
									break;
							case 22:
									o = t.readDouble();
									e.setCurrentOpVersion(o);
									break;
							case 23:
									o = t.readString();
									e.setFullIngestionExecutionId(o);
									break;
							case 24:
									o = t.readString();
									e.setIngestionParentItemId(o);
									break;
							case 25:
									o = t.readUint64();
									e.setIngestionChildExecutionIndex(o);
									break;
							case 26:
									o = t.readString();
									e.setExecutingAgentInstanceId(o);
									break;
							case 27:
									o = t.readString();
									e.setPackAgentInstanceId(o);
									break;
							case 28:
									o = t.readString();
									e.setAgentSessionId(o);
									break;
							case 29:
									o = t.readString();
									e.setAgentGrantToken(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.Context.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.Context.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.Context.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getDocId()).length > 0 && t.writeString(1, o),
					0 !== (o = e.getSchemaVersion()) && t.writeInt32(2, o),
					(o = e.getTimezone()).length > 0 && t.writeString(3, o),
					(o = e.getObjectId()).length > 0 && t.writeString(4, o),
					(o = e.getRowId()).length > 0 && t.writeString(5, o),
					(o = e.getColumnId()).length > 0 && t.writeString(6, o),
					0 !== (o = e.getManualRefreshTimestampMs()) && t.writeUint64(7, o),
					0 !== (o = e.getPublishMode()) && t.writeEnum(8, o),
					(o = e.getRootCsbIngestionId()).length > 0 && t.writeString(10, o),
					(o = e.getCsbPackConfigurationId()).length > 0 && t.writeString(11, o),
					(o = e.getCsbIngestionId()).length > 0 && t.writeString(12, o),
					(o = e.getIngestionExecutionId()).length > 0 && t.writeString(13, o),
					(o = e.getIngestionConfigId()).length > 0 && t.writeString(14, o),
					(o = e.getIngestionParentStage()).length > 0 && t.writeString(15, o),
					0 !== (o = e.getIngestionExecutionAttempt()) && t.writeUint64(16, o),
					0 !== (o = e.getCalcServerAttempt()) && t.writeUint64(17, o),
					0 !== (o = e.getPackId()) && t.writeUint64(18, o),
					(o = e.getOrganizationId()).length > 0 && t.writeString(19, o),
					0 !== (o = e.getType()) && t.writeEnum(20, o),
					(o = e.getIngestionProcessId()).length > 0 && t.writeString(21, o),
					0 !== (o = e.getCurrentOpVersion()) && t.writeDouble(22, o),
					(o = e.getFullIngestionExecutionId()).length > 0 && t.writeString(23, o),
					(o = e.getIngestionParentItemId()).length > 0 && t.writeString(24, o),
					0 !== (o = e.getIngestionChildExecutionIndex()) && t.writeUint64(25, o),
					(o = e.getExecutingAgentInstanceId()).length > 0 && t.writeString(26, o),
					(o = e.getPackAgentInstanceId()).length > 0 && t.writeString(27, o),
					(o = e.getAgentSessionId()).length > 0 && t.writeString(28, o),
					(o = e.getAgentGrantToken()).length > 0 && t.writeString(29, o)
			}
			,
			proto.coda.Context.prototype.getDocId = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.Context.prototype.setDocId = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			proto.coda.Context.prototype.getSchemaVersion = function() {
					return r.Message.getFieldWithDefault(this, 2, 0)
			}
			,
			proto.coda.Context.prototype.setSchemaVersion = function(e) {
					return r.Message.setProto3IntField(this, 2, e)
			}
			,
			proto.coda.Context.prototype.getTimezone = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.Context.prototype.setTimezone = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.Context.prototype.getObjectId = function() {
					return r.Message.getFieldWithDefault(this, 4, "")
			}
			,
			proto.coda.Context.prototype.setObjectId = function(e) {
					return r.Message.setProto3StringField(this, 4, e)
			}
			,
			proto.coda.Context.prototype.getRowId = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.Context.prototype.setRowId = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.Context.prototype.getColumnId = function() {
					return r.Message.getFieldWithDefault(this, 6, "")
			}
			,
			proto.coda.Context.prototype.setColumnId = function(e) {
					return r.Message.setProto3StringField(this, 6, e)
			}
			,
			proto.coda.Context.prototype.getManualRefreshTimestampMs = function() {
					return r.Message.getFieldWithDefault(this, 7, 0)
			}
			,
			proto.coda.Context.prototype.setManualRefreshTimestampMs = function(e) {
					return r.Message.setProto3IntField(this, 7, e)
			}
			,
			proto.coda.Context.prototype.getPublishMode = function() {
					return r.Message.getFieldWithDefault(this, 8, 0)
			}
			,
			proto.coda.Context.prototype.setPublishMode = function(e) {
					return r.Message.setProto3EnumField(this, 8, e)
			}
			,
			proto.coda.Context.prototype.getRootCsbIngestionId = function() {
					return r.Message.getFieldWithDefault(this, 10, "")
			}
			,
			proto.coda.Context.prototype.setRootCsbIngestionId = function(e) {
					return r.Message.setProto3StringField(this, 10, e)
			}
			,
			proto.coda.Context.prototype.getCsbPackConfigurationId = function() {
					return r.Message.getFieldWithDefault(this, 11, "")
			}
			,
			proto.coda.Context.prototype.setCsbPackConfigurationId = function(e) {
					return r.Message.setProto3StringField(this, 11, e)
			}
			,
			proto.coda.Context.prototype.getCsbIngestionId = function() {
					return r.Message.getFieldWithDefault(this, 12, "")
			}
			,
			proto.coda.Context.prototype.setCsbIngestionId = function(e) {
					return r.Message.setProto3StringField(this, 12, e)
			}
			,
			proto.coda.Context.prototype.getIngestionExecutionId = function() {
					return r.Message.getFieldWithDefault(this, 13, "")
			}
			,
			proto.coda.Context.prototype.setIngestionExecutionId = function(e) {
					return r.Message.setProto3StringField(this, 13, e)
			}
			,
			proto.coda.Context.prototype.getIngestionConfigId = function() {
					return r.Message.getFieldWithDefault(this, 14, "")
			}
			,
			proto.coda.Context.prototype.setIngestionConfigId = function(e) {
					return r.Message.setProto3StringField(this, 14, e)
			}
			,
			proto.coda.Context.prototype.getIngestionParentStage = function() {
					return r.Message.getFieldWithDefault(this, 15, "")
			}
			,
			proto.coda.Context.prototype.setIngestionParentStage = function(e) {
					return r.Message.setProto3StringField(this, 15, e)
			}
			,
			proto.coda.Context.prototype.getIngestionExecutionAttempt = function() {
					return r.Message.getFieldWithDefault(this, 16, 0)
			}
			,
			proto.coda.Context.prototype.setIngestionExecutionAttempt = function(e) {
					return r.Message.setProto3IntField(this, 16, e)
			}
			,
			proto.coda.Context.prototype.getCalcServerAttempt = function() {
					return r.Message.getFieldWithDefault(this, 17, 0)
			}
			,
			proto.coda.Context.prototype.setCalcServerAttempt = function(e) {
					return r.Message.setProto3IntField(this, 17, e)
			}
			,
			proto.coda.Context.prototype.getPackId = function() {
					return r.Message.getFieldWithDefault(this, 18, 0)
			}
			,
			proto.coda.Context.prototype.setPackId = function(e) {
					return r.Message.setProto3IntField(this, 18, e)
			}
			,
			proto.coda.Context.prototype.getOrganizationId = function() {
					return r.Message.getFieldWithDefault(this, 19, "")
			}
			,
			proto.coda.Context.prototype.setOrganizationId = function(e) {
					return r.Message.setProto3StringField(this, 19, e)
			}
			,
			proto.coda.Context.prototype.getType = function() {
					return r.Message.getFieldWithDefault(this, 20, 0)
			}
			,
			proto.coda.Context.prototype.setType = function(e) {
					return r.Message.setProto3EnumField(this, 20, e)
			}
			,
			proto.coda.Context.prototype.getIngestionProcessId = function() {
					return r.Message.getFieldWithDefault(this, 21, "")
			}
			,
			proto.coda.Context.prototype.setIngestionProcessId = function(e) {
					return r.Message.setProto3StringField(this, 21, e)
			}
			,
			proto.coda.Context.prototype.getCurrentOpVersion = function() {
					return r.Message.getFloatingPointFieldWithDefault(this, 22, 0)
			}
			,
			proto.coda.Context.prototype.setCurrentOpVersion = function(e) {
					return r.Message.setProto3FloatField(this, 22, e)
			}
			,
			proto.coda.Context.prototype.getFullIngestionExecutionId = function() {
					return r.Message.getFieldWithDefault(this, 23, "")
			}
			,
			proto.coda.Context.prototype.setFullIngestionExecutionId = function(e) {
					return r.Message.setProto3StringField(this, 23, e)
			}
			,
			proto.coda.Context.prototype.getIngestionParentItemId = function() {
					return r.Message.getFieldWithDefault(this, 24, "")
			}
			,
			proto.coda.Context.prototype.setIngestionParentItemId = function(e) {
					return r.Message.setProto3StringField(this, 24, e)
			}
			,
			proto.coda.Context.prototype.getIngestionChildExecutionIndex = function() {
					return r.Message.getFieldWithDefault(this, 25, 0)
			}
			,
			proto.coda.Context.prototype.setIngestionChildExecutionIndex = function(e) {
					return r.Message.setProto3IntField(this, 25, e)
			}
			,
			proto.coda.Context.prototype.getExecutingAgentInstanceId = function() {
					return r.Message.getFieldWithDefault(this, 26, "")
			}
			,
			proto.coda.Context.prototype.setExecutingAgentInstanceId = function(e) {
					return r.Message.setProto3StringField(this, 26, e)
			}
			,
			proto.coda.Context.prototype.getPackAgentInstanceId = function() {
					return r.Message.getFieldWithDefault(this, 27, "")
			}
			,
			proto.coda.Context.prototype.setPackAgentInstanceId = function(e) {
					return r.Message.setProto3StringField(this, 27, e)
			}
			,
			proto.coda.Context.prototype.getAgentSessionId = function() {
					return r.Message.getFieldWithDefault(this, 28, "")
			}
			,
			proto.coda.Context.prototype.setAgentSessionId = function(e) {
					return r.Message.setProto3StringField(this, 28, e)
			}
			,
			proto.coda.Context.prototype.getAgentGrantToken = function() {
					return r.Message.getFieldWithDefault(this, 29, "")
			}
			,
			proto.coda.Context.prototype.setAgentGrantToken = function(e) {
					return r.Message.setProto3StringField(this, 29, e)
			}
			,
			proto.coda.InvokeFormulaRequest.repeatedFields_ = [3],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeFormulaRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeFormulaRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeFormulaRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.Formula.toObject(e, o),
							paramsList: r.Message.toObjectList(t.getParamsList(), proto.coda.Value.toObject, e),
							connection: (o = t.getConnection()) && proto.coda.Connection.toObject(e, o),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							source: r.Message.getFieldWithDefault(t, 7, 0),
							skipResultParsing: r.Message.getBooleanFieldWithDefault(t, 8, !1),
							schema: r.Message.getFieldWithDefault(t, 9, ""),
							previousAttemptError: (o = t.getPreviousAttemptError()) && proto.coda.ExecutionError.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeFormulaRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeFormulaRequest;
					return proto.coda.InvokeFormulaRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeFormulaRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 2:
									var o = new proto.coda.Formula;
									t.readMessage(o, proto.coda.Formula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 3:
									o = new proto.coda.Value;
									t.readMessage(o, proto.coda.Value.deserializeBinaryFromReader),
									e.addParams(o);
									break;
							case 4:
									o = new proto.coda.Connection;
									t.readMessage(o, proto.coda.Connection.deserializeBinaryFromReader),
									e.setConnection(o);
									break;
							case 6:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 7:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 8:
									o = t.readBool();
									e.setSkipResultParsing(o);
									break;
							case 9:
									o = t.readString();
									e.setSchema(o);
									break;
							case 10:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setPreviousAttemptError(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeFormulaRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeFormulaRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(2, o, proto.coda.Formula.serializeBinaryToWriter),
					(o = e.getParamsList()).length > 0 && t.writeRepeatedMessage(3, o, proto.coda.Value.serializeBinaryToWriter),
					null != (o = e.getConnection()) && t.writeMessage(4, o, proto.coda.Connection.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(6, o, proto.coda.Context.serializeBinaryToWriter),
					0 !== (o = e.getSource()) && t.writeEnum(7, o),
					(o = e.getSkipResultParsing()) && t.writeBool(8, o),
					(o = e.getSchema()).length > 0 && t.writeString(9, o),
					null != (o = e.getPreviousAttemptError()) && t.writeMessage(10, o, proto.coda.ExecutionError.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.Formula, 2)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getParamsList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.Value, 3)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setParamsList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.addParams = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 3, e, proto.coda.Value, t)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.clearParamsList = function() {
					return this.setParamsList([])
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getConnection = function() {
					return r.Message.getWrapperField(this, proto.coda.Connection, 4)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setConnection = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.clearConnection = function() {
					return this.setConnection(void 0)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.hasConnection = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 6)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 6, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 7, 0)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 7, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getSkipResultParsing = function() {
					return r.Message.getBooleanFieldWithDefault(this, 8, !1)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setSkipResultParsing = function(e) {
					return r.Message.setProto3BooleanField(this, 8, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getSchema = function() {
					return r.Message.getFieldWithDefault(this, 9, "")
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setSchema = function(e) {
					return r.Message.setProto3StringField(this, 9, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.getPreviousAttemptError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 10)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.setPreviousAttemptError = function(e) {
					return r.Message.setWrapperField(this, 10, e)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.clearPreviousAttemptError = function() {
					return this.setPreviousAttemptError(void 0)
			}
			,
			proto.coda.InvokeFormulaRequest.prototype.hasPreviousAttemptError = function() {
					return null != r.Message.getField(this, 10)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ImpersonateInvokeFormulaRequest.prototype.toObject = function(e) {
					return proto.coda.ImpersonateInvokeFormulaRequest.toObject(e, this)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.toObject = function(e, t) {
					var o, a = {
							userId: r.Message.getFieldWithDefault(t, 1, 0),
							request: (o = t.getRequest()) && proto.coda.InvokeFormulaRequest.toObject(e, o),
							deprecatedSource: r.Message.getFieldWithDefault(t, 3, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ImpersonateInvokeFormulaRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ImpersonateInvokeFormulaRequest;
					return proto.coda.ImpersonateInvokeFormulaRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readInt64();
									e.setUserId(o);
									break;
							case 2:
									o = new proto.coda.InvokeFormulaRequest;
									t.readMessage(o, proto.coda.InvokeFormulaRequest.deserializeBinaryFromReader),
									e.setRequest(o);
									break;
							case 3:
									o = t.readEnum();
									e.setDeprecatedSource(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ImpersonateInvokeFormulaRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getUserId()) && t.writeInt64(1, o),
					null != (o = e.getRequest()) && t.writeMessage(2, o, proto.coda.InvokeFormulaRequest.serializeBinaryToWriter),
					0 !== (o = e.getDeprecatedSource()) && t.writeEnum(3, o)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.getUserId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.setUserId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.getRequest = function() {
					return r.Message.getWrapperField(this, proto.coda.InvokeFormulaRequest, 2)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.setRequest = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.clearRequest = function() {
					return this.setRequest(void 0)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.hasRequest = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.getDeprecatedSource = function() {
					return r.Message.getFieldWithDefault(this, 3, 0)
			}
			,
			proto.coda.ImpersonateInvokeFormulaRequest.prototype.setDeprecatedSource = function(e) {
					return r.Message.setProto3EnumField(this, 3, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ConnectionNameMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.ConnectionNameMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.ConnectionNameMetadataRequest.toObject = function(e, t) {
					var o = {
							packId: r.Message.getFieldWithDefault(t, 1, 0),
							packVersion: r.Message.getFieldWithDefault(t, 2, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.ConnectionNameMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ConnectionNameMetadataRequest;
					return proto.coda.ConnectionNameMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ConnectionNameMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readUint32();
									e.setPackId(o);
									break;
							case 2:
									o = t.readString();
									e.setPackVersion(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ConnectionNameMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ConnectionNameMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ConnectionNameMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getPackId()) && t.writeUint32(1, o),
					(o = e.getPackVersion()).length > 0 && t.writeString(2, o)
			}
			,
			proto.coda.ConnectionNameMetadataRequest.prototype.getPackId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.ConnectionNameMetadataRequest.prototype.setPackId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.ConnectionNameMetadataRequest.prototype.getPackVersion = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.ConnectionNameMetadataRequest.prototype.setPackVersion = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.oneofGroups_ = [[1, 2]],
			proto.coda.ParameterAutocompleteMetadataRequest.FormulaTypeCase = {
					FORMULA_TYPE_NOT_SET: 0,
					SYNC: 1,
					FORMULA: 2
			},
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.getFormulaTypeCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.ParameterAutocompleteMetadataRequest.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ParameterAutocompleteMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.ParameterAutocompleteMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.toObject = function(e, t) {
					var o, a = {
							sync: (o = t.getSync()) && proto.coda.SyncFormula.toObject(e, o),
							formula: (o = t.getFormula()) && proto.coda.Formula.toObject(e, o),
							parameterName: r.Message.getFieldWithDefault(t, 3, ""),
							metadataContextMap: (o = t.getMetadataContextMap()) ? o.toObject(e, proto.coda.Value.toObject) : [],
							dynamicUrl: r.Message.getFieldWithDefault(t, 5, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ParameterAutocompleteMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ParameterAutocompleteMetadataRequest;
					return proto.coda.ParameterAutocompleteMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setSync(o);
									break;
							case 2:
									o = new proto.coda.Formula;
									t.readMessage(o, proto.coda.Formula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 3:
									o = t.readString();
									e.setParameterName(o);
									break;
							case 4:
									o = e.getMetadataContextMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.coda.Value.deserializeBinaryFromReader, "", new proto.coda.Value)
									}
									));
									break;
							case 5:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ParameterAutocompleteMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getSync()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					null != (o = e.getFormula()) && t.writeMessage(2, o, proto.coda.Formula.serializeBinaryToWriter),
					(o = e.getParameterName()).length > 0 && t.writeString(3, o),
					(o = e.getMetadataContextMap(!0)) && o.getLength() > 0 && o.serializeBinary(4, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.coda.Value.serializeBinaryToWriter),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(5, o)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.getSync = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.setSync = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.ParameterAutocompleteMetadataRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.clearSync = function() {
					return this.setSync(void 0)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.hasSync = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.Formula, 2)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.ParameterAutocompleteMetadataRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.getParameterName = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.setParameterName = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.getMetadataContextMap = function(e) {
					return r.Message.getMapField(this, 4, e, proto.coda.Value)
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.clearMetadataContextMap = function() {
					return this.getMetadataContextMap().clear(),
					this
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.ParameterAutocompleteMetadataRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.oneofGroups_ = [[1, 2]],
			proto.coda.ValidateParametersMetadataRequest.FormulaTypeCase = {
					FORMULA_TYPE_NOT_SET: 0,
					SYNC: 1,
					FORMULA: 2
			},
			proto.coda.ValidateParametersMetadataRequest.prototype.getFormulaTypeCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.ValidateParametersMetadataRequest.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ValidateParametersMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.ValidateParametersMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.toObject = function(e, t) {
					var o, a = {
							sync: (o = t.getSync()) && proto.coda.SyncFormula.toObject(e, o),
							formula: (o = t.getFormula()) && proto.coda.Formula.toObject(e, o),
							metadataContextMap: (o = t.getMetadataContextMap()) ? o.toObject(e, proto.coda.Value.toObject) : [],
							dynamicUrl: r.Message.getFieldWithDefault(t, 5, ""),
							permissionSyncMode: r.Message.getFieldWithDefault(t, 6, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ValidateParametersMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ValidateParametersMetadataRequest;
					return proto.coda.ValidateParametersMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setSync(o);
									break;
							case 2:
									o = new proto.coda.Formula;
									t.readMessage(o, proto.coda.Formula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 4:
									o = e.getMetadataContextMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.coda.Value.deserializeBinaryFromReader, "", new proto.coda.Value)
									}
									));
									break;
							case 5:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							case 6:
									o = t.readEnum();
									e.setPermissionSyncMode(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ValidateParametersMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ValidateParametersMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getSync()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					null != (o = e.getFormula()) && t.writeMessage(2, o, proto.coda.Formula.serializeBinaryToWriter),
					(o = e.getMetadataContextMap(!0)) && o.getLength() > 0 && o.serializeBinary(4, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.coda.Value.serializeBinaryToWriter),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(5, o),
					0 !== (o = e.getPermissionSyncMode()) && t.writeEnum(6, o)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.getSync = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.setSync = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.ValidateParametersMetadataRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.clearSync = function() {
					return this.setSync(void 0)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.hasSync = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.Formula, 2)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.ValidateParametersMetadataRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.getMetadataContextMap = function(e) {
					return r.Message.getMapField(this, 4, e, proto.coda.Value)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.clearMetadataContextMap = function() {
					return this.getMetadataContextMap().clear(),
					this
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.getPermissionSyncMode = function() {
					return r.Message.getFieldWithDefault(this, 6, 0)
			}
			,
			proto.coda.ValidateParametersMetadataRequest.prototype.setPermissionSyncMode = function(e) {
					return r.Message.setProto3EnumField(this, 6, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.PropertyOptionsMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.PropertyOptionsMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.toObject = function(e, t) {
					var o, a = {
							sync: (o = t.getSync()) && proto.coda.SyncFormula.toObject(e, o),
							optionsFormulaKey: r.Message.getFieldWithDefault(t, 2, ""),
							propertyName: r.Message.getFieldWithDefault(t, 3, ""),
							schema: r.Message.getFieldWithDefault(t, 5, ""),
							newValues: (o = t.getNewValues()) && proto.coda.ResultValue.toObject(e, o),
							dynamicUrl: r.Message.getFieldWithDefault(t, 7, ""),
							metadataContextMap: (o = t.getMetadataContextMap()) ? o.toObject(e, proto.coda.Value.toObject) : []
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.PropertyOptionsMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.PropertyOptionsMetadataRequest;
					return proto.coda.PropertyOptionsMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setSync(o);
									break;
							case 2:
									o = t.readString();
									e.setOptionsFormulaKey(o);
									break;
							case 3:
									o = t.readString();
									e.setPropertyName(o);
									break;
							case 5:
									o = t.readString();
									e.setSchema(o);
									break;
							case 6:
									o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setNewValues(o);
									break;
							case 7:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							case 8:
									o = e.getMetadataContextMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.coda.Value.deserializeBinaryFromReader, "", new proto.coda.Value)
									}
									));
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.PropertyOptionsMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getSync()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getOptionsFormulaKey()).length > 0 && t.writeString(2, o),
					(o = e.getPropertyName()).length > 0 && t.writeString(3, o),
					(o = e.getSchema()).length > 0 && t.writeString(5, o),
					null != (o = e.getNewValues()) && t.writeMessage(6, o, proto.coda.ResultValue.serializeBinaryToWriter),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(7, o),
					(o = e.getMetadataContextMap(!0)) && o.getLength() > 0 && o.serializeBinary(8, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.coda.Value.serializeBinaryToWriter)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getSync = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.setSync = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.clearSync = function() {
					return this.setSync(void 0)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.hasSync = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getOptionsFormulaKey = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.setOptionsFormulaKey = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getPropertyName = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.setPropertyName = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getSchema = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.setSchema = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getNewValues = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 6)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.setNewValues = function(e) {
					return r.Message.setWrapperField(this, 6, e)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.clearNewValues = function() {
					return this.setNewValues(void 0)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.hasNewValues = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 7, "")
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 7, e)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.getMetadataContextMap = function(e) {
					return r.Message.getMapField(this, 8, e, proto.coda.Value)
			}
			,
			proto.coda.PropertyOptionsMetadataRequest.prototype.clearMetadataContextMap = function() {
					return this.getMetadataContextMap().clear(),
					this
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.PostAuthSetupMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.PostAuthSetupMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.toObject = function(e, t) {
					var o, r = {
							formula: (o = t.getFormula()) && proto.coda.Formula.toObject(e, o)
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.PostAuthSetupMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.PostAuthSetupMetadataRequest;
					return proto.coda.PostAuthSetupMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = new proto.coda.Formula;
									t.readMessage(o, proto.coda.Formula.deserializeBinaryFromReader),
									e.setFormula(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.PostAuthSetupMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.Formula.serializeBinaryToWriter)
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.Formula, 1)
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.PostAuthSetupMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetSyncTableSchemaMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.GetSyncTableSchemaMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							dynamicUrl: r.Message.getFieldWithDefault(t, 5, ""),
							metadataContextMap: (o = t.getMetadataContextMap()) ? o.toObject(e, proto.coda.Value.toObject) : []
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.GetSyncTableSchemaMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetSyncTableSchemaMetadataRequest;
					return proto.coda.GetSyncTableSchemaMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 4:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 5:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							case 6:
									o = e.getMetadataContextMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.coda.Value.deserializeBinaryFromReader, "", new proto.coda.Value)
									}
									));
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetSyncTableSchemaMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(4, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(5, o),
					(o = e.getMetadataContextMap(!0)) && o.getLength() > 0 && o.serializeBinary(6, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.coda.Value.serializeBinaryToWriter)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 4)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.getMetadataContextMap = function(e) {
					return r.Message.getMapField(this, 6, e, proto.coda.Value)
			}
			,
			proto.coda.GetSyncTableSchemaMetadataRequest.prototype.clearMetadataContextMap = function() {
					return this.getMetadataContextMap().clear(),
					this
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.GetDynamicSyncTableNameMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							dynamicUrl: r.Message.getFieldWithDefault(t, 2, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.GetDynamicSyncTableNameMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetDynamicSyncTableNameMetadataRequest;
					return proto.coda.GetDynamicSyncTableNameMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetDynamicSyncTableNameMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(2, o)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.GetDynamicSyncTableNameMetadataRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							dynamicUrl: r.Message.getFieldWithDefault(t, 2, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest;
					return proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(2, o)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.ListSyncTableDynamicUrlsMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							tableName: r.Message.getFieldWithDefault(t, 2, ""),
							metadataContextMap: (o = t.getMetadataContextMap()) ? o.toObject(e, proto.coda.Value.toObject) : []
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ListSyncTableDynamicUrlsMetadataRequest;
					return proto.coda.ListSyncTableDynamicUrlsMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = t.readString();
									e.setTableName(o);
									break;
							case 3:
									o = e.getMetadataContextMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.coda.Value.deserializeBinaryFromReader, "", new proto.coda.Value)
									}
									));
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ListSyncTableDynamicUrlsMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getTableName()).length > 0 && t.writeString(2, o),
					(o = e.getMetadataContextMap(!0)) && o.getLength() > 0 && o.serializeBinary(3, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.coda.Value.serializeBinaryToWriter)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.getTableName = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.setTableName = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.getMetadataContextMap = function(e) {
					return r.Message.getMapField(this, 3, e, proto.coda.Value)
			}
			,
			proto.coda.ListSyncTableDynamicUrlsMetadataRequest.prototype.clearMetadataContextMap = function() {
					return this.getMetadataContextMap().clear(),
					this
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.toObject = function(e) {
					return proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.toObject(e, this)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							tableName: r.Message.getFieldWithDefault(t, 2, ""),
							metadataContextMap: (o = t.getMetadataContextMap()) ? o.toObject(e, proto.coda.Value.toObject) : []
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SearchSyncTableDynamicUrlsMetadataRequest;
					return proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = t.readString();
									e.setTableName(o);
									break;
							case 3:
									o = e.getMetadataContextMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readMessage, proto.coda.Value.deserializeBinaryFromReader, "", new proto.coda.Value)
									}
									));
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getTableName()).length > 0 && t.writeString(2, o),
					(o = e.getMetadataContextMap(!0)) && o.getLength() > 0 && o.serializeBinary(3, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeMessage, proto.coda.Value.serializeBinaryToWriter)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.getTableName = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.setTableName = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.getMetadataContextMap = function(e) {
					return r.Message.getMapField(this, 3, e, proto.coda.Value)
			}
			,
			proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.prototype.clearMetadataContextMap = function() {
					return this.getMetadataContextMap().clear(),
					this
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.oneofGroups_ = [[1, 2, 6, 7, 8, 9, 13, 10, 12, 15]],
			proto.coda.InvokeMetadataFormulaRequest.TypeCase = {
					TYPE_NOT_SET: 0,
					CONNECTION_NAME: 1,
					PARAMETER_AUTOCOMPLETE: 2,
					POST_AUTH_SETUP: 6,
					SYNC_TABLE_SCHEMA: 7,
					SYNC_TABLE_NAME: 8,
					SYNC_TABLE_URLS: 9,
					SEARCH_SYNC_TABLE_URLS: 13,
					SYNC_TABLE_DISPLAY_URL: 10,
					PROPERTY_OPTIONS: 12,
					VALIDATE_PARAMETERS: 15
			},
			proto.coda.InvokeMetadataFormulaRequest.prototype.getTypeCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeMetadataFormulaRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeMetadataFormulaRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.toObject = function(e, t) {
					var o, a = {
							connectionName: (o = t.getConnectionName()) && proto.coda.ConnectionNameMetadataRequest.toObject(e, o),
							parameterAutocomplete: (o = t.getParameterAutocomplete()) && proto.coda.ParameterAutocompleteMetadataRequest.toObject(e, o),
							postAuthSetup: (o = t.getPostAuthSetup()) && proto.coda.PostAuthSetupMetadataRequest.toObject(e, o),
							syncTableSchema: (o = t.getSyncTableSchema()) && proto.coda.GetSyncTableSchemaMetadataRequest.toObject(e, o),
							syncTableName: (o = t.getSyncTableName()) && proto.coda.GetDynamicSyncTableNameMetadataRequest.toObject(e, o),
							syncTableUrls: (o = t.getSyncTableUrls()) && proto.coda.ListSyncTableDynamicUrlsMetadataRequest.toObject(e, o),
							searchSyncTableUrls: (o = t.getSearchSyncTableUrls()) && proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.toObject(e, o),
							syncTableDisplayUrl: (o = t.getSyncTableDisplayUrl()) && proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.toObject(e, o),
							propertyOptions: (o = t.getPropertyOptions()) && proto.coda.PropertyOptionsMetadataRequest.toObject(e, o),
							validateParameters: (o = t.getValidateParameters()) && proto.coda.ValidateParametersMetadataRequest.toObject(e, o),
							parameter: r.Message.getFieldWithDefault(t, 3, ""),
							connection: (o = t.getConnection()) && proto.coda.Connection.toObject(e, o),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							source: r.Message.getFieldWithDefault(t, 11, 0),
							previousAttemptError: (o = t.getPreviousAttemptError()) && proto.coda.ExecutionError.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeMetadataFormulaRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeMetadataFormulaRequest;
					return proto.coda.InvokeMetadataFormulaRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.ConnectionNameMetadataRequest;
									t.readMessage(o, proto.coda.ConnectionNameMetadataRequest.deserializeBinaryFromReader),
									e.setConnectionName(o);
									break;
							case 2:
									o = new proto.coda.ParameterAutocompleteMetadataRequest;
									t.readMessage(o, proto.coda.ParameterAutocompleteMetadataRequest.deserializeBinaryFromReader),
									e.setParameterAutocomplete(o);
									break;
							case 6:
									o = new proto.coda.PostAuthSetupMetadataRequest;
									t.readMessage(o, proto.coda.PostAuthSetupMetadataRequest.deserializeBinaryFromReader),
									e.setPostAuthSetup(o);
									break;
							case 7:
									o = new proto.coda.GetSyncTableSchemaMetadataRequest;
									t.readMessage(o, proto.coda.GetSyncTableSchemaMetadataRequest.deserializeBinaryFromReader),
									e.setSyncTableSchema(o);
									break;
							case 8:
									o = new proto.coda.GetDynamicSyncTableNameMetadataRequest;
									t.readMessage(o, proto.coda.GetDynamicSyncTableNameMetadataRequest.deserializeBinaryFromReader),
									e.setSyncTableName(o);
									break;
							case 9:
									o = new proto.coda.ListSyncTableDynamicUrlsMetadataRequest;
									t.readMessage(o, proto.coda.ListSyncTableDynamicUrlsMetadataRequest.deserializeBinaryFromReader),
									e.setSyncTableUrls(o);
									break;
							case 13:
									o = new proto.coda.SearchSyncTableDynamicUrlsMetadataRequest;
									t.readMessage(o, proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.deserializeBinaryFromReader),
									e.setSearchSyncTableUrls(o);
									break;
							case 10:
									o = new proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest;
									t.readMessage(o, proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.deserializeBinaryFromReader),
									e.setSyncTableDisplayUrl(o);
									break;
							case 12:
									o = new proto.coda.PropertyOptionsMetadataRequest;
									t.readMessage(o, proto.coda.PropertyOptionsMetadataRequest.deserializeBinaryFromReader),
									e.setPropertyOptions(o);
									break;
							case 15:
									o = new proto.coda.ValidateParametersMetadataRequest;
									t.readMessage(o, proto.coda.ValidateParametersMetadataRequest.deserializeBinaryFromReader),
									e.setValidateParameters(o);
									break;
							case 3:
									o = t.readString();
									e.setParameter(o);
									break;
							case 4:
									o = new proto.coda.Connection;
									t.readMessage(o, proto.coda.Connection.deserializeBinaryFromReader),
									e.setConnection(o);
									break;
							case 5:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 11:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 14:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setPreviousAttemptError(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeMetadataFormulaRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getConnectionName()) && t.writeMessage(1, o, proto.coda.ConnectionNameMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getParameterAutocomplete()) && t.writeMessage(2, o, proto.coda.ParameterAutocompleteMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getPostAuthSetup()) && t.writeMessage(6, o, proto.coda.PostAuthSetupMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getSyncTableSchema()) && t.writeMessage(7, o, proto.coda.GetSyncTableSchemaMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getSyncTableName()) && t.writeMessage(8, o, proto.coda.GetDynamicSyncTableNameMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getSyncTableUrls()) && t.writeMessage(9, o, proto.coda.ListSyncTableDynamicUrlsMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getSearchSyncTableUrls()) && t.writeMessage(13, o, proto.coda.SearchSyncTableDynamicUrlsMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getSyncTableDisplayUrl()) && t.writeMessage(10, o, proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getPropertyOptions()) && t.writeMessage(12, o, proto.coda.PropertyOptionsMetadataRequest.serializeBinaryToWriter),
					null != (o = e.getValidateParameters()) && t.writeMessage(15, o, proto.coda.ValidateParametersMetadataRequest.serializeBinaryToWriter),
					(o = e.getParameter()).length > 0 && t.writeString(3, o),
					null != (o = e.getConnection()) && t.writeMessage(4, o, proto.coda.Connection.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(5, o, proto.coda.Context.serializeBinaryToWriter),
					0 !== (o = e.getSource()) && t.writeEnum(11, o),
					null != (o = e.getPreviousAttemptError()) && t.writeMessage(14, o, proto.coda.ExecutionError.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getConnectionName = function() {
					return r.Message.getWrapperField(this, proto.coda.ConnectionNameMetadataRequest, 1)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setConnectionName = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearConnectionName = function() {
					return this.setConnectionName(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasConnectionName = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getParameterAutocomplete = function() {
					return r.Message.getWrapperField(this, proto.coda.ParameterAutocompleteMetadataRequest, 2)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setParameterAutocomplete = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearParameterAutocomplete = function() {
					return this.setParameterAutocomplete(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasParameterAutocomplete = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getPostAuthSetup = function() {
					return r.Message.getWrapperField(this, proto.coda.PostAuthSetupMetadataRequest, 6)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setPostAuthSetup = function(e) {
					return r.Message.setOneofWrapperField(this, 6, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearPostAuthSetup = function() {
					return this.setPostAuthSetup(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasPostAuthSetup = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getSyncTableSchema = function() {
					return r.Message.getWrapperField(this, proto.coda.GetSyncTableSchemaMetadataRequest, 7)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setSyncTableSchema = function(e) {
					return r.Message.setOneofWrapperField(this, 7, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearSyncTableSchema = function() {
					return this.setSyncTableSchema(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasSyncTableSchema = function() {
					return null != r.Message.getField(this, 7)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getSyncTableName = function() {
					return r.Message.getWrapperField(this, proto.coda.GetDynamicSyncTableNameMetadataRequest, 8)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setSyncTableName = function(e) {
					return r.Message.setOneofWrapperField(this, 8, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearSyncTableName = function() {
					return this.setSyncTableName(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasSyncTableName = function() {
					return null != r.Message.getField(this, 8)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getSyncTableUrls = function() {
					return r.Message.getWrapperField(this, proto.coda.ListSyncTableDynamicUrlsMetadataRequest, 9)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setSyncTableUrls = function(e) {
					return r.Message.setOneofWrapperField(this, 9, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearSyncTableUrls = function() {
					return this.setSyncTableUrls(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasSyncTableUrls = function() {
					return null != r.Message.getField(this, 9)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getSearchSyncTableUrls = function() {
					return r.Message.getWrapperField(this, proto.coda.SearchSyncTableDynamicUrlsMetadataRequest, 13)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setSearchSyncTableUrls = function(e) {
					return r.Message.setOneofWrapperField(this, 13, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearSearchSyncTableUrls = function() {
					return this.setSearchSyncTableUrls(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasSearchSyncTableUrls = function() {
					return null != r.Message.getField(this, 13)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getSyncTableDisplayUrl = function() {
					return r.Message.getWrapperField(this, proto.coda.GetDynamicSyncTableDisplayUrlMetadataRequest, 10)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setSyncTableDisplayUrl = function(e) {
					return r.Message.setOneofWrapperField(this, 10, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearSyncTableDisplayUrl = function() {
					return this.setSyncTableDisplayUrl(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasSyncTableDisplayUrl = function() {
					return null != r.Message.getField(this, 10)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getPropertyOptions = function() {
					return r.Message.getWrapperField(this, proto.coda.PropertyOptionsMetadataRequest, 12)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setPropertyOptions = function(e) {
					return r.Message.setOneofWrapperField(this, 12, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearPropertyOptions = function() {
					return this.setPropertyOptions(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasPropertyOptions = function() {
					return null != r.Message.getField(this, 12)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getValidateParameters = function() {
					return r.Message.getWrapperField(this, proto.coda.ValidateParametersMetadataRequest, 15)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setValidateParameters = function(e) {
					return r.Message.setOneofWrapperField(this, 15, proto.coda.InvokeMetadataFormulaRequest.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearValidateParameters = function() {
					return this.setValidateParameters(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasValidateParameters = function() {
					return null != r.Message.getField(this, 15)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getParameter = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setParameter = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getConnection = function() {
					return r.Message.getWrapperField(this, proto.coda.Connection, 4)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setConnection = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearConnection = function() {
					return this.setConnection(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasConnection = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 5)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 5, e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 11, 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 11, e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.getPreviousAttemptError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 14)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.setPreviousAttemptError = function(e) {
					return r.Message.setWrapperField(this, 14, e)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.clearPreviousAttemptError = function() {
					return this.setPreviousAttemptError(void 0)
			}
			,
			proto.coda.InvokeMetadataFormulaRequest.prototype.hasPreviousAttemptError = function() {
					return null != r.Message.getField(this, 14)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.toObject = function(e) {
					return proto.coda.ImpersonateInvokeMetadataFormulaRequest.toObject(e, this)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.toObject = function(e, t) {
					var o, a = {
							userId: r.Message.getFieldWithDefault(t, 1, 0),
							request: (o = t.getRequest()) && proto.coda.InvokeMetadataFormulaRequest.toObject(e, o),
							deprecatedSource: r.Message.getFieldWithDefault(t, 3, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ImpersonateInvokeMetadataFormulaRequest;
					return proto.coda.ImpersonateInvokeMetadataFormulaRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readInt64();
									e.setUserId(o);
									break;
							case 2:
									o = new proto.coda.InvokeMetadataFormulaRequest;
									t.readMessage(o, proto.coda.InvokeMetadataFormulaRequest.deserializeBinaryFromReader),
									e.setRequest(o);
									break;
							case 3:
									o = t.readEnum();
									e.setDeprecatedSource(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ImpersonateInvokeMetadataFormulaRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getUserId()) && t.writeInt64(1, o),
					null != (o = e.getRequest()) && t.writeMessage(2, o, proto.coda.InvokeMetadataFormulaRequest.serializeBinaryToWriter),
					0 !== (o = e.getDeprecatedSource()) && t.writeEnum(3, o)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.getUserId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.setUserId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.getRequest = function() {
					return r.Message.getWrapperField(this, proto.coda.InvokeMetadataFormulaRequest, 2)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.setRequest = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.clearRequest = function() {
					return this.setRequest(void 0)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.hasRequest = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.getDeprecatedSource = function() {
					return r.Message.getFieldWithDefault(this, 3, 0)
			}
			,
			proto.coda.ImpersonateInvokeMetadataFormulaRequest.prototype.setDeprecatedSource = function(e) {
					return r.Message.setProto3EnumField(this, 3, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.repeatedFields_ = [8],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetIdentifiersForConnectionRequest.prototype.toObject = function(e) {
					return proto.coda.GetIdentifiersForConnectionRequest.toObject(e, this)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.toObject = function(e, t) {
					var o, a = {
							userId: r.Message.getFieldWithDefault(t, 1, 0),
							packId: r.Message.getFieldWithDefault(t, 2, 0),
							authParams: r.Message.getFieldWithDefault(t, 3, ""),
							plaintextCreds: r.Message.getFieldWithDefault(t, 4, ""),
							plaintextEndpoint: r.Message.getFieldWithDefault(t, 5, ""),
							packVersion: r.Message.getFieldWithDefault(t, 6, ""),
							docId: r.Message.getFieldWithDefault(t, 7, ""),
							authNetworkDomainsList: null == (o = r.Message.getRepeatedField(t, 8)) ? void 0 : o,
							source: r.Message.getFieldWithDefault(t, 9, 0),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							previousAttemptError: (o = t.getPreviousAttemptError()) && proto.coda.ExecutionError.toObject(e, o),
							authenticationName: r.Message.getFieldWithDefault(t, 12, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.GetIdentifiersForConnectionRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetIdentifiersForConnectionRequest;
					return proto.coda.GetIdentifiersForConnectionRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readInt64();
									e.setUserId(o);
									break;
							case 2:
									o = t.readUint32();
									e.setPackId(o);
									break;
							case 3:
									o = t.readString();
									e.setAuthParams(o);
									break;
							case 4:
									o = t.readString();
									e.setPlaintextCreds(o);
									break;
							case 5:
									o = t.readString();
									e.setPlaintextEndpoint(o);
									break;
							case 6:
									o = t.readString();
									e.setPackVersion(o);
									break;
							case 7:
									o = t.readString();
									e.setDocId(o);
									break;
							case 8:
									o = t.readString();
									e.addAuthNetworkDomains(o);
									break;
							case 9:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 10:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 11:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setPreviousAttemptError(o);
									break;
							case 12:
									o = t.readString();
									e.setAuthenticationName(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetIdentifiersForConnectionRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getUserId()) && t.writeInt64(1, o),
					0 !== (o = e.getPackId()) && t.writeUint32(2, o),
					(o = e.getAuthParams()).length > 0 && t.writeString(3, o),
					(o = e.getPlaintextCreds()).length > 0 && t.writeString(4, o),
					(o = e.getPlaintextEndpoint()).length > 0 && t.writeString(5, o),
					(o = e.getPackVersion()).length > 0 && t.writeString(6, o),
					(o = e.getDocId()).length > 0 && t.writeString(7, o),
					(o = e.getAuthNetworkDomainsList()).length > 0 && t.writeRepeatedString(8, o),
					0 !== (o = e.getSource()) && t.writeEnum(9, o),
					null != (o = e.getContext()) && t.writeMessage(10, o, proto.coda.Context.serializeBinaryToWriter),
					null != (o = e.getPreviousAttemptError()) && t.writeMessage(11, o, proto.coda.ExecutionError.serializeBinaryToWriter),
					(o = e.getAuthenticationName()).length > 0 && t.writeString(12, o)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getUserId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setUserId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getPackId = function() {
					return r.Message.getFieldWithDefault(this, 2, 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setPackId = function(e) {
					return r.Message.setProto3IntField(this, 2, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getAuthParams = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setAuthParams = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getPlaintextCreds = function() {
					return r.Message.getFieldWithDefault(this, 4, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setPlaintextCreds = function(e) {
					return r.Message.setProto3StringField(this, 4, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getPlaintextEndpoint = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setPlaintextEndpoint = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getPackVersion = function() {
					return r.Message.getFieldWithDefault(this, 6, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setPackVersion = function(e) {
					return r.Message.setProto3StringField(this, 6, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getDocId = function() {
					return r.Message.getFieldWithDefault(this, 7, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setDocId = function(e) {
					return r.Message.setProto3StringField(this, 7, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getAuthNetworkDomainsList = function() {
					return r.Message.getRepeatedField(this, 8)
			}
			;
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setAuthNetworkDomainsList = function(e) {
					return r.Message.setField(this, 8, e || [])
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.addAuthNetworkDomains = function(e, t) {
					return r.Message.addToRepeatedField(this, 8, e, t)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.clearAuthNetworkDomainsList = function() {
					return this.setAuthNetworkDomainsList([])
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 9, 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 9, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 10)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 10, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 10)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getPreviousAttemptError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 11)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setPreviousAttemptError = function(e) {
					return r.Message.setWrapperField(this, 11, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.clearPreviousAttemptError = function() {
					return this.setPreviousAttemptError(void 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.hasPreviousAttemptError = function() {
					return null != r.Message.getField(this, 11)
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.getAuthenticationName = function() {
					return r.Message.getFieldWithDefault(this, 12, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionRequest.prototype.setAuthenticationName = function(e) {
					return r.Message.setProto3StringField(this, 12, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SyncFormula.prototype.toObject = function(e) {
					return proto.coda.SyncFormula.toObject(e, this)
			}
			,
			proto.coda.SyncFormula.toObject = function(e, t) {
					var o = {
							packId: r.Message.getFieldWithDefault(t, 1, 0),
							packVersion: r.Message.getFieldWithDefault(t, 2, ""),
							name: r.Message.getFieldWithDefault(t, 3, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.SyncFormula.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SyncFormula;
					return proto.coda.SyncFormula.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SyncFormula.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readUint32();
									e.setPackId(o);
									break;
							case 2:
									o = t.readString();
									e.setPackVersion(o);
									break;
							case 3:
									o = t.readString();
									e.setName(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.SyncFormula.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SyncFormula.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SyncFormula.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getPackId()) && t.writeUint32(1, o),
					(o = e.getPackVersion()).length > 0 && t.writeString(2, o),
					(o = e.getName()).length > 0 && t.writeString(3, o)
			}
			,
			proto.coda.SyncFormula.prototype.getPackId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.SyncFormula.prototype.setPackId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.SyncFormula.prototype.getPackVersion = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.SyncFormula.prototype.setPackVersion = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.SyncFormula.prototype.getName = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.SyncFormula.prototype.setName = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ContinuationToken.prototype.toObject = function(e) {
					return proto.coda.ContinuationToken.toObject(e, this)
			}
			,
			proto.coda.ContinuationToken.toObject = function(e, t) {
					var o = {
							objectVal: r.Message.getFieldWithDefault(t, 1, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.ContinuationToken.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ContinuationToken;
					return proto.coda.ContinuationToken.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ContinuationToken.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = t.readString();
									e.setObjectVal(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.ContinuationToken.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ContinuationToken.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ContinuationToken.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getObjectVal()).length > 0 && t.writeString(1, o)
			}
			,
			proto.coda.ContinuationToken.prototype.getObjectVal = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.ContinuationToken.prototype.setObjectVal = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.CompletionToken.prototype.toObject = function(e) {
					return proto.coda.CompletionToken.toObject(e, this)
			}
			,
			proto.coda.CompletionToken.toObject = function(e, t) {
					var o = {
							objectVal: r.Message.getFieldWithDefault(t, 1, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.CompletionToken.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.CompletionToken;
					return proto.coda.CompletionToken.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.CompletionToken.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = t.readString();
									e.setObjectVal(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.CompletionToken.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.CompletionToken.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.CompletionToken.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getObjectVal()).length > 0 && t.writeString(1, o)
			}
			,
			proto.coda.CompletionToken.prototype.getObjectVal = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.CompletionToken.prototype.setObjectVal = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ResponseAnnotations.prototype.toObject = function(e) {
					return proto.coda.ResponseAnnotations.toObject(e, this)
			}
			,
			proto.coda.ResponseAnnotations.toObject = function(e, t) {
					var o, r = {
							emailsToUserIdsMap: (o = t.getEmailsToUserIdsMap()) ? o.toObject(e, void 0) : [],
							urlToBlobIdsMap: (o = t.getUrlToBlobIdsMap()) ? o.toObject(e, void 0) : []
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.ResponseAnnotations.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ResponseAnnotations;
					return proto.coda.ResponseAnnotations.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ResponseAnnotations.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = e.getEmailsToUserIdsMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readInt64, null, "", 0)
									}
									));
									break;
							case 2:
									o = e.getUrlToBlobIdsMap();
									t.readMessage(o, (function(e, t) {
											r.Map.deserializeBinary(e, t, r.BinaryReader.prototype.readString, r.BinaryReader.prototype.readString, null, "", "")
									}
									));
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ResponseAnnotations.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ResponseAnnotations.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ResponseAnnotations.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getEmailsToUserIdsMap(!0)) && o.getLength() > 0 && o.serializeBinary(1, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeInt64),
					(o = e.getUrlToBlobIdsMap(!0)) && o.getLength() > 0 && o.serializeBinary(2, t, r.BinaryWriter.prototype.writeString, r.BinaryWriter.prototype.writeString)
			}
			,
			proto.coda.ResponseAnnotations.prototype.getEmailsToUserIdsMap = function(e) {
					return r.Message.getMapField(this, 1, e, null)
			}
			,
			proto.coda.ResponseAnnotations.prototype.clearEmailsToUserIdsMap = function() {
					return this.getEmailsToUserIdsMap().clear(),
					this
			}
			,
			proto.coda.ResponseAnnotations.prototype.getUrlToBlobIdsMap = function(e) {
					return r.Message.getMapField(this, 2, e, null)
			}
			,
			proto.coda.ResponseAnnotations.prototype.clearUrlToBlobIdsMap = function() {
					return this.getUrlToBlobIdsMap().clear(),
					this
			}
			,
			proto.coda.InvokeSyncFormulaRequest.repeatedFields_ = [2],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeSyncFormulaRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeSyncFormulaRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							paramsList: r.Message.toObjectList(t.getParamsList(), proto.coda.Value.toObject, e),
							connection: (o = t.getConnection()) && proto.coda.Connection.toObject(e, o),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							continuation: (o = t.getContinuation()) && proto.coda.ContinuationToken.toObject(e, o),
							schema: r.Message.getFieldWithDefault(t, 6, ""),
							dynamicUrl: r.Message.getFieldWithDefault(t, 7, ""),
							source: r.Message.getFieldWithDefault(t, 8, 0),
							skipResultParsing: r.Message.getBooleanFieldWithDefault(t, 9, !1),
							previousCompletion: (o = t.getPreviousCompletion()) && proto.coda.CompletionToken.toObject(e, o),
							permissionSyncMode: r.Message.getFieldWithDefault(t, 11, 0),
							previousAttemptError: (o = t.getPreviousAttemptError()) && proto.coda.ExecutionError.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeSyncFormulaRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeSyncFormulaRequest;
					return proto.coda.InvokeSyncFormulaRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = new proto.coda.Value;
									t.readMessage(o, proto.coda.Value.deserializeBinaryFromReader),
									e.addParams(o);
									break;
							case 3:
									o = new proto.coda.Connection;
									t.readMessage(o, proto.coda.Connection.deserializeBinaryFromReader),
									e.setConnection(o);
									break;
							case 4:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 5:
									o = new proto.coda.ContinuationToken;
									t.readMessage(o, proto.coda.ContinuationToken.deserializeBinaryFromReader),
									e.setContinuation(o);
									break;
							case 6:
									o = t.readString();
									e.setSchema(o);
									break;
							case 7:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							case 8:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 9:
									o = t.readBool();
									e.setSkipResultParsing(o);
									break;
							case 10:
									o = new proto.coda.CompletionToken;
									t.readMessage(o, proto.coda.CompletionToken.deserializeBinaryFromReader),
									e.setPreviousCompletion(o);
									break;
							case 11:
									o = t.readEnum();
									e.setPermissionSyncMode(o);
									break;
							case 12:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setPreviousAttemptError(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeSyncFormulaRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeSyncFormulaRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getParamsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.coda.Value.serializeBinaryToWriter),
					null != (o = e.getConnection()) && t.writeMessage(3, o, proto.coda.Connection.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(4, o, proto.coda.Context.serializeBinaryToWriter),
					null != (o = e.getContinuation()) && t.writeMessage(5, o, proto.coda.ContinuationToken.serializeBinaryToWriter),
					(o = e.getSchema()).length > 0 && t.writeString(6, o),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(7, o),
					0 !== (o = e.getSource()) && t.writeEnum(8, o),
					(o = e.getSkipResultParsing()) && t.writeBool(9, o),
					null != (o = e.getPreviousCompletion()) && t.writeMessage(10, o, proto.coda.CompletionToken.serializeBinaryToWriter),
					0 !== (o = e.getPermissionSyncMode()) && t.writeEnum(11, o),
					null != (o = e.getPreviousAttemptError()) && t.writeMessage(12, o, proto.coda.ExecutionError.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getParamsList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.Value, 2)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setParamsList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 2, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.addParams = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 2, e, proto.coda.Value, t)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearParamsList = function() {
					return this.setParamsList([])
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getConnection = function() {
					return r.Message.getWrapperField(this, proto.coda.Connection, 3)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setConnection = function(e) {
					return r.Message.setWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearConnection = function() {
					return this.setConnection(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.hasConnection = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 4)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getContinuation = function() {
					return r.Message.getWrapperField(this, proto.coda.ContinuationToken, 5)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setContinuation = function(e) {
					return r.Message.setWrapperField(this, 5, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearContinuation = function() {
					return this.setContinuation(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.hasContinuation = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getSchema = function() {
					return r.Message.getFieldWithDefault(this, 6, "")
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setSchema = function(e) {
					return r.Message.setProto3StringField(this, 6, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 7, "")
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 7, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 8, 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 8, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getSkipResultParsing = function() {
					return r.Message.getBooleanFieldWithDefault(this, 9, !1)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setSkipResultParsing = function(e) {
					return r.Message.setProto3BooleanField(this, 9, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getPreviousCompletion = function() {
					return r.Message.getWrapperField(this, proto.coda.CompletionToken, 10)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setPreviousCompletion = function(e) {
					return r.Message.setWrapperField(this, 10, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearPreviousCompletion = function() {
					return this.setPreviousCompletion(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.hasPreviousCompletion = function() {
					return null != r.Message.getField(this, 10)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getPermissionSyncMode = function() {
					return r.Message.getFieldWithDefault(this, 11, 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setPermissionSyncMode = function(e) {
					return r.Message.setProto3EnumField(this, 11, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.getPreviousAttemptError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 12)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.setPreviousAttemptError = function(e) {
					return r.Message.setWrapperField(this, 12, e)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.clearPreviousAttemptError = function() {
					return this.setPreviousAttemptError(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaRequest.prototype.hasPreviousAttemptError = function() {
					return null != r.Message.getField(this, 12)
			}
			,
			proto.coda.RowUpdate.repeatedFields_ = [3],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.RowUpdate.prototype.toObject = function(e) {
					return proto.coda.RowUpdate.toObject(e, this)
			}
			,
			proto.coda.RowUpdate.toObject = function(e, t) {
					var o, a = {
							previousValues: (o = t.getPreviousValues()) && proto.coda.ResultValue.toObject(e, o),
							newValues: (o = t.getNewValues()) && proto.coda.ResultValue.toObject(e, o),
							updatedFieldsList: null == (o = r.Message.getRepeatedField(t, 3)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.RowUpdate.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.RowUpdate;
					return proto.coda.RowUpdate.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.RowUpdate.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setPreviousValues(o);
									break;
							case 2:
									o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setNewValues(o);
									break;
							case 3:
									o = t.readString();
									e.addUpdatedFields(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.RowUpdate.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.RowUpdate.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.RowUpdate.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getPreviousValues()) && t.writeMessage(1, o, proto.coda.ResultValue.serializeBinaryToWriter),
					null != (o = e.getNewValues()) && t.writeMessage(2, o, proto.coda.ResultValue.serializeBinaryToWriter),
					(o = e.getUpdatedFieldsList()).length > 0 && t.writeRepeatedString(3, o)
			}
			,
			proto.coda.RowUpdate.prototype.getPreviousValues = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 1)
			}
			,
			proto.coda.RowUpdate.prototype.setPreviousValues = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.RowUpdate.prototype.clearPreviousValues = function() {
					return this.setPreviousValues(void 0)
			}
			,
			proto.coda.RowUpdate.prototype.hasPreviousValues = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.RowUpdate.prototype.getNewValues = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 2)
			}
			,
			proto.coda.RowUpdate.prototype.setNewValues = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.RowUpdate.prototype.clearNewValues = function() {
					return this.setNewValues(void 0)
			}
			,
			proto.coda.RowUpdate.prototype.hasNewValues = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.RowUpdate.prototype.getUpdatedFieldsList = function() {
					return r.Message.getRepeatedField(this, 3)
			}
			,
			proto.coda.RowUpdate.prototype.setUpdatedFieldsList = function(e) {
					return r.Message.setField(this, 3, e || [])
			}
			,
			proto.coda.RowUpdate.prototype.addUpdatedFields = function(e, t) {
					return r.Message.addToRepeatedField(this, 3, e, t)
			}
			,
			proto.coda.RowUpdate.prototype.clearUpdatedFieldsList = function() {
					return this.setUpdatedFieldsList([])
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.repeatedFields_ = [3, 5],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeSyncUpdateFormulaRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeSyncUpdateFormulaRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.toObject = function(e, t) {
					var o, a = {
							userId: r.Message.getFieldWithDefault(t, 1, 0),
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							paramsList: r.Message.toObjectList(t.getParamsList(), proto.coda.Value.toObject, e),
							connection: (o = t.getConnection()) && proto.coda.Connection.toObject(e, o),
							rowUpdatesList: r.Message.toObjectList(t.getRowUpdatesList(), proto.coda.RowUpdate.toObject, e),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							schema: r.Message.getFieldWithDefault(t, 7, ""),
							dynamicUrl: r.Message.getFieldWithDefault(t, 8, ""),
							source: r.Message.getFieldWithDefault(t, 9, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeSyncUpdateFormulaRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeSyncUpdateFormulaRequest;
					return proto.coda.InvokeSyncUpdateFormulaRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readInt64();
									e.setUserId(o);
									break;
							case 2:
									o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 3:
									o = new proto.coda.Value;
									t.readMessage(o, proto.coda.Value.deserializeBinaryFromReader),
									e.addParams(o);
									break;
							case 4:
									o = new proto.coda.Connection;
									t.readMessage(o, proto.coda.Connection.deserializeBinaryFromReader),
									e.setConnection(o);
									break;
							case 5:
									o = new proto.coda.RowUpdate;
									t.readMessage(o, proto.coda.RowUpdate.deserializeBinaryFromReader),
									e.addRowUpdates(o);
									break;
							case 6:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 7:
									o = t.readString();
									e.setSchema(o);
									break;
							case 8:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							case 9:
									o = t.readEnum();
									e.setSource(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeSyncUpdateFormulaRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getUserId()) && t.writeInt64(1, o),
					null != (o = e.getFormula()) && t.writeMessage(2, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getParamsList()).length > 0 && t.writeRepeatedMessage(3, o, proto.coda.Value.serializeBinaryToWriter),
					null != (o = e.getConnection()) && t.writeMessage(4, o, proto.coda.Connection.serializeBinaryToWriter),
					(o = e.getRowUpdatesList()).length > 0 && t.writeRepeatedMessage(5, o, proto.coda.RowUpdate.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(6, o, proto.coda.Context.serializeBinaryToWriter),
					(o = e.getSchema()).length > 0 && t.writeString(7, o),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(8, o),
					0 !== (o = e.getSource()) && t.writeEnum(9, o)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getUserId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setUserId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 2)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getParamsList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.Value, 3)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setParamsList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.addParams = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 3, e, proto.coda.Value, t)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.clearParamsList = function() {
					return this.setParamsList([])
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getConnection = function() {
					return r.Message.getWrapperField(this, proto.coda.Connection, 4)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setConnection = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.clearConnection = function() {
					return this.setConnection(void 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.hasConnection = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getRowUpdatesList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.RowUpdate, 5)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setRowUpdatesList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 5, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.addRowUpdates = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 5, e, proto.coda.RowUpdate, t)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.clearRowUpdatesList = function() {
					return this.setRowUpdatesList([])
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 6)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 6, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getSchema = function() {
					return r.Message.getFieldWithDefault(this, 7, "")
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setSchema = function(e) {
					return r.Message.setProto3StringField(this, 7, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 8, "")
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 8, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 9, 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 9, e)
			}
			,
			proto.coda.MissingOAuthScopesError.repeatedFields_ = [1, 2],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.MissingOAuthScopesError.prototype.toObject = function(e) {
					return proto.coda.MissingOAuthScopesError.toObject(e, this)
			}
			,
			proto.coda.MissingOAuthScopesError.toObject = function(e, t) {
					var o, a = {
							missingPackScopeList: null == (o = r.Message.getRepeatedField(t, 1)) ? void 0 : o,
							missingFormulaScopeList: null == (o = r.Message.getRepeatedField(t, 2)) ? void 0 : o
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.MissingOAuthScopesError.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.MissingOAuthScopesError;
					return proto.coda.MissingOAuthScopesError.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.MissingOAuthScopesError.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.addMissingPackScope(o);
									break;
							case 2:
									o = t.readString();
									e.addMissingFormulaScope(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.MissingOAuthScopesError.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.MissingOAuthScopesError.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getMissingPackScopeList()).length > 0 && t.writeRepeatedString(1, o),
					(o = e.getMissingFormulaScopeList()).length > 0 && t.writeRepeatedString(2, o)
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.getMissingPackScopeList = function() {
					return r.Message.getRepeatedField(this, 1)
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.setMissingPackScopeList = function(e) {
					return r.Message.setField(this, 1, e || [])
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.addMissingPackScope = function(e, t) {
					return r.Message.addToRepeatedField(this, 1, e, t)
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.clearMissingPackScopeList = function() {
					return this.setMissingPackScopeList([])
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.getMissingFormulaScopeList = function() {
					return r.Message.getRepeatedField(this, 2)
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.setMissingFormulaScopeList = function(e) {
					return r.Message.setField(this, 2, e || [])
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.addMissingFormulaScope = function(e, t) {
					return r.Message.addToRepeatedField(this, 2, e, t)
			}
			,
			proto.coda.MissingOAuthScopesError.prototype.clearMissingFormulaScopeList = function() {
					return this.setMissingFormulaScopeList([])
			}
			,
			proto.coda.ExecutionError.oneofGroups_ = [[3]],
			proto.coda.ExecutionError.BodyCase = {
					BODY_NOT_SET: 0,
					MISSING_OAUTH_SCOPES_ERROR: 3
			},
			proto.coda.ExecutionError.prototype.getBodyCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.ExecutionError.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ExecutionError.prototype.toObject = function(e) {
					return proto.coda.ExecutionError.toObject(e, this)
			}
			,
			proto.coda.ExecutionError.toObject = function(e, t) {
					var o, a = {
							type: r.Message.getFieldWithDefault(t, 1, 0),
							message: r.Message.getFieldWithDefault(t, 2, ""),
							missingOauthScopesError: (o = t.getMissingOauthScopesError()) && proto.coda.MissingOAuthScopesError.toObject(e, o),
							stack: r.Message.getFieldWithDefault(t, 4, ""),
							statusCode: r.Message.getFieldWithDefault(t, 5, 0),
							retryAfterMs: r.Message.getFieldWithDefault(t, 6, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ExecutionError.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ExecutionError;
					return proto.coda.ExecutionError.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ExecutionError.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readEnum();
									e.setType(o);
									break;
							case 2:
									o = t.readString();
									e.setMessage(o);
									break;
							case 3:
									o = new proto.coda.MissingOAuthScopesError;
									t.readMessage(o, proto.coda.MissingOAuthScopesError.deserializeBinaryFromReader),
									e.setMissingOauthScopesError(o);
									break;
							case 4:
									o = t.readString();
									e.setStack(o);
									break;
							case 5:
									o = t.readInt32();
									e.setStatusCode(o);
									break;
							case 6:
									o = t.readInt32();
									e.setRetryAfterMs(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ExecutionError.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ExecutionError.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ExecutionError.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getType()) && t.writeEnum(1, o),
					(o = e.getMessage()).length > 0 && t.writeString(2, o),
					null != (o = e.getMissingOauthScopesError()) && t.writeMessage(3, o, proto.coda.MissingOAuthScopesError.serializeBinaryToWriter),
					null != (o = r.Message.getField(e, 4)) && t.writeString(4, o),
					null != (o = r.Message.getField(e, 5)) && t.writeInt32(5, o),
					null != (o = r.Message.getField(e, 6)) && t.writeInt32(6, o)
			}
			,
			proto.coda.ExecutionError.prototype.getType = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.ExecutionError.prototype.setType = function(e) {
					return r.Message.setProto3EnumField(this, 1, e)
			}
			,
			proto.coda.ExecutionError.prototype.getMessage = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.ExecutionError.prototype.setMessage = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.ExecutionError.prototype.getMissingOauthScopesError = function() {
					return r.Message.getWrapperField(this, proto.coda.MissingOAuthScopesError, 3)
			}
			,
			proto.coda.ExecutionError.prototype.setMissingOauthScopesError = function(e) {
					return r.Message.setOneofWrapperField(this, 3, proto.coda.ExecutionError.oneofGroups_[0], e)
			}
			,
			proto.coda.ExecutionError.prototype.clearMissingOauthScopesError = function() {
					return this.setMissingOauthScopesError(void 0)
			}
			,
			proto.coda.ExecutionError.prototype.hasMissingOauthScopesError = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.ExecutionError.prototype.getStack = function() {
					return r.Message.getFieldWithDefault(this, 4, "")
			}
			,
			proto.coda.ExecutionError.prototype.setStack = function(e) {
					return r.Message.setField(this, 4, e)
			}
			,
			proto.coda.ExecutionError.prototype.clearStack = function() {
					return r.Message.setField(this, 4, void 0)
			}
			,
			proto.coda.ExecutionError.prototype.hasStack = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.ExecutionError.prototype.getStatusCode = function() {
					return r.Message.getFieldWithDefault(this, 5, 0)
			}
			,
			proto.coda.ExecutionError.prototype.setStatusCode = function(e) {
					return r.Message.setField(this, 5, e)
			}
			,
			proto.coda.ExecutionError.prototype.clearStatusCode = function() {
					return r.Message.setField(this, 5, void 0)
			}
			,
			proto.coda.ExecutionError.prototype.hasStatusCode = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.ExecutionError.prototype.getRetryAfterMs = function() {
					return r.Message.getFieldWithDefault(this, 6, 0)
			}
			,
			proto.coda.ExecutionError.prototype.setRetryAfterMs = function(e) {
					return r.Message.setField(this, 6, e)
			}
			,
			proto.coda.ExecutionError.prototype.clearRetryAfterMs = function() {
					return r.Message.setField(this, 6, void 0)
			}
			,
			proto.coda.ExecutionError.prototype.hasRetryAfterMs = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.InvokeFormulaResponse.oneofGroups_ = [[1, 2]],
			proto.coda.InvokeFormulaResponse.ResultCase = {
					RESULT_NOT_SET: 0,
					VALUE: 1,
					ERROR: 2
			},
			proto.coda.InvokeFormulaResponse.prototype.getResultCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.InvokeFormulaResponse.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeFormulaResponse.prototype.toObject = function(e) {
					return proto.coda.InvokeFormulaResponse.toObject(e, this)
			}
			,
			proto.coda.InvokeFormulaResponse.toObject = function(e, t) {
					var o, a = {
							value: (o = t.getValue()) && proto.coda.ResultValue.toObject(e, o),
							error: (o = t.getError()) && proto.coda.ExecutionError.toObject(e, o),
							cacheHit: r.Message.getBooleanFieldWithDefault(t, 3, !1),
							annotations: (o = t.getAnnotations()) && proto.coda.ResponseAnnotations.toObject(e, o),
							cachedTimestampMs: r.Message.getFieldWithDefault(t, 5, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeFormulaResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeFormulaResponse;
					return proto.coda.InvokeFormulaResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeFormulaResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setValue(o);
									break;
							case 2:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setError(o);
									break;
							case 3:
									o = t.readBool();
									e.setCacheHit(o);
									break;
							case 4:
									o = new proto.coda.ResponseAnnotations;
									t.readMessage(o, proto.coda.ResponseAnnotations.deserializeBinaryFromReader),
									e.setAnnotations(o);
									break;
							case 5:
									o = t.readUint64();
									e.setCachedTimestampMs(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeFormulaResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeFormulaResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getValue()) && t.writeMessage(1, o, proto.coda.ResultValue.serializeBinaryToWriter),
					null != (o = e.getError()) && t.writeMessage(2, o, proto.coda.ExecutionError.serializeBinaryToWriter),
					(o = e.getCacheHit()) && t.writeBool(3, o),
					null != (o = e.getAnnotations()) && t.writeMessage(4, o, proto.coda.ResponseAnnotations.serializeBinaryToWriter),
					0 !== (o = e.getCachedTimestampMs()) && t.writeUint64(5, o)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.getValue = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 1)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.setValue = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.InvokeFormulaResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.clearValue = function() {
					return this.setValue(void 0)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.hasValue = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.getError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 2)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.setError = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.InvokeFormulaResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.clearError = function() {
					return this.setError(void 0)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.hasError = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.getCacheHit = function() {
					return r.Message.getBooleanFieldWithDefault(this, 3, !1)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.setCacheHit = function(e) {
					return r.Message.setProto3BooleanField(this, 3, e)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.getAnnotations = function() {
					return r.Message.getWrapperField(this, proto.coda.ResponseAnnotations, 4)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.setAnnotations = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.clearAnnotations = function() {
					return this.setAnnotations(void 0)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.hasAnnotations = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.getCachedTimestampMs = function() {
					return r.Message.getFieldWithDefault(this, 5, 0)
			}
			,
			proto.coda.InvokeFormulaResponse.prototype.setCachedTimestampMs = function(e) {
					return r.Message.setProto3IntField(this, 5, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.oneofGroups_ = [[1, 3]],
			proto.coda.GetIdentifiersForConnectionResponse.ResultCase = {
					RESULT_NOT_SET: 0,
					IDENTIFIERS: 1,
					ERROR: 3
			},
			proto.coda.GetIdentifiersForConnectionResponse.prototype.getResultCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.GetIdentifiersForConnectionResponse.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetIdentifiersForConnectionResponse.prototype.toObject = function(e) {
					return proto.coda.GetIdentifiersForConnectionResponse.toObject(e, this)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.toObject = function(e, t) {
					var o, r = {
							identifiers: (o = t.getIdentifiers()) && proto.coda.GetIdentifiersForConnectionResponse.Identifiers.toObject(e, o),
							error: (o = t.getError()) && proto.coda.ExecutionError.toObject(e, o)
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.GetIdentifiersForConnectionResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetIdentifiersForConnectionResponse;
					return proto.coda.GetIdentifiersForConnectionResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.GetIdentifiersForConnectionResponse.Identifiers;
									t.readMessage(o, proto.coda.GetIdentifiersForConnectionResponse.Identifiers.deserializeBinaryFromReader),
									e.setIdentifiers(o);
									break;
							case 3:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setError(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetIdentifiersForConnectionResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getIdentifiers()) && t.writeMessage(1, o, proto.coda.GetIdentifiersForConnectionResponse.Identifiers.serializeBinaryToWriter),
					null != (o = e.getError()) && t.writeMessage(3, o, proto.coda.ExecutionError.serializeBinaryToWriter)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetIdentifiersForConnectionResponse.Identifiers.prototype.toObject = function(e) {
					return proto.coda.GetIdentifiersForConnectionResponse.Identifiers.toObject(e, this)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.toObject = function(e, t) {
					var o = {
							name: r.Message.getFieldWithDefault(t, 1, ""),
							externalUserId: r.Message.getFieldWithDefault(t, 2, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetIdentifiersForConnectionResponse.Identifiers;
					return proto.coda.GetIdentifiersForConnectionResponse.Identifiers.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setName(o);
									break;
							case 2:
									o = t.readString();
									e.setExternalUserId(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetIdentifiersForConnectionResponse.Identifiers.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getName()).length > 0 && t.writeString(1, o),
					(o = e.getExternalUserId()).length > 0 && t.writeString(2, o)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.prototype.getName = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.prototype.setName = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.prototype.getExternalUserId = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.Identifiers.prototype.setExternalUserId = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.getIdentifiers = function() {
					return r.Message.getWrapperField(this, proto.coda.GetIdentifiersForConnectionResponse.Identifiers, 1)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.setIdentifiers = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.GetIdentifiersForConnectionResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.clearIdentifiers = function() {
					return this.setIdentifiers(void 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.hasIdentifiers = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.getError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 3)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.setError = function(e) {
					return r.Message.setOneofWrapperField(this, 3, proto.coda.GetIdentifiersForConnectionResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.clearError = function() {
					return this.setError(void 0)
			}
			,
			proto.coda.GetIdentifiersForConnectionResponse.prototype.hasError = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.repeatedFields_ = [8, 10],
			proto.coda.InvokeSyncFormulaResponse.oneofGroups_ = [[1, 2]],
			proto.coda.InvokeSyncFormulaResponse.ResultCase = {
					RESULT_NOT_SET: 0,
					VALUE: 1,
					ERROR: 2
			},
			proto.coda.InvokeSyncFormulaResponse.prototype.getResultCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.InvokeSyncFormulaResponse.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeSyncFormulaResponse.prototype.toObject = function(e) {
					return proto.coda.InvokeSyncFormulaResponse.toObject(e, this)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.toObject = function(e, t) {
					var o, a = {
							value: (o = t.getValue()) && proto.coda.ResultValue.toObject(e, o),
							error: (o = t.getError()) && proto.coda.ExecutionError.toObject(e, o),
							continuation: (o = t.getContinuation()) && proto.coda.ContinuationToken.toObject(e, o),
							cacheHit: r.Message.getBooleanFieldWithDefault(t, 4, !1),
							annotations: (o = t.getAnnotations()) && proto.coda.ResponseAnnotations.toObject(e, o),
							rawSyncValue: (o = t.getRawSyncValue()) && proto.coda.ResultValue.toObject(e, o),
							completion: (o = t.getCompletion()) && proto.coda.CompletionToken.toObject(e, o),
							deletedItemIdsList: null == (o = r.Message.getRepeatedField(t, 8)) ? void 0 : o,
							permissionsContextList: r.Message.toObjectList(t.getPermissionsContextList(), proto.coda.PermissionsContext.toObject, e)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeSyncFormulaResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeSyncFormulaResponse;
					return proto.coda.InvokeSyncFormulaResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setValue(o);
									break;
							case 2:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setError(o);
									break;
							case 3:
									o = new proto.coda.ContinuationToken;
									t.readMessage(o, proto.coda.ContinuationToken.deserializeBinaryFromReader),
									e.setContinuation(o);
									break;
							case 4:
									o = t.readBool();
									e.setCacheHit(o);
									break;
							case 5:
									o = new proto.coda.ResponseAnnotations;
									t.readMessage(o, proto.coda.ResponseAnnotations.deserializeBinaryFromReader),
									e.setAnnotations(o);
									break;
							case 6:
									o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setRawSyncValue(o);
									break;
							case 7:
									o = new proto.coda.CompletionToken;
									t.readMessage(o, proto.coda.CompletionToken.deserializeBinaryFromReader),
									e.setCompletion(o);
									break;
							case 8:
									o = t.readString();
									e.addDeletedItemIds(o);
									break;
							case 10:
									o = new proto.coda.PermissionsContext;
									t.readMessage(o, proto.coda.PermissionsContext.deserializeBinaryFromReader),
									e.addPermissionsContext(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeSyncFormulaResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeSyncFormulaResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getValue()) && t.writeMessage(1, o, proto.coda.ResultValue.serializeBinaryToWriter),
					null != (o = e.getError()) && t.writeMessage(2, o, proto.coda.ExecutionError.serializeBinaryToWriter),
					null != (o = e.getContinuation()) && t.writeMessage(3, o, proto.coda.ContinuationToken.serializeBinaryToWriter),
					(o = e.getCacheHit()) && t.writeBool(4, o),
					null != (o = e.getAnnotations()) && t.writeMessage(5, o, proto.coda.ResponseAnnotations.serializeBinaryToWriter),
					null != (o = e.getRawSyncValue()) && t.writeMessage(6, o, proto.coda.ResultValue.serializeBinaryToWriter),
					null != (o = e.getCompletion()) && t.writeMessage(7, o, proto.coda.CompletionToken.serializeBinaryToWriter),
					(o = e.getDeletedItemIdsList()).length > 0 && t.writeRepeatedString(8, o),
					(o = e.getPermissionsContextList()).length > 0 && t.writeRepeatedMessage(10, o, proto.coda.PermissionsContext.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getValue = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 1)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setValue = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.InvokeSyncFormulaResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearValue = function() {
					return this.setValue(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.hasValue = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 2)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setError = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.InvokeSyncFormulaResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearError = function() {
					return this.setError(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.hasError = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getContinuation = function() {
					return r.Message.getWrapperField(this, proto.coda.ContinuationToken, 3)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setContinuation = function(e) {
					return r.Message.setWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearContinuation = function() {
					return this.setContinuation(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.hasContinuation = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getCacheHit = function() {
					return r.Message.getBooleanFieldWithDefault(this, 4, !1)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setCacheHit = function(e) {
					return r.Message.setProto3BooleanField(this, 4, e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getAnnotations = function() {
					return r.Message.getWrapperField(this, proto.coda.ResponseAnnotations, 5)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setAnnotations = function(e) {
					return r.Message.setWrapperField(this, 5, e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearAnnotations = function() {
					return this.setAnnotations(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.hasAnnotations = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getRawSyncValue = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 6)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setRawSyncValue = function(e) {
					return r.Message.setWrapperField(this, 6, e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearRawSyncValue = function() {
					return this.setRawSyncValue(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.hasRawSyncValue = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getCompletion = function() {
					return r.Message.getWrapperField(this, proto.coda.CompletionToken, 7)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setCompletion = function(e) {
					return r.Message.setWrapperField(this, 7, e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearCompletion = function() {
					return this.setCompletion(void 0)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.hasCompletion = function() {
					return null != r.Message.getField(this, 7)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getDeletedItemIdsList = function() {
					return r.Message.getRepeatedField(this, 8)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setDeletedItemIdsList = function(e) {
					return r.Message.setField(this, 8, e || [])
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.addDeletedItemIds = function(e, t) {
					return r.Message.addToRepeatedField(this, 8, e, t)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearDeletedItemIdsList = function() {
					return this.setDeletedItemIdsList([])
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.getPermissionsContextList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.PermissionsContext, 10)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.setPermissionsContextList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 10, e)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.addPermissionsContext = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 10, e, proto.coda.PermissionsContext, t)
			}
			,
			proto.coda.InvokeSyncFormulaResponse.prototype.clearPermissionsContextList = function() {
					return this.setPermissionsContextList([])
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.oneofGroups_ = [[1, 2]],
			proto.coda.InvokeSyncUpdateFormulaResponse.ResultCase = {
					RESULT_NOT_SET: 0,
					VALUE: 1,
					ERROR: 2
			},
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.getResultCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.InvokeSyncUpdateFormulaResponse.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeSyncUpdateFormulaResponse.prototype.toObject = function(e) {
					return proto.coda.InvokeSyncUpdateFormulaResponse.toObject(e, this)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.toObject = function(e, t) {
					var o, r = {
							value: (o = t.getValue()) && proto.coda.ResultValue.toObject(e, o),
							error: (o = t.getError()) && proto.coda.ExecutionError.toObject(e, o),
							annotations: (o = t.getAnnotations()) && proto.coda.ResponseAnnotations.toObject(e, o)
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.InvokeSyncUpdateFormulaResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeSyncUpdateFormulaResponse;
					return proto.coda.InvokeSyncUpdateFormulaResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setValue(o);
									break;
							case 2:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setError(o);
									break;
							case 3:
									o = new proto.coda.ResponseAnnotations;
									t.readMessage(o, proto.coda.ResponseAnnotations.deserializeBinaryFromReader),
									e.setAnnotations(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeSyncUpdateFormulaResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getValue()) && t.writeMessage(1, o, proto.coda.ResultValue.serializeBinaryToWriter),
					null != (o = e.getError()) && t.writeMessage(2, o, proto.coda.ExecutionError.serializeBinaryToWriter),
					null != (o = e.getAnnotations()) && t.writeMessage(3, o, proto.coda.ResponseAnnotations.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.getValue = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 1)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.setValue = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.InvokeSyncUpdateFormulaResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.clearValue = function() {
					return this.setValue(void 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.hasValue = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.getError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 2)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.setError = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.InvokeSyncUpdateFormulaResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.clearError = function() {
					return this.setError(void 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.hasError = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.getAnnotations = function() {
					return r.Message.getWrapperField(this, proto.coda.ResponseAnnotations, 3)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.setAnnotations = function(e) {
					return r.Message.setWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.clearAnnotations = function() {
					return this.setAnnotations(void 0)
			}
			,
			proto.coda.InvokeSyncUpdateFormulaResponse.prototype.hasAnnotations = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.SqlQuery.repeatedFields_ = [2],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SqlQuery.prototype.toObject = function(e) {
					return proto.coda.SqlQuery.toObject(e, this)
			}
			,
			proto.coda.SqlQuery.toObject = function(e, t) {
					var o, a = {
							query: r.Message.getFieldWithDefault(t, 1, ""),
							keyColumnsList: null == (o = r.Message.getRepeatedField(t, 2)) ? void 0 : o,
							database: r.Message.getFieldWithDefault(t, 3, ""),
							schema: r.Message.getFieldWithDefault(t, 4, ""),
							warehouse: r.Message.getFieldWithDefault(t, 5, ""),
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.SqlQuery.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SqlQuery;
					return proto.coda.SqlQuery.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SqlQuery.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setQuery(o);
									break;
							case 2:
									o = t.readString();
									e.addKeyColumns(o);
									break;
							case 3:
									o = t.readString();
									e.setDatabase(o);
									break;
							case 4:
									o = t.readString();
									e.setSchema(o);
									break;
							case 5:
									o = t.readString();
									e.setWarehouse(o);
									break;
							case 6:
									o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.SqlQuery.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SqlQuery.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SqlQuery.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getQuery()).length > 0 && t.writeString(1, o),
					(o = e.getKeyColumnsList()).length > 0 && t.writeRepeatedString(2, o),
					(o = e.getDatabase()).length > 0 && t.writeString(3, o),
					(o = e.getSchema()).length > 0 && t.writeString(4, o),
					(o = e.getWarehouse()).length > 0 && t.writeString(5, o),
					null != (o = e.getFormula()) && t.writeMessage(6, o, proto.coda.SyncFormula.serializeBinaryToWriter)
			}
			,
			proto.coda.SqlQuery.prototype.getQuery = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.SqlQuery.prototype.setQuery = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			proto.coda.SqlQuery.prototype.getKeyColumnsList = function() {
					return r.Message.getRepeatedField(this, 2)
			}
			,
			proto.coda.SqlQuery.prototype.setKeyColumnsList = function(e) {
					return r.Message.setField(this, 2, e || [])
			}
			,
			proto.coda.SqlQuery.prototype.addKeyColumns = function(e, t) {
					return r.Message.addToRepeatedField(this, 2, e, t)
			}
			,
			proto.coda.SqlQuery.prototype.clearKeyColumnsList = function() {
					return this.setKeyColumnsList([])
			}
			,
			proto.coda.SqlQuery.prototype.getDatabase = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.SqlQuery.prototype.setDatabase = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.SqlQuery.prototype.getSchema = function() {
					return r.Message.getFieldWithDefault(this, 4, "")
			}
			,
			proto.coda.SqlQuery.prototype.setSchema = function(e) {
					return r.Message.setProto3StringField(this, 4, e)
			}
			,
			proto.coda.SqlQuery.prototype.getWarehouse = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.SqlQuery.prototype.setWarehouse = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.SqlQuery.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 6)
			}
			,
			proto.coda.SqlQuery.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 6, e)
			}
			,
			proto.coda.SqlQuery.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.SqlQuery.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 6)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeSqlQueryRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeSqlQueryRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeSqlQueryRequest.toObject = function(e, t) {
					var o, a = {
							query: (o = t.getQuery()) && proto.coda.SqlQuery.toObject(e, o),
							connection: (o = t.getConnection()) && proto.coda.Connection.toObject(e, o),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							source: r.Message.getFieldWithDefault(t, 4, 0),
							rowLimit: r.Message.getFieldWithDefault(t, 6, 0),
							gridServerIdentifier: r.Message.getFieldWithDefault(t, 7, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeSqlQueryRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeSqlQueryRequest;
					return proto.coda.InvokeSqlQueryRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeSqlQueryRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SqlQuery;
									t.readMessage(o, proto.coda.SqlQuery.deserializeBinaryFromReader),
									e.setQuery(o);
									break;
							case 2:
									o = new proto.coda.Connection;
									t.readMessage(o, proto.coda.Connection.deserializeBinaryFromReader),
									e.setConnection(o);
									break;
							case 3:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 4:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 6:
									o = t.readUint32();
									e.setRowLimit(o);
									break;
							case 7:
									o = t.readString();
									e.setGridServerIdentifier(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeSqlQueryRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeSqlQueryRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getQuery()) && t.writeMessage(1, o, proto.coda.SqlQuery.serializeBinaryToWriter),
					null != (o = e.getConnection()) && t.writeMessage(2, o, proto.coda.Connection.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(3, o, proto.coda.Context.serializeBinaryToWriter),
					0 !== (o = e.getSource()) && t.writeEnum(4, o),
					0 !== (o = e.getRowLimit()) && t.writeUint32(6, o),
					(o = e.getGridServerIdentifier()).length > 0 && t.writeString(7, o)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.getQuery = function() {
					return r.Message.getWrapperField(this, proto.coda.SqlQuery, 1)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.setQuery = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.clearQuery = function() {
					return this.setQuery(void 0)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.hasQuery = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.getConnection = function() {
					return r.Message.getWrapperField(this, proto.coda.Connection, 2)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.setConnection = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.clearConnection = function() {
					return this.setConnection(void 0)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.hasConnection = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 3)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 4, 0)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 4, e)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.getRowLimit = function() {
					return r.Message.getFieldWithDefault(this, 6, 0)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.setRowLimit = function(e) {
					return r.Message.setProto3IntField(this, 6, e)
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.getGridServerIdentifier = function() {
					return r.Message.getFieldWithDefault(this, 7, "")
			}
			,
			proto.coda.InvokeSqlQueryRequest.prototype.setGridServerIdentifier = function(e) {
					return r.Message.setProto3StringField(this, 7, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.toObject = function(e) {
					return proto.coda.ImpersonateInvokeSqlQueryRequest.toObject(e, this)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.toObject = function(e, t) {
					var o, a = {
							userId: r.Message.getFieldWithDefault(t, 1, 0),
							request: (o = t.getRequest()) && proto.coda.InvokeSqlQueryRequest.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ImpersonateInvokeSqlQueryRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ImpersonateInvokeSqlQueryRequest;
					return proto.coda.ImpersonateInvokeSqlQueryRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readInt64();
									e.setUserId(o);
									break;
							case 2:
									o = new proto.coda.InvokeSqlQueryRequest;
									t.readMessage(o, proto.coda.InvokeSqlQueryRequest.deserializeBinaryFromReader),
									e.setRequest(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ImpersonateInvokeSqlQueryRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getUserId()) && t.writeInt64(1, o),
					null != (o = e.getRequest()) && t.writeMessage(2, o, proto.coda.InvokeSqlQueryRequest.serializeBinaryToWriter)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.getUserId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.setUserId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.getRequest = function() {
					return r.Message.getWrapperField(this, proto.coda.InvokeSqlQueryRequest, 2)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.setRequest = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.clearRequest = function() {
					return this.setRequest(void 0)
			}
			,
			proto.coda.ImpersonateInvokeSqlQueryRequest.prototype.hasRequest = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.QueryProgressResult.prototype.toObject = function(e) {
					return proto.coda.QueryProgressResult.toObject(e, this)
			}
			,
			proto.coda.QueryProgressResult.toObject = function(e, t) {
					var o = {
							processedRowCount: r.Message.getFieldWithDefault(t, 1, 0)
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.QueryProgressResult.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.QueryProgressResult;
					return proto.coda.QueryProgressResult.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.QueryProgressResult.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = t.readUint32();
									e.setProcessedRowCount(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.QueryProgressResult.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.QueryProgressResult.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.QueryProgressResult.serializeBinaryToWriter = function(e, t) {
					var o;
					0 !== (o = e.getProcessedRowCount()) && t.writeUint32(1, o)
			}
			,
			proto.coda.QueryProgressResult.prototype.getProcessedRowCount = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.QueryProgressResult.prototype.setProcessedRowCount = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.QueryCompleteResult.prototype.toObject = function(e) {
					return proto.coda.QueryCompleteResult.toObject(e, this)
			}
			,
			proto.coda.QueryCompleteResult.toObject = function(e, t) {
					var o, a = {
							rowCount: r.Message.getFieldWithDefault(t, 1, 0),
							metadata: (o = t.getMetadata()) && proto.coda.SqlQueryMetadata.toObject(e, o),
							queryShardUrl: r.Message.getFieldWithDefault(t, 3, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.QueryCompleteResult.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.QueryCompleteResult;
					return proto.coda.QueryCompleteResult.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.QueryCompleteResult.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readUint32();
									e.setRowCount(o);
									break;
							case 2:
									o = new proto.coda.SqlQueryMetadata;
									t.readMessage(o, proto.coda.SqlQueryMetadata.deserializeBinaryFromReader),
									e.setMetadata(o);
									break;
							case 3:
									o = t.readString();
									e.setQueryShardUrl(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.QueryCompleteResult.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.QueryCompleteResult.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.QueryCompleteResult.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getRowCount()) && t.writeUint32(1, o),
					null != (o = e.getMetadata()) && t.writeMessage(2, o, proto.coda.SqlQueryMetadata.serializeBinaryToWriter),
					(o = e.getQueryShardUrl()).length > 0 && t.writeString(3, o)
			}
			,
			proto.coda.QueryCompleteResult.prototype.getRowCount = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.QueryCompleteResult.prototype.setRowCount = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.QueryCompleteResult.prototype.getMetadata = function() {
					return r.Message.getWrapperField(this, proto.coda.SqlQueryMetadata, 2)
			}
			,
			proto.coda.QueryCompleteResult.prototype.setMetadata = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.QueryCompleteResult.prototype.clearMetadata = function() {
					return this.setMetadata(void 0)
			}
			,
			proto.coda.QueryCompleteResult.prototype.hasMetadata = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.QueryCompleteResult.prototype.getQueryShardUrl = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.QueryCompleteResult.prototype.setQueryShardUrl = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			proto.coda.InvokeQueryResponse.oneofGroups_ = [[2, 3, 4]],
			proto.coda.InvokeQueryResponse.ResultCase = {
					RESULT_NOT_SET: 0,
					PROGRESS: 2,
					COMPLETE: 3,
					ERROR: 4
			},
			proto.coda.InvokeQueryResponse.prototype.getResultCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.InvokeQueryResponse.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeQueryResponse.prototype.toObject = function(e) {
					return proto.coda.InvokeQueryResponse.toObject(e, this)
			}
			,
			proto.coda.InvokeQueryResponse.toObject = function(e, t) {
					var o, r = {
							progress: (o = t.getProgress()) && proto.coda.QueryProgressResult.toObject(e, o),
							complete: (o = t.getComplete()) && proto.coda.QueryCompleteResult.toObject(e, o),
							error: (o = t.getError()) && proto.coda.ExecutionError.toObject(e, o)
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.InvokeQueryResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeQueryResponse;
					return proto.coda.InvokeQueryResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeQueryResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 2:
									var o = new proto.coda.QueryProgressResult;
									t.readMessage(o, proto.coda.QueryProgressResult.deserializeBinaryFromReader),
									e.setProgress(o);
									break;
							case 3:
									o = new proto.coda.QueryCompleteResult;
									t.readMessage(o, proto.coda.QueryCompleteResult.deserializeBinaryFromReader),
									e.setComplete(o);
									break;
							case 4:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setError(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeQueryResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeQueryResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeQueryResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getProgress()) && t.writeMessage(2, o, proto.coda.QueryProgressResult.serializeBinaryToWriter),
					null != (o = e.getComplete()) && t.writeMessage(3, o, proto.coda.QueryCompleteResult.serializeBinaryToWriter),
					null != (o = e.getError()) && t.writeMessage(4, o, proto.coda.ExecutionError.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.getProgress = function() {
					return r.Message.getWrapperField(this, proto.coda.QueryProgressResult, 2)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.setProgress = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.InvokeQueryResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.clearProgress = function() {
					return this.setProgress(void 0)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.hasProgress = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.getComplete = function() {
					return r.Message.getWrapperField(this, proto.coda.QueryCompleteResult, 3)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.setComplete = function(e) {
					return r.Message.setOneofWrapperField(this, 3, proto.coda.InvokeQueryResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.clearComplete = function() {
					return this.setComplete(void 0)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.hasComplete = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.getError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 4)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.setError = function(e) {
					return r.Message.setOneofWrapperField(this, 4, proto.coda.InvokeQueryResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.clearError = function() {
					return this.setError(void 0)
			}
			,
			proto.coda.InvokeQueryResponse.prototype.hasError = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SqlQueryColumn.prototype.toObject = function(e) {
					return proto.coda.SqlQueryColumn.toObject(e, this)
			}
			,
			proto.coda.SqlQueryColumn.toObject = function(e, t) {
					var o = {
							name: r.Message.getFieldWithDefault(t, 1, ""),
							type: r.Message.getFieldWithDefault(t, 2, ""),
							nullable: r.Message.getBooleanFieldWithDefault(t, 3, !1),
							scale: r.Message.getFieldWithDefault(t, 4, 0)
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.SqlQueryColumn.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SqlQueryColumn;
					return proto.coda.SqlQueryColumn.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SqlQueryColumn.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setName(o);
									break;
							case 2:
									o = t.readString();
									e.setType(o);
									break;
							case 3:
									o = t.readBool();
									e.setNullable(o);
									break;
							case 4:
									o = t.readUint32();
									e.setScale(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.SqlQueryColumn.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SqlQueryColumn.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SqlQueryColumn.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getName()).length > 0 && t.writeString(1, o),
					(o = e.getType()).length > 0 && t.writeString(2, o),
					(o = e.getNullable()) && t.writeBool(3, o),
					0 !== (o = e.getScale()) && t.writeUint32(4, o)
			}
			,
			proto.coda.SqlQueryColumn.prototype.getName = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.SqlQueryColumn.prototype.setName = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			proto.coda.SqlQueryColumn.prototype.getType = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.SqlQueryColumn.prototype.setType = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.SqlQueryColumn.prototype.getNullable = function() {
					return r.Message.getBooleanFieldWithDefault(this, 3, !1)
			}
			,
			proto.coda.SqlQueryColumn.prototype.setNullable = function(e) {
					return r.Message.setProto3BooleanField(this, 3, e)
			}
			,
			proto.coda.SqlQueryColumn.prototype.getScale = function() {
					return r.Message.getFieldWithDefault(this, 4, 0)
			}
			,
			proto.coda.SqlQueryColumn.prototype.setScale = function(e) {
					return r.Message.setProto3IntField(this, 4, e)
			}
			,
			proto.coda.SqlQueryMetadata.repeatedFields_ = [1],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.SqlQueryMetadata.prototype.toObject = function(e) {
					return proto.coda.SqlQueryMetadata.toObject(e, this)
			}
			,
			proto.coda.SqlQueryMetadata.toObject = function(e, t) {
					var o = {
							columnsList: r.Message.toObjectList(t.getColumnsList(), proto.coda.SqlQueryColumn.toObject, e),
							queryid: r.Message.getFieldWithDefault(t, 2, ""),
							queryprofilelink: r.Message.getFieldWithDefault(t, 3, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.SqlQueryMetadata.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.SqlQueryMetadata;
					return proto.coda.SqlQueryMetadata.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.SqlQueryMetadata.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SqlQueryColumn;
									t.readMessage(o, proto.coda.SqlQueryColumn.deserializeBinaryFromReader),
									e.addColumns(o);
									break;
							case 2:
									o = t.readString();
									e.setQueryid(o);
									break;
							case 3:
									o = t.readString();
									e.setQueryprofilelink(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.SqlQueryMetadata.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.SqlQueryMetadata.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.SqlQueryMetadata.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getColumnsList()).length > 0 && t.writeRepeatedMessage(1, o, proto.coda.SqlQueryColumn.serializeBinaryToWriter),
					(o = e.getQueryid()).length > 0 && t.writeString(2, o),
					(o = e.getQueryprofilelink()).length > 0 && t.writeString(3, o)
			}
			,
			proto.coda.SqlQueryMetadata.prototype.getColumnsList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.SqlQueryColumn, 1)
			}
			,
			proto.coda.SqlQueryMetadata.prototype.setColumnsList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 1, e)
			}
			,
			proto.coda.SqlQueryMetadata.prototype.addColumns = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 1, e, proto.coda.SqlQueryColumn, t)
			}
			,
			proto.coda.SqlQueryMetadata.prototype.clearColumnsList = function() {
					return this.setColumnsList([])
			}
			,
			proto.coda.SqlQueryMetadata.prototype.getQueryid = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.SqlQueryMetadata.prototype.setQueryid = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.SqlQueryMetadata.prototype.getQueryprofilelink = function() {
					return r.Message.getFieldWithDefault(this, 3, "")
			}
			,
			proto.coda.SqlQueryMetadata.prototype.setQueryprofilelink = function(e) {
					return r.Message.setProto3StringField(this, 3, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.BrainQuery.prototype.toObject = function(e) {
					return proto.coda.BrainQuery.toObject(e, this)
			}
			,
			proto.coda.BrainQuery.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							syncConnectionType: r.Message.getFieldWithDefault(t, 2, ""),
							syncFiltersBindings: r.Message.getFieldWithDefault(t, 5, "")
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.BrainQuery.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.BrainQuery;
					return proto.coda.BrainQuery.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.BrainQuery.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = t.readString();
									e.setSyncConnectionType(o);
									break;
							case 5:
									o = t.readString();
									e.setSyncFiltersBindings(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.BrainQuery.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.BrainQuery.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.BrainQuery.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getSyncConnectionType()).length > 0 && t.writeString(2, o),
					(o = e.getSyncFiltersBindings()).length > 0 && t.writeString(5, o)
			}
			,
			proto.coda.BrainQuery.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.BrainQuery.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.BrainQuery.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.BrainQuery.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.BrainQuery.prototype.getSyncConnectionType = function() {
					return r.Message.getFieldWithDefault(this, 2, "")
			}
			,
			proto.coda.BrainQuery.prototype.setSyncConnectionType = function(e) {
					return r.Message.setProto3StringField(this, 2, e)
			}
			,
			proto.coda.BrainQuery.prototype.getSyncFiltersBindings = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.BrainQuery.prototype.setSyncFiltersBindings = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeBrainQueryRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeBrainQueryRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeBrainQueryRequest.toObject = function(e, t) {
					var o, a = {
							query: (o = t.getQuery()) && proto.coda.BrainQuery.toObject(e, o),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							gridServerIdentifier: r.Message.getFieldWithDefault(t, 5, ""),
							source: r.Message.getFieldWithDefault(t, 4, 0),
							rowLimit: r.Message.getFieldWithDefault(t, 6, 0)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeBrainQueryRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeBrainQueryRequest;
					return proto.coda.InvokeBrainQueryRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeBrainQueryRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.BrainQuery;
									t.readMessage(o, proto.coda.BrainQuery.deserializeBinaryFromReader),
									e.setQuery(o);
									break;
							case 3:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 5:
									o = t.readString();
									e.setGridServerIdentifier(o);
									break;
							case 4:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 6:
									o = t.readUint32();
									e.setRowLimit(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeBrainQueryRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeBrainQueryRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getQuery()) && t.writeMessage(1, o, proto.coda.BrainQuery.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(3, o, proto.coda.Context.serializeBinaryToWriter),
					(o = e.getGridServerIdentifier()).length > 0 && t.writeString(5, o),
					0 !== (o = e.getSource()) && t.writeEnum(4, o),
					0 !== (o = e.getRowLimit()) && t.writeUint32(6, o)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.getQuery = function() {
					return r.Message.getWrapperField(this, proto.coda.BrainQuery, 1)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.setQuery = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.clearQuery = function() {
					return this.setQuery(void 0)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.hasQuery = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 3)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.getGridServerIdentifier = function() {
					return r.Message.getFieldWithDefault(this, 5, "")
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.setGridServerIdentifier = function(e) {
					return r.Message.setProto3StringField(this, 5, e)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 4, 0)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 4, e)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.getRowLimit = function() {
					return r.Message.getFieldWithDefault(this, 6, 0)
			}
			,
			proto.coda.InvokeBrainQueryRequest.prototype.setRowLimit = function(e) {
					return r.Message.setProto3IntField(this, 6, e)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.toObject = function(e) {
					return proto.coda.ImpersonateInvokeBrainQueryRequest.toObject(e, this)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.toObject = function(e, t) {
					var o, a = {
							userId: r.Message.getFieldWithDefault(t, 1, 0),
							request: (o = t.getRequest()) && proto.coda.InvokeBrainQueryRequest.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.ImpersonateInvokeBrainQueryRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ImpersonateInvokeBrainQueryRequest;
					return proto.coda.ImpersonateInvokeBrainQueryRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readInt64();
									e.setUserId(o);
									break;
							case 2:
									o = new proto.coda.InvokeBrainQueryRequest;
									t.readMessage(o, proto.coda.InvokeBrainQueryRequest.deserializeBinaryFromReader),
									e.setRequest(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ImpersonateInvokeBrainQueryRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					0 !== (o = e.getUserId()) && t.writeInt64(1, o),
					null != (o = e.getRequest()) && t.writeMessage(2, o, proto.coda.InvokeBrainQueryRequest.serializeBinaryToWriter)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.getUserId = function() {
					return r.Message.getFieldWithDefault(this, 1, 0)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.setUserId = function(e) {
					return r.Message.setProto3IntField(this, 1, e)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.getRequest = function() {
					return r.Message.getWrapperField(this, proto.coda.InvokeBrainQueryRequest, 2)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.setRequest = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.clearRequest = function() {
					return this.setRequest(void 0)
			}
			,
			proto.coda.ImpersonateInvokeBrainQueryRequest.prototype.hasRequest = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ExecuteGetPermissionsRequestRow.prototype.toObject = function(e) {
					return proto.coda.ExecuteGetPermissionsRequestRow.toObject(e, this)
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.toObject = function(e, t) {
					var o, r = {
							row: (o = t.getRow()) && proto.coda.ResultValue.toObject(e, o)
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.ExecuteGetPermissionsRequestRow.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ExecuteGetPermissionsRequestRow;
					return proto.coda.ExecuteGetPermissionsRequestRow.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = new proto.coda.ResultValue;
									t.readMessage(o, proto.coda.ResultValue.deserializeBinaryFromReader),
									e.setRow(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ExecuteGetPermissionsRequestRow.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.serializeBinaryToWriter = function(e, t) {
					var o;
					null != (o = e.getRow()) && t.writeMessage(1, o, proto.coda.ResultValue.serializeBinaryToWriter)
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.prototype.getRow = function() {
					return r.Message.getWrapperField(this, proto.coda.ResultValue, 1)
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.prototype.setRow = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.prototype.clearRow = function() {
					return this.setRow(void 0)
			}
			,
			proto.coda.ExecuteGetPermissionsRequestRow.prototype.hasRow = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.PermissionsContext.prototype.toObject = function(e) {
					return proto.coda.PermissionsContext.toObject(e, this)
			}
			,
			proto.coda.PermissionsContext.toObject = function(e, t) {
					var o = {
							objectVal: r.Message.getFieldWithDefault(t, 1, "")
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.PermissionsContext.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.PermissionsContext;
					return proto.coda.PermissionsContext.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.PermissionsContext.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							if (1 === t.getFieldNumber()) {
									var o = t.readString();
									e.setObjectVal(o)
							} else
									t.skipField()
					}
					return e
			}
			,
			proto.coda.PermissionsContext.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.PermissionsContext.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.PermissionsContext.serializeBinaryToWriter = function(e, t) {
					var o;
					(o = e.getObjectVal()).length > 0 && t.writeString(1, o)
			}
			,
			proto.coda.PermissionsContext.prototype.getObjectVal = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.PermissionsContext.prototype.setObjectVal = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.repeatedFields_ = [1, 2],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.ExecuteGetPermissionsRequest.prototype.toObject = function(e) {
					return proto.coda.ExecuteGetPermissionsRequest.toObject(e, this)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.toObject = function(e, t) {
					var o = {
							rowsList: r.Message.toObjectList(t.getRowsList(), proto.coda.ExecuteGetPermissionsRequestRow.toObject, e),
							permissionsContextList: r.Message.toObjectList(t.getPermissionsContextList(), proto.coda.PermissionsContext.toObject, e)
					};
					return e && (o.$jspbMessageInstance = t),
					o
			}
			),
			proto.coda.ExecuteGetPermissionsRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.ExecuteGetPermissionsRequest;
					return proto.coda.ExecuteGetPermissionsRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.ExecuteGetPermissionsRequestRow;
									t.readMessage(o, proto.coda.ExecuteGetPermissionsRequestRow.deserializeBinaryFromReader),
									e.addRows(o);
									break;
							case 2:
									o = new proto.coda.PermissionsContext;
									t.readMessage(o, proto.coda.PermissionsContext.deserializeBinaryFromReader),
									e.addPermissionsContext(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.ExecuteGetPermissionsRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getRowsList()).length > 0 && t.writeRepeatedMessage(1, o, proto.coda.ExecuteGetPermissionsRequestRow.serializeBinaryToWriter),
					(o = e.getPermissionsContextList()).length > 0 && t.writeRepeatedMessage(2, o, proto.coda.PermissionsContext.serializeBinaryToWriter)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.getRowsList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.ExecuteGetPermissionsRequestRow, 1)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.setRowsList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 1, e)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.addRows = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 1, e, proto.coda.ExecuteGetPermissionsRequestRow, t)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.clearRowsList = function() {
					return this.setRowsList([])
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.getPermissionsContextList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.PermissionsContext, 2)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.setPermissionsContextList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 2, e)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.addPermissionsContext = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 2, e, proto.coda.PermissionsContext, t)
			}
			,
			proto.coda.ExecuteGetPermissionsRequest.prototype.clearPermissionsContextList = function() {
					return this.setPermissionsContextList([])
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.repeatedFields_ = [2],
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeExecuteGetPermissionsRequest.prototype.toObject = function(e) {
					return proto.coda.InvokeExecuteGetPermissionsRequest.toObject(e, this)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.toObject = function(e, t) {
					var o, a = {
							formula: (o = t.getFormula()) && proto.coda.SyncFormula.toObject(e, o),
							paramsList: r.Message.toObjectList(t.getParamsList(), proto.coda.Value.toObject, e),
							request: (o = t.getRequest()) && proto.coda.ExecuteGetPermissionsRequest.toObject(e, o),
							connection: (o = t.getConnection()) && proto.coda.Connection.toObject(e, o),
							context: (o = t.getContext()) && proto.coda.Context.toObject(e, o),
							schema: r.Message.getFieldWithDefault(t, 6, ""),
							dynamicUrl: r.Message.getFieldWithDefault(t, 7, ""),
							source: r.Message.getFieldWithDefault(t, 8, 0),
							previousAttemptError: (o = t.getPreviousAttemptError()) && proto.coda.ExecutionError.toObject(e, o),
							continuation: (o = t.getContinuation()) && proto.coda.ContinuationToken.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.InvokeExecuteGetPermissionsRequest.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeExecuteGetPermissionsRequest;
					return proto.coda.InvokeExecuteGetPermissionsRequest.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.SyncFormula;
									t.readMessage(o, proto.coda.SyncFormula.deserializeBinaryFromReader),
									e.setFormula(o);
									break;
							case 2:
									o = new proto.coda.Value;
									t.readMessage(o, proto.coda.Value.deserializeBinaryFromReader),
									e.addParams(o);
									break;
							case 3:
									o = new proto.coda.ExecuteGetPermissionsRequest;
									t.readMessage(o, proto.coda.ExecuteGetPermissionsRequest.deserializeBinaryFromReader),
									e.setRequest(o);
									break;
							case 4:
									o = new proto.coda.Connection;
									t.readMessage(o, proto.coda.Connection.deserializeBinaryFromReader),
									e.setConnection(o);
									break;
							case 5:
									o = new proto.coda.Context;
									t.readMessage(o, proto.coda.Context.deserializeBinaryFromReader),
									e.setContext(o);
									break;
							case 6:
									o = t.readString();
									e.setSchema(o);
									break;
							case 7:
									o = t.readString();
									e.setDynamicUrl(o);
									break;
							case 8:
									o = t.readEnum();
									e.setSource(o);
									break;
							case 9:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setPreviousAttemptError(o);
									break;
							case 10:
									o = new proto.coda.ContinuationToken;
									t.readMessage(o, proto.coda.ContinuationToken.deserializeBinaryFromReader),
									e.setContinuation(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeExecuteGetPermissionsRequest.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getFormula()) && t.writeMessage(1, o, proto.coda.SyncFormula.serializeBinaryToWriter),
					(o = e.getParamsList()).length > 0 && t.writeRepeatedMessage(2, o, proto.coda.Value.serializeBinaryToWriter),
					null != (o = e.getRequest()) && t.writeMessage(3, o, proto.coda.ExecuteGetPermissionsRequest.serializeBinaryToWriter),
					null != (o = e.getConnection()) && t.writeMessage(4, o, proto.coda.Connection.serializeBinaryToWriter),
					null != (o = e.getContext()) && t.writeMessage(5, o, proto.coda.Context.serializeBinaryToWriter),
					(o = e.getSchema()).length > 0 && t.writeString(6, o),
					(o = e.getDynamicUrl()).length > 0 && t.writeString(7, o),
					0 !== (o = e.getSource()) && t.writeEnum(8, o),
					null != (o = e.getPreviousAttemptError()) && t.writeMessage(9, o, proto.coda.ExecutionError.serializeBinaryToWriter),
					null != (o = e.getContinuation()) && t.writeMessage(10, o, proto.coda.ContinuationToken.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getFormula = function() {
					return r.Message.getWrapperField(this, proto.coda.SyncFormula, 1)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setFormula = function(e) {
					return r.Message.setWrapperField(this, 1, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearFormula = function() {
					return this.setFormula(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.hasFormula = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getParamsList = function() {
					return r.Message.getRepeatedWrapperField(this, proto.coda.Value, 2)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setParamsList = function(e) {
					return r.Message.setRepeatedWrapperField(this, 2, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.addParams = function(e, t) {
					return r.Message.addToRepeatedWrapperField(this, 2, e, proto.coda.Value, t)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearParamsList = function() {
					return this.setParamsList([])
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getRequest = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecuteGetPermissionsRequest, 3)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setRequest = function(e) {
					return r.Message.setWrapperField(this, 3, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearRequest = function() {
					return this.setRequest(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.hasRequest = function() {
					return null != r.Message.getField(this, 3)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getConnection = function() {
					return r.Message.getWrapperField(this, proto.coda.Connection, 4)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setConnection = function(e) {
					return r.Message.setWrapperField(this, 4, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearConnection = function() {
					return this.setConnection(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.hasConnection = function() {
					return null != r.Message.getField(this, 4)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getContext = function() {
					return r.Message.getWrapperField(this, proto.coda.Context, 5)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setContext = function(e) {
					return r.Message.setWrapperField(this, 5, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearContext = function() {
					return this.setContext(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.hasContext = function() {
					return null != r.Message.getField(this, 5)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getSchema = function() {
					return r.Message.getFieldWithDefault(this, 6, "")
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setSchema = function(e) {
					return r.Message.setProto3StringField(this, 6, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getDynamicUrl = function() {
					return r.Message.getFieldWithDefault(this, 7, "")
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setDynamicUrl = function(e) {
					return r.Message.setProto3StringField(this, 7, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getSource = function() {
					return r.Message.getFieldWithDefault(this, 8, 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setSource = function(e) {
					return r.Message.setProto3EnumField(this, 8, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getPreviousAttemptError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 9)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setPreviousAttemptError = function(e) {
					return r.Message.setWrapperField(this, 9, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearPreviousAttemptError = function() {
					return this.setPreviousAttemptError(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.hasPreviousAttemptError = function() {
					return null != r.Message.getField(this, 9)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.getContinuation = function() {
					return r.Message.getWrapperField(this, proto.coda.ContinuationToken, 10)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.setContinuation = function(e) {
					return r.Message.setWrapperField(this, 10, e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.clearContinuation = function() {
					return this.setContinuation(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsRequest.prototype.hasContinuation = function() {
					return null != r.Message.getField(this, 10)
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.GetPermissionsResponse.prototype.toObject = function(e) {
					return proto.coda.GetPermissionsResponse.toObject(e, this)
			}
			,
			proto.coda.GetPermissionsResponse.toObject = function(e, t) {
					var o, a = {
							responseObj: r.Message.getFieldWithDefault(t, 1, ""),
							continuation: (o = t.getContinuation()) && proto.coda.ContinuationToken.toObject(e, o)
					};
					return e && (a.$jspbMessageInstance = t),
					a
			}
			),
			proto.coda.GetPermissionsResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.GetPermissionsResponse;
					return proto.coda.GetPermissionsResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.GetPermissionsResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = t.readString();
									e.setResponseObj(o);
									break;
							case 2:
									o = new proto.coda.ContinuationToken;
									t.readMessage(o, proto.coda.ContinuationToken.deserializeBinaryFromReader),
									e.setContinuation(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.GetPermissionsResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.GetPermissionsResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.GetPermissionsResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					(o = e.getResponseObj()).length > 0 && t.writeString(1, o),
					null != (o = e.getContinuation()) && t.writeMessage(2, o, proto.coda.ContinuationToken.serializeBinaryToWriter)
			}
			,
			proto.coda.GetPermissionsResponse.prototype.getResponseObj = function() {
					return r.Message.getFieldWithDefault(this, 1, "")
			}
			,
			proto.coda.GetPermissionsResponse.prototype.setResponseObj = function(e) {
					return r.Message.setProto3StringField(this, 1, e)
			}
			,
			proto.coda.GetPermissionsResponse.prototype.getContinuation = function() {
					return r.Message.getWrapperField(this, proto.coda.ContinuationToken, 2)
			}
			,
			proto.coda.GetPermissionsResponse.prototype.setContinuation = function(e) {
					return r.Message.setWrapperField(this, 2, e)
			}
			,
			proto.coda.GetPermissionsResponse.prototype.clearContinuation = function() {
					return this.setContinuation(void 0)
			}
			,
			proto.coda.GetPermissionsResponse.prototype.hasContinuation = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.oneofGroups_ = [[1, 2]],
			proto.coda.InvokeExecuteGetPermissionsResponse.ResultCase = {
					RESULT_NOT_SET: 0,
					VALUE: 1,
					ERROR: 2
			},
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.getResultCase = function() {
					return r.Message.computeOneofCase(this, proto.coda.InvokeExecuteGetPermissionsResponse.oneofGroups_[0])
			}
			,
			r.Message.GENERATE_TO_OBJECT && (proto.coda.InvokeExecuteGetPermissionsResponse.prototype.toObject = function(e) {
					return proto.coda.InvokeExecuteGetPermissionsResponse.toObject(e, this)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.toObject = function(e, t) {
					var o, r = {
							value: (o = t.getValue()) && proto.coda.GetPermissionsResponse.toObject(e, o),
							error: (o = t.getError()) && proto.coda.ExecutionError.toObject(e, o)
					};
					return e && (r.$jspbMessageInstance = t),
					r
			}
			),
			proto.coda.InvokeExecuteGetPermissionsResponse.deserializeBinary = function(e) {
					var t = new r.BinaryReader(e)
						, o = new proto.coda.InvokeExecuteGetPermissionsResponse;
					return proto.coda.InvokeExecuteGetPermissionsResponse.deserializeBinaryFromReader(o, t)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.deserializeBinaryFromReader = function(e, t) {
					for (; t.nextField() && !t.isEndGroup(); ) {
							switch (t.getFieldNumber()) {
							case 1:
									var o = new proto.coda.GetPermissionsResponse;
									t.readMessage(o, proto.coda.GetPermissionsResponse.deserializeBinaryFromReader),
									e.setValue(o);
									break;
							case 2:
									o = new proto.coda.ExecutionError;
									t.readMessage(o, proto.coda.ExecutionError.deserializeBinaryFromReader),
									e.setError(o);
									break;
							default:
									t.skipField()
							}
					}
					return e
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.serializeBinary = function() {
					var e = new r.BinaryWriter;
					return proto.coda.InvokeExecuteGetPermissionsResponse.serializeBinaryToWriter(this, e),
					e.getResultBuffer()
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.serializeBinaryToWriter = function(e, t) {
					var o = void 0;
					null != (o = e.getValue()) && t.writeMessage(1, o, proto.coda.GetPermissionsResponse.serializeBinaryToWriter),
					null != (o = e.getError()) && t.writeMessage(2, o, proto.coda.ExecutionError.serializeBinaryToWriter)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.getValue = function() {
					return r.Message.getWrapperField(this, proto.coda.GetPermissionsResponse, 1)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.setValue = function(e) {
					return r.Message.setOneofWrapperField(this, 1, proto.coda.InvokeExecuteGetPermissionsResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.clearValue = function() {
					return this.setValue(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.hasValue = function() {
					return null != r.Message.getField(this, 1)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.getError = function() {
					return r.Message.getWrapperField(this, proto.coda.ExecutionError, 2)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.setError = function(e) {
					return r.Message.setOneofWrapperField(this, 2, proto.coda.InvokeExecuteGetPermissionsResponse.oneofGroups_[0], e)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.clearError = function() {
					return this.setError(void 0)
			}
			,
			proto.coda.InvokeExecuteGetPermissionsResponse.prototype.hasError = function() {
					return null != r.Message.getField(this, 2)
			}
			,
			proto.coda.CalcServiceContextType = {
					DOC: 0,
					CSB_INGESTION: 1,
					NATIVE_INTEGRATION: 2,
					CONNECTION_SETUP: 3,
					CODA_BRAIN: 4,
					AGENT_RUNTIME: 5
			},
			proto.coda.PublishMode = {
					NONE: 0,
					VIEW: 1,
					PLAY: 2,
					EDIT: 3
			},
			proto.coda.InvocationSource = {
					UNKNOWN_SOURCE: 0,
					AUTOMATIONS: 1,
					INTEGRATIONS: 2,
					SNAPSHOTS: 3,
					BROWSER: 4,
					PROBER: 5,
					FRONTEND_SERVER: 6,
					OTHER_WORKFLOW: 7,
					INTEGRATION_TEST: 8,
					LOAD_TEST: 9,
					PROCESS_API_WORKFLOW: 10,
					IMPORT_WORKFLOW: 11,
					CSB_INGESTION_WORKFLOW: 12,
					NON_BLOCKING_REFRESH: 13,
					PROCESS_IMMEDIATE_RULE_EXECUTION_WORKFLOW: 14,
					BROWSER_CSB: 15,
					PERIODIC_EXTERNALLY_BACKED_GRID_SWEEPER: 16,
					VALIDATE_PACK_PERMISSIONS_WORKFLOW: 17,
					CSB_WEBHOOK_WORKFLOW: 18,
					REST_API: 19,
					SLACK_BRAIN_WEBHOOK: 20,
					BRAIN_ACTION: 21
			},
			proto.coda.PermissionSyncMode = {
					UNKNOWN_PERMISSION_SYNC_MODE: 0,
					PERSONAL: 1,
					PERMISSION_AWARE: 2
			},
			proto.coda.ExecutionErrorType = {
					UNKNOWN: 0,
					CONNECTION_NOT_FOUND: 1,
					CONNECTION_CREDENTIALS_INVALID: 2,
					CONNECTION_PROXY_UNLINKED: 3,
					RATE_LIMIT_EXCEEDED_EXTERNAL: 4,
					RATE_LIMIT_EXCEEDED_INTERNAL: 5,
					EXTERNAL_FORBIDDEN: 6,
					RATE_LIMIT_EXCEEDED_FETCHER: 7,
					EXTERNAL_USER_VISIBLE: 8,
					TIMEOUT_INTERNAL: 9,
					EXTERNAL_NOT_FOUND: 10,
					CONNECTION_FETCH_NOT_ALLOWED: 11,
					CONNECTION_ACTION_NOT_ALLOWED: 12,
					DEPRECATED_MISSING_VALUE_DURING_UPGRADE: 13,
					BAD_PARAMETERS: 14,
					EXTERNAL_STATUS_CODE_ERROR: 15,
					MISSING_VALUE_DURING_CONSISTENCY_OR_UPGRADE: 16,
					RESPONSE_TOO_LARGE: 17,
					QUOTA_EXCEEDED: 18,
					DISABLED_MANUALLY: 19,
					MISSING_OAUTH_SCOPES: 20,
					UNDECLARED_AUTH_DOMAIN: 21,
					INCOMPATIBLE_PACK_AUTH_CHANGES: 22,
					DUPLICATED_FORMULA_REQUEST: 23,
					CONFIGURATION_POLICY_VIOLATION: 24,
					EXTERNAL_UNAVAILABLE: 25,
					AGENT_MISSING_GRANT: 26,
					AGENT_INVALID_GRANT_TOKEN: 27
			},
			a.object.extend(t, proto.coda)
	},
	980338: function(e, t, o) {
			"use strict";
			o.d(t, {
					KV: function() {
							return l
					},
					Lm: function() {
							return d
					},
					mm: function() {
							return p
					},
					wv: function() {
							return u
					}
			});
			var r = o(933764)
				, a = o(99290)
				, n = (o(318967),
			o(862648),
			o(767321),
			o(642333),
			o(283130))
				, s = o(347728)
				, i = (o(162465),
			o(396828));
			function u(e) {
					const t = new r.Value;
					return c(t, e),
					t
			}
			function p(e) {
					const t = e.getTypeCase();
					switch (t) {
					case r.ResultValue.TypeCase.INT64_VAL:
							return e.getInt64Val();
					case r.ResultValue.TypeCase.DOUBLE_VAL:
							return e.getDoubleVal();
					case r.ResultValue.TypeCase.DATE_VAL:
							return (0,
							s.Dv)(i.ne(e.getDateVal()));
					case r.ResultValue.TypeCase.STRING_VAL:
							return e.getStringVal();
					case r.ResultValue.TypeCase.OBJECT_VAL:
							return JSON.parse(e.getObjectVal());
					case r.ResultValue.TypeCase.BOOL_VAL:
							return e.getBoolVal();
					case r.ResultValue.TypeCase.TYPE_NOT_SET:
							throw new Error(`message did not have a valid value: ${JSON.stringify(e.toObject())}`);
					default:
							return (0,
							n.pL)(t)
					}
			}
			function c(e, t) {
					let o = !1;
					if (Array.isArray(t)) {
							if (!(e instanceof r.Value))
									throw new Error("Cannot set arrays for results");
							const a = function(e) {
									if (0 === e.length)
											return "string";
									for (const t of e)
											if (typeof t != typeof e[0])
													return;
									return typeof e[0]
							}(t);
							if (a && "undefined" !== a)
									switch (a) {
									case "string":
											const o = new r.StringArray;
											o.setValueList(t),
											e.setStringArrayVal(o);
											break;
									case "number":
											if (t.every((e => Number.isInteger(e)))) {
													const o = new r.Int64Array;
													o.setValueList(t),
													e.setInt64ArrayVal(o)
											} else {
													const o = new r.DoubleArray;
													o.setValueList(t),
													e.setDoubleArrayVal(o)
											}
											break;
									case "boolean":
											const a = new r.BoolArray;
											a.setValueList(t),
											e.setBoolArrayVal(a);
											break;
									case "object":
											if (!t.every((e => e instanceof Date)))
													throw new Error("Cannot serialize non-Date objects");
											const n = new r.DateArray;
											n.setValueList(t.map((e => e.getTime()))),
											e.setDateArrayVal(n);
											break;
									default:
											throw new Error(`unrecongized parameter value ${t}`)
									}
							else {
									const o = [];
									for (const e of t) {
											const t = new r.SimpleValue;
											if (null == e)
													t.setIsNull(!0);
											else
													switch (typeof e) {
													case "string":
															t.setStringVal(e);
															break;
													case "number":
															Number.isInteger(e) ? t.setInt64Val(e) : t.setDoubleVal(e);
															break;
													case "boolean":
															t.setBoolVal(e);
															break;
													case "object":
															if (!(e instanceof Date))
																	throw new Error("Cannot serialize non-Date objects");
															t.setDateVal(e.getTime());
															break;
													default:
															throw new Error(`unrecongized parameter value ${e}`)
													}
											o.push(t)
									}
									e.setSimpleArrayVal((new r.SimpleValueArray).setValueList(o))
							}
							o = !0
					} else
							"string" == typeof t ? (e.setStringVal(t),
							o = !0) : "number" == typeof t ? (Number.isInteger(t) ? e.setInt64Val(t) : e.setDoubleVal(t),
							o = !0) : "boolean" == typeof t ? (e.setBoolVal(t),
							o = !0) : t instanceof Date ? (e.setDateVal(t.getTime()),
							o = !0) : e instanceof r.Value && !t && (e.setUnspecifiedOptionalVal(!0),
							o = !0);
					if (!o)
							throw new Error("Unsupported value type " + typeof t)
			}
			function l(e) {
					if (!e || "object" != typeof e)
							return !1;
					const t = Object.keys(e);
					if (!t.length)
							return !1;
					const o = new Set(["int64Val", "doubleVal", "dateVal", "stringVal", "objectVal", "boolVal"]);
					for (const e of t)
							if (!o.has(e))
									return !1;
					return !0
			}
			r.PermissionSyncMode.PERSONAL,
			a.PermissionSyncMode.Personal,
			r.PermissionSyncMode.PERMISSION_AWARE,
			a.PermissionSyncMode.PermissionAware,
			r.PermissionSyncMode.UNKNOWN_PERMISSION_SYNC_MODE;
			const d = {
					[a.PermissionSyncMode.Personal]: r.PermissionSyncMode.PERSONAL,
					[a.PermissionSyncMode.PermissionAware]: r.PermissionSyncMode.PERMISSION_AWARE
			}
	},
	171220: function() {},
	338854: function() {}
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/3254.578a8d08ad7572ade397.chunk.js.map
