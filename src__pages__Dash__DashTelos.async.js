"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4671],{68763:function(e,t,a){a.d(t,{Mx:function(){return C},LR:function(){return k},iy:function(){return d}});var n=a(42122),r=a.n(n),s=a(62435),i=a(64183),c=a(54442),l=a(32983),o=a(86074),u=function(){var e=(0,c.useSelector)((function(e){return e.dash.txHistoryDataSource})),t={data:e,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"number",yAxis:{type:"pow",label:{formatter:function(e){return"".concat(e).replace(/\d{1,3}(?=(\d{3})+$)/g,(function(e){return"".concat(e,",")}))}}},slider:{start:0,end:1},smooth:!0,label:{}};return(0,o.jsx)(o.Fragment,{children:e.length?(0,o.jsx)(i.Z,r()({},t)):(0,o.jsx)(l.Z,{image:l.Z.PRESENTED_IMAGE_SIMPLE})})},d=(0,s.memo)(u),f=a(17061),h=a.n(f),p=a(17156),m=a.n(p),g=a(27424),x=a.n(g),v=a(64119),S=a(9004),y=a(27484),b=a.n(y),j=function(){var e=(0,s.useState)(!1),t=x()(e,2),a=t[0],n=t[1],u=(0,c.useDispatch)(),d=(0,c.useSelector)((function(e){return e.dash.tvlHistoryDataSource})),f=(0,c.useSelector)((function(e){return e.chainList.chainSelect})),p={data:d,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"tvl",yAxis:{type:"pow",label:{formatter:function(e){var t=Number(e);return t>1e3?"".concat(t/1e3," M"):t>1e6?"".concat(t/1e6," B"):"".concat(t," K")}}},slider:{start:0,end:1},smooth:!0,label:{}},g=(0,s.useCallback)(m()(h()().mark((function e(){var t,a,r;return h()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){return n(!1)},n(!0),a=[],r="",e.t0=f.chainIdDec,e.next="17777"===e.t0?7:"40"===e.t0?9:"324"===e.t0?10:"23448594291968336"===e.t0?11:12;break;case 7:return r="https://api.llama.fi/v2/historicalChainTvl/eos%20evm",e.abrupt("break",12);case 9:r="https://api.llama.fi/v2/historicalChainTvl/telos";case 10:r="https://api.llama.fi/v2/historicalChainTvl/zkSync%20Era";case 11:r="https://api.llama.fi/v2/historicalChainTvl/Starknet";case 12:return e.next=14,(0,v.Hj)((0,c.request)(r),t);case 14:e.sent.forEach((function(e){a.push({date:b().unix(e.date).format().substring(0,10),tvl:Number((e.tvl/1e3).toFixed(0)),category:"Daily TVL"})})),u(S.N.setTvlHistoryDataSource(a)),localStorage.setItem("tvlHistoryData",JSON.stringify(a)),n(!1);case 19:case"end":return e.stop()}}),e)}))),[u,f]);return(0,s.useEffect)((function(){g()}),[g]),(0,o.jsx)(o.Fragment,{children:d.length?(0,o.jsx)(i.Z,r()(r()({},p),{},{loading:a})):(0,o.jsx)(l.Z,{image:l.Z.PRESENTED_IMAGE_SIMPLE})})},k=(0,s.memo)(j),D=a(97936),E=a(20701),T=a(11924),w=a(79360),M=a(24770),N=a(79642),Z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},F=(0,s.forwardRef)((function(e,t){var a=e.chartRef,n=e.style,r=void 0===n?{height:"inherit"}:n,i=e.className,c=e.loading,l=e.loadingTemplate,o=e.errorTemplate,u=Z(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),d=(0,T.Z)(E.by,u),f=d.chart,h=d.container;return(0,s.useEffect)((function(){(0,w.J)(a,f.current)}),[f.current]),(0,s.useImperativeHandle)(t,(function(){return{getChart:function(){return f.current}}})),s.createElement(M.Z,{errorTemplate:o},c&&s.createElement(N.Z,{loadingTemplate:l,theme:e.theme}),s.createElement("div",{className:i,style:r,ref:h}))})),I=a(76509),O=function(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.dash.tvlDistributionDataSource})),a=(0,s.useState)(!1),n=x()(a,2),i=n[0],u=n[1],d=(0,c.useSelector)((function(e){return e.chainList.chainSelect})),f={data:t,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:210,height:210},p={data:t,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:350,height:350},g=(0,s.useCallback)((function(e){switch(e){case"Noah Swap":return"Noash";case"Neutroswap":return"Neutro";case"Frogge.Finance":return"Frogge";case"EOSWAP Finance":return"EOSWAP";case"YieldHub Finance":return"YieldHub";default:return e}}),[]),y=(0,s.useCallback)(m()(h()().mark((function t(){var a,n,s,i,l,o;return h()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return u(!1)},u(!0),n=0,s=[],t.next=6,(0,v.Hj)((0,c.request)("https://api.llama.fi/protocols"),a);case 6:i=t.sent,l="",t.t0=d.chainIdDec,t.next="17777"===t.t0?11:"40"===t.t0?13:"324"===t.t0?14:"23448594291968336"===t.t0?15:16;break;case 11:return l="EOS EVM",t.abrupt("break",16);case 13:l="Telos";case 14:l="zkSync Era";case 15:l="Starknet";case 16:(i=(i=i.filter((function(e){return e.chain===l}))).map((function(e){return n+=e.tvl,r()(r()({},e),{},{key:e.id})}))).forEach((function(e){var t=g(e.name);s.push({type:t,value:e.tvl/n})})),o=b()().valueOf(),e(D.N.setDexDataSource(i)),e(D.N.setDexDataTime(o)),e(S.N.setTvlDistributionDataSource(s)),localStorage.setItem("dexData",JSON.stringify({dexDataSource:i,dexDataTime:o})),localStorage.setItem("tvlDistributionData",JSON.stringify(s)),u(!1);case 26:case"end":return t.stop()}}),t)}))),[e,g,d]);return(0,s.useEffect)((function(){y()}),[y]),(0,o.jsx)(I.X.Consumer,{children:function(e){var a=e.isMobile;return t.length?a?(0,o.jsx)(F,r()({loading:i},f)):(0,o.jsx)(F,r()({loading:i},p)):(0,o.jsx)(l.Z,{image:l.Z.PRESENTED_IMAGE_SIMPLE})}})},C=(0,s.memo)(O)},23284:function(e,t,a){a.r(t);var n=a(17061),r=a.n(n),s=a(17156),i=a.n(s),c=a(27424),l=a.n(c),o=(a(57082),a(87659)),u=a(6466),d=a(95689),f=a(62435),h=a(71230),p=a(15746),m=a(9004),g=a(54442),x=a(68763),v=a(94818),S=a(69716),y=a(86074);t.default=function(){var e=(0,f.useState)(!1),t=l()(e,2),a=t[0],n=t[1],s=(0,g.useDispatch)(),c=(0,g.useSelector)((function(e){return e.dash.chainData})),b=(0,g.useSelector)((function(e){return e.dash.tvlHistoryDataSource})),j=(0,g.useSelector)((function(e){return e.chainList.chainSelect})),k=(0,g.useIntl)(),D=k.formatMessage({id:"dash.gasTracker"}),E=k.formatMessage({id:"dash.averageBlockTime"}),T=k.formatMessage({id:"dash.totalBlocks"}),w=k.formatMessage({id:"dash.walletAddresses"}),M=k.formatMessage({id:"dash.second"}),N=k.formatMessage({id:"dash.totalValueLocked"}),Z=k.formatMessage({id:"dash.change"}),F=k.formatMessage({id:"dash.TvlDistribution"}),I=(0,f.useCallback)(i()(r()().mark((function e(){var t,a,i,c,o,u,d,f,h;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,(0,v.jS)({formatUnits:9});case 3:return t=e.sent,t=Number(t.formatted.gasPrice).toFixed(1)+" Gwei",e.next=7,S.C.init("evmtool",!1);case 7:return e.next=9,S.C.getTableRows({code:"eosio.evm",scope:"eosio.evm",table:"account",limit:1,key_type:"i64",index_position:"1",json:!0,reverse:!0});case 9:if(a=e.sent,i=l()(a,2),c=i[0],o=i[1],!c){e.next=16;break}return console.log(c),e.abrupt("return");case 16:return u="",u=o.rows.length?String(o.rows[0].index+1):"0",d="0.5 ".concat(M),e.next=21,(0,v.RQ)();case 21:f=e.sent,h={gasTracker:t,dailyTransactions:"0",averageBlockTime:d,totalTransactions:"0",totalBlocks:String(f),walletAddresses:u},s(m.N.setChainData(h)),localStorage.setItem("chainData",JSON.stringify(h)),n(!1);case 26:case"end":return e.stop()}}),e)}))),[s,j,M]),O=(0,f.useMemo)((function(){if(!b.length)return 0;var e=b.length-1;return 1e3*b[e].tvl}),[b]),C=(0,f.useMemo)((function(){if(!b.length)return 0;var e=b.length-1,t=b.length-2,a=b[e].tvl,n=b[t].tvl;return(a-n)/n*100}),[b]);return(0,f.useEffect)((function(){I()}),[I]),(0,y.jsxs)(o._z,{className:"dash",ghost:!0,children:[(0,y.jsxs)(h.Z,{gutter:8,children:[(0,y.jsx)(p.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(u.Z,{loading:a,title:D,statistic:{value:c.gasTracker}})}),(0,y.jsx)(p.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(u.Z,{loading:a,title:E,statistic:{value:c.averageBlockTime}})}),(0,y.jsx)(p.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(u.Z,{loading:a,title:T,statistic:{value:c.totalBlocks}})}),(0,y.jsx)(p.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,y.jsx)(u.Z,{loading:a,title:w,statistic:{value:c.walletAddresses}})})]}),!0===j.testNet?(0,y.jsx)(y.Fragment,{}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(u.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:"".concat(N," (USD)"),chart:(0,y.jsx)(x.LR,{}),footer:(0,y.jsxs)("div",{className:"flex justify-around",children:[(0,y.jsx)(d.Z,{prefix:"$",value:O,title:N,layout:"vertical"}),(0,y.jsx)(d.Z,{value:C,title:"".concat(Z,"(24h)"),layout:"vertical",suffix:"%",precision:2})]})}),(0,y.jsx)(u.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:F,chart:(0,y.jsx)(x.Mx,{})})]})]})}},57082:function(){}}]);