import React from 'react'
import LoginBox from '../../components/authentication/LoginBox'
import '../../components/authentication/login.scss'
import Header from './../../components/layouts/Header';
import Footer from './../../components/layouts/Footer';

function AdminLogin() {
  return (
    <div className="Auth_Page">
      <h1>Admin Login Page</h1>
      <Header/>
    <LoginBox/>
    <Footer/>
</div>
  )
}

export default AdminLogin