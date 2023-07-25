"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1109],{49725:function(e,a,s){s.r(a);var t=s(27424),l=s.n(t),i=(s(13294),s(87659)),n=s(38345),o=s(6466),d=s(95689),r=s(54442),c=s(62435),x=s(33517),u=s(34041),y=s(64119),p=s(86074);a.default=function(){var e=(0,c.useReducer)((function(e){return!e}),!1)[1],a=(0,r.useSelector)((function(e){return e.analysis.analysisConfig})),s=(0,c.useState)(""),t=l()(s,2),f=t[0],j=t[1],v=(0,r.useSelector)((function(e){return e.analysis.aveDailyTx})),g=(0,r.useSelector)((function(e){return e.analysis.aveWeeklyTx})),h=(0,r.useSelector)((function(e){return e.analysis.aveMonthlyTx})),m=(0,r.useSelector)((function(e){return e.analysis.totalDays})),k=(0,r.useSelector)((function(e){return e.analysis.totalWeeks})),S=(0,r.useSelector)((function(e){return e.analysis.totalMonths})),Z=(0,r.useSelector)((function(e){return e.analysis.totalTx})),M=(0,r.useSelector)((function(e){return e.analysis.tokenPrice})),b=(0,r.useSelector)((function(e){return e.analysis.totalGasFee})),F=(0,r.useSelector)((function(e){return e.analysis.totalContracts})),N=(0,r.useIntl)(),B=N.formatMessage({id:"analysis.DailyTransactions"}),I=N.formatMessage({id:"analysis.WeeklyTransactions"}),T=N.formatMessage({id:"analysis.MonthlyTransactions"}),C=N.formatMessage({id:"analysis.TotalTransactions"}),D=N.formatMessage({id:"analysis.TotalDay"}),G=N.formatMessage({id:"analysis.TotalWeek"}),A=N.formatMessage({id:"analysis.TotalMonth"}),P=N.formatMessage({id:"analysis.AveDay"}),W=N.formatMessage({id:"analysis.AveWeek"}),w=N.formatMessage({id:"analysis.AveMonth"}),z=N.formatMessage({id:"analysis.TotalContract"}),R=N.formatMessage({id:"analysis.TotalGas"}),E=N.formatMessage({id:"analysis.DailyGasFee"}),L=N.formatMessage({id:"analysis.WeeklyGasFee"}),O=N.formatMessage({id:"analysis.MonthlyGasFee"}),U=N.formatMessage({id:"analysis.DailyGasFeeAccumulation"}),$=N.formatMessage({id:"analysis.SelectAddress"}),_=N.formatMessage({id:"analysis.TxSummary"}),q=(0,c.useCallback)((function(e){j(e)}),[]);return(0,p.jsxs)(i._z,{className:"analysis",ghost:!0,children:[(0,p.jsx)(x.L6,{}),(0,p.jsx)(x.h5,{tokenPrice:M,setCurrentAddress:j,forceUpdate:e}),(0,p.jsx)(n.Z,{title:(0,p.jsx)("span",{className:"font-bold",children:$}),children:(0,p.jsx)(u.Z,{value:f,style:{width:"100%",marginBlockEnd:8},size:"large",onChange:q,options:a.addressesStarkNet.map((function(e){return{value:e,label:(0,p.jsx)("span",{style:{fontSize:(0,y.Mn)()?"12px":"16px"},children:e})}}))})}),(0,p.jsx)(n.Z,{title:(0,p.jsx)("span",{className:"font-bold",children:_}),collapsible:!0,children:(0,p.jsx)(x.Zk,{address:f,tokenPrice:M})}),(0,p.jsx)(x.Gb,{address:f}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:B}),chart:(0,p.jsx)(x.ul,{address:f}),footer:(0,p.jsxs)("div",{className:"flex justify-around",children:[(0,p.jsx)(d.Z,{value:Z,title:C,layout:"vertical"}),(0,p.jsx)(d.Z,{value:m.toFixed(0),title:D,layout:"vertical"}),(0,p.jsx)(d.Z,{value:v.toFixed(2),title:P,layout:"vertical"}),(0,p.jsx)(d.Z,{value:F,title:z,layout:"vertical"})]})}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:I}),chart:(0,p.jsx)(x.h0,{address:f}),footer:(0,p.jsxs)("div",{className:"flex justify-around",children:[(0,p.jsx)(d.Z,{value:Z,title:C,layout:"vertical"}),(0,p.jsx)(d.Z,{value:k.toFixed(0),title:G,layout:"vertical"}),(0,p.jsx)(d.Z,{value:g.toFixed(2),title:W,layout:"vertical"})]})}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:T}),chart:(0,p.jsx)(x.eg,{address:f}),footer:(0,p.jsxs)("div",{className:"flex justify-around",children:[(0,p.jsx)(d.Z,{value:Z,title:C,layout:"vertical"}),(0,p.jsx)(d.Z,{value:S.toFixed(0),title:A,layout:"vertical"}),(0,p.jsx)(d.Z,{value:h.toFixed(2),title:w,layout:"vertical"})]})}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:E}),chart:(0,p.jsx)(x.R7,{address:f,tokenPrice:M}),footer:(0,p.jsxs)("div",{className:"flex justify-around",children:[(0,p.jsx)(d.Z,{value:b.toFixed(2),title:R,layout:"vertical"}),(0,p.jsx)(d.Z,{value:m.toFixed(0),title:D,layout:"vertical"}),(0,p.jsx)(d.Z,{value:m?(b/m).toFixed(2):0,title:P,layout:"vertical"})]})}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:U}),chart:(0,p.jsx)(x.el,{})}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:L}),chart:(0,p.jsx)(x.RB,{address:f,tokenPrice:M}),footer:(0,p.jsxs)("div",{className:"flex justify-around",children:[(0,p.jsx)(d.Z,{value:b.toFixed(2),title:R,layout:"vertical"}),(0,p.jsx)(d.Z,{value:k.toFixed(0),title:G,layout:"vertical"}),(0,p.jsx)(d.Z,{value:k?(b/k).toFixed(2):0,title:W,layout:"vertical"})]})}),(0,p.jsx)(o.Z,{bodyStyle:{paddingBlock:"8px",paddingInline:"12px"},headStyle:{paddingBlock:"8px",paddingInline:"12px"},title:(0,p.jsx)("span",{className:"font-bold",children:O}),chart:(0,p.jsx)(x.O$,{address:f,tokenPrice:M}),footer:(0,p.jsxs)("div",{className:"flex justify-around",children:[(0,p.jsx)(d.Z,{value:b.toFixed(2),title:R,layout:"vertical"}),(0,p.jsx)(d.Z,{value:S.toFixed(0),title:A,layout:"vertical"}),(0,p.jsx)(d.Z,{value:S?(b/S).toFixed(2):0,title:w,layout:"vertical"})]})})]})}},13294:function(){}}]);