import { Link } from "react-router-dom";

export default function ConfirmationForm() {
  const handleConfirmBooking = () => {
    console.log("handle confirm booking");
  };

  return (
    <div class="page_three_section_two">
      <form>
        {/* <_ContactForm /> */}

        <_VehicleDetail />

        <div class="page_three_payment_method">
          <h2>Payment Method</h2>
          <span>
            <i class="fab fa-cc-stripe"></i>
          </span>
        </div>
        <div class="conformation_term_section">
          <h2>Terms & Condition</h2>
          <div class="conformation_term_field">
            <input type="checkbox" />
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
          <button href="#" onClick={handleConfirmBooking}>
            Pay ammount ($100)
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

function _VehicleDetail() {
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
              <h1>Standard</h1>
              <span>
                <i class="fas fa-user"></i>
                <small>4 Paks</small>
              </span>
              <span>
                <i class="fas fa-suitcase-rolling"></i> <small>4 Bags</small>
              </span>
            </div>
          </div>
        </div>
        <div class="booking_page_one_car_detail">
          <div class="booking_page_one_car_price_detail">
            <strong>Total Price</strong>
            <strong>$100</strong>
            <small>Free Cancelation</small>
            <small>No Hidden Charges</small>
          </div>
        </div>
      </div>
    </div>
  );
}
