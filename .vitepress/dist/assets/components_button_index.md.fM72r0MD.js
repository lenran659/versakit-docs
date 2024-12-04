import{s as d,H as l}from"./chunks/theme.BrU2QKam.js";import{d as b,P as g,o as i,f as c,w as r,j as e,H as n,m as o,c as y,F as f,a as s,_ as B,a6 as v}from"./chunks/framework.B4hMHHFJ.js";import{S as m}from"./chunks/index.CqP34_JU.js";const x=`<script setup lang="ts">\r
import { VerButton,VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
      <ver-row>\r
        <VerButton style="margin: 0.5rem;" circle icon="search"></VerButton>\r
        <VerButton style="margin: 0.5rem;" circle type="success" icon="success"></VerButton>\r
\r
        <VerButton style="margin: 0.5rem;" circle type="warning" color="white" icon="edit"></VerButton>\r
\r
        <VerButton style="margin: 0.5rem;" circle type="danger" icon="delete-o"></VerButton>\r
\r
        <VerButton style="margin: 0.5rem;">\r
          <ver-icon name="delete-o" style="margin: 0px 4px"></ver-icon>\r
          编辑\r
        </VerButton>\r
\r
        <VerButton style="margin: 0.5rem;">\r
          文字\r
          <ver-icon name="delete-o" style="margin: 0px 4px"></ver-icon>\r
        </VerButton>\r
      </ver-row>\r
</template>`,w=b({__name:"icon",setup(u){return(p,t)=>{const a=g("ver-icon");return i(),c(n(l),null,{default:r(()=>[e(n(d),{style:{margin:"0.5rem"},circle:"",icon:"search"}),e(n(d),{style:{margin:"0.5rem"},circle:"",type:"success",icon:"success"}),e(n(d),{style:{margin:"0.5rem"},circle:"",type:"warning",color:"white",icon:"edit"}),e(n(d),{style:{margin:"0.5rem"},circle:"",type:"danger",icon:"delete-o"}),e(n(d),{style:{margin:"0.5rem"}},{default:r(()=>[e(a,{name:"delete-o",style:{margin:"0px 4px"}}),t[0]||(t[0]=o(" 编辑 "))]),_:1}),e(n(d),{style:{margin:"0.5rem"}},{default:r(()=>[t[1]||(t[1]=o(" 文字 ")),e(a,{name:"delete-o",style:{margin:"0px 4px"}})]),_:1})]),_:1})}}}),V=`<script setup lang="ts">\r
import { VerButton,VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
      <VerRow>\r
        <VerButton style="margin: 0.5rem;" shade>none</VerButton>\r
        <VerButton style="margin: 0.5rem;" shade type="primary">primary</VerButton>\r
        <VerButton style="margin: 0.5rem;" shade type="success">success</VerButton>\r
        <VerButton style="margin: 0.5rem;" shade type="info">info</VerButton>\r
        <VerButton style="margin: 0.5rem;" shade type="warning">warning</VerButton>\r
        <VerButton style="margin: 0.5rem;" shade type="danger">danger</VerButton>\r
      </VerRow>\r
\r
      <VerRow>\r
        <VerButton style="margin: 0.5rem;" disabled shade>none</VerButton>\r
        <VerButton style="margin: 0.5rem;" disabled shade type="primary">primary</VerButton>\r
        <VerButton style="margin: 0.5rem;" disabled shade type="success">success</VerButton>\r
        <VerButton style="margin: 0.5rem;" disabled shade type="info">info</VerButton>\r
        <VerButton style="margin: 0.5rem;" disabled shade type="warning">warning</VerButton>\r
        <VerButton style="margin: 0.5rem;" disabled shade type="danger">danger</VerButton>\r
      </VerRow>\r
</template>\r
\r
<style>\r
</style>`,J=b({__name:"shadow",setup(u){return(p,t)=>(i(),y(f,null,[e(n(l),null,{default:r(()=>[e(n(d),{style:{margin:"0.5rem"},shade:""},{default:r(()=>t[0]||(t[0]=[o("none")])),_:1}),e(n(d),{style:{margin:"0.5rem"},shade:"",type:"primary"},{default:r(()=>t[1]||(t[1]=[o("primary")])),_:1}),e(n(d),{style:{margin:"0.5rem"},shade:"",type:"success"},{default:r(()=>t[2]||(t[2]=[o("success")])),_:1}),e(n(d),{style:{margin:"0.5rem"},shade:"",type:"info"},{default:r(()=>t[3]||(t[3]=[o("info")])),_:1}),e(n(d),{style:{margin:"0.5rem"},shade:"",type:"warning"},{default:r(()=>t[4]||(t[4]=[o("warning")])),_:1}),e(n(d),{style:{margin:"0.5rem"},shade:"",type:"danger"},{default:r(()=>t[5]||(t[5]=[o("danger")])),_:1})]),_:1}),e(n(l),null,{default:r(()=>[e(n(d),{style:{margin:"0.5rem"},disabled:"",shade:""},{default:r(()=>t[6]||(t[6]=[o("none")])),_:1}),e(n(d),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"primary"},{default:r(()=>t[7]||(t[7]=[o("primary")])),_:1}),e(n(d),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"success"},{default:r(()=>t[8]||(t[8]=[o("success")])),_:1}),e(n(d),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"info"},{default:r(()=>t[9]||(t[9]=[o("info")])),_:1}),e(n(d),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"warning"},{default:r(()=>t[10]||(t[10]=[o("warning")])),_:1}),e(n(d),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"danger"},{default:r(()=>t[11]||(t[11]=[o("danger")])),_:1})]),_:1})],64))}}),D=`<script setup lang="ts">\r
import { VerButton,VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
    <VerRow>\r
        <VerButton text>none</VerButton>\r
        <VerButton text type="primary">primary</VerButton>\r
        <VerButton text type="success">success</VerButton>\r
        <VerButton text type="info">info</VerButton>\r
        <VerButton text type="warning">warning</VerButton>\r
        <VerButton text type="danger">danger</VerButton>\r
    </VerRow>\r
    <VerRow>\r
        <VerButton disabled text>none</VerButton>\r
        <VerButton disabled text type="primary">primary</VerButton>\r
        <VerButton disabled text type="success">success</VerButton>\r
        <VerButton disabled text type="info">info</VerButton>\r
        <VerButton disabled text type="warning">warning</VerButton>\r
        <VerButton disabled text type="danger">danger</VerButton>\r
    </VerRow>\r
</template>\r
`,U=b({__name:"text",setup(u){return(p,t)=>(i(),y(f,null,[e(n(l),null,{default:r(()=>[e(n(d),{text:""},{default:r(()=>t[0]||(t[0]=[o("none")])),_:1}),e(n(d),{text:"",type:"primary"},{default:r(()=>t[1]||(t[1]=[o("primary")])),_:1}),e(n(d),{text:"",type:"success"},{default:r(()=>t[2]||(t[2]=[o("success")])),_:1}),e(n(d),{text:"",type:"info"},{default:r(()=>t[3]||(t[3]=[o("info")])),_:1}),e(n(d),{text:"",type:"warning"},{default:r(()=>t[4]||(t[4]=[o("warning")])),_:1}),e(n(d),{text:"",type:"danger"},{default:r(()=>t[5]||(t[5]=[o("danger")])),_:1})]),_:1}),e(n(l),null,{default:r(()=>[e(n(d),{disabled:"",text:""},{default:r(()=>t[6]||(t[6]=[o("none")])),_:1}),e(n(d),{disabled:"",text:"",type:"primary"},{default:r(()=>t[7]||(t[7]=[o("primary")])),_:1}),e(n(d),{disabled:"",text:"",type:"success"},{default:r(()=>t[8]||(t[8]=[o("success")])),_:1}),e(n(d),{disabled:"",text:"",type:"info"},{default:r(()=>t[9]||(t[9]=[o("info")])),_:1}),e(n(d),{disabled:"",text:"",type:"warning"},{default:r(()=>t[10]||(t[10]=[o("warning")])),_:1}),e(n(d),{disabled:"",text:"",type:"danger"},{default:r(()=>t[11]||(t[11]=[o("danger")])),_:1})]),_:1})],64))}}),A=`<script setup lang="ts">\r
import { VerButton } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
    <span class="mx-2">\r
        <ver-button class="mx-2" type="primary" size="large">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
        <ver-button class="mx-2" type="primary">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
        <ver-button class="mx-2" type="primary" size="small">主要按钮</ver-button>\r
    </span>\r
</template>\r
\r
<style>\r
.mx-2 {\r
    margin: 0 6px;\r
}\r
</style>`,C={class:"mx-2"},T={class:"mx-2"},E={class:"mx-2"},R=b({__name:"size",setup(u){return(p,t)=>(i(),y(f,null,[s("span",C,[e(n(d),{class:"mx-2",type:"primary",size:"large"},{default:r(()=>t[0]||(t[0]=[o("主要按钮")])),_:1})]),s("span",T,[e(n(d),{class:"mx-2",type:"primary"},{default:r(()=>t[1]||(t[1]=[o("主要按钮")])),_:1})]),s("span",E,[e(n(d),{class:"mx-2",type:"primary",size:"small"},{default:r(()=>t[2]||(t[2]=[o("主要按钮")])),_:1})])],64))}}),k=`<script setup lang="ts">
import { VerButton, VerRow } from "versakit-ui";
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button disabled type="primary">按 钮</ver-button>
    <ver-button disabled plain type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="success">按 钮</ver-button>
    <ver-button disabled plain round type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="info">按 钮</ver-button>
    <ver-button disabled plain round type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="warning">按 钮</ver-button>
    <ver-button disabled plain round type="warning">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="danger">按 钮</ver-button>
    <ver-button disabled plain round type="danger">按 钮</ver-button>
  </ver-row>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
`,L=b({__name:"disabled",setup(u){return(p,t)=>(i(),y(f,null,[e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{disabled:"",type:"primary"},{default:r(()=>t[0]||(t[0]=[o("按 钮")])),_:1}),e(n(d),{disabled:"",plain:"",type:"primary"},{default:r(()=>t[1]||(t[1]=[o("按 钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{disabled:"",type:"success"},{default:r(()=>t[2]||(t[2]=[o("按 钮")])),_:1}),e(n(d),{disabled:"",plain:"",round:"",type:"success"},{default:r(()=>t[3]||(t[3]=[o("按 钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{disabled:"",type:"info"},{default:r(()=>t[4]||(t[4]=[o("按 钮")])),_:1}),e(n(d),{disabled:"",plain:"",round:"",type:"info"},{default:r(()=>t[5]||(t[5]=[o("按 钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{disabled:"",type:"warning"},{default:r(()=>t[6]||(t[6]=[o("按 钮")])),_:1}),e(n(d),{disabled:"",plain:"",round:"",type:"warning"},{default:r(()=>t[7]||(t[7]=[o("按 钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{disabled:"",type:"danger"},{default:r(()=>t[8]||(t[8]=[o("按 钮")])),_:1}),e(n(d),{disabled:"",plain:"",round:"",type:"danger"},{default:r(()=>t[9]||(t[9]=[o("按 钮")])),_:1})]),_:1})],64))}}),W=B(L,[["__scopeId","data-v-83115499"]]),_=`<script setup lang="ts">
import { VerButton, VerRow } from "versakit-ui";
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button type="primary">主要按钮</ver-button>
    <ver-button round type="primary">主要按钮</ver-button>
    <ver-button plain type="primary">主要按钮</ver-button>
    <ver-button plain round type="primary">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="success">主要按钮</ver-button>
    <ver-button round type="success">主要按钮</ver-button>
    <ver-button plain type="success">主要按钮</ver-button>
    <ver-button plain round type="success">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="info">主要按钮</ver-button>
    <ver-button round type="info">主要按钮</ver-button>
    <ver-button plain type="info">主要按钮</ver-button>
    <ver-button plain round type="info">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="warning">主要按钮</ver-button>
    <ver-button round type="warning">主要按钮</ver-button>
    <ver-button plain type="warning">主要按钮</ver-button>
    <ver-button plain round type="warning">主要按钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="danger">主要按钮</ver-button>
    <ver-button round type="danger">主要按钮</ver-button>
    <ver-button plain type="danger">主要按钮</ver-button>
    <ver-button plain round type="danger">主要按钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
`,F=b({__name:"base",setup(u){return(p,t)=>(i(),y(f,null,[e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{type:"primary"},{default:r(()=>t[0]||(t[0]=[o("主要按钮")])),_:1}),e(n(d),{round:"",type:"primary"},{default:r(()=>t[1]||(t[1]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",type:"primary"},{default:r(()=>t[2]||(t[2]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",round:"",type:"primary"},{default:r(()=>t[3]||(t[3]=[o("主要按钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{type:"success"},{default:r(()=>t[4]||(t[4]=[o("主要按钮")])),_:1}),e(n(d),{round:"",type:"success"},{default:r(()=>t[5]||(t[5]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",type:"success"},{default:r(()=>t[6]||(t[6]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",round:"",type:"success"},{default:r(()=>t[7]||(t[7]=[o("主要按钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{type:"info"},{default:r(()=>t[8]||(t[8]=[o("主要按钮")])),_:1}),e(n(d),{round:"",type:"info"},{default:r(()=>t[9]||(t[9]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",type:"info"},{default:r(()=>t[10]||(t[10]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",round:"",type:"info"},{default:r(()=>t[11]||(t[11]=[o("主要按钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{type:"warning"},{default:r(()=>t[12]||(t[12]=[o("主要按钮")])),_:1}),e(n(d),{round:"",type:"warning"},{default:r(()=>t[13]||(t[13]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",type:"warning"},{default:r(()=>t[14]||(t[14]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",round:"",type:"warning"},{default:r(()=>t[15]||(t[15]=[o("主要按钮")])),_:1})]),_:1}),e(n(l),{class:"mb-4"},{default:r(()=>[e(n(d),{type:"danger"},{default:r(()=>t[16]||(t[16]=[o("主要按钮")])),_:1}),e(n(d),{round:"",type:"danger"},{default:r(()=>t[17]||(t[17]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",type:"danger"},{default:r(()=>t[18]||(t[18]=[o("主要按钮")])),_:1}),e(n(d),{plain:"",round:"",type:"danger"},{default:r(()=>t[19]||(t[19]=[o("主要按钮")])),_:1})]),_:1})],64))}}),G=B(F,[["__scopeId","data-v-c3a55a32"]]),q=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),N={name:"components/button/index.md"},Y=Object.assign(N,{setup(u){return(p,t)=>{const a=g("ClientOnly");return i(),y("div",null,[t[0]||(t[0]=v('<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p> 使用 <code>type</code>、<code>plain</code>、<code>round</code> 来定义按钮的样式。</p>',4)),e(a,null,{default:r(()=>[e(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(_)},{vue:r(()=>[e(G)]),_:1},8,["vueCode"])]),_:1}),t[1]||(t[1]=s("h2",{id:"禁止状态",tabindex:"-1"},[o("禁止状态 "),s("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),t[2]||(t[2]=s("p",null,"您可以使用 disabled 属性来定义按钮是否被禁用。",-1)),t[3]||(t[3]=s("p",null,"使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。",-1)),e(a,null,{default:r(()=>[e(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(k)},{vue:r(()=>[e(W)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=s("h2",{id:"按钮大小",tabindex:"-1"},[o("按钮大小 "),s("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),t[5]||(t[5]=s("p",null,"您可以使用 size 属性来控制按钮大小",-1)),e(a,null,{default:r(()=>[e(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(A)},{vue:r(()=>[e(R)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=s("h2",{id:"文本按钮",tabindex:"-1"},[o("文本按钮 "),s("a",{class:"header-anchor",href:"#文本按钮","aria-label":'Permalink to "文本按钮"'},"​")],-1)),t[7]||(t[7]=s("p",null,"没有边框和背景色的按钮。",-1)),e(a,null,{default:r(()=>[e(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(D)},{vue:r(()=>[e(U)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=s("h2",{id:"阴影按钮",tabindex:"-1"},[o("阴影按钮 "),s("a",{class:"header-anchor",href:"#阴影按钮","aria-label":'Permalink to "阴影按钮"'},"​")],-1)),e(a,null,{default:r(()=>[e(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(V)},{vue:r(()=>[e(J)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=s("h2",{id:"图标按钮",tabindex:"-1"},[o("图标按钮 "),s("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),e(a,null,{default:r(()=>[e(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(x)},{vue:r(()=>[e(w)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=v('<h2 id="button-api" tabindex="-1">Button API <a class="header-anchor" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h2><h3 id="button-属性" tabindex="-1">Button 属性 <a class="header-anchor" href="#button-属性" aria-label="Permalink to &quot;Button 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>plain</code></td><td>用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>判断按钮是否呈现圆角的外观效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>ghost</code></td><td>是否为ghost</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>是否为文本</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>是否为圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>shade</code></td><td>是否有阴影</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>颜色</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>icon</code></td><td>图标</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>图标</td><td><code>string</code></td><td><code>default</code></td></tr></tbody></table>',3))])}}});export{q as __pageData,Y as default};
