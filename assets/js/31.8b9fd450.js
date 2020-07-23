(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{238:function(e,t,a){"use strict";a.r(t);var r=a(2),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"simple-ledger-payment-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-ledger-payment-protocol"}},[e._v("#")]),e._v(" Simple Ledger Payment Protocol")]),e._v(" "),a("h4",{attrs:{id:"version-0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-0-1"}},[e._v("#")]),e._v(" Version: 0.1")]),e._v(" "),a("h4",{attrs:{id:"date-published-june-11-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-published-june-11-2019"}},[e._v("#")]),e._v(" Date published: June 11, 2019")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("This specification describes a protocol for communication between a merchant and their customer, enabling both a better customer experience and better security against man-in-the-middle attacks on the payment process.")]),e._v(" "),a("h2",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification"}},[e._v("#")]),e._v(" Specification")]),e._v(" "),a("h3",{attrs:{id:"extending-existing-payment-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-existing-payment-protocol"}},[e._v("#")]),e._v(" Extending Existing Payment Protocol")]),e._v(" "),a("p",[e._v("This payment protocol is an extension of "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 70"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0071.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 71"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 72"),a("OutboundLink")],1),e._v(", and the "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications/blob/token-documents/slp-uri-scheme.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simple Ledger Protocol URI Scheme Specification"),a("OutboundLink")],1),e._v(". Applications which support these protocols are able, with minor modifications, to support the payment protocol described in this specification.")]),e._v(" "),a("h3",{attrs:{id:"payment-request-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-request-generation"}},[e._v("#")]),e._v(" Payment Request Generation")]),e._v(" "),a("p",[e._v("Payment Requests are generated according to the "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki#PaymentDetailsPaymentRequest",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 70 specification"),a("OutboundLink")],1),e._v(" with the following additional requirements:")]),e._v(" "),a("ol",[a("li",[e._v("Outputs must be in the proper order according to the Simple Ledger Token specification")]),e._v(" "),a("li",[e._v("The first output in the Payment Request (vout=0) must be the SLP OP_RETURN output")]),e._v(" "),a("li",[e._v("All outputs listed in the SLP OP_RETURN output must have a corresponding output in the Payment Request (vout=1-n)")]),e._v(" "),a("li",[e._v("The transaction defined by the Payment Request must conform to the specification for a "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications/blob/master/slp-token-type-1.md#send---spend-transaction",target:"_blank",rel:"noopener noreferrer"}},[e._v("SEND transaction of SLP Token Type 1"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"payment-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-generation"}},[e._v("#")]),e._v(" Payment Generation")]),e._v(" "),a("p",[e._v("Payments are generated according to the "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0070.mediawiki#Payment",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 70 specification"),a("OutboundLink")],1),e._v(" with the following additional considerations:")]),e._v(" "),a("ol",[a("li",[e._v("Outputs in the transaction must be listed in the exact order prescribed by the Payment Request")]),e._v(" "),a("li",[e._v("Additional outputs, such as those for sending change, may be appended to the SLP OP_RETURN script at index 0")])]),e._v(" "),a("h3",{attrs:{id:"payment-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-validation"}},[e._v("#")]),e._v(" Payment Validation")]),e._v(" "),a("p",[e._v("Payments are considered valid if the submitted transaction has the outputs required by the Payment Request. As with BIP 70, the script and amount for all required outputs, except the output at index 0, must match the details in the Payment Request. The SLP OP_RETURN script (vout=0) does not have to exactly match the script in the Payment Request to be considered valid. However, it must include any requested outputs.")]),e._v(" "),a("h4",{attrs:{id:"example-op-return-script-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-op-return-script-validation"}},[e._v("#")]),e._v(" Example OP_RETURN Script Validation")]),e._v(" "),a("p",[e._v("REQUESTED SCRIPT (ASM):"),a("br"),e._v(" "),a("code",[e._v("OP_RETURN 534c5000 OP_1 53454e44 4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf 000000000000000a 0000000000000014 000000000000000a")])]),e._v(" "),a("p",[e._v("VALID SCRIPT (ASM) - APPENDED CHANGE OUTPUT:"),a("br"),e._v(" "),a("code",[e._v("OP_RETURN 534c5000 OP_1 53454e44 4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf 000000000000000a 0000000000000014 000000000000000a 00000002540be400")])]),e._v(" "),a("p",[e._v("INVALID SCRIPT (ASM) - MISSING REQUIRED OUTPUT:"),a("br"),e._v(" "),a("code",[e._v("OP_RETURN 534c5000 OP_1 53454e44 4de69e374a8ed21cbddd47f2338cc0f479dc58daa2bbe11cd604ca488eca0ddf 000000000000000a 0000000000000014")])]),e._v(" "),a("h3",{attrs:{id:"uri-specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri-specification"}},[e._v("#")]),e._v(" URI Specification")]),e._v(" "),a("p",[e._v("The URI scheme follows "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 72"),a("OutboundLink")],1),e._v(", and the "),a("a",{attrs:{href:"https://github.com/simpleledger/slp-specifications/blob/token-documents/slp-uri-scheme.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simple Ledger Protocol URI Scheme Specification"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("A backwards-compatible request:"),a("br"),e._v(" "),a("code",[e._v("simpleledger:qqmtw4c35mpv5rcjnnsrskpxvzajyq3f9ygldn8fj0?amount1=10.0001-<xyzTokenID>&label=Satoshi-Nakamoto&r=https://merchant.com/pay/3D2a8628fc2fbe")])]),e._v(" "),a("p",[e._v("Non-backwards-compatible equivalent:"),a("br"),e._v(" "),a("code",[e._v("simpleledger:?r=https://merchant.com/pay/3D2a8628fc2fbe")])]),e._v(" "),a("h3",{attrs:{id:"mime-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mime-types"}},[e._v("#")]),e._v(" MIME Types")]),e._v(" "),a("p",[e._v("The MIME (RFC 2046) Media Types follow the basic specification described in "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0071.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 71"),a("OutboundLink")],1),e._v(". The Media Type (Content-Type in HTML/email headers) for messages shall be:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Message")]),e._v(" "),a("th",[e._v("Type/Subtype")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("PaymentRequest")]),e._v(" "),a("td",[e._v("application/simpleledger-paymentrequest")])]),e._v(" "),a("tr",[a("td",[e._v("Payment")]),e._v(" "),a("td",[e._v("application/simpleledger-payment")])]),e._v(" "),a("tr",[a("td",[e._v("PaymentACK")]),e._v(" "),a("td",[e._v("application/simpleledger-paymentack")])])])]),e._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("A web server generating a PaymentRequest message to initiate the payment protocol would precede the binary message data with the following headers:")]),e._v(" "),a("p",[a("code",[e._v("Content-Type: application/simpleledger-paymentrequest")]),a("br"),e._v(" "),a("code",[e._v("Accept: application/simpleledger-payment")]),a("br"),e._v(" "),a("code",[e._v("Content-Transfer-Encoding: binary")]),a("br")]),e._v(" "),a("h2",{attrs:{id:"reference-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-implementations"}},[e._v("#")]),e._v(" Reference Implementations")]),e._v(" "),a("h3",{attrs:{id:"clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[e._v("#")]),e._v(" Clients")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin-com/badger",target:"_blank",rel:"noopener noreferrer"}},[e._v("Badger Extension"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/bitcoin-com/badger-mobile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Badger Mobile"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[e._v("#")]),e._v(" Libraries")]),e._v(" "),a("p",[e._v("None currently")])])}),[],!1,null,null,null);t.default=i.exports}}]);