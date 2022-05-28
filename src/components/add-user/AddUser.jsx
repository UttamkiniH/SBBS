import React from "react";
import PopUp from "../side-pop-up/PopUp";
import { useState } from "react";
import { ethers } from "ethers";
import { useEffect } from "react";
import crypto from "crypto";

const generatePrivateKey = () => {
	var id = crypto.randomBytes(64).toString("hex");
	let privateKey = "0x" + id;
	console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);
	return privateKey;
};

const generateWalletID = (privateKey) => {
	var wallet = new ethers.Wallet(privateKey);
	console.log("Address: " + wallet.address);
	return wallet;
};

function User() {
	function showPassword() {
		var x = document.getElementById("Password");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	const [walletID, setWalletID] = useState("");
	const [privateKey, setPrivateKey] = useState("");
	const [name, setName] = useState("");
	const [contactNo, setContactNo] = useState("");
	const [role, setRole] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const populatePrivateKey = async () => {
			setPrivateKey(generatePrivateKey());
		};
		populatePrivateKey();
	}, []);

	useEffect(() => {
		const populateWalletID = async () => {
			setWalletID(generateWalletID(privateKey));
		};
    populateWalletID();
    console.log("Private Key: " + privateKey);
		console.log("Wallet ID: " + walletID);
	}, [privateKey, walletID]);

	const populateName = (changingName) => {
		setName(changingName);
	};

	const populateContactNo = (changingContactNo) => {
		setContactNo(changingContactNo);
	};

	const populateRole = (changingRole) => {
		setRole(changingRole);
	};

	const populatePassword = (changingPassword) => {
		setPassword(changingPassword);
	};

	return (
		<>
			<PopUp />

			<div className="container px-5">
				<div className="row my-5">
					<div className="col-8">
						<div className="card-layout p-5">
							<h3>
								<b>Users</b>
							</h3>
							<hr className="mb-4" />
							<table className="table">
								<thead>
									<tr>
										<th>Name</th>
										<th>Wallet ID</th>
										<th>Contact no.</th>
										<th>Role</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Cipla Ltd.</td>
										<td>0x3063hm3215s</td>
										<td>+91 97531 86420</td>
										<td>
											<button
												type="button"
												className="btn btn-success"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Manufacturer
											</button>
										</td>
										<td>
											<button
												type="button"
												className="btn btn-outline-primary"
												style={{ border: "none" }}
											>
												<i className="fa fa-fw fa-pencil"></i>
											</button>
											<button
												type="button"
												className="btn btn-outline-danger"
												style={{ border: "none" }}
											>
												<i className="fa fa-fw fa-times"></i>
											</button>
										</td>
									</tr>
									<tr>
										<td>Thomsons</td>
										<td>0x735832xsa3m</td>
										<td>+91 86420 97531</td>
										<td>
											<button
												type="button"
												className="btn btn-success"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Manufacturer
											</button>
										</td>
										<td>
											<button
												type="button"
												className="btn btn-outline-primary"
												style={{ border: "none" }}
											>
												<i className="fa fa-fw fa-pencil"></i>
											</button>
											<button
												type="button"
												className="btn btn-outline-danger"
												style={{ border: "none" }}
											>
												<i className="fa fa-fw fa-times"></i>
											</button>
										</td>
									</tr>
									<tr>
										<td>Keil &amp; Co.</td>
										<td>0x375275mna4k</td>
										<td>+91 97864 53120</td>
										<td>
											<button
												type="button"
												className="btn btn-info"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Supplier
											</button>
										</td>
										<td>
											<button
												type="button"
												className="btn btn-outline-primary"
												style={{ border: "none" }}
											>
												<i className="fa fa-fw fa-pencil"></i>
											</button>
											<button
												type="button"
												className="btn btn-outline-danger"
												style={{ border: "none" }}
											>
												<i className="fa fa-fw fa-times"></i>
											</button>
										</td>
									</tr>
									<tr>
										<td>Admin</td>
										<td>0xadmin0001ns</td>
										<td>+91 97864 53120</td>
										<td>
											<button
												type="button"
												className="btn btn-danger"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Admin
											</button>
										</td>
										<td>
											<button
												type="button"
												className="btn btn-outline-primary"
												style={{ border: "none" }}
												disabled
											>
												<i className="fa fa-fw fa-pencil"></i>
											</button>
											<button
												type="button"
												className="btn btn-outline-danger"
												style={{ border: "none" }}
												disabled
											>
												<i className="fa fa-fw fa-times"></i>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-4">
						<div className="card-layout pt-5 pb-4 px-4">
							<h3 className="text-center">
								<b>Add User</b>
							</h3>
							<hr className="mb-4" />
							<div className="aform">
								<form id="AddUser">
									<div className="form-group pt-2">
										<input
											className="form-control py-2"
											type="text"
											name="Name"
											id="Name"
											placeholder="Enter Name"
											onChange={(event) => populateName(event.target.value)}
											value={name}
										/>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="text"
											name="WalletID"
											id="WalletID"
											placeholder="Create Wallet ID"
											value={walletID}
										/>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="text"
											name="Phone"
											id="Phone"
											placeholder="Enter Contact no."
											onChange={(event) =>
												populateContactNo(event.target.value)
											}
											value={contactNo}
										/>
									</div>

									<div className="form-group pt-3">
										<select
											className="form-select py-2"
											name="Role"
											id="Role"
											onChange={(event) => populateRole(event.target.value)}
										>
											<option disabled>Assign a Role...</option>
											<option selected={role === "Admin"} value="Admin">
												Admin
											</option>
											<option selected={role === "Supplier"} value="Supplier">
												Supplier
											</option>
											<option
												selected={role === "Manufacturer"}
												value="Manufacturer"
											>
												Manufacturer
											</option>
											<option
												selected={role === "Distributor"}
												value="Distributor"
											>
												Distributor
											</option>
											<option selected={role === "Retailer"} value="Retailer">
												Retailer
											</option>
										</select>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="text"
											name="Username"
											id="Username"
											placeholder="Create Username"
										/>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="password"
											name="Password"
											id="Password"
											onChange={(event) => populatePassword(event.target.value)}
											placeholder="Create Password"
											value={password}
										/>
										<p
											className="pt-2"
											onClick={(event) => showPassword()}
											style={{ color: "dodgerblue", fontSize: "12px" }}
										>
											<i className="fa fa-fw fa-eye"></i> View Password
										</p>
									</div>

									<div className="d-grid gap-2 pt-2">
										<button
											className="btn btn-primary btn-block py-3"
											id="Add-user-btn"
											onClick={(event) => alert("user Added!")}
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default User;
