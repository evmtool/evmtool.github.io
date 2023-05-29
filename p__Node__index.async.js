"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4452],{5966:function(L,T,e){var Z=e(1413),f=e(91),H=e(62435),F=e(17689),I=e(86074),x=["fieldProps","proFieldProps"],A=["fieldProps","proFieldProps"],j="text",D=function(t){var c=t.fieldProps,o=t.proFieldProps,w=(0,f.Z)(t,x);return(0,I.jsx)(F.Z,(0,Z.Z)({valueType:j,fieldProps:c,filedConfig:{valueType:j},proFieldProps:o},w))},W=function(t){var c=t.fieldProps,o=t.proFieldProps,w=(0,f.Z)(t,A);return(0,I.jsx)(F.Z,(0,Z.Z)({valueType:"password",fieldProps:c,proFieldProps:o,filedConfig:{valueType:j}},w))},y=D;y.Password=W,y.displayName="ProFormComponent",T.Z=y},12741:function(L,T,e){e.r(T),e.d(T,{default:function(){return ce}});var Z=e(17061),f=e.n(Z),H=e(17156),F=e.n(H),I=e(27424),x=e.n(I),A=JSON.parse('[{"logo":"enf.jpg","name":"api.evm.eosnetwork.com","website":"https://eosnetwork.com/eos-evm/","link":"https://eosnetwork.com/eos-evm/","twitter":"https://twitter.com/EosNFoundation","telegram":"https://t.me/eosevm","github":"https://github.com/eosnetworkfoundation/eos-evm","discord":"https://discord.com/invite/eos-network","medium":""},{"logo":"defibox.jpg","name":"api-evm.defibox.io","website":"https://defibox.io/","link":"https://defibox.io/","twitter":"https://twitter.com/DefiboxOfficial","telegram":"https://t.me/Defibox_offici","github":"https://github.com/DefiboxTeam","discord":"https://discord.com/invite/mjZ8ZWJm63","medium":"https://defiboxteam.medium.com/"},{"logo":"noah.jpg","name":"api-evm.noahark.pro","website":"https://noahark.pro/","link":"https://noahark.pro/","twitter":"https://twitter.com/Noah_DeFi","telegram":"https://t.me/noahevm","github":"","discord":"","medium":"https://medium.com/@graystone66666"},{"logo":"eosamsterdam.jpg","name":"demo-eos-evm.global.binfra.one","website":"https://eosamsterdam.net/","link":"https://eosamsterdam.net/","twitter":"https://twitter.com/eosamsterdam","telegram":"https://t.me/EOS_Amsterdam","github":"","discord":"","medium":"https://medium.com/@eos-amsterdam"}]'),j=e(42122),D=e.n(j),W=e(99351),y=e(28941),k=e(98293),t=e(62435),c=e(64119),o=e(86074),w=t.forwardRef(function(n,a){var m=(0,t.useRef)(),p=(0,t.useState)(!1),b=x()(p,2),O=b[0],C=b[1],M=(0,t.useState)({logo:"",name:"",website:"",link:"",twitter:"",telegram:"",github:"",discord:"",medium:""}),P=x()(M,2),h=P[0],S=P[1],z=(0,t.useCallback)(function(u){var s=e(6807)("./"+u.logo);S(D()(D()({},u),{},{logo:s})),C(!0)},[]);(0,t.useImperativeHandle)(a,function(){return{handleOpenContactModalForm:z}});var R=(0,t.useMemo)(function(){return[{title:"website",dataIndex:"website",key:"website",render:function(s,r){return(0,o.jsxs)("a",{href:r.website,target:"_blank",rel:"noreferrer",children:[r.website," "]})}},{title:"twitter",dataIndex:"twitter",key:"twitter",render:function(s,r){return(0,o.jsxs)("a",{href:r.twitter,target:"_blank",rel:"noreferrer",children:[r.twitter," "]})}},{title:"telegram",dataIndex:"telegram",key:"telegram",render:function(s,r){return(0,o.jsxs)("a",{href:r.telegram,target:"_blank",rel:"noreferrer",children:[r.telegram," "]})}},{title:"discord",dataIndex:"discord",key:"discord",render:function(s,r){return(0,o.jsxs)("a",{href:r.discord,target:"_blank",rel:"noreferrer",children:[r.discord," "]})}},{title:"github",dataIndex:"github",key:"github",render:function(s,r){return(0,o.jsxs)("a",{href:r.github,target:"_blank",rel:"noreferrer",children:[r.github," "]})}},{title:"medium",dataIndex:"medium",key:"medium",render:function(s,r){return(0,o.jsxs)("a",{href:r.medium,target:"_blank",rel:"noreferrer",children:[r.medium," "]})}}]},[]);return(0,o.jsx)(W.Y,{formRef:m,open:O,onOpenChange:function(s){C(s)},layout:"horizontal",width:"450px",submitter:!1,children:(0,o.jsx)(y.vY,{title:(0,o.jsxs)("div",{children:[(0,o.jsx)(k.C,{className:"mr-2",src:h.logo}),(0,c.Mn)()?h.name:"https://"+h.name]}),column:1,dataSource:h,columns:R})})}),U=(0,t.memo)(w),g=e(1413),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M594.3 601.5a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1 8 8 0 008 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"}}]},name:"contacts",theme:"outlined"},K=J,Y=e(84089),V=function(a,m){return t.createElement(Y.Z,(0,g.Z)((0,g.Z)({},a),{},{ref:m,icon:K}))};V.displayName="ContactsOutlined";var Q=t.forwardRef(V),X=e(78565),$=e(38345),q=e(97269),_=e(24739),ee=e(91),te=e(22270),G=e(78045),oe=e(80658),re=e(17689),ae=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],ne=t.forwardRef(function(n,a){var m=n.fieldProps,p=n.options,b=n.radioType,O=n.layout,C=n.proFieldProps,M=n.valueEnum,P=(0,ee.Z)(n,ae);return(0,o.jsx)(re.Z,(0,g.Z)((0,g.Z)({valueType:b==="button"?"radioButton":"radio",ref:a,valueEnum:(0,te.h)(M,void 0)},P),{},{fieldProps:(0,g.Z)({options:p,layout:O},m),proFieldProps:C,filedConfig:{customLightMode:!0}}))}),se=t.forwardRef(function(n,a){var m=n.fieldProps,p=n.children;return(0,o.jsx)(G.ZP,(0,g.Z)((0,g.Z)({},m),{},{ref:a,children:p}))}),ie=(0,oe.G)(se,{valuePropName:"checked",ignoreWidth:!0}),N=ie;N.Group=ne,N.Button=G.ZP.Button,N.displayName="ProFormComponent";var le=N,de=e(5966),ue=e(54442),me=function(){var a=(0,t.useRef)(),m=(0,t.useRef)(),p=(0,ue.useIntl)(),b=p.formatMessage({id:"node.cardTitle"}),O=p.formatMessage({id:"node.custom"}),C=p.formatMessage({id:"node.inputException"}),M=(0,t.useState)(!0),P=x()(M,2),h=P[0],S=P[1],z=(0,t.useState)(!1),R=x()(z,2),u=R[0],s=R[1],r=(0,t.useCallback)(function(){var l=F()(f()().mark(function i(v){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:v.radio==="custom"?localStorage.setItem("node",JSON.stringify({http:v.input,custom:!0})):localStorage.setItem("node",JSON.stringify({http:v.radio,custom:!1})),window.location.reload();case 2:case"end":return d.stop()}},i)}));return function(i){return l.apply(this,arguments)}}(),[]);return(0,t.useEffect)(function(){var l=JSON.parse(localStorage.getItem("node"));if(l)if(l.custom){var i,v;S(!1),s(!0),(i=a.current)===null||i===void 0||i.setFieldValue("radio","custom"),(v=a.current)===null||v===void 0||v.setFieldValue("input",l.http)}else{var E,d;(E=a.current)===null||E===void 0||E.setFieldValue("radio",l.http),(d=a.current)===null||d===void 0||d.setFieldValue("input","")}else{var B;(B=a.current)===null||B===void 0||B.setFieldValue("radio","https://api.evm.eosnetwork.com")}},[]),(0,o.jsxs)(X._z,{ghost:!0,className:"node",children:[(0,o.jsx)($.Z,{title:b,children:(0,o.jsxs)(q.A,{layout:"horizontal",formRef:a,onFinish:function(){var l=F()(f()().mark(function i(v){return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",r(v));case 1:case"end":return d.stop()}},i)}));return function(i){return l.apply(this,arguments)}}(),onValuesChange:function(i){i.hasOwnProperty("radio")&&(i.radio==="custom"?h&&(S(!1),s(!0)):h||(S(!0),s(!1)))},children:[(0,o.jsxs)(_.UW,{size:14,children:[(0,o.jsx)(le.Group,{name:"radio",layout:"vertical",options:[{label:(0,c.Mn)()?"api.evm.eosnetwork.com":"https://api.evm.eosnetwork.com",value:"https://api.evm.eosnetwork.com"},{label:(0,c.Mn)()?"api-evm.defibox.io":"https://api-evm.defibox.io",value:"https://api-evm.defibox.io"},{label:(0,c.Mn)()?"api-evm.noahark.pro":"https://api-evm.noahark.pro",value:"https://api-evm.noahark.pro"},{label:(0,c.Mn)()?"demo-eos-evm.global.binfra.one":"https://demo-eos-evm.global.binfra.one",value:"https://demo-eos-evm.global.binfra.one"},{label:"".concat(O),value:"custom"}]}),(0,o.jsx)("div",{className:"flex flex-col mt-[4px]",children:A.map(function(l){return(0,o.jsx)(Q,{style:{fontSize:"1.5em",color:"#1677ff",cursor:"pointer",marginBottom:"14px"},onClick:function(){return m.current.handleOpenContactModalForm(l)}},l.name)})})]}),(0,o.jsx)(de.Z,{name:"input",label:"RPC",disabled:h,placeholder:"https://...",rules:[{required:u,message:"".concat(C),whitespace:!0,pattern:/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g}]})]})}),(0,o.jsx)(U,{ref:m})]})},ce=me}}]);
