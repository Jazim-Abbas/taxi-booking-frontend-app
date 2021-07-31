import "./taxi_booking_conformation.css";
import ConfirmationForm from "./confirmation-form";
import TransferDetailToogle from "../taxi_booking_page_two/transfer-detail-toggle";

export default function taxi_booking_conformation() {
  return (
    <div>
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
    </div>
  );
}
