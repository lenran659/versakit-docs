import{VerHeader as d,VerMain as p,VerContainer as m}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as u,o as r,c,G as n,w as t,k as o,a,_ as f,B as v,a1 as _}from"./chunks/framework.DzQ2AkZl.js";import{S as h}from"./chunks/index.C50Zsp5l.js";const T=`<template>
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

  .ver-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .ver-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
`,V={class:"common-layout"},x=u({__name:"partOne",setup(l){return(i,e)=>(r(),c("div",V,[n(o(m),{class:"is-vertical"},{default:t(()=>[n(o(d),null,{default:t(()=>e[0]||(e[0]=[a("Header")])),_:1}),n(o(p),null,{default:t(()=>e[1]||(e[1]=[a("Main")])),_:1})]),_:1})]))}}),C=f(x,[["__scopeId","data-v-50e1bc83"]]),U=JSON.parse('{"title":"Container 布局容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/container/index.md","filePath":"components/container/index.md"}'),y={name:"components/container/index.md"},B=Object.assign(y,{setup(l){return(i,e)=>{const s=v("ClientOnly");return r(),c("div",null,[e[0]||(e[0]=_('<h1 id="container-布局容器" tabindex="-1">Container 布局容器 <a class="header-anchor" href="#container-布局容器" aria-label="Permalink to &quot;Container 布局容器&quot;">​</a></h1><p>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p><code>ver-container</code>外层容器。当子元素中包含<code>ver-header</code>或<code>t-footer</code>时，全部子元素会垂直上下排列，否则会水平左右排列。</p><p><code>ver-header</code>:顶栏容器。 <code>ver-aside</code>:侧边栏容器。 <code>ver-main</code>:主要区域容器。 <code>ver-footer</code>:底栏容器。</p><blockquote><p><strong>Tips</strong></p><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， <code>ver-container</code>的直接子元素必须是&gt; 后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 <code>ver-container</code></p></blockquote><h2 id="常见布局" tabindex="-1">常见布局 <a class="header-anchor" href="#常见布局" aria-label="Permalink to &quot;常见布局&quot;">​</a></h2>',6)),n(s,null,{default:t(()=>[n(o(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(T)},{vue:t(()=>[n(C)]),_:1},8,["vueCode"])]),_:1})])}}});export{U as __pageData,B as default};
