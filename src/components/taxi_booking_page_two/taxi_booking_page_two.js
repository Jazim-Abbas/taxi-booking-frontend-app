import React, { Component } from "react";

import "./taxi_booking_page_two.css";

import ListExtras from "./list-extra";
import { reduxBookingKeys } from "../../utils/constants";
import TransferDetailToogle from "./transfer-detail-toggle";
import useReduxDataCheck from "../../hooks/useReduxDataCheck";
import AppLayout from "../common/layout";

export default function TaxiBookingPageTwo() {
  useReduxDataCheck([
    // reduxBookingKeys.INITIAL_BOOKING,
    // reduxBookingKeys.VEHICLE,
  ]);

  return (
    <AppLayout>
      <section class="taxi_booking_page_one_body">
        <section class="page_one_vehical_selection">
          <div class="custom_container">
            <h2>Select Extra</h2>
            <div class="page_one_vehical">
              <TransferDetailToogle />

              <ListExtras />
            </div>
          </div>
        </section>
      </section>
    </AppLayout>
  );
}
