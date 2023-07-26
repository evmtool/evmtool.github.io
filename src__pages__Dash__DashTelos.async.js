"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4671,8794],{68763:function(e,t,n){n.d(t,{Mx:function(){return P},LR:function(){return j},iy:function(){return p}});var r=n(42122),a=n.n(r),s=n(62435),i=n(64183),c=n(54442),o=n(32983),u=n(86074),l=function(){var e=(0,c.useSelector)((function(e){return e.dash.txHistoryDataSource})),t={data:e,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"number",yAxis:{type:"pow",label:{formatter:function(e){return"".concat(e).replace(/\d{1,3}(?=(\d{3})+$)/g,(function(e){return"".concat(e,",")}))}}},slider:{start:0,end:1},smooth:!0,label:{}};return(0,u.jsx)(u.Fragment,{children:e.length?(0,u.jsx)(i.Z,a()({},t)):(0,u.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})})},p=(0,s.memo)(l),f=n(17061),d=n.n(f),h=n(17156),g=n.n(h),m=n(27424),v=n.n(m),x=n(64119),b=n(9004),y=n(27484),S=n.n(y),k=function(){var e=(0,s.useState)(!1),t=v()(e,2),n=t[0],r=t[1],l=(0,c.useDispatch)(),p=(0,c.useSelector)((function(e){return e.dash.tvlHistoryDataSource})),f=(0,c.useSelector)((function(e){return e.chainList.chainSelect})),h={data:p,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"tvl",yAxis:{type:"pow",label:{formatter:function(e){var t=Number(e);return t>1e3?"".concat(t/1e3," M"):t>1e6?"".concat(t/1e6," B"):"".concat(t," K")}}},slider:{start:0,end:1},smooth:!0,label:{}},m=(0,s.useCallback)(g()(d()().mark((function e(){var t,n,a;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){return r(!1)},r(!0),n=[],a="",e.t0=f.chainIdDec,e.next="17777"===e.t0?7:"40"===e.t0?9:"324"===e.t0?11:"23448594291968336"===e.t0?13:"59144"===e.t0?15:17;break;case 7:return a="https://api.llama.fi/v2/historicalChainTvl/eos%20evm",e.abrupt("break",17);case 9:return a="https://api.llama.fi/v2/historicalChainTvl/telos",e.abrupt("break",17);case 11:return a="https://api.llama.fi/v2/historicalChainTvl/zkSync%20Era",e.abrupt("break",17);case 13:return a="https://api.llama.fi/v2/historicalChainTvl/Starknet",e.abrupt("break",17);case 15:return a="https://api.llama.fi/v2/historicalChainTvl/Linea",e.abrupt("break",17);case 17:return e.next=19,(0,x.Hj)((0,c.request)(a),t);case 19:e.sent.forEach((function(e){n.push({date:S().unix(e.date).format().substring(0,10),tvl:Number((e.tvl/1e3).toFixed(0)),category:"Daily TVL"})})),l(b.N.setTvlHistoryDataSource(n)),localStorage.setItem("tvlHistoryData",JSON.stringify(n)),r(!1);case 24:case"end":return e.stop()}}),e)}))),[l,f]);return(0,s.useEffect)((function(){m()}),[m]),(0,u.jsx)(u.Fragment,{children:p.length?(0,u.jsx)(i.Z,a()(a()({},h),{},{loading:n})):(0,u.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})})},j=(0,s.memo)(k),w=n(94436),D=n(20701),E=n(11924),N=n(79360),Z=n(24770),T=n(79642),M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=(0,s.forwardRef)((function(e,t){var n=e.chartRef,r=e.style,a=void 0===r?{height:"inherit"}:r,i=e.className,c=e.loading,o=e.loadingTemplate,u=e.errorTemplate,l=M(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),p=(0,E.Z)(D.by,l),f=p.chart,d=p.container;return(0,s.useEffect)((function(){(0,N.J)(n,f.current)}),[f.current]),(0,s.useImperativeHandle)(t,(function(){return{getChart:function(){return f.current}}})),s.createElement(Z.Z,{errorTemplate:u},c&&s.createElement(T.Z,{loadingTemplate:o,theme:e.theme}),s.createElement("div",{className:i,style:a,ref:d}))})),I=n(76509),F=function(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.dash.tvlDistributionDataSource})),n=(0,s.useState)(!1),r=v()(n,2),i=r[0],l=r[1],p=(0,c.useSelector)((function(e){return e.chainList.chainSelect})),f={data:t,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:210,height:210},h={data:t,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:350,height:350},m=(0,s.useCallback)((function(e){switch(e){case"Noah Swap":return"Noash";case"Neutroswap":return"Neutro";case"Frogge.Finance":return"Frogge";case"EOSWAP Finance":return"EOSWAP";case"YieldHub Finance":return"YieldHub";default:return e}}),[]),y=(0,s.useCallback)(g()(d()().mark((function t(){var n,r,s,i,o,u;return d()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){return l(!1)},l(!0),r=0,s=[],t.next=6,(0,x.Hj)((0,c.request)("https://api.llama.fi/protocols"),n);case 6:i=t.sent,o="",t.t0=p.chainIdDec,t.next="17777"===t.t0?11:"40"===t.t0?13:"324"===t.t0?15:"23448594291968336"===t.t0?17:"59144"===t.t0?19:21;break;case 11:return o="EOS EVM",t.abrupt("break",21);case 13:return o="Telos",t.abrupt("break",21);case 15:return o="zkSync Era",t.abrupt("break",21);case 17:return o="Starknet",t.abrupt("break",21);case 19:return o="Linea",t.abrupt("break",21);case 21:(i=(i=i.filter((function(e){return e.chain===o}))).map((function(e){return r+=e.tvl,a()(a()({},e),{},{key:e.id})}))).forEach((function(e){var t=m(e.name);s.push({type:t,value:e.tvl/r})})),u=S()().valueOf(),e(w.N.setDexDataSource(i)),e(w.N.setDexDataTime(u)),e(b.N.setTvlDistributionDataSource(s)),localStorage.setItem("dexData",JSON.stringify({dexDataSource:i,dexDataTime:u})),localStorage.setItem("tvlDistributionData",JSON.stringify(s)),l(!1);case 31:case"end":return t.stop()}}),t)}))),[e,m,p]);return(0,s.useEffect)((function(){y()}),[y]),(0,u.jsx)(I.X.Consumer,{children:function(e){var n=e.isMobile;return t.length?n?(0,u.jsx)(O,a()({loading:i},f)):(0,u.jsx)(O,a()({loading:i},h)):(0,u.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})}})},P=(0,s.memo)(F)},85971:function(e,t,n){var r=(0,n(54442).getDvaApp)()._store;t.Z=r},23284:function(e,t,n){n.r(t);var r=n(17061),a=n.n(r),s=n(17156),i=n.n(s),c=n(27424),o=n.n(c),u=(n(57082),n(87659)),l=n(6466),p=n(95689),f=n(62435),d=n(71230),h=n(15746),g=n(9004),m=n(54442),v=n(68763),x=n(94818),b=n(69716),y=n(86074);t.default=function(){var e=(0,f.useState)(!1),t=o()(e,2),n=t[0],r=t[1],s=(0,m.useDispatch)(),c=(0,m.useSelector)((function(e){return e.dash.chainData})),S=(0,m.useSelector)((function(e){return e.dash.tvlHistoryDataSource})),k=(0,m.useSelector)((function(e){return e.chainList.chainSelect})),j=(0,m.useIntl)(),w=j.formatMessage({id:"dash.gasTracker"}),D=j.formatMessage({id:"dash.averageBlockTime"}),E=j.formatMessage({id:"dash.totalBlocks"}),N=j.formatMessage({id:"dash.walletAddresses"}),Z=j.formatMessage({id:"dash.second"}),T=j.formatMessage({id:"dash.totalValueLocked"}),M=j.formatMessage({id:"dash.change"}),O=j.formatMessage({id:"dash.TvlDistribution"}),I=(0,f.useCallback)(i()(a()().mark((function e(){var t,n,i,c,u,l,p,f,d;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,(0,x.jS)({formatUnits:9});case 3:return t=e.sent,t=Number(t.formatted.gasPrice).toFixed(1)+" Gwei",e.next=7,b.C.init("evmtool",!1);case 7:return e.next=9,b.C.getTableRows({code:"eosio.evm",scope:"eosio.evm",table:"account",limit:1,key_type:"i64",index_position:"1",json:!0,reverse:!0});case 9:if(n=e.sent,i=o()(n,2),c=i[0],u=i[1],!c){e.next=16;break}return console.log(c),e.abrupt("return");case 16:return l="",l=u.rows.length?String(u.rows[0].index+1):"0",p="0.5 ".concat(Z),e.next=21,(0,x.RQ)();case 21:f=e.sent,d={gasTracker:t,dailyTransactions:"0",averageBlockTime:p,totalTransactions:"0",totalBlocks:String(f),walletAddresses:l},s(g.N.setChainData(d)),localStorage.setItem("chainData",JSON.stringify(d)),r(!1);case 26:case"end":return e.stop()}}),e)}))),[s,k,Z]),F=(0,f.useMemo)((function(){if(!S.length)return 0;var e=S.length-1;return 1e3*S[e].tvl}),[S]),P=(0,f.useMemo)((function(){if(!S.length)return 0;var e=S.length-1,t=S.length-2,n=S[e].tvl,r=S[t].tvl;return(n-r)/r*100}),[S]);return(0,f.useEffect)((function(){I()}),[I]),(0,y.jsxs)(u._z,{className:"dash",ghost:!0,children:[(0,y.jsxs)(d.Z,{gutter:8,children:[(0,y.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(l.Z,{loading:n,title:w,statistic:{value:c.gasTracker}})}),(0,y.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(l.Z,{loading:n,title:D,statistic:{value:c.averageBlockTime}})}),(0,y.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(l.Z,{loading:n,title:E,statistic:{value:c.totalBlocks}})}),(0,y.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(l.Z,{loading:n,title:N,statistic:{value:c.walletAddresses}})})]}),!0===k.testNet?(0,y.jsx)(y.Fragment,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:"".concat(T," (USD)"),chart:(0,y.jsx)(v.LR,{}),footer:(0,y.jsxs)("div",{className:"flex justify-around",children:[(0,y.jsx)(p.Z,{prefix:"$",value:F,title:T,layout:"vertical"}),(0,y.jsx)(p.Z,{value:P,title:"".concat(M,"(24h)"),layout:"vertical",suffix:"%",precision:2})]})}),(0,y.jsx)(l.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:O,chart:(0,y.jsx)(v.Mx,{})})]})]})}},64119:function(e,t,n){n.d(t,{CE:function(){return m},D0:function(){return b},Hj:function(){return j},IU:function(){return S},Mn:function(){return D},pM:function(){return Z},su:function(){return E},zI:function(){return v}});var r=n(27424),a=n.n(r),s=n(17061),i=n.n(s),c=n(18698),o=n.n(c),u=n(17156),l=n.n(u),p=n(85971),f=n(2453),d=n(9669),h=n.n(d);function g(){return p.Z.getState().global.nodeConfig.url}function m(e,t){var n=t||"",r=e,a=Number(r)<1;if("number"==typeof r&&(r=r.toString()),a){var s=/0\.(0{4,})/,i=/\d+\.0*\d{3}/.exec(r);if(r=i?i[0]:r,i=s.exec(r)){var c=i[1].length;return n+r.replace(s,"0.0{"+c+"}")}return n+r}return n+Number(r).toLocaleString()}function v(e){return x.apply(this,arguments)}function x(){return(x=l()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",[null,n]);case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0 instanceof Error)){e.next=14;break}return console.log(e.t0),e.abrupt("return",[e.t0.message,null]);case 14:if(console.log(e.t0),"object"!==o()(e.t0)){e.next=19;break}return e.abrupt("return",[JSON.stringify(e.t0),null]);case 19:return e.abrupt("return",[e.t0,null]);case 20:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return(y=l()(i()().mark((function e(t){var n;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(),e.next=3,v(h().post("".concat(n,"/v1/chain/get_account"),JSON.stringify(t)));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return k.apply(this,arguments)}function k(){return(k=l()(i()().mark((function e(t,n){var r;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return r=e.sent,e.abrupt("return",r);case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0 instanceof Error)){e.next=15;break}throw console.log(e.t0),f.ZP.error({content:n||e.t0.message,duration:5}),e.t0;case 15:throw console.log(e.t0),"object"===o()(e.t0)?f.ZP.error({content:n||JSON.stringify(e.t0),duration:5}):f.ZP.error({content:n||e.t0,duration:5}),e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function j(e,t,n){return w.apply(this,arguments)}function w(){return(w=l()(i()().mark((function e(t,n,r){var a,s,c;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null!=n?n:function(){},e.prev=1,e.next=4,t;case 4:return s=e.sent,e.abrupt("return",s);case 8:if(e.prev=8,e.t0=e.catch(1),!(e.t0 instanceof Error)){e.next=17;break}throw console.log(e.t0),a(),f.ZP.error({content:r||e.t0.message,duration:5}),e.t0;case 17:throw console.log(e.t0),"object"===o()(e.t0)?(c="",c=e.t0.hasOwnProperty("message")?e.t0.message:JSON.stringify(e.t0),f.ZP.error({content:r||c,duration:5})):f.ZP.error({content:r||e.t0,duration:5}),a(),e.t0;case 21:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function D(){var e=navigator.userAgent;return/mobile/i.test(e)}function E(e){return N.apply(this,arguments)}function N(){return(N=l()(i()().mark((function e(t){var n,r,s,c;return i()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,r=null,e.next=3,v(h().get("".concat(t,"/v1/chain/get_info"),{timeout:1e4}));case 3:return s=e.sent,c=a()(s,2),n=c[0],r=c[1],e.abrupt("return",[n,r]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){if("string"==typeof e)try{var t=JSON.parse(e);return!("object"!==o()(t)||!t)}catch(e){return!1}}},57082:function(){}}]);