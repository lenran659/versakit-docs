import{VerButton as o,VerRow as s}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as y,o as a,b as B,w as n,G as e,k as r,c as b,a as d,F as f,j as l,_ as g,B as V,a1 as v}from"./chunks/framework.DzQ2AkZl.js";import{S as m}from"./chunks/index.C50Zsp5l.js";const c=`<script setup lang="ts">\r
import { VerButton, VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <VerButton shade style="margin: 0.5rem" circle icon="search"></VerButton>\r
    <VerButton style="margin: 0.5rem" circle type="success" icon="success"></VerButton>\r
\r
    <VerButton style="margin: 0.5rem" circle type="warning" color="white" icon="edit"></VerButton>\r
\r
    <VerButton style="margin: 0.5rem" circle type="danger" icon="delete-o"></VerButton>\r
  </ver-row>\r
</template>\r
`,x=y({__name:"icon",setup(i){return(u,t)=>(a(),B(r(s),null,{default:n(()=>[e(r(o),{shade:"",style:{margin:"0.5rem"},circle:"",icon:"search"}),e(r(o),{style:{margin:"0.5rem"},circle:"",type:"success",icon:"success"}),e(r(o),{style:{margin:"0.5rem"},circle:"",type:"warning",color:"white",icon:"edit"}),e(r(o),{style:{margin:"0.5rem"},circle:"",type:"danger",icon:"delete-o"})]),_:1}))}}),w=`<script setup lang="ts">\r
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
</style>`,T=y({__name:"shadow",setup(i){return(u,t)=>(a(),b(f,null,[e(r(s),null,{default:n(()=>[e(r(o),{style:{margin:"0.5rem"},shade:""},{default:n(()=>t[0]||(t[0]=[d("none")])),_:1}),e(r(o),{style:{margin:"0.5rem"},shade:"",type:"primary"},{default:n(()=>t[1]||(t[1]=[d("primary")])),_:1}),e(r(o),{style:{margin:"0.5rem"},shade:"",type:"success"},{default:n(()=>t[2]||(t[2]=[d("success")])),_:1}),e(r(o),{style:{margin:"0.5rem"},shade:"",type:"info"},{default:n(()=>t[3]||(t[3]=[d("info")])),_:1}),e(r(o),{style:{margin:"0.5rem"},shade:"",type:"warning"},{default:n(()=>t[4]||(t[4]=[d("warning")])),_:1}),e(r(o),{style:{margin:"0.5rem"},shade:"",type:"danger"},{default:n(()=>t[5]||(t[5]=[d("danger")])),_:1})]),_:1}),e(r(s),null,{default:n(()=>[e(r(o),{style:{margin:"0.5rem"},disabled:"",shade:""},{default:n(()=>t[6]||(t[6]=[d("none")])),_:1}),e(r(o),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"primary"},{default:n(()=>t[7]||(t[7]=[d("primary")])),_:1}),e(r(o),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"success"},{default:n(()=>t[8]||(t[8]=[d("success")])),_:1}),e(r(o),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"info"},{default:n(()=>t[9]||(t[9]=[d("info")])),_:1}),e(r(o),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"warning"},{default:n(()=>t[10]||(t[10]=[d("warning")])),_:1}),e(r(o),{style:{margin:"0.5rem"},disabled:"",shade:"",type:"danger"},{default:n(()=>t[11]||(t[11]=[d("danger")])),_:1})]),_:1})],64))}}),U=`<script setup lang="ts">\r
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
`,C=y({__name:"text",setup(i){return(u,t)=>(a(),b(f,null,[e(r(s),null,{default:n(()=>[e(r(o),{text:""},{default:n(()=>t[0]||(t[0]=[d("none")])),_:1}),e(r(o),{text:"",type:"primary"},{default:n(()=>t[1]||(t[1]=[d("primary")])),_:1}),e(r(o),{text:"",type:"success"},{default:n(()=>t[2]||(t[2]=[d("success")])),_:1}),e(r(o),{text:"",type:"info"},{default:n(()=>t[3]||(t[3]=[d("info")])),_:1}),e(r(o),{text:"",type:"warning"},{default:n(()=>t[4]||(t[4]=[d("warning")])),_:1}),e(r(o),{text:"",type:"danger"},{default:n(()=>t[5]||(t[5]=[d("danger")])),_:1})]),_:1}),e(r(s),null,{default:n(()=>[e(r(o),{disabled:"",text:""},{default:n(()=>t[6]||(t[6]=[d("none")])),_:1}),e(r(o),{disabled:"",text:"",type:"primary"},{default:n(()=>t[7]||(t[7]=[d("primary")])),_:1}),e(r(o),{disabled:"",text:"",type:"success"},{default:n(()=>t[8]||(t[8]=[d("success")])),_:1}),e(r(o),{disabled:"",text:"",type:"info"},{default:n(()=>t[9]||(t[9]=[d("info")])),_:1}),e(r(o),{disabled:"",text:"",type:"warning"},{default:n(()=>t[10]||(t[10]=[d("warning")])),_:1}),e(r(o),{disabled:"",text:"",type:"danger"},{default:n(()=>t[11]||(t[11]=[d("danger")])),_:1})]),_:1})],64))}}),J=`<script setup lang="ts">\r
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
</style>`,k={class:"mx-2"},D={class:"mx-2"},A={class:"mx-2"},Q=y({__name:"size",setup(i){return(u,t)=>(a(),b(f,null,[l("span",k,[e(r(o),{class:"mx-2",type:"primary",size:"large"},{default:n(()=>t[0]||(t[0]=[d("主要按钮")])),_:1})]),l("span",D,[e(r(o),{class:"mx-2",type:"primary"},{default:n(()=>t[1]||(t[1]=[d("主要按钮")])),_:1})]),l("span",A,[e(r(o),{class:"mx-2",type:"primary",size:"small"},{default:n(()=>t[2]||(t[2]=[d("主要按钮")])),_:1})])],64))}}),R=`<script setup lang="ts">\r
import { VerButton, VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="primary">按 钮</ver-button>\r
    <ver-button disabled plain type="primary">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="success">按 钮</ver-button>\r
    <ver-button disabled plain round type="success">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="info">按 钮</ver-button>\r
    <ver-button disabled plain round type="info">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="warning">按 钮</ver-button>\r
    <ver-button disabled plain round type="warning">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="danger">按 钮</ver-button>\r
    <ver-button disabled plain round type="danger">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mb-4 {\r
  display: flex;\r
  align-items: center;\r
  margin-bottom: 1rem;\r
}\r
.ver-btn + .ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,F=y({__name:"disabled",setup(i){return(u,t)=>(a(),b(f,null,[e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{disabled:"",type:"primary"},{default:n(()=>t[0]||(t[0]=[d("按 钮")])),_:1}),e(r(o),{disabled:"",plain:"",type:"primary"},{default:n(()=>t[1]||(t[1]=[d("按 钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{disabled:"",type:"success"},{default:n(()=>t[2]||(t[2]=[d("按 钮")])),_:1}),e(r(o),{disabled:"",plain:"",round:"",type:"success"},{default:n(()=>t[3]||(t[3]=[d("按 钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{disabled:"",type:"info"},{default:n(()=>t[4]||(t[4]=[d("按 钮")])),_:1}),e(r(o),{disabled:"",plain:"",round:"",type:"info"},{default:n(()=>t[5]||(t[5]=[d("按 钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{disabled:"",type:"warning"},{default:n(()=>t[6]||(t[6]=[d("按 钮")])),_:1}),e(r(o),{disabled:"",plain:"",round:"",type:"warning"},{default:n(()=>t[7]||(t[7]=[d("按 钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{disabled:"",type:"danger"},{default:n(()=>t[8]||(t[8]=[d("按 钮")])),_:1}),e(r(o),{disabled:"",plain:"",round:"",type:"danger"},{default:n(()=>t[9]||(t[9]=[d("按 钮")])),_:1})]),_:1})],64))}}),G=g(F,[["__scopeId","data-v-669d3893"]]),N=`<script setup lang="ts">\r
import { VerButton, VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button type="primary">主要按钮</ver-button>\r
    <ver-button round type="primary">主要按钮</ver-button>\r
    <ver-button plain type="primary">主要按钮</ver-button>\r
    <ver-button plain round type="primary">主要按钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="success">主要按钮</ver-button>\r
    <ver-button round type="success">主要按钮</ver-button>\r
    <ver-button plain type="success">主要按钮</ver-button>\r
    <ver-button plain round type="success">主要按钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="info">主要按钮</ver-button>\r
    <ver-button round type="info">主要按钮</ver-button>\r
    <ver-button plain type="info">主要按钮</ver-button>\r
    <ver-button plain round type="info">主要按钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="warning">主要按钮</ver-button>\r
    <ver-button round type="warning">主要按钮</ver-button>\r
    <ver-button plain type="warning">主要按钮</ver-button>\r
    <ver-button plain round type="warning">主要按钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="danger">主要按钮</ver-button>\r
    <ver-button round type="danger">主要按钮</ver-button>\r
    <ver-button plain type="danger">主要按钮</ver-button>\r
    <ver-button plain round type="danger">主要按钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,M=y({__name:"base",setup(i){return(u,t)=>(a(),b(f,null,[e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{type:"primary"},{default:n(()=>t[0]||(t[0]=[d("主要按钮")])),_:1}),e(r(o),{round:"",type:"primary"},{default:n(()=>t[1]||(t[1]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",type:"primary"},{default:n(()=>t[2]||(t[2]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",round:"",type:"primary"},{default:n(()=>t[3]||(t[3]=[d("主要按钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{type:"success"},{default:n(()=>t[4]||(t[4]=[d("主要按钮")])),_:1}),e(r(o),{round:"",type:"success"},{default:n(()=>t[5]||(t[5]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",type:"success"},{default:n(()=>t[6]||(t[6]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",round:"",type:"success"},{default:n(()=>t[7]||(t[7]=[d("主要按钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{type:"info"},{default:n(()=>t[8]||(t[8]=[d("主要按钮")])),_:1}),e(r(o),{round:"",type:"info"},{default:n(()=>t[9]||(t[9]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",type:"info"},{default:n(()=>t[10]||(t[10]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",round:"",type:"info"},{default:n(()=>t[11]||(t[11]=[d("主要按钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{type:"warning"},{default:n(()=>t[12]||(t[12]=[d("主要按钮")])),_:1}),e(r(o),{round:"",type:"warning"},{default:n(()=>t[13]||(t[13]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",type:"warning"},{default:n(()=>t[14]||(t[14]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",round:"",type:"warning"},{default:n(()=>t[15]||(t[15]=[d("主要按钮")])),_:1})]),_:1}),e(r(s),{class:"mb-4"},{default:n(()=>[e(r(o),{type:"danger"},{default:n(()=>t[16]||(t[16]=[d("主要按钮")])),_:1}),e(r(o),{round:"",type:"danger"},{default:n(()=>t[17]||(t[17]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",type:"danger"},{default:n(()=>t[18]||(t[18]=[d("主要按钮")])),_:1}),e(r(o),{plain:"",round:"",type:"danger"},{default:n(()=>t[19]||(t[19]=[d("主要按钮")])),_:1})]),_:1})],64))}}),_=g(M,[["__scopeId","data-v-c1fe058e"]]),E=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),S={name:"components/button/index.md"},X=Object.assign(S,{setup(i){return(u,t)=>{const p=V("ClientOnly");return a(),b("div",null,[t[0]||(t[0]=v('<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p> 使用 <code>type</code>、<code>plain</code>、<code>round</code> 来定义按钮的样式。</p>',4)),e(p,null,{default:n(()=>[e(r(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(N)},{vue:n(()=>[e(_)]),_:1},8,["vueCode"])]),_:1}),t[1]||(t[1]=l("h2",{id:"禁止状态",tabindex:"-1"},[d("禁止状态 "),l("a",{class:"header-anchor",href:"#禁止状态","aria-label":'Permalink to "禁止状态"'},"​")],-1)),t[2]||(t[2]=l("p",null,"您可以使用 disabled 属性来定义按钮是否被禁用。",-1)),t[3]||(t[3]=l("p",null,"使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。",-1)),e(p,null,{default:n(()=>[e(r(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(R)},{vue:n(()=>[e(G)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=l("h2",{id:"按钮大小",tabindex:"-1"},[d("按钮大小 "),l("a",{class:"header-anchor",href:"#按钮大小","aria-label":'Permalink to "按钮大小"'},"​")],-1)),t[5]||(t[5]=l("p",null,"您可以使用 size 属性来控制按钮大小",-1)),e(p,null,{default:n(()=>[e(r(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(J)},{vue:n(()=>[e(Q)]),_:1},8,["vueCode"])]),_:1}),t[6]||(t[6]=l("h2",{id:"文本按钮",tabindex:"-1"},[d("文本按钮 "),l("a",{class:"header-anchor",href:"#文本按钮","aria-label":'Permalink to "文本按钮"'},"​")],-1)),t[7]||(t[7]=l("p",null,"没有边框和背景色的按钮。",-1)),e(p,null,{default:n(()=>[e(r(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(U)},{vue:n(()=>[e(C)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=l("h2",{id:"阴影按钮",tabindex:"-1"},[d("阴影按钮 "),l("a",{class:"header-anchor",href:"#阴影按钮","aria-label":'Permalink to "阴影按钮"'},"​")],-1)),e(p,null,{default:n(()=>[e(r(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(w)},{vue:n(()=>[e(T)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=l("h2",{id:"图标按钮",tabindex:"-1"},[d("图标按钮 "),l("a",{class:"header-anchor",href:"#图标按钮","aria-label":'Permalink to "图标按钮"'},"​")],-1)),e(p,null,{default:n(()=>[e(r(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(c)},{vue:n(()=>[e(x)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=v('<h2 id="button-api" tabindex="-1">Button API <a class="header-anchor" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h2><h3 id="button-属性" tabindex="-1">Button 属性 <a class="header-anchor" href="#button-属性" aria-label="Permalink to &quot;Button 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>plain</code></td><td>用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>判断按钮是否呈现圆角的外观效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>ghost</code></td><td>是否为ghost</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>是否为文本</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>是否为圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>shade</code></td><td>是否有阴影</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>颜色</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>icon</code></td><td>图标</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>图标</td><td><code>string</code></td><td><code>default</code></td></tr></tbody></table>',3))])}}});export{E as __pageData,X as default};
