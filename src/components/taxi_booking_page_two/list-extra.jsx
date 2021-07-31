import { useState } from "react";
import { Link } from "react-router-dom";

import { extrasList } from "./extras.data";
import { ExtraProvider, useExtraContext } from "../../context/extra-context";

export default function ListExtras() {
  const [extras, setExtras] = useState(extrasList);

  const handleExtraQuantity = (actionName, extraId) => {
    console.log("handle extra quantity", actionName, extraId);
  };

  return (
    <div class="page_two_section_two">
      <ExtraProvider value={{ onUpdateQty: handleExtraQuantity }}>
        <form>
          {extras.map((extra, i) => {
            if (i < 2) {
              return (
                <SingleExtra key={extra.id} hasQuantity={true} extra={extra} />
              );
            } else {
              return <SingleExtra key={extra.id} extra={extra} />;
            }
          })}
        </form>
      </ExtraProvider>

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

      <div class="continuous_btn">
        <div class="back">
          <Link to="/taxi_booking_page_one">Back</Link>
        </div>
        <div class="next">
          <Link to="/taxi_booking_page_three">Next</Link>
        </div>
      </div>
    </div>
  );
}

function SingleExtra({ extra, hasQuantity }) {
  const className = hasQuantity
    ? "page_two_extra_detail"
    : "page_two_extra_detail_parttwo";

  return (
    <div class={className}>
      <div class="page_two_extra">
        <span>
          <h2>{extra.name}</h2>
          <strong>${extra.price} </strong>
        </span>
        <small>{extra.description} </small>
      </div>
      {hasQuantity && <AddOrRemoveQuantity />}

      <div class="extra_select_btn">
        <button>Select</button>
      </div>
    </div>
  );
}

function AddOrRemoveQuantity() {
  const extraContext = useExtraContext();
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQty = () => {
    setQuantity((prevQty) => prevQty + 1);
    extraContext.onUpdateQty("increment", 1);
  };

  const handleDecrementQty = () => {
    setQuantity((prevQty) => {
      if (prevQty <= 1) return prevQty;
      return prevQty - 1;
    });
  };

  return (
    <div class="page_two_extra_quantity">
      <span>
        <i class="far fa-plus-square" onClick={handleIncrementQty}></i>
        <i class="far fa-minus-square" onClick={handleDecrementQty}></i>
      </span>
      <strong>{quantity}</strong>
    </div>
  );
}
