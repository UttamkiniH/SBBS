import React from "react";
import PopUp from "../side-pop-up/PopUp";

function MyTransactions() {
	return (
		<>
			<PopUp />
			<div className="container">
				<div className="card-layout my-5 p-5">
					<div className="row">
						<div className="col-10">
							<h3>
								<b>My Transactions</b>
							</h3>
						</div>
						<div className="col">
							<button
								type="button"
								className="btn btn-outline-primary"
								onClick="window.location.href='add-transaction.html'"
							>
								<i className="fa fa-fw fa-plus-square"></i>&nbsp;&nbsp;Add
								Transaction
							</button>
						</div>
					</div>

					<hr className="mb-4" />
					<table className="transactions">
						<thead>
							<tr>
								<th>
									<h1>Sl.no.</h1>
								</th>
								<th>
									<h1>Recipient&apos;s Name</h1>
								</th>
								<th>
									<h1>Recipient&apos;s Wallet ID</h1>
								</th>
								<th>
									<h1>Items sent</h1>
								</th>
								<th>
									<h1>Date/Time sent</h1>
								</th>
								<th>
									<h1>Status</h1>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Cipla Ltd.</td>
								<td>0x3063hm3215s</td>
								<td>2L Toluene, 4kg Sucralfate</td>
								<td>May 31, 2022 at 2:46 PM </td>
								<td style={{ color: "coral" }}>
									<b>Processing</b>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Thomsons Ltd.</td>
								<td>0x735832xsa3m</td>
								<td>5kg Theyophilline, 4.5kg Mycelex</td>
								<td>May 29, 2022 at 4:23 PM </td>
								<td style={{ color: "green" }}>
									<b>Delivered</b>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Cipla Ltd.</td>
								<td>0x3063hm3215s</td>
								<td>10kg Cerumenex</td>
								<td>May 28, 2022 at 5:05 PM </td>
								<td style={{ color: "red" }}>
									<b>Cancelled</b>
								</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default MyTransactions;
