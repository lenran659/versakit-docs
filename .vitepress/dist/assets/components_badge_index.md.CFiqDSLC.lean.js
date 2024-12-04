import{s as n,j as o,H as v}from"./chunks/theme.BrU2QKam.js";import{d as m,o as u,f,w as t,j as a,H as r,m as d,P as c,c as g,a as l,a6 as B}from"./chunks/framework.B4hMHHFJ.js";import{S as b}from"./chunks/index.CqP34_JU.js";const h=`<script setup lang="ts">\r
import { VerButton, VerBadge, VerRow } from 'versakit-ui'\r
<\/script>\r
\r
<template>\r
    <ver-row>\r
        <ver-badge :dot="true">\r
            <ver-button>comments</ver-button>\r
        </ver-badge>\r
        <ver-badge  :dot="true" type="danger">\r
            <ver-button>replies</ver-button>\r
        </ver-badge>\r
    </ver-row>\r
</template>`,x=m({__name:"dot",setup(s){return(i,e)=>(u(),f(r(v),null,{default:t(()=>[a(r(o),{dot:!0},{default:t(()=>[a(r(n),null,{default:t(()=>e[0]||(e[0]=[d("comments")])),_:1})]),_:1}),a(r(o),{dot:!0,type:"danger"},{default:t(()=>[a(r(n),null,{default:t(()=>e[1]||(e[1]=[d("replies")])),_:1})]),_:1})]),_:1}))}}),y=`<script setup lang="ts">\r
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
</template>`,D=m({__name:"max",setup(s){return(i,e)=>(u(),f(r(v),null,{default:t(()=>[a(r(o),{value:100,max:99},{default:t(()=>[a(r(n),null,{default:t(()=>e[0]||(e[0]=[d("comments")])),_:1})]),_:1}),a(r(o),{value:20,max:10,type:"info"},{default:t(()=>[a(r(n),null,{default:t(()=>e[1]||(e[1]=[d("replies")])),_:1})]),_:1})]),_:1}))}}),_=`<script setup lang="ts">\r
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
</template>`,J=m({__name:"base",setup(s){return(i,e)=>(u(),f(r(v),null,{default:t(()=>[a(r(o),{value:1},{default:t(()=>[a(r(n),null,{default:t(()=>e[0]||(e[0]=[d("comments")])),_:1})]),_:1}),a(r(o),{value:10,type:"info"},{default:t(()=>[a(r(n),null,{default:t(()=>e[1]||(e[1]=[d("replies")])),_:1})]),_:1}),a(r(o),{value:10,type:"primary"},{default:t(()=>[a(r(n),null,{default:t(()=>e[2]||(e[2]=[d("comments")])),_:1})]),_:1}),a(r(o),{value:1,type:"warning"},{default:t(()=>[a(r(n),null,{default:t(()=>e[3]||(e[3]=[d("replies")])),_:1})]),_:1}),a(r(o),{value:1,type:"success"},{default:t(()=>[a(r(n),null,{default:t(()=>e[4]||(e[4]=[d("success")])),_:1})]),_:1})]),_:1}))}}),V=JSON.parse('{"title":"Badge 徽章","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),w={name:"components/badge/index.md"},k=Object.assign(w,{setup(s){return(i,e)=>{const p=c("ClientOnly");return u(),g("div",null,[e[0]||(e[0]=l("h1",{id:"badge-徽章",tabindex:"-1"},[d("Badge 徽章 "),l("a",{class:"header-anchor",href:"#badge-徽章","aria-label":'Permalink to "Badge 徽章"'},"​")],-1)),e[1]||(e[1]=l("p",null,"按钮和图标上的数字或状态标记。",-1)),e[2]||(e[2]=l("h2",{id:"基础使用",tabindex:"-1"},[d("基础使用 "),l("a",{class:"header-anchor",href:"#基础使用","aria-label":'Permalink to "基础使用"'},"​")],-1)),e[3]||(e[3]=l("p",null," 可以用来展示新消息的数量。",-1)),a(p,null,{default:t(()=>[a(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(_)},{vue:t(()=>[a(J)]),_:1},8,["vueCode"])]),_:1}),e[4]||(e[4]=l("h2",{id:"最大值",tabindex:"-1"},[d("最大值 "),l("a",{class:"header-anchor",href:"#最大值","aria-label":'Permalink to "最大值"'},"​")],-1)),e[5]||(e[5]=l("p",null,"你还可以自定义最大值",-1)),e[6]||(e[6]=l("p",null,"由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。",-1)),a(p,null,{default:t(()=>[a(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(y)},{vue:t(()=>[a(D)]),_:1},8,["vueCode"])]),_:1}),e[7]||(e[7]=l("h2",{id:"小红点​",tabindex:"-1"},[d("小红点​ "),l("a",{class:"header-anchor",href:"#小红点​","aria-label":'Permalink to "小红点​"'},"​")],-1)),e[8]||(e[8]=l("p",null,"通过一个小红点标记来告知用户有新内容。",-1)),e[9]||(e[9]=l("p",null,"使用 dot 属性。 是个布尔值。",-1)),a(p,null,{default:t(()=>[a(r(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:r(h)},{vue:t(()=>[a(x)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=B('<h2 id="badge-api" tabindex="-1">Badge API <a class="header-anchor" href="#badge-api" aria-label="Permalink to &quot;Badge API&quot;">​</a></h2><h3 id="badge-属性" tabindex="-1">Badge 属性 <a class="header-anchor" href="#badge-属性" aria-label="Permalink to &quot;Badge 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>max</code></td><td>最大值</td><td><code>number</code></td><td><code>99</code></td></tr><tr><td><code>value</code></td><td>值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>dot</code></td><td>判断是否使用小红点</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',3))])}}});export{V as __pageData,k as default};
