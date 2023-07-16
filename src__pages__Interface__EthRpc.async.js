(self.webpackChunk=self.webpackChunk||[]).push([[9437,5e3],{50841:function(e,o,n){"use strict";n.r(o);var t=n(87659),r=n(38345),i=n(54442),s=n(99138),a=n(63242),c=(n(15807),n(86074)),l=new URL(n(57298),n.b).toString();o.default=function(){var e=(0,i.useSelector)((function(e){return e.chainList.chainSelect}));return(0,c.jsxs)(t._z,{ghost:!0,children:[(0,c.jsx)(s.Z,{className:"mb-[16px]",message:(0,c.jsx)("a",{target:"_blank",href:"https://ethereum.org/en/developers/docs/apis/json-rpc/",rel:"noreferrer",children:"https://ethereum.org/en/developers/docs/apis/json-rpc/"}),type:"info"}),(0,c.jsx)(r.Z,{children:(0,c.jsx)(a.Z,{tryItOutEnabled:!0,url:l,requestSnippetsEnabled:!0,requestInterceptor:function(o){return o.hasOwnProperty("loadSpec")&&o.loadSpec||(o.url=e.rpcUrls[0]),o}})})]})}},99138:function(e,o,n){"use strict";n.d(o,{Z:function(){return L}});var t=n(89739),r=n(4340),i=n(97937),s=n(21640),a=n(78860),c=n(94184),l=n.n(c),p=n(82225),d=n(62435),m=n(53124),u=n(5467),g=n(96159),f=n(15671),h=n(43144),$=n(32531),b=n(73568);let v=function(e){(0,$.Z)(n,e);var o=(0,b.Z)(n);function n(){var e;return(0,f.Z)(this,n),(e=o.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,h.Z)(n,[{key:"componentDidCatch",value:function(e,o){this.setState({error:e,info:o})}},{key:"render",value:function(){const{message:e,description:o,children:n}=this.props,{error:t,info:r}=this.state,i=r&&r.componentStack?r.componentStack:null,s=void 0===e?(t||"").toString():e,a=void 0===o?i:o;return t?d.createElement(L,{type:"error",message:s,description:d.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},a)}):n}}]),n}(d.Component);var S=v,x=n(67968),y=n(45503),C=n(14747);const E=(e,o,n,t,r)=>({backgroundColor:e,border:`${t.lineWidth}px ${t.lineType} ${o}`,[`${r}-icon`]:{color:n}}),I=e=>{const{componentCls:o,motionDurationSlow:n,marginXS:t,marginSM:r,fontSize:i,fontSizeLG:s,lineHeight:a,borderRadiusLG:c,motionEaseInOutCirc:l,alertIconSizeLG:p,colorText:d,paddingContentVerticalSM:m,alertPaddingHorizontal:u,paddingMD:g,paddingContentHorizontalLG:f}=e;return{[o]:Object.assign(Object.assign({},(0,C.Wf)(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${m}px ${u}px`,wordWrap:"break-word",borderRadius:c,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:t,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:a},"&-message":{color:d},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${l}, opacity ${n} ${l},\n        padding-top ${n} ${l}, padding-bottom ${n} ${l},\n        margin-bottom ${n} ${l}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",paddingInline:f,paddingBlock:g,[`${o}-icon`]:{marginInlineEnd:r,fontSize:p,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:t,color:d,fontSize:s},[`${o}-description`]:{display:"block"}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},w=e=>{const{componentCls:o,colorSuccess:n,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:i,colorWarningBorder:s,colorWarningBg:a,colorError:c,colorErrorBorder:l,colorErrorBg:p,colorInfo:d,colorInfoBorder:m,colorInfoBg:u}=e;return{[o]:{"&-success":E(r,t,n,e,o),"&-info":E(u,m,d,e,o),"&-warning":E(a,s,i,e,o),"&-error":Object.assign(Object.assign({},E(p,l,c,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},k=e=>{const{componentCls:o,iconCls:n,motionDurationMid:t,marginXS:r,fontSizeIcon:i,colorIcon:s,colorIconHover:a}=e;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:s,transition:`color ${t}`,"&:hover":{color:a}}},"&-close-text":{color:s,transition:`color ${t}`,"&:hover":{color:a}}}}},N=e=>[I(e),w(e),k(e)];var O=(0,x.Z)("Alert",(e=>{const{fontSizeHeading3:o}=e,n=(0,y.TS)(e,{alertIconSizeLG:o,alertPaddingHorizontal:12});return[N(n)]})),j=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n};const Z={success:t.Z,info:a.Z,error:r.Z,warning:s.Z},z=e=>{const{icon:o,prefixCls:n,type:t}=e,r=Z[t]||null;return o?(0,g.wm)(o,d.createElement("span",{className:`${n}-icon`},o),(()=>({className:l()(`${n}-icon`,{[o.props.className]:o.props.className})}))):d.createElement(r,{className:`${n}-icon`})},B=e=>{const{isClosable:o,closeText:n,prefixCls:t,closeIcon:r,handleClose:i}=e;return o?d.createElement("button",{type:"button",onClick:i,className:`${t}-close-icon`,tabIndex:0},n?d.createElement("span",{className:`${t}-close-text`},n):r):null},H=e=>{var{description:o,prefixCls:n,message:t,banner:r,className:s,rootClassName:a,style:c,onMouseEnter:g,onMouseLeave:f,onClick:h,afterClose:$,showIcon:b,closable:v,closeText:S,closeIcon:x=d.createElement(i.Z,null),action:y}=e,C=j(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[E,I]=d.useState(!1),w=d.useRef(),{getPrefixCls:k,direction:N}=d.useContext(m.E_),Z=k("alert",n),[H,L]=O(Z),M=e=>{var o;I(!0),null===(o=C.onClose)||void 0===o||o.call(C,e)},P=!!S||v,T=(()=>{const{type:e}=C;return void 0!==e?e:r?"warning":"info"})(),W=!(!r||void 0!==b)||b,R=l()(Z,`${Z}-${T}`,{[`${Z}-with-description`]:!!o,[`${Z}-no-icon`]:!W,[`${Z}-banner`]:!!r,[`${Z}-rtl`]:"rtl"===N},s,a,L),G=(0,u.Z)(C);return H(d.createElement(p.ZP,{visible:!E,motionName:`${Z}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:$},(e=>{let{className:n,style:r}=e;return d.createElement("div",Object.assign({ref:w,"data-show":!E,className:l()(R,n),style:Object.assign(Object.assign({},c),r),onMouseEnter:g,onMouseLeave:f,onClick:h,role:"alert"},G),W?d.createElement(z,{description:o,icon:C.icon,prefixCls:Z,type:T}):null,d.createElement("div",{className:`${Z}-content`},t?d.createElement("div",{className:`${Z}-message`},t):null,o?d.createElement("div",{className:`${Z}-description`},o):null),y?d.createElement("div",{className:`${Z}-action`},y):null,d.createElement(B,{isClosable:!!P,closeText:S,prefixCls:Z,closeIcon:x,handleClose:M}))})))};H.ErrorBoundary=S;var L=H},57298:function(e,o,n){"use strict";e.exports=n.p+"static/ethRpc.47750521.yaml"},24654:function(){}}]);