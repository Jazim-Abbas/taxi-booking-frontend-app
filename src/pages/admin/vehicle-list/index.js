import imgSrc from "./standard.png";
import AdminLayout from "../../../components/common/admin-layout";

export default function AdminVehicleList() {
  return (
    <AdminLayout>
      <_Vehicles />
    </AdminLayout>
  );
}

function _Vehicles() {
  return (
    <section class="message_window" id="car_type">
      <section class="admin_our_fleet">
        <div class="car_custom_container">
          <h2>Vehicles</h2>

          <div class="admin_fleet_services">
            <div class="admin_single_service">
              <figure>
                <img src={imgSrc} />
              </figure>
              <h3>Standard</h3>
              <h4>4 pax &amp; 4 bags</h4>
              <div class="vehical_price_box">
                <span>100$</span>
              </div>
              <div class="single_taxi_btn">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>
              </div>
            </div>
            <div class="admin_single_service">
              <figure>
                <img src="image/standard.png" />
              </figure>
              <h3>VIP &amp; Exec</h3>
              <h4>3 pax &amp; 3 bags</h4>
              <div class="vehical_price_box">
                <span>100$</span>
              </div>
              <div class="single_taxi_btn">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>
              </div>
            </div>
            <div class="admin_single_service">
              <figure>
                <img src="image/family.png" />
              </figure>
              <h3>Family</h3>
              <h4>5 pax &amp; 6 bags</h4>
              <div class="vehical_price_box">
                <span>100$</span>
              </div>
              <div class="single_taxi_btn">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>
              </div>
            </div>
            <div class="admin_single_service">
              <figure>
                <img src="image/minivan.png" />
              </figure>
              <h3>Minivan</h3>
              <h4>9 pax &amp; 9 bags</h4>
              <div class="vehical_price_box">
                <span>100$</span>
              </div>
              <div class="single_taxi_btn">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>
              </div>
            </div>
            <div class="admin_single_service">
              <figure>
                <img src="image/smallbus.png" />
              </figure>
              <h3>Small Bus</h3>
              <h4>15 pax &amp; 15 bags</h4>
              <div class="vehical_price_box">
                <span>100$</span>
              </div>
              <div class="single_taxi_btn">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>
              </div>
            </div>
            <div class="admin_single_service">
              <figure>
                <img src="image/coash.png" />
              </figure>
              <h3>Coach</h3>
              <h4>30 pax &amp; 30 bags</h4>
              <div class="vehical_price_box">
                <span>100$</span>
              </div>
              <div class="single_taxi_btn">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
