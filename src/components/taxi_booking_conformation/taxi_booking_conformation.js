import "./taxi_booking_conformation.css";
import ConfirmationForm from "./confirmation-form";
import { reduxBookingKeys } from "../../utils/constants";
import useReduxDataCheck from "../../hooks/useReduxDataCheck";
import TransferDetailToogle from "../taxi_booking_page_two/transfer-detail-toggle";
import AppLayout from "../common/layout";

export default function TaxiBookingConfirmation() {
  useReduxDataCheck([
    reduxBookingKeys.INITIAL_BOOKING,
    reduxBookingKeys.VEHICLE,
    reduxBookingKeys.EXTRAS,
    reduxBookingKeys.PERSONAL_DETAIL,
  ]);

  return (
    <AppLayout hasFooter={false}>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Conformation</h2>
            <hr />
            <div class="page_one_vehical">
              <TransferDetailToogle />

              <ConfirmationForm />
            </div>
          </div>
        </section>
      </section>
    </AppLayout>
  );
}
