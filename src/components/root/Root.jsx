import React, { useEffect } from "react";
import "./root.css";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "../side-pop-up/PopUp";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import profile from "../../Public/profile-pic.png";

// const populateUserDetails = async (currUser) => {
// 	const userCollectionRef = await collection(db, "User");
// 	console.log("currUser UUID: ", currUser.uid);
// 	const result = await query(
// 		userCollectionRef,
// 		where("uuid", "==", `${currUser.uid}`)
// 	);
// 	console.log(result);
// 	console.log(currUser);
// 	const querySnapshot = await getDocs(result);
// 	const resultdoc = [];
// 	console.log(querySnapshot);
// 	await querySnapshot.forEach((doc) => {
// 		resultdoc.push({ id: doc.id, data: doc.data() });
// 	});
// 	return resultdoc[1].data;
// };

function Root({ currUser, currUserDetails }) {
	const [userDetail, setUserDetail] = useState({});
	const [name, setName] = useState();
	const [contactNo, setContactNo] = useState();
	const [walletId, setWalletId] = useState();
	const [role, setRole] = useState();
	const [email, setEmail] = useState();

	const navigate = useNavigate();

	// useEffect(() => {
	// 	const callMe = async () => {
	// 		setUserDetails(await populateUserDetails(currUser));
	// 	};
	// 	if (currUser) {
	// 		callMe();
	// 	}
	// }, [currUser]);

	useEffect(() => {
		setUserDetail(currUserDetails);
	}, [currUserDetails]);

	useEffect(() => {
		if (userDetail) {
			setContactNo(userDetail.contactNo);
			setName(userDetail.name);
			setRole(userDetail.role);
			setWalletId(userDetail.walletId);
			setEmail(userDetail.emailAddress);
		}
	}, [userDetail]);

	return (
		<>
			<PopUp />
			<div className="container">
				<div className="card-layout mt-5">
					<div className="row">
						<div className="col-4">
							<div className="text-center pt-5 pb-4" id="Profile">
								<img src={profile} alt="profile" className="profile-pic mt-3" />
								<h3 className="pt-4">{name}</h3>
								<p className="pb-2" style={{ color: "lightgray" }}>
									{email}
								</p>
							</div>
						</div>
						<div className="col">
							<div className="row px-4 pt-3">
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Wallet ID</label>
										<h6 style={{ fontSize: "10px" }} className="pt-2">
											<b>{walletId}</b>
										</h6>
									</div>
								</div>
								<div className="col-6 p-3">
									<div className="card-outline p-3">
										<label>Contact no.</label>
										<h3 className="pt-2">
											<b>{contactNo}</b>
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
												{role}
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
						<div
							style={{ textDecoration: "none", cursor: "pointer" }}
							onClick={(event) => navigate("/add-user")}
						>
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
										<h3 style={{ lineHeight: "2" }}>Add User</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Root;
