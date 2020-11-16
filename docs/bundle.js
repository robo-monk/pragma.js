(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/*! For license information please see index.js.LICENSE.txt */
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("@pragmajs", [], t) : "object" == typeof exports ? exports["@pragmajs"] = t() : e["@pragmajs"] = t();
}(void 0, function () {
  return (() => {
    var e = {
      755: function (e, t) {
        var n;
        !function (t, n) {
          "use strict";

          "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e);
          } : n(t);
        }("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";

          var o = [],
              a = Object.getPrototypeOf,
              s = o.slice,
              u = o.flat ? function (e) {
            return o.flat.call(e);
          } : function (e) {
            return o.concat.apply([], e);
          },
              c = o.push,
              l = o.indexOf,
              f = {},
              p = f.toString,
              d = f.hasOwnProperty,
              h = d.toString,
              m = h.call(Object),
              v = {},
              g = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
              y = function (e) {
            return null != e && e === e.window;
          },
              b = r.document,
              x = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
          };

          function w(e, t, n) {
            var r,
                i,
                o = (n = n || b).createElement("script");
            if (o.text = e, t) for (r in x) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }

          function T(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e;
          }

          var C = "3.5.1",
              E = function (e, t) {
            return new E.fn.init(e, t);
          };

          function k(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
          }

          E.fn = E.prototype = {
            jquery: C,
            constructor: E,
            length: 0,
            toArray: function () {
              return s.call(this);
            },
            get: function (e) {
              return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
              var t = E.merge(this.constructor(), e);
              return t.prevObject = this, t;
            },
            each: function (e) {
              return E.each(this, e);
            },
            map: function (e) {
              return this.pushStack(E.map(this, function (t, n) {
                return e.call(t, n, t);
              }));
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(E.grep(this, function (e, t) {
                return (t + 1) % 2;
              }));
            },
            odd: function () {
              return this.pushStack(E.grep(this, function (e, t) {
                return t % 2;
              }));
            },
            eq: function (e) {
              var t = this.length,
                  n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: o.sort,
            splice: o.splice
          }, E.extend = E.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;

            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (c && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(c, o, r)) : void 0 !== r && (a[t] = r));

            return a;
          }, E.extend({
            expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === m);
            },
            isEmptyObject: function (e) {
              var t;

              for (t in e) return !1;

              return !0;
            },
            globalEval: function (e, t, n) {
              w(e, {
                nonce: t && t.nonce
              }, n);
            },
            each: function (e, t) {
              var n,
                  r = 0;
              if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return null != e && (k(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : l.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

              return e.length = i, e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);

              return r;
            },
            map: function (e, t, n) {
              var r,
                  i,
                  o = 0,
                  a = [];
              if (k(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
              return u(a);
            },
            guid: 1,
            support: v
          }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          });

          var A = function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                d,
                h,
                m,
                v,
                g,
                y,
                b,
                x = "sizzle" + 1 * new Date(),
                w = e.document,
                T = 0,
                C = 0,
                E = ue(),
                k = ue(),
                A = ue(),
                j = ue(),
                O = function (e, t) {
              return e === t && (f = !0), 0;
            },
                D = {}.hasOwnProperty,
                S = [],
                N = S.pop,
                L = S.push,
                q = S.push,
                H = S.slice,
                M = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

              return -1;
            },
                P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                I = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                W = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + R + "*\\]",
                B = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                $ = new RegExp(R + "+", "g"),
                _ = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                F = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                V = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                U = new RegExp(R + "|>"),
                z = new RegExp(B),
                X = new RegExp("^" + I + "$"),
                K = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + W),
              PSEUDO: new RegExp("^" + B),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
            },
                Y = /HTML$/i,
                G = /^(?:input|select|textarea|button)$/i,
                Q = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
            },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function (e, t) {
              return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
            },
                oe = function () {
              p();
            },
                ae = xe(function (e) {
              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
            }, {
              dir: "parentNode",
              next: "legend"
            });

            try {
              q.apply(S = H.call(w.childNodes), w.childNodes), S[w.childNodes.length].nodeType;
            } catch (e) {
              q = {
                apply: S.length ? function (e, t) {
                  L.apply(e, H.call(t));
                } : function (e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++];);

                  e.length = n - 1;
                }
              };
            }

            function se(e, t, r, i) {
              var o,
                  s,
                  c,
                  l,
                  f,
                  h,
                  g,
                  y = t && t.ownerDocument,
                  w = t ? t.nodeType : 9;
              if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;

              if (!i && (p(t), t = t || d, m)) {
                if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
                  if (9 === w) {
                    if (!(c = t.getElementById(o))) return r;
                    if (c.id === o) return r.push(c), r;
                  } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return r.push(c), r;
                } else {
                  if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                  if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r;
                }

                if (n.qsa && !j[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                  if (g = e, y = t, 1 === w && (U.test(e) || V.test(e))) {
                    for ((y = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute("id")) ? l = l.replace(re, ie) : t.setAttribute("id", l = x)), s = (h = a(e)).length; s--;) h[s] = (l ? "#" + l : ":scope") + " " + be(h[s]);

                    g = h.join(",");
                  }

                  try {
                    return q.apply(r, y.querySelectorAll(g)), r;
                  } catch (t) {
                    j(e, !0);
                  } finally {
                    l === x && t.removeAttribute("id");
                  }
                }
              }

              return u(e.replace(_, "$1"), t, r, i);
            }

            function ue() {
              var e = [];
              return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
              };
            }

            function ce(e) {
              return e[x] = !0, e;
            }

            function le(e) {
              var t = d.createElement("fieldset");

              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
              }
            }

            function fe(e, t) {
              for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t;
            }

            function pe(e, t) {
              var n = t && e,
                  r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; n = n.nextSibling;) if (n === t) return -1;
              return e ? 1 : -1;
            }

            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }

            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }

            function me(e) {
              return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
              };
            }

            function ve(e) {
              return ce(function (t) {
                return t = +t, ce(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
              });
            }

            function ge(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }

            for (t in n = se.support = {}, o = se.isXML = function (e) {
              var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
              return !Y.test(t || n && n.nodeName || "HTML");
            }, p = se.setDocument = function (e) {
              var t,
                  i,
                  a = e ? e.ownerDocument || e : w;
              return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, m = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = le(function (e) {
                return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
              }), n.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className");
              }), n.getElementsByTagName = le(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
              }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = le(function (e) {
                return h.appendChild(e).id = x, !d.getElementsByName || !d.getElementsByName(x).length;
              }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }) : (r.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }, r.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && m) {
                  var n,
                      r,
                      i,
                      o = t.getElementById(e);

                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

                    for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                  }

                  return [];
                }
              }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
              } : function (e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);

                if ("*" === e) {
                  for (; n = o[i++];) 1 === n.nodeType && r.push(n);

                  return r;
                }

                return o;
              }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
              }, g = [], v = [], (n.qsa = J.test(d.querySelectorAll)) && (le(function (e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
              }), le(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
              })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", B);
              }), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
              } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1;
              }, O = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && b(w, e) ? -1 : t == d || t.ownerDocument == w && b(w, t) ? 1 : l ? M(l, e) - M(l, t) : 0 : 4 & r ? -1 : 1);
              } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : l ? M(l, e) - M(l, t) : 0;
                if (i === o) return pe(e, t);

                for (n = e; n = n.parentNode;) a.unshift(n);

                for (n = t; n = n.parentNode;) s.unshift(n);

                for (; a[r] === s[r];) r++;

                return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
              }, d) : d;
            }, se.matches = function (e, t) {
              return se(e, null, null, t);
            }, se.matchesSelector = function (e, t) {
              if (p(e), n.matchesSelector && m && !j[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
              } catch (e) {
                j(t, !0);
              }
              return se(t, d, null, [e]).length > 0;
            }, se.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), b(e, t);
            }, se.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var i = r.attrHandle[t.toLowerCase()],
                  o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
              return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }, se.escape = function (e) {
              return (e + "").replace(re, ie);
            }, se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }, se.uniqueSort = function (e) {
              var t,
                  r = [],
                  i = 0,
                  o = 0;

              if (f = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(O), f) {
                for (; t = e[o++];) t === e[o] && (i = r.push(o));

                for (; i--;) e.splice(r[i], 1);
              }

              return l = null, e;
            }, i = se.getText = function (e) {
              var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;

              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;

                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; t = e[r++];) n += i(t);

              return n;
            }, (r = se.selectors = {
              cacheLength: 50,
              createPseudo: ce,
              match: K,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0
                },
                " ": {
                  dir: "parentNode"
                },
                "+": {
                  dir: "previousSibling",
                  first: !0
                },
                "~": {
                  dir: "previousSibling"
                }
              },
              preFilter: {
                ATTR: function (e) {
                  return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
                },
                PSEUDO: function (e) {
                  var t,
                      n = !e[6] && e[2];
                  return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e ? function () {
                    return !0;
                  } : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
                },
                CLASS: function (e) {
                  var t = E[e + " "];
                  return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + R + "|$)")) && E(e, function (e) {
                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                  });
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = se.attr(r, e);
                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                  return 1 === r && 0 === i ? function (e) {
                    return !!e.parentNode;
                  } : function (t, n, u) {
                    var c,
                        l,
                        f,
                        p,
                        d,
                        h,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        v = t.parentNode,
                        g = s && t.nodeName.toLowerCase(),
                        y = !u && !s,
                        b = !1;

                    if (v) {
                      if (o) {
                        for (; m;) {
                          for (p = t; p = p[m];) if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;

                          h = m = "only" === e && !h && "nextSibling";
                        }

                        return !0;
                      }

                      if (h = [a ? v.firstChild : v.lastChild], a && y) {
                        for (b = (d = (c = (l = (f = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = d && v.childNodes[d]; p = ++d && p && p[m] || (b = d = 0) || h.pop();) if (1 === p.nodeType && ++b && p === t) {
                          l[e] = [T, d, b];
                          break;
                        }
                      } else if (y && (b = d = (c = (l = (f = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b) for (; (p = ++d && p && p[m] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((l = (f = p[x] || (p[x] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, b]), p !== t)););

                      return (b -= i) === r || b % r == 0 && b / r >= 0;
                    }
                  };
                },
                PSEUDO: function (e, t) {
                  var n,
                      i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                  return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, n) {
                    for (var r, o = i(e, t), a = o.length; a--;) e[r = M(e, o[a])] = !(n[r] = o[a]);
                  }) : function (e) {
                    return i(e, 0, n);
                  }) : i;
                }
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                      n = [],
                      r = s(e.replace(_, "$1"));
                  return r[x] ? ce(function (e, t, n, i) {
                    for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
                  }) : function (e, i, o) {
                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                  };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: ce(function (e) {
                  return e = e.replace(te, ne), function (t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  };
                }),
                lang: ce(function (e) {
                  return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                    var n;

                    do {
                      if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                    } while ((t = t.parentNode) && 1 === t.nodeType);

                    return !1;
                  };
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return G.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t;
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);

                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);

                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);

                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

                  return e;
                })
              }
            }).pseudos.nth = r.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) r.pseudos[t] = de(t);

            for (t in {
              submit: !0,
              reset: !0
            }) r.pseudos[t] = he(t);

            function ye() {}

            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

              return r;
            }

            function xe(e, t, n) {
              var r = t.dir,
                  i = t.next,
                  o = i || r,
                  a = n && "parentNode" === o,
                  s = C++;
              return t.first ? function (t, n, i) {
                for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);

                return !1;
              } : function (t, n, u) {
                var c,
                    l,
                    f,
                    p = [T, s];

                if (u) {
                  for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else for (; t = t[r];) if (1 === t.nodeType || a) if (l = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
                  if ((c = l[o]) && c[0] === T && c[1] === s) return p[2] = c[2];
                  if (l[o] = p, p[2] = e(t, n, u)) return !0;
                }

                return !1;
              };
            }

            function we(e) {
              return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;

                return !0;
              } : e[0];
            }

            function Te(e, t, n, r, i) {
              for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));

              return a;
            }

            function Ce(e, t, n, r, i, o) {
              return r && !r[x] && (r = Ce(r)), i && !i[x] && (i = Ce(i, o)), ce(function (o, a, s, u) {
                var c,
                    l,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    m = o || function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);

                  return n;
                }(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !o && t ? m : Te(m, p, e, s, u),
                    g = n ? i || (o ? e : h || r) ? [] : a : v;

                if (n && n(v, g, s, u), r) for (c = Te(g, d), r(c, [], s, u), l = c.length; l--;) (f = c[l]) && (g[d[l]] = !(v[d[l]] = f));

                if (o) {
                  if (i || e) {
                    if (i) {
                      for (c = [], l = g.length; l--;) (f = g[l]) && c.push(v[l] = f);

                      i(null, g = [], c, u);
                    }

                    for (l = g.length; l--;) (f = g[l]) && (c = i ? M(o, f) : p[l]) > -1 && (o[c] = !(a[c] = f));
                  }
                } else g = Te(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, u) : q.apply(a, g);
              });
            }

            function Ee(e) {
              for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, l = xe(function (e) {
                return e === t;
              }, s, !0), f = xe(function (e) {
                return M(t, e) > -1;
              }, s, !0), p = [function (e, n, r) {
                var i = !a && (r || n !== c) || ((t = n).nodeType ? l(e, n, r) : f(e, n, r));
                return t = null, i;
              }]; u < o; u++) if (n = r.relative[e[u].type]) p = [xe(we(p), n)];else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                  for (i = ++u; i < o && !r.relative[e[i].type]; i++);

                  return Ce(u > 1 && we(p), u > 1 && be(e.slice(0, u - 1).concat({
                    value: " " === e[u - 2].type ? "*" : ""
                  })).replace(_, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && be(e));
                }

                p.push(n);
              }

              return we(p);
            }

            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = se.tokenize = function (e, t) {
              var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l = k[e + " "];
              if (l) return t ? 0 : l.slice(0);

              for (s = e, u = [], c = r.preFilter; s;) {
                for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = V.exec(s)) && (n = i.shift(), o.push({
                  value: n,
                  type: i[0].replace(_, " ")
                }), s = s.slice(n.length)), r.filter) !(i = K[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), o.push({
                  value: n,
                  type: a,
                  matches: i
                }), s = s.slice(n.length));

                if (!n) break;
              }

              return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
            }, s = se.compile = function (e, t) {
              var n,
                  i = [],
                  o = [],
                  s = A[e + " "];

              if (!s) {
                for (t || (t = a(e)), n = t.length; n--;) (s = Ee(t[n]))[x] ? i.push(s) : o.push(s);

                (s = A(e, function (e, t) {
                  var n = t.length > 0,
                      i = e.length > 0,
                      o = function (o, a, s, u, l) {
                    var f,
                        h,
                        v,
                        g = 0,
                        y = "0",
                        b = o && [],
                        x = [],
                        w = c,
                        C = o || i && r.find.TAG("*", l),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;

                    for (l && (c = a == d || a || l); y !== k && null != (f = C[y]); y++) {
                      if (i && f) {
                        for (h = 0, a || f.ownerDocument == d || (p(f), s = !m); v = e[h++];) if (v(f, a || d, s)) {
                          u.push(f);
                          break;
                        }

                        l && (T = E);
                      }

                      n && ((f = !v && f) && g--, o && b.push(f));
                    }

                    if (g += y, n && y !== g) {
                      for (h = 0; v = t[h++];) v(b, x, a, s);

                      if (o) {
                        if (g > 0) for (; y--;) b[y] || x[y] || (x[y] = N.call(u));
                        x = Te(x);
                      }

                      q.apply(u, x), l && !o && x.length > 0 && g + t.length > 1 && se.uniqueSort(u);
                    }

                    return l && (T = E, c = w), b;
                  };

                  return n ? ce(o) : o;
                }(o, i))).selector = e;
              }

              return s;
            }, u = se.select = function (e, t, n, i) {
              var o,
                  u,
                  c,
                  l,
                  f,
                  p = "function" == typeof e && e,
                  d = !i && a(e = p.selector || e);

              if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
                  if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                  p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }

                for (o = K.needsContext.test(e) ? 0 : u.length; o-- && (c = u[o], !r.relative[l = c.type]);) if ((f = r.find[l]) && (i = f(c.matches[0].replace(te, ne), ee.test(u[0].type) && ge(t.parentNode) || t))) {
                  if (u.splice(o, 1), !(e = i.length && be(u))) return q.apply(n, i), n;
                  break;
                }
              }

              return (p || s(e, d))(i, t, !m, n, !t || ee.test(e) && ge(t.parentNode) || t), n;
            }, n.sortStable = x.split("").sort(O).join("") === x, n.detectDuplicates = !!f, p(), n.sortDetached = le(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            }), le(function (e) {
              return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
            }) || fe("type|href|height|width", function (e, t, n) {
              if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }), n.attributes && le(function (e) {
              return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
            }) || fe("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
            }), le(function (e) {
              return null == e.getAttribute("disabled");
            }) || fe(P, function (e, t, n) {
              var r;
              if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
            }), se;
          }(r);

          E.find = A, E.expr = A.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = A.uniqueSort, E.text = A.getText, E.isXMLDoc = A.isXML, E.contains = A.contains, E.escapeSelector = A.escape;

          var j = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
              if (i && E(e).is(n)) break;
              r.push(e);
            }

            return r;
          },
              O = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

            return n;
          },
              D = E.expr.match.needsContext;

          function S(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }

          var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

          function L(e, t, n) {
            return g(t) ? E.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            }) : t.nodeType ? E.grep(e, function (e) {
              return e === t !== n;
            }) : "string" != typeof t ? E.grep(e, function (e) {
              return l.call(t, e) > -1 !== n;
            }) : E.filter(t, e, n);
          }

          E.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
              return 1 === e.nodeType;
            }));
          }, E.fn.extend({
            find: function (e) {
              var t,
                  n,
                  r = this.length,
                  i = this;
              if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
              }));

              for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);

              return r > 1 ? E.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(L(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(L(this, e || [], !0));
            },
            is: function (e) {
              return !!L(this, "string" == typeof e && D.test(e) ? E(e) : e || [], !1).length;
            }
          });
          var q,
              H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          (E.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;

            if (n = n || q, "string" == typeof e) {
              if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

              if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), N.test(r[1]) && E.isPlainObject(t)) for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }

              return (i = b.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
            }

            return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
          }).prototype = E.fn, q = E(b);
          var M = /^(?:parents|prev(?:Until|All))/,
              P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
          };

          function R(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;);

            return e;
          }

          E.fn.extend({
            has: function (e) {
              var t = E(e, this),
                  n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                  r = 0,
                  i = this.length,
                  o = [],
                  a = "string" != typeof e && E(e);
              if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                o.push(n);
                break;
              }
              return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o);
            },
            index: function (e) {
              return e ? "string" == typeof e ? l.call(E(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
            },
            addBack: function (e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
            }
          }), E.each({
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return j(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return j(e, "parentNode", n);
            },
            next: function (e) {
              return R(e, "nextSibling");
            },
            prev: function (e) {
              return R(e, "previousSibling");
            },
            nextAll: function (e) {
              return j(e, "nextSibling");
            },
            prevAll: function (e) {
              return j(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return j(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return j(e, "previousSibling", n);
            },
            siblings: function (e) {
              return O((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return O(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
            }
          }, function (e, t) {
            E.fn[e] = function (n, r) {
              var i = E.map(this, t, n);
              return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = E.filter(r, i)), this.length > 1 && (P[e] || E.uniqueSort(i), M.test(e) && i.reverse()), this.pushStack(i);
            };
          });
          var I = /[^\x20\t\r\n\f]+/g;

          function W(e) {
            return e;
          }

          function B(e) {
            throw e;
          }

          function $(e, t, n, r) {
            var i;

            try {
              e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }

          E.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
              var t = {};
              return E.each(e.match(I) || [], function (e, n) {
                t[n] = !0;
              }), t;
            }(e) : E.extend({}, e);

            var t,
                n,
                r,
                i,
                o = [],
                a = [],
                s = -1,
                u = function () {
              for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);

              e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
            },
                c = {
              add: function () {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                  E.each(n, function (n, r) {
                    g(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r);
                  });
                }(arguments), n && !t && u()), this;
              },
              remove: function () {
                return E.each(arguments, function (e, t) {
                  for (var n; (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--;
                }), this;
              },
              has: function (e) {
                return e ? E.inArray(e, o) > -1 : o.length > 0;
              },
              empty: function () {
                return o && (o = []), this;
              },
              disable: function () {
                return i = a = [], o = n = "", this;
              },
              disabled: function () {
                return !o;
              },
              lock: function () {
                return i = a = [], n || t || (o = n = ""), this;
              },
              locked: function () {
                return !!i;
              },
              fireWith: function (e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
              },
              fire: function () {
                return c.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              }
            };

            return c;
          }, E.extend({
            Deferred: function (e) {
              var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                  n = "pending",
                  i = {
                state: function () {
                  return n;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return E.Deferred(function (n) {
                    E.each(t, function (t, r) {
                      var i = g(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && g(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }), e = null;
                  }).promise();
                },
                then: function (e, n, i) {
                  var o = 0;

                  function a(e, t, n, i) {
                    return function () {
                      var s = this,
                          u = arguments,
                          c = function () {
                        var r, c;

                        if (!(e < o)) {
                          if ((r = n.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                          c = r && ("object" == typeof r || "function" == typeof r) && r.then, g(c) ? i ? c.call(r, a(o, t, W, i), a(o, t, B, i)) : (o++, c.call(r, a(o, t, W, i), a(o, t, B, i), a(o, t, W, t.notifyWith))) : (n !== W && (s = void 0, u = [r]), (i || t.resolveWith)(s, u));
                        }
                      },
                          l = i ? c : function () {
                        try {
                          c();
                        } catch (r) {
                          E.Deferred.exceptionHook && E.Deferred.exceptionHook(r, l.stackTrace), e + 1 >= o && (n !== B && (s = void 0, u = [r]), t.rejectWith(s, u));
                        }
                      };

                      e ? l() : (E.Deferred.getStackHook && (l.stackTrace = E.Deferred.getStackHook()), r.setTimeout(l));
                    };
                  }

                  return E.Deferred(function (r) {
                    t[0][3].add(a(0, r, g(i) ? i : W, r.notifyWith)), t[1][3].add(a(0, r, g(e) ? e : W)), t[2][3].add(a(0, r, g(n) ? n : B));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? E.extend(e, i) : i;
                }
              },
                  o = {};
              return E.each(t, function (e, r) {
                var a = r[2],
                    s = r[5];
                i[r[1]] = a.add, s && a.add(function () {
                  n = s;
                }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(r[3].fire), o[r[0]] = function () {
                  return o[r[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[r[0] + "With"] = a.fireWith;
              }), i.promise(o), e && e.call(o, o), o;
            },
            when: function (e) {
              var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = s.call(arguments),
                  o = E.Deferred(),
                  a = function (e) {
                return function (n) {
                  r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i);
                };
              };

              if (t <= 1 && ($(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || g(i[n] && i[n].then))) return o.then();

              for (; n--;) $(i[n], a(n), o.reject);

              return o.promise();
            }
          });
          var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          E.Deferred.exceptionHook = function (e, t) {
            r.console && r.console.warn && e && _.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }, E.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          };
          var F = E.Deferred();

          function V() {
            b.removeEventListener("DOMContentLoaded", V), r.removeEventListener("load", V), E.ready();
          }

          E.fn.ready = function (e) {
            return F.then(e).catch(function (e) {
              E.readyException(e);
            }), this;
          }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || F.resolveWith(b, [E]));
            }
          }), E.ready.then = F.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? r.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", V), r.addEventListener("load", V));

          var U = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                c = null == n;
            if ("object" === T(n)) for (s in i = !0, n) U(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, g(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
              return c.call(E(e), n);
            })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
          },
              z = /^-ms-/,
              X = /-([a-z])/g;

          function K(e, t) {
            return t.toUpperCase();
          }

          function Y(e) {
            return e.replace(z, "ms-").replace(X, K);
          }

          var G = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };

          function Q() {
            this.expando = E.expando + Q.uid++;
          }

          Q.uid = 1, Q.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
              }))), t;
            },
            set: function (e, t, n) {
              var r,
                  i = this.cache(e);
              if ("string" == typeof t) i[Y(t)] = n;else for (r in t) i[Y(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                  r = e[this.expando];

              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(I) || []).length;

                  for (; n--;) delete r[t[n]];
                }

                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !E.isEmptyObject(t);
            }
          };
          var J = new Q(),
              Z = new Q(),
              ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              te = /[A-Z]/g;

          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
              try {
                n = function (e) {
                  return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
                }(n);
              } catch (e) {}

              Z.set(e, t, n);
            } else n = void 0;
            return n;
          }

          E.extend({
            hasData: function (e) {
              return Z.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            }
          }), E.fn.extend({
            data: function (e, t) {
              var n,
                  r,
                  i,
                  o = this[0],
                  a = o && o.attributes;

              if (void 0 === e) {
                if (this.length && (i = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                  for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(o, r, i[r]));

                  J.set(o, "hasDataAttrs", !0);
                }

                return i;
              }

              return "object" == typeof e ? this.each(function () {
                Z.set(this, e);
              }) : U(this, function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                this.each(function () {
                  Z.set(this, e, t);
                });
              }, null, t, arguments.length > 1, null, !0);
            },
            removeData: function (e) {
              return this.each(function () {
                Z.remove(this, e);
              });
            }
          }), E.extend({
            queue: function (e, t, n) {
              var r;
              if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, E.makeArray(n)) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
              t = t || "fx";

              var n = E.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = E._queueHooks(e, t);

              "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                E.dequeue(e, t);
              }, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return J.get(e, n) || J.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                })
              });
            }
          }), E.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = E.queue(this, e, t);
                E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e);
              });
            },
            dequeue: function (e) {
              return this.each(function () {
                E.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                  r = 1,
                  i = E.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                --r || i.resolveWith(o, [o]);
              };

              for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));

              return s(), i.promise(t);
            }
          });

          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
              oe = ["Top", "Right", "Bottom", "Left"],
              ae = b.documentElement,
              se = function (e) {
            return E.contains(e.ownerDocument, e);
          },
              ue = {
            composed: !0
          };

          ae.getRootNode && (se = function (e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
          });

          var ce = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display");
          };

          function le(e, t, n, r) {
            var i,
                o,
                a = 20,
                s = r ? function () {
              return r.cur();
            } : function () {
              return E.css(e, t, "");
            },
                u = s(),
                c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                l = e.nodeType && (E.cssNumber[t] || "px" !== c && +u) && ie.exec(E.css(e, t));

            if (l && l[3] !== c) {
              for (u /= 2, c = c || l[3], l = +u || 1; a--;) E.style(e, t, l + c), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), l /= o;

              l *= 2, E.style(e, t, l + c), n = n || [];
            }

            return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i;
          }

          var fe = {};

          function pe(e) {
            var t,
                n = e.ownerDocument,
                r = e.nodeName,
                i = fe[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = E.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), fe[r] = i, i);
          }

          function de(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ce(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));

            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);

            return e;
          }

          E.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ce(this) ? E(this).show() : E(this).hide();
              });
            }
          });
          var he,
              me,
              ve = /^(?:checkbox|radio)$/i,
              ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              ye = /^$|^module$|\/(?:java|ecma)script/i;
          he = b.createDocumentFragment().appendChild(b.createElement("div")), (me = b.createElement("input")).setAttribute("type", "radio"), me.setAttribute("checked", "checked"), me.setAttribute("name", "t"), he.appendChild(me), v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", v.option = !!he.lastChild;
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };

          function xe(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? E.merge([e], n) : n;
          }

          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }

          be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, v.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;

          function Ce(e, t, n, r, i) {
            for (var o, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === T(o)) E.merge(p, o.nodeType ? [o] : o);else if (Te.test(o)) {
              for (a = a || f.appendChild(t.createElement("div")), s = (ge.exec(o) || ["", ""])[1].toLowerCase(), u = be[s] || be._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;

              E.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));

            for (f.textContent = "", d = 0; o = p[d++];) if (r && E.inArray(o, r) > -1) i && i.push(o);else if (c = se(o), a = xe(f.appendChild(o), "script"), c && we(a), n) for (l = 0; o = a[l++];) ye.test(o.type || "") && n.push(o);

            return f;
          }

          var Ee = /^key/,
              ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
              Ae = /^([^.]*)(?:\.(.+)|)/;

          function je() {
            return !0;
          }

          function Oe() {
            return !1;
          }

          function De(e, t) {
            return e === function () {
              try {
                return b.activeElement;
              } catch (e) {}
            }() == ("focus" === t);
          }

          function Se(e, t, n, r, i, o) {
            var a, s;

            if ("object" == typeof t) {
              for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);

              return e;
            }

            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Oe;else if (!i) return e;
            return 1 === o && (a = i, (i = function (e) {
              return E().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
              E.event.add(this, t, i, r, n);
            });
          }

          function Ne(e, t, n) {
            n ? (J.set(e, t, !1), E.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                    i,
                    o = J.get(this, t);

                if (1 & e.isTrigger && this[t]) {
                  if (o.length) (E.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = s.call(arguments), J.set(this, t, o), r = n(this, t), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                } else o.length && (J.set(this, t, {
                  value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                }), e.stopImmediatePropagation());
              }
            })) : void 0 === J.get(e, t) && E.event.add(e, t, je);
          }

          E.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  m,
                  v = J.get(e);
              if (G(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(ae, i), n.guid || (n.guid = E.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
                return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
              }), c = (t = (t || "").match(I) || [""]).length; c--;) d = m = (s = Ae.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, l = E.extend({
                type: d,
                origType: m,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && E.expr.match.needsContext.test(i),
                namespace: h.join(".")
              }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), E.event.global[d] = !0);
            },
            remove: function (e, t, n, r, i) {
              var o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d,
                  h,
                  m,
                  v = J.hasData(e) && J.get(e);

              if (v && (u = v.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--;) if (d = m = (s = Ae.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                  for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));

                  a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, d, v.handle), delete u[d]);
                } else for (d in u) E.event.remove(e, d + t[c], n, r, !0);

                E.isEmptyObject(u) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s = new Array(arguments.length),
                  u = E.event.fix(e),
                  c = (J.get(this, "events") || Object.create(null))[u.type] || [],
                  l = E.event.special[u.type] || {};

              for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];

              if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                for (a = E.event.handlers.call(this, u, c), t = 0; (i = a[t++]) && !u.isPropagationStopped();) for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));

                return l.postDispatch && l.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                  r,
                  i,
                  o,
                  a,
                  s = [],
                  u = t.delegateCount,
                  c = e.target;
              if (u && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? E(i, this).index(c) > -1 : E.find(i, this, null, [c]).length), a[i] && o.push(r);

                o.length && s.push({
                  elem: c,
                  handlers: o
                });
              }
              return c = this, u < t.length && s.push({
                elem: c,
                handlers: t.slice(u)
              }), s;
            },
            addProp: function (e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                } : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                  });
                }
              });
            },
            fix: function (e) {
              return e[E.expando] ? e : new E.Event(e);
            },
            special: {
              load: {
                noBubble: !0
              },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return ve.test(t.type) && t.click && S(t, "input") && Ne(t, "click", je), !1;
                },
                trigger: function (e) {
                  var t = this || e;
                  return ve.test(t.type) && t.click && S(t, "input") && Ne(t, "click"), !0;
                },
                _default: function (e) {
                  var t = e.target;
                  return ve.test(t.type) && t.click && S(t, "input") && J.get(t, "click") || S(t, "a");
                }
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
              }
            }
          }, E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }, E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? je : Oe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
          }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Oe,
            isPropagationStopped: Oe,
            isImmediatePropagationStopped: Oe,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              this.isDefaultPrevented = je, e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              this.isPropagationStopped = je, e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              this.isImmediatePropagationStopped = je, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            }
          }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
            }
          }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
          }, function (e, t) {
            E.event.special[e] = {
              setup: function () {
                return Ne(this, e, De), !1;
              },
              trigger: function () {
                return Ne(this, e), !0;
              },
              delegateType: t
            };
          }), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          }, function (e, t) {
            E.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || E.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
              }
            };
          }), E.fn.extend({
            on: function (e, t, n, r) {
              return Se(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return Se(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);

                return this;
              }

              return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Oe), this.each(function () {
                E.event.remove(this, e, n, t);
              });
            }
          });
          var Le = /<script|<style|<link/i,
              qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
              He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

          function Me(e, t) {
            return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
          }

          function Pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
          }

          function Re(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
          }

          function Ie(e, t) {
            var n, r, i, o, a, s;

            if (1 === t.nodeType) {
              if (J.hasData(e) && (s = J.get(e).events)) for (i in J.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
              Z.hasData(e) && (o = Z.access(e), a = E.extend({}, o), Z.set(t, a));
            }
          }

          function We(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
          }

          function Be(e, t, n, r) {
            t = u(t);
            var i,
                o,
                a,
                s,
                c,
                l,
                f = 0,
                p = e.length,
                d = p - 1,
                h = t[0],
                m = g(h);
            if (m || p > 1 && "string" == typeof h && !v.checkClone && qe.test(h)) return e.each(function (i) {
              var o = e.eq(i);
              m && (t[0] = h.call(this, i, o.html())), Be(o, t, n, r);
            });

            if (p && (o = (i = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
              for (s = (a = E.map(xe(i, "script"), Pe)).length; f < p; f++) c = i, f !== d && (c = E.clone(c, !0, !0), s && E.merge(a, xe(c, "script"))), n.call(e[f], c, f);

              if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, Re), f = 0; f < s; f++) c = a[f], ye.test(c.type || "") && !J.access(c, "globalEval") && E.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
                nonce: c.nonce || c.getAttribute("nonce")
              }, l) : w(c.textContent.replace(He, ""), c, l));
            }

            return e;
          }

          function $e(e, t, n) {
            for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(xe(r)), r.parentNode && (n && se(r) && we(xe(r, "script")), r.parentNode.removeChild(r));

            return e;
          }

          E.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s = e.cloneNode(!0),
                  u = se(e);
              if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = xe(s), r = 0, i = (o = xe(e)).length; r < i; r++) We(o[r], a[r]);
              if (t) if (n) for (o = o || xe(e), a = a || xe(s), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);else Ie(e, s);
              return (a = xe(s, "script")).length > 0 && we(a, !u && xe(e, "script")), s;
            },
            cleanData: function (e) {
              for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                if (t = n[J.expando]) {
                  if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                  n[J.expando] = void 0;
                }

                n[Z.expando] && (n[Z.expando] = void 0);
              }
            }
          }), E.fn.extend({
            detach: function (e) {
              return $e(this, e, !0);
            },
            remove: function (e) {
              return $e(this, e);
            },
            text: function (e) {
              return U(this, function (e) {
                return void 0 === e ? E.text(this) : this.empty().each(function () {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
              }, null, e, arguments.length);
            },
            append: function () {
              return Be(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Be(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Me(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Be(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Be(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(xe(e, !1)), e.textContent = "");

              return this;
            },
            clone: function (e, t) {
              return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return E.clone(this, e, t);
              });
            },
            html: function (e) {
              return U(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

                if ("string" == typeof e && !Le.test(e) && !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = E.htmlPrefilter(e);

                  try {
                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(xe(t, !1)), t.innerHTML = e);

                    t = 0;
                  } catch (e) {}
                }

                t && this.empty().append(e);
              }, null, e, arguments.length);
            },
            replaceWith: function () {
              var e = [];
              return Be(this, arguments, function (t) {
                var n = this.parentNode;
                E.inArray(this, e) < 0 && (E.cleanData(xe(this)), n && n.replaceChild(t, this));
              }, e);
            }
          }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          }, function (e, t) {
            E.fn[e] = function (e) {
              for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), E(i[a])[t](n), c.apply(r, n.get());

              return this.pushStack(r);
            };
          });

          var _e = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
              Fe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = r), t.getComputedStyle(e);
          },
              Ve = function (e, t, n) {
            var r,
                i,
                o = {};

            for (i in t) o[i] = e.style[i], e.style[i] = t[i];

            for (i in r = n.call(e), t) e.style[i] = o[i];

            return r;
          },
              Ue = new RegExp(oe.join("|"), "i");

          function ze(e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.style;
            return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && _e.test(a) && Ue.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
          }

          function Xe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              }
            };
          }

          !function () {
            function e() {
              if (l) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(c).appendChild(l);
                var e = r.getComputedStyle(l);
                n = "1%" !== e.top, u = 12 === t(e.marginLeft), l.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 12 === t(l.offsetWidth / 3), ae.removeChild(c), l = null;
              }
            }

            function t(e) {
              return Math.round(parseFloat(e));
            }

            var n,
                i,
                o,
                a,
                s,
                u,
                c = b.createElement("div"),
                l = b.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), u;
              },
              scrollboxSize: function () {
                return e(), o;
              },
              reliableTrDimensions: function () {
                var e, t, n, i;
                return null == s && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", ae.appendChild(e).appendChild(t).appendChild(n), i = r.getComputedStyle(t), s = parseInt(i.height) > 3, ae.removeChild(e)), s;
              }
            }));
          }();
          var Ke = ["Webkit", "Moz", "ms"],
              Ye = b.createElement("div").style,
              Ge = {};

          function Qe(e) {
            var t = E.cssProps[e] || Ge[e];
            return t || (e in Ye ? e : Ge[e] = function (e) {
              for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;) if ((e = Ke[n] + t) in Ye) return e;
            }(e) || e);
          }

          var Je = /^(none|table(?!-c[ea]).+)/,
              Ze = /^--/,
              et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
          },
              tt = {
            letterSpacing: "0",
            fontWeight: "400"
          };

          function nt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }

          function rt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;

            for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + oe[a] + "Width", !0, i))) : (u += E.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += E.css(e, "border" + oe[a] + "Width", !0, i) : s += E.css(e, "border" + oe[a] + "Width", !0, i));

            return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
          }

          function it(e, t, n) {
            var r = Fe(e),
                i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                o = i,
                a = ze(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);

            if (_e.test(a)) {
              if (!n) return a;
              a = "auto";
            }

            return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && S(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
          }

          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }

          E.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = ze(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                }
              }
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = Y(t),
                    u = Ze.test(t),
                    c = e.style;
                if (u || (t = Qe(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n));
              }
            },
            css: function (e, t, n, r) {
              var i,
                  o,
                  a,
                  s = Y(t);
              return Ze.test(t) || (t = Qe(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
            }
          }), E.each(["height", "width"], function (e, t) {
            E.cssHooks[t] = {
              get: function (e, n, r) {
                if (n) return !Je.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : Ve(e, et, function () {
                  return it(e, t, r);
                });
              },
              set: function (e, n, r) {
                var i,
                    o = Fe(e),
                    a = !v.scrollboxSize() && "absolute" === o.position,
                    s = (a || r) && "border-box" === E.css(e, "boxSizing", !1, o),
                    u = r ? rt(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - .5)), u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = E.css(e, t)), nt(0, n, u);
              }
            };
          }), E.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
              marginLeft: 0
            }, function () {
              return e.getBoundingClientRect().left;
            })) + "px";
          }), E.each({
            margin: "",
            padding: "",
            border: "Width"
          }, function (e, t) {
            E.cssHooks[e + t] = {
              expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];

                return i;
              }
            }, "margin" !== e && (E.cssHooks[e + t].set = nt);
          }), E.fn.extend({
            css: function (e, t) {
              return U(this, function (e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;

                if (Array.isArray(t)) {
                  for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);

                  return o;
                }

                return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
              }, e, t, arguments.length > 1);
            }
          }), E.Tween = ot, ot.prototype = {
            constructor: ot,
            init: function (e, t, n, r, i, o) {
              this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px");
            },
            cur: function () {
              var e = ot.propHooks[this.prop];
              return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                  n = ot.propHooks[this.prop];
              return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
            }
          }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
              },
              set: function (e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
              }
            }
          }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            }
          }, E.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return .5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
          }, E.fx = ot.prototype.init, E.fx.step = {};
          var at,
              st,
              ut = /^(?:toggle|show|hide)$/,
              ct = /queueHooks$/;

          function lt() {
            st && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(lt) : r.setTimeout(lt, E.fx.interval), E.fx.tick());
          }

          function ft() {
            return r.setTimeout(function () {
              at = void 0;
            }), at = Date.now();
          }

          function pt(e, t) {
            var n,
                r = 0,
                i = {
              height: e
            };

            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;

            return t && (i.opacity = i.width = e), i;
          }

          function dt(e, t, n) {
            for (var r, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
          }

          function ht(e, t, n) {
            var r,
                i,
                o = 0,
                a = ht.prefilters.length,
                s = E.Deferred().always(function () {
              delete u.elem;
            }),
                u = function () {
              if (i) return !1;

              for (var t = at || ft(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);

              return s.notifyWith(e, [c, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
            },
                c = s.promise({
              elem: e,
              props: E.extend({}, t),
              opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: at || ft(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                    r = t ? c.tweens.length : 0;
                if (i) return this;

                for (i = !0; n < r; n++) c.tweens[n].run(1);

                return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
              }
            }),
                l = c.props;

            for (!function (e, t) {
              var n, r, i, o, a;

              for (n in e) if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
            }(l, c.opts.specialEasing); o < a; o++) if (r = ht.prefilters[o].call(c, e, l, c.opts)) return g(r.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;

            return E.map(l, dt, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(u, {
              elem: e,
              anim: c,
              queue: c.opts.queue
            })), c;
          }

          E.Animation = E.extend(ht, {
            tweeners: {
              "*": [function (e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ie.exec(t), n), n;
              }]
            },
            tweener: function (e, t) {
              g(e) ? (t = e, e = ["*"]) : e = e.match(I);

              for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t);
            },
            prefilters: [function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  m = e.nodeType && ce(e),
                  v = J.get(e, "fxshow");

              for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s();
              }), a.unqueued++, p.always(function () {
                p.always(function () {
                  a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                });
              })), t) if (i = t[r], ut.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  m = !0;
                }

                d[r] = v && v[r] || E.style(e, r);
              }

              if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = J.get(e, "display")), "none" === (l = E.css(e, "display")) && (c ? l = c : (de([e], !0), c = e.style.display || c, l = E.css(e, "display"), de([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === E.css(e, "float") && (u || (p.done(function () {
                h.display = c;
              }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
              })), u = !1, d) u || (v ? "hidden" in v && (m = v.hidden) : v = J.access(e, "fxshow", {
                display: c
              }), o && (v.hidden = !m), m && de([e], !0), p.done(function () {
                for (r in m || de([e]), J.remove(e, "fxshow"), d) E.style(e, r, d[r]);
              })), u = dt(m ? v[r] : 0, r, p), r in v || (v[r] = u.start, m && (u.end = u.start, u.start = 0));
            }],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            }
          }), E.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : {
              complete: n || !n && t || g(e) && e,
              duration: e,
              easing: n && t || t && !g(t) && t
            };
            return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
              g(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
            }, r;
          }, E.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ce).css("opacity", 0).show().end().animate({
                opacity: t
              }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = E.isEmptyObject(e),
                  o = E.speed(t, n, r),
                  a = function () {
                var t = ht(this, E.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
              };

              return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };

              return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = E.timers,
                    a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);

                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));

                !t && n || E.dequeue(this, e);
              });
            },
            finish: function (e) {
              return !1 !== e && (e = e || "fx"), this.each(function () {
                var t,
                    n = J.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = E.timers,
                    a = r ? r.length : 0;

                for (n.finish = !0, E.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));

                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);

                delete n.finish;
              });
            }
          }), E.each(["toggle", "show", "hide"], function (e, t) {
            var n = E.fn[t];

            E.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, i);
            };
          }), E.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {
              opacity: "show"
            },
            fadeOut: {
              opacity: "hide"
            },
            fadeToggle: {
              opacity: "toggle"
            }
          }, function (e, t) {
            E.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }), E.timers = [], E.fx.tick = function () {
            var e,
                t = 0,
                n = E.timers;

            for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

            n.length || E.fx.stop(), at = void 0;
          }, E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start();
          }, E.fx.interval = 13, E.fx.start = function () {
            st || (st = !0, lt());
          }, E.fx.stop = function () {
            st = null;
          }, E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
          }, E.fn.delay = function (e, t) {
            return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
              var i = r.setTimeout(t, e);

              n.stop = function () {
                r.clearTimeout(i);
              };
            });
          }, function () {
            var e = b.createElement("input"),
                t = b.createElement("select").appendChild(b.createElement("option"));
            e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
          }();
          var mt,
              vt = E.expr.attrHandle;
          E.fn.extend({
            attr: function (e, t) {
              return U(this, E.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                E.removeAttr(this, e);
              });
            }
          }), E.extend({
            attr: function (e, t, n) {
              var r,
                  i,
                  o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!v.radioValue && "radio" === t && S(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                }
              }
            },
            removeAttr: function (e, t) {
              var n,
                  r = 0,
                  i = t && t.match(I);
              if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
            }
          }), mt = {
            set: function (e, t, n) {
              return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
          }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = vt[t] || E.find.attr;

            vt[t] = function (e, t, r) {
              var i,
                  o,
                  a = t.toLowerCase();
              return r || (o = vt[a], vt[a] = i, i = null != n(e, t, r) ? a : null, vt[a] = o), i;
            };
          });
          var gt = /^(?:input|select|textarea|button)$/i,
              yt = /^(?:a|area)$/i;

          function bt(e) {
            return (e.match(I) || []).join(" ");
          }

          function xt(e) {
            return e.getAttribute && e.getAttribute("class") || "";
          }

          function wt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || [];
          }

          E.fn.extend({
            prop: function (e, t) {
              return U(this, E.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[E.propFix[e] || e];
              });
            }
          }), E.extend({
            prop: function (e, t, n) {
              var r,
                  i,
                  o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = E.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
              }
            },
            propFix: {
              for: "htmlFor",
              class: "className"
            }
          }), v.optSelected || (E.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            E.propFix[this.toLowerCase()] = this;
          }), E.fn.extend({
            addClass: function (e) {
              var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
              if (g(e)) return this.each(function (t) {
                E(this).addClass(e.call(this, t, xt(this)));
              });
              if ((t = wt(e)).length) for (; n = this[u++];) if (i = xt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");

                i !== (s = bt(r)) && n.setAttribute("class", s);
              }
              return this;
            },
            removeClass: function (e) {
              var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
              if (g(e)) return this.each(function (t) {
                E(this).removeClass(e.call(this, t, xt(this)));
              });
              if (!arguments.length) return this.attr("class", "");
              if ((t = wt(e)).length) for (; n = this[u++];) if (i = xt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");

                i !== (s = bt(r)) && n.setAttribute("class", s);
              }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                  r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                E(this).toggleClass(e.call(this, n, xt(this), t), t);
              }) : this.each(function () {
                var t, i, o, a;
                if (r) for (i = 0, o = E(this), a = wt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);else void 0 !== e && "boolean" !== n || ((t = xt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
              });
            },
            hasClass: function (e) {
              var t,
                  n,
                  r = 0;

              for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + bt(xt(n)) + " ").indexOf(t) > -1) return !0;

              return !1;
            }
          });
          var Tt = /\r/g;
          E.fn.extend({
            val: function (e) {
              var t,
                  n,
                  r,
                  i = this[0];
              return arguments.length ? (r = g(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, E(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, function (e) {
                  return null == e ? "" : e + "";
                })), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
              })) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0;
            }
          }), E.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = E.find.attr(e, "value");
                  return null != t ? t : bt(E.text(e));
                }
              },
              select: {
                get: function (e) {
                  var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;

                  for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                    if (t = E(n).val(), a) return t;
                    s.push(t);
                  }

                  return s;
                },
                set: function (e, t) {
                  for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);

                  return n || (e.selectedIndex = -1), o;
                }
              }
            }
          }), E.each(["radio", "checkbox"], function () {
            E.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1;
              }
            }, v.checkOn || (E.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
          }), v.focusin = "onfocusin" in r;

          var Ct = /^(?:focusinfocus|focusoutblur)$/,
              Et = function (e) {
            e.stopPropagation();
          };

          E.extend(E.event, {
            trigger: function (e, t, n, i) {
              var o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  h = [n || b],
                  m = d.call(e, "type") ? e.type : e,
                  v = d.call(e, "namespace") ? e.namespace.split(".") : [];

              if (a = p = s = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(m + E.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), f = E.event.special[m] || {}, i || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                if (!i && !f.noBubble && !y(n)) {
                  for (u = f.delegateType || m, Ct.test(u + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;

                  s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r);
                }

                for (o = 0; (a = h[o++]) && !e.isPropagationStopped();) p = a, e.type = o > 1 ? u : f.bindType || m, (l = (J.get(a, "events") || Object.create(null))[e.type] && J.get(a, "handle")) && l.apply(a, t), (l = c && a[c]) && l.apply && G(a) && (e.result = l.apply(a, t), !1 === e.result && e.preventDefault());

                return e.type = m, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !G(n) || c && g(n[m]) && !y(n) && ((s = n[c]) && (n[c] = null), E.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Et), n[m](), e.isPropagationStopped() && p.removeEventListener(m, Et), E.event.triggered = void 0, s && (n[c] = s)), e.result;
              }
            },
            simulate: function (e, t, n) {
              var r = E.extend(new E.Event(), n, {
                type: e,
                isSimulated: !0
              });
              E.event.trigger(r, null, t);
            }
          }), E.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                E.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return E.event.trigger(e, t, n, !0);
            }
          }), v.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
          }, function (e, t) {
            var n = function (e) {
              E.event.simulate(t, e.target, E.event.fix(e));
            };

            E.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
              }
            };
          });
          var kt = r.location,
              At = {
            guid: Date.now()
          },
              jt = /\?/;

          E.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;

            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {
              t = void 0;
            }

            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t;
          };

          var Ot = /\[\]$/,
              Dt = /\r?\n/g,
              St = /^(?:submit|button|image|reset|file)$/i,
              Nt = /^(?:input|select|textarea|keygen)/i;

          function Lt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) E.each(t, function (t, i) {
              n || Ot.test(e) ? r(e, i) : Lt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });else if (n || "object" !== T(t)) r(e, t);else for (i in t) Lt(e + "[" + i + "]", t[i], n, r);
          }

          E.param = function (e, t) {
            var n,
                r = [],
                i = function (e, t) {
              var n = g(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };

            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
              i(this.name, this.value);
            });else for (n in e) Lt(n, e[n], t, i);
            return r.join("&");
          }, E.fn.extend({
            serialize: function () {
              return E.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this;
              }).filter(function () {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !St.test(e) && (this.checked || !ve.test(e));
              }).map(function (e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Dt, "\r\n")
                  };
                }) : {
                  name: t.name,
                  value: n.replace(Dt, "\r\n")
                };
              }).get();
            }
          });

          var qt = /%20/g,
              Ht = /#.*$/,
              Mt = /([?&])_=[^&]*/,
              Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Rt = /^(?:GET|HEAD)$/,
              It = /^\/\//,
              Wt = {},
              Bt = {},
              $t = "*/".concat("*"),
              _t = b.createElement("a");

          function Ft(e) {
            return function (t, n) {
              "string" != typeof t && (n = t, t = "*");
              var r,
                  i = 0,
                  o = t.toLowerCase().match(I) || [];
              if (g(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
            };
          }

          function Vt(e, t, n, r) {
            var i = {},
                o = e === Bt;

            function a(s) {
              var u;
              return i[s] = !0, E.each(e[s] || [], function (e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1);
              }), u;
            }

            return a(t.dataTypes[0]) || !i["*"] && a("*");
          }

          function Ut(e, t) {
            var n,
                r,
                i = E.ajaxSettings.flatOptions || {};

            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);

            return r && E.extend(!0, e, r), e;
          }

          _t.href = kt.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: kt.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
              },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
              },
              flatOptions: {
                url: !0,
                context: !0
              }
            },
            ajaxSetup: function (e, t) {
              return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Wt),
            ajaxTransport: Ft(Bt),
            ajax: function (e, t) {
              "object" == typeof e && (t = e, e = void 0), t = t || {};
              var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c,
                  l,
                  f,
                  p,
                  d = E.ajaxSetup({}, t),
                  h = d.context || d,
                  m = d.context && (h.nodeType || h.jquery) ? E(h) : E.event,
                  v = E.Deferred(),
                  g = E.Callbacks("once memory"),
                  y = d.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;

                  if (c) {
                    if (!a) for (a = {}; t = Pt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }

                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
                },
                overrideMimeType: function (e) {
                  return null == c && (d.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e) if (c) C.always(e[C.status]);else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return n && n.abort(t), k(0, t), this;
                }
              };

              if (v.promise(C), d.url = ((e || d.url || kt.href) + "").replace(It, kt.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(I) || [""], null == d.crossDomain) {
                u = b.createElement("a");

                try {
                  u.href = d.url, u.href = u.href, d.crossDomain = _t.protocol + "//" + _t.host != u.protocol + "//" + u.host;
                } catch (e) {
                  d.crossDomain = !0;
                }
              }

              if (d.data && d.processData && "string" != typeof d.data && (d.data = E.param(d.data, d.traditional)), Vt(Wt, d, t, C), c) return C;

              for (f in (l = E.event && d.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Rt.test(d.type), i = d.url.replace(Ht, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(qt, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (jt.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(Mt, "$1"), p = (jt.test(i) ? "&" : "?") + "_=" + At.guid++ + p), d.url = i + p), d.ifModified && (E.lastModified[i] && C.setRequestHeader("If-Modified-Since", E.lastModified[i]), E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : d.accepts["*"]), d.headers) C.setRequestHeader(f, d.headers[f]);

              if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || c)) return C.abort();

              if (T = "abort", g.add(d.complete), C.done(d.success), C.fail(d.error), n = Vt(Bt, d, t, C)) {
                if (C.readyState = 1, l && m.trigger("ajaxSend", [C, d]), c) return C;
                d.async && d.timeout > 0 && (s = r.setTimeout(function () {
                  C.abort("timeout");
                }, d.timeout));

                try {
                  c = !1, n.send(x, k);
                } catch (e) {
                  if (c) throw e;
                  k(-1, e);
                }
              } else k(-1, "No Transport");

              function k(e, t, a, u) {
                var f,
                    p,
                    b,
                    x,
                    w,
                    T = t;
                c || (c = !0, s && r.clearTimeout(s), n = void 0, o = u || "", C.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (x = function (e, t, n) {
                  for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

                  if (r) for (i in s) if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                  }
                  if (u[0] in n) o = u[0];else {
                    for (i in n) {
                      if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break;
                      }

                      a || (a = i);
                    }

                    o = o || a;
                  }
                  if (o) return o !== u[0] && u.unshift(o), n[o];
                }(d, C, a)), !f && E.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function () {}), x = function (e, t, n, r) {
                  var i,
                      o,
                      a,
                      s,
                      u,
                      c = {},
                      l = e.dataTypes.slice();
                  if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];

                  for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                    if (!(a = c[u + " " + o] || c["* " + o])) for (i in c) if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                      !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
                      break;
                    }
                    if (!0 !== a) if (a && e.throws) t = a(t);else try {
                      t = a(t);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                      };
                    }
                  }

                  return {
                    state: "success",
                    data: t
                  };
                }(d, x, C, f), f ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w), (w = C.getResponseHeader("etag")) && (E.etag[i] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, p = x.data, f = !(b = x.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, b]), C.statusCode(y), y = void 0, l && m.trigger(f ? "ajaxSuccess" : "ajaxError", [C, d, f ? p : b]), g.fireWith(h, [C, T]), l && (m.trigger("ajaxComplete", [C, d]), --E.active || E.event.trigger("ajaxStop")));
              }

              return C;
            },
            getJSON: function (e, t, n) {
              return E.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return E.get(e, void 0, t, "script");
            }
          }), E.each(["get", "post"], function (e, t) {
            E[t] = function (e, n, r, i) {
              return g(n) && (i = i || r, r = n, n = void 0), E.ajax(E.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
              }, E.isPlainObject(e) && e));
            };
          }), E.ajaxPrefilter(function (e) {
            var t;

            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }), E._evalUrl = function (e, t, n) {
            return E.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: {
                "text script": function () {}
              },
              dataFilter: function (e) {
                E.globalEval(e, t, n);
              }
            });
          }, E.fn.extend({
            wrapAll: function (e) {
              var t;
              return this[0] && (g(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;

                return e;
              }).append(this)), this;
            },
            wrapInner: function (e) {
              return g(e) ? this.each(function (t) {
                E(this).wrapInner(e.call(this, t));
              }) : this.each(function () {
                var t = E(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
            },
            wrap: function (e) {
              var t = g(e);
              return this.each(function (n) {
                E(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return this.parent(e).not("body").each(function () {
                E(this).replaceWith(this.childNodes);
              }), this;
            }
          }), E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e);
          }, E.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }, E.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) {}
          };
          var zt = {
            0: 200,
            1223: 204
          },
              Xt = E.ajaxSettings.xhr();
          v.cors = !!Xt && "withCredentials" in Xt, v.ajax = Xt = !!Xt, E.ajaxTransport(function (e) {
            var t, n;
            if (v.cors || Xt && !e.crossDomain) return {
              send: function (i, o) {
                var a,
                    s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];

                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);

                t = function (e) {
                  return function () {
                    t && (t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                      binary: s.response
                    } : {
                      text: s.responseText
                    }, s.getAllResponseHeaders()));
                  };
                }, s.onload = t(), n = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function () {
                  4 === s.readyState && r.setTimeout(function () {
                    t && n();
                  });
                }, t = t("abort");

                try {
                  s.send(e.hasContent && e.data || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              }
            };
          }), E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }), E.ajaxSetup({
            accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
              script: /\b(?:java|ecma)script\b/
            },
            converters: {
              "text script": function (e) {
                return E.globalEval(e), e;
              }
            }
          }), E.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }), E.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
              send: function (r, i) {
                t = E("<script>").attr(e.scriptAttrs || {}).prop({
                  charset: e.scriptCharset,
                  src: e.url
                }).on("load error", n = function (e) {
                  t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                }), b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              }
            };
          });
          var Kt,
              Yt = [],
              Gt = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || E.expando + "_" + At.guid++;
              return this[e] = !0, e;
            }
          }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                o,
                a,
                s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
              return a || E.error(i + " was not called"), a[0];
            }, e.dataTypes[0] = "json", o = r[i], r[i] = function () {
              a = arguments;
            }, n.always(function () {
              void 0 === o ? E(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
            }), "script";
          }), v.createHTMLDocument = ((Kt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length), E.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = Ce([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
            var r, i, o;
          }, E.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = bt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && E.ajax({
              url: e,
              type: i || "GET",
              dataType: "html",
              data: t
            }).done(function (e) {
              o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
            }).always(n && function (e, t) {
              a.each(function () {
                n.apply(this, o || [e.responseText, t, e]);
              });
            }), this;
          }, E.expr.pseudos.animated = function (e) {
            return E.grep(E.timers, function (t) {
              return e === t.elem;
            }).length;
          }, E.offset = {
            setOffset: function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c = E.css(e, "position"),
                  l = E(e),
                  f = {};
              "static" === c && (e.style.position = "relative"), s = l.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1 ? (a = (r = l.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), l.css(f));
            }
          }, E.fn.extend({
            offset: function (e) {
              if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                E.offset.setOffset(this, e, t);
              });
              var t,
                  n,
                  r = this[0];
              return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
              }) : {
                top: 0,
                left: 0
              } : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = {
                  top: 0,
                  left: 0
                };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();else {
                  for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;

                  e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0));
                }
                return {
                  top: t.top - i.top - E.css(r, "marginTop", !0),
                  left: t.left - i.left - E.css(r, "marginLeft", !0)
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;

                return e || ae;
              });
            }
          }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
          }, function (e, t) {
            var n = "pageYOffset" === t;

            E.fn[e] = function (r) {
              return U(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
              }, e, r, arguments.length);
            };
          }), E.each(["top", "left"], function (e, t) {
            E.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
              if (n) return n = ze(e, t), _e.test(n) ? E(e).position()[t] + "px" : n;
            });
          }), E.each({
            Height: "height",
            Width: "width"
          }, function (e, t) {
            E.each({
              padding: "inner" + e,
              content: t,
              "": "outer" + e
            }, function (n, r) {
              E.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return U(this, function (t, n, i) {
                  var o;
                  return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s);
                }, t, a ? i : void 0, a);
              };
            });
          }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            E.fn[t] = function (e) {
              return this.on(t, e);
            };
          }), E.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            }
          }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            E.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          });
          var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          E.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = s.call(arguments, 2), (i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid = e.guid || E.guid++, i;
          }, E.holdReady = function (e) {
            e ? E.readyWait++ : E.ready(!0);
          }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = S, E.isFunction = g, E.isWindow = y, E.camelCase = Y, E.type = T, E.now = Date.now, E.isNumeric = function (e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }, E.trim = function (e) {
            return null == e ? "" : (e + "").replace(Qt, "");
          }, void 0 === (n = function () {
            return E;
          }.apply(t, [])) || (e.exports = n);
          var Jt = r.jQuery,
              Zt = r.$;
          return E.noConflict = function (e) {
            return r.$ === E && (r.$ = Zt), e && r.jQuery === E && (r.jQuery = Jt), E;
          }, void 0 === i && (r.jQuery = r.$ = E), E;
        });
      },
      724: (e, t, n) => {
        "use strict";

        n.r(t), n.d(t, {
          Bridge: () => v,
          Comp: () => ft,
          Compose: () => f,
          Pragma: () => o,
          Select: () => c,
          Value: () => p,
          Variants: () => s,
          contain: () => h,
          host: () => m,
          pragmatize: () => d
        });
        var r = n(755),
            i = n.n(r);

        class o {
          constructor(e = null, t = {}) {
            this.element = i()(e), this.children = [], this.childMap = {}, this.setup_listeners(t);
          }

          add(e) {
            this.children.push(e);
          }

          get hasKids() {
            return this.children.length > 0;
          }

          setup_listeners(e) {
            Object.entries(e).forEach(([e, t]) => {
              this.element.on(e, () => t());
            });
          }

          click() {}

          text() {
            return this.element.text();
          }

          offset() {
            return this.element.offset();
          }

          left() {
            return this.offset().left;
          }

          top() {
            return this.offset().top;
          }

          height() {
            return this.element.height();
          }

          width() {
            return this.element.width();
          }

          x(e) {
            return this.left() + this.width() / 2 - e / 2;
          }

        }

        const a = (e, t, n, r) => ({
          key: e + "_button_" + t,
          type: "button",
          icon: n,
          value: t,
          click: e => {
            r(e);
          }
        }),
              s = (e, t, n, r, i, o) => new ft(u({
          key: e,
          value: t,
          icon: n,
          set: r,
          click: i,
          variants: o
        })),
              u = e => ({
          key: e.key,
          value: e.value,
          type: "choice",
          element_template: (t, n) => a(e.key, n, e.icon(t, n), t => {
            ((e, t, n) => {
              e.find(n.key).value = t;
            })(t, n, e);
          }),
          set: (t, n) => {
            (e => {
              console.log(`activating ${e.key} to ${e.value}`);

              for (let t of e.children) t.element.removeClass("pragma-active");

              e.children[e.value].element.addClass("pragma-active");
            })(n.find(e.key)), e.set(t, n, e.key);
          },
          variants: e.variants
        }),
              c = {
          attr: (e, t, n, r, i = 0) => new ft(u({
            key: e,
            value: i,
            icon: (e, t) => {
              let n = r(e, t);
              return `<div class="${n.type}" style='width:25px;height:25px;border-radius:25px;${n.css}'>${n.html}</div>`;
            },
            set: (e, r, i) => {
              n(t[e], r, i);
            },
            variants: t
          })),
          color: (e, t, n, r = 0) => c.attr(e, t, n, (e, t) => ({
            css: "background:" + e,
            html: ""
          }), r),
          font: (e, t, n, r = 0) => c.attr(e, t, n, (e, t) => ({
            css: "font-family:" + e,
            html: "Aa"
          }), r)
        },
              l = (e, t, n, r = null, i = null) => ({
          key: e,
          type: t,
          value: i,
          icon: n,
          elements: r
        }),
              f = (e, t, n, r = "composer") => new ft(l(e, r, t, n)),
              p = (e, t, n, r, i = "value") => new ft(l(e, i, n, r)),
              d = e => (e.pragmatize(), e),
              h = (e, t) => (e.contain(t), e),
              m = (e, t) => e.host(t),
              v = (e, t = [], n = e => console.table(e)) => {
          let r = f(e.key + "Bridge");
          return r.addToChain((e, i, o) => {
            var a;
            t.includes(o.key) && (a = function (e) {
              let n = {};

              for (let i of t) {
                let t = e.find(i);
                t ? n[i] = t.value : console.warn(`pragmajs > could not find ${i} in ${e.key}\n        when bridgin through ${r.key}`);
              }

              return n;
            }(i), n(a));
          }), r;
        };

        function g(e) {
          var t = e.getBoundingClientRect();
          return {
            width: t.width,
            height: t.height,
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            y: t.top
          };
        }

        function y(e) {
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window;
          }

          return e;
        }

        function b(e) {
          var t = y(e);
          return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
          };
        }

        function x(e) {
          return e instanceof y(e).Element || e instanceof Element;
        }

        function w(e) {
          return e instanceof y(e).HTMLElement || e instanceof HTMLElement;
        }

        function T(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }

        function C(e) {
          return ((x(e) ? e.ownerDocument : e.document) || window.document).documentElement;
        }

        function E(e) {
          return g(C(e)).left + b(e).scrollLeft;
        }

        function k(e) {
          return y(e).getComputedStyle(e);
        }

        function A(e) {
          var t = k(e),
              n = t.overflow,
              r = t.overflowX,
              i = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + i + r);
        }

        function j(e, t, n) {
          void 0 === n && (n = !1);
          var r,
              i,
              o = C(t),
              a = g(e),
              s = w(t),
              u = {
            scrollLeft: 0,
            scrollTop: 0
          },
              c = {
            x: 0,
            y: 0
          };
          return (s || !s && !n) && (("body" !== T(t) || A(o)) && (u = (r = t) !== y(r) && w(r) ? {
            scrollLeft: (i = r).scrollLeft,
            scrollTop: i.scrollTop
          } : b(r)), w(t) ? ((c = g(t)).x += t.clientLeft, c.y += t.clientTop) : o && (c.x = E(o))), {
            x: a.left + u.scrollLeft - c.x,
            y: a.top + u.scrollTop - c.y,
            width: a.width,
            height: a.height
          };
        }

        function O(e) {
          return {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: e.offsetWidth,
            height: e.offsetHeight
          };
        }

        function D(e) {
          return "html" === T(e) ? e : e.assignedSlot || e.parentNode || e.host || C(e);
        }

        function S(e) {
          return ["html", "body", "#document"].indexOf(T(e)) >= 0 ? e.ownerDocument.body : w(e) && A(e) ? e : S(D(e));
        }

        function N(e, t) {
          void 0 === t && (t = []);
          var n = S(e),
              r = "body" === T(n),
              i = y(n),
              o = r ? [i].concat(i.visualViewport || [], A(n) ? n : []) : n,
              a = t.concat(o);
          return r ? a : a.concat(N(D(o)));
        }

        function L(e) {
          return ["table", "td", "th"].indexOf(T(e)) >= 0;
        }

        function q(e) {
          if (!w(e) || "fixed" === k(e).position) return null;
          var t = e.offsetParent;

          if (t) {
            var n = C(t);
            if ("body" === T(t) && "static" === k(t).position && "static" !== k(n).position) return n;
          }

          return t;
        }

        function H(e) {
          for (var t = y(e), n = q(e); n && L(n) && "static" === k(n).position;) n = q(n);

          return n && "body" === T(n) && "static" === k(n).position ? t : n || function (e) {
            for (var t = D(e); w(t) && ["html", "body"].indexOf(T(t)) < 0;) {
              var n = k(t);
              if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return t;
              t = t.parentNode;
            }

            return null;
          }(e) || t;
        }

        var M = "top",
            P = "bottom",
            R = "right",
            I = "left",
            W = "auto",
            B = [M, P, R, I],
            $ = "start",
            _ = "end",
            F = "viewport",
            V = "popper",
            U = B.reduce(function (e, t) {
          return e.concat([t + "-" + $, t + "-" + _]);
        }, []),
            z = [].concat(B, [W]).reduce(function (e, t) {
          return e.concat([t, t + "-" + $, t + "-" + _]);
        }, []),
            X = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

        function K(e) {
          var t = new Map(),
              n = new Set(),
              r = [];

          function i(e) {
            n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
              if (!n.has(e)) {
                var r = t.get(e);
                r && i(r);
              }
            }), r.push(e);
          }

          return e.forEach(function (e) {
            t.set(e.name, e);
          }), e.forEach(function (e) {
            n.has(e.name) || i(e);
          }), r;
        }

        var Y = {
          placement: "bottom",
          modifiers: [],
          strategy: "absolute"
        };

        function G() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];

          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }

        function Q(e) {
          void 0 === e && (e = {});
          var t = e,
              n = t.defaultModifiers,
              r = void 0 === n ? [] : n,
              i = t.defaultOptions,
              o = void 0 === i ? Y : i;
          return function (e, t, n) {
            void 0 === n && (n = o);
            var i,
                a,
                s = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign(Object.assign({}, Y), o),
              modifiersData: {},
              elements: {
                reference: e,
                popper: t
              },
              attributes: {},
              styles: {}
            },
                u = [],
                c = !1,
                l = {
              state: s,
              setOptions: function (n) {
                f(), s.options = Object.assign(Object.assign(Object.assign({}, o), s.options), n), s.scrollParents = {
                  reference: x(e) ? N(e) : e.contextElement ? N(e.contextElement) : [],
                  popper: N(t)
                };

                var i = function (e) {
                  var t = K(e);
                  return X.reduce(function (e, n) {
                    return e.concat(t.filter(function (e) {
                      return e.phase === n;
                    }));
                  }, []);
                }(function (e) {
                  var t = e.reduce(function (e, t) {
                    var n = e[t.name];
                    return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
                      options: Object.assign(Object.assign({}, n.options), t.options),
                      data: Object.assign(Object.assign({}, n.data), t.data)
                    }) : t, e;
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                }([].concat(r, s.options.modifiers)));

                return s.orderedModifiers = i.filter(function (e) {
                  return e.enabled;
                }), s.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                      n = e.options,
                      r = void 0 === n ? {} : n,
                      i = e.effect;

                  if ("function" == typeof i) {
                    var o = i({
                      state: s,
                      name: t,
                      instance: l,
                      options: r
                    }),
                        a = function () {};

                    u.push(o || a);
                  }
                }), l.update();
              },
              forceUpdate: function () {
                if (!c) {
                  var e = s.elements,
                      t = e.reference,
                      n = e.popper;

                  if (G(t, n)) {
                    s.rects = {
                      reference: j(t, H(n), "fixed" === s.options.strategy),
                      popper: O(n)
                    }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function (e) {
                      return s.modifiersData[e.name] = Object.assign({}, e.data);
                    });

                    for (var r = 0; r < s.orderedModifiers.length; r++) if (!0 !== s.reset) {
                      var i = s.orderedModifiers[r],
                          o = i.fn,
                          a = i.options,
                          u = void 0 === a ? {} : a,
                          f = i.name;
                      "function" == typeof o && (s = o({
                        state: s,
                        options: u,
                        name: f,
                        instance: l
                      }) || s);
                    } else s.reset = !1, r = -1;
                  }
                }
              },
              update: (i = function () {
                return new Promise(function (e) {
                  l.forceUpdate(), e(s);
                });
              }, function () {
                return a || (a = new Promise(function (e) {
                  Promise.resolve().then(function () {
                    a = void 0, e(i());
                  });
                })), a;
              }),
              destroy: function () {
                f(), c = !0;
              }
            };
            if (!G(e, t)) return l;

            function f() {
              u.forEach(function (e) {
                return e();
              }), u = [];
            }

            return l.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }), l;
          };
        }

        var J = {
          passive: !0
        };

        function Z(e) {
          return e.split("-")[0];
        }

        function ee(e) {
          return e.split("-")[1];
        }

        function te(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }

        function ne(e) {
          var t,
              n = e.reference,
              r = e.element,
              i = e.placement,
              o = i ? Z(i) : null,
              a = i ? ee(i) : null,
              s = n.x + n.width / 2 - r.width / 2,
              u = n.y + n.height / 2 - r.height / 2;

          switch (o) {
            case M:
              t = {
                x: s,
                y: n.y - r.height
              };
              break;

            case P:
              t = {
                x: s,
                y: n.y + n.height
              };
              break;

            case R:
              t = {
                x: n.x + n.width,
                y: u
              };
              break;

            case I:
              t = {
                x: n.x - r.width,
                y: u
              };
              break;

            default:
              t = {
                x: n.x,
                y: n.y
              };
          }

          var c = o ? te(o) : null;

          if (null != c) {
            var l = "y" === c ? "height" : "width";

            switch (a) {
              case $:
                t[c] = Math.floor(t[c]) - Math.floor(n[l] / 2 - r[l] / 2);
                break;

              case _:
                t[c] = Math.floor(t[c]) + Math.ceil(n[l] / 2 - r[l] / 2);
            }
          }

          return t;
        }

        var re = {
          top: "auto",
          right: "auto",
          bottom: "auto",
          left: "auto"
        };

        function ie(e) {
          var t,
              n = e.popper,
              r = e.popperRect,
              i = e.placement,
              o = e.offsets,
              a = e.position,
              s = e.gpuAcceleration,
              u = e.adaptive,
              c = function (e) {
            var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1;
            return {
              x: Math.round(t * r) / r || 0,
              y: Math.round(n * r) / r || 0
            };
          }(o),
              l = c.x,
              f = c.y,
              p = o.hasOwnProperty("x"),
              d = o.hasOwnProperty("y"),
              h = I,
              m = M,
              v = window;

          if (u) {
            var g = H(n);
            g === y(n) && (g = C(n)), i === M && (m = P, f -= g.clientHeight - r.height, f *= s ? 1 : -1), i === I && (h = R, l -= g.clientWidth - r.width, l *= s ? 1 : -1);
          }

          var b,
              x = Object.assign({
            position: a
          }, u && re);
          return s ? Object.assign(Object.assign({}, x), {}, ((b = {})[m] = d ? "0" : "", b[h] = p ? "0" : "", b.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + f + "px)" : "translate3d(" + l + "px, " + f + "px, 0)", b)) : Object.assign(Object.assign({}, x), {}, ((t = {})[m] = d ? f + "px" : "", t[h] = p ? l + "px" : "", t.transform = "", t));
        }

        var oe = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

        function ae(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return oe[e];
          });
        }

        var se = {
          start: "end",
          end: "start"
        };

        function ue(e) {
          return e.replace(/start|end/g, function (e) {
            return se[e];
          });
        }

        function ce(e, t) {
          var n,
              r = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;

          if (r && ((n = r) instanceof y(n).ShadowRoot || n instanceof ShadowRoot)) {
            var i = t;

            do {
              if (i && e.isSameNode(i)) return !0;
              i = i.parentNode || i.host;
            } while (i);
          }

          return !1;
        }

        function le(e) {
          return Object.assign(Object.assign({}, e), {}, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
          });
        }

        function fe(e, t) {
          return t === F ? le(function (e) {
            var t = y(e),
                n = C(e),
                r = t.visualViewport,
                i = n.clientWidth,
                o = n.clientHeight,
                a = 0,
                s = 0;
            return r && (i = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, s = r.offsetTop)), {
              width: i,
              height: o,
              x: a + E(e),
              y: s
            };
          }(e)) : w(t) ? function (e) {
            var t = g(e);
            return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
          }(t) : le(function (e) {
            var t = C(e),
                n = b(e),
                r = e.ownerDocument.body,
                i = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                o = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                a = -n.scrollLeft + E(e),
                s = -n.scrollTop;
            return "rtl" === k(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - i), {
              width: i,
              height: o,
              x: a,
              y: s
            };
          }(C(e)));
        }

        function pe(e, t, n) {
          var r = "clippingParents" === t ? function (e) {
            var t = N(D(e)),
                n = ["absolute", "fixed"].indexOf(k(e).position) >= 0 && w(e) ? H(e) : e;
            return x(n) ? t.filter(function (e) {
              return x(e) && ce(e, n) && "body" !== T(e);
            }) : [];
          }(e) : [].concat(t),
              i = [].concat(r, [n]),
              o = i[0],
              a = i.reduce(function (t, n) {
            var r = fe(e, n);
            return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t;
          }, fe(e, o));
          return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }

        function de(e) {
          return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }), e);
        }

        function he(e, t) {
          return t.reduce(function (t, n) {
            return t[n] = e, t;
          }, {});
        }

        function me(e, t) {
          void 0 === t && (t = {});
          var n = t,
              r = n.placement,
              i = void 0 === r ? e.placement : r,
              o = n.boundary,
              a = void 0 === o ? "clippingParents" : o,
              s = n.rootBoundary,
              u = void 0 === s ? F : s,
              c = n.elementContext,
              l = void 0 === c ? V : c,
              f = n.altBoundary,
              p = void 0 !== f && f,
              d = n.padding,
              h = void 0 === d ? 0 : d,
              m = de("number" != typeof h ? h : he(h, B)),
              v = l === V ? "reference" : V,
              y = e.elements.reference,
              b = e.rects.popper,
              w = e.elements[p ? v : l],
              T = pe(x(w) ? w : w.contextElement || C(e.elements.popper), a, u),
              E = g(y),
              k = ne({
            reference: E,
            element: b,
            strategy: "absolute",
            placement: i
          }),
              A = le(Object.assign(Object.assign({}, b), k)),
              j = l === V ? A : E,
              O = {
            top: T.top - j.top + m.top,
            bottom: j.bottom - T.bottom + m.bottom,
            left: T.left - j.left + m.left,
            right: j.right - T.right + m.right
          },
              D = e.modifiersData.offset;

          if (l === V && D) {
            var S = D[i];
            Object.keys(O).forEach(function (e) {
              var t = [R, P].indexOf(e) >= 0 ? 1 : -1,
                  n = [M, P].indexOf(e) >= 0 ? "y" : "x";
              O[e] += S[n] * t;
            });
          }

          return O;
        }

        function ve(e, t, n) {
          return Math.max(e, Math.min(t, n));
        }

        function ge(e, t, n) {
          return void 0 === n && (n = {
            x: 0,
            y: 0
          }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
          };
        }

        function ye(e) {
          return [M, R, P, I].some(function (t) {
            return e[t] >= 0;
          });
        }

        var be = Q({
          defaultModifiers: [{
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
              var t = e.state,
                  n = e.instance,
                  r = e.options,
                  i = r.scroll,
                  o = void 0 === i || i,
                  a = r.resize,
                  s = void 0 === a || a,
                  u = y(t.elements.popper),
                  c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
              return o && c.forEach(function (e) {
                e.addEventListener("scroll", n.update, J);
              }), s && u.addEventListener("resize", n.update, J), function () {
                o && c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, J);
                }), s && u.removeEventListener("resize", n.update, J);
              };
            },
            data: {}
          }, {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                  n = e.name;
              t.modifiersData[n] = ne({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement
              });
            },
            data: {}
          }, {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                  n = e.options,
                  r = n.gpuAcceleration,
                  i = void 0 === r || r,
                  o = n.adaptive,
                  a = void 0 === o || o,
                  s = {
                placement: Z(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: i
              };
              null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), ie(Object.assign(Object.assign({}, s), {}, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: a
              })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), ie(Object.assign(Object.assign({}, s), {}, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1
              })))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                "data-popper-placement": t.placement
              });
            },
            data: {}
          }, {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
              var t = e.state;
              Object.keys(t.elements).forEach(function (e) {
                var n = t.styles[e] || {},
                    r = t.attributes[e] || {},
                    i = t.elements[e];
                w(i) && T(i) && (Object.assign(i.style, n), Object.keys(r).forEach(function (e) {
                  var t = r[e];
                  !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t);
                }));
              });
            },
            effect: function (e) {
              var t = e.state,
                  n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0"
                },
                arrow: {
                  position: "absolute"
                },
                reference: {}
              };
              return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () {
                Object.keys(t.elements).forEach(function (e) {
                  var r = t.elements[e],
                      i = t.attributes[e] || {},
                      o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                    return e[t] = "", e;
                  }, {});
                  w(r) && T(r) && (Object.assign(r.style, o), Object.keys(i).forEach(function (e) {
                    r.removeAttribute(e);
                  }));
                });
              };
            },
            requires: ["computeStyles"]
          }, {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
              var t = e.state,
                  n = e.options,
                  r = e.name,
                  i = n.offset,
                  o = void 0 === i ? [0, 0] : i,
                  a = z.reduce(function (e, n) {
                return e[n] = function (e, t, n) {
                  var r = Z(e),
                      i = [I, M].indexOf(r) >= 0 ? -1 : 1,
                      o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
                    placement: e
                  })) : n,
                      a = o[0],
                      s = o[1];
                  return a = a || 0, s = (s || 0) * i, [I, R].indexOf(r) >= 0 ? {
                    x: s,
                    y: a
                  } : {
                    x: a,
                    y: s
                  };
                }(n, t.rects, o), e;
              }, {}),
                  s = a[t.placement],
                  u = s.x,
                  c = s.y;
              null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a;
            }
          }, {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                  n = e.options,
                  r = e.name;

              if (!t.modifiersData[r]._skip) {
                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, v = t.options.placement, g = Z(v), y = u || (g === v || !h ? [ae(v)] : function (e) {
                  if (Z(e) === W) return [];
                  var t = ae(e);
                  return [ue(e), t, ue(t)];
                }(v)), b = [v].concat(y).reduce(function (e, n) {
                  return e.concat(Z(n) === W ? function (e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                        r = n.placement,
                        i = n.boundary,
                        o = n.rootBoundary,
                        a = n.padding,
                        s = n.flipVariations,
                        u = n.allowedAutoPlacements,
                        c = void 0 === u ? z : u,
                        l = ee(r),
                        f = l ? s ? U : U.filter(function (e) {
                      return ee(e) === l;
                    }) : B,
                        p = f.filter(function (e) {
                      return c.indexOf(e) >= 0;
                    });
                    0 === p.length && (p = f);
                    var d = p.reduce(function (t, n) {
                      return t[n] = me(e, {
                        placement: n,
                        boundary: i,
                        rootBoundary: o,
                        padding: a
                      })[Z(n)], t;
                    }, {});
                    return Object.keys(d).sort(function (e, t) {
                      return d[e] - d[t];
                    });
                  }(t, {
                    placement: n,
                    boundary: l,
                    rootBoundary: f,
                    padding: c,
                    flipVariations: h,
                    allowedAutoPlacements: m
                  }) : n);
                }, []), x = t.rects.reference, w = t.rects.popper, T = new Map(), C = !0, E = b[0], k = 0; k < b.length; k++) {
                  var A = b[k],
                      j = Z(A),
                      O = ee(A) === $,
                      D = [M, P].indexOf(j) >= 0,
                      S = D ? "width" : "height",
                      N = me(t, {
                    placement: A,
                    boundary: l,
                    rootBoundary: f,
                    altBoundary: p,
                    padding: c
                  }),
                      L = D ? O ? R : I : O ? P : M;
                  x[S] > w[S] && (L = ae(L));
                  var q = ae(L),
                      H = [];

                  if (o && H.push(N[j] <= 0), s && H.push(N[L] <= 0, N[q] <= 0), H.every(function (e) {
                    return e;
                  })) {
                    E = A, C = !1;
                    break;
                  }

                  T.set(A, H);
                }

                if (C) for (var _ = function (e) {
                  var t = b.find(function (t) {
                    var n = T.get(t);
                    if (n) return n.slice(0, e).every(function (e) {
                      return e;
                    });
                  });
                  if (t) return E = t, "break";
                }, F = h ? 3 : 1; F > 0; F--) {
                  if ("break" === _(F)) break;
                }
                t.placement !== E && (t.modifiersData[r]._skip = !0, t.placement = E, t.reset = !0);
              }
            },
            requiresIfExists: ["offset"],
            data: {
              _skip: !1
            }
          }, {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                  n = e.options,
                  r = e.name,
                  i = n.mainAxis,
                  o = void 0 === i || i,
                  a = n.altAxis,
                  s = void 0 !== a && a,
                  u = n.boundary,
                  c = n.rootBoundary,
                  l = n.altBoundary,
                  f = n.padding,
                  p = n.tether,
                  d = void 0 === p || p,
                  h = n.tetherOffset,
                  m = void 0 === h ? 0 : h,
                  v = me(t, {
                boundary: u,
                rootBoundary: c,
                padding: f,
                altBoundary: l
              }),
                  g = Z(t.placement),
                  y = ee(t.placement),
                  b = !y,
                  x = te(g),
                  w = "x" === x ? "y" : "x",
                  T = t.modifiersData.popperOffsets,
                  C = t.rects.reference,
                  E = t.rects.popper,
                  k = "function" == typeof m ? m(Object.assign(Object.assign({}, t.rects), {}, {
                placement: t.placement
              })) : m,
                  A = {
                x: 0,
                y: 0
              };

              if (T) {
                if (o) {
                  var j = "y" === x ? M : I,
                      D = "y" === x ? P : R,
                      S = "y" === x ? "height" : "width",
                      N = T[x],
                      L = T[x] + v[j],
                      q = T[x] - v[D],
                      W = d ? -E[S] / 2 : 0,
                      B = y === $ ? C[S] : E[S],
                      _ = y === $ ? -E[S] : -C[S],
                      F = t.elements.arrow,
                      V = d && F ? O(F) : {
                    width: 0,
                    height: 0
                  },
                      U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                  },
                      z = U[j],
                      X = U[D],
                      K = ve(0, C[S], V[S]),
                      Y = b ? C[S] / 2 - W - K - z - k : B - K - z - k,
                      G = b ? -C[S] / 2 + W + K + X + k : _ + K + X + k,
                      Q = t.elements.arrow && H(t.elements.arrow),
                      J = Q ? "y" === x ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                      ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][x] : 0,
                      re = T[x] + Y - ne - J,
                      ie = T[x] + G - ne,
                      oe = ve(d ? Math.min(L, re) : L, N, d ? Math.max(q, ie) : q);

                  T[x] = oe, A[x] = oe - N;
                }

                if (s) {
                  var ae = "x" === x ? M : I,
                      se = "x" === x ? P : R,
                      ue = T[w],
                      ce = ve(ue + v[ae], ue, ue - v[se]);
                  T[w] = ce, A[w] = ce - ue;
                }

                t.modifiersData[r] = A;
              }
            },
            requiresIfExists: ["offset"]
          }, {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t,
                  n = e.state,
                  r = e.name,
                  i = n.elements.arrow,
                  o = n.modifiersData.popperOffsets,
                  a = Z(n.placement),
                  s = te(a),
                  u = [I, R].indexOf(a) >= 0 ? "height" : "width";

              if (i && o) {
                var c = n.modifiersData[r + "#persistent"].padding,
                    l = O(i),
                    f = "y" === s ? M : I,
                    p = "y" === s ? P : R,
                    d = n.rects.reference[u] + n.rects.reference[s] - o[s] - n.rects.popper[u],
                    h = o[s] - n.rects.reference[s],
                    m = H(i),
                    v = m ? "y" === s ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                    g = d / 2 - h / 2,
                    y = c[f],
                    b = v - l[u] - c[p],
                    x = v / 2 - l[u] / 2 + g,
                    w = ve(y, x, b),
                    T = s;
                n.modifiersData[r] = ((t = {})[T] = w, t.centerOffset = w - x, t);
              }
            },
            effect: function (e) {
              var t = e.state,
                  n = e.options,
                  r = e.name,
                  i = n.element,
                  o = void 0 === i ? "[data-popper-arrow]" : i,
                  a = n.padding,
                  s = void 0 === a ? 0 : a;
              null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && ce(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[r + "#persistent"] = {
                padding: de("number" != typeof s ? s : he(s, B))
              });
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
          }, {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  i = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  a = me(t, {
                elementContext: "reference"
              }),
                  s = me(t, {
                altBoundary: !0
              }),
                  u = ge(a, r),
                  c = ge(s, i, o),
                  l = ye(u),
                  f = ye(c);
              t.modifiersData[n] = {
                referenceClippingOffsets: u,
                popperEscapeOffsets: c,
                isReferenceHidden: l,
                hasPopperEscaped: f
              }, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                "data-popper-reference-hidden": l,
                "data-popper-escaped": f
              });
            }
          }]
        }),
            xe = "tippy-content",
            we = "tippy-backdrop",
            Te = "tippy-arrow",
            Ce = "tippy-svg-arrow",
            Ee = {
          passive: !0,
          capture: !0
        };

        function ke(e, t, n) {
          if (Array.isArray(e)) {
            var r = e[t];
            return null == r ? Array.isArray(n) ? n[t] : n : r;
          }

          return e;
        }

        function Ae(e, t) {
          var n = {}.toString.call(e);
          return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
        }

        function je(e, t) {
          return "function" == typeof e ? e.apply(void 0, t) : e;
        }

        function Oe(e, t) {
          return 0 === t ? e : function (r) {
            clearTimeout(n), n = setTimeout(function () {
              e(r);
            }, t);
          };
          var n;
        }

        function De(e) {
          return [].concat(e);
        }

        function Se(e, t) {
          -1 === e.indexOf(t) && e.push(t);
        }

        function Ne(e) {
          return e.split("-")[0];
        }

        function Le(e) {
          return [].slice.call(e);
        }

        function qe() {
          return document.createElement("div");
        }

        function He(e) {
          return ["Element", "Fragment"].some(function (t) {
            return Ae(e, t);
          });
        }

        function Me(e) {
          return Ae(e, "MouseEvent");
        }

        function Pe(e) {
          return !(!e || !e._tippy || e._tippy.reference !== e);
        }

        function Re(e) {
          return He(e) ? [e] : function (e) {
            return Ae(e, "NodeList");
          }(e) ? Le(e) : Array.isArray(e) ? e : Le(document.querySelectorAll(e));
        }

        function Ie(e, t) {
          e.forEach(function (e) {
            e && (e.style.transitionDuration = t + "ms");
          });
        }

        function We(e, t) {
          e.forEach(function (e) {
            e && e.setAttribute("data-state", t);
          });
        }

        function Be(e) {
          var t = De(e)[0];
          return t && t.ownerDocument || document;
        }

        function $e(e, t, n) {
          var r = t + "EventListener";
          ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
            e[r](t, n);
          });
        }

        var _e = {
          isTouch: !1
        },
            Fe = 0;

        function Ve() {
          _e.isTouch || (_e.isTouch = !0, window.performance && document.addEventListener("mousemove", Ue));
        }

        function Ue() {
          var e = performance.now();
          e - Fe < 20 && (_e.isTouch = !1, document.removeEventListener("mousemove", Ue)), Fe = e;
        }

        function ze() {
          var e = document.activeElement;

          if (Pe(e)) {
            var t = e._tippy;
            e.blur && !t.state.isVisible && e.blur();
          }
        }

        var Xe = "undefined" != typeof window && "undefined" != typeof document ? navigator.userAgent : "",
            Ke = /MSIE |Trident\//.test(Xe);
        var Ye = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1
        },
            Ge = Object.assign({
          appendTo: function () {
            return document.body;
          },
          aria: {
            content: "auto",
            expanded: "auto"
          },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null
        }, Ye, {}, {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999
        }),
            Qe = Object.keys(Ge);

        function Je(e) {
          var t = (e.plugins || []).reduce(function (t, n) {
            var r = n.name,
                i = n.defaultValue;
            return r && (t[r] = void 0 !== e[r] ? e[r] : i), t;
          }, {});
          return Object.assign({}, e, {}, t);
        }

        function Ze(e, t) {
          var n = Object.assign({}, t, {
            content: je(t.content, [e])
          }, t.ignoreAttributes ? {} : function (e, t) {
            return (t ? Object.keys(Je(Object.assign({}, Ge, {
              plugins: t
            }))) : Qe).reduce(function (t, n) {
              var r = (e.getAttribute("data-tippy-" + n) || "").trim();
              if (!r) return t;
              if ("content" === n) t[n] = r;else try {
                t[n] = JSON.parse(r);
              } catch (e) {
                t[n] = r;
              }
              return t;
            }, {});
          }(e, t.plugins));
          return n.aria = Object.assign({}, Ge.aria, {}, n.aria), n.aria = {
            expanded: "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content: "auto" === n.aria.content ? t.interactive ? null : "describedby" : n.aria.content
          }, n;
        }

        function et(e, t) {
          e.innerHTML = t;
        }

        function tt(e) {
          var t = qe();
          return !0 === e ? t.className = Te : (t.className = Ce, He(e) ? t.appendChild(e) : et(t, e)), t;
        }

        function nt(e, t) {
          He(t.content) ? (et(e, ""), e.appendChild(t.content)) : "function" != typeof t.content && (t.allowHTML ? et(e, t.content) : e.textContent = t.content);
        }

        function rt(e) {
          var t = e.firstElementChild,
              n = Le(t.children);
          return {
            box: t,
            content: n.find(function (e) {
              return e.classList.contains(xe);
            }),
            arrow: n.find(function (e) {
              return e.classList.contains(Te) || e.classList.contains(Ce);
            }),
            backdrop: n.find(function (e) {
              return e.classList.contains(we);
            })
          };
        }

        function it(e) {
          var t = qe(),
              n = qe();
          n.className = "tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
          var r = qe();

          function i(n, r) {
            var i = rt(t),
                o = i.box,
                a = i.content,
                s = i.arrow;
            r.theme ? o.setAttribute("data-theme", r.theme) : o.removeAttribute("data-theme"), "string" == typeof r.animation ? o.setAttribute("data-animation", r.animation) : o.removeAttribute("data-animation"), r.inertia ? o.setAttribute("data-inertia", "") : o.removeAttribute("data-inertia"), o.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth, r.role ? o.setAttribute("role", r.role) : o.removeAttribute("role"), n.content === r.content && n.allowHTML === r.allowHTML || nt(a, e.props), r.arrow ? s ? n.arrow !== r.arrow && (o.removeChild(s), o.appendChild(tt(r.arrow))) : o.appendChild(tt(r.arrow)) : s && o.removeChild(s);
          }

          return r.className = xe, r.setAttribute("data-state", "hidden"), nt(r, e.props), t.appendChild(n), n.appendChild(r), i(e.props, e.props), {
            popper: t,
            onUpdate: i
          };
        }

        it.$$tippy = !0;
        var ot = 1,
            at = [],
            st = [];

        function ut(e, t) {
          var n,
              r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f = Ze(e, Object.assign({}, Ge, {}, Je((n = t, Object.keys(n).reduce(function (e, t) {
            return void 0 !== n[t] && (e[t] = n[t]), e;
          }, {}))))),
              p = !1,
              d = !1,
              h = !1,
              m = !1,
              v = [],
              g = Oe(K, f.interactiveDebounce),
              y = ot++,
              b = (l = f.plugins).filter(function (e, t) {
            return l.indexOf(e) === t;
          }),
              x = {
            id: y,
            reference: e,
            popper: qe(),
            popperInstance: null,
            props: f,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
            },
            setProps: function (t) {
              0;
              if (x.state.isDestroyed) return;
              H("onBeforeUpdate", [x, t]), z();
              var n = x.props,
                  r = Ze(e, Object.assign({}, x.props, {}, t, {
                ignoreAttributes: !0
              }));
              x.props = r, U(), n.interactiveDebounce !== r.interactiveDebounce && (R(), g = Oe(K, r.interactiveDebounce));
              n.triggerTarget && !r.triggerTarget ? De(n.triggerTarget).forEach(function (e) {
                e.removeAttribute("aria-expanded");
              }) : r.triggerTarget && e.removeAttribute("aria-expanded");
              P(), q(), C && C(n, r);
              x.popperInstance && (J(), ee().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
              H("onAfterUpdate", [x, t]);
            },
            setContent: function (e) {
              x.setProps({
                content: e
              });
            },
            show: function () {
              0;
              var e = x.state.isVisible,
                  t = x.state.isDestroyed,
                  n = !x.state.isEnabled,
                  r = _e.isTouch && !x.props.touch,
                  i = ke(x.props.duration, 0, Ge.duration);
              if (e || t || n || r) return;
              if (D().hasAttribute("disabled")) return;
              if (H("onShow", [x], !1), !1 === x.props.onShow(x)) return;
              x.state.isVisible = !0, O() && (T.style.visibility = "visible");
              q(), $(), x.state.isMounted || (T.style.transition = "none");

              if (O()) {
                var o = N(),
                    a = o.box,
                    s = o.content;
                Ie([a, s], 0);
              }

              u = function () {
                if (x.state.isVisible && !m) {
                  if (m = !0, T.offsetHeight, T.style.transition = x.props.moveTransition, O() && x.props.animation) {
                    var e = N(),
                        t = e.box,
                        n = e.content;
                    Ie([t, n], i), We([t, n], "visible");
                  }

                  M(), P(), Se(st, x), x.state.isMounted = !0, H("onMount", [x]), x.props.animation && O() && function (e, t) {
                    F(e, t);
                  }(i, function () {
                    x.state.isShown = !0, H("onShown", [x]);
                  });
                }
              }, function () {
                var e,
                    t = x.props.appendTo,
                    n = D();
                e = x.props.interactive && t === Ge.appendTo || "parent" === t ? n.parentNode : je(t, [n]);
                e.contains(T) || e.appendChild(T);
                J(), !1;
              }();
            },
            hide: function () {
              0;
              var e = !x.state.isVisible,
                  t = x.state.isDestroyed,
                  n = !x.state.isEnabled,
                  r = ke(x.props.duration, 1, Ge.duration);
              if (e || t || n) return;
              if (H("onHide", [x], !1), !1 === x.props.onHide(x)) return;
              x.state.isVisible = !1, x.state.isShown = !1, m = !1, p = !1, O() && (T.style.visibility = "hidden");

              if (R(), _(), q(), O()) {
                var i = N(),
                    o = i.box,
                    a = i.content;
                x.props.animation && (Ie([o, a], r), We([o, a], "hidden"));
              }

              M(), P(), x.props.animation ? O() && function (e, t) {
                F(e, function () {
                  !x.state.isVisible && T.parentNode && T.parentNode.contains(T) && t();
                });
              }(r, x.unmount) : x.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              S().addEventListener("mousemove", g), Se(at, g), g(e);
            },
            enable: function () {
              x.state.isEnabled = !0;
            },
            disable: function () {
              x.hide(), x.state.isEnabled = !1;
            },
            unmount: function () {
              0;
              x.state.isVisible && x.hide();
              if (!x.state.isMounted) return;
              Z(), ee().forEach(function (e) {
                e._tippy.unmount();
              }), T.parentNode && T.parentNode.removeChild(T);
              st = st.filter(function (e) {
                return e !== x;
              }), x.state.isMounted = !1, H("onHidden", [x]);
            },
            destroy: function () {
              0;
              if (x.state.isDestroyed) return;
              x.clearDelayTimeouts(), x.unmount(), z(), delete e._tippy, x.state.isDestroyed = !0, H("onDestroy", [x]);
            }
          };
          if (!f.render) return x;
          var w = f.render(x),
              T = w.popper,
              C = w.onUpdate;
          T.setAttribute("data-tippy-root", ""), T.id = "tippy-" + x.id, x.popper = T, e._tippy = x, T._tippy = x;
          var E = b.map(function (e) {
            return e.fn(x);
          }),
              k = e.hasAttribute("aria-expanded");
          return U(), P(), q(), H("onCreate", [x]), f.showOnCreate && te(), T.addEventListener("mouseenter", function () {
            x.props.interactive && x.state.isVisible && x.clearDelayTimeouts();
          }), T.addEventListener("mouseleave", function (e) {
            x.props.interactive && x.props.trigger.indexOf("mouseenter") >= 0 && (S().addEventListener("mousemove", g), g(e));
          }), x;

          function A() {
            var e = x.props.touch;
            return Array.isArray(e) ? e : [e, 0];
          }

          function j() {
            return "hold" === A()[0];
          }

          function O() {
            var e;
            return !!(null == (e = x.props.render) ? void 0 : e.$$tippy);
          }

          function D() {
            return c || e;
          }

          function S() {
            var e = D().parentNode;
            return e ? Be(e) : document;
          }

          function N() {
            return rt(T);
          }

          function L(e) {
            return x.state.isMounted && !x.state.isVisible || _e.isTouch || a && "focus" === a.type ? 0 : ke(x.props.delay, e ? 0 : 1, Ge.delay);
          }

          function q() {
            T.style.pointerEvents = x.props.interactive && x.state.isVisible ? "" : "none", T.style.zIndex = "" + x.props.zIndex;
          }

          function H(e, t, n) {
            var r;
            (void 0 === n && (n = !0), E.forEach(function (n) {
              n[e] && n[e].apply(void 0, t);
            }), n) && (r = x.props)[e].apply(r, t);
          }

          function M() {
            var t = x.props.aria;

            if (t.content) {
              var n = "aria-" + t.content,
                  r = T.id;
              De(x.props.triggerTarget || e).forEach(function (e) {
                var t = e.getAttribute(n);
                if (x.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);else {
                  var i = t && t.replace(r, "").trim();
                  i ? e.setAttribute(n, i) : e.removeAttribute(n);
                }
              });
            }
          }

          function P() {
            !k && x.props.aria.expanded && De(x.props.triggerTarget || e).forEach(function (e) {
              x.props.interactive ? e.setAttribute("aria-expanded", x.state.isVisible && e === D() ? "true" : "false") : e.removeAttribute("aria-expanded");
            });
          }

          function R() {
            S().removeEventListener("mousemove", g), at = at.filter(function (e) {
              return e !== g;
            });
          }

          function I(e) {
            if (!(_e.isTouch && (h || "mousedown" === e.type) || x.props.interactive && T.contains(e.target))) {
              if (D().contains(e.target)) {
                if (_e.isTouch) return;
                if (x.state.isVisible && x.props.trigger.indexOf("click") >= 0) return;
              } else H("onClickOutside", [x, e]);

              !0 === x.props.hideOnClick && (x.clearDelayTimeouts(), x.hide(), d = !0, setTimeout(function () {
                d = !1;
              }), x.state.isMounted || _());
            }
          }

          function W() {
            h = !0;
          }

          function B() {
            h = !1;
          }

          function $() {
            var e = S();
            e.addEventListener("mousedown", I, !0), e.addEventListener("touchend", I, Ee), e.addEventListener("touchstart", B, Ee), e.addEventListener("touchmove", W, Ee);
          }

          function _() {
            var e = S();
            e.removeEventListener("mousedown", I, !0), e.removeEventListener("touchend", I, Ee), e.removeEventListener("touchstart", B, Ee), e.removeEventListener("touchmove", W, Ee);
          }

          function F(e, t) {
            var n = N().box;

            function r(e) {
              e.target === n && ($e(n, "remove", r), t());
            }

            if (0 === e) return t();
            $e(n, "remove", s), $e(n, "add", r), s = r;
          }

          function V(t, n, r) {
            void 0 === r && (r = !1), De(x.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r), v.push({
                node: e,
                eventType: t,
                handler: n,
                options: r
              });
            });
          }

          function U() {
            var e;
            j() && (V("touchstart", X, {
              passive: !0
            }), V("touchend", Y, {
              passive: !0
            })), (e = x.props.trigger, e.split(/\s+/).filter(Boolean)).forEach(function (e) {
              if ("manual" !== e) switch (V(e, X), e) {
                case "mouseenter":
                  V("mouseleave", Y);
                  break;

                case "focus":
                  V(Ke ? "focusout" : "blur", G);
                  break;

                case "focusin":
                  V("focusout", G);
              }
            });
          }

          function z() {
            v.forEach(function (e) {
              var t = e.node,
                  n = e.eventType,
                  r = e.handler,
                  i = e.options;
              t.removeEventListener(n, r, i);
            }), v = [];
          }

          function X(e) {
            var t,
                n = !1;

            if (x.state.isEnabled && !Q(e) && !d) {
              var r = "focus" === (null == (t = a) ? void 0 : t.type);
              a = e, c = e.currentTarget, P(), !x.state.isVisible && Me(e) && at.forEach(function (t) {
                return t(e);
              }), "click" === e.type && (x.props.trigger.indexOf("mouseenter") < 0 || p) && !1 !== x.props.hideOnClick && x.state.isVisible ? n = !0 : te(e), "click" === e.type && (p = !n), n && !r && ne(e);
            }
          }

          function K(e) {
            var t = e.target,
                n = D().contains(t) || T.contains(t);
            "mousemove" === e.type && n || function (e, t) {
              var n = t.clientX,
                  r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                    i = e.popperState,
                    o = e.props.interactiveBorder,
                    a = Ne(i.placement),
                    s = i.modifiersData.offset;
                if (!s) return !0;
                var u = "bottom" === a ? s.top.y : 0,
                    c = "top" === a ? s.bottom.y : 0,
                    l = "right" === a ? s.left.x : 0,
                    f = "left" === a ? s.right.x : 0,
                    p = t.top - r + u > o,
                    d = r - t.bottom - c > o,
                    h = t.left - n + l > o,
                    m = n - t.right - f > o;
                return p || d || h || m;
              });
            }(ee().concat(T).map(function (e) {
              var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return n ? {
                popperRect: e.getBoundingClientRect(),
                popperState: n,
                props: f
              } : null;
            }).filter(Boolean), e) && (R(), ne(e));
          }

          function Y(e) {
            Q(e) || x.props.trigger.indexOf("click") >= 0 && p || (x.props.interactive ? x.hideWithInteractivity(e) : ne(e));
          }

          function G(e) {
            x.props.trigger.indexOf("focusin") < 0 && e.target !== D() || x.props.interactive && e.relatedTarget && T.contains(e.relatedTarget) || ne(e);
          }

          function Q(e) {
            return !!_e.isTouch && j() !== e.type.indexOf("touch") >= 0;
          }

          function J() {
            Z();
            var t = x.props,
                n = t.popperOptions,
                r = t.placement,
                i = t.offset,
                o = t.getReferenceClientRect,
                a = t.moveTransition,
                s = O() ? rt(T).arrow : null,
                c = o ? {
              getBoundingClientRect: o,
              contextElement: o.contextElement || D()
            } : e,
                l = [{
              name: "offset",
              options: {
                offset: i
              }
            }, {
              name: "preventOverflow",
              options: {
                padding: {
                  top: 2,
                  bottom: 2,
                  left: 5,
                  right: 5
                }
              }
            }, {
              name: "flip",
              options: {
                padding: 5
              }
            }, {
              name: "computeStyles",
              options: {
                adaptive: !a
              }
            }, {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;

                if (O()) {
                  var n = N().box;
                  ["placement", "reference-hidden", "escaped"].forEach(function (e) {
                    "placement" === e ? n.setAttribute("data-placement", t.placement) : t.attributes.popper["data-popper-" + e] ? n.setAttribute("data-" + e, "") : n.removeAttribute("data-" + e);
                  }), t.attributes.popper = {};
                }
              }
            }];
            O() && s && l.push({
              name: "arrow",
              options: {
                element: s,
                padding: 3
              }
            }), l.push.apply(l, (null == n ? void 0 : n.modifiers) || []), x.popperInstance = be(c, T, Object.assign({}, n, {
              placement: r,
              onFirstUpdate: u,
              modifiers: l
            }));
          }

          function Z() {
            x.popperInstance && (x.popperInstance.destroy(), x.popperInstance = null);
          }

          function ee() {
            return Le(T.querySelectorAll("[data-tippy-root]"));
          }

          function te(e) {
            x.clearDelayTimeouts(), e && H("onTrigger", [x, e]), $();
            var t = L(!0),
                n = A(),
                i = n[0],
                o = n[1];
            _e.isTouch && "hold" === i && o && (t = o), t ? r = setTimeout(function () {
              x.show();
            }, t) : x.show();
          }

          function ne(e) {
            if (x.clearDelayTimeouts(), H("onUntrigger", [x, e]), x.state.isVisible) {
              if (!(x.props.trigger.indexOf("mouseenter") >= 0 && x.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(e.type) >= 0 && p)) {
                var t = L(!1);
                t ? i = setTimeout(function () {
                  x.state.isVisible && x.hide();
                }, t) : o = requestAnimationFrame(function () {
                  x.hide();
                });
              }
            } else _();
          }
        }

        function ct(e, t) {
          void 0 === t && (t = {});
          var n = Ge.plugins.concat(t.plugins || []);
          document.addEventListener("touchstart", Ve, Ee), window.addEventListener("blur", ze);
          var r = Object.assign({}, t, {
            plugins: n
          }),
              i = Re(e).reduce(function (e, t) {
            var n = t && ut(t, r);
            return n && e.push(n), e;
          }, []);
          return He(e) ? i[0] : i;
        }

        ct.defaultProps = Ge, ct.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Ge[t] = e[t];
          });
        }, ct.currentInput = _e;
        ct.setDefaultProps({
          render: it
        });
        const lt = ct;

        class ft extends o {
          constructor(e, t = null) {
            super(), this.keys = [], this.actualValue = null, this.parent = t, this.build(e), this.log_txt = "", this.addToChain((e, t, n = this) => {
              this.master && (t.doChain(e, t, n), t.log(`${n.key} -> ${e}`));
            });
          }

          log(e) {
            this.log_txt = this.log_txt.concat(" | " + e);
          }

          doChain(e, t, n = this) {
            if (!this.actionChain) return null;

            for (let r of this.actionChain) r(e, t, n);
          }

          unchain() {
            return this.actionChain = [], this.addToChain((e, t, n = this) => {
              this.master && (t.doChain(e, t, n), t.log(`${n.key} -> ${e}`));
            }), this;
          }

          addToChain(e) {
            return this.actionChain || (this.actionChain = []), this.actionChain.push(e), this;
          }

          get logs() {
            return this.log_txt;
          }

          set value(e) {
            this.actualValue = e, this.doChain(e, this.master);
          }

          get value() {
            return this.actualValue;
          }

          get master() {
            return null == this.parent || null == this.parent.parent ? this.parent : this.parent.master;
          }

          find(e) {
            if (this.key == e) return this;
            if (this.hasKids) for (let t of this.children) {
              let n = t.find(e);
              if (n) return n;
            }
          }

          pragmatize() {
            return i()(document.body).append(this.element), this;
          }

          chain(e) {
            return this.actionChain = this.actionChain.concat(e.actionChain), this;
          }

          compose(e = !1) {
            return this.element = i()(document.createElement("div")), this;
          }

          add(e) {
            this.containsKey(e.key), super.add(e), this.keys.push(e.key), this.element.append(e.element);
          }

          buildInside(e) {
            let t = f(e.key + "-composer", null, [e]);
            this.buildAndAdd(t), this.host(t);
          }

          containsKey(e) {
            return !!this.find(e);
          }

          contain(e) {
            return this.add(e), e.parent = this, this;
          }

          host(e) {
            const t = this.key + "-host";
            let n;
            return this.tippy ? (n = this.find(t), n.contain(e), this.tippy.destroy()) : (n = f(t).contain(e), this.contain(n)), n.element.addClass("tippy-pragma"), this.tippy = lt(this.element[0], {
              content: n.element[0],
              allowHTML: !0,
              interactive: !0,
              theme: null
            }), this;
          }

          buildAndAdd(e) {
            let t = new ft(e, this);
            this.add(t);
          }

          buildArray(e) {
            for (let t of e) this.buildAndAdd(t);
          }

          build(e) {
            this.compose(!0), e.icon && (this.icon = i()(document.createElement("div")), this.icon.html(e.icon), this.icon.appendTo(this.element)), e.elements && this.buildArray(e.elements), e.hover_element && this.buildInside(e.hover_element), e.value && (this.value = e.value), e.set && this.addToChain((t, n) => e.set(t, n)), e.key && (this.key = e.key, this.element.attr("id", this.key)), e.type && (this.type = e.type, this.element.addClass("pragma-" + e.type)), e.click && this.setup_listeners({
              click: () => {
                e.click(this.master);
              }
            }), e.element_template && e.variants && e.variants.forEach((t, n) => {
              let r = e.element_template(t, n);
              r.type = "option", this.buildAndAdd(r);
            });
          }

          dismantle() {
            return this.children = [], this;
          }

          leaveUsKidsAlone() {
            return this.dismantle();
          }

          get allChildren() {
            if (!this.hasKids) return null;
            let e = this.children;

            for (let t of e) {
              let n = t.allChildren;
              n && (e = e.concat(n));
            }

            return e;
          }

          get depthKey() {
            return this.parent ? this.parent.depthKey + "<~<" + this.key : this.key;
          }

          shapePrefix(e = "") {
            let t = `${e}| ${this.type} - ${this.key} \n`;

            if (this.hasKids) {
              e += "| ";

              for (let n of this.children) t += n.shapePrefix(e);
            }

            return t;
          }

          get shape() {
            return this.shapePrefix();
          }

          descOf(e) {
            return !!e.find(this.key);
          }

        }
      }
    },
        t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.exports;
    }

    return n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, {
        a: t
      }), t;
    }, n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n(724);
  })();
});

},{}],2:[function(require,module,exports){
"use strict";

var _dist = require("../dist");

//import Pragma, { valueControls, variants, composer, container } from '../src'
//import Pragma, { valueControls, variants, composer, container } from '../src'
// TODO do code blocks like this, and print them to an element
// import doBlock from "./demos/helloworld"
// doBlock()
// console.log(doBlock.toString())
require("../src/third_party/idle");

let colors = ["tomato", "navy", "lime"];
let fonts = ["Helvetica", "Roboto", "Open Sans", "Space Mono"];
let modes = ["HotBox", "Underneath", "Faded"];

let colorsComp = _dist.Select.color("markercolors", colors, (v, comp, key) => {
  $(document.body).css({
    "background": colors[comp.find(key).value]
  });
});

let fontComp = _dist.Select.font("readerfont", fonts, (v, comp, key) => {
  $(document.body).css({
    "font-family": fonts[comp.find(key).value]
  });
});

let modeComp = _dist.Select.attr("markermode", modes, (v, comp, key) => {
  // on set
  console.log(v);
}, (key, index) => {
  // icon
  return {
    type: "pointerModeOption",
    html: "M"
  };
});

let popUpSettings = (0, _dist.Compose)("popupsettings", "⚙️").host(colorsComp).host(fontComp).host(modeComp); // popUpSettings.pragmatize()

let settings = (0, _dist.Compose)("settingsWrapper").contain(popUpSettings);
settings.pragmatize();
let syncedKeys = ["markercolors", "readerfont", "markermode"];
let freadyBridge = (0, _dist.Bridge)(settings, syncedKeys, object => {
  console.log('imma beam this however');
  console.table(object);
});
settings.chain(freadyBridge); // every time a value is changed, do the freadyBridge's actions as well
// console.time()
// console.timeEnd()
// class FreadyBridge {
//   constructor(){
//   }
//   connect(){
//   }
//   transmit(){
//   }
// }
// addproperty
// fader.addToChain(((v, master, comp) => {
//   console.log('fading out')
//   console.table([v, master, comp])
//   if (comp) comp.element.fadeOut() 
// }))
// to sync the toolbar
// build a Syncer(post=get, get)
// settings.chain(fader)

let idle = false;

function fadeAway() {
  if (idle) {
    settings.element.fadeTo(100, .5);
    setTimeout(() => {
      if (idle) settings.element.fadeOut();
    }, 1500);
  }
}

$(document).idle({
  onIdle: () => {
    idle = true;
    fadeAway();
  },
  onActive: () => {
    idle = false;
    settings.element.fadeTo(1, 50);
  },
  idle: 5000
}); // fader.chain(settings)
// settings.chain(fader)
// compose({} <- pragma maiiiipu)
// compose(key, icon, elements, type <- pragma map)
//
//let colorsComp = new Comp(variants({
//key: "color",
//value: 1,
//icon: (key, index) => { return `<div style='width:25px;height:25px;border-radius:25px;background:${key}'></div>` },
//set: (v, comp) => {
//$('.p-6').css({"color": colors[comp.find("color").value]})
//},
//variants: colors
//}))
// setInterval(() => {
//   console.log(settings.logs) 
// }, 1000)

console.time(".find()");
console.log(settings.find("markermode"));
console.timeEnd(".find()");
console.log(colorsComp.depthKey); //
//let settings = composer("settingsWrapper", "⚙️", [])
//let master = container(settings, composer(
//"toolbar",
//"⚙️",
//[
//composer("settings", "", [
//variants({
//key: "color",
//value: 1,
//icon: (key, index) => { return `<div style='width:25px;height:25px;border-radius:25px;background:${key}'></div>` },
//set: (comp) => {
//$('.p-6').css({"color": colors[comp.find("color").value]})
//},
//variants: colors
//}), 
//variants({
//key: "font",
//value: 1,
//icon: (key, index) => { return `<div style='width:25px;height:25px;border-radius:25px;font-family:${key}'>Aa</div>` },
//set: (comp) => {
//$('.p-6').css({"font-family": fonts[comp.find("font").value]})
//},
//variants: fonts
//}), 
//valueControls("fovea", 5, 2) 
//]), 
//valueControls("font-size", 18, 2, (value, comp)=>{
//$('.p-6').css({"font-size": value})
//console.log(value)
//})
//]
//))
// let master = new PragmaComposer(map)
// let t = tippy(`#${settings.key}`, {
//   content: master.element[0],
//   allowHTML: true,
//   interactive: true
// })
// setInterval( () => {
//   master.find("color").value += 1
//   master.find("font").value += 1
//   master.find("wpm").value += 50
// }, 1500)
// let lec = new Lector($("#article"), settings)
// lec.read()

},{"../dist":1,"../src/third_party/idle":3}],3:[function(require,module,exports){
"use strict";

!function (n) {
  "use strict";

  n.fn.idle = function (e) {
    var t,
        i,
        o = {
      idle: 6e4,
      events: "mousemove keydown mousedown touchstart",
      onIdle: function () {},
      onActive: function () {},
      onHide: function () {},
      onShow: function () {},
      keepTracking: !0,
      startAtIdle: !1,
      recurIdleCall: !1
    },
        c = e.startAtIdle || !1,
        d = !e.startAtIdle || !0,
        l = n.extend({}, o, e),
        u = null;
    return n(this).on("idle:stop", {}, function () {
      n(this).off(l.events), l.keepTracking = !1, t(u, l);
    }), t = function (n, e) {
      return c && (c = !1, e.onActive.call()), clearTimeout(n), e.keepTracking ? i(e) : void 0;
    }, i = function (n) {
      var e,
          t = n.recurIdleCall ? setInterval : setTimeout;
      return e = t(function () {
        c = !0, n.onIdle.call();
      }, n.idle);
    }, this.each(function () {
      u = i(l), n(this).on(l.events, function () {
        u = t(u, l);
      }), (l.onShow || l.onHide) && n(document).on("visibilitychange webkitvisibilitychange mozvisibilitychange msvisibilitychange", function () {
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? d && (d = !1, l.onHide.call()) : d || (d = !0, l.onShow.call());
      });
    });
  };
}(jQuery);

},{}]},{},[2]);
