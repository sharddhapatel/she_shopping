/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() { return e.call(this) }, get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a) { return n.each(this, a) }, map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(e.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === n.type(a) }, isArray: Array.isArray, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isPlainObject: function(a) { var b; if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1; for (b in a); return void 0 === b || k.call(a, b) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function(a) { var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, d = 0; if (s(a)) { for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : h.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, g = 0,
                h = []; if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e); return f.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, f; return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() { return a.apply(b || this, d.concat(e.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++, f) : void 0 }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) { var b = !!a && "length" in a && a.length,
            c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }
    var t = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) { for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function fa(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) }

        function ga() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ha(a) { return a[u] = !0, a }

        function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function ka(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function na(a) { return ha(function(b) { return b = +b, ha(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) { var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ka(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function(a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0 }, fa.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fa.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ha(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1")); return d[u] ? ha(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function(a) { return function(b) { return fa(a, b).length > 0 } }), contains: ha(function(a) { return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function(a) { return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return a.disabled === !1 }, disabled: function(a) { return a.disabled === !0 }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return Y.test(a.nodeName) }, input: function(a) { return X.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function() { return [0] }), last: na(function(a, b) { return [b - 1] }), eq: na(function(a, b, c) { return [0 > c ? c + b : c] }), even: na(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: na(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) };

        function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function ra(a, b, c) { var d = b.dir,
                e = c && "parentNode" === d,
                f = x++; return b.first ? function(b, c, f) { while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } }

        function sa(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c }

        function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function va(a, b, c, d, e, f) { return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) }

        function wa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) { return a === b }, h, !0), l = ra(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) }
                    m.push(c) }
            return sa(m) }

        function xa(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u) }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ha(f) : f } return h = fa.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a } return f }, i = fa.select = function(a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) { return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && n(a).is(c)) break;
                    d.push(a) }
            return d },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) } return n.grep(a, function(a) { return h.call(b, a) > -1 !== c }) }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) { var b, c = this.length,
                d = [],
                e = this; if ("string" != typeof a) return this.pushStack(n(a).filter(function() { for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0 })); for (b = 0; c > b; b++) n.find(a, e[b], d); return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d }, filter: function(a) { return this.pushStack(z(this, a || [], !1)) }, not: function(a) { return this.pushStack(z(this, a || [], !0)) }, is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({ has: function(a) { var b = n(a, this),
                c = b.length; return this.filter(function() { for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function F(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return F(a, "nextSibling") }, prev: function(a) { return F(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return a.contentDocument || n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e) } });
    var G = /\S+/g;

    function H(a) { var b = {}; return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? H(a) : n.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j }, n.extend({ Deferred: function(a) { var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return n.Deferred(function(c) { n.each(b, function(b, f) { var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() { var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? n.extend(a, d) : d } },
                e = {}; return d.pipe = d.then, n.each(b, function(a, f) { var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k; if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } });
    var I;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } });

    function J() { d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready() }
    n.ready.promise = function(b) { return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b) }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) K(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        L = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function M() { this.expando = n.expando + M.uid++ }
    M.uid = 1, M.prototype = { register: function(a, b) { var c = b || {}; return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando] }, cache: function(a) { if (!L(a)) return {}; var b = a[this.expando]; return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b] }, access: function(a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d, e, f = a[this.expando]; if (void 0 !== f) { if (void 0 === b) this.register(a);
                else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length; while (c--) delete f[d[c]] }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !n.isEmptyObject(b) } };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({ hasData: function(a) { return O.hasData(a) || N.hasData(a) }, data: function(a, b, c) { return O.access(a, b, c) }, removeData: function(a, b) { O.remove(a, b) }, _data: function(a, b, c) { return N.access(a, b, c) }, _removeData: function(a, b) { N.remove(a, b) } }), n.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                g = f && f.attributes; if (void 0 === a) { if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { O.set(this, a) }) : K(this, function(b) { var c, d; if (f && void 0 === b) { if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c; if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c; if (c = R(f, d, void 0), void 0 !== c) return c } else d = n.camelCase(a), this.each(function() { var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { O.remove(this, a) }) } }), n.extend({ queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx"; var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function() { N.remove(a, [b + "queue", c]) }) }) } }), n.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function W(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c }

    function aa(a, b) { for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval")) }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0; while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) { k = 0; while (f = g[k++]) Z.test(f.type || "") && c.push(f) } return l }! function() { var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() { return !0 }

    function ha() { return !1 }

    function ia() { try { return d.activeElement } catch (a) {} }

    function ja(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ja(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) }) }
    n.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) { return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(G) || [""], j = b.length; while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0) } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a); if (r && (i = r.events)) { b = (b || "").match(G) || [""], j = b.length; while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]) } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events") } }, dispatch: function(a) { a = n.event.fix(a); var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, e, f, g = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, fix: function(a) { if (a[n.expando]) return a; var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== ia() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === ia() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, n.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, n.Event = function(a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), n.fn.extend({ on: function(a, b, c, d) { return ja(this, a, b, c, d) }, one: function(a, b, c, d) { return ja(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() { n.event.remove(this, a, c, b) }) } });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function qa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function ra(a) { var b = na.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function sa(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]) }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i)) } }

    function ta(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function ua(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) { var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d) }); if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) { for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m); if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, ""))) } return a }

    function va(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({ htmlPrefilter: function(a) { return a.replace(ka, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a); if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]); if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) { if (b = c[N.expando]) { if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0 }
                    c[O.expando] && (c[O.expando] = void 0) } } }), n.fn.extend({ domManip: ua, detach: function(a) { return va(this, a, !0) }, remove: function(a) { return va(this, a) }, text: function(a) { return K(this, function(a) { return void 0 === a ? n.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return ua(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return ua(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = pa(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) }, html: function(a) { return K(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return ua(this, arguments, function(b) { var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get()); return this.pushStack(d) } });
    var wa, xa = { HTML: "block", BODY: "block" };

    function ya(a, b) { var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display"); return c.detach(), d }

    function za(a) { var b = d,
            c = xa[a]; return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) },
        Da = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e },
        Ea = d.documentElement;
    ! function() { var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div"); if (h.style) { h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() { h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g); var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g) }
            n.extend(l, { pixelPosition: function() { return i(), b }, boxSizingReliable: function() { return null == c && i(), c }, pixelMarginRight: function() { return null == c && i(), e }, reliableMarginLeft: function() { return null == c && i(), f }, reliableMarginRight: function() { var b, c = h.appendChild(d.createElement("div")); return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b } }) } }();

    function Fa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g }

    function Ga(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = { position: "absolute", visibility: "hidden", display: "block" },
        Ja = { letterSpacing: "0", fontWeight: "400" },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) { if (a in La) return a; var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length; while (c--)
            if (a = Ka[c] + b, a in La) return a }

    function Na(a, b, c) { var d = T.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Oa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g }

    function Pa(a, b, c) { var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px" }

    function Qa(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }
    n.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Fa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b),
                    i = a.style; return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) { return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() { return Pa(a, b, d) }) : Pa(a, b, d) : void 0 }, set: function(a, c, d) { var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f); return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g) } } }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) { return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" : void 0 }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) { return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Aa.test(a) || (n.cssHooks[a + b].set = Na) }), n.fn.extend({ css: function(a, b) { return K(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (n.isArray(b)) { for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return Qa(this, !0) }, hide: function() { return Qa(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { V(this) ? n(this).show() : n(this).hide() }) } });

    function Ra(a, b, c, d, e) { return new Ra.prototype.init(a, b, c, d, e) }
    n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = Ra.propHooks[this.prop]; return a && a.get ? a.get(this) : Ra.propHooks._default.get(this) }, run: function(a) { var b, c = Ra.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() { return a.setTimeout(function() { Sa = void 0 }), Sa = n.now() }

    function Xa(a, b) { var c, d = 0,
            e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

    function Ya(a, b, c) { for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function Za(a, b, c) { var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })); for (d in b)
            if (e = b[d], Ua.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0 }
                m[d] = q && q[d] || n.style(a, d) } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else { q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() { n(a).hide() }), l.done(function() { var b;
                N.remove(a, "fxshow"); for (b in m) n.style(a, b, m[b]) }); for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function $a(a, b) { var c, d, e, f, g; for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function _a(a, b, c) { var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(_a, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return W(c.elem, a, T.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b) }, prefilters: [Za], prefilter: function(a, b) { b ? _a.prefilters.unshift(a) : _a.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() { var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || n.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) { var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e) } }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() { var a, b = 0,
                c = n.timers; for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(Ta), Ta = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({ attr: function(a, b) { return K(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d, e = 0,
                f = b && b.match(G); if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) } }), ab = { set: function(a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) { var e, f; return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e } });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return K(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[n.propFix[a] || a] }) } }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1 } } },
        propFix: { "for": "htmlFor", "class": "className" }
    }), l.optSelected || (n.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this });
    var eb = /[\t\r\n\f]/g;

    function fb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    n.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, fb(this))) }); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, fb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, fb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1 } });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(hb, " ") } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) { var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length; while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, { trigger: function(b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) { if (!f && !o.noBubble && !n.isWindow(e)) { for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a) }
                g = 0; while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result } }, simulate: function(a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b) } }), n.fn.extend({ trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b)) } } });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) { return JSON.parse(a + "") }, n.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(G) || []; if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function xb(a, b, c, d) { var e = {},
            f = a === tb;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function yb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a }

    function zb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e) }
            f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Ab(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a) }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === v) { if (!h) { h = {}; while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === v ? g : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return v || (a = u[c] = u[c] || a, t[a] = b), this }, overrideMimeType: function(a) { return v || (m.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this }, abort: function(a) { var b = a || w; return e && e.abort(b), z(0, b), this } }; if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) { j = d.createElement("a"); try { j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host } catch (y) { m.crossDomain = !0 } } if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]); for (l in m.headers) x.setRequestHeader(l, m.headers[l]); if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort"; for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]); if (e = xb(tb, m, c, x)) { if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() { x.abort("timeout") }, m.timeout)); try { v = 1, e.send(t, z) } catch (y) { if (!(2 > v)) throw y;
                    z(-1, y) } } else z(-1, "No Transport");

            function z(b, c, d, h) { var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop"))) } return x }, getJSON: function(a, b, c) { return n.get(a, b, c, "json") }, getScript: function(a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function(a) { var b; return n.isFunction(a) ? this.each(function(b) { n(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function(a) { return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function(a) { return !n.expr.filters.visible(a) }, n.expr.filters.visible = function(a) { return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0 };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function(b, e) { c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) { var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Gb(c, a[c], b, e); return d.join("&").replace(Bb, "+") }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(Db, "\r\n") } }) : { name: b.name, value: c.replace(Db, "\r\n") } }).get() } }), n.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Hb = { 0: 200, 1223: 204 },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) { var c, d; return l.cors || Ib && !b.crossDomain ? { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } : void 0 }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Jb.pop() || n.expando + "_" + kb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || d; var e = x.exec(a),
            f = !c && []; return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) { if ("string" != typeof a && Lb) return Lb.apply(this, arguments); var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function Mb(a) { return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    n.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) }); var b, c, d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument; if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function() { if (this[0]) { var a, b, c = this[0],
                    d = { top: 0, left: 0 }; return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === n.css(a, "position")) a = a.offsetParent; return a || Ea }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b;
        n.fn[a] = function(d) { return K(this, function(a, d, e) { var f = Mb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) { return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { n.fn[d] = function(d, e) { var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border"); return K(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }, size: function() { return this.length } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) { return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n }, b || (a.jQuery = a.$ = n), n
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1 }
    a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) {
    "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }
    b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) })
}(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);



