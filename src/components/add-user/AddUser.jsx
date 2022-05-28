import React from "react";
import PopUp from "../side-pop-up/PopUp";
import ExistingUsers from "../existing-users/ExistingUsers";
import { useState } from "react";
import { ethers } from "ethers";
import { useEffect } from "react";
import crypto from "crypto";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const generatePrivateKey = async() => {
	var id = await crypto.randomBytes(32).toString("hex");
	let privateKey = "0x" + id;
	console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);
	return privateKey;
};

const generateWalletID = async (privateKey) => {
	var wallet = await new ethers.Wallet(privateKey);
	console.log("Address: " + wallet.address);
	return wallet.address;
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

	const usersCollectionRef = collection(db, "User");

	const [walletID, setWalletID] = useState("");
	const [privateKey, setPrivateKey] = useState("");
	const [name, setName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [contactNo, setContactNo] = useState("");
	const [role, setRole] = useState("Assign a role...");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const populatePrivateKey = async () => {
			setPrivateKey(await generatePrivateKey());
		};
		populatePrivateKey();
	}, []);

	useEffect(() => {
		const populateWalletID = async () => {
			let ID = await generateWalletID(privateKey);
			setWalletID(ID);
		};
		populateWalletID();
		console.log("in pop wallet ID: " + walletID);
		console.log("Private Key: " + privateKey);
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

	const populateEmailAddress = (changingEmail) => {
		setEmailAddress(changingEmail);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		await addDoc(usersCollectionRef, {
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
