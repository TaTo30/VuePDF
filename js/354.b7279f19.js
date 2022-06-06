(self["webpackChunkgh_vuepdf"]=self["webpackChunkgh_vuepdf"]||[]).push([[354],{3388:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>W});var a=n(3673),r=n(2323);const s={class:"row justify-center"},l={class:"row items-center"},c={class:"text-center"},p=(0,a._)("div",{class:"row justify-center"},[(0,a._)("div",{class:"text-weight-bolder",style:{"font-size":"xx-large"}}," Prev-Next ")],-1),u=(0,a._)("div",{class:"row justify-center q-mb-md"},[(0,a._)("div",null,"Simple previus and next page example")],-1),o={class:"row justify-center"};function d(e,t,n,d,i,m){const g=(0,a.up)("q-tab"),b=(0,a.up)("q-tabs"),f=(0,a.up)("q-btn"),P=(0,a.up)("VuePDF"),v=(0,a.up)("q-tab-panel"),w=(0,a.up)("CodeEditor"),x=(0,a.up)("q-tab-panels");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(b,{modelValue:d.tab,"onUpdate:modelValue":t[0]||(t[0]=e=>d.tab=e),align:"left",dense:"","active-color":"green-6",style:{"border-bottom":"1px solid rgba(0, 0, 0, 0.12)"}},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{name:"preview","no-caps":"",label:"Preview"}),(0,a.Wm)(g,{name:"code","no-caps":"",label:"Code"})])),_:1},8,["modelValue"]),(0,a.Wm)(x,{modelValue:d.tab,"onUpdate:modelValue":t[3]||(t[3]=e=>d.tab=e),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{name:"preview"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(f,{color:"primary",class:"q-mx-sm",outline:"",dense:"",label:"Prev",onClick:t[1]||(t[1]=e=>d.currentPage=d.currentPage>1?d.currentPage-1:1)}),(0,a._)("div",l,(0,r.zw)(d.currentPage)+" / "+(0,r.zw)(d.pages),1),(0,a.Wm)(f,{color:"primary",class:"q-mx-sm",outline:"",dense:"",label:"Next",onClick:t[2]||(t[2]=e=>d.currentPage=d.currentPage<d.pages?d.currentPage+1:d.pages)})]),(0,a._)("div",c,[(0,a.Wm)(P,{pdf:d.pdf,page:d.currentPage},null,8,["pdf","page"])])])),_:1}),(0,a.Wm)(v,{name:"code"},{default:(0,a.w5)((()=>[p,u,(0,a._)("div",o,[(0,a.Wm)(w,{width:"60%",font_size:"14px",value:d.codeSample,read_only:!0},null,8,["value"])])])),_:1})])),_:1},8,["modelValue"])],64)}var i=n(3474),m=n(1959),g=n(4678);const b='\n<template>\n  <div class="text-center">\n    <button class="primary" @click="currentPage = currentPage > 1 ? currentPage - 1 : 1">Prev</button>\n      <div>{{ currentPage }} / {{ pages }}</div>\n    <button class="primary" @click="currentPage = currentPage < pages ? currentPage + 1 : pages">Next</button>\n  </div>\n  <div class="text-center">\n    <VuePDF :pdf="pdf" :page="currentPage" />\n  </div>\n</template>\n\n<script>\nimport { PDFProxy, VuePDF } from "@tato30/vue-pdf";\n\nexport default {\n  components: {\n    VuePDF,\n  },\n  setup() {\n    const currentPage = ref(1);\n    const { pdf, pages } = PDFProxy("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");\n    return {\n      pdf,\n      pages,\n      currentPage\n    };\n  },\n};\n<\/script>\n',f={components:{VuePDF:g.m6,CodeEditor:i.Z},setup(){const e=(0,m.iH)(b),t=(0,m.iH)(1),{pdf:n,pages:a}=(0,g.Mn)("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");return{pdf:n,pages:a,currentPage:t,codeSample:e,tab:(0,m.iH)("preview")}}};var P=n(4260),v=n(5602),w=n(3269),x=n(5906),_=n(6602),y=n(4607),h=n(7518),V=n.n(h);const k=(0,P.Z)(f,[["render",d]]),W=k;V()(f,"components",{QTabs:v.Z,QTab:w.Z,QTabPanels:x.Z,QTabPanel:_.Z,QBtn:y.Z})},4663:()=>{},172:()=>{},2001:()=>{},3779:()=>{},6558:()=>{},2258:()=>{}}]);