/*!
 * enquire.min.js
 */
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
! function(e, t, n) { var i = window.matchMedia; "undefined" != typeof module && module.exports ? module.exports = n(i) : "function" == typeof define && define.amd ? define(function() { return t[e] = n(i) }) : t[e] = n(i) }("enquire", this, function(e) { "use strict";

    function t(e, t) { var n, i = 0,
            o = e.length; for (i; o > i && (n = t(e[i], i), n !== !1); i++); }

    function n(e) { return "[object Array]" === Object.prototype.toString.apply(e) }

    function i(e) { return "function" == typeof e }

    function o(e) { this.options = e, !e.deferSetup && this.setup() }

    function r(t, n) { this.query = t, this.isUnconditional = n, this.handlers = [], this.mql = e(t); var i = this;
        this.listener = function(e) { i.mql = e, i.assess() }, this.mql.addListener(this.listener) }

    function s() { if (!e) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !e("only all").matches } return o.prototype = { setup: function() { this.options.setup && this.options.setup(), this.initialised = !0 }, on: function() {!this.initialised && this.setup(), this.options.match && this.options.match() }, off: function() { this.options.unmatch && this.options.unmatch() }, destroy: function() { this.options.destroy ? this.options.destroy() : this.off() }, equals: function(e) { return this.options === e || this.options.match === e } }, r.prototype = { addHandler: function(e) { var t = new o(e);
            this.handlers.push(t), this.matches() && t.on() }, removeHandler: function(e) { var n = this.handlers;
            t(n, function(t, i) { return t.equals(e) ? (t.destroy(), !n.splice(i, 1)) : void 0 }) }, matches: function() { return this.mql.matches || this.isUnconditional }, clear: function() { t(this.handlers, function(e) { e.destroy() }), this.mql.removeListener(this.listener), this.handlers.length = 0 }, assess: function() { var e = this.matches() ? "on" : "off";
            t(this.handlers, function(t) { t[e]() }) } }, s.prototype = { register: function(e, o, s) { var a = this.queries,
                l = s && this.browserIsIncapable; return a[e] || (a[e] = new r(e, l)), i(o) && (o = { match: o }), n(o) || (o = [o]), t(o, function(t) { i(t) && (t = { match: t }), a[e].addHandler(t) }), this }, unregister: function(e, t) { var n = this.queries[e]; return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this } }, new s }),
/*!
 * jquery.min.js
 */

/* jquery.zoom.min.js
 */
/*!
  Zoom 1.7.15
  license: MIT
  http://www.jacklmoore.com/zoom
*/
function(e) { var t = { url: !1, callback: !1, target: !1, duration: 120, on: "mouseover", touch: !0, onZoomIn: !1, onZoomOut: !1, magnify: 1 };
    e.zoom = function(t, n, i, o) { var r, s, a, l, u, c, d, p = e(t),
            f = p.css("position"),
            h = e(n); return p.css("position", /(absolute|fixed)/.test(f) ? f : "relative"), p.css("overflow", "hidden"), i.style.width = i.style.height = "", e(i).addClass("zoomImg").css({ position: "absolute", top: 0, left: 0, opacity: 0, width: i.width * o, height: i.height * o, border: "none", maxWidth: "none", maxHeight: "none" }).appendTo(t), { init: function() { s = p.outerWidth(), r = p.outerHeight(), n === p[0] ? (l = s, a = r) : (l = h.outerWidth(), a = h.outerHeight()), u = (i.width - s) / l, c = (i.height - r) / a, d = h.offset() }, move: function(e) { var t = e.pageX - d.left,
                    n = e.pageY - d.top;
                n = Math.max(Math.min(n, a), 0), t = Math.max(Math.min(t, l), 0), i.style.left = t * -u + "px", i.style.top = n * -c + "px" } } }, e.fn.zoom = function(n) { return this.each(function() { var i, o = e.extend({}, t, n || {}),
                r = o.target || this,
                s = this,
                a = e(s),
                l = e(r),
                u = document.createElement("img"),
                c = e(u),
                d = "mousemove.zoom",
                p = !1,
                f = !1;
            (o.url || (i = a.find("img"), i[0] && (o.url = i.data("src") || i.attr("src")), o.url)) && (! function() { var e = l.css("position"),
                    t = l.css("overflow");
                a.one("zoom.destroy", function() { a.off(".zoom"), l.css("position", e), l.css("overflow", t), c.remove() }) }(), u.onload = function() {
                function t(t) { i.init(), i.move(t), c.stop().fadeTo(e.support.opacity ? o.duration : 0, 1, !!e.isFunction(o.onZoomIn) && o.onZoomIn.call(u)) }

                function n() { c.stop().fadeTo(o.duration, 0, !!e.isFunction(o.onZoomOut) && o.onZoomOut.call(u)) } var i = e.zoom(r, s, u, o.magnify); "grab" === o.on ? a.on("mousedown.zoom", function(o) { 1 === o.which && (e(document).one("mouseup.zoom", function() { n(), e(document).off(d, i.move) }), t(o), e(document).on(d, i.move), o.preventDefault()) }) : "click" === o.on ? a.on("click.zoom", function(o) { return p ? void 0 : (p = !0, t(o), e(document).on(d, i.move), e(document).one("click.zoom", function() { n(), p = !1, e(document).off(d, i.move) }), !1) }) : "toggle" === o.on ? a.on("click.zoom", function(e) { p ? n() : t(e), p = !p }) : "mouseover" === o.on && (i.init(), a.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(d, i.move)), o.touch && a.on("touchstart.zoom", function(e) { e.preventDefault(), f ? (f = !1, n()) : (f = !0, t(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])) }).on("touchmove.zoom", function(e) { e.preventDefault(), i.move(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]) }).on("touchend.zoom", function(e) { e.preventDefault(), f && (f = !1, n()) }), e.isFunction(o.callback) && o.callback.call(u) }, u.src = o.url) }) }, e.fn.zoom.defaults = t }(window.jQuery),
