import { Link } from "react-router-dom";
import { Field } from "formik";

import "./SignUp.css";
import { AppForm, FieldError } from "../app-form";
import { registerSchema } from "../../utils/validations";

export default function SignUpScreen() {
  const handleRegister = ({ formValues }) => {
    console.log("handle registration", formValues);
  };

  return (
    <div>
      <section className="signup_section">
        <div className="signup_container">
          <Link to="/Home">Pick up</Link>
          <div className="signup_form">
            <h3>Sign up</h3>
            <SignUpForm onSubmit={handleRegister} />
          </div>
        </div>
      </section>
    </div>
  );
}

function SignUpForm({ onSubmit }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={registerSchema}
      handleSubmit={onSubmit}
    >
      <div className="signup_fields">
        <div className="input_field">
          <label>User Name</label>
          <Field type="text" name="username" />
          <FieldError field="username" />
        </div>
        <div className="input_field">
          <label>Email address</label>
          <Field type="email" name="email" />
          <FieldError field="email" />
        </div>
        <div className="input_field">
          <label>Password</label>
          <Field type="password" name="password" />
          <FieldError field="password" />
        </div>
        <div className="input_field">
          <label>Confirm password</label>
          <Field type="password" name="confirmPassword" />
          <FieldError field="confirmPassword" />
        </div>
        <div className="submit_btn">
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </AppForm>
  );
}

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
