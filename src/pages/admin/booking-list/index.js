import AdminLayout from "../../../components/common/admin-layout";

export default function AdminBookingList() {
  return (
    <AdminLayout>
      {/* body */}
      <div class="body">
        <div class="admin_container">
          {/* <!-- dashboard window start--> */}
          <div class="dashboard_window" id="dashboard_window">
            <div class="dashboard_form">
              <strong>Booking History:</strong>
              <div class="list_selecter">
                <select class="form-control" name="state" id="maxRows">
                  <option value="5000">Show ALL Rows</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div class="show_product">
                <table id="table-id">
                  <tr>
                    <th>Pickup Date</th>
                    <th>Pickup Time</th>
                    <th>Return Date</th>
                    <th>Return Time</th>
                    <th>Transfer Type</th>
                    <th>Payment Status</th>
                    <th>Total Passengers</th>
                    <th>Bags</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a href="#">View Detail</a>
                    </td>
                  </tr>
                </table>
              </div>

              {/* <!--        Start Pagination --> */}
              <div class="pagination-container">
                <nav>
                  <ul class="pagination">
                    <li data-page="prev">
                      <span>
                        {" "}
                        <span class="sr-only">(current)</span>
                      </span>
                    </li>

                    <li data-page="next" id="prev">
                      <span>
                        {" "}
                        <span class="sr-only">(current)</span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <!--         End of pagination --> */}
          </div>
        </div>

        <_Vehicles />

        <_AddNewTaxi />

        <_ExtrasList />

        <_AddNewExtra />
      </div>
      {/* end body */}
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
                <img src="image/standard.png" />
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

function _AddNewTaxi() {
  return (
    <section class="profile_section" id="add_new_car">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Vehicle</h2>
          <form>
            <div class="profile_form">
              <div class="profile_section_one">
                <figure>
                  <img src="image/standard.png" />
                </figure>
                <div class="upload_pic">
                  <input type="file" placeholder="change" />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Vehicle Name</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Passenger capacity</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Laguage capacity</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>price</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
            </div>
            <div class="profile_save_btn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function _ExtrasList() {
  return (
    <section class="profile_section" id="extras">
      <section class="admin_our_fleet">
        <div class="car_custom_container">
          <h2>Extras</h2>

          <div class="admin_fleet_services">
            <div class="admin_single_service">
              <h3>Red Stripe Beer (4 pack)</h3>
              <h4>4 Red Stripe Beers served inside the vehicle </h4>
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
              <h3>Red Stripe Beer (4 pack)</h3>
              <h4>4 Red Stripe Beers served inside the vehicle </h4>
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
              <h3>Red Stripe Beer (4 pack)</h3>
              <h4>4 Red Stripe Beers served inside the vehicle </h4>
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
              <h3>Red Stripe Beer (4 pack)</h3>
              <h4>4 Red Stripe Beers served inside the vehicle </h4>
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
              <h3>Red Stripe Beer (4 pack)</h3>
              <h4>4 Red Stripe Beers served inside the vehicle </h4>
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
              <h3>Red Stripe Beer (4 pack)</h3>
              <h4>4 Red Stripe Beers served inside the vehicle </h4>
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

function _AddNewExtra() {
  return (
    <section class="profile_section" id="add_new_extra">
      <div class="add_car_container">
        <div class="profile_section_data">
          <h2>Add New Extra</h2>
          <form>
            <div class="profile_form">
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Extra Name</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Extra Discription</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>price</label>
                  <input type="number" value="" placeholder="" />
                </div>
              </div>
            </div>
            <div class="profile_save_btn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
