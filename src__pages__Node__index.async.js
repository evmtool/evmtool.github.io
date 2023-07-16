"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1883,3202],{5966:function(e,t,r){var n=r(1413),o=r(45987),i=(r(62435),r(17689)),a=r(86074),s=["fieldProps","proFieldProps"],c=["fieldProps","proFieldProps"],u="text",l=function(e){var t=e.fieldProps,r=e.proFieldProps,c=(0,o.Z)(e,s);return(0,a.jsx)(i.Z,(0,n.Z)({valueType:u,fieldProps:t,filedConfig:{valueType:u},proFieldProps:r},c))};l.Password=function(e){var t=e.fieldProps,r=e.proFieldProps,s=(0,o.Z)(e,c);return(0,a.jsx)(i.Z,(0,n.Z)({valueType:"password",fieldProps:t,proFieldProps:r,filedConfig:{valueType:u}},s))},l.displayName="ProFormComponent",t.Z=l},53238:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(62435),o=r(22181),i=r(54442),a=r(87659),s=r(86074),c=function(){var e=(0,i.useSelector)((function(e){return e.chainList.chainSelect}));return(0,s.jsx)(a._z,{ghost:!0,children:(0,s.jsx)(o.ZP,{title:"The blockchain of ".concat(e.chainName," is not supported")})})},u=(0,n.memo)(c)},16258:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}});var n=r(17061),o=r.n(n),i=r(38416),a=r.n(i),s=r(42122),c=r.n(s),u=r(17156),l=r.n(u),d=r(27424),m=r.n(d),p=JSON.parse('[{"logo":"enf.jpg","name":"api.evm.eosnetwork.com","website":"https://eosnetwork.com/eos-evm/","link":"https://eosnetwork.com/eos-evm/","twitter":"https://twitter.com/EosNFoundation","telegram":"https://t.me/eosevm","github":"https://github.com/eosnetworkfoundation/eos-evm","discord":"https://discord.com/invite/eos-network","medium":""},{"logo":"defibox.jpg","name":"api-evm.defibox.io","website":"https://defibox.io/","link":"https://defibox.io/","twitter":"https://twitter.com/DefiboxOfficial","telegram":"https://t.me/Defibox_offici","github":"https://github.com/DefiboxTeam","discord":"https://discord.com/invite/mjZ8ZWJm63","medium":"https://defiboxteam.medium.com/"},{"logo":"noah.jpg","name":"api-evm.noahark.pro","website":"https://noahark.pro/","link":"https://noahark.pro/","twitter":"https://twitter.com/Noah_DeFi","telegram":"https://t.me/noahevm","github":"","discord":"","medium":"https://medium.com/@graystone66666"},{"logo":"eosamsterdam.jpg","name":"demo-eos-evm.global.binfra.one","website":"https://eosamsterdam.net/","link":"https://eosamsterdam.net/","twitter":"https://twitter.com/eosamsterdam","telegram":"https://t.me/EOS_Amsterdam","github":"","discord":"","medium":"https://medium.com/@eos-amsterdam"}]'),f=r(99351),h=r(45843),v=r(98293),g=r(62435),w=r(64119),b=r(86074),x=g.forwardRef((function(e,t){var n=(0,g.useRef)(),o=(0,g.useState)(!1),i=m()(o,2),a=i[0],s=i[1],u=(0,g.useState)({logo:"",name:"",website:"",link:"",twitter:"",telegram:"",github:"",discord:"",medium:""}),l=m()(u,2),d=l[0],p=l[1],x=(0,g.useCallback)((function(e){var t=r(6807)("./"+e.logo);p(c()(c()({},e),{},{logo:t})),s(!0)}),[]);(0,g.useImperativeHandle)(t,(function(){return{handleOpenContactModalForm:x}}));var k=(0,g.useMemo)((function(){return[{title:"website",dataIndex:"website",key:"website",render:function(e,t){return(0,b.jsxs)("a",{href:t.website,target:"_blank",rel:"noreferrer",children:[t.website," "]})}},{title:"twitter",dataIndex:"twitter",key:"twitter",render:function(e,t){return(0,b.jsxs)("a",{href:t.twitter,target:"_blank",rel:"noreferrer",children:[t.twitter," "]})}},{title:"telegram",dataIndex:"telegram",key:"telegram",render:function(e,t){return(0,b.jsxs)("a",{href:t.telegram,target:"_blank",rel:"noreferrer",children:[t.telegram," "]})}},{title:"discord",dataIndex:"discord",key:"discord",render:function(e,t){return(0,b.jsxs)("a",{href:t.discord,target:"_blank",rel:"noreferrer",children:[t.discord," "]})}},{title:"github",dataIndex:"github",key:"github",render:function(e,t){return(0,b.jsxs)("a",{href:t.github,target:"_blank",rel:"noreferrer",children:[t.github," "]})}},{title:"medium",dataIndex:"medium",key:"medium",render:function(e,t){return(0,b.jsxs)("a",{href:t.medium,target:"_blank",rel:"noreferrer",children:[t.medium," "]})}}]}),[]);return(0,b.jsx)(f.Y,{formRef:n,open:a,onOpenChange:function(e){s(e)},layout:"horizontal",width:"450px",submitter:!1,children:(0,b.jsx)(h.vY,{title:(0,b.jsxs)("div",{children:[(0,b.jsx)(v.C,{className:"mr-2",src:d.logo}),(0,w.Mn)()?d.name:"https://"+d.name]}),column:1,dataSource:d,columns:k})})})),k=(0,g.memo)(x),j=(r(11511),r(13545),r(1413)),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M594.3 601.5a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1 8 8 0 008 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"}}]},name:"contacts",theme:"outlined"},P=r(84089),Z=function(e,t){return g.createElement(P.Z,(0,j.Z)((0,j.Z)({},e),{},{ref:t,icon:y}))};Z.displayName="ContactsOutlined";var S=g.forwardRef(Z),F=r(87659),I=r(38345),C=r(97269),N=r(24739),O=r(45987),_=r(22270),z=r(78045),D=r(80658),M=r(17689),R=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],T=g.forwardRef((function(e,t){var r=e.fieldProps,n=e.options,o=e.radioType,i=e.layout,a=e.proFieldProps,s=e.valueEnum,c=(0,O.Z)(e,R);return(0,b.jsx)(M.Z,(0,j.Z)((0,j.Z)({valueType:"button"===o?"radioButton":"radio",ref:t,valueEnum:(0,_.h)(s,void 0)},c),{},{fieldProps:(0,j.Z)({options:n,layout:i},r),proFieldProps:a,filedConfig:{customLightMode:!0}}))})),E=g.forwardRef((function(e,t){var r=e.fieldProps,n=e.children;return(0,b.jsx)(z.ZP,(0,j.Z)((0,j.Z)({},r),{},{ref:t,children:n}))})),H=(0,D.G)(E,{valuePropName:"checked",ignoreWidth:!0});H.Group=T,H.Button=z.ZP.Button,H.displayName="ProFormComponent";var V=H,J=r(5966),B=r(54442),U=r(60173),A=function(){var e=(0,g.useRef)(),t=(0,g.useRef)(),r=(0,B.useIntl)(),n=r.formatMessage({id:"node.cardTitle"}),i=r.formatMessage({id:"node.custom"}),s=r.formatMessage({id:"node.inputException"}),u=(0,g.useState)(!0),d=m()(u,2),f=d[0],h=d[1],v=(0,g.useState)(!1),x=m()(v,2),j=x[0],y=x[1],P=(0,B.useSelector)((function(e){return e.chainList.chainSelect})),Z=(0,g.useState)({}),O=m()(Z,2),_=O[0],z=O[1],D=(0,g.useCallback)(function(){var e=l()(o()().mark((function e(t){var r,n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=P.chainIdDec,n=U.filter((function(e){return e.chainIdDec===P.chainIdDec}))[0],"custom"===t.radio?(localStorage.setItem("node",JSON.stringify(c()(c()({},_),{},a()({},r,{http:t.input,custom:!0})))),n.rpcUrls=[t.input]):(localStorage.setItem("node",JSON.stringify(c()(c()({},_),{},a()({},r,{http:t.radio,custom:!1})))),n.rpcUrls=[t.radio]),localStorage.setItem("chainSelect",JSON.stringify(n)),window.location.reload();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[_,P,U]),M=(0,g.useMemo)((function(){var e=[];return U.filter((function(e){return e.chainIdDec===P.chainIdDec}))[0].rpcUrls.forEach((function(t){e.push({label:(0,w.Mn)()?t.replace(/https:\/\/|http:\/\//,""):t,value:t})})),e.push({label:"".concat(i),value:"custom"}),e}),[P]);return(0,g.useEffect)((function(){var t,r,n,o,i,a=JSON.parse(localStorage.getItem("node")),s=P.chainIdDec;a&&a.hasOwnProperty(s)?a[s].custom?(h(!1),y(!0),null===(t=e.current)||void 0===t||t.setFieldValue("radio","custom"),null===(r=e.current)||void 0===r||r.setFieldValue("input",a[s].http)):(null===(n=e.current)||void 0===n||n.setFieldValue("radio",a[s].http),null===(o=e.current)||void 0===o||o.setFieldValue("input","")):null===(i=e.current)||void 0===i||i.setFieldValue("radio",P.rpcUrls[0]);z(a)}),[P]),(0,b.jsxs)(F._z,{ghost:!0,className:"node",children:[(0,b.jsx)(I.Z,{title:n,children:(0,b.jsxs)(C.A,{layout:"horizontal",formRef:e,onFinish:function(){var e=l()(o()().mark((function e(t){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onValuesChange:function(e){e.hasOwnProperty("radio")&&("custom"===e.radio?f&&(h(!1),y(!0)):f||(h(!0),y(!1)))},children:[(0,b.jsxs)(N.UW,{size:14,children:[(0,b.jsx)(V.Group,{name:"radio",layout:"vertical",options:M}),"17777"===P.chainIdDec?(0,b.jsx)("div",{className:"flex flex-col mt-[4px]",children:p.map((function(e){return(0,b.jsx)(S,{style:{fontSize:"1.5em",color:"#1677ff",cursor:"pointer",marginBottom:"14px"},onClick:function(){return t.current.handleOpenContactModalForm(e)}},e.name)}))}):(0,b.jsx)(b.Fragment,{})]}),(0,b.jsx)(J.Z,{name:"input",label:"RPC",disabled:f,placeholder:"https://...",rules:[{required:j,message:"".concat(s),whitespace:!0,pattern:/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/}]})]})}),(0,b.jsx)(k,{ref:t})]})}},53211:function(e,t,r){r.r(t);var n=r(16258),o=r(53238),i=r(54442),a=r(62435),s=r(86074);t.default=function(){var e=(0,i.useSelector)((function(e){return e.chainList.chainSelect}));return(0,a.useCallback)((function(){switch(e.chainIdDec){case"17777":case"15557":case"40":case"41":case"324":case"280":return(0,s.jsx)(n.default,{});default:return(0,s.jsx)(o.Z,{})}}),[e])()}}}]);