"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4152],{8629:function(e,n,o){o.r(n);var t=o(87659),r=(o(53259),o(99138)),i=o(86074);n.default=function(){return(0,i.jsxs)(t._z,{className:"bridge",ghost:!0,children:[(0,i.jsx)(r.Z,{className:"mb-4",message:(0,i.jsx)("a",{target:"_blank",href:"https://bridge.linea.build/",rel:"noreferrer",children:"Mainnet https://bridge.linea.build/"}),type:"info"}),(0,i.jsx)(r.Z,{className:"mb-4",message:(0,i.jsx)("a",{target:"_blank",href:"https://goerli.hop.exchange/#/send?token=ETH&sourceNetwork=ethereum&destNetwork=linea",rel:"noreferrer",children:"Testnet https://goerli.hop.exchange/"}),type:"info"}),(0,i.jsx)(r.Z,{className:"mb-4",message:(0,i.jsx)("a",{target:"_blank",href:"https://dev-cbridge-v2.netlify.app/",rel:"noreferrer",children:"Testnet https://dev-cbridge-v2.netlify.app/"}),type:"info"}),(0,i.jsx)(r.Z,{className:"mb-4",message:(0,i.jsx)("a",{target:"_blank",href:"https://test.multichain.org/#/router",rel:"noreferrer",children:"Testnet https://test.multichain.org/"}),type:"info"}),(0,i.jsx)(r.Z,{message:(0,i.jsx)("a",{target:"_blank",href:"https://testnet.bridge.connext.network/ETH-from-goerli-to-linea",rel:"noreferrer",children:"https://testnet.bridge.connext.network/"}),type:"info"})]})}},53259:function(){},99138:function(e,n,o){o.d(n,{Z:function(){return T}});var t=o(89739),r=o(4340),i=o(97937),a=o(21640),s=o(78860),l=o(94184),c=o.n(l),d=o(82225),p=o(62435),m=o(53124),g=o(5467),u=o(96159),f=o(15671),h=o(43144),b=o(32531),$=o(73568);let v=function(e){(0,b.Z)(o,e);var n=(0,$.Z)(o);function o(){var e;return(0,f.Z)(this,o),(e=n.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,h.Z)(o,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){const{message:e,description:n,children:o}=this.props,{error:t,info:r}=this.state,i=r&&r.componentStack?r.componentStack:null,a=void 0===e?(t||"").toString():e,s=void 0===n?i:n;return t?p.createElement(T,{type:"error",message:a,description:p.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},s)}):o}}]),o}(p.Component);var x=v,y=o(67968),C=o(45503),E=o(14747);const S=(e,n,o,t,r)=>({backgroundColor:e,border:`${t.lineWidth}px ${t.lineType} ${n}`,[`${r}-icon`]:{color:o}}),k=e=>{const{componentCls:n,motionDurationSlow:o,marginXS:t,marginSM:r,fontSize:i,fontSizeLG:a,lineHeight:s,borderRadiusLG:l,motionEaseInOutCirc:c,alertIconSizeLG:d,colorText:p,paddingContentVerticalSM:m,alertPaddingHorizontal:g,paddingMD:u,paddingContentHorizontalLG:f}=e;return{[n]:Object.assign(Object.assign({},(0,E.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${g}px`,wordWrap:"break-word",borderRadius:l,[`&${n}-rtl`]:{direction:"rtl"},[`${n}-content`]:{flex:1,minWidth:0},[`${n}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:s},"&-message":{color:p},[`&${n}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${c}, opacity ${o} ${c},\n        padding-top ${o} ${c}, padding-bottom ${o} ${c},\n        margin-bottom ${o} ${c}`},[`&${n}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${n}-with-description`]:{alignItems:"flex-start",paddingInline:f,paddingBlock:u,[`${n}-icon`]:{marginInlineEnd:r,fontSize:d,lineHeight:0},[`${n}-message`]:{display:"block",marginBottom:t,color:p,fontSize:a},[`${n}-description`]:{display:"block"}},[`${n}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},N=e=>{const{componentCls:n,colorSuccess:o,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:i,colorWarningBorder:a,colorWarningBg:s,colorError:l,colorErrorBorder:c,colorErrorBg:d,colorInfo:p,colorInfoBorder:m,colorInfoBg:g}=e;return{[n]:{"&-success":S(r,t,o,e,n),"&-info":S(g,m,p,e,n),"&-warning":S(s,a,i,e,n),"&-error":Object.assign(Object.assign({},S(d,c,l,e,n)),{[`${n}-description > pre`]:{margin:0,padding:0}})}}},w=e=>{const{componentCls:n,iconCls:o,motionDurationMid:t,marginXS:r,fontSizeIcon:i,colorIcon:a,colorIconHover:s}=e;return{[n]:{"&-action":{marginInlineStart:r},[`${n}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:a,transition:`color ${t}`,"&:hover":{color:s}}},"&-close-text":{color:a,transition:`color ${t}`,"&:hover":{color:s}}}}},I=e=>[k(e),N(e),w(e)];var j=(0,y.Z)("Alert",(e=>{const{fontSizeHeading3:n}=e,o=(0,C.TS)(e,{alertIconSizeLG:n,alertPaddingHorizontal:12});return[I(o)]})),Z=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o};const O={success:t.Z,info:s.Z,error:r.Z,warning:a.Z},z=e=>{const{icon:n,prefixCls:o,type:t}=e,r=O[t]||null;return n?(0,u.wm)(n,p.createElement("span",{className:`${o}-icon`},n),(()=>({className:c()(`${o}-icon`,{[n.props.className]:n.props.className})}))):p.createElement(r,{className:`${o}-icon`})},H=e=>{const{isClosable:n,closeText:o,prefixCls:t,closeIcon:r,handleClose:i}=e;return n?p.createElement("button",{type:"button",onClick:i,className:`${t}-close-icon`,tabIndex:0},o?p.createElement("span",{className:`${t}-close-text`},o):r):null},B=e=>{var{description:n,prefixCls:o,message:t,banner:r,className:a,rootClassName:s,style:l,onMouseEnter:u,onMouseLeave:f,onClick:h,afterClose:b,showIcon:$,closable:v,closeText:x,closeIcon:y=p.createElement(i.Z,null),action:C}=e,E=Z(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[S,k]=p.useState(!1),N=p.useRef(),{getPrefixCls:w,direction:I}=p.useContext(m.E_),O=w("alert",o),[B,T]=j(O),M=e=>{var n;k(!0),null===(n=E.onClose)||void 0===n||n.call(E,e)},L=!!x||v,P=(()=>{const{type:e}=E;return void 0!==e?e:r?"warning":"info"})(),W=!(!r||void 0!==$)||$,_=c()(O,`${O}-${P}`,{[`${O}-with-description`]:!!n,[`${O}-no-icon`]:!W,[`${O}-banner`]:!!r,[`${O}-rtl`]:"rtl"===I},a,s,T),G=(0,g.Z)(E);return B(p.createElement(d.ZP,{visible:!S,motionName:`${O}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:b},(e=>{let{className:o,style:r}=e;return p.createElement("div",Object.assign({ref:N,"data-show":!S,className:c()(_,o),style:Object.assign(Object.assign({},l),r),onMouseEnter:u,onMouseLeave:f,onClick:h,role:"alert"},G),W?p.createElement(z,{description:n,icon:E.icon,prefixCls:O,type:P}):null,p.createElement("div",{className:`${O}-content`},t?p.createElement("div",{className:`${O}-message`},t):null,n?p.createElement("div",{className:`${O}-description`},n):null),C?p.createElement("div",{className:`${O}-action`},C):null,p.createElement(H,{isClosable:!!L,closeText:x,prefixCls:O,closeIcon:y,handleClose:M}))})))};B.ErrorBoundary=x;var T=B}}]);