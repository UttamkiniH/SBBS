import React from "react";
import PopUp from "../side-pop-up/PopUp";

function AddTransaction() {
	return (
		<>
			<PopUp />

			<div className="container px-5">
				<div className="row my-5">
					<div className="col-2"></div>
					<div className="col-8 px-5">
						<div className="card-layout p-5">
							<h3 className="text-center">
								<b>Add Transaction</b>
							</h3>
							<hr className="mb-4" />
							<div className="aform px-5">
								<form id="AddTransaction">
									<div className="form-group pt-2 px-5">
										<input
											className="form-control py-2"
											type="text"
											name="RecipientName"
											id="RecipientName"
											placeholder="Enter Recipient's Name"
										/>
									</div>

									<div className="form-group pt-3 px-5">
										<input
											className="form-control py-2"
											type="text"
											name="WalletID"
											id="WalletID"
											placeholder="Enter Recipient's Wallet ID"
										/>
									</div>

									<div className="form-group pt-3 px-5">
										<textarea
											className="form-control py-2"
											name="ItemsSent"
											id="ItemsSent"
											placeholder="Enter Items sent"
										></textarea>
									</div>

									<div className="d-grid gap-2 pt-4 px-5">
										<button
											className="btn btn-primary btn-block py-3"
											id="Add-transaction-btn"
											onClick="alert('Transaction Added!')"
										>
											Add Transaction
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</>
	);
}

export default AddTransaction;
