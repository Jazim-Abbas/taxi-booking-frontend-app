export default function AccountScreen() {
  return (
    <>
      <section class="navigation_section">
        <div class="container">
          <div class="navigation">
            <ul id="navigation_active">
              <li
                class="change_nav_active navigation_active"
                onclick="profile_section()"
              >
                <a href="#">Profile</a>
              </li>
              <li
                class="change_nav_active "
                onclick="account_managment_section()"
              >
                <a href="#">Booking Details</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
