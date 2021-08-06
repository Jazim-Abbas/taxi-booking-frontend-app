import { Link, useHistory } from "react-router-dom";

import "./SignUp.css";
import SignUpForm from "./signup-form";
import useApi from "../../hooks/useApi";
import * as authApi from "../../apis/auth";
import AppLoading from "../common/loading";
import ServerError from "../common/server-error";

export default function SignUpScreen() {
  const history = useHistory();
  const { request, isLoading, error } = useApi(authApi.register, {
    hasCatchError: true,
  });

  const handleRegister = async ({ formValues }) => {
    console.log("handle registration", formValues);
    try {
      await request({ ...formValues, name: formValues.username });
      history.push("/login");
    } catch (_) {}
  };

  return (
    <div>
      <section className="signup_section">
        <div className="signup_container">
          <Link to="/Home">Pick up</Link>
          <div className="signup_form">
            <h3>Sign up</h3>
            <ServerError error={error} />
            {isLoading && <AppLoading />}
            <SignUpForm onSubmit={handleRegister} />
          </div>
        </div>
      </section>
    </div>
  );
}
