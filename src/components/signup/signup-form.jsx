import { Field } from "formik";

import { AppForm, FieldError } from "../app-form";
import { registerSchema } from "../../utils/validations";
import { Link } from "react-router-dom";

export default function SignUpForm({ onSubmit }) {
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
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p>
          Goto <Link to="/">Home Page</Link>
        </p>
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
