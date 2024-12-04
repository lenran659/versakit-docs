import{VerInput as u,VerFormItem as s,VerButton as p,VerForm as f}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as V,a2 as b,o as i,b as h,w as n,G as t,k as e,a,B as F,c as I,j as l,a1 as B}from"./chunks/framework.DzQ2AkZl.js";import{S as v}from"./chunks/index.C50Zsp5l.js";const _=`<template>
  <VerForm :model="form">
    <VerFormItem label="ID">
      <VerInput v-model="form.ID" />
    </VerFormItem>
    <VerFormItem label="Label">
      <VerInput v-model="form.label" />
    </VerFormItem>
    <VerFormItem>
      <VerButton type="primary">Submit</VerButton>
    </VerFormItem>
  </VerForm>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { VerForm, VerFormItem, VerInput, VerButton } from "versakit-ui";

const form = reactive({
  ID: "",
  label: "",
});
<\/script>

<style scoped></style>
`,x=V({__name:"base",setup(c){const d=b({ID:"",label:""});return(r,o)=>(i(),h(e(f),{model:d},{default:n(()=>[t(e(s),{label:"ID"},{default:n(()=>[t(e(u),{modelValue:d.ID,"onUpdate:modelValue":o[0]||(o[0]=m=>d.ID=m)},null,8,["modelValue"])]),_:1}),t(e(s),{label:"Label"},{default:n(()=>[t(e(u),{modelValue:d.label,"onUpdate:modelValue":o[1]||(o[1]=m=>d.label=m)},null,8,["modelValue"])]),_:1}),t(e(s),null,{default:n(()=>[t(e(p),{type:"primary"},{default:n(()=>o[2]||(o[2]=[a("Submit")])),_:1})]),_:1})]),_:1},8,["model"]))}}),T=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/index.md","filePath":"components/form/index.md"}'),y={name:"components/form/index.md"},U=Object.assign(y,{setup(c){return(d,r)=>{const o=F("ClientOnly");return i(),I("div",null,[r[0]||(r[0]=l("h1",{id:"form-表单",tabindex:"-1"},[a("Form 表单 "),l("a",{class:"header-anchor",href:"#form-表单","aria-label":'Permalink to "Form 表单"'},"​")],-1)),r[1]||(r[1]=l("p",null,[a("表单包含 "),l("code",null,"输入框"),a(", "),l("code",null,"单选框"),a(", "),l("code",null,"下拉选择"),a(", "),l("code",null,"多选框"),a(" 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。")],-1)),t(o,null,{default:n(()=>[t(e(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:e(_)},{vue:n(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),r[2]||(r[2]=B('<h2 id="form-api" tabindex="-1">Form API <a class="header-anchor" href="#form-api" aria-label="Permalink to &quot;Form API&quot;">​</a></h2><h3 id="form-属性" tabindex="-1">Form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;Form 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>module</code></td><td>表单数据</td><td><code>object</code></td><td><code>空</code></td></tr><tr><td><code>labelWidth</code></td><td>标签宽度</td><td><code>string</code></td><td><code>80px</code></td></tr></tbody></table>',3))])}}});export{T as __pageData,U as default};
