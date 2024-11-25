import{p as d,U as f}from"./chunks/theme.HzRXKWqu.js";import{d as m,o as r,c,Q as o,w as i,l as a,D as l,N as u,a as e}from"./chunks/framework.BvQ8UnBS.js";import{S as N}from"./chunks/index.HR8TKol0.js";const _=`<template>
  <div>
    <VerButton @click="openNotification">openNotification</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from "versakit-ui";

const openNotification = () => {
  VerNotification({
    title: "title",
    content: "content",
  });
};
<\/script>
`,v=m({__name:"base",setup(p){const s=()=>{d({title:"title",content:"content"})};return(t,n)=>(r(),c("div",null,[o(l(f),{onClick:s},{default:i(()=>n[0]||(n[0]=[a("openNotification")])),_:1})]))}}),x=JSON.parse('{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}'),B={name:"components/notification/index.md"},b=Object.assign(B,{setup(p){return(s,t)=>{const n=u("ClientOnly");return r(),c("div",null,[t[0]||(t[0]=e("h1",{id:"notification-通知",tabindex:"-1"},[a("Notification 通知 "),e("a",{class:"header-anchor",href:"#notification-通知","aria-label":'Permalink to "Notification 通知"'},"​")],-1)),t[1]||(t[1]=e("p",null,"悬浮出现在页面角落，显示全局的通知提醒消息。",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),o(n,null,{default:i(()=>[o(l(N),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:l(_)},{vue:i(()=>[o(v)]),_:1},8,["vueCode"])]),_:1})])}}});export{x as __pageData,b as default};
