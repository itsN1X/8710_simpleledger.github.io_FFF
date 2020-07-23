(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{257:function(e,t,s){"use strict";s.r(t);var a=s(2),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"unit-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit Tests")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("View Repo:")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/simpleledger/slp-unit-test-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/simpleledger/slp-unit-test-data"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("Test vectors for ensuring that validators of the Simple Ledger Protocol (SLP) follow consensus.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#overview-of-tests"}},[e._v("Overview of tests")])]),s("li",[s("a",{attrs:{href:"#part-a-parsing-of-op-return-scripts"}},[e._v("Part A: Parsing of OP_RETURN scripts")]),s("ul",[s("li",[s("a",{attrs:{href:"#invalidation-reason-codes"}},[e._v("Invalidation reason codes")])])])]),s("li",[s("a",{attrs:{href:"#part-b-transaction-input-tests"}},[e._v("Part B: Transaction input tests")])])])]),s("p"),e._v(" "),s("p",[e._v("Consensus validity is an extremely important and sensitive topic with SLP. If one validator finds a transaction to be 'valid' and another implementation says 'invalid', the consequences are catastrophic. Since the validity of future descendant transactions will almost always be contingent on this validity judgement, this leads to a spreading infection of uncertain validity that can only grow in size, and in principle grow to affect the entire set of tokens in existence. This catastrophe is much worse than can happen with regular bitcoins, since SLP transactions get committed to the blockchain regardless.")]),e._v(" "),s("p",[e._v("Such a consensus break could start somewhere extremely small, such as if one validator allows a certain field to have hex value 0001 or 01, but another validator allows only 01. Such differences can be trivially exploited by malicious actors to cause the consensus catastrophe. We therefore provide a considerable set of unit tests and ask that every validator makes absolutely sure they are in agreement with these unit tests.")]),e._v(" "),s("h2",{attrs:{id:"overview-of-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-tests"}},[e._v("#")]),e._v(" Overview of tests")]),e._v(" "),s("p",[s("strong",[e._v("Link to SLP1 specification: "),s("a",{attrs:{href:"/specs/slp-token-type-1"}},[e._v("Token Type 1")])])]),e._v(" "),s("p",[e._v("Upon release of SLP1 (SLP protocol with "),s("code",[e._v("token_type")]),e._v(" = 1), the specification will be maintained at the link above in a relatively frozen state, only updated when necessary to address an ambiguity. By design the protocol can never be upgraded, rather to make changes it is required to choose an entirely new "),s("code",[e._v("token_type")]),e._v(" --- effectively creating an entirely new protocol.")]),e._v(" "),s("p",[e._v("These tests focus on SLP1. Part A is to test that all validators correctly accept / discard various forms of OP_RETURN messages. Part B is a test on full transactions with an emphasis on checking.")]),e._v(" "),s("h2",{attrs:{id:"part-a-parsing-of-op-return-scripts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#part-a-parsing-of-op-return-scripts"}},[e._v("#")]),e._v(" Part A: Parsing of OP_RETURN scripts")]),e._v(" "),s("p",[s("strong",[e._v("File: "),s("a",{attrs:{href:"https://github.com/simpleledger/slp-unit-test-data/blob/master/script_tests.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("script_tests.json"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("The SLP specification demands a number of very particular formatting requirements on the OP_RETURN script. It is absolutely essential that every implementation is on the same page with parsing.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/simpleledger/slp-unit-test-data/blob/master/script_tests.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("script_tests.json"),s("OutboundLink")],1),e._v(" includes a series of script examples and the expected pass/fail result. For every "),s("code",[e._v("script")]),e._v(" entry, there is a human-readable "),s("code",[e._v("msg")]),e._v(" that explains the point of the test, its construction, and also whether it must pass or must fail. The "),s("code",[e._v("code")]),e._v(" attribute is "),s("code",[e._v("null")]),e._v(" for all valid messages, and otherwise is an integer representing a failure mode.")]),e._v(" "),s("p",[e._v("Note that it is not required for consensus that implementations agree on the reason, however we strongly recommend that validator unit tests should use this code to ensure the invalidation reason matches the expected reason.")]),e._v(" "),s("h3",{attrs:{id:"invalidation-reason-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invalidation-reason-codes"}},[e._v("#")]),e._v(" Invalidation reason codes")]),e._v(" "),s("p",[e._v("Overall script error codes:")]),e._v(" "),s("ul",[s("li",[e._v("1 - Basic error that prevents even parsing as a bitcoin script (currently, only for truncated scripts).")]),e._v(" "),s("li",[e._v("2 - Disallowed opcodes (after OP_RETURN, only opcodes 0x01 - 0x4e may be used).")]),e._v(" "),s("li",[e._v("3 - Not an SLP message (script is not OP_RETURN, or lacks correct lokad ID). Note in some implementations, the parsers would never be given such non-SLP scripts in the first place. In such implementations, error code 3 tests may be skipped as they are not relevant.")])]),e._v(" "),s("p",[e._v("Reasons relating to the specified limits:")]),e._v(" "),s("ul",[s("li",[e._v("10 - A push chunk has the wrong size.")]),e._v(" "),s("li",[e._v("11 - A push chunk has an illegal value.")]),e._v(" "),s("li",[e._v("12 - A push chunk is missing / there are too few chunks.")])]),e._v(" "),s("p",[e._v("Specific to one particular transaction type:")]),e._v(" "),s("ul",[s("li",[e._v("21 - Too many optional values (currently, only if there are more than 19 token output amounts)")]),e._v(" "),s("li",[e._v("22 - NFT1 GENESIS has illegal value")]),e._v(" "),s("li",[e._v("23 - Impossible state (used for minting of NFT1 child tokens)")])]),e._v(" "),s("p",[e._v("Other:")]),e._v(" "),s("ul",[s("li",[e._v("255 - The SLP token_type field is has an unsupported value. Depending on perspective this is not 'invalid' per se -- it simply cannot be parsed since the protocol for that token_type is not known. Like error code 3 these tests may not be applicable to some parsers.")])]),e._v(" "),s("h2",{attrs:{id:"part-b-transaction-input-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#part-b-transaction-input-tests"}},[e._v("#")]),e._v(" Part B: Transaction input tests")]),e._v(" "),s("p",[s("strong",[e._v("File: "),s("a",{attrs:{href:"https://github.com/simpleledger/slp-unit-test-data/blob/master/tx_input_tests.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("tx_input_tests.json"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("These tests involve providing raw transactions A,B,C,D,... that form inputs to transaction T. The SLP validity judgements (valid/invalid) of A,B,C,D,... are given as a test assumption, and the test is to determine the validity of T.")]),e._v(" "),s("p",[e._v("The file data is a list of test objects in JSON format. Each test has a "),s("code",[e._v("description")]),e._v(" (human readable string describing test), a list of "),s("code",[e._v("when")]),e._v(" preconditions and a list of "),s("code",[e._v("should")]),e._v(" tests. Each "),s("code",[e._v("when")]),e._v(" item contains a raw serialized transaction with a "),s("em",[e._v("given")]),e._v(" SLP validity that should be assumed by the validator. Each "),s("code",[e._v("should")]),e._v(" item contains a raw serialized transaction with "),s("em",[e._v("expected")]),e._v(" SLP validity that should agree with the value obtained by the validator using the given information.")]),e._v(" "),s("p",[e._v("Currently all tests have only one "),s("code",[e._v("should")]),e._v(" item, and thus only require one step of validation.")]),e._v(" "),s("p",[e._v("Note that these transactions are 'fake' since they lack scriptSigs and sometimes even lack any inputs, however, they are validly formatted transaction objects and each test case involves multiple transactions that refer to each other by their transaction hash in the usual manner. The reason for using such 'fake' transactions is to allow for self-contained, off-chain tests. Such off-chain transactions allow us to test some strange non-standard transactions that may in principle be encountered by SLP validators.")]),e._v(" "),s("p",[e._v("Although the transaction hashes referenced in the inputs are all correct,  few different artificial objects do appear:")]),e._v(" "),s("ul",[s("li",[e._v("Transactions without any inputs (necessary to obtain self-contained transaction DAGs).")]),e._v(" "),s("li",[e._v("Addresses with pubKeyHash values (hex) of "),s("code",[e._v("aaaaaa...")]),e._v(" (Alice), "),s("code",[e._v("b0b0b0...")]),e._v(" (Bob), "),s("code",[e._v("cccccc...")]),e._v(" (Carol), "),s("code",[e._v("dddddd...")]),e._v(" (Dave), "),s("code",[e._v("eeeeee...")]),e._v(" (Eve), and "),s("code",[e._v("ffffff...")]),e._v(" (Frank).")]),e._v(" "),s("li",[e._v("In many cases the genesis transaction contents are irrelevant, and so SLP messages will often refer to a fake token_ids (genesis tx hash) "),s("code",[e._v("888888...")]),e._v(" or "),s("code",[e._v("999999...")]),e._v(" hex.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);