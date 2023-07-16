"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8405],{80809:function(e,o,n){n.r(o);var t=n(87659),r=(n(53259),n(99138)),i=n(86074);o.default=function(){return(0,i.jsxs)(t._z,{className:"bridge",ghost:!0,children:[(0,i.jsx)(r.Z,{className:"mb-4",message:(0,i.jsx)("a",{target:"_blank",href:"https://bridge.zksync.io/",rel:"noreferrer",children:"Mainnet https://bridge.zksync.io/"}),type:"info"}),(0,i.jsx)(r.Z,{message:(0,i.jsx)("a",{target:"_blank",href:"https://goerli.bridge.zksync.io/",rel:"noreferrer",children:"Testnet https://goerli.bridge.zksync.io/"}),type:"info"})]})}},53259:function(){},99138:function(e,o,n){n.d(o,{Z:function(){return M}});var t=n(89739),r=n(4340),i=n(97937),a=n(21640),s=n(78860),l=n(94184),c=n.n(l),d=n(82225),p=n(62435),m=n(53124),g=n(5467),u=n(96159),f=n(15671),b=n(43144),$=n(32531),h=n(73568);let v=function(e){(0,$.Z)(n,e);var o=(0,h.Z)(n);function n(){var e;return(0,f.Z)(this,n),(e=o.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,b.Z)(n,[{key:"componentDidCatch",value:function(e,o){this.setState({error:e,info:o})}},{key:"render",value:function(){const{message:e,description:o,children:n}=this.props,{error:t,info:r}=this.state,i=r&&r.componentStack?r.componentStack:null,a=void 0===e?(t||"").toString():e,s=void 0===o?i:o;return t?p.createElement(M,{type:"error",message:a,description:p.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},s)}):n}}]),n}(p.Component);var y=v,C=n(67968),x=n(45503),S=n(14747);const E=(e,o,n,t,r)=>({backgroundColor:e,border:`${t.lineWidth}px ${t.lineType} ${o}`,[`${r}-icon`]:{color:n}}),k=e=>{const{componentCls:o,motionDurationSlow:n,marginXS:t,marginSM:r,fontSize:i,fontSizeLG:a,lineHeight:s,borderRadiusLG:l,motionEaseInOutCirc:c,alertIconSizeLG:d,colorText:p,paddingContentVerticalSM:m,alertPaddingHorizontal:g,paddingMD:u,paddingContentHorizontalLG:f}=e;return{[o]:Object.assign(Object.assign({},(0,S.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${g}px`,wordWrap:"break-word",borderRadius:l,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:s},"&-message":{color:p},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${c}, opacity ${n} ${c},\n        padding-top ${n} ${c}, padding-bottom ${n} ${c},\n        margin-bottom ${n} ${c}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",paddingInline:f,paddingBlock:u,[`${o}-icon`]:{marginInlineEnd:r,fontSize:d,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:t,color:p,fontSize:a},[`${o}-description`]:{display:"block"}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},I=e=>{const{componentCls:o,colorSuccess:n,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:i,colorWarningBorder:a,colorWarningBg:s,colorError:l,colorErrorBorder:c,colorErrorBg:d,colorInfo:p,colorInfoBorder:m,colorInfoBg:g}=e;return{[o]:{"&-success":E(r,t,n,e,o),"&-info":E(g,m,p,e,o),"&-warning":E(s,a,i,e,o),"&-error":Object.assign(Object.assign({},E(d,c,l,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},w=e=>{const{componentCls:o,iconCls:n,motionDurationMid:t,marginXS:r,fontSizeIcon:i,colorIcon:a,colorIconHover:s}=e;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:a,transition:`color ${t}`,"&:hover":{color:s}}},"&-close-text":{color:a,transition:`color ${t}`,"&:hover":{color:s}}}}},N=e=>[k(e),I(e),w(e)];var z=(0,C.Z)("Alert",(e=>{const{fontSizeHeading3:o}=e,n=(0,x.TS)(e,{alertIconSizeLG:o,alertPaddingHorizontal:12});return[N(n)]})),O=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n};const j={success:t.Z,info:s.Z,error:r.Z,warning:a.Z},Z=e=>{const{icon:o,prefixCls:n,type:t}=e,r=j[t]||null;return o?(0,u.wm)(o,p.createElement("span",{className:`${n}-icon`},o),(()=>({className:c()(`${n}-icon`,{[o.props.className]:o.props.className})}))):p.createElement(r,{className:`${n}-icon`})},B=e=>{const{isClosable:o,closeText:n,prefixCls:t,closeIcon:r,handleClose:i}=e;return o?p.createElement("button",{type:"button",onClick:i,className:`${t}-close-icon`,tabIndex:0},n?p.createElement("span",{className:`${t}-close-text`},n):r):null},H=e=>{var{description:o,prefixCls:n,message:t,banner:r,className:a,rootClassName:s,style:l,onMouseEnter:u,onMouseLeave:f,onClick:b,afterClose:$,showIcon:h,closable:v,closeText:y,closeIcon:C=p.createElement(i.Z,null),action:x}=e,S=O(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[E,k]=p.useState(!1),I=p.useRef(),{getPrefixCls:w,direction:N}=p.useContext(m.E_),j=w("alert",n),[H,M]=z(j),L=e=>{var o;k(!0),null===(o=S.onClose)||void 0===o||o.call(S,e)},T=!!y||v,P=(()=>{const{type:e}=S;return void 0!==e?e:r?"warning":"info"})(),W=!(!r||void 0!==h)||h,G=c()(j,`${j}-${P}`,{[`${j}-with-description`]:!!o,[`${j}-no-icon`]:!W,[`${j}-banner`]:!!r,[`${j}-rtl`]:"rtl"===N},a,s,M),D=(0,g.Z)(S);return H(p.createElement(d.ZP,{visible:!E,motionName:`${j}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:$},(e=>{let{className:n,style:r}=e;return p.createElement("div",Object.assign({ref:I,"data-show":!E,className:c()(G,n),style:Object.assign(Object.assign({},l),r),onMouseEnter:u,onMouseLeave:f,onClick:b,role:"alert"},D),W?p.createElement(Z,{description:o,icon:S.icon,prefixCls:j,type:P}):null,p.createElement("div",{className:`${j}-content`},t?p.createElement("div",{className:`${j}-message`},t):null,o?p.createElement("div",{className:`${j}-description`},o):null),x?p.createElement("div",{className:`${j}-action`},x):null,p.createElement(B,{isClosable:!!T,closeText:y,prefixCls:j,closeIcon:C,handleClose:L}))})))};H.ErrorBoundary=y;var M=H}}]);