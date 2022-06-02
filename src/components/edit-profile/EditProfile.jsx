import { getAuth, updatePassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import profilePic from "../../Public/profile-pic.png";
import PopUp from "../side-pop-up/PopUp";

function EditProfile({ currUserDetail }) {
	const [name, setName] = useState(currUserDetail?.name);
	const [walletId] = useState(currUserDetail?.walletId);
	const [contactNo, setContactNo] = useState(currUserDetail?.contactNo);
	const [email] = useState(currUserDetail?.emailAddress);
	const [password, setPassword] = useState(currUserDetail?.password);
	const [confPassword, setConfPassword] = useState("");

  const navigate = useNavigate();
  
	function showPassword(event, change) {
		if (change) {
			var x = document.getElementById("ConfirmPassword");
			if (x.type === "password") {
				x.type = "text";
			} else {
				x.type = "password";
			}
		} else {
			var y = document.getElementById("NewPassword");
			if (y.type === "password") {
				y.type = "text";
			} else {
				y.type = "password";
			}
		}
	}

	console.log("edit-profile: ", currUserDetail);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (confPassword === password) {
			const userDocRef = doc(db, "User", currUserDetail.id);
			const result = await updateDoc(userDocRef, {
				name,
				contactNo,
				password,
			});

			const auth = await getAuth();
			console.log("auth: ", auth);
			const user = auth.currentUser;
			console.log("user: ", user);
			await updatePassword(user, password).catch((err) => {
				console.log(err);
			});

			console.log("result", result);
			navigate("/");
		}
	};

	const handleName = (event) => {
		setName(event.target.value);
	};

	const handleContact = (event) => {
		setContactNo(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	const handleConfPassword = (event) => {
		setConfPassword(event.target.value);
	};

	return (
		<>
			<PopUp />
			<div className="container px-5">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
						<div className="card-layout my-5 pt-5 pb-4 px-4">
							<h3 className="text-center">
								<b>Edit Profile</b>
							</h3>
							<hr className="mb-4" />
							<div className="text-center">
								<img
									src={profilePic}
									alt="Profile.png"
									className="profile-pic mb-3"
								/>
							</div>
							<div className="aform">
								<form id="AddUser">
									<div className="form-group pt-2">
										<input
											className="form-control py-2"
											type="text"
											name="Name"
											id="Name"
											placeholder="Name"
											value={name}
											onChange={(event) => handleName(event)}
										/>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="text"
											name="WalletID"
											id="WalletID"
											placeholder={walletId}
											disabled
										/>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="text"
											name="Phone"
											id="Phone"
											placeholder="Contact no."
											value={contactNo}
											onChange={(event) => handleContact(event)}
										/>
									</div>

									<div className="form-group pt-3">
										<select
											className="form-select py-2"
											name="Role"
											id="Role"
											disabled
										>
											{
												<>
													<option
														selected={
															currUserDetail.role === "Assign a role..."
														}
														disabled
													>
														Assign a Role...
													</option>
													<option
														selected={currUserDetail.role === "Admin"}
														value="Admin"
													>
														Admin
													</option>
													<option
														selected={currUserDetail.role === "Supplier"}
														value="Supplier"
													>
														Supplier
													</option>
													<option
														selected={currUserDetail.role === "Manufacturer"}
														value="Manufacturer"
													>
														Manufacturer
													</option>
													<option
														selected={currUserDetail.role === "Distributor"}
														value="Distributor"
													>
														Distributor
													</option>
													<option
														selected={currUserDetail.role === "Retailer"}
														value="Retailer"
													>
														Retailer
													</option>
												</>
											}
										</select>
									</div>

									<div className="form-group pt-3">
										<input
											className="form-control py-2"
											type="text"
											name="email"
											id="Email"
											placeholder={email}
											disabled
										/>
									</div>

									<h6 className="text-center pt-5"> Change Password </h6>
									<hr />

									<div className="form-group pt-2">
										<input
											className="form-control py-2"
											type="password"
											name="NewPassword"
											id="NewPassword"
											placeholder="Enter New Password"
											value={password}
											onChange={(event) => handlePassword(event)}
										/>
										<p
											className="pt-2"
											onClick={(event) => showPassword(event, 0)}
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
											name="ConfirmPassword"
											id="ConfirmPassword"
											placeholder="Confirm Password"
											value={confPassword}
											onChange={(event) => handleConfPassword(event)}
										/>
										<p
											className="pt-2"
											onClick={(event) => showPassword(event, 1)}
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
											onClick={(event) => handleSubmit(event)}
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-4"></div>
				</div>
			</div>
		</>
	);
}

export default EditProfile;