function() {
    function e(e, t) { for (var n = -1, i = t.length, o = e.length; ++n < i;) e[o + n] = t[n]; return e }

    function t(e, t, n) { for (var i = -1, o = e.length; ++i < o;) { var r = e[i],
                s = t(r); if (null != s && (a === le ? s === s : n(s, a))) var a = s,
                l = r } return l }

    function n(e, t, n) { var i; return n(e, function(e, n, o) { return t(e, n, o) ? (i = e, !1) : void 0 }), i }

    function i(e, t, n, i, o) { return o(e, function(e, o, r) { n = i ? (i = !1, e) : t(n, e, o, r) }), n }

    function o(e, t) { return T(t, function(t) { return e[t] }) }

    function r(e) { return e && e.Object === Object ? e : null }

    function s(e) { return fe[e] }

    function a(e) { var t = !1; if (null != e && "function" != typeof e.toString) try { t = !!(e + "") } catch (e) {}
        return t }

    function l(e, t) { return e = "number" == typeof e || pe.test(e) ? +e : -1, e > -1 && 0 == e % 1 && (null == t ? 9007199254740991 : t) > e }

    function u(e) { if (Z(e) && !Re(e)) { if (e instanceof c) return e; if (Ce.call(e, "__wrapped__")) { var t = new c(e.__wrapped__, e.__chain__); return t.__actions__ = A(e.__actions__), t } } return new c(e) }

    function c(e, t) { this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t }

    function d(e, t, n, i) { var o; return (o = e === le) || (o = Te[n], o = (e === o || e !== e && o !== o) && !Ce.call(i, n)), o ? t : e }

    function p(e) { return J(e) ? Ne(e) : {} }

    function f(e, t, n) { if ("function" != typeof e) throw new TypeError("Expected a function"); return setTimeout(function() { e.apply(le, n) }, t) }

    function h(e, t) { var n = !0; return Pe(e, function(e, i, o) { return n = !!t(e, i, o) }), n }

    function v(e, t) { var n = []; return Pe(e, function(e, i, o) { t(e, i, o) && n.push(e) }), n }

    function g(t, n, i, o) { o || (o = []); for (var r = -1, s = t.length; ++r < s;) { var a = t[r];
            n > 0 && Z(a) && V(a) && (i || Re(a) || Y(a)) ? n > 1 ? g(a, n - 1, i, o) : e(o, a) : i || (o[o.length] = a) } return o }

    function m(e, t) { return e && Le(e, t, ie) }

    function y(e, t) { return v(t, function(t) { return G(e[t]) }) }

    function w(e, t, n, i, o) { return e === t || (null == e || null == t || !J(e) && !Z(t) ? e !== e && t !== t : b(e, t, w, n, i, o)) }

    function b(e, t, n, i, o, r) { var s = Re(e),
            l = Re(t),
            u = "[object Array]",
            c = "[object Array]";
        s || (u = $e.call(e), "[object Arguments]" == u && (u = "[object Object]")), l || (c = $e.call(t), "[object Arguments]" == c && (c = "[object Object]")); var d = "[object Object]" == u && !a(e),
            l = "[object Object]" == c && !a(t); return !(c = u == c) || s || d ? 2 & o || (u = d && Ce.call(e, "__wrapped__"), l = l && Ce.call(t, "__wrapped__"), !u && !l) ? !!c && (r || (r = []), (u = M(r, function(t) { return t[0] === e })) && u[1] ? u[1] == t : (r.push([e, t]), t = (s ? P : _)(e, t, n, i, o, r), r.pop(), t)) : n(u ? e.value() : e, l ? t.value() : t, i, o, r) : L(e, t, u) }

    function x(e) { var t = typeof e; return "function" == t ? e : null == e ? se : ("object" == t ? C : $)(e) }

    function k(e) { e = null == e ? e : Object(e); var t, n = []; for (t in e) n.push(t); return n }

    function T(e, t) { var n = -1,
            i = V(e) ? Array(e.length) : []; return Pe(e, function(e, o, r) { i[++n] = t(e, o, r) }), i }

    function C(e) { var t = ie(e); return function(n) { var i = t.length; if (null == n) return !i; for (n = Object(n); i--;) { var o = t[i]; if (!(o in n && w(e[o], n[o], le, 3))) return !1 } return !0 } }

    function S(e, t) { return e = Object(e), W(t, function(t, n) { return n in e && (t[n] = e[n]), t }, {}) }

    function $(e) { return function(t) { return null == t ? le : t[e] } }

    function E(e, t, n) { var i = -1,
            o = e.length; for (0 > t && (t = -t > o ? 0 : o + t), n = n > o ? o : n, 0 > n && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0, n = Array(o); ++i < o;) n[i] = e[i + t]; return n }

    function A(e) { return E(e, 0, e.length) }

    function j(e, t) { var n; return Pe(e, function(e, i, o) { return n = t(e, i, o), !n }), !!n }

    function N(t, n) { return W(n, function(t, n) { return n.func.apply(n.thisArg, e([t], n.args)) }, t) }

    function D(e, t, n, i) { n || (n = {}); for (var o = -1, r = t.length; ++o < r;) { var s = t[o],
                a = i ? i(n[s], e[s], s, n, e) : e[s],
                l = n,
                u = l[s];
            Ce.call(l, s) && (u === a || u !== u && a !== a) && (a !== le || s in l) || (l[s] = a) } return n }

    function O(e) { return U(function(t, n) { var i = -1,
                o = n.length,
                r = o > 1 ? n[o - 1] : le,
                r = "function" == typeof r ? (o--, r) : le; for (t = Object(t); ++i < o;) { var s = n[i];
                s && e(t, s, i, r) } return t }) }

    function H(e) { return function() { var t = arguments,
                n = p(e.prototype),
                t = e.apply(n, t); return J(t) ? t : n } }

    function q(e, t, n) {
        function i() { for (var r = -1, s = arguments.length, a = -1, l = n.length, u = Array(l + s), c = this && this !== xe && this instanceof i ? o : e; ++a < l;) u[a] = n[a]; for (; s--;) u[a++] = arguments[++r]; return c.apply(t, u) } if ("function" != typeof e) throw new TypeError("Expected a function"); var o = H(e); return i }

    function P(e, t, n, i, o, r) { var s = -1,
            a = 1 & o,
            l = e.length,
            u = t.length; if (l != u && !(2 & o && u > l)) return !1; for (u = !0; ++s < l;) { var c = e[s],
                d = t[s]; if (void 0 !== le) { u = !1; break } if (a) { if (!j(t, function(e) { return c === e || n(c, e, i, o, r) })) { u = !1; break } } else if (c !== d && !n(c, d, i, o, r)) { u = !1; break } } return u }

    function L(e, t, n) { switch (n) {
            case "[object Boolean]":
            case "[object Date]":
                return +e == +t;
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object Number]":
                return e != +e ? t != +t : e == +t;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "" } return !1 }

    function _(e, t, n, i, o, r) { var s = 2 & o,
            a = ie(e),
            l = a.length,
            u = ie(t).length; if (l != u && !s) return !1; for (var c = l; c--;) { var d = a[c]; if (!(s ? d in t : Ce.call(t, d))) return !1 } for (u = !0; ++c < l;) { var d = a[c],
                p = e[d],
                f = t[d]; if (void 0 !== le || p !== f && !n(p, f, i, o, r)) { u = !1; break }
            s || (s = "constructor" == d) } return u && !s && (n = e.constructor, i = t.constructor, n != i && "constructor" in e && "constructor" in t && !("function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i) && (u = !1)), u }

    function z(e) { var t = e ? e.length : le; if (Q(t) && (Re(e) || ee(e) || Y(e))) { e = String; for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
            t = i } else t = null; return t }

    function I(e) { var t = e && e.constructor,
            t = G(t) && t.prototype || Te; return e === t }

    function F(e) { return e ? e[0] : le }

    function M(e, t) { return n(e, x(t), Pe) }

    function R(e, t) { return Pe(e, "function" == typeof t ? t : se) }

    function W(e, t, n) { return i(e, x(t), n, 3 > arguments.length, Pe) }

    function B(e, t) { var n; if ("function" != typeof t) throw new TypeError("Expected a function"); return e = We(e),
            function() { return 0 < --e && (n = t.apply(this, arguments)), 1 >= e && (t = le), n } }

    function U(e) { var t; if ("function" != typeof e) throw new TypeError("Expected a function"); return t = qe(t === le ? e.length - 1 : We(t), 0),
            function() { for (var n = arguments, i = -1, o = qe(n.length - t, 0), r = Array(o); ++i < o;) r[i] = n[t + i]; for (o = Array(t + 1), i = -1; ++i < t;) o[i] = n[i]; return o[t] = r, e.apply(this, o) } }

    function X(e, t) { return e > t }

    function Y(e) { return Z(e) && V(e) && Ce.call(e, "callee") && (!De.call(e, "callee") || "[object Arguments]" == $e.call(e)) }

    function V(e) { return null != e && !("function" == typeof e && G(e)) && Q(_e(e)) }

    function G(e) { return e = J(e) ? $e.call(e) : "", "[object Function]" == e || "[object GeneratorFunction]" == e }

    function Q(e) { return "number" == typeof e && e > -1 && 0 == e % 1 && 9007199254740991 >= e }

    function J(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) }

    function Z(e) { return !!e && "object" == typeof e }

    function K(e) { return "number" == typeof e || Z(e) && "[object Number]" == $e.call(e) }

    function ee(e) { return "string" == typeof e || !Re(e) && Z(e) && "[object String]" == $e.call(e) }

    function te(e, t) { return t > e }

    function ne(e) { return "string" == typeof e ? e : null == e ? "" : e + "" }

    function ie(e) { var t = I(e); if (!t && !V(e)) return He(Object(e)); var n, i = z(e),
            o = !!i,
            i = i || [],
            r = i.length; for (n in e) !Ce.call(e, n) || o && ("length" == n || l(n, r)) || t && "constructor" == n || i.push(n); return i }

    function oe(e) { for (var t = -1, n = I(e), i = k(e), o = i.length, r = z(e), s = !!r, r = r || [], a = r.length; ++t < o;) { var u = i[t];
            s && ("length" == u || l(u, a)) || "constructor" == u && (n || !Ce.call(e, u)) || r.push(u) } return r }

    function re(e) { return e ? o(e, ie(e)) : [] }

    function se(e) { return e }

    function ae(t, n, i) { var o = ie(n),
            r = y(n, o);
        null != i || J(n) && (r.length || !o.length) || (i = n, n = t, t = this, r = y(n, ie(n))); var s = !(J(i) && "chain" in i) || i.chain,
            a = G(t); return Pe(r, function(i) { var o = n[i];
            t[i] = o, a && (t.prototype[i] = function() { var n = this.__chain__; if (s || n) { var i = t(this.__wrapped__); return (i.__actions__ = A(this.__actions__)).push({ func: o, args: arguments, thisArg: t }), i.__chain__ = n, i } return o.apply(t, e([this.value()], arguments)) }) }), t } var le, ue = 1 / 0,
        ce = /[&<>"'`]/g,
        de = RegExp(ce.source),
        pe = /^(?:0|[1-9]\d*)$/,
        fe = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" },
        he = { function: !0, object: !0 },
        ve = he[typeof exports] && exports && !exports.nodeType ? exports : le,
        ge = he[typeof module] && module && !module.nodeType ? module : le,
        me = ge && ge.exports === ve ? ve : le,
        ye = r(he[typeof self] && self),
        we = r(he[typeof window] && window),
        be = r(he[typeof this] && this),
        xe = r(ve && ge && "object" == typeof global && global) || we !== (be && be.window) && we || ye || be || Function("return this")(),
        ke = Array.prototype,
        Te = Object.prototype,
        Ce = Te.hasOwnProperty,
        Se = 0,
        $e = Te.toString,
        Ee = xe._,
        Ae = xe.Reflect,
        je = Ae ? Ae.f : le,
        Ne = Object.create,
        De = Te.propertyIsEnumerable,
        Oe = xe.isFinite,
        He = Object.keys,
        qe = Math.max,
        Pe = function(e, t) { return function(n, i) { if (null == n) return n; if (!V(n)) return e(n, i); for (var o = n.length, r = t ? o : -1, s = Object(n);
                    (t ? r-- : ++r < o) && !1 !== i(s[r], r, s);); return n } }(m),
        Le = function(e) { return function(t, n, i) { var o = -1,
                    r = Object(t);
                i = i(t); for (var s = i.length; s--;) { var a = i[e ? s : ++o]; if (!1 === n(r[a], a, r)) break } return t } }();
    je && !De.call({ valueOf: 1 }, "valueOf") && (k = function(e) { e = je(e); for (var t, n = []; !(t = e.next()).done;) n.push(t.value); return n }); var _e = $("length"),
        ze = U(function(t, n) { return Re(t) || (t = null == t ? [] : [Object(t)]), g(n, 1), e(A(t), re) }),
        Ie = U(function(e, t, n) { return q(e, t, n) }),
        Fe = U(function(e, t) { return f(e, 1, t) }),
        Me = U(function(e, t, n) { return f(e, Be(t) || 0, n) }),
        Re = Array.isArray,
        We = Number,
        Be = Number,
        Ue = O(function(e, t) { D(t, ie(t), e) }),
        Xe = O(function(e, t) { D(t, oe(t), e) }),
        Ye = O(function(e, t, n, i) { D(t, oe(t), e, i) }),
        Ve = U(function(e) { return e.push(le, d), Ye.apply(le, e) }),
        Ge = U(function(e, t) { return null == e ? {} : S(e, g(t, 1)) }),
        Qe = x;
    c.prototype = p(u.prototype), c.prototype.constructor = c, u.assignIn = Xe, u.before = B, u.bind = Ie, u.chain = function(e) { return e = u(e), e.__chain__ = !0, e }, u.compact = function(e) { return v(e, Boolean) }, u.concat = ze, u.create = function(e, t) { var n = p(e); return t ? Ue(n, t) : n }, u.defaults = Ve, u.defer = Fe, u.delay = Me, u.filter = function(e, t) { return v(e, x(t)) }, u.flatten = function(e) { return e && e.length ? g(e, 1) : [] }, u.flattenDeep = function(e) { return e && e.length ? g(e, ue) : [] }, u.iteratee = Qe, u.keys = ie, u.map = function(e, t) { return T(e, x(t)) }, u.matches = function(e) { return C(Ue({}, e)) }, u.mixin = ae, u.negate = function(e) { if ("function" != typeof e) throw new TypeError("Expected a function"); return function() { return !e.apply(this, arguments) } }, u.once = function(e) { return B(2, e) }, u.pick = Ge, u.slice = function(e, t, n) { var i = e ? e.length : 0; return n = n === le ? i : +n, i ? E(e, null == t ? 0 : +t, n) : [] }, u.sortBy = function(e, t) { var n = 0; return t = x(t), T(T(e, function(e, i, o) { return { c: e, b: n++, a: t(e, i, o) } }).sort(function(e, t) { var n;
            e: { n = e.a; var i = t.a; if (n !== i) { var o = null === n,
                        r = n === le,
                        s = n === n,
                        a = null === i,
                        l = i === le,
                        u = i === i; if (n > i && !a || !s || o && !l && u || r && u) { n = 1; break e } if (i > n && !o || !u || a && !r && s || l && s) { n = -1; break e } }
                n = 0 }
            return n || e.b - t.b }), $("c")) }, u.tap = function(e, t) { return t(e), e }, u.thru = function(e, t) { return t(e) }, u.toArray = function(e) { return V(e) ? e.length ? A(e) : [] : re(e) }, u.values = re, u.extend = Xe, ae(u, u), u.clone = function(e) { return J(e) ? Re(e) ? A(e) : D(e, ie(e)) : e }, u.escape = function(e) { return (e = ne(e)) && de.test(e) ? e.replace(ce, s) : e }, u.every = function(e, t, n) { return t = n ? le : t, h(e, x(t)) }, u.find = M, u.forEach = R, u.has = function(e, t) { return null != e && Ce.call(e, t) }, u.head = F, u.identity = se, u.indexOf = function(e, t, n) { var i = e ? e.length : 0;
        n = "number" == typeof n ? 0 > n ? qe(i + n, 0) : n : 0, n = (n || 0) - 1; for (var o = t === t; ++n < i;) { var r = e[n]; if (o ? r === t : r !== r) return n } return -1 }, u.isArguments = Y, u.isArray = Re, u.isBoolean = function(e) { return !0 === e || !1 === e || Z(e) && "[object Boolean]" == $e.call(e) }, u.isDate = function(e) { return Z(e) && "[object Date]" == $e.call(e) }, u.isEmpty = function(e) { if (V(e) && (Re(e) || ee(e) || G(e.splice) || Y(e))) return !e.length; for (var t in e)
            if (Ce.call(e, t)) return !1;
        return !0 }, u.isEqual = function(e, t) { return w(e, t) }, u.isFinite = function(e) { return "number" == typeof e && Oe(e) }, u.isFunction = G, u.isNaN = function(e) { return K(e) && e != +e }, u.isNull = function(e) { return null === e }, u.isNumber = K, u.isObject = J, u.isRegExp = function(e) { return J(e) && "[object RegExp]" == $e.call(e) }, u.isString = ee, u.isUndefined = function(e) { return e === le }, u.last = function(e) { var t = e ? e.length : 0; return t ? e[t - 1] : le }, u.max = function(e) { return e && e.length ? t(e, se, X) : le }, u.min = function(e) { return e && e.length ? t(e, se, te) : le }, u.noConflict = function() { return xe._ === this && (xe._ = Ee), this }, u.noop = function() {}, u.reduce = W, u.result = function(e, t, n) { return t = null == e ? le : e[t], t === le && (t = n), G(t) ? t.call(e) : t }, u.size = function(e) { return null == e ? 0 : (e = V(e) ? e : ie(e), e.length) }, u.some = function(e, t, n) { return t = n ? le : t, j(e, x(t)) }, u.uniqueId = function(e) { var t = ++Se; return ne(e) + t }, u.each = R, u.first = F, ae(u, function() { var e = {}; return m(u, function(t, n) { Ce.call(u.prototype, n) || (e[n] = t) }), e }(), { chain: !1 }), u.VERSION = "4.5.1", Pe("pop join replace reverse split push shift sort splice unshift".split(" "), function(e) { var t = (/^(?:replace|split)$/.test(e) ? String.prototype : ke)[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
            i = /^(?:pop|join|replace|shift)$/.test(e);
        u.prototype[e] = function() { var e = arguments; return i && !this.__chain__ ? t.apply(this.value(), e) : this[n](function(n) { return t.apply(n, e) }) } }), u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = function() { return N(this.__wrapped__, this.__actions__) }, (we || ye || {})._ = u, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return u }) : ve && ge ? (me && ((ge.exports = u)._ = u), ve._ = u) : xe._ = u }.call(this),
    /*!
     * mobile-sniff.min.js
     */
    ! function() { window.mobileCheck = function() { var e = !1; return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0) }(navigator.userAgent || navigator.vendor || window.opera), e } }(),
    /*!
     * modernizr.min.js
     */
    /*! modernizr 3.3.1 (Custom Build) | MIT *
     * https://modernizr.com/download/?-csstransforms-flexbox-svg-setclasses !*/
    ! function(e, t, n) {
        function i(e, t) { return typeof e === t }

        function o() { var e, t, n, o, r, s, a; for (var l in w)
                if (w.hasOwnProperty(l)) { if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase()); for (o = i(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) s = e[r], a = s.split("."), 1 === a.length ? x[a[0]] = o : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), x[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-")) } }

        function r(e) { var t = k.className,
                n = x._config.classPrefix || ""; if (T && (t = t.baseVal), x._config.enableJSClass) { var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2") }
            x._config.enableClasses && (t += " " + n + e.join(" " + n), T ? k.className.baseVal = t : k.className = t) }

        function s(e, t) { return !!~("" + e).indexOf(t) }

        function a() { return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments) }

        function l(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, n) { return t + n.toUpperCase() }).replace(/^-/, "") }

        function u(e, t) { return function() { return e.apply(t, arguments) } }

        function c(e, t, n) { var o; for (var r in e)
                if (e[r] in t) return n === !1 ? e[r] : (o = t[e[r]], i(o, "function") ? u(o, n || t) : o);
            return !1 }

        function d(e) { return e.replace(/([A-Z])/g, function(e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

        function p() { var e = t.body; return e || (e = a(T ? "svg" : "body"), e.fake = !0), e }

        function f(e, n, i, o) { var r, s, l, u, c = "modernizr",
                d = a("div"),
                f = p(); if (parseInt(i, 10))
                for (; i--;) l = a("div"), l.id = o ? o[i] : c + (i + 1), d.appendChild(l); return r = a("style"), r.type = "text/css", r.id = "s" + c, (f.fake ? f : d).appendChild(r), f.appendChild(d), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), d.id = c, f.fake && (f.style.background = "", f.style.overflow = "hidden", u = k.style.overflow, k.style.overflow = "hidden", k.appendChild(f)), s = n(d, e), f.fake ? (f.parentNode.removeChild(f), k.style.overflow = u, k.offsetHeight) : d.parentNode.removeChild(d), !!s }

        function h(t, i) { var o = t.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)
                    if (e.CSS.supports(d(t[o]), i)) return !0;
                return !1 } if ("CSSSupportsRule" in e) { for (var r = []; o--;) r.push("(" + d(t[o]) + ":" + i + ")"); return r = r.join(" or "), f("@supports (" + r + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == getComputedStyle(e, null).position }) } return n }

        function v(e, t, o, r) {
            function u() { d && (delete A.style, delete A.modElem) } if (r = !i(r, "undefined") && r, !i(o, "undefined")) { var c = h(e, o); if (!i(c, "undefined")) return c } for (var d, p, f, v, g, m = ["modernizr", "tspan", "samp"]; !A.style && m.length;) d = !0, A.modElem = a(m.shift()), A.style = A.modElem.style; for (f = e.length, p = 0; f > p; p++)
                if (v = e[p], g = A.style[v], s(v, "-") && (v = l(v)), A.style[v] !== n) { if (r || i(o, "undefined")) return u(), "pfx" != t || v; try { A.style[v] = o } catch (e) {} if (A.style[v] != g) return u(), "pfx" != t || v }
            return u(), !1 }

        function g(e, t, n, o, r) { var s = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + S.join(s + " ") + s).split(" "); return i(t, "string") || i(t, "undefined") ? v(a, t, o, r) : (a = (e + " " + $.join(s + " ") + s).split(" "), c(a, t, n)) }

        function m(e, t, i) { return g(e, n, n, t, i) } var y = [],
            w = [],
            b = { _version: "3.3.1", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, t) { var n = this;
                    setTimeout(function() { t(n[e]) }, 0) }, addTest: function(e, t, n) { w.push({ name: e, fn: t, options: n }) }, addAsyncTest: function(e) { w.push({ name: null, fn: e }) } },
            x = function() {};
        x.prototype = b, x = new x, x.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect); var k = t.documentElement,
            T = "svg" === k.nodeName.toLowerCase(),
            C = "Moz O ms Webkit",
            S = b._config.usePrefixes ? C.split(" ") : [];
        b._cssomPrefixes = S; var $ = b._config.usePrefixes ? C.toLowerCase().split(" ") : [];
        b._domPrefixes = $; var E = { elem: a("modernizr") };
        x._q.push(function() { delete E.elem }); var A = { style: E.elem.style };
        x._q.unshift(function() { delete A.style }), b.testAllProps = g, b.testAllProps = m, x.addTest("flexbox", m("flexBasis", "1px", !0)), x.addTest("csstransforms", function() { return -1 === navigator.userAgent.indexOf("Android 2.") && m("transform", "scale(1)", !0) }), o(), r(y), delete b.addTest, delete b.addAsyncTest; for (var j = 0; j < x._q.length; j++) x._q[j]();
        e.Modernizr = x }(window, document),
    /*!
     * prepare-transition.min.js
     */
    /* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
    ! function(e) { e.fn.prepareTransition = function() { return this.each(function() { var t = e(this);
                t.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd", function() { t.removeClass("is-transitioning") }); var n = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"],
                    i = 0;
                e.each(n, function(e, n) { i || (i = parseFloat(t.css(n))) }), 0 != i && (t.addClass("is-transitioning"), t[0].offsetWidth) }) } }(jQuery),
    /*!
     * slick-slim.min.js
     */
    ! function(e) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(function(e) { "use strict"; var t = window.Slick || {};
        t = function() {
            function t(t, i) { var o, r = this;
                r.defaults = { accessibility: !0, appendArrows: e(t), appendDots: e(t), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous slide" tabindex="0" role="button">Previous slide</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next slide" tabindex="0" role="button">Next slide</button>', autoplay: !1, autoplaySpeed: 3e3, cssEase: "ease", customPaging: function(t, n) { return e('<button type="button" data-role="none" role="button" tabindex="0" />').text("Slide " + (n + 1)) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, initialSlide: 0, lazyLoad: !0, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.init(!0) } var n = 0; return t }(), t.prototype.activateADA = function() { var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), e.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, t.prototype.animateSlide = function(t, n) { var i = {},
                o = this;
            o.options.rtl === !0 && (t = -t), o.transformsEnabled === !1 ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({ animStart: o.currentLeft }).animate({ animStart: t }, { duration: o.options.speed, easing: o.options.easing, step: function(e) { e = Math.ceil(e), i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i) }, complete: function() { n && n.call() } })) : (o.applyTransition(), t = Math.ceil(t), i[o.animType] = "translate3d(" + t + "px, 0px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() { o.disableTransition(), n.call() }, o.options.speed)) }, t.prototype.getNavTarget = function() { var t = this,
                n = t.options.asNavFor; return n && null !== n && (n = e(n).not(t.$slider)), n }, t.prototype.asNavFor = function(t) { var n = this,
                i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() { var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0) }) }, t.prototype.applyTransition = function(e) { var t = this,
                n = {};
            t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, t.prototype.autoPlay = function() { var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)) }, t.prototype.autoPlayClear = function() { var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer) }, t.prototype.autoPlayIterator = function() { var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || e.slideHandler(t) }, t.prototype.buildArrows = function() { var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, t.prototype.buildDots = function() { var t, n, i = this; if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) { for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false") } }, t.prototype.buildOut = function() { var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, n) { e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "") }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.swipeToSlide === !0 && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable") }, t.prototype.buildRows = function() { var e, t, n, i, o, r, s, a = this; if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) { for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) { var l = document.createElement("div"); for (t = 0; t < a.options.rows; t++) { var u = document.createElement("div"); for (n = 0; n < a.options.slidesPerRow; n++) { var c = e * s + (t * a.options.slidesPerRow + n);
                            r.get(c) && u.appendChild(r.get(c)) }
                        l.appendChild(u) }
                    i.appendChild(l) }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" }) } }, t.prototype.changeSlide = function(t, n) { var i, o, r, s = this,
                a = e(t.currentTarget); switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n); break;
                case "next":
                    o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n); break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus"); break;
                default:
                    return } }, t.prototype.checkNavigable = function(e) { var t, n, i = this; if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) { if (e < t[o]) { e = n; break }
                    n = t[o] }
            return e }, t.prototype.cleanUpEvents = function() { var t = this;
            t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition) }, t.prototype.cleanUpSlideEvents = function() { var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.cleanUpRows = function() { var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e)) }, t.prototype.clickHandler = function(e) { var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()) }, t.prototype.destroy = function(t) { var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { e(this).attr("style", e(this).data("originalStyling")) }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n]) }, t.prototype.disableTransition = function(e) { var t = this,
                n = {};
            n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n) }, t.prototype.fadeSlide = function(e, t) { var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }), t && setTimeout(function() { n.disableTransition(e), t.call() }, n.options.speed)) }, t.prototype.fadeSlideOut = function(e) { var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 })) }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) { var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()) }, t.prototype.focusHandler = function() { var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) { n.stopImmediatePropagation(); var i = e(this);
                setTimeout(function() { t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay()) }, 0) }) }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() { var e = this; return e.currentSlide }, t.prototype.getDotCount = function() { for (var e = this, t = 0, n = 0, i = 0; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return i - 1 }, t.prototype.getLeft = function(e) { var t, n, i = this,
                o = 0; return i.slideOffset = 0, n = i.$slides.first().outerHeight(!0), i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1, o = n * i.options.slidesToShow * -1), i.slideCount % i.options.slidesToScroll !== 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1, o = (i.options.slidesToShow - (e - i.slideCount)) * n * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1, o = i.slideCount % i.options.slidesToScroll * n * -1)), i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0, o = 0), t = e * i.slideWidth * -1 + i.slideOffset }, t.prototype.getOption = t.prototype.slickGetOption = function(e) { var t = this; return t.options[e] }, t.prototype.getNavigableIndexes = function() { var e, t = this,
                n = 0,
                i = 0,
                o = []; for (n = t.options.slidesToScroll * -1, i = t.options.slidesToScroll * -1, e = 2 * t.slideCount; n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; return o }, t.prototype.getSlick = function() { return this }, t.prototype.getSlideCount = function() { var t, n, i, o = this; return i = 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, r) { if (r.offsetLeft - i + e(r).outerWidth() / 2 > o.swipeLeft * -1) return n = r, !1 }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) { var n = this;
            n.changeSlide({ data: { message: "index", index: parseInt(e) } }, t) }, t.prototype.init = function(t) { var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateDots(), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay()) }, t.prototype.initADA = function() { var t, n, i, o = this;
            o.$slides.not(o.$slideTrack.find(".slick-cloned")).each(function(r) { e(this).attr("role", "option"); var s = Math.floor(r / o.options.slidesToShow);
                o.options.dots === !0 && (n = "" + o.instanceUid + s, i = n, t === n && (n = "" + n + r), e(this).attr("id", "slickSlide" + n).attr("role", "tabpanel").attr("aria-labelledby", "slickDot" + i), t = "" + o.instanceUid + s) }), null !== o.$dots && o.$dots.attr("role", "tablist").find("li").each(function(t) { e(this).attr({ role: "tab", "aria-selected": "false", "aria-controls": "slickSlide" + o.instanceUid + t, id: "slickDot" + o.instanceUid + t }) }).first().attr("aria-selected", "true"), o.activateADA() }, t.prototype.initArrowEvents = function() { var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide)) }, t.prototype.updateADA = function() { var e = this;
            null !== e.$dots && (e.$dots.find("li").attr("aria-selected", "false"), e.$dots.find(".slick-active").attr("aria-selected", "true")), e.activateADA() }, t.prototype.initArrowEvents = function() { var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide)) }, t.prototype.initDotEvents = function() { var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.initSlideEvents = function() { var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1))) }, t.prototype.initializeEvents = function() { var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition) }, t.prototype.initUI = function() { var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show() }, t.prototype.keyHandler = function(e) { var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({ data: { message: t.options.rtl === !0 ? "next" : "previous" } }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({ data: { message: t.options.rtl === !0 ? "previous" : "next" } })) }, t.prototype.lazyLoad = function() {
            function t(t) { e("img[data-lazy]", t).each(function() { var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() { t.animate({ opacity: 0 }, 100, function() { t.attr("src", n).animate({ opacity: 1 }, 200, function() { t.removeAttr("data-lazy").removeClass("slick-loading") }), s.$slider.trigger("lazyLoaded", [s, t, n]) }) }, i.onerror = function() { t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]) }, i.src = n }) } var n, i, o, r, s = this;
            o = s.options.slidesToShow, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), t(i)) }, t.prototype.loadSlider = function() { var e = this;
            e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI() }, t.prototype.next = t.prototype.slickNext = function() { var e = this;
            e.changeSlide({ data: { message: "next" } }) }, t.prototype.orientationChange = function() { var e = this;
            e.setPosition() }, t.prototype.pause = t.prototype.slickPause = function() { var e = this;
            e.autoPlayClear(), e.paused = !0 }, t.prototype.play = t.prototype.slickPlay = function() { var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1 }, t.prototype.postSlide = function(e) { var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.updateADA()) }, t.prototype.prev = t.prototype.slickPrev = function() { var e = this;
            e.changeSlide({ data: { message: "previous" } }) }, t.prototype.preventDefault = function(e) { e.preventDefault() }, t.prototype.refresh = function(t) { var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, { currentSlide: n }), o.init(), t || o.changeSlide({ data: { message: "index", index: n } }, !1) }, t.prototype.reinit = function() { var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t]) }, t.prototype.resize = function() { var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() { t.windowWidth = e(window).width(), t.unslicked || t.setPosition() }, 50)) }, t.prototype.setCSS = function(e) { var t, n, i = this,
                o = {};
            i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o))) }, t.prototype.setDimensions = function() { var e = this;
            e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)); var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.$slideTrack.children(".slick-slide").width(e.slideWidth - t) }, t.prototype.setFade = function() { var t, n = this;
            n.$slides.each(function(i, o) { t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) }), n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 }) }, t.prototype.setOption = t.prototype.slickSetOption = function() { var t, n, i, o = this,
                r = !1; "object" === e.type(arguments[0]) ? (t = arguments[0], r = arguments[1], i = "multiple") : "string" === e.type(arguments[0]) && (t = arguments[0], n = arguments[1], r = arguments[2], "undefined" != typeof arguments[1] && (i = "single")), "single" === i ? o.options[t] = n : "multiple" === i && e.each(t, function(e, t) { o.options[e] = t }), r && (o.unload(), o.reinit()) }, t.prototype.setPosition = function() { var e = this;
            e.setDimensions(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]) }, t.prototype.setProps = function() { var e = this,
                t = document.body.style;
            e.positionProp = "left", e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1 }, t.prototype.setSlideClasses = function(e) { var t, n, i, o = this;
            t = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= o.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (i = o.slideCount % o.options.slidesToShow, n = o.options.slidesToShow + e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? t.slice(n - (o.options.slidesToShow - i), n + i).addClass("slick-active").attr("aria-hidden", "false") : t.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), o.options.lazyLoad === !0 && o.lazyLoad() }, t.prototype.setupInfinite = function() { var t, n, i, o = this; if (o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) { for (i = o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned"); for (t = 0; t < i; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() { e(this).attr("id", "") }) } }, t.prototype.interrupt = function(e) { var t = this;
            e || t.autoPlay(), t.interrupted = e }, t.prototype.selectHandler = function(t) { var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index")); return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o) }, t.prototype.slideHandler = function(e, t, n) { var i, o, r, s, a, l = null,
                u = this; if (t = t || !1, (u.animating !== !0 || u.options.waitForAnimate !== !0) && !(u.options.fade === !0 && u.currentSlide === e || u.slideCount <= u.options.slidesToShow)) return t === !1 && u.asNavFor(e), i = e, l = u.getLeft(i), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, u.options.autoplay && clearInterval(u.autoPlayTimer), o = i < 0 ? u.slideCount % u.options.slidesToScroll !== 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll !== 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, o]), r = u.currentSlide, u.currentSlide = o, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.options.fade === !0 ? void(n !== !0 ? (u.fadeSlideOut(r), u.fadeSlide(o, function() { u.postSlide(o) })) : u.postSlide(o)) : void(n !== !0 ? u.animateSlide(l, function() { u.postSlide(o) }) : u.postSlide(o)) }, t.prototype.startLoad = function() { var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading") }, t.prototype.swipeDirection = function() { var e, t, n, i, o = this; return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : i <= 360 && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && i <= 225 ? o.options.rtl === !1 ? "right" : "left" : "vertical" }, t.prototype.swipeEnd = function(e) { var t, n, i = this; if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1; if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) { switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0; break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1 } "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n])) } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {}) }, t.prototype.swipeHandler = function(e) { var t = this; if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
                case "start":
                    t.swipeStart(e); break;
                case "move":
                    t.swipeMove(e); break;
                case "end":
                    t.swipeEnd(e) } }, t.prototype.swipeMove = function(e) { var t, n, i, o, r, s = this; return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.swipeLeft = t + i * o, s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0) }, t.prototype.swipeStart = function(e) { var t, n = this; return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0)) }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() { var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()) }, t.prototype.unload = function() { var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, t.prototype.unslick = function(e) { var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy() }, t.prototype.updateDots = function() { var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active")) }, t.prototype.visibility = function() { var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1) }, e.fn.slick = function() { var e, n, i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length; for (e = 0; e < s; e++)
                if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
            return i } }),
    /*!
     * jquery.ba-throttle-debounce.min.js
     */
    /*
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     *
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    function(e, t) { var n, i = e.jQuery || e.Cowboy || (e.Cowboy = {});
        i.throttle = n = function(e, n, o, r) {
            function s() {
                function i() { l = +new Date, o.apply(u, d) }

                function s() { a = t } var u = this,
                    c = +new Date - l,
                    d = arguments;
                r && !a && i(), a && clearTimeout(a), r === t && c > e ? i() : n !== !0 && (a = setTimeout(r ? s : i, r === t ? e - c : e)) } var a, l = 0; return "boolean" != typeof n && (r = o, o = n, n = t), i.guid && (s.guid = o.guid = o.guid || i.guid++), s }, i.debounce = function(e, i, o) { return o === t ? n(e, i, !1) : n(e, o, i !== !1) } }(this);

/*

Lazyload Javacript

*/
function _toConsumableArray(t) { return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread() }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance") }

