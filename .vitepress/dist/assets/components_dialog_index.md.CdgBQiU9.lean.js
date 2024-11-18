import{w as d,B as p,j as g,P as y}from"./chunks/theme.D8eHDFSC.js";import{d as b,e as m,o as v,f as T,w as o,i as n,p as a,G as i,a as r,_ as B,c as U,j as k}from"./chunks/framework.sNb4YCY2.js";import{S as V}from"./chunks/index.BjlFYz3S.js";const C=`<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <VerDialog v-model="dialogVisible">
      <template #title>
        <div class="title">
          <h4>This is a custom header!</h4>
        </div>
      </template>
    </VerDialog>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerRow, VerButton, VerDialog } from "versakit-ui";

import { ref } from "vue";

const dialogVisible = ref(false);
<\/script>
`,x=b({__name:"header",setup(f){const s=m(!1);return(e,l)=>(v(),T(i(g),null,{default:o(()=>[n(i(d),{onClick:l[0]||(l[0]=t=>s.value=!0)},{default:o(()=>l[2]||(l[2]=[a("点击打开对话框")])),_:1}),n(i(p),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value=t)},{title:o(()=>l[3]||(l[3]=[r("div",{class:"title"},[r("h4",null,"This is a custom header!")],-1)])),_:1},8,["modelValue"])]),_:1}))}}),J=`<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>
    <ver-button @click="dialogFromVisible = true">点击打开对话框</ver-button>
    <!-- 普通 -->
    <ver-dialog v-model="dialogVisible" title="测试">
      <p>这是一个信息</p>
    </ver-dialog>
    <!-- 表单 -->
    <ver-dialog v-model="dialogFromVisible" title="表单">
      <div>
        <ver-input />
      </div>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogFromVisible = false"> 确定 </ver-button>
      </template>
    </ver-dialog>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerRow, VerButton, VerDialog, VerInput } from "versakit-ui";

import { ref } from "vue";

const dialogVisible = ref(false);
const dialogFromVisible = ref(false);
<\/script>

<style scoped>
.t-dialog_footer .t-btn {
  margin-right: 20px;
}

.t-btn + .t-btn {
  margin: 0px 10px;
}
</style>
`,D=b({__name:"content",setup(f){const s=m(!1),e=m(!1);return(l,t)=>(v(),T(i(g),null,{default:o(()=>[n(i(d),{onClick:t[0]||(t[0]=u=>s.value=!0)},{default:o(()=>t[5]||(t[5]=[a("点击打开对话框")])),_:1}),n(i(d),{onClick:t[1]||(t[1]=u=>e.value=!0)},{default:o(()=>t[6]||(t[6]=[a("点击打开对话框")])),_:1}),n(i(p),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=u=>s.value=u),title:"测试"},{default:o(()=>t[7]||(t[7]=[r("p",null,"这是一个信息",-1)])),_:1},8,["modelValue"]),n(i(p),{modelValue:e.value,"onUpdate:modelValue":t[4]||(t[4]=u=>e.value=u),title:"表单"},{footer:o(()=>[n(i(d),null,{default:o(()=>t[8]||(t[8]=[a("取消")])),_:1}),n(i(d),{type:"primary",onClick:t[3]||(t[3]=u=>e.value=!1)},{default:o(()=>t[9]||(t[9]=[a(" 确定 ")])),_:1})]),default:o(()=>[r("div",null,[n(i(y))])]),_:1},8,["modelValue"])]),_:1}))}}),F=B(D,[["__scopeId","data-v-dfc7c312"]]),Q=`<template>
  <div>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <ver-dialog v-model="dialogVisible">
      <span>这是一段信息</span>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogVisible = false">确定</ver-button>
      </template>
    </ver-dialog>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerDialog } from "versakit-ui";

import { ref } from "vue";

const dialogVisible = ref(false);
<\/script>

<style scoped>
.ver-dialog_footer .ver-btn {
  margin-right: 20px;
}
</style>
`,w=b({__name:"base",setup(f){const s=m(!1);return(e,l)=>(v(),U("div",null,[n(i(d),{onClick:l[0]||(l[0]=t=>s.value=!0)},{default:o(()=>l[3]||(l[3]=[a("点击打开对话框")])),_:1}),n(i(p),{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=t=>s.value=t)},{footer:o(()=>[n(i(d),null,{default:o(()=>l[4]||(l[4]=[a("取消")])),_:1}),n(i(d),{type:"primary",onClick:l[1]||(l[1]=t=>s.value=!1)},{default:o(()=>l[5]||(l[5]=[a("确定")])),_:1})]),default:o(()=>[l[6]||(l[6]=r("span",null,"这是一段信息",-1))]),_:1},8,["modelValue"])]))}}),A=B(w,[["__scopeId","data-v-1756274b"]]),M=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),R={name:"components/dialog/index.md"},Z=Object.assign(R,{setup(f){return(s,e)=>{const l=k("ClientOnly");return v(),U("div",null,[e[0]||(e[0]=r("h1",{id:"dialog-对话框",tabindex:"-1"},[a("Dialog 对话框 "),r("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),e[1]||(e[1]=r("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),r("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[2]||(e[2]=r("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1)),e[3]||(e[3]=a(" 绑定 ")),e[4]||(e[4]=r("code",null,"v-model:value",-1)),e[5]||(e[5]=a("到一个")),e[6]||(e[6]=r("code",null,"Boolean",-1)),e[7]||(e[7]=a("类型的变量。 ")),n(l,null,{default:o(()=>[n(i(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(Q)},{vue:o(()=>[n(A)]),_:1},8,["vueCode"])]),_:1}),e[8]||(e[8]=r("h2",{id:"自定义内容",tabindex:"-1"},[a("自定义内容 "),r("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),e[9]||(e[9]=r("p",null,"对话框的内容可以是任何东西。",-1)),n(l,null,{default:o(()=>[n(i(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(J)},{vue:o(()=>[n(F)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=r("h2",{id:"自定义标题",tabindex:"-1"},[a("自定义标题 "),r("a",{class:"header-anchor",href:"#自定义标题","aria-label":'Permalink to "自定义标题"'},"​")],-1)),e[11]||(e[11]=r("p",null,[r("code",null,"title"),a(" 可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 "),r("code",null,"title"),a("属性来指定哪些元素应该读取为对话框标题。 ")],-1)),n(l,null,{default:o(()=>[n(i(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(C)},{vue:o(()=>[n(x)]),_:1},8,["vueCode"])]),_:1})])}}});export{M as __pageData,Z as default};
