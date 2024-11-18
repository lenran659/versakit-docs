import{X as d,H as p,q as m}from"./chunks/theme.BpqLxboM.js";import{d as u,o as l,c as r,i as t,w as n,G as o,p as a,_ as f,j as _,a7 as g}from"./chunks/framework.BDWWp1ud.js";import{S as h}from"./chunks/index.BdbjKrBf.js";const v=`<template>
  <div class="common-layout">
    <ver-container class="is-vertical">
      <ver-header>Header</ver-header>
      <ver-main>Main</ver-main>
    </ver-container>
  </div>
</template>

<script setup lang="ts">
import { VerContainer, VerHeader, VerMain } from "versakit-ui";
<\/script>

<style scoped>
.common-layout {
  .is-vertical {
    flex-direction: column;
  }

  .t-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .t-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
`,x={class:"common-layout"},T=u({__name:"partOne",setup(c){return(i,e)=>(l(),r("div",x,[t(o(m),{class:"is-vertical"},{default:n(()=>[t(o(d),null,{default:n(()=>e[0]||(e[0]=[a("Header")])),_:1}),t(o(p),null,{default:n(()=>e[1]||(e[1]=[a("Main")])),_:1})]),_:1})]))}}),y=f(T,[["__scopeId","data-v-c122860a"]]),U=JSON.parse('{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container/index.md","filePath":"components/container/index.md"}'),C={name:"components/container/index.md"},B=Object.assign(C,{setup(c){return(i,e)=>{const s=_("ClientOnly");return l(),r("div",null,[e[0]||(e[0]=g('<h1 id="container-布局容器" tabindex="-1">Container 布局容器 <a class="header-anchor" href="#container-布局容器" aria-label="Permalink to &quot;Container 布局容器&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>&lt;t-container&gt;</code>:外层容器。当子元素中包含<code>&lt;t-header&gt;</code>或<code>&lt;t-footer&gt;</code>时，全部子元素会垂直上下排列，否则会水平左右排列。</p><p><code>&lt;t-header&gt;</code>:顶栏容器。</p><p><code>&lt;t-aside&gt;</code>:侧边栏容器。</p><p><code>&lt;t-main&gt;</code>:主要区域容器。</p><p><code>&lt;t-footer&gt;</code>:底栏容器。</p><blockquote><p><strong>Tips</strong></p><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， &lt;t-container&gt;的直接子元素必须是&gt; 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 &lt;t-container&gt;</p></blockquote><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2>',9)),t(s,null,{default:n(()=>[t(o(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(v)},{vue:n(()=>[t(y)]),_:1},8,["vueCode"])]),_:1})])}}});export{U as __pageData,B as default};
