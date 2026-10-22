(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  13451,
  (e, t, r) => {
    (t.exports = function (e) {
      return e && e.__esModule ? e : { default: e };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  35045,
  (e, t, r) => {
    function n(e) {
      return (
        (t.exports = n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  98113,
  (e, t, r) => {
    (t.exports = function (e, t) {
      (this.v = e), (this.k = t);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  78679,
  (e, t, r) => {
    function n(e, r, o, a) {
      var i = Object.defineProperty;
      try {
        i({}, "", {});
      } catch (e) {
        i = 0;
      }
      (t.exports = n =
        function (e, t, r, o) {
          function a(t, r) {
            n(e, t, function (e) {
              return this._invoke(t, r, e);
            });
          }
          t
            ? i
              ? i(e, t, {
                  value: r,
                  enumerable: !o,
                  configurable: !o,
                  writable: !o,
                })
              : (e[t] = r)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e, r, o, a);
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  55157,
  (e, t, r) => {
    var n = e.r(78679);
    function o() {
      var e,
        r,
        a = "function" == typeof Symbol ? Symbol : {},
        i = a.iterator || "@@iterator",
        s = a.toStringTag || "@@toStringTag";
      function c(t, o, a, i) {
        var s = Object.create(
          (o && o.prototype instanceof l ? o : l).prototype
        );
        return (
          n(
            s,
            "_invoke",
            (function (t, n, o) {
              var a,
                i,
                s,
                c = 0,
                l = o || [],
                d = !1,
                f = {
                  p: 0,
                  n: 0,
                  v: e,
                  a: p,
                  f: p.bind(e, 4),
                  d: function (t, r) {
                    return (a = t), (i = 0), (s = e), (f.n = r), u;
                  },
                };
              function p(t, n) {
                for (i = t, s = n, r = 0; !d && c && !o && r < l.length; r++) {
                  var o,
                    a = l[r],
                    p = f.p,
                    h = a[2];
                  t > 3
                    ? (o = h === n) &&
                      ((s = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                      (a[4] = a[5] = e))
                    : a[0] <= p &&
                      ((o = t < 2 && p < a[1])
                        ? ((i = 0), (f.v = n), (f.n = a[1]))
                        : p < h &&
                          (o = t < 3 || a[0] > n || n > h) &&
                          ((a[4] = t), (a[5] = n), (f.n = h), (i = 0)));
                }
                if (o || t > 1) return u;
                throw ((d = !0), n);
              }
              return function (o, l, h) {
                if (c > 1) throw TypeError("Generator is already running");
                for (
                  d && 1 === l && p(l, h), i = l, s = h;
                  (r = i < 2 ? e : s) || !d;

                ) {
                  a ||
                    (i
                      ? i < 3
                        ? (i > 1 && (f.n = -1), p(i, s))
                        : (f.n = s)
                      : (f.v = s));
                  try {
                    if (((c = 2), a)) {
                      if ((i || (o = "next"), (r = a[o]))) {
                        if (!(r = r.call(a, s)))
                          throw TypeError("iterator result is not an object");
                        if (!r.done) return r;
                        (s = r.value), i < 2 && (i = 0);
                      } else
                        1 === i && (r = a.return) && r.call(a),
                          i < 2 &&
                            ((s = TypeError(
                              "The iterator does not provide a '" +
                                o +
                                "' method"
                            )),
                            (i = 1));
                      a = e;
                    } else if ((r = (d = f.n < 0) ? s : t.call(n, f)) !== u)
                      break;
                  } catch (t) {
                    (a = e), (i = 1), (s = t);
                  } finally {
                    c = 1;
                  }
                }
                return { value: r, done: d };
              };
            })(t, a, i),
            !0
          ),
          s
        );
      }
      var u = {};
      function l() {}
      function d() {}
      function f() {}
      r = Object.getPrototypeOf;
      var p =
        (f.prototype =
        l.prototype =
          Object.create(
            [][i]
              ? r(r([][i]()))
              : (n((r = {}), i, function () {
                  return this;
                }),
                r)
          ));
      function h(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, f)
            : ((e.__proto__ = f), n(e, s, "GeneratorFunction")),
          (e.prototype = Object.create(p)),
          e
        );
      }
      return (
        (d.prototype = f),
        n(p, "constructor", f),
        n(f, "constructor", d),
        (d.displayName = "GeneratorFunction"),
        n(f, s, "GeneratorFunction"),
        n(p),
        n(p, s, "Generator"),
        n(p, i, function () {
          return this;
        }),
        n(p, "toString", function () {
          return "[object Generator]";
        }),
        ((t.exports = o =
          function () {
            return { w: c, m: h };
          }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports))()
      );
    }
    (t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  36852,
  (e, t, r) => {
    var n = e.r(98113),
      o = e.r(78679);
    (t.exports = function e(t, r) {
      var a;
      this.next ||
        (o(e.prototype),
        o(
          e.prototype,
          ("function" == typeof Symbol && Symbol.asyncIterator) ||
            "@asyncIterator",
          function () {
            return this;
          }
        )),
        o(
          this,
          "_invoke",
          function (e, o, i) {
            function s() {
              return new r(function (o, a) {
                !(function e(o, a, i, s) {
                  try {
                    var c = t[o](a),
                      u = c.value;
                    return u instanceof n
                      ? r.resolve(u.v).then(
                          function (t) {
                            e("next", t, i, s);
                          },
                          function (t) {
                            e("throw", t, i, s);
                          }
                        )
                      : r.resolve(u).then(
                          function (e) {
                            (c.value = e), i(c);
                          },
                          function (t) {
                            return e("throw", t, i, s);
                          }
                        );
                  } catch (e) {
                    s(e);
                  }
                })(e, i, o, a);
              });
            }
            return (a = a ? a.then(s, s) : s());
          },
          !0
        );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  6822,
  (e, t, r) => {
    var n = e.r(55157),
      o = e.r(36852);
    (t.exports = function (e, t, r, a, i) {
      return new o(n().w(e, t, r, a), i || Promise);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  88691,
  (e, t, r) => {
    var n = e.r(6822);
    (t.exports = function (e, t, r, o, a) {
      var i = n(e, t, r, o, a);
      return i.next().then(function (e) {
        return e.done ? e.value : i.next();
      });
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  54534,
  (e, t, r) => {
    (t.exports = function (e) {
      var t = Object(e),
        r = [];
      for (var n in t) r.unshift(n);
      return function e() {
        for (; r.length; )
          if ((n = r.pop()) in t) return (e.value = n), (e.done = !1), e;
        return (e.done = !0), e;
      };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  56299,
  (e, t, r) => {
    var n = e.r(35045).default;
    (t.exports = function (e) {
      if (null != e) {
        var t =
            e[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
          r = 0;
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length))
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
      }
      throw TypeError(n(e) + " is not iterable");
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  30659,
  (e, t, r) => {
    var n = e.r(98113),
      o = e.r(55157),
      a = e.r(88691),
      i = e.r(6822),
      s = e.r(36852),
      c = e.r(54534),
      u = e.r(56299);
    function l() {
      "use strict";
      var e = o(),
        r = e.m(l),
        d = (Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.__proto__)
          .constructor;
      function f(e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        );
      }
      var p = { throw: 1, return: 2, break: 3, continue: 3 };
      function h(e) {
        var t, r;
        return function (n) {
          t ||
            ((t = {
              stop: function () {
                return r(n.a, 2);
              },
              catch: function () {
                return n.v;
              },
              abrupt: function (e, t) {
                return r(n.a, p[e], t);
              },
              delegateYield: function (e, o, a) {
                return (t.resultName = o), r(n.d, u(e), a);
              },
              finish: function (e) {
                return r(n.f, e);
              },
            }),
            (r = function (e, r, o) {
              (n.p = t.prev), (n.n = t.next);
              try {
                return e(r, o);
              } finally {
                t.next = n.n;
              }
            })),
            t.resultName && ((t[t.resultName] = n.v), (t.resultName = void 0)),
            (t.sent = n.v),
            (t.next = n.n);
          try {
            return e.call(this, t);
          } finally {
            (n.p = t.prev), (n.n = t.next);
          }
        };
      }
      return ((t.exports = l =
        function () {
          return {
            wrap: function (t, r, n, o) {
              return e.w(h(t), r, n, o && o.reverse());
            },
            isGeneratorFunction: f,
            mark: e.m,
            awrap: function (e, t) {
              return new n(e, t);
            },
            AsyncIterator: s,
            async: function (e, t, r, n, o) {
              return (f(t) ? i : a)(h(e), t, r, n, o);
            },
            keys: c,
            values: u,
          };
        }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports))();
    }
    (t.exports = l),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  31277,
  (e, t, r) => {
    var n = e.r(30659)();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch (e) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = n)
        : Function("r", "regeneratorRuntime = r")(n);
    }
  },
  26252,
  (e, t, r) => {
    var n = e.r(35045).default;
    (t.exports = function (e, t) {
      if ("object" != n(e) || !e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(e, t || "default");
        if ("object" != n(o)) return o;
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t ? String : Number)(e);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  63974,
  (e, t, r) => {
    var n = e.r(35045).default,
      o = e.r(26252);
    (t.exports = function (e) {
      var t = o(e, "string");
      return "symbol" == n(t) ? t : t + "";
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  14414,
  (e, t, r) => {
    var n = e.r(63974);
    (t.exports = function (e, t, r) {
      return (
        (t = n(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  45940,
  (e, t, r) => {
    function n(e, t, r, n, o, a, i) {
      try {
        var s = e[a](i),
          c = s.value;
      } catch (e) {
        return void r(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(n, o);
    }
    (t.exports = function (e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, r);
          function s(e) {
            n(i, o, a, s, c, "next", e);
          }
          function c(e) {
            n(i, o, a, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  31159,
  (e, t, r) => {
    (t.exports = function (e) {
      if (Array.isArray(e)) return e;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  73973,
  (e, t, r) => {
    (t.exports = function (e, t) {
      var r =
        null == e
          ? null
          : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null != r) {
        var n,
          o,
          a,
          i,
          s = [],
          c = !0,
          u = !1;
        try {
          if (((a = (r = r.call(e)).next), 0 === t)) {
            if (Object(r) !== r) return;
            c = !1;
          } else
            for (
              ;
              !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t);
              c = !0
            );
        } catch (e) {
          (u = !0), (o = e);
        } finally {
          try {
            if (!c && null != r.return && ((i = r.return()), Object(i) !== i))
              return;
          } finally {
            if (u) throw o;
          }
        }
        return s;
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  27500,
  (e, t, r) => {
    (t.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  37906,
  (e, t, r) => {
    var n = e.r(27500);
    (t.exports = function (e, t) {
      if (e) {
        if ("string" == typeof e) return n(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(e, t)
            : void 0
        );
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  94441,
  (e, t, r) => {
    (t.exports = function () {
      throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  62195,
  (e, t, r) => {
    var n = e.r(31159),
      o = e.r(73973),
      a = e.r(37906),
      i = e.r(94441);
    (t.exports = function (e, t) {
      return n(e) || o(e, t) || a(e, t) || i();
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  52445,
  (e, t, r) => {
    (t.exports = function (e, t) {
      if (!(e instanceof t))
        throw TypeError("Cannot call a class as a function");
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  14356,
  (e, t, r) => {
    var n = e.r(63974);
    function o(e, t) {
      for (var r = 0; r < t.length; r++) {
        var o = t[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, n(o.key), o);
      }
    }
    (t.exports = function (e, t, r) {
      return (
        t && o(e.prototype, t),
        r && o(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  32164,
  (e, t, r) => {
    (t.exports = function (e) {
      if (void 0 === e)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  80689,
  (e, t, r) => {
    var n = e.r(35045).default,
      o = e.r(32164);
    (t.exports = function (e, t) {
      if (t && ("object" == n(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw TypeError(
          "Derived constructors may only return object or undefined"
        );
      return o(e);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  19823,
  (e, t, r) => {
    function n(e) {
      return (
        (t.exports = n =
          Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  10885,
  (e, t, r) => {
    function n(e, r) {
      return (
        (t.exports = n =
          Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        n(e, r)
      );
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  59947,
  (e, t, r) => {
    var n = e.r(10885);
    (t.exports = function (e, t) {
      if ("function" != typeof t && null !== t)
        throw TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && n(e, t);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  45813,
  (e, t, r) => {
    (t.exports = function (e) {
      try {
        return -1 !== Function.toString.call(e).indexOf("[native code]");
      } catch (t) {
        return "function" == typeof e;
      }
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  58524,
  (e, t, r) => {
    function n() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (e) {}
      return ((t.exports = n =
        function () {
          return !!e;
        }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports))();
    }
    (t.exports = n),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  42062,
  (e, t, r) => {
    var n = e.r(58524),
      o = e.r(10885);
    (t.exports = function (e, t, r) {
      if (n()) return Reflect.construct.apply(null, arguments);
      var a = [null];
      a.push.apply(a, t);
      var i = new (e.bind.apply(e, a))();
      return r && o(i, r.prototype), i;
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  13098,
  (e, t, r) => {
    var n = e.r(19823),
      o = e.r(10885),
      a = e.r(45813),
      i = e.r(42062);
    function s(e) {
      var r = "function" == typeof Map ? new Map() : void 0;
      return (
        (t.exports = s =
          function (e) {
            if (null === e || !a(e)) return e;
            if ("function" != typeof e)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== r) {
              if (r.has(e)) return r.get(e);
              r.set(e, t);
            }
            function t() {
              return i(e, arguments, n(this).constructor);
            }
            return (
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              o(t, e)
            );
          }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        s(e)
      );
    }
    (t.exports = s),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports);
  },
  41731,
  (e, t, r) => {
    "use strict";
    var n = e.r(13451);
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.UnsupportedStrategy =
        r.UnknownError =
        r.OAuthCallbackError =
        r.MissingSecret =
        r.MissingAuthorize =
        r.MissingAdapterMethods =
        r.MissingAdapter =
        r.MissingAPIRoute =
        r.InvalidCallbackUrl =
        r.AccountNotLinkedError =
          void 0),
      (r.adapterErrorHandler = function (e, t) {
        if (e)
          return Object.keys(e).reduce(function (r, n) {
            return (
              (r[n] = (0, a.default)(
                o.default.mark(function r() {
                  var a,
                    i,
                    s,
                    c,
                    u,
                    l = arguments;
                  return o.default.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            for (
                              r.prev = 0, i = Array((a = l.length)), s = 0;
                              s < a;
                              s++
                            )
                              i[s] = l[s];
                            return (
                              t.debug("adapter_".concat(n), { args: i }),
                              (c = e[n]),
                              (r.next = 6),
                              c.apply(void 0, i)
                            );
                          case 6:
                            return r.abrupt("return", r.sent);
                          case 9:
                            throw (
                              ((r.prev = 9),
                              (r.t0 = r.catch(0)),
                              t.error("adapter_error_".concat(n), r.t0),
                              ((u = new h(r.t0)).name = "".concat(
                                v(n),
                                "Error"
                              )),
                              u)
                            );
                          case 15:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 9]]
                  );
                })
              )),
              r
            );
          }, {});
      }),
      (r.capitalize = v),
      (r.eventsErrorHandler = function (e, t) {
        return Object.keys(e).reduce(function (r, n) {
          return (
            (r[n] = (0, a.default)(
              o.default.mark(function r() {
                var a,
                  i = arguments;
                return o.default.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (a = e[n]),
                            (r.next = 4),
                            a.apply(void 0, i)
                          );
                        case 4:
                          return r.abrupt("return", r.sent);
                        case 7:
                          (r.prev = 7),
                            (r.t0 = r.catch(0)),
                            t.error("".concat(x(n), "_EVENT_ERROR"), r.t0);
                        case 10:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 7]]
                );
              })
            )),
            r
          );
        }, {});
      }),
      (r.upperSnake = x);
    var o = n(e.r(31277)),
      a = n(e.r(45940)),
      i = n(e.r(14414)),
      s = n(e.r(52445)),
      c = n(e.r(14356)),
      u = n(e.r(80689)),
      l = n(e.r(19823)),
      d = n(e.r(59947));
    function f(e, t, r) {
      return (
        (t = (0, l.default)(t)),
        (0, u.default)(
          e,
          p()
            ? Reflect.construct(t, r || [], (0, l.default)(e).constructor)
            : t.apply(e, r)
        )
      );
    }
    function p() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        );
      } catch (e) {}
      return (p = function () {
        return !!e;
      })();
    }
    var h = (r.UnknownError = (function (e) {
      function t(e) {
        var r, n;
        return (
          (0, s.default)(this, t),
          ((n = f(this, t, [
            null != (r = null == e ? void 0 : e.message) ? r : e,
          ])).name = "UnknownError"),
          (n.code = e.code),
          e instanceof Error && (n.stack = e.stack),
          n
        );
      }
      return (
        (0, d.default)(t, e),
        (0, c.default)(t, [
          {
            key: "toJSON",
            value: function () {
              return {
                name: this.name,
                message: this.message,
                stack: this.stack,
              };
            },
          },
        ])
      );
    })((0, n(e.r(13098)).default)(Error)));
    function x(e) {
      return e.replace(/([A-Z])/g, "_$1").toUpperCase();
    }
    function v(e) {
      return "".concat(e[0].toUpperCase()).concat(e.slice(1));
    }
    (r.OAuthCallbackError = (function (e) {
      function t() {
        var e;
        (0, s.default)(this, t);
        for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          (e = f(this, t, [].concat(n))),
          (0, i.default)(e, "name", "OAuthCallbackError"),
          e
        );
      }
      return (0, d.default)(t, e), (0, c.default)(t);
    })(h)),
      (r.AccountNotLinkedError = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "AccountNotLinkedError"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.MissingAPIRoute = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "MissingAPIRouteError"),
            (0, i.default)(e, "code", "MISSING_NEXTAUTH_API_ROUTE_ERROR"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.MissingSecret = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "MissingSecretError"),
            (0, i.default)(e, "code", "NO_SECRET"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.MissingAuthorize = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "MissingAuthorizeError"),
            (0, i.default)(e, "code", "CALLBACK_CREDENTIALS_HANDLER_ERROR"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.MissingAdapter = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "MissingAdapterError"),
            (0, i.default)(e, "code", "EMAIL_REQUIRES_ADAPTER_ERROR"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.MissingAdapterMethods = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "MissingAdapterMethodsError"),
            (0, i.default)(e, "code", "MISSING_ADAPTER_METHODS_ERROR"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.UnsupportedStrategy = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "UnsupportedStrategyError"),
            (0, i.default)(e, "code", "CALLBACK_CREDENTIALS_JWT_ERROR"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h)),
      (r.InvalidCallbackUrl = (function (e) {
        function t() {
          var e;
          (0, s.default)(this, t);
          for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            (e = f(this, t, [].concat(n))),
            (0, i.default)(e, "name", "InvalidCallbackUrl"),
            (0, i.default)(e, "code", "INVALID_CALLBACK_URL_ERROR"),
            e
          );
        }
        return (0, d.default)(t, e), (0, c.default)(t);
      })(h));
  },
  36357,
  (e, t, r) => {
    "use strict";
    var n = e.r(13451);
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = void 0),
      (r.proxyLogger = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
          t = arguments.length > 1 ? arguments[1] : void 0;
        try {
          if ("u" < typeof window) return e;
          var r = {},
            n = function (e) {
              var n;
              r[e] =
                ((n = (0, i.default)(
                  o.default.mark(function r(n, i) {
                    var s, d;
                    return o.default.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              (l[e](n, i),
                              "error" === e && (i = u(i)),
                              (i.client = !0),
                              (s = "".concat(t, "/_log")),
                              (d = new URLSearchParams(
                                (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                    var r =
                                      null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                      ? c(Object(r), !0).forEach(function (t) {
                                          (0, a.default)(e, t, r[t]);
                                        })
                                      : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(
                                          e,
                                          Object.getOwnPropertyDescriptors(r)
                                        )
                                      : c(Object(r)).forEach(function (t) {
                                          Object.defineProperty(
                                            e,
                                            t,
                                            Object.getOwnPropertyDescriptor(
                                              r,
                                              t
                                            )
                                          );
                                        });
                                  }
                                  return e;
                                })({ level: e, code: n }, i)
                              )),
                              !navigator.sendBeacon)
                            ) {
                              r.next = 8;
                              break;
                            }
                            return r.abrupt(
                              "return",
                              navigator.sendBeacon(s, d)
                            );
                          case 8:
                            return (
                              (r.next = 10),
                              fetch(s, {
                                method: "POST",
                                body: d,
                                keepalive: !0,
                              })
                            );
                          case 10:
                            return r.abrupt("return", r.sent);
                          case 11:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )),
                function (e, t) {
                  return n.apply(this, arguments);
                });
            };
          for (var s in e) n(s);
          return r;
        } catch (e) {
          return l;
        }
      }),
      (r.setLogger = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        t || (l.debug = function () {}),
          e.error && (l.error = e.error),
          e.warn && (l.warn = e.warn),
          e.debug && (l.debug = e.debug);
      });
    var o = n(e.r(31277)),
      a = n(e.r(14414)),
      i = n(e.r(45940)),
      s = e.r(41731);
    function c(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function u(e) {
      var t, r;
      if (e instanceof Error && !(e instanceof s.UnknownError))
        return { message: e.message, stack: e.stack, name: e.name };
      if (null != (t = e) && t.error) {
        (e.error = u(e.error)),
          (e.message = null != (r = e.message) ? r : e.error.message);
      }
      return e;
    }
    var l = {
      error: function (e, t) {
        (t = u(t)),
          console.error(
            "[next-auth][error][".concat(e, "]"),
            "\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),
            t.message,
            t
          );
      },
      warn: function (e) {
        console.warn(
          "[next-auth][warn][".concat(e, "]"),
          "\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase())
        );
      },
      debug: function (e, t) {
        console.log("[next-auth][debug][".concat(e, "]"), t);
      },
    };
    r.default = l;
  },
  98520,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.default = function (e) {
        var t;
        let r = new URL("http://localhost:3000/api/auth");
        e && !e.startsWith("http") && (e = `https://${e}`);
        let n = new URL(null != (t = e) ? t : r),
          o = ("/" === n.pathname ? r.pathname : n.pathname).replace(/\/$/, ""),
          a = `${n.origin}${o}`;
        return {
          origin: n.origin,
          host: n.host,
          path: o,
          base: a,
          toString: () => a,
        };
      });
  },
  90120,
  (e, t, r) => {
    "use strict";
    var n = e.r(13451);
    Object.defineProperty(r, "__esModule", { value: !0 }),
      (r.BroadcastChannel = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "nextauth.message";
        return {
          receive: function (t) {
            var r = function (r) {
              if (r.key === e) {
                var n,
                  o = JSON.parse(null != (n = r.newValue) ? n : "{}");
                (null == o ? void 0 : o.event) === "session" &&
                  null != o &&
                  o.data &&
                  t(o);
              }
            };
            return (
              window.addEventListener("storage", r),
              function () {
                return window.removeEventListener("storage", r);
              }
            );
          },
          post: function (t) {
            if ("u" > typeof window)
              try {
                localStorage.setItem(
                  e,
                  JSON.stringify(c(c({}, t), {}, { timestamp: d() }))
                );
              } catch (e) {}
          },
        };
      }),
      (r.apiBaseUrl = l),
      (r.fetchData = function (e, t, r) {
        return u.apply(this, arguments);
      }),
      (r.now = d);
    var o = n(e.r(31277)),
      a = n(e.r(14414)),
      i = n(e.r(45940));
    function s(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(r), !0).forEach(function (t) {
              (0, a.default)(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : s(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function u() {
      return (u = (0, i.default)(
        o.default.mark(function e(t, r, n) {
          var a,
            i,
            s,
            u,
            d,
            f,
            p,
            h,
            x,
            v = arguments;
          return o.default.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = (a = v.length > 3 && void 0 !== v[3] ? v[3] : {})
                        .ctx),
                      (u =
                        void 0 === (s = a.req)
                          ? null == i
                            ? void 0
                            : i.req
                          : s),
                      (d = "".concat(l(r), "/").concat(t)),
                      (e.prev = 2),
                      (p = {
                        headers: c(
                          { "Content-Type": "application/json" },
                          null != u && null != (f = u.headers) && f.cookie
                            ? { cookie: u.headers.cookie }
                            : {}
                        ),
                      }),
                      null != u &&
                        u.body &&
                        ((p.body = JSON.stringify(u.body)),
                        (p.method = "POST")),
                      (e.next = 7),
                      fetch(d, p)
                    );
                  case 7:
                    return (h = e.sent), (e.next = 10), h.json();
                  case 10:
                    if (((x = e.sent), h.ok)) {
                      e.next = 13;
                      break;
                    }
                    throw x;
                  case 13:
                    return e.abrupt(
                      "return",
                      Object.keys(x).length > 0 ? x : null
                    );
                  case 16:
                    return (
                      (e.prev = 16),
                      (e.t0 = e.catch(2)),
                      n.error("CLIENT_FETCH_ERROR", { error: e.t0, url: d }),
                      e.abrupt("return", null)
                    );
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 16]]
          );
        })
      )).apply(this, arguments);
    }
    function l(e) {
      return "u" < typeof window
        ? "".concat(e.baseUrlServer).concat(e.basePathServer)
        : e.basePath;
    }
    function d() {
      return Math.floor(Date.now() / 1e3);
    }
  },
  27667,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
  },
  17255,
  (e, t, r) => {
    "use strict";
    var n,
      o,
      a,
      i,
      s,
      c = e.i(47167),
      u = e.r(13451),
      l = e.r(35045);
    Object.defineProperty(r, "__esModule", { value: !0 });
    var d = {
      SessionContext: !0,
      useSession: !0,
      getSession: !0,
      getCsrfToken: !0,
      getProviders: !0,
      signIn: !0,
      signOut: !0,
      SessionProvider: !0,
    };
    (r.SessionContext = void 0),
      (r.SessionProvider = function (e) {
        if (!P)
          throw Error("React Context is unavailable in Server Components");
        var t,
          r,
          n,
          o,
          a,
          i,
          s = e.children,
          c = e.basePath,
          u = e.refetchInterval,
          l = e.refetchWhenOffline;
        c && (k.basePath = c);
        var d = void 0 !== e.session;
        k._lastSync = d ? (0, m.now)() : 0;
        var p = v.useState(function () {
            return d && (k._session = e.session), e.session;
          }),
          g = (0, x.default)(p, 2),
          y = g[0],
          _ = g[1],
          w = v.useState(!d),
          j = (0, x.default)(w, 2),
          S = j[0],
          O = j[1];
        v.useEffect(function () {
          return (
            (k._getSession = (0, h.default)(
              f.default.mark(function e() {
                var t,
                  r,
                  n = arguments;
                return f.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = (n.length > 0 && void 0 !== n[0] ? n[0] : {})
                              .event),
                            (e.prev = 1),
                            !((r = "storage" === t) || void 0 === k._session))
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (k._lastSync = (0, m.now)()),
                            (e.next = 7),
                            M({ broadcast: !r })
                          );
                        case 7:
                          return (
                            (k._session = e.sent),
                            _(k._session),
                            e.abrupt("return")
                          );
                        case 10:
                          if (
                            !(
                              !t ||
                              null === k._session ||
                              (0, m.now)() < k._lastSync
                            )
                          ) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt("return");
                        case 12:
                          return (
                            (k._lastSync = (0, m.now)()), (e.next = 15), M()
                          );
                        case 15:
                          (k._session = e.sent), _(k._session), (e.next = 22);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(1)),
                            E.error("CLIENT_SESSION_ERROR", e.t0);
                        case 22:
                          return (e.prev = 22), O(!1), e.finish(22);
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 19, 22, 25]]
                );
              })
            )),
            k._getSession(),
            function () {
              (k._lastSync = 0),
                (k._session = void 0),
                (k._getSession = function () {});
            }
          );
        }, []),
          v.useEffect(function () {
            var e = R.receive(function () {
              return k._getSession({ event: "storage" });
            });
            return function () {
              return e();
            };
          }, []),
          v.useEffect(
            function () {
              var t = e.refetchOnWindowFocus,
                r = void 0 === t || t,
                n = function () {
                  r &&
                    "visible" === document.visibilityState &&
                    k._getSession({ event: "visibilitychange" });
                };
              return (
                document.addEventListener("visibilitychange", n, !1),
                function () {
                  return document.removeEventListener(
                    "visibilitychange",
                    n,
                    !1
                  );
                }
              );
            },
            [e.refetchOnWindowFocus]
          );
        var N =
            ((t = v.useState("u" > typeof navigator && navigator.onLine)),
            (n = (r = (0, x.default)(t, 2))[0]),
            (o = r[1]),
            (a = function () {
              return o(!0);
            }),
            (i = function () {
              return o(!1);
            }),
            v.useEffect(function () {
              return (
                window.addEventListener("online", a),
                window.addEventListener("offline", i),
                function () {
                  window.removeEventListener("online", a),
                    window.removeEventListener("offline", i);
                }
              );
            }, []),
            n),
          C = !1 !== l || N;
        v.useEffect(
          function () {
            if (u && C) {
              var e = setInterval(function () {
                k._session && k._getSession({ event: "poll" });
              }, 1e3 * u);
              return function () {
                return clearInterval(e);
              };
            }
          },
          [u, C]
        );
        var T = v.useMemo(
          function () {
            return {
              data: y,
              status: S ? "loading" : y ? "authenticated" : "unauthenticated",
              update: function (e) {
                return (0, h.default)(
                  f.default.mark(function t() {
                    var r;
                    return f.default.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!(S || !y)) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              O(!0),
                              (t.t0 = m.fetchData),
                              (t.t1 = k),
                              (t.t2 = E),
                              (t.next = 8),
                              A()
                            );
                          case 8:
                            return (
                              (t.t3 = t.sent),
                              (t.t4 = e),
                              (t.t5 = { csrfToken: t.t3, data: t.t4 }),
                              (t.t6 = { body: t.t5 }),
                              (t.t7 = { req: t.t6 }),
                              (t.next = 15),
                              (0, t.t0)("session", t.t1, t.t2, t.t7)
                            );
                          case 15:
                            return (
                              (r = t.sent),
                              O(!1),
                              r &&
                                (_(r),
                                R.post({
                                  event: "session",
                                  data: { trigger: "getSession" },
                                })),
                              t.abrupt("return", r)
                            );
                          case 19:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            };
          },
          [y, S]
        );
        return (0, b.jsx)(P.Provider, { value: T, children: s });
      }),
      (r.getCsrfToken = A),
      (r.getProviders = T),
      (r.getSession = M),
      (r.signIn = function (e, t, r) {
        return U.apply(this, arguments);
      }),
      (r.signOut = function (e) {
        return z.apply(this, arguments);
      }),
      (r.useSession = function (e) {
        if (!P)
          throw Error("React Context is unavailable in Server Components");
        var t = v.useContext(P),
          r = null != e ? e : {},
          n = r.required,
          o = r.onUnauthenticated,
          a = n && "unauthenticated" === t.status;
        return (v.useEffect(
          function () {
            if (a) {
              var e = "/api/auth/signin?".concat(
                new URLSearchParams({
                  error: "SessionRequired",
                  callbackUrl: window.location.href,
                })
              );
              o ? o() : (window.location.href = e);
            }
          },
          [a, o]
        ),
        a)
          ? { data: t.data, update: t.update, status: "loading" }
          : t;
      });
    var f = u(e.r(31277)),
      p = u(e.r(14414)),
      h = u(e.r(45940)),
      x = u(e.r(62195)),
      v = j(e.r(71645)),
      g = j(e.r(36357)),
      y = u(e.r(98520)),
      m = e.r(90120),
      b = e.r(43476),
      _ = e.r(27667);
    function w(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (w = function (e) {
        return e ? r : t;
      })(e);
    }
    function j(e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || ("object" != l(e) && "function" != typeof e))
        return { default: e };
      var r = w(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
          var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
          i && (i.get || i.set)
            ? Object.defineProperty(n, a, i)
            : (n[a] = e[a]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    function S(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? S(Object(r), !0).forEach(function (t) {
              (0, p.default)(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : S(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    Object.keys(_).forEach(function (e) {
      "default" === e ||
        "__esModule" === e ||
        Object.prototype.hasOwnProperty.call(d, e) ||
        (e in r && r[e] === _[e]) ||
        Object.defineProperty(r, e, {
          enumerable: !0,
          get: function () {
            return _[e];
          },
        });
    });
    var k = {
        baseUrl: (0, y.default)(
          null != (n = c.default.env.NEXTAUTH_URL)
            ? n
            : c.default.env.VERCEL_URL
        ).origin,
        basePath: (0, y.default)(c.default.env.NEXTAUTH_URL).path,
        baseUrlServer: (0, y.default)(
          null !=
            (o =
              null != (a = c.default.env.NEXTAUTH_URL_INTERNAL)
                ? a
                : c.default.env.NEXTAUTH_URL)
            ? o
            : c.default.env.VERCEL_URL
        ).origin,
        basePathServer: (0, y.default)(
          null != (i = c.default.env.NEXTAUTH_URL_INTERNAL)
            ? i
            : c.default.env.NEXTAUTH_URL
        ).path,
        _lastSync: 0,
        _session: void 0,
        _getSession: function () {},
      },
      R = (0, m.BroadcastChannel)(),
      E = (0, g.proxyLogger)(g.default, k.basePath),
      P = (r.SessionContext =
        null == (s = v.createContext) ? void 0 : s.call(v, void 0));
    function M(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (N = (0, h.default)(
        f.default.mark(function e(t) {
          var r, n;
          return f.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), (0, m.fetchData)("session", k, E, t);
                case 2:
                  return (
                    (n = e.sent),
                    (null == (r = null == t ? void 0 : t.broadcast) || r) &&
                      R.post({
                        event: "session",
                        data: { trigger: "getSession" },
                      }),
                    e.abrupt("return", n)
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function A(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (C = (0, h.default)(
        f.default.mark(function e(t) {
          var r;
          return f.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), (0, m.fetchData)("csrf", k, E, t);
                case 2:
                  return (
                    (r = e.sent),
                    e.abrupt("return", null == r ? void 0 : r.csrfToken)
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function T() {
      return L.apply(this, arguments);
    }
    function L() {
      return (L = (0, h.default)(
        f.default.mark(function e() {
          return f.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), (0, m.fetchData)("providers", k, E);
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function U() {
      return (U = (0, h.default)(
        f.default.mark(function e(t, r, n) {
          var o, a, i, s, c, u, l, d, p, h, x, v, g, y, b, _, w;
          return f.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (i =
                      void 0 === (a = (o = null != r ? r : {}).callbackUrl)
                        ? window.location.href
                        : a),
                    (c = void 0 === (s = o.redirect) || s),
                    (u = (0, m.apiBaseUrl)(k)),
                    (e.next = 4),
                    T()
                  );
                case 4:
                  if ((l = e.sent)) {
                    e.next = 8;
                    break;
                  }
                  return (
                    (window.location.href = "".concat(u, "/error")),
                    e.abrupt("return")
                  );
                case 8:
                  if (!(!t || !(t in l))) {
                    e.next = 11;
                    break;
                  }
                  return (
                    (window.location.href = ""
                      .concat(u, "/signin?")
                      .concat(new URLSearchParams({ callbackUrl: i }))),
                    e.abrupt("return")
                  );
                case 11:
                  return (
                    (d = "credentials" === l[t].type),
                    (p = "email" === l[t].type),
                    (h = d || p),
                    (x = ""
                      .concat(u, "/")
                      .concat(d ? "callback" : "signin", "/")
                      .concat(t)),
                    (v = ""
                      .concat(x)
                      .concat(n ? "?".concat(new URLSearchParams(n)) : "")),
                    (e.t0 = fetch),
                    (e.t1 = v),
                    (e.t2 = {
                      "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    (e.t3 = URLSearchParams),
                    (e.t4 = O),
                    (e.t5 = O({}, r)),
                    (e.t6 = {}),
                    (e.next = 25),
                    A()
                  );
                case 25:
                  return (
                    (e.t7 = e.sent),
                    (e.t8 = i),
                    (e.t9 = { csrfToken: e.t7, callbackUrl: e.t8, json: !0 }),
                    (e.t10 = (0, e.t4)(e.t5, e.t6, e.t9)),
                    (e.t11 = new e.t3(e.t10)),
                    (e.t12 = { method: "post", headers: e.t2, body: e.t11 }),
                    (e.next = 33),
                    (0, e.t0)(e.t1, e.t12)
                  );
                case 33:
                  return (g = e.sent), (e.next = 36), g.json();
                case 36:
                  if (((y = e.sent), !(c || !h))) {
                    e.next = 42;
                    break;
                  }
                  return (
                    (_ = null != (b = y.url) ? b : i),
                    (window.location.href = _),
                    _.includes("#") && window.location.reload(),
                    e.abrupt("return")
                  );
                case 42:
                  if (((w = new URL(y.url).searchParams.get("error")), !g.ok)) {
                    e.next = 46;
                    break;
                  }
                  return (e.next = 46), k._getSession({ event: "storage" });
                case 46:
                  return e.abrupt("return", {
                    error: w,
                    status: g.status,
                    ok: g.ok,
                    url: w ? null : y.url,
                  });
                case 47:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    function z() {
      return (z = (0, h.default)(
        f.default.mark(function e(t) {
          var r, n, o, a, i, s, c, u, l;
          return f.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (o =
                      void 0 === (n = (null != t ? t : {}).callbackUrl)
                        ? window.location.href
                        : n),
                    (a = (0, m.apiBaseUrl)(k)),
                    (e.t0 = {
                      "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    (e.t1 = URLSearchParams),
                    (e.next = 6),
                    A()
                  );
                case 6:
                  return (
                    (e.t2 = e.sent),
                    (e.t3 = o),
                    (e.t4 = { csrfToken: e.t2, callbackUrl: e.t3, json: !0 }),
                    (e.t5 = new e.t1(e.t4)),
                    (i = { method: "post", headers: e.t0, body: e.t5 }),
                    (e.next = 13),
                    fetch("".concat(a, "/signout"), i)
                  );
                case 13:
                  return (s = e.sent), (e.next = 16), s.json();
                case 16:
                  if (
                    ((c = e.sent),
                    R.post({ event: "session", data: { trigger: "signout" } }),
                    !(null == (r = null == t ? void 0 : t.redirect) || r))
                  ) {
                    e.next = 23;
                    break;
                  }
                  return (
                    (l = null != (u = c.url) ? u : o),
                    (window.location.href = l),
                    l.includes("#") && window.location.reload(),
                    e.abrupt("return")
                  );
                case 23:
                  return (e.next = 25), k._getSession({ event: "storage" });
                case 25:
                  return e.abrupt("return", c);
                case 26:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
  },
  31278,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    e.s(["Loader2", () => t], 31278);
  },
  63488,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("mail", [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
      ],
    ]);
    e.s(["Mail", () => t], 63488);
  },
  7486,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("building-2", [
      ["path", { d: "M10 12h4", key: "a56b0p" }],
      ["path", { d: "M10 8h4", key: "1sr2af" }],
      ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
      [
        "path",
        {
          d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
          key: "secmi2",
        },
      ],
      [
        "path",
        { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" },
      ],
    ]);
    e.s(["Building2", () => t], 7486);
  },
  70756,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("lock", [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1",
        },
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
    ]);
    e.s(["Lock", () => t], 70756);
  },
  16015,
  (e, t, r) => {},
  98547,
  (e, t, r) => {
    var n = e.i(47167);
    e.r(16015);
    var o = e.r(71645),
      a = o && "object" == typeof o && "default" in o ? o : { default: o },
      i = void 0 !== n.default && n.default.env && !0,
      s = function (e) {
        return "[object String]" === Object.prototype.toString.call(e);
      },
      c = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.name,
            n = void 0 === r ? "stylesheet" : r,
            o = t.optimizeForSpeed,
            a = void 0 === o ? i : o;
          u(s(n), "`name` must be a string"),
            (this._name = n),
            (this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}"),
            u("boolean" == typeof a, "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = a),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0);
          var c =
            "u" > typeof window &&
            document.querySelector('meta[property="csp-nonce"]');
          this._nonce = c ? c.getAttribute("content") : null;
        }
        var t,
          r = e.prototype;
        return (
          (r.setOptimizeForSpeed = function (e) {
            u("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"),
              u(
                0 === this._rulesCount,
                "optimizeForSpeed cannot be when rules have already been inserted"
              ),
              this.flush(),
              (this._optimizeForSpeed = e),
              this.inject();
          }),
          (r.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (r.inject = function () {
            var e = this;
            if (
              (u(!this._injected, "sheet already injected"),
              (this._injected = !0),
              "u" > typeof window && this._optimizeForSpeed)
            ) {
              (this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (i ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                    ),
                  this.flush(),
                  (this._injected = !0));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (t, r) {
                return (
                  "number" == typeof r
                    ? (e._serverSheet.cssRules[r] = { cssText: t })
                    : e._serverSheet.cssRules.push({ cssText: t }),
                  r
                );
              },
              deleteRule: function (t) {
                e._serverSheet.cssRules[t] = null;
              },
            };
          }),
          (r.getSheetForTag = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e)
                return document.styleSheets[t];
          }),
          (r.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (r.insertRule = function (e, t) {
            if (
              (u(s(e), "`insertRule` accepts only strings"),
              "u" < typeof window)
            )
              return (
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var r = this.getSheet();
              "number" != typeof t && (t = r.cssRules.length);
              try {
                r.insertRule(e, t);
              } catch (t) {
                return (
                  i ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                  -1
                );
              }
            } else {
              var n = this._tags[t];
              this._tags.push(this.makeStyleTag(this._name, e, n));
            }
            return this._rulesCount++;
          }),
          (r.replaceRule = function (e, t) {
            if (this._optimizeForSpeed || "u" < typeof window) {
              var r = "u" > typeof window ? this.getSheet() : this._serverSheet;
              if (
                (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])
              )
                return e;
              r.deleteRule(e);
              try {
                r.insertRule(t, e);
              } catch (n) {
                i ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                  ),
                  r.insertRule(this._deletedRulePlaceholder, e);
              }
            } else {
              var n = this._tags[e];
              u(n, "old rule at index `" + e + "` not found"),
                (n.textContent = t);
            }
            return e;
          }),
          (r.deleteRule = function (e) {
            if ("u" < typeof window)
              return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed) this.replaceRule(e, "");
            else {
              var t = this._tags[e];
              u(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                (this._tags[e] = null);
            }
          }),
          (r.flush = function () {
            (this._injected = !1),
              (this._rulesCount = 0),
              "u" > typeof window
                ? (this._tags.forEach(function (e) {
                    return e && e.parentNode.removeChild(e);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []);
          }),
          (r.cssRules = function () {
            var e = this;
            return "u" < typeof window
              ? this._serverSheet.cssRules
              : this._tags.reduce(function (t, r) {
                  return (
                    r
                      ? (t = t.concat(
                          Array.prototype.map.call(
                            e.getSheetForTag(r).cssRules,
                            function (t) {
                              return t.cssText === e._deletedRulePlaceholder
                                ? null
                                : t;
                            }
                          )
                        ))
                      : t.push(null),
                    t
                  );
                }, []);
          }),
          (r.makeStyleTag = function (e, t, r) {
            t &&
              u(s(t), "makeStyleTag accepts only strings as second parameter");
            var n = document.createElement("style");
            this._nonce && n.setAttribute("nonce", this._nonce),
              (n.type = "text/css"),
              n.setAttribute("data-" + e, ""),
              t && n.appendChild(document.createTextNode(t));
            var o = document.head || document.getElementsByTagName("head")[0];
            return r ? o.insertBefore(n, r) : o.appendChild(n), n;
          }),
          (t = [
            {
              key: "length",
              get: function () {
                return this._rulesCount;
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(e.prototype, t),
          e
        );
      })();
    function u(e, t) {
      if (!e) throw Error("StyleSheet: " + t + ".");
    }
    var l = function (e) {
        for (var t = 5381, r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r);
        return t >>> 0;
      },
      d = {};
    function f(e, t) {
      if (!t) return "jsx-" + e;
      var r = String(t),
        n = e + r;
      return d[n] || (d[n] = "jsx-" + l(e + "-" + r)), d[n];
    }
    function p(e, t) {
      "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
      var r = e + t;
      return (
        d[r] || (d[r] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[r]
      );
    }
    var h = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.styleSheet,
            n = void 0 === r ? null : r,
            o = t.optimizeForSpeed,
            a = void 0 !== o && o;
          (this._sheet =
            n || new c({ name: "styled-jsx", optimizeForSpeed: a })),
            this._sheet.inject(),
            n &&
              "boolean" == typeof a &&
              (this._sheet.setOptimizeForSpeed(a),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {});
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              "u" > typeof window &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (e, t) {
                    return (e[t] = 0), e;
                  },
                  {}
                )));
            var r = this.getIdAndRules(e),
              n = r.styleId,
              o = r.rules;
            if (n in this._instancesCounts) {
              this._instancesCounts[n] += 1;
              return;
            }
            var a = o
              .map(function (e) {
                return t._sheet.insertRule(e);
              })
              .filter(function (e) {
                return -1 !== e;
              });
            (this._indices[n] = a), (this._instancesCounts[n] = 1);
          }),
          (t.remove = function (e) {
            var t = this,
              r = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw Error("StyleSheetRegistry: " + t + ".");
              })(r in this._instancesCounts, "styleId: `" + r + "` not found"),
              (this._instancesCounts[r] -= 1),
              this._instancesCounts[r] < 1)
            ) {
              var n = this._fromServer && this._fromServer[r];
              n
                ? (n.parentNode.removeChild(n), delete this._fromServer[r])
                : (this._indices[r].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[r]),
                delete this._instancesCounts[r];
            }
          }),
          (t.update = function (e, t) {
            this.add(t), this.remove(e);
          }),
          (t.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              r = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return r[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (e) {
                  return !!e[1];
                })
            );
          }),
          (t.styles = function (e) {
            var t, r;
            return (
              (t = this.cssRules()),
              void 0 === (r = e) && (r = {}),
              t.map(function (e) {
                var t = e[0],
                  n = e[1];
                return a.default.createElement("style", {
                  id: "__" + t,
                  key: "__" + t,
                  nonce: r.nonce ? r.nonce : void 0,
                  dangerouslySetInnerHTML: { __html: n },
                });
              })
            );
          }),
          (t.getIdAndRules = function (e) {
            var t = e.children,
              r = e.dynamic,
              n = e.id;
            if (r) {
              var o = f(n, r);
              return {
                styleId: o,
                rules: Array.isArray(t)
                  ? t.map(function (e) {
                      return p(o, e);
                    })
                  : [p(o, t)],
              };
            }
            return { styleId: f(n), rules: Array.isArray(t) ? t : [t] };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return (e[t.id.slice(2)] = t), e;
              }, {});
          }),
          e
        );
      })(),
      x = o.createContext(null);
    function v() {
      return new h();
    }
    function g() {
      return o.useContext(x);
    }
    x.displayName = "StyleSheetContext";
    var y = a.default.useInsertionEffect || a.default.useLayoutEffect,
      m = "u" > typeof window ? v() : void 0;
    function b(e) {
      var t = m || g();
      return (
        t &&
          ("u" < typeof window
            ? t.add(e)
            : y(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove(e);
                    }
                  );
                },
                [e.id, String(e.dynamic)]
              )),
        null
      );
    }
    (b.dynamic = function (e) {
      return e
        .map(function (e) {
          return f(e[0], e[1]);
        })
        .join(" ");
    }),
      (r.StyleRegistry = function (e) {
        var t = e.registry,
          r = e.children,
          n = o.useContext(x),
          i = o.useState(function () {
            return n || t || v();
          })[0];
        return a.default.createElement(x.Provider, { value: i }, r);
      }),
      (r.createStyleRegistry = v),
      (r.style = b),
      (r.useStyleRegistry = g);
  },
  37902,
  (e, t, r) => {
    t.exports = e.r(98547).style;
  },
  86536,
  77705,
  (e) => {
    "use strict";
    var t = e.i(75254);
    let r = (0, t.default)("eye", [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0",
        },
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    ]);
    e.s(["Eye", () => r], 86536);
    let n = (0, t.default)("eye-off", [
      [
        "path",
        {
          d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
          key: "ct8e1f",
        },
      ],
      ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
      [
        "path",
        {
          d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
          key: "13bj9a",
        },
      ],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
    ]);
    e.s(["EyeOff", () => n], 77705);
  },
  94542,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(37902),
      n = e.i(932),
      o = e.i(71645),
      a = e.i(17255),
      i = e.i(18566),
      s = e.i(86536),
      c = e.i(77705),
      u = e.i(70756),
      l = e.i(63488),
      d = e.i(7486),
      f = e.i(31278);
    function p() {
      let e,
        r = (0, n.c)(1);
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(o.Suspense, {
              fallback: (0, t.jsx)("div", {
                style: { minHeight: "100vh", background: "#07070d" },
              }),
              children: (0, t.jsx)(h, {}),
            })),
            (r[0] = e))
          : (e = r[0]),
        e
      );
    }
    function h() {
      let e = (0, i.useRouter)(),
        n = (0, i.useSearchParams)().get("callbackUrl") || "/client",
        [p, h] = (0, o.useState)(""),
        [x, v] = (0, o.useState)(""),
        [g, y] = (0, o.useState)(!1),
        [m, b] = (0, o.useState)(""),
        [_, w] = (0, o.useState)(!1),
        j = async (t) => {
          t.preventDefault(), b(""), w(!0);
          try {
            let t = await (0, a.signIn)("client-login", {
              email: p,
              password: x,
              redirect: !1,
              callbackUrl: n,
            });
            t?.error ? b("Invalid email or password") : t?.ok && e.push(n);
          } catch {
            b("Something went wrong. Please try again.");
          } finally {
            w(!1);
          }
        };
      return (0, t.jsxs)("div", {
        className: "jsx-416621d4cdaa58a5 client-login-page",
        children: [
          (0, t.jsxs)("div", {
            className: "jsx-416621d4cdaa58a5 client-login-bg",
            children: [
              (0, t.jsx)("div", {
                className:
                  "jsx-416621d4cdaa58a5 client-login-orb client-login-orb-1",
              }),
              (0, t.jsx)("div", {
                className:
                  "jsx-416621d4cdaa58a5 client-login-orb client-login-orb-2",
              }),
              (0, t.jsx)("div", {
                className:
                  "jsx-416621d4cdaa58a5 client-login-orb client-login-orb-3",
              }),
              (0, t.jsx)("div", {
                className: "jsx-416621d4cdaa58a5 client-login-grid",
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "jsx-416621d4cdaa58a5 client-login-container",
            children: [
              (0, t.jsxs)("div", {
                className: "jsx-416621d4cdaa58a5 client-login-brand",
                children: [
                  (0, t.jsx)("div", {
                    className: "jsx-416621d4cdaa58a5 client-login-icon-wrap",
                    children: (0, t.jsx)(d.Building2, {
                      className: "client-login-icon",
                    }),
                  }),
                  (0, t.jsxs)("h1", {
                    className: "jsx-416621d4cdaa58a5 client-login-title",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "jsx-416621d4cdaa58a5 client-login-title-white",
                        children: "Yuvi",
                      }),
                      (0, t.jsx)("span", {
                        className:
                          "jsx-416621d4cdaa58a5 client-login-title-pink",
                        children: "chaar",
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: "jsx-416621d4cdaa58a5 client-login-subtitle",
                    children: "Client Portal",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "jsx-416621d4cdaa58a5 client-login-card",
                children: [
                  (0, t.jsxs)("div", {
                    className: "jsx-416621d4cdaa58a5 client-login-card-header",
                    children: [
                      (0, t.jsx)("h2", {
                        className:
                          "jsx-416621d4cdaa58a5 client-login-card-title",
                        children: "Welcome back",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "jsx-416621d4cdaa58a5 client-login-card-desc",
                        children: "Sign in to view your brand dashboard",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("form", {
                    onSubmit: j,
                    className: "jsx-416621d4cdaa58a5 client-login-form",
                    children: [
                      m &&
                        (0, t.jsxs)("div", {
                          className: "jsx-416621d4cdaa58a5 client-login-error",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "jsx-416621d4cdaa58a5 client-login-error-dot",
                            }),
                            (0, t.jsx)("span", {
                              className: "jsx-416621d4cdaa58a5",
                              children: m,
                            }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: "jsx-416621d4cdaa58a5 client-login-field",
                        children: [
                          (0, t.jsx)("label", {
                            htmlFor: "client-email",
                            className:
                              "jsx-416621d4cdaa58a5 client-login-label",
                            children: "Email Address",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "jsx-416621d4cdaa58a5 client-login-input-wrapper",
                            children: [
                              (0, t.jsx)(l.Mail, {
                                className: "client-login-input-icon",
                              }),
                              (0, t.jsx)("input", {
                                id: "client-email",
                                type: "email",
                                value: p,
                                onChange: (e) => h(e.target.value),
                                placeholder: "you@company.com",
                                required: !0,
                                autoComplete: "email",
                                className:
                                  "jsx-416621d4cdaa58a5 client-login-input",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "jsx-416621d4cdaa58a5 client-login-field",
                        children: [
                          (0, t.jsx)("label", {
                            htmlFor: "client-password",
                            className:
                              "jsx-416621d4cdaa58a5 client-login-label",
                            children: "Password",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "jsx-416621d4cdaa58a5 client-login-input-wrapper",
                            children: [
                              (0, t.jsx)(u.Lock, {
                                className: "client-login-input-icon",
                              }),
                              (0, t.jsx)("input", {
                                id: "client-password",
                                type: g ? "text" : "password",
                                value: x,
                                onChange: (e) => v(e.target.value),
                                placeholder: "••••••••",
                                required: !0,
                                autoComplete: "current-password",
                                className:
                                  "jsx-416621d4cdaa58a5 client-login-input client-login-input-password",
                              }),
                              (0, t.jsx)("button", {
                                type: "button",
                                onClick: () => y(!g),
                                tabIndex: -1,
                                className:
                                  "jsx-416621d4cdaa58a5 client-login-toggle-pw",
                                children: g
                                  ? (0, t.jsx)(c.EyeOff, {
                                      className: "w-4 h-4",
                                    })
                                  : (0, t.jsx)(s.Eye, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("button", {
                        type: "submit",
                        disabled: _,
                        className: "jsx-416621d4cdaa58a5 client-login-submit",
                        children: _
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(f.Loader2, {
                                  className: "w-4 h-4 animate-spin",
                                }),
                                (0, t.jsx)("span", {
                                  className: "jsx-416621d4cdaa58a5",
                                  children: "Signing in…",
                                }),
                              ],
                            })
                          : (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)(d.Building2, {
                                  className: "w-4 h-4",
                                }),
                                (0, t.jsx)("span", {
                                  className: "jsx-416621d4cdaa58a5",
                                  children: "Sign in to Dashboard",
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "jsx-416621d4cdaa58a5 client-login-footer",
                    children: (0, t.jsx)("p", {
                      className: "jsx-416621d4cdaa58a5",
                      children:
                        "Your credentials were provided by the Yuvichaar team",
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, t.jsx)(r.default, {
            id: "416621d4cdaa58a5",
            children:
              '.client-login-page.jsx-416621d4cdaa58a5{background:#07070d;justify-content:center;align-items:center;min-height:100vh;padding:1rem;display:flex;position:relative;overflow:hidden}.client-login-bg.jsx-416621d4cdaa58a5{pointer-events:none;z-index:0;position:absolute;inset:0}.client-login-orb.jsx-416621d4cdaa58a5{filter:blur(100px);opacity:.25;border-radius:50%;position:absolute}.client-login-orb-1.jsx-416621d4cdaa58a5{background:#e91e8c;width:450px;height:450px;animation:9s ease-in-out infinite clientOrbFloat;top:-120px;left:-80px}.client-login-orb-2.jsx-416621d4cdaa58a5{background:#9333ea;width:380px;height:380px;animation:11s ease-in-out infinite reverse clientOrbFloat;bottom:-80px;right:-60px}.client-login-orb-3.jsx-416621d4cdaa58a5{background:#ec4899;width:260px;height:260px;animation:7s ease-in-out infinite clientOrbPulse;top:50%;left:50%;transform:translate(-50%,-50%)}.client-login-grid.jsx-416621d4cdaa58a5{background-image:linear-gradient(#ffffff05 1px,#0000 1px),linear-gradient(90deg,#ffffff05 1px,#0000 1px);background-size:60px 60px;position:absolute;inset:0}@keyframes clientOrbFloat{0%,to{transform:translateY(0)}50%{transform:translateY(-35px)}}@keyframes clientOrbPulse{0%,to{opacity:.15;transform:translate(-50%,-50%)scale(1)}50%{opacity:.3;transform:translate(-50%,-50%)scale(1.15)}}.client-login-container.jsx-416621d4cdaa58a5{z-index:1;flex-direction:column;align-items:center;gap:2rem;width:100%;max-width:420px;display:flex;position:relative}.client-login-brand.jsx-416621d4cdaa58a5{text-align:center;flex-direction:column;align-items:center;gap:.75rem;display:flex}.client-login-icon-wrap.jsx-416621d4cdaa58a5{background:linear-gradient(135deg,#e91e8c,#9333ea);border-radius:16px;justify-content:center;align-items:center;width:56px;height:56px;animation:3s ease-in-out infinite clientIconGlow;display:flex;box-shadow:0 0 30px #e91e8c66}@keyframes clientIconGlow{0%,to{box-shadow:0 0 30px #e91e8c66}50%{box-shadow:0 0 50px #9333ea80}}.client-login-icon.jsx-416621d4cdaa58a5{color:#fff;width:28px;height:28px}.client-login-title.jsx-416621d4cdaa58a5{letter-spacing:-.03em;font-size:1.75rem;font-weight:800;line-height:1}.client-login-title-white.jsx-416621d4cdaa58a5{color:#f8fafc}.client-login-title-pink.jsx-416621d4cdaa58a5{color:#f472b6}.client-login-subtitle.jsx-416621d4cdaa58a5{color:#94a3b8;text-transform:uppercase;letter-spacing:.15em;font-size:.875rem;font-weight:500}.client-login-card.jsx-416621d4cdaa58a5{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#111118cc;border:1px solid #ffffff14;border-radius:20px;width:100%;padding:2rem;box-shadow:0 0 0 1px #ffffff0d,0 20px 50px #00000080}.client-login-card-header.jsx-416621d4cdaa58a5{text-align:center;margin-bottom:1.75rem}.client-login-card-title.jsx-416621d4cdaa58a5{color:#f8fafc;margin-bottom:.375rem;font-size:1.25rem;font-weight:700}.client-login-card-desc.jsx-416621d4cdaa58a5{color:#64748b;font-size:.875rem}.client-login-form.jsx-416621d4cdaa58a5{flex-direction:column;gap:1.25rem;display:flex}.client-login-error.jsx-416621d4cdaa58a5{color:#f87171;background:#ef44441a;border:1px solid #ef444440;border-radius:10px;align-items:center;gap:.5rem;padding:.75rem 1rem;font-size:.875rem;display:flex}.client-login-error-dot.jsx-416621d4cdaa58a5{background:#ef4444;border-radius:50%;flex-shrink:0;width:6px;height:6px}.client-login-field.jsx-416621d4cdaa58a5{flex-direction:column;gap:.5rem;display:flex}.client-login-label.jsx-416621d4cdaa58a5{color:#cbd5e1;letter-spacing:.02em;font-size:.8125rem;font-weight:600}.client-login-input-wrapper.jsx-416621d4cdaa58a5{align-items:center;display:flex;position:relative}.client-login-input-icon.jsx-416621d4cdaa58a5{color:#64748b;pointer-events:none;z-index:1;width:16px;height:16px;position:absolute;left:14px}.client-login-input.jsx-416621d4cdaa58a5{color:#f8fafc;background:#ffffff0a;border:1px solid #ffffff1a;border-radius:12px;outline:none;width:100%;padding:.75rem .875rem .75rem 2.75rem;font-family:inherit;font-size:.9375rem;transition:all .2s}.client-login-input.jsx-416621d4cdaa58a5::placeholder{color:#475569}.client-login-input.jsx-416621d4cdaa58a5:focus{background:#ffffff0f;border-color:#e91e8c;box-shadow:0 0 0 3px #e91e8c26}.client-login-input-password.jsx-416621d4cdaa58a5{padding-right:2.75rem}.client-login-toggle-pw.jsx-416621d4cdaa58a5{color:#64748b;cursor:pointer;background:0 0;border:none;border-radius:6px;justify-content:center;align-items:center;padding:4px;transition:color .2s;display:flex;position:absolute;right:12px}.client-login-toggle-pw.jsx-416621d4cdaa58a5:hover{color:#cbd5e1}.client-login-submit.jsx-416621d4cdaa58a5{color:#fff;cursor:pointer;background:linear-gradient(135deg,#e91e8c,#9333ea);border:none;border-radius:12px;justify-content:center;align-items:center;gap:.5rem;width:100%;margin-top:.25rem;padding:.8125rem;font-family:inherit;font-size:.9375rem;font-weight:600;transition:all .25s;display:flex;position:relative;overflow:hidden;box-shadow:0 4px 15px #e91e8c59}.client-login-submit.jsx-416621d4cdaa58a5:before{content:"";opacity:0;background:linear-gradient(135deg,#f472b6,#a855f7);transition:opacity .25s;position:absolute;inset:0}.client-login-submit.jsx-416621d4cdaa58a5:hover:before{opacity:1}.client-login-submit.jsx-416621d4cdaa58a5:hover{transform:translateY(-1px);box-shadow:0 6px 25px #e91e8c73}.client-login-submit.jsx-416621d4cdaa58a5:active{transform:translateY(0)}.client-login-submit.jsx-416621d4cdaa58a5:disabled{opacity:.7;cursor:not-allowed;transform:none}.client-login-submit.jsx-416621d4cdaa58a5>.jsx-416621d4cdaa58a5{z-index:1;position:relative}.client-login-footer.jsx-416621d4cdaa58a5{text-align:center;border-top:1px solid #ffffff0f;margin-top:1.5rem;padding-top:1.25rem}.client-login-footer.jsx-416621d4cdaa58a5 p.jsx-416621d4cdaa58a5{color:#475569;letter-spacing:.02em;font-size:.75rem}@media (width<=480px){.client-login-card.jsx-416621d4cdaa58a5{border-radius:16px;padding:1.5rem}.client-login-title.jsx-416621d4cdaa58a5{font-size:1.5rem}}',
          }),
        ],
      });
    }
    e.s(["default", () => p]);
  },
]);
