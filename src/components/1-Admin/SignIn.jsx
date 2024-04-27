import React from 'react'
import './sign.css'
import logo from '../../images/logo.png'

export default function SignIn() {
   return <div className='signIn'>
      <div className='box'>
      <form>
         <h2>Welcome Back</h2>
         <p>Enter your email and password to sign in</p>
         <div className="inp">
            <label htmlFor="em">Email</label>
            <input type="email" placeholder='Your Email' required id="em" />
         </div>
         <div className="inp">
            <label htmlFor="pass">Password</label>
            <input type="password" placeholder='Your Password' required id="pass" />
         </div>
         <div className="inp">
            <input type="checkbox" required id="rem" />
            <label htmlFor="rem">Remember me</label>
         </div>
         <button type='submit'>Sign In</button>
         <h6>Don't have an account? <a href="#!">Sign Up</a></h6>
      </form>
      </div>
      <div className="img">
         <img src={logo} alt="Not Fount" />
      </div>
   </div>
}
