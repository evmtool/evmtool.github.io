"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1642],{3205:function(y,s,n){n.r(s);var w=n(51877),d=n(87659),c=n(38345),r=n(62435),t=n(30837),o=n(96988),x=n.n(o),v=n(34041),l=n(54442),b=n(42628),e=n(86074);t.Z.registerLanguage("solidity",o.solidity);var m=`
const fullHumanReadableABI = 
[
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)"
]

const minimalHumanReadableABI = 
[
  "event Transfer(address indexed,address indexed,uint256)",
  "event Approval(address indexed,address indexed,uint256)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address,uint256) returns (bool)",
  "function allowance(address,address) view returns (uint256)",
  "function approve(address,uint256) returns (bool)",
  "function transferFrom(address,address,uint256) returns (bool)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)"
]

const methodId = 
[
  "event Transfer(address indexed,address indexed,uint256)",
  "0xddf252ad",

  "event Approval(address indexed,address indexed,uint256)",
  "0x8c5be1e5",

  "function totalSupply() view returns (uint256)",
  "0x18160ddd",

  "function balanceOf(address) view returns (uint256)",
  "0x70a08231",

  "function transfer(address,uint256) returns (bool)",
  "0xa9059cbb",

  "function allowance(address,address) view returns (uint256)",
  "0xdd62ed3e",

  "function approve(address,uint256) returns (bool)",
  "0x095ea7b3",

  "function transferFrom(address,address,uint256) returns (bool)",
  "0x23b872dd",

  "function name() view returns (string)",
  "0x06fdde03",

  "function symbol() view returns (string)",
  "0x95d89b41",

  "function decimals() view returns (uint8)",
  "0x313ce567"
]

interface IERC20 
{
  /**
   * @dev Emitted when \`value\` tokens are moved from one account (\`from\`) to
   * another (\`to\`).
   *
   * Note that \`value\` may be zero.
   */
  event Transfer(address indexed from, address indexed to, uint256 value);

  /**
   * @dev Emitted when the allowance of a \`spender\` for an \`owner\` is set by
   * a call to {approve}. \`value\` is the new allowance.
   */
  event Approval(address indexed owner, address indexed spender, uint256 value);

  /**
   * @dev Returns the amount of tokens in existence.
   */
  function totalSupply() external view returns (uint256);

  /**
   * @dev Returns the amount of tokens owned by \`account\`.
   */
  function balanceOf(address account) external view returns (uint256);

  /**
   * @dev Moves \`amount\` tokens from the caller's account to \`to\`.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   * Emits a {Transfer} event.
   */
  function transfer(address to, uint256 amount) external returns (bool);

  /**
   * @dev Returns the remaining number of tokens that \`spender\` will be
   * allowed to spend on behalf of \`owner\` through {transferFrom}. This is
   * zero by default.
   *
   * This value changes when {approve} or {transferFrom} are called.
   */
  function allowance(address owner, address spender) external view returns (uint256);

  /**
   * @dev Sets \`amount\` as the allowance of \`spender\` over the caller's tokens.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   * IMPORTANT: Beware that changing an allowance with this method brings the risk
   * that someone may use both the old and the new allowance by unfortunate
   * transaction ordering. One possible solution to mitigate this race
   * condition is to first reduce the spender's allowance to 0 and set the
   * desired value afterwards:
   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
   *
   * Emits an {Approval} event.
   */
  function approve(address spender, uint256 amount) external returns (bool);

  /**
   * @dev Moves \`amount\` tokens from \`from\` to \`to\` using the
   * allowance mechanism. \`amount\` is then deducted from the caller's
   * allowance.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   * Emits a {Transfer} event.
   */
  function transferFrom(address from, address to, uint256 amount) external returns (bool);

  /**
   * @dev Returns the name of the token.
   */
  function name() external view returns (string memory);

  /**
   * @dev Returns the symbol of the token.
   */
  function symbol() external view returns (string memory);

  /**
   * @dev Returns the decimals places of the token.
   */
  function decimals() external view returns (uint8);
}

