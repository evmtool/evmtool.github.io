(self.webpackChunk=self.webpackChunk||[]).push([[4543],{67950:function(B){function $(){try{return new RegExp("(?<!.)"),!0}catch(h){return!1}}var L=/-?(\b0[xX]([a-fA-F0-9]_?)*[a-fA-F0-9]|(\b[1-9](_?\d)*(\.((\d_?)*\d)?)?|\.\d(_?\d)*)([eE][-+]?\d(_?\d)*)?|\b0)(?!\w|\$)/;$()&&(L=L.source.replace(/\\b/g,"(?<!\\$)\\b"));var A={className:"number",begin:L,relevance:0},S={keyword:"assembly let function if switch case default for leave break continue u256 jump jumpi stop return revert selfdestruct invalid",built_in:"add sub mul div sdiv mod smod exp not lt gt slt sgt eq iszero and or xor byte shl shr sar addmod mulmod signextend keccak256 pc pop dup1 dup2 dup3 dup4 dup5 dup6 dup7 dup8 dup9 dup10 dup11 dup12 dup13 dup14 dup15 dup16 swap1 swap2 swap3 swap4 swap5 swap6 swap7 swap8 swap9 swap10 swap11 swap12 swap13 swap14 swap15 swap16 mload mstore mstore8 sload sstore msize gas address balance selfbalance caller callvalue calldataload calldatasize calldatacopy codesize codecopy extcodesize extcodecopy returndatasize returndatacopy extcodehash create create2 call callcode delegatecall staticcall log0 log1 log2 log3 log4 chainid origin gasprice basefee blockhash coinbase timestamp number difficulty prevrandao gaslimit",literal:"true false"},P={className:"string",begin:/\bhex'(([0-9a-fA-F]{2}_?)*[0-9a-fA-F]{2})?'/},K={className:"string",begin:/\bhex"(([0-9a-fA-F]{2}_?)*[0-9a-fA-F]{2})?"/};function z(h){return h.inherit(h.APOS_STRING_MODE,{begin:/(\bunicode)?'/})}function W(h){return h.inherit(h.QUOTE_STRING_MODE,{begin:/(\bunicode)?"/})}function U(h){var d=z(h),C=W(h),m=/[A-Za-z_$][A-Za-z_$0-9.]*/,j=h.inherit(h.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/,lexemes:m,keywords:S}),D={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,lexemes:m,keywords:S,contains:[h.C_LINE_COMMENT_MODE,h.C_BLOCK_COMMENT_MODE,d,C,A]},k={className:"operator",begin:/:=|->/};return{keywords:S,lexemes:m,contains:[d,C,P,K,h.C_LINE_COMMENT_MODE,h.C_BLOCK_COMMENT_MODE,A,k,{className:"function",lexemes:m,beginKeywords:"function",end:"{",excludeEnd:!0,contains:[j,D,h.C_LINE_COMMENT_MODE,h.C_BLOCK_COMMENT_MODE,k]}]}}B.exports={SOL_ASSEMBLY_KEYWORDS:S,baseAssembly:U,solAposStringMode:z,solQuoteStringMode:W,HEX_APOS_STRING_MODE:P,HEX_QUOTE_STRING_MODE:K,SOL_NUMBER:A,isNegativeLookbehindAvailable:$}},96988:function(B,$,L){const A=L(57454),S=L(10646);B.exports=function(P){P.registerLanguage("solidity",A),P.registerLanguage("yul",S)},B.exports.solidity=A,B.exports.yul=S},57454:function(B,$,L){const{baseAssembly:A,solAposStringMode:S,solQuoteStringMode:P,HEX_APOS_STRING_MODE:K,HEX_QUOTE_STRING_MODE:z,SOL_NUMBER:W,isNegativeLookbehindAvailable:U}=L(67950);function h(d){for(var C=S(d),m=P(d),j=[],D=0;D<32;D++)j[D]=D+1;var k=j.map(function(y){return y*8}),de=[];for(D=0;D<=80;D++)de[D]=D;var re=j.map(function(y){return"bytes"+y}),pe=re.join(" ")+" ",Te=k.map(function(y){return"uint"+y}),ve=Te.join(" ")+" ",se=k.map(function(y){return"int"+y}),Le=se.join(" ")+" ",ae=[].concat.apply([],k.map(function(y){return de.map(function(fe){return y+"x"+fe})})),ce=ae.map(function(y){return"fixed"+y}),_e=ce.join(" ")+" ",Ee=ae.map(function(y){return"ufixed"+y}),he=Ee.join(" ")+" ",oe={keyword:"var bool string int uint "+Le+ve+"byte bytes "+pe+"fixed ufixed "+_e+he+"enum struct mapping address new delete if else for while continue break return throw emit try catch revert unchecked _ function modifier event constructor fallback receive error virtual override constant immutable anonymous indexed storage memory calldata external public internal payable pure view private returns import from as using global pragma contract interface library is abstract type assembly",literal:"true false wei gwei szabo finney ether seconds minutes hours days weeks years",built_in:"self this super selfdestruct suicide now msg block tx abi blockhash gasleft assert require Error Panic sha3 sha256 keccak256 ripemd160 ecrecover addmod mulmod log0 log1 log2 log3 log4"},le={className:"operator",begin:/[+\-!~*\/%<>&^|=]/},R=/[A-Za-z_$][A-Za-z_$0-9]*/,be={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,lexemes:R,keywords:oe,contains:[d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE,C,m,W,"self"]},Me={begin:/\.\s*/,end:/[^A-Za-z0-9$_\.]/,excludeBegin:!0,excludeEnd:!0,keywords:{built_in:"gas value selector address length push pop send transfer call callcode delegatecall staticcall balance code codehash wrap unwrap name creationCode runtimeCode interfaceId min max"},relevance:2},Q=d.inherit(d.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/,lexemes:R,keywords:oe}),ee=["gas","value","salt"],Ce="("+ee.join("|")+")(?=:)",ue={className:"built_in",begin:(U()?"(?<!\\$)\\b":"\\b")+Ce};function X(y,fe){return{begin:(U()?"(?<!\\$)\\b":"\\b")+y+"\\.\\s*",end:/[^A-Za-z0-9$_\.]/,excludeBegin:!1,excludeEnd:!0,lexemes:R,keywords:{built_in:y+" "+fe},contains:[Me],relevance:10}}var ke={begin:/_/,end:/[^A-Za-z0-9$.]/,excludeBegin:!0,excludeEnd:!0,keywords:{built_in:"slot offset"},relevance:2},me={begin:/\./,end:/[^A-Za-z0-9$.]/,excludeBegin:!0,excludeEnd:!0,keywords:{built_in:"slot offset length address selector"},relevance:2},Oe=A(d),ne=d.inherit(Oe,{contains:Oe.contains.concat([me,ke])});return{aliases:["sol"],keywords:oe,lexemes:R,contains:[C,m,K,z,d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE,W,ue,le,{className:"function",lexemes:R,beginKeywords:"function modifier event constructor fallback receive error",end:/[{;]/,excludeEnd:!0,contains:[Q,be,ue,d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE],illegal:/%/},X("msg","gas value data sender sig"),X("block","blockhash coinbase difficulty prevrandao gaslimit basefee number timestamp chainid"),X("tx","gasprice origin"),X("abi","decode encode encodePacked encodeWithSelector encodeWithSignature encodeCall"),X("bytes","concat"),X("string","concat"),Me,{className:"class",lexemes:R,beginKeywords:"contract interface library",end:"{",excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"is",lexemes:R},Q,be,ue,d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE]},{lexemes:R,beginKeywords:"struct enum",end:"{",excludeEnd:!0,illegal:/[:"\[\]]/,contains:[Q,d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE]},{beginKeywords:"import",end:";",lexemes:R,keywords:"import from as",contains:[Q,C,m,K,z,d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE,le]},{beginKeywords:"using",end:";",lexemes:R,keywords:"using for global",contains:[Q,d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE,le]},{className:"meta",beginKeywords:"pragma",end:";",lexemes:R,keywords:{keyword:"pragma solidity experimental abicoder",built_in:"ABIEncoderV2 SMTChecker v1 v2"},contains:[d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE,d.inherit(C,{className:"meta-string"}),d.inherit(m,{className:"meta-string"})]},{beginKeywords:"assembly",end:/\b\B/,contains:[d.C_LINE_COMMENT_MODE,d.C_BLOCK_COMMENT_MODE,d.inherit(C,{className:"meta-string"}),d.inherit(m,{className:"meta-string"}),d.inherit(ne,{begin:"{",end:"}",endsParent:!0,contains:ne.contains.concat([d.inherit(ne,{begin:"{",end:"}",contains:ne.contains.concat(["self"])})])})]}],illegal:/#/}}B.exports=h},10646:function(B,$,L){const{SOL_ASSEMBLY_KEYWORDS:A,baseAssembly:S,isNegativeLookbehindAvailable:P}=L(67950);function K(z){var W={keyword:A.keyword+" object code data",built_in:A.built_in+" datasize dataoffset datacopy setimmutable loadimmutable linkersymbol memoryguard",literal:A.literal},U=/\bverbatim_[1-9]?[0-9]i_[1-9]?[0-9]o\b(?!\$)/;P()&&(U=U.source.replace(/\\b/,"(?<!\\$)\\b"));var h={className:"built_in",begin:U},d=S(z);return z.inherit(d,{keywords:W,contains:d.contains.concat([h])})}B.exports=K},33390:function(B){function $(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const i=e[n],u=typeof i;(u==="object"||u==="function")&&!Object.isFrozen(i)&&$(i)}),e}class L{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function A(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function S(e,...n){const i=Object.create(null);for(const u in e)i[u]=e[u];return n.forEach(function(u){for(const M in u)i[M]=u[M]}),i}const P="</span>",K=e=>!!e.scope,z=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const i=e.split(".");return[`${n}${i.shift()}`,...i.map((u,M)=>`${u}${"_".repeat(M+1)}`)].join(" ")}return`${n}${e}`};class W{constructor(n,i){this.buffer="",this.classPrefix=i.classPrefix,n.walk(this)}addText(n){this.buffer+=A(n)}openNode(n){if(!K(n))return;const i=z(n.scope,{prefix:this.classPrefix});this.span(i)}closeNode(n){K(n)&&(this.buffer+=P)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const U=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class h{constructor(){this.rootNode=U(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const i=U({scope:n});this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,i){return typeof i=="string"?n.addText(i):i.children&&(n.openNode(i),i.children.forEach(u=>this._walk(n,u)),n.closeNode(i)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(i=>typeof i=="string")?n.children=[n.children.join("")]:n.children.forEach(i=>{h._collapse(i)}))}}class d extends h{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,i){const u=n.root;i&&(u.scope=`language:${i}`),this.add(u)}toHTML(){return new W(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function C(e){return e?typeof e=="string"?e:e.source:null}function m(e){return k("(?=",e,")")}function j(e){return k("(?:",e,")*")}function D(e){return k("(?:",e,")?")}function k(...e){return e.map(i=>C(i)).join("")}function de(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function re(...e){return"("+(de(e).capture?"":"?:")+e.map(u=>C(u)).join("|")+")"}function pe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Te(e,n){const i=e&&e.exec(n);return i&&i.index===0}const ve=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function se(e,{joinWith:n}){let i=0;return e.map(u=>{i+=1;const M=i;let O=C(u),a="";for(;O.length>0;){const s=ve.exec(O);if(!s){a+=O;break}a+=O.substring(0,s.index),O=O.substring(s.index+s[0].length),s[0][0]==="\\"&&s[1]?a+="\\"+String(Number(s[1])+M):(a+=s[0],s[0]==="("&&i++)}return a}).map(u=>`(${u})`).join(n)}const Le=/\b\B/,ae="[a-zA-Z]\\w*",ce="[a-zA-Z_]\\w*",_e="\\b\\d+(\\.\\d+)?",Ee="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",he="\\b(0b[01]+)",oe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",le=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=k(n,/.*\b/,e.binary,/\b.*/)),S({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(i,u)=>{i.index!==0&&u.ignoreMatch()}},e)},R={begin:"\\\\[\\s\\S]",relevance:0},be={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[R]},Me={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[R]},Q={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ee=function(e,n,i={}){const u=S({scope:"comment",begin:e,end:n,contains:[]},i);u.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const M=re("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return u.contains.push({begin:k(/[ ]+/,"(",M,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),u},Ce=ee("//","$"),ue=ee("/\\*","\\*/"),X=ee("#","$"),ke={scope:"number",begin:_e,relevance:0},me={scope:"number",begin:Ee,relevance:0},Oe={scope:"number",begin:he,relevance:0},ne={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[R,{begin:/\[/,end:/\]/,relevance:0,contains:[R]}]}]},y={scope:"title",begin:ae,relevance:0},fe={scope:"title",begin:ce,relevance:0},rn={begin:"\\.\\s*"+ce,relevance:0};var Se=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Le,IDENT_RE:ae,UNDERSCORE_IDENT_RE:ce,NUMBER_RE:_e,C_NUMBER_RE:Ee,BINARY_NUMBER_RE:he,RE_STARTERS_RE:oe,SHEBANG:le,BACKSLASH_ESCAPE:R,APOS_STRING_MODE:be,QUOTE_STRING_MODE:Me,PHRASAL_WORDS_MODE:Q,COMMENT:ee,C_LINE_COMMENT_MODE:Ce,C_BLOCK_COMMENT_MODE:ue,HASH_COMMENT_MODE:X,NUMBER_MODE:ke,C_NUMBER_MODE:me,BINARY_NUMBER_MODE:Oe,REGEXP_MODE:ne,TITLE_MODE:y,UNDERSCORE_TITLE_MODE:fe,METHOD_GUARD:rn,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(n,i)=>{i.data._beginMatch=n[1]},"on:end":(n,i)=>{i.data._beginMatch!==n[1]&&i.ignoreMatch()}})}});function sn(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function an(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function cn(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=sn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function on(e,n){Array.isArray(e.illegal)&&(e.illegal=re(...e.illegal))}function ln(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function un(e,n){e.relevance===void 0&&(e.relevance=1)}const fn=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const i=Object.assign({},e);Object.keys(e).forEach(u=>{delete e[u]}),e.keywords=i.keywords,e.begin=k(i.beforeMatch,m(i.begin)),e.starts={relevance:0,contains:[Object.assign(i,{endsParent:!0})]},e.relevance=0,delete i.beforeMatch},gn=["of","and","for","in","not","or","if","then","parent","list","value"],dn="keyword";function Ke(e,n,i=dn){const u=Object.create(null);return typeof e=="string"?M(i,e.split(" ")):Array.isArray(e)?M(i,e):Object.keys(e).forEach(function(O){Object.assign(u,Ke(e[O],n,O))}),u;function M(O,a){n&&(a=a.map(s=>s.toLowerCase())),a.forEach(function(s){const l=s.split("|");u[l[0]]=[O,pn(l[0],l[1])]})}}function pn(e,n){return n?Number(n):_n(e)?0:1}function _n(e){return gn.includes(e.toLowerCase())}const ze={},J=e=>{console.error(e)},Ge=(e,...n)=>{console.log(`WARN: ${e}`,...n)},te=(e,n)=>{ze[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ze[`${e}/${n}`]=!0)},we=new Error;function Ye(e,n,{key:i}){let u=0;const M=e[i],O={},a={};for(let s=1;s<=n.length;s++)a[s+u]=M[s],O[s+u]=!0,u+=pe(n[s-1]);e[i]=a,e[i]._emit=O,e[i]._multi=!0}function En(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw J("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),we;if(typeof e.beginScope!="object"||e.beginScope===null)throw J("beginScope must be object"),we;Ye(e,e.begin,{key:"beginScope"}),e.begin=se(e.begin,{joinWith:""})}}function hn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw J("skip, excludeEnd, returnEnd not compatible with endScope: {}"),we;if(typeof e.endScope!="object"||e.endScope===null)throw J("endScope must be object"),we;Ye(e,e.end,{key:"endScope"}),e.end=se(e.end,{joinWith:""})}}function bn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Mn(e){bn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),En(e),hn(e)}function On(e){function n(a,s){return new RegExp(C(a),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(s?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(s,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,s]),this.matchAt+=pe(s)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const s=this.regexes.map(l=>l[1]);this.matcherRe=n(se(s,{joinWith:"|"}),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(s);if(!l)return null;const N=l.findIndex((ge,Ie)=>Ie>0&&ge!==void 0),w=this.matchIndexes[N];return l.splice(0,N),Object.assign(l,w)}}class u{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(s){if(this.multiRegexes[s])return this.multiRegexes[s];const l=new i;return this.rules.slice(s).forEach(([N,w])=>l.addRule(N,w)),l.compile(),this.multiRegexes[s]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(s,l){this.rules.push([s,l]),l.type==="begin"&&this.count++}exec(s){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let N=l.exec(s);if(this.resumingScanAtSamePosition()&&!(N&&N.index===this.lastIndex)){const w=this.getMatcher(0);w.lastIndex=this.lastIndex+1,N=w.exec(s)}return N&&(this.regexIndex+=N.position+1,this.regexIndex===this.count&&this.considerAll()),N}}function M(a){const s=new u;return a.contains.forEach(l=>s.addRule(l.begin,{rule:l,type:"begin"})),a.terminatorEnd&&s.addRule(a.terminatorEnd,{type:"end"}),a.illegal&&s.addRule(a.illegal,{type:"illegal"}),s}function O(a,s){const l=a;if(a.isCompiled)return l;[an,ln,Mn,fn].forEach(w=>w(a,s)),e.compilerExtensions.forEach(w=>w(a,s)),a.__beforeBegin=null,[cn,on,un].forEach(w=>w(a,s)),a.isCompiled=!0;let N=null;return typeof a.keywords=="object"&&a.keywords.$pattern&&(a.keywords=Object.assign({},a.keywords),N=a.keywords.$pattern,delete a.keywords.$pattern),N=N||/\w+/,a.keywords&&(a.keywords=Ke(a.keywords,e.case_insensitive)),l.keywordPatternRe=n(N,!0),s&&(a.begin||(a.begin=/\B|\b/),l.beginRe=n(l.begin),!a.end&&!a.endsWithParent&&(a.end=/\B|\b/),a.end&&(l.endRe=n(l.end)),l.terminatorEnd=C(l.end)||"",a.endsWithParent&&s.terminatorEnd&&(l.terminatorEnd+=(a.end?"|":"")+s.terminatorEnd)),a.illegal&&(l.illegalRe=n(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map(function(w){return Sn(w==="self"?a:w)})),a.contains.forEach(function(w){O(w,l)}),a.starts&&O(a.starts,s),l.matcher=M(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=S(e.classNameAliases||{}),O(e)}function We(e){return e?e.endsWithParent||We(e.starts):!1}function Sn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return S(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:We(e)?S(e,{starts:e.starts?S(e.starts):null}):Object.isFrozen(e)?S(e):e}var wn="11.8.0";class xn extends Error{constructor(n,i){super(n),this.name="HTMLInjectionError",this.html=i}}const De=A,Fe=S,Xe=Symbol("nomatch"),yn=7,Ze=function(e){const n=Object.create(null),i=Object.create(null),u=[];let M=!0;const O="Could not find the language '{}', did you forget to load/include a language module?",a={disableAutodetect:!0,name:"Plain text",contains:[]};let s={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:d};function l(t){return s.noHighlightRe.test(t)}function N(t){let o=t.className+" ";o+=t.parentNode?t.parentNode.className:"";const p=s.languageDetectRe.exec(o);if(p){const E=Z(p[1]);return E||(Ge(O.replace("{}",p[1])),Ge("Falling back to no-highlight mode for this block.",t)),E?p[1]:"no-highlight"}return o.split(/\s+/).find(E=>l(E)||Z(E))}function w(t,o,p){let E="",x="";typeof o=="object"?(E=t,p=o.ignoreIllegals,x=o.language):(te("10.7.0","highlight(lang, code, ...args) has been deprecated."),te("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),x=t,E=o),p===void 0&&(p=!0);const H={code:E,language:x};ye("before:highlight",H);const V=H.result?H.result:ge(H.language,H.code,p);return V.code=H.code,ye("after:highlight",V),V}function ge(t,o,p,E){const x=Object.create(null);function H(r,c){return r.keywords[c]}function V(){if(!f.keywords){T.addText(b);return}let r=0;f.keywordPatternRe.lastIndex=0;let c=f.keywordPatternRe.exec(b),g="";for(;c;){g+=b.substring(r,c.index);const _=Y.case_insensitive?c[0].toLowerCase():c[0],v=H(f,_);if(v){const[F,zn]=v;if(T.addText(g),g="",x[_]=(x[_]||0)+1,x[_]<=yn&&(Re+=zn),F.startsWith("_"))g+=c[0];else{const Gn=Y.classNameAliases[F]||F;G(c[0],Gn)}}else g+=c[0];r=f.keywordPatternRe.lastIndex,c=f.keywordPatternRe.exec(b)}g+=b.substring(r),T.addText(g)}function Ne(){if(b==="")return;let r=null;if(typeof f.subLanguage=="string"){if(!n[f.subLanguage]){T.addText(b);return}r=ge(f.subLanguage,b,!0,tn[f.subLanguage]),tn[f.subLanguage]=r._top}else r=Be(b,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(Re+=r.relevance),T.__addSublanguage(r._emitter,r.language)}function I(){f.subLanguage!=null?Ne():V(),b=""}function G(r,c){r!==""&&(T.startScope(c),T.addText(r),T.endScope())}function Je(r,c){let g=1;const _=c.length-1;for(;g<=_;){if(!r._emit[g]){g++;continue}const v=Y.classNameAliases[r[g]]||r[g],F=c[g];v?G(F,v):(b=F,V(),b=""),g++}}function qe(r,c){return r.scope&&typeof r.scope=="string"&&T.openNode(Y.classNameAliases[r.scope]||r.scope),r.beginScope&&(r.beginScope._wrap?(G(b,Y.classNameAliases[r.beginScope._wrap]||r.beginScope._wrap),b=""):r.beginScope._multi&&(Je(r.beginScope,c),b="")),f=Object.create(r,{parent:{value:f}}),f}function en(r,c,g){let _=Te(r.endRe,g);if(_){if(r["on:end"]){const v=new L(r);r["on:end"](c,v),v.isMatchIgnored&&(_=!1)}if(_){for(;r.endsParent&&r.parent;)r=r.parent;return r}}if(r.endsWithParent)return en(r.parent,c,g)}function Pn(r){return f.matcher.regexIndex===0?(b+=r[0],1):($e=!0,0)}function Un(r){const c=r[0],g=r.rule,_=new L(g),v=[g.__beforeBegin,g["on:begin"]];for(const F of v)if(F&&(F(r,_),_.isMatchIgnored))return Pn(c);return g.skip?b+=c:(g.excludeBegin&&(b+=c),I(),!g.returnBegin&&!g.excludeBegin&&(b=c)),qe(g,r),g.returnBegin?0:c.length}function Hn(r){const c=r[0],g=o.substring(r.index),_=en(f,r,g);if(!_)return Xe;const v=f;f.endScope&&f.endScope._wrap?(I(),G(c,f.endScope._wrap)):f.endScope&&f.endScope._multi?(I(),Je(f.endScope,r)):v.skip?b+=c:(v.returnEnd||v.excludeEnd||(b+=c),I(),v.excludeEnd&&(b=c));do f.scope&&T.closeNode(),!f.skip&&!f.subLanguage&&(Re+=f.relevance),f=f.parent;while(f!==_.parent);return _.starts&&qe(_.starts,r),v.returnEnd?0:c.length}function $n(){const r=[];for(let c=f;c!==Y;c=c.parent)c.scope&&r.unshift(c.scope);r.forEach(c=>T.openNode(c))}let Ae={};function nn(r,c){const g=c&&c[0];if(b+=r,g==null)return I(),0;if(Ae.type==="begin"&&c.type==="end"&&Ae.index===c.index&&g===""){if(b+=o.slice(c.index,c.index+1),!M){const _=new Error(`0 width match regex (${t})`);throw _.languageName=t,_.badRule=Ae.rule,_}return 1}if(Ae=c,c.type==="begin")return Un(c);if(c.type==="illegal"&&!p){const _=new Error('Illegal lexeme "'+g+'" for mode "'+(f.scope||"<unnamed>")+'"');throw _.mode=f,_}else if(c.type==="end"){const _=Hn(c);if(_!==Xe)return _}if(c.type==="illegal"&&g==="")return 1;if(He>1e5&&He>c.index*3)throw new Error("potential infinite loop, way more iterations than matches");return b+=g,g.length}const Y=Z(t);if(!Y)throw J(O.replace("{}",t)),new Error('Unknown language: "'+t+'"');const Kn=On(Y);let Ue="",f=E||Kn;const tn={},T=new s.__emitter(s);$n();let b="",Re=0,q=0,He=0,$e=!1;try{if(Y.__emitTokens)Y.__emitTokens(o,T);else{for(f.matcher.considerAll();;){He++,$e?$e=!1:f.matcher.considerAll(),f.matcher.lastIndex=q;const r=f.matcher.exec(o);if(!r)break;const c=o.substring(q,r.index),g=nn(c,r);q=r.index+g}nn(o.substring(q))}return T.finalize(),Ue=T.toHTML(),{language:t,value:Ue,relevance:Re,illegal:!1,_emitter:T,_top:f}}catch(r){if(r.message&&r.message.includes("Illegal"))return{language:t,value:De(o),illegal:!0,relevance:0,_illegalBy:{message:r.message,index:q,context:o.slice(q-100,q+100),mode:r.mode,resultSoFar:Ue},_emitter:T};if(M)return{language:t,value:De(o),illegal:!1,relevance:0,errorRaised:r,_emitter:T,_top:f};throw r}}function Ie(t){const o={value:De(t),illegal:!1,relevance:0,_top:a,_emitter:new s.__emitter(s)};return o._emitter.addText(t),o}function Be(t,o){o=o||s.languages||Object.keys(n);const p=Ie(t),E=o.filter(Z).filter(Qe).map(I=>ge(I,t,!1));E.unshift(p);const x=E.sort((I,G)=>{if(I.relevance!==G.relevance)return G.relevance-I.relevance;if(I.language&&G.language){if(Z(I.language).supersetOf===G.language)return 1;if(Z(G.language).supersetOf===I.language)return-1}return 0}),[H,V]=x,Ne=H;return Ne.secondBest=V,Ne}function Nn(t,o,p){const E=o&&i[o]||p;t.classList.add("hljs"),t.classList.add(`language-${E}`)}function Pe(t){let o=null;const p=N(t);if(l(p))return;if(ye("before:highlightElement",{el:t,language:p}),t.children.length>0&&(s.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(t)),s.throwUnescapedHTML))throw new xn("One of your code blocks includes unescaped HTML.",t.innerHTML);o=t;const E=o.textContent,x=p?w(E,{language:p,ignoreIllegals:!0}):Be(E);t.innerHTML=x.value,Nn(t,p,x.language),t.result={language:x.language,re:x.relevance,relevance:x.relevance},x.secondBest&&(t.secondBest={language:x.secondBest.language,relevance:x.secondBest.relevance}),ye("after:highlightElement",{el:t,result:x,text:E})}function An(t){s=Fe(s,t)}const Rn=()=>{xe(),te("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Tn(){xe(),te("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ve=!1;function xe(){if(document.readyState==="loading"){Ve=!0;return}document.querySelectorAll(s.cssSelector).forEach(Pe)}function vn(){Ve&&xe()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",vn,!1);function Ln(t,o){let p=null;try{p=o(e)}catch(E){if(J("Language definition for '{}' could not be registered.".replace("{}",t)),M)J(E);else throw E;p=a}p.name||(p.name=t),n[t]=p,p.rawDefinition=o.bind(null,e),p.aliases&&je(p.aliases,{languageName:t})}function Cn(t){delete n[t];for(const o of Object.keys(i))i[o]===t&&delete i[o]}function kn(){return Object.keys(n)}function Z(t){return t=(t||"").toLowerCase(),n[t]||n[i[t]]}function je(t,{languageName:o}){typeof t=="string"&&(t=[t]),t.forEach(p=>{i[p.toLowerCase()]=o})}function Qe(t){const o=Z(t);return o&&!o.disableAutodetect}function mn(t){t["before:highlightBlock"]&&!t["before:highlightElement"]&&(t["before:highlightElement"]=o=>{t["before:highlightBlock"](Object.assign({block:o.el},o))}),t["after:highlightBlock"]&&!t["after:highlightElement"]&&(t["after:highlightElement"]=o=>{t["after:highlightBlock"](Object.assign({block:o.el},o))})}function Dn(t){mn(t),u.push(t)}function In(t){const o=u.indexOf(t);o!==-1&&u.splice(o,1)}function ye(t,o){const p=t;u.forEach(function(E){E[p]&&E[p](o)})}function Bn(t){return te("10.7.0","highlightBlock will be removed entirely in v12.0"),te("10.7.0","Please use highlightElement now."),Pe(t)}Object.assign(e,{highlight:w,highlightAuto:Be,highlightAll:xe,highlightElement:Pe,highlightBlock:Bn,configure:An,initHighlighting:Rn,initHighlightingOnLoad:Tn,registerLanguage:Ln,unregisterLanguage:Cn,listLanguages:kn,getLanguage:Z,registerAliases:je,autoDetection:Qe,inherit:Fe,addPlugin:Dn,removePlugin:In}),e.debugMode=function(){M=!1},e.safeMode=function(){M=!0},e.versionString=wn,e.regex={concat:k,lookahead:m,either:re,optional:D,anyNumberOfTimes:j};for(const t in Se)typeof Se[t]=="object"&&$(Se[t]);return Object.assign(e,Se),e},ie=Ze({});ie.newInstance=()=>Ze({}),B.exports=ie,ie.HighlightJS=ie,ie.default=ie},30837:function(B,$,L){"use strict";var A=L(33390);$.Z=A}}]);
