import React from 'react'
import './sign.css'
import logo from '../../images/logo.png'

export default function SignUp() {
   return (
      <div className="signUp">
         <img src={logo} alt="Not Fount" />
         <h2>Welcome !</h2>
         <p>Use these awesome forms to login or create new account in your project for free.</p>
         <form>
            <h3>Register with</h3>
            <div className="inp">
               <label htmlFor="nam">Name</label>
               <input type="text" placeholder='Your Full Name' required id="nam" />
            </div>
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
   )
}
