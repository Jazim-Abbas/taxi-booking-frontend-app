import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import moment from "moment";

import useApi from "../../hooks/useApi";
import * as bookingApi from "../../apis/booking";
import AppLoading from "../common/loading";
import ServerError from "../common/server-error";
import { BASE_URL } from "../../utils/constants";
import { BookingSummary } from "../taxi_booking_page_three/contract-detail";

export default function ConfirmationForm() {
  const [isAccept, setIsAccept] = useState(true);
  const history = useHistory();
  const booking = useSelector((state) => state.booking);
  const { vehicle, travelDistance } = booking;
  const { request, isLoading, error } = useApi(bookingApi.createBooking, {
    hasCatchError: true,
  });

  console.log("vehicle", vehicle);

  const calculateVehiclePrice = () => {
    if (Object.keys(travelDistance).length > 0) {
      return (travelDistance.value / 1000) * vehicle.pricePerKM;
    } else {
      return vehicle.pricePerKM;
    }
  };

  const handleConfirmBooking = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      localStorage.setItem("next-url", "taxi_booking_conformation");
      history.push("/login");
      return;
    }

    await _makeAppropriateFields();
    console.log("handle confirm booking");
  };

  const _makeAppropriateFields = async () => {
    const { initialBooking, personaDetail } = booking;
    console.log("initial Booking", initialBooking);

    let bookingFields = {
      pickupLocation: initialBooking.pickupLocation,
      dropoffLocation: initialBooking.dropoffLocation,
      startDateTime: _getDateOjb(
        initialBooking.pickupDate,
        initialBooking.pickupTime
      ),
      returnDateTime: _getDateOjb(
        initialBooking.returnDate,
        initialBooking.returnTime
      ),
      distance: travelDistance.value
        ? Math.floor(travelDistance.value / 1000)
        : 1,
      transferType: initialBooking.isOneWay ? "One way" : "Two way",
      vehicleId: vehicle.id,
      passengerName: personaDetail.firstName + " " + personaDetail.lastName,
      passengerEmail: personaDetail.passengerEmail,
      passengerNumber: personaDetail.passengerNumber,
      totalPassengers: 1,
      totalBags: personaDetail.totalBags,
      extrasPrice: _calculateExtrasPrice(),
      vehiclePrice: vehicle.price,
      vehicleType: vehicle.type,
    };
    if (!initialBooking.returnDate) {
      const { returnDateTime, ...rest } = bookingFields;
      bookingFields = { ...rest };
    }

    try {
      const res = await request(bookingFields);
      console.log("client secret", res.data.client_secret);
      window.localStorage.setItem("cs", res.data.client_secret);
      window.localStorage.setItem("bookingId", res.data.newBooking._id);
      history.push("/pay-amount");
    } catch (err) {
      console.log("error", err);
    }
  };

  const _getDateOjb = (date, time) => {
    return moment(`${date} ${time}`, "YYYY-MM-DD HH:mm A").format();
  };

  const _calculateExtrasPrice = () => {
    const { extras } = booking;
    let price = 0;

    extras.forEach((extra) => {
      const quantity = extra.quantity ?? 1;
      price += extra.price * quantity;
    });

    console.log("extras price: ", price);

    return price;
  };

  const _getTotalPrice = () => {
    return Math.floor(calculateVehiclePrice() + _calculateExtrasPrice());
  };

  return (
    <div class="page_three_section_two">
      <form>
        {/* <_ContactForm /> */}

        <VehicleDetail
          vehicle={vehicle}
          vehiclePrice={Math.floor(calculateVehiclePrice())}
        />

        {/* <_PaymentMethod /> */}
        <div class="conformation_term_section">
          <h2>Terms & Condition</h2>
          <div class="conformation_term_field">
            <input
              type="checkbox"
              value={isAccept}
              onChange={(e) => setIsAccept(e.target.checked)}
            />
            <label>
              {" "}
              I accept the <a href="#1">Terms & Conditions</a> and{" "}
              <a href="#1">Privacy Policy.</a>{" "}
            </label>
          </div>
        </div>
      </form>

      <div style={{ marginBottom: "20px" }}>
        {isLoading && <AppLoading />}
        <ServerError error={error} />
      </div>

      <BookingSummary />

      <div class="page_three_continuous_btn">
        <div class="back">
          <Link to="/taxi_booking_page_three">Back</Link>
        </div>
        <div class="next">
          <button href="#" onClick={handleConfirmBooking} disabled={!isAccept}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

// function _ContactForm() {
//   return (
//     <div class="page_three_contact_detail">
//       <div class="page_three_contact_header">
//         <h4>Contact Detail</h4>
//       </div>
//       <div class="page_three_personal_detail">
//         <div class="personal_detail_fields">
//           <input type="text" Placeholder="First Name*" />
//         </div>
//         <div class="personal_detail_fields">
//           <input type="text" Placeholder="Last Name*" />
//         </div>
//         <div class="personal_detail_fields">
//           <input type="email" Placeholder="Email Address*" />
//         </div>
//         <div class="personal_detail_fields">
//           <input type="number" Placeholder="Phone Number*" />
//         </div>
//       </div>
//       <div class="personal_detail_comment">
//         <input type="text" Placeholder="Comment" />
//       </div>
//     </div>
//   );
// }

function VehicleDetail({ vehiclePrice, vehicle }) {
  return (
    <div class="conformation_vehicle_detail">
      <h2>Vehicle Detail</h2>
      <div class="booking_page_one_car_selection">
        <div class="booking_page_one_car_detail">
          <div class="booking_page_one_single_car_detail">
            <figure>
              <img
                style={{ width: "180px", height: "100%" }}
                src={`${BASE_URL}/${vehicle.image}`}
                alt=""
              />
            </figure>
            <div class="page_one_single_car_detail">
              <h1>{vehicle.name}</h1>
              <span>
                <i class="fas fa-user"></i>
                <small>{vehicle.passengerCapacity} Passengers</small>
              </span>
              <span>
                <i class="fas fa-suitcase-rolling"></i>{" "}
                <small>{vehicle.luggageCapacity} Bags</small>
              </span>
            </div>
          </div>
        </div>
        <div class="booking_page_one_car_detail">
          <div class="booking_page_one_car_price_detail">
            <strong>Total Price</strong>
            <strong>$ {vehicle.price}</strong>
            <small>Free Cancelation</small>
            <small>No Hidden Charges</small>
          </div>
        </div>
      </div>
    </div>
  );
}

// function _PaymentMethod() {
//   return (
//     <div class="page_three_payment_method">
//       <h2>Payment Method</h2>
//       <span>
//         <i class="fab fa-cc-stripe"></i>
//       </span>
//     </div>
//   );
// }
