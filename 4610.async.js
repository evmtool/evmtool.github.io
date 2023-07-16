"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4610],{68763:function(e,t,a){a.d(t,{Mx:function(){return C},LR:function(){return j},iy:function(){return d}});var n=a(42122),r=a.n(n),s=a(62435),i=a(64183),c=a(54442),o=a(32983),l=a(86074),u=function(){var e=(0,c.useSelector)((function(e){return e.dash.txHistoryDataSource})),t={data:e,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"number",yAxis:{type:"pow",label:{formatter:function(e){return"".concat(e).replace(/\d{1,3}(?=(\d{3})+$)/g,(function(e){return"".concat(e,",")}))}}},slider:{start:0,end:1},smooth:!0,label:{}};return(0,l.jsx)(l.Fragment,{children:e.length?(0,l.jsx)(i.Z,r()({},t)):(0,l.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})})},d=(0,s.memo)(u),f=a(17061),p=a.n(f),h=a(17156),x=a.n(h),g=a(27424),m=a.n(g),v=a(64119),y=a(9004),S=a(27484),b=a.n(S),k=function(){var e=(0,s.useState)(!1),t=m()(e,2),a=t[0],n=t[1],u=(0,c.useDispatch)(),d=(0,c.useSelector)((function(e){return e.dash.tvlHistoryDataSource})),f=(0,c.useSelector)((function(e){return e.chainList.chainSelect})),h={data:d,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"tvl",yAxis:{type:"pow",label:{formatter:function(e){var t=Number(e);return t>1e3?"".concat(t/1e3," M"):t>1e6?"".concat(t/1e6," B"):"".concat(t," K")}}},slider:{start:0,end:1},smooth:!0,label:{}},g=(0,s.useCallback)(x()(p()().mark((function e(){var t,a,r;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){return n(!1)},n(!0),a=[],r="",e.t0=f.chainIdDec,e.next="17777"===e.t0?7:"40"===e.t0?9:"324"===e.t0?10:"23448594291968336"===e.t0?11:12;break;case 7:return r="https://api.llama.fi/v2/historicalChainTvl/eos%20evm",e.abrupt("break",12);case 9:r="https://api.llama.fi/v2/historicalChainTvl/telos";case 10:r="https://api.llama.fi/v2/historicalChainTvl/zkSync%20Era";case 11:r="https://api.llama.fi/v2/historicalChainTvl/Starknet";case 12:return e.next=14,(0,v.Hj)((0,c.request)(r),t);case 14:e.sent.forEach((function(e){a.push({date:b().unix(e.date).format().substring(0,10),tvl:Number((e.tvl/1e3).toFixed(0)),category:"Daily TVL"})})),u(y.N.setTvlHistoryDataSource(a)),localStorage.setItem("tvlHistoryData",JSON.stringify(a)),n(!1);case 19:case"end":return e.stop()}}),e)}))),[u,f]);return(0,s.useEffect)((function(){g()}),[g]),(0,l.jsx)(l.Fragment,{children:d.length?(0,l.jsx)(i.Z,r()(r()({},h),{},{loading:a})):(0,l.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})})},j=(0,s.memo)(k),T=a(97936),D=a(20701),E=a(11924),N=a(79360),M=a(24770),w=a(79642),Z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},I=(0,s.forwardRef)((function(e,t){var a=e.chartRef,n=e.style,r=void 0===n?{height:"inherit"}:n,i=e.className,c=e.loading,o=e.loadingTemplate,l=e.errorTemplate,u=Z(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),d=(0,E.Z)(D.by,u),f=d.chart,p=d.container;return(0,s.useEffect)((function(){(0,N.J)(a,f.current)}),[f.current]),(0,s.useImperativeHandle)(t,(function(){return{getChart:function(){return f.current}}})),s.createElement(M.Z,{errorTemplate:l},c&&s.createElement(w.Z,{loadingTemplate:o,theme:e.theme}),s.createElement("div",{className:i,style:r,ref:p}))})),O=a(76509),F=function(){var e=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.dash.tvlDistributionDataSource})),a=(0,s.useState)(!1),n=m()(a,2),i=n[0],u=n[1],d=(0,c.useSelector)((function(e){return e.chainList.chainSelect})),f={data:t,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:210,height:210},h={data:t,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:350,height:350},g=(0,s.useCallback)((function(e){switch(e){case"Noah Swap":return"Noash";case"Neutroswap":return"Neutro";case"Frogge.Finance":return"Frogge";case"EOSWAP Finance":return"EOSWAP";case"YieldHub Finance":return"YieldHub";default:return e}}),[]),S=(0,s.useCallback)(x()(p()().mark((function t(){var a,n,s,i,o,l;return p()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return u(!1)},u(!0),n=0,s=[],t.next=6,(0,v.Hj)((0,c.request)("https://api.llama.fi/protocols"),a);case 6:i=t.sent,o="",t.t0=d.chainIdDec,t.next="17777"===t.t0?11:"40"===t.t0?13:"324"===t.t0?14:"23448594291968336"===t.t0?15:16;break;case 11:return o="EOS EVM",t.abrupt("break",16);case 13:o="Telos";case 14:o="zkSync Era";case 15:o="Starknet";case 16:(i=(i=i.filter((function(e){return e.chain===o}))).map((function(e){return n+=e.tvl,r()(r()({},e),{},{key:e.id})}))).forEach((function(e){var t=g(e.name);s.push({type:t,value:e.tvl/n})})),l=b()().valueOf(),e(T.N.setDexDataSource(i)),e(T.N.setDexDataTime(l)),e(y.N.setTvlDistributionDataSource(s)),localStorage.setItem("dexData",JSON.stringify({dexDataSource:i,dexDataTime:l})),localStorage.setItem("tvlDistributionData",JSON.stringify(s)),u(!1);case 26:case"end":return t.stop()}}),t)}))),[e,g,d]);return(0,s.useEffect)((function(){S()}),[S]),(0,l.jsx)(O.X.Consumer,{children:function(e){var a=e.isMobile;return t.length?a?(0,l.jsx)(I,r()({loading:i},f)):(0,l.jsx)(I,r()({loading:i},h)):(0,l.jsx)(o.Z,{image:o.Z.PRESENTED_IMAGE_SIMPLE})}})},C=(0,s.memo)(F)},34610:function(e,t,a){a.r(t);var n=a(17061),r=a.n(n),s=a(17156),i=a.n(s),c=a(27424),o=a.n(c),l=(a(57082),a(87659)),u=a(6466),d=a(95689),f=a(62435),p=a(71230),h=a(15746),x=a(64119),g=a(9004),m=a(54442),v=a(68763),y=a(94818),S=a(86074);t.default=function(){var e,t=(0,f.useState)(!1),a=o()(t,2),n=a[0],s=a[1],c=(0,m.useDispatch)(),b=(0,m.useSelector)((function(e){return e.dash.chainData})),k=(0,m.useSelector)((function(e){return e.dash.tvlHistoryDataSource})),j=(0,m.useSelector)((function(e){return e.dash.txDayTotal})),T=(0,m.useSelector)((function(e){return e.chainList.chainSelect})),D=(0,m.useIntl)(),E=D.formatMessage({id:"dash.dailyTransactions"}),N=D.formatMessage({id:"dash.totalTransactions"}),M=D.formatMessage({id:"dash.averageTransactions"}),w=D.formatMessage({id:"dash.yesterdayTransactions"}),Z=D.formatMessage({id:"dash.gasTracker"}),I=D.formatMessage({id:"dash.averageBlockTime"}),O=D.formatMessage({id:"dash.totalBlocks"}),F=D.formatMessage({id:"dash.walletAddresses"}),C=D.formatMessage({id:"dash.second"}),H=D.formatMessage({id:"dash.totalValueLocked"}),_=D.formatMessage({id:"dash.change"}),B=D.formatMessage({id:"dash.TvlDistribution"}),A=(0,f.useCallback)(function(){var e=i()(r()().mark((function e(t){var a,n,s,i,c,o,l,u,d,f,p,h,x,g,m;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=/data-selector="tx_per_day">\s+(.+)\s+<span/,n=/data-selector="average-block-time">\s+(.+)\s+<\/span>/,s=/data-selector="transaction-count">\s+(.+)\s+<\/span>/,i=/data-selector="address-count">\s+(.+)\s+<\/span>/,c=/\d+\.\d+ Gwei/.exec(t),o=c?c[0]:"150.0 Gwei",l=a.exec(t),u=l?l[1]:"0",d=n.exec(t),f=d?d[1].replace("second",C):"1 ".concat(C),p=s.exec(t),h=p?p[1]:"0",x=i.exec(t),g=x?x[1]:"0",e.next=17,(0,y.RQ)();case 17:return m=e.sent,e.abrupt("return",{gasTracker:o,dailyTransactions:u,averageBlockTime:f,totalTransactions:h,totalBlocks:String(m),walletAddresses:g});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[C]),L=(0,f.useCallback)(i()(r()().mark((function e(){var t,a,n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){return s(!1)},s(!0),e.next=4,(0,x.Hj)((0,m.request)(T.blockExplorerUrls[0]),t);case 4:return a=e.sent,e.next=7,A(a);case 7:n=e.sent,c(g.N.setChainData(n)),localStorage.setItem("chainData",JSON.stringify(n)),s(!1);case 11:case"end":return e.stop()}}),e)}))),[c,A,T]),P=(0,f.useMemo)((function(){if(!k.length)return 0;var e=k.length-1;return 1e3*k[e].tvl}),[k]),R=(0,f.useMemo)((function(){if(!k.length)return 0;var e=k.length-1,t=k.length-2,a=k[e].tvl,n=k[t].tvl;return(a-n)/n*100}),[k]),J=(0,f.useCallback)(i()(r()().mark((function e(){var t,a,n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=0,[],e.next=5,(0,x.IU)((0,m.request)("".concat(T.blockExplorerUrls[0],"/transaction-history-chart?type=JSON"),{headers:{"x-requested-with":"XMLHttpRequest"}}));case 5:n=e.sent,JSON.parse(n.history_data).forEach((function(e){t.push({date:e.date,number:e.number_of_transactions,category:"Daily Transactions"}),a+=e.number_of_transactions})),c(g.N.setTxHistoryDataSource(t)),c(g.N.setTxHistoryTotal(a)),c(g.N.setTxDayTotal(t.length)),localStorage.setItem("txHistoryData",JSON.stringify(t));case 12:case"end":return e.stop()}}),e)}))),[c,T]);return(0,f.useEffect)((function(){J(),L()}),[L]),(0,S.jsxs)(l._z,{className:"dash",ghost:!0,children:[(0,S.jsx)(u.Z,{loading:n,bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:E,chart:(0,S.jsx)(v.iy,{}),footer:(0,S.jsxs)("div",{className:"flex justify-around",children:[(0,S.jsx)(d.Z,{value:b.totalTransactions,title:N,layout:"vertical"}),(0,S.jsx)(d.Z,{value:(Number(null===(e=b.totalTransactions)||void 0===e?void 0:e.replace(/,/g,""))/j).toFixed(0),title:M,layout:"vertical"}),(0,S.jsx)(d.Z,{value:b.dailyTransactions,title:w,layout:"vertical"})]})}),(0,S.jsxs)(p.Z,{gutter:8,children:[(0,S.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,S.jsx)(u.Z,{loading:n,title:Z,statistic:{value:b.gasTracker}})}),(0,S.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,S.jsx)(u.Z,{loading:n,title:I,statistic:{value:b.averageBlockTime}})}),(0,S.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,S.jsx)(u.Z,{loading:n,title:O,statistic:{value:b.totalBlocks}})}),(0,S.jsx)(h.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,S.jsx)(u.Z,{loading:n,title:F,statistic:{value:b.walletAddresses}})})]}),!0===T.testNet?(0,S.jsx)(S.Fragment,{}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:"".concat(H," (USD)"),chart:(0,S.jsx)(v.LR,{}),footer:(0,S.jsxs)("div",{className:"flex justify-around",children:[(0,S.jsx)(d.Z,{prefix:"$",value:P,title:H,layout:"vertical"}),(0,S.jsx)(d.Z,{value:R,title:"".concat(_,"(24h)"),layout:"vertical",suffix:"%",precision:2})]})}),(0,S.jsx)(u.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:B,chart:(0,S.jsx)(v.Mx,{})})]})]})}},57082:function(){}}]);