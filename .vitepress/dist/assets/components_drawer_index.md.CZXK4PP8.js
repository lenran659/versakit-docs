import{s as c,v as p}from"./chunks/theme.JIE6HSS9.js";import{d as m,i as h,o as s,a as i,m as t,w as o,q as f,H as d,b as w,a6 as l,P as v}from"./chunks/framework.DQIZlQnU.js";import{S as b}from"./chunks/index.CrDYnhOj.js";const D=`<template>
  <div>
    <VerButton @click="drawer = true">打开抽屉</VerButton>

    <VerDrawer v-model="drawer">
      <span> 我是内容</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerDrawer, VerButton } from "versakit-ui";

const drawer = ref(false);
<\/script>
`,x=m({__name:"base",setup(u){const r=h(!1);return(a,e)=>(s(),i("div",null,[t(d(c),{onClick:e[0]||(e[0]=n=>r.value=!0)},{default:o(()=>e[2]||(e[2]=[f("打开抽屉")])),_:1}),t(d(p),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n)},{default:o(()=>e[3]||(e[3]=[w("span",null," 我是内容",-1)])),_:1},8,["modelValue"])]))}}),k=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}'),V={name:"components/drawer/index.md"},P=Object.assign(V,{setup(u){return(r,a)=>{const e=v("ClientOnly");return s(),i("div",null,[a[0]||(a[0]=l('<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>呼出一个临时的侧边栏, 可以从多个方向呼出</p><p>绑定 <code>v-model</code>到一个<code>Boolean</code>类型的变量。</p>',5)),t(e,null,{default:o(()=>[t(d(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(D)},{vue:o(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),a[1]||(a[1]=l('<h2 id="drawer-api" tabindex="-1">Drawer API <a class="header-anchor" href="#drawer-api" aria-label="Permalink to &quot;Drawer API&quot;">​</a></h2><h3 id="drawer-属性" tabindex="-1">Drawer 属性 <a class="header-anchor" href="#drawer-属性" aria-label="Permalink to &quot;Drawer 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{k as __pageData,P as default};
