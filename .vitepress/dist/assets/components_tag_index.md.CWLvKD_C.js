import{g as d}from"./chunks/theme.BrU2QKam.js";import{d as u,o as g,c as l,a as o,j as a,w as t,m as r,H as n,F as m,_ as f,P as y,a6 as s}from"./chunks/framework.B4hMHHFJ.js";import{S as V}from"./chunks/index.CqP34_JU.js";const c=`<template>
  <div class="my">
    <VerTag>Tag 1</VerTag>
    <VerTag type="success">Tag 2</VerTag>
    <VerTag type="info">Tag 3</VerTag>
    <VerTag type="warning">Tag 4</VerTag>
    <VerTag type="danger">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag plain>Tag 1</VerTag>
    <VerTag plain type="success">Tag 2</VerTag>
    <VerTag plain type="info">Tag 3</VerTag>
    <VerTag plain type="warning">Tag 4</VerTag>
    <VerTag plain type="danger">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag round>Tag 1</VerTag>
    <VerTag round type="success">Tag 2</VerTag>
    <VerTag round type="info">Tag 3</VerTag>
    <VerTag round type="warning">Tag 4</VerTag>
    <VerTag round type="danger">Tag 5</VerTag>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from "versakit-ui";
<\/script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
`,b={class:"my"},v={class:"my"},x={class:"my"},h=u({__name:"base",setup(i){return(p,e)=>(g(),l(m,null,[o("div",b,[a(n(d),null,{default:t(()=>e[0]||(e[0]=[r("Tag 1")])),_:1}),a(n(d),{type:"success"},{default:t(()=>e[1]||(e[1]=[r("Tag 2")])),_:1}),a(n(d),{type:"info"},{default:t(()=>e[2]||(e[2]=[r("Tag 3")])),_:1}),a(n(d),{type:"warning"},{default:t(()=>e[3]||(e[3]=[r("Tag 4")])),_:1}),a(n(d),{type:"danger"},{default:t(()=>e[4]||(e[4]=[r("Tag 5")])),_:1})]),o("div",v,[a(n(d),{plain:""},{default:t(()=>e[5]||(e[5]=[r("Tag 1")])),_:1}),a(n(d),{plain:"",type:"success"},{default:t(()=>e[6]||(e[6]=[r("Tag 2")])),_:1}),a(n(d),{plain:"",type:"info"},{default:t(()=>e[7]||(e[7]=[r("Tag 3")])),_:1}),a(n(d),{plain:"",type:"warning"},{default:t(()=>e[8]||(e[8]=[r("Tag 4")])),_:1}),a(n(d),{plain:"",type:"danger"},{default:t(()=>e[9]||(e[9]=[r("Tag 5")])),_:1})]),o("div",x,[a(n(d),{round:""},{default:t(()=>e[10]||(e[10]=[r("Tag 1")])),_:1}),a(n(d),{round:"",type:"success"},{default:t(()=>e[11]||(e[11]=[r("Tag 2")])),_:1}),a(n(d),{round:"",type:"info"},{default:t(()=>e[12]||(e[12]=[r("Tag 3")])),_:1}),a(n(d),{round:"",type:"warning"},{default:t(()=>e[13]||(e[13]=[r("Tag 4")])),_:1}),a(n(d),{round:"",type:"danger"},{default:t(()=>e[14]||(e[14]=[r("Tag 5")])),_:1})])],64))}}),_=f(h,[["__scopeId","data-v-0938f452"]]),C=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}'),J={name:"components/tag/index.md"},D=Object.assign(J,{setup(i){return(p,e)=>{const T=y("ClientOnly");return g(),l("div",null,[e[0]||(e[0]=s('<h1 id="tag-标签" tabindex="-1">Tag 标签 <a class="header-anchor" href="#tag-标签" aria-label="Permalink to &quot;Tag 标签&quot;">​</a></h1><p>用于标记和选择。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由<code>type</code>属性来选择 tag 类型。也能通过<code>plain</code>让 tag 的背景变得半透明，可以通过<code>color</code>属性自定义颜色。</p>',4)),a(T,null,{default:t(()=>[a(n(V),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:n(c)},{vue:t(()=>[a(_)]),_:1},8,["vueCode"])]),_:1}),e[1]||(e[1]=s('<h2 id="tag-api" tabindex="-1">Tag API <a class="header-anchor" href="#tag-api" aria-label="Permalink to &quot;Tag API&quot;">​</a></h2><h3 id="tag-属性" tabindex="-1">Tag 属性 <a class="header-anchor" href="#tag-属性" aria-label="Permalink to &quot;Tag 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>Tag 的类型，可以选择以下类型：primary、success、info、warning、danger</td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td><code>plain</code></td><td>背景是否半透明</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>Tag 是否为圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',3))])}}});export{C as __pageData,D as default};
