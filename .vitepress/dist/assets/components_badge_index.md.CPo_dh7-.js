import{VerBadge as n,VerAvatar as f,VerCol as g,VerRow as b,VerButton as o}from"./chunks/versakit-ui.Bz8_Ip5I.js";import{d as m,o as s,b as c,w as a,G as r,k as t,a as d,B,c as V,j as l,a1 as y}from"./chunks/framework.DzQ2AkZl.js";import{S as v}from"./chunks/index.C50Zsp5l.js";const x=`<script setup lang="ts">\r
import { VerButton, VerCol, VerBadge, VerRow, VerAvatar } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-col :span="6">\r
      <ver-badge dot type="success"> <VerAvatar src="../../assets/avatar.webp" /> </ver-badge>\r
    </ver-col>\r
\r
    <ver-col :span="6">\r
      <ver-badge dot type="danger">\r
        <VerAvatar src="../../assets/avatar.webp" />\r
      </ver-badge>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
`,h=m({__name:"dot",setup(u){return(i,e)=>(s(),c(t(b),null,{default:a(()=>[r(t(g),{span:6},{default:a(()=>[r(t(n),{dot:"",type:"success"},{default:a(()=>[r(t(f),{src:"../../assets/avatar.webp"})]),_:1})]),_:1}),r(t(g),{span:6},{default:a(()=>[r(t(n),{dot:"",type:"danger"},{default:a(()=>[r(t(f),{src:"../../assets/avatar.webp"})]),_:1})]),_:1})]),_:1}))}}),C=`<script setup lang="ts">\r
import { VerButton, VerBadge, VerRow } from 'versakit-ui'\r
<\/script>\r
\r
<template>\r
    <ver-row>\r
        <ver-badge :value="100" :max="99">\r
            <ver-button>comments</ver-button>\r
        </ver-badge>\r
        <ver-badge :value="20" :max="10" type="info">\r
            <ver-button>replies</ver-button>\r
        </ver-badge>\r
    </ver-row>\r
</template>`,_=m({__name:"max",setup(u){return(i,e)=>(s(),c(t(b),null,{default:a(()=>[r(t(n),{value:100,max:99},{default:a(()=>[r(t(o),null,{default:a(()=>e[0]||(e[0]=[d("comments")])),_:1})]),_:1}),r(t(n),{value:20,max:10,type:"info"},{default:a(()=>[r(t(o),null,{default:a(()=>e[1]||(e[1]=[d("replies")])),_:1})]),_:1})]),_:1}))}}),w=`<script setup lang="ts">\r
import { VerButton, VerBadge, VerRow } from 'versakit-ui'\r
<\/script>\r
\r
<template>\r
    <ver-row>\r
        <ver-badge :value="1">\r
            <ver-button>comments</ver-button>\r
        </ver-badge>\r
        <ver-badge :value="10" type="info">\r
            <ver-button>replies</ver-button>\r
        </ver-badge>\r
        <ver-badge :value="10" type="primary">\r
            <ver-button>comments</ver-button>\r
        </ver-badge>\r
        <ver-badge :value="1" type="warning">\r
            <ver-button>replies</ver-button>\r
        </ver-badge>\r
        <ver-badge :value="1" type="success">\r
            <ver-button>success</ver-button>\r
        </ver-badge>\r
    </ver-row>\r
\r
</template>`,T=m({__name:"base",setup(u){return(i,e)=>(s(),c(t(b),null,{default:a(()=>[r(t(n),{value:1},{default:a(()=>[r(t(o),null,{default:a(()=>e[0]||(e[0]=[d("comments")])),_:1})]),_:1}),r(t(n),{value:10,type:"info"},{default:a(()=>[r(t(o),null,{default:a(()=>e[1]||(e[1]=[d("replies")])),_:1})]),_:1}),r(t(n),{value:10,type:"primary"},{default:a(()=>[r(t(o),null,{default:a(()=>e[2]||(e[2]=[d("comments")])),_:1})]),_:1}),r(t(n),{value:1,type:"warning"},{default:a(()=>[r(t(o),null,{default:a(()=>e[3]||(e[3]=[d("replies")])),_:1})]),_:1}),r(t(n),{value:1,type:"success"},{default:a(()=>[r(t(o),null,{default:a(()=>e[4]||(e[4]=[d("success")])),_:1})]),_:1})]),_:1}))}}),D=JSON.parse('{"title":"Badge 徽章","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),A={name:"components/badge/index.md"},Q=Object.assign(A,{setup(u){return(i,e)=>{const p=B("ClientOnly");return s(),V("div",null,[e[0]||(e[0]=l("h1",{id:"badge-徽章",tabindex:"-1"},[d("Badge 徽章 "),l("a",{class:"header-anchor",href:"#badge-徽章","aria-label":'Permalink to "Badge 徽章"'},"​")],-1)),e[1]||(e[1]=l("p",null,"按钮和图标上的数字或状态标记。",-1)),e[2]||(e[2]=l("h2",{id:"基础使用",tabindex:"-1"},[d("基础使用 "),l("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[3]||(e[3]=l("p",null," 可以用来展示新消息的数量。",-1)),r(p,null,{default:a(()=>[r(t(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(w)},{vue:a(()=>[r(T)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=l("h2",{id:"最大值",tabindex:"-1"},[d("最大值 "),l("a",{class:"header-anchor",href:"#最大值","aria-label":'Permalink to "最大值"'},"​")],-1)),e[5]||(e[5]=l("p",null,"你还可以自定义最大值",-1)),e[6]||(e[6]=l("p",null,"由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。",-1)),r(p,null,{default:a(()=>[r(t(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(C)},{vue:a(()=>[r(_)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=l("h2",{id:"小红点-​",tabindex:"-1"},[d("小红点 ​ "),l("a",{class:"header-anchor",href:"#小红点-​","aria-label":'Permalink to "小红点 ​"'},"​")],-1)),e[8]||(e[8]=l("p",null,"通过一个小红点标记来告知用户有新内容。",-1)),e[9]||(e[9]=l("p",null,"使用 dot 属性。 是个布尔值。",-1)),r(p,null,{default:a(()=>[r(t(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(x)},{vue:a(()=>[r(h)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=y('<h2 id="badge-api" tabindex="-1">Badge API <a class="header-anchor" href="#badge-api" aria-label="Permalink to &quot;Badge API&quot;">​</a></h2><h3 id="badge-属性" tabindex="-1">Badge 属性 <a class="header-anchor" href="#badge-属性" aria-label="Permalink to &quot;Badge 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>max</code></td><td>最大值</td><td><code>number</code></td><td><code>99</code></td></tr><tr><td><code>value</code></td><td>值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>dot</code></td><td>判断是否使用小红点</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',3))])}}});export{D as __pageData,Q as default};
