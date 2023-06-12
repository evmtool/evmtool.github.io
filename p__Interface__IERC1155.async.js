"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3337],{62546:function(y,r,e){e.r(r);var x=e(51877),u=e(78565),c=e(38345),s=e(62435),t=e(30837),o=e(96988),k=e.n(o),v=e(34041),l=e(54442),p=e(42628),n=e(86074);t.Z.registerLanguage("solidity",o.solidity);var m=`
const fullHumanReadableABI = 
[
  "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
  "event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)",
  "event ApprovalForAll(address indexed account, address indexed operator, bool approved)",
  "event URI(string value, uint256 indexed id)",
  "function balanceOf(address account, uint256 id) view returns (uint256)",
  "function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])",
  "function setApprovalForAll(address operator, bool approved)",
  "function isApprovedForAll(address account, address operator) view returns (bool)",
  "function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data)",
  "function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)"
]

const minimalHumanReadableABI = 
[
  "event TransferSingle(address indexed,address indexed,address indexed,uint256,uint256)",
  "event TransferBatch(address indexed,address indexed,address indexed,uint256[],uint256[])",
  "event ApprovalForAll(address indexed,address indexed,bool)",
  "event URI(string,uint256 indexed)",
  "function balanceOf(address,uint256) view returns (uint256)",
  "function balanceOfBatch(address[],uint256[]) view returns (uint256[])",
  "function setApprovalForAll(address,bool)",
  "function isApprovedForAll(address,address) view returns (bool)",
  "function safeTransferFrom(address,address,uint256,uint256,bytes)",
  "function safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"
]

interface IERC1155 
{
  /**
   * @dev Emitted when \`value\` tokens of token type \`id\` are transferred from \`from\` to \`to\` by \`operator\`.
   */
  event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);

  /**
   * @dev Equivalent to multiple {TransferSingle} events, where \`operator\`, \`from\` and \`to\` are the same for all
   * transfers.
   */
  event TransferBatch(
      address indexed operator,
      address indexed from,
      address indexed to,
      uint256[] ids,
      uint256[] values
  );

  /**
   * @dev Emitted when \`account\` grants or revokes permission to \`operator\` to transfer their tokens, according to
   * \`approved\`.
   */
  event ApprovalForAll(address indexed account, address indexed operator, bool approved);

  /**
   * @dev Emitted when the URI for token type \`id\` changes to \`value\`, if it is a non-programmatic URI.
   *
   * If an {URI} event was emitted for \`id\`, the standard
   * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that \`value\` will equal the value
   * returned by {IERC1155MetadataURI-uri}.
   */
  event URI(string value, uint256 indexed id);

  /**
   * @dev Returns the amount of tokens of token type \`id\` owned by \`account\`.
   *
   * Requirements:
   *
   * - \`account\` cannot be the zero address.
   */
  function balanceOf(address account, uint256 id) external view returns (uint256);

  /**
   * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.
   *
   * Requirements:
   *
   * - \`accounts\` and \`ids\` must have the same length.
   */
  function balanceOfBatch(
      address[] calldata accounts,
      uint256[] calldata ids
  ) external view returns (uint256[] memory);

  /**
   * @dev Grants or revokes permission to \`operator\` to transfer the caller's tokens, according to \`approved\`,
   *
   * Emits an {ApprovalForAll} event.
   *
   * Requirements:
   *
   * - \`operator\` cannot be the caller.
   */
  function setApprovalForAll(address operator, bool approved) external;

  /**
   * @dev Returns true if \`operator\` is approved to transfer \`\`account\`\`'s tokens.
   *
   * See {setApprovalForAll}.
   */
  function isApprovedForAll(address account, address operator) external view returns (bool);

  /**
   * @dev Transfers \`amount\` tokens of token type \`id\` from \`from\` to \`to\`.
   *
   * Emits a {TransferSingle} event.
   *
   * Requirements:
   *
   * - \`to\` cannot be the zero address.
   * - If the caller is not \`from\`, it must have been approved to spend \`\`from\`\`'s tokens via {setApprovalForAll}.
   * - \`from\` must have a balance of tokens of type \`id\` of at least \`amount\`.
   * - If \`to\` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
   * acceptance magic value.
   */
  function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;

  /**
   * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.
   *
   * Emits a {TransferBatch} event.
   *
   * Requirements:
   *
   * - \`ids\` and \`amounts\` must have the same length.
   * - If \`to\` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
   * acceptance magic value.
   */
  function safeBatchTransferFrom(
      address from,
      address to,
      uint256[] calldata ids,
      uint256[] calldata amounts,
      bytes calldata data
  ) external;

  /**
   * @dev Returns the URI for token type \`id\`.
   *
   * If the \`id\` substring is present in the URI, it must be replaced by
   * clients with the actual token type ID.
   */
  function uri(uint256 id) external view returns (string memory);
}

