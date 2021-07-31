import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleMap from "google-map-react";

import "./taxi_booking_page_one.css";
import ListVehicle from "./list-vehicle";
import AppLoading from "../common/loading";
import UpdateTaxiBookingForm from "./update-taxi-booking-form";
import { GOOGLE_MAP_API_KEY } from "../../utils/constants";

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
                <UpdateTaxiBookingForm />
              </div>

              <div class="page_one_section_two">
                <_GoogleMap />

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

function _GoogleMap() {
  const [isMapLoading, setIsMapLoading] = useState(false);

  if (!isMapLoading) {
    return (
      <div>
        <p>
          Please wait map is loading ...
          <AppLoading />
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "50vh",
        backgroundColor: "tomato",
        marginBottom: "20px",
      }}
    >
      <GoogleMap
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
      />
    </div>
  );
}

const mapConfig = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
