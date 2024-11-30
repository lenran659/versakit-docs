import{u as m}from"./chunks/theme.HzRXKWqu.js";import{d as c,o as b,f as d,w as l,l as e,D as r,N as p,c as u,a as n,Q as o}from"./chunks/framework.BvQ8UnBS.js";import{S as T}from"./chunks/index.HR8TKol0.js";const f=`<script setup lang="ts">\r
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
`,B=c({__name:"base",setup(i){const s=[{id:"tab1",label:"Tab1",name:"tab1-content"},{id:"tab2",label:"Tab2",name:"tab2-content"},{id:"tab3",label:"Tab3",name:"tab3-content"}];return(a,t)=>(b(),d(r(m),{tabList:s},{"tab1-content":l(()=>t[0]||(t[0]=[e("1")])),"tab2-content":l(()=>t[1]||(t[1]=[e("2")])),"tab3-content":l(()=>t[2]||(t[2]=[e("3")])),_:1}))}}),V=JSON.parse('{"title":"Tab 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tab/index.md","filePath":"components/tab/index.md"}'),v={name:"components/tab/index.md"},k=Object.assign(v,{setup(i){return(s,a)=>{const t=p("ClientOnly");return b(),u("div",null,[a[0]||(a[0]=n("h1",{id:"tab-标签页",tabindex:"-1"},[e("Tab 标签页 "),n("a",{class:"header-anchor",href:"#tab-标签页","aria-label":'Permalink to "Tab 标签页"'},"​")],-1)),a[1]||(a[1]=n("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a[2]||(a[2]=n("p",null,[e("通过 "),n("code",null,"tabList"),e(" 绑定当前激活的 "),n("code",null,"Tab"),e(" 名称。")],-1)),o(t,null,{default:l(()=>[o(r(T),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(f)},{vue:l(()=>[o(B)]),_:1},8,["vueCode"])]),_:1})])}}});export{V as __pageData,k as default};
