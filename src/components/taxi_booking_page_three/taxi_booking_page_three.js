import "./taxi_booking_page_three.css";
import ContactDetail from "./contract-detail";
import useReduxDataCheck from "../../hooks/useReduxDataCheck";
import { reduxBookingKeys } from "../../utils/constants";
import TransferDetailToogle from "../taxi_booking_page_two/transfer-detail-toggle";
import AppLayout from "../common/layout";

export default function TaxiBookingPageThree() {
  useReduxDataCheck([
    reduxBookingKeys.INITIAL_BOOKING,
    reduxBookingKeys.VEHICLE,
    reduxBookingKeys.EXTRAS,
  ]);

  return (
    <AppLayout>
      <section className="taxi_booking_page_one_body">
        <section className="page_one_vehical_selection">
          <div className="custom_container">
            <h2>Personal Detail</h2>
            <div className="page_one_vehical">
              <TransferDetailToogle />

              <ContactDetail />
            </div>
          </div>
        </section>
      </section>
    </AppLayout>
  );
}