const josnABI = 
[
  {
    "type": "event",
    "anonymous": false,
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "type": "function",
    "name": "totalSupply",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "name": "balanceOf",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "name": "transfer",
    "constant": false,
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "type": "function",
    "name": "allowance",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "type": "function",
    "name": "approve",
    "constant": false,
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "type": "function",
    "name": "transferFrom",
    "constant": false,
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "type": "function",
    "name": "name",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "type": "function",
    "name": "symbol",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "type": "function",
    "name": "decimals",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  }
]
`,f=function(){var i=(0,l.useDispatch)(),u=(0,l.useSelector)(function(a){return a.interface.ifTheme}),h=(0,l.useIntl)(),p=h.formatMessage({id:"interface.IfTheme"}),g=(0,r.useCallback)(function(a){localStorage.setItem("ifTheme",JSON.stringify(a)),i(b.N.setIfTheme(a))},[i]);return(0,r.useEffect)(function(){t.Z.highlightAll()},[t.Z]),(0,e.jsxs)(d._z,{className:"interface",ghost:!0,children:[(0,e.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/".concat(u,".min.css")}),(0,e.jsx)(c.Z,{title:"IERC20",subTitle:(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{className:"ml-2 mr-2",children:p}),(0,e.jsx)(v.Z,{style:{width:200},defaultValue:u,onChange:g,options:[{value:"a11y-dark",label:"a11y-dark"},{value:"a11y-light",label:"a11y-light"},{value:"agate",label:"agate"},{value:"an-old-hope",label:"an-old-hope"},{value:"androidstudio",label:"androidstudio"},{value:"arduino-light",label:"arduino-light"},{value:"arta",label:"arta"},{value:"ascetic",label:"ascetic"},{value:"atom-one-dark-reasonable",label:"atom-one-dark-reasonable"},{value:"atom-one-dark",label:"atom-one-dark"},{value:"atom-one-light",label:"atom-one-light"},{value:"brown-paper",label:"brown-paper"},{value:"codepen-embed",label:"codepen-embed"},{value:"color-brewer",label:"color-brewer"},{value:"dark",label:"dark"},{value:"default",label:"default"},{value:"devibeans",label:"devibeans"},{value:"docco",label:"docco"},{value:"far",label:"far"},{value:"felipec",label:"felipec"},{value:"foundation",label:"foundation"},{value:"github-dark-dimmed",label:"github-dark-dimmed"},{value:"github-dark",label:"github-dark"},{value:"github",label:"github"},{value:"gml",label:"gml"},{value:"googlecode",label:"googlecode"},{value:"gradient-dark",label:"gradient-dark"},{value:"gradient-light",label:"gradient-light"},{value:"grayscale",label:"grayscale"},{value:"hybrid",label:"hybrid"},{value:"idea",label:"idea"},{value:"intellij-light",label:"intellij-light"},{value:"ir-black",label:"ir-black"},{value:"isbl-editor-dark",label:"isbl-editor-dark"},{value:"isbl-editor-light",label:"isbl-editor-light"},{value:"kimbie-dark",label:"kimbie-dark"},{value:"kimbie-light",label:"kimbie-light"},{value:"lightfair",label:"lightfair"},{value:"lioshi",label:"lioshi"},{value:"magula",label:"magula"},{value:"mono-blue",label:"mono-blue"},{value:"monokai-sublime",label:"monokai-sublime"},{value:"monokai",label:"monokai"},{value:"night-owl",label:"night-owl"},{value:"nnfx-dark",label:"nnfx-dark"},{value:"nnfx-light",label:"nnfx-light"},{value:"nord",label:"nord"},{value:"obsidian",label:"obsidian"},{value:"panda-syntax-dark",label:"panda-syntax-dark"},{value:"panda-syntax-light",label:"panda-syntax-light"},{value:"paraiso-dark",label:"paraiso-dark"},{value:"paraiso-light",label:"paraiso-light"},{value:"pojoaque",label:"pojoaque"},{value:"purebasic",label:"purebasic"},{value:"qtcreator-dark",label:"qtcreator-dark"},{value:"qtcreator-light",label:"qtcreator-light"},{value:"rainbow",label:"rainbow"},{value:"routeros",label:"routeros"},{value:"school-book",label:"school-book"},{value:"shades-of-purple",label:"shades-of-purple"},{value:"srcery",label:"srcery"},{value:"stackoverflow-dark",label:"stackoverflow-dark"},{value:"stackoverflow-light",label:"stackoverflow-light"},{value:"sunburst",label:"sunburst"},{value:"tokyo-night-dark",label:"tokyo-night-dark"},{value:"tokyo-night-light",label:"tokyo-night-light"},{value:"tomorrow-night-blue",label:"tomorrow-night-blue"},{value:"tomorrow-night-bright",label:"tomorrow-night-bright"},{value:"vs",label:"vs"},{value:"vs2015",label:"vs2015"},{value:"xcode",label:"xcode"},{value:"xt256",label:"xt256"}]})]}),children:(0,e.jsx)("pre",{children:(0,e.jsx)("code",{children:m})})})]})};s.default=f},51877:function(){}}]);
