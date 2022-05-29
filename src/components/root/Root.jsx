import React from "react";
import "./root.css";
import { Link } from "react-router-dom";
import PopUp from "../side-pop-up/PopUp";

function Root() {
	return (
		<>
			<PopUp />
			<div className="container">
				<div className="card-layout mt-5">
					<div className="row">
						<div className="col-4">
							<div className="text-center pt-5 pb-4" id="Profile">
								<img
									src={"../../../public/profile-pic.png"}
									alt="profile"
									className="profile-pic mt-3"
								/>
								<h3 className="pt-4">Name</h3>
								<p className="pb-2" style={{ color: "lightgray" }}>
									Description
								</p>
							</div>
						</div>
						<div className="col">
							<div className="row px-4 pt-3">
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Wallet ID</label>
										<h3 className="pt-2">
											<b>0x0032sj214m</b>
										</h3>
									</div>
								</div>
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Contact no.</label>
										<h3 className="pt-2">
											<b>+91 98765 43210</b>
										</h3>
									</div>
								</div>
							</div>
							<div className="row px-4 pb-3">
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Role</label>
										<h3 className="pt-2">
											<button
												type="button"
												className="btn btn-info"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Supplier
											</button>
										</h3>
									</div>
								</div>
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Actions</label>
										<br />
										<button
											type="button"
											className="btn btn-outline-primary my-2"
											onClick="window.location.href='edit-profile.html'"
										>
											<i className="fa fa-fw fa-pencil"></i>&nbsp;&nbsp;Edit
											Profile
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<Link to={"/add-transaction"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout my-5 px-5 pt-4 pb-3"
								style={{ backgroundColor: "#030663", color: "white" }}
							>
								<div className="row">
									<div className="col-3">
										<i
											className="fa fa-fw fa-plus-square"
											style={{ fontSize: "60px" }}
										></i>
									</div>
									<div className="col">
										<h3 style={{ lineHeight: "2" }}>Add Transaction</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col">
						<Link to={"/my-transaction"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout my-5 px-5 pt-4 pb-3"
								style={{ backgroundColor: "#030789", color: "white" }}
							>
								<div className="row">
									<div className="col-3">
										<i
											className="fa fa-fw fa-list"
											style={{ fontSize: "60px" }}
										></i>
									</div>
									<div className="col">
										<h3 style={{ lineHeight: "2" }}>My Transactions</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col">
						<Link to={"/settings"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout my-5 px-5 pt-4 pb-3"
								style={{ backgroundColor: "#0309c2", color: "white" }}
							>
								<div className="row">
									<div className="col-3">
										<i
											className="fa fa-fw fa-cog"
											style={{ fontSize: "60px" }}
										></i>
									</div>
									<div className="col">
										<h3 style={{ lineHeight: "2" }}>Settings</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Root;