function _iterableToArray(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }

function _arrayWithoutHoles(t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e]; return n } }

function _extends() { return (_extends = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

function _typeof(t) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }! function(t, e) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e() }(this, function() { "use strict"; var t = "undefined" != typeof window,
        e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        n = t && "IntersectionObserver" in window,
        r = t && "classList" in document.createElement("p"),
        o = { elements_selector: "img", container: e || t ? document : null, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", data_poster: "poster", class_loading: "loading", class_loaded: "loaded", class_error: "error", load_delay: 0, auto_unobserve: !0, callback_enter: null, callback_exit: null, callback_reveal: null, callback_loaded: null, callback_error: null, callback_finish: null, use_native: !1 },
        a = function(t, e) { var n, r = new t(e); try { n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: r } }) } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: r }) }
            window.dispatchEvent(n) }; var i = function(t, e) { return t.getAttribute("data-" + e) },
        s = function(t, e, n) { var r = "data-" + e;
            null !== n ? t.setAttribute(r, n) : t.removeAttribute(r) },
        c = function(t) { return "true" === i(t, "was-processed") },
        l = function(t, e) { return s(t, "ll-timeout", e) },
        u = function(t) { return i(t, "ll-timeout") },
        d = function(t, e, n, r) { t && (void 0 === r ? void 0 === n ? t(e) : t(e, n) : t(e, n, r)) },
        f = function(t, e) { t.loadingCount += e, 0 === t._elements.length && 0 === t.loadingCount && d(t._settings.callback_finish, t) },
        _ = function(t) { for (var e, n = [], r = 0; e = t.children[r]; r += 1) "SOURCE" === e.tagName && n.push(e); return n },
        v = function(t, e, n) { n && t.setAttribute(e, n) },
        b = function(t, e) { v(t, "sizes", i(t, e.data_sizes)), v(t, "srcset", i(t, e.data_srcset)), v(t, "src", i(t, e.data_src)) },
        m = { IMG: function(t, e) { var n = t.parentNode;
                n && "PICTURE" === n.tagName && _(n).forEach(function(t) { b(t, e) });
                b(t, e) }, IFRAME: function(t, e) { v(t, "src", i(t, e.data_src)) }, VIDEO: function(t, e) { _(t).forEach(function(t) { v(t, "src", i(t, e.data_src)) }), v(t, "poster", i(t, e.data_poster)), v(t, "src", i(t, e.data_src)), t.load() } },
        p = function(t, e) { var n, r, o = e._settings,
                a = t.tagName,
                s = m[a]; if (s) return s(t, o), f(e, 1), void(e._elements = (n = e._elements, r = t, n.filter(function(t) { return t !== r })));! function(t, e) { var n = i(t, e.data_src),
                    r = i(t, e.data_bg);
                n && (t.style.backgroundImage = 'url("'.concat(n, '")')), r && (t.style.backgroundImage = r) }(t, o) },
        g = function(t, e) { r ? t.classList.add(e) : t.className += (t.className ? " " : "") + e },
        y = function(t, e) { r ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "") },
        h = function(t, e, n) { t.addEventListener(e, n) },
        E = function(t, e, n) { t.removeEventListener(e, n) },
        w = function(t, e, n) { E(t, "load", e), E(t, "loadeddata", e), E(t, "error", n) },
        A = function(t, e, n) { var r = n._settings,
                o = e ? r.class_loaded : r.class_error,
                a = e ? r.callback_loaded : r.callback_error,
                i = t.target;
            y(i, r.class_loading), g(i, o), d(a, i, n), f(n, -1) },
        I = function(t, e) { var n = function n(o) { A(o, !0, e), w(t, n, r) },
                r = function r(o) { A(o, !1, e), w(t, n, r) };! function(t, e, n) { h(t, "load", e), h(t, "loadeddata", e), h(t, "error", n) }(t, n, r) },
        k = ["IMG", "IFRAME", "VIDEO"],
        L = function(t, e) { var n = e._observer;
            S(t, e), n && e._settings.auto_unobserve && n.unobserve(t) },
        O = function(t) { var e = u(t);
            e && (clearTimeout(e), l(t, null)) },
        x = function(t, e) { var n = e._settings.load_delay,
                r = u(t);
            r || (r = setTimeout(function() { L(t, e), O(t) }, n), l(t, r)) },
        S = function(t, e, n) { var r = e._settings;!n && c(t) || (k.indexOf(t.tagName) > -1 && (I(t, e), g(t, r.class_loading)), p(t, e), function(t) { s(t, "was-processed", "true") }(t), d(r.callback_reveal, t, e), d(r.callback_set, t, e)) },
        z = function(t) { return !!n && (t._observer = new IntersectionObserver(function(e) { e.forEach(function(e) { return function(t) { return t.isIntersecting || t.intersectionRatio > 0 }(e) ? function(t, e, n) { var r = n._settings;
                        d(r.callback_enter, t, e, n), r.load_delay ? x(t, n) : L(t, n) }(e.target, e, t) : function(t, e, n) { var r = n._settings;
                        d(r.callback_exit, t, e, n), r.load_delay && O(t) }(e.target, e, t) }) }, { root: (e = t._settings).container === document ? null : e.container, rootMargin: e.thresholds || e.threshold + "px" }), !0); var e },
        C = ["IMG", "IFRAME"],
        N = function(t, e) { return function(t) { return t.filter(function(t) { return !c(t) }) }((n = t || function(t) { return t.container.querySelectorAll(t.elements_selector) }(e), Array.prototype.slice.call(n))); var n },
        M = function(t) { var e = t._settings;
            _toConsumableArray(e.container.querySelectorAll("." + e.class_error)).forEach(function(t) { y(t, e.class_error),
                    function(t) { s(t, "was-processed", null) }(t) }), t.update() },
        R = function(e, n) { var r;
            this._settings = function(t) { return _extends({}, o, t) }(e), this.loadingCount = 0, z(this), this.update(n), r = this, t && window.addEventListener("online", function(t) { M(r) }) }; return R.prototype = { update: function(t) { var n, r = this,
                o = this._settings;
            (this._elements = N(t, o), !e && this._observer) ? (function(t) { return t.use_native && "loading" in HTMLImageElement.prototype }(o) && ((n = this)._elements.forEach(function(t) {-1 !== C.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), S(t, n)) }), this._elements = N(t, o)), this._elements.forEach(function(t) { r._observer.observe(t) })) : this.loadAll() }, destroy: function() { var t = this;
            this._observer && (this._elements.forEach(function(e) { t._observer.unobserve(e) }), this._observer = null), this._elements = null, this._settings = null }, load: function(t, e) { S(t, this, e) }, loadAll: function() { var t = this;
            this._elements.forEach(function(e) { L(e, t) }) } }, t && function(t, e) { if (e)
            if (e.length)
                for (var n, r = 0; n = e[r]; r += 1) a(t, n);
            else a(t, e) }(R, window.lazyLoadOptions), R });


! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) { this._handlers[c] = a.proxy(this[c], this) }, this)), a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Workers, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }
    e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e } }, { filter: ["width", "items", "settings"], run: function(a) { var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = []; for (a.items = { merge: !1, width: b }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f } }, { filter: ["items", "settings"], run: function() { var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = ""; for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f } }, { filter: ["width", "items", "settings"], run: function() { var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
            this.$stage.css(c) } }, { filter: ["width", "items", "settings"], run: function(a) { var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children(); if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(a) { a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center")) } }], e.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b) }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }) }, e.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid") }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1 }, e.prototype.registerEventHandlers = function() { a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this))) }, e.prototype.onDragStart = function(b) { var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) { var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this))) }, e.prototype.onDragMove = function(a) { var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x)) }, e.prototype.onDragEnd = function(b) { var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) }, e.prototype.closest = function(b, c) { var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates(); return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) { return "left" === c && b > h - e && h + e > b ? d = a : "right" === c && b > h - f - e && h - f + e > b ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d }, e.prototype.animate = function(b) { var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" }) }, e.prototype.is = function(a) { return this._states.current[a] && this._states.current[a] > 0 }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(b) { return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) { return b }) }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(a, b) { var c = this._items.length,
            e = b ? 0 : this._clones.length; return !this.isNumeric(a) || 1 > c ? a = d : (0 > a || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a }, e.prototype.relative = function(a) { return a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = this.settings,
            f = this._coordinates.length; if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) { for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1 } else f = e.center ? this._items.length - 1 : this._items.length - e.items; return a && (f -= this._clones.length / 2), Math.max(f, 0) }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c, e = 1,
            f = b - 1; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c)) }, e.prototype.duration = function(a, b, c) { return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(a, b) { var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (0 > e),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.onTransitionEnd = function(a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated")) }, e.prototype.viewport = function() { var d; if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else { if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth } return d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(b, c) { var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c }) }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.preloadAutoWidthImages = function(b) { b.each(a.proxy(function(b, c) { this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) { c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")) }, this)) }, e.prototype.destroy = function() { this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize)); for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d, f, g) { var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(j) }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j }, e.prototype.enter = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++ }, this)) }, e.prototype.leave = function(b) { a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) { this._states.current[b]-- }, this)) }, e.prototype.register = function(b) { if (b.type === e.Type.Event) { if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) { var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) { return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments) }, a.event.special[b.name].owl = !0 } } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) { return a.inArray(c, this._states.tags[b.name]) === d }, this))) }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.pointer = function(a) { var c = { x: null, y: null }; return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c }, e.prototype.isNumeric = function(a) { return !isNaN(parseFloat(a)) }, e.prototype.difference = function(a, b) { return { x: a.x - b.x, y: a.y - b.y } }, a.fn.owlCarousel = function(b) { var c = Array.prototype.slice.call(arguments, 1); return this.each(function() { var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) { f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) { a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c])) }, f)) })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, e.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, e.prototype.destroy = function() { var a, c;
        b.clearInterval(this._interval); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) { this.load(b) }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++ }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { lazyLoad: !1 }, e.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) { e.push(a(c).height()) }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault() }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" === a.property.name && this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function(a, b) { var c = function() { return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else { if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar" }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, e.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a.framegrab_url, l(f) } })) }, e.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, e.prototype.play = function(b) { var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing")) }, e.prototype.isInFullScreen = function() { var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return b && a(b).parent().hasClass("owl-video-frame") }, e.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { a.namespace && (this.swapping = "translated" == a.type) }, this), "translate.owl.carousel": a.proxy(function(a) { a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && a.support.animation && a.support.transition) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function(a) { a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { a.namespace && this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function(a) { a.namespace && this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": a.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options) };
    e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function(a, b) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, e.prototype._getNextTimeout = function(d, e) { return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed) }, this), d || this._core.settings.autoplayTimeout) }, e.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, e.prototype.stop = function() { this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating")) }, e.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, e.prototype.destroy = function() { var a, b;
        this.stop(); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(b) { this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": a.proxy(function(a) { a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "changed.owl.carousel": a.proxy(function(a) { a.namespace && "position" == a.property.name && this.draw() }, this), "initialized.owl.carousel": a.proxy(function(a) { a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": a.proxy(function(a) { a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
    e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function() { var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) { this.prev(c.navSpeed) }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) { this.next(c.navSpeed) }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) { var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed) }, this)); for (b in this._overrides) this._core[b] = a.proxy(this[b], this) }, e.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, e.prototype.update = function() { var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items; if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) { if (b >= h || 0 === b) { if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;
                    b = 0, ++c }
                b += this._core.mergers(this._core.relative(a)) } }, e.prototype.draw = function() { var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active")) }, e.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) } }, e.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, a.proxy(function(a, c) { return a.start <= b && a.end >= b }, this)).pop() }, e.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, e.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, e.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, e.prototype.to = function(b, c, d) { var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { "use strict"; var e = function(c) { this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function(c) { c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { if (b.namespace) { var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!c) return;
                    this._hashes[c] = b.content } }, this), "changed.owl.carousel": a.proxy(function(c) { if (c.namespace && "position" === c.property.name) { var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) { return a === d ? b : null }).join(); if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e } }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) { var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0) }, this)) };
    e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) { var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1); return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) { return g[b] !== d ? (e = c ? b : !0, !1) : void 0 }), e }

    function f(a) { return e(a, !0) } var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function() { return !!e("transform") }, csstransforms3d: function() { return !!e("perspective") }, csstransitions: function() { return !!e("transition") }, cssanimations: function() { return !!e("animation") } };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d()) }(window.Zepto || window.jQuery, window, document);



