import{P as f,s as p}from"./chunks/theme.BrU2QKam.js";import{d as m,o as r,c as l,j as i,w as n,m as a,H as d,P as u,a as e,a6 as h}from"./chunks/framework.B4hMHHFJ.js";import{S as b}from"./chunks/index.CqP34_JU.js";const N=`<template>
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
`,v=m({__name:"base",setup(s){const c=()=>{f({title:"title",content:"content"})};return(t,o)=>(r(),l("div",null,[i(d(p),{onClick:c},{default:n(()=>o[0]||(o[0]=[a("openNotification")])),_:1})]))}}),P=JSON.parse('{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}'),x={name:"components/notification/index.md"},V=Object.assign(x,{setup(s){return(c,t)=>{const o=u("ClientOnly");return r(),l("div",null,[t[0]||(t[0]=e("h1",{id:"notification-通知",tabindex:"-1"},[a("Notification 通知 "),e("a",{class:"header-anchor",href:"#notification-通知","aria-label":'Permalink to "Notification 通知"'},"​")],-1)),t[1]||(t[1]=e("p",null,"悬浮出现在页面角落，显示全局的通知提醒消息。",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),i(o,null,{default:n(()=>[i(d(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(N)},{vue:n(()=>[i(v)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=h('<h2 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h2><h3 id="notification-属性" tabindex="-1">Notification 属性 <a class="header-anchor" href="#notification-属性" aria-label="Permalink to &quot;Notification 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>duration</code></td><td>notification 的持续时间</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>destroy</code></td><td>notification 的销毁函数</td><td><code>function</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{P as __pageData,V as default};
