(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  79474,
  (e, t, r) => {
    "use strict";
    var i =
      e.r(
        71645
      ).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    r.c = function (e) {
      return i.H.useMemoCache(e);
    };
  },
  932,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(79474);
  },
  75254,
  (e) => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) =>
        e
          .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
          .join(" ")
          .trim(),
      i = (e) => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
          r ? r.toUpperCase() : t.toLowerCase()
        );
        return t.charAt(0).toUpperCase() + t.slice(1);
      };
    var s = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let a = (0, t.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: i = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: c,
            className: l = "",
            children: o,
            iconNode: d,
            ...h
          },
          u
        ) =>
          (0, t.createElement)(
            "svg",
            {
              ref: u,
              ...s,
              width: i,
              height: i,
              stroke: e,
              strokeWidth: c ? (24 * Number(a)) / Number(i) : a,
              className: r("lucide", l),
              ...(!o &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                  return !1;
                })(h) && { "aria-hidden": "true" }),
              ...h,
            },
            [
              ...d.map(([e, r]) => (0, t.createElement)(e, r)),
              ...(Array.isArray(o) ? o : [o]),
            ]
          )
      ),
      c = (e, s) => {
        let c = (0, t.forwardRef)(({ className: c, ...l }, o) =>
          (0, t.createElement)(a, {
            ref: o,
            iconNode: s,
            className: r(
              `lucide-${i(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              c
            ),
            ...l,
          })
        );
        return (c.displayName = i(e)), c;
      };
    e.s(["default", () => c], 75254);
  },
  18566,
  (e, t, r) => {
    t.exports = e.r(76562);
  },
  37727,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]);
    e.s(["X", () => t], 37727);
  },
  87316,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]);
    e.s(["Calendar", () => t], 87316);
  },
  33528,
  (e) => {
    "use strict";
    e.s(["BOOK_A_CALL_URL", 0, "#contact"]);
  },
  43531,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]);
    e.s(["Check", () => t], 43531);
  },
  87951,
  (e) => {
    "use strict";
    let t = (0, e.i(75254).default)("mic", [
      ["path", { d: "M12 19v3", key: "npa21l" }],
      ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
      [
        "rect",
        { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" },
      ],
    ]);
    e.s(["Mic", () => t], 87951);
  },
]);
