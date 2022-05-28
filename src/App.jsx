import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./components/root/Root";
import AddUser from "./components/add-user/AddUser";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import AddTransaction from "./components/add-transactions/AddTransaction";
import CreateRole from "./components/create-role/CreateRole";
import MyTransactions from "./components/myTransactions/MyTransactions";

function App() {
  return (
    <>
      <Router>
				<Routes>
					<Route exact path="/" element={<Root />} />
					<Route exact path="/add-user" element={<AddUser />} />
					<Route exact path="/admin" element={<Admin />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/add-transaction" element={<AddTransaction />} />
					<Route exact path="/create-role" element={<CreateRole />} />
					<Route exact path="/my-transaction" element={<MyTransactions />} />
				</Routes>
			</Router>
    </>
  );
}

export default App;
