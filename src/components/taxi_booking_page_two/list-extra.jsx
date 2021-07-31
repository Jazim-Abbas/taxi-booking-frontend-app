import { useState } from "react";
import { Link } from "react-router-dom";

import SingleExtra from "./single-extra";
import { extrasList } from "./extras.data";

export default function ListExtras() {
  const [extras, setExtras] = useState(extrasList);

  const handleExtraQuantity = (actionName, extraId) => {
    console.log("handle extra quantity", actionName, extraId);
    setExtras((prevExtras) => {
      return prevExtras.map((extra) => {
        if (extra.id === extraId) {
          let quantity = extra.quantity ?? 0;
          quantity = actionName === "increment" ? ++quantity : --quantity;
          return { ...extra, quantity: quantity };
        }
        return extra;
      });
    });
  };

  const handleNavigateToNext = () => {
    console.log("navigation", extras);
  };

  return (
    <div class="page_two_section_two">
      <_ExtrasList extras={extras} onUpdateQty={handleExtraQuantity} />
      <_BookingSummary />
      <_NavigateToPages onNavigateNext={handleNavigateToNext} />
    </div>
  );
}

function _ExtrasList({ extras, onUpdateQty }) {
  return (
    <form>
      {extras.map((extra, i) => {
        if (i < 2) {
          return (
            <SingleExtra
              key={extra.id}
              hasQuantity={true}
              extra={extra}
              onUpdateQty={onUpdateQty}
            />
          );
        } else {
          return (
            <SingleExtra
              key={extra.id}
              extra={extra}
              onUpdateQty={onUpdateQty}
            />
          );
        }
      })}
    </form>
  );
}

function _BookingSummary() {
  return (
    <div class="booking_page_one_price_detail" id="mobile_booking_summary">
      <h2>Booking Summary</h2>
      <div class="booking_page_one_total_price">
        <h3>Selected Vehicle</h3>
        <span>$100</span>
      </div>
      <div class="booking_page_one_total_price total_price_border">
        <h3>Selected Extra</h3>
        <span>$100</span>
      </div>
      <div class="booking_page_one_total_price">
        <h3>Total Price</h3>
        <span>$100</span>
      </div>
    </div>
  );
}

function _NavigateToPages({ onNavigateNext }) {
  return (
    <div class="continuous_btn">
      <div class="back">
        <Link to="/taxi_booking_page_one">Back</Link>
      </div>
      <div class="next">
        {/* <Link to="/taxi_booking_page_three">Next</Link> */}
        <Link to="#" onClick={onNavigateNext}>
          Next
        </Link>
      </div>
    </div>
  );
}
