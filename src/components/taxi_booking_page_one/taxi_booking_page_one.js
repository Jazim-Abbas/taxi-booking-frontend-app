import { Link } from "react-router-dom";

import "./taxi_booking_page_one.css";
import GoogleMap from "./google-map";
import AppLayout from "../common/layout";
import ListVehicle from "./list-vehicle";
import UpdateTaxiBookingForm from "./update-taxi-booking-form";
import { useState } from "react";

export default function TaxiBookingPageOne() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AppLayout>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Select Vehicle</h2>

            <div class="page_one_vehical">
              <div class="page_one_section">
                <div class="mobile_route_deail" id="mobile_route_deail">
                  <div class="mobile_route_history" onClick={handleOpen}>
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
                <UpdateTaxiBookingForm isOpen={isOpen} />
              </div>

              <div class="page_one_section_two">
                <GoogleMap />
                <ListVehicle />

                <div class="page_one_continous_btn">
                  <Link to="/Home">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </AppLayout>
  );
}
