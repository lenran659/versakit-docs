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

// node_modules/.pnpm/versakit-ui@0.1.2/node_modules/versakit-ui/dist/versakit-ui.js
var ie = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    plain: { type: Boolean, required: true, default: false },
    round: { type: Boolean, required: true, default: false },
    disabled: { type: Boolean, required: true, default: false }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = computed(() => [
      "ver-btn",
      r.type == "" ? "" : `ver-btn-${r.type}`,
      r.plain == false ? "" : "is-plain",
      r.round == false ? "" : "is-round",
      r.disabled == false ? "" : "is-disable"
    ]), a = { props: r, Verclass: t };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var d = (e, s) => {
  const r = e.__vccOpts || e;
  for (const [t, a] of s)
    r[t] = a;
  return r;
};
var ue = ["disabled"];
function de(e, s, r, t, a, n) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(t.Verclass),
    disabled: t.props.disabled
  }, [
    createBaseVNode("span", null, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ], 10, ue);
}
var q = d(ie, [["render", de], ["__scopeId", "data-v-38d58db5"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/button/src/index.vue"]]);
q.install = (e) => {
  e.component("VerButton", q);
};
var le = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    size: { type: [String, Number], required: true, default: "" },
    truncated: { type: Boolean, required: true, default: false }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = computed(() => [
      "ver-text",
      r.type == "" ? "" : `ver-text-${r.type}`,
      r.size == "" ? "" : `ver-text-${r.size}`,
      r.truncated == false ? "" : "is-truncated"
    ]), a = { props: r, VerClass: t };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
function ce(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(t.VerClass)
    },
    [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var C = d(le, [["render", ce], ["__scopeId", "data-v-9ab8a636"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/text/src/index.vue"]]);
C.install = (e) => {
  e.component("VerText", C);
};
var _e = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: true, default: "" },
    disabled: { type: Boolean, required: true, default: false },
    href: { type: String, required: true, default: "" }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = computed(() => [
      "ver-link",
      r.type == "" ? "" : `ver-link-${r.type}`,
      r.disabled == false ? "" : "is-disable"
    ]), a = { props: r, VerClass: t };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var pe = ["href"];
function fe(e, s, r, t, a, n) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(t.VerClass),
    href: r.href
  }, [
    createBaseVNode("span", null, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ], 10, pe);
}
var w = d(_e, [["render", fe], ["__scopeId", "data-v-7c3ffbd2"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/link/src/index.vue"]]);
w.install = (e) => {
  e.component("VerLink", w);
};
var ve = {};
var me = { class: "ver-row" };
function he(e, s) {
  return openBlock(), createElementBlock("div", me, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var D = d(ve, [["render", he], ["__scopeId", "data-v-870735ba"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/row/index.vue"]]);
D.install = (e) => {
  e.component("VerRow", D);
};
var be = defineComponent({
  __name: "index",
  props: {
    span: { type: Number, required: true, default: 24 },
    offset: { type: Number, required: true, default: 0 }
  },
  setup(e, { expose: s }) {
    s(), useCssVars((l) => ({
      "23e88e5a-width": t.value,
      "23e88e5a-offset": a.value
    }));
    const r = e, t = ref(
      r.span <= 24 && r.span % 1 == 0 ? 100 / 24 * r.span + "%" : ""
    ), a = ref(
      r.offset <= 24 && r.offset % 1 == 0 ? 100 / 24 * r.offset + "%" : ""
    ), n = { props: r, width: t, offset: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var ye = { class: "ver-col" };
function $e(e, s, r, t, a, n) {
  return openBlock(), createElementBlock("div", ye, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var I = d(be, [["render", $e], ["__scopeId", "data-v-23e88e5a"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/col/src/index.vue"]]);
I.install = (e) => {
  e.component("VerCol", I);
};
var Ve = defineComponent({
  __name: "index",
  props: {
    placeholder: { type: String, required: true, default: "" },
    modelValue: { type: [String, Number], required: true, default: "" },
    disabled: { type: Boolean, required: true, default: false },
    type: { type: String, required: true, default: "text" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: s, emit: r }) {
    s();
    const t = r, a = e, n = (y) => {
      const k = y.target;
      t("update:modelValue", k.value);
    }, l = computed(() => ["ver-input", a.disabled == false ? "" : "is-disabled"]), v = { emit: t, props: a, input: n, VerClass: l };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var ke = ["disabled", "value", "type", "placeholder"];
function ge(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(t.VerClass)
    },
    [
      createBaseVNode("input", {
        disabled: r.disabled,
        value: r.modelValue,
        type: r.type,
        placeholder: r.placeholder,
        onInput: t.input
      }, null, 40, ke)
    ],
    2
    /* CLASS */
  );
}
var j = d(Ve, [["render", ge], ["__scopeId", "data-v-1012d14b"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/input/src/index.vue"]]);
j.install = (e) => {
  e.component("VerInput", j);
};
var xe = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true, default: "标题" },
    modelValue: { type: Boolean, required: true, default: false },
    width: { type: String, required: true, default: "30%" },
    top: { type: String, required: true, default: "15vh" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: s, emit: r }) {
    s();
    const t = e, a = r, l = { props: t, emit: a, close: () => {
      a("update:modelValue", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Ee = { class: "ver-dialog_header" };
var Se = { class: "ver-dialog_title" };
var qe = { class: "ver-dialog_body" };
var Ce = {
  key: 0,
  class: "ver-dialog_footer"
};
function we(e, s, r, t, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: "ver-dialog_wrapper",
          onClick: withModifiers(t.close, ["self"])
        },
        [
          createBaseVNode(
            "div",
            {
              class: "ver-dialog",
              style: normalizeStyle({ width: t.props.width, marginTop: t.props.top })
            },
            [
              createBaseVNode("div", Ee, [
                renderSlot(e.$slots, "title", {}, () => [
                  createBaseVNode(
                    "span",
                    Se,
                    toDisplayString(t.props.title),
                    1
                    /* TEXT */
                  )
                ], true),
                createBaseVNode("button", {
                  class: "ver-dialog_headerbtn",
                  onClick: t.close
                }, "X")
              ]),
              createBaseVNode("div", qe, [
                renderSlot(e.$slots, "default", {}, void 0, true)
              ]),
              e.$slots.footer ? (openBlock(), createElementBlock("div", Ce, [
                renderSlot(e.$slots, "footer", {}, void 0, true)
              ])) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, t.props.modelValue]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
var O = d(xe, [["render", we], ["__scopeId", "data-v-3e602013"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/dialog/src/index.vue"]]);
O.install = (e) => {
  e.component("VerDialog", O);
};
var De = defineComponent({
  __name: "index",
  props: {
    position: { type: String, required: true, default: "left" },
    direction: { type: String, required: true, default: "horizontal" }
  },
  setup(e, { expose: s }) {
    s();
    const t = { props: e };
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: false, value: true }), t;
  }
});
var Ie = {
  key: 0,
  class: "ver-divider-title"
};
function je(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["ver-divider", { "ver-vertical": t.props.direction === "vertical" }]),
      style: normalizeStyle({
        "justify-content": t.props.position
      })
    },
    [
      t.props.position ? (openBlock(), createElementBlock("div", Ie, [
        renderSlot(e.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
var B = d(De, [["render", je], ["__scopeId", "data-v-1d3bc4c1"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/divider/src/index.vue"]]);
B.install = (e) => {
  e.component("VerDivider", B);
};
var Oe = defineComponent({
  __name: "index",
  props: {
    shape: { type: String, required: false, default: "circle" },
    src: { type: String, required: true, default: "" },
    size: { type: Number, required: true, default: 32 }
  },
  setup(e, { expose: s }) {
    s(), useCssVars((l) => ({
      "d9a29420-size": t
    }));
    const r = e, t = r.size + "px", a = computed(() => ["ver-avatar", r.shape == "circle" ? "is-circle" : "is-square"]), n = { props: r, size: t, tClass: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var Be = ["src"];
function Pe(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(t.tClass)
    },
    [
      createBaseVNode("img", { src: r.src }, null, 8, Be)
    ],
    2
    /* CLASS */
  );
}
var P = d(Oe, [["render", Pe], ["__scopeId", "data-v-d9a29420"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/avatar/src/index.vue"]]);
P.install = (e) => {
  e.component("VerAvatar", P);
};
var Ne = defineComponent({
  __name: "index",
  props: {
    shadow: { type: String, required: true, default: "always" }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = computed(() => [
      "ver-card",
      r.shadow == "always" ? "is-shadow-always" : r.shadow == "hover" ? "is-shadow-hover" : "is-shadow-never"
    ]), a = { props: r, VerClass: t };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
var Te = {
  key: 0,
  class: "ver-card-header"
};
var ze = { class: "ver-card-body" };
function Ae(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(t.VerClass)
    },
    [
      e.$slots.header ? (openBlock(), createElementBlock("div", Te, [
        renderSlot(e.$slots, "header", {}, void 0, true)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", ze, [
        renderSlot(e.$slots, "default", {}, void 0, true)
      ])
    ],
    2
    /* CLASS */
  );
}
var N = d(Ne, [["render", Ae], ["__scopeId", "data-v-a4b80a96"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/card/src/index.vue"]]);
N.intsall = (e) => {
  e.component("VerCard", N);
};
var Fe = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: false, default: "" },
    round: { type: Boolean, required: true, default: false }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = computed(() => [
      "ver-tag",
      r.type == "" ? "" : `ver-tag-${r.type}`,
      r.round == false ? "" : "is-round"
    ]), a = { props: r, tClass: t };
    return Object.defineProperty(a, "__isScriptSetup", { enumerable: false, value: true }), a;
  }
});
function Me(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(t.tClass)
    },
    [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var T = d(Fe, [["render", Me], ["__scopeId", "data-v-8a8f2805"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/tag/src/index.vue"]]);
T.install = (e) => {
  e.component("VerTag", T);
};
var Re = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true },
    modelValue: { type: Boolean, required: true, default: false }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: s, emit: r }) {
    s();
    const t = e, a = r, l = { props: t, emit: a, handleClose: () => {
      a("update:modelValue", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Le = { class: "ver-drawer" };
var Xe = { class: "ver-drawer_header" };
var He = { class: "ver-drawer_title" };
var Ue = { class: "ver-drawer_body" };
function We(e, s, r, t, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: "ver-drawer_wrapper",
          onClick: withModifiers(t.handleClose, ["self"])
        },
        [
          createBaseVNode("div", Le, [
            createBaseVNode("div", Xe, [
              createBaseVNode(
                "span",
                He,
                toDisplayString(t.props.title),
                1
                /* TEXT */
              ),
              createBaseVNode("button", {
                class: "ver-drawer_headerbtn",
                onClick: t.handleClose
              }, "X")
            ]),
            createBaseVNode("div", Ue, [
              renderSlot(e.$slots, "default", {}, void 0, true)
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, t.props.modelValue]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
var z = d(Re, [["render", We], ["__scopeId", "data-v-5089ccc8"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/drawer/src/index.vue"]]);
z.insatll = (e) => {
  e.component("VerDrawer", z);
};
var Ge = defineComponent({
  __name: "index",
  props: {
    modelValue: { type: Boolean, required: true, default: false }
  },
  emits: ["input", "update:modelValue"],
  setup(e, { expose: s, emit: r }) {
    s();
    const t = e, a = r, n = computed(() => ["ver-switch", t.modelValue == false ? "" : "is-checked"]), v = { props: t, emit: a, VerClass: n, handClick: () => {
      a("input", !t.modelValue), a("update:modelValue", !t.modelValue);
    } };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var Je = {
  class: "ver-switch-core",
  ref: "core"
};
function Ke(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(t.VerClass),
      onClick: t.handClick
    },
    [
      createBaseVNode(
        "span",
        Je,
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
var A = d(Ge, [["render", Ke], ["__scopeId", "data-v-a0738249"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/switch/src/index.vue"]]);
A.insatll = (e) => {
  e.component("VerSwitch", A);
};
var Qe = defineComponent({
  __name: "index",
  props: {
    label: { type: [String, Number, Boolean], required: true, default: "" },
    modelValue: { type: [String, Number, Boolean, null], required: true, default: null },
    name: { type: String, required: true, default: "" },
    disabled: { type: Boolean, required: true, default: false }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: s, emit: r }) {
    s();
    const t = ref(), a = r, n = e, l = computed({
      get: () => n.modelValue,
      set: (y) => {
        a("update:modelValue", y), t.value && t.value.checked == l.value == n.label;
      }
    }), v = { radio: t, emit: a, props: n, modelValue: l };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var Ye = { class: "ver-radio_input" };
var Ze = ["disabled", "name", "value"];
var et = { class: "ver-radio_label" };
function tt(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass([
        "ver-radio",
        { "is-checked": r.label == t.modelValue, "is-disabled": r.disabled }
      ])
    },
    [
      createBaseVNode("span", Ye, [
        s[1] || (s[1] = createBaseVNode(
          "span",
          { class: "ver-radio_inner" },
          null,
          -1
          /* HOISTED */
        )),
        withDirectives(createBaseVNode("input", {
          disabled: r.disabled,
          ref: "radio",
          class: "ver-radio_original",
          name: r.name,
          "onUpdate:modelValue": s[0] || (s[0] = (l) => t.modelValue = l),
          value: t.props.label,
          type: "radio"
        }, null, 8, Ze), [
          [vModelRadio, t.modelValue]
        ])
      ]),
      createBaseVNode("span", et, [
        renderSlot(e.$slots, "default", {}, void 0, true),
        e.$slots.default ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
          Fragment,
          { key: 0 },
          [
            createTextVNode(
              toDisplayString(r.label),
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
var F = d(Qe, [["render", tt], ["__scopeId", "data-v-daf82e39"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/radio/src/index.vue"]]);
F.install = (e) => {
  e.component("VerRadio", F);
};
var rt = defineComponent({
  __name: "index",
  props: {
    type: { type: String, required: true, default: "info" },
    content: { type: String, required: true, default: "" },
    duration: { type: Number, required: true, default: 0 },
    destroy: { type: Function, required: true, default: () => {
    } }
  },
  setup(e, { expose: s }) {
    s();
    const r = ref(false), t = e, a = computed(() => ["ver-message", t.type == "" ? "" : `ver-message-${t.type}`]);
    onMounted(() => {
      r.value = true, setTimeout(() => {
        r.value = false;
      }, t.duration);
    });
    const n = { isVisable: r, props: t, VerClass: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var st = { class: "text" };
function at(e, s, r, t, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "down",
    onAfterLeave: r.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(t.VerClass)
        },
        [
          createBaseVNode(
            "span",
            st,
            toDisplayString(r.content),
            1
            /* TEXT */
          )
        ],
        2
        /* CLASS */
      ), [
        [vShow, t.isVisable]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var ee = d(rt, [["render", at], ["__scopeId", "data-v-0cc628b7"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/message/src/index.vue"]]);
var Nt = ({ type: e, content: s, duration: r = 3e3 }) => {
  const a = h(ee, {
    type: e,
    content: s,
    duration: r,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(a, document.body);
};
var nt = defineComponent({
  __name: "index",
  props: {
    disabled: { type: Boolean, required: true, default: false },
    placeholder: { type: String, required: true, default: "" },
    modelValue: { type: String, required: true, default: "" },
    maxlength: { type: Number, required: true, default: 10 }
  },
  emits: ["update:modelValue", "input"],
  setup(e, { expose: s, emit: r }) {
    var J;
    s();
    const t = e, a = ref(((J = t.modelValue) == null ? void 0 : J.length) || 0), n = ref(), l = r, v = () => {
      l("update:modelValue", n.value.value), a.value = n.value.value.length;
    }, y = computed(() => ["ver-textarea", t.disabled == false ? "" : "is-disable"]), k = { props: t, n: a, textareaRef: n, emit: l, input: v, tClass: y };
    return Object.defineProperty(k, "__isScriptSetup", { enumerable: false, value: true }), k;
  }
});
var ot = ["disabled", "placeholder", "maxlength", "value"];
var it = {
  key: 0,
  class: "maxlength-box"
};
function ut(e, s, r, t, a, n) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(t.tClass)
    },
    [
      createBaseVNode("textarea", {
        ref: "textareaRef",
        disabled: t.props.disabled,
        placeholder: r.placeholder,
        maxlength: r.maxlength,
        value: r.modelValue,
        onInput: t.input
      }, null, 40, ot),
      r.maxlength != null && r.maxlength > 0 ? (openBlock(), createElementBlock(
        "div",
        it,
        toDisplayString(`${t.n}/${r.maxlength}`),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
var M = d(nt, [["render", ut], ["__scopeId", "data-v-79dc0524"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/textarea/src/index.vue"]]);
M.install = (e) => {
  e.component("VerTextarea", M);
};
var dt = {};
var lt = { class: "ver-container" };
function ct(e, s) {
  return openBlock(), createElementBlock("div", lt, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var R = d(dt, [["render", ct], ["__scopeId", "data-v-9201423e"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/container/src/index.vue"]]);
R.install = (e) => {
  e.component("VerContainer", R);
};
var _t = {};
var pt = { class: "ver-header" };
function ft(e, s) {
  return openBlock(), createElementBlock("div", pt, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var L = d(_t, [["render", ft], ["__scopeId", "data-v-70873b22"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/header/index.vue"]]);
L.install = (e) => {
  e.component("VerHeader", L);
};
var vt = {};
var mt = { class: "ver-main" };
function ht(e, s) {
  return openBlock(), createElementBlock("div", mt, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var X = d(vt, [["render", ht], ["__scopeId", "data-v-a5038a7c"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/main/index.vue"]]);
X.install = (e) => {
  e.component("VerMain", X);
};
var bt = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true, default: "" },
    content: { type: String, required: true, default: "" },
    duration: { type: Number, required: true, default: 3e3 },
    destroy: { type: Function, required: true, default: () => {
    } }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = ref(false), a = () => {
      t.value = false;
    };
    onMounted(() => {
      t.value = true, setTimeout(() => {
        t.value = false;
      }, r.duration);
    });
    const n = { props: r, isVisable: t, handClose: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var yt = { class: "ver-notification" };
var $t = { class: "ver-notification-title" };
var Vt = { class: "ver-notification-content" };
function kt(e, s, r, t, a, n) {
  return openBlock(), createBlock(Transition, {
    name: "slide-fade",
    onAfterLeave: t.props.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        yt,
        [
          createBaseVNode(
            "h2",
            $t,
            toDisplayString(r.title),
            1
            /* TEXT */
          ),
          createBaseVNode("div", Vt, [
            createBaseVNode(
              "span",
              null,
              toDisplayString(r.content),
              1
              /* TEXT */
            )
          ]),
          createBaseVNode("div", {
            class: "ver-notification-closebtn",
            onClick: t.handClose
          }, "X")
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, t.isVisable]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var te = d(bt, [["render", kt], ["__scopeId", "data-v-8d9adfe2"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/notification/src/index.vue"]]);
var Tt = ({ title: e, content: s, duration: r = 3e3 }) => {
  const a = h(te, {
    title: e,
    content: s,
    duration: r,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(a, document.body);
};
var gt = defineComponent({
  __name: "index",
  props: {
    title: { type: String, required: true, default: "" },
    type: { type: String, required: true, default: "info" }
  },
  setup(e, { expose: s }) {
    s();
    const r = ref(true), t = e, a = computed(() => ["ver-alert", `ver-alert-${t.type}`]), l = { isShow: r, props: t, VerClass: a, handClick: () => {
      r.value = false;
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var xt = { class: "ver-alert_inner" };
function Et(e, s, r, t, a, n) {
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(t.VerClass)
    },
    [
      createBaseVNode("div", xt, [
        createBaseVNode(
          "span",
          null,
          toDisplayString(r.title),
          1
          /* TEXT */
        ),
        createBaseVNode("span", {
          class: "ver-alert_closebtn",
          onClick: t.handClick
        }, "X")
      ])
    ],
    2
    /* CLASS */
  )), [
    [vShow, t.isShow]
  ]);
}
var H = d(gt, [["render", Et], ["__scopeId", "data-v-17b60d08"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/alert/src/index.vue"]]);
H.install = (e) => {
  e.component("VerAlert", H);
};
var St = defineComponent({
  __name: "index",
  props: {
    model: { type: Object, required: true },
    labelWidth: { type: [String, Number], required: true, default: "80px" }
  },
  setup(e, { expose: s }) {
    s();
    const r = ref(null);
    provide("form", r);
    const t = { form: r };
    return Object.defineProperty(t, "__isScriptSetup", { enumerable: false, value: true }), t;
  }
});
var qt = { class: "ver-form" };
function Ct(e, s, r, t, a, n) {
  return openBlock(), createElementBlock("div", qt, [
    renderSlot(e.$slots, "default")
  ]);
}
var U = d(St, [["render", Ct], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/form/src/index.vue"]]);
U.insatll = (e) => {
  e.component("VerForm", U);
};
var wt = defineComponent({
  __name: "index",
  props: {
    label: { type: [String, Number], required: true, default: "" }
  },
  setup(e, { expose: s }) {
    s();
    const r = e, t = inject("form"), a = computed(() => ({
      width: t.labelWidth
    })), n = { props: r, form: t, labelStyle: a };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var Dt = { class: "ver-form-item" };
var It = { class: "ver-form-item_content" };
function jt(e, s, r, t, a, n) {
  return openBlock(), createElementBlock("div", Dt, [
    createBaseVNode(
      "label",
      {
        style: normalizeStyle(t.labelStyle),
        class: "ver-form-item_label"
      },
      toDisplayString(t.props.label),
      5
      /* TEXT, STYLE */
    ),
    createBaseVNode("div", It, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var W = d(wt, [["render", jt], ["__scopeId", "data-v-c503e38a"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/formItem/src/index.vue"]]);
W.install = (e) => {
  e.component("VerFormItem", W);
};
var Ot = [
  q,
  D,
  C,
  w,
  I,
  j,
  O,
  P,
  N,
  T,
  B,
  z,
  A,
  F,
  ee,
  M,
  R,
  L,
  X,
  te,
  H,
  U,
  W
];
var Bt = (e) => {
  Ot.forEach((s) => {
    e.use(s);
  });
};
var zt = {
  install: Bt
};
export {
  H as VerAlert,
  P as VerAvatar,
  q as VerButton,
  N as VerCard,
  I as VerCol,
  R as VerContainer,
  O as VerDialog,
  B as VerDivider,
  z as VerDrawer,
  U as VerForm,
  W as VerFormItem,
  L as VerHeader,
  j as VerInput,
  w as VerLink,
  X as VerMain,
  Nt as VerMessage,
  Tt as VerNotification,
  F as VerRadio,
  D as VerRow,
  A as VerSwitch,
  T as VerTag,
  C as VerText,
  M as VerTextarea,
  zt as default
};
//# sourceMappingURL=versakit-ui.js.map