/*
 * cart scroll
 */
! function(e) { e.fn.extend({ slimScroll: function(i) { var s = e.extend({ width: "auto", height: "250px", size: "7px", color: "#000", position: "right", distance: "1px", start: "top", opacity: .4, alwaysVisible: !1, disableFadeOut: !1, railVisible: !1, railColor: "#333", railOpacity: .2, railDraggable: !0, railClass: "slimScrollRail", barClass: "slimScrollBar", wrapperClass: "slimScrollDiv", allowPageScroll: !1, wheelStep: 20, touchScrollStep: 200, borderRadius: "7px", railBorderRadius: "7px" }, i); return this.each(function() { var o, a, r, l, n, c, h, u, p = "<div></div>",
                    d = 30,
                    g = !1,
                    f = e(this); if (f.parent().hasClass(s.wrapperClass)) { var b = f.scrollTop(); if (C = f.siblings("." + s.barClass), x = f.siblings("." + s.railClass), R(), e.isPlainObject(i)) { if ("height" in i && "auto" == i.height) { f.parent().css("height", "auto"), f.css("height", "auto"); var v = f.parent().parent().height();
                            f.parent().css("height", v), f.css("height", v) } else if ("height" in i) { var w = i.height;
                            f.parent().css("height", w), f.css("height", w) } if ("scrollTo" in i) b = parseInt(s.scrollTo);
                        else if ("scrollBy" in i) b += parseInt(s.scrollBy);
                        else if ("destroy" in i) return C.remove(), x.remove(), void f.unwrap();
                        E(b, !1, !0) } } else if (!(e.isPlainObject(i) && "destroy" in i)) { s.height = "auto" == s.height ? f.parent().height() : s.height; var m = e(p).addClass(s.wrapperClass).css({ position: "relative", overflow: "hidden", width: s.width });
                    f.css({ overflow: "hidden", width: s.width }); var y, x = e(p).addClass(s.railClass).css({ width: s.size, height: "100%", position: "absolute", top: 0, display: s.alwaysVisible && s.railVisible ? "block" : "none", "border-radius": s.railBorderRadius, background: s.railColor, opacity: s.railOpacity, zIndex: 90 }),
                        C = e(p).addClass(s.barClass).css({ background: s.color, width: s.size, position: "absolute", top: 0, opacity: s.opacity, display: s.alwaysVisible ? "block" : "none", "border-radius": s.borderRadius, BorderRadius: s.borderRadius, MozBorderRadius: s.borderRadius, WebkitBorderRadius: s.borderRadius, zIndex: 99 }),
                        H = "right" == s.position ? { right: s.distance } : { left: s.distance };
                    x.css(H), C.css(H), f.wrap(m), f.parent().append(C), f.parent().append(x), s.railDraggable && C.bind("mousedown", function(i) { var s = e(document); return r = !0, t = parseFloat(C.css("top")), pageY = i.pageY, s.bind("mousemove.slimscroll", function(e) { currTop = t + e.pageY - pageY, C.css("top", currTop), E(0, C.position().top, !1) }), s.bind("mouseup.slimscroll", function(e) { r = !1, M(), s.unbind(".slimscroll") }), !1 }).bind("selectstart.slimscroll", function(e) { return e.stopPropagation(), e.preventDefault(), !1 }), x.hover(function() { D() }, function() { M() }), C.hover(function() { a = !0 }, function() { a = !1 }), f.hover(function() { o = !0, D(), M() }, function() { o = !1, M() }), f.bind("touchstart", function(e, t) { e.originalEvent.touches.length && (n = e.originalEvent.touches[0].pageY) }), f.bind("touchmove", function(e) {
                        (g || e.originalEvent.preventDefault(), e.originalEvent.touches.length) && (E((n - e.originalEvent.touches[0].pageY) / s.touchScrollStep, !0), n = e.originalEvent.touches[0].pageY) }), R(), "bottom" === s.start ? (C.css({ top: f.outerHeight() - C.outerHeight() }), E(0, !0)) : "top" !== s.start && (E(e(s.start).position().top, null, !0), s.alwaysVisible || C.hide()), y = this, window.addEventListener ? (y.addEventListener("DOMMouseScroll", S, !1), y.addEventListener("mousewheel", S, !1)) : document.attachEvent("onmousewheel", S) }

                function S(t) { if (o) { var i = 0;
                        (t = t || window.event).wheelDelta && (i = -t.wheelDelta / 120), t.detail && (i = t.detail / 3); var a = t.target || t.srcTarget || t.srcElement;
                        e(a).closest("." + s.wrapperClass).is(f.parent()) && E(i, !0), t.preventDefault && !g && t.preventDefault(), g || (t.returnValue = !1) } }

                function E(e, t, i) { g = !1; var o = e,
                        a = f.outerHeight() - C.outerHeight(); if (t && (o = parseInt(C.css("top")) + e * parseInt(s.wheelStep) / 100 * C.outerHeight(), o = Math.min(Math.max(o, 0), a), o = e > 0 ? Math.ceil(o) : Math.floor(o), C.css({ top: o + "px" })), o = (h = parseInt(C.css("top")) / (f.outerHeight() - C.outerHeight())) * (f[0].scrollHeight - f.outerHeight()), i) { var r = (o = e) / f[0].scrollHeight * f.outerHeight();
                        r = Math.min(Math.max(r, 0), a), C.css({ top: r + "px" }) }
                    f.scrollTop(o), f.trigger("slimscrolling", ~~o), D(), M() }

                function R() { c = Math.max(f.outerHeight() / f[0].scrollHeight * f.outerHeight(), d), C.css({ height: c + "px" }); var e = c == f.outerHeight() ? "none" : "block";
                    C.css({ display: e }) }

                function D() { if (R(), clearTimeout(l), h == ~~h) { if (g = s.allowPageScroll, u != h) { var e = 0 == ~~h ? "top" : "bottom";
                            f.trigger("slimscroll", e) } } else g = !1;
                    u = h, c >= f.outerHeight() ? g = !0 : (C.stop(!0, !0).fadeIn("fast"), s.railVisible && x.stop(!0, !0).fadeIn("fast")) }

                function M() { s.alwaysVisible || (l = setTimeout(function() { s.disableFadeOut && o || a || r || (C.fadeOut("slow"), x.fadeOut("slow")) }, 1e3)) } }), this } }), e.fn.extend({ slimscroll: e.fn.slimScroll }) }(jQuery);



