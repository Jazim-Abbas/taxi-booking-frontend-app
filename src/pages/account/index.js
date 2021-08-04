import { Link } from "react-router-dom";
import AccountNavbar from "../../components/common/account-navbar";
import "./account.css";

export default function AccountScreen() {
  return (
    <>
      <section class="profile_section" id="profile_section">
        <div class="custom_container">
          <div class="profile_section_data">
            <h2>Profile</h2>
            <form>
              <div class="profile_form">
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>User Name</label>
                    <input
                      type="text"
                      value="Logistings manager"
                      placeholder=""
                    />
                  </div>
                  <div class="profile_name">
                    <label>Email</label>
                    <input type="email" value="peter@mail.com" placeholder="" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
