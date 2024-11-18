import{a as i,w as c}from"./chunks/theme.D8eHDFSC.js";import{d as g,o as u,c as d,i as n,w as s,p as l,G as o,_ as B,j as y,a as t}from"./chunks/framework.sNb4YCY2.js";import{S as f}from"./chunks/index.BjlFYz3S.js";const C=`<template>
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
    type: "error",
    content: "这是一条消息",
  });
};
<\/script>

<style scoped>
.t-btn {
  margin: 0px 10px;
}
</style>
`,k=g({__name:"status",setup(m){const p=()=>{i({type:"success",content:"这是一条消息"})},e=()=>{i({type:"warning",content:"这是一条消息"})},a=()=>{i({type:"info",content:"这是一条消息"})},V=()=>{i({type:"error",content:"这是一条消息"})};return(M,r)=>(u(),d("div",null,[n(o(c),{type:"success",onClick:p},{default:s(()=>r[0]||(r[0]=[l("success")])),_:1}),n(o(c),{type:"warning",onClick:e},{default:s(()=>r[1]||(r[1]=[l("warning")])),_:1}),n(o(c),{type:"info",onClick:a},{default:s(()=>r[2]||(r[2]=[l("info")])),_:1}),n(o(c),{type:"danger",onClick:V},{default:s(()=>r[3]||(r[3]=[l("error")])),_:1})]))}}),T=B(k,[["__scopeId","data-v-dd1430b5"]]),U=`<template>
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
`,v=g({__name:"base",setup(m){const p=()=>{i({type:"info",content:"这是一条消息"})};return(e,a)=>(u(),d("div",null,[n(o(c),{onClick:p},{default:s(()=>a[0]||(a[0]=[l("点击")])),_:1})]))}}),w=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}'),x={name:"components/message/index.md"},Q=Object.assign(x,{setup(m){return(p,e)=>{const a=y("ClientOnly");return u(),d("div",null,[e[0]||(e[0]=t("h1",{id:"message-消息提示",tabindex:"-1"},[l("Message 消息提示 "),t("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),e[1]||(e[1]=t("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),e[2]||(e[2]=t("h2",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[3]||(e[3]=t("p",null,"从顶部出现，3 秒后自动消失。",-1)),n(a,null,{default:s(()=>[n(o(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(U)},{vue:s(()=>[n(v)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"不同状态",tabindex:"-1"},[l("不同状态 "),t("a",{class:"header-anchor",href:"#不同状态","aria-label":'Permalink to "不同状态"'},"​")],-1)),e[5]||(e[5]=t("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),n(a,null,{default:s(()=>[n(o(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(C)},{vue:s(()=>[n(T)]),_:1},8,["vueCode"])]),_:1})])}}});export{w as __pageData,Q as default};
