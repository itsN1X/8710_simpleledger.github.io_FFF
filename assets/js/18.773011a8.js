(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{224:function(e,t,s){"use strict";s.r(t);var i=s(2),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"slp-implementation-instruction-for-wallet-and-exchanges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slp-implementation-instruction-for-wallet-and-exchanges"}},[e._v("#")]),e._v(" SLP Implementation Instruction for Wallet and Exchanges")]),e._v(" "),s("p",[e._v("This document provides a baseline checklist of application level security considerations for developers. It is maintained by the SLP Foundation and serves as a standard for production ready SLP implementations.")]),e._v(" "),s("p",[e._v("Following all the best practices below will ensure users have a reliable and seamless experience on the developer's SLP implementation.")]),e._v(" "),s("p",[e._v("Not following Best Practices for SLP may result in users losing money. It is in the best interest of app developers to follow these guidelines and if they are unable to, to let users know the wallet is not safe to use for larger amounts and that it is a work-in-progress.")]),e._v(" "),s("p",[e._v("The SLP protocol when used properly is extremely secure. It is only when implementations do not follow best practices that they may result in users losing funds or burning SLP tokens.")]),e._v(" "),s("h2",{attrs:{id:"have-multiple-sources-of-validation-or-client-side-validation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#have-multiple-sources-of-validation-or-client-side-validation"}},[e._v("#")]),e._v(" Have Multiple Sources of Validation or Client Side Validation")]),e._v(" "),s("p",[e._v("[high level]")]),e._v(" "),s("p",[e._v("It is very important for any released SLP implementation to not rely on a single third party server for SLP validation queries in the developer's implementation, as any bug, breach, or timeout can give a wrong validity result that is not in sync with the blockchain.")]),e._v(" "),s("p",[e._v("A wrong validity result will provide bad data, in which case the user or developer may lose money because the amount of valid SLP input into a transaction will be less than the amount sent out, causing a burning of all valid input SLP balances.")]),e._v(" "),s("p",[e._v("Some common examples of this is relying on bitcoin.com's REST API for validation, or on a single SLPDB instance. Whilst this is fine for developing the application it is not good practice to trust only one source of SLP validation for production.")]),e._v(" "),s("p",[e._v("This is not an issue in the case the developer's application does client side validation, as it doesn't need multiple sources of truth to compare against because it can validate for itself and not be subject to bad third party data.")]),e._v(" "),s("p",[e._v("In cases where the client cannot validate themselves due to resource constraints they should pull data from multiple SLP validation sources so that the data can be cross checked.")]),e._v(" "),s("p",[e._v("In any design it would be bad practice to be sending transactions based on only one server's response.")]),e._v(" "),s("p",[e._v("[tech level]")]),e._v(" "),s("h3",{attrs:{id:"self-validation-how-does-it-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#self-validation-how-does-it-work"}},[e._v("#")]),e._v(" Self validation: how does it work?")]),e._v(" "),s("p",[e._v("To perform client-side validation you must first look up the provided transaction.")]),e._v(" "),s("p",[e._v("You then must get the DAG back to the last transactions you have verified. If this is the first transaction of a token verification this means the DAG back to genesis. If you have already validated transactions for a token, you may store these valid txids and cancel the crawl once you hit txids which are in the intersection of the already validated DAG and the currently validating DAG. Gs++ provides a way for you to enter in “exclude_txids” which internally will provide you the set difference or delta allowing you to recombine and validate on the client side. Using the “exclude_txids” feature allow for greatly reduced bandwidth requirements.")]),e._v(" "),s("p",[e._v("You should use a library such as slp-validate which has passed the SLP unit tests to perform the validation. Once you have a valid result, you may mark the utxos involved as valid and use them in future transactions.")]),e._v(" "),s("h3",{attrs:{id:"multiple-validation-sources-how-to-do-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-validation-sources-how-to-do-it"}},[e._v("#")]),e._v(" Multiple validation sources: how to do it?")]),e._v(" "),s("p",[e._v("Use more than your own company's servers!")]),e._v(" "),s("p",[e._v("Pull from as many sources as possible.. If more than N are down… mark utxos as unresolved, if more than M are disagreeing mark as unresolved. This way an attacker could not simply dos the servers to force validity. Also, if one or more hacked would not be able to steal funds/scam/cause destruction. If you are relying on a single server or a single companies servers, you will not be doing due diligence on the validity of the transactions and it can lead to token burns.")]),e._v(" "),s("p",[e._v("There are many different public SLPDB sources which can be used for validity checking (status.slpdb.io), as well as GS++ servers, and there is bitcoin.com’s slp-indexer as well. Pulling from multiple of these will ensure your users funds are safe.")]),e._v(" "),s("h2",{attrs:{id:"pass-all-slp-unit-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pass-all-slp-unit-tests"}},[e._v("#")]),e._v(" Pass All SLP Unit Tests")]),e._v(" "),s("p",[e._v("[high level]")]),e._v(" "),s("p",[e._v("This applies only to developers reimplementing SLP. If the developer is using existing libraries which handles SLP, they should check such libraries have already met the SLP best practices and if not improve them until they do meet them.")]),e._v(" "),s("p",[e._v("The developer application needs to implement all SLP unit tests (https://github.com/simpleledger/slp-unit-test-data/) without fail.")]),e._v(" "),s("p",[e._v("Any SLP implementation should make it easy to run these tests and have the resulting test data updated as part of each build that the developer is working on.")]),e._v(" "),s("p",[e._v("Prior to any release all tests should be passing beforehand.")]),e._v(" "),s("p",[e._v("As in the previous case, a wrong validity result due to not running these unit tests thoroughly may result in users losing money.")]),e._v(" "),s("p",[e._v("The tests do not necessarily catch everything and it is highly recommended for developers to also use fuzzers if they are reimplementing SLP.")]),e._v(" "),s("p",[e._v("[tech level]")]),e._v(" "),s("p",[e._v("Ensure that all libraries used by your application and your application itself adheres to the https://github.com/simpleledger/slp-unit-test-data repository.")]),e._v(" "),s("p",[e._v("These should be run for before any update to the services are pushed to production.")]),e._v(" "),s("p",[e._v("Any code which parses SLP transactions should be fuzzed using differential fuzzing applications (such as the GS++ fuzzing system). The SLP Foundation is able to provide assistance for setting this up for new applications. You should run the differential fuzzing tools for at least 1 billion transactions after changes to SLP handling code, or ideally any update (in case things interact in ways you did not foresee).")]),e._v(" "),s("h2",{attrs:{id:"prevent-users-burning-tokens-by-accident"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prevent-users-burning-tokens-by-accident"}},[e._v("#")]),e._v(" Prevent Users Burning Tokens by Accident")]),e._v(" "),s("p",[e._v("[high level]")]),e._v(" "),s("p",[e._v("The design of the application should include measures to prevent SLP tokens being burned by accident, applicable to the type of implementation being developed.")]),e._v(" "),s("p",[e._v("If burning is a feature of the SLP implementation, it should be made explicit to the user before allowing them to proceed.")]),e._v(" "),s("p",[e._v("[tech level]")]),e._v(" "),s("p",[e._v("Wallet Functionality:")]),e._v(" "),s("ul",[s("li",[e._v("Preventing SLP UTXO's being spent as BCH without special warning.")]),e._v(" "),s("li",[e._v("Perform double check on transactions that no burns are happening with different code paths")]),e._v(" "),s("li",[e._v("Performs full client side validation of all SLP validity")]),e._v(" "),s("li",[e._v("Require sending SLP to simple ledger addresses")]),e._v(" "),s("li",[e._v("Use 245 derivation path to signal SLP wallet, or some other derivation change such as new account.")]),e._v(" "),s("li",[e._v("You should perform a pre-signing token burn check such as done in Electron Cash SLP. This is a last chance check to ensure that user will not lose funds.")])]),e._v(" "),s("p",[e._v("You can refer to https://github.com/simpleledger/Electron-Cash-SLP/blob/master/lib/slp_checker.py for an example of how to perform a pre-signing burn check.")]),e._v(" "),s("h2",{attrs:{id:"refer-to-white-listed-tokens-if-necessary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refer-to-white-listed-tokens-if-necessary"}},[e._v("#")]),e._v(" Refer to White Listed Tokens if Necessary")]),e._v(" "),s("p",[e._v("The design of SLP allows tokens to appear with the same name. If a developer's application wants to verify which is the whitelisted token they should refer to a verified tokens list kept by the application. One choice is to periodically pull the simpleledger.info "),s("a",{attrs:{href:"https://github.com/blockparty-sh/slp-explorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("verified tokens list"),s("OutboundLink")],1),e._v(" if you don’t want to maintain your own list, however this list should be scrutinized during each update.")]),e._v(" "),s("p",[e._v("It is the developer's responsibility to ensure that they find the correct tokenid for any token they wish to let the user access, unless the design makes it implicit that it is the user's responsibility to check the token.")]),e._v(" "),s("p",[e._v("Nice to have: an interface that puts user in control of whitelist choices.")]),e._v(" "),s("h2",{attrs:{id:"sending-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sending-considerations"}},[e._v("#")]),e._v(" Sending Considerations")]),e._v(" "),s("p",[e._v("[high level]")]),e._v(" "),s("p",[e._v("It’s important to use minimal sized utxos (dust limit) as it otherwise requires multiple outputs to split the BCH and SLP. SLP utxos should be just that - SLP.")]),e._v(" "),s("p",[e._v("If you have SLP but no or little BCH you won’t be able to send. The wallet should handle this gracefully with a message for the user.")]),e._v(" "),s("p",[e._v("[tech level]")]),e._v(" "),s("p",[e._v("Create SLP utxos using dust limit (546 satoshis).")]),e._v(" "),s("p",[e._v("Do not allow wallet to use utxos unless they have been validated as described above.")]),e._v(" "),s("p",[e._v("Keep in mind, it is possible for receiving SLP utxos to be any sized BCH.")])])}),[],!1,null,null,null);t.default=a.exports}}]);