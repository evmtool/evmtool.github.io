"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8950],{11:function(W,B,c){c.r(B);var N=c(51877),s=c(58676),$=c(87659),I=c(26713),O=c(99138),i=c(94818),a=c(86074),j=function(){return(0,a.jsx)($._z,{ghost:!0,className:"interface",children:(0,a.jsxs)(I.Z,{className:"mb-[8px]",direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,a.jsx)(O.Z,{message:(0,a.jsx)("a",{target:"_blank",href:"https://wagmi.sh/",rel:"noreferrer",children:"https://wagmi.sh/"}),type:"info"}),(0,a.jsx)(s.K1,{title:"fetchBalance",func:i.EG,desc:"Action for fetching balance information for Ethereum or ERC-20 tokens.",placeholder:'example: {"address": "0x4712567f2EAef852a277a83405408459Bb8195af"}'}),(0,a.jsx)(s.K1,{title:"fetchBlockNumber",func:i.RQ,desc:"Action for fetching the current block number.",placeholder:'example: ""'}),(0,a.jsx)(s.K1,{title:"fetchEnsAddress",func:i.bh,desc:"Action for fetching address for ENS name.",placeholder:'example: {"name": "awkweb.eth"}'}),(0,a.jsx)(s.K1,{title:"fetchEnsAvatar",func:i.w6,desc:"Action for fetching avatar for ENS name.",placeholder:'example: {"name": "awkweb.eth"}'}),(0,a.jsx)(s.K1,{title:"fetchEnsName",func:i.Lk,desc:"Action for fetching ENS name for address.",placeholder:'example: {"address": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e"}'}),(0,a.jsx)(s.K1,{title:"fetchEnsResolver",func:i.Uj,desc:"Action for fetching the resolver for ENS name.",placeholder:'example: {"name": "awkweb.eth"}'}),(0,a.jsx)(s.K1,{title:"fetchFeeData",func:i.jS,desc:"Action for fetching network fee information.",placeholder:'example: {"chainId": 17777}'}),(0,a.jsx)(s.K1,{title:"fetchTransaction",func:i.KI,desc:"Action for fetching transaction by hash.",placeholder:'example: {"hash": "0xacb442788a39281a1761776481a3389e56e5c50e7dcde28fd2b90dbc40dcaffc"}'}),(0,a.jsx)(s.K1,{title:"fetchToken",func:i.EC,desc:"Action for fetching ERC-20 token information.",placeholder:'example: {"address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0"}'}),(0,a.jsx)(s.K1,{title:"getAccount",func:i.D0,desc:"Action for accessing account data and connection status.",placeholder:'example: ""'}),(0,a.jsx)(s.K1,{title:"getContract",func:i.uN,desc:"Action for creating a type-safe Contract instance.",placeholder:`example: {
  "address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0",
  "abi": [{
    "type": "function",
    "name": "balanceOf",
    "stateMutability": "view",
    "inputs": [{
      "name": "account",
      "type": "address"
    }],
    "outputs": [{
      "name": "",
      "type": "uint256"
    }]
  }]
}`}),(0,a.jsx)(s.K1,{title:"getNetwork",func:i.Hy,desc:"Action for accessing network data, such as current connected chain and connector chains.",placeholder:'example: ""'}),(0,a.jsx)(s.K1,{title:"getProvider",func:i.VH,desc:"Action for accessing Client's ethers Provider.",placeholder:'example: {"chainId": 17777}'}),(0,a.jsx)(s.K1,{title:"getWebSocketProvider",func:i.lG,desc:"Action for accessing the Client's ethers WebSocket Provider.",placeholder:'example: ""'}),(0,a.jsx)(s.K1,{title:"multicall",func:i.Ap,desc:"Action for calling multiple ethers Contract read-only methods via multicall3.",placeholder:`example: {
  "contracts": [{
    "address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0",
    "abi": [{
      "type": "function",
      "name": "balanceOf",
      "stateMutability": "view",
      "inputs": [{
        "name": "account",
        "type": "address"
      }],
      "outputs": [{
        "name": "",
        "type": "uint256"
      }]
    }],
    "functionName": "balanceOf",
    "args": ["0x3E2277bD9bBA5fB227C1b6CD87794B7e26F88F8d"]
  }, {
    "address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0",
    "abi": [{
      "type": "function",
      "name": "balanceOf",
      "stateMutability": "view",
      "inputs": [{
        "name": "account",
        "type": "address"
      }],
      "outputs": [{
        "name": "",
        "type": "uint256"
      }]
    }],
    "functionName": "balanceOf",
    "args": ["0xBae4469d54d1F6D95621672E820Ebf4e2288CCEa"]
  }]
}`}),(0,a.jsx)(s.K1,{title:"prepareSendTransaction",func:i.uw,desc:"Action for preparing a transaction to be sent via sendTransaction.",placeholder:'example: {"request": {"to": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", "value": "0x10000"}}'}),(0,a.jsx)(s.K1,{title:"prepareWriteContract",func:i.$q,desc:"Action for preparing a contract write to be sent via writeContract.",placeholder:`example: {
  "address": "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
  "abi": [{
    "name": "mint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [{
      "internalType": "uint32",
      "name": "tokenId",
      "type": "uint32"
    }],
    "outputs": []
  }],
  "functionName": "mint",
  "args": [69]
}`}),(0,a.jsx)(s.K1,{title:"readContract",func:i.a4,desc:"Action for calling an ethers Contract read-only method.",placeholder:`example: {
  "address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0",
  "abi": [{
    "type": "function",
    "name": "balanceOf",
    "stateMutability": "view",
    "inputs": [{
      "name": "account",
      "type": "address"
    }],
    "outputs": [{
      "name": "",
      "type": "uint256"
    }]
  }],
  "functionName": "balanceOf",
  "args": ["0x3E2277bD9bBA5fB227C1b6CD87794B7e26F88F8d"]
}`}),(0,a.jsx)(s.K1,{title:"readContracts",func:i.JH,desc:"Action for calling multiple ethers Contract read-only methods.",placeholder:`example: {
  "contracts": [{
    "address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0",
    "abi": [{
      "type": "function",
      "name": "balanceOf",
      "stateMutability": "view",
      "inputs": [{
        "name": "account",
        "type": "address"
      }],
      "outputs": [{
        "name": "",
        "type": "uint256"
      }]
    }],
    "functionName": "balanceOf",
    "args": ["0x3E2277bD9bBA5fB227C1b6CD87794B7e26F88F8d"]
  }, {
    "address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0",
    "abi": [{
      "type": "function",
      "name": "balanceOf",
      "stateMutability": "view",
      "inputs": [{
        "name": "account",
        "type": "address"
      }],
      "outputs": [{
        "name": "",
        "type": "uint256"
      }]
    }],
    "functionName": "balanceOf",
    "args": ["0xBae4469d54d1F6D95621672E820Ebf4e2288CCEa"]
  }]
}`}),(0,a.jsx)(s.K1,{title:"sendTransaction",func:i.T7,desc:"Action for sending a transaction.",placeholder:'example: {"mode": "recklesslyUnprepared", "request": {"to": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", "value": "0x10000"}}'}),(0,a.jsx)(s.K1,{title:"signMessage",func:i.l,desc:"Action for signing messages with connected account.",placeholder:'example: {"message": "Hello World"}'}),(0,a.jsx)(s.K1,{title:"signTypedData",func:i.xq,desc:"Action for signing typed data with connected account.",placeholder:`example: {
  "domain": {
    "name": "Ether Mail",
    "version": "1",
    "chainId": 15557,
    "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"
  },
  "types": {
    "Person": [{
      "name": "name",
      "type": "string"
    }, {
      "name": "wallet",
      "type": "address"
    }],
    "Mail": [{
      "name": "from",
      "type": "Person"
    }, {
      "name": "to",
      "type": "Person"
    }, {
      "name": "contents",
      "type": "string"
    }]
  },
  "value": {
    "from": {
      "name": "Cow",
      "wallet": "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"
    },
    "to": {
      "name": "Bob",
      "wallet": "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"
    },
    "contents": "Hello, Bob!"
  }
}`}),(0,a.jsx)(s.K1,{title:"switchNetwork",func:i.If,desc:"Action for switching networks with a connector.",placeholder:'example: {"chainId": 17777}'}),(0,a.jsx)(s.K1,{title:"waitForTransaction",func:i.Mn,desc:"Action for declaratively waiting until transaction is processed. Pairs well with writeContract and sendTransaction.",placeholder:'example: {"hash": "0x1b964e61bd8cf281d3866c2941621b62e25d3e2a00c569653521fd27ded15975"}'}),(0,a.jsx)(s.K1,{title:"writeContract",func:i.n9,desc:"Action for calling a Contract write method.",placeholder:`example: {
  "mode": "recklesslyUnprepared",
  "address": "0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2",
  "abi": [{
    "name": "mint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [{
      "internalType": "uint32",
      "name": "tokenId",
      "type": "uint32"
    }],
    "outputs": []
  }],
  "functionName": "mint",
  "args": [69]
}`})]})})};B.default=j},99138:function(W,B,c){c.d(B,{Z:function(){return w}});var N=c(89739),s=c(4340),$=c(97937),I=c(21640),O=c(78860),i=c(94184),a=c.n(i),j=c(82225),l=c(62435),H=c(53124),L=c(5467),z=c(96159),R=c(15671),Z=c(43144),k=c(32531),U=c(73568),G=function(n){(0,k.Z)(o,n);var e=(0,U.Z)(o);function o(){var t;return(0,R.Z)(this,o),t=e.apply(this,arguments),t.state={error:void 0,info:{componentStack:""}},t}return(0,Z.Z)(o,[{key:"componentDidCatch",value:function(r,d){this.setState({error:r,info:d})}},{key:"render",value:function(){const{message:r,description:d,children:u}=this.props,{error:m,info:g}=this.state,p=g&&g.componentStack?g.componentStack:null,b=typeof r=="undefined"?(m||"").toString():r,C=typeof d=="undefined"?p:d;return m?l.createElement(w,{type:"error",message:b,description:l.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},C)}):u}}]),o}(l.Component),X=c(67968),V=c(45503),J=c(14747);const A=(n,e,o,t,r)=>({backgroundColor:n,border:`${t.lineWidth}px ${t.lineType} ${e}`,[`${r}-icon`]:{color:o}}),Q=n=>{const{componentCls:e,motionDurationSlow:o,marginXS:t,marginSM:r,fontSize:d,fontSizeLG:u,lineHeight:m,borderRadiusLG:g,motionEaseInOutCirc:p,alertIconSizeLG:b,colorText:C,paddingContentVerticalSM:x,alertPaddingHorizontal:y,paddingMD:S,paddingContentHorizontalLG:D}=n;return{[e]:Object.assign(Object.assign({},(0,J.Wf)(n)),{position:"relative",display:"flex",alignItems:"center",padding:`${x}px ${y}px`,wordWrap:"break-word",borderRadius:g,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:t,lineHeight:0},["&-description"]:{display:"none",fontSize:d,lineHeight:m},"&-message":{color:C},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${o} ${p}, opacity ${o} ${p},
        padding-top ${o} ${p}, padding-bottom ${o} ${p},
        margin-bottom ${o} ${p}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",paddingInline:D,paddingBlock:S,[`${e}-icon`]:{marginInlineEnd:r,fontSize:b,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:t,color:C,fontSize:u},[`${e}-description`]:{display:"block"}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Y=n=>{const{componentCls:e,colorSuccess:o,colorSuccessBorder:t,colorSuccessBg:r,colorWarning:d,colorWarningBorder:u,colorWarningBg:m,colorError:g,colorErrorBorder:p,colorErrorBg:b,colorInfo:C,colorInfoBorder:x,colorInfoBg:y}=n;return{[e]:{"&-success":A(r,t,o,n,e),"&-info":A(y,x,C,n,e),"&-warning":A(m,u,d,n,e),"&-error":Object.assign(Object.assign({},A(b,p,g,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},q=n=>{const{componentCls:e,iconCls:o,motionDurationMid:t,marginXS:r,fontSizeIcon:d,colorIcon:u,colorIconHover:m}=n;return{[e]:{["&-action"]:{marginInlineStart:r},[`${e}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:d,lineHeight:`${d}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${o}-close`]:{color:u,transition:`color ${t}`,"&:hover":{color:m}}},"&-close-text":{color:u,transition:`color ${t}`,"&:hover":{color:m}}}}},_=n=>[Q(n),Y(n),q(n)];var ee=(0,X.Z)("Alert",n=>{const{fontSizeHeading3:e}=n,o=(0,V.TS)(n,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[_(o)]}),ne=function(n,e){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(o[t[r]]=n[t[r]]);return o};const te={success:N.Z,info:O.Z,error:s.Z,warning:I.Z},ae=n=>{const{icon:e,prefixCls:o,type:t}=n,r=te[t]||null;return e?(0,z.wm)(e,l.createElement("span",{className:`${o}-icon`},e),()=>({className:a()(`${o}-icon`,{[e.props.className]:e.props.className})})):l.createElement(r,{className:`${o}-icon`})},oe=n=>{const{isClosable:e,closeText:o,prefixCls:t,closeIcon:r,handleClose:d}=n;return e?l.createElement("button",{type:"button",onClick:d,className:`${t}-close-icon`,tabIndex:0},o?l.createElement("span",{className:`${t}-close-text`},o):r):null},M=n=>{var{description:e,prefixCls:o,message:t,banner:r,className:d,rootClassName:u,style:m,onMouseEnter:g,onMouseLeave:p,onClick:b,afterClose:C,showIcon:x,closable:y,closeText:S,closeIcon:D=l.createElement($.Z,null),action:P}=n,E=ne(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[K,ce]=l.useState(!1),re=l.useRef(),{getPrefixCls:se,direction:ie}=l.useContext(H.E_),f=se("alert",o),[le,de]=ee(f),fe=h=>{var v;ce(!0),(v=E.onClose)===null||v===void 0||v.call(E,h)},me=()=>{const{type:h}=E;return h!==void 0?h:r?"warning":"info"},pe=S?!0:y,T=me(),F=r&&x===void 0?!0:x,ue=a()(f,`${f}-${T}`,{[`${f}-with-description`]:!!e,[`${f}-no-icon`]:!F,[`${f}-banner`]:!!r,[`${f}-rtl`]:ie==="rtl"},d,u,de),ge=(0,L.Z)(E);return le(l.createElement(j.ZP,{visible:!K,motionName:`${f}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:h=>({maxHeight:h.offsetHeight}),onLeaveEnd:C},h=>{let{className:v,style:Ce}=h;return l.createElement("div",Object.assign({ref:re,"data-show":!K,className:a()(ue,v),style:Object.assign(Object.assign({},m),Ce),onMouseEnter:g,onMouseLeave:p,onClick:b,role:"alert"},ge),F?l.createElement(ae,{description:e,icon:E.icon,prefixCls:f,type:T}):null,l.createElement("div",{className:`${f}-content`},t?l.createElement("div",{className:`${f}-message`},t):null,e?l.createElement("div",{className:`${f}-description`},e):null),P?l.createElement("div",{className:`${f}-action`},P):null,l.createElement(oe,{isClosable:!!pe,closeText:S,prefixCls:f,closeIcon:D,handleClose:fe}))}))};M.ErrorBoundary=G;var w=M}}]);
