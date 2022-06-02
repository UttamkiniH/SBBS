import React from "react";
import PopUp from "../side-pop-up/PopUp";
import ExistingUsers from "../existing-users/ExistingUsers";
import { useState } from "react";
import { db, auth } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function User() {
	function showPassword(privateKey) {
		if (!privateKey) {
			var x = document.getElementById("Password");
			if (x.type === "password") {
				x.type = "text";
			} else {
				x.type = "password";
			}
		} else {
			var y = document.getElementById("privateKey");
			if (y.type === "password") {
				y.type = "text";
			} else {
				y.type = "password";
			}
		}
	}

	const usersCollectionRef = collection(db, "User");

	const [walletID, setWalletID] = useState("");
	const [privateKey, setPrivateKey] = useState("");
	const [name, setName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [contactNo, setContactNo] = useState("");
	const [role, setRole] = useState("Assign a role...");
	const [password, setPassword] = useState("");

	const populateName = (changingName) => {
		setName(changingName);
	};

	const populatePrivateKey = (changingPrivateKey) => {
		setPrivateKey(changingPrivateKey);
	};

	const populateWalletID = (changingWalletId) => {
		setWalletID(changingWalletId);
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

	const populateEmailAddress = (changingEmail) => {
		setEmailAddress(changingEmail);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		const userAdd = await createUserWithEmailAndPassword(
			auth,
			emailAddress,
			password
		);
		await addDoc(usersCollectionRef, {
			uuid: userAdd.user.uid,
			walletId: walletID,
			name,
			password,
			contactNo,
			role,
			privateKey,
			emailAddress,
		});
		console.log(event);
		window.location.reload();
	};

	return (
		<>
			<PopUp />
			<div className="container px-5">
				<div className="row my-5">
					<ExistingUsers />
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
											onChange={(event) => populateWalletID(event.target.value)}
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
											<option selected={role === "Assign a role..."} disabled>
												Assign a Role...
											</option>
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
											name="EmailAddress"
											id="EmailAddress"
											placeholder="Create EmailAddress"
											value={emailAddress}
											onChange={(event) =>
												populateEmailAddress(event.target.value)
											}
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
											onClick={(event) => showPassword(false)}
											style={{
												color: "dodgerblue",
												fontSize: "12px",
												cursor: "pointer",
											}}
										>
											<i className="fa fa-fw fa-eye"></i> View Password
										</p>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="password"
											name="privateKey"
											id="privateKey"
											onChange={(event) =>
												populatePrivateKey(event.target.value)
											}
											placeholder="Create PrivateKey"
											value={privateKey}
										/>
										<p
											className="pt-2"
											onClick={(event) => showPassword(true)}
											style={{
												color: "dodgerblue",
												fontSize: "12px",
												cursor: "pointer",
											}}
										>
											<i className="fa fa-fw fa-eye"></i> View Password
										</p>
									</div>

									<div className="d-grid gap-2 pt-2">
										<button
											className="btn btn-primary btn-block py-3"
											id="Add-user-btn"
											onClick={(event) => submitHandler(event)}
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
