import { Field } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AppForm, FieldError } from "../app-form";
import { addPersonalDetail } from "../../store/booking";
import { personalDetailSchema } from "../../utils/validations";

export default function ContactDetailForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = ({ formValues }) => {
    console.log("handle submit: ", formValues);
    dispatch(addPersonalDetail(formValues));
    history.push("/taxi_booking_conformation");
  };

  return (
    <div class="page_three_section_two">
      <_ContactForm onSubmit={handleSubmit} />

      {/* <div class="page_three_payment_method">
        <h2>Choose Payment Method</h2>
        <span>
          <i class="fab fa-cc-stripe"></i>
        </span>
      </div> */}
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
    </div>
  );
}

function _ContactForm({ onSubmit }) {
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={personalDetailSchema}
      handleSubmit={onSubmit}
    >
      <div class="page_three_contact_detail">
        <div class="page_three_contact_header">
          <h4>Contact Detail</h4>
        </div>
        <div class="page_three_personal_detail">
          <div class="personal_detail_fields">
            <Field type="text" Placeholder="First Name*" name="firstName" />
            <FieldError field="firstName" />
          </div>
          <div class="personal_detail_fields">
            <Field type="text" Placeholder="Last Name*" name="lastName" />
            <FieldError field="lastName" />
          </div>
          <div class="personal_detail_fields">
            <Field
              type="email"
              Placeholder="Email Address*"
              name="passengerEmail"
            />
            <FieldError field="passengerEmail" />
          </div>
          <div class="personal_detail_fields">
            <Field
              type="number"
              Placeholder="Phone Number*"
              name="passengerNumber"
            />
            <FieldError field="passengerNumber" />
          </div>
        </div>
      </div>

      <div class="page_three_contact_detail">
        <div class="page_three_contact_header">
          <h4>Other Trip Detail</h4>
        </div>
        <div class="page_three_personal_detail">
          <div class="personal_detail_fields">
            <Field
              type="text"
              Placeholder="Pickup Flight #"
              name="pickupFlightNumber"
            />
            <FieldError field="pickupFlightNumber" />
          </div>
          <div class="personal_detail_fields">
            <Field
              type="text"
              Placeholder="Return Flight #"
              name="returnFlightNumber"
            />
            <FieldError field="returnFlightNumber" />
          </div>
          <div class="personal_detail_fields">
            <Field
              type="text"
              Placeholder="# Of Pax *"
              name="totalPassengers"
            />
            <FieldError field="totalPassengers" />
          </div>
          <div class="personal_detail_fields">
            <Field type="text" Placeholder="# Of Bags *" name="totalBags" />
            <FieldError field="totalBags" />
          </div>
        </div>
      </div>

      <div class="page_three_continuous_btn">
        <div class="back">
          <Link to="/taxi_booking_page_two">Back</Link>
        </div>
        <div class="next">
          {/* <Link to="/taxi_booking_conformation">Next</Link> */}
          <button type="submit">Next</button>
        </div>
      </div>
    </AppForm>
  );
}

const initialValues = {
  firstName: "",
  lastName: "",
  passengerEmail: "",
  passengerNumber: "",
  pickupFlightNumber: "",
  returnFlightNumber: "",
  totalPassengers: "",
  totalBags: "",
};
