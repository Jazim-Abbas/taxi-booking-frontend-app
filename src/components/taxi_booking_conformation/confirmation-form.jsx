import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ConfirmationForm() {
  const [isAccept, setIsAccept] = useState(false);
  const history = useHistory();
  const { vehicle, travelDistance } = useSelector((state) => state.booking);

  const calculateVehiclePrice = () => {
    if (Object.keys(travelDistance).length > 0) {
      return travelDistance.value * vehicle.pricePerKM;
    } else {
      return vehicle.pricePerKM;
    }
  };

  const handleConfirmBooking = () => {
    console.log("handle confirm booking");
    history.push("/pay-amount");
  };

  return (
    <div class="page_three_section_two">
      <form>
        {/* <_ContactForm /> */}

        <_VehicleDetail
          vehicle={vehicle}
          vehiclePrice={calculateVehiclePrice()}
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
              I accept the <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy.</a>{" "}
            </label>
          </div>
        </div>
      </form>

      <div class="page_three_continuous_btn">
        <div class="back">
          <Link to="/taxi_booking_page_three">Back</Link>
        </div>
        <div class="next">
          <button href="#" onClick={handleConfirmBooking} disabled={!isAccept}>
            Pay ammount (${calculateVehiclePrice()})
          </button>
        </div>
      </div>
    </div>
  );
}

function _ContactForm() {
  return (
    <div class="page_three_contact_detail">
      <div class="page_three_contact_header">
        <h4>Contact Detail</h4>
      </div>
      <div class="page_three_personal_detail">
        <div class="personal_detail_fields">
          <input type="text" Placeholder="First Name*" />
        </div>
        <div class="personal_detail_fields">
          <input type="text" Placeholder="Last Name*" />
        </div>
        <div class="personal_detail_fields">
          <input type="email" Placeholder="Email Address*" />
        </div>
        <div class="personal_detail_fields">
          <input type="number" Placeholder="Phone Number*" />
        </div>
      </div>
      <div class="personal_detail_comment">
        <input type="text" Placeholder="Comment" />
      </div>
    </div>
  );
}

function _VehicleDetail({ vehiclePrice, vehicle }) {
  return (
    <div class="conformation_vehicle_detail">
      <h2>Vehicle Detail</h2>
      <div class="booking_page_one_car_selection">
        <div class="booking_page_one_car_detail">
          <div class="booking_page_one_single_car_detail">
            <figure>
              <img src="assets/image/standard.png" />
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
            <strong>$ {vehiclePrice}</strong>
            <small>Free Cancelation</small>
            <small>No Hidden Charges</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function _PaymentMethod() {
  return (
    <div class="page_three_payment_method">
      <h2>Payment Method</h2>
      <span>
        <i class="fab fa-cc-stripe"></i>
      </span>
    </div>
  );
}
