import { Field } from "formik";

import { AppForm, FieldError } from "../app-form";
import { loginSchema } from "../../utils/validations";
import AppLoading from "../common/loading";
import { Link } from "react-router-dom";

export default function LoginForm({ onSubmit, isLoading }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      handleSubmit={onSubmit}
    >
      <div className="login_fields">
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
        <div className="submit_btn">
          {isLoading && <AppLoading />}
          {!isLoading && <button type="submit">Login</button>}
        </div>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
        <p>
          Goto <Link to="/">Home Page</Link>
        </p>
      </div>
    </AppForm>
  );
}

const initialValues = {
  email: "",
  password: "",
};
