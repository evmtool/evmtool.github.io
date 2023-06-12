"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7937],{84552:function(k,r,e){e.r(r);var g=e(51877),u=e(78565),p=e(38345),s=e(62435),a=e(30837),l=e(96988),I=e.n(l),v=e(34041),o=e(54442),f=e(42628),n=e(86074);a.Z.registerLanguage("solidity",l.solidity);var m=`
const fullHumanReadableABI = 
[
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
  "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
  "function balanceOf(address owner) view returns (uint256 balance)",
  "function ownerOf(uint256 tokenId) view returns (address owner)",
  "function safeTransferFrom(address from, address to, uint256 tokenId, bytes data)",
  "function safeTransferFrom(address from, address to, uint256 tokenId)",
  "function transferFrom(address from, address to, uint256 tokenId)",
  "function approve(address to, uint256 tokenId)",
  "function setApprovalForAll(address operator, bool approved)",
  "function getApproved(uint256 tokenId) view returns (address operator)",
  "function isApprovedForAll(address owner, address operator) view returns (bool)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256 tokenId) view returns (string)"
]

const minimalHumanReadableABI = 
[
  "event Transfer(address indexed,address indexed,uint256 indexed)",
  "event Approval(address indexed,address indexed,uint256 indexed)",
  "event ApprovalForAll(address indexed,address indexed,bool)",
  "function balanceOf(address) view returns (uint256)",
  "function ownerOf(uint256) view returns (address)",
  "function safeTransferFrom(address,address,uint256,bytes)",
  "function safeTransferFrom(address,address,uint256)",
  "function transferFrom(address,address,uint256)",
  "function approve(address,uint256)",
  "function setApprovalForAll(address,bool)",
  "function getApproved(uint256) view returns (address)",
  "function isApprovedForAll(address,address) view returns (bool)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256) view returns (string)"
]

interface IERC721 
{
  /**
   * @dev Emitted when \`tokenId\` token is transferred from \`from\` to \`to\`.
   */
  event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

  /**
   * @dev Emitted when \`owner\` enables \`approved\` to manage the \`tokenId\` token.
   */
  event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

  /**
   * @dev Emitted when \`owner\` enables or disables (\`approved\`) \`operator\` to manage all of its assets.
   */
  event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

  /**
   * @dev Returns the number of tokens in \`\`owner\`\`'s account.
   */
  function balanceOf(address owner) external view returns (uint256 balance);

  /**
   * @dev Returns the owner of the \`tokenId\` token.
   *
   * Requirements:
   *
   * - \`tokenId\` must exist.
   */
  function ownerOf(uint256 tokenId) external view returns (address owner);

  /**
   * @dev Safely transfers \`tokenId\` token from \`from\` to \`to\`.
   *
   * Requirements:
   *
   * - \`from\` cannot be the zero address.
   * - \`to\` cannot be the zero address.
   * - \`tokenId\` token must exist and be owned by \`from\`.
   * - If the caller is not \`from\`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
   * - If \`to\` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
   *
   * Emits a {Transfer} event.
   */
  function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;

  /**
   * @dev Safely transfers \`tokenId\` token from \`from\` to \`to\`, checking first that contract recipients
   * are aware of the ERC721 protocol to prevent tokens from being forever locked.
   *
   * Requirements:
   *
   * - \`from\` cannot be the zero address.
   * - \`to\` cannot be the zero address.
   * - \`tokenId\` token must exist and be owned by \`from\`.
   * - If the caller is not \`from\`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}.
   * - If \`to\` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.
   *
   * Emits a {Transfer} event.
   */
  function safeTransferFrom(address from, address to, uint256 tokenId) external;

  /**
   * @dev Transfers \`tokenId\` token from \`from\` to \`to\`.
   *
   * WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721
   * or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must
   * understand this adds an external call which potentially creates a reentrancy vulnerability.
   *
   * Requirements:
   *
   * - \`from\` cannot be the zero address.
   * - \`to\` cannot be the zero address.
   * - \`tokenId\` token must be owned by \`from\`.
   * - If the caller is not \`from\`, it must be approved to move this token by either {approve} or {setApprovalForAll}.
   *
   * Emits a {Transfer} event.
   */
  function transferFrom(address from, address to, uint256 tokenId) external;

  /**
   * @dev Gives permission to \`to\` to transfer \`tokenId\` token to another account.
   * The approval is cleared when the token is transferred.
   *
   * Only a single account can be approved at a time, so approving the zero address clears previous approvals.
   *
   * Requirements:
   *
   * - The caller must own the token or be an approved operator.
   * - \`tokenId\` must exist.
   *
   * Emits an {Approval} event.
   */
  function approve(address to, uint256 tokenId) external;

  /**
   * @dev Approve or remove \`operator\` as an operator for the caller.
   * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.
   *
   * Requirements:
   *
   * - The \`operator\` cannot be the caller.
   *
   * Emits an {ApprovalForAll} event.
   */
  function setApprovalForAll(address operator, bool approved) external;

  /**
   * @dev Returns the account approved for \`tokenId\` token.
   *
   * Requirements:
   *
   * - \`tokenId\` must exist.
   */
  function getApproved(uint256 tokenId) external view returns (address operator);

  /**
   * @dev Returns if the \`operator\` is allowed to manage all of the assets of \`owner\`.
   *
   * See {setApprovalForAll}
   */
  function isApprovedForAll(address owner, address operator) external view returns (bool);

  /**
   * @dev Returns the token collection name.
   */
  function name() external view returns (string memory);

