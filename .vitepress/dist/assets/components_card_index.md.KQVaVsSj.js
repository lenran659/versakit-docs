import{c as s,w as u,H as _,s as C}from"./chunks/theme.JIE6HSS9.js";import{d as m,o,f as w,w as a,m as t,H as n,q as l,a as i,F as f,y as b,b as r,t as x,_ as y,a6 as v,P as J}from"./chunks/framework.DQIZlQnU.js";import{S as h}from"./chunks/index.CrDYnhOj.js";const U=`<template>
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
`,D=m({__name:"shadow",setup(c){return(p,e)=>(o(),w(n(_),null,{default:a(()=>[t(n(u),{span:6,offset:2},{default:a(()=>[t(n(s),{shadow:"always"},{default:a(()=>e[0]||(e[0]=[l(" Always ")])),_:1})]),_:1}),t(n(u),{span:6,offset:2},{default:a(()=>[t(n(s),{shadow:"hover"},{default:a(()=>e[1]||(e[1]=[l(" Hover ")])),_:1})]),_:1}),t(n(u),{span:6,offset:2},{default:a(()=>[t(n(s),{shadow:"never"},{default:a(()=>e[2]||(e[2]=[l(" Never ")])),_:1})]),_:1})]),_:1}))}}),B=`<template>
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
`,A=m({__name:"simple",setup(c){return(p,e)=>(o(),i("div",null,[t(n(s),null,{default:a(()=>[(o(),i(f,null,b(4,d=>r("div",{key:d,class:"text item"},x("List item "+d),1)),64))]),_:1})]))}}),k=y(A,[["__scopeId","data-v-96b061cb"]]),E=`<template>
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
`,L={class:"card-header"},T=m({__name:"base",setup(c){return(p,e)=>(o(),i("div",null,[t(n(s),null,{header:a(()=>[r("div",L,[e[1]||(e[1]=r("span",null,"Card name",-1)),t(n(C),{type:"primary"},{default:a(()=>e[0]||(e[0]=[l("Operation button")])),_:1})])]),default:a(()=>[(o(),i(f,null,b(4,d=>r("div",{key:d,class:"text item"},x("List item "+d),1)),64))]),_:1})]))}}),g=y(T,[["__scopeId","data-v-5e8dcd09"]]),G=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),N={name:"components/card/index.md"},V=Object.assign(N,{setup(c){return(p,e)=>{const d=J("ClientOnly");return o(),i("div",null,[e[0]||(e[0]=v('<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>将信息聚合在卡片容器中展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>卡片包含标题，内容以及操作区域。</p><p>Card 组件 由 <code>header</code> 和 <code>body</code>组成。<code>header</code> 是可选的，其内容取决于一个具名的 <code>solt</code></p>',5)),t(d,null,{default:a(()=>[t(n(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(E)},{vue:a(()=>[t(g)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=r("h2",{id:"简单卡片",tabindex:"-1"},[l("简单卡片 "),r("a",{class:"header-anchor",href:"#简单卡片","aria-label":'Permalink to "简单卡片"'},"​")],-1)),e[2]||(e[2]=r("p",null,"卡片可以只有内容区域。",-1)),t(d,null,{default:a(()=>[t(n(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(B)},{vue:a(()=>[t(k)]),_:1},8,["vueCode"])]),_:1}),e[3]||(e[3]=r("h2",{id:"带有阴影效果的卡片",tabindex:"-1"},[l("带有阴影效果的卡片 "),r("a",{class:"header-anchor",href:"#带有阴影效果的卡片","aria-label":'Permalink to "带有阴影效果的卡片"'},"​")],-1)),e[4]||(e[4]=r("p",null,"你可以定义什么时候展示卡片的阴影效果。",-1)),e[5]||(e[5]=r("p",null,[l("通过 "),r("code",null,"shadow"),l("属性设置卡片阴影出现的时刻。该属性的值可以是: "),r("code",null,"always"),l("、"),r("code",null,"hover"),l(" 或 "),r("code",null,"never")],-1)),t(d,null,{default:a(()=>[t(n(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(U)},{vue:a(()=>[t(D)]),_:1},8,["vueCode"])]),_:1}),e[6]||(e[6]=v('<h2 id="card-api" tabindex="-1">Card API <a class="header-anchor" href="#card-api" aria-label="Permalink to &quot;Card API&quot;">​</a></h2><h3 id="card-属性" tabindex="-1">Card 属性 <a class="header-anchor" href="#card-属性" aria-label="Permalink to &quot;Card 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>shadow</code></td><td>可以使用shadow来决定卡片拥有阴影的时机</td><td><code>enum</code></td><td><code>always</code></td></tr></tbody></table><h3 id="card-插槽" tabindex="-1">Card 插槽 <a class="header-anchor" href="#card-插槽" aria-label="Permalink to &quot;Card 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>header</code></td><td>卡片标题内容</td></tr></tbody></table>',5))])}}});export{G as __pageData,V as default};
