import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const { isAdmin } = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="dashboard">
      <section className="content">
        <section class={`side_bar ${isOpen ? "test" : ""}`}>
          <a class="closebtn sidebar-btn" onClick={() => setIsOpen(false)}>
            <i class="fas fa-times"></i>
          </a>

          <div class="side_bar_logo">
            <span>Dashboard</span>
          </div>
          <div class="dashboard_buttons" id="change_active">
            {/* <a class="btn">
              <span onclick="booking_detail()">Booking Detail</span>
            </a> */}
            <Link className="sidebar_btn" to="/">
              Home
            </Link>
            <Link className="sidebar_btn" to="/admin">
              Booking Detail
            </Link>
            {/* <a class="btn">
              <span onclick="car_type()">Vehicles</span>
            </a> */}
            {isAdmin && (
              <Link className="sidebar_btn" to="/admin/vehicles">
                Vehicles
              </Link>
            )}
            {/* <a class="btn">
              <span onclick="add_car_type()">Add Vehicle</span>
            </a> */}
            {isAdmin && (
              <Link className="sidebar_btn" to="/admin/add-vehicle">
                Add Vehicle
              </Link>
            )}
            {/* <a class="btn">
              <span onclick="extras()">Extras</span>
            </a> */}
            {isAdmin && (
              <Link className="sidebar_btn" to="/admin/extras">
                Extras
              </Link>
            )}
            {/* <a class="btn">
              <span onclick="add_new_extras()">Add Extras</span>
            </a> */}
            {isAdmin && (
              <Link className="sidebar_btn" to="/admin/add-extra">
                Add Extra
              </Link>
            )}
          </div>
        </section>

        <div class="admin_header-bar">
          <div class="sidebar-btn">
            <i class="fas fa-bars" onClick={() => setIsOpen(true)}></i>
          </div>

          <div class="admin_page_logo">
            <a href="index.html">PickUp</a>
          </div>
        </div>

        {children}
      </section>
    </section>
  );
}
