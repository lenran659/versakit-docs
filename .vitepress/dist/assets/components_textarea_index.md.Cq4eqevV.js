import{y as m}from"./chunks/theme.HzRXKWqu.js";import{d as u,e as T,o as d,f as x,D as r,_ as V,N as h,c as U,a as t,l as n,Q as a,w as o}from"./chunks/framework.BvQ8UnBS.js";import{S as p}from"./chunks/index.HR8TKol0.js";const f=`<template>
  <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VerTextarea } from "versakit-ui";
const textarea = ref("");
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,B=u({__name:"maxlength",setup(i){const s=T("");return(e,l)=>(d(),x(r(m),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),maxlength:10,placeholder:"请输入内容"},null,8,["modelValue"]))}}),v=V(B,[["__scopeId","data-v-e776464d"]]),J=`<template>
  <VerTextarea disabled placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { VerTextarea } from "versakit-ui";
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,C=u({__name:"disabled",setup(i){return(s,e)=>(d(),x(r(m),{disabled:"",placeholder:"请输入内容"}))}}),y=V(C,[["__scopeId","data-v-9589cb8a"]]),b=`<template>
  <VerTextarea v-model="textareaVal" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { VerTextarea } from "versakit-ui";
const textareaVal = ref("");
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,k=u({__name:"base",setup(i){const s=T("");return(e,l)=>(d(),x(r(m),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=c=>s.value=c),placeholder:"请输入内容"},null,8,["modelValue"]))}}),_=V(k,[["__scopeId","data-v-277a79e1"]]),A=JSON.parse('{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}'),Q={name:"components/textarea/index.md"},D=Object.assign(Q,{setup(i){return(s,e)=>{const l=h("ClientOnly");return d(),U("div",null,[e[0]||(e[0]=t("h1",{id:"textarea-文本域",tabindex:"-1"},[n("TextArea 文本域 "),t("a",{class:"header-anchor",href:"#textarea-文本域","aria-label":'Permalink to "TextArea 文本域"'},"​")],-1)),e[1]||(e[1]=t("p",null,"多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。",-1)),e[2]||(e[2]=t("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[3]||(e[3]=t("p",null,"用于多行输入。",-1)),a(l,null,{default:o(()=>[a(r(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(b)},{vue:o(()=>[a(_)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=t("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[5]||(e[5]=t("p",null,[n("使用"),t("code",null,"disabled"),n("属性启用")],-1)),a(l,null,{default:o(()=>[a(r(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(J)},{vue:o(()=>[a(y)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=t("h2",{id:"限制长度",tabindex:"-1"},[n("限制长度 "),t("a",{class:"header-anchor",href:"#限制长度","aria-label":'Permalink to "限制长度"'},"​")],-1)),e[7]||(e[7]=t("p",null,[n("使用"),t("code",null,"maxlength"),n("属性启用")],-1)),a(l,null,{default:o(()=>[a(r(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(f)},{vue:o(()=>[a(v)]),_:1},8,["vueCode"])]),_:1})])}}});export{A as __pageData,D as default};
