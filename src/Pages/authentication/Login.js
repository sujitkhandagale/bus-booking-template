import React from 'react'
import LoginBox from '../../components/authentication/LoginBox'
import '../../components/authentication/login.scss'
import Header from './../../components/layouts/Header';
import Footer from './../../components/layouts/Footer';

function Login() {
  return (
    <div className="Auth_Page">

      <Header />
      {/* <h1>User Login Page</h1> */}
        <LoginBox/>
        <Footer />
    </div>
  )
}

export default Login