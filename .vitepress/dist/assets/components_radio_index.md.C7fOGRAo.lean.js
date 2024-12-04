import{VerRadio as s}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as b,p as v,o as u,c as m,G as d,w as o,a as r,k as n,B as f,j as t,a1 as c}from"./chunks/framework.DzQ2AkZl.js";import{S as V}from"./chunks/index.C50Zsp5l.js";const h=`<template>
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
`,B=b({__name:"disabled",setup(p){const l=v(1);return(a,e)=>(u(),m("div",null,[d(n(s),{disabled:"",label:"1",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i)},{default:o(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),d(n(s),{disabled:"",label:"0",modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=i=>l.value=i)},{default:o(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),R=`<template>
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
`,x=b({__name:"base",setup(p){const l=v(1);return(a,e)=>(u(),m("div",null,[d(n(s),{label:"1",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=i=>l.value=i)},{default:o(()=>e[2]||(e[2]=[r("男")])),_:1},8,["modelValue"]),d(n(s),{label:"0",modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=i=>l.value=i)},{default:o(()=>e[3]||(e[3]=[r("女")])),_:1},8,["modelValue"])]))}}),T=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),g={name:"components/radio/index.md"},J=Object.assign(g,{setup(p){return(l,a)=>{const e=f("ClientOnly");return u(),m("div",null,[a[0]||(a[0]=t("h1",{id:"radio-单选框",tabindex:"-1"},[r("Radio 单选框 "),t("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),a[1]||(a[1]=t("p",null,"在一组备选项中进行单选",-1)),a[2]||(a[2]=t("h2",{id:"基础使用",tabindex:"-1"},[r("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),a[3]||(a[3]=t("p",null,"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。",-1)),d(e,null,{default:o(()=>[d(n(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(R)},{vue:o(()=>[d(x)]),_:1},8,["vueCode"])]),_:1}),a[4]||(a[4]=t("h2",{id:"禁用状态",tabindex:"-1"},[r("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),a[5]||(a[5]=t("p",null,[t("code",null,"disabled"),r("属性可以用来控制单选框的禁用状态.")],-1)),d(e,null,{default:o(()=>[d(n(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(h)},{vue:o(()=>[d(B)]),_:1},8,["vueCode"])]),_:1}),a[6]||(a[6]=c('<h2 id="radio-api" tabindex="-1">Radio API <a class="header-anchor" href="#radio-api" aria-label="Permalink to &quot;Radio API&quot;">​</a></h2><h3 id="radio-属性" tabindex="-1">Radio 属性 <a class="header-anchor" href="#radio-属性" aria-label="Permalink to &quot;Radio 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr></tbody></table>',3))])}}});export{T as __pageData,J as default};
