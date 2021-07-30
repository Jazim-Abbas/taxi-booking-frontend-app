import { Link } from "react-router-dom";

import "./taxi_booking_page_one.css";
import SingleVehicle from "./single-vehicle";

export default function taxi_booking_page_one() {
  return (
    <div>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Select Vehicle</h2>
            <div class="page_one_vehical">
              <div class="page_one_section">
                <div class="mobile_route_deail" id="mobile_route_deail">
                  <div class="mobile_route_history">
                    <div class="location_history">
                      <span>Mallorca airport (PMI)</span>
                      <span>
                        <i class="fas fa-exchange-alt"></i>
                      </span>
                      <span>Alcúdia</span>
                    </div>
                    <div class="timing_history">
                      <div class="date_time_history">
                        <i class="far fa-calendar-alt"></i>
                        <span>Jul,30 at 12:00</span>
                        <span>-</span>
                        <span>Jul,30 at 12:00</span>
                      </div>
                      <div class="passenger">
                        <span>
                          <i class="fas fa-user-alt"></i>
                          <small>2</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <form>
                  <div class="airport_selection_fileds">
                    <div class="airport_fileds">
                      <span>
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <div class="air_input">
                        <span>Where From?</span>
                        <input
                          type="location"
                          placeholder="Departure Airport"
                        />
                      </div>
                    </div>

                    <div class="airport_fileds airport_fileds_border">
                      <span>
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <div class="air_input">
                        <span>Where To?</span>
                        <input type="location" placeholder="pickup Location" />
                      </div>
                    </div>

                    <div class="airport_fileds">
                      <span>
                        <i class="far fa-calendar-minus"></i>
                      </span>
                      <div class="air_input">
                        <span>Pickup Date</span>
                        <input type="date" placeholder="Flight Departure" />
                      </div>
                    </div>

                    <div class="airport_fileds ">
                      <span>
                        <i class="far fa-calendar-minus"></i>
                      </span>
                      <div class="air_input">
                        <span>Return Date</span>
                        <input type="date" placeholder="Add Return" />
                      </div>
                    </div>

                    <div class="airport_fileds ">
                      <span>
                        <i class="far fa-calendar-minus"></i>
                      </span>
                      <div class="air_input">
                        <span>Pickup Time</span>
                        <input type="time" placeholder="Time" />
                      </div>
                    </div>

                    <div class="airport_fileds ">
                      <span>
                        <i class="far fa-calendar-minus"></i>
                      </span>
                      <div class="air_input">
                        <span>Return Time</span>
                        <input type="time" placeholder="Time" />
                      </div>
                    </div>

                    <div class="airport_fileds_checkbox airport_fileds_border">
                      <input type="checkbox" />
                      <label>Only one way</label>
                    </div>

                    <div class="airport_fileds">
                      <span>
                        <i class="fas fa-user"></i>
                      </span>
                      <div class="air_input">
                        <span>Passengers</span>
                        <div class="page_one_Passengers">
                          <h5>
                            <span>0</span>
                            <span>children</span>
                          </h5>
                          <h5>
                            <span>0</span>
                            <span>Adult</span>
                          </h5>
                        </div>
                      </div>
                      <div class="quantites_box passenger_quantities">
                        <div class="single_box">
                          <div class="children">
                            <h3>Adults</h3>
                            <small>12+ year</small>
                          </div>
                          <div class="icon_section">
                            <i class="fas fa-minus-circle"></i>
                            <span>2</span>
                            <i class="fas fa-plus-circle"></i>
                          </div>
                        </div>

                        <div class="single_box">
                          <div class="children">
                            <h3>children</h3>
                            <small>2-12 year</small>
                          </div>
                          <div class="icon_section">
                            <i class="fas fa-minus-circle"></i>
                            <span>2</span>
                            <i class="fas fa-plus-circle"></i>
                          </div>
                        </div>

                        <div class="single_box">
                          <div class="children">
                            <h3>Infants</h3>
                            <small>under 2 year</small>
                          </div>
                          <div class="icon_section">
                            <i class="fas fa-minus-circle"></i>
                            <span>2</span>
                            <i class="fas fa-plus-circle"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="booking_page_one_btn">
                      <button type="submit">update search</button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="page_one_section_two">
                <ListVehicle />

                <div class="page_one_continous_btn">
                  <Link to="/Home">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

function ListVehicle() {
  return (
    <>
      <form>
        <SingleVehicle />
        <SingleVehicle />
        <SingleVehicle />
        <SingleVehicle />
      </form>
    </>
  );
}
