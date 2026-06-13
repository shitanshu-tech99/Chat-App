import React, { useState } from 'react'
import './login.css'
import assets from '../../assets/assets'
const login = () => {

    const  [currState,setcurrState] = useState("Sign Up");
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className="logo" />
        <form className="login-form">
            <h2>{currState}</h2>
            {currState === "Sign Up"?<input type="text" placeholder='username' className="form-input" required/>:null}
            <input type="email" placeholder='Email address' className="form-input" required/>
            <input type="password" placeholder='password' className="form-input" required/>
            <button type='submit'>{currState === "Sign Up"?"Create account":"Login now"}</button>
            <div className="login-term">
                <input type="checkbox"/>
                <p>Agree to the terms of use & privacy policy.</p>
            </div>
            <div className="login-forget">
                {
                    currState === "Sign Up"
                    ?<p className="login-toggle">Already have an account <span onClick={()=>setcurrState("Login")}>Login here</span></p>
                    :<p className="login-toggle">Create an account <span onClick={()=>setcurrState("Sign Up")}>click here</span></p>
                }   
            </div>
        </form>
      
    </div>
  )
}

export default login