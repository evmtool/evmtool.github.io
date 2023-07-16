(self.webpackChunk=self.webpackChunk||[]).push([[6962],{69716:function(t,e,n){"use strict";n.d(e,{C:function(){return S},Z:function(){return _}});var r=n(27424),a=n.n(r),s=n(18698),i=n.n(s),u=n(17061),c=n.n(u),o=n(17156),l=n.n(o),p=n(56690),h=n.n(p),f=n(89728),b=n.n(f),k=n(85971),x=n(2507),y=n(36154),v=n(66575),d=function(){function t(){h()(this,t),this.transport=new v.Z,this.link=null,this.identity=null,this.session=null,this.appName="dapp",this.logined=!1,this.api={chain:null,history:null},this.try=3,this.delay=2e3}var e,n,r,s,u,o,p,f,d,g,w,m,S,_,N,W;return b()(t,[{key:"sleep",value:(W=l()(c()().mark((function t(e){return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)}))),function(t){return W.apply(this,arguments)})},{key:"check",value:function(){return!!this.logined}},{key:"awaitWrap",value:(N=l()(c()().mark((function t(e){return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.then((function(t){return[null,t]})).catch((function(t){return t instanceof Error?(console.log(t.message),[t.message,null]):t.hasOwnProperty("type")?(console.log(t),[t.message,null]):(console.log(t),"object"===i()(t)?[JSON.stringify(t),null]:[t,null])})));case 1:case"end":return t.stop()}}),t)}))),function(t){return N.apply(this,arguments)})},{key:"isJSON",value:function(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!==i()(e)||!e)}catch(t){return!1}}},{key:"login",value:function(){return this.awaitWrap(this.link.login(this.appName))}},{key:"restoreSession",value:function(){return this.awaitWrap(this.link.restoreSession(this.appName))}},{key:"init",value:(_=l()(c()().mark((function t(e){var n,r,s,i,u,o,l,p,h;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,r=null,s=k.Z.getState().global.nodeConfig,this.link=new y.ZP({transport:this.transport,chains:[{chainId:s?s.chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",nodeUrl:s?s.url:"https://api-mainnet.starteos.io"}]}),void 0!==e&&(this.appName=e),t.next=6,this.restoreSession();case 6:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=19;break}return console.log("login pass"),this.logined=!0,this.session=r,this.api.chain=this.session.client.v1.chain,this.api.history=this.session.client.v1.history,o={name:this.session.auth.actor.toString(),permissions:this.session.auth.permission.toString(),publicKey:this.session.publicKey.toString()},k.Z.dispatch(x.N.setAccount(o)),t.abrupt("return",[n,o]);case 19:return t.next=21,this.login();case 21:if(l=t.sent,p=a()(l,2),n=p[0],!(r=p[1])){t.next=38;break}return console.log("login pass"),this.logined=!0,this.identity=r,this.session=this.identity.session,this.api.chain=this.session.client.v1.chain,this.api.history=this.session.client.v1.history,h={name:this.session.auth.actor.toString(),permissions:this.session.auth.permission.toString(),publicKey:this.session.publicKey.toString()},k.Z.dispatch(x.N.setAccount(h)),this.link.storeSession(this.session),t.abrupt("return",[n,h]);case 38:console.log("login fail");case 39:return t.abrupt("return",[n,r]);case 40:case"end":return t.stop()}}),t,this)}))),function(t){return _.apply(this,arguments)})},{key:"transact",value:(S=l()(c()().mark((function t(e){var n,r,s,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.check()){t.next=2;break}return t.abrupt("return",["no connect and login",null]);case 2:return n=null,r=null,t.next=5,this.awaitWrap(this.session.transact(e,{blocksBehind:3,expireSeconds:30}));case 5:if(s=t.sent,i=a()(s,2),n=i[0],r=i[1],!(n&&this.isJSON(n)&&JSON.parse(n).hasOwnProperty("error"))){t.next=11;break}return t.abrupt("return",[JSON.parse(n).error.details[0].message,r]);case 11:return t.abrupt("return",[n,r]);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)})},{key:"getTableRows",value:(m=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_table_rows(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"abiBinToJson",value:(w=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/abi_bin_to_json",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return w.apply(this,arguments)})},{key:"abiJsonToBin",value:(g=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/abi_json_to_bin",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"getAbi",value:(d=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_abi(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"getAccount",value:(f=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_account(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"getBlockHeaderState",value:(p=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_block_header_state(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"getBlock",value:(o=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_block(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"getCode",value:(u=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/get_code",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"getCodeHash",value:(s=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/get_code_hash",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"getCurrencyBalance",value:(r=l()(c()().mark((function t(e,n,r){var s,i,u,o,l;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=null,i=null,u=0;case 2:if(!(u<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_currency_balance(e,n,r));case 5:if(o=t.sent,l=a()(o,2),s=l[0],!(i=l[1])){t.next=13;break}return t.abrupt("return",[s,i]);case 13:return t.next=15,this.sleep(this.delay);case 15:u++,t.next=2;break;case 18:return t.abrupt("return",[s,i]);case 19:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return r.apply(this,arguments)})},{key:"getInfo",value:(n=l()(c()().mark((function t(){var e,n,r,s,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=null,n=null,r=0;case 2:if(!(r<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_info());case 5:if(s=t.sent,i=a()(s,2),e=i[0],!(n=i[1])){t.next=13;break}return t.abrupt("return",[e,n]);case 13:return t.next=15,this.sleep(this.delay);case 15:r++,t.next=2;break;case 18:return t.abrupt("return",[e,n]);case 19:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"getProducerSchedule",value:(e=l()(c()().mark((function t(){var e,n,r,s,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=null,n=null,r=0;case 2:if(!(r<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_producer_schedule());case 5:if(s=t.sent,i=a()(s,2),e=i[0],!(n=i[1])){t.next=13;break}return t.abrupt("return",[e,n]);case 13:return t.next=15,this.sleep(this.delay);case 15:r++,t.next=2;break;case 18:return t.abrupt("return",[e,n]);case 19:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}(),g=new d,w=JSON.parse(localStorage.getItem("chainSelect")),m=function(){function t(){h()(this,t),this.transport=new v.Z,this.link=null,this.identity=null,this.session=null,this.appName="dapp",this.logined=!1,this.api={chain:null,history:null},this.try=3,this.delay=2e3}var e,n,r,s,u,o,p,f,d,g,m,S,_,N,W,O;return b()(t,[{key:"sleep",value:(O=l()(c()().mark((function t(e){return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)}))),function(t){return O.apply(this,arguments)})},{key:"check",value:function(){return!!this.logined}},{key:"awaitWrap",value:(W=l()(c()().mark((function t(e){return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.then((function(t){return[null,t]})).catch((function(t){return t instanceof Error?(console.log(t.message),[t.message,null]):t.hasOwnProperty("type")?(console.log(t),[t.message,null]):(console.log(t),"object"===i()(t)?[JSON.stringify(t),null]:[t,null])})));case 1:case"end":return t.stop()}}),t)}))),function(t){return W.apply(this,arguments)})},{key:"isJSON",value:function(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!==i()(e)||!e)}catch(t){return!1}}},{key:"login",value:function(){return this.awaitWrap(this.link.login(this.appName))}},{key:"restoreSession",value:function(){return this.awaitWrap(this.link.restoreSession(this.appName))}},{key:"init",value:(N=l()(c()().mark((function t(e){var n,r,s,i,u,o,l,p,h,f,b=arguments;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(b.length>1&&void 0!==b[1])||b[1],r=null,s=null,i=k.Z.getState().global.telosNodeConfig,this.link=new y.ZP({transport:this.transport,chains:[{chainId:i?i.chainId:"4667b205c6838ef70ff7988f6e8257e8be0e1284a2f59699054a018f743b1d11",nodeUrl:i?i.url:"https://mainnet.telos.net"}]}),w&&"41"===w.chainIdDec&&(this.link=new y.ZP({transport:this.transport,chains:[{chainId:"1eaa0824707c8c16bd25145493bf062aecddfeb56c736f6ba6397f3195f33c9f",nodeUrl:"https://testnet.telos.net"}]})),void 0!==e&&(this.appName=e),n){t.next=10;break}return this.api.chain=this.link.client.v1.chain,this.api.history=this.link.client.v1.history,t.abrupt("return",[r,s]);case 10:return t.next=12,this.restoreSession();case 12:if(u=t.sent,o=a()(u,2),r=o[0],!(s=o[1])){t.next=25;break}return console.log("login pass"),this.logined=!0,this.session=s,this.api.chain=this.session.client.v1.chain,this.api.history=this.session.client.v1.history,l={name:this.session.auth.actor.toString(),permissions:this.session.auth.permission.toString(),publicKey:this.session.publicKey.toString()},k.Z.dispatch(x.N.setAccount(l)),t.abrupt("return",[r,l]);case 25:return t.next=27,this.login();case 27:if(p=t.sent,h=a()(p,2),r=h[0],!(s=h[1])){t.next=44;break}return console.log("login pass"),this.logined=!0,this.identity=s,this.session=this.identity.session,this.api.chain=this.session.client.v1.chain,this.api.history=this.session.client.v1.history,f={name:this.session.auth.actor.toString(),permissions:this.session.auth.permission.toString(),publicKey:this.session.publicKey.toString()},k.Z.dispatch(x.N.setAccount(f)),this.link.storeSession(this.session),t.abrupt("return",[r,f]);case 44:console.log("login fail");case 45:return t.abrupt("return",[r,s]);case 46:case"end":return t.stop()}}),t,this)}))),function(t){return N.apply(this,arguments)})},{key:"transact",value:(_=l()(c()().mark((function t(e){var n,r,s,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.check()){t.next=2;break}return t.abrupt("return",["no connect and login",null]);case 2:return n=null,r=null,t.next=5,this.awaitWrap(this.session.transact(e,{blocksBehind:3,expireSeconds:30}));case 5:if(s=t.sent,i=a()(s,2),n=i[0],r=i[1],!(n&&this.isJSON(n)&&JSON.parse(n).hasOwnProperty("error"))){t.next=11;break}return t.abrupt("return",[JSON.parse(n).error.details[0].message,r]);case 11:return t.abrupt("return",[n,r]);case 12:case"end":return t.stop()}}),t,this)}))),function(t){return _.apply(this,arguments)})},{key:"getTableRows",value:(S=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_table_rows(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)})},{key:"abiBinToJson",value:(m=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/abi_bin_to_json",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"abiJsonToBin",value:(g=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/abi_json_to_bin",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"getAbi",value:(d=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_abi(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"getAccount",value:(f=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_account(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"getBlockHeaderState",value:(p=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_block_header_state(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"getBlock",value:(o=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_block(e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"getCode",value:(u=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/get_code",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})},{key:"getCodeHash",value:(s=l()(c()().mark((function t(e){var n,r,s,i,u;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=null,r=null,s=0;case 2:if(!(s<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.call("/v1/chain/get_code_hash",e));case 5:if(i=t.sent,u=a()(i,2),n=u[0],!(r=u[1])){t.next=13;break}return t.abrupt("return",[n,r]);case 13:return t.next=15,this.sleep(this.delay);case 15:s++,t.next=2;break;case 18:return t.abrupt("return",[n,r]);case 19:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"getCurrencyBalance",value:(r=l()(c()().mark((function t(e,n,r){var s,i,u,o,l;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=null,i=null,u=0;case 2:if(!(u<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_currency_balance(e,n,r));case 5:if(o=t.sent,l=a()(o,2),s=l[0],!(i=l[1])){t.next=13;break}return t.abrupt("return",[s,i]);case 13:return t.next=15,this.sleep(this.delay);case 15:u++,t.next=2;break;case 18:return t.abrupt("return",[s,i]);case 19:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return r.apply(this,arguments)})},{key:"getInfo",value:(n=l()(c()().mark((function t(){var e,n,r,s,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=null,n=null,r=0;case 2:if(!(r<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_info());case 5:if(s=t.sent,i=a()(s,2),e=i[0],!(n=i[1])){t.next=13;break}return t.abrupt("return",[e,n]);case 13:return t.next=15,this.sleep(this.delay);case 15:r++,t.next=2;break;case 18:return t.abrupt("return",[e,n]);case 19:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"getProducerSchedule",value:(e=l()(c()().mark((function t(){var e,n,r,s,i;return c()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=null,n=null,r=0;case 2:if(!(r<this.try)){t.next=18;break}return t.next=5,this.awaitWrap(this.api.chain.get_producer_schedule());case 5:if(s=t.sent,i=a()(s,2),e=i[0],!(n=i[1])){t.next=13;break}return t.abrupt("return",[e,n]);case 13:return t.next=15,this.sleep(this.delay);case 15:r++,t.next=2;break;case 18:return t.abrupt("return",[e,n]);case 19:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}(),S=new m,_=g},85971:function(t,e,n){"use strict";var r=(0,n(54442).getDvaApp)()._store;e.Z=r},64119:function(t,e,n){"use strict";n.d(e,{CE:function(){return x},D0:function(){return d},Hj:function(){return S},IU:function(){return w},Mn:function(){return N},pM:function(){return J},su:function(){return W},zI:function(){return y}});var r=n(27424),a=n.n(r),s=n(17061),i=n.n(s),u=n(18698),c=n.n(u),o=n(17156),l=n.n(o),p=n(85971),h=n(2453),f=n(9669),b=n.n(f);function k(){return p.Z.getState().global.nodeConfig.url}function x(t,e){var n=e||"",r=t,a=Number(r)<1;if("number"==typeof r&&(r=r.toString()),a){var s=/0\.(0{4,})/,i=/\d+\.0*\d{3}/.exec(r);if(r=i?i[0]:r,i=s.exec(r)){var u=i[1].length;return n+r.replace(s,"0.0{"+u+"}")}return n+r}return n+Number(r).toLocaleString()}function y(t){return v.apply(this,arguments)}function v(){return(v=l()(i()().mark((function t(e){var n;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:return n=t.sent,t.abrupt("return",[null,n]);case 7:if(t.prev=7,t.t0=t.catch(0),!(t.t0 instanceof Error)){t.next=14;break}return console.log(t.t0),t.abrupt("return",[t.t0.message,null]);case 14:if(console.log(t.t0),"object"!==c()(t.t0)){t.next=19;break}return t.abrupt("return",[JSON.stringify(t.t0),null]);case 19:return t.abrupt("return",[t.t0,null]);case 20:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=l()(i()().mark((function t(e){var n;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=k(),t.next=3,y(b().post("".concat(n,"/v1/chain/get_account"),JSON.stringify(e)));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return m.apply(this,arguments)}function m(){return(m=l()(i()().mark((function t(e,n){var r;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:return r=t.sent,t.abrupt("return",r);case 7:if(t.prev=7,t.t0=t.catch(0),!(t.t0 instanceof Error)){t.next=15;break}throw console.log(t.t0),h.ZP.error({content:n||t.t0.message,duration:5}),t.t0;case 15:throw console.log(t.t0),"object"===c()(t.t0)?h.ZP.error({content:n||JSON.stringify(t.t0),duration:5}):h.ZP.error({content:n||t.t0,duration:5}),t.t0;case 18:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function S(t,e,n){return _.apply(this,arguments)}function _(){return(_=l()(i()().mark((function t(e,n,r){var a,s,u;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null!=n?n:function(){},t.prev=1,t.next=4,e;case 4:return s=t.sent,t.abrupt("return",s);case 8:if(t.prev=8,t.t0=t.catch(1),!(t.t0 instanceof Error)){t.next=17;break}throw console.log(t.t0),a(),h.ZP.error({content:r||t.t0.message,duration:5}),t.t0;case 17:throw console.log(t.t0),"object"===c()(t.t0)?(u="",u=t.t0.hasOwnProperty("message")?t.t0.message:JSON.stringify(t.t0),h.ZP.error({content:r||u,duration:5})):h.ZP.error({content:r||t.t0,duration:5}),a(),t.t0;case 21:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function N(){var t=navigator.userAgent;return/mobile/i.test(t)}function W(t){return O.apply(this,arguments)}function O(){return(O=l()(i()().mark((function t(e){var n,r,s,u;return i()().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,r=null,t.next=3,y(b().get("".concat(e,"/v1/chain/get_info"),{timeout:1e4}));case 3:return s=t.sent,u=a()(s,2),n=u[0],r=u[1],t.abrupt("return",[n,r]);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(t){if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!==c()(e)||!e)}catch(t){return!1}}},22658:function(){},89214:function(){},85568:function(){}}]);