import React from "react";
import { useState } from "react";
import PopUp from "../side-pop-up/PopUp";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Ethereumjs = require("ethereumjs-tx").Transaction;

function AddTransaction({ currUser, currUserDetails }) {
	const [toAddress, setToAddress] = useState("");
	const devnetNetworkId = "0xff";
	const [value, setValue] = useState(0);
	const [fromFullShardKey, setFromFullShardKey] = useState("0x0002d0e4");
	const [toFullShardKey, setToFullShardKey] = useState("0x0002d0e4");
	const [currUserDetail, setCurrUserDetail] = useState();

	const navigate = useNavigate();

	const handleValue = (changeValue) => {
		setValue(changeValue);
	};

	const handleWalletId = (changeWalletId) => {
		setToAddress(changeWalletId);
	};

	useEffect(() => {
		setCurrUserDetail(currUserDetails);
	}, [currUserDetails]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const QuarkChain = require("quarkchain-web3");
		const Web3 = require("web3");

		const web3 = new Web3();
		QuarkChain.injectWeb3(web3, "http://jrpc.devnet.quarkchain.io:38391");

		web3.qkc.setPrivateKey(currUserDetail.privateKey);

		console.log("eth address: ", web3.qkc.address);
		console.log("privateKey: ", currUserDetail.privateKey);

		const getNonceUrl = "http://jrpc.devnet.quarkchain.io:38391";
		const header = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		let nonceResp = {};
		try {
			nonceResp = await axios.post(
				getNonceUrl,
				{
					jsonrpc: "2.0",
					method: "getTransactionCount",
					params: [`${currUserDetail.walletId}`],
					id: 1,
				},
				header
			);
			console.log("nonce resp: ", nonceResp);
		} catch (error) {
			console.log("Nonce: ", error);
		}

		setFromFullShardKey(currUserDetail.walletId.slice(-8));
		setToFullShardKey(toAddress.slice(-8));

		console.log("from Shard Key: ", fromFullShardKey);
		console.log("to shard Key: ", toFullShardKey);

		const txWeb3 = {
			gas: `0x${(30000).toString(16)}`,
			gasPrice: "0x0",
			data: "0x",
			to: toAddress.slice(0, 42),
			value: `0x${value.toString(16)}`,
			networkId: devnetNetworkId,
			fromFullShardKey: fromFullShardKey,
			toFullShardKey: toFullShardKey,
		};

		let txId;

		console.log("txWeb3: ", txWeb3);
		txId = await web3.qkc.sendTransaction(txWeb3);
		console.log("txId after await: ", txId);
		console.log("Blockchain transaction through web3 done");

		const txParams = {
			nonce: `${nonceResp.data.result.toString(16)}`,
			gasPrice: "0x0",
			gasLimit: `0x${(30000).toString(16)}`,
			to: toAddress.slice(0, 42),
			value: `0x${value.toString(16)}`,
			data: "0x",
			fromFullShardKey: fromFullShardKey,
			toFullShardKey: toFullShardKey,
			networkId: devnetNetworkId,
			gasTokenId: "0x8bb0",
			transferTokenId: "0x8bb0",
			version: "0x1",
			transactionId: txId,
		};

		console.log("txParams: ", txParams);

		const tx = new Ethereumjs(txParams);
		tx.sign(Buffer.from(currUserDetail.privateKey.substring(2), "hex"));

		// console.log(
		// 	"RSV: ",
		// 	tx.r.toString("hex"),
		// 	tx.s.toString("hex"),
		// 	tx.v.toString("hex")
		// );

		const rawTx = "0x" + tx.serialize().toString("hex");
		console.log("signed: ", rawTx);
		// // Send raw transaction through the devnet web server
		// try {
		// 	var txResp = await axios.post(
		// 		sendTransactionUrl,
		// 		{
		// 			jsonrpc: "2.0",
		// 			method: "sendRawTransaction",
		// 			params: [`${rawTx}`],
		// 			id: 1,
		// 		},
		// 		header
		// 	);
		// 	// To check transaction status use this id to call getTransactionReceipt
		// 	const txId = txResp.data.result;
		// 	console.log("txId: ", txId);
		// } catch (error) {
		// 	console.log("transaction error: ", error);
		// }

		// console.log("NOT RAW: ", {
		// 	jsonrpc: "2.0",
		// 	method: "sendTransaction",
		// 	params: {
		// 		...txParams,
		// 		v: tx.v,
		// 		r: tx.r,
		// 		s: tx.s,
		// 	},
		// 	id: 1,
		// });
		// console.log("currDetails: ", currUserDetail);
		// console.log("tx: ", tx);

		const transactionRef = collection(db, "Transaction");
		await addDoc(transactionRef, {
			txParams,
			rawTx,
			privateKey: currUserDetail.privateKey,
			uuid: currUser.uid,
			email: currUser.email,
			time: new Date(),
			from: currUserDetail.walletId,
			to: toAddress,
		}).catch((err) => {
			console.log("error: ");
			console.log(err);
		});

		navigate("/my-transaction");
	};

	return (
		<>
			<PopUp />

			<div className="container px-5">
				<div className="row my-5">
					<div className="col-2"></div>
					<div className="col-8 px-5">
						<div className="card-layout p-5">
							<h3 className="text-center">
								<b>Add Transaction</b>
							</h3>
							<hr className="mb-4" />
							<div className="aform px-5">
								<form id="AddTransaction">
									<div className="form-group pt-2 px-5">
										<input
											className="form-control py-2"
											type="text"
											name="RecipientName"
											id="RecipientName"
											placeholder="Enter Recipient's Name"
										/>
									</div>

									<div className="form-group pt-3 px-5">
										<input
											className="form-control py-2"
											type="text"
											name="WalletID"
											id="WalletID"
											placeholder="Enter Recipient's Wallet ID"
											value={toAddress}
											onChange={(event) => handleWalletId(event.target.value)}
										/>
									</div>

									<div className="form-group pt-3 px-5">
										<textarea
											className="form-control py-2"
											name="value"
											id="ItemsSent"
											placeholder="Enter Items sent"
											onChange={(event) => handleValue(event.target.value)}
											value={value}
										></textarea>
									</div>

									<div className="d-grid gap-2 pt-4 px-5">
										<button
											className="btn btn-primary btn-block py-3"
											id="Add-transaction-btn"
											onClick={(event) => handleSubmit(event)}
										>
											Add Transaction
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</>
	);
}

export default AddTransaction;
