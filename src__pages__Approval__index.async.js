"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2410,8440],{53238:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(62435),a=r(22181),s=r(54442),c=r(87659),u=r(86074),o=function(){var e=(0,s.useSelector)((function(e){return e.chainList.chainSelect}));return(0,u.jsx)(c._z,{ghost:!0,children:(0,u.jsx)(a.ZP,{title:"The blockchain of ".concat(e.chainName," is not supported")})})},i=(0,n.memo)(o)},31101:function(e,t,r){r.r(t);var n=r(17061),a=r.n(n),s=r(17156),c=r.n(s),u=r(82865),o=r(53238),i=r(54442),l=r(62435),f=r(64119),d=r(25734),m=r(86074),p=function(){var e=(0,i.useDispatch)(),t=(0,i.useSelector)((function(e){return e.chainList.chainSelect})),r=(0,i.useSelector)((function(e){return e.ecosystem.tokenDataSourceTelos})),n=(0,i.useSelector)((function(e){return e.ecosystem.tokenDataSourcezkSyncEra})),s=(0,l.useCallback)(c()(a()().mark((function t(){var r,n,s;return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.zI)((0,i.request)("https://api.noahark.pro/api/swap/getCoinList",{method:"POST"}));case 2:(r=t.sent)[1]&&0===r[1].code&&(n=r[1].data,s=n.map((function(e){return{name:e.name,contract:e.contract,symbol:e.symbol,decimals:e.decimal}})),e(d.N.setCoinList(s)),localStorage.setItem("coinList",JSON.stringify(s)));case 4:case"end":return t.stop()}}),t)}))),[]),p=(0,l.useCallback)(c()(a()().mark((function t(){return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(d.N.setCoinList(r));case 1:case"end":return t.stop()}}),t)}))),[r]),k=(0,l.useCallback)(c()(a()().mark((function r(){var s,c;return a()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s=n.fields[t.chainIdDec].arrayValue.values,c=s.map((function(e){return{name:e.mapValue.fields.symbol.stringValue,contract:e.mapValue.fields.l2Address.stringValue,symbol:e.mapValue.fields.symbol.stringValue,decimals:Number(e.mapValue.fields.decimals.integerValue)}})),e(d.N.setCoinList(c));case 3:case"end":return r.stop()}}),r)}))),[n,t]),h=(0,l.useCallback)(c()(a()().mark((function r(){var n,s,c;return a()().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.blockExplorerUrls[0],s=[],r.next=4,(0,f.IU)((0,i.request)("".concat(n,"/api?module=contract&action=listcontracts&offset=1000&filter=verified")));case 4:(c=r.sent)&&"1"===c.status&&(c.result.forEach((function(e){s.push({address:e.Address,contractName:e.ContractName})})),e(d.N.setContractList(s)),localStorage.setItem("contractList",JSON.stringify(s)));case 6:case"end":return r.stop()}}),r)}))),[t]),b=(0,l.useCallback)((function(){var e=t.blockExplorerUrls[0];return{tokenHoldersHref:function(t){return e+"/token/"+t+"/token-holders"},addressHref:function(t){return e+"/address/"+t},txHref:function(t){return e+"/tx/"+t}}}),[t]),x=(0,l.useCallback)((function(){var e=t.blockExplorerUrls[0];return{tokenHoldersHref:function(t){return e+"/address/"+t},addressHref:function(t){return e+"/address/"+t},txHref:function(t){return e+"/tx/"+t}}}),[t]),v=(0,l.useCallback)((function(){var e=t.blockExplorerUrls[0];return{tokenHoldersHref:function(t){return e+"/address/"+t},addressHref:function(t){return e+"/address/"+t},txHref:function(t){return e+"/tx/"+t}}}),[t]),C=(0,l.useCallback)((function(){switch(t.chainIdDec){case"17777":case"15557":return(0,m.jsx)(u.default,{href:b()});case"40":case"41":return(0,m.jsx)(u.default,{href:x()});case"324":case"280":return(0,m.jsx)(u.default,{href:v()});default:return(0,m.jsx)(o.Z,{})}}),[t,b,x,v]);return(0,l.useEffect)((function(){switch(t.chainIdDec){case"17777":h(),s();break;case"15557":h();break;case"40":case"41":p();break;case"324":case"280":k()}}),[t,h,s,p,k]),C()};t.default=(0,l.memo)(p)}}]);