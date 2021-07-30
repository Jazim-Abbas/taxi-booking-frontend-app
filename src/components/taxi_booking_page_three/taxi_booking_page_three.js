import "./taxi_booking_page_three.css";
import ContactDetailForm from "./contract-detail-form";
import TransferDetailToogle from "../taxi_booking_page_two/transfer-detail-toggle";

export default function taxi_booking_page_three() {
  return (
    <div>
      <section className="taxi_booking_page_one_body">
        <section className="page_one_vehical_selection">
          <div className="custom_container">
            <h2>Personal Detail</h2>
            <div className="page_one_vehical">
              <TransferDetailToogle />

              <ContactDetailForm />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
