import{x as s}from"./chunks/theme.JIE6HSS9.js";import{d as v,i as f,o as u,a as m,m as o,w as d,q as r,H as n,b as l,a6 as V,P as h}from"./chunks/framework.DQIZlQnU.js";import{S as b}from"./chunks/index.CrDYnhOj.js";const x=`<template>
  <div>
    <VerRadio disabled label="1" v-model="gender">男</VerRadio>
    <VerRadio disabled label="0" v-model="gender">女</VerRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerRadio } from "versakit-ui";

const gender = ref(1);
<\/script>
`,c=v({__name:"disabled",setup(p){const t=f(1);return(a,e)=>(u(),m("div",null,[o(n(s),{disabled:"",label:"1",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value=i)},{default:d(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),o(n(s),{disabled:"",label:"0",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value=i)},{default:d(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),R=`<template>
  <div>
    <VerRadio label="1" v-model="gender">男</VerRadio>
    <VerRadio label="0" v-model="gender">女</VerRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VerRadio } from "versakit-ui";

const gender = ref(1);
<\/script>
`,g=v({__name:"base",setup(p){const t=f(1);return(a,e)=>(u(),m("div",null,[o(n(s),{label:"1",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value=i)},{default:d(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),o(n(s),{label:"0",modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value=i)},{default:d(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),C=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),B={name:"components/radio/index.md"},A=Object.assign(B,{setup(p){return(t,a)=>{const e=h("ClientOnly");return u(),m("div",null,[a[0]||(a[0]=l("h1",{id:"radio-单选框",tabindex:"-1"},[r("Radio 单选框 "),l("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),a[1]||(a[1]=l("p",null,"在一组备选项中进行单选",-1)),a[2]||(a[2]=l("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),l("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),a[3]||(a[3]=l("p",null,"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。",-1)),o(e,null,{default:d(()=>[o(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(R)},{vue:d(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),a[4]||(a[4]=l("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),l("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),a[5]||(a[5]=l("p",null,[l("code",null,"disabled"),r("属性可以用来控制单选框的禁用状态.")],-1)),o(e,null,{default:d(()=>[o(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(x)},{vue:d(()=>[o(c)]),_:1},8,["vueCode"])]),_:1}),a[6]||(a[6]=V('<h2 id="radio-api" tabindex="-1">Radio API <a class="header-anchor" href="#radio-api" aria-label="Permalink to &quot;Radio API&quot;">​</a></h2><h3 id="radio-属性" tabindex="-1">Radio 属性 <a class="header-anchor" href="#radio-属性" aria-label="Permalink to &quot;Radio 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{C as __pageData,A as default};
