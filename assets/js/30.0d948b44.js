(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{237:function(e,t,i){"use strict";i.r(t);var a=i(2),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"nft1-specification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nft1-specification"}},[e._v("#")]),e._v(" NFT1 Specification")]),e._v(" "),i("h4",{attrs:{id:"specification-version-0-1"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#specification-version-0-1"}},[e._v("#")]),e._v(" Specification version: 0.1")]),e._v(" "),i("h4",{attrs:{id:"date-published-july-11-2019"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#date-published-july-11-2019"}},[e._v("#")]),e._v(" Date published: July 11, 2019")]),e._v(" "),i("h3",{attrs:{id:"authors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[e._v("#")]),e._v(" Authors")]),e._v(" "),i("p",[e._v("Jonald Fyookball, James Cramer")]),e._v(" "),i("h3",{attrs:{id:"acknowledgements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),i("p",[e._v("im_uname, Mark B. Lundeberg, Dexx7 for review and suggestions")]),e._v(" "),i("h2",{attrs:{id:"simple-nft-vs-nft1-protocol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simple-nft-vs-nft1-protocol"}},[e._v("#")]),e._v(" Simple NFT vs NFT1 Protocol")]),e._v(" "),i("p",[e._v("The "),i("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLP Token Type 1 Protocol Specification"),i("OutboundLink")],1),e._v(" was originally designed for fungible tokens.  It is possible to use the token type 1 protocol to support non-fungible tokens (NFT) by simply minting a non-divisible token supply of 1 without a minting baton, we call this a "),i("strong",[e._v("simple NFT")]),e._v(".  However, this specification codifies a more capable type of NFT that allows grouping of many NFTs together, called "),i("strong",[e._v("NFT1")]),e._v(".")]),e._v(" "),i("p",[e._v("NFT1 is a simple extension to the SLP token type 1 protocol which allows many NFT tokens to be grouped together using a single ID.  Having the ability to group NFTs in a provable manner opens the doors for many more token applications, and makes SLP more similar to other NFT protocols (e.g., ERC-721).  NFT1 uses the same validation rules as SLP token type 1 with a few additional constraints and requirements described below.")]),e._v(" "),i("h2",{attrs:{id:"nft1-creation-procedure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nft1-creation-procedure"}},[e._v("#")]),e._v(" NFT1 Creation Procedure")]),e._v(" "),i("p",[e._v("Here is the summarized procedure for how to create a "),i("em",[e._v("grouped NFT")]),e._v(" using this NFT1 protocol:")]),e._v(" "),i("ol",[i("li",[e._v("Create a new SLP token for "),i("strong",[e._v("NFT1 group minting")]),e._v(" (see specific requirements below).  The token ID of this new "),i("strong",[e._v("NFT group minting")]),e._v(" token will be considered to be the Group ID for NFTs that will be subsequently created.\n"),i("ul",[i("li",[e._v("It is recommended that the decimal precision be set to 0 for the NFT group, but this is not required.")])])]),e._v(" "),i("li",[e._v("Create a new SLP token for a single "),i("strong",[e._v("NFT child")]),e._v(" (see specific requirements below) by spending a quantity  greater than 0 NFT1 group minting tokens in a new GENESIS transaction.\n"),i("ul",[i("li",[e._v("Just prior to this step it is recommended that the wallet automatically breaks the Genesis' output quantity into multiple outputs using a fan-out SEND transaction, this will allow multiple NFTs to be created.  It is recommended that outputs that are intended to be used in to create NFT children have a value of 1, but this is not required.")])])]),e._v(" "),i("li",[e._v("Repeat Step 2 as many times as desired in order to create more NFT1 children that are part of the same  group.")])]),e._v(" "),i("h2",{attrs:{id:"nft1-protocol-requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nft1-protocol-requirements"}},[e._v("#")]),e._v(" NFT1 Protocol Requirements")]),e._v(" "),i("p",[e._v("The following list of requirements are simple modifications or additions to a normal SLP Token Type 1 protocol requirements:")]),e._v(" "),i("ul",[i("li",[e._v("NFT1 group minting token:\n"),i("ul",[i("li",[e._v("Token Type field set to "),i("code",[e._v("0x81")]),e._v(" in all NFT1 parent GENESIS, MINT, and SEND transactions.")])])]),e._v(" "),i("li",[e._v("NFT1 child tokens:\n"),i("ul",[i("li",[e._v("Token Type field set to "),i("code",[e._v("0x41")]),e._v(" in all NFT1 child GENESIS and SEND transactions")]),e._v(" "),i("li",[e._v("GENESIS must include spending a valid NFT1 parent token (quantity > 0) at transaction input index 0.")]),e._v(" "),i("li",[e._v("GENESIS quantity shall be set to 1.")]),e._v(" "),i("li",[e._v("Shall not have a baton vout (baton vout must be set to "),i("code",[e._v("0x4c00")]),e._v(" in NFT1 child GENESIS).")]),e._v(" "),i("li",[e._v("Shall have 0 decimal places (decimals must be set to "),i("code",[e._v("0x00")]),e._v(" in NFT1 child GENESIS).")])])])]),e._v(" "),i("h2",{attrs:{id:"requirements-for-wallets-that-only-have-slp-send"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements-for-wallets-that-only-have-slp-send"}},[e._v("#")]),e._v(" Requirements for Wallets that only have SLP SEND")]),e._v(" "),i("p",[e._v("Wallets must ensure that NFT1 tokens are spent using the same Token Type field.  Spending an NFT1 group or child token with the wrong Token Type field in a SEND transaction will result in the token being burned.  NFT1 group minting tokens will be received as token type "),i("code",[e._v("0x81")]),e._v(" and shall be spent as type "),i("code",[e._v("0x81")]),e._v(".  Likewise, NFT1 child tokens will be received as token type "),i("code",[e._v("0x41")]),e._v(" and shall be spent as token type "),i("code",[e._v("0x41")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"user-interface-recommendations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#user-interface-recommendations"}},[e._v("#")]),e._v(" User Interface Recommendations")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("SLP wallets should present the total quantity of NFT1 child tokens being held by a user as a single line item "),i("em",[e._v("for each Group ID")]),e._v(" in a list of all SLP tokens, and that line item should be expandable to show the list of individual NFT1 tokens within the NFT1 group.")])]),e._v(" "),i("li",[i("p",[e._v('SLP wallets should present the total quantity of NFT1 group minting tokens being held by a wallet in way that clearly distinguishes the Group quantity from the NFT child quantity (these are two separate line items).  Using a visual cues and nomenclature similar to the "minting baton" may help distinguish between NFT1 group minting supply and the NFT1 children that are part of the same group ID.')])]),e._v(" "),i("li",[i("p",[e._v("NFT1 child tokens can have different names, tickers, document URI, and document hashes from their respective NFT1 group minting token.  It will be up to the individual wallets to determine how to best present this information to its users.")])]),e._v(" "),i("li",[i("p",[e._v("NFT1 group token GENESIS/MINT GUIs should make it clear that the quantity to be minted is associated with the maximum number of NFT1 children that can be created.")])]),e._v(" "),i("li",[i("p",[e._v("NFT1 group token GENESIS/MINT GUIs should have the decimals field disabled and set to 0 by default, even though this is not a strict requirement of the protocol.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);