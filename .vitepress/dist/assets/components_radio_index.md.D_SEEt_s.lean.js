import{R as s}from"./chunks/theme.BpqLxboM.js";import{d as V,e as f,o as u,c as m,i as o,w as d,p as n,G as r,j as b,a as t}from"./chunks/framework.BDWWp1ud.js";import{S as v}from"./chunks/index.BdbjKrBf.js";const B=`<template>
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
`,C=V({__name:"disabled",setup(p){const a=f(1);return(l,e)=>(u(),m("div",null,[o(r(s),{disabled:"",label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{default:d(()=>e[2]||(e[2]=[n("男")])),_:1},8,["modelValue"]),o(r(s),{disabled:"",label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value=i)},{default:d(()=>e[3]||(e[3]=[n("女")])),_:1},8,["modelValue"])]))}}),U=`<template>
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
`,g=V({__name:"base",setup(p){const a=f(1);return(l,e)=>(u(),m("div",null,[o(r(s),{label:"1",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=i=>a.value=i)},{default:d(()=>e[2]||(e[2]=[n("男")])),_:1},8,["modelValue"]),o(r(s),{label:"0",modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=i=>a.value=i)},{default:d(()=>e[3]||(e[3]=[n("女")])),_:1},8,["modelValue"])]))}}),k=JSON.parse('{"title":"Radio 单选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/radio/index.md","filePath":"components/radio/index.md"}'),R={name:"components/radio/index.md"},J=Object.assign(R,{setup(p){return(a,l)=>{const e=b("ClientOnly");return u(),m("div",null,[l[0]||(l[0]=t("h1",{id:"radio-单选框",tabindex:"-1"},[n("Radio 单选框 "),t("a",{class:"header-anchor",href:"#radio-单选框","aria-label":'Permalink to "Radio 单选框"'},"​")],-1)),l[1]||(l[1]=t("p",null,"在一组备选项中进行单选",-1)),l[2]||(l[2]=t("h2",{id:"基础使用",tabindex:"-1"},[n("基础使用 "),t("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),l[3]||(l[3]=t("p",null,"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。",-1)),o(e,null,{default:d(()=>[o(r(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(U)},{vue:d(()=>[o(g)]),_:1},8,["vueCode"])]),_:1}),l[4]||(l[4]=t("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),l[5]||(l[5]=t("p",null,[t("code",null,"disabled"),n("属性可以用来控制单选框的禁用状态.")],-1)),o(e,null,{default:d(()=>[o(r(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(B)},{vue:d(()=>[o(C)]),_:1},8,["vueCode"])]),_:1})])}}});export{k as __pageData,J as default};
