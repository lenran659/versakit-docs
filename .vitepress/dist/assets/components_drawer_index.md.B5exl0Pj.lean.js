import{VerButton as u,VerDrawer as p}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as m,p as h,o as s,c as i,G as a,w as o,a as w,k as d,j as f,B as V,a1 as l}from"./chunks/framework.DzQ2AkZl.js";import{S as v}from"./chunks/index.C50Zsp5l.js";const D=`<template>
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
`,b=m({__name:"base",setup(c){const r=h(!1);return(t,e)=>(s(),i("div",null,[a(d(u),{onClick:e[0]||(e[0]=n=>r.value=!0)},{default:o(()=>e[2]||(e[2]=[w("打开抽屉")])),_:1}),a(d(p),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n)},{default:o(()=>e[3]||(e[3]=[f("span",null," 我是内容",-1)])),_:1},8,["modelValue"])]))}}),_=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}'),B={name:"components/drawer/index.md"},g=Object.assign(B,{setup(c){return(r,t)=>{const e=V("ClientOnly");return s(),i("div",null,[t[0]||(t[0]=l('<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>呼出一个临时的侧边栏, 可以从多个方向呼出</p><p>绑定 <code>v-model</code>到一个<code>Boolean</code>类型的变量。</p>',5)),a(e,null,{default:o(()=>[a(d(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(D)},{vue:o(()=>[a(b)]),_:1},8,["vueCode"])]),_:1}),t[1]||(t[1]=l('<h2 id="drawer-api" tabindex="-1">Drawer API <a class="header-anchor" href="#drawer-api" aria-label="Permalink to &quot;Drawer API&quot;">​</a></h2><h3 id="drawer-属性" tabindex="-1">Drawer 属性 <a class="header-anchor" href="#drawer-属性" aria-label="Permalink to &quot;Drawer 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{_ as __pageData,g as default};
