"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9504],{99915:function(e,n,o){o.r(n);var t=o(87659),r=(o(53259),o(99138)),a=o(86074);n.default=function(){return(0,a.jsxs)(t._z,{className:"bridge",ghost:!0,children:[(0,a.jsx)(r.Z,{className:"mb-4",message:(0,a.jsx)("a",{target:"_blank",href:"https://starkgate.starknet.io/",rel:"noreferrer",children:"Mainnet https://starkgate.starknet.io/"}),type:"info"}),(0,a.jsx)(r.Z,{className:"mb-4",message:(0,a.jsx)("a",{target:"_blank",href:"https://www.orbiter.finance/",rel:"noreferrer",children:"Mainnet https://www.orbiter.finance/"}),type:"info"}),(0,a.jsx)(r.Z,{className:"mb-4",message:(0,a.jsx)("a",{target:"_blank",href:"https://www.layerswap.io/",rel:"noreferrer",children:"Mainnet https://www.layerswap.io/"}),type:"info"}),(0,a.jsx)(r.Z,{message:(0,a.jsx)("a",{target:"_blank",href:"https://goerli.starkgate.starknet.io/",rel:"noreferrer",children:"Testnet https://goerli.starkgate.starknet.io/"}),type:"info"})]})}},53259:function(){},99138:function(e,n,o){o.d(n,{Z:function(){return M}});var t=o(89739),r=o(4340),a=o(97937),i=o(21640),s=o(78860),l=o(94184),c=o.n(l),p=o(82225),d=o(62435),m=o(53124),g=o(5467),f=o(96159),u=o(15671),h=o(43144),b=o(32531),$=o(73568);let v=function(e){(0,b.Z)(o,e);var n=(0,$.Z)(o);function o(){var e;return(0,u.Z)(this,o),(e=n.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,h.Z)(o,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){const{message:e,description:n,children:o}=this.props,{error:t,info:r}=this.state,a=r&&r.componentStack?r.componentStack:null,i=void 0===e?(t||"").toString():e,s=void 0===n?a:n;return t?d.createElement(M,{type:"error",message:i,description:d.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},s)}):o}}]),o}(d.Component);var x=v,y=o(67968),w=o(45503),C=o(14747);const k=(e,n,o,t,r)=>({backgroundColor:e,border:`${t.lineWidth}px ${t.lineType} ${n}`,[`${r}-icon`]:{color:o}}),S=e=>{const{componentCls:n,motionDurationSlow:o,marginXS:t,marginSM:r,fontSize:a,fontSizeLG:i,lineHeight:s,borderRadiusLG:l,motionEaseInOutCirc:c,alertIconSizeLG:p,colorText:d,paddingContentVerticalSM:m,alertPaddingHorizontal:g,paddingMD:f,paddingContentHorizontalLG:u}=e;return{[n]:Object.assign(Object.assign({},(0,C.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${g}px`,wordWrap:"break-word",borderRadius:l,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:a,lineHeight:s},"&-message":{color:d},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${c}, opacity ${o} ${c},\n        padding-top ${o} ${c}, padding-bottom ${o} ${c},\n        margin-bottom ${o} ${c}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",paddingInline:u,paddingBlock:f,[`${n}-icon`]:{marginInlineEnd:r,fontSize:p,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:t,color:d,fontSize:i},[`${n}-description`]:{display:"block"}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},E=e=>{const{componentCls:n,colorSuccess:o,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:a,colorWarningBorder:i,colorWarningBg:s,colorError:l,colorErrorBorder:c,colorErrorBg:p,colorInfo:d,colorInfoBorder:m,colorInfoBg:g}=e;return{[n]:{"&-success":k(r,t,o,e,n),"&-info":k(g,m,d,e,n),"&-warning":k(s,i,a,e,n),"&-error":Object.assign(Object.assign({},k(p,c,l,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},I=e=>{const{componentCls:n,iconCls:o,motionDurationMid:t,marginXS:r,fontSizeIcon:a,colorIcon:i,colorIconHover:s}=e;return{[n]:{"&-action":{marginInlineStart:r},[`${n}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:a,lineHeight:`${a}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:i,transition:`color ${t}`,"&:hover":{color:s}}},"&-close-text":{color:i,transition:`color ${t}`,"&:hover":{color:s}}}}},N=e=>[S(e),E(e),I(e)];var j=(0,y.Z)("Alert",(e=>{const{fontSizeHeading3:n}=e,o=(0,w.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12});return[N(o)]})),O=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o};const Z={success:t.Z,info:s.Z,error:r.Z,warning:i.Z},z=e=>{const{icon:n,prefixCls:o,type:t}=e,r=Z[t]||null;return n?(0,f.wm)(n,d.createElement("span",{className:`${o}-icon`},n),(()=>({className:c()(`${o}-icon`,{[n.props.className]:n.props.className})}))):d.createElement(r,{className:`${o}-icon`})},B=e=>{const{isClosable:n,closeText:o,prefixCls:t,closeIcon:r,handleClose:a}=e;return n?d.createElement("button",{type:"button",onClick:a,className:`${t}-close-icon`,tabIndex:0},o?d.createElement("span",{className:`${t}-close-text`},o):r):null},H=e=>{var{description:n,prefixCls:o,message:t,banner:r,className:i,rootClassName:s,style:l,onMouseEnter:f,onMouseLeave:u,onClick:h,afterClose:b,showIcon:$,closable:v,closeText:x,closeIcon:y=d.createElement(a.Z,null),action:w}=e,C=O(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[k,S]=d.useState(!1),E=d.useRef(),{getPrefixCls:I,direction:N}=d.useContext(m.E_),Z=I("alert",o),[H,M]=j(Z),L=e=>{var n;S(!0),null===(n=C.onClose)||void 0===n||n.call(C,e)},T=!!x||v,P=(()=>{const{type:e}=C;return void 0!==e?e:r?"warning":"info"})(),W=!(!r||void 0!==$)||$,_=c()(Z,`${Z}-${P}`,{[`${Z}-with-description`]:!!n,[`${Z}-no-icon`]:!W,[`${Z}-banner`]:!!r,[`${Z}-rtl`]:"rtl"===N},i,s,M),G=(0,g.Z)(C);return H(d.createElement(p.ZP,{visible:!k,motionName:`${Z}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:b},(e=>{let{className:o,style:r}=e;return d.createElement("div",Object.assign({ref:E,"data-show":!k,className:c()(_,o),style:Object.assign(Object.assign({},l),r),onMouseEnter:f,onMouseLeave:u,onClick:h,role:"alert"},G),W?d.createElement(z,{description:n,icon:C.icon,prefixCls:Z,type:P}):null,d.createElement("div",{className:`${Z}-content`},t?d.createElement("div",{className:`${Z}-message`},t):null,n?d.createElement("div",{className:`${Z}-description`},n):null),w?d.createElement("div",{className:`${Z}-action`},w):null,d.createElement(B,{isClosable:!!T,closeText:x,prefixCls:Z,closeIcon:y,handleClose:L}))})))};H.ErrorBoundary=x;var M=H}}]);