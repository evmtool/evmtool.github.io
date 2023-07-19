"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6524,8794],{68763:function(t,e,n){n.d(e,{Mx:function(){return C},LR:function(){return j},iy:function(){return p}});var r=n(42122),a=n.n(r),s=n(62435),o=n(64183),c=n(54442),i=n(32983),u=n(86074),l=function(){var t=(0,c.useSelector)((function(t){return t.dash.txHistoryDataSource})),e={data:t,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"number",yAxis:{type:"pow",label:{formatter:function(t){return"".concat(t).replace(/\d{1,3}(?=(\d{3})+$)/g,(function(t){return"".concat(t,",")}))}}},slider:{start:0,end:1},smooth:!0,label:{}};return(0,u.jsx)(u.Fragment,{children:t.length?(0,u.jsx)(o.Z,a()({},e)):(0,u.jsx)(i.Z,{image:i.Z.PRESENTED_IMAGE_SIMPLE})})},p=(0,s.memo)(l),f=n(17061),d=n.n(f),h=n(17156),g=n.n(h),m=n(27424),v=n.n(m),x=n(64119),b=n(9004),S=n(27484),y=n.n(S),k=function(){var t=(0,s.useState)(!1),e=v()(t,2),n=e[0],r=e[1],l=(0,c.useDispatch)(),p=(0,c.useSelector)((function(t){return t.dash.tvlHistoryDataSource})),f=(0,c.useSelector)((function(t){return t.chainList.chainSelect})),h={data:p,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"tvl",yAxis:{type:"pow",label:{formatter:function(t){var e=Number(t);return e>1e3?"".concat(e/1e3," M"):e>1e6?"".concat(e/1e6," B"):"".concat(e," K")}}},slider:{start:0,end:1},smooth:!0,label:{}},m=(0,s.useCallback)(g()(d()().mark((function t(){var e,n,a;return d()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=function(){return r(!1)},r(!0),n=[],a="",t.t0=f.chainIdDec,t.next="17777"===t.t0?7:"40"===t.t0?9:"324"===t.t0?11:"23448594291968336"===t.t0?13:15;break;case 7:return a="https://api.llama.fi/v2/historicalChainTvl/eos%20evm",t.abrupt("break",15);case 9:return a="https://api.llama.fi/v2/historicalChainTvl/telos",t.abrupt("break",15);case 11:return a="https://api.llama.fi/v2/historicalChainTvl/zkSync%20Era",t.abrupt("break",15);case 13:return a="https://api.llama.fi/v2/historicalChainTvl/Starknet",t.abrupt("break",15);case 15:return t.next=17,(0,x.Hj)((0,c.request)(a),e);case 17:t.sent.forEach((function(t){n.push({date:y().unix(t.date).format().substring(0,10),tvl:Number((t.tvl/1e3).toFixed(0)),category:"Daily TVL"})})),l(b.N.setTvlHistoryDataSource(n)),localStorage.setItem("tvlHistoryData",JSON.stringify(n)),r(!1);case 22:case"end":return t.stop()}}),t)}))),[l,f]);return(0,s.useEffect)((function(){m()}),[m]),(0,u.jsx)(u.Fragment,{children:p.length?(0,u.jsx)(o.Z,a()(a()({},h),{},{loading:n})):(0,u.jsx)(i.Z,{image:i.Z.PRESENTED_IMAGE_SIMPLE})})},j=(0,s.memo)(k),w=n(58049),E=n(20701),D=n(11924),Z=n(79360),_=n(24770),M=n(79642),N=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n},O=(0,s.forwardRef)((function(t,e){var n=t.chartRef,r=t.style,a=void 0===r?{height:"inherit"}:r,o=t.className,c=t.loading,i=t.loadingTemplate,u=t.errorTemplate,l=N(t,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),p=(0,D.Z)(E.by,l),f=p.chart,d=p.container;return(0,s.useEffect)((function(){(0,Z.J)(n,f.current)}),[f.current]),(0,s.useImperativeHandle)(e,(function(){return{getChart:function(){return f.current}}})),s.createElement(_.Z,{errorTemplate:u},c&&s.createElement(M.Z,{loadingTemplate:i,theme:t.theme}),s.createElement("div",{className:o,style:a,ref:d}))})),T=n(76509),I=function(){var t=(0,c.useDispatch)(),e=(0,c.useSelector)((function(t){return t.dash.tvlDistributionDataSource})),n=(0,s.useState)(!1),r=v()(n,2),o=r[0],l=r[1],p=(0,c.useSelector)((function(t){return t.chainList.chainSelect})),f={data:e,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:210,height:210},h={data:e,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:350,height:350},m=(0,s.useCallback)((function(t){switch(t){case"Noah Swap":return"Noash";case"Neutroswap":return"Neutro";case"Frogge.Finance":return"Frogge";case"EOSWAP Finance":return"EOSWAP";case"YieldHub Finance":return"YieldHub";default:return t}}),[]),S=(0,s.useCallback)(g()(d()().mark((function e(){var n,r,s,o,i,u;return d()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){return l(!1)},l(!0),r=0,s=[],e.next=6,(0,x.Hj)((0,c.request)("https://api.llama.fi/protocols"),n);case 6:o=e.sent,i="",e.t0=p.chainIdDec,e.next="17777"===e.t0?11:"40"===e.t0?13:"324"===e.t0?15:"23448594291968336"===e.t0?17:19;break;case 11:return i="EOS EVM",e.abrupt("break",19);case 13:return i="Telos",e.abrupt("break",19);case 15:return i="zkSync Era",e.abrupt("break",19);case 17:return i="Starknet",e.abrupt("break",19);case 19:(o=(o=o.filter((function(t){return t.chain===i}))).map((function(t){return r+=t.tvl,a()(a()({},t),{},{key:t.id})}))).forEach((function(t){var e=m(t.name);s.push({type:e,value:t.tvl/r})})),u=y()().valueOf(),t(w.N.setDexDataSource(o)),t(w.N.setDexDataTime(u)),t(b.N.setTvlDistributionDataSource(s)),localStorage.setItem("dexData",JSON.stringify({dexDataSource:o,dexDataTime:u})),localStorage.setItem("tvlDistributionData",JSON.stringify(s)),l(!1);case 29:case"end":return e.stop()}}),e)}))),[t,m,p]);return(0,s.useEffect)((function(){S()}),[S]),(0,u.jsx)(T.X.Consumer,{children:function(t){var n=t.isMobile;return e.length?n?(0,u.jsx)(O,a()({loading:o},f)):(0,u.jsx)(O,a()({loading:o},h)):(0,u.jsx)(i.Z,{image:i.Z.PRESENTED_IMAGE_SIMPLE})}})},C=(0,s.memo)(I)},85971:function(t,e,n){var r=(0,n(54442).getDvaApp)()._store;e.Z=r},90137:function(t,e,n){n.r(e);var r=n(17061),a=n.n(r),s=n(17156),o=n.n(s),c=n(27424),i=n.n(c),u=(n(57082),n(87659)),l=n(6466),p=n(95689),f=n(62435),d=n(71230),h=n(15746),g=n(64119),m=n(9004),v=n(54442),x=n(68763),b=n(86074);e.default=function(){var t=(0,f.useState)(!1),e=i()(t,2),n=e[0],r=e[1],s=(0,v.useDispatch)(),c=(0,v.useSelector)((function(t){return t.dash.chainData})),S=(0,v.useSelector)((function(t){return t.dash.tvlHistoryDataSource})),y=(0,v.useSelector)((function(t){return t.chainList.chainSelect})),k=(0,v.useIntl)(),j=k.formatMessage({id:"dash.totalTransactions"}),w=k.formatMessage({id:"dash.totalClasses"}),E=k.formatMessage({id:"dash.totalMessages"}),D=k.formatMessage({id:"dash.totalEvents"}),Z=k.formatMessage({id:"dash.totalBlocks"}),_=k.formatMessage({id:"dash.totalContracts"}),M=k.formatMessage({id:"dash.second"}),N=k.formatMessage({id:"dash.totalValueLocked"}),O=k.formatMessage({id:"dash.change"}),T=k.formatMessage({id:"dash.TvlDistribution"}),I=(0,f.useCallback)(function(){var t=o()(a()().mark((function t(e){var n,r,s,o,c,i;return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.total_count_transactions,r=e.total_count_blocks,s=e.total_count_contracts,o=e.total_count_events,c=e.total_count_messages,i=e.total_count_classes,t.abrupt("return",{totalTransactions:n,totalBlocks:r,totalContracts:s,totalEvents:o,totalMessages:c,totalClasses:i});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[M]),C=(0,f.useCallback)(o()(a()().mark((function t(){var e,n,o,c;return a()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){return r(!1)},r(!0),n={query:"query HomePageStatsSummaryStarknetOverViewStatsQuery {\n  starknetOverviewStats {\n    ...useHomePageStatsInfoFragment_starknetOverviewStats\n  }\n}\n\nfragment useHomePageStatsInfoFragment_starknetOverviewStats on StarknetOverviewStats {\n  total_count_blocks\n  total_count_transactions\n  total_count_events\n  total_count_messages\n  total_count_contracts\n  total_count_classes\n}\n",variables:{}},t.next=5,(0,g.Hj)((0,v.request)(y.blockExplorerUrls[1],{method:"POST",data:n}),e);case 5:return o=t.sent,t.next=8,I(o.data.starknetOverviewStats);case 8:c=t.sent,s(m.N.setChainData(c)),localStorage.setItem("chainData",JSON.stringify(c)),r(!1);case 12:case"end":return t.stop()}}),t)}))),[s,I,y]),P=(0,f.useMemo)((function(){if(!S.length)return 0;var t=S.length-1;return 1e3*S[t].tvl}),[S]),F=(0,f.useMemo)((function(){if(!S.length)return 0;var t=S.length-1,e=S.length-2,n=S[t].tvl,r=S[e].tvl;return(n-r)/r*100}),[S]);return(0,f.useEffect)((function(){C()}),[C]),(0,b.jsxs)(u._z,{className:"dash",ghost:!0,children:[(0,b.jsxs)(d.Z,{gutter:8,children:[(0,b.jsx)(h.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"8"},xs:{span:"12"},children:(0,b.jsx)(l.Z,{loading:n,title:Z,statistic:{value:c.totalBlocks}})}),(0,b.jsx)(h.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"8"},xs:{span:"12"},children:(0,b.jsx)(l.Z,{loading:n,title:j,statistic:{value:c.totalTransactions}})}),(0,b.jsx)(h.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"8"},xs:{span:"12"},children:(0,b.jsx)(l.Z,{loading:n,title:_,statistic:{value:c.totalContracts}})}),(0,b.jsx)(h.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"8"},xs:{span:"12"},children:(0,b.jsx)(l.Z,{loading:n,title:D,statistic:{value:c.totalEvents}})}),(0,b.jsx)(h.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"8"},xs:{span:"12"},children:(0,b.jsx)(l.Z,{loading:n,title:E,statistic:{value:c.totalMessages}})}),(0,b.jsx)(h.Z,{lg:{span:"8"},md:{span:"8"},sm:{span:"8"},xs:{span:"12"},children:(0,b.jsx)(l.Z,{loading:n,title:w,statistic:{value:c.totalClasses}})})]}),!0===y.testNet?(0,b.jsx)(b.Fragment,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:"".concat(N," (USD)"),chart:(0,b.jsx)(x.LR,{}),footer:(0,b.jsxs)("div",{className:"flex justify-around",children:[(0,b.jsx)(p.Z,{prefix:"$",value:P,title:N,layout:"vertical"}),(0,b.jsx)(p.Z,{value:F,title:"".concat(O,"(24h)"),layout:"vertical",suffix:"%",precision:2})]})}),(0,b.jsx)(l.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:T,chart:(0,b.jsx)(x.Mx,{})})]})]})}},64119:function(t,e,n){n.d(e,{CE:function(){return m},D0:function(){return b},Hj:function(){return j},IU:function(){return y},Mn:function(){return E},pM:function(){return _},su:function(){return D},zI:function(){return v}});var r=n(27424),a=n.n(r),s=n(17061),o=n.n(s),c=n(18698),i=n.n(c),u=n(17156),l=n.n(u),p=n(85971),f=n(2453),d=n(9669),h=n.n(d);function g(){return p.Z.getState().global.nodeConfig.url}function m(t,e){var n=e||"",r=t,a=Number(r)<1;if("number"==typeof r&&(r=r.toString()),a){var s=/0\.(0{4,})/,o=/\d+\.0*\d{3}/.exec(r);if(r=o?o[0]:r,o=s.exec(r)){var c=o[1].length;return n+r.replace(s,"0.0{"+c+"}")}return n+r}return n+Number(r).toLocaleString()}function v(t){return x.apply(this,arguments)}function x(){return(x=l()(o()().mark((function t(e){var n;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:return n=t.sent,t.abrupt("return",[null,n]);case 7:if(t.prev=7,t.t0=t.catch(0),!(t.t0 instanceof Error)){t.next=14;break}return console.log(t.t0),t.abrupt("return",[t.t0.message,null]);case 14:if(console.log(t.t0),"object"!==i()(t.t0)){t.next=19;break}return t.abrupt("return",[JSON.stringify(t.t0),null]);case 19:return t.abrupt("return",[t.t0,null]);case 20:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function b(t){return S.apply(this,arguments)}function S(){return(S=l()(o()().mark((function t(e){var n;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g(),t.next=3,v(h().post("".concat(n,"/v1/chain/get_account"),JSON.stringify(e)));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,e){return k.apply(this,arguments)}function k(){return(k=l()(o()().mark((function t(e,n){var r;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:return r=t.sent,t.abrupt("return",r);case 7:if(t.prev=7,t.t0=t.catch(0),!(t.t0 instanceof Error)){t.next=15;break}throw console.log(t.t0),f.ZP.error({content:n||t.t0.message,duration:5}),t.t0;case 15:throw console.log(t.t0),"object"===i()(t.t0)?f.ZP.error({content:n||JSON.stringify(t.t0),duration:5}):f.ZP.error({content:n||t.t0,duration:5}),t.t0;case 18:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function j(t,e,n){return w.apply(this,arguments)}function w(){return(w=l()(o()().mark((function t(e,n,r){var a,s,c;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null!=n?n:function(){},t.prev=1,t.next=4,e;case 4:return s=t.sent,t.abrupt("return",s);case 8:if(t.prev=8,t.t0=t.catch(1),!(t.t0 instanceof Error)){t.next=17;break}throw console.log(t.t0),a(),f.ZP.error({content:r||t.t0.message,duration:5}),t.t0;case 17:throw console.log(t.t0),"object"===i()(t.t0)?(c="",c=t.t0.hasOwnProperty("message")?t.t0.message:JSON.stringify(t.t0),f.ZP.error({content:r||c,duration:5})):f.ZP.error({content:r||t.t0,duration:5}),a(),t.t0;case 21:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function E(){var t=navigator.userAgent;return/mobile/i.test(t)}function D(t){return Z.apply(this,arguments)}function Z(){return(Z=l()(o()().mark((function t(e){var n,r,s,c;return o()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,r=null,t.next=3,v(h().get("".concat(e,"/v1/chain/get_info"),{timeout:1e4}));case 3:return s=t.sent,c=a()(s,2),n=c[0],r=c[1],t.abrupt("return",[n,r]);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!==i()(e)||!e)}catch(t){return!1}}},57082:function(){}}]);