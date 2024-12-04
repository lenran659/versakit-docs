import{L as c,H as m}from"./chunks/theme.JIE6HSS9.js";import{d as h,i as f,o as i,f as v,w as n,m as d,H as a,a as b,b as t,q as r,a6 as V,P as x}from"./chunks/framework.DQIZlQnU.js";import{S as p}from"./chunks/index.CrDYnhOj.js";const _=`<template>
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
`,D=h({__name:"disabled",setup(u){const o=f("");return(e,l)=>(i(),v(a(m),null,{default:n(()=>[d(a(c),{disabled:"",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),B=`<template>
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
`,C=h({__name:"base",setup(u){const o=f("");return(e,l)=>(i(),v(a(m),null,{default:n(()=>[d(a(c),{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s),placeholder:"Please input"},null,8,["modelValue"])]),_:1}))}}),y=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}'),U={name:"components/input/index.md"},P=Object.assign(U,{setup(u){return(o,e)=>{const l=x("ClientOnly");return i(),b("div",null,[e[0]||(e[0]=t("h1",{id:"input-输入框",tabindex:"-1"},[r("Input 输入框 "),t("a",{class:"header-anchor",href:"#input-输入框","aria-label":'Permalink to "Input 输入框"'},"​")],-1)),e[1]||(e[1]=t("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[2]||(e[2]=t("p",null,"通过鼠标或键盘输入字符",-1)),d(l,null,{default:n(()=>[d(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(B)},{vue:n(()=>[d(C)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=t("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),e[4]||(e[4]=t("p",null,[r("通过 "),t("code",null,"disabled"),r(" 属性指定是否禁用 input 组件")],-1)),d(l,null,{default:n(()=>[d(a(p),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(_)},{vue:n(()=>[d(D)]),_:1},8,["vueCode"])]),_:1}),e[5]||(e[5]=V('<h2 id="devider-api" tabindex="-1">Devider API <a class="header-anchor" href="#devider-api" aria-label="Permalink to &quot;Devider API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td>输入框中未输入时默认显示的文字</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>modelValue</code></td><td>输入框输入内容绑定的值</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>type</code></td><td>输入框的类型</td><td><code>string</code></td><td><code>text</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用输入框</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',2))])}}});export{y as __pageData,P as default};
