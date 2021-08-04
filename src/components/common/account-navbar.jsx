import { Link, useRouteMatch } from "react-router-dom";

export default function AccountNavbar() {
  const { url } = useRouteMatch();

  return (
    <section class="navigation_section">
      <div class="admin-container">
        <div class="navigation">
          <ul id="navigation_active">
            <li
              class="change_nav_active navigation_active"
              onclick="profile_section()"
            >
              <Link to={url}>Profile</Link>
            </li>
            <li
              class="change_nav_active "
              onclick="account_managment_section()"
            >
              <Link to={`${url}/bookings`}>Booking Details</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
