import{U as d,w as o,H as p}from"./chunks/theme.JIE6HSS9.js";import{d as v,o as r,f as m,w as n,m as s,b as e,H as t,_ as u,a as h,q as c,a6 as f,P as _}from"./chunks/framework.DQIZlQnU.js";import{S as g}from"./chunks/index.CrDYnhOj.js";const x=`<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          </div>
          <div class="block">
            <ver-avatar :size="24" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" shape="square" />
          </div>
          <div class="block">
            <ver-avatar :size="24" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" shape="square" />
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerAvatar, VerRow, VerCol } from "versakit-ui";
<\/script>

<style scoped>
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
`,k={class:"demo-basic"},A={class:"demo-basic--circle"},q={class:"block"},U={class:"block"},J={class:"demo-basic"},w={class:"demo-basic--square"},y={class:"block"},B={class:"block"},C=v({__name:"base",setup(i){return(l,a)=>(r(),m(t(p),null,{default:n(()=>[s(t(o),{span:12},{default:n(()=>[e("div",k,[a[0]||(a[0]=e("div",{class:"sub-title"},"circle",-1)),e("div",A,[e("div",q,[s(t(d),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",U,[s(t(d),{size:24,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})])])])]),_:1}),s(t(o),{span:12},{default:n(()=>[e("div",J,[a[1]||(a[1]=e("div",{class:"sub-title"},"square",-1)),e("div",w,[e("div",y,[s(t(d),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})]),e("div",B,[s(t(d),{size:24,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})])])])]),_:1})]),_:1}))}}),D=u(C,[["__scopeId","data-v-b1f89c55"]]),V=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),z={name:"components/avatar/index.md"},E=Object.assign(z,{setup(i){return(l,a)=>{const b=_("ClientOnly");return r(),h("div",null,[a[0]||(a[0]=e("h1",{id:"avatar-头像",tabindex:"-1"},[c("Avatar 头像 "),e("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),a[1]||(a[1]=e("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),a[2]||(a[2]=e("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a[3]||(a[3]=e("p",null,[c(" 使用 "),e("code",null,"shape"),c(" 和 "),e("code",null,"size"),c(" 属性来设置Avatar的形状和大小。 ")],-1)),s(b,null,{default:n(()=>[s(t(g),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:t(x)},{vue:n(()=>[s(D)]),_:1},8,["vueCode"])]),_:1}),a[4]||(a[4]=f('<h2 id="avatar-api" tabindex="-1">Avatar API <a class="header-anchor" href="#avatar-api" aria-label="Permalink to &quot;Avatar API&quot;">​</a></h2><h3 id="avatar-属性" tabindex="-1">Avatar 属性 <a class="header-anchor" href="#avatar-属性" aria-label="Permalink to &quot;Avatar 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td>图片资源的路径</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>尺寸大小</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td><code>shape</code></td><td>头像的形状，例如<code>square</code>、<code>circle</code></td><td><code>string</code></td><td><code>circle</code></td></tr></tbody></table><p>src: &#39;&#39;, size: 50, shape: &#39;circle&#39;,</p>',4))])}}});export{V as __pageData,E as default};
