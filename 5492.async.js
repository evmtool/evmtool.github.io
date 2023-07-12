"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5492],{86796:function(fe,R,e){e.d(R,{Z:function(){return Q}});var z=e(17061),I=e.n(z),H=e(17156),L=e.n(H),N=e(38416),A=e.n(N),E=e(42122),F=e.n(E),a=e(27424),M=e.n(a),V=e(69688),k=e(84912),q=e(99351),C=e(1413),_=e(45987),X=e(22270),ve=e(32808),v=e(62435),ee=e(80658),J=e(17689),c=e(86074),Z=["options","fieldProps","proFieldProps","valueEnum"],oe=v.forwardRef(function(g,t){var o=g.options,n=g.fieldProps,r=g.proFieldProps,s=g.valueEnum,i=(0,_.Z)(g,Z);return(0,c.jsx)(J.Z,(0,C.Z)({ref:t,valueType:"checkbox",valueEnum:(0,X.h)(s,void 0),fieldProps:(0,C.Z)({options:o},n),lightProps:(0,C.Z)({labelFormatter:function(){return(0,c.jsx)(J.Z,(0,C.Z)({ref:t,valueType:"checkbox",mode:"read",valueEnum:(0,X.h)(s,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,C.Z)({options:o},n),proFieldProps:r},i))}},i.lightProps),proFieldProps:r},i))}),te=v.forwardRef(function(g,t){var o=g.fieldProps,n=g.children;return(0,c.jsx)(ve.Z,(0,C.Z)((0,C.Z)({ref:t},o),{},{children:n}))}),ne=(0,ee.G)(te,{valuePropName:"checked"}),Y=ne;Y.Group=oe;var re=Y,G=e(54442),se=e(99138),K=e(32046),ae=v.forwardRef(function(g,t){var o=(0,G.useDispatch)(),n=(0,G.useSelector)(function(y){return y.ecosystem.noTips}),r=(0,v.useRef)(),s=(0,v.useState)(!1),i=M()(s,2),f=i[0],m=i[1],x=(0,v.useState)(""),p=M()(x,2),h=p[0],S=p[1],l=(0,G.useIntl)(),j=l.formatMessage({id:"ecosystem.tips"}),O=l.formatMessage({id:"ecosystem.alert"},{website:h}),W=l.formatMessage({id:"ecosystem.tipsTitle1"}),U=l.formatMessage({id:"ecosystem.tipsSection1Txt1"}),P=l.formatMessage({id:"ecosystem.tipsSection1Txt2"}),w=l.formatMessage({id:"ecosystem.tipsSection1Txt3"}),ie=l.formatMessage({id:"ecosystem.tipsTitle2"}),le=l.formatMessage({id:"ecosystem.tipsSection2Txt1"}),ce=l.formatMessage({id:"ecosystem.tipsSection2Txt2"}),de=l.formatMessage({id:"ecosystem.tipsSection2Txt3"}),d=l.formatMessage({id:"ecosystem.tipsSection2Txt4"}),me=l.formatMessage({id:"ecosystem.noTips"}),pe=(0,v.useCallback)(function(y){var u;S(y),(u=r.current)===null||u===void 0||u.setFieldValue("checkbox",[]);var T=K.id(y).substring(2,12);n.hasOwnProperty(T)&&n[T]?window.open(y):m(!0)},[n]);(0,v.useImperativeHandle)(t,function(){return{handleOpenTipModalForm:pe}});var ue=(0,v.useCallback)(function(y){var u;if(y.checkbox.length){var T=K.id(h).substring(2,12),b=F()(F()({},n),{},A()({},T,!0));o(k.N.setNoTips(b)),localStorage.setItem("noTips",JSON.stringify(b))}(u=r.current)===null||u===void 0||u.setFieldValue("checkbox",[]),m(!1),window.open(h)},[h,o,n]);return(0,c.jsxs)(q.Y,{className:"ecosystemComp",formRef:r,title:(0,c.jsx)("div",{className:"text-center",children:j}),open:f,onFinish:function(){var y=L()(I()().mark(function u(T){return I()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.abrupt("return",ue(T));case 1:case"end":return B.stop()}},u)}));return function(u){return y.apply(this,arguments)}}(),onOpenChange:function(u){m(u)},layout:"horizontal",width:"450px",children:[(0,c.jsx)(se.Z,{className:"my-4",message:O,type:"info"}),(0,c.jsx)("div",{className:"font-bold my-2",children:W}),(0,c.jsx)("div",{children:U}),(0,c.jsx)("div",{children:P}),(0,c.jsx)("div",{children:w}),(0,c.jsx)("div",{className:"font-bold my-2",children:ie}),(0,c.jsx)("div",{children:le}),(0,c.jsx)("div",{children:ce}),(0,c.jsx)("div",{children:de}),(0,c.jsxs)("div",{className:"flex justify-between",children:[d,(0,c.jsx)(re.Group,{name:"checkbox",options:["".concat(me)],initialValue:[]})]})]})}),Q=(0,v.memo)(ae)},53238:function(fe,R,e){e.d(R,{Z:function(){return F}});var z=e(62435),I=e(22181),H=e(54442),L=e(87659),N=e(86074),A=function(){var M=(0,H.useSelector)(function(V){return V.chainList.chainSelect});return(0,N.jsx)(L._z,{ghost:!0,children:(0,N.jsx)(I.ZP,{title:"The blockchain of ".concat(M.chainName," is not supported")})})},E=(0,z.memo)(A),F=E},69688:function(){},99138:function(fe,R,e){e.d(R,{Z:function(){return g}});var z=e(89739),I=e(4340),H=e(97937),L=e(21640),N=e(78860),A=e(94184),E=e.n(A),F=e(82225),a=e(62435),M=e(53124),V=e(5467),k=e(96159),q=e(15671),C=e(43144),_=e(32531),X=e(73568),v=function(t){(0,_.Z)(n,t);var o=(0,X.Z)(n);function n(){var r;return(0,q.Z)(this,n),r=o.apply(this,arguments),r.state={error:void 0,info:{componentStack:""}},r}return(0,C.Z)(n,[{key:"componentDidCatch",value:function(s,i){this.setState({error:s,info:i})}},{key:"render",value:function(){const{message:s,description:i,children:f}=this.props,{error:m,info:x}=this.state,p=x&&x.componentStack?x.componentStack:null,h=typeof s=="undefined"?(m||"").toString():s,S=typeof i=="undefined"?p:i;return m?a.createElement(g,{type:"error",message:h,description:a.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},S)}):f}}]),n}(a.Component),ee=e(67968),J=e(45503),c=e(14747);const Z=(t,o,n,r,s)=>({backgroundColor:t,border:`${r.lineWidth}px ${r.lineType} ${o}`,[`${s}-icon`]:{color:n}}),oe=t=>{const{componentCls:o,motionDurationSlow:n,marginXS:r,marginSM:s,fontSize:i,fontSizeLG:f,lineHeight:m,borderRadiusLG:x,motionEaseInOutCirc:p,alertIconSizeLG:h,colorText:S,paddingContentVerticalSM:l,alertPaddingHorizontal:j,paddingMD:O,paddingContentHorizontalLG:W}=t;return{[o]:Object.assign(Object.assign({},(0,c.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:`${l}px ${j}px`,wordWrap:"break-word",borderRadius:x,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:r,lineHeight:0},["&-description"]:{display:"none",fontSize:i,lineHeight:m},"&-message":{color:S},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${p}, opacity ${n} ${p},
        padding-top ${n} ${p}, padding-bottom ${n} ${p},
        margin-bottom ${n} ${p}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",paddingInline:W,paddingBlock:O,[`${o}-icon`]:{marginInlineEnd:s,fontSize:h,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:r,color:S,fontSize:f},[`${o}-description`]:{display:"block"}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},te=t=>{const{componentCls:o,colorSuccess:n,colorSuccessBorder:r,colorSuccessBg:s,colorWarning:i,colorWarningBorder:f,colorWarningBg:m,colorError:x,colorErrorBorder:p,colorErrorBg:h,colorInfo:S,colorInfoBorder:l,colorInfoBg:j}=t;return{[o]:{"&-success":Z(s,r,n,t,o),"&-info":Z(j,l,S,t,o),"&-warning":Z(m,f,i,t,o),"&-error":Object.assign(Object.assign({},Z(h,p,x,t,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},ne=t=>{const{componentCls:o,iconCls:n,motionDurationMid:r,marginXS:s,fontSizeIcon:i,colorIcon:f,colorIconHover:m}=t;return{[o]:{["&-action"]:{marginInlineStart:s},[`${o}-close-icon`]:{marginInlineStart:s,padding:0,overflow:"hidden",fontSize:i,lineHeight:`${i}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:f,transition:`color ${r}`,"&:hover":{color:m}}},"&-close-text":{color:f,transition:`color ${r}`,"&:hover":{color:m}}}}},Y=t=>[oe(t),te(t),ne(t)];var re=(0,ee.Z)("Alert",t=>{const{fontSizeHeading3:o}=t,n=(0,J.TS)(t,{alertIconSizeLG:o,alertPaddingHorizontal:12});return[Y(n)]}),G=function(t,o){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&o.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)o.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n};const se={success:z.Z,info:N.Z,error:I.Z,warning:L.Z},K=t=>{const{icon:o,prefixCls:n,type:r}=t,s=se[r]||null;return o?(0,k.wm)(o,a.createElement("span",{className:`${n}-icon`},o),()=>({className:E()(`${n}-icon`,{[o.props.className]:o.props.className})})):a.createElement(s,{className:`${n}-icon`})},ae=t=>{const{isClosable:o,closeText:n,prefixCls:r,closeIcon:s,handleClose:i}=t;return o?a.createElement("button",{type:"button",onClick:i,className:`${r}-close-icon`,tabIndex:0},n?a.createElement("span",{className:`${r}-close-text`},n):s):null},Q=t=>{var{description:o,prefixCls:n,message:r,banner:s,className:i,rootClassName:f,style:m,onMouseEnter:x,onMouseLeave:p,onClick:h,afterClose:S,showIcon:l,closable:j,closeText:O,closeIcon:W=a.createElement(H.Z,null),action:U}=t,P=G(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[w,ie]=a.useState(!1),le=a.useRef(),{getPrefixCls:ce,direction:de}=a.useContext(M.E_),d=ce("alert",n),[me,pe]=re(d),ue=$=>{var D;ie(!0),(D=P.onClose)===null||D===void 0||D.call(P,$)},y=()=>{const{type:$}=P;return $!==void 0?$:s?"warning":"info"},u=O?!0:j,T=y(),b=s&&l===void 0?!0:l,B=E()(d,`${d}-${T}`,{[`${d}-with-description`]:!!o,[`${d}-no-icon`]:!b,[`${d}-banner`]:!!s,[`${d}-rtl`]:de==="rtl"},i,f,pe),ge=(0,V.Z)(P);return me(a.createElement(F.ZP,{visible:!w,motionName:`${d}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:$=>({maxHeight:$.offsetHeight}),onLeaveEnd:S},$=>{let{className:D,style:he}=$;return a.createElement("div",Object.assign({ref:le,"data-show":!w,className:E()(B,D),style:Object.assign(Object.assign({},m),he),onMouseEnter:x,onMouseLeave:p,onClick:h,role:"alert"},ge),b?a.createElement(K,{description:o,icon:P.icon,prefixCls:d,type:T}):null,a.createElement("div",{className:`${d}-content`},r?a.createElement("div",{className:`${d}-message`},r):null,o?a.createElement("div",{className:`${d}-description`},o):null),U?a.createElement("div",{className:`${d}-action`},U):null,a.createElement(ae,{isClosable:!!u,closeText:O,prefixCls:d,closeIcon:W,handleClose:ue}))}))};Q.ErrorBoundary=v;var g=Q}}]);