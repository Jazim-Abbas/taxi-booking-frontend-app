import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ContactDetailForm from "./contact-detail-form";
import { addPersonalDetail } from "../../store/booking";

export default function ContactDetail() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = ({ formValues }) => {
    console.log("handle submit: ", formValues);
    dispatch(addPersonalDetail(formValues));
    history.push("/taxi_booking_conformation");
  };

  return (
    <div class="page_three_section_two">
      <ContactDetailForm onSubmit={handleSubmit} />

      {/* <_PaymentMethod /> */}
      <_BookingSummary />
    </div>
  );
}

function _BookingSummary() {
  return (
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
  );
}

function _PaymentMethod() {
  return (
    <div class="page_three_payment_method">
      <h2>Choose Payment Method</h2>
      <span>
        <i class="fab fa-cc-stripe"></i>
      </span>
    </div>
  );
}
