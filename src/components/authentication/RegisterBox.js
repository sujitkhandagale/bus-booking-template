import React from 'react'
import { Link } from 'react-router-dom';

function RegisterBox() {
  return (
    <div>
    <section className="auth_section">

      <div className="Sign_in_box">
        <form action="">
          <lable className="Login_box_lable">Email ID</lable>
          <br />
          <input className="Login_input" type="email" /> <br />
          <lable className="Login_box_lable">Mobile No</lable>
          <br />
          <input className="Login_input" type="text" /> <br />

          <lable className="Login_box_lable">Password</lable>
          <br />
          <input className="Login_input" type="text" /> <br />

          <lable className="Login_box_lable">Password Re-Enter</lable>
          <br />
          <input className="Login_input" type="email" />
          <button className="auth_btn mt-2">Sign-in</button>
          <div className="text-right pt-4 text-white">
            <Link to={"/agents/sign-in"}>Forgot Password</Link>
          </div>
          <div className="text-center text-white p-2">OR</div>
          <div className="p-2 text-center">
            <button className="p-2 bg-red text-white">
              <i className="fa-brands fa-google"></i>&nbsp;Google
            </button>
            &nbsp; &nbsp;
            <button className="p-2 bg-blue text-white">
              <i className="fa-brands fa-facebook"></i>&nbsp; Facebook
            </button>
          </div>

        </form>
      </div>
    </section>
    </div>
  )
}

export default RegisterBox