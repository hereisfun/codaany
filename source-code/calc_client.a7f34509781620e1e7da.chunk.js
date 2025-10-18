(self.webpackChunkCoda = self.webpackChunkCoda || []).push([[6094], {
	819286: function(e, t, n) {
			"use strict";
			n.r(t),
			n.d(t, {
					BrowserCalculationServiceClient: function() {
							return Ve
					}
			});
			var r = n(318225)
				, o = n(765002)
				, a = n(956379)
				, s = n(71419)
				, i = n(862648)
				, c = n(368655)
				, u = n(656975)
				, l = n(353591)
				, d = n(162465)
				, m = n(657757)
				, p = n(43308)
				, h = n(283130)
				, y = n(579008)
				, g = n(642333)
				, S = n(644634)
				, f = n(134371)
				, v = n(886188)
				, I = n(653074)
				, w = n(358839)
				, k = n(565552)
				, b = n(425444)
				, E = n(942725)
				, V = n(962378)
				, C = n(887042)
				, R = n(35449)
				, N = n(154311)
				, T = n(396828)
				, M = n(420184);
			class O extends Error {
			}
			function x(e) {
					if (l.x1(e)) {
							const {type: t} = e;
							switch (t) {
							case l.eV.Array:
							case l.eV.Blank:
							case l.eV.Currency:
							case l.eV.DateTime:
							case l.eV.Duration:
							case l.eV.ImageUrlReference:
							case l.eV.Number:
							case l.eV.Object:
							case l.eV.Percent:
							case l.eV.Reference:
							case l.eV.Slate:
							case l.eV.Time:
							case l.eV.UrlReference:
									return e.type;
							case l.eV.Acl:
							case l.eV.Action:
							case l.eV.Card:
							case l.eV.Color:
							case l.eV.Control:
							case l.eV.Embed:
							case l.eV.FullPageEmbed:
							case l.eV.FullPageEmbedPlaceholder:
							case l.eV.Iterable:
							case l.eV.Location:
							case l.eV.Status:
							case l.eV.Trigger:
							case l.eV.CodaObjectReference:
							case l.eV.DeprecatedRanges:
									return "Unknown";
							default:
									return (0,
									h.pL)(t)
							}
					}
					return Array.isArray(e) ? "Array" : "string" == typeof e ? "String" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : e && "object" == typeof e ? "Object" : "Unknown"
			}
			function F(e) {
					return e ? e.type : i.eV.String
			}
			function P({incomingType: e, packType: t, value: n, context: r, schema: o}) {
					const a = B[e][t]
						, {columnName: s} = r;
					if (!a) {
							throw new O(`No marshaler from ${e} to ${t}${s ? ` for column ${s}` : ""}`)
					}
					return a(n, r, o, s)
			}
			function _(e, t, n, r) {
					return `Cannot convert from ${e} to ${t}${n ? ` for column ${n}` : ""}${r ? `: ${r}` : ""}`
			}
			async function U({incomingType: e, value: t, context: n, schema: r}) {
					const o = r?.items
						, a = F(o);
					return [await P({
							incomingType: e,
							packType: a,
							value: t,
							context: n,
							schema: o
					})]
			}
			const A = {
					[i.eV.Boolean]: async (e, t, n) => {
							if (0 === e.length)
									return "";
							if (1 === e.length) {
									return P({
											incomingType: x(e[0]),
											packType: i.eV.Boolean,
											value: e[0],
											context: t,
											schema: n
									})
							}
							throw new O(t.getMarshalingErrorString("multi-element array", "boolean", t.columnName))
					}
					,
					[i.eV.Number]: async (e, t, n) => {
							if (0 === e.length)
									return "";
							if (1 === e.length) {
									return P({
											incomingType: x(e[0]),
											packType: i.eV.Number,
											value: e[0],
											context: t,
											schema: n
									})
							}
							throw new O(t.getMarshalingErrorString("multi-element array", "number", t.columnName))
					}
					,
					[i.eV.String]: async (e, t, n) => {
							if (0 === e.length)
									return "";
							if (1 === e.length) {
									return P({
											incomingType: x(e[0]),
											packType: i.eV.String,
											value: e[0],
											context: t,
											schema: n
									})
							}
							const r = [];
							for (const o of e) {
									const e = x(o)
										, a = await P({
											incomingType: e,
											packType: i.eV.String,
											value: o,
											context: t,
											schema: n
									});
									"string" == typeof a && a.includes(",") ? r.push(`"${a}"`) : r.push(a)
							}
							return r.join(",")
					}
					,
					[i.eV.Array]: async (e, t, n) => {
							const r = []
								, o = n?.items
								, a = F(o);
							for (const n of e) {
									const e = x(n)
										, s = await P({
											incomingType: e,
											packType: a,
											value: n,
											context: t,
											schema: o
									});
									r.push(s)
							}
							return r
					}
					,
					[i.eV.Object]: async (e, t, n) => {
							if (0 === e.length)
									return "";
							if (1 === e.length) {
									return P({
											incomingType: x(e[0]),
											packType: i.eV.Object,
											value: e[0],
											context: t,
											schema: n
									})
							}
							throw new O(t.getMarshalingErrorString("multi-element array", "object", t.columnName))
					}
			}
				, j = {
					[i.eV.Boolean]: (e, t) => {
							throw new O(t.getMarshalingErrorString("object", "boolean", t.columnName))
					}
					,
					[i.eV.Number]: (e, t) => {
							throw new O(t.getMarshalingErrorString("object", "number", t.columnName))
					}
					,
					[i.eV.String]: async (e, t, n) => {
							const r = {};
							for (const [o,a] of Object.entries(e)) {
									const e = x(a)
										, s = await P({
											incomingType: e,
											packType: i.eV.String,
											value: a,
											context: t,
											schema: n
									});
									r[o] = s
							}
							return JSON.stringify(r)
					}
					,
					[i.eV.Array]: async (e, t, n) => {
							const r = n?.items.type || i.eV.String;
							return [await P({
									incomingType: "Object",
									packType: r,
									value: e,
									context: t,
									schema: n?.items
							})]
					}
					,
					[i.eV.Object]: async (e, t, n) => {
							const r = {};
							for (const [o,a] of Object.entries(e)) {
									const e = x(a)
										, s = n?.properties?.hasOwnProperty(o) ? n.properties[o] : void 0
										, i = F(s)
										, c = await P({
											incomingType: e,
											packType: i,
											value: a,
											context: t,
											schema: s
									});
									r[o] = c
							}
							return r
					}
			};
			async function q(e, t, n) {
					if ((0,
					b.dM)(e) && (0,
					I.zS)(n)) {
							const o = (0,
							C.objectSchemaHelper)(n)
								, {id: a, primary: s} = o
								, {row: i} = N.hd(e, t.document);
							if (a && i) {
									const e = i.getValues([r.O6D.Email, r.O6D.Name])
										, t = {
											[a]: e[r.O6D.Email]
									};
									return s && (t[s] = e[r.O6D.Name]),
									t
							}
					}
					if ((0,
					l.vU)(e)) {
							if (t.packId === s.OW.CodaDoc)
									return {
											publicUrl: t.document.blobManager.getUrlForBlob(e.identifier),
											...e
									};
							if ((0,
							I.lU)(n) || (0,
							I.db)(n)) {
									const {rowId: n} = N.hd(e, t.document);
									if (n)
											return t.document.blobManager.getUrlForBlob(n) || ""
							}
					}
					if ((0,
					l.lv)(e) && (0,
					I.Vi)(n)) {
							if (t.document.session.runtimeConfig.PacksObjectUnwrappedCheckTable.enabled && n.identity && e.objectId !== v.AaP(n.identity))
									throw new O(t.getMarshalingErrorString("reference", "object", t.columnName, "reference points at incorrect table"));
							const r = (0,
							C.objectSchemaHelper)(n)
								, {rowId: o, text: a} = N.hd(e, t.document)
								, {id: s, primary: i} = r;
							if (s && o) {
									const n = (0,
									h.Nn)(t.document.packSyncRefsGridManager).tryGetRefIdValue(e);
									if (n) {
											const e = x(n)
												, o = F(r.properties[s])
												, c = await P({
													incomingType: e,
													packType: o,
													value: n,
													context: t,
													schema: r.properties[s]
											})
												, u = {
													[s]: c
											};
											return i && i !== s && a && (u[i] = a),
											u
									}
							}
					}
					throw new O(t.getMarshalingErrorString("reference", "object", t.columnName))
			}
			function D(e, t) {
					return {
							...e,
							schema: t,
							docId: e.document.id,
							protocolAndHost: e.document.session.getProtocolAndHost(),
							cdnBlobHostingUrlFormat: p.$W.cdnBlobHostingUrlFormat,
							valueResolver: e.document.context.valueResolver,
							hasValueFormat: !0,
							exportSlate: !0,
							wrappingDocId: e.sourceDocId
					}
			}
			function Q(e, t, n) {
					if (n?.type !== i.eV.String)
							return;
					if (!e)
							return;
					const r = t.columnName ? ` for column ${t.columnName}` : "";
					if (n.codaType === i.z2.Time) {
							if ("number" == typeof e)
									return String(e);
							if ("string" != typeof e)
									throw new O(`Cannot convert to time${r}`);
							const t = (0,
							M.Gg)(e);
							if (void 0 === t)
									throw new O(`Cannot parse time${r}`);
							return String(t)
					}
					if (n.codaType === i.z2.Date) {
							const n = (0,
							d.BI)(t, e);
							if (!n)
									throw new O(`Cannot parse date${r}`);
							return (0,
							g.Lv)(n, t.timezone)
					}
					if (n.codaType === i.z2.DateTime) {
							const n = (0,
							d.BI)(t, e);
							if (!n)
									throw new O(`Cannot parse date time${r}`);
							return (0,
							g.MD)(n, t.timezone)
					}
			}
			const B = {
					[l.eV.Array]: {
							[i.eV.Boolean]: async (e, t, n) => A[i.eV.Boolean](e.value, t, n),
							[i.eV.Number]: async (e, t, n) => A[i.eV.Number](e.value, t, n),
							[i.eV.String]: async (e, t, n) => A[i.eV.String](e.value, t, n),
							[i.eV.Array]: async (e, t, n) => A[i.eV.Array](e.value, t, n),
							[i.eV.Object]: async (e, t, n) => A[i.eV.Object](e.value, t, n)
					},
					[l.eV.Blank]: {
							[i.eV.Boolean]: () => "",
							[i.eV.Number]: () => "",
							[i.eV.String]: () => "",
							[i.eV.Array]: () => "",
							[i.eV.Object]: () => ""
					},
					[l.eV.Currency]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("currency", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: async (e, t, n) => P({
									incomingType: x(e.value),
									packType: i.eV.Number,
									value: e.value,
									context: t,
									schema: n
							}),
							[i.eV.String]: (e, t) => new o.Sj(e,t.localeNumberFormat).toString(o.Sj.CurrencyFormats.Currency),
							[i.eV.Array]: async (e, t, n) => {
									const r = F(n?.items);
									return [await P({
											incomingType: l.eV.Currency,
											packType: r,
											value: e,
											context: t,
											schema: n?.items
									})]
							}
							,
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("currency", "object", t.columnName))
							}
					},
					[l.eV.DateTime]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("datetime", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t, n) => {
									if (n?.codaType === i.z2.Time) {
											const n = (0,
											f.BO)(e, t);
											return (0,
											M.EX)(n)
									}
									const r = l.Qz(e, t);
									return T.ne(r.getTime())
							}
							,
							[i.eV.String]: (e, t, n) => {
									if (n?.codaType === i.z2.Time) {
											const n = (0,
											f.BO)(e, t);
											return (0,
											M.tm)(n, t).toString()
									}
									const r = l.Qz(e, t);
									return n?.codaType === i.z2.DateTime ? (0,
									g.MD)(r, t.timezone) : n?.codaType === i.z2.Date ? (0,
									g.Lv)(r, t.timezone) : e.formatted || e.input
							}
							,
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.DateTime,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("datetime", "object", t.columnName))
							}
					},
					[l.eV.Duration]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("duration", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: e => e.seconds / T.vd(),
							[i.eV.String]: e => e.formatted || e.input,
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.Duration,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("duration", "object", t.columnName))
							}
					},
					[l.eV.ImageUrlReference]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("image url reference", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t) => {
									throw new O(t.getMarshalingErrorString("image url reference", "number", t.columnName))
							}
							,
							[i.eV.String]: (e, t, n) => {
									if ((0,
									I.VJ)(n)) {
											const t = [];
											return e.name && t.push(`alt="${e.name}"`),
											e.width && t.push(`width="${e.width}"`),
											e.height && t.push(`height="${e.height}"`),
											e.style && t.push(`style="${e.style}"`),
											`<img src="${e.url}" ${t.join(" ")} />`
									}
									return (0,
									I.Fj)(n) ? `![${e.name || "image"}](${e.url})` : t.packId === s.OW.CodaDoc ? (0,
									S.TQ)(e, D(t)) : e.url
							}
							,
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.ImageUrlReference,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("image url reference", "object", t.columnName))
							}
					},
					[l.eV.Number]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("number", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: e => e.value ? e.value : "",
							[i.eV.String]: e => e.value ? e.value.toString() : "",
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.Number,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("number", "object", t.columnName))
							}
					},
					[l.eV.Object]: {
							[i.eV.Boolean]: async (e, t, n) => j[i.eV.Boolean](e.value, t, n),
							[i.eV.Number]: async (e, t, n) => j[i.eV.Number](e.value, t, n),
							[i.eV.String]: async (e, t, n) => j[i.eV.String](e.value, t, n),
							[i.eV.Array]: async (e, t, n) => j[i.eV.Array](e.value, t, n),
							[i.eV.Object]: async (e, t, n) => j[i.eV.Object](e.value, t, n)
					},
					[l.eV.Percent]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("percent", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: e => (0,
							y.Et)(e.value) ? e.value : "",
							[i.eV.String]: e => (0,
							w.z)(e.value) ? "" : (0,
							y.l9)(e.value, {
									precision: e.precision,
									grouping: e.grouping
							}),
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.Percent,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("percent", "object", t.columnName))
							}
					},
					[l.eV.Reference]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("reference", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t) => {
									const n = l.KE(e, t);
									if ("" === n)
											return "";
									const r = Number(n);
									if (isNaN(r))
											throw new O(t.getMarshalingErrorString("reference", "number", t.columnName));
									return r
							}
							,
							[i.eV.String]: (e, t, n) => {
									if ((0,
									l.vU)(e)) {
											if (t.packId === s.OW.CodaDoc) {
													const n = function(e, t) {
															const n = t.document.blobManager.getUrlForBlob(e);
															if (n)
																	return n;
															const r = t.document.blobManager.getBlobInfo(e);
															if (r?.status && (0,
															k.B)(r.status))
																	throw new O("An attached file is still being uploaded and cannot be processed yet");
															throw new O("An attached file cannot be processed, please try uploading it again")
													}(e.identifier, t);
													return {
															publicUrl: n,
															...e
													}
											}
											if ((0,
											I.lU)(n) || (0,
											I.db)(n)) {
													const {rowId: n} = N.hd(e, t.document);
													if (n)
															return t.document.blobManager.getUrlForBlob(n) || ""
											}
									}
									return l.KE(e, t)
							}
							,
							[i.eV.Array]: async (e, t, n) => [await q(e, t, n?.items)],
							[i.eV.Object]: q
					},
					[l.eV.Slate]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("rich text", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t) => {
									const n = l.KE(e, t);
									if ("" === n)
											return "";
									const r = Number(n);
									if (isNaN(r))
											throw new O(t.getMarshalingErrorString("rich text", "number", t.columnName));
									return r
							}
							,
							[i.eV.String]: (e, t, n) => {
									if ((0,
									I.VJ)(n)) {
											const n = new a.JSDOM("").window.document;
											return u.s.renderValueHtml({
													document: t.document,
													domDocument: n
											}, e)
									}
									return (0,
									I.Fj)(n) ? c.eC.createMarkdown(e.root.children, D(t)) : (0,
									I.De)(n) ? JSON.stringify((0,
									S.cm)(e, D(t))) : l.KE(e, t)
							}
							,
							[i.eV.Array]: async (e, t, n) => {
									const r = F(n?.items)
										, o = await P({
											incomingType: l.eV.Slate,
											packType: r,
											value: e,
											context: t,
											schema: n
									});
									if (r === i.eV.String) {
											const e = o;
											if (e?.includes(","))
													return e.split(",").map((e => e.trim()))
									}
									return [o]
							}
							,
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("rich text", "object", t.columnName))
							}
					},
					[l.eV.Time]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("time", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t, n) => {
									if (n?.codaType === i.z2.DateTime)
											throw new O(t.getMarshalingErrorString("time", "datetime", t.columnName));
									return e.seconds
							}
							,
							[i.eV.String]: (e, t, n) => {
									if (n?.codaType === i.z2.DateTime)
											throw new O(t.getMarshalingErrorString("time", "datetime", t.columnName));
									return n?.codaType === i.z2.Time ? (0,
									M.tm)(e.seconds, t) : l.KE(e, t)
							}
							,
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.Time,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("time", "object", t.columnName))
							}
					},
					[l.eV.UrlReference]: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("url reference", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t) => {
									throw new O(t.getMarshalingErrorString("url reference", "number", t.columnName))
							}
							,
							[i.eV.String]: (e, t, n) => {
									if ((0,
									I.VJ)(n)) {
											const n = l.KE(e.name, t);
											return `<a href="${e.url}">${n}</a>`
									}
									if ((0,
									I.Fj)(n)) {
											return `[${l.KE(e.name, t)}](${e.url})`
									}
									return e.url
							}
							,
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: l.eV.UrlReference,
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("url reference", "object", t.columnName))
							}
					},
					Array: A,
					Boolean: {
							[i.eV.Boolean]: e => e,
							[i.eV.Number]: (e, t) => {
									throw new O(t.getMarshalingErrorString("boolean", "number", t.columnName))
							}
							,
							[i.eV.String]: e => e.toString(),
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: "Boolean",
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("boolean", "object", t.columnName))
							}
					},
					String: {
							[i.eV.Boolean]: e => (0,
							R.Z)(e),
							[i.eV.Number]: (e, t) => {
									if (!e)
											return "";
									const n = Number(e);
									if (isNaN(n))
											throw new O(t.getMarshalingErrorString("non-numeric string", "number", t.columnName));
									return n
							}
							,
							[i.eV.String]: (e, t, n) => {
									const r = Q(e, t, n);
									if (r)
											return r;
									if ((0,
									I.VJ)(n)) {
											const n = new a.JSDOM("").window.document;
											return u.s.renderValueHtml({
													document: t.document,
													domDocument: n
											}, e)
									}
									if ((0,
									I.Fj)(n)) {
											const n = (0,
											m.zI)(t, e)
												, r = {
													docId: t.document.id,
													protocolAndHost: t.document.session.getProtocolAndHost(),
													valueResolver: t.document.context.valueResolver,
													cdnBlobHostingUrlFormat: p.$W.cdnBlobHostingUrlFormat,
													schemaVersion: t.schemaVersion,
													typedConfig: t.document.session.runtimeConfig
											};
											return c.eC.createMarkdown(n.root.children, r)
									}
									if ((0,
									I.De)(n)) {
											const n = (0,
											m.zI)(t, e);
											return JSON.stringify((0,
											V.i)(t, n))
									}
									return e
							}
							,
							[i.eV.Array]: async (e, t, n) => {
									if ("" === e)
											return [];
									if (e.includes(",")) {
											const r = e.split(",").map((e => e.trim()));
											return P({
													incomingType: "Array",
													packType: i.eV.Array,
													value: r,
													context: t,
													schema: n
											})
									}
									return U({
											incomingType: "String",
											value: e,
											context: t,
											schema: n
									})
							}
							,
							[i.eV.Object]: (e, t) => {
									if (!e)
											return "";
									throw new O(t.getMarshalingErrorString("string", "object", t.columnName))
							}
					},
					Number: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("number", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: e => e,
							[i.eV.String]: (e, t, n) => {
									const r = Q(e, t, n);
									return r || e.toString()
							}
							,
							[i.eV.Array]: async (e, t, n) => U({
									incomingType: "Number",
									value: e,
									context: t,
									schema: n
							}),
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("number", "object", t.columnName))
							}
					},
					Object: j,
					Unknown: {
							[i.eV.Boolean]: (e, t) => {
									throw new O(t.getMarshalingErrorString("unknown", "boolean", t.columnName))
							}
							,
							[i.eV.Number]: (e, t) => {
									throw new O(t.getMarshalingErrorString("unknown", "number", t.columnName))
							}
							,
							[i.eV.String]: (e, t) => l.x1(e) ? l.KE(e, t) : e?.toString(),
							[i.eV.Array]: (e, t) => {
									throw new O(t.getMarshalingErrorString("unknown", "array", t.columnName))
							}
							,
							[i.eV.Object]: (e, t) => {
									throw new O(t.getMarshalingErrorString("unknown", "object", t.columnName))
							}
					}
			};
			class L {
					constructor(e, t, {sourceDocId: n, syncTableGridId: r}) {
							this._document = e,
							this._packId = t,
							this._sourceDocId = n,
							this._syncTableGrid = r ? e.session.resolver.typedGetters.tryGetSyncTableGrid(r) : void 0
					}
					async visitColumns(e, t, n, {onlyIncludeFields: r, customMarshalingError: o, dropUnmarshalableFields: a}) {
							const s = {};
							t?.type !== i.eV.Object && (t = void 0);
							const c = {
									...n,
									document: this._document,
									packId: this._packId,
									sourceDocId: this._sourceDocId,
									columnName: void 0,
									getMarshalingErrorString: o || _
							};
							for (const [n,o] of Object.entries(e)) {
									if (r && !r.includes(n))
											continue;
									const e = t?.properties[n]
										, i = x(o)
										, u = F(e)
										, l = this._syncTableGrid?.getColumnIdsForSchemaProperty(n) ?? []
										, d = l.length > 0 ? this._syncTableGrid?.columns.tryGetById(l[0])?.name : void 0
										, m = t => P({
											incomingType: i,
											packType: t,
											value: o,
											context: {
													...c,
													columnName: d
											},
											schema: e
									});
									try {
											s[n] = await m(u)
									} catch (e) {
											if (!a)
													throw e;
											E.R.warn(`Dropping unsupported field ${n} from ${this._packId}: ${e}`)
									}
							}
							return s
					}
					static async unwrapObject(e, t, n, r, o, {sourceDocId: a, syncTableGridId: s}={}, i={}) {
							return new this(e,o,{
									sourceDocId: a,
									syncTableGridId: s
							}).visitColumns(t, n, r, i)
					}
			}
			class $ extends L {
			}
			var G = n(356691)
				, z = n(221643)
				, J = n(413816)
				, H = n(214571)
				, K = n(787662)
				, W = n(279860)
				, X = n(218185);
			class Y extends J.p {
					visitString(e, t, n) {
							if (this._packId === s.OW.CodaDoc) {
									const t = (0,
									S.mN)(e);
									if (t !== e)
											return t
							}
							if (t && t.type === i.eV.String && t.codaType) {
									if (t.codaType === i.z2.Markdown)
											return e ? (0,
											V.i)(n, (0,
											K.Hd)(z.G.createSlate(n, e))) : e;
									if (t.codaType === i.z2.Html) {
											const t = (0,
											X.Z)(e);
											return (0,
											V.i)(n, (0,
											K.Hd)(G.e.createSlate(n, t)))
									}
									if (t.codaType === i.z2.CodaInternalRichText)
											try {
													const t = JSON.parse(e);
													return (0,
													V.i)(n, function(e) {
															const t = W.A4(e)
																, n = H.ib.createDocument(t.root.children)
																, r = H.ib.remapNode(n, (function(e) {
																	return H.ib.nodeIsCollaborativeObject(e) ? H.ib.nodeIsInlineElement(e) ? H.ib.createEmptyTextNode() : H.ib.createLineNode(H.Uj.Paragraph, {
																			children: [H.ib.createEmptyTextNode()]
																	}) : e
															}
															));
															return {
																	type: t.type,
																	root: r
															}
													}(t))
											} catch (t) {
													return e ? (0,
													V.i)(n, (0,
													K.Hd)(z.G.createSlate(n, e))) : e
											}
							}
							if (!t || t.type === i.eV.String && !t.codaType) {
									const t = H.ib.splitTextIntoLines(e, {
											splitOnBlankLines: !0
									});
									if (t.length > 1) {
											const e = t.map((e => H.ib.createLineNode(H.Uj.Paragraph, {
													children: [H.ib.createTextNode({
															text: e
													})]
											})));
											return (0,
											V.i)(n, (0,
											l.li)({
													children: e
											}))
									}
							}
							return super.visitString(e, t, n)
					}
			}
			var Z = n(243613)
				, ee = n(700533)
				, te = n(671799);
			class ne extends te.b {
					static createNoopMap() {
							return new re
					}
					static createSnapshotOnlyMap() {
							return new oe
					}
			}
			class re extends ne {
					async lookupPreviouslyValidResult(e, t, n) {}
					noteCalculationResult(e, t, n, r) {}
					snapshot() {
							return {
									hasStableKeys: !0,
									requestToResultMap: {},
									requestToLocationMap: {},
									locationToRequestMap: {},
									requestStringToRequestInfoMap: {}
							}
					}
					hydrate(e) {}
					handleRowRemoved(e, t) {}
					setUpgradeHandler(e) {}
					processPendingUpgrades() {
							return {
									remappedLocations: {},
									remappedRequests: {}
							}
					}
					applyPreviousUpgradeData(e) {}
					lookupLocationMap(e) {}
			}
			class oe extends re {
					snapshot() {
							return this._requestMapSnapshot ?? super.snapshot()
					}
					hydrate(e) {
							this._requestMapSnapshot = e
					}
			}
			var ae = n(79750)
				, se = n(454079)
				, ie = n(344406)
				, ce = n(980338)
				, ue = n(318967)
				, le = n(905044)
				, de = (n(423549),
			n(99290),
			n(933764));
			function me(e) {
					const t = new de.ExecutionError;
					return t.setType(e.errorType),
					e.errorType === se.Fk.EXTERNAL_STATUS_CODE_ERROR && e.statusCode && t.setStatusCode(e.statusCode),
					t
			}
			var pe = n(632401)
				, he = n(157692);
			const ye = {
					[Z.QO.ConnectionSetup]: de.CalcServiceContextType.CONNECTION_SETUP,
					[Z.QO.CsbIngestion]: de.CalcServiceContextType.CSB_INGESTION,
					[Z.QO.NativeIntegration]: de.CalcServiceContextType.NATIVE_INTEGRATION,
					[Z.QO.Doc]: de.CalcServiceContextType.DOC,
					[Z.QO.AgentRuntime]: de.CalcServiceContextType.AGENT_RUNTIME
			};
			class ge extends Error {
					constructor(e) {
							super(`Calculation service retryable error ${e}`),
							this.isRetryableError = !0
					}
			}
			class Se extends te.b {
					constructor({requestMap: e, performModelPostProcessingPackFormulas: t, retryConfig: n, isPastDeadline: o}) {
							super(),
							this._isSnapshotting = !1,
							this._shouldLogErrorStacks = !1,
							this._additionalPacksRequestMaps = [],
							this._performModelPostProcessingPackFormulas = t ?? !1,
							this._requestMap = e || ne.createNoopMap(),
							this._isPastDeadline = o;
							for (const e of [r.QCO.CalcServiceRequestMapInvalidateLocation, r.QCO.FatalError])
									this._requestMap.on(e, (t => this.emit(e, t)));
							this._retryConfig = n
					}
					setIsSnapshotting(e) {
							this._isSnapshotting = e
					}
					enableAdditionalPacksRequestMaps(e) {
							this._additionalPacksRequestMaps.push(e)
					}
					clearPacksRequestMaps() {
							this._additionalPacksRequestMaps = []
					}
					async lookupPreviouslyValidResult(e, t, n, r={}) {
							return this._requestMap.lookupPreviouslyValidResult(t, n, r)
					}
					noteCalculationResult(e, t, n, r) {
							return this._requestMap.noteCalculationResult(e, t, n, r)
					}
					addContext(e, t) {
							if (!e)
									return;
							const n = new de.Context;
							switch (e.calcServiceContext.type) {
							case Z.QO.Doc:
									n.setDocId(e.calcServiceContext.docId);
									break;
							case Z.QO.CsbIngestion:
									n.setPackId(e.calcServiceContext.packId ?? 0),
									n.setRootCsbIngestionId(e.calcServiceContext.rootIngestionId || ""),
									n.setCsbIngestionId(e.calcServiceContext.ingestionId || ""),
									n.setCsbPackConfigurationId(e.calcServiceContext.packConfigurationId || ""),
									n.setIngestionExecutionId(e.calcServiceContext.ingestionExecutionId || ""),
									n.setFullIngestionExecutionId(e.calcServiceContext.fullIngestionExecutionId || ""),
									n.setIngestionConfigId(e.calcServiceContext.ingestionConfigId || ""),
									n.setIngestionChildExecutionIndex(e.calcServiceContext.ingestionChildExecutionIndex ?? 0),
									n.setIngestionParentItemId(e.calcServiceContext.ingestionParentItemId?.toString() || ""),
									n.setIngestionProcessId(e.calcServiceContext.ingestionProcessId || ""),
									n.setIngestionParentStage(e.calcServiceContext.ingestionParentStage || ""),
									n.setIngestionExecutionAttempt(e.calcServiceContext.ingestionExecutionAttempt ?? 0),
									n.setCalcServerAttempt(e.calcServiceContext.calcServerAttempt ?? 0);
									break;
							case Z.QO.NativeIntegration:
									break;
							case Z.QO.AgentRuntime:
									n.setAgentGrantToken(e.calcServiceContext.agentGrantToken || ""),
									n.setExecutingAgentInstanceId(e.calcServiceContext.executingAgentInstanceId || ""),
									n.setPackAgentInstanceId(e.calcServiceContext.packAgentInstanceId || ""),
									n.setAgentSessionId(e.calcServiceContext.agentSessionId || "");
									break;
							case Z.QO.ConnectionSetup:
									E.R.warn("BaseCalculationServiceClient is not yet expected to support ConnectionSetup context type");
									break;
							default:
									(0,
									h.pL)(e.calcServiceContext)
							}
							const r = ye[e.calcServiceContext.type];
							n.setType(r),
							n.setSchemaVersion(e.schemaVersion),
							n.setTimezone(e.timezone),
							n.setObjectId(e.objectId || ""),
							n.setRowId(e.rowId || ""),
							n.setColumnId(e.columnId || ""),
							n.setManualRefreshTimestampMs(e.manualRefreshTimestampMs ?? 0),
							n.setCurrentOpVersion(e.currentOpVersion ?? 0),
							t.setContext(n)
					}
					_addParameters(e, t, n) {
							const r = this._getSchemaVersion(e);
							for (const e of t) {
									const t = fe(e, r);
									n.addParams((0,
									ce.wv)(t))
							}
					}
					_addConnection(e, t) {
							if (e) {
									const n = new de.Connection;
									n.setId(e),
									t.setConnection(n)
							}
					}
					async translateResult(e, t, n, r) {
							const {result: o, annotations: a} = e;
							if (!this._performModelPostProcessingPackFormulas)
									return {
											value: o
									};
							const s = new ie.k({
									document: this.document,
									objectSchema: t,
									packId: n,
									annotations: a,
									allowTopLevelReference: !1,
									isSyncFormula: r
							});
							return {
									value: await s.visitAndWritePackRowRefIdValues(o, t, this.document.context)
							}
					}
					async translateGenericSyncUpdateResult(e, t, n) {
							const {result: r, annotations: o} = e;
							if (!this._performModelPostProcessingPackFormulas)
									return {
											value: r
									};
							const a = new ie.k({
									document: this.document,
									objectSchema: t,
									packId: n,
									annotations: o
							});
							return {
									value: await a.visitForGenericSyncUpdateResult(r, t, this.document.context)
							}
					}
					_parsePackResultAnnotations(e) {
							if (!e)
									return;
							return {
									emailsToUserIdsMap: Object.fromEntries(e.getEmailsToUserIdsMap().getEntryList()),
									urlsToBlobIdsMap: Object.fromEntries(e.getUrlToBlobIdsMap().getEntryList())
							}
					}
					_getDocumentContext(e) {
							if (!this._document)
									return {
											...ae.f,
											...e?.toObject() || {}
									};
							const t = this.document.context;
							if (!e)
									return t;
							const n = {
									schemaVersion: e.getSchemaVersion(),
									timezone: e.getTimezone()
							};
							return {
									...t,
									...n
							}
					}
					_cloneContextInfoWithAttempt(e, t) {
							if (e) {
									const n = (0,
									pe.o)(e);
									return n.calcServiceContext.calcServerAttempt = t,
									n
							}
							return e
					}
					isRetryable(e, t) {
							return e.type === ee.X.ERROR && e.errorType === de.ExecutionErrorType.DUPLICATED_FORMULA_REQUEST
					}
					async runCalcServerRequestWithBackoff(e, t, n) {
							let r;
							return (0,
							he.w0)((async o => {
									const a = this._cloneContextInfoWithAttempt(e, o)
										, s = await t(a, r);
									if (s.type === ee.X.SUCCESS)
											return s;
									r = s;
									const i = e?.calcServiceContext.type === Z.QO.CsbIngestion ? `${s.errorType} ${s.reason}, CsbIngestionExecutionId: ${e?.calcServiceContext.ingestionExecutionId}` : `${s.errorType} ${s.reason}`;
									if (this.isRetryable(s, o))
											throw new ge(`${n?.errorMessage || ""}Error Info ${i}`);
									if (s.type === ee.X.ERROR && 1 === o && !(0,
									se.ku)(s.errorType, e?.isAction))
											throw new Error(i);
									return s
							}
							), {
									isErrorRetryable: (t, n) => !e?.isAction && (!this._isPastDeadline?.() && (1 === n || t instanceof ge)),
									logErrors: n?.logErrors ?? !0,
									maxWaitTimeMsec: this._retryConfig && ( () => (0,
									h.Nn)(this._retryConfig).retryAfterMs),
									minWaitTimeMsec: this._retryConfig && ( () => .8 * (0,
									h.Nn)(this._retryConfig).retryAfterMs)
							})
					}
					async handleResult(e, t, n, r) {
							if (t.hasValue()) {
									const r = t instanceof de.InvokeSyncFormulaResponse ? t.getContinuation() : void 0;
									let o;
									r?.getObjectVal() && (o = JSON.parse(r.getObjectVal()));
									const a = t instanceof de.InvokeSyncFormulaResponse ? t.getCompletion() : void 0;
									let s;
									a?.getObjectVal() && (s = JSON.parse(a.getObjectVal()));
									const i = t instanceof de.InvokeSyncFormulaResponse ? t.getDeletedItemIdsList() : void 0;
									let c, u = (0,
									ce.mm)((0,
									h.Nn)(t.getValue()));
									if (!(e instanceof de.InvokeMetadataFormulaRequest)) {
											const r = this._getDocumentContext(e.getContext())
												, o = (0,
											h.Nn)(e.getFormula()?.getPackId());
											u = await Y.wrapObject({
													value: u,
													schema: n,
													context: r,
													packId: o,
													allowYielding: !0
											});
											const a = this._parsePackResultAnnotations(t.getAnnotations());
											if (n && (t instanceof de.InvokeSyncFormulaResponse || this._performModelPostProcessingPackFormulas)) {
													const e = await this.translateResult({
															result: u,
															annotations: a
													}, n, o, t instanceof de.InvokeSyncFormulaResponse);
													({value: u, warnings: c} = e)
											}
									}
									return {
											type: ee.X.SUCCESS,
											value: u,
											continuation: o,
											completion: s,
											deletedItemIds: i,
											warnings: c
									}
							}
							if (t.hasError()) {
									const e = (0,
									h.Nn)(t.getError());
									return this._handleExecutionError(e, r)
							}
							return {
									type: ee.X.ERROR,
									errorType: de.ExecutionErrorType.UNKNOWN,
									reason: JSON.stringify(t)
							}
					}
					async _handleSyncUpdateResult(e, t, n, r) {
							if (t.hasValue()) {
									let o;
									const a = (0,
									ce.mm)((0,
									h.Nn)(t.getValue()))
										, s = this._getDocumentContext(e.getContext())
										, i = (0,
									h.Nn)(e.getFormula()?.getPackId())
										, c = new Y({
											packId: i,
											allowYielding: !0
									});
									let u = await c.visitForGenericSyncUpdateResult(a, r, s);
									const l = this._parsePackResultAnnotations(t.getAnnotations());
									if (r) {
											const e = await this.translateGenericSyncUpdateResult({
													result: u,
													annotations: l
											}, r, i);
											u = e.value,
											o = e.warnings
									}
									if (0 === n.size)
											return {
													type: ee.X.SUCCESS,
													value: u,
													warnings: o
											};
									const d = u;
									for (const [e,t] of n.entries())
											d.splice(e, 0, {
													outcome: le.UpdateOutcome.Error,
													error: t
											});
									return {
											type: ee.X.SUCCESS,
											value: d,
											warnings: o
									}
							}
							if (t.hasError()) {
									const e = (0,
									h.Nn)(t.getError());
									return this._handleExecutionError(e)
							}
							return {
									type: ee.X.ERROR,
									errorType: de.ExecutionErrorType.UNKNOWN,
									reason: JSON.stringify(t)
							}
					}
					_handleAutocompleteResult(e, t) {
							if (e.hasValue()) {
									const t = (0,
									ce.mm)((0,
									h.Nn)(e.getValue()));
									if (Array.isArray(t)) {
											const e = ["string", "number"].includes(typeof t?.[0]) ? t.map((e => ({
													display: e.toString(),
													value: e.toString()
											}))) : t;
											return {
													type: ee.X.SUCCESS,
													value: e
											}
									}
							}
							if (e.hasError()) {
									const n = (0,
									h.Nn)(e.getError());
									return this._handleExecutionError(n, t)
							}
							return {
									type: ee.X.ERROR,
									errorType: de.ExecutionErrorType.UNKNOWN,
									reason: JSON.stringify(e)
							}
					}
					_handleValidateParametersResultOrStructuredError(e, t) {
							if (e.hasValue()) {
									const t = (0,
									ce.mm)((0,
									h.Nn)(e.getValue()));
									return {
											type: ee.X.SUCCESS,
											value: t
									}
							}
							if (e.hasError()) {
									const n = (0,
									h.Nn)(e.getError());
									return this._handleExecutionError(n, t)
							}
							return {
									type: ee.X.ERROR,
									errorType: de.ExecutionErrorType.UNKNOWN,
									reason: JSON.stringify(e)
							}
					}
					_handleExecutionError(e, t) {
							const n = (0,
							h.Nn)(e.getType())
								, r = ([de.ExecutionErrorType.EXTERNAL_USER_VISIBLE, de.ExecutionErrorType.MISSING_OAUTH_SCOPES].includes(n) || t) && e.getMessage() || void 0;
							let o;
							if (e.hasMissingOauthScopesError()) {
									const t = e.getMissingOauthScopesError()?.toObject();
									o = {
											missingPackScopes: t?.missingPackScopeList,
											missingFormulaScopes: t?.missingFormulaScopeList
									}
							}
							return this._shouldLogErrorStacks && E.R.warn(`Calculation error: ${n}`, e.getStack()),
							{
									type: ee.X.ERROR,
									errorType: n,
									reason: r,
									missingScopesError: o,
									statusCode: e.getStatusCode(),
									retryAfterMs: e.getRetryAfterMs()
							}
					}
					async handleFormulaInvocationError(e, t) {
							E.R.warn("Error occurred while dispatching to calc-service", e);
							const n = {
									type: ee.X.ERROR,
									errorType: de.ExecutionErrorType.UNKNOWN,
									reason: JSON.stringify(e)
							};
							if ("code"in e)
									switch (e.code) {
									case 4:
											return {
													...n,
													errorType: de.ExecutionErrorType.TIMEOUT_INTERNAL
											};
									case 8:
											return {
													...n,
													errorType: de.ExecutionErrorType.RESPONSE_TOO_LARGE
											}
									}
							return n
					}
					async invokeFunction(e, t, n, {connectionInfo: o, preserveInternalErrorMessages: a}={}) {
							const s = new de.InvokeFormulaRequest;
							this.addContext(e, s);
							try {
									this._addParameters(e, n, s)
							} catch (e) {
									return {
											type: ee.X.ERROR,
											errorType: se.Fk.BAD_PARAMETERS,
											reason: e.message
									}
							}
							this._addConnection(o?.connectionId, s);
							const {packId: i, packVersion: c, namespace: u, name: l, schema: d} = t
								, m = new de.Formula;
							m.setPackId(i),
							m.setPackVersion(c),
							u && m.setNamespace(u),
							m.setName(l),
							s.setFormula(m),
							d && s.setSchema(JSON.stringify(d));
							const p = await this.lookupPreviouslyValidResult(this._additionalPacksRequestMaps, s, e, {
									connectionInfo: o
							});
							if (p)
									return p;
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: i
							});
							try {
									const t = await this.runCalcServerRequestWithBackoff(e, (async (e, t) => {
											t && s.setPreviousAttemptError(me(t));
											const n = await this.dispatchInvokeFunction(s);
											return this.handleResult(s, n, d, a)
									}
									), {
											logErrors: !1
									});
									return this.noteCalculationResult(s, e, t, {
											connectionInfo: o
									}),
									t
							} catch (t) {
									const n = await this.handleFormulaInvocationError(t, s);
									return this.noteCalculationResult(s, e, n, {
											connectionInfo: o
									}),
									n
							}
					}
					async invokeSyncFunction(e, t, n, {connectionId: o, dynamicUrl: a, schema: s, continuation: i, permissionSyncMode: c, preserveInternalErrorMessages: u, previousCompletion: l, previousAttemptError: d}) {
							const m = new de.InvokeSyncFormulaRequest;
							this.addContext(e, m),
							this._addParameters(e, n, m),
							this._addConnection(o, m);
							const {packId: p, packVersion: h, name: y} = t
								, g = new de.SyncFormula;
							if (g.setPackId(p),
							g.setPackVersion(h),
							g.setName(y),
							m.setFormula(g),
							i) {
									const e = new de.ContinuationToken;
									e.setObjectVal(JSON.stringify(i)),
									m.setContinuation(e)
							}
							if (l) {
									const e = new de.CompletionToken;
									e.setObjectVal(JSON.stringify(l)),
									m.setPreviousCompletion(e)
							}
							c && m.setPermissionSyncMode(ce.Lm[c]),
							s && m.setSchema(JSON.stringify(s)),
							a && m.setDynamicUrl(a),
							d && m.setPreviousAttemptError(me(d)),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: p
							});
							try {
									const e = await this.dispatchInvokeSyncFunction(m);
									return await this.handleResult(m, e, s, u)
							} catch (e) {
									return this.handleFormulaInvocationError(e, m)
							}
					}
					async invokeSyncUpdateFunction(e, t, n, o, a, {connectionId: s, dynamicUrl: i, schema: c, gridId: u}) {
							const l = new de.InvokeSyncUpdateFormulaRequest;
							l.setUserId(o),
							this.addContext(e, l),
							this._addParameters(e, n, l),
							this._addConnection(s, l);
							const {packId: d, packVersion: m, name: p} = t
								, h = new de.SyncFormula;
							h.setPackId(d),
							h.setPackVersion(m),
							h.setName(p),
							l.setFormula(h);
							const y = c?.items
								, g = []
								, S = new Map;
							for (let e = 0; e < a.length; e++) {
									const t = a[e];
									if (t.type === ue.LQ.Delete || t.type === ue.LQ.Add)
											throw Error("Two-way add-delete not yet supported for external packs");
									const {previousValues: n, newValues: r, updatedFields: o} = t
										, s = this._getDocumentContext(l.getContext());
									try {
											const e = await $.unwrapObject(this.document, n, y, s, d, {
													syncTableGridId: u
											})
												, t = await $.unwrapObject(this.document, r, y, s, d, {
													syncTableGridId: u
											})
												, a = new de.ResultValue;
											a.setObjectVal(JSON.stringify(e));
											const i = new de.ResultValue;
											i.setObjectVal(JSON.stringify(t));
											const c = new de.RowUpdate;
											c.setPreviousValues(a),
											c.setNewValues(i),
											c.setUpdatedFieldsList(o.map((e => e.columnKey))),
											g.push(c)
									} catch (t) {
											S.set(e, t)
									}
							}
							if (0 === g.length && S.size > 0) {
									const e = [];
									for (const t of S.values())
											e.push({
													outcome: le.UpdateOutcome.Error,
													error: t
											});
									return {
											type: ee.X.SUCCESS,
											value: e
									}
							}
							l.setRowUpdatesList(g),
							c && l.setSchema(JSON.stringify(c)),
							i && l.setDynamicUrl(i),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: d
							});
							try {
									const e = await this.dispatchInvokeSyncUpdateFunction(l);
									return await this._handleSyncUpdateResult(l, e, S, c)
							} catch (e) {
									return this.handleFormulaInvocationError(e, l)
							}
					}
					async invokePropertyOptionsFunction(e, {packId: t, packVersion: n, name: o}, a, s, {connectionId: i, metadataContext: c, newValues: u, schema: l, optionsFormulaKey: d, dynamicUrl: m, gridId: p, dropUnmarshalableFields: h}) {
							const y = new de.InvokeMetadataFormulaRequest;
							y.setParameter(s),
							this.addContext(e, y),
							this._addConnection(i, y);
							const g = new de.PropertyOptionsMetadataRequest;
							y.setPropertyOptions(g),
							g.setSchema(JSON.stringify(l)),
							m && g.setDynamicUrl(m),
							g.setPropertyName(a),
							g.setOptionsFormulaKey(d);
							const S = l
								, f = this._getDocumentContext(y.getContext());
							let v;
							try {
									v = await $.unwrapObject(this.document, u, S, f, t, {
											syncTableGridId: p
									}, {
											customMarshalingError: (e, t, n, r) => `The contents for the column ${n} are an unexpected type. Try resetting the value first.`,
											dropUnmarshalableFields: h
									})
							} catch (e) {
									if (e instanceof O)
											return {
													type: ee.X.ERROR,
													errorType: de.ExecutionErrorType.EXTERNAL_USER_VISIBLE,
													reason: e.message
											};
									throw e
							}
							const I = new de.ResultValue;
							I.setObjectVal(JSON.stringify(v));
							const w = new de.SyncFormula;
							w.setPackId(t),
							w.setPackVersion(n),
							w.setName(o),
							g.setSync(w),
							g.setNewValues(I);
							const k = g.getMetadataContextMap();
							for (const [e,t] of Object.entries(c))
									k.set(e, (0,
									ce.wv)(t));
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: t
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(y);
									return this._handlePropertyOptionsResult(e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, y)
							}
					}
					_handlePropertyOptionsResult(e) {
							let t;
							if (e.hasValue()) {
									const n = (0,
									ce.mm)((0,
									h.Nn)(e.getValue()));
									if (n)
											if ("object" != typeof n)
													t = "Response type is not object: " + typeof n;
											else if (n.packResult && n.propertiesUsed)
													if (Array.isArray(n.packResult?.results) && Array.isArray(n.propertiesUsed)) {
															if (n.propertiesUsed.every((e => "string" == typeof e)))
																	return {
																			type: ee.X.SUCCESS,
																			value: n
																	};
															t = "propertiesUsed has non-string entries"
													} else
															t = "propertiesUsed and/or packResult.results annotations are not arrays";
											else
													t = `Response is missing packResult or propertiesUsed annotation. Has keys ${Object.keys(n)}`;
									else
											t = "Empty response (annotations missing)"
							} else if (e.hasError()) {
									const t = (0,
									h.Nn)(e.getError());
									return this._handleExecutionError(t)
							}
							return {
									type: ee.X.ERROR,
									errorType: de.ExecutionErrorType.UNKNOWN,
									reason: t
							}
					}
					async invokeAutocompleteFunction(e, t, n, o, {connectionId: a, dynamicUrl: s, metadataContext: i}) {
							const c = new de.InvokeMetadataFormulaRequest;
							c.setParameter(o),
							this.addContext(e, c),
							this._addConnection(a, c);
							const u = new de.ParameterAutocompleteMetadataRequest;
							c.setParameterAutocomplete(u),
							u.setParameterName(n);
							const l = u.getMetadataContextMap();
							for (const [e,t] of Object.entries(i))
									l.set(e, (0,
									ce.wv)(t));
							const {packId: d, packVersion: m, namespace: p, name: h} = t
								, y = p ? new de.Formula : new de.SyncFormula;
							y.setPackId(d),
							y.setPackVersion(m),
							y.setName(h),
							y instanceof de.Formula ? (p && y.setNamespace(p),
							u.setFormula(y)) : u.setSync(y),
							s && u.setDynamicUrl(s),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: d
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(c);
									return this._handleAutocompleteResult(e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, c)
							}
					}
					async invokeValidateParametersFunction(e, t, {connectionId: n, dynamicUrl: o, permissionSyncMode: a, metadataContext: s}) {
							const i = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, i),
							this._addConnection(n, i);
							const c = new de.ValidateParametersMetadataRequest;
							i.setValidateParameters(c);
							const u = c.getMetadataContextMap();
							for (const [e,t] of Object.entries(s))
									u.set(e, (0,
									ce.wv)(t));
							const {packId: l, packVersion: d, namespace: m, name: p} = t
								, h = m ? new de.Formula : new de.SyncFormula;
							h.setPackId(l),
							h.setPackVersion(d),
							h.setName(p),
							h instanceof de.Formula ? (m && h.setNamespace(m),
							c.setFormula(h)) : c.setSync(h),
							o && c.setDynamicUrl(o),
							a && c.setPermissionSyncMode(ce.Lm[a]),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: l
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(i);
									return this._handleValidateParametersResultOrStructuredError(e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, i)
							}
					}
					async invokeListSyncTableDynamicUrlsFunction(e, t, {connectionId: n, parentUrl: o, metadataContext: a, previousAttemptError: s, preserveInternalErrorMessages: i}) {
							const {packId: c, packVersion: u, name: l} = t
								, d = new de.SyncFormula;
							d.setPackId(c),
							d.setPackVersion(u),
							d.setName(l);
							const m = new de.ListSyncTableDynamicUrlsMetadataRequest;
							m.setFormula(d);
							const p = m.getMetadataContextMap();
							for (const [e,t] of Object.entries(a))
									p.set(e, (0,
									ce.wv)(t));
							const h = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, h),
							this._addConnection(n, h),
							h.setSyncTableUrls(m),
							o && h.setParameter(o),
							s && h.setPreviousAttemptError(me(s)),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: c
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(h);
									return this._handleAutocompleteResult(e, i)
							} catch (e) {
									return this.handleFormulaInvocationError(e, h)
							}
					}
					async invokeSearchSyncTableDynamicUrlsFunction(e, t, {connectionId: n, search: o, metadataContext: a}) {
							const {packId: s, packVersion: i, name: c} = t
								, u = new de.SyncFormula;
							u.setPackId(s),
							u.setPackVersion(i),
							u.setName(c);
							const l = new de.SearchSyncTableDynamicUrlsMetadataRequest;
							l.setFormula(u);
							const d = l.getMetadataContextMap();
							for (const [e,t] of Object.entries(a))
									d.set(e, (0,
									ce.wv)(t));
							const m = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, m),
							this._addConnection(n, m),
							m.setSearchSyncTableUrls(l),
							m.setParameter(o),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: s
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(m);
									return this._handleAutocompleteResult(e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, m)
							}
					}
					async invokeGetSyncTableSchemaFunction(e, t, {connectionId: n, dynamicUrl: o, metadataContext: a, previousAttemptError: s, preserveInternalErrorMessages: i}) {
							const c = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, c),
							this._addConnection(n, c);
							const {packId: u, packVersion: l, name: d} = t
								, m = new de.GetSyncTableSchemaMetadataRequest
								, p = m.getMetadataContextMap();
							for (const [e,t] of Object.entries(a))
									p.set(e, (0,
									ce.wv)(t));
							const h = new de.SyncFormula;
							h.setPackId(u),
							h.setPackVersion(l),
							h.setName(d),
							m.setFormula(h),
							o && m.setDynamicUrl(o),
							s && c.setPreviousAttemptError(me(s)),
							c.setSyncTableSchema(m),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: u
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(c);
									return await this.handleResult(c, e, void 0, i)
							} catch (e) {
									return this.handleFormulaInvocationError(e, c)
							}
					}
					async invokeGetSyncTableNameFunction(e, t, {connectionId: n, dynamicUrl: o, previousAttemptError: a, preserveInternalErrorMessages: s}) {
							const i = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, i),
							this._addConnection(n, i);
							const {packId: c, packVersion: u, name: l} = t
								, d = new de.GetDynamicSyncTableNameMetadataRequest
								, m = new de.SyncFormula;
							m.setPackId(c),
							m.setPackVersion(u),
							m.setName(l),
							d.setFormula(m),
							d.setDynamicUrl(o),
							i.setSyncTableName(d),
							a && i.setPreviousAttemptError(me(a)),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: c
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(i);
									return await this.handleResult(i, e, void 0, s)
							} catch (e) {
									return this.handleFormulaInvocationError(e, i)
							}
					}
					async invokeGetSyncTableDisplayUrlFunction(e, t, {connectionId: n, dynamicUrl: o}) {
							const a = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, a),
							this._addConnection(n, a);
							const {packId: s, packVersion: i, name: c} = t
								, u = new de.GetDynamicSyncTableDisplayUrlMetadataRequest
								, l = new de.SyncFormula;
							l.setPackId(s),
							l.setPackVersion(i),
							l.setName(c),
							u.setFormula(l),
							u.setDynamicUrl(o),
							a.setSyncTableDisplayUrl(u),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: s
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(a);
									return await this.handleResult(a, e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, a)
							}
					}
					async invokePostAuthSetupFunction(e, t, {connectionId: n}={}) {
							const o = new de.InvokeMetadataFormulaRequest;
							this.addContext(e, o),
							this._addConnection(n, o);
							const a = new de.PostAuthSetupMetadataRequest;
							o.setPostAuthSetup(a);
							const {packId: s, packVersion: i, namespace: c, name: u} = t
								, l = new de.Formula;
							l.setPackId(s),
							l.setPackVersion(i),
							l.setName(u),
							c && l.setNamespace(c),
							a.setFormula(l),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: s
							});
							try {
									const e = await this.dispatchInvokeMetadataFunction(o);
									return await this.handleResult(o, e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, o)
							}
					}
					async*invokeSqlQuery(e, t, n, {query: o, keyColumnList: a, database: i="", schema: c="", warehouse: u=""}, l, d) {
							const m = new de.InvokeSqlQueryRequest;
							this.addContext(e, m);
							const {packId: p, packVersion: h, name: y} = n
								, g = (new de.SyncFormula).setPackId(p).setPackVersion(h).setName(y);
							this._addConnection(l.connectionInfo?.connectionId, m),
							m.setQuery((new de.SqlQuery).setQuery(o).setKeyColumnsList(a).setDatabase(i).setSchema(c).setWarehouse(u).setFormula(g)).setRowLimit(d).setGridServerIdentifier(t),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: s.OW.Snowflake
							});
							try {
									const e = await this.dispatchInvokeSqlQuery(m);
									yield*this._handleQueryResult(e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, m)
							}
					}
					async*invokeBrainQuery(e, t, n, o, a, s) {
							const i = new de.InvokeBrainQueryRequest;
							this.addContext(e, i);
							const {packId: c, packVersion: u, name: l} = n
								, d = (new de.SyncFormula).setPackId(c).setPackVersion(u).setName(l);
							i.setQuery((new de.BrainQuery).setFormula(d).setSyncConnectionType(o).setSyncFiltersBindings(s ? JSON.stringify(s) : "")).setRowLimit(a).setGridServerIdentifier(t),
							this.emit(r.QCO.CalcServiceInvoked, {
									packId: c
							});
							try {
									const e = await this.dispatchInvokeBrainQuery(i);
									yield*this._handleQueryResult(e)
							} catch (e) {
									return this.handleFormulaInvocationError(e, i)
							}
					}
					async*_handleQueryResult(e) {
							for await(const t of e) {
									const e = t.getResultCase();
									switch (e) {
									case de.InvokeQueryResponse.ResultCase.PROGRESS:
											{
													const e = (0,
													h.Nn)(t.getProgress());
													yield{
															type: Z.Em.Progress,
															processedRowCount: e.getProcessedRowCount()
													};
													break
											}
									case de.InvokeQueryResponse.ResultCase.COMPLETE:
											{
													const e = (0,
													h.Nn)(t.getComplete())
														, n = e.getMetadata()
														, r = e.getQueryShardUrl()
														, o = e.getRowCount();
													if (n) {
															const e = [];
															for (const t of n.getColumnsList())
																	e.push({
																			name: t.getName(),
																			type: t.getType(),
																			nullable: t.getNullable(),
																			scale: t.getScale()
																	});
															yield{
																	metadata: {
																			queryId: n.getQueryid(),
																			queryProfileLink: n.getQueryprofilelink(),
																			columns: e
																	},
																	queryShardUrl: r,
																	rowCount: o,
																	type: Z.Em.Complete
															}
													}
													break
											}
									case de.InvokeQueryResponse.ResultCase.ERROR:
											const n = (0,
											h.Nn)(t.getError());
											yield{
													type: Z.Em.Error,
													error: this._handleExecutionError(n)
											};
											break;
									case de.InvokeQueryResponse.ResultCase.RESULT_NOT_SET:
											throw new Error("Unexpected empty result");
									default:
											(0,
											h.pL)(e)
									}
							}
					}
					setSource(e) {
							throw new Error("Not implemented")
					}
					get document() {
							return (0,
							h.Nn)(this._document, "Document not properly set for calculation client")
					}
					setDocument(e) {
							this._document = e,
							this._document.session.resolver.on(r.QCO.CalculationFinished, this.clearPacksRequestMaps, this)
					}
					getRequestMapForUpgrade() {
							return this._requestMap
					}
					snapshot() {
							return {
									requestMap: this._requestMap.snapshot()
							}
					}
					hydrate(e) {
							this._requestMap.hydrate(e.requestMap)
					}
					async dispatchInvokeSyncFunction(e) {
							throw new Error("Not implemented.")
					}
					async dispatchInvokeSyncUpdateFunction(e) {
							throw new Error("Not implemented.")
					}
					handleRowRemoved(e, t) {
							this._requestMap.handleRowRemoved(e, t)
					}
			}
			function fe(e, t) {
					return Array.isArray(e) ? e.map((e => fe(e, t))) : e
			}
			var ve = n(554088)
				, Ie = n(552359)
				, we = n(192840);
			function ke(e={}) {
					const t = e.items ? [...e.items] : [];
					let n, r, o, a = e.done ?? !1;
					function s() {
							r && (r.fulfill(),
							r = void 0)
					}
					function i() {
							n && (n.fulfill(),
							n = void 0)
					}
					return {
							get queueLength() {
									return t.length
							},
							get isDone() {
									return a
							},
							get hasError() {
									return Boolean(o)
							},
							produceItem(e) {
									t.push(e),
									s()
							},
							async waitForConsumer(e=0) {
									if (!(t.length <= e))
											return n ?? (n = we.v6()),
											n.promise
							},
							reject(e) {
									o || (o = e,
									s())
							},
							done() {
									(0,
									h.D8)(!a, "done() called multiple times"),
									a = !0,
									s()
							},
							stop() {
									i()
							},
							[Symbol.asyncIterator]: () => ({
									async next() {
											for (; ; ) {
													if (o)
															throw o;
													if (t.length > 0) {
															const e = t[0];
															return t.shift(),
															t.length || i(),
															{
																	done: !1,
																	value: e
															}
													}
													if (a)
															return {
																	done: !0,
																	value: void 0
															};
													(0,
													h.e4)(!r, "Should not have a waiter here; multiple accessors?"),
													r = we.v6(),
													await r.promise
											}
									}
							})
					}
			}
			var be = n(323844)
				, Ee = n(439983);
			class Ve extends Se {
					constructor(e, t, {invocationSource: n, transport: r}={}, o, a) {
							super({
									performModelPostProcessingPackFormulas: a,
									retryConfig: o
							}),
							this._client = function(e, t) {
									for (const n of Object.getOwnPropertyNames(Object.getPrototypeOf(e)))
											e[n] = "function" != typeof e[n] || t?.includes(n) ? e[n] : (0,
											Ee.promisify)(e[n]).bind(e);
									return e
							}(new Ie.w(e,{
									transport: r
							}), ["invokeSqlQuery", "invokeBrainQuery"]),
							this._source = n ?? de.InvocationSource.BROWSER,
							this._userId = t
					}
					_getSchemaVersion(e) {
							return e.schemaVersion
					}
					addContext(e, t) {
							super.addContext(e, t),
							(0,
							h.Nn)(t.getContext()).setPublishMode(this._getPublishMode())
					}
					_getMetadata() {
							return new ve.BrowserHeaders({
									[r.Qtr]: this._userId.toString()
							})
					}
					async dispatchInvokeFunction(e) {
							return this._source && e.setSource(this._source),
							this._client.invokeFormula(e, this._getMetadata())
					}
					async dispatchInvokeMetadataFunction(e) {
							return this._source && e.setSource(this._source),
							this._client.invokeMetadataFormula(e, this._getMetadata())
					}
					async dispatchInvokeSqlQuery(e) {
							return this._source && e.setSource(this._source),
							this._handleInvokeQueryResponse(this._client.invokeSqlQuery(e, this._getMetadata()))
					}
					async dispatchInvokeBrainQuery(e) {
							return this._source && e.setSource(this._source),
							this._handleInvokeQueryResponse(this._client.invokeBrainQuery(e, this._getMetadata()))
					}
					_handleInvokeQueryResponse(e) {
							const t = ke();
							return e.on("data", (e => {
									t.produceItem(e)
							}
							)),
							e.on("status", (e => {
									e.code !== be.grpc.Code.OK && t.reject(new Error(e.details))
							}
							)),
							e.on("end", (e => {
									e && e.code !== be.grpc.Code.OK && t.reject(new Error(e.details)),
									t.done()
							}
							)),
							t
					}
					_getPublishMode() {
							const e = this._document?.session;
							return e?.isPublishedViewMode ? de.PublishMode.VIEW : e?.isPublishedPlayMode ? de.PublishMode.PLAY : e?.isPublishedEditMode ? de.PublishMode.EDIT : de.PublishMode.NONE
					}
			}
	},
	552359: function(e, t, n) {
			"use strict";
			n(837954);
			var r = n(933764)
				, o = n(323844).grpc
				, a = function() {
					function e() {}
					return e.serviceName = "coda.CalcService",
					e
			}();
			function s(e, t) {
					this.serviceHost = e,
					this.options = t || {}
			}
			a.InvokeFormula = {
					methodName: "InvokeFormula",
					service: a,
					requestStream: !1,
					responseStream: !1,
					requestType: r.InvokeFormulaRequest,
					responseType: r.InvokeFormulaResponse
			},
			a.InvokeMetadataFormula = {
					methodName: "InvokeMetadataFormula",
					service: a,
					requestStream: !1,
					responseStream: !1,
					requestType: r.InvokeMetadataFormulaRequest,
					responseType: r.InvokeFormulaResponse
			},
			a.InvokeSqlQuery = {
					methodName: "InvokeSqlQuery",
					service: a,
					requestStream: !1,
					responseStream: !0,
					requestType: r.InvokeSqlQueryRequest,
					responseType: r.InvokeQueryResponse
			},
			a.InvokeBrainQuery = {
					methodName: "InvokeBrainQuery",
					service: a,
					requestStream: !1,
					responseStream: !0,
					requestType: r.InvokeBrainQueryRequest,
					responseType: r.InvokeQueryResponse
			},
			s.prototype.invokeFormula = function(e, t, n) {
					2 === arguments.length && (n = arguments[1]);
					var r = o.unary(a.InvokeFormula, {
							request: e,
							host: this.serviceHost,
							metadata: t,
							transport: this.options.transport,
							debug: this.options.debug,
							onEnd: function(e) {
									if (n)
											if (e.status !== o.Code.OK) {
													var t = new Error(e.statusMessage);
													t.code = e.status,
													t.metadata = e.trailers,
													n(t, null)
											} else
													n(null, e.message)
							}
					});
					return {
							cancel: function() {
									n = null,
									r.close()
							}
					}
			}
			,
			s.prototype.invokeMetadataFormula = function(e, t, n) {
					2 === arguments.length && (n = arguments[1]);
					var r = o.unary(a.InvokeMetadataFormula, {
							request: e,
							host: this.serviceHost,
							metadata: t,
							transport: this.options.transport,
							debug: this.options.debug,
							onEnd: function(e) {
									if (n)
											if (e.status !== o.Code.OK) {
													var t = new Error(e.statusMessage);
													t.code = e.status,
													t.metadata = e.trailers,
													n(t, null)
											} else
													n(null, e.message)
							}
					});
					return {
							cancel: function() {
									n = null,
									r.close()
							}
					}
			}
			,
			s.prototype.invokeSqlQuery = function(e, t) {
					var n = {
							data: [],
							end: [],
							status: []
					}
						, r = o.invoke(a.InvokeSqlQuery, {
							request: e,
							host: this.serviceHost,
							metadata: t,
							transport: this.options.transport,
							debug: this.options.debug,
							onMessage: function(e) {
									n.data.forEach((function(t) {
											t(e)
									}
									))
							},
							onEnd: function(e, t, r) {
									n.status.forEach((function(n) {
											n({
													code: e,
													details: t,
													metadata: r
											})
									}
									)),
									n.end.forEach((function(n) {
											n({
													code: e,
													details: t,
													metadata: r
											})
									}
									)),
									n = null
							}
					});
					return {
							on: function(e, t) {
									return n[e].push(t),
									this
							},
							cancel: function() {
									n = null,
									r.close()
							}
					}
			}
			,
			s.prototype.invokeBrainQuery = function(e, t) {
					var n = {
							data: [],
							end: [],
							status: []
					}
						, r = o.invoke(a.InvokeBrainQuery, {
							request: e,
							host: this.serviceHost,
							metadata: t,
							transport: this.options.transport,
							debug: this.options.debug,
							onMessage: function(e) {
									n.data.forEach((function(t) {
											t(e)
									}
									))
							},
							onEnd: function(e, t, r) {
									n.status.forEach((function(n) {
											n({
													code: e,
													details: t,
													metadata: r
											})
									}
									)),
									n.end.forEach((function(n) {
											n({
													code: e,
													details: t,
													metadata: r
											})
									}
									)),
									n = null
							}
					});
					return {
							on: function(e, t) {
									return n[e].push(t),
									this
							},
							cancel: function() {
									n = null,
									r.close()
							}
					}
			}
			,
			t.w = s
	},
	837954: function(e, t, n) {
			"use strict";
			var r = n(972037)
				, o = (Function("return this")(),
			n(933764));
			r.object.extend(proto, o)
	},
	446806: function() {},
	738730: function() {},
	989952: function() {},
	68560: function() {},
	196134: function() {},
	511724: function() {},
	533475: function() {},
	225572: function() {},
	927189: function() {},
	716764: function() {}
}]);
//# sourceMappingURL=https://cdn.coda.io/sourcemaps/calc_client.7527bdfbfcab7b0c9da1.chunk.js.map
