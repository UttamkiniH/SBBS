import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const usersCollectionRef = collection(db, "User");
const initAllUserData = async () => {
	const data = await getDocs(usersCollectionRef);
	let usersArray = [];
	data.docs.map((doc) => usersArray.push({ ...doc.data(), id: doc.id }));
	return usersArray;
};

function ExistingUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getAllUserDetails = async () => {
			setUsers(await initAllUserData());
		};
		getAllUserDetails();
	}, []);

	return (
		<>
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
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.walletId}</td>
									<td>{user.contactNo}</td>
									<td>
										<button
											type="button"
											className="btn btn-success"
											style={{ borderRadius: "20px", pointerEvents: "none" }}
										>
											{user.role}
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
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default ExistingUsers;
