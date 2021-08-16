import { Field } from "formik";
import { Link } from "react-router-dom";

import { AppForm, FieldError } from "../app-form";
import { personalDetailSchema } from "../../utils/validations";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BookingSummary } from "./contract-detail";

export default function ContactDetailForm({ onSubmit }) {
  const [initialValues, setInitialValues] = useState();
  const { personaDetail } = useSelector((state) => state.booking);
  console.log("booking in redux: ", personaDetail);

  useEffect(() => {
    if (Object.keys(personaDetail).length > 0) {
      setInitialValues({ ...personaDetail });
    } else {
      setInitialValues({ ..._initialValues });
    }
  }, []);

  console.log("initial values: ", initialValues);

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={personalDetailSchema}
      handleSubmit={onSubmit}
      enableReinitialize
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

      <BookingSummary />

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

const _initialValues = {
  firstName: "",
  lastName: "",
  passengerEmail: "",
  passengerNumber: "",
  pickupFlightNumber: "",
  returnFlightNumber: "",
  totalPassengers: "",
  totalBags: "",
};
