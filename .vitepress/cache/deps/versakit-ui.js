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
  renderList,
  renderSlot,
  toDisplayString,
  useCssVars,
  vModelRadio,
  vShow,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-CQOUZRMK.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/versakit-ui@0.1.8/node_modules/versakit-ui/dist/versakit-ui.js
var _ = (s, r) => (s.install = (t) => {
  for (const e of [s, ...Object.values({})])
    t.component(e.name, e);
}, s);
var R = defineComponent({
  name: "VerButton",
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    plain: { type: Boolean, required: false, default: false },
    round: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false, default: false }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = computed(() => [
      "ver-btn",
      t.type == "" ? "" : `ver-btn-${t.type}`,
      t.plain == false ? "" : "is-plain",
      t.round == false ? "" : "is-round",
      t.disabled == false ? "" : "is-disabled"
    ]), a = { props: t, Verclass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var c = (s, r) => {
  const t = s.__vccOpts || s;
  for (const [e, a] of r)
    t[e] = a;
  return t;
};
var X = ["disabled"];
function H(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(e.Verclass),
    disabled: e.props.disabled
  }, [
    createBaseVNode("span", null, [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ])
  ], 10, X);
}
var W = c(R, [["render", H], ["__scopeId", "data-v-38d58db5"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/button/src/index.vue"]]);
var U = _(W);
var G = defineComponent({
  name: "VerText",
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    size: { type: [String, Number], required: false, default: "" },
    truncated: { type: Boolean, required: false, default: false }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = computed(() => [
      "ver-text",
      t.type == "" ? "" : `ver-text-${t.type}`,
      t.size == "" ? "" : `ver-text-${t.size}`,
      t.truncated == false ? "" : "is-truncated"
    ]), a = { props: t, VerClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
function J(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var K = c(G, [["render", J], ["__scopeId", "data-v-9ab8a636"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/text/src/index.vue"]]);
var Q = _(K);
var Y = defineComponent({
  name: "VerLink",
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    disabled: { type: Boolean, required: false, default: false },
    href: { type: String, required: false, default: "" }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = computed(() => [
      "ver-link",
      t.type == "" ? "" : `ver-link-${t.type}`,
      t.disabled == false ? "" : "is-disabled"
    ]), a = { props: t, VerClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var Z = ["href"];
function ee(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(e.VerClass),
    href: t.href
  }, [
    createBaseVNode("span", null, [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ])
  ], 10, Z);
}
var te = c(Y, [["render", ee], ["__scopeId", "data-v-7c3ffbd2"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/link/src/index.vue"]]);
var se = _(te);
var re = defineComponent({
  name: "VerRow",
  __name: "index",
  setup(s, { expose: r }) {
    r();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: false, value: true }), t;
  }
});
var ae = { class: "ver-row" };
function ne(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", ae, [
    renderSlot(s.$slots, "default", {}, void 0, true)
  ]);
}
var oe = c(re, [["render", ne], ["__scopeId", "data-v-af61564f"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/row/src/index.vue"]]);
var ie = _(oe);
var de = defineComponent({
  name: "VerCol",
  __name: "index",
  props: {
    span: { type: Number, required: false, default: 24 },
    offset: { type: Number, required: false, default: 0 }
  },
  setup(s, { expose: r }) {
    r(), useCssVars((l) => ({
      "23e88e5a-width": e.value,
      "23e88e5a-offset": a.value
    }));
    const t = s, e = ref(
      t.span <= 24 && t.span % 1 == 0 ? 100 / 24 * t.span + "%" : ""
    ), a = ref(
      t.offset <= 24 && t.offset % 1 == 0 ? 100 / 24 * t.offset + "%" : ""
    ), n = { props: t, width: e, offset: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var le = { class: "ver-col" };
function ue(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", le, [
    renderSlot(s.$slots, "default", {}, void 0, true)
  ]);
}
var ce = c(de, [["render", ue], ["__scopeId", "data-v-23e88e5a"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/col/src/index.vue"]]);
var _e = _(ce);
var pe = defineComponent({
  name: "VerInput",
  __name: "index",
  props: {
    placeholder: { type: String, required: false, default: "" },
    modelValue: { type: [String, Number], required: false, default: "" },
    disabled: { type: Boolean, required: false, default: false },
    type: { type: String, required: false, default: "text" }
  },
  emits: ["update:modelValue"],
  setup(s, { expose: r, emit: t }) {
    r();
    const e = t, a = s, n = ($) => {
      const V = $.target;
      e("update:modelValue", V.value);
    }, l = computed(() => ["ver-input", a.disabled == false ? "" : "is-disabled"]), v = { emit: e, props: a, input: n, VerClass: l };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var fe = ["disabled", "value", "type", "placeholder"];
function ve(s, r, t, e, a, n) {
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
      }, null, 40, fe)
    ],
    2
    /* CLASS */
  );
}
var me = c(pe, [["render", ve], ["__scopeId", "data-v-1012d14b"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/input/src/index.vue"]]);
var be = _(me);
var he = defineComponent({
  name: "VerDialog",
  __name: "index",
  props: {
    title: { type: String, required: false, default: "标题" },
    modelValue: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: "30%" },
    top: { type: String, required: false, default: "15vh" }
  },
  emits: ["update:modelValue"],
  setup(s, { expose: r, emit: t }) {
    r();
    const e = s, a = t, l = { props: e, emit: a, close: () => {
      a("update:modelValue", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var $e = { class: "ver-dialog_header" };
var ye = { class: "ver-dialog_title" };
var xe = { class: "ver-dialog_body" };
var ke = {
  key: 0,
  class: "ver-dialog_footer"
};
function Ve(s, r, t, e, a, n) {
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
              createBaseVNode("div", $e, [
                renderSlot(s.$slots, "title", {}, () => [
                  createBaseVNode(
                    "span",
                    ye,
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
              createBaseVNode("div", xe, [
                renderSlot(s.$slots, "default", {}, void 0, true)
              ]),
              s.$slots.footer ? (openBlock(), createElementBlock("div", ke, [
                renderSlot(s.$slots, "footer", {}, void 0, true)
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
var ge = c(he, [["render", Ve], ["__scopeId", "data-v-3e602013"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/dialog/src/index.vue"]]);
var Ee = _(ge);
var Se = defineComponent({
  name: "VerDivider",
  __name: "index",
  props: {
    line: { type: String, required: false, default: "solid" },
    position: { type: String, required: false, default: "left" },
    direction: { type: String, required: false, default: "horizontal" }
  },
  setup(s, { expose: r }) {
    r();
    const e = { props: s };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: false, value: true }), e;
  }
});
var qe = {
  key: 0,
  class: "ver-divider-title"
};
function Ce(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["ver-divider", { "ver-vertical": e.props.direction === "vertical" }]),
      style: normalizeStyle({
        "justify-content": e.props.position,
        "border-top": `1px ${e.props.line} #dcdfe6`
      })
    },
    [
      e.props.position ? (openBlock(), createElementBlock("div", qe, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
var we = c(Se, [["render", Ce], ["__scopeId", "data-v-1d3bc4c1"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/divider/src/index.vue"]]);
var De = _(we);
var Ie = defineComponent({
  name: "VerAvatar",
  __name: "index",
  props: {
    shape: { type: String, required: false, default: "circle" },
    src: { type: String, required: false, default: "" },
    size: { type: Number, required: false, default: 50 }
  },
  setup(s, { expose: r }) {
    r(), useCssVars((l) => ({
      "d9a29420-size": e
    }));
    const t = s, e = t.size + "px", a = computed(() => ["ver-avatar", t.shape == "circle" ? "is-circle" : "is-square"]), n = { props: t, size: e, tClass: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var je = ["src"];
function Oe(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(e.tClass)
    },
    [
      createBaseVNode("img", { src: t.src }, null, 8, je)
    ],
    2
    /* CLASS */
  );
}
var Pe = c(Ie, [["render", Oe], ["__scopeId", "data-v-d9a29420"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/avatar/src/index.vue"]]);
var Te = _(Pe);
var Be = defineComponent({
  name: "VerCard",
  __name: "index",
  props: {
    shadow: { type: String, required: false, default: "always" }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = computed(() => [
      "ver-card",
      t.shadow == "always" ? "is-shadow-always" : t.shadow == "hover" ? "is-shadow-hover" : "is-shadow-never"
    ]), a = { props: t, VerClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var Ne = {
  key: 0,
  class: "ver-card-header"
};
var Ae = { class: "ver-card-body" };
function Le(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      s.$slots.header ? (openBlock(), createElementBlock("div", Ne, [
        renderSlot(s.$slots, "header", {}, void 0, true)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", Ae, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ])
    ],
    2
    /* CLASS */
  );
}
var ze = c(Be, [["render", Le], ["__scopeId", "data-v-a4b80a96"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/card/src/index.vue"]]);
var Fe = _(ze);
var Me = defineComponent({
  name: "VerTag",
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    plain: { type: Boolean, required: false, default: false },
    round: { type: Boolean, required: false, default: false }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = computed(() => [
      "ver-tag",
      t.type == "" ? "" : `ver-tag-${t.type}`,
      t.round == false ? "" : "is-round",
      t.plain == false ? "" : "is-plain"
    ]), a = { props: t, tClass: e };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
function Re(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(e.tClass)
    },
    [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var Xe = c(Me, [["render", Re], ["__scopeId", "data-v-8a8f2805"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/tag/src/index.vue"]]);
var He = _(Xe);
var We = defineComponent({
  name: "VerDrawer",
  __name: "index",
  props: {
    title: { type: String, required: false },
    modelValue: { type: Boolean, required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(s, { expose: r, emit: t }) {
    r();
    const e = s, a = t, l = { props: e, emit: a, handleClose: () => {
      a("update:modelValue", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Ue = { class: "ver-drawer" };
var Ge = { class: "ver-drawer_header" };
var Je = { class: "ver-drawer_title" };
var Ke = { class: "ver-drawer_body" };
function Qe(s, r, t, e, a, n) {
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
          createBaseVNode("div", Ue, [
            createBaseVNode("div", Ge, [
              createBaseVNode(
                "span",
                Je,
                toDisplayString(e.props.title),
                1
                /* TEXT */
              ),
              createBaseVNode("button", {
                class: "ver-drawer_headerbtn",
                onClick: e.handleClose
              }, "X")
            ]),
            createBaseVNode("div", Ke, [
              renderSlot(s.$slots, "default", {}, void 0, true)
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
var Ye = c(We, [["render", Qe], ["__scopeId", "data-v-5089ccc8"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/drawer/src/index.vue"]]);
var Ze = _(Ye);
var et = defineComponent({
  name: "VerSwitch",
  __name: "index",
  props: {
    modelValue: { type: Boolean, required: false, default: false }
  },
  emits: ["input", "update:modelValue"],
  setup(s, { expose: r, emit: t }) {
    r();
    const e = s, a = t, n = computed(() => ["ver-switch", e.modelValue == false ? "" : "is-checked"]), v = { props: e, emit: a, VerClass: n, handClick: () => {
      a("input", !e.modelValue), a("update:modelValue", !e.modelValue);
    } };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var tt = {
  class: "ver-switch-core",
  ref: "core"
};
function st(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(e.VerClass),
      onClick: e.handClick
    },
    [
      createBaseVNode(
        "span",
        tt,
        r[0] || (r[0] = [
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
var rt = c(et, [["render", st], ["__scopeId", "data-v-a0738249"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/switch/src/index.vue"]]);
var at = _(rt);
var nt = defineComponent({
  name: "VerRadio",
  __name: "index",
  props: {
    label: { type: [String, Number, Boolean], required: false, default: "" },
    modelValue: { type: [String, Number, Boolean, null], required: false, default: null },
    name: { type: String, required: false, default: "" },
    disabled: { type: Boolean, required: false, default: false }
  },
  emits: ["update:modelValue"],
  setup(s, { expose: r, emit: t }) {
    r();
    const e = ref(), a = t, n = s, l = computed({
      get: () => n.modelValue,
      set: ($) => {
        a("update:modelValue", $), e.value && e.value.checked == l.value == n.label;
      }
    }), v = { radio: e, emit: a, props: n, modelValue: l };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var ot = { class: "ver-radio_input" };
var it = ["disabled", "name", "value"];
var dt = { class: "ver-radio_label" };
function lt(s, r, t, e, a, n) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass([
        "ver-radio",
        { "is-checked": t.label == e.modelValue, "is-disabled": t.disabled }
      ])
    },
    [
      createBaseVNode("span", ot, [
        r[1] || (r[1] = createBaseVNode(
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
          "onUpdate:modelValue": r[0] || (r[0] = (l) => e.modelValue = l),
          value: e.props.label,
          type: "radio"
        }, null, 8, it), [
          [vModelRadio, e.modelValue]
        ])
      ]),
      createBaseVNode("span", dt, [
        renderSlot(s.$slots, "default", {}, void 0, true),
        s.$slots.default ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
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
var ut = c(nt, [["render", lt], ["__scopeId", "data-v-daf82e39"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/radio/src/index.vue"]]);
var ct = _(ut);
var _t = defineComponent({
  name: "VerMessage",
  __name: "index",
  props: {
    type: { type: String, required: false, default: "info" },
    content: { type: String, required: false, default: "" },
    duration: { type: Number, required: false, default: 0 },
    destroy: { type: Function, required: false, default: () => {
    } }
  },
  setup(s, { expose: r }) {
    r();
    const t = ref(false), e = s, a = computed(() => ["ver-message", e.type == "" ? "" : `ver-message-${e.type}`]);
    onMounted(() => {
      t.value = true, setTimeout(() => {
        t.value = false;
      }, e.duration);
    });
    const n = { isVisable: t, props: e, VerClass: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var pt = { class: "text" };
function ft(s, r, t, e, a, n) {
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
            pt,
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
var B = c(_t, [["render", ft], ["__scopeId", "data-v-0cc628b7"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/message/src/index.vue"]]);
var _s = ({ type: s, content: r, duration: t = 3e3 }) => {
  const a = h(B, {
    type: s,
    content: r,
    duration: t,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(a, document.body);
};
var vt = defineComponent({
  name: "VerTextArea",
  __name: "index",
  props: {
    disabled: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false, default: "" },
    modelValue: { type: String, required: false, default: "" },
    maxlength: { type: null, required: false, default: void 0 }
  },
  emits: ["update:modelValue", "input"],
  setup(s, { expose: r, emit: t }) {
    var w;
    r();
    const e = s, a = ref(((w = e.modelValue) == null ? void 0 : w.length) || 0), n = ref(), l = t, v = () => {
      l("update:modelValue", n.value.value), a.value = n.value.value.length;
    }, $ = computed(() => ["ver-textarea", e.disabled == false ? "" : "is-disable"]), V = { props: e, n: a, textareaRef: n, emit: l, input: v, tClass: $ };
    return Object.defineProperty(V, "__isScriptSetup", { enumerable: false, value: true }), V;
  }
});
var mt = ["disabled", "placeholder", "maxlength", "value"];
var bt = {
  key: 0,
  class: "maxlength-box"
};
function ht(s, r, t, e, a, n) {
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
      }, null, 40, mt),
      t.maxlength != null && t.maxlength > 0 ? (openBlock(), createElementBlock(
        "div",
        bt,
        toDisplayString(`${e.n}/${t.maxlength}`),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
var $t = c(vt, [["render", ht], ["__scopeId", "data-v-79dc0524"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/textarea/src/index.vue"]]);
var yt = _($t);
var xt = defineComponent({
  name: "VerContainer",
  __name: "index",
  setup(s, { expose: r }) {
    r();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: false, value: true }), t;
  }
});
var kt = { class: "ver-container" };
function Vt(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", kt, [
    renderSlot(s.$slots, "default", {}, void 0, true)
  ]);
}
var gt = c(xt, [["render", Vt], ["__scopeId", "data-v-9201423e"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/container/src/index.vue"]]);
var Et = _(gt);
var St = defineComponent({
  name: "VerHeader",
  __name: "index",
  setup(s, { expose: r }) {
    r();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: false, value: true }), t;
  }
});
var qt = { class: "ver-header" };
function Ct(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", qt, [
    renderSlot(s.$slots, "default", {}, void 0, true)
  ]);
}
var wt = c(St, [["render", Ct], ["__scopeId", "data-v-1aea8349"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/header/src/index.vue"]]);
var Dt = _(wt);
var It = defineComponent({
  name: "VerMain",
  __name: "index",
  setup(s, { expose: r }) {
    r();
    const t = {};
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: false, value: true }), t;
  }
});
var jt = { class: "ver-main" };
function Ot(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", jt, [
    renderSlot(s.$slots, "default", {}, void 0, true)
  ]);
}
var Pt = c(It, [["render", Ot], ["__scopeId", "data-v-331ab468"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/main/src/index.vue"]]);
var Tt = _(Pt);
var Bt = defineComponent({
  name: "VerNotifivation",
  __name: "index",
  props: {
    title: { type: String, required: false, default: "" },
    content: { type: String, required: false, default: "" },
    duration: { type: Number, required: false, default: 3e3 },
    destroy: { type: Function, required: false, default: () => {
    } }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = ref(false), a = () => {
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
var Nt = { class: "ver-notification" };
var At = { class: "ver-notification-title" };
var Lt = { class: "ver-notification-content" };
function zt(s, r, t, e, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "slide-fade",
    onAfterLeave: e.props.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        Nt,
        [
          createBaseVNode(
            "h2",
            At,
            toDisplayString(t.title),
            1
            /* TEXT */
          ),
          createBaseVNode("div", Lt, [
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
var N = c(Bt, [["render", zt], ["__scopeId", "data-v-8d9adfe2"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/notification/src/index.vue"]]);
var ps = ({ title: s, content: r, duration: t = 3e3 }) => {
  const a = h(N, {
    title: s,
    content: r,
    duration: t,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(a, document.body);
};
var Ft = defineComponent({
  name: "VerAlert",
  __name: "index",
  props: {
    title: { type: String, required: false, default: "" },
    type: { type: String, required: false, default: "info" }
  },
  setup(s, { expose: r }) {
    r();
    const t = ref(true), e = s, a = computed(() => ["ver-alert", `ver-alert-${e.type}`]), l = { isShow: t, props: e, VerClass: a, handClick: () => {
      t.value = false;
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Mt = { class: "ver-alert_inner" };
function Rt(s, r, t, e, a, n) {
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(e.VerClass)
    },
    [
      createBaseVNode("div", Mt, [
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
var Xt = c(Ft, [["render", Rt], ["__scopeId", "data-v-17b60d08"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/alert/src/index.vue"]]);
var Ht = _(Xt);
var Wt = defineComponent({
  name: "VerForm",
  __name: "index",
  props: {
    model: { type: Object, required: false },
    labelWidth: { type: [String, Number], required: false, default: "80px" }
  },
  setup(s, { expose: r }) {
    r();
    const t = ref(null);
    provide("form", t);
    const e = { form: t };
    return Object.defineProperty(e, "__isScriptSetup", { enumerable: false, value: true }), e;
  }
});
var Ut = { class: "ver-form" };
function Gt(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", Ut, [
    renderSlot(s.$slots, "default")
  ]);
}
var Jt = c(Wt, [["render", Gt], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/form/src/index.vue"]]);
var Kt = _(Jt);
var Qt = defineComponent({
  name: "VerFormItem",
  __name: "index",
  props: {
    label: { type: [String, Number], required: false, default: "" }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = inject("form"), a = computed(() => ({
      width: e.labelWidth
    })), n = { props: t, form: e, labelStyle: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var Yt = { class: "ver-form-item" };
var Zt = { class: "ver-form-item_content" };
function es(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", Yt, [
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
    createBaseVNode("div", Zt, [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var ts = c(Qt, [["render", es], ["__scopeId", "data-v-c503e38a"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/formItem/src/index.vue"]]);
var ss = _(ts);
var rs = defineComponent({
  __name: "index",
  props: {
    tabList: { type: Array, required: true }
  },
  setup(s, { expose: r }) {
    r();
    const t = s, e = ref(0), n = { props: t, currentTabIndex: e, switchTab: (l) => {
      e.value = l;
    } };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var as = { class: "ver-tab" };
var ns = { class: "tab-header" };
var os = ["onClick"];
var is = { class: "tab-label" };
function ds(s, r, t, e, a, n) {
  return openBlock(), createElementBlock("div", as, [
    createBaseVNode("div", ns, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(e.props.tabList, (l, v) => (openBlock(), createElementBlock("div", {
          key: l.id,
          class: normalizeClass(["tab-item", { "active-tab": e.currentTabIndex === v }]),
          onClick: ($) => e.switchTab(v)
        }, [
          createBaseVNode(
            "span",
            is,
            toDisplayString(l.label),
            1
            /* TEXT */
          )
        ], 10, os))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    (openBlock(), createElementBlock("div", {
      class: "tab-content",
      key: `tab-content-${e.props.tabList[e.currentTabIndex].name}`
    }, [
      renderSlot(s.$slots, e.props.tabList[e.currentTabIndex].name, {}, void 0, true)
    ]))
  ]);
}
var ls = c(rs, [["render", ds], ["__scopeId", "data-v-b4ee18d6"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/tab/src/index.vue"]]);
var us = _(ls);
var D = [
  U,
  ie,
  Q,
  se,
  _e,
  be,
  Ee,
  Te,
  Fe,
  He,
  De,
  Ze,
  at,
  ct,
  B,
  yt,
  Et,
  Dt,
  Tt,
  N,
  Ht,
  Kt,
  ss,
  us
];
var fs = {
  install: (s) => {
    for (const r in D)
      s.component(r, D[r]);
  }
};
export {
  Ht as VerAlert,
  Te as VerAvatar,
  U as VerButton,
  Fe as VerCard,
  _e as VerCol,
  Et as VerContainer,
  Ee as VerDialog,
  De as VerDivider,
  Ze as VerDrawer,
  Kt as VerForm,
  ss as VerFormItem,
  Dt as VerHeader,
  be as VerInput,
  se as VerLink,
  Tt as VerMain,
  _s as VerMessage,
  ps as VerNotification,
  ct as VerRadio,
  ie as VerRow,
  at as VerSwitch,
  us as VerTab,
  He as VerTag,
  Q as VerText,
  yt as VerTextarea,
  fs as default
};
//# sourceMappingURL=versakit-ui.js.map
