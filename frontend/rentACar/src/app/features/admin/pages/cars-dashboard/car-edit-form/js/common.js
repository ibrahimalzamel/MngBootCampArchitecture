/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function (e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function (e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function (e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function (e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function (e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f + a;
    }
    return (-h / 2) * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function (e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function (e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f * f * f * f + a;
    }
    return (h / 2) * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function (e, f, a, h, g) {
    return -h * Math.cos((f / g) * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function (e, f, a, h, g) {
    return h * Math.sin((f / g) * (Math.PI / 2)) + a;
  },
  easeInOutSine: function (e, f, a, h, g) {
    return (-h / 2) * (Math.cos((Math.PI * f) / g) - 1) + a;
  },
  easeInExpo: function (e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function (e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, (-10 * f) / g) + 1) + a;
  },
  easeInOutExpo: function (e, f, a, h, g) {
    if (f == 0) {
      return a;
    }
    if (f == g) {
      return a + h;
    }
    if ((f /= g / 2) < 1) {
      return (h / 2) * Math.pow(2, 10 * (f - 1)) + a;
    }
    return (h / 2) * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function (e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function (e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (-h / 2) * (Math.sqrt(1 - f * f) - 1) + a;
    }
    return (h / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      -(
        g *
        Math.pow(2, 10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j)
      ) + e
    );
  },
  easeOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k) == 1) {
      return e + l;
    }
    if (!j) {
      j = k * 0.3;
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    return (
      g * Math.pow(2, -10 * h) * Math.sin(((h * k - i) * (2 * Math.PI)) / j) +
      l +
      e
    );
  },
  easeInOutElastic: function (f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e;
    }
    if ((h /= k / 2) == 2) {
      return e + l;
    }
    if (!j) {
      j = k * (0.3 * 1.5);
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = (j / (2 * Math.PI)) * Math.asin(l / g);
    }
    if (h < 1) {
      return (
        -0.5 *
          (g *
            Math.pow(2, 10 * (h -= 1)) *
            Math.sin(((h * k - i) * (2 * Math.PI)) / j)) +
        e
      );
    }
    return (
      g *
        Math.pow(2, -10 * (h -= 1)) *
        Math.sin(((h * k - i) * (2 * Math.PI)) / j) *
        0.5 +
      l +
      e
    );
  },
  easeInBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function (e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }
    if ((f /= h / 2) < 1) {
      return (i / 2) * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }
    return (i / 2) * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function (e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function (e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function (e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }
    return (
      jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    );
  },
});

/**
 * Check if browser is a mobile device
 */
(function () {
  (jQuery.browser =
    jQuery.browser ||
    {}).mobile = /android|webos|iphone|ipad|ipod|blackberry/i.test(
    navigator.userAgent.toLowerCase()
  );
})(navigator.userAgent || navigator.vendor || window.opera);

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (
    (b[0] < 2 && b[1] < 9) ||
    (1 == b[0] && 9 == b[1] && b[2] < 1) ||
    b[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                if (a(b.target).is(this))
                  return b.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0),
                    d.addClass(c).attr(c, c).prop(c, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    d.removeClass(c).removeAttr(c).prop(c, !1));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type")
            ? (c.prop("checked") && (a = !1),
              b.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == c.prop("type") &&
              (c.prop("checked") !== this.$element.hasClass("active") &&
                (a = !1),
              this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
              a(c.target).is('input[type="radio"], input[type="checkbox"]') ||
                (c.preventDefault(),
                d.is("input,button")
                  ? d.trigger("focus")
                  : d
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(a > this.$items.length - 1 || a < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                b.to(a);
              })
            : c == a
            ? this.pause().cycle()
            : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.7"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function c(c) {
      (c && 3 === c.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = b(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            ((c &&
              "click" == c.type &&
              /input|textarea/i.test(c.target.tagName) &&
              a.contains(e[0], c.target)) ||
              (e.trigger((c = a.Event("hide.bs.dropdown", f))),
              c.isDefaultPrevented() ||
                (d.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.7"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = b(e),
            g = f.hasClass("open");
          if ((c(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(a(this))
                .on("click", c);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (c) {
        if (
          /(38|40|27|32)/.test(c.which) &&
          !/input|textarea/i.test(c.target.tagName)
        ) {
          var d = a(this);
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = b(d),
              g = e.hasClass("open");
            if ((!g && 27 != c.which) || (g && 27 == c.which))
              return (
                27 == c.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find(".dropdown-menu" + h);
            if (i.length) {
              var j = i.index(c.target);
              38 == c.which && j > 0 && j--,
                40 == c.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", c)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              document === a.target ||
                this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(document.createElement("div"))
              .addClass("modal-backdrop " + e)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(
              a.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
          c.tip().hasClass("in") || "in" == c.hoverState
            ? void (c.hoverState = "in")
            : (clearTimeout(c.timeout),
              (c.hoverState = "in"),
              c.options.delay && c.options.delay.show
                ? void (c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show();
                  }, c.options.delay.show))
                : c.show())
        );
      }),
      (c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1;
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        if (
          (c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          b instanceof a.Event &&
            (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
          !c.isInStateTrue())
        )
          return (
            clearTimeout(c.timeout),
            (c.hoverState = "out"),
            c.options.delay && c.options.delay.hide
              ? void (c.timeout = setTimeout(function () {
                  "out" == c.hoverState && c.hide();
                }, c.options.delay.hide))
              : c.hide()
          );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.getPosition(this.$viewport);
            (h =
              "bottom" == h && k.bottom + m > o.bottom
                ? "top"
                : "top" == h && k.top - m < o.top
                ? "bottom"
                : "right" == h && k.right + l > o.width
                ? "left"
                : "left" == h && k.left - l < o.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var p = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(p, h);
          var q = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", q)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : q();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top += g),
          (b.left += h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element &&
              e.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        if ((this.$element.trigger(g), !g.isDefaultPrevented()))
          return (
            f.removeClass("in"),
            a.support.transition && f.hasClass("fade")
              ? f
                  .one("bsTransitionEnd", d)
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : d(),
            (this.hoverState = null),
            this
          );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = window.SVGElement && c instanceof window.SVGElement,
          g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
          h = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          i = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, h, i, g);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.right && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = a(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          b
            ? ((c.inState.click = !c.inState.click),
              c.isInStateTrue() ? c.enter(c) : c.leave(c))
            : c.tip().hasClass("in")
            ? c.leave(c)
            : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type),
              a.$tip && a.$tip.detach(),
              (a.$tip = null),
              (a.$arrow = null),
              (a.$viewport = null),
              (a.$element = null);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (!e && /destroy|hide/.test(b)) ||
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.7"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.7"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.7"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.7"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed)
          return null != c
            ? !(e + this.unpin <= f.top) && "bottom"
            : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && e <= c
          ? "top"
          : null != d && i + j >= a - d && "bottom";
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(jQuery);
/**
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!(function (e, n) {
  var o = e();
  (e.fn.dropdownHover = function (t) {
    return "ontouchstart" in document
      ? this
      : ((o = o.add(this.parent())),
        this.each(function () {
          function r() {
            d.parents(".navbar").find(".navbar-toggle").is(":visible") ||
              (n.clearTimeout(a),
              n.clearTimeout(i),
              (i = n.setTimeout(function () {
                o.find(":focus").blur(),
                  v.instantlyCloseOthers === !0 && o.removeClass("open"),
                  n.clearTimeout(i),
                  d.attr("aria-expanded", "true"),
                  s.addClass("open"),
                  d.trigger(h);
              }, v.hoverDelay)));
          }
          var a,
            i,
            d = e(this),
            s = d.parent(),
            u = { delay: 500, hoverDelay: 0, instantlyCloseOthers: !0 },
            l = {
              delay: e(this).data("delay"),
              hoverDelay: e(this).data("hover-delay"),
              instantlyCloseOthers: e(this).data("close-others"),
            },
            h = "show.bs.dropdown",
            c = "hide.bs.dropdown",
            v = e.extend(!0, {}, u, t, l);
          s.hover(
            function (e) {
              return s.hasClass("open") || d.is(e.target) ? void r(e) : !0;
            },
            function () {
              n.clearTimeout(i),
                (a = n.setTimeout(function () {
                  d.attr("aria-expanded", "false"),
                    s.removeClass("open"),
                    d.trigger(c);
                }, v.delay));
            }
          ),
            d.hover(function (e) {
              return s.hasClass("open") || s.is(e.target) ? void r(e) : !0;
            }),
            s.find(".dropdown-submenu").each(function () {
              var o,
                t = e(this);
              t.hover(
                function () {
                  n.clearTimeout(o),
                    t.children(".dropdown-menu").show(),
                    t.siblings().children(".dropdown-menu").hide();
                },
                function () {
                  var e = t.children(".dropdown-menu");
                  o = n.setTimeout(function () {
                    e.hide();
                  }, v.delay);
                }
              );
            });
        }));
  }),
    e(document).ready(function () {
      e('[data-hover="dropdown"]').dropdownHover();
    });
})(jQuery, window);

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(window, function (n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || a)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]("refresh");
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        };
        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll,
        });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r
              ? n[m]("viewportHeight")
              : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (
          n.isEmptyObject(this.waypoints.horizontal) &&
          n.isEmptyObject(this.waypoints.vertical)
        ) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i;
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = false);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = t[w];
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        e = n.extend({}, n.fn[g].defaults, e);
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function () {
        return d._invoke.call(this, "disable");
      },
      enable: function () {
        return d._invoke.call(this, "enable");
      },
      destroy: function () {
        return d._invoke.call(this, "destroy");
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical";
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t) {
        this.each(function () {
          var e;
          e = l.getWaypointsByElement(this);
          return n.each(e, function (e, n) {
            n[t]();
            return true;
          });
        });
        return this;
      },
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error(
          "jQuery Waypoints needs a callback function or handler option."
        );
      } else {
        return n.error(
          "The " + r + " method does not exist in jQuery Waypoints."
        );
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false,
    };
    h = {
      refresh: function () {
        return n.each(c, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke("enable");
      },
      disable: function () {
        return h._invoke("disable");
      },
      destroy: function () {
        return h._invoke("destroy");
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      },
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]),
        (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.on("load.waypoints", function () {
      return n[m]("refresh");
    });
  });
}.call(this));

// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  (function (t, n) {
    if (typeof define === "function" && define.amd) {
      return define(["jquery", "waypoints"], n);
    } else {
      return n(t.jQuery);
    }
  })(window, function (t) {
    var n, i;
    n = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: "stuck",
      direction: "down right",
    };
    i = function (t, n) {
      var i;
      t.wrap(n.wrapper);
      i = t.parent();
      return i.data("isWaypointStickyWrapper", true);
    };
    t.waypoints("extendFn", "sticky", function (r) {
      var e, a, s;
      a = t.extend({}, t.fn.waypoint.defaults, n, r);
      e = i(this, a);
      s = a.handler;
      a.handler = function (n) {
        var i, r;
        i = t(this).children(":first");
        r = a.direction.indexOf(n) !== -1;
        i.toggleClass(a.stuckClass, r);
        e.height(r ? i.outerHeight() : "");
        if (s != null) {
          return s.call(this, n);
        }
      };
      e.waypoint(a);
      return this.data("stuckClass", a.stuckClass);
    });
    return t.waypoints("extendFn", "unsticky", function () {
      var t;
      t = this.parent();
      if (!t.data("isWaypointStickyWrapper")) {
        return this;
      }
      t.waypoint("destroy");
      this.unwrap();
      return this.removeClass(this.data("stuckClass"));
    });
  });
}.call(this));

/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function (f, h, $) {
  var a = "placeholder" in h.createElement("input"),
    d = "placeholder" in h.createElement("textarea"),
    i = $.fn,
    c = $.valHooks,
    k,
    j;
  if (a && d) {
    j = i.placeholder = function () {
      return this;
    };
    j.input = j.textarea = true;
  } else {
    j = i.placeholder = function () {
      var l = this;
      l.filter((a ? "textarea" : ":input") + "[placeholder]")
        .not(".placeholder")
        .bind({ "focus.placeholder": b, "blur.placeholder": e })
        .data("placeholder-enabled", true)
        .trigger("blur.placeholder");
      return l;
    };
    j.input = a;
    j.textarea = d;
    k = {
      get: function (m) {
        var l = $(m);
        return l.data("placeholder-enabled") && l.hasClass("placeholder")
          ? ""
          : m.value;
      },
      set: function (m, n) {
        var l = $(m);
        if (!l.data("placeholder-enabled")) {
          return (m.value = n);
        }
        if (n == "") {
          m.value = n;
          if (m != h.activeElement) {
            e.call(m);
          }
        } else {
          if (l.hasClass("placeholder")) {
            b.call(m, true, n) || (m.value = n);
          } else {
            m.value = n;
          }
        }
        return l;
      },
    };
    a || (c.input = k);
    d || (c.textarea = k);
    $(function () {
      $(h).delegate("form", "submit.placeholder", function () {
        var l = $(".placeholder", this).each(b);
        setTimeout(function () {
          l.each(e);
        }, 10);
      });
    });
    $(f).bind("beforeunload.placeholder", function () {
      $(".placeholder").each(function () {
        this.value = "";
      });
    });
  }
  function g(m) {
    var l = {},
      n = /^jQuery\d+$/;
    $.each(m.attributes, function (p, o) {
      if (o.specified && !n.test(o.name)) {
        l[o.name] = o.value;
      }
    });
    return l;
  }
  function b(m, n) {
    var l = this,
      o = $(l);
    if (l.value == o.attr("placeholder") && o.hasClass("placeholder")) {
      if (o.data("placeholder-password")) {
        o = o
          .hide()
          .next()
          .show()
          .attr("id", o.removeAttr("id").data("placeholder-id"));
        if (m === true) {
          return (o[0].value = n);
        }
        o.focus();
      } else {
        l.value = "";
        o.removeClass("placeholder");
        l == h.activeElement && l.select();
      }
    }
  }
  function e() {
    var q,
      l = this,
      p = $(l),
      m = p,
      o = this.id;
    if (l.value == "") {
      if (l.type == "password") {
        if (!p.data("placeholder-textinput")) {
          try {
            q = p.clone().attr({ type: "text" });
          } catch (n) {
            q = $("<input>").attr($.extend(g(this), { type: "text" }));
          }
          q.removeAttr("name")
            .data({ "placeholder-password": true, "placeholder-id": o })
            .bind("focus.placeholder", b);
          p.data({ "placeholder-textinput": q, "placeholder-id": o }).before(q);
        }
        p = p.removeAttr("id").hide().prev().attr("id", o).show();
      }
      p.addClass("placeholder");
      p[0].value = p.attr("placeholder");
    } else {
      p.removeClass("placeholder");
    }
  }
})(this, document, jQuery);

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.element = b),
      (this.options = a.extend({}, g, c)),
      (this._defaults = g),
      (this._name = f),
      this.init();
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide();
      },
      showElement: function (a) {
        a.show();
      },
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft();
        },
        setLeft: function (a, b) {
          a.scrollLeft(b);
        },
        getTop: function (a) {
          return a.scrollTop();
        },
        setTop: function (a, b) {
          a.scrollTop(b);
        },
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10);
        },
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10);
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10);
        },
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        },
      },
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b);
        },
        setTop: function (a, b) {
          a.css("top", b);
        },
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] =
            "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
        },
      },
    },
    j = (function () {
      var b,
        c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break;
        }
      return (
        "WebkitOpacity" in d && (e = "Webkit"),
        "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return (
            e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
          );
        }
      );
    })(),
    k = j("transform"),
    l =
      a("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== d,
    m = l
      ? function (a, b, c) {
          a.css({ "background-position-x": b, "background-position-y": c });
        }
      : function (a, b, c) {
          a.css("background-position", b + " " + c);
        },
    n = l
      ? function (a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y"),
          ];
        }
      : function (a) {
          return a.css("background-position").split(" ");
        },
    o =
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.mozRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      function (a) {
        setTimeout(a, 1e3 / 60);
      };
  (e.prototype = {
    init: function () {
      (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b),
        (this.$scrollElement = a(this.element)),
        (this.$element = this.element === b ? a("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== d
            ? a(this.options.viewportElement)
            : this.$scrollElement[0] === b ||
              "scroll" === this.options.scrollProperty
            ? this.$scrollElement
            : this.$scrollElement.parent());
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      (this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement);
      }),
        (this._getScrollTop = function () {
          return b.getTop(a.$scrollElement);
        });
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      (this._setScrollLeft =
        "function" == typeof e
          ? function (a) {
              e(b.$scrollElement, a);
            }
          : a.noop),
        (this._setScrollTop =
          "function" == typeof f
            ? function (a) {
                f(b.$scrollElement, a);
              }
            : a.noop),
        (this._setPosition =
          d.setPosition ||
          function (a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e),
              b.options.verticalScrolling && d.setTop(a, f, g);
          });
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive &&
        d.bind("load." + this.name, function () {
          c.refresh();
        }),
        d.bind("resize." + this.name, function () {
          c._detectViewport(), c.options.responsive && c.refresh();
        });
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      (c && c.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        c &&
          c.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          a(b).load(function () {
            var a = d._getScrollLeft(),
              b = d._getScrollTop();
            d._setScrollLeft(a + 1),
              d._setScrollTop(b + 1),
              d._setScrollLeft(a),
              d._setScrollTop(b);
          }),
        this._setScrollLeft(e),
        this._setScrollTop(f);
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = b ? a.top : 0),
        (this.viewportOffsetLeft = b ? a.left : 0);
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop();
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--)
          this.particles[c].$element.data("stellar-elementIsActive", d);
      (this.particles = []),
        this.options.parallaxElements &&
          this.$element.find("[data-stellar-ratio]").each(function () {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = a(this),
              n = 0,
              o = 0,
              p = 0,
              q = 0;
            if (m.data("stellar-elementIsActive")) {
              if (m.data("stellar-elementIsActive") !== this) return;
            } else m.data("stellar-elementIsActive", this);
            b.options.showElement(m),
              m.data("stellar-startingLeft")
                ? (m.css("left", m.data("stellar-startingLeft")),
                  m.css("top", m.data("stellar-startingTop")))
                : (m.data("stellar-startingLeft", m.css("left")),
                  m.data("stellar-startingTop", m.css("top"))),
              (f = m.position().left),
              (g = m.position().top),
              (h =
                "auto" === m.css("margin-left")
                  ? 0
                  : parseInt(m.css("margin-left"), 10)),
              (i =
                "auto" === m.css("margin-top")
                  ? 0
                  : parseInt(m.css("margin-top"), 10)),
              (k = m.offset().left - h),
              (l = m.offset().top - i),
              m.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((n = p), (o = q), (j = b), !1)
                  : ((p += b.position().left), void (q += b.position().top));
              }),
              (c =
                m.data("stellar-horizontal-offset") !== d
                  ? m.data("stellar-horizontal-offset")
                  : j !== d && j.data("stellar-horizontal-offset") !== d
                  ? j.data("stellar-horizontal-offset")
                  : b.horizontalOffset),
              (e =
                m.data("stellar-vertical-offset") !== d
                  ? m.data("stellar-vertical-offset")
                  : j !== d && j.data("stellar-vertical-offset") !== d
                  ? j.data("stellar-vertical-offset")
                  : b.verticalOffset),
              b.particles.push({
                $element: m,
                $offsetParent: j,
                isFixed: "fixed" === m.css("position"),
                horizontalOffset: c,
                verticalOffset: e,
                startingPositionLeft: f,
                startingPositionTop: g,
                startingOffsetLeft: k,
                startingOffsetTop: l,
                parentOffsetLeft: n,
                parentOffsetTop: o,
                stellarRatio:
                  m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                width: m.outerWidth(!0),
                height: m.outerHeight(!0),
                isHidden: !1,
              });
          });
    },
    _findBackgrounds: function () {
      var b,
        c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
          ((b = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
            (b = b.add(this.$element)),
          b.each(function () {
            var b,
              g,
              h,
              i,
              j,
              k,
              l,
              o = a(this),
              p = n(o),
              q = 0,
              r = 0,
              s = 0,
              t = 0;
            if (o.data("stellar-backgroundIsActive")) {
              if (o.data("stellar-backgroundIsActive") !== this) return;
            } else o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft")
              ? m(
                  o,
                  o.data("stellar-backgroundStartingLeft"),
                  o.data("stellar-backgroundStartingTop")
                )
              : (o.data("stellar-backgroundStartingLeft", p[0]),
                o.data("stellar-backgroundStartingTop", p[1])),
              (h =
                "auto" === o.css("margin-left")
                  ? 0
                  : parseInt(o.css("margin-left"), 10)),
              (i =
                "auto" === o.css("margin-top")
                  ? 0
                  : parseInt(o.css("margin-top"), 10)),
              (j = o.offset().left - h - e),
              (k = o.offset().top - i - f),
              o.parents().each(function () {
                var b = a(this);
                return b.data("stellar-offset-parent") === !0
                  ? ((q = s), (r = t), (l = b), !1)
                  : ((s += b.position().left), void (t += b.position().top));
              }),
              (b =
                o.data("stellar-horizontal-offset") !== d
                  ? o.data("stellar-horizontal-offset")
                  : l !== d && l.data("stellar-horizontal-offset") !== d
                  ? l.data("stellar-horizontal-offset")
                  : c.horizontalOffset),
              (g =
                o.data("stellar-vertical-offset") !== d
                  ? o.data("stellar-vertical-offset")
                  : l !== d && l.data("stellar-vertical-offset") !== d
                  ? l.data("stellar-vertical-offset")
                  : c.verticalOffset),
              c.backgrounds.push({
                $element: o,
                $offsetParent: l,
                isFixed: "fixed" === o.css("background-attachment"),
                horizontalOffset: b,
                verticalOffset: g,
                startingValueLeft: p[0],
                startingValueTop: p[1],
                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                  ? 0
                  : parseInt(p[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                  ? 0
                  : parseInt(p[1], 10),
                startingPositionLeft: o.position().left,
                startingPositionTop: o.position().top,
                startingOffsetLeft: j,
                startingOffsetTop: k,
                parentOffsetLeft: q,
                parentOffsetTop: r,
                stellarRatio:
                  o.data("stellar-background-ratio") === d
                    ? 1
                    : o.data("stellar-background-ratio"),
              });
          }));
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)
        (a = this.particles[e]),
          (b = a.$element.data("stellar-startingLeft")),
          (c = a.$element.data("stellar-startingTop")),
          this._setPosition(a.$element, b, b, c, c),
          this.options.showElement(a.$element),
          a.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)
        (d = this.backgrounds[e]),
          d.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          m(d.$element, d.startingValueLeft, d.startingValueTop);
    },
    destroy: function () {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = a.noop),
        a(b)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            d.bind("resize.horizontal-" + this.name, function () {
              c.horizontalOffset = c.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            d.bind("resize.vertical-" + this.name, function () {
              c.verticalOffset = c.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (
        this.currentScrollLeft !== k ||
        this.currentScrollTop !== l ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = k,
            this.currentScrollTop = l,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight,
            j = this.particles.length - 1;
          j >= 0;
          j--
        )
          (a = this.particles[j]),
            (b = a.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((f =
                  (k +
                    a.horizontalOffset +
                    this.viewportOffsetLeft +
                    a.startingPositionLeft -
                    a.startingOffsetLeft +
                    a.parentOffsetLeft) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionLeft),
                (h = f - a.startingPositionLeft + a.startingOffsetLeft))
              : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((g =
                  (l +
                    a.verticalOffset +
                    this.viewportOffsetTop +
                    a.startingPositionTop -
                    a.startingOffsetTop +
                    a.parentOffsetTop) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionTop),
                (i = g - a.startingPositionTop + a.startingOffsetTop))
              : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
            this.options.hideDistantElements &&
              ((o =
                !this.options.horizontalScrolling ||
                (h + a.width > (a.isFixed ? 0 : k) &&
                  h <
                    (a.isFixed ? 0 : k) +
                      this.viewportWidth +
                      this.viewportOffsetLeft)),
              (n =
                !this.options.verticalScrolling ||
                (i + a.height > (a.isFixed ? 0 : l) &&
                  i <
                    (a.isFixed ? 0 : l) +
                      this.viewportHeight +
                      this.viewportOffsetTop))),
            o && n
              ? (a.isHidden &&
                  (this.options.showElement(a.$element), (a.isHidden = !1)),
                this._setPosition(
                  a.$element,
                  f,
                  a.startingPositionLeft,
                  g,
                  a.startingPositionTop
                ))
              : a.isHidden ||
                (this.options.hideElement(a.$element), (a.isHidden = !0));
        for (j = this.backgrounds.length - 1; j >= 0; j--)
          (c = this.backgrounds[j]),
            (b = c.isFixed ? 0 : 1),
            (d = this.options.horizontalScrolling
              ? (k +
                  c.horizontalOffset -
                  this.viewportOffsetLeft -
                  c.startingOffsetLeft +
                  c.parentOffsetLeft -
                  c.startingBackgroundPositionLeft) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueLeft),
            (e = this.options.verticalScrolling
              ? (l +
                  c.verticalOffset -
                  this.viewportOffsetTop -
                  c.startingOffsetTop +
                  c.parentOffsetTop -
                  c.startingBackgroundPositionTop) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueTop),
            m(c.$element, d, e);
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), (b = !1);
        },
        d = function () {
          b || (o(c), (b = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, d), d();
    },
    _startAnimationLoop: function () {
      var a = this;
      (this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements();
      }),
        this._animationLoop();
    },
  }),
    (a.fn[f] = function (b) {
      var c = arguments;
      return b === d || "object" == typeof b
        ? this.each(function () {
            a.data(this, "plugin_" + f) ||
              a.data(this, "plugin_" + f, new e(this, b));
          })
        : "string" == typeof b && "_" !== b[0] && "init" !== b
        ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e &&
              "function" == typeof d[b] &&
              d[b].apply(d, Array.prototype.slice.call(c, 1)),
              "destroy" === b && a.data(this, "plugin_" + f, null);
          })
        : void 0;
    }),
    (a[f] = function () {
      var c = a(b);
      return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0));
    }),
    (a[f].scrollProperty = h),
    (a[f].positionProperty = i),
    (b.Stellar = e);
})(jQuery, this, document);

/* jquery.nicescroll 3.6.8 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */ (function (
  f
) {
  "function" === typeof define && define.amd
    ? define(["jquery"], f)
    : "object" === typeof exports
    ? (module.exports = f(require("jquery")))
    : f(jQuery);
})(function (f) {
  var B = !1,
    F = !1,
    O = 0,
    P = 2e3,
    A = 0,
    J = ["webkit", "ms", "moz", "o"],
    v = window.requestAnimationFrame || !1,
    w = window.cancelAnimationFrame || !1;
  if (!v)
    for (var Q in J) {
      var G = J[Q];
      if ((v = window[G + "RequestAnimationFrame"])) {
        w =
          window[G + "CancelAnimationFrame"] ||
          window[G + "CancelRequestAnimationFrame"];
        break;
      }
    }
  var x = window.MutationObserver || window.WebKitMutationObserver || !1,
    K = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 60,
      mousescrollstep: 24,
      touchbehavior: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: (function () {
        var f = document.getElementsByTagName("script"),
          f = f.length ? f[f.length - 1].src.split("?")[0] : "";
        return 0 < f.split("/").length
          ? f.split("/").slice(0, -1).join("/") + "/"
          : "";
      })(),
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1,
    },
    H = !1,
    R = function () {
      if (H) return H;
      var f = document.createElement("DIV"),
        c = f.style,
        k = navigator.userAgent,
        l = navigator.platform,
        d = {
          haspointerlock:
            "pointerLockElement" in document ||
            "webkitPointerLockElement" in document ||
            "mozPointerLockElement" in document,
        };
      d.isopera = "opera" in window;
      d.isopera12 = d.isopera && "getUserMedia" in navigator;
      d.isoperamini =
        "[object OperaMini]" ===
        Object.prototype.toString.call(window.operamini);
      d.isie = "all" in document && "attachEvent" in f && !d.isopera;
      d.isieold = d.isie && !("msInterpolationMode" in c);
      d.isie7 =
        d.isie &&
        !d.isieold &&
        (!("documentMode" in document) || 7 == document.documentMode);
      d.isie8 =
        d.isie && "documentMode" in document && 8 == document.documentMode;
      d.isie9 = d.isie && "performance" in window && 9 == document.documentMode;
      d.isie10 =
        d.isie && "performance" in window && 10 == document.documentMode;
      d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode;
      d.isieedge12 = navigator.userAgent.match(/Edge\/12\./);
      d.isieedge = "msOverflowStyle" in f;
      d.ismodernie = d.isie11 || d.isieedge;
      d.isie9mobile = /iemobile.9/i.test(k);
      d.isie9mobile && (d.isie9 = !1);
      d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(k);
      d.ismozilla = "MozAppearance" in c;
      d.iswebkit = "WebkitAppearance" in c;
      d.ischrome = "chrome" in window;
      d.ischrome38 = d.ischrome && "touchAction" in c;
      d.ischrome22 = !d.ischrome38 && d.ischrome && d.haspointerlock;
      d.ischrome26 = !d.ischrome38 && d.ischrome && "transition" in c;
      d.cantouch =
        "ontouchstart" in document.documentElement || "ontouchstart" in window;
      d.hasw3ctouch =
        (window.PointerEvent || !1) &&
        (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints);
      d.hasmstouch = !d.hasw3ctouch && (window.MSPointerEvent || !1);
      d.ismac = /^mac$/i.test(l);
      d.isios = d.cantouch && /iphone|ipad|ipod/i.test(l);
      d.isios4 = d.isios && !("seal" in Object);
      d.isios7 = d.isios && "webkitHidden" in document;
      d.isios8 = d.isios && "hidden" in document;
      d.isandroid = /android/i.test(k);
      d.haseventlistener = "addEventListener" in f;
      d.trstyle = !1;
      d.hastransform = !1;
      d.hastranslate3d = !1;
      d.transitionstyle = !1;
      d.hastransition = !1;
      d.transitionend = !1;
      l = [
        "transform",
        "msTransform",
        "webkitTransform",
        "MozTransform",
        "OTransform",
      ];
      for (k = 0; k < l.length; k++)
        if (void 0 !== c[l[k]]) {
          d.trstyle = l[k];
          break;
        }
      d.hastransform = !!d.trstyle;
      d.hastransform &&
        ((c[d.trstyle] = "translate3d(1px,2px,3px)"),
        (d.hastranslate3d = /translate3d/.test(c[d.trstyle])));
      d.transitionstyle = !1;
      d.prefixstyle = "";
      d.transitionend = !1;
      for (
        var l = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(
            " "
          ),
          q = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "),
          t = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(
            " "
          ),
          k = 0;
        k < l.length;
        k++
      )
        if (l[k] in c) {
          d.transitionstyle = l[k];
          d.prefixstyle = q[k];
          d.transitionend = t[k];
          break;
        }
      d.ischrome26 && (d.prefixstyle = q[1]);
      d.hastransition = d.transitionstyle;
      a: {
        k = ["grab", "-webkit-grab", "-moz-grab"];
        if ((d.ischrome && !d.ischrome38) || d.isie) k = [];
        for (l = 0; l < k.length; l++)
          if (((q = k[l]), (c.cursor = q), c.cursor == q)) {
            c = q;
            break a;
          }
        c =
          "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize";
      }
      d.cursorgrabvalue = c;
      d.hasmousecapture = "setCapture" in f;
      d.hasMutationObserver = !1 !== x;
      return (H = d);
    },
    S = function (h, c) {
      function k() {
        var b = a.doc.css(e.trstyle);
        return b && "matrix" == b.substr(0, 6)
          ? b
              .replace(/^.*\((.*)\)$/g, "$1")
              .replace(/px/g, "")
              .split(/, +/)
          : !1;
      }
      function l() {
        var b = a.win;
        if ("zIndex" in b) return b.zIndex();
        for (; 0 < b.length && 9 != b[0].nodeType; ) {
          var g = b.css("zIndex");
          if (!isNaN(g) && 0 != g) return parseInt(g);
          b = b.parent();
        }
        return !1;
      }
      function d(b, g, u) {
        g = b.css(g);
        b = parseFloat(g);
        return isNaN(b)
          ? ((b = z[g] || 0),
            (u =
              3 == b
                ? u
                  ? a.win.outerHeight() - a.win.innerHeight()
                  : a.win.outerWidth() - a.win.innerWidth()
                : 1),
            a.isie8 && b && (b += 1),
            u ? b : 0)
          : b;
      }
      function q(b, g, u, c) {
        a._bind(
          b,
          g,
          function (a) {
            a = a ? a : window.event;
            var c = {
              original: a,
              target: a.target || a.srcElement,
              type: "wheel",
              deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function () {
                a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
                return !1;
              },
              stopImmediatePropagation: function () {
                a.stopImmediatePropagation
                  ? a.stopImmediatePropagation()
                  : (a.cancelBubble = !0);
              },
            };
            "mousewheel" == g
              ? (a.wheelDeltaX && (c.deltaX = -0.025 * a.wheelDeltaX),
                a.wheelDeltaY && (c.deltaY = -0.025 * a.wheelDeltaY),
                c.deltaY || c.deltaX || (c.deltaY = -0.025 * a.wheelDelta))
              : (c.deltaY = a.detail);
            return u.call(b, c);
          },
          c
        );
      }
      function t(b, g, c) {
        var d, e;
        0 == b.deltaMode
          ? ((d = -Math.floor((a.opt.mousescrollstep / 54) * b.deltaX)),
            (e = -Math.floor((a.opt.mousescrollstep / 54) * b.deltaY)))
          : 1 == b.deltaMode &&
            ((d = -Math.floor(b.deltaX * a.opt.mousescrollstep)),
            (e = -Math.floor(b.deltaY * a.opt.mousescrollstep)));
        g &&
          a.opt.oneaxismousemode &&
          0 == d &&
          e &&
          ((d = e),
          (e = 0),
          c &&
            (0 > d
              ? a.getScrollLeft() >= a.page.maxw
              : 0 >= a.getScrollLeft()) &&
            ((e = d), (d = 0)));
        a.isrtlmode && (d = -d);
        d &&
          (a.scrollmom && a.scrollmom.stop(),
          (a.lastdeltax += d),
          a.debounced(
            "mousewheelx",
            function () {
              var b = a.lastdeltax;
              a.lastdeltax = 0;
              a.rail.drag || a.doScrollLeftBy(b);
            },
            15
          ));
        if (e) {
          if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive)
            if (0 > e) {
              if (a.getScrollTop() >= a.page.maxh) return !0;
            } else if (0 >= a.getScrollTop()) return !0;
          a.scrollmom && a.scrollmom.stop();
          a.lastdeltay += e;
          a.synched(
            "mousewheely",
            function () {
              var b = a.lastdeltay;
              a.lastdeltay = 0;
              a.rail.drag || a.doScrollBy(b);
            },
            15
          );
        }
        b.stopImmediatePropagation();
        return b.preventDefault();
      }
      var a = this;
      this.version = "3.6.8";
      this.name = "nicescroll";
      this.me = c;
      this.opt = { doc: f("body"), win: !1 };
      f.extend(this.opt, K);
      this.opt.snapbackspeed = 80;
      if (h) for (var r in a.opt) void 0 !== h[r] && (a.opt[r] = h[r]);
      a.opt.disablemutationobserver && (x = !1);
      this.iddoc =
        (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
      this.ispage = /^BODY|HTML/.test(
        a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName
      );
      this.haswrapper = !1 !== a.opt.win;
      this.win = a.opt.win || (this.ispage ? f(window) : this.doc);
      this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win;
      this.body = f("body");
      this.iframe = this.isfixed = this.viewport = !1;
      this.isiframe =
        "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
      this.istextarea = "TEXTAREA" == this.win[0].nodeName;
      this.forcescreen = !1;
      this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
      this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
      this.scroll = { x: 0, y: 0 };
      this.scrollratio = { x: 0, y: 0 };
      this.cursorheight = 20;
      this.scrollvaluemax = 0;
      if ("auto" == this.opt.rtlmode) {
        r = this.win[0] == window ? this.body : this.win;
        var p =
          r.css("writing-mode") ||
          r.css("-webkit-writing-mode") ||
          r.css("-ms-writing-mode") ||
          r.css("-moz-writing-mode");
        "horizontal-tb" == p || "lr-tb" == p || "" == p
          ? ((this.isrtlmode = "rtl" == r.css("direction")),
            (this.isvertical = !1))
          : ((this.isrtlmode =
              "vertical-rl" == p || "tb" == p || "tb-rl" == p || "rl-tb" == p),
            (this.isvertical =
              "vertical-rl" == p || "tb" == p || "tb-rl" == p));
      } else (this.isrtlmode = !0 === this.opt.rtlmode), (this.isvertical = !1);
      this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
      do this.id = "ascrail" + P++;
      while (document.getElementById(this.id));
      this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
      this.visibility = !0;
      this.hidden = this.locked = this.railslocked = !1;
      this.cursoractive = !0;
      this.wheelprevented = !1;
      this.overflowx = a.opt.overflowx;
      this.overflowy = a.opt.overflowy;
      this.nativescrollingarea = !1;
      this.checkarea = 0;
      this.events = [];
      this.saved = {};
      this.delaylist = {};
      this.synclist = {};
      this.lastdeltay = this.lastdeltax = 0;
      this.detected = R();
      var e = f.extend({}, this.detected);
      this.ishwscroll =
        (this.canhwscroll = e.hastransform && a.opt.hwacceleration) &&
        a.haswrapper;
      this.hasreversehr = this.isrtlmode
        ? this.isvertical
          ? !(e.iswebkit || e.isie || e.isie11)
          : !(e.iswebkit || (e.isie && !e.isie10 && !e.isie11))
        : !1;
      this.istouchcapable = !1;
      e.cantouch || (!e.hasw3ctouch && !e.hasmstouch)
        ? !e.cantouch ||
          e.isios ||
          e.isandroid ||
          (!e.iswebkit && !e.ismozilla) ||
          (this.istouchcapable = !0)
        : (this.istouchcapable = !0);
      a.opt.enablemouselockapi ||
        ((e.hasmousecapture = !1), (e.haspointerlock = !1));
      this.debounced = function (b, g, c) {
        a &&
          (a.delaylist[b] ||
            (g.call(a),
            (a.delaylist[b] = {
              h: v(function () {
                a.delaylist[b].fn.call(a);
                a.delaylist[b] = !1;
              }, c),
            })),
          (a.delaylist[b].fn = g));
      };
      var I = !1;
      this.synched = function (b, g) {
        a.synclist[b] = g;
        (function () {
          I ||
            (v(function () {
              if (a) {
                I = !1;
                for (var b in a.synclist) {
                  var g = a.synclist[b];
                  g && g.call(a);
                  a.synclist[b] = !1;
                }
              }
            }),
            (I = !0));
        })();
        return b;
      };
      this.unsynched = function (b) {
        a.synclist[b] && (a.synclist[b] = !1);
      };
      this.css = function (b, g) {
        for (var c in g) a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c]);
      };
      this.scrollTop = function (b) {
        return void 0 === b ? a.getScrollTop() : a.setScrollTop(b);
      };
      this.scrollLeft = function (b) {
        return void 0 === b ? a.getScrollLeft() : a.setScrollLeft(b);
      };
      var D = function (a, g, c, d, e, f, k) {
        this.st = a;
        this.ed = g;
        this.spd = c;
        this.p1 = d || 0;
        this.p2 = e || 1;
        this.p3 = f || 0;
        this.p4 = k || 1;
        this.ts = new Date().getTime();
        this.df = this.ed - this.st;
      };
      D.prototype = {
        B2: function (a) {
          return 3 * a * a * (1 - a);
        },
        B3: function (a) {
          return 3 * a * (1 - a) * (1 - a);
        },
        B4: function (a) {
          return (1 - a) * (1 - a) * (1 - a);
        },
        getNow: function () {
          var a = 1 - (new Date().getTime() - this.ts) / this.spd,
            g = this.B2(a) + this.B3(a) + this.B4(a);
          return 0 > a ? this.ed : this.st + Math.round(this.df * g);
        },
        update: function (a, g) {
          this.st = this.getNow();
          this.ed = a;
          this.spd = g;
          this.ts = new Date().getTime();
          this.df = this.ed - this.st;
          return this;
        },
      };
      if (this.ishwscroll) {
        this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" };
        e.hastranslate3d &&
          e.isios &&
          this.doc.css("-webkit-backface-visibility", "hidden");
        this.getScrollTop = function (b) {
          if (!b) {
            if ((b = k())) return 16 == b.length ? -b[13] : -b[5];
            if (a.timerscroll && a.timerscroll.bz)
              return a.timerscroll.bz.getNow();
          }
          return a.doc.translate.y;
        };
        this.getScrollLeft = function (b) {
          if (!b) {
            if ((b = k())) return 16 == b.length ? -b[12] : -b[4];
            if (a.timerscroll && a.timerscroll.bh)
              return a.timerscroll.bh.getNow();
          }
          return a.doc.translate.x;
        };
        this.notifyScrollEvent = function (a) {
          var g = document.createEvent("UIEvents");
          g.initUIEvent("scroll", !1, !0, window, 1);
          g.niceevent = !0;
          a.dispatchEvent(g);
        };
        var y = this.isrtlmode ? 1 : -1;
        e.hastranslate3d && a.opt.enabletranslate3d
          ? ((this.setScrollTop = function (b, g) {
              a.doc.translate.y = b;
              a.doc.translate.ty = -1 * b + "px";
              a.doc.css(
                e.trstyle,
                "translate3d(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ",0px)"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }),
            (this.setScrollLeft = function (b, g) {
              a.doc.translate.x = b;
              a.doc.translate.tx = b * y + "px";
              a.doc.css(
                e.trstyle,
                "translate3d(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ",0px)"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }))
          : ((this.setScrollTop = function (b, g) {
              a.doc.translate.y = b;
              a.doc.translate.ty = -1 * b + "px";
              a.doc.css(
                e.trstyle,
                "translate(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ")"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }),
            (this.setScrollLeft = function (b, g) {
              a.doc.translate.x = b;
              a.doc.translate.tx = b * y + "px";
              a.doc.css(
                e.trstyle,
                "translate(" +
                  a.doc.translate.tx +
                  "," +
                  a.doc.translate.ty +
                  ")"
              );
              g || a.notifyScrollEvent(a.win[0]);
            }));
      } else
        (this.getScrollTop = function () {
          return a.docscroll.scrollTop();
        }),
          (this.setScrollTop = function (b) {
            return setTimeout(function () {
              a && a.docscroll.scrollTop(b);
            }, 1);
          }),
          (this.getScrollLeft = function () {
            return a.hasreversehr
              ? a.detected.ismozilla
                ? a.page.maxw - Math.abs(a.docscroll.scrollLeft())
                : a.page.maxw - a.docscroll.scrollLeft()
              : a.docscroll.scrollLeft();
          }),
          (this.setScrollLeft = function (b) {
            return setTimeout(function () {
              if (a)
                return (
                  a.hasreversehr &&
                    (b = a.detected.ismozilla
                      ? -(a.page.maxw - b)
                      : a.page.maxw - b),
                  a.docscroll.scrollLeft(b)
                );
            }, 1);
          });
      this.getTarget = function (a) {
        return a
          ? a.target
            ? a.target
            : a.srcElement
            ? a.srcElement
            : !1
          : !1;
      };
      this.hasParent = function (a, g) {
        if (!a) return !1;
        for (var c = a.target || a.srcElement || a || !1; c && c.id != g; )
          c = c.parentNode || !1;
        return !1 !== c;
      };
      var z = { thin: 1, medium: 3, thick: 5 };
      this.getDocumentScrollOffset = function () {
        return {
          top: window.pageYOffset || document.documentElement.scrollTop,
          left: window.pageXOffset || document.documentElement.scrollLeft,
        };
      };
      this.getOffset = function () {
        if (a.isfixed) {
          var b = a.win.offset(),
            g = a.getDocumentScrollOffset();
          b.top -= g.top;
          b.left -= g.left;
          return b;
        }
        b = a.win.offset();
        if (!a.viewport) return b;
        g = a.viewport.offset();
        return { top: b.top - g.top, left: b.left - g.left };
      };
      this.updateScrollBar = function (b) {
        var g, c, e;
        if (a.ishwscroll)
          a.rail.css({
            height:
              a.win.innerHeight() -
              (a.opt.railpadding.top + a.opt.railpadding.bottom),
          }),
            a.railh &&
              a.railh.css({
                width:
                  a.win.innerWidth() -
                  (a.opt.railpadding.left + a.opt.railpadding.right),
              });
        else {
          var f = a.getOffset();
          g = f.top;
          c = f.left - (a.opt.railpadding.left + a.opt.railpadding.right);
          g += d(a.win, "border-top-width", !0);
          c += a.rail.align
            ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width
            : d(a.win, "border-left-width");
          if ((e = a.opt.railoffset))
            e.top && (g += e.top), e.left && (c += e.left);
          a.railslocked ||
            a.rail.css({
              top: g,
              left: c,
              height:
                (b ? b.h : a.win.innerHeight()) -
                (a.opt.railpadding.top + a.opt.railpadding.bottom),
            });
          a.zoom &&
            a.zoom.css({
              top: g + 1,
              left: 1 == a.rail.align ? c - 20 : c + a.rail.width + 4,
            });
          if (a.railh && !a.railslocked) {
            g = f.top;
            c = f.left;
            if ((e = a.opt.railhoffset))
              e.top && (g += e.top), e.left && (c += e.left);
            b = a.railh.align
              ? g +
                d(a.win, "border-top-width", !0) +
                a.win.innerHeight() -
                a.railh.height
              : g + d(a.win, "border-top-width", !0);
            c += d(a.win, "border-left-width");
            a.railh.css({
              top: b - (a.opt.railpadding.top + a.opt.railpadding.bottom),
              left: c,
              width: a.railh.width,
            });
          }
        }
      };
      this.doRailClick = function (b, g, c) {
        var d;
        a.railslocked ||
          (a.cancelEvent(b),
          g
            ? ((g = c ? a.doScrollLeft : a.doScrollTop),
              (d = c
                ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) *
                  a.scrollratio.x
                : (b.pageY - a.rail.offset().top - a.cursorheight / 2) *
                  a.scrollratio.y),
              g(d))
            : ((g = c ? a.doScrollLeftBy : a.doScrollBy),
              (d = c ? a.scroll.x : a.scroll.y),
              (b = c
                ? b.pageX - a.railh.offset().left
                : b.pageY - a.rail.offset().top),
              (c = c ? a.view.w : a.view.h),
              g(d >= b ? c : -c)));
      };
      a.hasanimationframe = v;
      a.hascancelanimationframe = w;
      a.hasanimationframe
        ? a.hascancelanimationframe ||
          (w = function () {
            a.cancelAnimationFrame = !0;
          })
        : ((v = function (a) {
            return setTimeout(a, 15 - (Math.floor(+new Date() / 1e3) % 16));
          }),
          (w = clearTimeout));
      this.init = function () {
        a.saved.css = [];
        if (e.isie7mobile || e.isoperamini) return !0;
        e.hasmstouch &&
          a.css(a.ispage ? f("html") : a.win, { _touchaction: "none" });
        var b =
          e.ismodernie || e.isie10
            ? { "-ms-overflow-style": "none" }
            : { "overflow-y": "hidden" };
        a.zindex = "auto";
        a.zindex =
          a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : l() || "auto";
        !a.ispage && "auto" != a.zindex && a.zindex > A && (A = a.zindex);
        a.isie &&
          0 == a.zindex &&
          "auto" == a.opt.zindex &&
          (a.zindex = "auto");
        if (!a.ispage || (!e.cantouch && !e.isieold && !e.isie9mobile)) {
          var c = a.docscroll;
          a.ispage && (c = a.haswrapper ? a.win : a.doc);
          e.isie9mobile || a.css(c, b);
          a.ispage &&
            e.isie7 &&
            ("BODY" == a.doc[0].nodeName
              ? a.css(f("html"), { "overflow-y": "hidden" })
              : "HTML" == a.doc[0].nodeName && a.css(f("body"), b));
          !e.isios ||
            a.ispage ||
            a.haswrapper ||
            a.css(f("body"), { "-webkit-overflow-scrolling": "touch" });
          var d = f(document.createElement("div"));
          d.css({
            position: "relative",
            top: 0,
            float: "right",
            width: a.opt.cursorwidth,
            height: 0,
            "background-color": a.opt.cursorcolor,
            border: a.opt.cursorborder,
            "background-clip": "padding-box",
            "-webkit-border-radius": a.opt.cursorborderradius,
            "-moz-border-radius": a.opt.cursorborderradius,
            "border-radius": a.opt.cursorborderradius,
          });
          d.hborder = parseFloat(d.outerHeight() - d.innerHeight());
          d.addClass("nicescroll-cursors");
          a.cursor = d;
          var m = f(document.createElement("div"));
          m.attr("id", a.id);
          m.addClass("nicescroll-rails nicescroll-rails-vr");
          var k,
            h,
            p = ["left", "right", "top", "bottom"],
            L;
          for (L in p)
            (h = p[L]),
              (k = a.opt.railpadding[h])
                ? m.css("padding-" + h, k + "px")
                : (a.opt.railpadding[h] = 0);
          m.append(d);
          m.width = Math.max(parseFloat(a.opt.cursorwidth), d.outerWidth());
          m.css({
            width: m.width + "px",
            zIndex: a.zindex,
            background: a.opt.background,
            cursor: "default",
          });
          m.visibility = !0;
          m.scrollable = !0;
          m.align = "left" == a.opt.railalign ? 0 : 1;
          a.rail = m;
          d = a.rail.drag = !1;
          !a.opt.boxzoom ||
            a.ispage ||
            e.isieold ||
            ((d = document.createElement("div")),
            a.bind(d, "click", a.doZoom),
            a.bind(d, "mouseenter", function () {
              a.zoom.css("opacity", a.opt.cursoropacitymax);
            }),
            a.bind(d, "mouseleave", function () {
              a.zoom.css("opacity", a.opt.cursoropacitymin);
            }),
            (a.zoom = f(d)),
            a.zoom.css({
              cursor: "pointer",
              zIndex: a.zindex,
              backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
              height: 18,
              width: 18,
              backgroundPosition: "0px 0px",
            }),
            a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom),
            e.cantouch &&
              a.opt.gesturezoom &&
              ((a.ongesturezoom = function (b) {
                1.5 < b.scale && a.doZoomIn(b);
                0.8 > b.scale && a.doZoomOut(b);
                return a.cancelEvent(b);
              }),
              a.bind(a.win, "gestureend", a.ongesturezoom)));
          a.railh = !1;
          var n;
          a.opt.horizrailenabled &&
            (a.css(c, { overflowX: "hidden" }),
            (d = f(document.createElement("div"))),
            d.css({
              position: "absolute",
              top: 0,
              height: a.opt.cursorwidth,
              width: 0,
              backgroundColor: a.opt.cursorcolor,
              border: a.opt.cursorborder,
              backgroundClip: "padding-box",
              "-webkit-border-radius": a.opt.cursorborderradius,
              "-moz-border-radius": a.opt.cursorborderradius,
              "border-radius": a.opt.cursorborderradius,
            }),
            e.isieold && d.css("overflow", "hidden"),
            (d.wborder = parseFloat(d.outerWidth() - d.innerWidth())),
            d.addClass("nicescroll-cursors"),
            (a.cursorh = d),
            (n = f(document.createElement("div"))),
            n.attr("id", a.id + "-hr"),
            n.addClass("nicescroll-rails nicescroll-rails-hr"),
            (n.height = Math.max(
              parseFloat(a.opt.cursorwidth),
              d.outerHeight()
            )),
            n.css({
              height: n.height + "px",
              zIndex: a.zindex,
              background: a.opt.background,
            }),
            n.append(d),
            (n.visibility = !0),
            (n.scrollable = !0),
            (n.align = "top" == a.opt.railvalign ? 0 : 1),
            (a.railh = n),
            (a.railh.drag = !1));
          a.ispage
            ? (m.css({ position: "fixed", top: 0, height: "100%" }),
              m.align ? m.css({ right: 0 }) : m.css({ left: 0 }),
              a.body.append(m),
              a.railh &&
                (n.css({ position: "fixed", left: 0, width: "100%" }),
                n.align ? n.css({ bottom: 0 }) : n.css({ top: 0 }),
                a.body.append(n)))
            : (a.ishwscroll
                ? ("static" == a.win.css("position") &&
                    a.css(a.win, { position: "relative" }),
                  (c = "HTML" == a.win[0].nodeName ? a.body : a.win),
                  f(c).scrollTop(0).scrollLeft(0),
                  a.zoom &&
                    (a.zoom.css({
                      position: "absolute",
                      top: 1,
                      right: 0,
                      "margin-right": m.width + 4,
                    }),
                    c.append(a.zoom)),
                  m.css({ position: "absolute", top: 0 }),
                  m.align ? m.css({ right: 0 }) : m.css({ left: 0 }),
                  c.append(m),
                  n &&
                    (n.css({ position: "absolute", left: 0, bottom: 0 }),
                    n.align ? n.css({ bottom: 0 }) : n.css({ top: 0 }),
                    c.append(n)))
                : ((a.isfixed = "fixed" == a.win.css("position")),
                  (c = a.isfixed ? "fixed" : "absolute"),
                  a.isfixed || (a.viewport = a.getViewport(a.win[0])),
                  a.viewport &&
                    ((a.body = a.viewport),
                    0 == /fixed|absolute/.test(a.viewport.css("position")) &&
                      a.css(a.viewport, { position: "relative" })),
                  m.css({ position: c }),
                  a.zoom && a.zoom.css({ position: c }),
                  a.updateScrollBar(),
                  a.body.append(m),
                  a.zoom && a.body.append(a.zoom),
                  a.railh && (n.css({ position: c }), a.body.append(n))),
              e.isios &&
                a.css(a.win, {
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  "-webkit-touch-callout": "none",
                }),
              e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"),
              e.iswebkit &&
                a.opt.disableoutline &&
                a.win.css("outline", "none"));
          !1 === a.opt.autohidemode
            ? ((a.autohidedom = !1),
              a.rail.css({ opacity: a.opt.cursoropacitymax }),
              a.railh && a.railh.css({ opacity: a.opt.cursoropacitymax }))
            : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode
            ? ((a.autohidedom = f().add(a.rail)),
              e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)),
              a.railh && (a.autohidedom = a.autohidedom.add(a.railh)),
              a.railh &&
                e.isie8 &&
                (a.autohidedom = a.autohidedom.add(a.cursorh)))
            : "scroll" == a.opt.autohidemode
            ? ((a.autohidedom = f().add(a.rail)),
              a.railh && (a.autohidedom = a.autohidedom.add(a.railh)))
            : "cursor" == a.opt.autohidemode
            ? ((a.autohidedom = f().add(a.cursor)),
              a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh)))
            : "hidden" == a.opt.autohidemode &&
              ((a.autohidedom = !1), a.hide(), (a.railslocked = !1));
          if (e.isie9mobile)
            (a.scrollmom = new M(a)),
              (a.onmangotouch = function () {
                var b = a.getScrollTop(),
                  c = a.getScrollLeft();
                if (
                  b == a.scrollmom.lastscrolly &&
                  c == a.scrollmom.lastscrollx
                )
                  return !0;
                var g = b - a.mangotouch.sy,
                  d = c - a.mangotouch.sx;
                if (
                  0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(g, 2)))
                ) {
                  var e = 0 > g ? -1 : 1,
                    f = 0 > d ? -1 : 1,
                    u = +new Date();
                  a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                  80 < u - a.mangotouch.tm ||
                  a.mangotouch.dry != e ||
                  a.mangotouch.drx != f
                    ? (a.scrollmom.stop(),
                      a.scrollmom.reset(c, b),
                      (a.mangotouch.sy = b),
                      (a.mangotouch.ly = b),
                      (a.mangotouch.sx = c),
                      (a.mangotouch.lx = c),
                      (a.mangotouch.dry = e),
                      (a.mangotouch.drx = f),
                      (a.mangotouch.tm = u))
                    : (a.scrollmom.stop(),
                      a.scrollmom.update(
                        a.mangotouch.sx - d,
                        a.mangotouch.sy - g
                      ),
                      (a.mangotouch.tm = u),
                      (g = Math.max(
                        Math.abs(a.mangotouch.ly - b),
                        Math.abs(a.mangotouch.lx - c)
                      )),
                      (a.mangotouch.ly = b),
                      (a.mangotouch.lx = c),
                      2 < g &&
                        (a.mangotouch.lazy = setTimeout(function () {
                          a.mangotouch.lazy = !1;
                          a.mangotouch.dry = 0;
                          a.mangotouch.drx = 0;
                          a.mangotouch.tm = 0;
                          a.scrollmom.doMomentum(30);
                        }, 100)));
                }
              }),
              (m = a.getScrollTop()),
              (n = a.getScrollLeft()),
              (a.mangotouch = {
                sy: m,
                ly: m,
                dry: 0,
                sx: n,
                lx: n,
                drx: 0,
                lazy: !1,
                tm: 0,
              }),
              a.bind(a.docscroll, "scroll", a.onmangotouch);
          else {
            if (
              e.cantouch ||
              a.istouchcapable ||
              a.opt.touchbehavior ||
              e.hasmstouch
            ) {
              a.scrollmom = new M(a);
              a.ontouchstart = function (b) {
                if (
                  b.pointerType &&
                  2 != b.pointerType &&
                  "touch" != b.pointerType
                )
                  return !1;
                a.hasmoving = !1;
                if (!a.railslocked) {
                  var c;
                  if (e.hasmstouch)
                    for (c = b.target ? b.target : !1; c; ) {
                      var g = f(c).getNiceScroll();
                      if (0 < g.length && g[0].me == a.me) break;
                      if (0 < g.length) return !1;
                      if ("DIV" == c.nodeName && c.id == a.id) break;
                      c = c.parentNode ? c.parentNode : !1;
                    }
                  a.cancelScroll();
                  if (
                    (c = a.getTarget(b)) &&
                    /INPUT/i.test(c.nodeName) &&
                    /range/i.test(c.type)
                  )
                    return a.stopPropagation(b);
                  !("clientX" in b) &&
                    "changedTouches" in b &&
                    ((b.clientX = b.changedTouches[0].clientX),
                    (b.clientY = b.changedTouches[0].clientY));
                  a.forcescreen &&
                    ((g = b),
                    (b = { original: b.original ? b.original : b }),
                    (b.clientX = g.screenX),
                    (b.clientY = g.screenY));
                  a.rail.drag = {
                    x: b.clientX,
                    y: b.clientY,
                    sx: a.scroll.x,
                    sy: a.scroll.y,
                    st: a.getScrollTop(),
                    sl: a.getScrollLeft(),
                    pt: 2,
                    dl: !1,
                  };
                  if (a.ispage || !a.opt.directionlockdeadzone)
                    a.rail.drag.dl = "f";
                  else {
                    var g = f(window).width(),
                      d = f(window).height(),
                      d = Math.max(
                        0,
                        Math.max(
                          document.body.scrollHeight,
                          document.documentElement.scrollHeight
                        ) - d
                      ),
                      g = Math.max(
                        0,
                        Math.max(
                          document.body.scrollWidth,
                          document.documentElement.scrollWidth
                        ) - g
                      );
                    a.rail.drag.ck =
                      !a.rail.scrollable && a.railh.scrollable
                        ? 0 < d
                          ? "v"
                          : !1
                        : a.rail.scrollable && !a.railh.scrollable
                        ? 0 < g
                          ? "h"
                          : !1
                        : !1;
                    a.rail.drag.ck || (a.rail.drag.dl = "f");
                  }
                  a.opt.touchbehavior &&
                    a.isiframe &&
                    e.isie &&
                    ((g = a.win.position()),
                    (a.rail.drag.x += g.left),
                    (a.rail.drag.y += g.top));
                  a.hasmoving = !1;
                  a.lastmouseup = !1;
                  a.scrollmom.reset(b.clientX, b.clientY);
                  if (!e.cantouch && !this.istouchcapable && !b.pointerType) {
                    if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))
                      return (
                        !a.ispage && e.hasmousecapture && c.setCapture(),
                        a.opt.touchbehavior
                          ? (c.onclick &&
                              !c._onclick &&
                              ((c._onclick = c.onclick),
                              (c.onclick = function (b) {
                                if (a.hasmoving) return !1;
                                c._onclick.call(this, b);
                              })),
                            a.cancelEvent(b))
                          : a.stopPropagation(b)
                      );
                    /SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) &&
                      ((pc = { tg: c, click: !1 }), (a.preventclick = pc));
                  }
                }
              };
              a.ontouchend = function (b) {
                if (!a.rail.drag) return !0;
                if (2 == a.rail.drag.pt) {
                  if (
                    b.pointerType &&
                    2 != b.pointerType &&
                    "touch" != b.pointerType
                  )
                    return !1;
                  a.scrollmom.doMomentum();
                  a.rail.drag = !1;
                  if (
                    a.hasmoving &&
                    ((a.lastmouseup = !0),
                    a.hideCursor(),
                    e.hasmousecapture && document.releaseCapture(),
                    !e.cantouch)
                  )
                    return a.cancelEvent(b);
                } else if (1 == a.rail.drag.pt) return a.onmouseup(b);
              };
              var q = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture;
              a.ontouchmove = function (b, c) {
                if (
                  !a.rail.drag ||
                  (b.targetTouches &&
                    a.opt.preventmultitouchscrolling &&
                    1 < b.targetTouches.length) ||
                  (b.pointerType &&
                    2 != b.pointerType &&
                    "touch" != b.pointerType)
                )
                  return !1;
                if (2 == a.rail.drag.pt) {
                  if (e.cantouch && e.isios && void 0 === b.original) return !0;
                  a.hasmoving = !0;
                  a.preventclick &&
                    !a.preventclick.click &&
                    ((a.preventclick.click = a.preventclick.tg.onclick || !1),
                    (a.preventclick.tg.onclick = a.onpreventclick));
                  b = f.extend({ original: b }, b);
                  "changedTouches" in b &&
                    ((b.clientX = b.changedTouches[0].clientX),
                    (b.clientY = b.changedTouches[0].clientY));
                  if (a.forcescreen) {
                    var g = b;
                    b = { original: b.original ? b.original : b };
                    b.clientX = g.screenX;
                    b.clientY = g.screenY;
                  }
                  var d,
                    g = (d = 0);
                  q &&
                    !c &&
                    ((d = a.win.position()), (g = -d.left), (d = -d.top));
                  var u = b.clientY + d;
                  d = u - a.rail.drag.y;
                  var m = b.clientX + g,
                    k = m - a.rail.drag.x,
                    h = a.rail.drag.st - d;
                  a.ishwscroll && a.opt.bouncescroll
                    ? 0 > h
                      ? (h = Math.round(h / 2))
                      : h > a.page.maxh &&
                        (h = a.page.maxh + Math.round((h - a.page.maxh) / 2))
                    : (0 > h && (u = h = 0),
                      h > a.page.maxh && ((h = a.page.maxh), (u = 0)));
                  var l;
                  a.railh &&
                    a.railh.scrollable &&
                    ((l = a.isrtlmode
                      ? k - a.rail.drag.sl
                      : a.rail.drag.sl - k),
                    a.ishwscroll && a.opt.bouncescroll
                      ? 0 > l
                        ? (l = Math.round(l / 2))
                        : l > a.page.maxw &&
                          (l = a.page.maxw + Math.round((l - a.page.maxw) / 2))
                      : (0 > l && (m = l = 0),
                        l > a.page.maxw && ((l = a.page.maxw), (m = 0))));
                  g = !1;
                  if (a.rail.drag.dl)
                    (g = !0),
                      "v" == a.rail.drag.dl
                        ? (l = a.rail.drag.sl)
                        : "h" == a.rail.drag.dl && (h = a.rail.drag.st);
                  else {
                    d = Math.abs(d);
                    var k = Math.abs(k),
                      C = a.opt.directionlockdeadzone;
                    if ("v" == a.rail.drag.ck) {
                      if (d > C && k <= 0.3 * d) return (a.rail.drag = !1), !0;
                      k > C &&
                        ((a.rail.drag.dl = "f"),
                        f("body").scrollTop(f("body").scrollTop()));
                    } else if ("h" == a.rail.drag.ck) {
                      if (k > C && d <= 0.3 * k) return (a.rail.drag = !1), !0;
                      d > C &&
                        ((a.rail.drag.dl = "f"),
                        f("body").scrollLeft(f("body").scrollLeft()));
                    }
                  }
                  a.synched("touchmove", function () {
                    a.rail.drag &&
                      2 == a.rail.drag.pt &&
                      (a.prepareTransition && a.prepareTransition(0),
                      a.rail.scrollable && a.setScrollTop(h),
                      a.scrollmom.update(m, u),
                      a.railh && a.railh.scrollable
                        ? (a.setScrollLeft(l), a.showCursor(h, l))
                        : a.showCursor(h),
                      e.isie10 && document.selection.clear());
                  });
                  e.ischrome && a.istouchcapable && (g = !1);
                  if (g) return a.cancelEvent(b);
                } else if (1 == a.rail.drag.pt) return a.onmousemove(b);
              };
            }
            a.onmousedown = function (b, c) {
              if (!a.rail.drag || 1 == a.rail.drag.pt) {
                if (a.railslocked) return a.cancelEvent(b);
                a.cancelScroll();
                a.rail.drag = {
                  x: b.clientX,
                  y: b.clientY,
                  sx: a.scroll.x,
                  sy: a.scroll.y,
                  pt: 1,
                  hr: !!c,
                };
                var g = a.getTarget(b);
                !a.ispage && e.hasmousecapture && g.setCapture();
                a.isiframe &&
                  !e.hasmousecapture &&
                  ((a.saved.csspointerevents = a.doc.css("pointer-events")),
                  a.css(a.doc, { "pointer-events": "none" }));
                a.hasmoving = !1;
                return a.cancelEvent(b);
              }
            };
            a.onmouseup = function (b) {
              if (a.rail.drag) {
                if (1 != a.rail.drag.pt) return !0;
                e.hasmousecapture && document.releaseCapture();
                a.isiframe &&
                  !e.hasmousecapture &&
                  a.doc.css("pointer-events", a.saved.csspointerevents);
                a.rail.drag = !1;
                a.hasmoving && a.triggerScrollEnd();
                return a.cancelEvent(b);
              }
            };
            a.onmousemove = function (b) {
              if (a.rail.drag) {
                if (1 == a.rail.drag.pt) {
                  if (e.ischrome && 0 == b.which) return a.onmouseup(b);
                  a.cursorfreezed = !0;
                  a.hasmoving = !0;
                  if (a.rail.drag.hr) {
                    a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
                    0 > a.scroll.x && (a.scroll.x = 0);
                    var c = a.scrollvaluemaxw;
                    a.scroll.x > c && (a.scroll.x = c);
                  } else
                    (a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y)),
                      0 > a.scroll.y && (a.scroll.y = 0),
                      (c = a.scrollvaluemax),
                      a.scroll.y > c && (a.scroll.y = c);
                  a.synched("mousemove", function () {
                    a.rail.drag &&
                      1 == a.rail.drag.pt &&
                      (a.showCursor(),
                      a.rail.drag.hr
                        ? a.hasreversehr
                          ? a.doScrollLeft(
                              a.scrollvaluemaxw -
                                Math.round(a.scroll.x * a.scrollratio.x),
                              a.opt.cursordragspeed
                            )
                          : a.doScrollLeft(
                              Math.round(a.scroll.x * a.scrollratio.x),
                              a.opt.cursordragspeed
                            )
                        : a.doScrollTop(
                            Math.round(a.scroll.y * a.scrollratio.y),
                            a.opt.cursordragspeed
                          ));
                  });
                  return a.cancelEvent(b);
                }
              } else a.checkarea = 0;
            };
            if (e.cantouch || a.opt.touchbehavior)
              (a.onpreventclick = function (b) {
                if (a.preventclick)
                  return (
                    (a.preventclick.tg.onclick = a.preventclick.click),
                    (a.preventclick = !1),
                    a.cancelEvent(b)
                  );
              }),
                a.bind(a.win, "mousedown", a.ontouchstart),
                (a.onclick = e.isios
                  ? !1
                  : function (b) {
                      return a.lastmouseup
                        ? ((a.lastmouseup = !1), a.cancelEvent(b))
                        : !0;
                    }),
                a.opt.grabcursorenabled &&
                  e.cursorgrabvalue &&
                  (a.css(a.ispage ? a.doc : a.win, {
                    cursor: e.cursorgrabvalue,
                  }),
                  a.css(a.rail, { cursor: e.cursorgrabvalue }));
            else {
              var r = function (b) {
                if (a.selectiondrag) {
                  if (b) {
                    var c = a.win.outerHeight();
                    b = b.pageY - a.selectiondrag.top;
                    0 < b && b < c && (b = 0);
                    b >= c && (b -= c);
                    a.selectiondrag.df = b;
                  }
                  0 != a.selectiondrag.df &&
                    (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)),
                    a.debounced(
                      "doselectionscroll",
                      function () {
                        r();
                      },
                      50
                    ));
                }
              };
              a.hasTextSelected =
                "getSelection" in document
                  ? function () {
                      return 0 < document.getSelection().rangeCount;
                    }
                  : "selection" in document
                  ? function () {
                      return "None" != document.selection.type;
                    }
                  : function () {
                      return !1;
                    };
              a.onselectionstart = function (b) {
                a.ispage || (a.selectiondrag = a.win.offset());
              };
              a.onselectionend = function (b) {
                a.selectiondrag = !1;
              };
              a.onselectiondrag = function (b) {
                a.selectiondrag &&
                  a.hasTextSelected() &&
                  a.debounced(
                    "selectionscroll",
                    function () {
                      r(b);
                    },
                    250
                  );
              };
            }
            e.hasw3ctouch
              ? (a.css(a.rail, { "touch-action": "none" }),
                a.css(a.cursor, { "touch-action": "none" }),
                a.bind(a.win, "pointerdown", a.ontouchstart),
                a.bind(document, "pointerup", a.ontouchend),
                a.bind(document, "pointermove", a.ontouchmove))
              : e.hasmstouch
              ? (a.css(a.rail, { "-ms-touch-action": "none" }),
                a.css(a.cursor, { "-ms-touch-action": "none" }),
                a.bind(a.win, "MSPointerDown", a.ontouchstart),
                a.bind(document, "MSPointerUp", a.ontouchend),
                a.bind(document, "MSPointerMove", a.ontouchmove),
                a.bind(a.cursor, "MSGestureHold", function (a) {
                  a.preventDefault();
                }),
                a.bind(a.cursor, "contextmenu", function (a) {
                  a.preventDefault();
                }))
              : this.istouchcapable &&
                (a.bind(a.win, "touchstart", a.ontouchstart),
                a.bind(document, "touchend", a.ontouchend),
                a.bind(document, "touchcancel", a.ontouchend),
                a.bind(document, "touchmove", a.ontouchmove));
            if (
              a.opt.cursordragontouch ||
              (!e.cantouch && !a.opt.touchbehavior)
            )
              a.rail.css({ cursor: "default" }),
                a.railh && a.railh.css({ cursor: "default" }),
                a.jqbind(a.rail, "mouseenter", function () {
                  if (!a.ispage && !a.win.is(":visible")) return !1;
                  a.canshowonmouseevent && a.showCursor();
                  a.rail.active = !0;
                }),
                a.jqbind(a.rail, "mouseleave", function () {
                  a.rail.active = !1;
                  a.rail.drag || a.hideCursor();
                }),
                a.opt.sensitiverail &&
                  (a.bind(a.rail, "click", function (b) {
                    a.doRailClick(b, !1, !1);
                  }),
                  a.bind(a.rail, "dblclick", function (b) {
                    a.doRailClick(b, !0, !1);
                  }),
                  a.bind(a.cursor, "click", function (b) {
                    a.cancelEvent(b);
                  }),
                  a.bind(a.cursor, "dblclick", function (b) {
                    a.cancelEvent(b);
                  })),
                a.railh &&
                  (a.jqbind(a.railh, "mouseenter", function () {
                    if (!a.ispage && !a.win.is(":visible")) return !1;
                    a.canshowonmouseevent && a.showCursor();
                    a.rail.active = !0;
                  }),
                  a.jqbind(a.railh, "mouseleave", function () {
                    a.rail.active = !1;
                    a.rail.drag || a.hideCursor();
                  }),
                  a.opt.sensitiverail &&
                    (a.bind(a.railh, "click", function (b) {
                      a.doRailClick(b, !1, !0);
                    }),
                    a.bind(a.railh, "dblclick", function (b) {
                      a.doRailClick(b, !0, !0);
                    }),
                    a.bind(a.cursorh, "click", function (b) {
                      a.cancelEvent(b);
                    }),
                    a.bind(a.cursorh, "dblclick", function (b) {
                      a.cancelEvent(b);
                    })));
            e.cantouch || a.opt.touchbehavior
              ? (a.bind(
                  e.hasmousecapture ? a.win : document,
                  "mouseup",
                  a.ontouchend
                ),
                a.bind(document, "mousemove", a.ontouchmove),
                a.onclick && a.bind(document, "click", a.onclick),
                a.opt.cursordragontouch
                  ? (a.bind(a.cursor, "mousedown", a.onmousedown),
                    a.bind(a.cursor, "mouseup", a.onmouseup),
                    a.cursorh &&
                      a.bind(a.cursorh, "mousedown", function (b) {
                        a.onmousedown(b, !0);
                      }),
                    a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup))
                  : (a.bind(a.rail, "mousedown", function (a) {
                      a.preventDefault();
                    }),
                    a.railh &&
                      a.bind(a.railh, "mousedown", function (a) {
                        a.preventDefault();
                      })))
              : (a.bind(
                  e.hasmousecapture ? a.win : document,
                  "mouseup",
                  a.onmouseup
                ),
                a.bind(document, "mousemove", a.onmousemove),
                a.onclick && a.bind(document, "click", a.onclick),
                a.bind(a.cursor, "mousedown", a.onmousedown),
                a.bind(a.cursor, "mouseup", a.onmouseup),
                a.railh &&
                  (a.bind(a.cursorh, "mousedown", function (b) {
                    a.onmousedown(b, !0);
                  }),
                  a.bind(a.cursorh, "mouseup", a.onmouseup)),
                !a.ispage &&
                  a.opt.enablescrollonselection &&
                  (a.bind(a.win[0], "mousedown", a.onselectionstart),
                  a.bind(document, "mouseup", a.onselectionend),
                  a.bind(a.cursor, "mouseup", a.onselectionend),
                  a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend),
                  a.bind(document, "mousemove", a.onselectiondrag)),
                a.zoom &&
                  (a.jqbind(a.zoom, "mouseenter", function () {
                    a.canshowonmouseevent && a.showCursor();
                    a.rail.active = !0;
                  }),
                  a.jqbind(a.zoom, "mouseleave", function () {
                    a.rail.active = !1;
                    a.rail.drag || a.hideCursor();
                  })));
            a.opt.enablemousewheel &&
              (a.isiframe ||
                a.mousewheel(
                  e.isie && a.ispage ? document : a.win,
                  a.onmousewheel
                ),
              a.mousewheel(a.rail, a.onmousewheel),
              a.railh && a.mousewheel(a.railh, a.onmousewheelhr));
            a.ispage ||
              e.cantouch ||
              /HTML|^BODY/.test(a.win[0].nodeName) ||
              (a.win.attr("tabindex") || a.win.attr({ tabindex: O++ }),
              a.jqbind(a.win, "focus", function (b) {
                B = a.getTarget(b).id || !0;
                a.hasfocus = !0;
                a.canshowonmouseevent && a.noticeCursor();
              }),
              a.jqbind(a.win, "blur", function (b) {
                B = !1;
                a.hasfocus = !1;
              }),
              a.jqbind(a.win, "mouseenter", function (b) {
                F = a.getTarget(b).id || !0;
                a.hasmousefocus = !0;
                a.canshowonmouseevent && a.noticeCursor();
              }),
              a.jqbind(a.win, "mouseleave", function () {
                F = !1;
                a.hasmousefocus = !1;
                a.rail.drag || a.hideCursor();
              }));
          }
          a.onkeypress = function (b) {
            if (a.railslocked && 0 == a.page.maxh) return !0;
            b = b ? b : window.e;
            var c = a.getTarget(b);
            if (
              (c &&
                /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) &&
                ((!c.getAttribute("type") && !c.type) ||
                  !/submit|button|cancel/i.tp)) ||
              f(c).attr("contenteditable")
            )
              return !0;
            if (
              a.hasfocus ||
              (a.hasmousefocus && !B) ||
              (a.ispage && !B && !F)
            ) {
              c = b.keyCode;
              if (a.railslocked && 27 != c) return a.cancelEvent(b);
              var g = b.ctrlKey || !1,
                d = b.shiftKey || !1,
                e = !1;
              switch (c) {
                case 38:
                case 63233:
                  a.doScrollBy(72);
                  e = !0;
                  break;
                case 40:
                case 63235:
                  a.doScrollBy(-72);
                  e = !0;
                  break;
                case 37:
                case 63232:
                  a.railh &&
                    (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), (e = !0));
                  break;
                case 39:
                case 63234:
                  a.railh &&
                    (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72),
                    (e = !0));
                  break;
                case 33:
                case 63276:
                  a.doScrollBy(a.view.h);
                  e = !0;
                  break;
                case 34:
                case 63277:
                  a.doScrollBy(-a.view.h);
                  e = !0;
                  break;
                case 36:
                case 63273:
                  a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                  e = !0;
                  break;
                case 35:
                case 63275:
                  a.railh && g
                    ? a.doScrollPos(a.page.maxw, a.page.maxh)
                    : a.doScrollTo(a.page.maxh);
                  e = !0;
                  break;
                case 32:
                  a.opt.spacebarenabled &&
                    (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h),
                    (e = !0));
                  break;
                case 27:
                  a.zoomactive && (a.doZoom(), (e = !0));
              }
              if (e) return a.cancelEvent(b);
            }
          };
          a.opt.enablekeyboard &&
            a.bind(
              document,
              e.isopera && !e.isopera12 ? "keypress" : "keydown",
              a.onkeypress
            );
          a.bind(document, "keydown", function (b) {
            b.ctrlKey && (a.wheelprevented = !0);
          });
          a.bind(document, "keyup", function (b) {
            b.ctrlKey || (a.wheelprevented = !1);
          });
          a.bind(window, "blur", function (b) {
            a.wheelprevented = !1;
          });
          a.bind(window, "resize", a.lazyResize);
          a.bind(window, "orientationchange", a.lazyResize);
          a.bind(window, "load", a.lazyResize);
          if (e.ischrome && !a.ispage && !a.haswrapper) {
            var t = a.win.attr("style"),
              m = parseFloat(a.win.css("width")) + 1;
            a.win.css("width", m);
            a.synched("chromefix", function () {
              a.win.attr("style", t);
            });
          }
          a.onAttributeChange = function (b) {
            a.lazyResize(a.isieold ? 250 : 30);
          };
          a.isie11 ||
            !1 === x ||
            ((a.observerbody = new x(function (b) {
              b.forEach(function (b) {
                if ("attributes" == b.type)
                  return f("body").hasClass("modal-open") &&
                    f("body").hasClass("modal-dialog") &&
                    !f.contains(f(".modal-dialog")[0], a.doc[0])
                    ? a.hide()
                    : a.show();
              });
              if (document.body.scrollHeight != a.page.maxh)
                return a.lazyResize(30);
            })),
            a.observerbody.observe(document.body, {
              childList: !0,
              subtree: !0,
              characterData: !1,
              attributes: !0,
              attributeFilter: ["class"],
            }));
          a.ispage ||
            a.haswrapper ||
            (!1 !== x
              ? ((a.observer = new x(function (b) {
                  b.forEach(a.onAttributeChange);
                })),
                a.observer.observe(a.win[0], {
                  childList: !0,
                  characterData: !1,
                  attributes: !0,
                  subtree: !1,
                }),
                (a.observerremover = new x(function (b) {
                  b.forEach(function (b) {
                    if (0 < b.removedNodes.length)
                      for (var c in b.removedNodes)
                        if (a && b.removedNodes[c] == a.win[0])
                          return a.remove();
                  });
                })),
                a.observerremover.observe(a.win[0].parentNode, {
                  childList: !0,
                  characterData: !1,
                  attributes: !1,
                  subtree: !1,
                }))
              : (a.bind(
                  a.win,
                  e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified",
                  a.onAttributeChange
                ),
                e.isie9 &&
                  a.win[0].attachEvent("onpropertychange", a.onAttributeChange),
                a.bind(a.win, "DOMNodeRemoved", function (b) {
                  b.target == a.win[0] && a.remove();
                })));
          !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
          a.istextarea &&
            (a.bind(a.win, "keydown", a.lazyResize),
            a.bind(a.win, "mouseup", a.lazyResize));
          a.lazyResize(30);
        }
        if ("IFRAME" == this.doc[0].nodeName) {
          var N = function () {
            a.iframexd = !1;
            var c;
            try {
              c =
                "contentDocument" in this
                  ? this.contentDocument
                  : this.contentWindow.document;
            } catch (g) {
              (a.iframexd = !0), (c = !1);
            }
            if (a.iframexd)
              return (
                "console" in window &&
                  console.log("NiceScroll error: policy restriced iframe"),
                !0
              );
            a.forcescreen = !0;
            a.isiframe &&
              ((a.iframe = {
                doc: f(c),
                html: a.doc.contents().find("html")[0],
                body: a.doc.contents().find("body")[0],
              }),
              (a.getContentSize = function () {
                return {
                  w: Math.max(
                    a.iframe.html.scrollWidth,
                    a.iframe.body.scrollWidth
                  ),
                  h: Math.max(
                    a.iframe.html.scrollHeight,
                    a.iframe.body.scrollHeight
                  ),
                };
              }),
              (a.docscroll = f(a.iframe.body)));
            if (!e.isios && a.opt.iframeautoresize && !a.isiframe) {
              a.win.scrollTop(0);
              a.doc.height("");
              var d = Math.max(
                c.getElementsByTagName("html")[0].scrollHeight,
                c.body.scrollHeight
              );
              a.doc.height(d);
            }
            a.lazyResize(30);
            e.isie7 && a.css(f(a.iframe.html), b);
            a.css(f(a.iframe.body), b);
            e.isios &&
              a.haswrapper &&
              a.css(f(c.body), { "-webkit-transform": "translate3d(0,0,0)" });
            "contentWindow" in this
              ? a.bind(this.contentWindow, "scroll", a.onscroll)
              : a.bind(c, "scroll", a.onscroll);
            a.opt.enablemousewheel && a.mousewheel(c, a.onmousewheel);
            a.opt.enablekeyboard &&
              a.bind(c, e.isopera ? "keypress" : "keydown", a.onkeypress);
            if (e.cantouch || a.opt.touchbehavior)
              a.bind(c, "mousedown", a.ontouchstart),
                a.bind(c, "mousemove", function (b) {
                  return a.ontouchmove(b, !0);
                }),
                a.opt.grabcursorenabled &&
                  e.cursorgrabvalue &&
                  a.css(f(c.body), { cursor: e.cursorgrabvalue });
            a.bind(c, "mouseup", a.ontouchend);
            a.zoom &&
              (a.opt.dblclickzoom && a.bind(c, "dblclick", a.doZoom),
              a.ongesturezoom && a.bind(c, "gestureend", a.ongesturezoom));
          };
          this.doc[0].readyState &&
            "complete" == this.doc[0].readyState &&
            setTimeout(function () {
              N.call(a.doc[0], !1);
            }, 500);
          a.bind(this.doc, "load", N);
        }
      };
      this.showCursor = function (b, c) {
        a.cursortimeout &&
          (clearTimeout(a.cursortimeout), (a.cursortimeout = 0));
        if (a.rail) {
          a.autohidedom &&
            (a.autohidedom.stop().css({ opacity: a.opt.cursoropacitymax }),
            (a.cursoractive = !0));
          (a.rail.drag && 1 == a.rail.drag.pt) ||
            (void 0 !== b &&
              !1 !== b &&
              (a.scroll.y = Math.round((1 * b) / a.scrollratio.y)),
            void 0 !== c &&
              (a.scroll.x = Math.round((1 * c) / a.scrollratio.x)));
          a.cursor.css({
            height: a.cursorheight,
            top: a.scroll.y,
          });
          if (a.cursorh) {
            var d = a.hasreversehr
              ? a.scrollvaluemaxw - a.scroll.x
              : a.scroll.x;
            !a.rail.align && a.rail.visibility
              ? a.cursorh.css({ width: a.cursorwidth, left: d + a.rail.width })
              : a.cursorh.css({ width: a.cursorwidth, left: d });
            a.cursoractive = !0;
          }
          a.zoom && a.zoom.stop().css({ opacity: a.opt.cursoropacitymax });
        }
      };
      this.hideCursor = function (b) {
        a.cursortimeout ||
          !a.rail ||
          !a.autohidedom ||
          (a.hasmousefocus && "leave" == a.opt.autohidemode) ||
          (a.cursortimeout = setTimeout(function () {
            (a.rail.active && a.showonmouseevent) ||
              (a.autohidedom
                .stop()
                .animate({ opacity: a.opt.cursoropacitymin }),
              a.zoom &&
                a.zoom.stop().animate({ opacity: a.opt.cursoropacitymin }),
              (a.cursoractive = !1));
            a.cursortimeout = 0;
          }, b || a.opt.hidecursordelay));
      };
      this.noticeCursor = function (b, c, d) {
        a.showCursor(c, d);
        a.rail.active || a.hideCursor(b);
      };
      this.getContentSize = a.ispage
        ? function () {
            return {
              w: Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth
              ),
              h: Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              ),
            };
          }
        : a.haswrapper
        ? function () {
            return {
              w:
                a.doc.outerWidth() +
                parseInt(a.win.css("paddingLeft")) +
                parseInt(a.win.css("paddingRight")),
              h:
                a.doc.outerHeight() +
                parseInt(a.win.css("paddingTop")) +
                parseInt(a.win.css("paddingBottom")),
            };
          }
        : function () {
            return {
              w: a.docscroll[0].scrollWidth,
              h: a.docscroll[0].scrollHeight,
            };
          };
      this.onResize = function (b, c) {
        if (!a || !a.win) return !1;
        if (!a.haswrapper && !a.ispage) {
          if ("none" == a.win.css("display"))
            return a.visibility && a.hideRail().hideRailHr(), !1;
          a.hidden || a.visibility || a.showRail().showRailHr();
        }
        var d = a.page.maxh,
          e = a.page.maxw,
          f = a.view.h,
          k = a.view.w;
        a.view = {
          w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
          h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight),
        };
        a.page = c ? c : a.getContentSize();
        a.page.maxh = Math.max(0, a.page.h - a.view.h);
        a.page.maxw = Math.max(0, a.page.w - a.view.w);
        if (
          a.page.maxh == d &&
          a.page.maxw == e &&
          a.view.w == k &&
          a.view.h == f
        ) {
          if (a.ispage) return a;
          d = a.win.offset();
          if (
            a.lastposition &&
            ((e = a.lastposition), e.top == d.top && e.left == d.left)
          )
            return a;
          a.lastposition = d;
        }
        0 == a.page.maxh
          ? (a.hideRail(),
            (a.scrollvaluemax = 0),
            (a.scroll.y = 0),
            (a.scrollratio.y = 0),
            (a.cursorheight = 0),
            a.setScrollTop(0),
            a.rail && (a.rail.scrollable = !1))
          : ((a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom),
            (a.rail.scrollable = !0));
        0 == a.page.maxw
          ? (a.hideRailHr(),
            (a.scrollvaluemaxw = 0),
            (a.scroll.x = 0),
            (a.scrollratio.x = 0),
            (a.cursorwidth = 0),
            a.setScrollLeft(0),
            a.railh && (a.railh.scrollable = !1))
          : ((a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right),
            a.railh && (a.railh.scrollable = a.opt.horizrailenabled));
        a.railslocked = a.locked || (0 == a.page.maxh && 0 == a.page.maxw);
        if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1;
        a.hidden || a.visibility
          ? !a.railh || a.hidden || a.railh.visibility || a.showRailHr()
          : a.showRail().showRailHr();
        a.istextarea &&
          a.win.css("resize") &&
          "none" != a.win.css("resize") &&
          (a.view.h -= 20);
        a.cursorheight = Math.min(
          a.view.h,
          Math.round((a.view.h / a.page.h) * a.view.h)
        );
        a.cursorheight = a.opt.cursorfixedheight
          ? a.opt.cursorfixedheight
          : Math.max(a.opt.cursorminheight, a.cursorheight);
        a.cursorwidth = Math.min(
          a.view.w,
          Math.round((a.view.w / a.page.w) * a.view.w)
        );
        a.cursorwidth = a.opt.cursorfixedheight
          ? a.opt.cursorfixedheight
          : Math.max(a.opt.cursorminheight, a.cursorwidth);
        a.scrollvaluemax =
          a.view.h -
          a.cursorheight -
          a.cursor.hborder -
          (a.opt.railpadding.top + a.opt.railpadding.bottom);
        a.railh &&
          ((a.railh.width =
            0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w),
          (a.scrollvaluemaxw =
            a.railh.width -
            a.cursorwidth -
            a.cursorh.wborder -
            (a.opt.railpadding.left + a.opt.railpadding.right)));
        a.ispage || a.updateScrollBar(a.view);
        a.scrollratio = {
          x: a.page.maxw / a.scrollvaluemaxw,
          y: a.page.maxh / a.scrollvaluemax,
        };
        a.getScrollTop() > a.page.maxh
          ? a.doScrollTop(a.page.maxh)
          : ((a.scroll.y = Math.round(
              a.getScrollTop() * (1 / a.scrollratio.y)
            )),
            (a.scroll.x = Math.round(
              a.getScrollLeft() * (1 / a.scrollratio.x)
            )),
            a.cursoractive && a.noticeCursor());
        a.scroll.y &&
          0 == a.getScrollTop() &&
          a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
        return a;
      };
      this.resize = a.onResize;
      this.hlazyresize = 0;
      this.lazyResize = function (b) {
        a.haswrapper || a.hide();
        a.hlazyresize && clearTimeout(a.hlazyresize);
        a.hlazyresize = setTimeout(function () {
          a && a.show().resize();
        }, 240);
        return a;
      };
      this.jqbind = function (b, c, d) {
        a.events.push({ e: b, n: c, f: d, q: !0 });
        f(b).bind(c, d);
      };
      this.mousewheel = function (b, c, d) {
        b = "jquery" in b ? b[0] : b;
        if ("onwheel" in document.createElement("div"))
          a._bind(b, "wheel", c, d || !1);
        else {
          var e =
            void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
          q(b, e, c, d || !1);
          "DOMMouseScroll" == e && q(b, "MozMousePixelScroll", c, d || !1);
        }
      };
      e.haseventlistener
        ? ((this.bind = function (b, c, d, e) {
            a._bind("jquery" in b ? b[0] : b, c, d, e || !1);
          }),
          (this._bind = function (b, c, d, e) {
            a.events.push({ e: b, n: c, f: d, b: e, q: !1 });
            b.addEventListener(c, d, e || !1);
          }),
          (this.cancelEvent = function (a) {
            if (!a) return !1;
            a = a.original ? a.original : a;
            a.cancelable && a.preventDefault();
            a.stopPropagation();
            a.preventManipulation && a.preventManipulation();
            return !1;
          }),
          (this.stopPropagation = function (a) {
            if (!a) return !1;
            a = a.original ? a.original : a;
            a.stopPropagation();
            return !1;
          }),
          (this._unbind = function (a, c, d, e) {
            a.removeEventListener(c, d, e);
          }))
        : ((this.bind = function (b, c, d, e) {
            var f = "jquery" in b ? b[0] : b;
            a._bind(f, c, function (b) {
              (b = b || window.event || !1) &&
                b.srcElement &&
                (b.target = b.srcElement);
              "pageY" in b ||
                ((b.pageX = b.clientX + document.documentElement.scrollLeft),
                (b.pageY = b.clientY + document.documentElement.scrollTop));
              return !1 === d.call(f, b) || !1 === e ? a.cancelEvent(b) : !0;
            });
          }),
          (this._bind = function (b, c, d, e) {
            a.events.push({ e: b, n: c, f: d, b: e, q: !1 });
            b.attachEvent ? b.attachEvent("on" + c, d) : (b["on" + c] = d);
          }),
          (this.cancelEvent = function (a) {
            a = window.event || !1;
            if (!a) return !1;
            a.cancelBubble = !0;
            a.cancel = !0;
            return (a.returnValue = !1);
          }),
          (this.stopPropagation = function (a) {
            a = window.event || !1;
            if (!a) return !1;
            a.cancelBubble = !0;
            return !1;
          }),
          (this._unbind = function (a, c, d, e) {
            a.detachEvent ? a.detachEvent("on" + c, d) : (a["on" + c] = !1);
          }));
      this.unbindAll = function () {
        for (var b = 0; b < a.events.length; b++) {
          var c = a.events[b];
          c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b);
        }
      };
      this.showRail = function () {
        0 == a.page.maxh ||
          (!a.ispage && "none" == a.win.css("display")) ||
          ((a.visibility = !0),
          (a.rail.visibility = !0),
          a.rail.css("display", "block"));
        return a;
      };
      this.showRailHr = function () {
        if (!a.railh) return a;
        0 == a.page.maxw ||
          (!a.ispage && "none" == a.win.css("display")) ||
          ((a.railh.visibility = !0), a.railh.css("display", "block"));
        return a;
      };
      this.hideRail = function () {
        a.visibility = !1;
        a.rail.visibility = !1;
        a.rail.css("display", "none");
        return a;
      };
      this.hideRailHr = function () {
        if (!a.railh) return a;
        a.railh.visibility = !1;
        a.railh.css("display", "none");
        return a;
      };
      this.show = function () {
        a.hidden = !1;
        a.railslocked = !1;
        return a.showRail().showRailHr();
      };
      this.hide = function () {
        a.hidden = !0;
        a.railslocked = !0;
        return a.hideRail().hideRailHr();
      };
      this.toggle = function () {
        return a.hidden ? a.show() : a.hide();
      };
      this.remove = function () {
        a.stop();
        a.cursortimeout && clearTimeout(a.cursortimeout);
        for (var b in a.delaylist) a.delaylist[b] && w(a.delaylist[b].h);
        a.doZoomOut();
        a.unbindAll();
        e.isie9 &&
          a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
        !1 !== a.observer && a.observer.disconnect();
        !1 !== a.observerremover && a.observerremover.disconnect();
        !1 !== a.observerbody && a.observerbody.disconnect();
        a.events = null;
        a.cursor && a.cursor.remove();
        a.cursorh && a.cursorh.remove();
        a.rail && a.rail.remove();
        a.railh && a.railh.remove();
        a.zoom && a.zoom.remove();
        for (b = 0; b < a.saved.css.length; b++) {
          var c = a.saved.css[b];
          c[0].css(c[1], void 0 === c[2] ? "" : c[2]);
        }
        a.saved = !1;
        a.me.data("__nicescroll", "");
        var d = f.nicescroll;
        d.each(function (b) {
          if (this && this.id === a.id) {
            delete d[b];
            for (var c = ++b; c < d.length; c++, b++) d[b] = d[c];
            d.length--;
            d.length && delete d[d.length];
          }
        });
        for (var k in a) (a[k] = null), delete a[k];
        a = null;
      };
      this.scrollstart = function (b) {
        this.onscrollstart = b;
        return a;
      };
      this.scrollend = function (b) {
        this.onscrollend = b;
        return a;
      };
      this.scrollcancel = function (b) {
        this.onscrollcancel = b;
        return a;
      };
      this.zoomin = function (b) {
        this.onzoomin = b;
        return a;
      };
      this.zoomout = function (b) {
        this.onzoomout = b;
        return a;
      };
      this.isScrollable = function (a) {
        a = a.target ? a.target : a;
        if ("OPTION" == a.nodeName) return !0;
        for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName); ) {
          var c = f(a),
            c =
              c.css("overflowY") ||
              c.css("overflowX") ||
              c.css("overflow") ||
              "";
          if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight;
          a = a.parentNode ? a.parentNode : !1;
        }
        return !1;
      };
      this.getViewport = function (a) {
        for (
          a = a && a.parentNode ? a.parentNode : !1;
          a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);

        ) {
          var c = f(a);
          if (/fixed|absolute/.test(c.css("position"))) return c;
          var d =
            c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
          if (
            (/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight) ||
            0 < c.getNiceScroll().length
          )
            return c;
          a = a.parentNode ? a.parentNode : !1;
        }
        return !1;
      };
      this.triggerScrollEnd = function () {
        if (a.onscrollend) {
          var b = a.getScrollLeft(),
            c = a.getScrollTop();
          a.onscrollend.call(a, {
            type: "scrollend",
            current: { x: b, y: c },
            end: { x: b, y: c },
          });
        }
      };
      this.onmousewheel = function (b) {
        if (!a.wheelprevented) {
          if (a.railslocked)
            return a.debounced("checkunlock", a.resize, 250), !0;
          if (a.rail.drag) return a.cancelEvent(b);
          "auto" == a.opt.oneaxismousemode &&
            0 != b.deltaX &&
            (a.opt.oneaxismousemode = !1);
          if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable)
            return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) : !0;
          var c = +new Date(),
            d = !1;
          a.opt.preservenativescrolling &&
            a.checkarea + 600 < c &&
            ((a.nativescrollingarea = a.isScrollable(b)), (d = !0));
          a.checkarea = c;
          if (a.nativescrollingarea) return !0;
          if ((b = t(b, !1, d))) a.checkarea = 0;
          return b;
        }
      };
      this.onmousewheelhr = function (b) {
        if (!a.wheelprevented) {
          if (a.railslocked || !a.railh.scrollable) return !0;
          if (a.rail.drag) return a.cancelEvent(b);
          var c = +new Date(),
            d = !1;
          a.opt.preservenativescrolling &&
            a.checkarea + 600 < c &&
            ((a.nativescrollingarea = a.isScrollable(b)), (d = !0));
          a.checkarea = c;
          return a.nativescrollingarea
            ? !0
            : a.railslocked
            ? a.cancelEvent(b)
            : t(b, !0, d);
        }
      };
      this.stop = function () {
        a.cancelScroll();
        a.scrollmon && a.scrollmon.stop();
        a.cursorfreezed = !1;
        a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
        a.noticeCursor();
        return a;
      };
      this.getTransitionSpeed = function (b) {
        b = Math.min(
          Math.round(10 * a.opt.scrollspeed),
          Math.round((b / 20) * a.opt.scrollspeed)
        );
        return 20 < b ? b : 0;
      };
      a.opt.smoothscroll
        ? a.ishwscroll &&
          e.hastransition &&
          a.opt.usetransition &&
          a.opt.smoothscroll
          ? ((this.prepareTransition = function (b, c) {
              var d = c ? (20 < b ? b : 0) : a.getTransitionSpeed(b),
                f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : "";
              (a.lasttransitionstyle && a.lasttransitionstyle == f) ||
                ((a.lasttransitionstyle = f), a.doc.css(e.transitionstyle, f));
              return d;
            }),
            (this.doScrollLeft = function (b, c) {
              var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
              a.doScrollPos(b, d, c);
            }),
            (this.doScrollTop = function (b, c) {
              var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
              a.doScrollPos(d, b, c);
            }),
            (this.doScrollPos = function (b, c, d) {
              var f = a.getScrollTop(),
                k = a.getScrollLeft();
              (0 > (a.newscrolly - f) * (c - f) ||
                0 > (a.newscrollx - k) * (b - k)) &&
                a.cancelScroll();
              0 == a.opt.bouncescroll &&
                (0 > c ? (c = 0) : c > a.page.maxh && (c = a.page.maxh),
                0 > b ? (b = 0) : b > a.page.maxw && (b = a.page.maxw));
              if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly)
                return !1;
              a.newscrolly = c;
              a.newscrollx = b;
              a.newscrollspeed = d || !1;
              if (a.timer) return !1;
              a.timer = setTimeout(function () {
                var d = a.getScrollTop(),
                  f = a.getScrollLeft(),
                  k = Math.round(
                    Math.sqrt(Math.pow(b - f, 2) + Math.pow(c - d, 2))
                  ),
                  k =
                    a.newscrollspeed && 1 < a.newscrollspeed
                      ? a.newscrollspeed
                      : a.getTransitionSpeed(k);
                a.newscrollspeed &&
                  1 >= a.newscrollspeed &&
                  (k *= a.newscrollspeed);
                a.prepareTransition(k, !0);
                a.timerscroll &&
                  a.timerscroll.tm &&
                  clearInterval(a.timerscroll.tm);
                0 < k &&
                  (!a.scrollrunning &&
                    a.onscrollstart &&
                    a.onscrollstart.call(a, {
                      type: "scrollstart",
                      current: { x: f, y: d },
                      request: { x: b, y: c },
                      end: { x: a.newscrollx, y: a.newscrolly },
                      speed: k,
                    }),
                  e.transitionend
                    ? a.scrollendtrapped ||
                      ((a.scrollendtrapped = !0),
                      a.bind(
                        a.doc,
                        e.transitionend,
                        a.onScrollTransitionEnd,
                        !1
                      ))
                    : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped),
                      (a.scrollendtrapped = setTimeout(
                        a.onScrollTransitionEnd,
                        k
                      ))),
                  (a.timerscroll = {
                    bz: new D(d, a.newscrolly, k, 0, 0, 0.58, 1),
                    bh: new D(f, a.newscrollx, k, 0, 0, 0.58, 1),
                  }),
                  a.cursorfreezed ||
                    (a.timerscroll.tm = setInterval(function () {
                      a.showCursor(a.getScrollTop(), a.getScrollLeft());
                    }, 60)));
                a.synched("doScroll-set", function () {
                  a.timer = 0;
                  a.scrollendtrapped && (a.scrollrunning = !0);
                  a.setScrollTop(a.newscrolly);
                  a.setScrollLeft(a.newscrollx);
                  if (!a.scrollendtrapped) a.onScrollTransitionEnd();
                });
              }, 50);
            }),
            (this.cancelScroll = function () {
              if (!a.scrollendtrapped) return !0;
              var b = a.getScrollTop(),
                c = a.getScrollLeft();
              a.scrollrunning = !1;
              e.transitionend || clearTimeout(e.transitionend);
              a.scrollendtrapped = !1;
              a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
              a.prepareTransition(0);
              a.setScrollTop(b);
              a.railh && a.setScrollLeft(c);
              a.timerscroll &&
                a.timerscroll.tm &&
                clearInterval(a.timerscroll.tm);
              a.timerscroll = !1;
              a.cursorfreezed = !1;
              a.showCursor(b, c);
              return a;
            }),
            (this.onScrollTransitionEnd = function () {
              a.scrollendtrapped &&
                a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
              a.scrollendtrapped = !1;
              a.prepareTransition(0);
              a.timerscroll &&
                a.timerscroll.tm &&
                clearInterval(a.timerscroll.tm);
              a.timerscroll = !1;
              var b = a.getScrollTop(),
                c = a.getScrollLeft();
              a.setScrollTop(b);
              a.railh && a.setScrollLeft(c);
              a.noticeCursor(!1, b, c);
              a.cursorfreezed = !1;
              0 > b ? (b = 0) : b > a.page.maxh && (b = a.page.maxh);
              0 > c ? (c = 0) : c > a.page.maxw && (c = a.page.maxw);
              if (b != a.newscrolly || c != a.newscrollx)
                return a.doScrollPos(c, b, a.opt.snapbackspeed);
              a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
              a.scrollrunning = !1;
            }))
          : ((this.doScrollLeft = function (b, c) {
              var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
              a.doScrollPos(b, d, c);
            }),
            (this.doScrollTop = function (b, c) {
              var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
              a.doScrollPos(d, b, c);
            }),
            (this.doScrollPos = function (b, c, d) {
              function e() {
                if (a.cancelAnimationFrame) return !0;
                a.scrollrunning = !0;
                if ((p = 1 - p)) return (a.timer = v(e) || 1);
                var b = 0,
                  c,
                  d,
                  f = (d = a.getScrollTop());
                if (a.dst.ay) {
                  f = a.bzscroll
                    ? a.dst.py + a.bzscroll.getNow() * a.dst.ay
                    : a.newscrolly;
                  c = f - d;
                  if (
                    (0 > c && f < a.newscrolly) ||
                    (0 < c && f > a.newscrolly)
                  )
                    f = a.newscrolly;
                  a.setScrollTop(f);
                  f == a.newscrolly && (b = 1);
                } else b = 1;
                d = c = a.getScrollLeft();
                if (a.dst.ax) {
                  d = a.bzscroll
                    ? a.dst.px + a.bzscroll.getNow() * a.dst.ax
                    : a.newscrollx;
                  c = d - c;
                  if (
                    (0 > c && d < a.newscrollx) ||
                    (0 < c && d > a.newscrollx)
                  )
                    d = a.newscrollx;
                  a.setScrollLeft(d);
                  d == a.newscrollx && (b += 1);
                } else b += 1;
                2 == b
                  ? ((a.timer = 0),
                    (a.cursorfreezed = !1),
                    (a.bzscroll = !1),
                    (a.scrollrunning = !1),
                    0 > f
                      ? (f = 0)
                      : f > a.page.maxh && (f = Math.max(0, a.page.maxh)),
                    0 > d ? (d = 0) : d > a.page.maxw && (d = a.page.maxw),
                    d != a.newscrollx || f != a.newscrolly
                      ? a.doScrollPos(d, f)
                      : a.onscrollend && a.triggerScrollEnd())
                  : (a.timer = v(e) || 1);
              }
              c = void 0 === c || !1 === c ? a.getScrollTop(!0) : c;
              if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0;
              a.timer && w(a.timer);
              a.timer = 0;
              var f = a.getScrollTop(),
                k = a.getScrollLeft();
              (0 > (a.newscrolly - f) * (c - f) ||
                0 > (a.newscrollx - k) * (b - k)) &&
                a.cancelScroll();
              a.newscrolly = c;
              a.newscrollx = b;
              (a.bouncescroll && a.rail.visibility) ||
                (0 > a.newscrolly
                  ? (a.newscrolly = 0)
                  : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
              (a.bouncescroll && a.railh.visibility) ||
                (0 > a.newscrollx
                  ? (a.newscrollx = 0)
                  : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw));
              a.dst = {};
              a.dst.x = b - k;
              a.dst.y = c - f;
              a.dst.px = k;
              a.dst.py = f;
              var h = Math.round(
                Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2))
              );
              a.dst.ax = a.dst.x / h;
              a.dst.ay = a.dst.y / h;
              var l = 0,
                n = h;
              0 == a.dst.x
                ? ((l = f), (n = c), (a.dst.ay = 1), (a.dst.py = 0))
                : 0 == a.dst.y &&
                  ((l = k), (n = b), (a.dst.ax = 1), (a.dst.px = 0));
              h = a.getTransitionSpeed(h);
              d && 1 >= d && (h *= d);
              a.bzscroll =
                0 < h
                  ? a.bzscroll
                    ? a.bzscroll.update(n, h)
                    : new D(l, n, h, 0, 1, 0, 1)
                  : !1;
              if (!a.timer) {
                ((f == a.page.maxh && c >= a.page.maxh) ||
                  (k == a.page.maxw && b >= a.page.maxw)) &&
                  a.checkContentSize();
                var p = 1;
                a.cancelAnimationFrame = !1;
                a.timer = 1;
                a.onscrollstart &&
                  !a.scrollrunning &&
                  a.onscrollstart.call(a, {
                    type: "scrollstart",
                    current: { x: k, y: f },
                    request: { x: b, y: c },
                    end: { x: a.newscrollx, y: a.newscrolly },
                    speed: h,
                  });
                e();
                ((f == a.page.maxh && c >= f) ||
                  (k == a.page.maxw && b >= k)) &&
                  a.checkContentSize();
                a.noticeCursor();
              }
            }),
            (this.cancelScroll = function () {
              a.timer && w(a.timer);
              a.timer = 0;
              a.bzscroll = !1;
              a.scrollrunning = !1;
              return a;
            }))
        : ((this.doScrollLeft = function (b, c) {
            var d = a.getScrollTop();
            a.doScrollPos(b, d, c);
          }),
          (this.doScrollTop = function (b, c) {
            var d = a.getScrollLeft();
            a.doScrollPos(d, b, c);
          }),
          (this.doScrollPos = function (b, c, d) {
            var e = b > a.page.maxw ? a.page.maxw : b;
            0 > e && (e = 0);
            var f = c > a.page.maxh ? a.page.maxh : c;
            0 > f && (f = 0);
            a.synched("scroll", function () {
              a.setScrollTop(f);
              a.setScrollLeft(e);
            });
          }),
          (this.cancelScroll = function () {}));
      this.doScrollBy = function (b, c) {
        var d = 0,
          d = c
            ? Math.floor((a.scroll.y - b) * a.scrollratio.y)
            : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
        if (a.bouncescroll) {
          var e = Math.round(a.view.h / 2);
          d < -e ? (d = -e) : d > a.page.maxh + e && (d = a.page.maxh + e);
        }
        a.cursorfreezed = !1;
        e = a.getScrollTop(!0);
        if (0 > d && 0 >= e) return a.noticeCursor();
        if (d > a.page.maxh && e >= a.page.maxh)
          return a.checkContentSize(), a.noticeCursor();
        a.doScrollTop(d);
      };
      this.doScrollLeftBy = function (b, c) {
        var d = 0,
          d = c
            ? Math.floor((a.scroll.x - b) * a.scrollratio.x)
            : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
        if (a.bouncescroll) {
          var e = Math.round(a.view.w / 2);
          d < -e ? (d = -e) : d > a.page.maxw + e && (d = a.page.maxw + e);
        }
        a.cursorfreezed = !1;
        e = a.getScrollLeft(!0);
        if ((0 > d && 0 >= e) || (d > a.page.maxw && e >= a.page.maxw))
          return a.noticeCursor();
        a.doScrollLeft(d);
      };
      this.doScrollTo = function (b, c) {
        a.cursorfreezed = !1;
        a.doScrollTop(b);
      };
      this.checkContentSize = function () {
        var b = a.getContentSize();
        (b.h == a.page.h && b.w == a.page.w) || a.resize(!1, b);
      };
      a.onscroll = function (b) {
        a.rail.drag ||
          a.cursorfreezed ||
          a.synched("scroll", function () {
            a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
            a.railh &&
              (a.scroll.x = Math.round(
                a.getScrollLeft() * (1 / a.scrollratio.x)
              ));
            a.noticeCursor();
          });
      };
      a.bind(a.docscroll, "scroll", a.onscroll);
      this.doZoomIn = function (b) {
        if (!a.zoomactive) {
          a.zoomactive = !0;
          a.zoomrestore = { style: {} };
          var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(
              " "
            ),
            d = a.win[0].style,
            k;
          for (k in c) {
            var h = c[k];
            a.zoomrestore.style[h] = void 0 !== d[h] ? d[h] : "";
          }
          a.zoomrestore.style.width = a.win.css("width");
          a.zoomrestore.style.height = a.win.css("height");
          a.zoomrestore.padding = {
            w: a.win.outerWidth() - a.win.width(),
            h: a.win.outerHeight() - a.win.height(),
          };
          e.isios4 &&
            ((a.zoomrestore.scrollTop = f(window).scrollTop()),
            f(window).scrollTop(0));
          a.win.css({
            position: e.isios4 ? "absolute" : "fixed",
            top: 0,
            left: 0,
            zIndex: A + 100,
            margin: 0,
          });
          c = a.win.css("backgroundColor");
          ("" == c ||
            /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) &&
            a.win.css("backgroundColor", "#fff");
          a.rail.css({ zIndex: A + 101 });
          a.zoom.css({ zIndex: A + 102 });
          a.zoom.css("backgroundPosition", "0px -18px");
          a.resizeZoom();
          a.onzoomin && a.onzoomin.call(a);
          return a.cancelEvent(b);
        }
      };
      this.doZoomOut = function (b) {
        if (a.zoomactive)
          return (
            (a.zoomactive = !1),
            a.win.css("margin", ""),
            a.win.css(a.zoomrestore.style),
            e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop),
            a.rail.css({ "z-index": a.zindex }),
            a.zoom.css({ "z-index": a.zindex }),
            (a.zoomrestore = !1),
            a.zoom.css("backgroundPosition", "0px 0px"),
            a.onResize(),
            a.onzoomout && a.onzoomout.call(a),
            a.cancelEvent(b)
          );
      };
      this.doZoom = function (b) {
        return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b);
      };
      this.resizeZoom = function () {
        if (a.zoomactive) {
          var b = a.getScrollTop();
          a.win.css({
            width: f(window).width() - a.zoomrestore.padding.w + "px",
            height: f(window).height() - a.zoomrestore.padding.h + "px",
          });
          a.onResize();
          a.setScrollTop(Math.min(a.page.maxh, b));
        }
      };
      this.init();
      f.nicescroll.push(this);
    },
    M = function (f) {
      var c = this;
      this.nc = f;
      this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
      this.snapy = this.snapx = !1;
      this.demuly = this.demulx = 0;
      this.lastscrolly = this.lastscrollx = -1;
      this.timer = this.chky = this.chkx = 0;
      this.time = function () {
        return +new Date();
      };
      this.reset = function (f, h) {
        c.stop();
        var d = c.time();
        c.steptime = 0;
        c.lasttime = d;
        c.speedx = 0;
        c.speedy = 0;
        c.lastx = f;
        c.lasty = h;
        c.lastscrollx = -1;
        c.lastscrolly = -1;
      };
      this.update = function (f, h) {
        var d = c.time();
        c.steptime = d - c.lasttime;
        c.lasttime = d;
        var d = h - c.lasty,
          q = f - c.lastx,
          t = c.nc.getScrollTop(),
          a = c.nc.getScrollLeft(),
          t = t + d,
          a = a + q;
        c.snapx = 0 > a || a > c.nc.page.maxw;
        c.snapy = 0 > t || t > c.nc.page.maxh;
        c.speedx = q;
        c.speedy = d;
        c.lastx = f;
        c.lasty = h;
      };
      this.stop = function () {
        c.nc.unsynched("domomentum2d");
        c.timer && clearTimeout(c.timer);
        c.timer = 0;
        c.lastscrollx = -1;
        c.lastscrolly = -1;
      };
      this.doSnapy = function (f, h) {
        var d = !1;
        0 > h
          ? ((h = 0), (d = !0))
          : h > c.nc.page.maxh && ((h = c.nc.page.maxh), (d = !0));
        0 > f
          ? ((f = 0), (d = !0))
          : f > c.nc.page.maxw && ((f = c.nc.page.maxw), (d = !0));
        d
          ? c.nc.doScrollPos(f, h, c.nc.opt.snapbackspeed)
          : c.nc.triggerScrollEnd();
      };
      this.doMomentum = function (f) {
        var h = c.time(),
          d = f ? h + f : c.lasttime;
        f = c.nc.getScrollLeft();
        var q = c.nc.getScrollTop(),
          t = c.nc.page.maxh,
          a = c.nc.page.maxw;
        c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
        c.speedy = 0 < t ? Math.min(60, c.speedy) : 0;
        d = d && 60 >= h - d;
        if (0 > q || q > t || 0 > f || f > a) d = !1;
        f = c.speedx && d ? c.speedx : !1;
        if ((c.speedy && d && c.speedy) || f) {
          var r = Math.max(16, c.steptime);
          50 < r && ((f = r / 50), (c.speedx *= f), (c.speedy *= f), (r = 50));
          c.demulxy = 0;
          c.lastscrollx = c.nc.getScrollLeft();
          c.chkx = c.lastscrollx;
          c.lastscrolly = c.nc.getScrollTop();
          c.chky = c.lastscrolly;
          var p = c.lastscrollx,
            e = c.lastscrolly,
            v = function () {
              var d = 600 < c.time() - h ? 0.04 : 0.02;
              c.speedx &&
                ((p = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy))),
                (c.lastscrollx = p),
                0 > p || p > a) &&
                (d = 0.1);
              c.speedy &&
                ((e = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy))),
                (c.lastscrolly = e),
                0 > e || e > t) &&
                (d = 0.1);
              c.demulxy = Math.min(1, c.demulxy + d);
              c.nc.synched("domomentum2d", function () {
                c.speedx &&
                  (c.nc.getScrollLeft(), (c.chkx = p), c.nc.setScrollLeft(p));
                c.speedy &&
                  (c.nc.getScrollTop(), (c.chky = e), c.nc.setScrollTop(e));
                c.timer || (c.nc.hideCursor(), c.doSnapy(p, e));
              });
              1 > c.demulxy
                ? (c.timer = setTimeout(v, r))
                : (c.stop(), c.nc.hideCursor(), c.doSnapy(p, e));
            };
          v();
        } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop());
      };
    },
    y = f.fn.scrollTop;
  f.cssHooks.pageYOffset = {
    get: function (h, c, k) {
      return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll
        ? c.getScrollTop()
        : y.call(h);
    },
    set: function (h, c) {
      var k = f.data(h, "__nicescroll") || !1;
      k && k.ishwscroll ? k.setScrollTop(parseInt(c)) : y.call(h, c);
      return this;
    },
  };
  f.fn.scrollTop = function (h) {
    if (void 0 === h) {
      var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
      return c && c.ishwscroll ? c.getScrollTop() : y.call(this);
    }
    return this.each(function () {
      var c = f.data(this, "__nicescroll") || !1;
      c && c.ishwscroll ? c.setScrollTop(parseInt(h)) : y.call(f(this), h);
    });
  };
  var z = f.fn.scrollLeft;
  f.cssHooks.pageXOffset = {
    get: function (h, c, k) {
      return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll
        ? c.getScrollLeft()
        : z.call(h);
    },
    set: function (h, c) {
      var k = f.data(h, "__nicescroll") || !1;
      k && k.ishwscroll ? k.setScrollLeft(parseInt(c)) : z.call(h, c);
      return this;
    },
  };
  f.fn.scrollLeft = function (h) {
    if (void 0 === h) {
      var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
      return c && c.ishwscroll ? c.getScrollLeft() : z.call(this);
    }
    return this.each(function () {
      var c = f.data(this, "__nicescroll") || !1;
      c && c.ishwscroll ? c.setScrollLeft(parseInt(h)) : z.call(f(this), h);
    });
  };
  var E = function (h) {
    var c = this;
    this.length = 0;
    this.name = "nicescrollarray";
    this.each = function (d) {
      f.each(c, d);
      return c;
    };
    this.push = function (d) {
      c[c.length] = d;
      c.length++;
    };
    this.eq = function (d) {
      return c[d];
    };
    if (h)
      for (var k = 0; k < h.length; k++) {
        var l = f.data(h[k], "__nicescroll") || !1;
        l && ((this[this.length] = l), this.length++);
      }
    return this;
  };
  (function (f, c, k) {
    for (var l = 0; l < c.length; l++) k(f, c[l]);
  })(
    E.prototype,
    "show hide toggle onResize resize remove stop doScrollPos".split(" "),
    function (f, c) {
      f[c] = function () {
        var f = arguments;
        return this.each(function () {
          this[c].apply(this, f);
        });
      };
    }
  );
  f.fn.getNiceScroll = function (h) {
    return void 0 === h
      ? new E(this)
      : (this[h] && f.data(this[h], "__nicescroll")) || !1;
  };
  f.expr[":"].nicescroll = function (h) {
    return void 0 !== f.data(h, "__nicescroll");
  };
  f.fn.niceScroll = function (h, c) {
    void 0 !== c ||
      "object" != typeof h ||
      "jquery" in h ||
      ((c = h), (h = !1));
    c = f.extend({}, c);
    var k = new E();
    void 0 === c && (c = {});
    h && ((c.doc = f(h)), (c.win = f(this)));
    var l = !("doc" in c);
    l || "win" in c || (c.win = f(this));
    this.each(function () {
      var d = f(this).data("__nicescroll") || !1;
      d ||
        ((c.doc = l ? f(this) : c.doc),
        (d = new S(c, f(this))),
        f(this).data("__nicescroll", d));
      k.push(d);
    });
    return 1 == k.length ? k[0] : k;
  };
  window.NiceScroll = {
    getjQuery: function () {
      return f;
    },
  };
  f.nicescroll || ((f.nicescroll = new E()), (f.nicescroll.options = K));
});
