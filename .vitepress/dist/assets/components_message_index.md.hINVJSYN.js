import{VerMessage as l,VerButton as i}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as f,o as u,c as p,G as t,w as s,a as r,k as o,_ as y,B,j as n,a1 as h}from"./chunks/framework.DzQ2AkZl.js";import{S as g}from"./chunks/index.C50Zsp5l.js";const k=`<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="danger" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from "versakit-ui";

const success = () => {
  VerMessage({
    type: "success",
    content: "这是一条消息",
  });
};
const warning = () => {
  VerMessage({
    type: "warning",
    content: "这是一条消息",
  });
};

const info = () => {
  VerMessage({
    type: "info",
    content: "这是一条消息",
  });
};

const error = () => {
  VerMessage({
    type: "danger",
    content: "这是一条消息",
  });
};
<\/script>

<style scoped>
.t-btn {
  margin: 0px 10px;
}
</style>
`,b=f({__name:"status",setup(m){const c=()=>{l({type:"success",content:"这是一条消息"})},e=()=>{l({type:"warning",content:"这是一条消息"})},d=()=>{l({type:"info",content:"这是一条消息"})},V=()=>{l({type:"danger",content:"这是一条消息"})};return(v,a)=>(u(),p("div",null,[t(o(i),{type:"success",onClick:c},{default:s(()=>a[0]||(a[0]=[r("success")])),_:1}),t(o(i),{type:"warning",onClick:e},{default:s(()=>a[1]||(a[1]=[r("warning")])),_:1}),t(o(i),{type:"info",onClick:d},{default:s(()=>a[2]||(a[2]=[r("info")])),_:1}),t(o(i),{type:"danger",onClick:V},{default:s(()=>a[3]||(a[3]=[r("error")])),_:1})]))}}),C=y(b,[["__scopeId","data-v-b2e5991c"]]),M=`<template>
  <div>
    <VerButton @click="openMessage">点击</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from "versakit-ui";

const openMessage = () => {
  VerMessage({
    type: "info",
    content: "这是一条消息",
  });
};
<\/script>
`,T=f({__name:"base",setup(m){const c=()=>{l({type:"info",content:"这是一条消息"})};return(e,d)=>(u(),p("div",null,[t(o(i),{onClick:c},{default:s(()=>d[0]||(d[0]=[r("点击")])),_:1})]))}}),w=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}'),U={name:"components/message/index.md"},Q=Object.assign(U,{setup(m){return(c,e)=>{const d=B("ClientOnly");return u(),p("div",null,[e[0]||(e[0]=n("h1",{id:"message-消息提示",tabindex:"-1"},[r("Message 消息提示 "),n("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),e[1]||(e[1]=n("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),e[2]||(e[2]=n("h2",{id:"基本用法",tabindex:"-1"},[r("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[3]||(e[3]=n("p",null,"从顶部出现，3 秒后自动消失。",-1)),t(d,null,{default:s(()=>[t(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(M)},{vue:s(()=>[t(T)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=n("h2",{id:"不同状态",tabindex:"-1"},[r("不同状态 "),n("a",{class:"header-anchor",href:"#不同状态","aria-label":'Permalink to "不同状态"'},"​")],-1)),e[5]||(e[5]=n("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),t(d,null,{default:s(()=>[t(o(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(k)},{vue:s(()=>[t(C)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=h('<h2 id="message-api" tabindex="-1">Message API <a class="header-anchor" href="#message-api" aria-label="Permalink to &quot;Message API&quot;">​</a></h2><h3 id="message-属性" tabindex="-1">Message 属性 <a class="header-anchor" href="#message-属性" aria-label="Permalink to &quot;Message 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>绑定值</td><td><code>string</code></td><td><code>info</code></td></tr><tr><td><code>content</code></td><td>消息的内容</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>duration</code></td><td>消息的持续时间</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>destroy</code></td><td>message 的销毁函数</td><td><code>function</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{w as __pageData,Q as default};
