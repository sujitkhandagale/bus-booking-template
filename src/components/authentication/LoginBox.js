import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

function LoginBox() {
  return (
    <section>
      <Link to={"/"}>
        {" "}
        <div className="back_to_home">
          <h3>
            <i class="fa-duotone fa-turn-down-left"></i> &nbsp; Back To Home
          </h3>
        </div>
      </Link>
      <div className="Sign_in_box">
        <form action="">
          <lable className="Login_box_lable">Email ID</lable>
          <br />
          <input className="Login_input" type="email" /> <br />
          <lable className="Login_box_lable">Password</lable>
          <br />
          <input className="Login_input" type="email" />
          <button className="auth_btn mt-2">Sign-in</button>
          <div className="text-right pt-4 text-white">
            <Link to={"/agents/sign-in"}>Forgot Password</Link>
          </div>
          <div className="text-center text-white p-2">OR</div>
          <div className="p-2 text-center">
         <button className="p-2 bg-red text-white"><i class="fa-brands fa-google"></i>&nbsp;Google</button>
         &nbsp; &nbsp;
         <button className="p-2 bg-blue text-white"><i class="fa-brands fa-facebook"></i>&nbsp; Facebook</button>
          </div>

          <div className="container m-auto grid grid-cols-2 text-center pt-2">
  <div>
  <button
        type="button"
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      ><Link to="/agent/sign-in">Agent Login</Link></button>
  </div>

  <div>
  <button
        type="button"
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      ><Link to="admin/sign-in">Admin Login</Link></button>
  </div>
</div>
        </form>
      </div>
    </section>
  );
}

export default LoginBox;
