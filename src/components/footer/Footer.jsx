import React from "react";

function Footer() {
	return (
		<footer>
			<div className="container-fluid py-1" id="headerline"></div>
			<div className="container">
				<h6 className="pt-5 text-center">Developed by</h6>
				<div className="row pt-3" style={{ paddingLeft: "50px" }}>
					<div className="col-2 offset-4">
						<h5>
							<b>Krishna G Kamath</b>
						</h5>
						<h5>
							<b>Uttam Kini H</b>
						</h5>
						<h5>
							<b>Vishnu Udaikumar</b>
						</h5>
						<h5>
							<b>Vital Upadhyaya</b>
						</h5>
					</div>
					<div className="col-2">
						<h5>
							<b>4SF18IS044</b>
						</h5>
						<h5>
							<b>4SF18IS114</b>
						</h5>
						<h5>
							<b>4SF18IS118</b>
						</h5>
						<h5>
							<b>4SF18IS119</b>
						</h5>
					</div>
				</div>
			</div>
			<div className="pb-5 mb-0"></div>
		</footer>
	);
}

export default Footer;
