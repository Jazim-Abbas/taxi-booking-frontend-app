import { Link } from "react-router-dom";

import "./taxi_booking_page_one.css";
import GoogleMap from "./google-map";
import AppLayout from "../common/layout";
import ListVehicle from "./list-vehicle";
import UpdateTaxiBookingForm from "./update-taxi-booking-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function TaxiBookingPageOne() {
  const { initialBooking } = useSelector((state) => state.booking);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  console.log("initial booking: ", initialBooking);

  return (
    <AppLayout hasFooter={false}>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Select Vehicle</h2>

            <div class="page_one_vehical">
              <div class="page_one_section">
                <div class="mobile_route_deail" id="mobile_route_deail">
                  <div class="mobile_route_history" onClick={handleOpen}>
                    <div class="location_history">
                      <span>{initialBooking.dropoffLocation}</span>
                      <span>
                        <i class="fas fa-exchange-alt"></i>
                      </span>
                      <span>{initialBooking.pickupLocation}</span>
                    </div>
                    <div class="timing_history">
                      <div class="date_time_history">
                        <i class="far fa-calendar-alt"></i>
                        <span>
                          {" "}
                          {moment(initialBooking.pickupDate).format(
                            "MMM Do"
                          )}{" "}
                          at {initialBooking.pickupTime}
                        </span>
                        <span>-</span>
                        {initialBooking.returnDate && (
                          <span>
                            {moment(initialBooking.returnDate).format("MMM Do")}{" "}
                            at {initialBooking.returnTime}
                          </span>
                        )}
                        {!initialBooking.returnDate && <span>No return date and time</span>}
                      </div>
                      <div class="passenger">
                        <span>
                          <i class="fas fa-user-alt"></i>
                          <small>{initialBooking.passengers}</small>
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
