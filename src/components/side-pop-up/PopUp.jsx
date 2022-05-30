import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";

function PopUp() {
	const handleLogout = async (event) => {
		await signOut(auth);
	};

	return (
		<>
			<div className="container-fluid">
				<div id="mySidenav" className="sidenav">
					<Link to={"/"} id="Dashboard" style={{ backgroundColor: "gold" }}>
						<b>Dashboard</b>
						<i className="fa fa-fw fa-th-large"></i>
					</Link>
					<Link to={"/my-transaction"} id="Transactions">
						Transactions<i className="fa fa-fw fa-list"></i>
					</Link>
					<Link to={"#"}
						onClick={(event) => handleLogout(event)}
						style={{ cursor: "pointer" }}
						id="Settings"
					>
						Logout<i className="fa fa-fw fa-cog"></i>
					</Link>
				</div>
			</div>
		</>
	);
}

export default PopUp;
