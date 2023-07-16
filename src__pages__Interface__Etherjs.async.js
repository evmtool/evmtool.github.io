"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2621,7538],{60164:function(e,t,a){a.r(t);var i=a(33291),l=a(20975),r=a(54442),s=a(62435),n=a(86074);t.default=function(){var e=(0,r.useSelector)((function(e){return e.chainList.chainSelect}));return(0,s.useCallback)((function(){switch(e.chainIdDec){case"324":case"280":return(0,n.jsx)(l.default,{});default:return(0,n.jsx)(i.default,{})}}),[e])()}},33291:function(e,t,a){a.r(t);a(51877);var i=a(87659),l=a(91408),r=a(26713),s=a(99138),n=a(84243),c=a(32046),d=a(86494),o=a(29251),u=a(38197),x=a(2006),p=a(31886),h=a(16441),b=a(61744),g=a(19485),m=a(94818),f=a(54442),k=a(86074),j=new n.R;t.default=function(){var e=(0,f.useSelector)((function(e){return e.chainList.chainSelect})),t=(0,m.VH)({chainId:Number(e.chainId)});return(0,k.jsx)(i._z,{ghost:!0,className:"interface",children:(0,k.jsxs)(r.Z,{className:"mb-[8px]",direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,k.jsx)(s.Z,{message:(0,k.jsx)("a",{target:"_blank",href:"https://ethers.org/",rel:"noreferrer",children:"https://ethers.org/"}),type:"info"}),(0,k.jsx)(l.K1,{title:"abiCoder.encode(types, values) => string<DataHexString>",func:j.encode.bind(j),desc:"",placeholder:'example: ["uint", "string"], [1234, "Hello World"]'}),(0,k.jsx)(l.K1,{title:"abiCoder.decode(types, data) => Result",func:j.decode.bind(j),placeholder:'example: ["uint"], "0x000000000000000000000000000000000000000000000000000000000000000c"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.id(text) => string<DataHexString<32>>",func:c.id.bind(d),placeholder:'example: "Hello World"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.toUtf8Bytes(text) => Uint8Array",func:o.Y0.bind(d),placeholder:'example: "hello world"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.keccak256(aBytesLike) => string<DataHexString<32>>",func:u.keccak256.bind(d),placeholder:'example: "0x1234"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.ripemd160(aBytesLike) => string<DataHexString<20>>",func:x.bP.bind(d),placeholder:'example: "0x1234"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.sha256(aBytesLike) => string<DataHexString<32>>",func:x.JQ.bind(d),placeholder:'example: "0x1234"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.sha512(aBytesLike) => string<DataHexString<64>>",func:x.o.bind(d),placeholder:'example: "0x1234"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.solidityPack(types, values) => string<DataHexString>",func:p.pack.bind(d),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,k.jsx)(l.K1,{title:"ethers.utils.solidityKeccak256(types, values) => string<DataHexString<32>>",func:p.keccak256.bind(d),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,k.jsx)(l.K1,{title:"ethers.utils.soliditySha256(types, values) => string<DataHexString<32>>",func:p.sha256.bind(d),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,k.jsx)(l.K1,{title:"ethers.utils.hexZeroPad(aBytesLike, length) => string<DataHexString>",func:h.hexZeroPad.bind(d),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", 32'}),(0,k.jsx)(l.K1,{title:"ethers.utils.commify(value) => string",func:b.commify.bind(d),placeholder:'example: "-1000.3000"'}),(0,k.jsx)(l.K1,{title:'ethers.utils.formatUnits(value [, unit="ether"]) => string',func:b.formatUnits.bind(d),placeholder:'example: "1000000000000000000"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.formatEther(value) => string",func:b.formatEther.bind(d),placeholder:'example: "1000000000000000000"'}),(0,k.jsx)(l.K1,{title:'ethers.utils.parseUnits(value [, unit="ether"]) => BigNumber',func:b.parseUnits.bind(d),placeholder:'example: "1.0"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.parseEther(value) => BigNumber",func:b.parseEther.bind(d),placeholder:'example: "1.0"'}),(0,k.jsx)(l.K1,{title:"ethers.utils.getAddress(address) => string<Address>",func:g.getAddress.bind(d),placeholder:'example: "0x8ba1f109551bd432803012645ac136ddd64dba72"'}),(0,k.jsx)(l.K1,{title:"provider.getBalance(address [, blockTag = latest]) => Promise<BigNumber>",func:t.getBalance.bind(t),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", "latest"'}),(0,k.jsx)(l.K1,{title:"provider.getCode(address [, blockTag = latest]) => Promise<string<DataHexString>>",func:t.getCode.bind(t),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", "latest"'}),(0,k.jsx)(l.K1,{title:"provider.getStorageAt(addr, pos [, blockTag = latest]) => Promise<string<DataHexString>>",func:t.getStorageAt.bind(t),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", 0, "latest"'}),(0,k.jsx)(l.K1,{title:"provider.getTransactionCount(address [, blockTag = latest ]) => Promise<number>",func:t.getTransactionCount.bind(t),placeholder:'example: "0x41a75618D89B1404860F43ae18C21F5E8eEAbB3E", "latest"'}),(0,k.jsx)(l.K1,{title:"provider.getBlock(block) => Promise<Block>",func:t.getBlock.bind(t),placeholder:"example: 100"}),(0,k.jsx)(l.K1,{title:"provider.getBlockWithTransactions(block) => Promise<BlockWithTransactions>",func:t.getBlockWithTransactions.bind(t),placeholder:"example: 100"}),(0,k.jsx)(l.K1,{title:"provider.getNetwork() => Promise<Network>",func:t.getNetwork.bind(t),placeholder:'example: ""'}),(0,k.jsx)(l.K1,{title:"provider.getBlockNumber() => Promise<number>",func:t.getBlockNumber.bind(t),placeholder:'example: ""'}),(0,k.jsx)(l.K1,{title:"provider.getTransaction(hash) => Promise<TransactionResponse>",func:t.getTransaction.bind(t),placeholder:'example: "0x5b73e239c55d790e3c9c3bbb84092652db01bb8dbf49ccc9e4a318470419d9a0"'}),(0,k.jsx)(l.K1,{title:"provider.getGasPrice() => Promise<BigNumber>",func:t.getGasPrice.bind(t),placeholder:'example: ""'})]})})}}}]);