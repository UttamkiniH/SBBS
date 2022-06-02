import React from "react";
import PopUp from "../side-pop-up/PopUp";
import { Link } from "react-router-dom";
import profile from "../../Public/profile-pic.png";

function Admin({currUserDetail}) {
	return (
		<>
			<PopUp />

			<div className="container">
				<div className="card-layout mt-5">
					<div className="row">
						<div className="col-4">
							<div className="text-center pt-5 pb-4" id="Profile">
								<img
									src={profile}
									alt="profile-pic"
									className="profile-pic mt-3"
								/>
								<h3 className="pt-4">
									<b>Admin</b>
								</h3>
								<p className="pb-2" style={{ color: "lightgray" }}>
									{currUserDetail?.emailAddress}
								</p>
							</div>
						</div>
						<div className="col">
							<div className="row px-4 pt-3">
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Wallet ID</label>
										<h3 className="pt-2" style={{fontSize: "10px"}}>
											<b>{currUserDetail?.walletId}</b>
										</h3>
									</div>
								</div>
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Contact no.</label>
										<h3 className="pt-2">
											<b>{currUserDetail?.contactNo}</b>
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
												className="btn btn-danger"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Admin
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
											onClick={(event) => {
												window.location.href = "/edit-profile";
											}}
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
						<Link to={"/create-role"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout my-5 px-5 pt-4 pb-3"
								style={{ backgroundColor: "#840612", color: "white" }}
							>
								<div className="row">
									<div className="col-3">
										<i
											className="fa fa-fw fa-users"
											style={{ fontSize: "60px" }}
										></i>
									</div>
									<div className="col">
										<h3 style={{ lineHeight: "2" }}>Create Role</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div className="col">
						<Link to={"/add-user"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout my-5 px-5 pt-4 pb-3"
								style={{ backgroundColor: "#a90213", color: "white" }}
							>
								<div className="row">
									<div className="col-3">
										<i
											className="fa fa-fw fa-user-plus"
											style={{ fontSize: "60px" }}
										></i>
									</div>
									<div className="col">
										<h3 style={{ lineHeight: "2" }}>Add User</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<Link to={"/add-transaction"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout mb-5 px-5 pt-4 pb-3"
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
						<Link to={"/all-transaction"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout mb-5 px-5 pt-4 pb-3"
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
										<h3 style={{ lineHeight: "2" }}>All Transactions</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
					{/* <div className="col">
						<Link to={"/"} style={{ textDecoration: "none" }}>
							<div
								className="card-layout mb-5 px-5 pt-4 pb-3"
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
										<h3 style={{ lineHeight: "2" }}>Log out</h3>
									</div>
								</div>
							</div>
						</Link>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default Admin;
