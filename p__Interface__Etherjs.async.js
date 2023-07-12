"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6572],{38750:function(se,T,r){r.r(T),r.d(T,{default:function(){return w}});var _=r(51877),H=r(87659),t=r(91408),I=r(26713),L=r(99138),R=r(84243),S=r(32046),l=r(86494),d=r(29251),z=r(38197),v=r(2006),y=r(31886),O=r(16441),p=r(61744),Z=r(19485),G=r(94818),F=r(54442),e=r(86074),K=new R.R,V=function(){var x=(0,F.useSelector)(function(j){return j.chainList.chainSelect}),n=(0,G.VH)({chainId:Number(x.chainId)});return(0,e.jsx)(H._z,{ghost:!0,className:"interface",children:(0,e.jsxs)(I.Z,{className:"mb-[8px]",direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,e.jsx)(L.Z,{message:(0,e.jsx)("a",{target:"_blank",href:"https://ethers.org/",rel:"noreferrer",children:"https://ethers.org/"}),type:"info"}),(0,e.jsx)(t.K1,{title:"abiCoder.encode(types, values) => string<DataHexString>",func:K.encode.bind(K),desc:"",placeholder:'example: ["uint", "string"], [1234, "Hello World"]'}),(0,e.jsx)(t.K1,{title:"abiCoder.decode(types, data) => Result",func:K.decode.bind(K),placeholder:'example: ["uint"], "0x000000000000000000000000000000000000000000000000000000000000000c"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.id(text) => string<DataHexString<32>>",func:S.id.bind(l),placeholder:'example: "Hello World"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.toUtf8Bytes(text) => Uint8Array",func:d.Y0.bind(l),placeholder:'example: "hello world"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.keccak256(aBytesLike) => string<DataHexString<32>>",func:z.keccak256.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.ripemd160(aBytesLike) => string<DataHexString<20>>",func:v.bP.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.sha256(aBytesLike) => string<DataHexString<32>>",func:v.JQ.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.sha512(aBytesLike) => string<DataHexString<64>>",func:v.o.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.solidityPack(types, values) => string<DataHexString>",func:y.pack.bind(l),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(t.K1,{title:"ethers.utils.solidityKeccak256(types, values) => string<DataHexString<32>>",func:y.keccak256.bind(l),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(t.K1,{title:"ethers.utils.soliditySha256(types, values) => string<DataHexString<32>>",func:y.sha256.bind(l),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(t.K1,{title:"ethers.utils.hexZeroPad(aBytesLike, length) => string<DataHexString>",func:O.hexZeroPad.bind(l),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", 32'}),(0,e.jsx)(t.K1,{title:"ethers.utils.commify(value) => string",func:p.commify.bind(l),placeholder:'example: "-1000.3000"'}),(0,e.jsx)(t.K1,{title:'ethers.utils.formatUnits(value [, unit="ether"]) => string',func:p.formatUnits.bind(l),placeholder:'example: "1000000000000000000"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.formatEther(value) => string",func:p.formatEther.bind(l),placeholder:'example: "1000000000000000000"'}),(0,e.jsx)(t.K1,{title:'ethers.utils.parseUnits(value [, unit="ether"]) => BigNumber',func:p.parseUnits.bind(l),placeholder:'example: "1.0"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.parseEther(value) => BigNumber",func:p.parseEther.bind(l),placeholder:'example: "1.0"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.getAddress(address) => string<Address>",func:Z.getAddress.bind(l),placeholder:'example: "0x8ba1f109551bd432803012645ac136ddd64dba72"'}),(0,e.jsx)(t.K1,{title:"provider.getBalance(address [, blockTag = latest]) => Promise<BigNumber>",func:n.getBalance.bind(n),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getCode(address [, blockTag = latest]) => Promise<string<DataHexString>>",func:n.getCode.bind(n),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getStorageAt(addr, pos [, blockTag = latest]) => Promise<string<DataHexString>>",func:n.getStorageAt.bind(n),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", 0, "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getTransactionCount(address [, blockTag = latest ]) => Promise<number>",func:n.getTransactionCount.bind(n),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getBlock(block) => Promise<Block>",func:n.getBlock.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getBlockWithTransactions(block) => Promise<BlockWithTransactions>",func:n.getBlockWithTransactions.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getNetwork() => Promise<Network>",func:n.getNetwork.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getBlockNumber() => Promise<number>",func:n.getBlockNumber.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getTransaction(hash) => Promise<TransactionResponse>",func:n.getTransaction.bind(n),placeholder:'example: "0x5b73e239c55d790e3c9c3bbb84092652db01bb8dbf49ccc9e4a318470419d9a0"'}),(0,e.jsx)(t.K1,{title:"provider.getGasPrice() => Promise<BigNumber>",func:n.getGasPrice.bind(n),placeholder:'example: ""'})]})})},Q=V,k=r(31041),P=new R.R,X=function(){var x=(0,F.useSelector)(function(j){return j.chainList.chainSelect}),n=new k.Provider(x.rpcUrls[0],{name:x.chainName,chainId:Number(x.chainId)});return(0,e.jsx)(H._z,{ghost:!0,className:"interface",children:(0,e.jsxs)(I.Z,{className:"mb-[8px]",direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,e.jsx)(L.Z,{message:(0,e.jsx)("a",{target:"_blank",href:"https://era.zksync.io/docs/api/js",rel:"noreferrer",children:"https://era.zksync.io/docs/api/js"}),type:"info"}),(0,e.jsx)(t.K1,{title:"abiCoder.encode(types, values) => string<DataHexString>",func:P.encode.bind(P),desc:"",placeholder:'example: ["uint", "string"], [1234, "Hello World"]'}),(0,e.jsx)(t.K1,{title:"abiCoder.decode(types, data) => Result",func:P.decode.bind(P),placeholder:'example: ["uint"], "0x000000000000000000000000000000000000000000000000000000000000000c"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.id(text) => string<DataHexString<32>>",func:S.id.bind(l),placeholder:'example: "Hello World"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.toUtf8Bytes(text) => Uint8Array",func:d.Y0.bind(l),placeholder:'example: "hello world"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.keccak256(aBytesLike) => string<DataHexString<32>>",func:z.keccak256.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.ripemd160(aBytesLike) => string<DataHexString<20>>",func:v.bP.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.sha256(aBytesLike) => string<DataHexString<32>>",func:v.JQ.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.sha512(aBytesLike) => string<DataHexString<64>>",func:v.o.bind(l),placeholder:'example: "0x1234"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.solidityPack(types, values) => string<DataHexString>",func:y.pack.bind(l),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(t.K1,{title:"ethers.utils.solidityKeccak256(types, values) => string<DataHexString<32>>",func:y.keccak256.bind(l),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(t.K1,{title:"ethers.utils.soliditySha256(types, values) => string<DataHexString<32>>",func:y.sha256.bind(l),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(t.K1,{title:"ethers.utils.hexZeroPad(aBytesLike, length) => string<DataHexString>",func:O.hexZeroPad.bind(l),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", 32'}),(0,e.jsx)(t.K1,{title:"ethers.utils.commify(value) => string",func:p.commify.bind(l),placeholder:'example: "-1000.3000"'}),(0,e.jsx)(t.K1,{title:'ethers.utils.formatUnits(value [, unit="ether"]) => string',func:p.formatUnits.bind(l),placeholder:'example: "1000000000000000000"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.formatEther(value) => string",func:p.formatEther.bind(l),placeholder:'example: "1000000000000000000"'}),(0,e.jsx)(t.K1,{title:'ethers.utils.parseUnits(value [, unit="ether"]) => BigNumber',func:p.parseUnits.bind(l),placeholder:'example: "1.0"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.parseEther(value) => BigNumber",func:p.parseEther.bind(l),placeholder:'example: "1.0"'}),(0,e.jsx)(t.K1,{title:"ethers.utils.getAddress(address) => string<Address>",func:Z.getAddress.bind(l),placeholder:'example: "0x8ba1f109551bd432803012645ac136ddd64dba72"'}),(0,e.jsx)(t.K1,{title:"provider.getBalance(address [, blockTag = latest]) => Promise<BigNumber>",desc:"Returns the user's balance as a BigNumber object for an (optional) block tag and (optional) token.",func:n.getBalance.bind(n),placeholder:'example: "0x22Be0ee2b695E6Ecda145986c202Ee4310E4C3A6", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getAllAccountBalances(address [, blockTag = latest]) => Promise<object>",desc:"Returns all balances for confirmed tokens given by an account address.",func:n.getAllAccountBalances.bind(n),placeholder:'example: "0x22Be0ee2b695E6Ecda145986c202Ee4310E4C3A6", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getCode(address [, blockTag = latest]) => Promise<string<DataHexString>>",func:n.getCode.bind(n),placeholder:'example: "0x39E098A153Ad69834a9Dac32f0FCa92066aD03f4", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getStorageAt(addr, pos [, blockTag = latest]) => Promise<string<DataHexString>>",func:n.getStorageAt.bind(n),placeholder:'example: "0x39E098A153Ad69834a9Dac32f0FCa92066aD03f4", 0, "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getTransactionCount(address [, blockTag = latest ]) => Promise<number>",func:n.getTransactionCount.bind(n),placeholder:'example: "0x22Be0ee2b695E6Ecda145986c202Ee4310E4C3A6", "latest"'}),(0,e.jsx)(t.K1,{title:"provider.getBlock(block) => Promise<Block>",desc:"Returns block from the network, or false if there is no block.",func:n.getBlock.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getBlockDetails(block) => Promise<Block>",desc:"Returns additional zkSync-specific information about the L2 block.",func:n.getBlockDetails.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getBlockWithTransactions(block) => Promise<BlockWithTransactions>",desc:"Returns an array of TransactionResponse objects.",func:n.getBlockWithTransactions.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getNetwork() => Promise<Network>",func:n.getNetwork.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getBlockNumber() => Promise<number>",func:n.getBlockNumber.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getTransaction(hash) => Promise<TransactionResponse>",func:n.getTransaction.bind(n),placeholder:'example: "0x04c68bd0d3c6909a3ec2432a3481f00123f5cb583bdf5913d24c9651b5d2088d"'}),(0,e.jsx)(t.K1,{title:"provider.getConfirmedTokens(start, limit) => Promise<Token[]>",desc:"Returns [address, symbol, name, and decimal] information of all tokens within a range of ids given by parameters from and limit.",func:n.getConfirmedTokens.bind(n),placeholder:"example: 0, 255"}),(0,e.jsx)(t.K1,{title:"provider.getContractAccountInfo(address) => Promise<ContractAccountInfo>",desc:"Returns the version of the supported account abstraction and nonce ordering from a given contract address.",func:n.getContractAccountInfo.bind(n),placeholder:'example: "0x39E098A153Ad69834a9Dac32f0FCa92066aD03f4"'}),(0,e.jsx)(t.K1,{title:"provider.getDefaultBridgeAddresses() => Promise<object>",desc:"Returns the addresses of the default zkSync Era bridge contracts on both L1 and L2.",func:n.getDefaultBridgeAddresses.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getGasPrice() => Promise<BigNumber>",desc:"Returns an estimate (best guess) of the gas price to use in a transaction.",func:n.getGasPrice.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getL1BatchBlockRange(l1BatchNumber) => Promise<[number, number] | null>",desc:"Returns the range of blocks contained within a batch given by batch number.",func:n.getL1BatchBlockRange.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getL1BatchNumber(l1BatchNumber) => Promise<number>",desc:"Returns the latest L1 batch number.",func:n.getL1BatchNumber.bind(n),placeholder:"example: 100"}),(0,e.jsx)(t.K1,{title:"provider.getMainContractAddress() => Promise<Address>",desc:"Returns the main zkSync Era smart contract address.",func:n.getMainContractAddress.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.getTestnetPaymasterAddress() => Promise<Address | null>",desc:"Returns the testnet paymaster address if available, or null.",func:n.getTestnetPaymasterAddress.bind(n),placeholder:'example: ""'}),(0,e.jsx)(t.K1,{title:"provider.l1ChainId() => Promise<Address | null>",desc:"Returns the chain id of the underlying L1.",func:n.l1ChainId.bind(n),placeholder:'example: ""'})]})})},W=X,J=r(62435),Y=function(){var x=(0,F.useSelector)(function(j){return j.chainList.chainSelect}),n=(0,J.useCallback)(function(){switch(x.chainIdDec){case"324":return(0,e.jsx)(W,{});case"280":return(0,e.jsx)(W,{});default:return(0,e.jsx)(Q,{})}},[x]);return n()},w=Y},99138:function(se,T,r){r.d(T,{Z:function(){return ee}});var _=r(89739),H=r(4340),t=r(97937),I=r(21640),L=r(78860),R=r(94184),S=r.n(R),l=r(82225),d=r(62435),z=r(53124),v=r(5467),y=r(96159),O=r(15671),p=r(43144),Z=r(32531),G=r(73568),e=function(s){(0,Z.Z)(i,s);var a=(0,G.Z)(i);function i(){var o;return(0,O.Z)(this,i),o=a.apply(this,arguments),o.state={error:void 0,info:{componentStack:""}},o}return(0,p.Z)(i,[{key:"componentDidCatch",value:function(c,u){this.setState({error:c,info:u})}},{key:"render",value:function(){const{message:c,description:u,children:f}=this.props,{error:g,info:b}=this.state,h=b&&b.componentStack?b.componentStack:null,E=typeof c=="undefined"?(g||"").toString():c,C=typeof u=="undefined"?h:u;return g?d.createElement(ee,{type:"error",message:E,description:d.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},C)}):f}}]),i}(d.Component),K=r(67968),V=r(45503),Q=r(14747);const k=(s,a,i,o,c)=>({backgroundColor:s,border:`${o.lineWidth}px ${o.lineType} ${a}`,[`${c}-icon`]:{color:i}}),P=s=>{const{componentCls:a,motionDurationSlow:i,marginXS:o,marginSM:c,fontSize:u,fontSizeLG:f,lineHeight:g,borderRadiusLG:b,motionEaseInOutCirc:h,alertIconSizeLG:E,colorText:C,paddingContentVerticalSM:A,alertPaddingHorizontal:N,paddingMD:U,paddingContentHorizontalLG:q}=s;return{[a]:Object.assign(Object.assign({},(0,Q.Wf)(s)),{position:"relative",display:"flex",alignItems:"center",padding:`${A}px ${N}px`,wordWrap:"break-word",borderRadius:b,[`&${a}-rtl`]:{direction:"rtl"},[`${a}-content`]:{flex:1,minWidth:0},[`${a}-icon`]:{marginInlineEnd:o,lineHeight:0},["&-description"]:{display:"none",fontSize:u,lineHeight:g},"&-message":{color:C},[`&${a}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${i} ${h}, opacity ${i} ${h},
        padding-top ${i} ${h}, padding-bottom ${i} ${h},
        margin-bottom ${i} ${h}`},[`&${a}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${a}-with-description`]:{alignItems:"flex-start",paddingInline:q,paddingBlock:U,[`${a}-icon`]:{marginInlineEnd:c,fontSize:E,lineHeight:0},[`${a}-message`]:{display:"block",marginBottom:o,color:C,fontSize:f},[`${a}-description`]:{display:"block"}},[`${a}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},X=s=>{const{componentCls:a,colorSuccess:i,colorSuccessBorder:o,colorSuccessBg:c,colorWarning:u,colorWarningBorder:f,colorWarningBg:g,colorError:b,colorErrorBorder:h,colorErrorBg:E,colorInfo:C,colorInfoBorder:A,colorInfoBg:N}=s;return{[a]:{"&-success":k(c,o,i,s,a),"&-info":k(N,A,C,s,a),"&-warning":k(g,f,u,s,a),"&-error":Object.assign(Object.assign({},k(E,h,b,s,a)),{[`${a}-description > pre`]:{margin:0,padding:0}})}}},W=s=>{const{componentCls:a,iconCls:i,motionDurationMid:o,marginXS:c,fontSizeIcon:u,colorIcon:f,colorIconHover:g}=s;return{[a]:{["&-action"]:{marginInlineStart:c},[`${a}-close-icon`]:{marginInlineStart:c,padding:0,overflow:"hidden",fontSize:u,lineHeight:`${u}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${i}-close`]:{color:f,transition:`color ${o}`,"&:hover":{color:g}}},"&-close-text":{color:f,transition:`color ${o}`,"&:hover":{color:g}}}}},J=s=>[P(s),X(s),W(s)];var Y=(0,K.Z)("Alert",s=>{const{fontSizeHeading3:a}=s,i=(0,V.TS)(s,{alertIconSizeLG:a,alertPaddingHorizontal:12});return[J(i)]}),w=function(s,a){var i={};for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&a.indexOf(o)<0&&(i[o]=s[o]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(s);c<o.length;c++)a.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(s,o[c])&&(i[o[c]]=s[o[c]]);return i};const M={success:_.Z,info:L.Z,error:H.Z,warning:I.Z},x=s=>{const{icon:a,prefixCls:i,type:o}=s,c=M[o]||null;return a?(0,y.wm)(a,d.createElement("span",{className:`${i}-icon`},a),()=>({className:S()(`${i}-icon`,{[a.props.className]:a.props.className})})):d.createElement(c,{className:`${i}-icon`})},n=s=>{const{isClosable:a,closeText:i,prefixCls:o,closeIcon:c,handleClose:u}=s;return a?d.createElement("button",{type:"button",onClick:u,className:`${o}-close-icon`,tabIndex:0},i?d.createElement("span",{className:`${o}-close-text`},i):c):null},j=s=>{var{description:a,prefixCls:i,message:o,banner:c,className:u,rootClassName:f,style:g,onMouseEnter:b,onMouseLeave:h,onClick:E,afterClose:C,showIcon:A,closable:N,closeText:U,closeIcon:q=d.createElement(t.Z,null),action:te}=s,D=w(s,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[ne,oe]=d.useState(!1),le=d.useRef(),{getPrefixCls:ie,direction:ce}=d.useContext(z.E_),m=ie("alert",i),[de,ue]=Y(m),me=B=>{var $;oe(!0),($=D.onClose)===null||$===void 0||$.call(D,B)},pe=()=>{const{type:B}=D;return B!==void 0?B:c?"warning":"info"},ge=U?!0:N,re=pe(),ae=c&&A===void 0?!0:A,he=S()(m,`${m}-${re}`,{[`${m}-with-description`]:!!a,[`${m}-no-icon`]:!ae,[`${m}-banner`]:!!c,[`${m}-rtl`]:ce==="rtl"},u,f,ue),xe=(0,v.Z)(D);return de(d.createElement(l.ZP,{visible:!ne,motionName:`${m}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:B=>({maxHeight:B.offsetHeight}),onLeaveEnd:C},B=>{let{className:$,style:fe}=B;return d.createElement("div",Object.assign({ref:le,"data-show":!ne,className:S()(he,$),style:Object.assign(Object.assign({},g),fe),onMouseEnter:b,onMouseLeave:h,onClick:E,role:"alert"},xe),ae?d.createElement(x,{description:a,icon:D.icon,prefixCls:m,type:re}):null,d.createElement("div",{className:`${m}-content`},o?d.createElement("div",{className:`${m}-message`},o):null,a?d.createElement("div",{className:`${m}-description`},a):null),te?d.createElement("div",{className:`${m}-action`},te):null,d.createElement(n,{isClosable:!!ge,closeText:U,prefixCls:m,closeIcon:q,handleClose:me}))}))};j.ErrorBoundary=e;var ee=j}}]);
