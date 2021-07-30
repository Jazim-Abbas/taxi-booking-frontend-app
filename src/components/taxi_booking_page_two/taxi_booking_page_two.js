import React, { Component } from "react";

import "./taxi_booking_page_two.css";

import ListExtras from "./list-extra";
import TransferDetailToogle from "./transfer-detail-toggle";

export default function taxi_booking_page_two() {
  return (
    <div>
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
    </div>
  );
}
