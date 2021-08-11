export default function AdminLayout({ children }) {
  return (
    <section className="dashboard">
      <section className="content">
        <section class="side_bar">
          <a class="closebtn sidebar-btn">
            <i class="fas fa-times"></i>
          </a>

          <div class="side_bar_logo">
            <span>Dashboard</span>
          </div>
          <div class="dashboard_buttons" id="change_active">
            <a class="btn active">
              <span onclick="booking_detail()">Booking Detail</span>
            </a>
            <a class="btn">
              <span onclick="car_type()">Vehicles</span>
            </a>
            <a class="btn">
              <span onclick="add_car_type()">Add Vehicle</span>
            </a>
            <a class="btn">
              <span onclick="extras()">Extras</span>
            </a>
            <a class="btn">
              <span onclick="add_new_extras()">Add Extras</span>
            </a>
          </div>
        </section>

        <div class="admin_header-bar">
          <div class="sidebar-btn">
            <i class="fas fa-bars"></i>
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
