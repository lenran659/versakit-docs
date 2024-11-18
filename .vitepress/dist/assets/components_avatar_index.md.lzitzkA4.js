import{T as l,O as o,j as b}from"./chunks/theme.D8eHDFSC.js";import{d as m,o as i,f as v,w as n,i as a,a as e,G as c,_ as u,j as f,c as _,p as t}from"./chunks/framework.sNb4YCY2.js";import{S as h}from"./chunks/index.BjlFYz3S.js";const g=`<template>
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
`,k={class:"demo-basic"},x={class:"demo-basic--circle"},T={class:"block"},V={class:"block"},B={class:"demo-basic"},C={class:"demo-basic--square"},U={class:"block"},y={class:"block"},A=m({__name:"base",setup(r){return(d,s)=>(i(),v(c(b),null,{default:n(()=>[a(c(o),{span:12},{default:n(()=>[e("div",k,[s[0]||(s[0]=e("div",{class:"sub-title"},"circle",-1)),e("div",x,[e("div",T,[a(c(l),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})]),e("div",V,[a(c(l),{size:24,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"})])])])]),_:1}),a(c(o),{span:12},{default:n(()=>[e("div",B,[s[1]||(s[1]=e("div",{class:"sub-title"},"square",-1)),e("div",C,[e("div",U,[a(c(l),{src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})]),e("div",y,[a(c(l),{size:24,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",shape:"square"})])])])]),_:1})]),_:1}))}}),J=u(A,[["__scopeId","data-v-b1f89c55"]]),w=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),F={name:"components/avatar/index.md"},j=Object.assign(F,{setup(r){return(d,s)=>{const p=f("ClientOnly");return i(),_("div",null,[s[0]||(s[0]=e("h1",{id:"avatar-头像",tabindex:"-1"},[t("Avatar 头像 "),e("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),s[1]||(s[1]=e("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),s[2]||(s[2]=e("h2",{id:"基础用法",tabindex:"-1"},[t("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),s[3]||(s[3]=e("p",null,[t(" 使用 "),e("code",null,"shape"),t(" 和 "),e("code",null,"size"),t(" 属性来设置Avatar的形状和大小。 ")],-1)),a(p,null,{default:n(()=>[a(c(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:c(g)},{vue:n(()=>[a(J)]),_:1},8,["vueCode"])]),_:1})])}}});export{w as __pageData,j as default};
