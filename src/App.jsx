import React from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./components/root/Root";
import AddUser from "./components/add-user/AddUser";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import AddTransaction from "./components/add-transactions/AddTransaction";
import CreateRole from "./components/create-role/CreateRole";
import MyTransactions from "./components/myTransactions/MyTransactions";

import { db, useAuthCurr } from "./firebase-config";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useMemo } from "react";

const populateUserDetails = async (currUser) => {
	const userCollectionRef = await collection(db, "User");
	const result = await query(
		userCollectionRef,
		where("uuid", "==", `${currUser.uid}`)
	);
	const querySnapshot = await getDocs(result);
	const resultdoc = [];
	await querySnapshot.forEach((doc) => {
		resultdoc.push({ id: doc.id, data: doc.data() });
  });
  console.log(resultdoc);
	return resultdoc[0].data;
};

function App() {
	const currUser = useAuthCurr();
	const [currUserDetail, setCurrUserDetail] = useState();

	useMemo(() => {
		const initCurrUserDetail = async () => {
			const resultingUser = await populateUserDetails(currUser);
			console.log(resultingUser);
			setCurrUserDetail(resultingUser);
		};

		if (currUser) {
			initCurrUserDetail();
		}
	}, [currUser]);

	return (
		<>
			<Router>
				<Routes>
					{
						<>
							{currUser && (
								<Route exact path="/login" element={<Navigate to={"/"} />} />
							)}
							{currUser && (
								<Route
									exact
									path="/"
									element={
										<Root
											currUser={currUser}
											currUserDetails={currUserDetail}
										/>
									}
								/>
							)}
							{currUser && (
								<Route exact path="/add-user" element={<AddUser />} />
							)}
							{currUserDetail?.role === "Admin" && (
								<Route exact path="/admin" element={<Admin />} />
							)}
							{currUser && (
								<Route
									exact
									path="/add-transaction"
									element={
										<AddTransaction
											currUser={currUser}
											currUserDetails={currUserDetail}
										/>
									}
								/>
							)}
							{currUserDetail?.role === "Admin" && (
								<Route exact path="/create-role" element={<CreateRole />} />
							)}
							{currUser && (
								<Route
									exact
									path="/my-transaction"
									element={<MyTransactions />}
								/>
							)}
							<Route exact path="/login" element={<Login />} />
						</>
					}
				</Routes>
			</Router>
		</>
	);
}

export default App;
