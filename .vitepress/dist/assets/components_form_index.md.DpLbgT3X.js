import{P as d,W as u,w as c,g as f}from"./chunks/theme.D8eHDFSC.js";import{d as V,s as b,o as i,f as _,w as n,i as t,G as e,p as r,j as v,c as F,a as o}from"./chunks/framework.sNb4YCY2.js";import{S as I}from"./chunks/index.BjlFYz3S.js";const B=`<template>
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
`,D=V({__name:"base",setup(p){const a=b({ID:"",label:""});return(m,l)=>(i(),_(e(f),{model:a},{default:n(()=>[t(e(u),{label:"ID"},{default:n(()=>[t(e(d),{modelValue:a.ID,"onUpdate:modelValue":l[0]||(l[0]=s=>a.ID=s)},null,8,["modelValue"])]),_:1}),t(e(u),{label:"Label"},{default:n(()=>[t(e(d),{modelValue:a.label,"onUpdate:modelValue":l[1]||(l[1]=s=>a.label=s)},null,8,["modelValue"])]),_:1}),t(e(u),null,{default:n(()=>[t(e(c),{type:"primary"},{default:n(()=>l[2]||(l[2]=[r("Submit")])),_:1})]),_:1})]),_:1},8,["model"]))}}),U=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/index.md","filePath":"components/form/index.md"}'),y={name:"components/form/index.md"},k=Object.assign(y,{setup(p){return(a,m)=>{const l=v("ClientOnly");return i(),F("div",null,[m[0]||(m[0]=o("h1",{id:"form-表单",tabindex:"-1"},[r("Form 表单 "),o("a",{class:"header-anchor",href:"#form-表单","aria-label":'Permalink to "Form 表单"'},"​")],-1)),m[1]||(m[1]=o("p",null,[r("表单包含 "),o("code",null,"输入框"),r(", "),o("code",null,"单选框"),r(", "),o("code",null,"下拉选择"),r(", "),o("code",null,"多选框"),r(" 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。")],-1)),t(l,null,{default:n(()=>[t(e(I),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:e(B)},{vue:n(()=>[t(D)]),_:1},8,["vueCode"])]),_:1})])}}});export{U as __pageData,k as default};
