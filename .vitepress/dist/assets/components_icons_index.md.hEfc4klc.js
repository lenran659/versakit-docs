import{S as l,w as y,H as u}from"./chunks/theme.JIE6HSS9.js";import{d as h,o as c,f as b,w as a,a as g,y as k,m as n,b as e,H as o,t as x,F as _,_ as f,P as v,q as s,a6 as J}from"./chunks/framework.DQIZlQnU.js";import{S as m}from"./chunks/index.CrDYnhOj.js";const U=`<script setup lang="ts">\r
import { VerIcon, VerRow, VerCol } from 'versakit-ui'\r
\r
const icons = [\r
  'passed',\r
  'pause-circle',\r
  'pause-circle-o',\r
  'phone-o',\r
  'pending-payment',\r
  'photograph',\r
  'phone-circle',\r
  'photo-fail',\r
  'phone',\r
  'photo',\r
  'plus',\r
  'photo-o',\r
  'play',\r
  'play-circle',\r
  'share',\r
  'point-gift',\r
  'points',\r
  'point-gift-o',\r
  'printer',\r
  'revoke',\r
  'search',\r
  'phone-circle-o',\r
  'send-gift-o',\r
  'scan',\r
  'send-gift',\r
  'qr',\r
  'play-circle-o',\r
  'stop-circle-o',\r
  'service-o',\r
  'qr-invalid',\r
  'question-o',\r
  'records',\r
  'setting',\r
  'setting-o',\r
  'shop-collect-o',\r
  'share-o',\r
  'replay',\r
  'question',\r
  'refund-o',\r
  'shopping-cart',\r
  'shop',\r
  'shopping-cart-o',\r
  'shop-collect',\r
  'sign',\r
  'shop-o',\r
  'smile-o',\r
  'smile-comment-o',\r
  'stop',\r
  'smile',\r
  'stop-circle',\r
  'success',\r
  'smile-comment',\r
  'tosend',\r
  'star-o',\r
  'todo-list',\r
  'sort',\r
  'underway',\r
  'tv-o',\r
  'umbrella-circle',\r
  'video',\r
  'vip-card',\r
  'service',\r
  'volume-o',\r
  'user-o',\r
  'wap-nav',\r
  'wap-home',\r
  'video-o',\r
  'wap-home-o',\r
  'weapp-nav',\r
  'underway-o',\r
  'warning',\r
  'vip-card-o',\r
  'volume',\r
  'user-circle-o',\r
  'warn-o',\r
  'warning-o',\r
  'wechat-pay',\r
  'shrink',\r
  'star',\r
  'youzan-shield',\r
  'thumb-circle',\r
  'todo-list-o',\r
  'thumb-circle-o',\r
  'wechat',\r
  'upgrade',\r
  'shield-o',\r
  'invitation',\r
  'guide-o',\r
  'add-square',\r
  'add',\r
  'add-o',\r
  'arrow-left',\r
  'aim',\r
  'arrow',\r
  'arrow-up',\r
  'arrow-down',\r
  'alipay',\r
  'ascending',\r
  'after-sale',\r
  'bag-o',\r
  'audio',\r
  'back-top',\r
  'award',\r
  'bag',\r
  'award-o',\r
  'balance-list',\r
  'balance-o',\r
  'bell',\r
  'bar-chart-o',\r
  'balance-list-o',\r
  'bars',\r
  'balance-pay',\r
  'birthday-cake-o',\r
  'bill-o',\r
  'bookmark',\r
  'bookmark-o',\r
  'browsing-history-o',\r
  'brush-o',\r
  'bill',\r
  'bullhorn-o',\r
  'bulb-o',\r
  'calendar-o',\r
  'card',\r
  'cart',\r
  'browsing-history',\r
  'cart-o',\r
  'chart-trending-o',\r
  'cash-back-record',\r
  'certificate',\r
  'cashier-o',\r
  'cash-on-deliver',\r
  'cart-circle-o',\r
  'chat',\r
  'clock',\r
  'circle',\r
  'cart-circle',\r
  'apps-o',\r
  'clear',\r
  'close',\r
  'checked',\r
  'comment-o',\r
  'comment-circle-o',\r
  'closed-eye',\r
  'clock-o',\r
  'cluster-o',\r
  'chat-o',\r
  'cluster',\r
  'column',\r
  'comment',\r
  'contact',\r
  'credit-pay',\r
  'coupon-o',\r
  'completed',\r
  'descending',\r
  'comment-circle',\r
  'cross',\r
  'diamond',\r
  'delete',\r
  'diamond-o',\r
  'envelop-o',\r
  'desktop-o',\r
  'ecard-pay',\r
  'edit',\r
  'coupon',\r
  'delete-o',\r
  'down',\r
  'ellipsis',\r
  'enlarge',\r
  'expand',\r
  'description',\r
  'exchange',\r
  'eye-o',\r
  'expand-o',\r
  'eye',\r
  'fail',\r
  'debit-pay',\r
  'discount',\r
  'filter-o',\r
  'failure',\r
  'fire',\r
  'font',\r
  'flag-o',\r
  'font-o',\r
  'fire-o',\r
  'free-postage',\r
  'friends-o',\r
  'gem-o',\r
  'gem',\r
  'friends',\r
  'gift',\r
  'gift-o',\r
  'gift-card-o',\r
  'good-job',\r
  'flower-o',\r
  'gold-coin-o',\r
  'gold-coin',\r
  'good-job-o',\r
  'home-o',\r
  'gift-card',\r
  'graphic',\r
  'hot-o',\r
  'idcard',\r
  'hot-sale-o',\r
  'info',\r
  'hot-sale',\r
  'hotel-o',\r
  'goods-collect-o',\r
  'info-o',\r
  'label-o',\r
  'hot',\r
  'label',\r
  'location-o',\r
  'goods-collect',\r
  'location',\r
  'lock',\r
  'like-o',\r
  'live',\r
  'manager-o',\r
  'like',\r
  'manager',\r
  'map-marked',\r
  'logistics',\r
  'more',\r
  'medal',\r
  'more-o',\r
  'music-o',\r
  'music',\r
  'newspaper-o',\r
  'minus',\r
  'new-o',\r
  'new-arrival',\r
  'notes-o',\r
  'orders-o',\r
  'medal-o',\r
  'new',\r
  'new-arrival-o',\r
  'other-pay',\r
  'pause',\r
  'peer-pay',\r
  'paid',\r
]\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <ver-col :span="4" v-for="(item, index) in icons" :key="index">\r
      <ul>\r
        <li>\r
          <ver-icon :name="item" size="30" />\r
          <span>{{ item }}</span>\r
        </li>\r
      </ul>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<style lang="scss" scoped>\r
.ver-col {\r
  margin: 10px 0px;\r
}\r
\r
ul {\r
  display: flex;\r
  justify-content: space-around;\r
  list-style: none;\r
  flex-wrap: wrap;\r
  margin: 0;\r
  padding: 0;\r
\r
  li {\r
    padding: 1rem;\r
    display: flex;\r
    justify-content: center;\r
    align-items: center;\r
    flex-direction: column;\r
\r
    &:hover {\r
      color: skyblue;\r
    }\r
\r
    span {\r
      margin: 0.25rem 0px;\r
    }\r
  }\r
}\r
</style>\r
`,q=h({__name:"icons",setup(d){const i=["passed","pause-circle","pause-circle-o","phone-o","pending-payment","photograph","phone-circle","photo-fail","phone","photo","plus","photo-o","play","play-circle","share","point-gift","points","point-gift-o","printer","revoke","search","phone-circle-o","send-gift-o","scan","send-gift","qr","play-circle-o","stop-circle-o","service-o","qr-invalid","question-o","records","setting","setting-o","shop-collect-o","share-o","replay","question","refund-o","shopping-cart","shop","shopping-cart-o","shop-collect","sign","shop-o","smile-o","smile-comment-o","stop","smile","stop-circle","success","smile-comment","tosend","star-o","todo-list","sort","underway","tv-o","umbrella-circle","video","vip-card","service","volume-o","user-o","wap-nav","wap-home","video-o","wap-home-o","weapp-nav","underway-o","warning","vip-card-o","volume","user-circle-o","warn-o","warning-o","wechat-pay","shrink","star","youzan-shield","thumb-circle","todo-list-o","thumb-circle-o","wechat","upgrade","shield-o","invitation","guide-o","add-square","add","add-o","arrow-left","aim","arrow","arrow-up","arrow-down","alipay","ascending","after-sale","bag-o","audio","back-top","award","bag","award-o","balance-list","balance-o","bell","bar-chart-o","balance-list-o","bars","balance-pay","birthday-cake-o","bill-o","bookmark","bookmark-o","browsing-history-o","brush-o","bill","bullhorn-o","bulb-o","calendar-o","card","cart","browsing-history","cart-o","chart-trending-o","cash-back-record","certificate","cashier-o","cash-on-deliver","cart-circle-o","chat","clock","circle","cart-circle","apps-o","clear","close","checked","comment-o","comment-circle-o","closed-eye","clock-o","cluster-o","chat-o","cluster","column","comment","contact","credit-pay","coupon-o","completed","descending","comment-circle","cross","diamond","delete","diamond-o","envelop-o","desktop-o","ecard-pay","edit","coupon","delete-o","down","ellipsis","enlarge","expand","description","exchange","eye-o","expand-o","eye","fail","debit-pay","discount","filter-o","failure","fire","font","flag-o","font-o","fire-o","free-postage","friends-o","gem-o","gem","friends","gift","gift-o","gift-card-o","good-job","flower-o","gold-coin-o","gold-coin","good-job-o","home-o","gift-card","graphic","hot-o","idcard","hot-sale-o","info","hot-sale","hotel-o","goods-collect-o","info-o","label-o","hot","label","location-o","goods-collect","location","lock","like-o","live","manager-o","like","manager","map-marked","logistics","more","medal","more-o","music-o","music","newspaper-o","minus","new-o","new-arrival","notes-o","orders-o","medal-o","new","new-arrival-o","other-pay","pause","peer-pay","paid"];return(r,t)=>(c(),b(o(u),null,{default:a(()=>[(c(),g(_,null,k(i,(p,w)=>n(o(y),{span:4,key:w},{default:a(()=>[e("ul",null,[e("li",null,[n(o(l),{name:p,size:"30"},null,8,["name"]),e("span",null,x(p),1)])])]),_:2},1024)),64))]),_:1}))}}),D=f(q,[["__scopeId","data-v-a4e50b7e"]]),E=`<script setup lang="ts">\r
import { VerIcon, VerRow } from "versakit-ui";\r
<\/script>\r
\r
<template>\r
    <ver-row>\r
        <ver-col :span="4">\r
            <ver-icon name="other-pay" size="25" />\r
        </ver-col>\r
        <ver-col :span="4">\r
            <ver-icon name="new" size="25" />\r
        </ver-col>\r
        <ver-col :span="4">\r
            <ver-icon name="paid" size="25" color="red" />\r
        </ver-col>\r
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
.ver-btn+.ver-btn {\r
    margin: 0px 6px;\r
}\r
</style>\r
`,B=h({__name:"base",setup(d){return(i,r)=>{const t=v("ver-col");return c(),b(o(u),null,{default:a(()=>[n(t,{span:4},{default:a(()=>[n(o(l),{name:"other-pay",size:"25"})]),_:1}),n(t,{span:4},{default:a(()=>[n(o(l),{name:"new",size:"25"})]),_:1}),n(t,{span:4},{default:a(()=>[n(o(l),{name:"paid",size:"25",color:"red"})]),_:1})]),_:1})}}}),z=f(B,[["__scopeId","data-v-2dd7ce71"]]),W=JSON.parse('{"title":"Icons 图标","description":"","frontmatter":{},"headers":[],"relativePath":"components/icons/index.md","filePath":"components/icons/index.md"}'),C={name:"components/icons/index.md"},L=Object.assign(C,{setup(d){return(i,r)=>{const t=v("ClientOnly");return c(),g("div",null,[r[0]||(r[0]=e("h1",{id:"icons-图标",tabindex:"-1"},[s("Icons 图标 "),e("a",{class:"header-anchor",href:"#icons-图标","aria-label":'Permalink to "Icons 图标"'},"​")],-1)),r[1]||(r[1]=e("p",null,"Versakit UI 提供了一套常用的图标集合。",-1)),r[2]||(r[2]=e("h2",{id:"基本使用",tabindex:"-1"},[s("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),r[3]||(r[3]=e("p",null,"通过使用ver-icon来调用SVG图标，并且通过size调整图标的尺寸，通过color改变图标的颜色。",-1)),n(t,null,{default:a(()=>[n(o(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(E)},{vue:a(()=>[n(z)]),_:1},8,["vueCode"])]),_:1}),r[4]||(r[4]=e("h2",{id:"图标集合",tabindex:"-1"},[s("图标集合 "),e("a",{class:"header-anchor",href:"#图标集合","aria-label":'Permalink to "图标集合"'},"​")],-1)),n(t,null,{default:a(()=>[n(o(m),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:o(U)},{vue:a(()=>[n(D)]),_:1},8,["vueCode"])]),_:1}),r[5]||(r[5]=J('<h2 id="icons-api" tabindex="-1">Icons API <a class="header-anchor" href="#icons-api" aria-label="Permalink to &quot;Icons API&quot;">​</a></h2><h3 id="icons-属性" tabindex="-1">Icons 属性 <a class="header-anchor" href="#icons-属性" aria-label="Permalink to &quot;Icons 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>图标名</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>图标尺寸</td><td><code>number</code></td><td><code>14</code></td></tr><tr><td><code>color</code></td><td>图标颜色</td><td><code>number</code></td><td><code>#000</code></td></tr></tbody></table>',3))])}}});export{W as __pageData,L as default};
