import React from 'react'
import "./login.css"

function Login() {
  return (
      <>
      <div className="container pt-4">
        <div className="text-center mt-5 pt-5">
            <img src="./supply_chain_ui/public/SBBS-logo.png" alt='logo' className="logo my-5" />
        </div>
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <div className="cform">
                    <form id="Login">
                        <div className="form-group">
                            <input className="form-control py-2" type="text" name="Username" id="Username" placeholder="Enter Username" />
                        </div>
            
                        <div className="form-group pt-3">
                            <input className="form-control py-2" type="password" name="Password" id="Password" placeholder="Enter Password" />
                        </div>

                        <div className="form-group pt-4">
                            <button className="btn btn-primary py-3" id="Login-btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
    </div></>
  )
}

export default Login