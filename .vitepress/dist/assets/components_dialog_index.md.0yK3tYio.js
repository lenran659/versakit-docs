import{U as d,b as p,i as g,c as y}from"./chunks/theme.HzRXKWqu.js";import{d as b,e as m,o as v,f as T,w as n,Q as t,l as r,D as i,a,_ as U,c as B,N as k}from"./chunks/framework.BvQ8UnBS.js";import{S as V}from"./chunks/index.HR8TKol0.js";const C=`<template>
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
`,x=b({__name:"header",setup(f){const s=m(!1);return(o,e)=>(v(),T(i(g),null,{default:n(()=>[t(i(d),{onClick:e[0]||(e[0]=l=>s.value=!0)},{default:n(()=>e[2]||(e[2]=[r("点击打开对话框")])),_:1}),t(i(p),{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l)},{title:n(()=>e[3]||(e[3]=[a("div",{class:"title"},[a("h4",null,"This is a custom header!")],-1)])),_:1},8,["modelValue"])]),_:1}))}}),c=`<template>
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
`,D=b({__name:"content",setup(f){const s=m(!1),o=m(!1);return(e,l)=>(v(),T(i(g),null,{default:n(()=>[t(i(d),{onClick:l[0]||(l[0]=u=>s.value=!0)},{default:n(()=>l[5]||(l[5]=[r("点击打开对话框")])),_:1}),t(i(d),{onClick:l[1]||(l[1]=u=>o.value=!0)},{default:n(()=>l[6]||(l[6]=[r("点击打开对话框")])),_:1}),t(i(p),{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),title:"测试"},{default:n(()=>l[7]||(l[7]=[a("p",null,"这是一个信息",-1)])),_:1},8,["modelValue"]),t(i(p),{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=u=>o.value=u),title:"表单"},{footer:n(()=>[t(i(d),null,{default:n(()=>l[8]||(l[8]=[r("取消")])),_:1}),t(i(d),{type:"primary",onClick:l[3]||(l[3]=u=>o.value=!1)},{default:n(()=>l[9]||(l[9]=[r(" 确定 ")])),_:1})]),default:n(()=>[a("div",null,[t(i(y))])]),_:1},8,["modelValue"])]),_:1}))}}),J=U(D,[["__scopeId","data-v-dfc7c312"]]),F=`<template>
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
`,Q=b({__name:"base",setup(f){const s=m(!1);return(o,e)=>(v(),B("div",null,[t(i(d),{onClick:e[0]||(e[0]=l=>s.value=!0)},{default:n(()=>e[3]||(e[3]=[r("点击打开对话框")])),_:1}),t(i(p),{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=l=>s.value=l)},{footer:n(()=>[t(i(d),null,{default:n(()=>e[4]||(e[4]=[r("取消")])),_:1}),t(i(d),{type:"primary",onClick:e[1]||(e[1]=l=>s.value=!1)},{default:n(()=>e[5]||(e[5]=[r("确定")])),_:1})]),default:n(()=>[e[6]||(e[6]=a("span",null,"这是一段信息",-1))]),_:1},8,["modelValue"])]))}}),A=U(Q,[["__scopeId","data-v-1756274b"]]),M=JSON.parse('{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}'),w={name:"components/dialog/index.md"},Z=Object.assign(w,{setup(f){return(s,o)=>{const e=k("ClientOnly");return v(),B("div",null,[o[0]||(o[0]=a("h1",{id:"dialog-对话框",tabindex:"-1"},[r("Dialog 对话框 "),a("a",{class:"header-anchor",href:"#dialog-对话框","aria-label":'Permalink to "Dialog 对话框"'},"​")],-1)),o[1]||(o[1]=a("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),o[2]||(o[2]=a("p",null,[r("在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 "),a("code",null,"v-model"),r("到一个"),a("code",null,"Boolean"),r("类型的变量。")],-1)),t(e,null,{default:n(()=>[t(i(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(F)},{vue:n(()=>[t(A)]),_:1},8,["vueCode"])]),_:1}),o[3]||(o[3]=a("h2",{id:"自定义内容",tabindex:"-1"},[r("自定义内容 "),a("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),o[4]||(o[4]=a("p",null,"对话框的内容可以是任何东西。",-1)),t(e,null,{default:n(()=>[t(i(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(c)},{vue:n(()=>[t(J)]),_:1},8,["vueCode"])]),_:1}),o[5]||(o[5]=a("h2",{id:"自定义标题",tabindex:"-1"},[r("自定义标题 "),a("a",{class:"header-anchor",href:"#自定义标题","aria-label":'Permalink to "自定义标题"'},"​")],-1)),o[6]||(o[6]=a("p",null,[r("可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 "),a("code",null,"title"),r("属性来指定哪些元素应该读取为对话框标题。")],-1)),t(e,null,{default:n(()=>[t(i(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:i(C)},{vue:n(()=>[t(x)]),_:1},8,["vueCode"])]),_:1})])}}});export{M as __pageData,Z as default};
