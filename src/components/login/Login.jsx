import React from "react";
import { useState } from "react";
import "./login.css";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmail = (changeEmail) => {
		setEmail(changeEmail);
	};

	const handlePassword = (changePassword) => {
		setPassword(changePassword);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const result = await signInWithEmailAndPassword(auth, email, password);
		console.log(result);
	};

	return (
		<>
			<div className="container pt-4">
				<div className="text-center mt-5 pt-5">
					<img
						src="./supply_chain_ui/public/SBBS-logo.png"
						alt="logo"
						className="logo my-5"
					/>
				</div>
				<div className="row">
					<div className="col-lg-4"></div>
					<div className="col-lg-4">
						<div className="cform">
							<form id="Login">
								<div className="form-group">
									<input
										className="form-control py-2"
										type="text"
										name="email"
										id="email"
										placeholder="Enter email"
										value={email}
										onChange={(event) => handleEmail(event.target.value)}
									/>
								</div>

								<div className="form-group pt-3">
									<input
										className="form-control py-2"
										type="password"
										name="Password"
										id="Password"
										placeholder="Enter Password"
										value={password}
										onChange={(event) => handlePassword(event.target.value)}
									/>
								</div>

								<div className="form-group pt-4">
									<button
										className="btn btn-primary py-3"
										id="Login-btn"
										onClick={(event) => handleSubmit(event)}
									>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-4"></div>
				</div>
			</div>
		</>
	);
}

export default Login;
