import { Link } from "react-router-dom";

import "./login.css";
import LoginForm from "./login-form";
import useApi from "../../hooks/useApi";
import * as authApi from "../../apis/auth";

function LoginScreen() {
  const loginApi = useApi(authApi.login);

  const handleLogin = ({ formValues }) => {
    loginApi.request(formValues);
    console.log("handle login", formValues);
  };

  return (
    <div>
      <section className="login_section">
        <div className="login_container">
          <Link to="/Home">PICK UP</Link>
          <div className="login_form">
            <h3>Log In</h3>
            <LoginForm onSubmit={handleLogin} isLoading={loginApi.isLoading} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginScreen;
