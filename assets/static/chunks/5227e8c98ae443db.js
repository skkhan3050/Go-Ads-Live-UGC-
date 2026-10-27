(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return o;
      },
      searchParamsToUrlQuery: function () {
        return i;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    function i(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function l(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, l(e));
        else t.set(r, l(n));
      return t;
    }
    function o(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return o;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(90809)._(e.r(98183)),
      l = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        a = e.pathname || "",
        s = e.hash || "",
        o = e.query || "",
        c = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : r &&
            ((c = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (c += ":" + e.port)),
        o && "object" == typeof o && (o = String(i.urlQueryToSearchParams(o)));
      let d = e.search || (o && `?${o}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || l.test(n)) && !1 !== c)
          ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
          : c || (c = ""),
        s && "#" !== s[0] && (s = "#" + s),
        d && "?" !== d[0] && (d = "?" + d),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${n}${c}${a}${d}${s}`
      );
    }
    let o = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return s(e);
    }
  },
  18581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(71645);
    function a(e, t) {
      let r = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else e && (r.current = i(e, n)), t && (a.current = i(t, n));
        },
        [e, t]
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return b;
      },
      PageNotFoundError: function () {
        return y;
      },
      SP: function () {
        return x;
      },
      ST: function () {
        return h;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return l;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return d;
      },
      isAbsoluteUrl: function () {
        return o;
      },
      isResSent: function () {
        return m;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return f;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function l(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      o = (e) => s.test(e);
    function c() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function m(e) {
      return e.finished || e.headersSent;
    }
    function f(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function p(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && m(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${u(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let x = "u" > typeof performance,
      h =
        x &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class g extends Error {}
    class b extends Error {}
    class y extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class j extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(18967),
      a = e.r(52817);
    function i(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, a.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  22016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return y;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(90809),
      l = e.r(43476),
      s = i._(e.r(71645)),
      o = e.r(95057),
      c = e.r(8372),
      d = e.r(18581),
      u = e.r(18967),
      m = e.r(5550);
    e.r(33525);
    let f = e.r(91949),
      p = e.r(73668),
      x = e.r(9396);
    function h(e) {
      return "string" == typeof e ? e : (0, o.formatUrl)(e);
    }
    function g(t) {
      var r;
      let n,
        a,
        i,
        [o, g] = (0, s.useOptimistic)(f.IDLE_LINK_STATUS),
        y = (0, s.useRef)(null),
        {
          href: v,
          as: j,
          children: _,
          prefetch: w = null,
          passHref: N,
          replace: k,
          shallow: S,
          scroll: E,
          onClick: C,
          onMouseEnter: P,
          onTouchStart: O,
          legacyBehavior: M = !1,
          onNavigate: R,
          ref: A,
          unstable_dynamicOnHover: L,
          ...I
        } = t;
      (n = _),
        M &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, l.jsx)("a", { children: n }));
      let T = s.default.useContext(c.AppRouterContext),
        $ = !1 !== w,
        z =
          !1 !== w
            ? null === (r = w) || "auto" === r
              ? x.FetchStrategy.PPR
              : x.FetchStrategy.Full
            : x.FetchStrategy.PPR,
        { href: U, as: B } = s.default.useMemo(() => {
          let e = h(v);
          return { href: e, as: j ? h(j) : e };
        }, [v, j]);
      if (M) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        a = s.default.Children.only(n);
      }
      let F = M ? a && "object" == typeof a && a.ref : A,
        D = s.default.useCallback(
          (e) => (
            null !== T &&
              (y.current = (0, f.mountLinkInstance)(e, U, T, z, $, g)),
            () => {
              y.current &&
                ((0, f.unmountLinkForCurrentNavigation)(y.current),
                (y.current = null)),
                (0, f.unmountPrefetchableInstance)(e);
            }
          ),
          [$, U, T, z, g]
        ),
        q = {
          ref: (0, d.useMergedRef)(D, F),
          onClick(t) {
            M || "function" != typeof C || C(t),
              M &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(t),
              !T ||
                t.defaultPrevented ||
                (function (t, r, n, a, i, l, o) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, p.isLocalURL)(r)) {
                      i && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: u } = e.r(99781);
                    s.default.startTransition(() => {
                      u(n || r, i ? "replace" : "push", l ?? !0, a.current);
                    });
                  }
                })(t, U, B, y, k, E, R);
          },
          onMouseEnter(e) {
            M || "function" != typeof P || P(e),
              M &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              T && $ && (0, f.onNavigationIntent)(e.currentTarget, !0 === L);
          },
          onTouchStart: function (e) {
            M || "function" != typeof O || O(e),
              M &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              T && $ && (0, f.onNavigationIntent)(e.currentTarget, !0 === L);
          },
        };
      return (
        (0, u.isAbsoluteUrl)(B)
          ? (q.href = B)
          : (M && !N && ("a" !== a.type || "href" in a.props)) ||
            (q.href = (0, m.addBasePath)(B)),
        (i = M
          ? s.default.cloneElement(a, q)
          : (0, l.jsx)("a", { ...I, ...q, children: n })),
        (0, l.jsx)(b.Provider, { value: o, children: i })
      );
    }
    e.r(84508);
    let b = (0, s.createContext)(f.IDLE_LINK_STATUS),
      y = () => (0, s.useContext)(b);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
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
  46897,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]);
    e.s(["MapPin", () => t], 46897);
  },
  84614,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("user", [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
    ]);
    e.s(["User", () => t], 84614);
  },
  72520,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("arrow-right", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]);
    e.s(["ArrowRight", () => t], 72520);
  },
  81469,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932);
    let n = (0, e.i(75254).default)("instagram", [
      [
        "rect",
        {
          width: "20",
          height: "20",
          x: "2",
          y: "2",
          rx: "5",
          ry: "5",
          key: "2e1cvw",
        },
      ],
      [
        "path",
        { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
      ],
      [
        "line",
        { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" },
      ],
    ]);
    var a = e.i(63488),
      i = e.i(22016);
    let l = [
      {
        flag: "🇮🇳",
        city: "Kolkata, India",
        address:
          "1c, Circus Market Pl, Lower Range, Beck Bagan, Ballygunge, Kolkata, West Bengal 700017, India",
      },
      {
        flag: "🌍",
        city: "Global Presence",
        address:
          "Serving India, Dubai, USA & Canada",
      },
    ];
    function s() {
      let e,
        n = (0, r.c)(1);
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("div", {
              className: "h-px w-full",
              style: {
                background:
                  "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.07) 50%, rgba(0,0,0,0))",
              },
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    function o() {
      let e,
        o,
        d,
        u,
        m,
        f,
        p,
        x,
        h,
        g,
        b,
        y = (0, r.c)(11);
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsxs)("div", {
              className: "md:max-w-[320px]",
              children: [
                (0, t.jsxs)("p", {
                  className:
                    "m-0 flex items-baseline gap-[2px] text-[20.8px] font-extrabold leading-[31.2px] tracking-[-0.624px]",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-[#457aff]",
                      children: "Yuvi",
                    }),
                    (0, t.jsx)("span", {
                      className: "text-[#0d0a14]",
                      children: "chaar",
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "ml-[6px] text-[11.2px] font-normal leading-[16.8px] tracking-[0.56px] text-[#0d0a14]/30",
                      children: "FUNNELS",
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "m-0 mt-2 max-w-[237px] text-[12.48px] leading-[19.968px] text-[#9ca3af]",
                  children:
                    "AI-enabled marketing & growth partners engineering your path to ₹100Cr.",
                }),
              ],
            })),
            (y[0] = e))
          : (e = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)("p", {
              className:
                "m-0 text-[9.92px] font-bold leading-[14.88px] tracking-[0.992px] text-[#457aff]",
              children: "CONTACT",
            })),
            (y[1] = o))
          : (o = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsxs)("a", {
              href: "mailto:GOADSLIVE002@GMAIL.COM",
              className: "mt-3 flex items-center gap-3 no-underline",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "flex size-[34px] shrink-0 items-center justify-center rounded-[10px] border border-[rgba(69,122,255,0.15)] bg-[rgba(69,122,255,0.08)]",
                  children: (0, t.jsx)(a.Mail, {
                    className: "size-[15px] text-[#457aff]",
                  }),
                }),
                (0, t.jsx)("span", {
                  className: "text-[12.8px] leading-[19.2px] text-[#6b7280]",
                  children: "GOADSLIVE002@GMAIL.COM",
                }),
              ],
            })),
            (y[2] = d))
          : (d = y[2]),
        y[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsxs)("div", {
              className: "md:flex md:items-start md:justify-between md:gap-16",
              children: [
                e,
                (0, t.jsxs)("div", {
                  className: "mt-10 md:mt-0",
                  children: [
                    o,
                    d,
                    (0, t.jsxs)("a", {
                      href: "https://instagram.com/yuvichaar_funnels",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "mt-3 flex items-center gap-3 no-underline",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "flex size-[34px] shrink-0 items-center justify-center rounded-[10px] border border-[rgba(69,122,255,0.15)] bg-[rgba(69,122,255,0.08)]",
                          children: (0, t.jsx)(n, {
                            className: "size-[15px] text-[#457aff]",
                          }),
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "text-[12.8px] leading-[19.2px] text-[#6b7280]",
                          children: "@yuvichaarfunnels",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (y[3] = u))
          : (u = y[3]),
        y[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)("div", {
              className: "my-7 md:my-10",
              children: (0, t.jsx)(s, {}),
            })),
            (f = (0, t.jsx)("p", {
              className:
                "m-0 text-[9.92px] font-bold leading-[14.88px] tracking-[0.992px] text-[#457aff]",
              children: "OFFICES",
            })),
            (y[4] = m),
            (y[5] = f))
          : ((m = y[4]), (f = y[5])),
        y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, t.jsx)("div", {
              className: "mt-3.5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4 md:gap-8",
              children: l.map(c),
            })),
            (y[6] = p))
          : (p = y[6]),
        y[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, t.jsx)("div", {
              className: "my-6 md:my-10",
              children: (0, t.jsx)(s, {}),
            })),
            (h = (0, t.jsx)("p", {
              className:
                "m-0 max-w-[860px] text-[10.88px] leading-[17px] text-[#9ca3af]",
              children:
                "GoAds Live, having its registered office at 1c, Circus Market Pl, Lower Range, Beck Bagan, Ballygunge, Kolkata, West Bengal 700017, India. Serving India, Dubai, USA & Canada.",
            })),
            (y[7] = x),
            (y[8] = h))
          : ((x = y[7]), (h = y[8])),
        y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, t.jsxs)("p", {
              className: "m-0 text-[10.88px] leading-[16.32px] text-[#d1d5db]",
              children: [
                "© ",
                new Date().getFullYear(),
                " GoAds Live. All rights reserved.",
              ],
            })),
            (y[9] = g))
          : (g = y[9]),
        y[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsx)("footer", {
              "data-voice-id": "home-footer",
              className: "bg-[#fafafa] px-6 pb-10 pt-[50px] md:px-10 md:pt-16",
              children: (0, t.jsxs)("div", {
                className: "mx-auto w-full max-w-[1180px]",
                children: [
                  u,
                  m,
                  f,
                  p,
                  x,
                  h,
                  (0, t.jsxs)("div", {
                    className:
                      "mt-5 flex flex-wrap items-center justify-between gap-3",
                    children: [
                      g,
                      (0, t.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-4",
                        children: [
                          (0, t.jsx)(i.default, {
                            href: "/privacy",
                            className:
                              "text-[10.88px] leading-[16.32px] text-[#9ca3af] no-underline hover:text-[#457aff]",
                            children: "Privacy Policy",
                          }),
                          (0, t.jsx)(i.default, {
                            href: "/terms",
                            className:
                              "text-[10.88px] leading-[16.32px] text-[#9ca3af] no-underline hover:text-[#457aff]",
                            children: "Terms of Use",
                          }),
                          (0, t.jsx)("a", {
                            href: "mailto:GOADSLIVE002@GMAIL.COM",
                            className:
                              "text-[10.88px] leading-[16.32px] text-[#9ca3af] no-underline hover:text-[#457aff]",
                            children: "Contact Us",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "m-0 text-[10.88px] leading-[16.32px] text-[#d1d5db]",
                            children: "GSTIN: 08AABCY8310R1ZP",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })),
            (y[10] = b))
          : (b = y[10]),
        b
      );
    }
    function c(e) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-start gap-3",
          children: [
            (0, t.jsx)("span", {
              className:
                "flex size-[34px] shrink-0 items-center justify-center rounded-[10px] border border-black/[0.07] bg-[#f8f7ff] text-[14.4px] leading-[21.6px]",
              children: e.flag,
            }),
            (0, t.jsxs)("div", {
              className: "min-w-0",
              children: [
                (0, t.jsxs)("p", {
                  className:
                    "m-0 flex items-center gap-2 text-[12.48px] font-bold leading-[18.72px] text-[#0d0a14]",
                  children: [
                    e.city,
                    e.soon &&
                      (0, t.jsx)("span", {
                        className:
                          "inline-flex h-[16.418px] items-center rounded-full border border-[rgba(69,122,255,0.18)] bg-[rgba(69,122,255,0.08)] px-[6px] text-[8.8px] font-bold leading-[13.2px] text-[#457aff]",
                        children: "SOON",
                      }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "m-0 mt-[2px] text-[11.52px] leading-[17.28px] text-[#9ca3af]",
                  children: e.address,
                }),
              ],
            }),
          ],
        },
        e.city
      );
    }
    e.s(["default", () => o], 81469);
  },
  92161,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("menu", [
      ["path", { d: "M4 5h16", key: "1tepv9" }],
      ["path", { d: "M4 12h16", key: "1lakjw" }],
      ["path", { d: "M4 19h16", key: "1djgab" }],
    ]);
    e.s(["Menu", () => t], 92161);
  },
  78621,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(6485);
    function a(e) {
      let a,
        i,
        l,
        s,
        o,
        c,
        d,
        u,
        m,
        f,
        p = (0, r.c)(30),
        { hlsUrl: x, poster: h, title: g, category: b } = e;
      p[0] !== x ? ((a = { src: x }), (p[0] = x), (p[1] = a)) : (a = p[1]);
      let {
        containerRef: y,
        videoRef: v,
        isHovering: j,
        shouldRenderVideo: _,
        handleMouseEnter: w,
        handleMouseLeave: N,
      } = (0, n.useHlsHoverVideo)(a);
      p[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, t.jsx)("div", {
            className:
              "absolute inset-0 border-4 border-gray-800 rounded-2xl pointer-events-none z-10",
          })),
          (p[2] = i))
        : (i = p[2]);
      let k = g || "Video preview",
        S = `absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          j ? "opacity-0" : "opacity-100"
        }`;
      p[3] !== h || p[4] !== k || p[5] !== S
        ? ((l = (0, t.jsx)("img", { src: h, alt: k, className: S })),
          (p[3] = h),
          (p[4] = k),
          (p[5] = S),
          (p[6] = l))
        : (l = p[6]),
        p[7] !== j || p[8] !== h || p[9] !== _ || p[10] !== v
          ? ((s =
              _ &&
              (0, t.jsx)("video", {
                ref: v,
                muted: !0,
                playsInline: !0,
                preload: "auto",
                className: `absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                  j ? "opacity-100 scale-[1.02]" : "opacity-0 scale-100"
                }`,
                poster: h,
              })),
            (p[7] = j),
            (p[8] = h),
            (p[9] = _),
            (p[10] = v),
            (p[11] = s))
          : (s = p[11]),
        p[12] !== b
          ? ((o =
              b &&
              (0, t.jsx)("div", {
                className: "absolute top-4 left-3 right-3 z-20",
                children: (0, t.jsx)("span", {
                  className:
                    "text-[10px] font-semibold text-gray-400 tracking-wider",
                  children: b,
                }),
              })),
            (p[12] = b),
            (p[13] = o))
          : (o = p[13]),
        p[14] !== g
          ? ((c =
              g &&
              (0, t.jsx)("h4", {
                className: "text-white font-semibold text-sm",
                children: g,
              })),
            (p[14] = g),
            (p[15] = c))
          : (c = p[15]),
        p[16] !== c
          ? ((d = (0, t.jsx)("div", {
              className:
                "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20",
              children: c,
            })),
            (p[16] = c),
            (p[17] = d))
          : (d = p[17]);
      let E = `absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
        j ? "opacity-0" : "opacity-100"
      }`;
      return (
        p[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)("div", {
              className:
                "flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-lg",
              children: (0, t.jsx)("svg", {
                className: "ml-0.5 h-5 w-5 text-black",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                children: (0, t.jsx)("path", { d: "M8 5.5v13l10-6.5z" }),
              }),
            })),
            (p[18] = u))
          : (u = p[18]),
        p[19] !== E
          ? ((m = (0, t.jsx)("div", {
              className: E,
              "aria-hidden": "true",
              children: u,
            })),
            (p[19] = E),
            (p[20] = m))
          : (m = p[20]),
        p[21] !== y ||
        p[22] !== w ||
        p[23] !== N ||
        p[24] !== m ||
        p[25] !== l ||
        p[26] !== s ||
        p[27] !== o ||
        p[28] !== d
          ? ((f = (0, t.jsxs)("div", {
              ref: y,
              onMouseEnter: w,
              onMouseLeave: N,
              className:
                "group relative rounded-2xl overflow-hidden bg-[#1a1a1a] aspect-[9/16] cursor-pointer transition-transform duration-300 hover:scale-[1.02]",
              children: [i, l, s, o, d, m],
            })),
            (p[21] = y),
            (p[22] = w),
            (p[23] = N),
            (p[24] = m),
            (p[25] = l),
            (p[26] = s),
            (p[27] = o),
            (p[28] = d),
            (p[29] = f))
          : (f = p[29]),
        f
      );
    }
    e.s(["default", () => a]);
  },
  80555,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("factory", [
      ["path", { d: "M12 16h.01", key: "1drbdi" }],
      ["path", { d: "M16 16h.01", key: "1f9h7w" }],
      [
        "path",
        {
          d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
          key: "1iv0i2",
        },
      ],
      ["path", { d: "M8 16h.01", key: "18s6g9" }],
    ]);
    e.s(["Factory", () => t], 80555);
  },
  88143,
  (e, t, r) => {
    "use strict";
    function n({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: n,
      blurDataURL: a,
      objectFit: i,
    }) {
      let l = r ? 40 * r : e,
        s = n ? 40 * n : t,
        o = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        o
          ? "none"
          : "contain" === i
          ? "xMidYMid"
          : "cover" === i
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  87690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return i;
      },
      imageConfigDefault: function () {
        return l;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
      l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  8927,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      e.r(33525);
    let n = e.r(43369),
      a = e.r(88143),
      i = e.r(87690),
      l = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function o(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function c(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: d = !1,
        loading: u,
        className: m,
        quality: f,
        width: p,
        height: x,
        fill: h = !1,
        style: g,
        overrideSrc: b,
        onLoad: y,
        onLoadingComplete: v,
        placeholder: j = "empty",
        blurDataURL: _,
        fetchPriority: w,
        decoding: N = "async",
        layout: k,
        objectFit: S,
        objectPosition: E,
        lazyBoundary: C,
        lazyRoot: P,
        ...O
      },
      M
    ) {
      var R;
      let A,
        L,
        I,
        { imgConf: T, showAltText: $, blurComplete: z, defaultLoader: U } = M,
        B = T || i.imageConfigDefault;
      if ("allSizes" in B) A = B;
      else {
        let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
          t = B.deviceSizes.sort((e, t) => e - t),
          r = B.qualities?.sort((e, t) => e - t);
        A = { ...B, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === U)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let F = O.loader || U;
      delete O.loader, delete O.srcSet;
      let D = "__next_img_default" in F;
      if (D) {
        if ("custom" === A.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: r, ...n } = t;
          return e(n);
        };
      }
      if (k) {
        "fill" === k && (h = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[k];
        e && (g = { ...g, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[k];
        r && !t && (t = r);
      }
      let q = "",
        K = o(p),
        W = o(x);
      if ((R = e) && "object" == typeof R && (s(R) || void 0 !== R.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((L = t.blurWidth),
          (I = t.blurHeight),
          (_ = _ || t.blurDataURL),
          (q = t.src),
          !h)
        )
          if (K || W) {
            if (K && !W) {
              let e = K / t.width;
              W = Math.round(t.height * e);
            } else if (!K && W) {
              let e = W / t.height;
              K = Math.round(t.width * e);
            }
          } else (K = t.width), (W = t.height);
      }
      let H = !c && !d && ("lazy" === u || void 0 === u);
      (!(e = "string" == typeof e ? e : q) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (H = !1)),
        A.unoptimized && (r = !0),
        D &&
          !A.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let G = o(f),
        V = Object.assign(
          h
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: E,
              }
            : {},
          $ ? {} : { color: "transparent" },
          g
        ),
        X =
          z || "empty" === j
            ? null
            : "blur" === j
            ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({
                widthInt: K,
                heightInt: W,
                blurWidth: L,
                blurHeight: I,
                blurDataURL: _ || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${j}")`,
        Y = l.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        J = X
          ? {
              backgroundSize: Y,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: X,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: a,
          quality: i,
          sizes: l,
          loader: s,
        }) {
          if (r) {
            let e = (0, n.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//") && e) {
              let r = t.includes("?") ? "&" : "?";
              t = `${t}${r}dpl=${e}`;
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: o, kind: c } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              n
            ) {
              if (n) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  a = [];
                for (let e; (e = r.exec(n)); ) a.push(parseInt(e[2]));
                if (a.length) {
                  let r = 0.01 * Math.min(...a);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, a, l),
            d = o.length - 1;
          return {
            sizes: l || "w" !== c ? l : "100vw",
            srcSet: o
              .map(
                (r, n) =>
                  `${s({ config: e, src: t, quality: i, width: r })} ${
                    "w" === c ? r : n + 1
                  }${c}`
              )
              .join(", "),
            src: s({ config: e, src: t, quality: i, width: o[d] }),
          };
        })({
          config: A,
          src: e,
          unoptimized: r,
          width: K,
          quality: G,
          sizes: t,
          loader: F,
        }),
        Z = H ? "lazy" : u;
      return {
        props: {
          ...O,
          loading: Z,
          fetchPriority: w,
          width: K,
          height: W,
          decoding: N,
          className: m,
          style: { ...V, ...J },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: b || Q.src,
        },
        meta: { unoptimized: r, preload: d || c, placeholder: j, fill: h },
      };
    }
  },
  98879,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let n = e.r(71645),
      a = "u" < typeof window,
      i = a ? () => {} : n.useLayoutEffect,
      l = a ? () => {} : n.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        a && (t?.mountedInstances?.add(e.children), s()),
        i(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        i(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          )
        ),
        l(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  25633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return x;
      },
      defaultHead: function () {
        return u;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(55682),
      l = e.r(90809),
      s = e.r(43476),
      o = l._(e.r(71645)),
      c = i._(e.r(98879)),
      d = e.r(42732);
    function u() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function m(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === o.default.Fragment
        ? e.concat(
            o.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(33525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, n, a;
      return e
        .reduce(m, [])
        .reverse()
        .concat(u().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (a = {}),
          (e) => {
            let i = !0,
              l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              l = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (i = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (i = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = f.length; t < r; t++) {
                  let r = f[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (i = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = a[r] || new Set();
                      ("name" !== r || !l) && n.has(t)
                        ? (i = !1)
                        : (n.add(t), (a[r] = n));
                    }
                }
            }
            return i;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return o.default.cloneElement(e, { key: r });
        });
    }
    let x = function ({ children: e }) {
      let t = (0, o.useContext)(d.HeadManagerContext);
      return (0, s.jsx)(c.default, {
        reduceComponentsToState: p,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18556,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let n = e.r(55682)._(e.r(71645)),
      a = e.r(87690),
      i = n.default.createContext(a.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, r) => {
    "use strict";
    function n(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
  },
  1948,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let n = e.r(70965),
      a = e.r(43369);
    function i({ config: e, src: t, width: r, quality: i }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let l = (0, n.findClosestQuality)(i, e),
        s = (0, a.getDeploymentId)();
      return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${
        t.startsWith("/") && s ? `&dpl=${s}` : ""
      }`;
    }
    i.__next_img_default = !0;
    let l = i;
  },
  5500,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      });
    let n = e.r(55682),
      a = e.r(90809),
      i = e.r(43476),
      l = a._(e.r(71645)),
      s = n._(e.r(74080)),
      o = n._(e.r(25633)),
      c = e.r(8927),
      d = e.r(87690),
      u = e.r(18556);
    e.r(33525);
    let m = e.r(65856),
      f = n._(e.r(1948)),
      p = e.r(18581),
      x = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function h(e, t, r, n, a, i, l) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && a(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let n = !1,
                  a = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => a,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (a = !0), t.stopPropagation();
                  },
                });
              }
              n?.current && n.current(e);
            }
          }));
    }
    function g(e) {
      return l.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0, l.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: n,
          width: a,
          decoding: s,
          className: o,
          style: c,
          fetchPriority: d,
          placeholder: u,
          loading: m,
          unoptimized: f,
          fill: x,
          onLoadRef: b,
          onLoadingCompleteRef: y,
          setBlurComplete: v,
          setShowAltText: j,
          sizesInput: _,
          onLoad: w,
          onError: N,
          ...k
        },
        S
      ) => {
        let E = (0, l.useCallback)(
            (e) => {
              e && (N && (e.src = e.src), e.complete && h(e, u, b, y, v, f, _));
            },
            [e, u, b, y, v, N, f, _]
          ),
          C = (0, p.useMergedRef)(S, E);
        return (0, i.jsx)("img", {
          ...k,
          ...g(d),
          loading: m,
          width: a,
          height: n,
          decoding: s,
          "data-nimg": x ? "fill" : "1",
          className: o,
          style: c,
          sizes: r,
          srcSet: t,
          src: e,
          ref: C,
          onLoad: (e) => {
            h(e.currentTarget, u, b, y, v, f, _);
          },
          onError: (e) => {
            j(!0), "empty" !== u && v(!0), N && N(e);
          },
        });
      }
    );
    function y({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...g(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, i.jsx)(o.default, {
            children: (0, i.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, l.forwardRef)((e, t) => {
      let r = (0, l.useContext)(m.RouterContext),
        n = (0, l.useContext)(u.ImageConfigContext),
        a = (0, l.useMemo)(() => {
          let e = x || n || d.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            a = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: a,
            localPatterns:
              "u" < typeof window ? n?.localPatterns : e.localPatterns,
          };
        }, [n]),
        { onLoad: s, onLoadingComplete: o } = e,
        p = (0, l.useRef)(s);
      (0, l.useEffect)(() => {
        p.current = s;
      }, [s]);
      let h = (0, l.useRef)(o);
      (0, l.useEffect)(() => {
        h.current = o;
      }, [o]);
      let [g, v] = (0, l.useState)(!1),
        [j, _] = (0, l.useState)(!1),
        { props: w, meta: N } = (0, c.getImgProps)(e, {
          defaultLoader: f.default,
          imgConf: a,
          blurComplete: g,
          showAltText: j,
        });
      return (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(b, {
            ...w,
            unoptimized: N.unoptimized,
            placeholder: N.placeholder,
            fill: N.fill,
            onLoadRef: p,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: _,
            sizesInput: e.sizes,
            ref: t,
          }),
          N.preload
            ? (0, i.jsx)(y, { isAppRouter: !r, imgAttributes: w })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  94909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return d;
      },
      getImageProps: function () {
        return c;
      },
    };
    for (var a in n) Object.defineProperty(r, a, { enumerable: !0, get: n[a] });
    let i = e.r(55682),
      l = e.r(8927),
      s = e.r(5500),
      o = i._(e.r(1948));
    function c(e) {
      let { props: t } = (0, l.getImgProps)(e, {
        defaultLoader: o.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let d = s.Image;
  },
  57688,
  (e, t, r) => {
    t.exports = e.r(94909);
  },
  22998,
  (e, t, r) => {
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = e.r(71645),
      a = n && "object" == typeof n && "default" in n ? n : { default: n };
    !(function (e) {
      if (!e || "u" < typeof window) return;
      let t = document.createElement("style");
      t.setAttribute("type", "text/css"),
        (t.innerHTML = e),
        document.head.appendChild(t);
    })(
      '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
    ),
      (r.default = n.forwardRef(function (
        {
          style: e = {},
          className: t = "",
          autoFill: r = !1,
          play: i = !0,
          pauseOnHover: l = !1,
          pauseOnClick: s = !1,
          direction: o = "left",
          speed: c = 50,
          delay: d = 0,
          loop: u = 0,
          gradient: m = !1,
          gradientColor: f = "white",
          gradientWidth: p = 200,
          onFinish: x,
          onCycleComplete: h,
          onMount: g,
          children: b,
        },
        y
      ) {
        let [v, j] = n.useState(0),
          [_, w] = n.useState(0),
          [N, k] = n.useState(1),
          [S, E] = n.useState(!1),
          C = n.useRef(null),
          P = y || C,
          O = n.useRef(null),
          M = n.useCallback(() => {
            if (O.current && P.current) {
              let e = P.current.getBoundingClientRect(),
                t = O.current.getBoundingClientRect(),
                n = e.width,
                a = t.width;
              ("up" === o || "down" === o) && ((n = e.height), (a = t.height)),
                r && n && a ? k(a < n ? Math.ceil(n / a) : 1) : k(1),
                j(n),
                w(a);
            }
          }, [r, P, o]);
        n.useEffect(() => {
          if (S && (M(), O.current && P.current)) {
            let e = new ResizeObserver(() => M());
            return (
              e.observe(P.current),
              e.observe(O.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [M, P, S]),
          n.useEffect(() => {
            M();
          }, [M, b]),
          n.useEffect(() => {
            E(!0);
          }, []),
          n.useEffect(() => {
            "function" == typeof g && g();
          }, []);
        let R = n.useMemo(
            () => (r ? (_ * N) / c : _ < v ? v / c : _ / c),
            [r, v, _, N, c]
          ),
          A = n.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !i || l ? "paused" : "running",
                "--pause-on-click": !i || (l && !s) || s ? "paused" : "running",
                "--width": "up" === o || "down" === o ? "100vh" : "100%",
                "--transform":
                  "up" === o
                    ? "rotate(-90deg)"
                    : "down" === o
                    ? "rotate(90deg)"
                    : "none",
              }),
            [e, i, l, s, o]
          ),
          L = n.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" == typeof p ? `${p}px` : p,
            }),
            [f, p]
          ),
          I = n.useMemo(
            () => ({
              "--play": i ? "running" : "paused",
              "--direction": "left" === o ? "normal" : "reverse",
              "--duration": `${R}s`,
              "--delay": `${d}s`,
              "--iteration-count": u ? `${u}` : "infinite",
              "--min-width": r ? "auto" : "100%",
            }),
            [i, o, R, d, u, r]
          ),
          T = n.useMemo(
            () => ({
              "--transform":
                "up" === o
                  ? "rotate(90deg)"
                  : "down" === o
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [o]
          ),
          $ = n.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                a.default.createElement(
                  n.Fragment,
                  { key: t },
                  n.Children.map(b, (e) =>
                    a.default.createElement(
                      "div",
                      { style: T, className: "rfm-child" },
                      e
                    )
                  )
                )
              ),
            [T, b]
          );
        return S
          ? a.default.createElement(
              "div",
              { ref: P, style: A, className: "rfm-marquee-container " + t },
              m &&
                a.default.createElement("div", {
                  style: L,
                  className: "rfm-overlay",
                }),
              a.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: I,
                  onAnimationIteration: h,
                  onAnimationEnd: x,
                },
                a.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: O },
                  n.Children.map(b, (e) =>
                    a.default.createElement(
                      "div",
                      { style: T, className: "rfm-child" },
                      e
                    )
                  )
                ),
                $(N - 1)
              ),
              a.default.createElement(
                "div",
                { className: "rfm-marquee", style: I },
                $(N)
              )
            )
          : null;
      }));
  },
  6485,
  (e) => {
    "use strict";
    var t = e.i(932),
      r = e.i(71645),
      n = e.i(50471);
    function a(e) {
      let a,
        i,
        l,
        s,
        o,
        c,
        d,
        u,
        m,
        f = (0, t.c)(18),
        { src: p, rootMargin: x } = e,
        h = void 0 === x ? "200px" : x,
        g = (0, r.useRef)(null),
        b = (0, r.useRef)(null),
        y = (0, r.useRef)(null),
        [v, j] = (0, r.useState)(!1),
        [_, w] = (0, r.useState)(!1),
        [N, k] = (0, r.useState)(!1),
        [S, E] = (0, r.useState)(!1);
      f[0] !== h
        ? ((a = () => {
            let e = g.current;
            if (!e) return;
            let t = new IntersectionObserver(
              (e) => {
                let [t] = e;
                j(t.isIntersecting);
              },
              { rootMargin: h, threshold: 0.15 }
            );
            return t.observe(e), () => t.disconnect();
          }),
          (i = [h]),
          (f[0] = h),
          (f[1] = a),
          (f[2] = i))
        : ((a = f[1]), (i = f[2])),
        (0, r.useEffect)(a, i),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = () => {
              let e = () => {
                E(!0),
                  window.removeEventListener("pointerdown", e),
                  window.removeEventListener("keydown", e);
              };
              return (
                window.addEventListener("pointerdown", e, { once: !0 }),
                window.addEventListener("keydown", e, { once: !0 }),
                () => {
                  window.removeEventListener("pointerdown", e),
                    window.removeEventListener("keydown", e);
                }
              );
            }),
            (s = []),
            (f[3] = l),
            (f[4] = s))
          : ((l = f[3]), (s = f[4])),
        (0, r.useEffect)(l, s),
        f[5] !== v || f[6] !== p
          ? ((o = () => {
              let e = b.current;
              if (!v || !e) {
                k(!1),
                  y.current && (y.current.destroy(), (y.current = null)),
                  e && (e.pause(), e.removeAttribute("src"), e.load());
                return;
              }
              let t = () => {
                k(!0);
                let cur = b.current;
                if (cur && cur.paused) {
                  cur.play().catch(() => {});
                }
              };
              if (
                ((e.preload = "auto"),
                (e.muted = !0),
                (e.playsInline = !0),
                (e.loop = !0),
                p && p.indexOf(".mp4") !== -1)
              ) {
                e.src = p;
                e.load();
              } else if (n.default.isSupported()) {
                let t = new n.default({
                  startLevel: 0,
                  capLevelToPlayerSize: !0,
                  maxBufferLength: 20,
                  backBufferLength: 5,
                  lowLatencyMode: !0,
                });
                (y.current = t), t.loadSource(p), t.attachMedia(e);
              } else
                e.canPlayType("application/vnd.apple.mpegurl") && (e.src = p);
              return (
                e.addEventListener("loadeddata", t),
                e.addEventListener("canplay", t),
                () => {
                  e.removeEventListener("loadeddata", t),
                    e.removeEventListener("canplay", t),
                    y.current && (y.current.destroy(), (y.current = null));
                }
              );
            }),
            (c = [v, p]),
            (f[5] = v),
            (f[6] = p),
            (f[7] = o),
            (f[8] = c))
          : ((o = f[7]), (c = f[8])),
        (0, r.useEffect)(o, c),
        f[9] !== S || f[10] !== N
          ? ((d = () => {
              if ((w(!0), !N)) return;
              let e = b.current;
              e && ((e.muted = !S), e.play());
            }),
            (f[9] = S),
            (f[10] = N),
            (f[11] = d))
          : (d = f[11]);
      let C = d;
      f[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = () => {
            w(!1);
            let e = b.current;
            e && (e.pause(), (e.currentTime = 0));
          }),
          (f[12] = u))
        : (u = f[12]);
      let P = u;
      return (
        f[13] !== C || f[14] !== _ || f[15] !== v || f[16] !== N
          ? ((m = {
              containerRef: g,
              videoRef: b,
              isHovering: _,
              isReady: N,
              shouldRenderVideo: v,
              handleMouseEnter: C,
              handleMouseLeave: P,
            }),
            (f[13] = C),
            (f[14] = _),
            (f[15] = v),
            (f[16] = N),
            (f[17] = m))
          : (m = f[17]),
        m
      );
    }
    e.s(["useHlsHoverVideo", () => a]);
  },
  60979,
  (e) => {
    "use strict";
    e.s([
      "BRAND_LOGOS",
      0,
      [
        {
          name: "King Koil",
          src: "//upload.wikimedia.org/wikipedia/en/thumb/b/b7/King_Koil%27s_logo.png/250px-King_Koil%27s_logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        },
        {
          name: "Skill Nation",
          src: "https://skillnation.ai/wp-content/uploads/2023/08/SN_logo-17-1024x415.png",
        },
        {
          name: "Mintree",
          src: "https://mintree.in/cdn/shop/files/Mintree_Logo_3c7e9336-d594-41ef-abbd-610791bfb90b.png?v=1706126721&width=160",
        },
        {
          name: "JustDial",
          src: "https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg",
        },
        {
          name: "Physics Wallah",
          src: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/f10eb934-422b-448f-aa2c-157078acb032.webp",
        },
        {
          name: "Spinemat",
          src: "https://spinemat.com/cdn/shop/files/50976577-0829-44c9-8f61-66aa4d5482f7_72fb27ce-9be2-4e54-ae2f-8a863a773ef1.png?v=1772009162&width=550",
        },
        {
          name: "Client brand",
          src: "https://tiimg.tistatic.com/images/l/1/logo_163430.jpg",
        },
        {
          name: "CuriousJr",
          src: "https://static.pw.live/production-curiousjr-fundoo/static/images/landing-page/cjr-black-logo.webp",
        },
      ],
    ]);
  },
  45678,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(71645),
      a = e.i(22016);
    let i = (0, e.i(75254).default)("log-in", [
      ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
      ["path", { d: "M15 12H3", key: "6jk70r" }],
      [
        "path",
        { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" },
      ],
    ]);
    function l(e) {
      let n,
        l,
        s = (0, r.c)(3),
        { className: o } = e,
        c = `inline-flex items-center justify-center p-2 rounded-full bg-background-secondary border border-border hover:bg-background-tertiary transition-all duration-200 ${
          void 0 === o ? "" : o
        }`;
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)(i, { className: "w-5 h-5 text-text-muted" })),
            (s[0] = n))
          : (n = s[0]),
        s[1] !== c
          ? ((l = (0, t.jsx)(a.default, {
              href: "/login",
              "aria-label": "Client login",
              title: "Client login",
              className: c,
              children: n,
            })),
            (s[1] = c),
            (s[2] = l))
          : (l = s[2]),
        l
      );
    }
    var s = e.i(92161),
      o = e.i(37727),
      c = e.i(33528);
    let d = [
      { name: "Portfolio", href: "#what-we-do" },
      
      { name: "Timeline", href: "#timeline" },
    ];
    function u() {
      let e,
        i,
        u,
        f,
        p,
        x,
        h,
        g,
        b,
        y = (0, r.c)(16),
        [v, j] = (0, n.useState)(!1);
      return (
        y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(a.default, {
              href: "/",
              className: "flex items-center",
              children: (0, t.jsx)("img", {
                src: "/logo.png",
                alt: "GoAds Live",
                className: "h-9 md:h-10 w-auto object-contain translate-y-[3px]",
              }),
            })),
            (y[0] = e))
          : (e = y[0]),
        y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, t.jsx)("div", {
              className: "hidden md:flex items-center space-x-8",
              children: d.map(m),
            })),
            (y[1] = i))
          : (i = y[1]),
        y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)("span", {
              className: "hidden sm:inline-flex",
              children: (0, t.jsx)(l, {}),
            })),
            (f = (0, t.jsx)("a", {
              href: c.BOOK_A_CALL_URL,
              onClick: function(ev) { ev.preventDefault(); if (window.openContactModal) window.openContactModal(); },
              "data-open-contact": "true",
              className:
                "inline-flex h-[32.8px] items-center justify-center rounded-[50px] bg-[#457aff] px-[18px] text-[11.2px] font-bold leading-[16.8px] tracking-[0.784px] text-white transition-opacity duration-200 hover:opacity-90 sm:h-auto sm:px-5 sm:py-2 sm:text-sm sm:tracking-normal",
              children: "BOOK A CALL",
            })),
            (y[2] = u),
            (y[3] = f))
          : ((u = y[2]), (f = y[3])),
        y[4] !== v ? ((p = () => j(!v)), (y[4] = v), (y[5] = p)) : (p = y[5]),
        y[6] !== v
          ? ((x = v
              ? (0, t.jsx)(o.X, { className: "w-6 h-6" })
              : (0, t.jsx)(s.Menu, { className: "w-6 h-6" })),
            (y[6] = v),
            (y[7] = x))
          : (x = y[7]),
        y[8] !== p || y[9] !== x
          ? ((h = (0, t.jsxs)("div", {
              className: "flex items-center justify-between h-16",
              children: [
                e,
                i,
                (0, t.jsxs)("div", {
                  className: "flex items-center space-x-2 sm:space-x-4",
                  children: [
                    u,
                    f,
                    (0, t.jsx)("button", {
                      onClick: p,
                      className:
                        "md:hidden p-2 rounded-lg text-foreground hover:bg-background-secondary transition-colors",
                      "aria-label": "Toggle menu",
                      children: x,
                    }),
                  ],
                }),
              ],
            })),
            (y[8] = p),
            (y[9] = x),
            (y[10] = h))
          : (h = y[10]),
        y[11] !== v
          ? ((g =
              v &&
              (0, t.jsx)("div", {
                className: "md:hidden py-4 border-t border-border",
                children: (0, t.jsxs)("div", {
                  className: "flex flex-col space-y-4",
                  children: [
                    d.map((e) =>
                      (0, t.jsx)(
                        a.default,
                        {
                          href: e.href,
                          onClick: () => j(!1),
                          className:
                            "text-text-secondary hover:text-foreground transition-colors duration-200 text-sm font-medium px-2 py-1",
                          children: e.name,
                        },
                        e.name
                      )
                    ),
                    (0, t.jsx)(a.default, {
                      href: "/login",
                      onClick: () => j(!1),
                      className:
                        "sm:hidden text-text-secondary hover:text-foreground transition-colors duration-200 text-sm font-medium px-2 py-1",
                      children: "Client Login",
                    }),
                  ],
                }),
              })),
            (y[11] = v),
            (y[12] = g))
          : (g = y[12]),
        y[13] !== h || y[14] !== g
          ? ((b = (0, t.jsx)("nav", {
              className:
                "absolute top-0 left-0 right-0 z-50 bg-transparent",
              children: (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [h, g],
              }),
            })),
            (y[13] = h),
            (y[14] = g),
            (y[15] = b))
          : (b = y[15]),
        b
      );
    }
    function m(e) {
      return (0, t.jsx)(
        a.default,
        {
          href: e.href,
          className:
            "text-text-secondary hover:text-foreground transition-colors duration-200 text-sm font-medium",
          children: e.name,
        },
        e.name
      );
    }
    e.s(["default", () => u], 45678);
  },
  93945,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(33528);
    function a(e) {
      let a,
        i = (0, r.c)(3),
        { className: l, voiceId: s } = e,
        o = `flex h-[49px] w-[257px] items-center justify-center rounded-[14px] bg-[#457aff] text-[14.08px] font-bold leading-[21.12px] tracking-[1.1264px] text-white transition-transform duration-200 hover:scale-[1.015] md:h-[54px] md:w-[300px] md:text-[15px] ${
          void 0 === l ? "" : l
        }`;
      return (
        i[0] !== o || i[1] !== s
          ? ((a = (0, t.jsx)("a", {
              href: n.BOOK_A_CALL_URL,
              onClick: function(ev) { ev.preventDefault(); if (window.openContactModal) window.openContactModal(); },
              "data-open-contact": "true",
              "data-voice-id": s,
              className: o,
              children: e.children || (s === "portfolio-cta" ? "Create Your Next UGC Video" : (s === "home-cta-button" ? "Discuss Your UGC Project" : "Book a Free UGC Call")),
            })),
            (i[0] = o),
            (i[1] = s),
            (i[2] = a))
          : (a = i[2]),
        a
      );
    }
    e.s(["default", () => a]);
  },
  77258,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(57688),
      a = e.i(22998),
      i = e.i(46897),
      l = e.i(78621);
    function s() {
      let e,
        n,
        a,
        i,
        s,
        o,
        c,
        d,
        u,
        m,
        f = (0, r.c)(10);
      return (
        f[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = {
              background: "linear-gradient(180deg, #457aff 0%, #2346c7 100%)",
            }),
            (f[0] = e))
          : (e = f[0]),
        f[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)("p", {
              className:
                "text-white text-lg sm:text-lg lg:text-2xl font-bold tracking-tight",
              children: (0, t.jsx)("span", {
                className: "border-b border-white pb-0.5",
                children: "Watch How",
              }),
            })),
            (f[1] = n))
          : (n = f[1]),
        f[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)("strong", {
              className: "font-extrabold",
              children: "Turn",
            })),
            (i = (0, t.jsx)("br", {})),
            (f[2] = a),
            (f[3] = i))
          : ((a = f[2]), (i = f[3])),
        f[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)("br", {})), (f[4] = s))
          : (s = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)("br", {})), (f[5] = o))
          : (o = f[5]),
        f[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, t.jsx)("br", {})), (f[6] = c))
          : (c = f[6]),
        f[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("br", {})), (f[7] = d))
          : (d = f[7]),
        f[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsx)("div", {
              className:
                "w-1/2 p-5 sm:p-7 lg:p-10 flex flex-col justify-center",
              style: e,
              children: (0, t.jsxs)("div", {
                className:
                  "max-w-[13rem] sm:max-w-[16rem] lg:max-w-[20rem] space-y-3 sm:space-y-5",
                children: [
                  n,
                  (0, t.jsx)("p", {
                    className:
                      "text-white text-lg sm:text-2xl lg:text-[2.15rem] font-medium leading-[1.1] tracking-tight",
                    children: "We Turn Product Stories Into Scroll-Stopping UGC.",
                  }),
                ],
              }),
            })),
            (f[8] = u))
          : (u = f[8]),
        f[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)("div", {
              className: "rounded-2xl overflow-hidden card-shadow",
              children: (0, t.jsxs)("div", {
                className: "flex flex-row",
                children: [
                  u,
                  (0, t.jsx)("div", {
                    className: "w-1/2",
                    style: {
                      background:
                        "linear-gradient(180deg, #457aff 0%, #2346c7 100%)",
                    },
                    children: (0, t.jsx)(l.default, {
                      hlsUrl:
                        "https://vz-5ad9b308-4a4.b-cdn.net/04cb2c94-739c-4d09-8e24-b489708b15c8/playlist.m3u8",
                      poster:
                        "https://vz-5ad9b308-4a4.b-cdn.net/04cb2c94-739c-4d09-8e24-b489708b15c8/thumbnail_0dfc6984.jpg",
                    }),
                  }),
                ],
              }),
            })),
            (f[9] = m))
          : (m = f[9]),
        m
      );
    }
    var o = e.i(93945),
      c = e.i(60979);
    function d(e) {
      let n,
        i,
        l = (0, r.c)(3),
        { className: s } = e,
        o = void 0 === s ? "" : s;
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)(a.default, {
              speed: 38,
              gradient: !1,
              autoFill: !0,
              pauseOnHover: !0,
              children: c.BRAND_LOGOS.map(u),
            })),
            (l[0] = n))
          : (n = l[0]),
        l[1] !== o
          ? ((i = (0, t.jsx)("div", { className: o, children: n })),
            (l[1] = o),
            (l[2] = i))
          : (i = l[2]),
        i
      );
    }
    function u(e) {
      return (0, t.jsx)(
        "span",
        {
          className:
            "mr-[12px] flex h-[39px] shrink-0 items-center rounded-[8px] border-[0.615px] border-black/[0.07] bg-[#f8f7ff] px-[14px] md:mr-5 md:h-[52px] md:px-5",
          children: (0, t.jsx)(n.default, {
            src: e.src,
            alt: e.name,
            width: 140,
            height: 40,
            unoptimized: !0,
            loader: m,
            className:
              "h-[20px] w-auto max-w-[90px] object-contain opacity-70 md:h-7 md:max-w-[130px]",
          }),
        },
        e.src
      );
    }
    function m(e) {
      let { src: t } = e;
      return t;
    }
    function f() {
      let e,
        n = (0, r.c)(1);
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("p", {
              className:
                "m-0 flex flex-wrap items-center justify-center gap-[11px] font-sf text-[14px] leading-[33px] text-[#b4b4b4] md:justify-start md:[font-family:inherit] md:text-[15px]",
              children: "UGC VIDEO PRODUCTION FOR GROWING BRANDS",
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    function p(e) {
      return (0, t.jsxs)(
        "span",
        {
          className: "inline-flex items-center gap-px",
          children: [
            (0, t.jsx)(i.MapPin, {
              "aria-hidden": !0,
              className: "size-[11px]",
              strokeWidth: 2,
            }),
            e,
          ],
        },
        e
      );
    }
    function x() {
      let e,
        n,
        a,
        i,
        l,
        c,
        u,
        m = (0, r.c)(7);
      return (
        m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(f, {})), (m[0] = e))
          : (e = m[0]),
        m[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsxs)("h1", {
              className:
                "mt-[24px] max-w-[294px] pl-[32px] font-sf text-[32px] font-semibold leading-[34px] tracking-[-1.456px] text-[#393939] box-content md:mt-3 md:max-w-[17ch] md:pl-0 md:[font-family:inherit] md:text-[44px] md:font-extrabold md:leading-[1.08] md:tracking-[-1.6px] lg:text-[50px]",
              children: "Your Next Winning UGC Video Starts Here.",
            })),
            (m[1] = n))
          : (n = m[1]),
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsxs)("p", {
              className:
                "mt-[19px] max-w-[276px] pl-[39px] font-sf text-[16px] font-medium leading-[25.08px] text-[#4b4b4b] box-content md:mt-5 md:max-w-[46ch] md:pl-0 md:[font-family:inherit] md:text-[17px] md:font-normal md:leading-[28px]",
              children: "Creator-led videos built around your product, your customers, and the reasons people buy. Create authentic, scroll-stopping content designed to build trust and inspire action.",
            })),
            (m[2] = a))
          : (a = m[2]),
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, t.jsxs)("p", {
              className:
                "mt-[52px] text-center text-[12px] leading-[18px] text-[#1e1e1e] md:mt-8 md:text-left md:text-[13px]",
              children: [
                "Trusted by ",
                (0, t.jsx)("strong", {
                  className: "font-bold text-[#457aff]",
                  children: "75+ brands",
                }),
                " across India",
              ],
            })),
            (l = (0, t.jsx)(d, { className: "mt-[17px] md:hidden" })),
            (m[3] = i),
            (m[4] = l))
          : ((i = m[3]), (l = m[4])),
        m[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, t.jsxs)("div", {
              children: [
                e,
                n,
                a,
                i,
                l,
                (0, t.jsx)("div", {
                  className:
                    "mt-[39px] flex justify-center md:mt-7 md:justify-start",
                  children: (0, t.jsx)(o.default, {}),
                }),
              ],
            })),
            (m[5] = c))
          : (c = m[5]),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, t.jsxs)("section", {
              "data-voice-id": "home-hero",
              className:
                "relative overflow-hidden bg-white pt-[120px] pb-[33px] md:bg-[#fafafa] md:pt-[184px] md:pb-20",
              children: [
                (0, t.jsx)("div", {
                  className: "mx-auto w-full max-w-[1180px] md:px-10",
                  children: (0, t.jsxs)("div", {
                    className:
                      "md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16",
                    children: [
                      c,
                      (0, t.jsx)("div", {
                        className: "hidden md:block",
                        "data-voice-id": "home-watch-how",
                        children: (0, t.jsx)(s, {}),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)(d, { className: "hidden md:mt-16 md:block" }),
              ],
            })),
            (m[6] = u))
          : (u = m[6]),
        u
      );
    }
    e.s(["default", () => x], 77258);
  },
  46764,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(57688),
      a = e.i(72520),
      i = e.i(6485),
      l = e.i(93945);
    let s = [
        {
          parts: [
            { text: "2500+", strong: !0 },
            { text: " Ads Produced, " },
            { text: "150Cr+", strong: !0 },
            { text: " Revenue Generated 💵" },
          ],
        },
        {
          parts: [
            { text: "30 Person", strong: !0 },
            { text: " Creative Team" },
          ],
        },
        {
          parts: [
            { text: "World Class " },
            { text: "Models & Influencers", strong: !0 },
          ],
          extra: "avatars",
        },
        {
          parts: [
            { text: "Shot On " },
            { text: "Netflix Approved Cameras", strong: !0 },
          ],
          extra: "netflix",
        },
      ],
      o = [
        "/figma/hero/avatar-2.png",
        "/figma/hero/avatar-1.png",
        "/figma/hero/mark-1.png",
      ];
    function c() {
      let e,
        n = (0, r.c)(1);
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("span", {
              className: "ml-[10px] flex shrink-0 items-center",
              children: o.map(d),
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    function d(e, r) {
      return (0, t.jsx)(
        "span",
        {
          className:
            "relative block h-[25px] w-[23px] overflow-hidden rounded-full border-[0.25px] border-black",
          style: { marginLeft: 0 === r ? 0 : -2 },
          children: (0, t.jsx)(n.default, {
            src: e,
            alt: "",
            fill: !0,
            sizes: "25px",
            className: "object-cover",
          }),
        },
        e
      );
    }
    function u() {
      let e,
        n = (0, r.c)(1);
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("ul", {
              className:
                "m-0 mt-[13px] flex list-none flex-col gap-[3px] p-0 md:mt-6 md:flex-row md:flex-wrap md:gap-x-10 md:gap-y-3",
              children: s.map(m),
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    function m(e, r) {
      return (0, t.jsxs)(
        "li",
        {
          className: `flex items-center gap-[7px] ${
            r === s.length - 1 ? "mt-[7px] md:mt-0" : ""
          }`,
          children: [
            (0, t.jsx)(n.default, {
              src: "/figma/home/check.svg",
              alt: "",
              width: 16,
              height: 16,
              className: "size-4 shrink-0",
            }),
            (0, t.jsx)("span", {
              className:
                "text-[12.48px] font-bold leading-[19.968px] text-black/50",
              children: e.parts.map(f),
            }),
            "avatars" === e.extra && (0, t.jsx)(c, {}),
            "netflix" === e.extra &&
              (0, t.jsx)(n.default, {
                src: "/figma/home/netflix.png",
                alt: "Netflix",
                width: 58,
                height: 13,
                className:
                  "ml-[6px] h-[13px] w-[58px] shrink-0 rounded-[3px] border-[0.1px] border-black object-cover",
              }),
          ],
        },
        r
      );
    }
    function f(e, r) {
      return (0, t.jsx)(
        "span",
        { className: e.strong ? "text-black/70" : void 0, children: e.text },
        r
      );
    }
    let p = "https://vz-5ad9b308-4a4.b-cdn.net",
      x = [
        {
          title: "GoAdsLive Work Showcase",
          poster: "/videos/ecr-138-thumbnail.jpg",
          hlsUrl: "/videos/goadslive-work-showcase.mp4",
        },
        {
          title: "GOADS 1",
          poster: "/videos/5-1-thumbnail.jpg",
          hlsUrl: "/videos/goads1.mp4",
        },
        {
          title: "Lasya Care",
          poster: "/videos/vid-wa0001-thumbnail.jpg",
          hlsUrl: "/videos/lasya-care-nibedita-1.mp4",
        },
        {
          title: "2",
          poster: "/videos/2-thumbnail.jpg",
          hlsUrl: "/videos/2.mp4",
        },
        {
          title: "MOBISELL 2",
          poster: "/videos/mobisell-2-thumbnail.jpg",
          hlsUrl: "/videos/mobisell-2.mp4",
        },
        {
          title: "5",
          poster: "/videos/5-thumbnail.jpg",
          hlsUrl: "/videos/5.mp4",
        },
        {
          title: "6",
          poster: "/videos/6-thumbnail.jpg",
          hlsUrl: "/videos/6.mp4",
        },
        {
          title: "Fictales",
          poster: `${p}/8ee9b044-19fc-4f95-9587-b630f77a4307/thumbnail.jpg`,
          hlsUrl: `${p}/8ee9b044-19fc-4f95-9587-b630f77a4307/playlist.m3u8`,
        },
      ];
    function h(e) {
      let a,
        l,
        s,
        o,
        c,
        d,
        u,
        m,
        f = (0, r.c)(25),
        { card: p, className: x } = e;
      f[0] !== p.hlsUrl
        ? ((a = { src: p.hlsUrl }), (f[0] = p.hlsUrl), (f[1] = a))
        : (a = f[1]);
      let {
          containerRef: h,
          videoRef: g,
          isHovering: b,
          isReady: y,
          shouldRenderVideo: v,
          handleMouseEnter: j,
          handleMouseLeave: _,
        } = (0, i.useHlsHoverVideo)(a),
        w = b && y,
        N = `group relative aspect-[175/270] w-full overflow-hidden rounded-[16px] bg-[#1a1a1a] ${
          void 0 === x ? "" : x
        }`,
        k = `absolute inset-0 size-full object-cover transition-opacity duration-300 ${
          w ? "opacity-0" : "opacity-100"
        }`;
      f[2] !== p.poster || f[3] !== p.title || f[4] !== k
        ? ((l = (0, t.jsx)("img", {
            src: p.poster,
            alt: p.title,
            loading: "lazy",
            className: k,
          })),
          (f[2] = p.poster),
          (f[3] = p.title),
          (f[4] = k),
          (f[5] = l))
        : (l = f[5]),
        f[6] !== v || f[7] !== w || f[8] !== g
          ? ((s =
              v &&
              (0, t.jsx)("video", {
                ref: g,
                muted: !0,
                playsInline: !0,
                loop: !0,
                preload: "none",
                className: `absolute inset-0 size-full object-cover transition-opacity duration-300 ${
                  w ? "opacity-100" : "opacity-0"
                }`,
              })),
            (f[6] = v),
            (f[7] = w),
            (f[8] = g),
            (f[9] = s))
          : (s = f[9]);
      let S = `flex size-[44px] items-center justify-center rounded-full border border-white/30 bg-white/[0.18] shadow-[0px_4px_14px_0px_rgba(0,0,0,0.5)] transition-opacity duration-300 ${
        w ? "opacity-0" : "opacity-100"
      }`;
      return (
        f[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)(n.default, {
              src: "/figma/hero/play.svg",
              alt: "",
              width: 17,
              height: 17,
              className: "size-[17px]",
            })),
            (f[10] = o))
          : (o = f[10]),
        f[11] !== S
          ? ((c = (0, t.jsx)("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: (0, t.jsx)("span", { className: S, children: o }),
            })),
            (f[11] = S),
            (f[12] = c))
          : (c = f[12]),
        f[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, t.jsx)("div", {
              className:
                "absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-black/85 to-transparent",
            })),
            (f[13] = d))
          : (d = f[13]),
        f[14] !== p.title
          ? ((u = (0, t.jsx)("p", {
              className:
                "absolute left-2 bottom-2 m-0 max-w-[134px] truncate text-[10.5px] font-bold leading-[14px] text-white",
              children: p.title,
            })),
            (f[14] = p.title),
            (f[15] = u))
          : (u = f[15]),
        f[16] !== h ||
        f[17] !== j ||
        f[18] !== _ ||
        f[19] !== u ||
        f[20] !== N ||
        f[21] !== l ||
        f[22] !== s ||
        f[23] !== c
          ? ((m = (0, t.jsxs)("article", {
              ref: h,
              onMouseEnter: j,
              onMouseLeave: _,
              className: N,
              children: [l, s, c, d, u],
            })),
            (f[16] = h),
            (f[17] = j),
            (f[18] = _),
            (f[19] = u),
            (f[20] = N),
            (f[21] = l),
            (f[22] = s),
            (f[23] = c),
            (f[24] = m))
          : (m = f[24]),
        m
      );
    }
    function g() {
      let e,
        n,
        i,
        s,
        o,
        c = (0, r.c)(5);
      return (
        c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsxs)("div", {
              className: "mb-3",
              children: [
                (0, t.jsx)("h2", {
                  className:
                    "m-0 pl-[6px] font-sf text-[24px] font-semibold leading-[35px] text-black md:pl-0 md:[font-family:inherit] md:text-[40px] md:font-extrabold md:leading-[1.15] md:tracking-[-1.2px] md:text-[#0d0a14]",
                  children: "UGC Videos That Bring Products to Life",
                }),
                (0, t.jsx)("p", {
                  className: "mt-2 pl-[6px] text-sm text-[#6b7280] md:pl-0 md:text-base",
                  children: "Explore authentic product demonstrations, creator testimonials, unboxing experiences, lifestyle videos, and relatable brand stories.",
                }),
              ],
            })),
            (c[0] = e))
          : (e = c[0]),
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsx)("div", {
              className: "pl-[3px] md:pl-0",
              children: (0, t.jsx)(u, {}),
            })),
            (c[1] = n))
          : (n = c[1]),
        c[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, t.jsx)("div", {
              className:
                "mt-[40px] grid grid-cols-2 gap-x-[14px] gap-y-[16px] md:mt-12 md:grid-cols-4 md:gap-5",
              children: x.map(b),
            })),
            (c[2] = i))
          : (i = c[2]),
        c[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)("div", {
              className: "mt-[46px] flex justify-center md:mt-12",
              children: (0, t.jsxs)("a", {
                href: "/portfolio",
                className:
                  "inline-flex items-center gap-[6px] rounded-[12px] px-[18px] pt-[10px] pb-[11px] text-[12.48px] font-bold leading-[18.72px] text-[#457aff] transition-colors hover:bg-[#457aff]/[0.06] md:text-[14px]",
                children: [
                  "View Entire Portfolio",
                  (0, t.jsx)(a.ArrowRight, {
                    "aria-hidden": !0,
                    className: "size-[14px]",
                    strokeWidth: 2,
                  }),
                ],
              }),
            })),
            (c[3] = s))
          : (s = c[3]),
        c[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)("section", {
              id: "what-we-do",
              "data-voice-id": "home-what-we-do",
              className:
                "bg-white pt-[33px] pb-[34px] md:bg-[#fafafa] md:py-24",
              children: (0, t.jsxs)("div", {
                className: "mx-auto w-full max-w-[1180px] px-[19px] md:px-10",
                children: [
                  e,
                  n,
                  i,
                  s,
                  (0, t.jsx)("div", {
                    className: "mt-[23px] flex justify-center md:mt-8",
                    children: (0, t.jsx)(l.default, { voiceId: "portfolio-cta" }),
                  }),
                ],
              }),
            })),
            (c[4] = o))
          : (o = c[4]),
        o
      );
    }
    function b(e, r) {
      return (0, t.jsx)(
        h,
        { card: e, className: r >= 6 ? "hidden md:block" : "" },
        e.hlsUrl
      );
    }
    e.s(["default", () => g]);
  },
  70410,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(71645),
      a = e.i(93945);
    let i = [
      {
        id: 1,
        label: "Production Reel — 2025",
        src: "/videos/production-reel.mp4",
      },
      {
        id: 2,
        label: "Shoot Day Bloopers",
        src: "https://res.cloudinary.com/dvxqb1wge/video/upload/v1773716576/IMG_3556_u4rwtg.mp4",
      },
      {
        id: 3,
        label: "Studio Tour",
        src: "https://res.cloudinary.com/dvxqb1wge/video/upload/v1773657422/2918C6FE-635D-42A8-8AA4-A6571CA0FF0B_dnj7bo.mp4",
      },
      {
        id: 4,
        label: "Client Reactions",
        src: "https://res.cloudinary.com/dvxqb1wge/video/upload/v1773716588/IMG_3300_f5fdx6.mp4",
      },
      {
        id: 5,
        label: "Team Moments",
        src: "https://res.cloudinary.com/dvxqb1wge/video/upload/v1773716592/IMG_8981_xrtm2x.mp4",
      },
    ];
    function l() {
      let e,
        l,
        d,
        u,
        m,
        f,
        p,
        x,
        h,
        g,
        b,
        y,
        v,
        j,
        _,
        w,
        N,
        k,
        S,
        E,
        C,
        P,
        O,
        M,
        R,
        A,
        L = (0, r.c)(45),
        [I, T] = (0, n.useState)(0),
        [$, z] = (0, n.useState)(!0);
      L[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = Array(i.length).fill(!0)), (L[0] = e))
        : (e = L[0]);
      let [U, B] = (0, n.useState)(e);
      L[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (L[1] = l))
        : (l = L[1]);
      let F = (0, n.useRef)(l),
        D = (0, n.useRef)(null),
        q = (0, n.useRef)(0);
      L[2] !== I
        ? ((d = () => {
            q.current = I;
          }),
          (u = [I]),
          (L[2] = I),
          (L[3] = d),
          (L[4] = u))
        : ((d = L[3]), (u = L[4])),
        (0, n.useEffect)(d, u),
        L[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = () => {
              let e = null,
                t = (t, r) => {
                  let n = "number" == typeof t && Number.isFinite(t),
                    a = n
                      ? Math.min(i.length - 1, Math.max(0, Math.round(t)))
                      : q.current;
                  n &&
                    (T(a),
                    z(!1),
                    e && clearTimeout(e),
                    (e = setTimeout(() => z(!0), 8e3))),
                    !0 === r
                      ? (B((e) => e.map((e, t) => t !== a)), z(!1))
                      : !1 === r && (B(Array(i.length).fill(!0)), z(!0));
                },
                r = (e) => {
                  let { index: r, sound: n } = e.detail ?? {};
                  t(r, n);
                },
                n = window;
              return (
                n.__yuviBts &&
                  (t(n.__yuviBts.index, n.__yuviBts.sound), delete n.__yuviBts),
                window.addEventListener("yuvi:bts", r),
                () => {
                  window.removeEventListener("yuvi:bts", r),
                    e && clearTimeout(e);
                }
              );
            }),
            (f = []),
            (L[5] = m),
            (L[6] = f))
          : ((m = L[5]), (f = L[6])),
        (0, n.useEffect)(m, f),
        L[7] !== I || L[8] !== $ || L[9] !== U
          ? ((p = () => {
              if (!$ || !U[I]) return;
              let e = setInterval(() => {
                T(c);
              }, 6e3);
              return () => clearInterval(e);
            }),
            (x = [$, U, I]),
            (L[7] = I),
            (L[8] = $),
            (L[9] = U),
            (L[10] = p),
            (L[11] = x))
          : ((p = L[10]), (x = L[11])),
        (0, n.useEffect)(p, x),
        L[12] !== I
          ? ((h = () => {
              F.current.forEach((e, t) => {
                e && (t === I ? e.play() : (e.pause(), (e.currentTime = 0)));
              });
            }),
            (g = [I]),
            (L[12] = I),
            (L[13] = h),
            (L[14] = g))
          : ((h = L[13]), (g = L[14])),
        (0, n.useEffect)(h, g);
      let K = (0, n.useRef)(null),
        W = (0, n.useRef)(null);
      L[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e) => {
            if (e.target.closest("button")) {
              (K.current = null), (W.current = null);
              return;
            }
            (K.current = e.touches[0].clientX),
              (W.current = e.touches[0].clientX),
              z(!1);
          }),
          (L[15] = b))
        : (b = L[15]);
      let H = b;
      L[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e) => {
            null !== K.current && (W.current = e.touches[0].clientX);
          }),
          (L[16] = y))
        : (y = L[16]);
      let G = y;
      L[17] !== I || L[18] !== U
        ? ((v = () => {
            if (null === K.current || null === W.current) return;
            let e = K.current - W.current;
            Math.abs(e) > 50 && (e > 0 ? T(o) : T(s)),
              (K.current = null),
              (W.current = null),
              setTimeout(() => {
                U[I] && z(!0);
              }, 5e3);
          }),
          (L[17] = I),
          (L[18] = U),
          (L[19] = v))
        : (v = L[19]);
      let V = v;
      L[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (e) => {
            B((t) => {
              let r = t.map((t, r) => r !== e || !t);
              return t[e] ? z(!1) : z(!0), r;
            });
          }),
          (L[20] = j))
        : (j = L[20]);
      let X = j;
      L[21] !== I || L[22] !== U
        ? ((_ = () => {
            F.current.forEach((e, t) => {
              e && ((e.muted = U[t]), t !== I || U[t] || e.play());
            });
          }),
          (w = [U, I]),
          (L[21] = I),
          (L[22] = U),
          (L[23] = _),
          (L[24] = w))
        : ((_ = L[23]), (w = L[24])),
        (0, n.useEffect)(_, w),
        L[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, t.jsx)("div", {
              className:
                "text-[10.4px] font-bold leading-[15.6px] tracking-[1.248px] text-[#457aff] uppercase mb-[10px] lg:text-xs lg:mb-3",
              children: "BTS & Bloopers",
            })),
            (L[25] = N))
          : (N = L[25]),
        L[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, t.jsxs)("div", {
              className: "mb-[60px] lg:mb-8",
              children: [
                N,
                (0, t.jsx)("h2", {
                  className:
                    "text-[30.4px] font-extrabold leading-[36.48px] tracking-[-0.912px] text-[#0d0a14] lg:text-4xl lg:leading-tight lg:tracking-normal",
                  children: "The Creative Team Behind Every UGC Story",
                }),
                (0, t.jsx)("p", {
                  className: "mt-2 text-sm text-[#6b7280] max-w-xl lg:text-base",
                  children: "From the first concept to the final edit, we shape your product story into authentic, engaging videos that feel relatable to your audience.",
                }),
              ],
            })),
            (L[26] = k))
          : (k = L[26]);
      let Y = `translateX(-${100 * I}%)`;
      return (
        L[27] !== Y
          ? ((S = { transform: Y }), (L[27] = Y), (L[28] = S))
          : (S = L[28]),
        L[29] !== U
          ? ((E = i.map((e, r) =>
              (0, t.jsx)(
                "div",
                {
                  className:
                    "w-full shrink-0 px-[24px] sm:px-6 lg:px-2 lg:first:pl-0 lg:last:pr-0",
                  children: (0, t.jsxs)("div", {
                    className:
                      "relative aspect-[354/609] w-full max-w-[354px] mx-auto rounded-[20px] overflow-hidden border-[0.615px] border-black/[0.07] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.1)] bg-linear-to-br from-gray-700 to-gray-900 group lg:max-w-[320px]",
                    children: [
                      (0, t.jsx)("video", {
                        ref: (e) => {
                          F.current[r] = e;
                        },
                        src: e.src,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        autoPlay: !0,
                        muted: U[r],
                        loop: !0,
                        controls: !1,
                        onClick: () => X(r),
                        style: { cursor: "pointer" },
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        className: "pointer-events-none absolute inset-0",
                        style: {
                          backgroundImage:
                            "linear-gradient(120deg, rgba(69,122,255,0.15) 0%, rgba(35,70,199,0.2) 100%)",
                        },
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute top-[27px] left-[18px] right-[18px] z-10",
                        children: (0, t.jsx)("span", {
                          className:
                            "inline-block rounded-[8px] border-[0.615px] border-black/[0.08] bg-white/90 px-[12px] py-[10px] text-[11.2px] font-semibold leading-[16.8px] text-[#0d0a14]",
                          children: e.label,
                        }),
                      }),
                      (0, t.jsxs)("button", {
                        className:
                          "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 text-white rounded-full px-4 py-2 flex items-center gap-2 text-xs font-semibold shadow-lg hover:bg-black/90 transition-colors",
                        onClick: (e) => {
                          e.stopPropagation(), X(r);
                        },
                        "aria-label": U[r] ? "Unmute video" : "Mute video",
                        children: [
                          U[r]
                            ? (0, t.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0, t.jsx)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M9 9v6h4l5 5V4l-5 5H9z",
                                }),
                              })
                            : (0, t.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: [
                                  (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 9v6h4l5 5V4l-5 5H9z",
                                  }),
                                  (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 19L5 5",
                                  }),
                                ],
                              }),
                          U[r] ? "Unmute" : "Mute",
                        ],
                      }),
                    ],
                  }),
                },
                e.id
              )
            )),
            (L[29] = U),
            (L[30] = E))
          : (E = L[30]),
        L[31] !== S || L[32] !== E
          ? ((C = (0, t.jsx)("div", {
              className: "flex transition-transform duration-500 ease-out",
              style: S,
              children: E,
            })),
            (L[31] = S),
            (L[32] = E),
            (L[33] = C))
          : (C = L[33]),
        L[34] !== I
          ? ((P = i.map((e, r) =>
              (0, t.jsx)(
                "button",
                {
                  onClick: () => {
                    T(r), z(!1), setTimeout(() => z(!0), 5e3);
                  },
                  className: `w-2 h-2 rounded-full transition-all duration-300 ${
                    r === I
                      ? "bg-[#457aff] w-6"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  }`,
                  "aria-label": `Go to slide ${r + 1}`,
                },
                r
              )
            )),
            (L[34] = I),
            (L[35] = P))
          : (P = L[35]),
        L[36] !== P
          ? ((O = (0, t.jsx)("div", {
              className: "flex justify-center gap-2 mt-6",
              children: P,
            })),
            (L[36] = P),
            (L[37] = O))
          : (O = L[37]),
        L[38] !== V || L[39] !== C || L[40] !== O
          ? ((M = (0, t.jsxs)("div", {
              ref: D,
              className: "relative -mx-[24px] overflow-hidden sm:-mx-6 lg:mx-0",
              onTouchStart: H,
              onTouchMove: G,
              onTouchEnd: V,
              children: [C, O],
            })),
            (L[38] = V),
            (L[39] = C),
            (L[40] = O),
            (L[41] = M))
          : (M = L[41]),
        L[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, t.jsx)("div", {
              id: "book-a-call",
              "data-voice-id": "home-cta",
              className: "mt-[41px] flex justify-center lg:mt-12",
              children: (0, t.jsx)(a.default, { voiceId: "home-cta-button" }),
            })),
            (L[42] = R))
          : (R = L[42]),
        L[43] !== M
          ? ((A = (0, t.jsx)("section", {
              id: "behind-the-scenes",
              "data-voice-id": "home-behind-the-scenes",
              className: "bg-white pt-[59px] pb-[66px] lg:py-24",
              children: (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-[24px] sm:px-6 lg:px-8",
                children: [k, M, R],
              }),
            })),
            (L[43] = M),
            (L[44] = A))
          : (A = L[44]),
        A
      );
    }
    function s(e) {
      return (e - 1 + i.length) % i.length;
    }
    function o(e) {
      return (e + 1) % i.length;
    }
    function c(e) {
      return (e + 1) % i.length;
    }
    e.s(["default", () => l]);
  },
  86832,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(71645),
      a = e.i(80555),
      i = e.i(84614),
      l = e.i(33528);
    let s = [
      { icon: a.Factory, label: "Established Manufacturers" },
      { icon: i.User, label: "Tech Founders (GTM Ready)" },
    ];
    function o(e) {
      let n,
        a,
        i,
        s = (0, r.c)(9),
        { href: o, title: c, subtitle: d, className: u } = e,
        m = void 0 === o ? l.BOOK_A_CALL_URL : o,
        f = void 0 === c ? "Book A Call" : c,
        p = void 0 === d ? "" : d,
        x = `block w-full px-2 py-1 rounded-2xl bg-[#457aff] text-center hover:opacity-90 transition-opacity duration-200 ${
          void 0 === u ? "" : u
        }`;
      return (
        s[0] !== f
          ? ((n = (0, t.jsx)("span", {
              className:
                "block text-white font-bold text-md uppercase tracking-wide",
              children: f,
            })),
            (s[0] = f),
            (s[1] = n))
          : (n = s[1]),
        s[2] !== p
          ? ((a = (0, t.jsx)("span", {
              className: "block text-white/80 text-xs mt-1",
              children: p,
            })),
            (s[2] = p),
            (s[3] = a))
          : (a = s[3]),
        s[4] !== m || s[5] !== x || s[6] !== n || s[7] !== a
          ? ((i = (0, t.jsxs)("a", {
              href: m,
              onClick: function(ev) { ev.preventDefault(); if (window.openContactModal) window.openContactModal(); },
              "data-open-contact": "true",
              className: x,
              children: [n, a],
            })),
            (s[4] = m),
            (s[5] = x),
            (s[6] = n),
            (s[7] = a),
            (s[8] = i))
          : (i = s[8]),
        i
      );
    }
    function c(e) {
      let n,
        a,
        i,
        l = (0, r.c)(4),
        { className: o } = e,
        c = `text-center ${void 0 === o ? "" : o}`;
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, t.jsxs)("div", {
              className: "flex items-center gap-4 mb-6",
              children: [
                (0, t.jsx)("div", { className: "flex-1 h-px bg-border" }),
                (0, t.jsx)("p", {
                  className:
                    "text-[14px] font-semibold tracking-wider text-[#457aff] uppercase ",
                  children: "Ideal For",
                }),
                (0, t.jsx)("div", { className: "flex-1 h-px bg-border" }),
              ],
            })),
            (l[0] = n))
          : (n = l[0]),
        l[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)("div", {
              className: "flex justify-center gap-8",
              children: s.map(d),
            })),
            (l[1] = a))
          : (a = l[1]),
        l[2] !== c
          ? ((i = (0, t.jsxs)("div", { className: c, children: [n, a] })),
            (l[2] = c),
            (l[3] = i))
          : (i = l[3]),
        i
      );
    }
    function d(e, r) {
      return (0, t.jsxs)(
        "div",
        {
          className: "flex items-center gap-2 text-[10px] text-text-secondary",
          children: [
            (0, t.jsx)(e.icon, { color: "#457aff", className: "w-4 h-4 " }),
            (0, t.jsx)("span", { children: e.label }),
          ],
        },
        r
      );
    }
    function u(e) {
      let a,
        i,
        s,
        o,
        c,
        d,
        u,
        m = (0, r.c)(14),
        { href: f, title: p, subtitle: x } = e,
        h = void 0 === f ? l.BOOK_A_CALL_URL : f,
        g = void 0 === p ? "Book A Call" : p,
        b = void 0 === x ? "Minimum Engagement Starts At Rs. 1 Lakh" : x,
        [y, v] = (0, n.useState)(!1);
      m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => {
            let e = () => {
              v(window.scrollY > 0);
            };
            return (
              e(),
              window.addEventListener("scroll", e, { passive: !0 }),
              () => window.removeEventListener("scroll", e)
            );
          }),
          (i = []),
          (m[0] = a),
          (m[1] = i))
        : ((a = m[0]), (i = m[1])),
        (0, n.useEffect)(a, i);
      let j = `fixed bottom-[20px] left-0 right-0 z-70 px-4 pb-4 mb-12 bg-transparent transition-all duration-300 ${
        y
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`;
      return (
        m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = {
              backgroundColor: "#457aff",
              filter: "drop-shadow(0px 0px 15px rgba(69,122,255,0.28))",
            }),
            (m[2] = s))
          : (s = m[2]),
        m[3] !== g
          ? ((o = (0, t.jsx)("span", {
              className:
                "text-[14.08px] font-bold uppercase leading-[21.12px] tracking-[1.1264px] text-white",
              children: g,
            })),
            (m[3] = g),
            (m[4] = o))
          : (o = m[4]),
        m[5] !== b
          ? ((c =
              b &&
              (0, t.jsx)("span", {
                className:
                  "text-[12px] font-normal leading-[17.28px] text-white/80",
                children: b,
              })),
            (m[5] = b),
            (m[6] = c))
          : (c = m[6]),
        m[7] !== h || m[8] !== o || m[9] !== c
          ? ((d = (0, t.jsx)("div", {
              className: "max-w-sm mx-auto",
              children: (0, t.jsxs)("a", {
                href: h,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "flex w-full flex-col items-center justify-center rounded-[14px] px-6 py-[7px] text-center transition-transform duration-200 hover:scale-[1.015]",
                style: s,
                children: [o, c],
              }),
            })),
            (m[7] = h),
            (m[8] = o),
            (m[9] = c),
            (m[10] = d))
          : (d = m[10]),
        m[11] !== d || m[12] !== j
          ? ((u = (0, t.jsx)("div", { className: j, children: d })),
            (m[11] = d),
            (m[12] = j),
            (m[13] = u))
          : (u = m[13]),
        u
      );
    }
    function m(e) {
      let n,
        a,
        i,
        s = (0, r.c)(8),
        { ctaHref: d, ctaTitle: u, ctaSubtitle: m, className: f } = e,
        p = void 0 === d ? l.BOOK_A_CALL_URL : d,
        x = void 0 === u ? "Book A Call" : u,
        h = void 0 === m ? "     " : m,
        g = void 0 === f ? "" : f;
      return (
        s[0] !== p || s[1] !== h || s[2] !== x
          ? ((n = (0, t.jsx)(o, { href: p, title: x, subtitle: h })),
            (s[0] = p),
            (s[1] = h),
            (s[2] = x),
            (s[3] = n))
          : (n = s[3]),
        s[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, t.jsx)(c, { className: "mt-2" })), (s[4] = a))
          : (a = s[4]),
        s[5] !== g || s[6] !== n
          ? ((i = (0, t.jsxs)("div", { className: g, children: [n, a] })),
            (s[5] = g),
            (s[6] = n),
            (s[7] = i))
          : (i = s[7]),
        i
      );
    }
    e.s([
      "CTAButton",
      () => o,
      "CTAWithIdealFor",
      () => m,
      "IdealForSection",
      () => c,
      "StickyCTA",
      () => u,
    ]);
  },
]);
