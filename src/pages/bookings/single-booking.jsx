import moment from "moment";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./view_detail.css";
import useApi from "../../hooks/useApi";
import * as bookingsApi from "../../apis/booking";
import AppLoading from "../../components/common/loading";

const singleBooking = {
  pickupLocation: "pickup location",
  dropoffLocation: "drop off location",
  pickupDate: "2020-04-12",
  pickupTime: "10:12 AM",
  returnDate: "2020-05-12",
  returnTime: "10:12 PM",
  vehicle: {
    id: 1,
    name: "taxi 1",
    description: "vehicle description",
    price: 12,
    passengerCapacity: 2,
    luggageCapacity: 3,
  },
  travelDistance: "300 KM",
  travelTime: "4 hours 47 minute",
  vehiclePrice: 300,
  extraPrice: 500,
  totalPrice: 800,
};

export default function SingleBookingScreen() {
  const { id } = useParams();
  console.log("id: ", id);
  const {
    request,
    data: _booking,
    isLoading,
  } = useApi(bookingsApi.singleBooking, {
    keyExtractor: "booking",
  });
  const [booking] = useState({ ...singleBooking });

  useEffect(() => {
    request(id);
    //eslint-disable-next-line
  }, []);

  if (isLoading || !_booking) {
    return <AppLoading />;
  }

  return (
    <>
      <div class="page_one_vehical">
        <div class="customer_admin">
          <div class="custom_container">
            <Link to="/admin">{"<-"} Back to Bookings Page</Link>
            <div
              class="page_two_booking_complete_summary"
              style={{ marginTop: "20px" }}
            >
              <p>Transfer Details</p>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="transfer_detail_box">
              <div class="pickup_detail_box">
                <h4>Pickup</h4>
                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>WHERE FROM</span>
                    <p>{_booking.pickupLocation}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>WHERE TO</span>
                    <p>{_booking.dropoffLocation}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="far fa-calendar-alt"></i>
                  <div class="where_from_location">
                    <span>PICKUP DATE</span>
                    <p>
                      {moment(booking.startDateTime).format("YYYY-MM-DD")}{" "}
                      <small>
                        [{moment(booking.startDateTime).format("MMM Do YYYY")}]
                      </small>
                    </p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>PICKUP TIME</span>
                    <p>{moment(booking.startDateTime).format("LT")}</p>
                  </div>
                </div>
              </div>

              {_booking.returnDateTime && (
                <div class="pickup_detail_box">
                  <h4>Return</h4>
                  <div class="where_from">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="where_from_location">
                      <span>WHERE FROM</span>
                      <p>{_booking.dropoffLocation}</p>
                    </div>
                  </div>

                  <div class="where_from">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="where_from_location">
                      <span>WHERE TO</span>
                      <p>{_booking.pickupLocation}</p>
                    </div>
                  </div>

                  <div class="where_from">
                    <i class="far fa-calendar-alt"></i>
                    <div class="where_from_location">
                      <span>RETURN DATE</span>
                      <p>
                        {_booking.returnDateTime}{" "}
                        <small>
                          [
                          {moment(_booking.returnDateTime).format(
                            "MMM Do YYYY"
                          )}
                          ]
                        </small>
                      </p>
                    </div>
                  </div>

                  <div class="where_from">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="where_from_location">
                      <span>PICKUP TIME</span>
                      <p>{_booking.returnDateTime}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* <div class="pickup_detail_box">
                <h4>{booking.vehicle.name}</h4>
                <div class="where_from">
                  <i class="fas fa-car quantites_icon"></i>
                  <div class="where_from_location">
                    <span>{booking.vehicle.description}</span>
                    <p>
                      Private Taxi With Capacity for{" "}
                      <small> {booking.vehicle.passengerCapacity} </small>{" "}
                      passengers
                      <small> {booking.vehicle.luggageCapacity} </small>medium
                      suitecases
                      <small>2</small> small
                      hand  luggage items
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div class="pickup_detail_box">
                <h4>Passengers</h4>
                <div class="where_from">
                  <i class="fas fa-user"></i>
                  <div class="where_from_location">
                    <span>No of Passengers</span>
                    <p>{booking.vehicle.passengerCapacity}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-user"></i>
                  <div class="where_from_location">
                    <span>CHILDREN</span>
                    <p>0</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-user"></i>
                  <div class="where_from_location">
                    <span>INFANTS</span>
                    <p>0</p>
                  </div>
                </div>
              </div> */}

              {/* <div class="pickup_detail_box">
                <h4>Travel Distance & Time</h4>
                <div class="where_from">
                  <i class="fas fa-car quantites_icon"></i>
                  <div class="where_from_location">
                    <span>DESCRIPTION</span> 
                    <p>
                      {_booking.distance} KM &{" "}
                      <small> {booking.travelTime}</small>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <div
              class="booking_page_one_price_detail"
              id="laptop_booking_summary"
            >
              <h2>Booking Summary</h2>
              {/* <div class="booking_page_one_total_price">
                <h3>Selected Vehicle</h3>
                <span>${booking.vehiclePrice}</span>
              </div>
              <div class="booking_page_one_total_price total_price_border">
                <h3>Selected Extra</h3>
                <span>${booking.extraPrice}</span>
              </div> */}
              <div class="booking_page_one_total_price">
                <h3>Total Price</h3>
                <span>${_booking.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
