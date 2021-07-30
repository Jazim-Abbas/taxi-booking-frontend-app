import { Link } from "react-router-dom";

export default function ContactDetailForm() {
  return (
    <div class="page_three_section_two">
      <form>
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

        <div class="page_three_contact_detail">
          <div class="page_three_contact_header">
            <h4>Other Trip Detail</h4>
          </div>
          <div class="page_three_personal_detail">
            <div class="personal_detail_fields">
              <input type="text" Placeholder="Pickup Flight #" />
            </div>
            <div class="personal_detail_fields">
              <input type="text" Placeholder="Return Flight #" />
            </div>
            <div class="personal_detail_fields">
              <input type="text" Placeholder="# Of Pax *" />
            </div>
            <div class="personal_detail_fields">
              <input type="text" Placeholder="# Of Bags *" />
            </div>
          </div>
        </div>
      </form>

      <div class="page_three_payment_method">
        <h2>Choose Payment Method</h2>
        <span>
          <i class="fab fa-cc-stripe"></i>
        </span>
      </div>
      <div class="booking_page_one_price_detail" id="mobile_booking_summary">
        <h2>Booking Summary</h2>
        <div class="booking_page_one_total_price">
          <h3>Select Vehicle</h3>
          <span>$100</span>
        </div>
        <div class="booking_page_one_total_price total_price_border">
          <h3>Select Extra</h3>
          <span>$100</span>
        </div>
        <div class="booking_page_one_total_price">
          <h3>Total Price</h3>
          <span>$100</span>
        </div>
      </div>

      <div class="page_three_continuous_btn">
        <div class="back">
          <Link to="/taxi_booking_page_two">Back</Link>
        </div>
        <div class="next">
          <Link to="/taxi_booking_conformation">Next</Link>
        </div>
      </div>
    </div>
  );
}
