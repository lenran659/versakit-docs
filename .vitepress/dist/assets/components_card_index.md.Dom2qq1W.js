import{F as d,_ as u,i as T,U as V}from"./chunks/theme.HzRXKWqu.js";import{d as v,o,f as _,w as a,Q as t,D as n,l as r,c as i,F as f,p as h,a as l,t as y,_ as C,N as x,a6 as B}from"./chunks/framework.BvQ8UnBS.js";import{S as m}from"./chunks/index.HR8TKol0.js";const U=`<template>
  <ver-row>
    <ver-col :span="6" :offset="2">
      <ver-card shadow="always"> Always </ver-card>
    </ver-col>
    <ver-col :span="6" :offset="2">
      <ver-card shadow="hover"> Hover </ver-card>
    </ver-col>
    <ver-col :span="6" :offset="2">
      <ver-card shadow="never"> Never </ver-card>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerCard, VerCol, VerRow } from "versakit-ui";
<\/script>
`,b=v({__name:"shadow",setup(c){return(p,e)=>(o(),_(n(T),null,{default:a(()=>[t(n(u),{span:6,offset:2},{default:a(()=>[t(n(d),{shadow:"always"},{default:a(()=>e[0]||(e[0]=[r(" Always ")])),_:1})]),_:1}),t(n(u),{span:6,offset:2},{default:a(()=>[t(n(d),{shadow:"hover"},{default:a(()=>e[1]||(e[1]=[r(" Hover ")])),_:1})]),_:1}),t(n(u),{span:6,offset:2},{default:a(()=>[t(n(d),{shadow:"never"},{default:a(()=>e[2]||(e[2]=[r(" Never ")])),_:1})]),_:1})]),_:1}))}}),Q=`<template>
  <div>
    <ver-card>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard } from "versakit-ui";
<\/script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
`,k=v({__name:"simple",setup(c){return(p,e)=>(o(),i("div",null,[t(n(d),null,{default:a(()=>[(o(),i(f,null,h(4,s=>l("div",{key:s,class:"text item"},y("List item "+s),1)),64))]),_:1})]))}}),J=C(k,[["__scopeId","data-v-96b061cb"]]),w=`<template>
  <div>
    <ver-card>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <ver-button type="primary">Operation button</ver-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </ver-card>
  </div>
</template>

<script lang="ts" setup>
import { VerCard, VerButton } from "versakit-ui";
<\/script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
`,g={class:"card-header"},F=v({__name:"base",setup(c){return(p,e)=>(o(),i("div",null,[t(n(d),null,{header:a(()=>[l("div",g,[e[1]||(e[1]=l("span",null,"Card name",-1)),t(n(V),{type:"primary"},{default:a(()=>e[0]||(e[0]=[r("Operation button")])),_:1})])]),default:a(()=>[(o(),i(f,null,h(4,s=>l("div",{key:s,class:"text item"},y("List item "+s),1)),64))]),_:1})]))}}),D=C(F,[["__scopeId","data-v-5e8dcd09"]]),M=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),N={name:"components/card/index.md"},S=Object.assign(N,{setup(c){return(p,e)=>{const s=x("ClientOnly");return o(),i("div",null,[e[0]||(e[0]=B('<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>将信息聚合在卡片容器中展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>卡片包含标题，内容以及操作区域。</p><p>Card 组件 由 <code>header</code> 和 <code>body</code>组成。<code>header</code> 是可选的，其内容取决于一个具名的 <code>solt</code></p>',5)),t(s,null,{default:a(()=>[t(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(w)},{vue:a(()=>[t(D)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=l("h2",{id:"简单卡片",tabindex:"-1"},[r("简单卡片 "),l("a",{class:"header-anchor",href:"#简单卡片","aria-label":'Permalink to "简单卡片"'},"​")],-1)),e[2]||(e[2]=l("p",null,"卡片可以只有内容区域。",-1)),t(s,null,{default:a(()=>[t(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(Q)},{vue:a(()=>[t(J)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=l("h2",{id:"带有阴影效果的卡片",tabindex:"-1"},[r("带有阴影效果的卡片 "),l("a",{class:"header-anchor",href:"#带有阴影效果的卡片","aria-label":'Permalink to "带有阴影效果的卡片"'},"​")],-1)),e[4]||(e[4]=l("p",null,"你可以定义什么时候展示卡片的阴影效果。",-1)),e[5]||(e[5]=l("p",null,[r("通过 "),l("code",null,"shadow"),r("属性设置卡片阴影出现的时刻。该属性的值可以是: "),l("code",null,"always"),r("、"),l("code",null,"hover"),r(" 或 "),l("code",null,"never")],-1)),t(s,null,{default:a(()=>[t(n(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(U)},{vue:a(()=>[t(b)]),_:1},8,["vueCode"])]),_:1})])}}});export{M as __pageData,S as default};
