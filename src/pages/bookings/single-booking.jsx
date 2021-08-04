import { useState } from "react";
import "./view_detail.css";

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
  const [booking, setBooking] = useState({ ...singleBooking });

  return (
    <>
      <div class="page_one_vehical">
        <div class="customer_admin">
          <div class="custom_container">
            <div class="page_two_booking_complete_summary">
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
                    <p>{booking.pickupLocation}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>WHERE TO</span>
                    <p>{booking.dropoffLocation}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="far fa-calendar-alt"></i>
                  <div class="where_from_location">
                    <span>TRAVEL DATE</span>
                    <p>
                      {booking.pickupDate} <small>[Friday 30,July]</small>
                    </p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>PICKUP TIME</span>
                    <p>{booking.pickupTime}</p>
                  </div>
                </div>
              </div>

              <div class="pickup_detail_box">
                <h4>Return</h4>
                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>WHERE FROM</span>
                    <p>{booking.dropoffLocation}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>WHERE TO</span>
                    <p>{booking.pickupLocation}</p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="far fa-calendar-alt"></i>
                  <div class="where_from_location">
                    <span>TRAVEL DATE</span>
                    <p>
                      {booking.returnDate} <small>[Friday 30,July]</small>
                    </p>
                  </div>
                </div>

                <div class="where_from">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="where_from_location">
                    <span>PICKUP TIME</span>
                    <p>{booking.returnTime}</p>
                  </div>
                </div>
              </div>

              <div class="pickup_detail_box">
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
                      {/* <small>2</small> small */}
                      {/* hand  luggage items */}
                    </p>
                  </div>
                </div>
              </div>

              <div class="pickup_detail_box">
                <h4>Passengers</h4>
                <div class="where_from">
                  <i class="fas fa-user"></i>
                  <div class="where_from_location">
                    <span>No of Passengers</span>
                    <p>{booking.vehicle.passengerCapacity}</p>
                  </div>
                </div>

                {/* <div class="where_from">
                  <i class="fas fa-user"></i>
                  <div class="where_from_location">
                    <span>CHILDREN</span>
                    <p>0</p>
                  </div>
                </div> */}

                {/* <div class="where_from">
                  <i class="fas fa-user"></i>
                  <div class="where_from_location">
                    <span>INFANTS</span>
                    <p>0</p>
                  </div>
                </div> */}
              </div>

              <div class="pickup_detail_box">
                <h4>Travel Distance & Time</h4>
                <div class="where_from">
                  <i class="fas fa-car quantites_icon"></i>
                  <div class="where_from_location">
                    {/* <!-- <span>DESCRIPTION</span> --> */}
                    <p>
                      {booking.travelDistance} &{" "}
                      <small> {booking.travelTime}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="booking_page_one_price_detail"
              id="laptop_booking_summary"
            >
              <h2>Booking Summary</h2>
              <div class="booking_page_one_total_price">
                <h3>Selected Vehicle</h3>
                <span>${booking.vehiclePrice}</span>
              </div>
              <div class="booking_page_one_total_price total_price_border">
                <h3>Selected Extra</h3>
                <span>${booking.extraPrice}</span>
              </div>
              <div class="booking_page_one_total_price">
                <h3>Total Price</h3>
                <span>${booking.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
