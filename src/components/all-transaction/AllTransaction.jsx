import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import PopUp from "../side-pop-up/PopUp";

const transactionCollectionRef = collection(db, "Transaction");
const initAllTransaction = async () => {
	const data = await getDocs(transactionCollectionRef);
	let transactionArray = [];
	let slno = 0;
	data.docs.forEach((doc) => {
		let result = {};
		for (let key in doc.data()) {
			if (key === "txParams") {
				for (let innerKey in doc.data()[key]) {
					if (typeof innerKey === "function") continue;
					if (typeof doc.data()[innerKey] === "function") continue;
					result[innerKey] = doc.data()[key][innerKey];
				}
				continue;
			}
			result[key] = doc.data()[key];
		}
		result["time"] = result.time.toDate().toDateString();
		result["slno"] = Number(slno).toString();
		slno++;
		transactionArray.push(result);
	});
	console.log("Array: ", transactionArray);
	return transactionArray;
};

const AllTransaction = () => {
	const navigate = useNavigate();
	const [allTransactionDoc, setAllTransactionDoc] = useState([]);
	const [allTransactionDetails, setAllTransactionDetails] = useState([]);

	useEffect(() => {
		const callSetFunc = async () => {
			setAllTransactionDoc(await initAllTransaction());
		};
		callSetFunc();
	}, []);

	useEffect(() => {
		const callsetAllTransaction = () => {
			let allTransactionArray = [];
			const headers = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const url = "http://jrpc.devnet.quarkchain.io:38391";
			allTransactionDoc.forEach((transaction) => {
				console.log("transaction: ", transaction);
				const data = {
					jsonrpc: "2.0",
					method: "getTransactionById",
					params: [`${transaction.transactionId}`],
					id: 1,
				};
				axios
					.post(url, data, headers)
					.then((response) => {
						allTransactionArray.push({ ...response.data });
						console.log("response: ", response);
						setAllTransactionDetails(allTransactionArray);
					})
					.catch((err) => {
						console.log(err);
					});
				console.log("the array: ", allTransactionArray);
			});
			console.log("Array Txns: ", allTransactionArray);
		};
		if (allTransactionDoc) {
			callsetAllTransaction();
		}
	}, [allTransactionDoc]);

	console.log("All popup Detail: ", allTransactionDetails);

	return (
		<>
			<PopUp />
			<div className="container">
				<div className="card-layout my-5 pt-5 px-5 pb-3">
					<div className="row">
						<div className="col-10">
							<h3>
								<b>All Transactions</b>
							</h3>
						</div>
						<div className="col">
							<button
								type="button"
								className="btn btn-outline-primary"
								onClick={(event) => navigate("/add-transaction")}
							>
								<i className="fa fa-fw fa-plus-square"></i>&nbsp;&nbsp;Add
								Transaction
							</button>
						</div>
					</div>
					<hr />
				</div>
				{allTransactionDetails?.map((transaction) => (
					<div className="card-layout my-5 p-5" key={transaction.result.id}>
						<table className="table table-borderless">
							<thead>
								<tr>
									<th style={{ width: "300px" }}>ID:</th>
									<th>{transaction.result.id}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Chain:</td>
									<td>{Number(transaction.result.chainId)}</td>
								</tr>
								<tr>
									<td>Shard:</td>
									<td>{Number(transaction.result.shardId)}</td>
								</tr>
								<tr>
									<td>Block:</td>
									<td>{Number(transaction.result.blockHeight)}</td>
								</tr>
								<tr>
									<td>Position in Block:</td>
									<td>0</td>
								</tr>
								<tr>
									<td>Timestamp:</td>
									<td>{Number(transaction.result.timestamp)}</td>
								</tr>
								<tr>
									<td>Root Confirmation:</td>
									<td>Success</td>
								</tr>
								<tr>
									<td>TxReceipt Status:</td>
									<td>Success</td>
								</tr>
								<tr>
									<td>From:</td>
									<td>{transaction.result.from}</td>
								</tr>
								<tr>
									<td>To:</td>
									<td>{transaction.result.to}</td>
								</tr>
								<tr>
									<td>Value:</td>
									<td>{Number(transaction.result.value)} QKC</td>
								</tr>
								<tr>
									<td>Actual Tx Cost/Fee:</td>
									<td>
										{Number(
											transaction.result.value +
												Number(transaction.result.gasPrice)
										)}{" "}
										QKC
									</td>
								</tr>
								<tr>
									<td>Nonce:</td>
									<td>{Number(transaction.result.nonce)}</td>
								</tr>
								<tr>
									<td>Signature:</td>
									<td>
										v: {transaction.result.v} <br />
										r: {transaction.result.r} <br />
										s: {transaction.result.s}
									</td>
								</tr>
								<tr>
									<td>Input Data:</td>
									<td>
										<textarea disabled>{transaction.result.data}</textarea>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				))}
			</div>
		</>
	);
};

export default AllTransaction;
