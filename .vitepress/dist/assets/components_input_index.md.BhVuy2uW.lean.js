import{c,i as m}from"./chunks/theme.HzRXKWqu.js";import{d as f,e as V,o as i,f as v,w as s,Q as n,D as a,N as b,c as B,a as l,l as r}from"./chunks/framework.BvQ8UnBS.js";import{S as d}from"./chunks/index.HR8TKol0.js";const h=`<template>
  <VerRow>
    <VerInput disabled v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerInput, VerRow } from "versakit-ui";

const value = ref("");
<\/script>

<style scoped></style>
`,_=f({__name:"disabled",setup(p){const o=V("");return(e,t)=>(i(),v(a(m),null,{default:s(()=>[n(a(c),{disabled:"",modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value=u),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),C=`<template>
  <VerRow>
    <VerInput v-model="value" placeholder="Please input" />
  </VerRow>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerInput, VerRow } from "versakit-ui";

const value = ref("");
<\/script>

<style scoped></style>
`,T=f({__name:"base",setup(p){const o=V("");return(e,t)=>(i(),v(a(m),null,{default:s(()=>[n(a(c),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=u=>o.value=u),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),D=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}'),U={name:"components/input/index.md"},w=Object.assign(U,{setup(p){return(o,e)=>{const t=b("ClientOnly");return i(),B("div",null,[e[0]||(e[0]=l("h1",{id:"input-输入框",tabindex:"-1"},[r("Input 输入框 "),l("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),e[1]||(e[1]=l("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),l("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[2]||(e[2]=l("p",null,"通过鼠标或键盘输入字符",-1)),n(t,null,{default:s(()=>[n(a(d),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(C)},{vue:s(()=>[n(T)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=l("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),l("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[4]||(e[4]=l("p",null,[r("通过 "),l("code",null,"disabled"),r(" 属性指定是否禁用 input 组件")],-1)),n(t,null,{default:s(()=>[n(a(d),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(h)},{vue:s(()=>[n(_)]),_:1},8,["vueCode"])]),_:1})])}}});export{D as __pageData,w as default};
