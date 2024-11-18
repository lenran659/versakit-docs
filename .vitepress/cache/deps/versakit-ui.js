import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderSlot,
  resolveComponent,
  toDisplayString,
  useCssVars,
  vModelRadio,
  vShow,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-CQOUZRMK.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/versakit-ui@0.0.9/node_modules/versakit-ui/dist/versakit-ui.js
var ce = defineComponent({
  __name: "index",
  props: {
    type: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = e, s = computed(() => [
      "ver-btn",
      t.type == "" ? "" : `ver-btn-${t.type}`,
      t.plain == false ? "" : "is-plain",
      t.round == false ? "" : "is-round",
      t.disable == false ? "" : "is-disable"
    ]), n = { props: t, Verclass: s };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var c = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of a)
    t[s] = n;
  return t;
};
var ue = ["disabled"];
function _e(e, a, t, s, n, r) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(s.Verclass),
    disabled: t.disable
  }, [
    createBaseVNode("span", null, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ], 10, ue);
}
var w = c(ce, [["render", _e], ["__scopeId", "data-v-bed0a896"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/button/index.vue"]]);
w.install = (e) => {
  e.component("VerButton", w);
};
var pe = defineComponent({
  __name: "index",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    truncated: {
      type: Boolean,
      default: false
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = e, s = computed(() => [
      "ver-text",
      t.type == "" ? "" : `ver-text-${t.type}`,
      t.size == "" ? "" : `ver-text-${t.size}`,
      t.truncated == false ? "" : "is-truncated"
    ]), n = { props: t, VerClass: s };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
function fe(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(s.VerClass)
    },
    [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var D = c(pe, [["render", fe], ["__scopeId", "data-v-777d55bb"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/text/index.vue"]]);
D.install = (e) => {
  e.component("VerText", D);
};
var ve = defineComponent({
  __name: "index",
  props: {
    type: {
      type: String,
      default: ""
    },
    disable: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = e, s = computed(() => ["ver-link", t.type == "" ? "" : `ver-link-${t.type}`, t.disable == false ? "" : "is-disable"]), n = { props: t, tClass: s };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var me = ["href"];
function be(e, a, t, s, n, r) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass(s.tClass),
    href: t.href
  }, [
    createBaseVNode("span", null, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ], 10, me);
}
var I = c(ve, [["render", be], ["__scopeId", "data-v-938e53a8"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/link/index.vue"]]);
I.install = (e) => {
  e.component("VerLink", I);
};
var he = {};
var ye = { class: "ver-row" };
function $e(e, a) {
  return openBlock(), createElementBlock("div", ye, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var j = c(he, [["render", $e], ["__scopeId", "data-v-870735ba"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/row/index.vue"]]);
j.install = (e) => {
  e.component("VerRow", j);
};
var ke = defineComponent({
  __name: "index",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(e, { expose: a }) {
    a(), useCssVars((l) => ({
      "bca175bf-width": s.value,
      "bca175bf-offset": n.value
    }));
    const t = e, s = ref(t.span <= 24 && t.span % 1 == 0 ? 100 / 24 * t.span + "%" : ""), n = ref(t.offset <= 24 && t.offset % 1 == 0 ? 100 / 24 * t.offset + "%" : ""), r = { props: t, width: s, offset: n };
    return Object.defineProperty(r, "__isScriptSetup", { enumerable: false, value: true }), r;
  }
});
var ge = { class: "ver-col" };
function xe(e, a, t, s, n, r) {
  return openBlock(), createElementBlock("div", ge, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var O = c(ke, [["render", xe], ["__scopeId", "data-v-bca175bf"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/col/index.vue"]]);
O.install = (e) => {
  e.component("VerCol", O);
};
var Ve = defineComponent({
  __name: "index",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: String || Number,
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: a, emit: t }) {
    a();
    const s = t, n = e, r = (y) => {
      s("update:modelValue", y.target.value);
    }, l = computed(() => ["ver-input", n.disabled == false ? "" : "is-disabled"]), v = { emit: s, props: n, input: r, tClass: l };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var Se = ["disabled", "value", "type", "placeholder"];
function Ee(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(s.tClass)
    },
    [
      createBaseVNode("input", {
        disabled: t.disabled,
        value: t.modelValue,
        type: t.type,
        placeholder: t.placeholder,
        onInput: s.input
      }, null, 40, Se)
    ],
    2
    /* CLASS */
  );
}
var P = c(Ve, [["render", Ee], ["__scopeId", "data-v-cf6a75ca"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/input/index.vue"]]);
P.install = (e) => {
  e.component("VerInput", P);
};
var Ce = defineComponent({
  __name: "index",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "30%"
    },
    top: {
      type: String,
      default: "15vh"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: a, emit: t }) {
    a();
    const s = t, r = { emit: s, close: () => {
      s("update:modelValue", false);
    } };
    return Object.defineProperty(r, "__isScriptSetup", { enumerable: false, value: true }), r;
  }
});
var we = { class: "ver-dialog_header" };
var De = { class: "ver-dialog_title" };
var Ie = { class: "ver-dialog_body" };
var je = {
  key: 0,
  class: "ver-dialog_footer"
};
function Oe(e, a, t, s, n, r) {
  const l = resolveComponent("t-icon");
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: "ver-dialog_wrapper",
          onClick: withModifiers(s.close, ["self"])
        },
        [
          createBaseVNode(
            "div",
            {
              class: "ver-dialog",
              style: normalizeStyle({ width: t.width, marginTop: t.top })
            },
            [
              createBaseVNode("div", we, [
                renderSlot(e.$slots, "title", {}, () => [
                  createBaseVNode(
                    "span",
                    De,
                    toDisplayString(t.title),
                    1
                    /* TEXT */
                  )
                ], true),
                createBaseVNode("button", {
                  class: "ver-dialog_headerbtn",
                  onClick: s.close
                }, [
                  createVNode(l, { name: "cross" })
                ])
              ]),
              createBaseVNode("div", Ie, [
                renderSlot(e.$slots, "default", {}, void 0, true)
              ]),
              e.$slots.footer ? (openBlock(), createElementBlock("div", je, [
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
        [vShow, t.modelValue]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
var B = c(Ce, [["render", Oe], ["__scopeId", "data-v-18ef731c"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/dialog/index.vue"]]);
B.install = (e) => {
  e.component("VerDialog", B);
};
var Pe = {
  __name: "index",
  props: {
    position: {
      type: String,
      default: "left"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    line: {
      type: String,
      default: "solid"
    }
  },
  setup(e, { expose: a }) {
    a();
    const s = { props: e };
    return Object.defineProperty(s, "__isScriptSetup", { enumerable: false, value: true }), s;
  }
};
var Be = {
  key: 0,
  class: "ver-divider-title"
};
function Ne(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["ver-divider", { "ver-vertical": t.direction === "vertical" }]),
      style: normalizeStyle({
        "justify-content": t.position
      })
    },
    [
      t.position ? (openBlock(), createElementBlock("div", Be, [
        renderSlot(e.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
var N = c(Pe, [["render", Ne], ["__scopeId", "data-v-21b5f56d"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/divider/index.vue"]]);
N.install = (e) => {
  e.component("VerDivider", N);
};
var Te = defineComponent({
  __name: "index",
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    src: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 50
    }
  },
  setup(e, { expose: a }) {
    a(), useCssVars((l) => ({
      "7079b855-size": s
    }));
    const t = e, s = t.size + "px", n = computed(() => ["t-avatar", t.shape == "circle" ? "is-circle" : "is-square"]), r = { props: t, size: s, tClass: n };
    return Object.defineProperty(r, "__isScriptSetup", { enumerable: false, value: true }), r;
  }
});
var ze = ["src"];
function Ae(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(s.tClass)
    },
    [
      createBaseVNode("img", { src: t.src }, null, 8, ze)
    ],
    2
    /* CLASS */
  );
}
var T = c(Te, [["render", Ae], ["__scopeId", "data-v-7079b855"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/avatar/index.vue"]]);
T.install = (e) => {
  e.component("VerAvatar", T);
};
var Fe = defineComponent({
  __name: "index",
  props: {
    shadow: { type: String, default: "always" }
  },
  setup(e, { expose: a }) {
    a();
    const t = e, s = computed(() => ["ver-card", t.shadow == "always" ? "is-shadow-always" : t.shadow == "hover" ? "is-shadow-hover" : "is-shadow-never"]), n = { props: t, VerClass: s };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var Me = {
  key: 0,
  class: "ver-card-header"
};
var Re = { class: "ver-card-body" };
function Le(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(s.VerClass)
    },
    [
      e.$slots.header ? (openBlock(), createElementBlock("div", Me, [
        renderSlot(e.$slots, "header", {}, void 0, true)
      ])) : createCommentVNode("v-if", true),
      createBaseVNode("div", Re, [
        renderSlot(e.$slots, "default", {}, void 0, true)
      ])
    ],
    2
    /* CLASS */
  );
}
var z = c(Fe, [["render", Le], ["__scopeId", "data-v-db47bfa6"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/card/index.vue"]]);
z.intsall = (e) => {
  e.component("VerCard", z);
};
var qe = defineComponent({
  __name: "index",
  props: {
    type: {
      type: String,
      default: ""
    },
    effect: {
      type: String,
      default: "light"
    },
    round: {
      type: Boolean,
      default: false
      // round or not. Default to false.
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = e, s = computed(() => [
      "ver-tag",
      t.type == "" ? "" : `ver-tag-${t.type}`,
      t.round == false ? "" : "is-round",
      t.effect == "light" ? "is-light" : "is-plain"
    ]), n = { props: t, tClass: s };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
function Xe(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "span",
    {
      class: normalizeClass(s.tClass)
    },
    [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ],
    2
    /* CLASS */
  );
}
var A = c(qe, [["render", Xe], ["__scopeId", "data-v-c32a4fea"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/tag/index.vue"]]);
A.install = (e) => {
  e.component("VerTag", A);
};
var He = defineComponent({
  __name: "index",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible"],
  setup(e, { expose: a, emit: t }) {
    a();
    const s = e, n = t, l = { props: s, emit: n, handleClose: () => {
      n("update:visible", false);
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Ue = { class: "ver-drawer" };
var We = { class: "ver-drawer_header" };
var Ge = { class: "ver-drawer_title" };
var Je = { class: "ver-drawer_body" };
function Ke(e, a, t, s, n, r) {
  return openBlock(), createBlock(Transition, {
    name: "fade",
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: "ver-drawer_wrapper",
          onClick: withModifiers(s.handleClose, ["self"])
        },
        [
          createBaseVNode("div", Ue, [
            createBaseVNode("div", We, [
              createBaseVNode(
                "span",
                Ge,
                toDisplayString(t.title),
                1
                /* TEXT */
              ),
              createBaseVNode("button", {
                class: "ver-drawer_headerbtn",
                onClick: s.handleClose
              }, "X")
            ]),
            createBaseVNode("div", Je, [
              renderSlot(e.$slots, "default", {}, void 0, true)
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, t.visible]
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
var F = c(He, [["render", Ke], ["__scopeId", "data-v-5888801d"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/drawer/index.vue"]]);
F.insatll = (e) => {
  e.component("VerDrawer", F);
};
var Qe = defineComponent({
  __name: "index",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["input", "update:modelValue"],
  setup(e, { expose: a, emit: t }) {
    a();
    const s = t, n = e, r = computed(() => ["ver-switch", n.modelValue == false ? "" : "is-checked"]), v = { emit: s, props: n, VerClass: r, handClick: () => {
      s("input", !n.modelValue), s("update:modelValue", !n.modelValue);
    } };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var Ye = {
  class: "ver-switch-core",
  ref: "core"
};
function Ze(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(s.VerClass),
      onClick: s.handClick
    },
    [
      createBaseVNode(
        "span",
        Ye,
        a[0] || (a[0] = [
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
var M = c(Qe, [["render", Ze], ["__scopeId", "data-v-74f0b77f"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/switch/index.vue"]]);
M.insatll = (e) => {
  e.component("VerSwitch", M);
};
var et = defineComponent({
  __name: "index",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    modelValue: null,
    name: {
      type: String,
      default: ""
    },
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { expose: a, emit: t }) {
    a();
    const s = ref(), n = t, r = e, l = computed({
      get: () => r.modelValue,
      set: (y) => {
        n("update:modelValue", y), s.value && s.value.checked == l.value == r.label;
      }
    }), v = { radio: s, emit: n, props: r, modelValue: l };
    return Object.defineProperty(v, "__isScriptSetup", { enumerable: false, value: true }), v;
  }
});
var tt = { class: "ver-radio_input" };
var st = ["disabled", "name", "value"];
var nt = { class: "ver-radio_label" };
function at(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "label",
    {
      class: normalizeClass(["ver-radio", { "is-checked": t.label == s.modelValue, "is-disabled": t.disabled }])
    },
    [
      createBaseVNode("span", tt, [
        a[1] || (a[1] = createBaseVNode(
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
          "onUpdate:modelValue": a[0] || (a[0] = (l) => s.modelValue = l),
          value: t.label,
          type: "radio"
        }, null, 8, st), [
          [vModelRadio, s.modelValue]
        ])
      ]),
      createBaseVNode("span", nt, [
        renderSlot(e.$slots, "default", {}, void 0, true),
        e.$slots.default ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(
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
var R = c(et, [["render", at], ["__scopeId", "data-v-aa26fcef"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/radio/index.vue"]]);
R.install = (e) => {
  e.component("VerRadio", R);
};
var rt = defineComponent({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "info"
    },
    content: {
      type: String,
      required: true
    },
    duration: {
      type: Number
    },
    /**
     * 关闭时的回调
     */
    destroy: {
      type: Function
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = ref(false), s = e, n = reactive({
      style: {
        info: {
          color: "#909399",
          backgroundColor: "#f4f4f5",
          //9
          borderColor: "#c8c9cc"
          // 5
        },
        warning: {
          color: "#e6a23c",
          backgroundColor: "#fdf6ec",
          borderColor: "#f3d19e"
        },
        error: {
          color: "#ec3437",
          backgroundColor: "#fef0f0",
          borderColor: "#fab6b6"
        },
        success: {
          color: "#67c23a",
          backgroundColor: "#f0f9eb",
          borderColor: "#b3e19d"
        }
      }
    }), { style: r } = n;
    onMounted(() => {
      t.value = true, setTimeout(() => {
        t.value = false;
      }, s.duration);
    });
    const l = { isVisable: t, props: s, state: n, style: r };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var ot = { class: "text" };
function it(e, a, t, s, n, r) {
  return openBlock(), createBlock(Transition, {
    name: "down",
    onAfterLeave: t.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        {
          class: normalizeClass(["ver-message"]),
          style: normalizeStyle(s.style[t.type])
        },
        [
          createBaseVNode(
            "span",
            ot,
            toDisplayString(t.content),
            1
            /* TEXT */
          )
        ],
        4
        /* STYLE */
      ), [
        [vShow, s.isVisable]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var ee = c(rt, [["render", it], ["__scopeId", "data-v-44e3b8a6"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/message/index.vue"]]);
var Ft = ({ type: e, content: a, duration: t = 3e3 }) => {
  const n = h(ee, {
    type: e,
    content: a,
    duration: t,
    destroy: () => {
      render(null, document.body);
    }
  });
  console.trace("render........"), render(n, document.body);
};
var lt = defineComponent({
  __name: "index",
  props: {
    disabled: Boolean,
    placeholder: String,
    modelValue: String,
    maxlength: Number
  },
  emits: ["update:modelValue", "input"],
  setup(e, { expose: a, emit: t }) {
    var J;
    a();
    const s = t, n = e, r = ref(((J = n.modelValue) == null ? void 0 : J.length) || 0), l = ref(), v = () => {
      s("update:modelValue", l.value.value), r.value = l.value.value.length;
    }, y = computed(() => ["t-textarea", n.disabled == false ? "" : "is-disable"]), G = { emit: s, props: n, n: r, textareaRef: l, input: v, tClass: y };
    return Object.defineProperty(G, "__isScriptSetup", { enumerable: false, value: true }), G;
  }
});
var dt = ["disabled", "placeholder", "maxlength", "value"];
var ct = {
  key: 0,
  class: "maxlength-box"
};
function ut(e, a, t, s, n, r) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(s.tClass)
    },
    [
      createBaseVNode("textarea", {
        ref: "textareaRef",
        disabled: s.props.disabled,
        placeholder: t.placeholder,
        maxlength: t.maxlength,
        value: t.modelValue,
        onInput: s.input
      }, null, 40, dt),
      t.maxlength != null && t.maxlength > 0 ? (openBlock(), createElementBlock(
        "div",
        ct,
        toDisplayString(`${s.n}/${t.maxlength}`),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
var L = c(lt, [["render", ut], ["__scopeId", "data-v-952ea32f"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/textarea/index.vue"]]);
L.install = (e) => {
  e.component("VerTextarea", L);
};
var _t = {};
var pt = { class: "t-container" };
function ft(e, a) {
  return openBlock(), createElementBlock("div", pt, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var q = c(_t, [["render", ft], ["__scopeId", "data-v-6405e9bd"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/container/index.vue"]]);
q.install = (e) => {
  e.component("VerContainer", q);
};
var vt = {};
var mt = { class: "t-header" };
function bt(e, a) {
  return openBlock(), createElementBlock("div", mt, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var X = c(vt, [["render", bt], ["__scopeId", "data-v-70873b22"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/header/index.vue"]]);
X.install = (e) => {
  e.component("VerHeader", X);
};
var ht = {};
var yt = { class: "t-main" };
function $t(e, a) {
  return openBlock(), createElementBlock("div", yt, [
    renderSlot(e.$slots, "default", {}, void 0, true)
  ]);
}
var H = c(ht, [["render", $t], ["__scopeId", "data-v-a5038a7c"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/main/index.vue"]]);
H.install = (e) => {
  e.component("VerMain", H);
};
var kt = defineComponent({
  __name: "index",
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      required: true
    },
    /**
     * 展示时长
     */
    duration: {
      type: Number
    },
    /**
     * 关闭时的回调
     */
    destroy: {
      type: Function
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = ref(false), s = e, n = () => {
      t.value = false;
    };
    onMounted(() => {
      t.value = true, setTimeout(() => {
        t.value = false;
      }, s.duration);
    });
    const r = { isVisable: t, props: s, handClose: n };
    return Object.defineProperty(r, "__isScriptSetup", { enumerable: false, value: true }), r;
  }
});
var gt = { class: "ver-notification" };
var xt = { class: "ver-notification-title" };
var Vt = { class: "ver-notification-content" };
function St(e, a, t, s, n, r) {
  return openBlock(), createBlock(Transition, {
    name: "slide-fade",
    onAfterLeave: t.destroy,
    persisted: ""
  }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode(
        "div",
        gt,
        [
          createBaseVNode(
            "h2",
            xt,
            toDisplayString(t.title),
            1
            /* TEXT */
          ),
          createBaseVNode("div", Vt, [
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
            onClick: s.handClose
          }, "X")
        ],
        512
        /* NEED_PATCH */
      ), [
        [vShow, s.isVisable]
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"]);
}
var te = c(kt, [["render", St], ["__scopeId", "data-v-4d1dd365"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/notification/index.vue"]]);
var Mt = ({ title: e, content: a, duration: t = 3e3 }) => {
  const n = h(te, {
    title: e,
    content: a,
    duration: t,
    destroy: () => {
      render(null, document.body);
    }
  });
  render(n, document.body);
};
var Et = defineComponent({
  __name: "index",
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = ref(true), s = e, n = computed(() => ["ver-alert", `ver-alert-${s.type}`]), l = { isShow: t, props: s, VerClass: n, handClick: () => {
      t.value = false;
    } };
    return Object.defineProperty(l, "__isScriptSetup", { enumerable: false, value: true }), l;
  }
});
var Ct = { class: "ver-alert_inner" };
function wt(e, a, t, s, n, r) {
  return withDirectives((openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(s.VerClass)
    },
    [
      createBaseVNode("div", Ct, [
        createBaseVNode(
          "span",
          null,
          toDisplayString(t.title),
          1
          /* TEXT */
        ),
        createBaseVNode("span", {
          class: "ver-alert_closebtn",
          onClick: s.handClick
        }, " X ")
      ])
    ],
    2
    /* CLASS */
  )), [
    [vShow, s.isShow]
  ]);
}
var U = c(Et, [["render", wt], ["__scopeId", "data-v-7c6a1aa5"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/alert/index.vue"]]);
U.install = (e) => {
  e.component("VerAlert", U);
};
var Dt = defineComponent({
  __name: "index",
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = ref(null);
    provide("form", t);
    const n = { form: t, props: e };
    return Object.defineProperty(n, "__isScriptSetup", { enumerable: false, value: true }), n;
  }
});
var It = { class: "t-form" };
function jt(e, a, t, s, n, r) {
  return openBlock(), createElementBlock("div", It, [
    renderSlot(e.$slots, "default")
  ]);
}
var g = c(Dt, [["render", jt], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/form/index.vue"]]);
g.insatll = (e) => {
  e.component(g.name, g);
};
var Ot = defineComponent({
  __name: "index",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  setup(e, { expose: a }) {
    a();
    const t = e, s = inject("form"), n = computed(() => ({
      width: s.labelWidth
    })), r = { props: t, form: s, labelStyle: n };
    return Object.defineProperty(r, "__isScriptSetup", { enumerable: false, value: true }), r;
  }
});
var Pt = { class: "t-form-item" };
var Bt = { class: "t-form-item_content" };
function Nt(e, a, t, s, n, r) {
  return openBlock(), createElementBlock("div", Pt, [
    createBaseVNode(
      "label",
      {
        style: normalizeStyle(s.labelStyle),
        class: "t-form-item_label"
      },
      toDisplayString(t.label),
      5
      /* TEXT, STYLE */
    ),
    createBaseVNode("div", Bt, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var W = c(Ot, [["render", Nt], ["__scopeId", "data-v-f8d2b91d"], ["__file", "D:/我的/代码/项目/versakit/packages/versakit-ui/components/formItem/index.vue"]]);
W.install = (e) => {
  e.component("VerFormItem", W);
};
var Tt = [
  w,
  j,
  D,
  I,
  O,
  P,
  B,
  T,
  z,
  A,
  N,
  F,
  M,
  R,
  ee,
  L,
  q,
  X,
  H,
  te,
  U,
  g,
  W
];
var zt = (e) => {
  Tt.forEach((a) => {
    e.use(a);
  });
};
var Rt = {
  install: zt
};
export {
  U as VerAlert,
  T as VerAvatar,
  w as VerButton,
  z as VerCard,
  O as VerCol,
  q as VerContainer,
  B as VerDialog,
  N as VerDivider,
  F as VerDrawer,
  g as VerForm,
  W as VerFormItem,
  X as VerHeader,
  P as VerInput,
  I as VerLink,
  H as VerMain,
  Ft as VerMessage,
  Mt as VerNotification,
  R as VerRadio,
  j as VerRow,
  M as VerSwitch,
  A as VerTag,
  D as VerText,
  L as VerTextarea,
  Rt as default
};
//# sourceMappingURL=versakit-ui.js.map
