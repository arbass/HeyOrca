'use strict';
(() => {
  var ae = () => {
    let t = document.querySelector('.section_blog-grid');
    t && (t.querySelectorAll('.cl-i_blog-grid_wrapper').length || t.classList.add('hide'));
  };
  var le = () => {
    let t = document.querySelector('.feature-cards-tunnel');
    if (t) {
      let e = t.querySelectorAll('.section_2col-feature-v-2'),
        i = Array.from(e);
      i.sort((r, n) => {
        let s = parseInt(r.getAttribute('order')),
          l = parseInt(n.getAttribute('order'));
        return s - l;
      }),
        i.forEach((r) => {
          t.appendChild(r);
        }),
        i.forEach((r) => {
          let n = r.querySelector('.container-large:first-child'),
            s = r.querySelector('.container-large:last-child');
          getComputedStyle(r).display === 'block'
            ? s.classList.add('hide')
            : n.classList.add('hide');
        });
    }
  };
  var ce = () => {
    let t = document.querySelector('.cl-i_section_2col-feature');
    if (t) {
      let e = t.querySelectorAll('.section_2col-feature'),
        i = Array.from(e);
      i.sort((r, n) => {
        let s = parseInt(r.getAttribute('order')),
          l = parseInt(n.getAttribute('order'));
        return s - l;
      }),
        i.forEach((r) => {
          t.appendChild(r);
        }),
        i.forEach((r) => {
          let n = r.querySelector('.container-large:first-child'),
            s = r.querySelector('.container-large:last-child');
          if (getComputedStyle(r).display === 'block') {
            s.classList.add('hide');
            let l = document.querySelector('.section_time-accordion .visual-with-shadow is-col');
          } else n.classList.add('hide');
        });
    }
  };
  var de = () => {
    let t = document.querySelector('.features-cards_list');
    t &&
      t.querySelectorAll('.card_item').forEach((i) => {
        let r = i.getAttribute('order');
        i.style.order = r;
      });
  };
  var ue = () => {
    let t = document.querySelector('.form-filter');
    t &&
      setTimeout(function () {
        t.querySelector('.time-accordion_nav .button').click();
      }, 2e3);
  };
  var fe = () => {
    let t = document.querySelector('.footer_form-block');
    if (t) {
      let e = document.getElementById('footer-page-info');
      (e.value = window.location.href),
        t.querySelector('.button.is-form-footer').addEventListener('click', function () {
          t.querySelector('.footer_real-form-button').click();
        });
    }
  };
  var pe = () => {
    document.querySelector('form') &&
      document.querySelectorAll('.floating-label').forEach((i) => {
        let r = i.previousElementSibling;
        r.addEventListener('focus', function () {
          i.classList.add('is-active');
        }),
          r.addEventListener('blur', function () {
            r.value == '' && i.classList.remove('is-active');
          });
      });
  };
  var me = () => {
    document.querySelector('.input-wrapper.is-dropdown') &&
      document.querySelectorAll('.form-dropdown_item').forEach((i) => {
        i.addEventListener('mousedown', function () {
          (document.querySelector('.form-ind-type-name').textContent = i
            .querySelector('input')
            .getAttribute('value')),
            document.querySelector('.form-ind-type-name').classList.add('text-color-gray-900');
        });
      });
  };
  var he = () => {
    let t = document.querySelector('.section_testimonials-grid');
    if (t) {
      let e = t.querySelectorAll('.testimonials-grid_column'),
        i = t.querySelectorAll('.testimonials-grid_item'),
        r = 0;
      i.forEach((n) => {
        e[r].appendChild(n), r !== 2 ? r++ : (r = 0);
      });
    }
  };
  var ge = () => {
    let t = document.querySelectorAll('[nest-links-pervent]');
    t.length &&
      t.forEach((e) => {
        e.addEventListener('click', (i) => {
          i.preventDefault();
        });
      });
  };
  var we = () => {
    let t = document.querySelectorAll('[popup-bg-close-trigger]');
    t.length &&
      (document.addEventListener('keydown', function (e) {
        e.key === 'Escape' &&
          document.querySelectorAll('[popup-bg-close-button]').forEach((r) => {
            r.click();
          });
      }),
      t.forEach((e) => {
        e.addEventListener('click', function () {
          e.nextElementSibling.querySelector('[popup-bg-close-button]').click();
        });
      }));
  };
  function ve(t) {
    return t !== null && typeof t === 'object' && 'constructor' in t && t.constructor === Object;
  }
  function U(t, e) {
    t === void 0 && (t = {}),
      e === void 0 && (e = {}),
      Object.keys(e).forEach((i) => {
        typeof t[i] === 'undefined'
          ? (t[i] = e[i])
          : ve(e[i]) && ve(t[i]) && Object.keys(e[i]).length > 0 && U(t[i], e[i]);
      });
  }
  var Se = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function V() {
    let t = typeof document !== 'undefined' ? document : {};
    return U(t, Se), t;
  }
  var Fe = {
    document: Se,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return '';
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(t) {
      return typeof setTimeout === 'undefined' ? (t(), null) : setTimeout(t, 0);
    },
    cancelAnimationFrame(t) {
      typeof setTimeout !== 'undefined' && clearTimeout(t);
    },
  };
  function O() {
    let t = typeof window !== 'undefined' ? window : {};
    return U(t, Fe), t;
  }
  function be(t) {
    let e = t;
    Object.keys(e).forEach((i) => {
      try {
        e[i] = null;
      } catch {}
      try {
        delete e[i];
      } catch {}
    });
  }
  function X(t, e) {
    return e === void 0 && (e = 0), setTimeout(t, e);
  }
  function R() {
    return Date.now();
  }
  function Ne(t) {
    let e = O(),
      i;
    return (
      e.getComputedStyle && (i = e.getComputedStyle(t, null)),
      !i && t.currentStyle && (i = t.currentStyle),
      i || (i = t.style),
      i
    );
  }
  function ye(t, e) {
    e === void 0 && (e = 'x');
    let i = O(),
      r,
      n,
      s,
      l = Ne(t);
    return (
      i.WebKitCSSMatrix
        ? ((n = l.transform || l.webkitTransform),
          n.split(',').length > 6 &&
            (n = n
              .split(', ')
              .map((a) => a.replace(',', '.'))
              .join(', ')),
          (s = new i.WebKitCSSMatrix(n === 'none' ? '' : n)))
        : ((s =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
          (r = s.toString().split(','))),
      e === 'x' &&
        (i.WebKitCSSMatrix
          ? (n = s.m41)
          : r.length === 16
          ? (n = parseFloat(r[12]))
          : (n = parseFloat(r[4]))),
      e === 'y' &&
        (i.WebKitCSSMatrix
          ? (n = s.m42)
          : r.length === 16
          ? (n = parseFloat(r[13]))
          : (n = parseFloat(r[5]))),
      n || 0
    );
  }
  function j(t) {
    return (
      typeof t === 'object' &&
      t !== null &&
      t.constructor &&
      Object.prototype.toString.call(t).slice(8, -1) === 'Object'
    );
  }
  function Re(t) {
    return typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined'
      ? t instanceof HTMLElement
      : t && (t.nodeType === 1 || t.nodeType === 11);
  }
  function z() {
    let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ['__proto__', 'constructor', 'prototype'];
    for (let i = 1; i < arguments.length; i += 1) {
      let r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (r != null && !Re(r)) {
        let n = Object.keys(Object(r)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, l = n.length; s < l; s += 1) {
          let a = n[s],
            o = Object.getOwnPropertyDescriptor(r, a);
          o !== void 0 &&
            o.enumerable &&
            (j(t[a]) && j(r[a])
              ? r[a].__swiper__
                ? (t[a] = r[a])
                : z(t[a], r[a])
              : !j(t[a]) && j(r[a])
              ? ((t[a] = {}), r[a].__swiper__ ? (t[a] = r[a]) : z(t[a], r[a]))
              : (t[a] = r[a]));
        }
      }
    }
    return t;
  }
  function H(t, e, i) {
    t.style.setProperty(e, i);
  }
  function J(t) {
    let { swiper: e, targetPosition: i, side: r } = t,
      n = O(),
      s = -e.translate,
      l = null,
      a,
      o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = 'none'), n.cancelAnimationFrame(e.cssModeFrameID);
    let c = i > s ? 'next' : 'prev',
      f = (m, d) => (c === 'next' && m >= d) || (c === 'prev' && m <= d),
      u = () => {
        (a = new Date().getTime()), l === null && (l = a);
        let m = Math.max(Math.min((a - l) / o, 1), 0),
          d = 0.5 - Math.cos(m * Math.PI) / 2,
          b = s + d * (i - s);
        if ((f(b, i) && (b = i), e.wrapperEl.scrollTo({ [r]: b }), f(b, i))) {
          (e.wrapperEl.style.overflow = 'hidden'),
            (e.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [r]: b });
            }),
            n.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = n.requestAnimationFrame(u);
      };
    u();
  }
  function D(t, e) {
    return e === void 0 && (e = ''), [...t.children].filter((i) => i.matches(e));
  }
  function Te(t, e) {
    e === void 0 && (e = []);
    let i = document.createElement(t);
    return i.classList.add(...(Array.isArray(e) ? e : [e])), i;
  }
  function xe(t, e) {
    let i = [];
    for (; t.previousElementSibling; ) {
      let r = t.previousElementSibling;
      e ? r.matches(e) && i.push(r) : i.push(r), (t = r);
    }
    return i;
  }
  function Ee(t, e) {
    let i = [];
    for (; t.nextElementSibling; ) {
      let r = t.nextElementSibling;
      e ? r.matches(e) && i.push(r) : i.push(r), (t = r);
    }
    return i;
  }
  function B(t, e) {
    return O().getComputedStyle(t, null).getPropertyValue(e);
  }
  function Q(t) {
    let e = t,
      i;
    if (e) {
      for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1);
      return i;
    }
  }
  function Ce(t, e) {
    let i = [],
      r = t.parentElement;
    for (; r; ) e ? r.matches(e) && i.push(r) : i.push(r), (r = r.parentElement);
    return i;
  }
  function Z(t, e, i) {
    let r = O();
    return i
      ? t[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
          parseFloat(
            r
              .getComputedStyle(t, null)
              .getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')
          ) +
          parseFloat(
            r
              .getComputedStyle(t, null)
              .getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom')
          )
      : t.offsetWidth;
  }
  var ee;
  function He() {
    let t = O(),
      e = V();
    return {
      smoothScroll:
        e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
      touch: !!('ontouchstart' in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
    };
  }
  function Ie() {
    return ee || (ee = He()), ee;
  }
  var te;
  function We(t) {
    let { userAgent: e } = t === void 0 ? {} : t,
      i = Ie(),
      r = O(),
      n = r.navigator.platform,
      s = e || r.navigator.userAgent,
      l = { ios: !1, android: !1 },
      a = r.screen.width,
      o = r.screen.height,
      c = s.match(/(Android);?[\s\/]+([\d.]+)?/),
      f = s.match(/(iPad).*OS\s([\d_]+)/),
      u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !f && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      d = n === 'Win32',
      b = n === 'MacIntel',
      h = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810',
      ];
    return (
      !f &&
        b &&
        i.touch &&
        h.indexOf(`${a}x${o}`) >= 0 &&
        ((f = s.match(/(Version)\/([\d.]+)/)), f || (f = [0, 1, '13_0_0']), (b = !1)),
      c && !d && ((l.os = 'android'), (l.android = !0)),
      (f || m || u) && ((l.os = 'ios'), (l.ios = !0)),
      l
    );
  }
  function $e(t) {
    return t === void 0 && (t = {}), te || (te = We(t)), te;
  }
  var ie;
  function je() {
    let t = O(),
      e = !1;
    function i() {
      let r = t.navigator.userAgent.toLowerCase();
      return r.indexOf('safari') >= 0 && r.indexOf('chrome') < 0 && r.indexOf('android') < 0;
    }
    if (i()) {
      let r = String(t.navigator.userAgent);
      if (r.includes('Version/')) {
        let [n, s] = r
          .split('Version/')[1]
          .split(' ')[0]
          .split('.')
          .map((l) => Number(l));
        e = n < 16 || (n === 16 && s < 2);
      }
    }
    return {
      isSafari: e || i(),
      needPerspectiveFix: e,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
    };
  }
  function Xe() {
    return ie || (ie = je()), ie;
  }
  function Ye(t) {
    let { swiper: e, on: i, emit: r } = t,
      n = O(),
      s = null,
      l = null,
      a = () => {
        !e || e.destroyed || !e.initialized || (r('beforeResize'), r('resize'));
      },
      o = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((u) => {
            l = n.requestAnimationFrame(() => {
              let { width: m, height: d } = e,
                b = m,
                h = d;
              u.forEach((w) => {
                let { contentBoxSize: p, contentRect: v, target: S } = w;
                (S && S !== e.el) ||
                  ((b = v ? v.width : (p[0] || p).inlineSize),
                  (h = v ? v.height : (p[0] || p).blockSize));
              }),
                (b !== m || h !== d) && a();
            });
          })),
          s.observe(e.el));
      },
      c = () => {
        l && n.cancelAnimationFrame(l), s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      f = () => {
        !e || e.destroyed || !e.initialized || r('orientationchange');
      };
    i('init', () => {
      if (e.params.resizeObserver && typeof n.ResizeObserver !== 'undefined') {
        o();
        return;
      }
      n.addEventListener('resize', a), n.addEventListener('orientationchange', f);
    }),
      i('destroy', () => {
        c(), n.removeEventListener('resize', a), n.removeEventListener('orientationchange', f);
      });
  }
  function Ke(t) {
    let { swiper: e, extendParams: i, on: r, emit: n } = t,
      s = [],
      l = O(),
      a = function (f, u) {
        u === void 0 && (u = {});
        let m = l.MutationObserver || l.WebkitMutationObserver,
          d = new m((b) => {
            if (e.__preventObserver__) return;
            if (b.length === 1) {
              n('observerUpdate', b[0]);
              return;
            }
            let h = function () {
              n('observerUpdate', b[0]);
            };
            l.requestAnimationFrame ? l.requestAnimationFrame(h) : l.setTimeout(h, 0);
          });
        d.observe(f, {
          attributes: typeof u.attributes === 'undefined' ? !0 : u.attributes,
          childList: typeof u.childList === 'undefined' ? !0 : u.childList,
          characterData: typeof u.characterData === 'undefined' ? !0 : u.characterData,
        }),
          s.push(d);
      },
      o = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            let f = Ce(e.hostEl);
            for (let u = 0; u < f.length; u += 1) a(f[u]);
          }
          a(e.hostEl, { childList: e.params.observeSlideChildren }),
            a(e.wrapperEl, { attributes: !1 });
        }
      },
      c = () => {
        s.forEach((f) => {
          f.disconnect();
        }),
          s.splice(0, s.length);
      };
    i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      r('init', o),
      r('destroy', c);
  }
  var Ue = {
    on(t, e, i) {
      let r = this;
      if (!r.eventsListeners || r.destroyed || typeof e !== 'function') return r;
      let n = i ? 'unshift' : 'push';
      return (
        t.split(' ').forEach((s) => {
          r.eventsListeners[s] || (r.eventsListeners[s] = []), r.eventsListeners[s][n](e);
        }),
        r
      );
    },
    once(t, e, i) {
      let r = this;
      if (!r.eventsListeners || r.destroyed || typeof e !== 'function') return r;
      function n() {
        r.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var s = arguments.length, l = new Array(s), a = 0; a < s; a++) l[a] = arguments[a];
        e.apply(r, l);
      }
      return (n.__emitterProxy = e), r.on(t, n, i);
    },
    onAny(t, e) {
      let i = this;
      if (!i.eventsListeners || i.destroyed || typeof t !== 'function') return i;
      let r = e ? 'unshift' : 'push';
      return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[r](t), i;
    },
    offAny(t) {
      let e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      let i = e.eventsAnyListeners.indexOf(t);
      return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
    },
    off(t, e) {
      let i = this;
      return (
        !i.eventsListeners ||
          i.destroyed ||
          !i.eventsListeners ||
          t.split(' ').forEach((r) => {
            typeof e === 'undefined'
              ? (i.eventsListeners[r] = [])
              : i.eventsListeners[r] &&
                i.eventsListeners[r].forEach((n, s) => {
                  (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                    i.eventsListeners[r].splice(s, 1);
                });
          }),
        i
      );
    },
    emit() {
      let t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
      let e, i, r;
      for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l];
      return (
        typeof s[0] === 'string' || Array.isArray(s[0])
          ? ((e = s[0]), (i = s.slice(1, s.length)), (r = t))
          : ((e = s[0].events), (i = s[0].data), (r = s[0].context || t)),
        i.unshift(r),
        (Array.isArray(e) ? e : e.split(' ')).forEach((o) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((c) => {
              c.apply(r, [o, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[o] &&
              t.eventsListeners[o].forEach((c) => {
                c.apply(r, i);
              });
        }),
        t
      );
    },
  };
  function Je() {
    let t = this,
      e,
      i,
      r = t.el;
    typeof t.params.width !== 'undefined' && t.params.width !== null
      ? (e = t.params.width)
      : (e = r.clientWidth),
      typeof t.params.height !== 'undefined' && t.params.height !== null
        ? (i = t.params.height)
        : (i = r.clientHeight),
      !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
        ((e =
          e - parseInt(B(r, 'padding-left') || 0, 10) - parseInt(B(r, 'padding-right') || 0, 10)),
        (i =
          i - parseInt(B(r, 'padding-top') || 0, 10) - parseInt(B(r, 'padding-bottom') || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(i) && (i = 0),
        Object.assign(t, { width: e, height: i, size: t.isHorizontal() ? e : i }));
  }
  function Qe() {
    let t = this;
    function e(T) {
      return t.isHorizontal()
        ? T
        : {
            width: 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            marginRight: 'marginBottom',
          }[T];
    }
    function i(T, x) {
      return parseFloat(T.getPropertyValue(e(x)) || 0);
    }
    let r = t.params,
      { wrapperEl: n, slidesEl: s, size: l, rtlTranslate: a, wrongRTL: o } = t,
      c = t.virtual && r.virtual.enabled,
      f = c ? t.virtual.slides.length : t.slides.length,
      u = D(s, `.${t.params.slideClass}, swiper-slide`),
      m = c ? t.virtual.slides.length : u.length,
      d = [],
      b = [],
      h = [],
      w = r.slidesOffsetBefore;
    typeof w === 'function' && (w = r.slidesOffsetBefore.call(t));
    let p = r.slidesOffsetAfter;
    typeof p === 'function' && (p = r.slidesOffsetAfter.call(t));
    let v = t.snapGrid.length,
      S = t.slidesGrid.length,
      y = r.spaceBetween,
      C = -w,
      L = 0,
      g = 0;
    if (typeof l === 'undefined') return;
    typeof y === 'string' && y.indexOf('%') >= 0
      ? (y = (parseFloat(y.replace('%', '')) / 100) * l)
      : typeof y === 'string' && (y = parseFloat(y)),
      (t.virtualSize = -y),
      u.forEach((T) => {
        a ? (T.style.marginLeft = '') : (T.style.marginRight = ''),
          (T.style.marginBottom = ''),
          (T.style.marginTop = '');
      }),
      r.centeredSlides &&
        r.cssMode &&
        (H(n, '--swiper-centered-offset-before', ''), H(n, '--swiper-centered-offset-after', ''));
    let P = r.grid && r.grid.rows > 1 && t.grid;
    P && t.grid.initSlides(m);
    let E,
      M =
        r.slidesPerView === 'auto' &&
        r.breakpoints &&
        Object.keys(r.breakpoints).filter(
          (T) => typeof r.breakpoints[T].slidesPerView !== 'undefined'
        ).length > 0;
    for (let T = 0; T < m; T += 1) {
      E = 0;
      let x;
      if (
        (u[T] && (x = u[T]),
        P && t.grid.updateSlide(T, x, m, e),
        !(u[T] && B(x, 'display') === 'none'))
      ) {
        if (r.slidesPerView === 'auto') {
          M && (u[T].style[e('width')] = '');
          let A = getComputedStyle(x),
            I = x.style.transform,
            k = x.style.webkitTransform;
          if (
            (I && (x.style.transform = 'none'),
            k && (x.style.webkitTransform = 'none'),
            r.roundLengths)
          )
            E = t.isHorizontal() ? Z(x, 'width', !0) : Z(x, 'height', !0);
          else {
            let G = i(A, 'width'),
              q = i(A, 'padding-left'),
              W = i(A, 'padding-right'),
              F = i(A, 'margin-left'),
              $ = i(A, 'margin-right'),
              N = A.getPropertyValue('box-sizing');
            if (N && N === 'border-box') E = G + F + $;
            else {
              let { clientWidth: K, offsetWidth: Be } = x;
              E = G + q + W + F + $ + (Be - K);
            }
          }
          I && (x.style.transform = I),
            k && (x.style.webkitTransform = k),
            r.roundLengths && (E = Math.floor(E));
        } else
          (E = (l - (r.slidesPerView - 1) * y) / r.slidesPerView),
            r.roundLengths && (E = Math.floor(E)),
            u[T] && (u[T].style[e('width')] = `${E}px`);
        u[T] && (u[T].swiperSlideSize = E),
          h.push(E),
          r.centeredSlides
            ? ((C = C + E / 2 + L / 2 + y),
              L === 0 && T !== 0 && (C = C - l / 2 - y),
              T === 0 && (C = C - l / 2 - y),
              Math.abs(C) < 1 / 1e3 && (C = 0),
              r.roundLengths && (C = Math.floor(C)),
              g % r.slidesPerGroup === 0 && d.push(C),
              b.push(C))
            : (r.roundLengths && (C = Math.floor(C)),
              (g - Math.min(t.params.slidesPerGroupSkip, g)) % t.params.slidesPerGroup === 0 &&
                d.push(C),
              b.push(C),
              (C = C + E + y)),
          (t.virtualSize += E + y),
          (L = E),
          (g += 1);
      }
    }
    if (
      ((t.virtualSize = Math.max(t.virtualSize, l) + p),
      a &&
        o &&
        (r.effect === 'slide' || r.effect === 'coverflow') &&
        (n.style.width = `${t.virtualSize + y}px`),
      r.setWrapperSize && (n.style[e('width')] = `${t.virtualSize + y}px`),
      P && t.grid.updateWrapperSize(E, d, e),
      !r.centeredSlides)
    ) {
      let T = [];
      for (let x = 0; x < d.length; x += 1) {
        let A = d[x];
        r.roundLengths && (A = Math.floor(A)), d[x] <= t.virtualSize - l && T.push(A);
      }
      (d = T),
        Math.floor(t.virtualSize - l) - Math.floor(d[d.length - 1]) > 1 &&
          d.push(t.virtualSize - l);
    }
    if (c && r.loop) {
      let T = h[0] + y;
      if (r.slidesPerGroup > 1) {
        let x = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
          A = T * r.slidesPerGroup;
        for (let I = 0; I < x; I += 1) d.push(d[d.length - 1] + A);
      }
      for (let x = 0; x < t.virtual.slidesBefore + t.virtual.slidesAfter; x += 1)
        r.slidesPerGroup === 1 && d.push(d[d.length - 1] + T),
          b.push(b[b.length - 1] + T),
          (t.virtualSize += T);
    }
    if ((d.length === 0 && (d = [0]), y !== 0)) {
      let T = t.isHorizontal() && a ? 'marginLeft' : e('marginRight');
      u.filter((x, A) => (!r.cssMode || r.loop ? !0 : A !== u.length - 1)).forEach((x) => {
        x.style[T] = `${y}px`;
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let T = 0;
      h.forEach((A) => {
        T += A + (y || 0);
      }),
        (T -= y);
      let x = T - l;
      d = d.map((A) => (A <= 0 ? -w : A > x ? x + p : A));
    }
    if (r.centerInsufficientSlides) {
      let T = 0;
      if (
        (h.forEach((x) => {
          T += x + (y || 0);
        }),
        (T -= y),
        T < l)
      ) {
        let x = (l - T) / 2;
        d.forEach((A, I) => {
          d[I] = A - x;
        }),
          b.forEach((A, I) => {
            b[I] = A + x;
          });
      }
    }
    if (
      (Object.assign(t, { slides: u, snapGrid: d, slidesGrid: b, slidesSizesGrid: h }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      H(n, '--swiper-centered-offset-before', `${-d[0]}px`),
        H(n, '--swiper-centered-offset-after', `${t.size / 2 - h[h.length - 1] / 2}px`);
      let T = -t.snapGrid[0],
        x = -t.slidesGrid[0];
      (t.snapGrid = t.snapGrid.map((A) => A + T)), (t.slidesGrid = t.slidesGrid.map((A) => A + x));
    }
    if (
      (m !== f && t.emit('slidesLengthChange'),
      d.length !== v &&
        (t.params.watchOverflow && t.checkOverflow(), t.emit('snapGridLengthChange')),
      b.length !== S && t.emit('slidesGridLengthChange'),
      r.watchSlidesProgress && t.updateSlidesOffset(),
      !c && !r.cssMode && (r.effect === 'slide' || r.effect === 'fade'))
    ) {
      let T = `${r.containerModifierClass}backface-hidden`,
        x = t.el.classList.contains(T);
      m <= r.maxBackfaceHiddenSlides ? x || t.el.classList.add(T) : x && t.el.classList.remove(T);
    }
  }
  function Ze(t) {
    let e = this,
      i = [],
      r = e.virtual && e.params.virtual.enabled,
      n = 0,
      s;
    typeof t === 'number' ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    let l = (a) => (r ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
    if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((a) => {
          i.push(a);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          let a = e.activeIndex + s;
          if (a > e.slides.length && !r) break;
          i.push(l(a));
        }
    else i.push(l(e.activeIndex));
    for (s = 0; s < i.length; s += 1)
      if (typeof i[s] !== 'undefined') {
        let a = i[s].offsetHeight;
        n = a > n ? a : n;
      }
    (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
  }
  function et() {
    let t = this,
      e = t.slides,
      i = t.isElement ? (t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop) : 0;
    for (let r = 0; r < e.length; r += 1)
      e[r].swiperSlideOffset =
        (t.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - i - t.cssOverflowAdjustment();
  }
  function tt(t) {
    t === void 0 && (t = (this && this.translate) || 0);
    let e = this,
      i = e.params,
      { slides: r, rtlTranslate: n, snapGrid: s } = e;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset === 'undefined' && e.updateSlidesOffset();
    let l = -t;
    n && (l = t),
      r.forEach((o) => {
        o.classList.remove(i.slideVisibleClass);
      }),
      (e.visibleSlidesIndexes = []),
      (e.visibleSlides = []);
    let a = i.spaceBetween;
    typeof a === 'string' && a.indexOf('%') >= 0
      ? (a = (parseFloat(a.replace('%', '')) / 100) * e.size)
      : typeof a === 'string' && (a = parseFloat(a));
    for (let o = 0; o < r.length; o += 1) {
      let c = r[o],
        f = c.swiperSlideOffset;
      i.cssMode && i.centeredSlides && (f -= r[0].swiperSlideOffset);
      let u = (l + (i.centeredSlides ? e.minTranslate() : 0) - f) / (c.swiperSlideSize + a),
        m = (l - s[0] + (i.centeredSlides ? e.minTranslate() : 0) - f) / (c.swiperSlideSize + a),
        d = -(l - f),
        b = d + e.slidesSizesGrid[o];
      ((d >= 0 && d < e.size - 1) || (b > 1 && b <= e.size) || (d <= 0 && b >= e.size)) &&
        (e.visibleSlides.push(c),
        e.visibleSlidesIndexes.push(o),
        r[o].classList.add(i.slideVisibleClass)),
        (c.progress = n ? -u : u),
        (c.originalProgress = n ? -m : m);
    }
  }
  function it(t) {
    let e = this;
    if (typeof t === 'undefined') {
      let f = e.rtlTranslate ? -1 : 1;
      t = (e && e.translate && e.translate * f) || 0;
    }
    let i = e.params,
      r = e.maxTranslate() - e.minTranslate(),
      { progress: n, isBeginning: s, isEnd: l, progressLoop: a } = e,
      o = s,
      c = l;
    if (r === 0) (n = 0), (s = !0), (l = !0);
    else {
      n = (t - e.minTranslate()) / r;
      let f = Math.abs(t - e.minTranslate()) < 1,
        u = Math.abs(t - e.maxTranslate()) < 1;
      (s = f || n <= 0), (l = u || n >= 1), f && (n = 0), u && (n = 1);
    }
    if (i.loop) {
      let f = e.getSlideIndexByData(0),
        u = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[f],
        d = e.slidesGrid[u],
        b = e.slidesGrid[e.slidesGrid.length - 1],
        h = Math.abs(t);
      h >= m ? (a = (h - m) / b) : (a = (h + b - d) / b), a > 1 && (a -= 1);
    }
    Object.assign(e, { progress: n, progressLoop: a, isBeginning: s, isEnd: l }),
      (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && e.updateSlidesProgress(t),
      s && !o && e.emit('reachBeginning toEdge'),
      l && !c && e.emit('reachEnd toEdge'),
      ((o && !s) || (c && !l)) && e.emit('fromEdge'),
      e.emit('progress', n);
  }
  function rt() {
    let t = this,
      { slides: e, params: i, slidesEl: r, activeIndex: n } = t,
      s = t.virtual && i.virtual.enabled,
      l = (o) => D(r, `.${i.slideClass}${o}, swiper-slide${o}`)[0];
    e.forEach((o) => {
      o.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
    });
    let a;
    if (s)
      if (i.loop) {
        let o = n - t.virtual.slidesBefore;
        o < 0 && (o = t.virtual.slides.length + o),
          o >= t.virtual.slides.length && (o -= t.virtual.slides.length),
          (a = l(`[data-swiper-slide-index="${o}"]`));
      } else a = l(`[data-swiper-slide-index="${n}"]`);
    else a = e[n];
    if (a) {
      a.classList.add(i.slideActiveClass);
      let o = Ee(a, `.${i.slideClass}, swiper-slide`)[0];
      i.loop && !o && (o = e[0]), o && o.classList.add(i.slideNextClass);
      let c = xe(a, `.${i.slideClass}, swiper-slide`)[0];
      i.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(i.slidePrevClass);
    }
    t.emitSlidesClasses();
  }
  var Y = (t, e) => {
      if (!t || t.destroyed || !t.params) return;
      let i = () => (t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`),
        r = e.closest(i());
      if (r) {
        let n = r.querySelector(`.${t.params.lazyPreloaderClass}`);
        n && n.remove();
      }
    },
    re = (t, e) => {
      if (!t.slides[e]) return;
      let i = t.slides[e].querySelector('[loading="lazy"]');
      i && i.removeAttribute('loading');
    },
    oe = (t) => {
      if (!t || t.destroyed || !t.params) return;
      let e = t.params.lazyPreloadPrevNext,
        i = t.slides.length;
      if (!i || !e || e < 0) return;
      e = Math.min(e, i);
      let r =
          t.params.slidesPerView === 'auto'
            ? t.slidesPerViewDynamic()
            : Math.ceil(t.params.slidesPerView),
        n = t.activeIndex;
      if (t.params.grid && t.params.grid.rows > 1) {
        let l = n,
          a = [l - e];
        a.push(...Array.from({ length: e }).map((o, c) => l + r + c)),
          t.slides.forEach((o, c) => {
            a.includes(o.column) && re(t, c);
          });
        return;
      }
      let s = n + r - 1;
      if (t.params.rewind || t.params.loop)
        for (let l = n - e; l <= s + e; l += 1) {
          let a = ((l % i) + i) % i;
          (a < n || a > s) && re(t, a);
        }
      else
        for (let l = Math.max(n - e, 0); l <= Math.min(s + e, i - 1); l += 1)
          l !== n && (l > s || l < n) && re(t, l);
    };
  function st(t) {
    let { slidesGrid: e, params: i } = t,
      r = t.rtlTranslate ? t.translate : -t.translate,
      n;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] !== 'undefined'
        ? r >= e[s] && r < e[s + 1] - (e[s + 1] - e[s]) / 2
          ? (n = s)
          : r >= e[s] && r < e[s + 1] && (n = s + 1)
        : r >= e[s] && (n = s);
    return i.normalizeSlideIndex && (n < 0 || typeof n === 'undefined') && (n = 0), n;
  }
  function nt(t) {
    let e = this,
      i = e.rtlTranslate ? e.translate : -e.translate,
      { snapGrid: r, params: n, activeIndex: s, realIndex: l, snapIndex: a } = e,
      o = t,
      c,
      f = (m) => {
        let d = m - e.virtual.slidesBefore;
        return (
          d < 0 && (d = e.virtual.slides.length + d),
          d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
          d
        );
      };
    if ((typeof o === 'undefined' && (o = st(e)), r.indexOf(i) >= 0)) c = r.indexOf(i);
    else {
      let m = Math.min(n.slidesPerGroupSkip, o);
      c = m + Math.floor((o - m) / n.slidesPerGroup);
    }
    if ((c >= r.length && (c = r.length - 1), o === s)) {
      c !== a && ((e.snapIndex = c), e.emit('snapIndexChange')),
        e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = f(o));
      return;
    }
    let u;
    e.virtual && n.virtual.enabled && n.loop
      ? (u = f(o))
      : e.slides[o]
      ? (u = parseInt(e.slides[o].getAttribute('data-swiper-slide-index') || o, 10))
      : (u = o),
      Object.assign(e, {
        previousSnapIndex: a,
        snapIndex: c,
        previousRealIndex: l,
        realIndex: u,
        previousIndex: s,
        activeIndex: o,
      }),
      e.initialized && oe(e),
      e.emit('activeIndexChange'),
      e.emit('snapIndexChange'),
      l !== u && e.emit('realIndexChange'),
      (e.initialized || e.params.runCallbacksOnInit) && e.emit('slideChange');
  }
  function ot(t) {
    let e = this,
      i = e.params,
      r = t.closest(`.${i.slideClass}, swiper-slide`),
      n = !1,
      s;
    if (r) {
      for (let l = 0; l < e.slides.length; l += 1)
        if (e.slides[l] === r) {
          (n = !0), (s = l);
          break;
        }
    }
    if (r && n)
      (e.clickedSlide = r),
        e.virtual && e.params.virtual.enabled
          ? (e.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
          : (e.clickedIndex = s);
    else {
      (e.clickedSlide = void 0), (e.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      e.clickedIndex !== void 0 &&
      e.clickedIndex !== e.activeIndex &&
      e.slideToClickedSlide();
  }
  var at = {
    updateSize: Je,
    updateSlides: Qe,
    updateAutoHeight: Ze,
    updateSlidesOffset: et,
    updateSlidesProgress: tt,
    updateProgress: it,
    updateSlidesClasses: rt,
    updateActiveIndex: nt,
    updateClickedSlide: ot,
  };
  function lt(t) {
    t === void 0 && (t = this.isHorizontal() ? 'x' : 'y');
    let e = this,
      { params: i, rtlTranslate: r, translate: n, wrapperEl: s } = e;
    if (i.virtualTranslate) return r ? -n : n;
    if (i.cssMode) return n;
    let l = ye(s, t);
    return (l += e.cssOverflowAdjustment()), r && (l = -l), l || 0;
  }
  function ct(t, e) {
    let i = this,
      { rtlTranslate: r, params: n, wrapperEl: s, progress: l } = i,
      a = 0,
      o = 0,
      c = 0;
    i.isHorizontal() ? (a = r ? -t : t) : (o = t),
      n.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
      (i.previousTranslate = i.translate),
      (i.translate = i.isHorizontal() ? a : o),
      n.cssMode
        ? (s[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -a : -o)
        : n.virtualTranslate ||
          (i.isHorizontal() ? (a -= i.cssOverflowAdjustment()) : (o -= i.cssOverflowAdjustment()),
          (s.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`));
    let f,
      u = i.maxTranslate() - i.minTranslate();
    u === 0 ? (f = 0) : (f = (t - i.minTranslate()) / u),
      f !== l && i.updateProgress(t),
      i.emit('setTranslate', i.translate, e);
  }
  function dt() {
    return -this.snapGrid[0];
  }
  function ut() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function ft(t, e, i, r, n) {
    t === void 0 && (t = 0),
      e === void 0 && (e = this.params.speed),
      i === void 0 && (i = !0),
      r === void 0 && (r = !0);
    let s = this,
      { params: l, wrapperEl: a } = s;
    if (s.animating && l.preventInteractionOnTransition) return !1;
    let o = s.minTranslate(),
      c = s.maxTranslate(),
      f;
    if ((r && t > o ? (f = o) : r && t < c ? (f = c) : (f = t), s.updateProgress(f), l.cssMode)) {
      let u = s.isHorizontal();
      if (e === 0) a[u ? 'scrollLeft' : 'scrollTop'] = -f;
      else {
        if (!s.support.smoothScroll)
          return J({ swiper: s, targetPosition: -f, side: u ? 'left' : 'top' }), !0;
        a.scrollTo({ [u ? 'left' : 'top']: -f, behavior: 'smooth' });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(f),
          i && (s.emit('beforeTransitionStart', e, n), s.emit('transitionEnd')))
        : (s.setTransition(e),
          s.setTranslate(f),
          i && (s.emit('beforeTransitionStart', e, n), s.emit('transitionStart')),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (m) {
                !s ||
                  s.destroyed ||
                  (m.target === this &&
                    (s.wrapperEl.removeEventListener(
                      'transitionend',
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    i && s.emit('transitionEnd')));
              }),
            s.wrapperEl.addEventListener('transitionend', s.onTranslateToWrapperTransitionEnd))),
      !0
    );
  }
  var pt = {
    getTranslate: lt,
    setTranslate: ct,
    minTranslate: dt,
    maxTranslate: ut,
    translateTo: ft,
  };
  function mt(t, e) {
    let i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`),
      i.emit('setTransition', t, e);
  }
  function Me(t) {
    let { swiper: e, runCallbacks: i, direction: r, step: n } = t,
      { activeIndex: s, previousIndex: l } = e,
      a = r;
    if (
      (a || (s > l ? (a = 'next') : s < l ? (a = 'prev') : (a = 'reset')),
      e.emit(`transition${n}`),
      i && s !== l)
    ) {
      if (a === 'reset') {
        e.emit(`slideResetTransition${n}`);
        return;
      }
      e.emit(`slideChangeTransition${n}`),
        a === 'next' ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
    }
  }
  function ht(t, e) {
    t === void 0 && (t = !0);
    let i = this,
      { params: r } = i;
    r.cssMode ||
      (r.autoHeight && i.updateAutoHeight(),
      Me({ swiper: i, runCallbacks: t, direction: e, step: 'Start' }));
  }
  function gt(t, e) {
    t === void 0 && (t = !0);
    let i = this,
      { params: r } = i;
    (i.animating = !1),
      !r.cssMode &&
        (i.setTransition(0), Me({ swiper: i, runCallbacks: t, direction: e, step: 'End' }));
  }
  var wt = { setTransition: mt, transitionStart: ht, transitionEnd: gt };
  function vt(t, e, i, r, n) {
    t === void 0 && (t = 0),
      e === void 0 && (e = this.params.speed),
      i === void 0 && (i = !0),
      typeof t === 'string' && (t = parseInt(t, 10));
    let s = this,
      l = t;
    l < 0 && (l = 0);
    let {
      params: a,
      snapGrid: o,
      slidesGrid: c,
      previousIndex: f,
      activeIndex: u,
      rtlTranslate: m,
      wrapperEl: d,
      enabled: b,
    } = s;
    if ((s.animating && a.preventInteractionOnTransition) || (!b && !r && !n)) return !1;
    let h = Math.min(s.params.slidesPerGroupSkip, l),
      w = h + Math.floor((l - h) / s.params.slidesPerGroup);
    w >= o.length && (w = o.length - 1);
    let p = -o[w];
    if (a.normalizeSlideIndex)
      for (let S = 0; S < c.length; S += 1) {
        let y = -Math.floor(p * 100),
          C = Math.floor(c[S] * 100),
          L = Math.floor(c[S + 1] * 100);
        typeof c[S + 1] !== 'undefined'
          ? y >= C && y < L - (L - C) / 2
            ? (l = S)
            : y >= C && y < L && (l = S + 1)
          : y >= C && (l = S);
      }
    if (
      s.initialized &&
      l !== u &&
      ((!s.allowSlideNext &&
        (m ? p > s.translate && p > s.minTranslate() : p < s.translate && p < s.minTranslate())) ||
        (!s.allowSlidePrev && p > s.translate && p > s.maxTranslate() && (u || 0) !== l))
    )
      return !1;
    l !== (f || 0) && i && s.emit('beforeSlideChangeStart'), s.updateProgress(p);
    let v;
    if (
      (l > u ? (v = 'next') : l < u ? (v = 'prev') : (v = 'reset'),
      (m && -p === s.translate) || (!m && p === s.translate))
    )
      return (
        s.updateActiveIndex(l),
        a.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        a.effect !== 'slide' && s.setTranslate(p),
        v !== 'reset' && (s.transitionStart(i, v), s.transitionEnd(i, v)),
        !1
      );
    if (a.cssMode) {
      let S = s.isHorizontal(),
        y = m ? p : -p;
      if (e === 0) {
        let C = s.virtual && s.params.virtual.enabled;
        C && ((s.wrapperEl.style.scrollSnapType = 'none'), (s._immediateVirtual = !0)),
          C && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                d[S ? 'scrollLeft' : 'scrollTop'] = y;
              }))
            : (d[S ? 'scrollLeft' : 'scrollTop'] = y),
          C &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ''), (s._immediateVirtual = !1);
            });
      } else {
        if (!s.support.smoothScroll)
          return J({ swiper: s, targetPosition: y, side: S ? 'left' : 'top' }), !0;
        d.scrollTo({ [S ? 'left' : 'top']: y, behavior: 'smooth' });
      }
      return !0;
    }
    return (
      s.setTransition(e),
      s.setTranslate(p),
      s.updateActiveIndex(l),
      s.updateSlidesClasses(),
      s.emit('beforeTransitionStart', e, r),
      s.transitionStart(i, v),
      e === 0
        ? s.transitionEnd(i, v)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (y) {
              !s ||
                s.destroyed ||
                (y.target === this &&
                  (s.wrapperEl.removeEventListener(
                    'transitionend',
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(i, v)));
            }),
          s.wrapperEl.addEventListener('transitionend', s.onSlideToWrapperTransitionEnd)),
      !0
    );
  }
  function St(t, e, i, r) {
    t === void 0 && (t = 0),
      e === void 0 && (e = this.params.speed),
      i === void 0 && (i = !0),
      typeof t === 'string' && (t = parseInt(t, 10));
    let n = this,
      s = t;
    return (
      n.params.loop &&
        (n.virtual && n.params.virtual.enabled
          ? (s = s + n.virtual.slidesBefore)
          : (s = n.getSlideIndexByData(s))),
      n.slideTo(s, e, i, r)
    );
  }
  function bt(t, e, i) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    let r = this,
      { enabled: n, params: s, animating: l } = r;
    if (!n) return r;
    let a = s.slidesPerGroup;
    s.slidesPerView === 'auto' &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (a = Math.max(r.slidesPerViewDynamic('current', !0), 1));
    let o = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
      c = r.virtual && s.virtual.enabled;
    if (s.loop) {
      if (l && !c && s.loopPreventsSliding) return !1;
      r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft);
    }
    return s.rewind && r.isEnd ? r.slideTo(0, t, e, i) : r.slideTo(r.activeIndex + o, t, e, i);
  }
  function yt(t, e, i) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    let r = this,
      { params: n, snapGrid: s, slidesGrid: l, rtlTranslate: a, enabled: o, animating: c } = r;
    if (!o) return r;
    let f = r.virtual && n.virtual.enabled;
    if (n.loop) {
      if (c && !f && n.loopPreventsSliding) return !1;
      r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
    }
    let u = a ? r.translate : -r.translate;
    function m(p) {
      return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
    }
    let d = m(u),
      b = s.map((p) => m(p)),
      h = s[b.indexOf(d) - 1];
    if (typeof h === 'undefined' && n.cssMode) {
      let p;
      s.forEach((v, S) => {
        d >= v && (p = S);
      }),
        typeof p !== 'undefined' && (h = s[p > 0 ? p - 1 : p]);
    }
    let w = 0;
    if (
      (typeof h !== 'undefined' &&
        ((w = l.indexOf(h)),
        w < 0 && (w = r.activeIndex - 1),
        n.slidesPerView === 'auto' &&
          n.slidesPerGroup === 1 &&
          n.slidesPerGroupAuto &&
          ((w = w - r.slidesPerViewDynamic('previous', !0) + 1), (w = Math.max(w, 0)))),
      n.rewind && r.isBeginning)
    ) {
      let p =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(p, t, e, i);
    }
    return r.slideTo(w, t, e, i);
  }
  function Tt(t, e, i) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    let r = this;
    return r.slideTo(r.activeIndex, t, e, i);
  }
  function xt(t, e, i, r) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), r === void 0 && (r = 0.5);
    let n = this,
      s = n.activeIndex,
      l = Math.min(n.params.slidesPerGroupSkip, s),
      a = l + Math.floor((s - l) / n.params.slidesPerGroup),
      o = n.rtlTranslate ? n.translate : -n.translate;
    if (o >= n.snapGrid[a]) {
      let c = n.snapGrid[a],
        f = n.snapGrid[a + 1];
      o - c > (f - c) * r && (s += n.params.slidesPerGroup);
    } else {
      let c = n.snapGrid[a - 1],
        f = n.snapGrid[a];
      o - c <= (f - c) * r && (s -= n.params.slidesPerGroup);
    }
    return (s = Math.max(s, 0)), (s = Math.min(s, n.slidesGrid.length - 1)), n.slideTo(s, t, e, i);
  }
  function Et() {
    let t = this,
      { params: e, slidesEl: i } = t,
      r = e.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : e.slidesPerView,
      n = t.clickedIndex,
      s,
      l = t.isElement ? 'swiper-slide' : `.${e.slideClass}`;
    if (e.loop) {
      if (t.animating) return;
      (s = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
        e.centeredSlides
          ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2
            ? (t.loopFix(),
              (n = t.getSlideIndex(D(i, `${l}[data-swiper-slide-index="${s}"]`)[0])),
              X(() => {
                t.slideTo(n);
              }))
            : t.slideTo(n)
          : n > t.slides.length - r
          ? (t.loopFix(),
            (n = t.getSlideIndex(D(i, `${l}[data-swiper-slide-index="${s}"]`)[0])),
            X(() => {
              t.slideTo(n);
            }))
          : t.slideTo(n);
    } else t.slideTo(n);
  }
  var Ct = {
    slideTo: vt,
    slideToLoop: St,
    slideNext: bt,
    slidePrev: yt,
    slideReset: Tt,
    slideToClosest: xt,
    slideToClickedSlide: Et,
  };
  function Pt(t) {
    let e = this,
      { params: i, slidesEl: r } = e;
    if (!i.loop || (e.virtual && e.params.virtual.enabled)) return;
    D(r, `.${i.slideClass}, swiper-slide`).forEach((s, l) => {
      s.setAttribute('data-swiper-slide-index', l);
    }),
      e.loopFix({ slideRealIndex: t, direction: i.centeredSlides ? void 0 : 'next' });
  }
  function Lt(t) {
    let {
        slideRealIndex: e,
        slideTo: i = !0,
        direction: r,
        setTranslate: n,
        activeSlideIndex: s,
        byController: l,
        byMousewheel: a,
      } = t === void 0 ? {} : t,
      o = this;
    if (!o.params.loop) return;
    o.emit('beforeLoopFix');
    let { slides: c, allowSlidePrev: f, allowSlideNext: u, slidesEl: m, params: d } = o;
    if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && d.virtual.enabled)) {
      i &&
        (!d.centeredSlides && o.snapIndex === 0
          ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
          : d.centeredSlides && o.snapIndex < d.slidesPerView
          ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
          : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        (o.allowSlidePrev = f),
        (o.allowSlideNext = u),
        o.emit('loopFix');
      return;
    }
    let b =
        d.slidesPerView === 'auto'
          ? o.slidesPerViewDynamic()
          : Math.ceil(parseFloat(d.slidesPerView, 10)),
      h = d.loopedSlides || b;
    h % d.slidesPerGroup !== 0 && (h += d.slidesPerGroup - (h % d.slidesPerGroup)),
      (o.loopedSlides = h);
    let w = [],
      p = [],
      v = o.activeIndex;
    typeof s === 'undefined'
      ? (s = o.getSlideIndex(o.slides.filter((g) => g.classList.contains(d.slideActiveClass))[0]))
      : (v = s);
    let S = r === 'next' || !r,
      y = r === 'prev' || !r,
      C = 0,
      L = 0;
    if (s < h) {
      C = Math.max(h - s, d.slidesPerGroup);
      for (let g = 0; g < h - s; g += 1) {
        let P = g - Math.floor(g / c.length) * c.length;
        w.push(c.length - P - 1);
      }
    } else if (s > o.slides.length - h * 2) {
      L = Math.max(s - (o.slides.length - h * 2), d.slidesPerGroup);
      for (let g = 0; g < L; g += 1) {
        let P = g - Math.floor(g / c.length) * c.length;
        p.push(P);
      }
    }
    if (
      (y &&
        w.forEach((g) => {
          (o.slides[g].swiperLoopMoveDOM = !0),
            m.prepend(o.slides[g]),
            (o.slides[g].swiperLoopMoveDOM = !1);
        }),
      S &&
        p.forEach((g) => {
          (o.slides[g].swiperLoopMoveDOM = !0),
            m.append(o.slides[g]),
            (o.slides[g].swiperLoopMoveDOM = !1);
        }),
      o.recalcSlides(),
      d.slidesPerView === 'auto' && o.updateSlides(),
      d.watchSlidesProgress && o.updateSlidesOffset(),
      i)
    ) {
      if (w.length > 0 && y)
        if (typeof e === 'undefined') {
          let g = o.slidesGrid[v],
            E = o.slidesGrid[v + C] - g;
          a
            ? o.setTranslate(o.translate - E)
            : (o.slideTo(v + C, 0, !1, !0),
              n &&
                ((o.touches[o.isHorizontal() ? 'startX' : 'startY'] += E),
                (o.touchEventsData.currentTranslate = o.translate)));
        } else
          n && (o.slideToLoop(e, 0, !1, !0), (o.touchEventsData.currentTranslate = o.translate));
      else if (p.length > 0 && S)
        if (typeof e === 'undefined') {
          let g = o.slidesGrid[v],
            E = o.slidesGrid[v - L] - g;
          a
            ? o.setTranslate(o.translate - E)
            : (o.slideTo(v - L, 0, !1, !0),
              n &&
                ((o.touches[o.isHorizontal() ? 'startX' : 'startY'] += E),
                (o.touchEventsData.currentTranslate = o.translate)));
        } else o.slideToLoop(e, 0, !1, !0);
    }
    if (
      ((o.allowSlidePrev = f), (o.allowSlideNext = u), o.controller && o.controller.control && !l)
    ) {
      let g = {
        slideRealIndex: e,
        slideTo: !1,
        direction: r,
        setTranslate: n,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(o.controller.control)
        ? o.controller.control.forEach((P) => {
            !P.destroyed && P.params.loop && P.loopFix(g);
          })
        : o.controller.control instanceof o.constructor &&
          o.controller.control.params.loop &&
          o.controller.control.loopFix(g);
    }
    o.emit('loopFix');
  }
  function At() {
    let t = this,
      { params: e, slidesEl: i } = t;
    if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
    t.recalcSlides();
    let r = [];
    t.slides.forEach((n) => {
      let s =
        typeof n.swiperSlideIndex === 'undefined'
          ? n.getAttribute('data-swiper-slide-index') * 1
          : n.swiperSlideIndex;
      r[s] = n;
    }),
      t.slides.forEach((n) => {
        n.removeAttribute('data-swiper-slide-index');
      }),
      r.forEach((n) => {
        i.append(n);
      }),
      t.recalcSlides(),
      t.slideTo(t.realIndex, 0);
  }
  var _t = { loopCreate: Pt, loopFix: Lt, loopDestroy: At };
  function It(t) {
    let e = this;
    if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode)
      return;
    let i = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (i.style.cursor = 'move'),
      (i.style.cursor = t ? 'grabbing' : 'grab'),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Mt() {
    let t = this;
    (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode ||
      (t.isElement && (t.__preventObserver__ = !0),
      (t[t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
      t.isElement &&
        requestAnimationFrame(() => {
          t.__preventObserver__ = !1;
        }));
  }
  var Ot = { setGrabCursor: It, unsetGrabCursor: Mt };
  function zt(t, e) {
    e === void 0 && (e = this);
    function i(r) {
      if (!r || r === V() || r === O()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      let n = r.closest(t);
      return !n && !r.getRootNode ? null : n || i(r.getRootNode().host);
    }
    return i(e);
  }
  function kt(t) {
    let e = this,
      i = V(),
      r = O(),
      n = e.touchEventsData;
    n.evCache.push(t);
    let { params: s, touches: l, enabled: a } = e;
    if (
      !a ||
      (!s.simulateTouch && t.pointerType === 'mouse') ||
      (e.animating && s.preventInteractionOnTransition)
    )
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let o = t;
    o.originalEvent && (o = o.originalEvent);
    let c = o.target;
    if (
      (s.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(c)) ||
      ('which' in o && o.which === 3) ||
      ('button' in o && o.button > 0) ||
      (n.isTouched && n.isMoved)
    )
      return;
    let f = !!s.noSwipingClass && s.noSwipingClass !== '',
      u = t.composedPath ? t.composedPath() : t.path;
    f && o.target && o.target.shadowRoot && u && (c = u[0]);
    let m = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
      d = !!(o.target && o.target.shadowRoot);
    if (s.noSwiping && (d ? zt(m, c) : c.closest(m))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !c.closest(s.swipeHandler)) return;
    (l.currentX = o.pageX), (l.currentY = o.pageY);
    let b = l.currentX,
      h = l.currentY,
      w = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
      p = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (w && (b <= p || b >= r.innerWidth - p))
      if (w === 'prevent') t.preventDefault();
      else return;
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (l.startX = b),
      (l.startY = h),
      (n.touchStartTime = R()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (n.allowThresholdMove = !1);
    let v = !0;
    c.matches(n.focusableElements) && ((v = !1), c.nodeName === 'SELECT' && (n.isTouched = !1)),
      i.activeElement &&
        i.activeElement.matches(n.focusableElements) &&
        i.activeElement !== c &&
        i.activeElement.blur();
    let S = v && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || S) && !c.isContentEditable && o.preventDefault(),
      s.freeMode &&
        s.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !s.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit('touchStart', o);
  }
  function qt(t) {
    let e = V(),
      i = this,
      r = i.touchEventsData,
      { params: n, touches: s, rtlTranslate: l, enabled: a } = i;
    if (!a || (!n.simulateTouch && t.pointerType === 'mouse')) return;
    let o = t;
    if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && i.emit('touchMoveOpposite', o);
      return;
    }
    let c = r.evCache.findIndex((L) => L.pointerId === o.pointerId);
    c >= 0 && (r.evCache[c] = o);
    let f = r.evCache.length > 1 ? r.evCache[0] : o,
      u = f.pageX,
      m = f.pageY;
    if (o.preventedByNestedSwiper) {
      (s.startX = u), (s.startY = m);
      return;
    }
    if (!i.allowTouchMove) {
      o.target.matches(r.focusableElements) || (i.allowClick = !1),
        r.isTouched &&
          (Object.assign(s, {
            startX: u,
            startY: m,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: u,
            currentY: m,
          }),
          (r.touchStartTime = R()));
      return;
    }
    if (n.touchReleaseOnEdges && !n.loop) {
      if (i.isVertical()) {
        if (
          (m < s.startY && i.translate <= i.maxTranslate()) ||
          (m > s.startY && i.translate >= i.minTranslate())
        ) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if (
        (u < s.startX && i.translate <= i.maxTranslate()) ||
        (u > s.startX && i.translate >= i.minTranslate())
      )
        return;
    }
    if (e.activeElement && o.target === e.activeElement && o.target.matches(r.focusableElements)) {
      (r.isMoved = !0), (i.allowClick = !1);
      return;
    }
    if (
      (r.allowTouchCallbacks && i.emit('touchMove', o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (s.currentX = u), (s.currentY = m);
    let d = s.currentX - s.startX,
      b = s.currentY - s.startY;
    if (i.params.threshold && Math.sqrt(d ** 2 + b ** 2) < i.params.threshold) return;
    if (typeof r.isScrolling === 'undefined') {
      let L;
      (i.isHorizontal() && s.currentY === s.startY) || (i.isVertical() && s.currentX === s.startX)
        ? (r.isScrolling = !1)
        : d * d + b * b >= 25 &&
          ((L = (Math.atan2(Math.abs(b), Math.abs(d)) * 180) / Math.PI),
          (r.isScrolling = i.isHorizontal() ? L > n.touchAngle : 90 - L > n.touchAngle));
    }
    if (
      (r.isScrolling && i.emit('touchMoveOpposite', o),
      typeof r.startMoving === 'undefined' &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (r.startMoving = !0),
      r.isScrolling || (i.zoom && i.params.zoom && i.params.zoom.enabled && r.evCache.length > 1))
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (i.allowClick = !1),
      !n.cssMode && o.cancelable && o.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && o.stopPropagation();
    let h = i.isHorizontal() ? d : b,
      w = i.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    n.oneWayMovement && ((h = Math.abs(h) * (l ? 1 : -1)), (w = Math.abs(w) * (l ? 1 : -1))),
      (s.diff = h),
      (h *= n.touchRatio),
      l && ((h = -h), (w = -w));
    let p = i.touchesDirection;
    (i.swipeDirection = h > 0 ? 'prev' : 'next'), (i.touchesDirection = w > 0 ? 'prev' : 'next');
    let v = i.params.loop && !n.cssMode;
    if (!r.isMoved) {
      if (
        (v && i.loopFix({ direction: i.swipeDirection }),
        (r.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating)
      ) {
        let L = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
        i.wrapperEl.dispatchEvent(L);
      }
      (r.allowMomentumBounce = !1),
        n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
        i.emit('sliderFirstMove', o);
    }
    let S;
    r.isMoved &&
      p !== i.touchesDirection &&
      v &&
      Math.abs(h) >= 1 &&
      (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (S = !0)),
      i.emit('sliderMove', o),
      (r.isMoved = !0),
      (r.currentTranslate = h + r.startTranslate);
    let y = !0,
      C = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (C = 0),
      h > 0
        ? (v &&
            !S &&
            r.currentTranslate >
              (n.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) &&
            i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
          r.currentTranslate > i.minTranslate() &&
            ((y = !1),
            n.resistance &&
              (r.currentTranslate =
                i.minTranslate() - 1 + (-i.minTranslate() + r.startTranslate + h) ** C)))
        : h < 0 &&
          (v &&
            !S &&
            r.currentTranslate <
              (n.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) &&
            i.loopFix({
              direction: 'next',
              setTranslate: !0,
              activeSlideIndex:
                i.slides.length -
                (n.slidesPerView === 'auto'
                  ? i.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          r.currentTranslate < i.maxTranslate() &&
            ((y = !1),
            n.resistance &&
              (r.currentTranslate =
                i.maxTranslate() + 1 - (i.maxTranslate() - r.startTranslate - h) ** C))),
      y && (o.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        i.swipeDirection === 'next' &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !i.allowSlidePrev &&
        i.swipeDirection === 'prev' &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !i.allowSlidePrev && !i.allowSlideNext && (r.currentTranslate = r.startTranslate),
      n.threshold > 0)
    )
      if (Math.abs(h) > n.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (r.currentTranslate = r.startTranslate),
            (s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !n.followFinger ||
      n.cssMode ||
      (((n.freeMode && n.freeMode.enabled && i.freeMode) || n.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
      i.updateProgress(r.currentTranslate),
      i.setTranslate(r.currentTranslate));
  }
  function Gt(t) {
    let e = this,
      i = e.touchEventsData,
      r = i.evCache.findIndex((S) => S.pointerId === t.pointerId);
    if (
      (r >= 0 && i.evCache.splice(r, 1),
      ['pointercancel', 'pointerout', 'pointerleave'].includes(t.type) &&
        !(t.type === 'pointercancel' && (e.browser.isSafari || e.browser.isWebView)))
    )
      return;
    let { params: n, touches: s, rtlTranslate: l, slidesGrid: a, enabled: o } = e;
    if (!o || (!n.simulateTouch && t.pointerType === 'mouse')) return;
    let c = t;
    if (
      (c.originalEvent && (c = c.originalEvent),
      i.allowTouchCallbacks && e.emit('touchEnd', c),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    ) {
      i.isMoved && n.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1);
      return;
    }
    n.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    let f = R(),
      u = f - i.touchStartTime;
    if (e.allowClick) {
      let S = c.path || (c.composedPath && c.composedPath());
      e.updateClickedSlide((S && S[0]) || c.target),
        e.emit('tap click', c),
        u < 300 && f - i.lastClickTime < 300 && e.emit('doubleTap doubleClick', c);
    }
    if (
      ((i.lastClickTime = R()),
      X(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !e.swipeDirection ||
        s.diff === 0 ||
        i.currentTranslate === i.startTranslate)
    ) {
      (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
      return;
    }
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    let m;
    if (
      (n.followFinger ? (m = l ? e.translate : -e.translate) : (m = -i.currentTranslate), n.cssMode)
    )
      return;
    if (n.freeMode && n.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: m });
      return;
    }
    let d = 0,
      b = e.slidesSizesGrid[0];
    for (let S = 0; S < a.length; S += S < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
      let y = S < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      typeof a[S + y] !== 'undefined'
        ? m >= a[S] && m < a[S + y] && ((d = S), (b = a[S + y] - a[S]))
        : m >= a[S] && ((d = S), (b = a[a.length - 1] - a[a.length - 2]));
    }
    let h = null,
      w = null;
    n.rewind &&
      (e.isBeginning
        ? (w =
            n.virtual && n.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (h = 0));
    let p = (m - a[d]) / b,
      v = d < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (u > n.longSwipesMs) {
      if (!n.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === 'next' &&
        (p >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? h : d + v) : e.slideTo(d)),
        e.swipeDirection === 'prev' &&
          (p > 1 - n.longSwipesRatio
            ? e.slideTo(d + v)
            : w !== null && p < 0 && Math.abs(p) > n.longSwipesRatio
            ? e.slideTo(w)
            : e.slideTo(d));
    } else {
      if (!n.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl)
        ? c.target === e.navigation.nextEl
          ? e.slideTo(d + v)
          : e.slideTo(d)
        : (e.swipeDirection === 'next' && e.slideTo(h !== null ? h : d + v),
          e.swipeDirection === 'prev' && e.slideTo(w !== null ? w : d));
    }
  }
  function Pe() {
    let t = this,
      { params: e, el: i } = t;
    if (i && i.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    let { allowSlideNext: r, allowSlidePrev: n, snapGrid: s } = t,
      l = t.virtual && t.params.virtual.enabled;
    (t.allowSlideNext = !0),
      (t.allowSlidePrev = !0),
      t.updateSize(),
      t.updateSlides(),
      t.updateSlidesClasses();
    let a = l && e.loop;
    (e.slidesPerView === 'auto' || e.slidesPerView > 1) &&
    t.isEnd &&
    !t.isBeginning &&
    !t.params.centeredSlides &&
    !a
      ? t.slideTo(t.slides.length - 1, 0, !1, !0)
      : t.params.loop && !l
      ? t.slideToLoop(t.realIndex, 0, !1, !0)
      : t.slideTo(t.activeIndex, 0, !1, !0),
      t.autoplay &&
        t.autoplay.running &&
        t.autoplay.paused &&
        (clearTimeout(t.autoplay.resizeTimeout),
        (t.autoplay.resizeTimeout = setTimeout(() => {
          t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
        }, 500))),
      (t.allowSlidePrev = n),
      (t.allowSlideNext = r),
      t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
  }
  function Dt(t) {
    let e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && t.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (t.stopPropagation(), t.stopImmediatePropagation())));
  }
  function Vt() {
    let t = this,
      { wrapperEl: e, rtlTranslate: i, enabled: r } = t;
    if (!r) return;
    (t.previousTranslate = t.translate),
      t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop),
      t.translate === 0 && (t.translate = 0),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
    let n,
      s = t.maxTranslate() - t.minTranslate();
    s === 0 ? (n = 0) : (n = (t.translate - t.minTranslate()) / s),
      n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
      t.emit('setTranslate', t.translate, !1);
  }
  function Bt(t) {
    let e = this;
    Y(e, t.target),
      !(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) &&
        e.update();
  }
  var Le = !1;
  function Ft() {}
  var Oe = (t, e) => {
    let i = V(),
      { params: r, el: n, wrapperEl: s, device: l } = t,
      a = !!r.nested,
      o = e === 'on' ? 'addEventListener' : 'removeEventListener',
      c = e;
    n[o]('pointerdown', t.onTouchStart, { passive: !1 }),
      i[o]('pointermove', t.onTouchMove, { passive: !1, capture: a }),
      i[o]('pointerup', t.onTouchEnd, { passive: !0 }),
      i[o]('pointercancel', t.onTouchEnd, { passive: !0 }),
      i[o]('pointerout', t.onTouchEnd, { passive: !0 }),
      i[o]('pointerleave', t.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) && n[o]('click', t.onClick, !0),
      r.cssMode && s[o]('scroll', t.onScroll),
      r.updateOnWindowResize
        ? t[c](
            l.ios || l.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            Pe,
            !0
          )
        : t[c]('observerUpdate', Pe, !0),
      n[o]('load', t.onLoad, { capture: !0 });
  };
  function Nt() {
    let t = this,
      e = V(),
      { params: i } = t;
    (t.onTouchStart = kt.bind(t)),
      (t.onTouchMove = qt.bind(t)),
      (t.onTouchEnd = Gt.bind(t)),
      i.cssMode && (t.onScroll = Vt.bind(t)),
      (t.onClick = Dt.bind(t)),
      (t.onLoad = Bt.bind(t)),
      Le || (e.addEventListener('touchstart', Ft), (Le = !0)),
      Oe(t, 'on');
  }
  function Rt() {
    Oe(this, 'off');
  }
  var Ht = { attachEvents: Nt, detachEvents: Rt },
    Ae = (t, e) => t.grid && e.grid && e.grid.rows > 1;
  function Wt() {
    let t = this,
      { realIndex: e, initialized: i, params: r, el: n } = t,
      s = r.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    let l = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
    if (!l || t.currentBreakpoint === l) return;
    let o = (l in s ? s[l] : void 0) || t.originalParams,
      c = Ae(t, r),
      f = Ae(t, o),
      u = r.enabled;
    c && !f
      ? (n.classList.remove(
          `${r.containerModifierClass}grid`,
          `${r.containerModifierClass}grid-column`
        ),
        t.emitContainerClasses())
      : !c &&
        f &&
        (n.classList.add(`${r.containerModifierClass}grid`),
        ((o.grid.fill && o.grid.fill === 'column') || (!o.grid.fill && r.grid.fill === 'column')) &&
          n.classList.add(`${r.containerModifierClass}grid-column`),
        t.emitContainerClasses()),
      ['navigation', 'pagination', 'scrollbar'].forEach((h) => {
        if (typeof o[h] === 'undefined') return;
        let w = r[h] && r[h].enabled,
          p = o[h] && o[h].enabled;
        w && !p && t[h].disable(), !w && p && t[h].enable();
      });
    let m = o.direction && o.direction !== r.direction,
      d = r.loop && (o.slidesPerView !== r.slidesPerView || m);
    m && i && t.changeDirection(), z(t.params, o);
    let b = t.params.enabled;
    Object.assign(t, {
      allowTouchMove: t.params.allowTouchMove,
      allowSlideNext: t.params.allowSlideNext,
      allowSlidePrev: t.params.allowSlidePrev,
    }),
      u && !b ? t.disable() : !u && b && t.enable(),
      (t.currentBreakpoint = l),
      t.emit('_beforeBreakpoint', o),
      d && i && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()),
      t.emit('breakpoint', o);
  }
  function $t(t, e, i) {
    if ((e === void 0 && (e = 'window'), !t || (e === 'container' && !i))) return;
    let r = !1,
      n = O(),
      s = e === 'window' ? n.innerHeight : i.clientHeight,
      l = Object.keys(t).map((a) => {
        if (typeof a === 'string' && a.indexOf('@') === 0) {
          let o = parseFloat(a.substr(1));
          return { value: s * o, point: a };
        }
        return { value: a, point: a };
      });
    l.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
    for (let a = 0; a < l.length; a += 1) {
      let { point: o, value: c } = l[a];
      e === 'window'
        ? n.matchMedia(`(min-width: ${c}px)`).matches && (r = o)
        : c <= i.clientWidth && (r = o);
    }
    return r || 'max';
  }
  var jt = { setBreakpoint: Wt, getBreakpoint: $t };
  function Xt(t, e) {
    let i = [];
    return (
      t.forEach((r) => {
        typeof r === 'object'
          ? Object.keys(r).forEach((n) => {
              r[n] && i.push(e + n);
            })
          : typeof r === 'string' && i.push(e + r);
      }),
      i
    );
  }
  function Yt() {
    let t = this,
      { classNames: e, params: i, rtl: r, el: n, device: s } = t,
      l = Xt(
        [
          'initialized',
          i.direction,
          { 'free-mode': t.params.freeMode && i.freeMode.enabled },
          { autoheight: i.autoHeight },
          { rtl: r },
          { grid: i.grid && i.grid.rows > 1 },
          { 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
          { android: s.android },
          { ios: s.ios },
          { 'css-mode': i.cssMode },
          { centered: i.cssMode && i.centeredSlides },
          { 'watch-progress': i.watchSlidesProgress },
        ],
        i.containerModifierClass
      );
    e.push(...l), n.classList.add(...e), t.emitContainerClasses();
  }
  function Kt() {
    let t = this,
      { el: e, classNames: i } = t;
    e.classList.remove(...i), t.emitContainerClasses();
  }
  var Ut = { addClasses: Yt, removeClasses: Kt };
  function Jt() {
    let t = this,
      { isLocked: e, params: i } = t,
      { slidesOffsetBefore: r } = i;
    if (r) {
      let n = t.slides.length - 1,
        s = t.slidesGrid[n] + t.slidesSizesGrid[n] + r * 2;
      t.isLocked = t.size > s;
    } else t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
      i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
      e && e !== t.isLocked && (t.isEnd = !1),
      e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock');
  }
  var Qt = { checkOverflow: Jt },
    _e = {
      init: !0,
      direction: 'horizontal',
      oneWayMovement: !1,
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: 'input, select, option, textarea, button, video, label',
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: 'slide',
      breakpoints: void 0,
      breakpointsBase: 'window',
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: 'swiper-',
      slideClass: 'swiper-slide',
      slideActiveClass: 'swiper-slide-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideNextClass: 'swiper-slide-next',
      slidePrevClass: 'swiper-slide-prev',
      wrapperClass: 'swiper-wrapper',
      lazyPreloaderClass: 'swiper-lazy-preloader',
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function Zt(t, e) {
    return function (r) {
      r === void 0 && (r = {});
      let n = Object.keys(r)[0],
        s = r[n];
      if (typeof s !== 'object' || s === null) {
        z(e, r);
        return;
      }
      if (
        (['navigation', 'pagination', 'scrollbar'].indexOf(n) >= 0 &&
          t[n] === !0 &&
          (t[n] = { auto: !0 }),
        !(n in t && 'enabled' in s))
      ) {
        z(e, r);
        return;
      }
      t[n] === !0 && (t[n] = { enabled: !0 }),
        typeof t[n] === 'object' && !('enabled' in t[n]) && (t[n].enabled = !0),
        t[n] || (t[n] = { enabled: !1 }),
        z(e, r);
    };
  }
  var se = {
      eventsEmitter: Ue,
      update: at,
      translate: pt,
      transition: wt,
      slide: Ct,
      loop: _t,
      grabCursor: Ot,
      events: Ht,
      breakpoints: jt,
      checkOverflow: Qt,
      classes: Ut,
    },
    ne = {},
    _ = class {
      constructor() {
        let e, i;
        for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
        n.length === 1 &&
        n[0].constructor &&
        Object.prototype.toString.call(n[0]).slice(8, -1) === 'Object'
          ? (i = n[0])
          : ([e, i] = n),
          i || (i = {}),
          (i = z({}, i)),
          e && !i.el && (i.el = e);
        let l = V();
        if (i.el && typeof i.el === 'string' && l.querySelectorAll(i.el).length > 1) {
          let f = [];
          return (
            l.querySelectorAll(i.el).forEach((u) => {
              let m = z({}, i, { el: u });
              f.push(new _(m));
            }),
            f
          );
        }
        let a = this;
        (a.__swiper__ = !0),
          (a.support = Ie()),
          (a.device = $e({ userAgent: i.userAgent })),
          (a.browser = Xe()),
          (a.eventsListeners = {}),
          (a.eventsAnyListeners = []),
          (a.modules = [...a.__modules__]),
          i.modules && Array.isArray(i.modules) && a.modules.push(...i.modules);
        let o = {};
        a.modules.forEach((f) => {
          f({
            params: i,
            swiper: a,
            extendParams: Zt(i, o),
            on: a.on.bind(a),
            once: a.once.bind(a),
            off: a.off.bind(a),
            emit: a.emit.bind(a),
          });
        });
        let c = z({}, _e, o);
        return (
          (a.params = z({}, c, ne, i)),
          (a.originalParams = z({}, a.params)),
          (a.passedParams = z({}, i)),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach((f) => {
              a.on(f, a.params.on[f]);
            }),
          a.params && a.params.onAny && a.onAny(a.params.onAny),
          Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return a.params.direction === 'horizontal';
            },
            isVertical() {
              return a.params.direction === 'vertical';
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: a.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          a.emit('_swiper'),
          a.params.init && a.init(),
          a
        );
      }
      getSlideIndex(e) {
        let { slidesEl: i, params: r } = this,
          n = D(i, `.${r.slideClass}, swiper-slide`),
          s = Q(n[0]);
        return Q(e) - s;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === e)[0]
        );
      }
      recalcSlides() {
        let e = this,
          { slidesEl: i, params: r } = e;
        e.slides = D(i, `.${r.slideClass}, swiper-slide`);
      }
      enable() {
        let e = this;
        e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
      }
      disable() {
        let e = this;
        e.enabled &&
          ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
      }
      setProgress(e, i) {
        let r = this;
        e = Math.min(Math.max(e, 0), 1);
        let n = r.minTranslate(),
          l = (r.maxTranslate() - n) * e + n;
        r.translateTo(l, typeof i === 'undefined' ? 0 : i),
          r.updateActiveIndex(),
          r.updateSlidesClasses();
      }
      emitContainerClasses() {
        let e = this;
        if (!e.params._emitClasses || !e.el) return;
        let i = e.el.className
          .split(' ')
          .filter(
            (r) => r.indexOf('swiper') === 0 || r.indexOf(e.params.containerModifierClass) === 0
          );
        e.emit('_containerClasses', i.join(' '));
      }
      getSlideClasses(e) {
        let i = this;
        return i.destroyed
          ? ''
          : e.className
              .split(' ')
              .filter(
                (r) => r.indexOf('swiper-slide') === 0 || r.indexOf(i.params.slideClass) === 0
              )
              .join(' ');
      }
      emitSlidesClasses() {
        let e = this;
        if (!e.params._emitClasses || !e.el) return;
        let i = [];
        e.slides.forEach((r) => {
          let n = e.getSlideClasses(r);
          i.push({ slideEl: r, classNames: n }), e.emit('_slideClass', r, n);
        }),
          e.emit('_slideClasses', i);
      }
      slidesPerViewDynamic(e, i) {
        e === void 0 && (e = 'current'), i === void 0 && (i = !1);
        let r = this,
          { params: n, slides: s, slidesGrid: l, slidesSizesGrid: a, size: o, activeIndex: c } = r,
          f = 1;
        if (n.centeredSlides) {
          let u = s[c] ? s[c].swiperSlideSize : 0,
            m;
          for (let d = c + 1; d < s.length; d += 1)
            s[d] && !m && ((u += s[d].swiperSlideSize), (f += 1), u > o && (m = !0));
          for (let d = c - 1; d >= 0; d -= 1)
            s[d] && !m && ((u += s[d].swiperSlideSize), (f += 1), u > o && (m = !0));
        } else if (e === 'current')
          for (let u = c + 1; u < s.length; u += 1)
            (i ? l[u] + a[u] - l[c] < o : l[u] - l[c] < o) && (f += 1);
        else for (let u = c - 1; u >= 0; u -= 1) l[c] - l[u] < o && (f += 1);
        return f;
      }
      update() {
        let e = this;
        if (!e || e.destroyed) return;
        let { snapGrid: i, params: r } = e;
        r.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
            l.complete && Y(e, l);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses();
        function n() {
          let l = e.rtlTranslate ? e.translate * -1 : e.translate,
            a = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
          e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode)
          n(), r.autoHeight && e.updateAutoHeight();
        else {
          if ((r.slidesPerView === 'auto' || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
            let l = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
            s = e.slideTo(l.length - 1, 0, !1, !0);
          } else s = e.slideTo(e.activeIndex, 0, !1, !0);
          s || n();
        }
        r.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit('update');
      }
      changeDirection(e, i) {
        i === void 0 && (i = !0);
        let r = this,
          n = r.params.direction;
        return (
          e || (e = n === 'horizontal' ? 'vertical' : 'horizontal'),
          e === n ||
            (e !== 'horizontal' && e !== 'vertical') ||
            (r.el.classList.remove(`${r.params.containerModifierClass}${n}`),
            r.el.classList.add(`${r.params.containerModifierClass}${e}`),
            r.emitContainerClasses(),
            (r.params.direction = e),
            r.slides.forEach((s) => {
              e === 'vertical' ? (s.style.width = '') : (s.style.height = '');
            }),
            r.emit('changeDirection'),
            i && r.update()),
          r
        );
      }
      changeLanguageDirection(e) {
        let i = this;
        (i.rtl && e === 'rtl') ||
          (!i.rtl && e === 'ltr') ||
          ((i.rtl = e === 'rtl'),
          (i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
          i.rtl
            ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
            : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
          i.update());
      }
      mount(e) {
        let i = this;
        if (i.mounted) return !0;
        let r = e || i.params.el;
        if ((typeof r === 'string' && (r = document.querySelector(r)), !r)) return !1;
        (r.swiper = i),
          r.parentNode &&
            r.parentNode.host &&
            r.parentNode.host.nodeName === 'SWIPER-CONTAINER' &&
            (i.isElement = !0);
        let n = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`,
          l = (() =>
            r && r.shadowRoot && r.shadowRoot.querySelector
              ? r.shadowRoot.querySelector(n())
              : D(r, n())[0])();
        return (
          !l &&
            i.params.createElements &&
            ((l = Te('div', i.params.wrapperClass)),
            r.append(l),
            D(r, `.${i.params.slideClass}`).forEach((a) => {
              l.append(a);
            })),
          Object.assign(i, {
            el: r,
            wrapperEl: l,
            slidesEl: i.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
            hostEl: i.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: r.dir.toLowerCase() === 'rtl' || B(r, 'direction') === 'rtl',
            rtlTranslate:
              i.params.direction === 'horizontal' &&
              (r.dir.toLowerCase() === 'rtl' || B(r, 'direction') === 'rtl'),
            wrongRTL: B(l, 'display') === '-webkit-box',
          }),
          !0
        );
      }
      init(e) {
        let i = this;
        return (
          i.initialized ||
            i.mount(e) === !1 ||
            (i.emit('beforeInit'),
            i.params.breakpoints && i.setBreakpoint(),
            i.addClasses(),
            i.updateSize(),
            i.updateSlides(),
            i.params.watchOverflow && i.checkOverflow(),
            i.params.grabCursor && i.enabled && i.setGrabCursor(),
            i.params.loop && i.virtual && i.params.virtual.enabled
              ? i.slideTo(
                  i.params.initialSlide + i.virtual.slidesBefore,
                  0,
                  i.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
            i.params.loop && i.loopCreate(),
            i.attachEvents(),
            [...i.el.querySelectorAll('[loading="lazy"]')].forEach((n) => {
              n.complete
                ? Y(i, n)
                : n.addEventListener('load', (s) => {
                    Y(i, s.target);
                  });
            }),
            oe(i),
            (i.initialized = !0),
            oe(i),
            i.emit('init'),
            i.emit('afterInit')),
          i
        );
      }
      destroy(e, i) {
        e === void 0 && (e = !0), i === void 0 && (i = !0);
        let r = this,
          { params: n, el: s, wrapperEl: l, slides: a } = r;
        return (
          typeof r.params === 'undefined' ||
            r.destroyed ||
            (r.emit('beforeDestroy'),
            (r.initialized = !1),
            r.detachEvents(),
            n.loop && r.loopDestroy(),
            i &&
              (r.removeClasses(),
              s.removeAttribute('style'),
              l.removeAttribute('style'),
              a &&
                a.length &&
                a.forEach((o) => {
                  o.classList.remove(
                    n.slideVisibleClass,
                    n.slideActiveClass,
                    n.slideNextClass,
                    n.slidePrevClass
                  ),
                    o.removeAttribute('style'),
                    o.removeAttribute('data-swiper-slide-index');
                })),
            r.emit('destroy'),
            Object.keys(r.eventsListeners).forEach((o) => {
              r.off(o);
            }),
            e !== !1 && ((r.el.swiper = null), be(r)),
            (r.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        z(ne, e);
      }
      static get extendedDefaults() {
        return ne;
      }
      static get defaults() {
        return _e;
      }
      static installModule(e) {
        _.prototype.__modules__ || (_.prototype.__modules__ = []);
        let i = _.prototype.__modules__;
        typeof e === 'function' && i.indexOf(e) < 0 && i.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((i) => _.installModule(i)), _)
          : (_.installModule(e), _);
      }
    };
  Object.keys(se).forEach((t) => {
    Object.keys(se[t]).forEach((e) => {
      _.prototype[e] = se[t][e];
    });
  });
  _.use([Ye, Ke]);
  var ze = () => {
    let t = document.querySelector('.range-slider-sticky-parent');
    t &&
      fsAttributes.rangeslider.loading
        .then((e) => {
          if (fsAttributes.rangeslider.loading instanceof Promise) {
            let m = function () {
                document
                  .querySelectorAll(
                    '[range-price-value-' + f + '-' + o.getAttribute('aria-valuenow') + ']'
                  )
                  .forEach((p) => {
                    let v = p.getAttribute(
                        'range-price-value-' + f + '-' + o.getAttribute('aria-valuenow')
                      ),
                      S = p.closest('[price-card-header]');
                    if (S) {
                      let C = S.querySelector('[price-card-header-cta]'),
                        L = S.querySelector('[price-card-header-price]');
                      o.getAttribute('aria-valuenow') == '10'
                        ? (C.classList.remove('hide'), L.classList.add('hide'))
                        : (C.classList.add('hide'), L.classList.remove('hide'));
                    }
                    let y = (v.match(/\*/g) || []).length;
                    y === 1
                      ? (p.innerHTML = v.replace('*', '<s>'))
                      : y === 2
                      ? (p.innerHTML = v.replace('*', '<s>').replace('*', '</s>'))
                      : (p.textContent = v);
                  });
              },
              b = function () {
                setTimeout(function () {
                  document.querySelectorAll('.swiper-slide').forEach((p, v) => {
                    p.classList.contains('swiper-slide-active') &&
                      (document.querySelectorAll('[column-number]').forEach((y) => {
                        y.classList.add('hide');
                      }),
                      document
                        .querySelector('[column-number="' + p.getAttribute('swiper-number') + '"]')
                        .classList.remove('hide'));
                  });
                }, 150);
              };
            var i = m,
              r = b;
            let n = document.querySelectorAll('[pricing-table-category]'),
              s = document.querySelectorAll('[pricing-table-category-name]'),
              l = document.querySelectorAll('[prcing-header-clonable]');
            n.forEach((w, p) => {
              w.setAttribute('pricing-table-category', w.firstElementChild.textContent);
            }),
              s.forEach((w, p) => {
                w.setAttribute('pricing-table-category-name', w.firstElementChild.textContent);
              }),
              l.forEach((w, p) => {
                let v = [],
                  S = [],
                  y = n[0];
                for (v.push(y); y.nextElementSibling; )
                  (y = y.nextElementSibling), y.hasAttribute('pricing-table-category') && v.push(y);
                v.forEach((g) => {
                  let P = [],
                    E = g;
                  for (
                    ;
                    E.nextElementSibling &&
                    E.nextElementSibling.hasAttribute('pricing-table-category') === !1;

                  )
                    (E = E.nextElementSibling),
                      E.hasAttribute('pricing-table-category-name') && P.push(E);
                  S.push(P);
                });
                let C = document.querySelector('.price-swiper-table-wrapper'),
                  L = document.createElement('div');
                L.classList.add('price-swiper-table-column'),
                  L.setAttribute('column-number', p),
                  C.appendChild(L),
                  v.forEach((g, P) => {
                    let E = document.createElement('div');
                    E.classList.add('price-swiper-table_clonable-elemts_category-row-header');
                    let M = document.createElement('div');
                    M.classList.add('text-size-link', 'text-weight-medium'),
                      (M.textContent = g.getAttribute('pricing-table-category')),
                      E.appendChild(M),
                      L.appendChild(E);
                    let T = !0;
                    S[P].forEach((x, A) => {
                      let I = x.getAttribute('pricing-table-category-name'),
                        k = document.createElement('div');
                      k.classList.add('price-swiper-table_clonable-elemts_category-row'),
                        T ? (k.classList.add('is-odd'), (T = !1)) : (T = !0);
                      let G = document.createElement('div');
                      G.classList.add('price-swiper-table_clonable-elemts_category-row-line');
                      let q = document.createElement('div');
                      G.classList.add('text-size-link', 'text-weight-medium'),
                        (q.textContent = I),
                        L.appendChild(k),
                        k.appendChild(G),
                        G.appendChild(q);
                      let W =
                        x.nextElementSibling.nextElementSibling.nextElementSibling
                          .nextElementSibling.nextElementSibling.firstElementChild;
                      if (W.textContent.length > 1) {
                        let N = document
                          .querySelector('.price-swiper-table_clonable-elemts_category-row_2')
                          .cloneNode(!0);
                        N.classList.remove('is-active'),
                          (N.querySelector('.description-content').textContent = W.textContent);
                        let K = document
                          .querySelector(
                            '.price-swiper-table_clonable-elemts_category-row-line-arrow'
                          )
                          .cloneNode(!0);
                        k.appendChild(N), G.appendChild(K);
                      }
                      let F = [];
                      F.push(x.nextElementSibling.firstElementChild),
                        F.push(x.nextElementSibling.nextElementSibling.firstElementChild),
                        F.push(
                          x.nextElementSibling.nextElementSibling.nextElementSibling
                            .firstElementChild
                        ),
                        F.push(
                          x.nextElementSibling.nextElementSibling.nextElementSibling
                            .nextElementSibling.firstElementChild
                        );
                      let $ = F[p].cloneNode(!0);
                      k.appendChild($);
                    });
                  });
              });
            let a = document.querySelector('.swiper-wrapper.is-pricing-page');
            l.forEach((w, p) => {
              let v = document.createElement('div');
              v.setAttribute('swiper-number', p),
                v.classList.add('swiper-slide'),
                v.classList.add('is-pricing-page');
              let S = w.cloneNode(!0);
              v.appendChild(S), a.appendChild(v);
            });
            let o = t.querySelector('.fs-rangeslider_handle'),
              c = t.querySelector('[fs-cmsfilter-field="price"]'),
              f = 'm',
              u = document.querySelectorAll('.time-accordion_nav.is-pricing .button');
            u.forEach((w) => {
              w.addEventListener('mousedown', function () {
                u.forEach((p) => {
                  p.classList.remove('_w--current');
                }),
                  w.classList.add('_w--current'),
                  (f = w.querySelector('input').getAttribute('value')),
                  m();
              });
            }),
              c.addEventListener('input', function () {
                m();
              });
            let d = new _('.swiper.is-pricing-page', {
              slidesPerView: 1.2,
              centeredSlides: !0,
              spaceBetween: 0,
              initialSlide: 2,
            });
            d.slideTo(0),
              setTimeout(function () {
                d.slideTo(1);
              }, 500),
              d.on('slideChange', function () {
                b();
              }),
              document
                .querySelectorAll('.price-swiper-table_clonable-elemts_category-row_2')
                .forEach((w) => {
                  let p = w.closest('.price-swiper-table_clonable-elemts_category-row');
                  p.addEventListener('click', function () {
                    let v = p.querySelector('.price-swiper-table_clonable-elemts_category-row_2'),
                      S = p.querySelector(
                        '.price-swiper-table_clonable-elemts_category-row-line-arrow'
                      );
                    v.classList.toggle('is-active'), S.classList.toggle('is-active');
                  });
                });
          }
          i(),
            r(),
            setTimeout(r, 3e3),
            window.addEventListener('resize', function () {
              r();
            });
        })
        .catch((e) => {});
  };
  var ke = () => {
    let t = document.querySelector('.section_swiper-1');
    if (t) {
      let e = new _('.swiper.swiper-1_wrapper', {
          direction: 'horizontal',
          loop: !0,
          breakpoints: {
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 32 },
            992: { slidesPerView: 3, spaceBetween: 32 },
          },
        }),
        i = t.querySelectorAll('.swiper-slide'),
        r = i.length;
      r > 3 && (console.log(r), t.querySelector('.swiper-1_footer').classList.remove('hide-on-pc'));
      let n = t.querySelectorAll('.card_item.is-background.is-swiper');
      i.forEach((o, c) => {
        o.setAttribute('current-slide-id', c + 1);
      });
      let s = document.querySelector('.is-swiper-1-count');
      s &&
        ((s.textContent = '1/' + r),
        e.on('slideChange', function () {
          setTimeout(function () {
            let c = t.querySelector('.swiper-slide-active').getAttribute('current-slide-id');
            (s.textContent = c + '/' + r), n.forEach((f) => {});
          }, 200);
        }));
      let l = t.querySelector('.arrow-icon.is-swiper.is-left'),
        a = t.querySelector('.arrow-icon.is-swiper.is-right');
      l &&
        l.addEventListener('click', function () {
          e.slidePrev();
        }),
        a &&
          a.addEventListener('click', function () {
            e.slideNext();
          });
    }
  };
  var qe = () => {
    if (document.querySelector('.clw_insta-stories_row')) {
      let e = new _('.swiper.is-soc-media', {
        slidesPerView: 1.5,
        centeredSlides: !0,
        spaceBetween: 24,
        initialSlide: 2,
        freeMode: { enabled: !0 },
      });
    }
  };
  var Ge = () => {
    if (document.querySelector('[time-accordion-component]')) {
      let e = setInterval(function () {
        document
          .querySelector('.time-accordion_inner .w--tab-active')
          .querySelectorAll('.cl-i_time-accordion_widget-content-row').length &&
          (clearInterval(e),
          setTimeout(function () {
            setTimeout(function () {
              document.querySelector('.section_time-accordion').classList.remove('hide-opacity');
            }, 300);
            let n,
              s = document.querySelectorAll(
                '.time-accordion_inner .cl-i_time-accordion_widget-content-row'
              );
            s[0].classList.add('active'),
              s.forEach((g) => {
                g.addEventListener('click', () => {
                  clearInterval(n),
                    s.forEach((P) => {
                      P.classList.remove('active');
                    }),
                    g.classList.add('active'),
                    a();
                });
              });
            function l(g) {
              let P = g.querySelector('.time-accordion_widget-content-row-progress'),
                E = g.querySelector('.arrow-icon'),
                M = g.querySelector('.is-time-accordion_widget-content-row-col'),
                T = g.getAttribute('data-id'),
                x = document.querySelector(`.visual-with-shadow_visual[data-id="${T}"]`),
                A = document.querySelectorAll('.visual-with-shadow_visual'),
                I = document.querySelectorAll('.time-accordion_widget-content-row-progress'),
                k = document.querySelectorAll('.arrow-icon'),
                G = document.querySelectorAll('.is-time-accordion_widget-content-row-col');
              I.forEach((q) => {
                q.classList.remove('animated');
              }),
                k.forEach((q) => {
                  q.classList.remove('animated');
                }),
                G.forEach((q) => {
                  q.classList.remove('animated');
                }),
                A.forEach((q) => {
                  q.classList.add('hide');
                }),
                P.classList.add('animated'),
                E.classList.add('animated'),
                M.classList.add('animated'),
                x.classList.remove('hide');
            }
            function a() {
              clearInterval(n);
              let g = document.querySelector('.cl-i_time-accordion_widget-content-row.active');
              l(g),
                (n = setInterval(() => {
                  if (g.nextElementSibling)
                    g.classList.remove('active'),
                      (g = g.nextElementSibling),
                      g.classList.add('active'),
                      l(g);
                  else {
                    let P = g.parentNode.firstChild;
                    g.classList.remove('active'), (g = P), g.classList.add('active'), a();
                  }
                }, 3500));
            }
            function o() {
              clearInterval(n),
                s.forEach((P) => {
                  P.classList.remove('active');
                });
              let g = document.querySelector('.time-accordion_inner .w--tab-active');
              if (g) {
                let P = g.querySelector('.button-append-waiter'),
                  E = g.querySelector('.button-append-src');
                P.appendChild(E),
                  g
                    .querySelectorAll('.cl-i_time-accordion_widget-content-row')[0]
                    .classList.add('active'),
                  a();
              }
            }
            document.querySelectorAll('.button-append-src a').forEach((g) => {
              g.addEventListener('click', () => {
                g.getAttribute('href'), (window.location.href = g.getAttribute('href'));
              });
            });
            let f = 0;
            function u(g, P) {
              return function (...E) {
                let M = Date.now();
                M - f >= P && (g.apply(this, E), (f = M));
              };
            }
            function m(g, P) {
              for (let E of g) E.type === 'attributes' && E.attributeName === 'class' && w();
            }
            let d = document.querySelectorAll('.w-tab-pane'),
              b = new MutationObserver(m),
              h = { attributes: !0, attributeFilter: ['class'] };
            d.forEach((g) => {
              b.observe(g, h),
                g
                  .closest('[time-accordion-component]')
                  .querySelectorAll('.cl-i_time-accordion_widget-content-row')
                  .forEach((M, T) => {
                    let x = M.querySelector('.visual-with-shadow_visual');
                    M.setAttribute('data-id', T), x && x.setAttribute('data-id', T);
                    let I = M.closest('.w-tab-pane').querySelector('[rows-image-placeholder]');
                    x && I.appendChild(x);
                  });
            });
            let w = u(o, 200);
            setTimeout(() => {
              o();
            }, 300);
            function p(g) {
              g.forEach((P) => {
                P.isIntersecting && o();
              });
            }
            function v(g) {
              g.forEach((P) => {
                P.isIntersecting || clearInterval(n);
              });
            }
            let S = { root: null, threshold: 0.5 },
              y = new IntersectionObserver(p, S),
              C = new IntersectionObserver(v, S),
              L = document.querySelector('.tabs');
            L && (y.observe(L), C.observe(L));
          }, 300));
      }, 300);
    }
  };
  var De = () => {
    let t = document.querySelector('[time-accordion-component-feature-page] .pc');
    if (t) {
      let d = function () {
          let w = t.querySelectorAll('.time-accordion_widget-content-row-progress'),
            p = t.querySelectorAll('.is-time-accordion_widget-content-row-col');
          w.forEach((v) => {
            v.classList.remove('animated');
          }),
            p.forEach((v) => {
              v.classList.remove('animated');
            });
        },
        b = function () {
          t.querySelectorAll('.pc .visual-with-shadow_object').forEach((p) => {
            p.classList.add('hide');
          });
        },
        h = function () {
          d(), b();
          let w = m.getAttribute('order');
          n.querySelector('[order="' + w + '"]').classList.remove('hide'),
            t.classList.remove('hide');
          let p = m.querySelector('.time-accordion_widget-content-row-progress'),
            v = m.querySelector('.is-time-accordion_widget-content-row-col');
          p.classList.add('animated'),
            v.classList.add('animated'),
            m.nextElementSibling ? (m = m.nextElementSibling) : (m = u);
        };
      var e = d,
        i = b,
        r = h;
      let n = t.querySelector('.cl_visual-with-shadow_object'),
        s,
        l = 3500,
        a = t.querySelectorAll('.time-accordion_widget-content-row'),
        o = t.querySelector('.time-accordion_widget-content-rows-wrapper'),
        c = Array.from(a);
      for (
        c.sort((w, p) => {
          let v = parseInt(w.getAttribute('order')),
            S = parseInt(p.getAttribute('order'));
          return v - S;
        });
        o.firstChild;

      )
        o.removeChild(o.firstChild);
      c.forEach((w) => {
        o.appendChild(w);
      });
      let u = t.querySelectorAll('.time-accordion_widget-content-row')[0];
      u.classList.add('is-active');
      let m = u;
      (s = setInterval(h, l)),
        a.forEach((w) => {
          w.addEventListener('click', function () {
            (m = w), d(), b(), h(), clearInterval(s), (s = setInterval(h, l));
          });
        }),
        d(),
        b(),
        h();
    }
  };
  var Ve = () => {
    let t = document.querySelector('.section_webinars');
    t &&
      t.querySelectorAll('[current-webinar-value]').forEach((i) => {
        i.value = i.getAttribute('current-webinar-value');
      });
  };
  window.Webflow || (window.Webflow = []);
  window.Webflow.push(() => {
    ge(),
      Ge(),
      ke(),
      qe(),
      le(),
      de(),
      ce(),
      ue(),
      ae(),
      fe(),
      Ve(),
      ze(),
      De(),
      he(),
      we(),
      me(),
      pe();
  });
})();
