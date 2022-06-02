import React from "react";
import PopUp from "../side-pop-up/PopUp";

function CreateRole() {
	return (
		<>
			<PopUp />

			<div className="container px-5">
				<div className="row my-5">
					<div className="col-5">
						<div className="card-layout p-5">
							<h3>
								<b>Roles</b>
							</h3>
							<hr className="mb-4" />
							<table className="table">
								<tbody>
									<tr>
										<td>
											<button
												type="button"
												className="btn btn-danger"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Admin
											</button>
										</td>
										<td className="text-end">
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
									<tr>
										<td>
											<button
												type="button"
												className="btn btn-info"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Supplier
											</button>
										</td>
										<td className="text-end">
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
										<td>
											<button
												type="button"
												className="btn btn-success"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Manufacturer
											</button>
										</td>
										<td className="text-end">
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
										<td>
											<button
												type="button"
												className="btn btn-warning"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Distributor
											</button>
										</td>
										<td className="text-end">
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
										<td>
											<button
												type="button"
												className="btn btn-secondary"
												style={{ borderRadius: "20px", pointerEvents: "none" }}
											>
												Retailer
											</button>
										</td>
										<td className="text-end">
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
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-7">
						<div className="card-layout p-5">
							<h3 className="text-center">
								<b>Create a new Role</b>
							</h3>
							<hr className="mb-4" />
							<div className="aform px-4">
								<form id="CreateRole">
									<div className="form-group pt-2 px-4">
										<input
											className="form-control py-2"
											type="text"
											name="RoleName"
											id="RoleName"
											placeholder="Enter Role Name"
										/>
									</div>

									<div className="form-group pt-3 px-4">
										<p>Role Type:</p>
										<input
											className="form-check-input"
											type="radio"
											name="RoleLevel"
											id="RoleLevel"
											value="Admin"
										/>
										<label className="form-check-label" htmlFor="RoleLevel">
											Admin &nbsp;
										</label>
										<input
											className="form-check-input"
											type="radio"
											name="RoleLevel"
											id="RoleLevel"
											value="User"
										/>
										<label className="form-check-label" htmlFor="RoleLevel">
											User
										</label>
									</div>

									<div className="form-group pt-3 px-4">
										<p>Functionalitites:</p>
										<input
											className="form-check-input"
											type="checkbox"
											value="CreateRoles"
											id="CreateRoles"
										/>
										<label className="form-check-label" htmlFor="CreateRoles">
											Create Roles &nbsp;
										</label>
										<input
											className="form-check-input"
											type="checkbox"
											value="AddUsers"
											id="AddUsers"
										/>
										<label className="form-check-label" htmlFor="AddUsers">
											Add Users &nbsp;
										</label>
										<input
											className="form-check-input"
											type="checkbox"
											value="AddTransactions"
											id="AddTransactions"
										/>
										<label
											className="form-check-label"
											htmlFor="AddTransactions"
										>
											Add Transactions &nbsp;
										</label>
										<br></br>
										<input
											className="form-check-input"
											type="checkbox"
											value="ViewAllTransactions"
											id="ViewAllTransactions"
										/>
										<label
											className="form-check-label"
											htmlFor="ViewAllTransactions"
										>
											View All Transactions &nbsp;
										</label>
										<input
											className="form-check-input"
											type="checkbox"
											value="ViewSystemLogs"
											id="ViewSystemLogs"
										/>
										<label
											className="form-check-label"
											htmlFor="ViewSystemLogs"
										>
											View System Logs &nbsp;
										</label>
									</div>

									<div className="d-grid gap-2 pt-4 px-4">
										<button
											className="btn btn-primary btn-block py-3"
											id="Create-role-btn"
											onClick="alert('Role Added!')"
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

export default CreateRole;
