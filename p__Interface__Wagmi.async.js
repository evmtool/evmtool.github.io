"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8950],{11:function(d,c,a){a.r(c);var e=a(58676),r=a(51877),s=a(78565),i=a(26713),t=a(65735),n=a(86074),o=function(){return(0,n.jsx)(s._z,{ghost:!0,className:"interface",children:(0,n.jsxs)(i.Z,{className:"mb-[8px]",direction:"vertical",size:"middle",style:{display:"flex"},children:[(0,n.jsx)(e.K1,{title:"fetchBalance",func:t.EG,desc:"Action for fetching balance information for Ethereum or ERC-20 tokens.",placeholder:'example: {"address": "0x4712567f2EAef852a277a83405408459Bb8195af"}'}),(0,n.jsx)(e.K1,{title:"fetchBlockNumber",func:t.RQ,desc:"Action for fetching the current block number.",placeholder:'example: ""'}),(0,n.jsx)(e.K1,{title:"fetchEnsAddress",func:t.bh,desc:"Action for fetching address for ENS name.",placeholder:'example: {"name": "awkweb.eth"}'}),(0,n.jsx)(e.K1,{title:"fetchEnsAvatar",func:t.w6,desc:"Action for fetching avatar for ENS name.",placeholder:'example: {"name": "awkweb.eth"}'}),(0,n.jsx)(e.K1,{title:"fetchEnsName",func:t.Lk,desc:"Action for fetching ENS name for address.",placeholder:'example: {"address": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e"}'}),(0,n.jsx)(e.K1,{title:"fetchEnsResolver",func:t.Uj,desc:"Action for fetching the resolver for ENS name.",placeholder:'example: {"name": "awkweb.eth"}'}),(0,n.jsx)(e.K1,{title:"fetchFeeData",func:t.jS,desc:"Action for fetching network fee information.",placeholder:'example: {"chainId": 17777}'}),(0,n.jsx)(e.K1,{title:"fetchTransaction",func:t.KI,desc:"Action for fetching transaction by hash.",placeholder:'example: {"hash": "0xacb442788a39281a1761776481a3389e56e5c50e7dcde28fd2b90dbc40dcaffc"}'}),(0,n.jsx)(e.K1,{title:"fetchToken",func:t.EC,desc:"Action for fetching ERC-20 token information.",placeholder:'example: {"address": "0x2a3b2d64960036de519dC4a45CAfd532Bfa99Ff0"}'}),(0,n.jsx)(e.K1,{title:"getAccount",func:t.D0,desc:"Action for accessing account data and connection status.",placeholder:'example: ""'}),(0,n.jsx)(e.K1,{title:"getContract",func:t.uN,desc:"Action for creating a type-safe Contract instance.",placeholder:`example: {
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
}`}),(0,n.jsx)(e.K1,{title:"getNetwork",func:t.Hy,desc:"Action for accessing network data, such as current connected chain and connector chains.",placeholder:'example: ""'}),(0,n.jsx)(e.K1,{title:"getProvider",func:t.VH,desc:"Action for accessing Client's ethers Provider.",placeholder:'example: {"chainId": 17777}'}),(0,n.jsx)(e.K1,{title:"getWebSocketProvider",func:t.lG,desc:"Action for accessing the Client's ethers WebSocket Provider.",placeholder:'example: ""'}),(0,n.jsx)(e.K1,{title:"multicall",func:t.Ap,desc:"Action for calling multiple ethers Contract read-only methods via multicall3.",placeholder:`example: {
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
}`}),(0,n.jsx)(e.K1,{title:"prepareSendTransaction",func:t.uw,desc:"Action for preparing a transaction to be sent via sendTransaction.",placeholder:'example: {"request": {"to": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", "value": "0x10000"}}'}),(0,n.jsx)(e.K1,{title:"prepareWriteContract",func:t.$q,desc:"Action for preparing a contract write to be sent via writeContract.",placeholder:`example: {
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
}`}),(0,n.jsx)(e.K1,{title:"readContract",func:t.a4,desc:"Action for calling an ethers Contract read-only method.",placeholder:`example: {
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
}`}),(0,n.jsx)(e.K1,{title:"readContracts",func:t.JH,desc:"Action for calling multiple ethers Contract read-only methods.",placeholder:`example: {
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
}`}),(0,n.jsx)(e.K1,{title:"sendTransaction",func:t.T7,desc:"Action for sending a transaction.",placeholder:'example: {"mode": "recklesslyUnprepared", "request": {"to": "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e", "value": "0x10000"}}'}),(0,n.jsx)(e.K1,{title:"signMessage",func:t.l,desc:"Action for signing messages with connected account.",placeholder:'example: {"message": "Hello World"}'}),(0,n.jsx)(e.K1,{title:"signTypedData",func:t.xq,desc:"Action for signing typed data with connected account.",placeholder:`example: {
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
}`}),(0,n.jsx)(e.K1,{title:"switchNetwork",func:t.If,desc:"Action for switching networks with a connector.",placeholder:'example: {"chainId": 17777}'}),(0,n.jsx)(e.K1,{title:"waitForTransaction",func:t.Mn,desc:"Action for declaratively waiting until transaction is processed. Pairs well with writeContract and sendTransaction.",placeholder:'example: {"hash": "0x1b964e61bd8cf281d3866c2941621b62e25d3e2a00c569653521fd27ded15975"}'}),(0,n.jsx)(e.K1,{title:"writeContract",func:t.n9,desc:"Action for calling a Contract write method.",placeholder:`example: {
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
}`})]})})};c.default=o}}]);
