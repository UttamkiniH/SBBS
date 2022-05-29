import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase-config";
import PopUp from "../side-pop-up/PopUp";

const transactionCollectionRef = collection(db, "Transaction");
const initAllTransaction = async () => {
	const data = await getDocs(transactionCollectionRef);
	console.log("Data: ", data);
	let transactionArray = [];
	data.docs.forEach((doc) => {
		let result = {};
		for (let key in doc.data()) {
			if (typeof Key === "function") continue;
			if (typeof doc.data()[key] === "function") continue;
			if (key.startsWith("_")) {
				continue;
			}

			if (key.startsWith("[")) {
				continue;
			}

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
		result["time"] = result.time.toString();
		transactionArray.push(result);
  });
	// console.log("Array: ", transactionArray);
	return transactionArray;
};

function MyTransactions() {
	const [transactions, setTransaction] = useState([]); //setTransaction
	useEffect(() => {
		const getAllUserDetails = async () => {
			setTransaction(await initAllTransaction());
		};
		getAllUserDetails();
	}, []);

	return (
		<>
			<PopUp />
			<div className="container">
				<div className="card-layout my-5 p-5">
					<div className="row">
						<div className="col-10">
							<h3>
								<b>My Transactions</b>
							</h3>
						</div>
						<div className="col">
							<button
								type="button"
								className="btn btn-outline-primary"
								onClick={(event) => (window.location.href = "/add-transaction")}
							>
								<i className="fa fa-fw fa-plus-square"></i>&nbsp;&nbsp;Add
								Transaction
							</button>
						</div>
					</div>

					<hr className="mb-4" />
					<table className="transactions">
						<thead>
							<tr>
								<th>
									<h1>Sl.no.</h1>
								</th>
								<th>
									<h1>Recipient&apos;s Name</h1>
								</th>
								<th>
									<h1>Recipient&apos;s Wallet ID</h1>
								</th>
								<th>
									<h1>Items sent</h1>
								</th>
								<th>
									<h1>Date/Time sent</h1>
								</th>
							</tr>
						</thead>
						<tbody>
							{transactions.map((transaction) => (
								<tr key={transaction.time.seconds}>
                  <td>{ transaction.id }</td>
									<td>{transaction.email}</td>
									<td>{transaction.to}</td>
									<td>{transaction.value}</td>
                  <td>{Date(transaction.time.seconds)} </td>
                  <td></td>
								</tr>
							))}
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default MyTransactions;
