import { Link } from "react-router-dom";
import { Field } from "formik";

import "./SignUp.css";
import { AppForm } from "../app-form";

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
    <AppForm>
      <div className="signup_fields">
        <div className="input_field">
          <label>User Name</label>
          <Field type="text" name="username" />
        </div>
        <div className="input_field">
          <label>Email address</label>
          <Field type="email" name="email" />
        </div>
        <div className="input_field">
          <label>Password</label>
          <Field type="password" name="password" />
        </div>
        <div className="input_field">
          <label>Confirm password</label>
          <Field type="password" name="confirmPassword" />
        </div>
        <div className="submit_btn">
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </AppForm>
  );
}
