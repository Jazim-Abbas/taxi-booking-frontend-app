import React, {Component} from 'react';

import './SignUp.css';

import {Link} from 'react-router-dom';

class SignUp extends React.Component{

    render(){
        return(
<div>
  
<section class="signup_section">
       <div class="signup_container">
        <Link to='/Home'>Pick up</Link>
         <div class="signup_form">
             <h3>Sign up</h3>
             <form>
                <div class="signup_fields"> 
                  
                     <div class="input_field">
                        <label>User Name</label>
                        <input type="text" placeholder="" />
                         </div>
                 <div class="input_field">
                 <label>Email address</label>
                 <input type="email" placeholder="" />
                 </div>
                 <div class="input_field">
                 <label>Password</label>
                 <input type="password" placeholder="" />
                 </div>
                 <div class="input_field">
                    <label>Confirm password</label>
                    <input type="password" placeholder="" />
                    </div>
                 <div class="submit_btn">
                 <button type="submit">Sign Up</button>
                 </div>
             
                </div> 
             </form>
           
         </div>
        
       </div>
   </section>

</div>
        )
    }
}
export default SignUp