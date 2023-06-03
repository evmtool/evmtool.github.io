"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5546],{78096:function(Je,k,n){n.d(k,{Z:function(){return Ve}});var q=n(17061),D=n.n(q),_=n(17156),ee=n.n(_),oe=n(38416),te=n.n(oe),ne=n(42122),V=n.n(ne),re=n(27424),X=n.n(re),se=n(58460),ae=n(99351),T=n(1413),ie=n(91),J=n(22270),le=n(32808),a=n(62435),ce=n(80658),Y=n(17689),d=n(86074),de=["options","fieldProps","proFieldProps","valueEnum"],me=a.forwardRef(function(o,e){var r=o.options,t=o.fieldProps,s=o.proFieldProps,i=o.valueEnum,c=(0,ie.Z)(o,de);return(0,d.jsx)(Y.Z,(0,T.Z)({ref:e,valueType:"checkbox",valueEnum:(0,J.h)(i,void 0),fieldProps:(0,T.Z)({options:r},t),lightProps:(0,T.Z)({labelFormatter:function(){return(0,d.jsx)(Y.Z,(0,T.Z)({ref:e,valueType:"checkbox",mode:"read",valueEnum:(0,J.h)(i,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,T.Z)({options:r},t),proFieldProps:s},c))}},c.lightProps),proFieldProps:s},c))}),pe=a.forwardRef(function(o,e){var r=o.fieldProps,t=o.children;return(0,d.jsx)(le.Z,(0,T.Z)((0,T.Z)({ref:e},r),{},{children:t}))}),ue=(0,ce.G)(pe,{valuePropName:"checked"}),K=ue;K.Group=me;var fe=K,O=n(54442),ve=n(89739),ge=n(4340),he=n(97937),ye=n(21640),xe=n(78860),Se=n(94184),Z=n.n(Se),Ce=n(82225),Te=n(53124),$e=n(5467),Ee=n(96159),Pe=n(15671),je=n(43144),Ie=n(32531),Fe=n(73568),Ne=function(o){(0,Ie.Z)(r,o);var e=(0,Fe.Z)(r);function r(){var t;return(0,Pe.Z)(this,r),t=e.apply(this,arguments),t.state={error:void 0,info:{componentStack:""}},t}return(0,je.Z)(r,[{key:"componentDidCatch",value:function(s,i){this.setState({error:s,info:i})}},{key:"render",value:function(){const{message:s,description:i,children:c}=this.props,{error:u,info:f}=this.state,v=f&&f.componentStack?f.componentStack:null,y=typeof s=="undefined"?(u||"").toString():s,g=typeof i=="undefined"?v:i;return u?a.createElement(U,{type:"error",message:y,description:a.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},g)}):c}}]),r}(a.Component),be=n(67968),Me=n(45503),Oe=n(14747);const N=(o,e,r,t,s)=>({backgroundColor:o,border:`${t.lineWidth}px ${t.lineType} ${e}`,[`${s}-icon`]:{color:r}}),Ze=o=>{const{componentCls:e,motionDurationSlow:r,marginXS:t,marginSM:s,fontSize:i,fontSizeLG:c,lineHeight:u,borderRadiusLG:f,motionEaseInOutCirc:v,alertIconSizeLG:y,colorText:g,paddingContentVerticalSM:S,alertPaddingHorizontal:l,paddingMD:E,paddingContentHorizontalLG:j}=o;return{[e]:Object.assign(Object.assign({},(0,Oe.Wf)(o)),{position:"relative",display:"flex",alignItems:"center",padding:`${S}px ${l}px`,wordWrap:"break-word",borderRadius:f,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:t,lineHeight:0},["&-description"]:{display:"none",fontSize:i,lineHeight:u},"&-message":{color:g},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${r} ${v}, opacity ${r} ${v},
        padding-top ${r} ${v}, padding-bottom ${r} ${v},
        margin-bottom ${r} ${v}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",paddingInline:j,paddingBlock:E,[`${e}-icon`]:{marginInlineEnd:s,fontSize:y,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:t,color:g,fontSize:c},[`${e}-description`]:{display:"block"}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Be=o=>{const{componentCls:e,colorSuccess:r,colorSuccessBorder:t,colorSuccessBg:s,colorWarning:i,colorWarningBorder:c,colorWarningBg:u,colorError:f,colorErrorBorder:v,colorErrorBg:y,colorInfo:g,colorInfoBorder:S,colorInfoBg:l}=o;return{[e]:{"&-success":N(s,t,r,o,e),"&-info":N(l,S,g,o,e),"&-warning":N(u,c,i,o,e),"&-error":Object.assign(Object.assign({},N(y,v,f,o,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},ze=o=>{const{componentCls:e,iconCls:r,motionDurationMid:t,marginXS:s,fontSizeIcon:i,colorIcon:c,colorIconHover:u}=o;return{[e]:{["&-action"]:{marginInlineStart:s},[`${e}-close-icon`]:{marginInlineStart:s,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${r}-close`]:{color:c,transition:`color ${t}`,"&:hover":{color:u}}},"&-close-text":{color:c,transition:`color ${t}`,"&:hover":{color:u}}}}},Re=o=>[Ze(o),Be(o),ze(o)];var He=(0,be.Z)("Alert",o=>{const{fontSizeHeading3:e}=o,r=(0,Me.TS)(o,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[Re(r)]}),Ae=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(o);s<t.length;s++)e.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(o,t[s])&&(r[t[s]]=o[t[s]]);return r};const Ge={success:ve.Z,info:xe.Z,error:ge.Z,warning:ye.Z},Le=o=>{const{icon:e,prefixCls:r,type:t}=o,s=Ge[t]||null;return e?(0,Ee.wm)(e,a.createElement("span",{className:`${r}-icon`},e),()=>({className:Z()(`${r}-icon`,{[e.props.className]:e.props.className})})):a.createElement(s,{className:`${r}-icon`})},We=o=>{const{isClosable:e,closeText:r,prefixCls:t,closeIcon:s,handleClose:i}=o;return e?a.createElement("button",{type:"button",onClick:i,className:`${t}-close-icon`,tabIndex:0},r?a.createElement("span",{className:`${t}-close-text`},r):s):null},Q=o=>{var{description:e,prefixCls:r,message:t,banner:s,className:i,rootClassName:c,style:u,onMouseEnter:f,onMouseLeave:v,onClick:y,afterClose:g,showIcon:S,closable:l,closeText:E,closeIcon:j=a.createElement(he.Z,null),action:b}=o,$=Ae(o,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[M,B]=a.useState(!1),z=a.useRef(),{getPrefixCls:R,direction:H}=a.useContext(Te.E_),m=R("alert",r),[A,G]=He(m),L=C=>{var F;B(!0),(F=$.onClose)===null||F===void 0||F.call($,C)},W=()=>{const{type:C}=$;return C!==void 0?C:s?"warning":"info"},h=E?!0:l,p=W(),x=s&&S===void 0?!0:S,I=Z()(m,`${m}-${p}`,{[`${m}-with-description`]:!!e,[`${m}-no-icon`]:!x,[`${m}-banner`]:!!s,[`${m}-rtl`]:H==="rtl"},i,c,G),P=(0,$e.Z)($);return A(a.createElement(Ce.ZP,{visible:!M,motionName:`${m}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:C=>({maxHeight:C.offsetHeight}),onLeaveEnd:g},C=>{let{className:F,style:Xe}=C;return a.createElement("div",Object.assign({ref:z,"data-show":!M,className:Z()(I,F),style:Object.assign(Object.assign({},u),Xe),onMouseEnter:f,onMouseLeave:v,onClick:y,role:"alert"},P),x?a.createElement(Le,{description:e,icon:$.icon,prefixCls:m,type:p}):null,a.createElement("div",{className:`${m}-content`},t?a.createElement("div",{className:`${m}-message`},t):null,e?a.createElement("div",{className:`${m}-description`},e):null),b?a.createElement("div",{className:`${m}-action`},b):null,a.createElement(We,{isClosable:!!h,closeText:E,prefixCls:m,closeIcon:j,handleClose:L}))}))};Q.ErrorBoundary=Ne;var U=Q,w=n(32046),De=a.forwardRef(function(o,e){var r=(0,O.useDispatch)(),t=(0,O.useSelector)(function(h){return h.ecosystem.noTips}),s=(0,a.useRef)(),i=(0,a.useState)(!1),c=X()(i,2),u=c[0],f=c[1],v=(0,a.useState)(""),y=X()(v,2),g=y[0],S=y[1],l=(0,O.useIntl)(),E=l.formatMessage({id:"ecosystem.tips"}),j=l.formatMessage({id:"ecosystem.alert"},{website:g}),b=l.formatMessage({id:"ecosystem.tipsTitle1"}),$=l.formatMessage({id:"ecosystem.tipsSection1Txt1"}),M=l.formatMessage({id:"ecosystem.tipsSection1Txt2"}),B=l.formatMessage({id:"ecosystem.tipsSection1Txt3"}),z=l.formatMessage({id:"ecosystem.tipsTitle2"}),R=l.formatMessage({id:"ecosystem.tipsSection2Txt1"}),H=l.formatMessage({id:"ecosystem.tipsSection2Txt2"}),m=l.formatMessage({id:"ecosystem.tipsSection2Txt3"}),A=l.formatMessage({id:"ecosystem.tipsSection2Txt4"}),G=l.formatMessage({id:"ecosystem.noTips"}),L=(0,a.useCallback)(function(h){var p;S(h),(p=s.current)===null||p===void 0||p.setFieldValue("checkbox",[]);var x=w.id(h).substring(2,12);t.hasOwnProperty(x)&&t[x]?window.open(h):f(!0)},[t]);(0,a.useImperativeHandle)(e,function(){return{handleOpenTipModalForm:L}});var W=(0,a.useCallback)(function(h){var p;if(h.checkbox.length){var x=w.id(g).substring(2,12),I=V()(V()({},t),{},te()({},x,!0));r(se.N.setNoTips(I)),localStorage.setItem("noTips",JSON.stringify(I))}(p=s.current)===null||p===void 0||p.setFieldValue("checkbox",[]),f(!1),window.open(g)},[g,r,t]);return(0,d.jsxs)(ae.Y,{className:"ecosystemComp",formRef:s,title:(0,d.jsx)("div",{className:"text-center",children:E}),open:u,onFinish:function(){var h=ee()(D()().mark(function p(x){return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",W(x));case 1:case"end":return P.stop()}},p)}));return function(p){return h.apply(this,arguments)}}(),onOpenChange:function(p){f(p)},layout:"horizontal",width:"450px",children:[(0,d.jsx)(U,{className:"my-4",message:j,type:"info"}),(0,d.jsx)("div",{className:"font-bold my-2",children:b}),(0,d.jsx)("div",{children:$}),(0,d.jsx)("div",{children:M}),(0,d.jsx)("div",{children:B}),(0,d.jsx)("div",{className:"font-bold my-2",children:z}),(0,d.jsx)("div",{children:R}),(0,d.jsx)("div",{children:H}),(0,d.jsx)("div",{children:m}),(0,d.jsxs)("div",{className:"flex justify-between",children:[A,(0,d.jsx)(fe.Group,{name:"checkbox",options:["".concat(G)],initialValue:[]})]})]})}),Ve=(0,a.memo)(De)}}]);
