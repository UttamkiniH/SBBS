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

import { useAuthCurr } from "./firebase-config";

function App() {
	const currUser = useAuthCurr();
	return (
		<>
			<Router>
				<Routes>
					{currUser ? (
						<>
							<Route exact path="/login" element={<Navigate to={"/"} />} />
							<Route exact path="/" element={<Root currUser={currUser} />} />
							<Route exact path="/add-user" element={<AddUser />} />
							<Route exact path="/admin" element={<Admin />} />
							<Route
								exact
								path="/add-transaction"
								element={<AddTransaction currUser={currUser} />}
							/>
							<Route exact path="/create-role" element={<CreateRole />} />
							<Route
								exact
								path="/my-transaction"
								element={<MyTransactions />}
							/>
						</>
					) : (
						<>
							<Route path="*" element={<Navigate to={"/login"} />} />
							<Route exact path="/login" element={<Login />} />
						</>
					)}
				</Routes>
			</Router>
		</>
	);
}

export default App;