  /**
   * @dev Returns the token collection symbol.
   */
  function symbol() external view returns (string memory);

  /**
   * @dev Returns the Uniform Resource Identifier (URI) for \`tokenId\` token.
   */
  function tokenURI(uint256 tokenId) external view returns (string memory);
}

const jsonABI = 
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
        "name": "tokenId",
        "indexed": true
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
        "name": "approved",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
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
        "name": "owner",
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
    "type": "function",
    "name": "balanceOf",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "balance"
      }
    ]
  },
  {
    "type": "function",
    "name": "ownerOf",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "owner"
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
        "name": "tokenId"
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
        "name": "tokenId"
      }
    ],
    "outputs": []
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
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "approve",
    "constant": false,
    "payable": false,
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
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
    "name": "getApproved",
    "constant": true,
    "stateMutability": "view",
    "payable": false,
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "operator"
      }
    ]
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
        "name": "owner"
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
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
]

`,c=function(){var d=(0,o.useDispatch)(),i=(0,o.useSelector)(function(t){return t.interface.ifTheme}),b=(0,o.useIntl)(),h=b.formatMessage({id:"interface.IfTheme"}),y=(0,s.useCallback)(function(t){localStorage.setItem("ifTheme",JSON.stringify(t)),d(f.N.setIfTheme(t))},[d]);return(0,s.useEffect)(function(){a.Z.highlightAll()},[a.Z]),(0,n.jsxs)(u._z,{className:"interface",ghost:!0,children:[(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/".concat(i,".min.css")}),(0,n.jsx)(p.Z,{title:"IERC721",subTitle:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:"ml-2 mr-2",children:h}),(0,n.jsx)(v.Z,{style:{width:200},defaultValue:i,onChange:y,options:[{value:"a11y-dark",label:"a11y-dark"},{value:"a11y-light",label:"a11y-light"},{value:"agate",label:"agate"},{value:"an-old-hope",label:"an-old-hope"},{value:"androidstudio",label:"androidstudio"},{value:"arduino-light",label:"arduino-light"},{value:"arta",label:"arta"},{value:"ascetic",label:"ascetic"},{value:"atom-one-dark-reasonable",label:"atom-one-dark-reasonable"},{value:"atom-one-dark",label:"atom-one-dark"},{value:"atom-one-light",label:"atom-one-light"},{value:"brown-paper",label:"brown-paper"},{value:"codepen-embed",label:"codepen-embed"},{value:"color-brewer",label:"color-brewer"},{value:"dark",label:"dark"},{value:"default",label:"default"},{value:"devibeans",label:"devibeans"},{value:"docco",label:"docco"},{value:"far",label:"far"},{value:"felipec",label:"felipec"},{value:"foundation",label:"foundation"},{value:"github-dark-dimmed",label:"github-dark-dimmed"},{value:"github-dark",label:"github-dark"},{value:"github",label:"github"},{value:"gml",label:"gml"},{value:"googlecode",label:"googlecode"},{value:"gradient-dark",label:"gradient-dark"},{value:"gradient-light",label:"gradient-light"},{value:"grayscale",label:"grayscale"},{value:"hybrid",label:"hybrid"},{value:"idea",label:"idea"},{value:"intellij-light",label:"intellij-light"},{value:"ir-black",label:"ir-black"},{value:"isbl-editor-dark",label:"isbl-editor-dark"},{value:"isbl-editor-light",label:"isbl-editor-light"},{value:"kimbie-dark",label:"kimbie-dark"},{value:"kimbie-light",label:"kimbie-light"},{value:"lightfair",label:"lightfair"},{value:"lioshi",label:"lioshi"},{value:"magula",label:"magula"},{value:"mono-blue",label:"mono-blue"},{value:"monokai-sublime",label:"monokai-sublime"},{value:"monokai",label:"monokai"},{value:"night-owl",label:"night-owl"},{value:"nnfx-dark",label:"nnfx-dark"},{value:"nnfx-light",label:"nnfx-light"},{value:"nord",label:"nord"},{value:"obsidian",label:"obsidian"},{value:"panda-syntax-dark",label:"panda-syntax-dark"},{value:"panda-syntax-light",label:"panda-syntax-light"},{value:"paraiso-dark",label:"paraiso-dark"},{value:"paraiso-light",label:"paraiso-light"},{value:"pojoaque",label:"pojoaque"},{value:"purebasic",label:"purebasic"},{value:"qtcreator-dark",label:"qtcreator-dark"},{value:"qtcreator-light",label:"qtcreator-light"},{value:"rainbow",label:"rainbow"},{value:"routeros",label:"routeros"},{value:"school-book",label:"school-book"},{value:"shades-of-purple",label:"shades-of-purple"},{value:"srcery",label:"srcery"},{value:"stackoverflow-dark",label:"stackoverflow-dark"},{value:"stackoverflow-light",label:"stackoverflow-light"},{value:"sunburst",label:"sunburst"},{value:"tokyo-night-dark",label:"tokyo-night-dark"},{value:"tokyo-night-light",label:"tokyo-night-light"},{value:"tomorrow-night-blue",label:"tomorrow-night-blue"},{value:"tomorrow-night-bright",label:"tomorrow-night-bright"},{value:"vs",label:"vs"},{value:"vs2015",label:"vs2015"},{value:"xcode",label:"xcode"},{value:"xt256",label:"xt256"}]})]}),children:(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:m})})})]})};r.default=c},51877:function(){}}]);
