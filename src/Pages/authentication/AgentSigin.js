import React from 'react'
import LoginBox from '../../components/authentication/LoginBox'
import '../../components/authentication/login.scss'
import Header from './../../components/layouts/Header';
import Footer from './../../components/layouts/Footer';

function AgentSigin() {
  return (
    <div className="Auth_Page">

      <Header/>
    <LoginBox/>
    <Footer/>
</div>
  )
}

export default AgentSigin