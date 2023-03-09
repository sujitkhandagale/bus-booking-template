import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom';

function LoginBox() {
  return (
  <section>
   <Link to={"/"}> <div className="back_to_home">
       <h3><i class="fa-duotone fa-turn-down-left"></i> &nbsp; Back To Home</h3>
    </div></Link>
      <div className='Sign_in_box'>
        <form action="">
            <lable>
                Email ID
             </lable>
             <input type="email" /> <br />
             <lable>
                Email ID
             </lable>
             <input type="email" />

        </form>
    </div>
  </section>
  )
}

export default LoginBox