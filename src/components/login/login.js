import React, {Component} from 'react';

import './login.css';

import {Link} from 'react-router-dom';

class login extends React.Component{

    render(){
        return(
<div>

  
<section class="login_section">
       <div class="login_container">
         <Link to='/Home'>PICK UP</Link>
         <div class="login_form">
             <h3>Log In</h3>
             <form>
                <div class="login_fields"> 
                 <div class="input_field">
                 <label>Email address</label>
                 <input type="email" placeholder="" />
                 </div>
                 <div class="input_field">
                 <label>Password</label>
                 <input type="password" placeholder="" />
                 </div>
                 <div class="submit_btn">
                 <button type="submit">Login</button>
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
export default login