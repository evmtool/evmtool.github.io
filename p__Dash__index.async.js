"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7592],{85971:function(la,W,t){var $=t(54442),P=(0,$.getDvaApp)()._store;W.Z=P},51777:function(la,W,t){t.r(W),t.d(W,{default:function(){return l}});var $=t(17061),P=t.n($),_=t(17156),D=t.n(_),q=t(27424),k=t.n(q),aa=t(78565),E=t(6466),w=t(95689),u=t(62435),ea=t(71230),L=t(15746),S=t(64119),Z=t(9004),y=t(54442),ta=t(42122),x=t.n(ta),F=t(64183),B=t(32983),s=t(86074),ra=function(){var r=(0,u.useState)(!1),n=k()(r,2),a=n[1],h=(0,y.useDispatch)(),O=(0,y.useSelector)(function(M){return M.dash.txHistoryDataSource}),T={data:O,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"number",yAxis:{type:"pow",label:{formatter:function(c){return"".concat(c).replace(/\d{1,3}(?=(\d{3})+$)/g,function(g){return"".concat(g,",")})}}},slider:{start:0,end:1},smooth:!0,label:{}},p=(0,u.useCallback)(D()(P()().mark(function M(){var c,g,d,j,C;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=function(){return a(!1)},a(!0),g=[],d=0,j=[],f.next=7,(0,S.Hj)((0,y.request)("https://explorer.evm.eosnetwork.com/transaction-history-chart?type=JSON",{headers:{"x-requested-with":"XMLHttpRequest"}}),c);case 7:C=f.sent,j=JSON.parse(C.history_data),j.forEach(function(N){g.push({date:N.date,number:N.number_of_transactions,category:"Daily Transactions"}),d+=N.number_of_transactions}),h(Z.N.setTxHistoryDataSource(g)),h(Z.N.setTxHistoryTotal(d)),h(Z.N.setTxDayTotal(g.length)),localStorage.setItem("txHistoryData",JSON.stringify(g)),a(!1);case 15:case"end":return f.stop()}},M)})),[h]);return(0,u.useEffect)(function(){p()},[p]),(0,s.jsx)(s.Fragment,{children:O.length?(0,s.jsx)(F.Z,x()({},T)):(0,s.jsx)(B.Z,{image:B.Z.PRESENTED_IMAGE_SIMPLE})})},J=(0,u.memo)(ra),sa=t(27484),G=t.n(sa),ia=function(){var r=(0,u.useState)(!1),n=k()(r,2),a=n[0],h=n[1],O=(0,y.useDispatch)(),T=(0,y.useSelector)(function(c){return c.dash.tvlHistoryDataSource}),p={data:T,xField:"date",xAxis:{type:"time",mask:"MM-DD"},yField:"tvl",yAxis:{type:"pow",label:{formatter:function(g){var d=Number(g);return d>1e3?"".concat(d/1e3," M"):d>1e6?"".concat(d/1e6," B"):"".concat(d," K")}}},slider:{start:0,end:1},smooth:!0,label:{}},M=(0,u.useCallback)(D()(P()().mark(function c(){var g,d,j;return P()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return g=function(){return h(!1)},h(!0),d=[],b.next=5,(0,S.Hj)((0,y.request)("https://api.llama.fi/v2/historicalChainTvl/eos%20evm"),g);case 5:j=b.sent,j.forEach(function(f){d.push({date:G().unix(f.date).format().substring(0,10),tvl:Number((f.tvl/1e3).toFixed(0)),category:"Daily TVL"})}),O(Z.N.setTvlHistoryDataSource(d)),localStorage.setItem("tvlHistoryData",JSON.stringify(d)),h(!1);case 10:case"end":return b.stop()}},c)})),[O]);return(0,u.useEffect)(function(){M()},[M]),(0,s.jsx)(s.Fragment,{children:T.length?(0,s.jsx)(F.Z,x()(x()({},p),{},{loading:a})):(0,s.jsx)(B.Z,{image:B.Z.PRESENTED_IMAGE_SIMPLE})})},V=(0,u.memo)(ia),X=t(58460),Y=t(63430),z=t(76509),o=function(){var r=(0,y.useDispatch)(),n=(0,y.useSelector)(function(d){return d.dash.tvlDistributionDataSource}),a=(0,u.useState)(!1),h=k()(a,2),O=h[0],T=h[1],p={data:n,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:210,height:210},M={data:n,angleField:"value",colorField:"type",radius:.9,legend:void 0,label:{content:"{name} {percentage}"},width:350,height:350},c=(0,u.useCallback)(function(d){switch(d){case"Noah Swap":return"Noash";case"Neutroswap":return"Neutro";case"Frogge.Finance":return"Frogge";case"EOSWAP Finance":return"EOSWAP";default:return d}},[]),g=(0,u.useCallback)(D()(P()().mark(function d(){var j,C,b,f,N;return P()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return j=function(){return T(!1)},T(!0),C=0,b=[],I.next=6,(0,S.Hj)((0,y.request)("https://api.llama.fi/protocols"),j);case 6:f=I.sent,f=f.filter(function(A){return A.chain==="EOS EVM"}),f=f.map(function(A){return C+=A.tvl,x()(x()({},A),{},{key:A.id})}),f.forEach(function(A){var na=c(A.name);b.push({type:na,value:A.tvl/C})}),N=G()().valueOf(),r(X.N.setDexDataSource(f)),r(X.N.setDexDataTime(N)),r(Z.N.setTvlDistributionDataSource(b)),localStorage.setItem("dexData",JSON.stringify({dexDataSource:f,dexDataTime:N})),localStorage.setItem("tvlDistributionData",JSON.stringify(b)),T(!1);case 17:case"end":return I.stop()}},d)})),[r,c]);return(0,u.useEffect)(function(){g()},[g]),(0,s.jsx)(z.X.Consumer,{children:function(j){var C=j.isMobile;return n.length?C?(0,s.jsx)(Y.Z,x()({loading:O},p)):(0,s.jsx)(Y.Z,x()({loading:O},M)):(0,s.jsx)(B.Z,{image:B.Z.PRESENTED_IMAGE_SIMPLE})}})},v=(0,u.memo)(o),i=function(){var r=(0,u.useState)(!1),n=k()(r,2),a=n[0],h=n[1],O=(0,y.useDispatch)(),T=(0,y.useSelector)(function(m){return m.dash.chainData}),p=(0,y.useSelector)(function(m){return m.dash.tvlHistoryDataSource}),M=(0,y.useSelector)(function(m){return m.dash.txDayTotal}),c=(0,y.useIntl)(),g=c.formatMessage({id:"dash.dailyTransactions"}),d=c.formatMessage({id:"dash.totalTransactions"}),j=c.formatMessage({id:"dash.averageTransactions"}),C=c.formatMessage({id:"dash.yesterdayTransactions"}),b=c.formatMessage({id:"dash.gasTracker"}),f=c.formatMessage({id:"dash.averageBlockTime"}),N=c.formatMessage({id:"dash.totalBlocks"}),oa=c.formatMessage({id:"dash.walletAddresses"}),I=c.formatMessage({id:"dash.second"}),A=c.formatMessage({id:"dash.totalValueLocked"}),na=c.formatMessage({id:"dash.change"}),ya=c.formatMessage({id:"dash.TvlDistribution"}),ua=(0,u.useCallback)(function(m){var U=/\d+\.\d+ Gwei/,K=/data-selector="tx_per_day">\s+(.+)\s+<span/,R=/data-selector="average-block-time">\s+(.+)\s+<\/span>/,Q=/data-selector="transaction-count">\s+(.+)\s+<\/span>/,H=/data-selector="block-count">\s+(.+)\s+<\/span>/,da=/data-selector="address-count">\s+(.+)\s+<\/span>/,va=U.exec(m),Sa=va?va[0]:"150.0 Gwei",fa=K.exec(m),Ea=fa?fa[1]:"0",ma=R.exec(m),ja=ma?ma[1].replace("second",I):"1 ".concat(I),ha=Q.exec(m),ba=ha?ha[1]:"0",pa=H.exec(m),Pa=pa?pa[1]:"0",ga=da.exec(m),Aa=ga?ga[1]:"0";return{gasTracker:Sa,dailyTransactions:Ea,averageBlockTime:ja,totalTransactions:ba,totalBlocks:Pa,walletAddresses:Aa}},[I]),ca=(0,u.useCallback)(D()(P()().mark(function m(){var U,K,R;return P()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return U=function(){return h(!1)},h(!0),H.next=4,(0,S.Hj)((0,y.request)("https://explorer.evm.eosnetwork.com",U));case 4:K=H.sent,R=ua(K),O(Z.N.setChainData(R)),localStorage.setItem("chainData",JSON.stringify(R)),h(!1);case 9:case"end":return H.stop()}},m)})),[O,ua]),Ta=(0,u.useMemo)(function(){if(!p.length)return 0;var m=p.length-1;return p[m].tvl*1e3},[p]),Da=(0,u.useMemo)(function(){if(!p.length)return 0;var m=p.length-1,U=p.length-2,K=p[m].tvl,R=p[U].tvl,Q=(K-R)/R*100;return Q},[p]);return(0,u.useEffect)(function(){ca()},[ca]),(0,s.jsxs)(aa._z,{className:"dash",ghost:!0,children:[(0,s.jsx)(E.Z,{loading:a,bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:g,chart:(0,s.jsx)(J,{}),footer:(0,s.jsxs)("div",{className:"flex justify-around",children:[(0,s.jsx)(w.Z,{value:T.totalTransactions,title:d,layout:"vertical"}),(0,s.jsx)(w.Z,{value:(Number(T.totalTransactions.replace(",",""))/M).toFixed(0),title:j,layout:"vertical"}),(0,s.jsx)(w.Z,{value:T.dailyTransactions,title:C,layout:"vertical"})]})}),(0,s.jsxs)(ea.Z,{gutter:8,children:[(0,s.jsx)(L.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,s.jsx)(E.Z,{loading:a,title:b,statistic:{value:T.gasTracker}})}),(0,s.jsx)(L.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,s.jsx)(E.Z,{loading:a,title:f,statistic:{value:T.averageBlockTime}})}),(0,s.jsx)(L.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,s.jsx)(E.Z,{loading:a,title:N,statistic:{value:T.totalBlocks}})}),(0,s.jsx)(L.Z,{lg:{span:"6"},md:{span:"12"},sm:{span:"12"},xs:{span:"12"},children:(0,s.jsx)(E.Z,{loading:a,title:oa,statistic:{value:T.walletAddresses}})})]}),(0,s.jsx)(E.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:"".concat(A," (USD)"),chart:(0,s.jsx)(V,{}),footer:(0,s.jsxs)("div",{className:"flex justify-around",children:[(0,s.jsx)(w.Z,{prefix:"$",value:Ta,title:A,layout:"vertical"}),(0,s.jsx)(w.Z,{value:Da,title:"".concat(na,"(24h)"),layout:"vertical",suffix:"%",precision:2})]})}),(0,s.jsx)(E.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:ya,chart:(0,s.jsx)(v,{})})]})},l=i},64119:function(la,W,t){t.d(W,{CE:function(){return ta},D0:function(){return B},Hj:function(){return sa},IU:function(){return ra},Mn:function(){return X},su:function(){return Y},zI:function(){return x}});var $=t(27424),P=t.n($),_=t(17061),D=t.n(_),q=t(18698),k=t.n(q),aa=t(17156),E=t.n(aa),w=t(85971),u=t(2453),ea=t(9669),L=t.n(ea),S=5;function Z(){var o=w.Z.getState().global.nodeConfig;return o.url}function y(o){return new Promise(function(v){return setTimeout(v,o)})}function ta(o,v){var i=v||"",l=o,e=Number(l)<1;if(typeof l=="number"&&(l=l.toString()),e){var r=/\d+\.0*\d{3}/,n=/0\.(0{4,})/,a=r.exec(l);if(l=a?a[0]:l,a=n.exec(l),a){var h=a[1].length;return i+l.replace(n,"0.0{"+h+"}")}return i+l}else return i+Number(l).toLocaleString()}function x(o){return F.apply(this,arguments)}function F(){return F=E()(D()().mark(function o(v){var i;return D()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v;case 3:return i=e.sent,e.abrupt("return",[null,i]);case 7:if(e.prev=7,e.t0=e.catch(0),!(e.t0 instanceof Error)){e.next=14;break}return console.log(e.t0),e.abrupt("return",[e.t0.message,null]);case 14:if(console.log(e.t0),k()(e.t0)!=="object"){e.next=19;break}return e.abrupt("return",[JSON.stringify(e.t0),null]);case 19:return e.abrupt("return",[e.t0,null]);case 20:case"end":return e.stop()}},o,null,[[0,7]])})),F.apply(this,arguments)}function B(o){return s.apply(this,arguments)}function s(){return s=E()(D()().mark(function o(v){var i;return D()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=Z(),e.next=3,x(L().post("".concat(i,"/v1/chain/get_account"),JSON.stringify(v)));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},o)})),s.apply(this,arguments)}function ra(o,v){return J.apply(this,arguments)}function J(){return J=E()(D()().mark(function o(v,i){var l;return D()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v;case 3:return l=r.sent,r.abrupt("return",l);case 7:if(r.prev=7,r.t0=r.catch(0),!(r.t0 instanceof Error)){r.next=15;break}throw console.log(r.t0),u.ZP.error({content:i||r.t0.message,duration:S}),r.t0;case 15:throw console.log(r.t0),k()(r.t0)==="object"?u.ZP.error({content:i||JSON.stringify(r.t0),duration:S}):u.ZP.error({content:i||r.t0,duration:S}),r.t0;case 18:case"end":return r.stop()}},o,null,[[0,7]])})),J.apply(this,arguments)}function sa(o,v,i){return G.apply(this,arguments)}function G(){return G=E()(D()().mark(function o(v,i,l){var e,r;return D()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=i!=null?i:function(){},a.prev=1,a.next=4,v;case 4:return r=a.sent,a.abrupt("return",r);case 8:if(a.prev=8,a.t0=a.catch(1),!(a.t0 instanceof Error)){a.next=17;break}throw console.log(a.t0),e(),u.ZP.error({content:l||a.t0.message,duration:S}),a.t0;case 17:throw console.log(a.t0),k()(a.t0)==="object"?u.ZP.error({content:l||JSON.stringify(a.t0),duration:S}):u.ZP.error({content:l||a.t0,duration:S}),e(),a.t0;case 21:case"end":return a.stop()}},o,null,[[1,8]])})),G.apply(this,arguments)}function ia(o,v,i){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime().mark(function o(v,i,l){var e;return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v;case 3:return e=n.sent,message.success({content:i||"Success"}),n.abrupt("return",e);case 8:if(n.prev=8,n.t0=n.catch(0),!(n.t0 instanceof Error)){n.next=16;break}throw console.log(n.t0),message.error({content:l||n.t0.message,duration:S}),n.t0;case 16:throw console.log(n.t0),_typeof(n.t0)==="object"?message.error({content:l||JSON.stringify(n.t0),duration:S}):message.error({content:l||n.t0,duration:S}),n.t0;case 19:case"end":return n.stop()}},o,null,[[0,8]])})),V.apply(this,arguments)}function X(){var o=navigator.userAgent,v=/mobile/i.test(o);return v}function Y(o){return z.apply(this,arguments)}function z(){return z=E()(D()().mark(function o(v){var i,l,e,r;return D()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=null,l=null,a.next=3,x(L().get("".concat(v,"/v1/chain/get_info"),{timeout:1e4}));case 3:return e=a.sent,r=P()(e,2),i=r[0],l=r[1],a.abrupt("return",[i,l]);case 8:case"end":return a.stop()}},o)})),z.apply(this,arguments)}}}]);
