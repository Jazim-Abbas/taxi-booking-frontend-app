import { Link } from "react-router-dom";

import "./SignUp.css";

export default function SignUpScreen() {
  return (
    <div>
      <section className="signup_section">
        <div className="signup_container">
          <Link to="/Home">Pick up</Link>
          <div className="signup_form">
            <h3>Sign up</h3>
            <SignUpForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function SignUpForm() {
  return (
    <form>
      <div className="signup_fields">
        <div className="input_field">
          <label>User Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input_field">
          <label>Email address</label>
          <input type="email" placeholder="" />
        </div>
        <div className="input_field">
          <label>Password</label>
          <input type="password" placeholder="" />
        </div>
        <div className="input_field">
          <label>Confirm password</label>
          <input type="password" placeholder="" />
        </div>
        <div className="submit_btn">
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  );
}
