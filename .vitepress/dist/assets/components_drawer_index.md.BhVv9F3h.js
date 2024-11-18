import{w as c,F as p}from"./chunks/theme.BpqLxboM.js";import{d as u,e as m,o as s,c as i,i as t,w as a,p as f,G as o,a as v,j as w,a7 as B}from"./chunks/framework.BDWWp1ud.js";import{S as D}from"./chunks/index.BdbjKrBf.js";const V=`<template>
  <div>
    <VerButton @click="drawer = true">打开抽屉</VerButton>

    <VerDrawer v-model:visible="drawer">
      <span> 我是内容</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerDrawer, VerButton } from "versakit-ui";

const drawer = ref(false);
<\/script>
`,_=u({__name:"base",setup(d){const r=m(!1);return(n,e)=>(s(),i("div",null,[t(o(c),{onClick:e[0]||(e[0]=l=>r.value=!0)},{default:a(()=>e[2]||(e[2]=[f("打开抽屉")])),_:1}),t(o(p),{visible:r.value,"onUpdate:visible":e[1]||(e[1]=l=>r.value=l)},{default:a(()=>e[3]||(e[3]=[v("span",null," 我是内容",-1)])),_:1},8,["visible"])]))}}),k=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}'),b={name:"components/drawer/index.md"},T=Object.assign(b,{setup(d){return(r,n)=>{const e=w("ClientOnly");return s(),i("div",null,[n[0]||(n[0]=B('<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>呼出一个临时的侧边栏, 可以从多个方向呼出</p><p> 绑定 <code>v-model:value</code>到一个<code>Boolean</code>类型的变量。 </p>',5)),t(e,null,{default:a(()=>[t(o(D),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(V)},{vue:a(()=>[t(_)]),_:1},8,["vueCode"])]),_:1})])}}});export{k as __pageData,T as default};
