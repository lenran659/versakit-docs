import{VerTab as d}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as c,o as s,b as m,w as o,a,k as l,B as p,c as u,j as n,G as r,a1 as T}from"./chunks/framework.DzQ2AkZl.js";import{S as h}from"./chunks/index.C50Zsp5l.js";const f=`<script setup lang="ts">\r
import { VerTab } from "versakit-ui";\r
\r
const customTabList: any = [\r
  { id: "tab1", label: "Tab1", name: "tab1-content" },\r
  { id: "tab2", label: "Tab2", name: "tab2-content" },\r
  { id: "tab3", label: "Tab3", name: "tab3-content" },\r
];\r
<\/script>\r
\r
<template>\r
  <ver-tab :tabList="customTabList">\r
    <template #tab1-content>1</template>\r
    <template #tab2-content>2</template>\r
    <template #tab3-content>3</template>\r
  </ver-tab>\r
</template>\r
\r
<style scoped></style>\r
`,x=c({__name:"base",setup(i){const b=[{id:"tab1",label:"Tab1",name:"tab1-content"},{id:"tab2",label:"Tab2",name:"tab2-content"},{id:"tab3",label:"Tab3",name:"tab3-content"}];return(t,e)=>(s(),m(l(d),{tabList:b},{"tab1-content":o(()=>e[0]||(e[0]=[a("1")])),"tab2-content":o(()=>e[1]||(e[1]=[a("2")])),"tab3-content":o(()=>e[2]||(e[2]=[a("3")])),_:1}))}}),y=JSON.parse('{"title":"Tab 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}'),B={name:"components/tab/index.md"},C=Object.assign(B,{setup(i){return(b,t)=>{const e=p("ClientOnly");return s(),u("div",null,[t[0]||(t[0]=n("h1",{id:"tab-标签页",tabindex:"-1"},[a("Tab 标签页 "),n("a",{class:"header-anchor",href:"#tab-标签页","aria-label":'Permalink to "Tab 标签页"'},"​")],-1)),t[1]||(t[1]=n("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),t[2]||(t[2]=n("p",null,[a("通过 "),n("code",null,"tabList"),a(" 绑定当前激活的 "),n("code",null,"Tab"),a(" 名称。")],-1)),r(e,null,{default:o(()=>[r(l(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(f)},{vue:o(()=>[r(x)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=T('<h2 id="tab-api" tabindex="-1">Tab API <a class="header-anchor" href="#tab-api" aria-label="Permalink to &quot;Tab API&quot;">​</a></h2><h3 id="tab-属性" tabindex="-1">Tab 属性 <a class="header-anchor" href="#tab-属性" aria-label="Permalink to &quot;Tab 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>tabList</code></td><td>Tab中绑定的数据</td><td><code>array</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{y as __pageData,C as default};