const jsonABI = 
[
  {
    "type": "event",
    "anonymous": false,
    "name": "TransferSingle",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
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
        "name": "id"
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
    "name": "TransferBatch",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
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
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "URI",
    "inputs": [
      {
        "type": "string",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
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
      },
      {
        "type": "uint256",
        "name": "id"
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
    "name": "balanceOfBatch",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "address[]",
        "name": "accounts"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "constant": false,
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "operator"
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
    "name": "safeTransferFrom",
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
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "safeBatchTransferFrom",
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
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  }
]  
`,f=function(){var d=(0,l.useDispatch)(),i=(0,l.useSelector)(function(a){return a.interface.ifTheme}),b=(0,l.useIntl)(),h=b.formatMessage({id:"interface.IfTheme"}),g=(0,s.useCallback)(function(a){localStorage.setItem("ifTheme",JSON.stringify(a)),d(p.N.setIfTheme(a))},[d]);return(0,s.useEffect)(function(){t.Z.highlightAll()},[t.Z]),(0,n.jsxs)(u._z,{className:"interface",ghost:!0,children:[(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/".concat(i,".min.css")}),(0,n.jsx)(c.Z,{title:"IERC1155",subTitle:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"ml-2 mr-2",children:h}),(0,n.jsx)(v.Z,{style:{width:200},defaultValue:i,onChange:g,options:[{value:"a11y-dark",label:"a11y-dark"},{value:"a11y-light",label:"a11y-light"},{value:"agate",label:"agate"},{value:"an-old-hope",label:"an-old-hope"},{value:"androidstudio",label:"androidstudio"},{value:"arduino-light",label:"arduino-light"},{value:"arta",label:"arta"},{value:"ascetic",label:"ascetic"},{value:"atom-one-dark-reasonable",label:"atom-one-dark-reasonable"},{value:"atom-one-dark",label:"atom-one-dark"},{value:"atom-one-light",label:"atom-one-light"},{value:"brown-paper",label:"brown-paper"},{value:"codepen-embed",label:"codepen-embed"},{value:"color-brewer",label:"color-brewer"},{value:"dark",label:"dark"},{value:"default",label:"default"},{value:"devibeans",label:"devibeans"},{value:"docco",label:"docco"},{value:"far",label:"far"},{value:"felipec",label:"felipec"},{value:"foundation",label:"foundation"},{value:"github-dark-dimmed",label:"github-dark-dimmed"},{value:"github-dark",label:"github-dark"},{value:"github",label:"github"},{value:"gml",label:"gml"},{value:"googlecode",label:"googlecode"},{value:"gradient-dark",label:"gradient-dark"},{value:"gradient-light",label:"gradient-light"},{value:"grayscale",label:"grayscale"},{value:"hybrid",label:"hybrid"},{value:"idea",label:"idea"},{value:"intellij-light",label:"intellij-light"},{value:"ir-black",label:"ir-black"},{value:"isbl-editor-dark",label:"isbl-editor-dark"},{value:"isbl-editor-light",label:"isbl-editor-light"},{value:"kimbie-dark",label:"kimbie-dark"},{value:"kimbie-light",label:"kimbie-light"},{value:"lightfair",label:"lightfair"},{value:"lioshi",label:"lioshi"},{value:"magula",label:"magula"},{value:"mono-blue",label:"mono-blue"},{value:"monokai-sublime",label:"monokai-sublime"},{value:"monokai",label:"monokai"},{value:"night-owl",label:"night-owl"},{value:"nnfx-dark",label:"nnfx-dark"},{value:"nnfx-light",label:"nnfx-light"},{value:"nord",label:"nord"},{value:"obsidian",label:"obsidian"},{value:"panda-syntax-dark",label:"panda-syntax-dark"},{value:"panda-syntax-light",label:"panda-syntax-light"},{value:"paraiso-dark",label:"paraiso-dark"},{value:"paraiso-light",label:"paraiso-light"},{value:"pojoaque",label:"pojoaque"},{value:"purebasic",label:"purebasic"},{value:"qtcreator-dark",label:"qtcreator-dark"},{value:"qtcreator-light",label:"qtcreator-light"},{value:"rainbow",label:"rainbow"},{value:"routeros",label:"routeros"},{value:"school-book",label:"school-book"},{value:"shades-of-purple",label:"shades-of-purple"},{value:"srcery",label:"srcery"},{value:"stackoverflow-dark",label:"stackoverflow-dark"},{value:"stackoverflow-light",label:"stackoverflow-light"},{value:"sunburst",label:"sunburst"},{value:"tokyo-night-dark",label:"tokyo-night-dark"},{value:"tokyo-night-light",label:"tokyo-night-light"},{value:"tomorrow-night-blue",label:"tomorrow-night-blue"},{value:"tomorrow-night-bright",label:"tomorrow-night-bright"},{value:"vs",label:"vs"},{value:"vs2015",label:"vs2015"},{value:"xcode",label:"xcode"},{value:"xt256",label:"xt256"}]})]}),children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:m})})})]})};r.default=f},51877:function(){}}]);
