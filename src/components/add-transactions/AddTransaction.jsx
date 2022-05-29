import React from "react";
import { useState } from "react";
import PopUp from "../side-pop-up/PopUp";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect } from "react";

import axios from "axios";
const Ethereumjs = require("ethereumjs-tx").Transaction;

const getDetailsOfCurrUser = async (currentUser) => {
	const userDetailsRef = await collection(db, "User");
	const result = await query(
		userDetailsRef,
		where("uuid", "==", `${currentUser.uid}`)
	);
	const querySnapshot = await getDocs(result);
	const resultdoc = [];
	querySnapshot.forEach((doc) => {
		resultdoc.push({ id: doc.id, data: doc.data() });
	});
	console.log(resultdoc);
	return resultdoc;
};

function AddTransaction({ currUser }) {
	const [toAddress, setToAddress] = useState("");
	const devnetNetworkId = "0xff";
	const [value, setValue] = useState(0);
	const [fromFullShardKey] = useState("0x0002d0e4");
	const [toFullShardKey] = useState("0x0002d0e4");
	const [currUserDetails, setCurrUserDetails] = useState();

	// const [nonce, setNonce] = useState('0x1')
	// const [version, setVersion] = useState('0x01')
	// const [gasTokenId, setGasTokenId] = useState('0x8bb0')
	// const [transferTokenId, setTransferTokenId] = useState('0x8bb0')
	// const [data, setData] = useState('0x')
	// const [gas, setGas] = useState('0x7530')
	// const [gasPrice, setGasPrice] = useState('0x0')

	const handleValue = (changeValue) => {
		setValue(changeValue);
	};

	const handleWalletId = (changeWalletId) => {
		setToAddress(changeWalletId);
	};

	useEffect(() => {
		const populateCurrUserDetails = async () => {
			setCurrUserDetails(await getDetailsOfCurrUser(currUser));
			console.log("currUser: " + currUser);
		};
		if (currUser) {
			populateCurrUserDetails();
		}
	}, [currUser]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log("privateKey: ", currUserDetails[1].data.privateKey);

		const txParams = {
			gas: `0x${(30000).toString(16)}`,
			gasPrice: "0x0",
			data: "0x",
			to: toAddress,
			value: `0x${value.toString(16)}`,
			networkId: devnetNetworkId,
			fromFullShardKey: fromFullShardKey,
			toFullShardKey: toFullShardKey,
		};

		console.log(typeof currUserPrivateKey);
		console.log(txParams);

		const tx = new Ethereumjs(txParams);

		tx.sign(
			Buffer.from(currUserDetails[1].data.privateKey.substring(2), "hex")
		);
		const rawTx = "0x" + tx.serialize().toString("hex");
		// Send raw transaction through the devnet web server
		try {
			var txResp = await axios.post("https://devnet.quarkchain.io/sendRawTx", {
				rawTx: rawTx,
			});
			// To check transaction status use this id to call getTransactionReceipt
			const txId = txResp.data.txId;
			console.log(txId);
		} catch (error) {
			console.log("Sending transaction failed");
		}

		console.log("currDetails: ", currUserDetails);
		console.log(tx);

		const transactionRef = collection(db, "Transaction");
		await addDoc(transactionRef, {
			txParams,
			rawTx,
			privateKey: currUserDetails[1].data.privateKey,
			uuid: currUser.uid,
			email: currUser.email,
			time: new Date(),
      from: currUserDetails[1].data.walletId,
      to: toAddress
		}).catch((err) => {
			console.log("error: ");
			console.log(err);
		});

		window.location.reload();

		// await web3.qkc
		// 	.sendTransaction(tx, console.log)
		// 	.catch((err) => console.log(err));
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