//countdown
! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) { "use strict";

    function b(a) { if (a instanceof Date) return a; if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a); throw new Error("Couldn't cast `" + a + "` to a date object.") }

    function c(a) { var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); return new RegExp(b) }

    function d(a) { return function(b) { var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi); if (d)
                for (var f = 0, g = d.length; f < g; ++f) { var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString())) }
            return b = b.replace(/%%/, "%") } }

    function e(a, b) { var c = "s",
            d = ""; return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d } var f = [],
        g = [],
        h = { precision: 100, elapse: !1, defer: !1 };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|")); var i = { Y: "years", m: "months", n: "daysToMonth", d: "daysToWeek", w: "weeks", W: "weeksToMonth", H: "hours", M: "minutes", S: "seconds", D: "totalDays", I: "totalHours", N: "totalMinutes", T: "totalSeconds" },
        j = function(b, c, d) { this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.firstTick = !0, this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start() };
    a.extend(j.prototype, { start: function() { null !== this.interval && clearInterval(this.interval); var a = this;
            this.update(), this.interval = setInterval(function() { a.update.call(a) }, this.options.precision) }, stop: function() { clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped") }, toggle: function() { this.interval ? this.stop() : this.start() }, pause: function() { this.stop() }, resume: function() { this.start() }, remove: function() { this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance }, setFinalDate: function(a) { this.finalDate = b(a) }, update: function() { if (0 === this.$el.closest("html").length) return void this.remove(); var a, b = new Date; return a = this.finalDate.getTime() - b.getTime(), a = Math.ceil(a / 1e3), a = !this.options.elapse && a < 0 ? 0 : Math.abs(a), this.totalSecsLeft === a || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = a, this.elapsed = b >= this.finalDate, this.offset = { seconds: this.totalSecsLeft % 60, minutes: Math.floor(this.totalSecsLeft / 60) % 60, hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24, days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7, daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368), weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7), weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4, months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368), years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()), totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24), totalHours: Math.floor(this.totalSecsLeft / 60 / 60), totalMinutes: Math.floor(this.totalSecsLeft / 60), totalSeconds: this.totalSecsLeft }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))) }, dispatchEvent: function(b) { var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c) } }), a.fn.countdown = function() { var b = Array.prototype.slice.call(arguments, 0); return this.each(function() { var c = a(this).data("countdown-instance"); if (void 0 !== c) { var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e)) } else new j(this, b[0], b[1]) }) } });

//notify.js
! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery) }(function(t) {
    function s(s) { var e = !1; return t('[data-notify="container"]').each(function(i, n) { var a = t(n),
                o = a.find('[data-notify="title"]').text().trim(),
                r = a.find('[data-notify="message"]').html().trim(),
                l = o === t("<div>" + s.settings.content.title + "</div>").html().trim(),
                d = r === t("<div>" + s.settings.content.message + "</div>").html().trim(),
                g = a.hasClass("alert-" + s.settings.type); return l && d && g && (e = !0), !e }), e }

    function e(e, n, a) { var o = { content: { message: "object" == typeof n ? n.message : n, title: n.title ? n.title : "", icon: n.icon ? n.icon : "", url: n.url ? n.url : "#", target: n.target ? n.target : "-" } };
        a = t.extend(!0, {}, o, a), this.settings = t.extend(!0, {}, i, a), this._defaults = i, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }, "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !s(this)) && this.init() } var i = { element: "body", position: null, type: "info", allow_dismiss: !0, allow_duplicates: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 1031, delay: 5e3, timer: 1e3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, onShow: null, onShown: null, onClose: null, onClosed: null, icon_type: "class", template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' };
    String.format = function() { for (var t = arguments[0], s = 1; s < arguments.length; s++) t = t.replace(RegExp("\\{" + (s - 1) + "\\}", "gm"), arguments[s]); return t }, t.extend(e.prototype, { init: function() { var t = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = { $ele: this.$ele, update: function(s, e) { var i = {}; "string" == typeof s ? i[s] = e : i = s; for (var n in i) switch (n) {
                        case "type":
                            this.$ele.removeClass("alert-" + t.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + t.settings.type), t.settings.type = i[n], this.$ele.addClass("alert-" + i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + i[n]); break;
                        case "icon":
                            var a = this.$ele.find('[data-notify="icon"]'); "class" === t.settings.icon_type.toLowerCase() ? a.removeClass(t.settings.content.icon).addClass(i[n]) : (a.is("img") || a.find("img"), a.attr("src", i[n])); break;
                        case "progress":
                            var o = t.settings.delay - t.settings.delay * (i[n] / 100);
                            this.$ele.data("notify-delay", o), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i[n]).css("width", i[n] + "%"); break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", i[n]); break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", i[n]); break;
                        default:
                            this.$ele.find('[data-notify="' + n + '"]').html(i[n]) }
                    var r = this.$ele.outerHeight() + parseInt(t.settings.spacing) + parseInt(t.settings.offset.y);
                    t.reposition(r) }, close: function() { t.close() } } }, buildNotify: function() { var s = this.settings.content;
            this.$ele = t(String.format(this.settings.template, this.settings.type, s.title, s.message, s.url, s.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove() }, setIcon: function() { "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') }, styleDismiss: function() { this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 }) }, styleURL: function() { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: 0, position: "absolute", top: 0, width: "100%", zIndex: this.settings.z_index + 1 }) }, placement: function() { var s = this,
                e = this.settings.offset.y,
                i = { display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out", zIndex: this.settings.z_index },
                n = !1,
                a = this.settings; switch (t('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() { e = Math.max(e, parseInt(t(this).css(a.placement.from)) + parseInt(t(this).outerHeight()) + parseInt(a.spacing)) }), this.settings.newest_on_top === !0 && (e = this.settings.offset.y), i[this.settings.placement.from] = e + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    i[this.settings.placement.align] = this.settings.offset.x + "px"; break;
                case "center":
                    i.left = 0, i.right = 0 }
            this.$ele.css(i).addClass(this.settings.animate.enter), t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function(t, e) { s.$ele[0].style[e + "AnimationIterationCount"] = 1 }), t(this.settings.element).append(this.$ele), this.settings.newest_on_top === !0 && (e = parseInt(e) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(e)), t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function() { n = !0 }).one(this.animations.end, function() { s.$ele.removeClass(s.settings.animate.enter), t.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }), setTimeout(function() { n || t.isFunction(s.settings.onShown) && s.settings.onShown.call(this) }, 600) }, bind: function() { var s = this; if (this.$ele.find('[data-notify="dismiss"]').on("click", function() { s.close() }), this.$ele.mouseover(function() { t(this).data("data-hover", "true") }).mouseout(function() { t(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) { s.$ele.data("notify-delay", s.settings.delay); var e = setInterval(function() { var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer; if ("false" === s.$ele.data("data-hover") && "pause" === s.settings.mouse_over || "pause" != s.settings.mouse_over) { var i = (s.settings.delay - t) / s.settings.delay * 100;
                        s.$ele.data("notify-delay", t), s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", i).css("width", i + "%") }
                    t <= -s.settings.timer && (clearInterval(e), s.close()) }, s.settings.timer) } }, close: function() { var s = this,
                e = parseInt(this.$ele.css(this.settings.placement.from)),
                i = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), s.reposition(e), t.isFunction(s.settings.onClose) && s.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() { i = !0 }).one(this.animations.end, function() { t(this).remove(), t.isFunction(s.settings.onClosed) && s.settings.onClosed.call(this) }), setTimeout(function() { i || (s.$ele.remove(), s.settings.onClosed && s.settings.onClosed(s.$ele)) }, 600) }, reposition: function(s) { var e = this,
                i = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                n = this.$ele.nextAll(i);
            this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(i)), n.each(function() { t(this).css(e.settings.placement.from, s), s = parseInt(s) + parseInt(e.settings.spacing) + t(this).outerHeight() }) } }), t.notify = function(t, s) { var i = new e(this, t, s); return i.notify }, t.notifyDefaults = function(s) { return i = t.extend(!0, {}, i, s) }, t.notifyClose = function(s) { "warning" === s && (s = "danger"), "undefined" == typeof s || "all" === s ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === s || "info" === s || "warning" === s || "danger" === s ? t(".alert-" + s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : s ? t(s + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : t('[data-notify-position="' + s + '"]').find('[data-notify="dismiss"]').trigger("click") }, t.notifyCloseExcept = function(s) { "warning" === s && (s = "danger"), "success" === s || "info" === s || "warning" === s || "danger" === s ? t("[data-notify]").not(".alert-" + s).find('[data-notify="dismiss"]').trigger("click") : t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click") } })