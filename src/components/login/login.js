import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./login.css";
import LoginForm from "./login-form";
import useApi from "../../hooks/useApi";
import * as authApi from "../../apis/auth";
import { createUser } from "../../store/user";

function LoginScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginApi = useApi(authApi.login, { hasCatchError: true });

  const handleLogin = async ({ formValues }) => {
    try {
      const res = await loginApi.request(formValues);
      const user = { ...res.data };
      dispatch(createUser(user));
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/");
      console.log("res: ", res.data);
    } catch (_) {}
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
