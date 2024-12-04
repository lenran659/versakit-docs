import{VerSwitch as m}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as u,p as h,o as i,b as p,k as s,B as f,c as b,j as t,a,G as n,w as r,a1 as v}from"./chunks/framework.DzQ2AkZl.js";import{S as w}from"./chunks/index.C50Zsp5l.js";const V=`<template>
  <VerSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from "versakit-ui";
import { ref } from "vue";

const value = ref(false);
<\/script>
`,B=u({__name:"base",setup(d){const o=h(!1);return(e,l)=>(i(),p(s(m),{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=c=>o.value=c)},null,8,["modelValue"]))}}),_=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}'),x={name:"components/switch/index.md"},T=Object.assign(x,{setup(d){return(o,e)=>{const l=f("ClientOnly");return i(),b("div",null,[e[0]||(e[0]=t("h1",{id:"switch-开关",tabindex:"-1"},[a("Switch 开关 "),t("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1)),e[1]||(e[1]=t("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1)),e[2]||(e[2]=t("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[3]||(e[3]=t("p",null,[a("绑定 "),t("code",null,"v-model"),a("到一个"),t("code",null,"Boolean"),a("类型的变量。")],-1)),n(l,null,{default:r(()=>[n(s(w),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:s(V)},{vue:r(()=>[n(B)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=v('<h2 id="switch-api" tabindex="-1">Switch API <a class="header-anchor" href="#switch-api" aria-label="Permalink to &quot;Switch API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定值</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',2))])}}});export{_ as __pageData,T as default};
