import { Link } from "react-router-dom";

import "./SignUp.css";
import SignUpForm from "./signup-form";

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
