"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4544],{23396:function(y,f,t){t.r(f);var l=t(51877),r=t(78565),o=t(58676),u=t(26713),i=t(84243),D=t(31886),d=t(86494),n=t(32046),e=t(86074),h=new i.R,M=function(){return(0,e.jsx)(r._z,{ghost:!0,className:"interface",children:(0,e.jsxs)(u.Z,{className:"mb-[8px]",direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,e.jsx)(o.K1,{title:"abi.encode",func:h.encode.bind(h),placeholder:'example: ["uint", "string"], [1234, "Hello World"]'}),(0,e.jsx)(o.K1,{title:"abi.encodePacked",func:D.pack.bind(d),placeholder:'example: ["int16", "uint48"], [-1, 12]'}),(0,e.jsx)(o.K1,{title:"abi.encodeWithSignature",special:"encodeWithSignature",placeholder:'example: "myMethod(uint256,string)", [123, "123"]'}),(0,e.jsx)(o.K1,{title:"keccak256",func:n.id.bind(d),placeholder:'example: "foo(uint256,address,string,uint256[2])"'}),(0,e.jsx)(o.K1,{title:"abi.encodeWithSelector",special:"encodeWithSelector",placeholder:'example: "0xe87082f1", ["string", "uint8"], ["abc", 33]'}),(0,e.jsx)(o.K1,{title:"abi.decode",special:"decode",placeholder:'example: "0x1200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007b", ["bytes1", "uint8"]'})]})})};f.default=M},86494:function(y,f,t){t.r(f),t.d(f,{AbiCoder:function(){return l.R},ConstructorFragment:function(){return r.Xg},ErrorFragment:function(){return r.IC},EventFragment:function(){return r.QV},FormatTypes:function(){return r.pc},Fragment:function(){return r.HY},FunctionFragment:function(){return r.YW},HDNode:function(){return s.HDNode},Indexed:function(){return u.Hk},Interface:function(){return u.vU},LogDescription:function(){return u.CC},Logger:function(){return U.Logger},ParamType:function(){return r._R},RLP:function(){return B},SigningKey:function(){return p.SigningKey},SupportedAlgorithm:function(){return W.p},TransactionDescription:function(){return u.vk},TransactionTypes:function(){return _.TransactionTypes},UnicodeNormalizationForm:function(){return c.Uj},Utf8ErrorFuncs:function(){return c.te},Utf8ErrorReason:function(){return c.Uw},_TypedDataEncoder:function(){return m.E},_fetchData:function(){return g._fetchData},_toEscapedUtf8String:function(){return c.U$},accessListify:function(){return _.accessListify},arrayify:function(){return n.arrayify},base58:function(){return d.Base58},base64:function(){return D},checkProperties:function(){return a.checkProperties},checkResultErrors:function(){return o.BR},commify:function(){return E.commify},computeAddress:function(){return _.computeAddress},computeHmac:function(){return P.Gy},computePublicKey:function(){return p.computePublicKey},concat:function(){return n.concat},deepCopy:function(){return a.deepCopy},defaultAbiCoder:function(){return l.$},defaultPath:function(){return s.defaultPath},defineReadOnly:function(){return a.defineReadOnly},dnsEncode:function(){return e.Kn},entropyToMnemonic:function(){return s.entropyToMnemonic},fetchJson:function(){return g.fetchJson},formatBytes32String:function(){return A.s},formatEther:function(){return E.formatEther},formatUnits:function(){return E.formatUnits},getAccountPath:function(){return s.getAccountPath},getAddress:function(){return i.getAddress},getContractAddress:function(){return i.getContractAddress},getCreate2Address:function(){return i.getCreate2Address},getIcapAddress:function(){return i.getIcapAddress},getJsonWalletAddress:function(){return T.Rb},getStatic:function(){return a.getStatic},hashMessage:function(){return h.r},hexConcat:function(){return n.hexConcat},hexDataLength:function(){return n.hexDataLength},hexDataSlice:function(){return n.hexDataSlice},hexStripZeros:function(){return n.hexStripZeros},hexValue:function(){return n.hexValue},hexZeroPad:function(){return n.hexZeroPad},hexlify:function(){return n.hexlify},id:function(){return M.id},isAddress:function(){return i.isAddress},isBytes:function(){return n.isBytes},isBytesLike:function(){return n.isBytesLike},isHexString:function(){return n.isHexString},isValidMnemonic:function(){return s.isValidMnemonic},isValidName:function(){return e.r1},joinSignature:function(){return n.joinSignature},keccak256:function(){return v.keccak256},mnemonicToEntropy:function(){return s.mnemonicToEntropy},mnemonicToSeed:function(){return s.mnemonicToSeed},namehash:function(){return e.VM},nameprep:function(){return R.Ll},parseBytes32String:function(){return A.F},parseEther:function(){return E.parseEther},parseTransaction:function(){return _.parse},parseUnits:function(){return E.parseUnits},poll:function(){return g.poll},randomBytes:function(){return K.O},recoverAddress:function(){return _.recoverAddress},recoverPublicKey:function(){return p.recoverPublicKey},resolveProperties:function(){return a.resolveProperties},ripemd160:function(){return P.bP},serializeTransaction:function(){return _.serialize},sha256:function(){return P.JQ},sha512:function(){return P.o},shallowCopy:function(){return a.shallowCopy},shuffled:function(){return L.y},solidityKeccak256:function(){return O.keccak256},solidityPack:function(){return O.pack},soliditySha256:function(){return O.sha256},splitSignature:function(){return n.splitSignature},stripZeros:function(){return n.stripZeros},toUtf8Bytes:function(){return c.Y0},toUtf8CodePoints:function(){return c.XL},toUtf8String:function(){return c.ZN},verifyMessage:function(){return C.verifyMessage},verifyTypedData:function(){return C.verifyTypedData},zeroPad:function(){return n.zeroPad}});var l=t(84243),r=t(11388),o=t(61184),u=t(8198),i=t(19485),D=t(4089),d=t(57727),n=t(16441),e=t(27586),h=t(93684),M=t(32046),m=t(67827),s=t(86507),T=t(67949),v=t(38197),U=t(1581),P=t(2006),O=t(31886),K=t(5634),L=t(52472),a=t(6881),B=t(59052),p=t(67669),R=t(35637),c=t(29251),A=t(86237),_=t(83875),E=t(35553),C=t(79911),g=t(37707),W=t(21261)}}]);