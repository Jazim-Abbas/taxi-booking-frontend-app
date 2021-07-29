import { Field } from "formik";
import { Link } from "react-router-dom";

import "./login.css";
import { AppForm } from "../app-form";

function LoginScreen() {
  const handleLogin = () => {
    console.log("handle login");
  };

  return (
    <div>
      <section className="login_section">
        <div className="login_container">
          <Link to="/Home">PICK UP</Link>
          <div className="login_form">
            <h3>Log In</h3>
            <AppForm initialValues={initialValues} handleSubmit={handleLogin}>
              <div className="login_fields">
                <div className="input_field">
                  <label>Email address</label>
                  <Field type="email" name="email" />
                </div>
                <div className="input_field">
                  <label>Password</label>
                  <Field type="password" name="password" />
                </div>
                <div className="submit_btn">
                  <button type="submit">Login</button>
                </div>
              </div>
            </AppForm>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginScreen;

const initialValues = {
  email: "",
  password: "",
};
