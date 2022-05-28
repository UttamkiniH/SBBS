import React from "react";
import { Link } from "react-router-dom";

function PopUp() {
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
					<Link to={"/"} id="Settings">
						Settings<i className="fa fa-fw fa-cog"></i>
					</Link>
				</div>
			</div>
		</>
	);
}

export default PopUp;
