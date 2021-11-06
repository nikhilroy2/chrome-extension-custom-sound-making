!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("gofor")))
    : "function" == typeof define && define.amd
    ? define(["gofor"], t)
    : "object" == typeof exports
    ? (exports.fNotificationSound = t(require("gofor")))
    : (e.fNotificationSound = t(e.Gofor));
})(this, function (e) {
  return (function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, o) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 619))
    );
  })({
    109: function (e, t, n) {
      "use strict";
      function o() {
        for (var e = i(); r.glob[u].has(e); ) e = i();
        return r.glob[u].add(e), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.uid = o);
      var r = n(6),
        i = function () {
          return ("" + Math.random()).slice(-8) + ("" + Date.now()).slice(8);
        },
        u = Symbol["for"]("futile uid");
      r.glob[u] = r.glob[u] || new Set();
    },
    124: function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.tab = void 0);
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(58),
        u = n(13),
        s = n(109),
        a = n(6),
        c = "VdOMGFYWmxYM1JoWWc",
        f = "focus",
        l = (function () {
          function e() {
            if ((o(this, e), !u.env.browser))
              throw new Error(
                "[fUtile][Tab][Constructor] Module should only be used in the browser"
              );
            (this.uid = s.uid()),
              (this.setActiveTab = this.setActiveTab.bind(this)),
              (this.whenActive = new Set()),
              (this.focusHandlers = new Map()),
              this.setActiveTab(),
              this.onFocus(this.setActiveTab);
          }
          return (
            r(e, [
              {
                key: "setActiveTab",
                value: function () {
                  this.isActive ||
                    (i.localStorage.set(c, this.uid),
                    this.whenActive.forEach(function (e) {
                      return e();
                    }));
                },
              },
              {
                key: "onSetActive",
                value: function (e) {
                  "function" == typeof e && this.whenActive.add(e);
                },
              },
              {
                key: "focusSubscribe",
                value: function (e) {
                  if ("function" != typeof e) return null;
                  var t = s.uid();
                  return this.onFocus(e), this.focusHandlers.set(t, e), t;
                },
              },
              {
                key: "focusUnsubscribe",
                value: function (e) {
                  window.removeEventListener(f, this.focusHandlers.get(e));
                },
              },
              {
                key: "onFocus",
                value: function (e) {
                  window.addEventListener(f, e);
                },
              },
              {
                key: "activeTab",
                get: function () {
                  return i.localStorage.get(c);
                },
              },
              {
                key: "isActive",
                get: function () {
                  return this.activeTab === this.uid;
                },
              },
            ]),
            e
          );
        })(),
        d = c;
      t.tab = function () {
        return (a.glob[d] = a.glob[d] || new l());
      };
    },
    13: function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.env = void 0);
      var r =
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
              },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        u = n(6),
        s = n(23),
        a = n(37),
        c = n(49),
        f = (function () {
          function e() {
            o(this, e),
              a.memoizer(
                this,
                "node",
                "browser",
                "development",
                "production",
                "testing",
                "plike",
                "toString"
              );
          }
          return (
            i(e, [
              {
                key: "toString",
                value: function () {
                  var e = this.browser
                    ? s.resolve("app.environment")
                    : s.resolve("process.env.NODE_ENV");
                  return (e || "").toLowerCase();
                },
              },
              {
                key: "node",
                get: function () {
                  return (
                    "[object process]" ===
                    Object.prototype.toString.call(
                      "undefined" != typeof u.glob.process ? u.glob.process : 0
                    )
                  );
                },
              },
              {
                key: "browser",
                get: function () {
                  return (
                    c.isBrowserLike() ||
                    (!this.node &&
                      [
                        "undefined" == typeof document
                          ? "undefined"
                          : r(document),
                        "undefined" == typeof window ? "undefined" : r(window),
                      ].every(function (e) {
                        return "undefined" !== e;
                      }))
                  );
                },
              },
              {
                key: "development",
                get: function () {
                  return this.toString().includes("dev");
                },
              },
              {
                key: "dev",
                get: function () {
                  return this.development;
                },
              },
              {
                key: "production",
                get: function () {
                  return this.toString().includes("prod");
                },
              },
              {
                key: "prod",
                get: function () {
                  return this.production;
                },
              },
              {
                key: "testing",
                get: function () {
                  return this.toString().includes("test");
                },
              },
              {
                key: "test",
                get: function () {
                  return this.testing;
                },
              },
              {
                key: "plike",
                get: function () {
                  return this.toString().includes("like");
                },
              },
            ]),
            e
          );
        })();
      t.env = new f();
    },
    20: function (t, n) {
      t.exports = e;
    },
    23: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolve = void 0);
      var o =
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
              },
        r = n(6);
      t.resolve = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.glob;
        return e.split(".").reduce(function (e, t) {
          return "object" === ("undefined" == typeof e ? "undefined" : o(e))
            ? e[t]
            : e;
        }, t);
      };
    },
    24: function (e, t, n) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.gofor = void 0);
      var r = n(20),
        i = o(r),
        u = function () {
          var e = new i["default"]().interfaces.Headers,
            t = new e();
          t.append("X-Requested-With", "XMLHttpRequest"),
            t.append("Content-Type", "application/json; charset=utf-8"),
            t.append("Accept", "application/json");
          try {
            t.append("X-CSRF-Token", document.AUTH_TOKEN);
          } catch (n) {}
          return t;
        },
        s = function () {
          var e = u(),
            t = { credentials: "same-origin", headers: e };
          return t;
        },
        a = new i["default"](s).fetch;
      (a.config = function () {
        return setTimeout(function () {
          throw new Error("Re configuration of Gofor is not allowed");
        });
      }),
        (t.gofor = a);
    },
    37: function (e, t, n) {
      "use strict";
      function o(e) {
        function t(e, t) {
          return (n[e] = e in n ? n[e] : t());
        }
        for (
          var n = {}, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), u = 1;
          o > u;
          u++
        )
          i[u - 1] = arguments[u];
        i.forEach(function (n) {
          return r.call(e, n, t);
        });
      }
      function r(e, t) {
        var n = this,
          o = Object.getOwnPropertyDescriptor(this.constructor.prototype, e),
          r = u.reduce(function (r, u) {
            switch (i(o[u])) {
              case "undefined":
                break;
              case "function":
                s.includes(u)
                  ? (r[u] = function () {
                      return t(e + "$" + u, o[u].bind(n));
                    })
                  : (r[u] = o[u]);
                break;
              default:
                r[u] = o[u];
            }
            return r;
          }, {});
        Object.defineProperty(this, e, r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i =
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
            };
      t.memoizer = o;
      var u = ["get", "value", "set", "configurable", "enumerable", "writable"],
        s = ["get", "value"];
    },
    49: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserLike = void 0);
      var o = n(6);
      t.isBrowserLike = function () {
        return (
          o.glob.document && "function" == typeof o.glob.document.createElement
        );
      };
    },
    58: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.localStorage = void 0);
      var o = n(74);
      t.localStorage = new o.Storage("localStorage");
    },
    6: function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
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
              };
        t.glob =
          ("object" ===
            ("undefined" == typeof window ? "undefined" : n(window)) &&
            window.window === window &&
            window) ||
          ("object" === ("undefined" == typeof e ? "undefined" : n(e)) &&
            e.global === e &&
            e) ||
          ("object" === ("undefined" == typeof self ? "undefined" : n(self)) &&
            self.self === self &&
            self);
      }.call(t, n(7)));
    },
    619: function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(24),
        u = n(124),
        s = 3e4,
        a = new Audio(
          "https://res.cloudinary.com/nikhilroyjs/video/upload/v1636202733/fiverr_audio/fiver_custom_sound_e0u7tv.mp3"
        ),
        c = (function () {
          function e() {
            o(this, e),
              (this.isSoundEnabled =
                Fiverr.models.ps.desktopAudioEnabled || !1),
              this.setPlayRequest(),
              (this.playRequest = this.playRequest.bind(this)),
              (this.clearPlayedState = this.clearPlayedState.bind(this)),
              this.addListeners();
          }
          return (
            r(e, [
              {
                key: "setPlayRequest",
                value: function () {
                  this.playRequest = _.throttle(this.playRequestAction, s, {
                    leading: !0,
                    trailing: !1,
                  });
                },
              },
              {
                key: "playRequestAction",
                value: function () {
                  this.shouldPlayNotificationSound() && this.playImmediate();
                },
              },
              { key: "addListeners", value: function () {} },
              {
                key: "playImmediate",
                value: function () {
                  a.play();
                },
              },
              {
                key: "shouldPlayNotificationSound",
                value: function () {
                  return this.soundEnabled
                    ? document.hasFocus()
                      ? !1
                      : u.tab().isActive
                      ? !0
                      : !1
                    : !1;
                },
              },
              {
                key: "clearPlayedState",
                value: function () {
                  this.playRequest.cancel && this.playRequest.cancel();
                },
              },
              {
                key: "toggleOn",
                value: function (e, t) {
                  return (
                    (this.soundEnabled = !this.soundEnabled),
                    this.soundEnabled && t && this.playImmediate(),
                    i.gofor("/settings/desktop_audio", {
                      method: "POST",
                      body: JSON.stringify({ value: "" + this.soundEnabled }),
                    }),
                    Fiverr._logEventToGraphite({
                      label: "user_settings.notification_toggled." + e,
                    }),
                    this.soundEnabled
                  );
                },
              },
              {
                key: "soundEnabled",
                get: function () {
                  return this.isSoundEnabled;
                },
                set: function (e) {
                  this.isSoundEnabled = e;
                },
              },
            ]),
            e
          );
        })(),
        f = new c();
      (t["default"] = f), (e.exports = t["default"]);
    },
    7: function (e, t, n) {
      "use strict";
      var o,
        r =
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
              };
      o = (function () {
        return this;
      })();
      try {
        o = o || Function("return this")() || (1, eval)("this");
      } catch (i) {
        "object" === ("undefined" == typeof window ? "undefined" : r(window)) &&
          (o = window);
      }
      e.exports = o;
    },
    74: function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Storage = void 0);
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(37),
        u = n(13);
      t.Storage = (function () {
        function e(t) {
          var n = this;
          o(this, e), i.memoizer(this, "available");
          try {
            this.storage = u.env.browser && window[t];
          } catch (r) {}
          ["get", "set"].forEach(function (e) {
            return (n[e] = n[e].bind(n));
          });
        }
        return (
          r(e, [
            {
              key: "get",
              value: function (e) {
                if (this.available) {
                  var t = this.storage.getItem(e);
                  try {
                    return JSON.parse(t);
                  } catch (n) {
                    return t;
                  }
                }
              },
            },
            {
              key: "set",
              value: function (e, t) {
                var n = this;
                return this.available
                  ? new Promise(function (o, r) {
                      try {
                        n.storage.setItem(e, JSON.stringify(t)), o();
                      } catch (i) {
                        r(i);
                      }
                    })
                  : new Promise(function (e) {
                      return e;
                    });
              },
            },
            {
              key: "remove",
              value: function (e) {
                this.available && this.storage.removeItem(e);
              },
            },
            {
              key: "size",
              value: function () {
                for (
                  var e = this, t = arguments.length, n = Array(t), o = 0;
                  t > o;
                  o++
                )
                  n[o] = arguments[o];
                var r = !n.length,
                  i = 0;
                r &&
                  (n = Array.from(Array(this.storage.length)).map(function (
                    t,
                    n
                  ) {
                    return e.storage.key(n);
                  }));
                var u = n.reduce(function (t, n) {
                  var o = (n + e.storage.getItem(n)).length;
                  return (t[n] = o), r && (i += o), t;
                }, {});
                return r && Object.assign(u, { total: i }), u;
              },
            },
            {
              key: "available",
              get: function () {
                if (!u.env.browser || !this.storage) return !1;
                var e = Math.random().toString(36).substring(2);
                try {
                  return (
                    this.storage.setItem(e, !0), this.storage.removeItem(e), !0
                  );
                } catch (t) {
                  return !1;
                }
              },
            },
          ]),
          e
        );
      })();
    },
  });
});
