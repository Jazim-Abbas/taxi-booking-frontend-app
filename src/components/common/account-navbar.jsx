import { Link, useRouteMatch } from "react-router-dom";

export default function AccountNavbar() {
  const { url } = useRouteMatch();

  return (
    <section class="navigation_section">
      <div class="admin-container">
        <div class="navigation">
          <ul id="navigation_active">
            <li class="change_nav_active">
              <Link to="/">Home</Link>
            </li>
            {/* <li class="change_nav_active">
              <Link to={url}>Profile</Link>
            </li>
            <li class="change_nav_active ">
              <Link to={`${url}/bookings`}>Bookings</Link>
            </li> */}
            <li class="change_nav_active ">
              <Link to={`${url}`}>Bookings</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
