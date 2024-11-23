import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  h,
  inject,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  provide,
  ref,
  render,
  renderSlot,
  toDisplayString,
  useCssVars,
  vModelRadio,
  vShow,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-VJWGEPT5.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/versakit-ui/dist/versakit-ui.js
var c = (r, s) => (r.install = (t) => {
  for (const e of [r, ...Object.values({})])
    t.component(e.name, e);
}, r);
var M = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    plain: { type: Boolean, required: true, default: false },
    round: { type: Boolean, required: true, default: false },
    disabled: { type: Boolean, required: true, default: false }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = computed(() => [
      "ver-btn",
      t.type == "" ? "" : `ver-btn-${t.type}`,
      t.plain == false ? "" : "is-plain",
      t.round == false ? "" : "is-round",
      t.disabled == false ? "" : "is-disabled"
    ]), a = { props: t, Verclass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var d = (r, s) => {
  const t = r.__vccOpts || r;
  for (const [e, a] of s)
    t[e] = a;
  return t;
};
var R = ["disabled"];
function L(r, s, t, e, a, n) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(e.Verclass),
    disabled: e.props.disabled
  }, [
    createBaseVNode("span", null, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ])
  ], 10, R);
}
var X = d(M, [["render", L], ["__scopeId", "data-v-38d58db5"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/button/src/index.vue"]]);
var H = c(X);
var U = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    size: { type: [String, Number], required: true, default: "" },
    truncated: { type: Boolean, required: true, default: false }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = computed(() => [
      "ver-text",
      t.type == "" ? "" : `ver-text-${t.type}`,
      t.size == "" ? "" : `ver-text-${t.size}`,
      t.truncated == false ? "" : "is-truncated"
    ]), a = { props: t, VerClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
function W(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var G = d(U, [["render", W], ["__scopeId", "data-v-9ab8a636"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/text/src/index.vue"]]);
var J = c(G);
var K = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: true, default: "" },
    disabled: { type: Boolean, required: true, default: false },
    href: { type: String, required: true, default: "" }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = computed(() => [
      "ver-link",
      t.type == "" ? "" : `ver-link-${t.type}`,
      t.disabled == false ? "" : "is-disable"
    ]), a = { props: t, VerClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var Q = ["href"];
function Y(r, s, t, e, a, n) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(e.VerClass),
    href: t.href
  }, [
    createBaseVNode("span", null, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ])
  ], 10, Q);
}
var Z = d(K, [["render", Y], ["__scopeId", "data-v-7c3ffbd2"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/link/src/index.vue"]]);
var ee = c(Z);
var te = {};
var re = { class: "ver-row" };
function se(r, s) {
  return openBlock(), createElementBlock("div", re, [
    renderSlot(r.$slots, "default", {}, void 0, true)
  ]);
}
var ae = d(te, [["render", se], ["__scopeId", "data-v-af61564f"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/row/src/index.vue"]]);
var ne = c(ae);
var oe = defineComponent({
  __name: "index",
  props: {
    span: { type: Number, required: true, default: 24 },
    offset: { type: Number, required: true, default: 0 }
  },
  setup(r, { expose: s }) {
    s(), useCssVars((l) => ({
      "23e88e5a-width": e.value,
      "23e88e5a-offset": a.value
    }));
    const t = r, e = ref(
      t.span <= 24 && t.span % 1 == 0 ? 100 / 24 * t.span + "%" : ""
    ), a = ref(
      t.offset <= 24 && t.offset % 1 == 0 ? 100 / 24 * t.offset + "%" : ""
    ), n = { props: t, width: e, offset: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var ie = { class: "ver-col" };
function ue(r, s, t, e, a, n) {
  return openBlock(), createElementBlock("div", ie, [
    renderSlot(r.$slots, "default", {}, void 0, true)
  ]);
}
var de = d(oe, [["render", ue], ["__scopeId", "data-v-23e88e5a"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/col/src/index.vue"]]);
var le = c(de);
var ce = defineComponent({
  __name: "index",
  props: {
    placeholder: { type: String, required: true, default: "" },
    modelValue: { type: [String, Number], required: true, default: "" },
    disabled: { type: Boolean, required: true, default: false },
    type: { type: String, required: true, default: "text" }
  },
  emits: ["update:modelValue"],
  setup(r, { expose: s, emit: t }) {
    s();
    const e = t, a = r, n = ($) => {
      const g = $.target;
      e("update:modelValue", g.value);
    }, l = computed(() => ["ver-input", a.disabled == false ? "" : "is-disabled"]), m = { emit: e, props: a, input: n, VerClass: l };
    return Object.defineProperty(m, "__isScriptSetup", { enumerable: false, value: true }), m;
  }
});
var _e = ["disabled", "value", "type", "placeholder"];
function pe(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      createBaseVNode("input", {
        disabled: t.disabled,
        value: t.modelValue,
        type: t.type,
        placeholder: t.placeholder,
        onInput: e.input
      }, null, 40, _e)
    ],
    2
    /* CLASS */
  );
}
var fe = d(ce, [["render", pe], ["__scopeId", "data-v-1012d14b"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/input/src/index.vue"]]);
var ve = c(fe);
var me = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true, default: "标题" },
    modelValue: { type: Boolean, required: true, default: false },
    width: { type: String, required: true, default: "30%" },
    top: { type: String, required: true, default: "15vh" }
  },
  emits: ["update:modelValue"],
  setup(r, { expose: s, emit: t }) {
    s();
    const e = r, a = t, l = { props: e, emit: a, close: () => {
      a("update:modelValue", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var he = { class: "ver-dialog_header" };
var be = { class: "ver-dialog_title" };
var ye = { class: "ver-dialog_body" };
var $e = {
  key: 0,
  class: "ver-dialog_footer"
};
function ke(r, s, t, e, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: "ver-dialog_wrapper",
          onClick: withModifiers(e.close, ["self"])
        },
        [
          createBaseVNode(
            "div",
            {
              class: "ver-dialog",
              style: normalizeStyle({ width: e.props.width, marginTop: e.props.top })
            },
            [
              createBaseVNode("div", he, [
                renderSlot(r.$slots, "title", {}, () => [
                  createBaseVNode(
                    "span",
                    be,
                    toDisplayString(e.props.title),
                    1
                    /* TEXT */
                  )
                ], true),
                createBaseVNode("button", {
                  class: "ver-dialog_headerbtn",
                  onClick: e.close
                }, "X")
              ]),
              createBaseVNode("div", ye, [
                renderSlot(r.$slots, "default", {}, void 0, true)
              ]),
              r.$slots.footer ? (openBlock(), createElementBlock("div", $e, [
                renderSlot(r.$slots, "footer", {}, void 0, true)
              ])) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, e.props.modelValue]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
var xe = d(me, [["render", ke], ["__scopeId", "data-v-3e602013"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/dialog/src/index.vue"]]);
var ge = c(xe);
var Ve = defineComponent({
  __name: "index",
  props: {
    position: { type: String, required: true, default: "left" },
    direction: { type: String, required: true, default: "horizontal" }
  },
  setup(r, { expose: s }) {
    s();
    const e = { props: r };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: false, value: true }), e;
  }
});
var Ee = {
  key: 0,
  class: "ver-divider-title"
};
function Se(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["ver-divider", { "ver-vertical": e.props.direction === "vertical" }]),
      style: normalizeStyle({
        "justify-content": e.props.position
      })
    },
    [
      e.props.position ? (openBlock(), createElementBlock("div", Ee, [
        renderSlot(r.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
var qe = d(Ve, [["render", Se], ["__scopeId", "data-v-1d3bc4c1"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/divider/src/index.vue"]]);
var Ce = c(qe);
var we = defineComponent({
  __name: "index",
  props: {
    shape: { type: String, required: false, default: "circle" },
    src: { type: String, required: true, default: "" },
    size: { type: Number, required: true, default: 50 }
  },
  setup(r, { expose: s }) {
    s(), useCssVars((l) => ({
      "d9a29420-size": e
    }));
    const t = r, e = t.size + "px", a = computed(() => ["ver-avatar", t.shape == "circle" ? "is-circle" : "is-square"]), n = { props: t, size: e, tClass: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var De = ["src"];
function Ie(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(e.tClass)
    },
    [
      createBaseVNode("img", { src: t.src }, null, 8, De)
    ],
    2
    /* CLASS */
  );
}
var je = d(we, [["render", Ie], ["__scopeId", "data-v-d9a29420"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/avatar/src/index.vue"]]);
var Oe = c(je);
var Be = defineComponent({
  __name: "index",
  props: {
    shadow: { type: String, required: true, default: "always" }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = computed(() => [
      "ver-card",
      t.shadow == "always" ? "is-shadow-always" : t.shadow == "hover" ? "is-shadow-hover" : "is-shadow-never"
    ]), a = { props: t, VerClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var Pe = {
  key: 0,
  class: "ver-card-header"
};
var Ne = { class: "ver-card-body" };
function Te(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      r.$slots.header ? (openBlock(), createElementBlock("div", Pe, [
        renderSlot(r.$slots, "header", {}, void 0, true)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", Ne, [
        renderSlot(r.$slots, "default", {}, void 0, true)
      ])
    ],
    2
    /* CLASS */
  );
}
var ze = d(Be, [["render", Te], ["__scopeId", "data-v-a4b80a96"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/card/src/index.vue"]]);
var Ae = c(ze);
var Fe = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    plain: { type: Boolean, required: true, default: false },
    round: { type: Boolean, required: true, default: false }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = computed(() => [
      "ver-tag",
      t.type == "" ? "" : `ver-tag-${t.type}`,
      t.round == false ? "" : "is-round",
      t.plain == false ? "" : "is-plain"
    ]), a = { props: t, tClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
function Me(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(e.tClass)
    },
    [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var Re = d(Fe, [["render", Me], ["__scopeId", "data-v-8a8f2805"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/tag/src/index.vue"]]);
var Le = c(Re);
var Xe = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true },
    modelValue: { type: Boolean, required: true, default: false }
  },
  emits: ["update:modelValue"],
  setup(r, { expose: s, emit: t }) {
    s();
    const e = r, a = t, l = { props: e, emit: a, handleClose: () => {
      a("update:modelValue", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var He = { class: "ver-drawer" };
var Ue = { class: "ver-drawer_header" };
var We = { class: "ver-drawer_title" };
var Ge = { class: "ver-drawer_body" };
function Je(r, s, t, e, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: "ver-drawer_wrapper",
          onClick: withModifiers(e.handleClose, ["self"])
        },
        [
          createBaseVNode("div", He, [
            createBaseVNode("div", Ue, [
              createBaseVNode(
                "span",
                We,
                toDisplayString(e.props.title),
                1
                /* TEXT */
              ),
              createBaseVNode("button", {
                class: "ver-drawer_headerbtn",
                onClick: e.handleClose
              }, "X")
            ]),
            createBaseVNode("div", Ge, [
              renderSlot(r.$slots, "default", {}, void 0, true)
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, e.props.modelValue]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
var Ke = d(Xe, [["render", Je], ["__scopeId", "data-v-5089ccc8"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/drawer/src/index.vue"]]);
var Qe = c(Ke);
var Ye = defineComponent({
  __name: "index",
  props: {
    modelValue: { type: Boolean, required: true, default: false }
  },
  emits: ["input", "update:modelValue"],
  setup(r, { expose: s, emit: t }) {
    s();
    const e = r, a = t, n = computed(() => ["ver-switch", e.modelValue == false ? "" : "is-checked"]), m = { props: e, emit: a, VerClass: n, handClick: () => {
      a("input", !e.modelValue), a("update:modelValue", !e.modelValue);
    } };
    return Object.defineProperty(m, "__isScriptSetup", { enumerable: false, value: true }), m;
  }
});
var Ze = {
  class: "ver-switch-core",
  ref: "core"
};
function et(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(e.VerClass),
      onClick: e.handClick
    },
    [
      createBaseVNode(
        "span",
        Ze,
        s[0] || (s[0] = [
          createBaseVNode(
            "span",
            { class: "ver-switch-button" },
            null,
            -1
            /* HOISTED */
          )
        ]),
        512
        /* NEED_PATCH */
      )
    ],
    2
    /* CLASS */
  );
}
var tt = d(Ye, [["render", et], ["__scopeId", "data-v-a0738249"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/switch/src/index.vue"]]);
var rt = c(tt);
var st = defineComponent({
  __name: "index",
  props: {
    label: { type: [String, Number, Boolean], required: true, default: "" },
    modelValue: { type: [String, Number, Boolean, null], required: true, default: null },
    name: { type: String, required: true, default: "" },
    disabled: { type: Boolean, required: true, default: false }
  },
  emits: ["update:modelValue"],
  setup(r, { expose: s, emit: t }) {
    s();
    const e = ref(), a = t, n = r, l = computed({
      get: () => n.modelValue,
      set: ($) => {
        a("update:modelValue", $), e.value && e.value.checked == l.value == n.label;
      }
    }), m = { radio: e, emit: a, props: n, modelValue: l };
    return Object.defineProperty(m, "__isScriptSetup", { enumerable: false, value: true }), m;
  }
});
var at = { class: "ver-radio_input" };
var nt = ["disabled", "name", "value"];
var ot = { class: "ver-radio_label" };
function it(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass([
        "ver-radio",
        { "is-checked": t.label == e.modelValue, "is-disabled": t.disabled }
      ])
    },
    [
      createBaseVNode("span", at, [
        s[1] || (s[1] = createBaseVNode(
          "span",
          { class: "ver-radio_inner" },
          null,
          -1
          /* HOISTED */
        )),
        withDirectives(createBaseVNode("input", {
          disabled: t.disabled,
          ref: "radio",
          class: "ver-radio_original",
          name: t.name,
          "onUpdate:modelValue": s[0] || (s[0] = (l) => e.modelValue = l),
          value: e.props.label,
          type: "radio"
        }, null, 8, nt), [
          [vModelRadio, e.modelValue]
        ])
      ]),
      createBaseVNode("span", ot, [
        renderSlot(r.$slots, "default", {}, void 0, true),
        r.$slots.default ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createTextVNode(
              toDisplayString(t.label),
              1
              /* TEXT */
            )
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ],
    2
    /* CLASS */
  );
}
var ut = d(st, [["render", it], ["__scopeId", "data-v-daf82e39"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/radio/src/index.vue"]]);
var dt = c(ut);
var lt = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: true, default: "info" },
    content: { type: String, required: true, default: "" },
    duration: { type: Number, required: true, default: 0 },
    destroy: { type: Function, required: true, default: () => {
    } }
  },
  setup(r, { expose: s }) {
    s();
    const t = ref(false), e = r, a = computed(() => ["ver-message", e.type == "" ? "" : `ver-message-${e.type}`]);
    onMounted(() => {
      t.value = true, setTimeout(() => {
        t.value = false;
      }, e.duration);
    });
    const n = { isVisable: t, props: e, VerClass: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var ct = { class: "text" };
function _t(r, s, t, e, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "down",
    onAfterLeave: t.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(e.VerClass)
        },
        [
          createBaseVNode(
            "span",
            ct,
            toDisplayString(t.content),
            1
            /* TEXT */
          )
        ],
        2
        /* CLASS */
      ), [
        [vShow, e.isVisable]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var B = d(lt, [["render", _t], ["__scopeId", "data-v-0cc628b7"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/message/src/index.vue"]]);
var ar = ({ type: r, content: s, duration: t = 3e3 }) => {
  const a = h(B, {
    type: r,
    content: s,
    duration: t,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(a, document.body);
};
var pt = defineComponent({
  __name: "index",
  props: {
    disabled: { type: Boolean, required: true, default: false },
    placeholder: { type: String, required: true, default: "" },
    modelValue: { type: String, required: true, default: "" },
    maxlength: { type: Number, required: true, default: 0 }
  },
  emits: ["update:modelValue", "input"],
  setup(r, { expose: s, emit: t }) {
    var w;
    s();
    const e = r, a = ref(((w = e.modelValue) == null ? void 0 : w.length) || 0), n = ref(), l = t, m = () => {
      l("update:modelValue", n.value.value), a.value = n.value.value.length;
    }, $ = computed(() => ["ver-textarea", e.disabled == false ? "" : "is-disable"]), g = { props: e, n: a, textareaRef: n, emit: l, input: m, tClass: $ };
    return Object.defineProperty(g, "__isScriptSetup", { enumerable: false, value: true }), g;
  }
});
var ft = ["disabled", "placeholder", "maxlength", "value"];
var vt = {
  key: 0,
  class: "maxlength-box"
};
function mt(r, s, t, e, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(e.tClass)
    },
    [
      createBaseVNode("textarea", {
        ref: "textareaRef",
        disabled: e.props.disabled,
        placeholder: t.placeholder,
        maxlength: t.maxlength,
        value: t.modelValue,
        onInput: e.input
      }, null, 40, ft),
      t.maxlength != null && t.maxlength > 0 ? (openBlock(), createElementBlock(
        "div",
        vt,
        toDisplayString(`${e.n}/${t.maxlength}`),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
var ht = d(pt, [["render", mt], ["__scopeId", "data-v-79dc0524"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/textarea/src/index.vue"]]);
var bt = c(ht);
var yt = {};
var $t = { class: "ver-container" };
function kt(r, s) {
  return openBlock(), createElementBlock("div", $t, [
    renderSlot(r.$slots, "default", {}, void 0, true)
  ]);
}
var xt = d(yt, [["render", kt], ["__scopeId", "data-v-9201423e"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/container/src/index.vue"]]);
var gt = c(xt);
var Vt = {};
var Et = { class: "ver-header" };
function St(r, s) {
  return openBlock(), createElementBlock("div", Et, [
    renderSlot(r.$slots, "default", {}, void 0, true)
  ]);
}
var qt = d(Vt, [["render", St], ["__scopeId", "data-v-1aea8349"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/header/src/index.vue"]]);
var Ct = c(qt);
var wt = {};
var Dt = { class: "ver-main" };
function It(r, s) {
  return openBlock(), createElementBlock("div", Dt, [
    renderSlot(r.$slots, "default", {}, void 0, true)
  ]);
}
var jt = d(wt, [["render", It], ["__scopeId", "data-v-331ab468"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/main/src/index.vue"]]);
var Ot = c(jt);
var Bt = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true, default: "" },
    content: { type: String, required: true, default: "" },
    duration: { type: Number, required: true, default: 3e3 },
    destroy: { type: Function, required: true, default: () => {
    } }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = ref(false), a = () => {
      e.value = false;
    };
    onMounted(() => {
      e.value = true, setTimeout(() => {
        e.value = false;
      }, t.duration);
    });
    const n = { props: t, isVisable: e, handClose: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var Pt = { class: "ver-notification" };
var Nt = { class: "ver-notification-title" };
var Tt = { class: "ver-notification-content" };
function zt(r, s, t, e, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "slide-fade",
    onAfterLeave: e.props.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        Pt,
        [
          createBaseVNode(
            "h2",
            Nt,
            toDisplayString(t.title),
            1
            /* TEXT */
          ),
          createBaseVNode("div", Tt, [
            createBaseVNode(
              "span",
              null,
              toDisplayString(t.content),
              1
              /* TEXT */
            )
          ]),
          createBaseVNode("div", {
            class: "ver-notification-closebtn",
            onClick: e.handClose
          }, "X")
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, e.isVisable]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var P = d(Bt, [["render", zt], ["__scopeId", "data-v-8d9adfe2"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/notification/src/index.vue"]]);
var nr = ({ title: r, content: s, duration: t = 3e3 }) => {
  const a = h(P, {
    title: r,
    content: s,
    duration: t,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(a, document.body);
};
var At = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true, default: "" },
    type: { type: String, required: true, default: "info" }
  },
  setup(r, { expose: s }) {
    s();
    const t = ref(true), e = r, a = computed(() => ["ver-alert", `ver-alert-${e.type}`]), l = { isShow: t, props: e, VerClass: a, handClick: () => {
      t.value = false;
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Ft = { class: "ver-alert_inner" };
function Mt(r, s, t, e, a, n) {
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      createBaseVNode("div", Ft, [
        createBaseVNode(
          "span",
          null,
          toDisplayString(t.title),
          1
          /* TEXT */
        ),
        createBaseVNode("span", {
          class: "ver-alert_closebtn",
          onClick: e.handClick
        }, "X")
      ])
    ],
    2
    /* CLASS */
  )), [
    [vShow, e.isShow]
  ]);
}
var Rt = d(At, [["render", Mt], ["__scopeId", "data-v-17b60d08"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/alert/src/index.vue"]]);
var Lt = c(Rt);
var Xt = defineComponent({
  __name: "index",
  props: {
    model: { type: Object, required: true },
    labelWidth: { type: [String, Number], required: true, default: "80px" }
  },
  setup(r, { expose: s }) {
    s();
    const t = ref(null);
    provide("form", t);
    const e = { form: t };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: false, value: true }), e;
  }
});
var Ht = { class: "ver-form" };
function Ut(r, s, t, e, a, n) {
  return openBlock(), createElementBlock("div", Ht, [
    renderSlot(r.$slots, "default")
  ]);
}
var Wt = d(Xt, [["render", Ut], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/form/src/index.vue"]]);
var Gt = c(Wt);
var Jt = defineComponent({
  __name: "index",
  props: {
    label: { type: [String, Number], required: true, default: "" }
  },
  setup(r, { expose: s }) {
    s();
    const t = r, e = inject("form"), a = computed(() => ({
      width: e.labelWidth
    })), n = { props: t, form: e, labelStyle: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var Kt = { class: "ver-form-item" };
var Qt = { class: "ver-form-item_content" };
function Yt(r, s, t, e, a, n) {
  return openBlock(), createElementBlock("div", Kt, [
    createBaseVNode(
      "label",
      {
        style: normalizeStyle(e.labelStyle),
        class: "ver-form-item_label"
      },
      toDisplayString(e.props.label),
      5
      /* TEXT, STYLE */
    ),
    createBaseVNode("div", Qt, [
      renderSlot(r.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var Zt = d(Jt, [["render", Yt], ["__scopeId", "data-v-c503e38a"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/formItem/src/index.vue"]]);
var er = c(Zt);
var tr = [
  H,
  ne,
  J,
  ee,
  le,
  ve,
  ge,
  Oe,
  Ae,
  Le,
  Ce,
  Qe,
  rt,
  dt,
  B,
  bt,
  gt,
  Ct,
  Ot,
  P,
  Lt,
  Gt,
  er
];
var rr = (r) => {
  tr.forEach((s) => {
    r.use(s);
  });
};
var or = {
  install: rr
};
export {
  Lt as VerAlert,
  Oe as VerAvatar,
  H as VerButton,
  Ae as VerCard,
  le as VerCol,
  gt as VerContainer,
  ge as VerDialog,
  Ce as VerDivider,
  Qe as VerDrawer,
  Gt as VerForm,
  er as VerFormItem,
  Ct as VerHeader,
  ve as VerInput,
  ee as VerLink,
  Ot as VerMain,
  ar as VerMessage,
  nr as VerNotification,
  dt as VerRadio,
  ne as VerRow,
  rt as VerSwitch,
  Le as VerTag,
  J as VerText,
  bt as VerTextarea,
  or as default
};
//# sourceMappingURL=versakit-ui.js.map
